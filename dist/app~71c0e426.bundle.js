'use strict';
(self['webpackChunksigmaresto'] = self['webpackChunksigmaresto'] || []).push([
  [82],
  {
    /***/ 5700: /***/ (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      // EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
      var runtime = __webpack_require__(5666);
      // EXTERNAL MODULE: ./src/styles/card.css
      var card = __webpack_require__(5694);
      // EXTERNAL MODULE: ./src/styles/detail.css
      var detail = __webpack_require__(98);
      // EXTERNAL MODULE: ./src/styles/drawer.css
      var drawer = __webpack_require__(2438);
      // EXTERNAL MODULE: ./src/styles/favorite.css
      var favorite = __webpack_require__(3583);
      // EXTERNAL MODULE: ./src/styles/footer.css
      var footer = __webpack_require__(398);
      // EXTERNAL MODULE: ./src/styles/hero.css
      var hero = __webpack_require__(7375);
      // EXTERNAL MODULE: ./src/styles/list.css
      var list = __webpack_require__(7612);
      // EXTERNAL MODULE: ./src/styles/loader.css
      var loader = __webpack_require__(6794);
      // EXTERNAL MODULE: ./src/styles/main.css
      var main = __webpack_require__(6046);
      // EXTERNAL MODULE: ./src/styles/navbar.css
      var navbar = __webpack_require__(3786);
      // EXTERNAL MODULE: ./src/styles/responsive.css
      var responsive = __webpack_require__(9362);
      // EXTERNAL MODULE: ./src/styles/skipcontent.css
      var skipcontent = __webpack_require__(8740);
      // EXTERNAL MODULE: ./src/scripts/components/appbar-component.js
      var appbar_component = __webpack_require__(4931);
      // EXTERNAL MODULE: ./src/scripts/components/drawer-component.js
      var drawer_component = __webpack_require__(4758);
      // EXTERNAL MODULE: ./src/scripts/components/footer-component.js
      var footer_component = __webpack_require__(9932);
      // EXTERNAL MODULE: ./src/scripts/components/skipcontent-component.js
      var skipcontent_component = __webpack_require__(3819);
      // EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
      var lazysizes = __webpack_require__(7090);
      // EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
      var ls_parent_fit = __webpack_require__(1770);
      // EXTERNAL MODULE: ./src/scripts/views/app.js
      var app = __webpack_require__(7164);
      // EXTERNAL MODULE: ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs
      var workbox_window_prod_es5 = __webpack_require__(5131); // CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
      function _typeof(o) {
        '@babel/helpers - typeof';
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o &&
                    'function' == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o;
                }),
          _typeof(o)
        );
      }
      function _regeneratorRuntime() {
        'use strict';
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
          function _regeneratorRuntime() {
            return e;
          };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          c = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function define(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          define({}, '');
        } catch (t) {
          define = function define(t, e, r) {
            return (t[e] = r);
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = wrap;
        var h = 'suspendedStart',
          l = 'suspendedYield',
          f = 'executing',
          s = 'completed',
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(p));
        function defineIteratorMethods(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == _typeof(h) && n.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      invoke('next', t, i, a);
                    },
                    function (t) {
                      invoke('throw', t, i, a);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), i(u);
                    },
                    function (t) {
                      return invoke('throw', t, i, a);
                    },
                  );
            }
            a(c.arg);
          }
          var r;
          o(this, '_invoke', {
            value: function value(t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return (r = r
                ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error('Generator is already running');
            if (o === s) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (o === h) throw ((o = s), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ('normal' === p.type) {
                if (((o = n.done ? s : l), p.arg === y)) continue;
                return { value: p.arg, done: n.done };
              }
              'throw' === p.type &&
                ((o = s), (n.method = 'throw'), (n.arg = p.arg));
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ('throw' === n &&
                e.iterator['return'] &&
                ((r.method = 'return'),
                (r.arg = t),
                maybeInvokeDelegate(e, r),
                'throw' === r.method)) ||
                ('return' !== n &&
                  ((r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              y
            );
          var i = tryCatch(o, e.iterator, r.arg);
          if ('throw' === i.type)
            return (
              (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                (r.delegate = null),
                y)
              : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              y);
        }
        function pushTryEntry(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function Context(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(e) {
          if (e || '' === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length; )
                    if (n.call(e, o))
                      return (next.value = e[o]), (next.done = !1), next;
                  return (next.value = t), (next.done = !0), next;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(_typeof(e) + ' is not iterable');
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          o(g, 'constructor', {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          o(GeneratorFunctionPrototype, 'constructor', {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            u,
            'GeneratorFunction',
          )),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === GeneratorFunction ||
                'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                : ((t.__proto__ = GeneratorFunctionPrototype),
                  define(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = AsyncIterator),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new AsyncIterator(wrap(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          defineIteratorMethods(g),
          define(g, u, 'Generator'),
          define(g, a, function () {
            return this;
          }),
          define(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function next() {
                for (; r.length; ) {
                  var t = r.pop();
                  if (t in e) return (next.value = t), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (e.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(resetTryEntry),
                !e)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(e) {
              if (this.done) throw e;
              var r = this;
              function handle(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = t)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return handle('end');
                if (i.tryLoc <= this.prev) {
                  var c = n.call(i, 'catchLoc'),
                    u = n.call(i, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
                  : this.complete(a)
              );
            },
            complete: function complete(t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                y
              );
            },
            finish: function finish(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (
                    this.complete(r.completion, r.afterLoc), resetTryEntry(r), y
                  );
              }
            },
            catch: function _catch(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    resetTryEntry(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function delegateYield(e, r, n) {
              return (
                (this.delegate = {
                  iterator: values(e),
                  resultName: r,
                  nextLoc: n,
                }),
                'next' === this.method && (this.arg = t),
                y
              );
            },
          }),
          e
        );
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value,
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err,
              );
            }
            _next(undefined);
          });
        };
      }

      var swRegister = /*#__PURE__*/ (function () {
        var _ref = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var wb;
            return _regeneratorRuntime().wrap(
              function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      if ('serviceWorker' in navigator) {
                        _context.next = 3;
                        break;
                      }
                      console.log(
                        'Service Worker not supported in the browser',
                      );
                      return _context.abrupt('return');
                    case 3:
                      wb = new workbox_window_prod_es5 /* Workbox */.ZW(
                        './sw-workbox.bundle.js',
                      );
                      _context.prev = 4;
                      _context.next = 7;
                      return wb.register();
                    case 7:
                      console.log('Service worker registered');
                      _context.next = 13;
                      break;
                    case 10:
                      _context.prev = 10;
                      _context.t0 = _context['catch'](4);
                      console.log(
                        'Failed to register service worker',
                        _context.t0,
                      );
                    case 13:
                    case 'end':
                      return _context.stop();
                  }
              },
              _callee,
              null,
              [[4, 10]],
            );
          }),
        );
        return function swRegister() {
          return _ref.apply(this, arguments);
        };
      })();
      /* harmony default export */ const sw_register = swRegister; // CONCATENATED MODULE: ./src/scripts/index.js
      var scripts_app = new app /* default */.Z({
        button: document.querySelector('#menu_resp'),
        content: document.querySelector('main'),
        drawer: document.querySelector('#drawer'),
      });
      window.addEventListener('hashchange', function () {
        scripts_app.renderPage();
      });
      window.addEventListener('load', function () {
        scripts_app.renderPage();
        sw_register();
      });

      /***/
    },

    /***/ 6518: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(7371);
      /* harmony import */ var _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(7488);
      /* harmony import */ var _views_pages_home__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(2660);

      var routes = {
        '/': _views_pages_home__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
        '/home':
          _views_pages_home__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
        '/favorite':
          _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
        '/detail/:id':
          _views_pages_detail__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = routes;

      /***/
    },

    /***/ 8386: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      var UrlParser = {
        parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
          var url = window.location.hash.slice(1).toLowerCase();
          var splitedUrl = this._urlSplitter(url);
          return this._urlCombiner(splitedUrl);
        },
        parseActiveUrlWithoutCombiner:
          function parseActiveUrlWithoutCombiner() {
            var url = window.location.hash.slice(1).toLowerCase();
            return this._urlSplitter(url);
          },
        _urlSplitter: function _urlSplitter(url) {
          var urlsSplits = url.split('/');
          return {
            resource: urlsSplits[1] || null,
            id: urlsSplits[2] || null,
            verb: urlsSplits[3] || null,
          };
        },
        _urlCombiner: function _urlCombiner(splitedUrl) {
          return (
            (splitedUrl.resource ? '/'.concat(splitedUrl.resource) : '/') +
            (splitedUrl.id ? '/:id' : '') +
            (splitedUrl.verb ? '/'.concat(splitedUrl.verb) : '')
          );
        },
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = UrlParser;

      /***/
    },

    /***/ 6743: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(4150);
      /* eslint-disable import/no-cycle */

      var DetailHelper = {
        eachCustomerReview: function eachCustomerReview(_ref) {
          var customerReviews = _ref.customerReviews;
          var customerReviewsString = '';
          customerReviews.forEach(function (customerReview) {
            customerReviewsString += (0,
            _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ /* .createCustomerReviewTemplate */.Cx)(
              customerReview,
            );
          });
          return customerReviewsString;
        },
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        DetailHelper;

      /***/
    },

    /***/ 9830: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      var DrawerInitiator = {
        init: function init(_ref) {
          var _this = this;
          var button = _ref.button,
            drawer = _ref.drawer,
            content = _ref.content;
          button.addEventListener('click', function (event) {
            _this._toggleDrawer(event, drawer);
          });
          content.addEventListener('click', function (event) {
            _this._closeDrawer(event, drawer);
          });
        },
        _toggleDrawer: function _toggleDrawer(event, drawer) {
          event.stopPropagation();
          drawer.classList.toggle('open');
        },
        _closeDrawer: function _closeDrawer(event, drawer) {
          event.stopPropagation();
          drawer.classList.remove('open');
        },
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        DrawerInitiator;

      /***/
    },

    /***/ 7077: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(4150);
      function _typeof(o) {
        '@babel/helpers - typeof';
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o &&
                    'function' == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o;
                }),
          _typeof(o)
        );
      }
      function _regeneratorRuntime() {
        'use strict';
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
          function _regeneratorRuntime() {
            return e;
          };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          c = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function define(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          define({}, '');
        } catch (t) {
          define = function define(t, e, r) {
            return (t[e] = r);
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = wrap;
        var h = 'suspendedStart',
          l = 'suspendedYield',
          f = 'executing',
          s = 'completed',
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(p));
        function defineIteratorMethods(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == _typeof(h) && n.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      invoke('next', t, i, a);
                    },
                    function (t) {
                      invoke('throw', t, i, a);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), i(u);
                    },
                    function (t) {
                      return invoke('throw', t, i, a);
                    },
                  );
            }
            a(c.arg);
          }
          var r;
          o(this, '_invoke', {
            value: function value(t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return (r = r
                ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error('Generator is already running');
            if (o === s) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (o === h) throw ((o = s), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ('normal' === p.type) {
                if (((o = n.done ? s : l), p.arg === y)) continue;
                return { value: p.arg, done: n.done };
              }
              'throw' === p.type &&
                ((o = s), (n.method = 'throw'), (n.arg = p.arg));
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ('throw' === n &&
                e.iterator['return'] &&
                ((r.method = 'return'),
                (r.arg = t),
                maybeInvokeDelegate(e, r),
                'throw' === r.method)) ||
                ('return' !== n &&
                  ((r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              y
            );
          var i = tryCatch(o, e.iterator, r.arg);
          if ('throw' === i.type)
            return (
              (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                (r.delegate = null),
                y)
              : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              y);
        }
        function pushTryEntry(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function Context(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(e) {
          if (e || '' === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length; )
                    if (n.call(e, o))
                      return (next.value = e[o]), (next.done = !1), next;
                  return (next.value = t), (next.done = !0), next;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(_typeof(e) + ' is not iterable');
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          o(g, 'constructor', {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          o(GeneratorFunctionPrototype, 'constructor', {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            u,
            'GeneratorFunction',
          )),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === GeneratorFunction ||
                'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                : ((t.__proto__ = GeneratorFunctionPrototype),
                  define(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = AsyncIterator),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new AsyncIterator(wrap(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          defineIteratorMethods(g),
          define(g, u, 'Generator'),
          define(g, a, function () {
            return this;
          }),
          define(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function next() {
                for (; r.length; ) {
                  var t = r.pop();
                  if (t in e) return (next.value = t), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (e.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(resetTryEntry),
                !e)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(e) {
              if (this.done) throw e;
              var r = this;
              function handle(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = t)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return handle('end');
                if (i.tryLoc <= this.prev) {
                  var c = n.call(i, 'catchLoc'),
                    u = n.call(i, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
                  : this.complete(a)
              );
            },
            complete: function complete(t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                y
              );
            },
            finish: function finish(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (
                    this.complete(r.completion, r.afterLoc), resetTryEntry(r), y
                  );
              }
            },
            catch: function _catch(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    resetTryEntry(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function delegateYield(e, r, n) {
              return (
                (this.delegate = {
                  iterator: values(e),
                  resultName: r,
                  nextLoc: n,
                }),
                'next' === this.method && (this.arg = t),
                y
              );
            },
          }),
          e
        );
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value,
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err,
              );
            }
            _next(undefined);
          });
        };
      }

      var LikeButtonPresenter = {
        init: function init(_ref) {
          var _this = this;
          return _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              var likeButtonContainer, favoriteRestaurant, restaurant;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      (likeButtonContainer = _ref.likeButtonContainer),
                        (favoriteRestaurant = _ref.favoriteRestaurant),
                        (restaurant = _ref.restaurant);
                      _this._likeButtonContainer = likeButtonContainer;
                      _this._restaurant = restaurant;
                      _this._favoriteRestaurant = favoriteRestaurant;
                      _context.next = 6;
                      return _this._renderButton();
                    case 6:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            }),
          )();
        },
        _renderButton: function _renderButton() {
          var _this2 = this;
          return _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
              var id;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      id = _this2._restaurant.id;
                      _context2.next = 3;
                      return _this2._isRestaurantExist(id);
                    case 3:
                      if (!_context2.sent) {
                        _context2.next = 7;
                        break;
                      }
                      _this2._renderLiked();
                      _context2.next = 8;
                      break;
                    case 7:
                      _this2._renderLike();
                    case 8:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            }),
          )();
        },
        _isRestaurantExist: function _isRestaurantExist(id) {
          var _this3 = this;
          return _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
              var restaurant;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _context3.next = 2;
                      return _this3._favoriteRestaurant.getRestaurant(id);
                    case 2:
                      restaurant = _context3.sent;
                      return _context3.abrupt('return', !!restaurant);
                    case 4:
                    case 'end':
                      return _context3.stop();
                  }
              }, _callee3);
            }),
          )();
        },
        _renderLike: function _renderLike() {
          var _this4 = this;
          this._likeButtonContainer.innerHTML = (0,
          _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ /* .createLikeRestaurantButtonTemplate */.SF)();
          var likeButton = document.querySelector('#likeButton');
          likeButton.addEventListener(
            'click',
            /*#__PURE__*/ _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4() {
                return _regeneratorRuntime().wrap(function _callee4$(
                  _context4,
                ) {
                  while (1)
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        _context4.next = 2;
                        return _this4._favoriteRestaurant.putRestaurant(
                          _this4._restaurant,
                        );
                      case 2:
                        _this4._renderButton();
                      case 3:
                      case 'end':
                        return _context4.stop();
                    }
                }, _callee4);
              }),
            ),
          );
        },
        _renderLiked: function _renderLiked() {
          var _this5 = this;
          this._likeButtonContainer.innerHTML = (0,
          _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ /* .createUnlikeRestaurantButtonTemplate */.HR)();
          var likeButton = document.querySelector('#likeButton');
          likeButton.addEventListener(
            'click',
            /*#__PURE__*/ _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(
                  _context5,
                ) {
                  while (1)
                    switch ((_context5.prev = _context5.next)) {
                      case 0:
                        _context5.next = 2;
                        return _this5._favoriteRestaurant.deleteRestaurant(
                          _this5._restaurant.id,
                        );
                      case 2:
                        _this5._renderButton();
                      case 3:
                      case 'end':
                        return _context5.stop();
                    }
                }, _callee5);
              }),
            ),
          );
        },
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        LikeButtonPresenter;

      /***/
    },

    /***/ 4482: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* binding */ review_initiator,
      });

      // EXTERNAL MODULE: ./src/scripts/data/restaurantdb-source.js + 1 modules
      var restaurantdb_source = __webpack_require__(9651);
      // EXTERNAL MODULE: ./src/scripts/routes/url-parser.js
      var url_parser = __webpack_require__(8386);
      // EXTERNAL MODULE: ./src/scripts/views/templates/template-creator.js
      var template_creator = __webpack_require__(4150); // CONCATENATED MODULE: ./src/scripts/utils/date-helper.js
      var DateHelper = {
        monthNamesCheck: function monthNamesCheck(number) {
          switch (Number(number)) {
            case 0:
              return 'January';
            case 1:
              return 'February';
            case 2:
              return 'March';
            case 3:
              return 'April';
            case 4:
              return 'May';
            case 5:
              return 'June';
            case 6:
              return 'July';
            case 7:
              return 'August';
            case 8:
              return 'September';
            case 9:
              return 'October';
            case 10:
              return 'November';
            case 11:
              return 'December';
            default:
              return 'Unknown';
          }
        },
      };
      /* harmony default export */ const date_helper = DateHelper; // CONCATENATED MODULE: ./src/scripts/utils/review-initiator.js
      function _typeof(o) {
        '@babel/helpers - typeof';
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o &&
                    'function' == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o;
                }),
          _typeof(o)
        );
      }
      function _regeneratorRuntime() {
        'use strict';
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
          function _regeneratorRuntime() {
            return e;
          };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          c = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function define(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          define({}, '');
        } catch (t) {
          define = function define(t, e, r) {
            return (t[e] = r);
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = wrap;
        var h = 'suspendedStart',
          l = 'suspendedYield',
          f = 'executing',
          s = 'completed',
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(p));
        function defineIteratorMethods(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == _typeof(h) && n.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      invoke('next', t, i, a);
                    },
                    function (t) {
                      invoke('throw', t, i, a);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), i(u);
                    },
                    function (t) {
                      return invoke('throw', t, i, a);
                    },
                  );
            }
            a(c.arg);
          }
          var r;
          o(this, '_invoke', {
            value: function value(t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return (r = r
                ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error('Generator is already running');
            if (o === s) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (o === h) throw ((o = s), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ('normal' === p.type) {
                if (((o = n.done ? s : l), p.arg === y)) continue;
                return { value: p.arg, done: n.done };
              }
              'throw' === p.type &&
                ((o = s), (n.method = 'throw'), (n.arg = p.arg));
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ('throw' === n &&
                e.iterator['return'] &&
                ((r.method = 'return'),
                (r.arg = t),
                maybeInvokeDelegate(e, r),
                'throw' === r.method)) ||
                ('return' !== n &&
                  ((r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              y
            );
          var i = tryCatch(o, e.iterator, r.arg);
          if ('throw' === i.type)
            return (
              (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                (r.delegate = null),
                y)
              : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              y);
        }
        function pushTryEntry(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function Context(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(e) {
          if (e || '' === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length; )
                    if (n.call(e, o))
                      return (next.value = e[o]), (next.done = !1), next;
                  return (next.value = t), (next.done = !0), next;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(_typeof(e) + ' is not iterable');
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          o(g, 'constructor', {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          o(GeneratorFunctionPrototype, 'constructor', {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            u,
            'GeneratorFunction',
          )),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === GeneratorFunction ||
                'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                : ((t.__proto__ = GeneratorFunctionPrototype),
                  define(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = AsyncIterator),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new AsyncIterator(wrap(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          defineIteratorMethods(g),
          define(g, u, 'Generator'),
          define(g, a, function () {
            return this;
          }),
          define(g, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function next() {
                for (; r.length; ) {
                  var t = r.pop();
                  if (t in e) return (next.value = t), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (e.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(resetTryEntry),
                !e)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(e) {
              if (this.done) throw e;
              var r = this;
              function handle(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = t)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return handle('end');
                if (i.tryLoc <= this.prev) {
                  var c = n.call(i, 'catchLoc'),
                    u = n.call(i, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
                  : this.complete(a)
              );
            },
            complete: function complete(t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                y
              );
            },
            finish: function finish(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (
                    this.complete(r.completion, r.afterLoc), resetTryEntry(r), y
                  );
              }
            },
            catch: function _catch(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    resetTryEntry(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function delegateYield(e, r, n) {
              return (
                (this.delegate = {
                  iterator: values(e),
                  resultName: r,
                  nextLoc: n,
                }),
                'next' === this.method && (this.arg = t),
                y
              );
            },
          }),
          e
        );
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value,
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err,
              );
            }
            _next(undefined);
          });
        };
      }
      /* eslint-disable no-alert */

      var ReviewInitiator = {
        init: function init(_ref) {
          var customerReviewContainer = _ref.customerReviewContainer,
            customerReviewFormContainer = _ref.customerReviewFormContainer;
          this._customerReviewContainer = customerReviewContainer;
          this._customerReviewFormContainer = customerReviewFormContainer;
          this._renderForm();
        },
        _renderForm: function _renderForm() {
          this._customerReviewFormContainer.innerHTML = (0,
          template_creator /* createCustomerReviewFormTemplate */.$G)();
          this._isFormSubmitted();
        },
        _isFormSubmitted: function _isFormSubmitted() {
          var _this = this;
          var reviewFormElement = document.querySelector('#form-review');
          reviewFormElement.addEventListener('submit', function (e) {
            e.preventDefault();
            var url =
              url_parser /* default.parseActiveUrlWithoutCombiner */.Z.parseActiveUrlWithoutCombiner();
            var inputName = document.querySelector('#inputName');
            var inputReview = document.querySelector('#inputReview');
            var data = {
              id: url.id,
              name: inputName.value,
              review: inputReview.value,
            };
            _this._makeRequest(data);
          });
        },
        _makeRequest: function _makeRequest(data) {
          var _this2 = this;
          return _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              var inputName, inputReview, responseJSON, date, id, name, review;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      inputName = document.querySelector('#inputName');
                      inputReview = document.querySelector('#inputReview');
                      _context.next = 4;
                      return restaurantdb_source /* default.postRestaurantReview */.Z.postRestaurantReview(
                        data,
                      );
                    case 4:
                      responseJSON = _context.sent;
                      date = new Date();
                      id = data.id;
                      name = data.name;
                      review = data.review;
                      _context.next = 11;
                      return responseJSON.error;
                    case 11:
                      _context.t0 = _context.sent;
                      if (!(_context.t0 === false)) {
                        _context.next = 19;
                        break;
                      }
                      _this2._customerReviewContainer.innerHTML += (0,
                      template_creator /* createCustomerReviewTemplate */.Cx)({
                        id: id,
                        name: name,
                        review: review,
                        date: '\n        '
                          .concat(date.getDate(), ' ')
                          .concat(
                            date_helper.monthNamesCheck(date.getMonth()),
                            ' ',
                          )
                          .concat(date.getFullYear(), '\n         '),
                      });
                      inputName.value = '';
                      inputReview.value = '';
                      alert('Review successfully added!');
                      _context.next = 24;
                      break;
                    case 19:
                      _context.t1 = alert;
                      _context.next = 22;
                      return responseJSON.message;
                    case 22:
                      _context.t2 = _context.sent;
                      (0, _context.t1)('Failed to add a review', _context.t2);
                    case 24:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            }),
          )();
        },
      };
      /* harmony default export */ const review_initiator = ReviewInitiator;

      /***/
    },
  },
]);
//# sourceMappingURL=app~71c0e426.bundle.js.map
