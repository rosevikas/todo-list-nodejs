<<<<<<< HEAD

# 📝 Full Stack To-Do List Application

This is a full-stack To-Do List web application built using **HTML, CSS, JavaScript, Node.js, Express, and MongoDB**. It allows users to manage their daily tasks with essential CRUD operations (Create, Read, Update, Delete) and task completion toggle.

## 🚀 Features

- Add new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Toggle task completion (mark as done/undone)
- Clean, responsive UI with a colorful design

## 🧠 Technologies Used

### Frontend
- HTML5
- CSS3 (with gradient styling and responsive layout)
- Vanilla JavaScript (DOM Manipulation, Event Handling)

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS, dotenv for configuration

## 📁 Project Structure

```
Todolist29-7/
├── backend/
│   ├── controllers/
│   │   └── todocontroller.js
│   ├── models/
│   │   └── todo.js
│   ├── router/
│   │   └── todorouter.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   └── todolist.html
│
├── package.json
└── README.md
```

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Setup Environment Variables

Create a `.env` file inside the `backend/` folder and add your MongoDB URI:

```env
MONGO_URI=mongodb://localhost:27017/todolist
```

### 4. Start the Server

```bash
node server.js
```

The backend server will run on `http://localhost:9000`.

### 5. Open the Frontend

Open `frontend/todolist.html` in your browser.

## 📌 API Endpoints

| Method | Endpoint                   | Description            |
|--------|----------------------------|------------------------|
| POST   | `/api/todos/add-item`      | Add a new todo         |
| GET    | `/api/todos/get-items`     | Get all todos          |
| DELETE | `/api/todos/delete-item/:id`| Delete a todo          |
| PUT    | `/api/todos/edit-item/:id` | Edit a todo            |
| PATCH  | `/api/todos/toggle-item/:id`| Toggle task completed  |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ using Node.js and MongoDB.
=======
# todo-list-nodejs
A full-stack To-Do List web app with CRUD operations built using Node.js, Express, HTML, CSS, and JavaScript.
>>>>>>> bbbe1e1b01ec70a9634ccf73d762877b071013db
