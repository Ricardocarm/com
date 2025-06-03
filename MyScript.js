function MostrarRival() {
	document.getElementById('Rival').innerHTML = "Países Bajos";
}
function MostrarFase(fase) {
	document.getElementById("fasedegrupos").style.display = "none";
	document.getElementById("octavos").style.display = "none";
	document.getElementById("cuartos").style.display = "none";
	document.getElementById("semifinal").style.display = "none";
	document.getElementById("final").style.display = "none";
	document.getElementById(fase).style.display = "block";
}