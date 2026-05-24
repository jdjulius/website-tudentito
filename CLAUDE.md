# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

A collection of Claude AI skills — Markdown files designed to be uploaded as attachments in Claude Chat conversations. Each skill defines a specialized role, input format, decision hierarchy, and structured output for a specific creative or technical workflow.

## Repository Structure

```
.claude/
  skills/
    <skill-name>/
      <skill-name>.md   # Main skill file uploaded to Claude Chat
      *.md              # Supporting reference or data files
```

There is no build system, test suite, or CI/CD pipeline. This is a documentation repository.

## Adding or Modifying Skills

Each skill file must define:
- **Role** — the persona Claude assumes when the file is loaded
- **Required inputs** — what the user must provide in a single message
- **Decision hierarchy** — which input takes priority when conflicts arise
- **Output structure** — numbered sections with exact content per section
- **Best practices / calibration** — constraints and aesthetic guidelines

Skills are designed for **one-shot processing**: the user sends a complete input in one message and receives a complete structured output in one response.

## Project Requirements & Workflow

### 1. Company Context Structure

Every web project MUST include complete company/business context information before development begins. This context is required for generating content, text, imagery, and design decisions aligned with the client's brand and goals.

**Trigger:** When user says "nuevo proyecto" or similar, display the complete context template below.

**Required Context Fields** — Mark as **INCOMPLETE** if any are missing:
- **Company Name & Industry** — What does the company do?
- **Brand Identity** — Logo, brand colors, typography, visual style guidelines
- **Target Audience** — Demographics, user personas, customer segments
- **Value Proposition** — Core message, unique selling points, key differentiators
- **Services/Products** — Detailed description of offerings with benefits
- **Tone & Voice** — How the brand communicates (formal, casual, technical, etc.)
- **Call-to-Action Goals** — Primary and secondary conversion objectives
- **Imagery & Content** — Brand photos, illustrations, videos, testimonials available or required
- **Competitors** — Reference sites or competitors for inspiration
- **Technical Requirements** — Platform preferences, integrations, SEO/performance needs

**Context Template Display:**
When user submits "nuevo proyecto", respond with a formatted table or checklist showing:
```
# NUEVO PROYECTO - Estructura de Contexto

Status: ⬜ INCOMPLETE

[ ] Company Name & Industry
[ ] Brand Identity
[ ] Target Audience
[ ] Value Proposition
[ ] Services/Products
[ ] Tone & Voice
[ ] Call-to-Action Goals
[ ] Imagery & Content
[ ] Competitors
[ ] Technical Requirements

→ Completa toda la información arriba antes de proceder con el desarrollo.
```

**If context is incomplete:** Request missing information explicitly. Do not proceed with design/development until all fields are provided.

### 2. Project Audit Documentation

For every project created, generate an **audit MD file** in the project's audit directory to maintain a traceable record and track project progress.

**Audit File Structure:**
- **Location:** `audit/<project-name>-audit.md`
- **Contents:**
  - Project name, client, date created, status
  - Context completeness checklist (all required fields from section 1)
  - Deliverables checklist (Landing page, components, deployment, etc.)
  - Design decisions & rationale (color palette chosen, typography selections, etc.)
  - Version history (v1.0 launched 2026-05-23, v1.1 responsive updates, etc.)
  - Client feedback & iterations log
  - Deployment details (URL, hosting, DNS, analytics setup)
  - Knowledge transfer notes (setup instructions, customization points)

**Update audit file:** After each significant change, delivery milestone, or client feedback round.

## Current Skills

### Landing Builder (`.claude/skills/Landing-builder/landing-builder.md`)

Guides users through creating premium animated landing pages using the **F.R.A.M.E.** framework:

| Step | Name | Description |
|------|------|-------------|
| F | Foundation | Brand identity, positioning, color palette, typography |
| R | Render | Two hero image prompts (start and end frames) |
| A | Animation | Video transition prompt between the two frames |
| M | Montaje | Full landing page prompt for Claude Design |
| E | Entrega | Code conversion and Vercel deployment instructions |

**User inputs:** product/service description + a [Motion Sites](https://motionsites.ai) template URL (visual style reference) + optional template screenshots.

**Tool chain:** Claude Chat → ChatGPT Images/DALL-E 3 → Higgsfield/Seedance Pro → Claude Design → Vercel.

**Key design constraints:**
- Motion Sites template controls visual mood and aesthetics; product brief controls brand colors and content
- Apple/Linear/Arc aesthetic — generous whitespace, asymmetrical composition, subtle scroll-driven animations
- Fixed camera, soft studio lighting, 16:9 hero video, ping-pong loops
- Avoid stock imagery and centered/symmetrical layouts

### UI/UX Pro Max (`.claude/skills/ui-ux-pro-max/SKILL.md`)

Comprehensive UI/UX design intelligence with 67 styles, 96 color palettes, 57 font pairings, 25 chart types, and 13 technology stacks. Includes searchable CSV data and Python scripts.

**User inputs:** design task + product context + current state + optimization goal.

**Data files:** `data/` — colors, typography, styles, UX guidelines, stacks, charts, icons, and more.

### Frontend Design (`.claude/skills/frontend-design/frontend-design.md`)

Produces production-ready component code for any framework and styling stack.

**User inputs:** component/page target + stack (framework + styling) + design intent + real content copy.

**Output:** component analysis → complete code → usage example → responsive/a11y notes → extension points.

**Key constraints:** no lorem ipsum, no unstyled output, dark mode by default, components over 150 lines must be split.

### Animate (`.claude/skills/animate/animate.md`)

Motion design engineering — CSS, Framer Motion, GSAP, Motion One animations.

**User inputs:** element/interaction to animate + stack + motion intent (e.g., "snappy", "fluid") + product context.

**Output:** motion design brief → animation tokens → complete code with `prefers-reduced-motion` → orchestration notes → performance checklist → variations.

**Key constraints:** GPU-accelerated properties only (`transform`, `opacity`), `prefers-reduced-motion` always implemented, duration calibrated by interaction type (micro: 80–150ms, transitions: 200–350ms, page: 300–500ms).

### Web Design Guidelines (`.claude/skills/web-design-guidelines/web-design-guidelines.md`)

Generates calibrated, implementation-ready design guidelines for web projects.

**User inputs:** project type + audience + brand identity + scope (full system or specific area).

**Output:** design principles → color token system → typography scale → spacing/layout → component standards → motion standards → accessibility standards → anti-patterns.

**Key constraints:** every guideline must be a decision-making tool, all color tokens need semantic roles, spacing derived from a single base unit, anti-patterns must be project-specific.
