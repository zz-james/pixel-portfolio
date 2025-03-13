import { WebHarpStrings } from "../strings/strings.js";

class WebHarpApp extends HTMLElement {
  // properties
  stringsElement;
  lastPoint;

  connectedCallback() {
    this.innerHTML =
      '<webharp-strings strings="' +
      this.getAttribute("strings") +
      '"></webharp-strings>';

    this.stringsElement = this.querySelector("webharp-strings");
    this.addEventListener("mousemove", (e) => this.onMouseMove(e));
  }

  onMouseMove(e) {
    const { pageX: x, pageY: y } = e;

    this.stringsElement.points = {
      last: this.lastPoint,
      current: {
        x,
        y,
      },
    };
    this.lastPoint = {
      x,
      y,
    };
  }
}

if (!customElements.get("webharp-app")) {
  customElements.define("webharp-app", WebHarpApp);
}

export { WebHarpApp };
