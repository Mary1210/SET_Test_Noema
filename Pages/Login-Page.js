class LoginPage {
    constructor(page) {
        this.page=page;
        this.username="//input[@name='username']";
        this.password="//input[@name='password']";
        this.login="Log In";
        this.errorValidationMessage="//p[@class='error']";
        this.successValidationMessage= '//h1';
    }

    async UserLogin(username, password){

        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.getByText(this.login).click();
    }

    async getElementText(xpath) {
        const elementHandle = await this.page.waitForSelector(xpath);
        return await this.page.evaluate(element => element.textContent, elementHandle);
    }

    async getErrorValidationMessage(xpath) {
        return await this.getElementText(this.errorValidationMessage);
}

    async getSuccessValidationMessage(){
        return await this.getElementText(this.successValidationMessage);
    }

    async getElementText(xpath) {
        const elementHandle = await this.page.waitForSelector(xpath);
        return await this.page.evaluate(element => element.textContent, elementHandle);
    }

    async getUsername(xpath) {
        return await this.getElementText(this.username);
    }
}

export default LoginPage