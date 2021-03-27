//Example of server side rendering
const path = require('path');
const fs = require('fs/promises');
const { hydrateDocument, renderToString, createWindowFromHtml } = require('./hydrate');
const appShellFilename = path.resolve(__dirname, './src/app-shell.html');


(async () => {
    const appShell = await fs.readFile(appShellFilename, 'utf8');
    const srcHtml = appShell;

    let w = createWindowFromHtml(srcHtml)

    console.log(w);

    const docOptions = {
        title: 'App Shell',
        url: 'http://localhost:3000'
    }
    const results = await renderToString(srcHtml, {
        prettyHtml: true,
        removeScripts: false
    });
    console.log('------------------- RENDER TO STRING-------------------')
    console.log(results.html);
})()