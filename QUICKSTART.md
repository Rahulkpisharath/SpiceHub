# 🚀 Quick Start Guide - SpiceHub E-Commerce

## ⚠️ IMPORTANT: Read This First!

You **MUST** install dependencies before running the app, or you'll get a 404 error.

---

## Get Started in 4 Steps!

### Step 1: Navigate to Project Folder
```bash
cd spice-ecommerce
```

### Step 2: Install Dependencies (REQUIRED - Takes 1-2 minutes)
```bash
npm install
```

**⏳ Wait for this to complete!** You should see a `node_modules` folder created.

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
The app will automatically open at `http://localhost:3000`

---

## ❌ Common Error

**Error:** "GET http://localhost:3000/src/main.jsx 404"

**Cause:** You ran `npm run dev` without running `npm install` first.

**Fix:** 
1. Stop the server (Press `Ctrl+C`)
2. Run `npm install`
3. Wait for it to finish
4. Run `npm run dev` again

See **TROUBLESHOOTING.md** for more help.

---

## 🎯 What You'll See

### 🏠 Homepage (/)
- Beautiful hero section
- Featured products
- Full product catalog
- Search and filter functionality
- Category filters
- Sort options

### 🛍️ Product Page (/product/:id)
- Click any product to see details
- Add to cart
- Adjust quantity
- View related products

### 🛒 Cart (/cart)
- View cart items
- Adjust quantities
- See price calculations
- Mock checkout process

### ⚙️ Admin Dashboard (/admin)
- Manage all products
- Edit prices and discounts
- Update stock levels
- Add new products
- Delete products
- Toggle featured status

---

## 📱 Mobile-First Design

✅ Fully responsive on all devices
✅ Touch-optimized for mobile
✅ Desktop-enhanced experience
✅ Smooth animations and transitions

---

## 🎨 Key Features

### For Customers:
- Browse 10 premium spices
- Search products
- Filter by category
- Sort by price, name, rating
- View product details
- Add to cart
- Checkout process

### For Admins:
- Add new products
- Edit existing products
- Update prices instantly
- Manage discounts
- Control inventory
- Toggle featured products

---

## 💾 Data Persistence

All data is saved in your browser's localStorage:
- Product changes persist
- Cart items persist
- Works offline after first load

To reset data: Clear browser localStorage

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change color scheme

### Products
Edit `src/data/dummyProducts.js` to add/modify products

### Images
Replace Unsplash URLs with your own images

---

## 📦 Build for Production

```bash
npm run build
```

Files will be in `dist/` folder, ready to deploy!

---

## 🆘 Need Help?

Check **TROUBLESHOOTING.md** for common issues and solutions.

---

## 🌟 Enjoy building with SpiceHub! 🌶️
