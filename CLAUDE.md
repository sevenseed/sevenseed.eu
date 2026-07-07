# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Seven Seed is a Next.js 15 website for a Brussels-based think tank for European startups, focused on Artificial Intelligence and Defence. The site is built with TypeScript and Tailwind CSS, English only.

## Critical Development Rules

### Code Quality

- **NEVER use `any`** in TypeScript - use proper types or `unknown` if necessary
- Linting errors break the build - fix immediately
- Run `npm run lint` before committing
- Use tabs for indentation (4 spaces width)
- After making changes, ensure `npm run build` succeeds

### Git Workflow

- Commit regularly after completing tasks
- Small, atomic commits for each completed feature/fix
- Ensure linting passes before committing

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
# Start development server
npm run dev

# Build the application
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Run linting and formatting checks
npm run lint

# Fix linting and formatting issues
npm run lint:fix

# Watch TypeScript type checking
npm run typecheck:watch
```

## Architecture & Key Concepts

### Project Structure

- **App Router**: Uses Next.js 15 App Router with pages in `src/app/`
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
- Form handling with `@formspree/react` for contact forms

### Code Style Configuration

- **Prettier**: Tab indentation (4 spaces width), trailing commas, 88 character line width
- **ESLint**: Next.js configuration with Prettier integration
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

1. `npm run lint` passes without warnings
2. `npm run build` completes successfully
3. TypeScript has no errors (check with watch mode)

## nextkit

Shared agent conventions live in nextkit and propagate via the import below
(do not hand-copy them here).

@./node_modules/@ingram-tech/agent-guide/guide.md

@./node_modules/@ingram-tech/nk-dev/guide.md
