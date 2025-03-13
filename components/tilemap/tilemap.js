import { Tile } from "../tile/tile.js";

class Tilemap extends HTMLElement {
  tilemapHTML; // string containing constructed html
  tileSize; // size in pixels of tile (always square)
  tileMapColumns; // number of columns in the tilemap image (src)
  tileMapRows; // number of rows in the tilemap image
  stageCols; // number of columns on the stage
  stageRows; // number of rows on the stage

  connectedCallback() {
    for (let c = 0; 56; c++) {}
  }
}

if (!customElements.get("t-ilemap")) {
  customElements.define("t-ilemap", Tilemap);
}

export { Tilemap };
