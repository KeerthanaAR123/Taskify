# MongoDB Atlas Setup Instructions

## Steps to Create MongoDB Database

### 1. Create MongoDB Account
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Click "Sign Up"
- Fill in email, password, and create account
- Verify your email

### 2. Create a New Project
- After login, click "Create a New Project"
- Project Name: "Taskify" (or your preference)
- Click "Create Project"

### 3. Create a Cluster
- Click "Build a Database"
- Select "M0 Free" tier (free forever)
- Select your region (choose closest to your location)
- Click "Create Cluster"
- Wait 2-3 minutes for cluster to be created

### 4. Create Database User
- Go to "Security" → "Database Access"
- Click "Add New Database User"
- Username: `taskify_user` (or your choice)
- Password: Generate strong password (save this!)
- Select "Built-in Role" → "Atlas admin"
- Click "Add User"

### 5. Set IP Whitelist
- Go to "Security" → "Network Access"
- Click "Add IP Address"
- Select "Add Current IP Address" (for development)
- For production: Add "0.0.0.0/0" (allows all IPs)
- Click "Confirm"

### 6. Get Connection String
- Go back to "Databases"
- Click "Connect" on your cluster
- Select "Connect your application"
- Copy the connection string
- Replace `<username>` and `<password>` with your database user credentials
- Replace `myFirstDatabase` with `taskify`

### 7. Update Environment Variable
In `backend/.env`:
```
MONGODB_URI=mongodb+srv://taskify_user:your_password@cluster0.xxxxx.mongodb.net/taskify?retryWrites=true&w=majority
```

## Testing Connection
```bash
cd backend
npm install
npm run dev
```

Check console for "✅ MongoDB connected successfully"

## Troubleshooting

### Connection Refused
- Verify IP address is whitelisted
- Check username and password in connection string
- Ensure cluster is running

### Authentication Failed
- Double-check username and password
- Ensure special characters are URL-encoded
- Verify database user is created

### Connection Timeout
- Check network connectivity
- Verify cluster is running
- Try adding IP 0.0.0.0/0 temporarily

## Free Tier Limits
- 512 MB storage
- 100,000 operations per 10 minutes
- 1GB total data per namespace
- Suitable for development and testing

Perfect for this MERN Stack project!
