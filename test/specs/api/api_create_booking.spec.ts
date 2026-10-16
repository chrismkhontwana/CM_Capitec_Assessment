import { test, expect } from '@playwright/test';
import { apiTestData } from '../../../data/api/apiTestData.ts';
import { apiBookingObjects } from '../../pageobjects/api/apiBookingObjects.ts';


test.describe('Create Booking @api', () => {

    test('Create Booking', async ({ page }) => {
        
        const api_BookingObjects = new apiBookingObjects(page);
        let response = await api_BookingObjects.CreateBooking(apiTestData.bookingData);
        let responseBody = await response.json();
        
        console.log('response - \n'+JSON.stringify(responseBody));
        
        expect(response.status()).toBe(200);
        let bookingId = responseBody.bookingid;

        expect(bookingId).not.toBeNull();
        expect(responseBody.booking).toHaveProperty( "firstname", apiTestData.bookingData.firstname);
        expect(responseBody.booking).toHaveProperty("lastname", apiTestData.bookingData.lastname);

    });
    
});