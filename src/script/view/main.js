import $ from "jquery";
import "../component/app-bar.js";
import "../component/search-bar.js";
import "../../style/_custom.css";
import Profile from "../../assets/images/profile.jpg";
import DataSource from "../model/data-source.js";
import Render from "./dom.js";

const main = () => {
  const profileImg = document.querySelector(".profile-image");
  profileImg.src = Profile;
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const mealsData = await DataSource.getMealsData();
      Render.renderResult(mealsData);
    } catch (error) {
      Render.fallbackResult(error);
    }
  });
  const formSearch = document.querySelector("#form-search");
  formSearch.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (searchElement.value) {
      try {
        const mealData = await DataSource.searchMeal(searchElement.value);
        Render.renderResult(mealData);
      } catch (error) {
        Render.fallbackResult(error);
      }
    } else {
      Render.renderResult("Data Tidak Ditemukan");
    }
  });
  const navLinks = document.querySelectorAll(".nav-link");
  for (let navLink of navLinks) {
    navLink.addEventListener("click", (event) => {
      $("#navbarNavDropdown").toggleClass("show");
    });
  }
};
export default main;
