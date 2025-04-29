export const makeWorkDropDowns = (domNode, params, selectedContent, route) => {
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
  ].sort();

  // console.log(skills);

  htmlString += `<option value="all">Show all</option>`;

  skills.forEach((skill) => {
    htmlString += `<option value="${skill}" ${
      skill === params[0] ? "selected" : ""
    }>${skill}</option>`;
  });
  selectSkills.innerHTML = htmlString;
  selectSkills.addEventListener("change", (e) => {
    window.location.hash = route + "/" + e.target.value + "/";
  });

  const selectRoles = domNode.querySelector("#roles");
  const roles = [
    ...new Set(
      selectedContent
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
      role === params[1] ? "selected" : ""
    }>${role}</option>`;
  });
  selectRoles.innerHTML = htmlString;
  selectRoles.addEventListener("change", (e) => {
    window.location.hash =
      route + "/" + (params[0] || "") + "/" + e.target.value;
  });
};
