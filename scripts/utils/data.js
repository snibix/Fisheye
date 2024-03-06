// Récuperation des données du fichier JSON
export async function getData() {
  const data = await fetch("./data/photographers.json").then((response) => {
    return response.json();
  });
  return data;
}
