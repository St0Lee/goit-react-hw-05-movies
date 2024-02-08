import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/movies";

import styles from "./trending-movies.module.css"

import TrendingMoviesItem from "./TrendingMoviesItem/TrendingMoviesItem"
import Loader from "components/Loader/Loader";

const TrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { data } = await getTrendingMovies();
                setTrendingMovies(data.results || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const elements = trendingMovies.map(({id, title, overview, poster_path}) => (
        <TrendingMoviesItem id={id} title={title} overview={overview} poster_path={poster_path}/>
    ))

    return (
        <>
            {error && <p>{error}</p>}
            {loading ? <Loader /> : (
                <ul className={styles.list}>
                    {elements}
                </ul>
            )}
        </>
    );
};

export default TrendingMovies;
