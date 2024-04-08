import React from 'react'
import Banner from "./components/Banner/Banner";
import "./HomePage.style.css";
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';


const HomePage = () => {
  return (
<div className="page-bg-body">
    <Banner/>
    <PopularMovieSlide/>

  </div>
  );
  
}

export default HomePage
