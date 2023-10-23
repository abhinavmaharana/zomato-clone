/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetailCard = () => {
  const { name } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  console.log(name);

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
        console.log(data);
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
      <div className="inset-0 flex -mt-52">
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
                        : 'w-[200px] h-[400px]'
                    }
                  />
                );
              })}
        </div>
      </div>
      <div className="inset-0 grid space-y-4 mt-6">
        <div>
          <h1 className="text-4xl font-semibold">
            {restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO?.name}
          </h1>
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
    </div>
  );
};

export default RestaurantDetailCard;
