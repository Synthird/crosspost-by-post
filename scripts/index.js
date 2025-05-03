const textArea = document.querySelector("textarea");

const buttons = document.getElementById("post-buttons").children;

const linkConnector = "=";

textArea.addEventListener("input", () => {
	for (let elementIndex = 0; elementIndex < buttons.length; elementIndex++) {
		const button = buttons[elementIndex];

		switch (button.tagName) {
			case "A":
				// Link pieces
				const buttonLink = button.getAttribute("href");
				const beginningLink = buttonLink.slice(0, buttonLink.indexOf(linkConnector));
				const text = encodeURIComponent(textArea.value);

				// Change button links
				button.setAttribute("href", `${beginningLink}${linkConnector}${text}`);
				break;
		}
	}
});
