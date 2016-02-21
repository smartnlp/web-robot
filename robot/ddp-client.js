!function() {
    var e, t, r;
    (function() {
        var n = this;
        e = n.Date, t = n.parseInt, r = String.prototype.replace;
    }).call(this), function() {
        function e(e) {
            var t = console[e];
            t && "object" == typeof t && (console[e] = function() {
                return Function.prototype.apply.call(t, console, arguments);
            });
        }
        var t = Object.prototype.hasOwnProperty;
        if ("object" == typeof console && "object" == typeof console.log) for (var r in console) t.call(console, r) && e(r);
    }.call(this), function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(t) :"object" == typeof exports ? module.exports = t() :e.returnExports = t();
    }(this, function() {
        var r = Array, n = r.prototype, o = Object, i = o.prototype, a = Function.prototype, c = String, u = c.prototype, l = Number, f = l.prototype, s = n.slice, p = n.splice, y = n.push, h = n.unshift, d = n.concat, b = a.call, g = Math.max, v = Math.min, w = i.toString, m = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, O, j = Function.prototype.toString, T = function ze(e) {
            try {
                return j.call(e), !0;
            } catch (t) {
                return !1;
            }
        }, _ = "[object Function]", x = "[object GeneratorFunction]";
        O = function $e(e) {
            if ("function" != typeof e) return !1;
            if (m) return T(e);
            var t = w.call(e);
            return t === _ || t === x;
        };
        var E, S = RegExp.prototype.exec, P = function Ce(e) {
            try {
                return S.call(e), !0;
            } catch (t) {
                return !1;
            }
        }, I = "[object RegExp]";
        E = function De(e) {
            return "object" != typeof e ? !1 :m ? P(e) :w.call(e) === I;
        };
        var k, F = String.prototype.valueOf, N = function Ue(e) {
            try {
                return F.call(e), !0;
            } catch (t) {
                return !1;
            }
        }, M = "[object String]";
        k = function Ze(e) {
            return "string" == typeof e ? !0 :"object" != typeof e ? !1 :m ? N(e) :w.call(e) === M;
        };
        var R = function(e) {
            var t = o.defineProperty && function() {
                try {
                    var e = {};
                    o.defineProperty(e, "x", {
                        enumerable:!1,
                        value:e
                    });
                    for (var t in e) return !1;
                    return e.x === e;
                } catch (r) {
                    return !1;
                }
            }(), r;
            return r = t ? function(e, t, r, n) {
                !n && t in e || o.defineProperty(e, t, {
                    configurable:!0,
                    enumerable:!1,
                    writable:!0,
                    value:r
                });
            } :function(e, t, r, n) {
                !n && t in e || (e[t] = r);
            }, function n(t, o, i) {
                for (var a in o) e.call(o, a) && r(t, a, o[a], i);
            };
        }(i.hasOwnProperty), A = function Je(e) {
            var t = typeof e;
            return null === e || "object" !== t && "function" !== t;
        }, z = {
            ToInteger:function Ge(e) {
                var t = +e;
                return t !== t ? t = 0 :0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), 
                t;
            },
            ToPrimitive:function Xe(e) {
                var t, r, n;
                if (A(e)) return e;
                if (r = e.valueOf, O(r) && (t = r.call(e), A(t))) return t;
                if (n = e.toString, O(n) && (t = n.call(e), A(t))) return t;
                throw new TypeError();
            },
            ToObject:function(e) {
                if (null == e) throw new TypeError("can't convert " + e + " to object");
                return o(e);
            },
            ToUint32:function Be(e) {
                return e >>> 0;
            }
        }, $ = function Le() {};
        R(a, {
            bind:function We(e) {
                var t = this;
                if (!O(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                for (var r = s.call(arguments, 1), n, i = function() {
                    if (this instanceof n) {
                        var i = t.apply(this, d.call(r, s.call(arguments)));
                        return o(i) === i ? i :this;
                    }
                    return t.apply(e, d.call(r, s.call(arguments)));
                }, a = g(0, t.length - r.length), c = [], u = 0; a > u; u++) y.call(c, "$" + u);
                return n = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this, arguments); }")(i), 
                t.prototype && ($.prototype = t.prototype, n.prototype = new $(), $.prototype = null), 
                n;
            }
        });
        var C = b.bind(i.hasOwnProperty), D = b.bind(i.toString), U = b.bind(u.slice), Z = b.bind(u.split), J = r.isArray || function He(e) {
            return "[object Array]" === D(e);
        }, G = 1 !== [].unshift(0);
        R(n, {
            unshift:function() {
                return h.apply(this, arguments), this.length;
            }
        }, G), R(r, {
            isArray:J
        });
        var X = o("a"), B = "a" !== X[0] || !(0 in X), L = function Ye(e) {
            var t = !0, r = !0;
            return e && (e.call("foo", function(e, r, n) {
                "object" != typeof n && (t = !1);
            }), e.call([ 1 ], function() {
                "use strict";
                r = "string" == typeof this;
            }, "x")), !!e && t && r;
        };
        R(n, {
            forEach:function qe(e) {
                var t = z.ToObject(this), r = B && k(this) ? Z(this, "") :t, n = -1, o = r.length >>> 0, i;
                if (arguments.length > 1 && (i = arguments[1]), !O(e)) throw new TypeError("Array.prototype.forEach callback must be a function");
                for (;++n < o; ) n in r && ("undefined" != typeof i ? e.call(i, r[n], n, t) :e(r[n], n, t));
            }
        }, !L(n.forEach)), R(n, {
            map:function Ke(e) {
                var t = z.ToObject(this), n = B && k(this) ? Z(this, "") :t, o = n.length >>> 0, i = r(o), a;
                if (arguments.length > 1 && (a = arguments[1]), !O(e)) throw new TypeError("Array.prototype.map callback must be a function");
                for (var c = 0; o > c; c++) c in n && ("undefined" != typeof a ? i[c] = e.call(a, n[c], c, t) :i[c] = e(n[c], c, t));
                return i;
            }
        }, !L(n.map)), R(n, {
            filter:function Qe(e) {
                var t = z.ToObject(this), r = B && k(this) ? Z(this, "") :t, n = r.length >>> 0, o = [], i, a;
                if (arguments.length > 1 && (a = arguments[1]), !O(e)) throw new TypeError("Array.prototype.filter callback must be a function");
                for (var c = 0; n > c; c++) c in r && (i = r[c], ("undefined" == typeof a ? e(i, c, t) :e.call(a, i, c, t)) && y.call(o, i));
                return o;
            }
        }, !L(n.filter)), R(n, {
            every:function Ve(e) {
                var t = z.ToObject(this), r = B && k(this) ? Z(this, "") :t, n = r.length >>> 0, o;
                if (arguments.length > 1 && (o = arguments[1]), !O(e)) throw new TypeError("Array.prototype.every callback must be a function");
                for (var i = 0; n > i; i++) if (i in r && !("undefined" == typeof o ? e(r[i], i, t) :e.call(o, r[i], i, t))) return !1;
                return !0;
            }
        }, !L(n.every)), R(n, {
            some:function et(e) {
                var t = z.ToObject(this), r = B && k(this) ? Z(this, "") :t, n = r.length >>> 0, o;
                if (arguments.length > 1 && (o = arguments[1]), !O(e)) throw new TypeError("Array.prototype.some callback must be a function");
                for (var i = 0; n > i; i++) if (i in r && ("undefined" == typeof o ? e(r[i], i, t) :e.call(o, r[i], i, t))) return !0;
                return !1;
            }
        }, !L(n.some));
        var W = !1;
        n.reduce && (W = "object" == typeof n.reduce.call("es5", function(e, t, r, n) {
            return n;
        })), R(n, {
            reduce:function tt(e) {
                var t = z.ToObject(this), r = B && k(this) ? Z(this, "") :t, n = r.length >>> 0;
                if (!O(e)) throw new TypeError("Array.prototype.reduce callback must be a function");
                if (0 === n && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                var o = 0, i;
                if (arguments.length >= 2) i = arguments[1]; else for (;;) {
                    if (o in r) {
                        i = r[o++];
                        break;
                    }
                    if (++o >= n) throw new TypeError("reduce of empty array with no initial value");
                }
                for (;n > o; o++) o in r && (i = e(i, r[o], o, t));
                return i;
            }
        }, !W);
        var H = !1;
        n.reduceRight && (H = "object" == typeof n.reduceRight.call("es5", function(e, t, r, n) {
            return n;
        })), R(n, {
            reduceRight:function rt(e) {
                var t = z.ToObject(this), r = B && k(this) ? Z(this, "") :t, n = r.length >>> 0;
                if (!O(e)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                if (0 === n && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                var o, i = n - 1;
                if (arguments.length >= 2) o = arguments[1]; else for (;;) {
                    if (i in r) {
                        o = r[i--];
                        break;
                    }
                    if (--i < 0) throw new TypeError("reduceRight of empty array with no initial value");
                }
                if (0 > i) return o;
                do i in r && (o = e(o, r[i], i, t)); while (i--);
                return o;
            }
        }, !H);
        var Y = n.indexOf && -1 !== [ 0, 1 ].indexOf(1, 2);
        R(n, {
            indexOf:function nt(e) {
                var t = B && k(this) ? Z(this, "") :z.ToObject(this), r = t.length >>> 0;
                if (0 === r) return -1;
                var n = 0;
                for (arguments.length > 1 && (n = z.ToInteger(arguments[1])), n = n >= 0 ? n :g(0, r + n); r > n; n++) if (n in t && t[n] === e) return n;
                return -1;
            }
        }, Y);
        var q = n.lastIndexOf && -1 !== [ 0, 1 ].lastIndexOf(0, -3);
        R(n, {
            lastIndexOf:function ot(e) {
                var t = B && k(this) ? Z(this, "") :z.ToObject(this), r = t.length >>> 0;
                if (0 === r) return -1;
                var n = r - 1;
                for (arguments.length > 1 && (n = v(n, z.ToInteger(arguments[1]))), n = n >= 0 ? n :r - Math.abs(n); n >= 0; n--) if (n in t && e === t[n]) return n;
                return -1;
            }
        }, q);
        var K = function() {
            var e = [ 1, 2 ], t = e.splice();
            return 2 === e.length && J(t) && 0 === t.length;
        }();
        R(n, {
            splice:function it(e, t) {
                return 0 === arguments.length ? [] :p.apply(this, arguments);
            }
        }, !K);
        var Q = function() {
            var e = {};
            return n.splice.call(e, 0, 0, 1), 1 === e.length;
        }();
        R(n, {
            splice:function at(e, t) {
                if (0 === arguments.length) return [];
                var r = arguments;
                return this.length = g(z.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (r = s.call(arguments), 
                r.length < 2 ? y.call(r, this.length - e) :r[1] = z.ToInteger(t)), p.apply(this, r);
            }
        }, !Q);
        var V = function() {
            var e = new r(1e5);
            return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x");
        }(), ee = function() {
            var e = 256, t = [];
            return t[e] = "a", t.splice(e + 1, 0, "b"), "a" === t[e];
        }();
        R(n, {
            splice:function ct(e, t) {
                for (var r = z.ToObject(this), n = [], o = z.ToUint32(r.length), i = z.ToInteger(e), a = 0 > i ? g(o + i, 0) :v(i, o), u = v(g(z.ToInteger(t), 0), o - a), l = 0, f; u > l; ) f = c(a + l), 
                C(r, f) && (n[l] = r[f]), l += 1;
                var p = s.call(arguments, 2), y = p.length, h;
                if (u > y) {
                    for (l = a; o - u > l; ) f = c(l + u), h = c(l + y), C(r, f) ? r[h] = r[f] :delete r[h], 
                    l += 1;
                    for (l = o; l > o - u + y; ) delete r[l - 1], l -= 1;
                } else if (y > u) for (l = o - u; l > a; ) f = c(l + u - 1), h = c(l + y - 1), C(r, f) ? r[h] = r[f] :delete r[h], 
                l -= 1;
                l = a;
                for (var d = 0; d < p.length; ++d) r[l] = p[d], l += 1;
                return r.length = o - u + y, n;
            }
        }, !V || !ee);
        var te = !{
            toString:null
        }.propertyIsEnumerable("toString"), re = function() {}.propertyIsEnumerable("prototype"), ne = !C("x", "0"), oe = function(e) {
            var t = e.constructor;
            return t && t.prototype === e;
        }, ie = {
            $window:!0,
            $console:!0,
            $parent:!0,
            $self:!0,
            $frames:!0,
            $frameElement:!0,
            $webkitIndexedDB:!0,
            $webkitStorageInfo:!0
        }, ae = function() {
            if ("undefined" == typeof window) return !1;
            for (var e in window) if (!ie["$" + e] && C(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                oe(window[e]);
            } catch (t) {
                return !0;
            }
            return !1;
        }(), ce = function(e) {
            if ("undefined" == typeof window || !ae) return oe(e);
            try {
                return oe(e);
            } catch (t) {
                return !1;
            }
        }, ue = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], le = ue.length, fe = function ut(e) {
            return "[object Arguments]" === D(e);
        }, se = function lt(e) {
            return null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && !J(e) && O(e.callee);
        }, pe = fe(arguments) ? fe :se;
        R(o, {
            keys:function ft(e) {
                var t = O(e), r = pe(e), n = null !== e && "object" == typeof e, o = n && k(e);
                if (!n && !t && !r) throw new TypeError("Object.keys called on a non-object");
                var i = [], a = re && t;
                if (o && ne || r) for (var u = 0; u < e.length; ++u) y.call(i, c(u));
                if (!r) for (var l in e) a && "prototype" === l || !C(e, l) || y.call(i, c(l));
                if (te) for (var f = ce(e), s = 0; le > s; s++) {
                    var p = ue[s];
                    f && "constructor" === p || !C(e, p) || y.call(i, p);
                }
                return i;
            }
        });
        var ye = o.keys && function() {
            return 2 === o.keys(arguments).length;
        }(1, 2), he = o.keys && function() {
            var e = o.keys(arguments);
            return 1 !== arguments.length || 1 !== e.length || 1 !== e[0];
        }(1), de = o.keys;
        R(o, {
            keys:function st(e) {
                return de(pe(e) ? s.call(e) :e);
            }
        }, !ye || he);
        var be = -621987552e5, ge = "-000001", ve = e.prototype.toISOString && -1 === new e(be).toISOString().indexOf(ge), we = e.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new e(-1).toISOString();
        R(e.prototype, {
            toISOString:function pt() {
                var e, t, r, n, o;
                if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                for (n = this.getUTCFullYear(), o = this.getUTCMonth(), n += Math.floor(o / 12), 
                o = (o % 12 + 12) % 12, e = [ o + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds() ], 
                n = (0 > n ? "-" :n > 9999 ? "+" :"") + U("00000" + Math.abs(n), n >= 0 && 9999 >= n ? -4 :-6), 
                t = e.length; t--; ) r = e[t], 10 > r && (e[t] = "0" + r);
                return n + "-" + s.call(e, 0, 2).join("-") + "T" + s.call(e, 2).join(":") + "." + U("000" + this.getUTCMilliseconds(), -3) + "Z";
            }
        }, ve || we);
        var me = function() {
            try {
                return e.prototype.toJSON && null === new e(0 / 0).toJSON() && -1 !== new e(be).toJSON().indexOf(ge) && e.prototype.toJSON.call({
                    toISOString:function() {
                        return !0;
                    }
                });
            } catch (t) {
                return !1;
            }
        }();
        me || (e.prototype.toJSON = function yt(e) {
            var t = o(this), r = z.ToPrimitive(t);
            if ("number" == typeof r && !isFinite(r)) return null;
            var n = t.toISOString;
            if (!O(n)) throw new TypeError("toISOString property is not callable");
            return n.call(t);
        });
        var Oe = 1e15 === e.parse("+033658-09-27T01:46:40.000Z"), je = !isNaN(e.parse("2012-04-04T24:00:00.500Z")) || !isNaN(e.parse("2012-11-31T23:59:59.000Z")) || !isNaN(e.parse("2012-12-31T23:59:60.000Z")), Te = isNaN(e.parse("2000-01-01T00:00:00.000Z"));
        (Te || je || !Oe) && (e = function(e) {
            var t = function f(r, n, o, i, a, u, l) {
                var f = arguments.length, s;
                return s = this instanceof e ? 1 === f && c(r) === r ? new e(t.parse(r)) :f >= 7 ? new e(r, n, o, i, a, u, l) :f >= 6 ? new e(r, n, o, i, a, u) :f >= 5 ? new e(r, n, o, i, a) :f >= 4 ? new e(r, n, o, i) :f >= 3 ? new e(r, n, o) :f >= 2 ? new e(r, n) :f >= 1 ? new e(r) :new e() :e.apply(this, arguments), 
                A(s) || R(s, {
                    constructor:t
                }, !0), s;
            }, r = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"), n = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365 ], o = function s(e, t) {
                var r = t > 1 ? 1 :0;
                return n[t] + Math.floor((e - 1969 + r) / 4) - Math.floor((e - 1901 + r) / 100) + Math.floor((e - 1601 + r) / 400) + 365 * (e - 1970);
            }, i = function p(t) {
                return l(new e(1970, 0, 1, 0, 0, 0, t));
            };
            for (var a in e) C(e, a) && (t[a] = e[a]);
            R(t, {
                now:e.now,
                UTC:e.UTC
            }, !0), t.prototype = e.prototype, R(t.prototype, {
                constructor:t
            }, !0);
            var u = function y(t) {
                var n = r.exec(t);
                if (n) {
                    var a = l(n[1]), c = l(n[2] || 1) - 1, u = l(n[3] || 1) - 1, f = l(n[4] || 0), s = l(n[5] || 0), p = l(n[6] || 0), y = Math.floor(1e3 * l(n[7] || 0)), h = Boolean(n[4] && !n[8]), d = "-" === n[9] ? 1 :-1, b = l(n[10] || 0), g = l(n[11] || 0), v;
                    return (s > 0 || p > 0 || y > 0 ? 24 :25) > f && 60 > s && 60 > p && 1e3 > y && c > -1 && 12 > c && 24 > b && 60 > g && u > -1 && u < o(a, c + 1) - o(a, c) && (v = 60 * (24 * (o(a, c) + u) + f + b * d), 
                    v = 1e3 * (60 * (v + s + g * d) + p) + y, h && (v = i(v)), v >= -864e13 && 864e13 >= v) ? v :0 / 0;
                }
                return e.parse.apply(this, arguments);
            };
            return R(t, {
                parse:u
            }), t;
        }(e)), e.now || (e.now = function ht() {
            return new e().getTime();
        });
        var _e = f.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)), xe = {
            base:1e7,
            size:6,
            data:[ 0, 0, 0, 0, 0, 0 ],
            multiply:function dt(e, t) {
                for (var r = -1, n = t; ++r < xe.size; ) n += e * xe.data[r], xe.data[r] = n % xe.base, 
                n = Math.floor(n / xe.base);
            },
            divide:function bt(e) {
                for (var t = xe.size, r = 0; --t >= 0; ) r += xe.data[t], xe.data[t] = Math.floor(r / e), 
                r = r % e * xe.base;
            },
            numToString:function gt() {
                for (var e = xe.size, t = ""; --e >= 0; ) if ("" !== t || 0 === e || 0 !== xe.data[e]) {
                    var r = c(xe.data[e]);
                    "" === t ? t = r :t += U("0000000", 0, 7 - r.length) + r;
                }
                return t;
            },
            pow:function vt(e, t, r) {
                return 0 === t ? r :t % 2 === 1 ? vt(e, t - 1, r * e) :vt(e * e, t / 2, r);
            },
            log:function wt(e) {
                for (var t = 0, r = e; r >= 4096; ) t += 12, r /= 4096;
                for (;r >= 2; ) t += 1, r /= 2;
                return t;
            }
        };
        R(f, {
            toFixed:function mt(e) {
                var t, r, n, o, i, a, u, f;
                if (t = l(e), t = t !== t ? 0 :Math.floor(t), 0 > t || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                if (r = l(this), r !== r) return "NaN";
                if (-1e21 >= r || r >= 1e21) return c(r);
                if (n = "", 0 > r && (n = "-", r = -r), o = "0", r > 1e-21) if (i = xe.log(r * xe.pow(2, 69, 1)) - 69, 
                a = 0 > i ? r * xe.pow(2, -i, 1) :r / xe.pow(2, i, 1), a *= 4503599627370496, i = 52 - i, 
                i > 0) {
                    for (xe.multiply(0, a), u = t; u >= 7; ) xe.multiply(1e7, 0), u -= 7;
                    for (xe.multiply(xe.pow(10, u, 1), 0), u = i - 1; u >= 23; ) xe.divide(1 << 23), 
                    u -= 23;
                    xe.divide(1 << u), xe.multiply(1, 1), xe.divide(2), o = xe.numToString();
                } else xe.multiply(0, a), xe.multiply(1 << -i, 0), o = xe.numToString() + U("0.00000000000000000000", 2, 2 + t);
                return t > 0 ? (f = o.length, o = t >= f ? n + U("0.0000000000000000000", 0, t - f + 2) + o :n + U(o, 0, f - t) + "." + U(o, f - t)) :o = n + o, 
                o;
            }
        }, _e), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function() {
            var e = "undefined" == typeof /()??/.exec("")[1];
            u.split = function(t, r) {
                var n = this;
                if ("undefined" == typeof t && 0 === r) return [];
                if (!E(t)) return Z(this, t, r);
                var o = [], i = (t.ignoreCase ? "i" :"") + (t.multiline ? "m" :"") + (t.unicode ? "u" :"") + (t.sticky ? "y" :""), a = 0, c, u, l, f, p = new RegExp(t.source, i + "g");
                n += "", e || (c = new RegExp("^" + p.source + "$(?!\\s)", i));
                var h = "undefined" == typeof r ? -1 >>> 0 :z.ToUint32(r);
                for (u = p.exec(n); u && (l = u.index + u[0].length, !(l > a && (y.call(o, U(n, a, u.index)), 
                !e && u.length > 1 && u[0].replace(c, function() {
                    for (var e = 1; e < arguments.length - 2; e++) "undefined" == typeof arguments[e] && (u[e] = void 0);
                }), u.length > 1 && u.index < n.length && y.apply(o, s.call(u, 1)), f = u[0].length, 
                a = l, o.length >= h))); ) p.lastIndex === u.index && p.lastIndex++, u = p.exec(n);
                return a === n.length ? (f || !p.test("")) && y.call(o, "") :y.call(o, U(n, a)), 
                o.length > h ? U(o, 0, h) :o;
            };
        }() :"0".split(void 0, 0).length && (u.split = function Ot(e, t) {
            return "undefined" == typeof e && 0 === t ? [] :Z(this, e, t);
        });
        var Ee = u.replace, Se = function() {
            var e = [];
            return "x".replace(/x(.)?/g, function(t, r) {
                y.call(e, r);
            }), 1 === e.length && "undefined" == typeof e[0];
        }();
        Se || (u.replace = function jt(e, t) {
            var r = O(t), n = E(e) && /\)[*?]/.test(e.source);
            if (r && n) {
                var o = function(r) {
                    var n = arguments.length, o = e.lastIndex;
                    e.lastIndex = 0;
                    var i = e.exec(r) || [];
                    return e.lastIndex = o, y.call(i, arguments[n - 2], arguments[n - 1]), t.apply(this, i);
                };
                return Ee.call(this, e, o);
            }
            return Ee.call(this, e, t);
        });
        var Pe = u.substr, Ie = "".substr && "b" !== "0b".substr(-1);
        R(u, {
            substr:function Tt(e, t) {
                var r = e;
                return 0 > e && (r = g(this.length + e, 0)), Pe.call(this, r, t);
            }
        }, Ie);
        var ke = "	\n\f\r   ᠎             　\u2028\u2029﻿", Fe = "​", Ne = "[" + ke + "]", Me = new RegExp("^" + Ne + Ne + "*"), Re = new RegExp(Ne + Ne + "*$"), Ae = u.trim && (ke.trim() || !Fe.trim());
        R(u, {
            trim:function _t() {
                if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                return c(this).replace(Me, "").replace(Re, "");
            }
        }, Ae), (8 !== t(ke + "08") || 22 !== t(ke + "0x16")) && (t = function(e) {
            var t = /^0[xX]/;
            return function r(n, o) {
                var i = c(n).trim(), a = l(o) || (t.test(i) ? 16 :10);
                return e(i, a);
            };
        }(t));
    }), function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(t) :"object" == typeof exports ? module.exports = t() :e.returnExports = t();
    }(this, function() {
        var e = Function.prototype.call, t = Object.prototype, r = e.bind(t.hasOwnProperty), n = e.bind(t.propertyIsEnumerable), o = e.bind(t.toString), i, a, c, u, l = r(t, "__defineGetter__");
        l && (i = e.bind(t.__defineGetter__), a = e.bind(t.__defineSetter__), c = e.bind(t.__lookupGetter__), 
        u = e.bind(t.__lookupSetter__)), Object.getPrototypeOf || (Object.getPrototypeOf = function I(e) {
            var r = e.__proto__;
            return r || null === r ? r :"[object Function]" === o(e.constructor) ? e.constructor.prototype :e instanceof Object ? t :null;
        });
        var f = function k(e) {
            try {
                return e.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(e, "sentinel").value;
            } catch (t) {
                return !1;
            }
        };
        if (Object.defineProperty) {
            var s = f({}), p = "undefined" == typeof document || f(document.createElement("div"));
            if (!p || !s) var y = Object.getOwnPropertyDescriptor;
        }
        if (!Object.getOwnPropertyDescriptor || y) {
            var h = "Object.getOwnPropertyDescriptor called on a non-object: ";
            Object.getOwnPropertyDescriptor = function F(e, o) {
                if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(h + e);
                if (y) try {
                    return y.call(Object, e, o);
                } catch (i) {}
                var a;
                if (!r(e, o)) return a;
                if (a = {
                    enumerable:n(e, o),
                    configurable:!0
                }, l) {
                    var f = e.__proto__, s = e !== t;
                    s && (e.__proto__ = t);
                    var p = c(e, o), d = u(e, o);
                    if (s && (e.__proto__ = f), p || d) return p && (a.get = p), d && (a.set = d), a;
                }
                return a.value = e[o], a.writable = !0, a;
            };
        }
        if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function N(e) {
            return Object.keys(e);
        }), !Object.create) {
            var d, b = !({
                __proto__:null
            } instanceof Object), g = function M() {
                if (!document.domain) return !1;
                try {
                    return !!new ActiveXObject("htmlfile");
                } catch (e) {
                    return !1;
                }
            }, v = function R() {
                var e, t;
                return t = new ActiveXObject("htmlfile"), t.write("<script></script>"), t.close(), 
                e = t.parentWindow.Object.prototype, t = null, e;
            }, w = function A() {
                var e = document.createElement("iframe"), t = document.body || document.documentElement, r;
                return e.style.display = "none", t.appendChild(e), e.src = "javascript:", r = e.contentWindow.Object.prototype, 
                t.removeChild(e), e = null, r;
            };
            d = b || "undefined" == typeof document ? function() {
                return {
                    __proto__:null
                };
            } :function() {
                var e = g() ? v() :w();
                delete e.constructor, delete e.hasOwnProperty, delete e.propertyIsEnumerable, delete e.isPrototypeOf, 
                delete e.toLocaleString, delete e.toString, delete e.valueOf;
                var t = function r() {};
                return t.prototype = e, d = function() {
                    return new t();
                }, new t();
            }, Object.create = function z(e, t) {
                var r, n = function o() {};
                if (null === e) r = d(); else {
                    if ("object" != typeof e && "function" != typeof e) throw new TypeError("Object prototype may only be an Object or null");
                    n.prototype = e, r = new n(), r.__proto__ = e;
                }
                return void 0 !== t && Object.defineProperties(r, t), r;
            };
        }
        var m = function $(e) {
            try {
                return Object.defineProperty(e, "sentinel", {}), "sentinel" in e;
            } catch (t) {
                return !1;
            }
        };
        if (Object.defineProperty) {
            var O = m({}), j = "undefined" == typeof document || m(document.createElement("div"));
            if (!O || !j) var T = Object.defineProperty, _ = Object.defineProperties;
        }
        if (!Object.defineProperty || T) {
            var x = "Property description must be an object: ", E = "Object.defineProperty called on non-object: ", S = "getters & setters can not be defined on this javascript engine";
            Object.defineProperty = function C(e, r, n) {
                if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(E + e);
                if ("object" != typeof n && "function" != typeof n || null === n) throw new TypeError(x + n);
                if (T) try {
                    return T.call(Object, e, r, n);
                } catch (o) {}
                if ("value" in n) if (l && (c(e, r) || u(e, r))) {
                    var f = e.__proto__;
                    e.__proto__ = t, delete e[r], e[r] = n.value, e.__proto__ = f;
                } else e[r] = n.value; else {
                    if (!l && ("get" in n || "set" in n)) throw new TypeError(S);
                    "get" in n && i(e, r, n.get), "set" in n && a(e, r, n.set);
                }
                return e;
            };
        }
        (!Object.defineProperties || _) && (Object.defineProperties = function D(e, t) {
            if (_) try {
                return _.call(Object, e, t);
            } catch (r) {}
            return Object.keys(t).forEach(function(r) {
                "__proto__" !== r && Object.defineProperty(e, r, t[r]);
            }), e;
        }), Object.seal || (Object.seal = function U(e) {
            if (Object(e) !== e) throw new TypeError("Object.seal can only be called on Objects.");
            return e;
        }), Object.freeze || (Object.freeze = function Z(e) {
            if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
            return e;
        });
        try {
            Object.freeze(function() {});
        } catch (P) {
            Object.freeze = function(e) {
                return function t(r) {
                    return "function" == typeof r ? r :e(r);
                };
            }(Object.freeze);
        }
        Object.preventExtensions || (Object.preventExtensions = function J(e) {
            if (Object(e) !== e) throw new TypeError("Object.preventExtensions can only be called on Objects.");
            return e;
        }), Object.isSealed || (Object.isSealed = function G(e) {
            if (Object(e) !== e) throw new TypeError("Object.isSealed can only be called on Objects.");
            return !1;
        }), Object.isFrozen || (Object.isFrozen = function X(e) {
            if (Object(e) !== e) throw new TypeError("Object.isFrozen can only be called on Objects.");
            return !1;
        }), Object.isExtensible || (Object.isExtensible = function B(e) {
            if (Object(e) !== e) throw new TypeError("Object.isExtensible can only be called on Objects.");
            for (var t = ""; r(e, t); ) t += "?";
            e[t] = !0;
            var n = r(e, t);
            return delete e[t], n;
        });
    }), function() {
        var n = this;
        n.Date !== e && (n.Date = e), n.parseInt !== t && (n.parseInt = t);
        var o = String.prototype;
        o.replace !== r && (o.replace = r);
    }.call(this), "undefined" == typeof Package && (Package = {}), Package["es5-shim"] = {
        Date:e,
        parseInt:t
    };
}();

!function() {
    var n, t;
    (function() {
        n = {};
    }).call(this), function() {
        (function() {
            var t = this, r = t._, e = {}, u = Array.prototype, i = Object.prototype, a = Function.prototype, o = u.push, c = u.slice, l = u.concat, f = i.toString, s = i.hasOwnProperty, p = u.forEach, v = u.map, h = u.reduce, d = u.reduceRight, g = u.filter, m = u.every, y = u.some, b = u.indexOf, _ = u.lastIndexOf, w = Array.isArray, x = Object.keys, j = a.bind, A = function(n) {
                return n instanceof A ? n :this instanceof A ? void (this._wrapped = n) :new A(n);
            };
            "undefined" != typeof n ? ("undefined" != typeof module && module.exports && (n = module.exports = A), 
            n._ = A) :t._ = A, A.VERSION = "1.5.2";
            var k = function(n) {
                return "[object Arguments]" === f.call(n);
            };
            k(arguments) || (k = function(n) {
                return !(!n || !s.call(n, "callee") || "function" != typeof n.callee);
            });
            var O = function(n) {
                return n.length === +n.length && (k(n) || n.constructor !== Object);
            }, E = A.each = A.forEach = function(n, t, r) {
                if (null != n) if (p && n.forEach === p) n.forEach(t, r); else if (O(n)) {
                    for (var u = 0, i = n.length; i > u; u++) if (t.call(r, n[u], u, n) === e) return;
                } else for (var a = A.keys(n), u = 0, i = a.length; i > u; u++) if (t.call(r, n[a[u]], a[u], n) === e) return;
            };
            A.map = A.collect = function(n, t, r) {
                var e = [];
                return null == n ? e :v && n.map === v ? n.map(t, r) :(E(n, function(n, u, i) {
                    e.push(t.call(r, n, u, i));
                }), e);
            };
            var F = "Reduce of empty array with no initial value";
            A.reduce = A.foldl = A.inject = function(n, t, r, e) {
                var u = arguments.length > 2;
                if (null == n && (n = []), h && n.reduce === h) return e && (t = A.bind(t, e)), 
                u ? n.reduce(t, r) :n.reduce(t);
                if (E(n, function(n, i, a) {
                    u ? r = t.call(e, r, n, i, a) :(r = n, u = !0);
                }), !u) throw new TypeError(F);
                return r;
            }, A.reduceRight = A.foldr = function(n, t, r, e) {
                var u = arguments.length > 2;
                if (null == n && (n = []), d && n.reduceRight === d) return e && (t = A.bind(t, e)), 
                u ? n.reduceRight(t, r) :n.reduceRight(t);
                var i = n.length;
                if (!O(n)) {
                    var a = A.keys(n);
                    i = a.length;
                }
                if (E(n, function(o, c, l) {
                    c = a ? a[--i] :--i, u ? r = t.call(e, r, n[c], c, l) :(r = n[c], u = !0);
                }), !u) throw new TypeError(F);
                return r;
            }, A.find = A.detect = function(n, t, r) {
                var e;
                return M(n, function(n, u, i) {
                    return t.call(r, n, u, i) ? (e = n, !0) :void 0;
                }), e;
            }, A.filter = A.select = function(n, t, r) {
                var e = [];
                return null == n ? e :g && n.filter === g ? n.filter(t, r) :(E(n, function(n, u, i) {
                    t.call(r, n, u, i) && e.push(n);
                }), e);
            }, A.reject = function(n, t, r) {
                return A.filter(n, function(n, e, u) {
                    return !t.call(r, n, e, u);
                }, r);
            }, A.every = A.all = function(n, t, r) {
                t || (t = A.identity);
                var u = !0;
                return null == n ? u :m && n.every === m ? n.every(t, r) :(E(n, function(n, i, a) {
                    return (u = u && t.call(r, n, i, a)) ? void 0 :e;
                }), !!u);
            };
            var M = A.some = A.any = function(n, t, r) {
                t || (t = A.identity);
                var u = !1;
                return null == n ? u :y && n.some === y ? n.some(t, r) :(E(n, function(n, i, a) {
                    return u || (u = t.call(r, n, i, a)) ? e :void 0;
                }), !!u);
            };
            A.contains = A.include = function(n, t) {
                return null == n ? !1 :b && n.indexOf === b ? -1 != n.indexOf(t) :M(n, function(n) {
                    return n === t;
                });
            }, A.invoke = function(n, t) {
                var r = c.call(arguments, 2), e = A.isFunction(t);
                return A.map(n, function(n) {
                    return (e ? t :n[t]).apply(n, r);
                });
            }, A.pluck = function(n, t) {
                return A.map(n, function(n) {
                    return n[t];
                });
            }, A.where = function(n, t, r) {
                return A.isEmpty(t) ? r ? void 0 :[] :A[r ? "find" :"filter"](n, function(n) {
                    for (var r in t) if (t[r] !== n[r]) return !1;
                    return !0;
                });
            }, A.findWhere = function(n, t) {
                return A.where(n, t, !0);
            }, A.max = function(n, t, r) {
                if (!t && A.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
                if (!t && A.isEmpty(n)) return -(1 / 0);
                var e = {
                    computed:-(1 / 0),
                    value:-(1 / 0)
                };
                return E(n, function(n, u, i) {
                    var a = t ? t.call(r, n, u, i) :n;
                    a > e.computed && (e = {
                        value:n,
                        computed:a
                    });
                }), e.value;
            }, A.min = function(n, t, r) {
                if (!t && A.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
                if (!t && A.isEmpty(n)) return 1 / 0;
                var e = {
                    computed:1 / 0,
                    value:1 / 0
                };
                return E(n, function(n, u, i) {
                    var a = t ? t.call(r, n, u, i) :n;
                    a < e.computed && (e = {
                        value:n,
                        computed:a
                    });
                }), e.value;
            }, A.shuffle = function(n) {
                var t, r = 0, e = [];
                return E(n, function(n) {
                    t = A.random(r++), e[r - 1] = e[t], e[t] = n;
                }), e;
            }, A.sample = function(n, t, r) {
                return arguments.length < 2 || r ? n[A.random(n.length - 1)] :A.shuffle(n).slice(0, Math.max(0, t));
            };
            var R = function(n) {
                return A.isFunction(n) ? n :function(t) {
                    return t[n];
                };
            };
            A.sortBy = function(n, t, r) {
                var e = R(t);
                return A.pluck(A.map(n, function(n, t, u) {
                    return {
                        value:n,
                        index:t,
                        criteria:e.call(r, n, t, u)
                    };
                }).sort(function(n, t) {
                    var r = n.criteria, e = t.criteria;
                    if (r !== e) {
                        if (r > e || void 0 === r) return 1;
                        if (e > r || void 0 === e) return -1;
                    }
                    return n.index - t.index;
                }), "value");
            };
            var S = function(n) {
                return function(t, r, e) {
                    var u = {}, i = null == r ? A.identity :R(r);
                    return E(t, function(r, a) {
                        var o = i.call(e, r, a, t);
                        n(u, o, r);
                    }), u;
                };
            };
            A.groupBy = S(function(n, t, r) {
                (A.has(n, t) ? n[t] :n[t] = []).push(r);
            }), A.indexBy = S(function(n, t, r) {
                n[t] = r;
            }), A.countBy = S(function(n, t) {
                A.has(n, t) ? n[t]++ :n[t] = 1;
            }), A.sortedIndex = function(n, t, r, e) {
                r = null == r ? A.identity :R(r);
                for (var u = r.call(e, t), i = 0, a = n.length; a > i; ) {
                    var o = i + a >>> 1;
                    r.call(e, n[o]) < u ? i = o + 1 :a = o;
                }
                return i;
            }, A.toArray = function(n) {
                return n ? A.isArray(n) ? c.call(n) :O(n) ? A.map(n, A.identity) :A.values(n) :[];
            }, A.size = function(n) {
                return null == n ? 0 :O(n) ? n.length :A.keys(n).length;
            }, A.first = A.head = A.take = function(n, t, r) {
                return null == n ? void 0 :null == t || r ? n[0] :c.call(n, 0, t);
            }, A.initial = function(n, t, r) {
                return c.call(n, 0, n.length - (null == t || r ? 1 :t));
            }, A.last = function(n, t, r) {
                return null == n ? void 0 :null == t || r ? n[n.length - 1] :c.call(n, Math.max(n.length - t, 0));
            }, A.rest = A.tail = A.drop = function(n, t, r) {
                return c.call(n, null == t || r ? 1 :t);
            }, A.compact = function(n) {
                return A.filter(n, A.identity);
            };
            var I = function(n, t, r) {
                return t && A.every(n, A.isArray) ? l.apply(r, n) :(E(n, function(n) {
                    A.isArray(n) || A.isArguments(n) ? t ? o.apply(r, n) :I(n, t, r) :r.push(n);
                }), r);
            };
            A.flatten = function(n, t) {
                return I(n, t, []);
            }, A.without = function(n) {
                return A.difference(n, c.call(arguments, 1));
            }, A.uniq = A.unique = function(n, t, r, e) {
                A.isFunction(t) && (e = r, r = t, t = !1);
                var u = r ? A.map(n, r, e) :n, i = [], a = [];
                return E(u, function(r, e) {
                    (t ? e && a[a.length - 1] === r :A.contains(a, r)) || (a.push(r), i.push(n[e]));
                }), i;
            }, A.union = function() {
                return A.uniq(A.flatten(arguments, !0));
            }, A.intersection = function(n) {
                var t = c.call(arguments, 1);
                return A.filter(A.uniq(n), function(n) {
                    return A.every(t, function(t) {
                        return A.indexOf(t, n) >= 0;
                    });
                });
            }, A.difference = function(n) {
                var t = l.apply(u, c.call(arguments, 1));
                return A.filter(n, function(n) {
                    return !A.contains(t, n);
                });
            }, A.zip = function() {
                for (var n = A.max(A.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = A.pluck(arguments, "" + r);
                return t;
            }, A.object = function(n, t) {
                if (null == n) return {};
                for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] :r[n[e][0]] = n[e][1];
                return r;
            }, A.indexOf = function(n, t, r) {
                if (null == n) return -1;
                var e = 0, u = n.length;
                if (r) {
                    if ("number" != typeof r) return e = A.sortedIndex(n, t), n[e] === t ? e :-1;
                    e = 0 > r ? Math.max(0, u + r) :r;
                }
                if (b && n.indexOf === b) return n.indexOf(t, r);
                for (;u > e; e++) if (n[e] === t) return e;
                return -1;
            }, A.lastIndexOf = function(n, t, r) {
                if (null == n) return -1;
                var e = null != r;
                if (_ && n.lastIndexOf === _) return e ? n.lastIndexOf(t, r) :n.lastIndexOf(t);
                for (var u = e ? r :n.length; u--; ) if (n[u] === t) return u;
                return -1;
            }, A.range = function(n, t, r) {
                arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
                for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u; ) i[u++] = n, 
                n += r;
                return i;
            };
            var T = function() {};
            A.bind = function(n, t) {
                var r, e;
                if (j && n.bind === j) return j.apply(n, c.call(arguments, 1));
                if (!A.isFunction(n)) throw new TypeError();
                return r = c.call(arguments, 2), e = function() {
                    if (!(this instanceof e)) return n.apply(t, r.concat(c.call(arguments)));
                    T.prototype = n.prototype;
                    var u = new T();
                    T.prototype = null;
                    var i = n.apply(u, r.concat(c.call(arguments)));
                    return Object(i) === i ? i :u;
                };
            }, A.partial = function(n) {
                var t = c.call(arguments, 1);
                return function() {
                    return n.apply(this, t.concat(c.call(arguments)));
                };
            }, A.bindAll = function(n) {
                var t = c.call(arguments, 1);
                if (0 === t.length) throw new Error("bindAll must be passed function names");
                return E(t, function(t) {
                    n[t] = A.bind(n[t], n);
                }), n;
            }, A.memoize = function(n, t) {
                var r = {};
                return t || (t = A.identity), function() {
                    var e = t.apply(this, arguments);
                    return A.has(r, e) ? r[e] :r[e] = n.apply(this, arguments);
                };
            }, A.delay = function(n, t) {
                var r = c.call(arguments, 2);
                return setTimeout(function() {
                    return n.apply(null, r);
                }, t);
            }, A.defer = function(n) {
                return A.delay.apply(A, [ n, 1 ].concat(c.call(arguments, 1)));
            }, A.throttle = function(n, t, r) {
                var e, u, i, a = null, o = 0;
                r || (r = {});
                var c = function() {
                    o = r.leading === !1 ? 0 :new Date(), a = null, i = n.apply(e, u);
                };
                return function() {
                    var l = new Date();
                    o || r.leading !== !1 || (o = l);
                    var f = t - (l - o);
                    return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) :a || r.trailing === !1 || (a = setTimeout(c, f)), 
                    i;
                };
            }, A.debounce = function(n, t, r) {
                var e, u, i, a, o;
                return function() {
                    i = this, u = arguments, a = new Date();
                    var c = function() {
                        var l = new Date() - a;
                        t > l ? e = setTimeout(c, t - l) :(e = null, r || (o = n.apply(i, u)));
                    }, l = r && !e;
                    return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o;
                };
            }, A.once = function(n) {
                var t = !1, r;
                return function() {
                    return t ? r :(t = !0, r = n.apply(this, arguments), n = null, r);
                };
            }, A.wrap = function(n, t) {
                return function() {
                    var r = [ n ];
                    return o.apply(r, arguments), t.apply(this, r);
                };
            }, A.compose = function() {
                var n = arguments;
                return function() {
                    for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [ n[r].apply(this, t) ];
                    return t[0];
                };
            }, A.after = function(n, t) {
                return function() {
                    return --n < 1 ? t.apply(this, arguments) :void 0;
                };
            }, A.keys = x || function(n) {
                if (n !== Object(n)) throw new TypeError("Invalid object");
                var t = [];
                for (var r in n) A.has(n, r) && t.push(r);
                return t;
            }, A.values = function(n) {
                for (var t = A.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
                return e;
            }, A.pairs = function(n) {
                for (var t = A.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [ t[u], n[t[u]] ];
                return e;
            }, A.invert = function(n) {
                for (var t = {}, r = A.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
                return t;
            }, A.functions = A.methods = function(n) {
                var t = [];
                for (var r in n) A.isFunction(n[r]) && t.push(r);
                return t.sort();
            }, A.extend = function(n) {
                return E(c.call(arguments, 1), function(t) {
                    if (t) for (var r in t) n[r] = t[r];
                }), n;
            }, A.pick = function(n) {
                var t = {}, r = l.apply(u, c.call(arguments, 1));
                return E(r, function(r) {
                    r in n && (t[r] = n[r]);
                }), t;
            }, A.omit = function(n) {
                var t = {}, r = l.apply(u, c.call(arguments, 1));
                for (var e in n) A.contains(r, e) || (t[e] = n[e]);
                return t;
            }, A.defaults = function(n) {
                return E(c.call(arguments, 1), function(t) {
                    if (t) for (var r in t) void 0 === n[r] && (n[r] = t[r]);
                }), n;
            }, A.clone = function(n) {
                return A.isObject(n) ? A.isArray(n) ? n.slice() :A.extend({}, n) :n;
            }, A.tap = function(n, t) {
                return t(n), n;
            };
            var N = function(n, t, r, e) {
                if (n === t) return 0 !== n || 1 / n == 1 / t;
                if (null == n || null == t) return n === t;
                n instanceof A && (n = n._wrapped), t instanceof A && (t = t._wrapped);
                var u = f.call(n);
                if (u != f.call(t)) return !1;
                switch (u) {
                  case "[object String]":
                    return n == String(t);

                  case "[object Number]":
                    return n != +n ? t != +t :0 == n ? 1 / n == 1 / t :n == +t;

                  case "[object Date]":
                  case "[object Boolean]":
                    return +n == +t;

                  case "[object RegExp]":
                    return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase;
                }
                if ("object" != typeof n || "object" != typeof t) return !1;
                for (var i = r.length; i--; ) if (r[i] == n) return e[i] == t;
                var a = n.constructor, o = t.constructor;
                if (a !== o && !(A.isFunction(a) && a instanceof a && A.isFunction(o) && o instanceof o)) return !1;
                r.push(n), e.push(t);
                var c = 0, l = !0;
                if ("[object Array]" == u) {
                    if (c = n.length, l = c == t.length) for (;c-- && (l = N(n[c], t[c], r, e)); ) ;
                } else {
                    for (var s in n) if (A.has(n, s) && (c++, !(l = A.has(t, s) && N(n[s], t[s], r, e)))) break;
                    if (l) {
                        for (s in t) if (A.has(t, s) && !c--) break;
                        l = !c;
                    }
                }
                return r.pop(), e.pop(), l;
            };
            A.isEqual = function(n, t) {
                return N(n, t, [], []);
            }, A.isEmpty = function(n) {
                if (null == n) return !0;
                if (A.isArray(n) || A.isString(n)) return 0 === n.length;
                for (var t in n) if (A.has(n, t)) return !1;
                return !0;
            }, A.isElement = function(n) {
                return !(!n || 1 !== n.nodeType);
            }, A.isArray = w || function(n) {
                return "[object Array]" == f.call(n);
            }, A.isObject = function(n) {
                return n === Object(n);
            }, E([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(n) {
                A["is" + n] = function(t) {
                    return f.call(t) == "[object " + n + "]";
                };
            }), A.isArguments(arguments) || (A.isArguments = function(n) {
                return !(!n || !A.has(n, "callee"));
            }), "function" != typeof /./ && (A.isFunction = function(n) {
                return "function" == typeof n;
            }), A.isFinite = function(n) {
                return isFinite(n) && !isNaN(parseFloat(n));
            }, A.isNaN = function(n) {
                return A.isNumber(n) && n != +n;
            }, A.isBoolean = function(n) {
                return n === !0 || n === !1 || "[object Boolean]" == f.call(n);
            }, A.isNull = function(n) {
                return null === n;
            }, A.isUndefined = function(n) {
                return void 0 === n;
            }, A.has = function(n, t) {
                return s.call(n, t);
            }, A.noConflict = function() {
                return t._ = r, this;
            }, A.identity = function(n) {
                return n;
            }, A.times = function(n, t, r) {
                for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
                return e;
            }, A.random = function(n, t) {
                return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
            };
            var q = {
                escape:{
                    "&":"&amp;",
                    "<":"&lt;",
                    ">":"&gt;",
                    '"':"&quot;",
                    "'":"&#x27;"
                }
            };
            q.unescape = A.invert(q.escape);
            var B = {
                escape:new RegExp("[" + A.keys(q.escape).join("") + "]", "g"),
                unescape:new RegExp("(" + A.keys(q.unescape).join("|") + ")", "g")
            };
            A.each([ "escape", "unescape" ], function(n) {
                A[n] = function(t) {
                    return null == t ? "" :("" + t).replace(B[n], function(t) {
                        return q[n][t];
                    });
                };
            }), A.result = function(n, t) {
                if (null == n) return void 0;
                var r = n[t];
                return A.isFunction(r) ? r.call(n) :r;
            }, A.mixin = function(n) {
                E(A.functions(n), function(t) {
                    var r = A[t] = n[t];
                    A.prototype[t] = function() {
                        var n = [ this._wrapped ];
                        return o.apply(n, arguments), U.call(this, r.apply(A, n));
                    };
                });
            };
            var D = 0;
            A.uniqueId = function(n) {
                var t = ++D + "";
                return n ? n + t :t;
            }, A.templateSettings = {
                evaluate:/<%([\s\S]+?)%>/g,
                interpolate:/<%=([\s\S]+?)%>/g,
                escape:/<%-([\s\S]+?)%>/g
            };
            var P = /(.)^/, z = {
                "'":"'",
                "\\":"\\",
                "\r":"r",
                "\n":"n",
                "	":"t",
                "\u2028":"u2028",
                "\u2029":"u2029"
            }, C = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            A.template = function(n, t, r) {
                var e;
                r = A.defaults({}, r, A.templateSettings);
                var u = new RegExp([ (r.escape || P).source, (r.interpolate || P).source, (r.evaluate || P).source ].join("|") + "|$", "g"), i = 0, a = "__p+='";
                n.replace(u, function(t, r, e, u, o) {
                    return a += n.slice(i, o).replace(C, function(n) {
                        return "\\" + z[n];
                    }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), 
                    u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t;
                }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                try {
                    e = new Function(r.variable || "obj", "_", a);
                } catch (o) {
                    throw o.source = a, o;
                }
                if (t) return e(t, A);
                var c = function(n) {
                    return e.call(this, n, A);
                };
                return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c;
            }, A.chain = function(n) {
                return A(n).chain();
            };
            var U = function(n) {
                return this._chain ? A(n).chain() :n;
            };
            A.mixin(A), E([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(n) {
                var t = u[n];
                A.prototype[n] = function() {
                    var r = this._wrapped;
                    return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], 
                    U.call(this, r);
                };
            }), E([ "concat", "join", "slice" ], function(n) {
                var t = u[n];
                A.prototype[n] = function() {
                    return U.call(this, t.apply(this._wrapped, arguments));
                };
            }), A.extend(A.prototype, {
                chain:function() {
                    return this._chain = !0, this;
                },
                value:function() {
                    return this._wrapped;
                }
            });
        }).call(this);
    }.call(this), function() {
        t = n._;
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.underscore = {
        _:t
    };
}();

!function() {
    var t = Package.underscore._, e;
    (function() {
        e = {
            isClient:!0,
            isServer:!1,
            isCordova:!1
        }, "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.PUBLIC_SETTINGS && (e.settings = {
            "public":__meteor_runtime_config__.PUBLIC_SETTINGS
        });
    }).call(this), function() {
        function n(t) {
            return t ? e._debug("Exception in callback of async function", t.stack ? t.stack :t) :void 0;
        }
        if (e.isServer) var r = Npm.require("fibers/future");
        "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.meteorRelease && (e.release = __meteor_runtime_config__.meteorRelease), 
        t.extend(e, {
            _get:function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    if (!(arguments[e] in t)) return void 0;
                    t = t[arguments[e]];
                }
                return t;
            },
            _ensure:function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    n in t || (t[n] = {}), t = t[n];
                }
                return t;
            },
            _delete:function(t) {
                for (var e = [ t ], n = !0, r = 1; r < arguments.length - 1; r++) {
                    var o = arguments[r];
                    if (!(o in t)) {
                        n = !1;
                        break;
                    }
                    if (t = t[o], "object" != typeof t) break;
                    e.push(t);
                }
                for (var r = e.length - 1; r >= 0; r--) {
                    var o = arguments[r + 1];
                    if (n) n = !1; else for (var i in e[r][o]) return;
                    delete e[r][o];
                }
            },
            wrapAsync:function(o, i) {
                return function() {
                    for (var a = i || this, s = t.toArray(arguments), u, c = s.length - 1; c >= 0; --c) {
                        var l = s[c], f = typeof l;
                        if ("undefined" !== f) {
                            "function" === f && (u = l);
                            break;
                        }
                    }
                    if (!u) {
                        if (e.isClient) u = n; else {
                            var _ = new r();
                            u = _.resolver();
                        }
                        ++c;
                    }
                    s[c] = e.bindEnvironment(u);
                    var p = o.apply(a, s);
                    return _ ? _.wait() :p;
                };
            },
            _inherits:function(e, n) {
                for (var r in n) t.has(n, r) && (e[r] = n[r]);
                var o = function() {
                    this.constructor = e;
                };
                return o.prototype = n.prototype, e.prototype = new o(), e.__super__ = n.prototype, 
                e;
            }
        });
        var o = !1;
        e._wrapAsync = function(t, n) {
            return o || (e._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync"), 
            o = !0), e.wrapAsync.apply(e, arguments);
        };
    }.call(this), function() {
        "use strict";
        function t() {
            if (o.setImmediate) {
                var t = function(t) {
                    o.setImmediate(t);
                };
                return t.implementation = "setImmediate", t;
            }
            return null;
        }
        function n() {
            function t(t, e) {
                return "string" == typeof t && t.substring(0, e.length) === e;
            }
            function e(e) {
                if (e.source === o && t(e.data, s)) {
                    var n = e.data.substring(s.length);
                    try {
                        a[n] && a[n]();
                    } finally {
                        delete a[n];
                    }
                }
            }
            if (!o.postMessage || o.importScripts) return null;
            var n = !0, r = o.onmessage;
            if (o.onmessage = function() {
                n = !1;
            }, o.postMessage("", "*"), o.onmessage = r, !n) return null;
            var i = 0, a = {}, s = "Meteor._setImmediate." + Math.random() + ".";
            o.addEventListener ? o.addEventListener("message", e, !1) :o.attachEvent("onmessage", e);
            var u = function(t) {
                ++i, a[i] = t, o.postMessage(s + i, "*");
            };
            return u.implementation = "postMessage", u;
        }
        function r() {
            var t = function(t) {
                o.setTimeout(t, 0);
            };
            return t.implementation = "setTimeout", t;
        }
        var o = this;
        e._setImmediate = t() || n() || r();
    }.call(this), function() {
        var n = function(t) {
            if (Package.ddp) {
                var e = Package.ddp.DDP._CurrentInvocation;
                if (e.get() && e.get().isSimulation) throw new Error("Can't set timers inside simulations");
                return function() {
                    e.withValue(null, t);
                };
            }
            return t;
        }, r = function(t, r) {
            return e.bindEnvironment(n(r), t);
        };
        t.extend(e, {
            setTimeout:function(t, e) {
                return setTimeout(r("setTimeout callback", t), e);
            },
            setInterval:function(t, e) {
                return setInterval(r("setInterval callback", t), e);
            },
            clearInterval:function(t) {
                return clearInterval(t);
            },
            clearTimeout:function(t) {
                return clearTimeout(t);
            },
            defer:function(t) {
                e._setImmediate(r("defer callback", t));
            }
        });
    }.call(this), function() {
        e.makeErrorType = function(t, n) {
            var r = function() {
                var e = this;
                if (Error.captureStackTrace) Error.captureStackTrace(e, r); else {
                    var o = new Error();
                    o.__proto__ = r.prototype, o instanceof r && (e = o);
                }
                return n.apply(e, arguments), e.errorType = t, e;
            };
            return e._inherits(r, Error), r;
        }, e.Error = e.makeErrorType("Meteor.Error", function(t, e, n) {
            var r = this;
            r.error = t, r.reason = e, r.details = n, r.reason ? r.message = r.reason + " [" + r.error + "]" :r.message = "[" + r.error + "]";
        }), e.Error.prototype.clone = function() {
            var t = this;
            return new e.Error(t.error, t.reason, t.details);
        };
    }.call(this), function() {
        e._noYieldsAllowed = function(t) {
            return t();
        }, e._SynchronousQueue = function() {
            var t = this;
            t._tasks = [], t._running = !1, t._runTimeout = null;
        }, t.extend(e._SynchronousQueue.prototype, {
            runTask:function(n) {
                var r = this;
                if (!r.safeToRunTask()) throw new Error("Could not synchronously run a task from a running task");
                r._tasks.push(n);
                var o = r._tasks;
                r._tasks = [], r._running = !0, r._runTimeout && (clearTimeout(r._runTimeout), r._runTimeout = null);
                try {
                    for (;!t.isEmpty(o); ) {
                        var i = o.shift();
                        try {
                            i();
                        } catch (a) {
                            if (t.isEmpty(o)) throw a;
                            e._debug("Exception in queued task: " + (a.stack || a));
                        }
                    }
                } finally {
                    r._running = !1;
                }
            },
            queueTask:function(e) {
                var n = this;
                n._tasks.push(e), n._runTimeout || (n._runTimeout = setTimeout(t.bind(n.flush, n), 0));
            },
            flush:function() {
                var t = this;
                t.runTask(function() {});
            },
            drain:function() {
                var e = this;
                if (e.safeToRunTask()) for (;!t.isEmpty(e._tasks); ) e.flush();
            },
            safeToRunTask:function() {
                var t = this;
                return !t._running;
            }
        });
    }.call(this), function() {
        var t = [], n = !e.isCordova && ("loaded" === document.readyState || "complete" == document.readyState), r = 1, o = function() {
            if (r--, !(r > 0)) {
                n = !0;
                var o = function() {
                    if (e.isCordova && (!cordova.plugins || !cordova.plugins.CordovaUpdate)) return void e.setTimeout(o, 20);
                    for (;t.length; ) t.shift()();
                };
                o();
            }
        };
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", o, !1), 
        e.isCordova && (r++, document.addEventListener("deviceready", o, !1)), window.addEventListener("load", o, !1)) :(document.attachEvent("onreadystatechange", function() {
            "complete" === document.readyState && o();
        }), window.attachEvent("load", o)), e.startup = function(r) {
            var o = !document.addEventListener && document.documentElement.doScroll;
            if (o && window === top) {
                try {
                    o("left");
                } catch (i) {
                    return void setTimeout(function() {
                        e.startup(r);
                    }, 50);
                }
                r();
            } else n ? r() :t.push(r);
        };
    }.call(this), function() {
        var t = 0;
        e._debug = function() {
            if (t) return void t--;
            if ("undefined" != typeof console && "undefined" != typeof console.log) if (0 == arguments.length) console.log(""); else if ("function" == typeof console.log.apply) {
                for (var e = !0, n = 0; n < arguments.length; n++) "string" != typeof arguments[n] && (e = !1);
                e ? console.log.apply(console, [ Array.prototype.join.call(arguments, " ") ]) :console.log.apply(console, arguments);
            } else if ("function" == typeof Function.prototype.bind) {
                var r = Function.prototype.bind.call(console.log, console);
                r.apply(console, arguments);
            } else Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
        }, e._suppress_log = function(e) {
            t += e;
        }, e._suppressed_log_expected = function() {
            return 0 !== t;
        };
    }.call(this), function() {
        e._escapeRegExp = function(t) {
            return String(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        };
    }.call(this), function() {
        var n = 0, r = [];
        e.EnvironmentVariable = function() {
            this.slot = n++;
        }, t.extend(e.EnvironmentVariable.prototype, {
            get:function() {
                return r[this.slot];
            },
            getOrNullIfOutsideFiber:function() {
                return this.get();
            },
            withValue:function(t, e) {
                var n = r[this.slot];
                try {
                    r[this.slot] = t;
                    var o = e();
                } finally {
                    r[this.slot] = n;
                }
                return o;
            }
        }), e.bindEnvironment = function(n, o, i) {
            var a = t.clone(r);
            if (!o || "string" == typeof o) {
                var s = o || "callback of async function";
                o = function(t) {
                    e._debug("Exception in " + s + ":", t && t.stack || t);
                };
            }
            return function() {
                var e = r;
                try {
                    r = a;
                    var s = n.apply(i, t.toArray(arguments));
                } catch (u) {
                    o(u);
                } finally {
                    r = e;
                }
                return s;
            };
        }, e._nodeCodeMustBeInFiber = function() {};
    }.call(this), function() {
        e.absoluteUrl = function(n, r) {
            r || "object" != typeof n || (r = n, n = void 0), r = t.extend({}, e.absoluteUrl.defaultOptions, r || {});
            var o = r.rootUrl;
            if (!o) throw new Error("Must pass options.rootUrl or set ROOT_URL in the server environment");
            return /^http[s]?:\/\//i.test(o) || (o = "http://" + o), /\/$/.test(o) || (o += "/"), 
            n && (o += n), r.secure && /^http:/.test(o) && !/http:\/\/localhost[:\/]/.test(o) && !/http:\/\/127\.0\.0\.1[:\/]/.test(o) && (o = o.replace(/^http:/, "https:")), 
            r.replaceLocalhost && (o = o.replace(/^http:\/\/localhost([:\/].*)/, "http://127.0.0.1$1")), 
            o;
        }, e.absoluteUrl.defaultOptions = {}, "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.ROOT_URL && (e.absoluteUrl.defaultOptions.rootUrl = __meteor_runtime_config__.ROOT_URL), 
        e._relativeToSiteRootUrl = function(t) {
            return "object" == typeof __meteor_runtime_config__ && "/" === t.substr(0, 1) && (t = (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || "") + t), 
            t;
        };
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.meteor = {
        Meteor:e
    };
}();

!function() {
    var e = Package.meteor.Meteor;
    "undefined" == typeof Package && (Package = {}), Package["meteor-base"] = {};
}();

!function() {
    var e = Package.meteor.Meteor;
    "undefined" == typeof Package && (Package = {}), Package["mobile-experience"] = {};
}();

!function() {
    var n = Package.meteor.Meteor, r;
    (function() {
        for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = {}, a = 0; a < n.length; a++) e[n.charAt(a)] = a;
        r = {}, r.encode = function(n) {
            if ("string" == typeof n) {
                var e = n;
                n = r.newBinary(e.length);
                for (var a = 0; a < e.length; a++) {
                    var l = e.charCodeAt(a);
                    if (l > 255) throw new Error("Not ascii. Base64.encode can only take ascii strings.");
                    n[a] = l;
                }
            }
            for (var u = [], i = null, o = null, c = null, s = null, a = 0; a < n.length; a++) switch (a % 3) {
              case 0:
                i = n[a] >> 2 & 63, o = (3 & n[a]) << 4;
                break;

              case 1:
                o |= n[a] >> 4 & 15, c = (15 & n[a]) << 2;
                break;

              case 2:
                c |= n[a] >> 6 & 3, s = 63 & n[a], u.push(t(i)), u.push(t(o)), u.push(t(c)), u.push(t(s)), 
                i = null, o = null, c = null, s = null;
            }
            return null != i && (u.push(t(i)), u.push(t(o)), u.push(null == c ? "=" :t(c)), 
            null == s && u.push("=")), u.join("");
        };
        var t = function(r) {
            return n.charAt(r);
        }, l = function(n) {
            return "=" === n ? -1 :e[n];
        };
        r.newBinary = function(n) {
            if ("undefined" == typeof Uint8Array || "undefined" == typeof ArrayBuffer) {
                for (var r = [], e = 0; n > e; e++) r.push(0);
                return r.$Uint8ArrayPolyfill = !0, r;
            }
            return new Uint8Array(new ArrayBuffer(n));
        }, r.decode = function(n) {
            var e = Math.floor(3 * n.length / 4);
            "=" == n.charAt(n.length - 1) && (e--, "=" == n.charAt(n.length - 2) && e--);
            for (var a = r.newBinary(e), t = null, u = null, i = null, o = 0, c = 0; c < n.length; c++) {
                var s = n.charAt(c), f = l(s);
                switch (c % 4) {
                  case 0:
                    if (0 > f) throw new Error("invalid base64 string");
                    t = f << 2;
                    break;

                  case 1:
                    if (0 > f) throw new Error("invalid base64 string");
                    t |= f >> 4, a[o++] = t, u = (15 & f) << 4;
                    break;

                  case 2:
                    f >= 0 && (u |= f >> 2, a[o++] = u, i = (3 & f) << 6);
                    break;

                  case 3:
                    f >= 0 && (a[o++] = i | f);
                }
            }
            return a;
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.base64 = {
        Base64:r
    };
}();

!function() {
    var n = Package.meteor.Meteor, e = Package.underscore._, t = Package.base64.Base64, r, u;
    (function() {
        r = {}, u = {};
        var a = {};
        r.addType = function(n, t) {
            if (e.has(a, n)) throw new Error("Type " + n + " already present");
            a[n] = t;
        };
        var i = function(n) {
            return e.isNaN(n) || n === 1 / 0 || n === -(1 / 0);
        }, o = [ {
            matchJSONValue:function(n) {
                return e.has(n, "$date") && 1 === e.size(n);
            },
            matchObject:function(n) {
                return n instanceof Date;
            },
            toJSONValue:function(n) {
                return {
                    $date:n.getTime()
                };
            },
            fromJSONValue:function(n) {
                return new Date(n.$date);
            }
        }, {
            matchJSONValue:function(n) {
                return e.has(n, "$InfNaN") && 1 === e.size(n);
            },
            matchObject:i,
            toJSONValue:function(n) {
                var t;
                return t = e.isNaN(n) ? 0 :n === 1 / 0 ? 1 :-1, {
                    $InfNaN:t
                };
            },
            fromJSONValue:function(n) {
                return n.$InfNaN / 0;
            }
        }, {
            matchJSONValue:function(n) {
                return e.has(n, "$binary") && 1 === e.size(n);
            },
            matchObject:function(n) {
                return "undefined" != typeof Uint8Array && n instanceof Uint8Array || n && e.has(n, "$Uint8ArrayPolyfill");
            },
            toJSONValue:function(n) {
                return {
                    $binary:t.encode(n)
                };
            },
            fromJSONValue:function(n) {
                return t.decode(n.$binary);
            }
        }, {
            matchJSONValue:function(n) {
                return e.has(n, "$escape") && 1 === e.size(n);
            },
            matchObject:function(n) {
                return e.isEmpty(n) || e.size(n) > 2 ? !1 :e.any(o, function(e) {
                    return e.matchJSONValue(n);
                });
            },
            toJSONValue:function(n) {
                var t = {};
                return e.each(n, function(n, e) {
                    t[e] = r.toJSONValue(n);
                }), {
                    $escape:t
                };
            },
            fromJSONValue:function(n) {
                var t = {};
                return e.each(n.$escape, function(n, e) {
                    t[e] = r.fromJSONValue(n);
                }), t;
            }
        }, {
            matchJSONValue:function(n) {
                return e.has(n, "$type") && e.has(n, "$value") && 2 === e.size(n);
            },
            matchObject:function(n) {
                return r._isCustomType(n);
            },
            toJSONValue:function(e) {
                var t = n._noYieldsAllowed(function() {
                    return e.toJSONValue();
                });
                return {
                    $type:e.typeName(),
                    $value:t
                };
            },
            fromJSONValue:function(t) {
                var r = t.$type;
                if (!e.has(a, r)) throw new Error("Custom EJSON type " + r + " is not defined");
                var u = a[r];
                return n._noYieldsAllowed(function() {
                    return u(t.$value);
                });
            }
        } ];
        r._isCustomType = function(n) {
            return n && "function" == typeof n.toJSONValue && "function" == typeof n.typeName && e.has(a, n.typeName());
        }, r._getTypes = function() {
            return a;
        }, r._getConverters = function() {
            return o;
        };
        var f = r._adjustTypesToJSONValue = function(n) {
            if (null === n) return null;
            var t = c(n);
            return void 0 !== t ? t :"object" != typeof n ? n :(e.each(n, function(e, t) {
                if ("object" == typeof e || void 0 === e || i(e)) {
                    var r = c(e);
                    return r ? void (n[t] = r) :void f(e);
                }
            }), n);
        }, c = function(n) {
            for (var e = 0; e < o.length; e++) {
                var t = o[e];
                if (t.matchObject(n)) return t.toJSONValue(n);
            }
            return void 0;
        };
        r.toJSONValue = function(n) {
            var e = c(n);
            return void 0 !== e ? e :("object" == typeof n && (n = r.clone(n), f(n)), n);
        };
        var l = r._adjustTypesFromJSONValue = function(n) {
            if (null === n) return null;
            var t = s(n);
            return t !== n ? t :"object" != typeof n ? n :(e.each(n, function(e, t) {
                if ("object" == typeof e) {
                    var r = s(e);
                    if (e !== r) return void (n[t] = r);
                    l(e);
                }
            }), n);
        }, s = function(n) {
            if ("object" == typeof n && null !== n && e.size(n) <= 2 && e.all(n, function(n, e) {
                return "string" == typeof e && "$" === e.substr(0, 1);
            })) for (var t = 0; t < o.length; t++) {
                var r = o[t];
                if (r.matchJSONValue(n)) return r.fromJSONValue(n);
            }
            return n;
        };
        r.fromJSONValue = function(n) {
            var e = s(n);
            return e === n && "object" == typeof n ? (n = r.clone(n), l(n), n) :e;
        }, r.stringify = function(n, e) {
            var t = r.toJSONValue(n);
            return e && (e.canonical || e.indent) ? r._canonicalStringify(t, e) :JSON.stringify(t);
        }, r.parse = function(n) {
            if ("string" != typeof n) throw new Error("EJSON.parse argument should be a string");
            return r.fromJSONValue(JSON.parse(n));
        }, r.isBinary = function(n) {
            return !!("undefined" != typeof Uint8Array && n instanceof Uint8Array || n && n.$Uint8ArrayPolyfill);
        }, r.equals = function(n, t, u) {
            var a, i = !(!u || !u.keyOrderSensitive);
            if (n === t) return !0;
            if (e.isNaN(n) && e.isNaN(t)) return !0;
            if (!n || !t) return !1;
            if ("object" != typeof n || "object" != typeof t) return !1;
            if (n instanceof Date && t instanceof Date) return n.valueOf() === t.valueOf();
            if (r.isBinary(n) && r.isBinary(t)) {
                if (n.length !== t.length) return !1;
                for (a = 0; a < n.length; a++) if (n[a] !== t[a]) return !1;
                return !0;
            }
            if ("function" == typeof n.equals) return n.equals(t, u);
            if ("function" == typeof t.equals) return t.equals(n, u);
            if (n instanceof Array) {
                if (!(t instanceof Array)) return !1;
                if (n.length !== t.length) return !1;
                for (a = 0; a < n.length; a++) if (!r.equals(n[a], t[a], u)) return !1;
                return !0;
            }
            switch (r._isCustomType(n) + r._isCustomType(t)) {
              case 1:
                return !1;

              case 2:
                return r.equals(r.toJSONValue(n), r.toJSONValue(t));
            }
            var o;
            if (i) {
                var f = [];
                return e.each(t, function(n, e) {
                    f.push(e);
                }), a = 0, o = e.all(n, function(n, e) {
                    return a >= f.length ? !1 :e !== f[a] ? !1 :r.equals(n, t[f[a]], u) ? (a++, !0) :!1;
                }), o && a === f.length;
            }
            return a = 0, o = e.all(n, function(n, i) {
                return e.has(t, i) && r.equals(n, t[i], u) ? (a++, !0) :!1;
            }), o && e.size(t) === a;
        }, r.clone = function(n) {
            var t;
            if ("object" != typeof n) return n;
            if (null === n) return null;
            if (n instanceof Date) return new Date(n.getTime());
            if (n instanceof RegExp) return n;
            if (r.isBinary(n)) {
                t = r.newBinary(n.length);
                for (var u = 0; u < n.length; u++) t[u] = n[u];
                return t;
            }
            if (e.isArray(n) || e.isArguments(n)) {
                for (t = [], u = 0; u < n.length; u++) t[u] = r.clone(n[u]);
                return t;
            }
            return "function" == typeof n.clone ? n.clone() :r._isCustomType(n) ? r.fromJSONValue(r.clone(r.toJSONValue(n)), !0) :(t = {}, 
            e.each(n, function(n, e) {
                t[e] = r.clone(n);
            }), t);
        }, r.newBinary = t.newBinary;
    }).call(this), function() {
        function n(n) {
            return JSON.stringify(n);
        }
        var t = function(r, u, a, i, o) {
            var f, c, l, s, y = i, h, N = u[r];
            switch (typeof N) {
              case "string":
                return n(N);

              case "number":
                return isFinite(N) ? String(N) :"null";

              case "boolean":
                return String(N);

              case "object":
                if (!N) return "null";
                if (y = i + a, h = [], e.isArray(N) || e.isArguments(N)) {
                    for (s = N.length, f = 0; s > f; f += 1) h[f] = t(f, N, a, y, o) || "null";
                    return l = 0 === h.length ? "[]" :y ? "[\n" + y + h.join(",\n" + y) + "\n" + i + "]" :"[" + h.join(",") + "]";
                }
                var p = e.keys(N);
                return o && (p = p.sort()), e.each(p, function(e) {
                    l = t(e, N, a, y, o), l && h.push(n(e) + (y ? ": " :":") + l);
                }), l = 0 === h.length ? "{}" :y ? "{\n" + y + h.join(",\n" + y) + "\n" + i + "}" :"{" + h.join(",") + "}";
            }
        };
        r._canonicalStringify = function(n, r) {
            if (r = e.extend({
                indent:"",
                canonical:!1
            }, r), r.indent === !0) r.indent = "  "; else if ("number" == typeof r.indent) {
                for (var u = "", a = 0; a < r.indent; a++) u += " ";
                r.indent = u;
            }
            return t("", {
                "":n
            }, r.indent, "", r.canonical);
        };
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.ejson = {
        EJSON:r,
        EJSONTest:u
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.underscore._, n = Package.ejson.EJSON, r, a;
    (function() {
        var i = new e.EnvironmentVariable();
        r = function(e, t) {
            var n = i.getOrNullIfOutsideFiber();
            n && n.checking(e);
            var r = p(e, t);
            if (r) {
                var o = new a.Error(r.message);
                throw r.path && (o.message += " in field " + r.path, o.path = r.path), o;
            }
        }, a = {
            Optional:function(e) {
                return new o(e);
            },
            OneOf:function() {
                return new s(t.toArray(arguments));
            },
            Any:[ "__any__" ],
            Where:function(e) {
                return new c(e);
            },
            ObjectIncluding:function(e) {
                return new f(e);
            },
            ObjectWithValues:function(e) {
                return new u(e);
            },
            Integer:[ "__integer__" ],
            Error:e.makeErrorType("Match.Error", function(t) {
                this.message = "Match error: " + t, this.path = "", this.sanitizedError = new e.Error(400, "Match failed");
            }),
            test:function(e, t) {
                return !p(e, t);
            },
            _failIfArgumentsAreNotAllChecked:function(e, t, n, r) {
                var a = new g(n, r), o = i.withValue(a, function() {
                    return e.apply(t, n);
                });
                return a.throwUnlessAllArgumentsHaveBeenChecked(), o;
            }
        };
        var o = function(e) {
            this.pattern = e;
        }, s = function(e) {
            if (t.isEmpty(e)) throw new Error("Must provide at least one choice to Match.OneOf");
            this.choices = e;
        }, c = function(e) {
            this.condition = e;
        }, f = function(e) {
            this.pattern = e;
        }, u = function(e) {
            this.pattern = e;
        }, h = [ [ String, "string" ], [ Number, "number" ], [ Boolean, "boolean" ], [ void 0, "undefined" ] ], p = function(e, r) {
            if (r === a.Any) return !1;
            for (var i = 0; i < h.length; ++i) if (r === h[i][0]) return typeof e === h[i][1] ? !1 :{
                message:"Expected " + h[i][1] + ", got " + typeof e,
                path:""
            };
            if (null === r) return null === e ? !1 :{
                message:"Expected null, got " + n.stringify(e),
                path:""
            };
            if ("string" == typeof r || "number" == typeof r || "boolean" == typeof r) return e === r ? !1 :{
                message:"Expected " + r + ", got " + n.stringify(e),
                path:""
            };
            if (r === a.Integer) return "number" == typeof e && (0 | e) === e ? !1 :{
                message:"Expected Integer, got " + (e instanceof Object ? n.stringify(e) :e),
                path:""
            };
            if (r === Object && (r = a.ObjectIncluding({})), r instanceof Array) {
                if (1 !== r.length) return {
                    message:"Bad pattern: arrays must have one type element" + n.stringify(r),
                    path:""
                };
                if (!t.isArray(e) && !t.isArguments(e)) return {
                    message:"Expected array, got " + n.stringify(e),
                    path:""
                };
                for (var i = 0, g = e.length; g > i; i++) {
                    var l = p(e[i], r[0]);
                    if (l) return l.path = d(i, l.path), l;
                }
                return !1;
            }
            if (r instanceof c) {
                var l;
                try {
                    l = r.condition(e);
                } catch (m) {
                    if (!(m instanceof a.Error)) throw m;
                    return {
                        message:m.message,
                        path:m.path
                    };
                }
                return r.condition(e) ? !1 :{
                    message:"Failed Match.Where validation",
                    path:""
                };
            }
            if (r instanceof o && (r = a.OneOf(void 0, r.pattern)), r instanceof s) {
                for (var i = 0; i < r.choices.length; ++i) {
                    var l = p(e, r.choices[i]);
                    if (!l) return !1;
                }
                return {
                    message:"Failed Match.OneOf or Match.Optional validation",
                    path:""
                };
            }
            if (r instanceof Function) return e instanceof r ? !1 :{
                message:"Expected " + (r.name || "particular constructor"),
                path:""
            };
            var y = !1, v;
            if (r instanceof f && (y = !0, r = r.pattern), r instanceof u && (y = !0, v = [ r.pattern ], 
            r = {}), "object" != typeof r) return {
                message:"Bad pattern: unknown pattern type",
                path:""
            };
            if ("object" != typeof e) return {
                message:"Expected object, got " + typeof e,
                path:""
            };
            if (null === e) return {
                message:"Expected object, got null",
                path:""
            };
            if (e.constructor !== Object) return {
                message:"Expected plain object",
                path:""
            };
            var k = {}, w = {};
            t.each(r, function(e, t) {
                e instanceof o ? w[t] = e.pattern :k[t] = e;
            });
            for (var b = t.keys(e), i = 0, g = b.length; g > i; i++) {
                var O = b[i], E = e[O];
                if (t.has(k, O)) {
                    var l = p(E, k[O]);
                    if (l) return l.path = d(O, l.path), l;
                    delete k[O];
                } else if (t.has(w, O)) {
                    var l = p(E, w[O]);
                    if (l) return l.path = d(O, l.path), l;
                } else {
                    if (!y) return {
                        message:"Unknown key",
                        path:O
                    };
                    if (v) {
                        var l = p(E, v[0]);
                        if (l) return l.path = d(O, l.path), l;
                    }
                }
            }
            var b = t.keys(k);
            return b.length ? {
                message:"Missing key '" + b[0] + "'",
                path:""
            } :void 0;
        }, g = function(e, n) {
            var r = this;
            r.args = t.clone(e), r.args.reverse(), r.description = n;
        };
        t.extend(g.prototype, {
            checking:function(e) {
                var n = this;
                n._checkingOneValue(e) || (t.isArray(e) || t.isArguments(e)) && t.each(e, t.bind(n._checkingOneValue, n));
            },
            _checkingOneValue:function(e) {
                for (var n = this, r = 0; r < n.args.length; ++r) if (e === n.args[r] || t.isNaN(e) && t.isNaN(n.args[r])) return n.args.splice(r, 1), 
                !0;
                return !1;
            },
            throwUnlessAllArgumentsHaveBeenChecked:function() {
                var e = this;
                if (!t.isEmpty(e.args)) throw new Error("Did not check() all arguments during " + e.description);
            }
        });
        var l = [ "do", "if", "in", "for", "let", "new", "try", "var", "case", "else", "enum", "eval", "false", "null", "this", "true", "void", "with", "break", "catch", "class", "const", "super", "throw", "while", "yield", "delete", "export", "import", "public", "return", "static", "switch", "typeof", "default", "extends", "finally", "package", "private", "continue", "debugger", "function", "arguments", "interface", "protected", "implements", "instanceof" ], d = function(e, n) {
            return "number" == typeof e || e.match(/^[0-9]+$/) ? e = "[" + e + "]" :(!e.match(/^[a-z_$][0-9a-z_$]*$/i) || t.contains(l, e)) && (e = JSON.stringify([ e ])), 
            n && "[" !== n[0] ? e + "." + n :e + n;
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.check = {
        check:r,
        Match:a
    };
}();

!function() {
    var e = Package.meteor.Meteor, a = Package.check.check, c = Package.check.Match;
    "undefined" == typeof Package && (Package = {}), Package["babel-compiler"] = {};
}();

!function() {
    var e = Package.meteor.Meteor, a;
    "undefined" == typeof Package && (Package = {}), Package.ecmascript = {
        ECMAScript:a
    };
}();

!function() {
    var t = Package.meteor.Meteor, r;
    (function() {
        function t() {
            var t = {}, r = "t";
            try {
                Object.defineProperty(t, r, {
                    enumerable:!1,
                    value:t
                });
                for (var e in t) if (e === r) return !1;
            } catch (n) {
                return !1;
            }
            return t[r] === t;
        }
        var e = Object.prototype.hasOwnProperty;
        r = {
            sanitizeForInObject:t() ? function(t) {
                return t;
            } :function(t) {
                if (Array.isArray(t)) {
                    for (var r = {}, e = Object.keys(t), n = e.length, o = 0; n > o; ++o) {
                        var a = e[o];
                        r[a] = t[a];
                    }
                    return r;
                }
                return t;
            },
            taggedTemplateLiteralLoose:function(t, r) {
                return t.raw = r, t;
            },
            classCallCheck:function(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
            },
            inherits:function(t, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
                if (r) {
                    if (Object.create) t.prototype = Object.create(r.prototype, {
                        constructor:{
                            value:t,
                            enumerable:!1,
                            writable:!0,
                            configurable:!0
                        }
                    }); else {
                        var n = function() {
                            this.constructor = t;
                        };
                        n.prototype = r.prototype, t.prototype = new n();
                    }
                    for (var o in r) e.call(r, o) && (t[o] = r[o]);
                }
            },
            createClass:function() {
                function t(t, r) {
                    for (var e = 0; e < r.length; e++) {
                        var n = r[e];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(t, n.key, n);
                    }
                }
                var r = !1;
                try {
                    Object.defineProperty({}, "x", {}), r = !0;
                } catch (e) {}
                return function(e, n, o) {
                    if (!r) throw new Error("Your browser does not support this type of class property.  For example, Internet Explorer 8 does not support getters and setters.");
                    return n && t(e.prototype, n), o && t(e, o), e;
                };
            }(),
            _extends:Object.assign || function(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var o in n) e.call(n, o) && (t[o] = n[o]);
                }
                return t;
            },
            objectWithoutProperties:function(t, r) {
                var n = {};
                t:for (var o in t) if (e.call(t, o)) {
                    for (var a = 0; a < r.length; a++) if (r[a] === o) continue t;
                    n[o] = t[o];
                }
                return n;
            },
            objectDestructuringEmpty:function(t) {
                if (null == t) throw new TypeError("Cannot destructure undefined");
            },
            bind:Function.prototype.bind || function() {
                var t = function(t) {
                    return "function" == typeof t;
                }, r = Object, e = Object.prototype.toString, n = Array.prototype.slice, o = Array.prototype.concat, a = Array.prototype.push, i = Math.max, c = function u() {};
                return function p(e) {
                    var u = this;
                    if (!t(u)) throw new TypeError("Function.prototype.bind called on incompatible " + u);
                    for (var p = n.call(arguments, 1), l, f = function() {
                        if (this instanceof l) {
                            var t = u.apply(this, o.call(p, n.call(arguments)));
                            return r(t) === t ? t :this;
                        }
                        return u.apply(e, o.call(p, n.call(arguments)));
                    }, s = i(0, u.length - p.length), y = [], b = 0; s > b; b++) a.call(y, "$" + b);
                    return l = Function("binder", "return function (" + y.join(",") + "){ return binder.apply(this, arguments); }")(f), 
                    u.prototype && (c.prototype = u.prototype, l.prototype = new c(), c.prototype = null), 
                    l;
                };
            }(),
            slice:Array.prototype.slice
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["babel-runtime"] = {
        babelHelpers:r
    };
}();

!function() {
    var t = Package.meteor.Meteor, n, r, e, o, i;
    !function(t) {
        function n(e) {
            if (r[e]) return r[e].exports;
            var o = r[e] = {
                exports:{},
                id:e,
                loaded:!1
            };
            return t[e].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports;
        }
        var r = {};
        return n.m = t, n.c = r, n.p = "", n(0);
    }([ function(t, o, i) {
        i(1), i(50), i(77), i(96), n = o.Symbol = i(99), r = o.Map = i(100), e = o.Set = i(108);
    }, function(t, n, r) {
        r(2), r(28), r(31), r(33), r(37), r(39), r(41), r(42), r(43), r(44), r(45), r(46), 
        r(47), r(48), r(49), t.exports = r(9).Object;
    }, function(t, n, r) {
        "use strict";
        var e = r(3), o = r(4), i = r(5), u = r(6), c = r(8), f = r(12), s = r(7), a = r(14), p = r(15), l = r(13), v = r(16), h = r(17), g = r(22), y = r(23), d = r(24), m = r(25), x = r(26), S = r(18), b = r(11), _ = e.getDesc, w = e.setDesc, O = e.create, P = g.get, j = o.Symbol, A = o.JSON, E = A && A.stringify, F = !1, k = v("_hidden"), M = e.isEnum, D = a("symbol-registry"), N = a("symbols"), T = "function" == typeof j, C = Object.prototype, W = u && s(function() {
            return 7 != O(w({}, "a", {
                get:function() {
                    return w(this, "a", {
                        value:7
                    }).a;
                }
            })).a;
        }) ? function(t, n, r) {
            var e = _(C, n);
            e && delete C[n], w(t, n, r), e && t !== C && w(C, n, e);
        } :w, I = function(t) {
            var n = N[t] = O(j.prototype);
            return n._k = t, u && F && W(C, t, {
                configurable:!0,
                set:function(n) {
                    i(this, k) && i(this[k], t) && (this[k][t] = !1), W(this, t, b(1, n));
                }
            }), n;
        }, R = function(t) {
            return "symbol" == typeof t;
        }, z = function Q(t, n, r) {
            return r && i(N, n) ? (r.enumerable ? (i(t, k) && t[k][n] && (t[k][n] = !1), r = O(r, {
                enumerable:b(0, !1)
            })) :(i(t, k) || w(t, k, b(1, {})), t[k][n] = !0), W(t, n, r)) :w(t, n, r);
        }, G = function V(t, n) {
            x(t);
            for (var r = y(n = S(n)), e = 0, o = r.length, i; o > e; ) z(t, i = r[e++], n[i]);
            return t;
        }, J = function X(t, n) {
            return void 0 === n ? O(t) :G(O(t), n);
        }, L = function Y(t) {
            var n = M.call(this, t);
            return n || !i(this, t) || !i(N, t) || i(this, k) && this[k][t] ? n :!0;
        }, K = function Z(t, n) {
            var r = _(t = S(t), n);
            return !r || !i(N, n) || i(t, k) && t[k][n] || (r.enumerable = !0), r;
        }, B = function tt(t) {
            for (var n = P(S(t)), r = [], e = 0, o; n.length > e; ) i(N, o = n[e++]) || o == k || r.push(o);
            return r;
        }, H = function nt(t) {
            for (var n = P(S(t)), r = [], e = 0, o; n.length > e; ) i(N, o = n[e++]) && r.push(N[o]);
            return r;
        }, q = function rt(t) {
            for (var n = [ t ], r = 1, e, o; arguments.length > r; ) n.push(arguments[r++]);
            return e = n[1], "function" == typeof e && (o = e), (o || !d(e)) && (e = function(t, n) {
                return o && (n = o.call(this, t, n)), R(n) ? void 0 :n;
            }), n[1] = e, E.apply(A, n);
        }, U = s(function() {
            var t = j();
            return "[null]" != E([ t ]) || "{}" != E({
                a:t
            }) || "{}" != E(Object(t));
        });
        T || (j = function et() {
            if (R(this)) throw TypeError("Symbol is not a constructor");
            return I(l(arguments[0]));
        }, f(j.prototype, "toString", function ot() {
            return this._k;
        }), R = function(t) {
            return t instanceof j;
        }, e.create = J, e.isEnum = L, e.getDesc = K, e.setDesc = z, e.setDescs = G, e.getNames = g.get = B, 
        e.getSymbols = H, u && !r(27) && f(C, "propertyIsEnumerable", L, !0));
        var $ = {
            "for":function(t) {
                return i(D, t += "") ? D[t] :D[t] = j(t);
            },
            keyFor:function it(t) {
                return h(D, t);
            },
            useSetter:function() {
                F = !0;
            },
            useSimple:function() {
                F = !1;
            }
        };
        e.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(t) {
            var n = v(t);
            $[t] = T ? n :I(n);
        }), F = !0, c(c.G + c.W, {
            Symbol:j
        }), c(c.S, "Symbol", $), c(c.S + c.F * !T, "Object", {
            create:J,
            defineProperty:z,
            defineProperties:G,
            getOwnPropertyDescriptor:K,
            getOwnPropertyNames:B,
            getOwnPropertySymbols:H
        }), A && c(c.S + c.F * (!T || U), "JSON", {
            stringify:q
        }), p(j, "Symbol"), p(Math, "Math", !0), p(o.JSON, "JSON", !0);
    }, function(t, n) {
        var r = Object;
        t.exports = {
            create:r.create,
            getProto:r.getPrototypeOf,
            isEnum:{}.propertyIsEnumerable,
            getDesc:r.getOwnPropertyDescriptor,
            setDesc:r.defineProperty,
            setDescs:r.defineProperties,
            getKeys:r.keys,
            getNames:r.getOwnPropertyNames,
            getSymbols:r.getOwnPropertySymbols,
            each:[].forEach
        };
    }, function(t, n) {
        var r = "undefined", e = t.exports = typeof window != r && window.Math == Math ? window :typeof self != r && self.Math == Math ? self :Function("return this")();
        "number" == typeof o && (o = e);
    }, function(t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return r.call(t, n);
        };
    }, function(t, n, r) {
        t.exports = !r(7)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get:function() {
                    return 7;
                }
            }).a;
        });
    }, function(t, n) {
        t.exports = function(t) {
            try {
                return !!t();
            } catch (n) {
                return !0;
            }
        };
    }, function(t, n, r) {
        var e = r(4), o = r(9), i = r(10), u = r(12), c = "prototype", f = function(t, n) {
            return function() {
                return t.apply(n, arguments);
            };
        }, s = function(t, n, r) {
            var a, p, l, v, h = t & s.G, g = t & s.P, y = h ? e :t & s.S ? e[n] || (e[n] = {}) :(e[n] || {})[c], d = h ? o :o[n] || (o[n] = {});
            h && (r = n);
            for (a in r) p = !(t & s.F) && y && a in y, l = (p ? y :r)[a], v = t & s.B && p ? f(l, e) :g && "function" == typeof l ? f(Function.call, l) :l, 
            y && !p && u(y, a, l), d[a] != l && i(d, a, v), g && ((d[c] || (d[c] = {}))[a] = l);
        };
        e.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, t.exports = s;
    }, function(t, n) {
        var r = t.exports = {
            version:"1.2.1"
        };
        "number" == typeof i && (i = r);
    }, function(t, n, r) {
        var e = r(3), o = r(11);
        t.exports = r(6) ? function(t, n, r) {
            return e.setDesc(t, n, o(1, r));
        } :function(t, n, r) {
            return t[n] = r, t;
        };
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable:!(1 & t),
                configurable:!(2 & t),
                writable:!(4 & t),
                value:n
            };
        };
    }, function(t, n, r) {
        var e = r(4), o = r(10), i = r(13)("src"), u = "toString", c = Function[u], f = ("" + c).split(u);
        r(9).inspectSource = function(t) {
            return c.call(t);
        }, (t.exports = function(t, n, r, u) {
            "function" == typeof r && (o(r, i, t[n] ? "" + t[n] :f.join(String(n))), "name" in r || (r.name = n)), 
            t === e ? t[n] = r :(u || delete t[n], o(t, n, r));
        })(Function.prototype, u, function s() {
            return "function" == typeof this && this[i] || c.call(this);
        });
    }, function(t, n) {
        var r = 0, e = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" :t, ")_", (++r + e).toString(36));
        };
    }, function(t, n, r) {
        var e = r(4), o = "__core-js_shared__", i = e[o] || (e[o] = {});
        t.exports = function(t) {
            return i[t] || (i[t] = {});
        };
    }, function(t, n, r) {
        var e = r(5), o = r(10), i = r(16)("toStringTag");
        t.exports = function(t, n, r) {
            t && !e(t = r ? t :t.prototype, i) && o(t, i, n);
        };
    }, function(t, n, r) {
        var e = r(14)("wks"), o = r(4).Symbol;
        t.exports = function(t) {
            return e[t] || (e[t] = o && o[t] || (o || r(13))("Symbol." + t));
        };
    }, function(t, n, r) {
        var e = r(3), o = r(18);
        t.exports = function(t, n) {
            for (var r = o(t), i = e.getKeys(r), u = i.length, c = 0, f; u > c; ) if (r[f = i[c++]] === n) return f;
        };
    }, function(t, n, r) {
        var e = r(19), o = r(21);
        t.exports = function(t) {
            return e(o(t));
        };
    }, function(t, n, r) {
        var e = r(20);
        t.exports = 0 in Object("z") ? Object :function(t) {
            return "String" == e(t) ? t.split("") :Object(t);
        };
    }, function(t, n) {
        var r = {}.toString;
        t.exports = function(t) {
            return r.call(t).slice(8, -1);
        };
    }, function(t, n) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    }, function(t, n, r) {
        var e = {}.toString, o = r(18), i = r(3).getNames, u = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) :[], c = function(t) {
            try {
                return i(t);
            } catch (n) {
                return u.slice();
            }
        };
        t.exports.get = function f(t) {
            return u && "[object Window]" == e.call(t) ? c(t) :i(o(t));
        };
    }, function(t, n, r) {
        var e = r(3);
        t.exports = function(t) {
            var n = e.getKeys(t), r = e.getSymbols;
            if (r) for (var o = r(t), i = e.isEnum, u = 0, c; o.length > u; ) i.call(t, c = o[u++]) && n.push(c);
            return n;
        };
    }, function(t, n, r) {
        var e = r(20);
        t.exports = Array.isArray || function(t) {
            return "Array" == e(t);
        };
    }, function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t :"function" == typeof t;
        };
    }, function(t, n, r) {
        var e = r(25);
        t.exports = function(t) {
            if (!e(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    }, function(t, n) {
        t.exports = !1;
    }, function(t, n, r) {
        var e = r(8);
        e(e.S + e.F, "Object", {
            assign:r(29)
        });
    }, function(t, r, e) {
        var o = e(30), i = e(19), u = e(23), c = e(5);
        t.exports = e(7)(function() {
            var t = Object.assign, r = {}, e = {}, o = n(), i = "abcdefghijklmnopqrst";
            return r[o] = 7, i.split("").forEach(function(t) {
                e[t] = t;
            }), 7 != t({}, r)[o] || Object.keys(t({}, e)).join("") != i;
        }) ? function f(t, n) {
            for (var r = o(t), e = arguments.length, f = 1; e > f; ) for (var s = i(arguments[f++]), a = u(s), p = a.length, l = 0, v; p > l; ) c(s, v = a[l++]) && (r[v] = s[v]);
            return r;
        } :Object.assign;
    }, function(t, n, r) {
        var e = r(21);
        t.exports = function(t) {
            return Object(e(t));
        };
    }, function(t, n, r) {
        var e = r(8);
        e(e.S, "Object", {
            is:r(32)
        });
    }, function(t, n) {
        t.exports = Object.is || function r(t, n) {
            return t === n ? 0 !== t || 1 / t === 1 / n :t != t && n != n;
        };
    }, function(t, n, r) {
        var e = r(8);
        e(e.S, "Object", {
            setPrototypeOf:r(34).set
        });
    }, function(t, n, r) {
        var e = r(3).getDesc, o = r(25), i = r(26), u = function(t, n) {
            if (i(t), !o(n) && null !== n) throw TypeError(n + ": can't set as prototype!");
        };
        t.exports = {
            set:Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, o) {
                try {
                    o = r(35)(Function.call, e(Object.prototype, "__proto__").set, 2), o(t, []), n = !(t instanceof Array);
                } catch (i) {
                    n = !0;
                }
                return function c(t, r) {
                    return u(t, r), n ? t.__proto__ = r :o(t, r), t;
                };
            }({}, !1) :void 0),
            check:u
        };
    }, function(t, n, r) {
        var e = r(36);
        t.exports = function(t, n, r) {
            if (e(t), void 0 === n) return t;
            switch (r) {
              case 1:
                return function(r) {
                    return t.call(n, r);
                };

              case 2:
                return function(r, e) {
                    return t.call(n, r, e);
                };

              case 3:
                return function(r, e, o) {
                    return t.call(n, r, e, o);
                };
            }
            return function() {
                return t.apply(n, arguments);
            };
        };
    }, function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(38), o = {};
        o[r(16)("toStringTag")] = "z", o + "" != "[object z]" && r(12)(Object.prototype, "toString", function i() {
            return "[object " + e(this) + "]";
        }, !0);
    }, function(t, n, r) {
        var e = r(20), o = r(16)("toStringTag"), i = "Arguments" == e(function() {
            return arguments;
        }());
        t.exports = function(t) {
            var n, r, u;
            return void 0 === t ? "Undefined" :null === t ? "Null" :"string" == typeof (r = (n = Object(t))[o]) ? r :i ? e(n) :"Object" == (u = e(n)) && "function" == typeof n.callee ? "Arguments" :u;
        };
    }, function(t, n, r) {
        var e = r(25);
        r(40)("freeze", function(t) {
            return function n(r) {
                return t && e(r) ? t(r) :r;
            };
        });
    }, function(t, n, r) {
        t.exports = function(t, n) {
            var e = r(8), o = (r(9).Object || {})[t] || Object[t], i = {};
            i[t] = n(o), e(e.S + e.F * r(7)(function() {
                o(1);
            }), "Object", i);
        };
    }, function(t, n, r) {
        var e = r(25);
        r(40)("seal", function(t) {
            return function n(r) {
                return t && e(r) ? t(r) :r;
            };
        });
    }, function(t, n, r) {
        var e = r(25);
        r(40)("preventExtensions", function(t) {
            return function n(r) {
                return t && e(r) ? t(r) :r;
            };
        });
    }, function(t, n, r) {
        var e = r(25);
        r(40)("isFrozen", function(t) {
            return function n(r) {
                return e(r) ? t ? t(r) :!1 :!0;
            };
        });
    }, function(t, n, r) {
        var e = r(25);
        r(40)("isSealed", function(t) {
            return function n(r) {
                return e(r) ? t ? t(r) :!1 :!0;
            };
        });
    }, function(t, n, r) {
        var e = r(25);
        r(40)("isExtensible", function(t) {
            return function n(r) {
                return e(r) ? t ? t(r) :!0 :!1;
            };
        });
    }, function(t, n, r) {
        var e = r(18);
        r(40)("getOwnPropertyDescriptor", function(t) {
            return function n(r, o) {
                return t(e(r), o);
            };
        });
    }, function(t, n, r) {
        var e = r(30);
        r(40)("getPrototypeOf", function(t) {
            return function n(r) {
                return t(e(r));
            };
        });
    }, function(t, n, r) {
        var e = r(30);
        r(40)("keys", function(t) {
            return function n(r) {
                return t(e(r));
            };
        });
    }, function(t, n, r) {
        r(40)("getOwnPropertyNames", function() {
            return r(22).get;
        });
    }, function(t, n, r) {
        r(51), r(57), r(63), r(64), r(66), r(69), r(72), r(74), r(76), t.exports = r(9).Array;
    }, function(t, n, r) {
        "use strict";
        var e = r(52)(!0);
        r(54)(String, "String", function(t) {
            this._t = String(t), this._i = 0;
        }, function() {
            var t = this._t, n = this._i, r;
            return n >= t.length ? {
                value:void 0,
                done:!0
            } :(r = e(t, n), this._i += r.length, {
                value:r,
                done:!1
            });
        });
    }, function(t, n, r) {
        var e = r(53), o = r(21);
        t.exports = function(t) {
            return function(n, r) {
                var i = String(o(n)), u = e(r), c = i.length, f, s;
                return 0 > u || u >= c ? t ? "" :void 0 :(f = i.charCodeAt(u), 55296 > f || f > 56319 || u + 1 === c || (s = i.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? i.charAt(u) :f :t ? i.slice(u, u + 2) :(f - 55296 << 10) + (s - 56320) + 65536);
            };
        };
    }, function(t, n) {
        var r = Math.ceil, e = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 :(t > 0 ? e :r)(t);
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(27), o = r(8), i = r(12), u = r(10), c = r(5), f = r(16)("iterator"), s = r(55), a = !([].keys && "next" in [].keys()), p = "@@iterator", l = "keys", v = "values", h = function() {
            return this;
        };
        t.exports = function(t, n, g, y, d, m, x) {
            r(56)(g, n, y);
            var S = function(t) {
                switch (t) {
                  case l:
                    return function n() {
                        return new g(this, t);
                    };

                  case v:
                    return function r() {
                        return new g(this, t);
                    };
                }
                return function e() {
                    return new g(this, t);
                };
            }, b = n + " Iterator", _ = t.prototype, w = _[f] || _[p] || d && _[d], O = w || S(d), P, j;
            if (w) {
                var A = r(3).getProto(O.call(new t()));
                r(15)(A, b, !0), !e && c(_, p) && u(A, f, h);
            }
            if ((!e || x) && u(_, f, O), s[n] = O, s[b] = h, d) if (P = {
                keys:m ? O :S(l),
                values:d == v ? O :S(v),
                entries:d != v ? O :S("entries")
            }, x) for (j in P) j in _ || i(_, j, P[j]); else o(o.P + o.F * a, n, P);
        };
    }, function(t, n) {
        t.exports = {};
    }, function(t, n, r) {
        "use strict";
        var e = r(3), o = {};
        r(10)(o, r(16)("iterator"), function() {
            return this;
        }), t.exports = function(t, n, i) {
            t.prototype = e.create(o, {
                next:r(11)(1, i)
            }), r(15)(t, n + " Iterator");
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(35), o = r(8), i = r(30), u = r(58), c = r(59), f = r(60), s = r(61);
        o(o.S + o.F * !r(62)(function(t) {
            Array.from(t);
        }), "Array", {
            from:function a(t) {
                var n = i(t), r = "function" == typeof this ? this :Array, o = arguments[1], a = void 0 !== o, p = 0, l = s(n), v, h, g, y;
                if (a && (o = e(o, arguments[2], 2)), void 0 == l || r == Array && c(l)) for (v = f(n.length), 
                h = new r(v); v > p; p++) h[p] = a ? o(n[p], p) :n[p]; else for (y = l.call(n), 
                h = new r(); !(g = y.next()).done; p++) h[p] = a ? u(y, o, [ g.value, p ], !0) :g.value;
                return h.length = p, h;
            }
        });
    }, function(t, n, r) {
        var e = r(26);
        t.exports = function(t, n, r, o) {
            try {
                return o ? n(e(r)[0], r[1]) :n(r);
            } catch (i) {
                var u = t["return"];
                throw void 0 !== u && e(u.call(t)), i;
            }
        };
    }, function(t, n, r) {
        var e = r(55), o = r(16)("iterator");
        t.exports = function(t) {
            return (e.Array || Array.prototype[o]) === t;
        };
    }, function(t, n, r) {
        var e = r(53), o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(e(t), 9007199254740991) :0;
        };
    }, function(t, n, r) {
        var e = r(38), o = r(16)("iterator"), i = r(55);
        t.exports = r(9).getIteratorMethod = function(t) {
            return void 0 != t ? t[o] || t["@@iterator"] || i[e(t)] :void 0;
        };
    }, function(t, n, r) {
        var e = r(16)("iterator"), o = !1;
        try {
            var i = [ 7 ][e]();
            i["return"] = function() {
                o = !0;
            }, Array.from(i, function() {
                throw 2;
            });
        } catch (u) {}
        t.exports = function(t) {
            if (!o) return !1;
            var n = !1;
            try {
                var r = [ 7 ], i = r[e]();
                i.next = function() {
                    n = !0;
                }, r[e] = function() {
                    return i;
                }, t(r);
            } catch (u) {}
            return n;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(8);
        e(e.S + e.F * r(7)(function() {
            function t() {}
            return !(Array.of.call(t) instanceof t);
        }), "Array", {
            of:function o() {
                for (var t = 0, n = arguments.length, r = new ("function" == typeof this ? this :Array)(n); n > t; ) r[t] = arguments[t++];
                return r.length = n, r;
            }
        });
    }, function(t, n, r) {
        r(65)(Array);
    }, function(t, n, r) {
        "use strict";
        var e = r(3), o = r(16)("species");
        t.exports = function(t) {
            !r(6) || o in t || e.setDesc(t, o, {
                configurable:!0,
                get:function() {
                    return this;
                }
            });
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(67), o = r(68), i = r(55), u = r(18);
        r(54)(Array, "Array", function(t, n) {
            this._t = u(t), this._i = 0, this._k = n;
        }, function() {
            var t = this._t, n = this._k, r = this._i++;
            return !t || r >= t.length ? (this._t = void 0, o(1)) :"keys" == n ? o(0, r) :"values" == n ? o(0, t[r]) :o(0, [ r, t[r] ]);
        }, "values"), i.Arguments = i.Array, e("keys"), e("values"), e("entries");
    }, function(t, n, r) {
        var e = r(16)("unscopables");
        void 0 == [][e] && r(10)(Array.prototype, e, {}), t.exports = function(t) {
            [][e][t] = !0;
        };
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                value:n,
                done:!!t
            };
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(8);
        e(e.P, "Array", {
            copyWithin:r(70)
        }), r(67)("copyWithin");
    }, function(t, n, r) {
        "use strict";
        var e = r(30), o = r(71), i = r(60);
        t.exports = [].copyWithin || function u(t, n) {
            var r = e(this), u = i(r.length), c = o(t, u), f = o(n, u), s = arguments[2], a = Math.min((void 0 === s ? u :o(s, u)) - f, u - c), p = 1;
            for (c > f && f + a > c && (p = -1, f += a - 1, c += a - 1); a-- > 0; ) f in r ? r[c] = r[f] :delete r[c], 
            c += p, f += p;
            return r;
        };
    }, function(t, n, r) {
        var e = r(53), o = Math.max, i = Math.min;
        t.exports = function(t, n) {
            return t = e(t), 0 > t ? o(t + n, 0) :i(t, n);
        };
    }, function(t, n, r) {
        var e = r(8);
        e(e.P, "Array", {
            fill:r(73)
        }), r(67)("fill");
    }, function(t, n, r) {
        "use strict";
        var e = r(30), o = r(71), i = r(60);
        t.exports = [].fill || function u(t) {
            for (var n = e(this, !0), r = i(n.length), u = o(arguments[1], r), c = arguments[2], f = void 0 === c ? r :o(c, r); f > u; ) n[u++] = t;
            return n;
        };
    }, function(t, n, r) {
        "use strict";
        var e = "find", o = r(8), i = !0, u = r(75)(5);
        e in [] && Array(1)[e](function() {
            i = !1;
        }), o(o.P + o.F * i, "Array", {
            find:function c(t) {
                return u(this, t, arguments[1]);
            }
        }), r(67)(e);
    }, function(t, n, r) {
        var e = r(35), o = r(25), i = r(19), u = r(30), c = r(60), f = r(24), s = r(16)("species"), a = function(t, n) {
            var r;
            return f(t) && o(r = t.constructor) && (r = r[s], null === r && (r = void 0)), new (void 0 === r ? Array :r)(n);
        };
        t.exports = function(t) {
            var n = 1 == t, r = 2 == t, o = 3 == t, f = 4 == t, s = 6 == t, p = 5 == t || s;
            return function(l, v, h) {
                for (var g = u(l), y = i(g), d = e(v, h, 3), m = c(y.length), x = 0, S = n ? a(l, m) :r ? a(l, 0) :void 0, b, _; m > x; x++) if ((p || x in y) && (b = y[x], 
                _ = d(b, x, g), t)) if (n) S[x] = _; else if (_) switch (t) {
                  case 3:
                    return !0;

                  case 5:
                    return b;

                  case 6:
                    return x;

                  case 2:
                    S.push(b);
                } else if (f) return !1;
                return s ? -1 :o || f ? f :S;
            };
        };
    }, function(t, n, r) {
        "use strict";
        var e = "findIndex", o = r(8), i = !0, u = r(75)(6);
        e in [] && Array(1)[e](function() {
            i = !1;
        }), o(o.P + o.F * i, "Array", {
            findIndex:function c(t) {
                return u(this, t, arguments[1]);
            }
        }), r(67)(e);
    }, function(t, n, r) {
        r(78), r(79), r(80), r(51), r(82), r(83), r(87), r(88), r(90), r(91), r(93), r(94), 
        r(95), t.exports = r(9).String;
    }, function(t, n, r) {
        var e = r(8), o = r(71), i = String.fromCharCode, u = String.fromCodePoint;
        e(e.S + e.F * (!!u && 1 != u.length), "String", {
            fromCodePoint:function c(t) {
                for (var n = [], r = arguments.length, e = 0, u; r > e; ) {
                    if (u = +arguments[e++], o(u, 1114111) !== u) throw RangeError(u + " is not a valid code point");
                    n.push(65536 > u ? i(u) :i(((u -= 65536) >> 10) + 55296, u % 1024 + 56320));
                }
                return n.join("");
            }
        });
    }, function(t, n, r) {
        var e = r(8), o = r(18), i = r(60);
        e(e.S, "String", {
            raw:function u(t) {
                for (var n = o(t.raw), r = i(n.length), e = arguments.length, u = [], c = 0; r > c; ) u.push(String(n[c++])), 
                e > c && u.push(String(arguments[c]));
                return u.join("");
            }
        });
    }, function(t, n, r) {
        "use strict";
        r(81)("trim", function(t) {
            return function n() {
                return t(this, 3);
            };
        });
    }, function(t, n, r) {
        var e = function(t, n) {
            return t = String(i(t)), 1 & n && (t = t.replace(s, "")), 2 & n && (t = t.replace(a, "")), 
            t;
        }, o = r(8), i = r(21), u = "	\n\f\r   ᠎             　\u2028\u2029﻿", c = "[" + u + "]", f = "​", s = RegExp("^" + c + c + "*"), a = RegExp(c + c + "*$");
        t.exports = function(t, n) {
            var i = {};
            i[t] = n(e), o(o.P + o.F * r(7)(function() {
                return !!u[t]() || f[t]() != f;
            }), "String", i);
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(8), o = r(52)(!1);
        e(e.P, "String", {
            codePointAt:function i(t) {
                return o(this, t);
            }
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(8), o = r(60), i = r(84), u = "endsWith", c = ""[u];
        e(e.P + e.F * r(86)(u), "String", {
            endsWith:function f(t) {
                var n = i(this, t, u), r = arguments[1], e = o(n.length), f = void 0 === r ? e :Math.min(o(r), e), s = String(t);
                return c ? c.call(n, s, f) :n.slice(f - s.length, f) === s;
            }
        });
    }, function(t, n, r) {
        var e = r(85), o = r(21);
        t.exports = function(t, n, r) {
            if (e(n)) throw TypeError("String#" + r + " doesn't accept regex!");
            return String(o(t));
        };
    }, function(t, n, r) {
        var e = r(25), o = r(20), i = r(16)("match");
        t.exports = function(t) {
            var n;
            return e(t) && (void 0 !== (n = t[i]) ? !!n :"RegExp" == o(t));
        };
    }, function(t, n, r) {
        t.exports = function(t) {
            var n = /./;
            try {
                "/./"[t](n);
            } catch (e) {
                try {
                    return n[r(16)("match")] = !1, !"/./"[t](n);
                } catch (e) {}
            }
            return !0;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(8), o = r(84), i = "includes";
        e(e.P + e.F * r(86)(i), "String", {
            includes:function u(t) {
                return !!~o(this, t, i).indexOf(t, arguments[1]);
            }
        });
    }, function(t, n, r) {
        var e = r(8);
        e(e.P, "String", {
            repeat:r(89)
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(53), o = r(21);
        t.exports = function i(t) {
            var n = String(o(this)), r = "", i = e(t);
            if (0 > i || i == 1 / 0) throw RangeError("Count can't be negative");
            for (;i > 0; (i >>>= 1) && (n += n)) 1 & i && (r += n);
            return r;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(8), o = r(60), i = r(84), u = "startsWith", c = ""[u];
        e(e.P + e.F * r(86)(u), "String", {
            startsWith:function f(t) {
                var n = i(this, t, u), r = o(Math.min(arguments[1], n.length)), e = String(t);
                return c ? c.call(n, e, r) :n.slice(r, r + e.length) === e;
            }
        });
    }, function(t, n, r) {
        r(92)("match", 1, function(t, n) {
            return function r(e) {
                "use strict";
                var o = t(this), i = void 0 == e ? void 0 :e[n];
                return void 0 !== i ? i.call(e, o) :new RegExp(e)[n](String(o));
            };
        });
    }, function(t, n, r) {
        "use strict";
        t.exports = function(t, n, e) {
            var o = r(21), i = r(16)(t), u = ""[t];
            r(7)(function() {
                var n = {};
                return n[i] = function() {
                    return 7;
                }, 7 != ""[t](n);
            }) && (r(12)(String.prototype, t, e(o, i, u)), r(10)(RegExp.prototype, i, 2 == n ? function(t, n) {
                return u.call(t, this, n);
            } :function(t) {
                return u.call(t, this);
            }));
        };
    }, function(t, n, r) {
        r(92)("replace", 2, function(t, n, r) {
            return function e(o, i) {
                "use strict";
                var u = t(this), c = void 0 == o ? void 0 :o[n];
                return void 0 !== c ? c.call(o, u, i) :r.call(String(u), o, i);
            };
        });
    }, function(t, n, r) {
        r(92)("search", 1, function(t, n) {
            return function r(e) {
                "use strict";
                var o = t(this), i = void 0 == e ? void 0 :e[n];
                return void 0 !== i ? i.call(e, o) :new RegExp(e)[n](String(o));
            };
        });
    }, function(t, n, r) {
        r(92)("split", 2, function(t, n, r) {
            return function e(o, i) {
                "use strict";
                var u = t(this), c = void 0 == o ? void 0 :o[n];
                return void 0 !== c ? c.call(o, u, i) :r.call(String(u), o, i);
            };
        });
    }, function(t, n, r) {
        r(97), r(98), t.exports = r(9).Function;
    }, function(t, n, r) {
        var e = r(3).setDesc, o = r(11), i = r(5), u = Function.prototype, c = /^\s*function ([^ (]*)/, f = "name";
        f in u || r(6) && e(u, f, {
            configurable:!0,
            get:function() {
                var t = ("" + this).match(c), n = t ? t[1] :"";
                return i(this, f) || e(this, f, o(5, n)), n;
            }
        });
    }, function(t, n, r) {
        "use strict";
        var e = r(3), o = r(25), i = r(16)("hasInstance"), u = Function.prototype;
        i in u || e.setDesc(u, i, {
            value:function(t) {
                if ("function" != typeof this || !o(t)) return !1;
                if (!o(this.prototype)) return t instanceof this;
                for (;t = e.getProto(t); ) if (this.prototype === t) return !0;
                return !1;
            }
        });
    }, function(t, n, r) {
        r(2), t.exports = r(9).Symbol;
    }, function(t, n, r) {
        r(37), r(51), r(101), r(102), t.exports = r(9).Map;
    }, function(t, n, r) {
        r(66);
        var e = r(4), o = r(10), i = r(55), u = r(16)("iterator"), c = e.NodeList, f = e.HTMLCollection, s = c && c.prototype, a = f && f.prototype, p = i.NodeList = i.HTMLCollection = i.Array;
        !c || u in s || o(s, u, p), !f || u in a || o(a, u, p);
    }, function(t, n, r) {
        "use strict";
        var e = r(103);
        r(107)("Map", function(t) {
            return function n() {
                return t(this, arguments[0]);
            };
        }, {
            get:function o(t) {
                var n = e.getEntry(this, t);
                return n && n.v;
            },
            set:function i(t, n) {
                return e.def(this, 0 === t ? 0 :t, n);
            }
        }, e, !0);
    }, function(t, n, r) {
        "use strict";
        var e = r(3), o = r(10), i = r(35), u = r(65), c = r(104), f = r(21), s = r(105), a = r(68), p = r(13)("id"), l = r(5), v = r(25), h = Object.isExtensible || v, g = r(6), y = g ? "_s" :"size", d = 0, m = function(t, n) {
            if (!v(t)) return "symbol" == typeof t ? t :("string" == typeof t ? "S" :"P") + t;
            if (!l(t, p)) {
                if (!h(t)) return "F";
                if (!n) return "E";
                o(t, p, ++d);
            }
            return "O" + t[p];
        }, x = function(t, n) {
            var r = m(n), e;
            if ("F" !== r) return t._i[r];
            for (e = t._f; e; e = e.n) if (e.k == n) return e;
        };
        t.exports = {
            getConstructor:function(t, n, o, u) {
                var a = t(function(t, r) {
                    c(t, a, n), t._i = e.create(null), t._f = void 0, t._l = void 0, t[y] = 0, void 0 != r && s(r, o, t[u], t);
                });
                return r(106)(a.prototype, {
                    clear:function p() {
                        for (var t = this, n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), 
                        delete n[r.i];
                        t._f = t._l = void 0, t[y] = 0;
                    },
                    "delete":function(t) {
                        var n = this, r = x(n, t);
                        if (r) {
                            var e = r.n, o = r.p;
                            delete n._i[r.i], r.r = !0, o && (o.n = e), e && (e.p = o), n._f == r && (n._f = e), 
                            n._l == r && (n._l = o), n[y]--;
                        }
                        return !!r;
                    },
                    forEach:function l(t) {
                        for (var n = i(t, arguments[1], 3), r; r = r ? r.n :this._f; ) for (n(r.v, r.k, this); r && r.r; ) r = r.p;
                    },
                    has:function v(t) {
                        return !!x(this, t);
                    }
                }), g && e.setDesc(a.prototype, "size", {
                    get:function() {
                        return f(this[y]);
                    }
                }), a;
            },
            def:function(t, n, r) {
                var e = x(t, n), o, i;
                return e ? e.v = r :(t._l = e = {
                    i:i = m(n, !0),
                    k:n,
                    v:r,
                    p:o = t._l,
                    n:void 0,
                    r:!1
                }, t._f || (t._f = e), o && (o.n = e), t[y]++, "F" !== i && (t._i[i] = e)), t;
            },
            getEntry:x,
            setStrong:function(t, n, e) {
                r(54)(t, n, function(t, n) {
                    this._t = t, this._k = n, this._l = void 0;
                }, function() {
                    for (var t = this, n = t._k, r = t._l; r && r.r; ) r = r.p;
                    return t._t && (t._l = r = r ? r.n :t._t._f) ? "keys" == n ? a(0, r.k) :"values" == n ? a(0, r.v) :a(0, [ r.k, r.v ]) :(t._t = void 0, 
                    a(1));
                }, e ? "entries" :"values", !e, !0), u(t), u(r(9)[n]);
            }
        };
    }, function(t, n) {
        t.exports = function(t, n, r) {
            if (!(t instanceof n)) throw TypeError(r + ": use the 'new' operator!");
            return t;
        };
    }, function(t, n, r) {
        var e = r(35), o = r(58), i = r(59), u = r(26), c = r(60), f = r(61);
        t.exports = function(t, n, r, s) {
            var a = f(t), p = e(r, s, n ? 2 :1), l = 0, v, h, g;
            if ("function" != typeof a) throw TypeError(t + " is not iterable!");
            if (i(a)) for (v = c(t.length); v > l; l++) n ? p(u(h = t[l])[0], h[1]) :p(t[l]); else for (g = a.call(t); !(h = g.next()).done; ) o(g, p, h.value, n);
        };
    }, function(t, n, r) {
        var e = r(12);
        t.exports = function(t, n) {
            for (var r in n) e(t, r, n[r]);
            return t;
        };
    }, function(t, n, r) {
        "use strict";
        var e = r(4), o = r(8), i = r(105), u = r(104);
        t.exports = function(t, n, c, f, s, a) {
            var p = e[t], l = p, v = s ? "set" :"add", h = l && l.prototype, g = {}, y = function(t) {
                var n = h[t];
                r(12)(h, t, "delete" == t ? function(t) {
                    return n.call(this, 0 === t ? 0 :t);
                } :"has" == t ? function e(t) {
                    return n.call(this, 0 === t ? 0 :t);
                } :"get" == t ? function o(t) {
                    return n.call(this, 0 === t ? 0 :t);
                } :"add" == t ? function i(t) {
                    return n.call(this, 0 === t ? 0 :t), this;
                } :function u(t, r) {
                    return n.call(this, 0 === t ? 0 :t, r), this;
                });
            };
            if ("function" == typeof l && (a || h.forEach && !r(7)(function() {
                new l().entries().next();
            }))) {
                var d = new l(), m = d[v](a ? {} :-0, 1), x;
                r(62)(function(t) {
                    new l(t);
                }) || (l = n(function(n, r) {
                    u(n, l, t);
                    var e = new p();
                    return void 0 != r && i(r, s, e[v], e), e;
                }), l.prototype = h, h.constructor = l), a || d.forEach(function(t, n) {
                    x = 1 / n === -(1 / 0);
                }), x && (y("delete"), y("has"), s && y("get")), (x || m !== d) && y(v), a && h.clear && delete h.clear;
            } else l = f.getConstructor(n, t, s, v), r(106)(l.prototype, c);
            return r(15)(l, t), g[t] = l, o(o.G + o.W + o.F * (l != p), g), a || f.setStrong(l, t, s), 
            l;
        };
    }, function(t, n, r) {
        r(37), r(51), r(101), r(109), t.exports = r(9).Set;
    }, function(t, n, r) {
        "use strict";
        var e = r(103);
        r(107)("Set", function(t) {
            return function n() {
                return t(this, arguments[0]);
            };
        }, {
            add:function o(t) {
                return e.def(this, t = 0 === t ? 0 :t, t);
            }
        }, e);
    } ]), "undefined" == typeof Package && (Package = {}), Package["ecmascript-runtime"] = {
        Symbol:n,
        Map:r,
        Set:e
    };
}();

!function() {
    var t = Package.meteor.Meteor, n;
    (function() {
        !function(t) {
            function n(o) {
                if (e[o]) return e[o].exports;
                var r = e[o] = {
                    exports:{},
                    id:o,
                    loaded:!1
                };
                return t[o].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports;
            }
            var e = {};
            return n.m = t, n.c = e, n.p = "", n(0);
        }([ function(e, o, r) {
            function i(t) {
                throw t;
            }
            var u = r(1), c = u.prototype.then;
            u.prototype.then = function(n, e) {
                return "object" == typeof t && "function" == typeof t.bindEnvironment ? c.call(this, n && t.bindEnvironment(n, i), e && t.bindEnvironment(e, i)) :c.call(this, n, e);
            }, n = u;
        }, function(t, n, e) {
            (function(n) {
                function o(t, n) {
                    Object.keys(n).forEach(function(e) {
                        var o = n[e];
                        "function" != typeof o || r.call(t, e) || (t[e] = o);
                    });
                }
                var r = Object.prototype.hasOwnProperty, i = "object" == typeof n ? n :"object" == typeof window ? window :"object" == typeof self ? self :this, u = i.Promise, c = e(2);
                "function" == typeof u ? (o(u, c), o(u.prototype, c.prototype), t.exports = u) :t.exports = c;
            }).call(n, function() {
                return this;
            }());
        }, function(t, n, e) {
            "use strict";
            t.exports = e(3);
        }, function(t, n, e) {
            "use strict";
            t.exports = e(4), e(6), e(7), e(8), e(9);
        }, function(t, n, e) {
            "use strict";
            function o() {}
            function r(t) {
                try {
                    return t.then;
                } catch (n) {
                    return d = n, w;
                }
            }
            function i(t, n) {
                try {
                    return t(n);
                } catch (e) {
                    return d = e, w;
                }
            }
            function u(t, n, e) {
                try {
                    t(n, e);
                } catch (o) {
                    return d = o, w;
                }
            }
            function c(t) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this._37 = 0, this._12 = null, this._59 = [], t !== o && y(t, this);
            }
            function f(t, n, e) {
                return new t.constructor(function(r, i) {
                    var u = new c(o);
                    u.then(r, i), s(t, new h(n, e, u));
                });
            }
            function s(t, n) {
                for (;3 === t._37; ) t = t._12;
                return 0 === t._37 ? void t._59.push(n) :void v(function() {
                    var e = 1 === t._37 ? n.onFulfilled :n.onRejected;
                    if (null === e) return void (1 === t._37 ? a(n.promise, t._12) :l(n.promise, t._12));
                    var o = i(e, t._12);
                    o === w ? l(n.promise, d) :a(n.promise, o);
                });
            }
            function a(t, n) {
                if (n === t) return l(t, new TypeError("A promise cannot be resolved with itself."));
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var e = r(n);
                    if (e === w) return l(t, d);
                    if (e === t.then && n instanceof c) return t._37 = 3, t._12 = n, void p(t);
                    if ("function" == typeof e) return void y(e.bind(n), t);
                }
                t._37 = 1, t._12 = n, p(t);
            }
            function l(t, n) {
                t._37 = 2, t._12 = n, p(t);
            }
            function p(t) {
                for (var n = 0; n < t._59.length; n++) s(t, t._59[n]);
                t._59 = null;
            }
            function h(t, n, e) {
                this.onFulfilled = "function" == typeof t ? t :null, this.onRejected = "function" == typeof n ? n :null, 
                this.promise = e;
            }
            function y(t, n) {
                var e = !1, o = u(t, function(t) {
                    e || (e = !0, a(n, t));
                }, function(t) {
                    e || (e = !0, l(n, t));
                });
                e || o !== w || (e = !0, l(n, d));
            }
            var v = e(5), d = null, w = {};
            t.exports = c, c._99 = o, c.prototype.then = function(t, n) {
                if (this.constructor !== c) return f(this, t, n);
                var e = new c(o);
                return s(this, new h(t, n, e)), e;
            };
        }, function(t, n) {
            (function(n) {
                "use strict";
                function e(t) {
                    u.length || (f(), c = !0), u[u.length] = t;
                }
                function o() {
                    for (;s < u.length; ) {
                        var t = s;
                        if (s += 1, u[t].call(), s > a) {
                            for (var n = 0, e = u.length - s; e > n; n++) u[n] = u[n + s];
                            u.length -= s, s = 0;
                        }
                    }
                    u.length = 0, s = 0, c = !1;
                }
                function r(t) {
                    var n = 1, e = new l(t), o = document.createTextNode("");
                    return e.observe(o, {
                        characterData:!0
                    }), function r() {
                        n = -n, o.data = n;
                    };
                }
                function i(t) {
                    return function n() {
                        function n() {
                            clearTimeout(e), clearInterval(o), t();
                        }
                        var e = setTimeout(n, 0), o = setInterval(n, 50);
                    };
                }
                t.exports = e;
                var u = [], c = !1, f, s = 0, a = 1024, l = n.MutationObserver || n.WebKitMutationObserver;
                f = "function" == typeof l ? r(o) :i(o), e.requestFlush = f, e.makeRequestCallFromTimer = i;
            }).call(n, function() {
                return this;
            }());
        }, function(t, n, e) {
            "use strict";
            var o = e(4);
            t.exports = o, o.prototype.done = function(t, n) {
                var e = arguments.length ? this.then.apply(this, arguments) :this;
                e.then(null, function(t) {
                    setTimeout(function() {
                        throw t;
                    }, 0);
                });
            };
        }, function(t, n, e) {
            "use strict";
            var o = e(4);
            t.exports = o, o.prototype["finally"] = function(t) {
                return this.then(function(n) {
                    return o.resolve(t()).then(function() {
                        return n;
                    });
                }, function(n) {
                    return o.resolve(t()).then(function() {
                        throw n;
                    });
                });
            };
        }, function(t, n, e) {
            "use strict";
            function o(t) {
                var n = new r(r._99);
                return n._37 = 1, n._12 = t, n;
            }
            var r = e(4);
            t.exports = r;
            var i = o(!0), u = o(!1), c = o(null), f = o(void 0), s = o(0), a = o("");
            r.resolve = function(t) {
                if (t instanceof r) return t;
                if (null === t) return c;
                if (void 0 === t) return f;
                if (t === !0) return i;
                if (t === !1) return u;
                if (0 === t) return s;
                if ("" === t) return a;
                if ("object" == typeof t || "function" == typeof t) try {
                    var n = t.then;
                    if ("function" == typeof n) return new r(n.bind(t));
                } catch (e) {
                    return new r(function(t, n) {
                        n(e);
                    });
                }
                return o(t);
            }, r.all = function(t) {
                var n = Array.prototype.slice.call(t);
                return new r(function(t, e) {
                    function o(u, c) {
                        if (c && ("object" == typeof c || "function" == typeof c)) {
                            if (c instanceof r && c.then === r.prototype.then) {
                                for (;3 === c._37; ) c = c._12;
                                return 1 === c._37 ? o(u, c._12) :(2 === c._37 && e(c._12), void c.then(function(t) {
                                    o(u, t);
                                }, e));
                            }
                            var f = c.then;
                            if ("function" == typeof f) {
                                var s = new r(f.bind(c));
                                return void s.then(function(t) {
                                    o(u, t);
                                }, e);
                            }
                        }
                        n[u] = c, 0 === --i && t(n);
                    }
                    if (0 === n.length) return t([]);
                    for (var i = n.length, u = 0; u < n.length; u++) o(u, n[u]);
                });
            }, r.reject = function(t) {
                return new r(function(n, e) {
                    e(t);
                });
            }, r.race = function(t) {
                return new r(function(n, e) {
                    t.forEach(function(t) {
                        r.resolve(t).then(n, e);
                    });
                });
            }, r.prototype["catch"] = function(t) {
                return this.then(null, t);
            };
        }, function(t, n, e) {
            "use strict";
            var o = e(4), r = e(10);
            t.exports = o, o.denodeify = function(t, n) {
                return n = n || 1 / 0, function() {
                    var e = this, r = Array.prototype.slice.call(arguments, 0, n > 0 ? n :0);
                    return new o(function(n, o) {
                        r.push(function(t, e) {
                            t ? o(t) :n(e);
                        });
                        var i = t.apply(e, r);
                        !i || "object" != typeof i && "function" != typeof i || "function" != typeof i.then || n(i);
                    });
                };
            }, o.nodeify = function(t) {
                return function() {
                    var n = Array.prototype.slice.call(arguments), e = "function" == typeof n[n.length - 1] ? n.pop() :null, i = this;
                    try {
                        return t.apply(this, arguments).nodeify(e, i);
                    } catch (u) {
                        if (null === e || "undefined" == typeof e) return new o(function(t, n) {
                            n(u);
                        });
                        r(function() {
                            e.call(i, u);
                        });
                    }
                };
            }, o.prototype.nodeify = function(t, n) {
                return "function" != typeof t ? this :void this.then(function(e) {
                    r(function() {
                        t.call(n, null, e);
                    });
                }, function(e) {
                    r(function() {
                        t.call(n, e);
                    });
                });
            };
        }, function(t, n, e) {
            "use strict";
            function o() {
                if (f.length) throw f.shift();
            }
            function r(t) {
                var n;
                n = c.length ? c.pop() :new i(), n.task = t, u(n);
            }
            function i() {
                this.task = null;
            }
            var u = e(5), c = [], f = [], s = u.makeRequestCallFromTimer(o);
            t.exports = r, i.prototype.call = function() {
                try {
                    this.task.call();
                } catch (t) {
                    r.onerror ? r.onerror(t) :(f.push(t), s());
                } finally {
                    this.task = null, c[c.length] = this;
                }
            };
        } ]);
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.promise = {
        Promise:n
    };
}();

!function() {
    var e = Package.meteor.Meteor, n = Package.underscore._, t = Package.ecmascript.ECMAScript, r = Package["babel-runtime"].babelHelpers, o = Package["ecmascript-runtime"].Symbol, i = Package["ecmascript-runtime"].Map, a = Package["ecmascript-runtime"].Set, c = Package.promise.Promise, u;
    (function() {
        function n() {
            return new a(a.Type.ALEA, {
                seeds:[ new Date(), c, d, p, Math.random() ]
            });
        }
        if (e.isServer) var t = Npm.require("crypto");
        var r = function() {
            function e() {
                var e = 4022871197, n = function(n) {
                    n = n.toString();
                    for (var t = 0; t < n.length; t++) {
                        e += n.charCodeAt(t);
                        var r = .02519603282416938 * e;
                        e = r >>> 0, r -= e, r *= e, e = r >>> 0, r -= e, e += 4294967296 * r;
                    }
                    return 2.3283064365386963e-10 * (e >>> 0);
                };
                return n.version = "Mash 0.9", n;
            }
            return function(n) {
                var t = 0, r = 0, o = 0, i = 1;
                0 == n.length && (n = [ +new Date() ]);
                var a = e();
                t = a(" "), r = a(" "), o = a(" ");
                for (var c = 0; c < n.length; c++) t -= a(n[c]), 0 > t && (t += 1), r -= a(n[c]), 
                0 > r && (r += 1), o -= a(n[c]), 0 > o && (o += 1);
                a = null;
                var u = function() {
                    var e = 2091639 * t + 2.3283064365386963e-10 * i;
                    return t = r, r = o, o = e - (i = 0 | e);
                };
                return u.uint32 = function() {
                    return 4294967296 * u();
                }, u.fract53 = function() {
                    return u() + 1.1102230246251565e-16 * (2097152 * u() | 0);
                }, u.version = "Alea 0.9", u.args = n, u;
            }(Array.prototype.slice.call(arguments));
        }, o = "23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz", i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_", a = function(e, n) {
            var t = this;
            if (t.type = e, !a.Type[e]) throw new Error("Unknown random generator type: " + e);
            if (e === a.Type.ALEA) {
                if (!n.seeds) throw new Error("No seeds were provided for Alea PRNG");
                t.alea = r.apply(null, n.seeds);
            }
        };
        a.Type = {
            NODE_CRYPTO:"NODE_CRYPTO",
            BROWSER_CRYPTO:"BROWSER_CRYPTO",
            ALEA:"ALEA"
        }, a.prototype.fraction = function() {
            var e = this;
            if (e.type === a.Type.ALEA) return e.alea();
            if (e.type === a.Type.NODE_CRYPTO) {
                var n = parseInt(e.hexString(8), 16);
                return 2.3283064365386963e-10 * n;
            }
            if (e.type === a.Type.BROWSER_CRYPTO) {
                var t = new Uint32Array(1);
                return window.crypto.getRandomValues(t), 2.3283064365386963e-10 * t[0];
            }
            throw new Error("Unknown random generator type: " + e.type);
        }, a.prototype.hexString = function(e) {
            var n = this;
            if (n.type === a.Type.NODE_CRYPTO) {
                var r = Math.ceil(e / 2), o;
                try {
                    o = t.randomBytes(r);
                } catch (i) {
                    o = t.pseudoRandomBytes(r);
                }
                var c = o.toString("hex");
                return c.substring(0, e);
            }
            return this._randomString(e, "0123456789abcdef");
        }, a.prototype._randomString = function(e, n) {
            for (var t = this, r = [], o = 0; e > o; o++) r[o] = t.choice(n);
            return r.join("");
        }, a.prototype.id = function(e) {
            var n = this;
            return void 0 === e && (e = 17), n._randomString(e, o);
        }, a.prototype.secret = function(e) {
            var n = this;
            return void 0 === e && (e = 43), n._randomString(e, i);
        }, a.prototype.choice = function(e) {
            var n = Math.floor(this.fraction() * e.length);
            return "string" == typeof e ? e.substr(n, 1) :e[n];
        };
        var c = "undefined" != typeof window && window.innerHeight || "undefined" != typeof document && document.documentElement && document.documentElement.clientHeight || "undefined" != typeof document && document.body && document.body.clientHeight || 1, d = "undefined" != typeof window && window.innerWidth || "undefined" != typeof document && document.documentElement && document.documentElement.clientWidth || "undefined" != typeof document && document.body && document.body.clientWidth || 1, p = "undefined" != typeof navigator && navigator.userAgent || "";
        u = e.isServer ? new a(a.Type.NODE_CRYPTO) :"undefined" != typeof window && window.crypto && window.crypto.getRandomValues ? new a(a.Type.BROWSER_CRYPTO) :n(), 
        u.createWithSeeds = function() {
            for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
            if (0 === n.length) throw new Error("No seeds were provided");
            return new a(a.Type.ALEA, {
                seeds:n
            });
        }, u.insecure = n();
    }).call(this), function() {
        e.uuid = function() {
            for (var e = "0123456789abcdef", n = [], t = 0; 36 > t; t++) n[t] = u.choice(e);
            n[14] = "4", n[19] = e.substr(3 & parseInt(n[19], 16) | 8, 1), n[8] = n[13] = n[18] = n[23] = "-";
            var r = n.join("");
            return r;
        };
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.random = {
        Random:u
    };
}();

!function() {
    var i = Package.meteor.Meteor, t = Package.underscore._, a = Package.ejson.EJSON, n;
    (function() {
        n = function(i, t) {
            var a = this;
            a._map = {}, a._idStringify = i || JSON.stringify, a._idParse = t || JSON.parse;
        }, t.extend(n.prototype, {
            get:function(i) {
                var t = this, a = t._idStringify(i);
                return t._map[a];
            },
            set:function(i, t) {
                var a = this, n = a._idStringify(i);
                a._map[n] = t;
            },
            remove:function(i) {
                var t = this, a = t._idStringify(i);
                delete t._map[a];
            },
            has:function(i) {
                var a = this, n = a._idStringify(i);
                return t.has(a._map, n);
            },
            empty:function() {
                var i = this;
                return t.isEmpty(i._map);
            },
            clear:function() {
                var i = this;
                i._map = {};
            },
            forEach:function(i) {
                for (var a = this, n = t.keys(a._map), e = 0; e < n.length; e++) {
                    var r = i.call(null, a._map[n[e]], a._idParse(n[e]));
                    if (r === !1) return;
                }
            },
            size:function() {
                var i = this;
                return t.size(i._map);
            },
            setDefault:function(i, a) {
                var n = this, e = n._idStringify(i);
                return t.has(n._map, e) ? n._map[e] :(n._map[e] = a, a);
            },
            clone:function() {
                var i = this, t = new n(i._idStringify, i._idParse);
                return i.forEach(function(i, n) {
                    t.set(n, a.clone(i));
                }), t;
            }
        });
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["id-map"] = {
        IdMap:n
    };
}();

!function() {
    var t = Package.meteor.Meteor, e = Package.underscore._, r;
    (function() {
        var t = function(t, e, r, n) {
            return {
                key:t,
                value:e,
                next:r,
                prev:n
            };
        };
        r = function() {
            var t = this;
            t._dict = {}, t._first = null, t._last = null, t._size = 0;
            var r = e.toArray(arguments);
            t._stringify = function(t) {
                return t;
            }, "function" == typeof r[0] && (t._stringify = r.shift()), e.each(r, function(e) {
                t.putBefore(e[0], e[1], null);
            });
        }, e.extend(r.prototype, {
            _k:function(t) {
                return " " + this._stringify(t);
            },
            empty:function() {
                var t = this;
                return !t._first;
            },
            size:function() {
                var t = this;
                return t._size;
            },
            _linkEltIn:function(t) {
                var e = this;
                t.next ? (t.prev = t.next.prev, t.next.prev = t, t.prev && (t.prev.next = t)) :(t.prev = e._last, 
                e._last && (e._last.next = t), e._last = t), (null === e._first || e._first === t.next) && (e._first = t);
            },
            _linkEltOut:function(t) {
                var e = this;
                t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next), t === e._last && (e._last = t.prev), 
                t === e._first && (e._first = t.next);
            },
            putBefore:function(e, r, n) {
                var i = this;
                if (i._dict[i._k(e)]) throw new Error("Item " + e + " already present in OrderedDict");
                var o = n ? t(e, r, i._dict[i._k(n)]) :t(e, r, null);
                if (void 0 === o.next) throw new Error("could not find item to put this one before");
                i._linkEltIn(o), i._dict[i._k(e)] = o, i._size++;
            },
            append:function(t, e) {
                var r = this;
                r.putBefore(t, e, null);
            },
            remove:function(t) {
                var e = this, r = e._dict[e._k(t)];
                if (void 0 === r) throw new Error("Item " + t + " not present in OrderedDict");
                return e._linkEltOut(r), e._size--, delete e._dict[e._k(t)], r.value;
            },
            get:function(t) {
                var e = this;
                return e.has(t) ? e._dict[e._k(t)].value :void 0;
            },
            has:function(t) {
                var r = this;
                return e.has(r._dict, r._k(t));
            },
            forEach:function(t) {
                for (var e = this, n = 0, i = e._first; null !== i; ) {
                    var o = t(i.value, i.key, n);
                    if (o === r.BREAK) return;
                    i = i.next, n++;
                }
            },
            first:function() {
                var t = this;
                return t.empty() ? void 0 :t._first.key;
            },
            firstValue:function() {
                var t = this;
                return t.empty() ? void 0 :t._first.value;
            },
            last:function() {
                var t = this;
                return t.empty() ? void 0 :t._last.key;
            },
            lastValue:function() {
                var t = this;
                return t.empty() ? void 0 :t._last.value;
            },
            prev:function(t) {
                var e = this;
                if (e.has(t)) {
                    var r = e._dict[e._k(t)];
                    if (r.prev) return r.prev.key;
                }
                return null;
            },
            next:function(t) {
                var e = this;
                if (e.has(t)) {
                    var r = e._dict[e._k(t)];
                    if (r.next) return r.next.key;
                }
                return null;
            },
            moveBefore:function(t, e) {
                var r = this, n = r._dict[r._k(t)], i = e ? r._dict[r._k(e)] :null;
                if (void 0 === n) throw new Error("Item to move is not present");
                if (void 0 === i) throw new Error("Could not find element to move this one before");
                i !== n.next && (r._linkEltOut(n), n.next = i, r._linkEltIn(n));
            },
            indexOf:function(t) {
                var e = this, n = null;
                return e.forEach(function(i, o, u) {
                    return e._k(o) === e._k(t) ? (n = u, r.BREAK) :void 0;
                }), n;
            },
            _checkRep:function() {
                var t = this;
                e.each(t._dict, function(t, e) {
                    if (e.next === e) throw new Error("Next is a loop");
                    if (e.prev === e) throw new Error("Prev is a loop");
                });
            }
        }), r.BREAK = {
            "break":!0
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["ordered-dict"] = {
        OrderedDict:r
    };
}();

!function() {
    var n = Package.meteor.Meteor, t, e;
    (function() {
        t = {}, t.active = !1, t.currentComputation = null, t._computations = {};
        var e = function(n) {
            t.currentComputation = n, t.active = !!n;
        }, o = function() {
            return "undefined" != typeof n ? n._debug :"undefined" != typeof console && console.error ? function() {
                console.error.apply(console, arguments);
            } :function() {};
        }, r = function(t) {
            "undefined" != typeof n && n._suppressed_log_expected() && n._suppress_log(t - 1);
        }, i = function(n, t) {
            if (l) throw t;
            var e = [ "Exception from Tracker " + n + " function:" ];
            if (t.stack && t.message && t.name) {
                var i = t.stack.indexOf(t.message);
                if (0 > i || i > t.name.length + 2) {
                    var a = t.name + ": " + t.message;
                    e.push(a);
                }
            }
            e.push(t.stack), r(e.length);
            for (var u = 0; u < e.length; u++) o()(e[u]);
        }, a = function(t) {
            return "undefined" == typeof n || n.isClient ? t :function() {
                var e = arguments;
                n._noYieldsAllowed(function() {
                    t.apply(null, e);
                });
            };
        }, u = 1, c = [], s = !1, p = !1, f = !1, l = !1, d = [], h = function() {
            s || ("undefined" != typeof n ? n._setImmediate(t._runFlush) :setTimeout(t._runFlush, 0), 
            s = !0);
        }, v = !1;
        t.Computation = function(n, e, o) {
            if (!v) throw new Error("Tracker.Computation constructor is private; use Tracker.autorun");
            v = !1;
            var r = this;
            r.stopped = !1, r.invalidated = !1, r.firstRun = !0, r._id = u++, r._onInvalidateCallbacks = [], 
            r._onStopCallbacks = [], r._parent = e, r._func = n, r._onError = o, r._recomputing = !1, 
            t._computations[r._id] = r;
            var i = !0;
            try {
                r._compute(), i = !1;
            } finally {
                r.firstRun = !1, i && r.stop();
            }
        }, t.Computation.prototype.onInvalidate = function(n) {
            var e = this;
            if ("function" != typeof n) throw new Error("onInvalidate requires a function");
            e.invalidated ? t.nonreactive(function() {
                a(n)(e);
            }) :e._onInvalidateCallbacks.push(n);
        }, t.Computation.prototype.onStop = function(n) {
            var e = this;
            if ("function" != typeof n) throw new Error("onStop requires a function");
            e.stopped ? t.nonreactive(function() {
                a(n)(e);
            }) :e._onStopCallbacks.push(n);
        }, t.Computation.prototype.invalidate = function() {
            var n = this;
            if (!n.invalidated) {
                n._recomputing || n.stopped || (h(), c.push(this)), n.invalidated = !0;
                for (var e = 0, o; o = n._onInvalidateCallbacks[e]; e++) t.nonreactive(function() {
                    a(o)(n);
                });
                n._onInvalidateCallbacks = [];
            }
        }, t.Computation.prototype.stop = function() {
            var n = this;
            if (!n.stopped) {
                n.stopped = !0, n.invalidate(), delete t._computations[n._id];
                for (var e = 0, o; o = n._onStopCallbacks[e]; e++) t.nonreactive(function() {
                    a(o)(n);
                });
                n._onStopCallbacks = [];
            }
        }, t.Computation.prototype._compute = function() {
            var n = this;
            n.invalidated = !1;
            var o = t.currentComputation;
            e(n);
            var r = f;
            f = !0;
            try {
                a(n._func)(n);
            } finally {
                e(o), f = r;
            }
        }, t.Computation.prototype._needsRecompute = function() {
            var n = this;
            return n.invalidated && !n.stopped;
        }, t.Computation.prototype._recompute = function() {
            var n = this;
            n._recomputing = !0;
            try {
                if (n._needsRecompute()) try {
                    n._compute();
                } catch (t) {
                    n._onError ? n._onError(t) :i("recompute", t);
                }
            } finally {
                n._recomputing = !1;
            }
        }, t.Dependency = function() {
            this._dependentsById = {};
        }, t.Dependency.prototype.depend = function(n) {
            if (!n) {
                if (!t.active) return !1;
                n = t.currentComputation;
            }
            var e = this, o = n._id;
            return o in e._dependentsById ? !1 :(e._dependentsById[o] = n, n.onInvalidate(function() {
                delete e._dependentsById[o];
            }), !0);
        }, t.Dependency.prototype.changed = function() {
            var n = this;
            for (var t in n._dependentsById) n._dependentsById[t].invalidate();
        }, t.Dependency.prototype.hasDependents = function() {
            var n = this;
            for (var t in n._dependentsById) return !0;
            return !1;
        }, t.flush = function(n) {
            t._runFlush({
                finishSynchronously:!0,
                throwFirstError:n && n._throwFirstError
            });
        }, t._runFlush = function(n) {
            if (p) throw new Error("Can't call Tracker.flush while flushing");
            if (f) throw new Error("Can't flush inside Tracker.autorun");
            n = n || {}, p = !0, s = !0, l = !!n.throwFirstError;
            var e = 0, o = !1;
            try {
                for (;c.length || d.length; ) {
                    for (;c.length; ) {
                        var r = c.shift();
                        if (r._recompute(), r._needsRecompute() && c.unshift(r), !n.finishSynchronously && ++e > 1e3) return void (o = !0);
                    }
                    if (d.length) {
                        var a = d.shift();
                        try {
                            a();
                        } catch (u) {
                            i("afterFlush", u);
                        }
                    }
                }
                o = !0;
            } finally {
                if (o || (p = !1, t._runFlush({
                    finishSynchronously:n.finishSynchronously,
                    throwFirstError:!1
                })), s = !1, p = !1, c.length || d.length) {
                    if (n.finishSynchronously) throw new Error("still have more to do?");
                    setTimeout(h, 10);
                }
            }
        }, t.autorun = function(n, e) {
            if ("function" != typeof n) throw new Error("Tracker.autorun requires a function argument");
            e = e || {}, v = !0;
            var o = new t.Computation(n, t.currentComputation, e.onError);
            return t.active && t.onInvalidate(function() {
                o.stop();
            }), o;
        }, t.nonreactive = function(n) {
            var o = t.currentComputation;
            e(null);
            try {
                return n();
            } finally {
                e(o);
            }
        }, t.onInvalidate = function(n) {
            if (!t.active) throw new Error("Tracker.onInvalidate requires a currentComputation");
            t.currentComputation.onInvalidate(n);
        }, t.afterFlush = function(n) {
            d.push(n), h();
        };
    }).call(this), function() {
        n.flush = t.flush, n.autorun = t.autorun, n.autosubscribe = t.autorun, t.depend = function(n) {
            return n.depend();
        }, e = t;
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.tracker = {
        Tracker:t,
        Deps:e
    };
}();

!function() {
    var t = Package.meteor.Meteor, e = Package.ejson.EJSON, r = Package["id-map"].IdMap, o = Package.random.Random, n;
    (function() {
        n = {}, n._looksLikeObjectID = function(t) {
            return 24 === t.length && t.match(/^[0-9a-f]*$/);
        }, n.ObjectID = function(t) {
            var e = this;
            if (t) {
                if (t = t.toLowerCase(), !n._looksLikeObjectID(t)) throw new Error("Invalid hexadecimal string for creating an ObjectID");
                e._str = t;
            } else e._str = o.hexString(24);
        }, n.ObjectID.prototype.toString = function() {
            var t = this;
            return 'ObjectID("' + t._str + '")';
        }, n.ObjectID.prototype.equals = function(t) {
            var e = this;
            return t instanceof n.ObjectID && e.valueOf() === t.valueOf();
        }, n.ObjectID.prototype.clone = function() {
            var t = this;
            return new n.ObjectID(t._str);
        }, n.ObjectID.prototype.typeName = function() {
            return "oid";
        }, n.ObjectID.prototype.getTimestamp = function() {
            var t = this;
            return parseInt(t._str.substr(0, 8), 16);
        }, n.ObjectID.prototype.valueOf = n.ObjectID.prototype.toJSONValue = n.ObjectID.prototype.toHexString = function() {
            return this._str;
        }, e.addType("oid", function(t) {
            return new n.ObjectID(t);
        }), n.idStringify = function(t) {
            if (t instanceof n.ObjectID) return t.valueOf();
            if ("string" == typeof t) return "" === t ? t :"-" === t.substr(0, 1) || "~" === t.substr(0, 1) || n._looksLikeObjectID(t) || "{" === t.substr(0, 1) ? "-" + t :t;
            if (void 0 === t) return "-";
            if ("object" == typeof t && null !== t) throw new Error("Meteor does not currently support objects other than ObjectID as ids");
            return "~" + JSON.stringify(t);
        }, n.idParse = function(t) {
            return "" === t ? t :"-" === t ? void 0 :"-" === t.substr(0, 1) ? t.substr(1) :"~" === t.substr(0, 1) ? JSON.parse(t.substr(1)) :n._looksLikeObjectID(t) ? new n.ObjectID(t) :t;
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["mongo-id"] = {
        MongoID:n
    };
}();

!function() {
    var e = Package.meteor.Meteor, d = Package.underscore._, n = Package.ejson.EJSON, i;
    (function() {
        i = {}, i.diffQueryChanges = function(e, d, n, a, r) {
            e ? i.diffQueryOrderedChanges(d, n, a, r) :i.diffQueryUnorderedChanges(d, n, a, r);
        }, i.diffQueryUnorderedChanges = function(e, a, r, o) {
            o = o || {};
            var f = o.projectionFn || n.clone;
            if (r.movedBefore) throw new Error("_diffQueryUnordered called with a movedBefore observer!");
            a.forEach(function(a, o) {
                var c = e.get(o);
                if (c) {
                    if (r.changed && !n.equals(c, a)) {
                        var t = f(a), u = f(c), h = i.makeChangedFields(t, u);
                        d.isEmpty(h) || r.changed(o, h);
                    }
                } else if (r.added) {
                    var l = f(a);
                    delete l._id, r.added(a._id, l);
                }
            }), r.removed && e.forEach(function(e, d) {
                a.has(d) || r.removed(d);
            });
        }, i.diffQueryOrderedChanges = function(a, r, o, f) {
            f = f || {};
            var c = f.projectionFn || n.clone, t = {};
            d.each(r, function(d) {
                t[d._id] && e._debug("Duplicate _id in new_results"), t[d._id] = !0;
            });
            var u = {};
            d.each(a, function(d, n) {
                d._id in u && e._debug("Duplicate _id in old_results"), u[d._id] = n;
            });
            for (var h = [], l = 0, s = r.length, g = new Array(s), _ = new Array(s), v = function(e) {
                return u[r[e]._id];
            }, y = 0; s > y; y++) if (void 0 !== u[r[y]._id]) {
                for (var m = l; m > 0 && !(v(g[m - 1]) < v(y)); ) m--;
                _[y] = 0 === m ? -1 :g[m - 1], g[m] = y, m + 1 > l && (l = m + 1);
            }
            for (var p = 0 === l ? -1 :g[l - 1]; p >= 0; ) h.push(p), p = _[p];
            h.reverse(), h.push(r.length), d.each(a, function(e) {
                t[e._id] || o.removed && o.removed(e._id);
            });
            var O = 0;
            d.each(h, function(e) {
                for (var n = r[e] ? r[e]._id :null, f, t, h, l, s, g = O; e > g; g++) t = r[g], 
                d.has(u, t._id) ? (f = a[u[t._id]], l = c(t), s = c(f), h = i.makeChangedFields(l, s), 
                d.isEmpty(h) || o.changed && o.changed(t._id, h), o.movedBefore && o.movedBefore(t._id, n)) :(h = c(t), 
                delete h._id, o.addedBefore && o.addedBefore(t._id, h, n), o.added && o.added(t._id, h));
                n && (t = r[e], f = a[u[t._id]], l = c(t), s = c(f), h = i.makeChangedFields(l, s), 
                d.isEmpty(h) || o.changed && o.changed(t._id, h)), O = e + 1;
            });
        }, i.diffObjects = function(e, n, i) {
            d.each(e, function(e, a) {
                d.has(n, a) ? i.both && i.both(a, e, n[a]) :i.leftOnly && i.leftOnly(a, e);
            }), i.rightOnly && d.each(n, function(n, a) {
                d.has(e, a) || i.rightOnly(a, n);
            });
        }, i.makeChangedFields = function(e, d) {
            var a = {};
            return i.diffObjects(d, e, {
                leftOnly:function(e, d) {
                    a[e] = void 0;
                },
                rightOnly:function(e, d) {
                    a[e] = d;
                },
                both:function(e, d, i) {
                    n.equals(d, i) || (a[e] = i);
                }
            }), a;
        }, i.applyChanges = function(e, n) {
            d.each(n, function(d, n) {
                void 0 === d ? delete e[n] :e[n] = d;
            });
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["diff-sequence"] = {
        DiffSequence:i
    };
}();

!function() {
    var t = Package.meteor.Meteor, n, o;
    (function() {
        n = {
            exports:{}
        };
    }).call(this), function() {
        !function() {
            function t(t) {
                for (var n = [], o = [], a = 0; a < t[0].length; a++) n.push(t[0][a][1]), o.push(t[0][a][0]);
                return n = n.sort(function(t, n) {
                    return t - n;
                }), o = o.sort(function(t, n) {
                    return t - n;
                }), [ [ n[0], o[0] ], [ n[n.length - 1], o[o.length - 1] ] ];
            }
            function o(t, n, o) {
                for (var a = [ [ 0, 0 ] ], r = 0; r < o.length; r++) {
                    for (var e = 0; e < o[r].length; e++) a.push(o[r][e]);
                    a.push([ 0, 0 ]);
                }
                for (var i = !1, r = 0, e = a.length - 1; r < a.length; e = r++) a[r][0] > n != a[e][0] > n && t < (a[e][1] - a[r][1]) * (n - a[r][0]) / (a[e][0] - a[r][0]) + a[r][1] && (i = !i);
                return i;
            }
            var a = {};
            "undefined" != typeof n && n.exports && (n.exports = a), a.lineStringsIntersect = function(t, n) {
                for (var o = [], a = 0; a <= t.coordinates.length - 2; ++a) for (var r = 0; r <= n.coordinates.length - 2; ++r) {
                    var e = {
                        x:t.coordinates[a][1],
                        y:t.coordinates[a][0]
                    }, i = {
                        x:t.coordinates[a + 1][1],
                        y:t.coordinates[a + 1][0]
                    }, s = {
                        x:n.coordinates[r][1],
                        y:n.coordinates[r][0]
                    }, c = {
                        x:n.coordinates[r + 1][1],
                        y:n.coordinates[r + 1][0]
                    }, u = (c.x - s.x) * (e.y - s.y) - (c.y - s.y) * (e.x - s.x), h = (i.x - e.x) * (e.y - s.y) - (i.y - e.y) * (e.x - s.x), d = (c.y - s.y) * (i.x - e.x) - (c.x - s.x) * (i.y - e.y);
                    if (0 != d) {
                        var l = u / d, y = h / d;
                        l >= 0 && 1 >= l && y >= 0 && 1 >= y && o.push({
                            type:"Point",
                            coordinates:[ e.x + l * (i.x - e.x), e.y + l * (i.y - e.y) ]
                        });
                    }
                }
                return 0 == o.length && (o = !1), o;
            }, a.pointInBoundingBox = function(t, n) {
                return !(t.coordinates[1] < n[0][0] || t.coordinates[1] > n[1][0] || t.coordinates[0] < n[0][1] || t.coordinates[0] > n[1][1]);
            }, a.pointInPolygon = function(n, r) {
                for (var e = "Polygon" == r.type ? [ r.coordinates ] :r.coordinates, i = !1, s = 0; s < e.length; s++) a.pointInBoundingBox(n, t(e[s])) && (i = !0);
                if (!i) return !1;
                for (var c = !1, s = 0; s < e.length; s++) o(n.coordinates[1], n.coordinates[0], e[s]) && (c = !0);
                return c;
            }, a.numberToRadius = function(t) {
                return t * Math.PI / 180;
            }, a.numberToDegree = function(t) {
                return 180 * t / Math.PI;
            }, a.drawCircle = function(t, n, o) {
                for (var r = [ n.coordinates[1], n.coordinates[0] ], e = t / 1e3 / 6371, i = [ a.numberToRadius(r[0]), a.numberToRadius(r[1]) ], o = o || 15, s = [ [ r[0], r[1] ] ], c = 0; o > c; c++) {
                    var u = 2 * Math.PI * c / o, h = Math.asin(Math.sin(i[0]) * Math.cos(e) + Math.cos(i[0]) * Math.sin(e) * Math.cos(u)), d = i[1] + Math.atan2(Math.sin(u) * Math.sin(e) * Math.cos(i[0]), Math.cos(e) - Math.sin(i[0]) * Math.sin(h));
                    s[c] = [], s[c][1] = a.numberToDegree(h), s[c][0] = a.numberToDegree(d);
                }
                return {
                    type:"Polygon",
                    coordinates:[ s ]
                };
            }, a.rectangleCentroid = function(t) {
                var n = t.coordinates[0], o = n[0][0], a = n[0][1], r = n[2][0], e = n[2][1], i = r - o, s = e - a;
                return {
                    type:"Point",
                    coordinates:[ o + i / 2, a + s / 2 ]
                };
            }, a.pointDistance = function(t, n) {
                var o = t.coordinates[0], r = t.coordinates[1], e = n.coordinates[0], i = n.coordinates[1], s = a.numberToRadius(i - r), c = a.numberToRadius(e - o), u = Math.pow(Math.sin(s / 2), 2) + Math.cos(a.numberToRadius(r)) * Math.cos(a.numberToRadius(i)) * Math.pow(Math.sin(c / 2), 2), h = 2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u));
                return 6371 * h * 1e3;
            }, a.geometryWithinRadius = function(t, n, o) {
                if ("Point" == t.type) return a.pointDistance(t, n) <= o;
                if ("LineString" == t.type || "Polygon" == t.type) {
                    var r = {}, e;
                    e = "Polygon" == t.type ? t.coordinates[0] :t.coordinates;
                    for (var i in e) if (r.coordinates = e[i], a.pointDistance(r, n) > o) return !1;
                }
                return !0;
            }, a.area = function(t) {
                for (var n = 0, o = t.coordinates[0], a = o.length - 1, r, e, i = 0; i < o.length; a = i++) {
                    var r = {
                        x:o[i][1],
                        y:o[i][0]
                    }, e = {
                        x:o[a][1],
                        y:o[a][0]
                    };
                    n += r.x * e.y, n -= r.y * e.x;
                }
                return n /= 2;
            }, a.centroid = function(t) {
                for (var n, o = 0, r = 0, e = t.coordinates[0], i = e.length - 1, s, c, u = 0; u < e.length; i = u++) {
                    var s = {
                        x:e[u][1],
                        y:e[u][0]
                    }, c = {
                        x:e[i][1],
                        y:e[i][0]
                    };
                    n = s.x * c.y - c.x * s.y, o += (s.x + c.x) * n, r += (s.y + c.y) * n;
                }
                return n = 6 * a.area(t), {
                    type:"Point",
                    coordinates:[ r / n, o / n ]
                };
            }, a.simplify = function(t, n) {
                n = n || 20, t = t.map(function(t) {
                    return {
                        lng:t.coordinates[0],
                        lat:t.coordinates[1]
                    };
                });
                var o, a, r, e, i, s, c, u, h, d, l, y, M, f, g, x, p, v, P, b = Math.PI / 180 * .5, m = new Array(), T = new Array(), I = new Array();
                if (t.length < 3) return t;
                for (o = t.length, d = 360 * n / (2 * Math.PI * 6378137), d *= d, r = 0, T[0] = 0, 
                I[0] = o - 1, a = 1; a > 0; ) if (e = T[a - 1], i = I[a - 1], a--, i - e > 1) {
                    for (l = t[i].lng() - t[e].lng(), y = t[i].lat() - t[e].lat(), Math.abs(l) > 180 && (l = 360 - Math.abs(l)), 
                    l *= Math.cos(b * (t[i].lat() + t[e].lat())), M = l * l + y * y, s = e + 1, c = e, 
                    h = -1; i > s; s++) f = t[s].lng() - t[e].lng(), g = t[s].lat() - t[e].lat(), Math.abs(f) > 180 && (f = 360 - Math.abs(f)), 
                    f *= Math.cos(b * (t[s].lat() + t[e].lat())), x = f * f + g * g, p = t[s].lng() - t[i].lng(), 
                    v = t[s].lat() - t[i].lat(), Math.abs(p) > 180 && (p = 360 - Math.abs(p)), p *= Math.cos(b * (t[s].lat() + t[i].lat())), 
                    P = p * p + v * v, u = x >= M + P ? P :P >= M + x ? x :(f * y - g * l) * (f * y - g * l) / M, 
                    u > h && (c = s, h = u);
                    d > h ? (m[r] = e, r++) :(a++, T[a - 1] = c, I[a - 1] = i, a++, T[a - 1] = e, I[a - 1] = c);
                } else m[r] = e, r++;
                m[r] = o - 1, r++;
                for (var R = new Array(), s = 0; r > s; s++) R.push(t[m[s]]);
                return R.map(function(t) {
                    return {
                        type:"Point",
                        coordinates:[ t.lng, t.lat ]
                    };
                });
            }, a.destinationPoint = function(t, n, o) {
                o /= 6371, n = a.numberToRadius(n);
                var r = a.numberToRadius(t.coordinates[0]), e = a.numberToRadius(t.coordinates[1]), i = Math.asin(Math.sin(r) * Math.cos(o) + Math.cos(r) * Math.sin(o) * Math.cos(n)), s = e + Math.atan2(Math.sin(n) * Math.sin(o) * Math.cos(r), Math.cos(o) - Math.sin(r) * Math.sin(i));
                return s = (s + 3 * Math.PI) % (2 * Math.PI) - Math.PI, {
                    type:"Point",
                    coordinates:[ a.numberToDegree(i), a.numberToDegree(s) ]
                };
            };
        }();
    }.call(this), function() {
        o = n.exports;
    }.call(this), "undefined" == typeof Package && (Package = {}), Package["geojson-utils"] = {
        GeoJSON:o
    };
}();

!function() {
    var e = Package.meteor.Meteor, r = Package.underscore._, t = Package.ejson.EJSON, n = Package["id-map"].IdMap, o = Package["ordered-dict"].OrderedDict, i = Package.tracker.Tracker, a = Package.tracker.Deps, s = Package["mongo-id"].MongoID, c = Package.random.Random, u = Package["diff-sequence"].DiffSequence, d = Package["geojson-utils"].GeoJSON, f, l, h, p, v, _, m, y, g, w, $, b, E, I, C, O;
    (function() {
        f = function(r) {
            var t = this;
            t.name = r, t._docs = new f._IdMap(), t._observeQueue = new e._SynchronousQueue(), 
            t.next_qid = 1, t.queries = {}, t._savedOriginals = null, t.paused = !1;
        }, l = {}, h = {}, p = function(e) {
            var r = new Error(e);
            return r.name = "MinimongoError", r;
        }, f.prototype.find = function(e, r) {
            return 0 === arguments.length && (e = {}), new f.Cursor(this, e, r);
        }, f.Cursor = function(e, r, t) {
            var n = this;
            t || (t = {}), n.collection = e, n.sorter = null, n.matcher = new l.Matcher(r), 
            f._selectorIsId(r) ? n._selectorId = r :f._selectorIsIdPerhapsAsObject(r) ? n._selectorId = r._id :(n._selectorId = void 0, 
            (n.matcher.hasGeoQuery() || t.sort) && (n.sorter = new l.Sorter(t.sort || [], {
                matcher:n.matcher
            }))), n.skip = t.skip, n.limit = t.limit, n.fields = t.fields, n._projectionFn = f._compileProjection(n.fields || {}), 
            n._transform = f.wrapTransform(t.transform), "undefined" != typeof i && (n.reactive = void 0 === t.reactive ? !0 :t.reactive);
        }, f.Cursor.prototype.rewind = function() {}, f.prototype.findOne = function(e, r) {
            return 0 === arguments.length && (e = {}), r = r || {}, r.limit = 1, this.find(e, r).fetch()[0];
        }, f.Cursor.prototype.forEach = function(e, t) {
            var n = this, o = n._getRawObjects({
                ordered:!0
            });
            n.reactive && n._depend({
                addedBefore:!0,
                removed:!0,
                changed:!0,
                movedBefore:!0
            }), r.each(o, function(r, o) {
                r = n._projectionFn(r), n._transform && (r = n._transform(r)), e.call(t, r, o, n);
            });
        }, f.Cursor.prototype.getTransform = function() {
            return this._transform;
        }, f.Cursor.prototype.map = function(e, r) {
            var t = this, n = [];
            return t.forEach(function(o, i) {
                n.push(e.call(r, o, i, t));
            }), n;
        }, f.Cursor.prototype.fetch = function() {
            var e = this, r = [];
            return e.forEach(function(e) {
                r.push(e);
            }), r;
        }, f.Cursor.prototype.count = function() {
            var e = this;
            return e.reactive && e._depend({
                added:!0,
                removed:!0
            }, !0), e._getRawObjects({
                ordered:!0
            }).length;
        }, f.Cursor.prototype._publishCursor = function(e) {
            var r = this;
            if (!r.collection.name) throw new Error("Can't publish a cursor from a collection without a name.");
            var t = r.collection.name;
            if (!Package.mongo) throw new Error("Can't publish from Minimongo without the `mongo` package.");
            return Package.mongo.Mongo.Collection._publishCursor(r, e, t);
        }, f.Cursor.prototype._getCollectionName = function() {
            var e = this;
            return e.collection.name;
        }, f._observeChangesCallbacksAreOrdered = function(e) {
            if (e.added && e.addedBefore) throw new Error("Please specify only one of added() and addedBefore()");
            return !(!e.addedBefore && !e.movedBefore);
        }, f._observeCallbacksAreOrdered = function(e) {
            if (e.addedAt && e.added) throw new Error("Please specify only one of added() and addedAt()");
            if (e.changedAt && e.changed) throw new Error("Please specify only one of changed() and changedAt()");
            if (e.removed && e.removedAt) throw new Error("Please specify only one of removed() and removedAt()");
            return !!(e.addedAt || e.movedTo || e.changedAt || e.removedAt);
        }, f.ObserveHandle = function() {}, r.extend(f.Cursor.prototype, {
            observe:function(e) {
                var r = this;
                return f._observeFromObserveChanges(r, e);
            },
            observeChanges:function(e) {
                var n = this, o = f._observeChangesCallbacksAreOrdered(e);
                if (!e._allow_unordered && !o && (n.skip || n.limit)) throw new Error("must use ordered observe (ie, 'addedBefore' instead of 'added') with skip or limit");
                if (n.fields && (0 === n.fields._id || n.fields._id === !1)) throw Error("You may not observe a cursor with {fields: {_id: 0}}");
                var a = {
                    matcher:n.matcher,
                    sorter:o && n.sorter,
                    distances:n.matcher.hasGeoQuery() && o && new f._IdMap(),
                    resultsSnapshot:null,
                    ordered:o,
                    cursor:n,
                    projectionFn:n._projectionFn
                }, s;
                n.reactive && (s = n.collection.next_qid++, n.collection.queries[s] = a), a.results = n._getRawObjects({
                    ordered:o,
                    distances:a.distances
                }), n.collection.paused && (a.resultsSnapshot = o ? [] :new f._IdMap());
                var c = function(e) {
                    return e ? function() {
                        var r = this, t = arguments;
                        n.collection.paused || n.collection._observeQueue.queueTask(function() {
                            e.apply(r, t);
                        });
                    } :function() {};
                };
                if (a.added = c(e.added), a.changed = c(e.changed), a.removed = c(e.removed), o && (a.addedBefore = c(e.addedBefore), 
                a.movedBefore = c(e.movedBefore)), !e._suppress_initial && !n.collection.paused) {
                    var u = o ? r.bind(r.each, null, a.results) :r.bind(a.results.forEach, a.results);
                    u(function(e) {
                        var r = t.clone(e);
                        delete r._id, o && a.addedBefore(e._id, n._projectionFn(r), null), a.added(e._id, n._projectionFn(r));
                    });
                }
                var d = new f.ObserveHandle();
                return r.extend(d, {
                    collection:n.collection,
                    stop:function() {
                        n.reactive && delete n.collection.queries[s];
                    }
                }), n.reactive && i.active && i.onInvalidate(function() {
                    d.stop();
                }), n.collection._observeQueue.drain(), d;
            }
        }), f.Cursor.prototype._getRawObjects = function(e) {
            var r = this;
            e = e || {};
            var t = e.ordered ? [] :new f._IdMap();
            if (void 0 !== r._selectorId) {
                if (r.skip) return t;
                var n = r.collection._docs.get(r._selectorId);
                return n && (e.ordered ? t.push(n) :t.set(r._selectorId, n)), t;
            }
            var o;
            if (r.matcher.hasGeoQuery() && e.ordered && (e.distances ? (o = e.distances, o.clear()) :o = new f._IdMap()), 
            r.collection._docs.forEach(function(n, i) {
                var a = r.matcher.documentMatches(n);
                return a.result && (e.ordered ? (t.push(n), o && void 0 !== a.distance && o.set(i, a.distance)) :t.set(i, n)), 
                !r.limit || r.skip || r.sorter || t.length !== r.limit ? !0 :!1;
            }), !e.ordered) return t;
            if (r.sorter) {
                var i = r.sorter.getComparator({
                    distances:o
                });
                t.sort(i);
            }
            var a = r.skip || 0, s = r.limit ? r.limit + a :t.length;
            return t.slice(a, s);
        }, f.Cursor.prototype._depend = function(e, t) {
            var n = this;
            if (i.active) {
                var o = new i.Dependency();
                o.depend();
                var a = r.bind(o.changed, o), s = {
                    _suppress_initial:!0,
                    _allow_unordered:t
                };
                r.each([ "added", "changed", "removed", "addedBefore", "movedBefore" ], function(r) {
                    e[r] && (s[r] = a);
                }), n.observeChanges(s);
            }
        }, f.prototype.insert = function(n, o) {
            var i = this;
            n = t.clone(n), r.has(n, "_id") || (n._id = f._useOID ? new s.ObjectID() :c.id());
            var a = n._id;
            if (i._docs.has(a)) throw p("Duplicate _id '" + a + "'");
            i._saveOriginal(a, void 0), i._docs.set(a, n);
            var u = [];
            for (var d in i.queries) {
                var l = i.queries[d], h = l.matcher.documentMatches(n);
                h.result && (l.distances && void 0 !== h.distance && l.distances.set(a, h.distance), 
                l.cursor.skip || l.cursor.limit ? u.push(d) :f._insertInResults(l, n));
            }
            return r.each(u, function(e) {
                i.queries[e] && i._recomputeResults(i.queries[e]);
            }), i._observeQueue.drain(), o && e.defer(function() {
                o(null, a);
            }), a;
        }, f.prototype._eachPossiblyMatchingDoc = function(e, r) {
            var t = this, n = f._idsMatchedBySelector(e);
            if (n) for (var o = 0; o < n.length; ++o) {
                var i = n[o], a = t._docs.get(i);
                if (a) {
                    var s = r(a, i);
                    if (s === !1) break;
                }
            } else t._docs.forEach(r);
        }, f.prototype.remove = function(n, o) {
            var i = this;
            if (i.paused && !i._savedOriginals && t.equals(n, {})) {
                var a = i._docs.size();
                return i._docs.clear(), r.each(i.queries, function(e) {
                    e.ordered ? e.results = [] :e.results.clear();
                }), o && e.defer(function() {
                    o(null, a);
                }), a;
            }
            var s = new l.Matcher(n), c = [];
            i._eachPossiblyMatchingDoc(n, function(e, r) {
                s.documentMatches(e).result && c.push(r);
            });
            for (var u = [], d = [], h = 0; h < c.length; h++) {
                var p = c[h], v = i._docs.get(p);
                r.each(i.queries, function(e, r) {
                    e.matcher.documentMatches(v).result && (e.cursor.skip || e.cursor.limit ? u.push(r) :d.push({
                        qid:r,
                        doc:v
                    }));
                }), i._saveOriginal(p, v), i._docs.remove(p);
            }
            return r.each(d, function(e) {
                var r = i.queries[e.qid];
                r && (r.distances && r.distances.remove(e.doc._id), f._removeFromResults(r, e.doc));
            }), r.each(u, function(e) {
                var r = i.queries[e];
                r && i._recomputeResults(r);
            }), i._observeQueue.drain(), a = c.length, o && e.defer(function() {
                o(null, a);
            }), a;
        }, f.prototype.update = function(n, o, i, a) {
            var s = this;
            !a && i instanceof Function && (a = i, i = null), i || (i = {});
            var c = new l.Matcher(n), u = {};
            r.each(s.queries, function(e, r) {
                !e.cursor.skip && !e.cursor.limit || s.paused || (u[r] = t.clone(e.results));
            });
            var d = {}, h = 0;
            s._eachPossiblyMatchingDoc(n, function(e, r) {
                var t = c.documentMatches(e);
                return t.result && (s._saveOriginal(r, e), s._modifyAndNotify(e, o, d, t.arrayIndices), 
                ++h, !i.multi) ? !1 :!0;
            }), r.each(d, function(e, r) {
                var t = s.queries[r];
                t && s._recomputeResults(t, u[r]);
            }), s._observeQueue.drain();
            var p;
            if (0 === h && i.upsert) {
                var v = f._removeDollarOperators(n);
                f._modify(v, o, {
                    isInsert:!0
                }), !v._id && i.insertedId && (v._id = i.insertedId), p = s.insert(v), h = 1;
            }
            var _;
            return i._returnObject ? (_ = {
                numberAffected:h
            }, void 0 !== p && (_.insertedId = p)) :_ = h, a && e.defer(function() {
                a(null, _);
            }), _;
        }, f.prototype.upsert = function(e, t, n, o) {
            var i = this;
            return o || "function" != typeof n || (o = n, n = {}), i.update(e, t, r.extend({}, n, {
                upsert:!0,
                _returnObject:!0
            }), o);
        }, f.prototype._modifyAndNotify = function(e, r, n, o) {
            var i = this, a = {};
            for (var s in i.queries) {
                var c = i.queries[s];
                c.ordered ? a[s] = c.matcher.documentMatches(e).result :a[s] = c.results.has(e._id);
            }
            var u = t.clone(e);
            f._modify(e, r, {
                arrayIndices:o
            });
            for (s in i.queries) {
                c = i.queries[s];
                var d = a[s], l = c.matcher.documentMatches(e), h = l.result;
                h && c.distances && void 0 !== l.distance && c.distances.set(e._id, l.distance), 
                c.cursor.skip || c.cursor.limit ? (d || h) && (n[s] = !0) :d && !h ? f._removeFromResults(c, e) :!d && h ? f._insertInResults(c, e) :d && h && f._updateInResults(c, e, u);
            }
        }, f._insertInResults = function(e, r) {
            var n = t.clone(r);
            if (delete n._id, e.ordered) {
                if (e.sorter) {
                    var o = f._insertInSortedList(e.sorter.getComparator({
                        distances:e.distances
                    }), e.results, r), i = e.results[o + 1];
                    i = i ? i._id :null, e.addedBefore(r._id, e.projectionFn(n), i);
                } else e.addedBefore(r._id, e.projectionFn(n), null), e.results.push(r);
                e.added(r._id, e.projectionFn(n));
            } else e.added(r._id, e.projectionFn(n)), e.results.set(r._id, r);
        }, f._removeFromResults = function(e, r) {
            if (e.ordered) {
                var t = f._findInOrderedResults(e, r);
                e.removed(r._id), e.results.splice(t, 1);
            } else {
                var n = r._id;
                e.removed(r._id), e.results.remove(n);
            }
        }, f._updateInResults = function(e, n, o) {
            if (!t.equals(n._id, o._id)) throw new Error("Can't change a doc's _id while updating");
            var i = e.projectionFn, a = u.makeChangedFields(i(n), i(o));
            if (!e.ordered) return void (r.isEmpty(a) || (e.changed(n._id, a), e.results.set(n._id, n)));
            var s = f._findInOrderedResults(e, n);
            if (r.isEmpty(a) || e.changed(n._id, a), e.sorter) {
                e.results.splice(s, 1);
                var c = f._insertInSortedList(e.sorter.getComparator({
                    distances:e.distances
                }), e.results, n);
                if (s !== c) {
                    var d = e.results[c + 1];
                    d = d ? d._id :null, e.movedBefore && e.movedBefore(n._id, d);
                }
            }
        }, f.prototype._recomputeResults = function(e, r) {
            var t = this;
            t.paused || r || (r = e.results), e.distances && e.distances.clear(), e.results = e.cursor._getRawObjects({
                ordered:e.ordered,
                distances:e.distances
            }), t.paused || f._diffQueryChanges(e.ordered, r, e.results, e, {
                projectionFn:e.projectionFn
            });
        }, f._findInOrderedResults = function(e, r) {
            if (!e.ordered) throw new Error("Can't call _findInOrderedResults on unordered query");
            for (var t = 0; t < e.results.length; t++) if (e.results[t] === r) return t;
            throw Error("object missing from query");
        }, f._binarySearch = function(e, r, t) {
            for (var n = 0, o = r.length; o > 0; ) {
                var i = Math.floor(o / 2);
                e(t, r[n + i]) >= 0 ? (n += i + 1, o -= i + 1) :o = i;
            }
            return n;
        }, f._insertInSortedList = function(e, r, t) {
            if (0 === r.length) return r.push(t), 0;
            var n = f._binarySearch(e, r, t);
            return r.splice(n, 0, t), n;
        }, f.prototype.saveOriginals = function() {
            var e = this;
            if (e._savedOriginals) throw new Error("Called saveOriginals twice without retrieveOriginals");
            e._savedOriginals = new f._IdMap();
        }, f.prototype.retrieveOriginals = function() {
            var e = this;
            if (!e._savedOriginals) throw new Error("Called retrieveOriginals without saveOriginals");
            var r = e._savedOriginals;
            return e._savedOriginals = null, r;
        }, f.prototype._saveOriginal = function(e, r) {
            var n = this;
            n._savedOriginals && (n._savedOriginals.has(e) || n._savedOriginals.set(e, t.clone(r)));
        }, f.prototype.pauseObservers = function() {
            if (!this.paused) {
                this.paused = !0;
                for (var e in this.queries) {
                    var r = this.queries[e];
                    r.resultsSnapshot = t.clone(r.results);
                }
            }
        }, f.prototype.resumeObservers = function() {
            var e = this;
            if (this.paused) {
                this.paused = !1;
                for (var r in this.queries) {
                    var t = e.queries[r];
                    f._diffQueryChanges(t.ordered, t.resultsSnapshot, t.results, t, {
                        projectionFn:t.projectionFn
                    }), t.resultsSnapshot = null;
                }
                e._observeQueue.drain();
            }
        };
    }).call(this), function() {
        f.wrapTransform = function(e) {
            if (!e) return null;
            if (e.__wrappedTransform__) return e;
            var n = function(n) {
                if (!r.has(n, "_id")) throw new Error("can only transform documents with _id");
                var o = n._id, a = i.nonreactive(function() {
                    return e(n);
                });
                if (!_(a)) throw new Error("transform must return object");
                if (r.has(a, "_id")) {
                    if (!t.equals(a._id, o)) throw new Error("transformed document can't have different _id");
                } else a._id = o;
                return a;
            };
            return n.__wrappedTransform__ = !0, n;
        };
    }.call(this), function() {
        v = function(e) {
            return r.isArray(e) && !t.isBinary(e);
        }, _ = f._isPlainObject = function(e) {
            return e && 3 === f._f._type(e);
        }, m = function(e) {
            return v(e) || _(e);
        }, y = function(e, t) {
            if (!_(e)) return !1;
            var n = void 0;
            return r.each(e, function(r, o) {
                var i = "$" === o.substr(0, 1);
                if (void 0 === n) n = i; else if (n !== i) {
                    if (!t) throw new Error("Inconsistent operator: " + JSON.stringify(e));
                    n = !1;
                }
            }), !!n;
        }, g = function(e) {
            return /^[0-9]+$/.test(e);
        };
    }.call(this), function() {
        l.Matcher = function(e) {
            var r = this;
            r._paths = {}, r._hasGeoQuery = !1, r._hasWhere = !1, r._isSimple = !0, r._matchingDocument = void 0, 
            r._selector = null, r._docMatcher = r._compileSelector(e);
        }, r.extend(l.Matcher.prototype, {
            documentMatches:function(e) {
                if (!e || "object" != typeof e) throw Error("documentMatches needs a document");
                return this._docMatcher(e);
            },
            hasGeoQuery:function() {
                return this._hasGeoQuery;
            },
            hasWhere:function() {
                return this._hasWhere;
            },
            isSimple:function() {
                return this._isSimple;
            },
            _compileSelector:function(r) {
                var n = this;
                if (r instanceof Function) return n._isSimple = !1, n._selector = r, n._recordPathUsed(""), 
                function(e) {
                    return {
                        result:!!r.call(e)
                    };
                };
                if (f._selectorIsId(r)) return n._selector = {
                    _id:r
                }, n._recordPathUsed("_id"), function(e) {
                    return {
                        result:t.equals(e._id, r)
                    };
                };
                if (!r || "_id" in r && !r._id) return n._isSimple = !1, S;
                if ("boolean" == typeof r || v(r) || t.isBinary(r)) throw new Error("Invalid selector: " + r);
                return n._selector = t.clone(r), e(r, n, {
                    isRoot:!0
                });
            },
            _recordPathUsed:function(e) {
                this._paths[e] = !0;
            },
            _getPaths:function() {
                return r.keys(this._paths);
            }
        });
        var e = function(e, t, o) {
            o = o || {};
            var i = [];
            return r.each(e, function(e, a) {
                if ("$" === a.substr(0, 1)) {
                    if (!r.has(c, a)) throw new Error("Unrecognized logical operator: " + a);
                    t._isSimple = !1, i.push(c[a](e, t, o.inElemMatch));
                } else {
                    o.inElemMatch || t._recordPathUsed(a);
                    var s = E(a), u = n(e, t, o.isRoot);
                    i.push(function(e) {
                        var r = s(e);
                        return u(r);
                    });
                }
            }), M(i);
        }, n = function(e, r, t) {
            return e instanceof RegExp ? (r._isSimple = !1, o(w(e))) :y(e) ? i(e, r, t) :o($(e));
        }, o = function(e, t) {
            return t = t || {}, function(n) {
                var o = n;
                t.dontExpandLeafArrays || (o = I(n, t.dontIncludeLeafArrays));
                var i = {};
                return i.result = r.any(o, function(r) {
                    var t = e(r.value);
                    return "number" == typeof t && (r.arrayIndices || (r.arrayIndices = [ t ]), t = !0), 
                    t && r.arrayIndices && (i.arrayIndices = r.arrayIndices), t;
                }), i;
            };
        };
        w = function(e) {
            return function(t) {
                return t instanceof RegExp ? r.isEqual(t, e) :"string" != typeof t ? !1 :(e.lastIndex = 0, 
                e.test(t));
            };
        }, $ = function(e) {
            if (y(e)) throw Error("Can't create equalityValueSelector for operator object");
            return null == e ? function(e) {
                return null == e;
            } :function(r) {
                return f._f._equal(e, r);
            };
        };
        var i = function(e, t, n) {
            var i = [];
            return r.each(e, function(a, s) {
                var c = r.contains([ "$lt", "$lte", "$gt", "$gte" ], s) && r.isNumber(a), u = "$ne" === s && !r.isObject(a), d = r.contains([ "$in", "$nin" ], s) && r.isArray(a) && !r.any(a, r.isObject);
                if ("$eq" === s || c || d || u || (t._isSimple = !1), r.has(p, s)) i.push(p[s](a, e, t, n)); else {
                    if (!r.has(b, s)) throw new Error("Unrecognized operator: " + s);
                    var f = b[s];
                    i.push(o(f.compileElementSelector(a, e, t), f));
                }
            }), P(i);
        }, a = function(t, n, o) {
            if (!v(t) || r.isEmpty(t)) throw Error("$and/$or/$nor must be nonempty array");
            return r.map(t, function(r) {
                if (!_(r)) throw Error("$or/$and/$nor entries need to be full objects");
                return e(r, n, {
                    inElemMatch:o
                });
            });
        }, c = {
            $and:function(e, r, t) {
                var n = a(e, r, t);
                return M(n);
            },
            $or:function(e, t, n) {
                var o = a(e, t, n);
                return 1 === o.length ? o[0] :function(e) {
                    var t = r.any(o, function(r) {
                        return r(e).result;
                    });
                    return {
                        result:t
                    };
                };
            },
            $nor:function(e, t, n) {
                var o = a(e, t, n);
                return function(e) {
                    var t = r.all(o, function(r) {
                        return !r(e).result;
                    });
                    return {
                        result:t
                    };
                };
            },
            $where:function(e, r) {
                return r._recordPathUsed(""), r._hasWhere = !0, e instanceof Function || (e = Function("obj", "return " + e)), 
                function(r) {
                    return {
                        result:e.call(r, r)
                    };
                };
            },
            $comment:function() {
                return function() {
                    return {
                        result:!0
                    };
                };
            }
        }, u = function(e) {
            return function(r) {
                var t = e(r);
                return {
                    result:!t.result
                };
            };
        }, p = {
            $not:function(e, r, t) {
                return u(n(e, t));
            },
            $ne:function(e) {
                return u(o($(e)));
            },
            $nin:function(e) {
                return u(o(b.$in.compileElementSelector(e)));
            },
            $exists:function(e) {
                var r = o(function(e) {
                    return void 0 !== e;
                });
                return e ? r :u(r);
            },
            $options:function(e, t) {
                if (!r.has(t, "$regex")) throw Error("$options needs a $regex");
                return j;
            },
            $maxDistance:function(e, r) {
                if (!r.$near) throw Error("$maxDistance needs a $near");
                return j;
            },
            $all:function(e, t, o) {
                if (!v(e)) throw Error("$all requires array");
                if (r.isEmpty(e)) return S;
                var i = [];
                return r.each(e, function(e) {
                    if (y(e)) throw Error("no $ expressions in $all");
                    i.push(n(e, o));
                }), P(i);
            },
            $near:function(e, t, n, o) {
                if (!o) throw Error("$near can't be inside another $ operator");
                n._hasGeoQuery = !0;
                var i, a, s;
                if (_(e) && r.has(e, "$geometry")) i = e.$maxDistance, a = e.$geometry, s = function(e) {
                    return e && e.type ? "Point" === e.type ? d.pointDistance(a, e) :d.geometryWithinRadius(e, a, i) ? 0 :i + 1 :null;
                }; else {
                    if (i = t.$maxDistance, !v(e) && !_(e)) throw Error("$near argument must be coordinate pair or GeoJSON");
                    a = O(e), s = function(e) {
                        return v(e) || _(e) ? C(a, e) :null;
                    };
                }
                return function(e) {
                    e = I(e);
                    var t = {
                        result:!1
                    };
                    return r.each(e, function(e) {
                        var r = s(e.value);
                        null === r || r > i || void 0 !== t.distance && t.distance <= r || (t.result = !0, 
                        t.distance = r, e.arrayIndices ? t.arrayIndices = e.arrayIndices :delete t.arrayIndices);
                    }), t;
                };
            }
        }, C = function(e, t) {
            e = O(e), t = O(t);
            var n = e[0] - t[0], o = e[1] - t[1];
            return r.isNaN(n) || r.isNaN(o) ? null :Math.sqrt(n * n + o * o);
        }, O = function(e) {
            return r.map(e, r.identity);
        }, k = function(e) {
            return {
                compileElementSelector:function(r) {
                    if (v(r)) return function() {
                        return !1;
                    };
                    void 0 === r && (r = null);
                    var t = f._f._type(r);
                    return function(n) {
                        return void 0 === n && (n = null), f._f._type(n) !== t ? !1 :e(f._f._cmp(n, r));
                    };
                }
            };
        };
        b = {
            $lt:k(function(e) {
                return 0 > e;
            }),
            $gt:k(function(e) {
                return e > 0;
            }),
            $lte:k(function(e) {
                return 0 >= e;
            }),
            $gte:k(function(e) {
                return e >= 0;
            }),
            $mod:{
                compileElementSelector:function(e) {
                    if (!v(e) || 2 !== e.length || "number" != typeof e[0] || "number" != typeof e[1]) throw Error("argument to $mod must be an array of two numbers");
                    var r = e[0], t = e[1];
                    return function(e) {
                        return "number" == typeof e && e % r === t;
                    };
                }
            },
            $in:{
                compileElementSelector:function(e) {
                    if (!v(e)) throw Error("$in needs an array");
                    var t = [];
                    return r.each(e, function(e) {
                        if (e instanceof RegExp) t.push(w(e)); else {
                            if (y(e)) throw Error("cannot nest $ under $in");
                            t.push($(e));
                        }
                    }), function(e) {
                        return void 0 === e && (e = null), r.any(t, function(r) {
                            return r(e);
                        });
                    };
                }
            },
            $size:{
                dontExpandLeafArrays:!0,
                compileElementSelector:function(e) {
                    if ("string" == typeof e) e = 0; else if ("number" != typeof e) throw Error("$size needs a number");
                    return function(r) {
                        return v(r) && r.length === e;
                    };
                }
            },
            $type:{
                dontIncludeLeafArrays:!0,
                compileElementSelector:function(e) {
                    if ("number" != typeof e) throw Error("$type needs a number");
                    return function(r) {
                        return void 0 !== r && f._f._type(r) === e;
                    };
                }
            },
            $regex:{
                compileElementSelector:function(e, r) {
                    if (!("string" == typeof e || e instanceof RegExp)) throw Error("$regex has to be a string or RegExp");
                    var t;
                    if (void 0 !== r.$options) {
                        if (/[^gim]/.test(r.$options)) throw new Error("Only the i, m, and g regexp options are supported");
                        var n = e instanceof RegExp ? e.source :e;
                        t = new RegExp(n, r.$options);
                    } else t = e instanceof RegExp ? e :new RegExp(e);
                    return w(t);
                }
            },
            $elemMatch:{
                dontExpandLeafArrays:!0,
                compileElementSelector:function(r, t, o) {
                    if (!_(r)) throw Error("$elemMatch need an object");
                    var i, a;
                    return y(r, !0) ? (i = n(r, o), a = !1) :(i = e(r, o, {
                        inElemMatch:!0
                    }), a = !0), function(e) {
                        if (!v(e)) return !1;
                        for (var r = 0; r < e.length; ++r) {
                            var t = e[r], n;
                            if (a) {
                                if (!_(t) && !v(t)) return !1;
                                n = t;
                            } else n = [ {
                                value:t,
                                dontIterate:!0
                            } ];
                            if (i(n).result) return r;
                        }
                        return !1;
                    };
                }
            }
        }, E = function(e, t) {
            t = t || {};
            var n = e.split("."), o = n.length ? n[0] :"", i = g(o), a = n.length >= 2 && g(n[1]), s;
            n.length > 1 && (s = E(n.slice(1).join(".")));
            var c = function(e) {
                return e.dontIterate || delete e.dontIterate, e.arrayIndices && !e.arrayIndices.length && delete e.arrayIndices, 
                e;
            };
            return function(e, n) {
                if (n || (n = []), v(e)) {
                    if (!(i && o < e.length)) return [];
                    n = n.concat(+o, "x");
                }
                var u = e[o];
                if (!s) return [ c({
                    value:u,
                    dontIterate:v(e) && v(u),
                    arrayIndices:n
                }) ];
                if (!m(u)) return v(e) ? [] :[ c({
                    value:void 0,
                    arrayIndices:n
                }) ];
                var d = [], f = function(e) {
                    Array.prototype.push.apply(d, e);
                };
                return f(s(u, n)), !v(u) || a && t.forSort || r.each(u, function(e, r) {
                    _(e) && f(s(e, n.concat(r)));
                }), d;
            };
        }, h.makeLookupFunction = E, I = function(e, t) {
            var n = [];
            return r.each(e, function(e) {
                var o = v(e.value);
                t && o && !e.dontIterate || n.push({
                    value:e.value,
                    arrayIndices:e.arrayIndices
                }), o && !e.dontIterate && r.each(e.value, function(r, t) {
                    n.push({
                        value:r,
                        arrayIndices:(e.arrayIndices || []).concat(t)
                    });
                });
            }), n;
        };
        var S = function(e) {
            return {
                result:!1
            };
        }, j = function(e) {
            return {
                result:!0
            };
        }, A = function(e) {
            return 0 === e.length ? j :1 === e.length ? e[0] :function(t) {
                var n = {};
                return n.result = r.all(e, function(e) {
                    var r = e(t);
                    return r.result && void 0 !== r.distance && void 0 === n.distance && (n.distance = r.distance), 
                    r.result && r.arrayIndices && (n.arrayIndices = r.arrayIndices), r.result;
                }), n.result || (delete n.distance, delete n.arrayIndices), n;
            };
        }, M = A, P = A;
        f._f = {
            _type:function(e) {
                return "number" == typeof e ? 1 :"string" == typeof e ? 2 :"boolean" == typeof e ? 8 :v(e) ? 4 :null === e ? 10 :e instanceof RegExp ? 11 :"function" == typeof e ? 13 :e instanceof Date ? 9 :t.isBinary(e) ? 5 :e instanceof s.ObjectID ? 7 :3;
            },
            _equal:function(e, r) {
                return t.equals(e, r, {
                    keyOrderSensitive:!0
                });
            },
            _typeorder:function(e) {
                return [ -1, 1, 2, 3, 4, 5, -1, 6, 7, 8, 0, 9, -1, 100, 2, 100, 1, 8, 1 ][e];
            },
            _cmp:function(e, r) {
                if (void 0 === e) return void 0 === r ? 0 :-1;
                if (void 0 === r) return 1;
                var t = f._f._type(e), n = f._f._type(r), o = f._f._typeorder(t), i = f._f._typeorder(n);
                if (o !== i) return i > o ? -1 :1;
                if (t !== n) throw Error("Missing type coercion logic in _cmp");
                if (7 === t && (t = n = 2, e = e.toHexString(), r = r.toHexString()), 9 === t && (t = n = 1, 
                e = e.getTime(), r = r.getTime()), 1 === t) return e - r;
                if (2 === n) return r > e ? -1 :e === r ? 0 :1;
                if (3 === t) {
                    var a = function(e) {
                        var r = [];
                        for (var t in e) r.push(t), r.push(e[t]);
                        return r;
                    };
                    return f._f._cmp(a(e), a(r));
                }
                if (4 === t) for (var s = 0; ;s++) {
                    if (s === e.length) return s === r.length ? 0 :-1;
                    if (s === r.length) return 1;
                    var c = f._f._cmp(e[s], r[s]);
                    if (0 !== c) return c;
                }
                if (5 === t) {
                    if (e.length !== r.length) return e.length - r.length;
                    for (s = 0; s < e.length; s++) {
                        if (e[s] < r[s]) return -1;
                        if (e[s] > r[s]) return 1;
                    }
                    return 0;
                }
                if (8 === t) return e ? r ? 0 :1 :r ? -1 :0;
                if (10 === t) return 0;
                if (11 === t) throw Error("Sorting not supported on regular expression");
                if (13 === t) throw Error("Sorting not supported on Javascript code");
                throw Error("Unknown type to sort");
            }
        }, f._removeDollarOperators = function(e) {
            var r = {};
            for (var t in e) "$" !== t.substr(0, 1) && (r[t] = e[t]);
            return r;
        };
    }.call(this), function() {
        l.Sorter = function(t, n) {
            var o = this;
            n = n || {}, o._sortSpecParts = [];
            var i = function(e, r) {
                if (!e) throw Error("sort keys must be non-empty");
                if ("$" === e.charAt(0)) throw Error("unsupported sort key: " + e);
                o._sortSpecParts.push({
                    path:e,
                    lookup:E(e, {
                        forSort:!0
                    }),
                    ascending:r
                });
            };
            if (t instanceof Array) for (var a = 0; a < t.length; a++) "string" == typeof t[a] ? i(t[a], !0) :i(t[a][0], "desc" !== t[a][1]); else {
                if ("object" != typeof t) throw Error("Bad sort specification: " + JSON.stringify(t));
                r.each(t, function(e, r) {
                    i(r, e >= 0);
                });
            }
            if (o.affectedByModifier) {
                var s = {};
                r.each(o._sortSpecParts, function(e) {
                    s[e.path] = 1;
                }), o._selectorForAffectedByModifier = new l.Matcher(s);
            }
            o._keyComparator = e(r.map(o._sortSpecParts, function(e, r) {
                return o._keyFieldComparator(r);
            })), o._keyFilter = null, n.matcher && o._useWithMatcher(n.matcher);
        }, r.extend(l.Sorter.prototype, {
            getComparator:function(r) {
                var t = this;
                if (!r || !r.distances) return t._getBaseComparator();
                var n = r.distances;
                return e([ t._getBaseComparator(), function(e, r) {
                    if (!n.has(e._id)) throw Error("Missing distance for " + e._id);
                    if (!n.has(r._id)) throw Error("Missing distance for " + r._id);
                    return n.get(e._id) - n.get(r._id);
                } ]);
            },
            _getPaths:function() {
                var e = this;
                return r.pluck(e._sortSpecParts, "path");
            },
            _getMinKeyFromDoc:function(e) {
                var r = this, t = null;
                if (r._generateKeysFromDoc(e, function(e) {
                    return r._keyCompatibleWithSelector(e) ? null === t ? void (t = e) :void (r._compareKeys(e, t) < 0 && (t = e)) :void 0;
                }), null === t) throw Error("sort selector found no keys in doc?");
                return t;
            },
            _keyCompatibleWithSelector:function(e) {
                var r = this;
                return !r._keyFilter || r._keyFilter(e);
            },
            _generateKeysFromDoc:function(e, t) {
                var n = this;
                if (0 === n._sortSpecParts.length) throw new Error("can't generate keys without a spec");
                var o = [], i = function(e) {
                    return e.join(",") + ",";
                }, a = null;
                if (r.each(n._sortSpecParts, function(t, n) {
                    var s = I(t.lookup(e), !0);
                    s.length || (s = [ {
                        value:null
                    } ]);
                    var c = !1;
                    if (o[n] = {}, r.each(s, function(e) {
                        if (!e.arrayIndices) {
                            if (s.length > 1) throw Error("multiple branches but no array used?");
                            return void (o[n][""] = e.value);
                        }
                        c = !0;
                        var t = i(e.arrayIndices);
                        if (r.has(o[n], t)) throw Error("duplicate path: " + t);
                        if (o[n][t] = e.value, a && !r.has(a, t)) throw Error("cannot index parallel arrays");
                    }), a) {
                        if (!r.has(o[n], "") && r.size(a) !== r.size(o[n])) throw Error("cannot index parallel arrays!");
                    } else c && (a = {}, r.each(o[n], function(e, r) {
                        a[r] = !0;
                    }));
                }), !a) {
                    var s = r.map(o, function(e) {
                        if (!r.has(e, "")) throw Error("no value in sole key case?");
                        return e[""];
                    });
                    return void t(s);
                }
                r.each(a, function(e, n) {
                    var i = r.map(o, function(e) {
                        if (r.has(e, "")) return e[""];
                        if (!r.has(e, n)) throw Error("missing path?");
                        return e[n];
                    });
                    t(i);
                });
            },
            _compareKeys:function(e, r) {
                var t = this;
                if (e.length !== t._sortSpecParts.length || r.length !== t._sortSpecParts.length) throw Error("Key has wrong length");
                return t._keyComparator(e, r);
            },
            _keyFieldComparator:function(e) {
                var r = this, t = !r._sortSpecParts[e].ascending;
                return function(r, n) {
                    var o = f._f._cmp(r[e], n[e]);
                    return t && (o = -o), o;
                };
            },
            _getBaseComparator:function() {
                var e = this;
                return e._sortSpecParts.length ? function(r, t) {
                    var n = e._getMinKeyFromDoc(r), o = e._getMinKeyFromDoc(t);
                    return e._compareKeys(n, o);
                } :function(e, r) {
                    return 0;
                };
            },
            _useWithMatcher:function(e) {
                var t = this;
                if (t._keyFilter) throw Error("called _useWithMatcher twice?");
                if (!r.isEmpty(t._sortSpecParts)) {
                    var n = e._selector;
                    if (!(n instanceof Function)) {
                        var o = {};
                        r.each(t._sortSpecParts, function(e, r) {
                            o[e.path] = [];
                        }), r.each(n, function(e, t) {
                            var n = o[t];
                            if (n) {
                                if (e instanceof RegExp) {
                                    if (e.ignoreCase || e.multiline) return;
                                    return void n.push(w(e));
                                }
                                return y(e) ? void r.each(e, function(t, o) {
                                    r.contains([ "$lt", "$lte", "$gt", "$gte" ], o) && n.push(b[o].compileElementSelector(t)), 
                                    "$regex" !== o || e.$options || n.push(b.$regex.compileElementSelector(t, e));
                                }) :void n.push($(e));
                            }
                        }), r.isEmpty(o[t._sortSpecParts[0].path]) || (t._keyFilter = function(e) {
                            return r.all(t._sortSpecParts, function(t, n) {
                                return r.all(o[t.path], function(r) {
                                    return r(e[n]);
                                });
                            });
                        });
                    }
                }
            }
        });
        var e = function(e) {
            return function(r, t) {
                for (var n = 0; n < e.length; ++n) {
                    var o = e[n](r, t);
                    if (0 !== o) return o;
                }
                return 0;
            };
        };
    }.call(this), function() {
        f._compileProjection = function(e) {
            f._checkSupportedProjection(e);
            var n = r.isUndefined(e._id) ? !0 :e._id, o = C(e), i = function(e, n) {
                if (r.isArray(e)) return r.map(e, function(e) {
                    return i(e, n);
                });
                var a = o.including ? {} :t.clone(e);
                return r.each(n, function(n, s) {
                    r.has(e, s) && (r.isObject(n) ? r.isObject(e[s]) && (a[s] = i(e[s], n)) :o.including ? a[s] = t.clone(e[s]) :delete a[s]);
                }), a;
            };
            return function(e) {
                var t = i(e, o.tree);
                return n && r.has(e, "_id") && (t._id = e._id), !n && r.has(t, "_id") && delete t._id, 
                t;
            };
        }, C = function(e) {
            var t = r.keys(e).sort();
            !(t.length > 0) || 1 === t.length && "_id" === t[0] || r.contains(t, "_id") && e._id || (t = r.reject(t, function(e) {
                return "_id" === e;
            }));
            var n = null;
            r.each(t, function(r) {
                var t = !!e[r];
                if (null === n && (n = t), n !== t) throw p("You cannot currently mix including and excluding fields.");
            });
            var o = O(t, function(e) {
                return n;
            }, function(e, r, t) {
                var n = t, o = r;
                throw p("both " + n + " and " + o + " found in fields option, using both of them may trigger unexpected behavior. Did you mean to use only one of them?");
            });
            return {
                tree:o,
                including:n
            };
        }, O = function(e, t, n, o) {
            return o = o || {}, r.each(e, function(e) {
                var i = o, a = e.split("."), s = r.all(a.slice(0, -1), function(t, o) {
                    if (r.has(i, t)) {
                        if (!r.isObject(i[t]) && (i[t] = n(i[t], a.slice(0, o + 1).join("."), e), !r.isObject(i[t]))) return !1;
                    } else i[t] = {};
                    return i = i[t], !0;
                });
                if (s) {
                    var c = r.last(a);
                    r.has(i, c) ? i[c] = n(i[c], e, e) :i[c] = t(e);
                }
            }), o;
        }, f._checkSupportedProjection = function(e) {
            if (!r.isObject(e) || r.isArray(e)) throw p("fields option must be an object");
            r.each(e, function(e, t) {
                if (r.contains(t.split("."), "$")) throw p("Minimongo doesn't support $ operator in projections yet.");
                if ("object" == typeof e && r.intersection([ "$elemMatch", "$meta", "$slice" ], r.keys(e)).length > 0) throw p("Minimongo doesn't support operators in projections yet.");
                if (-1 === r.indexOf([ 1, 0, !0, !1 ], e)) throw p("Projection values should be one of 1, 0, true, or false");
            });
        };
    }.call(this), function() {
        f._modify = function(i, a, s) {
            if (s = s || {}, !_(a)) throw p("Modifier must be an object");
            a = t.clone(a);
            var c = y(a), u;
            if (c) u = t.clone(i), r.each(a, function(t, i) {
                var a = o[i];
                if (s.isInsert && "$setOnInsert" === i && (a = o.$set), !a) throw p("Invalid modifier specified " + i);
                r.each(t, function(t, o) {
                    if ("" === o) throw p("An empty update path is not valid.");
                    if ("_id" === o) throw p("Mod on _id not allowed");
                    var c = o.split(".");
                    if (!r.all(c, r.identity)) throw p("The update path '" + o + "' contains an empty field name, which is not allowed.");
                    var d = r.has(n, i), f = "$rename" === i, l = e(u, c, {
                        noCreate:n[i],
                        forbidArray:"$rename" === i,
                        arrayIndices:s.arrayIndices
                    }), h = c.pop();
                    a(l, h, t, o, u);
                });
            }); else {
                if (a._id && !t.equals(i._id, a._id)) throw p("Cannot change the _id of a document");
                for (var d in a) if (/\./.test(d)) throw p("When replacing document, field name may not contain '.'");
                u = a;
            }
            r.each(r.keys(i), function(e) {
                "_id" !== e && delete i[e];
            }), r.each(u, function(e, r) {
                i[r] = e;
            });
        };
        var e = function(e, r, t) {
            t = t || {};
            for (var n = !1, o = 0; o < r.length; o++) {
                var i = o === r.length - 1, a = r[o], s = m(e);
                if (!s) {
                    if (t.noCreate) return void 0;
                    var c = p("cannot use the part '" + a + "' to traverse " + e);
                    throw c.setPropertyError = !0, c;
                }
                if (e instanceof Array) {
                    if (t.forbidArray) return null;
                    if ("$" === a) {
                        if (n) throw p("Too many positional (i.e. '$') elements");
                        if (!t.arrayIndices || !t.arrayIndices.length) throw p("The positional operator did not find the match needed from the query");
                        a = t.arrayIndices[0], n = !0;
                    } else {
                        if (!g(a)) {
                            if (t.noCreate) return void 0;
                            throw p("can't append to array using string field name [" + a + "]");
                        }
                        a = parseInt(a);
                    }
                    if (i && (r[o] = a), t.noCreate && a >= e.length) return void 0;
                    for (;e.length < a; ) e.push(null);
                    if (!i) if (e.length === a) e.push({}); else if ("object" != typeof e[a]) throw p("can't modify field '" + r[o + 1] + "' of list value " + JSON.stringify(e[a]));
                } else {
                    if (a.length && "$" === a.substr(0, 1)) throw p("can't set field named " + a);
                    if (!(a in e)) {
                        if (t.noCreate) return void 0;
                        i || (e[a] = {});
                    }
                }
                if (i) return e;
                e = e[a];
            }
        }, n = {
            $unset:!0,
            $pop:!0,
            $rename:!0,
            $pull:!0,
            $pullAll:!0
        }, o = {
            $inc:function(e, r, t) {
                if ("number" != typeof t) throw p("Modifier $inc allowed for numbers only");
                if (r in e) {
                    if ("number" != typeof e[r]) throw p("Cannot apply $inc modifier to non-number");
                    e[r] += t;
                } else e[r] = t;
            },
            $set:function(e, t, n) {
                if (!r.isObject(e)) {
                    var o = p("Cannot set property on non-object field");
                    throw o.setPropertyError = !0, o;
                }
                if (null === e) {
                    var o = p("Cannot set property on null");
                    throw o.setPropertyError = !0, o;
                }
                e[t] = n;
            },
            $setOnInsert:function(e, r, t) {},
            $unset:function(e, r, t) {
                void 0 !== e && (e instanceof Array ? r in e && (e[r] = null) :delete e[r]);
            },
            $push:function(e, r, t) {
                if (void 0 === e[r] && (e[r] = []), !(e[r] instanceof Array)) throw p("Cannot apply $push modifier to non-array");
                if (!t || !t.$each) return void e[r].push(t);
                var n = t.$each;
                if (!(n instanceof Array)) throw p("$each must be an array");
                var o = void 0;
                if ("$position" in t) {
                    if ("number" != typeof t.$position) throw p("$position must be a numeric value");
                    if (t.$position < 0) throw p("$position in $push must be zero or positive");
                    o = t.$position;
                }
                var i = void 0;
                if ("$slice" in t) {
                    if ("number" != typeof t.$slice) throw p("$slice must be a numeric value");
                    if (t.$slice > 0) throw p("$slice in $push must be zero or negative");
                    i = t.$slice;
                }
                var a = void 0;
                if (t.$sort) {
                    if (void 0 === i) throw p("$sort requires $slice to be present");
                    a = new l.Sorter(t.$sort).getComparator();
                    for (var s = 0; s < n.length; s++) if (3 !== f._f._type(n[s])) throw p("$push like modifiers using $sort require all elements to be objects");
                }
                if (void 0 === o) for (var c = 0; c < n.length; c++) e[r].push(n[c]); else {
                    for (var u = [ o, 0 ], c = 0; c < n.length; c++) u.push(n[c]);
                    Array.prototype.splice.apply(e[r], u);
                }
                a && e[r].sort(a), void 0 !== i && (0 === i ? e[r] = [] :e[r] = e[r].slice(i));
            },
            $pushAll:function(e, r, t) {
                if (!("object" == typeof t && t instanceof Array)) throw p("Modifier $pushAll/pullAll allowed for arrays only");
                var n = e[r];
                if (void 0 === n) e[r] = t; else {
                    if (!(n instanceof Array)) throw p("Cannot apply $pushAll modifier to non-array");
                    for (var o = 0; o < t.length; o++) n.push(t[o]);
                }
            },
            $addToSet:function(e, t, n) {
                var o = !1;
                if ("object" == typeof n) for (var i in n) {
                    "$each" === i && (o = !0);
                    break;
                }
                var a = o ? n.$each :[ n ], s = e[t];
                if (void 0 === s) e[t] = a; else {
                    if (!(s instanceof Array)) throw p("Cannot apply $addToSet modifier to non-array");
                    r.each(a, function(e) {
                        for (var r = 0; r < s.length; r++) if (f._f._equal(e, s[r])) return;
                        s.push(e);
                    });
                }
            },
            $pop:function(e, r, t) {
                if (void 0 !== e) {
                    var n = e[r];
                    if (void 0 !== n) {
                        if (!(n instanceof Array)) throw p("Cannot apply $pop modifier to non-array");
                        "number" == typeof t && 0 > t ? n.splice(0, 1) :n.pop();
                    }
                }
            },
            $pull:function(e, r, t) {
                if (void 0 !== e) {
                    var n = e[r];
                    if (void 0 !== n) {
                        if (!(n instanceof Array)) throw p("Cannot apply $pull/pullAll modifier to non-array");
                        var o = [];
                        if (null == t || "object" != typeof t || t instanceof Array) for (var i = 0; i < n.length; i++) f._f._equal(n[i], t) || o.push(n[i]); else for (var a = new l.Matcher(t), i = 0; i < n.length; i++) a.documentMatches(n[i]).result || o.push(n[i]);
                        e[r] = o;
                    }
                }
            },
            $pullAll:function(e, r, t) {
                if (!("object" == typeof t && t instanceof Array)) throw p("Modifier $pushAll/pullAll allowed for arrays only");
                if (void 0 !== e) {
                    var n = e[r];
                    if (void 0 !== n) {
                        if (!(n instanceof Array)) throw p("Cannot apply $pull/pullAll modifier to non-array");
                        for (var o = [], i = 0; i < n.length; i++) {
                            for (var a = !1, s = 0; s < t.length; s++) if (f._f._equal(n[i], t[s])) {
                                a = !0;
                                break;
                            }
                            a || o.push(n[i]);
                        }
                        e[r] = o;
                    }
                }
            },
            $rename:function(r, t, n, o, i) {
                if (o === n) throw p("$rename source must differ from target");
                if (null === r) throw p("$rename source field invalid");
                if ("string" != typeof n) throw p("$rename target must be a string");
                if (void 0 !== r) {
                    var a = r[t];
                    delete r[t];
                    var s = n.split("."), c = e(i, s, {
                        forbidArray:!0
                    });
                    if (null === c) throw p("$rename target field invalid");
                    var u = s.pop();
                    c[u] = a;
                }
            },
            $bit:function(e, r, t) {
                throw p("$bit is not supported");
            }
        };
    }.call(this), function() {
        f._diffQueryChanges = function(e, r, t, n, o) {
            return u.diffQueryChanges(e, r, t, n, o);
        }, f._diffQueryUnorderedChanges = function(e, r, t, n) {
            return u.diffQueryUnorderedChanges(e, r, t, n);
        }, f._diffQueryOrderedChanges = function(e, r, t, n) {
            return u.diffQueryOrderedChanges(e, r, t, n);
        }, f._diffObjects = function(e, r, t) {
            return u.diffObjects(e, r, t);
        };
    }.call(this), function() {
        f._IdMap = function() {
            var e = this;
            n.call(e, s.idStringify, s.idParse);
        }, e._inherits(f._IdMap, n);
    }.call(this), function() {
        f._CachingChangeObserver = function(e) {
            var n = this;
            e = e || {};
            var i = e.callbacks && f._observeChangesCallbacksAreOrdered(e.callbacks);
            if (r.has(e, "ordered")) {
                if (n.ordered = e.ordered, e.callbacks && e.ordered !== i) throw Error("ordered option doesn't match callbacks");
            } else {
                if (!e.callbacks) throw Error("must provide ordered or callbacks");
                n.ordered = i;
            }
            var a = e.callbacks || {};
            n.ordered ? (n.docs = new o(s.idStringify), n.applyChange = {
                addedBefore:function(e, r, o) {
                    var i = t.clone(r);
                    i._id = e, a.addedBefore && a.addedBefore.call(n, e, r, o), a.added && a.added.call(n, e, r), 
                    n.docs.putBefore(e, i, o || null);
                },
                movedBefore:function(e, r) {
                    var t = n.docs.get(e);
                    a.movedBefore && a.movedBefore.call(n, e, r), n.docs.moveBefore(e, r || null);
                }
            }) :(n.docs = new f._IdMap(), n.applyChange = {
                added:function(e, r) {
                    var o = t.clone(r);
                    a.added && a.added.call(n, e, r), o._id = e, n.docs.set(e, o);
                }
            }), n.applyChange.changed = function(e, r) {
                var o = n.docs.get(e);
                if (!o) throw new Error("Unknown id for changed: " + e);
                a.changed && a.changed.call(n, e, t.clone(r)), u.applyChanges(o, r);
            }, n.applyChange.removed = function(e) {
                a.removed && a.removed.call(n, e), n.docs.remove(e);
            };
        }, f._observeFromObserveChanges = function(e, n) {
            var o = e.getTransform() || function(e) {
                return e;
            }, i = !!n._suppress_initial, a;
            if (f._observeCallbacksAreOrdered(n)) {
                var s = !n._no_indices;
                a = {
                    addedBefore:function(e, t, a) {
                        var c = this;
                        if (!i && (n.addedAt || n.added)) {
                            var u = o(r.extend(t, {
                                _id:e
                            }));
                            if (n.addedAt) {
                                var d = s ? a ? c.docs.indexOf(a) :c.docs.size() :-1;
                                n.addedAt(u, d, a);
                            } else n.added(u);
                        }
                    },
                    changed:function(e, r) {
                        var i = this;
                        if (n.changedAt || n.changed) {
                            var a = t.clone(i.docs.get(e));
                            if (!a) throw new Error("Unknown id for changed: " + e);
                            var c = o(t.clone(a));
                            if (u.applyChanges(a, r), a = o(a), n.changedAt) {
                                var d = s ? i.docs.indexOf(e) :-1;
                                n.changedAt(a, c, d);
                            } else n.changed(a, c);
                        }
                    },
                    movedBefore:function(e, r) {
                        var i = this;
                        if (n.movedTo) {
                            var a = s ? i.docs.indexOf(e) :-1, c = s ? r ? i.docs.indexOf(r) :i.docs.size() :-1;
                            c > a && --c, n.movedTo(o(t.clone(i.docs.get(e))), a, c, r || null);
                        }
                    },
                    removed:function(e) {
                        var r = this;
                        if (n.removedAt || n.removed) {
                            var t = o(r.docs.get(e));
                            if (n.removedAt) {
                                var i = s ? r.docs.indexOf(e) :-1;
                                n.removedAt(t, i);
                            } else n.removed(t);
                        }
                    }
                };
            } else a = {
                added:function(e, t) {
                    if (!i && n.added) {
                        var a = r.extend(t, {
                            _id:e
                        });
                        n.added(o(a));
                    }
                },
                changed:function(e, r) {
                    var i = this;
                    if (n.changed) {
                        var a = i.docs.get(e), s = t.clone(a);
                        u.applyChanges(s, r), n.changed(o(s), o(t.clone(a)));
                    }
                },
                removed:function(e) {
                    var r = this;
                    n.removed && n.removed(o(r.docs.get(e)));
                }
            };
            var c = new f._CachingChangeObserver({
                callbacks:a
            }), d = e.observeChanges(c.applyChange);
            return i = !1, d;
        };
    }.call(this), function() {
        f._selectorIsId = function(e) {
            return "string" == typeof e || "number" == typeof e || e instanceof s.ObjectID;
        }, f._selectorIsIdPerhapsAsObject = function(e) {
            return f._selectorIsId(e) || e && "object" == typeof e && e._id && f._selectorIsId(e._id) && 1 === r.size(e);
        }, f._idsMatchedBySelector = function(e) {
            if (f._selectorIsId(e)) return [ e ];
            if (!e) return null;
            if (r.has(e, "_id")) return f._selectorIsId(e._id) ? [ e._id ] :e._id && e._id.$in && r.isArray(e._id.$in) && !r.isEmpty(e._id.$in) && r.all(e._id.$in, f._selectorIsId) ? e._id.$in :null;
            if (e.$and && r.isArray(e.$and)) for (var t = 0; t < e.$and.length; ++t) {
                var n = f._idsMatchedBySelector(e.$and[t]);
                if (n) return n;
            }
            return null;
        };
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.minimongo = {
        LocalCollection:f,
        Minimongo:l,
        MinimongoTest:h
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.underscore._, r = Package.random.Random, i;
    (function() {
        i = function(e) {
            var r = this;
            t.extend(r, t.defaults(t.clone(e || {}), {
                baseTimeout:1e3,
                exponent:2.2,
                maxTimeout:3e5,
                minTimeout:10,
                minCount:2,
                fuzz:.5
            })), r.retryTimer = null;
        }, t.extend(i.prototype, {
            clear:function() {
                var e = this;
                e.retryTimer && clearTimeout(e.retryTimer), e.retryTimer = null;
            },
            _timeout:function(e) {
                var t = this;
                if (e < t.minCount) return t.minTimeout;
                var i = Math.min(t.maxTimeout, t.baseTimeout * Math.pow(t.exponent, e));
                return i *= r.fraction() * t.fuzz + (1 - t.fuzz / 2);
            },
            retryLater:function(t, r) {
                var i = this, n = i._timeout(t);
                return i.retryTimer && clearTimeout(i.retryTimer), i.retryTimer = e.setTimeout(r, n), 
                n;
            }
        });
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.retry = {
        Retry:i
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.check.check, a = Package.check.Match, n = Package.random.Random, r = Package.ejson.EJSON, i = Package.underscore._, o = Package.tracker.Tracker, s = Package.tracker.Deps, c = Package.retry.Retry, l;
    (function() {
        l = {};
    }).call(this), function() {
        l.Heartbeat = function(e) {
            var t = this;
            t.heartbeatInterval = e.heartbeatInterval, t.heartbeatTimeout = e.heartbeatTimeout, 
            t._sendPing = e.sendPing, t._onTimeout = e.onTimeout, t._seenPacket = !1, t._heartbeatIntervalHandle = null, 
            t._heartbeatTimeoutHandle = null;
        }, i.extend(l.Heartbeat.prototype, {
            stop:function() {
                var e = this;
                e._clearHeartbeatIntervalTimer(), e._clearHeartbeatTimeoutTimer();
            },
            start:function() {
                var e = this;
                e.stop(), e._startHeartbeatIntervalTimer();
            },
            _startHeartbeatIntervalTimer:function() {
                var t = this;
                t._heartbeatIntervalHandle = e.setInterval(i.bind(t._heartbeatIntervalFired, t), t.heartbeatInterval);
            },
            _startHeartbeatTimeoutTimer:function() {
                var t = this;
                t._heartbeatTimeoutHandle = e.setTimeout(i.bind(t._heartbeatTimeoutFired, t), t.heartbeatTimeout);
            },
            _clearHeartbeatIntervalTimer:function() {
                var t = this;
                t._heartbeatIntervalHandle && (e.clearInterval(t._heartbeatIntervalHandle), t._heartbeatIntervalHandle = null);
            },
            _clearHeartbeatTimeoutTimer:function() {
                var t = this;
                t._heartbeatTimeoutHandle && (e.clearTimeout(t._heartbeatTimeoutHandle), t._heartbeatTimeoutHandle = null);
            },
            _heartbeatIntervalFired:function() {
                var e = this;
                e._seenPacket || e._heartbeatTimeoutHandle || (e._sendPing(), e._startHeartbeatTimeoutTimer()), 
                e._seenPacket = !1;
            },
            _heartbeatTimeoutFired:function() {
                var e = this;
                e._heartbeatTimeoutHandle = null, e._onTimeout();
            },
            messageReceived:function() {
                var e = this;
                e._seenPacket = !0, e._heartbeatTimeoutHandle && e._clearHeartbeatTimeoutTimer();
            }
        });
    }.call(this), function() {
        l.SUPPORTED_DDP_VERSIONS = [ "1", "pre2", "pre1" ], l.parseDDP = function(t) {
            try {
                var a = JSON.parse(t);
            } catch (n) {
                return e._debug("Discarding message with invalid JSON", t), null;
            }
            return null === a || "object" != typeof a ? (e._debug("Discarding non-object DDP message", t), 
            null) :(i.has(a, "cleared") && (i.has(a, "fields") || (a.fields = {}), i.each(a.cleared, function(e) {
                a.fields[e] = void 0;
            }), delete a.cleared), i.each([ "fields", "params", "result" ], function(e) {
                i.has(a, e) && (a[e] = r._adjustTypesFromJSONValue(a[e]));
            }), a);
        }, l.stringifyDDP = function(e) {
            var t = r.clone(e);
            if (i.has(e, "fields")) {
                var a = [];
                i.each(e.fields, function(e, n) {
                    void 0 === e && (a.push(n), delete t.fields[n]);
                }), i.isEmpty(a) || (t.cleared = a), i.isEmpty(t.fields) && delete t.fields;
            }
            if (i.each([ "fields", "params", "result" ], function(e) {
                i.has(t, e) && (t[e] = r._adjustTypesToJSONValue(t[e]));
            }), e.id && "string" != typeof e.id) throw new Error("Message id is not a string");
            return JSON.stringify(t);
        };
    }.call(this), function() {
        l.MethodInvocation = function(e) {
            var t = this;
            this.isSimulation = e.isSimulation, this._unblock = e.unblock || function() {}, 
            this._calledUnblock = !1, this.userId = e.userId, this._setUserId = e.setUserId || function() {}, 
            this.connection = e.connection, this.randomSeed = e.randomSeed, this.randomStream = null;
        }, i.extend(l.MethodInvocation.prototype, {
            unblock:function() {
                var e = this;
                e._calledUnblock = !0, e._unblock();
            },
            setUserId:function(e) {
                var t = this;
                if (t._calledUnblock) throw new Error("Can't call setUserId in a method after calling unblock");
                t.userId = e, t._setUserId(e);
            }
        });
    }.call(this), function() {
        function e() {
            return n.hexString(20);
        }
        l.RandomStream = function(t) {
            var a = this;
            this.seed = [].concat(t.seed || e()), this.sequences = {};
        }, l.RandomStream.get = function(e, t) {
            if (t || (t = "default"), !e) return n.insecure;
            var a = e.randomStream;
            return a || (e.randomStream = a = new l.RandomStream({
                seed:e.randomSeed
            })), a._sequence(t);
        }, l.makeRpcSeed = function(e, t) {
            var a = l.RandomStream.get(e, "/rpc/" + t);
            return a.hexString(20);
        }, i.extend(l.RandomStream.prototype, {
            _sequence:function(e) {
                var t = this, a = t.sequences[e] || null;
                if (null === a) {
                    for (var r = t.seed.concat(e), o = 0; o < r.length; o++) i.isFunction(r[o]) && (r[o] = r[o]());
                    t.sequences[e] = a = n.createWithSeeds.apply(null, r);
                }
                return a;
            }
        });
    }.call(this), "undefined" == typeof Package && (Package = {}), Package["ddp-common"] = {
        DDPCommon:l
    };
}();

!function() {
    var a = Package.meteor.Meteor, t = Package.underscore._, e;
    (function() {
        e = {};
        var o = "Meteor_Reload", r = {}, n, i = null;
        try {
            i = window.sessionStorage, i ? (i.setItem("__dummy__", "1"), i.removeItem("__dummy__")) :i = null;
        } catch (l) {
            i = null;
        }
        e._getData = function() {
            return i && i.getItem(o);
        }, i && (n = e._getData(), i.removeItem(o)), n || (n = "{}");
        var d = {};
        try {
            d = JSON.parse(n), "object" != typeof d && (a._debug("Got bad data on reload. Ignoring."), 
            d = {});
        } catch (c) {
            a._debug("Got invalid JSON on reload. Ignoring.");
        }
        d.reload && "object" == typeof d.data && (r = d.data);
        var g = [];
        e._onMigrate = function(a, t) {
            t || (t = a, a = void 0), g.push({
                name:a,
                callback:t
            });
        }, e._migrationData = function(a) {
            return r[a];
        };
        var u = function(a, e) {
            a = a || function() {}, e = e || {};
            for (var o = {}, r = t.clone(g), n = !0; r.length; ) {
                var i = r.shift(), l = i.callback(a, e);
                l[0] || (n = !1), l.length > 1 && i.name && (o[i.name] = l[1]);
            }
            return n || e.immediateMigration ? o :null;
        };
        e._migrate = function(t, e) {
            var r = u(t, e);
            if (null === r) return !1;
            try {
                var n = JSON.stringify({
                    data:r,
                    reload:!0
                });
            } catch (l) {
                throw a._debug("Couldn't serialize data for migration", r), l;
            }
            if (i) try {
                i.setItem(o, n);
            } catch (l) {
                a._debug("Couldn't save data for migration to sessionStorage", l);
            } else a._debug("Browser does not support sessionStorage. Not saving migration state.");
            return !0;
        }, e._withFreshProvidersForTest = function(a) {
            var e = t.clone(g);
            g = [];
            try {
                a();
            } finally {
                g = e;
            }
        };
        var s = !1;
        e._reload = function(a) {
            if (a = a || {}, !s) {
                s = !0;
                var o = function() {
                    t.defer(function() {
                        e._migrate(o, a) && window.location.reload();
                    });
                };
                o();
            }
        };
    }).call(this), function() {
        a._reload = {
            onMigrate:e._onMigrate,
            migrationData:e._migrationData,
            reload:e._reload
        };
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.reload = {
        Reload:e
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.check.check, n = Package.check.Match, r = Package.random.Random, o = Package.ejson.EJSON, i = Package.underscore._, s = Package.tracker.Tracker, a = Package.tracker.Deps, u = Package.retry.Retry, c = Package["id-map"].IdMap, d = Package["ddp-common"].DDPCommon, l = Package["diff-sequence"].DiffSequence, f = Package["mongo-id"].MongoID, p, _, h, v, m, g, b;
    (function() {
        p = {}, _ = {};
    }).call(this), function() {
        h = function() {
            var e = this;
            c.call(e, f.idStringify, f.idParse);
        }, e._inherits(h, c);
    }.call(this), function() {
        v = function() {
            var e = document, t = window, n = {}, r = function() {};
            r.prototype.addEventListener = function(e, t) {
                this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []);
                var r = this._listeners[e];
                -1 === n.arrIndexOf(r, t) && r.push(t);
            }, r.prototype.removeEventListener = function(e, t) {
                if (this._listeners && e in this._listeners) {
                    var r = this._listeners[e], o = n.arrIndexOf(r, t);
                    return -1 !== o ? void (r.length > 1 ? this._listeners[e] = r.slice(0, o).concat(r.slice(o + 1)) :delete this._listeners[e]) :void 0;
                }
            }, r.prototype.dispatchEvent = function(e) {
                var t = e.type, n = Array.prototype.slice.call(arguments, 0);
                if (this["on" + t] && this["on" + t].apply(this, n), this._listeners && t in this._listeners) for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].apply(this, n);
            };
            var o = function(e, t) {
                if (this.type = e, "undefined" != typeof t) for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
            };
            o.prototype.toString = function() {
                var e = [];
                for (var t in this) if (this.hasOwnProperty(t)) {
                    var n = this[t];
                    "function" == typeof n && (n = "[function]"), e.push(t + "=" + n);
                }
                return "SimpleEvent(" + e.join(", ") + ")";
            };
            var i = function(e) {
                var t = this;
                t._events = e || [], t._listeners = {};
            };
            i.prototype.emit = function(e) {
                var t = this;
                if (t._verifyType(e), !t._nuked) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    if (t["on" + e] && t["on" + e].apply(t, n), e in t._listeners) for (var r = 0; r < t._listeners[e].length; r++) t._listeners[e][r].apply(t, n);
                }
            }, i.prototype.on = function(e, t) {
                var n = this;
                n._verifyType(e), n._nuked || (e in n._listeners || (n._listeners[e] = []), n._listeners[e].push(t));
            }, i.prototype._verifyType = function(e) {
                var t = this;
                -1 === n.arrIndexOf(t._events, e) && n.log("Event " + JSON.stringify(e) + " not listed " + JSON.stringify(t._events) + " in " + t);
            }, i.prototype.nuke = function() {
                var e = this;
                e._nuked = !0;
                for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
                e._listeners = {};
            };
            var s = "abcdefghijklmnopqrstuvwxyz0123456789_";
            n.random_string = function(e, t) {
                t = t || s.length;
                var n, r = [];
                for (n = 0; e > n; n++) r.push(s.substr(Math.floor(Math.random() * t), 1));
                return r.join("");
            }, n.random_number = function(e) {
                return Math.floor(Math.random() * e);
            }, n.random_number_string = function(e) {
                var t = ("" + (e - 1)).length, r = Array(t + 1).join("0");
                return (r + n.random_number(e)).slice(-t);
            }, n.getOrigin = function(e) {
                e += "/";
                var t = e.split("/").slice(0, 3);
                return t.join("/");
            }, n.isSameOriginUrl = function(e, n) {
                return n || (n = t.location.href), e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/");
            }, n.isSameOriginScheme = function(e, n) {
                return n || (n = t.location.href), e.split(":")[0] === n.split(":")[0];
            }, n.getParentDomain = function(e) {
                if (/^[0-9.]*$/.test(e)) return e;
                if (/^\[/.test(e)) return e;
                if (!/[.]/.test(e)) return e;
                var t = e.split(".").slice(1);
                return t.join(".");
            }, n.objectExtend = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e;
            };
            var a = "_jp";
            n.polluteGlobalNamespace = function() {
                a in t || (t[a] = {});
            }, n.closeFrame = function(e, t) {
                return "c" + JSON.stringify([ e, t ]);
            }, n.userSetCode = function(e) {
                return 1e3 === e || e >= 3e3 && 4999 >= e;
            }, n.countRTO = function(e) {
                var t;
                return t = e > 100 ? 3 * e :e + 200;
            }, n.log = function() {
                t.console && console.log && console.log.apply && console.log.apply(console, arguments);
            }, n.bind = function(e, t) {
                return e.bind ? e.bind(t) :function() {
                    return e.apply(t, arguments);
                };
            }, n.flatUrl = function(e) {
                return -1 === e.indexOf("?") && -1 === e.indexOf("#");
            }, n.amendUrl = function(t, r) {
                var o;
                if (void 0 === r) o = e.location; else {
                    var i = /^([a-z0-9.+-]+:)/i.exec(r);
                    if (i) {
                        var s = i[0].toLowerCase(), a = r.substring(s.length), u = /[a-z0-9\.-]+(:[0-9]+)?/.exec(a);
                        if (u) var c = u[0];
                    }
                    if (!s || !c) throw new Error("relativeTo must be an absolute url");
                    o = {
                        protocol:s,
                        host:c
                    };
                }
                if (!t) throw new Error("Wrong url for SockJS");
                if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
                0 === t.indexOf("//") && (t = o.protocol + t), 0 === t.indexOf("/") && (t = o.protocol + "//" + o.host + t), 
                t = t.replace(/[/]+$/, "");
                var d = t.split("/");
                return ("http:" === d[0] && /:80$/.test(d[2]) || "https:" === d[0] && /:443$/.test(d[2])) && (d[2] = d[2].replace(/:(80|443)$/, "")), 
                t = d.join("/");
            }, n.arrIndexOf = function(e, t) {
                for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
                return -1;
            }, n.arrSkip = function(e, t) {
                var r = n.arrIndexOf(e, t);
                if (-1 === r) return e.slice();
                var o = e.slice(0, r);
                return o.concat(e.slice(r + 1));
            }, n.isArray = Array.isArray || function(e) {
                return {}.toString.call(e).indexOf("Array") >= 0;
            }, n.delay = function(e, t) {
                return "function" == typeof e && (t = e, e = 0), setTimeout(t, e);
            };
            var u = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, c = {
                "\0":"\\u0000",
                "":"\\u0001",
                "":"\\u0002",
                "":"\\u0003",
                "":"\\u0004",
                "":"\\u0005",
                "":"\\u0006",
                "":"\\u0007",
                "\b":"\\b",
                "	":"\\t",
                "\n":"\\n",
                "":"\\u000b",
                "\f":"\\f",
                "\r":"\\r",
                "":"\\u000e",
                "":"\\u000f",
                "":"\\u0010",
                "":"\\u0011",
                "":"\\u0012",
                "":"\\u0013",
                "":"\\u0014",
                "":"\\u0015",
                "":"\\u0016",
                "":"\\u0017",
                "":"\\u0018",
                "":"\\u0019",
                "":"\\u001a",
                "":"\\u001b",
                "":"\\u001c",
                "":"\\u001d",
                "":"\\u001e",
                "":"\\u001f",
                '"':'\\"',
                "\\":"\\\\",
                "":"\\u007f",
                "":"\\u0080",
                "":"\\u0081",
                "":"\\u0082",
                "":"\\u0083",
                "":"\\u0084",
                "":"\\u0085",
                "":"\\u0086",
                "":"\\u0087",
                "":"\\u0088",
                "":"\\u0089",
                "":"\\u008a",
                "":"\\u008b",
                "":"\\u008c",
                "":"\\u008d",
                "":"\\u008e",
                "":"\\u008f",
                "":"\\u0090",
                "":"\\u0091",
                "":"\\u0092",
                "":"\\u0093",
                "":"\\u0094",
                "":"\\u0095",
                "":"\\u0096",
                "":"\\u0097",
                "":"\\u0098",
                "":"\\u0099",
                "":"\\u009a",
                "":"\\u009b",
                "":"\\u009c",
                "":"\\u009d",
                "":"\\u009e",
                "":"\\u009f",
                "­":"\\u00ad",
                "؀":"\\u0600",
                "؁":"\\u0601",
                "؂":"\\u0602",
                "؃":"\\u0603",
                "؄":"\\u0604",
                "܏":"\\u070f",
                "឴":"\\u17b4",
                "឵":"\\u17b5",
                "‌":"\\u200c",
                "‍":"\\u200d",
                "‎":"\\u200e",
                "‏":"\\u200f",
                "\u2028":"\\u2028",
                "\u2029":"\\u2029",
                "‪":"\\u202a",
                "‫":"\\u202b",
                "‬":"\\u202c",
                "‭":"\\u202d",
                "‮":"\\u202e",
                " ":"\\u202f",
                "⁠":"\\u2060",
                "⁡":"\\u2061",
                "⁢":"\\u2062",
                "⁣":"\\u2063",
                "⁤":"\\u2064",
                "⁥":"\\u2065",
                "⁦":"\\u2066",
                "⁧":"\\u2067",
                "⁨":"\\u2068",
                "⁩":"\\u2069",
                "⁪":"\\u206a",
                "⁫":"\\u206b",
                "⁬":"\\u206c",
                "⁭":"\\u206d",
                "⁮":"\\u206e",
                "⁯":"\\u206f",
                "﻿":"\\ufeff",
                "￰":"\\ufff0",
                "￱":"\\ufff1",
                "￲":"\\ufff2",
                "￳":"\\ufff3",
                "￴":"\\ufff4",
                "￵":"\\ufff5",
                "￶":"\\ufff6",
                "￷":"\\ufff7",
                "￸":"\\ufff8",
                "￹":"\\ufff9",
                "￺":"\\ufffa",
                "￻":"\\ufffb",
                "￼":"\\ufffc",
                "�":"\\ufffd",
                "￾":"\\ufffe",
                "￿":"\\uffff"
            }, d = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g, l, f = JSON && JSON.stringify || function(e) {
                return u.lastIndex = 0, u.test(e) && (e = e.replace(u, function(e) {
                    return c[e];
                })), '"' + e + '"';
            }, p = function(e) {
                var t, n = {}, r = [];
                for (t = 0; 65536 > t; t++) r.push(String.fromCharCode(t));
                return e.lastIndex = 0, r.join("").replace(e, function(e) {
                    return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), "";
                }), e.lastIndex = 0, n;
            };
            n.quote = function(e) {
                var t = f(e);
                return d.lastIndex = 0, d.test(t) ? (l || (l = p(d)), t.replace(d, function(e) {
                    return l[e];
                })) :t;
            };
            var _ = [ "websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling" ];
            n.probeProtocols = function() {
                for (var e = {}, t = 0; t < _.length; t++) {
                    var n = _[t];
                    e[n] = C[n] && C[n].enabled();
                }
                return e;
            }, n.detectProtocols = function(e, t, n) {
                var r = {}, o = [];
                t || (t = _);
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    r[s] = e[s];
                }
                var a = function(e) {
                    var t = e.shift();
                    r[t] ? o.push(t) :e.length > 0 && a(e);
                };
                return n.websocket !== !1 && a([ "websocket" ]), r["xhr-streaming"] && !n.null_origin ? o.push("xhr-streaming") :!r["xdr-streaming"] || n.cookie_needed || n.null_origin ? a([ "iframe-eventsource", "iframe-htmlfile" ]) :o.push("xdr-streaming"), 
                r["xhr-polling"] && !n.null_origin ? o.push("xhr-polling") :!r["xdr-polling"] || n.cookie_needed || n.null_origin ? a([ "iframe-xhr-polling", "jsonp-polling" ]) :o.push("xdr-polling"), 
                o;
            };
            var h = "_sockjs_global";
            n.createHook = function() {
                var e = "a" + n.random_string(8);
                if (!(h in t)) {
                    var r = {};
                    t[h] = function(e) {
                        return e in r || (r[e] = {
                            id:e,
                            del:function() {
                                delete r[e];
                            }
                        }), r[e];
                    };
                }
                return t[h](e);
            }, n.attachMessage = function(e) {
                n.attachEvent("message", e);
            }, n.attachEvent = function(n, r) {
                "undefined" != typeof t.addEventListener ? t.addEventListener(n, r, !1) :(e.attachEvent("on" + n, r), 
                t.attachEvent("on" + n, r));
            }, n.detachMessage = function(e) {
                n.detachEvent("message", e);
            }, n.detachEvent = function(n, r) {
                "undefined" != typeof t.addEventListener ? t.removeEventListener(n, r, !1) :(e.detachEvent("on" + n, r), 
                t.detachEvent("on" + n, r));
            };
            var v = {}, m = !1, g = function() {
                for (var e in v) v[e](), delete v[e];
            }, b = function() {
                m || (m = !0, g());
            };
            n.attachEvent("unload", b), n.unload_add = function(e) {
                var t = n.random_string(8);
                return v[t] = e, m && n.delay(g), t;
            }, n.unload_del = function(e) {
                e in v && delete v[e];
            }, n.createIframe = function(t, r) {
                var o = e.createElement("iframe"), i, s, a = function() {
                    clearTimeout(i);
                    try {
                        o.onload = null;
                    } catch (e) {}
                    o.onerror = null;
                }, u = function() {
                    o && (a(), setTimeout(function() {
                        o && o.parentNode.removeChild(o), o = null;
                    }, 0), n.unload_del(s));
                }, c = function(e) {
                    o && (u(), r(e));
                }, d = function(e, t) {
                    try {
                        o && o.contentWindow && o.contentWindow.postMessage(e, t);
                    } catch (n) {}
                };
                return o.src = t, o.style.display = "none", o.style.position = "absolute", o.onerror = function() {
                    c("onerror");
                }, o.onload = function() {
                    clearTimeout(i), i = setTimeout(function() {
                        c("onload timeout");
                    }, 2e3);
                }, e.body.appendChild(o), i = setTimeout(function() {
                    c("timeout");
                }, 15e3), s = n.unload_add(u), {
                    post:d,
                    cleanup:u,
                    loaded:a
                };
            }, n.createHtmlfile = function(e, r) {
                var o = new ActiveXObject("htmlfile"), i, s, u, c = function() {
                    clearTimeout(i);
                }, d = function() {
                    o && (c(), n.unload_del(s), u.parentNode.removeChild(u), u = o = null, CollectGarbage());
                }, l = function(e) {
                    o && (d(), r(e));
                }, f = function(e, t) {
                    try {
                        u && u.contentWindow && u.contentWindow.postMessage(e, t);
                    } catch (n) {}
                };
                o.open(), o.write('<html><script>document.domain="' + document.domain + '";</script></html>'), 
                o.close(), o.parentWindow[a] = t[a];
                var p = o.createElement("div");
                return o.body.appendChild(p), u = o.createElement("iframe"), p.appendChild(u), u.src = e, 
                i = setTimeout(function() {
                    l("timeout");
                }, 15e3), s = n.unload_add(d), {
                    post:f,
                    cleanup:d,
                    loaded:c
                };
            };
            var y = function() {};
            y.prototype = new i([ "chunk", "finish" ]), y.prototype._start = function(e, r, o, i) {
                var s = this;
                try {
                    s.xhr = new XMLHttpRequest();
                } catch (a) {}
                if (!s.xhr) try {
                    s.xhr = new t.ActiveXObject("Microsoft.XMLHTTP");
                } catch (a) {}
                (t.ActiveXObject || t.XDomainRequest) && (r += (-1 === r.indexOf("?") ? "?" :"&") + "t=" + +new Date()), 
                s.unload_ref = n.unload_add(function() {
                    s._cleanup(!0);
                });
                try {
                    s.xhr.open(e, r, !0);
                } catch (u) {
                    return s.emit("finish", 0, ""), void s._cleanup();
                };
                if (i && i.no_credentials || (s.xhr.withCredentials = "true"), i && i.headers) for (var c in i.headers) s.xhr.setRequestHeader(c, i.headers[c]);
                s.xhr.onreadystatechange = function() {
                    if (s.xhr) {
                        var e = s.xhr;
                        switch (e.readyState) {
                          case 3:
                            try {
                                var t = e.status, n = e.responseText;
                            } catch (e) {}
                            1223 === t && (t = 204), n && n.length > 0 && s.emit("chunk", t, n);
                            break;

                          case 4:
                            var t = e.status;
                            1223 === t && (t = 204), s.emit("finish", t, e.responseText), s._cleanup(!1);
                        }
                    }
                }, s.xhr.send(o);
            }, y.prototype._cleanup = function(e) {
                var t = this;
                if (t.xhr) {
                    if (n.unload_del(t.unload_ref), t.xhr.onreadystatechange = function() {}, e) try {
                        t.xhr.abort();
                    } catch (r) {}
                    t.unload_ref = t.xhr = null;
                }
            }, y.prototype.close = function() {
                var e = this;
                e.nuke(), e._cleanup(!0);
            };
            var w = n.XHRCorsObject = function() {
                var e = this, t = arguments;
                n.delay(function() {
                    e._start.apply(e, t);
                });
            };
            w.prototype = new y();
            var S = n.XHRLocalObject = function(e, t, r) {
                var o = this;
                n.delay(function() {
                    o._start(e, t, r, {
                        no_credentials:!0
                    });
                });
            };
            S.prototype = new y();
            var k = n.XDRObject = function(e, t, r) {
                var o = this;
                n.delay(function() {
                    o._start(e, t, r);
                });
            };
            k.prototype = new i([ "chunk", "finish" ]), k.prototype._start = function(e, t, r) {
                var o = this, i = new XDomainRequest();
                t += (-1 === t.indexOf("?") ? "?" :"&") + "t=" + +new Date();
                var s = i.ontimeout = i.onerror = function() {
                    o.emit("finish", 0, ""), o._cleanup(!1);
                };
                i.onprogress = function() {
                    o.emit("chunk", 200, i.responseText);
                }, i.onload = function() {
                    o.emit("finish", 200, i.responseText), o._cleanup(!1);
                }, o.xdr = i, o.unload_ref = n.unload_add(function() {
                    o._cleanup(!0);
                });
                try {
                    o.xdr.open(e, t), o.xdr.send(r);
                } catch (a) {
                    s();
                }
            }, k.prototype._cleanup = function(e) {
                var t = this;
                if (t.xdr) {
                    if (n.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null, 
                    e) try {
                        t.xdr.abort();
                    } catch (r) {}
                    t.unload_ref = t.xdr = null;
                }
            }, k.prototype.close = function() {
                var e = this;
                e.nuke(), e._cleanup(!0);
            }, n.isXHRCorsCapable = function() {
                return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest() ? 1 :t.XDomainRequest && e.domain ? 2 :A.enabled() ? 3 :4;
            };
            var C = function(e, t, r) {
                if (!(this instanceof C)) return new C(e, t, r);
                var o = this, i;
                o._options = {
                    devel:!1,
                    debug:!1,
                    protocols_whitelist:[],
                    info:void 0,
                    rtt:void 0
                }, r && n.objectExtend(o._options, r), o._base_url = n.amendUrl(e), o._server = o._options.server || n.random_number_string(1e3), 
                o._options.protocols_whitelist && o._options.protocols_whitelist.length ? i = o._options.protocols_whitelist :(i = "string" == typeof t && t.length > 0 ? [ t ] :n.isArray(t) ? t :null, 
                i && o._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), 
                o._protocols = [], o.protocol = null, o.readyState = C.CONNECTING, o._ir = V(o._base_url), 
                o._ir.onfinish = function(e, t) {
                    o._ir = null, e ? (o._options.info && (e = n.objectExtend(e, o._options.info)), 
                    o._options.rtt && (t = o._options.rtt), o._applyInfo(e, t, i), o._didClose()) :o._didClose(1002, "Can't connect to server", !0);
                };
            };
            C.prototype = new r(), C.version = "0.3.4", C.CONNECTING = 0, C.OPEN = 1, C.CLOSING = 2, 
            C.CLOSED = 3, C.prototype._debug = function() {
                this._options.debug && n.log.apply(n, arguments);
            }, C.prototype._dispatchOpen = function() {
                var e = this;
                e.readyState === C.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), 
                e._transport_tref = null), e.readyState = C.OPEN, e.dispatchEvent(new o("open"))) :e._didClose(1006, "Server lost session");
            }, C.prototype._dispatchMessage = function(e) {
                var t = this;
                t.readyState === C.OPEN && t.dispatchEvent(new o("message", {
                    data:e
                }));
            }, C.prototype._dispatchHeartbeat = function(e) {
                var t = this;
                t.readyState === C.OPEN && t.dispatchEvent(new o("heartbeat", {}));
            }, C.prototype._didClose = function(e, t, r) {
                var i = this;
                if (i.readyState !== C.CONNECTING && i.readyState !== C.OPEN && i.readyState !== C.CLOSING) throw new Error("INVALID_STATE_ERR");
                i._ir && (i._ir.nuke(), i._ir = null), i._transport && (i._transport.doCleanup(), 
                i._transport = null);
                var s = new o("close", {
                    code:e,
                    reason:t,
                    wasClean:n.userSetCode(e)
                });
                if (!n.userSetCode(e) && i.readyState === C.CONNECTING && !r) {
                    if (i._try_next_protocol(s)) return;
                    s = new o("close", {
                        code:2e3,
                        reason:"All transports failed",
                        wasClean:!1,
                        last_event:s
                    });
                }
                i.readyState = C.CLOSED, n.delay(function() {
                    i.dispatchEvent(s);
                });
            }, C.prototype._didMessage = function(e) {
                var t = this, n = e.slice(0, 1);
                switch (n) {
                  case "o":
                    t._dispatchOpen();
                    break;

                  case "a":
                    for (var r = JSON.parse(e.slice(1) || "[]"), o = 0; o < r.length; o++) t._dispatchMessage(r[o]);
                    break;

                  case "m":
                    var r = JSON.parse(e.slice(1) || "null");
                    t._dispatchMessage(r);
                    break;

                  case "c":
                    var r = JSON.parse(e.slice(1) || "[]");
                    t._didClose(r[0], r[1]);
                    break;

                  case "h":
                    t._dispatchHeartbeat();
                }
            }, C.prototype._try_next_protocol = function(t) {
                var r = this;
                for (r.protocol && (r._debug("Closed transport:", r.protocol, "" + t), r.protocol = null), 
                r._transport_tref && (clearTimeout(r._transport_tref), r._transport_tref = null); ;) {
                    var o = r.protocol = r._protocols.shift();
                    if (!o) return !1;
                    if (C[o] && C[o].need_body === !0 && (!e.body || "undefined" != typeof e.readyState && "complete" !== e.readyState)) return r._protocols.unshift(o), 
                    r.protocol = "waiting-for-load", n.attachEvent("load", function() {
                        r._try_next_protocol();
                    }), !0;
                    if (C[o] && C[o].enabled(r._options)) {
                        var i = C[o].roundTrips || 1, s = (r._options.rto || 0) * i || 5e3;
                        r._transport_tref = n.delay(s, function() {
                            r.readyState === C.CONNECTING && r._didClose(2007, "Transport timeouted");
                        });
                        var a = n.random_string(8), u = r._base_url + "/" + r._server + "/" + a;
                        return r._debug("Opening transport:", o, " url:" + u, " RTO:" + r._options.rto), 
                        r._transport = new C[o](r, u, r._base_url), !0;
                    }
                    r._debug("Skipping transport:", o);
                }
            }, C.prototype.close = function(e, t) {
                var r = this;
                if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
                return r.readyState !== C.CONNECTING && r.readyState !== C.OPEN ? !1 :(r.readyState = C.CLOSING, 
                r._didClose(e || 1e3, t || "Normal closure"), !0);
            }, C.prototype.send = function(e) {
                var t = this;
                if (t.readyState === C.CONNECTING) throw new Error("INVALID_STATE_ERR");
                return t.readyState === C.OPEN && t._transport.doSend(n.quote("" + e)), !0;
            }, C.prototype._applyInfo = function(t, r, o) {
                var i = this;
                i._options.info = t, i._options.rtt = r, i._options.rto = n.countRTO(r), i._options.info.null_origin = !e.domain, 
                t.base_url && (i._base_url = n.amendUrl(t.base_url, i._base_url));
                var s = n.probeProtocols();
                i._protocols = n.detectProtocols(s, o, t), n.isSameOriginScheme(i._base_url) || 2 !== n.isXHRCorsCapable() || (i._protocols = [ "jsonp-polling" ]);
            };
            var E = C.websocket = function(e, r) {
                var o = this, i = r + "/websocket";
                i = "https" === i.slice(0, 5) ? "wss" + i.slice(5) :"ws" + i.slice(4), o.ri = e, 
                o.url = i;
                var s = t.WebSocket || t.MozWebSocket;
                o.ws = new s(o.url), o.ws.onmessage = function(e) {
                    o.ri._didMessage(e.data);
                }, o.unload_ref = n.unload_add(function() {
                    o.ws.close();
                }), o.ws.onclose = function() {
                    o.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken"));
                };
            };
            E.prototype.doSend = function(e) {
                this.ws.send("[" + e + "]");
            }, E.prototype.doCleanup = function() {
                var e = this, t = e.ws;
                t && (t.onmessage = t.onclose = null, t.close(), n.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null);
            }, E.enabled = function() {
                return !(!t.WebSocket && !t.MozWebSocket);
            }, E.roundTrips = 2;
            var O = function() {};
            O.prototype.send_constructor = function(e) {
                var t = this;
                t.send_buffer = [], t.sender = e;
            }, O.prototype.doSend = function(e) {
                var t = this;
                t.send_buffer.push(e), t.send_stop || t.send_schedule();
            }, O.prototype.send_schedule_wait = function() {
                var e = this, t;
                e.send_stop = function() {
                    e.send_stop = null, clearTimeout(t);
                }, t = n.delay(25, function() {
                    e.send_stop = null, e.send_schedule();
                });
            }, O.prototype.send_schedule = function() {
                var e = this;
                if (e.send_buffer.length > 0) {
                    var t = "[" + e.send_buffer.join(",") + "]";
                    e.send_stop = e.sender(e.trans_url, t, function(t, n) {
                        e.send_stop = null, t === !1 ? e.ri._didClose(1006, "Sending error " + n) :e.send_schedule_wait();
                    }), e.send_buffer = [];
                }
            }, O.prototype.send_destructor = function() {
                var e = this;
                e._send_stop && e._send_stop(), e._send_stop = null;
            };
            var T = function(t, r, o) {
                var i = this;
                if (!("_send_form" in i)) {
                    var s = i._send_form = e.createElement("form"), a = i._send_area = e.createElement("textarea");
                    a.name = "d", s.style.display = "none", s.style.position = "absolute", s.method = "POST", 
                    s.enctype = "application/x-www-form-urlencoded", s.acceptCharset = "UTF-8", s.appendChild(a), 
                    e.body.appendChild(s);
                }
                var s = i._send_form, a = i._send_area, u = "a" + n.random_string(8);
                s.target = u, s.action = t + "/jsonp_send?i=" + u;
                var c;
                try {
                    c = e.createElement('<iframe name="' + u + '">');
                } catch (d) {
                    c = e.createElement("iframe"), c.name = u;
                }
                c.id = u, s.appendChild(c), c.style.display = "none";
                try {
                    a.value = r;
                } catch (l) {
                    n.log("Your browser is seriously broken. Go home! " + l.message);
                }
                s.submit();
                var f = function(e) {
                    c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, n.delay(500, function() {
                        c.parentNode.removeChild(c), c = null;
                    }), a.value = "", o(!0));
                };
                return c.onerror = c.onload = f, c.onreadystatechange = function(e) {
                    "complete" == c.readyState && f();
                }, f;
            }, D = function(e) {
                return function(t, n, r) {
                    var o = new e("POST", t + "/xhr_send", n);
                    return o.onfinish = function(e, t) {
                        r(200 === e || 204 === e, "http status " + e);
                    }, function(e) {
                        r(!1, e);
                    };
                };
            }, x = function(t, r) {
                var o, i = e.createElement("script"), s, a = function(e) {
                    s && (s.parentNode.removeChild(s), s = null), i && (clearTimeout(o), i.parentNode.removeChild(i), 
                    i.onreadystatechange = i.onerror = i.onload = i.onclick = null, i = null, r(e), 
                    r = null);
                }, u = !1, c = null;
                if (i.id = "a" + n.random_string(8), i.src = t, i.type = "text/javascript", i.charset = "UTF-8", 
                i.onerror = function(e) {
                    c || (c = setTimeout(function() {
                        u || a(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)"));
                    }, 1e3));
                }, i.onload = function(e) {
                    a(n.closeFrame(1006, "JSONP script loaded abnormally (onload)"));
                }, i.onreadystatechange = function(e) {
                    if (/loaded|closed/.test(i.readyState)) {
                        if (i && i.htmlFor && i.onclick) {
                            u = !0;
                            try {
                                i.onclick();
                            } catch (t) {}
                        }
                        i && a(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"));
                    }
                }, "undefined" == typeof i.async && e.attachEvent) if (/opera/i.test(navigator.userAgent)) s = e.createElement("script"), 
                s.text = "try{var a = document.getElementById('" + i.id + "'); if(a)a.onerror();}catch(x){};", 
                i.async = s.async = !1; else {
                    try {
                        i.htmlFor = i.id, i.event = "onclick";
                    } catch (d) {}
                    i.async = !0;
                }
                "undefined" != typeof i.async && (i.async = !0), o = setTimeout(function() {
                    a(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)"));
                }, 35e3);
                var l = e.getElementsByTagName("head")[0];
                return l.insertBefore(i, l.firstChild), s && l.insertBefore(s, l.firstChild), a;
            }, M = C["jsonp-polling"] = function(e, t) {
                n.polluteGlobalNamespace();
                var r = this;
                r.ri = e, r.trans_url = t, r.send_constructor(T), r._schedule_recv();
            };
            M.prototype = new O(), M.prototype._schedule_recv = function() {
                var e = this, t = function(t) {
                    e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv();
                };
                e._recv_stop = R(e.trans_url + "/jsonp", x, t);
            }, M.enabled = function() {
                return !0;
            }, M.need_body = !0, M.prototype.doCleanup = function() {
                var e = this;
                e._is_closing = !0, e._recv_stop && e._recv_stop(), e.ri = e._recv_stop = null, 
                e.send_destructor();
            };
            var R = function(e, r, o) {
                var i = "a" + n.random_string(6), s = e + "?c=" + escape(a + "." + i), u = 0, c = function(e) {
                    switch (u) {
                      case 0:
                        delete t[a][i], o(e);
                        break;

                      case 1:
                        o(e), u = 2;
                        break;

                      case 2:
                        delete t[a][i];
                    }
                }, d = r(s, c);
                t[a][i] = d;
                var l = function() {
                    t[a][i] && (u = 1, t[a][i](n.closeFrame(1e3, "JSONP user aborted read")));
                };
                return l;
            }, I = function() {};
            I.prototype = new O(), I.prototype.run = function(e, t, n, r, o) {
                var i = this;
                i.ri = e, i.trans_url = t, i.send_constructor(D(o)), i.poll = new K(e, r, t + n, o);
            }, I.prototype.doCleanup = function() {
                var e = this;
                e.poll && (e.poll.abort(), e.poll = null);
            };
            var P = C["xhr-streaming"] = function(e, t) {
                this.run(e, t, "/xhr_streaming", re, n.XHRCorsObject);
            };
            P.prototype = new I(), P.enabled = function() {
                return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest() && !/opera/i.test(navigator.userAgent);
            }, P.roundTrips = 2, P.need_body = !0;
            var N = C["xdr-streaming"] = function(e, t) {
                this.run(e, t, "/xhr_streaming", re, n.XDRObject);
            };
            N.prototype = new I(), N.enabled = function() {
                return !!t.XDomainRequest;
            }, N.roundTrips = 2;
            var j = C["xhr-polling"] = function(e, t) {
                this.run(e, t, "/xhr", re, n.XHRCorsObject);
            };
            j.prototype = new I(), j.enabled = P.enabled, j.roundTrips = 2;
            var U = C["xdr-polling"] = function(e, t) {
                this.run(e, t, "/xhr", re, n.XDRObject);
            };
            U.prototype = new I(), U.enabled = N.enabled, U.roundTrips = 2;
            var A = function() {};
            A.prototype.i_constructor = function(e, t, r) {
                var o = this;
                o.ri = e, o.origin = n.getOrigin(r), o.base_url = r, o.trans_url = t;
                var i = r + "/iframe.html";
                o.ri._options.devel && (i += "?t=" + +new Date()), o.window_id = n.random_string(8), 
                i += "#" + o.window_id, o.iframeObj = n.createIframe(i, function(e) {
                    o.ri._didClose(1006, "Unable to load an iframe (" + e + ")");
                }), o.onmessage_cb = n.bind(o.onmessage, o), n.attachMessage(o.onmessage_cb);
            }, A.prototype.doCleanup = function() {
                var e = this;
                if (e.iframeObj) {
                    n.detachMessage(e.onmessage_cb);
                    try {
                        e.iframeObj.iframe.contentWindow && e.postMessage("c");
                    } catch (t) {}
                    e.iframeObj.cleanup(), e.iframeObj = null, e.onmessage_cb = e.iframeObj = null;
                }
            }, A.prototype.onmessage = function(e) {
                var t = this;
                if (e.origin === t.origin) {
                    var n = e.data.slice(0, 8), r = e.data.slice(8, 9), o = e.data.slice(9);
                    if (n === t.window_id) switch (r) {
                      case "s":
                        t.iframeObj.loaded(), t.postMessage("s", JSON.stringify([ C.version, t.protocol, t.trans_url, t.base_url ]));
                        break;

                      case "t":
                        t.ri._didMessage(o);
                    }
                }
            }, A.prototype.postMessage = function(e, t) {
                var n = this;
                n.iframeObj.post(n.window_id + e + (t || ""), n.origin);
            }, A.prototype.doSend = function(e) {
                this.postMessage("m", e);
            }, A.enabled = function() {
                var e = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
                return ("function" == typeof t.postMessage || "object" == typeof t.postMessage) && !e;
            };
            var B, L = function(e, r) {
                parent !== t ? parent.postMessage(B + e + (r || ""), "*") :n.log("Can't postMessage, no parent window.", e, r);
            }, F = function() {};
            F.prototype._didClose = function(e, t) {
                L("t", n.closeFrame(e, t));
            }, F.prototype._didMessage = function(e) {
                L("t", e);
            }, F.prototype._doSend = function(e) {
                this._transport.doSend(e);
            }, F.prototype._doCleanup = function() {
                this._transport.doCleanup();
            }, n.parent_origin = void 0, C.bootstrap_iframe = function() {
                var r;
                B = e.location.hash.slice(1);
                var o = function(e) {
                    if (e.source === parent && ("undefined" == typeof n.parent_origin && (n.parent_origin = e.origin), 
                    e.origin === n.parent_origin)) {
                        var o = e.data.slice(0, 8), i = e.data.slice(8, 9), s = e.data.slice(9);
                        if (o === B) switch (i) {
                          case "s":
                            var a = JSON.parse(s), u = a[0], c = a[1], d = a[2], l = a[3];
                            if (u !== C.version && n.log('Incompatibile SockJS! Main site uses: "' + u + '", the iframe: "' + C.version + '".'), 
                            !n.flatUrl(d) || !n.flatUrl(l)) return void n.log("Only basic urls are supported in SockJS");
                            if (!n.isSameOriginUrl(d) || !n.isSameOriginUrl(l)) return void n.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([ t.location.href, d, l ]) + ")");
                            r = new F(), r._transport = new F[c](r, d, l);
                            break;

                          case "m":
                            r._doSend(s);
                            break;

                          case "c":
                            r && r._doCleanup(), r = null;
                        }
                    }
                };
                n.attachMessage(o), L("s");
            };
            var H = function(e, t) {
                var r = this;
                n.delay(function() {
                    r.doXhr(e, t);
                });
            };
            H.prototype = new i([ "finish" ]), H.prototype.doXhr = function(e, t) {
                var r = this, o = new Date().getTime(), i = new t("GET", e + "/info?cb=" + n.random_string(10)), s = n.delay(8e3, function() {
                    i.ontimeout();
                });
                i.onfinish = function(e, t) {
                    if (clearTimeout(s), s = null, 200 === e) {
                        var n = new Date().getTime() - o, i = JSON.parse(t);
                        "object" != typeof i && (i = {}), r.emit("finish", i, n);
                    } else r.emit("finish");
                }, i.ontimeout = function() {
                    i.close(), r.emit("finish");
                };
            };
            var X = function(t) {
                var r = this, o = function() {
                    var e = new A();
                    e.protocol = "w-iframe-info-receiver";
                    var n = function(t) {
                        if ("string" == typeof t && "m" === t.substr(0, 1)) {
                            var n = JSON.parse(t.substr(1)), o = n[0], i = n[1];
                            r.emit("finish", o, i);
                        } else r.emit("finish");
                        e.doCleanup(), e = null;
                    }, o = {
                        _options:{},
                        _didClose:n,
                        _didMessage:n
                    };
                    e.i_constructor(o, t, t);
                };
                e.body ? o() :n.attachEvent("load", o);
            };
            X.prototype = new i([ "finish" ]);
            var J = function() {
                var e = this;
                n.delay(function() {
                    e.emit("finish", {}, 2e3);
                });
            };
            J.prototype = new i([ "finish" ]);
            var V = function(e) {
                if (n.isSameOriginUrl(e)) return new H(e, n.XHRLocalObject);
                switch (n.isXHRCorsCapable()) {
                  case 1:
                    return new H(e, n.XHRLocalObject);

                  case 2:
                    return n.isSameOriginScheme(e) ? new H(e, n.XDRObject) :new J();

                  case 3:
                    return new X(e);

                  default:
                    return new J();
                }
            }, W = F["w-iframe-info-receiver"] = function(e, t, r) {
                var o = new H(r, n.XHRLocalObject);
                o.onfinish = function(t, n) {
                    e._didMessage("m" + JSON.stringify([ t, n ])), e._didClose();
                };
            };
            W.prototype.doCleanup = function() {};
            var q = C["iframe-eventsource"] = function() {
                var e = this;
                e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments);
            };
            q.prototype = new A(), q.enabled = function() {
                return "EventSource" in t && A.enabled();
            }, q.need_body = !0, q.roundTrips = 3;
            var G = F["w-iframe-eventsource"] = function(e, t) {
                this.run(e, t, "/eventsource", Z, n.XHRLocalObject);
            };
            G.prototype = new I();
            var Q = C["iframe-xhr-polling"] = function() {
                var e = this;
                e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments);
            };
            Q.prototype = new A(), Q.enabled = function() {
                return t.XMLHttpRequest && A.enabled();
            }, Q.need_body = !0, Q.roundTrips = 3;
            var z = F["w-iframe-xhr-polling"] = function(e, t) {
                this.run(e, t, "/xhr", re, n.XHRLocalObject);
            };
            z.prototype = new I();
            var $ = C["iframe-htmlfile"] = function() {
                var e = this;
                e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments);
            };
            $.prototype = new A(), $.enabled = function() {
                return A.enabled();
            }, $.need_body = !0, $.roundTrips = 3;
            var Y = F["w-iframe-htmlfile"] = function(e, t) {
                this.run(e, t, "/htmlfile", ne, n.XHRLocalObject);
            };
            Y.prototype = new I();
            var K = function(e, t, n, r) {
                var o = this;
                o.ri = e, o.Receiver = t, o.recv_url = n, o.AjaxObject = r, o._scheduleRecv();
            };
            K.prototype._scheduleRecv = function() {
                var e = this, t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject), n = 0;
                t.onmessage = function(t) {
                    n += 1, e.ri._didMessage(t.data);
                }, t.onclose = function(n) {
                    e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || ("permanent" === n.reason ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") :e._scheduleRecv());
                };
            }, K.prototype.abort = function() {
                var e = this;
                e.poll_is_closing = !0, e.poll && e.poll.abort();
            };
            var Z = function(e) {
                var t = this, r = new EventSource(e);
                r.onmessage = function(e) {
                    t.dispatchEvent(new o("message", {
                        data:unescape(e.data)
                    }));
                }, t.es_close = r.onerror = function(e, i) {
                    var s = i ? "user" :2 !== r.readyState ? "network" :"permanent";
                    t.es_close = r.onmessage = r.onerror = null, r.close(), r = null, n.delay(200, function() {
                        t.dispatchEvent(new o("close", {
                            reason:s
                        }));
                    });
                };
            };
            Z.prototype = new r(), Z.prototype.abort = function() {
                var e = this;
                e.es_close && e.es_close({}, !0);
            };
            var ee, te = function() {
                if (void 0 === ee) if ("ActiveXObject" in t) try {
                    ee = !!new ActiveXObject("htmlfile");
                } catch (e) {} else ee = !1;
                return ee;
            }, ne = function(e) {
                var r = this;
                n.polluteGlobalNamespace(), r.id = "a" + n.random_string(6, 26), e += (-1 === e.indexOf("?") ? "?" :"&") + "c=" + escape(a + "." + r.id);
                var i = te() ? n.createHtmlfile :n.createIframe, s;
                t[a][r.id] = {
                    start:function() {
                        s.loaded();
                    },
                    message:function(e) {
                        r.dispatchEvent(new o("message", {
                            data:e
                        }));
                    },
                    stop:function() {
                        r.iframe_close({}, "network");
                    }
                }, r.iframe_close = function(e, n) {
                    s.cleanup(), r.iframe_close = s = null, delete t[a][r.id], r.dispatchEvent(new o("close", {
                        reason:n
                    }));
                }, s = i(e, function(e) {
                    r.iframe_close({}, "permanent");
                });
            };
            ne.prototype = new r(), ne.prototype.abort = function() {
                var e = this;
                e.iframe_close && e.iframe_close({}, "user");
            };
            var re = function(e, t) {
                var n = this, r = 0;
                n.xo = new t("POST", e, null), n.xo.onchunk = function(e, t) {
                    if (200 === e) for (;;) {
                        var i = t.slice(r), s = i.indexOf("\n");
                        if (-1 === s) break;
                        r += s + 1;
                        var a = i.slice(0, s);
                        n.dispatchEvent(new o("message", {
                            data:a
                        }));
                    }
                }, n.xo.onfinish = function(e, t) {
                    n.xo.onchunk(e, t), n.xo = null;
                    var r = 200 === e ? "network" :"permanent";
                    n.dispatchEvent(new o("close", {
                        reason:r
                    }));
                };
            };
            return re.prototype = new r(), re.prototype.abort = function() {
                var e = this;
                e.xo && (e.xo.close(), e.dispatchEvent(new o("close", {
                    reason:"user"
                })), e.xo = null);
            }, C.getUtils = function() {
                return n;
            }, C.getIframeTransport = function() {
                return A;
            }, C;
        }(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("sockjs", [], function() {
            return v;
        });
    }.call(this), function() {
        _.ClientStream = function(e, t) {
            var n = this;
            n.options = i.extend({
                retry:!0
            }, t), n._initCommon(n.options), n.HEARTBEAT_TIMEOUT = 1e5, n.rawUrl = e, n.socket = null, 
            n.heartbeatTimer = null, "undefined" != typeof window && window.addEventListener && window.addEventListener("online", i.bind(n._online, n), !1), 
            n._launchConnection();
        }, i.extend(_.ClientStream.prototype, {
            send:function(e) {
                var t = this;
                t.currentStatus.connected && t.socket.send(e);
            },
            _changeUrl:function(e) {
                var t = this;
                t.rawUrl = e;
            },
            _connected:function() {
                var e = this;
                e.connectionTimer && (clearTimeout(e.connectionTimer), e.connectionTimer = null), 
                e.currentStatus.connected || (e.currentStatus.status = "connected", e.currentStatus.connected = !0, 
                e.currentStatus.retryCount = 0, e.statusChanged(), i.each(e.eventCallbacks.reset, function(e) {
                    e();
                }));
            },
            _cleanup:function(e) {
                var t = this;
                t._clearConnectionAndHeartbeatTimers(), t.socket && (t.socket.onmessage = t.socket.onclose = t.socket.onerror = t.socket.onheartbeat = function() {}, 
                t.socket.close(), t.socket = null), i.each(t.eventCallbacks.disconnect, function(t) {
                    t(e);
                });
            },
            _clearConnectionAndHeartbeatTimers:function() {
                var e = this;
                e.connectionTimer && (clearTimeout(e.connectionTimer), e.connectionTimer = null), 
                e.heartbeatTimer && (clearTimeout(e.heartbeatTimer), e.heartbeatTimer = null);
            },
            _heartbeat_timeout:function() {
                var t = this;
                e._debug("Connection timeout. No sockjs heartbeat received."), t._lostConnection(new p.ConnectionError("Heartbeat timed out"));
            },
            _heartbeat_received:function() {
                var e = this;
                e._forcedToDisconnect || (e.heartbeatTimer && clearTimeout(e.heartbeatTimer), e.heartbeatTimer = setTimeout(i.bind(e._heartbeat_timeout, e), e.HEARTBEAT_TIMEOUT));
            },
            _sockjsProtocolsWhitelist:function() {
                var e = [ "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling" ], t = navigator && /iPhone|iPad|iPod/.test(navigator.userAgent) && /OS 4_|OS 5_/.test(navigator.userAgent);
                return t || (e = [ "websocket" ].concat(e)), e;
            },
            _launchConnection:function() {
                var t = this;
                t._cleanup();
                var n = i.extend({
                    protocols_whitelist:t._sockjsProtocolsWhitelist()
                }, t.options._sockjsOptions);
                t.socket = new v(m(t.rawUrl), void 0, n), t.socket.onopen = function(e) {
                    t._connected();
                }, t.socket.onmessage = function(e) {
                    t._heartbeat_received(), t.currentStatus.connected && i.each(t.eventCallbacks.message, function(t) {
                        t(e.data);
                    });
                }, t.socket.onclose = function() {
                    t._lostConnection();
                }, t.socket.onerror = function() {
                    e._debug("stream error", i.toArray(arguments), new Date().toDateString());
                }, t.socket.onheartbeat = function() {
                    t._heartbeat_received();
                }, t.connectionTimer && clearTimeout(t.connectionTimer), t.connectionTimer = setTimeout(function() {
                    t._lostConnection(new p.ConnectionError("DDP connection timed out"));
                }, t.CONNECT_TIMEOUT);
            }
        });
    }.call(this), function() {
        var t = function(e, t) {
            return e.length >= t.length && e.substring(0, t.length) === t;
        }, n = function(e, t) {
            return e.length >= t.length && e.substring(e.length - t.length) === t;
        }, o = function(o, i, s) {
        	//o = 'http://kf.smartnlp.cn/';
            if(o === '/'){
                o = __meteor_runtime_config__.ROOT_URL;
            };
            i || (i = "http");
            var a = o.match(/^ddp(i?)\+sockjs:\/\//), u = o.match(/^http(s?):\/\//), c;
            if (a) {
                var d = o.substr(a[0].length);
                c = "i" === a[1] ? i :i + "s";
                var l = d.indexOf("/"), f = -1 === l ? d :d.substr(0, l), p = -1 === l ? "" :d.substr(l);
                return f = f.replace(/\*/g, function() {
                    return Math.floor(10 * r.fraction());
                }), c + "://" + f + p;
            }
            if (u) {
                c = u[1] ? i + "s" :i;
                var _ = o.substr(u[0].length);
                o = c + "://" + _;
            }
            return -1 !== o.indexOf("://") || t(o, "/") || (o = i + "://" + o), o = e._relativeToSiteRootUrl(o), 
            n(o, "/") ? o + s :o + "/" + s;
        };
        m = function(e) {
            return o(e, "http", "sockjs");
        }, g = function(e) {
            var t = o(e, "ws", "websocket");
            return t;
        }, _.toSockjsUrl = m, i.extend(_.ClientStream.prototype, {
            on:function(e, t) {
                var n = this;
                if ("message" !== e && "reset" !== e && "disconnect" !== e) throw new Error("unknown event type: " + e);
                n.eventCallbacks[e] || (n.eventCallbacks[e] = []), n.eventCallbacks[e].push(t);
            },
            _initCommon:function(e) {
                var t = this;
                e = e || {}, t.CONNECT_TIMEOUT = e.connectTimeoutMs || 1e4, t.eventCallbacks = {}, 
                t._forcedToDisconnect = !1, t.currentStatus = {
                    status:"connecting",
                    connected:!1,
                    retryCount:0
                }, t.statusListeners = "undefined" != typeof s && new s.Dependency(), t.statusChanged = function() {
                    t.statusListeners && t.statusListeners.changed();
                }, t._retry = new u(), t.connectionTimer = null;
            },
            reconnect:function(e) {
                var t = this;
                return e = e || {}, e.url && t._changeUrl(e.url), e._sockjsOptions && (t.options._sockjsOptions = e._sockjsOptions), 
                t.currentStatus.connected ? void ((e._force || e.url) && t._lostConnection(new p.ForcedReconnectError())) :("connecting" === t.currentStatus.status && t._lostConnection(), 
                t._retry.clear(), t.currentStatus.retryCount -= 1, void t._retryNow());
            },
            disconnect:function(e) {
                var t = this;
                e = e || {}, t._forcedToDisconnect || (e._permanent && (t._forcedToDisconnect = !0), 
                t._cleanup(), t._retry.clear(), t.currentStatus = {
                    status:e._permanent ? "failed" :"offline",
                    connected:!1,
                    retryCount:0
                }, e._permanent && e._error && (t.currentStatus.reason = e._error), t.statusChanged());
            },
            _lostConnection:function(e) {
                var t = this;
                t._cleanup(e), t._retryLater(e);
            },
            _online:function() {
                "offline" != this.currentStatus.status && this.reconnect();
            },
            _retryLater:function(e) {
                var t = this, n = 0;
                t.options.retry || e && "DDP.ForcedReconnectError" === e.errorType ? (n = t._retry.retryLater(t.currentStatus.retryCount, i.bind(t._retryNow, t)), 
                t.currentStatus.status = "waiting", t.currentStatus.retryTime = new Date().getTime() + n) :(t.currentStatus.status = "failed", 
                delete t.currentStatus.retryTime), t.currentStatus.connected = !1, t.statusChanged();
            },
            _retryNow:function() {
                var e = this;
                e._forcedToDisconnect || (e.currentStatus.retryCount += 1, e.currentStatus.status = "connecting", 
                e.currentStatus.connected = !1, delete e.currentStatus.retryTime, e.statusChanged(), 
                e._launchConnection());
            },
            status:function() {
                var e = this;
                return e.statusListeners && e.statusListeners.depend(), e.currentStatus;
            }
        }), p.ConnectionError = e.makeErrorType("DDP.ConnectionError", function(e) {
            var t = this;
            t.message = e;
        }), p.ForcedReconnectError = e.makeErrorType("DDP.ForcedReconnectError", function() {});
    }.call(this), function() {
        _.SUPPORTED_DDP_VERSIONS = d.SUPPORTED_DDP_VERSIONS, p._CurrentInvocation = new e.EnvironmentVariable();
    }.call(this), function() {
        p.randomStream = function(e) {
            var t = p._CurrentInvocation.get();
            return d.RandomStream.get(t, e);
        };
    }.call(this), function() {
        if (e.isServer) var t = Npm.require("path"), n = Npm.require("fibers"), a = Npm.require(t.join("fibers", "future"));
        var u = function(t, n) {
            var r = this;
            n = i.extend({
                onConnected:function() {},
                onDDPVersionNegotiationFailure:function(t) {
                    e._debug(t);
                },
                heartbeatInterval:17500,
                heartbeatTimeout:15e3,
                reloadWithOutstanding:!1,
                supportedDDPVersions:d.SUPPORTED_DDP_VERSIONS,
                retry:!0,
                respondToPings:!0
            }, n), r.onReconnect = null, "object" == typeof t ? r._stream = t :r._stream = new _.ClientStream(t, {
                retry:n.retry,
                headers:n.headers,
                _sockjsOptions:n._sockjsOptions,
                _dontPrintErrors:n._dontPrintErrors,
                connectTimeoutMs:n.connectTimeoutMs
            }), r._lastSessionId = null, r._versionSuggestion = null, r._version = null, r._stores = {}, 
            r._methodHandlers = {}, r._nextMethodId = 1, r._supportedDDPVersions = n.supportedDDPVersions, 
            r._heartbeatInterval = n.heartbeatInterval, r._heartbeatTimeout = n.heartbeatTimeout, 
            r._methodInvokers = {}, r._outstandingMethodBlocks = [], r._documentsWrittenByStub = {}, 
            r._serverDocuments = {}, r._afterUpdateCallbacks = [], r._messagesBufferedUntilQuiescence = [], 
            r._methodsBlockingQuiescence = {}, r._subsBeingRevived = {}, r._resetStores = !1, 
            r._updatesForUnknownStores = {}, r._retryMigrate = null, r._subscriptions = {}, 
            r._userId = null, r._userIdDeps = new s.Dependency(), e.isClient && Package.reload && !n.reloadWithOutstanding && Package.reload.Reload._onMigrate(function(e) {
                if (r._readyToMigrate()) return [ !0 ];
                if (r._retryMigrate) throw new Error("Two migrations in progress?");
                return r._retryMigrate = e, !1;
            });
            var o = function(t) {
                try {
                    var o = d.parseDDP(t);
                } catch (s) {
                    return void e._debug("Exception while parsing DDP", s);
                }
                if (r._heartbeat && r._heartbeat.messageReceived(), null === o || !o.msg) return void (o && o.server_id || e._debug("discarding invalid livedata message", o));
                if ("connected" === o.msg) r._version = r._versionSuggestion, r._livedata_connected(o), 
                n.onConnected(); else if ("failed" === o.msg) if (i.contains(r._supportedDDPVersions, o.version)) r._versionSuggestion = o.version, 
                r._stream.reconnect({
                    _force:!0
                }); else {
                    var a = "DDP version negotiation failed; server requested version " + o.version;
                    r._stream.disconnect({
                        _permanent:!0,
                        _error:a
                    }), n.onDDPVersionNegotiationFailure(a);
                } else "ping" === o.msg && n.respondToPings ? r._send({
                    msg:"pong",
                    id:o.id
                }) :"pong" === o.msg || (i.include([ "added", "changed", "removed", "ready", "updated" ], o.msg) ? r._livedata_data(o) :"nosub" === o.msg ? r._livedata_nosub(o) :"result" === o.msg ? r._livedata_result(o) :"error" === o.msg ? r._livedata_error(o) :e._debug("discarding unknown livedata message type", o));
            }, a = function() {
                var e = {
                    msg:"connect"
                };
                r._lastSessionId && (e.session = r._lastSessionId), e.version = r._versionSuggestion || r._supportedDDPVersions[0], 
                r._versionSuggestion = e.version, e.support = r._supportedDDPVersions, r._send(e), 
                !i.isEmpty(r._outstandingMethodBlocks) && i.isEmpty(r._outstandingMethodBlocks[0].methods) && r._outstandingMethodBlocks.shift(), 
                i.each(r._methodInvokers, function(e) {
                    e.sentMessage = !1;
                }), r.onReconnect ? r._callOnReconnectAndSendAppropriateOutstandingMethods() :r._sendOutstandingMethods(), 
                i.each(r._subscriptions, function(e, t) {
                    r._send({
                        msg:"sub",
                        id:t,
                        name:e.name,
                        params:e.params
                    });
                });
            }, u = function() {
                r._heartbeat && (r._heartbeat.stop(), r._heartbeat = null);
            };
            e.isServer ? (r._stream.on("message", e.bindEnvironment(o, "handling DDP message")), 
            r._stream.on("reset", e.bindEnvironment(a, "handling DDP reset")), r._stream.on("disconnect", e.bindEnvironment(u, "handling DDP disconnect"))) :(r._stream.on("message", o), 
            r._stream.on("reset", a), r._stream.on("disconnect", u));
        }, c = function(e) {
            var t = this;
            t.methodId = e.methodId, t.sentMessage = !1, t._callback = e.callback, t._connection = e.connection, 
            t._message = e.message, t._onResultReceived = e.onResultReceived || function() {}, 
            t._wait = e.wait, t._methodResult = null, t._dataVisible = !1, t._connection._methodInvokers[t.methodId] = t;
        };
        i.extend(c.prototype, {
            sendMessage:function() {
                var e = this;
                if (e.gotResult()) throw new Error("sendingMethod is called on method with result");
                e._dataVisible = !1, e.sentMessage = !0, e._wait && (e._connection._methodsBlockingQuiescence[e.methodId] = !0), 
                e._connection._send(e._message);
            },
            _maybeInvokeCallback:function() {
                var e = this;
                e._methodResult && e._dataVisible && (e._callback(e._methodResult[0], e._methodResult[1]), 
                delete e._connection._methodInvokers[e.methodId], e._connection._outstandingMethodFinished());
            },
            receiveResult:function(e, t) {
                var n = this;
                if (n.gotResult()) throw new Error("Methods should only receive results once");
                n._methodResult = [ e, t ], n._onResultReceived(e, t), n._maybeInvokeCallback();
            },
            dataVisible:function() {
                var e = this;
                e._dataVisible = !0, e._maybeInvokeCallback();
            },
            gotResult:function() {
                var e = this;
                return !!e._methodResult;
            }
        }), i.extend(u.prototype, {
            registerStore:function(e, t) {
                var n = this;
                if (e in n._stores) return !1;
                var r = {};
                i.each([ "update", "beginUpdate", "endUpdate", "saveOriginals", "retrieveOriginals", "getDoc" ], function(e) {
                    r[e] = function() {
                        return t[e] ? t[e].apply(t, arguments) :void 0;
                    };
                }), n._stores[e] = r;
                var o = n._updatesForUnknownStores[e];
                return o && (r.beginUpdate(o.length, !1), i.each(o, function(e) {
                    r.update(e);
                }), r.endUpdate(), delete n._updatesForUnknownStores[e]), !0;
            },
            subscribe:function(e) {
                var t = this, n = Array.prototype.slice.call(arguments, 1), a = {};
                if (n.length) {
                    var u = n[n.length - 1];
                    i.isFunction(u) ? a.onReady = n.pop() :u && i.any([ u.onReady, u.onError, u.onStop ], i.isFunction) && (a = n.pop());
                }
                var c = i.find(t._subscriptions, function(t) {
                    return t.inactive && t.name === e && o.equals(t.params, n);
                }), d;
                c ? (d = c.id, c.inactive = !1, a.onReady && (c.ready || (c.readyCallback = a.onReady)), 
                a.onError && (c.errorCallback = a.onError), a.onStop && (c.stopCallback = a.onStop)) :(d = r.id(), 
                t._subscriptions[d] = {
                    id:d,
                    name:e,
                    params:o.clone(n),
                    inactive:!1,
                    ready:!1,
                    readyDeps:new s.Dependency(),
                    readyCallback:a.onReady,
                    errorCallback:a.onError,
                    stopCallback:a.onStop,
                    connection:t,
                    remove:function() {
                        delete this.connection._subscriptions[this.id], this.ready && this.readyDeps.changed();
                    },
                    stop:function() {
                        this.connection._send({
                            msg:"unsub",
                            id:d
                        }), this.remove(), a.onStop && a.onStop();
                    }
                }, t._send({
                    msg:"sub",
                    id:d,
                    name:e,
                    params:n
                }));
                var l = {
                    stop:function() {
                        i.has(t._subscriptions, d) && t._subscriptions[d].stop();
                    },
                    ready:function() {
                        if (!i.has(t._subscriptions, d)) return !1;
                        var e = t._subscriptions[d];
                        return e.readyDeps.depend(), e.ready;
                    },
                    subscriptionId:d
                };
                return s.active && s.onInvalidate(function(e) {
                    i.has(t._subscriptions, d) && (t._subscriptions[d].inactive = !0), s.afterFlush(function() {
                        i.has(t._subscriptions, d) && t._subscriptions[d].inactive && l.stop();
                    });
                }), l;
            },
            _subscribeAndWait:function(e, t, n) {
                var r = this, o = new a(), i = !1, s;
                return t = t || [], t.push({
                    onReady:function() {
                        i = !0, o["return"]();
                    },
                    onError:function(e) {
                        i ? n && n.onLateError && n.onLateError(e) :o["throw"](e);
                    }
                }), s = r.subscribe.apply(r, [ e ].concat(t)), o.wait(), s;
            },
            methods:function(e) {
                var t = this;
                i.each(e, function(e, n) {
                    if ("function" != typeof e) throw new Error("Method '" + n + "' must be a function");
                    if (t._methodHandlers[n]) throw new Error("A method named '" + n + "' is already defined");
                    t._methodHandlers[n] = e;
                });
            },
            call:function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                if (t.length && "function" == typeof t[t.length - 1]) var n = t.pop();
                return this.apply(e, t, n);
            },
            apply:function(t, n, r, s) {
                var u = this;
                s || "function" != typeof r || (s = r, r = {}), r = r || {}, s && (s = e.bindEnvironment(s, "delivering result of invoking '" + t + "'")), 
                n = o.clone(n);
                var l = function() {
                    var e;
                    return function() {
                        return void 0 === e && (e = "" + u._nextMethodId++), e;
                    };
                }(), f = p._CurrentInvocation.get(), _ = f && f.isSimulation, h = null, v = function() {
                    return null === h && (h = d.makeRpcSeed(f, t)), h;
                }, m = u._methodHandlers[t];
                if (m) {
                    var g = function(e) {
                        u.setUserId(e);
                    }, b = new d.MethodInvocation({
                        isSimulation:!0,
                        userId:u.userId(),
                        setUserId:g,
                        randomSeed:function() {
                            return v();
                        }
                    });
                    _ || u._saveOriginals();
                    try {
                        var y = p._CurrentInvocation.withValue(b, function() {
                            return e.isServer ? e._noYieldsAllowed(function() {
                                return m.apply(b, o.clone(n));
                            }) :m.apply(b, o.clone(n));
                        });
                    } catch (w) {
                        var S = w;
                    }
                    _ || u._retrieveAndStoreOriginals(l());
                }
                if (_) {
                    if (s) return void s(S, y);
                    if (S) throw S;
                    return y;
                }
                if (S) {
                    if (r.throwStubExceptions) throw S;
                    S.expected || e._debug("Exception while simulating the effect of invoking '" + t + "'", S, S.stack);
                }
                if (!s) if (e.isClient) s = function(n) {
                    n && e._debug("Error invoking Method '" + t + "':", n.message);
                }; else {
                    var k = new a();
                    s = k.resolver();
                }
                var C = {
                    msg:"method",
                    method:t,
                    params:n,
                    id:l()
                };
                null !== h && (C.randomSeed = h);
                var E = new c({
                    methodId:l(),
                    callback:s,
                    connection:u,
                    onResultReceived:r.onResultReceived,
                    wait:!!r.wait,
                    message:C
                });
                return r.wait ? u._outstandingMethodBlocks.push({
                    wait:!0,
                    methods:[ E ]
                }) :((i.isEmpty(u._outstandingMethodBlocks) || i.last(u._outstandingMethodBlocks).wait) && u._outstandingMethodBlocks.push({
                    wait:!1,
                    methods:[]
                }), i.last(u._outstandingMethodBlocks).methods.push(E)), 1 === u._outstandingMethodBlocks.length && E.sendMessage(), 
                k ? k.wait() :r.returnStubValue ? y :void 0;
            },
            _saveOriginals:function() {
                var e = this;
                i.each(e._stores, function(e) {
                    e.saveOriginals();
                });
            },
            _retrieveAndStoreOriginals:function(e) {
                var t = this;
                if (t._documentsWrittenByStub[e]) throw new Error("Duplicate methodId in _retrieveAndStoreOriginals");
                var n = [];
                i.each(t._stores, function(r, o) {
                    var s = r.retrieveOriginals();
                    s && s.forEach(function(r, s) {
                        n.push({
                            collection:o,
                            id:s
                        }), i.has(t._serverDocuments, o) || (t._serverDocuments[o] = new h());
                        var a = t._serverDocuments[o].setDefault(s, {});
                        a.writtenByStubs ? a.writtenByStubs[e] = !0 :(a.document = r, a.flushCallbacks = [], 
                        a.writtenByStubs = {}, a.writtenByStubs[e] = !0);
                    });
                }), i.isEmpty(n) || (t._documentsWrittenByStub[e] = n);
            },
            _unsubscribeAll:function() {
                var e = this;
                i.each(i.clone(e._subscriptions), function(t, n) {
                    "meteor_autoupdate_clientVersions" !== t.name && e._subscriptions[n].stop();
                });
            },
            _send:function(e) {
                var t = this;
                t._stream.send(d.stringifyDDP(e));
            },
            _lostConnection:function(e) {
                var t = this;
                t._stream._lostConnection(e);
            },
            status:function() {
                var e = this;
                return e._stream.status.apply(e._stream, arguments);
            },
            reconnect:function() {
                var e = this;
                return e._stream.reconnect.apply(e._stream, arguments);
            },
            disconnect:function() {
                var e = this;
                return e._stream.disconnect.apply(e._stream, arguments);
            },
            close:function() {
                var e = this;
                return e._stream.disconnect({
                    _permanent:!0
                });
            },
            userId:function() {
                var e = this;
                return e._userIdDeps && e._userIdDeps.depend(), e._userId;
            },
            setUserId:function(e) {
                var t = this;
                t._userId !== e && (t._userId = e, t._userIdDeps && t._userIdDeps.changed());
            },
            _waitingForQuiescence:function() {
                var e = this;
                return !i.isEmpty(e._subsBeingRevived) || !i.isEmpty(e._methodsBlockingQuiescence);
            },
            _anyMethodsAreOutstanding:function() {
                var e = this;
                return i.any(i.pluck(e._methodInvokers, "sentMessage"));
            },
            _livedata_connected:function(e) {
                var t = this;
                if ("pre1" !== t._version && 0 !== t._heartbeatInterval && (t._heartbeat = new d.Heartbeat({
                    heartbeatInterval:t._heartbeatInterval,
                    heartbeatTimeout:t._heartbeatTimeout,
                    onTimeout:function() {
                        t._lostConnection(new p.ConnectionError("DDP heartbeat timed out"));
                    },
                    sendPing:function() {
                        t._send({
                            msg:"ping"
                        });
                    }
                }), t._heartbeat.start()), t._lastSessionId && (t._resetStores = !0), "string" == typeof e.session) {
                    var n = t._lastSessionId === e.session;
                    t._lastSessionId = e.session;
                }
                n || (t._updatesForUnknownStores = {}, t._resetStores && (t._documentsWrittenByStub = {}, 
                t._serverDocuments = {}), t._afterUpdateCallbacks = [], t._subsBeingRevived = {}, 
                i.each(t._subscriptions, function(e, n) {
                    e.ready && (t._subsBeingRevived[n] = !0);
                }), t._methodsBlockingQuiescence = {}, t._resetStores && i.each(t._methodInvokers, function(e) {
                    e.gotResult() ? t._afterUpdateCallbacks.push(i.bind(e.dataVisible, e)) :e.sentMessage && (t._methodsBlockingQuiescence[e.methodId] = !0);
                }), t._messagesBufferedUntilQuiescence = [], t._waitingForQuiescence() || (t._resetStores && (i.each(t._stores, function(e) {
                    e.beginUpdate(0, !0), e.endUpdate();
                }), t._resetStores = !1), t._runAfterUpdateCallbacks()));
            },
            _processOneDataMessage:function(e, t) {
                var n = this;
                n["_process_" + e.msg](e, t);
            },
            _livedata_data:function(e) {
                var t = this, n = {};
                if (t._waitingForQuiescence()) {
                    if (t._messagesBufferedUntilQuiescence.push(e), "nosub" === e.msg && delete t._subsBeingRevived[e.id], 
                    i.each(e.subs || [], function(e) {
                        delete t._subsBeingRevived[e];
                    }), i.each(e.methods || [], function(e) {
                        delete t._methodsBlockingQuiescence[e];
                    }), t._waitingForQuiescence()) return;
                    i.each(t._messagesBufferedUntilQuiescence, function(e) {
                        t._processOneDataMessage(e, n);
                    }), t._messagesBufferedUntilQuiescence = [];
                } else t._processOneDataMessage(e, n);
                (t._resetStores || !i.isEmpty(n)) && (i.each(t._stores, function(e, r) {
                    e.beginUpdate(i.has(n, r) ? n[r].length :0, t._resetStores);
                }), t._resetStores = !1, i.each(n, function(e, n) {
                    var r = t._stores[n];
                    r ? i.each(e, function(e) {
                        r.update(e);
                    }) :(i.has(t._updatesForUnknownStores, n) || (t._updatesForUnknownStores[n] = []), 
                    Array.prototype.push.apply(t._updatesForUnknownStores[n], e));
                }), i.each(t._stores, function(e) {
                    e.endUpdate();
                })), t._runAfterUpdateCallbacks();
            },
            _runAfterUpdateCallbacks:function() {
                var e = this, t = e._afterUpdateCallbacks;
                e._afterUpdateCallbacks = [], i.each(t, function(e) {
                    e();
                });
            },
            _pushUpdate:function(e, t, n) {
                var r = this;
                i.has(e, t) || (e[t] = []), e[t].push(n);
            },
            _getServerDoc:function(e, t) {
                var n = this;
                if (!i.has(n._serverDocuments, e)) return null;
                var r = n._serverDocuments[e];
                return r.get(t) || null;
            },
            _process_added:function(e, t) {
                var n = this, r = f.idParse(e.id), o = n._getServerDoc(e.collection, r);
                if (o) {
                    var i = void 0 !== o.document;
                    if (o.document = e.fields || {}, o.document._id = r, n._resetStores) {
                        var s = n._stores[e.collection].getDoc(e.id);
                        void 0 !== s && (e.fields = s), n._pushUpdate(t, e.collection, e);
                    } else if (i) throw new Error("Server sent add for existing id: " + e.id);
                } else n._pushUpdate(t, e.collection, e);
            },
            _process_changed:function(e, t) {
                var n = this, r = n._getServerDoc(e.collection, f.idParse(e.id));
                if (r) {
                    if (void 0 === r.document) throw new Error("Server sent changed for nonexisting id: " + e.id);
                    l.applyChanges(r.document, e.fields);
                } else n._pushUpdate(t, e.collection, e);
            },
            _process_removed:function(e, t) {
                var n = this, r = n._getServerDoc(e.collection, f.idParse(e.id));
                if (r) {
                    if (void 0 === r.document) throw new Error("Server sent removed for nonexisting id:" + e.id);
                    r.document = void 0;
                } else n._pushUpdate(t, e.collection, {
                    msg:"removed",
                    collection:e.collection,
                    id:e.id
                });
            },
            _process_updated:function(e, t) {
                var n = this;
                i.each(e.methods, function(e) {
                    i.each(n._documentsWrittenByStub[e], function(r) {
                        var o = n._getServerDoc(r.collection, r.id);
                        if (!o) throw new Error("Lost serverDoc for " + JSON.stringify(r));
                        if (!o.writtenByStubs[e]) throw new Error("Doc " + JSON.stringify(r) + " not written by  method " + e);
                        delete o.writtenByStubs[e], i.isEmpty(o.writtenByStubs) && (n._pushUpdate(t, r.collection, {
                            msg:"replace",
                            id:f.idStringify(r.id),
                            replace:o.document
                        }), i.each(o.flushCallbacks, function(e) {
                            e();
                        }), n._serverDocuments[r.collection].remove(r.id));
                    }), delete n._documentsWrittenByStub[e];
                    var r = n._methodInvokers[e];
                    if (!r) throw new Error("No callback invoker for method " + e);
                    n._runWhenAllServerDocsAreFlushed(i.bind(r.dataVisible, r));
                });
            },
            _process_ready:function(e, t) {
                var n = this;
                i.each(e.subs, function(e) {
                    n._runWhenAllServerDocsAreFlushed(function() {
                        var t = n._subscriptions[e];
                        t && (t.ready || (t.ready = !0, t.readyCallback && t.readyCallback(), t.readyDeps.changed()));
                    });
                });
            },
            _runWhenAllServerDocsAreFlushed:function(e) {
                var t = this, n = function() {
                    t._afterUpdateCallbacks.push(e);
                }, r = 0, o = function() {
                    --r, 0 === r && n();
                };
                i.each(t._serverDocuments, function(e) {
                    e.forEach(function(e) {
                        var n = i.any(e.writtenByStubs, function(e, n) {
                            var r = t._methodInvokers[n];
                            return r && r.sentMessage;
                        });
                        n && (++r, e.flushCallbacks.push(o));
                    });
                }), 0 === r && n();
            },
            _livedata_nosub:function(t) {
                var n = this;
                if (n._livedata_data(t), i.has(n._subscriptions, t.id)) {
                    var r = n._subscriptions[t.id].errorCallback, o = n._subscriptions[t.id].stopCallback;
                    n._subscriptions[t.id].remove();
                    var s = function(t) {
                        return t && t.error && new e.Error(t.error.error, t.error.reason, t.error.details);
                    };
                    r && t.error && r(s(t)), o && o(s(t));
                }
            },
            _process_nosub:function() {},
            _livedata_result:function(t) {
                var n = this;
                if (i.isEmpty(n._outstandingMethodBlocks)) return void e._debug("Received method result but no methods outstanding");
                for (var r = n._outstandingMethodBlocks[0].methods, o, s = 0; s < r.length && (o = r[s], 
                o.methodId !== t.id); s++) ;
                return o ? (r.splice(s, 1), void (i.has(t, "error") ? o.receiveResult(new e.Error(t.error.error, t.error.reason, t.error.details)) :o.receiveResult(void 0, t.result))) :void e._debug("Can't match method response to original method call", t);
            },
            _outstandingMethodFinished:function() {
                var e = this;
                if (!e._anyMethodsAreOutstanding()) {
                    if (!i.isEmpty(e._outstandingMethodBlocks)) {
                        var t = e._outstandingMethodBlocks.shift();
                        if (!i.isEmpty(t.methods)) throw new Error("No methods outstanding but nonempty block: " + JSON.stringify(t));
                        i.isEmpty(e._outstandingMethodBlocks) || e._sendOutstandingMethods();
                    }
                    e._maybeMigrate();
                }
            },
            _sendOutstandingMethods:function() {
                var e = this;
                i.isEmpty(e._outstandingMethodBlocks) || i.each(e._outstandingMethodBlocks[0].methods, function(e) {
                    e.sendMessage();
                });
            },
            _livedata_error:function(t) {
                e._debug("Received error from server: ", t.reason), t.offendingMessage && e._debug("For: ", t.offendingMessage);
            },
            _callOnReconnectAndSendAppropriateOutstandingMethods:function() {
                var e = this, t = e._outstandingMethodBlocks;
                if (e._outstandingMethodBlocks = [], e.onReconnect(), !i.isEmpty(t)) {
                    if (i.isEmpty(e._outstandingMethodBlocks)) return e._outstandingMethodBlocks = t, 
                    void e._sendOutstandingMethods();
                    i.last(e._outstandingMethodBlocks).wait || t[0].wait || (i.each(t[0].methods, function(t) {
                        i.last(e._outstandingMethodBlocks).methods.push(t), 1 === e._outstandingMethodBlocks.length && t.sendMessage();
                    }), t.shift()), i.each(t, function(t) {
                        e._outstandingMethodBlocks.push(t);
                    });
                }
            },
            _readyToMigrate:function() {
                var e = this;
                return i.isEmpty(e._methodInvokers);
            },
            _maybeMigrate:function() {
                var e = this;
                e._retryMigrate && e._readyToMigrate() && (e._retryMigrate(), e._retryMigrate = null);
            }
        }), _.Connection = u, p.connect = function(e, t) {
            var n = new u(e, t);
            return b.push(n), n;
        }, b = [], p._allSubscriptionsReady = function() {
            return i.all(b, function(e) {
                return i.all(e._subscriptions, function(e) {
                    return e.ready;
                });
            });
        };
    }.call(this), function() {
        if (e.refresh = function(e) {}, e.isClient) {
            var t = "/";
            "undefined" != typeof __meteor_runtime_config__ && __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL && (t = __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL);
            var n = new u(), r = function(t) {
                if (e._debug(t), Package.reload) {
                    var r = Package.reload.Reload._migrationData("livedata") || {}, o = r.DDPVersionNegotiationFailures || 0;
                    ++o, Package.reload.Reload._onMigrate("livedata", function() {
                        return [ !0, {
                            DDPVersionNegotiationFailures:o
                        } ];
                    }), n.retryLater(o, function() {
                        Package.reload.Reload._reload();
                    });
                }
            };
            e.connection = p.connect(t, {
                onDDPVersionNegotiationFailure:r
            }), i.each([ "subscribe", "methods", "call", "apply", "status", "reconnect", "disconnect" ], function(t) {
                e[t] = i.bind(e.connection[t], e.connection);
            });
        } else e.connection = null;
        e.default_connection = e.connection, e.connect = p.connect;
    }.call(this), "undefined" == typeof Package && (Package = {}), Package["ddp-client"] = {
        DDP:p,
        LivedataTest:_
    };
}();

!function() {
    var e = Package.meteor.Meteor, a = Package["ddp-client"].DDP, a;
    "undefined" == typeof Package && (Package = {}), Package.ddp = {
        DDP:a
    };
}();

!function() {
    var e = Package.meteor.Meteor;
    "undefined" == typeof Package && (Package = {}), Package.insecure = {};
}();

!function() {
    var e = Package.meteor.Meteor;
    "undefined" == typeof Package && (Package = {}), Package["ddp-server"] = {};
}();

!function() {
    var e = Package.meteor.Meteor, n = Package.random.Random, o = Package.ejson.EJSON, t = Package.underscore._, r = Package.minimongo.LocalCollection, i = Package.minimongo.Minimongo, c = Package["ddp-client"].DDP, l = Package.tracker.Tracker, a = Package.tracker.Deps, s = Package["diff-sequence"].DiffSequence, d = Package["mongo-id"].MongoID, u = Package.check.check, f = Package.check.Match, _, p;
    (function() {
        _ = function() {
            var e = this;
            e.noConnCollections = {};
        };
        var e = function(e, n) {
            return e in n || (n[e] = new r(e)), n[e];
        };
        t.extend(_.prototype, {
            open:function(n, o) {
                var t = this;
                return n ? o ? (o._mongo_livedata_collections || (o._mongo_livedata_collections = {}), 
                e(n, o._mongo_livedata_collections)) :e(n, t.noConnCollections) :new r();
            }
        }), _ = new _();
    }).call(this), function() {
        p = {}, p.Collection = function(o, i) {
            var l = this;
            if (!(l instanceof p.Collection)) throw new Error('use "new" to construct a Mongo.Collection');
            if (o || null === o || (e._debug("Warning: creating anonymous collection. It will not be saved or synchronized over the network. (Pass null for the collection name to turn off this warning.)"), 
            o = null), null !== o && "string" != typeof o) throw new Error("First argument to new Mongo.Collection must be a string or null");
            switch (i && i.methods && (i = {
                connection:i
            }), i && i.manager && !i.connection && (i.connection = i.manager), i = t.extend({
                connection:void 0,
                idGeneration:"STRING",
                transform:null,
                _driver:void 0,
                _preventAutopublish:!1
            }, i), i.idGeneration) {
              case "MONGO":
                l._makeNewID = function() {
                    var e = o ? c.randomStream("/collection/" + o) :n.insecure;
                    return new p.ObjectID(e.hexString(24));
                };
                break;

              case "STRING":
              default:
                l._makeNewID = function() {
                    var e = o ? c.randomStream("/collection/" + o) :n.insecure;
                    return e.id();
                };
            }
            if (l._transform = r.wrapTransform(i.transform), o && null !== i.connection ? i.connection ? l._connection = i.connection :e.isClient ? l._connection = e.connection :l._connection = e.server :l._connection = null, 
            i._driver || (o && l._connection === e.server && "undefined" != typeof MongoInternals && MongoInternals.defaultRemoteCollectionDriver ? i._driver = MongoInternals.defaultRemoteCollectionDriver() :i._driver = _), 
            l._collection = i._driver.open(o, l._connection), l._name = o, l._driver = i._driver, 
            l._connection && l._connection.registerStore) {
                var a = l._connection.registerStore(o, {
                    beginUpdate:function(e, n) {
                        (e > 1 || n) && l._collection.pauseObservers(), n && l._collection.remove({});
                    },
                    update:function(e) {
                        var n = d.idParse(e.id), o = l._collection.findOne(n);
                        if ("replace" === e.msg) {
                            var r = e.replace;
                            return void (r ? o ? l._collection.update(n, r) :l._collection.insert(r) :o && l._collection.remove(n));
                        }
                        if ("added" === e.msg) {
                            if (o) throw new Error("Expected not to find a document already present for an add");
                            l._collection.insert(t.extend({
                                _id:n
                            }, e.fields));
                        } else if ("removed" === e.msg) {
                            if (!o) throw new Error("Expected to find a document already present for removed");
                            l._collection.remove(n);
                        } else {
                            if ("changed" !== e.msg) throw new Error("I don't know how to deal with this message");
                            if (!o) throw new Error("Expected to find a document to change");
                            if (!t.isEmpty(e.fields)) {
                                var i = {};
                                t.each(e.fields, function(e, n) {
                                    void 0 === e ? (i.$unset || (i.$unset = {}), i.$unset[n] = 1) :(i.$set || (i.$set = {}), 
                                    i.$set[n] = e);
                                }), l._collection.update(n, i);
                            }
                        }
                    },
                    endUpdate:function() {
                        l._collection.resumeObservers();
                    },
                    saveOriginals:function() {
                        l._collection.saveOriginals();
                    },
                    retrieveOriginals:function() {
                        return l._collection.retrieveOriginals();
                    },
                    getDoc:function(e) {
                        return l.findOne(e);
                    }
                });
                if (!a) throw new Error("There is already a collection named '" + o + "'");
            }
            l._defineMutationMethods(), Package.autopublish && !i._preventAutopublish && l._connection && l._connection.publish && l._connection.publish(null, function() {
                return l.find();
            }, {
                is_auto:!0
            });
        }, t.extend(p.Collection.prototype, {
            _getFindSelector:function(e) {
                return 0 == e.length ? {} :e[0];
            },
            _getFindOptions:function(e) {
                var n = this;
                return e.length < 2 ? {
                    transform:n._transform
                } :(u(e[1], f.Optional(f.ObjectIncluding({
                    fields:f.Optional(f.OneOf(Object, void 0)),
                    sort:f.Optional(f.OneOf(Object, Array, void 0)),
                    limit:f.Optional(f.OneOf(Number, void 0)),
                    skip:f.Optional(f.OneOf(Number, void 0))
                }))), t.extend({
                    transform:n._transform
                }, e[1]));
            },
            find:function() {
                var e = this, n = t.toArray(arguments);
                return e._collection.find(e._getFindSelector(n), e._getFindOptions(n));
            },
            findOne:function() {
                var e = this, n = t.toArray(arguments);
                return e._collection.findOne(e._getFindSelector(n), e._getFindOptions(n));
            }
        }), p.Collection._publishCursor = function(e, n, o) {
            var t = e.observeChanges({
                added:function(e, t) {
                    n.added(o, e, t);
                },
                changed:function(e, t) {
                    n.changed(o, e, t);
                },
                removed:function(e) {
                    n.removed(o, e);
                }
            });
            n.onStop(function() {
                t.stop();
            });
        }, p.Collection._rewriteSelector = function(e) {
            if (r._selectorIsId(e) && (e = {
                _id:e
            }), t.isArray(e)) throw new Error("Mongo selector can't be an array.");
            if (!e || "_id" in e && !e._id) return {
                _id:n.id()
            };
            var o = {};
            return t.each(e, function(e, n) {
                e instanceof RegExp ? o[n] = i(e) :e && e.$regex instanceof RegExp ? (o[n] = i(e.$regex), 
                void 0 !== e.$options && (o[n].$options = e.$options)) :t.contains([ "$or", "$and", "$nor" ], n) ? o[n] = t.map(e, function(e) {
                    return p.Collection._rewriteSelector(e);
                }) :o[n] = e;
            }), o;
        };
        var i = function(e) {
            u(e, RegExp);
            var n = {
                $regex:e.source
            }, o = "";
            return e.ignoreCase && (o += "i"), e.multiline && (o += "m"), o && (n.$options = o), 
            n;
        }, l = function(n, o) {
            if (!r._selectorIsIdPerhapsAsObject(n)) throw new e.Error(403, "Not permitted. Untrusted code may only " + o + " documents by ID.");
        };
        t.each([ "insert", "update", "remove" ], function(n) {
            p.Collection.prototype[n] = function() {
                var o = this, r = t.toArray(arguments), i, a, s;
                if (r.length && (void 0 === r[r.length - 1] || r[r.length - 1] instanceof Function) && (i = r.pop()), 
                "insert" === n) {
                    if (!r.length) throw new Error("insert requires an argument");
                    if (r[0] = t.extend({}, r[0]), "_id" in r[0]) {
                        if (a = r[0]._id, !a || !("string" == typeof a || a instanceof p.ObjectID)) throw new Error("Meteor requires document _id fields to be non-empty strings or ObjectIDs");
                    } else {
                        var d = !0;
                        if (o._connection && o._connection !== e.server) {
                            var u = c._CurrentInvocation.get();
                            u || (d = !1);
                        }
                        d && (a = r[0]._id = o._makeNewID());
                    }
                } else if (r[0] = p.Collection._rewriteSelector(r[0]), "update" === n) {
                    var f = r[2] = t.clone(r[2]) || {};
                    if (f && "function" != typeof f && f.upsert) if (f.insertedId) {
                        if (!("string" == typeof f.insertedId || f.insertedId instanceof p.ObjectID)) throw new Error("insertedId must be string or ObjectID");
                    } else r[0]._id || (f.insertedId = o._makeNewID());
                }
                var _ = function(e) {
                    return "insert" === n ? (!a && e && (a = e), a) :e;
                }, v;
                if (i && (v = function(e, n) {
                    i(e, !e && _(n));
                }), o._connection && o._connection !== e.server) {
                    var u = c._CurrentInvocation.get(), h = u && u.isSimulation;
                    !e.isClient || v || h || (v = function(o) {
                        o && e._debug(n + " failed: " + (o.reason || o.stack));
                    }), h || "insert" === n || l(r[0], n), s = _(o._connection.apply(o._prefix + n, r, {
                        returnStubValue:!0
                    }, v));
                } else {
                    r.push(v);
                    try {
                        var m = o._collection[n].apply(o._collection, r);
                        s = _(m);
                    } catch (w) {
                        if (i) return i(w), null;
                        throw w;
                    }
                }
                return s;
            };
        }), p.Collection.prototype.upsert = function(e, n, o, r) {
            var i = this;
            return r || "function" != typeof o || (r = o, o = {}), i.update(e, n, t.extend({}, o, {
                _returnObject:!0,
                upsert:!0
            }), r);
        }, p.Collection.prototype._ensureIndex = function(e, n) {
            var o = this;
            if (!o._collection._ensureIndex) throw new Error("Can only call _ensureIndex on server collections");
            o._collection._ensureIndex(e, n);
        }, p.Collection.prototype._dropIndex = function(e) {
            var n = this;
            if (!n._collection._dropIndex) throw new Error("Can only call _dropIndex on server collections");
            n._collection._dropIndex(e);
        }, p.Collection.prototype._dropCollection = function() {
            var e = this;
            if (!e._collection.dropCollection) throw new Error("Can only call _dropCollection on server collections");
            e._collection.dropCollection();
        }, p.Collection.prototype._createCappedCollection = function(e, n) {
            var o = this;
            if (!o._collection._createCappedCollection) throw new Error("Can only call _createCappedCollection on server collections");
            o._collection._createCappedCollection(e, n);
        }, p.Collection.prototype.rawCollection = function() {
            var e = this;
            if (!e._collection.rawCollection) throw new Error("Can only call rawCollection on server collections");
            return e._collection.rawCollection();
        }, p.Collection.prototype.rawDatabase = function() {
            var e = this;
            if (!e._driver.mongo || !e._driver.mongo.db) throw new Error("Can only call rawDatabase on server collections");
            return e._driver.mongo.db;
        }, p.ObjectID = d.ObjectID, p.Cursor = r.Cursor, p.Collection.Cursor = p.Cursor, 
        p.Collection.ObjectID = p.ObjectID, function() {
            var e = function(e, n) {
                var o = [ "insert", "update", "remove", "fetch", "transform" ];
                t.each(t.keys(n), function(n) {
                    if (!t.contains(o, n)) throw new Error(e + ": Invalid key: " + n);
                });
                var i = this;
                if (i._restricted = !0, t.each([ "insert", "update", "remove" ], function(o) {
                    if (n.hasOwnProperty(o)) {
                        if (!(n[o] instanceof Function)) throw new Error(e + ": Value for `" + o + "` must be a function");
                        void 0 === n.transform ? n[o].transform = i._transform :n[o].transform = r.wrapTransform(n.transform), 
                        i._validators[o][e].push(n[o]);
                    }
                }), n.update || n.remove || n.fetch) {
                    if (n.fetch && !(n.fetch instanceof Array)) throw new Error(e + ": Value for `fetch` must be an array");
                    i._updateFetch(n.fetch);
                }
            };
            p.Collection.prototype.allow = function(n) {
                e.call(this, "allow", n);
            }, p.Collection.prototype.deny = function(n) {
                e.call(this, "deny", n);
            };
        }(), p.Collection.prototype._defineMutationMethods = function() {
            var n = this;
            if (n._restricted = !1, n._insecure = void 0, n._validators = {
                insert:{
                    allow:[],
                    deny:[]
                },
                update:{
                    allow:[],
                    deny:[]
                },
                remove:{
                    allow:[],
                    deny:[]
                },
                upsert:{
                    allow:[],
                    deny:[]
                },
                fetch:[],
                fetchAllFields:!1
            }, n._name && (n._prefix = "/" + n._name + "/", n._connection)) {
                var o = {};
                t.each([ "insert", "update", "remove" ], function(r) {
                    o[n._prefix + r] = function() {
                        u(arguments, [ f.Any ]);
                        var o = t.toArray(arguments);
                        try {
                            var i = null;
                            if ("insert" !== r || t.has(o[0], "_id") || (i = n._makeNewID()), this.isSimulation) return null !== i && (o[0]._id = i), 
                            n._collection[r].apply(n._collection, o);
                            if ("insert" !== r && l(o[0], r), n._restricted) {
                                if (0 === n._validators[r].allow.length) throw new e.Error(403, "Access denied. No allow validators set on restricted collection for method '" + r + "'.");
                                var c = "_validated" + r.charAt(0).toUpperCase() + r.slice(1);
                                return o.unshift(this.userId), "insert" === r && o.push(i), n[c].apply(n, o);
                            }
                            if (n._isInsecure()) return null !== i && (o[0]._id = i), n._collection[r].apply(n._collection, o);
                            throw new e.Error(403, "Access denied");
                        } catch (a) {
                            throw "MongoError" === a.name || "MinimongoError" === a.name ? new e.Error(409, a.toString()) :a;
                        }
                    };
                }), (e.isClient || n._connection === e.server) && n._connection.methods(o);
            }
        }, p.Collection.prototype._updateFetch = function(e) {
            var n = this;
            n._validators.fetchAllFields || (e ? n._validators.fetch = t.union(n._validators.fetch, e) :(n._validators.fetchAllFields = !0, 
            n._validators.fetch = null));
        }, p.Collection.prototype._isInsecure = function() {
            var e = this;
            return void 0 === e._insecure ? !!Package.insecure :e._insecure;
        };
        var a = function(e, n, t) {
            var r = n;
            return e.transform && (r = o.clone(n), null !== t && (r._id = t), r = e.transform(r)), 
            r;
        };
        p.Collection.prototype._validatedInsert = function(n, o, r) {
            var i = this;
            if (t.any(i._validators.insert.deny, function(e) {
                return e(n, a(e, o, r));
            })) throw new e.Error(403, "Access denied");
            if (t.all(i._validators.insert.allow, function(e) {
                return !e(n, a(e, o, r));
            })) throw new e.Error(403, "Access denied");
            null !== r && (o._id = r), i._collection.insert.call(i._collection, o);
        };
        var s = function(e, n) {
            return e.transform ? e.transform(n) :n;
        };
        p.Collection.prototype._validatedUpdate = function(n, o, i, c) {
            var l = this;
            if (u(i, Object), c = t.clone(c) || {}, !r._selectorIsIdPerhapsAsObject(o)) throw new Error("validated update should be of a single ID");
            if (c.upsert) throw new e.Error(403, "Access denied. Upserts not allowed in a restricted collection.");
            var a = "Access denied. In a restricted collection you can only update documents, not replace them. Use a Mongo update operator, such as '$set'.", d = [];
            if (t.isEmpty(i)) throw new e.Error(403, a);
            t.each(i, function(n, o) {
                if ("$" !== o.charAt(0)) throw new e.Error(403, a);
                if (!t.has(v, o)) throw new e.Error(403, "Access denied. Operator " + o + " not allowed in a restricted collection.");
                t.each(t.keys(n), function(e) {
                    -1 !== e.indexOf(".") && (e = e.substring(0, e.indexOf("."))), t.contains(d, e) || d.push(e);
                });
            });
            var f = {
                transform:null
            };
            l._validators.fetchAllFields || (f.fields = {}, t.each(l._validators.fetch, function(e) {
                f.fields[e] = 1;
            }));
            var _ = l._collection.findOne(o, f);
            if (!_) return 0;
            if (t.any(l._validators.update.deny, function(e) {
                var o = s(e, _);
                return e(n, o, d, i);
            })) throw new e.Error(403, "Access denied");
            if (t.all(l._validators.update.allow, function(e) {
                var o = s(e, _);
                return !e(n, o, d, i);
            })) throw new e.Error(403, "Access denied");
            return c._forbidReplace = !0, l._collection.update.call(l._collection, o, i, c);
        };
        var v = {
            $inc:1,
            $set:1,
            $unset:1,
            $addToSet:1,
            $pop:1,
            $pullAll:1,
            $pull:1,
            $pushAll:1,
            $push:1,
            $bit:1
        };
        p.Collection.prototype._validatedRemove = function(n, o) {
            var r = this, i = {
                transform:null
            };
            r._validators.fetchAllFields || (i.fields = {}, t.each(r._validators.fetch, function(e) {
                i.fields[e] = 1;
            }));
            var c = r._collection.findOne(o, i);
            if (!c) return 0;
            if (t.any(r._validators.remove.deny, function(e) {
                return e(n, s(e, c));
            })) throw new e.Error(403, "Access denied");
            if (t.all(r._validators.remove.allow, function(e) {
                return !e(n, s(e, c));
            })) throw new e.Error(403, "Access denied");
            return r._collection.remove.call(r._collection, o);
        }, e.Collection = p.Collection;
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.mongo = {
        Mongo:p
    };
}();

!function() {
    var e = Package.meteor.Meteor;
    "undefined" == typeof Package && (Package = {}), Package["blaze-html-templates"] = {};
}();

!function() {
    var e = Package.meteor.Meteor, a = Package.underscore._, t = Package.tracker.Tracker, i = Package.tracker.Deps, n = Package.ejson.EJSON, s = Package.ecmascript.ECMAScript, r = Package["babel-runtime"].babelHelpers, c = Package["ecmascript-runtime"].Symbol, o = Package["ecmascript-runtime"].Map, u = Package["ecmascript-runtime"].Set, l = Package.promise.Promise, d;
    (function() {
        var e = function(e) {
            return void 0 === e ? "undefined" :n.stringify(e);
        }, i = function(e) {
            return void 0 === e || "undefined" === e ? void 0 :n.parse(e);
        }, s = function(e) {
            e && e.changed();
        };
        d = function(e) {
            if (e) if ("string" == typeof e) d._registerDictForMigrate(e, this), this.keys = d._loadMigratedDict(e) || {}, 
            this.name = e; else {
                if ("object" != typeof e) throw new Error("Invalid ReactiveDict argument: " + e);
                this.keys = e;
            } else this.keys = {};
            this.allDeps = new t.Dependency(), this.keyDeps = {}, this.keyValueDeps = {};
        }, a.extend(d.prototype, {
            set:function(t, i) {
                var n = this;
                if ("object" == typeof t && void 0 === i) return void n._setObject(t);
                var r = t;
                i = e(i);
                var c = a.has(n.keys, r), o = c ? n.keys[r] :"undefined", u = i !== o;
                n.keys[r] = i, (u || !c) && n.allDeps.changed(), u && (s(n.keyDeps[r]), n.keyValueDeps[r] && (s(n.keyValueDeps[r][o]), 
                s(n.keyValueDeps[r][i])));
            },
            setDefault:function(e, t) {
                var i = this;
                a.has(i.keys, e) || i.set(e, t);
            },
            get:function(e) {
                var a = this;
                return a._ensureKey(e), a.keyDeps[e].depend(), i(a.keys[e]);
            },
            equals:function(s, r) {
                var c = this, o = null;
                if (Package.mongo && (o = Package.mongo.Mongo.ObjectID), !("string" == typeof r || "number" == typeof r || "boolean" == typeof r || "undefined" == typeof r || r instanceof Date || o && r instanceof o || null === r)) throw new Error("ReactiveDict.equals: value must be scalar");
                var u = e(r);
                if (t.active) {
                    c._ensureKey(s), a.has(c.keyValueDeps[s], u) || (c.keyValueDeps[s][u] = new t.Dependency());
                    var l = c.keyValueDeps[s][u].depend();
                    l && t.onInvalidate(function() {
                        c.keyValueDeps[s][u].hasDependents() || delete c.keyValueDeps[s][u];
                    });
                }
                var d = void 0;
                return a.has(c.keys, s) && (d = i(c.keys[s])), n.equals(d, r);
            },
            all:function() {
                this.allDeps.depend();
                var e = {};
                return a.each(this.keys, function(a, t) {
                    e[t] = i(a);
                }), e;
            },
            clear:function() {
                var e = this, t = e.keys;
                e.keys = {}, e.allDeps.changed(), a.each(t, function(a, t) {
                    s(e.keyDeps[t]), s(e.keyValueDeps[t][a]), s(e.keyValueDeps[t].undefined);
                });
            },
            "delete":function(e) {
                var t = this, i = !1;
                if (a.has(t.keys, e)) {
                    var n = t.keys[e];
                    delete t.keys[e], s(t.keyDeps[e]), t.keyValueDeps[e] && (s(t.keyValueDeps[e][n]), 
                    s(t.keyValueDeps[e].undefined)), t.allDeps.changed(), i = !0;
                }
                return i;
            },
            _setObject:function(e) {
                var t = this;
                a.each(e, function(e, a) {
                    t.set(a, e);
                });
            },
            _ensureKey:function(e) {
                var a = this;
                e in a.keyDeps || (a.keyDeps[e] = new t.Dependency(), a.keyValueDeps[e] = {});
            },
            _getMigrationData:function() {
                return this.keys;
            }
        });
    }).call(this), function() {
        if (d._migratedDictData = {}, d._dictsToMigrate = {}, d._loadMigratedDict = function(e) {
            return a.has(d._migratedDictData, e) ? d._migratedDictData[e] :null;
        }, d._registerDictForMigrate = function(e, t) {
            if (a.has(d._dictsToMigrate, e)) throw new Error("Duplicate ReactiveDict name: " + e);
            d._dictsToMigrate[e] = t;
        }, e.isClient && Package.reload) {
            var t = Package.reload.Reload._migrationData("reactive-dict");
            t && t.dicts && (d._migratedDictData = t.dicts), Package.reload.Reload._onMigrate("reactive-dict", function() {
                var e = d._dictsToMigrate, a = {};
                for (var t in r.sanitizeForInObject(e)) a[t] = e[t]._getMigrationData();
                return [ !0, {
                    dicts:a
                } ];
            });
        }
    }.call(this), "undefined" == typeof Package && (Package = {}), Package["reactive-dict"] = {
        ReactiveDict:d
    };
}();

!function() {
    var e = Package.meteor.Meteor, a = Package.underscore._, c = Package["reactive-dict"].ReactiveDict, n = Package.ejson.EJSON, i;
    (function() {
        i = new c("session");
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.session = {
        Session:i
    };
}();

!function() {
    var e = Package.meteor.Meteor, t, n;
    (function() {
        !function(e, t) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) :function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
            } :t(e);
        }("undefined" != typeof window ? window :this, function(e, t) {
            function n(e) {
                var t = e.length, n = ie.type(e);
                return "function" === n || ie.isWindow(e) ? !1 :1 === e.nodeType && t ? !0 :"array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
            }
            function r(e, t, n) {
                if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n;
                });
                if (t.nodeType) return ie.grep(e, function(e) {
                    return e === t !== n;
                });
                if ("string" == typeof t) {
                    if (fe.test(t)) return ie.filter(t, e, n);
                    t = ie.filter(t, e);
                }
                return ie.grep(e, function(e) {
                    return ie.inArray(e, t) >= 0 !== n;
                });
            }
            function i(e, t) {
                do e = e[t]; while (e && 1 !== e.nodeType);
                return e;
            }
            function o(e) {
                var t = xe[e] = {};
                return ie.each(e.match(be) || [], function(e, n) {
                    t[n] = !0;
                }), t;
            }
            function a() {
                he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) :(he.detachEvent("onreadystatechange", s), 
                e.detachEvent("onload", s));
            }
            function s() {
                (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), 
                ie.ready());
            }
            function u(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
                    if (n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 :"false" === n ? !1 :"null" === n ? null :+n + "" === n ? +n :Ne.test(n) ? ie.parseJSON(n) :n;
                        } catch (i) {}
                        ie.data(e, t, n);
                    } else n = void 0;
                }
                return n;
            }
            function l(e) {
                var t;
                for (t in e) if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0;
            }
            function c(e, t, n, r) {
                if (ie.acceptData(e)) {
                    var i, o, a = ie.expando, s = e.nodeType, u = s ? ie.cache :e, l = s ? e[a] :e[a] && a;
                    if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = J.pop() || ie.guid++ :a), 
                    u[l] || (u[l] = s ? {} :{
                        toJSON:ie.noop
                    }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ie.extend(u[l], t) :u[l].data = ie.extend(u[l].data, t)), 
                    o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), 
                    "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) :i = o, 
                    i;
                }
            }
            function d(e, t, n) {
                if (ie.acceptData(e)) {
                    var r, i, o = e.nodeType, a = o ? ie.cache :e, s = o ? e[ie.expando] :ie.expando;
                    if (a[s]) {
                        if (t && (r = n ? a[s] :a[s].data)) {
                            ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) :t in r ? t = [ t ] :(t = ie.camelCase(t), 
                            t = t in r ? [ t ] :t.split(" ")), i = t.length;
                            for (;i--; ) delete r[t[i]];
                            if (n ? !l(r) :!ie.isEmptyObject(r)) return;
                        }
                        (n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([ e ], !0) :ne.deleteExpando || a != a.window ? delete a[s] :a[s] = null);
                    }
                }
            }
            function f() {
                return !0;
            }
            function p() {
                return !1;
            }
            function h() {
                try {
                    return he.activeElement;
                } catch (e) {}
            }
            function m(e) {
                var t = Fe.split("|"), n = e.createDocumentFragment();
                if (n.createElement) for (;t.length; ) n.createElement(t.pop());
                return n;
            }
            function g(e, t) {
                var n, r, i = 0, o = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") :typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") :void 0;
                if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) :ie.merge(o, g(r, t));
                return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([ e ], o) :o;
            }
            function v(e) {
                je.test(e.type) && (e.defaultChecked = e.checked);
            }
            function y(e, t) {
                return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t :t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) :e;
            }
            function b(e) {
                return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e;
            }
            function x(e) {
                var t = Ve.exec(e.type);
                return t ? e.type = t[1] :e.removeAttribute("type"), e;
            }
            function w(e, t) {
                for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"));
            }
            function T(e, t) {
                if (1 === t.nodeType && ie.hasData(e)) {
                    var n, r, i, o = ie._data(e), a = ie._data(t, o), s = o.events;
                    if (s) {
                        delete a.handle, a.events = {};
                        for (n in s) for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r]);
                    }
                    a.data && (a.data = ie.extend({}, a.data));
                }
            }
            function C(e, t) {
                var n, r, i;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                        i = ie._data(t);
                        for (r in i.events) ie.removeEvent(t, r, i.handle);
                        t.removeAttribute(ie.expando);
                    }
                    "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) :"object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
                    ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) :"input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
                    t.value !== e.value && (t.value = e.value)) :"option" === n ? t.defaultSelected = t.selected = e.defaultSelected :("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
                }
            }
            function N(t, n) {
                var r, i = ie(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display :ie.css(i[0], "display");
                return i.detach(), o;
            }
            function E(e) {
                var t = he, n = Ze[e];
                return n || (n = N(e, t), "none" !== n && n || (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), 
                t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), 
                n = N(e, t), Ke.detach()), Ze[e] = n), n;
            }
            function k(e, t) {
                return {
                    get:function() {
                        var n = e();
                        if (null != n) return n ? void delete this.get :(this.get = t).apply(this, arguments);
                    }
                };
            }
            function S(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ft.length; i--; ) if (t = ft[i] + n, 
                t in e) return t;
                return r;
            }
            function A(e, t) {
                for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), 
                n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) :(i = Ae(r), 
                (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n :ie.css(r, "display"))));
                for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" :"none"));
                return e;
            }
            function D(e, t, n) {
                var r = ut.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") :t;
            }
            function j(e, t, n, r, i) {
                for (var o = n === (r ? "border" :"content") ? 4 :"width" === t ? 1 :0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + Se[o], !0, i)), 
                r ? ("content" === n && (a -= ie.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Se[o] + "Width", !0, i))) :(a += ie.css(e, "padding" + Se[o], !0, i), 
                "padding" !== n && (a += ie.css(e, "border" + Se[o] + "Width", !0, i)));
                return a;
            }
            function L(e, t, n) {
                var r = !0, i = "width" === t ? e.offsetWidth :e.offsetHeight, o = nt(e), a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = rt(e, t, o), (0 > i || null == i) && (i = e.style[t]), tt.test(i)) return i;
                    r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
                }
                return i + j(e, t, n || (a ? "border" :"content"), r, o) + "px";
            }
            function H(e, t, n, r, i) {
                return new H.prototype.init(e, t, n, r, i);
            }
            function q() {
                return setTimeout(function() {
                    pt = void 0;
                }), pt = ie.now();
            }
            function _(e, t) {
                var n, r = {
                    height:e
                }, i = 0;
                for (t = t ? 1 :0; 4 > i; i += 2 - t) n = Se[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r;
            }
            function M(e, t, n) {
                for (var r, i = (bt[t] || []).concat(bt["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r;
            }
            function F(e, t, n) {
                var r, i, o, a, s, u, l, c, d = this, f = {}, p = e.style, h = e.nodeType && Ae(e), m = ie._data(e, "fxshow");
                n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, 
                u = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || u();
                }), s.unqueued++, d.always(function() {
                    d.always(function() {
                        s.unqueued--, ie.queue(e, "fx").length || s.empty.fire();
                    });
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
                l = ie.css(e, "display"), c = "none" === l ? ie._data(e, "olddisplay") || E(e.nodeName) :l, 
                "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 :p.display = "inline-block")), 
                n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
                }));
                for (r in t) if (i = t[r], mt.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" :"show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        h = !0;
                    }
                    f[r] = m && m[r] || ie.style(e, r);
                } else l = void 0;
                if (ie.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) :l) && (p.display = l); else {
                    m ? "hidden" in m && (h = m.hidden) :m = ie._data(e, "fxshow", {}), o && (m.hidden = !h), 
                    h ? ie(e).show() :d.done(function() {
                        ie(e).hide();
                    }), d.done(function() {
                        var t;
                        ie._removeData(e, "fxshow");
                        for (t in f) ie.style(e, t, f[t]);
                    });
                    for (r in f) a = M(h ? m[r] :0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, 
                    a.start = "width" === r || "height" === r ? 1 :0));
                }
            }
            function O(e, t) {
                var n, r, i, o, a;
                for (n in e) if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], 
                o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i);
                } else t[r] = i;
            }
            function B(e, t, n) {
                var r, i, o = 0, a = yt.length, s = ie.Deferred().always(function() {
                    delete u.elem;
                }), u = function() {
                    if (i) return !1;
                    for (var t = pt || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                    return s.notifyWith(e, [ l, o, n ]), 1 > o && u ? n :(s.resolveWith(e, [ l ]), !1);
                }, l = s.promise({
                    elem:e,
                    props:ie.extend({}, t),
                    opts:ie.extend(!0, {
                        specialEasing:{}
                    }, n),
                    originalProperties:t,
                    originalOptions:n,
                    startTime:pt || q(),
                    duration:n.duration,
                    tweens:[],
                    createTween:function(t, n) {
                        var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r;
                    },
                    stop:function(t) {
                        var n = 0, r = t ? l.tweens.length :0;
                        if (i) return this;
                        for (i = !0; r > n; n++) l.tweens[n].run(1);
                        return t ? s.resolveWith(e, [ l, t ]) :s.rejectWith(e, [ l, t ]), this;
                    }
                }), c = l.props;
                for (O(c, l.opts.specialEasing); a > o; o++) if (r = yt[o].call(l, e, c, l.opts)) return r;
                return ie.map(c, M, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), 
                ie.fx.timer(ie.extend(u, {
                    elem:e,
                    anim:l,
                    queue:l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
            }
            function P(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0, o = t.toLowerCase().match(be) || [];
                    if (ie.isFunction(n)) for (;r = o[i++]; ) "+" === r.charAt(0) ? (r = r.slice(1) || "*", 
                    (e[r] = e[r] || []).unshift(n)) :(e[r] = e[r] || []).push(n);
                };
            }
            function R(e, t, n, r) {
                function i(s) {
                    var u;
                    return o[s] = !0, ie.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || a || o[l] ? a ? !(u = l) :void 0 :(t.dataTypes.unshift(l), 
                        i(l), !1);
                    }), u;
                }
                var o = {}, a = e === zt;
                return i(t.dataTypes[0]) || !o["*"] && i("*");
            }
            function W(e, t) {
                var n, r, i = ie.ajaxSettings.flatOptions || {};
                for (r in t) void 0 !== t[r] && ((i[r] ? e :n || (n = {}))[r] = t[r]);
                return n && ie.extend(!0, e, n), e;
            }
            function $(e, t, n) {
                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
                void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i) for (a in s) if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break;
                }
                if (u[0] in n) o = u[0]; else {
                    for (a in n) {
                        if (!u[0] || e.converters[a + " " + u[0]]) {
                            o = a;
                            break;
                        }
                        r || (r = a);
                    }
                    o = o || r;
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) :void 0;
            }
            function z(e, t, n, r) {
                var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] :l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break;
                    }
                    if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                        t = a(t);
                    } catch (d) {
                        return {
                            state:"parsererror",
                            error:a ? d :"No conversion from " + u + " to " + o
                        };
                    }
                }
                return {
                    state:"success",
                    data:t
                };
            }
            function I(e, t, n, r) {
                var i;
                if (ie.isArray(t)) ie.each(t, function(t, i) {
                    n || Vt.test(e) ? r(e, i) :I(e + "[" + ("object" == typeof i ? t :"") + "]", i, n, r);
                }); else if (n || "object" !== ie.type(t)) r(e, t); else for (i in t) I(e + "[" + i + "]", t[i], n, r);
            }
            function X() {
                try {
                    return new e.XMLHttpRequest();
                } catch (t) {}
            }
            function U() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP");
                } catch (t) {}
            }
            function V(e) {
                return ie.isWindow(e) ? e :9 === e.nodeType ? e.defaultView || e.parentWindow :!1;
            }
            var J = [], Y = J.slice, Q = J.concat, G = J.push, K = J.indexOf, Z = {}, ee = Z.toString, te = Z.hasOwnProperty, ne = {}, re = "1.11.2", ie = function(e, t) {
                return new ie.fn.init(e, t);
            }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, se = /-([\da-z])/gi, ue = function(e, t) {
                return t.toUpperCase();
            };
            ie.fn = ie.prototype = {
                jquery:re,
                constructor:ie,
                selector:"",
                length:0,
                toArray:function() {
                    return Y.call(this);
                },
                get:function(e) {
                    return null != e ? 0 > e ? this[e + this.length] :this[e] :Y.call(this);
                },
                pushStack:function(e) {
                    var t = ie.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t;
                },
                each:function(e, t) {
                    return ie.each(this, e, t);
                },
                map:function(e) {
                    return this.pushStack(ie.map(this, function(t, n) {
                        return e.call(t, n, t);
                    }));
                },
                slice:function() {
                    return this.pushStack(Y.apply(this, arguments));
                },
                first:function() {
                    return this.eq(0);
                },
                last:function() {
                    return this.eq(-1);
                },
                eq:function(e) {
                    var t = this.length, n = +e + (0 > e ? t :0);
                    return this.pushStack(n >= 0 && t > n ? [ this[n] ] :[]);
                },
                end:function() {
                    return this.prevObject || this.constructor(null);
                },
                push:G,
                sort:J.sort,
                splice:J.splice
            }, ie.extend = ie.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), 
                s === u && (a = this, s--); u > s; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], 
                n = i[r], a !== n && (l && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, 
                o = e && ie.isArray(e) ? e :[]) :o = e && ie.isPlainObject(e) ? e :{}, a[r] = ie.extend(l, o, n)) :void 0 !== n && (a[r] = n));
                return a;
            }, ie.extend({
                expando:"jQuery" + (re + Math.random()).replace(/\D/g, ""),
                isReady:!0,
                error:function(e) {
                    throw new Error(e);
                },
                noop:function() {},
                isFunction:function(e) {
                    return "function" === ie.type(e);
                },
                isArray:Array.isArray || function(e) {
                    return "array" === ie.type(e);
                },
                isWindow:function(e) {
                    return null != e && e == e.window;
                },
                isNumeric:function(e) {
                    return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0;
                },
                isEmptyObject:function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                isPlainObject:function(e) {
                    var t;
                    if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                    } catch (n) {
                        return !1;
                    }
                    if (ne.ownLast) for (t in e) return te.call(e, t);
                    for (t in e) ;
                    return void 0 === t || te.call(e, t);
                },
                type:function(e) {
                    return null == e ? e + "" :"object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" :typeof e;
                },
                globalEval:function(t) {
                    t && ie.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t);
                    })(t);
                },
                camelCase:function(e) {
                    return e.replace(ae, "ms-").replace(se, ue);
                },
                nodeName:function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                },
                each:function(e, t, r) {
                    var i, o = 0, a = e.length, s = n(e);
                    if (r) {
                        if (s) for (;a > o && (i = t.apply(e[o], r), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], r), 
                        i === !1) break;
                    } else if (s) for (;a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), 
                    i === !1) break;
                    return e;
                },
                trim:function(e) {
                    return null == e ? "" :(e + "").replace(oe, "");
                },
                makeArray:function(e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [ e ] :e) :G.call(r, e)), 
                    r;
                },
                inArray:function(e, t, n) {
                    var r;
                    if (t) {
                        if (K) return K.call(t, e, n);
                        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) :n :0; r > n; n++) if (n in t && t[n] === e) return n;
                    }
                    return -1;
                },
                merge:function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; n > r; ) e[i++] = t[r++];
                    if (n !== n) for (;void 0 !== t[r]; ) e[i++] = t[r++];
                    return e.length = i, e;
                },
                grep:function(e, t, n) {
                    for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                    return i;
                },
                map:function(e, t, r) {
                    var i, o = 0, a = e.length, s = n(e), u = [];
                    if (s) for (;a > o; o++) i = t(e[o], o, r), null != i && u.push(i); else for (o in e) i = t(e[o], o, r), 
                    null != i && u.push(i);
                    return Q.apply([], u);
                },
                guid:1,
                proxy:function(e, t) {
                    var n, r, i;
                    return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Y.call(arguments, 2), 
                    r = function() {
                        return e.apply(t || this, n.concat(Y.call(arguments)));
                    }, r.guid = e.guid = e.guid || ie.guid++, r) :void 0;
                },
                now:function() {
                    return +new Date();
                },
                support:ne
            }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                Z["[object " + t + "]"] = t.toLowerCase();
            });
            var le = function(e) {
                function t(e, t, n, r) {
                    var i, o, a, s, u, l, d, p, h, m;
                    if ((t ? t.ownerDocument || t :R) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, 
                    "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!r && _) {
                        if (11 !== s && (i = ye.exec(e))) if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n;
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), 
                            n;
                        } else {
                            if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), 
                            n;
                        }
                        if (w.qsa && (!M || !M.test(e))) {
                            if (p = d = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (l = E(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") :t.setAttribute("id", p), 
                                p = "[id='" + p + "'] ", u = l.length; u--; ) l[u] = p + f(l[u]);
                                h = be.test(e) && c(t.parentNode) || t, m = l.join(",");
                            }
                            if (m) try {
                                return K.apply(n, h.querySelectorAll(m)), n;
                            } catch (g) {} finally {
                                d || t.removeAttribute("id");
                            }
                        }
                    }
                    return S(e.replace(ue, "$1"), t, n, r);
                }
                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r;
                    }
                    var t = [];
                    return e;
                }
                function r(e) {
                    return e[P] = !0, e;
                }
                function i(e) {
                    var t = H.createElement("div");
                    try {
                        return !!e(t);
                    } catch (n) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null;
                    }
                }
                function o(e, t) {
                    for (var n = e.split("|"), r = e.length; r--; ) T.attrHandle[n[r]] = t;
                }
                function a(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                    if (r) return r;
                    if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
                    return e ? 1 :-1;
                }
                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e;
                    };
                }
                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function l(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                        });
                    });
                }
                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e;
                }
                function d() {}
                function f(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r;
                }
                function p(e, t, n) {
                    var r = t.dir, i = n && "parentNode" === r, o = $++;
                    return t.first ? function(t, n, o) {
                        for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
                    } :function(t, n, a) {
                        var s, u, l = [ W, o ];
                        if (a) {
                            for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                        } else for (;t = t[r]; ) if (1 === t.nodeType || i) {
                            if (u = t[P] || (t[P] = {}), (s = u[r]) && s[0] === W && s[1] === o) return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a)) return !0;
                        }
                    };
                }
                function h(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                        return !0;
                    } :e[0];
                }
                function m(e, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                    return r;
                }
                function g(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), 
                    l && t.push(s));
                    return a;
                }
                function v(e, t, n, i, o, a) {
                    return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, u) {
                        var l, c, d, f = [], p = [], h = a.length, v = r || m(t || "*", s.nodeType ? [ s ] :s, []), y = !e || !r && t ? v :g(v, f, e, s, u), b = n ? o || (r ? e :h || i) ? [] :a :y;
                        if (n && n(y, b, s, u), i) for (l = g(b, p), i(l, [], s, u), c = l.length; c--; ) (d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = b.length; c--; ) (d = b[c]) && l.push(y[c] = d);
                                    o(null, b = [], l, u);
                                }
                                for (c = b.length; c--; ) (d = b[c]) && (l = o ? ee(r, d) :f[c]) > -1 && (r[l] = !(a[l] = d));
                            }
                        } else b = g(b === a ? b.splice(h, b.length) :b), o ? o(null, a, b, u) :K.apply(a, b);
                    });
                }
                function y(e) {
                    for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 :0, u = p(function(e) {
                        return e === t;
                    }, a, !0), l = p(function(e) {
                        return ee(t, e) > -1;
                    }, a, !0), c = [ function(e, n, r) {
                        var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) :l(e, n, r));
                        return t = null, i;
                    } ]; i > s; s++) if (n = T.relative[e[s].type]) c = [ p(h(c), n) ]; else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                            for (r = ++s; i > r && !T.relative[e[r].type]; r++) ;
                            return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                                value:" " === e[s - 2].type ? "*" :""
                            })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e));
                        }
                        c.push(n);
                    }
                    return h(c);
                }
                function b(e, n) {
                    var i = n.length > 0, o = e.length > 0, a = function(r, a, s, u, l) {
                        var c, d, f, p = 0, h = "0", m = r && [], v = [], y = A, b = r || o && T.find.TAG("*", l), x = W += null == y ? 1 :Math.random() || .1, w = b.length;
                        for (l && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                            if (o && c) {
                                for (d = 0; f = e[d++]; ) if (f(c, a, s)) {
                                    u.push(c);
                                    break;
                                }
                                l && (W = x);
                            }
                            i && ((c = !f && c) && p--, r && m.push(c));
                        }
                        if (p += h, i && h !== p) {
                            for (d = 0; f = n[d++]; ) f(m, v, a, s);
                            if (r) {
                                if (p > 0) for (;h--; ) m[h] || v[h] || (v[h] = Q.call(u));
                                v = g(v);
                            }
                            K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u);
                        }
                        return l && (W = x, A = y), m;
                    };
                    return i ? r(a) :a;
                }
                var x, w, T, C, N, E, k, S, A, D, j, L, H, q, _, M, F, O, B, P = "sizzle" + 1 * new Date(), R = e.document, W = 0, $ = 0, z = n(), I = n(), X = n(), U = function(e, t) {
                    return e === t && (j = !0), 0;
                }, V = 1 << 31, J = {}.hasOwnProperty, Y = [], Q = Y.pop, G = Y.push, K = Y.push, Z = Y.slice, ee = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
                    return -1;
                }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(ae), pe = new RegExp("^" + ie + "$"), he = {
                    ID:new RegExp("^#(" + re + ")"),
                    CLASS:new RegExp("^\\.(" + re + ")"),
                    TAG:new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR:new RegExp("^" + oe),
                    PSEUDO:new RegExp("^" + ae),
                    CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool:new RegExp("^(?:" + te + ")$", "i"),
                    needsContext:new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Te = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t :0 > r ? String.fromCharCode(r + 65536) :String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
                }, Ce = function() {
                    L();
                };
                try {
                    K.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType;
                } catch (Ne) {
                    K = {
                        apply:Y.length ? function(e, t) {
                            G.apply(e, Z.call(t));
                        } :function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                            e.length = n - 1;
                        }
                    };
                }
                w = t.support = {}, N = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName :!1;
                }, L = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e :R;
                    return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = r.documentElement, 
                    n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) :n.attachEvent && n.attachEvent("onunload", Ce)), 
                    _ = !N(r), w.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className");
                    }), w.getElementsByTagName = i(function(e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
                    }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) {
                        return q.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length;
                    }), w.getById ? (T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && _) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [ n ] :[];
                        }
                    }, T.filter.ID = function(e) {
                        var t = e.replace(we, Te);
                        return function(e) {
                            return e.getAttribute("id") === t;
                        };
                    }) :(delete T.find.ID, T.filter.ID = function(e) {
                        var t = e.replace(we, Te);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t;
                        };
                    }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) :w.qsa ? t.querySelectorAll(e) :void 0;
                    } :function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                            return r;
                        }
                        return o;
                    }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                        return _ ? t.getElementsByClassName(e) :void 0;
                    }, F = [], M = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
                        q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                        e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), 
                        e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), 
                        e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), 
                        e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]");
                    }), i(function(e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), 
                        e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                        M.push(",.*:");
                    })), (w.matchesSelector = ve.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                        w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), F.push("!=", ae);
                    }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), 
                    t = ve.test(q.compareDocumentPosition), B = t || ve.test(q.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement :e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) :e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                    } :function(e, t) {
                        if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                        return !1;
                    }, U = t ? function(e, t) {
                        if (e === t) return j = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n :(n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) :1, 
                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && B(R, e) ? -1 :t === r || t.ownerDocument === R && B(R, t) ? 1 :D ? ee(D, e) - ee(D, t) :0 :4 & n ? -1 :1);
                    } :function(e, t) {
                        if (e === t) return j = !0, 0;
                        var n, i = 0, o = e.parentNode, s = t.parentNode, u = [ e ], l = [ t ];
                        if (!o || !s) return e === r ? -1 :t === r ? 1 :o ? -1 :s ? 1 :D ? ee(D, e) - ee(D, t) :0;
                        if (o === s) return a(e, t);
                        for (n = e; n = n.parentNode; ) u.unshift(n);
                        for (n = t; n = n.parentNode; ) l.unshift(n);
                        for (;u[i] === l[i]; ) i++;
                        return i ? a(u[i], l[i]) :u[i] === R ? -1 :l[i] === R ? 1 :0;
                    }, r) :H;
                }, t.matches = function(e, n) {
                    return t(e, null, null, n);
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== H && L(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !_ || F && F.test(n) || M && M.test(n))) try {
                        var r = O.call(e, n);
                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
                    } catch (i) {}
                    return t(n, H, null, [ e ]).length > 0;
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== H && L(e), B(e, t);
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== H && L(e);
                    var n = T.attrHandle[t.toLowerCase()], r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) :void 0;
                    return void 0 !== r ? r :w.attributes || !_ ? e.getAttribute(t) :(r = e.getAttributeNode(t)) && r.specified ? r.value :null;
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }, t.uniqueSort = function(e) {
                    var t, n = [], r = 0, i = 0;
                    if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                        for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                        for (;r--; ) e.splice(n[r], 1);
                    }
                    return D = null, e;
                }, C = t.getText = function(e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                        } else if (3 === i || 4 === i) return e.nodeValue;
                    } else for (;t = e[r++]; ) n += C(t);
                    return n;
                }, T = t.selectors = {
                    cacheLength:50,
                    createPseudo:r,
                    match:he,
                    attrHandle:{},
                    find:{},
                    relative:{
                        ">":{
                            dir:"parentNode",
                            first:!0
                        },
                        " ":{
                            dir:"parentNode"
                        },
                        "+":{
                            dir:"previousSibling",
                            first:!0
                        },
                        "~":{
                            dir:"previousSibling"
                        }
                    },
                    preFilter:{
                        ATTR:function(e) {
                            return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), 
                            "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD:function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) :2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) :e[3] && t.error(e[0]), 
                            e;
                        },
                        PSEUDO:function(e) {
                            var t, n = !e[6] && e[2];
                            return he.CHILD.test(e[0]) ? null :(e[3] ? e[2] = e[4] || e[5] || "" :n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                            e[2] = n.slice(0, t)), e.slice(0, 3));
                        }
                    },
                    filter:{
                        TAG:function(e) {
                            var t = e.replace(we, Te).toLowerCase();
                            return "*" === e ? function() {
                                return !0;
                            } :function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                        },
                        CLASS:function(e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                            });
                        },
                        ATTR:function(e, n, r) {
                            return function(i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n :n ? (o += "", "=" === n ? o === r :"!=" === n ? o !== r :"^=" === n ? r && 0 === o.indexOf(r) :"*=" === n ? r && o.indexOf(r) > -1 :"$=" === n ? r && o.slice(-r.length) === r :"~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 :"|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" :!1) :!0;
                            };
                        },
                        CHILD:function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode;
                            } :function(t, n, u) {
                                var l, c, d, f, p, h, m = o !== a ? "nextSibling" :"previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
                                if (g) {
                                    if (o) {
                                        for (;m; ) {
                                            for (d = t; d = d[m]; ) if (s ? d.nodeName.toLowerCase() === v :1 === d.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (h = [ a ? g.firstChild :g.lastChild ], a && y) {
                                        for (c = g[P] || (g[P] = {}), l = c[e] || [], p = l[0] === W && l[1], f = l[0] === W && l[2], 
                                        d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop(); ) if (1 === d.nodeType && ++f && d === t) {
                                            c[e] = [ W, p, f ];
                                            break;
                                        }
                                    } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === W) f = l[1]; else for (;(d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v :1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [ W, f ]), 
                                    d !== t)); ) ;
                                    return f -= i, f === r || f % r === 0 && f / r >= 0;
                                }
                            };
                        },
                        PSEUDO:function(e, n) {
                            var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[P] ? o(n) :o.length > 1 ? (i = [ e, e, "", n ], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = o(e, n), a = i.length; a--; ) r = ee(e, i[a]), e[r] = !(t[r] = i[a]);
                            }) :function(e) {
                                return o(e, 0, i);
                            }) :o;
                        }
                    },
                    pseudos:{
                        not:r(function(e) {
                            var t = [], n = [], i = k(e.replace(ue, "$1"));
                            return i[P] ? r(function(e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                            }) :function(e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
                            };
                        }),
                        has:r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0;
                            };
                        }),
                        contains:r(function(e) {
                            return e = e.replace(we, Te), function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                            };
                        }),
                        lang:r(function(e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), 
                            function(t) {
                                var n;
                                do if (n = _ ? t.lang :t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                                n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            };
                        }),
                        target:function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root:function(e) {
                            return e === q;
                        },
                        focus:function(e) {
                            return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled:function(e) {
                            return e.disabled === !1;
                        },
                        disabled:function(e) {
                            return e.disabled === !0;
                        },
                        checked:function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected;
                        },
                        selected:function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                        },
                        empty:function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent:function(e) {
                            return !T.pseudos.empty(e);
                        },
                        header:function(e) {
                            return ge.test(e.nodeName);
                        },
                        input:function(e) {
                            return me.test(e.nodeName);
                        },
                        button:function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t;
                        },
                        text:function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first:l(function() {
                            return [ 0 ];
                        }),
                        last:l(function(e, t) {
                            return [ t - 1 ];
                        }),
                        eq:l(function(e, t, n) {
                            return [ 0 > n ? n + t :n ];
                        }),
                        even:l(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e;
                        }),
                        odd:l(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e;
                        }),
                        lt:l(function(e, t, n) {
                            for (var r = 0 > n ? n + t :n; --r >= 0; ) e.push(r);
                            return e;
                        }),
                        gt:l(function(e, t, n) {
                            for (var r = 0 > n ? n + t :n; ++r < t; ) e.push(r);
                            return e;
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (x in {
                    radio:!0,
                    checkbox:!0,
                    file:!0,
                    password:!0,
                    image:!0
                }) T.pseudos[x] = s(x);
                for (x in {
                    submit:!0,
                    reset:!0
                }) T.pseudos[x] = u(x);
                return d.prototype = T.filters = T.pseudos, T.setFilters = new d(), E = t.tokenize = function(e, n) {
                    var r, i, o, a, s, u, l, c = I[e + " "];
                    if (c) return n ? 0 :c.slice(0);
                    for (s = e, u = [], l = T.preFilter; s; ) {
                        (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                        r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                            value:r,
                            type:i[0].replace(ue, " ")
                        }), s = s.slice(r.length));
                        for (a in T.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), 
                        o.push({
                            value:r,
                            type:a,
                            matches:i
                        }), s = s.slice(r.length));
                        if (!r) break;
                    }
                    return n ? s.length :s ? t.error(e) :I(e, u).slice(0);
                }, k = t.compile = function(e, t) {
                    var n, r = [], i = [], o = X[e + " "];
                    if (!o) {
                        for (t || (t = E(e)), n = t.length; n--; ) o = y(t[n]), o[P] ? r.push(o) :i.push(o);
                        o = X(e, b(i, r)), o.selector = e;
                    }
                    return o;
                }, S = t.select = function(e, t, n, r) {
                    var i, o, a, s, u, l = "function" == typeof e && e, d = !r && E(e = l.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                            if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                            l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                        }
                        for (i = he.needsContext.test(e) ? 0 :o.length; i-- && (a = o[i], !T.relative[s = a.type]); ) if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, r), n;
                            break;
                        }
                    }
                    return (l || k(e, d))(r, t, !_, n, be.test(e) && c(t.parentNode) || t), n;
                }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, 
                L(), w.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(H.createElement("div"));
                }), i(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
                }) || o("type|href|height|width", function(e, t, n) {
                    return n ? void 0 :e.getAttribute(t, "type" === t.toLowerCase() ? 1 :2);
                }), w.attributes && i(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                }) || o("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 :e.defaultValue;
                }), i(function(e) {
                    return null == e.getAttribute("disabled");
                }) || o(te, function(e, t, n) {
                    var r;
                    return n ? void 0 :e[t] === !0 ? t.toLowerCase() :(r = e.getAttributeNode(t)) && r.specified ? r.value :null;
                }), t;
            }(e);
            ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, 
            ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
            var ce = ie.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fe = /^.[^:#\[\.,]*$/;
            ie.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [ r ] :[] :ie.find.matches(e, ie.grep(t, function(e) {
                    return 1 === e.nodeType;
                }));
            }, ie.fn.extend({
                find:function(e) {
                    var t, n = [], r = this, i = r.length;
                    if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                        for (t = 0; i > t; t++) if (ie.contains(r[t], this)) return !0;
                    }));
                    for (t = 0; i > t; t++) ie.find(e, r[t], n);
                    return n = this.pushStack(i > 1 ? ie.unique(n) :n), n.selector = this.selector ? this.selector + " " + e :e, 
                    n;
                },
                filter:function(e) {
                    return this.pushStack(r(this, e || [], !1));
                },
                not:function(e) {
                    return this.pushStack(r(this, e || [], !0));
                },
                is:function(e) {
                    return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) :e || [], !1).length;
                }
            });
            var pe, he = e.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = ie.fn.init = function(e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] :me.exec(e), 
                    !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) :this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof ie ? t[0] :t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t :he, !0)), 
                        de.test(n[1]) && ie.isPlainObject(t)) for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) :this.attr(n, t[n]);
                        return this;
                    }
                    if (r = he.getElementById(n[2]), r && r.parentNode) {
                        if (r.id !== n[2]) return pe.find(e);
                        this.length = 1, this[0] = r;
                    }
                    return this.context = he, this.selector = e, this;
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) :ie.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) :e(ie) :(void 0 !== e.selector && (this.selector = e.selector, 
                this.context = e.context), ie.makeArray(e, this));
            };
            ge.prototype = ie.fn, pe = ie(he);
            var ve = /^(?:parents|prev(?:Until|All))/, ye = {
                children:!0,
                contents:!0,
                next:!0,
                prev:!0
            };
            ie.extend({
                dir:function(e, t, n) {
                    for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n)); ) 1 === i.nodeType && r.push(i), 
                    i = i[t];
                    return r;
                },
                sibling:function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                }
            }), ie.fn.extend({
                has:function(e) {
                    var t, n = ie(e, this), r = n.length;
                    return this.filter(function() {
                        for (t = 0; r > t; t++) if (ie.contains(this, n[t])) return !0;
                    });
                },
                closest:function(e, t) {
                    for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) :0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 :1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        o.push(n);
                        break;
                    }
                    return this.pushStack(o.length > 1 ? ie.unique(o) :o);
                },
                index:function(e) {
                    return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) :ie.inArray(e.jquery ? e[0] :e, this) :this[0] && this[0].parentNode ? this.first().prevAll().length :-1;
                },
                add:function(e, t) {
                    return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))));
                },
                addBack:function(e) {
                    return this.add(null == e ? this.prevObject :this.prevObject.filter(e));
                }
            }), ie.each({
                parent:function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t :null;
                },
                parents:function(e) {
                    return ie.dir(e, "parentNode");
                },
                parentsUntil:function(e, t, n) {
                    return ie.dir(e, "parentNode", n);
                },
                next:function(e) {
                    return i(e, "nextSibling");
                },
                prev:function(e) {
                    return i(e, "previousSibling");
                },
                nextAll:function(e) {
                    return ie.dir(e, "nextSibling");
                },
                prevAll:function(e) {
                    return ie.dir(e, "previousSibling");
                },
                nextUntil:function(e, t, n) {
                    return ie.dir(e, "nextSibling", n);
                },
                prevUntil:function(e, t, n) {
                    return ie.dir(e, "previousSibling", n);
                },
                siblings:function(e) {
                    return ie.sibling((e.parentNode || {}).firstChild, e);
                },
                children:function(e) {
                    return ie.sibling(e.firstChild);
                },
                contents:function(e) {
                    return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document :ie.merge([], e.childNodes);
                }
            }, function(e, t) {
                ie.fn[e] = function(n, r) {
                    var i = ie.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), 
                    this.length > 1 && (ye[e] || (i = ie.unique(i)), ve.test(e) && (i = i.reverse())), 
                    this.pushStack(i);
                };
            });
            var be = /\S+/g, xe = {};
            ie.Callbacks = function(e) {
                e = "string" == typeof e ? xe[e] || o(e) :ie.extend({}, e);
                var t, n, r, i, a, s, u = [], l = !e.once && [], c = function(o) {
                    for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++) if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break;
                    }
                    t = !1, u && (l ? l.length && c(l.shift()) :n ? u = [] :d.disable());
                }, d = {
                    add:function() {
                        if (u) {
                            var r = u.length;
                            !function o(t) {
                                ie.each(t, function(t, n) {
                                    var r = ie.type(n);
                                    "function" === r ? e.unique && d.has(n) || u.push(n) :n && n.length && "string" !== r && o(n);
                                });
                            }(arguments), t ? i = u.length :n && (s = r, c(n));
                        }
                        return this;
                    },
                    remove:function() {
                        return u && ie.each(arguments, function(e, n) {
                            for (var r; (r = ie.inArray(n, u, r)) > -1; ) u.splice(r, 1), t && (i >= r && i--, 
                            a >= r && a--);
                        }), this;
                    },
                    has:function(e) {
                        return e ? ie.inArray(e, u) > -1 :!(!u || !u.length);
                    },
                    empty:function() {
                        return u = [], i = 0, this;
                    },
                    disable:function() {
                        return u = l = n = void 0, this;
                    },
                    disabled:function() {
                        return !u;
                    },
                    lock:function() {
                        return l = void 0, n || d.disable(), this;
                    },
                    locked:function() {
                        return !l;
                    },
                    fireWith:function(e, n) {
                        return !u || r && !l || (n = n || [], n = [ e, n.slice ? n.slice() :n ], t ? l.push(n) :c(n)), 
                        this;
                    },
                    fire:function() {
                        return d.fireWith(this, arguments), this;
                    },
                    fired:function() {
                        return !!r;
                    }
                };
                return d;
            }, ie.extend({
                Deferred:function(e) {
                    var t = [ [ "resolve", "done", ie.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ie.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ie.Callbacks("memory") ] ], n = "pending", r = {
                        state:function() {
                            return n;
                        },
                        always:function() {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then:function() {
                            var e = arguments;
                            return ie.Deferred(function(n) {
                                ie.each(t, function(t, o) {
                                    var a = ie.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) :n[o[0] + "With"](this === r ? n.promise() :this, a ? [ e ] :arguments);
                                    });
                                }), e = null;
                            }).promise();
                        },
                        promise:function(e) {
                            return null != e ? ie.extend(e, r) :r;
                        }
                    }, i = {};
                    return r.pipe = r.then, ie.each(t, function(e, o) {
                        var a = o[2], s = o[3];
                        r[o[1]] = a.add, s && a.add(function() {
                            n = s;
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                            return i[o[0] + "With"](this === i ? r :this, arguments), this;
                        }, i[o[0] + "With"] = a.fireWith;
                    }), r.promise(i), e && e.call(i, i), i;
                },
                when:function(e) {
                    var t = 0, n = Y.call(arguments), r = n.length, i = 1 !== r || e && ie.isFunction(e.promise) ? r :0, o = 1 === i ? e :ie.Deferred(), a = function(e, t, n) {
                        return function(r) {
                            t[e] = this, n[e] = arguments.length > 1 ? Y.call(arguments) :r, n === s ? o.notifyWith(t, n) :--i || o.resolveWith(t, n);
                        };
                    }, s, u, l;
                    if (r > 1) for (s = new Array(r), u = new Array(r), l = new Array(r); r > t; t++) n[t] && ie.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) :--i;
                    return i || o.resolveWith(l, n), o.promise();
                }
            });
            var we;
            ie.fn.ready = function(e) {
                return ie.ready.promise().done(e), this;
            }, ie.extend({
                isReady:!1,
                readyWait:1,
                holdReady:function(e) {
                    e ? ie.readyWait++ :ie.ready(!0);
                },
                ready:function(e) {
                    if (e === !0 ? !--ie.readyWait :!ie.isReady) {
                        if (!he.body) return setTimeout(ie.ready);
                        ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (we.resolveWith(he, [ ie ]), 
                        ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready")));
                    }
                }
            }), ie.ready.promise = function(t) {
                if (!we) if (we = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready); else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), 
                e.addEventListener("load", s, !1); else {
                    he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                    var n = !1;
                    try {
                        n = null == e.frameElement && he.documentElement;
                    } catch (r) {}
                    n && n.doScroll && !function i() {
                        if (!ie.isReady) {
                            try {
                                n.doScroll("left");
                            } catch (e) {
                                return setTimeout(i, 50);
                            }
                            a(), ie.ready();
                        }
                    }();
                }
                return we.promise(t);
            };
            var Te = "undefined", Ce;
            for (Ce in ie(ne)) break;
            ne.ownLast = "0" !== Ce, ne.inlineBlockNeedsLayout = !1, ie(function() {
                var e, t, n, r;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), 
                r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                n.appendChild(r).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
                ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r));
            }), function() {
                var e = he.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete e.test;
                    } catch (t) {
                        ne.deleteExpando = !1;
                    }
                }
                e = null;
            }(), ie.acceptData = function(e) {
                var t = ie.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 :!t || t !== !0 && e.getAttribute("classid") === t;
            };
            var Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ee = /([A-Z])/g;
            ie.extend({
                cache:{},
                noData:{
                    "applet ":!0,
                    "embed ":!0,
                    "object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData:function(e) {
                    return e = e.nodeType ? ie.cache[e[ie.expando]] :e[ie.expando], !!e && !l(e);
                },
                data:function(e, t, n) {
                    return c(e, t, n);
                },
                removeData:function(e, t) {
                    return d(e, t);
                },
                _data:function(e, t, n) {
                    return c(e, t, n, !0);
                },
                _removeData:function(e, t) {
                    return d(e, t, !0);
                }
            }), ie.fn.extend({
                data:function(e, t) {
                    var n, r, i, o = this[0], a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                            for (n = a.length; n--; ) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), 
                            u(o, r, i[r])));
                            ie._data(o, "parsedAttrs", !0);
                        }
                        return i;
                    }
                    return "object" == typeof e ? this.each(function() {
                        ie.data(this, e);
                    }) :arguments.length > 1 ? this.each(function() {
                        ie.data(this, e, t);
                    }) :o ? u(o, e, ie.data(o, e)) :void 0;
                },
                removeData:function(e) {
                    return this.each(function() {
                        ie.removeData(this, e);
                    });
                }
            }), ie.extend({
                queue:function(e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) :r.push(n)), 
                    r || []) :void 0;
                },
                dequeue:function(e, t) {
                    t = t || "fx";
                    var n = ie.queue(e, t), r = n.length, i = n.shift(), o = ie._queueHooks(e, t), a = function() {
                        ie.dequeue(e, t);
                    };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
                    delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
                },
                _queueHooks:function(e, t) {
                    var n = t + "queueHooks";
                    return ie._data(e, n) || ie._data(e, n, {
                        empty:ie.Callbacks("once memory").add(function() {
                            ie._removeData(e, t + "queue"), ie._removeData(e, n);
                        })
                    });
                }
            }), ie.fn.extend({
                queue:function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) :void 0 === t ? this :this.each(function() {
                        var n = ie.queue(this, e, t);
                        ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e);
                    });
                },
                dequeue:function(e) {
                    return this.each(function() {
                        ie.dequeue(this, e);
                    });
                },
                clearQueue:function(e) {
                    return this.queue(e || "fx", []);
                },
                promise:function(e, t) {
                    var n, r = 1, i = ie.Deferred(), o = this, a = this.length, s = function() {
                        --r || i.resolveWith(o, [ o ]);
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) n = ie._data(o[a], e + "queueHooks"), 
                    n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t);
                }
            });
            var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Se = [ "Top", "Right", "Bottom", "Left" ], Ae = function(e, t) {
                return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e);
            }, De = ie.access = function(e, t, n, r, i, o, a) {
                var s = 0, u = e.length, l = null == n;
                if ("object" === ie.type(n)) {
                    i = !0;
                    for (s in n) ie.access(e, t, s, n[s], !0, o, a);
                } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), 
                t = null) :(l = t, t = function(e, t, n) {
                    return l.call(ie(e), n);
                })), t)) for (;u > s; s++) t(e[s], n, a ? r :r.call(e[s], s, t(e[s], n)));
                return i ? e :l ? t.call(e) :u ? t(e[0], n) :o;
            }, je = /^(?:checkbox|radio)$/i;
            !function() {
                var e = he.createElement("input"), t = he.createElement("div"), n = he.createDocumentFragment();
                if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
                ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, 
                ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, 
                e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, 
                t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, 
                n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
                ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, 
                t.attachEvent && (t.attachEvent("onclick", function() {
                    ne.noCloneEvent = !1;
                }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete t.test;
                    } catch (r) {
                        ne.deleteExpando = !1;
                    }
                }
            }(), function() {
                var t, n, r = he.createElement("div");
                for (t in {
                    submit:!0,
                    change:!0,
                    focusin:!0
                }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
                r = null;
            }();
            var Le = /^(?:input|select|textarea)$/i, He = /^key/, qe = /^(?:mouse|pointer|contextmenu)|click/, _e = /^(?:focusinfocus|focusoutblur)$/, Me = /^([^.]*)(?:\.(.+)|)$/;
            ie.event = {
                global:{},
                add:function(e, t, n, r, i) {
                    var o, a, s, u, l, c, d, f, p, h, m, g = ie._data(e);
                    if (g) {
                        for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ie.guid++), 
                        (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                            return typeof ie === Te || e && ie.event.triggered === e.type ? void 0 :ie.event.dispatch.apply(c.elem, arguments);
                        }, c.elem = e), t = (t || "").match(be) || [ "" ], s = t.length; s--; ) o = Me.exec(t[s]) || [], 
                        p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = ie.event.special[p] || {}, 
                        p = (i ? l.delegateType :l.bindType) || p, l = ie.event.special[p] || {}, d = ie.extend({
                            type:p,
                            origType:m,
                            data:r,
                            handler:n,
                            guid:n.guid,
                            selector:i,
                            needsContext:i && ie.expr.match.needsContext.test(i),
                            namespace:h.join(".")
                        }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) :e.attachEvent && e.attachEvent("on" + p, c))), 
                        l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) :f.push(d), 
                        ie.event.global[p] = !0);
                        e = null;
                    }
                },
                remove:function(e, t, n, r, i) {
                    var o, a, s, u, l, c, d, f, p, h, m, g = ie.hasData(e) && ie._data(e);
                    if (g && (c = g.events)) {
                        for (t = (t || "").match(be) || [ "" ], l = t.length; l--; ) if (s = Me.exec(t[l]) || [], 
                        p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = ie.event.special[p] || {}, p = (r ? d.delegateType :d.bindType) || p, f = c[p] || [], 
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--; ) a = f[o], 
                            !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), 
                            a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                            u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ie.removeEvent(e, p, g.handle), 
                            delete c[p]);
                        } else for (p in c) ie.event.remove(e, p + t[l], n, r, !0);
                        ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events"));
                    }
                },
                trigger:function(t, n, r, i) {
                    var o, a, s, u, l, c, d, f = [ r || he ], p = te.call(t, "type") ? t.type :t, h = te.call(t, "namespace") ? t.namespace.split(".") :[];
                    if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), 
                    p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t :new ie.Event(p, "object" == typeof t && t), 
                    t.isTrigger = i ? 2 :3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") :null, 
                    t.result = void 0, t.target || (t.target = r), n = null == n ? [ t ] :ie.makeArray(n, [ t ]), 
                    l = ie.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                        if (!i && !l.noBubble && !ie.isWindow(r)) {
                            for (u = l.delegateType || p, _e.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), 
                            c = s;
                            c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e);
                        }
                        for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); ) t.type = d > 1 ? u :l.bindType || p, 
                        o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), 
                        o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                        if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) {
                            c = r[a], c && (r[a] = null), ie.event.triggered = p;
                            try {
                                r[p]();
                            } catch (m) {}
                            ie.event.triggered = void 0, c && (r[a] = c);
                        }
                        return t.result;
                    }
                },
                dispatch:function(e) {
                    e = ie.event.fix(e);
                    var t, n, r, i, o, a = [], s = Y.call(arguments), u = (ie._data(this, "events") || {})[e.type] || [], l = ie.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (a = ie.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = i.elem, 
                        o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, 
                        e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), 
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e), e.result;
                    }
                },
                handlers:function(e, t) {
                    var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
                    if (s && u.nodeType && (!e.button || "click" !== e.type)) for (;u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 :ie.find(n, this, null, [ u ]).length), 
                        i[n] && i.push(r);
                        i.length && a.push({
                            elem:u,
                            handlers:i
                        });
                    }
                    return s < t.length && a.push({
                        elem:this,
                        handlers:t.slice(s)
                    }), a;
                },
                fix:function(e) {
                    if (e[ie.expando]) return e;
                    var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks :He.test(i) ? this.keyHooks :{}), 
                    r = a.props ? this.props.concat(a.props) :this.props, e = new ie.Event(o), t = r.length; t--; ) n = r[t], 
                    e[n] = o[n];
                    return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
                    e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) :e;
                },
                props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks:{},
                keyHooks:{
                    props:"char charCode key keyCode".split(" "),
                    filter:function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode :t.keyCode), 
                        e;
                    }
                },
                mouseHooks:{
                    props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter:function(e, t) {
                        var n, r, i, o = t.button, a = t.fromElement;
                        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, 
                        i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), 
                        e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), 
                        !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement :a), e.which || void 0 === o || (e.which = 1 & o ? 1 :2 & o ? 3 :4 & o ? 2 :0), 
                        e;
                    }
                },
                special:{
                    load:{
                        noBubble:!0
                    },
                    focus:{
                        trigger:function() {
                            if (this !== h() && this.focus) try {
                                return this.focus(), !1;
                            } catch (e) {}
                        },
                        delegateType:"focusin"
                    },
                    blur:{
                        trigger:function() {
                            return this === h() && this.blur ? (this.blur(), !1) :void 0;
                        },
                        delegateType:"focusout"
                    },
                    click:{
                        trigger:function() {
                            return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                            !1) :void 0;
                        },
                        _default:function(e) {
                            return ie.nodeName(e.target, "a");
                        }
                    },
                    beforeunload:{
                        postDispatch:function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        }
                    }
                },
                simulate:function(e, t, n, r) {
                    var i = ie.extend(new ie.Event(), n, {
                        type:e,
                        isSimulated:!0,
                        originalEvent:{}
                    });
                    r ? ie.event.trigger(i, null, t) :ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
                }
            }, ie.removeEvent = he.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
            } :function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === Te && (e[r] = null), e.detachEvent(r, n));
            }, ie.Event = function(e, t) {
                return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f :p) :this.type = e, 
                t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void (this[ie.expando] = !0)) :new ie.Event(e, t);
            }, ie.Event.prototype = {
                isDefaultPrevented:p,
                isPropagationStopped:p,
                isImmediatePropagationStopped:p,
                preventDefault:function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() :e.returnValue = !1);
                },
                stopPropagation:function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
                },
                stopImmediatePropagation:function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, ie.each({
                mouseenter:"mouseover",
                mouseleave:"mouseout",
                pointerenter:"pointerover",
                pointerleave:"pointerout"
            }, function(e, t) {
                ie.event.special[e] = {
                    delegateType:t,
                    bindType:t,
                    handle:function(e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                        e.type = t), n;
                    }
                };
            }), ne.submitBubbles || (ie.event.special.submit = {
                setup:function() {
                    return ie.nodeName(this, "form") ? !1 :void ie.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target, n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form :void 0;
                        n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) {
                            e._submit_bubble = !0;
                        }), ie._data(n, "submitBubbles", !0));
                    });
                },
                postDispatch:function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0));
                },
                teardown:function() {
                    return ie.nodeName(this, "form") ? !1 :void ie.event.remove(this, "._submit");
                }
            }), ne.changeBubbles || (ie.event.special.change = {
                setup:function() {
                    return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
                    }), ie.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0);
                    })), !1) :void ie.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        Le.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0);
                        }), ie._data(t, "changeBubbles", !0));
                    });
                },
                handle:function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) :void 0;
                },
                teardown:function() {
                    return ie.event.remove(this, "._change"), !Le.test(this.nodeName);
                }
            }), ne.focusinBubbles || ie.each({
                focus:"focusin",
                blur:"focusout"
            }, function(e, t) {
                var n = function(e) {
                    ie.event.simulate(t, e.target, ie.event.fix(e), !0);
                };
                ie.event.special[t] = {
                    setup:function() {
                        var r = this.ownerDocument || this, i = ie._data(r, t);
                        i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1);
                    },
                    teardown:function() {
                        var r = this.ownerDocument || this, i = ie._data(r, t) - 1;
                        i ? ie._data(r, t, i) :(r.removeEventListener(e, n, !0), ie._removeData(r, t));
                    }
                };
            }), ie.fn.extend({
                on:function(e, t, n, r, i) {
                    var o, a;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t, t = void 0);
                        for (o in e) this.on(o, t, n, e[o], i);
                        return this;
                    }
                    if (null == n && null == r ? (r = t, n = t = void 0) :null == r && ("string" == typeof t ? (r = n, 
                    n = void 0) :(r = n, n = t, t = void 0)), r === !1) r = p; else if (!r) return this;
                    return 1 === i && (a = r, r = function(e) {
                        return ie().off(e), a.apply(this, arguments);
                    }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() {
                        ie.event.add(this, e, r, n, t);
                    });
                },
                one:function(e, t, n, r) {
                    return this.on(e, t, n, r, 1);
                },
                off:function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace :r.origType, r.selector, r.handler), 
                    this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this;
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), 
                    this.each(function() {
                        ie.event.remove(this, e, n, t);
                    });
                },
                trigger:function(e, t) {
                    return this.each(function() {
                        ie.event.trigger(e, t, this);
                    });
                },
                triggerHandler:function(e, t) {
                    var n = this[0];
                    return n ? ie.event.trigger(e, t, n, !0) :void 0;
                }
            });
            var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Oe = / jQuery\d+="(?:null|\d+)"/g, Be = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"), Pe = /^\s+/, Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, We = /<([\w:]+)/, $e = /<tbody/i, ze = /<|&#?\w+;/, Ie = /<(?:script|style|link)/i, Xe = /checked\s*(?:[^=]|=\s*.checked.)/i, Ue = /^$|\/(?:java|ecma)script/i, Ve = /^true\/(.*)/, Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ye = {
                option:[ 1, "<select multiple='multiple'>", "</select>" ],
                legend:[ 1, "<fieldset>", "</fieldset>" ],
                area:[ 1, "<map>", "</map>" ],
                param:[ 1, "<object>", "</object>" ],
                thead:[ 1, "<table>", "</table>" ],
                tr:[ 2, "<table><tbody>", "</tbody></table>" ],
                col:[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
                td:[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default:ne.htmlSerialize ? [ 0, "", "" ] :[ 1, "X<div>", "</div>" ]
            }, Qe = m(he), Ge = Qe.appendChild(he.createElement("div"));
            Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, 
            Ye.th = Ye.td, ie.extend({
                clone:function(e, t, n) {
                    var r, i, o, a, s, u = ie.contains(e.ownerDocument, e);
                    if (ne.html5Clone || ie.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) :(Ge.innerHTML = e.outerHTML, 
                    Ge.removeChild(o = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e))) for (r = g(o), 
                    s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
                    if (t) if (n) for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]); else T(e, o);
                    return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, 
                    o;
                },
                buildFragment:function(e, t, n, r) {
                    for (var i, o, a, s, u, l, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++) if (o = e[h], 
                    o || 0 === o) if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [ o ] :o); else if (ze.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")), u = (We.exec(o) || [ "", "" ])[1].toLowerCase(), 
                        c = Ye[u] || Ye._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], 
                        i = c[0]; i--; ) s = s.lastChild;
                        if (!ne.leadingWhitespace && Pe.test(o) && p.push(t.createTextNode(Pe.exec(o)[0])), 
                        !ne.tbody) for (o = "table" !== u || $e.test(o) ? "<table>" !== c[1] || $e.test(o) ? 0 :s :s.firstChild, 
                        i = o && o.childNodes.length; i--; ) ie.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                        for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                        s = f.lastChild;
                    } else p.push(t.createTextNode(o));
                    for (s && f.removeChild(s), ne.appendChecked || ie.grep(g(p, "input"), v), h = 0; o = p[h++]; ) if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), 
                    s = g(f.appendChild(o), "script"), a && w(s), n)) for (i = 0; o = s[i++]; ) Ue.test(o.type || "") && n.push(o);
                    return s = null, f;
                },
                cleanData:function(e, t) {
                    for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, l = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++) if ((t || ie.acceptData(n)) && (i = n[s], 
                    o = i && u[i])) {
                        if (o.events) for (r in o.events) c[r] ? ie.event.remove(n, r) :ie.removeEvent(n, r, o.handle);
                        u[i] && (delete u[i], l ? delete n[s] :typeof n.removeAttribute !== Te ? n.removeAttribute(s) :n[s] = null, 
                        J.push(i));
                    }
                }
            }), ie.fn.extend({
                text:function(e) {
                    return De(this, function(e) {
                        return void 0 === e ? ie.text(this) :this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e));
                    }, null, e, arguments.length);
                },
                append:function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = y(this, e);
                            t.appendChild(e);
                        }
                    });
                },
                prepend:function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = y(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    });
                },
                before:function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                },
                after:function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    });
                },
                remove:function(e, t) {
                    for (var n, r = e ? ie.filter(e, this) :this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(g(n)), 
                    n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                    return this;
                },
                empty:function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                        e.options && ie.nodeName(e, "select") && (e.options.length = 0);
                    }
                    return this;
                },
                clone:function(e, t) {
                    return e = null == e ? !1 :e, t = null == t ? e :t, this.map(function() {
                        return ie.clone(this, e, t);
                    });
                },
                html:function(e) {
                    return De(this, function(e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") :void 0;
                        if (!("string" != typeof e || Ie.test(e) || !ne.htmlSerialize && Be.test(e) || !ne.leadingWhitespace && Pe.test(e) || Ye[(We.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                            e = e.replace(Re, "<$1></$2>");
                            try {
                                for (;r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(g(t, !1)), 
                                t.innerHTML = e);
                                t = 0;
                            } catch (i) {}
                        }
                        t && this.empty().append(e);
                    }, null, e, arguments.length);
                },
                replaceWith:function() {
                    var e = arguments[0];
                    return this.domManip(arguments, function(t) {
                        e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this);
                    }), e && (e.length || e.nodeType) ? this :this.remove();
                },
                detach:function(e) {
                    return this.remove(e, !0);
                },
                domManip:function(e, t) {
                    e = Q.apply([], e);
                    var n, r, i, o, a, s, u = 0, l = this.length, c = this, d = l - 1, f = e[0], p = ie.isFunction(f);
                    if (p || l > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function(n) {
                        var r = c.eq(n);
                        p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t);
                    });
                    if (l && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 
                    1 === s.childNodes.length && (s = n), n)) {
                        for (o = ie.map(g(s, "script"), b), i = o.length; l > u; u++) r = s, u !== d && (r = ie.clone(r, !0, !0), 
                        i && ie.merge(o, g(r, "script"))), t.call(this[u], r, u);
                        if (i) for (a = o[o.length - 1].ownerDocument, ie.map(o, x), u = 0; i > u; u++) r = o[u], 
                        Ue.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) :ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
                        s = n = null;
                    }
                    return this;
                }
            }), ie.each({
                appendTo:"append",
                prependTo:"prepend",
                insertBefore:"before",
                insertAfter:"after",
                replaceAll:"replaceWith"
            }, function(e, t) {
                ie.fn[e] = function(e) {
                    for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this :this.clone(!0), 
                    ie(o[r])[t](n), G.apply(i, n.get());
                    return this.pushStack(i);
                };
            });
            var Ke, Ze = {};
            !function() {
                var e;
                ne.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, r;
                    return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), 
                    r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                    n.appendChild(r).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
                    t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), 
                    n.removeChild(r), e) :void 0;
                };
            }();
            var et = /^margin/, tt = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"), nt, rt, it = /^(top|right|bottom|left)$/;
            e.getComputedStyle ? (nt = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) :e.getComputedStyle(t, null);
            }, rt = function(e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || nt(e), a = n ? n.getPropertyValue(t) || n[t] :void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), 
                tt.test(a) && et.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, 
                a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a :a + "";
            }) :he.documentElement.currentStyle && (nt = function(e) {
                return e.currentStyle;
            }, rt = function(e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || nt(e), a = n ? n[t] :void 0, null == a && s && s[t] && (a = s[t]), 
                tt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), 
                s.left = "fontSize" === t ? "1em" :a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), 
                void 0 === a ? a :a + "" || "auto";
            }), function() {
                function t() {
                    var t, n, r, i;
                    n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), 
                    r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                    n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                    o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, 
                    a = "4px" === (e.getComputedStyle(t, null) || {
                        width:"4px"
                    }).width, i = t.appendChild(he.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), 
                    t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
                    i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
                    s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", 
                    s = 0 === i[0].offsetHeight), n.removeChild(r));
                }
                var n, r, i, o, a, s, u;
                n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
                i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", 
                ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", 
                n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, 
                ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, 
                ie.extend(ne, {
                    reliableHiddenOffsets:function() {
                        return null == s && t(), s;
                    },
                    boxSizingReliable:function() {
                        return null == a && t(), a;
                    },
                    pixelPosition:function() {
                        return null == o && t(), o;
                    },
                    reliableMarginRight:function() {
                        return null == u && t(), u;
                    }
                }));
            }(), ie.swap = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i;
            };
            var ot = /alpha\([^)]*\)/i, at = /opacity\s*=\s*([^)]*)/, st = /^(none|table(?!-c[ea]).+)/, ut = new RegExp("^(" + ke + ")(.*)$", "i"), lt = new RegExp("^([+-])=(" + ke + ")", "i"), ct = {
                position:"absolute",
                visibility:"hidden",
                display:"block"
            }, dt = {
                letterSpacing:"0",
                fontWeight:"400"
            }, ft = [ "Webkit", "O", "Moz", "ms" ];
            ie.extend({
                cssHooks:{
                    opacity:{
                        get:function(e, t) {
                            if (t) {
                                var n = rt(e, "opacity");
                                return "" === n ? "1" :n;
                            }
                        }
                    }
                },
                cssNumber:{
                    columnCount:!0,
                    fillOpacity:!0,
                    flexGrow:!0,
                    flexShrink:!0,
                    fontWeight:!0,
                    lineHeight:!0,
                    opacity:!0,
                    order:!0,
                    orphans:!0,
                    widows:!0,
                    zIndex:!0,
                    zoom:!0
                },
                cssProps:{
                    "float":ne.cssFloat ? "cssFloat" :"styleFloat"
                },
                style:function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = ie.camelCase(t), u = e.style;
                        if (t = ie.cssProps[s] || (ie.cssProps[s] = S(u, s)), a = ie.cssHooks[t] || ie.cssHooks[s], 
                        void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i :u[t];
                        if (o = typeof n, "string" === o && (i = lt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), 
                        o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), 
                        ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                        !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                            u[t] = n;
                        } catch (l) {}
                    }
                },
                css:function(e, t, n, r) {
                    var i, o, a, s = ie.camelCase(t);
                    return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], 
                    a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = rt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), 
                    "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 :o) :o;
                }
            }), ie.each([ "height", "width" ], function(e, t) {
                ie.cssHooks[t] = {
                    get:function(e, n, r) {
                        return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() {
                            return L(e, t, r);
                        }) :L(e, t, r) :void 0;
                    },
                    set:function(e, n, r) {
                        var i = r && nt(e);
                        return D(e, n, r ? j(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) :0);
                    }
                };
            }), ne.opacity || (ie.cssHooks.opacity = {
                get:function(e, t) {
                    return at.test((t && e.currentStyle ? e.currentStyle.filter :e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" :t ? "1" :"";
                },
                set:function(e, t) {
                    var n = e.style, r = e.currentStyle, i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" :"", o = r && r.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
                    "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) :o + " " + i);
                }
            }), ie.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) {
                return t ? ie.swap(e, {
                    display:"inline-block"
                }, rt, [ e, "marginRight" ]) :void 0;
            }), ie.each({
                margin:"",
                padding:"",
                border:"Width"
            }, function(e, t) {
                ie.cssHooks[e + t] = {
                    expand:function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") :[ n ]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
                        return i;
                    }
                }, et.test(e) || (ie.cssHooks[e + t].set = D);
            }), ie.fn.extend({
                css:function(e, t) {
                    return De(this, function(e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (ie.isArray(t)) {
                            for (r = nt(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? ie.style(e, t, n) :ie.css(e, t);
                    }, e, t, arguments.length > 1);
                },
                show:function() {
                    return A(this, !0);
                },
                hide:function() {
                    return A(this);
                },
                toggle:function(e) {
                    return "boolean" == typeof e ? e ? this.show() :this.hide() :this.each(function() {
                        Ae(this) ? ie(this).show() :ie(this).hide();
                    });
                }
            }), ie.Tween = H, H.prototype = {
                constructor:H,
                init:function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
                    this.end = r, this.unit = o || (ie.cssNumber[n] ? "" :"px");
                },
                cur:function() {
                    var e = H.propHooks[this.prop];
                    return e && e.get ? e.get(this) :H.propHooks._default.get(this);
                },
                run:function(e) {
                    var t, n = H.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) :this.pos = t = e, 
                    this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    n && n.set ? n.set(this) :H.propHooks._default.set(this), this;
                }
            }, H.prototype.init.prototype = H.prototype, H.propHooks = {
                _default:{
                    get:function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), 
                        t && "auto" !== t ? t :0) :e.elem[e.prop];
                    },
                    set:function(e) {
                        ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) :e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) :e.elem[e.prop] = e.now;
                    }
                }
            }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
                set:function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
            }, ie.easing = {
                linear:function(e) {
                    return e;
                },
                swing:function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2;
                }
            }, ie.fx = H.prototype.init, ie.fx.step = {};
            var pt, ht, mt = /^(?:toggle|show|hide)$/, gt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"), vt = /queueHooks$/, yt = [ F ], bt = {
                "*":[ function(e, t) {
                    var n = this.createTween(e, t), r = n.cur(), i = gt.exec(t), o = i && i[3] || (ie.cssNumber[e] ? "" :"px"), a = (ie.cssNumber[e] || "px" !== o && +r) && gt.exec(ie.css(n.elem, e)), s = 1, u = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u);
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] :+i[2]), 
                    n;
                } ]
            };
            ie.Animation = ie.extend(B, {
                tweener:function(e, t) {
                    ie.isFunction(e) ? (t = e, e = [ "*" ]) :e = e.split(" ");
                    for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t);
                },
                prefilter:function(e, t) {
                    t ? yt.unshift(e) :yt.push(e);
                }
            }), ie.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? ie.extend({}, e) :{
                    complete:n || !n && t || ie.isFunction(e) && e,
                    duration:e,
                    easing:n && t || t && !ie.isFunction(t) && t
                };
                return r.duration = ie.fx.off ? 0 :"number" == typeof r.duration ? r.duration :r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] :ie.fx.speeds._default, 
                (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue);
                }, r;
            }, ie.fn.extend({
                fadeTo:function(e, t, n, r) {
                    return this.filter(Ae).css("opacity", 0).show().end().animate({
                        opacity:t
                    }, e, n, r);
                },
                animate:function(e, t, n, r) {
                    var i = ie.isEmptyObject(e), o = ie.speed(t, n, r), a = function() {
                        var t = B(this, ie.extend({}, e), o);
                        (i || ie._data(this, "finish")) && t.stop(!0);
                    };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) :this.queue(o.queue, a);
                },
                stop:function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n);
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), 
                    this.each(function() {
                        var t = !0, i = null != e && e + "queueHooks", o = ie.timers, a = ie._data(this);
                        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                        t = !1, o.splice(i, 1));
                        (t || !n) && ie.dequeue(this, e);
                    });
                },
                finish:function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = ie._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ie.timers, a = r ? r.length :0;
                        for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                        t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                        o.splice(t, 1));
                        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    });
                }
            }), ie.each([ "toggle", "show", "hide" ], function(e, t) {
                var n = ie.fn[t];
                ie.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) :this.animate(_(t, !0), e, r, i);
                };
            }), ie.each({
                slideDown:_("show"),
                slideUp:_("hide"),
                slideToggle:_("toggle"),
                fadeIn:{
                    opacity:"show"
                },
                fadeOut:{
                    opacity:"hide"
                },
                fadeToggle:{
                    opacity:"toggle"
                }
            }, function(e, t) {
                ie.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }), ie.timers = [], ie.fx.tick = function() {
                var e, t = ie.timers, n = 0;
                for (pt = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || ie.fx.stop(), pt = void 0;
            }, ie.fx.timer = function(e) {
                ie.timers.push(e), e() ? ie.fx.start() :ie.timers.pop();
            }, ie.fx.interval = 13, ie.fx.start = function() {
                ht || (ht = setInterval(ie.fx.tick, ie.fx.interval));
            }, ie.fx.stop = function() {
                clearInterval(ht), ht = null;
            }, ie.fx.speeds = {
                slow:600,
                fast:200,
                _default:400
            }, ie.fn.delay = function(e, t) {
                return e = ie.fx ? ie.fx.speeds[e] || e :e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r);
                    };
                });
            }, function() {
                var e, t, n, r, i;
                t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
                r = t.getElementsByTagName("a")[0], n = he.createElement("select"), i = n.appendChild(he.createElement("option")), 
                e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, 
                ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), 
                ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!he.createElement("form").enctype, 
                n.disabled = !0, ne.optDisabled = !i.disabled, e = he.createElement("input"), e.setAttribute("value", ""), 
                ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), 
                ne.radioValue = "t" === e.value;
            }();
            var xt = /\r/g;
            ie.fn.extend({
                val:function(e) {
                    var t, n, r, i = this[0];
                    {
                        if (arguments.length) return r = ie.isFunction(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) :e, null == i ? i = "" :"number" == typeof i ? i += "" :ie.isArray(i) && (i = ie.map(i, function(e) {
                                return null == e ? "" :e + "";
                            })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                        });
                        if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], 
                        t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n :(n = i.value, "string" == typeof n ? n.replace(xt, "") :null == n ? "" :n);
                    }
                }
            }), ie.extend({
                valHooks:{
                    option:{
                        get:function(e) {
                            var t = ie.find.attr(e, "value");
                            return null != t ? t :ie.trim(ie.text(e));
                        }
                    },
                    select:{
                        get:function(e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null :[], s = o ? i + 1 :r.length, u = 0 > i ? s :o ? i :0; s > u; u++) if (n = r[u], 
                            !(!n.selected && u !== i || (ne.optDisabled ? n.disabled :null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ie(n).val(), o) return t;
                                a.push(t);
                            }
                            return a;
                        },
                        set:function(e, t) {
                            for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--; ) if (r = i[a], 
                            ie.inArray(ie.valHooks.option.get(r), o) >= 0) try {
                                r.selected = n = !0;
                            } catch (s) {
                                r.scrollHeight;
                            } else r.selected = !1;
                            return n || (e.selectedIndex = -1), i;
                        }
                    }
                }
            }), ie.each([ "radio", "checkbox" ], function() {
                ie.valHooks[this] = {
                    set:function(e, t) {
                        return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 :void 0;
                    }
                }, ne.checkOn || (ie.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" :e.value;
                });
            });
            var wt, Tt, Ct = ie.expr.attrHandle, Nt = /^(?:checked|selected)$/i, Et = ne.getSetAttribute, kt = ne.input;
            ie.fn.extend({
                attr:function(e, t) {
                    return De(this, ie.attr, e, t, arguments.length > 1);
                },
                removeAttr:function(e) {
                    return this.each(function() {
                        ie.removeAttr(this, e);
                    });
                }
            }), ie.extend({
                attr:function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Te ? ie.prop(e, t, n) :(1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), 
                    r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt :wt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i :(i = ie.find.attr(e, t), 
                    null == i ? void 0 :i) :null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i :(e.setAttribute(t, n + ""), 
                    n) :void ie.removeAttr(e, t));
                },
                removeAttr:function(e, t) {
                    var n, r, i = 0, o = t && t.match(be);
                    if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? kt && Et || !Nt.test(n) ? e[r] = !1 :e[ie.camelCase("default-" + n)] = e[r] = !1 :ie.attr(e, n, ""), 
                    e.removeAttribute(Et ? n :r);
                },
                attrHooks:{
                    type:{
                        set:function(e, t) {
                            if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        }
                    }
                }
            }), Tt = {
                set:function(e, t, n) {
                    return t === !1 ? ie.removeAttr(e, n) :kt && Et || !Nt.test(n) ? e.setAttribute(!Et && ie.propFix[n] || n, n) :e[ie.camelCase("default-" + n)] = e[n] = !0, 
                    n;
                }
            }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = Ct[t] || ie.find.attr;
                Ct[t] = kt && Et || !Nt.test(t) ? function(e, t, r) {
                    var i, o;
                    return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() :null, 
                    Ct[t] = o), i;
                } :function(e, t, n) {
                    return n ? void 0 :e[ie.camelCase("default-" + t)] ? t.toLowerCase() :null;
                };
            }), kt && Et || (ie.attrHooks.value = {
                set:function(e, t, n) {
                    return ie.nodeName(e, "input") ? void (e.defaultValue = t) :wt && wt.set(e, t, n);
                }
            }), Et || (wt = {
                set:function(e, t, n) {
                    var r = e.getAttributeNode(n);
                    return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", 
                    "value" === n || t === e.getAttribute(n) ? t :void 0;
                }
            }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
                var r;
                return n ? void 0 :(r = e.getAttributeNode(t)) && "" !== r.value ? r.value :null;
            }, ie.valHooks.button = {
                get:function(e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value :void 0;
                },
                set:wt.set
            }, ie.attrHooks.contenteditable = {
                set:function(e, t, n) {
                    wt.set(e, "" === t ? !1 :t, n);
                }
            }, ie.each([ "width", "height" ], function(e, t) {
                ie.attrHooks[t] = {
                    set:function(e, n) {
                        return "" === n ? (e.setAttribute(t, "auto"), n) :void 0;
                    }
                };
            })), ne.style || (ie.attrHooks.style = {
                get:function(e) {
                    return e.style.cssText || void 0;
                },
                set:function(e, t) {
                    return e.style.cssText = t + "";
                }
            });
            var St = /^(?:input|select|textarea|button|object)$/i, At = /^(?:a|area)$/i;
            ie.fn.extend({
                prop:function(e, t) {
                    return De(this, ie.prop, e, t, arguments.length > 1);
                },
                removeProp:function(e) {
                    return e = ie.propFix[e] || e, this.each(function() {
                        try {
                            this[e] = void 0, delete this[e];
                        } catch (t) {}
                    });
                }
            }), ie.extend({
                propFix:{
                    "for":"htmlFor",
                    "class":"className"
                },
                prop:function(e, t, n) {
                    var r, i, o, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, 
                    i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r :e[t] = n :i && "get" in i && null !== (r = i.get(e, t)) ? r :e[t];
                },
                propHooks:{
                    tabIndex:{
                        get:function(e) {
                            var t = ie.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) :St.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 :-1;
                        }
                    }
                }
            }), ne.hrefNormalized || ie.each([ "href", "src" ], function(e, t) {
                ie.propHooks[t] = {
                    get:function(e) {
                        return e.getAttribute(t, 4);
                    }
                };
            }), ne.optSelected || (ie.propHooks.selected = {
                get:function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
                }
            }), ie.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
                ie.propFix[this.toLowerCase()] = this;
            }), ne.enctype || (ie.propFix.enctype = "encoding");
            var Dt = /[\t\r\n\f]/g;
            ie.fn.extend({
                addClass:function(e) {
                    var t, n, r, i, o, a, s = 0, u = this.length, l = "string" == typeof e && e;
                    if (ie.isFunction(e)) return this.each(function(t) {
                        ie(this).addClass(e.call(this, t, this.className));
                    });
                    if (l) for (t = (e || "").match(be) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") :" ")) {
                        for (o = 0; i = t[o++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a);
                    }
                    return this;
                },
                removeClass:function(e) {
                    var t, n, r, i, o, a, s = 0, u = this.length, l = 0 === arguments.length || "string" == typeof e && e;
                    if (ie.isFunction(e)) return this.each(function(t) {
                        ie(this).removeClass(e.call(this, t, this.className));
                    });
                    if (l) for (t = (e || "").match(be) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") :"")) {
                        for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                        a = e ? ie.trim(r) :"", n.className !== a && (n.className = a);
                    }
                    return this;
                },
                toggleClass:function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) :this.removeClass(e) :this.each(ie.isFunction(e) ? function(n) {
                        ie(this).toggleClass(e.call(this, n, this.className, t), t);
                    } :function() {
                        if ("string" === n) for (var t, r = 0, i = ie(this), o = e.match(be) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) :i.addClass(t); else (n === Te || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), 
                        this.className = this.className || e === !1 ? "" :ie._data(this, "__className__") || "");
                    });
                },
                hasClass:function(e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
                    return !1;
                }
            }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                ie.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) :this.trigger(t);
                };
            }), ie.fn.extend({
                hover:function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
                bind:function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind:function(e, t) {
                    return this.off(e, null, t);
                },
                delegate:function(e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate:function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") :this.off(t, e || "**", n);
                }
            });
            var jt = ie.now(), Lt = /\?/, Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ie.parseJSON = function(t) {
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
                var n, r = null, i = ie.trim(t + "");
                return i && !ie.trim(i.replace(Ht, function(e, t, i, o) {
                    return n && t && (r = 0), 0 === r ? e :(n = i || t, r += !o - !i, "");
                })) ? Function("return " + i)() :ie.error("Invalid JSON: " + t);
            }, ie.parseXML = function(t) {
                var n, r;
                if (!t || "string" != typeof t) return null;
                try {
                    e.DOMParser ? (r = new DOMParser(), n = r.parseFromString(t, "text/xml")) :(n = new ActiveXObject("Microsoft.XMLDOM"), 
                    n.async = "false", n.loadXML(t));
                } catch (i) {
                    n = void 0;
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), 
                n;
            };
            var qt, _t, Mt = /#.*$/, Ft = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pt = /^(?:GET|HEAD)$/, Rt = /^\/\//, Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, $t = {}, zt = {}, It = "*/".concat("*");
            try {
                _t = location.href;
            } catch (Xt) {
                _t = he.createElement("a"), _t.href = "", _t = _t.href;
            }
            qt = Wt.exec(_t.toLowerCase()) || [], ie.extend({
                active:0,
                lastModified:{},
                etag:{},
                ajaxSettings:{
                    url:_t,
                    type:"GET",
                    isLocal:Bt.test(qt[1]),
                    global:!0,
                    processData:!0,
                    async:!0,
                    contentType:"application/x-www-form-urlencoded; charset=UTF-8",
                    accepts:{
                        "*":It,
                        text:"text/plain",
                        html:"text/html",
                        xml:"application/xml, text/xml",
                        json:"application/json, text/javascript"
                    },
                    contents:{
                        xml:/xml/,
                        html:/html/,
                        json:/json/
                    },
                    responseFields:{
                        xml:"responseXML",
                        text:"responseText",
                        json:"responseJSON"
                    },
                    converters:{
                        "* text":String,
                        "text html":!0,
                        "text json":ie.parseJSON,
                        "text xml":ie.parseXML
                    },
                    flatOptions:{
                        url:!0,
                        context:!0
                    }
                },
                ajaxSetup:function(e, t) {
                    return t ? W(W(e, ie.ajaxSettings), t) :W(ie.ajaxSettings, e);
                },
                ajaxPrefilter:P($t),
                ajaxTransport:P(zt),
                ajax:function(e, t) {
                    function n(e, t, n, r) {
                        var i, c, v, y, x, T = t;
                        2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 :0, 
                        i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = z(d, y, w, i), 
                        i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ie.lastModified[o] = x), 
                        x = w.getResponseHeader("etag"), x && (ie.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" :304 === e ? T = "notmodified" :(T = y.state, 
                        c = y.data, v = y.error, i = !v)) :(v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), 
                        w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [ c, T, w ]) :h.rejectWith(f, [ w, T, v ]), 
                        w.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" :"ajaxError", [ w, d, i ? c :v ]), 
                        m.fireWith(f, [ w, T ]), u && (p.trigger("ajaxComplete", [ w, d ]), --ie.active || ie.event.trigger("ajaxStop")));
                    }
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, a, s, u, l, c, d = ie.ajaxSetup({}, t), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? ie(f) :ie.event, h = ie.Deferred(), m = ie.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                        readyState:0,
                        getResponseHeader:function(e) {
                            var t;
                            if (2 === b) {
                                if (!c) for (c = {}; t = Ot.exec(a); ) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()];
                            }
                            return null == t ? null :t;
                        },
                        getAllResponseHeaders:function() {
                            return 2 === b ? a :null;
                        },
                        setRequestHeader:function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this;
                        },
                        overrideMimeType:function(e) {
                            return b || (d.mimeType = e), this;
                        },
                        statusCode:function(e) {
                            var t;
                            if (e) if (2 > b) for (t in e) g[t] = [ g[t], e[t] ]; else w.always(e[w.status]);
                            return this;
                        },
                        abort:function(e) {
                            var t = e || x;
                            return l && l.abort(t), n(0, t), this;
                        }
                    };
                    if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || _t) + "").replace(Mt, "").replace(Rt, qt[1] + "//"), 
                    d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(be) || [ "" ], 
                    null == d.crossDomain && (r = Wt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === qt[1] && r[2] === qt[2] && (r[3] || ("http:" === r[1] ? "80" :"443")) === (qt[3] || ("http:" === qt[1] ? "80" :"443")))), 
                    d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), 
                    R($t, d, t, w), 2 === b) return w;
                    u = ie.event && d.global, u && 0 === ie.active++ && ie.event.trigger("ajaxStart"), 
                    d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Lt.test(o) ? "&" :"?") + d.data, 
                    delete d.data), d.cache === !1 && (d.url = Ft.test(o) ? o.replace(Ft, "$1_=" + jt++) :o + (Lt.test(o) ? "&" :"?") + "_=" + jt++)), 
                    d.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), 
                    ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), 
                    w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" :"") :d.accepts["*"]);
                    for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
                    if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
                    x = "abort";
                    for (i in {
                        success:1,
                        error:1,
                        complete:1
                    }) w[i](d[i]);
                    if (l = R(zt, d, t, w)) {
                        w.readyState = 1, u && p.trigger("ajaxSend", [ w, d ]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                            w.abort("timeout");
                        }, d.timeout));
                        try {
                            b = 1, l.send(v, n);
                        } catch (T) {
                            if (!(2 > b)) throw T;
                            n(-1, T);
                        }
                    } else n(-1, "No Transport");
                    return w;
                },
                getJSON:function(e, t, n) {
                    return ie.get(e, t, n, "json");
                },
                getScript:function(e, t) {
                    return ie.get(e, void 0, t, "script");
                }
            }), ie.each([ "get", "post" ], function(e, t) {
                ie[t] = function(e, n, r, i) {
                    return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
                        url:e,
                        type:t,
                        dataType:i,
                        data:n,
                        success:r
                    });
                };
            }), ie._evalUrl = function(e) {
                return ie.ajax({
                    url:e,
                    type:"GET",
                    dataType:"script",
                    async:!1,
                    global:!1,
                    "throws":!0
                });
            }, ie.fn.extend({
                wrapAll:function(e) {
                    if (ie.isFunction(e)) return this.each(function(t) {
                        ie(this).wrapAll(e.call(this, t));
                    });
                    if (this[0]) {
                        var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                            return e;
                        }).append(this);
                    }
                    return this;
                },
                wrapInner:function(e) {
                    return this.each(ie.isFunction(e) ? function(t) {
                        ie(this).wrapInner(e.call(this, t));
                    } :function() {
                        var t = ie(this), n = t.contents();
                        n.length ? n.wrapAll(e) :t.append(e);
                    });
                },
                wrap:function(e) {
                    var t = ie.isFunction(e);
                    return this.each(function(n) {
                        ie(this).wrapAll(t ? e.call(this, n) :e);
                    });
                },
                unwrap:function() {
                    return this.parent().each(function() {
                        ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes);
                    }).end();
                }
            }), ie.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"));
            }, ie.expr.filters.visible = function(e) {
                return !ie.expr.filters.hidden(e);
            };
            var Ut = /%20/g, Vt = /\[\]$/, Jt = /\r?\n/g, Yt = /^(?:submit|button|image|reset|file)$/i, Qt = /^(?:input|select|textarea|keygen)/i;
            ie.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    t = ie.isFunction(t) ? t() :null == t ? "" :t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
                };
                if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() {
                    i(this.name, this.value);
                }); else for (n in e) I(n, e[n], t, i);
                return r.join("&").replace(Ut, "+");
            }, ie.fn.extend({
                serialize:function() {
                    return ie.param(this.serializeArray());
                },
                serializeArray:function() {
                    return this.map(function() {
                        var e = ie.prop(this, "elements");
                        return e ? ie.makeArray(e) :this;
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !ie(this).is(":disabled") && Qt.test(this.nodeName) && !Yt.test(e) && (this.checked || !je.test(e));
                    }).map(function(e, t) {
                        var n = ie(this).val();
                        return null == n ? null :ie.isArray(n) ? ie.map(n, function(e) {
                            return {
                                name:t.name,
                                value:e.replace(Jt, "\r\n")
                            };
                        }) :{
                            name:t.name,
                            value:n.replace(Jt, "\r\n")
                        };
                    }).get();
                }
            }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U();
            } :X;
            var Gt = 0, Kt = {}, Zt = ie.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function() {
                for (var e in Kt) Kt[e](void 0, !0);
            }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && ie.ajaxTransport(function(e) {
                if (!e.crossDomain || ne.cors) {
                    var t;
                    return {
                        send:function(n, r) {
                            var i, o = e.xhr(), a = ++Gt;
                            if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                            o.send(e.hasContent && e.data || null), t = function(n, i) {
                                var s, u, l;
                                if (t && (i || 4 === o.readyState)) if (delete Kt[a], t = void 0, o.onreadystatechange = ie.noop, 
                                i) 4 !== o.readyState && o.abort(); else {
                                    l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                    try {
                                        u = o.statusText;
                                    } catch (c) {
                                        u = "";
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) :s = l.text ? 200 :404;
                                }
                                l && r(s, u, l, o.getAllResponseHeaders());
                            }, e.async ? 4 === o.readyState ? setTimeout(t) :o.onreadystatechange = Kt[a] = t :t();
                        },
                        abort:function() {
                            t && t(void 0, !0);
                        }
                    };
                }
            }), ie.ajaxSetup({
                accepts:{
                    script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents:{
                    script:/(?:java|ecma)script/
                },
                converters:{
                    "text script":function(e) {
                        return ie.globalEval(e), e;
                    }
                }
            }), ie.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
            }), ie.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n = he.head || ie("head")[0] || he.documentElement;
                    return {
                        send:function(r, i) {
                            t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), 
                            t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, 
                                t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"));
                            }, n.insertBefore(t, n.firstChild);
                        },
                        abort:function() {
                            t && t.onload(void 0, !0);
                        }
                    };
                }
            });
            var en = [], tn = /(=)\?(?=&|$)|\?\?/;
            ie.ajaxSetup({
                jsonp:"callback",
                jsonpCallback:function() {
                    var e = en.pop() || ie.expando + "_" + jt++;
                    return this[e] = !0, e;
                }
            }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" :"string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() :t.jsonpCallback, 
                s ? t[s] = t[s].replace(tn, "$1" + i) :t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" :"?") + t.jsonp + "=" + i), 
                t.converters["script json"] = function() {
                    return a || ie.error(i + " was not called"), a[0];
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                    a = arguments;
                }, r.always(function() {
                    e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), 
                    a = o = void 0;
                }), "script") :void 0;
            }), ie.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || he;
                var r = de.exec(e), i = !n && [];
                return r ? [ t.createElement(r[1]) ] :(r = ie.buildFragment([ e ], t, i), i && i.length && ie(i).remove(), 
                ie.merge([], r.childNodes));
            };
            var nn = ie.fn.load;
            ie.fn.load = function(e, t, n) {
                if ("string" != typeof e && nn) return nn.apply(this, arguments);
                var r, i, o, a = this, s = e.indexOf(" ");
                return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, 
                t = void 0) :t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
                    url:e,
                    type:o,
                    dataType:"html",
                    data:t
                }).done(function(e) {
                    i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) :e);
                }).complete(n && function(e, t) {
                    a.each(n, i || [ e.responseText, t, e ]);
                }), this;
            }, ie.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
                ie.fn[t] = function(e) {
                    return this.on(t, e);
                };
            }), ie.expr.filters.animated = function(e) {
                return ie.grep(ie.timers, function(t) {
                    return e === t.elem;
                }).length;
            };
            var rn = e.document.documentElement;
            ie.offset = {
                setOffset:function(e, t, n) {
                    var r, i, o, a, s, u, l, c = ie.css(e, "position"), d = ie(e), f = {};
                    "static" === c && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), 
                    u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [ o, u ]) > -1, 
                    l ? (r = d.position(), a = r.top, i = r.left) :(a = parseFloat(o) || 0, i = parseFloat(u) || 0), 
                    ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), 
                    null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) :d.css(f);
                }
            }, ie.fn.extend({
                offset:function(e) {
                    if (arguments.length) return void 0 === e ? this :this.each(function(t) {
                        ie.offset.setOffset(this, e, t);
                    });
                    var t, n, r = {
                        top:0,
                        left:0
                    }, i = this[0], o = i && i.ownerDocument;
                    if (o) return t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Te && (r = i.getBoundingClientRect()), 
                    n = V(o), {
                        top:r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left:r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) :r;
                },
                position:function() {
                    if (this[0]) {
                        var e, t, n = {
                            top:0,
                            left:0
                        }, r = this[0];
                        return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() :(e = this.offsetParent(), 
                        t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), 
                        n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                            top:t.top - n.top - ie.css(r, "marginTop", !0),
                            left:t.left - n.left - ie.css(r, "marginLeft", !0)
                        };
                    }
                },
                offsetParent:function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position"); ) e = e.offsetParent;
                        return e || rn;
                    });
                }
            }), ie.each({
                scrollLeft:"pageXOffset",
                scrollTop:"pageYOffset"
            }, function(e, t) {
                var n = /Y/.test(t);
                ie.fn[e] = function(r) {
                    return De(this, function(e, r, i) {
                        var o = V(e);
                        return void 0 === i ? o ? t in o ? o[t] :o.document.documentElement[r] :e[r] :void (o ? o.scrollTo(n ? ie(o).scrollLeft() :i, n ? i :ie(o).scrollTop()) :e[r] = i);
                    }, e, r, arguments.length, null);
                };
            }), ie.each([ "top", "left" ], function(e, t) {
                ie.cssHooks[t] = k(ne.pixelPosition, function(e, n) {
                    return n ? (n = rt(e, t), tt.test(n) ? ie(e).position()[t] + "px" :n) :void 0;
                });
            }), ie.each({
                Height:"height",
                Width:"width"
            }, function(e, t) {
                ie.each({
                    padding:"inner" + e,
                    content:t,
                    "":"outer" + e
                }, function(n, r) {
                    ie.fn[r] = function(r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" :"border");
                        return De(this, function(t, n, r) {
                            var i;
                            return ie.isWindow(t) ? t.document.documentElement["client" + e] :9 === t.nodeType ? (i = t.documentElement, 
                            Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) :void 0 === r ? ie.css(t, n, a) :ie.style(t, n, r, a);
                        }, t, o ? r :void 0, o, null);
                    };
                });
            }), ie.fn.size = function() {
                return this.length;
            }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                return ie;
            });
            var on = e.jQuery, an = e.$;
            return ie.noConflict = function(t) {
                return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie;
            }, typeof t === Te && (e.jQuery = e.$ = ie), ie;
        });
    }).call(this), function() {
        t = n = window.jQuery.noConflict();
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.jquery = {
        $:t,
        jQuery:n
    };
}();

!function() {
    var e = Package.meteor.Meteor;
    "undefined" == typeof Package && (Package = {}), Package["standard-minifiers"] = {};
}();

!function() {
    var e = Package.meteor.Meteor, a = Package["ddp-client"].DDP, a, t;
    "undefined" == typeof Package && (Package = {}), Package.livedata = {
        DDP:a,
        LivedataTest:t
    };
}();

!function() {
    var r = Package.meteor.Meteor, n;
    (function() {
        n = function() {
            function r(r) {
                function n(r, n) {
                    var t = (65535 & r) + (65535 & n), e = (r >> 16) + (n >> 16) + (t >> 16);
                    return e << 16 | 65535 & t;
                }
                function t(r, n) {
                    return r >>> n | r << 32 - n;
                }
                function e(r, n) {
                    return r >>> n;
                }
                function o(r, n, t) {
                    return r & n ^ ~r & t;
                }
                function a(r, n, t) {
                    return r & n ^ r & t ^ n & t;
                }
                function u(r) {
                    return t(r, 2) ^ t(r, 13) ^ t(r, 22);
                }
                function f(r) {
                    return t(r, 6) ^ t(r, 11) ^ t(r, 25);
                }
                function c(r) {
                    return t(r, 7) ^ t(r, 18) ^ e(r, 3);
                }
                function i(r) {
                    return t(r, 17) ^ t(r, 19) ^ e(r, 10);
                }
                function h(r, t) {
                    var e = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), h = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), g = new Array(64), C, d, v, A, l, m, S, y, k, P, w, s;
                    r[t >> 5] |= 128 << 24 - t % 32, r[(t + 64 >> 9 << 4) + 15] = t;
                    for (var k = 0; k < r.length; k += 16) {
                        C = h[0], d = h[1], v = h[2], A = h[3], l = h[4], m = h[5], S = h[6], y = h[7];
                        for (var P = 0; 64 > P; P++) 16 > P ? g[P] = r[P + k] :g[P] = n(n(n(i(g[P - 2]), g[P - 7]), c(g[P - 15])), g[P - 16]), 
                        w = n(n(n(n(y, f(l)), o(l, m, S)), e[P]), g[P]), s = n(u(C), a(C, d, v)), y = S, 
                        S = m, m = l, l = n(A, w), A = v, v = d, d = C, C = n(w, s);
                        h[0] = n(C, h[0]), h[1] = n(d, h[1]), h[2] = n(v, h[2]), h[3] = n(A, h[3]), h[4] = n(l, h[4]), 
                        h[5] = n(m, h[5]), h[6] = n(S, h[6]), h[7] = n(y, h[7]);
                    }
                    return h;
                }
                function g(r) {
                    for (var n = Array(), t = (1 << v) - 1, e = 0; e < r.length * v; e += v) n[e >> 5] |= (r.charCodeAt(e / v) & t) << 24 - e % 32;
                    return n;
                }
                function C(r) {
                    for (var n = "", t = 0; t < r.length; t++) {
                        var e = r.charCodeAt(t);
                        128 > e ? n += String.fromCharCode(e) :e > 127 && 2048 > e ? (n += String.fromCharCode(e >> 6 | 192), 
                        n += String.fromCharCode(63 & e | 128)) :(n += String.fromCharCode(e >> 12 | 224), 
                        n += String.fromCharCode(e >> 6 & 63 | 128), n += String.fromCharCode(63 & e | 128));
                    }
                    return n;
                }
                function d(r) {
                    for (var n = A ? "0123456789ABCDEF" :"0123456789abcdef", t = "", e = 0; e < 4 * r.length; e++) t += n.charAt(r[e >> 2] >> 8 * (3 - e % 4) + 4 & 15) + n.charAt(r[e >> 2] >> 8 * (3 - e % 4) & 15);
                    return t;
                }
                var v = 8, A = 0;
                return r = C(r), d(h(g(r), r.length * v));
            }
            return r;
        }();
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.sha = {
        SHA256:n
    };
}();

!function() {
    var t = Package.meteor.Meteor, i = Package.random.Random, r = Package.check.check, o = Package.check.Match, s = Package.sha.SHA256, e = Package.underscore._, h, n;
    (function() {
        h = function() {
            function t(t, i, r) {
                null != t && ("number" == typeof t ? this.fromNumber(t, i, r) :null == i && "string" != typeof t ? this.fromString(t, 256) :this.fromString(t, i));
            }
            function i() {
                return new t(null);
            }
            function r(t, i, r, o, s, e) {
                for (;--e >= 0; ) {
                    var h = i * this[t++] + r[o] + s;
                    s = Math.floor(h / 67108864), r[o++] = 67108863 & h;
                }
                return s;
            }
            function o(t, i, r, o, s, e) {
                for (var h = 32767 & i, n = i >> 15; --e >= 0; ) {
                    var u = 32767 & this[t], f = this[t++] >> 15, a = n * u + f * h;
                    u = h * u + ((32767 & a) << 15) + r[o] + (1073741823 & s), s = (u >>> 30) + (a >>> 15) + n * f + (s >>> 30), 
                    r[o++] = 1073741823 & u;
                }
                return s;
            }
            function s(t, i, r, o, s, e) {
                for (var h = 16383 & i, n = i >> 14; --e >= 0; ) {
                    var u = 16383 & this[t], f = this[t++] >> 14, a = n * u + f * h;
                    u = h * u + ((16383 & a) << 14) + r[o] + s, s = (u >> 28) + (a >> 14) + n * f, r[o++] = 268435455 & u;
                }
                return s;
            }
            function e(t) {
                return ii.charAt(t);
            }
            function h(t, i) {
                var r = ri[t.charCodeAt(i)];
                return null == r ? -1 :r;
            }
            function n(t) {
                for (var i = this.t - 1; i >= 0; --i) t[i] = this[i];
                t.t = this.t, t.s = this.s;
            }
            function u(t) {
                this.t = 1, this.s = 0 > t ? -1 :0, t > 0 ? this[0] = t :-1 > t ? this[0] = t + DV :this.t = 0;
            }
            function f(t) {
                var r = i();
                return r.fromInt(t), r;
            }
            function a(i, r) {
                var o;
                if (16 == r) o = 4; else if (8 == r) o = 3; else if (256 == r) o = 8; else if (2 == r) o = 1; else if (32 == r) o = 5; else {
                    if (4 != r) return void this.fromRadix(i, r);
                    o = 2;
                }
                this.t = 0, this.s = 0;
                for (var s = i.length, e = !1, n = 0; --s >= 0; ) {
                    var u = 8 == o ? 255 & i[s] :h(i, s);
                    0 > u ? "-" == i.charAt(s) && (e = !0) :(e = !1, 0 == n ? this[this.t++] = u :n + o > this.DB ? (this[this.t - 1] |= (u & (1 << this.DB - n) - 1) << n, 
                    this[this.t++] = u >> this.DB - n) :this[this.t - 1] |= u << n, n += o, n >= this.DB && (n -= this.DB));
                }
                8 == o && 0 != (128 & i[0]) && (this.s = -1, n > 0 && (this[this.t - 1] |= (1 << this.DB - n) - 1 << n)), 
                this.clamp(), e && t.ZERO.subTo(this, this);
            }
            function p() {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
            }
            function c(t) {
                if (this.s < 0) return "-" + this.negate().toString(t);
                var i;
                if (16 == t) i = 4; else if (8 == t) i = 3; else if (2 == t) i = 1; else if (32 == t) i = 5; else {
                    if (4 != t) return this.toRadix(t);
                    i = 2;
                }
                var r = (1 << i) - 1, o, s = !1, h = "", n = this.t, u = this.DB - n * this.DB % i;
                if (n-- > 0) for (u < this.DB && (o = this[n] >> u) > 0 && (s = !0, h = e(o)); n >= 0; ) i > u ? (o = (this[n] & (1 << u) - 1) << i - u, 
                o |= this[--n] >> (u += this.DB - i)) :(o = this[n] >> (u -= i) & r, 0 >= u && (u += this.DB, 
                --n)), o > 0 && (s = !0), s && (h += e(o));
                return s ? h :"0";
            }
            function m() {
                var r = i();
                return t.ZERO.subTo(this, r), r;
            }
            function l() {
                return this.s < 0 ? this.negate() :this;
            }
            function v(t) {
                var i = this.s - t.s;
                if (0 != i) return i;
                var r = this.t;
                if (i = r - t.t, 0 != i) return i;
                for (;--r >= 0; ) if (0 != (i = this[r] - t[r])) return i;
                return 0;
            }
            function T(t) {
                var i = 1, r;
                return 0 != (r = t >>> 16) && (t = r, i += 16), 0 != (r = t >> 8) && (t = r, i += 8), 
                0 != (r = t >> 4) && (t = r, i += 4), 0 != (r = t >> 2) && (t = r, i += 2), 0 != (r = t >> 1) && (t = r, 
                i += 1), i;
            }
            function y() {
                return this.t <= 0 ? 0 :this.DB * (this.t - 1) + T(this[this.t - 1] ^ this.s & this.DM);
            }
            function d(t, i) {
                var r;
                for (r = this.t - 1; r >= 0; --r) i[r + t] = this[r];
                for (r = t - 1; r >= 0; --r) i[r] = 0;
                i.t = this.t + t, i.s = this.s;
            }
            function D(t, i) {
                for (var r = t; r < this.t; ++r) i[r - t] = this[r];
                i.t = Math.max(this.t - t, 0), i.s = this.s;
            }
            function g(t, i) {
                var r = t % this.DB, o = this.DB - r, s = (1 << o) - 1, e = Math.floor(t / this.DB), h = this.s << r & this.DM, n;
                for (n = this.t - 1; n >= 0; --n) i[n + e + 1] = this[n] >> o | h, h = (this[n] & s) << r;
                for (n = e - 1; n >= 0; --n) i[n] = 0;
                i[e] = h, i.t = this.t + e + 1, i.s = this.s, i.clamp();
            }
            function B(t, i) {
                i.s = this.s;
                var r = Math.floor(t / this.DB);
                if (r >= this.t) return void (i.t = 0);
                var o = t % this.DB, s = this.DB - o, e = (1 << o) - 1;
                i[0] = this[r] >> o;
                for (var h = r + 1; h < this.t; ++h) i[h - r - 1] |= (this[h] & e) << s, i[h - r] = this[h] >> o;
                o > 0 && (i[this.t - r - 1] |= (this.s & e) << s), i.t = this.t - r, i.clamp();
            }
            function b(t, i) {
                for (var r = 0, o = 0, s = Math.min(t.t, this.t); s > r; ) o += this[r] - t[r], 
                i[r++] = o & this.DM, o >>= this.DB;
                if (t.t < this.t) {
                    for (o -= t.s; r < this.t; ) o += this[r], i[r++] = o & this.DM, o >>= this.DB;
                    o += this.s;
                } else {
                    for (o += this.s; r < t.t; ) o -= t[r], i[r++] = o & this.DM, o >>= this.DB;
                    o -= t.s;
                }
                i.s = 0 > o ? -1 :0, -1 > o ? i[r++] = this.DV + o :o > 0 && (i[r++] = o), i.t = r, 
                i.clamp();
            }
            function S(i, r) {
                var o = this.abs(), s = i.abs(), e = o.t;
                for (r.t = e + s.t; --e >= 0; ) r[e] = 0;
                for (e = 0; e < s.t; ++e) r[e + o.t] = o.am(0, s[e], r, e, 0, o.t);
                r.s = 0, r.clamp(), this.s != i.s && t.ZERO.subTo(r, r);
            }
            function E(t) {
                for (var i = this.abs(), r = t.t = 2 * i.t; --r >= 0; ) t[r] = 0;
                for (r = 0; r < i.t - 1; ++r) {
                    var o = i.am(r, i[r], t, 2 * r, 0, 1);
                    (t[r + i.t] += i.am(r + 1, 2 * i[r], t, 2 * r + 1, o, i.t - r - 1)) >= i.DV && (t[r + i.t] -= i.DV, 
                    t[r + i.t + 1] = 1);
                }
                t.t > 0 && (t[t.t - 1] += i.am(r, i[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
            }
            function w(r, o, s) {
                var e = r.abs();
                if (!(e.t <= 0)) {
                    var h = this.abs();
                    if (h.t < e.t) return null != o && o.fromInt(0), void (null != s && this.copyTo(s));
                    null == s && (s = i());
                    var n = i(), u = this.s, f = r.s, a = this.DB - T(e[e.t - 1]);
                    a > 0 ? (e.lShiftTo(a, n), h.lShiftTo(a, s)) :(e.copyTo(n), h.copyTo(s));
                    var p = n.t, c = n[p - 1];
                    if (0 != c) {
                        var m = c * (1 << this.F1) + (p > 1 ? n[p - 2] >> this.F2 :0), l = this.FV / m, v = (1 << this.F1) / m, y = 1 << this.F2, d = s.t, D = d - p, g = null == o ? i() :o;
                        for (n.dlShiftTo(D, g), s.compareTo(g) >= 0 && (s[s.t++] = 1, s.subTo(g, s)), t.ONE.dlShiftTo(p, g), 
                        g.subTo(n, n); n.t < p; ) n[n.t++] = 0;
                        for (;--D >= 0; ) {
                            var B = s[--d] == c ? this.DM :Math.floor(s[d] * l + (s[d - 1] + y) * v);
                            if ((s[d] += n.am(0, B, s, D, 0, p)) < B) for (n.dlShiftTo(D, g), s.subTo(g, s); s[d] < --B; ) s.subTo(g, s);
                        }
                        null != o && (s.drShiftTo(p, o), u != f && t.ZERO.subTo(o, o)), s.t = p, s.clamp(), 
                        a > 0 && s.rShiftTo(a, s), 0 > u && t.ZERO.subTo(s, s);
                    }
                }
            }
            function M(r) {
                var o = i();
                return this.abs().divRemTo(r, null, o), this.s < 0 && o.compareTo(t.ZERO) > 0 && r.subTo(o, o), 
                o;
            }
            function A(t) {
                this.m = t;
            }
            function R(t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) :t;
            }
            function O(t) {
                return t;
            }
            function C(t) {
                t.divRemTo(this.m, null, t);
            }
            function F(t, i, r) {
                t.multiplyTo(i, r), this.reduce(r);
            }
            function V(t, i) {
                t.squareTo(i), this.reduce(i);
            }
            function N() {
                if (this.t < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var i = 3 & t;
                return i = i * (2 - (15 & t) * i) & 15, i = i * (2 - (255 & t) * i) & 255, i = i * (2 - ((65535 & t) * i & 65535)) & 65535, 
                i = i * (2 - t * i % this.DV) % this.DV, i > 0 ? this.DV - i :-i;
            }
            function k(t) {
                this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
                this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
            }
            function q(r) {
                var o = i();
                return r.abs().dlShiftTo(this.m.t, o), o.divRemTo(this.m, null, o), r.s < 0 && o.compareTo(t.ZERO) > 0 && this.m.subTo(o, o), 
                o;
            }
            function P(t) {
                var r = i();
                return t.copyTo(r), this.reduce(r), r;
            }
            function L(t) {
                for (;t.t <= this.mt2; ) t[t.t++] = 0;
                for (var i = 0; i < this.m.t; ++i) {
                    var r = 32767 & t[i], o = r * this.mpl + ((r * this.mph + (t[i] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (r = i + this.m.t, t[r] += this.m.am(0, o, t, i, 0, this.m.t); t[r] >= t.DV; ) t[r] -= t.DV, 
                    t[++r]++;
                }
                t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
            }
            function x(t, i) {
                t.squareTo(i), this.reduce(i);
            }
            function I(t, i, r) {
                t.multiplyTo(i, r), this.reduce(r);
            }
            function Z() {
                return 0 == (this.t > 0 ? 1 & this[0] :this.s);
            }
            function z(r, o) {
                if (r > 4294967295 || 1 > r) return t.ONE;
                var s = i(), e = i(), h = o.convert(this), n = T(r) - 1;
                for (h.copyTo(s); --n >= 0; ) if (o.sqrTo(s, e), (r & 1 << n) > 0) o.mulTo(e, h, s); else {
                    var u = s;
                    s = e, e = u;
                }
                return o.revert(s);
            }
            function U(t, i) {
                var r;
                return r = 256 > t || i.isEven() ? new A(i) :new k(i), this.exp(t, r);
            }
            function j() {
                var t = i();
                return this.copyTo(t), t;
            }
            function H() {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1;
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0;
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
            }
            function _() {
                return 0 == this.t ? this.s :this[0] << 24 >> 24;
            }
            function G() {
                return 0 == this.t ? this.s :this[0] << 16 >> 16;
            }
            function J(t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t));
            }
            function K() {
                return this.s < 0 ? -1 :this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 :1;
            }
            function Q(t) {
                if (null == t && (t = 10), 0 == this.signum() || 2 > t || t > 36) return "0";
                var r = this.chunkSize(t), o = Math.pow(t, r), s = f(o), e = i(), h = i(), n = "";
                for (this.divRemTo(s, e, h); e.signum() > 0; ) n = (o + h.intValue()).toString(t).substr(1) + n, 
                e.divRemTo(s, e, h);
                return h.intValue().toString(t) + n;
            }
            function W(i, r) {
                this.fromInt(0), null == r && (r = 10);
                for (var o = this.chunkSize(r), s = Math.pow(r, o), e = !1, n = 0, u = 0, f = 0; f < i.length; ++f) {
                    var a = h(i, f);
                    0 > a ? "-" == i.charAt(f) && 0 == this.signum() && (e = !0) :(u = r * u + a, ++n >= o && (this.dMultiply(s), 
                    this.dAddOffset(u, 0), n = 0, u = 0));
                }
                n > 0 && (this.dMultiply(Math.pow(r, n)), this.dAddOffset(u, 0)), e && t.ZERO.subTo(this, this);
            }
            function X(i, r, o) {
                if ("number" == typeof r) if (2 > i) this.fromInt(1); else for (this.fromNumber(i, o), 
                this.testBit(i - 1) || this.bitwiseTo(t.ONE.shiftLeft(i - 1), et, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(r); ) this.dAddOffset(2, 0), 
                this.bitLength() > i && this.subTo(t.ONE.shiftLeft(i - 1), this); else {
                    var s = new Array(), e = 7 & i;
                    s.length = (i >> 3) + 1, r.nextBytes(s), e > 0 ? s[0] &= (1 << e) - 1 :s[0] = 0, 
                    this.fromString(s, 256);
                }
            }
            function Y() {
                var t = this.t, i = new Array();
                i[0] = this.s;
                var r = this.DB - t * this.DB % 8, o, s = 0;
                if (t-- > 0) for (r < this.DB && (o = this[t] >> r) != (this.s & this.DM) >> r && (i[s++] = o | this.s << this.DB - r); t >= 0; ) 8 > r ? (o = (this[t] & (1 << r) - 1) << 8 - r, 
                o |= this[--t] >> (r += this.DB - 8)) :(o = this[t] >> (r -= 8) & 255, 0 >= r && (r += this.DB, 
                --t)), 0 != (128 & o) && (o |= -256), 0 == s && (128 & this.s) != (128 & o) && ++s, 
                (s > 0 || o != this.s) && (i[s++] = o);
                return i;
            }
            function $(t) {
                return 0 == this.compareTo(t);
            }
            function tt(t) {
                return this.compareTo(t) < 0 ? this :t;
            }
            function it(t) {
                return this.compareTo(t) > 0 ? this :t;
            }
            function rt(t, i, r) {
                var o, s, e = Math.min(t.t, this.t);
                for (o = 0; e > o; ++o) r[o] = i(this[o], t[o]);
                if (t.t < this.t) {
                    for (s = t.s & this.DM, o = e; o < this.t; ++o) r[o] = i(this[o], s);
                    r.t = this.t;
                } else {
                    for (s = this.s & this.DM, o = e; o < t.t; ++o) r[o] = i(s, t[o]);
                    r.t = t.t;
                }
                r.s = i(this.s, t.s), r.clamp();
            }
            function ot(t, i) {
                return t & i;
            }
            function st(t) {
                var r = i();
                return this.bitwiseTo(t, ot, r), r;
            }
            function et(t, i) {
                return t | i;
            }
            function ht(t) {
                var r = i();
                return this.bitwiseTo(t, et, r), r;
            }
            function nt(t, i) {
                return t ^ i;
            }
            function ut(t) {
                var r = i();
                return this.bitwiseTo(t, nt, r), r;
            }
            function ft(t, i) {
                return t & ~i;
            }
            function at(t) {
                var r = i();
                return this.bitwiseTo(t, ft, r), r;
            }
            function pt() {
                for (var t = i(), r = 0; r < this.t; ++r) t[r] = this.DM & ~this[r];
                return t.t = this.t, t.s = ~this.s, t;
            }
            function ct(t) {
                var r = i();
                return 0 > t ? this.rShiftTo(-t, r) :this.lShiftTo(t, r), r;
            }
            function mt(t) {
                var r = i();
                return 0 > t ? this.lShiftTo(-t, r) :this.rShiftTo(t, r), r;
            }
            function lt(t) {
                if (0 == t) return -1;
                var i = 0;
                return 0 == (65535 & t) && (t >>= 16, i += 16), 0 == (255 & t) && (t >>= 8, i += 8), 
                0 == (15 & t) && (t >>= 4, i += 4), 0 == (3 & t) && (t >>= 2, i += 2), 0 == (1 & t) && ++i, 
                i;
            }
            function vt() {
                for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + lt(this[t]);
                return this.s < 0 ? this.t * this.DB :-1;
            }
            function Tt(t) {
                for (var i = 0; 0 != t; ) t &= t - 1, ++i;
                return i;
            }
            function yt() {
                for (var t = 0, i = this.s & this.DM, r = 0; r < this.t; ++r) t += Tt(this[r] ^ i);
                return t;
            }
            function dt(t) {
                var i = Math.floor(t / this.DB);
                return i >= this.t ? 0 != this.s :0 != (this[i] & 1 << t % this.DB);
            }
            function Dt(i, r) {
                var o = t.ONE.shiftLeft(i);
                return this.bitwiseTo(o, r, o), o;
            }
            function gt(t) {
                return this.changeBit(t, et);
            }
            function Bt(t) {
                return this.changeBit(t, ft);
            }
            function bt(t) {
                return this.changeBit(t, nt);
            }
            function St(t, i) {
                for (var r = 0, o = 0, s = Math.min(t.t, this.t); s > r; ) o += this[r] + t[r], 
                i[r++] = o & this.DM, o >>= this.DB;
                if (t.t < this.t) {
                    for (o += t.s; r < this.t; ) o += this[r], i[r++] = o & this.DM, o >>= this.DB;
                    o += this.s;
                } else {
                    for (o += this.s; r < t.t; ) o += t[r], i[r++] = o & this.DM, o >>= this.DB;
                    o += t.s;
                }
                i.s = 0 > o ? -1 :0, o > 0 ? i[r++] = o :-1 > o && (i[r++] = this.DV + o), i.t = r, 
                i.clamp();
            }
            function Et(t) {
                var r = i();
                return this.addTo(t, r), r;
            }
            function wt(t) {
                var r = i();
                return this.subTo(t, r), r;
            }
            function Mt(t) {
                var r = i();
                return this.multiplyTo(t, r), r;
            }
            function At(t) {
                var r = i();
                return this.divRemTo(t, r, null), r;
            }
            function Rt(t) {
                var r = i();
                return this.divRemTo(t, null, r), r;
            }
            function Ot(t) {
                var r = i(), o = i();
                return this.divRemTo(t, r, o), new Array(r, o);
            }
            function Ct(t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
            }
            function Ft(t, i) {
                for (;this.t <= i; ) this[this.t++] = 0;
                for (this[i] += t; this[i] >= this.DV; ) this[i] -= this.DV, ++i >= this.t && (this[this.t++] = 0), 
                ++this[i];
            }
            function Vt() {}
            function Nt(t) {
                return t;
            }
            function kt(t, i, r) {
                t.multiplyTo(i, r);
            }
            function qt(t, i) {
                t.squareTo(i);
            }
            function Pt(t) {
                return this.exp(t, new Vt());
            }
            function Lt(t, i, r) {
                var o = Math.min(this.t + t.t, i);
                for (r.s = 0, r.t = o; o > 0; ) r[--o] = 0;
                var s;
                for (s = r.t - this.t; s > o; ++o) r[o + this.t] = this.am(0, t[o], r, o, 0, this.t);
                for (s = Math.min(t.t, i); s > o; ++o) this.am(0, t[o], r, o, 0, i - o);
                r.clamp();
            }
            function xt(t, i, r) {
                --i;
                var o = r.t = this.t + t.t - i;
                for (r.s = 0; --o >= 0; ) r[o] = 0;
                for (o = Math.max(i - this.t, 0); o < t.t; ++o) r[this.t + o - i] = this.am(i - o, t[o], r, 0, 0, this.t + o - i);
                r.clamp(), r.drShiftTo(1, r);
            }
            function It(r) {
                this.r2 = i(), this.q3 = i(), t.ONE.dlShiftTo(2 * r.t, this.r2), this.mu = this.r2.divide(r), 
                this.m = r;
            }
            function Zt(t) {
                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                if (t.compareTo(this.m) < 0) return t;
                var r = i();
                return t.copyTo(r), this.reduce(r), r;
            }
            function zt(t) {
                return t;
            }
            function Ut(t) {
                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, 
                t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
            }
            function jt(t, i) {
                t.squareTo(i), this.reduce(i);
            }
            function Ht(t, i, r) {
                t.multiplyTo(i, r), this.reduce(r);
            }
            function _t(t, r) {
                var o = t.bitLength(), s, e = f(1), h;
                if (0 >= o) return e;
                s = 18 > o ? 1 :48 > o ? 3 :144 > o ? 4 :768 > o ? 5 :6, h = 8 > o ? new A(r) :r.isEven() ? new It(r) :new k(r);
                var n = new Array(), u = 3, a = s - 1, p = (1 << s) - 1;
                if (n[1] = h.convert(this), s > 1) {
                    var c = i();
                    for (h.sqrTo(n[1], c); p >= u; ) n[u] = i(), h.mulTo(c, n[u - 2], n[u]), u += 2;
                }
                var m = t.t - 1, l, v = !0, y = i(), d;
                for (o = T(t[m]) - 1; m >= 0; ) {
                    for (o >= a ? l = t[m] >> o - a & p :(l = (t[m] & (1 << o + 1) - 1) << a - o, m > 0 && (l |= t[m - 1] >> this.DB + o - a)), 
                    u = s; 0 == (1 & l); ) l >>= 1, --u;
                    if ((o -= u) < 0 && (o += this.DB, --m), v) n[l].copyTo(e), v = !1; else {
                        for (;u > 1; ) h.sqrTo(e, y), h.sqrTo(y, e), u -= 2;
                        u > 0 ? h.sqrTo(e, y) :(d = e, e = y, y = d), h.mulTo(y, n[l], e);
                    }
                    for (;m >= 0 && 0 == (t[m] & 1 << o); ) h.sqrTo(e, y), d = e, e = y, y = d, --o < 0 && (o = this.DB - 1, 
                    --m);
                }
                return h.revert(e);
            }
            function Gt(t) {
                var i = this.s < 0 ? this.negate() :this.clone(), r = t.s < 0 ? t.negate() :t.clone();
                if (i.compareTo(r) < 0) {
                    var o = i;
                    i = r, r = o;
                }
                var s = i.getLowestSetBit(), e = r.getLowestSetBit();
                if (0 > e) return i;
                for (e > s && (e = s), e > 0 && (i.rShiftTo(e, i), r.rShiftTo(e, r)); i.signum() > 0; ) (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), 
                (s = r.getLowestSetBit()) > 0 && r.rShiftTo(s, r), i.compareTo(r) >= 0 ? (i.subTo(r, i), 
                i.rShiftTo(1, i)) :(r.subTo(i, r), r.rShiftTo(1, r));
                return e > 0 && r.lShiftTo(e, r), r;
            }
            function Jt(t) {
                if (0 >= t) return 0;
                var i = this.DV % t, r = this.s < 0 ? t - 1 :0;
                if (this.t > 0) if (0 == i) r = this[0] % t; else for (var o = this.t - 1; o >= 0; --o) r = (i * r + this[o]) % t;
                return r;
            }
            function Kt(i) {
                var r = i.isEven();
                if (this.isEven() && r || 0 == i.signum()) return t.ZERO;
                for (var o = i.clone(), s = this.clone(), e = f(1), h = f(0), n = f(0), u = f(1); 0 != o.signum(); ) {
                    for (;o.isEven(); ) o.rShiftTo(1, o), r ? (e.isEven() && h.isEven() || (e.addTo(this, e), 
                    h.subTo(i, h)), e.rShiftTo(1, e)) :h.isEven() || h.subTo(i, h), h.rShiftTo(1, h);
                    for (;s.isEven(); ) s.rShiftTo(1, s), r ? (n.isEven() && u.isEven() || (n.addTo(this, n), 
                    u.subTo(i, u)), n.rShiftTo(1, n)) :u.isEven() || u.subTo(i, u), u.rShiftTo(1, u);
                    o.compareTo(s) >= 0 ? (o.subTo(s, o), r && e.subTo(n, e), h.subTo(u, h)) :(s.subTo(o, s), 
                    r && n.subTo(e, n), u.subTo(h, u));
                }
                return 0 != s.compareTo(t.ONE) ? t.ZERO :u.compareTo(i) >= 0 ? u.subtract(i) :u.signum() < 0 ? (u.addTo(i, u), 
                u.signum() < 0 ? u.add(i) :u) :u;
            }
            function Qt(t) {
                var i, r = this.abs();
                if (1 == r.t && r[0] <= ei[ei.length - 1]) {
                    for (i = 0; i < ei.length; ++i) if (r[0] == ei[i]) return !0;
                    return !1;
                }
                if (r.isEven()) return !1;
                for (i = 1; i < ei.length; ) {
                    for (var o = ei[i], s = i + 1; s < ei.length && hi > o; ) o *= ei[s++];
                    for (o = r.modInt(o); s > i; ) if (o % ei[i++] == 0) return !1;
                }
                return r.millerRabin(t);
            }
            function Wt(r) {
                var o = this.subtract(t.ONE), s = o.getLowestSetBit();
                if (0 >= s) return !1;
                var e = o.shiftRight(s);
                r = r + 1 >> 1, r > ei.length && (r = ei.length);
                for (var h = i(), n = 0; r > n; ++n) {
                    h.fromInt(ei[n]);
                    var u = h.modPow(e, this);
                    if (0 != u.compareTo(t.ONE) && 0 != u.compareTo(o)) {
                        for (var f = 1; f++ < s && 0 != u.compareTo(o); ) if (u = u.modPowInt(2, this), 
                        0 == u.compareTo(t.ONE)) return !1;
                        if (0 != u.compareTo(o)) return !1;
                    }
                }
                return !0;
            }
            var Xt, Yt = 0xdeadbeefcafe, $t = 15715070 == (16777215 & Yt);
            t.prototype.am = s, Xt = 28, t.prototype.DB = Xt, t.prototype.DM = (1 << Xt) - 1, 
            t.prototype.DV = 1 << Xt;
            var ti = 52;
            t.prototype.FV = Math.pow(2, ti), t.prototype.F1 = ti - Xt, t.prototype.F2 = 2 * Xt - ti;
            var ii = "0123456789abcdefghijklmnopqrstuvwxyz", ri = new Array(), oi, si;
            for (oi = "0".charCodeAt(0), si = 0; 9 >= si; ++si) ri[oi++] = si;
            for (oi = "a".charCodeAt(0), si = 10; 36 > si; ++si) ri[oi++] = si;
            for (oi = "A".charCodeAt(0), si = 10; 36 > si; ++si) ri[oi++] = si;
            A.prototype.convert = R, A.prototype.revert = O, A.prototype.reduce = C, A.prototype.mulTo = F, 
            A.prototype.sqrTo = V, k.prototype.convert = q, k.prototype.revert = P, k.prototype.reduce = L, 
            k.prototype.mulTo = I, k.prototype.sqrTo = x, t.prototype.copyTo = n, t.prototype.fromInt = u, 
            t.prototype.fromString = a, t.prototype.clamp = p, t.prototype.dlShiftTo = d, t.prototype.drShiftTo = D, 
            t.prototype.lShiftTo = g, t.prototype.rShiftTo = B, t.prototype.subTo = b, t.prototype.multiplyTo = S, 
            t.prototype.squareTo = E, t.prototype.divRemTo = w, t.prototype.invDigit = N, t.prototype.isEven = Z, 
            t.prototype.exp = z, t.prototype.toString = c, t.prototype.negate = m, t.prototype.abs = l, 
            t.prototype.compareTo = v, t.prototype.bitLength = y, t.prototype.mod = M, t.prototype.modPowInt = U, 
            t.ZERO = f(0), t.ONE = f(1), Vt.prototype.convert = Nt, Vt.prototype.revert = Nt, 
            Vt.prototype.mulTo = kt, Vt.prototype.sqrTo = qt, It.prototype.convert = Zt, It.prototype.revert = zt, 
            It.prototype.reduce = Ut, It.prototype.mulTo = Ht, It.prototype.sqrTo = jt;
            var ei = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509 ], hi = (1 << 26) / ei[ei.length - 1];
            return t.prototype.chunkSize = J, t.prototype.toRadix = Q, t.prototype.fromRadix = W, 
            t.prototype.fromNumber = X, t.prototype.bitwiseTo = rt, t.prototype.changeBit = Dt, 
            t.prototype.addTo = St, t.prototype.dMultiply = Ct, t.prototype.dAddOffset = Ft, 
            t.prototype.multiplyLowerTo = Lt, t.prototype.multiplyUpperTo = xt, t.prototype.modInt = Jt, 
            t.prototype.millerRabin = Wt, t.prototype.clone = j, t.prototype.intValue = H, t.prototype.byteValue = _, 
            t.prototype.shortValue = G, t.prototype.signum = K, t.prototype.toByteArray = Y, 
            t.prototype.equals = $, t.prototype.min = tt, t.prototype.max = it, t.prototype.and = st, 
            t.prototype.or = ht, t.prototype.xor = ut, t.prototype.andNot = at, t.prototype.not = pt, 
            t.prototype.shiftLeft = ct, t.prototype.shiftRight = mt, t.prototype.getLowestSetBit = vt, 
            t.prototype.bitCount = yt, t.prototype.testBit = dt, t.prototype.setBit = gt, t.prototype.clearBit = Bt, 
            t.prototype.flipBit = bt, t.prototype.add = Et, t.prototype.subtract = wt, t.prototype.multiply = Mt, 
            t.prototype.divide = At, t.prototype.remainder = Rt, t.prototype.divideAndRemainder = Ot, 
            t.prototype.modPow = _t, t.prototype.modInverse = Kt, t.prototype.pow = Pt, t.prototype.gcd = Gt, 
            t.prototype.isProbablePrime = Qt, t;
        }();
    }).call(this), function() {
        n = {}, n.generateVerifier = function(t, o) {
            var s = r(o), e = o && o.salt || i.secret(), n, u = o && o.hashedIdentityAndPassword;
            u || (n = o && o.identity || i.secret(), u = s.hash(n + ":" + t));
            var f = s.hash(e + u), a = new h(f, 16), p = s.g.modPow(a, s.N);
            return {
                identity:n,
                salt:e,
                verifier:p.toString(16)
            };
        }, n.matchVerifier = {
            identity:String,
            salt:String,
            verifier:String
        };
        var t = {
            hash:function(t) {
                return s(t).toLowerCase();
            },
            N:new h("EEAF0AB9ADB38DD69C33F80AFA8FC5E86072618775FF3C0B9EA2314C9C256576D674DF7496EA81D3383B4813D692C6E0E0D5D8E250B98BE48E495C1D6089DAD15DC7D7B46154D6B6CE8EF4AD69B15D4982559B297BCF1885C529F566660E57EC68EDBC3C05726CC02FD4CBF4976EAA9AFD5138FE8376435B9FC61D2FC0EB06E3", 16),
            g:new h("2")
        };
        t.k = new h(t.hash(t.N.toString(16) + t.g.toString(16)), 16);
        var r = function(i) {
            if (!i) return t;
            var r = e.extend({}, t);
            return e.each([ "N", "g", "k" ], function(t) {
                if (i[t]) if ("string" == typeof i[t]) r[t] = new h(i[t], 16); else {
                    if (!(i[t] instanceof h)) throw new Error("Invalid parameter: " + t);
                    r[t] = i[t];
                }
            }), i.hash && (r.hash = function(t) {
                return i.hash(t).toLowerCase();
            }), !i.k && (i.N || i.g || i.hash) && (r.k = r.hash(r.N.toString(16) + r.g.toString(16))), 
            r;
        };
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.srp = {
        SRP:n
    };
}();

!function() {
    var n = Package.meteor.Meteor, e = Package["ddp-client"].DDP, o = Package.underscore._, r = Package.srp.SRP, t = Package.sha.SHA256, e;
    (function() {
        (function() {
            function a(n, e, a, i) {
                function c(e, o) {
                    !e && o && o.token ? n.onReconnect = function() {
                        d = !0, l([ {
                            resume:o.token
                        } ]);
                    } :n.onReconnect = null;
                }
                function s(e, o) {
                    d || (e || !o ? g(e || new Error("No result from call to login")) :f && !f.verifyConfirmation({
                        HAMK:o.HAMK
                    }) ? g(new Error("Server is cheating!")) :(n.setUserId(o.id), g()));
                }
                function l(e) {
                    n.apply("login", e, {
                        wait:!0,
                        onResultReceived:c
                    }, s);
                }
                function u(n) {
                    return {
                        digest:t(n),
                        algorithm:"sha-256"
                    };
                }
                i = i || function() {}, "string" == typeof e && (e = -1 === e.indexOf("@") ? {
                    username:e
                } :{
                    email:e
                });
                var f;
                "function" == typeof r.Client && (f = new r.Client(a));
                var g = o.once(i), d = !1;
                if (f) {
                    var p = f.startExchange();
                    p.user = e, n.apply("beginPasswordExchange", [ p ], function(n, e) {
                        if (n || !e) return void g(n || new Error("No result from call to beginPasswordExchange"));
                        var o = f.respondToChallenge(e);
                        l([ {
                            srp:o
                        } ]);
                    });
                } else l([ {
                    user:e,
                    password:u(a)
                } ]);
            }
            e = e || {}, n.isClient ? e.loginWithPassword = a :e.loginWithPassword = function i(e, o, r, t) {
                return t ? a(e, o, r, t) :n.wrapAsync(a)(e, o, r);
            };
        }).call(this);
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["ongoworks:ddp-login"] = {};
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.underscore._, n;
    (function() {
        n = {
            _isCssLoaded:function() {
                return 0 === document.styleSheets.length ? !0 :t.find(document.styleSheets, function(e) {
                    return e.cssText && !e.cssRules ? !e.cssText.match(/meteor-css-not-found-error/) :!t.find(e.cssRules, function(e) {
                        return ".meteor-css-not-found-error" === e.selectorText;
                    });
                });
            }
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.webapp = {
        WebApp:n
    };
}();

!function() {
    var e = Package.meteor.Meteor;
    "undefined" == typeof Package && (Package = {}), Package["hot-code-push"] = {};
}();

!function() {
    var e = Package.meteor.Meteor, a = Package.tracker.Tracker, c = Package.tracker.Deps, a, c;
    "undefined" == typeof Package && (Package = {}), Package.deps = {
        Tracker:a,
        Deps:c
    };
}();

!function() {
    var t = Package.meteor.Meteor, e = Package.tracker.Tracker, r = Package.tracker.Deps, i, n, o;
    (function() {
        i = {}, n = function(t) {
            return t;
        }, o = Array.prototype.slice;
    }).call(this), function() {
        var t = Object.prototype.hasOwnProperty, e = function(e, r) {
            for (var i in r) t.call(r, i) && (e[i] = r[i]);
            return e;
        };
        i.Visitor = function(t) {
            e(this, t);
        }, i.Visitor.def = function(t) {
            e(this.prototype, t);
        }, i.Visitor.extend = function(t) {
            var r = this, n = function o() {
                i.Visitor.apply(this, arguments);
            };
            return n.prototype = new r(), n.extend = r.extend, n.def = r.def, t && e(n.prototype, t), 
            n;
        }, i.Visitor.def({
            visit:function(t) {
                if (null == t) return this.visitNull.apply(this, arguments);
                if ("object" == typeof t) {
                    if (t.htmljsType) switch (t.htmljsType) {
                      case i.Tag.htmljsType:
                        return this.visitTag.apply(this, arguments);

                      case i.CharRef.htmljsType:
                        return this.visitCharRef.apply(this, arguments);

                      case i.Comment.htmljsType:
                        return this.visitComment.apply(this, arguments);

                      case i.Raw.htmljsType:
                        return this.visitRaw.apply(this, arguments);

                      default:
                        throw new Error("Unknown htmljs type: " + t.htmljsType);
                    }
                    return i.isArray(t) ? this.visitArray.apply(this, arguments) :this.visitObject.apply(this, arguments);
                }
                if ("string" == typeof t || "boolean" == typeof t || "number" == typeof t) return this.visitPrimitive.apply(this, arguments);
                if ("function" == typeof t) return this.visitFunction.apply(this, arguments);
                throw new Error("Unexpected object in htmljs: " + t);
            },
            visitNull:function(t) {},
            visitPrimitive:function(t) {},
            visitArray:function(t) {},
            visitComment:function(t) {},
            visitCharRef:function(t) {},
            visitRaw:function(t) {},
            visitTag:function(t) {},
            visitObject:function(t) {
                throw new Error("Unexpected object in htmljs: " + t);
            },
            visitFunction:function(t) {
                throw new Error("Unexpected function in htmljs: " + obj);
            }
        }), i.TransformingVisitor = i.Visitor.extend(), i.TransformingVisitor.def({
            visitNull:n,
            visitPrimitive:n,
            visitArray:function(t) {
                for (var e = o.call(arguments), r = t, i = 0; i < t.length; i++) {
                    var n = t[i];
                    e[0] = n;
                    var a = this.visit.apply(this, e);
                    a !== n && (r === t && (r = t.slice()), r[i] = a);
                }
                return r;
            },
            visitComment:n,
            visitCharRef:n,
            visitRaw:n,
            visitObject:n,
            visitFunction:n,
            visitTag:function(t) {
                var e = t.children, r = o.call(arguments);
                r[0] = e;
                var n = this.visitChildren.apply(this, r), a = t.attrs;
                r[0] = a;
                var s = this.visitAttributes.apply(this, r);
                if (s === a && n === e) return t;
                var u = i.getTag(t.tagName).apply(null, n);
                return u.attrs = s, u;
            },
            visitChildren:function(t) {
                return this.visitArray.apply(this, arguments);
            },
            visitAttributes:function(t) {
                if (i.isArray(t)) {
                    for (var r = o.call(arguments), n = t, a = 0; a < t.length; a++) {
                        var s = t[a];
                        r[0] = s;
                        var u = this.visitAttributes.apply(this, r);
                        u !== s && (n === t && (n = t.slice()), n[a] = u);
                    }
                    return n;
                }
                if (t && i.isConstructedObject(t)) throw new Error("The basic HTML.TransformingVisitor does not support foreign objects in attributes.  Define a custom visitAttributes for this case.");
                var l = t, f = l;
                if (l) {
                    var c = [ null, null ];
                    c.push.apply(c, arguments);
                    for (var h in l) {
                        var p = l[h];
                        c[0] = h, c[1] = p;
                        var m = this.visitAttribute.apply(this, c);
                        m !== p && (f === l && (f = e({}, l)), f[h] = m);
                    }
                }
                return f;
            },
            visitAttribute:function(t, e, r) {
                var i = o.call(arguments, 2);
                return i[0] = e, this.visit.apply(this, i);
            }
        }), i.ToTextVisitor = i.Visitor.extend(), i.ToTextVisitor.def({
            visitNull:function(t) {
                return "";
            },
            visitPrimitive:function(t) {
                var e = String(t);
                return this.textMode === i.TEXTMODE.RCDATA ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;") :this.textMode === i.TEXTMODE.ATTRIBUTE ? e.replace(/&/g, "&amp;").replace(/"/g, "&quot;") :e;
            },
            visitArray:function(t) {
                for (var e = [], r = 0; r < t.length; r++) e.push(this.visit(t[r]));
                return e.join("");
            },
            visitComment:function(t) {
                throw new Error("Can't have a comment here");
            },
            visitCharRef:function(t) {
                return this.textMode === i.TEXTMODE.RCDATA || this.textMode === i.TEXTMODE.ATTRIBUTE ? t.html :t.str;
            },
            visitRaw:function(t) {
                return t.value;
            },
            visitTag:function(t) {
                return this.visit(this.toHTML(t));
            },
            visitObject:function(t) {
                throw new Error("Unexpected object in htmljs in toText: " + t);
            },
            toHTML:function(t) {
                return i.toHTML(t);
            }
        }), i.ToHTMLVisitor = i.Visitor.extend(), i.ToHTMLVisitor.def({
            visitNull:function(t) {
                return "";
            },
            visitPrimitive:function(t) {
                var e = String(t);
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;");
            },
            visitArray:function(t) {
                for (var e = [], r = 0; r < t.length; r++) e.push(this.visit(t[r]));
                return e.join("");
            },
            visitComment:function(t) {
                return "<!--" + t.sanitizedValue + "-->";
            },
            visitCharRef:function(t) {
                return t.html;
            },
            visitRaw:function(t) {
                return t.value;
            },
            visitTag:function(t) {
                var e = [], r = t.tagName, n = t.children, o = t.attrs;
                if (o) {
                    o = i.flattenAttributes(o);
                    for (var a in o) if ("value" === a && "textarea" === r) n = [ o[a], n ]; else {
                        var s = this.toText(o[a], i.TEXTMODE.ATTRIBUTE);
                        e.push(" " + a + '="' + s + '"');
                    }
                }
                var u = "<" + r + e.join("") + ">", l = [], f;
                if ("textarea" === r) {
                    for (var c = 0; c < n.length; c++) l.push(this.toText(n[c], i.TEXTMODE.RCDATA));
                    f = l.join(""), "\n" === f.slice(0, 1) && (f = "\n" + f);
                } else {
                    for (var c = 0; c < n.length; c++) l.push(this.visit(n[c]));
                    f = l.join("");
                }
                var h = u + f;
                return (n.length || !i.isVoidElement(r)) && (h += "</" + r + ">"), h;
            },
            visitObject:function(t) {
                throw new Error("Unexpected object in htmljs in toHTML: " + t);
            },
            toText:function(t, e) {
                return i.toText(t, e);
            }
        });
    }.call(this), function() {
        i.Tag = function() {}, i.Tag.prototype.tagName = "", i.Tag.prototype.attrs = null, 
        i.Tag.prototype.children = Object.freeze ? Object.freeze([]) :[], i.Tag.prototype.htmljsType = i.Tag.htmljsType = [ "Tag" ];
        var t = function(t) {
            var e = function() {
                var t = this instanceof i.Tag ? this :new e(), r = 0, n = arguments.length && arguments[0];
                if (n && "object" == typeof n) if (i.isConstructedObject(n)) {
                    if (n instanceof i.Attrs) {
                        var a = n.value;
                        1 === a.length ? t.attrs = a[0] :a.length > 1 && (t.attrs = a), r++;
                    }
                } else t.attrs = n, r++;
                return r < arguments.length && (t.children = o.call(arguments, r)), t;
            };
            return e.prototype = new i.Tag(), e.prototype.constructor = e, e.prototype.tagName = t, 
            e;
        }, e = i.Attrs = function() {
            var t = this instanceof e ? this :new e();
            return t.value = o.call(arguments), t;
        };
        i.getTag = function(e) {
            var r = i.getSymbolName(e);
            if (r === e) throw new Error("Use the lowercase or camelCase form of '" + e + "' here");
            return i[r] || (i[r] = t(e)), i[r];
        }, i.ensureTag = function(t) {
            i.getTag(t);
        }, i.isTagEnsured = function(t) {
            return i.isKnownElement(t);
        }, i.getSymbolName = function(t) {
            return t.toUpperCase().replace(/-/g, "_");
        }, i.knownElementNames = "a abbr acronym address applet area article aside audio b base basefont bdi bdo big blockquote body br button canvas caption center cite code col colgroup command data datagrid datalist dd del details dfn dir div dl dt em embed eventsource fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins isindex kbd keygen label legend li link main map mark menu meta meter nav noframes noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup table tbody td textarea tfoot th thead time title tr track tt u ul var video wbr".split(" "), 
        i.knownSVGElementNames = "altGlyph altGlyphDef altGlyphItem animate animateColor animateMotion animateTransform circle clipPath color-profile cursor defs desc ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignObject g glyph glyphRef hkern image line linearGradient marker mask metadata missing-glyph path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view vkern".split(" "), 
        i.knownElementNames = i.knownElementNames.concat(i.knownSVGElementNames), i.voidElementNames = "area base br col command embed hr img input keygen link meta param source track wbr".split(" ");
        var r = {
            yes:!0
        }, n = function(t) {
            for (var e = {}, i = 0; i < t.length; i++) e[t[i]] = r;
            return e;
        }, a = n(i.voidElementNames), s = n(i.knownElementNames), u = n(i.knownSVGElementNames);
        i.isKnownElement = function(t) {
            return s[t] === r;
        }, i.isKnownSVGElement = function(t) {
            return u[t] === r;
        }, i.isVoidElement = function(t) {
            return a[t] === r;
        };
        for (var l = 0; l < i.knownElementNames.length; l++) i.ensureTag(i.knownElementNames[l]);
        var f = i.CharRef = function(t) {
            if (!(this instanceof f)) return new f(t);
            if (!(t && t.html && t.str)) throw new Error("HTML.CharRef must be constructed with ({html:..., str:...})");
            this.html = t.html, this.str = t.str;
        };
        f.prototype.htmljsType = f.htmljsType = [ "CharRef" ];
        var c = i.Comment = function(t) {
            if (!(this instanceof c)) return new c(t);
            if ("string" != typeof t) throw new Error("HTML.Comment must be constructed with a string");
            this.value = t, this.sanitizedValue = t.replace(/^-|--+|-$/g, "");
        };
        c.prototype.htmljsType = c.htmljsType = [ "Comment" ];
        var h = i.Raw = function(t) {
            if (!(this instanceof h)) return new h(t);
            if ("string" != typeof t) throw new Error("HTML.Raw must be constructed with a string");
            this.value = t;
        };
        h.prototype.htmljsType = h.htmljsType = [ "Raw" ], i.isArray = function(t) {
            return t instanceof Array;
        }, i.isConstructedObject = function(t) {
            return t && "object" == typeof t && t.constructor !== Object && "function" == typeof t.constructor && t instanceof t.constructor;
        }, i.isNully = function(t) {
            if (null == t) return !0;
            if (i.isArray(t)) {
                for (var e = 0; e < t.length; e++) if (!i.isNully(t[e])) return !1;
                return !0;
            }
            return !1;
        }, i.isValidAttributeName = function(t) {
            return /^[:_A-Za-z][:_A-Za-z0-9.\-]*/.test(t);
        }, i.flattenAttributes = function(t) {
            if (!t) return t;
            var e = i.isArray(t);
            if (e && 0 === t.length) return null;
            for (var r = {}, n = 0, o = e ? t.length :1; o > n; n++) {
                var a = e ? t[n] :t;
                if ("object" != typeof a || i.isConstructedObject(a)) throw new Error("Expected plain JS object as attrs, found: " + a);
                for (var s in a) {
                    if (!i.isValidAttributeName(s)) throw new Error("Illegal HTML attribute name: " + s);
                    var u = a[s];
                    i.isNully(u) || (r[s] = u);
                }
            }
            return r;
        }, i.toHTML = function(t) {
            return new i.ToHTMLVisitor().visit(t);
        }, i.TEXTMODE = {
            STRING:1,
            RCDATA:2,
            ATTRIBUTE:3
        }, i.toText = function(t, e) {
            if (!e) throw new Error("textMode required for HTML.toText");
            if (e !== i.TEXTMODE.STRING && e !== i.TEXTMODE.RCDATA && e !== i.TEXTMODE.ATTRIBUTE) throw new Error("Unknown textMode: " + e);
            var r = new i.ToTextVisitor({
                textMode:e
            });
            return r.visit(t);
        };
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.htmljs = {
        HTML:i
    };
}();

!function() {
    var e = Package.meteor.Meteor, n = Package.tracker.Tracker, r = Package.tracker.Deps, t = Package["mongo-id"].MongoID, i = Package["diff-sequence"].DiffSequence, o = Package.underscore._, a = Package.random.Random, c, f, u, d;
    (function() {
        var e = function() {
            c._suppressWarnings ? c._suppressWarnings-- :("undefined" != typeof console && console.warn && console.warn.apply(console, arguments), 
            c._loggedWarnings++);
        }, r = t.idStringify, i = t.idParse;
        c = {
            _suppressWarnings:0,
            _loggedWarnings:0,
            observe:function(e, r) {
                var t = null, i = null, a = [], c = n.autorun(function() {
                    var c = e();
                    n.nonreactive(function() {
                        var e;
                        if (i && (a = o.map(t.fetch(), function(e) {
                            return {
                                _id:e._id,
                                item:e
                            };
                        }), i.stop(), i = null), c) if (c instanceof Array) e = u(a, c, r); else {
                            if (!v(c)) throw s();
                            var n = d(a, c, r);
                            e = n[0], i = n[1];
                        } else e = f(a, r);
                        p(a, e, r), t = c, a = e;
                    });
                });
                return {
                    stop:function() {
                        c.stop(), i && i.stop();
                    }
                };
            },
            fetch:function(e) {
                if (e) {
                    if (e instanceof Array) return e;
                    if (v(e)) return e.fetch();
                    throw s();
                }
                return [];
            }
        };
        var s = function() {
            return new Error("{{#each}} currently only accepts arrays, cursors or falsey values.");
        }, v = function(e) {
            return e && o.isObject(e) && o.isFunction(e.observe) && o.isFunction(e.fetch);
        }, p = function(e, n, t) {
            var a = Package["diff-sequence"].DiffSequence.diffQueryOrderedChanges, c = [], f = [], u = {}, d = {}, s = {}, v = e.length;
            o.each(n, function(e, n) {
                f.push({
                    _id:e._id
                }), d[r(e._id)] = n;
            }), o.each(e, function(e, n) {
                c.push({
                    _id:e._id
                }), u[r(e._id)] = n, s[r(e._id)] = n;
            }), a(c, f, {
                addedBefore:function(e, i, a) {
                    var c = a ? s[r(a)] :v;
                    a && o.each(s, function(e, n) {
                        e >= c && s[n]++;
                    }), v++, s[r(e)] = c, t.addedAt(e, n[d[r(e)]].item, c, a);
                },
                movedBefore:function(e, i) {
                    if (e !== i) {
                        var a = s[r(e)], c = i ? s[r(i)] :v;
                        c > a && c--, o.each(s, function(e, n) {
                            e > a && c > e ? s[n]-- :e >= c && a > e && s[n]++;
                        }), s[r(e)] = c, t.movedTo(e, n[d[r(e)]].item, a, c, i);
                    }
                },
                removed:function(n) {
                    var i = s[r(n)];
                    o.each(s, function(e, n) {
                        e >= i && s[n]--;
                    }), delete s[r(n)], v--, t.removedAt(n, e[u[r(n)]].item, i);
                }
            }), o.each(d, function(r, a) {
                var c = i(a);
                if (o.has(u, a)) {
                    var f = n[r].item, d = e[u[a]].item;
                    ("object" == typeof f || f !== d) && t.changedAt(c, f, d, r);
                }
            });
        };
        f = function(e, n) {
            return [];
        }, u = function(n, t, i) {
            var c = {}, f = o.map(t, function(n, i) {
                var f;
                if ("string" == typeof n) f = "-" + n; else if ("number" == typeof n || "boolean" == typeof n || void 0 === n) f = n; else {
                    if ("object" != typeof n) throw new Error("{{#each}} doesn't support arrays with elements of type " + typeof n);
                    f = n && o.has(n, "_id") ? n._id :i;
                }
                var u = r(f);
                return c[u] ? ("object" == typeof n && "_id" in n && e("duplicate id " + f + " in", t), 
                f = a.id()) :c[u] = !0, {
                    _id:f,
                    item:n
                };
            });
            return f;
        }, d = function(e, n, r) {
            var t = !0, i = [], o = n.observe({
                addedAt:function(e, n, o) {
                    if (t) {
                        if (null !== o) throw new Error("Expected initial data from observe in order");
                        i.push({
                            _id:e._id,
                            item:e
                        });
                    } else r.addedAt(e._id, e, n, o);
                },
                changedAt:function(e, n, t) {
                    r.changedAt(e._id, e, n, t);
                },
                removedAt:function(e, n) {
                    r.removedAt(e._id, e, n);
                },
                movedTo:function(e, n, t, i) {
                    r.movedTo(e._id, e, n, t, i);
                }
            });
            return t = !1, [ i, o ];
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["observe-sequence"] = {
        ObserveSequence:c
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.tracker.Tracker, n = Package.tracker.Deps, r;
    (function() {
        r = function(e, n) {
            return this instanceof r ? (this.curValue = e, this.equalsFunc = n, void (this.dep = new t.Dependency())) :new r(e, n);
        }, r._isEqual = function(e, t) {
            var n = e, r = t;
            return n !== r ? !1 :!n || "number" == typeof n || "boolean" == typeof n || "string" == typeof n;
        }, r.prototype.get = function() {
            return t.active && this.dep.depend(), this.curValue;
        }, r.prototype.set = function(e) {
            var t = this.curValue;
            (this.equalsFunc || r._isEqual)(t, e) || (this.curValue = e, this.dep.changed());
        }, r.prototype.toString = function() {
            return "ReactiveVar{" + this.get() + "}";
        }, r.prototype._numListeners = function() {
            var e = 0;
            for (var t in this.dep._dependentsById) e++;
            return e;
        };
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["reactive-var"] = {
        ReactiveVar:r
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.jquery.$, n = Package.jquery.jQuery, r = Package.tracker.Tracker, a = Package.tracker.Deps, i = Package.check.check, o = Package.check.Match, s = Package.underscore._, u = Package.htmljs.HTML, l = Package["observe-sequence"].ObserveSequence, c = Package["reactive-var"].ReactiveVar, d, p, h, f, m, w;
    (function() {
        d = {}, d._escape = function() {
            var e = {
                "<":"&lt;",
                ">":"&gt;",
                '"':"&quot;",
                "'":"&#x27;",
                "`":"&#x60;",
                "&":"&amp;"
            }, t = function(t) {
                return e[t];
            };
            return function(e) {
                return e.replace(/[&<>"'`]/g, t);
            };
        }(), d._warn = function(e) {
            e = "Warning: " + e, "undefined" != typeof console && console.warn && console.warn(e);
        };
    }).call(this), function() {
        var e = {};
        d._DOMBackend = e;
        var t = "undefined" != typeof n ? n :"undefined" != typeof Package ? Package.jquery && Package.jquery.jQuery :null;
        if (!t) throw new Error("jQuery not found");
        e._$jq = t, e.parseHTML = function(e) {
            return t.parseHTML(e) || [];
        }, e.Events = {
            delegateEvents:function(e, n, r, a) {
                t(e).on(n, r, a);
            },
            undelegateEvents:function(e, n, r) {
                t(e).off(n, "**", r);
            },
            bindEventCapturer:function(n, r, a, i) {
                var o = t(n), s = function(e) {
                    e = t.event.fix(e), e.currentTarget = e.target;
                    var r = t(e.currentTarget);
                    r.is(o.find(a)) && i.call(n, e);
                };
                i._meteorui_wrapper = s, r = e.Events.parseEventType(r), n.addEventListener(r, s, !0);
            },
            unbindEventCapturer:function(t, n, r) {
                n = e.Events.parseEventType(n), t.removeEventListener(n, r._meteorui_wrapper, !0);
            },
            parseEventType:function(e) {
                var t = e.indexOf(".");
                return t >= 0 ? e.slice(0, t) :e;
            }
        };
        var r = function() {}, a = function(e) {
            this.next = this, this.prev = this, this.func = e;
        };
        a.prototype.linkBefore = function(e) {
            this.prev = e.prev, this.next = e, e.prev.next = this, e.prev = this;
        }, a.prototype.unlink = function() {
            this.prev.next = this.next, this.next.prev = this.prev;
        }, a.prototype.go = function() {
            var e = this.func;
            e && e();
        }, a.prototype.stop = a.prototype.unlink, e.Teardown = {
            _JQUERY_EVENT_NAME:"blaze_teardown_watcher",
            _CB_PROP:"$blaze_teardown_callbacks",
            onElementTeardown:function(n, i) {
                var o = new a(i), s = e.Teardown._CB_PROP;
                return n[s] || (n[s] = new a(), t(n).on(e.Teardown._JQUERY_EVENT_NAME, r)), o.linkBefore(n[s]), 
                o;
            },
            tearDownElement:function(e) {
                for (var n = [], r = e.getElementsByTagName("*"), a = 0; a < r.length; a++) n.push(r[a]);
                n.push(e), t.cleanData(n);
            }
        }, t.event.special[e.Teardown._JQUERY_EVENT_NAME] = {
            setup:function() {},
            teardown:function() {
                var t = this, n = t[e.Teardown._CB_PROP];
                if (n) {
                    for (var r = n.next; r !== n; ) r.go(), r = r.next;
                    n.go(), t[e.Teardown._CB_PROP] = null;
                }
            }
        }, e.findBySelector = function(e, n) {
            return t(e, n);
        };
    }.call(this), function() {
        var e = Object.freeze ? Object.freeze([]) :[];
        d._DOMRange = function(n) {
            if (!(this instanceof t)) return new t(n);
            var r = n || e;
            if (!r || "number" != typeof r.length) throw new Error("Expected array");
            for (var a = 0; a < r.length; a++) this._memberIn(r[a]);
            this.members = r, this.emptyRangePlaceholder = null, this.attached = !1, this.parentElement = null, 
            this.parentRange = null, this.attachedCallbacks = e;
        };
        var t = d._DOMRange;
        t._USE_COMMENT_PLACEHOLDERS = function() {
            var e = !1, t = document.createTextNode("");
            try {
                t.someProp = !0;
            } catch (n) {
                e = !0;
            }
            return e;
        }(), t._insert = function(e, n, r, a) {
            var i = e;
            i instanceof t ? i.attach(n, r, a) :a ? t._moveNodeWithHooks(i, n, r) :t._insertNodeWithHooks(i, n, r);
        }, t._remove = function(e) {
            var n = e;
            n instanceof t ? n.detach() :t._removeNodeWithHooks(n);
        }, t._removeNodeWithHooks = function(e) {
            e.parentNode && (1 === e.nodeType && e.parentNode._uihooks && e.parentNode._uihooks.removeElement ? e.parentNode._uihooks.removeElement(e) :e.parentNode.removeChild(e));
        }, t._insertNodeWithHooks = function(e, t, n) {
            n = n || null, 1 === e.nodeType && t._uihooks && t._uihooks.insertElement ? t._uihooks.insertElement(e, n) :t.insertBefore(e, n);
        }, t._moveNodeWithHooks = function(e, t, n) {
            e.parentNode === t && (n = n || null, 1 === e.nodeType && t._uihooks && t._uihooks.moveElement ? t._uihooks.moveElement(e, n) :t.insertBefore(e, n));
        }, t.forElement = function(e) {
            if (1 !== e.nodeType) throw new Error("Expected element, found: " + e);
            for (var t = null; e && !t; ) t = e.$blaze_range || null, t || (e = e.parentNode);
            return t;
        }, t.prototype.attach = function(e, n, r, a) {
            if ((r || a) && (this.parentElement !== e || !this.attached)) throw new Error("Can only move or replace an attached DOMRange, and only under the same parent element");
            var i = this.members;
            if (i.length) {
                this.emptyRangePlaceholder = null;
                for (var o = 0; o < i.length; o++) t._insert(i[o], e, n, r);
            } else {
                var s = t._USE_COMMENT_PLACEHOLDERS ? document.createComment("") :document.createTextNode("");
                this.emptyRangePlaceholder = s, e.insertBefore(s, n || null);
            }
            if (this.attached = !0, this.parentElement = e, !r && !a) for (var o = 0; o < this.attachedCallbacks.length; o++) {
                var u = this.attachedCallbacks[o];
                u.attached && u.attached(this, e);
            }
        }, t.prototype.setMembers = function(e) {
            var t = e;
            if (!t || "number" != typeof t.length) throw new Error("Expected array");
            for (var n = this.members, r = 0; r < n.length; r++) this._memberOut(n[r]);
            for (var r = 0; r < t.length; r++) this._memberIn(t[r]);
            if (this.attached) {
                if (t.length || n.length) {
                    var a = this.lastNode().nextSibling, i = this.parentElement;
                    this.detach(!0), this.members = t, this.attach(i, a, !1, !0);
                }
            } else this.members = t;
        }, t.prototype.firstNode = function() {
            if (!this.attached) throw new Error("Must be attached");
            if (!this.members.length) return this.emptyRangePlaceholder;
            var e = this.members[0];
            return e instanceof t ? e.firstNode() :e;
        }, t.prototype.lastNode = function() {
            if (!this.attached) throw new Error("Must be attached");
            if (!this.members.length) return this.emptyRangePlaceholder;
            var e = this.members[this.members.length - 1];
            return e instanceof t ? e.lastNode() :e;
        }, t.prototype.detach = function(e) {
            if (!this.attached) throw new Error("Must be attached");
            var n = this.parentElement, r = this.members;
            if (r.length) for (var a = 0; a < r.length; a++) t._remove(r[a]); else {
                var i = this.emptyRangePlaceholder;
                this.parentElement.removeChild(i), this.emptyRangePlaceholder = null;
            }
            if (!e) {
                this.attached = !1, this.parentElement = null;
                for (var a = 0; a < this.attachedCallbacks.length; a++) {
                    var o = this.attachedCallbacks[a];
                    o.detached && o.detached(this, n);
                }
            }
        }, t.prototype.addMember = function(e, n, r) {
            var a = this.members;
            if (!(n >= 0 && n <= a.length)) throw new Error("Bad index in range.addMember: " + n);
            if (r || this._memberIn(e), this.attached) if (0 === a.length) this.setMembers([ e ]); else {
                var i;
                if (n === a.length) i = this.lastNode().nextSibling; else {
                    var o = a[n];
                    i = o instanceof t ? o.firstNode() :o;
                }
                a.splice(n, 0, e), t._insert(e, this.parentElement, i, r);
            } else a.splice(n, 0, e);
        }, t.prototype.removeMember = function(n, r) {
            var a = this.members;
            if (!(n >= 0 && n < a.length)) throw new Error("Bad index in range.removeMember: " + n);
            if (r) a.splice(n, 1); else {
                var i = a[n];
                this._memberOut(i), 1 === a.length ? this.setMembers(e) :(a.splice(n, 1), this.attached && t._remove(i));
            }
        }, t.prototype.moveMember = function(e, t) {
            var n = this.members[e];
            this.removeMember(e, !0), this.addMember(n, t, !0);
        }, t.prototype.getMember = function(e) {
            var t = this.members;
            if (!(e >= 0 && e < t.length)) throw new Error("Bad index in range.getMember: " + e);
            return this.members[e];
        }, t.prototype._memberIn = function(e) {
            e instanceof t ? e.parentRange = this :1 === e.nodeType && (e.$blaze_range = this);
        }, t._destroy = function(e, n) {
            e instanceof t ? e.view && d._destroyView(e.view, n) :n || 1 !== e.nodeType || e.$blaze_range && (d._destroyNode(e), 
            e.$blaze_range = null);
        }, t.prototype._memberOut = t._destroy, t.prototype.destroyMembers = function(e) {
            for (var t = this.members, n = 0; n < t.length; n++) this._memberOut(t[n], e);
        }, t.prototype.destroy = function(e) {
            t._destroy(this, e);
        }, t.prototype.containsElement = function(e) {
            if (!this.attached) throw new Error("Must be attached");
            if (!d._elementContains(this.parentElement, e)) return !1;
            for (;e.parentNode !== this.parentElement; ) e = e.parentNode;
            for (var t = e.$blaze_range; t && t !== this; ) t = t.parentRange;
            return t === this;
        }, t.prototype.containsRange = function(e) {
            if (!this.attached) throw new Error("Must be attached");
            if (!e.attached) return !1;
            if (e.parentElement !== this.parentElement) return this.containsElement(e.parentElement);
            if (e === this) return !1;
            for (;e && e !== this; ) e = e.parentRange;
            return e === this;
        }, t.prototype.onAttached = function(e) {
            this.onAttachedDetached({
                attached:e
            });
        }, t.prototype.onAttachedDetached = function(t) {
            this.attachedCallbacks === e && (this.attachedCallbacks = []), this.attachedCallbacks.push(t);
        }, t.prototype.$ = function(e) {
            var t = this, n = this.parentElement;
            if (!n) throw new Error("Can't select in removed DomRange");
            if (11 === n.nodeType) throw new Error("Can't use $ on an offscreen range");
            var r = d._DOMBackend.findBySelector(e, n), a = function(e) {
                return "number" == typeof e && (e = this), t.containsElement(e);
            };
            if (r.filter) r = r.filter(a); else {
                for (var i = [], o = 0; o < r.length; o++) {
                    var s = r[o];
                    a(s) && i.push(s);
                }
                r = i;
            }
            return r;
        }, d._elementContains = function(e, t) {
            return 1 !== e.nodeType ? !1 :e === t ? !1 :e.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) :(t = t.parentNode, 
            t && 1 === t.nodeType ? e === t ? !0 :e.contains(t) :!1);
        };
    }.call(this), function() {
        var e = d._EventSupport = {}, t = d._DOMBackend, n = e.eventsToDelegate = {
            blur:1,
            change:1,
            click:1,
            focus:1,
            focusin:1,
            focusout:1,
            reset:1,
            submit:1
        }, r = e.EVENT_MODE = {
            TBD:0,
            BUBBLING:1,
            CAPTURING:2
        }, a = 1, i = function(e, i, o, u, l) {
            this.elem = e, this.type = i, this.selector = o, this.handler = u, this.recipient = l, 
            this.id = a++, this.mode = r.TBD, this.delegatedHandler = function(e) {
                return function(t) {
                    return e.selector || t.currentTarget === t.target ? e.handler.apply(e.recipient, arguments) :void 0;
                };
            }(this);
            var c = e.addEventListener && !s.has(n, t.Events.parseEventType(i));
            c ? this.capturingHandler = function(e) {
                return function(n) {
                    if (e.mode === r.TBD) {
                        if (n.bubbles) return e.mode = r.BUBBLING, void t.Events.unbindEventCapturer(e.elem, e.type, e.capturingHandler);
                        e.mode = r.CAPTURING, t.Events.undelegateEvents(e.elem, e.type, e.delegatedHandler);
                    }
                    e.delegatedHandler(n);
                };
            }(this) :this.mode = r.BUBBLING;
        };
        e.HandlerRec = i, i.prototype.bind = function() {
            this.mode !== r.BUBBLING && t.Events.bindEventCapturer(this.elem, this.type, this.selector || "*", this.capturingHandler), 
            this.mode !== r.CAPTURING && t.Events.delegateEvents(this.elem, this.type, this.selector || "*", this.delegatedHandler);
        }, i.prototype.unbind = function() {
            this.mode !== r.BUBBLING && t.Events.unbindEventCapturer(this.elem, this.type, this.capturingHandler), 
            this.mode !== r.CAPTURING && t.Events.undelegateEvents(this.elem, this.type, this.delegatedHandler);
        }, e.listen = function(e, t, n, r, a, o) {
            try {
                e = e;
            } finally {}
            var s = [];
            t.replace(/[^ /]+/g, function(e) {
                s.push(e);
            });
            for (var u = [], l = 0, c = s.length; c > l; l++) {
                var d = s[l], p = e.$blaze_events;
                p || (p = e.$blaze_events = {});
                var h = p[d];
                h || (h = p[d] = {}, h.handlers = []);
                var f = h.handlers, m = new i(e, d, n, r, a);
                if (u.push(m), m.bind(), f.push(m), o) for (var w = o(a); w; w = o(w)) for (var v = 0, _ = f.length; _ > v; v++) {
                    var g = f[v];
                    g.recipient === w && (g.unbind(), g.bind(), f.splice(v, 1), f.push(g), v--, _--);
                }
            }
            return {
                stop:function() {
                    var t = e.$blaze_events;
                    if (t) {
                        for (var n = 0; n < u.length; n++) {
                            var r = u[n], a = t[r.type];
                            if (a) for (var i = a.handlers, o = i.length - 1; o >= 0; o--) i[o] === r && (r.unbind(), 
                            i.splice(o, 1));
                        }
                        u.length = 0;
                    }
                }
            };
        };
    }.call(this), function() {
        var n = !1;
        d._allowJavascriptUrls = function() {
            n = !0;
        }, d._javascriptUrlsAllowed = function() {
            return n;
        }, p = function(e, t) {
            this.name = e, this.value = t;
        }, d._AttributeHandler = p, p.prototype.update = function(e, t, n) {
            null === n ? null !== t && e.removeAttribute(this.name) :e.setAttribute(this.name, n);
        }, p.extend = function(e) {
            var t = this, n = function r() {
                p.apply(this, arguments);
            };
            return n.prototype = new t(), n.extend = t.extend, e && s.extend(n.prototype, e), 
            n;
        };
        var r = p.extend({
            update:function(e, t, n) {
                if (!this.getCurrentValue || !this.setValue || !this.parseValue) throw new Error("Missing methods in subclass of 'DiffingAttributeHandler'");
                var r = t ? this.parseValue(t) :{}, a = n ? this.parseValue(n) :{}, i = this.getCurrentValue(e), o = i ? this.parseValue(i) :{};
                s.each(s.keys(r), function(e) {
                    e in a || delete o[e];
                }), s.each(s.keys(a), function(e) {
                    o[e] = a[e];
                }), this.setValue(e, s.values(o).join(" "));
            }
        }), a = r.extend({
            getCurrentValue:function(e) {
                return e.className;
            },
            setValue:function(e, t) {
                e.className = t;
            },
            parseValue:function(e) {
                var t = {};
                return s.each(e.split(" "), function(e) {
                    e && (t[e] = e);
                }), t;
            }
        }), i = a.extend({
            getCurrentValue:function(e) {
                return e.className.baseVal;
            },
            setValue:function(e, t) {
                e.setAttribute("class", t);
            }
        }), o = r.extend({
            getCurrentValue:function(e) {
                return e.getAttribute("style");
            },
            setValue:function(e, t) {
                "" === t ? e.removeAttribute("style") :e.setAttribute("style", t);
            },
            parseValue:function(e) {
                for (var n = {}, r = /(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*(?:\'(?:\\\'|.)*?\'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+[;\s]*/g, a = r.exec(e); a; ) n[" " + a[1]] = a[0].trim ? a[0].trim() :t.trim(a[0]), 
                a = r.exec(e);
                return n;
            }
        }), u = p.extend({
            update:function(e, t, n) {
                var r = this.name;
                null == n ? null != t && (e[r] = !1) :e[r] = !0;
            }
        }), l = p.extend({
            update:function(e, t, n) {
                var r = this.name;
                n !== e[r] && (e[r] = n);
            }
        }), c = p.extend({
            update:function(e, t, n) {
                var r = "http://www.w3.org/1999/xlink";
                null === n ? null !== t && e.removeAttributeNS(r, this.name) :e.setAttributeNS(r, this.name, this.value);
            }
        }), m = function(e) {
            return "ownerSVGElement" in e;
        }, w = function(e, t) {
            var n = {
                FORM:[ "action" ],
                BODY:[ "background" ],
                BLOCKQUOTE:[ "cite" ],
                Q:[ "cite" ],
                DEL:[ "cite" ],
                INS:[ "cite" ],
                OBJECT:[ "classid", "codebase", "data", "usemap" ],
                APPLET:[ "codebase" ],
                A:[ "href" ],
                AREA:[ "href" ],
                LINK:[ "href" ],
                BASE:[ "href" ],
                IMG:[ "longdesc", "src", "usemap" ],
                FRAME:[ "longdesc", "src" ],
                IFRAME:[ "longdesc", "src" ],
                HEAD:[ "profile" ],
                SCRIPT:[ "src" ],
                INPUT:[ "src", "usemap", "formaction" ],
                BUTTON:[ "formaction" ],
                BASE:[ "href" ],
                MENUITEM:[ "icon" ],
                HTML:[ "manifest" ],
                VIDEO:[ "poster" ]
            };
            if ("itemid" === t) return !0;
            var r = n[e] || [];
            return s.contains(r, t);
        };
        if (e.isClient) var v = document.createElement("A");
        var _ = function(t) {
            if (e.isClient) return v.href = t, (v.protocol || "").toLowerCase();
            throw new Error("getUrlProtocol not implemented on the server");
        }, g = p.prototype.update, y = p.extend({
            update:function(e, t, n) {
                var r = this, a = arguments;
                if (d._javascriptUrlsAllowed()) g.apply(r, a); else {
                    var i = "javascript:" === _(n);
                    i ? (d._warn("URLs that use the 'javascript:' protocol are not allowed in URL attribute values. Call Blaze._allowJavascriptUrls() to enable them."), 
                    g.apply(r, [ e, t, null ])) :g.apply(r, a);
                }
            }
        });
        h = function(e, t, n) {
            return "class" === t ? m(e) ? new i(t, n) :new a(t, n) :"style" === t ? new o(t, n) :"OPTION" === e.tagName && "selected" === t || "INPUT" === e.tagName && "checked" === t ? new u(t, n) :"TEXTAREA" !== e.tagName && "INPUT" !== e.tagName || "value" !== t ? "xlink:" === t.substring(0, 6) ? new c(t.substring(6), n) :w(e.tagName, t) ? new y(t, n) :new p(t, n) :new l(t, n);
        }, f = function(e) {
            this.elem = e, this.handlers = {};
        }, f.prototype.update = function(e) {
            var t = this.elem, n = this.handlers;
            for (var r in n) if (!s.has(e, r)) {
                var a = n[r], i = a.value;
                a.value = null, a.update(t, i, null), delete n[r];
            }
            for (var r in e) {
                var a = null, i, o = e[r];
                s.has(n, r) ? (a = n[r], i = a.value) :null !== o && (a = h(t, r, o), n[r] = a, 
                i = null), i !== o && (a.value = o, a.update(t, i, o), null === o && delete n[r]);
            }
        };
    }.call(this), function() {
        d._materializeDOM = function(t, n, r, a) {
            var i = a || [];
            if (e(t, n, r, i), !a) for (;i.length; ) {
                var o = i.pop();
                o();
            }
            return n;
        };
        var e = function(e, n, r, a) {
            if (null != e) {
                switch (typeof e) {
                  case "string":
                  case "boolean":
                  case "number":
                    return void n.push(document.createTextNode(String(e)));

                  case "object":
                    if (e.htmljsType) switch (e.htmljsType) {
                      case u.Tag.htmljsType:
                        return void n.push(t(e, r, a));

                      case u.CharRef.htmljsType:
                        return void n.push(document.createTextNode(e.str));

                      case u.Comment.htmljsType:
                        return void n.push(document.createComment(e.sanitizedValue));

                      case u.Raw.htmljsType:
                        for (var i = d._DOMBackend.parseHTML(e.value), o = 0; o < i.length; o++) n.push(i[o]);
                        return;
                    } else {
                        if (u.isArray(e)) {
                            for (var o = e.length - 1; o >= 0; o--) a.push(s.bind(d._materializeDOM, null, e[o], n, r, a));
                            return;
                        }
                        if (e instanceof d.Template && (e = e.constructView()), e instanceof d.View) return void d._materializeView(e, r, a, n);
                    }
                }
                throw new Error("Unexpected object in htmljs: " + e);
            }
        }, t = function(e, t, a) {
            var i = e.tagName, o;
            o = (u.isKnownSVGElement(i) || n(e)) && document.createElementNS ? document.createElementNS("http://www.w3.org/2000/svg", i) :document.createElement(i);
            var l = e.attrs, c = e.children;
            if ("textarea" === i && e.children.length && !(l && "value" in l)) {
                if ("function" == typeof l || u.isArray(l)) throw new Error("Can't have reactive children of TEXTAREA node; use the 'value' attribute instead.");
                l = s.extend({}, l || null), l.value = d._expand(c, t), c = [];
            }
            if (l) {
                var p = new f(o), h = function() {
                    var e = d._expandAttributes(l, t), n = u.flattenAttributes(e), r = {};
                    for (var a in n) r[a] = d._toText(n[a], t, u.TEXTMODE.STRING);
                    p.update(r);
                }, m;
                m = t ? t.autorun(h, void 0, "updater") :r.nonreactive(function() {
                    return r.autorun(function() {
                        r._withCurrentView(t, h);
                    });
                }), d._DOMBackend.Teardown.onElementTeardown(o, function v() {
                    m.stop();
                });
            }
            if (c.length) {
                var w = [];
                a.push(function() {
                    for (var e = 0; e < w.length; e++) {
                        var t = w[e];
                        t instanceof d._DOMRange ? t.attach(o) :o.appendChild(t);
                    }
                }), a.push(s.bind(d._materializeDOM, null, c, w, t, a));
            }
            return o;
        }, n = function(e) {
            return "a" === e.tagName && e.attrs && void 0 !== e.attrs["xlink:href"];
        };
    }.call(this), function() {
        var t;
        d._throwNextException = !1, d._reportException = function(n, r) {
            if (d._throwNextException) throw d._throwNextException = !1, n;
            t || (t = function() {
                return "undefined" != typeof e ? e._debug :"undefined" != typeof console && console.log ? console.log :function() {};
            }), t()(r || "Exception caught in template:", n.stack || n.message || n);
        }, d._wrapCatchingExceptions = function(e, t) {
            return "function" != typeof e ? e :function() {
                try {
                    return e.apply(this, arguments);
                } catch (n) {
                    d._reportException(n, "Exception in " + t + ":");
                }
            };
        };
    }.call(this), function() {
        d.View = function(e, t) {
            return this instanceof d.View ? ("function" == typeof e && (t = e, e = ""), this.name = e, 
            this._render = t, this._callbacks = {
                created:null,
                rendered:null,
                destroyed:null
            }, this.isCreated = !1, this._isCreatedForExpansion = !1, this.isRendered = !1, 
            this._isAttached = !1, this.isDestroyed = !1, this._isInRender = !1, this.parentView = null, 
            this._domrange = null, this._hasGeneratedParent = !1, this._scopeBindings = {}, 
            void (this.renderCount = 0)) :new d.View(e, t);
        }, d.View.prototype._render = function() {
            return null;
        }, d.View.prototype.onViewCreated = function(e) {
            this._callbacks.created = this._callbacks.created || [], this._callbacks.created.push(e);
        }, d.View.prototype._onViewRendered = function(e) {
            this._callbacks.rendered = this._callbacks.rendered || [], this._callbacks.rendered.push(e);
        }, d.View.prototype.onViewReady = function(e) {
            var t = this, n = function() {
                r.afterFlush(function() {
                    t.isDestroyed || d._withCurrentView(t, function() {
                        e.call(t);
                    });
                });
            };
            t._onViewRendered(function a() {
                t.isDestroyed || (t._domrange.attached ? n() :t._domrange.onAttached(n));
            });
        }, d.View.prototype.onViewDestroyed = function(e) {
            this._callbacks.destroyed = this._callbacks.destroyed || [], this._callbacks.destroyed.push(e);
        }, d.View.prototype.removeViewDestroyedListener = function(e) {
            var t = this._callbacks.destroyed;
            if (t) {
                var n = s.lastIndexOf(t, e);
                -1 !== n && (t[n] = null);
            }
        }, d.View.prototype.autorun = function(e, t, n) {
            var a = this;
            if (!a.isCreated) throw new Error("View#autorun must be called from the created callback at the earliest");
            if (this._isInRender) throw new Error("Can't call View#autorun from inside render(); try calling it from the created or rendered callback");
            if (r.active) throw new Error("Can't call View#autorun from a Tracker Computation; try calling it from the created or rendered callback");
            var i = d.Template._currentTemplateInstanceFunc, o = function l(n) {
                return d._withCurrentView(t || a, function() {
                    return d.Template._withTemplateInstanceFunc(i, function() {
                        return e.call(a, n);
                    });
                });
            };
            o.displayName = (a.name || "anonymous") + ":" + (n || "anonymous");
            var s = r.autorun(o), u = function() {
                s.stop();
            };
            return a.onViewDestroyed(u), s.onStop(function() {
                a.removeViewDestroyedListener(u);
            }), s;
        }, d.View.prototype._errorIfShouldntCallSubscribe = function() {
            var e = this;
            if (!e.isCreated) throw new Error("View#subscribe must be called from the created callback at the earliest");
            if (e._isInRender) throw new Error("Can't call View#subscribe from inside render(); try calling it from the created or rendered callback");
            if (e.isDestroyed) throw new Error("Can't call View#subscribe from inside the destroyed callback, try calling it inside created or rendered.");
        }, d.View.prototype.subscribe = function(t, n) {
            var r = this;
            n = n || {}, r._errorIfShouldntCallSubscribe();
            var a;
            return a = n.connection ? n.connection.subscribe.apply(n.connection, t) :e.subscribe.apply(e, t), 
            r.onViewDestroyed(function() {
                a.stop();
            }), a;
        }, d.View.prototype.firstNode = function() {
            if (!this._isAttached) throw new Error("View must be attached before accessing its DOM");
            return this._domrange.firstNode();
        }, d.View.prototype.lastNode = function() {
            if (!this._isAttached) throw new Error("View must be attached before accessing its DOM");
            return this._domrange.lastNode();
        }, d._fireCallbacks = function(e, t) {
            d._withCurrentView(e, function() {
                r.nonreactive(function n() {
                    for (var n = e._callbacks[t], r = 0, a = n && n.length; a > r; r++) n[r] && n[r].call(e);
                });
            });
        }, d._createView = function(e, t, n) {
            if (e.isCreated) throw new Error("Can't render the same View twice");
            e.parentView = t || null, e.isCreated = !0, n && (e._isCreatedForExpansion = !0), 
            d._fireCallbacks(e, "created");
        };
        var t = function(e, t) {
            var n = new d._DOMRange(t);
            e._domrange = n, n.view = e, e.isRendered = !0, d._fireCallbacks(e, "rendered");
            var r = null;
            return n.onAttached(function a(t, n) {
                e._isAttached = !0, r = d._DOMBackend.Teardown.onElementTeardown(n, function a() {
                    d._destroyView(e, !0);
                });
            }), e.onViewDestroyed(function() {
                r && r.stop(), r = null;
            }), n;
        };
        d._materializeView = function(e, n, a, i) {
            d._createView(e, n);
            var o, u;
            return r.nonreactive(function() {
                e.autorun(function l(t) {
                    e.renderCount++, e._isInRender = !0;
                    var n = e._render();
                    e._isInRender = !1, t.firstRun || r.nonreactive(function a() {
                        var t = d._materializeDOM(n, [], e);
                        d._isContentEqual(u, n) || (o.setMembers(t), d._fireCallbacks(e, "rendered"));
                    }), u = n, r.onInvalidate(function() {
                        o && o.destroyMembers();
                    });
                }, void 0, "materialize");
                var n;
                a ? (n = [], a.push(function() {
                    o = t(e, n), n = null, i.push(o);
                }), a.push(s.bind(d._materializeDOM, null, u, n, e, a))) :(n = d._materializeDOM(u, [], e), 
                o = t(e, n), n = null);
            }), a ? null :o;
        }, d._expandView = function(e, t) {
            d._createView(e, t, !0), e._isInRender = !0;
            var n = d._withCurrentView(e, function() {
                return e._render();
            });
            e._isInRender = !1;
            var a = d._expand(n, e);
            return r.active ? r.onInvalidate(function() {
                d._destroyView(e);
            }) :d._destroyView(e), a;
        }, d._HTMLJSExpander = u.TransformingVisitor.extend(), d._HTMLJSExpander.def({
            visitObject:function(e) {
                return e instanceof d.Template && (e = e.constructView()), e instanceof d.View ? d._expandView(e, this.parentView) :u.TransformingVisitor.prototype.visitObject.call(this, e);
            },
            visitAttributes:function(e) {
                return "function" == typeof e && (e = d._withCurrentView(this.parentView, e)), u.TransformingVisitor.prototype.visitAttributes.call(this, e);
            },
            visitAttribute:function(e, t, n) {
                return "function" == typeof t && (t = d._withCurrentView(this.parentView, t)), u.TransformingVisitor.prototype.visitAttribute.call(this, e, t, n);
            }
        });
        var n = function() {
            var e = d.currentView;
            return e && e._isInRender ? e :null;
        };
        d._expand = function(e, t) {
            return t = t || n(), new d._HTMLJSExpander({
                parentView:t
            }).visit(e);
        }, d._expandAttributes = function(e, t) {
            return t = t || n(), new d._HTMLJSExpander({
                parentView:t
            }).visitAttributes(e);
        }, d._destroyView = function(e, t) {
            e.isDestroyed || (e.isDestroyed = !0, d._fireCallbacks(e, "destroyed"), e._domrange && e._domrange.destroyMembers(t));
        }, d._destroyNode = function(e) {
            1 === e.nodeType && d._DOMBackend.Teardown.tearDownElement(e);
        }, d._isContentEqual = function(e, t) {
            return e instanceof u.Raw ? t instanceof u.Raw && e.value === t.value :null == e ? null == t :e === t && ("number" == typeof e || "boolean" == typeof e || "string" == typeof e);
        }, d.currentView = null, d._withCurrentView = function(e, t) {
            var n = d.currentView;
            try {
                return d.currentView = e, t();
            } finally {
                d.currentView = n;
            }
        };
        var a = function(e) {
            if (null === e) throw new Error("Can't render null");
            if ("undefined" == typeof e) throw new Error("Can't render undefined");
            if (!(e instanceof d.View || e instanceof d.Template || "function" == typeof e)) try {
                new u.Visitor().visit(e);
            } catch (t) {
                throw new Error("Expected Template or View");
            }
        }, i = function(e) {
            if (a(e), e instanceof d.Template) return e.constructView();
            if (e instanceof d.View) return e;
            var t = e;
            return "function" != typeof t && (t = function() {
                return e;
            }), d.View("render", t);
        }, o = function(e) {
            return a(e), "function" != typeof e ? function() {
                return e;
            } :e;
        };
        d.render = function(e, t, r, a) {
            if (t || d._warn("Blaze.render without a parent element is deprecated. You must specify where to insert the rendered content."), 
            r instanceof d.View && (a = r, r = null), t && "number" != typeof t.nodeType) throw new Error("'parentElement' must be a DOM node");
            if (r && "number" != typeof r.nodeType) throw new Error("'nextNode' must be a DOM node");
            a = a || n();
            var o = i(e);
            return d._materializeView(o, a), t && o._domrange.attach(t, r), o;
        }, d.insert = function(e, t, n) {
            if (d._warn("Blaze.insert has been deprecated.  Specify where to insert the rendered content in the call to Blaze.render."), 
            !(e && e._domrange instanceof d._DOMRange)) throw new Error("Expected template rendered with Blaze.render");
            e._domrange.attach(t, n);
        }, d.renderWithData = function(e, t, n, r, a) {
            return d.render(d._TemplateWith(t, o(e)), n, r, a);
        }, d.remove = function(e) {
            if (!(e && e._domrange instanceof d._DOMRange)) throw new Error("Expected template rendered with Blaze.render");
            for (;e; ) {
                if (!e.isDestroyed) {
                    var t = e._domrange;
                    t.attached && !t.parentRange && t.detach(), t.destroy();
                }
                e = e._hasGeneratedParent && e.parentView;
            }
        }, d.toHTML = function(e, t) {
            return t = t || n(), u.toHTML(d._expandView(i(e), t));
        }, d.toHTMLWithData = function(e, t, r) {
            return r = r || n(), u.toHTML(d._expandView(d._TemplateWith(t, o(e)), r));
        }, d._toText = function(e, t, r) {
            if ("function" == typeof e) throw new Error("Blaze._toText doesn't take a function, just HTMLjs");
            if (null == t || t instanceof d.View || (r = t, t = null), t = t || n(), !r) throw new Error("textMode required");
            if (r !== u.TEXTMODE.STRING && r !== u.TEXTMODE.RCDATA && r !== u.TEXTMODE.ATTRIBUTE) throw new Error("Unknown textMode: " + r);
            return u.toText(d._expand(e, t), r);
        }, d.getData = function(e) {
            var t;
            if (e) if (e instanceof d.View) {
                var n = e;
                t = "with" === n.name ? n :d.getView(n, "with");
            } else {
                if ("number" != typeof e.nodeType) throw new Error("Expected DOM element or View");
                if (1 !== e.nodeType) throw new Error("Expected DOM element");
                t = d.getView(e, "with");
            } else t = d.getView("with");
            return t ? t.dataVar.get() :null;
        }, d.getElementData = function(e) {
            if (d._warn("Blaze.getElementData has been deprecated.  Use Blaze.getData(element) instead."), 
            1 !== e.nodeType) throw new Error("Expected DOM element");
            return d.getData(e);
        }, d.getView = function(e, t) {
            var n = t;
            if ("string" == typeof e && (n = e, e = null), e) {
                if (e instanceof d.View) return d._getParentView(e, n);
                if ("number" == typeof e.nodeType) return d._getElementView(e, n);
                throw new Error("Expected DOM element or View");
            }
            return d._getCurrentView(n);
        }, d._getCurrentView = function(e) {
            var t = d.currentView;
            if (!t) throw new Error("There is no current view");
            if (e) {
                for (;t && t.name !== e; ) t = t.parentView;
                return t || null;
            }
            return t;
        }, d._getParentView = function(e, t) {
            var n = e.parentView;
            if (t) for (;n && n.name !== t; ) n = n.parentView;
            return n || null;
        }, d._getElementView = function(e, t) {
            for (var n = d._DOMRange.forElement(e), r = null; n && !r; ) r = n.view || null, 
            r || (n = n.parentRange ? n.parentRange :d._DOMRange.forElement(n.parentElement));
            if (t) {
                for (;r && r.name !== t; ) r = r.parentView;
                return r || null;
            }
            return r;
        }, d._addEventMap = function(e, t, n) {
            n = n || null;
            var r = [];
            if (!e._domrange) throw new Error("View must have a DOMRange");
            e._domrange.onAttached(function a(i, o) {
                s.each(t, function(t, a) {
                    var u = a.split(/,\s+/);
                    s.each(u, function(a) {
                        var s = a.split(/\s+/);
                        if (0 !== s.length) {
                            var u = s.shift(), l = s.join(" ");
                            r.push(d._EventSupport.listen(o, u, l, function(r) {
                                if (!i.containsElement(r.currentTarget)) return null;
                                var a = n || this, o = arguments;
                                return d._withCurrentView(e, function() {
                                    return t.apply(a, o);
                                });
                            }, i, function(e) {
                                return e.parentRange;
                            }));
                        }
                    });
                });
            }), e.onViewDestroyed(function() {
                s.each(r, function(e) {
                    e.stop();
                }), r.length = 0;
            });
        };
    }.call(this), function() {
        d._calculateCondition = function(e) {
            return e instanceof Array && 0 === e.length && (e = !1), !!e;
        }, d.With = function(e, t) {
            var n = d.View("with", t);
            return n.dataVar = new c(), n.onViewCreated(function() {
                "function" == typeof e ? n.autorun(function() {
                    n.dataVar.set(e());
                }, n.parentView, "setData") :n.dataVar.set(e);
            }), n;
        }, d._attachBindingsToView = function(e, t) {
            t.onViewCreated(function() {
                s.each(e, function(e, n) {
                    t._scopeBindings[n] = new c(), "function" == typeof e ? t.autorun(function() {
                        t._scopeBindings[n].set(e());
                    }, t.parentView) :t._scopeBindings[n].set(e);
                });
            });
        }, d.Let = function(e, t) {
            var n = d.View("let", t);
            return d._attachBindingsToView(e, n), n;
        }, d.If = function(e, t, n, r) {
            var a = new c(), i = d.View(r ? "unless" :"if", function() {
                return a.get() ? t() :n ? n() :null;
            });
            return i.__conditionVar = a, i.onViewCreated(function() {
                this.autorun(function() {
                    var t = d._calculateCondition(e());
                    a.set(r ? !t :t);
                }, this.parentView, "condition");
            }), i;
        }, d.Unless = function(e, t, n) {
            return d.If(e, t, n, !0);
        }, d.Each = function(e, t, n) {
            var a = d.View("each", function() {
                var e = this.initialSubviews;
                return this.initialSubviews = null, this._isCreatedForExpansion && (this.expandedValueDep = new r.Dependency(), 
                this.expandedValueDep.depend()), e;
            });
            a.initialSubviews = [], a.numItems = 0, a.inElseMode = !1, a.stopHandle = null, 
            a.contentFunc = t, a.elseFunc = n, a.argVar = new c(), a.variableName = null;
            var i = function(e, t) {
                void 0 === t && (t = a.numItems - 1);
                for (var n = e; t >= n; n++) {
                    var r = a._domrange.members[n].view;
                    r._scopeBindings["@index"].set(n);
                }
            };
            return a.onViewCreated(function() {
                a.autorun(function() {
                    var t = e();
                    s.isObject(t) && s.has(t, "_sequence") && (a.variableName = t._variable || null, 
                    t = t._sequence), a.argVar.set(t);
                }, a.parentView, "collection"), a.stopHandle = l.observe(function() {
                    return a.argVar.get();
                }, {
                    addedAt:function(e, t, n) {
                        r.nonreactive(function() {
                            var e;
                            e = a.variableName ? d.View("item", a.contentFunc) :d.With(t, a.contentFunc), a.numItems++;
                            var r = {};
                            if (r["@index"] = n, a.variableName && (r[a.variableName] = t), d._attachBindingsToView(r, e), 
                            a.expandedValueDep) a.expandedValueDep.changed(); else if (a._domrange) {
                                a.inElseMode && (a._domrange.removeMember(0), a.inElseMode = !1);
                                var o = d._materializeView(e, a);
                                a._domrange.addMember(o, n), i(n);
                            } else a.initialSubviews.splice(n, 0, e);
                        });
                    },
                    removedAt:function(e, t, n) {
                        r.nonreactive(function() {
                            a.numItems--, a.expandedValueDep ? a.expandedValueDep.changed() :a._domrange ? (a._domrange.removeMember(n), 
                            i(n), a.elseFunc && 0 === a.numItems && (a.inElseMode = !0, a._domrange.addMember(d._materializeView(d.View("each_else", a.elseFunc), a), 0))) :a.initialSubviews.splice(n, 1);
                        });
                    },
                    changedAt:function(e, t, n, i) {
                        r.nonreactive(function() {
                            if (a.expandedValueDep) a.expandedValueDep.changed(); else {
                                var e;
                                e = a._domrange ? a._domrange.getMember(i).view :a.initialSubviews[i], a.variableName ? e._scopeBindings[a.variableName].set(t) :e.dataVar.set(t);
                            }
                        });
                    },
                    movedTo:function(e, t, n, o) {
                        r.nonreactive(function() {
                            if (a.expandedValueDep) a.expandedValueDep.changed(); else if (a._domrange) a._domrange.moveMember(n, o), 
                            i(Math.min(n, o), Math.max(n, o)); else {
                                var e = a.initialSubviews, t = e[n];
                                e.splice(n, 1), e.splice(o, 0, t);
                            }
                        });
                    }
                }), a.elseFunc && 0 === a.numItems && (a.inElseMode = !0, a.initialSubviews[0] = d.View("each_else", a.elseFunc));
            }), a.onViewDestroyed(function() {
                a.stopHandle && a.stopHandle.stop();
            }), a;
        }, d._TemplateWith = function(e, t) {
            var n, r = e;
            "function" != typeof e && (r = function() {
                return e;
            });
            var a = function() {
                var e = null;
                return n.parentView && "InOuterTemplateScope" === n.parentView.name && (e = n.parentView.originalParentView), 
                e ? d._withCurrentView(e, r) :r();
            }, i = function() {
                var e = t.call(this);
                return e instanceof d.Template && (e = e.constructView()), e instanceof d.View && (e._hasGeneratedParent = !0), 
                e;
            };
            return n = d.With(a, i), n.__isTemplateWith = !0, n;
        }, d._InOuterTemplateScope = function(e, t) {
            var n = d.View("InOuterTemplateScope", t), r = e.parentView;
            return r.__isTemplateWith && (r = r.parentView), n.onViewCreated(function() {
                this.originalParentView = this.parentView, this.parentView = r, this.__childDoesntStartNewLexicalScope = !0;
            }), n;
        }, d.InOuterTemplateScope = d._InOuterTemplateScope;
    }.call(this), function() {
        d._globalHelpers = {}, d.registerHelper = function(e, t) {
            d._globalHelpers[e] = t;
        };
        var e = function(e, t) {
            return "function" != typeof e ? e :s.bind(e, t);
        }, t = function(e) {
            return "function" == typeof e ? function() {
                var t = d.getData();
                return null == t && (t = {}), e.apply(t, arguments);
            } :e;
        };
        d._OLDSTYLE_HELPER = {}, d._getTemplateHelper = function(e, r, a) {
            var i = !1;
            if (e.__helpers.has(r)) {
                var o = e.__helpers.get(r);
                if (o !== d._OLDSTYLE_HELPER) return null != o ? n(t(o), a) :null;
                i = !0;
            }
            return r in e && (i || (e.__helpers.set(r, d._OLDSTYLE_HELPER), e._NOWARN_OLDSTYLE_HELPERS || d._warn("Assigning helper with `" + e.viewName + "." + r + " = ...` is deprecated.  Use `" + e.viewName + ".helpers(...)` instead.")), 
            null != e[r]) ? n(t(e[r]), a) :null;
        };
        var n = function(e, t) {
            return "function" != typeof e ? e :function() {
                var n = this, r = arguments;
                return d.Template._withTemplateInstanceFunc(t, function() {
                    return d._wrapCatchingExceptions(e, "template helper").apply(n, r);
                });
            };
        };
        d._lexicalBindingLookup = function(e, t) {
            var n = e, r = [];
            do if (s.has(n._scopeBindings, t)) {
                var a = n._scopeBindings[t];
                return function() {
                    return a.get();
                };
            } while ((!n.__startsNewLexicalScope || n.parentView && n.parentView.__childDoesntStartNewLexicalScope) && (n = n.parentView));
            return null;
        }, d._getTemplate = function(e, t) {
            return e in d.Template && d.Template[e] instanceof d.Template ? d.Template[e] :null;
        }, d._getGlobalHelper = function(e, r) {
            return null != d._globalHelpers[e] ? n(t(d._globalHelpers[e]), r) :null;
        }, d.View.prototype.lookup = function(e, t) {
            var n = this.template, r = t && t.template, a, i, o, u;
            if (this.templateInstance && (o = s.bind(this.templateInstance, this)), /^\./.test(e)) {
                if (!/^(\.)+$/.test(e)) throw new Error("id starting with dot must be a series of dots");
                return d._parentData(e.length - 1, !0);
            }
            return n && null != (a = d._getTemplateHelper(n, e, o)) ? a :n && null != (i = d._lexicalBindingLookup(d.currentView, e)) ? i :r && null != (u = d._getTemplate(e, o)) ? u :null != (a = d._getGlobalHelper(e, o)) ? a :function() {
                var t = arguments.length > 0, n = d.getData(), a = n && n[e];
                if (!a) {
                    if (r) throw new Error("No such template: " + e);
                    if (t) throw new Error("No such function: " + e);
                    if ("@" === e.charAt(0) && (null === a || void 0 === a)) throw new Error("Unsupported directive: " + e);
                }
                if (!n) return null;
                if ("function" != typeof a) {
                    if (t) throw new Error("Can't call non-function: " + a);
                    return a;
                }
                return a.apply(n, arguments);
            };
        }, d._parentData = function(e, t) {
            null == e && (e = 1);
            for (var n = d.getView("with"), r = 0; e > r && n; r++) n = d.getView(n, "with");
            return n ? t ? function() {
                return n.dataVar.get();
            } :n.dataVar.get() :null;
        }, d.View.prototype.lookupTemplate = function(e) {
            return this.lookup(e, {
                template:!0
            });
        };
    }.call(this), function() {
        d.Template = function(e, n) {
            if (!(this instanceof d.Template)) return new d.Template(e, n);
            if ("function" == typeof e && (n = e, e = ""), "string" != typeof e) throw new Error("viewName must be a String (or omitted)");
            if ("function" != typeof n) throw new Error("renderFunction must be a function");
            this.viewName = e, this.renderFunction = n, this.__helpers = new t(), this.__eventMaps = [], 
            this._callbacks = {
                created:[],
                rendered:[],
                destroyed:[]
            };
        };
        var e = d.Template, t = function() {};
        t.prototype.get = function(e) {
            return this[" " + e];
        }, t.prototype.set = function(e, t) {
            this[" " + e] = t;
        }, t.prototype.has = function(e) {
            return " " + e in this;
        }, d.isTemplate = function(e) {
            return e instanceof d.Template;
        }, e.prototype.onCreated = function(e) {
            this._callbacks.created.push(e);
        }, e.prototype.onRendered = function(e) {
            this._callbacks.rendered.push(e);
        }, e.prototype.onDestroyed = function(e) {
            this._callbacks.destroyed.push(e);
        }, e.prototype._getCallbacks = function(e) {
            var t = this, n = t[e] ? [ t[e] ] :[];
            return n = n.concat(t._callbacks[e]);
        };
        var n = function(t, n) {
            e._withTemplateInstanceFunc(function() {
                return n;
            }, function() {
                for (var e = 0, r = t.length; r > e; e++) t[e].call(n);
            });
        };
        e.prototype.constructView = function(t, r) {
            var a = this, i = d.View(a.viewName, a.renderFunction);
            i.template = a, i.templateContentBlock = t ? new e("(contentBlock)", t) :null, i.templateElseBlock = r ? new e("(elseBlock)", r) :null, 
            (a.__eventMaps || "object" == typeof a.events) && i._onViewRendered(function() {
                1 === i.renderCount && (a.__eventMaps.length || "object" != typeof a.events || e.prototype.events.call(a, a.events), 
                s.each(a.__eventMaps, function(e) {
                    d._addEventMap(i, e, i);
                }));
            }), i._templateInstance = new d.TemplateInstance(i), i.templateInstance = function() {
                var e = i._templateInstance;
                return e.data = d.getData(i), i._domrange && !i.isDestroyed ? (e.firstNode = i._domrange.firstNode(), 
                e.lastNode = i._domrange.lastNode()) :(e.firstNode = null, e.lastNode = null), e;
            };
            var o = a._getCallbacks("created");
            i.onViewCreated(function() {
                n(o, i.templateInstance());
            });
            var u = a._getCallbacks("rendered");
            i.onViewReady(function() {
                n(u, i.templateInstance());
            });
            var l = a._getCallbacks("destroyed");
            return i.onViewDestroyed(function() {
                n(l, i.templateInstance());
            }), i;
        }, d.TemplateInstance = function(e) {
            if (!(this instanceof d.TemplateInstance)) return new d.TemplateInstance(e);
            if (!(e instanceof d.View)) throw new Error("View required");
            e._templateInstance = this, this.view = e, this.data = null, this.firstNode = null, 
            this.lastNode = null, this._allSubsReadyDep = new r.Dependency(), this._allSubsReady = !1, 
            this._subscriptionHandles = {};
        }, d.TemplateInstance.prototype.$ = function(e) {
            var t = this.view;
            if (!t._domrange) throw new Error("Can't use $ on template instance with no DOM");
            return t._domrange.$(e);
        }, d.TemplateInstance.prototype.findAll = function(e) {
            return Array.prototype.slice.call(this.$(e));
        }, d.TemplateInstance.prototype.find = function(e) {
            var t = this.$(e);
            return t[0] || null;
        }, d.TemplateInstance.prototype.autorun = function(e) {
            return this.view.autorun(e);
        }, d.TemplateInstance.prototype.subscribe = function() {
            var e = this, t = e._subscriptionHandles, n = s.toArray(arguments), r = {};
            if (n.length) {
                var a = s.last(n), i = {
                    onReady:o.Optional(Function),
                    onError:o.Optional(Function),
                    onStop:o.Optional(Function),
                    connection:o.Optional(o.Any)
                };
                s.isFunction(a) ? r.onReady = n.pop() :a && o.test(a, i) && (r = n.pop());
            }
            var u, l = r.onStop;
            r.onStop = function(n) {
                delete t[u.subscriptionId], e._allSubsReady || e._allSubsReadyDep.changed(), l && l(n);
            };
            var c = r.connection, d = s.pick(r, [ "onReady", "onError", "onStop" ]);
            return n.push(d), u = e.view.subscribe.call(e.view, n, {
                connection:c
            }), s.has(t, u.subscriptionId) || (t[u.subscriptionId] = u, e._allSubsReady && e._allSubsReadyDep.changed()), 
            u;
        }, d.TemplateInstance.prototype.subscriptionsReady = function() {
            return this._allSubsReadyDep.depend(), this._allSubsReady = s.all(this._subscriptionHandles, function(e) {
                return e.ready();
            }), this._allSubsReady;
        }, e.prototype.helpers = function(e) {
            for (var t in e) this.__helpers.set(t, e[t]);
        }, e._currentTemplateInstanceFunc = null, e._withTemplateInstanceFunc = function(t, n) {
            if ("function" != typeof n) throw new Error("Expected function, got: " + n);
            var r = e._currentTemplateInstanceFunc;
            try {
                return e._currentTemplateInstanceFunc = t, n();
            } finally {
                e._currentTemplateInstanceFunc = r;
            }
        }, e.prototype.events = function(t) {
            var n = this, r = {};
            for (var a in t) r[a] = function(t, n) {
                return function(t) {
                    var r = this, a = d.getData(t.currentTarget);
                    null == a && (a = {});
                    var i = Array.prototype.slice.call(arguments), o = s.bind(r.templateInstance, r);
                    return i.splice(1, 0, o()), e._withTemplateInstanceFunc(o, function() {
                        return n.apply(a, i);
                    });
                };
            }(a, t[a]);
            n.__eventMaps.push(r);
        }, e.instance = function() {
            return e._currentTemplateInstanceFunc && e._currentTemplateInstanceFunc();
        }, e.currentData = d.getData, e.parentData = d._parentData, e.registerHelper = d.registerHelper;
    }.call(this), function() {
        m = d, d.ReactiveVar = c, m._templateInstance = d.Template.instance, w = {}, w.registerHelper = d.registerHelper, 
        w._escape = d._escape, w.SafeString = function(e) {
            this.string = e;
        }, w.SafeString.prototype.toString = function() {
            return this.string.toString();
        };
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.blaze = {
        Blaze:d,
        UI:m,
        Handlebars:w
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.htmljs.HTML, n = Package.tracker.Tracker, r = Package.tracker.Deps, a = Package.blaze.Blaze, u = Package.blaze.UI, i = Package.blaze.Handlebars, c = Package["observe-sequence"].ObserveSequence, l = Package.underscore._, o;
    (function() {
        o = {};
        var e = function(e, t) {
            return e === t;
        };
        o.include = function(t, n, r) {
            if (!t) return null;
            if ("function" != typeof t) {
                var u = t;
                if (!a.isTemplate(u)) throw new Error("Expected template or null, found: " + u);
                var i = t.constructView(n, r);
                return i.__startsNewLexicalScope = !0, i;
            }
            var c = a.ReactiveVar(null, e), i = a.View("Spacebars.include", function() {
                var e = c.get();
                if (null === e) return null;
                if (!a.isTemplate(e)) throw new Error("Expected template or null, found: " + e);
                return e.constructView(n, r);
            });
            return i.__templateVar = c, i.onViewCreated(function() {
                this.autorun(function() {
                    c.set(t());
                });
            }), i.__startsNewLexicalScope = !0, i;
        }, o.mustacheImpl = function(e) {
            var t = arguments;
            if (t.length > 1) {
                var n = t[t.length - 1];
                if (n instanceof o.kw) {
                    var r = {};
                    for (var a in n.hash) {
                        var u = n.hash[a];
                        r[a] = "function" == typeof u ? u() :u;
                    }
                    t[t.length - 1] = o.kw(r);
                } else n = o.kw(), t = Array.prototype.slice.call(arguments), t.push(n);
            }
            return o.call.apply(null, t);
        }, o.mustache = function(e) {
            var n = o.mustacheImpl.apply(null, arguments);
            return n instanceof o.SafeString ? t.Raw(n.toString()) :null == n || n === !1 ? null :String(n);
        }, o.attrMustache = function(e) {
            var n = o.mustacheImpl.apply(null, arguments);
            if (null == n || "" === n) return null;
            if ("object" == typeof n) return n;
            if ("string" == typeof n && t.isValidAttributeName(n)) {
                var r = {};
                return r[n] = "", r;
            }
            throw new Error("Expected valid attribute name, '', null, or object");
        }, o.dataMustache = function(e) {
            var t = o.mustacheImpl.apply(null, arguments);
            return t;
        }, o.makeRaw = function(e) {
            return null == e ? null :e instanceof t.Raw ? e :t.Raw(e);
        }, o.call = function(e) {
            if ("function" == typeof e) {
                for (var t = [], n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    t[n - 1] = "function" == typeof r ? r() :r;
                }
                return e.apply(null, t);
            }
            if (arguments.length > 1) throw new Error("Can't call non-function: " + e);
            return e;
        }, o.kw = function(e) {
            return this instanceof o.kw ? void (this.hash = e || {}) :new o.kw(e);
        }, o.SafeString = function(e) {
            return this instanceof o.SafeString ? new i.SafeString(e) :new o.SafeString(e);
        }, o.SafeString.prototype = i.SafeString.prototype, o.dot = function(e, t) {
            if (arguments.length > 2) {
                var n = [];
                return n.push(o.dot(e, t)), n.push.apply(n, Array.prototype.slice.call(arguments, 2)), 
                o.dot.apply(null, n);
            }
            if ("function" == typeof e && (e = e()), !e) return e;
            var r = e[t];
            return "function" != typeof r ? r :function() {
                return r.apply(e, arguments);
            };
        }, o.With = function(e, t, r) {
            var u = new a.ReactiveVar(), i = a.View("Spacebars_with", function() {
                return a.If(function() {
                    return u.get();
                }, function() {
                    return a.With(function() {
                        return u.get();
                    }, t);
                }, r);
            });
            return i.onViewCreated(function() {
                this.autorun(function() {
                    u.set(e()), n.onInvalidate(function() {
                        u.dep.changed();
                    });
                });
            }), i;
        }, o.TemplateWith = a._TemplateWith;
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.spacebars = {
        Spacebars:o
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.underscore._, n = Package.blaze.Blaze, a = Package.blaze.UI, o = Package.blaze.Handlebars, c = Package.spacebars.Spacebars, r = Package.htmljs.HTML, u;
    (function() {
        u = n.Template;
        var e = "__proto__ name".split(" ");
        u.__checkName = function(n) {
            if (n in u || t.contains(e, n)) {
                if (u[n] instanceof u && "body" !== n) throw new Error("There are multiple templates named '" + n + "'. Each template needs a unique name.");
                throw new Error("This template name is reserved: " + n);
            }
        }, u.__define__ = function(e, t) {
            u.__checkName(e), u[e] = new u("Template." + e, t), u[e]._NOWARN_OLDSTYLE_HELPERS = !0;
        }, u.body = new u("body", function() {
            var e = this;
            return t.map(u.body.contentRenderFuncs, function(t) {
                return t.apply(e);
            });
        }), u.body.contentRenderFuncs = [], u.body.view = null, u.body.addContent = function(e) {
            u.body.contentRenderFuncs.push(e);
        }, u.body.renderToDocument = function() {
            if (!u.body.view) {
                var e = n.render(u.body, document.body);
                u.body.view = e;
            }
        }, a.body = u.body, u.__body__ = u.body, u.__body__.__contentParts = u.body.contentViews, 
        u.__body__.__instantiate = u.body.renderToDocument;
    }).call(this), function() {
        u.__checkName("__dynamic"), u.__dynamic = new u("Template.__dynamic", function() {
            var e = this;
            return [ n.View("lookup:checkContext", function() {
                return c.mustache(e.lookup("checkContext"));
            }), "\n  ", n.If(function() {
                return c.call(e.lookup("dataContextPresent"));
            }, function() {
                return [ "\n    ", c.include(e.lookupTemplate("__dynamicWithDataContext"), function() {
                    return n._InOuterTemplateScope(e, function() {
                        return c.include(function() {
                            return c.call(e.templateContentBlock);
                        });
                    });
                }), "\n  " ];
            }, function() {
                return [ "\n    \n    ", n._TemplateWith(function() {
                    return {
                        template:c.call(e.lookup("template")),
                        data:c.call(e.lookup(".."))
                    };
                }, function() {
                    return c.include(e.lookupTemplate("__dynamicWithDataContext"), function() {
                        return n._InOuterTemplateScope(e, function() {
                            return c.include(function() {
                                return c.call(e.templateContentBlock);
                            });
                        });
                    });
                }), "\n  " ];
            }) ];
        }), u.__checkName("__dynamicWithDataContext"), u.__dynamicWithDataContext = new u("Template.__dynamicWithDataContext", function() {
            var e = this;
            return c.With(function() {
                return c.dataMustache(e.lookup("chooseTemplate"), e.lookup("template"));
            }, function() {
                return [ "\n    \n    ", n._TemplateWith(function() {
                    return c.call(c.dot(e.lookup(".."), "data"));
                }, function() {
                    return c.include(e.lookupTemplate(".."), function() {
                        return n._InOuterTemplateScope(e, function() {
                            return c.include(function() {
                                return c.call(e.templateContentBlock);
                            });
                        });
                    });
                }), "\n  " ];
            });
        });
    }.call(this), function() {
        var e = n.Template;
        e.__dynamicWithDataContext.helpers({
            chooseTemplate:function(t) {
                return n._getTemplate(t, function() {
                    return e.instance();
                });
            }
        }), e.__dynamic.helpers({
            dataContextPresent:function() {
                return t.has(this, "data");
            },
            checkContext:function() {
                if (!t.has(this, "template")) throw new Error("Must specify name in the 'template' argument to {{> Template.dynamic}}.");
                t.each(this, function(e, t) {
                    if ("template" !== t && "data" !== t) throw new Error("Invalid argument to {{> Template.dynamic}}: " + t);
                });
            }
        });
    }.call(this), "undefined" == typeof Package && (Package = {}), Package.templating = {
        Template:u
    };
}();

!function() {
    var e = Package.meteor.Meteor, n;
    (function() {
        var a = 0, r = !1;
        n = {
            hold:function() {
                if (!e.isCordova) return {
                    release:function() {}
                };
                if (r) throw new Error("Can't show launch screen once it's hidden");
                a++;
                var n = !1, t = function() {
                    e.isCordova && (n || (a--, 0 === a && "undefined" != typeof navigator && navigator.splashscreen && (r = !0, 
                    navigator.splashscreen.hide())));
                };
                return {
                    release:t
                };
            }
        };
    }).call(this), function() {
        var a = n.hold(), r = Package.templating && Package.templating.Template;
        e.startup(function() {
            r ? Package["iron:router"] ? Package["iron:router"].Router.onAfterAction(function() {
                a.release();
            }) :(r.body.onRendered(function() {
                a.release();
            }), setTimeout(function() {
                a.release();
            }, 6e3)) :a.release();
        });
    }.call(this), "undefined" == typeof Package && (Package = {}), Package["launch-screen"] = {
        LaunchScreen:n
    };
}();

!function() {
    var a = Package.meteor.Meteor, e = Package.blaze.Blaze, c = Package.blaze.UI, g = Package.blaze.Handlebars, k = Package.htmljs.HTML, e, c, g;
    "undefined" == typeof Package && (Package = {}), Package.ui = {
        Blaze:e,
        UI:c,
        Handlebars:g
    };
}();

!function() {
    var e = Package.meteor.Meteor, t = Package.tracker.Tracker, n = Package.tracker.Deps, a = Package.retry.Retry, r = Package["ddp-client"].DDP, o = Package.mongo.Mongo, i = Package.underscore._, s, c;
    (function() {
        var t = __meteor_runtime_config__.autoupdateVersion || "unknown", n = __meteor_runtime_config__.autoupdateVersionRefreshable || "unknown";
        s = new o.Collection("meteor_autoupdate_clientVersions"), c = {}, c.newClientAvailable = function() {
            return !!s.findOne({
                _id:"version",
                version:{
                    $ne:t
                }
            }) || !!s.findOne({
                _id:"version-refreshable",
                version:{
                    $ne:n
                }
            });
        }, c._ClientVersions = s;
        var r = !1, u = new a({
            minCount:0,
            baseTimeout:3e4
        }), l = 0;
        c._retrySubscription = function() {
            e.subscribe("meteor_autoupdate_clientVersions", {
                onError:function(t) {
                    e._debug("autoupdate subscription failed:", t), l++, u.retryLater(l, function() {
                        c._retrySubscription();
                    });
                },
                onReady:function() {
                    if (Package.reload) var a = function(a) {
                        var s = this;
                        if ("version-refreshable" === a._id && a.version !== n) {
                            n = a.version;
                            var c = a.assets && a.assets.allCss || [], u = [];
                            i.each(document.getElementsByTagName("link"), function(e) {
                                "__meteor-css__" === e.className && u.push(e);
                            });
                            var l = function(t, n) {
                                var a = i.once(n);
                                if (t.onload = function() {
                                    r = !0, a();
                                }, !r) var o = e.setInterval(function() {
                                    t.sheet && (a(), e.clearInterval(o));
                                }, 50);
                            }, d = i.after(c.length, function() {
                                i.each(u, function(e) {
                                    e.parentNode.removeChild(e);
                                });
                            }), _ = function(t) {
                                document.getElementsByTagName("head").item(0).appendChild(t), l(t, function() {
                                    e.setTimeout(d, 200);
                                });
                            };
                            0 !== c.length ? i.each(c, function(t) {
                                var n = document.createElement("link");
                                n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("class", "__meteor-css__"), 
                                n.setAttribute("href", e._relativeToSiteRootUrl(t.url)), _(n);
                            }) :d();
                        } else "version" === a._id && a.version !== t && (o && o.stop(), Package.reload && Package.reload.Reload._reload());
                    }, o = s.find().observe({
                        added:a,
                        changed:a
                    });
                }
            });
        }, c._retrySubscription();
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.autoupdate = {
        Autoupdate:c
    };
}();
/*var Mongo = Package.mongo.Mongo
	, Session = Package.session.Session
	, $ = Package.jquery.$
	, jQuery = Package.jquery.jQuery
	, Tracker = Package.tracker.Tracker
	, Deps = Package.tracker.Deps
	, Date = Package["es5-shim"].Date
	, parseInt = Package["es5-shim"].parseInt
	, ECMAScript = Package.ecmascript.ECMAScript
	, Meteor = Package.meteor.Meteor
	, WebApp = Package.webapp.WebApp
	, _ = Package.underscore._
	, DDP = Package["ddp-client"].DDP
	, LaunchScreen = Package["launch-screen"].LaunchScreen
	, Blaze = Package.ui.Blaze
	, UI = Package.ui.UI
	, Handlebars = Package.ui.Handlebars
	, Spacebars = Package.spacebars.Spacebars
	, Template = Package.templating.Template
	, babelHelpers = Package["babel-runtime"].babelHelpers
	, Symbol = Package["ecmascript-runtime"].Symbol
	, Map = Package["ecmascript-runtime"].Map
	, Set = Package["ecmascript-runtime"].Set
	, Promise = Package.promise.Promise
	, Autoupdate = Package.autoupdate.Autoupdate
	, Reload = Package.reload.Reload
	, HTML = Package.htmljs.HTML;
Meteor.disconnect();*/
/*Meteor.disconnect();
(function() {
    Template.body.addContent(function() {
        var e = this;
        return [ HTML.Raw("<h1>Welcome to Meteor!</h1>\n\n  "), Spacebars.include(e.lookupTemplate("hello")) ];
    }), Meteor.startup(Template.body.renderToDocument), Template.__checkName("hello"), 
    Template.hello = new Template("Template.hello", function() {
        var e = this;
        return [ HTML.Raw("<button>Click Me</button>\n  "), HTML.P("You've pressed the button ", Blaze.View("lookup:counter", function() {
            return Spacebars.mustache(e.lookup("counter"));
        }), " times.") ];
    });
}).call(this);

(function() {
    Meteor.isClient && (Session.setDefault("counter", 0), Template.hello.helpers({
        counter:function() {
            return Session.get("counter");
        }
    }), Template.hello.events({
        "click button":function() {
            Session.set("counter", Session.get("counter") + 1);
        }
    })), Meteor.isServer && Meteor.startup(function() {});
}).call(this);*/