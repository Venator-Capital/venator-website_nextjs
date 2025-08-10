import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  'https://venator-website-nextjs.vercel.app/',
  'https://venator-website-nextjs.vercel.app/ai-workflows',
];

test.describe('A11y axe scan', () => {
  for (const url of routes) {
    test(`axe scan ${url}`, async ({ page }) => {
      await page.goto(url, { waitUntil: 'load' });
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      // Write JSON per URL under reports/axe
      const fs = await import('fs');
      const path = await import('path');
      const outDir = path.resolve('reports/axe');
      fs.mkdirSync(outDir, { recursive: true });
      const file = path.join(outDir, `${url.replace(/https?:\/\//, '').replace(/\W+/g, '_')}.json`);
      fs.writeFileSync(file, JSON.stringify(accessibilityScanResults, null, 2));
      expect(accessibilityScanResults.violations.length).toBeLessThan(5);
    });
  }
});
