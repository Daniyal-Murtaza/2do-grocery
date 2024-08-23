from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Item
import json

def api_root(request):
    return JsonResponse({
        'message': 'Welcome to the API root.',
        'available_endpoints': [
            '/api/items/',
            '/api/add-item/',
            '/api/item/<id>/update/',
            '/api/item/<id>/delete/',
        ]
    })

def item_list(request):
    items = list(Item.objects.values())
    return JsonResponse(items, safe=False)

@csrf_exempt
def add_item(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        new_item = Item.objects.create(name=data['name'])
        return JsonResponse({'id': new_item.id, 'name': new_item.name})

@csrf_exempt
def update_item(request, id):
    if request.method == 'PUT':
        data = json.loads(request.body)
        try:
            item = Item.objects.get(id=id)
            item.name = data['name']
            item.save()
            return JsonResponse({'id': item.id, 'name': item.name})
        except Item.DoesNotExist:
            return JsonResponse({'error': 'Item not found'}, status=404)

@csrf_exempt
def delete_item(request, id):
    if request.method == 'DELETE':
        try:
            item = Item.objects.get(id=id)
            item.delete()
            return JsonResponse({'message': 'Item deleted'})
        except Item.DoesNotExist:
            return JsonResponse({'error': 'Item not found'}, status=404)
