import Render from "../view/dom.js";
import axios from "axios";
class DataSource {
  static getMealsData() {
    const baseURL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    return axios({
      method: "get",
      url: `${baseURL}`,
    })
      .then((response) => {
        const dataMeals = response.data.meals;
        if (dataMeals) {
          return Promise.resolve(dataMeals);
        } else {
          return Promise.reject(new Error("No meals found"));
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  static async searchMeal(searchTerm) {
    let resultFiltered = [];
    try {
      const result = await this.getMealsData();
      result.filter((data) => {
        if (data.strMeal.toLowerCase().includes(searchTerm.toLowerCase())) {
          resultFiltered.push(data);
        }
      });
    } catch (error) {
      Render.fallbackResult(error);
    }
    return resultFiltered;
  }
}
export default DataSource;
