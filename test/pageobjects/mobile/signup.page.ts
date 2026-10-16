import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage  {
    /**
     * define selectors using getter methods
     */

    public get txtSignUp () {
        return $('//android.widget.TextView[@text="Sign up"]');
    }

    public get inputEmail () {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    public get inputPassword () {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    public get inputConfirmPassword () {
        return $('//android.widget.EditText[@content-desc="input-repeat-password"]');
    }
    
    public get btnSignUp () {
        return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]');
    }
 
    public async selectSignUp () {
        await this.txtSignUp.click();
    }

    public async signUp (username: string, password: string, confirmPassword: string) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmPassword);
        await this.btnSignUp.click();
    }
   
}

export default new LandingPage();
