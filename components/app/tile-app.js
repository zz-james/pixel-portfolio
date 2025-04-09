import { TileLayer } from "../tilelayer/tilelayer.js";
import { Player } from "../player/player.js";
import { state } from "../../state.js";
import { Font5x5 } from "../../font.js";
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
        break;
      case "Projects":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
        break;
      case "Freelance":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
        break;
      case "About":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
        break;
      case "Contact":
        this.tileElement.style.setProperty("--x", "13");
        this.tileElement.style.setProperty("--y", "1");
        break;
    }

    if (
      state.Home === "found" &&
      state.Work === "found" &&
      state.Projects === "found" &&
      state.Freelance === "found" &&
      state.About === "found" &&
      state.Contact === "found"
    ) {
      this.doRewards();
    }
  }

  doRewards() {
    const modal = document.getElementById("modal_content_switch");
    modal.checked = false;

    const tiles = document.querySelectorAll(
      't-ile-layer[name="accessories"] > t-ile'
    );

    const background = document.querySelectorAll(
      't-ile-layer[name="items"] > t-ile'
    );

    let colours = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "rebeccapurple",
    ];

    let colStart = 0;
    let colEnd = 25;
    const fontWidth = 5;
    let dt = Date.now() + 1000;

    const coloursLayer = () => {
      if (Date.now() < dt) {
        window.requestAnimationFrame(coloursLayer);
        return;
      }

      if (colStart === colEnd) {
        return;
      }

      background.forEach((node, index) => {
        node.style.setProperty("background", colours[index % 7]);
      });
      colours.push(colours.shift());
      colStart++;

      window.requestAnimationFrame(coloursLayer);
    };

    window.requestAnimationFrame(coloursLayer);

    let start = 0;
    let end = 100;
    let col = 0;
    let row = 0;

    let skip = false;

    const heartsLayer = () => {
      if (Date.now() < dt) {
        window.requestAnimationFrame(heartsLayer);
        return;
      }

      if (start === end) {
        console.log("fin");
        return;
      }

      tiles.forEach((node, index) => {
        node.style.setProperty("--x", "0");
        node.style.setProperty("--y", "0");
      });

      let ch = "WellDone".charCodeAt(start % 8);
      let data = Font5x5[ch];

      // loop start
      tiles.forEach((node, index) => {
        if (col >= this.tilemap.width) {
          col = 0;
          row++;
        }

        const dataRow = row % 5;

        if (col % 10 > 4 || row % 10 > 4) {
          skip = true;
        } else {
          skip = false;
        }

        if (data[(index % 5) + dataRow * 5] === "X") {
          if (!skip) {
            node.style.setProperty("--x", "13");
            node.style.setProperty("--y", "1");
          }
        }
        col++;
      });
      // loop end
      dt = Date.now() + 1000;
      start++;
      window.requestAnimationFrame(heartsLayer);
    };

    window.requestAnimationFrame(heartsLayer);
    // const tiles = document.querySelectorAll(
    //   't-ile-layer[name="accessories"] > t-ile'
    // );
  }

  getLayerData(name) {
    return this.layersObject[name];
  }
}

if (!customElements.get("t-ile-app")) {
  customElements.define("t-ile-app", TileApp);
}

export { TileApp };
