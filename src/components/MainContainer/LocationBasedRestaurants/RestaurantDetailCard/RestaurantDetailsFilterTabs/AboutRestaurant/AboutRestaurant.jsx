// import GoogleMaps from './GoogleMap/GoogleMaps';

/* eslint-disable react/prop-types */
const AboutRestaurant = ({ restaurantMenu }) => {
  return (
    <div className="h-screen space-y-8">
      <div className="grid grid-cols-2 gap-60 mt-6">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-black">About this place</h1>
            <div className="border-2 flex items-center mt-5 py-1 px-4 w-[320px] rounded-lg space-x-5">
              <div>
                <img
                  className="w-14"
                  src={
                    restaurantMenu?.page_data?.sections?.SECTION_FEATURE_RAIL
                      ?.SAFETY_TEMP?.image
                  }
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-sm text-gray-400">
                  {
                    restaurantMenu?.page_data?.sections?.SECTION_FEATURE_RAIL
                      ?.SAFETY_TEMP?.title
                  }
                </h1>
                <h1 className="text-md">
                  {
                    restaurantMenu?.page_data?.sections?.SECTION_FEATURE_RAIL
                      ?.SAFETY_TEMP?.subtitle
                  }
                </h1>
              </div>
            </div>
          </div>
          <div>{/* Menu */}</div>
          <div className="space-y-4">
            <h1 className="text-2xl text-black  font-medium">Cuisines</h1>
            <div>
              <h1 className="text-lg">
                {
                  restaurantMenu?.page_data?.sections?.SECTION_BASIC_INFO
                    ?.cuisine_string
                }
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-white w-[400px] shadow-lg rounded-lg p-6 space-y-5 ">
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl">Call</h1>
            <p className="text-secondary w-[150px]">
              {
                restaurantMenu?.page_data?.sections?.SECTION_RES_CONTACT
                  ?.phoneDetails?.phoneStr
              }
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl">Direction</h1>
            {/* <GoogleMaps restaurantMenu={restaurantMenu} /> */}
            <div>
              <img
                className="rounded-lg"
                src={
                  restaurantMenu?.page_data?.sections?.SECTION_RES_CONTACT
                    ?.static_map_url
                }
              />
            </div>
            <p>
              {
                restaurantMenu?.page_data?.sections?.SECTION_RES_CONTACT
                  ?.address
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRestaurant;
