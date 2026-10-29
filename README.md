# Garden Control Centre website

A responsive, static promotional website for the Garden Control Centre prototype.

## Preview locally

Open `index.html` in a browser. The site uses relative asset paths and does not require a build step. Google Fonts are loaded online; system fallbacks are included.

## Publish

This folder can be published as a static site using GitHub Pages, Netlify, Azure Static Web Apps, or any basic web host. Upload the contents of this folder (including `assets/`) to the host.

## Before publishing publicly

- Check the GitHub repository URL and visibility.
- The site now includes owner-supplied photographs of the real garden, lighting tests and controller wiring, plus screenshots of the live dashboard. Any remaining illustrative imagery is labelled clearly.
- Add a preferred direct contact email or contact form if you want enquiries to go somewhere other than GitHub Issues.
- Confirm that the current code and pin mappings in the repository match the technical descriptions on the site.

## Structure

- `index.html` — content and page structure
- `styles.css` — responsive styling
- `script.js` — mobile navigation and current year
- `assets/` — compressed WebP images used by the site


## Real project photographs
The current site uses photographs supplied by the project owner showing the garden path/patio work, night-time lighting tests, the Mosfetti driver and the hand-wired prototype board. The dashboard screenshots are supplied by the project owner. The weather-aware watering section reflects existing prototype logic: location-based weather/forecasts are considered alongside soil-moisture readings. Further intelligence and validation are ongoing. The live interface is described as a prototype.


## Interactive dashboard demo

Open `dashboard-demo.html` to try a simulated front-end dashboard. All values are sample data; switches, brightness controls and automation form do not control real garden equipment. The promotional homepage links to this demo.


Branding update: the promotional site header and footer now use the same Creative Garden Projects / Garden Control Centre stacked wordmark and botanical mark as the dashboard demo.
