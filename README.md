# LeetCode TypeScript Solutions

A growing collection of LeetCode problem solutions in TypeScript. New solutions are added regularly.

## Structure
```
src/
├── 001-100/    # Problems 1-100
├── 101-200/    # Problems 101-200
├── 201-300/    # Problems 201-300...
└── main.ts     # Test runner
```

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

All solutions are imported in `main.ts` with test functions for each problem. To test a specific problem, comment out other test calls and run only the one you need.

```typescript
/* main.ts */
testTwoSum();
// testSymmetricTree();
// ...
```
