/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header/Header';
import FilterTabs from './FilterTabs/FilterTabs';
import FilterList from './FilterList/FilterList';
import OrderAgainContainer from './OrderAgainContainer/OrderAgainContainer';
import TopBrands from './TopBrands/TopBrands';
import LocationBasedRestaurants from './LocationBasedRestaurants/LocationBasedRestaurants';
import Footer from '../Home/Footer/Footer';
import ExploreOptions from '../Home/ExploreOptions/ExploreOptions';

const MainContainer = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute z-10">
          {/* Header */}
          <div className="inset-0 flex justify-center items-center p-40">
            <Header />
          </div>

          <div className="inset-0 flex px-40 -mt-52">
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
              <a href="#" className="text-gray-400 hover:text-secondary">
                Central Delhi
              </a>
              <span className="text-gray-400 hover:text-secondary">/</span>
              <span className="truncate text-gray-300 hover:text-secondary">
                Connaught Place Restaurants
              </span>
            </div>
          </div>
        </div>
        <div className="flex min-h-screen flex-col justify-between pt-24">
          <div className="inset-0 px-40 mt-12">
            <FilterTabs />
          </div>
          <div className=" border-t border-1" />
          <div className="inset-0 px-40 mt-6">
            <FilterList />
          </div>
          <div className="inset-0 px-40 mt-6 bg-lightGray p-14">
            <OrderAgainContainer />
          </div>
          {/* <div className="inset-0 px-40 mt-5 p-10">
            <TopBrands />
          </div> */}
          <div className="inset-0 px-40 mt-5 p-10">
            <LocationBasedRestaurants />
          </div>
          <div className="inset-0 px-40 p-14">
            {/* <ExploreOptions /> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
