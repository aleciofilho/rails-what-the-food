import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["ingredient", "input", "recipes", "form"]

  connect() {
    console.log("Controller connected");
  }

  activate (event) {
    event.currentTarget.classList.toggle('active');
    // this.ingredientTarget.classList.toggle('active');
    console.log("active");
  }

  buildQuery (event) {
    event.preventDefault()
    this.recipesTarget.innerText = ""
    let query = ""
    this.ingredientTargets.forEach(ingredient => {
      if (ingredient.classList.contains('active')) {
        query += `${ingredient.innerText},+`;
      }})
    query = query.slice(0, -2);
    this.inputTarget.value = query
    this.fetchRecipes(query)
    this.formTarget.reset();
  }

  fetchRecipes (query) {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=22b62d5750be4e5ebd66bbcb23d25b52&ingredients=${query}&number=10`)
    .then(response => response.json())
    .then(data => this.insertRecipes(data))
  }

  insertRecipes (data) {
    data.forEach ((element) => {
        const card =
        `<div class="card col-4 col-sm-8 m-1 fit-content" style="width: 18rem;" data-controller="show-details" data-show-details-target="card">
          <img src=${element.image} class= "card-img-top">
          <div class="card-body ">
            <a href="#" class="card-title" data-action="click->show-details#show">${element.title}</a>
            <p class="card-text">${element.likes}</p>
            <span hidden data-show-details-target="id">${element.id}</span>
            <div class="more-info" data-show-details-target="info">
            </div>
          </div>
        </div>`
        this.recipesTarget.insertAdjacentHTML("beforeend", card)
    })
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
