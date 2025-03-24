class ControlPanelButton extends HTMLElement {
  connectedCallback() {}
}

if (!customElements.get("c-ontrol-panel-button")) {
  customElements.define("c-ontrol-panel-button", ControlPanelButton);
}

export { Tile };
