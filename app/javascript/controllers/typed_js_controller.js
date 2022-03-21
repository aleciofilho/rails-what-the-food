import { Controller } from "@hotwired/stimulus"
// Don't forget to import the NPM package
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Find your recipes with the ingredients you have", "You can sign up for manage your fridge", "Lastly you can favorite your most loved recipes"],
      typeSpeed: 70,
      loop: true
    });
  }
}
