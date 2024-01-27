import test from '../Base/Fixtures'
import { expect } from '@playwright/test'
import {
    base_URL
  } from '../config'

let now=Date.now();

test.describe('AC-02-01 Test Cases', () => {
    test('AC-02-01', async ({ registerPage, loanPage, page
    }) => {

        await test.step('Loan Amount less than down payment amount',async () => {
        await page.goto(base_URL);
        await registerPage.UserRegister('FirstName'+now, 'LastName'+now, 'address', 'city', 
        'state', '12345678', '0123456789', '12345678', 'Test'+now,'12345678', '12345678');
        await loanPage.RequestLoan('5000', '1000');
        const loanSuccessMessage = await loanPage.getSuccessMessage();
        expect (loanSuccessMessage).toContain('your loan has been approved');
})

        await test.step('Loan Amount less than down payment amount', async () => {
        await loanPage.RequestLoan('1000','7000');
        const successMessage = await loanPage.getSuccessMessage();
        expect (successMessage).toContain("Loan status will be denied as down payment can not be more than loan amount");
})
})
})