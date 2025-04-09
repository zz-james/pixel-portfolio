import { makeDialogButtons } from "./makeDialogButtons.js";
import { state } from "../../state.js";
class Player extends HTMLElement {
  route; /*string*/
  windowType;
  connectedCallback() {
    this.id = "player";
    this.attachListeners();
    this.locationHashChanged();
    this.innerHTML = "<label for='bubble_content_switch'></label>";
  }

  attachListeners() {
    window.addEventListener("hashchange", () => this.locationHashChanged());
    state.observe((key, value) => this.respondToHeartFound(key, value));
  }

  locationHashChanged() {
    // close dialog if open
    const bubble = document.getElementById("bubble_content_switch");
    bubble.checked = false;

    const [route] = window.location.hash.substring(1).split("/");
    const newRoute = decodeURI(route);
    this.route = newRoute;

    this.windowType = db[newRoute].type;

    if (!db[newRoute].player) return;
    // we make these global
    document.documentElement.style.setProperty(
      "--player-left",
      db[newRoute].player.left
    );
    document.documentElement.style.setProperty(
      "--player-top",
      db[newRoute].player.top
    );
    this.setStyles();
    this.processDialogLayer(db[newRoute].dialogID);
  }
  processDialogLayer(dialogID) {
    if (
      state.Home === "found" &&
      state.Work === "found" &&
      state.Projects === "found" &&
      state.Freelance === "found" &&
      state.About === "found" &&
      state.Contact === "found"
    ) {
      dialogID = "dialog_reward";
    }

    const dialogTemplate = document.getElementById(dialogID);
    if (!dialogTemplate) {
      console.log(`no template found for ${dialogID}`);
      return;
    }
    const dialogNode = document.querySelector("#dialog");
    const dialogFrag = document.importNode(dialogTemplate.content, true);
    if (dialogID === "dialog_found" || dialogID === "dialog_reward") {
      // do nothins
    } else {
      makeDialogButtons(dialogFrag);
    }

    dialogNode.replaceChildren(dialogFrag);
  }
  setStyles() {
    const bubble = document.getElementById("bubble_content_switch");

    if (this.windowType === "bubble") {
      bubble.checked = true;
    } else {
      bubble.checked = false;
    }
  }
  respondToHeartFound(key, value) {
    if (value !== "found") return;

    db[this.route].dialogID = "dialog_found";

    this.processDialogLayer(db[this.route].dialogID);
    const bubble = document.getElementById("bubble_content_switch");
    bubble.checked = true;
  }
}

if (!customElements.get("p-layer")) {
  customElements.define("p-layer", Player);
}

export { Player };
