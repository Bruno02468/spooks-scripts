// ==UserScript==
// @name       SpooksBot
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://this.spooks.me/*
// @grant GM_xmlhttpRequest
// @copyright  2012+, You
// ==/UserScript==

//Basic constants

socket = io('/' + window.channel);

fonts = ["ABeeZee","Abel","Abril Fatface","Aclonica","Acme","Actor","Adamina","Advent Pro","Aguafina Script","Akronim","Aladin","Aldrich","Alef","Alegreya","Alegreya Sans","Alegreya Sans SC","Alegreya SC","Alex Brush","Alfa Slab One","Alice","Alike","Alike Angular","Allan","Allerta","Allerta Stencil","Allura","Almendra","Almendra Display","Almendra SC","Amarante","Amaranth","Amatic SC","Amethysta","Anaheim","Andada","Andika","Angkor","Annie Use Your Telescope","Anonymous Pro","Antic","Antic Didone","Antic Slab","Anton","Arapey","Arbutus","Arbutus Slab","Architects Daughter","Archivo Black","Archivo Narrow","Arimo","Arizonia","Armata","Artifika","Arvo","Asap","Asset","Astloch","Asul","Atomic Age","Aubrey","Audiowide","Autour One","Average","Average Sans","Averia Gruesa Libre","Averia Libre","Averia Sans Libre","Averia Serif Libre","Bad Script","Balthazar","Bangers","Basic","Battambang","Baumans","Bayon","Belgrano","Belleza","BenchNine","Bentham","Berkshire Swash","Bevan","Bigelow Rules","Bigshot One","Bilbo","Bilbo Swash Caps","Bitter","Black Ops One","Bokor","Bonbon","Boogaloo","Bowlby One","Bowlby One SC","Brawler","Bree Serif","Bubblegum Sans","Bubbler One","Buda","Buenard","Butcherman","Butterfly Kids","Cabin","Cabin Condensed","Cabin Sketch","Caesar Dressing","Cagliostro","Calligraffitti","Cambo","Candal","Cantarell","Cantata One","Cantora One","Capriola","Cardo","Carme","Carrois Gothic","Carrois Gothic SC","Carter One","Caudex","Cedarville Cursive","Ceviche One","Changa One","Chango","Chau Philomene One","Chela One","Chelsea Market","Chenla","Cherry Cream Soda","Cherry Swash","Chewy","Chicle","Chivo","Cinzel","Cinzel Decorative","Clicker Script","Coda","Coda Caption","Codystar","Combo","Comfortaa","Coming Soon","Concert One","Condiment","Content","Contrail One","Convergence","Cookie","Copse","Corben","Courgette","Cousine","Coustard","Covered By Your Grace","Crafty Girls","Creepster","Crete Round","Crimson Text","Croissant One","Crushed","Cuprum","Cutive","Cutive Mono","Damion","Dancing Script","Dangrek","Dawning of a New Day","Days One","Delius","Delius Swash Caps","Delius Unicase","Della Respira","Denk One","Devonshire","Didact Gothic","Diplomata","Diplomata SC","Domine","Donegal One","Doppio One","Dorsa","Dosis","Dr Sugiyama","Droid Sans","Droid Sans Mono","Droid Serif","Duru Sans","Dynalight","Eagle Lake","Eater","EB Garamond","Economica","Ek Mukta","Electrolize","Elsie","Elsie Swash Caps","Emblema One","Emilys Candy","Engagement","Englebert","Enriqueta","Erica One","Esteban","Euphoria Script","Ewert","Exo","Exo 2","Expletus Sans","Fanwood Text","Fascinate","Fascinate Inline","Faster One","Fasthand","Fauna One","Federant","Federo","Felipa","Fenix","Finger Paint","Fira Mono","Fira Sans","Fjalla One","Fjord One","Flamenco","Flavors","Fondamento","Fontdiner Swanky","Forum","Francois One","Freckle Face","Fredericka the Great","Fredoka One","Freehand","Fresca","Frijole","Fruktur","Fugaz One","Gabriela","Gafata","Galdeano","Galindo","Gentium Basic","Gentium Book Basic","Geo","Geostar","Geostar Fill","Germania One","GFS Didot","GFS Neohellenic","Gilda Display","Give You Glory","Glass Antiqua","Glegoo","Gloria Hallelujah","Goblin One","Gochi Hand","Gorditas","Goudy Bookletter 1911","Graduate","Grand Hotel","Gravitas One","Great Vibes","Griffy","Gruppo","Gudea","Habibi","Hammersmith One","Hanalei","Hanalei Fill","Handlee","Hanuman","Happy Monkey","Headland One","Henny Penny","Herr Von Muellerhoff","Hind","Holtwood One SC","Homemade Apple","Homenaje","Iceberg","Iceland","IM Fell Double Pica","IM Fell Double Pica SC","IM Fell DW Pica","IM Fell DW Pica SC","IM Fell English","IM Fell English SC","IM Fell French Canon","IM Fell French Canon SC","IM Fell Great Primer","IM Fell Great Primer SC","Imprima","Inconsolata","Inder","Indie Flower","Inika","Irish Grover","Istok Web","Italiana","Italianno","Jacques Francois","Jacques Francois Shadow","Jim Nightshade","Jockey One","Jolly Lodger","Josefin Sans","Josefin Slab","Joti One","Judson","Julee","Julius Sans One","Junge","Jura","Just Another Hand","Just Me Again Down Here","Kalam","Kameron","Kantumruy","Karla","Karma","Kaushan Script","Kavoon","Kdam Thmor","Keania One","Kelly Slab","Kenia","Khand","Khmer","Kite One","Knewave","Kotta One","Koulen","Kranky","Kreon","Kristi","Krona One","La Belle Aurore","Lancelot","Lato","League Script","Leckerli One","Ledger","Lekton","Lemon","Libre Baskerville","Life Savers","Lilita One","Lily Script One","Limelight","Linden Hill","Lobster","Lobster Two","Londrina Outline","Londrina Shadow","Londrina Sketch","Londrina Solid","Lora","Love Ya Like A Sister","Loved by the King","Lovers Quarrel","Luckiest Guy","Lusitana","Lustria","Macondo","Macondo Swash Caps","Magra","Maiden Orange","Mako","Marcellus","Marcellus SC","Marck Script","Margarine","Marko One","Marmelad","Marvel","Mate","Mate SC","Maven Pro","McLaren","Meddon","MedievalSharp","Medula One","Megrim","Meie Script","Merienda","Merienda One","Merriweather","Merriweather Sans","Metal","Metal Mania","Metamorphous","Metrophobic","Michroma","Milonga","Miltonian","Miltonian Tattoo","Miniver","Miss Fajardose","Modern Antiqua","Molengo","Molle","Monda","Monofett","Monoton","Monsieur La Doulaise","Montaga","Montez","Montserrat","Montserrat Alternates","Montserrat Subrayada","Moul","Moulpali","Mountains of Christmas","Mouse Memoirs","Mr Bedfort","Mr Dafoe","Mr De Haviland","Mrs Saint Delafield","Mrs Sheppards","Muli","Mystery Quest","Neucha","Neuton","New Rocker","News Cycle","Niconne","Nixie One","Nobile","Nokora","Norican","Nosifer","Nothing You Could Do","Noticia Text","Noto Sans","Noto Serif","Nova Cut","Nova Flat","Nova Mono","Nova Oval","Nova Round","Nova Script","Nova Slim","Nova Square","Numans","Nunito","Odor Mean Chey","Offside","Old Standard TT","Oldenburg","Oleo Script","Oleo Script Swash Caps","Open Sans","Open Sans Condensed","Oranienbaum","Orbitron","Oregano","Orienta","Original Surfer","Oswald","Over the Rainbow","Overlock","Overlock SC","Ovo","Oxygen","Oxygen Mono","Pacifico","Paprika","Parisienne","Passero One","Passion One","Pathway Gothic One","Patrick Hand","Patrick Hand SC","Patua One","Paytone One","Peralta","Permanent Marker","Petit Formal Script","Petrona","Philosopher","Piedra","Pinyon Script","Pirata One","Plaster","Play","Playball","Playfair Display","Playfair Display SC","Podkova","Poiret One","Poller One","Poly","Pompiere","Pontano Sans","Port Lligat Sans","Port Lligat Slab","Prata","Preahvihear","Press Start 2P","Princess Sofia","Prociono","Prosto One","PT Mono","PT Sans","PT Sans Caption","PT Sans Narrow","PT Serif","PT Serif Caption","Puritan","Purple Purse","Quando","Quantico","Quattrocento","Quattrocento Sans","Questrial","Quicksand","Quintessential","Qwigley","Racing Sans One","Radley","Rajdhani","Raleway","Raleway Dots","Rambla","Rammetto One","Ranchers","Rancho","Rationale","Redressed","Reenie Beanie","Revalia","Ribeye","Ribeye Marrow","Righteous","Risque","Roboto","Roboto Condensed","Roboto Slab","Rochester","Rock Salt","Rokkitt","Romanesco","Ropa Sans","Rosario","Rosarivo","Rouge Script","Rubik Mono One","Rubik One","Ruda","Rufina","Ruge Boogie","Ruluko","Rum Raisin","Ruslan Display","Russo One","Ruthie","Rye","Sacramento","Sail","Salsa","Sanchez","Sancreek","Sansita One","Sarina","Satisfy","Scada","Schoolbell","Seaweed Script","Sevillana","Seymour One","Shadows Into Light","Shadows Into Light Two","Shanti","Share","Share Tech","Share Tech Mono","Shojumaru","Short Stack","Siemreap","Sigmar One","Signika","Signika Negative","Simonetta","Sintony","Sirin Stencil","Six Caps","Skranji","Slabo 13px","Slabo 27px","Slackey","Smokum","Smythe","Sniglet","Snippet","Snowburst One","Sofadi One","Sofia","Sonsie One","Sorts Mill Goudy","Source Code Pro","Source Sans Pro","Source Serif Pro","Special Elite","Spicy Rice","Spinnaker","Spirax","Squada One","Stalemate","Stalinist One","Stardos Stencil","Stint Ultra Condensed","Stint Ultra Expanded","Stoke","Strait","Sue Ellen Francisco","Sunshiney","Supermercado One","Suwannaphum","Swanky and Moo Moo","Syncopate","Tangerine","Taprom","Tauri","Teko","Telex","Tenor Sans","Text Me One","The Girl Next Door","Tienne","Tinos","Titan One","Titillium Web","Trade Winds","Trocchi","Trochut","Trykker","Tulpen One","Ubuntu","Ubuntu Condensed","Ubuntu Mono","Ultra","Uncial Antiqua","Underdog","Unica One","UnifrakturCook","UnifrakturMaguntia","Unkempt","Unlock","Unna","Vampiro One","Varela","Varela Round","Vast Shadow","Vesper Libre","Vibur","Vidaloka","Viga","Voces","Volkhov","Vollkorn","Voltaire","VT323","Waiting for the Sunrise","Wallpoet","Walter Turncoat","Warnes","Wellfleet","Wendy One","Wire One","Yanone Kaffeesatz","Yellowtail","Yeseva One","Yesteryear","Zeyada"]
chars = ["​ee","оo","ℂc","℃c","ℇe","℈e","℉f","ℊg","ℋh","ℌh","ℍh","ℎh","ℏh","ℐj","ℑj","ℒj","ℓl","℔l","ℕn","№n","℗p","℘p","ℙp","ℚq","ℛr","ℜr","ℝr","℞r","℟r","℠s","℡t","™t","℣v","ℤz","℥","Ω","℧","ℨ","℩","Åa","ℬb","ℭc","℮e","ℯe","ℰe","ℱf","Ⅎf","ℳm","ℴo","ℵn","ℹi","℺q","℻f","ℽy","⅀e","⅁g","⅂l","⅃l","⅄y","ⅅd","ⅆd","ⅇe","ⅈi","ⅉj","⅊p","⅋p","⅌p","⅍a","ⅎf"]
codes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

//Message throttling

queue = []
latest = 0;

function worker(){
    var message = queue.shift();
    if(message){
        latest = new Date().getTime();
        CLIENT.submit(message, true);
        setTimeout(arguments.callee, 500);
    }
}

function submit(message, source){
    if(source.type=="personal-message")
        message = "/pm "+source.nick+"|"+message
    if(latest > new Date().getTime()-500){
        queue.push(message);
        if(queue.length == 1){
            setTimeout(worker, 500);
        }
    }else{
        latest = new Date().getTime();
        CLIENT.submit(message, true);
    }
    
}

$(function(){
    CLIENT.submito = CLIENT.submit;
    CLIENT.submit = function(text, auto){
        var nick = CLIENT.attributes.nick;
        var font = "Shadows Into Light";
        var unescaped = "$"+font+"|/^/^/^"
        var parts = nick.split('')
        while(parts.length > 6){
            var index = Math.floor(Math.random() * (parts.length-1));
            parts.splice(index, 2, parts[index]+parts[index+1]);
        }
        var hue = Math.random();
        var step = .1
        if(Math.random()<.5)
            step *= -1;
        jQuery.map(parts, function(n) {
            var raw = HSVtoRGB(hue,1,1)
            var color = "#"+codes[Math.floor(raw['r']/16)]+codes[Math.floor(raw['g']/16)]+codes[Math.floor(raw['b']/16)]
            if(/^[0-9A-F]{3}/i.exec(n)){
                color = color[0]+color[1]+color[1]+color[2]+color[2]+color[3]+color[3];
            }
            unescaped = unescaped + color+n;
            hue = (hue + step)%1
            if(hue<0)
                hue+=1
        })
        CLIENT.attributes.flair = unescaped;
        //var hue = Math.random();
        //var raw = HSVtoRGB(hue,1,1)
        //var color = codes[Math.floor(raw['r']/16)]+codes[Math.floor(raw['g']/16)]+codes[Math.floor(raw['b']/16)]
        //CLIENT.attributes.color=color
        
        if(auto || /^\//.exec(text))
        	CLIENT.submito(text);
        else
            CLIENT.submito(text);
    }
})

//helper methods

function makeColor(){
    var c = [0,0,0]
    while(c[0]+c[1]+c[2]<8){
        c = [Math.floor(Math.random()*16),Math.floor(Math.random()*16),Math.floor(Math.random()*16)]
    }
    return "#" + codes[c[0]] + codes[c[1]] + codes[c[2]]
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (h && s === undefined && v === undefined) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
    };
}

//Commands

function flair(message, args){
    /*if(message.flair){
        submit("Run the following command: `/flair "+message.flair.replace(/(#|\||\^)/g, "\\$1")+"`\n      "+"It will look like this: "+message.flair, message);
        return;
    }*/
    var randomIndex = Math.floor(Math.random() * fonts.length);
    var nick = args[1];
    if(nick === "me")
        nick = message.nick;
    var font = fonts[randomIndex];
    var escaped = "\\$"+font+"\\|"
    var unescaped = "$"+font+"|"
    var parts = nick.split('')
    while(parts.length > 5){
        var index = Math.floor(Math.random() * (parts.length-1));
        parts.splice(index, 2, parts[index]+parts[index+1]);
    }
    var hue = Math.random();
    var step = .05
    if(Math.random()<.5)
        step *= -1;
    jQuery.map(parts, function(n) {
        var raw = HSVtoRGB(hue,1,1)
        var color = "#"+codes[Math.floor(raw['r']/16)]+codes[Math.floor(raw['g']/16)]+codes[Math.floor(raw['b']/16)]
        if(/^[0-9A-F]{3}/i.exec(n)){
            color = color[0]+color[1]+color[1]+color[2]+color[2]+color[3]+color[3];
        }
        escaped = escaped + "\\"+color+n;
        unescaped = unescaped + color+n;
        hue = (hue + step)%1
        if(hue<0)
            hue+=1
    })
    submit("Run the following command: `/flair "+escaped+"`\n      "+"It will look like this: "+unescaped, message);
}

function font(message, args){
    var randomIndex = Math.floor(Math.random() * fonts.length);
    var font = fonts[randomIndex];
    submit("I recommend `"+font+"`."+"\n      $"+font+"|Grumpy wizards make toxic brew for the evil Queen and Jack.", message)
}

resps = {}

function image(message, args, hidetext){
    if(resps[args[1]]){
        post(message, resps[args[1]], hidetext)
    }else{
        GM_xmlhttpRequest({
            method: "GET",
            url: "http://api.reddit.com/r/"+args[1]+"/hot.json?limit=100",
            onload: function(response){
                resps[args[1]] = response
                post(message, response, hidetext)
            }
        });
    }
}

function post(message, response, hidetext) {
            var resp = $.parseJSON(response.responseText);
            if(resp.error){
                if(resp.error==403)
                    submit("That's classified.", message)
                else if(resp.error==404)
                    submit("That subreddit \"doesn't exist\".", message)
                else
                	submit("Error "+resp.error+": Could not retrieve posts", message)
            }
            resp = resp.data.children;
            var valid = []
            $.map(resp, function(item){
                if(/(.*)gifv$/.exec(item.data.url))
                   item.data.url =/(.*)gifv$/.exec(item.data.url)[1]+"gif"
                else if(/imgur.com\/\w+/.exec(item.data.url))
                   item.data.url += ".jpg"
                if(/\.(?:gif|jpg|jpeg|png|bmp)$/gi.exec(item.data.url))
                    valid.push(item)
                    });
            if(valid.length==0){
                submit("Thankfully there are no images there.", message);
                return;
            }
            var randomIndex = Math.floor(Math.random() * valid.length);
            var item = valid[randomIndex];
            if(hidetext)
                submit("\n"+item.data.url, message)
            else
            	submit("\\"+item.data.title+"\n"+item.data.url, message)
        }

function mfw(message, args){
    image(message, ["","mfw"], true)
}

ish = {}

function ishyg(message){
    var now = new Date().getTime();
    if(message.nick){
        if(/\>2014/gi.exec(message.message)){
            ish[message.nick] = now;
        }
    }
}

function ishygddt(message, args){
    if(ish[message.nick]>(new Date().getTime())-60000){
        submit("\nhttp://i.imgur.com/SZ37TTh.jpg", message);
        ish[message.nick] = 0;
    }
}

good = [0,11,22,33,44,55,66,77,88,99]

function roll(message){
    return Math.floor(new Date().getTime()/100)%9000000+1000000;
}

function checkem(message, args){
    var num = roll(message)
    var msg = num.toString();
    var streak = 0
    var last = msg[6]
    for(var i = 5;i>=0;i--){
        if(msg[i] == last)
            streak+=1;
        else
            break
    }
    if(num%100==69){
        streak=1;
    }else if(num%1000==420){
        streak=2;
    }
    var result = '`'+msg
    if(streak > 0)
        result+="\n"
    else
        result+='`'
    for(var i = 0;i<4-streak;i++){
        result += " "
    }
    if(streak > 0){
        if(/shrec?k/gi.exec(args[1].toLowerCase()))
            result += "http://i.imgur.com/0gkoWcN.jpg`"
        else
        	result += "http://i.imgur.com/m6DonTH.jpg`"
    }
    submit(result, message)
}

function color(message, args){
    var raw = HSVtoRGB(Math.random(),1,1)
    var color = "#"+codes[Math.floor(raw['r']/16)]+codes[Math.floor(raw['r']%16)]+codes[Math.floor(raw['g']/16)]+codes[Math.floor(raw['g']%16)]+codes[Math.floor(raw['b']/16)]+codes[Math.floor(raw['b']%16)]
    submit("Why don't you try `"+color+"\\"+color+"`?", message);
}

function ratemy(message){
    submit("Fuck you "+message.nick.split(/\W/gi)[0]+" nobody cares.", message)
}

//Command mapping
commands = [
    [/make (.+?) a ?flair/gi,flair],
    [/\!flair (.+?)\b/i, flair],
    [/pick a font/gi, font],
    [/pick a color/gi, color],
    [/\!font/i, font],
    [/\b(?:image|(?:show|post) (?:an image|a pic) from|img) ?\/r\/([\w\+]+)\b/gi, image],
    [/(?:\W|^)\#([\w\+]+)\b/i, image],
    [/\>[mty]fw/gi, mfw],
    [/\>2014/gi, ishyg],
    [/\>/gi, ishygddt],
    [/\b(shrec?k|check|kek|cz+ech|roll+)(em|de+[zs]|dos|in|dem|ing)\b/gi, checkem],
    [/rate my/gi, ratemy]
]

colors = [
    RegExp('#(' + parser.coloreg + ')(.+)$', 'gi'),
    /#{1,2}([\da-f]{6})(.+)$/gi
    ]

//Command Router
last = 0;
timers = {};
notified = {};
odds = 0;
CLIENT.on('message', function(message) {
    console.log(message);
    if(message.type != "personal-message" && message.type != "chat-message")
        return;
    message.message = message.message.replace(RegExp('#(' + parser.coloreg + ')', 'gi'), "").replace(/#{1,2}([\da-f]{3,6})/gi,"").replace(/\$[\w\s]+\|/gi, "")
    try{
    if(!message.nick)
        return
    odds+= .01;
    /*if(Math.random()<odds){
        var re = /\b[\w\-']{5,}\b/g;
        var matches = [];
        var match = re.exec(message.message);
        while(match != null){
            matches.push(match)
            var match = re.exec(message.message);
        }
        if(matches.length){
            odds=0;
            var result = matches[Math.floor(Math.random()*matches.length)][0];
            result = result.substring(0,1).toUpperCase()+result.substring(1,result.length);
            window.setTimeout(function(){submit(result+"? More like... Ebola.", message);
            },3000);
        }
    }*/
    
    var current = new Date().getTime();
    var diff = (current-last)/30000;
    for(timer in timers){
        timers[timer] = Math.max(timers[timer] - diff,0);
        if(timers[timer] == 0){
            delete timers[timer]
        }
    }
    last = current;
    //Filter non-user messages
    if(!message.nick)
        return;
    //Clean bullshit unicode and invisible stuff
    var text = message.message
    $.map(chars, function(char){
        text = text.replace(char[0], char[1])
    })
    text = text.replace(/[^\x20-\x7E]*/g, "")
    message.message = text
    //Find a matching command
    for(var i=0;i<commands.length;i++){
        var command = commands[i]
        var match = command[0].exec(message.message)
        if(match){
            //Spam prevention
            if(timers[message.nick] && timers[message.nick] > 2){
                console.log(notified[message.nick])
                if(!notified[message.nick]){
                    var countdown = Math.ceil((timers[message.nick]-2)*30)+1;
                	CLIENT.submit("/pm "+message.nick+"|*$Droid Sans|#redPlease wait "+countdown.toString()+" seconds before sending any more commands.*")
                    notified[message.nick]=true;
                }
                return;
            }
            delete notified[message.nick];
            timers[message.nick] = (timers[message.nick] || 0) + 1
            //Run the command
            command[1](message, match);
            return;
        }
    }
    }catch(err){
        console.log(err)
    }
})
