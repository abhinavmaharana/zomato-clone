/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RESTUARANTLIST } from '../../../utils/constants';
import { ShimmerCircularImage } from 'react-shimmer-effects';

const TopBrands = () => {
  const [topBrands, setTopBrands] = useState([]);

  useEffect(() => {
    fetchTopBrands();
  }, []);

  const fetchTopBrands = async () => {
    try {
      const response = await fetch(RESTUARANTLIST);
      const data = await response.json();

      if (data?.page_data?.sections?.SECTION_SEARCH_RESULT) {
        setTopBrands([data?.page_data?.sections?.SECTION_SEARCH_RESULT[1]]);
      } else {
        console.error('Data structure is incorrect.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return topBrands?.length === 0 ? (
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
      {topBrands.map((data, index) => (
        <div key={index}>
          <h1 className="text-3xl font-semibold">{data?.title}</h1>
          <div className="flex flex-col lg:flex-row space-x-[35px] mt-10">
            <div className="text-center space-y-2">
              {/* Image */}
              <div className="bg-[#FFBC0D] p-2 rounded-full shadow-2xl">
                <img
                  className="w-36 rounded-full"
                  src={data?.items[0]?.image?.url}
                />
              </div>
              {/* Name */}
              <p>{data?.items[0]?.name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <div className="bg-white p-2 rounded-full shadow-2xl">
                <img
                  className="w-36 rounded-full"
                  src={data?.items[1]?.image?.url}
                />
              </div>
              {/* Name */}
              <p>{data?.items[1]?.name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <div className="bg-white p-2 rounded-full shadow-2xl">
                <img
                  className="w-36 rounded-full"
                  src={data?.items[2]?.image?.url}
                />
              </div>
              {/* Name */}
              <p>{data?.items[2]?.name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <div className="bg-white p-2 rounded-full shadow-2xl">
                <img
                  className="w-36 rounded-full"
                  src={data?.items[3]?.image?.url}
                />
              </div>
              {/* Name */}
              <p>{data?.items[3]?.name}</p>
            </div>
            <div className="text-center space-y-2">
              {/* Image */}
              <div className="bg-white p-2 rounded-full shadow-2xl">
                <img
                  className="w-36 rounded-full"
                  src={data?.items[4]?.image?.url}
                />
              </div>
              {/* Name */}
              <p>{data?.items[4]?.name}</p>
            </div>
            <div className="text-center space-y-2 ">
              {/* Image */}
              <div className="bg-white p-2 rounded-full shadow-2xl">
                <img
                  className="w-36 rounded-full"
                  src={data?.items[5]?.image?.url}
                />
              </div>
              {/* Name */}
              <p>{data?.items[5]?.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBrands;
