export default async function fetchFact() {
  const response = await fetch(
    "https://cors.machens.koeln/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1"
  );
  const body = await response.json();
  const fact = body[0].fact;
  /* console.log(fact); */
  return fact;
}
