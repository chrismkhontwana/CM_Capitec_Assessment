import landingPage from '../../pageobjects/mobile/landing.page'
import swipePage from '../../pageobjects/mobile/swipe.page'

describe('Swipe', () => {

    it('Swipe from right to left', async () => {
        await landingPage.btnSwipe.click();
 
        await swipePage.textGitHub.waitForDisplayed();

        await browser.swipe({
        direction: 'left',                
        duration: 5000,                     
        percent: 0.5,                    
       
       })

        await swipePage.textChat.waitForDisplayed();
    })

    it('Swipe from left to right', async () => {
        await landingPage.btnSwipe.click();
 
        await swipePage.textChat.waitForDisplayed();

        await browser.swipe({
        direction: 'right',                  
        duration: 5000,                    
        percent: 0.5,                      
       
       })
       await swipePage.textGitHub.waitForDisplayed();
    })
})

