import { Page } from "@playwright/test";

export class apiBookingObjects{
    page: Page;
    baseApi: any;

    constructor(page: Page){
        this.page = page;
        this.baseApi = process.env.API_BASE_URL!;
    }


    async GetUserToken(username:string,password:string)
    {
        let requestBody = {
            "username": `${username}`,
            "password": `${password}`
        }


         let headers = {
            'Content-Type': 'application/json'
         }

         const response = await this.page.request.post(this.baseApi+'/auth', {
            headers: headers,
            data: requestBody,
        });

        return response;

    }

    async CreateBooking(payload:any)
    {
         let headers = {
            'Content-Type': 'application/json'
         }

         const response = await this.page.request.post(this.baseApi+'/booking', {
            headers: headers,
            data: payload,
        });

        return response;
    }

}