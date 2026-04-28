# @group/utils

Shared utility functions for all packages.

## Exports

- `formatDate(input)`
- `toTitleCase(value)`
- `fetchJson(url, options)`

## Usage

```js
import { formatDate, toTitleCase, fetchJson } from '@group/utils';
```

Behavior summary:

- `formatDate(input)`: returns a formatted date string (`en-GB`) or `Invalid date`.
- `toTitleCase(value)`: trims, lowercases, then title-cases each word.
- `fetchJson(url, options)`: wraps `fetch`, throws on non-OK responses, returns parsed JSON.

## Scripts

From the monorepo root:

```sh
pnpm --filter @group/utils dev
pnpm --filter @group/utils build
pnpm --filter @group/utils lint
```
