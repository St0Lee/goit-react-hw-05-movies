import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from "./cast-page.module.css";

import { getMovieCast } from "../../api/movies";

import Loader from "components/Loader/Loader";
import avatarPlaceholder from "../../images/avatar-placeholder.jpg"


const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieCast(movieId);
        setCast(data.cast || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  const elements = cast.map(({ id, name, profile_path, character }) => {
    return (
      <li key={id} className={styles.wrapper}>
        <img
          src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}`: avatarPlaceholder}
          alt="Actor"
          className={styles.actorImg}
        />
        <div className={styles.castInfo}>
          <p className={styles.name}>Actor: {name}</p>
          <p className={styles.character}>Character: {character}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {cast.length ? (<ul className={styles.list}>{elements}</ul>) : (<p>There are no info about cast</p>)}
    </>
  );
};
export default CastPage;