const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.newsLink = By.css('a[href="/news"]');
    }

    async open() {
        await super.open('https://www.dota2.com/');
    }

    async clickNewsLink() {
        const newsLinkElement = await this.findElement(this.newsLink);
        await newsLinkElement.click();
    }
}

module.exports = HomePage;
