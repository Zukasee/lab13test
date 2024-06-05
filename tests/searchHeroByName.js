const { Builder } = require('selenium-webdriver');
const HomePage = require('../pages/HomePage');
const HeroesPage = require('../models/forSearchHeroByName');
const Logger = require('../Logger')

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        const homePage = new HomePage(driver);
        const heroesPage = new HeroesPage(driver);

        // Открыть главную страницу сайта
        await homePage.open();
        Logger.log('открытие страницы: Успешно')

        // Переход на страницу героев
        await homePage.clickHeroesLink();

        // Указать имя нужного героя
        const heroName = 'Axe'; // Укажите имя нужного героя
        await heroesPage.searchHero(heroName);
        Logger.log('ввод в поиск нужного героя: Успешно')

        // Пауза для обновления списка героев
        await driver.sleep(2000);

        // Найти и кликнуть на нужного героя
        await heroesPage.clickHero(heroName);
        Logger.log('открытие страницы нужного героя: Успешно')

        // Пауза для просмотра результата
        await driver.sleep(5000);
    } finally {
        await driver.sleep(5000);
        // Закрыть веб-драйвер после выполнения теста
        await driver.quit();
    }
}

runTest();
