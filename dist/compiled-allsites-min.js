!function(e,t){e.self!==e.top?e._CMLS={}:e._CMLS=e._CMLS||{},e._CMLS.LOADED||(e._CMLS["const"]=e._CMLS["const"]||{},e._CMLS["const"].PLAYER_TUNEGENIE=8471,e._CMLS["const"].PLAYER_TRITON=8468,e._CMLS["const"].PLAYER_POSITION_TOP=80847980,e._CMLS["const"].PLAYER_POSITION_BOTTOM=80667984,e._CMLS.logger=function o(){if(!e._CMLS||!e._CMLS.debug||"object"!=typeof console||!console.groupCollapsed)return!1;e._CMLS.loggerNamesToColors=e._CMLS.loggerNamesToColors||{};var t,o,n=arguments[0],i=[].slice.call(arguments[1]);e._CMLS.loggerNamesToColors[n]?(t=e._CMLS.loggerNamesToColors[n].background,o=e._CMLS.loggerNamesToColors[n].complement):(t=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),o=parseInt(t,16)>=12303291?"000000":"FFFFFF",e._CMLS.loggerNamesToColors[n]={background:t,complement:o});var r=new Date;r=r.toISOString()?r.toISOString():r.toUTCString();var a=["%c["+n+"]","background: #"+t+"; color: #"+o];i=a.concat(i),e.top.console.groupCollapsed.apply(console,i),e.top.console.log("TIMESTAMP:",r),e.top.console.trace(),e.top.console.groupEnd()},e._CMLS.now=Date.now||function(){return(new Date).getTime()},e._CMLS.throttle=function(t,o,n){var i,r,a,s=null,l=0;n||(n={});var c=function(){l=n.leading===!1?0:e._CMLS.now(),s=null,a=t.apply(i,r),s||(i=r=null)};return function(){var d=e._CMLS.now();l||n.leading!==!1||(l=d);var p=o-(d-l);return i=this,r=arguments,0>=p||p>o?(s&&(clearTimeout(s),s=null),l=d,a=t.apply(i,r),s||(i=r=null)):s||n.trailing===!1||(s=setTimeout(c,p)),a}},e._CMLS.debounce=function(t,o,n){var i,r,a,s,l,c=function(){var d=e._CMLS.now()-s;o>d&&d>=0?i=setTimeout(c,o-d):(i=null,n||(l=t.apply(a,r),i||(a=r=null)))},d=function(){a=this,r=arguments,s=e._CMLS.now();var d=n&&!i;return i||(i=setTimeout(c,o)),d&&(l=t.apply(a,r),a=r=null),l};return d.clear=function(){clearTimeout(i),i=a=r=null},d},e._CMLS.whichPlayer=function(){if(e._CMLS.whichPlayerCache)return e._CMLS.whichPlayerCache;var t={type:null,position:null};return e.tgmp?(e._CMLS.logger("COMMON",["Found TuneGenie player."]),t.type=e._CMLS["const"].PLAYER_TUNEGENIE,e.tgmp.options.position&&"bottom"===e.tgmp.options.position.toLowerCase()?(e._CMLS.logger("COMMON",["TuneGenie player is on the bottom."]),t.position=e._CMLS["const"].PLAYER_POSITION_BOTTOM):e.tgmp.options.position&&"top"===e.tgmp.options.position.toLowerCase()&&(e._CMLS.logger("COMMON",["TuneGenie player is on the top."]),t.position=e._CMLS["const"].PLAYER_POSITION_TOP)):e.TDPW&&(e._CMLS.logger("COMMON",["Found Triton player, assuming it's on top."]),t.type=e._CMLS["const"].PLAYER_TRITON,t.position=e._CMLS["const"].PLAYER_POSITION_TOP),e._CMLS.whichPlayerCache=t,e._CMLS.whichPlayerCache},e._CMLS.isHomepage=function(){return"/"===e.location.pathname&&/[\?&]?p=/i.test(e.location.search)===!1},e._CMLS.triggerEvent=function(t,o,n){var i;e.document.createEvent?(i=e.document.createEvent("CustomEvent"),i.initCustomEvent(o,!0,!0,n)):i=new CustomEvent(o,{detail:n}),t.dispatchEvent(i)},e._CMLS.logger("COMMON",["LIBRARY LOADED!\n                           .__                \n  ____  __ __  _____  __ __|  |  __ __  ______\n_/ ___\\|  |  \\/     \\|  |  \\  | |  |  \\/  ___/\n\\  \\___|  |  /  Y Y  \\  |  /  |_|  |  /___ \\ \n \\___  >____/|__|_|  /____/|____/____//____  >\n     \\/            \\/                      \\/ \n"]),e._CMLS.LOADED=!0)}(window),function(e){function t(){e._CMLS.logger(o+" v"+i,arguments)}var o="GLOBALIZE SGROUPS",n="globalizeSGroups",i="0.5";e._CMLS[n]||(e._CMLS[n]={cycles:0,timer:null,globalize:function r(){var o;try{if(!e.googletag||!e.googletag.pubads())throw{message:"Googletag not yet ready."};var i=e.googletag.pubads();for(var r in i)if(i[r].hasOwnProperty("cms-sgroup")){o=i[r]["cms-sgroup"];break}}catch(a){return e._CMLS[n].cycles>10?void t("TERMINATING. Could not retrieve cms-sgroup in a reasonable time, aborting."):(t("Googletag not ready, waiting to retry..."),e._CMLS[n].timer&&(clearTimeout(e._CMLS[n].timer),e._CMLS[n].timer=null),e._CMLS[n].timer=setTimeout(e._CMLS[n].globalize,500),void e._CMLS[n].cycles++)}t("Globalizing cms-sgroup"),e._CMLS.cGroups=e._CMLS.cGroups||[],e._CMLS.cGroups=o;var s=["cms-sgroup"].concat(e._CMLS.cGroups);e.sharedContainerDataLayer=e.sharedContainerDataLayer||[],e.corpDataLayer=e.corpDataLayer||[],t("Firing events");for(var l=0,c=s.length;c>l;l++)e.sharedContainerDataLayer.push({event:s[l]}),e.corpDataLayer.push({event:s[l]}),e._CMLS.triggerEvent(e,"cms-sgroup",s[l])}},e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag.cmd.push(function(){t("Googletag command queue initiated."),e._CMLS[n].globalize()}))}(window,void 0),function($,e,t){function o(){e.top._CMLS&&e.top._CMLS.logger(i+" v"+a,arguments)}function n(){function t(t){try{if(!t||!t.pid||!t.format)throw{message:"Invalid request, no PID or format given.",data:t};o("Received request for "+t.format+" with PID "+t.pid,t);var i=$.extend({},n[t.format.toLowerCase()],t);o("Injecting",i),e.self._ttf=e.self._ttf||[],e.self._ttf.push(i),$("#cmlsTeadsTag").remove(),function(e){var t,o=e.getElementsByTagName("script")[0];t=e.createElement("script"),t.async=!0,t.id="cmlsTeadsTag",t.src="http://cdn.teads.tv/js/all-v1.js",o.parentNode.insertBefore(t,o)}(e.self.document)}catch(r){o("Failed to process.",r)}}var n={inboard:{slot:".wrapper-content",filter:function(){return e.self.document.body.className.indexOf("home")>-1||e._CMLS.forceTeadsInBoard===!0?(o("On homepage."),!0):(o("Not on homepage."),!1)},format:"inboard",before:!0,css:"margin: auto !important; padding-top: 5px; padding-bottom: 5px; max-width: 1020px",size:{w:1020},launched:!1,components:{skip:{delay:0}},lang:"en",minSlot:0,BTF:!1},inread:{slot:".wrapper-content .column-1 .entry-content p",filter:function(){return e.self.document.body.className.indexOf("single-feed_posts")>-1?(o("On a post page."),!0):(o("Not on a post page."),!1)},format:"inread",before:!1,css:"padding-bottom: 10px !important;",launched:!1,components:{skip:{delay:0}},lang:"en",minSlot:0,BTF:!1}};this.process=t;var i=function(){};if(i.prototype=[],i.prototype.push=function(){for(var e=0;e<arguments.length;e++)arguments[e].format&&arguments[e].pid&&$(t(arguments[e].format,arguments[e].pid))},e.self._teadsinjector&&e.self._teadsinjector.length){o("Found existing requests, processing.",e.self._teadsinjector);for(var r=0;r<e.self._teadsinjector.length;r++)t(e.self._teadsinjector[r])}e.self._teadsinjector=new i,o("Listening for future requests.")}var i="TEADS INJECTOR",r="teadsInjector",a="0.7.12";e.teads&&delete e.teads,e._ttf&&delete e._ttf,e.top===e.self?e.top._CMLS.teadsRemover=function(){o("Removing Teads from top frame."),$('#cmlsTeadsTag,script[src^="http://cdn.teads"],iframe[src*="sync.teads.tv"],style[id^="tt-"]').remove(),e.top._teadsinjector&&delete e.top._teadsinjector,e.top._CMLS[r]&&delete e.top._CMLS[r],e.top.teads&&delete e.top.teads,e.top._ttf&&delete e.top._ttf}:e.top._CMLS.teadsRemover(),e.self._CMLS=e.self._CMLS||{},e.self._CMLS[r]=new n,o("Initialized.")}(jQuery,window),function(e,t){function o(){e._CMLS.logger(n+" v"+r,arguments)}var n="PLAYER WATCH",i="playerWatch",r="0.5";return e._CMLS[i]?!1:e.TDPW?(e._CMLS[i]={initialized:!1,cache:{},timer:null,interval:2500,"const":{STOPPED:0,PLAYING:1},setDFPCriteria:function a(t,n){e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag.cmd.push(function(){o("Setting targeting",t,n),e.googletag.pubads().setTargeting(t,n)})},checkCurrentTrack:function s(){var t=localStorage&&JSON?JSON.parse(localStorage.getItem("tdas.controller."+e.amp_player_config.station+"."+e.amp_player_config.stream_id+".events.current-state")):!1;t&&t.data&&(t.data.stream&&"LIVE_PLAYING"===t.data.stream.code.toUpperCase()?this.setState(this["const"].PLAYING):this.setState(this["const"].STOPPED),t.data.song&&t.data.song.id&&this.hasTrackChanged(t.data.song.id)&&this.trackHasChanged(t.data.song))},setState:function l(t){return t===this["const"].PLAYING&&t!==this.cache.state?(o("Player is streaming."),this.cache.state=t,this.setDFPCriteria("td-player-state","PLAYING"),void e._CMLS.triggerEvent(e,"td-player.playing")):t===this["const"].STOPPED&&t!==this.cache.state?(o("Player is stopped."),this.cache.state=t,this.setDFPCriteria("td-player-state","STOPPED"),void e._CMLS.triggerEvent(e,"td-player.stopped")):void 0},hasTrackChanged:function c(e){return e&&e!==this.cache.trackId?!0:!1},trackHasChanged:function d(t){o("Song has changed!",t),this.cache.trackId=t.id,t.artist&&this.setDFPCriteria("td-player-artist",t.artist),t.album&&this.setDFPCriteria("td-player-album",t.album),t.title&&this.setDFPCriteria("td-player-track",t.title),this.setDFPCriteria("td-player-id",t.id),e._CMLS.triggerEvent(e,"td-player.trackchange",t)},startTimer:function p(){var e=this;clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){e.checkCurrentTrack(),e.startTimer()},this.interval)},init:function g(){return e.amp_player_config&&e.amp_player_config.station&&e.amp_player_config.stream_id?(this.checkCurrentTrack(),this.startTimer(),this.initialized=!0,o("Initialized!",this.cache.trackId),this):(o("Player configuration not available, exiting."),!1)}},void e._CMLS[i].init()):(o("Triton player not enabled, exiting."),!1)}(window),function($,e,t){function o(){e._CMLS.logger(n+" v"+r,arguments)}if(!$||!$.fn.jquery)throw{message:"Auto-scroll script called without supplying jQuery."};var n="AUTO SCROLL",i="cmlsAutoScrollPastLeaderboard",r="0.7",a={timeout:.15,leaderboardSelector:'.wrapper-header div[id^="div-gpt-ad"]:first',leaderboardHeight:90};e._CMLS[i]||e.DO_NOT_AUTO_SCROLL||(e._CMLS[i]={scrolled:!1,disabled:!1,timer:null,cache:{},regenerateCache:function s(){this.cache.leaderboard=$(a.leaderboardSelector),this.cache.player=$("#tgmp_frame:first,.tdpw:first"),this.cache.window=$(e)},leaderboardOnTop:function l(){if(!this.cache.leaderboard)return o("Leaderboard was not cached."),!1;var e=this.cache.leaderboard.offset();return this.playerOnTop()?e.top<150:e.top<50},playerOnTop:function c(){var t=e._CMLS.whichPlayer();return t.position===e._CMLS["const"].PLAYER_POSITION_TOP?!0:!1},generateScrollToPosition:function d(){if(this.cache.leaderboard){var e=this.cache.leaderboard.offset(),t=e.top+a.leaderboardHeight;return e>a.leaderboardHeight+20?(o("Ad offset is greater than leaderboard height settings, assuming returned ad is incorrect."),a.leaderboardHeight+10):this.playerOnTop()?(t=e.top-this.cache.player.height()+a.leaderboardHeight,o("Player is on top, scrollTo position is "+t,e.top,this.cache.player.height(),this.cache.leaderboard.height()),t):(o("Player is on bottom, scrollTo position is "+t,e.top,this.cache.leaderboard.height()),t)}return 0},hasScrolledPastLeaderboard:function p(){return this.scrolled===!0?!0:this.cache.window.scrollTop()>=this.generateScrollToPosition()?(this.scrolled=!0,!0):!1},conditionsGood:function g(){return this.disabled||e.DO_NOT_AUTO_SCROLL?"Auto-scroll is disabled for this site.":e._CMLS.isHomepage()?this.leaderboardOnTop()?this.hasScrolledPastLeaderboard()?"Already scrolled passed leaderboard.":!0:"Leaderboard is not on top.":"Not on homepage."},scrollPage:function u(){var e=this;o("Pre-animation conditions check.");var t=this.conditionsGood();t!==!0&&(o("Conditions check failed.",t),this.stopTimer()),o("Conditions are good to scroll."),$("html,body").animate({scrollTop:e.generateScrollToPosition()},{queue:i,duration:550}).dequeue(i)},initTimer:function f(){o("Initializing scroll timer.");var e=this,t=e.conditionsGood();return t!==!0?(o("Conditions check after leaderboard render found bad conditions.",t),void e.stopTimer()):($("html,body").clearQueue(i).stop(i,!0),clearTimeout(this.timer),this.timer=null,void(this.timer=setTimeout(function(){e.scrollPage()},6e4*a.timeout)))},stopTimer:function h(){o("Stopping timer, clearing animation queue.",this.timer),$("html,body").clearQueue(i).stop(i,!0),clearTimeout(this.timer),this.timer=null},resetTimer:function m(){o("Resetting scroll timer."),this.initTimer()},init:function _(){o("Initializing auto-scroll library."),this.regenerateCache();var t=this,n=this.conditionsGood();return n!==!0?void o("Init check found bad conditions.",n):(this.cache.window.on("scroll."+i,e._CMLS.throttle(function(){t.hasScrolledPastLeaderboard()&&(t.scrolled=!0,t.stopTimer(),t.cache.window.off("scroll."+i))},500)),e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag.cmd.push(function(){e.googletag.pubads().addEventListener("slotRenderEnded",function n(i){if(!i.isEmpty&&"top"===i.slot.getTargeting("pos")){o("Caught leaderboard render event."),t.regenerateCache();var r=t.conditionsGood();r!==!0?(o("Conditions check after leaderboard render found bad conditions.",r),t.stopTimer()):t.resetTimer(),e.googletag.pubads().removeEventListener("slotRenderEnded",n)}})}),"complete"===e.document.readyState?void this.initTimer():void this.cache.window.on("load",function(){t.initTimer()}))}},$(function(){e._CMLS[i].init()}))}(jQuery,window),function(e,t){function o(){e._CMLS.logger(i+" v"+a,arguments)}function n(){if(!e._CMLS.cGroups)return void o("Init test called without cGroups available, exiting.");for(var t=0;t<e._CMLS.cGroups.length;t++)/Format\s+(NewsTalk|Talk|Sports|Christian Talk)/i.test(e._CMLS.cGroups[t])&&(o("Running initialization."),e._CMLS[r].init(),s=!0)}var i="AUTO REFRESH ADS",r="autoRefreshAds",a="0.3";if(e._CMLS=e._CMLS||{},e._CMLS.autoRefreshAdsTimer=4,e._CMLS.autoRefreshAdsTimer=e._CMLS.autoRefreshAdsTimer||8,!e._CMLS[r]){e._CMLS[r]={player:e._CMLS.whichPlayer(),timer:null,boundToRenderEvent:!1,checkConditions:function l(){return e._CMLS.isHomepage()&&e._CMLS.autoReloader&&e._CMLS.autoReloader.active?(o("Autoreloader is active, conditions fail."),!1):!0},stop:function c(){return o("Stopping timer."),clearTimeout(this.timer),this.timer=null,this},start:function d(){if(this.stop(),this.checkConditions()){o("Starting timer at "+e._CMLS.autoRefreshAdsTimer+" minutes.");var t=this;return this.timer=setTimeout(function(){t.fire()},6e4*e._CMLS.autoRefreshAdsTimer),this}},fire:function p(){if(this.checkConditions()){var t=this;e.googletag.cmd.push(function(){o("Refreshing ads."),e.googletag.pubads().refresh(),t.start()})}},init:function g(){o("Initializing."),e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],this.player.type===e._CMLS["const"].PLAYER_TRITON&&(e.addEventListener("td-player.stopped",function(){e._CMLS[r].stop()},!1),e.addEventListener("td-player.playing",function(){e._CMLS[r].start()},!1),e.History&&e.History.Adapter&&e.History.Adapter.bind(e,"pageChange",function(){e._CMLS[r].start()})),this.player.type===e._CMLS["const"].PLAYER_TUNEGENIE&&e.tgmp&&e.TGMP_EVENTS&&e.tgmp.addEventListener(e.TGMP_EVENTS.streamplaying,function(t){return t===!0?void e._CMLS[r].start():void e._CMLS[r].stop()}),o("Listeners set, waiting for player event."),o("Timer initialized at "+e._CMLS.autoRefreshAdsTimer+" minutes.")}};var s=!1;n(),e.addEventListener("cms-sgroup",function(){s||n()},!1)}}(window),function($,e,t){function o(){e._CMLS.logger(i+" v"+a,arguments)}function n(){return o("Checking for player...",l),e._CMLS[r].isPlayerActive()?void e._CMLS[r].init():void(l>20||(setTimeout(n,1e3),l++))}var i="NAV THROUGH PLAYER",r="navThroughPlayer",a="0.1",s=e._CMLS.whichPlayer();if(!e._CMLS[r]){e._CMLS[r]={isPlayerActive:function c(){return s=e._CMLS.whichPlayer(),s.type?!0:!1},updateIframeLinks:function d(t){if(e._CMLS[r].isPlayerActive){var n=t.jquery?t:$(t);n.contents().find('a[target="_self"],a[target="_top"],a[target="_parent"]').each(function(){o("Updating links in slot.",n.prop("id")),e._CMLS[r].updateLink(this)})}},updateLink:function p(t,o){if(e._CMLS[r].isPlayerActive&&t){var n=t.jquery?t:$(t),i=e.document.createElement("a");if(i.href=n.prop("href"),0===i.href.indexOf("/")||i.hostname!==e.location.hostname&&!o)return void(i=null);n.off("."+r).on("click."+r,e._CMLS[r].clickThrough),i=null}},clickThrough:function g(t){t&&e._CMLS[r].isPlayerActive()&&(t.preventDefault(),o("Intercepting click."),e._CMLS[r].navigate(t.currentTarget.href))},navigate:function u(t){s.type===e._CMLS["const"].PLAYER_TRITON&&e.History&&(o("Navigating through Triton player.",t),e.History.pushState(null,null,t)),s.type===e._CMLS["const"].PLAYER_TUNEGENIE&&e.top.tgmp&&(o("Navigating through TuneGenie player.",t),e.top.tgmp.updateLocation(t))},init:function f(){return e._CMLS[r].isPlayerActive()?(o("Initializing."),e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag.cmd.push(function(){e.googletag.pubads().addEventListener("slotRenderEnded",function(t){if(t&&t.slot){var o=t.slot.getSlotElementId(),n=e.document.getElementById(o);e._CMLS[r].updateIframeLinks(n)}})}),$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){e._CMLS[r].updateIframeLinks(this)}),$(e).load(function(){$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){e._CMLS[r].updateIframeLinks(this)})}),void o("Initialized.")):void o("No player is active, exiting.")}};var l=0;n()}}(jQuery,window),function($,e,t){function o(){e._CMLS.logger(r+" v"+s,arguments)}function n(n){function i(){var e,o=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkittransitionend",msTransition:"mstransitionend"};for(e in n)if(o.style[e]!==t)return n[e]}function r(e){var t=0,o=e.length,n,i;if(0===o)return t;for(n=0;o>n;n++)i=e.charCodeAt(n),t=(t<<5)-t+i,t&=t;return t}function a(){return S.dfpSlot=$(n.dfpSlotNode),S.injectionNode=$(n.injectionNode),S.stickNode=$(n.stickNode),S.contentNode=$(n.contentNode),S.footerNode=$(n.footerNode),S.obstructiveNode=$(n.obstructiveNode),S.window=$(e),S.document=$(e.document),s(),S}function s(){return o("Refreshing stick position."),S.stickAt=S.stickNode.length?S.stickNode.offset().top:0,S.stickAt}function l(e){if(S.container&&S.container.length)return S.container;var t=$("#"+L+"Container");if(t.length)return S.container=t,S.container;if(e===!0)return!1;o("Generating new wallpaper container."),a();var n=$("<div />",{id:L+"Container","class":L+"-container"});return S.injectionNode.prepend(n),S.container=n,c(),S.container}function c(){var e=l(),t={content:S.contentNode.css(["position","zIndex"]),footer:S.footerNode.css(["position","zIndex"])};"static"===t.content.position&&(o("Setting content area position to relative."),S.contentNode.css("position","relative")),("auto"===t.content.zIndex||t.content.zIndex<=e.css("zIndex"))&&(o("Raising content area above wallpaper container."),S.contentNode.css("zIndex",e.css("zIndex")+1)),"static"===t.footer.position&&(o("Setting footer area position to relative."),S.footerNode.css("position","relative")),S.contentNode.data("originalStyles",t.content),S.footerNode.data("originalStyles",t.footer),o("Content area has been raised.")}function d(){o("Displaying wallpaper.");var e=l();e.off(y).addClass(L+"-open"),S.obstructiveNode.hide(),f()}function p(){function e(){r=!0,S.obstructiveNode.show(),o("Clearing all event listeners."),S.window.off("."+L),n&&n.length&&(o("Removing wallpaper container."),n.off("."+L).remove()),S.container=null,t.resolve()}var t=$.Deferred(),n=l(!0),i=n&&n.length?n.hasClass(L+"-open"):!1,r=!1;return o("RESET!"),n&&n.length?(n.off(y).removeData().removeProp("data").css("backgroundColor","rgba(0,0,0,0)").removeClass(L+"-open").removeClass(L+"-fixed"),o("Container is closing."),y&&i&&n.on(y,function(t){"opacity"===t.originalEvent.propertyName&&(o("Transition complete."),e())}),setTimeout(function(){r||e()},800)):e(),o("Returning our promise."),t.promise()}function g(){var e=l();return e.hasClass(L+"-fixed")}function u(e){var t=l();g()&&e===!1&&(o("Unfixing wallpaper position."),t.removeClass(L+"-fixed").css("top","0")),g()||e!==!0||(o("Fixing wallpaper position."),s(),t.addClass(L+"-fixed").css("top",S.stickAt))}function f(){function e(){var e=S.window.scrollTop(),t=S.injectionNode.length?S.injectionNode.offset().top:0;return t<e+S.stickAt?!0:!1}o("Initializing scroll tracking."),s(),u(e()?!0:!1),S.window.on("scroll."+L,C(function(){return e()?void u(!0):void u(!1)},50)),S.window.on("resize."+L,v(function(){s()},500)),o("Scroll tracking enabled.")}function h(){try{if($(n.contentNode).height()<200)return o("Content node is not ready, retrying."),void setTimeout(function(){h()},500);a(),o("Processing wallpaper slot.");var t=S.dfpSlot.find("iframe"),i=t.contents().find("#google_image_div,body").first(),s=i.find("a:first"),c=i.find("img.img_ad:first,img:first").first(),g=c.prop("alt");if(o("Checking image."),!c.length)return o("No image found in ad slot! Resetting."),void p();var u=l(),f=r((s.length?s.prop("href")+s.prop("target"):"")+c.prop("src"));if(o("Generated hash.",f),f===u.data("hash"))return void o("Requested wallpaper is already set.");o("Getting background color.",g);var m="rgba(255,255,255,0)",_=g.match(/(\#[A-Za-z0-9]+)/)||!1;_&&_.length>1&&(m=_[1]),o("Using background color.",m),p().then(function(){o("Building the new wallpaper.");var t="";s.length&&(t=$("<a />",{href:s.prop("href"),target:s.prop("target")}),e._CMLS.navThroughPlayer&&e._CMLS.navThroughPlayer.updateLink(t[0]));var n=$("<iframe />",{name:L+"Iframe",scrolling:"no",marginWidth:"0",marginHeight:"0",frameborder:"0"});o("Injecting iframe into container."),u=l(),u.data("hash",f).css("backgroundColor",m).append(n);var i='<style>html,body{background:transparent;margin:0;padding:0;width:100%;height:100%;}body{background:url("'+c.prop("src")+'") no-repeat top center;}a{display:block;width:100%;height:100%;text-decoration:none;}</style>';n.load(function(){o("Injecting wallpaper into iframe."),n.contents().find("body").append(i,t)}).prop("src","about:blank"),c.length?(o("Initializing preloader."),$("<img />").bind("load",function(){d(),$(this).remove()}).prop("src",c.prop("src"))):d()})}catch(C){console.log("WTF PEOPLE",C)}}function m(e){var t=e.slot.getTargeting("pos");return t.indexOf("wallpaper-ad")>-1?(o("Caught render event for wallpaper-ad",e.slot.getSlotElementId()),e.isEmpty?(o("Slot was empty, resetting wallpaper container."),p()):(o("Slot contained an ad, processing wallpaper."),h()),!1):void 0}function _(){$(e).off("."+L)}var S={},L=n.nameSpace||"wallpaperInjector",C=e._CMLS.throttle,v=e._CMLS.debounce,y=i();this.reset=p,this.process=h,this.unbindAllListeners=_,o("Initializing."),e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag.cmd.push(function(){e.googletag.pubads().addEventListener("slotRenderEnded",function(e){v(m(e),1e3)})});var M='<style id="'+L+'Styles">.'+L+"-container {display: block !important;position: absolute;z-index: 0;top: 0;left: 0;height: 0 !important;width: 100% !important;overflow: hidden;text-align: center;transition: opacity 0.5s, height 0.6s, background-color 0.4s;opacity: 0;}."+L+"-container iframe {border: 0;height: 100%;width: 100%;}."+L+"-container ~ .grid-container {transition: box-shadow 0.6s}."+L+"-open {height: 100% !important;opacity: 1;}."+L+"-open ~ .grid-container {box-shadow: 0 0 20px rgba(0,0,0,0.3);}."+L+"-fixed {position: fixed;}"+n.dfpSlotNode+" {display: none !important;}</style>";e.document.getElementById(L+"Styles")||$("head").append(M),"complete"===e.document.readyState||"loaded"===e.document.readyState?h():$(function(){h()})}var i={dfpSlotNode:"#div-gpt-ad-1418849849333-16",injectionNode:".wrapper-content",stickNode:".wrapper-header",contentNode:".wrapper-content .grid-container:first",footerNode:".wrapper-footer",obstructiveNode:".takeover-left, .takeover-right, .skyscraper-left, .skyscraper-right"},r="WALLPAPER INJECTOR",a="wallpaperInjector",s="0.5";e._CMLS[a],i.nameSpace=a,e._CMLS[a]=new n(i)}(jQuery,window),function($,e,t){function o(){s.logger(i+" v"+a,arguments)}function n(){var t=e.top.googletag||{};t.cmd=t.cmd||[],t.cmd.push(function(){$(function(){if($("#CMLSPlayerSponsorship").length)return void o("Container already exists, exiting.");o("Discovering local site ad path.");var e=null;try{var n=t.pubads(),i=Object.getOwnPropertyNames(n);for(var r in i){var a=n[i[r]];if(a.constructor&&a.constructor===Array)for(var l in a[0])if(a[0][l]&&a[0][l].constructor===String&&a[0][l].indexOf("/6717/")>-1){e=a[0][l];break}if(e)break}if(null===e)throw{message:"Could not retrieve ad unit path."}}catch(c){return void o("Failed to retrieve DFP properties.",c)}o("Ad path found, defining new slot.",e);var d=t.defineSlot(e,[[120,60]],"CMLSPlayerSponsorship");d&&d.addService(t.pubads()).setCollapseEmptyDiv(!0).setTargeting("pos","playersponsorlogo"),$("body").append('<style id="CMLSPlayerSponsorshipStyle">#CMLSPlayerSponsorship {position: fixed;z-index: 2147483647;width: 120px;height: 60px;}#CMLSPlayerSponsorship.cmls-player-tg {left: 50%;transform: translate(-520px, 0);}#CMLSPlayerSponsorship.cmls-player-triton {left: 50%;transform: translate(30px, 0);}#CMLSPlayerSponsorship.cmls-player-pos-bottom {bottom: 10px;}#CMLSPlayerSponsorship.cmls-player-pos-top {top: 10px;}#CMLSPlayerSponsorship.cmls-player-triton.cmls-player-pos-top {top: 5px;}@media (max-width: 75rem) {#CMLSPlayerSponsorship.cmls-player-tg {left: 80px;transform: translate(0,0);}}@media (max-width: 1042px) {#CMLSPlayerSponsorship.cmls-player-tg {display: none}}@media (max-width: 800px) {#CMLSPlayerSponsorship.cmls-player-triton {display: none}}</style>');var p=$('<div id="CMLSPlayerSponsorship"><script>googletag.cmd.push(function() { googletag.display("CMLSPlayerSponsorship")});</script></div>'),g=s.whichPlayer();g.position===s["const"].PLAYER_POSITION_TOP&&p.addClass("cmls-player-pos-top"),g.position===s["const"].PLAYER_POSITION_BOTTOM&&p.addClass("cmls-player-pos-bottom"),g.type===s["const"].PLAYER_TRITON&&p.addClass("cmls-player-triton"),g.type===s["const"].PLAYER_TUNEGENIE&&p.addClass("cmls-player-tg"),$("body").append(p),o("Slot initialized.")})})}var i="PLAYER SPONSOR INJECTOR",r="playerSponsorInjector",a="0.1",s=e._CMLS;if(e.self!==e.top)return void $(function(){e.parent._CMLSPlayerSponsorshipInit=e.parent._CMLSPlayerSponsorshipInit||[],e.parent._CMLSPlayerSponsorshipInit.push(1)});var l=function(){};l.prototype=[],l.prototype.push=function(){n()},e.self._CMLSPlayerSponsorshipInit=new l,$(n()),s[r]=a}(window.top.jQuery,window),function(e,t){function o(){e._CMLS.logger(i+" v"+r,arguments)}function n(){function t(){return l.type===e._CMLS["const"].PLAYER_TUNEGENIE&&e.page_frame?e.page_frame.document.querySelector(r.condition):e.document.querySelector(r.condition)}function n(e){return new Date(Date.now()+e)}var i={condition:"body.home",timeout:8},r=i,a,s,l=e._CMLS.whichPlayer(),c=this;this.start=function(e){return o("Starting timer.",e),c.stop(),r={condition:e.condition||i.condition,timeout:e.timeout||i.timeout},t()?(s=n(6e4*r.timeout),o("Starting countdown, reloading at "+s),void(a=setInterval(c.tick,1e4))):void o("Condition check failed at start.")},this.stop=function(){a&&(o("Stopping timer."),clearInterval(a),a=null)},this.tick=function(){Date.now()>s.getTime()&&c.fire()},this.fire=function(){return c.stop(),t()?(o("Reloading page."),l.type===e._CMLS["const"].PLAYER_TRITON&&e.History&&e.History.Adapter?void e.History.Adapter.trigger(e,"statechange"):l.type===e._CMLS["const"].PLAYER_TUNEGENIE?void e.tgmp.updateLocation(e.location.href):void e.location.reload()):void o("Condition check failed before firing, timer stopped.")},this.push=function(e){o("Received request.",e),c.start(e)}}var i="AUTO-RELOAD PAGE",r="0.9",a;e._CMLS.autoReload&&e._CMLS.autoReload.constructor===Array&&e._CMLS.autoReload.length&&(o("Loaded with request.",e._CMLS.autoReload),a=e._CMLS.autoReload[e._CMLS.autoReload.length-1]),e._CMLS.autoReload&&e._CMLS.autoReload.constructor!==Array||(e._CMLS.autoReload=new n),o("Initialized."),a&&e._CMLS.autoReload.push(a)}(window.top),function($,e,t){$(function(){e.NO_ADDTHIS_HERE&&$(".addthis-smartlayers").hide()})}(jQuery,window),function($,e,t){function o(){a.logger(n+" v"+r,arguments)}var n="BREAKING NEWS BAR",i="BreakingNews",r="0.7",a=e._CMLS||{};Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),a[i]=function(t,n){o("Called",typeof t,t,n);var r={classPrefix:"cmlsBreakingNews",additionalClass:"",position:"above",link:"",target:"_top",beforeText:"Breaking News:",text:"",background:"#900",color:"#fff"},s,l=".wrapper-header";if($(l).length){if("object"!=typeof t||Array.isArray(t))if("object"==typeof t&&Array.isArray(t)&&t.length)s=r,s.text=t[0],t.length>1&&(n=t[1]),o("Basic mode!");else{if("object"==typeof t)return void o("Invalid usage!",t,n);s=r,s.text=t,o("Basic mode!")}else s=$.extend({},r,t),o("Advanced mode!");!s.link&&n&&(s.link=n),o("Settings:",s);var c="."+s.classPrefix+"-container { display: block; box-sizing: border-box; position: relative; float: none; overflow: hidden; z-index: 10; padding: 1em; color: #fff; background: #900; box-shadow: 0 0 10px rgba(0,0,0,0.4); font-size: 14px; line-height: 1.2; text-decoration: none; outline: 0 }."+s.classPrefix+"-container > a { display: block; color: inherit !important; cursor: pointer; padding: 1em; margin: -1em; }."+s.classPrefix+"-container > a:hover ."+s.classPrefix+"-before { text-decoration: underline; }."+s.classPrefix+"-inner { box-sizing: border-box; max-width: 1020px; margin: 0 auto; }."+s.classPrefix+"-before { float: left; font-weight: bold; margin-right: .5em; }."+s.classPrefix+"-text { overflow: hidden; }."+s.classPrefix+"-inner a { text-decoration: underline !important; color: inherit; }@media (max-width: 500px) {."+s.classPrefix+"-before { float: none; margin-bottom: .25em; }}",d='<div class="'+s.classPrefix+'-container"><div class="'+s.classPrefix+'-inner">{{BEFORE}}<div class="'+s.classPrefix+'-text">{{TEXT}}</div></div></div>';if(s.beforeText&&s.beforeText.length){var p='<div class="'+s.classPrefix+'-before">'+s.beforeText+"</div>";d=d.replace("{{BEFORE}}",p)}if(d=$(d.replace("{{TEXT}}",s.text)),s.link&&s.link.length){var g=$("<a></a>").prop({href:s.link,target:s.target});d.wrapInner(g)}d.css({background:s.background,color:s.color}),d.addClass(s.additionalClass).prop("id","CMLS"+i+"-"+Math.floor(1e7*Math.random())),$("#cmlsBreakingNewsStyles").length||$("head").append('<style id="cmlsBreakingNewsStyles">/* CMLS Breaking News Bar styles */\n'+c+"</style>"),"below"===s.position?$(l).after(d):$(l).before(d),a.navThroughPlayer&&(o("Applying navThroughPlayer to bar links."),d.find('a:not([href]),a[target="_self"],a[target="_top"],a[target="_parent"]').each(function(){o("Applying navThroughPlayer to a link.",this.href),a.navThroughPlayer.updateLink($(this))})),"above"===s.position&&(e.DO_NOT_AUTO_SCROLL=!0)}};var s=function(){};s.prototype=[],s.prototype.push=function(){o("Received after-load request.",arguments),a[i].apply(null,arguments)},e["_CMLS"+i]&&e["_CMLS"+i].length&&e["_CMLS"+i].forEach(a[i]),e["_CMLS"+i]=new s}(jQuery,window),function($,e,t){function o(){e._CMLS.logger(n+" v"+r,arguments)}var n="SOCIAL LISTEN LIVE LINK",i="socialListenLiveLink",r="0.1";return e._CMLS=e._CMLS||{},o("Starting..."),e._CMLS[i]?void o("Already loaded, exiting."):e.tgmp?($(function(){o("Locating Listen Live button.");var t=$('.social-icons img[title="Listen Live!!"],.social-icons-container img[title="Listen Live!!"]').parent("a");return t.length?(t.click(function(t){e.tgmp?(t.preventDefault(),o("Playing stream..."),e.tgmp.playStream()):o("TuneGenie player not enabled.")}),void o("Social Listen Live button activated.")):void o("Could not locate Listen Live button in social icons.")}),e._CMLS[i]=r,void o("Initialized.")):void o("TuneGenie player not enabled, exiting.")}(jQuery,window);
//# sourceMappingURL=./compiled-allsites-min.js.map