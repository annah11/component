# @group/feature-y

Feature package focused on timeline and status insight components.

## Exports

- `ActivityTimeline`
- `StatusInsights`

## Usage

```jsx
import { ActivityTimeline, StatusInsights } from "@group/feature-y";
```

`ActivityTimeline` expects:

- `events`: array of `{ id, message, date }` items.

`StatusInsights` accepts:

- `health` (default: `On Track`)
- `risk` (default: `Low`)

## Internal dependencies

- `@group/ui-components`
- `@group/utils`

## Scripts

From the monorepo root:

```sh
pnpm --filter @group/feature-y dev
pnpm --filter @group/feature-y build
pnpm --filter @group/feature-y lint
```
