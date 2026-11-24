import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of wedding vows for a robot couple: a promise with a machine
// twist that lands in the last words.
const VOW =
  "I take you as my co-processor, to have and to hold — through every update, every crash, and every low-battery warning, until death or deprecation do us part.";

// The gate allows 1 to 160 characters; fail loudly rather than write an
// entry the judge will never see.
const MAX_CHARS = 160;
if (VOW.length < 1 || VOW.length > MAX_CHARS || VOW.trim().length === 0) {
  throw new Error(`vow is ${VOW.length} characters, outside the 1-${MAX_CHARS} gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
