const textArea = document.getElementById("text-area");

const buttonDiv = document.getElementById("post-buttons");
const buttons = buttonDiv.children;

textArea.addEventListener("input", () => {
	for (let elementIndex = 0; elementIndex < buttons.length; elementIndex++) {
		let button = buttons[elementIndex];

		switch (button.tagName) {
			case "A":
				let buttonLink = button.getAttribute("href");
				let prefix = buttonLink.substring(0, buttonLink.indexOf("="));
				let fullURL = `${prefix}=${textArea.value}`;

				button.setAttribute("href", fullURL);
				break;
		}
	}
});