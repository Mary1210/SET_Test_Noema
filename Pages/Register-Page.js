class RegisterPage {

    constructor(page) {
        this.page=page
        this.registerlink="Register"
        this.FirstName="//input[@id='customer.firstName']"
        this.LastName="//input[@id='customer.lastName']"
        this.AddressStreet="//input[@id='customer.address.street']"
        this.AddressCity="//input[@id='customer.address.city']"
        this.AddressState="//input[@id='customer.address.state']"
        this.AddressZipCode="//input[@id='customer.address.zipCode']"
        this.PhoneNumber="//input[@id='customer.phoneNumber']"
        this.SSN="//input[@id='customer.ssn']"
        this.UserName="//input[@id='customer.username']"
        this.password="//input[@id='customer.password']"
        this.repeatpassword="//input[@id='repeatedPassword']"
        this.registerButton="//input[@value='Register']"
        this.logoutLink="//a[@href='/parabank/logout.htm']"
    }

    async UserRegister(FirstName,LastName,AddressStreet,AddressCity,AddressState,AddressZipCode,
        phoneNumber,SSN,UserName,password,repeatedPassword){
        await this.page.getByText(this.registerlink).click();
        await this.page.locator(this.FirstName).fill(FirstName);
        await this.page.locator(this.LastName).fill(LastName);
        await this.page.locator(this.AddressStreet).fill(AddressStreet);
        await this.page.locator(this.AddressCity).fill(AddressCity);
        await this.page.locator(this.AddressState).fill(AddressState);
        await this.page.locator(this.AddressZipCode).fill(AddressZipCode);
        await this.page.locator(this.PhoneNumber).fill(phoneNumber);
        await this.page.locator(this.SSN).fill(SSN);
        await this.page.locator(this.UserName).fill(UserName);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.repeatpassword).fill(repeatedPassword);
        await this.page.locator(this.registerButton).click();
    }
    
    async Logout(){
        await this.page.locator(this.logoutLink).click();
    }
}

export default RegisterPage
