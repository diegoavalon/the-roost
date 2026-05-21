# PRD — Roost Academy v1: The Books (SAT Reading & Writing)

> Generated from the resolved brief and grill-me stress-test. Roost is a real-world venture, so the standard software PRD template is adapted: "modules" = the buildable components of the offering, "testing" = how each component gets validated before/during cohort 1. No issue tracker is connected; this is a document to paste into a tracker or hand off when one exists. Suggested triage label equivalent: ready-to-build.

## Problem Statement

A parent (or student) believes a meaningful SAT Reading & Writing score gain requires either an expensive tutoring service ($1500+) or grinding alone through free resources with no structure, no accountability, and no measurement. They don't want mastery of the whole test — they want the part of R&W that's holding the score down, lifted, in a bounded amount of time, with proof it worked. Existing options force a choice between unaffordable and unstructured.

## Solution

A 6-week, small-group (max 8) SAT R&W cohort priced at $200, built on the First-20-Hours / Pareto principle: teach only the highest-yield R&W skills, hard. Students work original printable worksheets, scan a QR code to a Google Form that auto-grades and returns per-question explanations, and track their trajectory in a per-student dashboard. The foothold is measured against an official College Board practice test taken in Bluebook at week 0 and week 6 — score moves or the fee is refunded. The instructor is the founder's daughter (720 R&W as a freshman, current Khan Academy tutor); the curriculum is authored by the founder (a college professor). Lifetime access to a reference library and an alumni Discord is bundled.

## User Stories

**Prospective student / parent (pre-enrollment)**

1. As a parent, I want to understand in one glance what my kid will gain and by when, so that I can decide whether $200 is worth it.
2. As a parent, I want to see who is teaching and why they're credible, so that I can trust a low price isn't low quality.
3. As a parent, I want a guarantee tied to a real outcome, so that the decision feels low-risk.
4. As a parent, I want to know the time commitment, so that I can fit it around my kid's schedule.
5. As a parent, I want a clear way to enroll or join a waitlist, so that I don't lose interest between intent and action.
6. As a student, I want to know what the sessions are actually like, so that I know what I'm signing up for.

**Enrolled student (during cohort)** 7. As a student, I want a diagnostic at the start, so that I know my baseline and what to focus on. 8. As a student, I want printable worksheets focused on the skills I'm weakest at, so that my practice time is well spent. 9. As a student, I want to scan a QR code and enter my answers quickly, so that grading isn't a chore. 10. As a student, I want to see which questions I got wrong and why, so that I actually learn from each worksheet. 11. As a student, I want a dashboard showing my trend over time, so that I can see progress and stay motivated. 12. As a student, I want weekly live sessions, so that I can ask questions and get the reasoning explained by a real person. 13. As a student, I want optional pre-work before sessions, so that I can come prepared without being penalized if I don't. 14. As a student, I want a final practice test in the same format as the real SAT, so that my measured gain reflects real test conditions.

**Enrolled student (post-cohort / continuation)** 15. As a graduate, I want lifetime access to the reference library, so that I can review concepts after the cohort ends. 16. As a graduate, I want access to an alumni Discord, so that I can ask follow-up questions and stay connected. 17. As a graduate, I want my tracker to persist, so that I can keep practicing toward my goal.

**Instructor (daughter)** 18. As the instructor, I want ready-made curriculum and worksheets, so that I deliver content rather than author it. 19. As the instructor, I want my own tutoring page, so that I have a credential and an identity within Roost. 20. As the instructor, I want a per-student dashboard, so that I can see who's struggling and where, before each session. 21. As the instructor, I want session content prepared in advance, so that I can focus on teaching, not prep. 22. As the instructor, I want a manageable group size, so that I can give each student attention.

**Founder (curriculum author / owner)** 23. As the founder, I want a clonable Google Form template, so that building each worksheet's grading is fast and consistent. 24. As the founder, I want all submission data flowing into Sheets, so that I have aggregate evidence the program works. 25. As the founder, I want worksheet performance + score-lift captured automatically, so that I have a built-in testimonial and case-study engine. 26. As the founder, I want a curriculum architecture before authoring content, so that I build in the right order and don't waste effort. 27. As the founder, I want to author only the highest-yield skills for cohort 1, so that a skinny v1 is achievable solo within the 4-month window. 28. As the founder, I want to validate demand with circle-1 conversations before authoring 20 worksheets, so that I don't build into a vacuum. 29. As the founder, I want the landing page to function as a credibility scaffold (not a conversion engine) for v1, so that it converts warm referrals without requiring paid-traffic optimization. 30. As the founder, I want parent communication routed through me, so that the minor instructor is protected and trust is held by the adult. 31. As the founder, I want all content sourced legally (no CB Question Bank in worksheets), so that the venture isn't exposed to IP enforcement.

## Implementation Decisions

**Components to build (the "modules" of the offering):**

1. **Curriculum architecture** — the skill map and lesson sequence for the highest-yield R&W skills (command of evidence, words in context, conventions). Built _before_ any worksheet content. Defines what cohort 1 covers; cohort 2 expands based on observed misses. This is the deepest, most reusable module — it rarely changes and everything else depends on it.

2. **Worksheet engine** — a repeatable production pattern: original passage (public domain or founder-written) + original SAT-style questions + answer key + per-question explanations written for a teenage reader. One worksheet per topic, printable PDF. The production _pattern_ is the module; individual worksheets are instances of it.

3. **Grading + data pipeline (off-the-shelf, v1)** — one polished Google Form template, cloned per worksheet, each reachable by a unique QR code on its worksheet. Forms answer-key auto-grades on submit and returns per-question correctness. Submissions flow to Google Sheets; per-student dashboards show trend and weak areas. Native build explicitly deferred until after cohort 2 reveals real friction.

4. **Foothold measurement** — official CB practice test taken by the student in Bluebook at week 0 (diagnostic) and week 6 (final). Score read from the student's own report. Never reproduced, never repackaged — this is the legal boundary. Worksheet trajectory is the in-program signal; the Bluebook delta is the headline outcome.

5. **Live cohort delivery** — weekly ~90-min Zoom sessions, max 8 students, 6 weeks. Daughter instructs from prepared content; founder observes early sessions and refines curriculum from what surfaces.

6. **Continuation tools** — reference library (daughter-recorded concept explainers + worked solutions, scoped to what's taught) and a templated Sheets tracker. Bundled lifetime with the fee.

7. **Community** — Discord, alumni-only, bundled lifetime. Single `#general` + `#the-books` at launch. Founder personally active early; appoint captains as alumni grow.

8. **Daughter's tutoring page** — her own page presenting her as instructor (720 R&W, Khan tutor). Within Position A: contributor, not co-founder.

9. **Landing page** — credibility scaffold for v1: promise, proof, guarantee, how-it-works, single CTA + cohort-2 waitlist. Not optimized for cold conversion.

**Key decisions locked:**

- **Pareto applied twice** — to the track (R&W only, math deferred) and to cohort 1's scope (highest-yield skills only).
- **Tech: off-the-shelf for v1.** Google Forms + Sheets + PDF. Founder is an engineer; native deferred for velocity.
- **Content sourcing: original only.** CB Question Bank cannot be used to build worksheets (license is classroom/internal-reporting only; no reproduce/modify/post-online/AI use; reproduction in commercial test-prep settings prohibited). Passages = public domain + founder-written; questions = original, calibrated to mirror SAT style; CB practice tests = student-taken in Bluebook only. AI assistance permissible for original content _only because no CB material is fed in_.
- **Pricing: $200 flat**, lifetime library + Discord included. Community-service framing.
- **Guarantee: refund if no score movement**, conditional on 5/6 attendance + all practice work completed.
- **Brand: Position A** — solo founder, daughter as named contributor-instructor with her own page; parent comms route through founder.
- **Acquisition: network-first**, no paid until cohort 2. Circle 1 primary (4–5 seats), circle 2 fallback. Respect Khan ToS — peer-tutor referrals only, no student poaching.

## Messaging & Positioning (copy source)

> This section is the customer-facing substance the landing-page copy draws from. It is the only outward-facing part of this document; everything else above and below is internal. When copy is written, it is re-derived from these four elements — not summarized from the rest of the PRD.

**The promise (lead):** A measurable lift in your SAT Reading & Writing score in 6 weeks — not mastery of the whole test, just the part that's holding your score down, taught hard.

**The proof (credibility):** Taught by a student who scored 720 on R&W as a freshman and tutors for Khan Academy, with a curriculum built by a college professor. Small groups of 8.

**The guarantee (de-risk):** Your score moves against a real College Board practice test, or your money back. (Conditions: attend 5 of 6 sessions, complete the practice work.)

**The difference (why not free/why not $1500):** Original, engineered practice — not recycled free questions — plus live teaching and a dashboard that shows your progress. Lifetime access to the library and alumni community included.

**Suggested page order:** Promise → Proof → Guarantee → How it works (6 weeks, small group, real practice + real measurement) → Single CTA (join cohort 1 / cohort-2 waitlist).

**Trademark guardrails (must ride along into copy — this is where the legal line gets crossed by accident):**

- ✅ Allowed: "SAT Reading & Writing prep" (nominative reference — truthful description of what the service prepares for).
- ❌ Forbidden: "Official SAT prep," any College Board / SAT logo or acorn mark, any phrasing implying CB endorsement, sponsorship, affiliation, or partnership.
- Confirm with a lawyer before money changes hands.

## Validation Decisions (the "testing" of the offering)

A good validation here tests the _outcome and the loop_, not the internal mechanics — does the student's score move, and does the production/grading loop hold up under a real user.

1. **Pilot worksheet, end-to-end.** Before authoring the full set, build ONE worksheet through the entire loop (PDF → QR → Form → auto-grade → explanation → Sheets row → dashboard). Daughter tests it on a friend. Validates the whole pipeline on one instance before scaling. Highest-priority test.
2. **Demand validation.** A few real circle-1 parent conversations before authoring 20 worksheets. Tests the promise lands before the build cost is sunk.
3. **Question calibration check.** Have the daughter (who knows the test cold) review a sample of original questions against released CB style for difficulty and wrong-answer construction. Tests that homemade questions actually mirror the test, not generic comprehension.
4. **Foothold realism check.** Confirm the diagnostic and final are administered timed and digital in Bluebook, so the measured gain reflects real test conditions rather than untimed paper practice.
5. **QR→Form friction measurement.** Track per-worksheet dropoff in cohort 1 — the ~5-min "type paper answers into phone" tax. Tells you whether native build is justified for cohort 2.
6. **Instructor-fit check (the load-bearing one).** Retro with the daughter after cohort 1: did she like it, was it sustainable, does she want cohort 2. The v1 thesis fails if this is no, regardless of enrollment.

## Out of Scope (v1)

- **SAT Math** — deferred until the daughter's math prep is ready.
- **Native grading platform** — Google Forms + Sheets until cohort 2 proves the model.
- **Paid acquisition** — network-first; paid starts at cohort 2.
- **The Mat, The Gym, The Kitchen** — sequenced after Books; The Mat is the next launch post-ankle-recovery (the 4-month window doubles as its prep runway).
- **Comprehensive R&W coverage** — only highest-yield skills in cohort 1.
- **Cohort-2 expansion features** — driven by cohort-1 data, not pre-built.
- **Per-track Discord channels beyond #general + #the-books** — added as tracks launch.
- **"The Garden" as a 5th track** — candidate only.

## Further Notes

- **Founder is the bottleneck**, building solo while injured. Curriculum lift estimated ~75–125 hrs for a full cohort; the skinny-v1 decision (highest-yield skills only) is the mitigation. Open risk: whether even the skinny v1 fits the 4-month window or slips past it.
- **Daughter's willingness is load-bearing and she is a minor** — her continued interest is a real dependency, and her comfort (age band she'll teach, being publicly named as instructor) governs, not the strategy.
- **The 4-month ankle window** is the launch runway for Books _and_ the prep runway for The Mat — both can advance in parallel toward a Books launch around month 4–5.
- **Suggested build order:** (1) validate demand, (2) curriculum architecture + Form template + one pilot worksheet, (3) author skinny curriculum, (4) stand up tutoring page / Discord / landing page / tracker, (5) legal check before enrollment.
- **Open questions still live:** curriculum timeline realism; how much practice needs timed/digital delivery; QR→Form friction; daughter's student age band; trademark language confirmation; The Garden decision; The Mat re-launch shape; when to build native grading / start paid acquisition / appoint Discord captains.
