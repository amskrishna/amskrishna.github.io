# Publish the revised website

Extract the ZIP. In your existing amskrishna.github.io repository, copy index.html, style.css, site.js, content-fallback.js and .pages.yml to the root. Copy content/opportunities.json into the content directory. Enable hidden files in your file manager to see .pages.yml. Uploading just these six files preserves later CMS edits to other sections.

Commit and push the files to the branch used by GitHub Pages. If you upload through GitHub’s web interface, choose Commit changes. Check the Pages deployment in Actions. Once it succeeds, reload the public site and open Opportunities.

# Edit the content

Open Pages CMS and select amskrishna/amskrishna.github.io and the branch that publishes your site. Choose Announcements to edit homepage notices. When two or more notices are visible, readers can move between them or pause automatic scrolling.

Choose Opportunities → Open roles and add an item. Enter a title and any applicable project details, eligibility, deadline, or application link. Enable Show on website and save. To withdraw the listing, disable Show on website and save.

CMS saves update JSON files in the repository. The public site reads them on each visit. If an edit is missing, confirm that the CMS and Pages use the same branch and that its latest deployment succeeded. Opening index.html directly from this ZIP shows the bundled snapshot.

# Enable visitor statistics

For an existing installation of the clean website, upload site.js and .pages.yml to the repository root and commit them. In Pages CMS, open Profile & contact, enter the Measurement ID from your Google Analytics 4 web stream and save. The public website loads the tag after that change deploys. Leave the field empty to disable collection.

In the web stream's Enhanced measurement settings, enable page views on browser history changes to measure section navigation. Open your public website, visit Research and Publications, then check the Realtime report in Google Analytics. Use page title or page path with query string to distinguish sections.
