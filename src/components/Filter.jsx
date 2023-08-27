import { Rating } from "react-simple-star-rating";

function Filter({ setRating }) {
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  return (
    <div className=" container text-center my-3 mt-2">
      <Rating onClick={handleRating} />
    </div>
  );
}

export default Filter;
