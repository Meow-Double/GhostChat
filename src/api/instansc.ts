import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ghostchat-server.onrender.com/'
});
