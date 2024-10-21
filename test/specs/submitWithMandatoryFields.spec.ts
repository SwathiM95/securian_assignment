import FormElements from '../pageobjects/form.elements.page.js';
import sendDataToFormElements from '../pageobjects/fill.form.page.js';

describe ("Submit with only required fields", function() {
    it(`Successful form submission`,async()=> {
        
        // set values to be used to fill the form
        let ageArray: string[] = [
            '40',      // Age
            '68',      // Retirement age
        ];

        let incomeArray: string[] = [
            '150000',  // Annual income
            '600000',  // Retirement savings balance
            '10',      // Annual Saving(%)
            '2'        // Salary Increase(%)
        ];
        
        // Open the form page
        await FormElements.open();
        
        // Fill age related inputs
        await sendDataToFormElements.fillAgeSection(ageArray);
        
        // Fill Income & Savings inputs        
        await sendDataToFormElements.fillIncomeSavingsSection(incomeArray);
        
        // Pause briefly to allow for UI updates
        await new Promise(f => setTimeout(f, 2000));

        // Click on submit button
        await FormElements.submit();
        
        // Pause briefly to allow for UI updates
        await browser.pause(2000)
    });
});