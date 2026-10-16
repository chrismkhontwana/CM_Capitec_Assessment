import { browser, $ } from '@wdio/globals';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SwipePage  {
    /**
     * define selectors using getter methods
     */

// Investigating why are we getting the error "Property 'swipe' does not exist on type 'Browser'."
    public async mySwipe (myDirection: string) {
        await browser.swipe({
        direction: myDirection,                 
        duration: 5000,                    
        percent: 0.5,                      
    })
  }

}

export default new SwipePage();
