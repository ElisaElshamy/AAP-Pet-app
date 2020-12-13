import axios from 'axios';

export const API_KEY = 'e41b6bf1618d053c31d524d479c14b5t';
export const BASE_API_URL = 'https://api.adoptapet.com/search/';

export const AXIOS = axios.create({
  baseURL: BASE_API_URL,
});
