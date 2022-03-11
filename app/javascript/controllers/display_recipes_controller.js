import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "display"]

  connect() {
    console.log("Controller connected");
  }

  insertRecipes (input) {
    this.displayTarget.classList.remove('d-none');
    this.displayTarget.insertAdjacentHTML('beforeend', `<%= @recipes = @spoonacular.recipes(${input})%>`)
  }

  listRecipes(event) {
    event.preventDefault()
    this.displayTarget.innerHTML = ''
    this.displayTarget.classList.add('d-none')
    this.insertRecipes(this.inputTarget.value.replaceAll(/[, ]+/g, ',+'))
  }
}
