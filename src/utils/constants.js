export const FIRST_TIP_MESSSAGE = 'Введите запрос в поисковую строку';
export const SEARCH_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const SEARCH_NOT_FOUND_MESSAGE = 'Ничего не найдено';
export const SEARCH_SHORT_MOVIES_NOT_FOUND_MESSAGE = 'Короткометражные фильмы не найдены';
export const SEARCH_VALIDATION_ERROR_MESSAGE = 'Введите ключевое слово для поиска';
export const FIRST_TIP_SAVED_MOVIES_MESSSAGE = 'Вы еще не добавили в сохраненые ни одного фильма';
export const PROFILE_SUCCESS_UPDATE_MESSAGE = 'Данные профиля успешно обновлены.'
export const USER_EMAIL_EXISTS_MESSAGE = 'Пользователь с таким email уже существует.'
export const PROFILE_UPDATE_ERROR_MESSAGE = 'При обновлении профиля произошла ошибка.'

export const { REACT_APP_BASE_URL: baseUrl = 'http://localhost:3100' } = process.env;
export const { REACT_APP_BASE_MOVIES_URL: moviesBaseUrl = 'https://api.nomoreparties.co' } = process.env;

export const HTTP_CONFLICT = 409;