import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/mobile/login.page'
import LandingPage from '../../pageobjects/mobile/landing.page'
import commonPage from '../../pageobjects/mobile/common.page'

describe('Login with valid', () => {
    it('Login with valid credentials', async () => {
     
        await LandingPage.btnLogin.click();
        await LoginPage.validateLoginText('Login / Sign up Form');
        await LoginPage.selectLogin();

        await LoginPage.login('chris@valid.com','v@lidpassword');
        await LoginPage.btnLogin.click();

        await commonPage.txtAlertTitle.waitForDisplayed();
        await expect(commonPage.txtAlertTitle).toHaveText(
            expect.stringContaining('Success'))
        await expect(commonPage.txtAlertMessage).toHaveText(
            expect.stringContaining('You are logged in!'))
    })
})

