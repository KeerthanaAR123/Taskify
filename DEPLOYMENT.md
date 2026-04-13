# Deployment Checklist & Instructions

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All code is committed to Git
- [ ] Backend uses environment variables (no hardcoded values)
- [ ] Frontend API URL is set in environment variables
- [ ] Dependencies are installed locally and work
- [ ] No console errors when running locally
- [ ] MongoDB Atlas cluster is created
- [ ] GitHub repository is public
- [ ] README includes all required information

---

## 🚀 Step 1: Deploy Backend to Render

### Option A: Deploy from GitHub (Recommended)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub
   - Authorize Render to access your GitHub account

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Select repository: `KeerthanaAR123/Taskify`
   - Choose: Deploy from GitHub

3. **Configure Service**
   - **Name**: `taskify-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (optional: upgrade to paid for no spindown)

4. **Add Environment Variables**
   - Click "Add Environment Variable"
   - **Key**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string
   - Example: `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/taskify?retryWrites=true&w=majority`

5. **Add More Variables**
   - **Key**: `NODE_ENV`
   - **Value**: `production`

6. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (2-5 minutes)
   - Check logs for "✅ MongoDB connected successfully"
   - Copy your backend URL: `https://taskify-backend-xxxxx.onrender.com`

### Option B: Manual Deployment

1. Install Render CLI
2. Run: `render deploy`
3. Follow prompts

---

## 🎨 Step 2: Deploy Frontend to Vercel

### Option A: Deploy from GitHub (Recommended)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Authorize Vercel to access your GitHub account

2. **Import Project**
   - Click "Add New" → "Project"
   - Search for `Taskify` repository
   - Click "Import"

3. **Configure Project**
   - **Framework**: React
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: Keep default (build)
   - **Install Command**: `npm install`

4. **Add Environment Variables**
   - Click "Environment Variables"
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://your-render-backend-url.onrender.com/api`
   - **Environment**: Production + Preview + Development
   - Click "Save"

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment (1-3 minutes)
   - Get your frontend URL: `https://taskify-xxxxx.vercel.app`

### Option B: Vercel CLI

```bash
npm i -g vercel
cd frontend
vercel --prod
```

---

## ✅ Step 3: Update Frontend with Backend URL

After backend deployment:

1. **Update Frontend Environment Variable**
   - Go to Vercel Dashboard → Taskify project
   - Settings → Environment Variables
   - Update `REACT_APP_API_URL` with your Render URL
   - Redeploy frontend: Click "Deployments" → Re-run the latest one

2. **Or update .env.production**
   ```
   REACT_APP_API_URL=https://taskify-backend-xxxxx.onrender.com/api
   ```
   - Push to GitHub
   - Vercel will auto-redeploy

---

## 🔗 Step 4: Test Live Application

1. **Open Frontend URL**
   - Navigate to `https://taskify-xxxxx.vercel.app`

2. **Test Functionality**
   - Create a new task
   - Edit a task
   - Update task status
   - Delete a task
   - Check filters work

3. **Check Browser Console**
   - Open DevTools (F12)
   - Go to Console tab
   - Should be no red errors
   - Check Network tab for API calls

4. **Test API Directly**
   ```bash
   curl https://your-render-backend-url.onrender.com/api/health
   ```

---

## 📱 Step 5: Test on Mobile

- Open app on phone using frontend URL
- Ensure responsive design works
- Test all touch interactions
- Check forms work on mobile keyboard

---

## 🐛 If Deployment Fails

### Backend fails to start
1. Check Render logs: Dashboard → Select backend → Logs
2. Common issues:
   - Wrong MongoDB URI format
   - IP not whitelisted in MongoDB Atlas
   - Missing environment variables

### Frontend shows blank page
1. Check Vercel logs: Dashboard → Select frontend → Logs
2. Check browser console (F12) for errors
3. Verify API URL is correct
4. Test API endpoint manually with curl

### CORS error in browser
1. Ensure CORS is enabled in backend
2. Check API URL is correct in frontend .env
3. Verify backend is actually running

---

## 📊 Monitoring Deployed Apps

### Backend (Render)
- Go to render.com → Select project
- Check "Metrics" tab
- Monitor CPU, Memory, Response Time
- Free tier may go to sleep after 15 minutes of inactivity

### Frontend (Vercel)
- Go to vercel.com → Select project
- Check "Analytics" tab
- Monitor page performance
- View deployment history

---

## 🔄 Redeployment

### Deploy Code Changes

**Backend:**
- Push code to GitHub
- Render auto-redeploys from GitHub
- Check logs to verify

**Frontend:**
- Push code to GitHub
- Vercel auto-redeploys from GitHub
- Check deployment status

### Manual Redeployment

**Render Backend:**
- Dashboard → Select project → Click "Deploy" button

**Vercel Frontend:**
- Dashboard → Select project → Deployments → Re-run latest

---

## 🌐 Final URLs

After deployment, update these in your submission:

- **Frontend URL**: `https://taskify-xxxxx.vercel.app`
- **Backend URL**: `https://taskify-backend-xxxxx.onrender.com`
- **GitHub URL**: `https://github.com/KeerthanaAR123/Taskify`

---

## 📝 Submission Requirements

Ensure your README includes:
- [ ] Live frontend URL (Vercel)
- [ ] Live backend URL (Render)
- [ ] GitHub repository link
- [ ] Project overview
- [ ] Setup instructions
- [ ] Features list
- [ ] Technology stack
- [ ] Deployment instructions

---

## ⏰ Before 9 PM Deadline

- [ ] Code finalized and committed
- [ ] Backend deployed on Render
- [ ] Frontend deployed on Vercel
- [ ] Live URLs tested and working
- [ ] README updated with live URLs
- [ ] GitHub repository is public
- [ ] No hardcoded sensitive data
- [ ] All features tested

---

## 🎉 Success Indicators

✅ Task created successfully
✅ Task appears in list
✅ Can edit task
✅ Can delete task
✅ Can change status
✅ No console errors
✅ Responsive on mobile
✅ API endpoints return correct status codes

---

## 📞 Support Resources

- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- GitHub Help: https://docs.github.com

