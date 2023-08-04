const { REACT_APP_BASE_MOVIES_URL } = process.env;

export const convertMovies = (movie) => ({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `${REACT_APP_BASE_MOVIES_URL}${movie.image.url}`,
    trailerLink: movie.trailerLink,
    thumbnail: `${REACT_APP_BASE_MOVIES_URL}${movie.image.formats.thumbnail.url}`,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
})