const $openClose = document.getElementById("menu"),
  $aside = document.getElementById("aside");
  $main = document.getElementById("main")

$openClose.addEventListener("click", () => {
  $aside.classList.toggle("desplegar");
  $main.classList.toggle("desplegarvideos");
});

const $abrircerrar = document.getElementById("menu");
$section = document.getElementById("categorias");

$abrircerrar.addEventListener("click", () => {
  $section.classList.toggle("desplegarcategorias");

});




