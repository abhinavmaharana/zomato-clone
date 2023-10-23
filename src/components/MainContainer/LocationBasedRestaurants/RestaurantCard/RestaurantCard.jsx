/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const RestaurantCard = ({ locationData }) => {
  console.log(locationData);

  return (
    <div className="space-y-1 mt-14" key={locationData?.info?.name}>
      <div>
        <img
          className="rounded-xl w-[350px] h-[240px]"
          src={locationData?.info?.image?.url}
        />
      </div>
      <div className="flex justify-between items-center w-[350px]">
        <div>
          <h1 className="text-xl font-semibold">{locationData?.info?.name}</h1>
          {/* Cusisine */}
          <p className="text-md text-gray-600">
            {locationData?.info?.cuisine[0]?.name}, {''}
            {locationData?.info?.cuisine[1]?.name}
          </p>
        </div>
        <div className="text-right mt-5">
          {/* Rating */}
          <p className="text-sm">
            {locationData?.info?.ratingNew?.ratings?.DELIVERY?.rating} ⭐
          </p>
          {/* Cost for one */}
          <p className="text-sm text-gray-600">
            {locationData?.info?.cfo?.text || locationData?.info?.cft?.text}
          </p>
          {/* Time */}
          <p className="text-sm text-gray-600">
            {locationData?.order?.deliveryTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = RestaurantCard => {
  return ({ locationData }) => {
    return (
      <div>
        <label className="absolute bg-gray-500 text-gray-100 m-2 p-1 rounded-lg">
          <p className="text-sm">Promoted</p>
        </label>
        <RestaurantCard locationData={locationData} />
      </div>
    );
  };
};

export default RestaurantCard;
