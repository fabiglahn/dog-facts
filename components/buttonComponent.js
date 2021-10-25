import { createElement } from "../lib/elements.js";
import "./buttonComponent.module.css";

export function createNextButton(onClick) {
  const buttonElement = createElement(
    "form",
    {
      onclick: function (event) {
        event.preventDefault();
        onClick();
      },
    },
    [createElement("button", { type: "onclick", textContent: "Next" })]
  );

  return buttonElement;
}
