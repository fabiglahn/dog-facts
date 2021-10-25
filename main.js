import { createElement } from "./lib/elements.js";
import "./style.css";
import { createFactCard } from "./components/factCard";
import fetchFact from "./lib/fetchFact";
import { createNextButton } from "./components/buttonComponent.js";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {
      textContent: "RANDOM DOG FACTS 🐶",
    }),
  ]);

  const fact = await fetchFact();

  const factCard = createFactCard(fact);

  const button = createNextButton(onClick);

  async function onClick() {
    const newFact = await fetchFact();
    factCard.textContent = newFact;
  }

  const mainElement = createElement("main", { className: "main" }, [
    factCard,
    button,
  ]);

  appElement.append(headerElement, mainElement);
}

renderApp();

/* const factCards = facts.map((fact) => createFactCard(fact)); */
