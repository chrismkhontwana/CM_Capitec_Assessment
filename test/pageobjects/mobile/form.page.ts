import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormPage  {
    /**
     * define selectors using getter methods
     */

    public get inputField () {
        return $('//android.widget.EditText[@content-desc="text-input"]');
    }

    public get textYouHaveTyped () {
        return $('//android.widget.TextView[@content-desc="input-text-result"]');
    }

    public get textSwitchMessage () {
        return $('~switch-text');
    }
    
    public get btnSwitchToggle () {
        return $('~switch');
    }

    public get dropDownForm () {
        return $('//android.widget.EditText[@resource-id="text_input"]');
    }
   
    public get dropDownFormText () {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]');
    }

    public get btnActive () {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]');
    }


    public async enterTextToField (text: string,) {
        await this.inputField.setValue(text);
    }

}

export default new FormPage();
