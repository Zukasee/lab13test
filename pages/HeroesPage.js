const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class HeroesPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.heroesLink = By.css('a[href="/heroes"]');
    }

    async clickHeroesLink() {
        const heroesLinkElement = await this.findElement(this.heroesLink);
        await heroesLinkElement.click();
    }

    async searchHero(heroName) {
            const searchBox = await this.driver.findElement(By.id('heroSearchBox')); // Укажите правильный селектор для поискового поля
            await searchBox.sendKeys(heroName);
        }
    
    async clickHero(heroName) {
            const heroLink = await this.driver.findElement(By.linkText(heroName));
            await heroLink.click();
    }
}

module.exports = HeroesPage;
