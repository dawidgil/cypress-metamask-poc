/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// const puppeteer = require("cypress-metamask/support/puppeteer");
const metamask = require("cypress-metamask/support/metamask");
const puppeteer = require("cypress-metamask/support/puppeteer");
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    on('task', {
        async metamaskSign() {
            await puppeteer.metamaskWindow().waitForTimeout(3000);
            const notificationPage = await puppeteer.switchToMetamaskNotification();
            await puppeteer.waitAndClick(
                '[data-testid="request-signature__sign"]',
                notificationPage,
            );
            // await puppeteer.waitAndClick(
            //     permissionsPageElements.connectButton,
            //     notificationPage,
            // );
            await puppeteer.metamaskWindow().waitForTimeout(3000);
            return true;
        }
    });
    require('cypress-metamask/plugins')(on);
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}
