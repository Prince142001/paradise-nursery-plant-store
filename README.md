# 🪴 Paradise Nursery – Plant Store

A responsive React-based eCommerce application built to explore and practice **React**, **Redux Toolkit**, and **React Router DOM**.  
Users can browse plants, add them to the cart, manage quantities, and view cart totals with a smooth shopping experience.

---

## 🚀 Features
- 🌿 View a collection of plants (Air Purifying, Aromatic, etc.)
- 🛒 Add products to cart with quantity control (increase/decrease)
- 💰 View total cart amount dynamically
- 🧾 Remove individual items or clear the entire cart
- 🔢 Real-time cart item count displayed in the header
- ⚡ Smooth page navigation with React Router
- 🎨 Clean and responsive UI built with Tailwind CSS

---

## 🛠️ Tech Stack
- **React.js** – Frontend framework  
- **Redux Toolkit** – State management for cart system  
- **React Router DOM** – Client-side routing  
- **Tailwind CSS** – Modern utility-first CSS framework  
- **JavaScript (ES6+)** – Core scripting  
- **Git** – Version control  

---

## ⚙️ Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prince142001/Paradise-Nursery.git
   cd Paradise-Nursery
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Open in browser**
   ```bash
   Visit → http://localhost:5173
   ```
## 🧩 Project Structure
src/ <br>
├── assets/               # Images and icons <br>
├── components/           # Reusable UI components <br>
├── pages/ <br>
│   ├── ProductPage.jsx   # Displays all plant products <br>
│   └── CartDetail.jsx    # Displays cart items and checkout <br>
├── redux/ <br>
│   └── cartSlice/        # Redux Toolkit slice for cart state <br>
├── App.jsx               # Main app component with routes <br>
└── main.jsx              # Entry point <br>

## 🧠 Redux Functionality

- **addItem**: Adds a product to the cart or increases its quantity if already added
- **removeItem**: Removes a specific item from the cart
- **increaseQty**: Increases the quantity of a specific product
- **decreaseQty**: Decreases the quantity and removes item if quantity hits zero
- **clearCart**: Empties the entire cart

## 📸 Screenshots
## 🏠 Product Page
Displays all available plants with price, description, SALE tag, and "Add to Cart" button.

## 🛍️ Cart Page
Shows all added items with product image, price, quantity controls, total amount, and checkout button.

## 📌 Notes

- Data is currently static (defined within components).

## 👨‍💻 Author

Prince Vishwakarma
🌐 ZoneToCode

📧 Contact: [prince.pv.14.2000@gmail.com]
