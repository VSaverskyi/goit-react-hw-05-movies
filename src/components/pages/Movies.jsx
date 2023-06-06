import SearchBar from 'components/Searchbar/Searchbar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedb-api';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleFormSubmit = searchValue => {
    setSearchValue(searchValue);
  };

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
    <>
      <SearchBar onSubmit={handleFormSubmit}/>  
      <ul>
          {searchMovies && searchMovies.map(({ title, id }) => {
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