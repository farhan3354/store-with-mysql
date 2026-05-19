# StoreInSQL Backend API

A full-stack backend API built with **Node.js, Express.js, and MySQL**, featuring:

- User Authentication (JWT)
- Category Management
- Product Management
- Cloudinary Image Uploads
- RESTful API Design

---

## Tech Stack

- Node.js
- Express.js
- MySQL (`mysql2`)
- JWT Authentication
- bcryptjs
- Multer
- Cloudinary
- dotenv

---

## Features

### User Authentication

- Register User
- Login User
- JWT Token Generation
- Protected Routes

### Category Management

- Add Category
- View All Categories
- Delete Category

### Product Management

- Add Product
- View Products
- Delete Products
- Category Relationship

### Image Upload

- Upload product images to **Cloudinary**
- Store image URLs in database

---

## Project Structure

```bash
backend/
│
├── configs/
│   └── databaseConnection.js
│
├── controllers/
│   ├── userController.js
│   ├── categoryController.js
│   └── productController.js
│
├── routes/
│   ├── userRoute.js
│   ├── categoryRoute.js
│   └── productRoute.js
│
├── middleware/
│   └── authMiddleware.js
│
├── database/
│   ├── userTable.js
│   ├── categoryTable.js
│   └── productTable.js
│
├── utils/
│   └── cloudinary.js
│
├── .env
├── index.js
└── package.json
```

---

## Installation

### 1. Clone repository

```bash
git clone https://github.com/yourusername/storeinsql.git
cd storeinsql/backend
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create `.env`

```env
PORT=8000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=laravel
DB_PORT=3306

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Run Project

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:8000
```

---

## API Endpoints

### User Routes

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | `/create` | Register User |
| POST   | `/login`  | Login User    |
| GET    | `/get`    | Get All Users |

---

### Category Routes

| Method | Endpoint               | Description     |
| ------ | ---------------------- | --------------- |
| POST   | `/category/create`     | Add Category    |
| GET    | `/category/get`        | Get Categories  |
| DELETE | `/category/delete/:id` | Delete Category |

---

### Product Routes

| Method | Endpoint              | Description    |
| ------ | --------------------- | -------------- |
| POST   | `/product/create`     | Add Product    |
| GET    | `/product/get`        | Get Products   |
| DELETE | `/product/delete/:id` | Delete Product |

---

## Database Tables

### Users

- id
- name
- email
- phone
- password

### Categories

- id
- category_name

### Products

- id
- name
- description
- price
- stock_quantity
- imageurl
- category_id

---

## Learning Outcomes

This project helped me practice:

- REST API Development
- MySQL Relationships
- JWT Authentication
- File Upload Handling
- Cloudinary Integration
- Backend Folder Structure
- Error Handling
- API Testing with Postman

---

## Future Improvements

- Update Product API
- Update Category API
- Product Search
- Pagination
- Admin Authorization
- Swagger Documentation

---

## Author

**Farhan Bashir**

GitHub: https://github.com/yourusername
