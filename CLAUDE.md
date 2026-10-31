# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Seven Seed is a Next.js 16 website for a Brussels-based think tank for European startups, focused on Artificial Intelligence and Defence. The site is built with TypeScript and Tailwind CSS, English only.

## Critical Development Rules

### Code Quality

- **NEVER use `any`** in TypeScript - use proper types or `unknown` if necessary
- Fix lint warnings immediately; `bun run ci` must stay silent
- Run `bun run ci` before committing (the pre-commit hook formats staged files)
- Use tabs for indentation (4 spaces width)
- After making changes, ensure `bun run build` succeeds

### Git Workflow

- Commit regularly after completing tasks
- Small, atomic commits for each completed feature/fix
- Ensure `bun run ci` passes before committing

### Import Management

- Add imports and use them in the same edit to avoid auto-removal
- Prefer static imports over dynamic imports unless needed for code splitting

### Component Guidelines

- One component per file
- Use functional components with hooks
- Server components by default, mark client components with "use client"
- Inline props interfaces unless exported
- Prefer `undefined` over `null` in `useState`

## Essential Commands

### Development

```bash
bun install          # install dependencies
bun dev              # start the dev server
bun run build        # production build
bun run start        # serve the production build
```

### Code Quality

```bash
bun run ci              # the gate: oxlint + oxfmt + knip, then type-check
bun run check           # oxlint + oxfmt + knip only
bun run lint            # oxlint
bun run format          # oxfmt (rewrites files)
bun run type-check      # next typegen + tsc --noEmit
bun run typecheck:watch # tsc in watch mode
```

## Architecture & Key Concepts

### Project Structure

- **App Router**: Uses Next.js 16 App Router with pages in `src/app/`
- **Pages**: Home (`/`), About (`/about`), Contact (`/contact`), Privacy (`/privacy`)
- **Styling**: Tailwind CSS v4 with custom configuration and typography plugin
- **Components**: Reusable components in `src/components/` with layout components in `src/components/layout/` and page sections in `src/components/sections/`

### Routing & Redirects

Configured redirects in `next.config.js` for old pages that no longer exist (mentors, funding, incorporate, etc.) and QR code tracking.

### Component Patterns

Components follow these conventions:

- TypeScript with `.tsx` extension
- Tailwind CSS for styling using `clsx` for conditional classes
- Icons from `@heroicons/react` and custom icon components
- The contact form (`src/components/ContactForm.tsx`) posts to the `@ingram-tech/nk-forms` registry at `src/app/internal/forms/[form]/route.ts`, which validates with the Zod schema in `src/lib/schemas.ts` and delivers via `@ingram-tech/nk-email`

### Code Style Configuration

- **Formatting/linting**: oxfmt (tab indentation, 4-width, trailing commas, 88 column) + oxlint, run via `nk` (`bun run check` / `bun run format`)
- **TypeScript**: Strict mode with separate watch configuration

### Font & Asset Management

- Primary font: Inter (loaded via Next.js font optimization)
- Display font: Cabinet Grotesk (loaded from Fontshare CDN)
- Static assets in `public/` directory
- Images organized in `src/images/`

## Development Guidelines

### When Making Changes

1. Follow existing component patterns and file organization
2. Use Tailwind utility classes rather than custom CSS
3. Preserve tab indentation and formatting rules

### Testing Changes

Before committing, ensure:

1. `bun run ci` passes without warnings
2. `bun run build` completes successfully

## nextkit

Shared agent conventions live in nextkit and propagate via the import below
(do not hand-copy them here).

@./node_modules/@ingram-tech/nk-dev/guide.md
