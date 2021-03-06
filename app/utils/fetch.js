const API_KEY = 'fae754134d254be9a2e3faa4afe42d50';
const API_URL = `https://newsapi.org/v1/articles?source=the-verge&apiKey=${API_KEY}&sortBy=latest`;

const fetchNews = () => fetch(API_URL).then(response => response.json());
const fetchNewsInterval = (interval, callback) =>
  setInterval(() => callback(fetchNews()), interval);

export default {
  fetch: fetchNews,
  fetchInterval: fetchNewsInterval
};
