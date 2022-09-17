function mudarTema() {
  document.body.classList.toggle("dark");
  var tema = document.getElementById("tema").innerHTML;
  console.log(tema);
  if (tema == "Escurecer") {
    document.getElementById("tema").innerHTML = "Clarear";
  } else {
    document.getElementById("tema").innerHTML = "Escurecer";
  }
}