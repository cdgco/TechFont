# Installation

## CDN

Include the TechFont CSS:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cdgco/techfont@master/dist/techFont.css">`

To use multi-color icons, also include the color CSS and JS:
    
`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cdgco/techfont@master/dist/techFontColor.css">`

`<script src="https://cdn.jsdelivr.net/gh/cdgco/techfont@master/dist/techFontColor.js"></script>`

## NPM

`npm install --save techfont`

## Manual

Download the `dist` folder and include the CSS (and JS if you want multi-color icons):

`<link rel="stylesheet" href="dist/techFont.css">`

`<link rel="stylesheet" href="dist/techFontColor.css">`

`<script src="techFontColor.js"></script>`

# Making New Icons

All icons are made in Adobe Illustrator with a 1000 x 1000 pt artboard. For the box variant icons, use a 150 pt corner radius. Circular icons should be roughly 806 x 806 pt. 

Box variants are appended with -b. Alternative versions of the same icon are appended with -alt, or -alt-b. Multi-layer icons are appended with -pt1, -pt2, etc.

SVGs are saved to the svg-icons folder while AI files are saved to the illustrator folder.

To compile the new icons, run the script `npm run webfont`.

To add colors for multi-layer icons, add a new line `tfLoadMultiColorIcon("name", layers, box)` for both the box and non-box versions in `techFontColor.js`, replacing the icon name and layer numbers, without -b, -clr or -pt.

Add the colors for each layer to `techFontColor.css` like so:
```
tf-icon-pt1::before {
    color: #FFCB3E;
}
```
