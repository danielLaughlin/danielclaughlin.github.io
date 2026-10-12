# Laughlin Research Lab website

A plain HTML/CSS site with no build step, ready for GitHub Pages.

## Files
- One `.html` file per page: `index.html` (Welcome), `people.html`, `publications.html`, `research.html`, `teaching.html`, `software.html`, `lab-openings.html`, `global-vegetation-project.html`.
- `site.js`: the shared header, menu, and footer. To add, rename, or reorder a menu item, edit the `MENU` list at the top.
- `style.css`: colors and layout. To change the accent color, edit `--accent` at the top.
- `images/`: put local photos here.

## Editing pages
Open a page's `.html` file and edit the text between the tags. To add a publication, copy any `<li>…</li>` line in `publications.html` and change it. Your name is bolded automatically in author lists.

## Important: images and audio still live on WordPress
Every photo, book cover, logo, and audio file currently loads from `https://plant-traits.net/wp-content/uploads/...`. They will break if the WordPress site is shut down. Before you cancel it:
1. Download each file (search the `.html` files for `wp-content/uploads` to find them all).
2. Put them in `images/` (or an `audio/` folder).
3. Replace each long URL with the local path, e.g. `images/IMG_1767.jpeg`.

Note: GitHub warns on files over 50 MB and blocks files over 100 MB. If the `.wav` recordings are large, convert them to `.mp3` first.

## Put it online with GitHub Pages
1. Create a free account at github.com.
2. Click **New repository**. Name it `yourusername.github.io` for a URL like `https://yourusername.github.io`, or any name for `https://yourusername.github.io/reponame`. Make it public.
3. Click **Add file → Upload files**, drag in everything in this folder, and click **Commit changes**.
4. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and click **Save**.
5. Your site will be live at the URL shown in a minute or two.

## Keeping the plant-traits.net address
In **Settings → Pages → Custom domain**, enter `plant-traits.net` and save. Then, at your domain registrar, point the domain to GitHub Pages following GitHub's guide ("Managing a custom domain for your GitHub Pages site"). Switch the DNS only after you've downloaded the WordPress images and audio.
