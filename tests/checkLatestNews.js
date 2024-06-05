const { Builder, By } = require('selenium-webdriver');
const NewsPage = require('../pages/NewsPage');
const NewsModel = require('../models/forCheckLatestNews');
const Logger = require('../Logger')

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        const newsPage = new NewsPage(driver);
        const newsModel = new NewsModel(driver);

        // Открыть главную страницу сайта
        await newsPage.open();
        Logger.log('открытие страницы: Успешно')

        // Перейти в раздел "Новости"
        await newsPage.clickNewsLink();

        await driver.sleep(5000);

        // Нажать на кнопку обновления
        await newsModel.clickRefreshButton();
        Logger.log('переход на обновления: Успешно')

        // Пауза для просмотра результата
        await driver.sleep(5000);

    } finally {
        await driver.sleep(5000);
        // Закрыть веб-драйвер после выполнения теста
        await driver.quit();
    }
}

runTest();
