import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a72e80997e2977fca5e97af9ce173313',
    language: 'es-Es',
  },
});

export default movieDB;
