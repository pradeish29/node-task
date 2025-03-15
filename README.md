# Node.js CRUD API with Express & MongoDB

## Overview
This project is a simple **CRUD API** built using **Node.js, Express, and MongoDB**. It manages user records where each user has a manually assigned **AID** instead of MongoDB's default `_id`. Users can be created, retrieved, updated, and deleted.

## Features
- **Create** a new user with a manually assigned `AID`
- **Retrieve** all users or a specific user by `AID`
- **Update** user details by `AID`
- **Delete** a user by `AID`

## Tech Stack
- **Node.js** - Server-side runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/pradeish29/node-task.git
cd node-task
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/dbname
PORT=3000
```

### 4. Run the Server
```sh
npm start
```

The API will run on **`http://localhost:3000`** (or the configured port).

---
## API Endpoints

### 1. Get All Users
```http
GET /users
```
Response:
```json
[
    {
        "AID": 25001,
        "name": "Manikandan",
        "email": "manikandan@kaar.com",
        "zone": "MENA",
        "role": "Intern",
        "department": "DeepTech"
    }
]
```

### 2. Get User by AID
```http
GET /users/:AID
```
Example:
```http
GET /users/25001
```

Response:
```json
{
    "AID": 25001,
    "name": "Manikandan",
    "email": "manikandan@kaar.com",
    "zone": "MENA",
    "role": "Intern",
    "department": "DeepTech"
}
```

### 3. Create a User
```http
POST /users
```
Request Body:
```json
{
    "AID": 25002,
    "name": "Karthick",
    "email": "karthick@kaar.com",
    "zone": "MENA",
    "role": "Intern",
    "department": "BuySide"
}
```
Response:
```json
{
    "message": "User created successfully"
}
```

### 4. Update a User
```http
PUT /users/:AID
```
Example:
```http
PUT /users/25002
```
Request Body:
```json
{
    "role": "Manager"
}
```

### 5. Delete a User
```http
DELETE /users/:AID
```
Example:
```http
DELETE /users/25002
```
Response:
```json
{
    "message": "User deleted successfully"
}
```

## Contributing
Feel free to fork this repo and submit pull requests! 🚀

## License
This project is licensed under the MIT License.

