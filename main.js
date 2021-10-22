import { createElement } from "./lib/elements.js";
import "./style.css";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {
      textContent: "RANDOM DOG FACTS",
    }),
  ]);

  const mainElement = createElement("main", { className: "main" });

  appElement.append(headerElement, mainElement);
}

renderApp();
