var page = require('./page');

var furniturePage = Object.create(page, {
    /**
     * define elements
     */
    header:     { get: function () { return browser.element('h1'); } },

    /**
     * define or overwrite page methods
     */
    getHeaderText: { value: function() {
        return this.header.getText();
    } }
});

module.exports = furniturePage
