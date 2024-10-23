import FormElements from '../pageobjects/form.elements.page.js';
import sendDataToFormElements from '../pageobjects/fill.form.page.js';
import formData from '../data/formData.json';

describe ("Adjust default values", function() {
    it(`adjust values and submit successfully`,async()=> {
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
            formData.required.spouseIncome,
            formData.curTotalSavings,
            formData.curAnnSavings,
            formData.savingsIncRate);

        // Open Adjust default values pop-up
        await FormElements.adjDefaultValuesLink.click();

        // Pause briefly to allow for UI updates
        await new Promise(f => setTimeout(f, 1000));

        // Assert if Adjust default values modal is displayed
        await FormElements.verifIfElementIsDisplayed(
            FormElements.defaultCalculatorTitle
        );

        // Fill values in the pop-up and click save changes button
        await sendDataToFormElements.fillDefaultCalculator(
            formData.addIncome,
            formData.retDuration,
            formData.retAnnIncome,
            formData.proRetROI,
            formData.postRetROI
        );
        await FormElements.saveChangesButton.click();

        // Pause briefly to allow for UI updates
        await new Promise(f => setTimeout(f, 2000));

        // Click on submit button
        await FormElements.submit();
        
        // Pause briefly to allow for UI updates
        await browser.pause(2000);

        // Assert if results page is displayed
        await FormElements.verifIfElementIsDisplayed(
            FormElements.resultsChart
        );
    });
});