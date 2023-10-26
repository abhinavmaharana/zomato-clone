/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Reviews = ({ restaurantMenu }) => {
  return (
    <div className="h-screen">
      <h1 className="text-2xl font-bold text-black">
        {restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO?.name} Reviews
      </h1>
    </div>
  );
};

export default Reviews;
