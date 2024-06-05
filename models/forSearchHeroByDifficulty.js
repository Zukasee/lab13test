const { By } = require('selenium-webdriver');
const BasePage = require('../pages/BasePage');

class HeroesPage extends BasePage {
    constructor(driver) {
        super(driver);
        // this.difficultyDropdown = By.css('div[class="_30qnjy6fkdTLNGj-OhqJZL"]');
        this.difficulty = By.xpath('/html/body/div[2]/div/div[2]/div[2]/div[2]/div[3]/div[2]');
        this.axeHeroLink = By.css('a[href="/hero/axe"]');
    }

    async selectStrengthAttribute() {
        // const attributeDropdownElement = await this.findElement(this.difficultyDropdown, 10000);
        const strengthAttributeElement = await this.findElement(this.difficulty, 1000);
        await strengthAttributeElement.click();
    }

    async clickHero() {
        const axeHeroLinkElement = await this.findElement(this.axeHeroLink);
        await axeHeroLinkElement.click();
    }
}

module.exports = HeroesPage;
