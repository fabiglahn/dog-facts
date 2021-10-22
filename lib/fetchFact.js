export default async function fetchFacts() {
  const response = await fetch(
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
  );
  const body = await response.json();
  const facts = body.results;
  return facts;
}
