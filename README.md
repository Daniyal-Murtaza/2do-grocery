# To-Do Grocery Application

This is a simple To-Do Grocery application where users can create, update, and delete grocery items. The frontend is built using React JS, and the backend is developed with Django.

## Features

- Add grocery items
- Update existing items
- Delete items from the list
- View all items in a list

## Technologies Used

### Frontend
- React JS
- CSS

### Backend
- Django
- Django REST Framework
- SQLite (default database)

## Setup Instructions

### Prerequisites

- Node.js (for React frontend)
- Python 3.x (for Django backend)
- pip (Python package manager)
- virtualenv (recommended for Python environment management)

### Steps to Run the Application

1. **Clone the Project**
    ```bash
    git clone https://github.com/yourusername/2do-grocery.git
    cd 2do-grocery
    ```

2. **Navigate to the Project Directory**
    Inside the `grocery` folder, you will find two main directories:
    - `react_frontend`
    - `django_backend`

3. **Setting Up and Starting the Django Backend**

    - Navigate to the `django_backend` folder:
        ```bash
        cd django_backend
        ```

    - Create a virtual environment (recommended):
        ```bash
        python -m venv env
        ```

    - Activate the virtual environment:
        - On Windows:
            ```bash
            .\env\Scripts\activate
            ```
        - On macOS/Linux:
            ```bash
            source env/bin/activate
            ```

    - Install the required dependencies:
        ```bash
        pip install -r requirements.txt
        ```

    - Apply database migrations:
        ```bash
        python manage.py migrate
        ```

    - Create a superuser (optional, for accessing the Django admin panel):
        ```bash
        python manage.py createsuperuser
        ```

    - Start the Django development server:
        ```bash
        python manage.py runserver
        ```

4. **Setting Up and Starting the React Frontend**

    - Open a new terminal window/tab and navigate to the `react_frontend` folder:
        ```bash
        cd react_frontend
        ```

    - Install the required dependencies:
        ```bash
        npm install
        ```

    - Start the React development server:
        ```bash
        npm start
        ```

5. **Access the Application**

    - The Django backend will run at `http://localhost:8000/`
    - The React frontend will run at `http://localhost:3000/`

    Open your browser and go to `http://localhost:3000/` to start using the To-Do Grocery application.

## Folder Structure

```bash
grocery/
│
├── django_backend/   # Backend folder containing Django code
│   ├── manage.py
│   ├── myapp/        # Django app folder
│   ├── db.sqlite3    # SQLite database file
│   ├── requirements.txt
│   └── ...
│
└── react_frontend/   # Frontend folder containing React code
    ├── public/
    ├── src/
    ├── package.json
    └── ...
