/* logbot.js by Bruno */

CLIENT.on('message', function(data) {
    $.ajax({
        url : "http://bruno02468.com/logbot/log.php?x=" + encodeURIComponent(data),
        type : 'GET',
        success : function(data) { console.log("Logged!"); }
    });
}
