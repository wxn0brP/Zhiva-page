(() => {
	const KEY = "zhiva-theme";
	const root = document.documentElement;
	const meta = document.querySelector('meta[name="theme-color"]');
	const button = document.getElementById("theme-toggle");
	const media = matchMedia("(prefers-color-scheme: light)");

	const read = () => {
		try {
			return localStorage.getItem(KEY);
		} catch {
			return null;
		}
	};

	const save = (value) => {
		try {
			localStorage.setItem(KEY, value);
		} catch {
			// storage unavailable, theme stays for this visit
		}
	};

	const apply = (theme) => {
		root.dataset.theme = theme;
		meta?.setAttribute("content", theme === "light" ? "#ffffff" : "#111111");
		if (!button) return;
		const next = theme === "light" ? "dark" : "light";
		button.setAttribute("aria-label", `Switch to ${next} theme`);
	};

	apply(root.dataset.theme === "light" ? "light" : "dark");

	button?.addEventListener("click", () => {
		const theme = root.dataset.theme === "light" ? "dark" : "light";
		save(theme);
		apply(theme);
	});

	media.addEventListener("change", (event) => {
		if (read()) return;
		apply(event.matches ? "light" : "dark");
	});
})();
