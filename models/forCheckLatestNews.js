const { By } = require('selenium-webdriver');
const BasePage = require('../pages/BasePage');

class NewsPage extends BasePage{
    constructor(driver) {
        super(driver)
    }

    async clickRefreshButton() {
        const refreshButton = await this.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[2]/div[2]/div/a[2]')); // Укажите правильный селектор для кнопки обновления
        await refreshButton.click();
    }
}

module.exports = NewsPage;
