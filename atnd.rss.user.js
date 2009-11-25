// ==UserScript==
// @author         haoyayoi
// @name           ATNDRSS
// @namespace      http://atnd.org
// @description    Put RSS icon on ATND user page.
// @include        http://atnd.org/users/*
// ==/UserScript==
//
// 20091126 :: 0.0.1 :: Wrote.


(function(){
    window.addEventListener("load", function(){
        if( document.getElementById('apirss')) { return; } 
        var data = 'data:image/gif;base64,'+
        'R0lGODlhDgAOAOYAANlMAP////qaOfCKIOFwIeiHH9lkI9RKAOOLNvaQMfiSLduGRuKMQ+ONSuqT'+
        'Sd99H+OAH9p5F/KHGe59IuuCKPOEIdlZIvfcwvHJoeSjdey+lPrQpPnNoOl3IvrTqOFoIul9Ku6L'+
        'KvCELOV4Kd5rJdxyKPjIm9taH/LXv9+AH/SMG/vz6vjn1vfl0vHOrO/MqeqCIeeFIPjZuvXRs9Ng'+
        'IPKjUuOQU+OJWuOcUdZ+Seate+SZSuGib+adcOetc+Gfb+2bXOqUXvKvat+NNeqTNeCFNvuaMvOL'+
        'Luy7jO+MMuWkfuGYR/CZSO2siui0jPfDit58PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
        'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
        'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5'+
        'BAEAAFEALAAAAAAOAA4AAAeegACCg4SFBjRKPQ0EICJHCQoKggY5AZYBM0wJAgJGgiQLGRlOKJYc'+
        'nAKCBCU2DAgIPiwBHpyqC5YXQkRLLQECA4IjDBovlk8FOAEmFYIUSSExOxcBNSkaARPNBRIqBUMB'+
        'Mg86AQ4ABxEYARsDDy4BRTwBQeYRK5YDEEgBDT8BTeYQ0q2D4QAIASg3LAiSMKBhhQkdCHwwYOFE'+
        'oYuEAgEAOw==';
        var apirss = {
            API : 'http://api.atnd.org/events/',
            URL : window.location.toString(),
            RSS : '',
        };
        if(apirss.URL.search("\/users\/\d+") ) {
            apirss.URL.match(/users\/(\d+)/);
            apirss.RSS = apirss.API + '?user_id=' + RegExp.$1 + '&format=atom';
        }
        var h1 = document.getElementsByTagName('h1')[0];
        var IMG = document.createElement('img');
        IMG.src = data;
        var RSSInsert = document.createElement('a');
        RSSInsert.href = apirss.RSS;
        RSSInsert.id = "apirss";
        RSSInsert.appendChild(IMG);
        h1.appendChild(RSSInsert);
    },false);
})();
