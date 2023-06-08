import React, { useEffect, useState } from 'react'
import themoviedbApi from '../../services/themoviedb-api'
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => { 
    if (movieId) {
     const fetchCast= async () => {
      const response = await themoviedbApi.fetchFilmReviews(movieId);
      setReviews(response.data.results);
    };

    try {
      fetchCast();
    } catch (error) {
      console.log(error.message);
    } 
    }
  }, [movieId])
  
  if (reviews.length === 0) {
    return <p>We don`t have any reviews for this movie.</p>;
  }

  return (
    <>
      <ul>
        {reviews.map(review => {
         return <li key={review.id}>
            <h3>{`Author: ${review.author}`}</h3>
            <p>{review.content}</p>
          </li>
        })}
      </ul>
    </>
  )
}

export default Reviews