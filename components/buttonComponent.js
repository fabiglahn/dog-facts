import { createElement } from "../lib/elements.js";
import "../style.css";

export function createNextButton(onSubmit) {
  const buttonElement = createElement(
    "form",
    {
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit();
      },
    },
    [createElement("input", { type: "submit", value: "Next" })]
  );

  return buttonElement;
}
