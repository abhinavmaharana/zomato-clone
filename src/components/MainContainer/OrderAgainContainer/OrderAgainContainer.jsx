/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RESTUARANTLIST } from '../../../utils/constants';
import { ShimmerCircularImage } from 'react-shimmer-effects';

const OrderAgainContainer = () => {
  const [orderAgain, setOrderAgain] = useState([]);

  useEffect(() => {
    fetchOrderAgain();
  }, []);

  const fetchOrderAgain = async () => {
    try {
      const response = await fetch(RESTUARANTLIST);
      const data = await response.json();

      if (data?.page_data?.sections?.SECTION_SEARCH_RESULT) {
        // Ensure that 'orderAgain' is set as an array
        setOrderAgain([data.page_data.sections.SECTION_SEARCH_RESULT[0]]);
      } else {
        console.error('Data structure is incorrect.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //   console.log(orderAgain);
  //   console.log(orderAgain[0]?.items[0]?.image?.imageUrl);

  return orderAgain?.length === 0 ? (
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
            <div className="text-center space-y-2">
              {/* Image */}
              <img
                className="w-40 rounded-full"
                src={data?.items[0]?.image?.imageUrl}
              />
              {/* Name */}
              <p>{data?.items[0].name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <img
                className="w-40 rounded-full"
                src={data?.items[1]?.image?.imageUrl}
              />
              {/* Name */}
              <p>{data?.items[1].name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <img
                className="w-40 rounded-full"
                src={data?.items[2]?.image?.imageUrl}
              />
              {/* Name */}
              <p>{data?.items[2].name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <img
                className="w-40 rounded-full"
                src={data?.items[3]?.image?.imageUrl}
              />
              {/* Name */}
              <p>{data?.items[3].name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <img
                className="w-40 rounded-full"
                src={data?.items[4]?.image?.imageUrl}
              />
              {/* Name */}
              <p>{data?.items[4].name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <img
                className="w-40 rounded-full"
                src={data?.items[5]?.image?.imageUrl}
              />
              {/* Name */}
              <p>{data?.items[5].name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderAgainContainer;
