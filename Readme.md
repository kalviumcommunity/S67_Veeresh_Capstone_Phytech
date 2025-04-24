# Roadmap for PHYTECH
day 1 :- Git hub initilisation done for my capstone project.
day 2 :- get request done, in Controllers folder, productCController (get) request code written.
GET /api/products
Fetch all products available in the store.
Request:
GET /api/products
get all products by the userId.
Query Parameters (optional):
category (string): Filter products by category.
search (string): Search keyword.
sort (string): Sort by price, name, etc.
page (number): Pagination - page number.

limit (number): Number of products per page.


Day 3: Authentication, Product & Cart - POST APIs
Milestone Summary:
On Day 3, key backend functionalities were implemented for user authentication, product creation, and cart management. This milestone ensures that users can register, log in, add products (if authorized), and manage their shopping carts
eatures Implemented:
Authentication (/api/auth)
POST /register — Registers a new user with username, email, and password.
POST /login — Authenticates the user and returns a JWT token.
All logic for authentication is handled inside controllers/authController.js

Product Management (/api/products)
POST /add — Allows an authenticated seller/admin to add a new product.
Handled in controllers/productController.js.
POST /add — Adds one or more items to the user's cart.

Logic is modularized in controllers/cartController.js and connected via routes/cartRoutes.js

Day 4 :- PUT /cart/update – Update Quantity of a Product in the User’s Cart
Updates the quantity of a specific product in the user's cart.
Day 4: PUT APIs — Role Upgrade, Product Update & Cart Quantity Management
🎯 Milestone Summary:
On Day 4, core PUT operations were integrated into the backend. These APIs allow secure modification of user roles, product details, and shopping cart quantities. This milestone reinforces user access control and enhances flexibility in managing cart and product data.

Features Implemented
Authentication (/api/auth)
PUT /upgrade-role — Secured endpoint to promote a user’s role (e.g., from user to seller/admin).
🔐 Protected Route: Requires JWT token.
Logic managed in: controllers/authControllers.js
Logic encapsulated in: controllers/cartController.js.
Logic handled in: controllers/productControll.js.

Deployment link :- https://backend-j6gi.onrender.com
