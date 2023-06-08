import SearchBar from 'components/Searchbar/Searchbar';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedb-api';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilmValue = searchParams.get('query') ?? '';

  const handleFormSubmit = searchValue => {
    setSearchParams({query: searchValue});
  };

  useEffect(() => {
    if (searchFilmValue) {
      const fetchSearchMovies = async () => {
      const response = await themoviedbApi.fetchSearchMovies(searchFilmValue, 1);
      setSearchMovies(response.data.results);
    };

    try {
      fetchSearchMovies();
    } catch (error) {
      console.log(error.message);
    } 
    }
  }, [searchFilmValue])

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} query={searchFilmValue} />  
      <ul>
          {searchMovies.map(({ title, id }) => {
              return (
                  <li key={id}>
                      <Link to={`${id}`}>
                          {title}
                      </Link>
                  </li>
              );
          })}
      </ul>
    </>
  )
}

export default Movies;