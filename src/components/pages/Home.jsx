import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({trendingFilms}) => {
    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {trendingFilms && trendingFilms.map(({ title, id }) => {
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

export default Home;