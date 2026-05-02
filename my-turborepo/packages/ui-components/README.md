# @group/ui-components

Reusable UI component library for the monorepo.

## Exports

- `Button`
- `Card`
- `Badge`

## Styles

Import shared styles once in your app entry (for example `apps/system/src/main.jsx`):

```jsx
import "@group/ui-components/styles.css";
```

## Usage

```jsx
import { Card, Button, Badge } from "@group/ui-components";

function Example() {
  return (
    <Card title="Demo" description="Shared primitives">
      <Button>Primary</Button>
      <Badge tone="success">OK</Badge>
    </Card>
  );
}
```

This package is intentionally lightweight so feature packages can compose these primitives.

## Scripts

From the monorepo root:

```sh
pnpm --filter @group/ui-components dev
pnpm --filter @group/ui-components build
pnpm --filter @group/ui-components lint
```
