# Group Project: Monorepo System Development

This repository implements a modular monorepo for group and individual coursework using npm workspaces and Turborepo.

## What Turborepo Means

Turborepo is a task orchestrator for monorepos. It does not replace React or Vite. Instead, it runs scripts (`dev`, `build`, `lint`) across workspace packages efficiently using dependency-aware ordering and caching.

## Repository Structure

```txt
.
├── apps/
│   └── system/                    # Individual assembly app
└── packages/
    ├── ui-components/             # Shared reusable UI primitives
    ├── utils/                     # Shared helper functions
    ├── feature-x/                 # Feature system package 1
    └── feature-y/                 # Feature system package 2
```

## How The Structure Works

1. `ui-components` provides reusable visual building blocks.
2. `utils` provides reusable logic functions.
3. `feature-x` and `feature-y` compose shared components and utilities into feature modules.
4. `apps/system` imports those feature packages and assembles the final system.

## Setup

```bash
npm install
```

Run all workspace dev tasks:

```bash
npm run dev
```

Run only the system app:

```bash
npm run dev --workspace @group/system
```

Build all workspaces:

```bash
npm run build
```

## Requirement Mapping

- Monorepo setup: npm workspaces + Turborepo.
- Utility library: `packages/utils`.
- Feature systems: `packages/feature-x` and `packages/feature-y`.
- UI component library: `packages/ui-components`.
- Individual assembly: `apps/system` imports package composites.
