class Player extends HTMLElement {
  positions = {
    "": {
      left: 170,
      top: 280,
    },
    Home: {
      left: 260,
      top: 280,
    },
    Work: {
      left: 545,
      top: 670,
    },
    Projects: {
      left: 1100,
      top: 670,
    },
    "Free-lance": {
      left: 170,
      top: 890,
    },
    About: {
      left: 1100,
      top: 288,
    },
    Contact: {
      left: 1100,
      top: 890,
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
    const newRoute = decodeURI(route);
    this.route = newRoute;

    if (!this.positions[newRoute]) return;
    // we make these global
    document.documentElement.style.setProperty(
      "--player-left",
      this.positions[newRoute].left
    );
    document.documentElement.style.setProperty(
      "--player-top",
      this.positions[newRoute].top
    );
  }
}

if (!customElements.get("p-layer")) {
  customElements.define("p-layer", Player);
}

export { Player };
