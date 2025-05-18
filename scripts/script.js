// JavaScript Document
//op het moment dat er iemand op het land klikt komen er meerdere landen te zien
/* function change() {
	var land = document.getElementById('land'); //display section van landen
	var knop = document.getElementById('knop'); //button
		if (land.style.display == "block") {
			land.style.display = "none"; 
			knop.style.padding = "0em 1em 0.3em 1em";
		} else {
			land.style.display = "block";
			knop.style.padding = "0em 1em 1.3em 1em";
		}
}; */

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://codepen.io/shooft/pen/wvGyvRQ

let land = document.querySelector(".land"); //display section van landen
let knop = document.querySelector('.knop'); //button
let pijl = document.querySelector('.arrow'); //Pijltje
knop.addEventListener("click", change);
function change() {
		if (land.style.display == "block") {
			land.style.display = "none"; 
			knop.style.padding = "0em 1em 0.3em 1em";
			pijl.style.transform = "rotate(0deg)";
		} else {
			land.style.display = "block";
			knop.style.padding = "0em 1em 1.3em 1em";
			pijl.style.transform = "rotate(180deg)";
		}
};

/* hamburger menu */
let streep = document.querySelector(".streep"); //3 streepjes
let nav = document.querySelector('.secondnav'); //navigatie
let hamburger = document.querySelector('.hamburger'); //klik

hamburger.addEventListener("click", open);
function open() {
		if (nav.style.display == "block") {
			streep.innerHTML = "&#9776;";		
			nav.style.display = "none";
			streep.style.transition = "0.5s, linear";
		} else {
			streep.innerHTML = "X"; 
			nav.style.display = "block";
			streep.style.transition = "0.5s, linear";
		}
};

/* menubar onder video */
let dots = document.querySelector(".dots"); // 3 bolletjes onder video
let sec = document.querySelector(".second") // navigate onder video

dots.addEventListener("click", show);
function show() {
	if (sec.style.display == "block"){
		sec.style.display = "none";
	} else {
		sec.style.display = "block";
	}
}

/* menu items onder video */
// list items supersmash
let Fighterpass = document.querySelector(".tweede");
let Fighterpass2 = document.querySelector(".derde");
let meerdlc = document.querySelector(".vierde");
// tweede navigatie
let eerste = document.querySelector(".first");
let tweede = document.querySelector(".second");

function checkMediaQuery() {
	// wanneer het scherm groter is dan het aantal pixels
	if (window.innerWidth > 600) {
	//   console.log('Media Query 600');
	  eerste.append(meerdlc);
	} 
	else if (window.innerWidth > 540) {
		// laat het 4e element verdwijnen
		// console.log('Media Query 540');
		eerste.append(Fighterpass2);
		tweede.append(meerdlc);
	}
	else if (window.innerWidth > 460) {
		// laat het 3e element verdwijnen
		// console.log('Media Query 460');
		eerste.append(Fighterpass);
		tweede.append(Fighterpass2);
	} 
	else if (window.innerWidth > 300) {
		// laat het 2e element verdwijnen
		// console.log('Media Query 300');
		tweede.append(Fighterpass);		
	}
  }
  // wanneer er met het scherm geschaald wordt
window.addEventListener('resize', checkMediaQuery);

/* meescrollen tweede navigatie */
function secondnav() {
	let y = window.scrollY;
	// console.log(y);
	if (y > 460) {
		eerste.style.position = "fixed";
		tweede.style.position = "fixed";
		tweede.style.top = "8.4em";
	 	eerste.style.top = "4.4em";
	} else {
		eerste.style.position = "relative";
		tweede.style.position = "relative";
		eerste.style.top = "0";
		tweede.style.top = "0";
	}
}
window.addEventListener('scroll', secondnav);

/* search */
let page = document.querySelector(".searchpage"); // searchonderdeel
let zoeken = document.querySelector(".search"); //button zoeken voor openen opage
let x = document.querySelector(".x"); //button x voor sluiten page

zoeken.addEventListener('click', function() {
	console.log("open");
	page.style.display = "block";
});

x.addEventListener('click', function() {
	console.log("close");
	page.style.display = "none";
});