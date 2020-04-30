# Backend
## Details

The backend of this project was created using Python Flask. This is a tool that we can use to navigate through the different web pages of our site, as well as provide acccess to encryption tools to ensure security, and communicate with our database. 

## Packages
To run this project, the following packages are required through pip. 

flask
flask_sqlalchemy
flask_migrate
flask_login
flask_wtf
wtforms
werkzeug
hashlib

## Running

While in the backend directory, the server can be started using *flask run*. This will start the server on a random localhost port. To specify the port and address, you can instead type, *flask run --host=X.X.X.X--port=XXXX*. This will start the server, and can be accessed from the given port and address. Navigating to this will bring the user to the login page. From here, the user can either log in, or register a new account. 

