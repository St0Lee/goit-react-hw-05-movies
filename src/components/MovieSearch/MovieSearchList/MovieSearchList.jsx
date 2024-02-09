import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import styles from "./movie-search-list.module.css";
import { getMovieBySearch } from "../../../api/movies";
import Searchbar from './Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import moviePlaceholder from "../../../images/movie-poster-placeholder.png";

const MovieSearchList = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  const search = searchParams.get('search');
  
  useEffect(() => {
    const storedSearch = localStorage.getItem('searchValue');
    if (storedSearch && !search) {
      setSearchParams({ search: storedSearch });
    }
  }, [setSearchParams, search]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data: { results } } = await getMovieBySearch(search);
        setMovie(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    }
  }, [search]);

  const handleSearch = (searchValue) => {
    setSearchParams({ search: searchValue });
    localStorage.setItem('searchValue', searchValue);
    setMovie([]);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} initialSearchValue={search} />
      {error && <p className={styles.error}>{error}</p>}
      {loading && <Loader />}
      {movie.length > 0 && (
        <ul className={styles.list}>
          {movie.map(({ id, title, poster_path }) => (
            <li key={id} className={styles.wrapper}>
              <Link to={`/movies/${id}`} state={{ from: location }} className={styles.link}>
                <img
                  src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : moviePlaceholder}
                  alt={title}
                  className={styles.poster}
                />
                <p className={styles.title}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearchList;
