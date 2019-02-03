import NewsItem from './newsItem';

export default class NewsCollection {
  constructor() {
    this.news = [];
    this.observers = [];
  }

  static fromJSON(json) {
    const newsCollection = new NewsCollection();
    newsCollection.pushNews(json.articles);
    return newsCollection;
  }

  pushNews(news) {
    news = news.map(news => new NewsItem(news));
    this.news.push(...news);
    this.observers.forEach(observer => observer(news));
  }

  update(news) {
    const isTitleNews = newNews => this.news.every(news => !news.isDuplicate(newNews));
    const distinctNews = news.filter(isTitleNews);

    if (distinctNews.length > 0) {
      this.pushNews(distinctNews);
    }
  }

  observe(observer) {
    this.observers.push(observer);
  }
}
