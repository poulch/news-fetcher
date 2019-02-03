export default class NewsItem {
  constructor({ title, author, url }) {
    this.title = title;
    this.author = author;
    this.url = url;
  }

  isDuplicate(news) {
    return news.title === this.title;
  }
}
