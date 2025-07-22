const textArea = document.querySelector("textarea"),
	buttons = document.getElementById("post-buttons").children;

textArea.addEventListener("input", () => {
	for (const button of buttons) {
		// Link pieces
		const buttonLink = button.getAttribute("href"),
			beginningLink = buttonLink.slice(0, buttonLink.indexOf("=") + 1),
			text = encodeURIComponent(textArea.value);

		// Change links
		button.setAttribute("href", `${beginningLink}${text}`);
	}
});
