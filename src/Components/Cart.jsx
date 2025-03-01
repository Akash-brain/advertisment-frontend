import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext"; // Adjusted import to the correct context path
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, addToCart } = useCart(); 
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    setQuantities(cart.map(() => 1)); 
  }, [cart]); 

  // Update quantity handler
  const updateQuantity = (index, value) => {
    const numericValue = parseInt(value, 10); // Convert the value to an integer
    const newQuantities = [...quantities];
    newQuantities[index] =
      isNaN(numericValue) || numericValue < 1 ? 1 : numericValue;
    setQuantities(newQuantities);
  };

  // Calculate Subtotal
  const calculateSubtotal = () => {
    return cart.reduce(
      (total, product, index) =>
        total + product.price * Number(quantities[index]),
      0
    );
  };

  return (
    <div id="cart-section" className="p-6 bg-gray-50 mt-24">
      {/* Shopping Cart Header */}
      <h1 className="text-3xl font-bold mb-4 text-center">Cart Items</h1>

      {/* Cart Items */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Cart Summary */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <p className="text-sm text-gray-600">
            You have{" "}
            <span className="font-semibold">{cart.length} services</span> in
            your cart.
          </p>
        </div>

        {/* Product List */}
        {cart.length === 0 ? (
          <p className="text-center">
            Your cart is empty.
          </p>
        ) : (
          cart.map((product, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b last:border-b-0"
            >
              {/* Service Details */}
              <div className="flex items-center gap-4 w-1/3">
                <img
                  src={product.imageUrl || "https://via.placeholder.com/60"} // Image or placeholder
                  alt="Service"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    {product.category}
                  </p>
                  <p className="text-xs text-gray-500">Description</p>
                </div>
              </div>

              {/* Price */}
              <p className="w-1/6 text-center text-sm text-gray-700">
                ₹{product.price}
              </p>

              {/* Quantity Selector */}
              <div className="w-1/6 text-center">
                <input
                  type="number"
                  min="1"
                  value={quantities[index] || 1}
                  onChange={(e) => updateQuantity(index, e.target.value)}
                  className="w-12 border rounded text-center"
                />
              </div>

              {/* Remove Button */}
              <div className="w-1/6 text-center">
                <button
                  onClick={() => {
                    removeFromCart(index); // Remove product from cart
                    setQuantities((prevQuantities) =>
                      prevQuantities.filter((_, i) => i !== index)
                    );
                  }}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Section */}
      {cart.length > 0 && (
        <div className="mt-6 flex flex-col items-end bg-white p-4 rounded-lg shadow-md">
          {/* Subtotal */}
          <p className="text-sm text-gray-700">
            Sub Total:{" "}
            <span className="font-bold text-xl">₹{calculateSubtotal()}</span>
            <br />
            <span className="text-gray-500 text-xs">
              Excl. Tax and delivery charge
            </span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button onClick={() => {navigate("/")}} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
              CONTINUE SHOPPING
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
