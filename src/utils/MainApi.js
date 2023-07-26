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
   * Запрос на создание новой карточки
   * @param {Object} card
   */
export const addNewCard = (card, token) => makeRequest('/cards', 'POST', card, token);

/**
   * Запрос на удаление карточки
   * @param {String} cardId
   */
export const deleteCard = (cardId, token) => makeRequest(`/cards/${cardId}`, 'DELETE', null, token);

/**
  * Запрос на добавление лайка карточке
  * @param {String} cardId
  */
export const likeCard = (cardId, token) => makeRequest(`/cards/${cardId}/likes`, 'PUT', null, token);

/**
  * Запрос на снятие лайка с карточки
  * @param {String} cardId
  */
export const unlikeCard = (cardId, token) => makeRequest(`/cards/${cardId}/likes`, 'DELETE', null, token);

/**
  * Запрос на изменение аватара
  * @param {String} avatar
  */
export const changeAvatar = (avatar, token) => makeRequest('/users/me/avatar', 'PATCH', { avatar }, token);