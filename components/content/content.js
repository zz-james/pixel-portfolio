// this class is largely just about switching the templates
class Content extends HTMLElement {
  route = "welcome";
  type;
  param;
  connectedCallback() {
    this.attachListeners();
    this.locationHashChanged();
  }

  attachListeners() {
    window.onhashchange = () => this.locationHashChanged();
  }

  locationHashChanged() {
    const [route, param] = window.location.hash.substring(1).split("/");

    this.route = route;
    this.param = param;

    this.type = db[this.route].type;

    switch (this.type) {
      case null:
        this.style.setProperty("--content-window-visibility", 0);

        this.style.setProperty("--content-window-height", "0%");

        break;
      case "modal":
        this.style.setProperty("--content-window-visibility", 1);
        this.style.setProperty("--content-window-height", "94%");
        this.style.setProperty(
          "--content-window-border-image",
          "url(images/bubble.png)"
        );
        break;
      case "bubble":
        this.style.setProperty("--content-window-visibility", 1);
        this.style.setProperty("--content-window-height", "65%");
        this.style.setProperty(
          "--content-window-border-image",
          "url(images/speech_bubble.png)"
        );
    }

    this.render();
  }

  /**
   *
   * @param domNode DOM node. NB this is passed by reference
   * @param templateID
   */
  processTemplate(domNode, templateID) {
    let htmlString = "";
    switch (templateID) {
      case "work":
        // render drop downs
        this.makeDropDowns(domNode);

        // render cards
        const cardTemplate = document.getElementById("card");
        const cardData = db.Work.content;
        const cardList = domNode.querySelector("#card_list");
        cardData.forEach((data, index) => {
          cardList.append(
            this.makeCard(data, cardTemplate, "card_dates" + index)
          );
        });
        break;
      default:
        console.log("no matching templateID");
    }
  }

  makeDropDowns(domNode) {
    let htmlString = "";
    const selectSkills = domNode.querySelector("#skills");
    const skills = [
      ...new Set(
        db.Work.content
          .map((jobs) => {
            return jobs.skills;
          })
          .flat(1)
      ),
    ];

    htmlString += `<option value="all">Show all</option>`;

    skills.forEach((skill) => {
      htmlString += `<option value="${skill}" ${
        skill === this.param ? "selected" : ""
      }>${skill}</option>`;
    });
    selectSkills.innerHTML = htmlString;
    selectSkills.addEventListener("change", (e) => {
      window.location.hash = this.route + "/" + e.target.value;
    });

    const selectRoles = domNode.querySelector("#roles");
    const roles = [
      ...new Set(
        db.Work.content
          .map((jobs) => {
            return jobs.role;
          })
          .flat(1)
      ),
    ].sort();
    htmlString = "";
    htmlString += `<option value="all">Show all</option>`;
    roles.forEach((role) => {
      htmlString += `<option value="${role}">${role}</option>`;
    });
    selectRoles.innerHTML = htmlString;
    selectRoles.addEventListener("change", (e) => {
      window.location.hash =
        this.route + "/" + this.param + "/" + e.target.value;
    });
  }

  makeCard(card, cardTemplate, id) {
    let cardNode = document.importNode(cardTemplate.content, true);
    /* do dates */
    const dates = cardNode.querySelector("#card_dates");
    dates.id = id;
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

    /* do title */
    const title = cardNode.querySelector("#card_title");
    title.removeAttribute("id");
    title.innerHTML = card.employer;

    /* do image */
    const imagescr = cardNode.querySelector("#card_image");
    imagescr.removeAttribute("id");
    imagescr.src = card.screenshot;

    /* do description */
    const description = cardNode.querySelector("#card_description");
    description.removeAttribute("id");
    description.innerHTML = card.description;

    /* do skills */
    const skills = cardNode.querySelector("#card_skills");
    skills.removeAttribute("id");
    skills.innerHTML = card.skills
      .map((skill) => `<li>${skill}</li>`)
      .join(" ");

    if (card.link) {
      const link = cardNode.querySelector("#card_link");
      link.removeAttribute("id");
      link.href = card.link;
      link.innerHTML = card.link;
      link.target = "pop";
    }
    return cardNode;
  }

  render() {
    const templateID = db[this.route].contentID;
    const template = document.getElementById(templateID);
    let domNode = document.importNode(template.content, true);

    this.processTemplate(domNode, templateID);

    let htmlString = "";
    if (this.type === "modal") {
      // ad close button
      htmlString += `<button class="close_button button_unstyled" onclick="document.location.href='/#Home'"></button>`;
    }

    this.innerHTML = htmlString;

    this.append(domNode);
  }
}

if (!customElements.get("c-ontent")) {
  customElements.define("c-ontent", Content);
}

export { Content };
