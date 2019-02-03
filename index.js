import NewsController from './app/index';
import fetchService from './app/utils/fetch';

new NewsController(fetchService);
