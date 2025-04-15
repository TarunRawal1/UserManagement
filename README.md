# User Management System

This is a full-stack User Management System built using **React + Context and Reducers** for the frontend and **Node.js + Express + MongoDB** for the backend. The application supports complete CRUD operations along with user search functionality and frontend pagination.

---

## Features

### Frontend (React)

- **Create User**: Navigate to a form to input and save new user details.
- **Search User**: Perform a case-insensitive search for users by first or last name.
- **List Users**: Fetch and display all users from the backend.
- **Update User**: Edit and update existing user information based on their email.
- **Delete User**: Remove a user using their email address.

The homepage provides navigation links to each of these actions, styled using Tailwind CSS. UI elements feature hover effects and smooth transitions for a responsive experience.

---

## Pagination

Pagination is implemented in the **List Users** section of the React frontend.

- Pagination is handled on the **client side**.
- The full list of users retrieved from the backend is divided into pages.
- Controls for switching between pages are located in the **footer section** of the list view.
- Page state is managed via a global context (`Pagecontext`), ensuring a consistent experience across components.
- Pagination enhances usability by preventing long, scroll-heavy lists and giving users control over navigation.

---

## Backend (Node.js + Express + MongoDB)

- **POST `/user`**: Create a new user with first name, last name, email, role, and designation.
- **GET `/list`**: Retrieve a list of all users.
- **POST `/delete`**: Delete a user by their email.
- **POST `/update`**: Update user details using their email as a reference.
- **GET `/search?name=`**: Search for users by first or last name using a case-insensitive match.

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

---

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-management-system.git
cd user-management-system
```

#### 2. Set Up the Backend

```bash
cd node
npm install
```

Configure the MongoDB connection in `./MongoDB/mongoose.js`.

Start the backend server:

```bash
node index.js
```

Server runs at `http://localhost:5000`.

#### 3. Set Up the Frontend

```bash
cd react
npm install
npm start
```

React app runs at `http://localhost:3000`.

---

## API Endpoints Summary

| Method | Endpoint     | Description                |
|--------|--------------|----------------------------|
| POST   | `/user`      | Create a new user          |
| GET    | `/list`      | Get list of all users      |
| POST   | `/delete`    | Delete user by email       |
| POST   | `/update`    | Update user info by email  |
| GET    | `/search`    | Search users by name       |
