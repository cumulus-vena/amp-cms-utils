window._CMLS.logger("COMMON","                            __              \n.----.--.--.--------.--.--.|  |.--.--.-----.\n|  __|  |  |        |  |  ||  ||  |  |__ --|\n|____|_____|__|__|__|_____||__||_____|_____|\n                                            \nCOMMON LIBRARY LOADED!"),function(t,e){t._CMLS=t._CMLS||{},t._CMLS.LOADED||(t._CMLS["const"]=t._CMLS["const"]||{},t._CMLS["const"].PLAYER_TUNEGENIE=8471,t._CMLS["const"].PLAYER_TRITON=8468,t._CMLS["const"].PLAYER_POSITION_TOP=80847980,t._CMLS["const"].PLAYER_POSITION_BOTTOM=80667984,t._CMLS.logger=function o(){if(!t._CMLS||!t._CMLS.debug||"object"!=typeof console||!console.groupCollapsed)return!1;t._CMLS.loggerNamesToColors=t._CMLS.loggerNamesToColors||{};var e,o,i=arguments[0],n=[].slice.call(arguments[1]);t._CMLS.loggerNamesToColors[i]?(e=t._CMLS.loggerNamesToColors[i].background,o=t._CMLS.loggerNamesToColors[i].complement):(e=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),o=parseInt(e,16)>=12303291?"000000":"FFFFFF",t._CMLS.loggerNamesToColors[i]={background:e,complement:o});var r=new Date;r=r.toISOString()?r.toISOString():r.toUTCString();var a=["%c["+i+"]","background: #"+e+"; color: #"+o];n=a.concat(n),console.groupCollapsed.apply(console,n),console.log("TIMESTAMP:",r),console.trace(),console.groupEnd()},t._CMLS.now=Date.now||function(){return(new Date).getTime()},t._CMLS.throttle=function(e,o,i){var n,r,a,s=null,c=0;i||(i={});var l=function(){c=i.leading===!1?0:t._CMLS.now(),s=null,a=e.apply(n,r),s||(n=r=null)};return function(){var d=t._CMLS.now();c||i.leading!==!1||(c=d);var g=o-(d-c);return n=this,r=arguments,0>=g||g>o?(s&&(clearTimeout(s),s=null),c=d,a=e.apply(n,r),s||(n=r=null)):s||i.trailing===!1||(s=setTimeout(l,g)),a}},t._CMLS.debounce=function(e,o,i){var n,r,a,s,c,l=function(){var d=t._CMLS.now()-s;o>d&&d>=0?n=setTimeout(l,o-d):(n=null,i||(c=e.apply(a,r),n||(a=r=null)))},d=function(){a=this,r=arguments,s=t._CMLS.now();var d=i&&!n;return n||(n=setTimeout(l,o)),d&&(c=e.apply(a,r),a=r=null),c};return d.clear=function(){clearTimeout(n),n=a=r=null},d},t._CMLS.whichPlayer=function(){if(t._CMLS.whichPlayerCache)return t._CMLS.whichPlayerCache;var e={type:null,position:null};return t.tgmp?(t._CMLS.logger("COMMON","Found TuneGenie player."),e.type=t._CMLS["const"].PLAYER_TUNEGENIE,t.tgmp.options.position&&"bottom"===t.tgmp.options.position.toLowerCase()?(t._CMLS.logger("COMMON","TuneGenie player is on the bottom."),e.position=t._CMLS["const"].PLAYER_POSITION_BOTTOM):t.tgmp.options.position&&"top"===t.tgmp.options.position.toLowerCase()&&(t._CMLS.logger("COMMON","TuneGenie player is on the top."),e.position=t._CMLS["const"].PLAYER_POSITION_TOP)):t.TDPW&&(t._CMLS.logger("COMMON","Found Triton player, assuming it's on top."),e.type=t._CMLS["const"].PLAYER_TRITON,e.position=t._CMLS["const"].PLAYER_POSITION_TOP),t._CMLS.whichPlayerCache=e,t._CMLS.whichPlayerCache},t._CMLS.isHomepage=function(){return"/"===t.location.pathname&&/[\?&]?p=/i.test(t.location.search)===!1},t._CMLS.triggerEvent=function(e,o,i){var n;t.document.createEvent?(n=t.document.createEvent("CustomEvent"),n.initCustomEvent(o,!0,!0,i)):n=new CustomEvent(o,{detail:i}),e.dispatchEvent(n)},t._CMLS.LOADED=!0)}(window),function(t){function e(){t._CMLS.logger(o+" v"+n,arguments)}var o="GLOBALIZE SGROUPS",i="globalizeSGroups",n="0.5";t._CMLS[i]||(t._CMLS[i]={cycles:0,timer:null,globalize:function r(){var o;try{if(!t.googletag||!t.googletag.pubads())throw{message:"Googletag not yet ready."};var n=t.googletag.pubads();for(var r in n)if(n[r].hasOwnProperty("cms-sgroup")){o=n[r]["cms-sgroup"];break}}catch(a){return t._CMLS[i].cycles>10?void e("TERMINATING. Could not retrieve cms-sgroup in a reasonable time, aborting."):(e("Googletag not ready, waiting to retry..."),t._CMLS[i].timer&&(clearTimeout(t._CMLS[i].timer),t._CMLS[i].timer=null),t._CMLS[i].timer=setTimeout(t._CMLS[i].globalize,500),void t._CMLS[i].cycles++)}e("Globalizing cms-sgroup"),t._CMLS.cGroups=t._CMLS.cGroups||[],t._CMLS.cGroups=o;var s=["cms-sgroup"].concat(t._CMLS.cGroups);t.sharedContainerDataLayer=t.sharedContainerDataLayer||[],t.corpDataLayer=t.corpDataLayer||[],e("Firing events");for(var c=0,l=s.length;l>c;c++)t.sharedContainerDataLayer.push({event:s[c]}),t.corpDataLayer.push({event:s[c]}),t._CMLS.triggerEvent(t,"cms-sgroup",s[c])}},t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){e("Googletag command queue initiated."),t._CMLS[i].globalize()}))}(window,void 0),function($,t,e){function o(){t._CMLS.logger(n+" v"+a,arguments)}function i(){function e(t){if(t.format&&t.pid)switch(o("Received request for "+t.format+" with PID "+t.pid),t.format.toLowerCase()){case"inread":r(t.pid);break;case"inboard":n(t.pid)}else o("Invalid request. No pid or format given.",t)}function i(){var e=1020,o=1e3;return"number"==typeof t.innerWidth?e=t.innerWidth:document.documentElement&&document.documentElement.clientWidth?e=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(e=document.body.clientWidth),e>1020&&(e=1020),"number"==typeof t.innerHeight?o=t.innerHeight:document.documentElement&&document.documentElement.clientHeight?o=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(o=document.body.clientHeight),{w:e,h:o}}function n(e){var o=i();c({pid:e,slot:".wrapper-content",filter:function(){return t.document.body.className.indexOf("home")>-1||t._CMLS.forceTeadsInBoard===!0},format:"inboard",before:!0,css:"margin: auto !important; padding-top: 5px; padding-bottom: 5px; max-width: 1020px",size:{w:o.w}})}function r(e){c({pid:e,slot:".wrapper-content .column-1 .entry-content p",filter:function(){return t.document.body.className.indexOf("single-feed_posts")>-1},format:"inread",before:!1,css:"padding-bottom: 10px !important;"})}function a(){o("Refreshing cache, re-inserting PID requests.");for(var e in l)if(l.hasOwnProperty(e)){for(var i=0;i<t._ttf.length;i++)t._ttf[i].pid===l[e].pid&&t._ttf.splice(i,1);l[e].launched=!1,c(l[e])}}function s(){$("#cmlsTeadsTag").remove(),function(t){var e,o=t.getElementsByTagName("script")[0];e=t.createElement("script"),e.async=!0,e.id="cmlsTeadsTag",e.src="http://cdn.teads.tv/js/all-v1.js",o.parentNode.insertBefore(e,o)}(t.document)}function c(e){return e.pid&&e.slot&&e.format?(e.components=e.components||{skip:{delay:0}},e.lang=e.lang||"en",e.filter=e.filter||function(){return!0},e.minSlot=e.minSlot||0,e.before=e.before||!1,e.BTF=e.BTF||!1,e.css=e.css||"margin: auto !important;",o("Injecting",e),t._ttf=t._ttf||[],t._ttf.push(e),s(),void(l[e.pid]=e)):(o("Invalid request. No pid, slot, or format given.",e),!1)}var l={};this.process=e,this.refreshCache=a;var d=function(){};if(d.prototype=[],d.prototype.push=function(){for(var t=0;t<arguments.length;t++)arguments[t].format&&arguments[t].pid&&e(arguments[t].format,arguments[t].pid)},t._teadsinjector&&t._teadsinjector.length)for(var g=0;g<t._teadsinjector.length;g++)e(t._teadsinjector[g]);t._teadsinjector=new d,o("Listening for future requests.")}var n="TEADS INJECTOR",r="teadsInjector",a="0.7";if(!t._CMLS[r]&&!t.teads){t._CMLS[r]=new i;var s=t._CMLS.whichPlayer();s&&s.type&&s.type===t._CMLS["const"].PLAYER_TRITON&&t.History&&t.History.Adapter&&(o("Binding refreshCache to pageChange event."),t.History.Adapter.bind(t,"pageChange",function(){$(t._CMLS[r].refreshCache)}))}}(jQuery,window),function(t,e){function o(){t._CMLS.logger(i+" v"+r,arguments)}var i="PLAYER WATCH",n="playerWatch",r="0.5";return t._CMLS[n]?!1:t.TDPW?(t._CMLS[n]={initialized:!1,cache:{},timer:null,interval:2500,"const":{STOPPED:0,PLAYING:1},setDFPCriteria:function a(e,i){t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){o("Setting targeting",e,i),t.googletag.pubads().setTargeting(e,i)})},checkCurrentTrack:function s(){var e=localStorage&&JSON?JSON.parse(localStorage.getItem("tdas.controller."+t.amp_player_config.station+"."+t.amp_player_config.stream_id+".events.current-state")):!1;e&&e.data&&(e.data.stream&&"LIVE_PLAYING"===e.data.stream.code.toUpperCase()?this.setState(this["const"].PLAYING):this.setState(this["const"].STOPPED),e.data.song&&e.data.song.id&&this.hasTrackChanged(e.data.song.id)&&this.trackHasChanged(e.data.song))},setState:function c(e){return e===this["const"].PLAYING&&e!==this.cache.state?(o("Player is streaming."),this.cache.state=e,this.setDFPCriteria("td-player-state","PLAYING"),void t._CMLS.triggerEvent(t,"td-player.playing")):e===this["const"].STOPPED&&e!==this.cache.state?(o("Player is stopped."),this.cache.state=e,this.setDFPCriteria("td-player-state","STOPPED"),void t._CMLS.triggerEvent(t,"td-player.stopped")):void 0},hasTrackChanged:function l(t){return t&&t!==this.cache.trackId?!0:!1},trackHasChanged:function d(e){o("Song has changed!",e),this.cache.trackId=e.id,e.artist&&this.setDFPCriteria("td-player-artist",e.artist),e.album&&this.setDFPCriteria("td-player-album",e.album),e.title&&this.setDFPCriteria("td-player-track",e.title),this.setDFPCriteria("td-player-id",e.id),t._CMLS.triggerEvent(t,"td-player.trackchange",e)},startTimer:function g(){var t=this;clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){t.checkCurrentTrack(),t.startTimer()},this.interval)},init:function u(){return t.amp_player_config&&t.amp_player_config.station&&t.amp_player_config.stream_id?(this.checkCurrentTrack(),this.startTimer(),this.initialized=!0,o("Initialized!",this.cache.trackId),this):(o("Player configuration not available, exiting."),!1)}},void t._CMLS[n].init()):(o("Triton player not enabled, exiting."),!1)}(window),function($,t,e){function o(){t._CMLS.logger(i+" v"+r,arguments)}if(!$||!$.fn.jquery)throw{message:"Auto-scroll script called without supplying jQuery."};var i="AUTO SCROLL",n="cmlsAutoScrollPastLeaderboard",r="0.7",a={timeout:.15,leaderboardSelector:'.wrapper-header div[id^="div-gpt-ad"]:first',leaderboardHeight:90};t._CMLS[n]||t.DO_NOT_AUTO_SCROLL||(t._CMLS[n]={scrolled:!1,disabled:!1,timer:null,cache:{},regenerateCache:function s(){this.cache.leaderboard=$(a.leaderboardSelector),this.cache.player=$("#tgmp_frame:first,.tdpw:first"),this.cache.window=$(t)},leaderboardOnTop:function c(){if(!this.cache.leaderboard)return o("Leaderboard was not cached."),!1;var t=this.cache.leaderboard.offset();return this.playerOnTop()?t.top<150:t.top<50},playerOnTop:function l(){var e=t._CMLS.whichPlayer();return e.position===t._CMLS["const"].PLAYER_POSITION_TOP?!0:!1},generateScrollToPosition:function d(){if(this.cache.leaderboard){var t=this.cache.leaderboard.offset(),e=t.top+a.leaderboardHeight;return t>a.leaderboardHeight+20?(o("Ad offset is greater than leaderboard height settings, assuming returned ad is incorrect."),a.leaderboardHeight+10):this.playerOnTop()?(e=t.top-this.cache.player.height()+a.leaderboardHeight,o("Player is on top, scrollTo position is "+e,t.top,this.cache.player.height(),this.cache.leaderboard.height()),e):(o("Player is on bottom, scrollTo position is "+e,t.top,this.cache.leaderboard.height()),e)}return 0},hasScrolledPastLeaderboard:function g(){return this.scrolled===!0?!0:this.cache.window.scrollTop()>=this.generateScrollToPosition()?(this.scrolled=!0,!0):!1},conditionsGood:function u(){return this.disabled||t.DO_NOT_AUTO_SCROLL?"Auto-scroll is disabled for this site.":t._CMLS.isHomepage()?this.leaderboardOnTop()?this.hasScrolledPastLeaderboard()?"Already scrolled passed leaderboard.":!0:"Leaderboard is not on top.":"Not on homepage."},scrollPage:function p(){var t=this;o("Pre-animation conditions check.");var e=this.conditionsGood();e!==!0&&(o("Conditions check failed.",e),this.stopTimer()),o("Conditions are good to scroll."),$("html,body").animate({scrollTop:t.generateScrollToPosition()},{queue:n,duration:550}).dequeue(n)},initTimer:function h(){o("Initializing scroll timer.");var t=this,e=t.conditionsGood();return e!==!0?(o("Conditions check after leaderboard render found bad conditions.",e),void t.stopTimer()):($("html,body").clearQueue(n).stop(n,!0),clearTimeout(this.timer),this.timer=null,void(this.timer=setTimeout(function(){t.scrollPage()},6e4*a.timeout)))},stopTimer:function f(){o("Stopping timer, clearing animation queue.",this.timer),$("html,body").clearQueue(n).stop(n,!0),clearTimeout(this.timer),this.timer=null},resetTimer:function m(){o("Resetting scroll timer."),this.initTimer()},init:function _(){o("Initializing auto-scroll library."),this.regenerateCache();var e=this,i=this.conditionsGood();return i!==!0?void o("Init check found bad conditions.",i):(this.cache.window.on("scroll."+n,t._CMLS.throttle(function(){e.hasScrolledPastLeaderboard()&&(e.scrolled=!0,e.stopTimer(),e.cache.window.off("scroll."+n))},500)),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function i(n){if(!n.isEmpty&&"top"===n.slot.getTargeting("pos")){o("Caught leaderboard render event."),e.regenerateCache();var r=e.conditionsGood();r!==!0?(o("Conditions check after leaderboard render found bad conditions.",r),e.stopTimer()):e.resetTimer(),t.googletag.pubads().removeEventListener("slotRenderEnded",i)}})}),"complete"===t.document.readyState?void this.initTimer():void this.cache.window.on("load",function(){e.initTimer()}))}},$(function(){t._CMLS[n].init()}))}(jQuery,window),function(t,e){function o(){t._CMLS.logger(n+" v"+a,arguments)}function i(){if(!t._CMLS.cGroups)return void o("Init test called without cGroups available, exiting.");for(var e=0;e<t._CMLS.cGroups.length;e++)/Format\s+(NewsTalk|Talk|Sports|Christian Talk)/i.test(t._CMLS.cGroups[e])&&(o("Running initialization."),t._CMLS[r].init(),s=!0)}var n="AUTO REFRESH ADS",r="autoRefreshAds",a="0.3";if(t._CMLS=t._CMLS||{},t._CMLS.autoRefreshAdsTimer=4,t._CMLS.autoRefreshAdsTimer=t._CMLS.autoRefreshAdsTimer||8,!t._CMLS[r]){t._CMLS[r]={player:t._CMLS.whichPlayer(),timer:null,boundToRenderEvent:!1,checkConditions:function c(){return t._CMLS.isHomepage()&&t._CMLS.autoReloader&&t._CMLS.autoReloader.active?(o("Autoreloader is active, conditions fail."),!1):!0},stop:function l(){return o("Stopping timer."),clearTimeout(this.timer),this.timer=null,this},start:function d(){if(this.stop(),this.checkConditions()){o("Starting timer at "+t._CMLS.autoRefreshAdsTimer+" minutes.");var e=this;return this.timer=setTimeout(function(){e.fire()},6e4*t._CMLS.autoRefreshAdsTimer),this}},fire:function g(){if(this.checkConditions()){var e=this;t.googletag.cmd.push(function(){o("Refreshing ads."),t.googletag.pubads().refresh(),e.start()})}},init:function u(){o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],this.player.type===t._CMLS["const"].PLAYER_TRITON&&(t.addEventListener("td-player.stopped",function(){t._CMLS[r].stop()},!1),t.addEventListener("td-player.playing",function(){t._CMLS[r].start()},!1),t.History&&t.History.Adapter&&t.History.Adapter.bind(t,"pageChange",function(){t._CMLS[r].start()})),this.player.type===t._CMLS["const"].PLAYER_TUNEGENIE&&t.tgmp&&t.TGMP_EVENTS&&t.tgmp.addEventListener(t.TGMP_EVENTS.streamplaying,function(e){return e===!0?void t._CMLS[r].start():void t._CMLS[r].stop()}),o("Listeners set, waiting for player event."),o("Timer initialized at "+t._CMLS.autoRefreshAdsTimer+" minutes.")}};var s=!1;i(),t.addEventListener("cms-sgroup",function(){s||i()},!1)}}(window),function($,t,e){function o(){t._CMLS.logger(n+" v"+a,arguments)}function i(){return o("Checking for player...",c),t._CMLS[r].isPlayerActive()?void t._CMLS[r].init():void(c>20||(setTimeout(i,1e3),c++))}var n="NAV THROUGH PLAYER",r="navThroughPlayer",a="0.1",s=t._CMLS.whichPlayer();if(!t._CMLS[r]){t._CMLS[r]={isPlayerActive:function l(){return s=t._CMLS.whichPlayer(),s.type?!0:!1},updateIframeLinks:function d(e){if(t._CMLS[r].isPlayerActive){var i=e.jquery?e:$(e);i.contents().find('a[target="_self"],a[target="_top"],a[target="_parent"]').each(function(){o("Updating links in slot.",i.prop("id")),t._CMLS[r].updateLink(this)})}},updateLink:function g(e,o){if(t._CMLS[r].isPlayerActive&&e){var i=e.jquery?e:$(e),n=t.document.createElement("a");if(n.href=i.prop("href"),0===n.href.indexOf("/")||n.hostname!==t.location.hostname&&!o)return void(n=null);i.off("."+r).on("click."+r,t._CMLS[r].clickThrough),n=null}},clickThrough:function u(e){e&&t._CMLS[r].isPlayerActive()&&(e.preventDefault(),o("Intercepting click."),t._CMLS[r].navigate(e.currentTarget.href))},navigate:function p(e){s.type===t._CMLS["const"].PLAYER_TRITON&&t.History&&(o("Navigating through Triton player.",e),t.History.pushState(null,null,e)),s.type===t._CMLS["const"].PLAYER_TUNEGENIE&&t.top.tgmp&&(o("Navigating through TuneGenie player.",e),t.top.tgmp.updateLocation(e))},init:function h(){return t._CMLS[r].isPlayerActive()?(o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function(e){if(e&&e.slot){var o=e.slot.getSlotElementId(),i=t.document.getElementById(o);t._CMLS[r].updateIframeLinks(i)}})}),$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){t._CMLS[r].updateIframeLinks(this)}),$(t).load(function(){$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){t._CMLS[r].updateIframeLinks(this)})}),void o("Initialized.")):void o("No player is active, exiting.")}};var c=0;i()}}(jQuery,window),function($,t,e){function o(){t._CMLS.logger(r+" v"+s,arguments)}function i(i){function n(){var t,o=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkittransitionend",msTransition:"mstransitionend"};for(t in i)if(o.style[t]!==e)return i[t]}function r(t){var e=0,o=t.length,i,n;if(0===o)return e;for(i=0;o>i;i++)n=t.charCodeAt(i),e=(e<<5)-e+n,e&=e;return e}function a(){return C.dfpSlot=$(i.dfpSlotNode),C.injectionNode=$(i.injectionNode),C.stickNode=$(i.stickNode),C.contentNode=$(i.contentNode),C.footerNode=$(i.footerNode),C.obstructiveNode=$(i.obstructiveNode),C.window=$(t),C.document=$(t.document),s(),C}function s(){return o("Refreshing stick position."),C.stickAt=C.stickNode.length?C.stickNode.offset().top:0,C.stickAt}function c(t){if(C.container&&C.container.length)return C.container;var e=$("#"+v+"Container");if(e.length)return C.container=e,C.container;if(t===!0)return!1;o("Generating new wallpaper container."),a();var i=$("<div />",{id:v+"Container","class":v+"-container"});return C.injectionNode.prepend(i),C.container=i,l(),C.container}function l(){var t=c(),e={content:C.contentNode.css(["position","zIndex"]),footer:C.footerNode.css(["position","zIndex"])};"static"===e.content.position&&(o("Setting content area position to relative."),C.contentNode.css("position","relative")),("auto"===e.content.zIndex||e.content.zIndex<=t.css("zIndex"))&&(o("Raising content area above wallpaper container."),C.contentNode.css("zIndex",t.css("zIndex")+1)),"static"===e.footer.position&&(o("Setting footer area position to relative."),C.footerNode.css("position","relative")),C.contentNode.data("originalStyles",e.content),C.footerNode.data("originalStyles",e.footer),o("Content area has been raised.")}function d(){o("Displaying wallpaper.");var t=c();t.off(y).addClass(v+"-open"),C.obstructiveNode.hide(),h()}function g(){function t(){r=!0,C.obstructiveNode.show(),o("Clearing all event listeners."),C.window.off("."+v),i&&i.length&&(o("Removing wallpaper container."),i.off("."+v).remove()),C.container=null,e.resolve()}var e=$.Deferred(),i=c(!0),n=i&&i.length?i.hasClass(v+"-open"):!1,r=!1;return o("RESET!"),i&&i.length?(i.off(y).removeData().removeProp("data").css("backgroundColor","rgba(0,0,0,0)").removeClass(v+"-open").removeClass(v+"-fixed"),o("Container is closing."),y&&n&&i.on(y,function(e){"opacity"===e.originalEvent.propertyName&&(o("Transition complete."),t())}),setTimeout(function(){r||t()},800)):t(),o("Returning our promise."),e.promise()}function u(){var t=c();return t.hasClass(v+"-fixed")}function p(t){var e=c();u()&&t===!1&&(o("Unfixing wallpaper position."),e.removeClass(v+"-fixed").css("top","0")),u()||t!==!0||(o("Fixing wallpaper position."),s(),e.addClass(v+"-fixed").css("top",C.stickAt))}function h(){function t(){var t=C.window.scrollTop(),e=C.injectionNode.length?C.injectionNode.offset().top:0;return e<t+C.stickAt?!0:!1}o("Initializing scroll tracking."),s(),p(t()?!0:!1),C.window.on("scroll."+v,S(function(){return t()?void p(!0):void p(!1)},50)),C.window.on("resize."+v,L(function(){s()},500)),o("Scroll tracking enabled.")}function f(){try{if($(i.contentNode).height()<200)return o("Content node is not ready, retrying."),void setTimeout(function(){f()},500);a(),o("Processing wallpaper slot.");var e=C.dfpSlot.find("iframe"),n=e.contents().find("#google_image_div,body").first(),s=n.find("a:first"),l=n.find("img.img_ad:first,img:first").first(),u=l.prop("alt");if(o("Checking image."),!l.length)return o("No image found in ad slot! Resetting."),void g();var p=c(),h=r((s.length?s.prop("href")+s.prop("target"):"")+l.prop("src"));if(o("Generated hash.",h),h===p.data("hash"))return void o("Requested wallpaper is already set.");o("Getting background color.",u);var m="rgba(255,255,255,0)",_=u.match(/(\#[A-Za-z0-9]+)/)||!1;_&&_.length>1&&(m=_[1]),o("Using background color.",m),g().then(function(){o("Building the new wallpaper.");var e="";s.length&&(e=$("<a />",{href:s.prop("href"),target:s.prop("target")}),t._CMLS.navThroughPlayer&&t._CMLS.navThroughPlayer.updateLink(e[0]));var i=$("<iframe />",{name:v+"Iframe",scrolling:"no",marginWidth:"0",marginHeight:"0",frameborder:"0"});o("Injecting iframe into container."),p=c(),p.data("hash",h).css("backgroundColor",m).append(i);var n='<style>html,body{background:transparent;margin:0;padding:0;width:100%;height:100%;}body{background:url("'+l.prop("src")+'") no-repeat top center;}a{display:block;width:100%;height:100%;text-decoration:none;}</style>';i.load(function(){o("Injecting wallpaper into iframe."),i.contents().find("body").append(n,e)}).prop("src","about:blank"),l.length?(o("Initializing preloader."),$("<img />").bind("load",function(){d(),$(this).remove()}).prop("src",l.prop("src"))):d()})}catch(S){console.log("WTF PEOPLE",S)}}function m(t){var e=t.slot.getTargeting("pos");return e.indexOf("wallpaper-ad")>-1?(o("Caught render event for wallpaper-ad",t.slot.getSlotElementId()),t.isEmpty?(o("Slot was empty, resetting wallpaper container."),g()):(o("Slot contained an ad, processing wallpaper."),f()),!1):void 0}function _(){$(t).off("."+v)}var C={},v=i.nameSpace||"wallpaperInjector",S=t._CMLS.throttle,L=t._CMLS.debounce,y=n();this.reset=g,this.process=f,this.unbindAllListeners=_,o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function(t){L(m(t),1e3)})});var M='<style id="'+v+'Styles">.'+v+"-container {display: block !important;position: absolute;z-index: 0;top: 0;left: 0;height: 0 !important;width: 100% !important;overflow: hidden;text-align: center;transition: opacity 0.5s, height 0.6s, background-color 0.4s;opacity: 0;}."+v+"-container iframe {border: 0;height: 100%;width: 100%;}."+v+"-container ~ .grid-container {transition: box-shadow 0.6s}."+v+"-open {height: 100% !important;opacity: 1;}."+v+"-open ~ .grid-container {box-shadow: 0 0 20px rgba(0,0,0,0.3);}."+v+"-fixed {position: fixed;}"+i.dfpSlotNode+" {display: none !important;}</style>";t.document.getElementById(v+"Styles")||$("head").append(M),"complete"===t.document.readyState||"loaded"===t.document.readyState?f():$(function(){f()})}var n={dfpSlotNode:"#div-gpt-ad-1418849849333-16",injectionNode:".wrapper-content",stickNode:".wrapper-header",contentNode:".wrapper-content .grid-container:first",footerNode:".wrapper-footer",obstructiveNode:".takeover-left, .takeover-right, .skyscraper-left, .skyscraper-right"},r="WALLPAPER INJECTOR",a="wallpaperInjector",s="0.5";t._CMLS[a],n.nameSpace=a,t._CMLS[a]=new i(n)}(jQuery,window),function(t,e){function o(){t._CMLS.logger(n+" v"+a,arguments)}function i(){t._CMLS.autoReload=new s}var n="AUTO-RELOADER",r="autoReloader",a="0.7";if(!t._CMLS[r]){t._CMLS[r]={condition:"body.home",timeout:48e4,active:!1,timer:null,player:t._CMLS.whichPlayer(),checkCondition:function c(){return t.document.querySelector(this.condition)?!0:!1},reset:function l(){o("Resetting."),clearTimeout(this.timer),this.timer=null,this.restart()},start:function d(){return this.checkCondition()?(o("Starting timer."),this.active=!0,void this.reset()):(o("Condition check failed, exiting."),this.active=!1,!1)},stop:function g(){o("Stopping timer."),this.active=!1,this.reset()},restart:function u(){if(this.active&&this.checkCondition()){o("Restarting timer.",this.timeout);var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.fire(),t.reset()},this.timeout)}else this.active=!1},destroy:function p(){o("Destroying timer."),this.stop()},fire:function h(){if(this.checkCondition()){if(o("Reloading the page."),this.player.type===t._CMLS["const"].PLAYER_TRITON)return void t.History.Adapter.trigger(t,"statechange");if(this.player.type===t._CMLS["const"].PLAYER_TUNEGENIE)return void t.tgmp.updateLocation(t.location.href);t.location.reload()}else o("Condition not met, self-destructing."),this.destroy()},init:function f(t){this.condition=t.condition||this.condition,this.timeout=6e4*t.timeout||this.timeout,this.start(),o("Initialized.",this.timeout,this.condition)}};var s=function(){};s.prototype=[],s.prototype._push=s.prototype.push,s.prototype.push=function(){for(var e=0;e<arguments.length;e++)this._push(arguments[e]);t._CMLS[r].init(this.slice(-1)[0]),i()},t._CMLS.autoReload&&t._CMLS.autoReload.length&&t._CMLS[r].init(t._CMLS.autoReload.slice(-1)[0]),i()}}(window),function(t,e){function o(){t._CMLS.logger(i+" v"+r,arguments)}var i="ADDTHIS INJECTOR",n="addThisInjector",r="0.4",a="ra-55dc79597bae383e";return t.addthis?void o("AddThis already loaded by page."):(t._CMLS[n]={inject:function s(){o("Injecting."),t.addthis_config=t.addthis_config||{},t.addthis_config.pubid=a;var e=t.document.createElement("script");e.onload=function(){return t._CMLS[n].active?void o("Already active."):void t._CMLS[n].buildLayer()},e.src="//s7.addthis.com/js/300/addthis_widget.js#async=1",e.id=n+"Script",e.async=!1,t.document.head.appendChild(e),o("Injected.")},buildLayer:function c(){return t.NO_ADDTHIS_HERE?void o("NO_ADDTHIS_HERE found in window object, will not build."):t._CMLS.isHomepage()?void o("Will not build layer on homepage."):(o("Building layer."),void(t.addthis&&t.addthis.layers?(t.addthis.layers({share:{position:"left",offset:{bottom:"100px"},services:"facebook,twitter,tumblr,email,more"}},function(e){t._CMLS[n].layer=e,t.addthis.layers.refresh(),o("Layer built.")}),t._CMLS[n].active=!0):o("AddThis not available!")))},destroyLayer:function l(){o("Destroying layer."),t.addthis&&t._CMLS[n].active&&t.addthis.layers(function(e){e.destroy(),t._CMLS[n].active=!1})},init:function d(){o("Initializing."),t.History&&t.History.Adapter&&(t.History.Adapter.bind(t,"statechange",t._CMLS[n].destroyLayer),t.History.Adapter.bind(t,"pageChange",t._CMLS[n].buildLayer)),this.inject(),o("Initialized!")}},void t._CMLS[n].init())}(window),function($,t,e){function o(){a.logger(i+" v"+r,arguments)}var i="BREAKING NEWS BAR",n="BreakingNews",r="0.7",a=t._CMLS||{};Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),a[n]=function(e,i){o("Called",typeof e,e,i);var r={classPrefix:"cmlsBreakingNews",additionalClass:"",position:"above",link:"",target:"_top",beforeText:"Breaking News:",text:"",background:"#900",color:"#fff"},s,c=".wrapper-header";if($(c).length){if("object"!=typeof e||Array.isArray(e))if("object"==typeof e&&Array.isArray(e)&&e.length)s=r,s.text=e[0],e.length>1&&(i=e[1]),o("Basic mode!");else{if("object"==typeof e)return void o("Invalid usage!",e,i);s=r,s.text=e,o("Basic mode!")}else s=$.extend({},r,e),o("Advanced mode!");!s.link&&i&&(s.link=i),o("Settings:",s);var l="."+s.classPrefix+"-container { display: block; box-sizing: border-box; position: relative; float: none; overflow: hidden; z-index: 10; padding: 1em; color: #fff; background: #900; box-shadow: 0 0 10px rgba(0,0,0,0.4); font-size: 14px; line-height: 1.2; text-decoration: none; outline: 0 }."+s.classPrefix+"-container > a { display: block; color: inherit !important; cursor: pointer; padding: 1em; margin: -1em; }."+s.classPrefix+"-container > a:hover ."+s.classPrefix+"-before { text-decoration: underline; }."+s.classPrefix+"-inner { box-sizing: border-box; max-width: 1020px; margin: 0 auto; }."+s.classPrefix+"-before { float: left; font-weight: bold; margin-right: .5em; }."+s.classPrefix+"-text { overflow: hidden; }."+s.classPrefix+"-inner a { text-decoration: underline !important; color: inherit; }@media (max-width: 500px) {."+s.classPrefix+"-before { float: none; margin-bottom: .25em; }}",d='<div class="'+s.classPrefix+'-container"><div class="'+s.classPrefix+'-inner">{{BEFORE}}<div class="'+s.classPrefix+'-text">{{TEXT}}</div></div></div>';if(s.beforeText&&s.beforeText.length){var g='<div class="'+s.classPrefix+'-before">'+s.beforeText+"</div>";d=d.replace("{{BEFORE}}",g)}if(d=$(d.replace("{{TEXT}}",s.text)),s.link&&s.link.length){var u=$("<a></a>").prop({href:s.link,target:s.target});d.wrapInner(u)}d.css({background:s.background,color:s.color}),d.addClass(s.additionalClass).prop("id","CMLS"+n+"-"+Math.floor(1e7*Math.random())),$("#cmlsBreakingNewsStyles").length||$("head").append('<style id="cmlsBreakingNewsStyles">/* CMLS Breaking News Bar styles */\n'+l+"</style>"),"below"===s.position?$(c).after(d):$(c).before(d),a.navThroughPlayer&&(o("Applying navThroughPlayer to bar links."),d.find('a:not([href]),a[target="_self"],a[target="_top"],a[target="_parent"]').each(function(){o("Applying navThroughPlayer to a link.",this.href),a.navThroughPlayer.updateLink($(this))})),"above"===s.position&&(t.DO_NOT_AUTO_SCROLL=!0)}};var s=function(){};s.prototype=[],s.prototype.push=function(){o("Received after-load request.",arguments),a[n].apply(null,arguments)},t["_CMLS"+n]&&t["_CMLS"+n].length&&t["_CMLS"+n].forEach(a[n]),t["_CMLS"+n]=new s}(jQuery,window);
//# sourceMappingURL=./compiled-allsites-min.js.map