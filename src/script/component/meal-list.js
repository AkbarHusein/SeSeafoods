import "./meal-item.js";
class MealList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  }

  renderError(error) {
    console.log(error);
  }
}

customElements.define("meal-list", MealList);
