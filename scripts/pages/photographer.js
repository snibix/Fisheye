//Mettre le code JavaScript lié à la page photographer.html
let params = new URLSearchParams(window.location.search);
let idPhotographer = params.get("id");
console.log(idPhotographer);
