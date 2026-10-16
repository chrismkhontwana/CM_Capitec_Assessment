import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/mobile/login.page'
import LandingPage from '../../pageobjects/mobile/landing.page'
import commonPage from '../../pageobjects/mobile/common.page'

describe('Login with invalid password', () => {

        it('Login with invalid credentials', async () => {
        await LandingPage.btnLogin.click();
        await LoginPage.validateLoginText('Login / Sign up Form');
        await LoginPage.selectLogin();

        await LoginPage.login('chris@invalid.com','invalid');
        await LoginPage.btnLogin.click();
     

        await commonPage.txtErrorMessage.waitForDisplayed();

        await expect(commonPage.txtErrorMessage).toHaveText(
            expect.stringContaining('Please enter at least 8 characters'))
    })
})

