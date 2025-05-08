const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

// Här anger vi var testfilen ska hämtas. De konstiga replaceAll-funktionerna ersätter
// mellanslag med URL-säkra '%20' och backslash (\) på Windows med slash (/).
const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver = new Builder().forBrowser('firefox').build();
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

test('The stack should be empty in the beginning', async () => {
    let stack = await driver.findElement(By.id('top_of_stack')).getText();
    expect(stack).toEqual("n/a");
});
/*
describe('Clicking "Pusha till stacken"', () => {
    it('should open a prompt box', async () => {
        let push = await driver.findElement(By.id('push'));
        await push.click();
        let alert = await driver.switchTo().alert();
        await alert.sendKeys("Bananer");
        await alert.accept();
    });*/
    //Ines testar
    it ('vad visas överst i stacken', async () => {
        //lägg till pannkaka
        let push = await driver.findElement(By.id('push'));
        await push.click();
        let alert = await driver.switchTo().alert();
        alert.sendKeys("Pannkaka");
        await alert.accept();

        //lägg till ostkaka
        let pushTwo = await driver.findElement(By.id('push'));
        await pushTwo.click();
        let alertTwo = await driver.switchTo().alert();
        alertTwo.sendKeys("Ostkaka");
        await alertTwo.accept();
        //ta bort ostkaka
        let pop = await driver.findElement(By.id('pop'));
        await pop.click();
        let popAlert = await driver.switchTo().alert();
        //let pop_text = await popAlert.getText();
        //expect(pop_text).toEqual("Tog bort Ostkaka");
        await popAlert.accept();

        // visa det översta 
        let top_stack = await driver.findElement(By.id('peek'));
        await top_stack.click();

        let topStackText = await driver.findElement(By.id('top_of_stack'));

        let topStackTextShow = await topStackText.getText();
        expect(topStackTextShow).toEqual("Pannkaka");
    })
//});


