import { rmSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import {copyFileSync, mkdirSync, readdirSync, statSync} from "node:fs";

const outPath = join(process.cwd(), 'out');
const docsPath = join(process.cwd(), 'docs');

function copyDir(src, dest) {
    mkdirSync(dest, { recursive: true });
    for (const item of readdirSync(src)) {
        const srcPath = join(src, item);
        const destPath = join(dest, item);
        if (statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            copyFileSync(srcPath, destPath);
        }
    }
}
if (existsSync(docsPath)) {
    rmSync(docsPath, { recursive: true, force: true });
}
copyDir(outPath, docsPath);

writeFileSync('docs/.nojekyll', '');
console.log('Moved build output from /out to /docs');
