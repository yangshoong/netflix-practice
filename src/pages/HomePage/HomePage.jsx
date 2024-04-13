import React from 'react'
import Banner from "./components/Banner/Banner";
import "./HomePage.style.css";
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import RecommendedMovieSlide from "./components/RecommendedMovieSlide/RecommendedMovieSlide";


const HomePage = () => {
  return (
    <div className="page-bg-body">
      <Banner />
      <RecommendedMovieSlide />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  ); 
  // Banner, now playing, Popular, Top rate, Upcoming 컴포넌트를 실행시킨다. 
  
}

export default HomePage
