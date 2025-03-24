import { ControlPanelButton } from "../control-panel-button/controlPanelButton.js";

class ControlPanel extends HTMLElement {
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
    const htmlButtons = [
      "Home",
      "Projects",
      "Skills",
      "Freelance",
      "About Me",
      "Contact",
    ].reduce((acc, label) => {
      return acc + `<c-ontrol-panel-button >${label}</c-ontrol-panel-button>`;
    }, "");

    this.innerHTML = `${htmlButtons}`;
  }
}

if (!customElements.get("c-ontrol-panel")) {
  customElements.define("c-ontrol-panel", ControlPanel);
}

export { ControlPanel };
