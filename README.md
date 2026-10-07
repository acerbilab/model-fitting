# Model fitting

The hub for the model-fitting tools of Luigi Acerbi's Machine and Human Intelligence Group
(University of Helsinki), published at <https://acerbilab.org/model-fitting/>. It says what
each tool is for, helps visitors choose one, and sends them on to its documentation and
code. Films, talks and posts about the tools link here.

| Path | Contents |
|---|---|
| `site/index.html` | The page: hero, "Which tool do I need?", the tools, the next wave, the tools in use, community and news |
| `site/css/style.css` | Styles; the palette and type follow the wireframe animations |
| `site/css/fonts.css`, `site/fonts/` | The typefaces, served from the site, with their licences |
| `site/vendor/` | three.js r128, which the wireframe draws with |
| `site/js/main.js` | Starts the live wireframe in the hero, and renders the "In use" cards |
| `site/js/fields.js` | The studies shown in "In use", one per field |
| `site/wireframe/vbmc/` | An interactive wireframe of a real PyVBMC run (see below) |
| `site/assets/` | Hero still, social-card image, favicon, the *One cause or two?* poster, the PyBADS film's poster and captions |
| `site/media/` | The films, gitignored: the deployment fetches each from a release (see below) |
| `.github/workflows/pages.yml` | Deploys `site/` to GitHub Pages on every push to `main` that changes it |

The page is static HTML, CSS and JavaScript modules, with no build step. It loads nothing
from other servers, so a visit sends the visitor's address to no one but the host, and the
page sets no cookies. The fonts are IBM Plex Sans, IBM Plex Mono and STIX Two Text,
in the Latin and Latin Extended subsets that Google Fonts serves, each with its SIL Open
Font License. three.js is the r128 build that cdnjs serves (MIT licence, in the file's
header).

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
live. Changes to the animation are made there and copied here. The copy here differs in two
places of `index.html`: it loads the fonts (`../../css/fonts.css`) and three.js
(`../../vendor/three.r128.min.js`) from this site, where the original loads them from Google
Fonts and cdnjs. A new copy keeps both changes. The hero shows
`assets/hero.jpg`, a still of the same run, and plays the animation over it (`?hud=0`: no
text or controls) once the page has loaded, only while the hero is on screen. Visitors who ask for reduced motion or data saving keep the
still.

## News

The flag over the hero's title carries the latest release or film, in the colour of its
method, and links to the method's entry, which says what is new. Each item also goes at
the top of the dated list of news, next to "Community" in the page's last section, where
it stays when the flag moves on to the next one.

## Films

A film plays from a file on the site, in a `<video>` with its captions as a track and a
link to its YouTube upload. The video stays out of git: it is an asset of a release of
this repository, which `.github/workflows/pages.yml` downloads into `site/media/` before
it deploys. So the release exists before a change that plays the film reaches `main`, or
the deployment fails. The poster and the captions are small and committed in
`site/assets/`.

| Film | Release | Asset | Poster and captions |
|---|---|---|---|
| PyBADS, in the PyBADS entry | `pybads-film` | `pybads-film.mp4`, a 17 MB web encode of the 1080p master | `pybads-film.jpg`, `pybads-film.vtt` |

To preview a film, fetch its file into `site/media/` first:

```sh
gh release download pybads-film --pattern pybads-film.mp4 --dir site/media
```

Python's `http.server` serves no byte ranges, so the preview plays a film from its start
but cannot seek in it; GitHub Pages can.

## Deploy

GitHub Pages must be enabled for this repo with "GitHub Actions" as the source. The
organisation site, `acerbilab/acerbilab.github.io`, carries the custom domain
`acerbilab.org`, so this site is served at `acerbilab.org/model-fitting/`.
