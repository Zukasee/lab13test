const { Builder } = require('selenium-webdriver');
const HomePage = require('../pages/HomePage');
const HeroesPage = require('../models/forSearchHeroByAttribute');
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

        // Выбор атрибута Strength
        await heroesPage.selectStrengthAttribute();
        Logger.log('выбор определенного атрибута: Успешно')

        // Пауза перед поиском героев
        await driver.sleep(5000);

        // Переход на страницу героя Axe
        await heroesPage.clickAxeHero();
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
