const textArea = document.querySelector("input[type='text']");

const buttons = document.getElementById("post-buttons").children;

const connectorURL = "=";

textArea.addEventListener("input", () => {
	for (let elementIndex = 0; elementIndex < buttons.length; elementIndex++) {
		const button = buttons[elementIndex];

		switch (button.tagName) {
			case "A":
				const buttonLink = button.getAttribute("href");

				button.setAttribute("href", `${buttonLink.substring(0, buttonLink.indexOf(connectorURL))}${connectorURL}${textArea.value}`);
				break;
		}
	}
});