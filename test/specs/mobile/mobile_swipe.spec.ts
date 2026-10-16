import landingPage from '../../pageobjects/mobile/landing.page'


describe('Swipe', () => {

    it('Swipe from right to left', async () => {
        await landingPage.btnSwipe.click();
 
        await browser.swipe({
        direction: 'left',                
        duration: 5000,                     
        percent: 0.5,                    
       
       })
    })

    it('Swipe from left to right', async () => {
        await landingPage.btnSwipe.click();
 
        await browser.swipe({
        direction: 'right',                  
        duration: 5000,                    
        percent: 0.5,                      
       
       })
    })
})

