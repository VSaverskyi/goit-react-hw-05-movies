import SearchBar from 'components/Searchbar/Searchbar';
import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({handleFormSubmit, searchMovies}) => {
  return (
    <>
      <SearchBar onSubmit={handleFormSubmit}/>  
      <ul>
          {searchMovies && searchMovies.map(({ title, id }) => {
              return (
                  <li key={id}>
                      <Link to={`movies/${id}`}>
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