import React, { useEffect, useState } from 'react'
import themoviedbApi from '../../services/themoviedb-api'
import { useParams } from 'react-router-dom';
import { StyledReviewsList, StyledReviewsListItem } from './Reviews.styled';

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
      <StyledReviewsList>
        {reviews.map(review => {
         return <StyledReviewsListItem key={review.id}>
            <h3>{`Author: ${review.author}`}</h3>
            <p>{review.content}</p>
          </StyledReviewsListItem>
        })}
      </StyledReviewsList>
    </>
  )
}

export default Reviews