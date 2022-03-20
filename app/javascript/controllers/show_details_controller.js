import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["id", "serving", "minutes", "url", "summary", "likes", "dotenv"]

  connect() {
  }

  insertDetails(data) {
    this.likesTarget.insertAdjacentHTML('beforeend', `${data.aggregateLikes} <i class="fas fa-thumbs-up"></i>`);
    this.servingTarget.insertAdjacentHTML('beforeend', `Serving ${data.servings} people`);
    this.minutesTarget.insertAdjacentHTML('beforeend',` ${data.readyInMinutes} minutes`);
    this.summaryTarget.insertAdjacentHTML('beforeend', `"${data.summary.substring(0, 280)}..."`);
    this.urlTarget.insertAdjacentHTML('beforeend', `<a href="${data.sourceUrl}" target="_blank">Go to this recipe webpage</a>`);
  }

  fetchRecipe(id) {
    console.log(id);
    console.log(this.dotenvTarget.innerText);
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.dotenvTarget.innerText.trim()}&includeNutrition=false`
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
