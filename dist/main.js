/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  function e(e, r) {
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(
          e,
          (void 0,
          (i = (function (e, r) {
            if ("object" !== t(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, "string");
              if ("object" !== t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(o.key)),
          "symbol" === t(i) ? i : String(i)),
          o
        );
    }
    var i;
  }
  var r = document.querySelector("#location"),
    n = document.querySelector("#condition"),
    o = document.querySelector("#condition-icon"),
    i = document.querySelector("#temperature"),
    a = document.querySelector("#results"),
    c = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      var c, u;
      return (
        (c = t),
        (u = [
          {
            key: "editLocation",
            value: function (t) {
              (r.innerText = ""), (r.innerText += "Location: ".concat(t));
            },
          },
          {
            key: "editCondition",
            value: function (t) {
              (n.innerText = ""), (n.innerText = "Condition: ".concat(t));
            },
          },
          {
            key: "editIcon",
            value: function (t) {
              (o.innerText = ""), (o.src = t);
            },
          },
          {
            key: "editTemperature",
            value: function (t) {
              (i.innerText = ""),
                (i.innerText += "Temperature: ".concat(t, " °C"));
            },
          },
          {
            key: "showResult",
            value: function () {
              a.style.display = "block";
            },
          },
        ]),
        null && e(c.prototype, null),
        u && e(c, u),
        Object.defineProperty(c, "prototype", { writable: !1 }),
        t
      );
    })();
  function u(t) {
    return (
      (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      u(t)
    );
  }
  function l() {
    l = function () {
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
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      f = i.toStringTag || "@@toStringTag";
    function s(t, e, r) {
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
      s({}, "");
    } catch (t) {
      s = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function h(t, e, r, n) {
      var i = e && e.prototype instanceof b ? e : b,
        a = Object.create(i.prototype),
        c = new G(n || []);
      return o(a, "_invoke", { value: O(t, r, c) }), a;
    }
    function y(t, e, r) {
      try {
        return { type: "normal", arg: t.call(e, r) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    e.wrap = h;
    var p = "suspendedStart",
      v = "suspendedYield",
      d = "executing",
      m = "completed",
      g = {};
    function b() {}
    function w() {}
    function x() {}
    var L = {};
    s(L, a, function () {
      return this;
    });
    var S = Object.getPrototypeOf,
      E = S && S(S(N([])));
    E && E !== r && n.call(E, a) && (L = E);
    var j = (x.prototype = b.prototype = Object.create(L));
    function T(t) {
      ["next", "throw", "return"].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function k(t, e) {
      function r(o, i, a, c) {
        var l = y(t[o], t, i);
        if ("throw" !== l.type) {
          var f = l.arg,
            s = f.value;
          return s && "object" == u(s) && n.call(s, "__await")
            ? e.resolve(s.__await).then(
                function (t) {
                  r("next", t, a, c);
                },
                function (t) {
                  r("throw", t, a, c);
                }
              )
            : e.resolve(s).then(
                function (t) {
                  (f.value = t), a(f);
                },
                function (t) {
                  return r("throw", t, a, c);
                }
              );
        }
        c(l.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (t, n) {
          function o() {
            return new e(function (e, o) {
              r(t, n, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function O(e, r, n) {
      var o = p;
      return function (i, a) {
        if (o === d) throw new Error("Generator is already running");
        if (o === m) {
          if ("throw" === i) throw a;
          return { value: t, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = P(c, n);
            if (u) {
              if (u === g) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;
          else if ("throw" === n.method) {
            if (o === p) throw ((o = m), n.arg);
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = d;
          var l = y(e, r, n);
          if ("normal" === l.type) {
            if (((o = n.done ? m : v), l.arg === g)) continue;
            return { value: l.arg, done: n.done };
          }
          "throw" === l.type &&
            ((o = m), (n.method = "throw"), (n.arg = l.arg));
        }
      };
    }
    function P(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t)
        return (
          (r.delegate = null),
          ("throw" === n &&
            e.iterator.return &&
            ((r.method = "return"),
            (r.arg = t),
            P(e, r),
            "throw" === r.method)) ||
            ("return" !== n &&
              ((r.method = "throw"),
              (r.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          g
        );
      var i = y(o, e.iterator, r.arg);
      if ("throw" === i.type)
        return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g;
      var a = i.arg;
      return a
        ? a.done
          ? ((r[e.resultName] = a.value),
            (r.next = e.nextLoc),
            "return" !== r.method && ((r.method = "next"), (r.arg = t)),
            (r.delegate = null),
            g)
          : a
        : ((r.method = "throw"),
          (r.arg = new TypeError("iterator result is not an object")),
          (r.delegate = null),
          g);
    }
    function _(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function q(t) {
      var e = t.completion || {};
      (e.type = "normal"), delete e.arg, (t.completion = e);
    }
    function G(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(_, this),
        this.reset(!0);
    }
    function N(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function r() {
              for (; ++o < e.length; )
                if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
              return (r.value = t), (r.done = !0), r;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(u(e) + " is not iterable");
    }
    return (
      (w.prototype = x),
      o(j, "constructor", { value: x, configurable: !0 }),
      o(x, "constructor", { value: w, configurable: !0 }),
      (w.displayName = s(x, f, "GeneratorFunction")),
      (e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return (
          !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
        );
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, x)
            : ((t.__proto__ = x), s(t, f, "GeneratorFunction")),
          (t.prototype = Object.create(j)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      T(k.prototype),
      s(k.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = k),
      (e.async = function (t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new k(h(t, r, n, o), i);
        return e.isGeneratorFunction(r)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      T(j),
      s(j, f, "Generator"),
      s(j, a, function () {
        return this;
      }),
      s(j, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in e) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = N),
      (G.prototype = {
        constructor: G,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = t),
            this.tryEntries.forEach(q),
            !e)
          )
            for (var r in this)
              "t" === r.charAt(0) &&
                n.call(this, r) &&
                !isNaN(+r.slice(1)) &&
                (this[r] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return (
              (c.type = "throw"),
              (c.arg = e),
              (r.next = n),
              o && ((r.method = "next"), (r.arg = t)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var u = n.call(a, "catchLoc"),
                l = n.call(a, "finallyLoc");
              if (u && l) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!l)
                  throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= e &&
            e <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = e),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), g)
              : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t.type && e && (this.next = e),
            g
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t)
              return this.complete(r.completion, r.afterLoc), q(r), g;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                q(r);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: N(e), resultName: r, nextLoc: n }),
            "next" === this.method && (this.arg = t),
            g
          );
        },
      }),
      e
    );
  }
  function f(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void r(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o);
  }
  function s(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(
          t,
          (void 0,
          (o = (function (t, e) {
            if ("object" !== u(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" !== u(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(n.key)),
          "symbol" === u(o) ? o : String(o)),
          n
        );
    }
    var o;
  }
  var h = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      var e, r, n, o;
      return (
        (e = t),
        null,
        (r = [
          {
            key: "searchWeather",
            value:
              ((n = l().mark(function t(e) {
                var r, n, o;
                return l().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r =
                              "https://api.weatherapi.com/v1/current.json?key="
                                .concat("053c4c71f49e41e485944435230610", "&q=")
                                .concat(e)),
                            (t.prev = 2),
                            (t.next = 5),
                            fetch(r, { mode: "cors" })
                          );
                        case 5:
                          return (n = t.sent), (t.next = 8), n.json();
                        case 8:
                          return (
                            (o = t.sent), console.log(o), t.abrupt("return", o)
                          );
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t.catch(2)),
                            console.error(t.t0);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 13]]
                );
              })),
              (o = function () {
                var t = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var i = n.apply(t, e);
                  function a(t) {
                    f(i, r, o, a, c, "next", t);
                  }
                  function c(t) {
                    f(i, r, o, a, c, "throw", t);
                  }
                  a(void 0);
                });
              }),
              function (t) {
                return o.apply(this, arguments);
              }),
          },
        ]),
        r && s(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })(),
    y = document.querySelector("#search-form");
  document.querySelector("#location-search"),
    document.querySelector("#location-search-button"),
    y.addEventListener("submit", function (t) {
      t.preventDefault();
      var e = t.target[0].value;
      h.searchWeather(e).then(function (t) {
        c.editLocation(t.location.country),
          c.editCondition(t.current.condition.text),
          c.editIcon(t.current.condition.icon),
          c.editTemperature(t.current.temp_c),
          c.showResult();
      });
    });
})();
