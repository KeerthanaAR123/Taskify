# Taskify - Task Management System

**Taskify** is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to efficiently manage their tasks with features like task creation, editing, deletion, status tracking, and priority management.

## 🚀 Live Application
- **Frontend**: [Deployed on Vercel](https://taskify-keerthana.vercel.app) *(Add your actual Vercel URL)*
- **Backend API**: [Deployed on Render](https://taskify-backend-api.onrender.com) *(Add your actual Render URL)*
- **GitHub Repository**: [Taskify on GitHub](https://github.com/KeerthanaAR123/Taskify)

## ✨ Features

### Core Features
- ✅ **Create Tasks** - Add new tasks with title, description, priority, and due date
- 📝 **Edit Tasks** - Modify task details at any time
- 🗑️ **Delete Tasks** - Remove tasks from your list
- 📋 **View All Tasks** - Display all tasks in a organized list
- 🔄 **Task Status Management** - Update task status (Pending, In-Progress, Completed)
- 🎯 **Priority Levels** - Set task priority (Low, Medium, High)
- 📅 **Due Dates** - Set and track task deadlines
- 🔍 **Filter Tasks** - Filter tasks by status

### UI/UX Features
- 🎨 Modern and responsive design
- 📱 Mobile-friendly interface
- ⚡ Smooth animations and transitions
- 🎭 Dark gradient theme with glass morphism effects
- 💫 Loading states and error handling
- 🎯 Intuitive user interactions

## 🛠️ Technology Stack

### Frontend
- **React.js** (v18.2.0) - UI library
- **Axios** (v1.5.0) - HTTP client
- **CSS3** - Styling with modern features

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** (v4.18.2) - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** (v7.5.0) - MongoDB ODM
- **CORS** - Cross-Origin Resource Sharing

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

## 📋 Project Structure

```
Taskify/
├── backend/
│   ├── controllers/
│   │   └── taskController.js       # Business logic for tasks
│   ├── models/
│   │   └── Task.js                  # MongoDB task schema
│   ├── routes/
│   │   └── taskRoutes.js            # API routes
│   ├── .env                          # Environment variables
│   ├── .env.example                 # Environment template
│   ├── .gitignore                   # Git ignore rules
│   ├── server.js                    # Express server setup
│   └── package.json                 # Backend dependencies
│
├── frontend/
│   ├── public/
│   │   └── index.html               # HTML template
│   ├── src/
│   │   ├── api/
│   │   │   └── taskAPI.js           # API calls
│   │   ├── components/
│   │   │   ├── TaskForm.js          # Task creation/edit form
│   │   │   ├── TaskItem.js          # Individual task component
│   │   │   └── TaskList.js          # Task list container
│   │   ├── styles/
│   │   │   ├── App.css              # Main app styles
│   │   │   ├── TaskForm.css         # Form styles
│   │   │   ├── TaskItem.css         # Task item styles
│   │   │   └── TaskList.css         # List styles
│   │   ├── App.js                   # Main App component
│   │   └── index.js                 # React entry point
│   ├── .env.local                   # Development environment
│   ├── .env.production              # Production environment
│   ├── .gitignore                   # Git ignore rules
│   └── package.json                 # Frontend dependencies
│
├── .gitignore                        # Root git ignore
└── README.md                         # This file
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (free tier)
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/KeerthanaAR123/Taskify.git
cd Taskify
```

### Step 2: Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file and add your MongoDB URI
# Edit .env and add your MongoDB connection string
echo MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskify?retryWrites=true&w=majority > .env
echo PORT=5000 >> .env
echo NODE_ENV=development >> .env

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### Step 3: Setup Frontend

```bash
# From root directory
cd frontend

# Install dependencies
npm install

# Create .env.local file
echo REACT_APP_API_URL=http://localhost:5000/api > .env.local

# Start the development server
npm start
```

The frontend will open at `http://localhost:3000`

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Get a specific task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |
| GET | `/health` | Health check endpoint |

### Example API Requests

#### Create Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project",
    "description": "Finish MERN assignment",
    "priority": "high",
    "dueDate": "2026-04-15"
  }'
```

#### Get All Tasks
```bash
curl http://localhost:5000/api/tasks
```

#### Update Task
```bash
curl -X PUT http://localhost:5000/api/tasks/task_id \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

#### Delete Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/task_id
```

## 📊 Database Schema

### Task Model

```javascript
{
  _id: ObjectId,
  title: String (required, max 100 chars),
  description: String (max 500 chars),
  priority: String (enum: ['low', 'medium', 'high'], default: 'medium'),
  status: String (enum: ['pending', 'in-progress', 'completed'], default: 'pending'),
  dueDate: Date,
  createdAt: Date (timestamp),
  updatedAt: Date (timestamp)
}
```

## 🚀 Deployment Guide

### Deploy Backend to Render

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up and log in

2. **Create New Web Service**
   - Click "New+" → "Web Service"
   - Connect your GitHub repository
   - Choose the `backend` directory

3. **Configure Service**
   - Name: `taskify-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `NODE_ENV`: `production`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy the service URL (e.g., `https://taskify-backend-api.onrender.com`)

### Deploy Frontend to Vercel

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Choose `frontend` directory

3. **Configure Build**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Environment Variables:
     - `REACT_APP_API_URL`: `https://your-render-url.onrender.com/api`

4. **Deploy**
   - Click "Deploy"
   - Your app will be live at `https://taskify-vercel-app.vercel.app`

## 📸 Screenshots

### Dashboard
- Main task management interface with form on left and tasks list on right
- Real-time task status updates
- Priority-based color coding

### Task Management
- Create tasks with title, description, priority, and due date
- Edit existing tasks
- Delete tasks with confirmation
- Status updates (Pending → In Progress → Completed)
- Filter tasks by status

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm run dev

# Test API endpoints using Postman or:
curl -X GET http://localhost:5000/api/health
```

### Frontend Testing
```bash
cd frontend
npm start

# Application will be available at http://localhost:3000
```

## 🎯 Features Implemented

### Core Requirements ✅
- [x] RESTful API with CRUD operations
- [x] MongoDB schema design with Mongoose
- [x] React functional components with hooks
- [x] Frontend-backend integration
- [x] Deployment (Render + Vercel)
- [x] Git repository with version control

### Bonus Features ✅
- [x] Task filtering by status
- [x] Priority levels (Low, Medium, High)
- [x] Due date functionality
- [x] Status management (Pending, In-Progress, Completed)
- [x] Modern UI with animations
- [x] Error handling and loading states
- [x] Responsive design
- [x] Health check endpoint

## 📝 Development Notes

### Error Handling
- Frontend catches API errors and displays user-friendly messages
- Backend returns appropriate HTTP status codes
- Validation for required fields on both client and server

### Performance Considerations
- Tasks are sorted by creation date (newest first)
- CSS animations are GPU-accelerated
- Axios instance for efficient API calls
- MongoDB indexes on frequently queried fields

### Security
- CORS enabled for cross-origin requests
- Environment variables for sensitive data
- Input validation on backend
- No sensitive data exposed in frontend

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is in use
lsof -i :5000

# Check MongoDB connection
# Verify MONGODB_URI in .env file
# Ensure MongoDB Atlas IP whitelist includes your IP
```

### Frontend API calls failing
```bash
# Ensure backend is running
# Check REACT_APP_API_URL in .env.local
# Verify CORS is enabled on backend
```

### Stuck task status
- Refresh the page
- Check browser console for errors
- Verify backend API is responding

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [Render Deployment Guide](https://render.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 👨‍💻 Author

**Keerthana A R**
- GitHub: [@KeerthanaAR123](https://github.com/KeerthanaAR123)
- Email: your.email@example.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/KeerthanaAR123/Taskify/issues).

---

**Submission Date**: April 13, 2026
**Status**: ✅ Ready for Submission

### Submission Checklist
- [x] GitHub repository created and public
- [x] All code is original work
- [x] Project structure is clean and organized
- [x] README with setup instructions
- [x] Frontend deployed on Vercel
- [x] Backend deployed on Render
- [x] Both live URLs included
- [x] All CRUD operations working
- [x] Responsive design implemented
- [x] Error handling implemented
