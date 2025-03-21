const textArea = document.querySelector("textarea");
const root = document.querySelector(":root");

const buttons = document.getElementById("post-buttons").children;

// Theme options
const browserThemeOption = document.getElementById("browser-theme");
const darkThemeOption = document.getElementById("dark-theme");
const lightThemeOption = document.getElementById("light-theme");

const connectorURL = "=";

function setTheme(themeName) {
	root.style.colorScheme = themeName;
}

// Typing in the textarea for changing the button links
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

// Changing themes

browserThemeOption.addEventListener("click", () => {
	setTheme("light dark")
});

darkThemeOption.addEventListener("click", () => {
	setTheme("dark");
});

lightThemeOption.addEventListener("click", () => {
	setTheme("light");
});