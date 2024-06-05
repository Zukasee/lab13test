const { By } = require('selenium-webdriver');
const BasePage = require('../pages/BasePage');

class HeroDetailsPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async clickHero() {
        const axeHeroLinkElement = await this.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[2]/div[5]/a[6]/div[2]'));
        await axeHeroLinkElement.click();
    }

    async hoverOnAbility(abilityName) {
        const abilityElement = await this.driver.findElement(By.xpath(`//div[text()='${abilityName}']`)); // Укажите правильный XPath для элемента способности
        await this.actions.move({ origin: abilityElement }).perform();
    }

    async selectAbility(abilityName) {
        const abilityElement = await this.driver.findElement(By.xpath(`/html/body/div[2]/div/div[2]/div[5]/div[1]/div[2]/div[1]/div[2]/div[4]`)); // Укажите правильный XPath для элемента способности
        await abilityElement.click();
    }
}

module.exports = HeroDetailsPage;
