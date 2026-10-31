(() => {
	const elements = document.querySelectorAll(".animate-on-scroll");
	if (!elements.length) return;

	const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (reduce || !("IntersectionObserver" in window)) {
		for (const element of elements) element.classList.add("is-visible");
		return;
	}

	const observer = new IntersectionObserver(
		(entries, instance) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add("is-visible");
				instance.unobserve(entry.target);
			}
		},
		{ root: null, rootMargin: "0px", threshold: 0.1 },
	);

	for (const element of elements) observer.observe(element);
})();
