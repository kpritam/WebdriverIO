var assert = require('chai').assert;
var HomePage = require('../../src/pageobjects/home.page');
var SearchresultsPage = require('../../src/pageobjects/searchresults.page');


var searchTexts = ['Oak Wood Table', 'Cat Painting', 'Gold Engagement Ring', 'Chanel Handbag'];

searchTexts.forEach(function (searchText) {
    describe('Suite 2 => Search page', function () {
        it('should display results with total count.', function () {
            console.log(".....................Test execution started........................");
            console.log("TC Name -> " + searchText + " search");
            console.log("1. Opening homepage.");
            HomePage.open();
            console.log("2. Entering " + searchText + " in the search box.");

            HomePage.searchForItem(searchText);
            
            assert.equal(SearchresultsPage.getSearchResultHeaderText(), '\"' + searchText.toLowerCase() + '\"', "Correct header text should be present.");
            console.log("4. Header text found => " + SearchresultsPage.getSearchResultHeaderText());
            assert.isTrue(SearchresultsPage.isSearchResultCountPresent(), "Search Result count should be present on the page.");
            console.log("6. Total " + SearchresultsPage.getSearchResultCount().split(' ').slice(0, 1) + " results found for " + searchText);
            console.log("......................Test execution finished........................");


        })
    });
});
