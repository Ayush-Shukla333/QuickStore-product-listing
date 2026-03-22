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

## Screenshots
<img width="1809" height="803" alt="image" src="https://github.com/user-attachments/assets/72d417d9-d936-4420-bac3-96479d4fbed6" />

<img width="1729" height="831" alt="Screenshot 2026-03-22 125151" src="https://github.com/user-attachments/assets/e3944dc0-6f9d-4061-95b2-280b811f7689" />

<img width="1809" height="803" alt="Screenshot 2026-03-22 125212" src="https://github.com/user-attachments/assets/21e37f2f-63ca-4bf0-8675-b0cd727c62c0" />




## Author
Ayush Shukla (Front End Developer)
