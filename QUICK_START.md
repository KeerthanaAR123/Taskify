# Quick Start Guide - Local Development

## Prerequisites
- Node.js 14+ installed
- MongoDB connection string (from MongoDB Atlas)
- Code editor (VS Code recommended)

## 🚀 Start Backend (Terminal 1)

```bash
cd backend

# Install dependencies
npm install

# Create .env file with your MongoDB URI
# On Windows (PowerShell):
echo "MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskify?retryWrites=true&w=majority" > .env
echo "PORT=5000" >> .env
echo "NODE_ENV=development" >> .env

# Start development server
npm run dev

# Wait for message:
# ✅ MongoDB connected successfully
# 🚀 Server running on port 5000
```

Backend will be available at: `http://localhost:5000`

---

## 🚀 Start Frontend (Terminal 2)

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env.local

# Start React development server
npm start

# Browser will open automatically at http://localhost:3000
```

Frontend will be available at: `http://localhost:3000`

---

## ✅ Testing the Application

### 1. Open Browser
- Go to `http://localhost:3000`

### 2. Create a Task
- Enter task title: "Learn MERN Stack"
- Add description: "Complete the internship assignment"
- Set priority: "High"
- Set due date: Tomorrow's date
- Click "Create Task" button

### 3. View Your Task
- Task appears in the list on the right
- See priority badge and due date

### 4. Update Task Status
- Click status buttons (⭕ Pending, 🔄 In-Progress, ✅ Completed)
- Watch status update in real-time

### 5. Edit a Task
- Click ✏️ Edit icon
- Modify task details
- Click "Update Task"

### 6. Delete a Task
- Click 🗑️ Delete icon
- Confirm deletion
- Task removed from list

---

## 🔍 API Testing with curl

### Create Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","description":"Testing API","priority":"medium"}'
```

### Get All Tasks
```bash
curl http://localhost:5000/api/tasks
```

### Update Task
```bash
curl -X PUT http://localhost:5000/api/tasks/{TASK_ID} \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'
```

### Delete Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/{TASK_ID}
```

### Health Check
```bash
curl http://localhost:5000/api/health
```

---

## 🛑 Stopping the Servers

### Backend
- Press `Ctrl + C` in Terminal 1

### Frontend
- Press `Ctrl + C` in Terminal 2

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Find process using port 5000
lsof -i :5000

# Find process using port 3000
lsof -i :3000

# Kill process (replace PID with actual process ID)
kill -9 <PID>
```

### MongoDB connection error
- Verify MongoDB URI in `.env`
- Check if IP is whitelisted in MongoDB Atlas
- Ensure password is URL-encoded if it contains special characters

### CORS error in console
- Ensure backend is running on port 5000
- Check REACT_APP_API_URL in frontend .env.local

### Blank page or 404
- Check if frontend is running (port 3000)
- Open browser developer console (F12) to see errors
- Check network tab to verify API calls

---

## 📝 Development Tips

### Auto-restart backend on file changes
- Already configured with `nodemon`
- Edit `backend/controllers/taskController.js` and save
- Backend will automatically restart

### Hot reload frontend
- React automatically refreshes when you save changes
- Edit `frontend/src/App.js` and save
- Changes appear instantly in browser

### Debug API calls
- Open browser DevTools (F12)
- Go to "Network" tab
- Create/update/delete tasks
- Click on requests to see full details

### Check console logs
- Backend: Look at Terminal 1 for console.log output
- Frontend: Open browser console (F12) to see frontend logs

---

## ✨ Next Steps

1. **Test all features** locally
2. **Set up MongoDB** - Follow MONGODB_SETUP.md
3. **Deploy Backend** to Render
4. **Deploy Frontend** to Vercel
5. **Test Live Application**
6. **Submit on GitHub**

