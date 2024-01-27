export class LoanPage {

    constructor(page) {
        this.page=page;
        this.requestLoan="a[href='/parabank/requestloan.htm']";
        this.loanAmount="//table[@class='form2']//input[@id='amount']";
        this.downPayment="//input[@ng-model='loanRequest.downPayment']";
        this.apply="//input[@value='Apply Now']";
        this.loanSuccessMessage="//div[@ng-if='loanResponse.approved']//p[1]";
    }

    async RequestLoan(AmountLoan, DownPayment){
        await this.page.locator(this.requestLoan).click();
        await this.page.locator(this.loanAmount).fill(AmountLoan);
        await this.page.locator(this.downPayment).fill(DownPayment);
        await this.page.locator(this.apply).click();
    }

    async getSuccessMessage() {
        return await this.page.locator(this.loanSuccessMessage).textContent();
}

}
export default LoanPage