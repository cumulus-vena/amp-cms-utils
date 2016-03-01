!function(t,e){t.self!==t.top?t._CMLS={}:t._CMLS=t._CMLS||{},t._CMLS.LOADED||(t._CMLS["const"]=t._CMLS["const"]||{},t._CMLS["const"].PLAYER_TUNEGENIE=8471,t._CMLS["const"].PLAYER_TRITON=8468,t._CMLS["const"].PLAYER_POSITION_TOP=80847980,t._CMLS["const"].PLAYER_POSITION_BOTTOM=80667984,t._CMLS.logger=function o(){if(!t._CMLS||!t._CMLS.debug||"object"!=typeof console||!console.groupCollapsed)return!1;t._CMLS.loggerNamesToColors=t._CMLS.loggerNamesToColors||{};var e,o,n=arguments[0],i=[].slice.call(arguments[1]);t._CMLS.loggerNamesToColors[n]?(e=t._CMLS.loggerNamesToColors[n].background,o=t._CMLS.loggerNamesToColors[n].complement):(e=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),o=parseInt(e,16)>=12303291?"000000":"FFFFFF",t._CMLS.loggerNamesToColors[n]={background:e,complement:o});var r=new Date;r=r.toISOString()?r.toISOString():r.toUTCString();var a=["%c["+n+"]","background: #"+e+"; color: #"+o];i=a.concat(i),t.top.console.groupCollapsed.apply(console,i),t.top.console.log("TIMESTAMP:",r),t.top.console.trace(),t.top.console.groupEnd()},t._CMLS.now=Date.now||function(){return(new Date).getTime()},t._CMLS.throttle=function(e,o,n){var i,r,a,s=null,l=0;n||(n={});var c=function(){l=n.leading===!1?0:t._CMLS.now(),s=null,a=e.apply(i,r),s||(i=r=null)};return function(){var d=t._CMLS.now();l||n.leading!==!1||(l=d);var p=o-(d-l);return i=this,r=arguments,0>=p||p>o?(s&&(clearTimeout(s),s=null),l=d,a=e.apply(i,r),s||(i=r=null)):s||n.trailing===!1||(s=setTimeout(c,p)),a}},t._CMLS.debounce=function(e,o,n){var i,r,a,s,l,c=function(){var d=t._CMLS.now()-s;o>d&&d>=0?i=setTimeout(c,o-d):(i=null,n||(l=e.apply(a,r),i||(a=r=null)))},d=function(){a=this,r=arguments,s=t._CMLS.now();var d=n&&!i;return i||(i=setTimeout(c,o)),d&&(l=e.apply(a,r),a=r=null),l};return d.clear=function(){clearTimeout(i),i=a=r=null},d},t._CMLS.whichPlayer=function(){if(t._CMLS.whichPlayerCache)return t._CMLS.whichPlayerCache;var e={type:null,position:null};return t.tgmp?(t._CMLS.logger("COMMON",["Found TuneGenie player."]),e.type=t._CMLS["const"].PLAYER_TUNEGENIE,t.tgmp.options.position&&"bottom"===t.tgmp.options.position.toLowerCase()?(t._CMLS.logger("COMMON",["TuneGenie player is on the bottom."]),e.position=t._CMLS["const"].PLAYER_POSITION_BOTTOM):t.tgmp.options.position&&"top"===t.tgmp.options.position.toLowerCase()&&(t._CMLS.logger("COMMON",["TuneGenie player is on the top."]),e.position=t._CMLS["const"].PLAYER_POSITION_TOP)):t.TDPW&&(t._CMLS.logger("COMMON",["Found Triton player, assuming it's on top."]),e.type=t._CMLS["const"].PLAYER_TRITON,e.position=t._CMLS["const"].PLAYER_POSITION_TOP),t._CMLS.whichPlayerCache=e,t._CMLS.whichPlayerCache},t._CMLS.isHomepage=function(){return"/"===t.location.pathname&&/[\?&]?p=/i.test(t.location.search)===!1},t._CMLS.triggerEvent=function(e,o,n){var i;t.document.createEvent?(i=t.document.createEvent("CustomEvent"),i.initCustomEvent(o,!0,!0,n)):i=new CustomEvent(o,{detail:n}),e.dispatchEvent(i)},t._CMLS.logger("COMMON",["LIBRARY LOADED!\n                           .__                \n  ____  __ __  _____  __ __|  |  __ __  ______\n_/ ___\\|  |  \\/     \\|  |  \\  | |  |  \\/  ___/\n\\  \\___|  |  /  Y Y  \\  |  /  |_|  |  /___ \\ \n \\___  >____/|__|_|  /____/|____/____//____  >\n     \\/            \\/                      \\/ \n"]),t._CMLS.LOADED=!0)}(window),function(t){function e(){t._CMLS.logger(o+" v"+i,arguments)}var o="GLOBALIZE SGROUPS",n="globalizeSGroups",i="0.5";t._CMLS[n]||(t._CMLS[n]={cycles:0,timer:null,globalize:function r(){var o;try{if(!t.googletag||!t.googletag.pubads())throw{message:"Googletag not yet ready."};var i=t.googletag.pubads();for(var r in i)if(i[r].hasOwnProperty("cms-sgroup")){o=i[r]["cms-sgroup"];break}}catch(a){return t._CMLS[n].cycles>10?void e("TERMINATING. Could not retrieve cms-sgroup in a reasonable time, aborting."):(e("Googletag not ready, waiting to retry..."),t._CMLS[n].timer&&(clearTimeout(t._CMLS[n].timer),t._CMLS[n].timer=null),t._CMLS[n].timer=setTimeout(t._CMLS[n].globalize,500),void t._CMLS[n].cycles++)}e("Globalizing cms-sgroup"),t._CMLS.cGroups=t._CMLS.cGroups||[],t._CMLS.cGroups=o;var s=["cms-sgroup"].concat(t._CMLS.cGroups);t.sharedContainerDataLayer=t.sharedContainerDataLayer||[],t.corpDataLayer=t.corpDataLayer||[],e("Firing events");for(var l=0,c=s.length;c>l;l++)t.sharedContainerDataLayer.push({event:s[l]}),t.corpDataLayer.push({event:s[l]}),t._CMLS.triggerEvent(t,"cms-sgroup",s[l])}},t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){e("Googletag command queue initiated."),t._CMLS[n].globalize()}))}(window,void 0),function($,t,e){function o(){t._CMLS.logger(i+" v"+a,arguments)}function n(){function e(t){if(t.format&&t.pid)switch(o("Received request for "+t.format+" with PID "+t.pid),t.format.toLowerCase()){case"inread":r(t.pid);break;case"inboard":i(t.pid)}else o("Invalid request. No pid or format given.",t)}function n(){var e=1020,o=1e3;return"number"==typeof t.innerWidth?e=t.innerWidth:document.documentElement&&document.documentElement.clientWidth?e=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(e=document.body.clientWidth),e>1020&&(e=1020),"number"==typeof t.innerHeight?o=t.innerHeight:document.documentElement&&document.documentElement.clientHeight?o=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(o=document.body.clientHeight),{w:e,h:o}}function i(e){var o=n();l({pid:e,slot:".wrapper-content",filter:function(){return t.document.body.className.indexOf("home")>-1||t._CMLS.forceTeadsInBoard===!0},format:"inboard",before:!0,css:"margin: auto !important; padding-top: 5px; padding-bottom: 5px; max-width: 1020px",size:{w:o.w}})}function r(e){l({pid:e,slot:".wrapper-content .column-1 .entry-content p",filter:function(){return t.document.body.className.indexOf("single-feed_posts")>-1},format:"inread",before:!1,css:"padding-bottom: 10px !important;"})}function a(){o("Refreshing cache, re-inserting PID requests.");for(var e in c)if(c.hasOwnProperty(e)){for(var n=0;n<t._ttf.length;n++)t._ttf[n].pid===c[e].pid&&t._ttf.splice(n,1);c[e].launched=!1,l(c[e])}}function s(){$("#cmlsTeadsTag").remove(),function(t){var e,o=t.getElementsByTagName("script")[0];e=t.createElement("script"),e.async=!0,e.id="cmlsTeadsTag",e.src="http://cdn.teads.tv/js/all-v1.js",o.parentNode.insertBefore(e,o)}(t.document)}function l(e){return e.pid&&e.slot&&e.format?(e.components=e.components||{skip:{delay:0}},e.lang=e.lang||"en",e.filter=e.filter||function(){return!0},e.minSlot=e.minSlot||0,e.before=e.before||!1,e.BTF=e.BTF||!1,e.css=e.css||"margin: auto !important;",o("Injecting",e),t._ttf=t._ttf||[],t._ttf.push(e),s(),void(c[e.pid]=e)):(o("Invalid request. No pid, slot, or format given.",e),!1)}var c={};this.process=e,this.refreshCache=a;var d=function(){};if(d.prototype=[],d.prototype.push=function(){for(var t=0;t<arguments.length;t++)arguments[t].format&&arguments[t].pid&&e(arguments[t].format,arguments[t].pid)},t._teadsinjector&&t._teadsinjector.length)for(var p=0;p<t._teadsinjector.length;p++)e(t._teadsinjector[p]);t._teadsinjector=new d,o("Listening for future requests.")}var i="TEADS INJECTOR",r="teadsInjector",a="0.7";if(!t._CMLS[r]&&!t.teads){t._CMLS[r]=new n;var s=t._CMLS.whichPlayer();s&&s.type&&s.type===t._CMLS["const"].PLAYER_TRITON&&t.History&&t.History.Adapter&&(o("Binding refreshCache to pageChange event."),t.History.Adapter.bind(t,"pageChange",function(){$(t._CMLS[r].refreshCache)}))}}(jQuery,window),function(t,e){function o(){t._CMLS.logger(n+" v"+r,arguments)}var n="PLAYER WATCH",i="playerWatch",r="0.5";return t._CMLS[i]?!1:t.TDPW?(t._CMLS[i]={initialized:!1,cache:{},timer:null,interval:2500,"const":{STOPPED:0,PLAYING:1},setDFPCriteria:function a(e,n){t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){o("Setting targeting",e,n),t.googletag.pubads().setTargeting(e,n)})},checkCurrentTrack:function s(){var e=localStorage&&JSON?JSON.parse(localStorage.getItem("tdas.controller."+t.amp_player_config.station+"."+t.amp_player_config.stream_id+".events.current-state")):!1;e&&e.data&&(e.data.stream&&"LIVE_PLAYING"===e.data.stream.code.toUpperCase()?this.setState(this["const"].PLAYING):this.setState(this["const"].STOPPED),e.data.song&&e.data.song.id&&this.hasTrackChanged(e.data.song.id)&&this.trackHasChanged(e.data.song))},setState:function l(e){return e===this["const"].PLAYING&&e!==this.cache.state?(o("Player is streaming."),this.cache.state=e,this.setDFPCriteria("td-player-state","PLAYING"),void t._CMLS.triggerEvent(t,"td-player.playing")):e===this["const"].STOPPED&&e!==this.cache.state?(o("Player is stopped."),this.cache.state=e,this.setDFPCriteria("td-player-state","STOPPED"),void t._CMLS.triggerEvent(t,"td-player.stopped")):void 0},hasTrackChanged:function c(t){return t&&t!==this.cache.trackId?!0:!1},trackHasChanged:function d(e){o("Song has changed!",e),this.cache.trackId=e.id,e.artist&&this.setDFPCriteria("td-player-artist",e.artist),e.album&&this.setDFPCriteria("td-player-album",e.album),e.title&&this.setDFPCriteria("td-player-track",e.title),this.setDFPCriteria("td-player-id",e.id),t._CMLS.triggerEvent(t,"td-player.trackchange",e)},startTimer:function p(){var t=this;clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){t.checkCurrentTrack(),t.startTimer()},this.interval)},init:function g(){return t.amp_player_config&&t.amp_player_config.station&&t.amp_player_config.stream_id?(this.checkCurrentTrack(),this.startTimer(),this.initialized=!0,o("Initialized!",this.cache.trackId),this):(o("Player configuration not available, exiting."),!1)}},void t._CMLS[i].init()):(o("Triton player not enabled, exiting."),!1)}(window),function($,t,e){function o(){t._CMLS.logger(n+" v"+r,arguments)}if(!$||!$.fn.jquery)throw{message:"Auto-scroll script called without supplying jQuery."};var n="AUTO SCROLL",i="cmlsAutoScrollPastLeaderboard",r="0.7",a={timeout:.15,leaderboardSelector:'.wrapper-header div[id^="div-gpt-ad"]:first',leaderboardHeight:90};t._CMLS[i]||t.DO_NOT_AUTO_SCROLL||(t._CMLS[i]={scrolled:!1,disabled:!1,timer:null,cache:{},regenerateCache:function s(){this.cache.leaderboard=$(a.leaderboardSelector),this.cache.player=$("#tgmp_frame:first,.tdpw:first"),this.cache.window=$(t)},leaderboardOnTop:function l(){if(!this.cache.leaderboard)return o("Leaderboard was not cached."),!1;var t=this.cache.leaderboard.offset();return this.playerOnTop()?t.top<150:t.top<50},playerOnTop:function c(){var e=t._CMLS.whichPlayer();return e.position===t._CMLS["const"].PLAYER_POSITION_TOP?!0:!1},generateScrollToPosition:function d(){if(this.cache.leaderboard){var t=this.cache.leaderboard.offset(),e=t.top+a.leaderboardHeight;return t>a.leaderboardHeight+20?(o("Ad offset is greater than leaderboard height settings, assuming returned ad is incorrect."),a.leaderboardHeight+10):this.playerOnTop()?(e=t.top-this.cache.player.height()+a.leaderboardHeight,o("Player is on top, scrollTo position is "+e,t.top,this.cache.player.height(),this.cache.leaderboard.height()),e):(o("Player is on bottom, scrollTo position is "+e,t.top,this.cache.leaderboard.height()),e)}return 0},hasScrolledPastLeaderboard:function p(){return this.scrolled===!0?!0:this.cache.window.scrollTop()>=this.generateScrollToPosition()?(this.scrolled=!0,!0):!1},conditionsGood:function g(){return this.disabled||t.DO_NOT_AUTO_SCROLL?"Auto-scroll is disabled for this site.":t._CMLS.isHomepage()?this.leaderboardOnTop()?this.hasScrolledPastLeaderboard()?"Already scrolled passed leaderboard.":!0:"Leaderboard is not on top.":"Not on homepage."},scrollPage:function u(){var t=this;o("Pre-animation conditions check.");var e=this.conditionsGood();e!==!0&&(o("Conditions check failed.",e),this.stopTimer()),o("Conditions are good to scroll."),$("html,body").animate({scrollTop:t.generateScrollToPosition()},{queue:i,duration:550}).dequeue(i)},initTimer:function h(){o("Initializing scroll timer.");var t=this,e=t.conditionsGood();return e!==!0?(o("Conditions check after leaderboard render found bad conditions.",e),void t.stopTimer()):($("html,body").clearQueue(i).stop(i,!0),clearTimeout(this.timer),this.timer=null,void(this.timer=setTimeout(function(){t.scrollPage()},6e4*a.timeout)))},stopTimer:function f(){o("Stopping timer, clearing animation queue.",this.timer),$("html,body").clearQueue(i).stop(i,!0),clearTimeout(this.timer),this.timer=null},resetTimer:function m(){o("Resetting scroll timer."),this.initTimer()},init:function _(){o("Initializing auto-scroll library."),this.regenerateCache();var e=this,n=this.conditionsGood();return n!==!0?void o("Init check found bad conditions.",n):(this.cache.window.on("scroll."+i,t._CMLS.throttle(function(){e.hasScrolledPastLeaderboard()&&(e.scrolled=!0,e.stopTimer(),e.cache.window.off("scroll."+i))},500)),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function n(i){if(!i.isEmpty&&"top"===i.slot.getTargeting("pos")){o("Caught leaderboard render event."),e.regenerateCache();var r=e.conditionsGood();r!==!0?(o("Conditions check after leaderboard render found bad conditions.",r),e.stopTimer()):e.resetTimer(),t.googletag.pubads().removeEventListener("slotRenderEnded",n)}})}),"complete"===t.document.readyState?void this.initTimer():void this.cache.window.on("load",function(){e.initTimer()}))}},$(function(){t._CMLS[i].init()}))}(jQuery,window),function(t,e){function o(){t._CMLS.logger(i+" v"+a,arguments)}function n(){if(!t._CMLS.cGroups)return void o("Init test called without cGroups available, exiting.");for(var e=0;e<t._CMLS.cGroups.length;e++)/Format\s+(NewsTalk|Talk|Sports|Christian Talk)/i.test(t._CMLS.cGroups[e])&&(o("Running initialization."),t._CMLS[r].init(),s=!0)}var i="AUTO REFRESH ADS",r="autoRefreshAds",a="0.3";if(t._CMLS=t._CMLS||{},t._CMLS.autoRefreshAdsTimer=4,t._CMLS.autoRefreshAdsTimer=t._CMLS.autoRefreshAdsTimer||8,!t._CMLS[r]){t._CMLS[r]={player:t._CMLS.whichPlayer(),timer:null,boundToRenderEvent:!1,checkConditions:function l(){return t._CMLS.isHomepage()&&t._CMLS.autoReloader&&t._CMLS.autoReloader.active?(o("Autoreloader is active, conditions fail."),!1):!0},stop:function c(){return o("Stopping timer."),clearTimeout(this.timer),this.timer=null,this},start:function d(){if(this.stop(),this.checkConditions()){o("Starting timer at "+t._CMLS.autoRefreshAdsTimer+" minutes.");var e=this;return this.timer=setTimeout(function(){e.fire()},6e4*t._CMLS.autoRefreshAdsTimer),this}},fire:function p(){if(this.checkConditions()){var e=this;t.googletag.cmd.push(function(){o("Refreshing ads."),t.googletag.pubads().refresh(),e.start()})}},init:function g(){o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],this.player.type===t._CMLS["const"].PLAYER_TRITON&&(t.addEventListener("td-player.stopped",function(){t._CMLS[r].stop()},!1),t.addEventListener("td-player.playing",function(){t._CMLS[r].start()},!1),t.History&&t.History.Adapter&&t.History.Adapter.bind(t,"pageChange",function(){t._CMLS[r].start()})),this.player.type===t._CMLS["const"].PLAYER_TUNEGENIE&&t.tgmp&&t.TGMP_EVENTS&&t.tgmp.addEventListener(t.TGMP_EVENTS.streamplaying,function(e){return e===!0?void t._CMLS[r].start():void t._CMLS[r].stop()}),o("Listeners set, waiting for player event."),o("Timer initialized at "+t._CMLS.autoRefreshAdsTimer+" minutes.")}};var s=!1;n(),t.addEventListener("cms-sgroup",function(){s||n()},!1)}}(window),function($,t,e){function o(){t._CMLS.logger(i+" v"+a,arguments)}function n(){return o("Checking for player...",l),t._CMLS[r].isPlayerActive()?void t._CMLS[r].init():void(l>20||(setTimeout(n,1e3),l++))}var i="NAV THROUGH PLAYER",r="navThroughPlayer",a="0.1",s=t._CMLS.whichPlayer();if(!t._CMLS[r]){t._CMLS[r]={isPlayerActive:function c(){return s=t._CMLS.whichPlayer(),s.type?!0:!1},updateIframeLinks:function d(e){if(t._CMLS[r].isPlayerActive){var n=e.jquery?e:$(e);n.contents().find('a[target="_self"],a[target="_top"],a[target="_parent"]').each(function(){o("Updating links in slot.",n.prop("id")),t._CMLS[r].updateLink(this)})}},updateLink:function p(e,o){if(t._CMLS[r].isPlayerActive&&e){var n=e.jquery?e:$(e),i=t.document.createElement("a");if(i.href=n.prop("href"),0===i.href.indexOf("/")||i.hostname!==t.location.hostname&&!o)return void(i=null);n.off("."+r).on("click."+r,t._CMLS[r].clickThrough),i=null}},clickThrough:function g(e){e&&t._CMLS[r].isPlayerActive()&&(e.preventDefault(),o("Intercepting click."),t._CMLS[r].navigate(e.currentTarget.href))},navigate:function u(e){s.type===t._CMLS["const"].PLAYER_TRITON&&t.History&&(o("Navigating through Triton player.",e),t.History.pushState(null,null,e)),s.type===t._CMLS["const"].PLAYER_TUNEGENIE&&t.top.tgmp&&(o("Navigating through TuneGenie player.",e),t.top.tgmp.updateLocation(e))},init:function h(){return t._CMLS[r].isPlayerActive()?(o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function(e){if(e&&e.slot){var o=e.slot.getSlotElementId(),n=t.document.getElementById(o);t._CMLS[r].updateIframeLinks(n)}})}),$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){t._CMLS[r].updateIframeLinks(this)}),$(t).load(function(){$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){t._CMLS[r].updateIframeLinks(this)})}),void o("Initialized.")):void o("No player is active, exiting.")}};var l=0;n()}}(jQuery,window),function($,t,e){function o(){t._CMLS.logger(r+" v"+s,arguments)}function n(n){function i(){var t,o=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkittransitionend",msTransition:"mstransitionend"};for(t in n)if(o.style[t]!==e)return n[t]}function r(t){var e=0,o=t.length,n,i;if(0===o)return e;for(n=0;o>n;n++)i=t.charCodeAt(n),e=(e<<5)-e+i,e&=e;return e}function a(){return S.dfpSlot=$(n.dfpSlotNode),S.injectionNode=$(n.injectionNode),S.stickNode=$(n.stickNode),S.contentNode=$(n.contentNode),S.footerNode=$(n.footerNode),S.obstructiveNode=$(n.obstructiveNode),S.window=$(t),S.document=$(t.document),s(),S}function s(){return o("Refreshing stick position."),S.stickAt=S.stickNode.length?S.stickNode.offset().top:0,S.stickAt}function l(t){if(S.container&&S.container.length)return S.container;var e=$("#"+L+"Container");if(e.length)return S.container=e,S.container;if(t===!0)return!1;o("Generating new wallpaper container."),a();var n=$("<div />",{id:L+"Container","class":L+"-container"});return S.injectionNode.prepend(n),S.container=n,c(),S.container}function c(){var t=l(),e={content:S.contentNode.css(["position","zIndex"]),footer:S.footerNode.css(["position","zIndex"])};"static"===e.content.position&&(o("Setting content area position to relative."),S.contentNode.css("position","relative")),("auto"===e.content.zIndex||e.content.zIndex<=t.css("zIndex"))&&(o("Raising content area above wallpaper container."),S.contentNode.css("zIndex",t.css("zIndex")+1)),"static"===e.footer.position&&(o("Setting footer area position to relative."),S.footerNode.css("position","relative")),S.contentNode.data("originalStyles",e.content),S.footerNode.data("originalStyles",e.footer),o("Content area has been raised.")}function d(){o("Displaying wallpaper.");var t=l();t.off(v).addClass(L+"-open"),S.obstructiveNode.hide(),h()}function p(){function t(){r=!0,S.obstructiveNode.show(),o("Clearing all event listeners."),S.window.off("."+L),n&&n.length&&(o("Removing wallpaper container."),n.off("."+L).remove()),S.container=null,e.resolve()}var e=$.Deferred(),n=l(!0),i=n&&n.length?n.hasClass(L+"-open"):!1,r=!1;return o("RESET!"),n&&n.length?(n.off(v).removeData().removeProp("data").css("backgroundColor","rgba(0,0,0,0)").removeClass(L+"-open").removeClass(L+"-fixed"),o("Container is closing."),v&&i&&n.on(v,function(e){"opacity"===e.originalEvent.propertyName&&(o("Transition complete."),t())}),setTimeout(function(){r||t()},800)):t(),o("Returning our promise."),e.promise()}function g(){var t=l();return t.hasClass(L+"-fixed")}function u(t){var e=l();g()&&t===!1&&(o("Unfixing wallpaper position."),e.removeClass(L+"-fixed").css("top","0")),g()||t!==!0||(o("Fixing wallpaper position."),s(),e.addClass(L+"-fixed").css("top",S.stickAt))}function h(){function t(){var t=S.window.scrollTop(),e=S.injectionNode.length?S.injectionNode.offset().top:0;return e<t+S.stickAt?!0:!1}o("Initializing scroll tracking."),s(),u(t()?!0:!1),S.window.on("scroll."+L,C(function(){return t()?void u(!0):void u(!1)},50)),S.window.on("resize."+L,y(function(){s()},500)),o("Scroll tracking enabled.")}function f(){try{if($(n.contentNode).height()<200)return o("Content node is not ready, retrying."),void setTimeout(function(){f()},500);a(),o("Processing wallpaper slot.");var e=S.dfpSlot.find("iframe"),i=e.contents().find("#google_image_div,body").first(),s=i.find("a:first"),c=i.find("img.img_ad:first,img:first").first(),g=c.prop("alt");if(o("Checking image."),!c.length)return o("No image found in ad slot! Resetting."),void p();var u=l(),h=r((s.length?s.prop("href")+s.prop("target"):"")+c.prop("src"));if(o("Generated hash.",h),h===u.data("hash"))return void o("Requested wallpaper is already set.");o("Getting background color.",g);var m="rgba(255,255,255,0)",_=g.match(/(\#[A-Za-z0-9]+)/)||!1;_&&_.length>1&&(m=_[1]),o("Using background color.",m),p().then(function(){o("Building the new wallpaper.");var e="";s.length&&(e=$("<a />",{href:s.prop("href"),target:s.prop("target")}),t._CMLS.navThroughPlayer&&t._CMLS.navThroughPlayer.updateLink(e[0]));var n=$("<iframe />",{name:L+"Iframe",scrolling:"no",marginWidth:"0",marginHeight:"0",frameborder:"0"});o("Injecting iframe into container."),u=l(),u.data("hash",h).css("backgroundColor",m).append(n);var i='<style>html,body{background:transparent;margin:0;padding:0;width:100%;height:100%;}body{background:url("'+c.prop("src")+'") no-repeat top center;}a{display:block;width:100%;height:100%;text-decoration:none;}</style>';n.load(function(){o("Injecting wallpaper into iframe."),n.contents().find("body").append(i,e)}).prop("src","about:blank"),c.length?(o("Initializing preloader."),$("<img />").bind("load",function(){d(),$(this).remove()}).prop("src",c.prop("src"))):d()})}catch(C){console.log("WTF PEOPLE",C)}}function m(t){var e=t.slot.getTargeting("pos");return e.indexOf("wallpaper-ad")>-1?(o("Caught render event for wallpaper-ad",t.slot.getSlotElementId()),t.isEmpty?(o("Slot was empty, resetting wallpaper container."),p()):(o("Slot contained an ad, processing wallpaper."),f()),!1):void 0}function _(){$(t).off("."+L)}var S={},L=n.nameSpace||"wallpaperInjector",C=t._CMLS.throttle,y=t._CMLS.debounce,v=i();this.reset=p,this.process=f,this.unbindAllListeners=_,o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function(t){y(m(t),1e3)})});var M='<style id="'+L+'Styles">.'+L+"-container {display: block !important;position: absolute;z-index: 0;top: 0;left: 0;height: 0 !important;width: 100% !important;overflow: hidden;text-align: center;transition: opacity 0.5s, height 0.6s, background-color 0.4s;opacity: 0;}."+L+"-container iframe {border: 0;height: 100%;width: 100%;}."+L+"-container ~ .grid-container {transition: box-shadow 0.6s}."+L+"-open {height: 100% !important;opacity: 1;}."+L+"-open ~ .grid-container {box-shadow: 0 0 20px rgba(0,0,0,0.3);}."+L+"-fixed {position: fixed;}"+n.dfpSlotNode+" {display: none !important;}</style>";t.document.getElementById(L+"Styles")||$("head").append(M),"complete"===t.document.readyState||"loaded"===t.document.readyState?f():$(function(){f()})}var i={dfpSlotNode:"#div-gpt-ad-1418849849333-16",injectionNode:".wrapper-content",stickNode:".wrapper-header",contentNode:".wrapper-content .grid-container:first",footerNode:".wrapper-footer",obstructiveNode:".takeover-left, .takeover-right, .skyscraper-left, .skyscraper-right"},r="WALLPAPER INJECTOR",a="wallpaperInjector",s="0.5";t._CMLS[a],i.nameSpace=a,t._CMLS[a]=new n(i)}(jQuery,window),function($,t,e){function o(){s.logger(i+" v"+a,arguments)}function n(){var e=t.top.googletag||{};e.cmd=e.cmd||[],e.cmd.push(function(){$(function(){if($("#CMLSPlayerSponsorship").length)return void o("Container already exists, exiting.");o("Discovering local site ad path.");var t=null;try{var n=e.pubads(),i=Object.getOwnPropertyNames(n);for(var r in i){var a=n[i[r]];if(a.constructor&&a.constructor===Array)for(var l in a[0])if(a[0][l]&&a[0][l].constructor===String&&a[0][l].indexOf("/6717/")>-1){t=a[0][l];break}if(t)break}if(null===t)throw{message:"Could not retrieve ad unit path."}}catch(c){return void o("Failed to retrieve DFP properties.",c)}o("Ad path found, defining new slot.",t);var d=e.defineSlot(t,[[120,60]],"CMLSPlayerSponsorship");d&&d.addService(e.pubads()).setCollapseEmptyDiv(!0).setTargeting("pos","playersponsorlogo"),$("body").append('<style id="CMLSPlayerSponsorshipStyle">#CMLSPlayerSponsorship {position: fixed;z-index: 2147483647;width: 120px;height: 60px;}#CMLSPlayerSponsorship.cmls-player-tg {left: 50%;transform: translate(-520px, 0);}#CMLSPlayerSponsorship.cmls-player-triton {left: 50%;transform: translate(30px, 0);}#CMLSPlayerSponsorship.cmls-player-pos-bottom {bottom: 10px;}#CMLSPlayerSponsorship.cmls-player-pos-top {top: 10px;}#CMLSPlayerSponsorship.cmls-player-triton.cmls-player-pos-top {top: 5px;}@media (max-width: 75rem) {#CMLSPlayerSponsorship.cmls-player-tg {left: 80px;transform: translate(0,0);}}@media (max-width: 1042px) {#CMLSPlayerSponsorship.cmls-player-tg {display: none}}@media (max-width: 800px) {#CMLSPlayerSponsorship.cmls-player-triton {display: none}}</style>');var p=$('<div id="CMLSPlayerSponsorship"><script>googletag.cmd.push(function() { googletag.display("CMLSPlayerSponsorship")});</script></div>'),g=s.whichPlayer();g.position===s["const"].PLAYER_POSITION_TOP&&p.addClass("cmls-player-pos-top"),g.position===s["const"].PLAYER_POSITION_BOTTOM&&p.addClass("cmls-player-pos-bottom"),g.type===s["const"].PLAYER_TRITON&&p.addClass("cmls-player-triton"),g.type===s["const"].PLAYER_TUNEGENIE&&p.addClass("cmls-player-tg"),$("body").append(p),o("Slot initialized.")})})}var i="PLAYER SPONSOR INJECTOR",r="playerSponsorInjector",a="0.1",s=t._CMLS;if(t.self!==t.top)return void $(function(){t.parent._CMLSPlayerSponsorshipInit=t.parent._CMLSPlayerSponsorshipInit||[],t.parent._CMLSPlayerSponsorshipInit.push(1)});var l=function(){};l.prototype=[],l.prototype.push=function(){n()},t.self._CMLSPlayerSponsorshipInit=new l,$(n()),s[r]=a}(window.top.jQuery,window),function(t,e){function o(){t._CMLS.logger(i+" v"+a,arguments)}function n(){function e(){return t.self.document.querySelector(r.condition)}function n(t){return new Date(Date.now()+t)}var i={condition:"body.home",reload_at:null},r=i,a,s=t._CMLS.whichPlayer(),l=this;this.start=function(t){return o("Starting timer.",t),l.stop(),r={condition:t.condition||i.condition,reload_at:n(t&&t.timeout?6e4*t.timeout:4e5)},e()?(o("Starting countdown, reloading at "+r.reload_at),clearInterval(a),void setInterval(l.tick,2e3)):(o("Condition check failed at start."),void l.stop())},this.stop=function(){o("Stopping timer."),a&&(clearInterval(a),a=null)},this.tick=function(){o(n(),r.reload_at),n().getTime()>r.reload_at.getTime()&&(l.stop(),l.fire())},this.fire=function(){if(e()){if(o("Reloading page."),s.type===t._CMLS["const"].PLAYER_TRITON&&t.History&&t.History.Adapter)return void t.History.Adapter.trigger(t,"statechange");if(s.type===t._CMLS["const"].PLAYER_TUNEGENIE)return void t.tgmp.updateLocation(t.self.location.href);t.location.reload()}else o("Condition check failed, stopping timer."),l.stop()}}var i="AUTO-RELOAD PAGE",r="autoReloader",a="0.9";try{t._CMLS[r].stop(),t.top._CMLS[r].stop()}catch(s){}t._CMLS[r]=new n,t._CMLS.autoReload&&t._CMLS.autoReload.length&&(o("Loaded with request.",t._CMLS.autoReload),t._CMLS[r].start(t._CMLS.autoReload[t._CMLS.autoReload.length-1]));var l=function(){};l.prototype=[],l.prototype.push=function(e){t._CMLS[r].start(e)},t._CMLS.autoReload=new l}(window),function(t,e){function o(){t._CMLS.logger(n+" v"+r,arguments)}var n="ADDTHIS INJECTOR",i="addThisInjector",r="0.5",a="ra-55dc79597bae383e";return t.addthis&&t.addthis_config&&t.addthis_config.pubid&&t.addthis_config.pubid!==a?void o("AddThis already loaded by local page."):(t.self!==t.top?(o("Not top window, destroying AddThis in parent window"),t.parent.addthis&&t._CMLS[i]&&t._CMLS[i].destroyLayer()):o("Loaded in top window."),t._CMLS[i]={inject:function s(){if(o("Injecting."),t.addthis_config=t.addthis_config||{},t.addthis_config.pubid=a,t.self!==t.top&&t.addthis)return void o("Not top window, assuming already injected.");var e=t.document.createElement("script");e.onload=function(){return t._CMLS[i].active?void o("Already active."):void t._CMLS[i].buildLayer()},e.src="//s7.addthis.com/js/300/addthis_widget.js#async=1",e.id=i+"Script",e.async=!1,t.document.head.appendChild(e),o("Injected.")},buildLayer:function l(){return t.NO_ADDTHIS_HERE?void o("NO_ADDTHIS_HERE found in window object, will not build."):t._CMLS.isHomepage()?void o("Will not build layer on homepage."):(o("Building layer."),void(t.addthis&&t.addthis.layers?(t.addthis.layers({share:{position:"left",offset:{bottom:"100px"},services:"facebook,twitter,tumblr,email,more"}},function(e){t._CMLS[i].layer=e,t.addthis.layers.refresh(),o("Layer built.")}),t._CMLS[i].active=!0):o("AddThis not available!")))},destroyLayer:function c(){o("Destroying layer."),t.addthis&&t._CMLS[i].active&&t.addthis.layers(function(e){e.destroy(),t._CMLS[i].active=!1})},init:function d(){o("Initializing."),t.History&&t.History.Adapter&&(t.History.Adapter.bind(t,"statechange",t._CMLS[i].destroyLayer),t.History.Adapter.bind(t,"pageChange",t._CMLS[i].buildLayer)),this.inject(),o("Initialized!")}},void t._CMLS[i].init())}(window),function($,t,e){function o(){a.logger(n+" v"+r,arguments)}var n="BREAKING NEWS BAR",i="BreakingNews",r="0.7",a=t._CMLS||{};Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),a[i]=function(e,n){o("Called",typeof e,e,n);var r={classPrefix:"cmlsBreakingNews",additionalClass:"",position:"above",link:"",target:"_top",beforeText:"Breaking News:",text:"",background:"#900",color:"#fff"},s,l=".wrapper-header";if($(l).length){if("object"!=typeof e||Array.isArray(e))if("object"==typeof e&&Array.isArray(e)&&e.length)s=r,s.text=e[0],e.length>1&&(n=e[1]),o("Basic mode!");else{if("object"==typeof e)return void o("Invalid usage!",e,n);s=r,s.text=e,o("Basic mode!")}else s=$.extend({},r,e),o("Advanced mode!");!s.link&&n&&(s.link=n),o("Settings:",s);var c="."+s.classPrefix+"-container { display: block; box-sizing: border-box; position: relative; float: none; overflow: hidden; z-index: 10; padding: 1em; color: #fff; background: #900; box-shadow: 0 0 10px rgba(0,0,0,0.4); font-size: 14px; line-height: 1.2; text-decoration: none; outline: 0 }."+s.classPrefix+"-container > a { display: block; color: inherit !important; cursor: pointer; padding: 1em; margin: -1em; }."+s.classPrefix+"-container > a:hover ."+s.classPrefix+"-before { text-decoration: underline; }."+s.classPrefix+"-inner { box-sizing: border-box; max-width: 1020px; margin: 0 auto; }."+s.classPrefix+"-before { float: left; font-weight: bold; margin-right: .5em; }."+s.classPrefix+"-text { overflow: hidden; }."+s.classPrefix+"-inner a { text-decoration: underline !important; color: inherit; }@media (max-width: 500px) {."+s.classPrefix+"-before { float: none; margin-bottom: .25em; }}",d='<div class="'+s.classPrefix+'-container"><div class="'+s.classPrefix+'-inner">{{BEFORE}}<div class="'+s.classPrefix+'-text">{{TEXT}}</div></div></div>';if(s.beforeText&&s.beforeText.length){var p='<div class="'+s.classPrefix+'-before">'+s.beforeText+"</div>";d=d.replace("{{BEFORE}}",p)}if(d=$(d.replace("{{TEXT}}",s.text)),
s.link&&s.link.length){var g=$("<a></a>").prop({href:s.link,target:s.target});d.wrapInner(g)}d.css({background:s.background,color:s.color}),d.addClass(s.additionalClass).prop("id","CMLS"+i+"-"+Math.floor(1e7*Math.random())),$("#cmlsBreakingNewsStyles").length||$("head").append('<style id="cmlsBreakingNewsStyles">/* CMLS Breaking News Bar styles */\n'+c+"</style>"),"below"===s.position?$(l).after(d):$(l).before(d),a.navThroughPlayer&&(o("Applying navThroughPlayer to bar links."),d.find('a:not([href]),a[target="_self"],a[target="_top"],a[target="_parent"]').each(function(){o("Applying navThroughPlayer to a link.",this.href),a.navThroughPlayer.updateLink($(this))})),"above"===s.position&&(t.DO_NOT_AUTO_SCROLL=!0)}};var s=function(){};s.prototype=[],s.prototype.push=function(){o("Received after-load request.",arguments),a[i].apply(null,arguments)},t["_CMLS"+i]&&t["_CMLS"+i].length&&t["_CMLS"+i].forEach(a[i]),t["_CMLS"+i]=new s}(jQuery,window),function($,t,e){function o(){t._CMLS.logger(n+" v"+r,arguments)}var n="SOCIAL LISTEN LIVE LINK",i="socialListenLiveLink",r="0.1";return t._CMLS=t._CMLS||{},o("Starting..."),t._CMLS[i]?void o("Already loaded, exiting."):t.tgmp?($(function(){o("Locating Listen Live button.");var e=$('.social-icons img[title="Listen Live!!"],.social-icons-container img[title="Listen Live!!"]').parent("a");return e.length?(e.click(function(e){t.tgmp?(e.preventDefault(),o("Playing stream..."),t.tgmp.playStream()):o("TuneGenie player not enabled.")}),void o("Social Listen Live button activated.")):void o("Could not locate Listen Live button in social icons.")}),t._CMLS[i]=r,void o("Initialized.")):void o("TuneGenie player not enabled, exiting.")}(jQuery,window);
//# sourceMappingURL=./compiled-allsites-min.js.map