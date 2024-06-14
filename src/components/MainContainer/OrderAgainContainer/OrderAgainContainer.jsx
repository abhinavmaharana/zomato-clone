/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RESTUARANTLIST } from '../../../utils/constants';
import { ShimmerCircularImage } from 'react-shimmer-effects';

const OrderAgainContainer = () => {
  const [orderAgain, setOrderAgain] = useState([]);

  console.log(orderAgain)

  useEffect(() => {
    fetchOrderAgain();
  }, []);

  const fetchOrderAgain = async () => {
    try {
      const response = await fetch(RESTUARANTLIST);
      const data = await response.json();

      if (data?.page_data?.sections?.SECTION_SEARCH_RESULT) {
        setOrderAgain([data.page_data.sections.SECTION_SEARCH_RESULT[0]]);
      } else {
        console.error('Data structure is incorrect.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return orderAgain.length === 0 ? (
    <div className="flex flex-col lg:flex-row space-x-[35px]">
      <ShimmerCircularImage size={144} />
      <ShimmerCircularImage size={144} />
      <ShimmerCircularImage size={144} />
      <ShimmerCircularImage size={144} />
      <ShimmerCircularImage size={144} />
      <ShimmerCircularImage size={144} />
    </div>
  ) : (
    <div>
      {orderAgain.map((data, index) => (
        <div key={index}>
          <h1 className="text-3xl font-semibold">{data?.title}</h1>
          <div className="flex flex-col lg:flex-row space-x-[35px] mt-10">
            {data?.collections?.slice(0, 6).map((item, idx) => (
              <div key={idx} className="text-center space-y-2">
                {/* Image */}
                <img
                  className="w-[160px] rounded-full"
                  src={item?.image?.url || 'placeholder.jpg'}
                  alt={item?.name || 'Placeholder'}
                />
                {/* Name */}
                <p>{item?.name || 'Unknown'}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderAgainContainer;
