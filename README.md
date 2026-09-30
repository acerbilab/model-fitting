# Model fitting

The hub for the model-fitting tools of Luigi Acerbi's Machine and Human Intelligence Group
(University of Helsinki), published at <https://acerbilab.org/model-fitting/>. It says what
each tool is for, helps visitors choose one, and sends them on to its documentation and
code. Films, talks and posts about the tools link here.

| Path | Contents |
|---|---|
| `site/index.html` | The page: hero, "Which tool do I need?", the tools, the next wave, the tools in use, help and news |
| `site/css/style.css` | Styles; the palette and type follow the wireframe animations |
| `site/js/main.js` | Starts the live wireframe in the hero, and renders the "In use" cards |
| `site/js/fields.js` | The studies shown in "In use", one per field |
| `site/wireframe/vbmc/` | An interactive wireframe of a real PyVBMC run (see below) |
| `site/assets/` | Hero still, social-card image, favicon, the *One cause or two?* poster |
| `.github/workflows/pages.yml` | Deploys `site/` to GitHub Pages on every push to `main` that changes it |

The page is static HTML, CSS and JavaScript modules, with no build step. It loads IBM Plex
Sans, IBM Plex Mono and STIX Two Text from Google Fonts, and the wireframe loads three.js
from cdnjs.

## Preview

```sh
python -m http.server 8790 -d site
```

Then open <http://127.0.0.1:8790>. Opening `index.html` as a file does not work, because
the page loads JavaScript modules.

The links to the tools' documentation (`/pybads/`, `/pyvbmc/`, `/nanoACE/`, …) are
root-relative: they work on `acerbilab.org`, where every acerbilab project site is served,
and not on the local preview.

## The wireframe

`site/wireframe/vbmc/` is a copy of the 3D animation of a PyVBMC run from the PyVBMC
repository (`docsrc/source/_static/vbmc3d/index.html` and `trace.js`, branch
`feat-3d-animation`), where its design notes, the exporter of its traces and its checks
live. Changes to the animation are made there and copied here. The hero loads it with
`?hud=0` (no text or controls) on screens wider than 760 px that allow motion; elsewhere
it shows `assets/hero.jpg`, a still of the same run.

## Deploy

GitHub Pages must be enabled for this repo with "GitHub Actions" as the source. The
organisation site, `acerbilab/acerbilab.github.io`, carries the custom domain
`acerbilab.org`, so this site is served at `acerbilab.org/model-fitting/`.
