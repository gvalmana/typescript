import { build } from "esbuild";

async function buidlAll() {
  await build({
    entryPoints: ["src/Main.ts"],
    bundle: true,
    outfile: "dist/bundle-node.js",
    platform: "node",
    logLevel: "info",
  });
  await build({
    entryPoints: ["src/Main.ts"],
    bundle: true,
    outfile: "dist/bundle-web.js",
    platform: "browser",
    logLevel: "info",
  });
}

buidlAll();
