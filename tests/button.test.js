const { test, expect } = require('@playwright/test');
const path = require('path');
const http = require('http');
const fs = require('fs');

let server;
const PORT = 8888;

test.beforeAll(async () => {
    // Start a simple HTTP server
    const htmlPath = path.join(__dirname, '..', 'index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    });
    
    await new Promise((resolve) => {
        server.listen(PORT, resolve);
    });
});

test.afterAll(async () => {
    await new Promise((resolve) => {
        server.close(resolve);
    });
});

test.describe('Click Counter Application', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto(`http://localhost:${PORT}`);
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