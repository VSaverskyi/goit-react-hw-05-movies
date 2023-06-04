import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews";
import themoviedbApi from '../../services/themoviedb-api';
import Layout from "components/Layout/Layout";

const App = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleFormSubmit = searchValue => {
    setSearchValue(searchValue);
  };

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      const response = await themoviedbApi.fetchTrending();
      setTrendingFilms(response.data.results);
    };

    try {
      fetchTrendingFilms();
    } catch (error) {
      console.log(error.message);
    }
  }, [])

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    const fetchSearchMovies = async () => {
      const response = await themoviedbApi.fetchSearchMovies(searchValue, 1);
      setSearchMovies(response.data.results);
    };

    try {
      fetchSearchMovies();
    } catch (error) {
      console.log(error.message);
    }
  }, [searchValue])
  

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home trendingFilms={trendingFilms} />} />
        <Route path='movies' element={<Movies searchMovies={searchMovies} handleFormSubmit={handleFormSubmit}/>} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};

export default App;
