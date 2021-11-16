const active = document.querySelectorAll(".nav-link");
const theCards = document.querySelectorAll(".tab-content");

function activation() {
	for (let i = 0; i < active.length; i++) {
		active[i];
	}

	activation.onclick = function () {
		for (let i = 0; i < theCards.length; i++) {
			theCards[i].style.display = "block";
		}
	};
}
