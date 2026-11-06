# Formal faculty website and CMS setup

## Publish the redesign once

1. Extract the ZIP. Its files are at the archive root: index.html, style.css, site.js, content-fallback.js, admin.html, .pages.yml, the content/ and assets/ folders, and the PDFs.
2. Upload those files and folders to the root of amskrishna/amskrishna.github.io, replacing matching files. Do not upload the ZIP itself or nest these inside another website folder.
3. Include .pages.yml. It is the CMS configuration and may be hidden in a file browser. If GitHub's upload does not include it, use Add file > Create new file, name it .pages.yml and paste the supplied file contents.
4. Include .nojekyll (an empty file) so GitHub Pages serves this plain static website directly.
5. Commit to the branch configured for GitHub Pages. Under Settings > Pages, retain main and /(root) if those are the existing settings. Wait for a successful Pages deployment.
6. Open https://amskrishna.github.io/ and refresh. The header must say National Institute of Technology Karnataka, Surathkal and display the supplied NITK logo.

Old data.js, academic.css, interactive.js and refined.css are no longer loaded by the redesigned page. You can leave them in the repository during migration; remove them later if desired. Keep GitHub workflow files already used by the repository.

## Connect the dashboard once

1. Go to https://app.pagescms.org/ and sign in with GitHub.
2. Install the Pages CMS GitHub App. Grant access only to amskrishna.github.io.
3. Select amskrishna/amskrishna.github.io and the published branch (normally main).
4. The included .pages.yml defines these form-based sections: Profile & contact; News; Research; Publications; Appointments, education & awards; Service & development; Opportunities; Teaching.
5. Edit an entry and save. Pages CMS commits the changes; the configured GitHub Pages deployment publishes them. The public website reads the content JSON on each visit. No manual GitHub file edit or push is needed for routine updates.

The user must complete sign-in and authorization. No account connection or live publication was performed when preparing this package.

## What can be changed

- Biography, role, affiliation, contact details, CV, logo and profile image.
- Research headings and descriptions.
- Journal and conference entries, venues, publication status and DOIs.
- News entries and links; dates sort latest first.
- Courses, descriptions, terms and learning-material links.
- Appointments, education, awards and administrative responsibilities.
- Reviewing, memberships, workshops, FDPs and certifications.
- Research enquiry text, application email, opening status and deadline.

Use plain text for text fields; separate biography paragraphs with a blank line. CMS uploads go into assets/. New media paths from the CMS are absolute (/assets/...) and work with the user's root GitHub Pages domain. Existing PDF download URLs remain valid. Replacing the selected CV in the dashboard updates the website link; replace both legacy PDF files manually only if you also want the old direct URLs updated.

Layout, navigation structure and styles remain code changes. Routine content is editable in the dashboard.

## Local review and fallbacks

Opening index.html directly uses bundled fallback content because browsers restrict fetch on file:// URLs. Published websites read content/*.json, so CMS edits appear after deployment and refresh. A local HTTP preview also reads JSON. content-fallback.js is a snapshot of initial content, used only if JSON cannot be loaded; do not edit it for normal CMS updates.

## Reference and design

The layout uses an institutional masthead, simple text navigation, justified paragraphs, compact profile portrait and formal publication lists. The supplied NITK logo is preserved without distortion. No decorative image galleries, animated counters, gradients or promotional cards are used. HALE Lab at NITK was consulted as a structural reference; the text and identity remain the user's own.

## Section and announcement update

Navigation now follows Home → Research → Publications → Experience → Education → Teaching → Awards → Service → Workshops → Responsibilities → Contact. Education, Experience, Awards, Workshops and Administrative Responsibilities have separate pages and CMS forms. Upload the full updated content/ folder, including the new education.json file, and replace .pages.yml alongside the HTML, CSS and JavaScript files.

In Pages CMS, select Home announcements to change the frame heading and introductory note, add dated announcements, and turn Show on homepage on or off. Items sort newest first. With multiple visible announcements, Previous and Next controls appear. With one item, it remains visible without unnecessary controls. Long announcement text scrolls within the frame. No automatic movement interrupts reading.

Research entries support longer descriptions, blank lines between paragraphs, and an expandable Research questions note (one question per line). The descriptive text expresses research interests and questions, not claimed experimental results.
