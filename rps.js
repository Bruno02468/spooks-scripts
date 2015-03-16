/* Rock-Paper-Scissors Bot
 * 
 * Coded by Bruno02468 :^)
 */

// Global variables
var me = "RockPaperScissors";
var banned = ["gaybutts", "DoomsdayMuffinz", "Anonymous", "fingers"];
var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var quit = "quit";

// Anti-flood counter
var wait = 0;
setInterval(function() {if (wait > 0) {wait--;}}, 1);


// Case insensitive string lookup function
String.prototype.contains = function(it) { return this.toLowerCase().indexOf(it.toLowerCase()) != -1; };

// Wrapper for sending
function send(message) {
    CLIENT.submit(message);
}

// Wrapper for PMing
function pm(user, message) {
    send("/pm " + user + "|" + message);
}

// Make JS link
function jslink(script, text) {
    return "/?javascript:" + script + "|[" + text + "]|";
}

// Make JS self PM link
function pmlink(message, text) {
    return jslink("CLIENT.submit('/pm " + me + "\\|" + message + "');", text);
}

// Run game for two strings, returns string as result
function runGame(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a !== rock && a !== paper && a !== scissors || b !== rock && b !== paper && b !== scissors) {
        return false;
    }
    
    if (a == b) {
        return "tie";
    }
    
    if (a == rock) {
        if (b == scissors) {
            return "a";
        } else {
            return "b";
        }
    }
    if (a == paper) {
        if (b == rock) {
            return "a";
        } else {
            return "b";
        }
    }
    if (a == scissors) {
        if (b == paper) {
            return "a";
        } else {
            return "b";
        }
    }   
}

// Setting stuff up
function setup() {
    send("/nick " + me);
    send("/bg url(http://www.wallpaper4me.com/images/wallpapers/rock_paper_scissors_w1.jpeg) center / 100% auto no-repeat");
    send("/flair $Dosis|#009933/^" + me);
    send("/font Titillium Web");
}
setup();

// Command handlers
CLIENT.on('message', function(data) {
    var text = data.message.trim();
    if (data.nick !== undefined)
        var name = data.nick;
    var trueMessage = parser.removeHTML(parser.parse(text)).trim();
    var argumentString = trueMessage.substring(trueMessage.indexOf(" ") + 1);
    var argumentsArray = argumentString.split(" ");
    
    if (name !== me && !(banned.indexOf(name) > -1)) {
        if (text.contains("!duel")) {
            duel(name, argumentString);
        } else if (text.contains("!rps")) {
            startGame(name, argumentsArray[0], argumentsArray[1]);
        } else if (text.contains("!play")) {
            play(name, argumentsArray[0], argumentsArray[1]);
        }
    }
});

var games = [];
var id = -1;

function gameId() {
    id++;
    return id;
}

function duel(caller, subject) {
    var invitation = "#orangeYou asked to duel " + subject + " in a fair game of rock-paper-scissors. Pick your arms.";
    var lrock = pmlink("!rps " + subject + " " + rock, "Rock!");
    var lpaper = pmlink("!rps " + subject + " " + paper, "Paper!");
    var lscissors = pmlink("!rps " + subject + " " + scissors, "Scissors!");
    var lquit = pmlink("!rps " + subject + " " + quit, "Uh... nevermind.");
}

function startGame(caller, subject, start) {
    if (start == "quit") {
        send("#red" + caller + " just gave up on duelling " + subject + "!");
    } else {
        var myId = gameId();
        var lrock = pmlink("!play " + rock + " " + myId, "Rock!");
        var lpaper = pmlink("!play " + paper + " " + myId, "Paper!");
        var lscissors = pmlink("!play " + scissors + " " + myId, "Scissors!");
        var lquit = pmlink("!play " + quit + " " + myId, "I'm a coward and I don't wanna play.");
        var invitation = "#green" + caller + " wants to play rock paper scissors with you!\\nIf you want to play, just click one of those links!";
        invitation += "#orange\\n" + lrock + "\\n" + lpaper + "\\n" + lscissors + "\\n" + lquit;
        pm(subject, invitation);
        pm(caller, "#orangeAwaiting your opponent's decision...");
        games.push([caller, subject, start, false]);
    }
}

function play(caller, command, id) {
    var game = games[id];
    var ended = game[3];
    if (ended) {
        pm(caller, "#redThat game has already ended, dummy!");
    } else if (command = quit) {
        send("#red" + caller + " just pussied out of an RPS duel against " + game[0] + "!");
    } else {
        games[id][3] = true;
        var start = game[2];
        var starter = game[0];
        var end = runGame(start, command);
        if (end == "tie") {
            send("#yellowRock-Paper-Scissors game between " + starter + " and " + caller + ": #redTIE!");
        } else if (end == "a") {
            send("#yellowRock-Paper-Scissors game between " + starter + " and " + caller + ": /*/_" + starter + "| #greenWINS!");
        } else if (end == "b") {
            send("#yellowRock-Paper-Scissors game between " + starter + " and " + caller + ": /*/_" + caller + "| #greenWINS|!");
        }
    }
}