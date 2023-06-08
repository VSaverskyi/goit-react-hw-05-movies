import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedb-api';

const Cast = () => {
  const [castList, setCastList] = useState(null);
  const { movieId } = useParams();
  
  useEffect(() => { 
    if (movieId) {
      const fetchCast= async () => {
      const response = await themoviedbApi.fetchFilmCredits(movieId);
      setCastList(response.data.cast);
    };

    try {
      fetchCast();
    } catch (error) {
      console.log(error.message);
    }
    }  
  }, [movieId])

  if (castList) {
    return (
    <ul>
      {castList.map(castItem => {
        const { character, name, id, profile_path } = castItem;
        return <li key={id}>
          {profile_path && <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt="name" />}
          <p>{name}</p>
          <p>{`Character: ${character}`}</p>
        </li>
      })}
    </ul>
    )
  }
}

export default Cast