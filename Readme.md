
Roadmap for PHYTECH
Milestone 1 :- Git hub initilisation done for my capstone project. Milestone 2 :- get request done, in Controllers folder, productCController (get) request code written. GET /api/products Fetch all products available in the store. Request: GET /api/products get all products by the userId. Query Parameters (optional): category (string): Filter products by category. search (string): Search keyword. sort (string): Sort by price, name, etc. page (number): Pagination - page number.

limit (number): Number of products per page.

Milestone 3: Authentication, Product & Cart - POST APIs Milestone Summary: On Day 3, key backend functionalities were implemented for user authentication, product creation, and cart management. This milestone ensures that users can register, log in, add products (if authorized), and manage their shopping carts eatures Implemented: Authentication (/api/auth) POST /register — Registers a new user with username, email, and password. POST /login — Authenticates the user and returns a JWT token. All logic for authentication is handled inside controllers/authController.js

Product Management (/api/products) POST /add — Allows an authenticated seller/admin to add a new product. Handled in controllers/productController.js. POST /add — Adds one or more items to the user's cart.

Logic is modularized in controllers/cartController.js and connected via routes/cartRoutes.js

Milestone 4: PUT APIs — Role Upgrade, Product Update & Cart Quantity Management 🎯 Milestone Summary: On milestone 4, core PUT operations were integrated into the backend. These APIs allow secure modification of user roles, product details, and shopping cart quantities. This milestone reinforces user access control and enhances flexibility in managing cart and product data.

Features Implemented Authentication (/api/auth) PUT /upgrade-role — Secured endpoint to promote a user’s role (e.g., from user to seller/admin). 🔐 Protected Route: Requires JWT token. Logic managed in: controllers/authControllers.js Logic encapsulated in: controllers/cartController.js. Logic handled in: controllers/productControll.js.

deployed link :- https://backend-j6gi.onrender.com

Milestone 5 :- Modular and clean structure for Mongoose models

Schema definitions for MongoDB collections Easy integration into Express or other Node.js frameworks All Schema is in /Model folder which is inside the branch.

Milestone 6 :- Database read and write performed This project includes full implementation of database read and write functionalities. All necessary CRUD (Create, Read, Update, Delete) operations are handled with optimized, secure queries. Data persistence and retrieval are fully operational and tested for reliability and efficiency.

Key Features: Read Operations: Efficient retrieval of data with support for filtering and sorting. Write Operations: Safe and validated insertion of new records into the database. Update & Delete: Handled through robust logic to maintain data integrity.

Milestone 6 :- Using JWTs in application. In Authentication folder, JWT verify code is there, while the user loging in it will very it, and if the user want to upgrade the by the help of token he can Upgradre his role, 1st step to upgrade role verfication, the Upgrading the role.

Mileston2 7:- Initialized a scalable React frontend application with a clean project structure and modern development tooling. Front-end

Milestone 8:- Front-end Deployment link :- https://685bd4cc5eccb9e6840f1624--hilarious-puppy-bd6e3e.netlify.app/