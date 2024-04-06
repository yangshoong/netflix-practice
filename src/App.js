import './App.css';
import {Routes,Route} from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';



function App() {
  return (

    <Routes>
      <Route className='appLayout' path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies">
          <Route index element={<MoviesPage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
