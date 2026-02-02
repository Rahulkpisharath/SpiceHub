# SpiceHub - Spice E-Commerce Website

A modern, mobile-first e-commerce platform for selling premium spices and herbs, built with React, Tailwind CSS, and Vite.

## 🌟 Features

### Customer Features
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Product Catalog**: Browse spices with categories, search, and filtering
- **Product Details**: Detailed product pages with images, descriptions, ratings
- **Shopping Cart**: Add to cart, adjust quantities, view cart total
- **Discounts & Pricing**: Real-time discount calculations
- **Featured Products**: Highlighted products on homepage
- **Smart Navigation**: Breadcrumbs and easy navigation between pages

### Admin Features
- **Product Management**: Add, edit, and delete products
- **Quick Updates**: Inline editing of prices, discounts, and stock
- **Inventory Control**: Track and update stock quantities
- **Featured Product Toggle**: Mark products as featured
- **Discount Management**: Set and adjust product discounts
- **Category Management**: Organize products by categories

### Technical Features
- **React Context API**: Global state management for products and cart
- **Local Storage**: Persistent cart and product data
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first responsive styling
- **Mobile-First Design**: Optimized for mobile with desktop enhancements
- **No External Images**: Uses Unsplash CDN for demo images

## 📁 Project Structure

```
src/
├── context/
│   ├── ProductContext.jsx    # Product state management
│   └── CartContext.jsx        # Shopping cart state management
├── data/
│   └── dummyProducts.js       # Initial product data
├── pages/
│   ├── Shop.jsx               # Main shop page with products
│   ├── ProductPage.jsx        # Individual product details
│   ├── CartPage.jsx           # Shopping cart and checkout
│   └── AdminPage.jsx          # Admin dashboard
├── App.jsx                    # Main app component with routing
├── main.jsx                   # React entry point
└── index.css                  # Tailwind and custom styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or extract the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Responsive Design

### Mobile (< 640px)
- Single column product grid
- Collapsible filters
- Mobile-optimized navigation
- Touch-friendly buttons and inputs
- Compact cart view

### Tablet (640px - 1024px)
- 2-3 column product grid
- Side-by-side layout options
- Enhanced spacing

### Desktop (> 1024px)
- 4 column product grid
- Full sidebar layouts
- Hover effects and animations
- Desktop-optimized admin table view

## 🎨 Features Detail

### Shop Page
- Hero section with brand messaging
- Featured products carousel
- Search functionality
- Category filtering
- Sort options (price, name, rating, featured)
- Product grid with images, ratings, prices
- Discount badges
- Add to cart from listing

### Product Detail Page
- Large product images
- Detailed descriptions
- Star ratings and review counts
- Price with discount display
- Stock availability
- Quantity selector
- Add to cart
- Buy now (quick checkout)
- Related products section
- Breadcrumb navigation

### Cart Page
- Cart item listing with images
- Quantity adjustment
- Remove items
- Price calculations (subtotal, shipping, tax)
- Free shipping threshold indicator
- Checkout form
- Empty cart state

### Admin Dashboard
- Product list table view (desktop)
- Product cards view (mobile)
- Inline editing for quick updates
- Full edit form for detailed changes
- Add new products
- Delete products with confirmation
- Featured product toggle
- Category and stock management
- Discount percentage control

## 🛠️ Technology Stack

- **React 18**: UI library
- **React Router DOM 6**: Client-side routing
- **Tailwind CSS 3**: Utility-first CSS framework
- **Vite 5**: Fast build tool and dev server
- **Local Storage**: Data persistence

## 🎯 Key Components

### Context Providers

**ProductContext**: Manages all product-related state
- Product list
- Search and filtering
- Category selection
- Sorting
- CRUD operations

**CartContext**: Manages shopping cart state
- Cart items
- Add/remove/update items
- Cart calculations
- Persistent storage

## 💡 Usage Tips

### Admin Access
Navigate to `/admin` to access the admin dashboard. No authentication required in this demo.

### Data Persistence
- Product changes persist in localStorage
- Cart items persist across page refreshes
- Reset by clearing browser localStorage

### Adding Products
1. Go to Admin Dashboard
2. Click "Add New Product"
3. Fill in all required fields
4. Submit to add to catalog

### Managing Discounts
- Quick edit: Change discount % directly in product list
- Full edit: Use edit form for detailed changes
- Discounts automatically reflected in prices

## 🔄 Future Enhancements

Potential features to add:
- User authentication
- Backend API integration
- Payment gateway integration
- Product reviews and ratings system
- Wishlist functionality
- Order history
- Email notifications
- Advanced search and filters
- Image upload for products
- Multi-currency support
- Internationalization

## 📝 Notes

- This is a demo application for educational purposes
- No real payment processing
- Images are from Unsplash (free to use)
- Data is stored in browser localStorage
- No backend server required

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

Built with ❤️ and lots of spices 🌶️
