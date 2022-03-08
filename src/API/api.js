import axios from 'axios';

export const baseUrl = 'https://api.techfestsliet.com';
export const localUrl = 'http://localhost:4000';

export const localUrlIns = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});
