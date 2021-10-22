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

  const button = createNextButton(handleSubmit);

  async function handleSubmit() {
    const response = await fetch(
      `https://cors.machens.koeln/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1`
    );
    const body = await response.json();
    const xyz = body[0].fact;
  }
  const facts = await fetchFact();

  const factCards = createFactCard(facts);

  /* const factCards = facts.map((fact) => createFactCard(fact)); */

  const mainElement = createElement("main", { className: "main" }, [factCards]);

  appElement.append(headerElement, mainElement, button);
}

renderApp();
