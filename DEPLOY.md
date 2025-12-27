# 🚀 Quick Deployment Guide

## Deploy to Vercel (Easiest Method)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository: `Ajay03072005/Portfolio_Ajay`
5. Configure:
   - Framework Preset: **Vite**
   - Root Directory: `pixel-pro-ajay`
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Step 3: Add Environment Variables
In Vercel project settings → Environment Variables:
```
VITE_EMAILJS_SERVICE_ID=service_qoukjje
VITE_EMAILJS_TEMPLATE_ID=template_k7pbtce
VITE_EMAILJS_PUBLIC_KEY=QMfnfHiP4Q3OE39ds
VITE_EMAILJS_REPLY_TEMPLATE_ID=template_pkffv15
```

### Step 4: Deploy
Click "Deploy" and wait 2-3 minutes.

Your portfolio will be live at: `https://your-project.vercel.app` 🎉

---

## Alternative: Netlify

1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub, select repository
4. Root Directory: `pixel-pro-ajay`
5. Add same environment variables
6. Deploy!

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
