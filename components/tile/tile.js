class Tile extends HTMLElement {
  tilemapStyles = ""; // string containing initial styles
  x; // the x coord of the tile in the tile map
  y; // the y coord of the tile in the tile map
  tileIndex; // the index number of the tile
  connectedCallback() {
    this.tileIndex = this.getAttribute("index");

    const cols = this.parentElement.tileMapCols;

    // convert index into x and y props
    // these used to offset the background
    const y = (this.tileIndex / cols) | 0;

    const x = this.tileIndex - 1 - cols * y;

    this.style.setProperty("--x", x);
    this.style.setProperty("--y", y);
  }
}

if (!customElements.get("t-ile")) {
  customElements.define("t-ile", Tile);
}

export { Tile };
