const puppeteer = require('puppeteer');

(async () => {
    // Nuestro codigo
    console.log('Lanzamos Navegador!');
    // sont browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false });

    const pagee = await browser.newPage();
    await pagee.goto('http:es.wikipedia.org/wiki/Node.js')

    var titulo1 = await pagee.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
    })

    console.log(titulo1);

    console.log('Cerramos navegador');
    browser.close();
    console.log('Navegador cerrado');
})();