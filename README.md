# Garden Control Centre website

A responsive, static promotional website for the Garden Control Centre prototype.

## Preview locally

Open `index.html` in a browser. The site uses relative asset paths and does not require a build step. Google Fonts are loaded online; system fallbacks are included.

## Publish

This folder can be published as a static site using GitHub Pages, Netlify, Azure Static Web Apps, or any basic web host. Upload the contents of this folder (including `assets/`) to the host.

## Before publishing publicly

- The site now includes owner-supplied photographs of the real garden, lighting tests and controller wiring, plus screenshots of the live dashboard. Any remaining illustrative imagery is labelled clearly.
- Configure a public contact address or email-routing alias before publishing contact details.

## Structure

- `index.html` — content and page structure
- `styles.css` — responsive styling
- `script.js` — mobile navigation and current year
- `assets/` — compressed WebP images used by the site


## Real project photographs
The current site uses photographs supplied by the project owner showing the garden path/patio work, night-time lighting tests, the Mosfetti driver and the hand-wired prototype board. The dashboard screenshots are supplied by the project owner. The weather-aware watering section reflects existing prototype logic: location-based weather/forecasts are considered alongside soil-moisture readings. Further intelligence and validation are ongoing. The live interface is described as a prototype.


## Interactive dashboard demo

Open `demo/` to try the real Garden Control Centre dashboard interface with simulated data. Lighting controls, automation editing, profile settings, and sensor history work without login or a live backend. Controls do not operate real garden equipment. The promotional homepage links to this demo; the old `dashboard-demo.html` URL redirects there and preserves tab query strings.

The compiled demo lives in `demo/index.html` and `demo/assets/`. To refresh it, run `npm --prefix frontend run build:demo` in the Garden Control Centre source repository, then replace those files with the matching output from `frontend/dist-demo`. Do not copy the standalone demo's `staticwebapp.config.json` into this shared website, because its hosting rules and headers are intended for a dedicated demo site. The existing root website and deployment workflow remain unchanged.


Branding update: the promotional site header and footer now use the same Creative Garden Projects / Garden Control Centre stacked wordmark and botanical mark as the dashboard demo.
