import { createMakeRequest, MovieError } from './MakeRequest';
import {
  baseUrl,
  USER_WRONG_TOKEN_MESSAGE,
  HTTP_BAD_REQUEST
} from './constants';

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
  })
  .then(body => {
    if (!body.token) {
      throw new MovieError(HTTP_BAD_REQUEST, USER_WRONG_TOKEN_MESSAGE)
    }
    return { token: body.token };
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