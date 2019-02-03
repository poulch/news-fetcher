import { fetchNews, fetchNewsInterval } from './utils/fetch';
import NewsModel from './model/news';
import NewsView from './view/news';

export default class NewsController {
  constructor() {
    const INTERVAL = 2000;

    fetchNews().then(news => {
      this.model = NewsModel.fromJSON(news);
      this.view = new NewsView({ model: this.model });
      this.view.render();

      fetchNewsInterval(INTERVAL, promise => {
        promise.then(response => this.model.update(response.articles));
      });

      document.getElementById('app').appendChild(this.view.getRootEl());
    });
  }
}
