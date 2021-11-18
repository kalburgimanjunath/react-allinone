import React, { useState, useEffect } from 'react';
import { getLatestMovies } from '../../services/apiConnect';
import axios from 'axios';
export default function Movie() {
  const baseUrl = 'https://api.themoviedb.org';
  const api_KEY = '9ff11b48756361f4d7fb594dbbb49e87';
  let [movies, setMovies] = useState([]);
  let postItem;
  
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/4/list/1?page=1&api_key=9ff11b48756361f4d7fb594dbbb49e87'
    )
      .then((response) => response.json())

      .then((data) => setMovies(data.results));
  });
  const IMG_API = 'https://image.tmdb.org/t/p/w500/';
  // console.log(movies);
  // getLatestMovies;

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
