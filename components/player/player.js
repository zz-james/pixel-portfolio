import { makeDialogButtons } from "./makeDialogButtons.js";

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
  }

  locationHashChanged() {
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
    const dialogTemplate = document.getElementById(dialogID);
    const dialogNode = document.querySelector("#dialog");
    const dialogFrag = document.importNode(dialogTemplate.content, true);
    switch (dialogID) {
      case "dialog_home":
        makeDialogButtons(dialogFrag);
        break;
      case "dialog_work":
        makeDialogButtons(dialogFrag);
        break;
      case "dialog_projects":
        makeDialogButtons(dialogFrag);
        break;
      default:
        console.log(`no matching templateID: ${dialogID} process`);
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
}

if (!customElements.get("p-layer")) {
  customElements.define("p-layer", Player);
}

export { Player };
