# Alen Relatić — Professional Portfolio (V4 review draft)

A lightweight, responsive, English-language portfolio for hiring teams, with detailed case studies in Digital Operations, QA, AI-assisted workflows and e-commerce systems.

## Public pages

- Portfolio: https://supportsnappyfy.github.io/alen-relatic-portfolio/
- Snappyfy archived system case study: https://supportsnappyfy.github.io/alen-relatic-portfolio/snappyfy-system.html
- Snappyfy read-only webshop demonstration (separate Snappyfy deployment): https://business-clarity-suite.lovable.app/store
- Klarwerk system walk-through: https://supportsnappyfy.github.io/alen-relatic-portfolio/klarwerk-system.html
- Klarwerk live store: https://payhip.com/klarwerkdigitalstudio
- LinkedIn: https://www.linkedin.com/in/alen-relatic/

The URLs above refer to the **main** branch's live GitHub Pages build. This V4 branch is a proposal and does not affect the live site unless merged.

## Stack and structure

- HTML, CSS, vanilla JavaScript; no client analytics or tracking packages.
- `index.html`, `styles.css`, `script.js`: portfolio homepage.
- `snappyfy-system.html`, `system.css`: Snappyfy system walkthrough.
- `assets/command-center.png`, `product-discovery.png`, `marketing-hub.png`, `shopify-analytics.png`: four original historical UI screenshots.
- `assets/alen-portrait.png`, `favicon.svg`: visual assets.

## Evidence standard

- The Snappyfy e-commerce experiment **closed in 2026**. Its old admin integrations must not be presented as live or commercially successful.
- Historical internal case-study records state **38 Shopify orders and €989.62 in revenue in Apr–Jun 2026**. These are internally reported, not independently audited and not a statement of profit or present business performance.
- The preserved private source includes Resend email flows, event/webhook handling and a dedicated Email Campaign Center with campaign calendar, logs, analytics, automation and retention views.
- Gemini 2.5 Flash appears in source for AI chat and seasonal email copy. Minimax Video-01, Kling 1.5, Runway Gen-3 Alpha Turbo and Luma Ray 2 Flash appear in a creative model router's configuration. **Model configuration is not evidence of actual production execution.**
- The author led requirements, architecture, prompt specifications, low-code implementation coordination, testing, debugging and operations; he does not claim to have hand-coded every function.

## Real screenshots still needed

Capture and manually redact **genuine historical** UI screenshots for:
1. Email Campaign Center: tabs, automation and send logs.
2. PM Hub: sprint, tasks and owners.
3. Executive / Profit Truth: finance reconciliation without account data.
4. AI Support: ticket handling and escalation.

Strip customer emails, names, order IDs, account/pixel IDs, addresses, credentials, internal links, tokens and confidential business identifiers. Do not add screenshots of Secrets, Users or private account pages. Do **not** present generated mockups as authentic backoffice screenshots.

## Maintenance

Edit relevant HTML/CSS, review on desktop and mobile, and merge reviewed changes to `main` to update GitHub Pages. Keep the private Snappyfy source repository private and credentials out of this portfolio. Confirm each metrics claim against primary historical records before publishing new numeric results.

Source basis for the V4 draft: read-only review on November 5, 2026 of the historical private project repository's `docs/portfolio/architecture.md`, `docs/portfolio/case-study.md`, `src/pages/EmailCampaignCenter.tsx`, `supabase/functions/resend-webhook/index.ts`, `send-seasonal-email-campaign/index.ts`, `ai-command-chat/index.ts`, and `creative-model-router/index.ts`.
