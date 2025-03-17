const htmlPage = document.getElementsByTagName("html")[0];

const textArea = document.getElementById("text-area");

const buttonDiv = document.getElementById("post-buttons");
const buttons = buttonDiv.children;

const darkThemeButton = document.getElementById("toggle-dark-theme");

const connectorURL = "=";

function setTheme(themeName) {
	htmlPage.style.colorScheme = themeName;
}

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

darkThemeButton.addEventListener("click", () => {
	if (darkThemeButton.checked) {
		setTheme("dark");
	} else {
		setTheme("light");
	}
});