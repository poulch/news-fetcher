import NewsModel from './model/news';
import NewsView from './view/news';

export default class NewsController {
  constructor(newsFetcher) {
    const INTERVAL = 2000;

    newsFetcher.fetch().then(news => {
      this.model = NewsModel.fromJSON(news);
      this.view = new NewsView({ model: this.model });
      this.view.render();

      newsFetcher.fetchInterval(INTERVAL, promise => {
        promise.then(response => this.model.update(response.articles));
      });

      document.getElementById('app').appendChild(this.view.getRootEl());
    });
  }
}
