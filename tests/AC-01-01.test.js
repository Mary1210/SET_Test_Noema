import test from '../Base/Fixtures'
import { expect } from '@playwright/test'

import {
  base_URL
} from '../config'

  let now=Date.now();

  test.describe('AC-01-01 Test Cases', () =>{
    test('AC-01-01 Test', async ({ 
      registerPage,loginPage, accountPage ,transferFundsPage, page
    }) => {

      await test.step('Login with invalid credentials', async () => {
      await page.goto(base_URL);
      await registerPage.UserRegister('FirstName'+now, 'LastName'+now, 'address', 'city', 
      'state', '12345678', '0123456789', '12345678', 'Test12'+now,'12345678', '12345678');
      await registerPage.Logout();
      await loginPage.UserLogin("test","12345678");
      const validation= await loginPage.getErrorValidationMessage();
      expect (validation).toContain('The username and password could not be verified.');
			})

			await test.step('Check total balance for thre account', async () => {
					await loginPage.UserLogin('Test12'+now,"12345678");
          const successValidationMessagealidation= await loginPage.getSuccessValidationMessage();
          expect (successValidationMessagealidation).toContain('Accounts Overview');
          await accountPage.openNewAccount();
          await accountPage.openNewAccount();
          await accountPage.openNewAccount();
          await accountPage.openAccountOverview();
          const totalAmount= await accountPage.getTotalAmount();
          expect (totalAmount).toContain('$3500,000.00');
				}
			)
      await test.step('transfer from account to same account', async () =>{
          transferFundsPage.transferFundsSameAccount('100');
          const successMessage = await transferFundsPage.getSuccessMessage();
          expect.soft (successMessage).toContain("You can not transfer the amount to same account");
      }
      )

      await test.step('transfer from account to another account', async () => {
        await transferFundsPage.goToTransferFundsPage();
        await transferFundsPage.transferFundsAnotherAccount('100');
        await transferFundsPage.selectToAccountNumber(2);
        const successMessage = await transferFundsPage.getSuccessMessage();
        expect (successMessage).toContain("“You can not transfer more than the balance in your account.");
      })

    })
})
