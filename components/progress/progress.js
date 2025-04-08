import { state } from "../../state.js";

class Progress extends HTMLElement {
  route;
  connectedCallback() {
    state.observe((key, value) => this.renderInteraction(key, value));
    // this.attachListeners();
    // this.locationHashChanged();
  }

  attachListeners() {
    // window.addEventListener("hashchange", () => this.locationHashChanged());
  }

  locationHashChanged() {
    // const [route] = window.location.hash.substring(1).split("/");
    // const newRoute = decodeURI(route) || "Home";
    // this.route = newRoute;
  }

  renderInteraction(key, value) {
    this.innerHTML = JSON.stringify(state);
  }
}

if (!customElements.get("p-rogress")) {
  customElements.define("p-rogress", Progress);
}

export { Progress };
