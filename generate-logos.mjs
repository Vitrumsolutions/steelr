import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'public', 'brand');

const logos = [
  {
    name: 'steelr-logo-primary.png',
    width: 800, height: 200, bg: '#f5f0e8', textColor: '#1a1a18', pipeColor: '#c9a96e',
    taglineColor: '#8a6f4e', variant: 'inline', padding: 60,
  },
  {
    name: 'steelr-logo-reversed.png',
    width: 800, height: 200, bg: '#1a1a18', textColor: '#f5f0e8', pipeColor: '#c9a96e',
    taglineColor: 'rgba(201,169,110,0.7)', variant: 'inline', padding: 60,
  },
  {
    name: 'steelr-logo-icon.png',
    width: 400, height: 140, bg: '#f5f0e8', textColor: '#1a1a18', pipeColor: '#c9a96e',
    taglineColor: '', variant: 'icon', padding: 40,
  },
  {
    name: 'steelr-logo-social.png',
    width: 1200, height: 1200, bg: '#1a1a18', textColor: '#f5f0e8', pipeColor: '#c9a96e',
    taglineColor: 'rgba(201,169,110,0.7)', variant: 'stacked', padding: 0,
  },
  {
    name: 'steelr-logo-google.png',
    width: 1200, height: 1200, bg: '#f5f0e8', textColor: '#1a1a18', pipeColor: '#c9a96e',
    taglineColor: '#8a6f4e', variant: 'stacked', padding: 0,
  },
  {
    name: 'steelr-favicon.png',
    width: 512, height: 512, bg: '#1a1a18', textColor: '#f5f0e8', pipeColor: '#c9a96e',
    taglineColor: '', variant: 'icon', padding: 0,
  },
];

function buildHTML(logo) {
  const fontSize = logo.variant === 'stacked' ? 96 : logo.variant === 'icon' && logo.width === 512 ? 64 : 48;
  const pipeH = Math.round(fontSize * 1.15);
  const pipeW = Math.max(2, Math.round(fontSize / 24));
  const taglineSize = Math.round(fontSize * 0.15);

  const wordmark = `<span style="display:inline-flex;align-items:center;font-family:'Montserrat',Arial,sans-serif;font-weight:200;font-size:${fontSize}px;letter-spacing:-0.02em;color:${logo.textColor};line-height:1;">steel<span style="display:inline-block;flex-shrink:0;width:${pipeW}px;height:${pipeH}px;background:${logo.pipeColor};margin:0 ${Math.round(pipeW*1.5)}px;"></span>r</span>`;

  const tagline = logo.taglineColor
    ? `<span style="display:block;font-family:'Montserrat',Arial,sans-serif;font-weight:300;font-size:${taglineSize}px;letter-spacing:0.35em;text-transform:uppercase;color:${logo.taglineColor};margin-top:${Math.round(fontSize*0.18)}px;">Bespoke Entrance Doors</span>`
    : '';

  const layout = logo.variant === 'stacked'
    ? `<div style="display:flex;flex-direction:column;align-items:center;text-align:center;">${wordmark}${tagline}</div>`
    : logo.variant === 'inline' && logo.taglineColor
    ? `<div style="display:flex;align-items:center;gap:${Math.round(fontSize*0.3)}px;">${wordmark}<span style="display:block;width:1px;height:${Math.round(pipeH*0.5)}px;background:rgba(201,169,110,0.3);"></span><span style="font-family:'Montserrat',Arial,sans-serif;font-weight:300;font-size:${taglineSize}px;letter-spacing:0.25em;text-transform:uppercase;color:${logo.taglineColor};">Bespoke Entrance Doors</span></div>`
    : wordmark;

  return `<!DOCTYPE html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box;}body{width:${logo.width}px;height:${logo.height}px;display:flex;align-items:center;justify-content:center;background:${logo.bg};overflow:hidden;}</style>
</head><body>${layout}</body></html>`;
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });

  for (const logo of logos) {
    const page = await browser.newPage();
    await page.setViewport({ width: logo.width, height: logo.height, deviceScaleFactor: 2 });
    await page.setContent(buildHTML(logo), { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(outDir, logo.name), type: 'png', fullPage: false });
    await page.close();
    console.log(`Created: ${logo.name}`);
  }

  await browser.close();
  console.log('\nAll 6 logo files exported to /public/brand/');
})();
