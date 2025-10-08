# CircleCI Build and Test Exercise

## Project Repository
https://github.com/alekhya-kb/button-test-project.git

## Description
Simple button application that displays text on click, tested with Playwright in Chromium browser.

## Project Structure
button-test-project/
├── .circleci/
│   └── config.yml          # CircleCI configuration
├── index.html          # Main application file
├── tests/
│   └── button.test.js      # Playwright test suite
├── .gitignore
├── package.json
├── playwright.config.js    # Playwright configuration
└── README.md

## Technologies Used
- HTML/JavaScript
- Playwright (browser automation)
- CircleCI (continuous integration)

## Test Coverage
- Verifies button click displays correct text
- Tests in real Chromium browser
- Automated testing on every push

## Install Dependencies
- npm install

## Run the app locally
- npx http-server
  
## Run the tests
- npm test

## Run tests with visible browser
- npx playwright test --headed

## Install Playwright browsers
- npx playwright install chromium




 
