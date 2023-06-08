import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedb-api';

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => { 
    if (movieId) {
      const fetchFilmInfo= async () => {
      const response = await themoviedbApi.fetchFilmDetails(movieId);
      setFilmDetails(response.data);
    };

    try {
      fetchFilmInfo();
    } catch (error) {
      console.log(error.message);
    }
    }
  }, [movieId])
  
  if (filmDetails) {
    const { poster_path, title, vote_average, overview, genres } = filmDetails;

    return (
      <>
        <Link to={location.state.from ?? '/'}>Go back</Link>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
        <h2>{title}</h2>
        <p>{`User score: ${Math.floor(vote_average * 10)}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres.map(genr => genr.name).join(' ')}</p>
        <h5>Additional information</h5>
        <ul>
          <li><Link to={`cast`}>Cast</Link></li>
          <li><Link to={`reviews`}>Reviews</Link></li>
        </ul>
        <Outlet/>
      </>
  )
  }
}

export default MovieDetails