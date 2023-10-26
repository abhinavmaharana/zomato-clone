/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantDetailsFilterTabs from './RestaurantDetailsFilterTabs/RestaurantDetailsFilterTabs';

const RestaurantDetailCard = () => {
  const { name } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  console.log(
    restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO?.rating_new?.ratings
      ?.DINING?.rating,
  );

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.zomato.com/webroutes/getPage?page_url=/ncr/${name}/order`,
      );

      if (response.status === 200) {
        const data = await response.json();
        // console.log(data);
        setRestaurantMenu(data);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // <h1>Hello {restaurantMenu?.page_info?.pageTitle}</h1>

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
            {restaurantMenu?.page_info?.pageTitle}
          </span>
        </div>
      </div>
      <div className="inset-0 flex mt-6">
        <div className="flex">
          {restaurantMenu?.entities?.IMAGES &&
            Object.keys(restaurantMenu.entities.IMAGES)
              .slice(2, 6)
              .reverse()
              .map((imageKey, index) => {
                const image = restaurantMenu.entities.IMAGES[imageKey];
                return (
                  <img
                    key={image.photoId}
                    src={image.thumbUrl}
                    className={
                      index === 0
                        ? 'w-[700px] h-[400px]'
                        : 'w-[260px] h-[400px]'
                    }
                  />
                );
              })}
        </div>
      </div>
      <div className="inset-0 grid space-y-4 mt-6">
        <div className="grid grid-cols-2 gap-x-[550px] justify-evenly items-center">
          <div>
            <h1 className="text-4xl font-semibold w-[700px]">
              {restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO?.name}
            </h1>
          </div>
          <div className="flex items-center space-x-10 w-[300px]">
            <div className="flex space-x-3 w-36 items-center">
              <p className="bg-[#24963F] text-white py-1 px-5 rounded-lg">
                {
                  restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO
                    ?.rating_new?.ratings?.DINING?.rating
                }
              </p>
              <p className="text-sm">
                {
                  restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO
                    ?.rating_new?.ratings?.DINING?.subtext
                }
              </p>
            </div>
            <div className="flex space-x-3 w-36 items-center">
              <p className="bg-[#267E3E] text-white py-1 px-5 rounded-lg">
                {
                  restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO
                    ?.rating_new?.ratings?.DELIVERY?.rating
                }
              </p>
              <div className="flex flex-col">
                <p className="text-sm">
                  {
                    restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO
                      ?.rating_new?.ratings?.DELIVERY?.reviewCount
                  }
                  {` ${restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO?.rating_new?.ratings?.DELIVERY?.sideSubTitle}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-400">
            {
              restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO
                ?.cuisine_string
            }
          </p>
          <p className="text-gray-400">
            <span className="text-[#F5AE7A]">
              {
                restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO
                  ?.res_status_text
              }
            </span>{' '}
            -{' '}
            {
              restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO?.timing
                ?.timing_desc
            }
          </p>
        </div>
      </div>
      <div className="inset-0 grid space-y-4 mt-6">
        <div className="space-x-3">
          <button className="py-2 px-5 border-2 border-[#A2A0A0] rounded-lg">
            Direction
          </button>
          <button className="py-2 px-5 border-2 border-[#A2A0A0] rounded-lg">
            Share
          </button>
        </div>
      </div>
      <div className="inset-0 grid space-y-4 mt-6">
        {/* Tabs */}
        <RestaurantDetailsFilterTabs restaurantMenu={restaurantMenu} />
      </div>
    </div>
  );
};

export default RestaurantDetailCard;
