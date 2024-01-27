export class AccountPage {

    constructor(page) {
        this.page=page;
        this.newaccount="//a[@href='/parabank/openaccount.htm']";
        this.newaccountbtn="//input[@value='Open New Account']";
        this.successValidationMessage= "//div[@ng-if='showResult']";
        this.accountIDNumber="//a[@id='newAccountId']"
        this.AccountOverview="//a[@href='/parabank/overview.htm']";
        this.TotalAmount="//tbody//tr[5]";
        this.totalAmount2="//tbody//tr[2]"
    }

    async openNewAccount(){
        await this.page.locator(this.newaccount).click();
        await this.page.locator(this.newaccountbtn).click();
    }

    async openAccountOverview() {
        await this.page.locator(this.AccountOverview).click();
    }

    async getTotalAmount() {
        return await this.page.locator(this.TotalAmount).textContent();
}

async getTotalAmount2() {
    return await this.page.locator(this.totalAmount2).textContent();

}
}

export default AccountPage