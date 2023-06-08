import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedb-api';

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);

    useEffect(() => {
      const fetchTrendingFilms = async () => {
      const response = await themoviedbApi.fetchTrending();
      setTrendingFilms(response.data.results);
    };

    try {
      fetchTrendingFilms();
    } catch (error) {
      console.log(error.message);
    }
    }, [])
    

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