import { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
  HTTP_CONFLICT
} from '../../utils/constants';


function App() {
  const location = useLocation();
  const navigate = useRef(useNavigate());

  const [movies, setMovies] = useState([]);


  const [currentUser, setCurrentUser] = useState({
    _id: "",
    email: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileMessage, setProfileMessage] = useState('');
  //Флаг окончания загрузки из LocalStorage
  const [isLocalStorageRead, setIsLocalStorageRead] = useState(false);
  const saveToken = ({ token }) => {
    localStorage.setItem("token", token);
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
    setToken(localStorage.getItem("token"));
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
    // eslint-disable-next-line
  }, [isLoggedIn]);

  const signOut = (() => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
    setCurrentUser({
      _id: "",
      email: "",
    });
  })

  const handleUpdateUser = ((userProfile) => {
    changeUserProfile(userProfile, token).then(user => {
      setCurrentUser(user);
      setProfileMessage('Данные профиля успешно обновлены.');
    })
      .catch(error => {
        error.code === HTTP_CONFLICT
          ? setProfileMessage('Пользователь с таким email уже существует.')
          : setProfileMessage('При обновлении профиля произошла ошибка.');
      });
  });















  useEffect(() => {
    getInitialMovies().then(movies => {
      setMovies(movies);
    })
      .catch(error => console.log(`Ошибка загрузки списка фильмов: ${error}`));
  }, []);

  if (isLoading) {
    return (<Preloader />)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<LayOut showFooter={(location.pathname !== '/profile')} showHeader={true} />}>
            <Route path="" element={<Main />} />
            <Route path="profile" element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                profileMessage={profileMessage}
                onUpdateUser={handleUpdateUser}
                signOut={signOut}
                element={Profile}
              />
            } />
            <Route path="movies" element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                movies={movies}
                element={Movies}
              />
            } />
            <Route path="saved-movies" element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                movies={movies}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
