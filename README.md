# Ntsumo website

Static site for GitHub Pages (ntsumogroup.github.io). No build step needed.

## Before you publish: replace 3 placeholders
Search the folder for `{{` and replace:
- `{{EMAIL}}`         your business email (contact, privacy, terms pages)
- `{{WHATSAPP}}`     WhatsApp number, digits only with country code, e.g. 27XXXXXXXXX (contact page)
- `{{FORMSPREE_ID}}` the ID from a free form at formspree.io (contact page). If you use a different
                     form service, update the form action and the "Who processes it for us" line in /privacy/.

## Publish
1. In the repo ntsumogroup.github.io, keep the /img folder (portfolio and team photos are reused).
2. Delete the old template files (old index.html, css/, js/, vendor/, mail/ etc.) and copy this folder's
   contents into the repo root.
3. Commit and push. GitHub Pages updates in a minute or two.

## Google
1. Search Console: add the site, verify it, then submit /sitemap.xml.
2. Request indexing for the home page and /services/.
3. Custom domain (recommended): buy a domain, add a CNAME file to the repo root containing the domain,
   set the DNS records GitHub lists, tick "Enforce HTTPS", then find-and-replace
   https://ntsumogroup.github.io with your domain in every .html file, sitemap.xml and robots.txt.
4. Google Business Profile: create one if you want to appear in local searches.

## Preview locally
Paths start with "/", so preview through a server, not by double-clicking:
python3 -m http.server 8000   then open http://localhost:8000
