import React, { useState, useEffect } from 'react';
export default function Movie() {
  let [movies, setMovies] = useState([]);
  let postItem;
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/4/list/1?page=1&api_key=9ff11b48756361f4d7fb594dbbb49e87'
    )
      .then((response) => response.json())
      // 4. Setting *photos* to the image url that we received from the response above
      .then((data) => setMovies(data.results));
      
  }, []);
  const IMG_API = 'https://image.tmdb.org/t/p/w500/';
  console.log(movies);
  return (
    <div>
      {movies.map((item) => {
        return (
          <>
            <div>{item.original_title}</div>
            <div>
              <img width="50" src={IMG_API + item.poster_path} />
            </div>
          </>
        );
      })}
    </div>
  );
}
