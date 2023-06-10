import SearchBar from 'components/Searchbar/Searchbar';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedb-api';
import { StyledList, StyledListItem } from 'components/Home/Home.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilmValue = searchParams.get('query') ?? '';
  const location = useLocation();

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
      <StyledList>
          {searchMovies.map(({ title, id }) => {
              return (
                  <StyledListItem key={id}>
                      <Link to={`${id}`} state={{from: location}}>
                          {title}
                      </Link>
                  </StyledListItem>
              );
          })}
      </StyledList>
    </>
  )
}

export default Movies;