import { createMakeRequest } from './MakeRequest';
import { baseUrl } from './constants';

const makeRequest = createMakeRequest(baseUrl);

export const register = (name, email, password) => makeRequest('/signup', 'POST',
  {
    name,
    password,
    email,
  });

export const authorize = (email, password) => makeRequest('/signin', 'POST',
  {
    password,
    email,
  });

/**
  * Запрос данных пользователя
  */
export const getUserProfile = (token) => makeRequest('/users/me', 'GET', null, token);

/**
   * Запрос на изменение данных пользователя
   * @param {Object} userProfile
   */
export const changeUserProfile = (userProfile, token) => makeRequest('/users/me', 'PATCH', userProfile, token);

/**
   * Запрос списка фильмов
   */
export const getSavedMovies = (token) => makeRequest('/movies', 'GET', null, token);

/**
   * Запрос на добавление фильма
   * @param {Object} movie
   */
export const addMovie = (movie, token) => makeRequest('/movies', 'POST', movie, token);

/**
   * Запрос на удаление фильма
   * @param {String} movieId
   */
export const deleteMovie = (movieId, token) => makeRequest(`/movies/${movieId}`, 'DELETE', null, token);