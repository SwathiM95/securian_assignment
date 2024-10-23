import FormElements from './form.elements.page.js';

class sendDataToFormElements {
    async fillAgeSection(currentAge: number, retirementAge: number) {

        await FormElements.enterValue(FormElements.currentAgeTB, currentAge);
        await FormElements.enterValue(FormElements.retirementAgeTB, retirementAge);
    };

    async fillIncomeSavingsSection(curIncome: number, spouseIncome: number, curTotalSavings: number, curAnnSavings: number, savingsIncRate: number) {
        await FormElements.enterValue(FormElements.currentIncomeTB, curIncome);
        await FormElements.enterValue(FormElements.currentTotalSavingsTB, curTotalSavings);
        await FormElements.enterValue(FormElements.currentAnnualSavingsTB, curAnnSavings);
        await FormElements.enterValue(FormElements.savingsIncreaseRateTB, savingsIncRate);
        if (spouseIncome!=0) {
            await FormElements.enterValue(FormElements.spouseIncomeTB, spouseIncome);
        };
    };

    async fillSocialSecurityIncome(sociSecFlag:Boolean=false, maritalStatus:string='Single', overrideAmt:number) {
        if (sociSecFlag) {
            await FormElements.yesSocialSecurityRB.doubleClick();
            if (maritalStatus=="Married") {
                browser.waitUntil(() => FormElements.marriedMaritalStatusRB.isDisplayed);
                await FormElements.marriedMaritalStatusRB.scrollIntoView();
                await FormElements.marriedMaritalStatusRB.doubleClick();
            };
            if (overrideAmt!=0) {
                await FormElements.enterValue(FormElements.socialSecurityOverrideTB, overrideAmt);
            };
        };
    };

    async fillDefaultCalculator(addIncome: number, retDuration: number, retAnnIncome: number, proRetROI: number, postRetROI: number) {
        await FormElements.enterValue(FormElements.additionalIncomeTB, addIncome);
        await FormElements.enterValue(FormElements.retirementDurationTB, retDuration);
        await FormElements.enterValue(FormElements.retirementAnnualIncomeTB, retAnnIncome);
        await FormElements.enterValue(FormElements.preRetirementROITB, proRetROI);
        await FormElements.enterValue(FormElements.postRetirementROITB, postRetROI);
    };
};

export default new sendDataToFormElements();