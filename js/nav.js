(() => {
	const toggle = document.getElementById("nav-toggle");
	const nav = document.getElementById("primary-nav");
	if (!toggle || !nav) return;

	const setOpen = (open) => {
		nav.classList.toggle("is-open", open);
		toggle.setAttribute("aria-expanded", String(open));
		toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
		document.body.classList.toggle("nav-open", open);
	};

	toggle.addEventListener("click", () => {
		setOpen(!nav.classList.contains("is-open"));
	});

	nav.addEventListener("click", (event) => {
		if (event.target.closest("a")) setOpen(false);
	});

	document.addEventListener("keydown", (event) => {
		if (event.key !== "Escape" || !nav.classList.contains("is-open")) return;
		setOpen(false);
		toggle.focus();
	});

	document.addEventListener("click", (event) => {
		if (!nav.classList.contains("is-open")) return;
		if (nav.contains(event.target) || toggle.contains(event.target)) return;
		setOpen(false);
	});

	matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
		if (event.matches) setOpen(false);
	});
})();
