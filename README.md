# Academic website — Dr. Ambairam Muthu Sivakrishna

A researcher website for GitHub Pages. No build step, no framework, no cost.
All content lives in `data.js`, which you edit through a visual panel — never code.

## Files

| File | What it is |
|---|---|
| `index.html` | The website. Reads everything from `data.js`. |
| `data.js` | **All your content.** The only file you ever change. |
| `admin.html` | Visual editor. Edit content, download an updated `data.js`. |
| `Dr_Ambairam_CV.pdf` | Linked by the download button. |

---

## Publish it (about five minutes)

1. Create a GitHub account.
2. Create a **public** repository named exactly `<yourusername>.github.io`.
3. **Add file → Upload files** → drag in all four files → Commit.
4. **Settings → Pages → Source → Deploy from a branch → main → /(root)** → Save.
5. Live at `https://<yourusername>.github.io` within a minute.

---

## Update your content

1. Open `admin.html` by double-clicking it on your computer.
2. Edit anything across the seven tabs.
3. Click **Download data.js**.
4. In your GitHub repo, click the existing `data.js` → pencil icon → delete
   everything → paste the new file's contents → Commit.
   Or use **Add file → Upload files** and let it overwrite.
5. The site updates in about a minute.

The editor runs entirely in your browser. Nothing is uploaded anywhere, and
there is no password to manage — you hold the only copy.

### What you can edit

- **Profile** — photo, name, position, headline, biography, contact details,
  the four headline numbers, research interests, and the default colour theme.
- **Announcements** — internship calls, calls for proposals, openings. Each has
  a type badge, a deadline, and an open/closed switch. Closed ones grey out
  automatically rather than disappearing.
- **Blog** — title, date, tags, summary, and full text. Posts expand in place
  when a reader clicks them.
- **Courses** — course code, name, term, and a list of downloadable materials.
  Materials with no link show "coming soon" instead of breaking.
- **Publications**, **Experience**, **Service & more** — everything else from
  your CV, each with add and remove buttons.

---

## Colour themes

Six palettes: indigo, forest, plum, slate, ember, teal. Pick your default in
the Profile tab. Visitors can also switch themes from the sidebar, and their
choice is remembered on their next visit.

---

## Adding your profile photo

In the Profile tab, click **Upload a photo**. Use a square image under 900 KB —
resize it first if your camera file is large. The image is embedded directly
into `data.js`, so there is no separate file to upload.

---

## Course materials and CV

Upload PDFs and slides to your repository the same way you upload any file.
Then in the Courses tab, put just the filename in the link box:

```
unit1-classical-cryptography.pdf
```

For files in a subfolder, include the folder: `materials/unit1.pdf`.
External links work too — paste a full Google Drive or Dropbox URL.

---

## Internship and proposal application forms

The site is static, so it cannot receive form submissions itself. Connect a
free form service and paste its URL into the announcement's **Application
form URL** field. The Apply button will point at it.

**Google Forms** — unlimited responses, recommended for applications
1. Build your form at forms.google.com with the fields you want
   (name, institution, year, CV upload, statement of interest).
2. Click **Send** → copy the link.
3. Paste it into the announcement in `admin.html`.
4. Responses collect in a Google Sheet you can sort and filter.

**Formspree** — 50 submissions/month free, emails you each one
1. Sign up at formspree.io and create a form to get an endpoint URL.
2. Use it the same way.

If you leave the URL blank, the Apply button becomes an **Enquire by email**
link with the announcement title pre-filled as the subject — useful for a call
you want to keep informal.

---

## Custom domain

GitHub Pages supports custom domains at no extra charge. Buy a domain, add a
file named `CNAME` containing only the domain name, then point your DNS A
records at the IPs listed under **Settings → Pages**.

---

## Keeping the editor private

`admin.html` contains no credentials and cannot change your live site on its
own — it only produces a file for you to upload. But if you would rather it
not be publicly reachable, keep it on your computer and don't upload it to the
repository. The site works without it.
