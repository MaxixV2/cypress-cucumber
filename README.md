# DESCRIPTION

This project is created to show how e2e testing of https://www.saucedemo.com can be organized with Cypress and Cucumber framework using JavaScript, POM (Page Object Model)

This project uses native Cypress reporter

## REQUIREMENTS:

 - Node.js

(In my case Node.js v20.9.0 is used)

### INSTALLATION:
 -  Clone repository
```
git clone https://github.com/MaxixV2/cypress-cucumber.git
```
 - Install dependencies
```
npm install
```
### USAGE:
To open Cypress:
```
npx cypress open
```

Example of Cypress UI report:

![image](https://github.com/MaxixV2/cypress-cucumber/assets/99399536/1afa4508-0c5d-4066-a55e-8f42d55aeff0)


To run tests in headless mode:
```
npx cypress run --headless
```

Example of report in headless mode:

![image](https://github.com/MaxixV2/cypress-cucumber/assets/99399536/8696fbb9-a413-4f4a-8090-86f6244a83a3)


To run specific test use `--spec` flag

Example:
```
npx cypress run --spec 'cypress/e2e/features/footer.feature'
```
