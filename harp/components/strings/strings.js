import { WebHarpString } from "../string/string.js"; // not referenced but we need to make the customElements.define code execute

class WebHarpStrings extends HTMLElement {
  // properties
  stringsElements;

  connectedCallback() {
    let strings = '<div class="spacer"></div>';
    for (let c = 0; c < this.getAttribute("strings"); c++) {
      strings += "<webharp-string></webharp-string>";
    }
    strings +=
      "<style> \
                    webharp-strings { \
                      height: 100vh; \
                      display: flex; \
                    } \
                    webharp-strings > webharp-string, div.spacer { \
                      flex: 1; \
                    } \
                  </style>";
    this.innerHTML = strings;
    this.stringsElements = this.querySelectorAll("webharp-string");
  }

  /**
   * @param {{ last: { x: number; }; current: number; }} pts
   */
  set points(pts) {
    if (!this.stringsElements) return;
    if (!pts.last || !pts.current) return;

    let magnitude = Math.abs(pts.current.x - pts.last.x);
    let xMin = Math.min(pts.current.x, pts.last.x);
    let xMax = Math.max(pts.current.x, pts.last.x);

    this.stringsElements.forEach((stringElement, index) => {
      if (
        xMin <= stringElement.offsetLeft &&
        xMax >= stringElement.offsetLeft
      ) {
        let strum = {
          power: magnitude,
          string: index,
        };
        stringElement.strum(strum);
      }
    });
  }
}

if (!customElements.get("webharp-strings")) {
  customElements.define("webharp-strings", WebHarpStrings);
}

export { WebHarpStrings };
