!function(t,e){t._CMLS=t._CMLS||{},t._CMLS["const"]=t._CMLS["const"]||{},t._CMLS["const"].PLAYER_TUNEGENIE=8471,t._CMLS["const"].PLAYER_TRITON=8468,t._CMLS["const"].PLAYER_POSITION_TOP=80847980,t._CMLS["const"].PLAYER_POSITION_BOTTOM=80667984,t._CMLS.logger=function i(){if(!t._CMLS||!t._CMLS.debug||"object"!=typeof console||!console.debug)return!1;t._CMLS.loggerNamesToColors=t._CMLS.loggerNamesToColors||{};var e,i,o=arguments[0],n=Array.prototype.slice.call(arguments,1);t._CMLS.loggerNamesToColors[o]?(e=t._CMLS.loggerNamesToColors[o].background,i=t._CMLS.loggerNamesToColors[o].complement):(e=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),i=parseInt(e,16)>=12303291?"000000":"FFFFFF",t._CMLS.loggerNamesToColors[o]={background:e,complement:i});var r=new Date;r=r.toISOString()?r.toISOString():r.toUTCString(),n=[].concat(["%c["+o+"]","background: #"+e+"; color: #"+i,r],n),console.debug.apply(console,n)},t._CMLS.now=Date.now||function(){return(new Date).getTime()},t._CMLS.throttle=function(e,i,o){var n,r,a,s=null,c=0;o||(o={});var l=function(){c=o.leading===!1?0:t._CMLS.now(),s=null,a=e.apply(n,r),s||(n=r=null)};return function(){var d=t._CMLS.now();c||o.leading!==!1||(c=d);var h=i-(d-c);return n=this,r=arguments,0>=h||h>i?(s&&(clearTimeout(s),s=null),c=d,a=e.apply(n,r),s||(n=r=null)):s||o.trailing===!1||(s=setTimeout(l,h)),a}},t._CMLS.debounce=function(e,i,o){var n,r,a,s,c,l=function(){var d=t._CMLS.now()-s;i>d&&d>=0?n=setTimeout(l,i-d):(n=null,o||(c=e.apply(a,r),n||(a=r=null)))},d=function(){a=this,r=arguments,s=t._CMLS.now();var d=o&&!n;return n||(n=setTimeout(l,i)),d&&(c=e.apply(a,r),a=r=null),c};return d.clear=function(){clearTimeout(n),n=a=r=null},d},t._CMLS.whichPlayer=function(){if(t._CMLS.whichPlayerCache)return t._CMLS.whichPlayerCache;var e={type:null,position:null};return t.tgmp?(e.type=t._CMLS["const"].PLAYER_TUNEGENIE,t.tgmp.options.position&&"bottom"===t.tgmp.options.position.toLowerCase()?e.position=t._CMLS["const"].PLAYER_POSITION_BOTTOM:t.tgmp.options.position&&"top"===t.tgmp.options.position.toLowerCase()&&(e.position=t._CMLS["const"].PLAYER_POSITION_TOP)):t.TDPW&&(e.type=t._CMLS["const"].PLAYER_TRITON,e.position=t._CMLS["const"].PLAYER_POSITION_TOP),t._CMLS.whichPlayerCache=e,t._CMLS.whichPlayerCache},t._CMLS.isHomepage=function(){return"/"===t.location.pathname&&/[\?&]?p=/i.test(t.location.search)===!1},t._CMLS.triggerEvent=function(e,i,o){var n;t.document.createEvent?(n=t.document.createEvent("CustomEvent"),n.initCustomEvent(i,!0,!0,o)):n=new CustomEvent(i,{detail:o}),e.dispatchEvent(n)}}(window),function(t){function e(){t._CMLS.logger(i+" v"+n,arguments)}var i="GLOBALIZE SGROUPS",o="globalizeSGroups",n="0.5";t._CMLS=t._CMLS||{},t._CMLS[o]={cycles:0,timer:null,globalize:function r(){if(!t.googletag.pubads().G||!t.googletag.pubads().G["cms-sgroup"])return t._CMLS[o].cycles>10?void e("Could not retrieve cms-sgroup in a reasonable time, aborting."):(e("Googletag not ready, waiting to retry..."),t._CMLS[o].timer&&(clearTimeout(t._CMLS[o].timer),t._CMLS[o].timer=null),t._CMLS[o].timer=setTimeout(t._CMLS[o].globalize,500),void t._CMLS[o].cycles++);e("Globalizing cms-sgroup"),t._CMLS.cGroups=t._CMLS.cGroups||[],t._CMLS.cGroups=t.googletag.pubads().G["cms-sgroup"];var i=["cms-sgroup"].concat(t._CMLS.cGroups);t.sharedContainerDataLayer=t.sharedContainerDataLayer||[],t.corpDataLayer=t.corpDataLayer||[],e("Firing events");for(var n=0,r=i.length;r>n;n++)t.sharedContainerDataLayer.push({event:i[n]}),t.corpDataLayer.push({event:i[n]}),t._CMLS.triggerEvent(t,"cms-sgroup",i[n])}},t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){e("Googletag command queue initiated."),t._CMLS[o].globalize()})}(window,void 0),function(t,e){function i(){t._CMLS.logger(o+" v"+r,arguments)}var o="TEADS INJECTOR",n="teadsInjector",r="0.7";if(!t._CMLS[n]&&!t.teads){t._CMLS[n]={getWindowSize:function c(){var e=1e3,i=1e3;return"number"==typeof t.innerWidth?e=t.innerWidth:document.documentElement&&document.documentElement.clientWidth?e=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(e=document.body.clientWidth),e>1e3&&(e=1e3),"number"==typeof t.innerHeight?i=t.innerHeight:document.documentElement&&document.documentElement.clientHeight?i=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(i=document.body.clientHeight),{w:e,h:i}},inboard:function l(e){var i=t._CMLS[n].getWindowSize();t._CMLS[n].inject({pid:e,slot:".wrapper-content",format:"inboard",before:!0,css:"margin: auto !important; padding-top: 5px; padding-bottom: 5px; max-width: 1000px",size:{w:i.w}})},inread:function d(e){t._CMLS[n].inject({pid:e,slot:".loop .post .entry-content p",filter:function(){var e=t.document.getElementsByTagName("body")[0];return e.className.indexOf("single-post")>-1},format:"inread",before:!1,css:"padding-bottom: 10px !important;"})},process:function h(e,o){e&&o&&(i("Received request for "+e+" with PID "+o),t._CMLS[n][e](o))},inject:function g(e){return e.pid&&e.slot&&e.format?(e.components=e.components||{skip:{delay:0}},e.lang=e.lang||"en",e.filter=e.filter||function(){return!0},e.minSlot=e.minSlot||0,e.before=e.before||!1,e.BTF=e.BTF||!1,e.css=e.css||"margin: auto !important;",t._ttf=t._ttf||[],t._ttf.push(e),function(t){var e,i=t.getElementsByTagName("script")[0];e=t.createElement("script"),e.async=!0,e.src="http://cdn.teads.tv/js/all-v1.js",i.parentNode.insertBefore(e,i)}(t.document),void i("Injecting!",e)):!1}};var a=function(){};if(a.prototype=[],a.prototype.push=function(){for(var e=0;e<arguments.length;e++)arguments[e].format&&arguments[e].pid&&t._CMLS[n].process(arguments[e].format,arguments[e].pid)},t._teadsinjector&&t._teadsinjector.length)for(var s=0;s<t._teadsinjector.length;s++)t._teadsinjector[s].format&&t._teadsinjector[s].pid&&t._CMLS[n].process(t._teadsinjector[s].format,t._teadsinjector[s].pid);t._teadsinjector=new a,i("Listening for future requests.")}}(window),function(t,e){function i(){t._CMLS.logger(o+" v"+r,arguments)}var o="PLAYER WATCH",n="playerWatch",r="0.5";return t._CMLS[n]?!1:t.TDPW?(t._CMLS[n]={initialized:!1,cache:{},timer:null,interval:2500,"const":{STOPPED:0,PLAYING:1},setDFPCriteria:function a(e,o){t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){i("Setting targeting",e,o),t.googletag.pubads().setTargeting(e,o)})},checkCurrentTrack:function s(){var e=localStorage&&JSON?JSON.parse(localStorage.getItem("tdas.controller."+t.amp_player_config.station+"."+t.amp_player_config.stream_id+".events.current-state")):!1;e&&e.data&&(e.data.stream&&"LIVE_PLAYING"===e.data.stream.code.toUpperCase()?this.setState(this["const"].PLAYING):this.setState(this["const"].STOPPED),e.data.song&&e.data.song.id&&this.hasTrackChanged(e.data.song.id)&&this.trackHasChanged(e.data.song))},setState:function c(e){return e===this["const"].PLAYING&&e!==this.cache.state?(i("Player is streaming."),this.cache.state=e,this.setDFPCriteria("td-player-state","PLAYING"),void t._CMLS.triggerEvent(t,"td-player.playing")):e===this["const"].STOPPED&&e!==this.cache.state?(i("Player is stopped."),this.cache.state=e,this.setDFPCriteria("td-player-state","STOPPED"),void t._CMLS.triggerEvent(t,"td-player.stopped")):void 0},hasTrackChanged:function l(t){return t&&t!==this.cache.trackId?!0:!1},trackHasChanged:function d(e){i("Song has changed!",e),this.cache.trackId=e.id,e.artist&&this.setDFPCriteria("td-player-artist",e.artist),e.album&&this.setDFPCriteria("td-player-album",e.album),e.title&&this.setDFPCriteria("td-player-track",e.title),this.setDFPCriteria("td-player-id",e.id),t._CMLS.triggerEvent(t,"td-player.trackchange",e)},startTimer:function h(){var t=this;clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){t.checkCurrentTrack(),t.startTimer()},this.interval)},init:function g(){return t.amp_player_config&&t.amp_player_config.station&&t.amp_player_config.stream_id?(this.checkCurrentTrack(),this.startTimer(),this.initialized=!0,i("Initialized!",this.cache.trackId),this):(i("Player configuration not available, exiting."),!1)}},void t._CMLS[n].init()):(i("Triton player not enabled, exiting."),!1)}(window),function($,t,e){function i(){t._CMLS.logger(o+" v"+r,arguments)}if(!$||!$.fn.jquery)throw{message:"Auto-scroll script called without supplying jQuery."};var o="AUTO SCROLL",n="cmlsAutoScrollPastLeaderboard",r="0.7",a={timeout:.15,leaderboardSelector:'.wrapper-header div[id^="div-gpt-ad"]:first'};t._CMLS[n]||t.DO_NOT_AUTO_SCROLL||(t._CMLS[n]={scrolled:!1,disabled:!1,timer:null,cache:{},regenerateCache:function s(){this.cache.leaderboard=$(a.leaderboardSelector),this.cache.player=$("#tgmp_frame:first,.tdpw:first"),this.cache.window=$(t)},leaderboardOnTop:function c(){if(!this.cache.leaderboard)return i("Leaderboard was not cached."),!1;var t=this.cache.leaderboard.offset();return this.playerOnTop()?t.top<150:t.top<50},playerOnTop:function l(){var e=t._CMLS.whichPlayer();return e.position===t._CMLS["const"].PLAYER_POSITION_TOP?!0:!1},generateScrollToPosition:function d(){if(this.cache.leaderboard){var t=this.cache.leaderboard.offset();return this.playerOnTop()?t.top-this.cache.player.height()+this.cache.leaderboard.height():t.top+this.cache.leaderboard.height()}return 0},hasScrolledPastLeaderboard:function h(){return this.scrolled===!0?!0:this.cache.window.scrollTop()>=this.generateScrollToPosition()?(this.scrolled=!0,!0):!1},conditionsGood:function g(){return this.disabled?"Auto-scroll is disabled for this site.":t._CMLS.isHomepage()?this.leaderboardOnTop()?this.hasScrolledPastLeaderboard()?"Already scrolled passed leaderboard.":!0:"Leaderboard is not on top.":"Not on homepage."},scrollPage:function u(){var t=this;i("Pre-animation conditions check.");var e=this.conditionsGood();e!==!0&&(i("Conditions check failed.",e),this.stopTimer()),$("html,body").animate({scrollTop:t.generateScrollToPosition()},{queue:n,duration:550}).dequeue(n)},initTimer:function p(){i("Initializing scroll timer.");var t=this,e=t.conditionsGood();return e!==!0?(i("Conditions check after leaderboard render found bad conditions.",e),void t.stopTimer()):($("html,body").clearQueue(n).stop(n,!0),clearTimeout(this.timer),this.timer=null,void(this.timer=setTimeout(function(){t.scrollPage()},6e4*a.timeout)))},stopTimer:function f(){i("Stopping timer, clearing animation queue.",this.timer),$("html,body").clearQueue(n).stop(n,!0),clearTimeout(this.timer),this.timer=null},resetTimer:function m(){i("Resetting scroll timer."),this.initTimer()},init:function C(){i("Initializing auto-scroll library."),this.regenerateCache();var e=this,o=this.conditionsGood();return o!==!0?void i("Init check found bad conditions.",o):(this.cache.window.on("scroll."+n,t._CMLS.throttle(function(){e.hasScrolledPastLeaderboard()&&(e.scrolled=!0,e.stopTimer(),e.cache.window.off("scroll."+n))},500)),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function o(n){if(!n.isEmpty&&"top"===n.slot.getTargeting("pos")){i("Caught leaderboard render event."),e.regenerateCache();var r=e.conditionsGood();r!==!0?(i("Conditions check after leaderboard render found bad conditions.",r),e.stopTimer()):e.resetTimer(),t.googletag.pubads().removeEventListener("slotRenderEnded",o)}})}),"complete"===t.document.readyState?void this.initTimer():void this.cache.window.on("load",function(){e.initTimer()}))}},$(function(){t._CMLS[n].init()}))}(jQuery,window),function(t,e){function i(){t._CMLS.logger(n+" v"+a,arguments)}function o(){if(!t._CMLS.cGroups)return void i("Init test called without cGroups available, exiting.");for(var e=0;e<t._CMLS.cGroups.length;e++)/Format\s+(NewsTalk|Talk|Sports|Christian Talk)/i.test(t._CMLS.cGroups[e])&&(i("Running initialization."),t._CMLS[r].init(),c=!0)}var n="AUTO REFRESH ADS",r="autoRefreshAds",a="0.3",s=8;if(!t._CMLS[r]){t._CMLS[r]={player:t._CMLS.whichPlayer(),timer:null,boundToRenderEvent:!1,checkConditions:function l(){return t._CMLS.isHomepage()&&t._CMLS.autoReloader&&t._CMLS.autoReloader.active?(i("Autoreloader is active, conditions fail."),!1):!0},stop:function d(){return i("Stopping timer."),clearTimeout(this.timer),this.timer=null,this},start:function h(){if(this.stop(),this.checkConditions()){i("Starting timer.");var t=this;return this.timer=setTimeout(function(){t.fire()},6e4*s),this}},fire:function g(){if(this.checkConditions()){var e=this;t.googletag.cmd.push(function(){i("Refreshing ads."),t.googletag.pubads().refresh(),e.start()})}},init:function u(){i("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],this.player.type===t._CMLS["const"].PLAYER_TRITON&&(t.addEventListener("td-player.stopped",function(){t._CMLS[r].stop()},!1),t.addEventListener("td-player.playing",function(){t._CMLS[r].start()},!1),t.History&&t.History.Adapter&&t.History.Adapter.bind(t,"pageChange",function(){t._CMLS[r].start()})),this.player.type===t._CMLS["const"].PLAYER_TUNEGENIE&&t.tgmp&&t.TGMP_EVENTS&&t.tgmp.addEventListener(t.TGMP_EVENTS.streamplaying,function(e){return e===!0?void t._CMLS[r].start():void t._CMLS[r].stop()}),i("Listeners set, waiting for player event.")}};var c=!1;o(),t.addEventListener("cms-sgroup",function(){c||o()},!1)}}(window),function($,t,e){function i(){t._CMLS.logger(o+" v"+r,arguments)}var o="NAV THROUGH PLAYER",n="navThroughPlayer",r="0.1",a=t._CMLS.whichPlayer();t._CMLS[n]={isPlayerActive:function s(){return a.type?!0:!1},updateIframeLinks:function c(e){if(t._CMLS[n].isPlayerActive){var o=e.jquery?e:$(e);i("Updating links in slot.",o.prop("id")),o.contents().find('a[target="_self"],a[target="_top"],a[target="_parent"]').each(function(){t._CMLS[n].updateLink(this)})}},updateLink:function l(e){if(t._CMLS[n].isPlayerActive&&e.hostname===t.location.hostname){var i=e.jquery?e:$(e);i.off("."+n).on("click."+n,t._CMLS[n].clickThrough)}},clickThrough:function d(e){e&&e.preventDefault(),i("Intercepting click."),t._CMLS[n].navigate(e.currentTarget.href)},navigate:function h(e){a.type===t._CMLS["const"].PLAYER_TRITON&&t.History&&(i("Navigating through Triton player.",e),t.History.pushState(null,null,e)),a.type===t._CMLS["const"].PLAYER_TUNEGENIE&&t.top.tgmp&&(i("Navigating through TuneGenie player.",e),t.top.tgmp.updateLocation(e))},init:function g(){return t._CMLS[n].isPlayerActive()?(i("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function(e){if(e&&e.slot){var i=e.slot.getSlotElementId(),o=t.document.getElementById(i);t._CMLS[n].updateIframeLinks(o)}})}),$('iframe[id^="google_ads_iframe"],#cmlsWallpaperInjectorContainer iframe').each(function(){t._CMLS[n].updateIframeLinks(this)}),void i("Initialized.")):void i("No player is active, exiting.")}},$(function(){t._CMLS[n].init()})}(jQuery,window),function($,t,e){function i(){t._CMLS.logger(r+" v"+s,arguments)}function o(){var t,i=document.createElement("fakeelement"),o={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkittransitionend",msTransition:"mstransitionend"};for(t in o)if(i.style[t]!==e)return o[t]}var n={dfpSlotNode:"#div-gpt-ad-1418849849333-16",injectionNode:".wrapper-content",stickNode:".wrapper-header",contentNode:".wrapper-content .grid-container:first",footerNode:".wrapper-footer",obstructiveNode:".takeover-left, .takeover-right, .skyscraper-left, .skyscraper-right"},r="WALLPAPER INJECTOR",a="cmlsWallpaperInjector",s="0.3";t._CMLS[a]||(n.transitionEvent=o(),t._CMLS[a]={version:s,cache:{},refreshCache:function c(){this.cache.dfpSlot=$(n.dfpSlotNode),this.cache.injectionNode=$(n.injectionNode),this.cache.stickNode=$(n.stickNode),this.cache.stickAt=this.cache.stickNode.length?this.cache.stickNode.offset().top:0,this.cache.contentNode=$(n.contentNode),this.cache.footerNode=$(n.footerNode),this.cache.obstructiveNode=$(n.obstructiveNode),this.cache.window=$(t),this.cache.document=$(t.document)},refreshStickAtPosition:function l(){return i("Refreshing stick position."),this.cache.stickAt=this.cache.stickNode.length?this.cache.stickNode.offset().top:0,this.cache.stickAt},getContainer:function d(){if(this.cache.container&&this.cache.container.length)return this.cache.container;var t=$("#"+a+"Container");if(t.length)return this.cache.container=t,this.cache.container;i("Generating new wallpaper container.");var e=$('<div id="'+a+'Container" class="'+a+'-container" />');return this.cache.injectionNode.prepend(e),this.cache.container=e,this.raiseContentArea(),this.cache.container},raiseContentArea:function h(){var t=this.getContainer(),e={content:this.cache.contentNode.css(["position","zIndex"]),footer:this.cache.footerNode.css(["position","zIndex"])};"static"===e.content.position.toLowerCase()&&(i("Setting content area position to relative."),this.cache.contentNode.css("position","relative")),("auto"===e.content.zIndex.toLowerCase()||e.content.zIndex<=t.css("zIndex"))&&(i("Raising content area above wallpaper container."),this.cache.contentNode.css("zIndex",t.css("zIndex")+1)),"static"===e.footer.position.toLowerCase()&&(i("Setting footer area position to relative."),this.cache.footerNode.css("position","relative")),this.cache.contentNode.data("originalStyles",e.content),this.cache.footerNode.data("originalStyles",e.footer),i("Content area has been raised.")},show:function g(){i("Displaying wallpaper.");var t=this.getContainer();t.off(n.transitionEvent).addClass(a+"-open"),this.cache.obstructiveNode.hide(),this.startTrackingScroll()},reset:function u(t){function e(){i("Removing wallpaper contents."),o.empty().css("top","0"),r.cache.obstructiveNode.show(),i("Clearing event listeners."),r.cache.window.off("."+a),r.cache.document.off("."+a),"function"==typeof t&&(i("Firing reset callback."),t())}var o=this.getContainer();i("Removing wallpaper.");var r=this,s=o.hasClass(a+"-open");o.off(n.transitionEvent).removeData().removeProp("data").css("backgroundColor","rgba(0,0,0,0)").removeClass(a+"-open").removeClass(a+"-fixed"),n.transitionEvent&&s?(i("Setting transition watch."),o.on(n.transitionEvent,function(t){i("Transition complete.",t.originalEvent.propertyName),"opacity"===t.originalEvent.propertyName&&(t.stopImmediatePropagation(),e())})):e()},setFixed:function p(t){var e=this.getContainer();e.hasClass(a+"-fixed")&&t!==!0||(i("Setting wallpaper position to fixed.",this.cache.stickAt),e.addClass(a+"-fixed").css("top",this.cache.stickAt))},unsetFixed:function f(){var t=this.getContainer();t.hasClass(a+"-fixed")&&(i("Unfixing wallpaper position."),t.removeClass(a+"-fixed").css("top","0"))},hasPassedStickPosition:function m(){var t=this.cache.window.scrollTop(),e=this.cache.injectionNode.length?this.cache.injectionNode.offset().top:0;return e<t+this.cache.stickAt?!0:!1},startTrackingScroll:function C(){i("Initializing scroll tracking.");var e=this;this.refreshStickAtPosition(),this.hasPassedStickPosition()?this.setFixed(!0):this.unsetFixed(),this.cache.window.on("scroll."+a,t._CMLS.throttle(function(){return e.hasPassedStickPosition()?void e.setFixed():void e.unsetFixed()},60)),this.cache.window.on("resize."+a,t._CMLS.debounce(function(){e.refreshStickAtPosition()},500)),i("Scroll tracking enabled.")},process:function S(){i("Processing wallpaper request."),this.refreshCache();var e=this.getContainer(),o=this;i("Retrieving data from ad slot.");var n=this.cache.dfpSlot.find("iframe"),r=n.contents().find("#google_image_div,body").first(),s=r.find("a:first"),c=s.find("img.img_ad:first,img").first(),l=c.prop("alt");if(i("Checking image."),!c.length)return i("No image found in ad slot!"),void this.reset();i("Checking background color.",l);var d="rgba(255,255,255,0)";if(l&&l.length>1){i("Background color attempted, checking...");var h=l.match(/(\#[A-Za-z0-9]+)/);h&&h.length>1&&(i("Using background color.",h[1]),d=h[1])}this.reset(function g(){try{i("Building new wallpaper.");var n=$("<a />").prop("href",s.prop("href")).prop("target",s.prop("target"));t._CMLS.navThroughPlayer&&t._CMLS.navThroughPlayer.updateLink&&t._CMLS.navThroughPlayer.updateLink(n);var r=$("<iframe />").prop("name",a+"Iframe").prop("scrolling","no").prop("marginwidth","0").prop("marginheight","0").prop("frameborder","0").prop("width","100%").prop("height","100%").prop("src","about:blank").css({border:0,verticalAlign:"bottom"}).load(function(){i("Injecting wallpaper into iframe."),r.contents().find("body").append(n).append('<style>html,body { background: transparent; margin: 0; padding: 0; width: 100%; height: 100%; }a { display: block; text-decoration: none; width: 100%; height: 100%; background: url("'+c.prop("src")+'") no-repeat top center; }</style>')});i("Injecting iframe into container."),e.css("backgroundColor",d).append(r),c.length?(i("Initializing load watch for ad image."),$("<img/>").bind("load",function(){o.show(),$(this).remove()}).prop("src",c.prop("src"))):o.show()}catch(l){i(l)}})},init:function L(){i("Initializing"),this.refreshCache();var e=this;t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRenderEnded",function(t){var o=t.slot.getTargeting("pos");return o.indexOf("wallpaper-ad")>-1?(i("Caught render event for wallpaper-ad",t.slot.getSlotElementId()),t.isEmpty?(i("Slot was empty, resetting wallpaper container."),e.reset()):(i("Slot contained an ad, processing wallpaper.",e),e.process()),!1):void 0})});var o='<style id="'+a+'Styles">.'+a+"-container {display: block !important;position: absolute;z-index: 0;top: 0;left: 0;height: 0 !important;width: 100% !important;overflow: hidden;text-align: center;transition: opacity 0.4s, height 0.5s, background-color 0.3s; top 0.1sopacity: 0;}."+a+"-container iframe {}."+a+"-open {height: 100% !important;opacity: 1;}."+a+"-open ~ .grid-container {box-shadow: 0 0 20px rgba(0,0,0,0.3);transition: box-shadow 0.5s}."+a+"-fixed {position: fixed;}"+n.dfpSlotNode+" {display: none !important;}</style>";t.document.getElementById(a+"Styles")||$("head").append(o),this.process()}},$(function(){t._CMLS[a].init()}))}(jQuery,window),function(t,e){function i(){t._CMLS.logger(n+" v"+a,arguments)}function o(){t._CMLS.autoReload=new s}var n="AUTO-RELOADER",r="autoReloader",a="0.7";if(!t._CMLS[r]){t._CMLS[r]={condition:"body.home",timeout:48e4,active:!1,timer:null,player:t._CMLS.whichPlayer(),checkCondition:function c(){return t.document.querySelector(this.condition)?!0:!1},reset:function l(){i("Resetting."),clearTimeout(this.timer),this.timer=null,this.restart()},start:function d(){return this.checkCondition()?(i("Starting timer."),this.active=!0,void this.reset()):(i("Condition check failed, exiting."),this.active=!1,!1)},stop:function h(){i("Stopping timer."),this.active=!1,this.reset()},restart:function g(){if(this.active&&this.checkCondition()){i("Restarting timer.",this.timeout);var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.fire(),t.reset()},this.timeout)}else this.active=!1},destroy:function u(){i("Destroying timer."),this.stop()},fire:function p(){if(this.checkCondition()){if(i("Reloading the page."),this.player.type===t._CMLS["const"].PLAYER_TRITON)return void t.History.Adapter.trigger(t,"statechange");if(this.player.type===t._CMLS["const"].PLAYER_TUNEGENIE)return void t.tgmp.updateLocation(t.location.href);t.location.reload()}else i("Condition not met, self-destructing."),this.destroy()},init:function f(t){this.condition=t.condition||this.condition,this.timeout=6e4*t.timeout||this.timeout,this.start(),i("Initialized.",this.timeout,this.condition)}};var s=function(){};s.prototype=[],s.prototype._push=s.prototype.push,s.prototype.push=function(){for(var e=0;e<arguments.length;e++)this._push(arguments[e]);t._CMLS[r].init(this.slice(-1)[0]),o()},t._CMLS.autoReload&&t._CMLS.autoReload.length&&t._CMLS[r].init(t._CMLS.autoReload.slice(-1)[0]),o()}}(window);
//# sourceMappingURL=./compiled-allsites-min.js.map