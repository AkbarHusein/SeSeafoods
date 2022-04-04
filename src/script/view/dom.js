import "../component/meal-list.js";
import Swal from "sweetalert2";

class Render {
  static renderResult(mealsData) {
    const modalContent = document.getElementById("modalContent");
    if (modalContent.hasChildNodes()) {
      modalContent.removeChild(modalContent.childNodes[0]);
    }
    const mealList = document.createElement("meal-list");
    mealList.classList.add(
      "row",
      "row-cols-1",
      "row-cols-sm-2",
      "row-cols-md-3",
      "row-cols-xl-4"
    );
    modalContent.appendChild(mealList);
    if (mealsData.length > 0) {
      const mealListElement = document.querySelector("meal-list");
      mealListElement.meals = mealsData;
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Data Tidak Ditemukan!",
      });
    }
  }
  static fallbackResult(error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error}`,
    });
  }
}
export default Render;
