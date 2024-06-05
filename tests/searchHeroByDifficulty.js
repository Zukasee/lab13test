const { Builder } = require('selenium-webdriver');
const HomePage = require('../pages/HomePage');
const HeroesPage = require('../models/forSearchHeroByDifficulty');
const Logger = require('../Logger')

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        const homePage = new HomePage(driver);
        const heroesPage = new HeroesPage(driver);

        // 1. Открыть главную страницу сайта
        await homePage.open();
        Logger.log('открытие страницы: Успешно')

        // 2. Перейти в раздел "Герои"
        await homePage.clickHeroesLink();

        // Выбор атрибута Strength
        await heroesPage.selectStrengthAttribute();
        Logger.log('выбор нужной сложности: Успешно')

        // Пауза перед поиском героев
        await driver.sleep(5000);

        // 4. Найти из представленного списка нужного героя
        const heroName = 'Axe'; // Укажите имя нужного героя
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
