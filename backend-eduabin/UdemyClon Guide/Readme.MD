# UdemyClon - Backend

#### Start virtual environment

`py -m venv venv`

#### Activate virtual environment
`.venv\Scripts\activate`

### Install dependencies
``pip install -r requirements.txt``

### Start services
``docker-compose up -d``

### Migrate database
``python manage.py makemigrations users courses``
``python manage.py migrate``

### Start Server
`(venv) py manage.py runserver`

------------
### Add dependencies
`pip freeze > requirements.txt`
