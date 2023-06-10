import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedb-api';
import { StyledCastDescr, StyledCastImg, StyledCastList, StyledCastName } from './Cast.styled';

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
    <StyledCastList>
      {castList.map(castItem => {
        const { character, name, id, profile_path } = castItem;
        return <li key={id}>
          {profile_path && <StyledCastImg src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt="name" />}
          <StyledCastDescr>
            <StyledCastName>{name}</StyledCastName>
            <p>{`Character: ${character}`}</p>
          </StyledCastDescr>
        </li>
      })}
    </StyledCastList>
    )
  }
}

export default Cast