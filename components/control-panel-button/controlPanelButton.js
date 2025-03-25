class ControlPanelButton extends HTMLElement {
  label;

  connectedCallback() {
    this.attachEvents();
    this.label = this.innerHTML;
    this.color = this.parentElement.getButtonColor(this.label);
    this.style.setProperty(
      "border-image-source",
      `url(images/${this.color}_button_blank.png)`
    );
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
          <span class='control_panel_button_text'>
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
