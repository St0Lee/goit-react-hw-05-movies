import { useParams, useNavigate, useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";

import styles from "./single-movie.module.css"

import { getMovieById } from "api/movies";

import Loader from "components/Loader/Loader";
import MoviePlaceholder from "../../images/movie-poster-placeholder.png"

const SingleMovie = () => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {movieId} = useParams();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || "/";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { data } = await getMovieById(movieId);
                setMovie(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [movieId]);
    
    const genres = movie?.genres?.map(({ name }) => name);
    const ratePercentage = (movie?.vote_average * 10).toFixed(1)
    const goBack = () => navigate(from);

    return (
        <>
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {movie && (
                <div className={styles.container}>
                    <button onClick={goBack} type="button" className={styles.btn}>Go Back</button>
                    <div className={styles.wrapper}>
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: MoviePlaceholder}
                        alt={movie.title}
                        className={styles.poster}
                    />
                    <h1  className={styles.title}>{movie.title}</h1>
                    <p className={styles.overview}>{movie.overview}</p>     
                    <p className={styles.rating}>Rating: {ratePercentage}%</p>
                    <p className={styles.genres}>Genres: {genres && genres.join(", ")}</p>
                    </div>
                    <Link to="cast" state={{ from }} className={styles.link}>Show Cast</Link>
                    <Link to="reviews" state={{ from }} className={styles.link}>Show Reviews</Link>
                    <Suspense>
                    <Outlet />
                    </Suspense>
                </div>
            )}
        </>
    );
};

export default SingleMovie;