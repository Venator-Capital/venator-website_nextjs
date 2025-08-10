import { test, expect } from '@playwright/test';

const routes: { url: string; name: string }[] = [
  { url: 'https://venator-website-nextjs.vercel.app/', name: 'home' },
  { url: 'https://venator-website-nextjs.vercel.app/ai-workflows', name: 'ai-workflows' },
];

test.describe('Visual snapshots', () => {
  for (const { url, name } of routes) {
    test(`snapshot ${name}`, async ({ page }) => {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.setViewportSize({ width: 360, height: 640 });
      const buffer = await page.screenshot({ fullPage: true });
      const fs = await import('fs');
      const path = await import('path');
      const outDir = path.resolve('reports/visual-regression');
      fs.mkdirSync(outDir, { recursive: true });
      const file = path.join(outDir, `${name}-360x640.png`);
      fs.writeFileSync(file, buffer);
      expect(fs.existsSync(file)).toBeTruthy();
    });
  }
});
