// ==UserScript==
// @name        Flairy
// @namespace   http://bruno02468.com/
// @version     0.1
// @description Randomizes your flair
// @match       http://this.spooks.me/*
// @author      Bruno02468
// ==/UserScript==

//CONFIGURATION
var prefix = "$Roboto|/^";
//END OF CONFIGURATION

var me = CLIENT.attributes.nick;

function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeNewFlair() {
    var flair = prefix;
    for (c in me) {
        flair += randomColor() + me[c];
    }
    CLIENT.attributes.flair = flair;
    console.log(flair);
    return flair;
}
makeNewFlair();

CLIENT.on('message', function(data) {
    if (data.nick !== undefined) {
        var name = data.nick;
        if (name == me) {
            makeNewFlair();
        }
    }
});
