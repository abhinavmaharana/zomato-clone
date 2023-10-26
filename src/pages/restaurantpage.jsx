// import { useSelector } from 'react-redux';
import Footer from '../components/Home/Footer/Footer';
import Header from '../components/MainContainer/LocationBasedRestaurants/RestaurantDetailCard/Header/Header';
import RestaurantDetailCard from '../components/MainContainer/LocationBasedRestaurants/RestaurantDetailCard/RestaurantDetailCard';

const Restaurantpage = () => {
  // const cartItems = useSelector(store => store.cart.items);
  return (
    <div>
      {/* <Header /> */}
      <div className="relative">
        <div className="absolute z-10">
          <div className="inset-0 flex justify-center items-center p-48 -mt-8">
            <Header />
          </div>
        </div>
        <div className="flex min-h-screen flex-col justify-between pt-24">
          <div className="inset-0 flex px-48">
            <RestaurantDetailCard />
          </div>
          {/* <div className="inset-0 flex px-48 mb-5 justify-end">
            <div className=" bg-secondary text-primary items-center space-x-1 flex px-6 py-6 rounded-full">
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
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div>
                <h1>{cartItems?.length}</h1>
              </div>
            </div>
          </div> */}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Restaurantpage;
