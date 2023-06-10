import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedb-api';
import { H2, SectionWrap, StyledList, StyledListItem } from './Home.styled';

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const location = useLocation();

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
        <SectionWrap>
            <H2>Trending today</H2>
            <StyledList>
                {trendingFilms && trendingFilms.map(({ title, id }) => {
                    return (
                        <StyledListItem key={id}>
                            <Link to={`movies/${id}`} state={{from: location}}>
                                {title}
                            </Link>
                        </StyledListItem>
                    );
                })}
            </StyledList>  
        </SectionWrap>
    )
}

export default Home;