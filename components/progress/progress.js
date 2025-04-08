import { state } from "../../state.js";

class Progress extends HTMLElement {
  route;
  connectedCallback() {
    state.observe((key, value) => this.renderInteraction(key, value));
    this.renderInteraction();
  }

  template(_, state) {
    const sections = [
      "Home",
      "Work",
      "Projects",
      "Freelance",
      "About",
      "Contact",
    ];

    const heartsRow = `${sections
      .map(
        (section) =>
          `<div class="inner_progress_panel"><div>${section}</div> <div>${
            state[section]
              ? "<img src='images/heart.png'>"
              : "<img src='images/heart_off.png'>"
          }</div></div>`
      )
      .join("")}`;

    const overAllRow = ``;
    const contentRow = ``;

    return `<div class='hearts_progress'>${heartsRow}${overAllRow}${contentRow}</div>`;
  }

  renderInteraction(key, value) {
    this.innerHTML = this.template`${state}`;
  }
}

if (!customElements.get("p-rogress")) {
  customElements.define("p-rogress", Progress);
}

export { Progress };
