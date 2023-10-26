/* eslint-disable react/prop-types */
const PhotoGallery = ({ restaurantMenu }) => {
  return (
    <div className="h-screen">
      <h1 className="text-2xl font-bold text-black">
        {restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO?.name} Photos
      </h1>
      <div className="flex space-x-2 mt-5">
        <button className="py-2 px-6 rounded-md bg-secondary text-primary hover:bg-secondaryHover ">
          All
        </button>
        <button className="py-2 px-6 rounded-md bg-transparent border-2 text-gray-400 hover:bg-secondaryHover hover:text-white">
          Food
        </button>
        <button className="py-2 px-6 rounded-md bg-transparent border-2 text-gray-400 hover:bg-secondaryHover hover:text-white">
          Ambience
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
