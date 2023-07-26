function MovieError(code, message) {
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
            }));
};