class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
            <input type="search" name="search_meal" id="searchElement" class="form-control" placeholder="Search what you want & Press Enter...">
        `;
  }
}

customElements.define("search-bar", SearchBar);
