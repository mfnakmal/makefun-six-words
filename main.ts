// Six Words, One Story — make.fun entry (u-deranalabs-six-words-one-story-f982e410).
// The whole entry is one complete story in exactly six words. The program
// writes that story, and nothing else, to /output/entry.txt, so the sealed
// scorer can gate it (UTF-8 text, 1 to 60 characters — this story is 30)
// and the judge can compare it two at a time against the published brief.
// The story is a constant, so two runs write identical bytes.
//
// Revision note (main session): the six-word guard stays — a story that
// drifts to five or seven words would fail the gate outright, so the
// program must refuse to write anything but an exact six-word line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "She married him. Then met him.";

const words = STORY.split(/\s+/).filter(Boolean);
if (words.length !== 6) {
  throw new Error(`expected exactly six words, got ${words.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(STORY);
