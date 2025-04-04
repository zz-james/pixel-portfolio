import { ControlPanelButton } from "../control-panel-button/controlPanelButton.js";

class ControlPanel extends HTMLElement {
  buttonsData = {
    Home: "red",
    Work: "orange",
    Projects: "yellow",
    "Free-lance": "green",
    About: "blue",
    Contact: "purple",
  };

  positions = {
    Home: {
      x: 0,
      y: 0,
    },
    Work: {
      x: 250,
      y: 400,
    },
    Projects: {
      x: 620,
      y: 300,
    },
    "Free-lance": {
      x: 0,
      y: 450,
    },
    About: {
      x: 620,
      y: 0,
    },
    Contact: {
      x: 620,
      y: 450,
    },
  };
  route; /*string*/
  map;

  connectedCallback() {
    this.render();
    this.attachListeners();
    this.map = document.getElementById("game");
    this.locationHashChanged();
  }

  attachListeners() {
    window.addEventListener("hashchange", () => this.locationHashChanged());
  }

  locationHashChanged() {
    const [route] = window.location.hash?.substring(1).split("/");
    /* move map */

    const newRoute = decodeURI(route);
    this.route = newRoute;

    if (!this.positions[newRoute]) return;

    const xcoord = this.positions[newRoute]?.x;
    const ycoord = this.positions[newRoute]?.y;
    this.map.scroll(xcoord, ycoord);
  }

  render() {
    const htmlButtons = Object.keys(this.buttonsData).reduce(
      (acc, label, index) => {
        return (
          acc +
          `<c-ontrol-panel-button buttonindex=${index}>${label}</c-ontrol-panel-button>`
        );
      },
      ""
    );

    this.innerHTML = `${htmlButtons}`;
  }

  getButtonColor(label) {
    return this.buttonsData[label];
  }
}

if (!customElements.get("c-ontrol-panel")) {
  customElements.define("c-ontrol-panel", ControlPanel);
}

export { ControlPanel };
