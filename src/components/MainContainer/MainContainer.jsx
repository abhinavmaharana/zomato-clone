/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from './Header/Header';

const MainContainer = () => {
  return (
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
      {/* <Footer /> */}
    </div>
  );
};

export default MainContainer;
