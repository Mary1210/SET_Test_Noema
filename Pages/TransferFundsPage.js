export class TranferFundsPage {

    constructor(page) {
        this.page=page;
        this.transferFunds="//a[@href='/parabank/transfer.htm']";
        this.amount="//input[@id='amount']";
        this.trnsferBtn="//input[@value='Transfer']";
        this.toAccount="//select[@id='toAccountId']";
        this.successMessage="//div[@ng-if='showResult']";
    }

    async transferFundsSameAccount(amount) {
        await this.page.locator(this.transferFunds).click();
        await this.page.locator(this.amount).fill(amount);
        await this.page.locator(this.trnsferBtn).click();
    }

    async goToTransferFundsPage() {
        await this.page.locator(this.transferFunds).click();

    }

    async transferFundsAnotherAccount(amount) {
        //await this.page.locator(this.transferFunds).click();
        await this.page.locator(this.amount).fill(amount);
       // await this.page.locator(this.trnsferBtn).click();
        
    }

    async selectToAccountNumber(index)
    {
        //await this.page.locator(this.toAccount).click();
        await this.page.selectOption(this.toAccount, {index});
        await this.page.locator(this.trnsferBtn).click();
    }

    async getSuccessMessage() {
        return await this.page.locator(this.successMessage).textContent();
}
}
export default TranferFundsPage