export const getLocalStorageToken = () => localStorage.getItem('token');
export const setLocalStorageToken = (token) => localStorage.setItem('token', token);
export const removeLocalStorageToken = () => localStorage.removeItem('token');

export const getLocalStorageMovies = () => JSON.parse(localStorage.getItem('movies')) || [];
export const setLocalStorageMovies = (movies) => localStorage.setItem('movies', JSON.stringify(movies));
export const removeLocalStorageMovies = () => localStorage.removeItem('movies');

export const getLocalStorageUserSearch = () => JSON.parse(localStorage.getItem('userSearch')) || { searchText: '', shortMoviesOnly: false };
export const setLocalStorageUserSearch = (userSearch) => localStorage.setItem('userSearch', JSON.stringify(userSearch));
export const removeLocalStorageUserSearch = () => localStorage.removeItem('userSearch');