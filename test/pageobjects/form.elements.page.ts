import OpenPage from './open.page.js';

class FormElements extends OpenPage {
    /**
     * define elements
     */
    get currentAgeTB () { return $('[id="current-age"]') };
    get retirementAgeTB () { return $('[id="retirement-age"]') };
    get currentIncomeTB () { return $('[id="current-income"]') };
    get spouseIncomeTB () { return $('[id="spouse-income"]') };
    get currentTotalSavingsTB () { return $('[id="current-total-savings"]') };
    get currentAnnualSavingsTB () { return $('[id="current-annual-savings"]') };
    get savingsIncreaseRateTB () { return $('[id="savings-increase-rate"]') };

    get socialSecurityLabel () {return $('[id="include-social-container"]')};
    get yesSocialSecurityRB () {return $('[id="yes-social-benefits"]')};
    get noSocialSecurityRB () {return $('[id="no-social-benefits"]')};

    get maritalStatusLabel () {return $('[id="marital-status-label"]')};
    get singleMaritalStatusRB () {return $('[id="single"]')};
    get marriedMaritalStatusRB () {return $('[id="married"]')};

    get socialSecurityField() { return $('[class="row social-security-field"]') };
    get socialSecurityOverrideTB () {return $('[id="social-security-override"]')};

    get adjDefaultValuesLink () {return $('//*[@id="retirement-form"]/div[4]/div[1]/div/div/div/ul/li[2]/a')};

    // adjust default values form
    get additionalIncomeTB () {return $('[id="additional-income"]')};
    get retirementDurationTB () {return $('[id="retirement-duration"]')};

    get yesInflationInclusionRB () {return $('[id="include-inflation"]')};
    get noInflationInclusionRB () {return $('[id="exclude-inflation"]')};

    get retirementAnnualIncomeTB () {return $('[id="retirement-annual-income"]')};
    get preRetirementROITB () {return $('[id="pre-retirement-roi"]')};
    get postRetirementROITB () {return $('[id="post-retirement-roi"]')};

    get saveChangesButton () {return $('//*[@id="default-values-form"]/div[2]/div/div[1]/button')};

    get submitButton () { return $('[class="dsg-btn-primary btn-block"]') };

    /**
     * define or overwrite page methods
     */
    open () {
        return super.open();
    };

    // Function to click on textbox and set/enter value
    async enterValue(element: ChainablePromiseElement, value: string) {
        // Clear the textbox value
        await element.clearValue();
        // Click on the textbox to focus
        await element.click();
        // Set value to textbox
        await element.setValue(value);
    };

    // Function to call submit button click
    async submit () {
        await this.submitButton.click();
    };

    // Function to check the CSS property is none or not
    async isElementHidden() {
        const displayProperty = await this.socialSecurityField.getCSSProperty('display');
        return displayProperty.value === 'none';
    };
};

export default new FormElements();