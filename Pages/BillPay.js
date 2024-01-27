export class BillPayPage {

    constructor(page) {
        this.page=page;
        this.billPay="a[href='/parabank/billpay.htm']";
        this.payeeName="//input[@name='payee.name']";
        this.payeeAddress="//input[@name='payee.address.street']";
        this.payeeCity="//input[@name='payee.address.city']";
        this.payeeState="//input[@name='payee.address.state']";
        this.payeeZipCode="//input[@name='payee.address.zipCode']";
        this.payeePhoneNumber="//input[@name='payee.phoneNumber']";
        this.payeeAccountNumber="//input[@name='payee.accountNumber']";
        this.payeeVerifyAccountNumber="//input[@name='verifyAccount']";
        this.amount="//input[@name='amount']";
        this.sendPaymet="//input[@value='Send Payment']";
        this.successMessage="//div[@ng-show='showResult']";
    }

    async payBill(payeeName, payeeAddress, payeeCity, payeeState, payeeZipCode, payeePhoneNumber, 
        payeeAccountNumber, payeeVerifyAccountNumber, amount){

            await this.page.locator(this.billPay).click();
            await this.page.locator(this.payeeName).fill(payeeName);
            await this.page.locator(this.payeeAddress).fill(payeeAddress);
            await this.page.locator(this.payeeCity).fill(payeeCity);
            await this.page.locator(this.payeeState).fill(payeeState);
            await this.page.locator(this.payeeZipCode).fill(payeeZipCode);
            await this.page.locator(this.payeePhoneNumber).fill(payeePhoneNumber);
            await this.page.locator(this.payeeAccountNumber).fill(payeeAccountNumber);
            await this.page.locator(this.payeeVerifyAccountNumber).fill(payeeVerifyAccountNumber);
            await  this.page.locator(this.amount).fill(amount);
            await this.page.locator(this.sendPaymet).click();
    }

    async getSuccessMessage() {
        return await this.page.locator(this.successMessage).textContent();
}
}

export default BillPayPage