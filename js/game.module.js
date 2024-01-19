import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";
export class Game {
  constructor() {
    this.ui = new Ui();
    this.getGames("mmorpg");
    document.querySelectorAll(".nav-link").forEach((Category) => {
      Category.addEventListener("click", (e) => {
        document
          .querySelector(".navbar-nav .active")
          .classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });
  }
  async getGames(category) {
    document.querySelector(".loading").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4cb9234206mshd527c89ee116e79p1a3317jsn13d9413c1c2f",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      this.ui.showGames(result);
      this.clickDetails();
      document.querySelector(".loading").classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
  }
  clickDetails() {
    document.querySelectorAll(".card").forEach((game) => {
      game.addEventListener("click", () => {
        this.handelDetailes(game.dataset.id);
      });
    });
  }
  handelDetailes(id) {
    const details = new Details(id);
    document.getElementById("games").classList.add("d-none");
    document.getElementById("details").classList.remove("d-none");
  }
}
