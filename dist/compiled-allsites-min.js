!function(e,t){e._CMLS=e._CMLS||{},e._CMLS["const"]=e._CMLS["const"]||{},e._CMLS["const"].PLAYER_TUNEGENIE=8471,e._CMLS["const"].PLAYER_TRITON=8468,e._CMLS["const"].PLAYER_POSITION_TOP=80847980,e._CMLS["const"].PLAYER_POSITION_BOTTOM=80667984,e._CMLS.logger=function o(){if(!e._CMLS||!e._CMLS.debug||"object"!=typeof console||!console.debug)return!1;e._CMLS.loggerNamesToColors=e._CMLS.loggerNamesToColors||{};var t,o,n=arguments[0],r=Array.prototype.slice.call(arguments,1);e._CMLS.loggerNamesToColors[n]?(t=e._CMLS.loggerNamesToColors[n].background,o=e._CMLS.loggerNamesToColors[n].complement):(t=Math.floor(16777215*Math.random()).toString(16),o=("000000"+(16777215^parseInt(t,16)).toString(16)).slice(-6),e._CMLS.loggerNamesToColors[n]={background:t,complement:o});var i=new Date;i=i.toISOString()?i.toISOString():i.toUTCString(),r=[].concat(["%c["+n+"]","background: #"+t+"; color: #"+o,i],r),console.debug.apply(console,r)},e._CMLS.now=Date.now||function(){return(new Date).getTime()},e._CMLS.throttle=function(t,o,n){var r,i,a,c=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:e._CMLS.now(),c=null,a=t.apply(r,i),c||(r=i=null)};return function(){var d=e._CMLS.now();s||n.leading!==!1||(s=d);var u=o-(d-s);return r=this,i=arguments,0>=u||u>o?(c&&(clearTimeout(c),c=null),s=d,a=t.apply(r,i),c||(r=i=null)):c||n.trailing===!1||(c=setTimeout(l,u)),a}},e._CMLS.debounce=function(t,o,n){var r,i,a,c,s,l=function(){var d=e._CMLS.now()-c;o>d&&d>=0?r=setTimeout(l,o-d):(r=null,n||(s=t.apply(a,i),r||(a=i=null)))},d=function(){a=this,i=arguments,c=e._CMLS.now();var d=n&&!r;return r||(r=setTimeout(l,o)),d&&(s=t.apply(a,i),a=i=null),s};return d.clear=function(){clearTimeout(r),r=a=i=null},d},e._CMLS.whichPlayer=function(){if(e._CMLS.whichPlayerCache)return e._CMLS.whichPlayerCache;var t={type:null,position:null};return e.tgmp?(t.type=e._CMLS["const"].PLAYER_TUNEGENIE,e.tgmp.options.position&&"bottom"===e.tgmp.options.position.toLowerCase()?t.position=e._CMLS["const"].PLAYER_POSITION_BOTTOM:e.tgmp.options.position&&"top"===e.tgmp.options.position.toLowerCase()&&(t.position=e._CMLS["const"].PLAYER_POSITION_TOP)):e.TDPW&&(t.type=e._CMLS["const"].PLAYER_TRITON,t.position=e._CMLS["const"].PLAYER_POSITION_TOP),e._CMLS.whichPlayerCache=t,e._CMLS.whichPlayerCache},e._CMLS.isHomepage=function(){return"/"===e.location.pathname&&/[\?&]?p=/i.test(e.location.search)===!1},e._CMLS.triggerEvent=function(t,o,n){var r;e.document.createEvent?(r=e.document.createEvent("CustomEvent"),r.initCustomEvent(o,!0,!0,n)):r=new CustomEvent(o,{detail:n}),t.dispatchEvent(r)}}(window),function(e){function t(){e._CMLS.logger(o+" v"+r,arguments)}var o="GLOBALIZE SGROUPS",n="globalizeSGroups",r="0.5";e._CMLS=e._CMLS||{},e._CMLS[n]={cycles:0,timer:null,globalize:function i(){if(!e.googletag.pubads().G||!e.googletag.pubads().G["cms-sgroup"])return e._CMLS[n].cycles>10?void t("Could not retrieve cms-sgroup in a reasonable time, aborting."):(t("Googletag not ready, waiting to retry..."),e._CMLS[n].timer&&(clearTimeout(e._CMLS[n].timer),e._CMLS[n].timer=null),e._CMLS[n].timer=setTimeout(e._CMLS[n].globalize,500),void e._CMLS[n].cycles++);t("Globalizing cms-sgroup"),e._CMLS.cGroups=e._CMLS.cGroups||[],e._CMLS.cGroups=e.googletag.pubads().G["cms-sgroup"];var o=["cms-sgroup"].concat(e._CMLS.cGroups);e.sharedContainerDataLayer=e.sharedContainerDataLayer||[],e.corpDataLayer=e.corpDataLayer||[],t("Firing events");for(var r=0,i=o.length;i>r;r++)e.sharedContainerDataLayer.push({event:o[r]}),e.corpDataLayer.push({event:o[r]}),e._CMLS.triggerEvent(e,"cms-sgroup",o[r])}},e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag.cmd.push(function(){t("Googletag command queue initiated."),e._CMLS[n].globalize()})}(window,void 0),function(e,t){function o(){e._CMLS.logger(n+" v"+i,arguments)}var n="TEADS INJECTOR",r="teadsInjector",i="0.7";if(!e._CMLS[r]&&!e.teads){e._CMLS[r]={getWindowSize:function s(){var t=1e3,o=1e3;return"number"==typeof e.innerWidth?t=e.innerWidth:document.documentElement&&document.documentElement.clientWidth?t=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(t=document.body.clientWidth),t>1e3&&(t=1e3),"number"==typeof e.innerHeight?o=e.innerHeight:document.documentElement&&document.documentElement.clientHeight?o=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(o=document.body.clientHeight),{w:t,h:o}},inboard:function l(t){var o=e._CMLS[r].getWindowSize();e._CMLS[r].inject({pid:t,slot:".wrapper-content",format:"inboard",before:!0,css:"margin: auto !important; padding-top: 5px; padding-bottom: 5px; max-width: 1000px",size:{w:o.w}})},inread:function d(t){e._CMLS[r].inject({pid:t,slot:".loop .post .entry-content p",filter:function(){var t=e.document.getElementsByTagName("body")[0];return t.className.indexOf("single-post")>-1},format:"inread",before:!1,css:"padding-bottom: 10px !important;"})},process:function u(t,n){t&&n&&(o("Received request for "+t+" with PID "+n),e._CMLS[r][t](n))},inject:function g(t){return t.pid&&t.slot&&t.format?(t.components=t.components||{skip:{delay:0}},t.lang=t.lang||"en",t.filter=t.filter||function(){return!0},t.minSlot=t.minSlot||0,t.before=t.before||!1,t.BTF=t.BTF||!1,t.css=t.css||"margin: auto !important;",e._ttf=e._ttf||[],e._ttf.push(t),function(e){var t,o=e.getElementsByTagName("script")[0];t=e.createElement("script"),t.async=!0,t.src="http://cdn.teads.tv/js/all-v1.js",o.parentNode.insertBefore(t,o)}(e.document),void o("Injecting!",t)):!1}};var a=function(){};if(a.prototype=[],a.prototype.push=function(){for(var t=0;t<arguments.length;t++)arguments[t].format&&arguments[t].pid&&e._CMLS[r].process(arguments[t].format,arguments[t].pid)},e._teadsinjector&&e._teadsinjector.length)for(var c=0;c<e._teadsinjector.length;c++)e._teadsinjector[c].format&&e._teadsinjector[c].pid&&e._CMLS[r].process(e._teadsinjector[c].format,e._teadsinjector[c].pid);e._teadsinjector=new a,o("Listening for future requests.")}}(window),function($,e,t){function o(){e._CMLS.logger(n+" v"+i,arguments)}if(!$||!$.fn.jquery)throw{message:"Auto-scroll script called without supplying jQuery."};var n="AUTO SCROLL",r="cmlsAutoScrollPastLeaderboard",i="0.7",a={timeout:.15,leaderboardSelector:'.wrapper-header div[id^="div-gpt-ad"]:first'};e._CMLS[r]||(e._CMLS[r]={scrolled:!1,disabled:!1,timer:null,cache:{},regenerateCache:function c(){this.cache.leaderboard=$(a.leaderboardSelector),this.cache.player=$("#tgmp_frame:first,.tdpw:first"),this.cache.window=$(e)},leaderboardOnTop:function s(){if(!this.cache.leaderboard)return o("Leaderboard was not cached."),!1;var e=this.cache.leaderboard.offset();return this.playerOnTop()?e.top<150:e.top<50},playerOnTop:function l(){var t=e._CMLS.whichPlayer();return t.position===e._CMLS["const"].PLAYER_POSITION_TOP?!0:!1},generateScrollToPosition:function d(){if(this.cache.leaderboard){var e=this.cache.leaderboard.offset();return this.playerOnTop()?e.top-this.cache.player.height()+this.cache.leaderboard.height():e.top+this.cache.leaderboard.height()}return 0},hasScrolledPastLeaderboard:function u(){return this.scrolled===!0?!0:this.cache.window.scrollTop()>=this.generateScrollToPosition()?(this.scrolled=!0,!0):!1},conditionsGood:function g(){return this.disabled?"Auto-scroll is disabled for this site.":e._CMLS.isHomepage()?this.leaderboardOnTop()?this.hasScrolledPastLeaderboard()?"Already scrolled passed leaderboard.":!0:"Leaderboard is not on top.":"Not on homepage."},scrollPage:function m(){var e=this;o("Pre-animation conditions check.");var t=this.conditionsGood();t!==!0&&(o("Conditions check failed.",t),this.stopTimer()),$("html,body").animate({scrollTop:e.generateScrollToPosition()},{queue:r,duration:550}).dequeue(r)},initTimer:function p(){o("Initializing scroll timer.");var e=this,t=e.conditionsGood();return t!==!0?(o("Conditions check after leaderboard render found bad conditions.",t),void e.stopTimer()):($("html,body").clearQueue(r).stop(r,!0),clearTimeout(this.timer),this.timer=null,void(this.timer=setTimeout(function(){e.scrollPage()},6e4*a.timeout)))},stopTimer:function h(){o("Stopping timer, clearing animation queue."),$("html,body").clearQueue(r).stop(r,!0),clearTimeout(this.timer),this.timer=null},resetTimer:function f(){o("Resetting scroll timer."),this.initTimer()},init:function S(){o("Initializing auto-scroll library."),this.regenerateCache();var t=this,n=this.conditionsGood();return n!==!0?void o("Init check found bad conditions.",n):(this.cache.window.on("scroll."+r,e._CMLS.throttle(function(){t.hasScrolledPastLeaderboard()&&(t.scrolled=!0,t.stopTimer(),t.cache.window.off("scroll."+r))},500)),e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag.cmd.push(function(){e.googletag.pubads().addEventListener("slotRenderEnded",function n(r){if(!r.isEmpty&&"top"===r.slot.getTargeting("pos")){o("Caught leaderboard render event."),t.regenerateCache();var i=t.conditionsGood();i!==!0?(o("Conditions check after leaderboard render found bad conditions.",i),t.stopTimer()):t.resetTimer(),e.googletag.pubads().removeEventListener("slotRenderEnded",n)}})}),"complete"===e.document.readyState?void this.initTimer():void this.cache.window.on("load",function(){t.initTimer()}))}},$(function(){e._CMLS[r].init()}))}(jQuery,window);
//# sourceMappingURL=./compiled-allsites-min.js.map