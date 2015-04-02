// ==UserScript==
// @name        RandomFlair
// @namespace   http://bruno02468.com/
// @version     2.0
// @description Randomize your flair!
// @match       http://*.spooks.me/*
// @author      Bruno02468
// ==/UserScript==

// How to use:
//     1) Save a copy of the script to your hard drive.
//     2) Edit that copy to fit your needs.
//     3) Open it in your browser to load it as a UserScript.
// (You'll need basic scripting and userscript knowledge...)

//CONFIGURATION - EDIT THOSE VARIABLES
var flairfont = "Sanchez";                                  // The font used in the flair
var messagefont = "Source Code Pro";                        // The font used in the messages
var prefix = "/^";                                          // Comes before all flairs e.g. size tag
var flairbg = "#272822";                                    // The background color for all flairs
var messagebg = "#272822";                                  // The background color for all messages
var messagecolor = "#81FF09";                               // The text color for all messages
var palette = ["#F92672", "#66D9EF", "#81FF09", "#FD971F"]; // The palette used to generate the flair
//END OF CONFIGURATION - DON'T EDIT ANYTHING BELOW UNLESS YOU'RE A CODER


var preflair = "$" + flairfont + "|" + prefix;
CLIENT.attributes.font = messagefont;
CLIENT.attributes.color = messagebg + messagecolor;


function randomColor() {
    return palette[Math.floor(Math.random() * palette.length)]
}

function makeNewFlair() {
    var flair = preflair + "#" + flairbg;
    for (c in CLIENT.attributes.nick) {
        flair += randomColor() + CLIENT.attributes.nick[c];
    }
    CLIENT.attributes.flair = flair;
    return flair;
}
makeNewFlair();

CLIENT.on('message', function(data) {
    if (data.nick !== undefined) {
        var name = data.nick;
        if (name == CLIENT.attributes.nick) {
            makeNewFlair();
        }
    }
});