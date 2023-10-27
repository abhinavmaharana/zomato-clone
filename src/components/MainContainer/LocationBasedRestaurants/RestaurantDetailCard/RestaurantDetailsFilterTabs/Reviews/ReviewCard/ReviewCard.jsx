/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const ReviewCard = ({ restaurantMenu }) => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const photoComments = restaurantMenu?.entities?.PHOTO_COMMENTS;
    // console.log('Before setting state--->', photoComments);

    if (photoComments && typeof photoComments === 'object') {
      const commentsArray = Object.values(photoComments);
      // console.log('after setting state--->', commentsArray);
      setReviewData(commentsArray);
    }
  }, [restaurantMenu]);

  // console.log(reviewData);

  return (
    <div className="">
      {reviewData?.length > 0 ? (
        reviewData?.map(comment => (
          <div key={comment?.commentId}>
            <div className="grid grid-cols-2 justify between mt-6 lg:gap-40">
              <div className="flex items-center space-x-4">
                <div>
                  <img
                    className="w-16 rounded-full bg-black"
                    src={comment?.userProfilePic}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-lg">{comment?.userName}</h1>
                  <p>{comment?.timestamp}</p>
                </div>
              </div>
              <div className="text-right">
                <button className="border-secondary border-2 px-5 py-2 rounded-lg text-secondary">
                  Follow
                </button>
              </div>
            </div>
            <div className="mt-4 ml-2">
              <h1 className="text-lg text-gray-500">{comment?.comment}</h1>
            </div>
          </div>
        ))
      ) : (
        <div>No reviews available.</div>
      )}
    </div>
  );
};

export default ReviewCard;
