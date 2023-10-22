/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from './Header/Header';
import FilterTabs from './FilterTabs/FilterTabs';
import FilterList from './FilterList/FilterList';
import OrderAgainContainer from './OrderAgainContainer/OrderAgainContainer';
import TopBrands from './TopBrands/TopBrands';

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
          <div className="inset-0 px-40 mt-5">
            <FilterTabs />
          </div>
          <div className="ml-24 border-t border-1" />
          <div className="inset-0 px-40 mt-5">
            <FilterList />
          </div>
          <div className="inset-0 px-40 mt-5 bg-lightGray p-10">
            <OrderAgainContainer />
          </div>
          <div className="inset-0 px-40 mt-5 p-10">
            <TopBrands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
