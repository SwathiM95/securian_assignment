import { browser } from '@wdio/globals';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class OpenPage {
    /**
    * Opens the page to test
    */
    public open () {
        return browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
    };
};