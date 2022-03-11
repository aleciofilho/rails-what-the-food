import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["id", "info"]

  connect() {
    console.log('Hello, Recipe Card!');
  }

  insertDetails(data) {
    this.infoTarget.classList.remove('d-none');
    console.log(data.summary);
    this.infoTarget.insertAdjacentHTML('beforeend',
      `
      <p>${data.summary}</p>
      <span>Pronto em ${data.readyInMinutes} minutos</span> |
      <span>Serve ${data.servings} pessoas</span><br>
      <a href="${data.sourceUrl}" target="_blank">Ir para o site</a>`);
  }

  fetchRecipe(id) {
    console.log(id);
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=ad1c142c27cb4f82a8078acc4e1522d5&includeNutrition=false`
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.insertDetails(data)
      });
  }

  show(event) {
    event.preventDefault()
    this.infoTarget.innerHTML = ''
    this.infoTarget.classList.add('d-none')
    this.fetchRecipe(this.idTarget.innerText)
  }
}
