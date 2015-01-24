/*****************************************
 *           --- COPYCAT.JS ---           *
 *                                        *
 *         Spooks copycat script!         *
 *         Written by Bruno02468!         *
 *                                        *
 *                                        *
 *     Usage: it'll listen to all         *
 *     messages sent, and save styles     *
 *     and flairs. Fire up console,       *
 *     type in copycat("name") and        *
 *     hit enter to copy that user's      *
 *     flair and style. Have fun.         *
 *                                        *
 *     When done, do "revert()" to go     *
 *     back to old username and flair.    *
 *                                        *
 *     See you around!                    *
 *                                        *
 *                                        *
 *          ~ Bruno                       *
 *                                        *
 *****************************************/
 
var usernames = [];
var styles  = [];
var flairs = [];
 
var currentName = CLIENT.attributes.nick;
 
// For debugging purposes
var verbose = true;
 
console.log("Copycat.js now running!");
 
CLIENT.on('message', function(data) {
    if (data.nick !== undefined && data.flair !== undefined && data.message !== undefined) {
       
        var username = data.nick;
        var trueMessage = parser.removeHTML(parser.parse(data.message));
       
        var reg = new RegExp(trueMessage, "g");
        var style = data.message.replace(reg, "");
        if (style == "") {
            style = "default";
        }
       
        var flair = makeFlair(data.flair);
        if (data.flair == "undefined") {
            flair = "undefined";
        }
        var index = usernames.indexOf(username);
       
        if (index > -1) {
            styles[index] = style;
            flairs[index] = flair;
        } else {
            usernames.push(username);
            styles.push(style);
            flairs.push(flair);
        }
       
        log("Absorbed " + username + "!");
    }
});
 
 
function copycat(name) {
    var index = usernames.indexOf(name);
   
    if (index > -1) {
        CLIENT.submit("/style " + styles[index]);
        CLIENT.submit("/flair " + flairs[index]);
        console.log("Done!");
    } else {
        console.log("I can't copycat something I've never seen, dummy!");
    }
}
 
function makeFlair(str) {
    var mini = /(#(?:aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)|#(?:[a-f0-9]{3}){1,2}|\/[+^\-~*#@%_!]|\$.+?\||\|)|(.)/gi;
    var ret = str.replace(mini, 'Â§');
    log("Got: " + str);
    log("Untaping: " + ret);
    log("Returning: " + untape(ret));
    return untape(ret);
}
 
function untape(str) {
    var ret = str;
    var tape = currentName;
    var count = tape.length;
    for (var i = 0; i < count; i++) {
        ret = ret.replace(/Â§/, tape[0]);
        tape = tape.substring(1);
    }
    ret += tape;
    ret = ret.replace(/Â§/g ,"");
    return ret;
}
 
function revert() {
    CLIENT.submit("/style " + CLIENT._previousAttributes.style);
    CLIENT.submit("/flair " + CLIENT._previousAttributes.flair);
}
 
function log(s) {
    if (verbose) {
        console.log("[Copycat.js] " + s);
    }
}
