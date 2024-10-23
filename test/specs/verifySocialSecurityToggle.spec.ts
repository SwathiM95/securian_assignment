import FormElements from '../pageobjects/form.elements.page.js';

describe("Verify Social Security fields", function () {
    it("Fields hide/show based on Social Security toggle", async () => {
        // Open the form page
        await FormElements.open();

        // Assert if Calculator page is loaded
        await FormElements.verifIfElementIsDisplayed(
            FormElements.calculatorIntroSection
        );

        // Scroll to the Social Security label
        await FormElements.socialSecurityLabel.scrollIntoView();

        // Verify the field is hidden (display: none)
        let isHidden = await FormElements.isElementHidden();
        console.log('Is the Marital Status hidden?', isHidden);
        expect(isHidden).toBe(true);

        // Click the Yes radio button for Social Security
        await FormElements.yesSocialSecurityRB.doubleClick();

        // Pause briefly to allow for UI updates
        await browser.pause(2000);

        // Verify the field is now visible
        isHidden = await FormElements.isElementHidden();
        console.log('Is the Marital Status visible?', !isHidden);
        expect(isHidden).toBe(false);

    });
});