import { createElement } from "./lib/elements.js";
import "./style.css";
import { createFactCard } from "./components/factCard";
import fetchFacts from "/.lib/fetchFact.js";

async function renderApp() {
  const appElement = document.querySelector("#app");

  /*  const factCards = createFactCard(); */

  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {
      textContent: "RANDOM DOG FACTS 🐶",
    }),
  ]);

  const facts = await fetchFacts();

  const factCards = facts.map((fact) => createFactCard(fact));

  const mainElement = createElement("main", { className: "main" }, [factCards]);

  appElement.append(headerElement, mainElement);
}

renderApp();
