import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["id", "info", "card"]

  connect() {
  }

  insertDetails(data) {
    this.infoTarget.classList.remove('d-none');
    this.infoTarget.insertAdjacentHTML('beforeend',
      `
      <p>${data.summary}</p>
      <span>Pronto em ${data.readyInMinutes} minutos</span> |
      <span>Serve ${data.servings} pessoas</span><br>
      <a href="${data.sourceUrl}" target="_blank">Ir para o site</a>`);
  }

  fetchRecipe(id) {
    console.log(id);
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=8e744ecd647445a089bee564ac8bcd73&includeNutrition=false`
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.insertDetails(data)
      });
  }

  show(event) {
    event.preventDefault();
    this.infoTarget.innerHTML = '';
    this.infoTarget.classList.add('d-none');
    this.fetchRecipe(this.idTarget.innerText);
  }
}
