class Player extends HTMLElement {
  positions = {
    Home: {
      left: 170,
      top: 280,
    },
    Work: {
      left: 250,
      top: 400,
    },
  };
  route; /*string*/

  connectedCallback() {
    this.id = "player";
    this.attachListeners();
    this.locationHashChanged();
  }

  attachListeners() {
    window.addEventListener("hashchange", () => this.locationHashChanged());
  }

  locationHashChanged() {
    const [route] = window.location.hash.substring(1).split("/");

    this.route = decodeURI(route);
    this.style.setProperty("--player-left", this.positions[route].left);
    this.style.setProperty("--player-top", this.positions[route].top);
  }
}

if (!customElements.get("p-layer")) {
  customElements.define("p-layer", Player);
}

export { Player };
