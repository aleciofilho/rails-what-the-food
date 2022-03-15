import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["submit", "form", "input", "ingredients", "button"]

  connect() {
    console.log("searchbar controller connected")
  }

  search (event) {
    event.preventDefault()
    callRails(this.inputTarget.innerText)
    this.formTarget.reset();
  }

  // callRails () {
  //   fetch(endereço relativo da action)
  //   .then(pegar @ingredients)
  //   .then(data => buildHTML(data))
  // }

  // buildHTML (data) {
  //   data.forEach ((element) => {
  //     const button = `<span class="btn btn-primary"> ${element.name} </span>`
  //     this.ingredientsTarget.insertAdjacentHTML("beforeend", button)
  //   })
  // }

  activate (event) {
    event.currentTarget.classList.toggle('active')
  }

}
