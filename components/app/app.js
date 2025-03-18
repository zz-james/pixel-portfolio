import { TileMap } from "../tilemap/tilemap.js";

class TileApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<t-ilemap stageCols='${TileMaps.tilemap_01.width}' stageRows='${TileMaps.tilemap_01.height}'></t-ilemap>`;
  }
}

if (!customElements.get("tile-app")) {
  customElements.define("tile-app", TileApp);
}

export { TileApp };
