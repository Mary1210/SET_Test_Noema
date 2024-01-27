import { test as fixture } from "@playwright/test";
import RegisterPage  from '../Pages/Register-Page';
import LoginPage from '../Pages/Login-Page';
import AccountPage from '../Pages/AccountPage';
import BillPayPage from '../Pages/BillPay';
import LoanPage from '../Pages/LoanPage';
import TranferFundsPage  from "../Pages/TransferFundsPage";

const test = fixture.extend({
    registerPage: async ({ page }, use) => {
      const registerpage=new RegisterPage(page);
      await use(new RegisterPage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    accountPage: async({page}, use) =>{
      await use(new AccountPage(page));
    },

    billPayPage: async({page}, use) =>{
      await use(new BillPayPage(page));
    },

    transferFundsPage: async({page}, use) =>{
      await use(new TranferFundsPage(page));
    },

    loanPage: async({page}, use) =>{
      await use(new LoanPage(page));
    }

    });
    export default test

