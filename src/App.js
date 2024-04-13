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
          {/* :id는 동적 경로 매개변수로써 해당 부분에 어떤 값이 오든 상관 없이 그 값을 매개변수로 인식한다는 의미를 갖는다. */}
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
