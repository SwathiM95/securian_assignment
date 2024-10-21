import FormElements from './form.elements.page.js';

class sendDataToFormElements {
    public async fillAgeSection(dataArr: string[]=['35','60']) {

        await FormElements.enterValue(FormElements.currentAgeTB, dataArr[0]);
        await FormElements.enterValue(FormElements.retirementAgeTB, dataArr[1]);
    };

    public async fillIncomeSavingsSection(dataArr: string[]=['120000','500000','12','1']) {
        await FormElements.enterValue(FormElements.currentIncomeTB, dataArr[0]);
        await FormElements.enterValue(FormElements.currentTotalSavingsTB,dataArr[1]);
        await FormElements.enterValue(FormElements.currentAnnualSavingsTB,dataArr[2]);
        await FormElements.enterValue(FormElements.savingsIncreaseRateTB,dataArr[3]);

        if (dataArr.length>4) {
            await FormElements.enterValue(FormElements.spouseIncomeTB,dataArr[4]);
        };
    };

    public async fillSocialSecurityIncome(socialSecurityFlag:Boolean=false, maritalStatus:string='Single', overrideAmt:string='0') {
        if (socialSecurityFlag) {
            await FormElements.yesSocialSecurityRB.doubleClick();
            if (maritalStatus=="Married") {
                await browser.waitUntil(() => FormElements.marriedMaritalStatusRB.isDisplayed);
                await FormElements.marriedMaritalStatusRB.scrollIntoView();
                await FormElements.marriedMaritalStatusRB.doubleClick();
            };
            if (overrideAmt!='0') {
                await FormElements.enterValue(FormElements.socialSecurityOverrideTB, overrideAmt);
            };
        };
    };

    public async fillDefaultCalculator(dataArr: string[]=['10000','20','75','6','6']) {
        await FormElements.enterValue(FormElements.additionalIncomeTB,dataArr[0]);
        await FormElements.enterValue(FormElements.retirementDurationTB,dataArr[1]);
        await FormElements.enterValue(FormElements.retirementAnnualIncomeTB,dataArr[2]);
        await FormElements.enterValue(FormElements.preRetirementROITB,dataArr[3]);
        await FormElements.enterValue(FormElements.postRetirementROITB,dataArr[4]);
    };
};

export default new sendDataToFormElements();