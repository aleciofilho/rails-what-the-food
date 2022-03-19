import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["ingredient", "input", "recipes", "form", "fridgebar"]
  static values = {
    fridge: Array
  }

  connect() {
    console.log("Controller connected");
  }

  activate (event) {
    event.currentTarget.classList.toggle('active');
    // this.ingredientTarget.classList.toggle('active');
    console.log("active");
  }

  activateAll (event) {
    event.preventDefault()
    console.log(this.fridgeValue)
    // this.fridgeValue.forEach(fridge_item => {
    //   this.ingredientTargets.forEach(ingredient => {
    //     if (ingredient.innerText === fridge_item) {
    //       ingredient.classList.add('active')
    //     }
    //   })
    // })
  }

  searchByFridge (event) {
    event.preventDefault()
    this.fetchFridgeIngredients()
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
    // this.inputTarget.value = query
    this.fetchRails(query)
    this.formTarget.reset();
  }

  fetchFridgeIngredients () {
    fetch(`${this.fridgebarTarget.action}`, { headers: { accept: "text/plain" }})
    .then(response => response.text())
    .then((data) => {
      console.log(data)
    })
  }

  fetchRails (query) {
    fetch(`${this.formTarget.action}?ingredients=${query}`, { headers: { accept: "text/plain" }})
    .then(response => response.text())
    .then((data) => {
      this.recipesTarget.innerHTML = data
    })
  }

  // fetchRecipes (query) {
  //   fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=ad1c142c27cb4f82a8078acc4e1522d5&ingredients=${query}&number=10`)
  //   .then(response => response.json())
  //   .then(data => this.insertRecipes(data))
  // }

  // from stackoverflow

  // export default class extends Controller {
  //   static targets = [ 'filt' ];
  //   connect() {
  //     fetch('/recipes', { headers: { accept: "application/json" } })
  //       .then(response => response.json())
  //       .then((data) => {
  //         data.recipes.forEach((rec) => {
  //           const a = rec.ingredients;
  //           .......


  // from search_ingredients_controller

  // fetchData (url) {
  //   fetch(url, { headers: { "Accept": "text/plain" } })
  //   .then(response => response.text())
  //   .then((data) => {
  //   this.ingredientsTarget.outerHTML = data
  //   })
  // // .then(pegar @ingredients)
  // // .then(data => buildHTML(data))
  // }

  // search (event) {
  //   event.preventDefault()
  //   const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
  //   this.fetchData(url)
  //   this.formTarget.reset();
  // }


  // insertRecipes (data) {
  //   data.forEach ((element) => {
  //       const card =
  //       `<div class="card col-4 col-sm-8 m-1 fit-content" style="width: 18rem;" data-controller="show-details" data-show-details-target="card">
  //         <img src=${element.image} class= "card-img-top">
  //         <div class="card-body ">
  //           <a href="#" class="card-title" data-action="click->show-details#show">${element.title}</a>
  //           <p class="card-text">${element.likes}</p>
  //           <span hidden data-show-details-target="id">${element.id}</span>
  //           <div class="more-info d-none" data-show-details-target="info">
  //           </div>
  //         </div>
  //       </div>`
  //       this.recipesTarget.insertAdjacentHTML("beforeend", card)
  //   })
  // }

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
