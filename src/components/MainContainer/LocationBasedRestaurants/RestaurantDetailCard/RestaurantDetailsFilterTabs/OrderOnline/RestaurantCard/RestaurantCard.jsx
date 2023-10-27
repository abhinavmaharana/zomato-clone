/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../../../../../utils/Redux/cartSlice';
import StarRating from './StarRating/StarRating';

const RestaurantCard = ({ menu }) => {
  const [resCard, setResCard] = useState([]);

  const dispatch = useDispatch();

  const handleAddItem = item => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  useEffect(() => {
    setResCard(menu?.menu?.categories);
  }, []);

  console.log(resCard);

  return (
    <div className="mt-2 space-y-4">
      <h1 className="text-2xl mt-4">{menu?.menu?.name}</h1>
      <div className="mt-2">
        {resCard?.map(category => (
          <div className="mb-4">
            <div className="flex flex-col items-left space-y-5 overflow-auto">
              {category?.category?.items?.map(item => (
                <div
                  key={item?.item?.id}
                  className="grid grid-cols-3 items-center gap-x-48"
                >
                  <div>
                    <img
                      className="w-[160px] h-[160px] rounded-lg object-fill"
                      src={item?.item?.item_image_url}
                      alt={item?.item?.item_image_url}
                    />
                  </div>
                  <div className="-ml-40">
                    <h3 className="text-lg font-semibold">
                      {item?.item?.name}
                    </h3>
                    <p className="">
                      <StarRating star={item?.item?.rating?.value} />
                    </p>
                    <p className="font-bold">
                      ₹ {Math.round(item?.item?.display_price)}
                    </p>
                    <p className="line-clamp-2">{item?.item?.desc}</p>
                  </div>
                  <button
                    className="justify-end bg-secondary px-2 py-3 rounded-lg text-white"
                    onClick={() => handleAddItem(item)}
                  >
                    Add to Cart +
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
