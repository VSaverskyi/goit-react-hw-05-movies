import { H2, StyledList, StyledListItem } from "components/Home/Home.styled";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import themoviedbApi from '../../services/themoviedb-api';
import { AddInfo, FilmCardWrapper, FilmDescription, FilmImg } from "./FilmCard.styled";

const FilmCard = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const [filmDetails, setFilmDetails] = useState(null);
  const { movieId } = useParams();

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
            <div>
                <Link to={backLinkLocationRef.current}>Go back</Link>
                <FilmCardWrapper>
                    <FilmImg src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
                    <FilmDescription>
                        <H2>{title}</H2>
                        <p>{`User score: ${Math.floor(vote_average * 10)}%`}</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h4>Genres</h4>
                        <p>{genres.map(genr => genr.name).join(' ')}</p>
                    </FilmDescription>
                </FilmCardWrapper>
                <AddInfo>
                    <h5>Additional information</h5>
                    <StyledList>
                        <StyledListItem><Link to={`cast`}>Cast</Link></StyledListItem>
                        <StyledListItem><Link to={`reviews`}>Reviews</Link></StyledListItem>
                    </StyledList>
                </AddInfo>
            </div>
        )
        }
};

export default FilmCard;