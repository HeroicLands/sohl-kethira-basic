/*
 * This file is part of the Kethira content module for the Song of Heroic Lands (SoHL) system.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This build/tooling script is derived from the SoHL system repository and is
 * licensed under the GNU General Public License v3.0 (GPLv3). It is NOT covered
 * by this repository's LICENSE file, which governs the shipped Hârn fan material.
 *
 * For full terms, visit: https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Write the files that belong to the deployment's **root** rather than to the
 * rendered site (#83).
 *
 * Hugo renders into `build/site/kethira/`, because the deployment carries the
 * `/kethira/` prefix physically and the routing layer is a path-preserving
 * pass-through. The directory that is *uploaded* is its parent, `build/site/`,
 * and Cloudflare Pages reads `_redirects` and `_headers` from there and nowhere
 * else — a copy inside `kethira/` would be published as a text file and never
 * applied. Hugo owns everything under the prefix, so this step owns what sits
 * beside it.
 *
 * **This writes no page and must never write one.** The module is unofficial
 * Hârn fan material under Keléstia's Fan Material Guidelines, so this package
 * publishes exactly one page and the shared deploy workflow fails the run if it
 * finds more. A redirect is a routing rule, not a document: neither file this
 * script writes is an `index.html`, so the tally the workflow computes is
 * unchanged.
 *
 * Usage: node utils/build-site-root.mjs   (run as part of `npm run build:site`)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** The directory that is deployed. Its root is the site's origin. */
export const SITE_OUT = "build/site";

/** Where the package is mounted inside the deployment. Matches `baseURL`. */
export const PACKAGE_DIR = "kethira";

/**
 * The address of the landing, relative to the deployment root.
 *
 * `homepage-root` is the address `assets/content/homepage.md` computes from
 * `type: homepage` and `shortcode: root` — the convention every package
 * follows — so this string and that note's frontmatter are one fact stated
 * twice. Change the shortcode and this moves with it.
 */
export const LANDING = `/${PACKAGE_DIR}/homepage-root/`;

/**
 * The namespace the routing layer derives this package's origin in: `/kethira/`
 * on `www.heroiclands.org` is proxied to
 * `https://kethira.pkg.heroiclands.org/kethira/`.
 *
 * A **dedicated** namespace, and {@link NOINDEX_HEADERS} depends on it being
 * one — see the third rule there. Changing it would have to be matched in
 * `heroiclands-site`'s router, which derives the same address from the package
 * prefix, and in the `domain-suffix` input of the shared deploy workflow in
 * `HeroicLands/.github`.
 */
export const ORIGIN_SUFFIX = "pkg.heroiclands.org";

/**
 * The `noindex` half of `_headers`, marking the hosting project's own addresses
 * `noindex`.
 *
 * **This repository did not carry these rules until #83, and it did not need
 * to.** The shared deploy workflow writes exactly this payload as a default —
 * but only when the build produced *no* `_headers` at all, byte for byte,
 * never merging into one that exists. Since #83 the build produces one (for the
 * cache rules below, which have nowhere else to live), so the default no longer
 * fires and covering these three addresses became this repository's job. The
 * workflow says as much at the check: *"A package that emits its OWN `_headers`
 * passes this check with whatever it wrote, so it is that package's job to
 * cover the custom domain too."* Keep this half in step with
 * `HeroicLands/.github`'s default if that ever changes; nothing detects drift.
 *
 * A Cloudflare Pages project answers at **three** families of host-assigned
 * address besides the path it serves on `www.heroiclands.org`:
 * `<project>.pages.dev`, one `<deployment>.<project>.pages.dev` per deployment,
 * and `<package>.{@link ORIGIN_SUFFIX}` — the custom domain the project carries
 * so the routing layer has an origin to fetch. None is advertised, all answer
 * with the same page, and left alone they are indexed and compete with the
 * canonical URL in search results.
 *
 * The rules are **scoped to those hostnames**, which is what keeps this correct
 * for anyone who takes the repository elsewhere: deployed under its own domain
 * the site is indexable, and only the host-assigned addresses are not.
 * `:project`, `:version` and `:package` are Cloudflare's own placeholders — a
 * named wildcard matching exactly **one label**, since the delimiter inside a
 * host is the period. That single-label rule is also what keeps the canonical
 * address out of the third rule: `:package.pkg.heroiclands.org` requires four
 * labels and a literal `pkg` third from the end, so the three-label
 * `www.heroiclands.org` cannot match it under any binding.
 *
 * The hosting cannot tell the routing layer's request apart from a reader's —
 * it is the same URL at the same address — so `X-Robots-Tag` reaches
 * `www.heroiclands.org` too, and the router (`heroiclands-site`, `worker/`,
 * `canonicalHeaders`) strips it there while passing every other header through.
 */
export const NOINDEX_HEADERS = [
    "https://:project.pages.dev/*",
    "  X-Robots-Tag: noindex",
    "",
    "https://:version.:project.pages.dev/*",
    "  X-Robots-Tag: noindex",
    "",
    `https://:package.${ORIGIN_SUFFIX}/*`,
    "  X-Robots-Tag: noindex",
    "",
];

/**
 * Where `/kethira/` sends a reader, now that the landing is an addressed page.
 *
 * A homepage used to be the one note whose destination was fixed — it wrote the
 * site root's `_index.md` and was served at `/kethira/`. Since
 * `HeroicLands/package-build#182` it is an ordinary addressed note: it declares
 * `shortcode: root` and publishes at its address like every other page, so the
 * package prefix serves nothing of its own and the landing has to be pointed
 * at. Hugo still generates a site root there — chrome around an empty `<main>`,
 * authored by nobody — and that is what `/kethira/`, this package's most linked
 * address, served until #83. Where a package's own address sends a reader is a
 * routing fact rather than content, which is why it is authored here.
 *
 * **Both path forms, because Cloudflare Pages matches the raw path.** Redirect
 * matching runs against `new URL(request.url).pathname` before any
 * trailing-slash or `index.html` handling — read in Pages' own asset server,
 * `workers-sdk`, `packages/pages-shared/asset-server/handler.ts`, where
 * `staticRedirectsMatcher()` keys on that pathname and the `pathname.endsWith("/")`
 * branch is a hundred lines further down. So `/kethira` and `/kethira/` are
 * distinct keys and a rule on one does not catch the other. A redirect also
 * wins over a static asset at the same path — *"Redirects are always followed,
 * regardless of whether or not an asset matches the incoming request"* — which
 * is what puts this rule in front of Hugo's site root rather than behind it.
 */
export const REDIRECTS = [
    `/${PACKAGE_DIR}/   ${LANDING}   301`,
    `/${PACKAGE_DIR}    ${LANDING}   301`,
    "",
].join("\n");

/**
 * The lifetime pinned on that 301, and why it is pinned at all.
 *
 * Cloudflare Pages sets **no** `Cache-Control` on a redirect it generates — its
 * redirect responses carry `location` and nothing else — and a 301 with no
 * `Cache-Control` is cacheable indefinitely by default under RFC 9111. A
 * browser persists one to disk and stops asking, so an addressing scheme that
 * moved again would strand every returning reader on this package's most-linked
 * URL. An hour keeps the 301's canonical signal without the permanence.
 *
 * **`_headers` does apply to a `_redirects` response, and that is verified
 * rather than documented.** Cloudflare's docs say only that *"redirects are
 * applied before headers, so when a request matches both a redirect and a
 * header, the redirect takes priority"* — a sentence routinely misread as
 * "headers are skipped on a redirect". Its open-source asset server settles it:
 * in `handler.ts` the redirect returns from `generateResponse()`, and the caller
 * passes that response straight into `attachHeaders()` — which is what applies
 * the `_headers` rules, matched against the original `request` — with the only
 * short-circuit being `status >= 500`. There is a carve-out that deletes
 * `cache-control`, and it is scoped to `status === 404`, not to redirects. The
 * one documented "headers are not applied" exemption is Pages Functions.
 *
 * Because that is read behaviour rather than a documented guarantee, verify it
 * once after deploying and treat a regression as a Cloudflare change rather
 * than a content bug:
 *
 * ```bash
 * curl -sSI https://www.heroiclands.org/kethira/ | grep -i 'location\|cache-control'
 * ```
 *
 * If it ever stops holding, the documented alternative is a zone-level Response
 * Header Transform Rule, or Bulk Redirects, which sets both — not a Pages
 * Function, since `_redirects` and `_headers` both stop applying to a route a
 * Function serves.
 *
 * These rules are **path-scoped**, unlike {@link NOINDEX_HEADERS}: they are
 * about one address on every host this deployment answers on, not about which
 * hosts are host-assigned.
 */
export const CACHE_HEADERS = [
    `/${PACKAGE_DIR}/`,
    "  Cache-Control: max-age=3600",
    "",
    `/${PACKAGE_DIR}`,
    "  Cache-Control: max-age=3600",
    "",
];

/** The full `_headers` payload: the `noindex` rules, then the cache rules. */
export const HEADERS = [...NOINDEX_HEADERS, ...CACHE_HEADERS].join("\n");

function main() {
    const root = path.resolve(SITE_OUT);
    const landing = path.join(root, ...LANDING.split("/").filter(Boolean), "index.html");

    // The redirect names a destination, so refuse to write one that leads
    // nowhere: a `_redirects` pointing at an unbuilt landing turns this
    // package's most linked address from a blank page into a 404.
    if (!fs.existsSync(landing)) {
        console.error(
            `build-site-root: nothing rendered at ${SITE_OUT}${LANDING} — the ` +
                `redirect below would lead nowhere. Run \`npm run build:site\`, ` +
                `and check \`shortcode:\` in assets/content/homepage.md if it ` +
                `still is not there.`,
        );
        process.exit(1);
    }

    fs.writeFileSync(path.join(root, "_headers"), HEADERS);
    console.log(`build-site-root: wrote ${SITE_OUT}/_headers.`);

    fs.writeFileSync(path.join(root, "_redirects"), REDIRECTS);
    console.log(`build-site-root: wrote ${SITE_OUT}/_redirects.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    main();
}
