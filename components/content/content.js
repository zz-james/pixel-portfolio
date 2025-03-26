// this class is largely just about switching the templates
class Content extends HTMLElement {
  route = "welcome";

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
    const type = db[this.route].type;
    console.log(type);
    switch (type) {
      case null:
        this.style.setProperty("--content-window-height", "0");
        this.style.setProperty("--content-window-border-image", null);
        break;
      case "modal":
        this.style.setProperty("--content-window-height", "94%");
        this.style.setProperty(
          "--content-window-border-image",
          "url(images/bubble.png)"
        );
        break;
      case "bubble":
        this.style.setProperty("--content-window-height", "65%");
        this.style.setProperty(
          "--content-window-border-image",
          "url(images/speech_bubble.png)"
        );
    }
    this.render();
  }

  render() {
    const template = document.getElementById("welcome");

    this.innerHTML = `<div>${template.innerHTML} </div>`;
  }
}

if (!customElements.get("c-ontent")) {
  customElements.define("c-ontent", Content);
}

export { Content };
