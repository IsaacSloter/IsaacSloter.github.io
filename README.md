# Isaac Sloter — Personal Portfolio

A static portfolio for gameplay and level-design work in Unreal Engine. The site uses HTML, CSS, and a small JavaScript file. No package installation, framework, or build command is required.

## File map

| File or folder | Purpose |
| --- | --- |
| `index.html` | Homepage and selected projects. |
| `projects/character-movement.html` | Character movement and animation case study. |
| `projects/tile-puzzle.html` | Puzzle mechanics and level-design case study. |
| `about.html` | Professional introduction and skills. |
| `resume.html` | Readable, printable project résumé. |
| `contact.html` | Professional contact information. |
| `styles.css` | Shared colors, typography, layout, responsive rules, and print styling. |
| `site.js` | Résumé printing and enlarged project-image dialogs. |
| `assets/` | Project screenshots and the favicon. |
| `404.html` | Missing-page response. |
| `sitemap.xml`, `robots.txt` | Search-engine discovery files. |
| `docs/content-sources.md` | Content sources, image provenance, and items to maintain. |

## Preview and edit

Open `index.html` in a browser for a quick local preview. Follow the navigation to check the other pages.

- **Text and links:** edit the relevant HTML file. Navigation and footer markup are repeated across pages, so update each copy when changing a shared destination.
- **Appearance:** edit `styles.css`. The `:root` variables near the beginning hold the shared color palette and maximum content width. Media queries control narrower layouts.
- **Images:** place the image in `assets/`, update its HTML path, and write useful alternative text and a caption. Keep an image's displayed width and height attributes consistent with the replacement file.
- **Image enlargement:** a link with `data-zoom` opens its image in a dialog. `data-caption` supplies the enlarged view's caption; the image's alternative text is the fallback.
- **Résumé printing:** the button marked `data-print-resume` opens the browser's print dialog. The print layout is defined in `styles.css`.
- **New projects:** add a dedicated HTML page under `projects/`, link it from the homepage, and update the sitemap. Use relative asset and navigation paths appropriate to that folder.

Check desktop and narrow-screen layouts after changes. Test navigation, contact links, image dialogs, and résumé printing. When changing the site's address, update the canonical URLs, sitemap URLs, and sitemap entry in `robots.txt` together.

## Publish with GitHub Pages

Use these settings when enabling GitHub Pages for this repository.

1. Commit the website files to the repository's `main` branch, with `index.html` in the repository root.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select **main** and **/(root)**, then select **Save**.
5. Check the Pages deployment result and open the published address shown in GitHub. Verify the homepage and both project pages.

Once branch publishing is enabled, changes pushed to `main` update the published site. The `docs/` folder holds documentation; it is not this site's publishing source.

Official reference: [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Content maintenance

- Add verified education, employment, and other credentials to the résumé when available. Keep the webpage and any future PDF consistent.
- Add Isaac's verified LinkedIn URL when supplied.
- Add edited gameplay videos or playable-project links when real destinations are available.
- Complete credits for the starting puzzle project and the depicted character and environment assets.
- Keep contact information current and project descriptions specific about Isaac's contributions.

See [content sources and image provenance](docs/content-sources.md) for the current source record.
