/**
 * @jest-environment jsdom
 */

/**
 * This can act as a boilerplate
 * This will be the same for every test file
 * And will always be the first block of code
 */
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})