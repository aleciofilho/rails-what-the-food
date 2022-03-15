import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["id", "info", "card"]

  connect() {
  }

  insertDetails(data) {
    this.infoTarget.insertAdjacentHTML('beforeend',
      `
      <p>"${data.summary.substring(0, 280)}..."</p>
      <span>Pronto em ${data.readyInMinutes} minutos</span> |
      <span>Serve ${data.servings} pessoas</span><br>
      <a href="${data.sourceUrl}" target="_blank">Ir para o site</a>`);
  }

  fetchRecipe(id) {
    console.log(id);
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=eb83e47907a244ab86a9aeccc94ca035&includeNutrition=false`
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.insertDetails(data)
      });
  }

  show(event) {
    event.preventDefault();
    this.infoTarget.innerHTML = '';
    // this.infoTarget.classList.add('d-none');
    if (this.infoTarget.classList.contains('d-none')) {
      this.fetchRecipe(this.idTarget.innerText);
    }
    this.infoTarget.classList.toggle('d-none');
  }
}
