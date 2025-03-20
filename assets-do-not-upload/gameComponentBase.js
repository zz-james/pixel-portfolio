class GameComponentBase extends HTMLElement {
  constructor() {
    super();
    this.update();
  }

  update() {
    requestAnimationFrame(() => this.update());
    1;
  }
}

// example implementation
class VisualCountdownTimer extends GameComponentBase {
  connectedCallback() {
    this.timer = 200;
    this.style.backgroundColor = "green";
    this.style.display = "inline-block";
    this.style.height = "50px";
  }

  update() {
    this.timer--;
    if (this.timer <= 0) {
      this.timer = 200;
    }
    this.style.width = this.timer + "px";
    super.update();
    1;
  }
}
