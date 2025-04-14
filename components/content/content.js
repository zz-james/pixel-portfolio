import { makeWorkDropDowns } from "./makeWorkDropDowns.js";

// this class is largely just about switching the templates
class Content extends HTMLElement {
  route = "Home";
  windowType;
  params;
  selectedContent;
  templateID;

  connectedCallback() {
    this.attachListeners();
    this.setRoute();
    this.render();
    this.setStyles();
    this.processTemplate(this.templateID, this.dialogID);
  }

  attachListeners() {
    window.addEventListener("hashchange", () => this.locationHashChanged());
  }

  setRoute() {
    const [route, ...params] = window.location.hash.substring(1).split("/");

    const newRoute = decodeURI(route) || "Home";

    if (this.route === newRoute) {
      // we haven't moved
      const hack = document.getElementById("content");
      hack?.style.setProperty("transition-delay", "0s");
    } else {
      // we moved so delay
      const hack = document.getElementById("content");
      hack?.style.setProperty("transition-delay", "2s");
    }

    this.route = newRoute;

    this.params = params.map((param) => decodeURI(param)); // string[]

    this.selectedContent = this.selectContent();

    // deal with invalid url params
    if (this.selectedContent.length === 0) {
      window.location.hash = this.route;
    }
    if (!db[this.route]) return;
    this.windowType = db[this.route].type;
    this.templateID = db[this.route].contentID;
  }

  locationHashChanged() {
    this.setRoute();
    this.processTemplate(this.templateID);
    this.setStyles();
  }

  selectContent() {
    let items = db[this.route]?.content;

    if (!items) return [];

    if (
      !Number.isNaN(parseInt(this.params[0], 10)) ||
      this.params[0] === undefined ||
      this.params[0] === "all" ||
      this.params[0] === ""
    ) {
      items = items;
    } else {
      items = db.Work.content.filter((work) => {
        return work.skills.includes(this.params[0]);
      });
    }

    if (
      !Number.isNaN(parseInt(this.params[1], 10)) ||
      this.params[1] === undefined ||
      this.params[1] === "all" ||
      this.params[1] === ""
    ) {
      items = items;
    } else {
      items = items.filter((work) => {
        return work.role.includes(this.params[1]);
      });
    }

    return items;
  }

  /**
   * @param templateID
   */

  processTemplate(templateID) {
    const contentTemplate = document.getElementById(templateID);
    const contentNode = this.querySelector("#content"); // where we append

    if (!contentNode) return;

    if (!contentTemplate) {
      console.log(`template with ${templateID} not found`);
      contentNode.replaceChildren("");
      return;
    }
    const contentFrag = document.importNode(contentTemplate.content, true);

    switch (templateID) {
      case "home":
        break;
      case "work":
        // render drop downs
        makeWorkDropDowns(
          contentFrag,
          this.params,
          this.selectedContent,
          this.route
        );

        // render cards
        const cardTemplateW = document.getElementById("card");
        const cardListW = contentFrag.querySelector("#card_list");

        this.selectedContent.forEach((data, index) => {
          cardListW.append(this.makeCard(data, cardTemplateW, index));
        });
        break;
      case "projects":
        // render cards
        const cardTemplateP = document.getElementById("card");
        const cardListP = contentFrag.querySelector("#card_list");
        if (!cardTemplateP) return;
        if (!cardListP) return;
        this.selectedContent.forEach((data, index) => {
          cardListP.append(this.makeCard(data, cardTemplateP, index));
        });
        break;
      case "freelance":
      case "about":
      case "contact":
        const contEl = document.createElement("div");

        contEl.innerHTML = this.selectedContent[0];
        contEl.classList.add("scroller");
        contEl.classList.add(`section_${templateID}`);
        contentFrag.querySelector(".work_content_container").append(contEl);

        break;
      default:
        console.log(`no matching templateID: ${templateID} to process`);
    }
    contentNode.replaceChildren(contentFrag);

    if (templateID === "contact") {
      const form = contentNode.querySelector("#contact_form");
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const status = document.querySelector("#form-status");
        const data = new FormData(e.target);
        fetch("contact_handler.php", {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }).then((response) => {
          if (response.ok) {
            status.innerHTML("Thanks! I look forward to reading this");
            form.reset();
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      });
    }
  }

  makeCard(card, cardTemplate, id) {
    if (!cardTemplate) return;
    let cardNode = document.importNode(cardTemplate.content, true);
    /* do dates */
    if (card.dates) {
      const dates = cardNode.querySelector("#card_dates");
      dates.id = "card_dates" + id;
      dates.innerHTML =
        card.dates.start.toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
        }) +
        " - " +
        card.dates.end.toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
        });
    }
    /* do title */
    const title = cardNode.querySelector("#card_title");
    title.removeAttribute("id");
    title.innerHTML = card.title;

    /* do image */
    const smallImage = cardNode.querySelector(".small_image");
    smallImage.src = card.screenshot.small;

    const mediumImage = cardNode.querySelector(".medium_image");
    mediumImage.src = card.screenshot.medium;

    const largeImage = cardNode.querySelector(".large_image");
    largeImage.src = card.screenshot.large;

    /* do description */
    const description = cardNode.querySelector("#card_description");
    description.removeAttribute("id");
    description.innerHTML = card.description;

    /* do role */
    if (card.role) {
      const role = cardNode.querySelector("#card_role");
      role.removeAttribute("id");
      role.innerHTML = card.role.join(" / ");
    }
    /* do skills if in work section*/

    const skills = cardNode.querySelector("#card_skills");
    skills.removeAttribute("id");
    skills.innerHTML = card.skills
      .map(
        (skill) =>
          `<li>${
            this.templateID === "work"
              ? `<a class="card_tag_link" href="#${this.route}/${skill}">${skill}</a>`
              : `<span class="card_tag_link">${skill}</span>`
          }</li>`
      )
      .join(" ");

    if (card.link) {
      const link = cardNode.querySelector("#card_link");
      link.removeAttribute("id");
      link.href = card.link;
      link.innerHTML = card.link;
      link.target = "pop";
    }

    /* fix up the input tag and label */
    const checkbox = cardNode.querySelector("#card_switch");
    checkbox.id = `checkbox_${id}`;
    const showCard = parseInt(this.params[this.params.length - 1], 10);
    if (showCard === id) {
      checkbox.checked = true;
    }
    // debugger;

    checkbox.addEventListener("change", (event) => {
      const cardClicked = event.target.id.split("_")[1];
      if (!cardClicked) return;
      if (event.target.checked) {
        window.location.hash = `${window.location.hash}/${cardClicked}`;
      } else {
        window.location.hash =
          this.route + "/" + this.params.slice(0, -1).join("/");
      }
    });
    const label = cardNode.querySelector("#card_switch_label");
    if (label) {
      label.htmlFor = `checkbox_${id}`;
    }
    return cardNode;
  }

  setStyles() {
    const modal = document.getElementById("modal_content_switch");

    if (!modal) {
      return;
    }

    if (this.windowType === "modal") {
      modal.checked = true;
    } else {
      modal.checked = false;
    }
  }

  render() {
    const template = document.getElementById("window");
    if (!template) return;
    let windowNode = document.importNode(template.content, true);

    this.replaceChildren(windowNode);
  }
}

if (!customElements.get("c-ontent")) {
  customElements.define("c-ontent", Content);
}

export { Content };
