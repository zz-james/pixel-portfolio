// this class is largely just about switching the templates
class Content extends HTMLElement {
  route = "welcome";
  type;

  connectedCallback() {
    this.attachListeners();
    this.locationHashChanged();
  }

  attachListeners() {
    window.onhashchange = () => this.locationHashChanged();
  }

  locationHashChanged() {
    this.route = window.location.hash.substring(1);
    // this.render();
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
        htmlString = "";
        htmlString += `<option value="all">Show all</option>`;
        skills.forEach((skill) => {
          htmlString += `<option value="${skill}">${skill}</option>`;
        });
        selectSkills.innerHTML = htmlString;

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
        //
        const cardTemplate = document.getElementById("card");
        const cardData = db.Work.content;
        const cardList = domNode.querySelector("#card_list");
        cardData.forEach((card, index) => {
          cardList.append(this.makeCard(card, cardTemplate, index));
        });
        break;
      default:
        console.log("no matching templateID");
    }
  }

  makeCard(card, cardTemplate, index) {
    let cardNode = document.importNode(cardTemplate.content, true);
    /* do dates */
    const dates = cardNode.querySelector("#card_dates");
    dates.id = "card_dates" + index;
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
    title.id = "card_title" + index;
    title.innerHTML = card.employer;

    /* do image */
    const imagescr = cardNode.querySelector("#card_image");
    imagescr.id = "card_image" + index;
    imagescr.src = card.screenshot;

    /* do description */
    const description = cardNode.querySelector("#card_description");
    description.id = "card_description" + index;
    title.innerHTML = card.description;

    /* do skills */
    const skills = cardNode.querySelector("#card_skills");
    skills.id = "card_skills" + index;
    skills.innerHTML = card.skills
      .map((skill) => `<li>${skill}</li>`)
      .join(" ");

    if (card.link) {
      const link = cardNode.querySelector("a");
      link.id = "card_link" + index;
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
