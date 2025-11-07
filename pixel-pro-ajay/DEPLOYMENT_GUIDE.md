# 🚀 Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

✅ **Completed Items:**
- [x] All dependencies installed
- [x] Environment variables configured (.env file)
- [x] Custom favicon added
- [x] All assets present (images, PDFs)
- [x] EmailJS configured
- [x] Build scripts ready
- [x] Deployment configs added (Vercel, Netlify)

⚠️ **Before Deploying:**
1. Test the build locally: `npm run build && npm run preview`
2. Ensure `.env` variables are ready to add to hosting platform
3. Push all changes to GitHub

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Fastest & Easiest)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: **Vite**
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. **Add Environment Variables**
   In Vercel dashboard → Settings → Environment Variables, add:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_REPLY_TEMPLATE_ID=your_reply_template_id
   ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`
   - You can add a custom domain in settings

---

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings (auto-detected from `netlify.toml`):
     - Build Command: `npm run build`
     - Publish Directory: `dist`

3. **Add Environment Variables**
   In Netlify dashboard → Site settings → Environment variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_REPLY_TEMPLATE_ID=your_reply_template_id
   ```

4. **Deploy**
   - Netlify will automatically deploy
   - Your site will be live at `your-site.netlify.app`

---

### Option 3: GitHub Pages

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to scripts section:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.ts**
   Add base path:
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`

---

### Option 4: Render

1. **Push to GitHub**

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Click "New" → "Static Site"
   - Connect your repository
   - Configure:
     - Build Command: `npm run build`
     - Publish Directory: `dist`

3. **Add Environment Variables** in Render dashboard

4. **Deploy** - Render will build and deploy automatically

---

## 🔧 Local Build Testing

Before deploying, test your production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

This will create a `dist` folder with optimized production files and serve them locally at `http://localhost:4173`

---

## 📝 Environment Variables Needed

Make sure to add these on your hosting platform:

```env
VITE_EMAILJS_SERVICE_ID=service_qoukjje
VITE_EMAILJS_TEMPLATE_ID=template_k7pbtce
VITE_EMAILJS_PUBLIC_KEY=QMfnfHiP4Q3OE39ds
VITE_EMAILJS_REPLY_TEMPLATE_ID=template_pkffv15
```

⚠️ **Important:** Never commit `.env` file to GitHub! It's already in `.gitignore`

---

## 🎯 Post-Deployment Steps

1. **Test Contact Form** - Send a test email to verify EmailJS works
2. **Check All Links** - Ensure GitHub project links work
3. **Test Resume Download** - Verify PDF downloads correctly
4. **Mobile Testing** - Check responsiveness on different devices
5. **SEO Check** - Verify meta tags are loading
6. **Performance** - Run Lighthouse audit in Chrome DevTools

---

## 🔄 Updating Your Site

After deployment, any push to your main branch will trigger automatic redeployment on Vercel/Netlify/Render.

```bash
# Make changes
git add .
git commit -m "Your update message"
git push origin main
```

Your site will automatically rebuild and redeploy! 🎉

---

## 🆘 Troubleshooting

**Build fails?**
- Check if all dependencies are in `package.json`
- Verify Node version (use v18 or higher)
- Check build logs for specific errors

**Contact form not working?**
- Verify environment variables are set correctly
- Check EmailJS dashboard for API limits
- Ensure template IDs match

**Images not loading?**
- Check image paths (should be relative)
- Verify all images are in `src/assets` folder
- Clear browser cache

**404 on page refresh?**
- Ensure `vercel.json` or `netlify.toml` is present
- Check redirect rules are configured

---

## 📊 Recommended: Vercel

**Why Vercel?**
- ✅ Easiest setup for React/Vite projects
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Global CDN for fast loading
- ✅ Preview deployments for PRs
- ✅ Easy environment variable management
- ✅ Custom domain support

---

## 🎉 You're Ready to Deploy!

Choose your preferred platform and follow the steps above. Good luck! 🚀
