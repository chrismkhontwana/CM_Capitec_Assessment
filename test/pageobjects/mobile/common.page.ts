import { $ } from '@wdio/globals'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CommonPage {
    /**
     * define selectors using getter methods
     */

    public get txtArlertTitle () {
        return $('//android.widget.TextView[@resource-id="com.wdiodemoapp:id/alert_title"]');
    }

    public get txtArlertMessage () {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }  	
    
    public get txtErrorMessage () {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }  
    
    public get btnArlertOk () {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }  
}

export default new CommonPage();
