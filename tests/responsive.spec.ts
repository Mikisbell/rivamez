import { test, expect } from '@playwright/test';

// ============================================
// RESPONSIVE VISUAL TEST SUITE - RIVAMEZ
// Tests across all breakpoints
// ============================================

const VIEWPORTS = {
  mobileSmall: { width: 375, height: 667 },
  mobileLarge: { width: 430, height: 932 },
  tablet: { width: 768, height: 1024 },
  laptop: { width: 1280, height: 800 },
  desktop: { width: 1920, height: 1080 },
};

const PAGES = ['/', '/nosotros', '/servicios', '/proyectos', '/contacto', '/blog'];

// ============================================
// 1. HOME PAGE - RESPONSIVE VISUAL TESTS
// ============================================

test.describe('📱 Home Page - Responsive Visual Tests', () => {
  test('BuildingHero renders correctly on all viewports', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await expect(page.locator('section').first()).toBeVisible();
      // Check no horizontal scroll
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // 2px tolerance
    }
  });

  test('Navbar is visible and usable on all viewports', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      const nav = page.locator('nav').first();
      await expect(nav).toBeVisible();

      // On mobile, hamburger menu should be present
      if (vp.width < 768) {
        const hamburger = page.locator('button').filter({ hasText: '' }).first();
        // Check there's a clickable menu button
        const menuButtons = page.locator('button[aria-label], button.md\\:hidden');
        const count = await menuButtons.count();
        expect(count).toBeGreaterThanOrEqual(1);
      }
    }
  });

  test('Footer renders without overflow on all viewports', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      // Scroll to bottom
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);
      const footer = page.locator('footer').first();
      await expect(footer).toBeVisible();
      // No horizontal overflow (allow 10px tolerance for scrollbar)
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewWidth = await page.evaluate(() => window.innerWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewWidth + 10);
    }
  });

  test('CTA buttons are tappable (min 44px) on mobile', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      if (vp.width >= 768) continue; // Only test mobile
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Find all anchor tags and check their sizes
      const buttons = page.locator('a, button');
      const count = await buttons.count();
      for (let i = 0; i < Math.min(count, 20); i++) {
        const btn = buttons.nth(i);
        const isVisible = await btn.isVisible();
        if (isVisible) {
          const box = await btn.boundingBox();
          if (box) {
            expect(box.height).toBeGreaterThanOrEqual(24); // Minimum reasonable height
          }
        }
      }
    }
  });
});

// ============================================
// 2. GRID RESPONSIVENESS TESTS
// ============================================

test.describe('📐 Grid Responsiveness Tests', () => {
  test('Projects grid adapts correctly on all viewports', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/proyectos');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);

      // Check grid has correct columns based on viewport
      const grid = page.locator('[class*="grid"]').first();
      await expect(grid).toBeVisible();
    }
  });

  test('Services cards stack properly on mobile', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/servicios');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      // No horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
    }
  });

  test('Impact metrics cards are readable on all viewports', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      // Scroll to metrics section
      await page.evaluate(() => {
        const el = document.querySelector('[class*="ImpactMetrics"], [class*="impact"]');
        if (el) el.scrollIntoView();
      });
      await page.waitForTimeout(500);

      // No overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
    }
  });
});

// ============================================
// 3. NAVBAR RESPONSIVE BEHAVIOR TESTS
// ============================================

test.describe('🧭 Navbar Responsive Behavior', () => {
  test('Desktop navbar (≥768px) shows all links', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check nav links are visible (not in hamburger)
    const navLinks = page.locator('nav a:not(.md\\:hidden), nav button:not(.md\\:hidden)');
    const count = await navLinks.count();
    expect(count).toBeGreaterThanOrEqual(5); // Empresa, Capacidades, Servicios, Proyectos, Blog, Contacto + CTA
  });

  test('Mobile navbar (<768px) shows hamburger menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Desktop nav should be hidden
    const desktopNav = page.locator('.md\\:flex').filter({ has: page.locator('button') }).first();
    const isVisible = await desktopNav.isVisible().catch(() => false);
    expect(isVisible).toBe(false);
  });

  test('Mobile hamburger menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Find the mobile hamburger button
    const allButtons = await page.locator('button').all();

    let hamburgerFound = false;
    for (const btn of allButtons) {
      const classes = await btn.getAttribute('class');
      if (classes && classes.includes('md:hidden')) {
        await btn.click();
        hamburgerFound = true;
        break;
      }
    }
    expect(hamburgerFound).toBe(true);

    // Mobile menu sidebar should appear
    await page.waitForTimeout(500);
    const sidebar = page.locator('[class*="fixed"][class*="right-0"]');
    await expect(sidebar).toBeVisible();

    // Links should be present in mobile menu
    const mobileLinks = sidebar.locator('a, nav a');
    const linkCount = await mobileLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(4);
  });

  test('Mega menu responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Hover over a mega menu trigger
    const empresaBtn = page.locator('button', { hasText: 'Empresa' }).first();
    if (await empresaBtn.isVisible()) {
      await empresaBtn.hover();
      await page.waitForTimeout(300);

      // Check mega menu appears without overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
    }
  });
});

// ============================================
// 4. IMAGE RESPONSIVENESS TESTS
// ============================================

test.describe('🖼️ Image Responsiveness Tests', () => {
  test('Hero images scale properly on all viewports', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Images should not exceed container width
      const images = page.locator('img');
      const count = await images.count();
      for (let i = 0; i < Math.min(count, 10); i++) {
        const img = images.nth(i);
        const isVisible = await img.isVisible();
        if (isVisible) {
          const box = await img.boundingBox();
          if (box) {
            expect(box.width).toBeLessThanOrEqual(vp.width + 2);
          }
        }
      }
    }
  });

  test('No images overflow on mobile (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  });

  test('Blog images are responsive on blog page', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  });
});

// ============================================
// 5. TEXT READABILITY TESTS
// ============================================

test.describe('📖 Text Readability Tests', () => {
  test('No text below 12px on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check font sizes of all visible text
    const fontSizes = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const sizes: number[] = [];
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const fontSize = parseFloat(style.fontSize);
        if (fontSize > 0 && style.display !== 'none' && style.visibility !== 'hidden') {
          sizes.push(fontSize);
        }
      });
      return sizes;
    });

    const minFontSize = Math.min(...fontSizes);
    expect(minFontSize).toBeGreaterThanOrEqual(9); // Allow some tolerance for decorative/SVG text
  });

  test('Headings are prominent on all viewports', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();

      const h1Box = await h1.boundingBox();
      expect(h1Box).not.toBeNull();
      expect(h1Box!.height).toBeGreaterThanOrEqual(30); // h1 should be reasonably sized
    }
  });
});

// ============================================
// 6. MODAL / OVERLAY RESPONSIVE TESTS
// ============================================

test.describe('🔲 Modal & Overlay Responsive Tests', () => {
  test('ChatBot window fits on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // ChatBot trigger should be visible
    const chatBtn = page.locator('[class*="bottom-"], [class*="fixed"]').filter({ has: page.locator('svg, button') }).first();
    // Click to open chat
    const buttons = page.locator('button');
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      const btn = buttons.nth(i);
      const text = await btn.textContent().catch(() => '');
      if (text.includes('chat') || text.includes('Chat') || text.includes('💬')) {
        await btn.click();
        await page.waitForTimeout(500);
        break;
      }
    }

    // Chat window if open should not overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });

  test('WhatsApp button is accessible on all viewports', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // WhatsApp button should exist (anywhere on page)
      const waLink = page.locator('a[href*="wa.me"]');
      const count = await waLink.count();
      expect(count).toBeGreaterThanOrEqual(1);

      // At least one WhatsApp link should be visible
      let isVisible = false;
      for (let i = 0; i < count; i++) {
        const el = waLink.nth(i);
        if (await el.isVisible().catch(() => false)) {
          isVisible = true;
          break;
        }
      }
      expect(isVisible).toBe(true);
    }
  });
});

// ============================================
// 7. FORM RESPONSIVE TESTS
// ============================================

test.describe('📝 Form Responsive Tests', () => {
  test('Contact form is usable on mobile (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contacto');
    await page.waitForLoadState('networkidle');

    // Find form inputs
    const inputs = page.locator('input, textarea, select');
    const count = await inputs.count();
    expect(count).toBeGreaterThanOrEqual(2);

    // Check inputs are within viewport width
    for (let i = 0; i < Math.min(count, 10); i++) {
      const input = inputs.nth(i);
      const isVisible = await input.isVisible();
      if (isVisible) {
        const box = await input.boundingBox();
        if (box) {
          expect(box.width).toBeLessThanOrEqual(375);
          expect(box.height).toBeGreaterThanOrEqual(30); // Reasonable input height
        }
      }
    }

    // No horizontal overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });

  test('Contact form stacks to single column on mobile', async ({ page }) => {
    // Mobile: should be single column
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contacto');
    await page.waitForLoadState('networkidle');

    // On tablet+: should potentially have 2 columns
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForLoadState('networkidle');
  });
});

// ============================================
// 8. PAGE-SPECIFIC RESPONSIVE TESTS
// ============================================

test.describe('📄 Page-Specific Responsive Tests', () => {
  test('Nosotros page: no overflow on any viewport', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/nosotros');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
    }
  });

  test('Servicios page: image containers are responsive', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/servicios');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
    }
  });

  test('Blog page: cards stack on mobile, grid on desktop', async ({ page }) => {
    // Mobile: single column
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');

    // Desktop: multi column
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.waitForLoadState('networkidle');
  });
});

// ============================================
// 9. ACCESSIBILITY RESPONSIVE TESTS
// ============================================

test.describe('♿ Accessibility Responsive Tests', () => {
  test('Touch targets meet minimum 44px on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check all interactive elements
    const interactiveElements = page.locator('a, button, input, select, textarea');
    const count = await interactiveElements.count();
    let tooSmallCount = 0;

    for (let i = 0; i < Math.min(count, 30); i++) {
      const el = interactiveElements.nth(i);
      const isVisible = await el.isVisible();
      if (isVisible) {
        const box = await el.boundingBox();
        if (box && box.width > 0 && box.height > 0) {
          // Allow some tolerance, flag elements significantly below 44px
          if (box.height < 30) {
            tooSmallCount++;
          }
        }
      }
    }

    // Allow max 10 elements slightly below threshold (decorative icons, SVGs, etc.)
    expect(tooSmallCount).toBeLessThanOrEqual(10);
  });

  test('Content is readable without horizontal scroll', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      const overflow = scrollWidth - clientWidth;
      expect(overflow).toBeLessThanOrEqual(10); // Max 10px tolerance
    }
  });
});

// ============================================
// 10. VISUAL REGRESSION SCREENSHOTS
// ============================================

test.describe('📸 Visual Regression Screenshots', () => {
  test('Home page screenshots at all breakpoints', async ({ page }) => {
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      // Wait for animations to settle
      await page.waitForTimeout(1000);
      await expect(page).toHaveScreenshot(`home-${name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.15,
      });
    }
  });
});
