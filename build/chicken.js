(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('underscore'), require('jquery'), require('moment'), require('xregexp')) :
  typeof define === 'function' && define.amd ? define(['underscore', 'jquery', 'moment', 'xregexp'], factory) :
  (global.Chicken = factory(global._,global.$,global.moment,global.XRegExp));
}(this, (function (_,$,moment,XRegExp) { 'use strict';

  moment = window.moment;
              $ = window.$;
              _ = window._;
              XRegExp = window.XRegExp;
          

  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
  XRegExp = XRegExp && XRegExp.hasOwnProperty('default') ? XRegExp['default'] : XRegExp;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * Ensure some object is a coerced to a string
   **/
  var makeString = function makeString(object) {
    if (object == null) return '';
    return '' + object;
  };

  var isBlank = function isBlank(str) {
    return (/^\s*$/).test(makeString(str));
  };

  var stripTags = function stripTags(str) {
    return makeString(str).replace(/<\/?[^>]+>/g, '');
  };

  var capitalize = function capitalize(str, lowercaseRest) {
    str = makeString(str);
    var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

    return str.charAt(0).toUpperCase() + remainingChars;
  };

  var decapitalize = function decapitalize(str) {
    str = makeString(str);
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  var chop = function chop(str, step) {
    if (str == null) return [];
    str = String(str);
    step = ~~step;
    return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
  };

  var escapeRegExp = function escapeRegExp(str) {
    return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  };

  var defaultToWhiteSpace = function defaultToWhiteSpace(characters) {
    if (characters == null)
      return '\\s';
    else if (characters.source)
      return characters.source;
    else
      return '[' + escapeRegExp(characters) + ']';
  };

  var nativeTrim = String.prototype.trim;

  var trim = function trim(str, characters) {
    str = makeString(str);
    if (!characters && nativeTrim) return nativeTrim.call(str);
    characters = defaultToWhiteSpace(characters);
    return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
  };

  var clean = function clean(str) {
    return trim(str).replace(/\s\s+/g, ' ');
  };

  var from  = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
    to    = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

  from += from.toUpperCase();
  to += to.toUpperCase();

  to = to.split('');

  // for tokens requireing multitoken output
  from += 'ß';
  to.push('ss');


  var cleanDiacritics = function cleanDiacritics(str) {
    return makeString(str).replace(/.{1}/g, function(c){
      var index = from.indexOf(c);
      return index === -1 ? c : to[index];
    });
  };

  var count = function(str, substr) {
    str = makeString(str);
    substr = makeString(substr);

    if (str.length === 0 || substr.length === 0) return 0;
    
    return str.split(substr).length - 1;
  };

  var chars = function chars(str) {
    return makeString(str).split('');
  };

  var swapCase = function swapCase(str) {
    return makeString(str).replace(/\S/g, function(c) {
      return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    });
  };

  /* We're explicitly defining the list of entities we want to escape.
  nbsp is an HTML entity, but we don't want to escape all space characters in a string, hence its omission in this map.

  */
  var escapeChars = {
    '¢' : 'cent',
    '£' : 'pound',
    '¥' : 'yen',
    '€': 'euro',
    '©' :'copy',
    '®' : 'reg',
    '<' : 'lt',
    '>' : 'gt',
    '"' : 'quot',
    '&' : 'amp',
    '\'' : '#39'
  };

  var escapeChars_1 = escapeChars;

  var regexString = '[';
  for(var key in escapeChars_1) {
    regexString += key;
  }
  regexString += ']';

  var regex = new RegExp( regexString, 'g');

  var escapeHTML = function escapeHTML(str) {

    return makeString(str).replace(regex, function(m) {
      return '&' + escapeChars_1[m] + ';';
    });
  };

  /*
  We're explicitly defining the list of entities that might see in escape HTML strings
  */
  var htmlEntities = {
    nbsp: ' ',
    cent: '¢',
    pound: '£',
    yen: '¥',
    euro: '€',
    copy: '©',
    reg: '®',
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: '\''
  };

  var htmlEntities_1 = htmlEntities;

  var unescapeHTML = function unescapeHTML(str) {
    return makeString(str).replace(/\&([^;]{1,10});/g, function(entity, entityCode) {
      var match;

      if (entityCode in htmlEntities_1) {
        return htmlEntities_1[entityCode];
      /*eslint no-cond-assign: 0*/
      } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
        return String.fromCharCode(parseInt(match[1], 16));
      /*eslint no-cond-assign: 0*/
      } else if (match = entityCode.match(/^#(\d+)$/)) {
        return String.fromCharCode(~~match[1]);
      } else {
        return entity;
      }
    });
  };

  var splice = function splice(str, i, howmany, substr) {
    var arr = chars(str);
    arr.splice(~~i, ~~howmany, substr);
    return arr.join('');
  };

  var insert = function insert(str, i, substr) {
    return splice(str, i, 0, substr);
  };

  var replaceAll = function replaceAll(str, find, replace, ignorecase) {
    var flags = (ignorecase === true)?'gi':'g';
    var reg = new RegExp(find, flags);

    return makeString(str).replace(reg, replace);
  };

  var include = function include(str, needle) {
    if (needle === '') return true;
    return makeString(str).indexOf(needle) !== -1;
  };

  var slice = [].slice;

  var join = function join() {
    var args = slice.call(arguments),
      separator = args.shift();

    return args.join(makeString(separator));
  };

  var lines = function lines(str) {
    if (str == null) return [];
    return String(str).split(/\r\n?|\n/);
  };

  function getIndent(str) {
    var matches = str.match(/^[\s\\t]*/gm);
    var indent = matches[0].length;
    
    for (var i = 1; i < matches.length; i++) {
      indent = Math.min(matches[i].length, indent);
    }

    return indent;
  }

  var dedent = function dedent(str, pattern) {
    str = makeString(str);
    var indent = getIndent(str);
    var reg;

    if (indent === 0) return str;

    if (typeof pattern === 'string') {
      reg = new RegExp('^' + pattern, 'gm');
    } else {
      reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');
    }

    return str.replace(reg, '');
  };

  var reverse = function reverse(str) {
    return chars(str).reverse().join('');
  };

  var toPositive = function toPositive(number) {
    return number < 0 ? 0 : (+number || 0);
  };

  var startsWith = function startsWith(str, starts, position) {
    str = makeString(str);
    starts = '' + starts;
    position = position == null ? 0 : Math.min(toPositive(position), str.length);
    return str.lastIndexOf(starts, position) === position;
  };

  var endsWith = function endsWith(str, ends, position) {
    str = makeString(str);
    ends = '' + ends;
    if (typeof position == 'undefined') {
      position = str.length - ends.length;
    } else {
      position = Math.min(toPositive(position), str.length) - ends.length;
    }
    return position >= 0 && str.indexOf(ends, position) === position;
  };

  var adjacent = function adjacent(str, direction) {
    str = makeString(str);
    if (str.length === 0) {
      return '';
    }
    return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
  };

  var pred = function succ(str) {
    return adjacent(str, -1);
  };

  var succ = function succ(str) {
    return adjacent(str, 1);
  };

  var titleize = function titleize(str) {
    return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
      return c.toUpperCase();
    });
  };

  var camelize = function camelize(str, decapitalize$$1) {
    str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
      return c ? c.toUpperCase() : '';
    });

    if (decapitalize$$1 === true) {
      return decapitalize(str);
    } else {
      return str;
    }
  };

  var underscored = function underscored(str) {
    return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
  };

  var dasherize = function dasherize(str) {
    return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
  };

  var classify = function classify(str) {
    str = makeString(str);
    return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
  };

  var humanize = function humanize(str) {
    return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
  };

  var nativeTrimLeft = String.prototype.trimLeft;

  var ltrim = function ltrim(str, characters) {
    str = makeString(str);
    if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
    characters = defaultToWhiteSpace(characters);
    return str.replace(new RegExp('^' + characters + '+'), '');
  };

  var nativeTrimRight = String.prototype.trimRight;

  var rtrim = function rtrim(str, characters) {
    str = makeString(str);
    if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
    characters = defaultToWhiteSpace(characters);
    return str.replace(new RegExp(characters + '+$'), '');
  };

  var truncate = function truncate(str, length, truncateStr) {
    str = makeString(str);
    truncateStr = truncateStr || '...';
    length = ~~length;
    return str.length > length ? str.slice(0, length) + truncateStr : str;
  };

  /**
   * _s.prune: a more elegant version of truncate
   * prune extra chars, never leaving a half-chopped word.
   * @author github.com/rwz
   */



  var prune = function prune(str, length, pruneStr) {
    str = makeString(str);
    length = ~~length;
    pruneStr = pruneStr != null ? String(pruneStr) : '...';

    if (str.length <= length) return str;

    var tmpl = function(c) {
        return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
      },
      template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

    if (template.slice(template.length - 2).match(/\w\w/))
      template = template.replace(/\s*\S+$/, '');
    else
      template = rtrim(template.slice(0, template.length - 1));

    return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;
  };

  var words = function words(str, delimiter) {
    if (isBlank(str)) return [];
    return trim(str, delimiter).split(delimiter || /\s+/);
  };

  var strRepeat = function strRepeat(str, qty){
    if (qty < 1) return '';
    var result = '';
    while (qty > 0) {
      if (qty & 1) result += str;
      qty >>= 1, str += str;
    }
    return result;
  };

  var pad = function pad(str, length, padStr, type) {
    str = makeString(str);
    length = ~~length;

    var padlen = 0;

    if (!padStr)
      padStr = ' ';
    else if (padStr.length > 1)
      padStr = padStr.charAt(0);

    switch (type) {
    case 'right':
      padlen = length - str.length;
      return str + strRepeat(padStr, padlen);
    case 'both':
      padlen = length - str.length;
      return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));
    default: // 'left'
      padlen = length - str.length;
      return strRepeat(padStr, padlen) + str;
    }
  };

  var lpad = function lpad(str, length, padStr) {
    return pad(str, length, padStr);
  };

  var rpad = function rpad(str, length, padStr) {
    return pad(str, length, padStr, 'right');
  };

  var lrpad = function lrpad(str, length, padStr) {
    return pad(str, length, padStr, 'both');
  };

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global.setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
  }
  if (typeof global.clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  function nextTick(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  }
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues
  var versions = {};
  var release = {};
  var config = {};

  function noop() {}

  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;

  function binding(name) {
      throw new Error('process.binding is not supported');
  }

  function cwd () { return '/' }
  function chdir (dir) {
      throw new Error('process.chdir is not supported');
  }function umask() { return 0; }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global.performance || {};
  var performanceNow =
    performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime(previousTimestamp){
    var clocktime = performanceNow.call(performance)*1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime%1)*1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds<0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds,nanoseconds]
  }

  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }

  var process$1 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  var inherits;
  if (typeof Object.create === 'function'){
    inherits = function inherits(ctor, superCtor) {
      // implementation from standard node.js 'util' module
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  var inherits$1 = inherits;

  // Copyright Joyent, Inc. and other Node contributors.
  var formatRegExp = /%[sdj%]/g;
  function format(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(' ');
    }

    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === '%%') return '%';
      if (i >= len) return x;
      switch (x) {
        case '%s': return String(args[i++]);
        case '%d': return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_$$1) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect(x);
      }
    }
    return str;
  }

  // Mark that a method should not be used.
  // Returns a modified function which warns once by default.
  // If --no-deprecation is set, then it is a no-op.
  function deprecate(fn, msg) {
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global.process)) {
      return function() {
        return deprecate(fn, msg).apply(this, arguments);
      };
    }

    var warned = false;
    function deprecated() {
      if (!warned) {
        {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }

    return deprecated;
  }

  var debugs = {};
  var debugEnviron;
  function debuglog(set) {
    if (isUndefined(debugEnviron))
      debugEnviron = process$1.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = 0;
        debugs[set] = function() {
          var msg = format.apply(null, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function() {};
      }
    }
    return debugs[set];
  }

  /**
   * Echos the value of a value. Trys to print the value out
   * in the best way possible given the different types.
   *
   * @param {Object} obj The object to print out.
   * @param {Object} opts Optional options object that alters the output.
   */
  /* legacy: obj, showHidden, depth, colors*/
  function inspect(obj, opts) {
    // default options
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      // legacy...
      ctx.showHidden = opts;
    } else if (opts) {
      // got an "options" object
      _extend(ctx, opts);
    }
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }

  // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
  inspect.colors = {
    'bold' : [1, 22],
    'italic' : [3, 23],
    'underline' : [4, 24],
    'inverse' : [7, 27],
    'white' : [37, 39],
    'grey' : [90, 39],
    'black' : [30, 39],
    'blue' : [34, 39],
    'cyan' : [36, 39],
    'green' : [32, 39],
    'magenta' : [35, 39],
    'red' : [31, 39],
    'yellow' : [33, 39]
  };

  // Don't use 'blue' not visible on cmd.exe
  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
  };


  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];

    if (style) {
      return '\u001b[' + inspect.colors[style][0] + 'm' + str +
             '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }


  function stylizeNoColor(str, styleType) {
    return str;
  }


  function arrayToHash(array) {
    var hash = {};

    array.forEach(function(val, idx) {
      hash[val] = true;
    });

    return hash;
  }


  function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect &&
        value &&
        isFunction(value.inspect) &&
        // Filter out the util module, it's inspect function is special
        value.inspect !== inspect &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }

    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }

    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);

    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }

    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value)
        && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    }

    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError(value)) {
        return formatError(value);
      }
    }

    var base = '', array = false, braces = ['{', '}'];

    // Make Array say that they are Array
    if (isArray(value)) {
      array = true;
      braces = ['[', ']'];
    }

    // Make functions say that they are functions
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }

    // Make RegExps say that they are RegExps
    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }

    // Make dates with properties first say the date
    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }

    // Make error with message first say the error
    if (isError(value)) {
      base = ' ' + formatError(value);
    }

    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }

    ctx.seen.push(value);

    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }

    ctx.seen.pop();

    return reduceToSingleString(output, base, braces);
  }


  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber(value))
      return ctx.stylize('' + value, 'number');
    if (isBoolean(value))
      return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value))
      return ctx.stylize('null', 'null');
  }


  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }


  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            key, true));
      }
    });
    return output;
  }


  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function(line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function(line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'")
                   .replace(/\\"/g, '"')
                   .replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }

    return name + ': ' + str;
  }


  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);

    if (length > 60) {
      return braces[0] +
             (base === '' ? '' : base + '\n ') +
             ' ' +
             output.join(',\n  ') +
             ' ' +
             braces[1];
    }

    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }


  // NOTE: These type checking functions intentionally don't use `instanceof`
  // because it is fragile and can be easily faked with `Object.create()`.
  function isArray(ar) {
    return Array.isArray(ar);
  }

  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }

  function isNull(arg) {
    return arg === null;
  }

  function isNullOrUndefined(arg) {
    return arg == null;
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isString(arg) {
    return typeof arg === 'string';
  }

  function isSymbol(arg) {
    return typeof arg === 'symbol';
  }

  function isUndefined(arg) {
    return arg === void 0;
  }

  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }

  function isError(e) {
    return isObject(e) &&
        (objectToString(e) === '[object Error]' || e instanceof Error);
  }

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isPrimitive(arg) {
    return arg === null ||
           typeof arg === 'boolean' ||
           typeof arg === 'number' ||
           typeof arg === 'string' ||
           typeof arg === 'symbol' ||  // ES6 symbol
           typeof arg === 'undefined';
  }

  function isBuffer(maybeBuf) {
    return Buffer.isBuffer(maybeBuf);
  }

  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }


  function pad$1(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }


  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'];

  // 26 Feb 16:19:34
  function timestamp() {
    var d = new Date();
    var time = [pad$1(d.getHours()),
                pad$1(d.getMinutes()),
                pad$1(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
  }


  // log is just a thin wrapper to console.log that prepends a timestamp
  function log() {
    console.log('%s - %s', timestamp(), format.apply(null, arguments));
  }

  function _extend(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;

    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var require$$0 = {
    inherits: inherits$1,
    _extend: _extend,
    log: log,
    isBuffer: isBuffer,
    isPrimitive: isPrimitive,
    isFunction: isFunction,
    isError: isError,
    isDate: isDate,
    isObject: isObject,
    isRegExp: isRegExp,
    isUndefined: isUndefined,
    isSymbol: isSymbol,
    isString: isString,
    isNumber: isNumber,
    isNullOrUndefined: isNullOrUndefined,
    isNull: isNull,
    isBoolean: isBoolean,
    isArray: isArray,
    inspect: inspect,
    deprecate: deprecate,
    format: format,
    debuglog: debuglog
  };

  /**
   * For Node.js, simply re-export the core `util.deprecate` function.
   */

  var node = require$$0.deprecate;

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var sprintf = createCommonjsModule(function (module, exports) {
  /* global window, exports, define */

  !function() {

      var re = {
          not_string: /[^s]/,
          not_bool: /[^t]/,
          not_type: /[^T]/,
          not_primitive: /[^v]/,
          number: /[diefg]/,
          numeric_arg: /[bcdiefguxX]/,
          json: /[j]/,
          not_json: /[^j]/,
          text: /^[^\x25]+/,
          modulo: /^\x25{2}/,
          placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
          key: /^([a-z_][a-z_\d]*)/i,
          key_access: /^\.([a-z_][a-z_\d]*)/i,
          index_access: /^\[(\d+)\]/,
          sign: /^[\+\-]/
      };

      function sprintf(key) {
          // `arguments` is not an array, but should be fine for this call
          return sprintf_format(sprintf_parse(key), arguments)
      }

      function vsprintf(fmt, argv) {
          return sprintf.apply(null, [fmt].concat(argv || []))
      }

      function sprintf_format(parse_tree, argv) {
          var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, match, pad, pad_character, pad_length, is_positive, sign;
          for (i = 0; i < tree_length; i++) {
              if (typeof parse_tree[i] === 'string') {
                  output += parse_tree[i];
              }
              else if (Array.isArray(parse_tree[i])) {
                  match = parse_tree[i]; // convenience purposes only
                  if (match[2]) { // keyword argument
                      arg = argv[cursor];
                      for (k = 0; k < match[2].length; k++) {
                          if (!arg.hasOwnProperty(match[2][k])) {
                              throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]))
                          }
                          arg = arg[match[2][k]];
                      }
                  }
                  else if (match[1]) { // positional argument (explicit)
                      arg = argv[match[1]];
                  }
                  else { // positional argument (implicit)
                      arg = argv[cursor++];
                  }

                  if (re.not_type.test(match[8]) && re.not_primitive.test(match[8]) && arg instanceof Function) {
                      arg = arg();
                  }

                  if (re.numeric_arg.test(match[8]) && (typeof arg !== 'number' && isNaN(arg))) {
                      throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                  }

                  if (re.number.test(match[8])) {
                      is_positive = arg >= 0;
                  }

                  switch (match[8]) {
                      case 'b':
                          arg = parseInt(arg, 10).toString(2);
                          break
                      case 'c':
                          arg = String.fromCharCode(parseInt(arg, 10));
                          break
                      case 'd':
                      case 'i':
                          arg = parseInt(arg, 10);
                          break
                      case 'j':
                          arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0);
                          break
                      case 'e':
                          arg = match[7] ? parseFloat(arg).toExponential(match[7]) : parseFloat(arg).toExponential();
                          break
                      case 'f':
                          arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                          break
                      case 'g':
                          arg = match[7] ? String(Number(arg.toPrecision(match[7]))) : parseFloat(arg);
                          break
                      case 'o':
                          arg = (parseInt(arg, 10) >>> 0).toString(8);
                          break
                      case 's':
                          arg = String(arg);
                          arg = (match[7] ? arg.substring(0, match[7]) : arg);
                          break
                      case 't':
                          arg = String(!!arg);
                          arg = (match[7] ? arg.substring(0, match[7]) : arg);
                          break
                      case 'T':
                          arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
                          arg = (match[7] ? arg.substring(0, match[7]) : arg);
                          break
                      case 'u':
                          arg = parseInt(arg, 10) >>> 0;
                          break
                      case 'v':
                          arg = arg.valueOf();
                          arg = (match[7] ? arg.substring(0, match[7]) : arg);
                          break
                      case 'x':
                          arg = (parseInt(arg, 10) >>> 0).toString(16);
                          break
                      case 'X':
                          arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
                          break
                  }
                  if (re.json.test(match[8])) {
                      output += arg;
                  }
                  else {
                      if (re.number.test(match[8]) && (!is_positive || match[3])) {
                          sign = is_positive ? '+' : '-';
                          arg = arg.toString().replace(re.sign, '');
                      }
                      else {
                          sign = '';
                      }
                      pad_character = match[4] ? match[4] === '0' ? '0' : match[4].charAt(1) : ' ';
                      pad_length = match[6] - (sign + arg).length;
                      pad = match[6] ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : '';
                      output += match[5] ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg);
                  }
              }
          }
          return output
      }

      var sprintf_cache = Object.create(null);

      function sprintf_parse(fmt) {
          if (sprintf_cache[fmt]) {
              return sprintf_cache[fmt]
          }

          var _fmt = fmt, match, parse_tree = [], arg_names = 0;
          while (_fmt) {
              if ((match = re.text.exec(_fmt)) !== null) {
                  parse_tree.push(match[0]);
              }
              else if ((match = re.modulo.exec(_fmt)) !== null) {
                  parse_tree.push('%');
              }
              else if ((match = re.placeholder.exec(_fmt)) !== null) {
                  if (match[2]) {
                      arg_names |= 1;
                      var field_list = [], replacement_field = match[2], field_match = [];
                      if ((field_match = re.key.exec(replacement_field)) !== null) {
                          field_list.push(field_match[1]);
                          while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                              if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                  field_list.push(field_match[1]);
                              }
                              else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                  field_list.push(field_match[1]);
                              }
                              else {
                                  throw new SyntaxError('[sprintf] failed to parse named argument key')
                              }
                          }
                      }
                      else {
                          throw new SyntaxError('[sprintf] failed to parse named argument key')
                      }
                      match[2] = field_list;
                  }
                  else {
                      arg_names |= 2;
                  }
                  if (arg_names === 3) {
                      throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                  }
                  parse_tree.push(match);
              }
              else {
                  throw new SyntaxError('[sprintf] unexpected placeholder')
              }
              _fmt = _fmt.substring(match[0].length);
          }
          return sprintf_cache[fmt] = parse_tree
      }

      /**
       * export to either browser or node.js
       */
      /* eslint-disable quote-props */
      {
          exports['sprintf'] = sprintf;
          exports['vsprintf'] = vsprintf;
      }
      if (typeof window !== 'undefined') {
          window['sprintf'] = sprintf;
          window['vsprintf'] = vsprintf;
      }
      /* eslint-enable quote-props */
  }();
  });

  var sprintf$1 = node(sprintf.sprintf,
    'sprintf() will be removed in the next major release, use the sprintf-js package instead.');

  var vsprintf = node(sprintf.vsprintf,
    'vsprintf() will be removed in the next major release, use the sprintf-js package instead.');

  var toNumber = function toNumber(num, precision) {
    if (num == null) return 0;
    var factor = Math.pow(10, isFinite(precision) ? precision : 0);
    return Math.round(num * factor) / factor;
  };

  var numberFormat = function numberFormat(number, dec, dsep, tsep) {
    if (isNaN(number) || number == null) return '';

    number = number.toFixed(~~dec);
    tsep = typeof tsep == 'string' ? tsep : ',';

    var parts = number.split('.'),
      fnums = parts[0],
      decimals = parts[1] ? (dsep || '.') + parts[1] : '';

    return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;
  };

  var strRight = function strRight(str, sep) {
    str = makeString(str);
    sep = makeString(sep);
    var pos = !sep ? -1 : str.indexOf(sep);
    return ~ pos ? str.slice(pos + sep.length, str.length) : str;
  };

  var strRightBack = function strRightBack(str, sep) {
    str = makeString(str);
    sep = makeString(sep);
    var pos = !sep ? -1 : str.lastIndexOf(sep);
    return ~ pos ? str.slice(pos + sep.length, str.length) : str;
  };

  var strLeft = function strLeft(str, sep) {
    str = makeString(str);
    sep = makeString(sep);
    var pos = !sep ? -1 : str.indexOf(sep);
    return ~ pos ? str.slice(0, pos) : str;
  };

  var strLeftBack = function strLeftBack(str, sep) {
    str = makeString(str);
    sep = makeString(sep);
    var pos = str.lastIndexOf(sep);
    return ~ pos ? str.slice(0, pos) : str;
  };

  var toSentence = function toSentence(array, separator, lastSeparator, serial) {
    separator = separator || ', ';
    lastSeparator = lastSeparator || ' and ';
    var a = array.slice(),
      lastMember = a.pop();

    if (array.length > 2 && serial) lastSeparator = rtrim(separator) + lastSeparator;

    return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
  };

  var toSentenceSerial = function toSentenceSerial(array, sep, lastSep) {
    return toSentence(array, sep, lastSep, true);
  };

  var slugify = function slugify(str) {
    return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
  };

  var surround = function surround(str, wrapper) {
    return [wrapper, str, wrapper].join('');
  };

  var quote = function quote(str, quoteChar) {
    return surround(str, quoteChar || '"');
  };

  var unquote = function unquote(str, quoteChar) {
    quoteChar = quoteChar || '"';
    if (str[0] === quoteChar && str[str.length - 1] === quoteChar)
      return str.slice(1, str.length - 1);
    else return str;
  };

  var repeat = function repeat(str, qty, separator) {
    str = makeString(str);

    qty = ~~qty;

    // using faster implementation if separator is not needed;
    if (separator == null) return strRepeat(str, qty);

    // this one is about 300x slower in Google Chrome
    /*eslint no-empty: 0*/
    for (var repeat = []; qty > 0; repeat[--qty] = str) {}
    return repeat.join(separator);
  };

  var naturalCmp = function naturalCmp(str1, str2) {
    if (str1 == str2) return 0;
    if (!str1) return -1;
    if (!str2) return 1;

    var cmpRegex = /(\.\d+|\d+|\D+)/g,
      tokens1 = String(str1).match(cmpRegex),
      tokens2 = String(str2).match(cmpRegex),
      count = Math.min(tokens1.length, tokens2.length);

    for (var i = 0; i < count; i++) {
      var a = tokens1[i],
        b = tokens2[i];

      if (a !== b) {
        var num1 = +a;
        var num2 = +b;
        if (num1 === num1 && num2 === num2) {
          return num1 > num2 ? 1 : -1;
        }
        return a < b ? -1 : 1;
      }
    }

    if (tokens1.length != tokens2.length)
      return tokens1.length - tokens2.length;

    return str1 < str2 ? -1 : 1;
  };

  /**
   * Based on the implementation here: https://github.com/hiddentao/fast-levenshtein
   */
  var levenshtein = function levenshtein(str1, str2) {
    str1 = makeString(str1);
    str2 = makeString(str2);

    // Short cut cases  
    if (str1 === str2) return 0;
    if (!str1 || !str2) return Math.max(str1.length, str2.length);

    // two rows
    var prevRow = new Array(str2.length + 1);

    // initialise previous row
    for (var i = 0; i < prevRow.length; ++i) {
      prevRow[i] = i;
    }

    // calculate current row distance from previous row
    for (i = 0; i < str1.length; ++i) {
      var nextCol = i + 1;

      for (var j = 0; j < str2.length; ++j) {
        var curCol = nextCol;

        // substution
        nextCol = prevRow[j] + ( (str1.charAt(i) === str2.charAt(j)) ? 0 : 1 );
        // insertion
        var tmp = curCol + 1;
        if (nextCol > tmp) {
          nextCol = tmp;
        }
        // deletion
        tmp = prevRow[j + 1] + 1;
        if (nextCol > tmp) {
          nextCol = tmp;
        }

        // copy current col value into previous (in preparation for next iteration)
        prevRow[j] = curCol;
      }

      // copy last col value into previous (in preparation for next iteration)
      prevRow[j] = nextCol;
    }

    return nextCol;
  };

  function boolMatch(s, matchers) {
    var i, matcher, down = s.toLowerCase();
    matchers = [].concat(matchers);
    for (i = 0; i < matchers.length; i += 1) {
      matcher = matchers[i];
      if (!matcher) continue;
      if (matcher.test && matcher.test(s)) return true;
      if (matcher.toLowerCase() === down) return true;
    }
  }

  var toBoolean = function toBoolean(str, trueValues, falseValues) {
    if (typeof str === 'number') str = '' + str;
    if (typeof str !== 'string') return !!str;
    str = trim(str);
    if (boolMatch(str, trueValues || ['true', '1'])) return true;
    if (boolMatch(str, falseValues || ['false', '0'])) return false;
  };

  var exports$1 = function() {
    var result = {};

    for (var prop in this) {
      if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join|map|wrap)$/)) continue;
      result[prop] = this[prop];
    }

    return result;
  };

  // Wrap
  // wraps a string by a certain width



  var wrap = function wrap(str, options){
    str = makeString(str);
    
    options = options || {};
    
    var width = options.width || 75;
    var seperator = options.seperator || '\n';
    var cut = options.cut || false;
    var preserveSpaces = options.preserveSpaces || false;
    var trailingSpaces = options.trailingSpaces || false;
    
    var result;
    
    if(width <= 0){
      return str;
    }
    
    else if(!cut){
    
      var words = str.split(' ');
      var current_column = 0;
      result = '';
    
      while(words.length > 0){
        
        // if adding a space and the next word would cause this line to be longer than width...
        if(1 + words[0].length + current_column > width){
          //start a new line if this line is not already empty
          if(current_column > 0){
            // add a space at the end of the line is preserveSpaces is true
            if (preserveSpaces){
              result += ' ';
              current_column++;
            }
            // fill the rest of the line with spaces if trailingSpaces option is true
            else if(trailingSpaces){
              while(current_column < width){
                result += ' ';
                current_column++;
              }            
            }
            //start new line
            result += seperator;
            current_column = 0;
          }
        }
    
        // if not at the begining of the line, add a space in front of the word
        if(current_column > 0){
          result += ' ';
          current_column++;
        }
    
        // tack on the next word, update current column, a pop words array
        result += words[0];
        current_column += words[0].length;
        words.shift();
    
      }
    
      // fill the rest of the line with spaces if trailingSpaces option is true
      if(trailingSpaces){
        while(current_column < width){
          result += ' ';
          current_column++;
        }            
      }
    
      return result;
    
    }
    
    else {
    
      var index = 0;
      result = '';
    
      // walk through each character and add seperators where appropriate
      while(index < str.length){
        if(index % width == 0 && index > 0){
          result += seperator;
        }
        result += str.charAt(index);
        index++;
      }
    
      // fill the rest of the line with spaces if trailingSpaces option is true
      if(trailingSpaces){
        while(index % width > 0){
          result += ' ';
          index++;
        }            
      }
      
      return result;
    }
  };

  var map = function(str, callback) {
    str = makeString(str);

    if (str.length === 0 || typeof callback !== 'function') return str;

    return str.replace(/./g, callback);
  };

  function s(value) {
    /* jshint validthis: true */
    if (!(this instanceof s)) return new s(value);
    this._wrapped = value;
  }

  s.VERSION = '3.3.4';

  s.isBlank          = isBlank;
  s.stripTags        = stripTags;
  s.capitalize       = capitalize;
  s.decapitalize     = decapitalize;
  s.chop             = chop;
  s.trim             = trim;
  s.clean            = clean;
  s.cleanDiacritics  = cleanDiacritics;
  s.count            = count;
  s.chars            = chars;
  s.swapCase         = swapCase;
  s.escapeHTML       = escapeHTML;
  s.unescapeHTML     = unescapeHTML;
  s.splice           = splice;
  s.insert           = insert;
  s.replaceAll       = replaceAll;
  s.include          = include;
  s.join             = join;
  s.lines            = lines;
  s.dedent           = dedent;
  s.reverse          = reverse;
  s.startsWith       = startsWith;
  s.endsWith         = endsWith;
  s.pred             = pred;
  s.succ             = succ;
  s.titleize         = titleize;
  s.camelize         = camelize;
  s.underscored      = underscored;
  s.dasherize        = dasherize;
  s.classify         = classify;
  s.humanize         = humanize;
  s.ltrim            = ltrim;
  s.rtrim            = rtrim;
  s.truncate         = truncate;
  s.prune            = prune;
  s.words            = words;
  s.pad              = pad;
  s.lpad             = lpad;
  s.rpad             = rpad;
  s.lrpad            = lrpad;
  s.sprintf          = sprintf$1;
  s.vsprintf         = vsprintf;
  s.toNumber         = toNumber;
  s.numberFormat     = numberFormat;
  s.strRight         = strRight;
  s.strRightBack     = strRightBack;
  s.strLeft          = strLeft;
  s.strLeftBack      = strLeftBack;
  s.toSentence       = toSentence;
  s.toSentenceSerial = toSentenceSerial;
  s.slugify          = slugify;
  s.surround         = surround;
  s.quote            = quote;
  s.unquote          = unquote;
  s.repeat           = repeat;
  s.naturalCmp       = naturalCmp;
  s.levenshtein      = levenshtein;
  s.toBoolean        = toBoolean;
  s.exports          = exports$1;
  s.escapeRegExp     = escapeRegExp;
  s.wrap             = wrap;
  s.map              = map;

  // Aliases
  s.strip     = s.trim;
  s.lstrip    = s.ltrim;
  s.rstrip    = s.rtrim;
  s.center    = s.lrpad;
  s.rjust     = s.lpad;
  s.ljust     = s.rpad;
  s.contains  = s.include;
  s.q         = s.quote;
  s.toBool    = s.toBoolean;
  s.camelcase = s.camelize;
  s.mapChars  = s.map;


  // Implement chaining
  s.prototype = {
    value: function value() {
      return this._wrapped;
    }
  };

  function fn2method(key, fn) {
    if (typeof fn !== 'function') return;
    s.prototype[key] = function() {
      var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
      var res = fn.apply(null, args);
      // if the result is non-string stop the chain and return the value
      return typeof res === 'string' ? new s(res) : res;
    };
  }

  // Copy functions to instance methods for chaining
  for (var key$1 in s) fn2method(key$1, s[key$1]);

  fn2method('tap', function tap(string, fn) {
    return fn(string);
  });

  function prototype2method(methodName) {
    fn2method(methodName, function(context) {
      var args = Array.prototype.slice.call(arguments, 1);
      return String.prototype[methodName].apply(context, args);
    });
  }

  var prototypeMethods = [
    'toUpperCase',
    'toLowerCase',
    'split',
    'replace',
    'slice',
    'substring',
    'substr',
    'concat'
  ];

  for (var method in prototypeMethods) prototype2method(prototypeMethods[method]);


  var underscore_string = s;

  var inflection = createCommonjsModule(function (module, exports) {
  /*!
   * inflection
   * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
   * MIT Licensed
   *
   * @fileoverview
   * A port of inflection-js to node.js module.
   */

  ( function ( root, factory ){
    {
      module.exports = factory();
    }
  }( commonjsGlobal, function (){

    /**
     * @description This is a list of nouns that use the same form for both singular and plural.
     *              This list should remain entirely in lower case to correctly match Strings.
     * @private
     */
    var uncountable_words = [
      // 'access',
      'accommodation',
      'adulthood',
      'advertising',
      'advice',
      'aggression',
      'aid',
      'air',
      'aircraft',
      'alcohol',
      'anger',
      'applause',
      'arithmetic',
      // 'art',
      'assistance',
      'athletics',
      // 'attention',

      'bacon',
      'baggage',
      // 'ballet',
      // 'beauty',
      'beef',
      // 'beer',
      // 'behavior',
      'biology',
      // 'billiards',
      'blood',
      'botany',
      // 'bowels',
      'bread',
      // 'business',
      'butter',

      'carbon',
      'cardboard',
      'cash',
      'chalk',
      'chaos',
      'chess',
      'crossroads',
      'countryside',

      // 'damage',
      'dancing',
      // 'danger',
      'deer',
      // 'delight',
      // 'dessert',
      'dignity',
      'dirt',
      // 'distribution',
      'dust',

      'economics',
      'education',
      'electricity',
      // 'employment',
      // 'energy',
      'engineering',
      'enjoyment',
      // 'entertainment',
      'envy',
      'equipment',
      'ethics',
      'evidence',
      'evolution',

      // 'failure',
      // 'faith',
      'fame',
      'fiction',
      // 'fish',
      'flour',
      'flu',
      'food',
      // 'freedom',
      // 'fruit',
      'fuel',
      'fun',
      // 'funeral',
      'furniture',

      'gallows',
      'garbage',
      'garlic',
      // 'gas',
      'genetics',
      // 'glass',
      'gold',
      'golf',
      'gossip',
      'grammar',
      // 'grass',
      'gratitude',
      'grief',
      // 'ground',
      'guilt',
      'gymnastics',

      // 'hair',
      'happiness',
      'hardware',
      'harm',
      'hate',
      'hatred',
      'health',
      'heat',
      // 'height',
      'help',
      'homework',
      'honesty',
      'honey',
      'hospitality',
      'housework',
      'humour',
      'hunger',
      'hydrogen',

      'ice',
      'importance',
      'inflation',
      'information',
      // 'injustice',
      'innocence',
      // 'intelligence',
      'iron',
      'irony',

      'jam',
      // 'jealousy',
      // 'jelly',
      'jewelry',
      // 'joy',
      'judo',
      // 'juice',
      // 'justice',

      'karate',
      // 'kindness',
      'knowledge',

      // 'labour',
      'lack',
      // 'land',
      'laughter',
      'lava',
      'leather',
      'leisure',
      'lightning',
      'linguine',
      'linguini',
      'linguistics',
      'literature',
      'litter',
      'livestock',
      'logic',
      'loneliness',
      // 'love',
      'luck',
      'luggage',

      'macaroni',
      'machinery',
      'magic',
      // 'mail',
      'management',
      'mankind',
      'marble',
      'mathematics',
      'mayonnaise',
      'measles',
      // 'meat',
      // 'metal',
      'methane',
      'milk',
      'minus',
      'money',
      // 'moose',
      'mud',
      'music',
      'mumps',

      'nature',
      'news',
      'nitrogen',
      'nonsense',
      'nurture',
      'nutrition',

      'obedience',
      'obesity',
      // 'oil',
      'oxygen',

      // 'paper',
      // 'passion',
      'pasta',
      'patience',
      // 'permission',
      'physics',
      'poetry',
      'pollution',
      'poverty',
      // 'power',
      'pride',
      // 'production',
      // 'progress',
      // 'pronunciation',
      'psychology',
      'publicity',
      'punctuation',

      // 'quality',
      // 'quantity',
      'quartz',

      'racism',
      // 'rain',
      // 'recreation',
      'relaxation',
      'reliability',
      'research',
      'respect',
      'revenge',
      'rice',
      'rubbish',
      'rum',

      'safety',
      // 'salad',
      // 'salt',
      // 'sand',
      // 'satire',
      'scenery',
      'seafood',
      'seaside',
      'series',
      'shame',
      'sheep',
      'shopping',
      // 'silence',
      'sleep',
      // 'slang'
      'smoke',
      'smoking',
      'snow',
      'soap',
      'software',
      'soil',
      // 'sorrow',
      // 'soup',
      'spaghetti',
      // 'speed',
      'species',
      // 'spelling',
      // 'sport',
      'steam',
      // 'strength',
      'stuff',
      'stupidity',
      // 'success',
      // 'sugar',
      'sunshine',
      'symmetry',

      // 'tea',
      'tennis',
      'thirst',
      'thunder',
      'timber',
      // 'time',
      // 'toast',
      // 'tolerance',
      // 'trade',
      'traffic',
      'transportation',
      // 'travel',
      'trust',

      // 'understanding',
      'underwear',
      'unemployment',
      'unity',
      // 'usage',

      'validity',
      'veal',
      'vegetation',
      'vegetarianism',
      'vengeance',
      'violence',
      // 'vision',
      'vitality',

      'warmth',
      // 'water',
      'wealth',
      'weather',
      // 'weight',
      'welfare',
      'wheat',
      // 'whiskey',
      // 'width',
      'wildlife',
      // 'wine',
      'wisdom',
      // 'wood',
      // 'wool',
      // 'work',

      // 'yeast',
      'yoga',

      'zinc',
      'zoology'
    ];

    /**
     * @description These rules translate from the singular form of a noun to its plural form.
     * @private
     */

    var regex = {
      plural : {
        men       : new RegExp( '^(m|wom)en$'                    , 'gi' ),
        people    : new RegExp( '(pe)ople$'                      , 'gi' ),
        children  : new RegExp( '(child)ren$'                    , 'gi' ),
        tia       : new RegExp( '([ti])a$'                       , 'gi' ),
        analyses  : new RegExp( '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi' ),
        hives     : new RegExp( '(hi|ti)ves$'                    , 'gi' ),
        curves    : new RegExp( '(curve)s$'                      , 'gi' ),
        lrves     : new RegExp( '([lr])ves$'                     , 'gi' ),
        aves      : new RegExp( '([a])ves$'                      , 'gi' ),
        foves     : new RegExp( '([^fo])ves$'                    , 'gi' ),
        movies    : new RegExp( '(m)ovies$'                      , 'gi' ),
        aeiouyies : new RegExp( '([^aeiouy]|qu)ies$'             , 'gi' ),
        series    : new RegExp( '(s)eries$'                      , 'gi' ),
        xes       : new RegExp( '(x|ch|ss|sh)es$'                , 'gi' ),
        mice      : new RegExp( '([m|l])ice$'                    , 'gi' ),
        buses     : new RegExp( '(bus)es$'                       , 'gi' ),
        oes       : new RegExp( '(o)es$'                         , 'gi' ),
        shoes     : new RegExp( '(shoe)s$'                       , 'gi' ),
        crises    : new RegExp( '(cris|ax|test)es$'              , 'gi' ),
        octopi    : new RegExp( '(octop|vir)i$'                  , 'gi' ),
        aliases   : new RegExp( '(alias|canvas|status|campus)es$', 'gi' ),
        summonses : new RegExp( '^(summons)es$'                  , 'gi' ),
        oxen      : new RegExp( '^(ox)en'                        , 'gi' ),
        matrices  : new RegExp( '(matr)ices$'                    , 'gi' ),
        vertices  : new RegExp( '(vert|ind)ices$'                , 'gi' ),
        feet      : new RegExp( '^feet$'                         , 'gi' ),
        teeth     : new RegExp( '^teeth$'                        , 'gi' ),
        geese     : new RegExp( '^geese$'                        , 'gi' ),
        quizzes   : new RegExp( '(quiz)zes$'                     , 'gi' ),
        whereases : new RegExp( '^(whereas)es$'                  , 'gi' ),
        criteria  : new RegExp( '^(criteri)a$'                   , 'gi' ),
        genera    : new RegExp( '^genera$'                       , 'gi' ),
        ss        : new RegExp( 'ss$'                            , 'gi' ),
        s         : new RegExp( 's$'                             , 'gi' )
      },

      singular : {
        man       : new RegExp( '^(m|wom)an$'                  , 'gi' ),
        person    : new RegExp( '(pe)rson$'                    , 'gi' ),
        child     : new RegExp( '(child)$'                     , 'gi' ),
        ox        : new RegExp( '^(ox)$'                       , 'gi' ),
        axis      : new RegExp( '(ax|test)is$'                 , 'gi' ),
        octopus   : new RegExp( '(octop|vir)us$'               , 'gi' ),
        alias     : new RegExp( '(alias|status|canvas|campus)$', 'gi' ),
        summons   : new RegExp( '^(summons)$'                  , 'gi' ),
        bus       : new RegExp( '(bu)s$'                       , 'gi' ),
        buffalo   : new RegExp( '(buffal|tomat|potat)o$'       , 'gi' ),
        tium      : new RegExp( '([ti])um$'                    , 'gi' ),
        sis       : new RegExp( 'sis$'                         , 'gi' ),
        ffe       : new RegExp( '(?:([^f])fe|([lr])f)$'        , 'gi' ),
        hive      : new RegExp( '(hi|ti)ve$'                   , 'gi' ),
        aeiouyy   : new RegExp( '([^aeiouy]|qu)y$'             , 'gi' ),
        x         : new RegExp( '(x|ch|ss|sh)$'                , 'gi' ),
        matrix    : new RegExp( '(matr)ix$'                    , 'gi' ),
        vertex    : new RegExp( '(vert|ind)ex$'                , 'gi' ),
        mouse     : new RegExp( '([m|l])ouse$'                 , 'gi' ),
        foot      : new RegExp( '^foot$'                       , 'gi' ),
        tooth     : new RegExp( '^tooth$'                      , 'gi' ),
        goose     : new RegExp( '^goose$'                      , 'gi' ),
        quiz      : new RegExp( '(quiz)$'                      , 'gi' ),
        whereas   : new RegExp( '^(whereas)$'                  , 'gi' ),
        criterion : new RegExp( '^(criteri)on$'                , 'gi' ),
        genus     : new RegExp( '^genus$'                      , 'gi' ),
        s         : new RegExp( 's$'                           , 'gi' ),
        common    : new RegExp( '$'                            , 'gi' )
      }
    };

    var plural_rules = [

      // do not replace if its already a plural word
      [ regex.plural.men       ],
      [ regex.plural.people    ],
      [ regex.plural.children  ],
      [ regex.plural.tia       ],
      [ regex.plural.analyses  ],
      [ regex.plural.hives     ],
      [ regex.plural.curves    ],
      [ regex.plural.lrves     ],
      [ regex.plural.foves     ],
      [ regex.plural.aeiouyies ],
      [ regex.plural.series    ],
      [ regex.plural.movies    ],
      [ regex.plural.xes       ],
      [ regex.plural.mice      ],
      [ regex.plural.buses     ],
      [ regex.plural.oes       ],
      [ regex.plural.shoes     ],
      [ regex.plural.crises    ],
      [ regex.plural.octopi    ],
      [ regex.plural.aliases   ],
      [ regex.plural.summonses ],
      [ regex.plural.oxen      ],
      [ regex.plural.matrices  ],
      [ regex.plural.feet      ],
      [ regex.plural.teeth     ],
      [ regex.plural.geese     ],
      [ regex.plural.quizzes   ],
      [ regex.plural.whereases ],
      [ regex.plural.criteria  ],
      [ regex.plural.genera    ],

      // original rule
      [ regex.singular.man      , '$1en' ],
      [ regex.singular.person   , '$1ople' ],
      [ regex.singular.child    , '$1ren' ],
      [ regex.singular.ox       , '$1en' ],
      [ regex.singular.axis     , '$1es' ],
      [ regex.singular.octopus  , '$1i' ],
      [ regex.singular.alias    , '$1es' ],
      [ regex.singular.summons  , '$1es' ],
      [ regex.singular.bus      , '$1ses' ],
      [ regex.singular.buffalo  , '$1oes' ],
      [ regex.singular.tium     , '$1a' ],
      [ regex.singular.sis      , 'ses' ],
      [ regex.singular.ffe      , '$1$2ves' ],
      [ regex.singular.hive     , '$1ves' ],
      [ regex.singular.aeiouyy  , '$1ies' ],
      [ regex.singular.matrix   , '$1ices' ],
      [ regex.singular.vertex   , '$1ices' ],
      [ regex.singular.x        , '$1es' ],
      [ regex.singular.mouse    , '$1ice' ],
      [ regex.singular.foot     , 'feet' ],
      [ regex.singular.tooth    , 'teeth' ],
      [ regex.singular.goose    , 'geese' ],
      [ regex.singular.quiz     , '$1zes' ],
      [ regex.singular.whereas  , '$1es' ],
      [ regex.singular.criterion, '$1a' ],
      [ regex.singular.genus    , 'genera' ],

      [ regex.singular.s     , 's' ],
      [ regex.singular.common, 's' ]
    ];

    /**
     * @description These rules translate from the plural form of a noun to its singular form.
     * @private
     */
    var singular_rules = [

      // do not replace if its already a singular word
      [ regex.singular.man     ],
      [ regex.singular.person  ],
      [ regex.singular.child   ],
      [ regex.singular.ox      ],
      [ regex.singular.axis    ],
      [ regex.singular.octopus ],
      [ regex.singular.alias   ],
      [ regex.singular.summons ],
      [ regex.singular.bus     ],
      [ regex.singular.buffalo ],
      [ regex.singular.tium    ],
      [ regex.singular.sis     ],
      [ regex.singular.ffe     ],
      [ regex.singular.hive    ],
      [ regex.singular.aeiouyy ],
      [ regex.singular.x       ],
      [ regex.singular.matrix  ],
      [ regex.singular.mouse   ],
      [ regex.singular.foot    ],
      [ regex.singular.tooth   ],
      [ regex.singular.goose   ],
      [ regex.singular.quiz    ],
      [ regex.singular.whereas ],
      [ regex.singular.criterion ],
      [ regex.singular.genus ],

      // original rule
      [ regex.plural.men      , '$1an' ],
      [ regex.plural.people   , '$1rson' ],
      [ regex.plural.children , '$1' ],
      [ regex.plural.genera   , 'genus'],
      [ regex.plural.criteria , '$1on'],
      [ regex.plural.tia      , '$1um' ],
      [ regex.plural.analyses , '$1$2sis' ],
      [ regex.plural.hives    , '$1ve' ],
      [ regex.plural.curves   , '$1' ],
      [ regex.plural.lrves    , '$1f' ],
      [ regex.plural.aves     , '$1ve' ],
      [ regex.plural.foves    , '$1fe' ],
      [ regex.plural.movies   , '$1ovie' ],
      [ regex.plural.aeiouyies, '$1y' ],
      [ regex.plural.series   , '$1eries' ],
      [ regex.plural.xes      , '$1' ],
      [ regex.plural.mice     , '$1ouse' ],
      [ regex.plural.buses    , '$1' ],
      [ regex.plural.oes      , '$1' ],
      [ regex.plural.shoes    , '$1' ],
      [ regex.plural.crises   , '$1is' ],
      [ regex.plural.octopi   , '$1us' ],
      [ regex.plural.aliases  , '$1' ],
      [ regex.plural.summonses, '$1' ],
      [ regex.plural.oxen     , '$1' ],
      [ regex.plural.matrices , '$1ix' ],
      [ regex.plural.vertices , '$1ex' ],
      [ regex.plural.feet     , 'foot' ],
      [ regex.plural.teeth    , 'tooth' ],
      [ regex.plural.geese    , 'goose' ],
      [ regex.plural.quizzes  , '$1' ],
      [ regex.plural.whereases, '$1' ],

      [ regex.plural.ss, 'ss' ],
      [ regex.plural.s , '' ]
    ];

    /**
     * @description This is a list of words that should not be capitalized for title case.
     * @private
     */
    var non_titlecased_words = [
      'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at','by',
      'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over', 'with', 'for'
    ];

    /**
     * @description These are regular expressions used for converting between String formats.
     * @private
     */
    var id_suffix         = new RegExp( '(_ids|_id)$', 'g' );
    var underbar          = new RegExp( '_', 'g' );
    var space_or_underbar = new RegExp( '[\ _]', 'g' );
    var uppercase         = new RegExp( '([A-Z])', 'g' );
    var underbar_prefix   = new RegExp( '^_' );

    var inflector = {

    /**
     * A helper method that applies rules based replacement to a String.
     * @private
     * @function
     * @param {String} str String to modify and return based on the passed rules.
     * @param {Array: [RegExp, String]} rules Regexp to match paired with String to use for replacement
     * @param {Array: [String]} skip Strings to skip if they match
     * @param {String} override String to return as though this method succeeded (used to conform to APIs)
     * @returns {String} Return passed String modified by passed rules.
     * @example
     *
     *     this._apply_rules( 'cows', singular_rules ); // === 'cow'
     */
      _apply_rules : function ( str, rules, skip, override ){
        if( override ){
          str = override;
        }else{
          var ignore = ( inflector.indexOf( skip, str.toLowerCase()) > -1 );

          if( !ignore ){
            var i = 0;
            var j = rules.length;

            for( ; i < j; i++ ){
              if( str.match( rules[ i ][ 0 ])){
                if( rules[ i ][ 1 ] !== undefined ){
                  str = str.replace( rules[ i ][ 0 ], rules[ i ][ 1 ]);
                }
                break;
              }
            }
          }
        }

        return str;
      },



    /**
     * This lets us detect if an Array contains a given element.
     * @public
     * @function
     * @param {Array} arr The subject array.
     * @param {Object} item Object to locate in the Array.
     * @param {Number} from_index Starts checking from this position in the Array.(optional)
     * @param {Function} compare_func Function used to compare Array item vs passed item.(optional)
     * @returns {Number} Return index position in the Array of the passed item.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.indexOf([ 'hi','there' ], 'guys' ); // === -1
     *     inflection.indexOf([ 'hi','there' ], 'hi' ); // === 0
     */
      indexOf : function ( arr, item, from_index, compare_func ){
        if( !from_index ){
          from_index = -1;
        }

        var index = -1;
        var i     = from_index;
        var j     = arr.length;

        for( ; i < j; i++ ){
          if( arr[ i ]  === item || compare_func && compare_func( arr[ i ], item )){
            index = i;
            break;
          }
        }

        return index;
      },



    /**
     * This function adds pluralization support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {String} plural Overrides normal output with said String.(optional)
     * @returns {String} Singular English language nouns are returned in plural form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.pluralize( 'person' ); // === 'people'
     *     inflection.pluralize( 'octopus' ); // === 'octopi'
     *     inflection.pluralize( 'Hat' ); // === 'Hats'
     *     inflection.pluralize( 'person', 'guys' ); // === 'guys'
     */
      pluralize : function ( str, plural ){
        return inflector._apply_rules( str, plural_rules, uncountable_words, plural );
      },



    /**
     * This function adds singularization support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {String} singular Overrides normal output with said String.(optional)
     * @returns {String} Plural English language nouns are returned in singular form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.singularize( 'people' ); // === 'person'
     *     inflection.singularize( 'octopi' ); // === 'octopus'
     *     inflection.singularize( 'Hats' ); // === 'Hat'
     *     inflection.singularize( 'guys', 'person' ); // === 'person'
     */
      singularize : function ( str, singular ){
        return inflector._apply_rules( str, singular_rules, uncountable_words, singular );
      },


    /**
     * This function will pluralize or singularlize a String appropriately based on an integer value
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Number} count The number to base pluralization off of.
     * @param {String} singular Overrides normal output with said String.(optional)
     * @param {String} plural Overrides normal output with said String.(optional)
     * @returns {String} English language nouns are returned in the plural or singular form based on the count.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.inflect( 'people' 1 ); // === 'person'
     *     inflection.inflect( 'octopi' 1 ); // === 'octopus'
     *     inflection.inflect( 'Hats' 1 ); // === 'Hat'
     *     inflection.inflect( 'guys', 1 , 'person' ); // === 'person'
     *     inflection.inflect( 'person', 2 ); // === 'people'
     *     inflection.inflect( 'octopus', 2 ); // === 'octopi'
     *     inflection.inflect( 'Hat', 2 ); // === 'Hats'
     *     inflection.inflect( 'person', 2, null, 'guys' ); // === 'guys'
     */
      inflect : function ( str, count, singular, plural ){
        count = parseInt( count, 10 );

        if( isNaN( count )) return str;

        if( count === 0 || count > 1 ){
          return inflector._apply_rules( str, plural_rules, uncountable_words, plural );
        }else{
          return inflector._apply_rules( str, singular_rules, uncountable_words, singular );
        }
      },



    /**
     * This function adds camelization support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
     *                                 Passing true will lowercase it.
     * @returns {String} Lower case underscored words will be returned in camel case.
     *                  additionally '/' is translated to '::'
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.camelize( 'message_properties' ); // === 'MessageProperties'
     *     inflection.camelize( 'message_properties', true ); // === 'messageProperties'
     */
      camelize : function ( str, low_first_letter ){
        var str_path = str.split( '/' );
        var i        = 0;
        var j        = str_path.length;
        var str_arr, k, l, first;

        for( ; i < j; i++ ){
          str_arr = str_path[ i ].split( '_' );
          k       = 0;
          l       = str_arr.length;

          for( ; k < l; k++ ){
            if( k !== 0 ){
              str_arr[ k ] = str_arr[ k ].toLowerCase();
            }

            first = str_arr[ k ].charAt( 0 );
            first = low_first_letter && i === 0 && k === 0
              ? first.toLowerCase() : first.toUpperCase();
            str_arr[ k ] = first + str_arr[ k ].substring( 1 );
          }

          str_path[ i ] = str_arr.join( '' );
        }

        return str_path.join( '::' );
      },



    /**
     * This function adds underscore support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Boolean} all_upper_case Default is to lowercase and add underscore prefix.(optional)
     *                  Passing true will return as entered.
     * @returns {String} Camel cased words are returned as lower cased and underscored.
     *                  additionally '::' is translated to '/'.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.underscore( 'MessageProperties' ); // === 'message_properties'
     *     inflection.underscore( 'messageProperties' ); // === 'message_properties'
     *     inflection.underscore( 'MP', true ); // === 'MP'
     */
      underscore : function ( str, all_upper_case ){
        if( all_upper_case && str === str.toUpperCase()) return str;

        var str_path = str.split( '::' );
        var i        = 0;
        var j        = str_path.length;

        for( ; i < j; i++ ){
          str_path[ i ] = str_path[ i ].replace( uppercase, '_$1' );
          str_path[ i ] = str_path[ i ].replace( underbar_prefix, '' );
        }

        return str_path.join( '/' ).toLowerCase();
      },



    /**
     * This function adds humanize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
     *                                 Passing true will lowercase it.
     * @returns {String} Lower case underscored words will be returned in humanized form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.humanize( 'message_properties' ); // === 'Message properties'
     *     inflection.humanize( 'message_properties', true ); // === 'message properties'
     */
      humanize : function ( str, low_first_letter ){
        str = str.toLowerCase();
        str = str.replace( id_suffix, '' );
        str = str.replace( underbar, ' ' );

        if( !low_first_letter ){
          str = inflector.capitalize( str );
        }

        return str;
      },



    /**
     * This function adds capitalization support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} All characters will be lower case and the first will be upper.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.capitalize( 'message_properties' ); // === 'Message_properties'
     *     inflection.capitalize( 'message properties', true ); // === 'Message properties'
     */
      capitalize : function ( str ){
        str = str.toLowerCase();

        return str.substring( 0, 1 ).toUpperCase() + str.substring( 1 );
      },



    /**
     * This function replaces underscores with dashes in the string.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Replaces all spaces or underscores with dashes.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.dasherize( 'message_properties' ); // === 'message-properties'
     *     inflection.dasherize( 'Message Properties' ); // === 'Message-Properties'
     */
      dasherize : function ( str ){
        return str.replace( space_or_underbar, '-' );
      },



    /**
     * This function adds titleize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Capitalizes words as you would for a book title.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.titleize( 'message_properties' ); // === 'Message Properties'
     *     inflection.titleize( 'message properties to keep' ); // === 'Message Properties to Keep'
     */
      titleize : function ( str ){
        str         = str.toLowerCase().replace( underbar, ' ' );
        var str_arr = str.split( ' ' );
        var i       = 0;
        var j       = str_arr.length;
        var d, k, l;

        for( ; i < j; i++ ){
          d = str_arr[ i ].split( '-' );
          k = 0;
          l = d.length;

          for( ; k < l; k++){
            if( inflector.indexOf( non_titlecased_words, d[ k ].toLowerCase()) < 0 ){
              d[ k ] = inflector.capitalize( d[ k ]);
            }
          }

          str_arr[ i ] = d.join( '-' );
        }

        str = str_arr.join( ' ' );
        str = str.substring( 0, 1 ).toUpperCase() + str.substring( 1 );

        return str;
      },



    /**
     * This function adds demodulize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Removes module names leaving only class names.(Ruby style)
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.demodulize( 'Message::Bus::Properties' ); // === 'Properties'
     */
      demodulize : function ( str ){
        var str_arr = str.split( '::' );

        return str_arr[ str_arr.length - 1 ];
      },



    /**
     * This function adds tableize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Return camel cased words into their underscored plural form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.tableize( 'MessageBusProperty' ); // === 'message_bus_properties'
     */
      tableize : function ( str ){
        str = inflector.underscore( str );
        str = inflector.pluralize( str );

        return str;
      },



    /**
     * This function adds classification support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Underscored plural nouns become the camel cased singular form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.classify( 'message_bus_properties' ); // === 'MessageBusProperty'
     */
      classify : function ( str ){
        str = inflector.camelize( str );
        str = inflector.singularize( str );

        return str;
      },



    /**
     * This function adds foreign key support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Boolean} drop_id_ubar Default is to seperate id with an underbar at the end of the class name,
                                   you can pass true to skip it.(optional)
     * @returns {String} Underscored plural nouns become the camel cased singular form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.foreign_key( 'MessageBusProperty' ); // === 'message_bus_property_id'
     *     inflection.foreign_key( 'MessageBusProperty', true ); // === 'message_bus_propertyid'
     */
      foreign_key : function ( str, drop_id_ubar ){
        str = inflector.demodulize( str );
        str = inflector.underscore( str ) + (( drop_id_ubar ) ? ( '' ) : ( '_' )) + 'id';

        return str;
      },



    /**
     * This function adds ordinalize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Return all found numbers their sequence like '22nd'.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.ordinalize( 'the 1 pitch' ); // === 'the 1st pitch'
     */
      ordinalize : function ( str ){
        var str_arr = str.split( ' ' );
        var i       = 0;
        var j       = str_arr.length;

        for( ; i < j; i++ ){
          var k = parseInt( str_arr[ i ], 10 );

          if( !isNaN( k )){
            var ltd = str_arr[ i ].substring( str_arr[ i ].length - 2 );
            var ld  = str_arr[ i ].substring( str_arr[ i ].length - 1 );
            var suf = 'th';

            if( ltd != '11' && ltd != '12' && ltd != '13' ){
              if( ld === '1' ){
                suf = 'st';
              }else if( ld === '2' ){
                suf = 'nd';
              }else if( ld === '3' ){
                suf = 'rd';
              }
            }

            str_arr[ i ] += suf;
          }
        }

        return str_arr.join( ' ' );
      },

    /**
     * This function performs multiple inflection methods on a string
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Array} arr An array of inflection methods.
     * @returns {String}
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.transform( 'all job', [ 'pluralize', 'capitalize', 'dasherize' ]); // === 'All-jobs'
     */
      transform : function ( str, arr ){
        var i = 0;
        var j = arr.length;

        for( ;i < j; i++ ){
          var method = arr[ i ];

          if( inflector.hasOwnProperty( method )){
            str = inflector[ method ]( str );
          }
        }

        return str;
      }
    };

  /**
   * @public
   */
    inflector.version = '1.12.0';

    return inflector;
  }));
  });

  var strictUriEncode = function (str) {
  	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
  		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  	});
  };

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty$1.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  function encoderForArrayFormat(opts) {
  	switch (opts.arrayFormat) {
  		case 'index':
  			return function (key, value, index) {
  				return value === null ? [
  					encode(key, opts),
  					'[',
  					index,
  					']'
  				].join('') : [
  					encode(key, opts),
  					'[',
  					encode(index, opts),
  					']=',
  					encode(value, opts)
  				].join('');
  			};

  		case 'bracket':
  			return function (key, value) {
  				return value === null ? encode(key, opts) : [
  					encode(key, opts),
  					'[]=',
  					encode(value, opts)
  				].join('');
  			};

  		default:
  			return function (key, value) {
  				return value === null ? encode(key, opts) : [
  					encode(key, opts),
  					'=',
  					encode(value, opts)
  				].join('');
  			};
  	}
  }

  function parserForArrayFormat(opts) {
  	var result;

  	switch (opts.arrayFormat) {
  		case 'index':
  			return function (key, value, accumulator) {
  				result = /\[(\d*)\]$/.exec(key);

  				key = key.replace(/\[\d*\]$/, '');

  				if (!result) {
  					accumulator[key] = value;
  					return;
  				}

  				if (accumulator[key] === undefined) {
  					accumulator[key] = {};
  				}

  				accumulator[key][result[1]] = value;
  			};

  		case 'bracket':
  			return function (key, value, accumulator) {
  				result = /(\[\])$/.exec(key);
  				key = key.replace(/\[\]$/, '');

  				if (!result) {
  					accumulator[key] = value;
  					return;
  				} else if (accumulator[key] === undefined) {
  					accumulator[key] = [value];
  					return;
  				}

  				accumulator[key] = [].concat(accumulator[key], value);
  			};

  		default:
  			return function (key, value, accumulator) {
  				if (accumulator[key] === undefined) {
  					accumulator[key] = value;
  					return;
  				}

  				accumulator[key] = [].concat(accumulator[key], value);
  			};
  	}
  }

  function encode(value, opts) {
  	if (opts.encode) {
  		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
  	}

  	return value;
  }

  function keysSorter(input) {
  	if (Array.isArray(input)) {
  		return input.sort();
  	} else if (typeof input === 'object') {
  		return keysSorter(Object.keys(input)).sort(function (a, b) {
  			return Number(a) - Number(b);
  		}).map(function (key) {
  			return input[key];
  		});
  	}

  	return input;
  }

  var extract = function (str) {
  	return str.split('?')[1] || '';
  };

  var parse = function (str, opts) {
  	opts = objectAssign({arrayFormat: 'none'}, opts);

  	var formatter = parserForArrayFormat(opts);

  	// Create an object with no prototype
  	// https://github.com/sindresorhus/query-string/issues/47
  	var ret = Object.create(null);

  	if (typeof str !== 'string') {
  		return ret;
  	}

  	str = str.trim().replace(/^(\?|#|&)/, '');

  	if (!str) {
  		return ret;
  	}

  	str.split('&').forEach(function (param) {
  		var parts = param.replace(/\+/g, ' ').split('=');
  		// Firefox (pre 40) decodes `%3D` to `=`
  		// https://github.com/sindresorhus/query-string/pull/37
  		var key = parts.shift();
  		var val = parts.length > 0 ? parts.join('=') : undefined;

  		// missing `=` should be `null`:
  		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
  		val = val === undefined ? null : decodeURIComponent(val);

  		formatter(decodeURIComponent(key), val, ret);
  	});

  	return Object.keys(ret).sort().reduce(function (result, key) {
  		var val = ret[key];
  		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
  			// Sort object keys, not values
  			result[key] = keysSorter(val);
  		} else {
  			result[key] = val;
  		}

  		return result;
  	}, Object.create(null));
  };

  var stringify = function (obj, opts) {
  	var defaults = {
  		encode: true,
  		strict: true,
  		arrayFormat: 'none'
  	};

  	opts = objectAssign(defaults, opts);

  	var formatter = encoderForArrayFormat(opts);

  	return obj ? Object.keys(obj).sort().map(function (key) {
  		var val = obj[key];

  		if (val === undefined) {
  			return '';
  		}

  		if (val === null) {
  			return encode(key, opts);
  		}

  		if (Array.isArray(val)) {
  			var result = [];

  			val.slice().forEach(function (val2) {
  				if (val2 === undefined) {
  					return;
  				}

  				result.push(formatter(key, val2, result.length));
  			});

  			return result.join('&');
  		}

  		return encode(key, opts) + '=' + encode(val, opts);
  	}).filter(function (x) {
  		return x.length > 0;
  	}).join('&') : '';
  };

  var queryString = {
  	extract: extract,
  	parse: parse,
  	stringify: stringify
  };

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var __DEV__ = process.env.NODE_ENV !== 'production';

  var warning = function() {};

  if (__DEV__) {
    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
        );
      }

      if (format.length < 10 || (/^[s\W]*$/).test(format)) {
        throw new Error(
          'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' + format
        );
      }

      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch(x) {}
      }
    };
  }

  var warning_1 = warning;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var NODE_ENV = process.env.NODE_ENV;

  var invariant = function(condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  var invariant_1 = invariant;

  function isAbsolute(pathname) {
    return pathname.charAt(0) === '/';
  }

  // About 1.5x faster than the two-arg version of Array#splice()
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
      list[i] = list[k];
    }

    list.pop();
  }

  // This implementation is based heavily on node's url.parse
  function resolvePathname(to) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var toParts = to && to.split('/') || [];
    var fromParts = from && from.split('/') || [];

    var isToAbs = to && isAbsolute(to);
    var isFromAbs = from && isAbsolute(from);
    var mustEndAbs = isToAbs || isFromAbs;

    if (to && isAbsolute(to)) {
      // to is absolute
      fromParts = toParts;
    } else if (toParts.length) {
      // to is relative, drop the filename
      fromParts.pop();
      fromParts = fromParts.concat(toParts);
    }

    if (!fromParts.length) return '/';

    var hasTrailingSlash = void 0;
    if (fromParts.length) {
      var last = fromParts[fromParts.length - 1];
      hasTrailingSlash = last === '.' || last === '..' || last === '';
    } else {
      hasTrailingSlash = false;
    }

    var up = 0;
    for (var i = fromParts.length; i >= 0; i--) {
      var part = fromParts[i];

      if (part === '.') {
        spliceOne(fromParts, i);
      } else if (part === '..') {
        spliceOne(fromParts, i);
        up++;
      } else if (up) {
        spliceOne(fromParts, i);
        up--;
      }
    }

    if (!mustEndAbs) for (; up--; up) {
      fromParts.unshift('..');
    }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

    var result = fromParts.join('/');

    if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

    return result;
  }

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function valueEqual(a, b) {
    if (a === b) return true;

    if (a == null || b == null) return false;

    if (Array.isArray(a)) {
      return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
        return valueEqual(item, b[index]);
      });
    }

    var aType = typeof a === 'undefined' ? 'undefined' : _typeof$1(a);
    var bType = typeof b === 'undefined' ? 'undefined' : _typeof$1(b);

    if (aType !== bType) return false;

    if (aType === 'object') {
      var aValue = a.valueOf();
      var bValue = b.valueOf();

      if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);

      if (aKeys.length !== bKeys.length) return false;

      return aKeys.every(function (key) {
        return valueEqual(a[key], b[key]);
      });
    }

    return false;
  }

  var addLeadingSlash = function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
  };

  var stripLeadingSlash = function stripLeadingSlash(path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
  };

  var hasBasename = function hasBasename(path, prefix) {
    return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
  };

  var stripBasename = function stripBasename(path, prefix) {
    return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
  };

  var stripTrailingSlash = function stripTrailingSlash(path) {
    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  };

  var parsePath = function parsePath(path) {
    var pathname = path || '/';
    var search = '';
    var hash = '';

    var hashIndex = pathname.indexOf('#');
    if (hashIndex !== -1) {
      hash = pathname.substr(hashIndex);
      pathname = pathname.substr(0, hashIndex);
    }

    var searchIndex = pathname.indexOf('?');
    if (searchIndex !== -1) {
      search = pathname.substr(searchIndex);
      pathname = pathname.substr(0, searchIndex);
    }

    return {
      pathname: pathname,
      search: search === '?' ? '' : search,
      hash: hash === '#' ? '' : hash
    };
  };

  var createPath = function createPath(location) {
    var pathname = location.pathname,
        search = location.search,
        hash = location.hash;


    var path = pathname || '/';

    if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

    if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

    return path;
  };

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var createLocation = function createLocation(path, state, key, currentLocation) {
    var location = void 0;
    if (typeof path === 'string') {
      // Two-arg form: push(path, state)
      location = parsePath(path);
      location.state = state;
    } else {
      // One-arg form: push(location)
      location = _extends$1({}, path);

      if (location.pathname === undefined) location.pathname = '';

      if (location.search) {
        if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
      } else {
        location.search = '';
      }

      if (location.hash) {
        if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
      } else {
        location.hash = '';
      }

      if (state !== undefined && location.state === undefined) location.state = state;
    }

    try {
      location.pathname = decodeURI(location.pathname);
    } catch (e) {
      if (e instanceof URIError) {
        throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
      } else {
        throw e;
      }
    }

    if (key) location.key = key;

    if (currentLocation) {
      // Resolve incomplete/relative pathname relative to current location.
      if (!location.pathname) {
        location.pathname = currentLocation.pathname;
      } else if (location.pathname.charAt(0) !== '/') {
        location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
      }
    } else {
      // When there is no prior location and pathname is empty, set it to /
      if (!location.pathname) {
        location.pathname = '/';
      }
    }

    return location;
  };

  var locationsAreEqual = function locationsAreEqual(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
  };

  var createTransitionManager = function createTransitionManager() {
    var prompt = null;

    var setPrompt = function setPrompt(nextPrompt) {
      warning_1(prompt == null, 'A history supports only one prompt at a time');

      prompt = nextPrompt;

      return function () {
        if (prompt === nextPrompt) prompt = null;
      };
    };

    var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
      // TODO: If another transition starts while we're still confirming
      // the previous one, we may end up in a weird state. Figure out the
      // best way to handle this.
      if (prompt != null) {
        var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

        if (typeof result === 'string') {
          if (typeof getUserConfirmation === 'function') {
            getUserConfirmation(result, callback);
          } else {
            warning_1(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

            callback(true);
          }
        } else {
          // Return false from a transition hook to cancel the transition.
          callback(result !== false);
        }
      } else {
        callback(true);
      }
    };

    var listeners = [];

    var appendListener = function appendListener(fn) {
      var isActive = true;

      var listener = function listener() {
        if (isActive) fn.apply(undefined, arguments);
      };

      listeners.push(listener);

      return function () {
        isActive = false;
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    };

    var notifyListeners = function notifyListeners() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      listeners.forEach(function (listener) {
        return listener.apply(undefined, args);
      });
    };

    return {
      setPrompt: setPrompt,
      confirmTransitionTo: confirmTransitionTo,
      appendListener: appendListener,
      notifyListeners: notifyListeners
    };
  };

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  var addEventListener = function addEventListener(node, event, listener) {
    return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
  };

  var removeEventListener = function removeEventListener(node, event, listener) {
    return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
  };

  var getConfirmation = function getConfirmation(message, callback) {
    return callback(window.confirm(message));
  }; // eslint-disable-line no-alert

  /**
   * Returns true if the HTML5 history API is supported. Taken from Modernizr.
   *
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
   */
  var supportsHistory = function supportsHistory() {
    var ua = window.navigator.userAgent;

    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

    return window.history && 'pushState' in window.history;
  };

  /**
   * Returns true if browser fires popstate on hash change.
   * IE10 and IE11 do not.
   */
  var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
    return window.navigator.userAgent.indexOf('Trident') === -1;
  };

  /**
   * Returns false if using go(n) with hash history causes a full page reload.
   */
  var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
    return window.navigator.userAgent.indexOf('Firefox') === -1;
  };

  /**
   * Returns true if a given popstate event is an extraneous WebKit event.
   * Accounts for the fact that Chrome on iOS fires real popstate events
   * containing undefined state when pressing the back button.
   */
  var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
    return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
  };

  var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var PopStateEvent = 'popstate';
  var HashChangeEvent = 'hashchange';

  var getHistoryState = function getHistoryState() {
    try {
      return window.history.state || {};
    } catch (e) {
      // IE 11 sometimes throws when accessing window.history.state
      // See https://github.com/ReactTraining/history/pull/289
      return {};
    }
  };

  /**
   * Creates a history object that uses the HTML5 history API including
   * pushState, replaceState, and the popstate event.
   */
  var createBrowserHistory = function createBrowserHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    invariant_1(canUseDOM, 'Browser history needs a DOM');

    var globalHistory = window.history;
    var canUseHistory = supportsHistory();
    var needsHashChangeListener = !supportsPopStateOnHashChange();

    var _props$forceRefresh = props.forceRefresh,
        forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
        _props$getUserConfirm = props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
        _props$keyLength = props.keyLength,
        keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

    var getDOMLocation = function getDOMLocation(historyState) {
      var _ref = historyState || {},
          key = _ref.key,
          state = _ref.state;

      var _window$location = window.location,
          pathname = _window$location.pathname,
          search = _window$location.search,
          hash = _window$location.hash;


      var path = pathname + search + hash;

      warning_1(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

      if (basename) path = stripBasename(path, basename);

      return createLocation(path, state, key);
    };

    var createKey = function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    };

    var transitionManager = createTransitionManager();

    var setState = function setState(nextState) {
      _extends$2(history, nextState);

      history.length = globalHistory.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var handlePopState = function handlePopState(event) {
      // Ignore extraneous popstate events in WebKit.
      if (isExtraneousPopstateEvent(event)) return;

      handlePop(getDOMLocation(event.state));
    };

    var handleHashChange = function handleHashChange() {
      handlePop(getDOMLocation(getHistoryState()));
    };

    var forceNextPop = false;

    var handlePop = function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      }
    };

    var revertPop = function revertPop(fromLocation) {
      var toLocation = history.location;

      // TODO: We could probably make this more reliable by
      // keeping a list of keys we've seen in sessionStorage.
      // Instead, we just default to 0 for keys we don't know.

      var toIndex = allKeys.indexOf(toLocation.key);

      if (toIndex === -1) toIndex = 0;

      var fromIndex = allKeys.indexOf(fromLocation.key);

      if (fromIndex === -1) fromIndex = 0;

      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    };

    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key];

    // Public interface

    var createHref = function createHref(location) {
      return basename + createPath(location);
    };

    var push = function push(path, state) {
      warning_1(!((typeof path === 'undefined' ? 'undefined' : _typeof$2(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var href = createHref(location);
        var key = location.key,
            state = location.state;


        if (canUseHistory) {
          globalHistory.pushState({ key: key, state: state }, null, href);

          if (forceRefresh) {
            window.location.href = href;
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

            nextKeys.push(location.key);
            allKeys = nextKeys;

            setState({ action: action, location: location });
          }
        } else {
          warning_1(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

          window.location.href = href;
        }
      });
    };

    var replace = function replace(path, state) {
      warning_1(!((typeof path === 'undefined' ? 'undefined' : _typeof$2(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var href = createHref(location);
        var key = location.key,
            state = location.state;


        if (canUseHistory) {
          globalHistory.replaceState({ key: key, state: state }, null, href);

          if (forceRefresh) {
            window.location.replace(href);
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);

            if (prevIndex !== -1) allKeys[prevIndex] = location.key;

            setState({ action: action, location: location });
          }
        } else {
          warning_1(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

          window.location.replace(href);
        }
      });
    };

    var go = function go(n) {
      globalHistory.go(n);
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var listenerCount = 0;

    var checkDOMListeners = function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1) {
        addEventListener(window, PopStateEvent, handlePopState);

        if (needsHashChangeListener) addEventListener(window, HashChangeEvent, handleHashChange);
      } else if (listenerCount === 0) {
        removeEventListener(window, PopStateEvent, handlePopState);

        if (needsHashChangeListener) removeEventListener(window, HashChangeEvent, handleHashChange);
      }
    };

    var isBlocked = false;

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    };

    var listen = function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);

      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    };

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };

    return history;
  };

  var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var HashChangeEvent$1 = 'hashchange';

  var HashPathCoders = {
    hashbang: {
      encodePath: function encodePath(path) {
        return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
      },
      decodePath: function decodePath(path) {
        return path.charAt(0) === '!' ? path.substr(1) : path;
      }
    },
    noslash: {
      encodePath: stripLeadingSlash,
      decodePath: addLeadingSlash
    },
    slash: {
      encodePath: addLeadingSlash,
      decodePath: addLeadingSlash
    }
  };

  var getHashPath = function getHashPath() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    var href = window.location.href;
    var hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
  };

  var pushHashPath = function pushHashPath(path) {
    return window.location.hash = path;
  };

  var replaceHashPath = function replaceHashPath(path) {
    var hashIndex = window.location.href.indexOf('#');

    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
  };

  var createHashHistory = function createHashHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    invariant_1(canUseDOM, 'Hash history needs a DOM');

    var globalHistory = window.history;
    var canGoWithoutReload = supportsGoWithoutReloadUsingHash();

    var _props$getUserConfirm = props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
        _props$hashType = props.hashType,
        hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

    var _HashPathCoders$hashT = HashPathCoders[hashType],
        encodePath = _HashPathCoders$hashT.encodePath,
        decodePath = _HashPathCoders$hashT.decodePath;


    var getDOMLocation = function getDOMLocation() {
      var path = decodePath(getHashPath());

      warning_1(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

      if (basename) path = stripBasename(path, basename);

      return createLocation(path);
    };

    var transitionManager = createTransitionManager();

    var setState = function setState(nextState) {
      _extends$3(history, nextState);

      history.length = globalHistory.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var forceNextPop = false;
    var ignorePath = null;

    var handleHashChange = function handleHashChange() {
      var path = getHashPath();
      var encodedPath = encodePath(path);

      if (path !== encodedPath) {
        // Ensure we always have a properly-encoded hash.
        replaceHashPath(encodedPath);
      } else {
        var location = getDOMLocation();
        var prevLocation = history.location;

        if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

        if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

        ignorePath = null;

        handlePop(location);
      }
    };

    var handlePop = function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      }
    };

    var revertPop = function revertPop(fromLocation) {
      var toLocation = history.location;

      // TODO: We could probably make this more reliable by
      // keeping a list of paths we've seen in sessionStorage.
      // Instead, we just default to 0 for paths we don't know.

      var toIndex = allPaths.lastIndexOf(createPath(toLocation));

      if (toIndex === -1) toIndex = 0;

      var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));

      if (fromIndex === -1) fromIndex = 0;

      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    };

    // Ensure the hash is encoded properly before doing anything else.
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) replaceHashPath(encodedPath);

    var initialLocation = getDOMLocation();
    var allPaths = [createPath(initialLocation)];

    // Public interface

    var createHref = function createHref(location) {
      return '#' + encodePath(basename + createPath(location));
    };

    var push = function push(path, state) {
      warning_1(state === undefined, 'Hash history cannot push state; it is ignored');

      var action = 'PUSH';
      var location = createLocation(path, undefined, undefined, history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a PUSH, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          pushHashPath(encodedPath);

          var prevIndex = allPaths.lastIndexOf(createPath(history.location));
          var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextPaths.push(path);
          allPaths = nextPaths;

          setState({ action: action, location: location });
        } else {
          warning_1(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

          setState();
        }
      });
    };

    var replace = function replace(path, state) {
      warning_1(state === undefined, 'Hash history cannot replace state; it is ignored');

      var action = 'REPLACE';
      var location = createLocation(path, undefined, undefined, history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a REPLACE, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          replaceHashPath(encodedPath);
        }

        var prevIndex = allPaths.indexOf(createPath(history.location));

        if (prevIndex !== -1) allPaths[prevIndex] = path;

        setState({ action: action, location: location });
      });
    };

    var go = function go(n) {
      warning_1(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

      globalHistory.go(n);
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var listenerCount = 0;

    var checkDOMListeners = function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1) {
        addEventListener(window, HashChangeEvent$1, handleHashChange);
      } else if (listenerCount === 0) {
        removeEventListener(window, HashChangeEvent$1, handleHashChange);
      }
    };

    var isBlocked = false;

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    };

    var listen = function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);

      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    };

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };

    return history;
  };

  var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var clamp = function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
  };

  /**
   * Creates a history object that stores locations in memory.
   */
  var createMemoryHistory = function createMemoryHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var getUserConfirmation = props.getUserConfirmation,
        _props$initialEntries = props.initialEntries,
        initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
        _props$initialIndex = props.initialIndex,
        initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
        _props$keyLength = props.keyLength,
        keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


    var transitionManager = createTransitionManager();

    var setState = function setState(nextState) {
      _extends$4(history, nextState);

      history.length = history.entries.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var createKey = function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    };

    var index = clamp(initialIndex, 0, initialEntries.length - 1);
    var entries = initialEntries.map(function (entry) {
      return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
    });

    // Public interface

    var createHref = createPath;

    var push = function push(path, state) {
      warning_1(!((typeof path === 'undefined' ? 'undefined' : _typeof$3(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var prevIndex = history.index;
        var nextIndex = prevIndex + 1;

        var nextEntries = history.entries.slice(0);
        if (nextEntries.length > nextIndex) {
          nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
        } else {
          nextEntries.push(location);
        }

        setState({
          action: action,
          location: location,
          index: nextIndex,
          entries: nextEntries
        });
      });
    };

    var replace = function replace(path, state) {
      warning_1(!((typeof path === 'undefined' ? 'undefined' : _typeof$3(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        history.entries[history.index] = location;

        setState({ action: action, location: location });
      });
    };

    var go = function go(n) {
      var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

      var action = 'POP';
      var location = history.entries[nextIndex];

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location,
            index: nextIndex
          });
        } else {
          // Mimic the behavior of DOM histories by
          // causing a render after a cancelled POP.
          setState();
        }
      });
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var canGo = function canGo(n) {
      var nextIndex = history.index + n;
      return nextIndex >= 0 && nextIndex < history.entries.length;
    };

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return transitionManager.setPrompt(prompt);
    };

    var listen = function listen(listener) {
      return transitionManager.appendListener(listener);
    };

    var history = {
      length: entries.length,
      action: 'POP',
      location: entries[index],
      index: index,
      entries: entries,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      canGo: canGo,
      block: block,
      listen: listen
    };

    return history;
  };

  var promiseCount = 0;
  var objectCount = 0;
  /**
   * @module Core
   */

  var Obj =
  /*#__PURE__*/
  function () {
    /**
     * Basic object that can trigger events
     *
     * @class Core.Obj
     * @constructor
     */
    function Obj() {
      _classCallCheck(this, Obj);

      // Init values
      this._listeners = new Map();
      this._promises = new Map();
      this.__chickenUid_Obj = "**Obj".concat(++objectCount, "**");
    }

    _createClass(Obj, [{
      key: "__getUid",
      value: function __getUid() {
        return this.__chickenUid_Obj;
      } ////////////////////
      // Public methods //
      ////////////////////

    }, {
      key: "promise",
      value: function promise(key, callback) {
        // Do the callback
        var promise = this._getPromiseInfo(key);

        callback.apply(null, [promise.resolve, promise.reject]);
        return promise.promise;
      }
    }, {
      key: "resolvePromise",
      value: function resolvePromise(key) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        this._getPromiseInfo(key).resolve.apply(this, args);

        return this;
      }
    }, {
      key: "rejectPromise",
      value: function rejectPromise(key) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        this._getPromiseInfo(key).reject.apply(this, args);

        return this;
      }
    }, {
      key: "getPromise",
      value: function getPromise(key) {
        return this._getPromiseInfo(key).promise;
      }
    }, {
      key: "resetPromise",
      value: function resetPromise(key) {
        this._promises.delete(key);
      }
    }, {
      key: "_getPromiseInfo",
      value: function _getPromiseInfo(key) {
        // Was the promise already defined
        if (!this._promises.has(key)) {
          // Store it
          var p = {};
          p.promise = new Promise(function (resolve, reject) {
            p.resolve = resolve;
            p.reject = reject;
            p.id = promiseCount++;
          });

          this._promises.set(key, p);
        }

        return this._promises.get(key);
      }
    }, {
      key: "when",
      value: function when() {
        var _this = this;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        // The last one should be a callback
        var successCallback = args.pop();

        var failCallback = function failCallback(error) {
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          throw new Error('Uncaught promise failure for ' + args.join(', ') + ': ' + error);
        };

        if (args.length > 1 && typeof _.last(args) === 'function') {
          failCallback = successCallback;
          successCallback = args.pop();
        } // Collect promises


        var promises = [];

        _.each(args, function (arg) {
          promises.push(_this._getPromiseInfo(arg).promise);
        }); // One?


        if (promises.length === 1) {
          // Simple.
          promises[0].then(successCallback, failCallback);
        } else {
          // When all are done
          Promise.all(promises).then(successCallback, failCallback);
        }

        return this;
      }
      /**
       * Add listener for chosen event
       *
       * @method on
       * @param  {string}   eventName The event name to listen for.
       * @param  {Function} callback  The function to call when the event occurs. Depending on the event, this 
       *                              callback can receive 0 or more arguments when called.
       * @example
       * 		obj.on('message', function(message) {
       * 			console.log(message);
       * 		});
       * @chainable
       */

    }, {
      key: "on",
      value: function on(eventName, callback) {
        // Get the set
        if (!this._listeners.has(eventName)) {
          this._listeners.set(eventName, new Set());
        }

        var events = this._listeners.get(eventName); // Add callback


        events.add(callback); // Chain

        return this;
      }
      /**
       * Remove a previously added listener for chosen event
       *
       * @method off
       * @param  {string}   eventName The event name to remove listener for
       * @param  {Function} callback  The previously added callback to remove from listeners
       * @chainable
       */

    }, {
      key: "off",
      value: function off(eventName, callback) {
        // Get the callbacks
        var callbacks = this._listeners.get(eventName);

        if (callbacks === undefined) return this; // Remove callback

        callbacks.delete(callback);
        return this;
      }
      /**
       * Trigger calling of all registered callbacks for given event
       * with given arguments.
       *
       * @method trigger
       * @param  {string}    eventName The event name to trigger callbacks for
       * @param  {...mixed}  args      Zero or more arguments to pass along to each callback
       * @chainable
       */

    }, {
      key: "trigger",
      value: function trigger(eventName) {
        var _this2 = this;

        for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          args[_key5 - 1] = arguments[_key5];
        }

        // Get the callbacks
        var callbacks = this._listeners.get(eventName);

        if (callbacks === undefined) return this; // Loop and call

        callbacks.forEach(function (cb) {
          cb.apply(_this2, args);
        });
        return this;
      } /////////////////////
      // Private methods //
      /////////////////////

    }]);

    return Obj;
  }();

  var Reference =
  /*#__PURE__*/
  function () {
    function Reference(observable, path) {
      _classCallCheck(this, Reference);

      this.observable = observable;
      this.path = path;
    }

    _createClass(Reference, [{
      key: "getValue",
      value: function getValue() {
        return this.observable.get(this.path);
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.observable.set(this.path, value);
        return this;
      }
    }, {
      key: "watch",
      value: function watch(callback) {
        this.observable.observe(this.path, callback);
      }
    }]);

    return Reference;
  }();

  /**
   * @module Helpers
   */
  var ClassMap = {
    classes: new Map(),
    get: function get(className) {
      return this.classes.get(className);
    },
    register: function register(className, c) {
      this.classes.set(className, c);
      return this;
    },
    create: function create(className) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var c = ClassMap.get(className);
      if (c === undefined) throw new Error('The ' + className + ' class is not registered in the ClassMap');
      return _construct(c, _toConsumableArray(args));
    },
    isA: function isA(obj, className) {
      var c = ClassMap.get(className);
      if (c === undefined) throw new Error('The ' + className + ' class is not registered in the ClassMap');
      return obj instanceof c;
    }
  };

  /**
   * @module Core
   */

  var ComputedProperty =
  /*#__PURE__*/
  function () {
    /**
     * @class Core.ComputedProperty
     * 
     * @constructor
     * @param  {Array}   			dependencies 
     * @param  {Function} 			callback     	 
     */
    function ComputedProperty(dependencies, callback) {
      _classCallCheck(this, ComputedProperty);

      /**
       * The Observable instance that this computed attribute is
       * a part of.
       * 
       * @property observable
       * @type {Core.Observable}
       */
      this.observable = null;
      /**
       * The attribute name within the Observable that this ComputedProperty
       * represents.
       * 
       * @property name
       * @type {string}
       */

      this.name = null;
      /**
       * The names of the attributes that this compution depends on. These
       * attributes will also be injected into the callback.
       *
       * @property dependencies
       * @type {array}
       */

      this.dependencies = dependencies;
      /**
       * The compution function that is called when the value is requested.
       *
       * @property callback
       * @type {Function}
       */

      this.callback = callback;
    }
    /**
     * Get the current computed value 
     *
     * @method getValue
     * @return {mixed}
     */


    _createClass(ComputedProperty, [{
      key: "getValue",
      value: function getValue() {
        var _this = this;

        // Get dependency values
        var args = [];

        _.each(this.dependencies, function (dep) {
          args.push(_this.observable.get(dep));
        }); // Do the callback


        return this.callback.apply(this.observable, args);
      }
      /**
       * Alias of `getValue`
       * 
       * @method toString
       * @return {mixed}
       */

    }, {
      key: "toString",
      value: function toString() {
        return this.getValue();
      }
      /**
       * Make this property part of an Observable object, and 
       * start watching for changes.
       * 
       * @method initialize
       * @param {string} name 					The name op the property
       * @param {Core.Observable} observable 		The observable instance this property is a part of
       * @chainable
       */

    }, {
      key: "initialize",
      value: function initialize(name, observable) {
        var _this2 = this;

        // Localize
        this.name = name;
        this.observable = observable; // Watch the properties

        this.observable.observe(this.dependencies, function () {
          _this2.observable._scheduleAttributeChanged(_this2.name);
        });
        return this;
      }
    }]);

    return ComputedProperty;
  }();

  /**
   * @module Core
   */

  var Observable =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(Observable, _Obj);

    /**
     * The basic object class that notifies **observers** and **students** about 
     * changes in its attributes. 
     *
     * ## Observers
     * An observer is an object (in actuality a callback) that watches for changes on 
     * a certain attribute or it's child attributes, in case of nested Observables. 
     * An observer can {{#crossLink "Core.Observable/disregard"}}{{/crossLink}} the attribute to stop watching.
     *
     * 	// Initialize object and watch for changes
     * 	var obj = new Chicken.Core.Observable();
     * 	obj.set('foo', 'bar');
     * 	var callback = () => {
     * 		alert('Changed: ' + obj.get('foo'));
     * 	};
     * 	obj.observe('foo', callback);
     * 	
     * 	// Change
     * 	obj.set('foo', 'boo'); // Will alert 'Changed: boo'
     * 	
     * 	// Stop watching
     * 	obj.disregard('foo', callback);
     * 	obj.set('foo', 'back-to-bar'); // Will not alert anthing
     *
     * ## Students
     * A student is an object (in actuality a callback) that watches for changes in
     * **any attribute** or any **child attribute**, in case of nested Observables.
     * An observer can **neglect** their study to stop wachting.
     *
     * 	// Initialize object
     * 	var obj = new Chicken.Core.Observable();
     * 	obj.set('foo', 'bar');
     * 	var childObj = new Chicken.Core.Observable();
     * 	childObj.set('free', 'willy');
     * 	obj.set('child', childObj);
     *
     * 	// Listen
     * 	var callback = (changedAttributes) {
     * 		console.log(changedAttributes);
     * 	};
     * 	obj.study(callback);
     *
     * 	// Update attributes
     *	obj.set('foo', 'boo');                  // Will log ['foo']
     *	obj.get('child').set('free', 'tibet');  // Will log ['child']
     * 	childObj.set('foo', 'bee');             // Will log ['child']
     *
     * 	// Neglect my study
     * 	obj.neglect(callback);
     * 	obj.set('foo', 'back to bar');          // Will not log anything
     *
     * @class Core.Observable
     * @extends Core.Object
     *
     * @constructor
     * @param  {Object}  [initValues={}]       			 A hash of key-value pairs to initialize the object with
     * @param  {Boolean} [convertToObservables=true]	 Whether to convert any Object and Array values in the `initValues` parameter into Observable and ObservableArray instance
     **/
    function Observable() {
      var _this;

      var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _classCallCheck(this, Observable);

      // Basics
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Observable).call(this)); ////////////////
      // Properties //
      ////////////////

      /**
       * @property observers
       * @type {Map}
       */

      _this.observers = new Map();
      /**
       * @attribute attributes
       * @type {object}
       */

      _this.attributes = {};
      /**
       * Whenever this property is true, no notifications will be triggered
       * 
       * @attribute notificationsDisabled
       * @type {Boolean}
       */

      _this.notificationsDisabled = false; // Scheduling

      _this._scheduleAttributesChangedTimeout = false;
      _this._scheduleAttributesChangedAttributes = null; ////////////////////
      // Initialization //
      ////////////////////
      // Initialize values

      _this.withoutNotifications(function () {
        _this.import(initValues, convertToObservables);
      }); // Properties for internal use


      _this._bindings = {};
      return _this;
    } ////////////////////
    // Public methods //
    ////////////////////

    /**
     * Check if attribute is defined
     *
     * @method has
     * @param  {string}  key The name of the key to check
     * @return {Boolean}     True when the attribute has been defined
     */


    _createClass(Observable, [{
      key: "has",
      value: function has(key) {
        // Split
        var parts = Number.isInteger(key) ? [key] : key.split(/\./);
        var currentPart = parts.shift(); // No deep shit?

        if (parts.length === 0) return this._has(currentPart) !== undefined; // Look deeper

        var value = this.__get(currentPart); // No value


        if (value === undefined) {
          return false;
        } // Check if the value is also an observable


        if (Observable.isObservable(value)) {
          // Pass the rest along to go a level deeper
          return value.has(parts.join('.'));
        } else {
          return false;
        }
      }
    }, {
      key: "_has",
      value: function _has(key) {
        return this.attributes[key] !== undefined;
      }
      /**
       * Get attribute from object
       *
       * @method get
       * @param  {string} key The name of the key to retrieve the value of. You can use dot-notation to use deep-getting
       * @return The value or undefined when the key is not set
       */

    }, {
      key: "get",
      value: function get(key) {
        // Split
        if (key === undefined) throw new TypeError('There was no key provided');
        var parts = key;
        if (typeof key === 'string') parts = key.split(/\./);
        var currentPart = parts.shift(); // Get value

        var value = this.__get(currentPart); // Nothing?


        if (value === undefined) return; // Is it a reference?

        if (value instanceof Reference) {
          value = value.getValue();
        } // Value found?


        if (parts.length === 0) {
          // Is it computed?
          if (value instanceof ComputedProperty) {
            return value.getValue();
          } // Return the value as is.


          return value;
        } // Check if the value is also an observable


        if (Observable.isObservable(value)) {
          // Pass the rest along to go a level deeper
          return value.get(parts.join('.'));
        } else {
          // Nothing to be retrieved
          return; //throw new Error('The found value for ' + currentPart + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + (typeof value));
        }
      }
    }, {
      key: "__get",
      value: function __get(key) {
        return this.attributes[key];
      }
      /**
       * Set attribute on object. When you set a attribute on Observable, all
       * *observers* and *students* will be notified of the change.
       *
       * @method set
       * @param {string/array} key   	The name of the key to store the value of. You can use dot-notation to use deep-setting
       * @param {mixed} value 		The value to store
       * @param {boolean} [convertToObservables=false]
       *        						Whether to convert standard object values into Observable instances
       * @chainable
       */

    }, {
      key: "set",
      value: function set(key, value) {
        var _this2 = this;

        var convertToObservables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        // Object given?
        if (_typeof(key) === 'object') {
          // Loop and set each
          _.each(key, function (v, k) {
            _this2.set(k, v, convertToObservables);
          });

          return this;
        } // Convert?


        if (convertToObservables === true && _typeof(value) === 'object' && value !== null) {
          if (value.constructor === Object) {
            value = new Observable(value);
          } else if (Array.isArray(value)) {
            value = ClassMap.create('ObservableArray', [value]);
          }
        } // Is it a computed attribute


        if (value instanceof ComputedProperty) {
          value.initialize(key, this);
        } // Is there a dot in there?


        if (typeof key === 'string' && key.match(/\.[\w]/)) {
          ////////////////////////
          // Split and deep set //
          ////////////////////////
          var parts = key.split(/\./);
          var currentPart = parts.shift(); // Does the first key not exist?

          if (this.attributes[currentPart] === undefined) {
            // Should it be an array?
            var newValue;

            if (Number.isInteger(parts[0]) || typeof parts[0] === 'string' && parts[0].match(/^\d+$/)) {
              // Create list (using classmap to prevent circular dependencies)
              newValue = ClassMap.create('ObservableArray');
            } else {
              // Create it
              newValue = new Observable();
            } // Store it


            this.attributes[currentPart] = newValue;
          } // Do deep setting


          this.get(currentPart).set(parts.join('.'), value);
          return this;
        } // Now set the attribute


        this.setAttribute(key, value, convertToObservables);
        return this;
      }
    }, {
      key: "setAttribute",
      value: function setAttribute(key, value) {
        var _this3 = this;

        // Is the value identical?
        if (ClassMap.get('Utils').areEqual(value, this.get(key))) {
          return this;
        } // Set it


        this.__set(key, value); // Is the value observable?


        if (Observable.isObservable(value)) {
          // Study the object
          value.study(function () {
            _this3._scheduleAttributeChanged(key);
          });
        } // Is the value a reference?
        else if (value instanceof Reference) {
            // Study the object
            value.watch(function () {
              _this3._scheduleAttributeChanged(key);
            });
          } // Update attribute


        this._scheduleAttributeChanged(key);

        return this;
      }
    }, {
      key: "setIfChanged",
      value: function setIfChanged(key, value) {
        // Original
        var originalValue = this.get(key);
        if (originalValue == value) return this;
        return this.set(key, value);
      }
    }, {
      key: "__set",
      value: function __set(key, value) {
        // Is there a current value that is a reference?
        if (this.attributes[key] instanceof Reference && !(value instanceof Reference)) {
          // Write the referenced value
          this.attributes[key].setValue(value);
        } else {
          // Store the value
          this.attributes[key] = value;
        }

        return this;
      }
    }, {
      key: "setSilently",
      value: function setSilently(key, value) {
        var _this4 = this;

        var convertToObservables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return this.withoutNotifications(function () {
          _this4.set(key, value, convertToObservables);
        });
      }
    }, {
      key: "unset",
      value: function unset(key) {
        this._unset(key); // Update attribute


        this._scheduleAttributeChanged(key);

        return this;
      }
    }, {
      key: "_unset",
      value: function _unset(key) {
        delete this.attributes[key];
      }
    }, {
      key: "import",
      value: function _import(obj) {
        var _this5 = this;

        var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        // Import all items in hash
        this.withoutNotifications(function () {
          _.each(obj, function (value, key) {
            _this5.set(key, value, convertToObservables);
          });
        }); // Notify!

        if (!this.notificationsDisabled) this.trigger(Observable.Events.Import);
        return this;
      }
    }, {
      key: "fill",
      value: function fill(obj) {
        var _this6 = this;

        // Loop through object
        _.each(obj, function (value, key) {
          // Get existing value
          if (_this6.has(key)) {
            // Get value
            var curValue = _this6.get(key); // Observable?


            if (curValue instanceof Observable) {
              curValue.fill(value);
            } else {
              _this6.set(key, value, true);
            }
          } else {
            // Just set it.
            _this6.set(key, value, true);
          }
        });

        return this;
      }
      /**
       * Increment given attribute's numeric value
       *
       * @method increment
       * @param  {string} key          
       * @param  {Number} by           (Default = 1)
       * @param  {Number} defaultValue (Default = 0)
       * @chainable
       */

    }, {
      key: "increment",
      value: function increment(key) {
        var by = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var v = this.get(key);
        if (v === undefined || typeof v !== 'number') v = defaultValue;
        v += by;
        this.set(key, v);
        return this;
      }
      /**
       * Decrement given attribute's numeric value
       *
       * @method increment
       * @param  {string} key          
       * @param  {Number} by           (Default = 1)
       * @param  {Number} defaultValue (Default = 0)
       * @chainable
       */

    }, {
      key: "decrement",
      value: function decrement(key) {
        var by = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var v = this.get(key);
        if (v === undefined || typeof v !== 'number') v = defaultValue;
        v -= by;
        this.set(key, v);
        return this;
      }
      /**
       * Toggle the given attribute's boolean value
       *
       * @method toggle
       * @param  {string}  key                
       * @param  {Boolean} valueWhenUndefined  (Default = true) What value to set when the attribute does not have a value yet
       * @chainable
       */

    }, {
      key: "toggle",
      value: function toggle(key) {
        var valueWhenUndefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var v = this.get(key);

        if (v === undefined || typeof v !== 'boolean') {
          v = valueWhenUndefined;
        } else {
          v = !v;
        }

        this.set(key, v);
        return this;
      }
      /**
       * Listen for any changes in any of the object's attributes. 
       * The callback will receive an array containing the names of
       * all updates attributes. 
       *
       * Note: This is an alias of the 'change' event, so calling
       * ```this.on('change', callback)``` will achieve the same result.
       *
       * @example
       * 	// Initialize object
       * 	var obj = new Chicken.Core.Observable();
       * 	obj.set('foo', 'bar');
       * 	var childObj = new Chicken.Core.Observable();
       * 	childObj.set('free', 'willy');
       * 	obj.set('child', childObj);
       *
       * 	// Listen
       * 	obj.study((changedAttributes) {
       * 		console.log(changedAttributes);
       * 	});
       *
       * 	// Update attributes
       *	obj.set('foo', 'boo');                  // Will log ['foo']
       *	obj.get('child').set('free', 'tibet');  // Will log ['child']
       * 	childObj.set('foo', 'bee');             // Will log ['child']
       *
       * @method study
       * @param  {Function} callback
       * @chainable
       */

    }, {
      key: "study",
      value: function study(callback) {
        // This is an alias of the 'change' event
        return this.on(Observable.Events.Change, callback);
      }
      /**
       * Stop listening for changes on the object's attributes.
       *
       * Note: This is an alias of the 'change' event, so calling
       * ```this.off('change', callback)``` will achieve the same result.
       *
       * @example
       * 
       * 
       * @method neglect
       * @param  {Function} callback 
       * @chainable
       */

    }, {
      key: "neglect",
      value: function neglect(callback) {
        // This is an alias of the 'change' event
        return this.off(Observable.Events.Change, callback);
      }
      /**
       * Observe the attribute with given key, so that callback is called
       * whenever the attribute or it's child attributes change.
       *
       * 	// Initialize object and watch for changes
       * 	var obj = new Chicken.Core.Observable();
       * 	obj.set('foo', 'bar');
       * 	var callback = () => {
       * 		alert('Changed: ' + obj.get('foo'));
       * 	};
       * 	obj.observe('foo', callback);
       * 	
       * 	// Change
       * 	obj.set('foo', 'boo'); // Will alert 'Changed: boo'
       * 	
       * @method observe
       * @param  {string|array}   key      The name of the attribute to observe
       * @param  {Function} callback 
       * @chainable
       */

    }, {
      key: "observe",
      value: function observe(keyOrKeys, callback) {
        var _this7 = this;

        ////////////////////
        // More than one? //
        ////////////////////
        if (Array.isArray(keyOrKeys)) {
          _.each(keyOrKeys, function (key) {
            _this7.observe(key, callback);
          });

          return this;
        }

        var key = keyOrKeys; //////////////////////////////
        // Does the key have a dot? //
        //////////////////////////////

        var parts = key.split(/\./);

        if (parts.length > 1) {
          // Get the object concerned
          var attrKey = parts.shift();
          var obj = this.get(attrKey);
          var objKey = parts.join('.'); // Is it an observable?

          if (Observable.isObservable(obj) && obj.observe) {
            // Observe this observable itself
            this.observe(attrKey, callback); // Go deeper

            return obj.observe(objKey, callback);
          }

          throw new Error('Cannot observe property of non-existing object: ' + key);
        } //////////////////
        // Add observer //
        //////////////////


        if (!this.observers.has(key)) {
          this.observers.set(key, new Set());
        }

        var observers = this.observers.get(key); // Add callback

        observers.add(callback);
        return this;
      }
      /**
       * Stop observing the attribute with given key, or any of it's
       * child attributes.
       *
       * @method disregard
       * @param  {string}   key      The name of the attribute to disregard
       * @param  {Function} callback 
       * @chainable
       */

    }, {
      key: "disregard",
      value: function disregard(key, callback) {
        // Get the observers
        var observers = this.observers.get(key);
        if (observers === undefined) return this; // Remove callback

        observers.delete(callback);
        return this;
      }
      /**
       * Get the Observable including all its children
       * as a native object.
       *
       * @method toObject
       * @return {object}
       */

    }, {
      key: "toObject",
      value: function toObject() {
        var includedUids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var obj = {};

        _.each(this.attributes, function (item, key) {
          // Observable?
          if (Observable.isObservable(item)) {
            // Already included?
            var guid = ClassMap.get('Utils').uidFor(item);

            if (_.indexOf(includedUids, guid) !== -1) {
              obj[key] = '...recursive(' + guid + ')...';
              return;
            }

            includedUids.push(guid); // Array?

            if (item instanceof Observable) {
              item = item.toObject(includedUids);
            } else {
              item = item.toArray(includedUids);
            }
          }

          obj[key] = item;
        });

        return obj;
      }
      /**
       * Apply given callback for each attribute defined in this observable
       *
       * @method each
       * @param  {Function} callback
       * @chainable
       */

    }, {
      key: "each",
      value: function each(callback) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _.each(this.attributes, callback, context);

        return this;
      }
      /**
       * Execute given callback without triggering change notifications.
       * 
       * @method withoutNotifications
       * @param  {Function} callback 
       * @chainable
       */

    }, {
      key: "withoutNotifications",
      value: function withoutNotifications(callback) {
        var wasDisabled = this.notificationsDisabled;
        this.notificationsDisabled = true;
        callback();
        this.notificationsDisabled = wasDisabled;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        var convertToObservables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        // Make copy!
        var c = this.constructor;
        var copy = new c(this.toObject(), convertToObservables);
        return copy;
      } /////////////////////
      // Private methods //
      /////////////////////

    }, {
      key: "_scheduleAttributeChanged",
      value: function _scheduleAttributeChanged(key) {
        var _this8 = this;

        // Notifications disabled?
        if (this.notificationsDisabled) return; // Already something scheduled?

        if (!this._scheduleAttributesChangedTimeout) {
          // Schedule it
          this._scheduleAttributesChangedAttributes = [];
          this._scheduleAttributesChangedTimeout = setTimeout(function () {
            // Trigger it now!
            _this8._scheduleAttributesChangedTimeout = false;

            _this8._triggerAttributesChanged();
          }, Observable.AttributeChangedDelay);
        } // Add attribute to the set


        this._scheduleAttributesChangedAttributes.push(key);
      }
    }, {
      key: "_triggerAttributesChanged",
      value: function _triggerAttributesChanged() {
        var _this9 = this;

        // Notifications disabled?
        if (this.notificationsDisabled) return; // Clear for next time.

        if (this._scheduleAttributesChangedTimeout) clearTimeout(this._scheduleAttributesChangedTimeout);
        this._scheduleAttributesChangedTimeout = false; // Check my attributes

        var attrs = _.unique(this._scheduleAttributesChangedAttributes);

        if (attrs) {
          // Collect the observers, using a Set to make sure the same observer can't be called twice
          var combinedObservers = new Set();

          _.each(attrs, function (attr) {
            // Get observers
            var attrObservers = _this9.observers.get(attr);

            if (attrObservers) {
              attrObservers.forEach(function (observer) {
                // Add it.
                combinedObservers.add(observer);
              });
            }
          }); // Did we have any observers?


          combinedObservers.forEach(function (observer) {
            // Now call it.
            observer.apply(_this9);
          }); // Students as well.

          this.trigger(Observable.Events.Change, attrs);
        }
      }
    }, {
      key: "isObservable",
      value: function isObservable() {
        return true;
      }
    }]);

    return Observable;
  }(Obj); ////////////
  // Events //
  ////////////


  Observable.Events = {
    /**
     * This event is fired whenever anything changes in the array
     * of one of its observable items.
     * 
     * @event change
     */
    Change: 'change',

    /**
     * This event is fired whenever an import is completed
     *
     * @event import
     */
    Import: 'import'
  };

  Observable.isObservable = function (obj) {
    return _typeof(obj) === 'object' && obj !== null && typeof obj.isObservable === 'function' && obj.isObservable() === true;
  };

  Observable.AttributeChangedDelay = 1;
  ClassMap.register('Observable', Observable);

  function Chainable (cls) {
    cls.create = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _construct(cls, args);
    };

    return cls;
  }

  /**
   * @module Core
   */

  var SettingsObject =
  /*#__PURE__*/
  function (_Observable) {
    _inherits(SettingsObject, _Observable);

    /**
     * @class Core.SettingsObject
     * @extends Core.Observable
     *
     * @constructor
     * @param {object}  defaultSettings  	Initialize with these default settings
     * @param {array}   [allowedKeys] 		Optional array of allowed keys. By default all keys are allowed	 
     */
    function SettingsObject() {
      var _this;

      var defaultSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var allowedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      _classCallCheck(this, SettingsObject);

      // Instantiate with default settings
      _this = _possibleConstructorReturn(this, _getPrototypeOf(SettingsObject).call(this, defaultSettings));
      /**
       * @property allowedKeys
       * @type Array
       */

      _this.allowedKeys = allowedKeys;
      _this.notificationsDisabled = true;
      return _this;
    }
    /**
     * Apply given settings
     *
     * @method apply
     * @param {object} 	settings	A hash-object with keys and values
     * @chainable
     */


    _createClass(SettingsObject, [{
      key: "apply",
      value: function apply(settings) {
        var _this2 = this;

        // Apply each key individually
        _.each(settings, function (value, key) {
          _this2.set(key, value);
        });

        return this;
      } // Extra check for allowedKeys.

    }, {
      key: "set",
      value: function set(key, value) {
        // Is it allowed?
        if (this.allowedKeys && this.allowedKeys.length > 0 && !_.contains(this.allowedKeys, key)) {
          throw new Error('This SettingsObject does not have a setting for "' + key + '". The allowed settings are: ' + this.allowedKeys.join(', '));
        } // Do it.


        return _get(_getPrototypeOf(SettingsObject.prototype), "set", this).call(this, key, value);
      }
    }]);

    return SettingsObject;
  }(Observable);

  var SettingsObject$1 = Chainable(SettingsObject);

  /**
   * @module Dom
   */

  var Element =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(Element, _Obj);

    /**
     * @class Dom.Element
     * @extends Core.Obj
     *
     * @constructor
     * @param {jQuery} $element
     * @param {Application} [application]
     */
    function Element($element) {
      var _this;

      _classCallCheck(this, Element);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this));
      /**
       * The jQuery element that is the ViewContainer
       * 
       * @property $element
       * @type {jQuery}
       */

      _this.$element = $element;
      return _this;
    }

    _createClass(Element, [{
      key: "setContent",
      value: function setContent(content) {
        // Fire the before hooks.
        this._fireHooks('beforeRender'); // Set it


        this.$element.html(content);
        this.trigger('content', content); // Fire the after hooks

        this._fireHooks('afterRender');
      }
    }, {
      key: "_fireHooks",
      value: function _fireHooks(type) {
        var _this2 = this;

        _.each(Element.Hooks[type], function (callback) {
          // Fire it.
          callback.apply(_this2, [_this2.$element, _this2]);
        });
      }
    }]);

    return Element;
  }(Obj);

  Element.registerHook = function (callback) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'afterRender';
    Element.Hooks[type].push(callback);
    return true;
  };

  Element.Hooks = {
    beforeRender: [],
    afterRender: []
  };

  /** 
   * @module Dom
   */
  var Transition =
  /*#__PURE__*/
  function () {
    function Transition($container, $fromContent, $toContent, name) {
      _classCallCheck(this, Transition);

      /**
       * @property $container
       * @type {jQuery}
       */
      this.$container = $container;
      this.$from = $fromContent;
      this.$to = $toContent;
      this.name = name;
      this.viewWidth = false;
      this.viewHeight = false;
      this.duration = null; // Existing?

      if (Transition[name] === undefined) {
        throw new Error("There is no Transition registered under the key \"".concat(name, "\""));
      }
    }

    _createClass(Transition, [{
      key: "play",
      value: function play() {
        var _this = this;

        // Get obj
        var obj = Transition[this.name]; // Generic preparation

        this._prepare(); // Position content


        var newContentPosition = obj.newContentPosition || 'right';

        switch (newContentPosition) {
          case 'default':
            this.$to.css({
              left: 0,
              top: 0
            });
            break;

          case 'transparent':
            this.$to.css({
              left: 0,
              top: 0,
              opacity: 0
            });
            break;

          case 'right':
            this.$to.css({
              left: this.viewWidth,
              top: 0
            });
            break;

          case 'left':
            this.$to.css({
              left: -this.viewWidth,
              top: 0
            });
            break;

          default:
            throw new Error("Unknown newContentPosition: ".concat(newContentPosition));
        } // Add the new content


        this.$container.append(this.$to); // Now play it

        var result = obj.play(this, this.$from, this.$to);
        if (!result || !(result instanceof Promise)) throw new Error("Transition.".concat(this.name, ".play($from, $to) should return a Promise"));
        result.then(function () {
          // Reset 
          _this._finish();
        });
        return result;
      }
    }, {
      key: "_prepare",
      value: function _prepare() {
        // Get width
        this.viewWidth = this.$container.width();
        this.viewHeight = this.$container.height(); // Style container

        this.$container.css({
          position: 'relative',
          width: this.viewWidth,
          height: this.viewHeight,
          overflow: 'hidden'
        }); // Set style to content

        if (this.$from) {
          this.$from.css({
            position: 'absolute',
            width: this.viewWidth,
            height: this.viewHeight,
            zIndex: 10
          });
        }

        this.$to.css({
          position: 'absolute',
          width: this.viewWidth,
          height: this.viewHeight,
          zIndex: 20
        });
      }
    }, {
      key: "_finish",
      value: function _finish() {
        this.$container.css({
          width: '',
          height: ''
        });
        this.$to.css({
          width: '',
          height: ''
        });
      }
    }]);

    return Transition;
  }(); // ███████╗██╗     ██╗██████╗ ███████╗    ██╗     ███████╗███████╗████████╗
  // ██╔════╝██║     ██║██╔══██╗██╔════╝    ██║     ██╔════╝██╔════╝╚══██╔══╝
  // ███████╗██║     ██║██║  ██║█████╗      ██║     █████╗  █████╗     ██║   
  // ╚════██║██║     ██║██║  ██║██╔══╝      ██║     ██╔══╝  ██╔══╝     ██║   
  // ███████║███████╗██║██████╔╝███████╗    ███████╗███████╗██║        ██║   
  // ╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝    ╚══════╝╚══════╝╚═╝        ╚═╝   
  //                                                                         


  Transition.slideLeft = {
    newContentPosition: 'right',
    play: function play(transition, $from, $to) {
      // Promise
      return new Promise(function (resolve) {
        // Options
        var options = {
          duration: transition.duration || 250
        }; // Move out the old

        if ($from) {
          $from.animate({
            left: -transition.viewWidth
          }, options);
        } // Move in the new


        options.complete = function () {
          resolve();
        };

        $to.animate({
          left: 0
        }, options);
      });
    }
  }; // ███████╗██╗     ██╗██████╗ ███████╗    ██████╗ ██╗ ██████╗ ██╗  ██╗████████╗
  // ██╔════╝██║     ██║██╔══██╗██╔════╝    ██╔══██╗██║██╔════╝ ██║  ██║╚══██╔══╝
  // ███████╗██║     ██║██║  ██║█████╗      ██████╔╝██║██║  ███╗███████║   ██║   
  // ╚════██║██║     ██║██║  ██║██╔══╝      ██╔══██╗██║██║   ██║██╔══██║   ██║   
  // ███████║███████╗██║██████╔╝███████╗    ██║  ██║██║╚██████╔╝██║  ██║   ██║   
  // ╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝    ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
  //                                                                             

  Transition.slideRight = {
    newContentPosition: 'left',
    play: function play(transition, $from, $to) {
      // Promise
      return new Promise(function (resolve) {
        // Options
        var options = {
          duration: transition.duration || 250
        }; // Move out the old

        if ($from) {
          $from.animate({
            left: transition.viewWidth
          }, options);
        } // Move in the new


        options.complete = function () {
          resolve();
        };

        $to.animate({
          left: 0
        }, options);
      });
    }
  }; // ███████╗ █████╗ ██████╗ ███████╗
  // ██╔════╝██╔══██╗██╔══██╗██╔════╝
  // █████╗  ███████║██║  ██║█████╗  
  // ██╔══╝  ██╔══██║██║  ██║██╔══╝  
  // ██║     ██║  ██║██████╔╝███████╗
  // ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝
  //                                 

  Transition.fade = {
    newContentPosition: 'transparent',
    play: function play(transition, $from, $to) {
      // Promise
      return new Promise(function (resolve) {
        // Options
        var options = {
          duration: transition.duration || 250
        }; // Move in the new

        options.complete = function () {
          resolve();
        };

        $to.animate({
          opacity: 1
        }, options);
      });
    }
  };

  /**
   * @module Dom
   */

  var ViewContainer =
  /*#__PURE__*/
  function (_Element) {
    _inherits(ViewContainer, _Element);

    /**
     * A ViewContainer is en DomElement in your application that
     * can contain a rendered View. Each ViewContainer needs a 
     * unique name, and the main ViewContainer for the application
     * is always called 'main'.
     * 
     * @class Dom.ViewContainer 
     * @extends Core.Object
     *
     * @constructor
     * @param {jQuery} $element
     * @param {Application} application
     */
    function ViewContainer($element, application) {
      var _this;

      _classCallCheck(this, ViewContainer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewContainer).call(this, $element, application)); // Private props

      _this._isLoading = false; ////////////////
      // Properties //
      ////////////////

      /**
       * The unique name you can use in your routes to target this
       * ViewContainer.
       * 
       * @property name
       * @type {string}
       */

      _this.name = ViewContainer.getViewName($element);
      /**
       * The Routing.Action that rendered the content that is currently
       * in this ViewContainer
       * 
       * @property currentAction
       * @type {Routing.Action}
       */

      _this.currentAction = null;
      /**
       * The default transition to use for this ViewContainer
       * 
       * @property defaultTransition
       * @type {string}
       */

      _this.defaultTransition = $element.attr('transition');
      /**
       * @property transitionsDisabled
       * @type {boolean}
       */

      _this.transitionsDisabled = false;
      /**
       * Currently active content 
       * 
       * @property $currentContent
       * @type {jQuery}
       */

      _this.$currentContent = null;
      _this.currentView = null;
      return _this;
    }
    /**
     * Initialize the ViewContainer. 
     *
     * @method initialize
     * @chainable
     */


    _createClass(ViewContainer, [{
      key: "initialize",
      value: function initialize() {
        this.$element.addClass(ViewContainer.Classes.Initialized);
        return this;
      }
      /**
       * @method setActionContent
       * @param {string} 				content 			The (HTML) content to render
       * @param {boolean}				setLoadingFalse		Whether to set the loading-state to false
       * @chainable
       */

    }, {
      key: "setContent",
      value: function setContent(content) {
        var _this2 = this;

        var setLoadingFalse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        // Transition?
        var transition = this.currentAction.transition;

        if (!transition && transition !== false) {
          // Use my default transition
          transition = this.defaultTransition;
        } // No longer loading


        if (setLoadingFalse) this.setLoading(false); // Use transition?

        this.transitionContent(content, transition).then(function () {
          // Apply hooks
          ViewContainer.any.trigger('render', _this2);
        });
        return this;
      }
    }, {
      key: "transitionContent",
      value: function transitionContent(newContent, transitionName) {
        var _this3 = this;

        return new Promise(function (resolve) {
          // Put content into container
          var $newContent = $('<div class="view-container-element" />').html(newContent); // No transition?

          if (!transitionName || transitionName === 'none' || _this3.transitionsDisabled) {
            // Remove old content
            _this3._fireHooks('beforeRender');

            _this3.$element.find('.view-container-element').remove(); // Set content now


            _this3.$element.append($newContent); // Switch!


            _this3.$currentContent = $newContent;

            _this3.trigger('content', newContent);

            _this3._fireHooks('afterRender');

            return resolve();
          } // Create transition


          var transition = new Transition(_this3.$element, _this3.$currentContent, $newContent, transitionName);

          _this3._fireHooks('beforeRender');

          transition.play().then(function () {
            // Remove old content
            if (_this3.$currentContent) {
              _this3.$currentContent.remove();
            } // Switch!


            _this3.$currentContent = $newContent;

            _this3.trigger('content', newContent);

            _this3._fireHooks('afterRender'); // Done!


            resolve();
          });
        });
      }
    }, {
      key: "setView",
      value: function setView(view) {
        this.currentView = view;
        return this;
      }
    }, {
      key: "setAction",
      value: function setAction(action) {
        this.currentAction = action;
        return this;
      }
    }, {
      key: "setLoading",
      value: function setLoading() {
        var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this._isLoading = loading;
        this.$element.toggleClass(ViewContainer.Classes.Loading, loading);
        return this;
      }
    }, {
      key: "isLoading",
      value: function isLoading() {
        return this._isLoading;
      }
    }, {
      key: "isInDom",
      value: function isInDom() {
        return this.$element.closest(document.documentElement).length > 0;
      }
    }]);

    return ViewContainer;
  }(Element);

  ViewContainer.Classes = {
    Initialized: 'initialized',
    Loading: 'loading'
  };
  ViewContainer.ElementSelector = 'view-container:not(.initialized),[view-container]:not(.initialized)';
  ViewContainer.DefaultName = 'main';

  ViewContainer.getViewName = function ($element) {
    // Get it either from the name-attr or view-attr
    var name = $element.is('view-container') ? $element.attr('name') : $element.attr('view-container'); // No?

    if (!name) name = ViewContainer.DefaultName;
    return name;
  };

  ViewContainer.any = new Obj();

  var utils = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.clear = clear;
  exports.insertBefore = insertBefore;
  // inclusive of both nodes

  function clear(parentNode, firstNode, lastNode) {
    if (!parentNode) {
      return;
    }

    var node = firstNode;
    var nextNode;
    do {
      nextNode = node.nextSibling;
      parentNode.removeChild(node);
      if (node === lastNode) {
        break;
      }
      node = nextNode;
    } while (node);
  }

  function insertBefore(parentNode, firstNode, lastNode, refNode) {
    var node = firstNode;
    var nextNode;
    do {
      nextNode = node.nextSibling;
      parentNode.insertBefore(node, refNode);
      if (node === lastNode) {
        break;
      }
      node = nextNode;
    } while (node);
  }

  });

  unwrapExports(utils);
  var utils_1 = utils.clear;
  var utils_2 = utils.insertBefore;

  var morphRange = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;



  // constructor just initializes the fields
  // use one of the static initializers to create a valid morph.
  function Morph(domHelper, contextualElement) {
    this.domHelper = domHelper;
    // context if content if current content is detached
    this.contextualElement = contextualElement;
    // inclusive range of morph
    // these should be nodeType 1, 3, or 8
    this.firstNode = null;
    this.lastNode = null;

    // flag to force text to setContent to be treated as html
    this.parseTextAsHTML = false;

    // morph list graph
    this.parentMorphList = null;
    this.previousMorph = null;
    this.nextMorph = null;
  }

  Morph.empty = function (domHelper, contextualElement) {
    var morph = new Morph(domHelper, contextualElement);
    morph.clear();
    return morph;
  };

  Morph.create = function (domHelper, contextualElement, node) {
    var morph = new Morph(domHelper, contextualElement);
    morph.setNode(node);
    return morph;
  };

  Morph.attach = function (domHelper, contextualElement, firstNode, lastNode) {
    var morph = new Morph(domHelper, contextualElement);
    morph.setRange(firstNode, lastNode);
    return morph;
  };

  Morph.prototype.setContent = function Morph$setContent(content) {
    if (content === null || content === undefined) {
      return this.clear();
    }

    var type = typeof content;
    switch (type) {
      case 'string':
        if (this.parseTextAsHTML) {
          return this.domHelper.setMorphHTML(this, content);
        }
        return this.setText(content);
      case 'object':
        if (typeof content.nodeType === 'number') {
          return this.setNode(content);
        }
        /* Handlebars.SafeString */
        if (typeof content.toHTML === 'function') {
          return this.setHTML(content.toHTML());
        }
        if (this.parseTextAsHTML) {
          return this.setHTML(content.toString());
        }
      /* falls through */
      case 'boolean':
      case 'number':
        return this.setText(content.toString());
      case 'function':
        raiseCannotBindToFunction(content);
      default:
        throw new TypeError('unsupported content');
    }
  };

  function raiseCannotBindToFunction(content) {
    var functionName = content.name;
    var message;

    if (functionName) {
      message = 'Unsupported Content: Cannot bind to function `' + functionName + '`';
    } else {
      message = 'Unsupported Content: Cannot bind to function';
    }

    throw new TypeError(message);
  }

  Morph.prototype.clear = function Morph$clear() {
    var node = this.setNode(this.domHelper.createComment(''));
    return node;
  };

  Morph.prototype.setText = function Morph$setText(text) {
    var firstNode = this.firstNode;
    var lastNode = this.lastNode;

    if (firstNode && lastNode === firstNode && firstNode.nodeType === 3) {
      firstNode.nodeValue = text;
      return firstNode;
    }

    return this.setNode(text ? this.domHelper.createTextNode(text) : this.domHelper.createComment(''));
  };

  Morph.prototype.setNode = function Morph$setNode(newNode) {
    var firstNode, lastNode;
    switch (newNode.nodeType) {
      case 3:
        firstNode = newNode;
        lastNode = newNode;
        break;
      case 11:
        firstNode = newNode.firstChild;
        lastNode = newNode.lastChild;
        if (firstNode === null) {
          firstNode = this.domHelper.createComment('');
          newNode.appendChild(firstNode);
          lastNode = firstNode;
        }
        break;
      default:
        firstNode = newNode;
        lastNode = newNode;
        break;
    }

    this.setRange(firstNode, lastNode);

    return newNode;
  };

  Morph.prototype.setRange = function (firstNode, lastNode) {
    var previousFirstNode = this.firstNode;
    if (previousFirstNode !== null) {

      var parentNode = previousFirstNode.parentNode;
      if (parentNode !== null) {
        utils.insertBefore(parentNode, firstNode, lastNode, previousFirstNode);
        utils.clear(parentNode, previousFirstNode, this.lastNode);
      }
    }

    this.firstNode = firstNode;
    this.lastNode = lastNode;

    if (this.parentMorphList) {
      this._syncFirstNode();
      this._syncLastNode();
    }
  };

  Morph.prototype.destroy = function Morph$destroy() {
    this.unlink();

    var firstNode = this.firstNode;
    var lastNode = this.lastNode;
    var parentNode = firstNode && firstNode.parentNode;

    this.firstNode = null;
    this.lastNode = null;

    utils.clear(parentNode, firstNode, lastNode);
  };

  Morph.prototype.unlink = function Morph$unlink() {
    var parentMorphList = this.parentMorphList;
    var previousMorph = this.previousMorph;
    var nextMorph = this.nextMorph;

    if (previousMorph) {
      if (nextMorph) {
        previousMorph.nextMorph = nextMorph;
        nextMorph.previousMorph = previousMorph;
      } else {
        previousMorph.nextMorph = null;
        parentMorphList.lastChildMorph = previousMorph;
      }
    } else {
      if (nextMorph) {
        nextMorph.previousMorph = null;
        parentMorphList.firstChildMorph = nextMorph;
      } else if (parentMorphList) {
        parentMorphList.lastChildMorph = parentMorphList.firstChildMorph = null;
      }
    }

    this.parentMorphList = null;
    this.nextMorph = null;
    this.previousMorph = null;

    if (parentMorphList && parentMorphList.mountedMorph) {
      if (!parentMorphList.firstChildMorph) {
        // list is empty
        parentMorphList.mountedMorph.clear();
        return;
      } else {
        parentMorphList.firstChildMorph._syncFirstNode();
        parentMorphList.lastChildMorph._syncLastNode();
      }
    }
  };

  Morph.prototype.setHTML = function (text) {
    var fragment = this.domHelper.parseHTML(text, this.contextualElement);
    return this.setNode(fragment);
  };

  Morph.prototype.setMorphList = function Morph$appendMorphList(morphList) {
    morphList.mountedMorph = this;
    this.clear();

    var originalFirstNode = this.firstNode;

    if (morphList.firstChildMorph) {
      this.firstNode = morphList.firstChildMorph.firstNode;
      this.lastNode = morphList.lastChildMorph.lastNode;

      var current = morphList.firstChildMorph;

      while (current) {
        var next = current.nextMorph;
        current.insertBeforeNode(originalFirstNode, null);
        current = next;
      }
      originalFirstNode.parentNode.removeChild(originalFirstNode);
    }
  };

  Morph.prototype._syncFirstNode = function Morph$syncFirstNode() {
    var morph = this;
    var parentMorphList;
    while (parentMorphList = morph.parentMorphList) {
      if (parentMorphList.mountedMorph === null) {
        break;
      }
      if (morph !== parentMorphList.firstChildMorph) {
        break;
      }
      if (morph.firstNode === parentMorphList.mountedMorph.firstNode) {
        break;
      }

      parentMorphList.mountedMorph.firstNode = morph.firstNode;

      morph = parentMorphList.mountedMorph;
    }
  };

  Morph.prototype._syncLastNode = function Morph$syncLastNode() {
    var morph = this;
    var parentMorphList;
    while (parentMorphList = morph.parentMorphList) {
      if (parentMorphList.mountedMorph === null) {
        break;
      }
      if (morph !== parentMorphList.lastChildMorph) {
        break;
      }
      if (morph.lastNode === parentMorphList.mountedMorph.lastNode) {
        break;
      }

      parentMorphList.mountedMorph.lastNode = morph.lastNode;

      morph = parentMorphList.mountedMorph;
    }
  };

  Morph.prototype.insertBeforeNode = function Morph$insertBeforeNode(parentNode, refNode) {
    utils.insertBefore(parentNode, this.firstNode, this.lastNode, refNode);
  };

  Morph.prototype.appendToNode = function Morph$appendToNode(parentNode) {
    utils.insertBefore(parentNode, this.firstNode, this.lastNode, null);
  };

  exports.default = Morph;
  module.exports = exports.default;

  });

  unwrapExports(morphRange);

  var morph = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }



  var _morphRange2 = _interopRequireDefault(morphRange);

  var guid = 1;

  function HTMLBarsMorph(domHelper, contextualElement) {
    this.super$constructor(domHelper, contextualElement);

    this._state = undefined;
    this.ownerNode = null;
    this.isDirty = false;
    this.isSubtreeDirty = false;
    this.lastYielded = null;
    this.lastResult = null;
    this.lastValue = null;
    this.buildChildEnv = null;
    this.morphList = null;
    this.morphMap = null;
    this.key = null;
    this.linkedParams = null;
    this.linkedResult = null;
    this.childNodes = null;
    this.rendered = false;
    this.guid = "range" + guid++;
    this.seen = false;
  }

  HTMLBarsMorph.empty = function (domHelper, contextualElement) {
    var morph = new HTMLBarsMorph(domHelper, contextualElement);
    morph.clear();
    return morph;
  };

  HTMLBarsMorph.create = function (domHelper, contextualElement, node) {
    var morph = new HTMLBarsMorph(domHelper, contextualElement);
    morph.setNode(node);
    return morph;
  };

  HTMLBarsMorph.attach = function (domHelper, contextualElement, firstNode, lastNode) {
    var morph = new HTMLBarsMorph(domHelper, contextualElement);
    morph.setRange(firstNode, lastNode);
    return morph;
  };

  var prototype = HTMLBarsMorph.prototype = Object.create(_morphRange2.default.prototype);
  prototype.constructor = HTMLBarsMorph;
  prototype.super$constructor = _morphRange2.default;

  prototype.getState = function () {
    if (!this._state) {
      this._state = {};
    }

    return this._state;
  };

  prototype.setState = function (newState) {
    /*jshint -W093 */

    return this._state = newState;
  };

  exports.default = HTMLBarsMorph;
  module.exports = exports.default;

  });

  unwrapExports(morph);

  var sanitizeAttributeValue_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.sanitizeAttributeValue = sanitizeAttributeValue;
  /* jshint scripturl:true */

  var badProtocols = {
    'javascript:': true,
    'vbscript:': true
  };

  var badTags = {
    'A': true,
    'BODY': true,
    'LINK': true,
    'IMG': true,
    'IFRAME': true,
    'BASE': true,
    'FORM': true
  };

  var badTagsForDataURI = {
    'EMBED': true
  };

  var badAttributes = {
    'href': true,
    'src': true,
    'background': true,
    'action': true
  };

  exports.badAttributes = badAttributes;
  var badAttributesForDataURI = {
    'src': true
  };

  function sanitizeAttributeValue(dom, element, attribute, value) {
    var tagName;

    if (!element) {
      tagName = null;
    } else {
      tagName = element.tagName.toUpperCase();
    }

    if (value && value.toHTML) {
      return value.toHTML();
    }

    if ((tagName === null || badTags[tagName]) && badAttributes[attribute]) {
      var protocol = dom.protocolForURL(value);
      if (badProtocols[protocol] === true) {
        return 'unsafe:' + value;
      }
    }

    if (badTagsForDataURI[tagName] && badAttributesForDataURI[attribute]) {
      return 'unsafe:' + value;
    }

    return value;
  }

  });

  unwrapExports(sanitizeAttributeValue_1);
  var sanitizeAttributeValue_2 = sanitizeAttributeValue_1.sanitizeAttributeValue;
  var sanitizeAttributeValue_3 = sanitizeAttributeValue_1.badAttributes;

  var prop = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.isAttrRemovalValue = isAttrRemovalValue;
  exports.normalizeProperty = normalizeProperty;

  function isAttrRemovalValue(value) {
    return value === null || value === undefined;
  }

  /*
   *
   * @method normalizeProperty
   * @param element {HTMLElement}
   * @param slotName {String}
   * @returns {Object} { name, type }
   */

  function normalizeProperty(element, slotName) {
    var type, normalized;

    if (slotName in element) {
      normalized = slotName;
      type = 'prop';
    } else {
      var lower = slotName.toLowerCase();
      if (lower in element) {
        type = 'prop';
        normalized = lower;
      } else {
        type = 'attr';
        normalized = slotName;
      }
    }

    if (type === 'prop' && (normalized.toLowerCase() === 'style' || preferAttr(element.tagName, normalized))) {
      type = 'attr';
    }

    return { normalized: normalized, type: type };
  }

  // properties that MUST be set as attributes, due to:
  // * browser bug
  // * strange spec outlier
  var ATTR_OVERRIDES = {

    // phantomjs < 2.0 lets you set it as a prop but won't reflect it
    // back to the attribute. button.getAttribute('type') === null
    BUTTON: { type: true, form: true },

    INPUT: {
      // TODO: remove when IE8 is droped
      // Some versions of IE (IE8) throw an exception when setting
      // `input.list = 'somestring'`:
      // https://github.com/emberjs/ember.js/issues/10908
      // https://github.com/emberjs/ember.js/issues/11364
      list: true,
      // Some version of IE (like IE9) actually throw an exception
      // if you set input.type = 'something-unknown'
      type: true,
      form: true,
      // Chrome 46.0.2464.0: 'autocorrect' in document.createElement('input') === false
      // Safari 8.0.7: 'autocorrect' in document.createElement('input') === false
      // Mobile Safari (iOS 8.4 simulator): 'autocorrect' in document.createElement('input') === true
      autocorrect: true
    },

    // element.form is actually a legitimate readOnly property, that is to be
    // mutated, but must be mutated by setAttribute...
    SELECT: { form: true },
    OPTION: { form: true },
    TEXTAREA: { form: true },
    LABEL: { form: true },
    FIELDSET: { form: true },
    LEGEND: { form: true },
    OBJECT: { form: true }
  };

  function preferAttr(tagName, propName) {
    var tag = ATTR_OVERRIDES[tagName.toUpperCase()];
    return tag && tag[propName.toLowerCase()] || false;
  }

  });

  unwrapExports(prop);
  var prop_1 = prop.isAttrRemovalValue;
  var prop_2 = prop.normalizeProperty;

  var buildHtmlDom = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  /* global XMLSerializer:false */
  var svgHTMLIntegrationPoints = { foreignObject: 1, desc: 1, title: 1 };
  exports.svgHTMLIntegrationPoints = svgHTMLIntegrationPoints;
  var svgNamespace = 'http://www.w3.org/2000/svg';

  exports.svgNamespace = svgNamespace;
  var doc = typeof document === 'undefined' ? false : document;

  // Safari does not like using innerHTML on SVG HTML integration
  // points (desc/title/foreignObject).
  var needsIntegrationPointFix = doc && (function (document) {
    if (document.createElementNS === undefined) {
      return;
    }
    // In FF title will not accept innerHTML.
    var testEl = document.createElementNS(svgNamespace, 'title');
    testEl.innerHTML = "<div></div>";
    return testEl.childNodes.length === 0 || testEl.childNodes[0].nodeType !== 1;
  })(doc);

  // Internet Explorer prior to 9 does not allow setting innerHTML if the first element
  // is a "zero-scope" element. This problem can be worked around by making
  // the first node an invisible text node. We, like Modernizr, use &shy;
  var needsShy = doc && (function (document) {
    var testEl = document.createElement('div');
    testEl.innerHTML = "<div></div>";
    testEl.firstChild.innerHTML = "<script><\/script>";
    return testEl.firstChild.innerHTML === '';
  })(doc);

  // IE 8 (and likely earlier) likes to move whitespace preceeding
  // a script tag to appear after it. This means that we can
  // accidentally remove whitespace when updating a morph.
  var movesWhitespace = doc && (function (document) {
    var testEl = document.createElement('div');
    testEl.innerHTML = "Test: <script type='text/x-placeholder'><\/script>Value";
    return testEl.childNodes[0].nodeValue === 'Test:' && testEl.childNodes[2].nodeValue === ' Value';
  })(doc);

  var tagNamesRequiringInnerHTMLFix = doc && (function (document) {
    var tagNamesRequiringInnerHTMLFix;
    // IE 9 and earlier don't allow us to set innerHTML on col, colgroup, frameset,
    // html, style, table, tbody, tfoot, thead, title, tr. Detect this and add
    // them to an initial list of corrected tags.
    //
    // Here we are only dealing with the ones which can have child nodes.
    //
    var tableNeedsInnerHTMLFix;
    var tableInnerHTMLTestElement = document.createElement('table');
    try {
      tableInnerHTMLTestElement.innerHTML = '<tbody></tbody>';
    } catch (e) {} finally {
      tableNeedsInnerHTMLFix = tableInnerHTMLTestElement.childNodes.length === 0;
    }
    if (tableNeedsInnerHTMLFix) {
      tagNamesRequiringInnerHTMLFix = {
        colgroup: ['table'],
        table: [],
        tbody: ['table'],
        tfoot: ['table'],
        thead: ['table'],
        tr: ['table', 'tbody']
      };
    }

    // IE 8 doesn't allow setting innerHTML on a select tag. Detect this and
    // add it to the list of corrected tags.
    //
    var selectInnerHTMLTestElement = document.createElement('select');
    selectInnerHTMLTestElement.innerHTML = '<option></option>';
    if (!selectInnerHTMLTestElement.childNodes[0]) {
      tagNamesRequiringInnerHTMLFix = tagNamesRequiringInnerHTMLFix || {};
      tagNamesRequiringInnerHTMLFix.select = [];
    }
    return tagNamesRequiringInnerHTMLFix;
  })(doc);

  function scriptSafeInnerHTML(element, html) {
    // without a leading text node, IE will drop a leading script tag.
    html = '&shy;' + html;

    element.innerHTML = html;

    var nodes = element.childNodes;

    // Look for &shy; to remove it.
    var shyElement = nodes[0];
    while (shyElement.nodeType === 1 && !shyElement.nodeName) {
      shyElement = shyElement.firstChild;
    }
    // At this point it's the actual unicode character.
    if (shyElement.nodeType === 3 && shyElement.nodeValue.charAt(0) === "\u00AD") {
      var newValue = shyElement.nodeValue.slice(1);
      if (newValue.length) {
        shyElement.nodeValue = shyElement.nodeValue.slice(1);
      } else {
        shyElement.parentNode.removeChild(shyElement);
      }
    }

    return nodes;
  }

  function buildDOMWithFix(html, contextualElement) {
    var tagName = contextualElement.tagName;

    // Firefox versions < 11 do not have support for element.outerHTML.
    var outerHTML = contextualElement.outerHTML || new XMLSerializer().serializeToString(contextualElement);
    if (!outerHTML) {
      throw "Can't set innerHTML on " + tagName + " in this browser";
    }

    html = fixSelect(html, contextualElement);

    var wrappingTags = tagNamesRequiringInnerHTMLFix[tagName.toLowerCase()];

    var startTag = outerHTML.match(new RegExp("<" + tagName + "([^>]*)>", 'i'))[0];
    var endTag = '</' + tagName + '>';

    var wrappedHTML = [startTag, html, endTag];

    var i = wrappingTags.length;
    var wrappedDepth = 1 + i;
    while (i--) {
      wrappedHTML.unshift('<' + wrappingTags[i] + '>');
      wrappedHTML.push('</' + wrappingTags[i] + '>');
    }

    var wrapper = document.createElement('div');
    scriptSafeInnerHTML(wrapper, wrappedHTML.join(''));
    var element = wrapper;
    while (wrappedDepth--) {
      element = element.firstChild;
      while (element && element.nodeType !== 1) {
        element = element.nextSibling;
      }
    }
    while (element && element.tagName !== tagName) {
      element = element.nextSibling;
    }
    return element ? element.childNodes : [];
  }

  var buildDOM;
  if (needsShy) {
    buildDOM = function buildDOM(html, contextualElement, dom) {
      html = fixSelect(html, contextualElement);

      contextualElement = dom.cloneNode(contextualElement, false);
      scriptSafeInnerHTML(contextualElement, html);
      return contextualElement.childNodes;
    };
  } else {
    buildDOM = function buildDOM(html, contextualElement, dom) {
      html = fixSelect(html, contextualElement);

      contextualElement = dom.cloneNode(contextualElement, false);
      contextualElement.innerHTML = html;
      return contextualElement.childNodes;
    };
  }

  function fixSelect(html, contextualElement) {
    if (contextualElement.tagName === 'SELECT') {
      html = "<option></option>" + html;
    }

    return html;
  }

  var buildIESafeDOM;
  if (tagNamesRequiringInnerHTMLFix || movesWhitespace) {
    buildIESafeDOM = function buildIESafeDOM(html, contextualElement, dom) {
      // Make a list of the leading text on script nodes. Include
      // script tags without any whitespace for easier processing later.
      var spacesBefore = [];
      var spacesAfter = [];
      if (typeof html === 'string') {
        html = html.replace(/(\s*)(<script)/g, function (match, spaces, tag) {
          spacesBefore.push(spaces);
          return tag;
        });

        html = html.replace(/(<\/script>)(\s*)/g, function (match, tag, spaces) {
          spacesAfter.push(spaces);
          return tag;
        });
      }

      // Fetch nodes
      var nodes;
      if (tagNamesRequiringInnerHTMLFix[contextualElement.tagName.toLowerCase()]) {
        // buildDOMWithFix uses string wrappers for problematic innerHTML.
        nodes = buildDOMWithFix(html, contextualElement);
      } else {
        nodes = buildDOM(html, contextualElement, dom);
      }

      // Build a list of script tags, the nodes themselves will be
      // mutated as we add test nodes.
      var i, j, node, nodeScriptNodes;
      var scriptNodes = [];
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        if (node.nodeType !== 1) {
          continue;
        }
        if (node.tagName === 'SCRIPT') {
          scriptNodes.push(node);
        } else {
          nodeScriptNodes = node.getElementsByTagName('script');
          for (j = 0; j < nodeScriptNodes.length; j++) {
            scriptNodes.push(nodeScriptNodes[j]);
          }
        }
      }

      // Walk the script tags and put back their leading text nodes.
      var scriptNode, textNode, spaceBefore, spaceAfter;
      for (i = 0; i < scriptNodes.length; i++) {
        scriptNode = scriptNodes[i];
        spaceBefore = spacesBefore[i];
        if (spaceBefore && spaceBefore.length > 0) {
          textNode = dom.document.createTextNode(spaceBefore);
          scriptNode.parentNode.insertBefore(textNode, scriptNode);
        }

        spaceAfter = spacesAfter[i];
        if (spaceAfter && spaceAfter.length > 0) {
          textNode = dom.document.createTextNode(spaceAfter);
          scriptNode.parentNode.insertBefore(textNode, scriptNode.nextSibling);
        }
      }

      return nodes;
    };
  } else {
    buildIESafeDOM = buildDOM;
  }

  var buildHTMLDOM;
  if (needsIntegrationPointFix) {
    exports.buildHTMLDOM = buildHTMLDOM = function buildHTMLDOM(html, contextualElement, dom) {
      if (svgHTMLIntegrationPoints[contextualElement.tagName]) {
        return buildIESafeDOM(html, document.createElement('div'), dom);
      } else {
        return buildIESafeDOM(html, contextualElement, dom);
      }
    };
  } else {
    exports.buildHTMLDOM = buildHTMLDOM = buildIESafeDOM;
  }

  exports.buildHTMLDOM = buildHTMLDOM;

  });

  unwrapExports(buildHtmlDom);
  var buildHtmlDom_1 = buildHtmlDom.svgHTMLIntegrationPoints;
  var buildHtmlDom_2 = buildHtmlDom.svgNamespace;
  var buildHtmlDom_3 = buildHtmlDom.buildHTMLDOM;

  var safeString = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
    return '' + this.string;
  };

  exports.default = SafeString;
  module.exports = exports.default;

  });

  unwrapExports(safeString);

  var safeString$2 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _handlebarsSafeString2 = _interopRequireDefault(safeString);

  exports.default = _handlebarsSafeString2.default;
  module.exports = exports.default;

  });

  unwrapExports(safeString$2);

  var utils$2 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.extend = extend;
  exports.indexOf = indexOf;
  exports.escapeExpression = escapeExpression;
  exports.isEmpty = isEmpty;
  exports.blockParams = blockParams;
  exports.appendContextPath = appendContextPath;
  var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  var badChars = /[&<>"'`]/g,
      possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr];
  }

  function extend(obj /* , ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          obj[key] = arguments[i][key];
        }
      }
    }

    return obj;
  }

  var toString = Object.prototype.toString;

  exports.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  /*eslint-disable func-style, no-var */
  var isFunction = function (value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  /* istanbul ignore next */
  if (isFunction(/x/)) {
    exports.isFunction = isFunction = function (value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  exports.isFunction = isFunction;
  /*eslint-enable func-style, no-var */

  /* istanbul ignore next */
  var isArray = Array.isArray || function (value) {
    return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
  };

  exports.isArray = isArray;
  // Older IE versions do not directly support indexOf so we must implement our own, sadly.

  function indexOf(array, value) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  function escapeExpression(string) {
    if (typeof string !== 'string') {
      // don't escape SafeStrings, since they're already safe
      if (string && string.toHTML) {
        return string.toHTML();
      } else if (string == null) {
        return '';
      } else if (!string) {
        return string + '';
      }

      // Force a string conversion as this will be done by the append regardless and
      // the regex test will do this transparently behind the scenes, causing issues if
      // an object's to string has escaped characters in it.
      string = '' + string;
    }

    if (!possible.test(string)) {
      return string;
    }
    return string.replace(badChars, escapeChar);
  }

  function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function blockParams(params, ids) {
    params.path = ids;
    return params;
  }

  function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
  }

  });

  unwrapExports(utils$2);
  var utils_1$1 = utils$2.extend;
  var utils_2$1 = utils$2.indexOf;
  var utils_3 = utils$2.escapeExpression;
  var utils_4 = utils$2.isEmpty;
  var utils_5 = utils$2.blockParams;
  var utils_6 = utils$2.appendContextPath;
  var utils_7 = utils$2.isFunction;
  var utils_8 = utils$2.isArray;

  var namespaces = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.getAttrNamespace = getAttrNamespace;
  // ref http://dev.w3.org/html5/spec-LC/namespaces.html
  var defaultNamespaces = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace'
  };

  function getAttrNamespace(attrName, detectedNamespace) {
    if (detectedNamespace) {
      return detectedNamespace;
    }

    var namespace;

    var colonIndex = attrName.indexOf(':');
    if (colonIndex !== -1) {
      var prefix = attrName.slice(0, colonIndex);
      namespace = defaultNamespaces[prefix];
    }

    return namespace || null;
  }

  });

  unwrapExports(namespaces);
  var namespaces_1 = namespaces.getAttrNamespace;

  var morphUtils = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.visitChildren = visitChildren;
  exports.validateChildMorphs = validateChildMorphs;
  exports.linkParams = linkParams;
  exports.dump = dump;
  /*globals console*/

  function visitChildren(nodes, callback) {
    if (!nodes || nodes.length === 0) {
      return;
    }

    nodes = nodes.slice();

    while (nodes.length) {
      var node = nodes.pop();
      callback(node);

      if (node.childNodes) {
        nodes.push.apply(nodes, node.childNodes);
      } else if (node.firstChildMorph) {
        var current = node.firstChildMorph;

        while (current) {
          nodes.push(current);
          current = current.nextMorph;
        }
      } else if (node.morphList) {
        var current = node.morphList.firstChildMorph;

        while (current) {
          nodes.push(current);
          current = current.nextMorph;
        }
      }
    }
  }

  function validateChildMorphs(env, morph, visitor) {
    var morphList = morph.morphList;
    if (morph.morphList) {
      var current = morphList.firstChildMorph;

      while (current) {
        var next = current.nextMorph;
        validateChildMorphs(env, current, visitor);
        current = next;
      }
    } else if (morph.lastResult) {
      morph.lastResult.revalidateWith(env, undefined, undefined, undefined, visitor);
    } else if (morph.childNodes) {
      // This means that the childNodes were wired up manually
      for (var i = 0, l = morph.childNodes.length; i < l; i++) {
        validateChildMorphs(env, morph.childNodes[i], visitor);
      }
    }
  }

  function linkParams(env, scope, morph, path, params, hash) {
    if (morph.linkedParams) {
      return;
    }

    if (env.hooks.linkRenderNode(morph, env, scope, path, params, hash)) {
      morph.linkedParams = { params: params, hash: hash };
    }
  }

  function dump(node) {
    console.group(node, node.isDirty);

    if (node.childNodes) {
      map(node.childNodes, dump);
    } else if (node.firstChildMorph) {
      var current = node.firstChildMorph;

      while (current) {
        dump(current);
        current = current.nextMorph;
      }
    } else if (node.morphList) {
      dump(node.morphList);
    }

    console.groupEnd();
  }

  function map(nodes, cb) {
    for (var i = 0, l = nodes.length; i < l; i++) {
      cb(nodes[i]);
    }
  }

  });

  unwrapExports(morphUtils);
  var morphUtils_1 = morphUtils.visitChildren;
  var morphUtils_2 = morphUtils.validateChildMorphs;
  var morphUtils_3 = morphUtils.linkParams;
  var morphUtils_4 = morphUtils.dump;

  var htmlbarsUtil = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _htmlbarsUtilSafeString2 = _interopRequireDefault(safeString$2);







  exports.SafeString = _htmlbarsUtilSafeString2.default;
  exports.escapeExpression = utils$2.escapeExpression;
  exports.getAttrNamespace = namespaces.getAttrNamespace;
  exports.validateChildMorphs = morphUtils.validateChildMorphs;
  exports.linkParams = morphUtils.linkParams;
  exports.dump = morphUtils.dump;

  });

  unwrapExports(htmlbarsUtil);
  var htmlbarsUtil_1 = htmlbarsUtil.SafeString;
  var htmlbarsUtil_2 = htmlbarsUtil.escapeExpression;
  var htmlbarsUtil_3 = htmlbarsUtil.getAttrNamespace;
  var htmlbarsUtil_4 = htmlbarsUtil.validateChildMorphs;
  var htmlbarsUtil_5 = htmlbarsUtil.linkParams;
  var htmlbarsUtil_6 = htmlbarsUtil.dump;

  var morphAttr = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;









  function getProperty() {
    return this.domHelper.getPropertyStrict(this.element, this.attrName);
  }

  function updateProperty(value) {
    if (this._renderedInitially === true || !prop.isAttrRemovalValue(value)) {
      var element = this.element;
      var attrName = this.attrName;

      if (attrName === 'value' && element.tagName === 'INPUT' && element.value === value) ; else {
          // do not render if initial value is undefined or null
          this.domHelper.setPropertyStrict(element, attrName, value);
        }
    }

    this._renderedInitially = true;
  }

  function getAttribute() {
    return this.domHelper.getAttribute(this.element, this.attrName);
  }

  // normalize to be more inline with updateProperty behavior
  function normalizeAttributeValue(value) {
    if (value === false || value === undefined || value === null) {
      return null;
    }
    if (value === true) {
      return '';
    }
    // onclick function etc in SSR
    if (typeof value === 'function') {
      return null;
    }
    return String(value);
  }

  function updateAttribute(_value) {
    var value = normalizeAttributeValue(_value);
    if (prop.isAttrRemovalValue(value)) {
      this.domHelper.removeAttribute(this.element, this.attrName);
    } else {
      this.domHelper.setAttribute(this.element, this.attrName, value);
    }
  }

  function getAttributeNS() {
    return this.domHelper.getAttributeNS(this.element, this.namespace, this.attrName);
  }

  function updateAttributeNS(_value) {
    var value = normalizeAttributeValue(_value);
    if (prop.isAttrRemovalValue(value)) {
      this.domHelper.removeAttribute(this.element, this.attrName);
    } else {
      this.domHelper.setAttributeNS(this.element, this.namespace, this.attrName, value);
    }
  }

  var UNSET = { unset: true };

  var guid = 1;

  AttrMorph.create = function (element, attrName, domHelper, namespace) {
    var ns = htmlbarsUtil.getAttrNamespace(attrName, namespace);

    if (ns) {
      return new AttributeNSAttrMorph(element, attrName, domHelper, ns);
    } else {
      return createNonNamespacedAttrMorph(element, attrName, domHelper);
    }
  };

  function createNonNamespacedAttrMorph(element, attrName, domHelper) {
    var _normalizeProperty = prop.normalizeProperty(element, attrName);

    var normalized = _normalizeProperty.normalized;
    var type = _normalizeProperty.type;

    if (element.namespaceURI === buildHtmlDom.svgNamespace || attrName === 'style' || type === 'attr') {
      return new AttributeAttrMorph(element, normalized, domHelper);
    } else {
      return new PropertyAttrMorph(element, normalized, domHelper);
    }
  }

  function AttrMorph(element, attrName, domHelper) {
    this.element = element;
    this.domHelper = domHelper;
    this.attrName = attrName;
    this._state = undefined;
    this.isDirty = false;
    this.isSubtreeDirty = false;
    this.escaped = true;
    this.lastValue = UNSET;
    this.lastResult = null;
    this.lastYielded = null;
    this.childNodes = null;
    this.linkedParams = null;
    this.linkedResult = null;
    this.guid = "attr" + guid++;
    this.seen = false;
    this.ownerNode = null;
    this.rendered = false;
    this._renderedInitially = false;
    this.namespace = undefined;
    this.didInit();
  }

  AttrMorph.prototype.getState = function () {
    if (!this._state) {
      this._state = {};
    }

    return this._state;
  };

  AttrMorph.prototype.setState = function (newState) {
    /*jshint -W093 */

    return this._state = newState;
  };

  AttrMorph.prototype.didInit = function () {};
  AttrMorph.prototype.willSetContent = function () {};

  AttrMorph.prototype.setContent = function (value) {
    this.willSetContent(value);

    if (this.lastValue === value) {
      return;
    }
    this.lastValue = value;

    if (this.escaped) {
      var sanitized = sanitizeAttributeValue_1.sanitizeAttributeValue(this.domHelper, this.element, this.attrName, value);
      this._update(sanitized, this.namespace);
    } else {
      this._update(value, this.namespace);
    }
  };

  AttrMorph.prototype.getContent = function () {
    var value = this.lastValue = this._get();
    return value;
  };

  // renderAndCleanup calls `clear` on all items in the morph map
  // just before calling `destroy` on the morph.
  //
  // As a future refactor this could be changed to set the property
  // back to its original/default value.
  AttrMorph.prototype.clear = function () {};

  AttrMorph.prototype.destroy = function () {
    this.element = null;
    this.domHelper = null;
  };

  AttrMorph.prototype._$superAttrMorph = AttrMorph;

  function PropertyAttrMorph(element, attrName, domHelper) {
    this._$superAttrMorph(element, attrName, domHelper);
  }

  PropertyAttrMorph.prototype = Object.create(AttrMorph.prototype);
  PropertyAttrMorph.prototype._update = updateProperty;
  PropertyAttrMorph.prototype._get = getProperty;

  function AttributeNSAttrMorph(element, attrName, domHelper, namespace) {
    this._$superAttrMorph(element, attrName, domHelper);
    this.namespace = namespace;
  }

  AttributeNSAttrMorph.prototype = Object.create(AttrMorph.prototype);
  AttributeNSAttrMorph.prototype._update = updateAttributeNS;
  AttributeNSAttrMorph.prototype._get = getAttributeNS;

  function AttributeAttrMorph(element, attrName, domHelper) {
    this._$superAttrMorph(element, attrName, domHelper);
  }

  AttributeAttrMorph.prototype = Object.create(AttrMorph.prototype);
  AttributeAttrMorph.prototype._update = updateAttribute;
  AttributeAttrMorph.prototype._get = getAttribute;

  exports.default = AttrMorph;
  exports.sanitizeAttributeValue = sanitizeAttributeValue_1.sanitizeAttributeValue;

  });

  unwrapExports(morphAttr);
  var morphAttr_1 = morphAttr.sanitizeAttributeValue;

  var classes = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  var doc = typeof document === 'undefined' ? false : document;

  // PhantomJS has a broken classList. See https://github.com/ariya/phantomjs/issues/12782
  var canClassList = doc && (function () {
    var d = document.createElement('div');
    if (!d.classList) {
      return false;
    }
    d.classList.add('boo');
    d.classList.add('boo', 'baz');
    return d.className === 'boo baz';
  })();

  function buildClassList(element) {
    var classString = element.getAttribute('class') || '';
    return classString !== '' && classString !== ' ' ? classString.split(' ') : [];
  }

  function intersect(containingArray, valuesArray) {
    var containingIndex = 0;
    var containingLength = containingArray.length;
    var valuesIndex = 0;
    var valuesLength = valuesArray.length;

    var intersection = new Array(valuesLength);

    // TODO: rewrite this loop in an optimal manner
    for (; containingIndex < containingLength; containingIndex++) {
      valuesIndex = 0;
      for (; valuesIndex < valuesLength; valuesIndex++) {
        if (valuesArray[valuesIndex] === containingArray[containingIndex]) {
          intersection[valuesIndex] = containingIndex;
          break;
        }
      }
    }

    return intersection;
  }

  function addClassesViaAttribute(element, classNames) {
    var existingClasses = buildClassList(element);

    var indexes = intersect(existingClasses, classNames);
    var didChange = false;

    for (var i = 0, l = classNames.length; i < l; i++) {
      if (indexes[i] === undefined) {
        didChange = true;
        existingClasses.push(classNames[i]);
      }
    }

    if (didChange) {
      element.setAttribute('class', existingClasses.length > 0 ? existingClasses.join(' ') : '');
    }
  }

  function removeClassesViaAttribute(element, classNames) {
    var existingClasses = buildClassList(element);

    var indexes = intersect(classNames, existingClasses);
    var didChange = false;
    var newClasses = [];

    for (var i = 0, l = existingClasses.length; i < l; i++) {
      if (indexes[i] === undefined) {
        newClasses.push(existingClasses[i]);
      } else {
        didChange = true;
      }
    }

    if (didChange) {
      element.setAttribute('class', newClasses.length > 0 ? newClasses.join(' ') : '');
    }
  }

  var addClasses, removeClasses;
  if (canClassList) {
    exports.addClasses = addClasses = function addClasses(element, classNames) {
      if (element.classList) {
        if (classNames.length === 1) {
          element.classList.add(classNames[0]);
        } else if (classNames.length === 2) {
          element.classList.add(classNames[0], classNames[1]);
        } else {
          element.classList.add.apply(element.classList, classNames);
        }
      } else {
        addClassesViaAttribute(element, classNames);
      }
    };
    exports.removeClasses = removeClasses = function removeClasses(element, classNames) {
      if (element.classList) {
        if (classNames.length === 1) {
          element.classList.remove(classNames[0]);
        } else if (classNames.length === 2) {
          element.classList.remove(classNames[0], classNames[1]);
        } else {
          element.classList.remove.apply(element.classList, classNames);
        }
      } else {
        removeClassesViaAttribute(element, classNames);
      }
    };
  } else {
    exports.addClasses = addClasses = addClassesViaAttribute;
    exports.removeClasses = removeClasses = removeClassesViaAttribute;
  }

  exports.addClasses = addClasses;
  exports.removeClasses = removeClasses;

  });

  unwrapExports(classes);
  var classes_1 = classes.addClasses;
  var classes_2 = classes.removeClasses;

  var domHelper = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /*globals module, URL*/



  var _htmlbarsRuntimeMorph2 = _interopRequireDefault(morph);



  var _morphAttr2 = _interopRequireDefault(morphAttr);







  var doc = typeof document === 'undefined' ? false : document;

  var deletesBlankTextNodes = doc && (function (document) {
    var element = document.createElement('div');
    element.appendChild(document.createTextNode(''));
    var clonedElement = element.cloneNode(true);
    return clonedElement.childNodes.length === 0;
  })(doc);

  var ignoresCheckedAttribute = doc && (function (document) {
    var element = document.createElement('input');
    element.setAttribute('checked', 'checked');
    var clonedElement = element.cloneNode(false);
    return !clonedElement.checked;
  })(doc);

  var canRemoveSvgViewBoxAttribute = doc && (doc.createElementNS ? (function (document) {
    var element = document.createElementNS(buildHtmlDom.svgNamespace, 'svg');
    element.setAttribute('viewBox', '0 0 100 100');
    element.removeAttribute('viewBox');
    return !element.getAttribute('viewBox');
  })(doc) : true);

  var canClone = doc && (function (document) {
    var element = document.createElement('div');
    element.appendChild(document.createTextNode(' '));
    element.appendChild(document.createTextNode(' '));
    var clonedElement = element.cloneNode(true);
    return clonedElement.childNodes[0].nodeValue === ' ';
  })(doc);

  // This is not the namespace of the element, but of
  // the elements inside that elements.
  function interiorNamespace(element) {
    if (element && element.namespaceURI === buildHtmlDom.svgNamespace && !buildHtmlDom.svgHTMLIntegrationPoints[element.tagName]) {
      return buildHtmlDom.svgNamespace;
    } else {
      return null;
    }
  }

  // The HTML spec allows for "omitted start tags". These tags are optional
  // when their intended child is the first thing in the parent tag. For
  // example, this is a tbody start tag:
  //
  // <table>
  //   <tbody>
  //     <tr>
  //
  // The tbody may be omitted, and the browser will accept and render:
  //
  // <table>
  //   <tr>
  //
  // However, the omitted start tag will still be added to the DOM. Here
  // we test the string and context to see if the browser is about to
  // perform this cleanup.
  //
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html#optional-tags
  // describes which tags are omittable. The spec for tbody and colgroup
  // explains this behavior:
  //
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tables.html#the-tbody-element
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tables.html#the-colgroup-element
  //

  var omittedStartTagChildTest = /<([\w:]+)/;
  function detectOmittedStartTag(string, contextualElement) {
    // Omitted start tags are only inside table tags.
    if (contextualElement.tagName === 'TABLE') {
      var omittedStartTagChildMatch = omittedStartTagChildTest.exec(string);
      if (omittedStartTagChildMatch) {
        var omittedStartTagChild = omittedStartTagChildMatch[1];
        // It is already asserted that the contextual element is a table
        // and not the proper start tag. Just see if a tag was omitted.
        return omittedStartTagChild === 'tr' || omittedStartTagChild === 'col';
      }
    }
  }

  function buildSVGDOM(html, dom) {
    var div = dom.document.createElement('div');
    div.innerHTML = '<svg>' + html + '</svg>';
    return div.firstChild.childNodes;
  }

  var guid = 1;

  function ElementMorph(element, dom, namespace) {
    this.element = element;
    this.dom = dom;
    this.namespace = namespace;
    this.guid = "element" + guid++;

    this._state = undefined;
    this.isDirty = true;
  }

  ElementMorph.prototype.getState = function () {
    if (!this._state) {
      this._state = {};
    }

    return this._state;
  };

  ElementMorph.prototype.setState = function (newState) {
    /*jshint -W093 */

    return this._state = newState;
  };

  // renderAndCleanup calls `clear` on all items in the morph map
  // just before calling `destroy` on the morph.
  //
  // As a future refactor this could be changed to set the property
  // back to its original/default value.
  ElementMorph.prototype.clear = function () {};

  ElementMorph.prototype.destroy = function () {
    this.element = null;
    this.dom = null;
  };

  /*
   * A class wrapping DOM functions to address environment compatibility,
   * namespaces, contextual elements for morph un-escaped content
   * insertion.
   *
   * When entering a template, a DOMHelper should be passed:
   *
   *   template(context, { hooks: hooks, dom: new DOMHelper() });
   *
   * TODO: support foreignObject as a passed contextual element. It has
   * a namespace (svg) that does not match its internal namespace
   * (xhtml).
   *
   * @class DOMHelper
   * @constructor
   * @param {HTMLDocument} _document The document DOM methods are proxied to
   */
  function DOMHelper(_document) {
    this.document = _document || document;
    if (!this.document) {
      throw new Error("A document object must be passed to the DOMHelper, or available on the global scope");
    }
    this.canClone = canClone;
    this.namespace = null;

    installEnvironmentSpecificMethods(this);
  }

  var prototype = DOMHelper.prototype;
  prototype.constructor = DOMHelper;

  prototype.getElementById = function (id, rootNode) {
    rootNode = rootNode || this.document;
    return rootNode.getElementById(id);
  };

  prototype.insertBefore = function (element, childElement, referenceChild) {
    return element.insertBefore(childElement, referenceChild);
  };

  prototype.appendChild = function (element, childElement) {
    return element.appendChild(childElement);
  };

  var itemAt;

  // It appears that sometimes, in yet to be itentified scenarios PhantomJS 2.0
  // crashes on childNodes.item(index), but works as expected with childNodes[index];
  //
  // Although it would be nice to move to childNodes[index] in all scenarios,
  // this would require SimpleDOM to maintain the childNodes array. This would be
  // quite costly, in both dev time and runtime.
  //
  // So instead, we choose the best possible method and call it a day.
  //
  /*global navigator */
  if (typeof navigator !== 'undefined' && navigator.userAgent.indexOf('PhantomJS')) {
    itemAt = function (nodes, index) {
      return nodes[index];
    };
  } else {
    itemAt = function (nodes, index) {
      return nodes.item(index);
    };
  }

  prototype.childAt = function (element, indices) {
    var child = element;

    for (var i = 0; i < indices.length; i++) {
      child = itemAt(child.childNodes, indices[i]);
    }

    return child;
  };

  // Note to a Fellow Implementor:
  // Ahh, accessing a child node at an index. Seems like it should be so simple,
  // doesn't it? Unfortunately, this particular method has caused us a surprising
  // amount of pain. As you'll note below, this method has been modified to walk
  // the linked list of child nodes rather than access the child by index
  // directly, even though there are two (2) APIs in the DOM that do this for us.
  // If you're thinking to yourself, "What an oversight! What an opportunity to
  // optimize this code!" then to you I say: stop! For I have a tale to tell.
  //
  // First, this code must be compatible with simple-dom for rendering on the
  // server where there is no real DOM. Previously, we accessed a child node
  // directly via `element.childNodes[index]`. While we *could* in theory do a
  // full-fidelity simulation of a live `childNodes` array, this is slow,
  // complicated and error-prone.
  //
  // "No problem," we thought, "we'll just use the similar
  // `childNodes.item(index)` API." Then, we could just implement our own `item`
  // method in simple-dom and walk the child node linked list there, allowing
  // us to retain the performance advantages of the (surely optimized) `item()`
  // API in the browser.
  //
  // Unfortunately, an enterprising soul named Samy Alzahrani discovered that in
  // IE8, accessing an item out-of-bounds via `item()` causes an exception where
  // other browsers return null. This necessitated a... check of
  // `childNodes.length`, bringing us back around to having to support a
  // full-fidelity `childNodes` array!
  //
  // Worst of all, Kris Selden investigated how browsers are actualy implemented
  // and discovered that they're all linked lists under the hood anyway. Accessing
  // `childNodes` requires them to allocate a new live collection backed by that
  // linked list, which is itself a rather expensive operation. Our assumed
  // optimization had backfired! That is the danger of magical thinking about
  // the performance of native implementations.
  //
  // And this, my friends, is why the following implementation just walks the
  // linked list, as surprised as that may make you. Please ensure you understand
  // the above before changing this and submitting a PR.
  //
  // Tom Dale, January 18th, 2015, Portland OR
  prototype.childAtIndex = function (element, index) {
    var node = element.firstChild;

    for (var idx = 0; node && idx < index; idx++) {
      node = node.nextSibling;
    }

    return node;
  };

  prototype.appendText = function (element, text) {
    return element.appendChild(this.document.createTextNode(text));
  };

  prototype.setAttribute = function (element, name, value) {
    element.setAttribute(name, String(value));
  };

  prototype.getAttribute = function (element, name) {
    return element.getAttribute(name);
  };

  prototype.setAttributeNS = function (element, namespace, name, value) {
    element.setAttributeNS(namespace, name, String(value));
  };

  prototype.getAttributeNS = function (element, namespace, name) {
    return element.getAttributeNS(namespace, name);
  };

  if (canRemoveSvgViewBoxAttribute) {
    prototype.removeAttribute = function (element, name) {
      element.removeAttribute(name);
    };
  } else {
    prototype.removeAttribute = function (element, name) {
      if (element.tagName === 'svg' && name === 'viewBox') {
        element.setAttribute(name, null);
      } else {
        element.removeAttribute(name);
      }
    };
  }

  prototype.setPropertyStrict = function (element, name, value) {
    if (value === undefined) {
      value = null;
    }

    if (value === null && (name === 'value' || name === 'type' || name === 'src')) {
      value = '';
    }

    element[name] = value;
  };

  prototype.getPropertyStrict = function (element, name) {
    return element[name];
  };

  prototype.setProperty = function (element, name, value, namespace) {
    if (element.namespaceURI === buildHtmlDom.svgNamespace) {
      if (prop.isAttrRemovalValue(value)) {
        element.removeAttribute(name);
      } else {
        if (namespace) {
          element.setAttributeNS(namespace, name, value);
        } else {
          element.setAttribute(name, value);
        }
      }
    } else {
      var _normalizeProperty = prop.normalizeProperty(element, name);

      var normalized = _normalizeProperty.normalized;
      var type = _normalizeProperty.type;

      if (type === 'prop') {
        element[normalized] = value;
      } else {
        if (prop.isAttrRemovalValue(value)) {
          element.removeAttribute(name);
        } else {
          if (namespace && element.setAttributeNS) {
            element.setAttributeNS(namespace, name, value);
          } else {
            element.setAttribute(name, value);
          }
        }
      }
    }
  };

  if (doc && doc.createElementNS) {
    // Only opt into namespace detection if a contextualElement
    // is passed.
    prototype.createElement = function (tagName, contextualElement) {
      var namespace = this.namespace;
      if (contextualElement) {
        if (tagName === 'svg') {
          namespace = buildHtmlDom.svgNamespace;
        } else {
          namespace = interiorNamespace(contextualElement);
        }
      }
      if (namespace) {
        return this.document.createElementNS(namespace, tagName);
      } else {
        return this.document.createElement(tagName);
      }
    };
    prototype.setAttributeNS = function (element, namespace, name, value) {
      element.setAttributeNS(namespace, name, String(value));
    };
  } else {
    prototype.createElement = function (tagName) {
      return this.document.createElement(tagName);
    };
    prototype.setAttributeNS = function (element, namespace, name, value) {
      element.setAttribute(name, String(value));
    };
  }

  prototype.addClasses = classes.addClasses;
  prototype.removeClasses = classes.removeClasses;

  prototype.setNamespace = function (ns) {
    this.namespace = ns;
  };

  prototype.detectNamespace = function (element) {
    this.namespace = interiorNamespace(element);
  };

  prototype.createDocumentFragment = function () {
    return this.document.createDocumentFragment();
  };

  prototype.createTextNode = function (text) {
    return this.document.createTextNode(text);
  };

  prototype.createComment = function (text) {
    return this.document.createComment(text);
  };

  prototype.repairClonedNode = function (element, blankChildTextNodes, isChecked) {
    if (deletesBlankTextNodes && blankChildTextNodes.length > 0) {
      for (var i = 0, len = blankChildTextNodes.length; i < len; i++) {
        var textNode = this.document.createTextNode(''),
            offset = blankChildTextNodes[i],
            before = this.childAtIndex(element, offset);
        if (before) {
          element.insertBefore(textNode, before);
        } else {
          element.appendChild(textNode);
        }
      }
    }
    if (ignoresCheckedAttribute && isChecked) {
      element.setAttribute('checked', 'checked');
    }
  };

  prototype.cloneNode = function (element, deep) {
    var clone = element.cloneNode(!!deep);
    return clone;
  };

  prototype.AttrMorphClass = _morphAttr2.default;

  prototype.createAttrMorph = function (element, attrName, namespace) {
    return this.AttrMorphClass.create(element, attrName, this, namespace);
  };

  prototype.ElementMorphClass = ElementMorph;

  prototype.createElementMorph = function (element, namespace) {
    return new this.ElementMorphClass(element, this, namespace);
  };

  prototype.createUnsafeAttrMorph = function (element, attrName, namespace) {
    var morph$$1 = this.createAttrMorph(element, attrName, namespace);
    morph$$1.escaped = false;
    return morph$$1;
  };

  prototype.MorphClass = _htmlbarsRuntimeMorph2.default;

  prototype.createMorph = function (parent, start, end, contextualElement) {
    if (contextualElement && contextualElement.nodeType === 11) {
      throw new Error("Cannot pass a fragment as the contextual element to createMorph");
    }

    if (!contextualElement && parent && parent.nodeType === 1) {
      contextualElement = parent;
    }
    var morph$$1 = new this.MorphClass(this, contextualElement);
    morph$$1.firstNode = start;
    morph$$1.lastNode = end;
    return morph$$1;
  };

  prototype.createFragmentMorph = function (contextualElement) {
    if (contextualElement && contextualElement.nodeType === 11) {
      throw new Error("Cannot pass a fragment as the contextual element to createMorph");
    }

    var fragment = this.createDocumentFragment();
    return _htmlbarsRuntimeMorph2.default.create(this, contextualElement, fragment);
  };

  prototype.replaceContentWithMorph = function (element) {
    var firstChild = element.firstChild;

    if (!firstChild) {
      var comment = this.createComment('');
      this.appendChild(element, comment);
      return _htmlbarsRuntimeMorph2.default.create(this, element, comment);
    } else {
      var morph$$1 = _htmlbarsRuntimeMorph2.default.attach(this, element, firstChild, element.lastChild);
      morph$$1.clear();
      return morph$$1;
    }
  };

  prototype.createUnsafeMorph = function (parent, start, end, contextualElement) {
    var morph$$1 = this.createMorph(parent, start, end, contextualElement);
    morph$$1.parseTextAsHTML = true;
    return morph$$1;
  };

  // This helper is just to keep the templates good looking,
  // passing integers instead of element references.
  prototype.createMorphAt = function (parent, startIndex, endIndex, contextualElement) {
    var single = startIndex === endIndex;
    var start = this.childAtIndex(parent, startIndex);
    var end = single ? start : this.childAtIndex(parent, endIndex);
    return this.createMorph(parent, start, end, contextualElement);
  };

  prototype.createUnsafeMorphAt = function (parent, startIndex, endIndex, contextualElement) {
    var morph$$1 = this.createMorphAt(parent, startIndex, endIndex, contextualElement);
    morph$$1.parseTextAsHTML = true;
    return morph$$1;
  };

  prototype.insertMorphBefore = function (element, referenceChild, contextualElement) {
    var insertion = this.document.createComment('');
    element.insertBefore(insertion, referenceChild);
    return this.createMorph(element, insertion, insertion, contextualElement);
  };

  prototype.appendMorph = function (element, contextualElement) {
    var insertion = this.document.createComment('');
    element.appendChild(insertion);
    return this.createMorph(element, insertion, insertion, contextualElement);
  };

  prototype.insertBoundary = function (fragment, index) {
    // this will always be null or firstChild
    var child = index === null ? null : this.childAtIndex(fragment, index);
    this.insertBefore(fragment, this.createTextNode(''), child);
  };

  prototype.setMorphHTML = function (morph$$1, html) {
    morph$$1.setHTML(html);
  };

  prototype.parseHTML = function (html, contextualElement) {
    var childNodes;

    if (interiorNamespace(contextualElement) === buildHtmlDom.svgNamespace) {
      childNodes = buildSVGDOM(html, this);
    } else {
      var nodes = buildHtmlDom.buildHTMLDOM(html, contextualElement, this);
      if (detectOmittedStartTag(html, contextualElement)) {
        var node = nodes[0];
        while (node && node.nodeType !== 1) {
          node = node.nextSibling;
        }
        childNodes = node.childNodes;
      } else {
        childNodes = nodes;
      }
    }

    // Copy node list to a fragment.
    var fragment = this.document.createDocumentFragment();

    if (childNodes && childNodes.length > 0) {
      var currentNode = childNodes[0];

      // We prepend an <option> to <select> boxes to absorb any browser bugs
      // related to auto-select behavior. Skip past it.
      if (contextualElement.tagName === 'SELECT') {
        currentNode = currentNode.nextSibling;
      }

      while (currentNode) {
        var tempNode = currentNode;
        currentNode = currentNode.nextSibling;

        fragment.appendChild(tempNode);
      }
    }

    return fragment;
  };

  var nodeURL;
  var parsingNode;

  function installEnvironmentSpecificMethods(domHelper) {
    var protocol = browserProtocolForURL.call(domHelper, 'foobar:baz');

    // Test to see if our DOM implementation parses
    // and normalizes URLs.
    if (protocol === 'foobar:') {
      // Swap in the method that doesn't do this test now that
      // we know it works.
      domHelper.protocolForURL = browserProtocolForURL;
    } else if (typeof URL === 'object') {
      // URL globally provided, likely from FastBoot's sandbox
      nodeURL = URL;
      domHelper.protocolForURL = nodeProtocolForURL;
    } else if (typeof module.require === 'function') {
      // Otherwise, we need to fall back to our own URL parsing.
      // Global `require` is shadowed by Ember's loader so we have to use the fully
      // qualified `module.require`.
      nodeURL = module.require('url');
      domHelper.protocolForURL = nodeProtocolForURL;
    } else {
      throw new Error("DOM Helper could not find valid URL parsing mechanism");
    }

    // A SimpleDOM-specific extension that allows us to place HTML directly
    // into the DOM tree, for when the output target is always serialized HTML.
    if (domHelper.document.createRawHTMLSection) {
      domHelper.setMorphHTML = nodeSetMorphHTML;
    }
  }

  function nodeSetMorphHTML(morph$$1, html) {
    var section = this.document.createRawHTMLSection(html);
    morph$$1.setNode(section);
  }

  function browserProtocolForURL(url) {
    if (!parsingNode) {
      parsingNode = this.document.createElement('a');
    }

    parsingNode.href = url;
    return parsingNode.protocol;
  }

  function nodeProtocolForURL(url) {
    var protocol = null;
    if (typeof url === 'string') {
      protocol = nodeURL.parse(url).protocol;
    }
    return protocol === null ? ':' : protocol;
  }

  exports.default = DOMHelper;
  module.exports = exports.default;

  });

  var DOMHelper = unwrapExports(domHelper);

  var expressionVisitor = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.acceptParams = acceptParams;
  exports.acceptHash = acceptHash;
  /**
    # Expression Nodes:

    These nodes are not directly responsible for any part of the DOM, but are
    eventually passed to a Statement Node.

    * get
    * subexpr
    * concat
  */

  function acceptParams(nodes, env, scope) {
    var array = [];

    for (var i = 0, l = nodes.length; i < l; i++) {
      array.push(acceptExpression(nodes[i], env, scope).value);
    }

    return array;
  }

  function acceptHash(pairs, env, scope) {
    var object = {};

    for (var i = 0, l = pairs.length; i < l; i += 2) {
      var key = pairs[i];
      var value = pairs[i + 1];
      object[key] = acceptExpression(value, env, scope).value;
    }

    return object;
  }

  function acceptExpression(node, env, scope) {
    var ret = { value: null };

    // Primitive literals are unambiguously non-array representations of
    // themselves.
    if (Array.isArray(node)) {
      // if (node.length !== 7) { throw new Error('FIXME: Invalid statement length!'); }

      ret.value = evaluateNode(node, env, scope);
    } else {
      ret.value = node;
    }

    return ret;
  }

  function evaluateNode(node, env, scope) {
    switch (node[0]) {
      // can be used by manualElement
      case 'value':
        return node[1];
      case 'get':
        return evaluateGet(node, env, scope);
      case 'subexpr':
        return evaluateSubexpr(node, env, scope);
      case 'concat':
        return evaluateConcat(node, env, scope);
    }
  }

  function evaluateGet(node, env, scope) {
    var path = node[1];

    return env.hooks.get(env, scope, path);
  }

  function evaluateSubexpr(node, env, scope) {
    var path = node[1];
    var rawParams = node[2];
    var rawHash = node[3];

    var params = acceptParams(rawParams, env, scope);
    var hash = acceptHash(rawHash, env, scope);

    return env.hooks.subexpr(env, scope, path, params, hash);
  }

  function evaluateConcat(node, env, scope) {
    var rawParts = node[1];

    var parts = acceptParams(rawParts, env, scope);

    return env.hooks.concat(env, parts);
  }

  });

  unwrapExports(expressionVisitor);
  var expressionVisitor_1 = expressionVisitor.acceptParams;
  var expressionVisitor_2 = expressionVisitor.acceptHash;

  var nodeVisitor = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;





  /**
    Node classification:

    # Primary Statement Nodes:

    These nodes are responsible for a render node that represents a morph-range.

    * block
    * inline
    * content
    * element
    * component

    # Leaf Statement Nodes:

    This node is responsible for a render node that represents a morph-attr.

    * attribute
  */

  function linkParamsAndHash(env, scope, morph, path, params, hash) {
    if (morph.linkedParams) {
      params = morph.linkedParams.params;
      hash = morph.linkedParams.hash;
    } else {
      params = params && expressionVisitor.acceptParams(params, env, scope);
      hash = hash && expressionVisitor.acceptHash(hash, env, scope);
    }

    morphUtils.linkParams(env, scope, morph, path, params, hash);
    return [params, hash];
  }

  var AlwaysDirtyVisitor = {

    block: function (node, morph, env, scope, template, visitor) {
      var path = node[1];
      var params = node[2];
      var hash = node[3];
      var templateId = node[4];
      var inverseId = node[5];

      var paramsAndHash = linkParamsAndHash(env, scope, morph, path, params, hash);

      morph.isDirty = morph.isSubtreeDirty = false;
      env.hooks.block(morph, env, scope, path, paramsAndHash[0], paramsAndHash[1], templateId === null ? null : template.templates[templateId], inverseId === null ? null : template.templates[inverseId], visitor);
    },

    inline: function (node, morph, env, scope, visitor) {
      var path = node[1];
      var params = node[2];
      var hash = node[3];

      var paramsAndHash = linkParamsAndHash(env, scope, morph, path, params, hash);

      morph.isDirty = morph.isSubtreeDirty = false;
      env.hooks.inline(morph, env, scope, path, paramsAndHash[0], paramsAndHash[1], visitor);
    },

    content: function (node, morph, env, scope, visitor) {
      var path = node[1];

      morph.isDirty = morph.isSubtreeDirty = false;

      if (isHelper(env, scope, path)) {
        env.hooks.inline(morph, env, scope, path, [], {}, visitor);
        if (morph.linkedResult) {
          morphUtils.linkParams(env, scope, morph, '@content-helper', [morph.linkedResult], null);
        }
        return;
      }

      var params = undefined;
      if (morph.linkedParams) {
        params = morph.linkedParams.params;
      } else {
        params = [env.hooks.get(env, scope, path)];
      }

      morphUtils.linkParams(env, scope, morph, '@range', params, null);
      env.hooks.range(morph, env, scope, path, params[0], visitor);
    },

    element: function (node, morph, env, scope, visitor) {
      var path = node[1];
      var params = node[2];
      var hash = node[3];

      var paramsAndHash = linkParamsAndHash(env, scope, morph, path, params, hash);

      morph.isDirty = morph.isSubtreeDirty = false;
      env.hooks.element(morph, env, scope, path, paramsAndHash[0], paramsAndHash[1], visitor);
    },

    attribute: function (node, morph, env, scope) {
      var name = node[1];
      var value = node[2];

      var paramsAndHash = linkParamsAndHash(env, scope, morph, '@attribute', [value], null);

      morph.isDirty = morph.isSubtreeDirty = false;
      env.hooks.attribute(morph, env, scope, name, paramsAndHash[0][0]);
    },

    component: function (node, morph, env, scope, template, visitor) {
      var path = node[1];
      var attrs = node[2];
      var templateId = node[3];
      var inverseId = node[4];

      var paramsAndHash = linkParamsAndHash(env, scope, morph, path, [], attrs);
      var templates = {
        default: template.templates[templateId],
        inverse: template.templates[inverseId]
      };

      morph.isDirty = morph.isSubtreeDirty = false;
      env.hooks.component(morph, env, scope, path, paramsAndHash[0], paramsAndHash[1], templates, visitor);
    },

    attributes: function (node, morph, env, scope, parentMorph, visitor) {
      var template = node[1];

      env.hooks.attributes(morph, env, scope, template, parentMorph, visitor);
    }

  };

  exports.AlwaysDirtyVisitor = AlwaysDirtyVisitor;
  exports.default = {
    block: function (node, morph, env, scope, template, visitor) {
      dirtyCheck(env, morph, visitor, function (visitor) {
        AlwaysDirtyVisitor.block(node, morph, env, scope, template, visitor);
      });
    },

    inline: function (node, morph, env, scope, visitor) {
      dirtyCheck(env, morph, visitor, function (visitor) {
        AlwaysDirtyVisitor.inline(node, morph, env, scope, visitor);
      });
    },

    content: function (node, morph, env, scope, visitor) {
      dirtyCheck(env, morph, visitor, function (visitor) {
        AlwaysDirtyVisitor.content(node, morph, env, scope, visitor);
      });
    },

    element: function (node, morph, env, scope, template, visitor) {
      dirtyCheck(env, morph, visitor, function (visitor) {
        AlwaysDirtyVisitor.element(node, morph, env, scope, template, visitor);
      });
    },

    attribute: function (node, morph, env, scope, template) {
      dirtyCheck(env, morph, null, function () {
        AlwaysDirtyVisitor.attribute(node, morph, env, scope, template);
      });
    },

    component: function (node, morph, env, scope, template, visitor) {
      dirtyCheck(env, morph, visitor, function (visitor) {
        AlwaysDirtyVisitor.component(node, morph, env, scope, template, visitor);
      });
    },

    attributes: function (node, morph, env, scope, parentMorph, visitor) {
      AlwaysDirtyVisitor.attributes(node, morph, env, scope, parentMorph, visitor);
    }
  };

  function dirtyCheck(_env, morph, visitor, callback) {
    var isDirty = morph.isDirty;
    var isSubtreeDirty = morph.isSubtreeDirty;
    var env = _env;

    if (isSubtreeDirty) {
      visitor = AlwaysDirtyVisitor;
    }

    if (isDirty || isSubtreeDirty) {
      callback(visitor);
    } else {
      if (morph.buildChildEnv) {
        env = morph.buildChildEnv(morph.getState(), env);
      }
      morphUtils.validateChildMorphs(env, morph, visitor);
    }
  }

  function isHelper(env, scope, path) {
    return env.hooks.keywords[path] !== undefined || env.hooks.hasHelper(env, scope, path);
  }

  });

  unwrapExports(nodeVisitor);
  var nodeVisitor_1 = nodeVisitor.AlwaysDirtyVisitor;

  var templateUtils = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  var _slice = Array.prototype.slice;
  exports.RenderState = RenderState;
  exports.blockFor = blockFor;
  exports.renderAndCleanup = renderAndCleanup;
  exports.clearMorph = clearMorph;
  exports.clearMorphList = clearMorphList;
  exports.buildStatement = buildStatement;





  function RenderState(renderNode, morphList) {
    // The morph list that is no longer needed and can be
    // destroyed.
    this.morphListToClear = morphList;

    // The morph list that needs to be pruned of any items
    // that were not yielded on a subsequent render.
    this.morphListToPrune = null;

    // A map of morphs for each item yielded in during this
    // rendering pass. Any morphs in the DOM but not in this map
    // will be pruned during cleanup.
    this.handledMorphs = {};
    this.collisions = undefined;

    // The morph to clear once rendering is complete. By
    // default, we set this to the previous morph (to catch
    // the case where nothing is yielded; in that case, we
    // should just clear the morph). Otherwise this gets set
    // to null if anything is rendered.
    this.morphToClear = renderNode;

    this.shadowOptions = null;
  }

  function Block(render, template, blockOptions) {
    this.render = render;
    this.template = template;
    this.blockOptions = blockOptions;
    this.arity = template.arity;
  }

  Block.prototype.invoke = function (env, blockArguments, _self, renderNode, parentScope, visitor) {
    if (renderNode.lastResult) {
      renderNode.lastResult.revalidateWith(env, undefined, _self, blockArguments, visitor);
    } else {
      this._firstRender(env, blockArguments, _self, renderNode, parentScope);
    }
  };

  Block.prototype._firstRender = function (env, blockArguments, _self, renderNode, parentScope) {
    var options = { renderState: new RenderState(renderNode) };
    var render = this.render;
    var template = this.template;
    var scope = this.blockOptions.scope;

    var shadowScope = scope ? env.hooks.createChildScope(scope) : env.hooks.createFreshScope();

    env.hooks.bindShadowScope(env, parentScope, shadowScope, this.blockOptions.options);

    if (_self !== undefined) {
      env.hooks.bindSelf(env, shadowScope, _self);
    } else if (this.blockOptions.self !== undefined) {
      env.hooks.bindSelf(env, shadowScope, this.blockOptions.self);
    }

    bindBlocks(env, shadowScope, this.blockOptions.yieldTo);

    renderAndCleanup(renderNode, env, options, null, function () {
      options.renderState.morphToClear = null;
      var renderOptions = new render_1.RenderOptions(renderNode, undefined, blockArguments);
      render(template, env, shadowScope, renderOptions);
    });
  };

  function blockFor(render, template, blockOptions) {
    return new Block(render, template, blockOptions);
  }

  function bindBlocks(env, shadowScope, blocks) {
    if (!blocks) {
      return;
    }
    if (blocks instanceof Block) {
      env.hooks.bindBlock(env, shadowScope, blocks);
    } else {
      for (var name in blocks) {
        if (blocks.hasOwnProperty(name)) {
          env.hooks.bindBlock(env, shadowScope, blocks[name], name);
        }
      }
    }
  }

  function renderAndCleanup(morph, env, options, shadowOptions, callback) {
    // The RenderState object is used to collect information about what the
    // helper or hook being invoked has yielded. Once it has finished either
    // yielding multiple items (via yieldItem) or a single template (via
    // yieldTemplate), we detect what was rendered and how it differs from
    // the previous render, cleaning up old state in DOM as appropriate.
    var renderState = options.renderState;
    renderState.collisions = undefined;
    renderState.shadowOptions = shadowOptions;

    // Invoke the callback, instructing it to save information about what it
    // renders into RenderState.
    var result = callback(options);

    // The hook can opt-out of cleanup if it handled cleanup itself.
    if (result && result.handled) {
      return;
    }

    var morphMap = morph.morphMap;

    // Walk the morph list, clearing any items that were yielded in a previous
    // render but were not yielded during this render.
    var morphList = renderState.morphListToPrune;
    if (morphList) {
      var handledMorphs = renderState.handledMorphs;
      var item = morphList.firstChildMorph;

      while (item) {
        var next = item.nextMorph;

        // If we don't see the key in handledMorphs, it wasn't
        // yielded in and we can safely remove it from DOM.
        if (!(item.key in handledMorphs)) {
          morphMap[item.key] = undefined;
          clearMorph(item, env, true);
          item.destroy();
        }

        item = next;
      }
    }

    morphList = renderState.morphListToClear;
    if (morphList) {
      clearMorphList(morphList, morph, env);
    }

    var toClear = renderState.morphToClear;
    if (toClear) {
      clearMorph(toClear, env);
    }
  }

  function clearMorph(morph, env, destroySelf) {
    var cleanup = env.hooks.cleanupRenderNode;
    var destroy = env.hooks.destroyRenderNode;
    var willCleanup = env.hooks.willCleanupTree;
    var didCleanup = env.hooks.didCleanupTree;

    function destroyNode(node) {
      if (cleanup) {
        cleanup(node);
      }
      if (destroy) {
        destroy(node);
      }
    }

    if (willCleanup) {
      willCleanup(env, morph, destroySelf);
    }
    if (cleanup) {
      cleanup(morph);
    }
    if (destroySelf && destroy) {
      destroy(morph);
    }

    morphUtils.visitChildren(morph.childNodes, destroyNode);

    // TODO: Deal with logical children that are not in the DOM tree
    morph.clear();
    if (didCleanup) {
      didCleanup(env, morph, destroySelf);
    }

    morph.lastResult = null;
    morph.lastYielded = null;
    morph.childNodes = null;
  }

  function clearMorphList(morphList, morph, env) {
    var item = morphList.firstChildMorph;

    while (item) {
      var next = item.nextMorph;
      morph.morphMap[item.key] = undefined;
      clearMorph(item, env, true);
      item.destroy();

      item = next;
    }

    // Remove the MorphList from the morph.
    morphList.clear();
    morph.morphList = null;
  }

  function buildStatement() {
    var statement = [].concat(_slice.call(arguments));

    // ensure array length is 7 by padding with 0
    for (var i = arguments.length; i < 7; i++) {
      statement[i] = 0;
    }

    return statement;
  }

  });

  unwrapExports(templateUtils);
  var templateUtils_1 = templateUtils.RenderState;
  var templateUtils_2 = templateUtils.blockFor;
  var templateUtils_3 = templateUtils.renderAndCleanup;
  var templateUtils_4 = templateUtils.clearMorph;
  var templateUtils_5 = templateUtils.clearMorphList;
  var templateUtils_6 = templateUtils.buildStatement;

  var arrayUtils = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.forEach = forEach;
  exports.map = map;

  function forEach(array, callback, binding) {
    var i, l;
    if (binding === undefined) {
      for (i = 0, l = array.length; i < l; i++) {
        callback(array[i], i, array);
      }
    } else {
      for (i = 0, l = array.length; i < l; i++) {
        callback.call(binding, array[i], i, array);
      }
    }
  }

  function map(array, callback) {
    var output = [];
    var i, l;

    for (i = 0, l = array.length; i < l; i++) {
      output.push(callback(array[i], i, array));
    }

    return output;
  }

  var getIdx;
  if (Array.prototype.indexOf) {
    getIdx = function (array, obj, from) {
      return array.indexOf(obj, from);
    };
  } else {
    getIdx = function (array, obj, from) {
      if (from === undefined || from === null) {
        from = 0;
      } else if (from < 0) {
        from = Math.max(0, array.length + from);
      }
      for (var i = from, l = array.length; i < l; i++) {
        if (array[i] === obj) {
          return i;
        }
      }
      return -1;
    };
  }

  var isArray = Array.isArray || function (array) {
    return Object.prototype.toString.call(array) === '[object Array]';
  };

  exports.isArray = isArray;
  var indexOfArray = getIdx;
  exports.indexOfArray = indexOfArray;

  });

  unwrapExports(arrayUtils);
  var arrayUtils_1 = arrayUtils.forEach;
  var arrayUtils_2 = arrayUtils.map;
  var arrayUtils_3 = arrayUtils.isArray;
  var arrayUtils_4 = arrayUtils.indexOfArray;

  var voidTagNames_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;



  // The HTML elements in this list are speced by
  // http://www.w3.org/TR/html-markup/syntax.html#syntax-elements,
  // and will be forced to close regardless of if they have a
  // self-closing /> at the end.
  var voidTagNames = "area base br col command embed hr img input keygen link meta param source track wbr";
  var voidMap = {};

  arrayUtils.forEach(voidTagNames.split(" "), function (tagName) {
    voidMap[tagName] = true;
  });

  exports.default = voidMap;
  module.exports = exports.default;

  });

  unwrapExports(voidTagNames_1);

  var render_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = render;
  exports.RenderOptions = RenderOptions;
  exports.manualElement = manualElement;
  exports.attachAttributes = attachAttributes;
  exports.createChildMorph = createChildMorph;
  exports.getCachedFragment = getCachedFragment;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }





  var _nodeVisitor2 = _interopRequireDefault(nodeVisitor);



  var _morph2 = _interopRequireDefault(morph);





  var _htmlbarsUtilVoidTagNames2 = _interopRequireDefault(voidTagNames_1);

  var svgNamespace = "http://www.w3.org/2000/svg";

  function render(template, env, scope, options) {
    var dom = env.dom;
    var contextualElement;

    if (options) {
      if (options.renderNode) {
        contextualElement = options.renderNode.contextualElement;
      } else if (options.contextualElement) {
        contextualElement = options.contextualElement;
      }
    }

    dom.detectNamespace(contextualElement);

    var renderResult = RenderResult.build(env, scope, template, options, contextualElement);
    renderResult.render();

    return renderResult;
  }

  function RenderOptions(renderNode, self, blockArguments, contextualElement) {
    this.renderNode = renderNode || null;
    this.self = self;
    this.blockArguments = blockArguments || null;
    this.contextualElement = contextualElement || null;
  }

  function RenderResult(env, scope, options, rootNode, ownerNode, nodes, fragment, template, shouldSetContent) {
    this.root = rootNode;
    this.fragment = fragment;

    this.nodes = nodes;
    this.template = template;
    this.statements = template.statements.slice();
    this.env = env;
    this.scope = scope;
    this.shouldSetContent = shouldSetContent;

    if (options.self !== undefined) {
      this.bindSelf(options.self);
    }
    if (options.blockArguments !== undefined) {
      this.bindLocals(options.blockArguments);
    }

    this.initializeNodes(ownerNode);
  }

  RenderResult.build = function (env, scope, template, options, contextualElement) {
    var dom = env.dom;
    var fragment = getCachedFragment(template, env);
    var nodes = template.buildRenderNodes(dom, fragment, contextualElement);

    var rootNode, ownerNode, shouldSetContent;

    if (options && options.renderNode) {
      rootNode = options.renderNode;
      ownerNode = rootNode.ownerNode;
      shouldSetContent = true;
    } else {
      rootNode = dom.createMorph(null, fragment.firstChild, fragment.lastChild, contextualElement);
      ownerNode = rootNode;
      rootNode.ownerNode = ownerNode;
      shouldSetContent = false;
    }

    if (rootNode.childNodes) {
      morphUtils.visitChildren(rootNode.childNodes, function (node) {
        templateUtils.clearMorph(node, env, true);
      });
    }

    rootNode.childNodes = nodes;
    return new RenderResult(env, scope, options, rootNode, ownerNode, nodes, fragment, template, shouldSetContent);
  };

  function manualElement(tagName, attributes, _isEmpty) {
    var statements = [];

    for (var key in attributes) {
      if (typeof attributes[key] === 'string') {
        continue;
      }

      statements.push(templateUtils.buildStatement("attribute", key, attributes[key]));
    }

    var isEmpty = _isEmpty || _htmlbarsUtilVoidTagNames2.default[tagName];

    if (!isEmpty) {
      statements.push(templateUtils.buildStatement('content', 'yield'));
    }

    var template = {
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        if (tagName === 'svg') {
          dom.setNamespace(svgNamespace);
        }
        var el1 = dom.createElement(tagName);

        for (var key in attributes) {
          if (typeof attributes[key] !== 'string') {
            continue;
          }
          dom.setAttribute(el1, key, attributes[key]);
        }

        if (!isEmpty) {
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
        }

        dom.appendChild(el0, el1);

        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment) {
        var element = dom.childAt(fragment, [0]);
        var morphs = [];

        for (var key in attributes) {
          if (typeof attributes[key] === 'string') {
            continue;
          }
          morphs.push(dom.createAttrMorph(element, key));
        }

        if (!isEmpty) {
          morphs.push(dom.createMorphAt(element, 0, 0));
        }

        return morphs;
      },
      statements: statements,
      locals: [],
      templates: []
    };

    return template;
  }

  function attachAttributes(attributes) {
    var statements = [];

    for (var key in attributes) {
      if (typeof attributes[key] === 'string') {
        continue;
      }
      statements.push(templateUtils.buildStatement("attribute", key, attributes[key]));
    }

    var template = {
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = this.element;
        if (el0.namespaceURI === "http://www.w3.org/2000/svg") {
          dom.setNamespace(svgNamespace);
        }
        for (var key in attributes) {
          if (typeof attributes[key] !== 'string') {
            continue;
          }
          dom.setAttribute(el0, key, attributes[key]);
        }

        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom) {
        var element = this.element;
        var morphs = [];

        for (var key in attributes) {
          if (typeof attributes[key] === 'string') {
            continue;
          }
          morphs.push(dom.createAttrMorph(element, key));
        }

        return morphs;
      },
      statements: statements,
      locals: [],
      templates: [],
      element: null
    };

    return template;
  }

  RenderResult.prototype.initializeNodes = function (ownerNode) {
    var childNodes = this.root.childNodes;

    for (var i = 0, l = childNodes.length; i < l; i++) {
      childNodes[i].ownerNode = ownerNode;
    }
  };

  RenderResult.prototype.render = function () {
    this.root.lastResult = this;
    this.root.rendered = true;
    this.populateNodes(nodeVisitor.AlwaysDirtyVisitor);

    if (this.shouldSetContent && this.root.setContent) {
      this.root.setContent(this.fragment);
    }
  };

  RenderResult.prototype.dirty = function () {
    morphUtils.visitChildren([this.root], function (node) {
      node.isDirty = true;
    });
  };

  RenderResult.prototype.revalidate = function (env, self, blockArguments, scope) {
    this.revalidateWith(env, scope, self, blockArguments, _nodeVisitor2.default);
  };

  RenderResult.prototype.rerender = function (env, self, blockArguments, scope) {
    this.revalidateWith(env, scope, self, blockArguments, nodeVisitor.AlwaysDirtyVisitor);
  };

  RenderResult.prototype.revalidateWith = function (env, scope, self, blockArguments, visitor) {
    if (env !== undefined) {
      this.env = env;
    }
    if (scope !== undefined) {
      this.scope = scope;
    }
    this.updateScope();

    if (self !== undefined) {
      this.updateSelf(self);
    }
    if (blockArguments !== undefined) {
      this.updateLocals(blockArguments);
    }

    this.populateNodes(visitor);
  };

  RenderResult.prototype.destroy = function () {
    var rootNode = this.root;
    templateUtils.clearMorph(rootNode, this.env, true);
  };

  RenderResult.prototype.populateNodes = function (visitor) {
    var env = this.env;
    var scope = this.scope;
    var template = this.template;
    var nodes = this.nodes;
    var statements = this.statements;
    var i, l;

    for (i = 0, l = statements.length; i < l; i++) {
      var statement = statements[i];
      var morph$$1 = nodes[i];

      if (env.hooks.willRenderNode) {
        env.hooks.willRenderNode(morph$$1, env, scope);
      }

      switch (statement[0]) {
        case 'block':
          visitor.block(statement, morph$$1, env, scope, template, visitor);break;
        case 'inline':
          visitor.inline(statement, morph$$1, env, scope, visitor);break;
        case 'content':
          visitor.content(statement, morph$$1, env, scope, visitor);break;
        case 'element':
          visitor.element(statement, morph$$1, env, scope, template, visitor);break;
        case 'attribute':
          visitor.attribute(statement, morph$$1, env, scope);break;
        case 'component':
          visitor.component(statement, morph$$1, env, scope, template, visitor);break;
      }

      if (env.hooks.didRenderNode) {
        env.hooks.didRenderNode(morph$$1, env, scope);
      }
    }
  };

  RenderResult.prototype.bindScope = function () {
    this.env.hooks.bindScope(this.env, this.scope);
  };

  RenderResult.prototype.updateScope = function () {
    this.env.hooks.updateScope(this.env, this.scope);
  };

  RenderResult.prototype.bindSelf = function (self) {
    this.env.hooks.bindSelf(this.env, this.scope, self);
  };

  RenderResult.prototype.updateSelf = function (self) {
    this.env.hooks.updateSelf(this.env, this.scope, self);
  };

  RenderResult.prototype.bindLocals = function (blockArguments) {
    var localNames = this.template.locals;

    for (var i = 0, l = localNames.length; i < l; i++) {
      this.env.hooks.bindLocal(this.env, this.scope, localNames[i], blockArguments[i]);
    }
  };

  RenderResult.prototype.updateLocals = function (blockArguments) {
    var localNames = this.template.locals;

    for (var i = 0, l = localNames.length; i < l; i++) {
      this.env.hooks.updateLocal(this.env, this.scope, localNames[i], blockArguments[i]);
    }
  };

  function initializeNode(node, owner) {
    node.ownerNode = owner;
  }

  function createChildMorph(dom, parentMorph, contextualElement) {
    var morph$$1 = _morph2.default.empty(dom, contextualElement || parentMorph.contextualElement);
    initializeNode(morph$$1, parentMorph.ownerNode);
    return morph$$1;
  }

  function getCachedFragment(template, env) {
    var dom = env.dom,
        fragment;
    if (env.useFragmentCache && dom.canClone) {
      if (template.cachedFragment === null) {
        fragment = template.buildFragment(dom);
        if (template.hasRendered) {
          template.cachedFragment = fragment;
        } else {
          template.hasRendered = true;
        }
      }
      if (template.cachedFragment) {
        fragment = dom.cloneNode(template.cachedFragment, true);
      }
    } else if (!fragment) {
      fragment = template.buildFragment(dom);
    }

    return fragment;
  }

  });

  var render = unwrapExports(render_1);
  var render_2 = render_1.RenderOptions;
  var render_3 = render_1.manualElement;
  var render_4 = render_1.attachAttributes;
  var render_5 = render_1.createChildMorph;
  var render_6 = render_1.getCachedFragment;

  var morphList = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;



  function MorphList() {
    // morph graph
    this.firstChildMorph = null;
    this.lastChildMorph = null;

    this.mountedMorph = null;
  }

  var prototype = MorphList.prototype;

  prototype.clear = function MorphList$clear() {
    var current = this.firstChildMorph;

    while (current) {
      var next = current.nextMorph;
      current.previousMorph = null;
      current.nextMorph = null;
      current.parentMorphList = null;
      current = next;
    }

    this.firstChildMorph = this.lastChildMorph = null;
  };

  prototype.destroy = function MorphList$destroy() {};

  prototype.appendMorph = function MorphList$appendMorph(morph) {
    this.insertBeforeMorph(morph, null);
  };

  prototype.insertBeforeMorph = function MorphList$insertBeforeMorph(morph, referenceMorph) {
    if (morph.parentMorphList !== null) {
      morph.unlink();
    }
    if (referenceMorph && referenceMorph.parentMorphList !== this) {
      throw new Error('The morph before which the new morph is to be inserted is not a child of this morph.');
    }

    var mountedMorph = this.mountedMorph;

    if (mountedMorph) {

      var parentNode = mountedMorph.firstNode.parentNode;
      var referenceNode = referenceMorph ? referenceMorph.firstNode : mountedMorph.lastNode.nextSibling;

      utils.insertBefore(parentNode, morph.firstNode, morph.lastNode, referenceNode);

      // was not in list mode replace current content
      if (!this.firstChildMorph) {
        utils.clear(this.mountedMorph.firstNode.parentNode, this.mountedMorph.firstNode, this.mountedMorph.lastNode);
      }
    }

    morph.parentMorphList = this;

    var previousMorph = referenceMorph ? referenceMorph.previousMorph : this.lastChildMorph;
    if (previousMorph) {
      previousMorph.nextMorph = morph;
      morph.previousMorph = previousMorph;
    } else {
      this.firstChildMorph = morph;
    }

    if (referenceMorph) {
      referenceMorph.previousMorph = morph;
      morph.nextMorph = referenceMorph;
    } else {
      this.lastChildMorph = morph;
    }

    this.firstChildMorph._syncFirstNode();
    this.lastChildMorph._syncLastNode();
  };

  prototype.removeChildMorph = function MorphList$removeChildMorph(morph) {
    if (morph.parentMorphList !== this) {
      throw new Error("Cannot remove a morph from a parent it is not inside of");
    }

    morph.destroy();
  };

  exports.default = MorphList;
  module.exports = exports.default;

  });

  unwrapExports(morphList);

  var objectUtils = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.merge = merge;
  exports.shallowCopy = shallowCopy;
  exports.keySet = keySet;
  exports.keyLength = keyLength;

  function merge(options, defaults) {
    for (var prop in defaults) {
      if (options.hasOwnProperty(prop)) {
        continue;
      }
      options[prop] = defaults[prop];
    }
    return options;
  }

  function shallowCopy(obj) {
    return merge({}, obj);
  }

  function keySet(obj) {
    var set = {};

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        set[prop] = true;
      }
    }

    return set;
  }

  function keyLength(obj) {
    var count = 0;

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        count++;
      }
    }

    return count;
  }

  });

  unwrapExports(objectUtils);
  var objectUtils_1 = objectUtils.merge;
  var objectUtils_2 = objectUtils.shallowCopy;
  var objectUtils_3 = objectUtils.keySet;
  var objectUtils_4 = objectUtils.keyLength;

  var hooks = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.wrap = wrap;
  exports.wrapForHelper = wrapForHelper;
  exports.createScope = createScope;
  exports.createFreshScope = createFreshScope;
  exports.bindShadowScope = bindShadowScope;
  exports.createChildScope = createChildScope;
  exports.bindSelf = bindSelf;
  exports.updateSelf = updateSelf;
  exports.bindLocal = bindLocal;
  exports.updateLocal = updateLocal;
  exports.bindBlock = bindBlock;
  exports.block = block;
  exports.continueBlock = continueBlock;
  exports.hostBlock = hostBlock;
  exports.handleRedirect = handleRedirect;
  exports.handleKeyword = handleKeyword;
  exports.linkRenderNode = linkRenderNode;
  exports.inline = inline;
  exports.keyword = keyword;
  exports.invokeHelper = invokeHelper;
  exports.classify = classify;
  exports.partial = partial;
  exports.range = range;
  exports.element = element;
  exports.attribute = attribute;
  exports.subexpr = subexpr;
  exports.get = get;
  exports.getRoot = getRoot;
  exports.getBlock = getBlock;
  exports.getChild = getChild;
  exports.getValue = getValue;
  exports.getCellOrValue = getCellOrValue;
  exports.component = component;
  exports.concat = concat;
  exports.hasHelper = hasHelper;
  exports.lookupHelper = lookupHelper;
  exports.bindScope = bindScope;
  exports.updateScope = updateScope;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }



  var _render2 = _interopRequireDefault(render_1);



  var _morphRangeMorphList2 = _interopRequireDefault(morphList);







  /**
    HTMLBars delegates the runtime behavior of a template to
    hooks provided by the host environment. These hooks explain
    the lexical environment of a Handlebars template, the internal
    representation of references, and the interaction between an
    HTMLBars template and the DOM it is managing.

    While HTMLBars host hooks have access to all of this internal
    machinery, templates and helpers have access to the abstraction
    provided by the host hooks.

    ## The Lexical Environment

    The default lexical environment of an HTMLBars template includes:

    * Any local variables, provided by *block arguments*
    * The current value of `self`

    ## Simple Nesting

    Let's look at a simple template with a nested block:

    ```hbs
    <h1>{{title}}</h1>

    {{#if author}}
      <p class="byline">{{author}}</p>
    {{/if}}
    ```

    In this case, the lexical environment at the top-level of the
    template does not change inside of the `if` block. This is
    achieved via an implementation of `if` that looks like this:

    ```js
    registerHelper('if', function(params) {
      if (!!params[0]) {
        return this.yield();
      }
    });
    ```

    A call to `this.yield` invokes the child template using the
    current lexical environment.

    ## Block Arguments

    It is possible for nested blocks to introduce new local
    variables:

    ```hbs
    {{#count-calls as |i|}}
    <h1>{{title}}</h1>
    <p>Called {{i}} times</p>
    {{/count}}
    ```

    In this example, the child block inherits its surrounding
    lexical environment, but augments it with a single new
    variable binding.

    The implementation of `count-calls` supplies the value of
    `i`, but does not otherwise alter the environment:

    ```js
    var count = 0;
    registerHelper('count-calls', function() {
      return this.yield([ ++count ]);
    });
    ```
  */

  function wrap(template) {
    if (template === null) {
      return null;
    }

    return {
      meta: template.meta,
      arity: template.arity,
      raw: template,
      render: function (self, env, options, blockArguments) {
        var scope = env.hooks.createFreshScope();

        var contextualElement = options && options.contextualElement;
        var renderOptions = new render_1.RenderOptions(null, self, blockArguments, contextualElement);

        return _render2.default(template, env, scope, renderOptions);
      }
    };
  }

  function wrapForHelper(template, env, scope, morph, renderState, visitor) {
    if (!template) {
      return {};
    }

    var yieldArgs = yieldTemplate(template, env, scope, morph, renderState, visitor);

    return {
      meta: template.meta,
      arity: template.arity,
      'yield': yieldArgs, // quoted since it's a reserved word, see issue #420
      yieldItem: yieldItem(template, env, scope, morph, renderState, visitor),
      raw: template,

      render: function (self, blockArguments) {
        yieldArgs(blockArguments, self);
      }
    };
  }

  // Called by a user-land helper to render a template.
  function yieldTemplate(template, env, parentScope, morph, renderState, visitor) {
    return function (blockArguments, self) {
      // Render state is used to track the progress of the helper (since it
      // may call into us multiple times). As the user-land helper calls
      // into library code, we track what needs to be cleaned up after the
      // helper has returned.
      //
      // Here, we remember that a template has been yielded and so we do not
      // need to remove the previous template. (If no template is yielded
      // this render by the helper, we assume nothing should be shown and
      // remove any previous rendered templates.)
      renderState.morphToClear = null;

      // In this conditional is true, it means that on the previous rendering pass
      // the helper yielded multiple items via `yieldItem()`, but this time they
      // are yielding a single template. In that case, we mark the morph list for
      // cleanup so it is removed from the DOM.
      if (morph.morphList) {
        templateUtils.clearMorphList(morph.morphList, morph, env);
        renderState.morphListToClear = null;
      }

      var scope = parentScope;

      if (morph.lastYielded && isStableTemplate(template, morph.lastYielded)) {
        return morph.lastResult.revalidateWith(env, undefined, self, blockArguments, visitor);
      }

      // Check to make sure that we actually **need** a new scope, and can't
      // share the parent scope. Note that we need to move this check into
      // a host hook, because the host's notion of scope may require a new
      // scope in more cases than the ones we can determine statically.
      if (self !== undefined || parentScope === null || template.arity) {
        scope = env.hooks.createChildScope(parentScope);
      }

      morph.lastYielded = { self: self, template: template, shadowTemplate: null };

      // Render the template that was selected by the helper
      var renderOptions = new render_1.RenderOptions(morph, self, blockArguments);
      _render2.default(template, env, scope, renderOptions);
    };
  }

  function yieldItem(template, env, parentScope, morph, renderState, visitor) {
    // Initialize state that tracks multiple items being
    // yielded in.
    var currentMorph = null;

    // Candidate morphs for deletion.
    var candidates = {};

    // Reuse existing MorphList if this is not a first-time
    // render.
    var morphList$$1 = morph.morphList;
    if (morphList$$1) {
      currentMorph = morphList$$1.firstChildMorph;
    }

    // Advances the currentMorph pointer to the morph in the previously-rendered
    // list that matches the yielded key. While doing so, it marks any morphs
    // that it advances past as candidates for deletion. Assuming those morphs
    // are not yielded in later, they will be removed in the prune step during
    // cleanup.
    // Note that this helper function assumes that the morph being seeked to is
    // guaranteed to exist in the previous MorphList; if this is called and the
    // morph does not exist, it will result in an infinite loop
    function advanceToKey(key) {
      var seek = currentMorph;

      while (seek.key !== key) {
        candidates[seek.key] = seek;
        seek = seek.nextMorph;
      }

      currentMorph = seek.nextMorph;
      return seek;
    }

    return function (_key, blockArguments, self) {
      if (typeof _key !== 'string') {
        throw new Error("You must provide a string key when calling `yieldItem`; you provided " + _key);
      }

      // At least one item has been yielded, so we do not wholesale
      // clear the last MorphList but instead apply a prune operation.
      renderState.morphListToClear = null;
      morph.lastYielded = null;

      var morphList$$1, morphMap;

      if (!morph.morphList) {
        morph.morphList = new _morphRangeMorphList2.default();
        morph.morphMap = {};
        morph.setMorphList(morph.morphList);
      }

      morphList$$1 = morph.morphList;
      morphMap = morph.morphMap;

      // A map of morphs that have been yielded in on this
      // rendering pass. Any morphs that do not make it into
      // this list will be pruned from the MorphList during the cleanup
      // process.
      var handledMorphs = renderState.handledMorphs;
      var key = undefined;

      if (_key in handledMorphs) {
        // In this branch we are dealing with a duplicate key. The strategy
        // is to take the original key and append a counter to it that is
        // incremented every time the key is reused. In order to greatly
        // reduce the chance of colliding with another valid key we also add
        // an extra string "--z8mS2hvDW0A--" to the new key.
        var collisions = renderState.collisions;
        if (collisions === undefined) {
          collisions = renderState.collisions = {};
        }
        var count = collisions[_key] | 0;
        collisions[_key] = ++count;

        key = _key + '--z8mS2hvDW0A--' + count;
      } else {
        key = _key;
      }

      if (currentMorph && currentMorph.key === key) {
        yieldTemplate(template, env, parentScope, currentMorph, renderState, visitor)(blockArguments, self);
        currentMorph = currentMorph.nextMorph;
        handledMorphs[key] = currentMorph;
      } else if (morphMap[key] !== undefined) {
        var foundMorph = morphMap[key];

        if (key in candidates) {
          // If we already saw this morph, move it forward to this position
          morphList$$1.insertBeforeMorph(foundMorph, currentMorph);
        } else {
          // Otherwise, move the pointer forward to the existing morph for this key
          advanceToKey(key);
        }

        handledMorphs[foundMorph.key] = foundMorph;
        yieldTemplate(template, env, parentScope, foundMorph, renderState, visitor)(blockArguments, self);
      } else {
        var childMorph = render_1.createChildMorph(env.dom, morph);
        childMorph.key = key;
        morphMap[key] = handledMorphs[key] = childMorph;
        morphList$$1.insertBeforeMorph(childMorph, currentMorph);
        yieldTemplate(template, env, parentScope, childMorph, renderState, visitor)(blockArguments, self);
      }

      renderState.morphListToPrune = morphList$$1;
      morph.childNodes = null;
    };
  }

  function isStableTemplate(template, lastYielded) {
    return !lastYielded.shadowTemplate && template === lastYielded.template;
  }
  function optionsFor(template, inverse, env, scope, morph, visitor) {
    // If there was a template yielded last time, set morphToClear so it will be cleared
    // if no template is yielded on this render.
    var morphToClear = morph.lastResult ? morph : null;
    var renderState = new templateUtils.RenderState(morphToClear, morph.morphList || null);

    return {
      templates: {
        template: wrapForHelper(template, env, scope, morph, renderState, visitor),
        inverse: wrapForHelper(inverse, env, scope, morph, renderState, visitor)
      },
      renderState: renderState
    };
  }

  function thisFor(options) {
    return {
      arity: options.template.arity,
      'yield': options.template.yield, // quoted since it's a reserved word, see issue #420
      yieldItem: options.template.yieldItem,
      yieldIn: options.template.yieldIn
    };
  }

  /**
    Host Hook: createScope

    @param {Scope?} parentScope
    @return Scope

    Corresponds to entering a new HTMLBars block.

    This hook is invoked when a block is entered with
    a new `self` or additional local variables.

    When invoked for a top-level template, the
    `parentScope` is `null`, and this hook should return
    a fresh Scope.

    When invoked for a child template, the `parentScope`
    is the scope for the parent environment.

    Note that the `Scope` is an opaque value that is
    passed to other host hooks. For example, the `get`
    hook uses the scope to retrieve a value for a given
    scope and variable name.
  */

  function createScope(env, parentScope) {
    if (parentScope) {
      return env.hooks.createChildScope(parentScope);
    } else {
      return env.hooks.createFreshScope();
    }
  }

  function createFreshScope() {
    // because `in` checks have unpredictable performance, keep a
    // separate dictionary to track whether a local was bound.
    // See `bindLocal` for more information.
    return { self: null, blocks: {}, locals: {}, localPresent: {} };
  }

  /**
    Host Hook: bindShadowScope

    @param {Scope?} parentScope
    @return Scope

    Corresponds to rendering a new template into an existing
    render tree, but with a new top-level lexical scope. This
    template is called the "shadow root".

    If a shadow template invokes `{{yield}}`, it will render
    the block provided to the shadow root in the original
    lexical scope.

    ```hbs
    {{!-- post template --}}
    <p>{{props.title}}</p>
    {{yield}}

    {{!-- blog template --}}
    {{#post title="Hello world"}}
      <p>by {{byline}}</p>
      <article>This is my first post</article>
    {{/post}}

    {{#post title="Goodbye world"}}
      <p>by {{byline}}</p>
      <article>This is my last post</article>
    {{/post}}
    ```

    ```js
    helpers.post = function(params, hash, options) {
      options.template.yieldIn(postTemplate, { props: hash });
    };

    blog.render({ byline: "Yehuda Katz" });
    ```

    Produces:

    ```html
    <p>Hello world</p>
    <p>by Yehuda Katz</p>
    <article>This is my first post</article>

    <p>Goodbye world</p>
    <p>by Yehuda Katz</p>
    <article>This is my last post</article>
    ```

    In short, `yieldIn` creates a new top-level scope for the
    provided template and renders it, making the original block
    available to `{{yield}}` in that template.
  */

  function bindShadowScope(env /*, parentScope, shadowScope */) {
    return env.hooks.createFreshScope();
  }

  function createChildScope(parent) {
    var scope = Object.create(parent);
    scope.locals = Object.create(parent.locals);
    scope.localPresent = Object.create(parent.localPresent);
    scope.blocks = Object.create(parent.blocks);
    return scope;
  }

  /**
    Host Hook: bindSelf

    @param {Scope} scope
    @param {any} self

    Corresponds to entering a template.

    This hook is invoked when the `self` value for a scope is ready to be bound.

    The host must ensure that child scopes reflect the change to the `self` in
    future calls to the `get` hook.
  */

  function bindSelf(env, scope, self) {
    scope.self = self;
  }

  function updateSelf(env, scope, self) {
    env.hooks.bindSelf(env, scope, self);
  }

  /**
    Host Hook: bindLocal

    @param {Environment} env
    @param {Scope} scope
    @param {String} name
    @param {any} value

    Corresponds to entering a template with block arguments.

    This hook is invoked when a local variable for a scope has been provided.

    The host must ensure that child scopes reflect the change in future calls
    to the `get` hook.
  */

  function bindLocal(env, scope, name, value) {
    scope.localPresent[name] = true;
    scope.locals[name] = value;
  }

  function updateLocal(env, scope, name, value) {
    env.hooks.bindLocal(env, scope, name, value);
  }

  /**
    Host Hook: bindBlock

    @param {Environment} env
    @param {Scope} scope
    @param {Function} block

    Corresponds to entering a shadow template that was invoked by a block helper with
    `yieldIn`.

    This hook is invoked with an opaque block that will be passed along
    to the shadow template, and inserted into the shadow template when
    `{{yield}}` is used. Optionally provide a non-default block name
    that can be targeted by `{{yield to=blockName}}`.
  */

  function bindBlock(env, scope, block) {
    var name = arguments.length <= 3 || arguments[3] === undefined ? 'default' : arguments[3];

    scope.blocks[name] = block;
  }

  /**
    Host Hook: block

    @param {RenderNode} renderNode
    @param {Environment} env
    @param {Scope} scope
    @param {String} path
    @param {Array} params
    @param {Object} hash
    @param {Block} block
    @param {Block} elseBlock

    Corresponds to:

    ```hbs
    {{#helper param1 param2 key1=val1 key2=val2}}
      {{!-- child template --}}
    {{/helper}}
    ```

    This host hook is a workhorse of the system. It is invoked
    whenever a block is encountered, and is responsible for
    resolving the helper to call, and then invoke it.

    The helper should be invoked with:

    - `{Array} params`: the parameters passed to the helper
      in the template.
    - `{Object} hash`: an object containing the keys and values passed
      in the hash position in the template.

    The values in `params` and `hash` will already be resolved
    through a previous call to the `get` host hook.

    The helper should be invoked with a `this` value that is
    an object with one field:

    `{Function} yield`: when invoked, this function executes the
    block with the current scope. It takes an optional array of
    block parameters. If block parameters are supplied, HTMLBars
    will invoke the `bindLocal` host hook to bind the supplied
    values to the block arguments provided by the template.

    In general, the default implementation of `block` should work
    for most host environments. It delegates to other host hooks
    where appropriate, and properly invokes the helper with the
    appropriate arguments.
  */

  function block(morph, env, scope, path, params, hash, template, inverse, visitor) {
    if (handleRedirect(morph, env, scope, path, params, hash, template, inverse, visitor)) {
      return;
    }

    continueBlock(morph, env, scope, path, params, hash, template, inverse, visitor);
  }

  function continueBlock(morph, env, scope, path, params, hash, template, inverse, visitor) {
    hostBlock(morph, env, scope, template, inverse, null, visitor, function (options) {
      var helper = env.hooks.lookupHelper(env, scope, path);
      return env.hooks.invokeHelper(morph, env, scope, visitor, params, hash, helper, options.templates, thisFor(options.templates));
    });
  }

  function hostBlock(morph, env, scope, template, inverse, shadowOptions, visitor, callback) {
    var options = optionsFor(template, inverse, env, scope, morph, visitor);
    templateUtils.renderAndCleanup(morph, env, options, shadowOptions, callback);
  }

  function handleRedirect(morph, env, scope, path, params, hash, template, inverse, visitor) {
    if (!path) {
      return false;
    }

    var redirect = env.hooks.classify(env, scope, path);
    if (redirect) {
      switch (redirect) {
        case 'component':
          env.hooks.component(morph, env, scope, path, params, hash, { default: template, inverse: inverse }, visitor);break;
        case 'inline':
          env.hooks.inline(morph, env, scope, path, params, hash, visitor);break;
        case 'block':
          env.hooks.block(morph, env, scope, path, params, hash, template, inverse, visitor);break;
        default:
          throw new Error("Internal HTMLBars redirection to " + redirect + " not supported");
      }
      return true;
    }

    if (handleKeyword(path, morph, env, scope, params, hash, template, inverse, visitor)) {
      return true;
    }

    return false;
  }

  function handleKeyword(path, morph, env, scope, params, hash, template, inverse, visitor) {
    var keyword = env.hooks.keywords[path];
    if (!keyword) {
      return false;
    }

    if (typeof keyword === 'function') {
      return keyword(morph, env, scope, params, hash, template, inverse, visitor);
    }

    if (keyword.willRender) {
      keyword.willRender(morph, env);
    }

    var lastState, newState;
    if (keyword.setupState) {
      lastState = objectUtils.shallowCopy(morph.getState());
      newState = morph.setState(keyword.setupState(lastState, env, scope, params, hash));
    }

    if (keyword.childEnv) {
      // Build the child environment...
      env = keyword.childEnv(morph.getState(), env);

      // ..then save off the child env builder on the render node. If the render
      // node tree is re-rendered and this node is not dirty, the child env
      // builder will still be invoked so that child dirty render nodes still get
      // the correct child env.
      morph.buildChildEnv = keyword.childEnv;
    }

    var firstTime = !morph.rendered;

    if (keyword.isEmpty) {
      var isEmpty = keyword.isEmpty(morph.getState(), env, scope, params, hash);

      if (isEmpty) {
        if (!firstTime) {
          templateUtils.clearMorph(morph, env, false);
        }
        return true;
      }
    }

    if (firstTime) {
      if (keyword.render) {
        keyword.render(morph, env, scope, params, hash, template, inverse, visitor);
      }
      morph.rendered = true;
      return true;
    }

    var isStable;
    if (keyword.isStable) {
      isStable = keyword.isStable(lastState, newState);
    } else {
      isStable = stableState(lastState, newState);
    }

    if (isStable) {
      if (keyword.rerender) {
        var newEnv = keyword.rerender(morph, env, scope, params, hash, template, inverse, visitor);
        env = newEnv || env;
      }
      morphUtils.validateChildMorphs(env, morph, visitor);
      return true;
    } else {
      templateUtils.clearMorph(morph, env, false);
    }

    // If the node is unstable, re-render from scratch
    if (keyword.render) {
      keyword.render(morph, env, scope, params, hash, template, inverse, visitor);
      morph.rendered = true;
      return true;
    }
  }

  function stableState(oldState, newState) {
    if (objectUtils.keyLength(oldState) !== objectUtils.keyLength(newState)) {
      return false;
    }

    for (var prop in oldState) {
      if (oldState[prop] !== newState[prop]) {
        return false;
      }
    }

    return true;
  }

  function linkRenderNode() /* morph, env, scope, params, hash */{
    return;
  }

  /**
    Host Hook: inline

    @param {RenderNode} renderNode
    @param {Environment} env
    @param {Scope} scope
    @param {String} path
    @param {Array} params
    @param {Hash} hash

    Corresponds to:

    ```hbs
    {{helper param1 param2 key1=val1 key2=val2}}
    ```

    This host hook is similar to the `block` host hook, but it
    invokes helpers that do not supply an attached block.

    Like the `block` hook, the helper should be invoked with:

    - `{Array} params`: the parameters passed to the helper
      in the template.
    - `{Object} hash`: an object containing the keys and values passed
      in the hash position in the template.

    The values in `params` and `hash` will already be resolved
    through a previous call to the `get` host hook.

    In general, the default implementation of `inline` should work
    for most host environments. It delegates to other host hooks
    where appropriate, and properly invokes the helper with the
    appropriate arguments.

    The default implementation of `inline` also makes `partial`
    a keyword. Instead of invoking a helper named `partial`,
    it invokes the `partial` host hook.
  */

  function inline(morph, env, scope, path, params, hash, visitor) {
    if (handleRedirect(morph, env, scope, path, params, hash, null, null, visitor)) {
      return;
    }

    var value = undefined,
        hasValue = undefined;
    if (morph.linkedResult) {
      value = env.hooks.getValue(morph.linkedResult);
      hasValue = true;
    } else {
      var options = optionsFor(null, null, env, scope, morph);

      var helper = env.hooks.lookupHelper(env, scope, path);
      var result = env.hooks.invokeHelper(morph, env, scope, visitor, params, hash, helper, options.templates, thisFor(options.templates));

      if (result && result.link) {
        morph.linkedResult = result.value;
        morphUtils.linkParams(env, scope, morph, '@content-helper', [morph.linkedResult], null);
      }

      if (result && 'value' in result) {
        value = env.hooks.getValue(result.value);
        hasValue = true;
      }
    }

    if (hasValue) {
      if (morph.lastValue !== value) {
        morph.setContent(value);
      }
      morph.lastValue = value;
    }
  }

  function keyword(path, morph, env, scope, params, hash, template, inverse, visitor) {
    handleKeyword(path, morph, env, scope, params, hash, template, inverse, visitor);
  }

  function invokeHelper(morph, env, scope, visitor, _params, _hash, helper, templates, context) {
    var params = normalizeArray(env, _params);
    var hash = normalizeObject(env, _hash);
    return { value: helper.call(context, params, hash, templates) };
  }

  function normalizeArray(env, array) {
    var out = new Array(array.length);

    for (var i = 0, l = array.length; i < l; i++) {
      out[i] = env.hooks.getCellOrValue(array[i]);
    }

    return out;
  }

  function normalizeObject(env, object) {
    var out = {};

    for (var prop in object) {
      out[prop] = env.hooks.getCellOrValue(object[prop]);
    }

    return out;
  }

  function classify() /* env, scope, path */{
    return null;
  }

  var keywords = {
    partial: function (morph, env, scope, params) {
      var value = env.hooks.partial(morph, env, scope, params[0]);
      morph.setContent(value);
      return true;
    },

    // quoted since it's a reserved word, see issue #420
    'yield': function (morph, env, scope, params, hash, template, inverse, visitor) {
      // the current scope is provided purely for the creation of shadow
      // scopes; it should not be provided to user code.

      var to = env.hooks.getValue(hash.to) || 'default';
      var block = env.hooks.getBlock(scope, to);

      if (block) {
        block.invoke(env, params, hash.self, morph, scope, visitor);
      }
      return true;
    },

    hasBlock: function (morph, env, scope, params) {
      var name = env.hooks.getValue(params[0]) || 'default';
      return !!env.hooks.getBlock(scope, name);
    },

    hasBlockParams: function (morph, env, scope, params) {
      var name = env.hooks.getValue(params[0]) || 'default';
      var block = env.hooks.getBlock(scope, name);
      return !!(block && block.arity);
    }

  };

  exports.keywords = keywords;
  /**
    Host Hook: partial

    @param {RenderNode} renderNode
    @param {Environment} env
    @param {Scope} scope
    @param {String} path

    Corresponds to:

    ```hbs
    {{partial "location"}}
    ```

    This host hook is invoked by the default implementation of
    the `inline` hook. This makes `partial` a keyword in an
    HTMLBars environment using the default `inline` host hook.

    It is implemented as a host hook so that it can retrieve
    the named partial out of the `Environment`. Helpers, in
    contrast, only have access to the values passed in to them,
    and not to the ambient lexical environment.

    The host hook should invoke the referenced partial with
    the ambient `self`.
  */

  function partial(renderNode, env, scope, path) {
    var template = env.partials[path];
    return template.render(scope.self, env, {}).fragment;
  }

  /**
    Host hook: range

    @param {RenderNode} renderNode
    @param {Environment} env
    @param {Scope} scope
    @param {any} value

    Corresponds to:

    ```hbs
    {{content}}
    {{{unescaped}}}
    ```

    This hook is responsible for updating a render node
    that represents a range of content with a value.
  */

  function range(morph, env, scope, path, value, visitor) {
    if (handleRedirect(morph, env, scope, path, [], {}, null, null, visitor)) {
      return;
    }

    value = env.hooks.getValue(value);

    if (morph.lastValue !== value) {
      morph.setContent(value);
    }

    morph.lastValue = value;
  }

  /**
    Host hook: element

    @param {RenderNode} renderNode
    @param {Environment} env
    @param {Scope} scope
    @param {String} path
    @param {Array} params
    @param {Hash} hash

    Corresponds to:

    ```hbs
    <div {{bind-attr foo=bar}}></div>
    ```

    This hook is responsible for invoking a helper that
    modifies an element.

    Its purpose is largely legacy support for awkward
    idioms that became common when using the string-based
    Handlebars engine.

    Most of the uses of the `element` hook are expected
    to be superseded by component syntax and the
    `attribute` hook.
  */

  function element(morph, env, scope, path, params, hash, visitor) {
    if (handleRedirect(morph, env, scope, path, params, hash, null, null, visitor)) {
      return;
    }

    var helper = env.hooks.lookupHelper(env, scope, path);
    if (helper) {
      env.hooks.invokeHelper(null, env, scope, null, params, hash, helper, { element: morph.element });
    }
  }

  /**
    Host hook: attribute

    @param {RenderNode} renderNode
    @param {Environment} env
    @param {String} name
    @param {any} value

    Corresponds to:

    ```hbs
    <div foo={{bar}}></div>
    ```

    This hook is responsible for updating a render node
    that represents an element's attribute with a value.

    It receives the name of the attribute as well as an
    already-resolved value, and should update the render
    node with the value if appropriate.
  */

  function attribute(morph, env, scope, name, value) {
    value = env.hooks.getValue(value);

    if (morph.lastValue !== value) {
      morph.setContent(value);
    }

    morph.lastValue = value;
  }

  function subexpr(env, scope, helperName, params, hash) {
    var helper = env.hooks.lookupHelper(env, scope, helperName);
    var result = env.hooks.invokeHelper(null, env, scope, null, params, hash, helper, {});
    if (result && 'value' in result) {
      return env.hooks.getValue(result.value);
    }
  }

  /**
    Host Hook: get

    @param {Environment} env
    @param {Scope} scope
    @param {String} path

    Corresponds to:

    ```hbs
    {{foo.bar}}
      ^

    {{helper foo.bar key=value}}
             ^           ^
    ```

    This hook is the "leaf" hook of the system. It is used to
    resolve a path relative to the current scope.
  */

  function get(env, scope, path) {
    if (path === '') {
      return scope.self;
    }

    var keys = path.split('.');
    var value = env.hooks.getRoot(scope, keys[0])[0];

    for (var i = 1; i < keys.length; i++) {
      if (value) {
        value = env.hooks.getChild(value, keys[i]);
      } else {
        break;
      }
    }

    return value;
  }

  function getRoot(scope, key) {
    if (scope.localPresent[key]) {
      return [scope.locals[key]];
    } else if (scope.self) {
      return [scope.self[key]];
    } else {
      return [undefined];
    }
  }

  function getBlock(scope, key) {
    return scope.blocks[key];
  }

  function getChild(value, key) {
    return value[key];
  }

  function getValue(reference) {
    return reference;
  }

  function getCellOrValue(reference) {
    return reference;
  }

  function component(morph, env, scope, tagName, params, attrs, templates, visitor) {
    if (env.hooks.hasHelper(env, scope, tagName)) {
      return env.hooks.block(morph, env, scope, tagName, params, attrs, templates.default, templates.inverse, visitor);
    }

    componentFallback(morph, env, scope, tagName, attrs, templates.default);
  }

  function concat(env, params) {
    var value = "";
    for (var i = 0, l = params.length; i < l; i++) {
      value += env.hooks.getValue(params[i]);
    }
    return value;
  }

  function componentFallback(morph, env, scope, tagName, attrs, template) {
    var element = env.dom.createElement(tagName);
    for (var name in attrs) {
      element.setAttribute(name, env.hooks.getValue(attrs[name]));
    }
    var fragment = _render2.default(template, env, scope, {}).fragment;
    element.appendChild(fragment);
    morph.setNode(element);
  }

  function hasHelper(env, scope, helperName) {
    return env.helpers[helperName] !== undefined;
  }

  function lookupHelper(env, scope, helperName) {
    return env.helpers[helperName];
  }

  function bindScope() /* env, scope */{
    // this function is used to handle host-specified extensions to scope
    // other than `self`, `locals` and `block`.
  }

  function updateScope(env, scope) {
    env.hooks.bindScope(env, scope);
  }

  exports.default = {
    // fundamental hooks that you will likely want to override
    bindLocal: bindLocal,
    bindSelf: bindSelf,
    bindScope: bindScope,
    classify: classify,
    component: component,
    concat: concat,
    createFreshScope: createFreshScope,
    getChild: getChild,
    getRoot: getRoot,
    getBlock: getBlock,
    getValue: getValue,
    getCellOrValue: getCellOrValue,
    keywords: keywords,
    linkRenderNode: linkRenderNode,
    partial: partial,
    subexpr: subexpr,

    // fundamental hooks with good default behavior
    bindBlock: bindBlock,
    bindShadowScope: bindShadowScope,
    updateLocal: updateLocal,
    updateSelf: updateSelf,
    updateScope: updateScope,
    createChildScope: createChildScope,
    hasHelper: hasHelper,
    lookupHelper: lookupHelper,
    invokeHelper: invokeHelper,
    cleanupRenderNode: null,
    destroyRenderNode: null,
    willCleanupTree: null,
    didCleanupTree: null,
    willRenderNode: null,
    didRenderNode: null,

    // derived hooks
    attribute: attribute,
    block: block,
    createScope: createScope,
    element: element,
    get: get,
    inline: inline,
    range: range,
    keyword: keyword
  };

  });

  var Hooks = unwrapExports(hooks);
  var hooks_1 = hooks.wrap;
  var hooks_2 = hooks.wrapForHelper;
  var hooks_3 = hooks.createScope;
  var hooks_4 = hooks.createFreshScope;
  var hooks_5 = hooks.bindShadowScope;
  var hooks_6 = hooks.createChildScope;
  var hooks_7 = hooks.bindSelf;
  var hooks_8 = hooks.updateSelf;
  var hooks_9 = hooks.bindLocal;
  var hooks_10 = hooks.updateLocal;
  var hooks_11 = hooks.bindBlock;
  var hooks_12 = hooks.block;
  var hooks_13 = hooks.continueBlock;
  var hooks_14 = hooks.hostBlock;
  var hooks_15 = hooks.handleRedirect;
  var hooks_16 = hooks.handleKeyword;
  var hooks_17 = hooks.linkRenderNode;
  var hooks_18 = hooks.inline;
  var hooks_19 = hooks.keyword;
  var hooks_20 = hooks.invokeHelper;
  var hooks_21 = hooks.classify;
  var hooks_22 = hooks.partial;
  var hooks_23 = hooks.range;
  var hooks_24 = hooks.element;
  var hooks_25 = hooks.attribute;
  var hooks_26 = hooks.subexpr;
  var hooks_27 = hooks.get;
  var hooks_28 = hooks.getRoot;
  var hooks_29 = hooks.getBlock;
  var hooks_30 = hooks.getChild;
  var hooks_31 = hooks.getValue;
  var hooks_32 = hooks.getCellOrValue;
  var hooks_33 = hooks.component;
  var hooks_34 = hooks.concat;
  var hooks_35 = hooks.hasHelper;
  var hooks_36 = hooks.lookupHelper;
  var hooks_37 = hooks.bindScope;
  var hooks_38 = hooks.updateScope;
  var hooks_39 = hooks.keywords;

  /**
   * @module Core
   */

  var ObservableArray =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(ObservableArray, _Obj);

    /**
     * An ObservableArray is a simple list that notifies listeners
     * of any changes in the list or any of it's observable items.
     *
     * @class Core.ObservableArray
     *
     * @constructor
     * @param  {Array}  [initValues=[]]        			 An array of values to initialize the object with
     * @param  {Boolean} [convertToObservables=true]	 Whether to convert any Object and Array values in the `initValues` parameter into Observable and ObservableArray instance
     */
    function ObservableArray() {
      var _this;

      var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _classCallCheck(this, ObservableArray);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ObservableArray).call(this)); // Properties

      _this.items = []; // Single initvalue given

      if (!(initValues instanceof Array)) initValues = [initValues]; // Import start values

      _this.import(initValues, convertToObservables, true);
      /**
       * Whenever this property is true, no notifications will be triggered
       * 
       * @attribute notificationsDisabled
       * @type {Boolean}
       */


      _this.notificationsDisabled = false;
      _this.isStudyingChildren = false;
      _this.allowStudyChildren = true;

      _this.childStudyCallback = function () {
        // Trigger on.
        _this._scheduleChanged();
      };

      return _this;
    }

    _createClass(ObservableArray, [{
      key: "import",
      value: function _import(arr) {
        var _this2 = this;

        var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        // Go through to the object's first level
        _.each(arr, function (value) {
          // Is the value an array or object?
          if ((Array.isArray(value) || _typeof(value) === 'object') && convertToObservables === true) {
            // Array or object?
            if (Array.isArray(value)) {
              // Put a new observable array in there
              _this2.items.push(new ObservableArray(value));
            } else {
              // Put a new observable in there
              _this2.items.push(ClassMap.create('Observable', [value]));
            }
          } else {
            // Just add the value (don't notify)
            _this2.items.push(value);
          }
        }); // Trigger changes


        if (!this.notificationsDisabled) {
          this.trigger(ObservableArray.Events.Import);
          this.trigger(ObservableArray.Events.Change);
          this.trigger(ObservableArray.Events.Add, arr);
        }

        return this;
      }
    }, {
      key: "get",
      value: function get(key) {
        // Split
        var parts = Number.isInteger(key) ? [key] : key.split(/\./);
        var currentPart = parts.shift(); // Is it a wildcard?

        var value = undefined;

        if (currentPart === '*') {
          // We will return an array containg all the values we retrieve!
          var restKey = parts.join('.');
          return _.map(this.items, function (item) {
            return item.get(restKey);
          });
        } else if (Number.isInteger(currentPart) || currentPart.match(/^\d+$/)) {
          // Get the value
          value = this.items[currentPart];
        } else {
          throw new TypeError('Invalid key: ' + key);
        } // Value found?


        if (value === undefined || parts.length === 0) {
          return value;
        } // Check if the value is also an observable


        if (ObservableArray.isObservable(value)) {
          // Pass the rest along to go a level deeper
          return value.get(parts.join('.'));
        } else {
          throw new Error('The found value for ' + key + ' is not an Observable and cannot be used with dot-notation to retreive subvalues. Value is ' + _typeof(value));
        }
      }
    }, {
      key: "set",
      value: function set(key, value) {
        var _this3 = this;

        var convertToObservables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        // Convert?
        if (convertToObservables === true && _typeof(value) === 'object' && value.constructor === Object) {
          value = ClassMap.create('Observable', value);
        } // Numeric?


        if (Number.isInteger(key) || typeof key === 'string' && key.match(/^\d+$/)) {
          // Set it
          this.items[key] = value;
          return this;
        } // Is there a dot in there?


        if (typeof key === 'string' && key.match(/\.\w/)) {
          ////////////////////////
          // Split and deep set //
          ////////////////////////
          var parts = key.split(/\./);
          var currentPart = parts.shift(); // Does the first key exist?

          var item = this.items[currentPart];

          if (item === undefined) {
            // Should it be an array or an observable?
            var newValue;

            if (Number.isInteger(parts[0]) || typeof parts[0] === 'string' && parts[0].match(/^\d+$/)) {
              // Create list (using classmap to prevent circular dependencies)
              newValue = new ObservableArray();
            } else {
              // Create it
              newValue = ClassMap.create('Observable');
            } // Study it


            if (this.isStudyingChildren) {
              newValue.study(function () {
                _this3.trigger(ObservableArray.Events.Change);
              });
            } // Store it


            this.items[currentPart] = newValue;
          } // Do deep setting


          this.get(currentPart).set(parts.join('.'), value);
          return this;
        }

        throw new TypeError('Invalid key');
      }
      /**
       * Add one or more items to the array
       *
       * @method add
       * @param {...[mixed]} values One or more values to add
       * @chainable
       */

    }, {
      key: "add",
      value: function add() {
        var _this4 = this;

        // Is the last value a boolean?
        var doNotNotify = false;

        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        if (values.length > 1 && typeof values[values.length - 1] === 'boolean') {
          doNotNotify = values.pop();
        } // Add items


        _.each(values, function (value) {
          _this4._add(value);
        }); // Trigger events


        if (!doNotNotify) {
          this.trigger(ObservableArray.Events.Change);
          this.trigger(ObservableArray.Events.Add, values);
        }

        return this;
      }
    }, {
      key: "_add",
      value: function _add(value) {
        var _this5 = this;

        // Add it.
        this.items.push(value); // Studying?

        if (this.isStudyingChildren && this.allowStudyChildren) {
          if (ObservableArray.isObservable(value)) value.study(this.childStudyCallback);
        } // Is it observable?


        if (ObservableArray.isObservable(value)) {
          value.on('change', function () {
            _this5.trigger('change');
          });
        }

        return this;
      }
      /**
       * Delete one or more items from the array
       *
       * @method delete
       * @param  {...[mixed]} values One or more values to delete
       * @chainable
       */

    }, {
      key: "delete",
      value: function _delete() {
        var _this6 = this;

        // Is the last value a boolean?
        var doNotNotify = false;

        for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          values[_key2] = arguments[_key2];
        }

        if (values.length > 1 && typeof values[values.length - 1] === 'boolean') {
          doNotNotify = values.pop();
        } // Add items


        _.each(values, function (value) {
          _this6._delete(value);
        }); // Studying?


        if (this.isStudyingChildren) {
          _.each(values, function (item) {
            if (ObservableArray.isObservable(item)) item.neglect(_this6.childStudyCallback);
          });
        } // Trigger events


        if (!doNotNotify) {
          this.trigger(ObservableArray.Events.Change);
          this.trigger(ObservableArray.Events.Delete, values);
        }

        return this;
      }
    }, {
      key: "_delete",
      value: function _delete(value) {
        this.items = _.without(this.items, value);
      }
      /**
       * Remove all items from the array
       *
       * @method empty
       * @chainable
       */

    }, {
      key: "empty",
      value: function empty() {
        var _this7 = this;

        // Values that are deleted
        var deleted = _.difference(this.items, []); // Remove all listeners


        if (this.isStudyingChildren) {
          _.each(this.items, function (item) {
            item.neglect(_this7.childStudyCallback);
          });
        } // Now clear


        this.items = []; // Trigger events

        this.trigger(ObservableArray.Events.Change);
        this.trigger(ObservableArray.Events.Delete, deleted);
        this.trigger(ObservableArray.Events.Empty);
        return this;
      }
      /**
       * Get the first item in the collection
       * 
       * @method first
       * @return {mixed} 
       */

    }, {
      key: "first",
      value: function first() {
        return _.first(this.items);
      }
      /**
       * Get the last item in the collection
       *
       * @method last
       * @return {mixed} 
       */

    }, {
      key: "last",
      value: function last() {
        return _.last(this.items);
      }
      /**
       * Listen for any changes in any of the object's attributes. 
       * The callback will receive an array containing the names of
       * all updates attributes. 
       *
       * Note: This is an alias of the 'changed' event, so calling
       * ```this.on('changed', callback)``` will achieve the same result.
       *
       * @example
       * 	// Initialize object
       * 	var obj = new Chicken.Core.Observable();
       * 	obj.set('foo', 'bar');
       * 	var childObj = new Chicken.Core.Observable();
       * 	childObj.set('free', 'willy');
       * 	obj.set('child', childObj);
       *
       * 	// Listen
       * 	obj.study((changedAttributes) {
       * 		console.log(changedAttributes);
       * 	});
       *
       * 	// Update attributes
       *	obj.set('foo', 'boo');                  // Will log ['foo']
       *	obj.get('child').set('free', 'tibet');  // Will log ['child']
       * 	childObj.set('foo', 'bee');             // Will log ['child']
       *
       * @method study
       * @param  {Function} callback
       * @chainable
       */

    }, {
      key: "study",
      value: function study(callback) {
        var _this8 = this;

        // Already studying?
        if (!this.isStudyingChildren && this.allowStudyChildren) {
          // Set
          this.isStudyingChildren = true; // Watch all current children

          _.each(this.items, function (item) {
            if (ObservableArray.isObservable(item)) item.study(_this8.childStudyCallback);
          });
        } // Connect to change-event


        return this.on('change', callback);
      }
      /**
       * Stop listening for changes on the object's attributes.
       *
       * Note: This is an alias of the 'changed' event, so calling
       * ```this.off('changed', callback)``` will achieve the same result.
       *
       * @example
       * 
       * 
       * @method neglect
       * @param  {Function} callback 
       * @chainable
       */

    }, {
      key: "neglect",
      value: function neglect(callback) {
        // This is an alias of the 'changed' event
        return this.off('change', callback);
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var includedUids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return this.items.map(function (item) {
          // Observable?
          if (ObservableArray.isObservable(item)) {
            // Already included?
            var guid = ClassMap.get('Utils').uidFor(item);

            if (_.indexOf(includedUids, guid) !== -1) {
              return '...recursive(' + guid + ')...';
            }

            includedUids.push(guid); // Array?

            if (item instanceof ObservableArray) {
              return item.toArray(includedUids);
            } else {
              return item.toObject(includedUids);
            }
          }

          return item;
        });
      }
      /**
       * Get a keyed array containing all items in this ObservableArray
       * by the value of given key.
       *
       * @method keyBy
       * @param  {string} key 	The attribute key. You can also use dot-notation in this key.
       * @return {Object}     
       */

    }, {
      key: "keyBy",
      value: function keyBy(key) {
        // Loop it.
        var result = {};

        _.each(this.items, function (item) {
          var keyValue = item.get(key);
          if (keyValue) result[keyValue] = item;
        });

        return result;
      }
    }, {
      key: "sortBy",
      value: function sortBy(keyOrCallback) {
        // Is it a key?
        var callback = keyOrCallback;

        if (typeof keyOrCallback === 'string') {
          callback = function callback(item) {
            return item.get(keyOrCallback);
          };
        } // Now sort!


        this.items = _.sortBy(this.items, callback);
        return this;
      }
    }, {
      key: "reverse",
      value: function reverse() {
        this.items.reverse();
        return this;
      }
      /**
       * Get a keyed array containing ObservableArray's with values that have the same
       * value for given key.
       *
       * @method groupBy
       * @param  {string} keyOrCallback  The attribute key. You can also use dot-notation in this key.
       * @param  {string} [defaultGroup=default] The key under which to put items that have no value for given key
       * @param  {boolean} [makeObservable=false] 
       * @return {Object}
       */

    }, {
      key: "groupBy",
      value: function groupBy(keyOrCallback) {
        var defaultGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
        var makeObservable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        // Get called class
        var MyClass = this.constructor; // Loop it

        var result = makeObservable ? ClassMap.create('Observable', []) : {};

        _.each(this.items, function (item) {
          // Get value
          var keyValue = typeof keyOrCallback === 'function' ? keyOrCallback(item) : item.get(keyOrCallback); // Nothing?

          if (!keyValue) keyValue = defaultGroup; // Map?

          if (makeObservable) {
            // Group known?
            if (!result.get(keyValue)) result.set(keyValue, new MyClass()); // Add it

            result.get(keyValue).add(item);
          } else {
            // Group known?
            if (!result[keyValue]) result[keyValue] = new MyClass(); // Add it

            result[keyValue].add(item);
          }
        });

        return result;
      }
      /**
       * Get value for given valueAttribute key from all items
       * 
       *
       * @method list 
       * @param  {string} valueAttribute 
       * @param  {string} keyAttribute   
       * @return {[type]}                [description]
       */

    }, {
      key: "list",
      value: function list(valueAttribute) {
        var keyAttribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var result = keyAttribute ? {} : [];

        _.each(this.items, function (item) {
          if (keyAttribute) {
            result[item.get(keyAttribute)] = item.get(valueAttribute);
          } else {
            result.push(item.get(valueAttribute));
          }
        });

        return result;
      }
      /**
       * Get the lowest value for objects in this array
       *
       * @method getLowestValue
       * @param  {string}  key          
       * @return {mixed}
       */

    }, {
      key: "getLowestValue",
      value: function getLowestValue(key) {
        // Get a list.
        var list = this.list(key);
        return _.min(list);
      }
    }, {
      key: "each",
      value: function each(callback) {
        _.each(this.items, callback);

        return this;
      }
    }, {
      key: "reverseEach",
      value: function reverseEach(callback) {
        for (var q = this.items.length - 1; q >= 0; q--) {
          callback.apply(null, [this.items[q]]);
        }

        return this;
      }
    }, {
      key: "find",
      value: function find(idOrAttributeOrCallback) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        // Callback?
        if (typeof idOrAttributeOrCallback === 'function') {
          return _.find(this.items, idOrAttributeOrCallback);
        }

        var attribute = 'id';

        if (value === undefined) {
          value = idOrAttributeOrCallback;
        } else {
          attribute = idOrAttributeOrCallback;
        }

        return _.find(this.items, function (item) {
          if (ClassMap.isA(item, 'Observable') || item instanceof ObservableArray) {
            return item.get(attribute) == value;
          } else if (item instanceof Object) {
            return item[attribute] == value;
          } else {
            return item == value;
          }
        });
      }
      /**
       * find object with empty attribute 
       *
       * @method findEmpty
       * @param  {string}	attribute 	the attribute checked for definition
       * @return {mixed}				the object containing the empty property or `undefined`
       */

    }, {
      key: "findEmpty",
      value: function findEmpty(attribute) {
        return _.find(this.items, function (item) {
          if (ClassMap.isA(item, 'Observable') || item instanceof ObservableArray) {
            return !item.get(attribute);
          } else if (item instanceof Object) {
            return !item[attribute];
          } else {
            return false;
          }
        });
      }
    }, {
      key: "contains",
      value: function contains(item) {
        return _.contains(this.items, item);
      }
    }, {
      key: "sum",
      value: function sum(callback) {
        if (typeof callback === 'string') {
          var key = callback;

          callback = function callback(i) {
            return i.get(key);
          };
        }

        var values = _.map(this.items, callback);

        return _.reduce(values, function (memo, num) {
          return memo + num;
        }, 0);
      }
    }, {
      key: "map",
      value: function map(callback) {
        return _.map(this.items, callback);
      }
    }, {
      key: "extend",
      value: function extend(observableArray) {
        return _.extend(this.items, observableArray.items);
      }
    }, {
      key: "filter",
      value: function filter() {
        // Parse arguments
        if (arguments.length === 0) throw new Error('The filter method requires at least one argument.');
        var callback;
        var returnObservableArray = true;

        if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function') {
          // Use given callback method
          callback = arguments.length <= 0 ? undefined : arguments[0];
          if (arguments.length > 1) returnObservableArray = arguments.length <= 1 ? undefined : arguments[1];
        } else if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
          // Create callback
          var key = arguments.length <= 0 ? undefined : arguments[0];
          var value = arguments.length <= 1 ? undefined : arguments[1];

          callback = function callback(item) {
            return item.get(key) == value;
          };

          if (arguments.length > 2) returnObservableArray = arguments.length <= 2 ? undefined : arguments[2];
        } // Do the filter


        var result = _.filter(this.items, callback);

        return returnObservableArray ? new ObservableArray(result, false) : result;
      }
    }, {
      key: "chunk",
      value: function chunk() {
        var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
        // Loop and add
        var cls = this.constructor;
        var chunks = new ObservableArray();
        var chunk = new cls();

        for (var i = 0; i < this.items.length; i++) {
          // New chunk?
          if (i > 0 && i % size === 0) {
            // New chunk
            chunks.add(chunk);
            chunk = new cls();
          } // Add it


          chunk.add(this.items[i]);
        }

        chunks.add(chunk);
        return chunks;
      }
      /**
       * The number of items in the array
       * 
       * @property length
       * @type {Number}
       */

    }, {
      key: "count",
      value: function count() {
        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (callback) {
          // Count only those
          var c = 0;

          _.each(this.items, function (item) {
            if (callback(item) === true) c++;
          });

          return c;
        }

        return this.length;
      }
    }, {
      key: "size",
      value: function size() {
        return this.length;
      }
    }, {
      key: "isObservable",
      value: function isObservable() {
        return true;
      }
    }, {
      key: "_scheduleChanged",
      value: function _scheduleChanged() {
        var _this9 = this;

        // Notifications disabled?
        if (this.notificationsDisabled) return; // Already something scheduled?

        if (!this._scheduleChangedTimeout) {
          // Schedule it
          this._scheduleChangedTimeout = setTimeout(function () {
            // Trigger it now!
            _this9._scheduleChangedTimeout = false;

            _this9._triggerChanged();
          }, ObservableArray.ChangedDelay);
        }
      }
    }, {
      key: "_triggerChanged",
      value: function _triggerChanged() {
        this.trigger(ObservableArray.Events.Change);
      }
    }, {
      key: "length",
      get: function get() {
        return this.items.length;
      }
    }]);

    return ObservableArray;
  }(Obj); ////////////
  // Events //
  ////////////


  ObservableArray.Events = {
    /**
     * This event is fired whenever anything changes in the array
     * of one of its observable items.
     * 
     * @event change
     */
    Change: 'change',

    /**
     * This event is fired whenever one or more items are added
     * 
     * @event add
     * @param {Array} values		The item values that were added
     */
    Add: 'add',

    /**
     * This event is fired whenever one or more items are deleted
     * 
     * @event delete
     * @param {Array} values		The item values that were deleted
     */
    Delete: 'delete',

    /**
     * This event is fired when the array is emptied. Not that the `delete`
     * event is also triggered, right before the `empty` event.
     *
     * @event empty
     */
    Empty: 'empty',

    /**
     * This event is fired whenever an import is completed
     *
     * @event import
     */
    Import: 'import'
  };

  ObservableArray.isObservable = function (obj) {
    return _typeof(obj) === 'object' && obj !== null && typeof obj.isObservable === 'function' && obj.isObservable() === true;
  };

  ObservableArray.ChangedDelay = 100;
  ClassMap.register('ObservableArray', ObservableArray);

  /**
   * @module Dom
   */

  var Binding =
  /*#__PURE__*/
  function () {
    /**
     * @class Dom.Binding
     * 
     * @constructor
     * @param  {Dom.Renderer} 							renderer   
     * @param  {Core.Observable|Core.ObservableArray} 	observable 
     * @param  {string} 								path       	
     */
    function Binding(renderer, observable, path) {
      var _this = this;

      _classCallCheck(this, Binding);

      /**
       * The Renderer this Binding has been created by. This is 
       * used to be able to hook back into Rendere functions.
       *
       * @property renderer
       * @type {Dom.Renderer}
       */
      this.renderer = renderer;
      /**
       * The Observable (or ObservableArray) that contains the data.
       * 
       * @property observable
       * @type {Core.Observable|Core.ObservableArray}
       */

      this.observable = observable;
      /**
       * The path/key in the Observable to observe
       *
       * @property path
       * @type {string}
       */

      this.path = typeof path === 'string' && path.length > 0 ? path : false;
      /**
       * The list of 'morph' objects that are bound by this Binding. A
       * morph refers to a specific part of the DocumentFragment that can be
       * updated. These morphs are provides by the HTMLBars package.
       * 
       * @property morphs
       * @type {Set} 
       */

      this.morphs = new Set(); ////////////////
      // Now watch! //
      ////////////////
      // What to do when value changes

      this.changeCallback = function () {
        // Trigger updates for all morphs
        _this.morphs.forEach(function (morph) {
          morph.isDirty = true;
          if (morph.view) morph.view.scheduleRevalidate();
          if (morph.component) morph.component.scheduleRevalidate();
        });
      }; // Now listen to the object


      if (this.path) {
        try {
          this.observable.observe(path, this.changeCallback);
        } catch (ex) {//...
        }
      } else {
        this.observable.study(this.changeCallback);
      }
    }
    /**
     * Get the current value of the data object
     *
     * @method getValue
     * @return {mixed}
     */


    _createClass(Binding, [{
      key: "getValue",
      value: function getValue() {
        // Get a path value
        if (this.path) {
          return this.observable.get(this.path);
        } // Then return the whole thing


        return this.observable;
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        var morph = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (morph) {
          // Make sure the morph is not updated itself by this value setting
          morph.lastValue = value;
        }

        return this.observable.set(this.path, value);
      }
    }, {
      key: "getReference",
      value: function getReference() {
        if (!this.reference) {
          this.reference = new Reference(this.observable, this.path);
        }

        return this.reference;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        // Unlisten the object
        if (this.path) {
          this.observable.disregard(this.path, this.changeCallback);
        } else {
          this.observable.neglect(this.changeCallback);
        }
      }
      /**
       * Add a morph object to the list of morphs, so that it will
       * be updated when the data changes. And in cases when applicable,
       * vice-versa.
       *
       * @method addMorph
       * @param {HTMLBarsMorph} morph 
       * @param {object} scope
       */

    }, {
      key: "addMorph",
      value: function addMorph(morph, scope) {
        // Is this an already bound morph?
        if (this.morphs.has(morph)) return; //////////////////////////////////////////
        // Add the morph, for data->dom binding //
        //////////////////////////////////////////

        this.morphs.add(morph); // Save the component and view

        morph.view = scope.view || scope.self;
        if (scope.component) morph.component = scope.component; ///////////////////////////////////////////
        // Check node type for dom->data binding //
        ///////////////////////////////////////////

        for (var key in Binding.TwoWay) {
          // Check if it applies
          var twoWay = Binding.TwoWay[key];

          if (twoWay.match(morph)) {
            // Let's bind!
            twoWay.bind(this, morph);
            break;
          }
        }
      }
    }]);

    return Binding;
  }();

  Binding.TwoWay = {
    InputValue: {
      match: function match(morph) {
        return morph.element && /^INPUT$/.test(morph.element.tagName) && morph.attrName === 'value' && /^text|search|date|time|password|number|range|email$/.test(morph.element.type);
      },
      bind: function bind(binding, morph) {
        // Listen to key up, etc
        var $element = $(morph.element);
        var lastValue = $element.val();
        $element.on('input keyup keydown propertychange change paste', function () {
          var v = $element.val();

          if (v !== lastValue) {
            binding.setValue(v, morph);
            lastValue = v;
          }
        });
      }
    },
    TextareaContent: {
      match: function match(morph) {
        return morph.contextualElement && /^TEXTAREA$/.test(morph.contextualElement.tagName) && morph.attributeName === undefined;
      },
      bind: function bind(binding, morph) {
        // Listen to key up, etc
        var $element = $(morph.contextualElement);
        $element.on('keyup change paste', function () {
          binding.setValue($element.val(), morph);
        });
      }
    },
    SelectValue: {
      match: function match(morph) {
        return morph.element && /^SELECT$/.test(morph.element.tagName) && morph.attrName === 'value';
      },
      bind: function bind(binding, morph) {
        // Listen to change
        var $element = $(morph.element);
        $element.on('change', function () {
          binding.setValue($element.val(), morph);
        });
      }
    },
    CheckboxChecked: {
      match: function match(morph) {
        return morph.element && /^INPUT$/.test(morph.element.tagName) && morph.attrName === 'checked' && /^checkbox$/.test(morph.element.type);
      },
      bind: function bind(binding, morph) {
        // Listen to key up, etc
        var $element = $(morph.element);
        $element.on('change', function () {
          binding.setValue($element.prop('checked'), morph);
        });
      }
    }
  };

  var validator = new RegExp("^[a-z0-9]{32}$", "i");

  function gen(count) {
    var out = "";
    for (var i=0; i<count; i++) {
      out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return out;
  }

  function Uuid(uuid) {
    if (!uuid) throw new TypeError("Invalid argument; `value` has no value.");
      
    var value = Uuid.EMPTY;
    
    if (uuid && uuid instanceof Uuid) {
      value = Uuid.toString();

    } else if (uuid && Object.prototype.toString.call(uuid) === "[object String]" && Uuid.isUuid(uuid)) {
      value = uuid;
    }
    
    this.equals = function(other) {
      // Comparing string `value` against provided `uuid` will auto-call
      // toString on `uuid` for comparison
      return Uuid.isUuid(other) && value == other;
    };

    this.isEmpty = function() {
      return value === Uuid.EMPTY;
    };
    
    this.toString = function() {
      return value;
    };
    
    this.toJSON = function() {
      return value;
    };
    
    Object.defineProperty(this, "value", {
      get: function() { return value; },
      enumerable: true
    });
  }
  Object.defineProperty(Uuid, "EMPTY", {
    value: "00000000000000000000000000000000"
  });

  Uuid.isUuid = function(value) {
    return value && (value instanceof Uuid || validator.test(value.toString()));
  };

  Uuid.create = function() {
    return new Uuid(gen(8));
  };

  Uuid.raw = function() {
    return gen(8);
  };

  var uuidLib = Uuid;

  /**
   * @module Dom
   */

  var ActionBinding =
  /*#__PURE__*/
  function () {
    /**
     * @class Dom.ActionBinding
     * 
     * @constructor
     */
    function ActionBinding(renderer, morph, actionName, actionHandler, parameters, options, view) {
      _classCallCheck(this, ActionBinding);

      /**
       * @property renderer
       * @type {Dom.Renderer}
       */
      this.renderer = renderer;
      /**
       * @property morph
       * @type {HTMLBarsMorph}
       */

      this.morph = morph;
      /**
       * The name of the action on the view
       * 
       * @property actionName
       * @type {string}
       */

      this.actionName = actionName;
      /**
       * The function to call when the action is executed
       * 
       * @property actionHandler
       * @type {function}
       */

      this.actionHandler = actionHandler;
      /**
       * @property options
       * @type {object}
       */

      this.options = _.defaults(options, {
        preventDefault: true
      });
      /**
       * The parameters that will be passed along to the action handler.
       * 
       * @property parameters
       * @type {array}
       */

      this.parameters = parameters;
      /**
       * @property view
       * @type {Dom.View}
       */

      this.view = view;
      /**
       * The name of the event that is listened to on the element.
       * When not specifically configured in the binding itself, a default
       * event will be decided on, based on the element tag name. 
       * 
       * @property eventName
       * @type {string}
       */

      this.eventName = options.on ? options.on : ActionBinding.getDefaultEventName(morph.element);
      /**
       * Indicator whether the binding is applied
       * to the element
       * 
       * @property isListening
       * @type {Boolean}
       */

      this.isListening = false;
      /**
       * @property $element
       * @type {jQuery}
       */

      this.$element = null;
      /**
       * The unique identifier for this ActionBinding. This is used
       * by the Helper to retrieve this instance and automatically
       * generated in the constructor.
       * 
       * @property id
       * @type {string}
       */

      this.id = ActionBinding.register(this); // Store this binding on the element

      morph.element.setAttribute('data-chicken-action', this.id);
    }

    _createClass(ActionBinding, [{
      key: "apply",
      value: function apply() {
        var _this = this;

        // Already applied?
        if (this.isListening === true) return this;
        this.isListening = true; // Get element

        this.$element = $(this.morph.element);
        this.$element.on(this.eventName, function (e) {
          // Prevent default?
          if (_this.options.preventDefault) e.preventDefault(); // Call the handler

          var params = _.flatten([_.map(_this.parameters, function (value) {
            return _this.renderer.hooks.getValue(value);
          }), _this, _this.view, e]);

          _this.actionHandler.apply(_this.view, params);
        });
        return this;
      }
    }]);

    return ActionBinding;
  }();

  ActionBinding.registry = new Map();

  ActionBinding.register = function (binding) {
    // Generate id
    var id = uuidLib.raw();
    ActionBinding.registry.set(id, binding);
    return id;
  };

  ActionBinding.get = function (id) {
    return ActionBinding.registry.get(id);
  };

  ActionBinding.getDefaultEventName = function (element) {
    // Specific one for this tag?
    var eventName = ActionBinding.DefaultEventNames[element.tagName.toLowerCase()]; // Or the old click.

    if (!eventName) eventName = 'click';
    return eventName;
  };

  ActionBinding.DefaultEventNames = {
    input: 'change keyup paste',
    select: 'change',
    form: 'submit'
  };

  var parser = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  /* istanbul ignore next */
  /* Jison generated parser */
  var handlebars = (function () {
      var parser = { trace: function trace() {},
          yy: {},
          symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "content": 12, "COMMENT": 13, "CONTENT": 14, "openRawBlock": 15, "END_RAW_BLOCK": 16, "OPEN_RAW_BLOCK": 17, "helperName": 18, "openRawBlock_repetition0": 19, "openRawBlock_option0": 20, "CLOSE_RAW_BLOCK": 21, "openBlock": 22, "block_option0": 23, "closeBlock": 24, "openInverse": 25, "block_option1": 26, "OPEN_BLOCK": 27, "openBlock_repetition0": 28, "openBlock_option0": 29, "openBlock_option1": 30, "CLOSE": 31, "OPEN_INVERSE": 32, "openInverse_repetition0": 33, "openInverse_option0": 34, "openInverse_option1": 35, "openInverseChain": 36, "OPEN_INVERSE_CHAIN": 37, "openInverseChain_repetition0": 38, "openInverseChain_option0": 39, "openInverseChain_option1": 40, "inverseAndProgram": 41, "INVERSE": 42, "inverseChain": 43, "inverseChain_option0": 44, "OPEN_ENDBLOCK": 45, "OPEN": 46, "mustache_repetition0": 47, "mustache_option0": 48, "OPEN_UNESCAPED": 49, "mustache_repetition1": 50, "mustache_option1": 51, "CLOSE_UNESCAPED": 52, "OPEN_PARTIAL": 53, "partialName": 54, "partial_repetition0": 55, "partial_option0": 56, "param": 57, "sexpr": 58, "OPEN_SEXPR": 59, "sexpr_repetition0": 60, "sexpr_option0": 61, "CLOSE_SEXPR": 62, "hash": 63, "hash_repetition_plus0": 64, "hashSegment": 65, "ID": 66, "EQUALS": 67, "blockParams": 68, "OPEN_BLOCK_PARAMS": 69, "blockParams_repetition_plus0": 70, "CLOSE_BLOCK_PARAMS": 71, "path": 72, "dataName": 73, "STRING": 74, "NUMBER": 75, "BOOLEAN": 76, "UNDEFINED": 77, "NULL": 78, "DATA": 79, "pathSegments": 80, "SEP": 81, "$accept": 0, "$end": 1 },
          terminals_: { 2: "error", 5: "EOF", 13: "COMMENT", 14: "CONTENT", 16: "END_RAW_BLOCK", 17: "OPEN_RAW_BLOCK", 21: "CLOSE_RAW_BLOCK", 27: "OPEN_BLOCK", 31: "CLOSE", 32: "OPEN_INVERSE", 37: "OPEN_INVERSE_CHAIN", 42: "INVERSE", 45: "OPEN_ENDBLOCK", 46: "OPEN", 49: "OPEN_UNESCAPED", 52: "CLOSE_UNESCAPED", 53: "OPEN_PARTIAL", 59: "OPEN_SEXPR", 62: "CLOSE_SEXPR", 66: "ID", 67: "EQUALS", 69: "OPEN_BLOCK_PARAMS", 71: "CLOSE_BLOCK_PARAMS", 74: "STRING", 75: "NUMBER", 76: "BOOLEAN", 77: "UNDEFINED", 78: "NULL", 79: "DATA", 81: "SEP" },
          productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [12, 1], [10, 3], [15, 5], [9, 4], [9, 4], [22, 6], [25, 6], [36, 6], [41, 2], [43, 3], [43, 1], [24, 3], [8, 5], [8, 5], [11, 5], [57, 1], [57, 1], [58, 5], [63, 1], [65, 3], [68, 3], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [54, 1], [54, 1], [73, 2], [72, 1], [80, 3], [80, 1], [6, 0], [6, 2], [19, 0], [19, 2], [20, 0], [20, 1], [23, 0], [23, 1], [26, 0], [26, 1], [28, 0], [28, 2], [29, 0], [29, 1], [30, 0], [30, 1], [33, 0], [33, 2], [34, 0], [34, 1], [35, 0], [35, 1], [38, 0], [38, 2], [39, 0], [39, 1], [40, 0], [40, 1], [44, 0], [44, 1], [47, 0], [47, 2], [48, 0], [48, 1], [50, 0], [50, 2], [51, 0], [51, 1], [55, 0], [55, 2], [56, 0], [56, 1], [60, 0], [60, 2], [61, 0], [61, 1], [64, 1], [64, 2], [70, 1], [70, 2]],
          performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

              var $0 = $$.length - 1;
              switch (yystate) {
                  case 1:
                      return $$[$0 - 1];
                      break;
                  case 2:
                      this.$ = new yy.Program($$[$0], null, {}, yy.locInfo(this._$));
                      break;
                  case 3:
                      this.$ = $$[$0];
                      break;
                  case 4:
                      this.$ = $$[$0];
                      break;
                  case 5:
                      this.$ = $$[$0];
                      break;
                  case 6:
                      this.$ = $$[$0];
                      break;
                  case 7:
                      this.$ = $$[$0];
                      break;
                  case 8:
                      this.$ = new yy.CommentStatement(yy.stripComment($$[$0]), yy.stripFlags($$[$0], $$[$0]), yy.locInfo(this._$));
                      break;
                  case 9:
                      this.$ = new yy.ContentStatement($$[$0], yy.locInfo(this._$));
                      break;
                  case 10:
                      this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                      break;
                  case 11:
                      this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
                      break;
                  case 12:
                      this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                      break;
                  case 13:
                      this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                      break;
                  case 14:
                      this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                      break;
                  case 15:
                      this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                      break;
                  case 16:
                      this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                      break;
                  case 17:
                      this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
                      break;
                  case 18:
                      var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                          program = new yy.Program([inverse], null, {}, yy.locInfo(this._$));
                      program.chained = true;

                      this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

                      break;
                  case 19:
                      this.$ = $$[$0];
                      break;
                  case 20:
                      this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
                      break;
                  case 21:
                      this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                      break;
                  case 22:
                      this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                      break;
                  case 23:
                      this.$ = new yy.PartialStatement($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], yy.stripFlags($$[$0 - 4], $$[$0]), yy.locInfo(this._$));
                      break;
                  case 24:
                      this.$ = $$[$0];
                      break;
                  case 25:
                      this.$ = $$[$0];
                      break;
                  case 26:
                      this.$ = new yy.SubExpression($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], yy.locInfo(this._$));
                      break;
                  case 27:
                      this.$ = new yy.Hash($$[$0], yy.locInfo(this._$));
                      break;
                  case 28:
                      this.$ = new yy.HashPair(yy.id($$[$0 - 2]), $$[$0], yy.locInfo(this._$));
                      break;
                  case 29:
                      this.$ = yy.id($$[$0 - 1]);
                      break;
                  case 30:
                      this.$ = $$[$0];
                      break;
                  case 31:
                      this.$ = $$[$0];
                      break;
                  case 32:
                      this.$ = new yy.StringLiteral($$[$0], yy.locInfo(this._$));
                      break;
                  case 33:
                      this.$ = new yy.NumberLiteral($$[$0], yy.locInfo(this._$));
                      break;
                  case 34:
                      this.$ = new yy.BooleanLiteral($$[$0], yy.locInfo(this._$));
                      break;
                  case 35:
                      this.$ = new yy.UndefinedLiteral(yy.locInfo(this._$));
                      break;
                  case 36:
                      this.$ = new yy.NullLiteral(yy.locInfo(this._$));
                      break;
                  case 37:
                      this.$ = $$[$0];
                      break;
                  case 38:
                      this.$ = $$[$0];
                      break;
                  case 39:
                      this.$ = yy.preparePath(true, $$[$0], this._$);
                      break;
                  case 40:
                      this.$ = yy.preparePath(false, $$[$0], this._$);
                      break;
                  case 41:
                      $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
                      break;
                  case 42:
                      this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
                      break;
                  case 43:
                      this.$ = [];
                      break;
                  case 44:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 45:
                      this.$ = [];
                      break;
                  case 46:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 53:
                      this.$ = [];
                      break;
                  case 54:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 59:
                      this.$ = [];
                      break;
                  case 60:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 65:
                      this.$ = [];
                      break;
                  case 66:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 73:
                      this.$ = [];
                      break;
                  case 74:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 77:
                      this.$ = [];
                      break;
                  case 78:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 81:
                      this.$ = [];
                      break;
                  case 82:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 85:
                      this.$ = [];
                      break;
                  case 86:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 89:
                      this.$ = [$$[$0]];
                      break;
                  case 90:
                      $$[$0 - 1].push($$[$0]);
                      break;
                  case 91:
                      this.$ = [$$[$0]];
                      break;
                  case 92:
                      $$[$0 - 1].push($$[$0]);
                      break;
              }
          },
          table: [{ 3: 1, 4: 2, 5: [2, 43], 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: [1, 11], 14: [1, 18], 15: 16, 17: [1, 21], 22: 14, 25: 15, 27: [1, 19], 32: [1, 20], 37: [2, 2], 42: [2, 2], 45: [2, 2], 46: [1, 12], 49: [1, 13], 53: [1, 17] }, { 1: [2, 1] }, { 5: [2, 44], 13: [2, 44], 14: [2, 44], 17: [2, 44], 27: [2, 44], 32: [2, 44], 37: [2, 44], 42: [2, 44], 45: [2, 44], 46: [2, 44], 49: [2, 44], 53: [2, 44] }, { 5: [2, 3], 13: [2, 3], 14: [2, 3], 17: [2, 3], 27: [2, 3], 32: [2, 3], 37: [2, 3], 42: [2, 3], 45: [2, 3], 46: [2, 3], 49: [2, 3], 53: [2, 3] }, { 5: [2, 4], 13: [2, 4], 14: [2, 4], 17: [2, 4], 27: [2, 4], 32: [2, 4], 37: [2, 4], 42: [2, 4], 45: [2, 4], 46: [2, 4], 49: [2, 4], 53: [2, 4] }, { 5: [2, 5], 13: [2, 5], 14: [2, 5], 17: [2, 5], 27: [2, 5], 32: [2, 5], 37: [2, 5], 42: [2, 5], 45: [2, 5], 46: [2, 5], 49: [2, 5], 53: [2, 5] }, { 5: [2, 6], 13: [2, 6], 14: [2, 6], 17: [2, 6], 27: [2, 6], 32: [2, 6], 37: [2, 6], 42: [2, 6], 45: [2, 6], 46: [2, 6], 49: [2, 6], 53: [2, 6] }, { 5: [2, 7], 13: [2, 7], 14: [2, 7], 17: [2, 7], 27: [2, 7], 32: [2, 7], 37: [2, 7], 42: [2, 7], 45: [2, 7], 46: [2, 7], 49: [2, 7], 53: [2, 7] }, { 5: [2, 8], 13: [2, 8], 14: [2, 8], 17: [2, 8], 27: [2, 8], 32: [2, 8], 37: [2, 8], 42: [2, 8], 45: [2, 8], 46: [2, 8], 49: [2, 8], 53: [2, 8] }, { 18: 22, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 33, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 4: 34, 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 37: [2, 43], 42: [2, 43], 45: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 4: 35, 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 42: [2, 43], 45: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 12: 36, 14: [1, 18] }, { 18: 38, 54: 37, 58: 39, 59: [1, 40], 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 5: [2, 9], 13: [2, 9], 14: [2, 9], 16: [2, 9], 17: [2, 9], 27: [2, 9], 32: [2, 9], 37: [2, 9], 42: [2, 9], 45: [2, 9], 46: [2, 9], 49: [2, 9], 53: [2, 9] }, { 18: 41, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 42, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 43, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 31: [2, 73], 47: 44, 59: [2, 73], 66: [2, 73], 74: [2, 73], 75: [2, 73], 76: [2, 73], 77: [2, 73], 78: [2, 73], 79: [2, 73] }, { 21: [2, 30], 31: [2, 30], 52: [2, 30], 59: [2, 30], 62: [2, 30], 66: [2, 30], 69: [2, 30], 74: [2, 30], 75: [2, 30], 76: [2, 30], 77: [2, 30], 78: [2, 30], 79: [2, 30] }, { 21: [2, 31], 31: [2, 31], 52: [2, 31], 59: [2, 31], 62: [2, 31], 66: [2, 31], 69: [2, 31], 74: [2, 31], 75: [2, 31], 76: [2, 31], 77: [2, 31], 78: [2, 31], 79: [2, 31] }, { 21: [2, 32], 31: [2, 32], 52: [2, 32], 59: [2, 32], 62: [2, 32], 66: [2, 32], 69: [2, 32], 74: [2, 32], 75: [2, 32], 76: [2, 32], 77: [2, 32], 78: [2, 32], 79: [2, 32] }, { 21: [2, 33], 31: [2, 33], 52: [2, 33], 59: [2, 33], 62: [2, 33], 66: [2, 33], 69: [2, 33], 74: [2, 33], 75: [2, 33], 76: [2, 33], 77: [2, 33], 78: [2, 33], 79: [2, 33] }, { 21: [2, 34], 31: [2, 34], 52: [2, 34], 59: [2, 34], 62: [2, 34], 66: [2, 34], 69: [2, 34], 74: [2, 34], 75: [2, 34], 76: [2, 34], 77: [2, 34], 78: [2, 34], 79: [2, 34] }, { 21: [2, 35], 31: [2, 35], 52: [2, 35], 59: [2, 35], 62: [2, 35], 66: [2, 35], 69: [2, 35], 74: [2, 35], 75: [2, 35], 76: [2, 35], 77: [2, 35], 78: [2, 35], 79: [2, 35] }, { 21: [2, 36], 31: [2, 36], 52: [2, 36], 59: [2, 36], 62: [2, 36], 66: [2, 36], 69: [2, 36], 74: [2, 36], 75: [2, 36], 76: [2, 36], 77: [2, 36], 78: [2, 36], 79: [2, 36] }, { 21: [2, 40], 31: [2, 40], 52: [2, 40], 59: [2, 40], 62: [2, 40], 66: [2, 40], 69: [2, 40], 74: [2, 40], 75: [2, 40], 76: [2, 40], 77: [2, 40], 78: [2, 40], 79: [2, 40], 81: [1, 45] }, { 66: [1, 32], 80: 46 }, { 21: [2, 42], 31: [2, 42], 52: [2, 42], 59: [2, 42], 62: [2, 42], 66: [2, 42], 69: [2, 42], 74: [2, 42], 75: [2, 42], 76: [2, 42], 77: [2, 42], 78: [2, 42], 79: [2, 42], 81: [2, 42] }, { 50: 47, 52: [2, 77], 59: [2, 77], 66: [2, 77], 74: [2, 77], 75: [2, 77], 76: [2, 77], 77: [2, 77], 78: [2, 77], 79: [2, 77] }, { 23: 48, 36: 50, 37: [1, 52], 41: 51, 42: [1, 53], 43: 49, 45: [2, 49] }, { 26: 54, 41: 55, 42: [1, 53], 45: [2, 51] }, { 16: [1, 56] }, { 31: [2, 81], 55: 57, 59: [2, 81], 66: [2, 81], 74: [2, 81], 75: [2, 81], 76: [2, 81], 77: [2, 81], 78: [2, 81], 79: [2, 81] }, { 31: [2, 37], 59: [2, 37], 66: [2, 37], 74: [2, 37], 75: [2, 37], 76: [2, 37], 77: [2, 37], 78: [2, 37], 79: [2, 37] }, { 31: [2, 38], 59: [2, 38], 66: [2, 38], 74: [2, 38], 75: [2, 38], 76: [2, 38], 77: [2, 38], 78: [2, 38], 79: [2, 38] }, { 18: 58, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 28: 59, 31: [2, 53], 59: [2, 53], 66: [2, 53], 69: [2, 53], 74: [2, 53], 75: [2, 53], 76: [2, 53], 77: [2, 53], 78: [2, 53], 79: [2, 53] }, { 31: [2, 59], 33: 60, 59: [2, 59], 66: [2, 59], 69: [2, 59], 74: [2, 59], 75: [2, 59], 76: [2, 59], 77: [2, 59], 78: [2, 59], 79: [2, 59] }, { 19: 61, 21: [2, 45], 59: [2, 45], 66: [2, 45], 74: [2, 45], 75: [2, 45], 76: [2, 45], 77: [2, 45], 78: [2, 45], 79: [2, 45] }, { 18: 65, 31: [2, 75], 48: 62, 57: 63, 58: 66, 59: [1, 40], 63: 64, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 66: [1, 70] }, { 21: [2, 39], 31: [2, 39], 52: [2, 39], 59: [2, 39], 62: [2, 39], 66: [2, 39], 69: [2, 39], 74: [2, 39], 75: [2, 39], 76: [2, 39], 77: [2, 39], 78: [2, 39], 79: [2, 39], 81: [1, 45] }, { 18: 65, 51: 71, 52: [2, 79], 57: 72, 58: 66, 59: [1, 40], 63: 73, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 24: 74, 45: [1, 75] }, { 45: [2, 50] }, { 4: 76, 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 37: [2, 43], 42: [2, 43], 45: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 45: [2, 19] }, { 18: 77, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 4: 78, 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 45: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 24: 79, 45: [1, 75] }, { 45: [2, 52] }, { 5: [2, 10], 13: [2, 10], 14: [2, 10], 17: [2, 10], 27: [2, 10], 32: [2, 10], 37: [2, 10], 42: [2, 10], 45: [2, 10], 46: [2, 10], 49: [2, 10], 53: [2, 10] }, { 18: 65, 31: [2, 83], 56: 80, 57: 81, 58: 66, 59: [1, 40], 63: 82, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 59: [2, 85], 60: 83, 62: [2, 85], 66: [2, 85], 74: [2, 85], 75: [2, 85], 76: [2, 85], 77: [2, 85], 78: [2, 85], 79: [2, 85] }, { 18: 65, 29: 84, 31: [2, 55], 57: 85, 58: 66, 59: [1, 40], 63: 86, 64: 67, 65: 68, 66: [1, 69], 69: [2, 55], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 65, 31: [2, 61], 34: 87, 57: 88, 58: 66, 59: [1, 40], 63: 89, 64: 67, 65: 68, 66: [1, 69], 69: [2, 61], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 65, 20: 90, 21: [2, 47], 57: 91, 58: 66, 59: [1, 40], 63: 92, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 31: [1, 93] }, { 31: [2, 74], 59: [2, 74], 66: [2, 74], 74: [2, 74], 75: [2, 74], 76: [2, 74], 77: [2, 74], 78: [2, 74], 79: [2, 74] }, { 31: [2, 76] }, { 21: [2, 24], 31: [2, 24], 52: [2, 24], 59: [2, 24], 62: [2, 24], 66: [2, 24], 69: [2, 24], 74: [2, 24], 75: [2, 24], 76: [2, 24], 77: [2, 24], 78: [2, 24], 79: [2, 24] }, { 21: [2, 25], 31: [2, 25], 52: [2, 25], 59: [2, 25], 62: [2, 25], 66: [2, 25], 69: [2, 25], 74: [2, 25], 75: [2, 25], 76: [2, 25], 77: [2, 25], 78: [2, 25], 79: [2, 25] }, { 21: [2, 27], 31: [2, 27], 52: [2, 27], 62: [2, 27], 65: 94, 66: [1, 95], 69: [2, 27] }, { 21: [2, 89], 31: [2, 89], 52: [2, 89], 62: [2, 89], 66: [2, 89], 69: [2, 89] }, { 21: [2, 42], 31: [2, 42], 52: [2, 42], 59: [2, 42], 62: [2, 42], 66: [2, 42], 67: [1, 96], 69: [2, 42], 74: [2, 42], 75: [2, 42], 76: [2, 42], 77: [2, 42], 78: [2, 42], 79: [2, 42], 81: [2, 42] }, { 21: [2, 41], 31: [2, 41], 52: [2, 41], 59: [2, 41], 62: [2, 41], 66: [2, 41], 69: [2, 41], 74: [2, 41], 75: [2, 41], 76: [2, 41], 77: [2, 41], 78: [2, 41], 79: [2, 41], 81: [2, 41] }, { 52: [1, 97] }, { 52: [2, 78], 59: [2, 78], 66: [2, 78], 74: [2, 78], 75: [2, 78], 76: [2, 78], 77: [2, 78], 78: [2, 78], 79: [2, 78] }, { 52: [2, 80] }, { 5: [2, 12], 13: [2, 12], 14: [2, 12], 17: [2, 12], 27: [2, 12], 32: [2, 12], 37: [2, 12], 42: [2, 12], 45: [2, 12], 46: [2, 12], 49: [2, 12], 53: [2, 12] }, { 18: 98, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 36: 50, 37: [1, 52], 41: 51, 42: [1, 53], 43: 100, 44: 99, 45: [2, 71] }, { 31: [2, 65], 38: 101, 59: [2, 65], 66: [2, 65], 69: [2, 65], 74: [2, 65], 75: [2, 65], 76: [2, 65], 77: [2, 65], 78: [2, 65], 79: [2, 65] }, { 45: [2, 17] }, { 5: [2, 13], 13: [2, 13], 14: [2, 13], 17: [2, 13], 27: [2, 13], 32: [2, 13], 37: [2, 13], 42: [2, 13], 45: [2, 13], 46: [2, 13], 49: [2, 13], 53: [2, 13] }, { 31: [1, 102] }, { 31: [2, 82], 59: [2, 82], 66: [2, 82], 74: [2, 82], 75: [2, 82], 76: [2, 82], 77: [2, 82], 78: [2, 82], 79: [2, 82] }, { 31: [2, 84] }, { 18: 65, 57: 104, 58: 66, 59: [1, 40], 61: 103, 62: [2, 87], 63: 105, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 30: 106, 31: [2, 57], 68: 107, 69: [1, 108] }, { 31: [2, 54], 59: [2, 54], 66: [2, 54], 69: [2, 54], 74: [2, 54], 75: [2, 54], 76: [2, 54], 77: [2, 54], 78: [2, 54], 79: [2, 54] }, { 31: [2, 56], 69: [2, 56] }, { 31: [2, 63], 35: 109, 68: 110, 69: [1, 108] }, { 31: [2, 60], 59: [2, 60], 66: [2, 60], 69: [2, 60], 74: [2, 60], 75: [2, 60], 76: [2, 60], 77: [2, 60], 78: [2, 60], 79: [2, 60] }, { 31: [2, 62], 69: [2, 62] }, { 21: [1, 111] }, { 21: [2, 46], 59: [2, 46], 66: [2, 46], 74: [2, 46], 75: [2, 46], 76: [2, 46], 77: [2, 46], 78: [2, 46], 79: [2, 46] }, { 21: [2, 48] }, { 5: [2, 21], 13: [2, 21], 14: [2, 21], 17: [2, 21], 27: [2, 21], 32: [2, 21], 37: [2, 21], 42: [2, 21], 45: [2, 21], 46: [2, 21], 49: [2, 21], 53: [2, 21] }, { 21: [2, 90], 31: [2, 90], 52: [2, 90], 62: [2, 90], 66: [2, 90], 69: [2, 90] }, { 67: [1, 96] }, { 18: 65, 57: 112, 58: 66, 59: [1, 40], 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 5: [2, 22], 13: [2, 22], 14: [2, 22], 17: [2, 22], 27: [2, 22], 32: [2, 22], 37: [2, 22], 42: [2, 22], 45: [2, 22], 46: [2, 22], 49: [2, 22], 53: [2, 22] }, { 31: [1, 113] }, { 45: [2, 18] }, { 45: [2, 72] }, { 18: 65, 31: [2, 67], 39: 114, 57: 115, 58: 66, 59: [1, 40], 63: 116, 64: 67, 65: 68, 66: [1, 69], 69: [2, 67], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 5: [2, 23], 13: [2, 23], 14: [2, 23], 17: [2, 23], 27: [2, 23], 32: [2, 23], 37: [2, 23], 42: [2, 23], 45: [2, 23], 46: [2, 23], 49: [2, 23], 53: [2, 23] }, { 62: [1, 117] }, { 59: [2, 86], 62: [2, 86], 66: [2, 86], 74: [2, 86], 75: [2, 86], 76: [2, 86], 77: [2, 86], 78: [2, 86], 79: [2, 86] }, { 62: [2, 88] }, { 31: [1, 118] }, { 31: [2, 58] }, { 66: [1, 120], 70: 119 }, { 31: [1, 121] }, { 31: [2, 64] }, { 14: [2, 11] }, { 21: [2, 28], 31: [2, 28], 52: [2, 28], 62: [2, 28], 66: [2, 28], 69: [2, 28] }, { 5: [2, 20], 13: [2, 20], 14: [2, 20], 17: [2, 20], 27: [2, 20], 32: [2, 20], 37: [2, 20], 42: [2, 20], 45: [2, 20], 46: [2, 20], 49: [2, 20], 53: [2, 20] }, { 31: [2, 69], 40: 122, 68: 123, 69: [1, 108] }, { 31: [2, 66], 59: [2, 66], 66: [2, 66], 69: [2, 66], 74: [2, 66], 75: [2, 66], 76: [2, 66], 77: [2, 66], 78: [2, 66], 79: [2, 66] }, { 31: [2, 68], 69: [2, 68] }, { 21: [2, 26], 31: [2, 26], 52: [2, 26], 59: [2, 26], 62: [2, 26], 66: [2, 26], 69: [2, 26], 74: [2, 26], 75: [2, 26], 76: [2, 26], 77: [2, 26], 78: [2, 26], 79: [2, 26] }, { 13: [2, 14], 14: [2, 14], 17: [2, 14], 27: [2, 14], 32: [2, 14], 37: [2, 14], 42: [2, 14], 45: [2, 14], 46: [2, 14], 49: [2, 14], 53: [2, 14] }, { 66: [1, 125], 71: [1, 124] }, { 66: [2, 91], 71: [2, 91] }, { 13: [2, 15], 14: [2, 15], 17: [2, 15], 27: [2, 15], 32: [2, 15], 42: [2, 15], 45: [2, 15], 46: [2, 15], 49: [2, 15], 53: [2, 15] }, { 31: [1, 126] }, { 31: [2, 70] }, { 31: [2, 29] }, { 66: [2, 92], 71: [2, 92] }, { 13: [2, 16], 14: [2, 16], 17: [2, 16], 27: [2, 16], 32: [2, 16], 37: [2, 16], 42: [2, 16], 45: [2, 16], 46: [2, 16], 49: [2, 16], 53: [2, 16] }],
          defaultActions: { 4: [2, 1], 49: [2, 50], 51: [2, 19], 55: [2, 52], 64: [2, 76], 73: [2, 80], 78: [2, 17], 82: [2, 84], 92: [2, 48], 99: [2, 18], 100: [2, 72], 105: [2, 88], 107: [2, 58], 110: [2, 64], 111: [2, 11], 123: [2, 70], 124: [2, 29] },
          parseError: function parseError(str, hash) {
              throw new Error(str);
          },
          parse: function parse(input) {
              var self = this,
                  stack = [0],
                  vstack = [null],
                  lstack = [],
                  table = this.table,
                  yytext = "",
                  yylineno = 0,
                  yyleng = 0,
                  recovering = 0;
              this.lexer.setInput(input);
              this.lexer.yy = this.yy;
              this.yy.lexer = this.lexer;
              this.yy.parser = this;
              if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
              var yyloc = this.lexer.yylloc;
              lstack.push(yyloc);
              var ranges = this.lexer.options && this.lexer.options.ranges;
              if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
              function lex() {
                  var token;
                  token = self.lexer.lex() || 1;
                  if (typeof token !== "number") {
                      token = self.symbols_[token] || token;
                  }
                  return token;
              }
              var symbol,
                  preErrorSymbol,
                  state,
                  action,
                  r,
                  yyval = {},
                  p,
                  len,
                  newState,
                  expected;
              while (true) {
                  state = stack[stack.length - 1];
                  if (this.defaultActions[state]) {
                      action = this.defaultActions[state];
                  } else {
                      if (symbol === null || typeof symbol == "undefined") {
                          symbol = lex();
                      }
                      action = table[state] && table[state][symbol];
                  }
                  if (typeof action === "undefined" || !action.length || !action[0]) {
                      var errStr = "";
                      if (!recovering) {
                          expected = [];
                          for (p in table[state]) if (this.terminals_[p] && p > 2) {
                              expected.push("'" + this.terminals_[p] + "'");
                          }
                          if (this.lexer.showPosition) {
                              errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                          } else {
                              errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                          }
                          this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
                      }
                  }
                  if (action[0] instanceof Array && action.length > 1) {
                      throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                  }
                  switch (action[0]) {
                      case 1:
                          stack.push(symbol);
                          vstack.push(this.lexer.yytext);
                          lstack.push(this.lexer.yylloc);
                          stack.push(action[1]);
                          symbol = null;
                          if (!preErrorSymbol) {
                              yyleng = this.lexer.yyleng;
                              yytext = this.lexer.yytext;
                              yylineno = this.lexer.yylineno;
                              yyloc = this.lexer.yylloc;
                              if (recovering > 0) recovering--;
                          } else {
                              symbol = preErrorSymbol;
                              preErrorSymbol = null;
                          }
                          break;
                      case 2:
                          len = this.productions_[action[1]][1];
                          yyval.$ = vstack[vstack.length - len];
                          yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
                          if (ranges) {
                              yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                          }
                          r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                          if (typeof r !== "undefined") {
                              return r;
                          }
                          if (len) {
                              stack = stack.slice(0, -1 * len * 2);
                              vstack = vstack.slice(0, -1 * len);
                              lstack = lstack.slice(0, -1 * len);
                          }
                          stack.push(this.productions_[action[1]][0]);
                          vstack.push(yyval.$);
                          lstack.push(yyval._$);
                          newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                          stack.push(newState);
                          break;
                      case 3:
                          return true;
                  }
              }
              return true;
          }
      };
      /* Jison generated lexer */
      var lexer = (function () {
          var lexer = { EOF: 1,
              parseError: function parseError(str, hash) {
                  if (this.yy.parser) {
                      this.yy.parser.parseError(str, hash);
                  } else {
                      throw new Error(str);
                  }
              },
              setInput: function (input) {
                  this._input = input;
                  this._more = this._less = this.done = false;
                  this.yylineno = this.yyleng = 0;
                  this.yytext = this.matched = this.match = '';
                  this.conditionStack = ['INITIAL'];
                  this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
                  if (this.options.ranges) this.yylloc.range = [0, 0];
                  this.offset = 0;
                  return this;
              },
              input: function () {
                  var ch = this._input[0];
                  this.yytext += ch;
                  this.yyleng++;
                  this.offset++;
                  this.match += ch;
                  this.matched += ch;
                  var lines = ch.match(/(?:\r\n?|\n).*/g);
                  if (lines) {
                      this.yylineno++;
                      this.yylloc.last_line++;
                  } else {
                      this.yylloc.last_column++;
                  }
                  if (this.options.ranges) this.yylloc.range[1]++;

                  this._input = this._input.slice(1);
                  return ch;
              },
              unput: function (ch) {
                  var len = ch.length;
                  var lines = ch.split(/(?:\r\n?|\n)/g);

                  this._input = ch + this._input;
                  this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                  //this.yyleng -= len;
                  this.offset -= len;
                  var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                  this.match = this.match.substr(0, this.match.length - 1);
                  this.matched = this.matched.substr(0, this.matched.length - 1);

                  if (lines.length - 1) this.yylineno -= lines.length - 1;
                  var r = this.yylloc.range;

                  this.yylloc = { first_line: this.yylloc.first_line,
                      last_line: this.yylineno + 1,
                      first_column: this.yylloc.first_column,
                      last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                  };

                  if (this.options.ranges) {
                      this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                  }
                  return this;
              },
              more: function () {
                  this._more = true;
                  return this;
              },
              less: function (n) {
                  this.unput(this.match.slice(n));
              },
              pastInput: function () {
                  var past = this.matched.substr(0, this.matched.length - this.match.length);
                  return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
              },
              upcomingInput: function () {
                  var next = this.match;
                  if (next.length < 20) {
                      next += this._input.substr(0, 20 - next.length);
                  }
                  return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
              },
              showPosition: function () {
                  var pre = this.pastInput();
                  var c = new Array(pre.length + 1).join("-");
                  return pre + this.upcomingInput() + "\n" + c + "^";
              },
              next: function () {
                  if (this.done) {
                      return this.EOF;
                  }
                  if (!this._input) this.done = true;

                  var token, match, tempMatch, index, lines;
                  if (!this._more) {
                      this.yytext = '';
                      this.match = '';
                  }
                  var rules = this._currentRules();
                  for (var i = 0; i < rules.length; i++) {
                      tempMatch = this._input.match(this.rules[rules[i]]);
                      if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                          match = tempMatch;
                          index = i;
                          if (!this.options.flex) break;
                      }
                  }
                  if (match) {
                      lines = match[0].match(/(?:\r\n?|\n).*/g);
                      if (lines) this.yylineno += lines.length;
                      this.yylloc = { first_line: this.yylloc.last_line,
                          last_line: this.yylineno + 1,
                          first_column: this.yylloc.last_column,
                          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
                      this.yytext += match[0];
                      this.match += match[0];
                      this.matches = match;
                      this.yyleng = this.yytext.length;
                      if (this.options.ranges) {
                          this.yylloc.range = [this.offset, this.offset += this.yyleng];
                      }
                      this._more = false;
                      this._input = this._input.slice(match[0].length);
                      this.matched += match[0];
                      token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                      if (this.done && this._input) this.done = false;
                      if (token) return token;else return;
                  }
                  if (this._input === "") {
                      return this.EOF;
                  } else {
                      return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
                  }
              },
              lex: function lex() {
                  var r = this.next();
                  if (typeof r !== 'undefined') {
                      return r;
                  } else {
                      return this.lex();
                  }
              },
              begin: function begin(condition) {
                  this.conditionStack.push(condition);
              },
              popState: function popState() {
                  return this.conditionStack.pop();
              },
              _currentRules: function _currentRules() {
                  return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              },
              topState: function () {
                  return this.conditionStack[this.conditionStack.length - 2];
              },
              pushState: function begin(condition) {
                  this.begin(condition);
              } };
          lexer.options = {};
          lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

              function strip(start, end) {
                  return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
              }
              switch ($avoiding_name_collisions) {
                  case 0:
                      if (yy_.yytext.slice(-2) === "\\\\") {
                          strip(0, 1);
                          this.begin("mu");
                      } else if (yy_.yytext.slice(-1) === "\\") {
                          strip(0, 1);
                          this.begin("emu");
                      } else {
                          this.begin("mu");
                      }
                      if (yy_.yytext) return 14;

                      break;
                  case 1:
                      return 14;
                      break;
                  case 2:
                      this.popState();
                      return 14;

                      break;
                  case 3:
                      yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
                      this.popState();
                      return 16;

                      break;
                  case 4:
                      return 14;
                      break;
                  case 5:
                      this.popState();
                      return 13;

                      break;
                  case 6:
                      return 59;
                      break;
                  case 7:
                      return 62;
                      break;
                  case 8:
                      return 17;
                      break;
                  case 9:
                      this.popState();
                      this.begin('raw');
                      return 21;

                      break;
                  case 10:
                      return 53;
                      break;
                  case 11:
                      return 27;
                      break;
                  case 12:
                      return 45;
                      break;
                  case 13:
                      this.popState();return 42;
                      break;
                  case 14:
                      this.popState();return 42;
                      break;
                  case 15:
                      return 32;
                      break;
                  case 16:
                      return 37;
                      break;
                  case 17:
                      return 49;
                      break;
                  case 18:
                      return 46;
                      break;
                  case 19:
                      this.unput(yy_.yytext);
                      this.popState();
                      this.begin('com');

                      break;
                  case 20:
                      this.popState();
                      return 13;

                      break;
                  case 21:
                      return 46;
                      break;
                  case 22:
                      return 67;
                      break;
                  case 23:
                      return 66;
                      break;
                  case 24:
                      return 66;
                      break;
                  case 25:
                      return 81;
                      break;
                  case 26:
                      // ignore whitespace
                      break;
                  case 27:
                      this.popState();return 52;
                      break;
                  case 28:
                      this.popState();return 31;
                      break;
                  case 29:
                      yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 74;
                      break;
                  case 30:
                      yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 74;
                      break;
                  case 31:
                      return 79;
                      break;
                  case 32:
                      return 76;
                      break;
                  case 33:
                      return 76;
                      break;
                  case 34:
                      return 77;
                      break;
                  case 35:
                      return 78;
                      break;
                  case 36:
                      return 75;
                      break;
                  case 37:
                      return 69;
                      break;
                  case 38:
                      return 71;
                      break;
                  case 39:
                      return 66;
                      break;
                  case 40:
                      return 66;
                      break;
                  case 41:
                      return 'INVALID';
                      break;
                  case 42:
                      return 5;
                      break;
              }
          };
          lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
          lexer.conditions = { "mu": { "rules": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [5], "inclusive": false }, "raw": { "rules": [3, 4], "inclusive": false }, "INITIAL": { "rules": [0, 1, 42], "inclusive": true } };
          return lexer;
      })();
      parser.lexer = lexer;
      function Parser() {
          this.yy = {};
      }Parser.prototype = parser;parser.Parser = Parser;
      return new Parser();
  })();exports.default = handlebars;
  module.exports = exports.default;

  });

  unwrapExports(parser);

  var ast = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  var AST = {
    Program: function (statements, blockParams, strip, locInfo) {
      this.loc = locInfo;
      this.type = 'Program';
      this.body = statements;

      this.blockParams = blockParams;
      this.strip = strip;
    },

    MustacheStatement: function (path, params, hash, escaped, strip, locInfo) {
      this.loc = locInfo;
      this.type = 'MustacheStatement';

      this.path = path;
      this.params = params || [];
      this.hash = hash;
      this.escaped = escaped;

      this.strip = strip;
    },

    BlockStatement: function (path, params, hash, program, inverse, openStrip, inverseStrip, closeStrip, locInfo) {
      this.loc = locInfo;
      this.type = 'BlockStatement';

      this.path = path;
      this.params = params || [];
      this.hash = hash;
      this.program = program;
      this.inverse = inverse;

      this.openStrip = openStrip;
      this.inverseStrip = inverseStrip;
      this.closeStrip = closeStrip;
    },

    PartialStatement: function (name, params, hash, strip, locInfo) {
      this.loc = locInfo;
      this.type = 'PartialStatement';

      this.name = name;
      this.params = params || [];
      this.hash = hash;

      this.indent = '';
      this.strip = strip;
    },

    ContentStatement: function (string, locInfo) {
      this.loc = locInfo;
      this.type = 'ContentStatement';
      this.original = this.value = string;
    },

    CommentStatement: function (comment, strip, locInfo) {
      this.loc = locInfo;
      this.type = 'CommentStatement';
      this.value = comment;

      this.strip = strip;
    },

    SubExpression: function (path, params, hash, locInfo) {
      this.loc = locInfo;

      this.type = 'SubExpression';
      this.path = path;
      this.params = params || [];
      this.hash = hash;
    },

    PathExpression: function (data, depth, parts, original, locInfo) {
      this.loc = locInfo;
      this.type = 'PathExpression';

      this.data = data;
      this.original = original;
      this.parts = parts;
      this.depth = depth;
    },

    StringLiteral: function (string, locInfo) {
      this.loc = locInfo;
      this.type = 'StringLiteral';
      this.original = this.value = string;
    },

    NumberLiteral: function (number, locInfo) {
      this.loc = locInfo;
      this.type = 'NumberLiteral';
      this.original = this.value = Number(number);
    },

    BooleanLiteral: function (bool, locInfo) {
      this.loc = locInfo;
      this.type = 'BooleanLiteral';
      this.original = this.value = bool === 'true';
    },

    UndefinedLiteral: function (locInfo) {
      this.loc = locInfo;
      this.type = 'UndefinedLiteral';
      this.original = this.value = undefined;
    },

    NullLiteral: function (locInfo) {
      this.loc = locInfo;
      this.type = 'NullLiteral';
      this.original = this.value = null;
    },

    Hash: function (pairs, locInfo) {
      this.loc = locInfo;
      this.type = 'Hash';
      this.pairs = pairs;
    },
    HashPair: function (key, value, locInfo) {
      this.loc = locInfo;
      this.type = 'HashPair';
      this.key = key;
      this.value = value;
    },

    // Public API used to evaluate derived attributes regarding AST nodes
    helpers: {
      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      helperExpression: function (node) {
        return !!(node.type === 'SubExpression' || node.params.length || node.hash);
      },

      scopedId: function (path) {
        return (/^\.|this\b/.test(path.original)
        );
      },

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      simpleId: function (path) {
        return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
      }
    }
  };

  // Must be exported as an object rather than the root of the module as the jison lexer
  // must modify the object to operate properly.
  exports.default = AST;
  module.exports = exports.default;

  });

  unwrapExports(ast);

  var exception = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var loc = node && node.loc,
        line = undefined,
        column = undefined;
    if (loc) {
      line = loc.start.line;
      column = loc.start.column;

      message += ' - ' + line + ':' + column;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    }

    if (loc) {
      this.lineNumber = line;
      this.column = column;
    }
  }

  Exception.prototype = new Error();

  exports.default = Exception;
  module.exports = exports.default;

  });

  unwrapExports(exception);

  var visitor = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _exception2 = _interopRequireDefault(exception);



  var _ast2 = _interopRequireDefault(ast);

  function Visitor() {
    this.parents = [];
  }

  Visitor.prototype = {
    constructor: Visitor,
    mutating: false,

    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function (node, name) {
      var value = this.accept(node[name]);
      if (this.mutating) {
        // Hacky sanity check:
        if (value && (!value.type || !_ast2.default[value.type])) {
          throw new _exception2.default('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
        }
        node[name] = value;
      }
    },

    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function (node, name) {
      this.acceptKey(node, name);

      if (!node[name]) {
        throw new _exception2.default(node.type + ' requires ' + name);
      }
    },

    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function (array) {
      for (var i = 0, l = array.length; i < l; i++) {
        this.acceptKey(array, i);

        if (!array[i]) {
          array.splice(i, 1);
          i--;
          l--;
        }
      }
    },

    accept: function (object) {
      if (!object) {
        return;
      }

      if (this.current) {
        this.parents.unshift(this.current);
      }
      this.current = object;

      var ret = this[object.type](object);

      this.current = this.parents.shift();

      if (!this.mutating || ret) {
        return ret;
      } else if (ret !== false) {
        return object;
      }
    },

    Program: function (program) {
      this.acceptArray(program.body);
    },

    MustacheStatement: function (mustache) {
      this.acceptRequired(mustache, 'path');
      this.acceptArray(mustache.params);
      this.acceptKey(mustache, 'hash');
    },

    BlockStatement: function (block) {
      this.acceptRequired(block, 'path');
      this.acceptArray(block.params);
      this.acceptKey(block, 'hash');

      this.acceptKey(block, 'program');
      this.acceptKey(block, 'inverse');
    },

    PartialStatement: function (partial) {
      this.acceptRequired(partial, 'name');
      this.acceptArray(partial.params);
      this.acceptKey(partial, 'hash');
    },

    ContentStatement: function () /* content */{},
    CommentStatement: function () /* comment */{},

    SubExpression: function (sexpr) {
      this.acceptRequired(sexpr, 'path');
      this.acceptArray(sexpr.params);
      this.acceptKey(sexpr, 'hash');
    },

    PathExpression: function () /* path */{},

    StringLiteral: function () /* string */{},
    NumberLiteral: function () /* number */{},
    BooleanLiteral: function () /* bool */{},
    UndefinedLiteral: function () /* literal */{},
    NullLiteral: function () /* literal */{},

    Hash: function (hash) {
      this.acceptArray(hash.pairs);
    },
    HashPair: function (pair) {
      this.acceptRequired(pair, 'value');
    }
  };

  exports.default = Visitor;
  module.exports = exports.default;

  });

  unwrapExports(visitor);

  var whitespaceControl = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _visitor2 = _interopRequireDefault(visitor);

  function WhitespaceControl() {}
  WhitespaceControl.prototype = new _visitor2.default();

  WhitespaceControl.prototype.Program = function (program) {
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;

    var body = program.body;
    for (var i = 0, l = body.length; i < l; i++) {
      var current = body[i],
          strip = this.accept(current);

      if (!strip) {
        continue;
      }

      var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
          _isNextWhitespace = isNextWhitespace(body, i, isRoot),
          openStandalone = strip.openStandalone && _isPrevWhitespace,
          closeStandalone = strip.closeStandalone && _isNextWhitespace,
          inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

      if (strip.close) {
        omitRight(body, i, true);
      }
      if (strip.open) {
        omitLeft(body, i, true);
      }

      if (inlineStandalone) {
        omitRight(body, i);

        if (omitLeft(body, i)) {
          // If we are on a standalone node, save the indent info for partials
          if (current.type === 'PartialStatement') {
            // Pull out the whitespace from the final line
            current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
          }
        }
      }
      if (openStandalone) {
        omitRight((current.program || current.inverse).body);

        // Strip out the previous content node if it's whitespace only
        omitLeft(body, i);
      }
      if (closeStandalone) {
        // Always strip the next node
        omitRight(body, i);

        omitLeft((current.inverse || current.program).body);
      }
    }

    return program;
  };
  WhitespaceControl.prototype.BlockStatement = function (block) {
    this.accept(block.program);
    this.accept(block.inverse);

    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse,
        inverse = block.program && block.inverse,
        firstInverse = inverse,
        lastInverse = inverse;

    if (inverse && inverse.chained) {
      firstInverse = inverse.body[0].program;

      // Walk the inverse chain to find the last inverse that is actually in the chain.
      while (lastInverse.chained) {
        lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
      }
    }

    var strip = {
      open: block.openStrip.open,
      close: block.closeStrip.close,

      // Determine the standalone candiacy. Basically flag our content as being possibly standalone
      // so our parent can determine if we actually are standalone
      openStandalone: isNextWhitespace(program.body),
      closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };

    if (block.openStrip.close) {
      omitRight(program.body, null, true);
    }

    if (inverse) {
      var inverseStrip = block.inverseStrip;

      if (inverseStrip.open) {
        omitLeft(program.body, null, true);
      }

      if (inverseStrip.close) {
        omitRight(firstInverse.body, null, true);
      }
      if (block.closeStrip.open) {
        omitLeft(lastInverse.body, null, true);
      }

      // Find standalone else statments
      if (isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
        omitLeft(program.body);
        omitRight(firstInverse.body);
      }
    } else if (block.closeStrip.open) {
      omitLeft(program.body, null, true);
    }

    return strip;
  };

  WhitespaceControl.prototype.MustacheStatement = function (mustache) {
    return mustache.strip;
  };

  WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
    /* istanbul ignore next */
    var strip = node.strip || {};
    return {
      inlineStandalone: true,
      open: strip.open,
      close: strip.close
    };
  };

  function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) {
      i = body.length;
    }

    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i - 1],
        sibling = body[i - 2];
    if (!prev) {
      return isRoot;
    }

    if (prev.type === 'ContentStatement') {
      return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
    }
  }
  function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) {
      i = -1;
    }

    var next = body[i + 1],
        sibling = body[i + 2];
    if (!next) {
      return isRoot;
    }

    if (next.type === 'ContentStatement') {
      return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
    }
  }

  // Marks the node to the right of the position as omitted.
  // I.e. {{foo}}' ' will mark the ' ' node as omitted.
  //
  // If i is undefined, then the first child will be marked as such.
  //
  // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
  // content is met.
  function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
      return;
    }

    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
    current.rightStripped = current.value !== original;
  }

  // Marks the node to the left of the position as omitted.
  // I.e. ' '{{foo}} will mark the ' ' node as omitted.
  //
  // If i is undefined then the last child will be marked as such.
  //
  // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
  // content is met.
  function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
      return;
    }

    // We omit the last node if it's whitespace only and not preceeded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
    current.leftStripped = current.value !== original;
    return current.leftStripped;
  }

  exports.default = WhitespaceControl;
  module.exports = exports.default;

  });

  unwrapExports(whitespaceControl);

  var helpers = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.SourceLocation = SourceLocation;
  exports.id = id;
  exports.stripFlags = stripFlags;
  exports.stripComment = stripComment;
  exports.preparePath = preparePath;
  exports.prepareMustache = prepareMustache;
  exports.prepareRawBlock = prepareRawBlock;
  exports.prepareBlock = prepareBlock;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _exception2 = _interopRequireDefault(exception);

  function SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
      line: locInfo.first_line,
      column: locInfo.first_column
    };
    this.end = {
      line: locInfo.last_line,
      column: locInfo.last_column
    };
  }

  function id(token) {
    if (/^\[.*\]$/.test(token)) {
      return token.substr(1, token.length - 2);
    } else {
      return token;
    }
  }

  function stripFlags(open, close) {
    return {
      open: open.charAt(2) === '~',
      close: close.charAt(close.length - 3) === '~'
    };
  }

  function stripComment(comment) {
    return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
  }

  function preparePath(data, parts, locInfo) {
    locInfo = this.locInfo(locInfo);

    var original = data ? '@' : '',
        dig = [],
        depth = 0;

    for (var i = 0, l = parts.length; i < l; i++) {
      var part = parts[i].part,

      // If we have [] syntax then we do not treat path references as operators,
      // i.e. foo.[this] resolves to approximately context.foo['this']
      isLiteral = parts[i].original !== part;
      original += (parts[i].separator || '') + part;

      if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
        if (dig.length > 0) {
          throw new _exception2.default('Invalid path: ' + original, { loc: locInfo });
        } else if (part === '..') {
          depth++;
        }
      } else {
        dig.push(part);
      }
    }

    return new this.PathExpression(data, depth, dig, original, locInfo);
  }

  function prepareMustache(path, params, hash, open, strip, locInfo) {
    // Must use charAt to support IE pre-10
    var escapeFlag = open.charAt(3) || open.charAt(2),
        escaped = escapeFlag !== '{' && escapeFlag !== '&';

    return new this.MustacheStatement(path, params, hash, escaped, strip, this.locInfo(locInfo));
  }

  function prepareRawBlock(openRawBlock, content, close, locInfo) {
    if (openRawBlock.path.original !== close) {
      var errorNode = { loc: openRawBlock.path.loc };

      throw new _exception2.default(openRawBlock.path.original + " doesn't match " + close, errorNode);
    }

    locInfo = this.locInfo(locInfo);
    var program = new this.Program([content], null, {}, locInfo);

    return new this.BlockStatement(openRawBlock.path, openRawBlock.params, openRawBlock.hash, program, undefined, {}, {}, {}, locInfo);
  }

  function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    // When we are chaining inverse calls, we will not have a close path
    if (close && close.path && openBlock.path.original !== close.path.original) {
      var errorNode = { loc: openBlock.path.loc };

      throw new _exception2.default(openBlock.path.original + ' doesn\'t match ' + close.path.original, errorNode);
    }

    program.blockParams = openBlock.blockParams;

    var inverse = undefined,
        inverseStrip = undefined;

    if (inverseAndProgram) {
      if (inverseAndProgram.chain) {
        inverseAndProgram.program.body[0].closeStrip = close.strip;
      }

      inverseStrip = inverseAndProgram.strip;
      inverse = inverseAndProgram.program;
    }

    if (inverted) {
      inverted = inverse;
      inverse = program;
      program = inverted;
    }

    return new this.BlockStatement(openBlock.path, openBlock.params, openBlock.hash, program, inverse, openBlock.strip, inverseStrip, close && close.strip, this.locInfo(locInfo));
  }

  });

  unwrapExports(helpers);
  var helpers_1 = helpers.SourceLocation;
  var helpers_2 = helpers.id;
  var helpers_3 = helpers.stripFlags;
  var helpers_4 = helpers.stripComment;
  var helpers_5 = helpers.preparePath;
  var helpers_6 = helpers.prepareMustache;
  var helpers_7 = helpers.prepareRawBlock;
  var helpers_8 = helpers.prepareBlock;

  var utils$4 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.extend = extend;
  exports.indexOf = indexOf;
  exports.escapeExpression = escapeExpression;
  exports.isEmpty = isEmpty;
  exports.blockParams = blockParams;
  exports.appendContextPath = appendContextPath;
  var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  var badChars = /[&<>"'`]/g,
      possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr];
  }

  function extend(obj /* , ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          obj[key] = arguments[i][key];
        }
      }
    }

    return obj;
  }

  var toString = Object.prototype.toString;

  exports.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  /*eslint-disable func-style, no-var */
  var isFunction = function (value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  /* istanbul ignore next */
  if (isFunction(/x/)) {
    exports.isFunction = isFunction = function (value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  exports.isFunction = isFunction;
  /*eslint-enable func-style, no-var */

  /* istanbul ignore next */
  var isArray = Array.isArray || function (value) {
    return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
  };

  exports.isArray = isArray;
  // Older IE versions do not directly support indexOf so we must implement our own, sadly.

  function indexOf(array, value) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  function escapeExpression(string) {
    if (typeof string !== 'string') {
      // don't escape SafeStrings, since they're already safe
      if (string && string.toHTML) {
        return string.toHTML();
      } else if (string == null) {
        return '';
      } else if (!string) {
        return string + '';
      }

      // Force a string conversion as this will be done by the append regardless and
      // the regex test will do this transparently behind the scenes, causing issues if
      // an object's to string has escaped characters in it.
      string = '' + string;
    }

    if (!possible.test(string)) {
      return string;
    }
    return string.replace(badChars, escapeChar);
  }

  function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function blockParams(params, ids) {
    params.path = ids;
    return params;
  }

  function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
  }

  });

  unwrapExports(utils$4);
  var utils_1$2 = utils$4.extend;
  var utils_2$2 = utils$4.indexOf;
  var utils_3$1 = utils$4.escapeExpression;
  var utils_4$1 = utils$4.isEmpty;
  var utils_5$1 = utils$4.blockParams;
  var utils_6$1 = utils$4.appendContextPath;
  var utils_7$1 = utils$4.isFunction;
  var utils_8$1 = utils$4.isArray;

  var base = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.parse = parse;

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _parser2 = _interopRequireDefault(parser);



  var _ast2 = _interopRequireDefault(ast);



  var _whitespaceControl2 = _interopRequireDefault(whitespaceControl);



  var Helpers = _interopRequireWildcard(helpers);



  exports.parser = _parser2.default;

  var yy = {};
  utils$4.extend(yy, Helpers, _ast2.default);

  function parse(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === 'Program') {
      return input;
    }

    _parser2.default.yy = yy;

    // Altering the shared object here, but this is ok as parser is a sync operation
    yy.locInfo = function (locInfo) {
      return new yy.SourceLocation(options && options.srcName, locInfo);
    };

    var strip = new _whitespaceControl2.default();
    return strip.accept(_parser2.default.parse(input));
  }

  });

  unwrapExports(base);
  var base_1 = base.parse;
  var base_2 = base.parser;

  var builders = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.buildMustache = buildMustache;
  exports.buildBlock = buildBlock;
  exports.buildElementModifier = buildElementModifier;
  exports.buildPartial = buildPartial;
  exports.buildComment = buildComment;
  exports.buildConcat = buildConcat;
  exports.buildElement = buildElement;
  exports.buildComponent = buildComponent;
  exports.buildAttr = buildAttr;
  exports.buildText = buildText;
  exports.buildSexpr = buildSexpr;
  exports.buildPath = buildPath;
  exports.buildString = buildString;
  exports.buildBoolean = buildBoolean;
  exports.buildNumber = buildNumber;
  exports.buildNull = buildNull;
  exports.buildUndefined = buildUndefined;
  exports.buildHash = buildHash;
  exports.buildPair = buildPair;
  exports.buildProgram = buildProgram;
  // Statements

  function buildMustache(path, params, hash, raw, loc) {
    return {
      type: "MustacheStatement",
      path: buildPath(path),
      params: params || [],
      hash: hash || buildHash([]),
      escaped: !raw,
      loc: buildLoc(loc)
    };
  }

  function buildBlock(path, params, hash, program, inverse, loc) {
    return {
      type: "BlockStatement",
      path: buildPath(path),
      params: params || [],
      hash: hash || buildHash([]),
      program: program || null,
      inverse: inverse || null,
      loc: buildLoc(loc)
    };
  }

  function buildElementModifier(path, params, hash, loc) {
    return {
      type: "ElementModifierStatement",
      path: buildPath(path),
      params: params || [],
      hash: hash || buildHash([]),
      loc: buildLoc(loc)
    };
  }

  function buildPartial(name, params, hash, indent) {
    return {
      type: "PartialStatement",
      name: name,
      params: params || [],
      hash: hash || buildHash([]),
      indent: indent
    };
  }

  function buildComment(value) {
    return {
      type: "CommentStatement",
      value: value
    };
  }

  function buildConcat(parts) {
    return {
      type: "ConcatStatement",
      parts: parts || []
    };
  }

  // Nodes

  function buildElement(tag, attributes, modifiers, children, loc) {
    return {
      type: "ElementNode",
      tag: tag || "",
      attributes: attributes || [],
      modifiers: modifiers || [],
      children: children || [],
      loc: buildLoc(loc)
    };
  }

  function buildComponent(tag, attributes, program, loc) {
    return {
      type: "ComponentNode",
      tag: tag,
      attributes: attributes,
      program: program,
      loc: buildLoc(loc),

      // this should be true only if this component node is guaranteed
      // to produce start and end points that can never change after the
      // initial render, regardless of changes to dynamic inputs. If
      // a component represents a "fragment" (any number of top-level nodes),
      // this will usually not be true.
      isStatic: false
    };
  }

  function buildAttr(name, value, loc) {
    return {
      type: "AttrNode",
      name: name,
      value: value,
      loc: buildLoc(loc)
    };
  }

  function buildText(chars, loc) {
    return {
      type: "TextNode",
      chars: chars || "",
      loc: buildLoc(loc)
    };
  }

  // Expressions

  function buildSexpr(path, params, hash) {
    return {
      type: "SubExpression",
      path: buildPath(path),
      params: params || [],
      hash: hash || buildHash([])
    };
  }

  function buildPath(original) {
    if (typeof original === 'string') {
      return {
        type: "PathExpression",
        original: original,
        parts: original.split('.')
      };
    } else {
      return original;
    }
  }

  function buildString(value) {
    return {
      type: "StringLiteral",
      value: value,
      original: value
    };
  }

  function buildBoolean(value) {
    return {
      type: "BooleanLiteral",
      value: value,
      original: value
    };
  }

  function buildNumber(value) {
    return {
      type: "NumberLiteral",
      value: value,
      original: value
    };
  }

  function buildNull() {
    return {
      type: "NullLiteral",
      value: null,
      original: null
    };
  }

  function buildUndefined() {
    return {
      type: "UndefinedLiteral",
      value: undefined,
      original: undefined
    };
  }

  // Miscellaneous

  function buildHash(pairs) {
    return {
      type: "Hash",
      pairs: pairs || []
    };
  }

  function buildPair(key, value) {
    return {
      type: "HashPair",
      key: key,
      value: value
    };
  }

  function buildProgram(body, blockParams, loc) {
    return {
      type: "Program",
      body: body || [],
      blockParams: blockParams || [],
      loc: buildLoc(loc)
    };
  }

  function buildSource(source) {
    return source || null;
  }

  function buildPosition(line, column) {
    return {
      line: typeof line === 'number' ? line : null,
      column: typeof column === 'number' ? column : null
    };
  }

  function buildLoc(startLine, startColumn, endLine, endColumn, source) {
    if (arguments.length === 1) {
      var loc = startLine;

      if (typeof loc === 'object') {
        return {
          source: buildSource(loc.source),
          start: buildPosition(loc.start.line, loc.start.column),
          end: buildPosition(loc.end.line, loc.end.column)
        };
      } else {
        return null;
      }
    } else {
      return {
        source: buildSource(source),
        start: buildPosition(startLine, startColumn),
        end: buildPosition(endLine, endColumn)
      };
    }
  }

  exports.default = {
    mustache: buildMustache,
    block: buildBlock,
    partial: buildPartial,
    comment: buildComment,
    element: buildElement,
    elementModifier: buildElementModifier,
    component: buildComponent,
    attr: buildAttr,
    text: buildText,
    sexpr: buildSexpr,
    path: buildPath,
    string: buildString,
    boolean: buildBoolean,
    number: buildNumber,
    undefined: buildUndefined,
    null: buildNull,
    concat: buildConcat,
    hash: buildHash,
    pair: buildPair,
    program: buildProgram,
    loc: buildLoc,
    pos: buildPosition
  };

  });

  unwrapExports(builders);
  var builders_1 = builders.buildMustache;
  var builders_2 = builders.buildBlock;
  var builders_3 = builders.buildElementModifier;
  var builders_4 = builders.buildPartial;
  var builders_5 = builders.buildComment;
  var builders_6 = builders.buildConcat;
  var builders_7 = builders.buildElement;
  var builders_8 = builders.buildComponent;
  var builders_9 = builders.buildAttr;
  var builders_10 = builders.buildText;
  var builders_11 = builders.buildSexpr;
  var builders_12 = builders.buildPath;
  var builders_13 = builders.buildString;
  var builders_14 = builders.buildBoolean;
  var builders_15 = builders.buildNumber;
  var builders_16 = builders.buildNull;
  var builders_17 = builders.buildUndefined;
  var builders_18 = builders.buildHash;
  var builders_19 = builders.buildPair;
  var builders_20 = builders.buildProgram;

  var print = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = build;

  function build(ast) {
    if (!ast) {
      return '';
    }
    var output = [];

    switch (ast.type) {
      case 'Program':
        {
          var chainBlock = ast.chained && ast.body[0];
          if (chainBlock) {
            chainBlock.chained = true;
          }
          var body = buildEach(ast.body).join('');
          output.push(body);
        }
        break;
      case 'ElementNode':
        output.push('<', ast.tag);
        if (ast.attributes.length) {
          output.push(' ', buildEach(ast.attributes).join(' '));
        }
        if (ast.modifiers.length) {
          output.push(' ', buildEach(ast.modifiers).join(' '));
        }
        output.push('>');
        output.push.apply(output, buildEach(ast.children));
        output.push('</', ast.tag, '>');
        break;
      case 'AttrNode':
        output.push(ast.name, '=');
        var value = build(ast.value);
        if (ast.value.type === 'TextNode') {
          output.push('"', value, '"');
        } else {
          output.push(value);
        }
        break;
      case 'ConcatStatement':
        output.push('"');
        ast.parts.forEach(function (node) {
          if (node.type === 'StringLiteral') {
            output.push(node.original);
          } else {
            output.push(build(node));
          }
        });
        output.push('"');
        break;
      case 'TextNode':
        output.push(ast.chars);
        break;
      case 'MustacheStatement':
        {
          output.push(compactJoin(['{{', pathParams(ast), '}}']));
        }
        break;
      case 'ElementModifierStatement':
        {
          output.push(compactJoin(['{{', pathParams(ast), '}}']));
        }
        break;
      case 'PathExpression':
        output.push(ast.original);
        break;
      case 'SubExpression':
        {
          output.push('(', pathParams(ast), ')');
        }
        break;
      case 'BooleanLiteral':
        output.push(ast.value ? 'true' : false);
        break;
      case 'BlockStatement':
        {
          var lines = [];

          if (ast.chained) {
            lines.push(['{{else ', pathParams(ast), '}}'].join(''));
          } else {
            lines.push(openBlock(ast));
          }

          lines.push(build(ast.program));

          if (ast.inverse) {
            if (!ast.inverse.chained) {
              lines.push('{{else}}');
            }
            lines.push(build(ast.inverse));
          }

          if (!ast.chained) {
            lines.push(closeBlock(ast));
          }

          output.push(lines.join(''));
        }
        break;
      case 'PartialStatement':
        {
          output.push(compactJoin(['{{>', pathParams(ast), '}}']));
        }
        break;
      case 'CommentStatement':
        {
          output.push(compactJoin(['<!--', ast.value, '-->']));
        }
        break;
      case 'StringLiteral':
        {
          output.push('"' + ast.value + '"');
        }
        break;
      case 'NumberLiteral':
        {
          output.push(ast.value);
        }
        break;
      case 'UndefinedLiteral':
        {
          output.push('undefined');
        }
        break;
      case 'NullLiteral':
        {
          output.push('null');
        }
        break;
      case 'Hash':
        {
          output.push(ast.pairs.map(function (pair) {
            return build(pair);
          }).join(' '));
        }
        break;
      case 'HashPair':
        {
          output.push(ast.key + '=' + build(ast.value));
        }
        break;
    }
    return output.join('');
  }

  function compact(array) {
    var newArray = [];
    array.forEach(function (a) {
      if (typeof a !== 'undefined' && a !== null && a !== '') {
        newArray.push(a);
      }
    });
    return newArray;
  }

  function buildEach(asts) {
    var output = [];
    asts.forEach(function (node) {
      output.push(build(node));
    });
    return output;
  }

  function pathParams(ast) {
    var name = build(ast.name);
    var path = build(ast.path);
    var params = buildEach(ast.params).join(' ');
    var hash = build(ast.hash);
    return compactJoin([name, path, params, hash], ' ');
  }

  function compactJoin(array, delimiter) {
    return compact(array).join(delimiter || '');
  }

  function blockParams(block) {
    var params = block.program.blockParams;
    if (params.length) {
      return ' as |' + params.join(',') + '|';
    }
  }

  function openBlock(block) {
    return ['{{#', pathParams(block), blockParams(block), '}}'].join('');
  }

  function closeBlock(block) {
    return ['{{/', build(block.path), '}}'].join('');
  }
  module.exports = exports.default;

  });

  unwrapExports(print);

  var visitorKeys = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = {
    Program: ['body'],

    MustacheStatement: ['path', 'params', 'hash'],
    BlockStatement: ['path', 'params', 'hash', 'program', 'inverse'],
    ElementModifierStatement: ['path', 'params', 'hash'],
    PartialStatement: ['name', 'params', 'hash'],
    CommentStatement: [],
    ElementNode: ['attributes', 'modifiers', 'children'],
    ComponentNode: ['attributes', 'program'],
    AttrNode: ['value'],
    TextNode: [],

    ConcatStatement: ['parts'],
    SubExpression: ['path', 'params', 'hash'],
    PathExpression: [],

    StringLiteral: [],
    BooleanLiteral: [],
    NumberLiteral: [],
    NullLiteral: [],
    UndefinedLiteral: [],

    Hash: ['pairs'],
    HashPair: ['value']
  };
  module.exports = exports.default;

  });

  unwrapExports(visitorKeys);

  var errors = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.cannotRemoveNode = cannotRemoveNode;
  exports.cannotReplaceNode = cannotReplaceNode;
  exports.cannotReplaceOrRemoveInKeyHandlerYet = cannotReplaceOrRemoveInKeyHandlerYet;
  function TraversalError(message, node, parent, key) {
    this.name = "TraversalError";
    this.message = message;
    this.node = node;
    this.parent = parent;
    this.key = key;
  }

  TraversalError.prototype = Object.create(Error.prototype);
  TraversalError.prototype.constructor = TraversalError;

  exports.default = TraversalError;

  function cannotRemoveNode(node, parent, key) {
    return new TraversalError("Cannot remove a node unless it is part of an array", node, parent, key);
  }

  function cannotReplaceNode(node, parent, key) {
    return new TraversalError("Cannot replace a node with multiple nodes unless it is part of an array", node, parent, key);
  }

  function cannotReplaceOrRemoveInKeyHandlerYet(node, key) {
    return new TraversalError("Replacing and removing in key handlers is not yet supported.", node, null, key);
  }

  });

  unwrapExports(errors);
  var errors_1 = errors.cannotRemoveNode;
  var errors_2 = errors.cannotReplaceNode;
  var errors_3 = errors.cannotReplaceOrRemoveInKeyHandlerYet;

  var traverse_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = traverse;
  exports.normalizeVisitor = normalizeVisitor;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _typesVisitorKeys2 = _interopRequireDefault(visitorKeys);



  function visitNode(visitor, node) {
    var handler = visitor[node.type] || visitor.All;
    var result = undefined;

    if (handler && handler.enter) {
      result = handler.enter.call(null, node);
    }

    if (result === undefined) {
      var keys = _typesVisitorKeys2.default[node.type];

      for (var i = 0; i < keys.length; i++) {
        visitKey(visitor, handler, node, keys[i]);
      }

      if (handler && handler.exit) {
        result = handler.exit.call(null, node);
      }
    }

    return result;
  }

  function visitKey(visitor, handler, node, key) {
    var value = node[key];
    if (!value) {
      return;
    }

    var keyHandler = handler && (handler.keys[key] || handler.keys.All);
    var result = undefined;

    if (keyHandler && keyHandler.enter) {
      result = keyHandler.enter.call(null, node, key);
      if (result !== undefined) {
        throw errors.cannotReplaceOrRemoveInKeyHandlerYet(node, key);
      }
    }

    if (Array.isArray(value)) {
      visitArray(visitor, value);
    } else {
      var _result = visitNode(visitor, value);
      if (_result !== undefined) {
        assignKey(node, key, _result);
      }
    }

    if (keyHandler && keyHandler.exit) {
      result = keyHandler.exit.call(null, node, key);
      if (result !== undefined) {
        throw errors.cannotReplaceOrRemoveInKeyHandlerYet(node, key);
      }
    }
  }

  function visitArray(visitor, array) {
    for (var i = 0; i < array.length; i++) {
      var result = visitNode(visitor, array[i]);
      if (result !== undefined) {
        i += spliceArray(array, i, result) - 1;
      }
    }
  }

  function assignKey(node, key, result) {
    if (result === null) {
      throw errors.cannotRemoveNode(node[key], node, key);
    } else if (Array.isArray(result)) {
      if (result.length === 1) {
        node[key] = result[0];
      } else {
        if (result.length === 0) {
          throw errors.cannotRemoveNode(node[key], node, key);
        } else {
          throw errors.cannotReplaceNode(node[key], node, key);
        }
      }
    } else {
      node[key] = result;
    }
  }

  function spliceArray(array, index, result) {
    if (result === null) {
      array.splice(index, 1);
      return 0;
    } else if (Array.isArray(result)) {
      array.splice.apply(array, [index, 1].concat(result));
      return result.length;
    } else {
      array.splice(index, 1, result);
      return 1;
    }
  }

  function traverse(node, visitor) {
    visitNode(normalizeVisitor(visitor), node);
  }

  function normalizeVisitor(visitor) {
    var normalizedVisitor = {};

    for (var type in visitor) {
      var handler = visitor[type] || visitor.All;
      var normalizedKeys = {};

      if (typeof handler === 'object') {
        var keys = handler.keys;
        if (keys) {
          for (var key in keys) {
            var keyHandler = keys[key];
            if (typeof keyHandler === 'object') {
              normalizedKeys[key] = {
                enter: typeof keyHandler.enter === 'function' ? keyHandler.enter : null,
                exit: typeof keyHandler.exit === 'function' ? keyHandler.exit : null
              };
            } else if (typeof keyHandler === 'function') {
              normalizedKeys[key] = {
                enter: keyHandler,
                exit: null
              };
            }
          }
        }

        normalizedVisitor[type] = {
          enter: typeof handler.enter === 'function' ? handler.enter : null,
          exit: typeof handler.exit === 'function' ? handler.exit : null,
          keys: normalizedKeys
        };
      } else if (typeof handler === 'function') {
        normalizedVisitor[type] = {
          enter: handler,
          exit: null,
          keys: normalizedKeys
        };
      }
    }

    return normalizedVisitor;
  }

  });

  unwrapExports(traverse_1);
  var traverse_2 = traverse_1.normalizeVisitor;

  var walker = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  function Walker(order) {
    this.order = order;
    this.stack = [];
  }

  exports.default = Walker;

  Walker.prototype.visit = function (node, callback) {
    if (!node) {
      return;
    }

    this.stack.push(node);

    if (this.order === 'post') {
      this.children(node, callback);
      callback(node, this);
    } else {
      callback(node, this);
      this.children(node, callback);
    }

    this.stack.pop();
  };

  var visitors = {
    Program: function (walker, node, callback) {
      for (var i = 0; i < node.body.length; i++) {
        walker.visit(node.body[i], callback);
      }
    },

    ElementNode: function (walker, node, callback) {
      for (var i = 0; i < node.children.length; i++) {
        walker.visit(node.children[i], callback);
      }
    },

    BlockStatement: function (walker, node, callback) {
      walker.visit(node.program, callback);
      walker.visit(node.inverse, callback);
    },

    ComponentNode: function (walker, node, callback) {
      walker.visit(node.program, callback);
    }
  };

  Walker.prototype.children = function (node, callback) {
    var visitor = visitors[node.type];
    if (visitor) {
      visitor(this, node, callback);
    }
  };
  module.exports = exports.default;

  });

  unwrapExports(walker);

  var htmlbarsSyntax = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }



  var _htmlbarsSyntaxBuilders2 = _interopRequireDefault(builders);



  var _htmlbarsSyntaxParser2 = _interopRequireDefault(parser$2);



  var _htmlbarsSyntaxGenerationPrint2 = _interopRequireDefault(print);



  var _htmlbarsSyntaxTraversalTraverse2 = _interopRequireDefault(traverse_1);



  var _htmlbarsSyntaxTraversalWalker2 = _interopRequireDefault(walker);

  exports.builders = _htmlbarsSyntaxBuilders2.default;
  exports.parse = _htmlbarsSyntaxParser2.default;
  exports.print = _htmlbarsSyntaxGenerationPrint2.default;
  exports.traverse = _htmlbarsSyntaxTraversalTraverse2.default;
  exports.Walker = _htmlbarsSyntaxTraversalWalker2.default;

  });

  unwrapExports(htmlbarsSyntax);
  var htmlbarsSyntax_1 = htmlbarsSyntax.builders;
  var htmlbarsSyntax_2 = htmlbarsSyntax.parse;
  var htmlbarsSyntax_3 = htmlbarsSyntax.print;
  var htmlbarsSyntax_4 = htmlbarsSyntax.traverse;
  var htmlbarsSyntax_5 = htmlbarsSyntax.Walker;

  var utils$6 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.isSpace = isSpace;
  exports.isAlpha = isAlpha;
  exports.preprocessInput = preprocessInput;
  var WSP = /[\t\n\f ]/;
  var ALPHA = /[A-Za-z]/;
  var CRLF = /\r\n?/g;

  function isSpace(char) {
    return WSP.test(char);
  }

  function isAlpha(char) {
    return ALPHA.test(char);
  }

  function preprocessInput(input) {
    return input.replace(CRLF, "\n");
  }

  });

  unwrapExports(utils$6);
  var utils_1$3 = utils$6.isSpace;
  var utils_2$3 = utils$6.isAlpha;
  var utils_3$2 = utils$6.preprocessInput;

  var eventedTokenizer = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;



  function EventedTokenizer(delegate, entityParser) {
    this.delegate = delegate;
    this.entityParser = entityParser;

    this.state = null;
    this.input = null;

    this.index = -1;
    this.line = -1;
    this.column = -1;
    this.tagLine = -1;
    this.tagColumn = -1;

    this.reset();
  }

  EventedTokenizer.prototype = {
    reset: function () {
      this.state = 'beforeData';
      this.input = '';

      this.index = 0;
      this.line = 1;
      this.column = 0;

      this.tagLine = -1;
      this.tagColumn = -1;

      this.delegate.reset();
    },

    tokenize: function (input) {
      this.reset();
      this.tokenizePart(input);
      this.tokenizeEOF();
    },

    tokenizePart: function (input) {
      this.input += utils$6.preprocessInput(input);

      while (this.index < this.input.length) {
        this.states[this.state].call(this);
      }
    },

    tokenizeEOF: function () {
      this.flushData();
    },

    flushData: function () {
      if (this.state === 'data') {
        this.delegate.finishData();
        this.state = 'beforeData';
      }
    },

    peek: function () {
      return this.input.charAt(this.index);
    },

    consume: function () {
      var char = this.peek();

      this.index++;

      if (char === "\n") {
        this.line++;
        this.column = 0;
      } else {
        this.column++;
      }

      return char;
    },

    consumeCharRef: function () {
      var endIndex = this.input.indexOf(';', this.index);
      if (endIndex === -1) {
        return;
      }
      var entity = this.input.slice(this.index, endIndex);
      var chars = this.entityParser.parse(entity);
      if (chars) {
        var count = entity.length;
        // consume the entity chars
        while (count) {
          this.consume();
          count--;
        }
        // consume the `;`
        this.consume();

        return chars;
      }
    },

    markTagStart: function () {
      // these properties to be removed in next major bump
      this.tagLine = this.line;
      this.tagColumn = this.column;

      if (this.delegate.tagOpen) {
        this.delegate.tagOpen();
      }
    },

    states: {
      beforeData: function () {
        var char = this.peek();

        if (char === "<") {
          this.state = 'tagOpen';
          this.markTagStart();
          this.consume();
        } else {
          this.state = 'data';
          this.delegate.beginData();
        }
      },

      data: function () {
        var char = this.peek();

        if (char === "<") {
          this.delegate.finishData();
          this.state = 'tagOpen';
          this.markTagStart();
          this.consume();
        } else if (char === "&") {
          this.consume();
          this.delegate.appendToData(this.consumeCharRef() || "&");
        } else {
          this.consume();
          this.delegate.appendToData(char);
        }
      },

      tagOpen: function () {
        var char = this.consume();

        if (char === "!") {
          this.state = 'markupDeclaration';
        } else if (char === "/") {
          this.state = 'endTagOpen';
        } else if (utils$6.isAlpha(char)) {
          this.state = 'tagName';
          this.delegate.beginStartTag();
          this.delegate.appendToTagName(char.toLowerCase());
        }
      },

      markupDeclaration: function () {
        var char = this.consume();

        if (char === "-" && this.input.charAt(this.index) === "-") {
          this.consume();
          this.state = 'commentStart';
          this.delegate.beginComment();
        }
      },

      commentStart: function () {
        var char = this.consume();

        if (char === "-") {
          this.state = 'commentStartDash';
        } else if (char === ">") {
          this.delegate.finishComment();
          this.state = 'beforeData';
        } else {
          this.delegate.appendToCommentData(char);
          this.state = 'comment';
        }
      },

      commentStartDash: function () {
        var char = this.consume();

        if (char === "-") {
          this.state = 'commentEnd';
        } else if (char === ">") {
          this.delegate.finishComment();
          this.state = 'beforeData';
        } else {
          this.delegate.appendToCommentData("-");
          this.state = 'comment';
        }
      },

      comment: function () {
        var char = this.consume();

        if (char === "-") {
          this.state = 'commentEndDash';
        } else {
          this.delegate.appendToCommentData(char);
        }
      },

      commentEndDash: function () {
        var char = this.consume();

        if (char === "-") {
          this.state = 'commentEnd';
        } else {
          this.delegate.appendToCommentData("-" + char);
          this.state = 'comment';
        }
      },

      commentEnd: function () {
        var char = this.consume();

        if (char === ">") {
          this.delegate.finishComment();
          this.state = 'beforeData';
        } else {
          this.delegate.appendToCommentData("--" + char);
          this.state = 'comment';
        }
      },

      tagName: function () {
        var char = this.consume();

        if (utils$6.isSpace(char)) {
          this.state = 'beforeAttributeName';
        } else if (char === "/") {
          this.state = 'selfClosingStartTag';
        } else if (char === ">") {
          this.delegate.finishTag();
          this.state = 'beforeData';
        } else {
          this.delegate.appendToTagName(char);
        }
      },

      beforeAttributeName: function () {
        var char = this.peek();

        if (utils$6.isSpace(char)) {
          this.consume();
          return;
        } else if (char === "/") {
          this.state = 'selfClosingStartTag';
          this.consume();
        } else if (char === ">") {
          this.consume();
          this.delegate.finishTag();
          this.state = 'beforeData';
        } else {
          this.state = 'attributeName';
          this.delegate.beginAttribute();
          this.consume();
          this.delegate.appendToAttributeName(char);
        }
      },

      attributeName: function () {
        var char = this.peek();

        if (utils$6.isSpace(char)) {
          this.state = 'afterAttributeName';
          this.consume();
        } else if (char === "/") {
          this.delegate.beginAttributeValue(false);
          this.delegate.finishAttributeValue();
          this.consume();
          this.state = 'selfClosingStartTag';
        } else if (char === "=") {
          this.state = 'beforeAttributeValue';
          this.consume();
        } else if (char === ">") {
          this.delegate.beginAttributeValue(false);
          this.delegate.finishAttributeValue();
          this.consume();
          this.delegate.finishTag();
          this.state = 'beforeData';
        } else {
          this.consume();
          this.delegate.appendToAttributeName(char);
        }
      },

      afterAttributeName: function () {
        var char = this.peek();

        if (utils$6.isSpace(char)) {
          this.consume();
          return;
        } else if (char === "/") {
          this.delegate.beginAttributeValue(false);
          this.delegate.finishAttributeValue();
          this.consume();
          this.state = 'selfClosingStartTag';
        } else if (char === "=") {
          this.consume();
          this.state = 'beforeAttributeValue';
        } else if (char === ">") {
          this.delegate.beginAttributeValue(false);
          this.delegate.finishAttributeValue();
          this.consume();
          this.delegate.finishTag();
          this.state = 'beforeData';
        } else {
          this.delegate.beginAttributeValue(false);
          this.delegate.finishAttributeValue();
          this.consume();
          this.state = 'attributeName';
          this.delegate.beginAttribute();
          this.delegate.appendToAttributeName(char);
        }
      },

      beforeAttributeValue: function () {
        var char = this.peek();

        if (utils$6.isSpace(char)) {
          this.consume();
        } else if (char === '"') {
          this.state = 'attributeValueDoubleQuoted';
          this.delegate.beginAttributeValue(true);
          this.consume();
        } else if (char === "'") {
          this.state = 'attributeValueSingleQuoted';
          this.delegate.beginAttributeValue(true);
          this.consume();
        } else if (char === ">") {
          this.delegate.beginAttributeValue(false);
          this.delegate.finishAttributeValue();
          this.consume();
          this.delegate.finishTag();
          this.state = 'beforeData';
        } else {
          this.state = 'attributeValueUnquoted';
          this.delegate.beginAttributeValue(false);
          this.consume();
          this.delegate.appendToAttributeValue(char);
        }
      },

      attributeValueDoubleQuoted: function () {
        var char = this.consume();

        if (char === '"') {
          this.delegate.finishAttributeValue();
          this.state = 'afterAttributeValueQuoted';
        } else if (char === "&") {
          this.delegate.appendToAttributeValue(this.consumeCharRef('"') || "&");
        } else {
          this.delegate.appendToAttributeValue(char);
        }
      },

      attributeValueSingleQuoted: function () {
        var char = this.consume();

        if (char === "'") {
          this.delegate.finishAttributeValue();
          this.state = 'afterAttributeValueQuoted';
        } else if (char === "&") {
          this.delegate.appendToAttributeValue(this.consumeCharRef("'") || "&");
        } else {
          this.delegate.appendToAttributeValue(char);
        }
      },

      attributeValueUnquoted: function () {
        var char = this.peek();

        if (utils$6.isSpace(char)) {
          this.delegate.finishAttributeValue();
          this.consume();
          this.state = 'beforeAttributeName';
        } else if (char === "&") {
          this.consume();
          this.delegate.appendToAttributeValue(this.consumeCharRef(">") || "&");
        } else if (char === ">") {
          this.delegate.finishAttributeValue();
          this.consume();
          this.delegate.finishTag();
          this.state = 'beforeData';
        } else {
          this.consume();
          this.delegate.appendToAttributeValue(char);
        }
      },

      afterAttributeValueQuoted: function () {
        var char = this.peek();

        if (utils$6.isSpace(char)) {
          this.consume();
          this.state = 'beforeAttributeName';
        } else if (char === "/") {
          this.consume();
          this.state = 'selfClosingStartTag';
        } else if (char === ">") {
          this.consume();
          this.delegate.finishTag();
          this.state = 'beforeData';
        } else {
          this.state = 'beforeAttributeName';
        }
      },

      selfClosingStartTag: function () {
        var char = this.peek();

        if (char === ">") {
          this.consume();
          this.delegate.markTagAsSelfClosing();
          this.delegate.finishTag();
          this.state = 'beforeData';
        } else {
          this.state = 'beforeAttributeName';
        }
      },

      endTagOpen: function () {
        var char = this.consume();

        if (utils$6.isAlpha(char)) {
          this.state = 'tagName';
          this.delegate.beginEndTag();
          this.delegate.appendToTagName(char.toLowerCase());
        }
      }
    }
  };

  exports.default = EventedTokenizer;
  module.exports = exports.default;

  });

  unwrapExports(eventedTokenizer);

  var entityParser = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  function EntityParser(named) {
    this.named = named;
  }

  var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
  var CHARCODE = /^#([0-9]+)$/;
  var NAMED = /^([A-Za-z0-9]+)$/;

  EntityParser.prototype.parse = function (entity) {
    if (!entity) {
      return;
    }
    var matches = entity.match(HEXCHARCODE);
    if (matches) {
      return String.fromCharCode(parseInt(matches[1], 16));
    }
    matches = entity.match(CHARCODE);
    if (matches) {
      return String.fromCharCode(parseInt(matches[1], 10));
    }
    matches = entity.match(NAMED);
    if (matches) {
      return this.named[matches[1]];
    }
  };

  exports.default = EntityParser;
  module.exports = exports.default;

  });

  unwrapExports(entityParser);

  var html5NamedCharRefs = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = {
    Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "\u2061", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", AMP: "&", amp: "&", And: "⩓", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", ap: "≈", apacir: "⩯", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "\u2061", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", Barwed: "⌆", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", Because: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxDL: "╗", boxDl: "╖", boxdL: "╕", boxdl: "┐", boxDR: "╔", boxDr: "╓", boxdR: "╒", boxdr: "┌", boxH: "═", boxh: "─", boxHD: "╦", boxHd: "╤", boxhD: "╥", boxhd: "┬", boxHU: "╩", boxHu: "╧", boxhU: "╨", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxUL: "╝", boxUl: "╜", boxuL: "╛", boxul: "┘", boxUR: "╚", boxUr: "╙", boxuR: "╘", boxur: "└", boxV: "║", boxv: "│", boxVH: "╬", boxVh: "╫", boxvH: "╪", boxvh: "┼", boxVL: "╣", boxVl: "╢", boxvL: "╡", boxvl: "┤", boxVR: "╠", boxVr: "╟", boxvR: "╞", boxvr: "├", bprime: "‵", Breve: "˘", breve: "˘", brvbar: "¦", Bscr: "ℬ", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", Cap: "⋒", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", CenterDot: "·", centerdot: "·", Cfr: "ℭ", cfr: "𝔠", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", Colon: "∷", colon: ":", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", Conint: "∯", conint: "∮", ContourIntegral: "∮", Copf: "ℂ", copf: "𝕔", coprod: "∐", Coproduct: "∐", COPY: "©", copy: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", Cross: "⨯", cross: "✗", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", Cup: "⋓", cup: "∪", cupbrcap: "⩈", CupCap: "≍", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", Dagger: "‡", dagger: "†", daleth: "ℸ", Darr: "↡", dArr: "⇓", darr: "↓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", DD: "ⅅ", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", Diamond: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", Downarrow: "⇓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", ecir: "≖", Ecirc: "Ê", ecirc: "ê", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", eDot: "≑", edot: "ė", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", Escr: "ℰ", escr: "ℯ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", ExponentialE: "ⅇ", exponentiale: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", ForAll: "∀", forall: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", Fscr: "ℱ", fscr: "𝒻", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", gE: "≧", ge: "≥", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", Gg: "⋙", gg: "≫", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gnE: "≩", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", GT: ">", Gt: "≫", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", hArr: "⇔", harr: "↔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", Hfr: "ℌ", hfr: "𝔥", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", Hopf: "ℍ", hopf: "𝕙", horbar: "―", HorizontalLine: "─", Hscr: "ℋ", hscr: "𝒽", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "\u2063", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", Ifr: "ℑ", ifr: "𝔦", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Im: "ℑ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", Int: "∬", int: "∫", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", Iscr: "ℐ", iscr: "𝒾", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "\u2062", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", Lang: "⟪", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", Larr: "↞", lArr: "⇐", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", lAtail: "⤛", latail: "⤙", late: "⪭", lates: "⪭︀", lBarr: "⤎", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", lE: "≦", le: "≤", LeftAngleBracket: "⟨", LeftArrow: "←", Leftarrow: "⇐", leftarrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", Ll: "⋘", ll: "≪", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lnE: "≨", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftarrow: "⟵", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longleftrightarrow: "⟷", longmapsto: "⟼", LongRightArrow: "⟶", Longrightarrow: "⟹", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "\u200e", lrtri: "⊿", lsaquo: "‹", Lscr: "ℒ", lscr: "𝓁", Lsh: "↰", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", LT: "<", Lt: "≪", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", Mscr: "ℳ", mscr: "𝓂", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", ne: "≠", nearhk: "⤤", neArr: "⇗", nearr: "↗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\u000a", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlArr: "⇍", nlarr: "↚", nldr: "‥", nlE: "≦̸", nle: "≰", nLeftarrow: "⇍", nleftarrow: "↚", nLeftrightarrow: "⇎", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "\u2060", NonBreakingSpace: " ", Nopf: "ℕ", nopf: "𝕟", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nRightarrow: "⇏", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nVDash: "⊯", nVdash: "⊮", nvDash: "⊭", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwArr: "⇖", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", ocir: "⊚", Ocirc: "Ô", ocirc: "ô", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", Or: "⩔", or: "∨", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", Otimes: "⨷", otimes: "⊗", otimesas: "⨶", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", Popf: "ℙ", popf: "𝕡", pound: "£", Pr: "⪻", pr: "≺", prap: "⪷", prcue: "≼", prE: "⪳", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", Prime: "″", prime: "′", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", Qopf: "ℚ", qopf: "𝕢", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", QUOT: "\"", quot: "\"", rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", Rang: "⟫", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", Rarr: "↠", rArr: "⇒", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", rAtail: "⤜", ratail: "⤚", ratio: "∶", rationals: "ℚ", RBarr: "⤐", rBarr: "⤏", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", REG: "®", reg: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", Rfr: "ℜ", rfr: "𝔯", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrow: "→", Rightarrow: "⇒", rightarrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "\u200f", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", Ropf: "ℝ", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", Rscr: "ℛ", rscr: "𝓇", Rsh: "↱", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", Sc: "⪼", sc: "≻", scap: "⪸", Scaron: "Š", scaron: "š", sccue: "≽", scE: "⪴", sce: "⪰", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", seArr: "⇘", searr: "↘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "\u00ad", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", Square: "□", square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", Sub: "⋐", sub: "⊂", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", Subset: "⋐", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", Sum: "∑", sum: "∑", sung: "♪", Sup: "⋑", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", Supset: "⋑", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swArr: "⇙", swarr: "↙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "\u0009", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", Therefore: "∴", therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", Tilde: "∼", tilde: "˜", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", TRADE: "™", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", Uarr: "↟", uArr: "⇑", uarr: "↑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrow: "↑", Uparrow: "⇑", uparrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", Updownarrow: "⇕", updownarrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", upsi: "υ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", vArr: "⇕", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", Vbar: "⫫", vBar: "⫨", vBarv: "⫩", Vcy: "В", vcy: "в", VDash: "⊫", Vdash: "⊩", vDash: "⊨", vdash: "⊢", Vdashl: "⫦", Vee: "⋁", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", Verbar: "‖", verbar: "|", Vert: "‖", vert: "|", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", Wedge: "⋀", wedge: "∧", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", Xi: "Ξ", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", Yuml: "Ÿ", yuml: "ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", Zfr: "ℨ", zfr: "𝔷", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", Zopf: "ℤ", zopf: "𝕫", Zscr: "𝒵", zscr: "𝓏", zwj: "\u200d", zwnj: "\u200c"
  };
  module.exports = exports.default;

  });

  unwrapExports(html5NamedCharRefs);

  var utils$8 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.parseComponentBlockParams = parseComponentBlockParams;
  exports.childrenFor = childrenFor;
  exports.appendChild = appendChild;
  exports.isHelper = isHelper;
  exports.unwrapMustache = unwrapMustache;



  // Regex to validate the identifier for block parameters.
  // Based on the ID validation regex in Handlebars.

  var ID_INVERSE_PATTERN = /[!"#%-,\.\/;->@\[-\^`\{-~]/;

  // Checks the component's attributes to see if it uses block params.
  // If it does, registers the block params with the program and
  // removes the corresponding attributes from the element.

  function parseComponentBlockParams(element, program) {
    var l = element.attributes.length;
    var attrNames = [];

    for (var i = 0; i < l; i++) {
      attrNames.push(element.attributes[i].name);
    }

    var asIndex = arrayUtils.indexOfArray(attrNames, 'as');

    if (asIndex !== -1 && l > asIndex && attrNames[asIndex + 1].charAt(0) === '|') {
      // Some basic validation, since we're doing the parsing ourselves
      var paramsString = attrNames.slice(asIndex).join(' ');
      if (paramsString.charAt(paramsString.length - 1) !== '|' || paramsString.match(/\|/g).length !== 2) {
        throw new Error('Invalid block parameters syntax: \'' + paramsString + '\'');
      }

      var params = [];
      for (i = asIndex + 1; i < l; i++) {
        var param = attrNames[i].replace(/\|/g, '');
        if (param !== '') {
          if (ID_INVERSE_PATTERN.test(param)) {
            throw new Error('Invalid identifier for block parameters: \'' + param + '\' in \'' + paramsString + '\'');
          }
          params.push(param);
        }
      }

      if (params.length === 0) {
        throw new Error('Cannot use zero block parameters: \'' + paramsString + '\'');
      }

      element.attributes = element.attributes.slice(0, asIndex);
      program.blockParams = params;
    }
  }

  function childrenFor(node) {
    if (node.type === 'Program') {
      return node.body;
    }
    if (node.type === 'ElementNode') {
      return node.children;
    }
  }

  function appendChild(parent, node) {
    childrenFor(parent).push(node);
  }

  function isHelper(mustache) {
    return mustache.params && mustache.params.length > 0 || mustache.hash && mustache.hash.pairs.length > 0;
  }

  function unwrapMustache(mustache) {
    if (isHelper(mustache)) {
      return mustache;
    } else {
      return mustache.path;
    }
  }

  });

  unwrapExports(utils$8);
  var utils_1$4 = utils$8.parseComponentBlockParams;
  var utils_2$4 = utils$8.childrenFor;
  var utils_3$3 = utils$8.appendChild;
  var utils_4$2 = utils$8.isHelper;
  var utils_5$2 = utils$8.unwrapMustache;

  var handlebarsNodeVisitors = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }



  var _builders2 = _interopRequireDefault(builders);



  exports.default = {

    Program: function (program) {
      var body = [];
      var node = _builders2.default.program(body, program.blockParams, program.loc);
      var i,
          l = program.body.length;

      this.elementStack.push(node);

      if (l === 0) {
        return this.elementStack.pop();
      }

      for (i = 0; i < l; i++) {
        this.acceptNode(program.body[i]);
      }

      // Ensure that that the element stack is balanced properly.
      var poppedNode = this.elementStack.pop();
      if (poppedNode !== node) {
        throw new Error("Unclosed element `" + poppedNode.tag + "` (on line " + poppedNode.loc.start.line + ").");
      }

      return node;
    },

    BlockStatement: function (block) {
      delete block.inverseStrip;
      delete block.openString;
      delete block.closeStrip;

      if (this.tokenizer.state === 'comment') {
        this.appendToCommentData('{{' + this.sourceForMustache(block) + '}}');
        return;
      }

      if (this.tokenizer.state !== 'comment' && this.tokenizer.state !== 'data' && this.tokenizer.state !== 'beforeData') {
        throw new Error("A block may only be used inside an HTML element or another block.");
      }

      block = acceptCommonNodes(this, block);
      var program = block.program ? this.acceptNode(block.program) : null;
      var inverse = block.inverse ? this.acceptNode(block.inverse) : null;

      var node = _builders2.default.block(block.path, block.params, block.hash, program, inverse, block.loc);
      var parentProgram = this.currentElement();
      utils$8.appendChild(parentProgram, node);
    },

    MustacheStatement: function (rawMustache) {
      var tokenizer = this.tokenizer;
      var path = rawMustache.path;
      var params = rawMustache.params;
      var hash = rawMustache.hash;
      var escaped = rawMustache.escaped;
      var loc = rawMustache.loc;

      var mustache = _builders2.default.mustache(path, params, hash, !escaped, loc);

      if (tokenizer.state === 'comment') {
        this.appendToCommentData('{{' + this.sourceForMustache(mustache) + '}}');
        return;
      }

      acceptCommonNodes(this, mustache);

      switch (tokenizer.state) {
        // Tag helpers
        case "tagName":
          addElementModifier(this.currentNode, mustache);
          tokenizer.state = "beforeAttributeName";
          break;
        case "beforeAttributeName":
          addElementModifier(this.currentNode, mustache);
          break;
        case "attributeName":
        case "afterAttributeName":
          this.beginAttributeValue(false);
          this.finishAttributeValue();
          addElementModifier(this.currentNode, mustache);
          tokenizer.state = "beforeAttributeName";
          break;
        case "afterAttributeValueQuoted":
          addElementModifier(this.currentNode, mustache);
          tokenizer.state = "beforeAttributeName";
          break;

        // Attribute values
        case "beforeAttributeValue":
          appendDynamicAttributeValuePart(this.currentAttribute, mustache);
          tokenizer.state = 'attributeValueUnquoted';
          break;
        case "attributeValueDoubleQuoted":
        case "attributeValueSingleQuoted":
        case "attributeValueUnquoted":
          appendDynamicAttributeValuePart(this.currentAttribute, mustache);
          break;

        // TODO: Only append child when the tokenizer state makes
        // sense to do so, otherwise throw an error.
        default:
          utils$8.appendChild(this.currentElement(), mustache);
      }

      return mustache;
    },

    ContentStatement: function (content) {
      updateTokenizerLocation(this.tokenizer, content);

      this.tokenizer.tokenizePart(content.value);
      this.tokenizer.flushData();
    },

    CommentStatement: function (comment) {
      return comment;
    },

    PartialStatement: function (partial) {
      utils$8.appendChild(this.currentElement(), partial);
      return partial;
    },

    SubExpression: function (sexpr) {
      return acceptCommonNodes(this, sexpr);
    },

    PathExpression: function (path) {
      delete path.data;
      delete path.depth;

      return path;
    },

    Hash: function (hash) {
      for (var i = 0; i < hash.pairs.length; i++) {
        this.acceptNode(hash.pairs[i].value);
      }

      return hash;
    },

    StringLiteral: function () {},
    BooleanLiteral: function () {},
    NumberLiteral: function () {},
    UndefinedLiteral: function () {},
    NullLiteral: function () {}
  };

  function calculateRightStrippedOffsets(original, value) {
    if (value === '') {
      // if it is empty, just return the count of newlines
      // in original
      return {
        lines: original.split("\n").length - 1,
        columns: 0
      };
    }

    // otherwise, return the number of newlines prior to
    // `value`
    var difference = original.split(value)[0];
    var lines = difference.split(/\n/);
    var lineCount = lines.length - 1;

    return {
      lines: lineCount,
      columns: lines[lineCount].length
    };
  }

  function updateTokenizerLocation(tokenizer, content) {
    var line = content.loc.start.line;
    var column = content.loc.start.column;

    if (content.rightStripped) {
      var offsets = calculateRightStrippedOffsets(content.original, content.value);

      line = line + offsets.lines;
      if (offsets.lines) {
        column = offsets.columns;
      } else {
        column = column + offsets.columns;
      }
    }

    tokenizer.line = line;
    tokenizer.column = column;
  }

  function acceptCommonNodes(compiler, node) {
    compiler.acceptNode(node.path);

    if (node.params) {
      for (var i = 0; i < node.params.length; i++) {
        compiler.acceptNode(node.params[i]);
      }
    } else {
      node.params = [];
    }

    if (node.hash) {
      compiler.acceptNode(node.hash);
    } else {
      node.hash = _builders2.default.hash();
    }

    return node;
  }

  function addElementModifier(element, mustache) {
    var path = mustache.path;
    var params = mustache.params;
    var hash = mustache.hash;
    var loc = mustache.loc;

    var modifier = _builders2.default.elementModifier(path, params, hash, loc);
    element.modifiers.push(modifier);
  }

  function appendDynamicAttributeValuePart(attribute, part) {
    attribute.isDynamic = true;
    attribute.parts.push(part);
  }
  module.exports = exports.default;

  });

  unwrapExports(handlebarsNodeVisitors);

  var tokenizerEventHandlers = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }



  var _htmlbarsUtilVoidTagNames2 = _interopRequireDefault(voidTagNames_1);



  var _builders2 = _interopRequireDefault(builders);



  exports.default = {
    reset: function () {
      this.currentNode = null;
    },

    // Comment

    beginComment: function () {
      this.currentNode = _builders2.default.comment("");
      this.currentNode.loc = {
        source: null,
        start: _builders2.default.pos(this.tagOpenLine, this.tagOpenColumn),
        end: null
      };
    },

    appendToCommentData: function (char) {
      this.currentNode.value += char;
    },

    finishComment: function () {
      this.currentNode.loc.end = _builders2.default.pos(this.tokenizer.line, this.tokenizer.column);

      utils$8.appendChild(this.currentElement(), this.currentNode);
    },

    // Data

    beginData: function () {
      this.currentNode = _builders2.default.text();
      this.currentNode.loc = {
        source: null,
        start: _builders2.default.pos(this.tokenizer.line, this.tokenizer.column),
        end: null
      };
    },

    appendToData: function (char) {
      this.currentNode.chars += char;
    },

    finishData: function () {
      this.currentNode.loc.end = _builders2.default.pos(this.tokenizer.line, this.tokenizer.column);

      utils$8.appendChild(this.currentElement(), this.currentNode);
    },

    // Tags - basic

    tagOpen: function () {
      this.tagOpenLine = this.tokenizer.line;
      this.tagOpenColumn = this.tokenizer.column;
    },

    beginStartTag: function () {
      this.currentNode = {
        type: 'StartTag',
        name: "",
        attributes: [],
        modifiers: [],
        selfClosing: false,
        loc: null
      };
    },

    beginEndTag: function () {
      this.currentNode = {
        type: 'EndTag',
        name: "",
        attributes: [],
        modifiers: [],
        selfClosing: false,
        loc: null
      };
    },

    finishTag: function () {
      var _tokenizer = this.tokenizer;
      var line = _tokenizer.line;
      var column = _tokenizer.column;

      var tag = this.currentNode;
      tag.loc = _builders2.default.loc(this.tagOpenLine, this.tagOpenColumn, line, column);

      if (tag.type === 'StartTag') {
        this.finishStartTag();

        if (_htmlbarsUtilVoidTagNames2.default.hasOwnProperty(tag.name) || tag.selfClosing) {
          this.finishEndTag(true);
        }
      } else if (tag.type === 'EndTag') {
        this.finishEndTag(false);
      }
    },

    finishStartTag: function () {
      var _currentNode = this.currentNode;
      var name = _currentNode.name;
      var attributes = _currentNode.attributes;
      var modifiers = _currentNode.modifiers;

      validateStartTag(this.currentNode, this.tokenizer);

      var loc = _builders2.default.loc(this.tagOpenLine, this.tagOpenColumn);
      var element = _builders2.default.element(name, attributes, modifiers, [], loc);
      this.elementStack.push(element);
    },

    finishEndTag: function (isVoid) {
      var tag = this.currentNode;

      var element = this.elementStack.pop();
      var parent = this.currentElement();
      var disableComponentGeneration = this.options.disableComponentGeneration === true;

      validateEndTag(tag, element, isVoid);

      element.loc.end.line = this.tokenizer.line;
      element.loc.end.column = this.tokenizer.column;

      if (disableComponentGeneration || cannotBeComponent(element.tag)) {
        utils$8.appendChild(parent, element);
      } else {
        var program = _builders2.default.program(element.children);
        utils$8.parseComponentBlockParams(element, program);
        var component = _builders2.default.component(element.tag, element.attributes, program, element.loc);
        utils$8.appendChild(parent, component);
      }
    },

    markTagAsSelfClosing: function () {
      this.currentNode.selfClosing = true;
    },

    // Tags - name

    appendToTagName: function (char) {
      this.currentNode.name += char;
    },

    // Tags - attributes

    beginAttribute: function () {
      var tag = this.currentNode;
      if (tag.type === 'EndTag') {
        throw new Error("Invalid end tag: closing tag must not have attributes, " + ("in `" + tag.name + "` (on line " + this.tokenizer.line + ")."));
      }

      this.currentAttribute = {
        name: "",
        parts: [],
        isQuoted: false,
        isDynamic: false,
        // beginAttribute isn't called until after the first char is consumed
        start: _builders2.default.pos(this.tokenizer.line, this.tokenizer.column),
        valueStartLine: null,
        valueStartColumn: null
      };
    },

    appendToAttributeName: function (char) {
      this.currentAttribute.name += char;
    },

    beginAttributeValue: function (isQuoted) {
      this.currentAttribute.isQuoted = isQuoted;
      this.currentAttribute.valueStartLine = this.tokenizer.line;
      this.currentAttribute.valueStartColumn = this.tokenizer.column;
    },

    appendToAttributeValue: function (char) {
      var parts = this.currentAttribute.parts;

      if (typeof parts[parts.length - 1] === 'string') {
        parts[parts.length - 1] += char;
      } else {
        parts.push(char);
      }
    },

    finishAttributeValue: function () {
      var _currentAttribute = this.currentAttribute;
      var name = _currentAttribute.name;
      var parts = _currentAttribute.parts;
      var isQuoted = _currentAttribute.isQuoted;
      var isDynamic = _currentAttribute.isDynamic;
      var valueStartLine = _currentAttribute.valueStartLine;
      var valueStartColumn = _currentAttribute.valueStartColumn;

      var value = assembleAttributeValue(parts, isQuoted, isDynamic, this.tokenizer.line);
      value.loc = _builders2.default.loc(valueStartLine, valueStartColumn, this.tokenizer.line, this.tokenizer.column);

      var loc = _builders2.default.loc(this.currentAttribute.start.line, this.currentAttribute.start.column, this.tokenizer.line, this.tokenizer.column);

      var attribute = _builders2.default.attr(name, value, loc);

      this.currentNode.attributes.push(attribute);
    }
  };

  function assembleAttributeValue(parts, isQuoted, isDynamic, line) {
    if (isDynamic) {
      if (isQuoted) {
        return assembleConcatenatedValue(parts);
      } else {
        if (parts.length === 1 || parts.length === 2 && parts[1] === '/') {
          return parts[0];
        } else {
          throw new Error("An unquoted attribute value must be a string or a mustache, " + "preceeded by whitespace or a '=' character, and " + ("followed by whitespace, a '>' character or a '/>' (on line " + line + ")"));
        }
      }
    } else {
      return _builders2.default.text(parts.length > 0 ? parts[0] : "");
    }
  }

  function assembleConcatenatedValue(parts) {
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];

      if (typeof part === 'string') {
        parts[i] = _builders2.default.string(parts[i]);
      } else {
        if (part.type === 'MustacheStatement') {
          parts[i] = utils$8.unwrapMustache(part);
        } else {
          throw new Error("Unsupported node in quoted attribute value: " + part.type);
        }
      }
    }

    return _builders2.default.concat(parts);
  }

  function cannotBeComponent(tagName) {
    return tagName.indexOf("-") === -1 && tagName.indexOf(".") === -1;
  }

  function validateStartTag(tag, tokenizer) {
    // No support for <script> tags
    if (tag.name === "script") {
      throw new Error("`SCRIPT` tags are not allowed in HTMLBars templates (on line " + tokenizer.tagLine + ")");
    }
  }

  function validateEndTag(tag, element, selfClosing) {
    if (_htmlbarsUtilVoidTagNames2.default[tag.name] && !selfClosing) {
      // EngTag is also called by StartTag for void and self-closing tags (i.e.
      // <input> or <br />, so we need to check for that here. Otherwise, we would
      // throw an error for those cases.
      throw new Error("Invalid end tag " + formatEndTagInfo(tag) + " (void elements cannot have end tags).");
    } else if (element.tag === undefined) {
      throw new Error("Closing tag " + formatEndTagInfo(tag) + " without an open tag.");
    } else if (element.tag !== tag.name) {
      throw new Error("Closing tag " + formatEndTagInfo(tag) + " did not match last open tag `" + element.tag + "` (on line " + element.loc.start.line + ").");
    }
  }

  function formatEndTagInfo(tag) {
    return "`" + tag.name + "` (on line " + tag.loc.end.line + ")";
  }
  module.exports = exports.default;

  });

  unwrapExports(tokenizerEventHandlers);

  var parser$2 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.preprocess = preprocess;
  exports.Parser = Parser;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }





  var syntax = _interopRequireWildcard(htmlbarsSyntax);



  var _simpleHtmlTokenizerEventedTokenizer2 = _interopRequireDefault(eventedTokenizer);



  var _simpleHtmlTokenizerEntityParser2 = _interopRequireDefault(entityParser);



  var _simpleHtmlTokenizerHtml5NamedCharRefs2 = _interopRequireDefault(html5NamedCharRefs);



  var _parserHandlebarsNodeVisitors2 = _interopRequireDefault(handlebarsNodeVisitors);



  var _parserTokenizerEventHandlers2 = _interopRequireDefault(tokenizerEventHandlers);

  function preprocess(html, options) {
    var ast = typeof html === 'object' ? html : base.parse(html);
    var combined = new Parser(html, options).acceptNode(ast);

    if (options && options.plugins && options.plugins.ast) {
      for (var i = 0, l = options.plugins.ast.length; i < l; i++) {
        var plugin = new options.plugins.ast[i](options);

        plugin.syntax = syntax;

        combined = plugin.transform(combined);
      }
    }

    return combined;
  }

  exports.default = preprocess;

  var entityParser$$1 = new _simpleHtmlTokenizerEntityParser2.default(_simpleHtmlTokenizerHtml5NamedCharRefs2.default);

  function Parser(source, options) {
    this.options = options || {};
    this.elementStack = [];
    this.tokenizer = new _simpleHtmlTokenizerEventedTokenizer2.default(this, entityParser$$1);

    this.currentNode = null;
    this.currentAttribute = null;

    if (typeof source === 'string') {
      this.source = source.split(/(?:\r\n?|\n)/g);
    }
  }

  for (var key in _parserHandlebarsNodeVisitors2.default) {
    Parser.prototype[key] = _parserHandlebarsNodeVisitors2.default[key];
  }

  for (var key in _parserTokenizerEventHandlers2.default) {
    Parser.prototype[key] = _parserTokenizerEventHandlers2.default[key];
  }

  Parser.prototype.acceptNode = function (node) {
    return this[node.type](node);
  };

  Parser.prototype.currentElement = function () {
    return this.elementStack[this.elementStack.length - 1];
  };

  Parser.prototype.sourceForMustache = function (mustache) {
    var firstLine = mustache.loc.start.line - 1;
    var lastLine = mustache.loc.end.line - 1;
    var currentLine = firstLine - 1;
    var firstColumn = mustache.loc.start.column + 2;
    var lastColumn = mustache.loc.end.column - 2;
    var string = [];
    var line;

    if (!this.source) {
      return '{{' + mustache.path.id.original + '}}';
    }

    while (currentLine < lastLine) {
      currentLine++;
      line = this.source[currentLine];

      if (currentLine === firstLine) {
        if (firstLine === lastLine) {
          string.push(line.slice(firstColumn, lastColumn));
        } else {
          string.push(line.slice(firstColumn));
        }
      } else if (currentLine === lastLine) {
        string.push(line.slice(0, lastColumn));
      } else {
        string.push(line);
      }
    }

    return string.join('\n');
  };

  });

  unwrapExports(parser$2);
  var parser_1 = parser$2.preprocess;
  var parser_2 = parser$2.Parser;

  var templateVisitor = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  var push = Array.prototype.push;

  function Frame() {
    this.parentNode = null;
    this.children = null;
    this.childIndex = null;
    this.childCount = null;
    this.childTemplateCount = 0;
    this.mustacheCount = 0;
    this.actions = [];
  }

  /**
   * Takes in an AST and outputs a list of actions to be consumed
   * by a compiler. For example, the template
   *
   *     foo{{bar}}<div>baz</div>
   *
   * produces the actions
   *
   *     [['startProgram', [programNode, 0]],
   *      ['text', [textNode, 0, 3]],
   *      ['mustache', [mustacheNode, 1, 3]],
   *      ['openElement', [elementNode, 2, 3, 0]],
   *      ['text', [textNode, 0, 1]],
   *      ['closeElement', [elementNode, 2, 3],
   *      ['endProgram', [programNode]]]
   *
   * This visitor walks the AST depth first and backwards. As
   * a result the bottom-most child template will appear at the
   * top of the actions list whereas the root template will appear
   * at the bottom of the list. For example,
   *
   *     <div>{{#if}}foo{{else}}bar<b></b>{{/if}}</div>
   *
   * produces the actions
   *
   *     [['startProgram', [programNode, 0]],
   *      ['text', [textNode, 0, 2, 0]],
   *      ['openElement', [elementNode, 1, 2, 0]],
   *      ['closeElement', [elementNode, 1, 2]],
   *      ['endProgram', [programNode]],
   *      ['startProgram', [programNode, 0]],
   *      ['text', [textNode, 0, 1]],
   *      ['endProgram', [programNode]],
   *      ['startProgram', [programNode, 2]],
   *      ['openElement', [elementNode, 0, 1, 1]],
   *      ['block', [blockNode, 0, 1]],
   *      ['closeElement', [elementNode, 0, 1]],
   *      ['endProgram', [programNode]]]
   *
   * The state of the traversal is maintained by a stack of frames.
   * Whenever a node with children is entered (either a ProgramNode
   * or an ElementNode) a frame is pushed onto the stack. The frame
   * contains information about the state of the traversal of that
   * node. For example,
   *
   *   - index of the current child node being visited
   *   - the number of mustaches contained within its child nodes
   *   - the list of actions generated by its child nodes
   */

  function TemplateVisitor() {
    this.frameStack = [];
    this.actions = [];
    this.programDepth = -1;
  }

  // Traversal methods

  TemplateVisitor.prototype.visit = function (node) {
    this[node.type](node);
  };

  TemplateVisitor.prototype.Program = function (program) {
    this.programDepth++;

    var parentFrame = this.getCurrentFrame();
    var programFrame = this.pushFrame();

    programFrame.parentNode = program;
    programFrame.children = program.body;
    programFrame.childCount = program.body.length;
    programFrame.blankChildTextNodes = [];
    programFrame.actions.push(['endProgram', [program, this.programDepth]]);

    for (var i = program.body.length - 1; i >= 0; i--) {
      programFrame.childIndex = i;
      this.visit(program.body[i]);
    }

    programFrame.actions.push(['startProgram', [program, programFrame.childTemplateCount, programFrame.blankChildTextNodes.reverse()]]);
    this.popFrame();

    this.programDepth--;

    // Push the completed template into the global actions list
    if (parentFrame) {
      parentFrame.childTemplateCount++;
    }
    push.apply(this.actions, programFrame.actions.reverse());
  };

  TemplateVisitor.prototype.ElementNode = function (element) {
    var parentFrame = this.getCurrentFrame();
    var elementFrame = this.pushFrame();

    elementFrame.parentNode = element;
    elementFrame.children = element.children;
    elementFrame.childCount = element.children.length;
    elementFrame.mustacheCount += element.modifiers.length;
    elementFrame.blankChildTextNodes = [];

    var actionArgs = [element, parentFrame.childIndex, parentFrame.childCount];

    elementFrame.actions.push(['closeElement', actionArgs]);

    for (var i = element.attributes.length - 1; i >= 0; i--) {
      this.visit(element.attributes[i]);
    }

    for (i = element.children.length - 1; i >= 0; i--) {
      elementFrame.childIndex = i;
      this.visit(element.children[i]);
    }

    elementFrame.actions.push(['openElement', actionArgs.concat([elementFrame.mustacheCount, elementFrame.blankChildTextNodes.reverse()])]);
    this.popFrame();

    // Propagate the element's frame state to the parent frame
    if (elementFrame.mustacheCount > 0) {
      parentFrame.mustacheCount++;
    }
    parentFrame.childTemplateCount += elementFrame.childTemplateCount;
    push.apply(parentFrame.actions, elementFrame.actions);
  };

  TemplateVisitor.prototype.AttrNode = function (attr) {
    if (attr.value.type !== 'TextNode') {
      this.getCurrentFrame().mustacheCount++;
    }
  };

  TemplateVisitor.prototype.TextNode = function (text) {
    var frame = this.getCurrentFrame();
    if (text.chars === '') {
      frame.blankChildTextNodes.push(domIndexOf(frame.children, text));
    }
    frame.actions.push(['text', [text, frame.childIndex, frame.childCount]]);
  };

  TemplateVisitor.prototype.BlockStatement = function (node) {
    var frame = this.getCurrentFrame();

    frame.mustacheCount++;
    frame.actions.push(['block', [node, frame.childIndex, frame.childCount]]);

    if (node.inverse) {
      this.visit(node.inverse);
    }
    if (node.program) {
      this.visit(node.program);
    }
  };

  TemplateVisitor.prototype.ComponentNode = function (node) {
    var frame = this.getCurrentFrame();

    frame.mustacheCount++;
    frame.actions.push(['component', [node, frame.childIndex, frame.childCount]]);

    if (node.program) {
      this.visit(node.program);
    }
  };

  TemplateVisitor.prototype.PartialStatement = function (node) {
    var frame = this.getCurrentFrame();
    frame.mustacheCount++;
    frame.actions.push(['mustache', [node, frame.childIndex, frame.childCount]]);
  };

  TemplateVisitor.prototype.CommentStatement = function (text) {
    var frame = this.getCurrentFrame();
    frame.actions.push(['comment', [text, frame.childIndex, frame.childCount]]);
  };

  TemplateVisitor.prototype.MustacheStatement = function (mustache) {
    var frame = this.getCurrentFrame();
    frame.mustacheCount++;
    frame.actions.push(['mustache', [mustache, frame.childIndex, frame.childCount]]);
  };

  // Frame helpers

  TemplateVisitor.prototype.getCurrentFrame = function () {
    return this.frameStack[this.frameStack.length - 1];
  };

  TemplateVisitor.prototype.pushFrame = function () {
    var frame = new Frame();
    this.frameStack.push(frame);
    return frame;
  };

  TemplateVisitor.prototype.popFrame = function () {
    return this.frameStack.pop();
  };

  exports.default = TemplateVisitor;

  // Returns the index of `domNode` in the `nodes` array, skipping
  // over any nodes which do not represent DOM nodes.
  function domIndexOf(nodes, domNode) {
    var index = -1;

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      if (node.type !== 'TextNode' && node.type !== 'ElementNode') {
        continue;
      } else {
        index++;
      }

      if (node === domNode) {
        return index;
      }
    }

    return -1;
  }
  module.exports = exports.default;

  });

  unwrapExports(templateVisitor);

  var utils$a = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.processOpcodes = processOpcodes;

  function processOpcodes(compiler, opcodes) {
    for (var i = 0, l = opcodes.length; i < l; i++) {
      var method = opcodes[i][0];
      var params = opcodes[i][1];
      if (params) {
        compiler[method].apply(compiler, params);
      } else {
        compiler[method].call(compiler);
      }
    }
  }

  });

  unwrapExports(utils$a);
  var utils_1$5 = utils$a.processOpcodes;

  var fragmentOpcodeCompiler = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }



  var _templateVisitor2 = _interopRequireDefault(templateVisitor);







  function FragmentOpcodeCompiler() {
    this.opcodes = [];
  }

  exports.default = FragmentOpcodeCompiler;

  FragmentOpcodeCompiler.prototype.compile = function (ast) {
    var templateVisitor$$1 = new _templateVisitor2.default();
    templateVisitor$$1.visit(ast);

    utils$a.processOpcodes(this, templateVisitor$$1.actions);

    return this.opcodes;
  };

  FragmentOpcodeCompiler.prototype.opcode = function (type, params) {
    this.opcodes.push([type, params]);
  };

  FragmentOpcodeCompiler.prototype.text = function (text) {
    this.opcode('createText', [text.chars]);
    this.opcode('appendChild');
  };

  FragmentOpcodeCompiler.prototype.comment = function (comment) {
    this.opcode('createComment', [comment.value]);
    this.opcode('appendChild');
  };

  FragmentOpcodeCompiler.prototype.openElement = function (element) {
    this.opcode('createElement', [element.tag]);
    arrayUtils.forEach(element.attributes, this.attribute, this);
  };

  FragmentOpcodeCompiler.prototype.closeElement = function () {
    this.opcode('appendChild');
  };

  FragmentOpcodeCompiler.prototype.startProgram = function () {
    this.opcodes.length = 0;
    this.opcode('createFragment');
  };

  FragmentOpcodeCompiler.prototype.endProgram = function () {
    this.opcode('returnNode');
  };

  FragmentOpcodeCompiler.prototype.mustache = function () {
    this.pushMorphPlaceholderNode();
  };

  FragmentOpcodeCompiler.prototype.component = function () {
    this.pushMorphPlaceholderNode();
  };

  FragmentOpcodeCompiler.prototype.block = function () {
    this.pushMorphPlaceholderNode();
  };

  FragmentOpcodeCompiler.prototype.pushMorphPlaceholderNode = function () {
    this.opcode('createComment', [""]);
    this.opcode('appendChild');
  };

  FragmentOpcodeCompiler.prototype.attribute = function (attr) {
    if (attr.value.type === 'TextNode') {
      var namespace = htmlbarsUtil.getAttrNamespace(attr.name);
      this.opcode('setAttribute', [attr.name, attr.value.chars, namespace]);
    }
  };

  FragmentOpcodeCompiler.prototype.setNamespace = function (namespace) {
    this.opcode('setNamespace', [namespace]);
  };
  module.exports = exports.default;

  });

  unwrapExports(fragmentOpcodeCompiler);

  var quoting = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.hash = hash;
  exports.repeat = repeat;
  function escapeString(str) {
    str = str.replace(/\\/g, "\\\\");
    str = str.replace(/"/g, '\\"');
    str = str.replace(/\n/g, "\\n");
    return str;
  }

  exports.escapeString = escapeString;

  function string(str) {
    return '"' + escapeString(str) + '"';
  }

  exports.string = string;

  function array(a) {
    return "[" + a + "]";
  }

  exports.array = array;

  function hash(pairs) {
    return "{" + pairs.join(", ") + "}";
  }

  function repeat(chars, times) {
    var str = "";
    while (times--) {
      str += chars;
    }
    return str;
  }

  });

  unwrapExports(quoting);
  var quoting_1 = quoting.hash;
  var quoting_2 = quoting.repeat;
  var quoting_3 = quoting.escapeString;
  var quoting_4 = quoting.string;
  var quoting_5 = quoting.array;

  var fragmentJavascriptCompiler = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;





  var svgNamespace = "http://www.w3.org/2000/svg",

  // http://www.w3.org/html/wg/drafts/html/master/syntax.html#html-integration-point
  svgHTMLIntegrationPoints = { 'foreignObject': true, 'desc': true, 'title': true };

  function FragmentJavaScriptCompiler() {
    this.source = [];
    this.depth = -1;
  }

  exports.default = FragmentJavaScriptCompiler;

  FragmentJavaScriptCompiler.prototype.compile = function (opcodes, options) {
    this.source.length = 0;
    this.depth = -1;
    this.indent = options && options.indent || "";
    this.namespaceFrameStack = [{ namespace: null, depth: null }];
    this.domNamespace = null;

    this.source.push('function buildFragment(dom) {\n');
    utils$a.processOpcodes(this, opcodes);
    this.source.push(this.indent + '}');

    return this.source.join('');
  };

  FragmentJavaScriptCompiler.prototype.createFragment = function () {
    var el = 'el' + ++this.depth;
    this.source.push(this.indent + '  var ' + el + ' = dom.createDocumentFragment();\n');
  };

  FragmentJavaScriptCompiler.prototype.createElement = function (tagName) {
    var el = 'el' + ++this.depth;
    if (tagName === 'svg') {
      this.pushNamespaceFrame({ namespace: svgNamespace, depth: this.depth });
    }
    this.ensureNamespace();
    this.source.push(this.indent + '  var ' + el + ' = dom.createElement(' + quoting.string(tagName) + ');\n');
    if (svgHTMLIntegrationPoints[tagName]) {
      this.pushNamespaceFrame({ namespace: null, depth: this.depth });
    }
  };

  FragmentJavaScriptCompiler.prototype.createText = function (str) {
    var el = 'el' + ++this.depth;
    this.source.push(this.indent + '  var ' + el + ' = dom.createTextNode(' + quoting.string(str) + ');\n');
  };

  FragmentJavaScriptCompiler.prototype.createComment = function (str) {
    var el = 'el' + ++this.depth;
    this.source.push(this.indent + '  var ' + el + ' = dom.createComment(' + quoting.string(str) + ');\n');
  };

  FragmentJavaScriptCompiler.prototype.returnNode = function () {
    var el = 'el' + this.depth;
    this.source.push(this.indent + '  return ' + el + ';\n');
  };

  FragmentJavaScriptCompiler.prototype.setAttribute = function (name, value, namespace) {
    var el = 'el' + this.depth;
    if (namespace) {
      this.source.push(this.indent + '  dom.setAttributeNS(' + el + ',' + quoting.string(namespace) + ',' + quoting.string(name) + ',' + quoting.string(value) + ');\n');
    } else {
      this.source.push(this.indent + '  dom.setAttribute(' + el + ',' + quoting.string(name) + ',' + quoting.string(value) + ');\n');
    }
  };

  FragmentJavaScriptCompiler.prototype.appendChild = function () {
    if (this.depth === this.getCurrentNamespaceFrame().depth) {
      this.popNamespaceFrame();
    }
    var child = 'el' + this.depth--;
    var el = 'el' + this.depth;
    this.source.push(this.indent + '  dom.appendChild(' + el + ', ' + child + ');\n');
  };

  FragmentJavaScriptCompiler.prototype.getCurrentNamespaceFrame = function () {
    return this.namespaceFrameStack[this.namespaceFrameStack.length - 1];
  };

  FragmentJavaScriptCompiler.prototype.pushNamespaceFrame = function (frame) {
    this.namespaceFrameStack.push(frame);
  };

  FragmentJavaScriptCompiler.prototype.popNamespaceFrame = function () {
    return this.namespaceFrameStack.pop();
  };

  FragmentJavaScriptCompiler.prototype.ensureNamespace = function () {
    var correctNamespace = this.getCurrentNamespaceFrame().namespace;
    if (this.domNamespace !== correctNamespace) {
      this.source.push(this.indent + '  dom.setNamespace(' + (correctNamespace ? quoting.string(correctNamespace) : 'null') + ');\n');
      this.domNamespace = correctNamespace;
    }
  };
  module.exports = exports.default;

  });

  unwrapExports(fragmentJavascriptCompiler);

  var hydrationOpcodeCompiler = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }



  var _templateVisitor2 = _interopRequireDefault(templateVisitor);









  function detectIsElementChecked(element) {
    for (var i = 0, len = element.attributes.length; i < len; i++) {
      if (element.attributes[i].name === 'checked') {
        return true;
      }
    }
    return false;
  }

  function HydrationOpcodeCompiler() {
    this.opcodes = [];
    this.paths = [];
    this.templateId = 0;
    this.currentDOMChildIndex = 0;
    this.morphs = [];
    this.morphNum = 0;
    this.element = null;
    this.elementNum = -1;
  }

  exports.default = HydrationOpcodeCompiler;

  HydrationOpcodeCompiler.prototype.compile = function (ast) {
    var templateVisitor$$1 = new _templateVisitor2.default();
    templateVisitor$$1.visit(ast);

    utils$a.processOpcodes(this, templateVisitor$$1.actions);

    return this.opcodes;
  };

  HydrationOpcodeCompiler.prototype.accept = function (node) {
    this[node.type](node);
  };

  HydrationOpcodeCompiler.prototype.opcode = function (type) {
    var params = [].slice.call(arguments, 1);
    this.opcodes.push([type, params]);
  };

  HydrationOpcodeCompiler.prototype.startProgram = function (program, c, blankChildTextNodes) {
    this.opcodes.length = 0;
    this.paths.length = 0;
    this.morphs.length = 0;
    this.templateId = 0;
    this.currentDOMChildIndex = -1;
    this.morphNum = 0;

    var blockParams = program.blockParams || [];

    for (var i = 0; i < blockParams.length; i++) {
      this.opcode('printSetHook', blockParams[i], i);
    }

    if (blankChildTextNodes.length > 0) {
      this.opcode('repairClonedNode', blankChildTextNodes);
    }
  };

  HydrationOpcodeCompiler.prototype.insertBoundary = function (first) {
    this.opcode(first ? 'openBoundary' : 'closeBoundary');
  };

  HydrationOpcodeCompiler.prototype.endProgram = function () {
    distributeMorphs(this.morphs, this.opcodes);
  };

  HydrationOpcodeCompiler.prototype.text = function () {
    ++this.currentDOMChildIndex;
  };

  HydrationOpcodeCompiler.prototype.comment = function () {
    ++this.currentDOMChildIndex;
  };

  HydrationOpcodeCompiler.prototype.openElement = function (element, pos, len, mustacheCount, blankChildTextNodes) {
    distributeMorphs(this.morphs, this.opcodes);
    ++this.currentDOMChildIndex;

    this.element = this.currentDOMChildIndex;

    this.opcode('consumeParent', this.currentDOMChildIndex);

    // If our parent reference will be used more than once, cache its reference.
    if (mustacheCount > 1) {
      shareElement(this);
    }

    var isElementChecked = detectIsElementChecked(element);
    if (blankChildTextNodes.length > 0 || isElementChecked) {
      this.opcode('repairClonedNode', blankChildTextNodes, isElementChecked);
    }

    this.paths.push(this.currentDOMChildIndex);
    this.currentDOMChildIndex = -1;

    arrayUtils.forEach(element.attributes, this.attribute, this);
    arrayUtils.forEach(element.modifiers, this.elementModifier, this);
  };

  HydrationOpcodeCompiler.prototype.closeElement = function () {
    distributeMorphs(this.morphs, this.opcodes);
    this.opcode('popParent');
    this.currentDOMChildIndex = this.paths.pop();
  };

  HydrationOpcodeCompiler.prototype.mustache = function (mustache, childIndex, childCount) {
    this.pushMorphPlaceholderNode(childIndex, childCount);

    var opcode;

    if (utils$8.isHelper(mustache)) {
      prepareHash(this, mustache.hash);
      prepareParams(this, mustache.params);
      preparePath(this, mustache.path);
      opcode = 'printInlineHook';
    } else {
      preparePath(this, mustache.path);
      opcode = 'printContentHook';
    }

    var morphNum = this.morphNum++;
    var start = this.currentDOMChildIndex;
    var end = this.currentDOMChildIndex;
    this.morphs.push([morphNum, this.paths.slice(), start, end, mustache.escaped]);

    this.opcode(opcode, meta(mustache));
  };

  function meta(node) {
    var loc = node.loc;
    if (!loc) {
      return [];
    }

    var source = loc.source;
    var start = loc.start;
    var end = loc.end;

    return ['loc', [source || null, [start.line, start.column], [end.line, end.column]]];
  }

  HydrationOpcodeCompiler.prototype.block = function (block, childIndex, childCount) {
    this.pushMorphPlaceholderNode(childIndex, childCount);

    prepareHash(this, block.hash);
    prepareParams(this, block.params);
    preparePath(this, block.path);

    var morphNum = this.morphNum++;
    var start = this.currentDOMChildIndex;
    var end = this.currentDOMChildIndex;
    this.morphs.push([morphNum, this.paths.slice(), start, end, true]);

    var templateId = this.templateId++;
    var inverseId = block.inverse === null ? null : this.templateId++;

    this.opcode('printBlockHook', templateId, inverseId, meta(block));
  };

  HydrationOpcodeCompiler.prototype.component = function (component, childIndex, childCount) {
    this.pushMorphPlaceholderNode(childIndex, childCount, component.isStatic);

    var program = component.program || {};
    var blockParams = program.blockParams || [];

    var attrs = component.attributes;
    for (var i = attrs.length - 1; i >= 0; i--) {
      var name = attrs[i].name;
      var value = attrs[i].value;

      // TODO: Introduce context specific AST nodes to avoid switching here.
      if (value.type === 'TextNode') {
        this.opcode('pushLiteral', value.chars);
      } else if (value.type === 'MustacheStatement') {
        this.accept(utils$8.unwrapMustache(value));
      } else if (value.type === 'ConcatStatement') {
        prepareParams(this, value.parts);
        this.opcode('pushConcatHook', this.morphNum);
      }

      this.opcode('pushLiteral', name);
    }

    var morphNum = this.morphNum++;
    var start = this.currentDOMChildIndex;
    var end = this.currentDOMChildIndex;
    this.morphs.push([morphNum, this.paths.slice(), start, end, true]);

    this.opcode('prepareObject', attrs.length);
    this.opcode('pushLiteral', component.tag);
    this.opcode('printComponentHook', this.templateId++, blockParams.length, meta(component));
  };

  HydrationOpcodeCompiler.prototype.attribute = function (attr) {
    var value = attr.value;
    var escaped = true;
    var namespace = htmlbarsUtil.getAttrNamespace(attr.name);

    // TODO: Introduce context specific AST nodes to avoid switching here.
    if (value.type === 'TextNode') {
      return;
    } else if (value.type === 'MustacheStatement') {
      escaped = value.escaped;
      this.accept(utils$8.unwrapMustache(value));
    } else if (value.type === 'ConcatStatement') {
      prepareParams(this, value.parts);
      this.opcode('pushConcatHook', this.morphNum);
    }

    this.opcode('pushLiteral', attr.name);

    var attrMorphNum = this.morphNum++;

    if (this.element !== null) {
      shareElement(this);
    }

    this.opcode('createAttrMorph', attrMorphNum, this.elementNum, attr.name, escaped, namespace);
    this.opcode('printAttributeHook');
  };

  HydrationOpcodeCompiler.prototype.elementModifier = function (modifier) {
    prepareHash(this, modifier.hash);
    prepareParams(this, modifier.params);
    preparePath(this, modifier.path);

    // If we have a helper in a node, and this element has not been cached, cache it
    if (this.element !== null) {
      shareElement(this);
    }

    publishElementMorph(this);
    this.opcode('printElementHook', meta(modifier));
  };

  HydrationOpcodeCompiler.prototype.pushMorphPlaceholderNode = function (childIndex, childCount, skipBoundaryNodes) {
    if (!skipBoundaryNodes) {
      if (this.paths.length === 0) {
        if (childIndex === 0) {
          this.opcode('openBoundary');
        }
        if (childIndex === childCount - 1) {
          this.opcode('closeBoundary');
        }
      }
    }

    this.comment();
  };

  HydrationOpcodeCompiler.prototype.MustacheStatement = function (mustache) {
    prepareHash(this, mustache.hash);
    prepareParams(this, mustache.params);
    preparePath(this, mustache.path);
    this.opcode('pushSexprHook', meta(mustache));
  };

  HydrationOpcodeCompiler.prototype.SubExpression = function (sexpr) {
    prepareHash(this, sexpr.hash);
    prepareParams(this, sexpr.params);
    preparePath(this, sexpr.path);
    this.opcode('pushSexprHook', meta(sexpr));
  };

  HydrationOpcodeCompiler.prototype.PathExpression = function (path) {
    this.opcode('pushGetHook', path.original, meta(path));
  };

  HydrationOpcodeCompiler.prototype.StringLiteral = function (node) {
    this.opcode('pushLiteral', node.value);
  };

  HydrationOpcodeCompiler.prototype.BooleanLiteral = function (node) {
    this.opcode('pushLiteral', node.value);
  };

  HydrationOpcodeCompiler.prototype.NumberLiteral = function (node) {
    this.opcode('pushLiteral', node.value);
  };

  HydrationOpcodeCompiler.prototype.UndefinedLiteral = function (node) {
    this.opcode('pushLiteral', node.value);
  };

  HydrationOpcodeCompiler.prototype.NullLiteral = function (node) {
    this.opcode('pushLiteral', node.value);
  };

  function preparePath(compiler, path) {
    compiler.opcode('pushLiteral', path.original);
  }

  function prepareParams(compiler, params) {
    for (var i = params.length - 1; i >= 0; i--) {
      var param = params[i];
      compiler[param.type](param);
    }

    compiler.opcode('prepareArray', params.length);
  }

  function prepareHash(compiler, hash) {
    var pairs = hash.pairs;

    for (var i = pairs.length - 1; i >= 0; i--) {
      var key = pairs[i].key;
      var value = pairs[i].value;

      compiler[value.type](value);
      compiler.opcode('pushLiteral', key);
    }

    compiler.opcode('prepareObject', pairs.length);
  }

  function shareElement(compiler) {
    compiler.opcode('shareElement', ++compiler.elementNum);
    compiler.element = null; // Set element to null so we don't cache it twice
  }

  function publishElementMorph(compiler) {
    var morphNum = compiler.morphNum++;
    compiler.opcode('createElementMorph', morphNum, compiler.elementNum);
  }

  function distributeMorphs(morphs, opcodes) {
    if (morphs.length === 0) {
      return;
    }

    // Splice morphs after the most recent shareParent/consumeParent.
    var o;
    for (o = opcodes.length - 1; o >= 0; --o) {
      var opcode = opcodes[o][0];
      if (opcode === 'shareElement' || opcode === 'consumeParent' || opcode === 'popParent') {
        break;
      }
    }

    var spliceArgs = [o + 1, 0];
    for (var i = 0; i < morphs.length; ++i) {
      spliceArgs.push(['createMorph', morphs[i].slice()]);
    }
    opcodes.splice.apply(opcodes, spliceArgs);
    morphs.length = 0;
  }
  module.exports = exports.default;

  });

  unwrapExports(hydrationOpcodeCompiler);

  var hydrationJavascriptCompiler = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;







  function HydrationJavaScriptCompiler() {
    this.stack = [];
    this.source = [];
    this.mustaches = [];
    this.parents = [['fragment']];
    this.parentCount = 0;
    this.morphs = [];
    this.fragmentProcessing = [];
    this.hooks = undefined;
  }

  exports.default = HydrationJavaScriptCompiler;

  var prototype = HydrationJavaScriptCompiler.prototype;

  prototype.compile = function (opcodes, options) {
    this.stack.length = 0;
    this.mustaches.length = 0;
    this.source.length = 0;
    this.parents.length = 1;
    this.parents[0] = ['fragment'];
    this.morphs.length = 0;
    this.fragmentProcessing.length = 0;
    this.parentCount = 0;
    this.indent = options && options.indent || "";
    this.hooks = {};
    this.hasOpenBoundary = false;
    this.hasCloseBoundary = false;
    this.statements = [];
    this.expressionStack = [];
    this.locals = [];
    this.hasOpenBoundary = false;
    this.hasCloseBoundary = false;

    utils$a.processOpcodes(this, opcodes);

    if (this.hasOpenBoundary) {
      this.source.unshift(this.indent + "  dom.insertBoundary(fragment, 0);\n");
    }

    if (this.hasCloseBoundary) {
      this.source.unshift(this.indent + "  dom.insertBoundary(fragment, null);\n");
    }

    var i, l;

    var indent = this.indent;

    var morphs;

    var result = {
      createMorphsProgram: '',
      hydrateMorphsProgram: '',
      fragmentProcessingProgram: '',
      statements: this.statements,
      locals: this.locals,
      hasMorphs: false
    };

    result.hydrateMorphsProgram = this.source.join('');

    if (this.morphs.length) {
      result.hasMorphs = true;
      morphs = indent + '  var morphs = new Array(' + this.morphs.length + ');\n';

      for (i = 0, l = this.morphs.length; i < l; ++i) {
        var morph = this.morphs[i];
        morphs += indent + '  morphs[' + i + '] = ' + morph + ';\n';
      }
    }

    if (this.fragmentProcessing.length) {
      var processing = "";
      for (i = 0, l = this.fragmentProcessing.length; i < l; ++i) {
        processing += this.indent + '  ' + this.fragmentProcessing[i] + '\n';
      }
      result.fragmentProcessingProgram = processing;
    }

    var createMorphsProgram;
    if (result.hasMorphs) {
      createMorphsProgram = 'function buildRenderNodes(dom, fragment, contextualElement) {\n' + result.fragmentProcessingProgram + morphs;

      if (this.hasOpenBoundary) {
        createMorphsProgram += indent + "  dom.insertBoundary(fragment, 0);\n";
      }

      if (this.hasCloseBoundary) {
        createMorphsProgram += indent + "  dom.insertBoundary(fragment, null);\n";
      }

      createMorphsProgram += indent + '  return morphs;\n' + indent + '}';
    } else {
      createMorphsProgram = 'function buildRenderNodes() { return []; }';
    }

    result.createMorphsProgram = createMorphsProgram;

    return result;
  };

  prototype.prepareArray = function (length) {
    var values = [];

    for (var i = 0; i < length; i++) {
      values.push(this.expressionStack.pop());
    }

    this.expressionStack.push(values);
  };

  prototype.prepareObject = function (size) {
    var pairs = [];

    for (var i = 0; i < size; i++) {
      pairs.push(this.expressionStack.pop(), this.expressionStack.pop());
    }

    this.expressionStack.push(pairs);
  };

  prototype.openBoundary = function () {
    this.hasOpenBoundary = true;
  };

  prototype.closeBoundary = function () {
    this.hasCloseBoundary = true;
  };

  prototype.pushLiteral = function (value) {
    this.expressionStack.push(value);
  };

  prototype.pushGetHook = function (path, meta) {
    this.expressionStack.push(templateUtils.buildStatement('get', path, meta));
  };

  prototype.pushSexprHook = function (meta) {
    var statement = templateUtils.buildStatement('subexpr', this.expressionStack.pop(), this.expressionStack.pop(), this.expressionStack.pop(), meta);

    this.expressionStack.push(statement);
  };

  prototype.pushConcatHook = function () {
    this.expressionStack.push(templateUtils.buildStatement('concat', this.expressionStack.pop()));
  };

  prototype.printSetHook = function (name) {
    this.locals.push(name);
  };

  prototype.printBlockHook = function (templateId, inverseId, meta) {
    this.pushStatement('block', this.expressionStack.pop(), // path
    this.expressionStack.pop(), // params
    this.expressionStack.pop(), // hash
    templateId, inverseId, meta);
  };

  prototype.printInlineHook = function (meta) {
    var path = this.expressionStack.pop();
    var params = this.expressionStack.pop();
    var hash = this.expressionStack.pop();

    this.pushStatement('inline', path, params, hash, meta);
  };

  prototype.printContentHook = function (meta) {
    this.pushStatement('content', this.expressionStack.pop(), meta);
  };

  prototype.printComponentHook = function (templateId) {
    this.pushStatement('component', this.expressionStack.pop(), // path
    this.expressionStack.pop(), // attrs
    templateId);
  };

  prototype.printAttributeHook = function () {
    this.pushStatement('attribute', this.expressionStack.pop(), // name
    this.expressionStack.pop() // value;
    );
  };

  prototype.printElementHook = function (meta) {
    this.pushStatement('element', this.expressionStack.pop(), // path
    this.expressionStack.pop(), // params
    this.expressionStack.pop(), // hash
    meta);
  };

  prototype.createMorph = function (morphNum, parentPath, startIndex, endIndex, escaped) {
    var isRoot = parentPath.length === 0;
    var parent = this.getParent();

    var morphMethod = escaped ? 'createMorphAt' : 'createUnsafeMorphAt';
    var morph = "dom." + morphMethod + "(" + parent + "," + (startIndex === null ? "-1" : startIndex) + "," + (endIndex === null ? "-1" : endIndex) + (isRoot ? ",contextualElement)" : ")");

    this.morphs[morphNum] = morph;
  };

  prototype.createAttrMorph = function (attrMorphNum, elementNum, name, escaped, namespace) {
    var morphMethod = escaped ? 'createAttrMorph' : 'createUnsafeAttrMorph';
    var morph = "dom." + morphMethod + "(element" + elementNum + ", '" + name + (namespace ? "', '" + namespace : '') + "')";
    this.morphs[attrMorphNum] = morph;
  };

  prototype.createElementMorph = function (morphNum, elementNum) {
    var morphMethod = 'createElementMorph';
    var morph = "dom." + morphMethod + "(element" + elementNum + ")";
    this.morphs[morphNum] = morph;
  };

  prototype.repairClonedNode = function (blankChildTextNodes, isElementChecked) {
    var parent = this.getParent(),
        processing = 'if (this.cachedFragment) { dom.repairClonedNode(' + parent + ',' + quoting.array(blankChildTextNodes) + (isElementChecked ? ',true' : '') + '); }';
    this.fragmentProcessing.push(processing);
  };

  prototype.shareElement = function (elementNum) {
    var elementNodesName = "element" + elementNum;
    this.fragmentProcessing.push('var ' + elementNodesName + ' = ' + this.getParent() + ';');
    this.parents[this.parents.length - 1] = [elementNodesName];
  };

  prototype.consumeParent = function (i) {
    var newParent = this.lastParent().slice();
    newParent.push(i);

    this.parents.push(newParent);
  };

  prototype.popParent = function () {
    this.parents.pop();
  };

  prototype.getParent = function () {
    var last = this.lastParent().slice();
    var frag = last.shift();

    if (!last.length) {
      return frag;
    }

    return 'dom.childAt(' + frag + ', [' + last.join(', ') + '])';
  };

  prototype.lastParent = function () {
    return this.parents[this.parents.length - 1];
  };

  prototype.pushStatement = function () {
    this.statements.push(templateUtils.buildStatement.apply(undefined, arguments));
  };
  module.exports = exports.default;

  });

  unwrapExports(hydrationJavascriptCompiler);

  var templateCompiler = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _fragmentOpcodeCompiler2 = _interopRequireDefault(fragmentOpcodeCompiler);



  var _fragmentJavascriptCompiler2 = _interopRequireDefault(fragmentJavascriptCompiler);



  var _hydrationOpcodeCompiler2 = _interopRequireDefault(hydrationOpcodeCompiler);



  var _hydrationJavascriptCompiler2 = _interopRequireDefault(hydrationJavascriptCompiler);



  var _templateVisitor2 = _interopRequireDefault(templateVisitor);







  function TemplateCompiler(options) {
    this.options = options || {};
    this.consumerBuildMeta = this.options.buildMeta || function () {};
    this.fragmentOpcodeCompiler = new _fragmentOpcodeCompiler2.default();
    this.fragmentCompiler = new _fragmentJavascriptCompiler2.default();
    this.hydrationOpcodeCompiler = new _hydrationOpcodeCompiler2.default();
    this.hydrationCompiler = new _hydrationJavascriptCompiler2.default();
    this.templates = [];
    this.childTemplates = [];
  }

  exports.default = TemplateCompiler;

  TemplateCompiler.prototype.compile = function (ast) {
    var templateVisitor$$1 = new _templateVisitor2.default();
    templateVisitor$$1.visit(ast);

    utils$a.processOpcodes(this, templateVisitor$$1.actions);

    return this.templates.pop();
  };

  TemplateCompiler.prototype.startProgram = function (program, childTemplateCount, blankChildTextNodes) {
    this.fragmentOpcodeCompiler.startProgram(program, childTemplateCount, blankChildTextNodes);
    this.hydrationOpcodeCompiler.startProgram(program, childTemplateCount, blankChildTextNodes);

    this.childTemplates.length = 0;
    while (childTemplateCount--) {
      this.childTemplates.push(this.templates.pop());
    }
  };

  TemplateCompiler.prototype.insertBoundary = function (first) {
    this.hydrationOpcodeCompiler.insertBoundary(first);
  };

  TemplateCompiler.prototype.getChildTemplateVars = function (indent) {
    var vars = '';
    if (this.childTemplates) {
      for (var i = 0; i < this.childTemplates.length; i++) {
        vars += indent + 'var child' + i + ' = ' + this.childTemplates[i] + ';\n';
      }
    }
    return vars;
  };

  TemplateCompiler.prototype.getHydrationHooks = function (indent, hooks) {
    var hookVars = [];
    for (var hook in hooks) {
      hookVars.push(hook + ' = hooks.' + hook);
    }

    if (hookVars.length > 0) {
      return indent + 'var hooks = env.hooks, ' + hookVars.join(', ') + ';\n';
    } else {
      return '';
    }
  };

  TemplateCompiler.prototype.endProgram = function (program, programDepth) {
    this.fragmentOpcodeCompiler.endProgram(program);
    this.hydrationOpcodeCompiler.endProgram(program);

    var indent = quoting.repeat("  ", programDepth);
    var options = {
      indent: indent + "    "
    };

    // function build(dom) { return fragment; }
    var fragmentProgram = this.fragmentCompiler.compile(this.fragmentOpcodeCompiler.opcodes, options);

    // function hydrate(fragment) { return mustaches; }
    var hydrationPrograms = this.hydrationCompiler.compile(this.hydrationOpcodeCompiler.opcodes, options);

    var blockParams = program.blockParams || [];
    if (blockParams.length > 0) ;

    var statements = arrayUtils.map(hydrationPrograms.statements, function (s) {
      return indent + '      ' + JSON.stringify(s);
    }).join(",\n");

    var locals = JSON.stringify(hydrationPrograms.locals);

    var templates = arrayUtils.map(this.childTemplates, function (_$$1, index) {
      return 'child' + index;
    }).join(', ');

    var template = '(function() {\n' + this.getChildTemplateVars(indent + '  ') + indent + '  return {\n' + this.buildMeta(indent + '    ', program) + indent + '    isEmpty: ' + (program.body.length ? 'false' : 'true') + ',\n' + indent + '    arity: ' + blockParams.length + ',\n' + indent + '    cachedFragment: null,\n' + indent + '    hasRendered: false,\n' + indent + '    buildFragment: ' + fragmentProgram + ',\n' + indent + '    buildRenderNodes: ' + hydrationPrograms.createMorphsProgram + ',\n' + indent + '    statements: [\n' + statements + '\n' + indent + '    ],\n' + indent + '    locals: ' + locals + ',\n' + indent + '    templates: [' + templates + ']\n' + indent + '  };\n' + indent + '}())';

    this.templates.push(template);
  };

  TemplateCompiler.prototype.buildMeta = function (indent, program) {
    var meta = this.consumerBuildMeta(program) || {};

    var head = indent + 'meta: ';
    var stringMeta = JSON.stringify(meta, null, 2).replace(/\n/g, '\n' + indent);
    var tail = ',\n';

    return head + stringMeta + tail;
  };

  TemplateCompiler.prototype.openElement = function (element, i, l, r, c, b) {
    this.fragmentOpcodeCompiler.openElement(element, i, l, r, c, b);
    this.hydrationOpcodeCompiler.openElement(element, i, l, r, c, b);
  };

  TemplateCompiler.prototype.closeElement = function (element, i, l, r) {
    this.fragmentOpcodeCompiler.closeElement(element, i, l, r);
    this.hydrationOpcodeCompiler.closeElement(element, i, l, r);
  };

  TemplateCompiler.prototype.component = function (component, i, l, s) {
    this.fragmentOpcodeCompiler.component(component, i, l, s);
    this.hydrationOpcodeCompiler.component(component, i, l, s);
  };

  TemplateCompiler.prototype.block = function (block, i, l, s) {
    this.fragmentOpcodeCompiler.block(block, i, l, s);
    this.hydrationOpcodeCompiler.block(block, i, l, s);
  };

  TemplateCompiler.prototype.text = function (string, i, l, r) {
    this.fragmentOpcodeCompiler.text(string, i, l, r);
    this.hydrationOpcodeCompiler.text(string, i, l, r);
  };

  TemplateCompiler.prototype.comment = function (string, i, l, r) {
    this.fragmentOpcodeCompiler.comment(string, i, l, r);
    this.hydrationOpcodeCompiler.comment(string, i, l, r);
  };

  TemplateCompiler.prototype.mustache = function (mustache, i, l, s) {
    this.fragmentOpcodeCompiler.mustache(mustache, i, l, s);
    this.hydrationOpcodeCompiler.mustache(mustache, i, l, s);
  };

  TemplateCompiler.prototype.setNamespace = function (namespace) {
    this.fragmentOpcodeCompiler.setNamespace(namespace);
  };
  module.exports = exports.default;

  });

  unwrapExports(templateCompiler);

  var compiler = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.compileSpec = compileSpec;
  exports.template = template;
  exports.compile = compile;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /*jshint evil:true*/





  var _templateCompiler2 = _interopRequireDefault(templateCompiler);





  var _htmlbarsRuntimeRender2 = _interopRequireDefault(render_1);

  /*
   * Compile a string into a template spec string. The template spec is a string
   * representation of a template. Usually, you would use compileSpec for
   * pre-compilation of a template on the server.
   *
   * Example usage:
   *
   *     var templateSpec = compileSpec("Howdy {{name}}");
   *     // This next step is basically what plain compile does
   *     var template = new Function("return " + templateSpec)();
   *
   * @method compileSpec
   * @param {String} string An HTMLBars template string
   * @return {TemplateSpec} A template spec string
   */

  function compileSpec(string, options) {
    var ast = parser$2.preprocess(string, options);
    var compiler = new _templateCompiler2.default(options);
    var program = compiler.compile(ast);
    return program;
  }

  /*
   * @method template
   * @param {TemplateSpec} templateSpec A precompiled template
   * @return {Template} A template spec string
   */

  function template(templateSpec) {
    return new Function("return " + templateSpec)();
  }

  /*
   * Compile a string into a template rendering function
   *
   * Example usage:
   *
   *     // Template is the hydration portion of the compiled template
   *     var template = compile("Howdy {{name}}");
   *
   *     // Template accepts three arguments:
   *     //
   *     //   1. A context object
   *     //   2. An env object
   *     //   3. A contextualElement (optional, document.body is the default)
   *     //
   *     // The env object *must* have at least these two properties:
   *     //
   *     //   1. `hooks` - Basic hooks for rendering a template
   *     //   2. `dom` - An instance of DOMHelper
   *     //
   *     import {hooks} from 'htmlbars-runtime';
   *     import {DOMHelper} from 'morph';
   *     var context = {name: 'whatever'},
   *         env = {hooks: hooks, dom: new DOMHelper()},
   *         contextualElement = document.body;
   *     var domFragment = template(context, env, contextualElement);
   *
   * @method compile
   * @param {String} string An HTMLBars template string
   * @param {Object} options A set of options to provide to the compiler
   * @return {Template} A function for rendering the template
   */

  function compile(string, options) {
    return hooks.wrap(template(compileSpec(string, options)), _htmlbarsRuntimeRender2.default);
  }

  });

  unwrapExports(compiler);
  var compiler_1 = compiler.compileSpec;
  var compiler_2 = compiler.template;
  var compiler_3 = compiler.compile;

  var htmlbarsCompiler = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;



  exports.compile = compiler.compile;
  exports.compileSpec = compiler.compileSpec;
  exports.template = compiler.template;

  });

  unwrapExports(htmlbarsCompiler);
  var htmlbarsCompiler_1 = htmlbarsCompiler.compile;
  var htmlbarsCompiler_2 = htmlbarsCompiler.compileSpec;
  var htmlbarsCompiler_3 = htmlbarsCompiler.template;

  function App () {
    return Application.getInstance();
  }

  /**
   * @module Api
   */
  var ApiError =
  /*#__PURE__*/
  function () {
    function ApiError(apiCall, xhrError) {
      _classCallCheck(this, ApiError);

      /**
       * @property api
       * @type {Api.ApiCall}
       */
      this.apiCall = apiCall;
      /**
       * @property xhrError
       * @type {jqXHR}
       */

      this.xhrError = xhrError;
    }

    _createClass(ApiError, [{
      key: "getStatusCode",
      value: function getStatusCode() {
        return this.xhrError.status;
      }
    }, {
      key: "getMessage",
      value: function getMessage() {
        // JSON body with message?
        if (this.xhrError.responseJSON && this.xhrError.responseJSON.message) {
          return this.xhrError.responseJSON.message;
        } // Text?


        if (this.xhrError.responseText) return this.xhrError.responseText; // Don't know

        return 'Unknown error';
      }
    }, {
      key: "getFormErrors",
      value: function getFormErrors() {
        // JSON body with message?
        if (this.xhrError.responseJSON && this.xhrError.responseJSON.errors) {
          // Get errors
          return this.xhrError.responseJSON.errors;
        }

        return {};
      }
    }, {
      key: "getStatus",
      value: function getStatus() {
        return this.xhrError.status;
      }
    }]);

    return ApiError;
  }();

  var ModelStore =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(ModelStore, _Obj);

    function ModelStore(modelName) {
      var _this;

      _classCallCheck(this, ModelStore);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelStore).call(this));
      _this.modelName = modelName;
      _this.records = {};
      return _this;
    }

    _createClass(ModelStore, [{
      key: "has",
      value: function has(id) {
        return this.records[id] !== undefined;
      }
    }, {
      key: "set",
      value: function set(id, model) {
        this.records[id] = model;
        return this;
      }
    }, {
      key: "get",
      value: function get(id) {
        return this.records[id] ? this.records[id] : null;
      }
    }, {
      key: "forget",
      value: function forget(id) {
        delete this.records[id];
        return this;
      }
    }]);

    return ModelStore;
  }(Obj);

  var _this3 = window;

  var Collection =
  /*#__PURE__*/
  function (_ObservableArray) {
    _inherits(Collection, _ObservableArray);

    function Collection() {
      var _this;

      var modelClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, Collection);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Collection).call(this));
      _this.modelClass = modelClass;
      _this.itemsById = {};
      _this.originalIds = [];
      _this.meta = {};
      _this.page = {};
      return _this;
    }

    _createClass(Collection, [{
      key: "knows",
      value: function knows(id) {
        if (ClassMap.isA(id, 'Model')) id = id.get('id');
        return this.itemsById[id] !== undefined;
      }
    }, {
      key: "setMetaData",
      value: function setMetaData(data) {
        this.meta = _.extend(this.meta, data);
        return this;
      }
    }, {
      key: "setPageInfo",
      value: function setPageInfo(currentPage, pageCount) {
        var recordsPerPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var totalRecordCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        // Basics
        this.page = {
          currentPage: currentPage,
          pageCount: pageCount,
          size: recordsPerPage,
          recordCount: totalRecordCount
        }; // Calculate current

        if (recordsPerPage) {
          this.page.from = (currentPage - 1) * recordsPerPage + 1;
          this.page.through = Math.min(totalRecordCount, currentPage * recordsPerPage);
        }
      }
    }, {
      key: "get",
      value: function get$$1(key) {
        // Page info?
        if (this.page && /^page\.(currentPage|pageCount|size|recordCount|through)$/.test(key)) {
          var _key$split = key.split(/\./),
              _key$split2 = _slicedToArray(_key$split, 2),
              k = _key$split2[1];

          return this.page[k];
        } // Basics


        return _get(_getPrototypeOf(Collection.prototype), "get", this).call(this, key);
      }
    }, {
      key: "addFromApi",
      value: function addFromApi(item) {
        // Add it
        this.add(item); // Store id as original id

        var id = item.get('id');

        if (id && !_.contains(this.originalIds, id)) {
          this.originalIds.push(id);
        }

        return this;
      }
    }, {
      key: "_add",
      value: function _add(value) {
        // Is value a model?
        if (!ClassMap.isA(value, 'Model')) {
          throw new TypeError('You cannot add non-Model values to a Collection');
        } // Studying?


        if (this.isStudyingModels) {
          value.study(this.modelStudyCallback);
        } // Not already in there?


        var modelId = value.get('id');

        if (!modelId || !this.itemsById[modelId]) {
          // Store it and add it
          this.items.push(value);

          if (modelId) {
            this.itemsById[modelId] = value;
          }
        }

        return this;
      }
    }, {
      key: "_delete",
      value: function _delete(value) {
        // Is value an id?
        if (typeof value === 'number' || typeof value === 'string') {
          value = this.itemsById[value];
          if (!value) return this;
        } // Is value a model?


        if (!ClassMap.isA(value, 'Model')) {
          throw new TypeError('You cannot delete non-Model values to a Collection');
        } // Basics


        _get(_getPrototypeOf(Collection.prototype), "_delete", this).call(this, value); // And from keyed array


        delete this.itemsById[value.get('id')];
        return this;
      }
    }, {
      key: "empty",
      value: function empty() {
        // Do the basics
        _get(_getPrototypeOf(Collection.prototype), "empty", this).call(this); // Clear ids


        this.itemsById = {};
        return this;
      }
    }, {
      key: "isDirty",
      value: function isDirty() {
        // Compare item id's
        var currentIds = _.map(this.items, function (item) {
          return item.get('id');
        });

        var newIds = _.difference(currentIds, this.originalIds);

        var removedIds = _.difference(this.originalIds, currentIds); // Are any of the id's different?


        return newIds.length > 0 || removedIds.length > 0;
      }
    }, {
      key: "hasDirtyChildren",
      value: function hasDirtyChildren() {
        //check children for dirty
        var dirtyChildren = _.filter(this.items, function (item) {
          return item.isDirty();
        });

        return dirtyChildren.length > 0;
      }
      /**
       * Create copy of collection and its items
       *
       * @method clone
       * @return {Collection}
       */

    }, {
      key: "clone",
      value: function clone(cacheMap) {
        //create cacheMap?
        if (!cacheMap) cacheMap = new Map(); //known in cache map? return it

        if (cacheMap.has(this)) return this; //create copy

        var c = this.constructor;
        var copy = new c(this.modelClass); //store in cacheMap1

        cacheMap.set(this, copy); //copy items

        _.each(this.items, function (item) {
          copy.items.push(item.clone(cacheMap));
        });

        return copy;
      }
    }, {
      key: "search",
      value: function search(query) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        // No models in me?
        if (this.items.length === 0) return new Collection(this.modelClass); // No fields defined?

        if (!fields) {
          // Try to get fields from definition
          var def = this.modelClass.definition;

          if (def) {
            // Get fields
            fields = def.getSearchFields();
          } // Still no field?


          if (!fields) {
            // Use all but id
            fields = _.without(_.keys(_.first(this.items).attributes), 'id');
          }
        } // Get words


        var words = query.split(/\s+/);
        var result = [];

        _.each(this.items, function (model) {
          // How many words are matched by the fields
          var wordsMatched = 0;
          var entireMatch = false;

          _.each(words, function (word) {
            // Not empty?
            if (!word) return; // Loop through fields

            _.each(fields, function (field) {
              // Entire match?
              var value = model.get(field);

              if (value && value === word) {
                entireMatch = true;
                wordsMatched++;
              } else {
                // Check if it contains me
                value = ('' + value).toLowerCase();
                var w = word.toLowerCase();
                var index = value.indexOf(w);
                if (index > -1) wordsMatched++;
              }
            });
          }); // Match?


          if (wordsMatched > 0) {
            result.push({
              wordsMatched: wordsMatched,
              entireMatch: entireMatch,
              model: model
            });
          }
        }); // Now sort it


        result.sort(function (a, b) {
          // Entire match same?
          if (a.entireMatch !== b.entireMatch) {
            // Entire match is better.
            return a.entireMatch ? -1 : 1;
          } // # words matched


          if (a.wordsMatched === b.wordsMatched) return 0;
          return a.wordsMatched > b.wordsMatched ? -1 : 1;
        }); // Check limit

        limit = limit ? Math.min(result.length, limit) : result.length; // Make collection

        var collectionResult = new Collection(this.modelClass);

        for (var q = 0; q < limit; q++) {
          collectionResult.items.push(result[q].model);
        }

        return collectionResult;
      }
    }, {
      key: "filter",
      value: function filter() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // Do the basics
        var items = _get(_getPrototypeOf(Collection.prototype), "filter", this).apply(this, args); // Did we receive an ObservableArray?


        if (items instanceof ObservableArray) {
          // Make collection
          var collectionResult = new Collection(this.modelClass);
          collectionResult.items = items.items;
          return collectionResult;
        } else {
          // Return items as they are
          return items;
        }
      }
    }, {
      key: "saveAll",
      value: function saveAll() {
        var _this2 = this;

        var saveOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var breakOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var saveOnlyDirtyModels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        // Create promise
        return new Promise(function (resolve, reject) {
          // Prepare queue
          var queue = _.filter(_this2.items, function (item) {
            return saveOnlyDirtyModels ? item.isDirty() : true;
          }); // Next


          var saveNext = function saveNext() {
            // Queue empty?
            if (queue.length === 0) {
              resolve();
              return;
            } // Save next


            var model = queue.shift();
            model.save(saveOptions).then(function () {
              saveNext();
            }, function (error) {
              // Break?
              if (breakOnError) {
                reject(error);
              } else {
                saveNext();
              }
            });
          }; // GO!


          saveNext();
        });
      }
    }]);

    return Collection;
  }(ObservableArray);

  Collection.fromArray = function (arr) {
    // Empty?
    if (arr.length === 0) return new Collection(); // Get class from first item

    var item = _.first(arr);

    if (!ClassMap.isA(item, 'Model')) throw new TypeError('The array needs to contain model instances'); // Create collection

    var coll = new Collection(item.constructor);
    coll.items = arr;
    return coll;
  };

  Collection.merge = function () {
    for (var _len2 = arguments.length, collections = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      collections[_key2] = arguments[_key2];
    }

    // Get all items
    collections = _.flatten(collections);

    var items = _.flatten(_.pluck(collections, 'items')); // Create new collection


    var result = new Collection();
    result.import(items, false);
    return result;
  };

  Collection.combine = function () {
    for (var _len3 = arguments.length, collections = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      collections[_key3] = arguments[_key3];
    }

    // Combine items by id
    collections = _.flatten(collections);

    var itemArrays = _.map(_.pluck(collections, 'items'), function (arr) {
      var items = {};

      _.each(arr, function (item) {
        items[item.get('id')] = item;
      });

      return items;
    });

    itemArrays.unshift({});

    var resultArray = _.extend.apply(_this3, itemArrays); // Create new collection


    var result = new Collection();
    result.import(resultArray, false);
    return result;
  };

  var HelperProxy =
  /*#__PURE__*/
  function () {
    function HelperProxy(name, helperFunction, context) {
      _classCallCheck(this, HelperProxy);

      this.name = name;
      this.callback = helperFunction;
      this.context = context;
    }

    _createClass(HelperProxy, [{
      key: "setArguments",
      value: function setArguments() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.arguments = args;
      }
    }, {
      key: "invoke",
      value: function invoke() {
        // Do it
        return this.callback.apply(this.context, this.arguments);
      }
    }]);

    return HelperProxy;
  }();

  var _uid = 0;
  /**
   * @module Helpers
   */

  var Utils = {
    /**
     * @class Helpers.Utils
     * @static
     */
    getValue: function getValue(obj) {
      if (obj instanceof HelperProxy) return obj.invoke();

      if (obj instanceof Binding || obj instanceof ComputedProperty || obj instanceof Reference) {
        return obj.getValue();
      }

      return obj;
    },

    /**
     * @method each
     * @static
     * 
     * @param  {Object}   obj      
     * @param  {Function} callback 
     * @param  {Object}   context  
     */
    each: function each(obj, callback, context) {
      // Map?
      if (obj instanceof Map) {
        obj.forEach(function (value, key) {
          callback.apply(context, [value, key]);
        });
        return;
      } else if (obj instanceof Observable) {
        obj = obj.attributes;
      } else if (obj instanceof ObservableArray) {
        obj = obj.items;
      }

      return _.each(obj, callback, context);
    },

    /**
     * @method reverseEach
     * @static
     * 
     * @param  {Object}   obj      
     * @param  {Function} callback 
     * @param  {Object}   context  
     */
    reverseEach: function reverseEach(obj, callback, context) {
      // Map?
      if (obj instanceof Map) {
        obj.forEach(function (value, key) {
          callback.apply(context, [value, key]);
        });
        return;
      } else if (obj instanceof Observable) {
        obj = obj.attributes;
      } else if (obj instanceof ObservableArray) {
        obj = obj.items;
      }

      for (var i = obj.length - 1; i >= 0; i--) {
        callback.apply(context, [obj[i]]);
      }
    },

    /**
     * @method map
     * @static
     * 
     * @param  {Object}   obj      
     * @param  {Function} callback 
     * @param  {Object}   context  
     */
    map: function map(obj, callback, context) {
      if (obj instanceof Observable) {
        obj = obj.attributes;
      } else if (obj instanceof ObservableArray) {
        obj = obj.items;
      }

      return _.map(obj, callback, context);
    },

    /**
     * Determine whether given value is truthlike
     * 
     * @method isTruthlike
     * @static
     *	 
     * @param  {mixed} value 
     * @return {boolean}
     */
    isTruthlike: function isTruthlike(value) {
      // Null/undef
      if (value === null || value === undefined) return false; // Bool?

      if (value === true || value === 'true') return true;
      if (value === false || value === 'false') return false; // 0 and 1?

      if (value === 1 || value === '1') return true;
      if (value === 0 || value === '0') return false; // Array?

      if (Array.isArray(value) || value instanceof ObservableArray) {
        return value.length > 0;
      } // Object


      if (_typeof(value) === 'object' && value.contructor === Object) {
        return _.key(value).length > 0;
      } // Do it natively


      return !!value;
    },
    areEqual: function areEqual(value1, value2) {
      // Identical?
      if (value1 === value2) return true; // Is one or both a moment?

      if (moment.isMoment(value1) && value2 !== undefined) return value1.isSame(value2);
      if (moment.isMoment(value2) && value1 !== undefined) return value2.isSame(value1); // One of them null or undefined?

      if (value1 === undefined || value2 === undefined || value1 === null || value2 === null) return false;
      if (_typeof(value1) !== 'object' || _typeof(value2) !== 'object') return false;
      if (value1 instanceof Array || value2 instanceof Array) return false; // Same id?

      if (this.uidFor(value1) === this.uidFor(value2)) return true;
      return false;
    },

    /**
     * Get a unique string identifier for given object or variable. For objects
     * this identifier will remain the same, making it useful for comparing objects.
     *
     * @method uidFor
     * @param  {mixed} obj 
     * @return {string}
     */
    uidFor: function uidFor(obj) {
      // Chicken model?
      if (obj.__getUid && typeof obj.__getUid === 'function') {
        return obj.__getUid();
      } // Already set for this object?


      if (obj && obj.__chickenUID !== undefined) return obj.__chickenUID; // Non-existing things?

      if (obj === undefined) return '(undefined)';
      if (obj === null) return '(null)'; // Check what type the value is

      var type = _typeof(obj);

      switch (type) {
        case 'number':
        case 'string':
          return type + ':' + obj;

        case 'boolean':
          return obj ? '(true)' : '(false)';
      } // Is it a standard object?


      if (obj === Object) return '(Object)';
      if (obj === Array) return '(Array)'; // Store the id on the obj

      var uid = Utils.uid();
      obj.__chickenUID = uid;
      return uid;
    },
    uid: function uid() {
      return '*' + ++_uid + '*';
    },

    /**
     * encode an object to a query string
     * @param  {Object}  obj  	the object to convert
     * @param  {Boolean} deep 	use deep-converion, this adds subkeys and array values
     * @return {String}       	the query string
     */
    encodeQueryString: function encodeQueryString(obj) {
      var _this = this;

      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (deep) {
        //init str
        var propStrings = [],
            str = ''; //convert to simple object

        if (obj instanceof Observable) obj = obj.toObject(); //base url

        if (obj.baseUrl) str += obj.baseUrl + '?'; //add props

        _.each(_.keys(obj), function (key) {
          //skip baseUrl
          if (key == 'baseUrl') return;
          propStrings = _this._addPropString(propStrings, key, obj[key]);
        }); //add to querystring


        str += propStrings.join('&');
        return str;
      } else {
        return queryString.stringify(obj);
      }
    },

    /**
     * Add an url property from key and value. 
     * Arrays are joined with commas,
     * Objects properties will be processed again, and the key will be sub-keyed,
     * String values will remain unchanged
     * 
     * @param {Array} propStrings 	The list of strings to add the value to
     * @param {String} key         	The variable key
     * @param {mixed} value       	The variable value
     */
    _addPropString: function _addPropString(propStrings, key, value) {
      var _this2 = this;

      if (value instanceof Array) {
        //array
        propStrings.push(key + '=' + value.join(','));
      } else if (value instanceof Object) {
        //object
        _.each(_.keys(value), function (subKey) {
          propStrings = _this2._addPropString(propStrings, key + '[' + subKey + ']', value[subKey]);
        });
      } else {
        propStrings.push(key + '=' + value);
      }

      return propStrings;
    },

    /**
     * decode a query string to an object
     * @param  {string}  str  	the query string
     * @param  {Boolean} deep 	use deep-conversion, sub-keys and array values will be converted to objects and arrays
     * @return {Object}       	the decoded values
     */
    decodeQueryString: function decodeQueryString(str) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (deep) {
        //init object
        var props,
            resultObject = {}; //get all properties

        if (str.indexOf('?') !== -1) {
          resultObject['baseUrl'] = str.split('?')[0];
          props = str.split('?')[1].split('&');
        } else {
          props = str.split('&');
        } //convert each property to object


        _.each(props, function (prop) {
          //split value and key
          prop = prop.split('=');
          var key = prop[0];
          var value = prop[1]; //value				

          value = value.split(',');
          value = value.length == 1 ? value[0] : value; //key array

          if (key.indexOf('[') !== -1 && key.indexOf(']') !== -1) {
            key = key.split('[');
            var baseKey = key[0];
            var subKey = key[1].substring(0, key[1].length - 1);

            if (!(resultObject[baseKey] instanceof Object)) {
              resultObject[baseKey] = {};
            }

            resultObject[baseKey][subKey] = value;
          } else {
            resultObject[key] = value;
          }
        });

        return resultObject;
      } else {
        return queryString.parse(str);
      }
    }
  };
  ClassMap.register('Utils', Utils);

  /**
   * @module Data
   */

  var Model =
  /*#__PURE__*/
  function (_Observable) {
    _inherits(Model, _Observable);

    /**
     * The Model class is an extension of Observable, and is used
     * to hold data that is received from an Api, and save that data, etc.
     * 
     * @class Data.Model
     *
     * @constructor
     * @param  {Object}  initValues           
     * @param  {Boolean} convertToObservables 
     */
    function Model() {
      var _this;

      var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, Model);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Model).call(this, initValues, convertToObservables));
      /**
       * The original values as received from the Api
       * 
       * @property originalValues
       * @type {object}
       */

      _this.originalValues = {};

      _.each(initValues, function (value, key) {
        _this.originalValues[key] = _this.uncastValue(key, value);
      });
      /**
       * Values of relationships, keyed by the relationshipname
       * 
       * @property related
       * @type {Object}
       */


      _this.related = _this.related || {};
      /**
       * The watchable current state of this model. This
       * contains attributes for 'busy', 'saving', and 'dirty'.
       *
       * You can use this in a view to update the view according
       * to the model state, using the 'is' property e.g.:
       *
       * 	{{#if author.is.busy}}
       * 		Please wait a moment...
       * 	{{/if}}
       * 
       * @property state
       * @type {Observable}
       */

      _this.state = new Observable({
        busy: false,
        saving: false,
        dirty: false,
        deleting: false,
        deleted: false,
        new: !_this.get('id')
      });

      _this.state.study(function () {
        _this._scheduleAttributeChanged('is');
      });

      _this.metaAttributes = new Observable({});
      /**
       * list of studied relationships
       * @type {Object}
       */

      _this._relationshipStudies = {}; // Check computed!

      if (_this.constructor.definition) {
        // Apply to model
        _this.constructor.definition.initializeModel(_assertThisInitialized(_assertThisInitialized(_this)));
      } // A initialize method on the model?


      if (typeof _this.initialize === 'function') {
        _this.initialize();
      }

      return _this;
    } ///////////
    // State //
    ///////////

    /**
     * Get the model state. This method is used to make the state
     * available in views.
     * 
     * @method getIs
     * @return {Observable}
     */


    _createClass(Model, [{
      key: "getIs",
      value: function getIs() {
        return this.state;
      }
    }, {
      key: "getMeta",
      value: function getMeta() {
        return this.metaAttributes;
      }
      /**
       * @method isBusy
       * @return {Boolean} 
       */

    }, {
      key: "isBusy",
      value: function isBusy() {
        return this.state.get('busy');
      } /////////////////////////
      // Information methods //
      /////////////////////////

      /**
       * Checks whether this model is new or has already been saved. This
       * is determined by checking whether the 'id' is set.
       * 
       * @method isNew
       * @return {Boolean} 
       */

    }, {
      key: "isNew",
      value: function isNew() {
        return !this.get('id');
      } /////////////////
      // Get and set //
      /////////////////

    }, {
      key: "__get",
      value: function __get(key) {
        // Is there a getter?
        var methodName = 'get' + inflection.camelize(key);

        if (this[methodName] && typeof this[methodName] === 'function') {
          return this[methodName].apply(this, [this.attributes[key]]);
        } // Is it a relationship that was not yet loaded


        var relationship = this.getRelationship(key);
        if (!this.related) this.related = {};

        if (relationship && !this.related[key]) {
          this.related[key] = relationship.getInitValue();
        } // Is it a relationship?


        if (this.related && this.related[key]) return this.related[key]; // Nothing special. Do basics

        return _get(_getPrototypeOf(Model.prototype), "__get", this).call(this, key);
      }
    }, {
      key: "__set",
      value: function __set(key, value) {
        var _this2 = this;

        // Is there a setter?
        var methodName = 'set' + inflection.camelize(key);

        if (methodName !== 'setRelatedModel' && this[methodName] && typeof this[methodName] === 'function' && !(value instanceof ComputedProperty)) {
          return this[methodName].apply(this, [value]);
        } // Is it a relationship that was not yet loaded


        if (!this.related) this.related = {};
        var relationship = this.getRelationship(key);

        if (relationship) {
          // Many?
          if (relationship.usesCollection()) {
            // Already initialized?
            if (this.related[key]) this.related[key].empty(); // Initialize relationship

            if (!(value instanceof Collection)) throw new TypeError("The '".concat(key, "' relationship expects a Collection as value"));
            value.each(function (model) {
              _this2.addRelatedModel(key, model);
            });
          } else {
            // Set the model
            this.setRelatedModel(key, value);
          }
        } else {
          // Cast if necessary
          value = this.castValue(key, value); // Continue with it

          _get(_getPrototypeOf(Model.prototype), "__set", this).call(this, key, value);
        } // Is dirty?


        if (this.state) {
          this._scheduleUpdateDirty();
        }

        return this;
      }
      /**
       * Override Observable.observe
       *
       * Check if model has HasMany, HasManyTrough or BelongToMany relations it can study
       */

    }, {
      key: "observe",
      value: function observe(keyOrKeys, callback) {
        var _this3 = this;

        //can have multiple keys, call function for each key
        if (Array.isArray(keyOrKeys)) {
          _.each(keyOrKeys, function (key) {
            _this3.observe(key, callback);
          });

          return this;
        }

        var key = keyOrKeys; //Study relation?

        var rel = this.getRelationship(key);

        if (rel && rel.usesCollection()) {
          if (this._relationshipStudies[key] === undefined) {
            this._relationshipStudies[key] = function () {
              _this3._scheduleAttributeChanged(key);
            };

            this.get(key).study(this._relationshipStudies[key]);
          }
        } //super


        return _get(_getPrototypeOf(Model.prototype), "observe", this).call(this, keyOrKeys, callback);
      }
      /**
       * Get a value for use in the API, meaning it is in
       * database format. For example, dates will be converted back
       * from Moment instances into strings.
       *
       * @method getForApi
       * @param  {string} key 
       * @return {mixed} 
       */

    }, {
      key: "getForApi",
      value: function getForApi(key) {
        // Get value
        var value = this.uncastValue(key, this.attributes[key]);
        return value;
      }
      /**
       * Cast given value according to the AttributeDefinition for given
       * key. For example, if you pass a string containing a date as value,
       * for a Date key, you will receive a Moment instance.
       * 
       * @method castValue
       * @param  {string} key   
       * @param  {Mixed} value 
       * @return {Mixed}       
       */

    }, {
      key: "castValue",
      value: function castValue(key, value) {
        // Do we need to cast it?
        var attributeDefinition = this.getAttributeDefinition(key);

        if (attributeDefinition) {
          value = attributeDefinition.cast(value);
        }

        return value;
      }
      /**
       * Uncast given value according to the AttributeDefinition for given key.
       *
       * @method uncastValue
       * @param  {string} key   
       * @param  {Mixed} value 
       * @return {Mixed}       
       */

    }, {
      key: "uncastValue",
      value: function uncastValue(key, value) {
        // Do we need to uncast it?
        var attributeDefinition = this.getAttributeDefinition(key);

        if (attributeDefinition) {
          value = attributeDefinition.uncast(value);
        }

        return value;
      }
      /**
       * Get the value of a translation
       *
       * @method translation
       * @param  {string} key  
       * @param  {string} language     (Default = null) When null, the application language will be used
       * @return {string|null}
       */

    }, {
      key: "translation",
      value: function translation(key) {
        var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        // Language given?
        if (!language) language = App().i18n.language; // Retrieve value

        var v = this.get(key);
        if (v instanceof Observable) v = v.toObject();
        if (!v || !(v instanceof Object) || !v[language]) return null;
        return v[language];
      } /////////////////////////
      // Api related methods //
      /////////////////////////

      /**
       * Set attribute values that were retrieved from the API, meaning
       * they will not be seen as dirty, and will overwrite the original values
       * of the model. 
       *
       * @method setAttributesFromApi
       * @param {Object} attributes
       * @chainable
       */

    }, {
      key: "setAttributesFromApi",
      value: function setAttributesFromApi(attributes) {
        var _this4 = this;

        // Loop through them and set values that are not dirty
        _.each(attributes, function (value, key) {
          // Dirty?
          if (_this4.isDirty(key)) return; // Set it, and see this as a non-dirty value

          _this4.setAttribute(key, value);

          _this4.originalValues[key] = _this4.uncastValue(key, _this4.attributes[key]);
        });

        return this;
      }
      /**
       * Get attribute values for use in the API.
       *
       * @method getAttributesForApi
       * @param  {Boolean} [onlyDirty=true]  When true, only attributes that have been changed will be retrieved
       * @param  {Boolean} [modelIsDynamic=false]	 When true, attributes that are not in the model definition are also passed along. This overrides the model definition's 'dynamic' value
       * @return {Object}      A hash containing attribute key/values
       */

    }, {
      key: "getAttributesForApi",
      value: function getAttributesForApi() {
        var _this5 = this;

        var onlyDirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        // Which attributes to use?
        var attr = onlyDirty ? this.getDirty() : _.defaults({}, this.attributes); // Check model definition

        var modelDefinition = this.getDefinition();

        if (modelDefinition) {
          // Use only attributes in the model definition
          var modelAttr = _.pick(attr, function (value, key) {
            // Dynamic?
            if (!modelDefinition.isDynamic) {
              // Has property?
              if (!(modelDefinition.hasAttribute(key) || modelDefinition.getRelationshipByLocalKey(key) !== undefined)) return false;
            } // Is the value computed?


            if (value instanceof ComputedProperty) return false; // OK.

            return true;
          }); // Now uncast the values


          attr = _.mapObject(modelAttr, function (value, key) {
            // Get the actual value
            value = Utils.getValue(value); // Uncast it for DB usage

            var definition = _this5.getAttributeDefinition(key);

            if (definition) value = definition.uncast(value);
            return value;
          }); // Not only dirty?

          if (!onlyDirty && !modelDefinition.isDynamic) {
            // Also add defined attributes that were not set in the model (by default value)
            var missingKeys = _.difference(modelDefinition.getApiAttributeNames(), _.keys(attr));

            _.each(missingKeys, function (key) {
              // Is it a local relationship?
              if (modelDefinition.getRelationshipByLocalKey(key) !== undefined) return; // Add default value

              var def = _this5.getAttributeDefinition(key);

              var defaultValue = def.getDefaultValue();
              if (defaultValue) attr[key] = def.uncast(def.getDefaultValue());
            });
          } // Remove hidden attributes


          attr = _.omit(attr, modelDefinition.getHiddenAttributeNames());
          return attr;
        } else {
          // Loop attributes
          var convertedAttr = {};

          _.each(attr, function (value, key) {
            // Is the value computed?
            if (value instanceof ComputedProperty) return; // Get the actual value

            value = Utils.getValue(value); // Is it a moment?

            if (moment.isMoment(value)) {
              // Make it ISO 8601
              value = value.format('YYYY-MM-DD HH:mm:ss');
            } // Is it an array or model?
            else if (value instanceof ObservableArray) {
                value = JSON.stringify(value.toArray());
              } else if (value instanceof Model) {
                value = JSON.stringify(value.getAttributesForApi(onlyDirty));
              } // Set it


            convertedAttr[key] = value;
          }); // Switch


          attr = convertedAttr;
        }

        delete attr.id;
        return attr;
      }
    }, {
      key: "setMetaAttributes",
      value: function setMetaAttributes(attributes) {
        this.metaAttributes.import(attributes);
        return this;
      }
      /**
       * Get the Api instance that is used by this model
       *
       * @method getApi
       * @return {Api.Api}
       */

    }, {
      key: "getApi",
      value: function getApi() {
        // Check model definition
        var apiName = this.getDefinition() ? this.getDefinition().api : null;
        return App().apis[apiName];
      }
      /**
       * Get the uri for this model, that can be used in an API call
       *
       * @method getApiUri
       * @return {string}
       */

    }, {
      key: "getApiUri",
      value: function getApiUri() {
        // Check definition
        var def = this.getDefinition();
        if (!def) throw new Error('Cannot guess the ApiUri for a model that has no ModelDefinition'); // Get api uri

        return def.getApiUri(this.get('id'));
      }
      /**
       * Save the model to the Api. 
       *
       * Possible options are:
       * 
       * **uri** (string)
       * A custom uri to use instead of the model's default uri
       * 
       * **includeRelated** (boolean)
       * _(Default: true)_ 
       * Whether to included modifications in the relationships 
       *
       * **includeRelatedData** (boolean)	
       * _(Default: false)_ 
       * Whether to embed relationship data into the request. Note: this is not following JSONAPI specifications.
       *
       * @method save
       * @param  {Object} [options={}]	Optional options hash
       * @return {Promise} The promise returned by the ApiCall.execute method
       */

    }, {
      key: "save",
      value: function save() {
        var _this6 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // Make settings
        var settings = $.extend({
          uri: null,
          includeRelated: true,
          includeRelatedData: false // False, true or an array of relationship-names to save

        }, options); // Busy?

        if (this.isBusy()) throw new Error('Model has not completed its last action');
        this.state.set('busy', true);
        this.state.set('saving', true); // Create the call

        if (!settings.uri) settings.uri = this.getApiUri();
        var apiCall = this.getApi().saveModel(this, settings); // Handle it.

        apiCall.getPromise('complete').then(function (result) {
          // Check result
          if (result instanceof Model) {
            // Use id for me.
            if (!_this6.get('id')) {
              _this6.set('id', result.get('id'));

              _this6.state.set('new', false);
            }
          } // No longer dirty!


          _this6.state.set('dirty', false);

          _this6.resetDirty(); // No longer busy


          _this6.state.set('busy', false);

          _this6.state.set('saving', false); // Trigger.


          _this6.trigger('save', apiCall);
        }, function () {
          // No longer busy
          _this6.state.set('busy', false);

          _this6.state.set('saving', false);

          _this6.trigger('error', apiCall);
        }); // Done.

        return apiCall.execute();
      }
      /**
       * Delete the model from the Api. 
       *
       * Possible options are:
       * 
       * **uri** (string)
       * A custom uri to use instead of the model's default uri
       *
       * @method delete
       * @param  {Object} [options={}]	Optional options hash
       * @return {Promise} The promise returned by the ApiCall.execute method
       */

    }, {
      key: "delete",
      value: function _delete() {
        var _this7 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // Make settings
        var settings = $.extend({
          uri: null,
          modelIsDynamic: false
        }, options); // Busy?

        if (this.isBusy()) throw new Error('Model has not completed its last action');
        this.state.set('busy', true);
        this.state.set('deleting', true); // Create the call

        if (!settings.uri) settings.uri = this.getApiUri();
        var apiCall = this.getApi().deleteModel(this, settings); // Handle it.

        apiCall.getPromise('complete').then(function () {
          // No longer busy
          _this7.state.set('busy', false);

          _this7.state.set('saving', false);

          _this7.state.set('deleted', true);

          _this7.trigger('delete'); //remove model from the store


          Model.deleteFromStore(_this7.getModelName(), _this7.get('id'));
        }, function () {
          // No longer busy
          _this7.state.set('busy', false);

          _this7.state.set('saving', false);

          _this7.trigger('error', apiCall);
        }); // Done.

        return apiCall.execute();
      } ///////////////////
      // Handy methods //
      ///////////////////

    }, {
      key: "toObject",
      value: function toObject() {
        var includedUids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        // Get basics
        var obj = _get(_getPrototypeOf(Model.prototype), "toObject", this).call(this, includedUids); // Add relationships


        _.each(this.related, function (item, key) {
          // Observable?
          if (Observable.isObservable(item)) {
            // Array?
            if (item instanceof Observable) {
              item = item.toObject(includedUids);
            } else {
              item = item.toArray(includedUids);
            }
          }

          obj[key] = item;
        });

        return obj;
      }
      /**
       * Restore all attributes to their original values
       * 
       * @method reset
       * @chainable
       */

    }, {
      key: "reset",
      value: function reset() {
        var _this8 = this;

        _.each(this.originalValues, function (value, key) {
          _this8.set(key, value);
        });

        return this;
      } //////////////////////////
      // Forms and validation //
      //////////////////////////

    }, {
      key: "getValidationRules",
      value: function getValidationRules() {
        var formKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
        // Check definition
        var def = this.getDefinition();

        if (def) {
          var rules = def.validationRules[formKey];
          return rules ? rules : null;
        } else {
          return null;
        }
      } ///////////////////////
      // Dirtying of model //
      ///////////////////////

      /**
       * @method getDirty
       * @return {Object} Key/value hash containing dirty attributes
       */

    }, {
      key: "getDirty",
      value: function getDirty() {
        var _this9 = this;

        // Get dirty values
        var dirty = {};

        _.each(this.attributes, function (value, key) {
          // Not in original or changed?
          if (_this9.isDirty(key)) {
            // Then it's dirty
            dirty[key] = value;
          }
        });

        return dirty;
      }
      /**
       * Determine whether the model, or a specific attribute is dirty
       * (meaning it has been changed since initialization or Api update)
       * 
       * @method isDirty
       * @param  {string}  [key]    Optional attribute name
       * @return {Boolean}     
       */

    }, {
      key: "isDirty",
      value: function isDirty() {
        var _this10 = this;

        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        // Specific key?
        if (key) {
          // Get value
          var newValue = this.attributes[key];
          var oldValue = this.originalValues[key]; // None at all?

          if (newValue === undefined) return false; // Is the value computed?

          if (newValue instanceof ComputedProperty) return false; // Is it new?

          if (newValue !== undefined && oldValue === undefined) return true; // Cast original value for comparison with new value

          oldValue = this.castValue(key, oldValue); // Has it changed

          return !Utils.areEqual(oldValue, newValue);
        } else {
          // Loop to see if anything is dirty
          for (var _key in this.attributes) {
            if (this.isDirty(_key)) return true;
          } //check relationships with touchLocalOnUpdate


          var dirtyRelation = _.find(this.related, function (rel, key) {
            if (_this10.getRelationship(key) && _this10.getRelationship(key).touchLocalOnUpdate) {
              return rel.isDirty();
            }

            return false;
          });

          return !!dirtyRelation;
        }
      }
      /**
       * Reset dirtyness of model, for given key of for whole model
       *
       * @method resetDirty
       * @param  {string|array} [keys]  	Optional attribute name(s)
       * @chainable
       */

    }, {
      key: "resetDirty",
      value: function resetDirty() {
        var _this11 = this;

        var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        // Null?
        if (keys === null) keys = _.keys(this.attributes);
        if (typeof keys === 'string') keys = [keys]; // Specific key?

        _.each(keys, function (key) {
          _this11.originalValues[key] = _this11.uncastValue(key, _this11.attributes[key]);
        });

        return this;
      }
      /**
       * Check the current dirty state of the model and update
       * its status value.
       *
       * @method updateDirty
       * @chainable
       */

    }, {
      key: "updateDirty",
      value: function updateDirty() {
        var isDirty = this.isDirty();

        if (isDirty !== this.get('isDirty')) {
          this.state.set('dirty', this.isDirty());
        }

        return this;
      }
    }, {
      key: "_scheduleUpdateDirty",
      value: function _scheduleUpdateDirty() {
        var _this12 = this;

        // Already going?
        if (this._scheduleUpdateDirtyTimeout) return; // Wait a bit

        this._scheduleUpdateDirtyTimeout = setTimeout(function () {
          _this12.updateDirty();

          _this12._scheduleUpdateDirtyTimeout = null;
        }, Model.UpdateDirtyDelay);
      } ///////////////////
      // Relationships //
      ///////////////////

      /**
       * Set the given model as the value of a relationship
       * 
       * @method setRelatedModel
       * @param {string} relationshipName 
       * @param {Data.Model} relatedModel    
       * @chainable
       */

    }, {
      key: "setRelatedModel",
      value: function setRelatedModel(relationshipName, relatedModel) {
        // Get the relationship itself
        var relationship = this.getRelationship(relationshipName);
        if (!relationship) throw new Error('Error trying to set related model; there is no relationship defined on "' + this.getModelName() + '" by the name "' + relationshipName + '"'); // Is there a model?

        if (relatedModel) {
          // Check where the key is stored and set it
          if (relationship.isStoredOnLocalModel()) {
            // Get the remote key's value and set it on the local key
            this.set(relationship.localKey, relatedModel.get(relationship.remoteKey)); // Morph too?

            if (relationship.morphModelKey) {
              // Add model type
              this.set(relationship.morphModelKey, relationship.getMorphModelValue(relatedModel));
            }
          } else if (relationship.isStoredOnRemoteModel()) {
            // Get the local key's value and set it on the remote key
            relatedModel.set(relationship.remoteKey, this.get(relationship.localKey));
          }
        } else if (relatedModel === null) {
          // Unset it
          if (relationship.isStoredOnLocalModel()) {
            // Unset the local key
            this.set(relationship.localKey, null);
          }
        }

        this.related[relationshipName] = relatedModel; // Trigger

        this._scheduleAttributeChanged(relationshipName);

        return this;
      }
      /**
       * Add the given model to a relationship collection
       *
       * @method addRelatedModel
       * @param {string} relationshipName 
       * @param {Data.Model} relatedModel     
       * @param {boolean} fromApi		
       * @chainable
       */

    }, {
      key: "addRelatedModel",
      value: function addRelatedModel(relationshipName, relatedModel) {
        var _this13 = this;

        var fromApi = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var pivotAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        // Check if collection exists
        var relationship = this.getRelationship(relationshipName);

        if (this.related[relationshipName] === undefined) {
          // Make collection
          if (relationship) {
            this.related[relationshipName] = relationship.getInitValue();
          } else {
            this.related[relationshipName] = new Collection(relatedModel.constructor);
          }
        } // Is it a valid collection?
        else if (!(this.related[relationshipName] instanceof Collection)) {
            throw new TypeError('Tried to add a related model to an existing object that is not a Collection');
          } // Check relationship


        if (relationship && relationship.isPivot() && relatedModel.isPivot) {
          // Create pivot wrapper
          var Pivot = ClassMap.get('Pivot');
          relatedModel = Pivot.createFor(relatedModel, pivotAttributes);
        } // Add model


        var coll = this.related[relationshipName];

        if (fromApi) {
          coll.addFromApi(relatedModel);
        } else {
          coll.add(relatedModel);
        } // Set the inverse?


        if (relationship && relationship.inverseRelationshipName && relatedModel.hasRelationship(relationship.inverseRelationshipName)) {
          // Set it
          relatedModel.withoutNotifications(function () {
            relatedModel.setRelatedModel(relationship.inverseRelationshipName, _this13);
          });
        } // Trigger


        this._scheduleAttributeChanged(relationshipName);

        return this;
      }
    }, {
      key: "deleteRelatedModel",
      value: function deleteRelatedModel(relationshipName, model) {
        // Check if collection exists
        var relationship = this.getRelationship(relationshipName);

        if (!(this.related[relationshipName] instanceof Collection)) {
          throw new TypeError('Tried to delete a related model from a non-existing relationship');
        } // Remove it


        this.related[relationshipName].delete(model); // Trigger

        this._scheduleAttributeChanged(relationshipName); // Set the inverse?


        if (relationship && relationship.inverseRelationshipName && model.hasRelationship(relationship.inverseRelationshipName)) {
          // Set it
          model.withoutNotifications(function () {
            model.setRelatedModel(relationship.inverseRelationshipName, null);
          });
        }

        return this;
      } //////////////////////
      // Model definition //
      //////////////////////

      /**
       * Get the model class name for the current instance. When no definition was
       * made for this model, 'DefaultModel' will be returned.
       *
       * @method getModelName
       * @return {string} 
       */

    }, {
      key: "getModelName",
      value: function getModelName() {
        var definition = this.getDefinition();
        if (!definition) return 'DefaultModel';
        return definition.name;
      }
      /**
       * Get this model's ModelDefinition. 
       * Can be undefined for non-defined Models.
       *
       * @method getDefinition
       * @return {Data.ModelDefinition}
       */

    }, {
      key: "getDefinition",
      value: function getDefinition() {
        return this.constructor.definition;
      }
    }, {
      key: "getPrimaryKey",
      value: function getPrimaryKey() {
        return this.get(this.getDefinition().primaryKey);
      }
      /**
       * Get the definition for given attribute key. 
       * Can be undefined for non-defined Models, or if the
       * attribute is not defined in the ModelDefinition.
       *
       * @method getAttributeDefinition
       * @param  {string} key
       * @return {Data.ModelAttribute}  
       */

    }, {
      key: "getAttributeDefinition",
      value: function getAttributeDefinition(key) {
        // Check if the model has a definition at all
        var def = this.getDefinition();
        if (!def) return; // Get the attribute

        return def.attributes[key];
      }
    }, {
      key: "getRelationship",
      value: function getRelationship(key) {
        // Check if the model has a definition at all
        var def = this.getDefinition();
        if (!def) return null; // Get the relationship

        var relationship = def.relationships[key];
        return relationship;
      }
    }, {
      key: "hasRelationship",
      value: function hasRelationship(key) {
        return !!this.getRelationship(key);
      }
    }, {
      key: "getRelationshipByLocalKey",
      value: function getRelationshipByLocalKey(key) {
        // Check if the model has a definition at all
        var def = this.getDefinition();
        if (!def) return null; // Is it the local key?

        return def.getRelationshipByLocalKey(key);
      }
    }, {
      key: "isPivot",
      value: function isPivot() {
        return false;
      }
      /**
       * Check whether this instance is the same instance as given parameter.
       *
       * @method is
       * @param  {Chicken.Data.Model}  obj
       * @return {Boolean}     
       */

    }, {
      key: "is",
      value: function is(obj) {
        return Utils.uidFor(this) === Utils.uidFor(obj);
      }
    }, {
      key: "createCopy",
      value: function createCopy() {
        var _this14 = this;

        // Get all attributes
        var attr = {};

        _.each(this.attributes, function (value, key) {
          // Not computed?
          if (value instanceof ComputedProperty) return;
          attr[key] = _this14.get(key);
        });

        delete attr.id; // Create model

        var constr = this.constructor;
        var copy = new constr(attr);
        return copy;
      }
      /**
       * Create copy of model and its attributes and relations
       *
       * @method clone
       * @param  {cacheMap}  obj
       * @return {Copy}     
       */

    }, {
      key: "clone",
      value: function clone(cacheMap) {
        var _this15 = this;

        //create cacheMap?
        if (!cacheMap) cacheMap = new Map(); //known in cache map? return it

        if (cacheMap.has(this)) return cacheMap.get(this); //create copy

        var c = this.constructor;
        var copy = new c(); //store in cacheMap

        cacheMap.set(this, copy); // Get all attributes

        var attr = {};

        _.each(this.attributes, function (value, key) {
          // Not computed?
          if (value instanceof ComputedProperty) return;
          attr[key] = _this15.get(key);

          if (attr[key] instanceof Model) {
            attr[key] = attr[key].clone(cacheMap);
          } else if (attr[key] instanceof Object && typeof attr[key].clone === 'function') {
            attr[key] = attr[key].clone();
          }
        }); //store attributes


        copy.attributes = attr; //copy relationships

        _.each(this.related, function (value, key) {
          if (value) copy.related[key] = value.clone(cacheMap);
        });

        return copy;
      }
      /**
       * Create a shallow clone of the current model, meaning only 
       * the attributes will be copied and the relationships will not be cloned, 
       * but just linked.
       * 
       * @method shallowClone
       * @return {Model} 
       */

    }, {
      key: "shallowClone",
      value: function shallowClone() {
        var _this16 = this;

        // Get all attributes
        var attr = {};

        _.each(this.attributes, function (value, key) {
          // Not computed?
          if (value instanceof ComputedProperty) return;
          attr[key] = _this16.get(key);

          if (attr[key] instanceof Model) {
            attr[key] = attr[key].shallowClone();
          } else if (attr[key] instanceof Object && typeof attr[key].clone === 'function') {
            attr[key] = attr[key].clone();
          }
        }); //create copy


        var c = this.constructor;
        var copy = new c(attr); // Relationships

        copy.related = _.extend({}, this.related);
        return copy;
      }
    }]);

    return Model;
  }(Observable);
  /**
   * A map of registered model classes
   * 
   * @static
   * @property registry
   * @type {Map}
   */


  Model.registry = new Map();
  /**
   * A map of Model stores, containing loaded records
   *
   * @static
   * @property stores
   * @type {Map}
   */

  Model.stores = new Map();
  /**
   * @static
   * @method getStore
   * @param  {string} modelName 
   * @return {Map}           
   */

  Model.getStore = function (modelName) {
    if (!Model.stores.has(modelName)) {
      Model.stores.set(modelName, new ModelStore(modelName));
    }

    return Model.stores.get(modelName);
  };
  /**
   * @static 
   * @method getFromStaore
   * @param  {string} modelName 
   * @param  {number} id        
   * @return {Data.Model}           
   */


  Model.getFromStore = function (modelName, id) {
    // Is there a store?
    if (!Model.stores.has(modelName)) return null;
    var store = Model.getStore(modelName);
    return store.get(id);
  };

  Model.deleteFromStore = function (modelName, id) {
    //Is there a store
    if (!Model.stores.has(modelName)) return store; //throw new Error('Cannot delete `' + modelName + '` with id `' + id + '` from store. The store cannot be found.');

    var store = Model.getStore(modelName);
    return store.forget(id);
  };
  /**
   * Create a new model instance
   *
   * @static
   * @method create
   * @param  {string} modelName  
   * @param  {Object} [initValues={}]
   * @return {Data.Model}            
   */


  Model.create = function (modelName) {
    var initValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ModelClass = Model.registry.get(modelName);
    if (!ModelClass) return new Model(initValues);
    return new ModelClass(initValues);
  };
  /**
   * The number of milliseconds to delay checking whether the 
   * model has dirty attributes, after it an attribute has been changed.
   * 
   * @property UpdateDirtyDelay
   * @static
   * @type {Number}
   */


  Model.UpdateDirtyDelay = 100;
  ClassMap.register('Model', Model);

  /**
   * An ApiCall is a once-executing call to the configured API
   * 
   * @param  {Api.Api} api 	The Api instance this call originates from
   * @param  {string} method      The HTTP method to use (get, post, put, etc.)
   * @param  {string} uri			The uri to call
   * @param  {Object} data        
   * @param  {Object} ajaxOptions 	 
   */

  var ApiCall =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(ApiCall, _Obj);

    function ApiCall(api, method, uri) {
      var _this;

      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var ajaxOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, ApiCall);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ApiCall).call(this));
      /**
       * @property api
       * @type {Api.Api}
       */

      _this.api = api;
      /**
       * The HTTP method (get, post, put, patch, or delete)
       * 
       * @property method
       * @type {string}
       */

      _this.method = method;
      /**
       * Data to send along with the request
       * 
       * @property data
       * @type {Mixed}
       */

      _this.data = data;
      /**
       * Configuration options for the Ajax call
       *
       * @property ajaxOptions
       * @type {Object}
       */

      _this.ajaxOptions = ajaxOptions;
      /**
       * Query parameters to add onto the url
       *
       * @property queryParams
       * @type {Object}
       */

      _this.queryParams = queryString.parse(queryString.extract(uri));
      /**
       * @property uri
       * @type {string}
       */

      _this.uri = uri.split('?')[0];
      /**
       * The model class used when it cannot be deduced from the
       * Api result
       * 
       * @property modelClass
       * @type {Class}
       */

      _this.modelClass = null;
      /**
       * When true, the models will be linked to the global Model stores. When false,
       * a local store, specific to this ApiCall, will be used. (Default = true)
       * 
       * @property useGlobalStore
       * @type {Boolean}
       */

      _this.useGlobalStore = api.settings.useGlobalStore;
      /**
       * Local model store, used when useGlobalStore is false.
       * 
       * @property store
       * @type {Object}
       */

      _this.store = {};
      /**
       * @property expectModel
       * @type {Boolean}
       */

      _this.expectModel = false;
      /**
       * @property expectCollection
       * @type {Boolean}
       */

      _this.expectCollection = false;
      /**
       * @property deserializeResult
       * @type {Boolean}
       */

      _this.deserializeResult = true;
      /**
       * when true, the call will resolve with a null value on error. This can be set
       * by using the allowFailure method
       * 
       * @property allowFailure
       * @type {Boolean}
       */

      _this.resolvesOnError = false;
      /**
       * @property doNotExecuteInView
       * @type {Boolean}
       */

      _this.doNotExecuteInView = false;
      return _this;
    }

    _createClass(ApiCall, [{
      key: "serialize",
      value: function serialize() {
        return JSON.stringify(_.pick(this, ['uri', 'method', 'data', 'queryParams']));
      }
    }, {
      key: "reset",
      value: function reset() {
        this.resetPromise('complete');
      }
    }, {
      key: "executeHook",
      value: function executeHook(type) {
        var _this2 = this;

        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        args.unshift(this);

        _.each(ApiCall.hooks[type], function (cb) {
          cb.apply(_this2, args);
        });
      }
      /**
       * Execute the Api Call
       *
       * @method execute
       * @return {Promise}
       */

    }, {
      key: "execute",
      value: function execute() {
        var _this3 = this;

        // Do hook
        this.executeHook('beforeExecute'); // Authorize it

        var auth = this.api.getAuth();
        if (auth) auth.authorizeApiCall(this); // Make a promise

        return this.promise('complete', function (resolve, reject) {
          // Combine options
          var queryString$$1 = queryString.stringify(_this3.queryParams);
          if (queryString$$1.length > 0) queryString$$1 = '?' + queryString$$1;
          var options = $.extend({
            url: _this3.api.makeUrl(_this3.uri) + queryString$$1,
            method: _this3.method,
            data: _this3.data
          }, _this3.ajaxOptions); // Before send

          var beforeSends = [];
          if (_this3.api.settings.beforeSend) beforeSends.push(_this3.api.settings.beforeSend);
          if (options.beforeSend) beforeSends.push(options.beforeSend);

          options.beforeSend = function (jqXhr, settings) {
            // Loop and exexcute
            _.each(beforeSends, function (cb) {
              cb(jqXhr, settings);
            });
          }; // Make the call


          _this3.api.ajax(options).then(function (result, statusText, jqXhr) {
            // 204 (No-Content)?
            if (jqXhr.status === 204 && result === undefined) {
              resolve(null);
              return;
            } //non Resource response type
            //@DEPRECATED! Use doNotDeserialize() instead


            if (result && result.responseType == 'nonResource') {
              resolve(result);
              return;
            } // Deserialize it


            var response;

            if (_this3.deserializeResult) {
              // Deserialize
              response = _this3.api.deserialize(result, _this3); // Do we expect a single model?

              if (_this3.expectModel && response instanceof Collection) {
                response = response.first(); // Or a collection
              } else if (_this3.expectCollection && response instanceof Model) {
                // Make a collection of it
                var coll = new Collection();
                coll.add(response);
                response = coll;
              }
            } else {
              // Use as is
              response = result;
            } // Do hook


            _this3.executeHook('beforeResolve', [response]); // Done!


            resolve(response);
          }).fail(function (error) {
            if (_this3.resolvesOnError) {
              //resolve with null
              resolve(null);
            } else {
              // Make error
              var errorObj = new ApiError(_this3, error);

              if (auth) {
                errorObj = auth.processApiError(errorObj);
              }

              reject(errorObj);
            }
          });
        });
      } ////////////
      // Stores //
      ////////////

    }, {
      key: "useLocalStore",
      value: function useLocalStore() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.useGlobalStore = !value;
        return this;
      }
    }, {
      key: "allowFailure",
      value: function allowFailure() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.resolvesOnError = value;
        return this;
      }
    }, {
      key: "getResponseModel",
      value: function getResponseModel(modelName, id) {
        // Global?
        if (this.useGlobalStore) {
          // Get from Model store
          return Model.getFromStore(modelName, id);
        } else {
          // Known?
          if (this.store[modelName] === undefined) return null;
          return this.store[modelName][id];
        }
      }
    }, {
      key: "storeReponseModel",
      value: function storeReponseModel(model) {
        // Global?
        if (this.useGlobalStore) {
          // Store it
          var store = Model.getStore(model.getModelName());
          store.set(model.get('id'), model);
        } else {
          // Set it locally
          var modelName = model.getModelName();
          if (this.store[modelName] === undefined) this.store[modelName] = {};
          this.store[modelName][model.get('id')] = model;
        }

        return this;
      }
      /**
       * Add given key/value(s) to the queryParams
       *
       * @method query
       * @param  {string|Object} keyOrHash  Either a key or a key/value hash
       * @param  {Mixed} value     When given a single key/value pair, enter the value as the second argument
       * @chainable
       */

    }, {
      key: "query",
      value: function query(keyOrHash) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // Is it a key / value?
        if (typeof keyOrHash === 'string') {
          this.queryParams[keyOrHash] = value;
        } else {
          $.extend(this.queryParams, keyOrHash);
        }

        return this;
      }
    }, {
      key: "select",
      value: function select(value) {
        return this.query('select', value);
      }
      /**
       * Add given pagination page to the queryParams
       *
       * @method query
       * @param  pageNumber
       * @chainable
       */

    }, {
      key: "page",
      value: function page(pageNumber) {
        var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // Reset?
        if (pageNumber === false) {
          // Clear
          delete this.queryParams['page[number]'];
          delete this.queryParams['page[size]'];
          return this;
        } // Set it


        if (pageSize !== null) this.pageSize(pageSize);
        return this.query('page[number]', pageNumber);
      }
      /**
       * Add given pagesize to the queryParams
       *
       * @method query
       * @param  pageSize
       * @chainable
       */

    }, {
      key: "pageSize",
      value: function pageSize(_pageSize) {
        return this.query('page[size]', _pageSize);
      }
      /**
       * Set the request data
       * 
       * @method setData
       * @param {mixed} data
       * @chainable
       */

    }, {
      key: "setData",
      value: function setData(data) {
        this.data = data;
        return this;
      }
      /**
       * Do not execute this ApiCall when resolving the View,
       * but instead pass on the ApiCall itself.
       * 
       * @param  {Boolean} doNotExecuteInView 
       * @chainable
       */

    }, {
      key: "doNotExecute",
      value: function doNotExecute() {
        var doNotExecuteInView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.doNotExecuteInView = doNotExecuteInView;
        return this;
      }
      /**
       * Do not deserialize the response but return the literal
       * response instead.
       * 	
       * @param  {Boolean} doNotDeserialize 
       * @chainable
       */

    }, {
      key: "doNotDeserialize",
      value: function doNotDeserialize() {
        var _doNotDeserialize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        this.deserializeResult = !_doNotDeserialize;
        return this;
      }
    }]);

    return ApiCall;
  }(Obj);

  ApiCall.hooks = {
    beforeExecute: [],
    beforeResolve: []
  };

  ApiCall.hook = function (type, callback) {
    if (_.contains(ApiCall.hooks, type)) throw new Error('Unknown ApiCall hook, use on of the following: ' + _.keys(ApiCall.hooks).join(', '));
    ApiCall.hooks[type].push(callback);
  };

  /**
   * @module Dom
   */

  var View =
  /*#__PURE__*/
  function (_Observable) {
    _inherits(View, _Observable);

    /**
     * ## Creating a View
     * 
     * A View is the part where your HTML and data come together. A View
     * can be created directly:
     *
     * 	var view = new Chicken.Dom.View(source);
     *
     * Or shortly:
     *
     * 	var view = Chicken.view(source);
     *
     * A View can be created with three different `source` types:
     * - HTML string
     * - Name of a view template
     * - And URL to a view template
     *
     * ## HTML
     *
     * The following example should be self-explanatory:
     *
     * 	Chicken.application($('#application'))
     * 		.routes(function() {
     *
     *			this.route('/', () => {
     *
     *				return Chicken.view('<h1>{{ title }}</h1>')
     *					.with('title', 'Page title');
     * 
     *			});
     * 
     * 		});
     *
     * Note: The `source` parameter is recognized as HTML when it starts with an HTML tag.
     *
     * ## By name
     *
     * If you want to put your templates in separate files, you can use 'names' to
     * link to them. Use `.` in the name in place of a path seperator. Some examples:
     *
     * 	Chicken.view('home');               // Will open /views/home.hbs
     * 	Chicken.view('product.index');      // Will open /views/product/index.hbs
     * 	Chicken.view('a.b.c.d');            // Will open /views/a/b/c/d.hbs
     *
     * You can configure the default path and extension in your Application configuration.
     *
     * Note: Only use lowercase, numbers, and dashes in your names (`/[a-z0-9\-]/`)
     *
     *
     * ## By URL
     *
     * This is pretty self-explanatory; the principle is the same as 'by name', only 
     * here you pass a relative or absolute url instead:
     *
     * 	Chicken.view('/weird-location/template.xxx');
     * 	Chicken.view('//my-domain.com/chicken-templates/welcome.hbs');
     * 
     * @class Dom.View
     * @extends Core.Observable
     *
     * @constructor
     * @param {string} source   			The source for the view
     * @param {Dom.Renderer} renderer 		The Renderer instance that will be used by HTMLBars
     */
    function View(source) {
      var _this;

      var initCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var renderer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, View);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(View).call(this));
      /**
       * Promises for data to load, keyed by the key
       * as provided in the `with` method
       * 
       * @property dataPromises
       * @type {Object}
       */

      _this.dataPromises = {};
      /**
       * @property dataExpectations
       * @type {Object}
       */

      _this.dataExpectations = {};
      /**
       * All promises that need to resolve for the 
       * page to load.
       *
       * @property loadPromises
       * @type {Array}
       */

      _this.loadPromises = [];
      /**
       * @property templateString
       * @type {string}
       */

      _this.templateString = null;
      /**
       * @property source
       * @type {string}
       */

      _this.source = source;
      /**
       * @property template
       * @type {HTMLBars template}
       */

      _this.template = null;
      /**
       * @property templateUrl
       * @type {string}
       */

      _this.templateUrl = null;
      /**
       * The prefix to add before translations when in the view
       * a translate key starts with a dot (e.g. {{t ".title"}} )
       * 
       * @property translationKeyPrefix
       * @type {string}
       */

      _this.translationKeyPrefix = null;
      _this.tkp = null;
      /**
       * @property actions
       * @type {Object}
       */

      _this.actions = {};
      /**
       * Local DOM helpers that only apply to this view
       * 
       * @property helpers
       * @type {Object}
       */

      _this.helpers = {};
      /**
       * @property components
       * @type {Object}
       */

      _this.components = {};
      /**
       * When active this view will render and update when
       * the data changes.
       * 
       * @property isActive
       * @type {Boolean}
       */

      _this.isActive = true;
      /**
       * @property bindings
       * @type {Set}
       */

      _this.bindings = new Set();
      /**
       * @property renderer
       * @type {Dom.Renderer}
       */

      _this.renderer = renderer ? renderer : App().config('renderer');
      /**
       * The RenderResult gotten back from the Template rendering.
       * 
       * @property renderResult
       * @type {HTMLBars.RenderResult}
       */

      _this.renderResult = null;
      /**
       * The DocumentFragment that is the rendered view.
       * 
       * @property documentFragment
       * @type {DocumentFragment}
       */

      _this.documentFragment = null;
      /**
       * The jQuery version of the DocumentFragment, that can be 
       * used to manipulate the view's contents.
       * 
       * @property $element
       * @type {jQuery}
       */

      _this.$element = null;
      /**
       * @property apiCalls
       * @type {Array}
       */

      _this.apiCalls = [];
      _this.hooks = {
        beforeRender: [],
        beforeLeave: []
      }; //////////////////////////
      // Check out the source //
      //////////////////////////
      // No template (just yield)?

      if (source === false) {
        _this.templateString = '{{yield}}';
      } // Is it HTML?		
      else if (/^\<[a-z\!]/.test(source) || /^{{/.test(source)) {
          // Use code now
          _this.templateString = source;
        } // Name?
        else if (/[a-z0-9\-]+\./.test(source) || /^[a-zA-Z]+$/.test(source)) {
            // Set translation prefix?
            if (_this.constructor === View && View.AutoTranslationPrefix) {
              _this.translationPrefix(source);
            } // Is it cached?


            if (View.TemplateCache.has(source)) {
              // Use it.
              _this.templateString = View.TemplateCache.get(source);
            } else {
              // Load template
              var url = App().uri(App().config('viewPath'), source.split(/\./).join('/'), '.' + App().config('viewExtension'));
              _this.templateUrl = url;
            }
          } // Url.
          else {
              // Load it
              _this.templateUrl = url;
            } // Definition callback?


      if (initCallback) {
        initCallback.apply(_assertThisInitialized(_assertThisInitialized(_this)));
      }

      return _this;
    }

    _createClass(View, [{
      key: "beforeRender",
      value: function beforeRender(callback) {
        this.hooks.beforeRender.push(callback);
        return this;
      }
    }, {
      key: "beforeLeave",
      value: function beforeLeave(callback) {
        this.hooks.beforeLeave.push(callback);
        return this;
      }
    }, {
      key: "loadTemplate",
      value: function loadTemplate() {
        var _this2 = this;

        // Already loading or loaded?
        if (this._promises.has('template')) {
          return this.getPromise('template');
        } // Promise.


        var promise = this.promise('template', function (resolve, reject) {
          // Do we have the template already?
          if (_this2.templateString) {
            resolve(_this2.templateString);
            return;
          } // Load it.


          $.ajax(_this2.templateUrl).then(function (result) {
            // Set template code
            _this2.templateString = result; // We're done.

            resolve(result);
          }).fail(function (error) {
            reject(error.responseText);
          });
        }); // Add and return

        this.loadPromises.push(promise);
        return promise;
      }
      /**
       * To add data to the view, you can use the **with** method. The simplest way is to
       * call it using a **key** and a **value**:
       *
       * 	Chicken.view('page').with('title', 'Page title')
       *
       * You can also add a promise-returning method, such as:
       *
       * 	Chicken.view('product.index')
       * 		.with('products', Chicken.api('/products'));
       *
       * The view will then wait for the Api call to finish, before showing, so that you
       * can use the `products` collection your view.
       *
       * The same goes for a single model:
       *
       * 	Chicken.view('product.show')
       * 		.with('product', Chicken.api('/product/' + this.parameters.get('id')));
       * 
       * When you have multiple data variables you want to pass to the view, you
       * can also use object notation:
       *
       * 	Chicken.view('product.index')
       * 		.with({
       * 			products: Chicken.api('/products'),
       * 			categories: Chicken.api('/categories')
       * 		});
       *
       * 
       * 
       * @method with
       * @param  {...mixed} args   This method can be called in two ways. See documentation
       * @chainable
       */

    }, {
      key: "with",
      value: function _with() {
        var _this3 = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // Is it a single object hash?
        if (args.length === 1 && _typeof(args[0]) === 'object') {
          // Do an each
          _.each(args[0], function (value, key) {
            _this3.with(key, value);
          });
        } else {
          // Use key/value
          var key = args[0],
              value = args[1]; // Is the key a string?

          if (typeof key !== 'string') throw new TypeError('[Dom.View] The "with" method accepts either a key, value or hash-object as arguments.'); // Is it an Api call?

          if (value instanceof ApiCall && !value.doNotExecuteInView) {
            // Get the promise and add to api calls list
            this.apiCalls.push(value);
            var promise = this.dataPromises[key] = value.getPromise('complete');
            this.loadPromises.push(promise);
            promise.then(function (result) {
              _this3.withoutNotifications(function () {
                _this3.set(key, result, true, true);
              });
            });
          } // Is the data a promise?
          else if (value instanceof Promise) {
              // Add to promises
              this.dataPromises[key] = value;
              this.loadPromises.push(value);
              value.then(function (result) {
                _this3.withoutNotifications(function () {
                  _this3.set(key, result, true, true);
                });
              });
            } else {
              // Is it a Binding?
              if (value instanceof Binding) {
                // Use value
                value = value.getReference();
              } // Set it now (convert to observables, and do not trigger updates)


              this.withoutNotifications(function () {
                _this3.set(key, value, true);
              });
            }
        }

        return this;
      }
      /**
       * Tell the View to expect given data to present in order to render properly. When this data
       * is not present, the View will throw an error.
       * 
       * @method expect
       * @param  {string}  key          The data key that is expected in order for the View to render properly
       * @param  {Number}  minimumCount (Default = 1) The minimum number of records we expect
       * @param  {Number}  maximumCount (Default = false) The maximum number of recorders we expected
       * @chainable
       */

    }, {
      key: "expect",
      value: function expect(key) {
        var minimumCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var maximumCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        // Set it
        this.dataExpectations[key] = {
          min: minimumCount,
          max: maximumCount
        };
        return this;
      }
    }, {
      key: "action",
      value: function action(key, callback) {
        this.actions[key] = callback;
        return this;
      }
    }, {
      key: "helper",
      value: function helper(key, callback) {
        this.helpers[key] = callback;
        return this;
      }
    }, {
      key: "getHelper",
      value: function getHelper(key) {
        return this.helpers[key] || false;
      }
    }, {
      key: "translationPrefix",
      value: function translationPrefix() {
        var _this4 = this;

        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        // Store prefix
        if (key === false) key = this.source;
        this.translationKeyPrefix = key;
        this.tkp = key; // Shorthand
        // Register the 'l' helper

        if (this.helpers.l === undefined) {
          this.helper('l', function (params, attributeHash) {
            // Get key
            var key = Utils.getValue(params[0]);
            key = "".concat(_this4.translationKeyPrefix, ".").concat(key); // Translate

            return App().i18n.translate(key, attributeHash, Utils.getValue(params[1]));
          });
        }

        return this;
      }
    }, {
      key: "sendAction",
      value: function sendAction() {
        var _this5 = this;

        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        // Get the callback.
        var actionScope = this;
        var callback = actionScope.actions[name]; // Now call it.

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        var params = _.flatten([_.map(args, function (value) {
          return _this5.renderer.hooks.getValue(value);
        }), this, actionScope]);

        callback.apply(actionScope, params);
      }
      /**
       * Render the view!
       *
       * @method render
       * @return {Promise}  The 'render' promise is returned. The 'added' promise will be called
       *                    when the view is added to the DOM.
       **/

    }, {
      key: "render",
      value: function render() {
        var _this6 = this;

        // Make sure the template is loaded
        this.loadTemplate(); // We make the 'render' promise.

        return this.promise('render', function (resolve, reject) {
          // Start api calls.
          _.invoke(_this6.apiCalls, 'execute'); /////////////////////////////////////////
          // Wait for all loadPromises to finish //
          /////////////////////////////////////////


          Promise.all(_this6.loadPromises).then(function () {
            // Check present of data
            _.each(_this6.dataExpectations, function (options, key) {
              // Get it
              var data = _this6.get(key);

              if (data === undefined) return reject('The View expected ' + key + ' to be present, but it was not.'); // Model or Collection?

              if (!(data instanceof Model || data instanceof Collection)) return reject('The View expected ' + key + ' to be a Model or Collection, but it was a ' + _typeof(data)); // Check count

              if (data instanceof Model && options.min && options.min > 1) return reject('The View expected ' + key + ' to have at least ' + options.min + ' records, only one was present');

              if (data instanceof Collection) {
                if (options.min && data.length < options.min) return reject('The View expected ' + key + ' to have at least ' + options.min + ' records, ' + data.length + ' were present');
                if (options.max && data.length > options.max) return reject('The View expected ' + key + ' to have no more than ' + options.max + ' records, ' + data.length + ' were present');
              }
            });

            _this6.renderSync();

            resolve();
          }, function (error) {
            reject(error);
          });
        });
      }
      /**
       * Render the view synchronously. Only use this when you know all
       * the data is already loaded!
       *
       * @method renderSync
       * @chainable
       */

    }, {
      key: "renderSync",
      value: function renderSync() {
        var _this7 = this;

        /////////////////////
        // Create template //
        /////////////////////
        // Before render hook
        var continueRendering = true;

        _.each(this.hooks.beforeRender, function (cb) {
          if (!continueRendering) return;
          var result = cb.apply(_this7);
          if (result === false) continueRendering = false;
        }); // Before render returned false?


        if (!continueRendering) return this; // Render it

        try {
          this.renderResult = this.getTemplate().render(this, this.renderer); // Localize and be done!

          this.documentFragment = this.renderResult.fragment;
          this.resolvePromise('render', this.documentFragment);
        } catch (error) {
          // Enrich error with element-path
          var path = [];

          if (this.renderer.currentMorph && this.renderer.currentMorph.element) {
            var $el = $(this.renderer.currentMorph.element);
            $el.parents().addBack().not('html').each(function () {
              var entry = this.tagName.toLowerCase();

              if (this.className) {
                entry += '.' + this.className.replace(/ /g, '.');
              }

              path.push(entry);
            });
            path = path.join(' > ');
          } else {
            path = 'unknown';
          } // Add error stack			

          /* eslint-disable no-console */


          try {
            console.warn(error.stack);
          } catch (e) {}
          /* Nothing */

          /* eslint-enable no-console */
          // Get template source


          var source = this.source;
          var msg = "Error in template \"".concat(source, "\" at \"").concat(path, "\":\n\t").concat(error, "\n");
          this.rejectPromise('ready', msg);
          return this;
        }

        return this;
      }
    }, {
      key: "getTemplate",
      value: function getTemplate() {
        // Create
        if (!this.template) {
          this.template = htmlbarsCompiler_1(this.templateString);
        }

        return this.template;
      }
      /**
       * Have the rendered view be revalidated when it's convenient.
       * 
       * @method scheduleRevalidate
       * @chainable
       */

    }, {
      key: "scheduleRevalidate",
      value: function scheduleRevalidate() {
        var _this8 = this;

        // Still active?
        if (!this.isActive) {
          return this;
        } // Not already pending?


        if (!this.revalidateTimeout) {
          // Wait a bit.
          this.revalidateTimeout = setTimeout(function () {
            // Revalidate!
            _this8.revalidate(); // Check if components are still there


            _.each(_this8.components, function (component, key) {
              // Element rendered?
              if (component.$element && component.$element.length > 0) {
                // No longer in DOM
                if (!$.contains(document.documentElement, component.$element[0])) {
                  component.destroy();
                  delete _this8.components[key];
                }
              }
            });
          }, View.RevalidationDelay);
        }

        return this;
      }
      /**
       * Revalidate the rendered view. Revalidation means the updating of 
       * 'dirty' elements (morphs). The dirtying is done by the Bindings, set up
       * by the Renderer.
       *
       * If your binding is valid, and components work as the should, you shouldn't 
       * need to call this method. If you do though, it is better to call
       * `scheduleRevalidate` instead, to prevent undue calls.
       * 
       * @method revalidate
       * @chainable
       */

    }, {
      key: "revalidate",
      value: function revalidate() {
        this.trigger('beforeRevalidate');
        if (this.renderResult) this.renderResult.revalidate();
        this.trigger('revalidate');
        View.any.trigger('revalidate', this);
        this.revalidateTimeout = false;
        return this;
      }
      /**
       * Add the view to the ViewContainer, replacing previous contents
       * and making sure the ViewContainer knows it's gotten the view.
       * 
       * @method addToContainer
       * @param {Dom.ViewContainer} viewContainer 
       */

    }, {
      key: "addToContainer",
      value: function addToContainer(viewContainer) {
        // Set view
        viewContainer.setView(this); // Create wrapper

        var $view = $('<view/>');
        $view.html(this.documentFragment); // Add to DOM

        viewContainer.setContent($view); // Set element

        this.$element = $view; // Done.

        View.any.trigger('render', $view);
        this.resolvePromise('ready', [this]);
      }
      /**
       * Handle the leaving of the page this View is on, e.g. destroying
       * components.
       *
       * @method leave
       * @return {Promise}
       */

    }, {
      key: "leave",
      value: function leave() {
        var _this9 = this;

        return new Promise(function (resolve, reject) {
          // Before ,leave hook
          var allowLeave = true;

          _.each(_this9.hooks.beforeLeave, function (cb) {
            if (allowLeave) {
              var result = cb.apply(_this9);
              if (result === false) allowLeave = false;
            }
          }); // Can't leave?


          if (!allowLeave) return reject(); // I am destroyed

          _this9.isActive = false; // Destroy components

          _.each(_this9.components, function (component) {
            component.destroy();
            component.isActive = false;
          }); // Kill bindings


          _this9.bindings.forEach(function (binding) {
            binding.destroy();
          }); // Done.


          resolve();
        });
      }
    }, {
      key: "addBinding",
      value: function addBinding(binding) {
        this.bindings.add(binding);
        return this;
      }
    }]);

    return View;
  }(Observable);
  /**
   * The TemplateCache is used to cache templates by their name. When you are
   * building your application for production, you can also use this to bundle
   * the templates.
   * 
   * @property TemplateCache
   * @static
   * @type {Map}
   */


  View.TemplateCache = new Map();
  /**
   * The number of milliseconds to wait before revalidating your views after
   * a change in the data has occured.
   *
   * This value can be very low, as it is mostly used to bundle changes together
   * that occur semi-simultaneously.
   * 
   * @property RevalidationDelay
   * @static
   * @type {Number}
   */

  View.RevalidationDelay = 3;
  /**
   * When this is true, a translation-prefix will automatically be set
   * upon creation of this View, with the same value as the given source.
   * 
   * @property AutoTranslationPrefix
   * @static
   * @type {Boolean}
   */

  View.AutoTranslationPrefix = false;
  View.any = new Obj();

  /**
   * @module Dom
   */

  var Component =
  /*#__PURE__*/
  function (_View) {
    _inherits(Component, _View);

    /**
     * @class Dom.Component
     * @extends Dom.View
     */
    function Component(name, source, morph, scope, parameters, attributeHash, visitor, subTemplates) {
      var _this;

      var initCallback = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
      var methods = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : {};
      var renderer = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;

      _classCallCheck(this, Component);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, source, null, renderer));
      /**
       * The tag-name that was used to initialize this component
       * 
       * @property name
       * @type {string}
       */

      _this.name = name;
      /**
       * The HTMLBars morph that contains this component
       * 
       * @property morph
       * @type {HTMLBarsMorph}
       */

      _this.morph = morph;
      /**
       * The HTMLBars scope for this component
       * 
       * @property scope
       * @type {Object}
       */

      _this.scope = scope;
      /**
       * The list of non-keyed parameters used in this component
       * 
       * @property parameters
       * @type {array}
       */

      _this.parameters = parameters;
      /**
       * The attribute hash
       *
       * @property attributes
       * @type {object}
       */

      _this.attributes = {};

      _.each(attributeHash, function (value, key) {
        // Autocast
        if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        } // Set it.


        _this.attributes[inflection.camelize(key.split('-').join('_'), true)] = value;
      });
      /**
       * The HTMLBars visitor that was used to initialize this component
       *
       * @property visitor
       * @type {object}
       */


      _this.visitor = visitor;
      /**
       * Sub-templates used to yield within the component
       *
       * @property subTemplates
       * @type {object}
       */

      _this.subTemplates = subTemplates;
      /**
       * The tagName that will be used when creating this component. The default
       * value is 'div', but this can be overruled in your handlebar template, or
       * in the initCallback of the component.
       * 
       * @property tagName
       * @type {String}
       */

      _this.tagName = 'div';
      /**
       * The CSS class(es) that will be added to the component upon creation. You can set
       * this value in the initCallback of the component.
       *
       * @property cssClass
       * @type {string}
       */

      _this.cssClass = false;
      /**
       * @property element
       * @type {DOMElement}
       */

      _this.element = null;
      /**
       * The component instance that wrap this component, if any.
       * 
       * @property parentComponent
       * @type {Dom.Component}
       */

      _this.parentComponent = _this.scope.component;

      _this.setSilently('parent', _this.parentComponent); // Do I have a parent?


      if (_this.parentComponent) {
        _this.parentComponent.components[_this.getId()] = _assertThisInitialized(_assertThisInitialized(_this));
        _this.attributes._ = _this.parentComponent;
      }
      /**
       * @property view
       * @type {Dom.View}
       */


      _this.view = _this.scope.view;

      if (_this.view) {
        _this.view.components[_this.getId()] = _assertThisInitialized(_assertThisInitialized(_this));
        if (!_this.parentComponent) _this.set('_', _this.view);
        _this.attributes.$ = _this.view;
      }
      /**
       * The dom-object can be used to listen to dom events on the event
       * 
       * @property dom
       * @type {Core.Obj}
       */


      _this.dom = new Obj();
      /**
       * @property isDestroyed
       * @type {Boolean}
       */

      _this.isDestroyed = false; // Make attributes available

      _this.with(_this.attributes); // Add methods


      $.extend(_assertThisInitialized(_assertThisInitialized(_this)), methods); // Before destroy

      _this.hooks.beforeDestroy = []; // Definition callback?

      if (initCallback) {
        initCallback.apply(_assertThisInitialized(_assertThisInitialized(_this)));
      }

      return _this;
    }

    _createClass(Component, [{
      key: "getHelper",
      value: function getHelper(key) {
        // Me?
        if (this.helpers[key]) return this.helpers[key]; // Parent component?

        if (this.parentComponent) return this.parentComponent.getHelper(key); // View

        if (this.view) return this.view.getHelper(key);
        return false;
      }
    }, {
      key: "findParentComponent",
      value: function findParentComponent(key) {
        // My parent?
        if (this.parentComponent) {
          // Am I the one you're looking for?
          if (this.parentComponent.name === key) return this.parentComponent; // Look higher up

          return this.parentComponent.findParentComponent(key);
        } else {
          // No dice.
          return false;
        }
      }
    }, {
      key: "getId",
      value: function getId() {
        // Already set?
        if (!this._id) {
          // Set as attribute
          var id = this.attributes.id;

          if (id) {
            this._id = id;
          } else {
            // Do it by name
            var name = inflection.camelize(this.name.split('-').join('_'), true);
            if (Component.instanceCounts[name] === undefined) Component.instanceCounts[name] = 0;
            Component.instanceCounts[name]++;
            this._id = name + Component.instanceCounts[name];
          }
        }

        return this._id;
      }
    }, {
      key: "sendAction",
      value: function sendAction() {
        var _this2 = this;

        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        // No name given?
        if (name === null) {
          name = this.attributes.action;
        } // Get the callback.


        var actionScope = this.renderer.hooks.getActionScope(this.scope, name);
        if (!actionScope) throw new Error('[Component ' + this.name + '] Could not find action "' + name + '" within the scope');
        var callback = actionScope.actions[name]; // Now call it.

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var params = _.flatten([_.map(args, function (value) {
          return _this2.renderer.hooks.getValue(value);
        }), this, actionScope]);

        return callback.apply(actionScope instanceof View ? actionScope : this, params);
      }
    }, {
      key: "renderSync",
      value: function renderSync() {
        var _this3 = this;

        // Before render hook
        _.each(this.hooks.beforeRender, function (cb) {
          cb.apply(_this3);
        }); // Create the template


        try {
          // Render it
          this.renderResult = this.getTemplate().render(this, this.renderer, {
            scope: this.scope,
            template: this.subTemplates.default
          });
          this.documentFragment = this.renderResult.fragment;
        } catch (error) {
          // Enrich error with element-path
          var path = [];
          var $el = $(this.renderer.currentMorph.element);
          $el.parents().addBack().not('html').each(function () {
            var entry = this.tagName.toLowerCase();

            if (this.className) {
              entry += '.' + this.className.replace(/ /g, '.');
            }

            path.push(entry);
          });
          path = path.join(' > '); // Get template source

          var source = this.source;
          if (this.view) source = "".concat(this.name, " in ").concat(this.view.source);
          var msg = "Error in template \"".concat(source, "\" at \"").concat(path, "\":\n\t").concat(error, "\n"); // Add error stack			

          /* eslint-disable no-console */

          try {
            console.warn(error.stack);
          } catch (e) {}
          /* Nothing */

          /* eslint-enable no-console */


          this.rejectPromise('ready', msg);
          return;
        } // Study the object


        this.study(function () {
          _this3.scheduleRevalidate();
        }); // Create the element

        this.element = document.createElement(this.tagName);

        _.each(this.attributes, function (value, key) {
          // Check value type
          if (value === 'true') value = true;
          if (value === 'false') value = false;
          if (!(value instanceof Object) && $.isNumeric(value) && !/^0/.test(value)) value = parseFloat(value);

          if (value !== _this3.attributes[key]) {
            _this3.attributes[key] = value;
          } // Is it a useful value?


          if (key !== 'title' && (typeof value === 'string' || typeof value === 'number') && value.length < 64) {
            var attrKey = inflection.underscore(key).split('_').join('-');

            _this3.element.setAttribute(attrKey, value);
          }
        });

        this.$element = $(this.element);
        this.$element.append(this.documentFragment); // CSS class

        if (this.cssClass) this.$element.addClass(this.cssClass); // Trigger beforeAdded

        this.trigger('beforeAdd', this.$element); // Put element in result

        this.morph.setNode(this.$element[0]); // Done.

        this.trigger('added', this.$element); // Enable DOM events

        this.enableDomEvents(); // Find child components

        if (_.size(this.components) > 0) {
          // Wait for the children to complete first
          var promises = _.map(this.components, function (child) {
            return child.getPromise('ready');
          });

          Promise.all(promises).then(function () {
            _this3.resolvePromise('ready');

            View.any.trigger('render', _this3.$element);
          });
        } else {
          // We are ready now.
          this.resolvePromise('ready');
          View.any.trigger('render', this.$element);
        }
      }
    }, {
      key: "enableDomEvents",
      value: function enableDomEvents() {
        var _this4 = this;

        // Loop through callbacks
        this.dom._listeners.forEach(function (callbacks, name) {
          // Proper event?
          if (!_.contains(Component.DomEventNames, name)) {
            throw new Error('The "' + name + '" event is not a valid DOM event.');
          } // Listen and connect.


          _this4.$element.on(name, function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            args.unshift(name);

            _this4.dom.trigger.apply(_this4.dom, args);
          });
        });
      }
    }, {
      key: "getSubTemplate",
      value: function getSubTemplate(key) {
        var block = templateUtils_2(render, this.subTemplates[key], {
          scope: this.scope
        });
        return block;
      }
    }, {
      key: "getAttribute",
      value: function getAttribute(key) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var value = this.attributes[key];
        if (value === undefined) value = defaultValue;
        return value;
      }
    }, {
      key: "getAttributes",
      value: function getAttributes() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        // Get all keys with uiX
        var result = {};
        var regex = prefix ? new RegExp('^' + prefix + '[A-Z]') : false;

        _.each(this.attributes, function (value, key) {
          // Prefixed?
          if (regex) {
            // Match?
            if (!regex.test(key)) return; // Remove it

            key = _.decapitalize(key.substr(prefix.length));
          } // Value


          if (value !== null && _typeof(value) === 'object' && typeof value.getValue === 'function') {
            value = value.getValue();
          } // Set it


          result[key] = value;
        });

        return result;
      }
    }, {
      key: "get",
      value: function get$$1(key) {
        // Do basics first
        var value = _get(_getPrototypeOf(Component.prototype), "get", this).call(this, key); // Nothing?


        if (value === undefined) {
          // Bubble up.
          if (this.parentComponent) {
            return this.parentComponent.get(key);
          } else if (this.view) {
            return this.view.get(key);
          }
        }

        return value;
      }
      /**
       * Set default values for component attributes. Use this in the initCallback.
       *
       * @method defaults
       * @param  {Object} hash   Key/value pairs
       * @chainable
       */

    }, {
      key: "defaults",
      value: function defaults(hash) {
        var _this5 = this;

        this.withoutNotifications(function () {
          _.each(hash, function (value, key) {
            // Set?
            if (_this5.attributes[key] === undefined) {
              _this5.set(key, value);
            }
          });
        });
      }
    }, {
      key: "beforeDestroy",
      value: function beforeDestroy(callback) {
        this.hooks.beforeDestroy.push(callback);
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;

        // I am destroyed
        if (this.isDestroyed) return this;
        this.isDestroyed = true; // Call the hooks

        _.each(this.hooks.beforeDestroy, function (cb) {
          cb.apply(_this6);
        });

        return this;
      }
    }]);

    return Component;
  }(View);

  Component.DomEventNames = [// Touch events
  'touchStart', 'touchMove', 'touchEnd', 'touchCancel', // Keyboard
  'keyDown', 'keyUp', 'keyPress', // Mouse
  'mouseDown', 'mouseUp', 'contextMenu', 'click', 'doubleClick', 'mouseMove', 'focusIn', 'focusOut', 'mouseEnter', 'mouseLeave', // Form
  'submit', 'change', 'focusIn', 'focusOut', 'input', // HTML5
  'dragStart', 'drag', 'dragEnter', 'dragLeave', 'dragOver', 'dragEnd', 'drop'];
  Component.registry = new Map();
  Component.instanceCounts = {};

  /**
   * @module Dom
   */

  var ComponentDefinition = function ComponentDefinition(name, source, initCallback) {
    var methods = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var renderer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    _classCallCheck(this, ComponentDefinition);

    /**
     * The name of the component. This is also the name you use
     * in your templates, to insert the component.
     * 
     * @property name
     * @type {string}
     */
    this.name = name;
    /**
     * The template source
     *
     * @property source
     * @type {string}
     */

    this.source = source;
    /**
     * The method that is called when the Dom.Component instance is created.
     * 
     * @property initCallback
     * @type {[type]}
     */

    this.initCallback = initCallback;
    /**
     * The Dom.Renderer instance that is used to render the component. This is also the
     * renderer in which this component will be automatically registered as a helper.
     *
     * @property renderer
     * @type {Dom.Renderer}
     */

    this.renderer = renderer ? renderer : App() ? App().config('renderer') : null;
    /**
     * Methods to add to the component prototype.
     * 
     * @property methods
     * @type {object}
     */

    this.methods = methods;
  };

  var filesize_min = createCommonjsModule(function (module) {
  !function(i,e){module.exports?module.exports=e():i.filesize=e();}("undefined"!=typeof window?window:commonjsGlobal,function(){var i={iec:"_Ki_Mi_Gi_Ti_Pi_Ei_Zi_Yi",si:"_K_M_G_T_P_E_Z_Y"};return function(e,_$$1,o){e=Math.abs(e),_$$1||0===_$$1||(_$$1=1);var t="si"==o?1e3:1024,n=0;for(i[o]||(o="si");e>=t;)e/=t,++n;return e.toFixed(_$$1)+" "+i[o].split("_")[n]+"b"}});
  });

  /**
   * @module Dom
   */

  var Helpers =
  /*#__PURE__*/
  function () {
    /**
     * @class Dom.Helpers
     *
     * @constructor 
     * @param  {Dom.Renderer} renderer
     */
    function Helpers(renderer) {
      _classCallCheck(this, Helpers);

      this.renderer = renderer;
    } /////////////
    // Actions //
    /////////////


    _createClass(Helpers, [{
      key: "action",
      value: function action(params, attributeHash, blocks
      /*, morph, renderer, scope, visitor*/
      ) {
        // There should be an ActionBinding for this element
        var element = blocks.element;

        if (element && element.getAttribute('data-chicken-action')) {
          // Get the action
          var binding = ActionBinding.get(element.getAttribute('data-chicken-action'));
          binding.apply();
        } else {
          throw new Error('The "action" keyword was not correctly configured in your Renderer... Or you are trying to add an action to a Component.');
        }
      } /////////////
      // Routing //
      /////////////

    }, {
      key: "link",
      value: function link(params, attributeHash, blocks
      /*, morph, renderer, scope, visitor*/
      ) {
        var _this = this;

        // Check the event
        var eventName = attributeHash.event ? this._getValue(attributeHash.event) : 'click'; // Add listener

        if (blocks.element) {
          // Get element(s)
          var $el = $(blocks.element); // Add href and event

          $el.each(function (index, el) {
            // Set href for easy debuggin' and statusbar info
            $(el).attr('href', _this._getValue(params[0]));
          }).on(eventName, function (e) {
            e.preventDefault(); // Get uri value

            var uri = _this._getValue(params[0]); // Transition


            var transition = attributeHash.transition ? _this._getValue(attributeHash.transition) : null; // Go there.

            App().goto(uri, null, {}, false, transition);
          });
        }
      }
    }, {
      key: "linkTo",
      value: function linkTo(params, attributeHash, block) {
        var _this2 = this;

        // Find named route
        var name = this._getValue(params[0]); // Relative route?


        if (/^\./.test(name)) {
          // Current name?
          var curName = App().currentRoute.route.name;
          if (!curName) throw new Error('The current route does not have a name, so relative links are not possible from here'); // ..? (Level up)

          while (/^\.\./.test(name)) {
            // Remove last part
            var parts = curName.split(/\./);
            parts.pop();
            curName = parts.join('.');
            name = name.replace(/^\./, '');
          } // Add it.


          name = curName + name; // Remove any trailing dots

          name = name.replace(/\.+$/, '');
        } // Find route


        var route = App().router.namedRoutes.get(name);
        if (!route) throw new Error('There is no route with the name "' + name + '"'); // Make uri

        var attributes = _.mapObject(attributeHash, function (value) {
          return _this2._getValue(value);
        });

        var uri = route.makeUrl(attributes); // Query?

        if (attributeHash.query) {
          // Try to decode as JSON
          var query = attributeHash.query;

          if (typeof query === 'string') {
            try {
              // Parse JSON
              query = JSON.parse(query);
            } catch (e) {// Ok, then we use it as it is
            }
          } // Convert to querystring


          if (_typeof(query) === 'object') {
            query = queryString.stringify(query);
          } // Add to URL


          uri = "".concat(uri, "?").concat(query);
        } // Make the link


        return this.link([uri], attributeHash, block);
      }
    }, {
      key: "touchLink",
      value: function touchLink(params, attributeHash, block, morph, renderer, scope, visitor) {
        // Add hammertime
        attributeHash.hammerTime = true;
        if (!attributeHash.event) attributeHash.event = 'tap';
        return this.link(params, attributeHash, block, morph, renderer, scope, visitor);
      }
    }, {
      key: "touchLinkTo",
      value: function touchLinkTo(params, attributeHash, block, morph, renderer, scope, visitor) {
        // Add hammertime
        attributeHash.hammerTime = true;
        if (!attributeHash.event) attributeHash.event = 'tap';
        return this.linkTo(params, attributeHash, block, morph, renderer, scope, visitor);
      } ////////////////////////
      // Control statements //
      ////////////////////////

      /**
       * @method each
       */

    }, {
      key: "each",
      value: function each(params, attributeHash, blocks, morph
      /*, renderer, scope, visitor*/
      ) {
        // Check uid for this each-block
        var eachUid = Utils.uidFor(morph); // Get the value

        var list = this._getValue(params[0]);

        Utils.each(list, function (item, i) {
          // Get a unique id for the item.
          var uid = Utils.uidFor(item);
          var itemKey = 'each:' + eachUid + ':' + i + ':' + uid; // Render item

          blocks.template.yieldItem(itemKey, [item, i]);
        });
      }
      /**
       * @method reverseEach
       */

    }, {
      key: "reverseEach",
      value: function reverseEach(params, attributeHash, blocks, morph
      /*, renderer, scope, visitor*/
      ) {
        // Check uid for this each-block
        var eachUid = Utils.uidFor(morph); // Get the value

        var list = this._getValue(params[0]);

        Utils.reverseEach(list, function (item, i) {
          // Get a unique id for the item.
          var uid = Utils.uidFor(item);
          var itemKey = 'each:' + eachUid + ':' + i + ':' + uid; // Render item

          blocks.template.yieldItem(itemKey, [item, i]);
        });
      }
    }, {
      key: "repeat",
      value: function repeat(params, attributeHash, blocks, morph) {
        var repeatUid = Utils.uidFor(morph);

        var times = this._getValue(params[0]);

        for (var q = 0; q < times; q++) {
          var itemKey = 'repeat:' + repeatUid + ':' + q;
          blocks.template.yieldItem(itemKey, [q, q]);
        }
      }
      /**
       * @method if	 
       */

    }, {
      key: "if",
      value: function _if(params, attributeHash, blocks
      /*, morph, renderer, scope, visitor*/
      ) {
        // Get the value
        var value = this._getValue(params[0]);

        return this._ifUnless(params, blocks, Utils.isTruthlike(value));
      }
    }, {
      key: "ifOne",
      value: function ifOne(params, attributeHash, blocks
      /*, morph, renderer, scope, visitor*/
      ) {
        var _this3 = this;

        var trueConditions = _.filter(this._getValue(params), function (value) {
          return !!_this3._getValue(value);
        });

        return this._ifUnless(params, blocks, Utils.isTruthlike(trueConditions.length > 0));
      }
    }, {
      key: "ifAll",
      value: function ifAll(params, attributeHash, blocks
      /*, morph, renderer, scope, visitor*/
      ) {
        var _this4 = this;

        var trueConditions = _.filter(this._getValue(params), function (value) {
          return !!_this4._getValue(value);
        });

        return this._ifUnless(params, blocks, Utils.isTruthlike(trueConditions.length === params.length));
      }
      /**
       * @method unless
       */

    }, {
      key: "unless",
      value: function unless(params, attributeHash, blocks
      /*, morph, renderer, scope, visitor*/
      ) {
        // Get the value
        var value = this._getValue(params[0]);

        return this._ifUnless(params, blocks, !Utils.isTruthlike(value));
      }
    }, {
      key: "_ifUnless",
      value: function _ifUnless(params, blocks, show) {
        // Is the param truth-like?
        if (show) {
          // Is it a yielding-if?
          if (blocks.template && blocks.template.yield) {
            blocks.template.yield(); // Or parameter-if?
          } else {
            return this._getValue(params[1]);
          }
        } else {
          // Render the inverse yield
          if (blocks.inverse && blocks.inverse.yield) {
            blocks.inverse.yield(); // Or the inverse param
          } else {
            return this._getValue(params[2]);
          }
        }
      } //////////////////////
      // Boolean switches //
      //////////////////////

    }, {
      key: "either",
      value: function either(params) {
        // Look for a truthlike param
        var values = this._getValues(params);

        for (var q = 0; q < values.length; q++) {
          if (Utils.isTruthlike(values[q])) return true;
        }

        return false;
      }
    }, {
      key: "neither",
      value: function neither(params) {
        return !this.either(params);
      }
    }, {
      key: "both",
      value: function both(params) {
        // Look for a non-truthlike param
        var values = this._getValues(params);

        for (var q = 0; q < values.length; q++) {
          if (!Utils.isTruthlike(values[q])) return false;
        }

        return true;
      } ////////////
      // Values //
      ////////////

    }, {
      key: "concat",
      value: function concat(params, attributeHash
      /*, blocks, morph, renderer, scope, visitor*/
      ) {
        attributeHash = _.defaults(attributeHash, {
          separator: ''
        });
        return this._getValues(params).join(attributeHash.separator);
      }
    }, {
      key: "object",
      value: function object(params, attributeHash) {
        var _this5 = this;

        // Convert attributes to object
        var obj = {};

        _.each(attributeHash, function (value, key) {
          obj[key] = _this5._getValue(value);
        });

        return obj;
      }
    }, {
      key: "get",
      value: function get(params) {
        // Get params
        var obj = this._getValue(params[0]);

        var key = this._getValue(params[1]); // Is it an observable?


        if (obj instanceof Observable || obj instanceof ObservableArray) {
          return obj.get(key);
        } else {
          return obj[key];
        }
      }
    }, {
      key: "firstIn",
      value: function firstIn(params) {
        var arr = this._getValue(params[0]);

        if (arr instanceof ObservableArray) {
          return arr.first();
        } else {
          return _.first(arr);
        }
      }
    }, {
      key: "equal",
      value: function equal(params) {
        // Get params
        var value1 = this._getValue(params[0]);

        var value2 = this._getValue(params[1]);

        return value1 == value2;
      }
    }, {
      key: "notEqual",
      value: function notEqual(params) {
        return !this.equal(params);
      }
    }, {
      key: "not",
      value: function not(params) {
        var v = this._getValue(params[0]);

        if (v instanceof ObservableArray) v = v.length;
        return !v;
      }
    }, {
      key: "isNull",
      value: function isNull(params) {
        return this._getValue(params[0]) === null;
      }
    }, {
      key: "isSet",
      value: function isSet(params) {
        var value = this._getValue(params[0]);

        return value !== null && value !== undefined;
      }
    }, {
      key: "gt",
      value: function gt(params) {
        // Get params
        var value1 = this._getValue(params[0]);

        var value2 = this._getValue(params[1]);

        return value1 > value2;
      }
    }, {
      key: "gte",
      value: function gte(params) {
        // Get params
        var value1 = this._getValue(params[0]);

        var value2 = this._getValue(params[1]);

        return value1 >= value2;
      }
    }, {
      key: "lt",
      value: function lt(params) {
        // Get params
        var value1 = this._getValue(params[0]);

        var value2 = this._getValue(params[1]);

        return value1 < value2;
      }
    }, {
      key: "lte",
      value: function lte(params) {
        // Get params
        var value1 = this._getValue(params[0]);

        var value2 = this._getValue(params[1]);

        return value1 <= value2;
      }
    }, {
      key: "isObject",
      value: function isObject(params) {
        // Get param
        var value = this._getValue(params[0]);

        return value instanceof Object;
      }
    }, {
      key: "valueOr",
      value: function valueOr(params) {
        var value = this._getValue(params[0]);

        var defaultValue = this._getValue(params[1]);

        return value ? value : defaultValue;
      }
    }, {
      key: "fallback",
      value: function fallback(params) {
        // Loop to find first non-null value
        for (var i in params) {
          var v = this._getValue(params[i]);

          if (v) return v;
        }
      } /////////////
      // Methods //
      /////////////

    }, {
      key: "method",
      value: function method(params) {
        // Get params
        params = this._getValues(params);
        var obj = params.shift(params);
        var key = params.shift(params); // No method

        if (!obj[key]) throw new Error("Problem in 'method'-helper: there is no method '".concat(key, "' on the object")); // Do it.

        return obj[key].apply(obj, params);
      } ////////////
      // Models //
      ////////////

    }, {
      key: "isDirty",
      value: function isDirty(params) {
        // Get params
        var model = this._getValue(params[0]);

        var attributes = [];

        for (var q = 1; q < params.length; q++) {
          attributes.push(this._getValue(params[q]));
        } // Any of those dirty?


        return !!_.find(attributes, function (attr) {
          return model.isDirty(attr);
        });
      } //////////////////
      // HTML Helpers //
      //////////////////

    }, {
      key: "attributesFrom",
      value: function attributesFrom(params, attributeHash, blocks, morph) {
        console.log(params, attributeHash, blocks, morph);
      } /////////////
      // Strings //
      /////////////

    }, {
      key: "isNumeric",
      value: function isNumeric(params) {
        var string = this._getValue(params[0]);

        return /^-?\d*(\.\d+)?$/.test(string);
      }
    }, {
      key: "camelize",
      value: function camelize(params) {
        var string = this._getValue(params[0]);

        var capitalFirstLetter = !!this._getValue(params[1]);
        return inflection.camelize(string, !capitalFirstLetter);
      }
    }, {
      key: "string",
      value: function string(params) {
        // First is method, second is str
        var args = this._getValues(params);

        var method = args.shift();
        var str = args.shift();
        if (!str) return null;
        return str[method].apply(str, args);
      }
    }, {
      key: "underscore",
      value: function underscore(params) {
        // First is method, second is str
        var args = this._getValues(params);

        var method = args.shift();
        return _[method].apply(this, args);
      } ////////////
      // Arrays //
      ////////////

    }, {
      key: "count",
      value: function count(params) {
        var value = this._getValue(params[0]);

        if (value instanceof Observable) {
          return _.size(value.attributes);
        }

        return value.length;
      }
    }, {
      key: "contains",
      value: function contains(params) {
        var list = this._getValue(params[0]);

        var value = this._getValue(params[1]);

        return _.contains(list, value);
      } /////////////////////
      // Dates and times //
      /////////////////////

    }, {
      key: "moment",
      value: function moment$$1(params) {
        var value = this._getValue(params[0]);

        if (!moment.isMoment(value)) {
          value = moment(value);
        }

        return value;
      }
    }, {
      key: "momentFormat",
      value: function momentFormat(params) {
        var value = this._getValue(params[0]);

        var format = this._getValue(params[1]);

        if (moment.isMoment(value)) {
          return value.format(format);
        } else {
          return value;
        }
      }
    }, {
      key: "momentIsAfter",
      value: function momentIsAfter(params) {
        var moment1 = this._getValue(params[0]);

        var moment2 = this._getValue(params[1]);

        if (moment.isMoment(moment1) && moment.isMoment(moment2)) {
          return moment1.isAfter(moment2);
        }

        return false;
      }
    }, {
      key: "fileSize",
      value: function fileSize(params) {
        var value = this._getValue(params[0]);

        return filesize_min(value);
      } /////////////
      // Numbers //
      /////////////

    }, {
      key: "add",
      value: function add(params) {
        var values = this._getValues(params);

        return values.reduce(function (total, item) {
          return item + total;
        }, 0);
      }
    }, {
      key: "subtract",
      value: function subtract(params) {
        var values = this._getValues(params);

        var startValue = values.shift();
        return values.reduce(function (total, item) {
          return total - item;
        }, startValue);
      }
    }, {
      key: "numberFormat",
      value: function numberFormat(params) {
        var value = this._getValue(params[0]);

        if (value === undefined) return '';
        return value.toLocaleString(window.Chicken.app.i18n.language);
      }
    }, {
      key: "round",
      value: function round(params) {
        var value = this._getValue(params[0]);

        var digits = params.length > 1 ? this._getValue(params[1]) : 0;

        if (digits > 0) {
          var pow = Math.pow(10, digits);
          return Math.round(value * pow) / pow;
        } else {
          return Math.round(value);
        }
      }
    }, {
      key: "max",
      value: function max(params) {
        var values = this._getValues(params);

        return _.max(values);
      }
    }, {
      key: "min",
      value: function min(params) {
        var values = this._getValues(params);

        return _.min(values);
      }
    }, {
      key: "multiply",
      value: function multiply(params) {
        var values = this._getValues(params);

        var result = 1;

        _.each(values, function (v) {
          result *= parseFloat(v);
        });

        return result;
      } ///////////
      // Debug //
      ///////////

    }, {
      key: "log",
      value: function log(params
      /*, attributeHash, blocks, morph, renderer, scope, visitor*/
      ) {
        console.log.apply(console, this._getValues(params));
      }
    }, {
      key: 'query-params',
      value: function queryParams(params, attributeHash
      /*, blocks, morph, renderer, scope, visitor*/
      ) {
        return queryString.stringify(this._getHashValues(attributeHash));
      } //////////////////
      // Localization //
      //////////////////

    }, {
      key: "t",
      value: function t(params, attributeHash) {
        // Get the key
        var key = this._getValue(params[0]); // Get from app


        return App().i18n.translate(key, attributeHash, this._getValue(params[1]));
      }
    }, {
      key: "tText",
      value: function tText(params, attributeHash) {
        // Get value
        var v = this.t(params, attributeHash); // Plainify

        return $('<span>' + v + '</span>').text();
      } //////////////
      // Internal //
      //////////////

    }, {
      key: "_getValue",
      value: function _getValue(param) {
        return this.renderer.hooks.getValue(param);
      }
    }, {
      key: "_getValues",
      value: function _getValues(params) {
        var _this6 = this;

        return params.map(function (value) {
          return _this6._getValue(value);
        });
      }
    }, {
      key: "_getHashValues",
      value: function _getHashValues(attributeHash) {
        var _this7 = this;

        var result = {};

        _.each(attributeHash, function (value, key) {
          result[key] = _this7._getValue(value);
        });

        return result;
      }
    }]);

    return Helpers;
  }();

  Helpers.User = {};

  /**
   * @module Dom
   */

  var Renderer =
  /**
   * @class Dom.Renderer
   * 
   * @constructor
   */
  function Renderer() {
    var _this = this;

    _classCallCheck(this, Renderer);

    /**
     * @property dom
     * @type {HTMLBars.DOMHelper}
     */
    this.dom = new DOMHelper();
    /**
     * Hooks are the way to configure the way HTMLBars renders your
     * templates. Renderer comes pre-configured with hooks that allow you
     * to bind to Observables (models) and ObservableArrays (collections).
     * 
     * @property hooks
     * @type {object}
     */

    this.hooks = _.defaults({
      /**
       * The `get` hook is responsible for retrieving Bindings from the data store.
       * 
       * @method hooks.get
       * @param  {Renderer} 	renderer   	The Renderer instance (this)
       * @param  {Scope} 		scope 		The Scope in which the `get` was called, 
       *                           		containing the data that is available in this Scope
       * @param  {string} 	path 		The path (key) of the variable to retrieve 		
       * @return {mixed}     	The retrieved value
       */
      get: function get(renderer, scope, path) {
        // Get first part
        var keys = path.split(/\./); // Look into local data

        var appliedScope = scope.self;

        if (scope.localPresent[keys[0]]) {
          appliedScope = scope.locals[keys[0]];
          keys.shift();
          path = keys.join('.');
        } // Is data an observable?


        if (appliedScope instanceof Observable && path.length > 0 || appliedScope instanceof ObservableArray) {
          // Already a binding?
          if (appliedScope._bindings === undefined) appliedScope._bindings = {};

          if (appliedScope._bindings[path]) {
            // Return existing binding
            return appliedScope._bindings[path];
          } // Create a binding


          var binding = new Binding(_this, appliedScope, path); // Store it

          appliedScope._bindings[path] = binding; // Get the value

          return binding;
        } else if (path === '') {
          // Return the scope itself
          return appliedScope;
        } else {
          // Do native thing (deep-get)
          var value = appliedScope;

          for (var q = 0; q < keys.length; q++) {
            if (value === undefined || value === null) return value;
            value = value[keys[q]];
          }
        }

        return value;
      },

      /**
       * Get value from reference (Binding)
       *
       * @method hooks.getValue
       * @param  {Binding} reference 
       * @return {mixed}           
       */
      getValue: function getValue(reference) {
        // Is it a binding?
        if (reference instanceof Binding) return reference.getValue(); // A helper?

        if (reference instanceof HelperProxy) return reference.invoke(); // Just a value

        return reference;
      },

      /**
       * Link a morph to one or more values (in our case Bindings)
       *
       * @method hooks.linksRenderNode
       * @param  {HTMLBarsMorph} morph    
       * @param  {Dom.Renderer} renderer 
       * @param  {Scope} scope    
       * @param  {string} type   				Values can be `@range`, `@attribute`, or helper names
       * @param  {array} values     			Array of values that have been linked to the morph. The should be Binding instances
       * @return 
       */
      linkRenderNode: function linkRenderNode(morph, renderer, scope, type, values) {
        // Add this morph to all involved bindings
        _.each(values, function (binding) {
          // Is it a binding?
          if (binding instanceof Binding) {
            binding.addMorph(morph, scope);
          }
        });
      },
      willRenderNode: function willRenderNode(morph
      /*, renderer, scope*/
      ) {
        // Store morph so we can bind it when we get subexpressions, etc
        _this.currentMorph = morph;
      },
      subexpr: function subexpr(renderer, scope, helperName, params, hash) {
        // Loop through parameters to find Bindings
        _.each(params, function (param) {
          if (param instanceof Binding) {
            // Add morph
            if (renderer.currentMorph) param.addMorph(renderer.currentMorph, scope);
          }
        }); // Original behavior


        return Hooks.subexpr(renderer, scope, helperName, params, hash);
      },
      createFreshScope: function createFreshScope() {
        return {
          self: null,
          blocks: {},
          locals: {},
          localPresent: {},
          actions: {},
          view: null
        };
      },
      createChildScope: function createChildScope(parentScope) {
        // Create a new scope extending the parent
        var scope = Object.create(parentScope);
        scope.locals = Object.create(parentScope.locals);
        scope.localPresent = Object.create(parentScope.localPresent);
        scope.blocks = Object.create(parentScope.blocks);
        scope.actions = Object.create(parentScope.actions); // Check is parent is a view

        if (parentScope.self instanceof View) {
          // Bubble the actions
          scope.actions = _.extend(scope.actions, parentScope.self.actions); // No a component?

          if (!(parentScope.self instanceof Component)) {
            scope.view = parentScope.self;
          } else {
            scope.component = parentScope.self;
            scope.view = scope.component.view;
          }
        }

        return scope;
      },
      findHelper: function findHelper(renderer, scope, helperName) {
        // Scope helper?
        if (scope.self && typeof scope.self.getHelper === 'function') {
          var helper = scope.self.getHelper(helperName);
          if (helper) return helper;
        } // Use helper?


        if (Helpers.User[helperName]) {
          return Helpers.User[helperName];
        } // Chicken helper?


        if (renderer.helpers[helperName]) {
          return renderer.helpers[helperName];
        }
      },
      lookupHelper: function lookupHelper(renderer, scope, helperName) {
        // Find a helper
        var helper = _this.hooks.findHelper(renderer, scope, helperName);

        if (!helper) throw new Error('There is no helper registered with the name "' + helperName + '"'); // Create the wrapper

        var proxy = new HelperProxy(helperName, helper, _this.helpers);
        return proxy;
      },
      invokeHelper: function invokeHelper(morph, renderer, scope, visitor, params, attributeHash, helper, options) {
        // Is it a component?
        if (helper instanceof ComponentDefinition) {
          // Call component hook
          return {
            value: _this.hooks.component(morph, renderer, scope, helper, params, attributeHash, options, visitor)
          };
        } // Do we have a morph?


        if (morph) {
          // Loop through params to hook up bindings
          _.each(params, function (value) {
            if (value instanceof Binding) {
              value.addMorph(morph, scope);
            }
          }); // And the attribute


          _.each(attributeHash, function (value) {
            if (value instanceof Binding) {
              value.addMorph(morph, scope);
            }
          });
        } // Set arguments 


        helper.setArguments(params, attributeHash, options, morph, renderer, scope, visitor); // Invoke it once to see if the helper returns a value, or is a block-type helper

        var helperResult = helper.invoke();
        var helperValue;

        if (helperResult === undefined) {
          // No result, then we don't want to return a value
          helperValue = undefined;
        } else {
          // A value was returned, meaning this helper is used as a value getter, and might need
          // to be invoked again when bound values change: thus, return the proxy
          helperValue = helper;
        } // Invoke the helper and give back the value


        return {
          value: helperValue,
          link: !!helperValue
        };
      },
      component: function component(morph, renderer, scope, tagName, params, attributeHash, options, visitor) {
        ////////////////////////////////////////////////////////////////
        // Is the component already created, and is this a re-render? //
        ////////////////////////////////////////////////////////////////
        var state = morph.getState();

        if (state.component) {
          state.component.scheduleRevalidate();
          return;
        } ///////////////////////////////////
        // Create the component instance //
        ///////////////////////////////////
        // Get definition


        var definition = Component.registry.get(tagName); // No known component?

        if (!definition) {
          // Do the component fallback.
          var element = renderer.dom.createElement(tagName);

          _.each(attributeHash, function (value, key) {
            element.setAttribute(key, renderer.hooks.getValue(value));
          });

          var fragment = render(options.default, renderer, scope, {}).fragment;
          element.appendChild(fragment);
          morph.setNode(element);
          return;
        } // Create a new scope and use the component as self


        var newScope = renderer.hooks.createScope(renderer, scope); // Are there attributes defined as an attribute?

        if (attributeHash && attributeHash.attributes) {
          // A binding?
          var attrs = attributeHash.attributes;
          if (attrs instanceof Binding) attrs = attrs.getValue(); // A hash?

          if (attrs instanceof Object) {
            // Replace
            delete attributeHash.attributes;
            Utils.each(attrs, function (value, key) {
              attributeHash[key] = value;
            });
          }
        } // Create it


        var component = new Component(definition.name, definition.source, morph, newScope, params, attributeHash, visitor, options, definition.initCallback, definition.methods, _this);
        newScope.self = component; // Now render it.

        component.render(); // Store it.

        state.component = component;
      },

      /**
       * Check if the given path is a known class (component, or block, inline)
       *
       * @method hooks.classify
       * @param  {Dom.Renderer} renderer 
       * @param  {Object} scope    
       * @param  {string} path     
       * @return {string}          
       */
      classify: function classify(renderer, scope, path) {
        // Is this a known component?
        if (Component.registry.has(path)) return 'component'; // Nothing known.

        return false;
      },
      getBlock: function getBlock(scope, key) {
        // Is the block known?
        var block = scope.blocks[key];
        if (block) return block; // Are we inside a component?

        if (scope.self instanceof Component) {
          return scope.self.getSubTemplate(key);
        } // Nothing there


        return null;
      },
      getActionScope: function getActionScope(scope, key) {
        // Check the scope
        if (scope.actions && scope.actions[key]) {
          return scope;
        } else if (scope.locals.actions && scope.locals.actions[key]) {
          // Use local action
          return scope.locals;
        } else if (scope.self.actions && scope.self.actions[key]) {
          // Use that
          return scope.self;
        } else if (scope.view && scope.view.actions && scope.view.actions[key]) {
          // Use the veiw
          return scope.view;
        } else {
          return false;
        }
      },
      getAction: function getAction(scope, key) {
        var appliedScope = _this.hooks.getActionScope(scope, key);

        if (appliedScope) {
          // Get the action
          return appliedScope.actions[key];
        }

        return false;
      },
      keywords: _.defaults({
        /**
         * The action keyword creates an ActionBinding instance and 
         * stores it on the element. The `action` helper can then use 
         * this ActionBinding to apply it on the DOM.
         *
         * @method keywords.action
         */
        action: function action(morph, renderer, scope, params, attributeHash) {
          // Check binding
          if (morph.actionBindings) return; // Get action scope

          var actionCallback = renderer.hooks.getAction(scope, params[0]);

          if (!actionCallback) {
            // Lazy action?
            if (attributeHash.lazy === true) {
              // Use current scope so send action lazily
              actionCallback = function actionCallback() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                scope.self.sendAction(params[0], args);
              };
            } else {
              // Undefined action.
              throw new Error("Could not find action \"".concat(params[0], "\" within the scope"));
            }
          } // Get action


          var parameters = params.slice(1); // Create action binding

          var binding = new ActionBinding(renderer, morph, params[0], actionCallback, parameters, attributeHash, scope.self);
          morph.actionBindings = binding;
        }
      }, Hooks.keywords)
    }, Hooks);
    /**
     * @property helpers
     * @type {Dom.Helpers}
     */

    this.helpers = new Helpers(this);
    /**
     * @property partials
     * @type {Object}
     */

    this.partials = {};
    /**
     * @property useFragmentCache
     * @default true
     * @type {Boolean}
     */

    this.useFragmentCache = true;
  };

  var Redirect =
  /*#__PURE__*/
  function () {
    function Redirect(uri) {
      _classCallCheck(this, Redirect);

      this.uri = uri;
      this.flash = {};
    }

    _createClass(Redirect, [{
      key: "with",
      value: function _with(dataOrKey) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        // Value?
        var data = dataOrKey;

        if (value) {
          data = {};
          data[dataOrKey] = value;
        }

        $.extend(this.flash, data);
        return this;
      }
    }, {
      key: "withError",
      value: function withError(message) {
        return this.with('error', message);
      }
    }]);

    return Redirect;
  }();

  /**
   * @module Routing
   */
  var Controller =
  /*#__PURE__*/
  function () {
    /**
     * @class Routing.Controller
     * 
     * @constructor
     * @param {Routing.Action} action  The routing action that leads to the creation of this controller
     */
    function Controller(action, application) {
      _classCallCheck(this, Controller);

      /**
       * @property action
       * @type {Routing.Action}
       */
      this.action = action;
      /**
       * @property application
       * @type {Application}
       */

      this.application = application;
    } ////////////////
    // Properties //
    ////////////////

    /**
     * Request parameters
     * 
     * @property parameters
     * @type {Map}
     */


    _createClass(Controller, [{
      key: "parameters",
      get: function get() {
        return this.action.parameters;
      }
      /**
       * The ViewContainer into which this controller action will render
       * 
       * @property viewContainer
       * @type {Dom.ViewContainer}
       */

    }, {
      key: "viewContainer",
      get: function get() {
        return this.action.viewContainer;
      }
      /**
       * @property request
       * @type {Routing.Request}
       */

    }, {
      key: "request",
      get: function get() {
        return this.action.request;
      }
      /**
       * @property route
       * @type {Routing.Route} 
       */

    }, {
      key: "route",
      get: function get() {
        return this.action.route;
      }
    }]);

    return Controller;
  }();

  Controller.registry = new Map();

  /**
   * @module Routing
   */
  var RoutingError = function RoutingError(code) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var request = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, RoutingError);

    this.code = code;
    this.message = message;
    this.request = request;
  };

  /**
   * @module Routing
   */

  var Action =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(Action, _Obj);

    /**
     * @class Routing.Action
     * @extends Core.Obj
     */
    function Action(targetViewContainer, controllerActionOrCallback, request) {
      var _this;

      _classCallCheck(this, Action);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Action).call(this)); ////////////////
      // Attributes //
      ////////////////

      /**
       * The name of the ViewContainer that this action is targeting.
       * 
       * @property targetViewContainer
       * @type {string}
       */

      _this.targetViewContainer = targetViewContainer;
      /**
       * The Request instance that was used to create this action
       * 
       * @property request
       * @type {Routing.Request}
       */

      _this.request = request;
      /**
       * The Route that defined this action
       *
       * @property route
       * @type {Routing.Route}
       */

      _this.route = null;
      /**
       * The Route that matched the Request
       *
       * @property matchedRoute
       * @type {Routing.Route}
       */

      _this.matchedRoute = null;
      /**
       * The RouteMatch that this Action is a part
       *
       * @property routeMatch
       * @type {Routing.RouteMatch}
       */

      _this.routeMatch = null;
      /**
       * The instance of the Controller that has been created by 
       * this action.
       * 
       * @property controller
       * @type {Routing.Controller}
       */

      _this.controller = null;
      /**
       * The name of the Controller class used by this action
       * 
       * @property controllerClass
       * @type {string}
       */

      _this.controllerClass = null;
      /**
       * The name of the Controller method used by this action
       * 
       * @property controllerMethod
       * @type {string}
       */

      _this.controllerMethod = null;
      /**
       * A callback function, when the route did not configure
       * a Controller to be used, but an inline callback instead.
       * 
       * @property callback
       * @type {function}
       */

      _this.callback = false;
      /**
       * The name of the transition animation to use to get from 
       * previous View to new View
       * 
       * @property transition
       * @type {string}
       */

      _this.transition = null;
      /**
       * A map of request parameters that are supplied to this action.
       * 
       * @property parameters
       * @type {Map}
       */

      _this.parameters = new Map();
      /**
       * An array of request parameters, in the order of the route's
       * pattern definition
       *
       * @property parameterArray
       * @type {Array}
       */

      _this.parameterArray = [];
      /**
       * An array of other Actions that this Action depends on, 
       * meaning it will wait for them to finish, before executing.
       *
       * This is useful when you have a route where the second action
       * renders into a ViewContainer that is created by the first action.
       * Child routes will automatically wait for the parent route to finish
       * before running it's own actions.
       * 
       * @property dependsOn
       * @type {Array}
       */

      _this.dependsOn = [];
      /**
       * The result of the Action once it has been executed
       *
       * @property result
       * @type {mixed}
       */

      _this.result = false; ///////////////////////////
      // Check passed argument //
      ///////////////////////////

      if (typeof controllerActionOrCallback === 'string') {
        // A view uri?
        if (controllerActionOrCallback.match(/^[a-z\-\d\.]+$/)) {
          // Create a simple view callback
          _this.callback = function () {
            return new View(controllerActionOrCallback);
          };
        } else {
          // Parse controller name
          var match = XRegExp.exec(controllerActionOrCallback, Action.getControllerActionRegExp());
          if (!match) throw new TypeError('Invalid action string: ' + controllerActionOrCallback + '. Use controller@method format.'); // Store this

          _this.controllerClass = match.class;
          _this.controllerAction = match.action;
        }
      } else if (typeof controllerActionOrCallback === 'function') {
        // Store it
        _this.callback = controllerActionOrCallback;
      } else {
        throw new TypeError('[Routing.Action] Did not understand action: ' + controllerActionOrCallback);
      }

      return _this;
    }

    _createClass(Action, [{
      key: "execute",
      value: function execute(application) {
        var _this2 = this;

        // Make the promise
        return this.promise('complete', function (resolve, reject) {
          // Get the view container
          _this2.viewContainer = application.getViewContainer(_this2.targetViewContainer);

          if (_this2.viewContainer === undefined) {
            reject('There is no ViewContainer available with the name "' + _this2.targetViewContainer + '"');
            return;
          } // Is there currently an action in this vc?


          if (_this2.viewContainer.currentAction) {
            // Was it triggered by the same route?
            if (Utils.uidFor(_this2.viewContainer.currentAction.route) === Utils.uidFor(_this2.route)) {
              // Are the arguments the same as well?
              var currentParams = JSON.stringify(_this2.viewContainer.currentAction.parameterArray);
              var newParams = JSON.stringify(_this2.parameterArray);

              if (currentParams === newParams) {
                // Does the route depend on queryString, and did that change?
                if (_this2.viewContainer.currentAction.route.acceptsQuery) ; else if (_.size(_this2.request.flash) > 0 && _this2.viewContainer.currentAction.route.acceptsFlash) ; else {
                  // That means, we've just navigated within nested routes of that page, and this action can be skipped.
                  resolve();
                  return;
                }
              }
            }
          } // The VC is busy now.


          _this2.viewContainer.setLoading(true); ////////////////
          // Controller //
          ////////////////


          if (_this2.controllerClass) {
            // Make controller
            var ChickenController = Controller.registry.get(_this2.controllerClass);

            if (ChickenController === undefined) {
              _this2._handleError('No controller defined with name "' + _this2.controllerClass + '"');

              return;
            }

            _this2.controller = new ChickenController(_this2); // Call action

            var controllerAction = _this2.controller[_this2.controllerAction];

            if (controllerAction === 'undefined' || typeof controllerAction !== 'function') {
              _this2._handleError('There is no action on the "' + _this2.controllerClass + '" controller with the name "' + _this2.controllerAction + '"');

              return;
            } // Make the call


            var actionResult;

            try {
              actionResult = controllerAction.apply(_this2.controller, _this2.parameterArray);
            } catch (error) {
              _this2._handleError(error, resolve, reject);

              return;
            }

            _this2._processResult(actionResult, resolve, reject);
          } //////////////
          // Callback //
          //////////////
          else if (_this2.callback) {
              // Do the callback
              _this2._processResult(_this2.callback.apply(_this2.controller, _this2.parameterArray), resolve, reject);
            } else {
              reject('There is no controller or callback defined... This shouldn\'t happen.');
              return;
            }
        }).then(function (result) {
          // Store result
          _this2.result = result;
        }, function ()
        /* error */
        {
          // No longer loading
          if (_this2.viewContainer) _this2.viewContainer.setLoading(false);
        });
      }
    }, {
      key: "leave",
      value: function leave() {
        // View?
        if (this.result instanceof View) {
          return this.result.leave();
        } // Leaving is fine.


        return new Promise(function (resolve) {
          resolve();
        });
      }
    }, {
      key: "_processResult",
      value: function _processResult(result, resolve, reject) {
        var _this3 = this;

        /////////////////////////////////////
        // A 404 in the controller action? //
        /////////////////////////////////////
        if (result === false) {
          result = new RoutingError(404, 'Not found');
        } /////////////////
        // A redirect? //
        /////////////////


        if (result instanceof Redirect) {
          //@TODO Cancel the running request?
          App().goto(result.uri, null, result.flash);
        } //////////////////////
        // A routing error? //
        //////////////////////
        else if (result instanceof RoutingError) {
            // Handle it
            this._handleError(result, resolve, reject);
          } ///////////////////////////
          // Is the result a view? //
          ///////////////////////////
          else if (result instanceof View) {
              // Render the view
              var view = result;
              view.render().then(function () {
                // Add it
                _this3.viewContainer.setAction(_this3);

                view.addToContainer(_this3.viewContainer);
                resolve(view);
              }, function (error) {
                _this3._handleError(error, resolve, reject);
              });
            } //////////////////////////////
            // Is the result a promise? //
            //////////////////////////////
            else if (result instanceof Promise) {
                // Wait for it to finish
                result.then(function (promiseResult) {
                  // Process result again!
                  _this3._processResult(promiseResult, resolve, reject);
                }, function (error) {
                  _this3._handleError(error, resolve, reject);
                });
              } /////////////////////////////////
              // Is it rendarable by itself? //
              /////////////////////////////////
              else {
                  // A string
                  if (typeof result === 'string' || result instanceof DocumentFragment) {
                    // Set content
                    this.viewContainer.setAction(this);
                    this.viewContainer.setContent(result);
                    resolve(result);
                  } else {
                    // Don't know how to render this...
                    reject('I don\'t know how to render the result for "' + this.targetViewContainer + '"');
                    return;
                  }
                }
      }
    }, {
      key: "_handleError",
      value: function _handleError(error, resolve, reject) {
        // Error object?
        if (typeof error === 'string') {
          error = new Error(error);
        } // Check router error handling, given priority to action, then route


        var route = this.routeMatch.route;
        var errorHandlers = route.router.getErrorHandlers(error, route); // Try to get one

        var handlerResult = false;

        while (errorHandlers.length > 0) {
          // Get next
          var callback = errorHandlers.shift(); // Is the callback actually a string (controller action)?

          if (typeof callback === 'string') {
            // Get the controller action callback
            var _callback$split = callback.split(/@/),
                _callback$split2 = _slicedToArray(_callback$split, 2),
                controllerName = _callback$split2[0],
                action = _callback$split2[1];

            if (controllerName && action) {
              // Same as me?
              var ctrl = void 0;

              if (this.controllerClass === controllerName) {
                ctrl = this.controller;
              } else {
                var ChickenController = Controller.registry.get(controllerName);
                if (!ChickenController) throw new Error('No controller defined with name "' + controllerName + '"');
                ctrl = new ChickenController(this);
              } // Get action


              callback = ctrl[action];

              if (callback === 'undefined' || typeof callback !== 'function') {
                throw new Error('There is no action on the "' + controllerName + '" controller with the name "' + action + '"');
              }
            } // Is it a route then


            if (typeof callback === 'string') {
              (function () {
                var viewUri = callback;

                callback = function callback() {
                  return new View(viewUri);
                };
              })();
            }
          } // Call it.


          handlerResult = callback.apply(this, [this, error]); // Something?

          if (handlerResult) break;
        } // No result?


        if (!handlerResult) {
          throw error;
        } // Treat the result as my action-result!


        this._processResult(handlerResult, resolve, reject);
      }
    }]);

    return Action;
  }(Obj);

  var _controllerActionRegExp;

  Action.getControllerActionRegExp = function () {
    if (_controllerActionRegExp === undefined) {
      _controllerActionRegExp = XRegExp('^(?<class>[A-Z][a-zA-Z0-9\-\.]+)@(?<action>[a-z][a-zA-Z0-9\_]+)$');
    }

    return _controllerActionRegExp;
  };

  /**
   * @module Routing
   */

  var RouteMatch =
  /*#__PURE__*/
  function () {
    /**
     * When a Request is matched by a Route, a RouteMatch is created,
     * containing all the information necessary to process the request. 
     * The Router will use the RouteMatch to execute all the actions defined
     * in the route(s).
     * 
     * @class Routing.RouteMatch
     *
     * @constructor
     * @param {Routing.Route} 		route 			The route that matched
     * @param {array}  				regExpMatch 	The result from the XRegExp.exec call
     * @param {Routing.Request}		request 		The request that made this RouteMatch possible
     */
    function RouteMatch(route, regExpMatch, request) {
      var _this = this;

      _classCallCheck(this, RouteMatch);

      /**
       * The Route that matched
       *
       * @property route
       * @type {Routing.Route}
       */
      this.route = route;
      /**
       * The result from the XRegExp.exec call when the Route was matched
       * 
       * @property regExpMatch
       * @type {array}
       */

      this.regExpMatch = regExpMatch;
      /**
       * The request that made this RouteMatch possible
       *
       * @property request
       * @type {Routing.Request}
       */

      this.request = request;
      /**
       * The actions that are part of this match,
       * keyed by the target ViewContainer
       * 
       * @property actions
       * @type {Map}	
       */

      this.actions = new Map();
      /**
       * The parameters from the Request and matched route
       *
       * @property parameters
       * @type {Map}
       */

      this.parameters = new Map();
      /**
       * Parameters given in the URL (?a=b)
       * 
       * @property query
       * @type {Object}
       */

      this.query = queryString.parse(window.location.search); ////////////////////
      // Create actions //
      ////////////////////
      // Read parameters from match

      _.each(route.parameters, function (paramName) {
        _this.parameters.set(paramName, regExpMatch[paramName]);
      }); // Start with the matched route


      this._readActionsFromRoute(route);
    }
    /**
     * Handle leaving this RouteMatch
     *
     * @method leave
     * @param  {Routing.RouteMatch} toRoute The RouteMatch we're going to after leaving this
     * @return {Promise}
     */


    _createClass(RouteMatch, [{
      key: "leave",
      value: function leave(toRoute) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          // Loop through action results
          var leavePromises = [];

          _this2.actions.forEach(function (action, name) {
            // Get replacing action
            var replacingAction = toRoute.actions.get(name);

            if (replacingAction) {
              // Was it triggered by the same route?
              if (action.viewContainer && action.viewContainer.currentAction && Utils.uidFor(action.viewContainer.currentAction.route) === Utils.uidFor(replacingAction.route)) {
                // Are the arguments the same as well?
                var currentParams = JSON.stringify(action.parameterArray);
                var replacingParams = JSON.stringify(replacingAction.parameterArray);

                if (currentParams === replacingParams) {
                  // That means, we've just navigated within nested routes of that page, and this action will stay the same
                  return;
                }
              }
            } // Leave this action				


            leavePromises.push(action.leave());
          }); // Anything?


          if (leavePromises.length === 0) {
            resolve();
            return;
          } // When all is done


          Promise.all(leavePromises).then(function () {
            resolve();
          }, function (error) {
            reject(error);
          });
        });
      }
    }, {
      key: "_readActionsFromRoute",
      value: function _readActionsFromRoute(route) {
        var _this3 = this;

        // Collect parameters from route
        var params = new Map();
        var paramArray = [];

        _.each(route.parameters, function (paramName) {
          paramArray.push(_this3.parameters.get(paramName));
          params.set(paramName, _this3.parameters.get(paramName));
        }); // Get actions


        var myActions = {};

        _.each(route.getActions(), function (routeAction, targetViewContainer) {
          // Is there already an action defined for this target
          if (_this3.actions.has(targetViewContainer)) return; // Make it.

          var action = new Action(targetViewContainer, routeAction, _this3.request); // Set routes

          action.route = route;
          action.matchedRoute = _this3.route;
          action.routeMatch = _this3; // Set parameters

          action.parameters = params;
          action.parameterArray = paramArray; // Add it.

          myActions[targetViewContainer] = action;
        }); // Make any actions that are already there dependent on the new ones, 
        // because these actions are the parent(s) of the existing actions.


        this.actions.forEach(function (previousAction) {
          _.each(myActions, function (myAction) {
            previousAction.dependsOn.push(myAction);
          });
        }); // Add these actions

        var actionsToMakeDependentOn = [];

        _.each(myActions, function (myAction, targetViewContainer) {
          // My this action dependent on previous actions defined in this route
          _.each(actionsToMakeDependentOn, function (depAction) {
            myAction.dependsOn.push(depAction);
          }); // Add the action to my actions


          _this3.actions.set(targetViewContainer, myAction);

          actionsToMakeDependentOn.push(myAction);
        }); // Now look into the parent


        if (route.parentRoute) {
          this._readActionsFromRoute(route.parentRoute);
        } // We're done!


        return this.actions;
      }
    }]);

    return RouteMatch;
  }();

  /**
   * @module Routing
   */

  var Route =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(Route, _Obj);

    /**
     * A Route configures a uri and its actions, parameters,
     * and models.
     * 
     * @class Routing.Route
     * @extends Core.Object
     * 
     * @constructor
     * @param {Routing.Router} 	router 				The application's Router instance
     * @param {Routing.Route} 	parent 				The route that the route you are creating is to be child of. Use `null` when there is no parent.
     * @param {string} 			pattern 			The route's pattern, not including the parent's pattern
     * @param {object|string}	[actions=null]		An action string or object containing one or more actions, keyed by the target ViewContainer. 
     *                                        		If you don't define actions this route will be made abstract.
     * @param {object}			[options={}]		An object containing one or more configuration options
     */
    function Route(router, parent, pattern) {
      var _this;

      var actions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, Route);

      // Basics
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Route).call(this)); // Private vars

      _this._parameterConstraints = new Map();
      _this._actions = actions; ////////////////
      // Properties //
      ////////////////

      /**
       * The Route that this Route is nested in
       * 
       * @property parentRoute
       * @type {Routing.Route}
       */

      _this.parentRoute = parent;
      /**
       * The Router that this Route is a part of
       * 
       * @property router
       * @type {Routing.Router}
       */

      _this.router = router;
      /**
       * The defined pattern, not including any parent patterns
       * 
       * @property pattern
       * @type {string}
       */

      _this.pattern = pattern.replace(/(.)\/$/, '$1'); // Remove trailing slash

      /**
       * Route-specific error handlers
       *
       * @property errorHandlers
       * @type {Object}
       */

      _this.errorHandlers = {};
      /**
       * The parameter names used in this route
       * 
       * @property parameters
       * @type {array}
       */

      _this.parameters = [];
      /**
       * @property nested
       * @type {Array}
       */

      _this.nested = {};
      /**
       * The options used when defining this Route
       * 
       * @property options
       * @type {object}
       */

      _this.options = _.defaults(options, {
        abstract: actions === null,
        as: null,
        viewContainer: 'main',
        middleware: [],
        services: []
      });
      /**
       * The name of the route you can use to link to. This is only 
       * set if you used the 'as' option.
       * 
       * @property name
       * @type {string}
       */

      _this.name = null;
      /**
       * When true, the route's action(s) will refresh when the query string changes
       * 
       * @property acceptsQuery
       * @type {Boolean}
       */

      _this.acceptsQuery = false;
      /**
       * When true, the route's action(s) will refresh when the Request flash-data changes
       * @type {Boolean}
       */

      _this.acceptsFlash = false; // Add me to parent route

      if (parent) {
        parent.nested[_this.pattern] = _assertThisInitialized(_assertThisInitialized(_this));
      }

      return _this;
    } ////////////////////
    // Public methods //
    ////////////////////

    /**
     * Call this when you want to define routes nested under the current one. The provided callback
     * will be called with the Router as context, allowing you to use this.route to define the nested
     * routes.
     *
     * @example
     * 	Chicken.createApplication($('#application'), {
     * 		baseUrl: '/'
     * 	}).routes(function() {
     *  
     *  	this.route('/animals', 'Animal@index')                            // /animals
     *  		.nest(function() {
     *  			this.route('/dog', 'Animal@dog')                          // /animals/dog
     *  				.nest({ viewContainer: 'dogs' }, function() {
     *      				this.route('/:dogName', 'Animal@dogDetails');     // /animals/dog/:dogName
     *      				this.route('/about-dogs', 'Animal@aboutDogs');    // /animals/dog/about-dogs
     *  				});  				
     *      		this.route('/cat', 'Animal@cat');                         // /animals/cat
     *  		 });
     *  	
     *   
     * 	});
     * 	
     *
     * @method nest
     * @param {object} 		[options]   An optional options hash, to apply to all nested routes
     * @param {function} 	callback 	Your callback
     * @chainable
     */


    _createClass(Route, [{
      key: "nest",
      value: function nest() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // Check if options were given
        var callback = args.pop();
        var options = args.length > 0 ? args.pop() : {}; // Make me the parent route

        this.router.group(_.defaults({
          parentRoute: this
        }, options), callback);
        return this;
      }
    }, {
      key: "abstract",
      value: function abstract() {
        this.options.abstract = true;
        return this;
      }
      /**
       * Check whether this Route matches the given Request. If so, the method
       * will return a complete RouteMatch. If not, the method will return `false`.
       * 
       * @method match
       * @param  {Routing.Request} request     
       * @return {Routing.RouteMatch|boolean}  
       */

    }, {
      key: "match",
      value: function match(request) {
        // Am I an abstract route?
        if (this.isAbstract()) return; // Does it match?

        var match = XRegExp.exec(request.uri, this.getRegExp()); // No match?

        if (!match) return false; // Do I have a nested / route?

        if (this.nested['/']) {
          // Use that route instead of me...
          request.uri = request.uri + '/';
          return this.nested['/'].match(request);
        } // We matched! Let's create a match object.


        return new RouteMatch(this, match, request);
      }
    }, {
      key: "error",
      value: function error(key, callback) {
        if (this.errorHandlers[key] === undefined) this.errorHandlers[key] = [];
        this.errorHandlers[key].push(callback);
        return this;
      }
      /**
       * Get the action definitions for the Route. An action definition can either
       * be a Controller action (e.g.: `Product@index`), or a callback. The result
       * is keyed by the target ViewContainer name.
       *
       * @method getActions
       * @return {object} 
       */

    }, {
      key: "getActions",
      value: function getActions() {
        // Is it still a string (Controller@action) or callback?
        if (typeof this._actions === 'string' || typeof this._actions === 'function') {
          // Wrap in object using default view container
          var actions = {};
          actions[this.options.viewContainer] = this._actions;
          this._actions = actions;
        }

        return this._actions;
      }
      /**
       * Get the action definitions for this Route, and any parent routes that it may have.
       *
       * @method getFullActions
       * @return {object} 
       */

    }, {
      key: "getFullActions",
      value: function getFullActions() {
        // Start with mine
        var actions = this.getActions(); // Add parent

        if (this.parentRoute) {
          return _.defaults(actions, this.parentRoute.actions);
        }

        return actions;
      }
      /**
       * Get the full Route pattern within the application for this route,
       * including any parent Routes.
       *
       * @method getFullPattern
       * @return {string}
       */

    }, {
      key: "getFullPattern",
      value: function getFullPattern() {
        // My pattern as base
        var p = this.pattern; // Get parent's full pattern

        if (this.parentRoute) {
          var parentPart = this.parentRoute.getFullPattern();

          if (parentPart !== '/') {
            p = parentPart + p;
          }
        }

        return p;
      }
    }, {
      key: "makeUrl",
      value: function makeUrl() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // Get full pattern
        var pattern = this.getFullPattern();

        _.each(attributes, function (value, key) {
          // Is the value a model?
          if (value instanceof Model) value = value.get('id');
          pattern = pattern.split(':' + key).join(value);
        });

        return pattern;
      }
      /**
       * Get all parameter constraints for this Route, combining constraints
       * defined by parent routes.
       *
       * @method getAllParameterConstraints
       * @return {Map} Map with a regular expression constraint for each constrained parameter
       */

    }, {
      key: "getAllParameterConstraints",
      value: function getAllParameterConstraints() {
        // My constraints (don't overwrite)
        var c = new Map(this._parameterConstraints); // Get parent's constraints

        if (this.parentRoute) {
          // Prefix the pattern
          this.parentRoute.getAllParameterConstraints().forEach(function (regex, key) {
            if (!c.has(key)) c.set(key, regex);
          });
        }

        return c;
      }
    }, {
      key: "getMiddlewareNames",
      value: function getMiddlewareNames() {
        return this.options.middleware;
      }
      /**
       * Get the Route's complete Regular Expression, including
       * parameters
       * 
       * @method getRegExp
       * @return {XRegExp}
       */

    }, {
      key: "getRegExp",
      value: function getRegExp() {
        var _this2 = this;

        // Not yet set?
        if (this._regExp === undefined) {
          // Collect buildingBlocks (a regular expression pattern for each parameter)
          var buildingBlocks = {}; // Convert :params into regex with building blocks 
          // (see XRegExp.build documentation)

          var constraints = this.getAllParameterConstraints();
          var exp = XRegExp.replace(this.getFullPattern(), /(([\:\*])([a-zA-Z\-\_]+))/, function (match, complete, paramType, paramName) {
            // Wildcard?
            var paramRegex;

            if (paramType === '*') {
              // Use wildcard
              paramRegex = Route.ParameterType.Wildcard;
            } else {
              // Check if there is a constraint
              paramRegex = constraints.has(paramName) ? constraints.get(paramName) : Route.ParameterType.Standard;
            } // Store as building block for regex


            buildingBlocks[paramName] = paramRegex; // Store parameter

            _this2.parameters.push(paramName); // Replace with a building block using named parameter


            return '({{' + paramName + '}})';
          }, 'all'); // Create it

          this._regExp = XRegExp.build('^' + exp + '$', buildingBlocks);
        } // Return it


        return this._regExp;
      }
      /**
       * Add a constraint to a parameter, by supplying a regular expression.
       * 
       * @method constrain
       * @param  {string} parameterName The name of the parameter to add constrains to
       * @param  {RegExp} regExp        A regular expression to use when matching the parameter
       * @chainable
       */

    }, {
      key: "constrain",
      value: function constrain(parameterName, regExp) {
        // Store it
        this._parameterConstraints.set(parameterName, regExp);

        return this;
      }
    }, {
      key: "acceptQuery",
      value: function acceptQuery() {
        var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.acceptsQuery = accept;
        return this;
      }
    }, {
      key: "acceptFlash",
      value: function acceptFlash() {
        var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.acceptsFlash = accept;
        return this;
      }
      /**
       * Set the name of this Route
       *
       * @method as
       * @param  {string} name 
       * @chainable
       */

    }, {
      key: "as",
      value: function as(name) {
        // Does the name start with a .?
        if (/^\./.test(name) && this.parentRoute && this.parentRoute.name) {
          // Strip off a part for each ..
          var parts = this.parentRoute.name.split(/\./);

          while (/^\.\./.test(name)) {
            parts.pop();
            name = name.substr(1);
          } // Relative name. Add parent name as prefix


          name = "".concat(parts.join('.')).concat(name);
        } // Store name


        this.name = name; // Store in router

        this.router.namedRoutes.set(name, this);
        return this;
      }
    }, {
      key: "middleware",
      value: function middleware() {
        for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          keys[_key2] = arguments[_key2];
        }

        this.options.middleware = _.unique(_.flatten([this.options.middleware, keys]));
        return this;
      }
    }, {
      key: "services",
      value: function services() {
        for (var _len3 = arguments.length, keys = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          keys[_key3] = arguments[_key3];
        }

        this.options.services = _.unique(_.flatten([this.options.services, keys]));
        return this;
      }
      /**
       * An abstract Route can never be matched. This is useful when you have a Route
       * that only has subroutes, but no actions itself. If you define a Route without
       * actions, this will automatically be set to true.
       * 
       * @method isAbstract
       * @return {Boolean}
       */

    }, {
      key: "isAbstract",
      value: function isAbstract() {
        return !!this.options.abstract;
      }
    }]);

    return Route;
  }(Obj);

  Route.ParameterType = {
    /**
     * Regular expression for a standard parameter 
     *
     * Default: `/[^\/]+/`
     * 
     * @property ParameterType.Standard
     * @static
     * @type {RegExp}
     */
    Standard: /[^\/]+/,

    /**
     * Regular expression for a wildcard parameter
     *
     * Default: `/.+/`
     * 
     * @property ParameterType.Wildcard
     * @static
     * @type {RegExp}
     */
    Wildcard: /.+/
  };

  /**
   * @module Routing
   */

  var Request =
  /*#__PURE__*/
  function () {
    /**
     * @class Routing.Request
     *
     * @constructor
     * @param {object} 			location 		The location received from the History library
     * @param {Application} 	[application] 	The Application instance that this Request is a part of
     */
    function Request(location) {
      var application = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, Request);

      // Guess application if not given
      if (!application) application = ClassMap.get('Application').getInstance(); // Parse the uri 

      var uri = Request.cleanUri(location.pathname); // Strip of base part

      var baseUrl = Request.cleanUri(application.settings.get('baseUrl'));

      if (uri.length >= baseUrl.length && uri.substr(0, baseUrl.length)) {
        uri = uri.substr(baseUrl.length);
      } // Add the / back again


      uri = '/' + uri;
      /**
       * @property uri
       * @type {string}
       */

      this.uri = uri;
      /**
       * @property query
       * @type {object}
       */

      this.query = queryString.parse(location.search);
      /**
       * @property flash
       * @type {object|false}
       */

      this.flash = location.state ? location.state.flash : {};
      /**
       * @property transition
       * @type {string|null}
       */

      this.transition = location.state ? location.state.transition : null;
    }

    _createClass(Request, [{
      key: "getFlash",
      value: function getFlash(key) {
        if (this.flash && this.flash[key]) return this.flash[key];
        return null;
      }
    }]);

    return Request;
  }();

  Request.cleanUri = function (uri) {
    if (/^\//.test(uri)) uri = uri.substr(1);
    if (/\/$/.test(uri)) uri = uri.substr(0, uri.length - 1);
    return uri;
  };

  var Middleware = function Middleware(name, callback) {
    _classCallCheck(this, Middleware);

    this.name = name;
    this.callback = callback;
  };

  Middleware.registry = new Map();

  Middleware.register = function (middleware) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // Check arguments
    if (!(middleware instanceof Middleware)) {
      middleware = new Middleware(name, middleware);
    } else if (name === null) {
      name = middleware.name;
    } // Store it.


    Middleware.registry.set(name, middleware);
  };

  var Service =
  /*#__PURE__*/
  function (_Observable) {
    _inherits(Service, _Observable);

    function Service(name) {
      var _this;

      _classCallCheck(this, Service);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Service).call(this));
      _this.name = name;

      _this.initialize.apply(_assertThisInitialized(_assertThisInitialized(_this)));

      return _this;
    }

    _createClass(Service, [{
      key: "initialize",
      value: function initialize() {
        throw new Error('The ' + this.name + ' service has not implemented the "initialize" method');
      }
    }, {
      key: "load",
      value: function load() {
        throw new Error('The ' + this.name + ' service has not implemented the "load" method');
      }
    }]);

    return Service;
  }(Observable);

  Service.registry = new Map();
  Service.services = new Map();

  Service.get = function (name) {
    // Created?
    if (!Service.services.has(name)) {
      // Do we know it?
      if (!Service.registry.has(name)) {
        throw new Error('There is no service registed with the name "' + name + '"');
      } // Instantiate


      var ServiceClass = Service.registry.get(name);
      var service = new ServiceClass(name); // Store

      Service.services.set(name, service);
    }

    return Service.services.get(name);
  };

  /**
   * @module Routing
   */

  var Router =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(Router, _Obj);

    /**
     * 
     * 
     * @class Routing.Router
     * @extends Core.Object
     */
    function Router(application
    /*, parentRouter = null*/
    ) {
      var _this;

      _classCallCheck(this, Router);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Router).call(this)); ////////////////
      // Properties //
      ////////////////

      /**
       * @property routes
       * @type {Array}
       */

      _this.routes = [];
      /**
       * @property application
       * @type {Application}
       */

      _this.application = application;
      /**
       * @property namedRoutes
       * @type {Map}
       */

      _this.namedRoutes = new Map();
      _this.errorHandlers = {
        'all': [],
        'js': [],
        'api': [],
        'api.400': [],
        'api.404': [],
        'api.500': [],
        'router': [],
        'router.403': [],
        'router.404': []
      }; ///////////////////////////////////////////
      // Grouped configuration state variables //
      ///////////////////////////////////////////

      _this._currentConfig = SettingsObject$1.create({
        parentRoute: null,
        viewContainer: 'main',
        services: [],
        middleware: []
      }, ['parentRoute', 'viewContainer', 'middleware', 'services']);
      return _this;
    } ////////////////////////
    // Definition methods //
    ////////////////////////

    /**
     * Create a Route and add it to the Router.
     *
     * @method route
     * @param  {string} 			pattern 	The uri pattern
     * @param  {Object|String} 		actions     
     * @param  {Object} 			[options] 
     * @return {Routing.Route}        
     */


    _createClass(Router, [{
      key: "route",
      value: function route(pattern, actions) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        // Merge options
        options = _.defaults({}, options, _.omit(this._currentConfig.toObject(), 'parentRoute')); // Create the route

        var route = new Route(this, this._currentConfig.get('parentRoute'), pattern, actions, options); // Add route

        this.routes.push(route); // Return route

        return route;
      }
    }, {
      key: "errorRoute",
      value: function errorRoute(errorKey, actions) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        // Get route
        options.isErrorRoute = true;
        var route = this.route('/__errors/' + errorKey, actions, options);
        this.handleErrors(errorKey, route);
        return this;
      }
    }, {
      key: "catchAll",
      value: function catchAll(actions) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.route('/:url', actions, options).constrain('url', /.*/);
      }
      /**
       * Configure the Router to add the given options to
       * the Routes you define within the callback.
       *
       * @method group
       * @param  {object}   options  
       * @param  {Function} callback 
       * @chainable
       */

    }, {
      key: "group",
      value: function group(options, callback) {
        // Store options
        var oldConfig = this._currentConfig.clone();

        this._currentConfig.apply(options); // Do the callback


        callback.apply(this); // Restore options

        this._currentConfig = oldConfig;
        return this;
      } //////////////////////
      // Router in action //
      //////////////////////

      /**
       * Handle given Request, by finding a matching Route
       * and executing it.
       * 
       * @method handle
       * @param  {Routing.Request} request 
       * @return {Routing.RouteMatch}
       */

    }, {
      key: "handle",
      value: function handle(request) {
        var _this2 = this;

        /////////////////
        // Match route //
        /////////////////
        // Is it just a URL passed along?
        if (!(request instanceof Request)) {
          request = new Request(request);
        } // Loop through routes until we found something.


        var routeMatch = false;

        _.find(this.routes, function (route) {
          routeMatch = route.match(request);
          return routeMatch;
        }); // Found something?


        if (routeMatch === false) {
          // Create error
          var error = new RoutingError(404, 'Page not found', request);
          return this.getErrorRouteMatch(error);
        } // First leave current route


        if (this.application.currentRoute) {
          // Leave
          this.application.currentRoute.leave(routeMatch).then(function () {
            _this2.application.currentRoute = false;

            _this2.handle(request);
          });
          return;
        } // Going.


        this.trigger('navigate', request); // Store it on app

        this.application.currentRoute = routeMatch; // Make the execution callback

        var executeActions = function executeActions() {
          /////////////////////////////
          // Start executing actions //
          /////////////////////////////
          var numberOfActionsStarted = 0;
          var actionPromises = [];
          routeMatch.actions.forEach(function (action, vcName) {
            // Get the ViewContainer
            var vc = _this2.application.getViewContainer(vcName); // Disabled navigation for this request?


            if (_this2.application.navigationDisabledOnce) {
              // Just set the action on the viewcontainer, but don't actually do anything
              if (vc) {
                vc.setAction(action);
              } // Done.


              numberOfActionsStarted++;
              return new Promise(function (resolve) {
                resolve();
              });
            } // Add transition


            if (request.transition && !vc.transitionsDisabled) {
              action.transition = request.transition;
            } // Get depends on promises


            var dependsOnPromises = _.map(action.dependsOn, function (dependsOnAction) {
              return dependsOnAction.getPromise('complete');
            }); // And any services that should be loaded


            _.each(routeMatch.route.options.services, function (service) {
              // Find service
              var serviceInstance = Service.get(service);
              if (!serviceInstance) throw new Error('[Routing.Router] There is no service "' + service + '" registered'); // Load it

              var promise = serviceInstance.load();
              if (!promise || !(promise instanceof Promise)) throw new Error('[Routing.Router] The "' + service + '" service\'s load() method should return a Promise');
              dependsOnPromises.push(promise);
            }); // Wait?


            if (dependsOnPromises.length > 0) {
              // Wait for it
              Promise.all(dependsOnPromises).then(function () {
                // Now we're ready!
                action.execute(_this2.application);
              }, function (error) {
                throw new Error('[Routing.Router] Action for "' + vcName + '" was not started, due to error in dependancy route: ' + error);
              });
            } else {
              // Start now
              numberOfActionsStarted++;
              action.execute(_this2.application);
            } // Add complete promise


            actionPromises.push(action.getPromise('complete'));
          }); ////////////////////////////
          // Keep track of progress //
          ////////////////////////////
          // Any action started?

          if (numberOfActionsStarted === 0 && routeMatch.route.options.services.length === 0) {
            throw new Error('[Routing.Router] No actions for started for route ' + routeMatch.route.getFullPattern() + '. Check your configuration.');
          } // Listen to the result


          Promise.all(actionPromises).then(function ()
          /*...results*/
          {
            //@TODO What to do?
            _this2.trigger('complete', [routeMatch]);
          }); // Reset navigation disabled

          _this2.application.navigationDisabledOnce = false;
        }; //////////////////////
        // Setup middleware //
        //////////////////////
        // Loop and add middleware


        var callbacksToExecute = [];

        _.each(routeMatch.route.getMiddlewareNames(), function (mwName) {
          // Get the middleware
          var middleware = Middleware.registry.get(mwName);
          if (!middleware) throw new Error('There is no middleware registered with the name "' + mwName + '"'); // Add the callback

          callbacksToExecute.push(middleware.callback);
        }); // Lastly we will execute the actions


        callbacksToExecute.push(executeActions); ////////////////////////////////////////////////////////////////
        // Now call the first callback, to start the middleware chain //
        ////////////////////////////////////////////////////////////////

        var nextCallback = function nextCallback() {
          // Get the callback to call
          var cb = callbacksToExecute.shift(); // Get the next in line

          try {
            cb.apply(_this2, [nextCallback, request, routeMatch]);
          } catch (error) {
            // Get error route match
            routeMatch = _this2.getErrorRouteMatch(error); // Break out

            executeActions();
          }
        };

        nextCallback();
        return routeMatch;
      }
    }, {
      key: "handleErrors",
      value: function handleErrors(errorType, callback) {
        // Known code?
        if (this.errorHandlers[errorType] === undefined) {
          throw new Error('It is not possible to catch "' + errorType + '" errors; available error statuses are: ' + _.keys(this.errorHandlers).join(', '));
        } // Add it


        this.errorHandlers[errorType].push(callback);
      }
    }, {
      key: "getErrorHandlers",
      value: function getErrorHandlers(error) {
        var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // Error object?
        if (typeof error === 'string') {
          error = new Error(error);
        } // No obj? Use me.


        if (!obj) obj = this; // Routing error?

        var handlers = [];

        if (error instanceof RoutingError) {
          // Add handlers for the status code
          if (obj.errorHandlers['router.' + error.code]) {
            handlers = _.union(handlers, obj.errorHandlers['router.' + error.code]);
          } // Add router-handlers


          if (obj.errorHandlers.router) handlers = _.union(handlers, obj.errorHandlers.router); // Api error?
        } else if (error instanceof ApiError) {
          // Add handlers for the status code
          var statusCode = error.getStatusCode();

          if (obj.errorHandlers['api.' + statusCode]) {
            handlers = _.union(handlers, obj.errorHandlers['api.' + statusCode]);
          } // Add api-handlers


          if (obj.errorHandlers.api) handlers = _.union(handlers, obj.errorHandlers.api);
        } else {
          // Javascript error
          if (obj.errorHandlers.js) handlers = _.union(handlers, obj.errorHandlers.js);
        } // Always add the 'all' handlers


        if (obj.errorHandlers.all) handlers = _.union(handlers, obj.errorHandlers.all); // Were we called for a specific object?

        if (obj !== this) {
          // Then append default router callbacks
          handlers = _.union(handlers, this.getErrorHandlers(error));
        }

        return handlers;
      }
    }, {
      key: "getErrorRouteMatch",
      value: function getErrorRouteMatch(error) {
        // Get the handlers
        var handlers = this.getErrorHandlers(error);
        var handlerResult = false;

        while (handlers.length > 0) {
          // Get handler and call it
          var handler = handlers.shift(); // Is it a callback?

          var result = void 0;

          if (typeof handler === 'function') {
            // Call handler
            result = handler(error, error.request, this);
          } else {
            // Just use the value itself (probably a Route defined through 'errorRoute(...')
            result = handler;
          } // Anything?


          if (result) {
            handlerResult = result;
            break;
          }
        } // No result?


        if (!handlerResult) throw error; // A generic redirect?

        if (handlerResult instanceof Redirect) {
          return this.application.goto(handlerResult.uri);
        } // Is it a Route?


        if (handlerResult instanceof Route) {
          // Fake a match
          var match = new RouteMatch(handlerResult, {}, error && error.request ? error.request : null);
          return match;
        }
      }
      /**
       * Output a table to the console containing an overview
       * of all defined routes.
       *
       * Note: This is not supported in all browsers!
       * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
       *  
       * @method outputToConsole
       * @chainable
       */

    }, {
      key: "outputToConsole",
      value: function outputToConsole() {
        // Loop and log
        console.table(_.map(this.routes, function (route) {
          return {
            'Pattern': route.getFullPattern(),
            'Actions': route.isAbstract() ? '(abstract)' : _.map(route.getFullActions(), function (action, targetViewContainer) {
              return targetViewContainer + ': ' + (typeof action === 'function' ? '(Callback)' : action);
            }).join(', '),
            'Regular expression': route.getRegExp()
          };
        }));
        return this;
      }
    }]);

    return Router;
  }(Obj);

  /**
   * @module Localization
   */

  var I18n =
  /*#__PURE__*/
  function (_Obj) {
    _inherits(I18n, _Obj);

    function I18n(language) {
      var _this;

      _classCallCheck(this, I18n);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(I18n).call(this));
      /**
       * @property data
       * @type {Object}
       */

      _this.data = {};
      /**
       * @property bundlesToLoad
       * @type {Array}
       */

      _this.bundlesToLoad = [];
      /**
       * @property language
       * @type {string}
       */

      _this.language = null;

      _this.setLanguage(language);

      return _this;
    }
    /**
     * Add a bundle that will be loaded when the application starts
     *
     * @method addBundle
     * @param  {string} url 
     * @param  {string} [key=null]  Optional key to add loaded data under.
     * @chainable
     */


    _createClass(I18n, [{
      key: "addBundle",
      value: function addBundle(url) {
        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.bundlesToLoad.push({
          url: url,
          key: key
        });
        return this;
      }
    }, {
      key: "setBundle",
      value: function setBundle(data) {
        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        // Default language
        if (!language) language = this.language; // Is there a key?

        if (key) {
          var r = {};
          r[key] = data;
          data = r;
        } // Extend


        $.extend(this.data[language], data);
      }
      /**
       * Manually load a bundle into I18n
       *
       * @method loadBundle
       * @param  {string} url 
       * @param  {string} [key=null]  Optional key to add loaded data under.
       * @return {Promise}     
       */

    }, {
      key: "loadBundle",
      value: function loadBundle(url) {
        var _this2 = this;

        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        // Convert language placeholders
        if (!language) language = this.language;
        url = url.replace(/:language/, this.language);
        return new Promise(function (resolve, reject) {
          // Do we have it in cache?
          if (I18n.Cache[url]) {
            resolve(I18n.Cache[url]);
            return;
          } // Load it.


          $.ajax(url, {}).then(function (result) {
            resolve(result);
          }).fail(function (error) {
            reject(error);
          });
        }).then(function (result) {
          // Parse result
          result = _this2.parseResult(result, url); // Is there a key?

          if (key) {
            var r = {};
            r[key] = result;
            result = r;
          } // Extend


          $.extend(_this2.data[language], result);
        });
      }
    }, {
      key: "setLanguage",
      value: function setLanguage(language) {
        this.language = language;

        if (!this.data[language]) {
          this.data[language] = {};
        }

        return this;
      }
    }, {
      key: "parseResult",
      value: function parseResult(result, url) {
        // Check extension
        var extension = _.last(url.split(/\./));

        if (extension === 'yaml') {
          // Parse yaml
          if (window.YAML === undefined) throw new Error('The YAML library was not loaded, so the language file cannot be read. Add the bower component yamljs to your application.');
          result = window.YAML.parse(result);
        } else if (extension === 'json') {
          // Parse json
          if (typeof result === 'string') result = JSON.parse(result);
        }

        return result;
      }
    }, {
      key: "getData",
      value: function getData() {
        var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (!language) language = this.language;
        return this.data[language];
      }
      /**
       * Load all added bundles
       *
       * @method load
       * @return {Promise}
       */

    }, {
      key: "load",
      value: function load() {
        var _this3 = this;

        // Main prmomise for loading
        return this.promise('loaded', function (resolve) {
          // Nothing to load?
          if (_this3.bundlesToLoad.length === 0) {
            resolve();
            return;
          } // Collect promises


          var promises = [];

          _.each(_this3.bundlesToLoad, function (bundle) {
            promises.push(_this3.loadBundle(bundle.url, bundle.key));
          }); // When all is done.


          Promise.all(promises).then(function () {
            resolve();
          });
        });
      }
      /**
       * Get the translation for given key
       * 
       * @method translate
       * @param  {string} key        			Dot-notation key to get value of
       * @param  {Object} [attributes={}] 	Optional object containing attributes to pass to the template in the translated value
       * @param  {mixed} [fallback=null]		Optional fallback value when the key is nout found
       * @return {mixed}
       */

    }, {
      key: "translate",
      value: function translate(key) {
        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        // Dot notation
        var obj = this.getData(language);
        var parts = key.split(/\./);

        while (parts.length > 0) {
          // Get firs tpart
          var part = parts.shift(); // Not existing?

          if (!obj[part]) return fallback !== null ? fallback : '[' + key + ']'; // Dive in.

          obj = obj[part];
        }

        return this.processValue(obj, attributes);
      }
    }, {
      key: "processValue",
      value: function processValue(obj, attributes) {
        var _this4 = this;

        // What type?
        if (typeof obj === 'string') {
          // Process string
          obj = this.processString(obj, attributes);
        } else if ($.isArray(obj)) {
          // Mapped processing
          obj = _.map(obj, function (v) {
            return _this4.processValue(v, attributes);
          });
        } else if (_typeof(obj) === 'object') {
          var result = {};

          _.each(obj, function (value, key) {
            result[key] = _this4.processValue(value, attributes);
          });

          obj = result;
        }

        return obj;
      }
    }, {
      key: "processString",
      value: function processString(obj, attributes) {
        // Double escaping
        obj = obj.split(/\\n/).join('\n').split(/\\t/).join('\t'); /////////////////
        // Templating? //
        /////////////////

        if (obj.match(/<%/)) {
          // Convert attributes into real values
          var attr = _.mapObject(attributes, function (value) {
            // Get value?
            if (value !== null && value !== undefined && _typeof(value) === 'object' && typeof value.getValue === 'function') {
              value = value.getValue();
            }

            return value;
          }); // Make a template and run it


          var template = _.template(obj);

          try {
            obj = template(attr);
          } catch (error) {//
            //console.warn(error);
          }
        }

        return obj;
      }
      /**
       * Alias of translate
       * 
       * @method get
       * @param  {string} key        
       * @param  {Object} [attributes={}] 
       * @param  {mixed} [fallback=null]
       * @return {mixed}
       */

    }, {
      key: "get",
      value: function get(key) {
        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return this.translate(key, attributes, fallback, language);
      }
    }]);

    return I18n;
  }(Obj);

  I18n.Cache = {};

  // Class definitino //
  //////////////////////

  var _instance = undefined;
  /**
   * The main Application class, used to create a Chicken application.
   *
   * @param {JQuery} $app - The target jQuery element to create application in
   * @param {Object} settings - Application settings object
   * @param {string} [settings.baseUrl=/] - The root uri of the application
   * @param {History} [history] Optional browser history instance. Will be created for you if you leave it null.
   * 
   */

  var Application =
  /*#__PURE__*/
  function (_Observable) {
    _inherits(Application, _Observable);

    function Application($app, settings) {
      var _this;

      var history = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, Application);

      // Basics
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Application).call(this));
      _instance = _assertThisInitialized(_assertThisInitialized(_this)); ////////////////
      // Properties //
      ////////////////

      /**
       * The jQuery element that is the Application
       * 
       * @property $app
       * @type {jQuery}
       */

      _this.$app = $app ? $app : $('#application');
      /**
       * All ViewContainers in the application. This is automatically
       * kept up to date to contain all and only still existing containers.
       *
       * @property viewContainers
       * @type {Object}
       */

      _this.viewContainers = {};
      /**
       * @property router
       * @type {Routing.Router}
       */

      _this.router = new Router(_assertThisInitialized(_assertThisInitialized(_this)));
      /**
       * One or more Api.Api instances
       * 
       * @property apis
       * @type {Object}
       */

      _this.apis = {};
      /**
       * One or more Auth.Auth instances
       *
       * @property auths
       * @type {Object}
       */

      _this.auths = {};
      /**
       * Array of promises to fulfill before the application
       * can start.
       * 
       * @property loadPromises
       * @type {Array}
       */

      _this.loadPromises = [];
      /**
       * @property settings
       * @type {Core.SettingsObject}
       */

      _this.settings = SettingsObject$1.create({
        baseUrl: '/',
        language: $('html').attr('lang'),
        viewPath: 'views',
        viewExtension: 'hbs',
        elementLinkAttribute: 'link-to',
        renderer: settings.renderer === undefined ? new Renderer() : null,
        isCordovaApp: false // For use with Cordova

      }, ['baseUrl', 'viewPath', 'viewExtension', 'renderer', 'elementLinkAttribute', 'isCordovaApp']).apply(settings);
      /**
       * @property i18n
       * @type {Localization.I18n}
       */

      _this.i18n = new I18n(_this.settings.get('language'));
      /**
       * @property history
       * @type {History}
       */

      _this.history = history;

      if (!_this.history) {
        // Cordova app?
        if (_this.settings.get('isCordovaApp')) {
          // Running actual app or previewing in browser?
          if (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1) {
            // Create a history in memory
            _this.history = createMemoryHistory();
          } else {
            // Create a history using #
            _this.history = createHashHistory();
          }
        } else {
          // Create a browser history
          _this.history = createBrowserHistory();
        }
      }
      /**
       * Used to tweak history without navigating away from the page
       * 
       * @property navigationDisabledOnce
       * @type {Boolean}
       */


      _this.navigationDisabledOnce = false;
      return _this;
    }

    _createClass(Application, [{
      key: "findViewContainers",
      value: function findViewContainers() {
        var _this2 = this;

        var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        // No element to look in?
        if (!$element) $element = this.$app; // Find view containers

        $element.find(ViewContainer.ElementSelector).each(function (index, el) {
          // Create view container
          var vc = new ViewContainer($(el), _this2); // Already known?

          if (_this2.viewContainers[vc.name]) {
            throw new Error('There is already a view named "' + vc.name + '". It is not possible to have two views with the same name at the same time.');
          } // Store it.


          _this2.viewContainers[vc.name] = vc; // Initialize

          vc.initialize();
        });
        return this;
      }
    }, {
      key: "updateViewContainers",
      value: function updateViewContainers() {
        var _this3 = this;

        var $lookForNewOnesIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        // Check if all old ones are still there
        _.each(this.viewContainers, function (vc, key) {
          // Removed?
          if (!vc.isInDom()) {
            delete _this3.viewContainers[key];
          }
        }); // Look for new ones


        if ($lookForNewOnesIn) this.findViewContainers($lookForNewOnesIn);
        return this;
      }
    }, {
      key: "getViewContainer",
      value: function getViewContainer(key) {
        return this.viewContainers[key];
      }
    }, {
      key: "routes",
      value: function routes(callback) {
        // Run callback with router
        callback.apply(this.router, []);
        return this;
      }
    }, {
      key: "api",
      value: function api() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var apiInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // Get?
        if (apiInstance === null) {
          if (key === null) key = _.first(_.keys(this.apis));
          return this.apis[key];
        } // Set


        this.apis[key] = apiInstance;
        return this;
      }
    }, {
      key: "auth",
      value: function auth() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var authInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // Get?
        if (authInstance === null) {
          if (key === null) key = _.first(_.keys(this.auths));
          return this.auths[key];
        } // Set


        this.auths[key] = authInstance;
        return this;
      }
    }, {
      key: "translations",
      value: function translations(callback) {
        callback.apply(this.i18n, [this.i18n]);
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        var _this4 = this;

        // Enable momentJS
        if (this.settings.get('language')) moment.locale(this.settings.get('language')); // Add i18n to promises

        this.loadPromises.unshift(this.i18n.load()); // Do auth initialization

        _.each(this.auths, function (auth) {
          _this4.loadPromises.unshift(auth.initialize());
        }); // When all is done.


        Promise.all(this.loadPromises).then(function () {
          // Find initial view containers
          _this4.findViewContainers(); // Update view containers whenever element contents are set.


          Element.registerHook(function ($element) {
            // Update view containers
            _this4.updateViewContainers($element); // Find links


            $element.find('[' + _this4.settings.get('elementLinkAttribute') + ']').on('click', function (e) {
              // Open the uri!
              e.preventDefault();
              var uri = $(e.target).attr('href');

              _this4.goto(uri);
            }).each(function (index, el) {
              // Get uri
              var $el = $(el);
              var uri = $el.attr(_this4.settings.get('elementLinkAttribute'));

              if (uri) {
                // Store in href for easy visilbility, and remove link-to, so it won't be found again by this script
                $el.removeAttr(_this4.settings.get('elementLinkAttribute'));
                $el.attr('href', uri);
              }
            });
          }); // Done!

          _this4.resolvePromise('ready'); // Listen to browser's address bar


          _this4.history.listen(function (location) {
            _this4.router.handle(location);
          }); // Start with current location


          _this4.router.handle(_this4.history.location);
        }, function (error) {
          throw error;
        });
        return this;
      }
    }, {
      key: "gotoNamed",
      value: function gotoNamed(name) {
        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var flash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var transition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        // Find route
        var route = this.router.namedRoutes.get(name);
        if (!route) throw new Error('There is no route defined with the name "' + name + '"'); // Make uri

        var uri = route.makeUrl(attributes);
        return this.goto(uri, query, flash, false, transition);
      }
    }, {
      key: "transitionToNamed",
      value: function transitionToNamed(name) {
        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var transition = arguments.length > 2 ? arguments[2] : undefined;
        return this.gotoNamed(name, attributes, null, {}, transition);
      }
    }, {
      key: "transitionTo",
      value: function transitionTo(uri, transition) {
        return this.goto(uri, null, {}, false, transition);
      }
    }, {
      key: "goto",
      value: function goto(uri) {
        var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var flash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var doNotNavigate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var transition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        // Query in the uri?
        var search = queryString.extract(uri);
        var params = {};

        if (search.length > 0) {
          // Parse objects
          params = queryString.parse(search); // Remove from uri

          uri = uri.substr(0, uri.length - search.length - 1);
        } // Check the query


        if (query) {
          // Combine into params
          if (typeof query === 'string') {
            params = $.extend(params, queryString.parse(query));
          } else {
            params = $.extend(params, query);
          }
        } // Stringify query


        query = queryString.stringify(params);
        if (query) query = '?' + query; // External?		

        if (uri.match(/^(http(s)?\:)?\/\//)) {
          window.location = uri + (query || '');
          return this;
        } // No navigating? Just add the state to history?


        if (doNotNavigate) {
          // Disable navigation
          this.navigationDisabledOnce = true;
        } // Change the history state


        this.history.push({
          pathname: uri,
          search: query,
          state: {
            flash: flash,
            transition: transition
          }
        });
        return this;
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var _this5 = this;

        var viewContainerKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        viewContainerKeys = viewContainerKeys || _.keys(this.viewContainers); //clear the currentAction of all viewContainer

        _.each(viewContainerKeys, function (viewContainerKey) {
          _this5.viewContainers[viewContainerKey].currentAction = null;
        }); // Start with current location


        this.router.handle(this.history.location);
      }
    }, {
      key: "getCurrentUri",
      value: function getCurrentUri() {
        return this.history.location.pathname;
      }
    }, {
      key: "config",
      value: function config() {
        // Get all?
        if (arguments.length === 0) {
          return this.settings;
        } // Get one?
        else if (arguments.length === 1) {
            return this.settings.get(arguments.length <= 0 ? undefined : arguments[0]);
          } // Set?
          else {
              return this.settings.set(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
            }
      }
    }, {
      key: "uri",
      value: function uri() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // Add baseUrl (except for cordova app)
        if (!this.settings.get('isCordovaApp')) {
          args.unshift(this.settings.get('baseUrl') === '/' ? '' : this.settings.get('baseUrl'));
        }

        var url = args.join('/'); // Was the last one an extension?

        if (/^\.[a-z]+$/.test(_.last(args))) {
          // Replace last slash
          url = url.replace(/\/\.[a-z]+$/, _.last(args));
        }

        return url;
      }
    }]);

    return Application;
  }(Observable);

  Application.getInstance = function () {
    return _instance;
  };

  ClassMap.register('Application', Application);

  /**
   * An Api instance can be used to make contact with one specific
   * API. 
   *
   * @param {Object} options - Configuration for the Api
   * @param {string} [options.baseUrl=/api] Base url to prepend to all API calls
   * @param {boolean} [options.queueAjaxCalls=false] Whether to execute the API calls one by one (true), or simultaneously (false)
   * 
   */

  var Api =
  /*#__PURE__*/
  function () {
    /**
     * @class Api.Api
     *
     * @constructor
     * @param  {Object} options 	 
     */
    function Api(options) {
      _classCallCheck(this, Api);

      this.settings = $.extend({
        baseUrl: '/api',
        queueAjaxCalls: false,
        auth: false,
        beforeSend: false,
        useGlobalStore: true
      }, options);
    }
    /**
     * @method deserialize
     * @return {Data.Model|Data.Collection}
     */


    _createClass(Api, [{
      key: "deserialize",
      value: function deserialize()
      /* data, apiCall = null */
      {
        throw new Error('The Api implementation should have a deserialize method.');
      }
      /**
       * @method getAuth
       * @return {Auth.Auth} 
       */

    }, {
      key: "getAuth",
      value: function getAuth() {
        // Set already?
        if (this.auth) return this.auth;
        if (this.settings.auth === false) return false; // Look it up.

        this.auth = App().auth(this.settings.auth);
        return this.auth;
      } //////////////////
      // HTTP methods //
      //////////////////

      /**
       * @method call
       * @param  {string} method      
       * @param  {string} uri         
       * @param  {Object} [data={}]
       * @param  {Object} [ajaxOptions={}]
       * @return {Api.ApiCall}
       */

    }, {
      key: "call",
      value: function call(method, uri) {
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var ajaxOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        // Create api call
        return new ApiCall(this, method, uri, data, ajaxOptions);
      }
      /**
       * @method get
       * @param  {string} uri         
       * @param  {Object} [data={}]
       * @param  {Object} [ajaxOptions={}]
       * @return {Api.ApiCall}
       */

    }, {
      key: "get",
      value: function get(uri) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.call('get', uri, data, ajaxOptions);
      }
      /**
       * @method post
       * @param  {string} uri         
       * @param  {Object} [data={}]
       * @param  {Object} [ajaxOptions={}]
       * @return {Api.ApiCall}
       */

    }, {
      key: "post",
      value: function post(uri) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.call('post', uri, data, ajaxOptions);
      }
      /**
       * @method put
       * @param  {string} uri         
       * @param  {Object} [data={}]
       * @param  {Object} [ajaxOptions={}]
       * @return {Api.ApiCall}
       */

    }, {
      key: "put",
      value: function put(uri) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.call('put', uri, data, ajaxOptions);
      }
      /**
       * @method path
       * @param  {string} uri         
       * @param  {Object} [data={}]
       * @param  {Object} [ajaxOptions={}]
       * @return {Api.ApiCall}
       */

    }, {
      key: "patch",
      value: function patch(uri) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.call('patch', uri, data, ajaxOptions);
      }
      /**
       * @method delete
       * @param  {string} uri         
       * @param  {Object} [data={}]
       * @param  {Object} [ajaxOptions={}]
       * @return {Api.ApiCall}
       */

    }, {
      key: "delete",
      value: function _delete(uri) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var ajaxOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.call('delete', uri, data, ajaxOptions);
      } ////////////////////
      // Helper methods //
      ////////////////////

      /**
       * @method makeUrl
       * @param  {string} uri 	Relative url within the API
       * @return {string} Fully formed url
       */

    }, {
      key: "makeUrl",
      value: function makeUrl(uri) {
        return this.settings.baseUrl + uri;
      }
      /**
       * Make an ajax call using jQuery
       * 
       * @method ajax
       * @param  {Object} options 
       * @return {jQuery Ajax call}         
       */

    }, {
      key: "ajax",
      value: function ajax(options) {
        var method = this.settings.queueAjaxCalls ? $.ajaxq : $.ajax;
        if (method === undefined) throw new Error('Could not find Ajax or AjaxQ library. Did you include jquery.ajaxq into your project?');
        return method.apply(null, [this.getAjaxOptions(options)]);
      }
      /**
       * Get jQuery ajax call options for this api
       *
       * @method getAjaxOptions
       * @param {Object = {}} options   Optional options to merge
       * @return {Function}
       */

    }, {
      key: "getAjaxOptions",
      value: function getAjaxOptions() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // Start with given options
        var beforeSends = [];

        if (options.beforeSend) {
          beforeSends.push(options.beforeSend);
          delete options.beforeSend;
        }

        var ajaxOptions = $.extend({
          dataType: 'json'
        }, options); // Get auth options

        var auth = this.getAuth();

        if (auth) {
          var authOptions = auth.getAjaxOptions();

          if (authOptions.beforeSend) {
            beforeSends.push(authOptions.beforeSend);
            delete authOptions.beforeSend;
          }

          $.extend(ajaxOptions, authOptions);
        } // Make callback


        ajaxOptions.beforeSend = function (jqXhr, jqOptions) {
          // Loop through before sends
          _.each(beforeSends, function (cb) {
            cb(jqXhr, jqOptions);
          });
        };

        return ajaxOptions;
      } ///////////////////
      // Model methods //
      ///////////////////

      /**
       * Get a single Model record from the Api
       * 
       * @method one
       * @param  {string} modelName 
       * @param  {string} idOrUri 
       * @return {Api.ApiCall}
       */

    }, {
      key: "one",
      value: function one(modelName) {
        var idOrUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        // Get uri from model
        var ModelClass = Model.registry.get(modelName);
        if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
        var uri = /^\//.test(idOrUri) ? idOrUri : ModelClass.definition.getApiUri(idOrUri); // Make the call

        var call = this.get(uri);
        call.modelClass = ModelClass;
        call.expectModel = true;
        return call;
      }
      /**
       * Get all Model records from the Api
       * 
       * @method all
       * @param  {string} modelName
       * @return {Api.ApiCall}
       */

    }, {
      key: "all",
      value: function all(modelName) {
        var uri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        // Get uri from model
        var ModelClass = Model.registry.get(modelName);
        if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
        if (!uri) uri = ModelClass.definition.getApiUri(); // Make the call

        var call = this.get(uri);
        call.modelClass = ModelClass;
        call.expectCollection = true;
        return call;
      }
    }, {
      key: "store",
      value: function store(modelName) {
        // Get uri from model
        var ModelClass = Model.registry.get(modelName);
        if (!ModelClass) throw new Error('There is no model registered with the name "' + modelName + '"');
        var uri = ModelClass.definition.getApiUri(); // Make the call

        var call = this.post(uri);
        call.modelClass = ModelClass;
        call.expectModel = true;
        return call;
      }
      /**
       * Save given model to the Api
       *
       * @method saveModel
       * @param 	{string}	uri
       * @param 	{Data.Model} model
       * @return {Api.ApiCall}
       */

    }, {
      key: "saveModel",
      value: function saveModel()
      /* uri, model */
      {
        throw new Error('The Api implementation should have a saveModel method.');
      }
    }]);

    return Api;
  }();

  /**
   * @module Api
   */

  var JsonApiCall =
  /*#__PURE__*/
  function (_ApiCall) {
    _inherits(JsonApiCall, _ApiCall);

    function JsonApiCall() {
      _classCallCheck(this, JsonApiCall);

      return _possibleConstructorReturn(this, _getPrototypeOf(JsonApiCall).apply(this, arguments));
    }

    _createClass(JsonApiCall, [{
      key: "include",

      /**
       * @class Api.JsonApiCall
       * @extends Api.ApiCall
       * 
       * @constructor
       * @param  {Api.JsonApi} api 	The Api instance this call originates from
       * @param  {string} method      The HTTP method to use (get, post, put, etc.)
       * @param  {string} uri			The uri to call
       * @param  {Object} data        
       * @param  {Object} ajaxOptions 	 
       */

      /**
        * Include the given relationships in the request
        * 
        * @method include
        * @chainable
        * 
        * @param  {string} relations  JSONAPI include options for request
        */
      value: function include(relations) {
        if (relations instanceof Array) {
          relations = relations.join(',');
        }

        relations = inflection.underscore(relations);
        return this.query('include', relations);
      }
    }, {
      key: "filter",
      value: function filter(key, value) {
        // Value a moment?
        if (moment.isMoment(value)) value = value.format('YYYY-MM-DD');
        return this.query('filter[' + inflection.underscore(key) + ']', value);
      }
    }, {
      key: "enrich",
      value: function enrich(keys) {
        return this.query('enrich', keys);
      }
    }, {
      key: "sort",
      value: function sort(key) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ascending';
        // Format key
        key = inflection.underscore(key); // Check direction

        if (/^desc/.test(direction)) key = '-' + key; // Apply

        return this.query('sort', key);
      }
    }]);

    return JsonApiCall;
  }(ApiCall);

  /**
   * @module Api
   */

  var JsonApi =
  /*#__PURE__*/
  function (_Api) {
    _inherits(JsonApi, _Api);

    /**
     * @class Api.JsonApi
     * @extends Api.Api
     *
     * @constructor
     * @param  {Object} options
     */
    function JsonApi(options) {
      _classCallCheck(this, JsonApi);

      return _possibleConstructorReturn(this, _getPrototypeOf(JsonApi).call(this, options));
    }

    _createClass(JsonApi, [{
      key: "call",
      value: function call(method, uri) {
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var ajaxOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        // Create api call
        return new JsonApiCall(this, method, uri, data, ajaxOptions);
      }
    }, {
      key: "saveModel",
      value: function saveModel(model, options) {
        // Make settings
        var settings = $.extend({
          includeRelated: true,
          includeRelatedData: false // False, true, or array of relationship names

        }, options);
        if (!settings.uri) settings.uri = model.getApiUri(); // Make the data

        var data = {
          data: this.serialize(model, settings.includeRelated, settings.includeRelatedData)
        }; // Check method

        var method = model.isNew() ? 'post' : 'patch'; // Do the call

        var cache = [];
        var apiCall = this.call(method, settings.uri, JSON.stringify(data, function (key, value) {
          if (_typeof(value) === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
            } // Store value in our collection


            cache.push(value);
          }

          return value;
        }), settings.ajax);
        cache = null; // Enable garbage collection
        // Return it

        return apiCall;
      }
    }, {
      key: "deleteModel",
      value: function deleteModel(model, options) {
        // Make settings
        var settings = $.extend({}, options);
        if (!settings.uri) settings.uri = model.getApiUri(); // Make the data

        var data = {
          data: this.serialize(model)
        }; // Do the call

        var cache = [];
        var apiCall = this.call('delete', settings.uri, JSON.stringify(data, function (key, value) {
          if (_typeof(value) === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
            } // Store value in our collection


            cache.push(value);
          }

          return value;
        }), settings.ajax);
        cache = null; // Enable garbage collection
        // Return it

        return apiCall;
      }
    }, {
      key: "serialize",
      value: function serialize(model) {
        var _this = this;

        var includeRelated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var includeRelatedData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var includedModelGuids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        // Check related data
        if (typeof includeRelatedData === 'string') includeRelatedData = [includeRelatedData]; // Basics: type and id

        var data = {
          type: inflection.pluralize(inflection.underscore(model.getDefinition().name))
        };
        var id = model.get('id');
        if (id) data.id = id; // Add pivot data?		

        if (model.isPivot()) {
          // Get attributes (non-dirty as well.)
          var pivotAttributes = model.getPivot().getAttributesForApi(false);

          if (_.size(pivotAttributes) > 0) {
            // Convert for API
            var meta = {};

            _.each(pivotAttributes, function (value, key) {
              meta[inflection.underscore(key)] = value;
            }); // Set as meta data


            data.meta = meta;
          }
        } // Was this model already added before? Then we skip attributes and relationships


        if (!_.contains(includedModelGuids, Utils.uidFor(model))) {
          // Attributes?
          var attr = model.getAttributesForApi(!model.isNew());

          if (_.size(attr) > 0) {
            data.attributes = {};

            _.each(attr, function (value, key) {
              data.attributes[inflection.underscore(key)] = value;
            });
          } // Add model guid now, if it hasn't been added before


          includedModelGuids.push(Utils.uidFor(model)); // @TODO Check wheter the reverse of a relationship was already included
          // e.g. In case of author > books > author, the last 'author' should be skipped, even
          // when the 'book' model has it defined.
          // Include related?

          if (includeRelated) {
            // Loop through relationships
            var relationships = {};

            _.each(model.related, function (relatedData, key) {
              // Is it a collection?
              if (relatedData instanceof Collection) {
                // Is dirty? or had dirty children
                if (relatedData.isDirty() || relatedData.hasDirtyChildren()) {
                  // Add them all
                  relationships[key] = {
                    data: _.map(relatedData.items, function (item) {
                      // Store original model to prevent recursive loop (only when the attributes have not been added yet, but should be)
                      if (includeRelatedData === false || !_.contains(includeRelatedData, key)) {
                        includedModelGuids.push(Utils.uidFor(item));
                      } // Add that model, but only add relationships when this model has not been added to the resource before, to prevent nesting recursive loop


                      return _this.serialize(item, true, includeRelatedData, includedModelGuids);
                    })
                  };
                }
              } else if (relatedData instanceof Model) {
                // Store original model to prevent recursive loop (only when the attributes have not been added yet, but should be)
                if (includeRelatedData === false || _.indexOf(includeRelatedData, key) === -1) {
                  includedModelGuids.push(Utils.uidFor(relatedData));
                } // Is it dirty?


                if (relatedData.isDirty()) {
                  // We always add the related model data
                  relationships[key] = {
                    data: _this.serialize(relatedData, true, includeRelatedData, includedModelGuids)
                  };
                }
              } else if (relatedData) {
                // What is this
                throw new TypeError('Unrecognized data found in model\'s relationship ' + key);
              }
            });

            if (_.size(relationships) > 0) {
              data.relationships = relationships;
            }
          }
        }

        return data;
      }
    }, {
      key: "deserialize",
      value: function deserialize(result) {
        var _this2 = this;

        var apiCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // Call given?
        if (!apiCall) {
          apiCall = new JsonApiCall(this, 'get', '/foo/bar');
        } // Check included data


        if (result.included) {
          // Loop and store them in the model stores
          _.each(result.included, function (recordData) {
            _this2.deserializeModel(recordData, apiCall, false);
          });

          _.each(result.included, function (recordData) {
            _this2._deserializeRelationships(recordData, apiCall);
          });
        } // Is the result an object or an array


        var data = result.data;
        if (data === undefined || data === null) throw new Error('No data received from Api');

        if (data instanceof Array) {
          return this.deserializeCollection(data, apiCall, result.meta);
        } else if (data instanceof Object) {
          return this.deserializeModel(data, apiCall);
        } // Don't know...


        throw new TypeError('Unrecognized data received from Api');
      }
    }, {
      key: "deserializeModel",
      value: function deserializeModel(data, apiCall) {
        var _this3 = this;

        var deserializeRelationships = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        // Look for the type of model
        var resourceType = data.type;
        var modelClass = Model;

        if (!resourceType) {
          throw new TypeError('Api result did not specity the record type');
        }

        var modelName = this._getModelName(resourceType);

        if (Model.registry.has(modelName)) {
          modelClass = Model.registry.get(modelName);
        } // Collect attributes


        var attributes = {};

        _.each(data.attributes, function (value, key) {
          attributes[inflection.camelize(key, true)] = value;
        }); // Check if the model is already in the store


        var model = apiCall.getResponseModel(modelName, data.id);

        if (!model) {
          // Create a new model.
          attributes.id = /^\d+$/.test(data.id) ? parseInt(data.id) : data.id;
          model = new modelClass(attributes);
          apiCall.storeReponseModel(model);
        } else {
          // Set the attributes (not overwriting dirty ones)
          model.setAttributesFromApi(attributes);
        } // Meta?


        if (data.meta) {
          var metaAttributes = {};

          _.each(data.meta, function (value, key) {
            metaAttributes[inflection.camelize(key, true)] = value;
          });

          model.setMetaAttributes(metaAttributes);
        } // Also deserialize relationships?


        if (deserializeRelationships) {
          model.withoutNotifications(function () {
            _this3._deserializeRelationships(data, apiCall, model);
          });
        }

        return model;
      }
    }, {
      key: "deserializeCollection",
      value: function deserializeCollection(data, apiCall) {
        var _this4 = this;

        var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        // Make a collection
        var collection = new Collection(apiCall.modelClass); // Add records

        _.each(data, function (recordData) {
          collection.addFromApi(_this4.deserializeModel(recordData, apiCall), true);
        }); // Store meta data


        if (meta) {
          // Store it
          collection.setMetaData(meta); // Check pagination

          if (meta.pagination) {
            collection.setPageInfo(meta.pagination.current_page, meta.pagination.total_pages, meta.pagination.per_page, meta.pagination.total);
          }
        }

        return collection;
      }
    }, {
      key: "_deserializeRelationships",
      value: function _deserializeRelationships(data, apiCall) {
        var _this5 = this;

        var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        // Model given?
        if (model === null) {
          // Look it up in the store			
          model = apiCall.getResponseModel(this._getModelName(data.type), data.id); // Not known?

          if (!model) throw new Error('Could not deserialize relationships for unknown model: ' + this._getModelName(data.type) + ' with id ' + data.id);
        } // Check relationships records.


        if (data.relationships) {
          _.each(data.relationships, function (rel, relationshipName) {
            // Is there data?
            if (rel.data) {
              // Camelize
              var modelRelName = inflection.camelize(relationshipName, true); // Is it one record?

              if (rel.data instanceof Array) {
                // Find relationship
                var relationship = model.getRelationship(modelRelName); // Loop and add

                _.each(rel.data, function (relData) {
                  // Get the model
                  var relatedModel = _this5._getRelatedModel(relData, apiCall);

                  if (relatedModel) {
                    // Pivot data defined?
                    var pivotAttributes = null;

                    if (relData.meta && relationship.isPivot() && relationship.pivotModel) {
                      // Collect pivot attributes
                      pivotAttributes = {};

                      _.each(relData.meta, function (value, key) {
                        pivotAttributes[inflection.camelize(key, true)] = value;
                      });
                    } // Add to collection


                    model.addRelatedModel(modelRelName, relatedModel, true, pivotAttributes);
                  }
                }); // Is the relationship sorted?						


                if (relationship && relationship.sortCallback && model.related[modelRelName]) {
                  // Apply sorting
                  model.related[modelRelName].sortBy(relationship.sortCallback);
                }
              } else if (rel.data instanceof Object) {
                // Get the one
                var relatedModel = _this5._getRelatedModel(rel.data, apiCall);

                if (relatedModel) {
                  // Set it
                  model.setRelatedModel(modelRelName, relatedModel);
                }
              } else {
                throw new TypeError('Unrecognized relationship data received from Api');
              }
            }
          });
        } // Trigger the event


        model.trigger('deserialized', [this]);
      }
    }, {
      key: "_getRelatedModel",
      value: function _getRelatedModel(relationshipData, apiCall) {
        // Check data integrity
        var relType = relationshipData.type;
        var relId = relationshipData.id;
        if (!relType) throw new TypeError('Api result did not specify the relationship type');
        if (!relId) throw new TypeError('Api result did not specify the relationship record id'); // Find model in store

        relType = this._getModelName(relType);
        var relModel = apiCall.getResponseModel(relType, relId);
        return relModel;
      }
    }, {
      key: "_getModelName",
      value: function _getModelName(resourceType) {
        // directions.locations => Directions.Location
        // times => Time
        var parts = resourceType.split('.');

        var modelType = _.map(parts, function (part, index) {
          part = inflection.camelize(part);
          return index === parts.length - 1 ? inflection.singularize(part) : part;
        }).join('.');

        return modelType;
      }
    }]);

    return JsonApi;
  }(Api);

  /**
   * @module Api
   */

  var PrimitiveJsonApiCall =
  /*#__PURE__*/
  function (_ApiCall) {
    _inherits(PrimitiveJsonApiCall, _ApiCall);

    function PrimitiveJsonApiCall() {
      _classCallCheck(this, PrimitiveJsonApiCall);

      return _possibleConstructorReturn(this, _getPrototypeOf(PrimitiveJsonApiCall).apply(this, arguments));
    }

    _createClass(PrimitiveJsonApiCall, [{
      key: "include",

      /**
       * @class Api.PrimitiveJsonApiCall
       * @extends Api.ApiCall
       * 
       * @constructor
       * @param  {Api.JsonApi} api 	The Api instance this call originates from
       * @param  {string} method      The HTTP method to use (get, post, put, etc.)
       * @param  {string} uri			The uri to call
       * @param  {Object} data        
       * @param  {Object} ajaxOptions 	 
       */

      /**
        * Include the given relationships in the request
        * 
        * @method include
        * @chainable
        * 
        * @param  {string} relations  JSONAPI include options for request
        */
      value: function include(relations) {
        if (relations instanceof Array) {
          relations = relations.join(',');
        }

        return this.query('include', relations);
      }
    }, {
      key: "filter",
      value: function filter(key, value) {
        return this.query('filter[' + inflection.underscore(key) + ']', value);
      }
    }]);

    return PrimitiveJsonApiCall;
  }(ApiCall);

  /**
   * @module Api
   */

  var PrimitiveJsonApi =
  /*#__PURE__*/
  function (_Api) {
    _inherits(PrimitiveJsonApi, _Api);

    /**
     * @class Api.PrimitiveJsonApi
     * @extends Api.Api
     *
     * @constructor
     * @param  {Object} options
     */
    function PrimitiveJsonApi(options) {
      _classCallCheck(this, PrimitiveJsonApi);

      return _possibleConstructorReturn(this, _getPrototypeOf(PrimitiveJsonApi).call(this, options));
    }

    _createClass(PrimitiveJsonApi, [{
      key: "call",
      value: function call(method, uri) {
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var ajaxOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        // Create api call
        return new PrimitiveJsonApiCall(this, method, uri, data, ajaxOptions);
      }
    }, {
      key: "saveModel",
      value: function saveModel()
      /*model, options*/
      {
        throw new Error('saveModel is not implemented');
      }
    }, {
      key: "deleteModel",
      value: function deleteModel()
      /*model, options*/
      {
        throw new Error('deleteModel is not implemented');
      }
    }, {
      key: "serialize",
      value: function serialize()
      /*model, includeRelated = true, includeRelatedData = false, includedModelGuids = []*/
      {
        throw new Error('serialize is not implemented');
      }
    }, {
      key: "deserialize",
      value: function deserialize(result) {
        var _this = this;

        var apiCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // Call given?
        if (!apiCall) {
          apiCall = new PrimitiveJsonApiCall(this, 'get', '/foo/bar');
        } // Check relationship map


        if (result.links) {
          var map = {};

          _.each(result.links, function (info, key) {
            // Check key (e.g. journeys.line)
            var parts = key.split(/\./);
            var localModel = parts[0];
            var attribute = parts[1]; // Store in map

            map[localModel] = map[localModel] || {};
            map[localModel][attribute] = info.type;
          });

          apiCall.relationshipMap = map;
        } // Deduce root element


        var rootElement = _.camelize(inflection.pluralize(apiCall.modelClass.modelName), true); // Check included data	


        if (result.linked) {
          // Loop and store them in the model stores
          _.each(result.linked, function (records, key) {
            // Guess model
            var modelClass = Model.registry.get(inflection.camelize(inflection.singularize(key)));
            if (!modelClass) throw new Error('Api result contains resource for which there is no Model defined: ' + inflection.camelize(inflection.singularize(key)));

            _.each(records, function (recordData) {
              _this.deserializeModel(recordData, apiCall, false, modelClass);
            });
          }); // Now loop again, and connect related models to each other


          _.each(result.linked, function (records, key) {
            // Guess model
            var modelClass = Model.registry.get(inflection.camelize(inflection.singularize(key)));

            _.each(records, function (recordData) {
              _this._deserializeRelationships(recordData, apiCall, key, null, modelClass);
            });
          });
        } // Is the result an object or an array


        var data = result[rootElement];
        if (data === undefined || data === null) throw new Error('No data received from Api');

        if (data instanceof Array) {
          return this.deserializeCollection(data, apiCall);
        } else if (data instanceof Object) {
          return this.deserializeModel(data, apiCall);
        } // Don't know...


        throw new TypeError('Unrecognized data received from Api');
      }
    }, {
      key: "deserializeModel",
      value: function deserializeModel(data, apiCall) {
        var _this2 = this;

        var deserializeRelationships = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var modelClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        // Look for the type of model
        modelClass = modelClass || apiCall.modelClass;
        var modelName = modelClass.modelName; // Collect attributes

        var attributes = {};

        _.each(data, function (value, key) {
          attributes[inflection.camelize(key, true)] = value;
        }); // Check if the model is already in the store


        var model = apiCall.getResponseModel(modelName, data.id);

        if (!model) {
          // Create a new model.
          attributes.id = /^\d+$/.test(data.id) ? parseInt(data.id) : data.id;
          model = new modelClass(attributes);
          apiCall.storeReponseModel(model);
        } else {
          // Set the attributes (not overwriting dirty ones)
          model.setAttributesFromApi(attributes);
        } // Also deserialize relationships?


        if (deserializeRelationships) {
          var localKey = _.underscored(inflection.pluralize(modelName));

          model.withoutNotifications(function () {
            _this2._deserializeRelationships(data, apiCall, localKey, model);
          });
        }

        return model;
      }
    }, {
      key: "deserializeCollection",
      value: function deserializeCollection(data, apiCall) {
        var _this3 = this;

        // Make a collection
        var collection = new Collection(apiCall.modelClass); // Add records

        _.each(data, function (recordData) {
          collection.addFromApi(_this3.deserializeModel(recordData, apiCall), true);
        });

        return collection;
      }
    }, {
      key: "_deserializeRelationships",
      value: function _deserializeRelationships(data, apiCall, localModelKey) {
        var _this4 = this;

        var model = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var modelClass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        // Model given?
        if (model === null) {
          // Look it up in the store			
          model = apiCall.getResponseModel(this._getModelName(modelClass.modelName), data.id); // Not known?

          if (!model) throw new Error('Could not deserialize relationships for unknown model: ' + this._getModelName(data.type) + ' with id ' + data.id);
        } // Check relationships records.


        if (data.links) {
          _.each(data.links, function (rel, relationshipName) {
            // Is there data?
            if (rel) {
              // __chicken variable?
              if (relationshipName.match(/^__/)) return; // Camelize

              var modelRelName = inflection.camelize(relationshipName, true);
              var resourceType = apiCall.relationshipMap[localModelKey][relationshipName]; // Is it one record?

              if (rel instanceof Array) {
                // Find relationship
                var relationship = model.getRelationship(modelRelName); // Loop and add

                _.each(rel, function (relData) {
                  // Get the model
                  var relatedModel = _this4._getRelatedModel(relData, resourceType, apiCall);

                  if (relatedModel) {
                    // Pivot data defined?
                    var pivotAttributes = null;

                    if (relData.meta && relationship.isPivot() && relationship.pivotModel) {
                      // Collect pivot attributes
                      pivotAttributes = {};

                      _.each(relData.meta, function (value, key) {
                        pivotAttributes[inflection.camelize(key, true)] = value;
                      });
                    } // Add to collection


                    model.addRelatedModel(modelRelName, relatedModel, true, pivotAttributes);
                  }
                });
              } else {
                // Get the one
                var relatedModel = _this4._getRelatedModel(rel, resourceType, apiCall);

                if (relatedModel) {
                  // Set it
                  model.setRelatedModel(modelRelName, relatedModel);
                }
              }
            }
          });
        } // Trigger the event


        model.trigger('deserialized', [this]);
      }
    }, {
      key: "_getRelatedModel",
      value: function _getRelatedModel(relId, relType, apiCall) {
        // Check data integrity
        if (!relType) throw new TypeError('Api result did not specify the relationship type');
        if (!relId) throw new TypeError('Api result did not specify the relationship record id'); // Find model in store

        relType = this._getModelName(relType);
        var relModel = apiCall.getResponseModel(relType, relId);
        return relModel;
      }
    }, {
      key: "_getModelName",
      value: function _getModelName(resourceType) {
        // directions.locations => Directions.Location
        // times => Time
        var parts = resourceType.split('.');

        var modelType = _.map(parts, function (part, index) {
          part = inflection.camelize(part);
          return index === parts.length - 1 ? inflection.singularize(part) : part;
        }).join('.');

        return modelType;
      }
    }]);

    return PrimitiveJsonApi;
  }(Api);

  /**
   * @module Auth
   */

  var Auth =
  /*#__PURE__*/
  function (_Observable) {
    _inherits(Auth, _Observable);

    /**
     * @class Auth.Auth
     *
     * @param 	{Object} options 
     * @constructor
     */
    function Auth() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Auth);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Auth).call(this)); // Default options

      _this.settings = _.defaults(options, {
        getUserUri: '/me',
        onAuthenticated: null,
        onUnauthenticated: null,
        onSessionTimedOut: null,
        onInvalidated: null,
        middlewareName: 'auth'
      });

      _this.set('isAuthenticated', false); // Register the middleware


      _this.middleware = new Middleware(_this.settings.middlewareName, function (next, request, routeMatch) {
        return _this.middlewareAction(next, request, routeMatch);
      });
      Middleware.register(_this.middleware);
      return _this;
    }
    /**
     * Act as middleware for given request
     *
     * @method middleWareAction
     * @param  {Callback} 			next		The callback to call when everything is okay
     * @param  {Routing.Request} 	request 
     * @param  {Routing.RouteMatch} 		routeMatch   	 	 
     */


    _createClass(Auth, [{
      key: "middlewareAction",
      value: function middlewareAction(next, request, routeMatch) {
        // Are we not authenticated?
        if (!this.isAuthenticated()) {
          // Trigger the unauthenticated event
          if (!this.settings.onUnauthenticated) {
            throw new Error('Protected route called without authentication.');
          } // Do the callback


          this.doCallback('onUnauthenticated', [request, routeMatch]);
          return;
        } // Ok.


        next();
      }
    }, {
      key: "doCallback",
      value: function doCallback(key, params) {
        var _this2 = this;

        // Promise
        return new Promise(function (resolve, reject) {
          // Do we have one?
          var callback = _this2.settings[key];

          if (!callback) {
            reject('There is no callback defined for ' + key);
          } // Is it a string with a uri?


          if (typeof callback === 'string') {
            App().goto(callback);
            resolve();
          } // Get the result from the callback


          var result = callback.apply(_this2, params); // Is there something resolvable in there?

          if (result && result instanceof Promise) {
            // Link it.
            result.then(function (result) {
              resolve(result);
            }, function (error) {
              reject(error);
            });
          } else {
            // Just resolve now
            resolve(result);
          }
        });
      }
      /**
       * Try to authenticate using given credentials
       * 
       * @method authenticate
       * @param  {object} credentials 
       * @return {Promise}
       */

    }, {
      key: "authenticate",
      value: function authenticate()
      /* credentials */
      {
        throw new Error('The ' + this.constructor.name + ' class has not implemented the "authenticate" method');
      }
      /**
       * Try to invalidate the current authenticated session
       *
       * @method invalidate
       * @return {Promise}
       */

    }, {
      key: "invalidate",
      value: function invalidate() {
        throw new Error('The ' + this.constructor.name + ' class has not implemented the "invalidate" method');
      }
      /**
       * Check whether the session is authenticated
       * 
       * @method isAuthenticated
       * @return {Boolean}
       */

    }, {
      key: "isAuthenticated",
      value: function isAuthenticated() {
        return this.get('isAuthenticated');
      }
      /**
       * Authorize given ApiCall instance, adding necessary
       * authorization headers, etc.
       * 
       * @method authorizeApiCall
       * @param  {Api.ApiCall} apiCall 
       * @return {Api.ApiCall}
       */

    }, {
      key: "authorizeApiCall",
      value: function authorizeApiCall(apiCall) {
        // Extend with my options
        var ajaxOptions = this.getAjaxOptions();
        $.extend(apiCall.ajaxOptions, ajaxOptions);
        return apiCall;
      }
    }, {
      key: "getAjaxOptions",
      value: function getAjaxOptions() {
        return {};
      }
      /**
       * Read given Api Error and update session accordingly, if
       * appropriate.
       *
       * @method processApiError
       * @param  {object} error 
       * @return {object}       
       */

    }, {
      key: "processApiError",
      value: function processApiError(error) {
        return error;
      }
    }]);

    return Auth;
  }(Observable);

  /**
   * @module AuthError
   */
  var AuthError =
  /*#__PURE__*/
  function () {
    function AuthError(auth, xhrError) {
      _classCallCheck(this, AuthError);

      /**
       * @property auth
       * @type {Auth.Auth}
       */
      this.auth = auth;
      /**
       * @property xhrError
       * @type {jqXHR}
       */

      this.xhrError = xhrError;
    }

    _createClass(AuthError, [{
      key: "getMessage",
      value: function getMessage() {
        // JSON body with message?
        if (this.xhrError.responseJSON && this.xhrError.responseJSON.message) {
          return this.xhrError.responseJSON.message;
        } // Text?


        if (this.xhrError.responseText) return this.xhrError.responseText; // Don't know

        return 'Unknown error';
      }
    }]);

    return AuthError;
  }();

  /**
   * @module Auth
   */

  var JWTAuth =
  /*#__PURE__*/
  function (_Auth) {
    _inherits(JWTAuth, _Auth);

    /**
     * @class Auth.JWTAuth
     * @extends Auth.Auth
     *
     * @param 	{Object} options 
     * @constructor
     */
    function JWTAuth() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, JWTAuth);

      // Default options
      options = $.extend({
        baseUrl: '',
        authenticateUri: '/authenticate',
        refreshUri: '/authenticate/refresh',
        currentUserUri: '/me',
        authenticateMethod: 'post',
        refreshMethod: 'post',
        middlewareName: 'auth.jwt',
        beforeSend: false,
        identifierKey: 'email',
        passwordKey: 'password',
        tokenValidForMinutes: 360,
        autoRefreshToken: true,
        autoRefreshInterval: 7200,
        // 2 hours
        localStorageKey: 'ChickenJWTAuthToken',
        storeCredentialsLocally: false
      }, options);
      _this = _possibleConstructorReturn(this, _getPrototypeOf(JWTAuth).call(this, options));
      /**
       * The current token
       * 
       * @property token
       * @type {string}
       */

      _this.token = null;
      return _this;
    }

    _createClass(JWTAuth, [{
      key: "initialize",
      value: function initialize() {
        var _this2 = this;

        // Get token from localstorage
        try {
          this.token = JSON.parse(localStorage.getItem("".concat(this.settings.localStorageKey, ".token")));
        } catch (err) {
          this.token = null;
        } // Do we have a non-expired token?


        var hasToken = false;

        if (this.token && this.token.receivedAt) {
          // More than 30 minutes old?
          var minTime = moment().unix() - this.settings.tokenValidForMinutes * 60;
          hasToken = this.token.receivedAt > minTime;
        } // No token?


        if (!hasToken) {
          // Credentials stored locally?
          if (this.settings.storeCredentialsLocally) {
            try {
              // Retrieve credentials
              var credentials = JSON.parse(localStorage.getItem("".concat(this.settings.localStorageKey, ".credentials")));

              if (credentials) {
                return new Promise(function (resolve) {
                  // Try to authenticate using stored creds
                  _this2.authenticate(credentials.identifier, credentials.password).then(function () {
                    // Auth Successful!
                    resolve(true);
                  }, function () {
                    // Auth failed
                    resolve(false);
                  });
                });
              }
            } catch (err) {// Continue...
            }
          }
        } // Validate the token


        return new Promise(function (resolve) {
          // No token?
          if (!hasToken) {
            resolve(false);
            return;
          } // Wheter we are or are not authenticated, we resolve, because initializion is complete


          _this2.validateToken().then(function () {
            // Authenticated
            _this2.doCallback('onAuthenticated', []).then(function () {
              _this2.set('isAuthenticated', true);

              resolve(true);
            });
          }, function () {
            resolve(false);
          });
        });
      }
      /**
       * Try to authenticate using given credentials
       * 
       * @method authenticate
       * @param  {string} identifier 	Usually the email address
       * @param  {string} password   
       * @return {Promise} 
       */

    }, {
      key: "authenticate",
      value: function authenticate(identifier, password) {
        var _this3 = this;

        // Make a call.
        return new Promise(function (resolve, reject) {
          // Prepare data
          var data = {};
          data[_this3.settings.identifierKey] = identifier;
          data[_this3.settings.passwordKey] = password; // Make the call.

          $.ajax({
            url: _this3.settings.baseUrl + _this3.settings.authenticateUri,
            data: data,
            method: _this3.settings.authenticateMethod,
            beforeSend: _this3.settings.beforeSend
          }).then(function (result) {
            // Check token.
            if (!result.token) reject('Could not find token in result'); // Store it.

            _this3.setToken(result.token); // Store credentials


            if (_this3.settings.storeCredentialsLocally) {
              localStorage.setItem("".concat(_this3.settings.localStorageKey, ".credentials"), JSON.stringify({
                identifier: identifier,
                password: password
              }));
            } // Handle user events


            _this3.doCallback('onAuthenticated', []).then(function () {
              _this3.set('isAuthenticated', true);

              resolve(_this3.token);
            });
          }).fail(function (error) {
            reject(new AuthError(_this3, error));
          });
        });
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        var _this4 = this;

        return new Promise(function (resolve
        /*, reject*/
        ) {
          // Waiting to time out?
          if (_this4.sessionTimeoutTimeout) {
            clearTimeout(_this4.sessionTimeoutTimeout);
            _this4.sessionTimeoutTimeout = false;
          }

          if (_this4.autoRefreshTimeout) {
            clearTimeout(_this4.autoRefreshTimeout);
            _this4.autoRefreshTimeout = false;
          } // Remove token


          _this4.token = false;
          localStorage.removeItem("".concat(_this4.settings.localStorageKey, ".token"));

          _this4.set('isAuthenticated', false);

          _this4.doCallback('onInvalidated', []);

          _this4.trigger('invalidated');

          resolve();
        });
      }
    }, {
      key: "refreshToken",
      value: function refreshToken() {
        var _this5 = this;

        // Waiting to time out?
        if (this.autoRefreshTimeout) {
          clearTimeout(this.autoRefreshTimeout);
          this.autoRefreshTimeout = false;
        } // Make a call.


        return new Promise(function (resolve, reject) {
          // Already timed out?
          if (!_this5.isAuthenticated()) {
            reject('Cannot refresh token when not authenticated');
            return;
          } // Make the call.


          $.ajax({
            url: _this5.settings.baseUrl + _this5.settings.refreshUri,
            method: _this5.settings.refreshMethod,
            beforeSend: function beforeSend(xhr) {
              xhr.setRequestHeader('Authorization', 'Bearer ' + _this5.token.token);
            }
          }).then(function (result) {
            // Check token.
            if (!result.token) reject('Could not find token in result'); // Store it.

            _this5.setToken(result.token);

            resolve(_this5.token); // Authenticated

            _this5.trigger('tokenRefreshed');
          }).fail(function (error) {
            _this5.invalidate();

            reject(new AuthError(_this5, error));
          });
        });
      }
    }, {
      key: "setToken",
      value: function setToken(tokenString) {
        // Store it
        this.token = {
          token: tokenString,
          receivedAt: moment().unix()
        }; // Waiting to time out?

        if (this.sessionTimeoutTimeout) {
          clearTimeout(this.sessionTimeoutTimeout);
          this.sessionTimeoutTimeout = false;
        }

        if (this.autoRefreshTimeout) {
          clearTimeout(this.autoRefreshTimeout);
          this.autoRefreshTimeout = false;
        } // Remember it.


        localStorage.setItem("".concat(this.settings.localStorageKey, ".token"), JSON.stringify(this.token)); // We are logged in

        this.validateToken();
      }
    }, {
      key: "clearToken",
      value: function clearToken() {
        this.token = null;
        localStorage.removeItem("".concat(this.settings.localStorageKey, ".token"));
      }
    }, {
      key: "forgetCredentials",
      value: function forgetCredentials() {
        localStorage.removeItem("".concat(this.settings.localStorageKey, ".credentials"));
      }
    }, {
      key: "validateToken",
      value: function validateToken() {
        var _this6 = this;

        return new Promise(function (resolve, reject) {
          // Any token?
          if (_this6.token) {
            // Is it an object?
            if (_this6.token instanceof Object) {
              // Still valid?
              var now = moment().unix();
              var timesOutAt = _this6.token.receivedAt + _this6.settings.tokenValidForMinutes * 60;

              if (timesOutAt < now) {
                // No longer valid.
                _this6.set('isAuthenticated', false);

                _this6.clearToken();

                reject();
                return;
              } // Auto refresh?


              if (_this6.settings.autoRefreshToken) {
                // Wait a bit and then refresh
                if (_this6.autoRefreshTimeout) clearTimeout(_this6.autoRefreshTimeout);
                var refreshAt = _this6.token.receivedAt + _this6.settings.autoRefreshInterval;
                var timeoutMs = Math.max((refreshAt - now) * 1000, 5000);
                _this6.autoRefreshTimeout = setTimeout(function () {
                  _this6.autoRefreshTimeout = false;

                  _this6.refreshToken();
                }, timeoutMs);
              } // Wait for it to timeout


              if (_this6.sessionTimeoutTimeout) clearTimeout(_this6.sessionTimeoutTimeout);
              _this6.sessionTimeoutTimeout = setTimeout(function () {
                ////////////////////////////////
                // Make the session time out! //
                ////////////////////////////////
                _this6.sessionTimeoutTimeout = false;

                _this6.trigger('sessionTimedOut');

                _this6.set('isAuthenticated', false);

                _this6.token = null;
                if (_this6.autoRefreshTimeout) clearTimeout(_this6.autoRefreshTimeout);
              }, (timesOutAt - now) * 1000); // Done!

              resolve();
            } else {
              // Not valid
              _this6.set('isAuthenticated', false);

              reject();
              _this6.token = null;
            }
          } else {
            // Not authenticated
            _this6.set('isAuthenticated', false);

            reject();
          }
        });
      }
    }, {
      key: "processApiError",
      value: function processApiError(error) {
        // Unauthorized?
        if (error.xhrError.status === 401) {
          if (error.getMessage() === 'Unable to authenticate with invalid token.') {
            this.invalidate();
          }
        }

        return error;
      }
    }, {
      key: "getAjaxOptions",
      value: function getAjaxOptions() {
        var _this7 = this;

        // Add token.
        var options = {};

        if (this.token) {
          // Add the bearer token
          options.beforeSend = function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + _this7.token.token);
          };
        }

        return options;
      }
    }]);

    return JWTAuth;
  }(Auth);

  JWTAuth.Events = {
    /**
     * This event is triggered when a successful token refresh
     * action is completed
     * 
     * @event tokenRefreshed
     * @type {String}
     */
    TokenRefreshed: 'tokenRefreshed'
  };

  var ModelAttribute =
  /*#__PURE__*/
  function () {
    function ModelAttribute(name, type) {
      _classCallCheck(this, ModelAttribute);

      this.name = name;
      this.type = type;
      this.isPrimaryKey = false;
      this.isNullable = false;
      this.isUnique = false;
      this.defaultValue = undefined;
      this.includeInRequests = true;
      this.size = null;
      this.enumOptions = null;
    }

    _createClass(ModelAttribute, [{
      key: "default",
      value: function _default(value) {
        this.defaultValue = value;
        return this;
      }
    }, {
      key: "primary",
      value: function primary() {
        var isPrimaryKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.isPrimaryKey = isPrimaryKey;
        return this;
      }
    }, {
      key: "unique",
      value: function unique() {
        var isUnique = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.isUnique = isUnique;
        return this;
      }
    }, {
      key: "nullable",
      value: function nullable() {
        var isNullable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.isNullable = isNullable;
        return this;
      }
    }, {
      key: "hidden",
      value: function hidden() {
        var isHiddenFromRequests = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.includeInRequests = !isHiddenFromRequests;
        return this;
      }
      /**
       * Cast given (database) value for use in the application,
       * according to the type of this attribute
       * 
       * @method cast
       * @param  {mixed} value 
       * @return {mixed}       
       */

    }, {
      key: "cast",
      value: function cast(value) {
        // Undefined and null will remain so
        if (value === undefined || value === null) return value;

        switch (this.type) {
          ////////////////
          // Primitives //
          ////////////////
          // Number
          case ModelAttribute.Number:
            return value instanceof Number ? value : Number.parseFloat(value);
          // Integer

          case ModelAttribute.Integer:
            return Number.isInteger(value) ? value : Number.parseInt(value);
          // String

          case ModelAttribute.String:
            return value instanceof String ? value : '' + value;
          // Array

          case ModelAttribute.Array:
            return typeof value === 'string' ? JSON.parse(value) : value;
          ///////////
          // Dates //
          ///////////
          // Date or date time

          case ModelAttribute.Date:
          case ModelAttribute.DateTime:
            return value && !moment.isMoment(value) ? moment(value) : value;

          default:
            return value;
        }
      }
      /**
       * Cast given application value back for use in the database/api.
       *
       * @method uncast
       * @param  {mixed} value 
       * @return {mixed}       
       */

    }, {
      key: "uncast",
      value: function uncast(value) {
        // Undefined and null will remain so
        if (value === undefined || value === null) return value;
        var v;

        switch (this.type) {
          ////////////////
          // Primitives //
          ////////////////
          // Number
          case ModelAttribute.Number:
            return value instanceof Number ? value : Number.parseFloat(value);
          // Integer

          case ModelAttribute.Integer:
            return Number.isInteger(value) ? value : Number.parseInt(value);
          // String

          case ModelAttribute.String:
            return value instanceof String ? value : '' + value;
          //Array

          case ModelAttribute.Array:
            if (value instanceof ObservableArray) value = value.toArray();
            return value;
          ///////////
          // Dates //
          ///////////
          // Date or date time

          case ModelAttribute.Date:
            return moment.isMoment(value) ? value.format('YYYY-MM-DD') : value;

          case ModelAttribute.DateTime:
            return moment.isMoment(value) ? value.format('YYYY-MM-DD HH:mm:ss') : value;
          /////////////
          // Objects //
          /////////////

          case ModelAttribute.Object:
            v = _.omit(value instanceof Observable ? value.attributes : value, function (foo, key) {
              return /^__/.test(key);
            });
            return v;

          default:
            return value;
        }
      }
    }, {
      key: "getDefaultValue",
      value: function getDefaultValue() {
        // Is there a value?
        if (this.defaultValue) return this.defaultValue; // Nullable?

        if (this.isNullable) return null; // Default for type

        switch (this.type) {
          ////////////////
          // Primitives //
          ////////////////
          // Number
          case ModelAttribute.Number:
          case ModelAttribute.Integer:
            return 0;
          // String

          case ModelAttribute.String:
            return '';
          // Boolean

          case ModelAttribute.Boolean:
            return false;
          ///////////
          // Dates //
          ///////////
          // Date or date time

          case ModelAttribute.DateTime:
          case ModelAttribute.Time:
          case ModelAttribute.Date:
            return moment();
          ///////////
          // Model //
          ///////////

          case ModelAttribute.Model:
          case ModelAttribute.Translations:
            return {};

          default:
            return null;
        }
      }
    }]);

    return ModelAttribute;
  }();

  ModelAttribute.Number = 'Number';
  ModelAttribute.Boolean = 'Boolean';
  ModelAttribute.Integer = 'Integer';
  ModelAttribute.String = 'String';
  ModelAttribute.Enum = 'Enum';
  ModelAttribute.Date = 'Date';
  ModelAttribute.DateTime = 'DateTime';
  ModelAttribute.Time = 'Time';
  ModelAttribute.Array = 'Array';
  ModelAttribute.Object = 'Object';
  ModelAttribute.Translations = 'Translations';
  ModelAttribute.Model = 'Model';

  /**
   * @module Data
   */

  var Pivot =
  /*#__PURE__*/
  function (_Model) {
    _inherits(Pivot, _Model);

    function Pivot() {
      _classCallCheck(this, Pivot);

      return _possibleConstructorReturn(this, _getPrototypeOf(Pivot).apply(this, arguments));
    }

    return Pivot;
  }(Model);

  ClassMap.register('Pivot', Pivot);

  Pivot.createFor = function (model, pivotAttributes) {
    // The pivot itself is a model too
    var pivot = new Pivot(pivotAttributes); // Make it

    var proxy = new Proxy(model, {
      get: function get(target, property
      /*, receiver*/
      ) {
        // Get pivot?
        if (property === 'getPivot') {
          return function () {
            return pivot;
          };
        }

        if (property === 'getModel') {
          return function () {
            return model;
          };
        }

        if (property === 'pivot') {
          return pivot;
        } // Is pivot.


        if (property === 'isPivot') {
          return function () {
            return true;
          };
        } // Is it a method?


        var value = target[property];

        if (typeof value === 'function') {
          // Wrap it
          return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            // Is the first argument a key, starting with 'pivot.'?
            if (args.length > 0 && typeof args[0] === 'string' && args[0].match(/^pivot\./)) {
              // Pass on to the pivot model
              args[0] = args[0].replace(/^pivot\./, '');
              return pivot[property].apply(pivot, args);
            } else {
              // Pass on to the regular model
              return target[property].apply(target, args);
            }
          };
        } else {
          // Normal behaviour
          return value;
        }
      }
    });
    return proxy;
  };

  /**
   * @module Data
   */

  var PivotCollection =
  /*#__PURE__*/
  function (_Collection) {
    _inherits(PivotCollection, _Collection);

    function PivotCollection(modelClass, relationship) {
      var _this;

      _classCallCheck(this, PivotCollection);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PivotCollection).call(this, modelClass)); // Localize

      _this.relationship = relationship;
      return _this;
    }

    _createClass(PivotCollection, [{
      key: "add",
      value: function add(model) {
        var pivotAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // Already a pivot?
        if (!model.isPivot()) {
          // Proxy it
          model = Pivot.createFor(model, pivotAttributes);
        } // Add it.


        _get(_getPrototypeOf(PivotCollection.prototype), "add", this).call(this, model);

        return this;
      }
    }]);

    return PivotCollection;
  }(Collection);

  var Relationship =
  /*#__PURE__*/
  function () {
    function Relationship(name, localModel) {
      _classCallCheck(this, Relationship);

      this.name = name;
      this.type = null;
      this.localModel = localModel;
      this.localKey = null;
      this.remoteModel = null;
      this.remoteKey = null;
      this.morphModelKey = null;
      this.morphModelValuePrefix = null;
      this.pivotModel = null;
      this.pivotAttributes = [];
      this.inverseRelationshipName = null;
      this.touchLocalOnUpdate = false;
      this.sortCallback = false;
    } ////////////////////////
    // Relationship types //
    ////////////////////////


    _createClass(Relationship, [{
      key: "hasMany",
      value: function hasMany(remoteModel) {
        var localKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
        var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        // Basics
        this.type = Relationship.HasMany;
        this.remoteModel = remoteModel;

        var cleanModel = _.last(this.localModel.split('.')); // Guess/store the keys


        if (!this.localKey) this.localKey = localKey;

        if (remoteKey || !this.remoteKey) {
          this.remoteKey = remoteKey || inflection.camelize(inflection.singularize(cleanModel), true) + 'Id';
        } // Guess the inverse relationship name


        this.inverseRelationshipName = inflection.camelize(inflection.singularize(cleanModel), true);
        return this;
      }
    }, {
      key: "belongsTo",
      value: function belongsTo(remoteModel) {
        var localKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
        // Basics
        this.type = Relationship.BelongsTo;
        this.remoteModel = remoteModel; // Guess/store the keys

        if (localKey || !this.localKey) {
          this.localKey = localKey || inflection.camelize(inflection.singularize(this.name), true) + 'Id';
        }

        if (!this.remoteKey) this.remoteKey = remoteKey;
        return this;
      }
    }, {
      key: "hasOne",
      value: function hasOne(remoteModel) {
        var localKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
        var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        // Basics
        this.type = Relationship.HasOne;
        this.remoteModel = remoteModel; // Guess/store the keys

        if (!this.localKey) this.localKey = localKey;

        if (remoteKey || !this.remoteKey) {
          this.remoteKey = remoteKey || inflection.camelize(inflection.singularize(this.localModel), true) + 'Id';
        }

        return this;
      } ///////////
      // Pivot //
      ///////////

    }, {
      key: "belongsToMany",
      value: function belongsToMany(remoteModel) {
        var localKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
        var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
        var pivotModel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        // Basics 
        this.type = Relationship.BelongsToMany;
        this.remoteModel = remoteModel;
        this.localKey = localKey;
        this.remoteKey = remoteKey; // Pivot model given?

        if (!pivotModel) {
          var models = [this.localModel, this.remoteModel];
          models.sort();
          pivotModel = models.join('');
        }

        this.pivotModel = pivotModel;
        return this;
      } /////////////////////////
      // Morph relationships //
      /////////////////////////

    }, {
      key: "belongsToMorph",
      value: function belongsToMorph(morphModelKey, localKey) {
        var remoteKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
        var morphModelValuePrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'App\\';
        // Basics
        this.type = Relationship.BelongsToMorph;
        this.remoteModel = null; // Guess/store the keys

        this.localKey = localKey;
        this.remoteKey = remoteKey;
        this.morphModelKey = morphModelKey;
        this.morphModelValuePrefix = morphModelValuePrefix;
        return this;
      }
    }, {
      key: "hasManyMorph",
      value: function hasManyMorph(remoteModel, morphModelKey) {
        var localKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var remoteKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
        var morphModelValuePrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'App\\';
        // Basics
        this.type = Relationship.HasManyMorph;
        this.remoteModel = remoteModel; // Guest/store the keys

        this.morphModelKey = morphModelKey;

        if (localKey || !this.localKey) {
          this.localKey = localKey || this.morphModelKey.replace(/Type$/, 'Id');
        }

        if (!this.remoteKey) this.remoteKey = remoteKey;
        this.morphModelValuePrefix = morphModelValuePrefix;
        return this;
      }
    }, {
      key: "getMorphModelValue",
      value: function getMorphModelValue(remoteModel) {
        // Check prefix
        var name = remoteModel.getModelName();

        if (this.morphModelValuePrefix) {
          name = "".concat(this.morphModelValuePrefix).concat(name);
        }

        return name;
      }
    }, {
      key: "usesCollection",
      value: function usesCollection() {
        return this.type == Relationship.BelongsToMany || this.type == Relationship.HasMany || this.type == Relationship.HasManyThrough || this.type == Relationship.HasManyMorph;
      } /////////////
      // Setters //
      /////////////

    }, {
      key: "setLocalKey",
      value: function setLocalKey(value) {
        this.localKey = value;
        return this;
      }
    }, {
      key: "setRemoteKey",
      value: function setRemoteKey(value) {
        this.remoteKey = value;
        return this;
      } /////////////
      // Methods //
      /////////////

      /**
       * set a flag to update the dirty attribute of local model
       * @return {Relationship} Chainable
       */

    }, {
      key: "touchLocal",
      value: function touchLocal() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.touchLocalOnUpdate = value;
      }
      /**
       * Add local key as attribute to the modelDefinition to ensure 
       * that it is being serialized in the apiCall.
       * Attributes with `Id` will be cast as an integer,
       * Attributes with 'Key' will be cast as a string.
       * For other keys manually define them in the model.
       * 
       * @param {ModelDefinition} modelDefinition the definition to at the attribute to
       * @return {Relationship} chainable
       */

    }, {
      key: "addLocalKeyToModelDefinitionAttributes",
      value: function addLocalKeyToModelDefinitionAttributes(modelDefinition) {
        // Add morph type
        if (this.morphModelKey) {
          modelDefinition.string(this.morphModelKey);
        } // Skip if `id` or already exists


        if (this.localKey == 'id' || modelDefinition.hasAttribute(this.localKey)) return this; // Add key as string

        if (/Key$/.test(this.localKey)) {
          modelDefinition.string(this.localKey);
        } else {
          modelDefinition.integer(this.localKey);
        }

        return this;
      }
      /**
       * Add sorting method to the relationship. The given callback will be
       * called when the relationship Collection is instantiated from the API.
       * 
       * @param  {Function} callback 
       * @chainable
       */

    }, {
      key: "sorted",
      value: function sorted(callback) {
        this.sortCallback = callback;
        return this;
      }
    }, {
      key: "inverse",
      value: function inverse(relationshipName) {
        this.inverseRelationshipName = relationshipName;
        return this;
      }
    }, {
      key: "isStoredOnLocalModel",
      value: function isStoredOnLocalModel() {
        return this.type === Relationship.BelongsTo || this.type == Relationship.BelongsToMorph;
      }
    }, {
      key: "isStoredOnRemoteModel",
      value: function isStoredOnRemoteModel() {
        return this.type === Relationship.HasOne || this.type === Relationship.HasMany || this.type == Relationship.HasManyMorph;
      }
    }, {
      key: "getInitValue",
      value: function getInitValue() {
        // Depends on the type
        switch (this.type) {
          case Relationship.HasMany:
          case Relationship.HasManyThrough:
          case Relationship.HasManyMorph:
            return new Collection(Model.registry.get(this.remoteModel));

          case Relationship.BelongsToMany:
            return new PivotCollection(Model.registry.get(this.remoteModel), this);

          default:
            return null;
        }
      }
      /**
       * Add one or more attributes as pivot attributes
       * 
       * @method withPivot
       * @param  {...string} attributes  One or more attribute names
       * @chainable
       */

    }, {
      key: "withPivot",
      value: function withPivot() {
        for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
          attributes[_key] = arguments[_key];
        }

        this.pivotAttributes = _.union(this.pivotAttributes, attributes);
        return this;
      }
    }, {
      key: "isPivot",
      value: function isPivot() {
        return this.type === Relationship.BelongsToMany;
      }
    }]);

    return Relationship;
  }();

  Relationship.HasMany = 'HasMany';
  Relationship.HasOne = 'HasOne';
  Relationship.BelongsTo = 'BelongsTo';
  Relationship.HasManyThrough = 'HasManyThrough';
  Relationship.BelongsToMany = 'BelongsToMany';
  Relationship.BelongsToMorph = 'BelongsToMorph';
  Relationship.HasManyMorph = 'HasManyMorph';

  /**
   * @module Data
   */

  var ModelDefinition =
  /*#__PURE__*/
  function () {
    function ModelDefinition(name, callback) {
      var _this = this;

      _classCallCheck(this, ModelDefinition);

      this.name = name; // Guess api uri from model name

      var parts = name.split('.');
      this.apiUri = '/' + _.map(parts, function (part, index) {
        return inflection.underscore(index === parts.length - 1 ? inflection.pluralize(part) : part);
      }).join('/');
      this.api = 'default';
      this.attributes = {};
      this.attributeNames = [];
      this.relationships = {};
      this.relationshipsByLocalKey = null;
      this.apiAttributeNames = null;
      this.hiddenAttributeNames = null;
      this.computedAttributes = {};
      this.validationRules = {};
      this.isDynamic = false;
      this.searchFields = null;
      this.primaryKey = 'id';
      callback.apply(this, [this]);

      _.each(this.relationships, function (rel) {
        rel.addLocalKeyToModelDefinitionAttributes(_this);
      }); // Guess the default table name


      this.tableName = inflection.pluralize(_.underscored(this.name));
    }
    /**
     * Making a model dynamic means that not all attributes are defined,
     * and when submitting the model to an API, all set attributes will
     * be sent.
     * 
     * @method dynamic
     * @param  {Boolean} [isDynamic=true] 	
     * @chainable
     */


    _createClass(ModelDefinition, [{
      key: "dynamic",
      value: function dynamic() {
        var isDynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.isDynamic = isDynamic;
        return this;
      }
    }, {
      key: "setPrimaryKey",
      value: function setPrimaryKey() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
        this.primaryKey = key;
        return this;
      }
    }, {
      key: "getRelationshipsByLocalKey",
      value: function getRelationshipsByLocalKey() {
        var _this2 = this;

        // Initialized?
        if (!this.relationshipsByLocalKey) {
          // Loop through relationships
          this.relationshipsByLocalKey = {};

          _.each(this.relationships, function (relationship) {
            // Stored on local model?
            if (relationship.isStoredOnLocalModel()) {
              _this2.relationshipsByLocalKey[relationship.localKey] = relationship;
            }
          });
        }

        return this.relationshipsByLocalKey;
      }
    }, {
      key: "getRelationshipByLocalKey",
      value: function getRelationshipByLocalKey(localKey) {
        return this.getRelationshipsByLocalKey()[localKey];
      }
    }, {
      key: "getApiAttributeNames",
      value: function getApiAttributeNames() {
        var _this3 = this;

        // Initialized?
        if (!this.apiAttributeNames) {
          this.apiAttributeNames = _.filter(this.attributeNames, function (name) {
            return _this3.attributes[name].includeInRequests;
          });
        }

        return this.apiAttributeNames;
      }
    }, {
      key: "getHiddenAttributeNames",
      value: function getHiddenAttributeNames() {
        var _this4 = this;

        // Initialized?
        if (!this.hiddenAttributeNames) {
          this.hiddenAttributeNames = _.filter(this.attributeNames, function (name) {
            return !_this4.attributes[name].includeInRequests;
          });
        }

        return this.hiddenAttributeNames;
      }
    }, {
      key: "hasAttribute",
      value: function hasAttribute(key) {
        return this.attributes[key] !== undefined;
      }
    }, {
      key: "initializeModel",
      value: function initializeModel(model) {
        var _this5 = this;

        // Don't notify
        model.withoutNotifications(function () {
          // Default values
          _.each(_this5.attributes, function (attr) {
            if (attr.defaultValue && model.attributes[attr.name] === undefined) {
              model.set(attr.name, attr.defaultValue);
            }
          }); // Add computed


          _.each(_this5.computedAttributes, function (attr, key) {
            model.set(key, new ComputedProperty(attr.dependencies, attr.callback));
          });
        });
        return model;
      }
    }, {
      key: "attribute",
      value: function attribute(name, type) {
        var attr = new ModelAttribute(name, type);
        this.attributeNames.push(name);
        this.attributes[name] = attr;
        return attr;
      }
    }, {
      key: "computed",
      value: function computed(name, dependencies, callback) {
        this.computedAttributes[name] = {
          dependencies: dependencies,
          callback: callback
        };
        return true;
      } //////////////////////
      // Column defitions //
      //////////////////////

    }, {
      key: "integer",
      value: function integer(name) {
        var attr = this.attribute(name, ModelAttribute.Integer);
        return attr;
      }
    }, {
      key: "number",
      value: function number(name) {
        var attr = this.attribute(name, ModelAttribute.Number);
        return attr;
      }
    }, {
      key: "string",
      value: function string(name, size) {
        var attr = this.attribute(name, ModelAttribute.String);
        attr.size = size;
        return attr;
      }
    }, {
      key: "date",
      value: function date(name) {
        var attr = this.attribute(name, ModelAttribute.Date);
        return attr;
      }
    }, {
      key: "dateTime",
      value: function dateTime(name) {
        var attr = this.attribute(name, ModelAttribute.DateTime);
        return attr;
      }
    }, {
      key: "time",
      value: function time(name) {
        var attr = this.attribute(name, ModelAttribute.Time);
        return attr;
      }
    }, {
      key: "text",
      value: function text(name) {
        var attr = this.attribute(name, ModelAttribute.Text);
        return attr;
      }
    }, {
      key: "boolean",
      value: function boolean(name) {
        var attr = this.attribute(name, ModelAttribute.Boolean);
        return attr;
      }
    }, {
      key: "enum",
      value: function _enum(name, options) {
        var attr = this.attribute(name, ModelAttribute.Enum);
        attr.enumOptions = options;
        return attr;
      } ///////////
      // Model //
      ///////////

    }, {
      key: "model",
      value: function model(name) {
        var attr = this.attribute(name, ModelAttribute.Model);
        return attr;
      } //////////
      // JSON //
      //////////

    }, {
      key: "array",
      value: function array(name) {
        var attr = this.attribute(name, ModelAttribute.Array);
        return attr;
      }
    }, {
      key: "object",
      value: function object(name) {
        var attr = this.attribute(name, ModelAttribute.Object);
        return attr;
      }
    }, {
      key: "translations",
      value: function translations(name) {
        var attr = this.attribute(name, ModelAttribute.Object);
        return attr;
      } //////////////////////
      // Column shortcuts //
      //////////////////////

    }, {
      key: "timestamps",
      value: function timestamps() {
        this.dateTime('createdAt').hidden();
        this.dateTime('updatedAt').hidden();
        return this;
      } ///////////////////
      // Relationships //
      ///////////////////

    }, {
      key: "relationship",
      value: function relationship(name) {
        var rel = new Relationship(name, this.name);
        this.relationships[name] = rel;
        return rel;
      } /////////////////////
      // Form validation //
      /////////////////////

    }, {
      key: "validation",
      value: function validation(rules) {
        var formKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
        this.validationRules[formKey] = rules;
        return this;
      } ///////////////
      // Searching //
      ///////////////

    }, {
      key: "searchable",
      value: function searchable() {
        for (var _len = arguments.length, fields = new Array(_len), _key = 0; _key < _len; _key++) {
          fields[_key] = arguments[_key];
        }

        // Stroe
        this.searchFields = fields;
      }
    }, {
      key: "getSearchFields",
      value: function getSearchFields() {
        return this.searchFields;
      } /////////
      // Api //
      /////////

    }, {
      key: "getApiUri",
      value: function getApiUri() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var uri = this.apiUri;
        if (id) uri += '/' + id;
        return uri;
      }
    }]);

    return ModelDefinition;
  }();

  var FakeHistory =
  /*#__PURE__*/
  function () {
    function FakeHistory() {
      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, FakeHistory);

      this.location = location || {
        action: 'POP',
        hash: '',
        key: 'abc',
        pathname: '/',
        search: ''
      };
    }

    _createClass(FakeHistory, [{
      key: "listen",
      value: function listen()
      /*callback*/
      {}
    }, {
      key: "getCurrentLocation",
      value: function getCurrentLocation() {
        return this.location;
      }
    }]);

    return FakeHistory;
  }();

  var _this = window;
  // Make sure dependencies are loaded //
  ///////////////////////////////////////

  if ($ === undefined || typeof $ !== 'function') throw new Error('Error while initializing Chicken: could not find global jQuery ($). Was jQuery not loaded?');
  if (_ === undefined || typeof _ !== 'function') throw new Error('Error while initializing Chicken: could not find global Underscore (_). Was Underscore not loaded?');
  if (XRegExp === undefined || typeof XRegExp !== 'function') throw new Error('Error while initializing Chicken: could not find global XRegExp. Was XRegExp not loaded?');
  if (underscore_string === undefined || typeof underscore_string !== 'function') throw new Error('Error while initializing Chicken: could not find global Underscore.string (s). Was Underscore.string not loaded?');

  _.mixin(underscore_string.exports()); /////////////////////
  // Chicken Package exports //
  /////////////////////////////

  var Chicken = {
    ////////////////
    // Class tree //
    ////////////////
    Api: {
      Api: Api,
      ApiCall: ApiCall,
      ApiError: ApiError,
      JsonApi: JsonApi,
      JsonApiCall: JsonApiCall,
      PrimitiveJsonApi: PrimitiveJsonApi,
      PrimitiveJsonApiCall: PrimitiveJsonApiCall
    },
    Application: Application,
    Auth: {
      Auth: Auth,
      JWTAuth: JWTAuth
    },
    Core: {
      ComputedProperty: ComputedProperty,
      Obj: Obj,
      Observable: Observable,
      ObservableArray: ObservableArray,
      Reference: Reference,
      SettingsObject: SettingsObject$1
    },
    Data: {
      Collection: Collection,
      Model: Model,
      ModelAttribute: ModelAttribute,
      ModelDefinition: ModelDefinition,
      ModelStore: ModelStore,
      Pivot: Pivot,
      Relationship: Relationship,
      Service: Service
    },
    Dom: {
      ActionBinding: ActionBinding,
      Binding: Binding,
      Component: Component,
      ComponentDefinition: ComponentDefinition,
      Element: Element,
      Helpers: Helpers,
      Renderer: Renderer,
      Transition: Transition,
      View: View,
      ViewContainer: ViewContainer
    },
    Helpers: {
      App: App,
      Chainable: Chainable,
      ClassMap: ClassMap,
      Utils: Utils
    },
    Localization: {
      I18n: I18n
    },
    Routing: {
      Action: Action,
      Controller: Controller,
      FakeHistory: FakeHistory,
      Middleware: Middleware,
      Redirect: Redirect,
      Request: Request,
      Route: Route,
      RouteMatch: RouteMatch,
      Router: Router,
      RoutingError: RoutingError
    },
    inflection: inflection,
    /////////////////
    // Application //
    /////////////////
    application: function application() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Arguments given?
      if (args.length > 0) {
        // Create app
        var app = _construct(Application, args); // Store globally


        Chicken.app = app; // Return

        return app;
      } else {
        return Application.getInstance();
      }
    },
    api: function api() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      return Application.getInstance().apis[key];
    },
    ////////////////////////
    // Easy instantiators //
    ////////////////////////
    controller: function controller(name, actions) {
      // Create class
      var ChickenController =
      /*#__PURE__*/
      function (_Controller) {
        _inherits(ChickenController, _Controller);

        function ChickenController(action) {
          _classCallCheck(this, ChickenController);

          return _possibleConstructorReturn(this, _getPrototypeOf(ChickenController).call(this, action));
        }

        return ChickenController;
      }(Controller);

      $.extend(ChickenController.prototype, actions); // Store it

      Controller.registry.set(name, ChickenController);
      return ChickenController;
    },
    component: function component(name, source, initCallback) {
      var methods = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var renderer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var overwrite = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      // Create definition
      var def = new ComponentDefinition(name, source, initCallback, methods, renderer); // Register it.

      if (Component.registry.has(name) && !overwrite) throw new Error('A component with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
      Component.registry.set(name, def);
      return def;
    },
    helper: function helper(name, callback) {
      var overwrite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      // Already there?
      if (Chicken.Dom.Helpers.User[name] !== undefined && overwrite !== true) {
        throw new Error('A helper with the name ' + name + ' was already defined. If you want to overwrite this, use the "overwrite" parameter.');
      } // Register


      Chicken.Dom.Helpers.User[name] = callback;
      return Chicken.Dom.Helpers.User;
    },
    model: function model(name) {
      var configCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var methods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      // Getter?
      if (configCallback === null) {
        // Get from registry
        return Model.registry.get(name);
      } // Create class


      var ChickenModel =
      /*#__PURE__*/
      function (_Model) {
        _inherits(ChickenModel, _Model);

        function ChickenModel() {
          var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          _classCallCheck(this, ChickenModel);

          return _possibleConstructorReturn(this, _getPrototypeOf(ChickenModel).call(this, initValues, convertToObservables));
        }

        return ChickenModel;
      }(Model); // Add given methods to prototype


      if (methods) {
        $.extend(ChickenModel.prototype, methods);
      } // Configure it.


      ChickenModel.definition = new ModelDefinition(name, configCallback);
      ChickenModel.modelName = name;

      ChickenModel.create = function () {
        var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var convertToObservables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return new ChickenModel(initValues, convertToObservables);
      }; // Store it.


      Model.registry.set(name, ChickenModel);
      return ChickenModel;
    },
    extendModel: function extendModel(name, configCallback) {
      var methods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      // Get the class
      var ChickenModel = Model.registry.get(name);
      if (!ChickenModel) throw new Error('Cannot extend unknown model ' + name); // Add given methods to prototype

      if (methods) {
        $.extend(ChickenModel.prototype, methods);
      } // Apply config callback


      configCallback.apply(ChickenModel.definition, [ChickenModel.definition]);
      return ChickenModel;
    },
    service: function service(name) {
      var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Getter?
      if (methods === null) {
        return Service.get(name);
      } // Create class


      var ChickenService =
      /*#__PURE__*/
      function (_Service) {
        _inherits(ChickenService, _Service);

        function ChickenService() {
          _classCallCheck(this, ChickenService);

          return _possibleConstructorReturn(this, _getPrototypeOf(ChickenService).call(this, name));
        }

        return ChickenService;
      }(Service); // Add given methods to prototype


      $.extend(ChickenService.prototype, methods); // Configure it.

      ChickenService.serviceName = name; // Store it.

      Service.registry.set(name, ChickenService);
      return ChickenService;
    },
    middleware: function middleware(name) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Getter?
      if (callback === null) {
        return Middleware.registry.get(name);
      } // Make it a middleware instance


      var middleware = new Middleware(name, callback); // Store it

      Middleware.registry.set(name, middleware);
      return middleware;
    },
    redirect: function redirect(uri) {
      return new Redirect(uri);
    },
    redirectNamed: function redirectNamed(name) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Relative route?
      var app = Application.getInstance();

      if (/^\./.test(name)) {
        // Current name?
        var curName = app && app.currentRoute ? app.currentRoute.route.name : false;
        if (!curName) throw new Error('The current route does not have a name, so relative links are not possible from here'); // ..? (Level up)

        if (/^\.\./.test(name)) {
          // Remove last part
          var parts = curName.split(/\./);
          parts.pop();
          curName = parts.join('.');
          name = name.replace(/^\./, '');
        } // Add it.


        name = curName + name; // Remove any trailing dots

        name = name.replace(/\.+$/, '');
      } // Find route


      var route = app.router.namedRoutes.get(name);
      if (!route) throw new Error('There is no route with the name "' + name + '"'); // Make uri

      var uri = route.makeUrl(attributes);
      return new Redirect(uri);
    },
    computed: function computed(dependencies, callback) {
      return new ComputedProperty(dependencies, callback);
    },
    observable: function observable() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return new Observable(data);
    },
    view: function view() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _construct(View, args);
    },
    /////////////
    // Helpers //
    /////////////
    each: function each() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return Utils.each.apply(_this, args);
    },
    map: function map() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return Utils.map.apply(_this, args);
    },
    debug: function debug(message) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      switch (Chicken.debugging) {
        case 'console':
          console.log((key ? '[' + key + '] ' : '') + message);
          break;
      }
    },
    getValue: function getValue(obj) {
      return Utils.getValue(obj);
    },
    translate: function translate(key) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Application.getInstance().i18n.translate(key, attributes);
    },
    queryString: queryString,
    debugging: 'console',
    /////////////
    // Filters //
    /////////////
    isNullFilter: '@Q' + JSON.stringify({
      'operator': 'IS NULL'
    }),
    isNotNullFilter: '@Q' + JSON.stringify({
      'operator': 'IS NOT NULL'
    }),
    makeFilter: function makeFilter(operator, value) {
      var addWildcards = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (addWildcards === null) addWildcards = operator === 'LIKE';
      if (addWildcards) value = '%' + value + '%';
      return '@Q' + JSON.stringify({
        value: value,
        operator: operator
      });
    },
    multiFilter: function multiFilter() {
      for (var _len5 = arguments.length, filters = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        filters[_key5] = arguments[_key5];
      }

      // Collect strings
      var objects = _.map(filters, function (f) {
        return JSON.parse(f.replace(/^@Q/, ''));
      }); // Put 'em together


      return '@Q' + JSON.stringify(objects);
    }
  };
  window.Chicken = Chicken;

  return Chicken;

})));
//# sourceMappingURL=chicken.js.map
