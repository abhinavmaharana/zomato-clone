import Footer from '../components/Home/Footer/Footer';
import Header from '../components/MainContainer/LocationBasedRestaurants/RestaurantDetailCard/Header/Header';
import RestaurantDetailCard from '../components/MainContainer/LocationBasedRestaurants/RestaurantDetailCard/RestaurantDetailCard';

const Restaurantpage = () => {
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Restaurantpage;
