const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Click Counter Application', () => {
    
    test.beforeEach(async ({ page }) => {
        const filePath = path.join(__dirname, '..', 'index.html');
        await page.goto(`file:///${filePath.replace(/\\/g, '/')}`);
    });

    test('should start with counter at 0', async ({ page }) => {
        await expect(page.locator('#counter')).toHaveText('0');
    });

    test('should increment counter when clicked', async ({ page }) => {
        await page.click('#clickButton');
        await expect(page.locator('#counter')).toHaveText('1');
        
        await page.click('#clickButton');
        await expect(page.locator('#counter')).toHaveText('2');
    });

});