import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/mobile/login.page'
import landingPage from '../../pageobjects/mobile/landing.page'
import commonPage from '../../pageobjects/mobile/common.page'
import {mobileTestData} from  '../../../data/mobile/mobileTestData.ts';

describe('Login with invalid password', () => {

        it('Login with invalid credentials', async () => {

        await landingPage.btnLogin.click();

        await loginPage.headerTextlogin.waitForDisplayed();
        await expect(loginPage.headerTextlogin).toHaveText(
            expect.stringContaining('Login / Sign up Form'))

        await loginPage.selectLogin();

        await loginPage.login(mobileTestData.mobileData.validEmail,mobileTestData.mobileData.invalidaPassword);
        await loginPage.btnLogin.click();
     

        await commonPage.txtErrorMessage.waitForDisplayed();

        await expect(commonPage.txtErrorMessage).toHaveText(
            expect.stringContaining('Please enter at least 8 characters'))
    })
})

