import { TileLayer } from "../tilelayer/tilelayer.js";
import { Player } from "../player/player.js";

// TileMaps: global (sorry!) at the moment is the data output from Tiled (https://www.mapeditor.org/)

class TileApp extends HTMLElement {
  tilemap;
  layersObject = {}; // holds the data for each array in an object with the layer name as key

  createLayers() {
    let htmlString = "";
    this.tilemap.layers.forEach((layerData, index) => {
      this.layersObject = {
        ...this.layersObject,
        [layerData.name]: layerData.data,
      };
      htmlString += `<t-ile-layer layer="${index}" name="${layerData.name}" stageCols='${this.tilemap.width}' stageRows='${this.tilemap.height}'></t-ile-layer>`;
    });

    return htmlString;
  }

  connectedCallback() {
    this.tilemap = TileMaps[this.getAttribute("mapname")];
    const tilesString = this.createLayers() + "<p-layer></p-layer>";

    this.innerHTML = tilesString;
  }

  getLayerData(name) {
    return this.layersObject[name];
  }
}

if (!customElements.get("t-ile-app")) {
  customElements.define("t-ile-app", TileApp);
}

export { TileApp };
