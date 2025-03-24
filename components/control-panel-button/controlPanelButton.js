class ControlPanelButton extends HTMLElement {
  label;

  connectedCallback() {
    this.attachEvents();
    this.label = this.innerHTML;
    this.render();
  }

  attachEvents() {
    this.addEventListener("mouseup", (e) => {
      this.dispatchEvent(
        new CustomEvent("control-panel-button-mouse-up", {
          bubbles: true,
          cancelable: true,
          detail: this.label,
        })
      );
    });
  }

  render() {
    const html = `
    <button class="control_panel_button button_unstyled">
      <span class='wrapper'>
          <span class='textWrapper'>
            ${this.innerHTML}
          </span>
        </span>
      </span>
    </button>`;
    this.innerHTML = html;
  }
}

if (!customElements.get("c-ontrol-panel-button")) {
  customElements.define("c-ontrol-panel-button", ControlPanelButton);
}

export { ControlPanelButton };
