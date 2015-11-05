/**
 * Common utilities for CMLS scripting
 */
/*jshint bitwise: false*/
(function(window, undefined) {
	
	window._CMLS = window._CMLS || {};

	/**
	 * Constants
	 */
	window._CMLS.const = window._CMLS.const || {};
	window._CMLS.const.PLAYER_TUNEGENIE = 8471;
	window._CMLS.const.PLAYER_TRITON = 8468;
	window._CMLS.const.PLAYER_POSITION_TOP = 80847980;
	window._CMLS.const.PLAYER_POSITION_BOTTOM = 80667984;

	/**
	 * [logger description]
	 * @return {[type]} [description]
	 */
	window._CMLS.logger = function cmlsLogger() {
		if ( ! (window._CMLS && window._CMLS.debug) || ! (typeof console === 'object' && console.debug)) {
			return false;
		}

		window._CMLS.logger.namesToColors = window._CMLS.logger.namesToColors || {};

		var background, complement,
			name = [].slice.call(arguments,0,1),
			message = [].slice.call(arguments,1);

		// Use cached colors for provided name, if possible.
		if (window._CMLS.logger.namesToColors[name]) {
			background = window._CMLS.logger.namesToColors[name].background;
			complement = window._CMLS.logger.namesToColors[name].complement;
		} else {
			// Calculate a random color and its complement
			background = Math.floor(Math.random()*16777215).toString(16);
			complement = ("000000" + (0xFFFFFF ^ parseInt(background, 16)).toString(16)).slice(-6);

			window._CMLS.logger.namesToColors[name] = {
				background: background,
				complement: complement
			};
		}

		var ts = (new Date());
		ts = ts.toISOString() ? ts.toISOString() : ts.toUTCString();
				
		message = [].concat(['%c[' + name + ']', 'background: #' + background + '; color: #' + complement, ts], message);
		
		console.debug.apply(message);
	};

	/**
	 * Returns a numeric representation of the current time.
	 * (from Underscore.js)
	 * @return {number} Current time
	 */
	window._CMLS.now = Date.now() || function() {
		return new Date().getTime();
	};

	/**
	 * Throttle (from Underscore.js)
	 * @param  {function} func    Function to throttle
	 * @param  {number}   wait    Milliseconds for execution window
	 * @param  {object}   options Allows bypassing the leading or trailing executions
	 * @return {function}         Throttled wrapper for func
	 */
	window._CMLS.throttle = function(func, wait, options) {
		var context, args, result;
		var timeout = null;
		var previous = 0;
		if ( ! options) {
			options = {};
		}
		var later = function() {
			previous = options.leading === false ? 0 : window._CMLS.now();
			timeout = null;
			result = func.apply(context, args);
			if ( ! timeout) {
				context = args = null;
			}
		};
		return function() {
			var now = window._CMLS.now();
			if (!previous && options.leading === false) {
				previous = now;
			}
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now;
				result = func.apply(context, args);
				if ( ! timeout) {
					context = args = null;
				}
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};

	/**
	 * Debounce (from Underscore.js)
	 * @param  {function} func      Function to debounce
	 * @param  {number}   wait      Milliseconds between executions
	 * @param  {boolean}  immediate Flag to toggle execution point, true for leading, 
	 *                              false for trailing wait window
	 * @return {function}           Debounced wrapper for func
	 */
	window._CMLS.debounce = function(func, wait, immediate) {
		var timeout, args, context, timestamp, result;

		var later = function() {
			var last = window._CMLS.now() - timestamp;

			if (last < wait && last >= 0) {
				timeout = setTimeout(later, wait - last);
			} else {
				timeout = null;
				if ( ! immediate) {
					result = func.apply(context, args);
					if ( ! timeout) {
						context = args = null;
					}
				}
			}
		};

		var debounced = function() {
			context = this;
			args = arguments;
			timestamp = window._CMLS.now();
			var callNow = immediate && ! timeout;
			if ( ! timeout) {
				timeout = setTimeout(later, wait);
			}
			if (callNow) {
				result = func.apply(context, args);
				context = args = null;
			}

			return result;
		};

		debounced.clear = function() {
			clearTimeout(timeout);
			timeout = context = args = null;
		};

		return debounced;
	};

	/**
	 * Determines which resident player is active on the site, and its position
	 * @return {object} Player type and position
	 */
	window._CMLS.whichPlayer = function() {
		if (window._CMLS.whichPlayerCache) {
			return window._CMLS.whichPlayerCache;
		}
		var discovered = {
			type: null,
			position: null,
		};
		if (window.tgmp) {
			discovered.type = window._CMLS.const.PLAYER_TUNEGENIE;
			if (window.tgmp.options.position && window.tgmp.options.position.toLowerCase() === 'bottom') {
				discovered.position = window._CMLS.const.PLAYER_POSITION_BOTTOM;
			} else if (window.tgmp.options.position && window.tgmp.options.position.toLowerCase() === 'top') {
				discovered.position = window._CMLS.const.PLAYER_POSITION_TOP;
			}
		} else if (window.TDPW) {
			discovered.type = window._CMLS.const.PLAYER_TRITON;
			discovered.position = window._CMLS.const.PLAYER_POSITION_TOP;
		}
		window._CMLS.whichPlayerCache = discovered;
		return window._CMLS.whichPlayerCache;
	};

	/**
	 * Uses current location pathname to determine if we're on the homepage.
	 * NOTE: With TuneGenie's player, scripts using this function should only
	 * execute after page load.
	 * @return {Boolean}
	 */
	window._CMLS.isHomepage = function() {
		return window.location.pathname === '/' && /[\?&]?p=/i.test(window.location.search) === false;
	};

}(window));