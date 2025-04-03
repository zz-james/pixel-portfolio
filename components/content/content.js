// this class is largely just about switching the templates
class Content extends HTMLElement {
  route = "welcome";
  type;
  params;
  selectedContent;
  connectedCallback() {
    this.attachListeners();
    this.locationHashChanged();
  }

  attachListeners() {
    window.addEventListener("hashchange", () => this.locationHashChanged());
  }

  locationHashChanged() {
    const [route, ...params] = window.location.hash.substring(1).split("/");

    this.route = decodeURI(route);
    this.params = params.map((param) => decodeURI(param)); // string[]

    this.selectedContent = this.selectContent();

    // deal with invalid url params
    if (this.selectedContent.length === 0) {
      window.location.hash = this.route;
    }

    this.type = db[this.route].type;

    // switch (this.type) {
    //   case null:
    //     this.style.setProperty("--content-delay", 0);
    //     this.style.setProperty("--content-window-visibility", 0);
    //     this.style.setProperty("--content-window-height", "0%");
    //     break;
    //   case "modal":
    //     this.style.setProperty("--content-delay", "2s");
    //     this.style.setProperty("--content-window-visibility", 1);
    //     this.style.setProperty("--content-window-height", "94%");
    //     this.style.setProperty(
    //       "--content-window-border-image",
    //       "url(images/bubble.png)"
    //     );
    //     break;
    //   case "bubble":
    //     this.style.setProperty("--content-window-visibility", 1);
    //     this.style.setProperty("--content-window-height", "65%");
    //     this.style.setProperty(
    //       "--content-window-border-image",
    //       "url(images/speech_bubble.png)"
    //     );
    // }

    this.render();
  }

  selectContent() {
    let items = db.Work.content;

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
        const cardList = domNode.querySelector("#card_list");
        this.selectedContent.forEach((data, index) => {
          cardList.append(this.makeCard(data, cardTemplate, index));
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
        skill === this.params[0] ? "selected" : ""
      }>${skill}</option>`;
    });
    selectSkills.innerHTML = htmlString;
    selectSkills.addEventListener("change", (e) => {
      window.location.hash = this.route + "/" + e.target.value + "/";
    });

    const selectRoles = domNode.querySelector("#roles");
    const roles = [
      ...new Set(
        this.selectedContent
          .map((jobs) => {
            return jobs.role;
          })
          .flat(1)
      ),
    ].sort();
    htmlString = "";
    htmlString += `<option value="all">Show all</option>`;
    roles.forEach((role) => {
      htmlString += `<option value="${role}" ${
        role === this.params[1] ? "selected" : ""
      }>${role}</option>`;
    });
    selectRoles.innerHTML = htmlString;
    selectRoles.addEventListener("change", (e) => {
      window.location.hash =
        this.route + "/" + (this.params[0] || "") + "/" + e.target.value;
    });
  }

  makeCard(card, cardTemplate, id) {
    let cardNode = document.importNode(cardTemplate.content, true);
    /* do dates */
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
      .map(
        (skill) =>
          `<li><a class="card_tag_link" href="#${this.route}/${skill}">${skill}</a></li>`
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
    label.htmlFor = `checkbox_${id}`;
    return cardNode;
  }

  render() {
    const templateID = db[this.route].contentID;
    const template = document.getElementById(templateID);
    if (!template) return;
    let domNode = document.importNode(template.content, true);

    const modal = domNode.getElementById("modal_content_switch");
    const bubble = domNode.getElementById("bubble_content_switch");

    switch (this.type) {
      case null:
        modal.checked = false;
        bubble.checked = false;
        break;
      case "modal":
        modal.checked = true;
        bubble.checked = false;
        break;
      case "bubble":
        modal.checked = false;
        bubble.checked = true;
        break;
    }

    this.processTemplate(domNode, templateID);

    this.append(domNode);
  }
}

if (!customElements.get("c-ontent")) {
  customElements.define("c-ontent", Content);
}

export { Content };
