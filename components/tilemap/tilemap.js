import { Tile } from "../tile/tile.js";

class TileMap extends HTMLElement {
  tileSize; // size in pixels of tile (always square)
  tileMapCols = 17; // number of columns in the tilemap image (src)
  tileMapRows = 12; // number of rows in the tilemap image
  stageCols; // number of columns on the stage
  stageRows; // number of rows on the stage
  viewPortWidth = 98; // the number of vws wide in the styles (fix this)
  tilemapWidth;

  connectedCallback() {
    this.stageCols = this.getAttribute("stageCols");
    this.stageRows = this.getAttribute("stageRows");

    const root = document.querySelector(":root");
    root.style.setProperty("--stage-cols", this.stageCols);
    root.style.setProperty("--stage-rows", this.stageRows);

    let tilemapHTML = "";

    for (let c = 0; c < this.stageCols * this.stageRows; c++) {
      const tileIndex = TileMaps.tilemap_01.layers[2].data[c];
      tilemapHTML += '<t-ile index="' + tileIndex + '"></t-ile>';
    }

    this.innerHTML += tilemapHTML;

    this.tilemapWidth =
      this.viewPortWidth * (document.documentElement.clientWidth / 100);

    root.style.setProperty("--screen-tile-width", 32); // width of a tile (can't use calc for this as needs to be unitless)
  }

  get tileMapCols() {
    return this.tileMapCols;
  }

  get tileMapRows() {
    return this.tileMapRows;
  }
}

if (!customElements.get("t-ilemap")) {
  customElements.define("t-ilemap", TileMap);
}

export { TileMap };
