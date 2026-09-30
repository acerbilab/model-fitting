import { FIELDS } from "./fields.js";

// The hero plays the live wireframe over its still (assets/hero.jpg). It starts once the
// rest of the page has loaded, and runs only while the hero is on screen: scrolled away, it
// is removed, so it costs nothing; scrolled back, it starts again. It starts 40 s into the
// run, where the landscape is already full. Visitors who ask for reduced motion or for
// data saving keep the still.
function startStage() {
	const stage = document.getElementById("stage");
	const still = matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.connection?.saveData;
	if (!stage || still) return;
	let frame = null;
	const show = () => {
		if (frame) return;
		frame = document.createElement("iframe");
		frame.src = "wireframe/vbmc/?hud=0&t=40";
		frame.title = "A PyVBMC run, drawn as a wireframe landscape";
		frame.tabIndex = -1;
		const shown = frame;
		shown.addEventListener("load", () => setTimeout(() => shown.classList.add("on"), 400));
		stage.appendChild(shown);
	};
	const hide = () => {
		if (!frame) return;
		frame.remove();
		frame = null;
	};
	const watch = () => new IntersectionObserver(([e]) => (e.isIntersecting ? show() : hide())).observe(stage);
	if (document.readyState === "complete") watch();
	else addEventListener("load", watch, { once: true });
}

// "In use": one card per field, each with a study that used the tools (js/fields.js).
function renderFields() {
	const box = document.getElementById("fields");
	if (!box) return;
	for (const f of FIELDS) {
		const card = document.createElement("article");
		card.className = "card field";
		card.style.setProperty("--accent", /VBMC/.test(f.tool) ? "var(--vbmc)" : /IBS/.test(f.tool) ? "var(--ibs)" : "var(--bads)");
		card.innerHTML = `
			<p class="area"></p>
			<h3><a></a></h3>
			<p class="used"></p>
			<p class="meta"></p>`;
		card.querySelector(".area").textContent = f.field;
		const a = card.querySelector("h3 a");
		a.textContent = f.title;
		a.href = f.url;
		card.querySelector(".used").textContent = f.used;
		card.querySelector(".meta").textContent = `${f.tool} · ${f.venue} ${f.year}`;
		box.appendChild(card);
	}
}

startStage();
renderFields();
