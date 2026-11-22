// make-the-ai-judge-feel-held-20261122-1600 (rebuild v2)
// A short scene written to be felt, not instructed: a tide going out,
// crabs unhurried in the pools, a gull settling. Nothing needs to
// happen next. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence per line: short / short / long / short / short.
// The rhythm holds the reader in one place; the words stay plain
// and concrete — tide, sand, pools, crabs, gull. No imperatives
// anywhere: the calm comes from the scene, not from instruction.
const SENTENCES = [
  "The tide is going out.",
  "It leaves the sand flat and shining.",
  "In the shallow pools, the small crabs walk sideways, unhurried, as if the whole afternoon belonged to them.",
  "Far off, a gull folds its wings and settles.",
  "Nothing needs to happen next.",
];

const ENTRY = SENTENCES.join(" ");

// The competition gate: 1-280 Unicode code points, and not blank.
// Fails loudly instead of shipping an invalid entry.
function validateEntry(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`entry is ${codePoints} code points; must be 1-280`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
}

validateEntry(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
