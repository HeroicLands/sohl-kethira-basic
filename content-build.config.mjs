/**
 * This repository's content-build configuration — the whole of its pack
 * toolchain (#1513).
 *
 * The compilers live in `@heroiclands/content-build`, installed as a
 * devDependency; this file is what replaced the Python `build-packs/` tree.
 * Every value those compilers need — which content package they select, which
 * Foundry package ships the result, where the content tree and the compiled
 * packs live, what each document's `_stats` block says, and which packs exist —
 * is declared here, and nothing else in this repository knows how a pack is
 * built.
 *
 * **Paths, not captured values.** `paths.packageManifest` says *where* the
 * shipped Foundry manifest is; the package-id guard and the compiled packs'
 * `_stats.coreVersion` both read it from there, so moving `compatibility.minimum`
 * moves the stamp without touching this file. Nothing here may copy a value the
 * manifest owns.
 *
 * @module
 */

import path from "node:path";
import { fileURLToPath } from "node:url";

// Both specifiers name the *leaf* contract module, never the package root
// barrel: the barrel pulls in the compilers, the compilers read the resolved
// configuration, and resolving it loads this file — so importing the barrel
// here would close a cycle around this file's own evaluation.
import { defineConfig } from "@heroiclands/content-build/config";
import { ITEM_BUILDERS } from "@heroiclands/content-build/sohl/item-builders";

export default defineConfig({
    // Anchors every configured path, so the build reads the same files whatever
    // directory it was launched from — unlike the retired Python scripts, which
    // only ran from inside `build-packs/`.
    rootDir: path.dirname(fileURLToPath(import.meta.url)),

    // The distribution unit a note declares in its `package:` frontmatter. The
    // pack compilers select their entries by it; a note declaring any other
    // package is skipped.
    contentPackage: "kethira",

    // The Foundry package the packs ship in — the `id` in
    // `assets/templates/module.template.json`, and the first segment of every
    // compendium UUID the compilers emit.
    foundryPackage: "sohl-kethira-basic",

    // Kethira ships as a Foundry *module* — hence `module.template.json` rather
    // than a system manifest, and `modules/sohl-kethira-basic/assets/...` as the
    // served root a note's `img: images/…` resolves against.
    packageKind: "modules",

    // Stamped into every compiled document's `_stats`. `systemId` names the game
    // system the content is *for*, which this module — shipping SoHL content —
    // declares as "sohl". `coreVersion` is deliberately absent: it is read from
    // the manifest's `compatibility.minimum`.
    stats: {
        systemId: "sohl",
        systemVersion: "0.6.0",
        lastModifiedBy: "kethirabuild0000",
    },

    // Which content types compile into Items, and what builds each one's
    // `system` block. Kethira's items are SoHL items, so it takes the
    // toolchain's SoHL builder table unchanged.
    itemBuilders: ITEM_BUILDERS,

    // The compiled LevelDB packs land at the repository root, where
    // `module.json` says they are and where the released `module.zip` is
    // assembled from. Everything else keeps the conventional layout.
    paths: {
        stage: "packs",
    },

    // The one pack list. The three Python-era packs (`characteristics`,
    // `mysteries`, `characters`) collapse to a single Item pass: a note lands in
    // a pack because of its `type`, not its location, and there is one Item
    // compiler.
    //
    // `actors` is deliberately absent. A Kethira character's embedded items are
    // addressed by shortcode (`attribute:str`, `skill:jump`, `mysticalability:fate`)
    // and almost all of them are defined by the **`sohl` package**, which this
    // repository does not hold — the retired Python generator resolved them by
    // reading a sibling checkout of the system repository's *built* packs. An
    // unresolved embedded item is a hard error in the shared compiler, so turning
    // the pass on before that catalog is available at build time fails the build
    // rather than shipping thin actors. Same constraint `sohl-thalorna` records
    // for its own actors pass (#1441).
    packs: [{ name: "items", type: "Item", folders: "item-folders.yaml" }],

    // Publishing is a matrix, and this module sits at its most restrictive
    // corner. It renders no knowledgebase or website pages, and it publishes no
    // link manifest: emitting `kethira.json` would be the dependency edge that
    // stops the module being withdrawable, which is a licensing decision rather
    // than a consequence of having no site (#1385/#1446, and this repository's
    // CLAUDE.md). It still **consumes** the manifests of the packages its notes
    // cite, so those addresses resolve; vendored manifests live in
    // `assets/manifests/`.
    publish: {
        site: false,
        manifests: { publish: false, consume: true },
    },
});
