import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <Main />} />
        <Route path="/signup" element={
          <Register
          />} />
        <Route path="/signin" element={
          <Login
          />} />
        <Route path="/profile" element={
          <Profile
          />} />
        <Route path="/movies" element={
          <Movies />
        } />
        <Route path="/saved-movies" element={
          <SavedMovies />
        } />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
