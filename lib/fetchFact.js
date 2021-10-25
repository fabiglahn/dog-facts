export default async function fetchFact() {
  const response = await fetch(
    "https://cors.machens.koeln/https://dog-api.kinduff.com/api/facts?number=1"
  );
  const body = await response.json();
  const fact = body.facts[0];
  return fact;
}
