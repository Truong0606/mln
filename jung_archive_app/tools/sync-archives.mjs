import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

const appRoot = process.cwd();
const srcDir = path.resolve(appRoot, '../JUNG_ARCHIVE_FINAL');
const destDir = path.resolve(appRoot, 'content', '__archives__');

async function main() {
  // If the sibling archive directory doesn't exist (e.g. someone removed it), do nothing.
  if (!fssync.existsSync(srcDir)) {
    console.log(`[sync-archives] Skip: not found ${srcDir}`);
    return;
  }

  // Clean destination to avoid stale content.
  await fs.rm(destDir, { recursive: true, force: true });
  await fs.mkdir(destDir, { recursive: true });

  // Copy all archive markdown into app content so Vercel serverless can access them at runtime.
  // Node 20+ supports fs.cp.
  await fs.cp(srcDir, destDir, {
    recursive: true,
    force: true,
  });

  console.log(`[sync-archives] Copied ${srcDir} -> ${destDir}`);
}

main().catch((err) => {
  console.error('[sync-archives] Failed:', err);
  process.exitCode = 1;
});
