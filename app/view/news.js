import NewsItemView from './newsItem';

export default class NewsListView {
  constructor({ model }) {
    this.model = model;
    this.model.observe(this.update.bind(this));
  }

  render() {
    if (!this.rootEl) {
      const newsList = document.createElement('section');
      newsList.classList.add('news');
      this.rootEl = newsList;

      this.buildData();
    }
  }

  buildData(news) {
    news = news || this.model.news;
    news.forEach(news => {
      const newsITem = new NewsItemView({ model: news });
      this.getRootEl().appendChild(newsITem.render().getRootEl());
    });
  }

  update(newNews) {
    this.buildData(newNews);
  }

  getRootEl() {
    return this.rootEl;
  }
}
