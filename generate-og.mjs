import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const html = `<!DOCTYPE html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{width:1200px;height:630px;display:flex;align-items:center;justify-content:center;background:#1a1a18;overflow:hidden;position:relative;}
.gradient{position:absolute;inset:0;background:linear-gradient(135deg,transparent 30%,rgba(201,169,110,0.08) 45%,transparent 60%);pointer-events:none;}
.content{display:flex;flex-direction:column;align-items:center;text-align:center;z-index:1;}
.wordmark{display:inline-flex;align-items:center;font-family:'Montserrat',sans-serif;font-weight:200;font-size:80px;letter-spacing:-0.02em;color:#f5f0e8;line-height:1;}
.pipe{display:inline-block;flex-shrink:0;width:3px;height:95px;background:#c9a96e;margin:0 6px;}
.tagline{font-family:'Montserrat',sans-serif;font-weight:300;font-size:13px;letter-spacing:0.35em;text-transform:uppercase;color:rgba(201,169,110,0.8);margin-top:16px;}
.subline{font-family:'Montserrat',sans-serif;font-weight:200;font-size:16px;letter-spacing:0.08em;color:rgba(245,240,232,0.5);margin-top:40px;}
.creds{font-family:'Montserrat',sans-serif;font-weight:300;font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:rgba(245,240,232,0.35);margin-top:20px;}
.line{width:60px;height:1px;background:rgba(201,169,110,0.3);margin-top:30px;}
</style>
</head><body>
<div class="gradient"></div>
<div class="content">
  <span class="wordmark">steel<span class="pipe"></span>r</span>
  <span class="tagline">Bespoke Entrance Doors</span>
  <div class="line"></div>
  <span class="subline">Designed and installed nationwide</span>
  <span class="creds">SR3 Rated &middot; ISO 9001 Certified &middot; Secured by Design</span>
</div>
</body></html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(__dirname, 'public', 'og-image.png'),
    type: 'png',
    fullPage: false
  });
  await browser.close();
  console.log('OG image created: public/og-image.png');
})();
