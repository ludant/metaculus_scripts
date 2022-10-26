// ==UserScript==
// @name            metaculus_random
// @description     bring back the random button on metaculus homepage
// @namespace       https://www.github.com/ludant/metaculus_scripts
// @include         https://*.metaculus.com/*
// @grant           GM_addStyle
// @version         1.0
// @author          casens
// ==/UserScript==

const style = document.createElement("style");
style.type = "text/css";
document.head.appendChild(style);
function $(id) {
	return document.getElementById(id);
}

function main() {
	const topRow = document.querySelector('.header__toprow')
	const logo = document.querySelector('.header__logo')
	const link = document.createElement('a');
	link.href = "https://www.metaculus.com/questions/random";
	link.textContent = "+ + + R a N d O + + +";
	link.style.margin = "auto";
	topRow.insertBefore(link, logo.nextSibling);
}

// necessary to wait for DOM to finish loading
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    main();
  }
});


