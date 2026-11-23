// Make the Judge Smile — make.fun bounty
// u-gentle-badger-68-make-the-judge-smile-9228676d
//
// Writes one line (at most 200 characters) about a small good thing
// that happened today to /output/entry.txt.
//
// Usage:
//   node main.ts            # writes to /output/entry.txt
//   node main.ts out.txt    # writes to out.txt instead (local testing)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 200;
const OUTPUT_PATH = process.argv[2] ?? "/output/entry.txt";

// The entry line. A small kindness on the morning train: a toddler
// sharing half her biscuit, framed as a tiny treaty — and the narrator
// left feeling honoured by a crumb.
//
// Why this line: it is on subject (a small good thing today), warm
// (a child's unprompted gift), surprising (a biscuit as a treaty, and
// the closing turn — honoured by a crumb), concrete (morning train,
// biscuit, palm) and worded in its own rhythm, not greeting-card
// phrasing. Variants weighed and set aside: a dandelion saving a
// dropped phone (luck, less warmth), rain waiting under an awning
// (pretty, but no kindness in it). The toddler's biscuit won on
// warmth first, surprise second.
const LINE =
  "On the morning train, a toddler pressed half her biscuit into my palm like a tiny treaty — I have never been so honoured by a crumb.";

if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`entry line must be 1–${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only white space");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
