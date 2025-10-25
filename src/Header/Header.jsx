import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HugeiconsTree01 } from "../assets/Icons/HugeIconsTree01";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice/cartSlice";
import { ShoppingCart } from "lucide-react";

function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    // <Link to="/" className="">
    //   <div>
    //     <HugeiconsTree01 />
    //   </div>
    //   <div>
    //     <h3>Paradise Nursery</h3>
    //     <p>where green meets serenity</p>
    //   </div>
    // </Link>
    <header className="bg-green-600 text-white flex justify-between items-center px-6 py-4 shadow">
      <Link to="/" className="flex gap-6">
        <div className="bg-white p-3 w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
          <HugeiconsTree01 />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Paradise Nursery</h1>
          <p className="text-sm italic">Where Green Meets Serenity</p>
        </div>
      </Link>

      <div className="w-80">
        <h2 className="text-3xl text-white capitalize">plants</h2>
      </div>

      <nav>
        <Link
          to="/cart-detail"
          className="relative flex items-center gap-2 text-white hover:text-gray-200 transition"
        >
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        </Link>
      </nav>
    </header>
    // <NavLink to="cart-detail">
    //   <div>
    //     <MaterialSymbolsShoppingCartOutlineRounded />
    //   </div>
    // </NavLink>
  );
}

export default Header;
