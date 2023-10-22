const FilterList = () => {
  return (
    <div>
      <div className="flex space-x-2 text-gray-500 cursor-pointer">
        <button className="flex space-x-2 hover:bg-gray-100 transition ease-in-out px-6 py-2 border-2 rounded-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
          <p>Filters</p>
        </button>
        <button className="px-6 py-2 hover:bg-gray-100 transition ease-in-out border-2 rounded-lg">
          Pure Veg
        </button>
        <button className="px-6 py-2 hover:bg-gray-100 transition ease-in-out border-2 rounded-lg">
          Rating: 4.0+
        </button>
        <button className="px-6 py-2 hover:bg-gray-100 transition ease-in-out border-2 rounded-lg">
          Cuisines
        </button>
      </div>
    </div>
  );
};

export default FilterList;
