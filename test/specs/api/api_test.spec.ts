import { test, expect } from '@playwright/test';
import { apiTestData } from '../../../data/api/apiTestData.ts';
import { BookingAPI } from '../../pageobjects/api/apiBookingObjects.ts';


test.describe('Booking API @api @all', () => {

  
  

    test('Get Token', async ({ page }) => {
        
        const bookingAPI = new BookingAPI(page);
        let response = await bookingAPI.GetUserToken(process.env.API_USERNAME!,process.env.API_PASSWORD!);
        let responseBody = await response.json();
        let responseBodyText = await response.text();
        
        expect(response.status()).toBe(200);
        expect(responseBody).not.toBeNull();
        expect(responseBodyText).not.toContain('reason');

        let token = responseBody.token;
        expect(token).not.toBeNull();


    });

    test('Create Booking', async ({ page }) => {
        
        const bookingAPI = new BookingAPI(page);
        let response = await bookingAPI.CreateBooking(apiTestData.bookingData);
        let responseBody = await response.json();
        
        console.log('response - \n'+JSON.stringify(responseBody));
        
        expect(response.status()).toBe(200);
        let bookingId = responseBody.bookingid;

        expect(bookingId).not.toBeNull();
        expect(responseBody.booking).toHaveProperty( "firstname", apiTestData.bookingData.firstname);
        expect(responseBody.booking).toHaveProperty("lastname", apiTestData.bookingData.lastname);

    });
    
});