# CLAUDE.md

## What this is

The hub page for the lab's model-fitting tools, at `acerbilab.org/model-fitting/`. It is
the single place that films, talks, posts and paper pages send users ("customers") to. It
explains what each tool is for and routes visitors to the tool's documentation and code;
the documentation itself stays in each tool's own site (`acerbilab.org/pyvbmc/`,
`acerbilab.org/pybads/`).

`PLAN.md`, when present, holds the current plan, decisions and status. It is kept out of
git. Read it first. `README.md` has the layout, the preview command and how the page is
deployed.

## Scope

- **Listed:** tools that are ready to use: PyBADS/BADS, PyVBMC/VBMC and PyIBS/IBS, each in
  Python and MATLAB. ACE (with nanoACE) is featured as the next wave of the lab's methods.
- **Not listed:** research code that is not meant for general use.
- **S-VBMC** (stacking several VBMC runs) becomes part of PyVBMC in version 1.5. From then
  on it is described as a feature of PyVBMC, not as a separate tool.

## Audience

Anyone who fits models to data: cognitive science and neuroscience, where the tools
started, and also the other sciences, engineering, and people close to machine learning.
The tools are not only for expensive black-box models. Many models take a fraction of a
second per evaluation and are still costly to fit well; the page speaks to both.

## Look

- **The wireframe is the visual language for the methods.** Glowing lines on a dark
  ground, as in the PyVBMC animation. Every picture of a method comes from a real run of
  it, never a drawing.
- **One colour per method,** used wherever the method appears (`:root` in
  `site/css/style.css`): BADS orange, VBMC magenta, IBS green, ACE yellow-green. Cyan is
  the colour of the interface (links, labels, the main button), as it is of the surrogate
  in the wireframe.
- **Type:** IBM Plex Sans for text, IBM Plex Mono for labels and code, STIX Two Text
  italic for accents.
- **The page is dark only**, like the animations.

## Nothing from other servers

Everything the page loads comes from this site: fonts, scripts, images and films. No
embedded players, font services, CDNs, analytics or cookies, so a visit sends the visitor's
address to no one but the host and the page needs no consent banner. A film plays from a
file on the site in a `<video>`, with a plain link to its YouTube upload. Links to other
sites are fine, since they load nothing until clicked.

## Accuracy

- Claims about a tool follow its papers and documentation. The parameter ranges are
  "up to about 20 parameters" for BADS and "best with up to about 10 parameters" for VBMC.
- *One cause or two?* (Liu, Holland, Ma & Acerbi, PLOS Comput Biol 2026): BADS fitted the
  models with up to 20 parameters, and CMA-ES the 40-parameter semiparametric fits. The
  paper does not use VBMC.
- An entry in `site/js/fields.js` ("In use") must be a study that used the tool, as its
  own text shows, not one that only cites it.

## Checks

Before committing a change to the page, preview it (`README.md`) and take screenshots at
desktop and phone widths with headless Chrome:

```sh
chrome --headless=new --enable-unsafe-swiftshader --hide-scrollbars --window-size=1440,4300 \
  --virtual-time-budget=9000 --user-data-dir=<fresh dir> --screenshot=desk.png http://127.0.0.1:8790/
chrome --headless=new --hide-scrollbars --window-size=540,5200 \
  --virtual-time-budget=5000 --user-data-dir=<fresh dir> --screenshot=phone.png http://127.0.0.1:8790/
```

On Windows, headless Chrome lays pages out at least about 520 px wide whatever
`--window-size` says, so 540 px stands in for a phone. The window height sets how much of
the page the screenshot covers.

Check too that nothing loads from another server; this finds nothing:

```sh
grep -rnE "(src=|@import|url\(|rel=\"(stylesheet|preload|preconnect|modulepreload)\"[^>]*href=)[\"']?https?://|from ['\"]https?://|import\(['\"]https?://" site
```
