from django.urls import path
from .views import item_list, add_item, update_item, delete_item, api_root

urlpatterns = [
    path('', api_root),
    path('items/', item_list),
    path('add-item/', add_item),
    path('item/<int:id>/update/', update_item),
    path('item/<int:id>/delete/', delete_item),
]
