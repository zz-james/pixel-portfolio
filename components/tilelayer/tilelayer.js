import { Tile } from "../tile/tile.js";

class TileLayer extends HTMLElement {
  name;
  tileMapCols = 17; // number of columns in the tilemap image (src)
  tileMapRows = 12; // number of rows in the tilemap image
  stageCols; // number of columns on the stage
  stageRows; // number of rows on the stage
  tilemapWidth;
  data;

  get tileMapCols() {
    return this.tileMapCols;
  }

  get tileMapRows() {
    return this.tileMapRows;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.data = this.parentElement.getLayerData(this.name);

    this.stageCols = this.getAttribute("stageCols");
    this.stageRows = this.getAttribute("stageRows");

    const root = document.querySelector(":root");
    root.style.setProperty("--stage-cols", this.stageCols);
    root.style.setProperty("--stage-rows", this.stageRows);

    let tileLayerHTML = "";

    console.log(this.data);

    for (let c = 0; c < this.stageCols * this.stageRows; c++) {
      const tileIndex = this.data[c];
      tileLayerHTML += '<t-ile index="' + tileIndex + '"></t-ile>';
    }
    this.style.setProperty("z-index", this.getAttribute("layer"));
    this.innerHTML += tileLayerHTML;
  }
}

if (!customElements.get("t-ile-layer")) {
  customElements.define("t-ile-layer", TileLayer);
}

export { TileLayer };
