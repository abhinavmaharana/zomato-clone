/* eslint-disable react/prop-types */
const StarRating = ({ star }) => {
  const stars = [];

  // Round the rating to the nearest 0.5
  const roundedRating = Math.round(star * 2) / 2;

  // Create an array of stars based on the rounded rating
  for (let i = 0; i < 5; i++) {
    // Use a conditional to determine if the star should be yellow or gray
    const isYellow = i < roundedRating;

    stars.push(
      <i
        key={i}
        className={`fas fa-star ${
          isYellow ? 'text-yellow-500' : 'text-gray-300'
        }`}
      ></i>,
    );
  }

  return (
    <div>
      {stars.map((starData, index) => (
        <span key={index}> {starData} </span>
      ))}
    </div>
  );
};

export default StarRating;
