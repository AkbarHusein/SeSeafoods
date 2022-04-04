class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
      <a class="navbar-brand font-weight-bolder" href="/">
        <h2>SeSeafoods</h2>
      </a>
      <button class="btn-hamburger navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto h5">
          <li class="nav-item">
           <a class="nav-link" href="#katalog">Katalog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tentang">Tentang</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;
  }
}
customElements.define("app-bar", AppBar);
