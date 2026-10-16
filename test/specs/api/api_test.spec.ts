import { test, expect } from '@playwright/test';
import { apiTestData } from '../../../data/api/apiTestData.ts';
//import { apiBookingObjects } from '../../pageObjects/api/apiBookingObjects.ts';
import { BookingAPI } from '../../pageobjects/api/apiBookingObjects.ts';


test.describe('Booking API @api @all', () => {

    let token;
    let bookingId;


    test('Get Token', async ({ page }) => {
        
        const bookingAPI = new BookingAPI(page);
        let response = await bookingAPI.GetUserToken(process.env.API_USERNAME!,process.env.API_PASSWORD!);
        let responseBody = await response.json();
        
        expect(response.status()).toBe(200);
        token = responseBody.token;

    });

    test('Create Booking', async ({ page }) => {
        
        const bookingAPI = new BookingAPI(page);
        let response = await bookingAPI.CreateBooking(apiTestData.bookingData);
        let responseBody = await response.json();
        
        console.log('repsonse - \n'+JSON.stringify(responseBody));
        
        expect(response.status()).toBe(200);
        bookingId = responseBody.bookingid;

        expect(responseBody.booking).toHaveProperty( "firstname", apiTestData.bookingData.firstname);
        expect(responseBody.booking).toHaveProperty("lastname", apiTestData.bookingData.lastname);

    });
    
});