import { createElement } from "../lib/elements.js";
import styles from "./factCard.module.css";

export function createFactCard(fact) {
  const factCard = createElement("article", {
    textContent: fact,
    className: styles.facts,
  });

  return factCard;
}
