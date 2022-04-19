// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _storeJs = require("./modules/state/store.js");
var _storeJsDefault = parcelHelpers.interopDefault(_storeJs);
var _gameSliceJs = require("./modules/state/slices/gameSlice.js");
var _canvasUtilitesJs = require("./modules/lib/canvasUtilites.js");
var _hexagonsJs = require("./modules/lib/hexagons.js");
var _utilitiesJs = require("./modules/lib/utilities.js");
var _mapJs = require("./modules/components/Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _playerJs = require("./modules/components/Player.js");
var _playerJsDefault = parcelHelpers.interopDefault(_playerJs);
var _enemyJs = require("./modules/components/Enemy.js");
var _enemyJsDefault = parcelHelpers.interopDefault(_enemyJs);
var _mapJs1 = require("./modules/lib/map.js");
const { round  } = Math;
const root = document.getElementById("game");
const ctx = root.getContext("2d");
let animFrame = null;
_storeJsDefault.default.dispatch(_gameSliceJs.generateMap(6));
_storeJsDefault.default.dispatch(_gameSliceJs.spawnPlayer());
_storeJsDefault.default.dispatch(_gameSliceJs.spawnEnemies(4));
const state = _storeJsDefault.default.getState();
let { x , y  } = state.game.player.location;
render();
function render() {
    cleanup();
    const state1 = _storeJsDefault.default.getState();
    const map = state1.game.map;
    const enemies = state1.game.enemies;
    const playerLocation = state1.game.player.location;
    x = _utilitiesJs.lerp(x, playerLocation.x, 0.1);
    y = _utilitiesJs.lerp(y, playerLocation.y, 0.1);
    _mapJsDefault.default(ctx, map);
    enemies.forEach((enemy)=>{
        _enemyJsDefault.default(ctx, _hexagonsJs.point(enemy.location.x, enemy.location.y));
    });
    _playerJsDefault.default(ctx, _hexagonsJs.point(x, y));
    animFrame = requestAnimationFrame(render);
}
_storeJsDefault.default.subscribe(()=>{
    cancelAnimationFrame(animFrame);
    render();
});
window.addEventListener('resize', render);
root.addEventListener('click', (event)=>{
    const { x: x1 , y: y1  } = _canvasUtilitesJs.getMousePos(ctx, event);
    _storeJsDefault.default.dispatch(_gameSliceJs.movePlayer(_hexagonsJs.point(x1, y1)));
});
function cleanup() {
    root.width = window.innerWidth;
    root.height = window.innerHeight;
    ctx.translate(root.width * 0.5, root.height * 0.5);
    ctx.clearRect(0, 0, root.width, root.height);
}

},{"./modules/components/Map.js":"1bbbH","./modules/state/store.js":"eDdEI","./modules/lib/canvasUtilites.js":"2euFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./modules/components/Player.js":"26DE9","./modules/state/slices/gameSlice.js":"gYyhL","./modules/lib/hexagons.js":"5mY9R","./modules/components/Enemy.js":"d2WZj","./modules/lib/utilities.js":"3qGIs","./modules/lib/map.js":"kUmw2"}],"1bbbH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function drawHexagon(ctx, hex) {
    const { corners , isTraversable  } = hex;
    ctx.moveTo(0, 0);
    ctx.beginPath();
    corners.forEach((corner)=>{
        ctx.lineTo(corner.x, corner.y);
    });
    ctx.lineTo(corners[0].x, corners[0].y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#3f3f3f';
    ctx.stroke();
    ctx.fillStyle = 'rgba(42, 160, 216, 0)';
    if (isTraversable) ctx.fillStyle = hex.color;
    ctx.fill();
    ctx.closePath();
}
function Map(ctx, map) {
    map.forEach((hex)=>{
        drawHexagon(ctx, hex);
    });
}
exports.default = Map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eDdEI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toolkit = require("@reduxjs/toolkit");
var _gameSliceJs = require("./slices/gameSlice.js");
var _gameSliceJsDefault = parcelHelpers.interopDefault(_gameSliceJs);
const store = _toolkit.configureStore({
    reducer: {
        game: _gameSliceJsDefault.default
    }
});
exports.default = store;

},{"@reduxjs/toolkit":"lL1Ef","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./slices/gameSlice.js":"gYyhL"}],"lL1Ef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MiddlewareArray", ()=>MiddlewareArray
);
parcelHelpers.export(exports, "TaskAbortError", ()=>TaskAbortError
);
parcelHelpers.export(exports, "addListener", ()=>addListener
);
parcelHelpers.export(exports, "clearAllListeners", ()=>clearAllListeners
);
parcelHelpers.export(exports, "configureStore", ()=>configureStore
);
parcelHelpers.export(exports, "createAction", ()=>createAction
);
parcelHelpers.export(exports, "createAsyncThunk", ()=>createAsyncThunk
);
parcelHelpers.export(exports, "createDraftSafeSelector", ()=>createDraftSafeSelector
);
parcelHelpers.export(exports, "createEntityAdapter", ()=>createEntityAdapter
);
parcelHelpers.export(exports, "createImmutableStateInvariantMiddleware", ()=>createImmutableStateInvariantMiddleware
);
parcelHelpers.export(exports, "createListenerMiddleware", ()=>createListenerMiddleware
);
parcelHelpers.export(exports, "createNextState", ()=>_immerDefault.default
);
parcelHelpers.export(exports, "createReducer", ()=>createReducer
);
parcelHelpers.export(exports, "createSelector", ()=>_reselect.createSelector
);
parcelHelpers.export(exports, "createSerializableStateInvariantMiddleware", ()=>createSerializableStateInvariantMiddleware
);
parcelHelpers.export(exports, "createSlice", ()=>createSlice
);
parcelHelpers.export(exports, "current", ()=>_immer.current
);
parcelHelpers.export(exports, "findNonSerializableValue", ()=>findNonSerializableValue
);
parcelHelpers.export(exports, "freeze", ()=>_immer.freeze
);
parcelHelpers.export(exports, "getDefaultMiddleware", ()=>getDefaultMiddleware
);
parcelHelpers.export(exports, "getType", ()=>getType
);
parcelHelpers.export(exports, "isAllOf", ()=>isAllOf
);
parcelHelpers.export(exports, "isAnyOf", ()=>isAnyOf
);
parcelHelpers.export(exports, "isAsyncThunkAction", ()=>isAsyncThunkAction
);
parcelHelpers.export(exports, "isDraft", ()=>_immer.isDraft
);
parcelHelpers.export(exports, "isFulfilled", ()=>isFulfilled
);
parcelHelpers.export(exports, "isImmutableDefault", ()=>isImmutableDefault
);
parcelHelpers.export(exports, "isPending", ()=>isPending
);
parcelHelpers.export(exports, "isPlain", ()=>isPlain
);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject
);
parcelHelpers.export(exports, "isRejected", ()=>isRejected
);
parcelHelpers.export(exports, "isRejectedWithValue", ()=>isRejectedWithValue
);
parcelHelpers.export(exports, "miniSerializeError", ()=>miniSerializeError
);
parcelHelpers.export(exports, "nanoid", ()=>nanoid
);
parcelHelpers.export(exports, "original", ()=>_immer.original
);
parcelHelpers.export(exports, "removeListener", ()=>removeListener
);
parcelHelpers.export(exports, "unwrapResult", ()=>unwrapResult
);
// src/index.ts
var _immer = require("immer");
var _immerDefault = parcelHelpers.interopDefault(_immer);
var _reselect = require("reselect");
// src/configureStore.ts
var _redux = require("redux");
// src/getDefaultMiddleware.ts
var _reduxThunk = require("redux-thunk");
var _reduxThunkDefault = parcelHelpers.interopDefault(_reduxThunk);
parcelHelpers.exportAll(_redux, exports);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
    return key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: value
    }) : obj[key] = value;
};
var __spreadValues = function(a, b) {
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for(var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++){
        var prop = _c[_i];
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = function(a, b) {
    return __defProps(a, __getOwnPropDescs(b));
};
var __async = function(__this, __arguments, generator) {
    return new Promise(function(resolve, reject) {
        var fulfilled = function(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function(x) {
            return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
var createDraftSafeSelector = function() {
    var args = [];
    for(var _i1 = 0; _i1 < arguments.length; _i1++)args[_i1] = arguments[_i1];
    var selector = _reselect.createSelector.apply(void 0, args);
    var wrappedSelector = function(value) {
        var rest = [];
        for(var _i = 1; _i < arguments.length; _i++)rest[_i - 1] = arguments[_i];
        return selector.apply(void 0, __spreadArray([
            _immer.isDraft(value) ? _immer.current(value) : value
        ], rest));
    };
    return wrappedSelector;
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return _redux.compose;
    return _redux.compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
    return function(noop2) {
        return noop2;
    };
};
// src/isPlainObject.ts
function isPlainObject(value) {
    if (typeof value !== "object" || value === null) return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null) return true;
    var baseProto = proto;
    while(Object.getPrototypeOf(baseProto) !== null)baseProto = Object.getPrototypeOf(baseProto);
    return proto === baseProto;
}
// src/utils.ts
function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
        measureTime: function(fn) {
            var started = Date.now();
            try {
                return fn();
            } finally{
                var finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded: function() {
            if (elapsed > maxDelay) console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
        }
    };
}
var MiddlewareArray = /** @class */ function(_super) {
    __extends(MiddlewareArray1, _super);
    function MiddlewareArray1() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray1.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray1, Symbol.species, {
        get: function() {
            return MiddlewareArray1;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray1.prototype.concat = function() {
        var arr = [];
        for(var _i = 0; _i < arguments.length; _i++)arr[_i] = arguments[_i];
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray1.prototype.prepend = function() {
        var arr = [];
        for(var _i = 0; _i < arguments.length; _i++)arr[_i] = arguments[_i];
        if (arr.length === 1 && Array.isArray(arr[0])) return new (MiddlewareArray1.bind.apply(MiddlewareArray1, __spreadArray([
            void 0
        ], arr[0].concat(this))))();
        return new (MiddlewareArray1.bind.apply(MiddlewareArray1, __spreadArray([
            void 0
        ], arr.concat(this))))();
    };
    return MiddlewareArray1;
}(Array);
// src/immutableStateInvariantMiddleware.ts
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) return;
    if (isProduction) throw new Error(prefix);
    throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler) decycler = function(_, value) {
        if (stack[0] === value) return "[Circular ~]";
        return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };
    return function(key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) value = decycler.call(this, key, value);
        } else stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
    };
}
function isImmutableDefault(value) {
    return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations: function() {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) ignorePaths = [];
    if (path === void 0) path = "";
    var tracked = {
        value: obj
    };
    if (!isImmutable(obj)) {
        tracked.children = {};
        for(var key in obj){
            var childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) continue;
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
    if (ignorePaths === void 0) ignorePaths = [];
    if (sameParentRef === void 0) sameParentRef = false;
    if (path === void 0) path = "";
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) return {
        wasMutated: true,
        path: path
    };
    if (isImmutable(prevObj) || isImmutable(obj)) return {
        wasMutated: false
    };
    var keysToDetect = {};
    for(var key in trackedProperty.children)keysToDetect[key] = true;
    for(var key in obj)keysToDetect[key] = true;
    for(var key in keysToDetect){
        var childPath = path ? path + "." + key : key;
        if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) continue;
        var result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);
        if (result.wasMutated) return result;
    }
    return {
        wasMutated: false
    };
}
function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) options = {};
    var next1, action1;
    var _c1 = options.isImmutable, isImmutable = _c1 === void 0 ? isImmutableDefault : _c1, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function(_c) {
        var getState = _c.getState;
        var state = getState();
        var tracker = track(state);
        var result;
        return function(next) {
            return function(action) {
                var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
                measureUtils.measureTime(function() {
                    state = getState();
                    result = tracker.detectMutations();
                    tracker = track(state);
                    invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
                });
                var dispatchedAction = next(action);
                measureUtils.measureTime(function() {
                    state = getState();
                    result = tracker.detectMutations();
                    tracker = track(state);
                    result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
                });
                measureUtils.warnIfExceeded();
                return dispatchedAction;
            };
        };
    };
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    var type = typeof val;
    return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
    if (path === void 0) path = "";
    if (isSerializable === void 0) isSerializable = isPlain;
    if (ignoredPaths === void 0) ignoredPaths = [];
    var foundNestedSerializable;
    if (!isSerializable(value)) return {
        keyPath: path || "<root>",
        value: value
    };
    if (typeof value !== "object" || value === null) return false;
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    for(var _i = 0, entries_1 = entries; _i < entries_1.length; _i++){
        var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) continue;
        if (!isSerializable(nestedValue)) return {
            keyPath: nestedPath,
            value: nestedValue
        };
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);
            if (foundNestedSerializable) return foundNestedSerializable;
        }
    }
    return false;
}
function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) options = {};
    var next2, action2;
    var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? [
        "meta.arg",
        "meta.baseQueryMeta"
    ] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j;
    return function(storeAPI) {
        return function(next) {
            return function(action) {
                var result = next(action);
                var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
                if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) measureUtils.measureTime(function() {
                    var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);
                    if (foundActionNonSerializableValue) {
                        var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                        console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                    }
                });
                if (!ignoreState) {
                    measureUtils.measureTime(function() {
                        var state = storeAPI.getState();
                        var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);
                        if (foundStateNonSerializableValue) {
                            var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                            console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
                        }
                    });
                    measureUtils.warnIfExceeded();
                }
                return result;
            };
        };
    };
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options) {
    if (options === void 0) options = {};
    var _c = options.thunk, thunk = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e;
    var middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean(thunk)) middlewareArray.push(_reduxThunkDefault.default);
        else middlewareArray.push(_reduxThunkDefault.default.withExtraArgument(thunk.extraArgument));
    }
    if (immutableCheck) {
        var immutableOptions = {};
        if (!isBoolean(immutableCheck)) immutableOptions = immutableCheck;
        middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }
    if (serializableCheck) {
        var serializableOptions = {};
        if (!isBoolean(serializableCheck)) serializableOptions = serializableCheck;
        middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = false;
function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
    var rootReducer;
    if (typeof reducer === "function") rootReducer = reducer;
    else if (isPlainObject(reducer)) rootReducer = _redux.combineReducers(reducer);
    else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
        if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) throw new Error("when using a middleware builder function, an array of middleware must be returned");
    }
    if (!IS_PRODUCTION && finalMiddleware.some(function(item) {
        return typeof item !== "function";
    })) throw new Error("each middleware provided to configureStore must be a function");
    var middlewareEnhancer = _redux.applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = _redux.compose;
    if (devTools) finalCompose = composeWithDevTools(__spreadValues({
        trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
    var storeEnhancers = [
        middlewareEnhancer
    ];
    if (Array.isArray(enhancers)) storeEnhancers = __spreadArray([
        middlewareEnhancer
    ], enhancers);
    else if (typeof enhancers === "function") storeEnhancers = enhancers(storeEnhancers);
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return _redux.createStore(rootReducer, preloadedState, composedEnhancer);
}
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) throw new Error("prepareAction did not return an object");
            return __spreadValues(__spreadValues({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && {
                meta: prepared.meta
            }), "error" in prepared && {
                error: prepared.error
            });
        }
        return {
            type: type,
            payload: args[0]
        };
    }
    actionCreator.toString = function() {
        return "" + type;
    };
    actionCreator.type = type;
    actionCreator.match = function(action) {
        return action.type === type;
    };
    return actionCreator;
}
function isFSA(action) {
    return isPlainObject(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return [
        "type",
        "payload",
        "error",
        "meta"
    ].indexOf(key) > -1;
}
function getType(actionCreator) {
    return "" + actionCreator;
}
// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function(typeOrActionCreator, reducer) {
            if (actionMatchers.length > 0) throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
            if (defaultCaseReducer) throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) throw new Error("addCase cannot be called with two reducers for the same action type");
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function(matcher, reducer) {
            if (defaultCaseReducer) throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
            actionMatchers.push({
                matcher: matcher,
                reducer: reducer
            });
            return builder;
        },
        addDefaultCase: function(reducer) {
            if (defaultCaseReducer) throw new Error("`builder.addDefaultCase` can only be called once");
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [
        actionsMap,
        actionMatchers,
        defaultCaseReducer
    ];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) actionMatchers = [];
    var _c2 = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [
        mapOrBuilderCallback,
        actionMatchers,
        defaultCaseReducer
    ], actionsMap = _c2[0], finalActionMatchers = _c2[1], finalDefaultCaseReducer = _c2[2];
    var getInitialState;
    if (isStateFunction(initialState)) getInitialState = function() {
        return _immerDefault.default(initialState(), function() {});
    };
    else {
        var frozenInitialState_1 = _immerDefault.default(initialState, function() {});
        getInitialState = function() {
            return frozenInitialState_1;
        };
    }
    function reducer(state, action) {
        if (state === void 0) state = getInitialState();
        var caseReducers = __spreadArray([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function(_c) {
            var matcher = _c.matcher;
            return matcher(action);
        }).map(function(_c) {
            var reducer2 = _c.reducer;
            return reducer2;
        }));
        if (caseReducers.filter(function(cr) {
            return !!cr;
        }).length === 0) caseReducers = [
            finalDefaultCaseReducer
        ];
        return caseReducers.reduce(function(previousState, caseReducer) {
            if (caseReducer) {
                if (_immer.isDraft(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (typeof result === "undefined") return previousState;
                    return result;
                } else if (!_immer.isDraftable(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (typeof result === "undefined") {
                        if (previousState === null) return previousState;
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                } else return _immerDefault.default(previousState, function(draft) {
                    return caseReducer(draft, action);
                });
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/createSlice.ts
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name;
    if (!name) throw new Error("`name` is a required option for createSlice");
    var initialState = typeof options.initialState == "function" ? options.initialState : _immerDefault.default(options.initialState, function() {});
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function(reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        } else caseReducer = maybeReducerWithPrepare;
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    function buildReducer() {
        var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [
            options.extraReducers
        ], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
        var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
        return createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
    }
    var _reducer;
    return {
        name: name,
        reducer: function(state, action) {
            if (!_reducer) _reducer = buildReducer();
            return _reducer(state, action);
        },
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName,
        getInitialState: function() {
            if (!_reducer) _reducer = buildReducer();
            return _reducer.getInitialState();
        }
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) additionalState = {};
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return {
        getInitialState: getInitialState
    };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function(state) {
            return state.ids;
        };
        var selectEntities = function(state) {
            return state.entities;
        };
        var selectAll = createDraftSafeSelector(selectIds, selectEntities, function(ids, entities) {
            return ids.map(function(id) {
                return entities[id];
            });
        });
        var selectId = function(_, id) {
            return id;
        };
        var selectById = function(entities, id) {
            return entities[id];
        };
        var selectTotal = createDraftSafeSelector(selectIds, function(ids) {
            return ids.length;
        });
        if (!selectState) return {
            selectIds: selectIds,
            selectEntities: selectEntities,
            selectAll: selectAll,
            selectTotal: selectTotal,
            selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
        };
        var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return {
        getSelectors: getSelectors
    };
}
function createSingleArgumentStateOperator(mutator) {
    var operator = createStateOperator(function(_, state) {
        return mutator(state);
    });
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        var runMutator = function(draft) {
            if (isPayloadActionArgument(arg)) mutator(arg.payload, draft);
            else mutator(arg, draft);
        };
        if (_immer.isDraft(state)) {
            runMutator(state);
            return state;
        } else return _immerDefault.default(state, runMutator);
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if (key === void 0) console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) entities = Object.values(entities);
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for(var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++){
        var entity = newEntities_1[_i];
        var id = selectIdValue(entity, selectId);
        if (id in state.entities) updated.push({
            id: id,
            changes: entity
        });
        else added.push(entity);
    }
    return [
        added,
        updated
    ];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) return;
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for(var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++){
            var entity = newEntities_2[_i];
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) state.ids.push(key);
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for(var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++){
            var entity = newEntities_3[_i];
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([
            key
        ], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = false;
        keys.forEach(function(key) {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) state.ids = state.ids.filter(function(id) {
            return id in state.entities;
        });
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        var updatesPerEntity = {};
        updates.forEach(function(update) {
            if (update.id in state.entities) updatesPerEntity[update.id] = {
                id: update.id,
                changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
            };
        });
        updates = Object.values(updatesPerEntity);
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function(update) {
                return takeNewKey(newKeys, update, state);
            }).length > 0;
            if (didMutateIds) state.ids = state.ids.map(function(id) {
                return newKeys[id] || id;
            });
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    var _c3 = createUnsortedStateAdapter(selectId), removeOne = _c3.removeOne, removeMany = _c3.removeMany, removeAll = _c3.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([
            entity
        ], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var models = newEntities.filter(function(model) {
            return !(selectIdValue(model, selectId) in state.entities);
        });
        if (models.length !== 0) merge(models, state);
    }
    function setOneMutably(entity, state) {
        return setManyMutably([
            entity
        ], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) merge(newEntities, state);
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) return false;
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        var models = [];
        updates.forEach(function(update) {
            return takeUpdatedModel(models, update, state);
        });
        if (models.length !== 0) merge(models, state);
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for(var i = 0; i < a.length && i < b.length; i++){
            if (a[i] === b[i]) continue;
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach(function(model) {
            state.entities[selectId(model)] = model;
        });
        var allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        var newSortedIds = allEntities.map(selectId);
        var ids = state.ids;
        if (!areArraysEqual(ids, newSortedIds)) state.ids = newSortedIds;
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options) {
    if (options === void 0) options = {};
    var _c = __spreadValues({
        sortComparer: false,
        selectId: function(instance) {
            return instance.id;
        }
    }, options), selectId = _c.selectId, sortComparer = _c.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __spreadValues(__spreadValues(__spreadValues({
        selectId: selectId,
        sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
    if (size === void 0) size = 21;
    var id = "";
    var i = size;
    while(i--)id += urlAlphabet[Math.random() * 64 | 0];
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = /** @class */ function() {
    function RejectWithValue1(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return RejectWithValue1;
}();
var FulfillWithMeta = /** @class */ function() {
    function FulfillWithMeta1(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return FulfillWithMeta1;
}();
var miniSerializeError = function(value) {
    if (typeof value === "object" && value !== null) {
        var simpleError = {};
        for(var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++){
            var property = commonProperties_1[_i];
            if (typeof value[property] === "string") simpleError[property] = value[property];
        }
        return simpleError;
    }
    return {
        message: String(value)
    };
};
function createAsyncThunk(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
        return {
            payload: payload,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "fulfilled"
            })
        };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
        return {
            payload: void 0,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "pending"
            })
        };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
        return {
            payload: payload,
            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: "rejected",
                aborted: (error == null ? void 0 : error.name) === "AbortError",
                condition: (error == null ? void 0 : error.name) === "ConditionError"
            })
        };
    });
    var displayedWarning = false;
    var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ function() {
        function class_1() {
            this.signal = {
                aborted: false,
                addEventListener: function() {},
                dispatchEvent: function() {
                    return false;
                },
                onabort: function() {},
                removeEventListener: function() {}
            };
        }
        class_1.prototype.abort = function() {
            if (!displayedWarning) {
                displayedWarning = true;
                console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
            }
        };
        return class_1;
    }();
    function actionCreator(arg) {
        return function(dispatch, getState, extra) {
            var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
            var abortController = new AC();
            var abortReason;
            var abortedPromise = new Promise(function(_, reject) {
                return abortController.signal.addEventListener("abort", function() {
                    return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                    });
                });
            });
            var started = false;
            function abort(reason) {
                if (started) {
                    abortReason = reason;
                    abortController.abort();
                }
            }
            var promise = function() {
                return __async(this, null, function() {
                    var _a, _b, finalAction, conditionResult, err_1, skipDispatch;
                    return __generator(this, function(_c) {
                        switch(_c.label){
                            case 0:
                                _c.trys.push([
                                    0,
                                    4,
                                    ,
                                    5
                                ]);
                                conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, {
                                    getState: getState,
                                    extra: extra
                                });
                                if (!isThenable(conditionResult)) return [
                                    3 /*break*/ ,
                                    2
                                ];
                                return [
                                    4 /*yield*/ ,
                                    conditionResult
                                ];
                            case 1:
                                conditionResult = _c.sent();
                                _c.label = 2;
                            case 2:
                                if (conditionResult === false) throw {
                                    name: "ConditionError",
                                    message: "Aborted due to condition callback returning false."
                                };
                                started = true;
                                dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, {
                                    requestId: requestId,
                                    arg: arg
                                }, {
                                    getState: getState,
                                    extra: extra
                                })));
                                return [
                                    4 /*yield*/ ,
                                    Promise.race([
                                        abortedPromise,
                                        Promise.resolve(payloadCreator(arg, {
                                            dispatch: dispatch,
                                            getState: getState,
                                            extra: extra,
                                            requestId: requestId,
                                            signal: abortController.signal,
                                            rejectWithValue: function(value, meta) {
                                                return new RejectWithValue(value, meta);
                                            },
                                            fulfillWithValue: function(value, meta) {
                                                return new FulfillWithMeta(value, meta);
                                            }
                                        })).then(function(result) {
                                            if (result instanceof RejectWithValue) throw result;
                                            if (result instanceof FulfillWithMeta) return fulfilled(result.payload, requestId, arg, result.meta);
                                            return fulfilled(result, requestId, arg);
                                        })
                                    ])
                                ];
                            case 3:
                                finalAction = _c.sent();
                                return [
                                    3 /*break*/ ,
                                    5
                                ];
                            case 4:
                                err_1 = _c.sent();
                                finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                return [
                                    3 /*break*/ ,
                                    5
                                ];
                            case 5:
                                skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                if (!skipDispatch) dispatch(finalAction);
                                return [
                                    2 /*return*/ ,
                                    finalAction
                                ];
                        }
                    });
                });
            }();
            return Object.assign(promise, {
                abort: abort,
                requestId: requestId,
                arg: arg,
                unwrap: function() {
                    return promise.then(unwrapResult);
                }
            });
        };
    }
    return Object.assign(actionCreator, {
        pending: pending,
        rejected: rejected,
        fulfilled: fulfilled,
        typePrefix: typePrefix
    });
}
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) throw action.payload;
    if (action.error) throw action.error;
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/tsHelpers.ts
var hasMatchFunction = function(v) {
    return v && typeof v.match === "function";
};
// src/matchers.ts
var matches = function(matcher, action) {
    if (hasMatchFunction(matcher)) return matcher.match(action);
    else return matcher(action);
};
function isAnyOf() {
    var matchers = [];
    for(var _i = 0; _i < arguments.length; _i++)matchers[_i] = arguments[_i];
    return function(action) {
        return matchers.some(function(matcher) {
            return matches(matcher, action);
        });
    };
}
function isAllOf() {
    var matchers = [];
    for(var _i = 0; _i < arguments.length; _i++)matchers[_i] = arguments[_i];
    return function(action) {
        return matchers.every(function(matcher) {
            return matches(matcher, action);
        });
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta) return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    var asyncThunks = [];
    for(var _i = 0; _i < arguments.length; _i++)asyncThunks[_i] = arguments[_i];
    if (asyncThunks.length === 0) return function(action) {
        return hasExpectedRequestMetadata(action, [
            "pending"
        ]);
    };
    if (!isAsyncThunkArray(asyncThunks)) return isPending()(asyncThunks[0]);
    return function(action) {
        var matchers = asyncThunks.map(function(asyncThunk) {
            return asyncThunk.pending;
        });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejected() {
    var asyncThunks = [];
    for(var _i = 0; _i < arguments.length; _i++)asyncThunks[_i] = arguments[_i];
    if (asyncThunks.length === 0) return function(action) {
        return hasExpectedRequestMetadata(action, [
            "rejected"
        ]);
    };
    if (!isAsyncThunkArray(asyncThunks)) return isRejected()(asyncThunks[0]);
    return function(action) {
        var matchers = asyncThunks.map(function(asyncThunk) {
            return asyncThunk.rejected;
        });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue() {
    var asyncThunks = [];
    for(var _i = 0; _i < arguments.length; _i++)asyncThunks[_i] = arguments[_i];
    var hasFlag = function(action) {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) return function(action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
    if (!isAsyncThunkArray(asyncThunks)) return isRejectedWithValue()(asyncThunks[0]);
    return function(action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled() {
    var asyncThunks = [];
    for(var _i = 0; _i < arguments.length; _i++)asyncThunks[_i] = arguments[_i];
    if (asyncThunks.length === 0) return function(action) {
        return hasExpectedRequestMetadata(action, [
            "fulfilled"
        ]);
    };
    if (!isAsyncThunkArray(asyncThunks)) return isFulfilled()(asyncThunks[0]);
    return function(action) {
        var matchers = asyncThunks.map(function(asyncThunk) {
            return asyncThunk.fulfilled;
        });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction() {
    var asyncThunks = [];
    for(var _i2 = 0; _i2 < arguments.length; _i2++)asyncThunks[_i2] = arguments[_i2];
    if (asyncThunks.length === 0) return function(action) {
        return hasExpectedRequestMetadata(action, [
            "pending",
            "fulfilled",
            "rejected"
        ]);
    };
    if (!isAsyncThunkArray(asyncThunks)) return isAsyncThunkAction()(asyncThunks[0]);
    return function(action) {
        var matchers = [];
        for(var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++){
            var asyncThunk = asyncThunks_1[_i];
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
// src/listenerMiddleware/utils.ts
var assertFunction = function(func, expected) {
    if (typeof func !== "function") throw new TypeError(expected + " is not a function");
};
var noop = function() {};
var catchRejection = function(promise, onError) {
    if (onError === void 0) onError = noop;
    promise.catch(onError);
    return promise;
};
var addAbortSignalListener = function(abortSignal, callback) {
    abortSignal.addEventListener("abort", callback, {
        once: true
    });
};
var abortControllerWithReason = function(abortController, reason) {
    var signal = abortController.signal;
    if (signal.aborted) return;
    if (!("reason" in signal)) Object.defineProperty(signal, "reason", {
        enumerable: true,
        value: reason,
        configurable: true,
        writable: true
    });
    abortController.abort(reason);
};
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = /** @class */ function() {
    function TaskAbortError1(code) {
        this.code = code;
        this.name = "TaskAbortError";
        this.message = task + " " + cancelled + " (reason: " + code + ")";
    }
    return TaskAbortError1;
}();
// src/listenerMiddleware/task.ts
var validateActive = function(signal) {
    if (signal.aborted) throw new TaskAbortError(signal.reason);
};
var promisifyAbortSignal = function(signal) {
    return catchRejection(new Promise(function(_, reject) {
        var notifyRejection = function() {
            return reject(new TaskAbortError(signal.reason));
        };
        if (signal.aborted) notifyRejection();
        else addAbortSignalListener(signal, notifyRejection);
    }));
};
var runTask = function(task2, cleanUp) {
    return __async(void 0, null, function() {
        var value, error_1;
        return __generator(this, function(_c) {
            switch(_c.label){
                case 0:
                    _c.trys.push([
                        0,
                        3,
                        4,
                        5
                    ]);
                    return [
                        4 /*yield*/ ,
                        Promise.resolve()
                    ];
                case 1:
                    _c.sent();
                    return [
                        4 /*yield*/ ,
                        task2()
                    ];
                case 2:
                    value = _c.sent();
                    return [
                        2 /*return*/ ,
                        {
                            status: "ok",
                            value: value
                        }
                    ];
                case 3:
                    error_1 = _c.sent();
                    return [
                        2 /*return*/ ,
                        {
                            status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
                            error: error_1
                        }
                    ];
                case 4:
                    cleanUp == null || cleanUp();
                    return [
                        7 /*endfinally*/ 
                    ];
                case 5:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};
var createPause = function(signal) {
    return function(promise) {
        return catchRejection(Promise.race([
            promisifyAbortSignal(signal),
            promise
        ]).then(function(output) {
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = function(signal) {
    var pause = createPause(signal);
    return function(timeoutMs) {
        return pause(new Promise(function(resolve) {
            return setTimeout(resolve, timeoutMs);
        }));
    };
};
// src/listenerMiddleware/index.ts
var assign = Object.assign;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = function(parentAbortSignal) {
    var linkControllers = function(controller) {
        return addAbortSignalListener(parentAbortSignal, function() {
            return abortControllerWithReason(controller, parentAbortSignal.reason);
        });
    };
    return function(taskExecutor) {
        assertFunction(taskExecutor, "taskExecutor");
        var childAbortController = new AbortController();
        linkControllers(childAbortController);
        var result = runTask(function() {
            return __async(void 0, null, function() {
                var result2;
                return __generator(this, function(_c) {
                    switch(_c.label){
                        case 0:
                            validateActive(parentAbortSignal);
                            validateActive(childAbortController.signal);
                            return [
                                4 /*yield*/ ,
                                taskExecutor({
                                    pause: createPause(childAbortController.signal),
                                    delay: createDelay(childAbortController.signal),
                                    signal: childAbortController.signal
                                })
                            ];
                        case 1:
                            result2 = _c.sent();
                            validateActive(childAbortController.signal);
                            return [
                                2 /*return*/ ,
                                result2
                            ];
                    }
                });
            });
        }, function() {
            return abortControllerWithReason(childAbortController, taskCompleted);
        });
        return {
            result: createPause(parentAbortSignal)(result),
            cancel: function() {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = function(startListening, signal) {
    var take = function(predicate, timeout) {
        return __async(void 0, null, function() {
            var unsubscribe, tuplePromise, promises, output;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        validateActive(signal);
                        unsubscribe = function() {};
                        tuplePromise = new Promise(function(resolve) {
                            unsubscribe = startListening({
                                predicate: predicate,
                                effect: function(action, listenerApi) {
                                    listenerApi.unsubscribe();
                                    resolve([
                                        action,
                                        listenerApi.getState(),
                                        listenerApi.getOriginalState()
                                    ]);
                                }
                            });
                        });
                        promises = [
                            promisifyAbortSignal(signal),
                            tuplePromise
                        ];
                        if (timeout != null) promises.push(new Promise(function(resolve) {
                            return setTimeout(resolve, timeout, null);
                        }));
                        _c.label = 1;
                    case 1:
                        _c.trys.push([
                            1,
                            ,
                            3,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            Promise.race(promises)
                        ];
                    case 2:
                        output = _c.sent();
                        validateActive(signal);
                        return [
                            2 /*return*/ ,
                            output
                        ];
                    case 3:
                        unsubscribe();
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    return function(predicate, timeout) {
        return catchRejection(take(predicate, timeout));
    };
};
var getListenerEntryPropsFrom = function(options) {
    var type = options.type, actionCreator = options.actionCreator, matcher = options.matcher, predicate = options.predicate, effect = options.effect;
    if (type) predicate = createAction(type).match;
    else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    } else if (matcher) predicate = matcher;
    else if (predicate) ;
    else throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
    assertFunction(effect, "options.listener");
    return {
        predicate: predicate,
        type: type,
        effect: effect
    };
};
var createListenerEntry = function(options) {
    var _c = getListenerEntryPropsFrom(options), type = _c.type, predicate = _c.predicate, effect = _c.effect;
    var id = nanoid();
    var entry = {
        id: id,
        effect: effect,
        type: type,
        predicate: predicate,
        pending: new Set(),
        unsubscribe: function() {
            throw new Error("Unsubscribe not initialized");
        }
    };
    return entry;
};
var createClearListenerMiddleware = function(listenerMap) {
    return function() {
        listenerMap.forEach(cancelActiveListeners);
        listenerMap.clear();
    };
};
var safelyNotifyError = function(errorHandler, errorToNotify, errorInfo) {
    try {
        errorHandler(errorToNotify, errorInfo);
    } catch (errorHandlerError) {
        setTimeout(function() {
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var defaultErrorHandler = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    console.error.apply(console, __spreadArray([
        alm + "/error"
    ], args));
};
var cancelActiveListeners = function(entry) {
    entry.pending.forEach(function(controller) {
        abortControllerWithReason(controller, listenerCancelled);
    });
};
function createListenerMiddleware(middlewareOptions) {
    var _this = this;
    if (middlewareOptions === void 0) middlewareOptions = {};
    var listenerMap = new Map();
    var extra = middlewareOptions.extra, _c4 = middlewareOptions.onError, onError = _c4 === void 0 ? defaultErrorHandler : _c4;
    assertFunction(onError, "onError");
    var insertEntry = function(entry) {
        entry.unsubscribe = function() {
            return listenerMap.delete(entry.id);
        };
        listenerMap.set(entry.id, entry);
        return function(cancelOptions) {
            entry.unsubscribe();
            if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) cancelActiveListeners(entry);
        };
    };
    var findListenerEntry = function(comparator) {
        for(var _i = 0, _c = listenerMap.values(); _i < _c.length; _i++){
            var entry = _c[_i];
            if (comparator(entry)) return entry;
        }
        return void 0;
    };
    var startListening = function(options) {
        var entry = findListenerEntry(function(existingEntry) {
            return existingEntry.effect === options.effect;
        });
        if (!entry) entry = createListenerEntry(options);
        return insertEntry(entry);
    };
    var stopListening = function(options) {
        var _c = getListenerEntryPropsFrom(options), type = _c.type, effect = _c.effect, predicate = _c.predicate;
        var entry = findListenerEntry(function(entry2) {
            var matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
            return matchPredicateOrType && entry2.effect === effect;
        });
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) cancelActiveListeners(entry);
        }
        return !!entry;
    };
    var notifyListener = function(entry, action, api, getOriginalState) {
        return __async(_this, null, function() {
            var internalTaskController, take, listenerError_1;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        internalTaskController = new AbortController();
                        take = createTakePattern(startListening, internalTaskController.signal);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        entry.pending.add(internalTaskController);
                        return [
                            4 /*yield*/ ,
                            Promise.resolve(entry.effect(action, assign({}, api, {
                                getOriginalState: getOriginalState,
                                condition: function(predicate, timeout) {
                                    return take(predicate, timeout).then(Boolean);
                                },
                                take: take,
                                delay: createDelay(internalTaskController.signal),
                                pause: createPause(internalTaskController.signal),
                                extra: extra,
                                signal: internalTaskController.signal,
                                fork: createFork(internalTaskController.signal),
                                unsubscribe: entry.unsubscribe,
                                subscribe: function() {
                                    listenerMap.set(entry.id, entry);
                                },
                                cancelActiveListeners: function() {
                                    entry.pending.forEach(function(controller, _, set) {
                                        if (controller !== internalTaskController) {
                                            abortControllerWithReason(controller, listenerCancelled);
                                            set.delete(controller);
                                        }
                                    });
                                }
                            })))
                        ];
                    case 2:
                        _c.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        listenerError_1 = _c.sent();
                        if (!(listenerError_1 instanceof TaskAbortError)) safelyNotifyError(onError, listenerError_1, {
                            raisedBy: "effect"
                        });
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 4:
                        abortControllerWithReason(internalTaskController, listenerCompleted);
                        entry.pending.delete(internalTaskController);
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 5:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
    var middleware = function(api) {
        return function(next) {
            return function(action) {
                if (addListener.match(action)) return startListening(action.payload);
                if (clearAllListeners.match(action)) {
                    clearListenerMiddleware();
                    return;
                }
                if (removeListener.match(action)) return stopListening(action.payload);
                var originalState = api.getState();
                var getOriginalState = function() {
                    if (originalState === INTERNAL_NIL_TOKEN) throw new Error(alm + ": getOriginalState can only be called synchronously");
                    return originalState;
                };
                var result;
                try {
                    result = next(action);
                    if (listenerMap.size > 0) {
                        var currentState = api.getState();
                        var listenerEntries = Array.from(listenerMap.values());
                        for(var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++){
                            var entry = listenerEntries_1[_i];
                            var runListener = false;
                            try {
                                runListener = entry.predicate(action, currentState, originalState);
                            } catch (predicateError) {
                                runListener = false;
                                safelyNotifyError(onError, predicateError, {
                                    raisedBy: "predicate"
                                });
                            }
                            if (!runListener) continue;
                            notifyListener(entry, action, api, getOriginalState);
                        }
                    }
                } finally{
                    originalState = INTERNAL_NIL_TOKEN;
                }
                return result;
            };
        };
    };
    return {
        middleware: middleware,
        startListening: startListening,
        stopListening: stopListening,
        clearListeners: clearListenerMiddleware
    };
}
// src/index.ts
_immer.enableES5();

},{"immer":"4sfoz","reselect":"isIsC","redux":"cDNB3","redux-thunk":"iFVTZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sfoz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Immer", ()=>un
);
parcelHelpers.export(exports, "applyPatches", ()=>pn
);
parcelHelpers.export(exports, "castDraft", ()=>K
);
parcelHelpers.export(exports, "castImmutable", ()=>$
);
parcelHelpers.export(exports, "createDraft", ()=>ln
);
parcelHelpers.export(exports, "current", ()=>D
);
parcelHelpers.export(exports, "enableAllPlugins", ()=>J
);
parcelHelpers.export(exports, "enableES5", ()=>N
);
parcelHelpers.export(exports, "enableMapSet", ()=>C
);
parcelHelpers.export(exports, "enablePatches", ()=>T
);
parcelHelpers.export(exports, "finishDraft", ()=>dn
);
parcelHelpers.export(exports, "freeze", ()=>d
);
parcelHelpers.export(exports, "immerable", ()=>L
);
parcelHelpers.export(exports, "isDraft", ()=>r
);
parcelHelpers.export(exports, "isDraftable", ()=>t
);
parcelHelpers.export(exports, "nothing", ()=>H
);
parcelHelpers.export(exports, "original", ()=>e
);
parcelHelpers.export(exports, "produce", ()=>fn
);
parcelHelpers.export(exports, "produceWithPatches", ()=>cn
);
parcelHelpers.export(exports, "setAutoFreeze", ()=>sn
);
parcelHelpers.export(exports, "setUseProxies", ()=>vn
);
function n(n1) {
    for(var r1 = arguments.length, t1 = Array(r1 > 1 ? r1 - 1 : 0), e1 = 1; e1 < r1; e1++)t1[e1 - 1] = arguments[e1];
    var i1 = Y[n1], o1 = i1 ? "function" == typeof i1 ? i1.apply(null, t1) : i1 : "unknown error nr: " + n1;
    throw Error("[Immer] " + o1);
    throw Error("[Immer] minified error nr: " + n1 + (t1.length ? " " + t1.map(function(n2) {
        return "'" + n2 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n3) {
    return !!n3 && !!n3[Q];
}
function t(n4) {
    return !!n4 && (function(n5) {
        if (!n5 || "object" != typeof n5) return !1;
        var r2 = Object.getPrototypeOf(n5);
        if (null === r2) return !0;
        var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
        return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
    }(n4) || Array.isArray(n4) || !!n4[L] || !!n4.constructor[L] || s(n4) || v(n4));
}
function e(t3) {
    return r(t3) || n(23, t3), t3[Q].t;
}
function i(n6, r3, t4) {
    void 0 === t4 && (t4 = !1), 0 === o(n6) ? (t4 ? Object.keys : nn)(n6).forEach(function(e2) {
        t4 && "symbol" == typeof e2 || r3(e2, n6[e2], n6);
    }) : n6.forEach(function(t5, e3) {
        return r3(e3, t5, n6);
    });
}
function o(n7) {
    var r4 = n7[Q];
    return r4 ? r4.i > 3 ? r4.i - 4 : r4.i : Array.isArray(n7) ? 1 : s(n7) ? 2 : v(n7) ? 3 : 0;
}
function u(n8, r5) {
    return 2 === o(n8) ? n8.has(r5) : Object.prototype.hasOwnProperty.call(n8, r5);
}
function a(n9, r6) {
    return 2 === o(n9) ? n9.get(r6) : n9[r6];
}
function f(n10, r7, t6) {
    var e4 = o(n10);
    2 === e4 ? n10.set(r7, t6) : 3 === e4 ? (n10.delete(r7), n10.add(t6)) : n10[r7] = t6;
}
function c(n11, r8) {
    return n11 === r8 ? 0 !== n11 || 1 / n11 == 1 / r8 : n11 != n11 && r8 != r8;
}
function s(n12) {
    return X && n12 instanceof Map;
}
function v(n13) {
    return q && n13 instanceof Set;
}
function p(n14) {
    return n14.o || n14.t;
}
function l(n15) {
    if (Array.isArray(n15)) return Array.prototype.slice.call(n15);
    var r9 = rn(n15);
    delete r9[Q];
    for(var t7 = nn(r9), e5 = 0; e5 < t7.length; e5++){
        var i2 = t7[e5], o2 = r9[i2];
        !1 === o2.writable && (o2.writable = !0, o2.configurable = !0), (o2.get || o2.set) && (r9[i2] = {
            configurable: !0,
            writable: !0,
            enumerable: o2.enumerable,
            value: n15[i2]
        });
    }
    return Object.create(Object.getPrototypeOf(n15), r9);
}
function d(n16, e6) {
    return void 0 === e6 && (e6 = !1), y(n16) || r(n16) || !t(n16) ? n16 : (o(n16) > 1 && (n16.set = n16.add = n16.clear = n16.delete = h), Object.freeze(n16), e6 && i(n16, function(n, r10) {
        return d(r10, !0);
    }, !0), n16);
}
function h() {
    n(2);
}
function y(n17) {
    return null == n17 || "object" != typeof n17 || Object.isFrozen(n17);
}
function b(r11) {
    var t8 = tn[r11];
    return t8 || n(18, r11), t8;
}
function m(n18, r12) {
    tn[n18] || (tn[n18] = r12);
}
function _() {
    return U || n(0), U;
}
function j(n19, r13) {
    r13 && (b("Patches"), n19.u = [], n19.s = [], n19.v = r13);
}
function O(n20) {
    g(n20), n20.p.forEach(S), n20.p = null;
}
function g(n21) {
    n21 === U && (U = n21.l);
}
function w(n22) {
    return U = {
        p: [],
        l: U,
        h: n22,
        m: !0,
        _: 0
    };
}
function S(n23) {
    var r14 = n23[Q];
    0 === r14.i || 1 === r14.i ? r14.j() : r14.O = !0;
}
function P(r15, e7) {
    e7._ = e7.p.length;
    var i3 = e7.p[0], o3 = void 0 !== r15 && r15 !== i3;
    return e7.h.g || b("ES5").S(e7, r15, o3), o3 ? (i3[Q].P && (O(e7), n(4)), t(r15) && (r15 = M(e7, r15), e7.l || x(e7, r15)), e7.u && b("Patches").M(i3[Q].t, r15, e7.u, e7.s)) : r15 = M(e7, i3, []), O(e7), e7.u && e7.v(e7.u, e7.s), r15 !== H ? r15 : void 0;
}
function M(n24, r16, t9) {
    if (y(r16)) return r16;
    var e8 = r16[Q];
    if (!e8) return i(r16, function(i4, o5) {
        return A(n24, e8, r16, i4, o5, t9);
    }, !0), r16;
    if (e8.A !== n24) return r16;
    if (!e8.P) return x(n24, e8.t, !0), e8.t;
    if (!e8.I) {
        e8.I = !0, e8.A._--;
        var o4 = 4 === e8.i || 5 === e8.i ? e8.o = l(e8.k) : e8.o;
        i(3 === e8.i ? new Set(o4) : o4, function(r17, i5) {
            return A(n24, e8, o4, r17, i5, t9);
        }), x(n24, o4, !1), t9 && n24.u && b("Patches").R(e8, t9, n24.u, n24.s);
    }
    return e8.o;
}
function A(e9, i6, o6, a1, c1, s1) {
    if (c1 === o6 && n(5), r(c1)) {
        var v1 = M(e9, c1, s1 && i6 && 3 !== i6.i && !u(i6.D, a1) ? s1.concat(a1) : void 0);
        if (f(o6, a1, v1), !r(v1)) return;
        e9.m = !1;
    }
    if (t(c1) && !y(c1)) {
        if (!e9.h.F && e9._ < 1) return;
        M(e9, c1), i6 && i6.A.l || x(e9, c1);
    }
}
function x(n25, r18, t10) {
    void 0 === t10 && (t10 = !1), n25.h.F && n25.m && d(r18, t10);
}
function z(n26, r19) {
    var t11 = n26[Q];
    return (t11 ? p(t11) : n26)[r19];
}
function I(n27, r20) {
    if (r20 in n27) for(var t12 = Object.getPrototypeOf(n27); t12;){
        var e10 = Object.getOwnPropertyDescriptor(t12, r20);
        if (e10) return e10;
        t12 = Object.getPrototypeOf(t12);
    }
}
function k(n28) {
    n28.P || (n28.P = !0, n28.l && k(n28.l));
}
function E(n29) {
    n29.o || (n29.o = l(n29.t));
}
function R(n30, r21, t13) {
    var e11 = s(r21) ? b("MapSet").N(r21, t13) : v(r21) ? b("MapSet").T(r21, t13) : n30.g ? function(n31, r22) {
        var t14 = Array.isArray(n31), e12 = {
            i: t14 ? 1 : 0,
            A: r22 ? r22.A : _(),
            P: !1,
            I: !1,
            D: {},
            l: r22,
            t: n31,
            k: null,
            o: null,
            j: null,
            C: !1
        }, i7 = e12, o7 = en;
        t14 && (i7 = [
            e12
        ], o7 = on);
        var u1 = Proxy.revocable(i7, o7), a2 = u1.revoke, f1 = u1.proxy;
        return e12.k = f1, e12.j = a2, f1;
    }(r21, t13) : b("ES5").J(r21, t13);
    return (t13 ? t13.A : _()).p.push(e11), e11;
}
function D(e13) {
    return r(e13) || n(22, e13), function n32(r23) {
        if (!t(r23)) return r23;
        var e14, u2 = r23[Q], c2 = o(r23);
        if (u2) {
            if (!u2.P && (u2.i < 4 || !b("ES5").K(u2))) return u2.t;
            u2.I = !0, e14 = F(r23, c2), u2.I = !1;
        } else e14 = F(r23, c2);
        return i(e14, function(r24, t15) {
            u2 && a(u2.t, r24) === t15 || f(e14, r24, n32(t15));
        }), 3 === c2 ? new Set(e14) : e14;
    }(e13);
}
function F(n33, r25) {
    switch(r25){
        case 2:
            return new Map(n33);
        case 3:
            return Array.from(n33);
    }
    return l(n33);
}
function N() {
    function t16(n34, r26) {
        var t17 = s2[n34];
        return t17 ? t17.enumerable = r26 : s2[n34] = t17 = {
            configurable: !0,
            enumerable: r26,
            get: function() {
                var r27 = this[Q];
                return f2(r27), en.get(r27, n34);
            },
            set: function(r28) {
                var t18 = this[Q];
                f2(t18), en.set(t18, n34, r28);
            }
        }, t17;
    }
    function e15(n35) {
        for(var r29 = n35.length - 1; r29 >= 0; r29--){
            var t19 = n35[r29][Q];
            if (!t19.P) switch(t19.i){
                case 5:
                    a3(t19) && k(t19);
                    break;
                case 4:
                    o8(t19) && k(t19);
            }
        }
    }
    function o8(n36) {
        for(var r30 = n36.t, t20 = n36.k, e16 = nn(t20), i8 = e16.length - 1; i8 >= 0; i8--){
            var o9 = e16[i8];
            if (o9 !== Q) {
                var a4 = r30[o9];
                if (void 0 === a4 && !u(r30, o9)) return !0;
                var f3 = t20[o9], s3 = f3 && f3[Q];
                if (s3 ? s3.t !== a4 : !c(f3, a4)) return !0;
            }
        }
        var v2 = !!r30[Q];
        return e16.length !== nn(r30).length + (v2 ? 0 : 1);
    }
    function a3(n37) {
        var r31 = n37.k;
        if (r31.length !== n37.t.length) return !0;
        var t21 = Object.getOwnPropertyDescriptor(r31, r31.length - 1);
        if (t21 && !t21.get) return !0;
        for(var e17 = 0; e17 < r31.length; e17++)if (!r31.hasOwnProperty(e17)) return !0;
        return !1;
    }
    function f2(r32) {
        r32.O && n(3, JSON.stringify(p(r32)));
    }
    var s2 = {};
    m("ES5", {
        J: function(n38, r33) {
            var e18 = Array.isArray(n38), i9 = function(n39, r34) {
                if (n39) {
                    for(var e19 = Array(r34.length), i10 = 0; i10 < r34.length; i10++)Object.defineProperty(e19, "" + i10, t16(i10, !0));
                    return e19;
                }
                var o11 = rn(r34);
                delete o11[Q];
                for(var u3 = nn(o11), a5 = 0; a5 < u3.length; a5++){
                    var f4 = u3[a5];
                    o11[f4] = t16(f4, n39 || !!o11[f4].enumerable);
                }
                return Object.create(Object.getPrototypeOf(r34), o11);
            }(e18, n38), o10 = {
                i: e18 ? 5 : 4,
                A: r33 ? r33.A : _(),
                P: !1,
                I: !1,
                D: {},
                l: r33,
                t: n38,
                k: i9,
                o: null,
                O: !1,
                C: !1
            };
            return Object.defineProperty(i9, Q, {
                value: o10,
                writable: !0
            }), i9;
        },
        S: function(n40, t22, o12) {
            o12 ? r(t22) && t22[Q].A === n40 && e15(n40.p) : (n40.u && function n41(r35) {
                if (r35 && "object" == typeof r35) {
                    var t23 = r35[Q];
                    if (t23) {
                        var e20 = t23.t, o13 = t23.k, f5 = t23.D, c3 = t23.i;
                        if (4 === c3) i(o13, function(r36) {
                            r36 !== Q && (void 0 !== e20[r36] || u(e20, r36) ? f5[r36] || n41(o13[r36]) : (f5[r36] = !0, k(t23)));
                        }), i(e20, function(n42) {
                            void 0 !== o13[n42] || u(o13, n42) || (f5[n42] = !1, k(t23));
                        });
                        else if (5 === c3) {
                            if (a3(t23) && (k(t23), f5.length = !0), o13.length < e20.length) for(var s4 = o13.length; s4 < e20.length; s4++)f5[s4] = !1;
                            else for(var v3 = e20.length; v3 < o13.length; v3++)f5[v3] = !0;
                            for(var p1 = Math.min(o13.length, e20.length), l1 = 0; l1 < p1; l1++)o13.hasOwnProperty(l1) || (f5[l1] = !0), void 0 === f5[l1] && n41(o13[l1]);
                        }
                    }
                }
            }(n40.p[0]), e15(n40.p));
        },
        K: function(n43) {
            return 4 === n43.i ? o8(n43) : a3(n43);
        }
    });
}
function T() {
    function e21(n44) {
        if (!t(n44)) return n44;
        if (Array.isArray(n44)) return n44.map(e21);
        if (s(n44)) return new Map(Array.from(n44.entries()).map(function(n45) {
            return [
                n45[0],
                e21(n45[1])
            ];
        }));
        if (v(n44)) return new Set(Array.from(n44).map(e21));
        var r37 = Object.create(Object.getPrototypeOf(n44));
        for(var i11 in n44)r37[i11] = e21(n44[i11]);
        return u(n44, L) && (r37[L] = n44[L]), r37;
    }
    function f6(n46) {
        return r(n46) ? e21(n46) : n46;
    }
    var c4 = "add";
    m("Patches", {
        $: function(r38, t24) {
            return t24.forEach(function(t25) {
                for(var i12 = t25.path, u4 = t25.op, f7 = r38, s5 = 0; s5 < i12.length - 1; s5++){
                    var v4 = o(f7), p2 = "" + i12[s5];
                    0 !== v4 && 1 !== v4 || "__proto__" !== p2 && "constructor" !== p2 || n(24), "function" == typeof f7 && "prototype" === p2 && n(24), "object" != typeof (f7 = a(f7, p2)) && n(15, i12.join("/"));
                }
                var l2 = o(f7), d1 = e21(t25.value), h1 = i12[i12.length - 1];
                switch(u4){
                    case "replace":
                        switch(l2){
                            case 2:
                                return f7.set(h1, d1);
                            case 3:
                                n(16);
                            default:
                                return f7[h1] = d1;
                        }
                    case c4:
                        switch(l2){
                            case 1:
                                return "-" === h1 ? f7.push(d1) : f7.splice(h1, 0, d1);
                            case 2:
                                return f7.set(h1, d1);
                            case 3:
                                return f7.add(d1);
                            default:
                                return f7[h1] = d1;
                        }
                    case "remove":
                        switch(l2){
                            case 1:
                                return f7.splice(h1, 1);
                            case 2:
                                return f7.delete(h1);
                            case 3:
                                return f7.delete(t25.value);
                            default:
                                return delete f7[h1];
                        }
                    default:
                        n(17, u4);
                }
            }), r38;
        },
        R: function(n47, r39, t26, e22) {
            switch(n47.i){
                case 0:
                case 4:
                case 2:
                    return function(n48, r40, t27, e23) {
                        var o14 = n48.t, s6 = n48.o;
                        i(n48.D, function(n49, i13) {
                            var v5 = a(o14, n49), p3 = a(s6, n49), l3 = i13 ? u(o14, n49) ? "replace" : c4 : "remove";
                            if (v5 !== p3 || "replace" !== l3) {
                                var d2 = r40.concat(n49);
                                t27.push("remove" === l3 ? {
                                    op: l3,
                                    path: d2
                                } : {
                                    op: l3,
                                    path: d2,
                                    value: p3
                                }), e23.push(l3 === c4 ? {
                                    op: "remove",
                                    path: d2
                                } : "remove" === l3 ? {
                                    op: c4,
                                    path: d2,
                                    value: f6(v5)
                                } : {
                                    op: "replace",
                                    path: d2,
                                    value: f6(v5)
                                });
                            }
                        });
                    }(n47, r39, t26, e22);
                case 5:
                case 1:
                    return function(n50, r41, t28, e24) {
                        var i14 = n50.t, o15 = n50.D, u5 = n50.o;
                        if (u5.length < i14.length) {
                            var a6 = [
                                u5,
                                i14
                            ];
                            i14 = a6[0], u5 = a6[1];
                            var s7 = [
                                e24,
                                t28
                            ];
                            t28 = s7[0], e24 = s7[1];
                        }
                        for(var v6 = 0; v6 < i14.length; v6++)if (o15[v6] && u5[v6] !== i14[v6]) {
                            var p4 = r41.concat([
                                v6
                            ]);
                            t28.push({
                                op: "replace",
                                path: p4,
                                value: f6(u5[v6])
                            }), e24.push({
                                op: "replace",
                                path: p4,
                                value: f6(i14[v6])
                            });
                        }
                        for(var l4 = i14.length; l4 < u5.length; l4++){
                            var d3 = r41.concat([
                                l4
                            ]);
                            t28.push({
                                op: c4,
                                path: d3,
                                value: f6(u5[l4])
                            });
                        }
                        i14.length < u5.length && e24.push({
                            op: "replace",
                            path: r41.concat([
                                "length"
                            ]),
                            value: i14.length
                        });
                    }(n47, r39, t26, e22);
                case 3:
                    return function(n51, r42, t29, e25) {
                        var i15 = n51.t, o16 = n51.o, u6 = 0;
                        i15.forEach(function(n52) {
                            if (!o16.has(n52)) {
                                var i16 = r42.concat([
                                    u6
                                ]);
                                t29.push({
                                    op: "remove",
                                    path: i16,
                                    value: n52
                                }), e25.unshift({
                                    op: c4,
                                    path: i16,
                                    value: n52
                                });
                            }
                            u6++;
                        }), u6 = 0, o16.forEach(function(n53) {
                            if (!i15.has(n53)) {
                                var o17 = r42.concat([
                                    u6
                                ]);
                                t29.push({
                                    op: c4,
                                    path: o17,
                                    value: n53
                                }), e25.unshift({
                                    op: "remove",
                                    path: o17,
                                    value: n53
                                });
                            }
                            u6++;
                        });
                    }(n47, r39, t26, e22);
            }
        },
        M: function(n54, r43, t30, e26) {
            t30.push({
                op: "replace",
                path: [],
                value: r43 === H ? void 0 : r43
            }), e26.push({
                op: "replace",
                path: [],
                value: n54
            });
        }
    });
}
function C() {
    function r44(n55, r45) {
        function t31() {
            this.constructor = n55;
        }
        a7(n55, r45), n55.prototype = (t31.prototype = r45.prototype, new t31);
    }
    function e27(n56) {
        n56.o || (n56.D = new Map, n56.o = new Map(n56.t));
    }
    function o18(n57) {
        n57.o || (n57.o = new Set, n57.t.forEach(function(r46) {
            if (t(r46)) {
                var e28 = R(n57.A.h, r46, n57);
                n57.p.set(r46, e28), n57.o.add(e28);
            } else n57.o.add(r46);
        }));
    }
    function u7(r47) {
        r47.O && n(3, JSON.stringify(p(r47)));
    }
    var a7 = function(n58, r48) {
        return (a7 = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(n59, r49) {
            n59.__proto__ = r49;
        } || function(n60, r50) {
            for(var t32 in r50)r50.hasOwnProperty(t32) && (n60[t32] = r50[t32]);
        })(n58, r48);
    }, f8 = function() {
        function n61(n62, r51) {
            return this[Q] = {
                i: 2,
                l: r51,
                A: r51 ? r51.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                D: void 0,
                t: n62,
                k: this,
                C: !1,
                O: !1
            }, this;
        }
        r44(n61, Map);
        var o19 = n61.prototype;
        return Object.defineProperty(o19, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), o19.has = function(n63) {
            return p(this[Q]).has(n63);
        }, o19.set = function(n64, r52) {
            var t33 = this[Q];
            return u7(t33), p(t33).has(n64) && p(t33).get(n64) === r52 || (e27(t33), k(t33), t33.D.set(n64, !0), t33.o.set(n64, r52), t33.D.set(n64, !0)), this;
        }, o19.delete = function(n65) {
            if (!this.has(n65)) return !1;
            var r53 = this[Q];
            return u7(r53), e27(r53), k(r53), r53.t.has(n65) ? r53.D.set(n65, !1) : r53.D.delete(n65), r53.o.delete(n65), !0;
        }, o19.clear = function() {
            var n66 = this[Q];
            u7(n66), p(n66).size && (e27(n66), k(n66), n66.D = new Map, i(n66.t, function(r54) {
                n66.D.set(r54, !1);
            }), n66.o.clear());
        }, o19.forEach = function(n67, r55) {
            var t34 = this;
            p(this[Q]).forEach(function(e, i17) {
                n67.call(r55, t34.get(i17), i17, t34);
            });
        }, o19.get = function(n68) {
            var r56 = this[Q];
            u7(r56);
            var i18 = p(r56).get(n68);
            if (r56.I || !t(i18)) return i18;
            if (i18 !== r56.t.get(n68)) return i18;
            var o20 = R(r56.A.h, i18, r56);
            return e27(r56), r56.o.set(n68, o20), o20;
        }, o19.keys = function() {
            return p(this[Q]).keys();
        }, o19.values = function() {
            var n69, r57 = this, t35 = this.keys();
            return (n69 = {})[V] = function() {
                return r57.values();
            }, n69.next = function() {
                var n70 = t35.next();
                return n70.done ? n70 : {
                    done: !1,
                    value: r57.get(n70.value)
                };
            }, n69;
        }, o19.entries = function() {
            var n71, r58 = this, t36 = this.keys();
            return (n71 = {})[V] = function() {
                return r58.entries();
            }, n71.next = function() {
                var n72 = t36.next();
                if (n72.done) return n72;
                var e29 = r58.get(n72.value);
                return {
                    done: !1,
                    value: [
                        n72.value,
                        e29
                    ]
                };
            }, n71;
        }, o19[V] = function() {
            return this.entries();
        }, n61;
    }(), c5 = function() {
        function n73(n74, r59) {
            return this[Q] = {
                i: 3,
                l: r59,
                A: r59 ? r59.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                t: n74,
                k: this,
                p: new Map,
                O: !1,
                C: !1
            }, this;
        }
        r44(n73, Set);
        var t37 = n73.prototype;
        return Object.defineProperty(t37, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), t37.has = function(n75) {
            var r60 = this[Q];
            return u7(r60), r60.o ? !!r60.o.has(n75) || !(!r60.p.has(n75) || !r60.o.has(r60.p.get(n75))) : r60.t.has(n75);
        }, t37.add = function(n76) {
            var r61 = this[Q];
            return u7(r61), this.has(n76) || (o18(r61), k(r61), r61.o.add(n76)), this;
        }, t37.delete = function(n77) {
            if (!this.has(n77)) return !1;
            var r62 = this[Q];
            return u7(r62), o18(r62), k(r62), r62.o.delete(n77) || !!r62.p.has(n77) && r62.o.delete(r62.p.get(n77));
        }, t37.clear = function() {
            var n78 = this[Q];
            u7(n78), p(n78).size && (o18(n78), k(n78), n78.o.clear());
        }, t37.values = function() {
            var n79 = this[Q];
            return u7(n79), o18(n79), n79.o.values();
        }, t37.entries = function() {
            var n80 = this[Q];
            return u7(n80), o18(n80), n80.o.entries();
        }, t37.keys = function() {
            return this.values();
        }, t37[V] = function() {
            return this.values();
        }, t37.forEach = function(n81, r63) {
            for(var t38 = this.values(), e30 = t38.next(); !e30.done;)n81.call(r63, e30.value, e30.value, this), e30 = t38.next();
        }, n73;
    }();
    m("MapSet", {
        N: function(n82, r64) {
            return new f8(n82, r64);
        },
        T: function(n83, r65) {
            return new c5(n83, r65);
        }
    });
}
function J() {
    N(), C(), T();
}
function K(n84) {
    return n84;
}
function $(n85) {
    return n85;
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", Y = {
    0: "Illegal state",
    1: "Immer drafts cannot have computed properties",
    2: "This object has been frozen and should not be mutated",
    3: function(n86) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n86;
    },
    4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    5: "Immer forbids circular references",
    6: "The first or second argument to `produce` must be a function",
    7: "The third argument to `produce` must be a function or undefined",
    8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
    10: "The given draft is already finalized",
    11: "Object.defineProperty() cannot be used on an Immer draft",
    12: "Object.setPrototypeOf() cannot be used on an Immer draft",
    13: "Immer only supports deleting array indices",
    14: "Immer only supports setting array indices and the 'length' property",
    15: function(n87) {
        return "Cannot apply patch, path doesn't resolve: " + n87;
    },
    16: 'Sets cannot have "replace" patches.',
    17: function(n88) {
        return "Unsupported patch operation: " + n88;
    },
    18: function(n89) {
        return "The plugin for '" + n89 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n89 + "()` when initializing your application.";
    },
    20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
    21: function(n90) {
        return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n90 + "'";
    },
    22: function(n91) {
        return "'current' expects a draft, got: " + n91;
    },
    23: function(n92) {
        return "'original' expects a draft, got: " + n92;
    },
    24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
}, Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n93) {
    return Object.getOwnPropertyNames(n93).concat(Object.getOwnPropertySymbols(n93));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n94) {
    var r66 = {};
    return nn(n94).forEach(function(t39) {
        r66[t39] = Object.getOwnPropertyDescriptor(n94, t39);
    }), r66;
}, tn = {}, en = {
    get: function(n95, r67) {
        if (r67 === Q) return n95;
        var e31 = p(n95);
        if (!u(e31, r67)) return function(n96, r68, t40) {
            var e32, i20 = I(r68, t40);
            return i20 ? "value" in i20 ? i20.value : null === (e32 = i20.get) || void 0 === e32 ? void 0 : e32.call(n96.k) : void 0;
        }(n95, e31, r67);
        var i19 = e31[r67];
        return n95.I || !t(i19) ? i19 : i19 === z(n95.t, r67) ? (E(n95), n95.o[r67] = R(n95.A.h, i19, n95)) : i19;
    },
    has: function(n97, r69) {
        return r69 in p(n97);
    },
    ownKeys: function(n98) {
        return Reflect.ownKeys(p(n98));
    },
    set: function(n99, r70, t41) {
        var e33 = I(p(n99), r70);
        if (null == e33 ? void 0 : e33.set) return e33.set.call(n99.k, t41), !0;
        if (!n99.P) {
            var i21 = z(p(n99), r70), o21 = null == i21 ? void 0 : i21[Q];
            if (o21 && o21.t === t41) return n99.o[r70] = t41, n99.D[r70] = !1, !0;
            if (c(t41, i21) && (void 0 !== t41 || u(n99.t, r70))) return !0;
            E(n99), k(n99);
        }
        return n99.o[r70] === t41 && "number" != typeof t41 && (void 0 !== t41 || r70 in n99.o) || (n99.o[r70] = t41, n99.D[r70] = !0, !0);
    },
    deleteProperty: function(n100, r71) {
        return void 0 !== z(n100.t, r71) || r71 in n100.t ? (n100.D[r71] = !1, E(n100), k(n100)) : delete n100.D[r71], n100.o && delete n100.o[r71], !0;
    },
    getOwnPropertyDescriptor: function(n101, r72) {
        var t42 = p(n101), e34 = Reflect.getOwnPropertyDescriptor(t42, r72);
        return e34 ? {
            writable: !0,
            configurable: 1 !== n101.i || "length" !== r72,
            enumerable: e34.enumerable,
            value: t42[r72]
        } : e34;
    },
    defineProperty: function() {
        n(11);
    },
    getPrototypeOf: function(n102) {
        return Object.getPrototypeOf(n102.t);
    },
    setPrototypeOf: function() {
        n(12);
    }
}, on = {};
i(en, function(n103, r73) {
    on[n103] = function() {
        return arguments[0] = arguments[0][0], r73.apply(this, arguments);
    };
}), on.deleteProperty = function(r74, t43) {
    return isNaN(parseInt(t43)) && n(13), on.set.call(this, r74, t43, void 0);
}, on.set = function(r75, t44, e35) {
    return "length" !== t44 && isNaN(parseInt(t44)) && n(14), en.set.call(this, r75[0], t44, e35, r75[0]);
};
var un = function() {
    function e36(r76) {
        var e37 = this;
        this.g = B, this.F = !0, this.produce = function(r77, i23, o22) {
            if ("function" == typeof r77 && "function" != typeof i23) {
                var u8 = i23;
                i23 = r77;
                var a8 = e37;
                return function(n104) {
                    var r78 = this;
                    void 0 === n104 && (n104 = u8);
                    for(var t45 = arguments.length, e38 = Array(t45 > 1 ? t45 - 1 : 0), o23 = 1; o23 < t45; o23++)e38[o23 - 1] = arguments[o23];
                    return a8.produce(n104, function(n105) {
                        var t46;
                        return (t46 = i23).call.apply(t46, [
                            r78,
                            n105
                        ].concat(e38));
                    });
                };
            }
            var f9;
            if ("function" != typeof i23 && n(6), void 0 !== o22 && "function" != typeof o22 && n(7), t(r77)) {
                var c6 = w(e37), s8 = R(e37, r77, void 0), v7 = !0;
                try {
                    f9 = i23(s8), v7 = !1;
                } finally{
                    v7 ? O(c6) : g(c6);
                }
                return "undefined" != typeof Promise && f9 instanceof Promise ? f9.then(function(n106) {
                    return j(c6, o22), P(n106, c6);
                }, function(n107) {
                    throw O(c6), n107;
                }) : (j(c6, o22), P(f9, c6));
            }
            if (!r77 || "object" != typeof r77) {
                if (void 0 === (f9 = i23(r77)) && (f9 = r77), f9 === H && (f9 = void 0), e37.F && d(f9, !0), o22) {
                    var p5 = [], l5 = [];
                    b("Patches").M(r77, f9, p5, l5), o22(p5, l5);
                }
                return f9;
            }
            n(21, r77);
        }, this.produceWithPatches = function(n108, r79) {
            if ("function" == typeof n108) return function(r80) {
                for(var t48 = arguments.length, i25 = Array(t48 > 1 ? t48 - 1 : 0), o25 = 1; o25 < t48; o25++)i25[o25 - 1] = arguments[o25];
                return e37.produceWithPatches(r80, function(r81) {
                    return n108.apply(void 0, [
                        r81
                    ].concat(i25));
                });
            };
            var t47, i24, o24 = e37.produce(n108, r79, function(n109, r82) {
                t47 = n109, i24 = r82;
            });
            return "undefined" != typeof Promise && o24 instanceof Promise ? o24.then(function(n110) {
                return [
                    n110,
                    t47,
                    i24
                ];
            }) : [
                o24,
                t47,
                i24
            ];
        }, "boolean" == typeof (null == r76 ? void 0 : r76.useProxies) && this.setUseProxies(r76.useProxies), "boolean" == typeof (null == r76 ? void 0 : r76.autoFreeze) && this.setAutoFreeze(r76.autoFreeze);
    }
    var i22 = e36.prototype;
    return i22.createDraft = function(e39) {
        t(e39) || n(8), r(e39) && (e39 = D(e39));
        var i26 = w(this), o26 = R(this, e39, void 0);
        return o26[Q].C = !0, g(i26), o26;
    }, i22.finishDraft = function(r83, t49) {
        var e40 = r83 && r83[Q];
        e40 && e40.C || n(9), e40.I && n(10);
        var i27 = e40.A;
        return j(i27, t49), P(void 0, i27);
    }, i22.setAutoFreeze = function(n111) {
        this.F = n111;
    }, i22.setUseProxies = function(r84) {
        r84 && !B && n(20), this.g = r84;
    }, i22.applyPatches = function(n112, t50) {
        var e41;
        for(e41 = t50.length - 1; e41 >= 0; e41--){
            var i28 = t50[e41];
            if (0 === i28.path.length && "replace" === i28.op) {
                n112 = i28.value;
                break;
            }
        }
        e41 > -1 && (t50 = t50.slice(e41 + 1));
        var o27 = b("Patches").$;
        return r(n112) ? o27(n112, t50) : this.produce(n112, function(n113) {
            return o27(n113, t50);
        });
    }, e36;
}(), an = new un, fn = an.produce, cn = an.produceWithPatches.bind(an), sn = an.setAutoFreeze.bind(an), vn = an.setUseProxies.bind(an), pn = an.applyPatches.bind(an), ln = an.createDraft.bind(an), dn = an.finishDraft.bind(an);
exports.default = fn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isIsC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultMemoize", ()=>_defaultMemoize.defaultMemoize
);
parcelHelpers.export(exports, "defaultEqualityCheck", ()=>_defaultMemoize.defaultEqualityCheck
);
parcelHelpers.export(exports, "createSelectorCreator", ()=>createSelectorCreator
);
parcelHelpers.export(exports, "createSelector", ()=>createSelector
);
parcelHelpers.export(exports, "createStructuredSelector", ()=>createStructuredSelector
);
var _defaultMemoize = require("./defaultMemoize");
function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
    if (!dependencies.every(function(dep) {
        return typeof dep === 'function';
    })) {
        var dependencyTypes = dependencies.map(function(dep) {
            return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
        }).join(', ');
        throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
    }
    return dependencies;
}
function createSelectorCreator(memoize) {
    for(var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)memoizeOptionsFromArgs[_key - 1] = arguments[_key];
    var createSelector1 = function createSelector() {
        for(var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)funcs[_key2] = arguments[_key2];
        var _recomputations = 0;
        var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
        // So, start by declaring the default value here.
        // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)
        var directlyPassedOptions = {
            memoizeOptions: undefined
        }; // Normally, the result func or "output selector" is the last arg
        var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object
        if (typeof resultFunc === 'object') {
            directlyPassedOptions = resultFunc; // and pop the real result func off
            resultFunc = funcs.pop();
        }
        if (typeof resultFunc !== 'function') throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
         // Determine which set of options we're using. Prefer options passed directly,
        // but fall back to options given to createSelectorCreator.
        var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
        // is an array. In most libs I've looked at, it's an equality function or options object.
        // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
        // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
        // we wrap it in an array so we can apply it.
        var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [
            memoizeOptions
        ];
        var dependencies = getDependencies(funcs);
        var memoizedResultFunc = memoize.apply(void 0, [
            function() {
                _recomputations++; // apply arguments instead of spreading for performance.
                return resultFunc.apply(null, arguments);
            }
        ].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
        var selector = memoize(function() {
            var params = [];
            var length = dependencies.length;
            for(var i = 0; i < length; i++)// apply arguments instead of spreading and mutate a local list of params for performance.
            // @ts-ignore
            params.push(dependencies[i].apply(null, arguments));
             // apply arguments instead of spreading for performance.
            _lastResult = memoizedResultFunc.apply(null, params);
            return _lastResult;
        });
        Object.assign(selector, {
            resultFunc: resultFunc,
            memoizedResultFunc: memoizedResultFunc,
            dependencies: dependencies,
            lastResult: function lastResult() {
                return _lastResult;
            },
            recomputations: function recomputations() {
                return _recomputations;
            },
            resetRecomputations: function resetRecomputations() {
                return _recomputations = 0;
            }
        });
        return selector;
    }; // @ts-ignore
    return createSelector1;
}
var createSelector = /* #__PURE__ */ createSelectorCreator(_defaultMemoize.defaultMemoize);
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
    if (selectorCreator === void 0) selectorCreator = createSelector;
    if (typeof selectors !== 'object') throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
    var objectKeys = Object.keys(selectors);
    var resultSelector = selectorCreator(objectKeys.map(function(key) {
        return selectors[key];
    }), function() {
        for(var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)values[_key3] = arguments[_key3];
        return values.reduce(function(composition, value, index) {
            composition[objectKeys[index]] = value;
            return composition;
        }, {});
    });
    return resultSelector;
};

},{"./defaultMemoize":"gK721","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gK721":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultEqualityCheck", ()=>defaultEqualityCheck
);
parcelHelpers.export(exports, "createCacheKeyComparator", ()=>createCacheKeyComparator
);
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
parcelHelpers.export(exports, "defaultMemoize", ()=>defaultMemoize
);
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';
function createSingletonCache(equals) {
    var entry;
    return {
        get: function get(key) {
            if (entry && equals(entry.key, key)) return entry.value;
            return NOT_FOUND;
        },
        put: function put(key, value) {
            entry = {
                key: key,
                value: value
            };
        },
        getEntries: function getEntries() {
            return entry ? [
                entry
            ] : [];
        },
        clear: function clear() {
            entry = undefined;
        }
    };
}
function createLruCache(maxSize, equals) {
    var entries = [];
    function get(key) {
        var cacheIndex = entries.findIndex(function(entry) {
            return equals(key, entry.key);
        }); // We found a cached entry
        if (cacheIndex > -1) {
            var entry1 = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top
            if (cacheIndex > 0) {
                entries.splice(cacheIndex, 1);
                entries.unshift(entry1);
            }
            return entry1.value;
        } // No entry found in cache, return sentinel
        return NOT_FOUND;
    }
    function put(key, value) {
        if (get(key) === NOT_FOUND) {
            // TODO Is unshift slow?
            entries.unshift({
                key: key,
                value: value
            });
            if (entries.length > maxSize) entries.pop();
        }
    }
    function getEntries() {
        return entries;
    }
    function clear() {
        entries = [];
    }
    return {
        get: get,
        put: put,
        getEntries: getEntries,
        clear: clear
    };
}
var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
    return a === b;
};
function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
        if (prev === null || next === null || prev.length !== next.length) return false;
         // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
        var length = prev.length;
        for(var i = 0; i < length; i++){
            if (!equalityCheck(prev[i], next[i])) return false;
        }
        return true;
    };
}
function defaultMemoize(func, equalityCheckOrOptions) {
    var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
        equalityCheck: equalityCheckOrOptions
    };
    var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
    var comparator = createCacheKeyComparator(equalityCheck);
    var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons
    function memoized() {
        var value = cache.get(arguments);
        if (value === NOT_FOUND) {
            // @ts-ignore
            value = func.apply(null, arguments);
            if (resultEqualityCheck) {
                var entries = cache.getEntries();
                var matchingEntry = entries.find(function(entry) {
                    return resultEqualityCheck(entry.value, value);
                });
                if (matchingEntry) value = matchingEntry.value;
            }
            cache.put(arguments, value);
        }
        return value;
    }
    memoized.clearCache = function() {
        return cache.clear();
    };
    return memoized;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDNB3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__DO_NOT_USE__ActionTypes", ()=>ActionTypes
);
parcelHelpers.export(exports, "applyMiddleware", ()=>applyMiddleware
);
parcelHelpers.export(exports, "bindActionCreators", ()=>bindActionCreators
);
parcelHelpers.export(exports, "combineReducers", ()=>combineReducers
);
parcelHelpers.export(exports, "compose", ()=>compose
);
parcelHelpers.export(exports, "createStore", ()=>createStore
);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}
// Inlined version of the `symbol-observable` polyfill
var $$observable = function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(obj) === proto;
}
// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
    if (val === void 0) return 'undefined';
    if (val === null) return 'null';
    var type = typeof val;
    switch(type){
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
            return type;
    }
    if (Array.isArray(val)) return 'array';
    if (isDate(val)) return 'date';
    if (isError(val)) return 'error';
    var constructorName = ctorName(val);
    switch(constructorName){
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
            return constructorName;
    } // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}
function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function kindOf(val) {
    var typeOfVal = typeof val;
    typeOfVal = miniKindOf(val);
    return typeOfVal;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
    }
    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
        if (isDispatching) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return currentState;
    }
    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
        if (typeof listener !== 'function') throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        if (isDispatching) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) return;
            if (isDispatching) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
        if (!isPlainObject(action)) throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        if (typeof action.type === 'undefined') throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        if (isDispatching) throw new Error('Reducers may not dispatch actions.');
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                if (typeof observer !== 'object' || observer === null) throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                function observeState() {
                    if (observer.next) observer.next(getState());
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[$$observable] = function() {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
    /* eslint-disable no-console */ if (typeof console !== 'undefined' && typeof console.error === 'function') console.error(message);
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    if (!isPlainObject(inputState)) return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function(key) {
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE) return;
    if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
            type: ActionTypes.INIT
        });
        if (typeof initialState === 'undefined') throw new Error("The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === 'undefined') throw new Error("The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for(var i = 0; i < reducerKeys.length; i++){
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'undefined') warning("No reducer provided for key \"" + key + "\"");
        if (typeof reducers[key] === 'function') finalReducers[key] = reducers[key];
    }
    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    // keys multiple times.
    var unexpectedKeyCache;
    unexpectedKeyCache = {};
    var shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state, action) {
        if (state === void 0) state = {};
        if (shapeAssertionError) throw shapeAssertionError;
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) warning(warningMessage);
        var hasChanged = false;
        var nextState = {};
        for(var _i = 0; _i < finalReducerKeys.length; _i++){
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                var actionType = action && action.type;
                throw new Error("When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') return bindActionCreator(actionCreators, dispatch);
    if (typeof actionCreators !== 'object' || actionCreators === null) throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    var boundActionCreators = {};
    for(var key in actionCreators){
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
    if (funcs.length === 0) return function(arg) {
        return arg;
    };
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++)middlewares[_key] = arguments[_key];
    return function(createStore1) {
        return function() {
            var store = createStore1.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return _objectSpread2Default.default(_objectSpread2Default.default({}, store), {}, {
                dispatch: _dispatch
            });
        };
    };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */ function isCrushed() {}
if (typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') warning('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bS0uk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _definePropertyJs = require("./defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _definePropertyJsDefault.default(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
exports.default = _objectSpread2;

},{"./defineProperty.js":"hbmCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbmCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFVTZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */ function createThunkMiddleware(extraArgument) {
    // Standard Redux middleware definition pattern:
    // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
    var middleware = function middleware(_ref) {
        var dispatch = _ref.dispatch, getState = _ref.getState;
        return function(next) {
            return function(action) {
                // The thunk middleware looks for any functions that were passed to `store.dispatch`.
                // If this "action" is really a function, call it and return the result.
                if (typeof action === 'function') // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
                return action(dispatch, getState, extraArgument);
                 // Otherwise, pass the action down the middleware chain as usual
                return next(action);
            };
        };
    };
    return middleware;
}
var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks
thunk.withExtraArgument = createThunkMiddleware;
exports.default = thunk;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYyhL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spawnPlayer", ()=>spawnPlayer
);
parcelHelpers.export(exports, "movePlayer", ()=>movePlayer
);
parcelHelpers.export(exports, "generateMap", ()=>generateMap
);
parcelHelpers.export(exports, "spawnEnemies", ()=>spawnEnemies
);
var _toolkit = require("@reduxjs/toolkit");
var _mapJs = require("../../lib/map.js");
var _hexagonsJs = require("../../lib/hexagons.js");
var _utilitiesJs = require("../../lib/utilities.js");
const gameSlice = _toolkit.createSlice({
    name: 'game',
    initialState: {
        player: {
            tileIndex: 0,
            location: _hexagonsJs.point(0, 0),
            health: 3,
            power: 100,
            credits: 0
        },
        enemyTypes: {
            grunt: {
                tileIndex: 0,
                location: _hexagonsJs.point(0, 0),
                health: 1,
                drops: {
                    credits: 10
                }
            }
        },
        enemies: [],
        map: [],
        graph: [],
        selectedHex: _mapJs.tile(_hexagonsJs.hexagon(0, 0, 0))
    },
    reducers: {
        spawnPlayer: (state, action)=>{
            const map = state.map;
            const tileIndex = indexOfTraversableTile(map);
            map[tileIndex].occupants = 'player';
            state.player.location = map[tileIndex].screenCoords;
        },
        spawnEnemies: (state, action)=>{
            const amount = action.payload;
            const map = state.map;
            state.enemies = Array.from({
                length: amount
            }, ()=>{
                const tileIndex = indexOfTraversableTile(map);
                let enemy = {
                    ...state.enemyTypes.grunt
                };
                enemy.location = map[tileIndex].screenCoords;
                map[tileIndex].occupants = 'enemy';
                return enemy;
            });
        },
        generateMap: (state, action)=>{
            const map = _mapJs.tileMap(6);
            const graph = _mapJs.mapGraph(map);
            state.map = map;
            state.graph = graph;
        },
        selectHex: (state, action)=>{
            const map = state.map;
            const { x , y  } = action.payload;
            state.selectedHex = _mapJs.selectNearestHexTile(map, _hexagonsJs.point(x, y));
        },
        movePlayer: (state, action)=>{
            const map = state.map;
            const pos = action.payload;
            const nearestTile = _mapJs.selectNearestHexTile(map, pos);
            if (nearestTile === null) return;
            map[nearestTile.index].neighborIndexes.forEach((nIndex)=>{
                const neighbor = map[nIndex];
                neighbor.color = 'rgba(42, 160, 216, .7)';
            });
            map[nearestTile.index].color = 'rgba(42, 160, 216, .9)';
            map[nearestTile.index].occupants = 'player';
            state.player.location = nearestTile.screenCoords;
        }
    }
});
function indexOfTraversableTile(map) {
    let magicNum = _utilitiesJs.randNum(0, map.length - 1);
    let tile = map[magicNum];
    while(!tile.isTraversable){
        const rando = _utilitiesJs.randNum(0, map.length - 1);
        tile = map[rando];
        magicNum = rando;
    }
    return magicNum;
}
const { spawnPlayer , movePlayer , generateMap , spawnEnemies  } = gameSlice.actions;
exports.default = gameSlice.reducer;

},{"@reduxjs/toolkit":"lL1Ef","../../lib/hexagons.js":"5mY9R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../lib/utilities.js":"3qGIs","../../lib/map.js":"kUmw2"}],"5mY9R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ORIENTATION", ()=>ORIENTATION
);
parcelHelpers.export(exports, "DIRECTIONS", ()=>DIRECTIONS
);
parcelHelpers.export(exports, "SIZE", ()=>SIZE
);
parcelHelpers.export(exports, "ORIGIN", ()=>ORIGIN
);
parcelHelpers.export(exports, "LAYOUT", ()=>LAYOUT
);
parcelHelpers.export(exports, "hexagon", ()=>hexagon
);
parcelHelpers.export(exports, "fracHexagon", ()=>fracHexagon
);
parcelHelpers.export(exports, "areHexagonsEqual", ()=>areHexagonsEqual
);
parcelHelpers.export(exports, "addHexagons", ()=>addHexagons
);
parcelHelpers.export(exports, "subtractHexagons", ()=>subtractHexagons
);
parcelHelpers.export(exports, "multiplyHexagons", ()=>multiplyHexagons
);
parcelHelpers.export(exports, "lengthOfHexagon", ()=>lengthOfHexagon
);
parcelHelpers.export(exports, "distanceBetweenHexagons", ()=>distanceBetweenHexagons
);
parcelHelpers.export(exports, "hexagonNeighbor", ()=>hexagonNeighbor
);
parcelHelpers.export(exports, "getAllNeighbors", ()=>getAllNeighbors
);
parcelHelpers.export(exports, "point", ()=>point
);
parcelHelpers.export(exports, "layout", ()=>layout
);
parcelHelpers.export(exports, "convertHexToPixel", ()=>convertHexToPixel
);
parcelHelpers.export(exports, "convertPixelToHex", ()=>convertPixelToHex
);
parcelHelpers.export(exports, "getCornerOffset", ()=>getCornerOffset
);
parcelHelpers.export(exports, "hexCorners", ()=>hexCorners
);
parcelHelpers.export(exports, "roundHex", ()=>roundHex
);
parcelHelpers.export(exports, "hexLerp", ()=>hexLerp
);
parcelHelpers.export(exports, "hexLine", ()=>hexLine
);
var _utilitiesJs = require("./utilities.js");
const { PI , sqrt , abs , cos , sin , max , round  } = Math;
const ORIENTATION = {
    f0: 1.5,
    f1: 0,
    f2: sqrt(3) / 2,
    f3: sqrt(3),
    b0: 2 / 3,
    b1: 0,
    b2: -1 / 3,
    b3: sqrt(3) / 3,
    startAngle: 0
};
const DIRECTIONS = {
    upLeft: hexagon(-1, 0, 1),
    up: hexagon(0, -1, 1),
    upRight: hexagon(1, -1, 0),
    downLeft: hexagon(-1, 1, 0),
    down: hexagon(0, 1, -1),
    downRight: hexagon(1, 0, -1)
};
const SIZE = 40;
const ORIGIN = 0;
const LAYOUT = layout(point(SIZE, SIZE), point(ORIGIN, ORIGIN));
function hexagon(q, r, s) {
    if (q + r + s !== 0) _utilitiesJs.throwError('q + r + s must equal 0');
    return {
        q,
        r,
        s
    };
}
function fracHexagon(q, r, s) {
    if (round(q + r + s) !== 0) _utilitiesJs.throwError('q + r + s must equal 0');
    return {
        q,
        r,
        s
    };
}
function areHexagonsEqual(hexA, hexB) {
    return _utilitiesJs.deepEqual(hexA, hexB);
}
function addHexagons(hexA, hexB) {
    return hexagon(hexA.q + hexB.q, hexA.r + hexB.r, hexA.s + hexB.s);
}
function subtractHexagons(hexA, hexB) {
    return hexagon(hexA.q - hexB.q, hexA.r - hexB.r, hexA.s - hexB.s);
}
function multiplyHexagons(hex, multiplyBy) {
    return hexagon(hex.q * multiplyBy, hex.r * multiplyBy, hex.s * multiplyBy);
}
function lengthOfHexagon(hex) {
    return (abs(hex.q) + abs(hex.r) + abs(hex.s)) / 2;
}
function distanceBetweenHexagons(hexA, hexB) {
    return lengthOfHexagon(subtractHexagons(hexA, hexB));
}
function hexagonNeighbor(hex, direction) {
    return addHexagons(hex, direction);
}
function getAllNeighbors(hex) {
    return Object.keys(DIRECTIONS).map((key)=>{
        return hexagonNeighbor(hex, DIRECTIONS[key]);
    });
}
function point(x, y) {
    return {
        x,
        y
    };
}
function layout(size, origin) {
    return {
        size: point(size.x, size.y),
        origin: point(origin.x, origin.y)
    };
}
function convertHexToPixel(hex) {
    const M = ORIENTATION;
    const x = (M.f0 * hex.q + M.f1 * hex.r) * LAYOUT.size.x;
    const y = (M.f2 * hex.q + M.f3 * hex.r) * LAYOUT.size.y;
    return point(x + LAYOUT.origin.x, y + LAYOUT.origin.y);
}
function convertPixelToHex(pixelPoint) {
    const M = ORIENTATION;
    const pt = point((pixelPoint.x - LAYOUT.origin.x) / LAYOUT.size.x, (pixelPoint.y - LAYOUT.origin.y) / LAYOUT.size.y);
    const q = M.b0 * pt.x + M.b1 * pt.y;
    const r = M.b2 * pt.x + M.b3 * pt.y;
    const roundedHexCoords = _utilitiesJs.roundCubeCoords(q, r, -q - r);
    return hexagon(roundedHexCoords.q, roundedHexCoords.r, roundedHexCoords.s);
}
function getCornerOffset(corner) {
    const size = LAYOUT.size;
    const angle = 2 * PI * (ORIENTATION.startAngle + corner) / 6;
    return point(size.x * cos(angle), size.y * sin(angle));
}
function hexCorners(hex) {
    const corners = [];
    const center = convertHexToPixel(hex);
    for(let i = 0; i < 6; i++){
        const offset = getCornerOffset(i);
        corners.push(point(center.x + offset.x, center.y + offset.y));
    }
    return corners;
}
function roundHex(fracHex) {
    const { q , r , s  } = _utilitiesJs.roundCubeCoords(fracHex.q, fracHex.r, fracHex.s);
    return hexagon(q, r, s);
}
function hexLerp(a, b, t) {
    return roundHex(fracHexagon(_utilitiesJs.lerp(a.q, b.q, t), _utilitiesJs.lerp(a.r, b.r, t), _utilitiesJs.lerp(a.s, b.s, t)));
}
function hexLine(hexA, hexB) {
    const N = distanceBetweenHexagons(hexA, hexB);
    const step = 1 / max(N, 1);
    let results = [];
    for(let i = 0; i <= N; i++)results.push(hexLerp(hexA, hexB, i * step));
    return results;
}

},{"./utilities.js":"3qGIs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3qGIs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwError", ()=>throwError
);
parcelHelpers.export(exports, "deepEqual", ()=>deepEqual
);
parcelHelpers.export(exports, "roundCubeCoords", ()=>roundCubeCoords
);
parcelHelpers.export(exports, "lerp", ()=>lerp
);
parcelHelpers.export(exports, "randNum", ()=>randNum
);
parcelHelpers.export(exports, "uuid", ()=>uuid
);
parcelHelpers.export(exports, "alphabeticalKeys", ()=>alphabeticalKeys
);
const { round , abs , random  } = Math;
function throwError(msg) {
    console.error(msg);
    throw msg;
}
function deepEqual(objA, objB) {
    const ok = Object.keys, typeOfObjA = typeof objA, typeOfObjB = typeof objB;
    return objA && objB && typeOfObjA === 'object' && typeOfObjA === typeOfObjB ? ok(objA).length === ok(objB).length && ok(objA).every((key)=>deepEqual(objA[key], objB[key])
    ) : objA === objB;
}
function roundCubeCoords(qq, rr, ss) {
    let q = round(qq);
    let r = round(rr);
    let s = round(ss);
    let qDiff = abs(q - qq);
    let rDiff = abs(r - rr);
    let sDiff = abs(s - ss);
    if (qDiff > rDiff && qDiff > sDiff) q = -r - s;
    else if (rDiff > sDiff) r = -q - s;
    else s = -q - r;
    if (q === -0) q = 0;
    if (r === -0) r = 0;
    if (s === -0) s = 0;
    return {
        q,
        r,
        s
    };
}
function lerp(a, b, t) {
    return a * (1 - t) + b * t;
}
function randNum(min, max) {
    return round(random() * (max - min) + min);
}
function uuid() {
    return random().toString(36).slice(-6);
}
const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
function alphabeticalKeys(arr) {
    const alphabetLength = alphabetArray.length;
    let keyAmt = 1;
    let j = 0;
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        if (i > 0 && i % alphabetLength === 0) {
            keyAmt++;
            j = 0;
        }
        let key = Array.from({
            length: keyAmt
        }).map(()=>alphabetArray[j]
        ).join('');
        Object.assign(obj, {
            [key]: arr[i]
        });
        j++;
    }
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUmw2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tile", ()=>tile
);
parcelHelpers.export(exports, "getNearestHexTile", ()=>getNearestHexTile
);
parcelHelpers.export(exports, "hexShapedMap", ()=>hexShapedMap
);
parcelHelpers.export(exports, "tileMap", ()=>tileMap
);
parcelHelpers.export(exports, "mapGraph", ()=>mapGraph
);
// export function generateMapWithGraph(radius, removeAmt) {
//     const map = randomizeTraversableHexes(
//         tileMap(radius),
//         radius * 4
//     )
//     const graph = mapGraph(map)
//     return {
//         map,
//         graph,
//     }
// }
parcelHelpers.export(exports, "selectNearestHexTile", ()=>selectNearestHexTile
);
parcelHelpers.export(exports, "indexOfNearestTile", ()=>indexOfNearestTile
);
parcelHelpers.export(exports, "randomizeTraversableHexes", ()=>randomizeTraversableHexes
);
var _hexagonsJs = require("./hexagons.js");
var _utilitiesJs = require("./utilities.js");
const { min , max  } = Math;
function tile(hex = _hexagonsJs.hexagon(0, 0, 0), isTraversable = true) {
    const hexTile = _hexagonsJs.hexagon(hex.q, hex.r, hex.s);
    return {
        index: 0,
        cubeCoords: hexTile,
        screenCoords: _hexagonsJs.convertHexToPixel(hexTile),
        isTraversable: isTraversable,
        corners: _hexagonsJs.hexCorners(hexTile),
        neighborIndexes: _hexagonsJs.getAllNeighbors(hexTile),
        occupants: 'none',
        color: 'rgba(42, 160, 216, .5)'
    };
}
function getNearestHexTile(x, y) {
    return tile(_hexagonsJs.convertPixelToHex(_hexagonsJs.point(x, y)));
}
function hexShapedMap(radius) {
    let map = [];
    for(let q = -radius; q <= radius; q++){
        let r1 = max(-radius, -q - radius);
        let r2 = min(radius, -q + radius);
        for(let r = r1; r <= r2; r++)map.push(tile(_hexagonsJs.hexagon(q, r, -q - r)));
    }
    return map;
}
function tileMap(radius) {
    const hexMap = randomizeTraversableHexes(hexShapedMap(radius));
    let map = [];
    for(let i = 0; i < hexMap.length; i++){
        const tile1 = hexMap[i];
        tile1.index = i;
        tile1.neighborIndexes = tile1.neighborIndexes.map((neighbor)=>hexMap.findIndex((hex)=>_hexagonsJs.areHexagonsEqual(hex.cubeCoords, neighbor)
            )
        ).filter((nIndex)=>nIndex !== -1
        );
        map.push(tile1);
    }
    return map;
}
function mapGraph(tileMap1) {
    return tileMap1.map((tile2)=>tile2.neighborIndexes.filter((t)=>t !== -1
        )
    );
}
function selectNearestHexTile(map, { x , y  }) {
    const nearestHexTile = getNearestHexTile(x, y);
    const index = map.findIndex((item)=>_hexagonsJs.areHexagonsEqual(item.cubeCoords, nearestHexTile.cubeCoords)
    );
    if (index === -1) return null;
    return map[index];
}
function indexOfNearestTile(map, { x , y  }) {
    const nearestHexTile = getNearestHexTile(x, y);
    const index = map.findIndex((item)=>_hexagonsJs.areHexagonsEqual(item.cubeCoords, nearestHexTile.cubeCoords)
    );
    if (index === -1) return null;
    return index;
}
function randomizeTraversableHexes(hexTileMap, numOfTiles = 6) {
    const map = hexTileMap;
    const max1 = map.length - 1;
    const min1 = 1;
    Array.from({
        length: numOfTiles
    }).forEach(()=>{
        const num = _utilitiesJs.randNum(min1, max1);
        const randHex = map[num];
        randHex.isTraversable = !randHex.isTraversable;
    });
    return map;
}

},{"./hexagons.js":"5mY9R","./utilities.js":"3qGIs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2euFz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMousePos", ()=>getMousePos
);
parcelHelpers.export(exports, "drawCircle", ()=>drawCircle
);
function getMousePos(ctx, event) {
    const canvas = ctx.canvas;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    // needed to account for `ctx.translate(root.width * 0.5, root.height * 0.5)`
    const transform = ctx.getTransform();
    const invMat = transform.invertSelf();
    return {
        x: x * invMat.a + y * invMat.c + invMat.e,
        y: x * invMat.b + y * invMat.d + invMat.f
    };
}
function drawCircle(ctx, x = 0, y = 0, color = 'black', radius = 20, strokeWidth = 0) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26DE9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvasUtilitesJs = require("../lib/canvasUtilites.js");
function Player(ctx, location) {
    _canvasUtilitesJs.drawCircle(ctx, location.x, location.y, 'cyan');
}
exports.default = Player;

},{"../lib/canvasUtilites.js":"2euFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2WZj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvasUtilitesJs = require("../lib/canvasUtilites.js");
function Enemy(ctx, location) {
    _canvasUtilitesJs.drawCircle(ctx, location.x, location.y, 'red');
}
exports.default = Enemy;

},{"../lib/canvasUtilites.js":"2euFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
