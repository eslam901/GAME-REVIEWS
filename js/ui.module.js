export class Ui {
  showGames(array) {
    let gameBox = ``;
    for (let i = 0; i < array.length; i++) {
      const x = array[i];
      gameBox += `
      <div class="col">
          <div role="button" data-id="${x.id}" class="card h-100">
            <div class="card-body">
              <figure>
                <img src="${x.thumbnail}" class="card-img-top object-fit-cover h-100">
              </figure>
              <figcaption>
                <div class="hstack justify-content-between mb-1">
                  <h3 class="h6 small text-white">${x.title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
                </div>
                <p class="card-text small text-center text-white-50">
                  ${x.short_description}
                </p>
              </figcaption>
            </div>
            <div class="card-footer small hstack justify-content-between">
              <span class="badge">${x.genre}</span>
              <span class="badge">${x.platform}</span>
            </div>
          </div>
        </div>
      `;
    }
    document.querySelector("main").innerHTML = gameBox;
  }
  showDetails(obj) {
    const detailsBox = `
          <div class="col-xl-4">
            <div><img src="${obj.thumbnail}" class="w-100" alt="" /></div>
          </div>
          <div class="col-xl-8">
            <div class="px-4 text-white">
              <h4>Title: ${obj.title}</h4>
              <h6 class="py-2">Category: <span>${obj.genre}</span></h6>
              <h6 class="py-2">Platrofm: <span>${obj.platform}</span></h6>
              <h6 class="py-2">Status: <span>${obj.status}</span></h6>
              <p class="text-details">
                ${obj.description}
              </p>
              <button class="btn btn-outline-warning mt-4">
                <a href="${obj.game_url}" target="_blank" class="text-white">Show Game</a>
              </button>
            </div>
          </div>
      `;
    document.getElementById("detailsData").innerHTML = detailsBox;
  }
}
