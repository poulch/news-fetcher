export default class NewsItemView {
  constructor({ model }) {
    this.model = model;
  }

  render() {
    if (!this.rootEl) {
      const newsFragment = document.createDocumentFragment();
      const content = document.createElement('article');
      this.titleElement = document.createElement('h1');
      this.authorElement = document.createElement('h2');
      this.linkElement = document.createElement('a');

      this.titleElement.appendChild(this.linkElement);
      content.appendChild(this.authorElement);
      content.appendChild(this.titleElement);
      newsFragment.appendChild(content);

      this.rootEl = newsFragment;
      this.buildData();
    }

    return this;
  }

  update() {
    this.buildData();
  }

  buildData() {
    const { author, title, url } = this.model;
    this.linkElement.textContent = title;
    this.linkElement.href = url;
    this.authorElement.textContent = author;
  }

  getRootEl() {
    return this.rootEl;
  }
}
