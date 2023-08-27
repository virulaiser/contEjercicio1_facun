import { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
import Filter from "./Filter";

function Home() {
  const [rating, setRating] = useState(0);
  return (
    <>
      <Header />
      <Filter setRating={setRating} />
      <Movies rating={rating} />
    </>
  );
}

export default Home;
