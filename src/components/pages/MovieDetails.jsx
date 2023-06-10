import FilmCard from 'components/FilmCard/FilmCard';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
    return (
      <>
        <FilmCard/>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet/>
        </Suspense>
      </>
  )
}

export default MovieDetails