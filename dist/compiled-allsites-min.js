!function(t,n){t._CMLS=t._CMLS||{},t._CMLS.LOADED||(t._CMLS.LOADED=!0,t._CMLS["const"]=t._CMLS["const"]||{},t._CMLS.isHomepage=function(){return"/"===t.location.pathname&&/[\?&]?p=/i.test(t.location.search)===!1},t._CMLS.now=Date.now||function(){return(new Date).getTime()})}(window),function(t,n){t._CMLS.log=function o(){var n=t._CMLS.log;if(!t._CMLS||!t._CMLS.debug||"object"!=typeof console||!console.groupCollapsed)return!1;n.colorCache=n.colorCache||{};var o,e,a=arguments[0],r=[].slice.call(arguments[1]);n.colorCache[a]?(o=n.colorCache[a].background,e=n.colorCache[a].complement):(o=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),e=parseInt(o,16)>=12303291?"000000":"FFFFFF",n.colorCache[a]={background:o,complement:e});var i=new Date;i=i.toISOString()?i.toISOString():i.toUTCString();var s=["%c["+a+"]","background: #"+o+"; color: #"+e];r=s.concat(r),console.groupCollapsed.apply(console,r),console.log("TIMESTAMP:",i),console.trace(),console.groupEnd()}}(window),function(t,n){t._CMLS.triggerEvent=function(n,o,e){var a;t.document.createEvent?(a=t.document.createEvent("CustomEvent"),a.initCustomEvent(o,!0,!0,e)):a=new CustomEvent(o,{detail:e}),n.dispatchEvent(a)}}(window),function(t,n){t._CMLS.throttle=function(n,o,e){var a,r,i,s=null,c=0;e||(e={});var u=function(){c=e.leading===!1?0:t._CMLS.now(),s=null,i=n.apply(a,r),s||(a=r=null)};return function(){var l=t._CMLS.now();c||e.leading!==!1||(c=l);var _=o-(l-c);return a=this,r=arguments,0>=_||_>o?(s&&(clearTimeout(s),s=null),c=l,i=n.apply(a,r),s||(a=r=null)):s||e.trailing===!1||(s=setTimeout(u,_)),i}}}(window),function(t,n){t._CMLS.debounce=function(n,o,e){var a,r,i,s,c,u=function(){var l=t._CMLS.now()-s;o>l&&l>=0?a=setTimeout(u,o-l):(a=null,e||(c=n.apply(i,r),a||(i=r=null)))},l=function(){i=this,r=arguments,s=t._CMLS.now();var l=e&&!a;return a||(a=setTimeout(u,o)),l&&(c=n.apply(i,r),i=r=null),c};return l.clear=function(){clearTimeout(a),a=i=r=null},l}}(window),function(t,n){function o(){s.log(a+" v"+i,arguments)}function e(){var n;t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[],t.googletag.cmd.push(function(){var e=t.googletag.pubads();for(var a in e)if(e[a].hasOwnProperty("cms-sgroup")){n=e[a]["cms-sgroup"];break}if(n){o("s-groups acquired!"),s.sGroups=n;var r=["cms-sgroup"].concat(s.sGroups);t.sharedContainerDataLayer=t.sharedContainerDataLayer||[],t.corpDataLayer=t.corpDataLayer||[],o("Firing events.");for(var i in r)r.hasOwnProperty(i)&&(t.sharedContainerDataLayer.push({event:r[i]}),t.corpDataLayer.push({event:r[i]}),s.triggerEvent(t,"cms-sgroup",r[i]))}})}var a="GLOBALIZE SGROUPS",r="globalizeSGroups",i="0.6",s=t._CMLS||{};s[r]||(o("Initializing."),s[r]=new e)}(window),function(t,n){t._CMLS["const"].PLAYER_TUNEGENIE=8471,t._CMLS["const"].PLAYER_TRITON=8468,t._CMLS["const"].PLAYER_POSITION_TOP=80847980,t._CMLS["const"].PLAYER_POSITION_BOTTOM=80667984,t._CMLS.whichPlayer=function(){if(t._CMLS.whichPlayer.cache)return t._CMLS.whichPlayer.cache;var n={type:null,position:null};return t.tgmp?(t._CMLS.log("COMMON",["Found TuneGenie player."]),n.type=t._CMLS["const"].PLAYER_TUNEGENIE,t.tgmp.options.position&&"bottom"===t.tgmp.options.position.toLowerCase()?(t._CMLS.log("COMMON",["TuneGenie player is on the bottom."]),n.position=t._CMLS["const"].PLAYER_POSITION_BOTTOM):t.tgmp.options.position&&"top"===t.tgmp.options.position.toLowerCase()&&(t._CMLS.log("COMMON",["TuneGenie player is on the top."]),n.position=t._CMLS["const"].PLAYER_POSITION_TOP)):t.TDPW&&(t._CMLS.log("COMMON",["Found Triton player, assuming it's on top."]),n.type=t._CMLS["const"].PLAYER_TRITON,n.position=t._CMLS["const"].PLAYER_POSITION_TOP),t._CMLS.whichPlayer.cache=n,t._CMLS.whichPlayer.cache}}(window),function(t,n){function o(){t._CMLS.log(a+" v"+i,arguments)}function e(){var n={},e,a=2500,r={PLAYING:1,STOPPED:0},i=this;return this.checkCurrentTrack=function(){var n=localStorage&&JSON?JSON.parse(localStorage.getItem("tdas.controller."+t.amp_player_config.station+"."+t.amp_player_config.stream_id+".events.current-state")):!1;return n&&n.data?(n.data.stream&&"LIVE_PLAYING"===n.data.stream.code.toUpperCase()?i.setState(r.PLAYING):i.setState(r.STOPPED),n.data.song&&n.data.song.id&&i.hasTrackChanged(n.data.song.id)&&i.trackHasChanged(n.data.song),!0):!1},this.setState=function(e){if(e!==n.state){switch(e){case r.PLAYING:o("Player is streaming."),s.triggerEvent(t,"td-player.playing");break;default:o("Player is stopped."),s.triggerEvent(t,"td-player.stopped")}n.state=e}},this.hasTrackChanged=function(t){return t&&t!==n.trackId?!0:!1},this.trackHasChanged=function(e){o("Song has changed!",e),n.trackId=e.id,s.triggerEvent(t,"td-player.trackchange",e)},this.startTimer=function(){clearTimeout(e),e=null,e=setTimeout(function(){i.checkCurrentTrack(),i.startTimer()},a)},o("Initializing."),t.amp_player_config&&t.amp_player_config.station&&t.amp_player_config.stream_id?(this.checkCurrentTrack(),this.startTimer(),o("Initialized."),this):(o("Player configuration not available, exiting."),!1)}var a="PLAYER WATCH",r="playerWatch",i="0.6",s=t._CMLS;if(s[r])return!1;var c=s.whichPlayer();return c.type!==s["const"].PLAYER_TRITON?(o("Triton player not enabled."),!1):void(t._CMLS[r]=new e)}(window),function(t,n){function o(){t._CMLS.log(r+" v"+s,arguments)}function e(){var n=u.whichPlayer(),e=null,a=this;this.timeout=u.autoRefreshAdsTimer||c,this.checkConditions=function(){return u.autoReloader&&u.autoReloader.active?(o("Autoreloader is active, conditions fail."),!1):!0},this.stop=function(){return o("Stopping timer."),clearTimeout(e),e=null,a},this.start=function(){return a.stop(),a.checkConditions()?(o("Starting timer for "+a.timeout+" minute countdown."),a.timer=setTimeout(function(){a.fire()},6e4*a.timeout),!0):!1},this.fire=function(){return a.checkConditions()?void t.googletag.cmd.push(function(){o("Refreshing ads."),t.googletag.pubads().refresh(),a.start()}):!1},o("Initializing."),n.type===u["const"].PLAYER_TRITON&&(t.addEventListener("td-player.stopped",function(){a.stop()},!1),t.addEventListener("td-player.playing",function(){a.start()},!1),t.History&&t.History.Adapter&&t.History.Adapter.bind(t,"pageChange",function(){a.start()})),n.type===u["const"].PLAYER_TUNEGENIE&&t.tgmp&&t.TGMP_EVENTS&&t.tgmp.addEventListener(t.TGMP_EVENTS.streamplaying,function(t){return t===!0?void a.start():void a.stop()})}function a(){if(!u.sGroups)return void o("Init test called without sgroups available.");for(var t in u.sGroups)/Format\s+(.*Talk.*|Sports)/.test(u.sGroups[t])&&(o("Format is good."),u[i]=new e,l=!0)}var r="AUTO REFRESH ADS",i="autoRefreshAds",s="0.4",c=4,u=t._CMLS;if(!u[i]){t.googletag=t.googletag||{},t.googletag.cmd=t.googletag.cmd||[];var l=!1;a(),t.addEventListener("cms-sgroup",function(){l||a()},!1)}}(window),window._CMLS.log("COMMON",["LIBRARIES LOADED!\n                           .__                \n  ____  __ __  _____  __ __|  |  __ __  ______\n_/ ___\\|  |  \\/     \\|  |  \\  | |  |  \\/  ___/\n\\  \\___|  |  /  Y Y  \\  |  /  |_|  |  /___ \\ \n \\___  >____/|__|_|  /____/|____/____//____  >\n     \\/            \\/                      \\/ \n"]);
//# sourceMappingURL=./compiled-allsites-min.js.map