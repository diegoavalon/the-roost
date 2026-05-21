# Roost Academy

_20 hours to a foothold. Tools for the climb._

> **Status:** v1 scope resolved via stress-test (grill-me). Launch track is **The Books — SAT Reading & Writing**. Other tracks sequenced behind it. Most foundational decisions are now [confirmed]; remaining unknowns are flagged in Open Questions.

## Problem [assumed]

People know they should be healthier, stronger, more capable, more self-sufficient — but two things stop them. First, the path looks like _mastery_, and mastery looks unaffordable in time, money, and identity. Second, when they do start, the advice is fragmented and optimizes for completeness over impact. Most people either don't start or quit before the curve bends.

The wedge: the **first ~20 focused hours** of any skill, properly chosen and properly taught, deliver most of the practical benefit. You don't need to be a wrestler to defend yourself. You don't need a nutritionist to drop 20 lbs and fix your blood pressure. You don't need to ace the whole SAT to lift your score on the part that's holding it down. You need someone to pick the 20% that matters, walk you through it to a real win, then hand you tools for the climb after.

## Users [confirmed]

**Primary — youth and their families.** The Books launch targets high-school students (working range 8th–12th grade) and the parents who buy for them. Across the wider Academy, youth-first with adults welcomed.

**Secondary — adults seeking real, fast wins.** People who want a health reset, a self-defense weekend, staple crops in the ground, or to help a kid in their life. The 20-hour framework is their front door and may be their whole experience.

## Success criteria [assumed]

A user, inside ~20 hours of guided work in any track, hits a concrete, measurable foothold. After the foothold they have tools to continue if they choose. Roost wins when a meaningful share of users get the first win — the win is what converts a person from consumer to practitioner.

For the v1 track specifically: a student lifts their **SAT R&W practice score** measurably over a 6-week cohort, verified against an official College Board practice test. A secondary, equally important success criterion: **the daughter-instructor finishes cohort 1 wanting to run cohort 2.** If the role doesn't work for her, the v1 thesis fails regardless of enrollment.

## Methodology [confirmed]

Roost applies **Josh Kaufman's "The First 20 Hours"** framework across life skills. Every track follows the same shape:

1. **Deconstruct** — identify the highest-leverage 20% of the domain.
2. **Guide ~20 focused hours** of practice on that subset.
3. **Deliver a foothold** — a concrete, measurable win.
4. **Hand over tools** for continuation if the user wants to keep climbing.

Pareto as a product: pick the 20% that pays the rent, teach it hard, make mastery optional. Kaufman's framework is credited and extended (curated subsets per domain, integration across domains, lived application, continuation tools), not claimed as original.

## Delivery model [confirmed]

**Hybrid, flexed per track to serve the learning outcome — "workshop where it counts."** Hands-on/live components for depth; digital library + tools for reference, missed details, and the climb. Workshop-centric tracks (e.g. The Mat) lean in-person; protocol/skill tracks (e.g. The Gym, The Books) lean digital with live sessions as the anchor.

Standard journey shape: **pre-work (digital, optional) → live session(s) → foothold check → digital reference + continuation tools (ongoing).** Pre-work is recommended but not gated.

## v1 Scope — The Books (SAT Reading & Writing) [confirmed]

**Why The Books leads, despite being ranked 4th originally:** the founder's ankle injury (~4-month recovery) removed the physical tracks from near-term play, and The Books carries a rare authority pairing — a college-professor curriculum author and a daughter who scored 720 on R&W as a freshman and currently tutors for Khan Academy. The track is digital-primary, which fits an injured founder, and the family-instructor structure is unique in the test-prep market.

| Decision                      | v1 answer                                                                                                                                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Section**                   | Reading & Writing **only**. Math deferred (still developing). Pareto applied to the track itself.                                                                                                                    |
| **Skill coverage (cohort 1)** | **Highest-yield R&W skills only** (e.g. command of evidence, words in context, conventions). Expand coverage in cohort 2 based on what cohort 1's data shows students miss. _(Authoring lever = skinnier v1.)_       |
| **Cohort**                    | 6 weeks, weekly ~90-min live sessions, **8 students max**, Zoom for v1.                                                                                                                                              |
| **Price**                     | **$200 flat** for the program. Includes lifetime Discord access + reference library. Community-service framing.                                                                                                      |
| **Foothold**                  | **Measured** — R&W practice-score lift, week 0 vs. week 6, against an official CB practice test taken by the student in Bluebook.                                                                                    |
| **Guarantee**                 | Refund if no score movement, conditional on attendance (5 of 6 sessions) + completion of all practice work.                                                                                                          |
| **Roles**                     | **Founder:** solo owner + curriculum author. **Daughter:** contributor-instructor, delivers content from her learned experience, gets her own tutoring page. Teacher only — not co-founder, not behind parent comms. |
| **Capture point**             | Worksheet performance data + score-lift = built-in testimonial/case-study engine.                                                                                                                                    |

### Curriculum & grading system [confirmed]

The **curriculum is the biggest lift and the core product** — not small-group access. The system:

- **Worksheets** — printable PDFs, one per topic. Student works on paper.
- **QR → Google Form** — each worksheet has a QR to a unique Form for answer entry.
- **Auto-grading** — Google Forms answer key grades on submit; per-question correctness returned.
- **Data → Google Sheets** — every submission is a row; per-student dashboards show trend and weak areas.
- **Explanations** — per-question rationale, written for a teenage reader.

**Tech stack: off-the-shelf for v1** (Google Forms + Sheets + PDF). Native build deferred until after cohort 2 proves the model and reveals real friction. Founder is a software engineer; native is feasible later but velocity and time-to-market win now.

### Content sourcing — LEGAL CONSTRAINT [confirmed]

**College Board Question Bank content CANNOT be used to build worksheets.** CB's terms explicitly forbid it: the Question Bank license is "classroom teaching and internal reporting only," with no right to reproduce, modify, post online, or use with AI; reproduction of SAT materials in commercial/test-prep settings is prohibited; even free practice tests may not be repackaged into one's own handouts. This was the original plan and it is **off the table.**

**Approved sourcing model:**

| Component                        | Source                                                                                                                                                   | Status |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Passages                         | Public domain (pre-1929 lit, gov docs, classic essays) + founder-written                                                                                 | Clean  |
| Questions                        | Original, authored by founder/daughter, calibrated to mirror SAT _style & difficulty_ (formats/skills aren't copyrightable; CB's specific questions are) | Clean  |
| Conventions drills               | Original (rules, not CB property)                                                                                                                        | Clean  |
| Diagnostic & final foothold test | Official CB practice test, taken by student in **Bluebook**, exactly as CB permits — never repackaged                                                    | Clean  |
| Calibration                      | _Study_ released CB questions to learn the test's style; never copy                                                                                      | Clean  |

This is more authoring effort but yields a cleaner, more defensible, more differentiated product — original practice is a moat where reselling free CB content would have made Roost a commodity. AI assistance is permissible for original content **only because no CB material is fed into it.**

## Acquisition — cohort 1 [confirmed]

**Network-first. No paid acquisition until cohort 2.** Concentric circles:

1. **Circle 1 (primary, target 4–5 seats):** founder's + daughter's direct network — classmates, colleagues' kids, neighbors, community. Personal asks.
2. **Circle 2 (fallback, ready):** friends-of-friends; one well-written "share if you know someone" ask per contact.
3. **Circle 3 (test, 0–1 seats):** a single organic post in local Dallas parent channels. No ads.

Rationale: network gives honest feedback + dense testimonials that fund cohort 2's paid acquisition. Caveat: respect Khan Academy ToS — daughter does **not** poach Khan students; her _peer tutor network_ (not students) is a fair referral source.

**Cohort 1 success looks like:** 6–8 enrolled (don't run below 5), 5+ complete, 4+ show measurable score lift, 3+ written testimonials with numbers, 2+ referrals for cohort 2, and the daughter wants to continue.

## Continuation tools — "tools for the climb" [confirmed]

Bundled lifetime with the program fee:

- **Reference library** — recorded concept explainers (daughter on video) + worked solutions. Scoped to what's taught, not comprehensive.
- **Trackers** — score-lift / practice dashboard. Templated (Sheets) for v1, native later if justified.
- **Community** — **Discord, in v1.** Alumni-only (must complete a program to join). Founder personally active early. Single `#general` + `#the-books` at launch; per-track channels added as tracks launch. Light moderation; appoint captains as alumni grow. Lifetime access bundled, no separate subscription.

## Pricing philosophy [confirmed]

Everything paid, low-cost, community-service framed (~$40 workshop band; $200 for the 6-week Books cohort). Founder decides when to comp. Not a freemium funnel — low-friction pay-what-keeps-the-lights-on, with proximity to the founder/instructor as the real value.

## The full track roadmap [confirmed sequence]

Naming convention: "**The [Place]**" — a room the user walks into.

| Track           | Refined description                      | Example 20-hr wins                                                      | Sequence                                            |
| --------------- | ---------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| **The Books**   | Academics & the college path (R&W first) | SAT R&W score lift; targeted prep                                       | **v1 — launching**                                  |
| **The Mat**     | Wrestling, self-defense & character      | Self-defense fundamentals workshop; technique clusters                  | **2nd — post-recovery** (4-mo window = prep runway) |
| **The Gym**     | Strength, conditioning & weight class    | 30/60-day reset (weight↓, BP↓, sleep↑, energy↑) — founder's lived story | 3rd                                                 |
| **The Kitchen** | Fueling, meal planning & home food       | Repeatable meal plan; Three Sisters planted & producing                 | 4th (seasonal/logistics complexity)                 |

```typescript
export const TRACKS: NavLink[] = [
  {
    label: "The Books",
    href: "/tracks/the-books",
    description: "Academics & The College Path",
  },
  {
    label: "The Mat",
    href: "/tracks/the-mat",
    description: "Wrestling, Self-Defense & Character",
  },
  {
    label: "The Gym",
    href: "/tracks/the-gym",
    description: "Strength, Conditioning & Weight Class",
  },
  {
    label: "The Kitchen",
    href: "/tracks/the-kitchen",
    description: "Fueling, Meal Planning & Home Food",
  },
];
```

_Note: order above reflects launch sequence; original site order may differ. "The Garden" remains a candidate 5th track if homesteading grows past food._

## Core business value, ranked [confirmed]

1. **Pareto wins, not mastery.** ~20 hours to a real, measurable foothold. Concrete, achievable, contrary to the mastery-or-nothing trap.
2. **The wins compound across tracks.** Nutrition supports fitness supports the mat supports school. Integration, sharpened by Pareto.
3. **A path walked, not theorized.** Lived examples behind every track — BP fixed via 20 lbs/walking/sleep; a 720 R&W scorer teaching R&W; Three Sisters grown and eaten.
4. **Character through follow-through.** Choosing 20 focused hours and finishing them _is_ the character work. Explicit in youth tracks; the quiet engine everywhere.

## Positioning lines [confirmed]

> **20 hours to a foothold. Tools for the climb.**
>
> **Roost Academy picks the 20% of school, wrestling, fitness, and food that pays the rent — and teaches that, hard.**

## Brand presentation [confirmed]

**Position A — solo founder with contributors.** Roost is the founder's. The daughter is a named contributor-instructor with her own tutoring page, presented as a teacher, not a co-founder. Parent communication routes through the founder. (Position B, "explicit family operation," was considered and declined.)

## Constraints [confirmed/assumed]

- **CB content is off-limits for worksheets** [confirmed] — see sourcing table. The single hardest legal line in the plan.
- **"20 hours" / "score lift" is a promise** [confirmed] — if most users don't hit the foothold, the brand dies. Content must deliver inside the budget.
- **Founder is the bottleneck** [confirmed] — building solo, while injured. Curriculum lift ~75–125 hrs for a full cohort; skinnier v1 mitigates.
- **Daughter's willingness is load-bearing** [confirmed] — the v1 instructor is a minor and a volunteer-in-spirit; her continued interest is a real dependency.
- **Youth-safe + parent-trust** [assumed] — applies across tracks; less acute for The Books than physical tracks.

## Immediate next steps [confirmed]

1. **Validate demand cheaply** — a few real circle-1 parent conversations before authoring 20 worksheets.
2. **Build curriculum architecture before content** — lesson sequence, skill map, one polished Google Form template to clone, one end-to-end pilot worksheet daughter tests on a friend.
3. **Author skinny v1 curriculum** — highest-yield R&W skills only.
4. **Stand up the rest** — daughter's tutoring page, Discord (`#general` + `#the-books`), landing page (credibility scaffold, not conversion engine), trackers.
5. **Legal check before money changes hands** — brief consult on SAT nominative trademark use + original-content approach.

## Open questions [confirmed]

- **Curriculum timeline** — is even a skinny v1 (highest-yield skills) realistic solo in the 4-month window, or does launch slip past month 4?
- **Worksheet vs. real test conditions** — paper/untimed worksheets vs. the digital, adaptive, timed SAT. Mitigation: diagnostic + final in Bluebook (timed, digital). Is that enough realism, or do more worksheets need timed digital delivery?
- **QR→Form friction** — the ~5-min "type paper answers into phone" tax per worksheet. Measure dropoff in cohort 1.
- **Daughter's student age band** — open ("any age fine"); natural bound is 8th–12th. Confirm what she's comfortable teaching.
- **Trademark/marketing language** — "SAT R&W prep" (nominative, fine) vs. anything implying CB endorsement (not). Lawyer to confirm.
- **"The Garden" as 5th track** — decide before IA hardens.
- **The Mat re-launch** — does it split into 20-hr self-defense (foothold) + ongoing wrestling arc (graduation path)? Resolved in principle (graduate into the deeper plan) but product shape TBD.
- **Continuation past v1** — when/whether to build native grading; when to start paid acquisition; when to appoint first Discord captains.
