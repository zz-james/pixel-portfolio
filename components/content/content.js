// this class is largely just about switching the templates
class Content extends HTMLElement {
  route = "welcome";
  type;

  connectedCallback() {
    this.attachListeners();
    this.locationHashChanged();
  }

  attachListeners() {
    window.onhashchange = () => this.locationHashChanged();
  }

  locationHashChanged() {
    this.route = window.location.hash.substring(1);
    // this.render();
    this.type = db[this.route].type;

    switch (this.type) {
      case null:
        this.style.setProperty("--content-window-visibility", 0);

        this.style.setProperty("--content-window-height", "0%");

        break;
      case "modal":
        this.style.setProperty("--content-window-visibility", 1);
        this.style.setProperty("--content-window-height", "94%");
        this.style.setProperty(
          "--content-window-border-image",
          "url(images/bubble.png)"
        );
        break;
      case "bubble":
        this.style.setProperty("--content-window-visibility", 1);
        this.style.setProperty("--content-window-height", "65%");
        this.style.setProperty(
          "--content-window-border-image",
          "url(images/speech_bubble.png)"
        );
    }

    this.render();
  }

  render() {
    const templateID = db[this.route].contentID;
    const template = document.getElementById(templateID);

    let htmlString = "";
    if (this.type === "modal") {
      // ad close button
      htmlString += `<button class="close_button button_unstyled" onclick="document.location.href='/#Home'"></button>`;
    }
    htmlString += `<div>${template.innerHTML} </div>`;

    this.innerHTML = htmlString;
  }
}

if (!customElements.get("c-ontent")) {
  customElements.define("c-ontent", Content);
}

export { Content };
