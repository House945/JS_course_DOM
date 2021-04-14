function zmienTytul()
{
	let tytul = document.getElementById("tytul");
	tytul.innerHTML += " Podstawy";
}

function zmienAtrybut()
{
	let tytul = document.getElementById("tytul");
	tytul.setAttribute("title","Kurs PHP");
}

function pokazWezly()
{
	alert(document.getElementById("tytul").nodeValue);
}

function stworzAkapit()
{
	let akapit = document.createElement("p");
	document.getElementById("wewn").appendChild(akapit);
	akapit.innerHTML = "Więcej na wwww.strefakursow.pl";
}

function pokazInfo()
{
	let info = document.images.length;
	alert(info);
	/*let info = document.getElementsByTagName("h1");
	alert(info.length);*/
}

window.onload = function()
{
	zmienTytul();
	zmienAtrybut();
	pokazWezly();
	stworzAkapit();
	pokazInfo();
}