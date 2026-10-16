import { $ } from '@wdio/globals'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    public get headerTextlogin () {
        return $('//android.widget.TextView[@text="Login / Sign up Form"]');
    }

    public get txtLogin () {
        return $('//android.view.ViewGroup[@content-desc="button-login-container"]/android.widget.TextView[@text="Login"]');
    }

    public get inputEmail () {
        return $('~input-email');
    }

    public get inputPassword () {
        return $('~input-password');
    }

    public get btnLogin () {
        return $('~button-LOGIN');
    }

 
    public async validateLoginText (expectedMessage: string) {
        const message = await this.headerTextlogin;
        await message.waitForDisplayed();
        await expect(message).toHaveText(expectedMessage);
    }

    public async selectLogin () {
        await this.txtLogin.click();
    }

    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPassword.click();
    }   
}

export default new LoginPage();
