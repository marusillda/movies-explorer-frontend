import { createMakeRequest } from './MakeRequest';
import { moviesBaseUrl } from './constants';

const makeRequest = createMakeRequest(moviesBaseUrl);

/**
   * Запрос списка фильмов
   */
export const getInitialMovies = () => makeRequest('/beatfilm-movies', 'GET', null);