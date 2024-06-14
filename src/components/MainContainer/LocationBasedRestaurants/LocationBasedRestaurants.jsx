/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { RESTUARANTLISTITEM } from '../../../utils/constants';
import RestaurantCard, {
  withPromotedLabel,
} from './RestaurantCard/RestaurantCard';
import { ShimmerPostList } from 'react-shimmer-effects';

const LocationBasedRestaurants = () => {
  const [locationBasedRes, setLocationBasedRes] = useState([]);
  console.log(locationBasedRes)

  useEffect(() => {
    fetchLocationBasedData();
  }, []);

  const fetchLocationBasedData = async () => {
    const data = await fetch(RESTUARANTLISTITEM);

    const json = await data.json();

    setLocationBasedRes(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
  };

  // console.log(locationBasedRes.slice(2, 12));

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return locationBasedRes?.length === 0 ? (
    <div>
      <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
    </div>
  ) : (
    <div className="">
      <h1 className="text-3xl font-semibold">
        Delivery Restaurants in Connaught Place
      </h1>
      <div className="grid grid-cols-3 gap-11">
        {locationBasedRes?.slice(1, 13).map(locationData => (
          <div key={locationData?.type}>
            {locationData?.isPromoted ? (
              <RestaurantCardPromoted locationData={locationData} />
            ) : (
              <RestaurantCard locationData={locationData} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationBasedRestaurants;
