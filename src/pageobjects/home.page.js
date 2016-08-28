

var page = require('./page');


var homePage = Object.create(page, {
    /**
     * define elements
     */
    furniture:      { get: function () { return browser.element('=FURNITURE'); } },
    fineArt:        { get: function () { return browser.element('=FINE ART'); } },
    jewelaryWatch:  { get: function () { return browser.element('=JEWELRY & WATCHES'); } },
    fashion:        { get: function () { return browser.element('=FASHION'); } },
    searchBox:      { get: function () { return browser.element('[name="q"]'); } },
    searchButton:   { get: function () { return browser.element('button[title="Search"]'); } },
    signUpToFollowSearchText:   { get: function () { return browser.element('.auth-modal-header-title'); } },
    closeButtonOfFollowSearchPopUp:   { get: function () { return browser.element('.auth-modal-close'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'https://www.1stdibs.com/');
        
    } },

    clickOnFurnitureMenuItem: { value: function () {
        this.furniture.click();
        this.closeSignUpToFollowSearchPopUp();
    } },

    clickOnFineArtMenuItem: { value: function () {
        this.fineArt.click();
        this.closeSignUpToFollowSearchPopUp();
    } },

    clickOnFashionMenuItem: { value: function () {
        this.fashion.click();
        this.closeSignUpToFollowSearchPopUp();
    } },

    clickOnJewelaryAndWatchesMenuItem: { value: function () {
        this.jewelaryWatch.click();
        this.closeSignUpToFollowSearchPopUp();

    } },
    
    closeSignUpToFollowSearchPopUp: {value: function () {
        if(this.closeButtonOfFollowSearchPopUp.isVisible()){
            console.log("       ...........................................");
            console.log("       ..Found unexpected pop up, closing it......");
            console.log("       ...........................................");
            this.closeButtonOfFollowSearchPopUp.click();
            console.log("       ..Closed pop up, continuing with execution.");
            console.log("       ...........................................");
        }

    }},

    searchForItem: { value: function (searchTerm) {
        browser.pause(2000);
        this.closeSignUpToFollowSearchPopUp();
        this.searchBox.waitForEnabled(5000);
        this.searchBox.setValue(searchTerm);
        this.searchButton.click();

    } },


});

module.exports = homePage
