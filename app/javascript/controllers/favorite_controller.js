import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "alert", "duplicate"]

  connect() {
  }

  save(event){
    event.preventDefault();
    const p = event.currentTarget.parentNode;
    if (p.classList.contains('saved')){
      this.duplicateTarget.classList.toggle('d-none');
    }else {
      this.alertTarget.classList.toggle('d-none');
      p.classList.add('saved');
    }
  }

  close(event){
    const p = event.currentTarget.parentNode;
    p.classList.toggle('d-none');
  }
}
