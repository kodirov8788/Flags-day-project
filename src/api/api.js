import axios from "axios";

const Api = axios.create({
    // baseURL: 'http://localhost:5001/'
    baseURL: 'https://fastfind.uz'

});

export default Api

