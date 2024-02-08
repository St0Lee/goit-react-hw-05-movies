import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from "./reviews-page.module.css";

import { getMovieReviews } from "../../api/movies";

import Loader from 'components/Loader/Loader';


const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const { data: { results } } = await getMovieReviews(movieId);
        setReviews(results || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchReviews();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => {
    return (
      <li key={id} className={styles.wrapper}>
        <div className={styles.reviewInfo}>
          <h4 className={styles.author}>Author: {author}</h4>
          <p className={styles.content}>{content}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {reviews.length ? (<ul className={styles.list}>{elements}</ul>) : (<p>There are no reviews</p>)}
    </>
  );
};
export default ReviewsPage;
