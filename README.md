# Dr. Ambairam Muthu Sivakrishna — Academic Website

A polished, responsive academic and research website designed for GitHub Pages.
No framework or build step is required.

## Public website structure

The redesigned site includes:

- Research-focused hero/profile section
- About and research identity
- Six focused research problem clusters
- Journal and conference publication tabs
- Course descriptions and teaching materials
- Research internship opportunities for UG and Master's students
- Academic appointments and education timeline
- Peer review, memberships, awards and recognition
- Collaboration/contact section
- Responsive mobile navigation
- Light/dark appearance toggle
- Search-engine metadata and Person structured data

## Files

| File | Purpose |
|---|---|
| `index.html` | Main public website |
| `data.js` | Profile, publications, courses, announcements and CV content |
| `admin.html` | Existing local visual editor for `data.js` |
| `Dr_Ambairam_CV.pdf` | Downloadable academic CV |

## Deploy on GitHub Pages

1. Open the repository `amskrishna.github.io` on GitHub.
2. Upload/replace the files in this package at the repository root.
3. Commit the changes to `main`.
4. Go to **Settings → Pages**.
5. Select **Deploy from a branch → main → /(root)** and save.
6. The website will be available at `https://amskrishna.github.io/` after GitHub Pages finishes deployment.

## Updating content

Most academic content remains in `data.js`, so publications, courses, experience,
awards and profile details can be updated without redesigning the page.

The existing `admin.html` can still be opened locally to edit its supported
`data.js` fields and download an updated data file.

### Important

The focused research cards and the compact student-project problem cards are part
of the redesigned `index.html`. If you want to change those exact research themes,
edit the `research` and `probs` arrays near the bottom of `index.html`.

## Profile photograph

The current 400×400 profile photograph is already embedded in `data.js`, so no
separate image file is required. A higher-resolution professional headshot can be
substituted later if desired.
