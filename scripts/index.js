const textArea = document.getElementById("text-area");

const buttons = document.getElementById("post-buttons").children;

const connectorURL = "=";

textArea.addEventListener("input", () => {
	for (let elementIndex = 0; elementIndex < buttons.length; elementIndex++) {
		const button = buttons[elementIndex];

		switch (button.tagName) {
			case "A":
				const buttonLink = button.getAttribute("href");
				const prefix = buttonLink.substring(0, buttonLink.indexOf(connectorURL));
				const fullURL = `${prefix}${connectorURL}${textArea.value}`;

				button.setAttribute("href", fullURL);
				break;
		}
	}
});