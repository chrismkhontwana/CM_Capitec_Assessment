import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/mobile/login.page'
import landingPage from '../../pageobjects/mobile/landing.page'
import commonPage from '../../pageobjects/mobile/common.page'
import signUp from '../../pageobjects/mobile/signup.page'

describe('Sign Up', () => {
    it('Sign Up Successful', async () => {
     
        await landingPage.btnLogin.click();
        await loginPage.validateLoginText('Login / Sign up Form');
        await signUp.selectSignUp();

        await signUp.signUp('chris@signup.com','v@lidpassword','v@lidpassword');
        await signUp.btnSignUp.click();

        await commonPage.txtAlertTitle.waitForDisplayed();
        await expect(commonPage.txtAlertTitle).toHaveText(
            expect.stringContaining('Signed Up!'))
        await expect(commonPage.txtAlertMessage).toHaveText(
            expect.stringContaining('You successfully signed up!'))
    })
})

