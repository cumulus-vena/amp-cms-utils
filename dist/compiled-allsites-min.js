!function(t,e){t._CMLS=t._CMLS||{},t._CMLS.LOADED||(t._CMLS["const"]=t._CMLS["const"]||{},t._CMLS["const"].PLAYER_TUNEGENIE=8471,t._CMLS["const"].PLAYER_TRITON=8468,t._CMLS["const"].PLAYER_POSITION_TOP=80847980,t._CMLS["const"].PLAYER_POSITION_BOTTOM=80667984,t._CMLS.logger=function o(){if(!t._CMLS||!t._CMLS.debug||"object"!=typeof console||!console.groupCollapsed)return!1;t._CMLS.loggerNamesToColors=t._CMLS.loggerNamesToColors||{};var e,o,i=arguments[0],n=[].slice.call(arguments[1]);t._CMLS.loggerNamesToColors[i]?(e=t._CMLS.loggerNamesToColors[i].background,o=t._CMLS.loggerNamesToColors[i].complement):(e=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),o=parseInt(e,16)>=12303291?"000000":"FFFFFF",t._CMLS.loggerNamesToColors[i]={background:e,complement:o});var r=new Date;r=r.toISOString()?r.toISOString():r.toUTCString();var a=["%c["+i+"]","background: #"+e+"; color: #"+o];n=a.concat(n),console.groupCollapsed.apply(console,n),console.log("TIMESTAMP:",r),console.groupEnd()},t._CMLS.now=Date.now||function(){return(new Date).getTime()},t._CMLS.throttle=function(e,o,i){var n,r,a,s=null,c=0;i||(i={});var d=function(){c=i.leading===!1?0:t._CMLS.now(),s=null,a=e.apply(n,r),s||(n=r=null)};return function(){var l=t._CMLS.now();c||i.leading!==!1||(c=l);var u=o-(l-c);return n=this,r=arguments,0>=u||u>o?(s&&(clearTimeout(s),s=null),c=l,a=e.apply(n,r),s||(n=r=null)):s||i.trailing===!1||(s=setTimeout(d,u)),a}},t._CMLS.debounce=function(e,o,i){var n,r,a,s,c,d=function(){var l=t._CMLS.now()-s;o>l&&l>=0?n=setTimeout(d,o-l):(n=null,i||(c=e.apply(a,r),n||(a=r=null)))},l=function(){a=this,r=arguments,s=t._CMLS.now();var l=i&&!n;return n||(n=setTimeout(d,o)),l&&(c=e.apply(a,r),a=r=null),c};return l.clear=function(){clearTimeout(n),n=a=r=null},l},t._CMLS.whichPlayer=function(){if(t._CMLS.whichPlayerCache)return t._CMLS.whichPlayerCache;var e={type:null,position:null};return t.tgmp?(t._CMLS.logger("COMMON","Found TuneGenie player."),e.type=t._CMLS["const"].PLAYER_TUNEGENIE,t.tgmp.options.position&&"bottom"===t.tgmp.options.position.toLowerCase()?(t._CMLS.logger("COMMON","TuneGenie player is on the bottom."),e.position=t._CMLS["const"].PLAYER_POSITION_BOTTOM):t.tgmp.options.position&&"top"===t.tgmp.options.position.toLowerCase()&&(t._CMLS.logger("COMMON","TuneGenie player is on the bottom."),e.position=t._CMLS["const"].PLAYER_POSITION_TOP)):t.TDPW&&(t._CMLS.logger("COMMON","Found Triton player, assuming it's on top."),e.type=t._CMLS["const"].PLAYER_TRITON,e.position=t._CMLS["const"].PLAYER_POSITION_TOP),t._CMLS.whichPlayerCache=e,t._CMLS.whichPlayerCache},t._CMLS.isHomepage=function(){return"/"===t.location.pathname&&/[\?&]?p=/i.test(t.location.search)===!1},t._CMLS.triggerEvent=function(e,o,i){var n;t.document.createEvent?(n=t.document.createEvent("CustomEvent"),n.initCustomEvent(o,!0,!0,i)):n=new CustomEvent(o,{detail:i}),e.dispatchEvent(n)},t._CMLS.LOADED=!0)}(window),function(t){function e(){t._CMLS.logger(o+" v"+n,arguments)}var o="GLOBALIZE SGROUPS",i="globalizeSGroups",n="0.5";t._CMLS[i]||(t._CMLS[i]={cycles:0,timer:null,globalize:function r(){if(!t.googletag.pubads().G||!t.googletag.pubads().G["cms-sgroup"])return t._CMLS[i].cycles>10?void e("Could not retrieve cms-sgroup in a reasonable time, aborting."):(e("Googletag not ready, waiting to retry..."),t._CMLS[i].timer&&(clearTimeout(t._CMLS[i].timer),t._CMLS[i].timer=null),t._CMLS[i].timer=setTimeout(t._CMLS[i].globalize,500),void t._CMLS[i].cycles++);e("Globalizing cms-sgroup"),t._CMLS.cGroups=t._CMLS.cGroups||[],t._CMLS.cGroups=t.googletag.pubads().G["cms-sgroup"];var o=["cms-sgroup"].concat(t._CMLS.cGroups);t.sharedContainerDataLayer=t.sharedContainerDataLayer||[],t.corpDataLayer=t.corpDataLayer||[],e("Firing events");for(var n=0,r=o.length;r>n;n++)t.sharedContainerDataLayer.push({event:o[n]}),t.corpDataLayer.push({event:o[n]}),t._CMLS.triggerEvent(t,"cms-sgroup",o[n])}},t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){e("Googletag command queue initiated."),t._CMLS[i].globalize()}))}(window,void 0),function($,t,e){function o(){t._CMLS.logger(n+" v"+a,arguments)}function i(){function e(t){if(t.format&&t.pid)switch(o("Received request for "+t.format+" with PID "+t.pid),t.format.toLowerCase()){case"inread":r(t.pid);break;case"inboard":n(t.pid)}else o("Invalid request. No pid or format given.",t)}function i(){var e=1e3,o=1e3;return"number"==typeof t.innerWidth?e=t.innerWidth:document.documentElement&&document.documentElement.clientWidth?e=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(e=document.body.clientWidth),e>1e3&&(e=1e3),"number"==typeof t.innerHeight?o=t.innerHeight:document.documentElement&&document.documentElement.clientHeight?o=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(o=document.body.clientHeight),{w:e,h:o}}function n(e){var o=i();c({pid:e,slot:".wrapper-content.",filter:function(){return t.document.body.className.indexOf("home")>-1},format:"inboard",before:!0,css:"margin: auto !important; padding-top: 5px; padding-bottom: 5px; max-width: 1000px",size:{w:o.w}})}function r(e){c({pid:e,slot:".wrapper-content .column-1 .entry-content p",filter:function(){return t.document.body.className.indexOf("single-feed_posts")>-1},format:"inread",before:!1,css:"padding-bottom: 10px !important;"})}function a(){o("Refreshing cache, re-inserting PID requests.");for(var e in d)if(d.hasOwnProperty(e)){for(var i=0;i<t._ttf.length;i++)t._ttf[i].pid===d[e].pid&&t._ttf.splice(i,1);d[e].launched=!1,c(d[e])}}function s(){$("#cmlsTeadsTag").remove(),function(t){var e,o=t.getElementsByTagName("script")[0];e=t.createElement("script"),e.async=!0,e.id="cmlsTeadsTag",e.src="http://cdn.teads.tv/js/all-v1.js",o.parentNode.insertBefore(e,o)}(t.document)}function c(e){return e.pid&&e.slot&&e.format?(e.components=e.components||{skip:{delay:0}},e.lang=e.lang||"en",e.filter=e.filter||function(){return!0},e.minSlot=e.minSlot||0,e.before=e.before||!1,e.BTF=e.BTF||!1,e.css=e.css||"margin: auto !important;",o("Injecting",e),t._ttf=t._ttf||[],t._ttf.push(e),s(),void(d[e.pid]=e)):(o("Invalid request. No pid, slot, or format given.",e),!1)}var d={};this.process=e,this.refreshCache=a;var l=function(){};if(l.prototype=[],l.prototype.push=function(){for(var t=0;t<arguments.length;t++)arguments[t].format&&arguments[t].pid&&e(arguments[t].format,arguments[t].pid)},t._teadsinjector&&t._teadsinjector.length)for(var u=0;u<t._teadsinjector.length;u++)e(t._teadsinjector[u]);t._teadsinjector=new l,o("Listening for future requests.")}var n="TEADS INJECTOR",r="teadsInjector",a="0.7";if(!t._CMLS[r]&&!t.teads){t._CMLS[r]=new i;var s=t._CMLS.whichPlayer();s&&s.type&&s.type===t._CMLS["const"].PLAYER_TRITON&&t.History&&t.History.Adapter&&(o("Binding refreshCache to pageChange event."),t.History.Adapter.bind(t,"pageChange",function(){$(t._CMLS[r].refreshCache)}))}}(jQuery,window),function(t,e){function o(){t._CMLS.logger(i+" v"+r,arguments)}var i="PLAYER WATCH",n="playerWatch",r="0.5";return t._CMLS[n]?!1:t.TDPW?(t._CMLS[n]={initialized:!1,cache:{},timer:null,interval:2500,"const":{STOPPED:0,PLAYING:1},setDFPCriteria:function a(e,i){t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){o("Setting targeting",e,i),t.googletag.pubads().setTargeting(e,i)})},checkCurrentTrack:function s(){var e=localStorage&&JSON?JSON.parse(localStorage.getItem("tdas.controller."+t.amp_player_config.station+"."+t.amp_player_config.stream_id+".events.current-state")):!1;e&&e.data&&(e.data.stream&&"LIVE_PLAYING"===e.data.stream.code.toUpperCase()?this.setState(this["const"].PLAYING):this.setState(this["const"].STOPPED),e.data.song&&e.data.song.id&&this.hasTrackChanged(e.data.song.id)&&this.trackHasChanged(e.data.song))},setState:function c(e){return e===this["const"].PLAYING&&e!==this.cache.state?(o("Player is streaming."),this.cache.state=e,this.setDFPCriteria("td-player-state","PLAYING"),void t._CMLS.triggerEvent(t,"td-player.playing")):e===this["const"].STOPPED&&e!==this.cache.state?(o("Player is stopped."),this.cache.state=e,this.setDFPCriteria("td-player-state","STOPPED"),void t._CMLS.triggerEvent(t,"td-player.stopped")):void 0},hasTrackChanged:function d(t){return t&&t!==this.cache.trackId?!0:!1},trackHasChanged:function l(e){o("Song has changed!",e),this.cache.trackId=e.id,e.artist&&this.setDFPCriteria("td-player-artist",e.artist),e.album&&this.setDFPCriteria("td-player-album",e.album),e.title&&this.setDFPCriteria("td-player-track",e.title),this.setDFPCriteria("td-player-id",e.id),t._CMLS.triggerEvent(t,"td-player.trackchange",e)},startTimer:function u(){var t=this;clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){t.checkCurrentTrack(),t.startTimer()},this.interval)},init:function g(){return t.amp_player_config&&t.amp_player_config.station&&t.amp_player_config.stream_id?(this.checkCurrentTrack(),this.startTimer(),this.initialized=!0,o("Initialized!",this.cache.trackId),this):(o("Player configuration not available, exiting."),!1)}},void t._CMLS[n].init()):(o("Triton player not enabled, exiting."),!1)}(window),function($,t,e){function o(){t._CMLS.logger(i+" v"+r,arguments)}if(!$||!$.fn.jquery)throw{message:"Auto-scroll script called without supplying jQuery."};var i="AUTO SCROLL",n="cmlsAutoScrollPastLeaderboard",r="0.7",a={timeout:.15,leaderboardSelector:'.wrapper-header div[id^="div-gpt-ad"]:first'};t._CMLS[n]||t.DO_NOT_AUTO_SCROLL||(t._CMLS[n]={scrolled:!1,disabled:!1,timer:null,cache:{},regenerateCache:function s(){this.cache.leaderboard=$(a.leaderboardSelector),this.cache.player=$("#tgmp_frame:first,.tdpw:first"),this.cache.window=$(t)},leaderboardOnTop:function c(){if(!this.cache.leaderboard)return o("Leaderboard was not cached."),!1;var t=this.cache.leaderboard.offset();return this.playerOnTop()?t.top<150:t.top<50},playerOnTop:function d(){var e=t._CMLS.whichPlayer();return e.position===t._CMLS["const"].PLAYER_POSITION_TOP?!0:!1},generateScrollToPosition:function l(){if(this.cache.leaderboard){var t=this.cache.leaderboard.offset();return this.playerOnTop()?t.top-this.cache.player.height()+this.cache.leaderboard.height():t.top+this.cache.leaderboard.height()}return 0},hasScrolledPastLeaderboard:function u(){return this.scrolled===!0?!0:this.cache.window.scrollTop()>=this.generateScrollToPosition()?(this.scrolled=!0,!0):!1},conditionsGood:function g(){return this.disabled?"Auto-scroll is disabled for this site.":t._CMLS.isHomepage()?this.leaderboardOnTop()?this.hasScrolledPastLeaderboard()?"Already scrolled passed leaderboard.":!0:"Leaderboard is not on top.":"Not on homepage."},scrollPage:function p(){var t=this;o("Pre-animation conditions check.");var e=this.conditionsGood();e!==!0&&(o("Conditions check failed.",e),this.stopTimer()),$("html,body").animate({scrollTop:t.generateScrollToPosition()},{queue:n,duration:550}).dequeue(n)},initTimer:function h(){o("Initializing scroll timer.");var t=this,e=t.conditionsGood();return e!==!0?(o("Conditions check after leaderboard render found bad conditions.",e),void t.stopTimer()):($("html,body").clearQueue(n).stop(n,!0),clearTimeout(this.timer),this.timer=null,void(this.timer=setTimeout(function(){t.scrollPage()},6e4*a.timeout)))},stopTimer:function f(){o("Stopping timer, clearing animation queue.",this.timer),$("html,body").clearQueue(n).stop(n,!0),clearTimeout(this.timer),this.timer=null},resetTimer:function m(){o("Resetting scroll timer."),this.initTimer()},init:function C(){o("Initializing auto-scroll library."),this.regenerateCache();var e=this,i=this.conditionsGood();return i!==!0?void o("Init check found bad conditions.",i):(this.cache.window.on("scroll."+n,t._CMLS.throttle(function(){e.hasScrolledPastLeaderboard()&&(e.scrolled=!0,e.stopTimer(),e.cache.window.off("scroll."+n))},500)),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function i(n){if(!n.isEmpty&&"top"===n.slot.getTargeting("pos")){o("Caught leaderboard render event."),e.regenerateCache();var r=e.conditionsGood();r!==!0?(o("Conditions check after leaderboard render found bad conditions.",r),e.stopTimer()):e.resetTimer(),t.googletag.pubads().removeEventListener("slotRenderEnded",i)}})}),"complete"===t.document.readyState?void this.initTimer():void this.cache.window.on("load",function(){e.initTimer()}))}},$(function(){t._CMLS[n].init()}))}(jQuery,window),function(t,e){function o(){t._CMLS.logger(n+" v"+a,arguments)}function i(){if(!t._CMLS.cGroups)return void o("Init test called without cGroups available, exiting.");for(var e=0;e<t._CMLS.cGroups.length;e++)/Format\s+(NewsTalk|Talk|Sports|Christian Talk)/i.test(t._CMLS.cGroups[e])&&(o("Running initialization."),t._CMLS[r].init(),c=!0)}var n="AUTO REFRESH ADS",r="autoRefreshAds",a="0.3",s=8;if(!t._CMLS[r]){t._CMLS[r]={player:t._CMLS.whichPlayer(),timer:null,boundToRenderEvent:!1,checkConditions:function d(){return t._CMLS.isHomepage()&&t._CMLS.autoReloader&&t._CMLS.autoReloader.active?(o("Autoreloader is active, conditions fail."),!1):!0},stop:function l(){return o("Stopping timer."),clearTimeout(this.timer),this.timer=null,this},start:function u(){if(this.stop(),this.checkConditions()){o("Starting timer.");var t=this;return this.timer=setTimeout(function(){t.fire()},6e4*s),this}},fire:function g(){if(this.checkConditions()){var e=this;t.googletag.cmd.push(function(){o("Refreshing ads."),t.googletag.pubads().refresh(),e.start()})}},init:function p(){o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],this.player.type===t._CMLS["const"].PLAYER_TRITON&&(t.addEventListener("td-player.stopped",function(){t._CMLS[r].stop()},!1),t.addEventListener("td-player.playing",function(){t._CMLS[r].start()},!1),t.History&&t.History.Adapter&&t.History.Adapter.bind(t,"pageChange",function(){t._CMLS[r].start()})),this.player.type===t._CMLS["const"].PLAYER_TUNEGENIE&&t.tgmp&&t.TGMP_EVENTS&&t.tgmp.addEventListener(t.TGMP_EVENTS.streamplaying,function(e){return e===!0?void t._CMLS[r].start():void t._CMLS[r].stop()}),o("Listeners set, waiting for player event.")}};var c=!1;i(),t.addEventListener("cms-sgroup",function(){c||i()},!1)}}(window),function($,t,e){function o(){t._CMLS.logger(n+" v"+a,arguments)}function i(){return o("Checking for player...",c),t._CMLS[r].isPlayerActive()?void t._CMLS[r].init():void(c>20||(setTimeout(i,1e3),c++))}var n="NAV THROUGH PLAYER",r="navThroughPlayer",a="0.1",s=t._CMLS.whichPlayer();if(!t._CMLS[r]){t._CMLS[r]={isPlayerActive:function d(){return s=t._CMLS.whichPlayer(),s.type?!0:!1},updateIframeLinks:function l(e){if(t._CMLS[r].isPlayerActive){var i=e.jquery?e:$(e);i.contents().find('a[target="_self"],a[target="_top"],a[target="_parent"]').each(function(){o("Updating links in slot.",i.prop("id")),t._CMLS[r].updateLink(this)})}},updateLink:function u(e,o){if(t._CMLS[r].isPlayerActive&&(e.hostname===t.location.hostname||o)){var i=e.jquery?e:$(e);i.off("."+r).on("click."+r,t._CMLS[r].clickThrough)}},clickThrough:function g(e){e&&t._CMLS[r].isPlayerActive()&&(e.preventDefault(),o("Intercepting click."),t._CMLS[r].navigate(e.currentTarget.href))},navigate:function p(e){s.type===t._CMLS["const"].PLAYER_TRITON&&t.History&&(o("Navigating through Triton player.",e),t.History.pushState(null,null,e)),s.type===t._CMLS["const"].PLAYER_TUNEGENIE&&t.top.tgmp&&(o("Navigating through TuneGenie player.",e),t.top.tgmp.updateLocation(e))},init:function h(){return t._CMLS[r].isPlayerActive()?(o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function(e){if(e&&e.slot){var o=e.slot.getSlotElementId(),i=t.document.getElementById(o);t._CMLS[r].updateIframeLinks(i)}})}),$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){t._CMLS[r].updateIframeLinks(this)}),$(t).load(function(){$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){t._CMLS[r].updateIframeLinks(this)})}),void o("Initialized.")):void o("No player is active, exiting.")}};var c=0;i()}}(jQuery,window),function($,t,e){function o(){t._CMLS.logger(r+" v"+s,arguments)}function i(i){function n(){var t,o=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkittransitionend",msTransition:"mstransitionend"};for(t in i)if(o.style[t]!==e)return i[t]}function r(t){var e=0,o=t.length,i,n;if(0===o)return e;for(i=0;o>i;i++)n=t.charCodeAt(i),e=(e<<5)-e+n,e&=e;return e}function a(){return S.dfpSlot=$(i.dfpSlotNode),S.injectionNode=$(i.injectionNode),S.stickNode=$(i.stickNode),S.contentNode=$(i.contentNode),S.footerNode=$(i.footerNode),S.obstructiveNode=$(i.obstructiveNode),S.window=$(t),S.document=$(t.document),s(),S}function s(){return o("Refreshing stick position."),S.stickAt=S.stickNode.length?S.stickNode.offset().top:0,S.stickAt}function c(t){if(S.container&&S.container.length)return S.container;var e=$("#"+L+"Container");if(e.length)return S.container=e,S.container;if(t===!0)return!1;o("Generating new wallpaper container."),a();var i=$("<div />",{id:L+"Container","class":L+"-container"});return S.injectionNode.prepend(i),S.container=i,d(),S.container}function d(){var t=c(),e={content:S.contentNode.css(["position","zIndex"]),footer:S.footerNode.css(["position","zIndex"])};"static"===e.content.position&&(o("Setting content area position to relative."),S.contentNode.css("position","relative")),("auto"===e.content.zIndex||e.content.zIndex<=t.css("zIndex"))&&(o("Raising content area above wallpaper container."),S.contentNode.css("zIndex",t.css("zIndex")+1)),"static"===e.footer.position&&(o("Setting footer area position to relative."),S.footerNode.css("position","relative")),S.contentNode.data("originalStyles",e.content),S.footerNode.data("originalStyles",e.footer),o("Content area has been raised.")}function l(){o("Displaying wallpaper.");var t=c();t.off(y).addClass(L+"-open"),S.obstructiveNode.hide(),h()}function u(){function t(){r=!0,S.obstructiveNode.show(),o("Clearing all event listeners."),S.window.off("."+L),o("Removing wallpaper container."),i.off("."+L).remove(),S.container=null,e.resolve()}var e=$.Deferred(),i=c(!0),n=i.hasClass(L+"-open"),r=!1;return o("RESET!"),i&&i.length&&(i.off(y).removeData().removeProp("data").css("backgroundColor","rgba(0,0,0,0)").removeClass(L+"-open").removeClass(L+"-fixed"),o("Container is closing."),y&&n&&i.on(y,function(e){"opacity"===e.originalEvent.propertyName&&(o("Transition complete."),t())}),setTimeout(function(){r||t()},800)),o("Returning our promise."),e.promise()}function g(){var t=c();return t.hasClass(L+"-fixed")}function p(t){var e=c();g()&&t===!1&&(o("Unfixing wallpaper position."),e.removeClass(L+"-fixed").css("top","0")),g()||t!==!0||(o("Fixing wallpaper position."),s(),e.addClass(L+"-fixed").css("top",S.stickAt))}function h(){function t(){var t=S.window.scrollTop(),e=S.injectionNode.length?S.injectionNode.offset().top:0;return e<t+S.stickAt?!0:!1}o("Initializing scroll tracking."),s(),p(t()?!0:!1),S.window.on("scroll."+L,_(function(){return t()?void p(!0):void p(!1)},50)),S.window.on("resize."+L,v(function(){s()},500)),o("Scroll tracking enabled.")}function f(){try{if($(i.contentNode).height()<200)return o("Content node is not ready, retrying."),void setTimeout(function(){f()},500);a(),o("Processing wallpaper slot.");var e=S.dfpSlot.find("iframe"),n=e.contents().find("#google_image_div,body").first(),s=n.find("a:first"),d=s.find("img.img_ad:first,img:first").first(),g=d.prop("alt");if(o("Checking image."),!d.length)return o("No image found in ad slot! Resetting."),void u();var p=c(),h=r(s.prop("href")+s.prop("target")+d.prop("src"));if(o("Generated hash.",h),h===p.data("hash"))return void o("Requested wallpaper is already set.");o("Getting background color.",g);var m="rgba(255,255,255,0)",C=g.match(/(\#[A-Za-z0-9]+)/)||!1;C&&C.length>1&&(m=C[1]),o("Using background color.",m),u().then(function(){o("Building the new wallpaper.");var e=$("<a />",{href:s.prop("href"),target:s.prop("target")});t._CMLS.navThroughPlayer&&t._CMLS.navThroughPlayer.updateLink(e,!0);var i=$("<iframe />",{name:L+"Iframe",scrolling:"no",marginWidth:"0",marginHeight:"0",frameborder:"0"});o("Injecting iframe into container."),p=c(),p.data("hash",h).css("backgroundColor",m).append(i);var n='<style>html,body{background:transparent;margin:0;padding:0;width:100%;height:100%;}body{background:url("'+d.prop("src")+'") no-repeat top center;}a{display:block;width:100%;height:100%;text-decoration:none;}</style>';i.load(function(){o("Injecting wallpaper into iframe."),i.contents().find("body").append(n,e)}).prop("src","about:blank"),d.length?(o("Initializing preloader."),$("<img />").bind("load",function(){l(),$(this).remove()}).prop("src",d.prop("src"))):l()})}catch(_){console.log("WTF PEOPLE",_)}}function m(t){var e=t.slot.getTargeting("pos");return e.indexOf("wallpaper-ad")>-1?(o("Caught render event for wallpaper-ad",t.slot.getSlotElementId()),t.isEmpty?(o("Slot was empty, resetting wallpaper container."),u()):(o("Slot contained an ad, processing wallpaper."),f()),!1):void 0}function C(){$(t).off("."+L)}var S={},L=i.nameSpace||"wallpaperInjector",_=t._CMLS.throttle,v=t._CMLS.debounce,y=n();this.reset=u,this.process=f,this.unbindAllListeners=C,o("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function(t){v(m(t),1e3)})});var M='<style id="'+L+'Styles">.'+L+"-container {display: block !important;position: absolute;z-index: 0;top: 0;left: 0;height: 0 !important;width: 100% !important;overflow: hidden;text-align: center;transition: opacity 0.5s, height 0.6s, background-color 0.4s;opacity: 0;}."+L+"-container iframe {border: 0;height: 100%;width: 100%;}."+L+"-container ~ .grid-container {transition: box-shadow 0.6s}."+L+"-open {height: 100% !important;opacity: 1;}."+L+"-open ~ .grid-container {box-shadow: 0 0 20px rgba(0,0,0,0.3);}."+L+"-fixed {position: fixed;}"+i.dfpSlotNode+" {display: none !important;}</style>";t.document.getElementById(L+"Styles")||$("head").append(M),"complete"===t.document.readyState||"loaded"===t.document.readyState?f():$(function(){f()})}var n={dfpSlotNode:"#div-gpt-ad-1418849849333-16",injectionNode:".wrapper-content",stickNode:".wrapper-header",contentNode:".wrapper-content .grid-container:first",footerNode:".wrapper-footer",obstructiveNode:".takeover-left, .takeover-right, .skyscraper-left, .skyscraper-right"},r="WALLPAPER INJECTOR",a="wallpaperInjector",s="0.5";t._CMLS[a],n.nameSpace=a,t._CMLS[a]=new i(n)}(jQuery,window),function(t,e){function o(){t._CMLS.logger(n+" v"+a,arguments)}function i(){t._CMLS.autoReload=new s}var n="AUTO-RELOADER",r="autoReloader",a="0.7";if(!t._CMLS[r]){t._CMLS[r]={condition:"body.home",timeout:48e4,active:!1,timer:null,player:t._CMLS.whichPlayer(),checkCondition:function c(){return t.document.querySelector(this.condition)?!0:!1},reset:function d(){o("Resetting."),clearTimeout(this.timer),this.timer=null,this.restart()},start:function l(){return this.checkCondition()?(o("Starting timer."),this.active=!0,void this.reset()):(o("Condition check failed, exiting."),this.active=!1,!1)},stop:function u(){o("Stopping timer."),this.active=!1,this.reset()},restart:function g(){if(this.active&&this.checkCondition()){o("Restarting timer.",this.timeout);var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.fire(),t.reset()},this.timeout)}else this.active=!1},destroy:function p(){o("Destroying timer."),this.stop()},fire:function h(){if(this.checkCondition()){if(o("Reloading the page."),this.player.type===t._CMLS["const"].PLAYER_TRITON)return void t.History.Adapter.trigger(t,"statechange");if(this.player.type===t._CMLS["const"].PLAYER_TUNEGENIE)return void t.tgmp.updateLocation(t.location.href);t.location.reload()}else o("Condition not met, self-destructing."),this.destroy()},init:function f(t){this.condition=t.condition||this.condition,this.timeout=6e4*t.timeout||this.timeout,this.start(),o("Initialized.",this.timeout,this.condition)}};var s=function(){};s.prototype=[],s.prototype._push=s.prototype.push,s.prototype.push=function(){for(var e=0;e<arguments.length;e++)this._push(arguments[e]);t._CMLS[r].init(this.slice(-1)[0]),i()},t._CMLS.autoReload&&t._CMLS.autoReload.length&&t._CMLS[r].init(t._CMLS.autoReload.slice(-1)[0]),i()}}(window),function(t,e){function o(){t._CMLS.logger(i+" v"+r,arguments)}var i="ADDTHIS INJECTOR",n="addThisInjector",r="0.4",a="ra-55dc79597bae383e";return t.addthis?void o("AddThis already loaded by page."):(t._CMLS[n]={inject:function s(){o("Injecting."),t.addthis_config=t.addthis_config||{},t.addthis_config.pubid=a;var e=t.document.createElement("script");e.onload=function(){return t._CMLS[n].active?void o("Already active."):void t._CMLS[n].buildLayer()},e.src="//s7.addthis.com/js/300/addthis_widget.js#async=1",e.id=n+"Script",e.async=!1,t.document.head.appendChild(e),o("Injected.")},buildLayer:function c(){return t.NO_ADDTHIS_HERE?void o("NO_ADDTHIS_HERE found in window object, will not build."):t._CMLS.isHomepage()?void o("Will not build layer on homepage."):(o("Building layer."),void(t.addthis&&t.addthis.layers?(t.addthis.layers({share:{position:"left",offset:{bottom:"100px"},services:"facebook,twitter,tumblr,email,more"}},function(e){t._CMLS[n].layer=e,t.addthis.layers.refresh(),o("Layer built.")}),t._CMLS[n].active=!0):o("AddThis not available!")))},destroyLayer:function d(){o("Destroying layer."),t.addthis&&t._CMLS[n].active&&t.addthis.layers(function(e){e.destroy(),t._CMLS[n].active=!1})},init:function l(){o("Initializing."),t.History&&t.History.Adapter&&(t.History.Adapter.bind(t,"statechange",t._CMLS[n].destroyLayer),t.History.Adapter.bind(t,"pageChange",t._CMLS[n].buildLayer)),this.inject(),o("Initialized!")}},void t._CMLS[n].init())}(window);
//# sourceMappingURL=./compiled-allsites-min.js.map