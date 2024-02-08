import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";

import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("Pages/HomePage/HomePage"));
const MovieSearchPage = lazy(() => import ("Pages/MovieSearchPage/MovieSearchPage"));
const NotFoundPage = lazy(() => import("Pages/NotFoundPage/NotFoundPage"));
const SingleMoviePage = lazy(() => import("Pages/SingleMoviePage/SingleMoviePage"));
const CastPage = lazy(() => import("Pages/CastPage/CastPage"));
const ReviewsPage = lazy(() => import("Pages/ReviewsPage/ReviewsPage"));

const AppRoutes = () => {
    return(
    <Suspense fallback={<Loader />} >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MovieSearchPage />} />
            <Route path="movies/:movieId" element={<SingleMoviePage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </Suspense>
          );

};

export default AppRoutes;