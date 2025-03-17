import { Tile } from "../tile/tile.js";

class TileMap extends HTMLElement {
  tilemapHTML = ""; // string containing constructed html
  tileSize; // size in pixels of tile (always square)
  tileMapColumns = 17; // number of columns in the tilemap image (src)
  tileMapRows = 12; // number of rows in the tilemap image
  stageCols; // number of columns on the stage
  stageRows; // number of rows on the stage
  viewPortWidth = 98; // the number of vws wide in the styles (fix this)
  tilemapWidth;
  root;
  connectedCallback() {
    for (let c = 0; c < 50; c++) {
      this.tilemapHTML += '<t-ile index="' + c + '"></t-ile>';
    }
    this.innerHTML += '<div id="tilemap">' + this.tilemapHTML + "</div>";

    this.root = document.querySelector(":root");
    this.tilemapWidth =
      this.viewPortWidth * (document.documentElement.clientWidth / 100);
    this.root.style.setProperty(
      "--screen-tile-width",
      this.tilemapWidth / this.tileMapColumns
    ); // width of a tile (can't use calc for this as needs to be unitless)
  }
}

if (!customElements.get("t-ilemap")) {
  customElements.define("t-ilemap", TileMap);
}

export { TileMap };
