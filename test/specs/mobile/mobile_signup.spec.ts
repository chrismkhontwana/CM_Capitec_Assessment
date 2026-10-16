import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/mobile/login.page'
import landingPage from '../../pageobjects/mobile/landing.page'
import commonPage from '../../pageobjects/mobile/common.page'
import signUp from '../../pageobjects/mobile/signup.page'
import {mobileTestData} from  '../../../data/mobile/mobileTestData.ts';

describe('Sign Up', () => {
    it('Sign Up Successful', async () => {
     
        await landingPage.btnLogin.click();

        await loginPage.headerTextlogin.waitForDisplayed();
        await expect(loginPage.headerTextlogin).toHaveText(
             expect.stringContaining('Login / Sign up Form'))

        await signUp.selectSignUp();

        await signUp.signUp(mobileTestData.mobileData.validEmail,mobileTestData.mobileData.validaPassword,mobileTestData.mobileData.validaPassword);
        await signUp.btnSignUp.click();

        await commonPage.txtAlertTitle.waitForDisplayed();
        await expect(commonPage.txtAlertTitle).toHaveText(
            expect.stringContaining('Signed Up!'))
        await expect(commonPage.txtAlertMessage).toHaveText(
            expect.stringContaining('You successfully signed up!'))
    })
})

