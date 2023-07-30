import { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import LayOut from '../LayOut/LayOut';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute';
import {
  getInitialMovies
} from '../../utils/MoviesApi';
import {
  register,
  authorize,
  getUserProfile,
  changeUserProfile
} from '../../utils/MainApi';
import {
  getSavedMovies,
  addMovie,
  deleteMovie
} from '../../utils/MainApi';
import {
  getLocalStorageToken,
  setLocalStorageToken,
  removeLocalStorageToken,
  getLocalStorageMovies,
  setLocalStorageMovies,
  removeLocalStorageMovies,
  removeLocalStorageUserSearch
} from '../../utils/localStorage';
import { convertMovies } from '../../utils/converter';


function App() {
  const location = useLocation();
  const navigate = useRef(useNavigate());
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    email: "",
  });
  const [savedMovies, setSavedMovies] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //Флаг окончания загрузки из LocalStorage
  const [isLocalStorageRead, setIsLocalStorageRead] = useState(false);
  const saveToken = ({ token }) => {
    setLocalStorageToken(token);
    setToken(token);
    setIsLoggedIn(true);
  };

  const registerUser = ({ name, email, password }) => {
    register(name, email, password)
      .then(saveToken)
      .then(() => { navigate.current('/movies', { replace: true }); })
      .catch((error) => {
        console.log(`Ошибка регистрации пользователя: ${error}`);
      })
      .finally(() => {
        setIsRegistered(true);
      });
  }

  const loginUser = ({ password, email }) => {
    authorize(email, password)
      .then(saveToken)
      .then(() => { navigate.current('/movies', { replace: true }); })
      .catch((error) => {
        console.log(`Ошибка авторизации пользователя: ${error}`);
        setIsLoginFailed(true);
      })
  }

  useEffect(() => {
    setToken(getLocalStorageToken());
    setIsLocalStorageRead(true);
  }, [])

  useEffect(() => {
    if (!token) {
      // Окончание загрузки только после окончания чтения из LocalStorage для предотвращения "мигания"
      isLocalStorageRead && setIsLoading(false);
      return;
    }
    getUserProfile(token).then(user => {
      setCurrentUser(user);
      setIsLoggedIn(true);
    })
      .catch(error => {
        console.log(`Ошибка проверки токена: ${error}`);
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (isLocalStorageRead && !isLoggedIn) {
      navigate.current('/', { replace: true });
    }
    if (isLoggedIn) {
      getSavedMovies(token).then(movies => { setSavedMovies(movies) });
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  const signOut = (() => {
    removeLocalStorageToken();
    removeLocalStorageMovies();
    removeLocalStorageUserSearch();
    setToken("");
    setIsLoggedIn(false);
    setCurrentUser({
      _id: "",
      email: "",
    });
  })

  const handleUpdateUser = ((userProfile) => {
    return changeUserProfile(userProfile, token).then(user => {
      setCurrentUser(user);
    })

  });

  const loadMoviesAsync = () => {
    const movies = getLocalStorageMovies();
    if (movies.length > 0) {
      return Promise.resolve(movies);
    }
    return getInitialMovies()
      .then(movies => movies.map(convertMovies))
      .then(movies => {
        setLocalStorageMovies(movies)
        return movies;
      })
  }

  const addToSavedMovies = (movie) => {
    return addMovie(movie, token)
      .then(savedMovie => {
        setSavedMovies([...savedMovies, savedMovie]);
        return savedMovie;
      })
  }

  const deleteFromSavedMovies = (movieId) => {
    return deleteMovie(movieId, token)
      .then(deletedMovie => {
        setSavedMovies(savedMovies.filter(m => m._id !== movieId));
        return deletedMovie;
      })
  }

  if (isLoading) {
    return (<Preloader />)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={{ savedMovies, addToSavedMovies, deleteFromSavedMovies }}>
        <div className="app">
          <Routes>
            <Route path="/" element={<LayOut isLoggedIn={isLoggedIn} showFooter={(location.pathname !== '/profile')} showHeader={true} />}>
              <Route path="" element={<Main />} />
              <Route path="profile" element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  onUpdateUser={handleUpdateUser}
                  signOut={signOut}
                  element={Profile}
                />
              } />
              <Route path="movies" element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  loadMovies={loadMoviesAsync}
                  element={Movies}
                />
              } />
              <Route path="saved-movies" element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={SavedMovies}
                />
              } />
            </Route>
            <Route path="/" element={<LayOut showFooter={false} showHeader={false} />}>
              <Route path="signup" element={<Register registerUser={registerUser} />} />
              <Route path="signin" element={<Login loginUser={loginUser} />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider >
  );
}

export default App;
