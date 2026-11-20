# Additional portfolio case studies — editorial draft, not a release

**Status:** Internal source draft for the existing portfolio, 18 November 2026. Not linked from the public homepages. Do not merge or publish until source status, localization, asset permission and mobile QA are confirmed. The earlier PR #7 is closed unmerged and is not a release candidate. The separate 10 November preview ref is unavailable; preserve any local work rather than assuming it is lost or published.

## 03 — Career OS / Evidence-based career operations

**EN — A portfolio with an operating process behind it**

- **Challenge:** A static portfolio ages quickly. A candidate needs evidence that can be reviewed, updated and traced rather than a generic list of skills.
- **Contribution:** Defined a versioned portfolio workflow using a GitHub repository, scoped change branches, reviewable pull requests, responsive checks and a public Pages release. Structured project evidence with clear distinctions between implementation and results.
- **Workflow:** Evidence review → scoped change → branch/PR → responsive browser QA → verified release.
- **Verified status:** The portfolio is publicly available in EN/DE/HR with two case studies; prior PRs and review checks are documented. A current localization/CTA improvement is only a draft. LinkedIn content automation is a proposed extension, not an active autonomous publishing pipeline.
- **Takeaway:** Small reviewable changes and clear test evidence make maintenance easier and reduce ambiguity.

**DE — Ein Portfolio mit einem nachvollziehbaren Veröffentlichungsprozess.** Projektbelege werden strukturiert, Änderungen in separaten Branches geprüft und erst nach dokumentierter QA veröffentlicht. EN, DE und HR sind verfügbar. Automatisierte LinkedIn-Veröffentlichungen sind geplant, nicht als laufend nachgewiesen.

**HR — Portfolio kao provjerljiv proces izdavanja.** Dokazi o radu se strukturiraju, izmjene prolaze zasebnu razvojnu granu, reviziju i provjeru responzivnosti prije objave. EN, DE i HR dostupni su javno. Automatizirane LinkedIn objave ostaju planirana mogućnost.

## 04 — Finance OS / Integration prototype

**EN — A traceable data workflow for account reporting**

- **Challenge:** Financial records from multiple authorized sources require a consistent data model, traceable imports and clear exceptions to support reliable reporting.
- **Contribution:** Defined the data structure, authorized source-to-import workflow, Apps Script processing, spreadsheet reporting and QA boundaries. An initial API authorization and technical import check were performed; that does not establish reliable continuous synchronization for every source.
- **Illustrative workflow:** Authorized source → ingestion and validation → normalized transaction records → categorization → dashboard → reconciliation and exceptions.
- **Verified status:** Prototype with tested integration steps. Remaining source imports, reconciliation and production reliability must be independently validated before claiming complete automation.
- **Takeaway:** Treat authorization, successful import, reconciliation and stable scheduled execution as separate acceptance gates.

**DE — Ein nachvollziehbarer Datenfluss für Finanzberichte.** Ein autorisierter Datenimport, Normalisierung, Kategorisierung und Abstimmung bilden die Grundlage eines Prototyps in Apps Script und Google Sheets. Erste technische Schritte sind geprüft; eine durchgängig stabile Synchronisation aller Quellen ist noch nicht nachgewiesen.

**HR — Provjerljiv tijek podataka za financijske izvještaje.** Prototip povezuje autorizirani uvoz, normalizaciju, kategorizaciju i usklađivanje putem Apps Scripta i Google Sheetsa. Početni tehnički koraci su testirani, ali nije potvrđena potpuna stabilna sinkronizacija svih izvora.

**Privacy:** Public material must use synthetic examples only. No provider/account identifiers, bank balances, real transactions, household costs, credentials, keys, tokens, financial documents or screenshot of an actual account. No investment, financial or regulatory advice.

## 05 — HLPM / HelpMM — Structured reflection R&D

**EN — Turning unstructured notes into testable observations**

- **Challenge:** Chronological notes become hard to compare when dates, context and interpretation are mixed.
- **Contribution:** Proposed a model that stores dated observations, separates context and hypotheses, and compares later outcomes against earlier observations.
- **Illustrative workflow:** Anonymized event → timestamp and category → observation → hypothesis → later outcome → retrospective correction.
- **Verified status:** R&D methodology and structured reflection model. A standalone product or reliable predictive capability has not been validated. AI-assisted summaries are a tool, not proof of predictions.
- **Takeaway:** Separate observations from interpretations and make evaluation criteria explicit before drawing conclusions.

**DE — Strukturierte Reflexion als Forschungsprototyp.** Beobachtungen, Kontext, Hypothesen und spätere Ergebnisse werden getrennt erfasst. Die Methode dient einer nachvollziehbaren Auswertung; ein eigenständiges Produkt oder zuverlässige Vorhersagen sind nicht validiert.

**HR — Strukturirana refleksija kao istraživački prototip.** Zapažanja, kontekst, hipoteze i kasniji ishodi vode se odvojeno radi transparentne analize. Metodologija nije dovršena zasebna aplikacija niti dokaz pouzdanog predviđanja.

**Privacy:** Do not include private journals, individual health/family information, individual assessments, birth data or personal events. Illustrative fictional data only. No clinical or predictive claims.

## Release acceptance checklist

- [ ] Revalidate scope and status against current project sources, not archived PR text.
- [ ] Build standalone cases using the existing main portfolio style, with correct headings, navigation, accessibility and language assets.
- [ ] Verify all new claims, labels, diagram nodes and brand assets; use only public or synthetic artifacts.
- [ ] Test each new page and EN/DE/HR homepage at 320/390/768/1440 px, including links, keyboard navigation, JS errors, images and overflow.
- [ ] Confirm privacy boundary without opening or embedding live personal data.
- [ ] Separate changes into a new reviewable candidate; never merge an obsolete preview or bypass QA.

Historical sources: closed PR #7; merged PR #8–11; current public portfolio. The CTA correction is separate draft PR #12. No customer or business outcomes are asserted by these drafts.
