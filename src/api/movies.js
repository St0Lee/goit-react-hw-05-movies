import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "9d62fa0a2d83c73b042e215c1a6cc958",
      }
})

export const getTrendingMovies = () => {
    return instance.get("trending/movie/week")
};

export const getMovieById = id => {
    return instance.get(`movie/${id}`)
}

export const getMovieBySearch = search => {
    return instance.get(`search/movie`, {
      params: {
        query: search,
        page: 1
      },
    });
  };

export const getMovieCast = id => {
    return instance.get(`movie/${id}/credits`);
  };
  
export const getMovieReviews = id => {
    return instance.get(`movie/${id}/reviews`);
  };