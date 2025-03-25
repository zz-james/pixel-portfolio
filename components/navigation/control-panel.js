import { ControlPanelButton } from "../control-panel-button/controlPanelButton.js";

class ControlPanel extends HTMLElement {
  buttonsData = {
    Home: "red",
    Work: "orange",
    Skills: "yellow",
    "Free-lance": "green",
    About: "blue",
    Contact: "purple",
  };

  connectedCallback() {
    this.attachListeners();
    this.render();
  }

  attachListeners() {
    this.addEventListener("control-panel-button-mouse-up", (e) => {
      alert(e.detail);
    });
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
