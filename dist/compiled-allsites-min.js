!function(o,e){o._CMLS=o._CMLS||{},o._CMLS["const"]=o._CMLS["const"]||{},o._CMLS["const"].PLAYER_TUNEGENIE=8471,o._CMLS["const"].PLAYER_TRITON=8468,o._CMLS["const"].PLAYER_POSITION_TOP=80847980,o._CMLS["const"].PLAYER_POSITION_BOTTOM=80667984,o._CMLS.logger=function t(){if(!o._CMLS||!o._CMLS.debug||"object"!=typeof console||!console.debug)return!1;o._CMLS.loggerNamesToColors=o._CMLS.loggerNamesToColors||{};var e,t,n=arguments[0],i=Array.prototype.slice.call(arguments,1);o._CMLS.loggerNamesToColors[n]?(e=o._CMLS.loggerNamesToColors[n].background,t=o._CMLS.loggerNamesToColors[n].complement):(e=Math.floor(16777215*Math.random()).toString(16),t=("000000"+(16777215^parseInt(e,16)).toString(16)).slice(-6),o._CMLS.loggerNamesToColors[n]={background:e,complement:t});var r=new Date;r=r.toISOString()?r.toISOString():r.toUTCString(),i=[].concat(["%c["+n+"]","background: #"+e+"; color: #"+t,r],i),console.debug.apply(console,i)},o._CMLS.now=Date.now()||function(){return(new Date).getTime()},o._CMLS.throttle=function(e,t,n){var i,r,a,s=null,c=0;n||(n={});var l=function(){c=n.leading===!1?0:o._CMLS.now(),s=null,a=e.apply(i,r),s||(i=r=null)};return function(){var d=o._CMLS.now();c||n.leading!==!1||(c=d);var u=t-(d-c);return i=this,r=arguments,0>=u||u>t?(s&&(clearTimeout(s),s=null),c=d,a=e.apply(i,r),s||(i=r=null)):s||n.trailing===!1||(s=setTimeout(l,u)),a}},o._CMLS.debounce=function(e,t,n){var i,r,a,s,c,l=function(){var d=o._CMLS.now()-s;t>d&&d>=0?i=setTimeout(l,t-d):(i=null,n||(c=e.apply(a,r),i||(a=r=null)))},d=function(){a=this,r=arguments,s=o._CMLS.now();var d=n&&!i;return i||(i=setTimeout(l,t)),d&&(c=e.apply(a,r),a=r=null),c};return d.clear=function(){clearTimeout(i),i=a=r=null},d},o._CMLS.whichPlayer=function(){if(o._CMLS.whichPlayerCache)return o._CMLS.whichPlayerCache;var e={type:null,position:null};return o.tgmp?(e.type=o._CMLS["const"].PLAYER_TUNEGENIE,o.tgmp.options.position&&"bottom"===o.tgmp.options.position.toLowerCase()?e.position=o._CMLS["const"].PLAYER_POSITION_BOTTOM:o.tgmp.options.position&&"top"===o.tgmp.options.position.toLowerCase()&&(e.position=o._CMLS["const"].PLAYER_POSITION_TOP)):o.TDPW&&(e.type=o._CMLS["const"].PLAYER_TRITON,e.position=o._CMLS["const"].PLAYER_POSITION_TOP),o._CMLS.whichPlayerCache=e,o._CMLS.whichPlayerCache},o._CMLS.isHomepage=function(){return"/"===o.location.pathname&&/[\?&]?p=/i.test(o.location.search)===!1}}(window),function($,o,e){function t(){o._CMLS.logger(n+" v"+r,arguments)}if(!$||!$.fn.jquery)throw{message:"Auto-scroll script called without supplying jQuery."};var n="AUTO SCROLL",i="cmlsAutoScrollPastLeaderboard",r="0.7",a={timeout:.15,leaderboardSelector:'.wrapper-header div[id^="div-gpt-ad"]:first'};o._CMLS[i]||(o._CMLS[i]={scrolled:!1,disabled:!1,cache:{},regenerateCache:function s(){this.cache.leaderboard=$(a.leaderboardSelector),this.cache.player=$("#tgmp_frame:first,.tdpw:first"),this.cache.window=$(o)},leaderboardOnTop:function c(){if(!this.cache.leaderboard)return t("Leaderboard was not cached."),!1;var o=this.cache.leaderboard.offset();return this.playerOnTop()?o.top<100:o.top<50},playerOnTop:function l(){var e=o._CMLS.whichPlayer();return e.position===o._CMLS["const"].PLAYER_POSTITION_TOP?!0:!1},generateScrollToPosition:function d(){if(this.cache.leaderboard){var o=this.cache.leaderboard.offset();return this.playerOnTop()?o.top-this.cache.player.height()+this.cache.leaderboard.height():o.top+this.cache.leaderboard.height()}return 0},hasScrolledPastLeaderboard:function u(){return this.scrolled===!0?!0:this.cache.window.scrollTop()>=this.generateScrollToPosition()?(this.scrolled=!0,!0):!1},conditionsGood:function h(){return this.disabled?"Auto-scroll is disabled for this site.":o._CMLS.isHomepage()?this.leaderboardOnTop()?this.hasScrolledPastLeaderboard()?"Already scrolled passed leaderboard.":!0:"Leaderboard is not on top.":"Not on homepage."},initAnimation:function p(){t("Initializing animation queue.");var o=this,e=o.conditionsGood();return e!==!0?(t("Conditions check after leaderboard render found bad conditions.",e),void o.stopAnimation()):void $("html,body").clearQueue(i).stop(i,!0).delay(100,i).dequeue(i).delay(6e4*a.timeout,i).queue(i,function(){t("Pre-animation conditions check.");var e=o.conditionsGood();return e!==!0?(t(e),o.stopAnimation(),!1):void t("Conditions check passes.")}).animate({scrollTop:o.generateScrollToPosition()},{queue:i,duration:550,step:function(){return o.scrolled===!0?(t("Interrupting animation."),o.stopAnimation(),!1):void 0}}).dequeue(i)},stopAnimation:function g(){t("Stopping animation, clearing queue."),$("html,body").clearQueue(i).stop(i,!0).dequeue(i)},resetAnimation:function S(){t("Resetting animation queue."),this.initAnimation()},init:function m(){t("Initializing auto-scroll library."),this.regenerateCache();var e=this,n=this.conditionsGood();return n!==!0?void t("Init check found bad conditions.",n):(this.cache.window.on("scroll."+i,o._CMLS.throttle(function(){e.hasScrolledPastLeaderboard()&&(e.scrolled=!0,e.stopAnimation(),e.cache.window.off("scroll."+i))},500)),o.googletag=o.googletag||{},o.googletag.cmd=o.googletag.cmd||[],o.googletag.cmd.push(function(){o.googletag.pubads().addEventListener("slotRenderEnded",function n(i){if(!i.isEmpty&&"top"===i.slot.getTargeting("pos")){t("Caught leaderboard render event."),e.regenerateCache();var r=e.conditionsGood();r!==!0?(t("Conditions check after leaderboard render found bad conditions.",r),e.stopAnimation()):e.resetAnimation(),o.googletag.pubads().removeEventListener("slotRenderEnded",n)}})}),"complete"===o.document.readyState?void this.initAnimation():void this.cache.window.on("load",function(){e.initAnimation()}))}},$(function(){o._CMLS[i].init()}))}(jQuery,window);
//# sourceMappingURL=./compiled-allsites-min.js.map