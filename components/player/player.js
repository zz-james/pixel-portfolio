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
    // this.tileIndex = this.getAttribute("index");
    // const cols = this.parentElement.tileMapCols;
    // // convert index into x and y props
    // const y = (this.tileIndex / cols) | 0;
    // const x = this.tileIndex - 1 - cols * y;

    this.style.setProperty("--player-left", 170);
    this.style.setProperty("--player-top", 280);
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
    console.log(route);
  }
}

if (!customElements.get("p-layer")) {
  customElements.define("p-layer", Player);
}

export { Player };
