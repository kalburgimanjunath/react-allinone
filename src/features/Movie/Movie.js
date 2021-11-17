import React, { useState, useEffect } from 'react';
export default function Movie() {
  let [movies, setMovies] = useState([]);
  let postItem;
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/550?api_key=9ff11b48756361f4d7fb594dbbb49e87'
    )
      .then((response) => response.json())
      // 4. Setting *photos* to the image url that we received from the response above
      .then((data) => setMovies(data));
  }, []);
  console.log(movies);
  return <div>{movies.original_title}</div>;
}
