import { test, expect } from '@playwright/test';
import { apiBookingObjects } from '../../pageobjects/api/apiBookingObjects.ts';


test.describe('Generate Token @api', () => {

    test('Get Token', async ({ page }) => {
        
        const api_BookingObjects = new apiBookingObjects(page);
        let response = await api_BookingObjects.GetUserToken(process.env.API_USERNAME!,process.env.API_PASSWORD!);
        let responseBody = await response.json();
        let responseBodyText = await response.text();
        
        expect(response.status()).toBe(200);
        expect(responseBody).not.toBeNull();
        expect(responseBodyText).not.toContain('reason');

        let token = responseBody.token;
        expect(token).not.toBeNull();

    });
    
});