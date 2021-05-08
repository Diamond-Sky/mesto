export default class Section {
  constructor({renderer, containerSelector}) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(data, myId) {
    data.forEach(item => this._renderer(item, myId))
  }

  addItem(element) {
    this._container.append(element);
  }

  addItemUpList(element) {
    this._container.prepend(element);
  }
}