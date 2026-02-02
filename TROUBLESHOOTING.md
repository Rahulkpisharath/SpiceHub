# 🔧 Troubleshooting Guide

## Error: "GET http://localhost:3000/src/main.jsx 404 (Not Found)"

This error means the dependencies haven't been installed yet. Here's how to fix it:

### Solution:

#### Step 1: Install Dependencies
```bash
cd spice-ecommerce
npm install
```

Wait for all packages to install (this may take 1-2 minutes).

#### Step 2: Start Development Server
```bash
npm run dev
```

#### Step 3: Access the App
Open your browser and go to: `http://localhost:3000`

---

## Common Issues & Solutions

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/ (version 16 or higher)

### Issue: Port 3000 already in use
**Solution:** Either:
1. Stop the process using port 3000, OR
2. Edit `vite.config.js` and change the port:
```js
server: {
  port: 3001, // Change to any available port
  open: true
}
```

### Issue: "Cannot find module 'react'"
**Solution:** Dependencies not installed. Run:
```bash
npm install
```

### Issue: Blank white screen
**Solution:** Check browser console for errors. Make sure you ran `npm install` first.

### Issue: Changes not reflecting
**Solution:** 
1. Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server: Stop with `Ctrl+C`, then `npm run dev`

---

## Correct Setup Sequence

✅ **Correct Order:**
1. Extract/navigate to project folder
2. Run `npm install` (REQUIRED FIRST)
3. Run `npm run dev`
4. Open http://localhost:3000

❌ **Wrong Order:**
1. Run `npm run dev` without installing dependencies first ← This causes the 404 error

---

## Verify Installation

Run this to check everything is set up:

```bash
# Check Node.js
node --version    # Should show v16+ 

# Check npm
npm --version     # Should show 8+

# Check dependencies
npm list --depth=0   # Should show all packages installed
```

---

## Clean Installation

If you're still having issues, try a clean install:

```bash
# Remove old installations
rm -rf node_modules
rm package-lock.json

# Fresh install
npm install

# Start server
npm run dev
```

---

## Need More Help?

1. Check that you're in the correct directory: `spice-ecommerce/`
2. Make sure Node.js 16+ is installed
3. Ensure you have internet connection for npm install
4. Try running with administrator/sudo privileges if permission errors occur

---

## Quick Test

After running `npm install`, you should see a `node_modules` folder:

```bash
ls -la
# Should show:
# - node_modules/     ← This folder should exist
# - package.json
# - src/
# - index.html
# etc.
```

If `node_modules` doesn't exist, npm install didn't complete successfully.
