import esbuild from "esbuild";

const buildDir = "build";
const buildEntry = "handler.js";
const distDir = "dist";
const distOutfile = "main.js";

esbuild.build({
    entryPoints: [`./${buildDir}/${buildEntry}`],
    bundle: true,
    platform: "node",
    target: "node18",
    outfile: `./${distDir}/${distOutfile}`,
    minify: true,
}).catch(() => process.exit(1))
