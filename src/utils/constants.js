const { REACT_APP_BASE_URL: baseUrl = 'http://localhost:3100' } = process.env;
const { REACT_APP_BASE_MOVIES_URL: moviesBaseUrl = 'https://api.nomoreparties.co' } = process.env;
const HTTP_CONFLICT = 409;

export {
    baseUrl,
    moviesBaseUrl,
    HTTP_CONFLICT
}