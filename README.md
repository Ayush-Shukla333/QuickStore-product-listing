# 🛍️ QuickStore - Product Listing Web App

A responsive product listing web application built using React (Vite) that integrates the Fake Store API to display real-time product data. The app allows users to browse products, search by title, filter by category, and view detailed product information with a clean and modern UI.

---

## 🚀 Live Demo
https://quickstore-green.vercel.app/

---

## ✨ Features

-  Product listing with image, title, price, and category  
-  Search functionality to filter products by title  
-  Category-based filtering  
-  Product details page with dynamic routing  
-  API integration using Axios  
-  Loading spinner and error handling  
-  Fully responsive design (mobile, tablet, desktop)  
-  Dark mode / Light mode toggle  

---

## 🛠️ Tech Stack

- **React.js** – Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** – Styling and responsive UI  
- **React Router DOM** – Client-side routing  
- **Axios** – API handling  
- **JavaScript (ES6+)** – Core logic  
- **Fake Store API** – Data source  

---

## 📁 Project Structure
src/
├── components/
│   ├── ProductList.jsx     # Renders product grid
│   ├── ProductCard.jsx     # Single product tile
│   ├── SearchBar.jsx       # Search input
│   ├── Filter.jsx          # Category based
│   ├── Spinner.jsx         # Loading indicator
│   └── ErrorMessage.jsx    # Error display
├── pages/
│   └── ProductDetails.jsx  # Full product detail page
├── services/
│   └── api.js              # All API calls (getProducts, getCategories, getProductById)
├── App.jsx                 # Root component, routing, global state
└── main.jsx                # Entry point with BrowserRouter and context providers

---

## Author
Ayush Shukla (Front End Developer)
