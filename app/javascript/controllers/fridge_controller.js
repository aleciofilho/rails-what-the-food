import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["submit", "form", "input", "ingredients", "ingredient", "button"]

  connect() {
    console.log("Fridge connected")
  }

    buildQuery (event) {
      event.preventDefault()
      let query = ""
      this.ingredientTargets.forEach(ingredient => {
        if (ingredient.classList.contains('active')) {
          query += `${ingredient.innerText},`;
        }})
      // this.fetchData(ingredient.innerText)
      // // query = query.slice(0, -1);
      this.inputTarget.value = query
      this.formTarget.submit()
      // this.fetchData()
      // this.formTarget.reset();
      // console.log(query)
    }

    fetchData (ingredient) {
      const url = `${this.formTarget.action}`
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ingredient})
      }).then(response => response.text())
      .then((data) => {
        console.log(data)
        // this.ingredientsTarget.insertAdjacentHTML("beforeend", data)
        // console.log("cheguei aqui")
      })
    // .then(pegar @ingredients)
    // .then(data => buildHTML(data))
    }

    // addIngredients (event) {
    //   event.preventDefault()
    //   const url = `${this.formTarget.action}`
    //   this.fetchData(url)
    //   this.formTarget.reset();
    // }

  // buildHTML (data) {
  //   data.forEach ((element) => {
  //     const button = `<span class="btn btn-primary"> ${element.name} </span>`
  //     this.ingredientsTarget.insertAdjacentHTML("beforeend", button)
  //   })
  // }

  activate (event) {
    event.currentTarget.classList.toggle('active')
    this.ingredientTargets.forEach ((ingredient) => {
      if (ingredient.innerText === event.currentTarget.innerText) {
        ingredient.classList.toggle('active')
      }
    })
  }
}
