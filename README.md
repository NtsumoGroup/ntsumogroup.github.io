# Ntsumo website refresh

Static website for GitHub Pages (`ntsumogroup.github.io`). No build step is required.

## What's changed
- Repositioned Ntsumo as a remote-first small-business digital services and automation business for South Africa and Zimbabwe.
- Reworked the homepage around websites, booking/enquiry workflows and ongoing support.
- Added introductory USD package pricing with scope and third-party-cost caveats.
- Added a clearer quote form, WhatsApp contact CTA, service detail pages and a consistent visual system.
- Removed references to image files that were not included in the uploaded source archive.
- Updated privacy/terms copy and responsive styling.

## Before publishing — important
1. **Connect the enquiry form.** In `contact/index.html`, replace `{{FORMSPREE_ID}}` with your real Formspree form ID, or configure another form service. Until you do this, the form deliberately shows a message directing visitors to WhatsApp/email.
2. **Verify contact details.** Confirm `sibisifrank3@gmail.com` and WhatsApp number `27614979449` are the contact details you want published. They were retained from the supplied site.
3. **Review prices and payment methods.** The USD prices are proposed introductory test prices, not market-verified rates. Confirm your preferred payment method, currency and cross-border requirements before publishing/accepting work.
4. **Review legal copy.** Privacy and terms pages are a practical starting point, not legal advice. Ask a qualified adviser to review them for your actual data flows and cross-border business structure.
5. **Check existing assets.** The ZIP provided did not contain the `/img/` directory referenced by the previous site. This version avoids those missing local image paths.

## Publish to GitHub Pages
1. Download and extract this ZIP.
2. Open the extracted `ntsumogroup.github.io` folder.
3. Review the changes locally with `python3 -m http.server 8000` from that folder, then open `http://localhost:8000`.
4. Commit and push the contents of that folder to the root of the `ntsumogroup.github.io` repository. Keep a backup or branch of the current live version first.
5. Check the live homepage, `/services/`, `/contact/`, mobile layout, and contact links after deployment.

## Current limitations
- This is a static website; it does not itself create booking calendars or send WhatsApp/SMS messages.
- Actual booking, messaging, hosting and automation functionality depends on the selected third-party tools and configuration.
- No new client testimonials or results have been invented.
