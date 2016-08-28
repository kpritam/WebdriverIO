var page = require('./page');

var searchResultPage = Object.create(page, {
    /**
     * define elements
     */
    searchResultHeaderText:     { get: function () { return browser.element('.results-header-search-term'); } },
    searchResultCount:          { get: function () { return browser.element('.results-header-num-results'); } },

    /**
     * define or overwrite page methods
     */
    getSearchResultHeaderText: { value: function() {
        // console.log("3. Getting header text from search result page.")
        this.searchResultHeaderText.waitForExist(5000);
        return this.searchResultHeaderText.getText();
    } },

    getSearchResultCount: { value: function() {
        // console.log("Getting search result count.");
        this.searchResultCount.waitForExist(5000);
        return this.searchResultCount.getText();
    } },

    isSearchResultCountPresent: { value: function() {
        console.log("5. Verifying search result count present or not.")
        if (this.searchResultCount.isVisible()){
            return true;
        };
        return false;
    } },

});

module.exports = searchResultPage
