# Quizzical

A simple quiz game built with Next.js and React to showcase React learning. The app fetches 5 multiple-choice questions from the [Open Trivia Database](https://opentdb.com/) and lets the user answer them.

## Tech Stack

- **Next.js 16** -- React framework with file-based routing
- **React 19** -- UI library
- **Tailwind CSS 4** -- Utility-first CSS framework
- **DaisyUI 5** -- Tailwind CSS component library
- **TypeScript 5** -- Static type checking
- **ESLint 9** -- Linting

## Prerequisites

- **Node.js** v24.14.0
- **PNPM** (see below)
- Any code editor (VSCode, Cursor, etc.)

## About PNPM

[PNPM](https://pnpm.io/) is a fast, disk-efficient package manager for Node.js. Unlike npm, which copies packages into each project's `node_modules/`, PNPM stores every package version once in a global content-addressable store and creates hard links into your project. This saves significant disk space and speeds up installs.

### Installing PNPM

Node.js 24 ships with [Corepack](https://nodejs.org/api/corepack.html), which can manage PNPM for you:

```bash
corepack enable pnpm
```

Alternatively, you can install it globally via npm:

```bash
npm install -g pnpm
```

Verify the installation:

```bash
pnpm --version
```

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/quiz-react-project-app.git
cd quiz-react-project-app
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Run the development server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Available Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Start the development server on port 3000    |
| `pnpm build`     | Create an optimized production build          |
| `pnpm start`     | Serve the production build locally            |
| `pnpm lint`      | Run ESLint to check for code issues           |
| `pnpm lint:fix`  | Run ESLint and automatically fix issues       |

## How Questions Are Fetched

The quiz questions come from the [Open Trivia Database API](https://opentdb.com/api_config.php). The fetching logic lives in `utilities/getQuestionData.ts` and works in three steps:

1. **Request a session token** -- A token is requested from `opentdb.com/api_token.php`. This token ensures the API does not return duplicate questions within the same session.

2. **Fetch questions** -- Using that token, the app requests 5 medium-difficulty multiple-choice questions from `opentdb.com/api.php`.

3. **Handle token exhaustion** -- If the API returns response code `4` (all available questions for that token have been served), the token is automatically reset and the request is retried.
