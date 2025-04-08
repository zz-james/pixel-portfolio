import { TileLayer } from "../tilelayer/tilelayer.js";
import { Player } from "../player/player.js";
import { state } from "../../state.js";
// TileMaps: global (sorry!) at the moment is the data output from Tiled (https://www.mapeditor.org/)

class TileApp extends HTMLElement {
  tilemap;
  layersObject = {}; // holds the data for each array in an object with the layer name as key
  route;
  tileElement;
  locations;
  createLayers() {
    let htmlString = "";
    this.tilemap.layers.forEach((layerData, index) => {
      this.layersObject = {
        ...this.layersObject,
        [layerData.name]: layerData.data,
      };
      htmlString += `<t-ile-layer layer="${index}" name="${layerData.name}" stageCols='${this.tilemap.width}' stageRows='${this.tilemap.height}'></t-ile-layer>`;
    });
    htmlString += `<input id="bubble_content_switch" type="checkbox" name="window_selector" />
    
    <div id="dialog"></div>`;
    return htmlString;
  }

  // use an observable and a reducer for game state?
  // https://javascript.info/task/observable

  connectedCallback() {
    this.tilemap = TileMaps[this.getAttribute("mapname")];
    const tilesString = this.createLayers() + "<p-layer></p-layer>";

    this.innerHTML = tilesString;

    state.init({
      chest: "closed",
    });

    state.observe((key, value) => this.renderInteraction(key, value));
    this.attachListeners();
    this.locationHashChanged();
  }
  // https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685
  attachListeners() {
    window.addEventListener("hashchange", () => this.locationHashChanged());
  }

  mouseListener(e) {
    const position = e.target.getAttribute("position");

    const item = this.locations[position];
    if (!item) return;

    this.tileElement = e.target;

    switch (item) {
      case "chest":
        state.Home = "found"; /*state.chest === "closed" ? "found" : "closed";*/
        break;
      case "chimney":
        state.Work = "found";
        break;
      case "tree":
        state.Projects = "found";
        break;
      case "flowers":
        state.Freelance = "found";
        break;
      case "crate":
        state.About = "found";
        break;
      case "skeli":
        state.Contact = "found";
        break;
    }
  }

  locationHashChanged() {
    const [route] = window.location.hash.substring(1).split("/");
    const newRoute = decodeURI(route) || "Home";
    this.route = newRoute;
    const locations = db[newRoute].locations;

    this.removeEventListener("mouseup", this.mouseListener);

    if (!locations) {
      return;
    } else {
      this.locations = locations;
    }

    this.addEventListener("mouseup", this.mouseListener);
  }

  renderInteraction(key, value) {
    switch (key) {
      case "Home":
        value === "found"
          ? this.tileElement.style.setProperty("--y", "2") // make it open
          : this.tileElement.style.setProperty("--y", "1"); // make it closed
        break;
      case "Work":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
      case "Projects":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
      case "Freelance":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
      case "About":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
      case "Contact":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
    }
  }

  getLayerData(name) {
    return this.layersObject[name];
  }
}

if (!customElements.get("t-ile-app")) {
  customElements.define("t-ile-app", TileApp);
}

export { TileApp };
