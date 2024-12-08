// Hämtar referenser till HTML-element som används i skriptet
let contactForm = document.getElementById("contact-form");
let phoneField = document.getElementById("phoneField");
let phoneErrorElement = document.getElementById("phoneError");

// Lägger till en event-lyssnare för formulärets "submit"-händelse
contactForm.addEventListener("submit", function (event) {
	// Förhindrar standardbeteendet (att formuläret skickas till servern)
	event.preventDefault();

	
	

// Kontrollera om det finns en querystring i URL:en (om formuläret är skickat)
const queryString = window.location.search;
if (queryString) {
	// Om querystring finns, döljs formuläret och tack-meddelandet visas
	contactForm.classList.add("hidden-element");
	document.getElementById("thankYouMessage").classList.remove("hidden-element");
} else {
	// Om querystring inte finns, visas formuläret och tack-meddelandet döljs
	contactForm.classList.remove("hidden-element");
	document.getElementById("thankYouMessage").classList.add("hidden-element");
}

	*/

	// Kontrollera om telefonnumret är längre än 10 siffror
	if (phoneField.value.length > 10) {
		// Visar ett felmeddelande i `phoneErrorElement` om numret är för långt
		phoneErrorElement.innerHTML =
			"Du har skrivit för många siffror. Det ska vara 10 exakt.";
	} else if (phoneField.value.length < 10) {
		// Visar ett felmeddelande i `phoneErrorElement` om numret är för kort
		phoneErrorElement.innerHTML =
			"Du har skrivit för få siffror. Det ska vara 10 exakt.";
	} else {
		// Om numret har korrekt längd skickas formuläret
		this.submit();
	}
});

/*
Följande kod kontrollerar om det finns en querystring i URL:en.
Om det finns, döljs formuläret och en tack-text visas istället.
*/

// Hämtar querystring från webbläsarens URL
const queryString = window.location.search;

// Kontrollerar om det finns en querystring
if (queryString) {
	// Om querystring finns, döljs formuläret och tack-meddelandet visas
	contactForm.classList.add("hidden-element");
	document.getElementById("thankYouMessage").classList.remove("hidden-element");
} else {
	// Om querystring inte finns, visas formuläret och tack-meddelandet döljs
	contactForm.classList.remove("hidden-element");
	document.getElementById("thankYouMessage").classList.add("hidden-element");
}
