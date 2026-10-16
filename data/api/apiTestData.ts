
export class ApiTestData {

    bookingData = {
        firstname : "Chris",
        lastname : "Mkhontwana",
        totalprice : 570,
        depositpaid : true,
        bookingdates : {
            checkin : "2026-10-15",
            checkout : "2026-10-30"
        },
        additionalneeds : "None"
    }

    
}
export const apiTestData = new ApiTestData();