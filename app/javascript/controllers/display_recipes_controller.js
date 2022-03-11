import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "display"]

  connect() {
    console.log("Controller connected");
  }

  insertRecipes (data) {
    this.displayTarget.classList.remove('d-none');
    data.forEach(recipe => {
      this.displayTarget.insertAdjacentHTML('beforeend',
      `<div class="card" data-controller="show-details">
        <img src="${recipe['image']}">
        <div class='info'>
          <a href="#" data-action="click->show-details#show">${recipe['title']}</a>
          <p>${recipe['likes']} likes</p>
          <span hidden data-show-details-target="id">${recipe['id']}</span>
          <div class="more-info" data-show-details-target='info'></div>
        </div>
      </div>`)
    });
  }

  fetchInput(UserInput) {
    console.log(UserInput);
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=ad1c142c27cb4f82a8078acc4e1522d5&ingredients=${UserInput}&number=10`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.insertRecipes(data);
      });
  }

  listRecipes(event) {
    event.preventDefault()
    this.displayTarget.innerHTML = ''
    this.displayTarget.classList.add('d-none')
    this.fetchInput(this.inputTarget.value.replaceAll(/[, ]+/g, ',+'))
  }
}
