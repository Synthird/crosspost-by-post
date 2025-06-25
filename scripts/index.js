const textArea = document.querySelector("textarea"),
	buttons = document.getElementById("post-buttons").children,
	linkConnector = "=";

textArea.addEventListener("input", () => {
	for (const button of buttons) {
		switch (button.tagName) {
			case "A":
				// Link pieces
				const buttonLink = button.getAttribute("href"),
					beginningLink = buttonLink.slice(0, buttonLink.indexOf(linkConnector)),
					text = encodeURIComponent(textArea.value);

				// Change links
				button.setAttribute("href", `${beginningLink}${linkConnector}${text}`);
				break;
		}
	}
});
