import FormElements from '../pageobjects/form.elements.page.js';
import sendDataToFormElements from '../pageobjects/fill.form.page.js';

describe ("Adjust default values", function() {
    it(`adjust values and submit successfully`,async()=> {
        
        // set values to be used to fill the form
        let adjustArray: string[] = [
            '100000',  // Additional income
            '30',      // Retirement duration
            '10',      // Retirement annual income(%)
            '12',      // Pre-retirement ROI(%)
            '10'       // Pre-retirement ROI(%)
        ];

        // Open the form page
        await FormElements.open();

        // Fill age related inputs
        await sendDataToFormElements.fillAgeSection();

        // Fill Income & Savings inputs
        await sendDataToFormElements.fillIncomeSavingsSection();

        // Open Adjust default values pop-up
        await FormElements.adjDefaultValuesLink.click();

        // Pause briefly to allow for UI updates
        await new Promise(f => setTimeout(f, 1000));

        // Fill values in the pop-up and click save changes button
        await sendDataToFormElements.fillDefaultCalculator(adjustArray);
        await FormElements.saveChangesButton.click();

        // Pause briefly to allow for UI updates
        await new Promise(f => setTimeout(f, 2000));

        // Click on submit button
        await FormElements.submit();
        
        // Pause briefly to allow for UI updates
        await browser.pause(5000);
    });
});