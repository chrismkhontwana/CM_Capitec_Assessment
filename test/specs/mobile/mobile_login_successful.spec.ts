import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/mobile/login.page'
import landingPage from '../../pageobjects/mobile/landing.page'
import commonPage from '../../pageobjects/mobile/common.page'
import {mobileTestData} from  '../../../data/mobile/mobileTestData.ts';

describe('Login with valid', () => {
    it('Login with valid credentials', async () => {
     
        await landingPage.btnLogin.click();

        await loginPage.headerTextlogin.waitForDisplayed();
        await expect(loginPage.headerTextlogin).toHaveText(
            expect.stringContaining('Login / Sign up Form'))

        await loginPage.selectLogin();

        await loginPage.login(mobileTestData.mobileData.validEmail,mobileTestData.mobileData.validaPassword);
        await loginPage.btnLogin.click();

        await commonPage.txtAlertTitle.waitForDisplayed();
        await expect(commonPage.txtAlertTitle).toHaveText(
            expect.stringContaining('Success'))
        await expect(commonPage.txtAlertMessage).toHaveText(
            expect.stringContaining('You are logged in!'))
    })
})

