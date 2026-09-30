import { FIELDS } from "./fields.js";

// The hero plays the live wireframe on wide screens that allow motion. Phones and
// reduced-motion visitors keep the still (assets/hero.jpg); the live run is one link away.
function startStage() {
	const stage = document.getElementById("stage");
	const wide = matchMedia("(min-width: 761px)").matches;
	const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (!stage || !wide || still) return;
	const frame = document.createElement("iframe");
	frame.src = "wireframe/vbmc/?hud=0";
	frame.title = "A PyVBMC run, drawn as a wireframe landscape";
	frame.tabIndex = -1;
	frame.loading = "eager";
	frame.addEventListener("load", () => setTimeout(() => frame.classList.add("on"), 400));
	stage.appendChild(frame);
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
