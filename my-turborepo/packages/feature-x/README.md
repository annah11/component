# @group/feature-x

Feature package focused on task summary and task action controls.

## Exports

- `TaskSummary`
- `QuickActions`

## Usage

```jsx
import { TaskSummary, QuickActions } from "@group/feature-x";
```

`TaskSummary` expects:

- `tasks`: array of `{ done: boolean }` items.

`QuickActions` expects callback props:

- `onAdd`
- `onCompleteAll`
- `onReset`

## Internal dependencies

- `@group/ui-components`
- `@group/utils`

## Scripts

From the monorepo root:

```sh
pnpm --filter @group/feature-x dev
pnpm --filter @group/feature-x build
pnpm --filter @group/feature-x lint
```
