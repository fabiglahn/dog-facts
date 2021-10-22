import { createElement } from "./lib/elements.js";
import "./style.css";
import { createFactCard } from "./components/factCard";
import fetchFact from "./lib/fetchFact";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {
      textContent: "RANDOM DOG FACTS 🐶",
    }),
  ]);

  const facts = await fetchFact();

  const factCards = createFactCard(facts);

  /* const factCards = facts.map((fact) => createFactCard(fact)); */

  const mainElement = createElement("main", { className: "main" }, [factCards]);

  appElement.append(headerElement, mainElement);
}

renderApp();
