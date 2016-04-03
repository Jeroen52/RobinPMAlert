// ==UserScript==
// @name         RobinPMAlert
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Messages all inactive people in your robin room
// @author       fedorg
// @include      https://www.reddit.com/message/compose*
// @updateURL    https://github.com/fedorg/robinpmalert/raw/master/RPMA.user.js
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    
    var message = 'The most HUGE merge (KuPrlits with Piiaan) is about to happen. In about 10 MINUTES, we will need to vote again. So, put on your browser and autovote or be there at around 18:10 (EDT)! www.reddit.com/robin';
    var subject = 'Robin needs your help';

    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function send(uname) {
        var unamebox = $('input[name="to"]');
        var subbox = $('input[name="subject"]');
        var msgbox = $('.usertext').find('textarea,:text').each(function() {
            $(this).val(message);
        });
        var button = $('button[name="send"]');
        unamebox.val(uname);
        subbox.val(subject);
		setTimeout(function(){button.click();}, 1000);
    }
    
	function loop(afkUsernames) {
		var uname = afkUsernames[random(0, afkUsernames.length)];
		send(uname);
		var rand_delay = 20000 + random(0, 10) * 1000;
		setTimeout(function(){loop(afkUsernames);}, rand_delay);
	}
    
	$(document).ready(function() {
        $.get("/robin/", function(a) {
            var start = "{" + a.substring(a.indexOf("\"robin_user_list\": ["));
            var end = start.substring(0, start.indexOf("}]") + 2) + "}";
            var list = JSON.parse(end).robin_user_list;
            var afkUsernames = list.filter(function(user) { return !user.present; })
            .map(function(user){ return user.name; });
            loop(afkUsernames);
        });
    });
	
})();