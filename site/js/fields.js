// Studies that used the tools, one per field, for the "In use" section. Each entry must be
// a study that actually used the tool (checked in its text), not one that only cites it.
// { field, title, url, used, tool, venue, year }
export const FIELDS = [
	{
		field: "Quantum computing",
		title: "The phase diagram of quantum chromodynamics in one dimension on a quantum computer",
		url: "https://doi.org/10.1038/s41467-025-65198-w",
		used: "PyBADS optimized a variational quantum algorithm run on quantum hardware, where every evaluation is a noisy measurement.",
		tool: "PyBADS", venue: "Nature Communications", year: 2025,
	},
	{
		field: "Gravitational waves",
		title: "Bilinear noise subtraction at the GEO 600 observatory",
		url: "https://doi.org/10.1103/physrevd.101.102006",
		used: "BADS searched the parameters of a scheme that subtracts noise from a gravitational-wave detector's data.",
		tool: "BADS", venue: "Physical Review D", year: 2020,
	},
	{
		field: "Planetary science",
		title: "Study of subsurface structures northwest of Ascraeus Mons, Mars, based on Variational Bayesian Monte Carlo",
		url: "https://doi.org/10.1109/ACCESS.2025.3540824",
		used: "VBMC inferred the properties of layers below the Martian surface from orbital radar soundings.",
		tool: "VBMC", venue: "IEEE Access", year: 2025,
	},
	{
		field: "Hydrology",
		title: "Integrating ICESat-2 laser altimeter observations and hydrological modeling for enhanced prediction of climate-driven lake level change",
		url: "https://doi.org/10.1016/j.jhydrol.2023.130304",
		used: "VBMC combined satellite altimetry with a water-balance model to predict lake levels.",
		tool: "VBMC", venue: "Journal of Hydrology", year: 2023,
	},
	{
		field: "Ocean acoustics",
		title: "Application of dual-source modal dispersion and Variational Bayesian Monte Carlo method for local geoacoustic inversion in weakly range-dependent shallow water",
		url: "https://doi.org/10.1007/s40857-022-00277-2",
		used: "VBMC inferred the properties of the seabed from how sound travels through the water above it.",
		tool: "VBMC", venue: "Acoustics Australia", year: 2022,
	},
	{
		field: "Cancer pharmacology",
		title: "Interrogating and quantifying in vitro cancer drug pharmacodynamics via agent-based and Bayesian Monte Carlo modelling",
		url: "https://doi.org/10.3390/pharmaceutics14040749",
		used: "VBMC estimated the parameters of an agent-based model of cancer cell cultures under drug treatment.",
		tool: "VBMC", venue: "Pharmaceutics", year: 2022,
	},
	{
		field: "Radiotherapy",
		title: "Personalized in silico model for radiation-induced pulmonary fibrosis",
		url: "https://doi.org/10.1098/rsif.2024.0525",
		used: "VBMC calibrated a patient-specific model of lung fibrosis after radiation therapy.",
		tool: "VBMC", venue: "Journal of the Royal Society Interface", year: 2024,
	},
	{
		field: "Ion-channel biophysics",
		title: "A rich conformational palette underlies human CaV2.1-channel availability",
		url: "https://doi.org/10.1038/s41467-025-58884-2",
		used: "BADS fitted the kinetic rates of a model of a human calcium channel.",
		tool: "BADS", venue: "Nature Communications", year: 2025,
	},
	{
		field: "DNA computing",
		title: "Enabling molecular signaling with temperature and ionic-strength independence or programmable dependence",
		url: "https://doi.org/10.1038/s41467-026-76207-x",
		used: "PyBADS optimized the concentrations and binding affinities of molecular circuits built from DNA.",
		tool: "PyBADS", venue: "Nature Communications", year: 2026,
	},
	{
		field: "Petroleum engineering",
		title: "Well production optimization using streamline features-based objective function and Bayesian adaptive direct search algorithm",
		url: "https://doi.org/10.1016/j.petsci.2022.06.016",
		used: "BADS optimized the production of oil wells, evaluated with a reservoir simulator.",
		tool: "BADS", venue: "Petroleum Science", year: 2022,
	},
	{
		field: "Wind energy",
		title: "Wind farm power optimization using Bayesian Adaptive Direct Search for active pitch control",
		url: "https://doi.org/10.1109/ccssta62096.2024.10691844",
		used: "BADS tuned the blade pitch of a wind farm's turbines to maximize its power output, in simulation.",
		tool: "BADS", venue: "IEEE CCSSTA", year: 2024,
	},
	{
		field: "Civil engineering",
		title: "Enhanced elastic beam model with BADS integrated for settlement assessment of immersed tunnels",
		url: "https://doi.org/10.1016/j.undsp.2023.02.005",
		used: "BADS estimated the parameters of a model of how immersed tunnels settle, from field observations.",
		tool: "BADS", venue: "Underground Space", year: 2023,
	},
];
