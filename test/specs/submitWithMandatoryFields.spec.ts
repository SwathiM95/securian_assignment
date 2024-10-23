import FormElements from '../pageobjects/form.elements.page.js';
import sendDataToFormElements from '../pageobjects/fill.form.page.js';
import formData from '../data/formData.json';

describe ("Submit with only required fields", function() {
    it(`Successful form submission`,async()=> {
        // Open the form page
        await FormElements.open();
        
        // Assert if Calculator page is loaded
        await FormElements.verifIfElementIsDisplayed(
            FormElements.calculatorIntroSection
        );

        // Fill age related inputs
        await sendDataToFormElements.fillAgeSection(
            formData.currentAge, 
            formData.retirementAge
        );

        // Fill Income & Savings inputs        
        await sendDataToFormElements.fillIncomeSavingsSection(
            formData.addIncome,
            formData.notRequired.spouseIncome,
            formData.curTotalSavings,
            formData.curAnnSavings,
            formData.savingsIncRate
        );
        
        // Pause briefly to allow for UI updates
        await new Promise(f => setTimeout(f, 2000));

        // Click on submit button
        await FormElements.submit();
        
        // Pause briefly to allow for UI updates
        await browser.pause(2000)

        // Assert if results page is displayed
        await FormElements.verifIfElementIsDisplayed(
            FormElements.resultsChart
        );
    });
});