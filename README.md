# LeetCode TypeScript Solutions

A growing collection of LeetCode problem solutions in TypeScript. New solutions are added regularly.

## Usage
```bash
# Install dependencies
npm install

# Run solutions (uses tsx, no build required)
npm run dev
```

## Solution Format

Each solution includes:
- Problem description from LeetCode
- Solution code
- Time and space complexity analysis

## Testing

Tests are organized by problem ranges. To run specific ranges, comment out imports in `main.ts`:
```typescript
import { runTests as runTests001_100 } from "@/001-100/tests.js";
import { runTests as runTests101_200 } from "@/101-200/tests.js";
// ...other imports

runTests001_100();
runTests101_200();
// ...other test calls
```

Or comment out specific tests in range's `tests.ts` file.
