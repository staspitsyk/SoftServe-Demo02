import { DetailstView } from "./DetailsView.js";

export class DetailsController {
  constructor({ subscribe }) {
    this.view = new DetailstView();
    this.subscribe = subscribe;
    this.subscribe("get-details", this.showDetails.bind(this));
  }

  showDetails(animal) {
    this.view.renderAnimal(animal);
  }
}
