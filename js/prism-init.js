(() => {
	const register = () => {
		if (!globalThis.Prism?.languages?.bash) return false;

		Prism.languages.insertBefore("bash", "function", {
			"zhiva-cli": {
				pattern: /(^|[\s;|&]|[<>()])(?:zhiva|bun)(?=$|[\s;|&]|[<>()])/g,
				lookbehind: true,
				alias: "keyword",
			},
		});
		return true;
	};

	if (register()) return;

	document.addEventListener(
		"DOMContentLoaded",
		() => {
			if (register()) Prism.highlightAll();
		},
		{ once: true },
	);
})();
