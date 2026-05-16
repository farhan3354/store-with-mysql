StoreInSQL (Backend)

A lightweight Node.js backend for user management using MySQL.

## Tech stack

- Node.js + Express
- MySQL (mysql2)
- dotenv, bcryptjs, jsonwebtoken

## Project structure

- `backend/index.js` - app entry
- `backend/configs/databaseConnection.js` - MySQL pool
- `backend/controllers/userController.js` - handlers for user routes
- `backend/routes/userRoute.js` - user routes
- `backend/middleware/authMiddleware.js` - JWT verification
- `backend/database/userTable.js` - table create/update helpers

## Quick start

Prerequisites: Node.js (>=16), MySQL server

1. Install dependencies

```bash
cd backend
npm install
```

2. Create environment variables

Create a `.env` file in `backend/` with the following variables:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=laravel
JWT_SECRET=your_jwt_secret
```

3. Start the server

Run using Node or nodemon:

```bash
node index.js
# or
npx nodemon index.js
```

## Database setup

The project exposes helper functions to create or update the `users` table in `backend/database/userTable.js`.
Run them once from the app to ensure the table exists, or create the table manually with this SQL:

```sql
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL UNIQUE,
  password VARCHAR(25) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
ALTER TABLE users ADD COLUMN phone VARCHAR(25) NOT NULL AFTER email;
```

## API

Base path: `/` (see [backend/routes/userRoute.js](backend/routes/userRoute.js))

- Health check: `GET /` — returns a simple message
- Create user: `POST /create` — body: `{ name, email, phone, password }` (registers user and returns JWT)
- Get users: `GET /get` — returns all users

Notes:

- `backend/controllers/userController.js` also contains a `login` handler but it is not currently wired in `userRoute.js`.
- Protected routes should use `verifyToken` from `backend/middleware/authMiddleware.js`.

## Environment & troubleshooting

- Ensure MySQL is running and credentials in `.env` match.
- Database connection and pool are defined in [backend/configs/databaseConnection.js](backend/configs/databaseConnection.js).
- If the server logs `Database connected successfully` the DB connection is working.

## Contributing

- Open an issue or submit a PR for fixes and improvements.

## License

This project does not include a license. Add one if you plan to publish.
