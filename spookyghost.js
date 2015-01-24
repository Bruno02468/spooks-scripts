// ==UserScript==
// @name         Spoopy Ghost 2
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://this.spooks.me/
// @grant        none
// ==/UserScript==

latest = null

CLIENT.on("message", function(message){
    var flaireg = /(#(?:(?:alice|cadet|cornflower|dark(?:slate)?|deepsky|dodger|light(?:sky|steel)?|medium(?:slate)?|midnight|powder|royal|sky|slate|steel)?blue|(?:antique|floral|ghost|navajo)?white|aqua|(?:medium)?aquamarine|azure|beige|bisque|black|blanchedalmond|(?:blue|dark)?violet|(?:rosy|saddle|sandy)?brown|burlywood|chartreuse|chocolate|(?:light)?coral|cornsilk|crimson|(?:dark|light)?cyan|(?:dark|pale)?goldenrod|(?:dark(?:slate)?|dim|light(?:slate)?|slate)?gr(?:a|e)y|(?:dark(?:olive|sea)?|forest|lawn|light(?:sea)?|lime|medium(?:sea|spring)|pale|sea|spring|yellow)?green|(?:dark)?khaki|(?:dark)?magenta|(?:dark)?orange|(?:medium|dark)?orchid|(?:dark|indian|(?:medium|pale)?violet|orange)?red|(?:dark|light)?salmon|(?:dark|medium|pale)?turquoise|(?:deep|hot|light)?pink|firebrick|fuchsia|gainsboro|gold|(?:green|light(?:goldenrod)?)?yellow|honeydew|indigo|ivory|lavender(?:blush)?|lemonchiffon|lime|linen|maroon|(?:medium)?purple|mintcream|mistyrose|moccasin|navy|oldlace|olive(?:drab)?|papayawhip|peachpuff|peru|plum|seashell|sienna|silver|snow|tan|teal|thistle|tomato|wheat|whitesmoke)|#(?:[a-f0-9]{3}){1,2}|\/\!\!|\/[+^\-~*#@%_!]|\$.+?\||\|)|(.)/gi;
    var coloreg = /(?:^|[^#])#((?:alice|cadet|cornflower|dark(?:slate)?|deepsky|dodger|light(?:sky|steel)?|medium(?:slate)?|midnight|powder|royal|sky|slate|steel)?blue|(?:antique|floral|ghost|navajo)?white|aqua|(?:medium)?aquamarine|azure|beige|bisque|black|blanchedalmond|(?:blue|dark)?violet|(?:rosy|saddle|sandy)?brown|burlywood|chartreuse|chocolate|(?:light)?coral|cornsilk|crimson|(?:dark|light)?cyan|(?:dark|pale)?goldenrod|(?:dark(?:slate)?|dim|light(?:slate)?|slate)?gr(?:a|e)y|(?:dark(?:olive|sea)?|forest|lawn|light(?:sea)?|lime|medium(?:sea|spring)|pale|sea|spring|yellow)?green|(?:dark)?khaki|(?:dark)?magenta|(?:dark)?orange|(?:medium|dark)?orchid|(?:dark|indian|(?:medium|pale)?violet|orange)?red|(?:dark|light)?salmon|(?:dark|medium|pale)?turquoise|(?:deep|hot|light)?pink|firebrick|fuchsia|gainsboro|gold|(?:green|light(?:goldenrod)?)?yellow|honeydew|indigo|ivory|lavender(?:blush)?|lemonchiffon|lime|linen|maroon|(?:medium)?purple|mintcream|mistyrose|moccasin|navy|oldlace|olive(?:drab)?|papayawhip|peachpuff|peru|plum|seashell|sienna|silver|snow|tan|teal|thistle|tomato|wheat|whitesmoke|(?:[a-f0-9]{3}){1,2})/i
    var bgreg = /##((?:alice|cadet|cornflower|dark(?:slate)?|deepsky|dodger|light(?:sky|steel)?|medium(?:slate)?|midnight|powder|royal|sky|slate|steel)?blue|(?:antique|floral|ghost|navajo)?white|aqua|(?:medium)?aquamarine|azure|beige|bisque|black|blanchedalmond|(?:blue|dark)?violet|(?:rosy|saddle|sandy)?brown|burlywood|chartreuse|chocolate|(?:light)?coral|cornsilk|crimson|(?:dark|light)?cyan|(?:dark|pale)?goldenrod|(?:dark(?:slate)?|dim|light(?:slate)?|slate)?gr(?:a|e)y|(?:dark(?:olive|sea)?|forest|lawn|light(?:sea)?|lime|medium(?:sea|spring)|pale|sea|spring|yellow)?green|(?:dark)?khaki|(?:dark)?magenta|(?:dark)?orange|(?:medium|dark)?orchid|(?:dark|indian|(?:medium|pale)?violet|orange)?red|(?:dark|light)?salmon|(?:dark|medium|pale)?turquoise|(?:deep|hot|light)?pink|firebrick|fuchsia|gainsboro|gold|(?:green|light(?:goldenrod)?)?yellow|honeydew|indigo|ivory|lavender(?:blush)?|lemonchiffon|lime|linen|maroon|(?:medium)?purple|mintcream|mistyrose|moccasin|navy|oldlace|olive(?:drab)?|papayawhip|peachpuff|peru|plum|seashell|sienna|silver|snow|tan|teal|thistle|tomato|wheat|whitesmoke|(?:[a-f0-9]{3}){1,2})/i
    var fontreg = /\$([\w \-\,Â®]*)\|/
    if(message.type != "chat-message")
        return;
    if(message.nick != CLIENT.attributes.nick && message.flair){
        console.log(message)
        var parts = []
        var isChar = true
        var flair = {bg:"",
                     color: "",
                     font: ""}
        while((found = flaireg.exec(message.flair)) !== null){
            console.log(found)
            if(found[2]){
                isChar = true
            }else{
                if(isChar){
                    isChar = false
                    parts.push(found[1])
                }else{
                   	parts[parts.length-1] = parts[parts.length-1]+found[1]
                }
            }
        }
        flair.parts = parts
        if((found = coloreg.exec(message.message)) !== null){
            flair.color = found[1]
        }
        if((found = bgreg.exec(message.message)) !== null){
            flair.bg = found[1]
        }
        if((found = fontreg.exec(message.message)) !== null){
            flair.font = found[1]
        }
        if(flair.parts.length){
            latest = flair
        }
    }
})

CLIENT.submito = CLIENT.submit
CLIENT.submit = function(message){
    if(/^\//.exec(message)){
       	CLIENT.submito(message)
        return
    }
    chars = CLIENT.attributes.nick.split('')
    if(!latest){
        CLIENT.submito(message)
        return;
    }
    var parts = latest.parts.slice()
    while(chars.length > parts.length){
        var index = Math.floor(Math.random() * (chars.length-1));
        chars.splice(index, 2, chars[index]+chars[index+1]);
    }
    while(parts.length > chars.length){
        var index = Math.floor(Math.random() * (parts.length-1));
        parts.splice(index, 2, parts[index]+parts[index+1]);
    }
    final = ""
    for(var i = 0;i<chars.length;i++){
        final += parts[i]
        final += chars[i]
    }
    CLIENT.attributes.font = latest.font
    if(latest.bg && latest.color){
        CLIENT.attributes.color = "#"+latest.bg+"#"+latest.color
    }else if(latest.bg){
        CLIENT.attributes.color = "+"+latest.bg
    }else if(latest.color){
        CLIENT.attributes.color = latest.color
    }else{
        CLIENT.attributes.color = ""
    }
    CLIENT.attributes.flair=final
    CLIENT.submito(message)
}
