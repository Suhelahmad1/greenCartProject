# 🛒 GreenCart - Full Stack MERN Grocery E-Commerce Platform

GreenCart is a modern, responsive, and fully functional multi-vendor grocery e-commerce application built using the MERN stack. It allows users to browse and buy groceries, while empowering sellers to manage their products and orders effectively.

---

## 🚀 Live Demo
* **Frontend:** [Live Link](https://greencart-frontend-wine.vercel.app)
* **Backend API:** [Live Link](https://greencart-backend-chi-eight.vercel.app)

---

## ✨ Features

### 👤 User End
* **Authentication:** Secure user login/signup with cookie-based session management.
* **Product Discovery:** Browse groceries by categories and search functionality.
* **Shopping Cart:** Persistent cart state synchronized across sessions and stored securely in MongoDB.
* **Address Management:** Add, update, and manage delivery addresses.
* **Flexible Checkout:** 
  * 💵 Cash on Delivery (COD)
  * 💳 Online Payment integration using **Stripe Checkout**.
* **Order Tracking:** View order history and live order fulfillment status.

### 🏪 Seller / Admin Panel
* **Dedicated Dashboard:** Separate auth and layout specifically for sellers.
* **Inventory Control:** Add new products with high-quality images (powered by **Cloudinary**), edit details, and track stock counts.
* **Order Management:** View all user incoming orders, manage pending items, and update shipping statuses.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, Tailwind CSS, Axios, React Context API
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Mongoose ODM)
* **Cloud Storage:** Cloudinary (for product images)
* **Payment Gateway:** Stripe API & Stripe Webhooks

---

## 📁 Project Structure

```text
greenCartProject/
├── client/          # Frontend React application (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI elements
│   │   ├── context/     # AppContext for global state management
│   │   └── pages/       # Home, Cart, ProductDetail, Seller Dashboard, etc.
│   └── vercel.json      # Frontend deployment configuration
└── server/          # Backend Node/Express API
    ├── configs/         # Database, Cloudinary, and Multer setup
    ├── controllers/     # Core business logic (Orders, Cart, Products, Users)
    ├── models/          # Mongoose Schemas (User, Product, Order, Address)
    ├── routes/          # API Endpoints
    └── vercel.json      # Serverless deployment configuration
