import { Ui } from "./ui.module.js";
export class Details {
  constructor(id) {
    this.ui = new Ui();
    this.getDetails(id);
    document.querySelector(".btnClose").addEventListener("click", function () {
      document.getElementById("games").classList.remove("d-none");
      document.getElementById("details").classList.add("d-none");
    });
  }
  async getDetails(id) {
    document.querySelector(".loading").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
      console.log(result);
      this.ui.showDetails(result);
      document.querySelector(".loading").classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
  }
}
