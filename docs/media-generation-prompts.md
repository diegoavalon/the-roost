# Roost Academy — Media Generation Prompts

> Image prompts for AI generation tools (Midjourney, Firefly, DALL-E, Replicate). Each prompt includes a **placement**, **prompt**, **negative prompt**, and **style notes**. All prompts are written for Midjourney v6 syntax but are portable to other tools.

---

## Brand Visual Language (apply to all images)

**Palette:** warm off-white backgrounds; deep charcoal or dark navy for subjects; amber/orange accents (not neon). Avoid pure white or pure black.
**Mood:** quiet confidence, focused effort, no triumphalism. Real people, not models.
**Photography style:** natural light, slight grain, editorial not commercial. Think NYT Magazine, not university brochure.
**Avoid in all images:** stock-photo smiles, pointing at screens, thumbs-up poses, fake diversity casting, lens flare, HDR tone-mapping, watermarks.

---

## 1. Homepage Hero

**Placement:** Full-width background or left-side split on the homepage hero section.

**Concept:** The "foothold" metaphor — the moment of first grip, not the summit. The image should communicate beginning, not arrival.

### Prompt A — Abstract/Conceptual

```
A single worn leather boot finding a foothold on a rough granite ledge, soft overcast light from above, warm shadow below, photorealistic, grain texture, close crop on just the boot and ledge, no sky, no climber visible, shallow depth of field, muted earth tones, editorial photography style --ar 16:9 --style raw
```

### Prompt B — Human/Metaphorical

```
Young person's hands gripping a wooden ladder rung, seen from slightly below, natural window light, unpretentious home setting, photorealistic, slight film grain, warm neutral tones, focused and calm expression partially visible, editorial photography, no studio lighting --ar 3:2 --style raw
```

**Negative prompt:** summit, celebration, trophy, neon, gym motivational poster, stock photo lighting

---

## 2. Homepage — "The Idea" Section

**Placement:** Optional supporting image beside or behind the "path looks endless" paragraph.

**Concept:** The sense of a long path that recedes — but with a visible near-term milestone.

### Prompt

```
A gravel path through open farmland, low morning light, long shadows, the path curves into the distance, a wooden fence post stands close in the foreground as a natural anchor point, no people, no signage, photorealistic, film grain, muted green and brown tones --ar 16:9 --style raw
```

---

## 3. Track Cards — The Books

**Placement:** Track card thumbnail for "The Books" section on the homepage.

**Concept:** A student reading, but grounded and purposeful — not decorative studying.

### Prompt

```
Teenage student, seated at a plain wooden table, reading a printed practice sheet, pencil in hand, natural afternoon window light from the side, photorealistic, film grain, no laptop or phone visible, no school branding, calm and focused expression, editorial style, shallow depth of field --ar 4:3 --style raw
```

**Negative prompt:** headphones, coffee, library shelves, motivational poster, group shot, SAT logo

---

## 4. Track Cards — The Mat

**Placement:** Track card thumbnail for "The Mat" on the homepage (coming-soon state).

**Concept:** Wrestling or grappling discipline — the grip, not the win.

### Prompt

```
Two young people in a wrestling grip, shot from above, a worn blue wrestling mat, natural gym lighting, photorealistic, grain texture, slightly desaturated, close crop on the hands and forearms showing grip, no face needed, sense of controlled effort not aggression --ar 4:3 --style raw
```

---

## 5. Track Cards — The Gym

**Placement:** Track card thumbnail for "The Gym" on the homepage (coming-soon state).

**Concept:** Functional effort, not bodybuilder aesthetics.

### Prompt

```
Person doing a bodyweight squat in a simple garage or basement space, natural light from a high window, worn concrete floor, photorealistic, film grain, muted tones, camera at waist height, composed and quiet, no equipment branding, editorial style --ar 4:3 --style raw
```

---

## 6. Track Cards — The Kitchen

**Placement:** Track card thumbnail for "The Kitchen" on the homepage (coming-soon state).

**Concept:** Real food, home kitchen, intentional not aspirational.

### Prompt

```
A cast-iron pan on a gas stove with vegetables mid-cook, natural window light from the side, worn tile backsplash, photorealistic, film grain, warm amber tones, no people visible, steam rising, simple home kitchen not restaurant, editorial food photography --ar 4:3 --style raw
```

---

## 7. The Books Page — Hero

**Placement:** Full-width or right-side hero image on the Books landing page.

**Concept:** A student working alone, purposefully — the kind of focused work that moves a score.

### Prompt A — At the desk

```
High school student, seated at a kitchen table, working through a printed test sheet with a pencil, late afternoon light through a window, water glass on the table, no phone or laptop visible, photorealistic, editorial style, slight grain, warm neutral tones, focused expression, slight downward angle --ar 3:2 --style raw
```

### Prompt B — Close detail

```
Close crop of a pencil marking a multiple-choice answer on a printed practice test, test booklet visible with handwritten notes in margins, natural light, photorealistic, very slight grain, warm neutral tone, no person visible, shallow depth of field --ar 3:2 --style raw
```

---

## 8. Instructor Credibility Section

**Placement:** Beside or above the "Taught by someone who's already done it" section.

**Concept:** The instructor in an informal teaching or tutoring moment — competent, not posed.

### Prompt

```
Young woman in her early twenties pointing at a printed worksheet spread on a table, explaining to an unseen student, natural light from a nearby window, casual clothing, photorealistic, slight film grain, warm neutral tones, genuine focused expression, not staged, editorial style, slight over-the-shoulder camera angle --ar 3:2 --style raw
```

**Negative prompt:** whiteboard, classroom, blazer, suit, stock pose, pointing at camera, smile at camera

---

## 9. Progress Dashboard / Measurement

**Placement:** Beside or above the "Track Your Trend" or progress dashboard descriptions.

**Concept:** A simple line graph trending upward, shown as something real — printed or on a plain screen. Not a tech product screenshot.

### Prompt A — Printed

```
A hand-drawn line graph on graph paper showing an upward trend, pencil marks and minor corrections visible, warm desk lamp light, photorealistic, slight grain, no labels visible, simple notebook on a wooden surface --ar 4:3 --style raw
```

### Prompt B — Screen

```
Simple web dashboard on a laptop screen showing a single upward-trending score chart, muted color scheme, no branding, natural ambient light in a home setting, slight glare on screen, photorealistic, editorial style, shallow depth of field --ar 4:3 --style raw
```

---

## 10. Guarantee / Trust Section

**Placement:** Supporting image for the guarantee or FAQ section.

**Concept:** A handshake or a signed agreement — but minimal and unposed.

### Prompt

```
Two hands in a simple handshake over a plain wooden table, natural window light, photorealistic, slight grain, muted warm tones, no jewelry or logos visible, close crop, editorial style, calm and direct --ar 4:3 --style raw
```

---

## Usage Notes

- **Midjourney:** Paste prompts directly into `/imagine`. Add `--no [negative prompt terms]` to the end.
- **Adobe Firefly:** Paste the descriptive body of the prompt. Add negative terms in the "Content to avoid" field.
- **DALL-E / GPT-4o:** Remove `--ar` and `--style` parameters before pasting.
- **Replicate (Flux, SDXL):** Use the prompt body as the positive prompt; paste the negative prompt text into the negative prompt field. Recommended model: `black-forest-labs/flux-2-pro`.

---

## Alt Text Starters (for accessibility)

| Image                         | Alt text                                                            |
| ----------------------------- | ------------------------------------------------------------------- |
| Homepage hero (boot on ledge) | A boot finds a foothold on a granite ledge.                         |
| Books hero (student at desk)  | A student works through a printed practice test at a kitchen table. |
| Instructor section            | An instructor points to a worksheet during a tutoring session.      |
| Progress dashboard            | A line chart showing an upward score trend.                         |
| Track — The Books             | A student reads a printed test sheet, pencil in hand.               |
| Track — The Mat               | Two wrestlers in a controlled grip on a blue mat.                   |
