// Submit all URLs from the generated sitemap to IndexNow (Bing, Yandex, etc.).
// Usage: npm run indexnow            (submits every URL in the sitemap)
//        npm run indexnow -- /contact /ontstoppingsdienst   (submits only these paths)
// Runs automatically after a production build on Vercel (VERCEL_ENV=production).
import { readFileSync, existsSync } from 'node:fs';

const HOST = 'rioolhulp-gils.nl';
const SITE = `https://${HOST}`;
const KEY = 'ead86c8170904d6b8cea8edf0b90e925';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const SITEMAP = 'public/sitemapnummer2-0.xml';

const isPostbuild = process.argv.includes('--postbuild');
if (isPostbuild && process.env.VERCEL_ENV !== 'production') {
  console.log('[indexnow] skipped (not a production deploy)');
  process.exit(0);
}

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
let urlList;
if (args.length) {
  urlList = args.map((p) => (p.startsWith('http') ? p : SITE + (p.startsWith('/') ? p : `/${p}`)));
} else {
  if (!existsSync(SITEMAP)) {
    console.error(`[indexnow] ${SITEMAP} not found, run "npm run build" first`);
    process.exit(isPostbuild ? 0 : 1);
  }
  const xml = readFileSync(SITEMAP, 'utf8');
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

urlList = [...new Set(urlList)].filter((u) => new URL(u).host === HOST);
if (!urlList.length) {
  console.log('[indexnow] no URLs to submit');
  process.exit(0);
}

try {
  // IndexNow accepts up to 10,000 URLs per request.
  for (let i = 0; i < urlList.length; i += 10000) {
    const batch = urlList.slice(i, i + 10000);
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }),
    });
    const text = await res.text();
    console.log(`[indexnow] submitted ${batch.length} URLs: HTTP ${res.status} ${text}`.trim());
    if (res.status >= 400 && !isPostbuild) process.exitCode = 1;
  }
} catch (err) {
  console.error('[indexnow] request failed:', err.message);
  if (!isPostbuild) process.exitCode = 1;
}
