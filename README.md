<a name="readme-top"></a>

<img width="1440" alt="KeyBeats — typing test with mechanical keyboard sounds" src=".github/images/img_main.png" />

<p align="center">
  <h3 align="center">KeyBeats</h3>
  <p align="center">
    A free typing test with realistic mechanical keyboard sounds
    
  </p>
</p>



## About

**KeyBeats** is a free online typing test with **realistic mechanical keyboard sounds** and real-time WPM tracking. Practice with timed tests, word counts, quotes, or zen mode — featuring an interactive on-screen keyboard, satisfying key sounds, and detailed accuracy stats.

## ✨ Features

| Area | What you get |
|------|----------------|
| **Test modes** | Time (15s–120s), word count, quotes (length presets), zen |
| **Mechanical key sounds** | Realistic per-key audio feedback via Web Audio; multiple keyboard themes |
| **Virtual keyboard** | Interactive on-screen keyboard that highlights keys as you type (desktop) |
| **Results** | WPM, raw speed, accuracy, character breakdown, consistency, elapsed time, WPM-over-time chart |
| **Keyboard themes** | 6 color schemes — Classic, Mint, Royal, Dolch, Sand, Scarlet — each tints the entire UI |
| **Typing fonts** | 9 fonts — Geist Mono, JetBrains Mono, Fira Code, IBM Plex Mono, Source Code Pro, Inter Tight, Space Grotesk, Nunito, Atkinson Hyperlegible |
| **Settings** | Theme (light/dark/system), accent color, font picker, show keyboard, sound volume, live WPM, ghost mode |
| **Haptics** | Optional vibration on supported hardware |

Settings persist in `localStorage`.

## 🛠 Tech Stack

<details><summary><b>KeyBeats</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
- [Next.js](https://nextjs.org/) 16: React framework with App Router.
- [React](https://react.dev/) 19: UI library.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [Base UI](https://base-ui.com/): Unstyled, accessible component primitives from MUI.
- [shadcn/ui](https://ui.shadcn.com/): Pre-styled component recipes.
- [Motion](https://motion.dev/): Animation library for React.
- [Recharts](https://recharts.org/): Composable charting library.
- [Drizzle ORM](https://orm.drizzle.team/) + LibSQL: Type-safe database layer.
- [Biome](https://biomejs.dev/): Fast linter and formatter.
- [Serwist](https://serwist.pages.dev/): PWA / service worker toolkit.
- [Vercel](https://vercel.com/): Deployment platform.

</details><br/>

[![Technologies Used](https://go-skill-icons.vercel.app/api/icons?i=nextjs,react,ts,tailwind,shadcn,framer,drizzle,sqlite,bun,biome,vercel&theme=dark&titles=true)]

## 🧰 Getting Started

1. Make sure [Git](https://git-scm.com/downloads) and [Bun](https://bun.sh/) (or Node.js 20+) are installed.

2. Fork this repository and clone **your fork**:

```bash
   git clone https://github.com/<your-username>/keybeats.git
   cd keybeats
```

3. Install dependencies:

```bash
   bun install
```

4. Set up your database:

   - Create a free account and database at [Turso](https://turso.tech/app)
   - From your database dashboard, copy the **Database URL** and generate an **Auth Token**

5. Create a `.env.local` file in the project root and add:

```env
   DATABASE_URL=
   DATABASE_AUTH_TOKEN=

   TURSO_DATABASE_URL=
   TURSO_AUTH_TOKEN=
```

   > **Note:** `DATABASE_URL` and `TURSO_DATABASE_URL` should have the **same value**, and `DATABASE_AUTH_TOKEN` and `TURSO_AUTH_TOKEN` should also match. These are duplicated because different parts of the project read them under different variable names.

6. Push the database schema:

```bash
   bunx drizzle-kit push
```

7. Start the dev server:

```bash
   bun dev
```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Scripts

| Command | Description |
|--------|-------------|
| `bun dev` | Development server |
| `bun run build` | Optimized production build |
| `bun start` | Serve the production build |
| `bun run lint` | Lint with Biome |
| `bun run lint:fix` | Lint and auto-fix with Biome |
| `bun run format` | Format with Biome |
| `bun run typecheck` | Type-check with TypeScript |

**greatly appreciated**.

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request






