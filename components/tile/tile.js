class Tile extends HTMLElement {
  tilemapHTML = ""; // string containing constructed html
  tilemapStyles = ""; // string containing initial styles
  x; // the x coord of the tile in the tile map
  y; // the y coord of the tile in the tile map
  tileIndex; // the index number of the tile
  connectedCallback() {
    // to-do probabbly put a style tag on this i dunno
    this.innerHTML = "<div></div>";
    this.tileIndex = this.getAttribute("index");
    // console.log(this.style);
    this.style.setProperty("--x", this.tileIndex);
  }
}

if (!customElements.get("t-ile")) {
  customElements.define("t-ile", Tile);
}

export { Tile };
