/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RESTUARANTLIST } from '../../../utils/constants';
import { ShimmerCircularImage } from 'react-shimmer-effects';

const TopBrands = () => {
  const [topBrands, setTopBrands] = useState([]);
  console.log(topBrands)

  useEffect(() => {
    fetchTopBrands();
  }, []);

  const fetchTopBrands = async () => {
    try {
      const response = await fetch(RESTUARANTLIST);
      const data = await response.json();

      if (data?.page_data?.sections?.SECTION_SEARCH_RESULT) {
        setTopBrands([data.page_data.sections.SECTION_SEARCH_RESULT[1]]);
      } else {
        console.error('Data structure is incorrect.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return topBrands.length === 0 ? (
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
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBrands;
