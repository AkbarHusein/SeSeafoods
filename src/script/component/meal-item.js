class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="col mb-4">
            <div class="card">
              <img
                src="${this._meal.strMealThumb}"
                class="card-img-top"
                alt="Image"
              />
              <div class="card-body">
                <h5 class="card-title">${this._meal.strMeal}</h5>
              </div>
            </div>
        </div>
    `;
  }

  renderError(error) {
    this.innerHTML = `
            <div class="alert alert-danger" role="alert">
            ${error}
            </div>
        `;
  }
}
customElements.define("meal-item", MealItem);
