import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "display"]

  connect() {
    console.log("Controller connected");
  }

  insertRecipes (data) {
    this.displayTarget.classList.remove('d-none')
    data.forEach(recipe => {
      this.displayTarget.insertAdjacentHTML('beforeend', `<h3>${recipe['title']}</h3>`)
      this.displayTarget.insertAdjacentHTML('beforeend', `<p>${recipe['title']}</p>`)
    });
  }

  fetchInput(UserInput) {
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
    this.displayTarget.classList.add('d-none')
    this.fetchInput(this.inputTarget.value)
  }
}
