# Dan Luo — Portfolio

A structured personal portfolio website presenting selected work at the intersection of strategy, AI adoption, customer experience, and data-driven innovation.

## Live site

[Visit the website](https://luodan3847.github.io/portfolio/)

## Overview

This repository contains the source code for my public portfolio site. The goal is simple: make it easy for collaborators, clients, and recruiters to understand how I think, what I work on, and how I translate complex questions into structured, useful outcomes.

The site is intentionally built as a lightweight static project and deployed with GitHub Pages.

## What this repository shows

- A clean static-site structure
- Separated HTML, CSS, and JavaScript
- Public GitHub Pages deployment
- Basic project documentation and maintenance files
- A portfolio focused on clarity, not unnecessary complexity

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- GitHub Actions

## Repository structure

```text
portfolio/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── CHANGELOG.md
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── social-preview.png
└── .github/
    └── workflows/
        └── deploy.yml
```

## Local preview

Because this is a static site, you can open `index.html` directly in a browser.

For a cleaner local preview, you can also run a simple local server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Design approach

This site is designed around a few principles:

- clarity over clutter
- structured storytelling
- lightweight, maintainable code
- a professional public-facing repository

## Deployment

The site is configured for GitHub Pages and includes a GitHub Actions workflow for deployment.

## Notes

Some visual assets remain embedded directly in the HTML for now. This is intentional in the current version to keep sensitive or selectively shared assets from being exposed as separate public files.

## License

This repository is released under the MIT License.
