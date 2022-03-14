import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["ingredient", "input"]

  connect() {
    console.log("Controller connected");
  }

  activate (event) {
    event.currentTarget.classList.toggle('active');
    // this.ingredientTarget.classList.toggle('active');
    console.log("active");
  }

  buildQuery (event) {
    let query = ""
    this.ingredientTargets.forEach(ingredient => {
      if (ingredient.classList.contains('active')) {
        query += `${ingredient.innerText},+`;
      }})
    query = query.slice(0, -2);
    console.log(query);
    this.inputTarget.value = query
    console.log(inputTarget.value)
    event.preventDefault()
  }

  // insertRecipes (input) {
  //   this.displayTarget.classList.remove('d-none');
  //   this.displayTarget.insertAdjacentHTML('beforeend', `<%= @recipes = @spoonacular.recipes(${input})%>`)
  // }

  // listRecipes(event) {
  //   event.preventDefault()
  //   this.displayTarget.innerHTML = ''
  //   this.displayTarget.classList.add('d-none')
  //   this.insertRecipes(this.inputTarget.value.replaceAll(/[, ]+/g, ',+'))
  // }
}
