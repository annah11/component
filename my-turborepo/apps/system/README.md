# @group/system

System assembly application for the coursework monorepo.

## Purpose

This app wires together reusable packages into a single runnable UI.

## Composed packages

- `@group/feature-x`
- `@group/feature-y`
- `@group/ui-components`

Configuration and application assembly live inside `apps/system`, while reusable code stays in `packages/*`.

## Run locally

From the monorepo root:

```sh
pnpm --filter @group/system dev
```

Build only this app:

```sh
pnpm --filter @group/system build
```

## Entry point

- `src/main.jsx`: bootstraps React and loads shared UI styles.

