import { expect } from '@wdio/globals'
import landingPage from '../../pageobjects/mobile/landing.page'
import commonPage from '../../pageobjects/mobile/common.page'
import formPage from '../../pageobjects/mobile/form.page'

describe('Fill Form', () => {
    it('Fill Form Successful', async () => {
     
        await landingPage.btnForm.click();
        await formPage.enterTextToField('Chris');

        await formPage.textYouHaveTyped.waitForDisplayed();
        await expect(formPage.textYouHaveTyped).toHaveText(
            expect.stringContaining('Chris'))

        await formPage.textSwitchMessage.waitForDisplayed();
        await expect(formPage.textSwitchMessage).toHaveText(
            expect.stringContaining('Click to turn the switch ON'))

       await formPage.btnSwitchToggle.click();

        await formPage.textSwitchMessage.waitForDisplayed();
        await expect(formPage.textSwitchMessage).toHaveText(
            expect.stringContaining('Click to turn the switch OFF'))

        await formPage.dropDownForm.click();    
        await formPage.dropDownFormText.click();    

        await formPage.btnActive.click();   

        await commonPage.txtAlertTitle.waitForDisplayed();
        await expect(commonPage.txtAlertTitle).toHaveText(
            expect.stringContaining('This button is'))
        await expect(commonPage.txtAlertMessage).toHaveText(
            expect.stringContaining('This button is active'))

    })
})

