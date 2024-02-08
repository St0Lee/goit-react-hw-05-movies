import styles from "./trending-movies-item.module.css"
import { Link, useLocation } from "react-router-dom";

const TrendingMoviesItem = ({id, title, overview, poster_path}) => {
    const location = useLocation();
    return (
            <li key={id} className={styles.list}>
                <Link to={`/movies/${id}`} state={{ from: location }} className={styles.link}>
                    <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className={styles.poster}
                    />
                    <h2 className={styles.title}>{title}</h2>
                    </Link>
                    <p className={styles.overview}>{overview}</p>
            </li>
        )
}

export default TrendingMoviesItem;