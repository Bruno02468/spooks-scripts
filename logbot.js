/* logbot.js by Bruno */

CLIENT.submit("/nick Logbot");
CLIENT.submit("/mute");
CLIENT.submit("/safe");
CLIENT.submit("Bruno's Logbot now running.");

CLIENT.on('message', function(data) {
    $.ajax({
        url : "http://bruno02468.com/logbot/log.php?x=" + encodeURIComponent(JSON.stringify(data)),
        type : 'GET',
        success : function(data) { console.log("Logged!"); }
    });
});
