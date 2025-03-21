const textArea = document.querySelector("textarea");

const buttons = document.getElementById("post-buttons").children;

const connectorURL = "=";

textArea.addEventListener("keyup", () => {
	for (let elementIndex = 0; elementIndex < buttons.length; elementIndex++) {
		const button = buttons[elementIndex];

		switch (button.tagName) {
			case "A":
				const buttonLink = button.getAttribute("href");
				const linkSubstring = buttonLink.slice(0, buttonLink.indexOf(connectorURL));

				const text = encodeURIComponent(textArea.value);

				button.setAttribute("href", `${linkSubstring}${connectorURL}${text}`);
				break;
		}
	}
});