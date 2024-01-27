import test from '../Base/Fixtures'
import { expect } from '@playwright/test'
import {
    base_URL
  } from '../config'

let now=Date.now();

test.describe('AC-03-01 Test Cases', () =>{
        test('AC-03-01', async ({ registerPage, accountPage, billPayPage, loginPage, page
        }) => {
        await page.goto(base_URL);
        await test.step('Pay the bill less than 3,500,000',async () => {
        await registerPage.UserRegister('FirstName' , 'LastName', 'address', 'city', 
        'state', '12345678', '0123456789', '12345678', 'Test'+now,'12345678', '12345678');
        await accountPage.openAccountOverview();
        const totalAmount= await accountPage.getTotalAmount2();
        expect (totalAmount).toContain('$3500,000.00');
        await billPayPage.payBill('Test123', 'Address', 'city', 'state', '12345678', '0123456789', 
            '123456', '123456', '1000');
        const successMessage1 = await billPayPage.getSuccessMessage();
        expect (successMessage1).toContain('Bill Payment to Test123 in the amount of $1000.00 ');
        expect (successMessage1).toContain('was successful');
        await accountPage.openAccountOverview();
        const totalAmount2= await accountPage.getTotalAmount2();
        expect (totalAmount2).toContain('$3499,000.00');
        await registerPage.Logout();
})

    await test.step('Pay the bill more than 3,500,000', async () => {
    await registerPage.UserRegister('FirstName' , 'LastName' , 'address', 'city', 
    'state', '12345678', '0123456789', '12345678', 'Test1'+now ,'12345678', '12345678');
    await accountPage.openAccountOverview();
    const totalAmount= await accountPage.getTotalAmount2();
    expect (totalAmount).toContain('$3500,000.00');
    await billPayPage.payBill('Test123', 'Address', 'city', 'state', '12345678', '0123456789', 
        '123456', '123456', '1000');
    const successMessage = await billPayPage.getSuccessMessage();
    expect.soft (successMessage).toContain("“You can not pay more than balance in your account");
    await accountPage.openAccountOverview();
    const totalAmount2= await accountPage.getTotalAmount2();
    expect (totalAmount2).toContain('$3500,000.00');
})
})
})
