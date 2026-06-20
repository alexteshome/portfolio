# Alex Teshome — Portfolio

Personal portfolio site built with React 19, Vite 6, and TypeScript 5. Features a scroll-driven single-page layout with an animated skills orbit, project showcase, and a contact form wired to Web3Forms.

## Tech Stack

- **React 19** + **TypeScript 5** (strict mode)
- **Vite 6** (build tool + dev server)
- **MUI v7** (Material UI) + **Emotion** (component styling)
- **SCSS** (global stylesheet via `styles/index.scss`)
- **react-scroll** + **react-intersection-observer** (scroll-spy nav)
- **react-awesome-reveal** (entrance animations)
- **Web3Forms** (contact form backend)

## Setup

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Then edit .env.local and add your Web3Forms access key
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm format` | Format with Prettier |
| `pnpm format:check` | Check formatting without writing |
| `pnpm typecheck` | Type-check without emitting |

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms access key for the contact form. Get one at [web3forms.com](https://web3forms.com). |

## Deployment

Deployed via [Vercel](https://vercel.com). Configuration in `vercel.json`. Pushes to `master` auto-deploy.
