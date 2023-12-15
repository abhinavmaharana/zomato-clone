function CartPage() {
  return (
    <div>
      <div className="inset-0 flex mt-5">
        <div className="flex items-center space-x-2 overflow-hidden whitespace-nowrap">
          <a href="#" className="text-gray-400 hover:text-secondary">
            Home
          </a>
          <span className="text-gray-400 hover:text-secondary">/</span>
          <a href="#" className="text-gray-400 hover:text-secondary">
            India
          </a>
          <span className="text-gray-400 hover:text-secondary">/</span>
          <a href="#" className="text-gray-400 hover:text-secondary">
            Delhi NCR
          </a>
          <span className="text-gray-400 hover:text-secondary">/</span>
          <span className="truncate text-gray-300 hover:text-secondary">
            Cart
          </span>
        </div>
      </div>
      <div className="inset-0 flex mt-6">
        <h1>Order Yummy Food</h1>
      </div>
    </div>
  );
}

export default CartPage;
