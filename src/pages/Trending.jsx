import React, { useEffect, useState } from "react";
import { Axios } from "axios";

const Trending = () => {
  const fetchTrending = async () => {
    const [content, setContent] = useState([]);

    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );

    console.log(data);

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="pageTitle">
        <h1>Trending</h1>
      </span>
    </div>
  );
};

export default Trending;
