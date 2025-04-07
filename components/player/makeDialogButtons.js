import { debounce } from "../../utils.js";

export const makeDialogButtons = (templateNode) => {
  const dialog = templateNode.querySelector(".dialog");
  const panelsToMove = dialog.querySelectorAll("div").length - 1;

  dialog.addEventListener(
    "scroll",
    debounce((e) => {
      dialog.dataset.scroll = dialog.scrollLeft;
      // hack
      // because for some reason I can't get the value of --content-width?
      const dialogWidth = parseInt(
        window.getComputedStyle(dialog).getPropertyValue("width"),
        10
      );

      if ((dialog.scrollLeft | 0) >= ((dialogWidth * panelsToMove) | 0) - 5) {
        dialog.dataset.scroll = "end";
      }
    })
  );

  dialog.dataset.scroll = dialog.scrollLeft;

  // setup buttons
  templateNode
    .querySelector("a:first-child")
    .addEventListener("mouseup", () => {
      const dialogWidth = parseInt(
        window.getComputedStyle(dialog).getPropertyValue("width"),
        10
      );
      dialog.scrollLeft -= dialogWidth;
    });
  templateNode.querySelector("a:last-child").addEventListener("mouseup", () => {
    const dialogWidth = parseInt(
      window.getComputedStyle(dialog).getPropertyValue("width"),
      10
    );
    dialog.scrollLeft += dialogWidth;
  });
};
