import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["submit", "form", "input", "ingredients", "ingredient", "button"]

  connect() {
    console.log("searchbar controller connected")
  }

  // search () {
    //   this.ingredientsTarget.classList.toggle('d-none')
    // }

    fetchData (url) {
      fetch(url, { headers: { "Accept": "text/plain" } })
      .then(response => response.text())
      .then((data) => {
      this.ingredientsTarget.outerHTML = data
      })
    // .then(pegar @ingredients)
    // .then(data => buildHTML(data))
    }

    search (event) {
      event.preventDefault()
      const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
      this.fetchData(url)
      this.formTarget.reset();
    }

  // buildHTML (data) {
  //   data.forEach ((element) => {
  //     const button = `<span class="btn btn-primary"> ${element.name} </span>`
  //     this.ingredientsTarget.insertAdjacentHTML("beforeend", button)
  //   })
  // }

  activate (event) {
    console.log(event)
    event.currentTarget.classList.toggle('active')
    this.ingredientTargets.forEach ((ingredient) => {
      if (ingredient.innerText === event.currentTarget.innerText) {
        ingredient.classList.toggle('active')
      }
    })
    this.ingredientsTarget.classList.toggle('d-none')
  }

}
