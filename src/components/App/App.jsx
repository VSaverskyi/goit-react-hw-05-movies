import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews";
import themoviedbApi from '../../services/themoviedb-api';

const App = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      const response = await themoviedbApi.fetchTrending();
      console.log(response);
      setTrendingFilms(response.data.results);
    };

    try {
      fetchTrendingFilms();
    } catch (error) {
      console.log(error.message);
    }
  }, [])
  

  return (
    <Routes>
      <Route path='/' element={<Home trendingFilms={trendingFilms} />} />
      <Route path='/movies' element={<Movies />} >
        <Route path=":movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
