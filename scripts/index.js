const textArea = document.getElementById("text-area");

const buttonDiv = document.getElementById("post-buttons");
const buttons = buttonDiv.children;

textArea.addEventListener("input", () => {
	for (let elementIndex = 0; elementIndex < buttons.length; elementIndex++) {
		const button = buttons[elementIndex];

		switch (button.tagName) {
			case "A":
				const buttonLink = button.getAttribute("href");
				const prefix = buttonLink.substring(0, buttonLink.indexOf("="));
				const fullURL = `${prefix}=${textArea.value}`;

				button.setAttribute("href", fullURL);
				break;
		}
	}
});