const { Builder, By, until } = require('selenium-webdriver');
const HomePage = require('../pages/HomePage');
const HeroDetailsPage = require('../models/forGetInfoBySkill');
const Logger = require('../Logger')

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        const homePage = new HomePage(driver);
        const heroDetailsPage = new HeroDetailsPage(driver);

        // 1. Открыть главную страницу сайта
        await homePage.open();
        Logger.log('открытие страницы: Успешно')

        // 2. Перейти в раздел "Герои"
        await homePage.clickHeroesLink();

        // 3. Выбрать нужного героя (самому или при помощи удобного фильтра)
        const heroName = 'Axe'; // Укажите имя нужного героя
        await heroDetailsPage.clickHero(heroName);
        Logger.log('открытие страницы определенного героя: Успешно')

        await driver.sleep(5000);

        await heroDetailsPage.selectAbility('Berserker\'s Call'); // Укажите название способности
        Logger.log('просмотр способности: Успешно')

        await driver.sleep(5000); // Пауза для просмотра результата
    } finally {
        await driver.sleep(5000);
        // Закрыть веб-драйвер после выполнения теста
        await driver.quit();
    }
}

runTest();
