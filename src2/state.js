// auth.js
import Cookies from 'js-cookie';

const TOKEN_KEY = 'ask;dm;askd;lk;laskd;lkas;lsdkl;askd;laks';

export const setAuthToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Set the token with a 7-day expiration
};

export const getAuthToken = () => {
    return Cookies.get(TOKEN_KEY);
};

export const removeAuthToken = () => {
    Cookies.remove(TOKEN_KEY);
};
