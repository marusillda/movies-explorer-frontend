import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import LayOut from '../LayOut/LayOut';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="" element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
        </Route>
        <Route path="/signup" element={
          <Register
          />} />
        <Route path="/signin" element={
          <Login
          />} />
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
    </div>
  );
}

export default App;
