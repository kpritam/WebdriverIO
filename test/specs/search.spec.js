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

/*
 describe('Search', function () {
 it('should display Oak Wood Table results', function () {
 console.log("Running Search Oak Wood Table test");
 HomePage.open();
 console.log("Searching for Oak Wood Table ...");
 HomePage.searchForItem("Oak Wood Table");
 console.log(SearchresultsPage.getSearchResultHeaderText());
 assert.equal(SearchresultsPage.getSearchResultHeaderText(), '\"oak wood table\"', "Correct header text should be present.");
 console.log(SearchresultsPage.isSearchResultCountPresent());
 assert.isTrue(SearchresultsPage.isSearchResultCountPresent(), "Search Result count should be present on the page." );

 });*/
/*
 it('should display Cat Painting results', function () {
 console.log("Running Search Cat Painting test");
 HomePage.open();
 console.log("Searching for Cat Painting ...");
 HomePage.searchForItem("Cat Painting");
 console.log(SearchresultsPage.getSearchResultHeaderText());
 assert.equal(SearchresultsPage.getSearchResultHeaderText(), '\"cat painting\"', "Correct header text should be present.");
 console.log(SearchresultsPage.isSearchResultCountPresent());
 assert.isTrue(SearchresultsPage.isSearchResultCountPresent(), "Search Result count should be present on the page." );

 });


 it('should display Gold Engagement Ring results', function () {
 console.log("Running Search Gold Engagement Ring test");
 HomePage.open();
 console.log("Searching for Gold Engagement Ring...");
 HomePage.searchForItem("Gold Engagement Ring");
 console.log(SearchresultsPage.getSearchResultHeaderText());
 assert.equal(SearchresultsPage.getSearchResultHeaderText(), '\"gold engagement ring\"', "Correct header text should be present.");
 console.log(SearchresultsPage.isSearchResultCountPresent());
 assert.isTrue(SearchresultsPage.isSearchResultCountPresent(), "Search Result count should be present on the page." );

 });

 it('should display Chanel Handbag results', function () {
 console.log("Running Search Chanel Handbag test");
 HomePage.open();
 console.log("Searching for Chanel Handbag ...");
 HomePage.searchForItem("Chanel Handbag");
 console.log(SearchresultsPage.getSearchResultHeaderText());
 assert.equal(SearchresultsPage.getSearchResultHeaderText(), '\"chanel handbag\"', "Correct header text present.");
 console.log(SearchresultsPage.isSearchResultCountPresent());
 assert.isTrue(SearchresultsPage.isSearchResultCountPresent(), "Search Result count should be present on the page." );

 });
 });*/
