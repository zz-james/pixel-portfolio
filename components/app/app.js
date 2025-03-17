import { TileMap } from "../tilemap/tilemap.js";

class TileApp extends HTMLElement {
  connectedCallback() {
    console.log("connected");
    this.innerHTML = "<t-ilemap></t-ilemap>";
  }
}

if (!customElements.get("tile-app")) {
  customElements.define("tile-app", TileApp);
}

export { TileApp };
