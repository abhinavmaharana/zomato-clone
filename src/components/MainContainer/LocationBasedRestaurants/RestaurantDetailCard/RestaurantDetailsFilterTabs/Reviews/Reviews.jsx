/* eslint-disable no-unused-vars */

import ReviewCard from './ReviewCard/ReviewCard';

/* eslint-disable react/prop-types */
const Reviews = ({ restaurantMenu }) => {
  return (
    <div className="h-screen">
      <h1 className="text-2xl font-bold text-black">
        {restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO?.name} Reviews
      </h1>
      <div></div>
      <div className="overflow-y-scroll max-h-screen">
        <ReviewCard restaurantMenu={restaurantMenu} />
      </div>
    </div>
  );
};

export default Reviews;
