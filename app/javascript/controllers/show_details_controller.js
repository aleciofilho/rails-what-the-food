import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["id", "serving", "minutes", "url", "summary", "likes"]

  connect() {
  }

  insertDetails(data) {
    this.likesTarget.insertAdjacentHTML('beforeend', `${data.aggregateLikes} <i class="fas fa-thumbs-up"></i>`);
    this.servingTarget.insertAdjacentHTML('beforeend', `Serving ${data.servings} people`);
    this.minutesTarget.insertAdjacentHTML('beforeend',` ${data.readyInMinutes} minutes`);
    this.summaryTarget.insertAdjacentHTML('beforeend', `"${data.summary.substring(0, 280)}..."`);
    this.urlTarget.insertAdjacentHTML('beforeend', `<a href="${data.sourceUrl}" target="_blank">Ir para o site</a>`);
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
    this.fetchRecipe(this.idTarget.innerText);
  }
}
