# Update your website

## First upload

Upload the contents of this folder to the root of your existing GitHub website repository, replacing matching files. Keep the assets folder and its contents. Do not upload the ZIP itself or put the website inside another folder.

The supplied CV is now Dr_Ambairam_CV.pdf. The older double-underscore filename also contains the new PDF so existing links continue to work.

## Edit content without coding

1. Extract the ZIP first. Keep admin.html and data.js together in this folder.
2. Double-click admin.html to open the content editor in your browser.
3. Select a tab and edit your content.
4. Click Download data.js. Save it before closing or refreshing the editor; unsaved edits will be lost.
5. Replace data.js in this folder with the downloaded file. If the browser names it data (1).js, rename it to data.js.
6. Open index.html to review your changes locally.
7. Upload the updated data.js to the root of your GitHub repository to publish the changes.

The Preview site button needs an HTTP server. When opening files by double-clicking, use steps 4–6 instead. The editor does not automatically save files or update GitHub.

## What you can edit

- Profile: identity, biography, photo, contact links, CV filename, default theme and headline numbers.
- Announcements: opportunity title, dates and detailed application text. The page shows the first open announcement, or the first announcement when none are open.
- Courses: course details and material links.
- Publications: journal and conference records, including DOIs.
- Experience: teaching positions, administrative roles and education.
- Service & more: reviewing, memberships, delivered workshops and awards.
- More website content: research directions, teaching principles, research problems and institutional affiliations.

Some fields inherited from the original editor are stored but not displayed by the current website layout: blog posts, research interests, theses, technical skills, attended workshops, references and publication closing notes. Main headings, short promotional text and some badges remain in index.html. Headline numbers are manual; update them when needed. A visitor's saved theme overrides the default theme.

## Replace your CV again later

Replace Dr_Ambairam_CV.pdf with your new PDF using exactly the same filename, then upload it to GitHub. Also replace Dr__Ambairam_CV.pdf if you want older direct links to receive the new version. If you use a different filename, update Profile → CV filename in your repo and upload both the PDF and the downloaded data.js.

## Direct file editing

data.js is the content file. Edit text inside quotation marks while preserving commas, brackets and the window.SITE assignment. The browser editor handles this formatting for you.

## Validation

JavaScript syntax, all editor section templates, adding research content, content-file export and exact CV file matching were checked. Browser visual verification was unavailable because local browser access was blocked in this environment.
