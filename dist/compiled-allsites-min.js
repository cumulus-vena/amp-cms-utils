!function(t,e){t._CMLS=t._CMLS||{},t._CMLS.LOADED||(t._CMLS.LOADED=!0,t._CMLS["const"]=t._CMLS["const"]||{},t._CMLS.isHomepage=function(){return"/"===t.location.pathname&&/[\?&]?p=/i.test(t.location.search)===!1},t._CMLS.now=Date.now||function(){return(new Date).getTime()})}(window),function(t,e){t._CMLS.log=function n(){var e=t._CMLS.log;if(!t._CMLS||!t._CMLS.debug||"object"!=typeof console||!console.groupCollapsed)return!1;e.colorCache=e.colorCache||{};var n,o,i=arguments[0],r=[].slice.call(arguments[1]);e.colorCache[i]?(n=e.colorCache[i].background,o=e.colorCache[i].complement):(n=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),o=parseInt(n,16)>=12303291?"000000":"FFFFFF",e.colorCache[i]={background:n,complement:o});var a=new Date;a=a.toISOString()?a.toISOString():a.toUTCString();var c=["%c["+i+"]","background: #"+n+"; color: #"+o];r=c.concat(r),console.groupCollapsed.apply(console,r),console.log("TIMESTAMP:",a),console.trace(),console.groupEnd()}}(window),function(t,e){t._CMLS.triggerEvent=function(e,n,o){var i;t.document.createEvent?(i=t.document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,o)):i=new CustomEvent(n,{detail:o}),e.dispatchEvent(i)}}(window),function(t,e){t._CMLS.throttle=function(e,n,o){var i,r,a,c=null,s=0;o||(o={});var l=function(){s=o.leading===!1?0:t._CMLS.now(),c=null,a=e.apply(i,r),c||(i=r=null)};return function(){var d=t._CMLS.now();s||o.leading!==!1||(s=d);var u=n-(d-s);return i=this,r=arguments,0>=u||u>n?(c&&(clearTimeout(c),c=null),s=d,a=e.apply(i,r),c||(i=r=null)):c||o.trailing===!1||(c=setTimeout(l,u)),a}}}(window),function(t,e){t._CMLS.debounce=function(e,n,o){var i,r,a,c,s,l=function(){var d=t._CMLS.now()-c;n>d&&d>=0?i=setTimeout(l,n-d):(i=null,o||(s=e.apply(a,r),i||(a=r=null)))},d=function(){a=this,r=arguments,c=t._CMLS.now();var d=o&&!i;return i||(i=setTimeout(l,n)),d&&(s=e.apply(a,r),a=r=null),s};return d.clear=function(){clearTimeout(i),i=a=r=null},d}}(window),function(t,e){function n(){c.log(i+" v"+a,arguments)}function o(){var e;t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){var o=t.googletag.pubads();for(var i in o)if(o[i].hasOwnProperty("cms-sgroup")){e=o[i]["cms-sgroup"];break}if(e){n("s-groups acquired!"),c.sGroups=e;var r=["cms-sgroup"].concat(c.sGroups);t.sharedContainerDataLayer=t.sharedContainerDataLayer||[],t.corpDataLayer=t.corpDataLayer||[],n("Firing events.");for(var a in r)r.hasOwnProperty(a)&&(t.sharedContainerDataLayer.push({event:r[a]}),t.corpDataLayer.push({event:r[a]}),c.triggerEvent(t,"cms-sgroup",r[a]))}})}var i="GLOBALIZE SGROUPS",r="globalizeSGroups",a="0.6",c=t._CMLS||{};c[r]||(n("Initializing."),c[r]=new o)}(window),function(t,e){var n=t._CMLS||{};n["const"].PLAYER_TUNEGENIE=8471,n["const"].PLAYER_TRITON=8468,n["const"].PLAYER_POSITION_TOP=80847980,n["const"].PLAYER_POSITION_BOTTOM=80667984,n.whichPlayer=function(){if(n.whichPlayer.cache)return n.whichPlayer.cache;var e={type:null,position:null};if(t.tgmp){n.log("COMMON",["Found TuneGenie player."]),e.type=n["const"].PLAYER_TUNEGENIE;var o=t.tgmp.options;o.position&&"bottom"===o.position.toLowerCase()?(n.log("COMMON",["TuneGenie player is on the bottom."]),e.position=n["const"].PLAYER_POSITION_BOTTOM):o.position&&"top"===o.position.toLowerCase()&&(n.log("COMMON",["TuneGenie player is on the top."]),e.position=n["const"].PLAYER_POSITION_TOP)}else t.TDPW&&(n.log("COMMON",["Found Triton player, assuming it's on top."]),e.type=n["const"].PLAYER_TRITON,e.position=n["const"].PLAYER_POSITION_TOP);return n.whichPlayer.cache=e,n.whichPlayer.cache}}(window),function(t,e){function n(){t._CMLS.log(a+" v"+s,arguments)}function o(){this.trackChange=function(e){n("Track has changed.",e),l.triggerEvent(t,"cmls-player.trackchange",e)},this.playing=function(){n("Player is streaming."),l.triggerEvent(t,"cmls-player.playing")},this.stopped=function(){n("Player is stopped."),l.triggerEvent(t,"cmls-player.stopped")}}function i(){var e=new o;t.tgmp.addEventListener(t.top.TGMP_EVENTS.nowplaying,function(t){e.trackChange(t)}),t.tgmp.addEventListener(t.top.TGMP_EVENTS.streamplaying,function(t){t===!0?e.playing():e.stopped()})}function r(){var e={},i,r=2500,a={PLAYING:1,STOPPED:0},c=new o,s=this;return this.checkCurrentTrack=function(){var e=localStorage&&JSON?JSON.parse(localStorage.getItem("tdas.controller."+t.amp_player_config.station+"."+t.amp_player_config.stream_id+".events.current-state")):!1;return e&&e.data?(e.data.stream&&"LIVE_PLAYING"===e.data.stream.code.toUpperCase()?s.setState(a.PLAYING):s.setState(a.STOPPED),e.data.song&&e.data.song.id&&s.hasTrackChanged(e.data.song.id)&&s.trackHasChanged(e.data.song),!0):!1},this.setState=function(t){if(t!==e.state){switch(t){case a.PLAYING:c.playing();break;default:c.stopped()}e.state=t}},this.hasTrackChanged=function(t){return t&&t!==e.trackId?!0:!1},this.trackHasChanged=function(t){e.trackId=t.id,c.trackChange(t)},this.startTimer=function(){clearTimeout(i),i=null,i=setTimeout(function(){s.checkCurrentTrack(),s.startTimer()},r)},n("Initializing."),t.amp_player_config&&t.amp_player_config.station&&t.amp_player_config.stream_id?(this.checkCurrentTrack(),this.startTimer(),n("Initialized."),this):(n("Player configuration not available, exiting."),!1)}var a="PLAYER WATCH",c="playerWatch",s="0.6",l=t._CMLS;if(l[c])return!1;var d=l.whichPlayer();d.type===l["const"].PLAYER_TRITON&&(l[c]=new r,n("Triton player tracker enabled.")),d.type===l["const"].PLAYER_TUNEGENIE&&(l[c]=new i,n("TuneGenie player tracker enabled."))}(window),function(t,e){function n(){t._CMLS.log(r+" v"+c,arguments)}function o(){var e=null,o=this;this.timeout=l.autoRefreshAdsTimer||s,this.checkConditions=function(){return l.autoReloader&&l.autoReloader.active?(n("Autoreloader is active, conditions fail."),!1):!0},this.stop=function(){return n("Stopping timer."),clearTimeout(e),e=null,o},this.start=function(){return o.stop(),o.checkConditions()?(n("Starting timer for "+o.timeout+" minute countdown."),o.timer=setTimeout(function(){o.fire()},6e4*o.timeout),!0):!1},this.fire=function(){return o.checkConditions()?void t.googletag.cmd.push(function(){n("Refreshing ads."),t.googletag.pubads().refresh(),o.start()}):!1},n("Initializing."),t.addEventListener("cmls-player.stopped",function(){o.stop()},!1),t.addEventListener("cmls-player.playing",function(){o.start()},!1),t.History&&t.History.Adapter&&t.History.Adapter.bind(t,"pageChange",function(){o.start()})}function i(){if(!l.sGroups)return void n("Init test called without sgroups available.");for(var t in l.sGroups)/Format\s+(.*Talk.*|Sports)/.test(l.sGroups[t])&&(n("Format is good."),l[a]=new o,d=!0)}var r="AUTO REFRESH ADS",a="autoRefreshAds",c="0.4",s=4,l=t._CMLS;if(!l[a]){t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[];var d=!1;i(),t.addEventListener("cms-sgroup",function(){d||i()},!1)}}(window),function(t,e){function n(){t._CMLS.log(i+" v"+a,arguments)}function o(){var e=this;this.setDFPCriteria=function(e,o){t.googletag.cmd.push(function(){n("Setting targeting criteria.",e,o),t.googletag.pubads().setTargeting(e,o)})},t.addEventListener("cmls-player.playing",function(){n("Player is streaming."),e.setDFPCriteria("td-player-state","PLAYING")},!1),t.addEventListener("cmls-player.stopped",function(){n("Player has stopped."),e.setDFPCriteria("td-player-state","STOPPED")},!1),t.addEventListener("cmls-player.trackchange",function(t){n("Track has changed.",t),t.artist&&e.setDFPCriteria("td-player-artist",t.artist),t.album&&e.setDFPCriteria("td-player-album",t.album),t.title&&e.setDFPCriteria("td-player-track",t.title),t.id&&e.setDFPCriteria("td-player-id",t.id)}),n("Initialized.")}var i="PLAYER DFP INJECTOR",r="playerDFPInjector",a="0.1",c=t._CMLS||{};if(c[r])return!1;var s=c.whichPlayer();return s.type!==c["const"].PLAYER_TRITON?(n("Triton player not enabled."),!1):void(c[r]=new o)}(window),function($,t,e){function n(){s.log(r+" v"+c,arguments)}function o(){var e=this;this.updateIframe=function(t){var n=t.jquery?t:$(t);n.contents().find('a[target="_self"], a[target="_top"], a[target="_parent"]').each(function(){e.updateLink(this)})},this.updateLink=function(o,i){var r=o.jquery?o:$(o),c=t.document.createElement("a");return c.href=r.prop("href"),0===c.href.indexOf("/")||c.hostname!==t.location.hostname&&!i?void(c=null):void(r.data("cmls-bound")||(n("Binding to link with href:",c.href),r.off("."+a).on("click."+a,e.clickThrough).data("cmls-bound",1),c=null))},this.clickThrough=function(e){if(n("Intercepting click."),!e.currentTarget||e.currentTarget.href)return void n("Could not get href from target.");var o=e.currentTarget.href;if(l.type===s["const"].PLAYER_TRITON&&t.History)n("Navigating through Triton player.",o),t.History.pushState(null,null,o);else{if(l.type!==s["const"].PLAYER_TUNEGENIE||!t.tgmp)return;n("Navigating through TuneGenie player.",o),t.tgmp.updateLocation(o)}e.preventDefault()},n("Initializing."),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){$('iframe[id^="google_ads_iframe"], #cmlsWallpaperInjectorContainer iframe').each(function(){e.updateIframe(this)}),$(t).load(function(){$('iframe[id^="google_ads_iframe"], #cmlsWallpaperInjectorContainer iframe').each(function(){e.updateIframe(this)})}),t.googletag.pubads().addEventListener("slotRenderEnded",function(n){if(n&&n.slot){var o=n.slot.getSlotElementId(),i=t.document.getElementById(o);e.updateIframe(i)}}),n("Initialized.")})}function i(){return n("Checking for player, try:",d),l=s.whichPlayer(),l.type?(n("Player found."),void(s[a]=new o)):d>20?void n("Limit reached, ejecting."):(setTimeout(i,1e3),void d++)}var r="NAV THROUGH PLAYER",a="navThroughPlayer",c="0.2",s=t._CMLS,l=s.whichPlayer();if(!s[a]){var d=0;i()}}(jQuery,window),function(t,e){function n(){c.log(i+" v"+a,arguments)}function o(){function o(){var e=1020,n=document.documentElement||{clientWidth:0,clientHeight:0},o=Math.max(n.clientWidth,t.innerWidth||0),i=Math.max(n.clientHeight,t.innerHeight||0);return o>e&&(o=e),{w:o,h:i}}function i(e){var n=o();l({pid:e,slot:".wrapper-content",filter:function(){return t.document.body.className.indexOf("home")>-1||c.forceTeadsInBoard===!0},format:"inboard",before:!0,css:"margin: auto !important; padding-top: 5px; padding-bottom: 5px; max-width: 1020px",size:{w:n.w}})}function r(e){l({pid:e,slot:".wrapper-content .column-1 .entry-content p",filter:function(){return t.document.body.className.indexOf("single-feed_posts")>-1},format:"inread",before:!1,css:"padding-bottom: 10px !important;"})}function a(){n("Refreshing cache, reinserting PID requests."),u.forEach(function(e){for(var n=0;n<t.self._ttf.length;n++)t.self._ttf[n].pid===e.pid&&t.self._ttf[n].splice(n,1);e.launched=!1,l(e)})}function s(){t.self._ttf=e,t.parent._ttf=e;for(var n=[t.self.document.getElementById("cmlsTeadsScript"),t.parent.document.getElementById("cmlsTeadsScript")],o=0;o<n.length;o++)n[o]&&n[o].parentNode.removeChild(n[o]);!function(t){var e,n=t.getElementsByTagName("script")[0];e=t.createElement("script"),e.async=!0,e.id="cmlsTeadsScript",e.src="http://cdn.teads.tv/js/all-v1.js",n.parentNode.insertBefore(e,n)}(t.self.document)}function l(e){return e&&e.pid&&e.slot&&e.format?(e.components=e.components||{skip:{delay:0}},e.lang=e.lang||"en",e.filter=e.filter||function(){return!0},e.minSlot=e.minSlot||0,e.before=e.before||!1,e.BTF=e.BTF||!1,e.css=e.css||"margin: auto !important;",n("Injecting!",e),t.self._ttf=t.self._ttf||[],t.self._ttf.push(e),s(),void(u[e.pid]=e)):void n("Invalid request.",e)}var d=this,u={},p=function(){};this.process=function(t){return t?(t.push&&t.pop||(t=[t]),void t.forEach(function(t){if(!t.format||!t.pid)return void n("Invalid request.",t);switch(n("Received request","format: "+t.format,"PID: "+t.pid),t.format.toLowerCase()){case"inread":r(t.pid);break;case"inboard":i(t.pid)}})):void n("Request was empty.",t)},t.self._teadsinjector&&t.self._teadsinjector.length&&d.process(t.self._teadsinjector),p.prototype=[],p.prototype.push=function(){var t=[].prototype.slice.call(arguments);d.process(t)},t.self._teadsinjector=new p;var g=c.whichPlayer();g&&g.type&&g.type===c["const"].PLAYER_TRITON&&t.History&&t.History.Adapter&&(n("Binding to pageChange event."),t.History.Adapter.bind(t,"pageChange",function(){t.document.addEventListener("DOMContentLoaded",function(){a()})})),n("Initialized.")}var i="TEADS INJECTOR",r="teadsInjector",a="0.8",c=t._CMLS||{};c[r]||t.self.teads||(c[r]=new o)}(window),function($,t,e){function n(){s.log(r+" v"+c,arguments)}function o(e){function o(){return m.dfpSlot=$(e.dfpSlotNode),m.injectionNode=$(e.injectionNode),m.stickNode=$(e.stickNode),m.contentNode=$(e.contentNode),m.footerNode=$(e.footerNode),m.obstructiveNode=$(e.obstructiveNode),m.window=$(t),m.document=$(t.document),c(),m}function i(t){if(m.container&&m.container.length)return m.container;var e=$("#"+a+"Container");return e.length?(m.container=e,m.container):t===!0?!1:(n("Generating a new wallpaper container."),o(),m.container=$("<div />",{id:a+"Container","class":a+"-container"}).prependTo(m.injectionNode),r(),m.container)}function r(){m.contentNode.addClass(a+"-raiser"),m.footerNode.addClass(a+"-raiser")}function c(){return n("Refreshing sticky position."),m.stickAt=m.stickNode.length?m.stickNode.offset().top:0,m.stickAt}function l(){var t=i();return t.hasClass(a+"-fixed")}function d(t){var e=i(),o=l();(o||t===!1)&&(n("Unfixing wallpaper position."),e.css("top","0").removeClass(a+"-fixed")),o&&t!==!0||(n("Fixing wallpaper position"),c(),e.css("top",m.stickAt).addClass(a+"-fixed"))}function u(){function t(){var t=m.window.scrollTop(),e=m.injectionNode.length?m.injectionNode.offset().top:0;return c(),e<t+m.stickAt?!0:!1}n("Initializing scroll tracking."),d(t()?!0:!1),m.window.on("scroll."+a,_(function(){return t()?void d(!0):void d(!1)},50)),m.window.on("resize."+a,v(function(){c()},500)),n("Scroll tracking enabled.")}function p(){n("Displaying wallpaper.");var t=i();t.addClass(a+"-open"),m.obstructiveNode.hide(),u()}function g(){var t=$.Deferred(),e=i();return m.obstructiveNode.show(300),m.window.off("."+a),e.removeData().removeProp("data").css("backgroundColor","rgba(0,0,0,0)").removeClass([a+"-open",a+"-fixed"]),setTimeout(function(){t.resolve()},500),t.promise()}function f(){if($(e.contentNode).height()<200)return n("Content node is not yet ready, retrying..."),void setTimeout(function(){f()},500);o(),n("Processing wallpaper request.");var t=m.dfpSlot.find("iframe"),r=t.contents().find("#google_image_div,body").first(),c=r.find("a:first"),l=r.find("img.img_ad:first,img:first").first(),d=l.prop("alt"),u=i();if(c.prop("href")===u.data("slotlink")&&l.prop("src")===u.data("slotimage"))return void n("Requested wallpaper is already set.");if(n("Checking image."),!l.length)return n("No image found in ad slot, resetting."),void g();var h="rgba(255,255,255,0)",_=d.match(/((\#[A-Za-z0-9]+)|(rgba?\(.*\)))/)||!1;_&&_.length>1&&(h=_[1]),n("Using background color.",h),g().then(function(){n("Building new wallpaper.");var t,e,o,r=i();c.length&&(t=$("<a/>",{href:c.prop("href"),target:c.prop("target")}),s.navThroughPlayer&&s.navThroughPlayer.updateLink(t),r.data("slotlink",c.prop("href"))),e=$("<iframe />",{name:a+"Iframe",scrolling:"no",marginWidth:"0",marginHeight:"0",frameborder:"0",src:"about:blank"}),o='<style>html, body { background: transparent; margin: 0; padding: 0; width: 100%; height: 100%; }body { background: url("'+l.prop("src")+'") no-repeat top center; }a { display: block; width: 100%; height: 100%; text-decoration: none; }</style>',e.load(function(){n("Injecting wallpaper into frame."),e.contents().find("body").append(o,t)}),n("Injecting iframe into container."),r.css("backgroundColor",h).append(e),l.length?$("<img/>").bind("load",function(){p(),$(this).remove()}).prop("src",l.prop("src")):p()})}function h(t){var e=t.slot.getTargeting("pos");return e.indexOf("wallpaper-ad")>-1?(n("Caught render event for wallpaper-ad",t.slot.getSlotElementId()),t.isEmpty?(n("Slot was empty, resetting wallpaper container."),g()):(n("Slot contained an ad, processing wallpaper."),f()),!1):void 0}n("Initializing.");var m={},_=s.throttle,v=s.debounce,y='<style id="%%NAMESPACE%%Styles">.%NAMESPACE%-container {display: block;position: absolute;z-index: 0;top: 0;left: 0;height: 0;width: 100%;overflow: hidden;text-align: center;transition: opacity 0.5s, height 0.6s, background-color 0.4s;opacity: 0;}.%NAMESPACE%-container iframe {border: 0;height: 100%;width: 100%;}.%NAMESPACE%-container ~ .grid-container {transition: box-shadow 0.6s}.%NAMESPACE%-open {height: 100%;opacity: 1;}.%NAMESPACE%-open ~ .grid-container {box-shadow: 0 0 20px rgba(0,0,0,0.3);}.%NAMESPACE%-fixed {position: fixed;}.%NAMESPACE%-raiser {position: relative !important;z-index: 5 !important;}%DFPSLOTNODE% {display: none;}'+"</style>".replace(/%NAMESPACE%/g,a).replace(/%DFPSLOTNODE%/g,e.dfpSlotNode);$(y).appendTo("head"),t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){t.googletag.pubads().addEventListener("slotRendereEnded",function(t){v(h(t),1e3)})}),"complete"===t.self.document.readyState||"loaded"===t.self.document.readyState?f():t.document.addEventListener("DOMContentLoaded",function(){f()})}var i={dfpSlotNode:"#div-gpt-ad-1418849849333-16",injectionNode:".wrapper-content",stickNode:".wrapper-header",contentNode:".wrapper-content .grid-container:first",footerNode:".wrapper-footer",obstructiveNode:".takeover-left, .takeover-right, .skyscraper-left, .skyscraper-right"},r="WALLPAPER INJECTOR",a="wallpaperInjector",c="0.6",s=t._CMLS;s[a]||(i.nameSpace=a,s[a]=new o)}(jQuery,window),window._CMLS.log("COMMON",["LIBRARIES LOADED!\n                            .__\n    ____  __ __ ______ __ __|  |__ __  ___________\n___/    \\|  |  \\      \\  |  \\  |  |  \\/  ___/\n  \\   ---|  |  /  Y Y  \\ |  /  |_ |  /___  \\\n   \\___  )____/.__|_|  /___/.____/__/.___  /\n       \\/            \\/                  \\/\n"]);
//# sourceMappingURL=./compiled-allsites-min.js.map