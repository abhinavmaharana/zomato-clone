import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../../utils/Redux/cartSlice';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Log the cart items to understand their structure
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.item.price, 0);
  };

  const totalAmount = calculateTotalAmount();
  console.log('Cart Items:', cartItems);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <nav className="text-sm text-gray-500">
          <a href="#" className="hover:text-secondary">Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-secondary">India</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-secondary">Delhi NCR</a>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Cart</span>
        </nav>
      </div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Order Yummy Food</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((cartItem) => (
              <li key={cartItem.id} className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                  {cartItem.item.item_image_thumb_url && (
                    <img src={cartItem.item.item_image_thumb_url} alt={cartItem.item.name} className="w-16 h-16 rounded" />
                  )}
                  <div>
                    <h1 className="text-gray-800 font-semibold">{cartItem.item.name}</h1>
                    <p className="text-gray-500">{cartItem.item.tag_slugs ? cartItem.item.tag_slugs.join(', ') : ''}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-800 font-semibold">₹ {cartItem.item.price}</span>
                  <button
                    onClick={() => dispatch(removeItem(cartItem.id))}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <div className='mt-6'>
            <div className="flex justify-end">
              <span className="text-xl font-semibold">Total: ₹{totalAmount}</span>
            </div>
          <div className="mt-6 flex justify-end items-center space-x-5">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className="border-red-500 border-2 text-red-500 px-4 py-2 rounded hover:bg-red-700"
            >
              Pay Now
            </button>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
