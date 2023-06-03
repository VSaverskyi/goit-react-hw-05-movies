import React from 'react';

const Home = ({trendingFilms}) => {
    return (
        <div>
            <h2>Trending today</h2>
            <ul>
                {trendingFilms && trendingFilms.map(({ title, id }) => {
                    return (
                        <li key={id}>
                            {title}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Home;