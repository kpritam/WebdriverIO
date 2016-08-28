var expect = require('chai').expect;
var HomePage = require('../../src/pageobjects/home.page');
var FurniturePage = require('../../src/pageobjects/furniture.page');
var FineartPage = require('../../src/pageobjects/fineart.page');
var JewelaryandwatchPage = require('../../src/pageobjects/fashion.page');
var FashionPage = require('../../src/pageobjects/jewelaryandwatch.page');

describe('Suite 1 => Header Text', function () {
    it('should be FURNITURE', function () {
        console.log(".....................Test execution started........................");
        console.log("TC => Navigate to FURNITURE page");
        console.log("1. Opening homepage.");
        HomePage.open();
        console.log("2. Clicking on furniture menu item.");
        FurniturePage = HomePage.clickOnFurnitureMenuItem();
        console.log("3. Navigated to Furniture page");
        console.log("4. Header Text -> " + FurniturePage.getHeaderText());
        expect(FurniturePage.getHeaderText()).to.be.equal("Furniture");
        console.log(".....................Test execution finished.......................");
    });

    it('should be JEWELARY & WATCH', function () {
        console.log(".....................Test execution started........................");
        console.log("TC => Navigate to JEWELARY & WATCH page");
        console.log("1. Opening homepage.");
        HomePage.open();
        console.log("2. Clicking on JEWELARY & WATCH menu item ...");
        JewelaryandwatchPage = HomePage.clickOnJewelaryAndWatchesMenuItem();
        console.log("3. Navigated to JEWELARY & WATCH page");
        console.log("4. Header Text -> " + JewelaryandwatchPage.getHeaderText());
        expect(JewelaryandwatchPage.getHeaderText()).to.be.equal("Jewelry & Watches");
        console.log(".....................Test execution finished.......................");
    });

    it('should be FINE ART', function () {
        console.log(".....................Test execution started........................");
        console.log("TC => Navigate to FINE ART page");
        console.log("1. Opening homepage.");
        HomePage.open();
        console.log("2. Clicking on FINE ART menu item ...");
        FineartPage = HomePage.clickOnFineArtMenuItem();
        console.log("3. Navigated to FINE ART page");
        console.log("4. Header Text -> " + FineartPage.getHeaderText());
        expect(FineartPage.getHeaderText()).to.be.equal("Fine Art");
        console.log(".....................Test execution finished.......................");
    });

    it('should be FASHION', function () {
        console.log(".....................Test execution started........................");
        console.log("TC => Navigate to FASHION page");
        console.log("1. Opening homepage.");
        HomePage.open();
        console.log("2. Clicking on FASHION menu item ...");
        FashionPage = HomePage.clickOnFashionMenuItem();
        console.log("3. Navigated to FASHION page");
        console.log("4. Header Text -> " + FashionPage.getHeaderText());
        expect(FashionPage.getHeaderText()).to.be.equal("Fashion");
        console.log(".....................Test execution finished.......................");
    });


});
