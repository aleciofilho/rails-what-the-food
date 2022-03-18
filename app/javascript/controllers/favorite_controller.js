import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "alert", "duplicate", "heart"]

  connect() {
  }

  save(event){
    event.preventDefault();
    const p = event.currentTarget.parentNode;
    event.currentTarget.classList.toggle("heart-icon-inactive")
    if (p.classList.contains('saved')){
      this.duplicateTarget.classList.remove('d-none');
      setTimeout(() => { this.duplicateTarget.classList.add('d-none'); }, 3000);
    }else {
      this.alertTarget.classList.remove('d-none');
      p.classList.add('saved');
      setTimeout(() => { this.alertTarget.classList.add('d-none'); }, 3000);
    }
  }

  close(event){
    const p = event.currentTarget.parentNode;
    p.classList.toggle('d-none');
  }
}
