import {
    SERVER_ERROR_MESSAGE,
    HTTP_SERVER_ERROR
} from './constants';
export function MovieError(code, message) {
    this.code = code;
    this.message = message;
}

export const createMakeRequest = (baseUrl) => (url, method, body, token) => {
    const options = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${baseUrl}${url}`, options)
        .then(response => response.json()
            .then(body => {
                if (response.ok) {
                    return body;
                }
                throw new MovieError(response.status, body.message);
            }))
        .catch(error => {
            if (error instanceof MovieError) { throw error; }
            throw new MovieError(HTTP_SERVER_ERROR, SERVER_ERROR_MESSAGE);
        });
};