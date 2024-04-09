import React from 'react'
import Banner from "./components/Banner/Banner";
import "./HomePage.style.css";
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";


const HomePage = () => {
  return (
    <div className="page-bg-body">
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  );
  
}

export default HomePage
