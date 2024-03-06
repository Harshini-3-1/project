Recipe Sharing Platform API
This API allows users to perform CRUD operations on recipes and manage their profiles. It is built using Node.js, Express.js, and MongoDB, and incorporates Object-Oriented Programming (OOP) concepts.

Setting Up the API
Clone the repository: git clone https://github.com/your-username/recipe-sharing-api.git
Install dependencies: npm install
Start the server: node app.js
The API will be available at http://localhost:3000
API Endpoints
User Routes
Register User
Endpoint: /register
Method: POST
Request Body: { "username": "your_username", "password": "your_password" }
Response: { "user": { "username": "your_username" }, "token": "your_token" }
Login User
Endpoint: /login
Method: POST
Request Body: { "username": "your_username", "password": "your_password" }
Response: { "user": { "username": "your_username" }, "token": "your_token" }
Recipe Routes
Get All Recipes
Endpoint: /recipes
Method: GET
Response: Array of recipe objects
Create Recipe
Endpoint: /recipes
Method: POST
Request Body: { "title": "recipe_title", "description": "recipe_description", "ingredients": ["ingredient1", "ingredient2"], "instructions": ["step1", "step2"] }
Response: Created recipe object
Update Recipe
Endpoint: /recipes/:id
Method: PUT
Request Body: { "title": "new_title", "description": "new_description", "ingredients": ["new_ingredient1", "new_ingredient2"], "instructions": ["new_step1", "new_step2"] }
Response: Updated recipe object
Delete Recipe
Endpoint: /recipes/:id
Method: DELETE
Response: Deleted recipe object
Example API Usage
User Authentication
Register
bash
Copy code
curl -X POST http://localhost:3000/register -d '{"username": "john_doe", "password": "password123"}' -H 'Content-Type: application/json'
Login
bash
Copy code
curl -X POST http://localhost:3000/login -d '{"username": "john_doe", "password": "password123"}' -H 'Content-Type: application/json'
Recipe Management
Create Recipe
bash
Copy code
curl -X POST http://localhost:3000/recipes -d '{"title": "Pasta Carbonara", "description": "A classic Italian dish", "ingredients": ["pasta", "eggs", "bacon"], "instructions": ["Cook pasta", "Fry bacon", "Mix eggs with pasta and bacon"]}' -H 'Content-Type: application/json' -H 'Authorization: Bearer your_token'
Update Recipe
bash
Copy code
curl -X PUT http://localhost:3000/recipes/recipe_id -d '{"title": "Spaghetti Carbonara"}' -H 'Content-Type: application/json' -H 'Authorization: Bearer your_token'
Delete Recipe
bash
Copy code
curl -X DELETE http://localhost:3000/recipes/recipe_id -H 'Authorization: Bearer your_token'
Object-Oriented Programming (OOP) Concepts
Encapsulation
The User and Recipe classes encapsulate data and methods related to users and recipes, respectively.
This allows for better organization and separation of concerns, making the codebase more maintainable and scalable.
Inheritance
Inheritance is not explicitly used in this project, but it could be applied in future iterations to create more specialized classes, such as different types of recipes or users with specific roles.
Polymorphism
Polymorphism is demonstrated in the different methods of the User and Recipe classes, which can be called interchangeably but behave differently based on the context.
For example, the save method of the User class saves a new user to the database, while the save method of the Recipe class saves a new recipe.
Benefits of OOP in the Project
Modularity: Classes allow for modular code, making it easier to add new features or modify existing ones.
Code Reusability: OOP promotes code reuse through inheritance and polymorphism, reducing duplication and improving maintainability.
Encapsulation: Encapsulation hides the internal state of objects, preventing direct manipulation and ensuring data integrity.
Organization: OOP provides a clear structure for organizing code, making it easier to understand and maintain.
