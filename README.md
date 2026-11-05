# Alen Relatić — Professional Portfolio V4 (review draft)

A lightweight, responsive, English-language portfolio for hiring teams.

## Stack

- Plain HTML + CSS + vanilla JavaScript
- No React build, database, API keys, tracking scripts, paid services, or package dependencies
- Suitable for GitHub Pages, Cloudflare Pages, Netlify, or any static file server

## Files

- `index.html` — content and section structure
- `styles.css` — design and responsive layout
- `script.js` — mobile menu, expandable case studies, current year
- `assets/favicon.svg` — favicon
- `snappyfy-system.html` + `system.css` — detailed historical case study
- `assets/command-center.png`, `product-discovery.png`, `marketing-hub.png`, `shopify-analytics.png` — four historical application screenshots
- `.nojekyll` — avoid Jekyll processing on GitHub Pages

## Publish to GitHub Pages (manual fallback)

1. Sign in to your **existing** GitHub account.
2. Create a new **public** repository, e.g. `alen-portfolio`. **Do not** reuse the Snappyfy production repository.
3. Upload the contents of this folder to the repository root (not the enclosing folder).
4. Go to **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. GitHub shows the public URL once the first deployment finishes. Do not assume the URL until GitHub reports it.
7. Open the URL on your phone, test all case-study expand buttons, check LinkedIn and email links, and add the final URL to LinkedIn's Featured section.

## Pre-publication checks

- Confirm name and spelling, public-facing email address, and exact target roles.
- Read the three case studies and confirm every claim. No unverified KPIs or proprietary implementation details are included.
- Confirm that content about prior employers respects confidentiality obligations.
- Confirm source code does not contain secrets before pushing to a public repo (this package has no known secrets).
- Keep future evidence screenshots free of customers' personally identifying data, sensitive business figures and API tokens.
- Portfolio graphics are **illustrative diagrams**, not screenshots of deployed production systems.

## Update workflow

Edit `index.html` text, commit the changes and GitHub Pages redeploys automatically. For an optional photo, add an authorized photo to `assets/` and update the HTML/CSS. Later, a custom domain can be attached through GitHub Pages settings and DNS.

## Source grounding

Content drafted from user-provided context, Google Drive career and case-study documents, plus a **read-only code review on 05 Nov 2026** of the linked private `supportsnappyfy/business-clarity-suite` GitHub repo and Lovable `Snappyfy 2.0` project. Reviewed key source files including `src/App.tsx`, `src/pages/BackofficeDashboard.tsx`, `src/pages/AICommandCenter.tsx`, `src/pages/ArchitectureMap.tsx`, and `src/pages/CaseStudy.tsx`; inspected the Supabase function directory list. This is **not** a code security audit or confirmation of production integrations. Historical internal performance estimates are not presented as proven outcomes.

**Security:** The private source repository contains a tracked `.env` file. Its content was not accessed or copied. Before ever making that source repository public, inspect it for secrets and rotate any exposed credentials as appropriate. The portfolio here is an independent, dependency-free, publishable package and includes no source credentials.

**Publishing limitation:** The connected GitHub tool can inspect and modify existing repositories but does not currently offer a create-repository action. A **separate public repo** has to be created by the account owner before uploading the files. Do NOT place portfolio files inside the existing private Snappyfy source repo; do not make the Snappyfy repo public.
## Evidence and next asset pass (November 2026)

- Resend is documented in the archived application for promotional/seasonal campaign sends, webhooks, transactional email paths, and the Email Campaign Center. Its integration is not asserted to be active today.
- The archived internal case-study document reports 38 Shopify orders and €989.62 revenue in April–June 2026. These are **historical, internally recorded, not independently audited**, and do not imply profitability.
- Gemini 2.5 Flash is referenced in the AI command chat and seasonal email source. Minimax, Kling, Runway, and Luma appear in a creative-router configuration; do not assert actual model execution without logs.
- Four original historical screenshots are published. Future genuine screenshots should cover Email Campaign Center, PM Hub, Profit Truth/Executive, and customer support. Capture these from the historical application only and redact customer details, account identifiers, tokens, dashboard URLs and other sensitive values.
- Never recreate an imaginary backoffice screenshot and present it as production evidence. Illustrative diagrams must be labeled.
