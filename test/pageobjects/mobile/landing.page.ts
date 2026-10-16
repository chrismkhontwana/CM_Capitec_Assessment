import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage  {
    /**
     * define selectors using getter methods
     */

    public get btnLogin () {
        return $('~Login');
    }

    public get btnHome () {
        return $('//android.widget.TextView[@text="Home"]');
    }
   
    public get btnForm () {
        return $('//android.widget.TextView[@text="Forms"]');
    }

    public get btnSwipe () {
        return $('//android.widget.TextView[@text="Swipe"]');
    }

    public get btnDrag () {
        return $('//android.widget.TextView[@text="Drag"]');
    }
}

export default new LandingPage();
