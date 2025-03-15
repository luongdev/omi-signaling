var Ds = Object.defineProperty;
var On = (s) => {
  throw TypeError(s);
};
var Fs = (s, u, o) => u in s ? Ds(s, u, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[u] = o;
var Be = (s, u, o) => Fs(s, typeof u != "symbol" ? u + "" : u, o), Ur = (s, u, o) => u.has(s) || On("Cannot " + o);
var C = (s, u, o) => (Ur(s, u, "read from private field"), o ? o.call(s) : u.get(s)), Me = (s, u, o) => u.has(s) ? On("Cannot add the same private member more than once") : u instanceof WeakSet ? u.add(s) : u.set(s, o), Ce = (s, u, o, l) => (Ur(s, u, "write to private field"), l ? l.call(s, o) : u.set(s, o), o), Ae = (s, u, o) => (Ur(s, u, "access private method"), o);
var cr = (s, u, o, l) => ({
  set _(f) {
    Ce(s, u, f, o);
  },
  get _() {
    return C(s, u, l);
  }
});
var mn = Object.defineProperty, Ws = Object.getOwnPropertyDescriptor, $s = Object.getOwnPropertyNames, qs = Object.prototype.hasOwnProperty, rt = (s, u) => () => (s && (u = s(s = 0)), u), be = (s, u) => () => (u || s((u = { exports: {} }).exports, u), u.exports), Zt = (s, u) => {
  for (var o in u) mn(s, o, { get: u[o], enumerable: !0 });
}, Hs = (s, u, o, l) => {
  if (u && typeof u == "object" || typeof u == "function") for (let f of $s(u)) !qs.call(s, f) && f !== o && mn(s, f, { get: () => u[f], enumerable: !(l = Ws(u, f)) || l.enumerable });
  return s;
}, je = (s) => Hs(mn({}, "__esModule", { value: !0 }), s), he = rt(() => {
}), Ne = {};
Zt(Ne, { _debugEnd: () => ki, _debugProcess: () => Ti, _events: () => $i, _eventsCount: () => qi, _exiting: () => fi, _fatalExceptions: () => Si, _getActiveHandles: () => co, _getActiveRequests: () => ho, _kill: () => gi, _linkedBinding: () => lo, _maxListeners: () => Wi, _preload_modules: () => Di, _rawDebug: () => ui, _startProfilerIdleNotifier: () => Ci, _stopProfilerIdleNotifier: () => Oi, _tickCallback: () => Ii, abort: () => Bi, addListener: () => Hi, allowedNodeEnvironmentFlags: () => vi, arch: () => Yr, argv: () => Zr, argv0: () => ji, assert: () => fo, binding: () => ni, chdir: () => ai, config: () => di, cpuUsage: () => nr, cwd: () => si, debugPort: () => Ui, default: () => wn, dlopen: () => uo, domain: () => ci, emit: () => Ki, emitWarning: () => ii, env: () => Xr, execArgv: () => ei, execPath: () => Li, exit: () => wi, features: () => Ei, hasUncaughtExceptionCaptureCallback: () => po, hrtime: () => yr, kill: () => yi, listeners: () => bo, memoryUsage: () => mi, moduleLoadList: () => hi, nextTick: () => so, off: () => Gi, on: () => wt, once: () => Vi, openStdin: () => _i, pid: () => Mi, platform: () => Jr, ppid: () => Ni, prependListener: () => Yi, prependOnceListener: () => Ji, reallyExit: () => pi, release: () => li, removeAllListeners: () => Qi, removeListener: () => zi, resourceUsage: () => bi, setSourceMapsEnabled: () => Fi, setUncaughtExceptionCaptureCallback: () => Ai, stderr: () => Pi, stdin: () => xi, stdout: () => Ri, title: () => Kr, umask: () => oi, uptime: () => go, version: () => ti, versions: () => ri });
function yn(s) {
  throw new Error("Node.js process " + s + " is not supported by JSPM core outside of Node.js");
}
function Vs() {
  !Vt || !qt || (Vt = !1, qt.length ? gt = qt.concat(gt) : ar = -1, gt.length && oo());
}
function oo() {
  if (!Vt) {
    var s = setTimeout(Vs, 0);
    Vt = !0;
    for (var u = gt.length; u; ) {
      for (qt = gt, gt = []; ++ar < u; ) qt && qt[ar].run();
      ar = -1, u = gt.length;
    }
    qt = null, Vt = !1, clearTimeout(s);
  }
}
function so(s) {
  var u = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var o = 1; o < arguments.length; o++) u[o - 1] = arguments[o];
  gt.push(new ao(s, u)), gt.length === 1 && !Vt && setTimeout(oo, 0);
}
function ao(s, u) {
  this.fun = s, this.array = u;
}
function et() {
}
function lo(s) {
  yn("_linkedBinding");
}
function uo(s) {
  yn("dlopen");
}
function ho() {
  return [];
}
function co() {
  return [];
}
function fo(s, u) {
  if (!s) throw new Error(u || "assertion error");
}
function po() {
  return !1;
}
function go() {
  return St.now() / 1e3;
}
function yr(s) {
  var u = Math.floor((Date.now() - St.now()) * 1e-3), o = St.now() * 1e-3, l = Math.floor(o) + u, f = Math.floor(o % 1 * 1e9);
  return s && (l = l - s[0], f = f - s[1], f < 0 && (l--, f += wr)), [l, f];
}
function wt() {
  return wn;
}
function bo(s) {
  return [];
}
var gt, Vt, qt, ar, Kr, Yr, Jr, Xr, Zr, ei, ti, ri, ii, ni, oi, si, ai, li, ui, hi, ci, fi, di, pi, gi, nr, bi, mi, yi, wi, _i, vi, Ei, Si, Ai, Ii, Ti, ki, Ci, Oi, Ri, Pi, xi, Bi, Mi, Ni, Li, Ui, ji, Di, Fi, St, jr, wr, Wi, $i, qi, Hi, Vi, Gi, zi, Qi, Ki, Yi, Ji, wn, Gs = rt(() => {
  he(), fe(), ce(), gt = [], Vt = !1, ar = -1, ao.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, Kr = "browser", Yr = "x64", Jr = "browser", Xr = { PATH: "/usr/bin", LANG: navigator.language + ".UTF-8", PWD: "/", HOME: "/home", TMP: "/tmp" }, Zr = ["/usr/bin/node"], ei = [], ti = "v16.8.0", ri = {}, ii = function(s, u) {
    console.warn((u ? u + ": " : "") + s);
  }, ni = function(s) {
    yn("binding");
  }, oi = function(s) {
    return 0;
  }, si = function() {
    return "/";
  }, ai = function(s) {
  }, li = { name: "node", sourceUrl: "", headersUrl: "", libUrl: "" }, ui = et, hi = [], ci = {}, fi = !1, di = {}, pi = et, gi = et, nr = function() {
    return {};
  }, bi = nr, mi = nr, yi = et, wi = et, _i = et, vi = {}, Ei = { inspector: !1, debug: !1, uv: !1, ipv6: !1, tls_alpn: !1, tls_sni: !1, tls_ocsp: !1, tls: !1, cached_builtins: !0 }, Si = et, Ai = et, Ii = et, Ti = et, ki = et, Ci = et, Oi = et, Ri = void 0, Pi = void 0, xi = void 0, Bi = et, Mi = 2, Ni = 1, Li = "/bin/usr/node", Ui = 9229, ji = "node", Di = [], Fi = et, St = { now: typeof performance < "u" ? performance.now.bind(performance) : void 0, timing: typeof performance < "u" ? performance.timing : void 0 }, St.now === void 0 && (jr = Date.now(), St.timing && St.timing.navigationStart && (jr = St.timing.navigationStart), St.now = () => Date.now() - jr), wr = 1e9, yr.bigint = function(s) {
    var u = yr(s);
    return typeof BigInt > "u" ? u[0] * wr + u[1] : BigInt(u[0] * wr) + BigInt(u[1]);
  }, Wi = 10, $i = {}, qi = 0, Hi = wt, Vi = wt, Gi = wt, zi = wt, Qi = wt, Ki = et, Yi = wt, Ji = wt, wn = { version: ti, versions: ri, arch: Yr, platform: Jr, release: li, _rawDebug: ui, moduleLoadList: hi, binding: ni, _linkedBinding: lo, _events: $i, _eventsCount: qi, _maxListeners: Wi, on: wt, addListener: Hi, once: Vi, off: Gi, removeListener: zi, removeAllListeners: Qi, emit: Ki, prependListener: Yi, prependOnceListener: Ji, listeners: bo, domain: ci, _exiting: fi, config: di, dlopen: uo, uptime: go, _getActiveRequests: ho, _getActiveHandles: co, reallyExit: pi, _kill: gi, cpuUsage: nr, resourceUsage: bi, memoryUsage: mi, kill: yi, exit: wi, openStdin: _i, allowedNodeEnvironmentFlags: vi, assert: fo, features: Ei, _fatalExceptions: Si, setUncaughtExceptionCaptureCallback: Ai, hasUncaughtExceptionCaptureCallback: po, emitWarning: ii, nextTick: so, _tickCallback: Ii, _debugProcess: Ti, _debugEnd: ki, _startProfilerIdleNotifier: Ci, _stopProfilerIdleNotifier: Oi, stdout: Ri, stdin: xi, stderr: Pi, abort: Bi, umask: oi, chdir: ai, cwd: si, env: Xr, title: Kr, argv: Zr, execArgv: ei, pid: Mi, ppid: Ni, execPath: Li, debugPort: Ui, hrtime: yr, argv0: ji, _preload_modules: Di, setSourceMapsEnabled: Fi };
}), ce = rt(() => {
  Gs();
}), Ye = {};
Zt(Ye, { Buffer: () => Tr, INSPECT_MAX_BYTES: () => mo, default: () => _t, kMaxLength: () => yo });
function zs() {
  if (Xi) return Xt;
  Xi = !0, Xt.byteLength = r, Xt.toByteArray = n, Xt.fromByteArray = g;
  for (var s = [], u = [], o = typeof Uint8Array < "u" ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, i = l.length; f < i; ++f) s[f] = l[f], u[l.charCodeAt(f)] = f;
  u[45] = 62, u[95] = 63;
  function e(b) {
    var m = b.length;
    if (m % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var _ = b.indexOf("=");
    _ === -1 && (_ = m);
    var E = _ === m ? 0 : 4 - _ % 4;
    return [_, E];
  }
  function r(b) {
    var m = e(b), _ = m[0], E = m[1];
    return (_ + E) * 3 / 4 - E;
  }
  function t(b, m, _) {
    return (m + _) * 3 / 4 - _;
  }
  function n(b) {
    var m, _ = e(b), E = _[0], I = _[1], y = new o(t(b, E, I)), v = 0, U = I > 0 ? E - 4 : E, B;
    for (B = 0; B < U; B += 4) m = u[b.charCodeAt(B)] << 18 | u[b.charCodeAt(B + 1)] << 12 | u[b.charCodeAt(B + 2)] << 6 | u[b.charCodeAt(B + 3)], y[v++] = m >> 16 & 255, y[v++] = m >> 8 & 255, y[v++] = m & 255;
    return I === 2 && (m = u[b.charCodeAt(B)] << 2 | u[b.charCodeAt(B + 1)] >> 4, y[v++] = m & 255), I === 1 && (m = u[b.charCodeAt(B)] << 10 | u[b.charCodeAt(B + 1)] << 4 | u[b.charCodeAt(B + 2)] >> 2, y[v++] = m >> 8 & 255, y[v++] = m & 255), y;
  }
  function c(b) {
    return s[b >> 18 & 63] + s[b >> 12 & 63] + s[b >> 6 & 63] + s[b & 63];
  }
  function d(b, m, _) {
    for (var E, I = [], y = m; y < _; y += 3) E = (b[y] << 16 & 16711680) + (b[y + 1] << 8 & 65280) + (b[y + 2] & 255), I.push(c(E));
    return I.join("");
  }
  function g(b) {
    for (var m, _ = b.length, E = _ % 3, I = [], y = 16383, v = 0, U = _ - E; v < U; v += y) I.push(d(b, v, v + y > U ? U : v + y));
    return E === 1 ? (m = b[_ - 1], I.push(s[m >> 2] + s[m << 4 & 63] + "==")) : E === 2 && (m = (b[_ - 2] << 8) + b[_ - 1], I.push(s[m >> 10] + s[m >> 4 & 63] + s[m << 2 & 63] + "=")), I.join("");
  }
  return Xt;
}
function Qs() {
  return Zi ? or : (Zi = !0, or.read = function(s, u, o, l, f) {
    var i, e, r = f * 8 - l - 1, t = (1 << r) - 1, n = t >> 1, c = -7, d = o ? f - 1 : 0, g = o ? -1 : 1, b = s[u + d];
    for (d += g, i = b & (1 << -c) - 1, b >>= -c, c += r; c > 0; i = i * 256 + s[u + d], d += g, c -= 8) ;
    for (e = i & (1 << -c) - 1, i >>= -c, c += l; c > 0; e = e * 256 + s[u + d], d += g, c -= 8) ;
    if (i === 0) i = 1 - n;
    else {
      if (i === t) return e ? NaN : (b ? -1 : 1) * (1 / 0);
      e = e + Math.pow(2, l), i = i - n;
    }
    return (b ? -1 : 1) * e * Math.pow(2, i - l);
  }, or.write = function(s, u, o, l, f, i) {
    var e, r, t, n = i * 8 - f - 1, c = (1 << n) - 1, d = c >> 1, g = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = l ? 0 : i - 1, m = l ? 1 : -1, _ = u < 0 || u === 0 && 1 / u < 0 ? 1 : 0;
    for (u = Math.abs(u), isNaN(u) || u === 1 / 0 ? (r = isNaN(u) ? 1 : 0, e = c) : (e = Math.floor(Math.log(u) / Math.LN2), u * (t = Math.pow(2, -e)) < 1 && (e--, t *= 2), e + d >= 1 ? u += g / t : u += g * Math.pow(2, 1 - d), u * t >= 2 && (e++, t /= 2), e + d >= c ? (r = 0, e = c) : e + d >= 1 ? (r = (u * t - 1) * Math.pow(2, f), e = e + d) : (r = u * Math.pow(2, d - 1) * Math.pow(2, f), e = 0)); f >= 8; s[o + b] = r & 255, b += m, r /= 256, f -= 8) ;
    for (e = e << f | r, n += f; n > 0; s[o + b] = e & 255, b += m, e /= 256, n -= 8) ;
    s[o + b - m] |= _ * 128;
  }, or);
}
function Ks() {
  if (en) return Rt;
  en = !0;
  let s = zs(), u = Qs(), o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  Rt.Buffer = e, Rt.SlowBuffer = I, Rt.INSPECT_MAX_BYTES = 50;
  let l = 2147483647;
  Rt.kMaxLength = l, e.TYPED_ARRAY_SUPPORT = f(), !e.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function f() {
    try {
      let a = new Uint8Array(1), h = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(h, Uint8Array.prototype), Object.setPrototypeOf(a, h), a.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(e.prototype, "parent", { enumerable: !0, get: function() {
    if (e.isBuffer(this)) return this.buffer;
  } }), Object.defineProperty(e.prototype, "offset", { enumerable: !0, get: function() {
    if (e.isBuffer(this)) return this.byteOffset;
  } });
  function i(a) {
    if (a > l) throw new RangeError('The value "' + a + '" is invalid for option "size"');
    let h = new Uint8Array(a);
    return Object.setPrototypeOf(h, e.prototype), h;
  }
  function e(a, h, p) {
    if (typeof a == "number") {
      if (typeof h == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return c(a);
    }
    return r(a, h, p);
  }
  e.poolSize = 8192;
  function r(a, h, p) {
    if (typeof a == "string") return d(a, h);
    if (ArrayBuffer.isView(a)) return b(a);
    if (a == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a);
    if (D(a, ArrayBuffer) || a && D(a.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (D(a, SharedArrayBuffer) || a && D(a.buffer, SharedArrayBuffer))) return m(a, h, p);
    if (typeof a == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    let w = a.valueOf && a.valueOf();
    if (w != null && w !== a) return e.from(w, h, p);
    let T = _(a);
    if (T) return T;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof a[Symbol.toPrimitive] == "function") return e.from(a[Symbol.toPrimitive]("string"), h, p);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a);
  }
  e.from = function(a, h, p) {
    return r(a, h, p);
  }, Object.setPrototypeOf(e.prototype, Uint8Array.prototype), Object.setPrototypeOf(e, Uint8Array);
  function t(a) {
    if (typeof a != "number") throw new TypeError('"size" argument must be of type number');
    if (a < 0) throw new RangeError('The value "' + a + '" is invalid for option "size"');
  }
  function n(a, h, p) {
    return t(a), a <= 0 ? i(a) : h !== void 0 ? typeof p == "string" ? i(a).fill(h, p) : i(a).fill(h) : i(a);
  }
  e.alloc = function(a, h, p) {
    return n(a, h, p);
  };
  function c(a) {
    return t(a), i(a < 0 ? 0 : E(a) | 0);
  }
  e.allocUnsafe = function(a) {
    return c(a);
  }, e.allocUnsafeSlow = function(a) {
    return c(a);
  };
  function d(a, h) {
    if ((typeof h != "string" || h === "") && (h = "utf8"), !e.isEncoding(h)) throw new TypeError("Unknown encoding: " + h);
    let p = y(a, h) | 0, w = i(p), T = w.write(a, h);
    return T !== p && (w = w.slice(0, T)), w;
  }
  function g(a) {
    let h = a.length < 0 ? 0 : E(a.length) | 0, p = i(h);
    for (let w = 0; w < h; w += 1) p[w] = a[w] & 255;
    return p;
  }
  function b(a) {
    if (D(a, Uint8Array)) {
      let h = new Uint8Array(a);
      return m(h.buffer, h.byteOffset, h.byteLength);
    }
    return g(a);
  }
  function m(a, h, p) {
    if (h < 0 || a.byteLength < h) throw new RangeError('"offset" is outside of buffer bounds');
    if (a.byteLength < h + (p || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let w;
    return h === void 0 && p === void 0 ? w = new Uint8Array(a) : p === void 0 ? w = new Uint8Array(a, h) : w = new Uint8Array(a, h, p), Object.setPrototypeOf(w, e.prototype), w;
  }
  function _(a) {
    if (e.isBuffer(a)) {
      let h = E(a.length) | 0, p = i(h);
      return p.length === 0 || a.copy(p, 0, 0, h), p;
    }
    if (a.length !== void 0) return typeof a.length != "number" || oe(a.length) ? i(0) : g(a);
    if (a.type === "Buffer" && Array.isArray(a.data)) return g(a.data);
  }
  function E(a) {
    if (a >= l) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l.toString(16) + " bytes");
    return a | 0;
  }
  function I(a) {
    return +a != a && (a = 0), e.alloc(+a);
  }
  e.isBuffer = function(a) {
    return a != null && a._isBuffer === !0 && a !== e.prototype;
  }, e.compare = function(a, h) {
    if (D(a, Uint8Array) && (a = e.from(a, a.offset, a.byteLength)), D(h, Uint8Array) && (h = e.from(h, h.offset, h.byteLength)), !e.isBuffer(a) || !e.isBuffer(h)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === h) return 0;
    let p = a.length, w = h.length;
    for (let T = 0, L = Math.min(p, w); T < L; ++T) if (a[T] !== h[T]) {
      p = a[T], w = h[T];
      break;
    }
    return p < w ? -1 : w < p ? 1 : 0;
  }, e.isEncoding = function(a) {
    switch (String(a).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, e.concat = function(a, h) {
    if (!Array.isArray(a)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (a.length === 0) return e.alloc(0);
    let p;
    if (h === void 0) for (h = 0, p = 0; p < a.length; ++p) h += a[p].length;
    let w = e.allocUnsafe(h), T = 0;
    for (p = 0; p < a.length; ++p) {
      let L = a[p];
      if (D(L, Uint8Array)) T + L.length > w.length ? (e.isBuffer(L) || (L = e.from(L)), L.copy(w, T)) : Uint8Array.prototype.set.call(w, L, T);
      else if (e.isBuffer(L)) L.copy(w, T);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      T += L.length;
    }
    return w;
  };
  function y(a, h) {
    if (e.isBuffer(a)) return a.length;
    if (ArrayBuffer.isView(a) || D(a, ArrayBuffer)) return a.byteLength;
    if (typeof a != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof a);
    let p = a.length, w = arguments.length > 2 && arguments[2] === !0;
    if (!w && p === 0) return 0;
    let T = !1;
    for (; ; ) switch (h) {
      case "ascii":
      case "latin1":
      case "binary":
        return p;
      case "utf8":
      case "utf-8":
        return j(a).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return p * 2;
      case "hex":
        return p >>> 1;
      case "base64":
        return te(a).length;
      default:
        if (T) return w ? -1 : j(a).length;
        h = ("" + h).toLowerCase(), T = !0;
    }
  }
  e.byteLength = y;
  function v(a, h, p) {
    let w = !1;
    if ((h === void 0 || h < 0) && (h = 0), h > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, h >>>= 0, p <= h)) return "";
    for (a || (a = "utf8"); ; ) switch (a) {
      case "hex":
        return le(this, h, p);
      case "utf8":
      case "utf-8":
        return Q(this, h, p);
      case "ascii":
        return ge(this, h, p);
      case "latin1":
      case "binary":
        return de(this, h, p);
      case "base64":
        return R(this, h, p);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Ee(this, h, p);
      default:
        if (w) throw new TypeError("Unknown encoding: " + a);
        a = (a + "").toLowerCase(), w = !0;
    }
  }
  e.prototype._isBuffer = !0;
  function U(a, h, p) {
    let w = a[h];
    a[h] = a[p], a[p] = w;
  }
  e.prototype.swap16 = function() {
    let a = this.length;
    if (a % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let h = 0; h < a; h += 2) U(this, h, h + 1);
    return this;
  }, e.prototype.swap32 = function() {
    let a = this.length;
    if (a % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let h = 0; h < a; h += 4) U(this, h, h + 3), U(this, h + 1, h + 2);
    return this;
  }, e.prototype.swap64 = function() {
    let a = this.length;
    if (a % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let h = 0; h < a; h += 8) U(this, h, h + 7), U(this, h + 1, h + 6), U(this, h + 2, h + 5), U(this, h + 3, h + 4);
    return this;
  }, e.prototype.toString = function() {
    let a = this.length;
    return a === 0 ? "" : arguments.length === 0 ? Q(this, 0, a) : v.apply(this, arguments);
  }, e.prototype.toLocaleString = e.prototype.toString, e.prototype.equals = function(a) {
    if (!e.isBuffer(a)) throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : e.compare(this, a) === 0;
  }, e.prototype.inspect = function() {
    let a = "", h = Rt.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, h).replace(/(.{2})/g, "$1 ").trim(), this.length > h && (a += " ... "), "<Buffer " + a + ">";
  }, o && (e.prototype[o] = e.prototype.inspect), e.prototype.compare = function(a, h, p, w, T) {
    if (D(a, Uint8Array) && (a = e.from(a, a.offset, a.byteLength)), !e.isBuffer(a)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a);
    if (h === void 0 && (h = 0), p === void 0 && (p = a ? a.length : 0), w === void 0 && (w = 0), T === void 0 && (T = this.length), h < 0 || p > a.length || w < 0 || T > this.length) throw new RangeError("out of range index");
    if (w >= T && h >= p) return 0;
    if (w >= T) return -1;
    if (h >= p) return 1;
    if (h >>>= 0, p >>>= 0, w >>>= 0, T >>>= 0, this === a) return 0;
    let L = T - w, z = p - h, _e = Math.min(L, z), ve = this.slice(w, T), ke = a.slice(h, p);
    for (let xe = 0; xe < _e; ++xe) if (ve[xe] !== ke[xe]) {
      L = ve[xe], z = ke[xe];
      break;
    }
    return L < z ? -1 : z < L ? 1 : 0;
  };
  function B(a, h, p, w, T) {
    if (a.length === 0) return -1;
    if (typeof p == "string" ? (w = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, oe(p) && (p = T ? 0 : a.length - 1), p < 0 && (p = a.length + p), p >= a.length) {
      if (T) return -1;
      p = a.length - 1;
    } else if (p < 0) if (T) p = 0;
    else return -1;
    if (typeof h == "string" && (h = e.from(h, w)), e.isBuffer(h)) return h.length === 0 ? -1 : A(a, h, p, w, T);
    if (typeof h == "number") return h = h & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(a, h, p) : Uint8Array.prototype.lastIndexOf.call(a, h, p) : A(a, [h], p, w, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function A(a, h, p, w, T) {
    let L = 1, z = a.length, _e = h.length;
    if (w !== void 0 && (w = String(w).toLowerCase(), w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")) {
      if (a.length < 2 || h.length < 2) return -1;
      L = 2, z /= 2, _e /= 2, p /= 2;
    }
    function ve(xe, Re) {
      return L === 1 ? xe[Re] : xe.readUInt16BE(Re * L);
    }
    let ke;
    if (T) {
      let xe = -1;
      for (ke = p; ke < z; ke++) if (ve(a, ke) === ve(h, xe === -1 ? 0 : ke - xe)) {
        if (xe === -1 && (xe = ke), ke - xe + 1 === _e) return xe * L;
      } else xe !== -1 && (ke -= ke - xe), xe = -1;
    } else for (p + _e > z && (p = z - _e), ke = p; ke >= 0; ke--) {
      let xe = !0;
      for (let Re = 0; Re < _e; Re++) if (ve(a, ke + Re) !== ve(h, Re)) {
        xe = !1;
        break;
      }
      if (xe) return ke;
    }
    return -1;
  }
  e.prototype.includes = function(a, h, p) {
    return this.indexOf(a, h, p) !== -1;
  }, e.prototype.indexOf = function(a, h, p) {
    return B(this, a, h, p, !0);
  }, e.prototype.lastIndexOf = function(a, h, p) {
    return B(this, a, h, p, !1);
  };
  function k(a, h, p, w) {
    p = Number(p) || 0;
    let T = a.length - p;
    w ? (w = Number(w), w > T && (w = T)) : w = T;
    let L = h.length;
    w > L / 2 && (w = L / 2);
    let z;
    for (z = 0; z < w; ++z) {
      let _e = parseInt(h.substr(z * 2, 2), 16);
      if (oe(_e)) return z;
      a[p + z] = _e;
    }
    return z;
  }
  function M(a, h, p, w) {
    return ue(j(h, a.length - p), a, p, w);
  }
  function Y(a, h, p, w) {
    return ue(K(h), a, p, w);
  }
  function X(a, h, p, w) {
    return ue(te(h), a, p, w);
  }
  function ae(a, h, p, w) {
    return ue(re(h, a.length - p), a, p, w);
  }
  e.prototype.write = function(a, h, p, w) {
    if (h === void 0) w = "utf8", p = this.length, h = 0;
    else if (p === void 0 && typeof h == "string") w = h, p = this.length, h = 0;
    else if (isFinite(h)) h = h >>> 0, isFinite(p) ? (p = p >>> 0, w === void 0 && (w = "utf8")) : (w = p, p = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let T = this.length - h;
    if ((p === void 0 || p > T) && (p = T), a.length > 0 && (p < 0 || h < 0) || h > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    w || (w = "utf8");
    let L = !1;
    for (; ; ) switch (w) {
      case "hex":
        return k(this, a, h, p);
      case "utf8":
      case "utf-8":
        return M(this, a, h, p);
      case "ascii":
      case "latin1":
      case "binary":
        return Y(this, a, h, p);
      case "base64":
        return X(this, a, h, p);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ae(this, a, h, p);
      default:
        if (L) throw new TypeError("Unknown encoding: " + w);
        w = ("" + w).toLowerCase(), L = !0;
    }
  }, e.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function R(a, h, p) {
    return h === 0 && p === a.length ? s.fromByteArray(a) : s.fromByteArray(a.slice(h, p));
  }
  function Q(a, h, p) {
    p = Math.min(a.length, p);
    let w = [], T = h;
    for (; T < p; ) {
      let L = a[T], z = null, _e = L > 239 ? 4 : L > 223 ? 3 : L > 191 ? 2 : 1;
      if (T + _e <= p) {
        let ve, ke, xe, Re;
        switch (_e) {
          case 1:
            L < 128 && (z = L);
            break;
          case 2:
            ve = a[T + 1], (ve & 192) === 128 && (Re = (L & 31) << 6 | ve & 63, Re > 127 && (z = Re));
            break;
          case 3:
            ve = a[T + 1], ke = a[T + 2], (ve & 192) === 128 && (ke & 192) === 128 && (Re = (L & 15) << 12 | (ve & 63) << 6 | ke & 63, Re > 2047 && (Re < 55296 || Re > 57343) && (z = Re));
            break;
          case 4:
            ve = a[T + 1], ke = a[T + 2], xe = a[T + 3], (ve & 192) === 128 && (ke & 192) === 128 && (xe & 192) === 128 && (Re = (L & 15) << 18 | (ve & 63) << 12 | (ke & 63) << 6 | xe & 63, Re > 65535 && Re < 1114112 && (z = Re));
        }
      }
      z === null ? (z = 65533, _e = 1) : z > 65535 && (z -= 65536, w.push(z >>> 10 & 1023 | 55296), z = 56320 | z & 1023), w.push(z), T += _e;
    }
    return W(w);
  }
  let J = 4096;
  function W(a) {
    let h = a.length;
    if (h <= J) return String.fromCharCode.apply(String, a);
    let p = "", w = 0;
    for (; w < h; ) p += String.fromCharCode.apply(String, a.slice(w, w += J));
    return p;
  }
  function ge(a, h, p) {
    let w = "";
    p = Math.min(a.length, p);
    for (let T = h; T < p; ++T) w += String.fromCharCode(a[T] & 127);
    return w;
  }
  function de(a, h, p) {
    let w = "";
    p = Math.min(a.length, p);
    for (let T = h; T < p; ++T) w += String.fromCharCode(a[T]);
    return w;
  }
  function le(a, h, p) {
    let w = a.length;
    (!h || h < 0) && (h = 0), (!p || p < 0 || p > w) && (p = w);
    let T = "";
    for (let L = h; L < p; ++L) T += me[a[L]];
    return T;
  }
  function Ee(a, h, p) {
    let w = a.slice(h, p), T = "";
    for (let L = 0; L < w.length - 1; L += 2) T += String.fromCharCode(w[L] + w[L + 1] * 256);
    return T;
  }
  e.prototype.slice = function(a, h) {
    let p = this.length;
    a = ~~a, h = h === void 0 ? p : ~~h, a < 0 ? (a += p, a < 0 && (a = 0)) : a > p && (a = p), h < 0 ? (h += p, h < 0 && (h = 0)) : h > p && (h = p), h < a && (h = a);
    let w = this.subarray(a, h);
    return Object.setPrototypeOf(w, e.prototype), w;
  };
  function G(a, h, p) {
    if (a % 1 !== 0 || a < 0) throw new RangeError("offset is not uint");
    if (a + h > p) throw new RangeError("Trying to access beyond buffer length");
  }
  e.prototype.readUintLE = e.prototype.readUIntLE = function(a, h, p) {
    a = a >>> 0, h = h >>> 0, p || G(a, h, this.length);
    let w = this[a], T = 1, L = 0;
    for (; ++L < h && (T *= 256); ) w += this[a + L] * T;
    return w;
  }, e.prototype.readUintBE = e.prototype.readUIntBE = function(a, h, p) {
    a = a >>> 0, h = h >>> 0, p || G(a, h, this.length);
    let w = this[a + --h], T = 1;
    for (; h > 0 && (T *= 256); ) w += this[a + --h] * T;
    return w;
  }, e.prototype.readUint8 = e.prototype.readUInt8 = function(a, h) {
    return a = a >>> 0, h || G(a, 1, this.length), this[a];
  }, e.prototype.readUint16LE = e.prototype.readUInt16LE = function(a, h) {
    return a = a >>> 0, h || G(a, 2, this.length), this[a] | this[a + 1] << 8;
  }, e.prototype.readUint16BE = e.prototype.readUInt16BE = function(a, h) {
    return a = a >>> 0, h || G(a, 2, this.length), this[a] << 8 | this[a + 1];
  }, e.prototype.readUint32LE = e.prototype.readUInt32LE = function(a, h) {
    return a = a >>> 0, h || G(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
  }, e.prototype.readUint32BE = e.prototype.readUInt32BE = function(a, h) {
    return a = a >>> 0, h || G(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
  }, e.prototype.readBigUInt64LE = ee(function(a) {
    a = a >>> 0, H(a, "offset");
    let h = this[a], p = this[a + 7];
    (h === void 0 || p === void 0) && se(a, this.length - 8);
    let w = h + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, T = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + p * 2 ** 24;
    return BigInt(w) + (BigInt(T) << BigInt(32));
  }), e.prototype.readBigUInt64BE = ee(function(a) {
    a = a >>> 0, H(a, "offset");
    let h = this[a], p = this[a + 7];
    (h === void 0 || p === void 0) && se(a, this.length - 8);
    let w = h * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], T = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p;
    return (BigInt(w) << BigInt(32)) + BigInt(T);
  }), e.prototype.readIntLE = function(a, h, p) {
    a = a >>> 0, h = h >>> 0, p || G(a, h, this.length);
    let w = this[a], T = 1, L = 0;
    for (; ++L < h && (T *= 256); ) w += this[a + L] * T;
    return T *= 128, w >= T && (w -= Math.pow(2, 8 * h)), w;
  }, e.prototype.readIntBE = function(a, h, p) {
    a = a >>> 0, h = h >>> 0, p || G(a, h, this.length);
    let w = h, T = 1, L = this[a + --w];
    for (; w > 0 && (T *= 256); ) L += this[a + --w] * T;
    return T *= 128, L >= T && (L -= Math.pow(2, 8 * h)), L;
  }, e.prototype.readInt8 = function(a, h) {
    return a = a >>> 0, h || G(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
  }, e.prototype.readInt16LE = function(a, h) {
    a = a >>> 0, h || G(a, 2, this.length);
    let p = this[a] | this[a + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, e.prototype.readInt16BE = function(a, h) {
    a = a >>> 0, h || G(a, 2, this.length);
    let p = this[a + 1] | this[a] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, e.prototype.readInt32LE = function(a, h) {
    return a = a >>> 0, h || G(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
  }, e.prototype.readInt32BE = function(a, h) {
    return a = a >>> 0, h || G(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
  }, e.prototype.readBigInt64LE = ee(function(a) {
    a = a >>> 0, H(a, "offset");
    let h = this[a], p = this[a + 7];
    (h === void 0 || p === void 0) && se(a, this.length - 8);
    let w = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (p << 24);
    return (BigInt(w) << BigInt(32)) + BigInt(h + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
  }), e.prototype.readBigInt64BE = ee(function(a) {
    a = a >>> 0, H(a, "offset");
    let h = this[a], p = this[a + 7];
    (h === void 0 || p === void 0) && se(a, this.length - 8);
    let w = (h << 24) + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
    return (BigInt(w) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p);
  }), e.prototype.readFloatLE = function(a, h) {
    return a = a >>> 0, h || G(a, 4, this.length), u.read(this, a, !0, 23, 4);
  }, e.prototype.readFloatBE = function(a, h) {
    return a = a >>> 0, h || G(a, 4, this.length), u.read(this, a, !1, 23, 4);
  }, e.prototype.readDoubleLE = function(a, h) {
    return a = a >>> 0, h || G(a, 8, this.length), u.read(this, a, !0, 52, 8);
  }, e.prototype.readDoubleBE = function(a, h) {
    return a = a >>> 0, h || G(a, 8, this.length), u.read(this, a, !1, 52, 8);
  };
  function pe(a, h, p, w, T, L) {
    if (!e.isBuffer(a)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (h > T || h < L) throw new RangeError('"value" argument is out of bounds');
    if (p + w > a.length) throw new RangeError("Index out of range");
  }
  e.prototype.writeUintLE = e.prototype.writeUIntLE = function(a, h, p, w) {
    if (a = +a, h = h >>> 0, p = p >>> 0, !w) {
      let z = Math.pow(2, 8 * p) - 1;
      pe(this, a, h, p, z, 0);
    }
    let T = 1, L = 0;
    for (this[h] = a & 255; ++L < p && (T *= 256); ) this[h + L] = a / T & 255;
    return h + p;
  }, e.prototype.writeUintBE = e.prototype.writeUIntBE = function(a, h, p, w) {
    if (a = +a, h = h >>> 0, p = p >>> 0, !w) {
      let z = Math.pow(2, 8 * p) - 1;
      pe(this, a, h, p, z, 0);
    }
    let T = p - 1, L = 1;
    for (this[h + T] = a & 255; --T >= 0 && (L *= 256); ) this[h + T] = a / L & 255;
    return h + p;
  }, e.prototype.writeUint8 = e.prototype.writeUInt8 = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 1, 255, 0), this[h] = a & 255, h + 1;
  }, e.prototype.writeUint16LE = e.prototype.writeUInt16LE = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 2, 65535, 0), this[h] = a & 255, this[h + 1] = a >>> 8, h + 2;
  }, e.prototype.writeUint16BE = e.prototype.writeUInt16BE = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 2, 65535, 0), this[h] = a >>> 8, this[h + 1] = a & 255, h + 2;
  }, e.prototype.writeUint32LE = e.prototype.writeUInt32LE = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 4, 4294967295, 0), this[h + 3] = a >>> 24, this[h + 2] = a >>> 16, this[h + 1] = a >>> 8, this[h] = a & 255, h + 4;
  }, e.prototype.writeUint32BE = e.prototype.writeUInt32BE = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 4, 4294967295, 0), this[h] = a >>> 24, this[h + 1] = a >>> 16, this[h + 2] = a >>> 8, this[h + 3] = a & 255, h + 4;
  };
  function P(a, h, p, w, T) {
    q(h, w, T, a, p, 7);
    let L = Number(h & BigInt(4294967295));
    a[p++] = L, L = L >> 8, a[p++] = L, L = L >> 8, a[p++] = L, L = L >> 8, a[p++] = L;
    let z = Number(h >> BigInt(32) & BigInt(4294967295));
    return a[p++] = z, z = z >> 8, a[p++] = z, z = z >> 8, a[p++] = z, z = z >> 8, a[p++] = z, p;
  }
  function ie(a, h, p, w, T) {
    q(h, w, T, a, p, 7);
    let L = Number(h & BigInt(4294967295));
    a[p + 7] = L, L = L >> 8, a[p + 6] = L, L = L >> 8, a[p + 5] = L, L = L >> 8, a[p + 4] = L;
    let z = Number(h >> BigInt(32) & BigInt(4294967295));
    return a[p + 3] = z, z = z >> 8, a[p + 2] = z, z = z >> 8, a[p + 1] = z, z = z >> 8, a[p] = z, p + 8;
  }
  e.prototype.writeBigUInt64LE = ee(function(a, h = 0) {
    return P(this, a, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), e.prototype.writeBigUInt64BE = ee(function(a, h = 0) {
    return ie(this, a, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), e.prototype.writeIntLE = function(a, h, p, w) {
    if (a = +a, h = h >>> 0, !w) {
      let _e = Math.pow(2, 8 * p - 1);
      pe(this, a, h, p, _e - 1, -_e);
    }
    let T = 0, L = 1, z = 0;
    for (this[h] = a & 255; ++T < p && (L *= 256); ) a < 0 && z === 0 && this[h + T - 1] !== 0 && (z = 1), this[h + T] = (a / L >> 0) - z & 255;
    return h + p;
  }, e.prototype.writeIntBE = function(a, h, p, w) {
    if (a = +a, h = h >>> 0, !w) {
      let _e = Math.pow(2, 8 * p - 1);
      pe(this, a, h, p, _e - 1, -_e);
    }
    let T = p - 1, L = 1, z = 0;
    for (this[h + T] = a & 255; --T >= 0 && (L *= 256); ) a < 0 && z === 0 && this[h + T + 1] !== 0 && (z = 1), this[h + T] = (a / L >> 0) - z & 255;
    return h + p;
  }, e.prototype.writeInt8 = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[h] = a & 255, h + 1;
  }, e.prototype.writeInt16LE = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 2, 32767, -32768), this[h] = a & 255, this[h + 1] = a >>> 8, h + 2;
  }, e.prototype.writeInt16BE = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 2, 32767, -32768), this[h] = a >>> 8, this[h + 1] = a & 255, h + 2;
  }, e.prototype.writeInt32LE = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 4, 2147483647, -2147483648), this[h] = a & 255, this[h + 1] = a >>> 8, this[h + 2] = a >>> 16, this[h + 3] = a >>> 24, h + 4;
  }, e.prototype.writeInt32BE = function(a, h, p) {
    return a = +a, h = h >>> 0, p || pe(this, a, h, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[h] = a >>> 24, this[h + 1] = a >>> 16, this[h + 2] = a >>> 8, this[h + 3] = a & 255, h + 4;
  }, e.prototype.writeBigInt64LE = ee(function(a, h = 0) {
    return P(this, a, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), e.prototype.writeBigInt64BE = ee(function(a, h = 0) {
    return ie(this, a, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ye(a, h, p, w, T, L) {
    if (p + w > a.length) throw new RangeError("Index out of range");
    if (p < 0) throw new RangeError("Index out of range");
  }
  function F(a, h, p, w, T) {
    return h = +h, p = p >>> 0, T || ye(a, h, p, 4), u.write(a, h, p, w, 23, 4), p + 4;
  }
  e.prototype.writeFloatLE = function(a, h, p) {
    return F(this, a, h, !0, p);
  }, e.prototype.writeFloatBE = function(a, h, p) {
    return F(this, a, h, !1, p);
  };
  function Ie(a, h, p, w, T) {
    return h = +h, p = p >>> 0, T || ye(a, h, p, 8), u.write(a, h, p, w, 52, 8), p + 8;
  }
  e.prototype.writeDoubleLE = function(a, h, p) {
    return Ie(this, a, h, !0, p);
  }, e.prototype.writeDoubleBE = function(a, h, p) {
    return Ie(this, a, h, !1, p);
  }, e.prototype.copy = function(a, h, p, w) {
    if (!e.isBuffer(a)) throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !w && w !== 0 && (w = this.length), h >= a.length && (h = a.length), h || (h = 0), w > 0 && w < p && (w = p), w === p || a.length === 0 || this.length === 0) return 0;
    if (h < 0) throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length) throw new RangeError("Index out of range");
    if (w < 0) throw new RangeError("sourceEnd out of bounds");
    w > this.length && (w = this.length), a.length - h < w - p && (w = a.length - h + p);
    let T = w - p;
    return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(h, p, w) : Uint8Array.prototype.set.call(a, this.subarray(p, w), h), T;
  }, e.prototype.fill = function(a, h, p, w) {
    if (typeof a == "string") {
      if (typeof h == "string" ? (w = h, h = 0, p = this.length) : typeof p == "string" && (w = p, p = this.length), w !== void 0 && typeof w != "string") throw new TypeError("encoding must be a string");
      if (typeof w == "string" && !e.isEncoding(w)) throw new TypeError("Unknown encoding: " + w);
      if (a.length === 1) {
        let L = a.charCodeAt(0);
        (w === "utf8" && L < 128 || w === "latin1") && (a = L);
      }
    } else typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
    if (h < 0 || this.length < h || this.length < p) throw new RangeError("Out of range index");
    if (p <= h) return this;
    h = h >>> 0, p = p === void 0 ? this.length : p >>> 0, a || (a = 0);
    let T;
    if (typeof a == "number") for (T = h; T < p; ++T) this[T] = a;
    else {
      let L = e.isBuffer(a) ? a : e.from(a, w), z = L.length;
      if (z === 0) throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (T = 0; T < p - h; ++T) this[T + h] = L[T % z];
    }
    return this;
  };
  let V = {};
  function N(a, h, p) {
    V[a] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: h.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${a}]`, this.stack, delete this.name;
      }
      get code() {
        return a;
      }
      set code(w) {
        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: w, writable: !0 });
      }
      toString() {
        return `${this.name} [${a}]: ${this.message}`;
      }
    };
  }
  N("ERR_BUFFER_OUT_OF_BOUNDS", function(a) {
    return a ? `${a} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), N("ERR_INVALID_ARG_TYPE", function(a, h) {
    return `The "${a}" argument must be of type number. Received type ${typeof h}`;
  }, TypeError), N("ERR_OUT_OF_RANGE", function(a, h, p) {
    let w = `The value of "${a}" is out of range.`, T = p;
    return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? T = Z(String(p)) : typeof p == "bigint" && (T = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (T = Z(T)), T += "n"), w += ` It must be ${h}. Received ${T}`, w;
  }, RangeError);
  function Z(a) {
    let h = "", p = a.length, w = a[0] === "-" ? 1 : 0;
    for (; p >= w + 4; p -= 3) h = `_${a.slice(p - 3, p)}${h}`;
    return `${a.slice(0, p)}${h}`;
  }
  function $(a, h, p) {
    H(h, "offset"), (a[h] === void 0 || a[h + p] === void 0) && se(h, a.length - (p + 1));
  }
  function q(a, h, p, w, T, L) {
    if (a > p || a < h) {
      let z = typeof h == "bigint" ? "n" : "", _e;
      throw h === 0 || h === BigInt(0) ? _e = `>= 0${z} and < 2${z} ** ${(L + 1) * 8}${z}` : _e = `>= -(2${z} ** ${(L + 1) * 8 - 1}${z}) and < 2 ** ${(L + 1) * 8 - 1}${z}`, new V.ERR_OUT_OF_RANGE("value", _e, a);
    }
    $(w, T, L);
  }
  function H(a, h) {
    if (typeof a != "number") throw new V.ERR_INVALID_ARG_TYPE(h, "number", a);
  }
  function se(a, h, p) {
    throw Math.floor(a) !== a ? (H(a, p), new V.ERR_OUT_OF_RANGE("offset", "an integer", a)) : h < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${h}`, a);
  }
  let ne = /[^+/0-9A-Za-z-_]/g;
  function x(a) {
    if (a = a.split("=")[0], a = a.trim().replace(ne, ""), a.length < 2) return "";
    for (; a.length % 4 !== 0; ) a = a + "=";
    return a;
  }
  function j(a, h) {
    h = h || 1 / 0;
    let p, w = a.length, T = null, L = [];
    for (let z = 0; z < w; ++z) {
      if (p = a.charCodeAt(z), p > 55295 && p < 57344) {
        if (!T) {
          if (p > 56319) {
            (h -= 3) > -1 && L.push(239, 191, 189);
            continue;
          } else if (z + 1 === w) {
            (h -= 3) > -1 && L.push(239, 191, 189);
            continue;
          }
          T = p;
          continue;
        }
        if (p < 56320) {
          (h -= 3) > -1 && L.push(239, 191, 189), T = p;
          continue;
        }
        p = (T - 55296 << 10 | p - 56320) + 65536;
      } else T && (h -= 3) > -1 && L.push(239, 191, 189);
      if (T = null, p < 128) {
        if ((h -= 1) < 0) break;
        L.push(p);
      } else if (p < 2048) {
        if ((h -= 2) < 0) break;
        L.push(p >> 6 | 192, p & 63 | 128);
      } else if (p < 65536) {
        if ((h -= 3) < 0) break;
        L.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128);
      } else if (p < 1114112) {
        if ((h -= 4) < 0) break;
        L.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return L;
  }
  function K(a) {
    let h = [];
    for (let p = 0; p < a.length; ++p) h.push(a.charCodeAt(p) & 255);
    return h;
  }
  function re(a, h) {
    let p, w, T, L = [];
    for (let z = 0; z < a.length && !((h -= 2) < 0); ++z) p = a.charCodeAt(z), w = p >> 8, T = p % 256, L.push(T), L.push(w);
    return L;
  }
  function te(a) {
    return s.toByteArray(x(a));
  }
  function ue(a, h, p, w) {
    let T;
    for (T = 0; T < w && !(T + p >= h.length || T >= a.length); ++T) h[T + p] = a[T];
    return T;
  }
  function D(a, h) {
    return a instanceof h || a != null && a.constructor != null && a.constructor.name != null && a.constructor.name === h.name;
  }
  function oe(a) {
    return a !== a;
  }
  let me = function() {
    let a = "0123456789abcdef", h = new Array(256);
    for (let p = 0; p < 16; ++p) {
      let w = p * 16;
      for (let T = 0; T < 16; ++T) h[w + T] = a[p] + a[T];
    }
    return h;
  }();
  function ee(a) {
    return typeof BigInt > "u" ? Oe : a;
  }
  function Oe() {
    throw new Error("BigInt not supported");
  }
  return Rt;
}
var Xt, Xi, or, Zi, Rt, en, _t, Tr, mo, yo, Je = rt(() => {
  he(), fe(), ce(), Xt = {}, Xi = !1, or = {}, Zi = !1, Rt = {}, en = !1, _t = Ks(), _t.Buffer, _t.SlowBuffer, _t.INSPECT_MAX_BYTES, _t.kMaxLength, Tr = _t.Buffer, mo = _t.INSPECT_MAX_BYTES, yo = _t.kMaxLength;
}), fe = rt(() => {
  Je();
}), Ys = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = class {
    constructor(o) {
      this.aliasToTopic = {}, this.max = o;
    }
    put(o, l) {
      return l === 0 || l > this.max ? !1 : (this.aliasToTopic[l] = o, this.length = Object.keys(this.aliasToTopic).length, !0);
    }
    getTopicByAlias(o) {
      return this.aliasToTopic[o];
    }
    clear() {
      this.aliasToTopic = {};
    }
  };
  s.default = u;
}), Ge = be((s, u) => {
  he(), fe(), ce();
  var o = class extends Error {
    constructor(l) {
      if (!Array.isArray(l)) throw new TypeError(`Expected input to be an Array, got ${typeof l}`);
      let f = "";
      for (let i = 0; i < l.length; i++) f += `    ${l[i].stack}
`;
      super(f), this.name = "AggregateError", this.errors = l;
    }
  };
  u.exports = { AggregateError: o, ArrayIsArray(l) {
    return Array.isArray(l);
  }, ArrayPrototypeIncludes(l, f) {
    return l.includes(f);
  }, ArrayPrototypeIndexOf(l, f) {
    return l.indexOf(f);
  }, ArrayPrototypeJoin(l, f) {
    return l.join(f);
  }, ArrayPrototypeMap(l, f) {
    return l.map(f);
  }, ArrayPrototypePop(l, f) {
    return l.pop(f);
  }, ArrayPrototypePush(l, f) {
    return l.push(f);
  }, ArrayPrototypeSlice(l, f, i) {
    return l.slice(f, i);
  }, Error, FunctionPrototypeCall(l, f, ...i) {
    return l.call(f, ...i);
  }, FunctionPrototypeSymbolHasInstance(l, f) {
    return Function.prototype[Symbol.hasInstance].call(l, f);
  }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(l, f) {
    return Object.defineProperties(l, f);
  }, ObjectDefineProperty(l, f, i) {
    return Object.defineProperty(l, f, i);
  }, ObjectGetOwnPropertyDescriptor(l, f) {
    return Object.getOwnPropertyDescriptor(l, f);
  }, ObjectKeys(l) {
    return Object.keys(l);
  }, ObjectSetPrototypeOf(l, f) {
    return Object.setPrototypeOf(l, f);
  }, Promise, PromisePrototypeCatch(l, f) {
    return l.catch(f);
  }, PromisePrototypeThen(l, f, i) {
    return l.then(f, i);
  }, PromiseReject(l) {
    return Promise.reject(l);
  }, PromiseResolve(l) {
    return Promise.resolve(l);
  }, ReflectApply: Reflect.apply, RegExpPrototypeTest(l, f) {
    return l.test(f);
  }, SafeSet: Set, String, StringPrototypeSlice(l, f, i) {
    return l.slice(f, i);
  }, StringPrototypeToLowerCase(l) {
    return l.toLowerCase();
  }, StringPrototypeToUpperCase(l) {
    return l.toUpperCase();
  }, StringPrototypeTrim(l) {
    return l.trim();
  }, Symbol, SymbolFor: Symbol.for, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"), SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"), TypedArrayPrototypeSet(l, f, i) {
    return l.set(f, i);
  }, Boolean, Uint8Array };
}), wo = be((s, u) => {
  he(), fe(), ce(), u.exports = { format(o, ...l) {
    return o.replace(/%([sdifj])/g, function(...[f, i]) {
      let e = l.shift();
      return i === "f" ? e.toFixed(6) : i === "j" ? JSON.stringify(e) : i === "s" && typeof e == "object" ? `${e.constructor !== Object ? e.constructor.name : ""} {}`.trim() : e.toString();
    });
  }, inspect(o) {
    switch (typeof o) {
      case "string":
        if (o.includes("'")) if (o.includes('"')) {
          if (!o.includes("`") && !o.includes("${")) return `\`${o}\``;
        } else return `"${o}"`;
        return `'${o}'`;
      case "number":
        return isNaN(o) ? "NaN" : Object.is(o, -0) ? String(o) : o;
      case "bigint":
        return `${String(o)}n`;
      case "boolean":
      case "undefined":
        return String(o);
      case "object":
        return "{}";
    }
  } };
}), it = be((s, u) => {
  he(), fe(), ce();
  var { format: o, inspect: l } = wo(), { AggregateError: f } = Ge(), i = globalThis.AggregateError || f, e = Symbol("kIsNodeError"), r = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], t = /^([A-Z][a-z0-9]*)+$/, n = "__node_internal_", c = {};
  function d(y, v) {
    if (!y) throw new c.ERR_INTERNAL_ASSERTION(v);
  }
  function g(y) {
    let v = "", U = y.length, B = y[0] === "-" ? 1 : 0;
    for (; U >= B + 4; U -= 3) v = `_${y.slice(U - 3, U)}${v}`;
    return `${y.slice(0, U)}${v}`;
  }
  function b(y, v, U) {
    if (typeof v == "function") return d(v.length <= U.length, `Code: ${y}; The provided arguments length (${U.length}) does not match the required ones (${v.length}).`), v(...U);
    let B = (v.match(/%[dfijoOs]/g) || []).length;
    return d(B === U.length, `Code: ${y}; The provided arguments length (${U.length}) does not match the required ones (${B}).`), U.length === 0 ? v : o(v, ...U);
  }
  function m(y, v, U) {
    U || (U = Error);
    class B extends U {
      constructor(...k) {
        super(b(y, v, k));
      }
      toString() {
        return `${this.name} [${y}]: ${this.message}`;
      }
    }
    Object.defineProperties(B.prototype, { name: { value: U.name, writable: !0, enumerable: !1, configurable: !0 }, toString: { value() {
      return `${this.name} [${y}]: ${this.message}`;
    }, writable: !0, enumerable: !1, configurable: !0 } }), B.prototype.code = y, B.prototype[e] = !0, c[y] = B;
  }
  function _(y) {
    let v = n + y.name;
    return Object.defineProperty(y, "name", { value: v }), y;
  }
  function E(y, v) {
    if (y && v && y !== v) {
      if (Array.isArray(v.errors)) return v.errors.push(y), v;
      let U = new i([v, y], v.message);
      return U.code = v.code, U;
    }
    return y || v;
  }
  var I = class extends Error {
    constructor(y = "The operation was aborted", v = void 0) {
      if (v !== void 0 && typeof v != "object") throw new c.ERR_INVALID_ARG_TYPE("options", "Object", v);
      super(y, v), this.code = "ABORT_ERR", this.name = "AbortError";
    }
  };
  m("ERR_ASSERTION", "%s", Error), m("ERR_INVALID_ARG_TYPE", (y, v, U) => {
    d(typeof y == "string", "'name' must be a string"), Array.isArray(v) || (v = [v]);
    let B = "The ";
    y.endsWith(" argument") ? B += `${y} ` : B += `"${y}" ${y.includes(".") ? "property" : "argument"} `, B += "must be ";
    let A = [], k = [], M = [];
    for (let X of v) d(typeof X == "string", "All expected entries have to be of type string"), r.includes(X) ? A.push(X.toLowerCase()) : t.test(X) ? k.push(X) : (d(X !== "object", 'The value "object" should be written as "Object"'), M.push(X));
    if (k.length > 0) {
      let X = A.indexOf("object");
      X !== -1 && (A.splice(A, X, 1), k.push("Object"));
    }
    if (A.length > 0) {
      switch (A.length) {
        case 1:
          B += `of type ${A[0]}`;
          break;
        case 2:
          B += `one of type ${A[0]} or ${A[1]}`;
          break;
        default: {
          let X = A.pop();
          B += `one of type ${A.join(", ")}, or ${X}`;
        }
      }
      (k.length > 0 || M.length > 0) && (B += " or ");
    }
    if (k.length > 0) {
      switch (k.length) {
        case 1:
          B += `an instance of ${k[0]}`;
          break;
        case 2:
          B += `an instance of ${k[0]} or ${k[1]}`;
          break;
        default: {
          let X = k.pop();
          B += `an instance of ${k.join(", ")}, or ${X}`;
        }
      }
      M.length > 0 && (B += " or ");
    }
    switch (M.length) {
      case 0:
        break;
      case 1:
        M[0].toLowerCase() !== M[0] && (B += "an "), B += `${M[0]}`;
        break;
      case 2:
        B += `one of ${M[0]} or ${M[1]}`;
        break;
      default: {
        let X = M.pop();
        B += `one of ${M.join(", ")}, or ${X}`;
      }
    }
    if (U == null) B += `. Received ${U}`;
    else if (typeof U == "function" && U.name) B += `. Received function ${U.name}`;
    else if (typeof U == "object") {
      var Y;
      if ((Y = U.constructor) !== null && Y !== void 0 && Y.name) B += `. Received an instance of ${U.constructor.name}`;
      else {
        let X = l(U, { depth: -1 });
        B += `. Received ${X}`;
      }
    } else {
      let X = l(U, { colors: !1 });
      X.length > 25 && (X = `${X.slice(0, 25)}...`), B += `. Received type ${typeof U} (${X})`;
    }
    return B;
  }, TypeError), m("ERR_INVALID_ARG_VALUE", (y, v, U = "is invalid") => {
    let B = l(v);
    return B.length > 128 && (B = B.slice(0, 128) + "..."), `The ${y.includes(".") ? "property" : "argument"} '${y}' ${U}. Received ${B}`;
  }, TypeError), m("ERR_INVALID_RETURN_VALUE", (y, v, U) => {
    var B;
    let A = U != null && (B = U.constructor) !== null && B !== void 0 && B.name ? `instance of ${U.constructor.name}` : `type ${typeof U}`;
    return `Expected ${y} to be returned from the "${v}" function but got ${A}.`;
  }, TypeError), m("ERR_MISSING_ARGS", (...y) => {
    d(y.length > 0, "At least one arg needs to be specified");
    let v, U = y.length;
    switch (y = (Array.isArray(y) ? y : [y]).map((B) => `"${B}"`).join(" or "), U) {
      case 1:
        v += `The ${y[0]} argument`;
        break;
      case 2:
        v += `The ${y[0]} and ${y[1]} arguments`;
        break;
      default:
        {
          let B = y.pop();
          v += `The ${y.join(", ")}, and ${B} arguments`;
        }
        break;
    }
    return `${v} must be specified`;
  }, TypeError), m("ERR_OUT_OF_RANGE", (y, v, U) => {
    d(v, 'Missing "range" argument');
    let B;
    if (Number.isInteger(U) && Math.abs(U) > 2 ** 32) B = g(String(U));
    else if (typeof U == "bigint") {
      B = String(U);
      let A = BigInt(2) ** BigInt(32);
      (U > A || U < -A) && (B = g(B)), B += "n";
    } else B = l(U);
    return `The value of "${y}" is out of range. It must be ${v}. Received ${B}`;
  }, RangeError), m("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), m("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), m("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), m("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), m("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), m("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), m("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), m("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), m("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), m("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), m("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), u.exports = { AbortError: I, aggregateTwoErrors: _(E), hideStackFrames: _, codes: c };
}), ur = be((s, u) => {
  he(), fe(), ce();
  var { AbortController: o, AbortSignal: l } = typeof self < "u" ? self : typeof window < "u" ? window : void 0;
  u.exports = o, u.exports.AbortSignal = l, u.exports.default = o;
});
function Ue() {
  Ue.init.call(this);
}
function _r(s) {
  if (typeof s != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof s);
}
function _o(s) {
  return s._maxListeners === void 0 ? Ue.defaultMaxListeners : s._maxListeners;
}
function Rn(s, u, o, l) {
  var f, i, e, r;
  if (_r(o), (i = s._events) === void 0 ? (i = s._events = /* @__PURE__ */ Object.create(null), s._eventsCount = 0) : (i.newListener !== void 0 && (s.emit("newListener", u, o.listener ? o.listener : o), i = s._events), e = i[u]), e === void 0) e = i[u] = o, ++s._eventsCount;
  else if (typeof e == "function" ? e = i[u] = l ? [o, e] : [e, o] : l ? e.unshift(o) : e.push(o), (f = _o(s)) > 0 && e.length > f && !e.warned) {
    e.warned = !0;
    var t = new Error("Possible EventEmitter memory leak detected. " + e.length + " " + String(u) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    t.name = "MaxListenersExceededWarning", t.emitter = s, t.type = u, t.count = e.length, r = t, console && console.warn && console.warn(r);
  }
  return s;
}
function Js() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Pn(s, u, o) {
  var l = { fired: !1, wrapFn: void 0, target: s, type: u, listener: o }, f = Js.bind(l);
  return f.listener = o, l.wrapFn = f, f;
}
function xn(s, u, o) {
  var l = s._events;
  if (l === void 0) return [];
  var f = l[u];
  return f === void 0 ? [] : typeof f == "function" ? o ? [f.listener || f] : [f] : o ? function(i) {
    for (var e = new Array(i.length), r = 0; r < e.length; ++r) e[r] = i[r].listener || i[r];
    return e;
  }(f) : vo(f, f.length);
}
function Bn(s) {
  var u = this._events;
  if (u !== void 0) {
    var o = u[s];
    if (typeof o == "function") return 1;
    if (o !== void 0) return o.length;
  }
  return 0;
}
function vo(s, u) {
  for (var o = new Array(u), l = 0; l < u; ++l) o[l] = s[l];
  return o;
}
var Mn, Nn, Dt, Dr, Fr, Wr, at, Ln = rt(() => {
  he(), fe(), ce(), Dt = typeof Reflect == "object" ? Reflect : null, Dr = Dt && typeof Dt.apply == "function" ? Dt.apply : function(s, u, o) {
    return Function.prototype.apply.call(s, u, o);
  }, Nn = Dt && typeof Dt.ownKeys == "function" ? Dt.ownKeys : Object.getOwnPropertySymbols ? function(s) {
    return Object.getOwnPropertyNames(s).concat(Object.getOwnPropertySymbols(s));
  } : function(s) {
    return Object.getOwnPropertyNames(s);
  }, Fr = Number.isNaN || function(s) {
    return s != s;
  }, Mn = Ue, Ue.EventEmitter = Ue, Ue.prototype._events = void 0, Ue.prototype._eventsCount = 0, Ue.prototype._maxListeners = void 0, Wr = 10, Object.defineProperty(Ue, "defaultMaxListeners", { enumerable: !0, get: function() {
    return Wr;
  }, set: function(s) {
    if (typeof s != "number" || s < 0 || Fr(s)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + s + ".");
    Wr = s;
  } }), Ue.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, Ue.prototype.setMaxListeners = function(s) {
    if (typeof s != "number" || s < 0 || Fr(s)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + s + ".");
    return this._maxListeners = s, this;
  }, Ue.prototype.getMaxListeners = function() {
    return _o(this);
  }, Ue.prototype.emit = function(s) {
    for (var u = [], o = 1; o < arguments.length; o++) u.push(arguments[o]);
    var l = s === "error", f = this._events;
    if (f !== void 0) l = l && f.error === void 0;
    else if (!l) return !1;
    if (l) {
      var i;
      if (u.length > 0 && (i = u[0]), i instanceof Error) throw i;
      var e = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
      throw e.context = i, e;
    }
    var r = f[s];
    if (r === void 0) return !1;
    if (typeof r == "function") Dr(r, this, u);
    else {
      var t = r.length, n = vo(r, t);
      for (o = 0; o < t; ++o) Dr(n[o], this, u);
    }
    return !0;
  }, Ue.prototype.addListener = function(s, u) {
    return Rn(this, s, u, !1);
  }, Ue.prototype.on = Ue.prototype.addListener, Ue.prototype.prependListener = function(s, u) {
    return Rn(this, s, u, !0);
  }, Ue.prototype.once = function(s, u) {
    return _r(u), this.on(s, Pn(this, s, u)), this;
  }, Ue.prototype.prependOnceListener = function(s, u) {
    return _r(u), this.prependListener(s, Pn(this, s, u)), this;
  }, Ue.prototype.removeListener = function(s, u) {
    var o, l, f, i, e;
    if (_r(u), (l = this._events) === void 0) return this;
    if ((o = l[s]) === void 0) return this;
    if (o === u || o.listener === u) --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete l[s], l.removeListener && this.emit("removeListener", s, o.listener || u));
    else if (typeof o != "function") {
      for (f = -1, i = o.length - 1; i >= 0; i--) if (o[i] === u || o[i].listener === u) {
        e = o[i].listener, f = i;
        break;
      }
      if (f < 0) return this;
      f === 0 ? o.shift() : function(r, t) {
        for (; t + 1 < r.length; t++) r[t] = r[t + 1];
        r.pop();
      }(o, f), o.length === 1 && (l[s] = o[0]), l.removeListener !== void 0 && this.emit("removeListener", s, e || u);
    }
    return this;
  }, Ue.prototype.off = Ue.prototype.removeListener, Ue.prototype.removeAllListeners = function(s) {
    var u, o, l;
    if ((o = this._events) === void 0) return this;
    if (o.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : o[s] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete o[s]), this;
    if (arguments.length === 0) {
      var f, i = Object.keys(o);
      for (l = 0; l < i.length; ++l) (f = i[l]) !== "removeListener" && this.removeAllListeners(f);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (u = o[s]) == "function") this.removeListener(s, u);
    else if (u !== void 0) for (l = u.length - 1; l >= 0; l--) this.removeListener(s, u[l]);
    return this;
  }, Ue.prototype.listeners = function(s) {
    return xn(this, s, !0);
  }, Ue.prototype.rawListeners = function(s) {
    return xn(this, s, !1);
  }, Ue.listenerCount = function(s, u) {
    return typeof s.listenerCount == "function" ? s.listenerCount(u) : Bn.call(s, u);
  }, Ue.prototype.listenerCount = Bn, Ue.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Nn(this._events) : [];
  }, at = Mn, at.EventEmitter, at.defaultMaxListeners, at.init, at.listenerCount, at.EventEmitter, at.defaultMaxListeners, at.init, at.listenerCount;
}), Nt = {};
Zt(Nt, { EventEmitter: () => Eo, default: () => at, defaultMaxListeners: () => So, init: () => Ao, listenerCount: () => Io, on: () => To, once: () => ko });
var Eo, So, Ao, Io, To, ko, Qt = rt(() => {
  he(), fe(), ce(), Ln(), Ln(), at.once = function(s, u) {
    return new Promise((o, l) => {
      function f(...e) {
        i !== void 0 && s.removeListener("error", i), o(e);
      }
      let i;
      u !== "error" && (i = (e) => {
        s.removeListener(name, f), l(e);
      }, s.once("error", i)), s.once(u, f);
    });
  }, at.on = function(s, u) {
    let o = [], l = [], f = null, i = !1, e = { async next() {
      let n = o.shift();
      if (n) return createIterResult(n, !1);
      if (f) {
        let c = Promise.reject(f);
        return f = null, c;
      }
      return i ? createIterResult(void 0, !0) : new Promise((c, d) => l.push({ resolve: c, reject: d }));
    }, async return() {
      s.removeListener(u, r), s.removeListener("error", t), i = !0;
      for (let n of l) n.resolve(createIterResult(void 0, !0));
      return createIterResult(void 0, !0);
    }, throw(n) {
      f = n, s.removeListener(u, r), s.removeListener("error", t);
    }, [Symbol.asyncIterator]() {
      return this;
    } };
    return s.on(u, r), s.on("error", t), e;
    function r(...n) {
      let c = l.shift();
      c ? c.resolve(createIterResult(n, !1)) : o.push(n);
    }
    function t(n) {
      i = !0;
      let c = l.shift();
      c ? c.reject(n) : f = n, e.return();
    }
  }, { EventEmitter: Eo, defaultMaxListeners: So, init: Ao, listenerCount: Io, on: To, once: ko } = at;
}), ot = be((s, u) => {
  he(), fe(), ce();
  var o = (Je(), je(Ye)), { format: l, inspect: f } = wo(), { codes: { ERR_INVALID_ARG_TYPE: i } } = it(), { kResistStopPropagation: e, AggregateError: r, SymbolDispose: t } = Ge(), n = globalThis.AbortSignal || ur().AbortSignal, c = globalThis.AbortController || ur().AbortController, d = Object.getPrototypeOf(async function() {
  }).constructor, g = globalThis.Blob || o.Blob, b = typeof g < "u" ? function(E) {
    return E instanceof g;
  } : function(E) {
    return !1;
  }, m = (E, I) => {
    if (E !== void 0 && (E === null || typeof E != "object" || !("aborted" in E))) throw new i(I, "AbortSignal", E);
  }, _ = (E, I) => {
    if (typeof E != "function") throw new i(I, "Function", E);
  };
  u.exports = { AggregateError: r, kEmptyObject: Object.freeze({}), once(E) {
    let I = !1;
    return function(...y) {
      I || (I = !0, E.apply(this, y));
    };
  }, createDeferredPromise: function() {
    let E, I;
    return { promise: new Promise((y, v) => {
      E = y, I = v;
    }), resolve: E, reject: I };
  }, promisify(E) {
    return new Promise((I, y) => {
      E((v, ...U) => v ? y(v) : I(...U));
    });
  }, debuglog() {
    return function() {
    };
  }, format: l, inspect: f, types: { isAsyncFunction(E) {
    return E instanceof d;
  }, isArrayBufferView(E) {
    return ArrayBuffer.isView(E);
  } }, isBlob: b, deprecate(E, I) {
    return E;
  }, addAbortListener: (Qt(), je(Nt)).addAbortListener || function(E, I) {
    if (E === void 0) throw new i("signal", "AbortSignal", E);
    m(E, "signal"), _(I, "listener");
    let y;
    return E.aborted ? queueMicrotask(() => I()) : (E.addEventListener("abort", I, { __proto__: null, once: !0, [e]: !0 }), y = () => {
      E.removeEventListener("abort", I);
    }), { __proto__: null, [t]() {
      var v;
      (v = y) === null || v === void 0 || v();
    } };
  }, AbortSignalAny: n.any || function(E) {
    if (E.length === 1) return E[0];
    let I = new c(), y = () => I.abort();
    return E.forEach((v) => {
      m(v, "signals"), v.addEventListener("abort", y, { once: !0 });
    }), I.signal.addEventListener("abort", () => {
      E.forEach((v) => v.removeEventListener("abort", y));
    }, { once: !0 }), I.signal;
  } }, u.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
}), hr = be((s, u) => {
  he(), fe(), ce();
  var { ArrayIsArray: o, ArrayPrototypeIncludes: l, ArrayPrototypeJoin: f, ArrayPrototypeMap: i, NumberIsInteger: e, NumberIsNaN: r, NumberMAX_SAFE_INTEGER: t, NumberMIN_SAFE_INTEGER: n, NumberParseInt: c, ObjectPrototypeHasOwnProperty: d, RegExpPrototypeExec: g, String: b, StringPrototypeToUpperCase: m, StringPrototypeTrim: _ } = Ge(), { hideStackFrames: E, codes: { ERR_SOCKET_BAD_PORT: I, ERR_INVALID_ARG_TYPE: y, ERR_INVALID_ARG_VALUE: v, ERR_OUT_OF_RANGE: U, ERR_UNKNOWN_SIGNAL: B } } = it(), { normalizeEncoding: A } = ot(), { isAsyncFunction: k, isArrayBufferView: M } = ot().types, Y = {};
  function X(D) {
    return D === (D | 0);
  }
  function ae(D) {
    return D === D >>> 0;
  }
  var R = /^[0-7]+$/, Q = "must be a 32-bit unsigned integer or an octal string";
  function J(D, oe, me) {
    if (typeof D > "u" && (D = me), typeof D == "string") {
      if (g(R, D) === null) throw new v(oe, D, Q);
      D = c(D, 8);
    }
    return de(D, oe), D;
  }
  var W = E((D, oe, me = n, ee = t) => {
    if (typeof D != "number") throw new y(oe, "number", D);
    if (!e(D)) throw new U(oe, "an integer", D);
    if (D < me || D > ee) throw new U(oe, `>= ${me} && <= ${ee}`, D);
  }), ge = E((D, oe, me = -2147483648, ee = 2147483647) => {
    if (typeof D != "number") throw new y(oe, "number", D);
    if (!e(D)) throw new U(oe, "an integer", D);
    if (D < me || D > ee) throw new U(oe, `>= ${me} && <= ${ee}`, D);
  }), de = E((D, oe, me = !1) => {
    if (typeof D != "number") throw new y(oe, "number", D);
    if (!e(D)) throw new U(oe, "an integer", D);
    let ee = me ? 1 : 0, Oe = 4294967295;
    if (D < ee || D > Oe) throw new U(oe, `>= ${ee} && <= ${Oe}`, D);
  });
  function le(D, oe) {
    if (typeof D != "string") throw new y(oe, "string", D);
  }
  function Ee(D, oe, me = void 0, ee) {
    if (typeof D != "number") throw new y(oe, "number", D);
    if (me != null && D < me || ee != null && D > ee || (me != null || ee != null) && r(D)) throw new U(oe, `${me != null ? `>= ${me}` : ""}${me != null && ee != null ? " && " : ""}${ee != null ? `<= ${ee}` : ""}`, D);
  }
  var G = E((D, oe, me) => {
    if (!l(me, D)) {
      let ee = "must be one of: " + f(i(me, (Oe) => typeof Oe == "string" ? `'${Oe}'` : b(Oe)), ", ");
      throw new v(oe, D, ee);
    }
  });
  function pe(D, oe) {
    if (typeof D != "boolean") throw new y(oe, "boolean", D);
  }
  function P(D, oe, me) {
    return D == null || !d(D, oe) ? me : D[oe];
  }
  var ie = E((D, oe, me = null) => {
    let ee = P(me, "allowArray", !1), Oe = P(me, "allowFunction", !1);
    if (!P(me, "nullable", !1) && D === null || !ee && o(D) || typeof D != "object" && (!Oe || typeof D != "function")) throw new y(oe, "Object", D);
  }), ye = E((D, oe) => {
    if (D != null && typeof D != "object" && typeof D != "function") throw new y(oe, "a dictionary", D);
  }), F = E((D, oe, me = 0) => {
    if (!o(D)) throw new y(oe, "Array", D);
    if (D.length < me) {
      let ee = `must be longer than ${me}`;
      throw new v(oe, D, ee);
    }
  });
  function Ie(D, oe) {
    F(D, oe);
    for (let me = 0; me < D.length; me++) le(D[me], `${oe}[${me}]`);
  }
  function V(D, oe) {
    F(D, oe);
    for (let me = 0; me < D.length; me++) pe(D[me], `${oe}[${me}]`);
  }
  function N(D, oe) {
    F(D, oe);
    for (let me = 0; me < D.length; me++) {
      let ee = D[me], Oe = `${oe}[${me}]`;
      if (ee == null) throw new y(Oe, "AbortSignal", ee);
      se(ee, Oe);
    }
  }
  function Z(D, oe = "signal") {
    if (le(D, oe), Y[D] === void 0) throw Y[m(D)] !== void 0 ? new B(D + " (signals must use all capital letters)") : new B(D);
  }
  var $ = E((D, oe = "buffer") => {
    if (!M(D)) throw new y(oe, ["Buffer", "TypedArray", "DataView"], D);
  });
  function q(D, oe) {
    let me = A(oe), ee = D.length;
    if (me === "hex" && ee % 2 !== 0) throw new v("encoding", oe, `is invalid for data of length ${ee}`);
  }
  function H(D, oe = "Port", me = !0) {
    if (typeof D != "number" && typeof D != "string" || typeof D == "string" && _(D).length === 0 || +D !== +D >>> 0 || D > 65535 || D === 0 && !me) throw new I(oe, D, me);
    return D | 0;
  }
  var se = E((D, oe) => {
    if (D !== void 0 && (D === null || typeof D != "object" || !("aborted" in D))) throw new y(oe, "AbortSignal", D);
  }), ne = E((D, oe) => {
    if (typeof D != "function") throw new y(oe, "Function", D);
  }), x = E((D, oe) => {
    if (typeof D != "function" || k(D)) throw new y(oe, "Function", D);
  }), j = E((D, oe) => {
    if (D !== void 0) throw new y(oe, "undefined", D);
  });
  function K(D, oe, me) {
    if (!l(me, D)) throw new y(oe, `('${f(me, "|")}')`, D);
  }
  var re = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
  function te(D, oe) {
    if (typeof D > "u" || !g(re, D)) throw new v(oe, D, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  function ue(D) {
    if (typeof D == "string") return te(D, "hints"), D;
    if (o(D)) {
      let oe = D.length, me = "";
      if (oe === 0) return me;
      for (let ee = 0; ee < oe; ee++) {
        let Oe = D[ee];
        te(Oe, "hints"), me += Oe, ee !== oe - 1 && (me += ", ");
      }
      return me;
    }
    throw new v("hints", D, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  u.exports = { isInt32: X, isUint32: ae, parseFileMode: J, validateArray: F, validateStringArray: Ie, validateBooleanArray: V, validateAbortSignalArray: N, validateBoolean: pe, validateBuffer: $, validateDictionary: ye, validateEncoding: q, validateFunction: ne, validateInt32: ge, validateInteger: W, validateNumber: Ee, validateObject: ie, validateOneOf: G, validatePlainFunction: x, validatePort: H, validateSignalName: Z, validateString: le, validateUint32: de, validateUndefined: j, validateUnion: K, validateAbortSignal: se, validateLinkHeaderValue: ue };
}), Kt = be((s, u) => {
  he(), fe(), ce();
  var o = u.exports = {}, l, f;
  function i() {
    throw new Error("setTimeout has not been defined");
  }
  function e() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? l = setTimeout : l = i;
    } catch {
      l = i;
    }
    try {
      typeof clearTimeout == "function" ? f = clearTimeout : f = e;
    } catch {
      f = e;
    }
  })();
  function r(I) {
    if (l === setTimeout) return setTimeout(I, 0);
    if ((l === i || !l) && setTimeout) return l = setTimeout, setTimeout(I, 0);
    try {
      return l(I, 0);
    } catch {
      try {
        return l.call(null, I, 0);
      } catch {
        return l.call(this, I, 0);
      }
    }
  }
  function t(I) {
    if (f === clearTimeout) return clearTimeout(I);
    if ((f === e || !f) && clearTimeout) return f = clearTimeout, clearTimeout(I);
    try {
      return f(I);
    } catch {
      try {
        return f.call(null, I);
      } catch {
        return f.call(this, I);
      }
    }
  }
  var n = [], c = !1, d, g = -1;
  function b() {
    !c || !d || (c = !1, d.length ? n = d.concat(n) : g = -1, n.length && m());
  }
  function m() {
    if (!c) {
      var I = r(b);
      c = !0;
      for (var y = n.length; y; ) {
        for (d = n, n = []; ++g < y; ) d && d[g].run();
        g = -1, y = n.length;
      }
      d = null, c = !1, t(I);
    }
  }
  o.nextTick = function(I) {
    var y = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var v = 1; v < arguments.length; v++) y[v - 1] = arguments[v];
    n.push(new _(I, y)), n.length === 1 && !c && r(m);
  };
  function _(I, y) {
    this.fun = I, this.array = y;
  }
  _.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {};
  function E() {
  }
  o.on = E, o.addListener = E, o.once = E, o.off = E, o.removeListener = E, o.removeAllListeners = E, o.emit = E, o.prependListener = E, o.prependOnceListener = E, o.listeners = function(I) {
    return [];
  }, o.binding = function(I) {
    throw new Error("process.binding is not supported");
  }, o.cwd = function() {
    return "/";
  }, o.chdir = function(I) {
    throw new Error("process.chdir is not supported");
  }, o.umask = function() {
    return 0;
  };
}), Tt = be((s, u) => {
  he(), fe(), ce();
  var { SymbolAsyncIterator: o, SymbolIterator: l, SymbolFor: f } = Ge(), i = f("nodejs.stream.destroyed"), e = f("nodejs.stream.errored"), r = f("nodejs.stream.readable"), t = f("nodejs.stream.writable"), n = f("nodejs.stream.disturbed"), c = f("nodejs.webstream.isClosedPromise"), d = f("nodejs.webstream.controllerErrorFunction");
  function g(P, ie = !1) {
    var ye;
    return !!(P && typeof P.pipe == "function" && typeof P.on == "function" && (!ie || typeof P.pause == "function" && typeof P.resume == "function") && (!P._writableState || ((ye = P._readableState) === null || ye === void 0 ? void 0 : ye.readable) !== !1) && (!P._writableState || P._readableState));
  }
  function b(P) {
    var ie;
    return !!(P && typeof P.write == "function" && typeof P.on == "function" && (!P._readableState || ((ie = P._writableState) === null || ie === void 0 ? void 0 : ie.writable) !== !1));
  }
  function m(P) {
    return !!(P && typeof P.pipe == "function" && P._readableState && typeof P.on == "function" && typeof P.write == "function");
  }
  function _(P) {
    return P && (P._readableState || P._writableState || typeof P.write == "function" && typeof P.on == "function" || typeof P.pipe == "function" && typeof P.on == "function");
  }
  function E(P) {
    return !!(P && !_(P) && typeof P.pipeThrough == "function" && typeof P.getReader == "function" && typeof P.cancel == "function");
  }
  function I(P) {
    return !!(P && !_(P) && typeof P.getWriter == "function" && typeof P.abort == "function");
  }
  function y(P) {
    return !!(P && !_(P) && typeof P.readable == "object" && typeof P.writable == "object");
  }
  function v(P) {
    return E(P) || I(P) || y(P);
  }
  function U(P, ie) {
    return P == null ? !1 : ie === !0 ? typeof P[o] == "function" : ie === !1 ? typeof P[l] == "function" : typeof P[o] == "function" || typeof P[l] == "function";
  }
  function B(P) {
    if (!_(P)) return null;
    let ie = P._writableState, ye = P._readableState, F = ie || ye;
    return !!(P.destroyed || P[i] || F != null && F.destroyed);
  }
  function A(P) {
    if (!b(P)) return null;
    if (P.writableEnded === !0) return !0;
    let ie = P._writableState;
    return ie != null && ie.errored ? !1 : typeof (ie == null ? void 0 : ie.ended) != "boolean" ? null : ie.ended;
  }
  function k(P, ie) {
    if (!b(P)) return null;
    if (P.writableFinished === !0) return !0;
    let ye = P._writableState;
    return ye != null && ye.errored ? !1 : typeof (ye == null ? void 0 : ye.finished) != "boolean" ? null : !!(ye.finished || ie === !1 && ye.ended === !0 && ye.length === 0);
  }
  function M(P) {
    if (!g(P)) return null;
    if (P.readableEnded === !0) return !0;
    let ie = P._readableState;
    return !ie || ie.errored ? !1 : typeof (ie == null ? void 0 : ie.ended) != "boolean" ? null : ie.ended;
  }
  function Y(P, ie) {
    if (!g(P)) return null;
    let ye = P._readableState;
    return ye != null && ye.errored ? !1 : typeof (ye == null ? void 0 : ye.endEmitted) != "boolean" ? null : !!(ye.endEmitted || ie === !1 && ye.ended === !0 && ye.length === 0);
  }
  function X(P) {
    return P && P[r] != null ? P[r] : typeof (P == null ? void 0 : P.readable) != "boolean" ? null : B(P) ? !1 : g(P) && P.readable && !Y(P);
  }
  function ae(P) {
    return P && P[t] != null ? P[t] : typeof (P == null ? void 0 : P.writable) != "boolean" ? null : B(P) ? !1 : b(P) && P.writable && !A(P);
  }
  function R(P, ie) {
    return _(P) ? B(P) ? !0 : !((ie == null ? void 0 : ie.readable) !== !1 && X(P) || (ie == null ? void 0 : ie.writable) !== !1 && ae(P)) : null;
  }
  function Q(P) {
    var ie, ye;
    return _(P) ? P.writableErrored ? P.writableErrored : (ie = (ye = P._writableState) === null || ye === void 0 ? void 0 : ye.errored) !== null && ie !== void 0 ? ie : null : null;
  }
  function J(P) {
    var ie, ye;
    return _(P) ? P.readableErrored ? P.readableErrored : (ie = (ye = P._readableState) === null || ye === void 0 ? void 0 : ye.errored) !== null && ie !== void 0 ? ie : null : null;
  }
  function W(P) {
    if (!_(P)) return null;
    if (typeof P.closed == "boolean") return P.closed;
    let ie = P._writableState, ye = P._readableState;
    return typeof (ie == null ? void 0 : ie.closed) == "boolean" || typeof (ye == null ? void 0 : ye.closed) == "boolean" ? (ie == null ? void 0 : ie.closed) || (ye == null ? void 0 : ye.closed) : typeof P._closed == "boolean" && ge(P) ? P._closed : null;
  }
  function ge(P) {
    return typeof P._closed == "boolean" && typeof P._defaultKeepAlive == "boolean" && typeof P._removedConnection == "boolean" && typeof P._removedContLen == "boolean";
  }
  function de(P) {
    return typeof P._sent100 == "boolean" && ge(P);
  }
  function le(P) {
    var ie;
    return typeof P._consuming == "boolean" && typeof P._dumped == "boolean" && ((ie = P.req) === null || ie === void 0 ? void 0 : ie.upgradeOrConnect) === void 0;
  }
  function Ee(P) {
    if (!_(P)) return null;
    let ie = P._writableState, ye = P._readableState, F = ie || ye;
    return !F && de(P) || !!(F && F.autoDestroy && F.emitClose && F.closed === !1);
  }
  function G(P) {
    var ie;
    return !!(P && ((ie = P[n]) !== null && ie !== void 0 ? ie : P.readableDidRead || P.readableAborted));
  }
  function pe(P) {
    var ie, ye, F, Ie, V, N, Z, $, q, H;
    return !!(P && ((ie = (ye = (F = (Ie = (V = (N = P[e]) !== null && N !== void 0 ? N : P.readableErrored) !== null && V !== void 0 ? V : P.writableErrored) !== null && Ie !== void 0 ? Ie : (Z = P._readableState) === null || Z === void 0 ? void 0 : Z.errorEmitted) !== null && F !== void 0 ? F : ($ = P._writableState) === null || $ === void 0 ? void 0 : $.errorEmitted) !== null && ye !== void 0 ? ye : (q = P._readableState) === null || q === void 0 ? void 0 : q.errored) !== null && ie !== void 0 ? ie : !((H = P._writableState) === null || H === void 0) && H.errored));
  }
  u.exports = { isDestroyed: B, kIsDestroyed: i, isDisturbed: G, kIsDisturbed: n, isErrored: pe, kIsErrored: e, isReadable: X, kIsReadable: r, kIsClosedPromise: c, kControllerErrorFunction: d, kIsWritable: t, isClosed: W, isDuplexNodeStream: m, isFinished: R, isIterable: U, isReadableNodeStream: g, isReadableStream: E, isReadableEnded: M, isReadableFinished: Y, isReadableErrored: J, isNodeStream: _, isWebStream: v, isWritable: ae, isWritableNodeStream: b, isWritableStream: I, isWritableEnded: A, isWritableFinished: k, isWritableErrored: Q, isServerRequest: le, isServerResponse: de, willEmitClose: Ee, isTransformStream: y };
}), Lt = be((s, u) => {
  he(), fe(), ce();
  var o = Kt(), { AbortError: l, codes: f } = it(), { ERR_INVALID_ARG_TYPE: i, ERR_STREAM_PREMATURE_CLOSE: e } = f, { kEmptyObject: r, once: t } = ot(), { validateAbortSignal: n, validateFunction: c, validateObject: d, validateBoolean: g } = hr(), { Promise: b, PromisePrototypeThen: m, SymbolDispose: _ } = Ge(), { isClosed: E, isReadable: I, isReadableNodeStream: y, isReadableStream: v, isReadableFinished: U, isReadableErrored: B, isWritable: A, isWritableNodeStream: k, isWritableStream: M, isWritableFinished: Y, isWritableErrored: X, isNodeStream: ae, willEmitClose: R, kIsClosedPromise: Q } = Tt(), J;
  function W(G) {
    return G.setHeader && typeof G.abort == "function";
  }
  var ge = () => {
  };
  function de(G, pe, P) {
    var ie, ye;
    if (arguments.length === 2 ? (P = pe, pe = r) : pe == null ? pe = r : d(pe, "options"), c(P, "callback"), n(pe.signal, "options.signal"), P = t(P), v(G) || M(G)) return le(G, pe, P);
    if (!ae(G)) throw new i("stream", ["ReadableStream", "WritableStream", "Stream"], G);
    let F = (ie = pe.readable) !== null && ie !== void 0 ? ie : y(G), Ie = (ye = pe.writable) !== null && ye !== void 0 ? ye : k(G), V = G._writableState, N = G._readableState, Z = () => {
      G.writable || H();
    }, $ = R(G) && y(G) === F && k(G) === Ie, q = Y(G, !1), H = () => {
      q = !0, G.destroyed && ($ = !1), !($ && (!G.readable || F)) && (!F || se) && P.call(G);
    }, se = U(G, !1), ne = () => {
      se = !0, G.destroyed && ($ = !1), !($ && (!G.writable || Ie)) && (!Ie || q) && P.call(G);
    }, x = (D) => {
      P.call(G, D);
    }, j = E(G), K = () => {
      j = !0;
      let D = X(G) || B(G);
      if (D && typeof D != "boolean") return P.call(G, D);
      if (F && !se && y(G, !0) && !U(G, !1)) return P.call(G, new e());
      if (Ie && !q && !Y(G, !1)) return P.call(G, new e());
      P.call(G);
    }, re = () => {
      j = !0;
      let D = X(G) || B(G);
      if (D && typeof D != "boolean") return P.call(G, D);
      P.call(G);
    }, te = () => {
      G.req.on("finish", H);
    };
    W(G) ? (G.on("complete", H), $ || G.on("abort", K), G.req ? te() : G.on("request", te)) : Ie && !V && (G.on("end", Z), G.on("close", Z)), !$ && typeof G.aborted == "boolean" && G.on("aborted", K), G.on("end", ne), G.on("finish", H), pe.error !== !1 && G.on("error", x), G.on("close", K), j ? o.nextTick(K) : V != null && V.errorEmitted || N != null && N.errorEmitted ? $ || o.nextTick(re) : (!F && (!$ || I(G)) && (q || A(G) === !1) || !Ie && (!$ || A(G)) && (se || I(G) === !1) || N && G.req && G.aborted) && o.nextTick(re);
    let ue = () => {
      P = ge, G.removeListener("aborted", K), G.removeListener("complete", H), G.removeListener("abort", K), G.removeListener("request", te), G.req && G.req.removeListener("finish", H), G.removeListener("end", Z), G.removeListener("close", Z), G.removeListener("finish", H), G.removeListener("end", ne), G.removeListener("error", x), G.removeListener("close", K);
    };
    if (pe.signal && !j) {
      let D = () => {
        let oe = P;
        ue(), oe.call(G, new l(void 0, { cause: pe.signal.reason }));
      };
      if (pe.signal.aborted) o.nextTick(D);
      else {
        J = J || ot().addAbortListener;
        let oe = J(pe.signal, D), me = P;
        P = t((...ee) => {
          oe[_](), me.apply(G, ee);
        });
      }
    }
    return ue;
  }
  function le(G, pe, P) {
    let ie = !1, ye = ge;
    if (pe.signal) if (ye = () => {
      ie = !0, P.call(G, new l(void 0, { cause: pe.signal.reason }));
    }, pe.signal.aborted) o.nextTick(ye);
    else {
      J = J || ot().addAbortListener;
      let Ie = J(pe.signal, ye), V = P;
      P = t((...N) => {
        Ie[_](), V.apply(G, N);
      });
    }
    let F = (...Ie) => {
      ie || o.nextTick(() => P.apply(G, Ie));
    };
    return m(G[Q].promise, F, F), ge;
  }
  function Ee(G, pe) {
    var P;
    let ie = !1;
    return pe === null && (pe = r), (P = pe) !== null && P !== void 0 && P.cleanup && (g(pe.cleanup, "cleanup"), ie = pe.cleanup), new b((ye, F) => {
      let Ie = de(G, pe, (V) => {
        ie && Ie(), V ? F(V) : ye();
      });
    });
  }
  u.exports = de, u.exports.finished = Ee;
}), er = be((s, u) => {
  he(), fe(), ce();
  var o = Kt(), { aggregateTwoErrors: l, codes: { ERR_MULTIPLE_CALLBACK: f }, AbortError: i } = it(), { Symbol: e } = Ge(), { kIsDestroyed: r, isDestroyed: t, isFinished: n, isServerRequest: c } = Tt(), d = e("kDestroy"), g = e("kConstruct");
  function b(R, Q, J) {
    R && (R.stack, Q && !Q.errored && (Q.errored = R), J && !J.errored && (J.errored = R));
  }
  function m(R, Q) {
    let J = this._readableState, W = this._writableState, ge = W || J;
    return W != null && W.destroyed || J != null && J.destroyed ? (typeof Q == "function" && Q(), this) : (b(R, W, J), W && (W.destroyed = !0), J && (J.destroyed = !0), ge.constructed ? _(this, R, Q) : this.once(d, function(de) {
      _(this, l(de, R), Q);
    }), this);
  }
  function _(R, Q, J) {
    let W = !1;
    function ge(de) {
      if (W) return;
      W = !0;
      let le = R._readableState, Ee = R._writableState;
      b(de, Ee, le), Ee && (Ee.closed = !0), le && (le.closed = !0), typeof J == "function" && J(de), de ? o.nextTick(E, R, de) : o.nextTick(I, R);
    }
    try {
      R._destroy(Q || null, ge);
    } catch (de) {
      ge(de);
    }
  }
  function E(R, Q) {
    y(R, Q), I(R);
  }
  function I(R) {
    let Q = R._readableState, J = R._writableState;
    J && (J.closeEmitted = !0), Q && (Q.closeEmitted = !0), (J != null && J.emitClose || Q != null && Q.emitClose) && R.emit("close");
  }
  function y(R, Q) {
    let J = R._readableState, W = R._writableState;
    W != null && W.errorEmitted || J != null && J.errorEmitted || (W && (W.errorEmitted = !0), J && (J.errorEmitted = !0), R.emit("error", Q));
  }
  function v() {
    let R = this._readableState, Q = this._writableState;
    R && (R.constructed = !0, R.closed = !1, R.closeEmitted = !1, R.destroyed = !1, R.errored = null, R.errorEmitted = !1, R.reading = !1, R.ended = R.readable === !1, R.endEmitted = R.readable === !1), Q && (Q.constructed = !0, Q.destroyed = !1, Q.closed = !1, Q.closeEmitted = !1, Q.errored = null, Q.errorEmitted = !1, Q.finalCalled = !1, Q.prefinished = !1, Q.ended = Q.writable === !1, Q.ending = Q.writable === !1, Q.finished = Q.writable === !1);
  }
  function U(R, Q, J) {
    let W = R._readableState, ge = R._writableState;
    if (ge != null && ge.destroyed || W != null && W.destroyed) return this;
    W != null && W.autoDestroy || ge != null && ge.autoDestroy ? R.destroy(Q) : Q && (Q.stack, ge && !ge.errored && (ge.errored = Q), W && !W.errored && (W.errored = Q), J ? o.nextTick(y, R, Q) : y(R, Q));
  }
  function B(R, Q) {
    if (typeof R._construct != "function") return;
    let J = R._readableState, W = R._writableState;
    J && (J.constructed = !1), W && (W.constructed = !1), R.once(g, Q), !(R.listenerCount(g) > 1) && o.nextTick(A, R);
  }
  function A(R) {
    let Q = !1;
    function J(W) {
      if (Q) {
        U(R, W ?? new f());
        return;
      }
      Q = !0;
      let ge = R._readableState, de = R._writableState, le = de || ge;
      ge && (ge.constructed = !0), de && (de.constructed = !0), le.destroyed ? R.emit(d, W) : W ? U(R, W, !0) : o.nextTick(k, R);
    }
    try {
      R._construct((W) => {
        o.nextTick(J, W);
      });
    } catch (W) {
      o.nextTick(J, W);
    }
  }
  function k(R) {
    R.emit(g);
  }
  function M(R) {
    return (R == null ? void 0 : R.setHeader) && typeof R.abort == "function";
  }
  function Y(R) {
    R.emit("close");
  }
  function X(R, Q) {
    R.emit("error", Q), o.nextTick(Y, R);
  }
  function ae(R, Q) {
    !R || t(R) || (!Q && !n(R) && (Q = new i()), c(R) ? (R.socket = null, R.destroy(Q)) : M(R) ? R.abort() : M(R.req) ? R.req.abort() : typeof R.destroy == "function" ? R.destroy(Q) : typeof R.close == "function" ? R.close() : Q ? o.nextTick(X, R, Q) : o.nextTick(Y, R), R.destroyed || (R[r] = !0));
  }
  u.exports = { construct: B, destroyer: ae, destroy: m, undestroy: v, errorOrDestroy: U };
}), _n = be((s, u) => {
  he(), fe(), ce();
  var { ArrayIsArray: o, ObjectSetPrototypeOf: l } = Ge(), { EventEmitter: f } = (Qt(), je(Nt));
  function i(r) {
    f.call(this, r);
  }
  l(i.prototype, f.prototype), l(i, f), i.prototype.pipe = function(r, t) {
    let n = this;
    function c(I) {
      r.writable && r.write(I) === !1 && n.pause && n.pause();
    }
    n.on("data", c);
    function d() {
      n.readable && n.resume && n.resume();
    }
    r.on("drain", d), !r._isStdio && (!t || t.end !== !1) && (n.on("end", b), n.on("close", m));
    let g = !1;
    function b() {
      g || (g = !0, r.end());
    }
    function m() {
      g || (g = !0, typeof r.destroy == "function" && r.destroy());
    }
    function _(I) {
      E(), f.listenerCount(this, "error") === 0 && this.emit("error", I);
    }
    e(n, "error", _), e(r, "error", _);
    function E() {
      n.removeListener("data", c), r.removeListener("drain", d), n.removeListener("end", b), n.removeListener("close", m), n.removeListener("error", _), r.removeListener("error", _), n.removeListener("end", E), n.removeListener("close", E), r.removeListener("close", E);
    }
    return n.on("end", E), n.on("close", E), r.on("close", E), r.emit("pipe", n), r;
  };
  function e(r, t, n) {
    if (typeof r.prependListener == "function") return r.prependListener(t, n);
    !r._events || !r._events[t] ? r.on(t, n) : o(r._events[t]) ? r._events[t].unshift(n) : r._events[t] = [n, r._events[t]];
  }
  u.exports = { Stream: i, prependListener: e };
}), Or = be((s, u) => {
  he(), fe(), ce();
  var { SymbolDispose: o } = Ge(), { AbortError: l, codes: f } = it(), { isNodeStream: i, isWebStream: e, kControllerErrorFunction: r } = Tt(), t = Lt(), { ERR_INVALID_ARG_TYPE: n } = f, c, d = (g, b) => {
    if (typeof g != "object" || !("aborted" in g)) throw new n(b, "AbortSignal", g);
  };
  u.exports.addAbortSignal = function(g, b) {
    if (d(g, "signal"), !i(b) && !e(b)) throw new n("stream", ["ReadableStream", "WritableStream", "Stream"], b);
    return u.exports.addAbortSignalNoValidate(g, b);
  }, u.exports.addAbortSignalNoValidate = function(g, b) {
    if (typeof g != "object" || !("aborted" in g)) return b;
    let m = i(b) ? () => {
      b.destroy(new l(void 0, { cause: g.reason }));
    } : () => {
      b[r](new l(void 0, { cause: g.reason }));
    };
    if (g.aborted) m();
    else {
      c = c || ot().addAbortListener;
      let _ = c(g, m);
      t(b, _[o]);
    }
    return b;
  };
}), Xs = be((s, u) => {
  he(), fe(), ce();
  var { StringPrototypeSlice: o, SymbolIterator: l, TypedArrayPrototypeSet: f, Uint8Array: i } = Ge(), { Buffer: e } = (Je(), je(Ye)), { inspect: r } = ot();
  u.exports = class {
    constructor() {
      this.head = null, this.tail = null, this.length = 0;
    }
    push(t) {
      let n = { data: t, next: null };
      this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
    }
    unshift(t) {
      let n = { data: t, next: this.head };
      this.length === 0 && (this.tail = n), this.head = n, ++this.length;
    }
    shift() {
      if (this.length === 0) return;
      let t = this.head.data;
      return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
    }
    clear() {
      this.head = this.tail = null, this.length = 0;
    }
    join(t) {
      if (this.length === 0) return "";
      let n = this.head, c = "" + n.data;
      for (; (n = n.next) !== null; ) c += t + n.data;
      return c;
    }
    concat(t) {
      if (this.length === 0) return e.alloc(0);
      let n = e.allocUnsafe(t >>> 0), c = this.head, d = 0;
      for (; c; ) f(n, c.data, d), d += c.data.length, c = c.next;
      return n;
    }
    consume(t, n) {
      let c = this.head.data;
      if (t < c.length) {
        let d = c.slice(0, t);
        return this.head.data = c.slice(t), d;
      }
      return t === c.length ? this.shift() : n ? this._getString(t) : this._getBuffer(t);
    }
    first() {
      return this.head.data;
    }
    *[l]() {
      for (let t = this.head; t; t = t.next) yield t.data;
    }
    _getString(t) {
      let n = "", c = this.head, d = 0;
      do {
        let g = c.data;
        if (t > g.length) n += g, t -= g.length;
        else {
          t === g.length ? (n += g, ++d, c.next ? this.head = c.next : this.head = this.tail = null) : (n += o(g, 0, t), this.head = c, c.data = o(g, t));
          break;
        }
        ++d;
      } while ((c = c.next) !== null);
      return this.length -= d, n;
    }
    _getBuffer(t) {
      let n = e.allocUnsafe(t), c = t, d = this.head, g = 0;
      do {
        let b = d.data;
        if (t > b.length) f(n, b, c - t), t -= b.length;
        else {
          t === b.length ? (f(n, b, c - t), ++g, d.next ? this.head = d.next : this.head = this.tail = null) : (f(n, new i(b.buffer, b.byteOffset, t), c - t), this.head = d, d.data = b.slice(t));
          break;
        }
        ++g;
      } while ((d = d.next) !== null);
      return this.length -= g, n;
    }
    [Symbol.for("nodejs.util.inspect.custom")](t, n) {
      return r(this, { ...n, depth: 0, customInspect: !1 });
    }
  };
}), Rr = be((s, u) => {
  he(), fe(), ce();
  var { MathFloor: o, NumberIsInteger: l } = Ge(), { validateInteger: f } = hr(), { ERR_INVALID_ARG_VALUE: i } = it().codes, e = 16 * 1024, r = 16;
  function t(g, b, m) {
    return g.highWaterMark != null ? g.highWaterMark : b ? g[m] : null;
  }
  function n(g) {
    return g ? r : e;
  }
  function c(g, b) {
    f(b, "value", 0), g ? r = b : e = b;
  }
  function d(g, b, m, _) {
    let E = t(b, _, m);
    if (E != null) {
      if (!l(E) || E < 0) {
        let I = _ ? `options.${m}` : "options.highWaterMark";
        throw new i(I, E);
      }
      return o(E);
    }
    return n(g.objectMode);
  }
  u.exports = { getHighWaterMark: d, getDefaultHighWaterMark: n, setDefaultHighWaterMark: c };
}), Zs = be((s, u) => {
  he(), fe(), ce();
  var o = (Je(), je(Ye)), l = o.Buffer;
  function f(e, r) {
    for (var t in e) r[t] = e[t];
  }
  l.from && l.alloc && l.allocUnsafe && l.allocUnsafeSlow ? u.exports = o : (f(o, s), s.Buffer = i);
  function i(e, r, t) {
    return l(e, r, t);
  }
  i.prototype = Object.create(l.prototype), f(l, i), i.from = function(e, r, t) {
    if (typeof e == "number") throw new TypeError("Argument must not be a number");
    return l(e, r, t);
  }, i.alloc = function(e, r, t) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    var n = l(e);
    return r !== void 0 ? typeof t == "string" ? n.fill(r, t) : n.fill(r) : n.fill(0), n;
  }, i.allocUnsafe = function(e) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    return l(e);
  }, i.allocUnsafeSlow = function(e) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    return o.SlowBuffer(e);
  };
}), ea = be((s) => {
  he(), fe(), ce();
  var u = Zs().Buffer, o = u.isEncoding || function(y) {
    switch (y = "" + y, y && y.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function l(y) {
    if (!y) return "utf8";
    for (var v; ; ) switch (y) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return y;
      default:
        if (v) return;
        y = ("" + y).toLowerCase(), v = !0;
    }
  }
  function f(y) {
    var v = l(y);
    if (typeof v != "string" && (u.isEncoding === o || !o(y))) throw new Error("Unknown encoding: " + y);
    return v || y;
  }
  s.StringDecoder = i;
  function i(y) {
    this.encoding = f(y);
    var v;
    switch (this.encoding) {
      case "utf16le":
        this.text = g, this.end = b, v = 4;
        break;
      case "utf8":
        this.fillLast = n, v = 4;
        break;
      case "base64":
        this.text = m, this.end = _, v = 3;
        break;
      default:
        this.write = E, this.end = I;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = u.allocUnsafe(v);
  }
  i.prototype.write = function(y) {
    if (y.length === 0) return "";
    var v, U;
    if (this.lastNeed) {
      if (v = this.fillLast(y), v === void 0) return "";
      U = this.lastNeed, this.lastNeed = 0;
    } else U = 0;
    return U < y.length ? v ? v + this.text(y, U) : this.text(y, U) : v || "";
  }, i.prototype.end = d, i.prototype.text = c, i.prototype.fillLast = function(y) {
    if (this.lastNeed <= y.length) return y.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    y.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, y.length), this.lastNeed -= y.length;
  };
  function e(y) {
    return y <= 127 ? 0 : y >> 5 === 6 ? 2 : y >> 4 === 14 ? 3 : y >> 3 === 30 ? 4 : y >> 6 === 2 ? -1 : -2;
  }
  function r(y, v, U) {
    var B = v.length - 1;
    if (B < U) return 0;
    var A = e(v[B]);
    return A >= 0 ? (A > 0 && (y.lastNeed = A - 1), A) : --B < U || A === -2 ? 0 : (A = e(v[B]), A >= 0 ? (A > 0 && (y.lastNeed = A - 2), A) : --B < U || A === -2 ? 0 : (A = e(v[B]), A >= 0 ? (A > 0 && (A === 2 ? A = 0 : y.lastNeed = A - 3), A) : 0));
  }
  function t(y, v, U) {
    if ((v[0] & 192) !== 128) return y.lastNeed = 0, "�";
    if (y.lastNeed > 1 && v.length > 1) {
      if ((v[1] & 192) !== 128) return y.lastNeed = 1, "�";
      if (y.lastNeed > 2 && v.length > 2 && (v[2] & 192) !== 128) return y.lastNeed = 2, "�";
    }
  }
  function n(y) {
    var v = this.lastTotal - this.lastNeed, U = t(this, y);
    if (U !== void 0) return U;
    if (this.lastNeed <= y.length) return y.copy(this.lastChar, v, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    y.copy(this.lastChar, v, 0, y.length), this.lastNeed -= y.length;
  }
  function c(y, v) {
    var U = r(this, y, v);
    if (!this.lastNeed) return y.toString("utf8", v);
    this.lastTotal = U;
    var B = y.length - (U - this.lastNeed);
    return y.copy(this.lastChar, 0, B), y.toString("utf8", v, B);
  }
  function d(y) {
    var v = y && y.length ? this.write(y) : "";
    return this.lastNeed ? v + "�" : v;
  }
  function g(y, v) {
    if ((y.length - v) % 2 === 0) {
      var U = y.toString("utf16le", v);
      if (U) {
        var B = U.charCodeAt(U.length - 1);
        if (B >= 55296 && B <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = y[y.length - 2], this.lastChar[1] = y[y.length - 1], U.slice(0, -1);
      }
      return U;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = y[y.length - 1], y.toString("utf16le", v, y.length - 1);
  }
  function b(y) {
    var v = y && y.length ? this.write(y) : "";
    if (this.lastNeed) {
      var U = this.lastTotal - this.lastNeed;
      return v + this.lastChar.toString("utf16le", 0, U);
    }
    return v;
  }
  function m(y, v) {
    var U = (y.length - v) % 3;
    return U === 0 ? y.toString("base64", v) : (this.lastNeed = 3 - U, this.lastTotal = 3, U === 1 ? this.lastChar[0] = y[y.length - 1] : (this.lastChar[0] = y[y.length - 2], this.lastChar[1] = y[y.length - 1]), y.toString("base64", v, y.length - U));
  }
  function _(y) {
    var v = y && y.length ? this.write(y) : "";
    return this.lastNeed ? v + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : v;
  }
  function E(y) {
    return y.toString(this.encoding);
  }
  function I(y) {
    return y && y.length ? this.write(y) : "";
  }
}), Co = be((s, u) => {
  he(), fe(), ce();
  var o = Kt(), { PromisePrototypeThen: l, SymbolAsyncIterator: f, SymbolIterator: i } = Ge(), { Buffer: e } = (Je(), je(Ye)), { ERR_INVALID_ARG_TYPE: r, ERR_STREAM_NULL_VALUES: t } = it().codes;
  function n(c, d, g) {
    let b;
    if (typeof d == "string" || d instanceof e) return new c({ objectMode: !0, ...g, read() {
      this.push(d), this.push(null);
    } });
    let m;
    if (d && d[f]) m = !0, b = d[f]();
    else if (d && d[i]) m = !1, b = d[i]();
    else throw new r("iterable", ["Iterable"], d);
    let _ = new c({ objectMode: !0, highWaterMark: 1, ...g }), E = !1;
    _._read = function() {
      E || (E = !0, y());
    }, _._destroy = function(v, U) {
      l(I(v), () => o.nextTick(U, v), (B) => o.nextTick(U, B || v));
    };
    async function I(v) {
      let U = v != null, B = typeof b.throw == "function";
      if (U && B) {
        let { value: A, done: k } = await b.throw(v);
        if (await A, k) return;
      }
      if (typeof b.return == "function") {
        let { value: A } = await b.return();
        await A;
      }
    }
    async function y() {
      for (; ; ) {
        try {
          let { value: v, done: U } = m ? await b.next() : b.next();
          if (U) _.push(null);
          else {
            let B = v && typeof v.then == "function" ? await v : v;
            if (B === null) throw E = !1, new t();
            if (_.push(B)) continue;
            E = !1;
          }
        } catch (v) {
          _.destroy(v);
        }
        break;
      }
    }
    return _;
  }
  u.exports = n;
}), Pr = be((s, u) => {
  he(), fe(), ce();
  var o = Kt(), { ArrayPrototypeIndexOf: l, NumberIsInteger: f, NumberIsNaN: i, NumberParseInt: e, ObjectDefineProperties: r, ObjectKeys: t, ObjectSetPrototypeOf: n, Promise: c, SafeSet: d, SymbolAsyncDispose: g, SymbolAsyncIterator: b, Symbol: m } = Ge();
  u.exports = ee, ee.ReadableState = me;
  var { EventEmitter: _ } = (Qt(), je(Nt)), { Stream: E, prependListener: I } = _n(), { Buffer: y } = (Je(), je(Ye)), { addAbortSignal: v } = Or(), U = Lt(), B = ot().debuglog("stream", (S) => {
    B = S;
  }), A = Xs(), k = er(), { getHighWaterMark: M, getDefaultHighWaterMark: Y } = Rr(), { aggregateTwoErrors: X, codes: { ERR_INVALID_ARG_TYPE: ae, ERR_METHOD_NOT_IMPLEMENTED: R, ERR_OUT_OF_RANGE: Q, ERR_STREAM_PUSH_AFTER_EOF: J, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: W }, AbortError: ge } = it(), { validateObject: de } = hr(), le = m("kPaused"), { StringDecoder: Ee } = ea(), G = Co();
  n(ee.prototype, E.prototype), n(ee, E);
  var pe = () => {
  }, { errorOrDestroy: P } = k, ie = 1, ye = 2, F = 4, Ie = 8, V = 16, N = 32, Z = 64, $ = 128, q = 256, H = 512, se = 1024, ne = 2048, x = 4096, j = 8192, K = 16384, re = 32768, te = 65536, ue = 1 << 17, D = 1 << 18;
  function oe(S) {
    return { enumerable: !1, get() {
      return (this.state & S) !== 0;
    }, set(O) {
      O ? this.state |= S : this.state &= ~S;
    } };
  }
  r(me.prototype, { objectMode: oe(ie), ended: oe(ye), endEmitted: oe(F), reading: oe(Ie), constructed: oe(V), sync: oe(N), needReadable: oe(Z), emittedReadable: oe($), readableListening: oe(q), resumeScheduled: oe(H), errorEmitted: oe(se), emitClose: oe(ne), autoDestroy: oe(x), destroyed: oe(j), closed: oe(K), closeEmitted: oe(re), multiAwaitDrain: oe(te), readingMore: oe(ue), dataEmitted: oe(D) });
  function me(S, O, we) {
    typeof we != "boolean" && (we = O instanceof At()), this.state = ne | x | V | N, S && S.objectMode && (this.state |= ie), we && S && S.readableObjectMode && (this.state |= ie), this.highWaterMark = S ? M(this, S, "readableHighWaterMark", we) : Y(!1), this.buffer = new A(), this.length = 0, this.pipes = [], this.flowing = null, this[le] = null, S && S.emitClose === !1 && (this.state &= -2049), S && S.autoDestroy === !1 && (this.state &= -4097), this.errored = null, this.defaultEncoding = S && S.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, S && S.encoding && (this.decoder = new Ee(S.encoding), this.encoding = S.encoding);
  }
  function ee(S) {
    if (!(this instanceof ee)) return new ee(S);
    let O = this instanceof At();
    this._readableState = new me(S, this, O), S && (typeof S.read == "function" && (this._read = S.read), typeof S.destroy == "function" && (this._destroy = S.destroy), typeof S.construct == "function" && (this._construct = S.construct), S.signal && !O && v(S.signal, this)), E.call(this, S), k.construct(this, () => {
      this._readableState.needReadable && _e(this, this._readableState);
    });
  }
  ee.prototype.destroy = k.destroy, ee.prototype._undestroy = k.undestroy, ee.prototype._destroy = function(S, O) {
    O(S);
  }, ee.prototype[_.captureRejectionSymbol] = function(S) {
    this.destroy(S);
  }, ee.prototype[g] = function() {
    let S;
    return this.destroyed || (S = this.readableEnded ? null : new ge(), this.destroy(S)), new c((O, we) => U(this, (Se) => Se && Se !== S ? we(Se) : O(null)));
  }, ee.prototype.push = function(S, O) {
    return Oe(this, S, O, !1);
  }, ee.prototype.unshift = function(S, O) {
    return Oe(this, S, O, !0);
  };
  function Oe(S, O, we, Se) {
    B("readableAddChunk", O);
    let Te = S._readableState, Ze;
    if (Te.state & ie || (typeof O == "string" ? (we = we || Te.defaultEncoding, Te.encoding !== we && (Se && Te.encoding ? O = y.from(O, we).toString(Te.encoding) : (O = y.from(O, we), we = ""))) : O instanceof y ? we = "" : E._isUint8Array(O) ? (O = E._uint8ArrayToBuffer(O), we = "") : O != null && (Ze = new ae("chunk", ["string", "Buffer", "Uint8Array"], O))), Ze) P(S, Ze);
    else if (O === null) Te.state &= -9, T(S, Te);
    else if (Te.state & ie || O && O.length > 0) if (Se) if (Te.state & F) P(S, new W());
    else {
      if (Te.destroyed || Te.errored) return !1;
      a(S, Te, O, !0);
    }
    else if (Te.ended) P(S, new J());
    else {
      if (Te.destroyed || Te.errored) return !1;
      Te.state &= -9, Te.decoder && !we ? (O = Te.decoder.write(O), Te.objectMode || O.length !== 0 ? a(S, Te, O, !1) : _e(S, Te)) : a(S, Te, O, !1);
    }
    else Se || (Te.state &= -9, _e(S, Te));
    return !Te.ended && (Te.length < Te.highWaterMark || Te.length === 0);
  }
  function a(S, O, we, Se) {
    O.flowing && O.length === 0 && !O.sync && S.listenerCount("data") > 0 ? (O.state & te ? O.awaitDrainWriters.clear() : O.awaitDrainWriters = null, O.dataEmitted = !0, S.emit("data", we)) : (O.length += O.objectMode ? 1 : we.length, Se ? O.buffer.unshift(we) : O.buffer.push(we), O.state & Z && L(S)), _e(S, O);
  }
  ee.prototype.isPaused = function() {
    let S = this._readableState;
    return S[le] === !0 || S.flowing === !1;
  }, ee.prototype.setEncoding = function(S) {
    let O = new Ee(S);
    this._readableState.decoder = O, this._readableState.encoding = this._readableState.decoder.encoding;
    let we = this._readableState.buffer, Se = "";
    for (let Te of we) Se += O.write(Te);
    return we.clear(), Se !== "" && we.push(Se), this._readableState.length = Se.length, this;
  };
  var h = 1073741824;
  function p(S) {
    if (S > h) throw new Q("size", "<= 1GiB", S);
    return S--, S |= S >>> 1, S |= S >>> 2, S |= S >>> 4, S |= S >>> 8, S |= S >>> 16, S++, S;
  }
  function w(S, O) {
    return S <= 0 || O.length === 0 && O.ended ? 0 : O.state & ie ? 1 : i(S) ? O.flowing && O.length ? O.buffer.first().length : O.length : S <= O.length ? S : O.ended ? O.length : 0;
  }
  ee.prototype.read = function(S) {
    B("read", S), S === void 0 ? S = NaN : f(S) || (S = e(S, 10));
    let O = this._readableState, we = S;
    if (S > O.highWaterMark && (O.highWaterMark = p(S)), S !== 0 && (O.state &= -129), S === 0 && O.needReadable && ((O.highWaterMark !== 0 ? O.length >= O.highWaterMark : O.length > 0) || O.ended)) return B("read: emitReadable", O.length, O.ended), O.length === 0 && O.ended ? De(this) : L(this), null;
    if (S = w(S, O), S === 0 && O.ended) return O.length === 0 && De(this), null;
    let Se = (O.state & Z) !== 0;
    if (B("need readable", Se), (O.length === 0 || O.length - S < O.highWaterMark) && (Se = !0, B("length less than watermark", Se)), O.ended || O.reading || O.destroyed || O.errored || !O.constructed) Se = !1, B("reading, ended or constructing", Se);
    else if (Se) {
      B("do read"), O.state |= Ie | N, O.length === 0 && (O.state |= Z);
      try {
        this._read(O.highWaterMark);
      } catch (Ze) {
        P(this, Ze);
      }
      O.state &= -33, O.reading || (S = w(we, O));
    }
    let Te;
    return S > 0 ? Te = Pe(S, O) : Te = null, Te === null ? (O.needReadable = O.length <= O.highWaterMark, S = 0) : (O.length -= S, O.multiAwaitDrain ? O.awaitDrainWriters.clear() : O.awaitDrainWriters = null), O.length === 0 && (O.ended || (O.needReadable = !0), we !== S && O.ended && De(this)), Te !== null && !O.errorEmitted && !O.closeEmitted && (O.dataEmitted = !0, this.emit("data", Te)), Te;
  };
  function T(S, O) {
    if (B("onEofChunk"), !O.ended) {
      if (O.decoder) {
        let we = O.decoder.end();
        we && we.length && (O.buffer.push(we), O.length += O.objectMode ? 1 : we.length);
      }
      O.ended = !0, O.sync ? L(S) : (O.needReadable = !1, O.emittedReadable = !0, z(S));
    }
  }
  function L(S) {
    let O = S._readableState;
    B("emitReadable", O.needReadable, O.emittedReadable), O.needReadable = !1, O.emittedReadable || (B("emitReadable", O.flowing), O.emittedReadable = !0, o.nextTick(z, S));
  }
  function z(S) {
    let O = S._readableState;
    B("emitReadable_", O.destroyed, O.length, O.ended), !O.destroyed && !O.errored && (O.length || O.ended) && (S.emit("readable"), O.emittedReadable = !1), O.needReadable = !O.flowing && !O.ended && O.length <= O.highWaterMark, st(S);
  }
  function _e(S, O) {
    !O.readingMore && O.constructed && (O.readingMore = !0, o.nextTick(ve, S, O));
  }
  function ve(S, O) {
    for (; !O.reading && !O.ended && (O.length < O.highWaterMark || O.flowing && O.length === 0); ) {
      let we = O.length;
      if (B("maybeReadMore read 0"), S.read(0), we === O.length) break;
    }
    O.readingMore = !1;
  }
  ee.prototype._read = function(S) {
    throw new R("_read()");
  }, ee.prototype.pipe = function(S, O) {
    let we = this, Se = this._readableState;
    Se.pipes.length === 1 && (Se.multiAwaitDrain || (Se.multiAwaitDrain = !0, Se.awaitDrainWriters = new d(Se.awaitDrainWriters ? [Se.awaitDrainWriters] : []))), Se.pipes.push(S), B("pipe count=%d opts=%j", Se.pipes.length, O);
    let Te = (!O || O.end !== !1) && S !== o.stdout && S !== o.stderr ? lt : rr;
    Se.endEmitted ? o.nextTick(Te) : we.once("end", Te), S.on("unpipe", Ze);
    function Ze(jt, mt) {
      B("onunpipe"), jt === we && mt && mt.hasUnpiped === !1 && (mt.hasUnpiped = !0, js());
    }
    function lt() {
      B("onend"), S.end();
    }
    let Ut, Tn = !1;
    function js() {
      B("cleanup"), S.removeListener("close", Nr), S.removeListener("finish", Lr), Ut && S.removeListener("drain", Ut), S.removeListener("error", Mr), S.removeListener("unpipe", Ze), we.removeListener("end", lt), we.removeListener("end", rr), we.removeListener("data", Cn), Tn = !0, Ut && Se.awaitDrainWriters && (!S._writableState || S._writableState.needDrain) && Ut();
    }
    function kn() {
      Tn || (Se.pipes.length === 1 && Se.pipes[0] === S ? (B("false write response, pause", 0), Se.awaitDrainWriters = S, Se.multiAwaitDrain = !1) : Se.pipes.length > 1 && Se.pipes.includes(S) && (B("false write response, pause", Se.awaitDrainWriters.size), Se.awaitDrainWriters.add(S)), we.pause()), Ut || (Ut = ke(we, S), S.on("drain", Ut));
    }
    we.on("data", Cn);
    function Cn(jt) {
      B("ondata");
      let mt = S.write(jt);
      B("dest.write", mt), mt === !1 && kn();
    }
    function Mr(jt) {
      if (B("onerror", jt), rr(), S.removeListener("error", Mr), S.listenerCount("error") === 0) {
        let mt = S._writableState || S._readableState;
        mt && !mt.errorEmitted ? P(S, jt) : S.emit("error", jt);
      }
    }
    I(S, "error", Mr);
    function Nr() {
      S.removeListener("finish", Lr), rr();
    }
    S.once("close", Nr);
    function Lr() {
      B("onfinish"), S.removeListener("close", Nr), rr();
    }
    S.once("finish", Lr);
    function rr() {
      B("unpipe"), we.unpipe(S);
    }
    return S.emit("pipe", we), S.writableNeedDrain === !0 ? kn() : Se.flowing || (B("pipe resume"), we.resume()), S;
  };
  function ke(S, O) {
    return function() {
      let we = S._readableState;
      we.awaitDrainWriters === O ? (B("pipeOnDrain", 1), we.awaitDrainWriters = null) : we.multiAwaitDrain && (B("pipeOnDrain", we.awaitDrainWriters.size), we.awaitDrainWriters.delete(O)), (!we.awaitDrainWriters || we.awaitDrainWriters.size === 0) && S.listenerCount("data") && S.resume();
    };
  }
  ee.prototype.unpipe = function(S) {
    let O = this._readableState, we = { hasUnpiped: !1 };
    if (O.pipes.length === 0) return this;
    if (!S) {
      let Te = O.pipes;
      O.pipes = [], this.pause();
      for (let Ze = 0; Ze < Te.length; Ze++) Te[Ze].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    let Se = l(O.pipes, S);
    return Se === -1 ? this : (O.pipes.splice(Se, 1), O.pipes.length === 0 && this.pause(), S.emit("unpipe", this, we), this);
  }, ee.prototype.on = function(S, O) {
    let we = E.prototype.on.call(this, S, O), Se = this._readableState;
    return S === "data" ? (Se.readableListening = this.listenerCount("readable") > 0, Se.flowing !== !1 && this.resume()) : S === "readable" && !Se.endEmitted && !Se.readableListening && (Se.readableListening = Se.needReadable = !0, Se.flowing = !1, Se.emittedReadable = !1, B("on readable", Se.length, Se.reading), Se.length ? L(this) : Se.reading || o.nextTick(Re, this)), we;
  }, ee.prototype.addListener = ee.prototype.on, ee.prototype.removeListener = function(S, O) {
    let we = E.prototype.removeListener.call(this, S, O);
    return S === "readable" && o.nextTick(xe, this), we;
  }, ee.prototype.off = ee.prototype.removeListener, ee.prototype.removeAllListeners = function(S) {
    let O = E.prototype.removeAllListeners.apply(this, arguments);
    return (S === "readable" || S === void 0) && o.nextTick(xe, this), O;
  };
  function xe(S) {
    let O = S._readableState;
    O.readableListening = S.listenerCount("readable") > 0, O.resumeScheduled && O[le] === !1 ? O.flowing = !0 : S.listenerCount("data") > 0 ? S.resume() : O.readableListening || (O.flowing = null);
  }
  function Re(S) {
    B("readable nexttick read 0"), S.read(0);
  }
  ee.prototype.resume = function() {
    let S = this._readableState;
    return S.flowing || (B("resume"), S.flowing = !S.readableListening, dt(this, S)), S[le] = !1, this;
  };
  function dt(S, O) {
    O.resumeScheduled || (O.resumeScheduled = !0, o.nextTick(nt, S, O));
  }
  function nt(S, O) {
    B("resume", O.reading), O.reading || S.read(0), O.resumeScheduled = !1, S.emit("resume"), st(S), O.flowing && !O.reading && S.read(0);
  }
  ee.prototype.pause = function() {
    return B("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (B("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[le] = !0, this;
  };
  function st(S) {
    let O = S._readableState;
    for (B("flow", O.flowing); O.flowing && S.read() !== null; ) ;
  }
  ee.prototype.wrap = function(S) {
    let O = !1;
    S.on("data", (Se) => {
      !this.push(Se) && S.pause && (O = !0, S.pause());
    }), S.on("end", () => {
      this.push(null);
    }), S.on("error", (Se) => {
      P(this, Se);
    }), S.on("close", () => {
      this.destroy();
    }), S.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      O && S.resume && (O = !1, S.resume());
    };
    let we = t(S);
    for (let Se = 1; Se < we.length; Se++) {
      let Te = we[Se];
      this[Te] === void 0 && typeof S[Te] == "function" && (this[Te] = S[Te].bind(S));
    }
    return this;
  }, ee.prototype[b] = function() {
    return We(this);
  }, ee.prototype.iterator = function(S) {
    return S !== void 0 && de(S, "options"), We(this, S);
  };
  function We(S, O) {
    typeof S.read != "function" && (S = ee.wrap(S, { objectMode: !0 }));
    let we = Ke(S, O);
    return we.stream = S, we;
  }
  async function* Ke(S, O) {
    let we = pe;
    function Se(lt) {
      this === S ? (we(), we = pe) : we = lt;
    }
    S.on("readable", Se);
    let Te, Ze = U(S, { writable: !1 }, (lt) => {
      Te = lt ? X(Te, lt) : null, we(), we = pe;
    });
    try {
      for (; ; ) {
        let lt = S.destroyed ? null : S.read();
        if (lt !== null) yield lt;
        else {
          if (Te) throw Te;
          if (Te === null) return;
          await new c(Se);
        }
      }
    } catch (lt) {
      throw Te = X(Te, lt), Te;
    } finally {
      (Te || (O == null ? void 0 : O.destroyOnReturn) !== !1) && (Te === void 0 || S._readableState.autoDestroy) ? k.destroyer(S, null) : (S.off("readable", Se), Ze());
    }
  }
  r(ee.prototype, { readable: { __proto__: null, get() {
    let S = this._readableState;
    return !!S && S.readable !== !1 && !S.destroyed && !S.errorEmitted && !S.endEmitted;
  }, set(S) {
    this._readableState && (this._readableState.readable = !!S);
  } }, readableDidRead: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.dataEmitted;
  } }, readableAborted: { __proto__: null, enumerable: !1, get: function() {
    return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
  } }, readableHighWaterMark: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.highWaterMark;
  } }, readableBuffer: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState && this._readableState.buffer;
  } }, readableFlowing: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.flowing;
  }, set: function(S) {
    this._readableState && (this._readableState.flowing = S);
  } }, readableLength: { __proto__: null, enumerable: !1, get() {
    return this._readableState.length;
  } }, readableObjectMode: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.objectMode : !1;
  } }, readableEncoding: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.encoding : null;
  } }, errored: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.errored : null;
  } }, closed: { __proto__: null, get() {
    return this._readableState ? this._readableState.closed : !1;
  } }, destroyed: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.destroyed : !1;
  }, set(S) {
    this._readableState && (this._readableState.destroyed = S);
  } }, readableEnded: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.endEmitted : !1;
  } } }), r(me.prototype, { pipesCount: { __proto__: null, get() {
    return this.pipes.length;
  } }, paused: { __proto__: null, get() {
    return this[le] !== !1;
  }, set(S) {
    this[le] = !!S;
  } } }), ee._fromList = Pe;
  function Pe(S, O) {
    if (O.length === 0) return null;
    let we;
    return O.objectMode ? we = O.buffer.shift() : !S || S >= O.length ? (O.decoder ? we = O.buffer.join("") : O.buffer.length === 1 ? we = O.buffer.first() : we = O.buffer.concat(O.length), O.buffer.clear()) : we = O.buffer.consume(S, O.decoder), we;
  }
  function De(S) {
    let O = S._readableState;
    B("endReadable", O.endEmitted), O.endEmitted || (O.ended = !0, o.nextTick(Xe, O, S));
  }
  function Xe(S, O) {
    if (B("endReadableNT", S.endEmitted, S.length), !S.errored && !S.closeEmitted && !S.endEmitted && S.length === 0) {
      if (S.endEmitted = !0, O.emit("end"), O.writable && O.allowHalfOpen === !1) o.nextTick(Qe, O);
      else if (S.autoDestroy) {
        let we = O._writableState;
        (!we || we.autoDestroy && (we.finished || we.writable === !1)) && O.destroy();
      }
    }
  }
  function Qe(S) {
    S.writable && !S.writableEnded && !S.destroyed && S.end();
  }
  ee.from = function(S, O) {
    return G(ee, S, O);
  };
  var tt;
  function Ot() {
    return tt === void 0 && (tt = {}), tt;
  }
  ee.fromWeb = function(S, O) {
    return Ot().newStreamReadableFromReadableStream(S, O);
  }, ee.toWeb = function(S, O) {
    return Ot().newReadableStreamFromStreamReadable(S, O);
  }, ee.wrap = function(S, O) {
    var we, Se;
    return new ee({ objectMode: (we = (Se = S.readableObjectMode) !== null && Se !== void 0 ? Se : S.objectMode) !== null && we !== void 0 ? we : !0, ...O, destroy(Te, Ze) {
      k.destroyer(S, Te), Ze(Te);
    } }).wrap(S);
  };
}), vn = be((s, u) => {
  he(), fe(), ce();
  var o = Kt(), { ArrayPrototypeSlice: l, Error: f, FunctionPrototypeSymbolHasInstance: i, ObjectDefineProperty: e, ObjectDefineProperties: r, ObjectSetPrototypeOf: t, StringPrototypeToLowerCase: n, Symbol: c, SymbolHasInstance: d } = Ge();
  u.exports = de, de.WritableState = W;
  var { EventEmitter: g } = (Qt(), je(Nt)), b = _n().Stream, { Buffer: m } = (Je(), je(Ye)), _ = er(), { addAbortSignal: E } = Or(), { getHighWaterMark: I, getDefaultHighWaterMark: y } = Rr(), { ERR_INVALID_ARG_TYPE: v, ERR_METHOD_NOT_IMPLEMENTED: U, ERR_MULTIPLE_CALLBACK: B, ERR_STREAM_CANNOT_PIPE: A, ERR_STREAM_DESTROYED: k, ERR_STREAM_ALREADY_FINISHED: M, ERR_STREAM_NULL_VALUES: Y, ERR_STREAM_WRITE_AFTER_END: X, ERR_UNKNOWN_ENCODING: ae } = it().codes, { errorOrDestroy: R } = _;
  t(de.prototype, b.prototype), t(de, b);
  function Q() {
  }
  var J = c("kOnFinished");
  function W(x, j, K) {
    typeof K != "boolean" && (K = j instanceof At()), this.objectMode = !!(x && x.objectMode), K && (this.objectMode = this.objectMode || !!(x && x.writableObjectMode)), this.highWaterMark = x ? I(this, x, "writableHighWaterMark", K) : y(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    let re = !!(x && x.decodeStrings === !1);
    this.decodeStrings = !re, this.defaultEncoding = x && x.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = P.bind(void 0, j), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, ge(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !x || x.emitClose !== !1, this.autoDestroy = !x || x.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[J] = [];
  }
  function ge(x) {
    x.buffered = [], x.bufferedIndex = 0, x.allBuffers = !0, x.allNoop = !0;
  }
  W.prototype.getBuffer = function() {
    return l(this.buffered, this.bufferedIndex);
  }, e(W.prototype, "bufferedRequestCount", { __proto__: null, get() {
    return this.buffered.length - this.bufferedIndex;
  } });
  function de(x) {
    let j = this instanceof At();
    if (!j && !i(de, this)) return new de(x);
    this._writableState = new W(x, this, j), x && (typeof x.write == "function" && (this._write = x.write), typeof x.writev == "function" && (this._writev = x.writev), typeof x.destroy == "function" && (this._destroy = x.destroy), typeof x.final == "function" && (this._final = x.final), typeof x.construct == "function" && (this._construct = x.construct), x.signal && E(x.signal, this)), b.call(this, x), _.construct(this, () => {
      let K = this._writableState;
      K.writing || Ie(this, K), $(this, K);
    });
  }
  e(de, d, { __proto__: null, value: function(x) {
    return i(this, x) ? !0 : this !== de ? !1 : x && x._writableState instanceof W;
  } }), de.prototype.pipe = function() {
    R(this, new A());
  };
  function le(x, j, K, re) {
    let te = x._writableState;
    if (typeof K == "function") re = K, K = te.defaultEncoding;
    else {
      if (!K) K = te.defaultEncoding;
      else if (K !== "buffer" && !m.isEncoding(K)) throw new ae(K);
      typeof re != "function" && (re = Q);
    }
    if (j === null) throw new Y();
    if (!te.objectMode) if (typeof j == "string") te.decodeStrings !== !1 && (j = m.from(j, K), K = "buffer");
    else if (j instanceof m) K = "buffer";
    else if (b._isUint8Array(j)) j = b._uint8ArrayToBuffer(j), K = "buffer";
    else throw new v("chunk", ["string", "Buffer", "Uint8Array"], j);
    let ue;
    return te.ending ? ue = new X() : te.destroyed && (ue = new k("write")), ue ? (o.nextTick(re, ue), R(x, ue, !0), ue) : (te.pendingcb++, Ee(x, te, j, K, re));
  }
  de.prototype.write = function(x, j, K) {
    return le(this, x, j, K) === !0;
  }, de.prototype.cork = function() {
    this._writableState.corked++;
  }, de.prototype.uncork = function() {
    let x = this._writableState;
    x.corked && (x.corked--, x.writing || Ie(this, x));
  }, de.prototype.setDefaultEncoding = function(x) {
    if (typeof x == "string" && (x = n(x)), !m.isEncoding(x)) throw new ae(x);
    return this._writableState.defaultEncoding = x, this;
  };
  function Ee(x, j, K, re, te) {
    let ue = j.objectMode ? 1 : K.length;
    j.length += ue;
    let D = j.length < j.highWaterMark;
    return D || (j.needDrain = !0), j.writing || j.corked || j.errored || !j.constructed ? (j.buffered.push({ chunk: K, encoding: re, callback: te }), j.allBuffers && re !== "buffer" && (j.allBuffers = !1), j.allNoop && te !== Q && (j.allNoop = !1)) : (j.writelen = ue, j.writecb = te, j.writing = !0, j.sync = !0, x._write(K, re, j.onwrite), j.sync = !1), D && !j.errored && !j.destroyed;
  }
  function G(x, j, K, re, te, ue, D) {
    j.writelen = re, j.writecb = D, j.writing = !0, j.sync = !0, j.destroyed ? j.onwrite(new k("write")) : K ? x._writev(te, j.onwrite) : x._write(te, ue, j.onwrite), j.sync = !1;
  }
  function pe(x, j, K, re) {
    --j.pendingcb, re(K), F(j), R(x, K);
  }
  function P(x, j) {
    let K = x._writableState, re = K.sync, te = K.writecb;
    if (typeof te != "function") {
      R(x, new B());
      return;
    }
    K.writing = !1, K.writecb = null, K.length -= K.writelen, K.writelen = 0, j ? (j.stack, K.errored || (K.errored = j), x._readableState && !x._readableState.errored && (x._readableState.errored = j), re ? o.nextTick(pe, x, K, j, te) : pe(x, K, j, te)) : (K.buffered.length > K.bufferedIndex && Ie(x, K), re ? K.afterWriteTickInfo !== null && K.afterWriteTickInfo.cb === te ? K.afterWriteTickInfo.count++ : (K.afterWriteTickInfo = { count: 1, cb: te, stream: x, state: K }, o.nextTick(ie, K.afterWriteTickInfo)) : ye(x, K, 1, te));
  }
  function ie({ stream: x, state: j, count: K, cb: re }) {
    return j.afterWriteTickInfo = null, ye(x, j, K, re);
  }
  function ye(x, j, K, re) {
    for (!j.ending && !x.destroyed && j.length === 0 && j.needDrain && (j.needDrain = !1, x.emit("drain")); K-- > 0; ) j.pendingcb--, re();
    j.destroyed && F(j), $(x, j);
  }
  function F(x) {
    if (x.writing) return;
    for (let te = x.bufferedIndex; te < x.buffered.length; ++te) {
      var j;
      let { chunk: ue, callback: D } = x.buffered[te], oe = x.objectMode ? 1 : ue.length;
      x.length -= oe, D((j = x.errored) !== null && j !== void 0 ? j : new k("write"));
    }
    let K = x[J].splice(0);
    for (let te = 0; te < K.length; te++) {
      var re;
      K[te]((re = x.errored) !== null && re !== void 0 ? re : new k("end"));
    }
    ge(x);
  }
  function Ie(x, j) {
    if (j.corked || j.bufferProcessing || j.destroyed || !j.constructed) return;
    let { buffered: K, bufferedIndex: re, objectMode: te } = j, ue = K.length - re;
    if (!ue) return;
    let D = re;
    if (j.bufferProcessing = !0, ue > 1 && x._writev) {
      j.pendingcb -= ue - 1;
      let oe = j.allNoop ? Q : (ee) => {
        for (let Oe = D; Oe < K.length; ++Oe) K[Oe].callback(ee);
      }, me = j.allNoop && D === 0 ? K : l(K, D);
      me.allBuffers = j.allBuffers, G(x, j, !0, j.length, me, "", oe), ge(j);
    } else {
      do {
        let { chunk: oe, encoding: me, callback: ee } = K[D];
        K[D++] = null;
        let Oe = te ? 1 : oe.length;
        G(x, j, !1, Oe, oe, me, ee);
      } while (D < K.length && !j.writing);
      D === K.length ? ge(j) : D > 256 ? (K.splice(0, D), j.bufferedIndex = 0) : j.bufferedIndex = D;
    }
    j.bufferProcessing = !1;
  }
  de.prototype._write = function(x, j, K) {
    if (this._writev) this._writev([{ chunk: x, encoding: j }], K);
    else throw new U("_write()");
  }, de.prototype._writev = null, de.prototype.end = function(x, j, K) {
    let re = this._writableState;
    typeof x == "function" ? (K = x, x = null, j = null) : typeof j == "function" && (K = j, j = null);
    let te;
    if (x != null) {
      let ue = le(this, x, j);
      ue instanceof f && (te = ue);
    }
    return re.corked && (re.corked = 1, this.uncork()), te || (!re.errored && !re.ending ? (re.ending = !0, $(this, re, !0), re.ended = !0) : re.finished ? te = new M("end") : re.destroyed && (te = new k("end"))), typeof K == "function" && (te || re.finished ? o.nextTick(K, te) : re[J].push(K)), this;
  };
  function V(x) {
    return x.ending && !x.destroyed && x.constructed && x.length === 0 && !x.errored && x.buffered.length === 0 && !x.finished && !x.writing && !x.errorEmitted && !x.closeEmitted;
  }
  function N(x, j) {
    let K = !1;
    function re(te) {
      if (K) {
        R(x, te ?? B());
        return;
      }
      if (K = !0, j.pendingcb--, te) {
        let ue = j[J].splice(0);
        for (let D = 0; D < ue.length; D++) ue[D](te);
        R(x, te, j.sync);
      } else V(j) && (j.prefinished = !0, x.emit("prefinish"), j.pendingcb++, o.nextTick(q, x, j));
    }
    j.sync = !0, j.pendingcb++;
    try {
      x._final(re);
    } catch (te) {
      re(te);
    }
    j.sync = !1;
  }
  function Z(x, j) {
    !j.prefinished && !j.finalCalled && (typeof x._final == "function" && !j.destroyed ? (j.finalCalled = !0, N(x, j)) : (j.prefinished = !0, x.emit("prefinish")));
  }
  function $(x, j, K) {
    V(j) && (Z(x, j), j.pendingcb === 0 && (K ? (j.pendingcb++, o.nextTick((re, te) => {
      V(te) ? q(re, te) : te.pendingcb--;
    }, x, j)) : V(j) && (j.pendingcb++, q(x, j))));
  }
  function q(x, j) {
    j.pendingcb--, j.finished = !0;
    let K = j[J].splice(0);
    for (let re = 0; re < K.length; re++) K[re]();
    if (x.emit("finish"), j.autoDestroy) {
      let re = x._readableState;
      (!re || re.autoDestroy && (re.endEmitted || re.readable === !1)) && x.destroy();
    }
  }
  r(de.prototype, { closed: { __proto__: null, get() {
    return this._writableState ? this._writableState.closed : !1;
  } }, destroyed: { __proto__: null, get() {
    return this._writableState ? this._writableState.destroyed : !1;
  }, set(x) {
    this._writableState && (this._writableState.destroyed = x);
  } }, writable: { __proto__: null, get() {
    let x = this._writableState;
    return !!x && x.writable !== !1 && !x.destroyed && !x.errored && !x.ending && !x.ended;
  }, set(x) {
    this._writableState && (this._writableState.writable = !!x);
  } }, writableFinished: { __proto__: null, get() {
    return this._writableState ? this._writableState.finished : !1;
  } }, writableObjectMode: { __proto__: null, get() {
    return this._writableState ? this._writableState.objectMode : !1;
  } }, writableBuffer: { __proto__: null, get() {
    return this._writableState && this._writableState.getBuffer();
  } }, writableEnded: { __proto__: null, get() {
    return this._writableState ? this._writableState.ending : !1;
  } }, writableNeedDrain: { __proto__: null, get() {
    let x = this._writableState;
    return x ? !x.destroyed && !x.ending && x.needDrain : !1;
  } }, writableHighWaterMark: { __proto__: null, get() {
    return this._writableState && this._writableState.highWaterMark;
  } }, writableCorked: { __proto__: null, get() {
    return this._writableState ? this._writableState.corked : 0;
  } }, writableLength: { __proto__: null, get() {
    return this._writableState && this._writableState.length;
  } }, errored: { __proto__: null, enumerable: !1, get() {
    return this._writableState ? this._writableState.errored : null;
  } }, writableAborted: { __proto__: null, enumerable: !1, get: function() {
    return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
  } } });
  var H = _.destroy;
  de.prototype.destroy = function(x, j) {
    let K = this._writableState;
    return !K.destroyed && (K.bufferedIndex < K.buffered.length || K[J].length) && o.nextTick(F, K), H.call(this, x, j), this;
  }, de.prototype._undestroy = _.undestroy, de.prototype._destroy = function(x, j) {
    j(x);
  }, de.prototype[g.captureRejectionSymbol] = function(x) {
    this.destroy(x);
  };
  var se;
  function ne() {
    return se === void 0 && (se = {}), se;
  }
  de.fromWeb = function(x, j) {
    return ne().newStreamWritableFromWritableStream(x, j);
  }, de.toWeb = function(x) {
    return ne().newWritableStreamFromStreamWritable(x);
  };
}), ta = be((s, u) => {
  he(), fe(), ce();
  var o = Kt(), l = (Je(), je(Ye)), { isReadable: f, isWritable: i, isIterable: e, isNodeStream: r, isReadableNodeStream: t, isWritableNodeStream: n, isDuplexNodeStream: c, isReadableStream: d, isWritableStream: g } = Tt(), b = Lt(), { AbortError: m, codes: { ERR_INVALID_ARG_TYPE: _, ERR_INVALID_RETURN_VALUE: E } } = it(), { destroyer: I } = er(), y = At(), v = Pr(), U = vn(), { createDeferredPromise: B } = ot(), A = Co(), k = globalThis.Blob || l.Blob, M = typeof k < "u" ? function(J) {
    return J instanceof k;
  } : function(J) {
    return !1;
  }, Y = globalThis.AbortController || ur().AbortController, { FunctionPrototypeCall: X } = Ge(), ae = class extends y {
    constructor(J) {
      super(J), (J == null ? void 0 : J.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (J == null ? void 0 : J.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  };
  u.exports = function J(W, ge) {
    if (c(W)) return W;
    if (t(W)) return Q({ readable: W });
    if (n(W)) return Q({ writable: W });
    if (r(W)) return Q({ writable: !1, readable: !1 });
    if (d(W)) return Q({ readable: v.fromWeb(W) });
    if (g(W)) return Q({ writable: U.fromWeb(W) });
    if (typeof W == "function") {
      let { value: le, write: Ee, final: G, destroy: pe } = R(W);
      if (e(le)) return A(ae, le, { objectMode: !0, write: Ee, final: G, destroy: pe });
      let P = le == null ? void 0 : le.then;
      if (typeof P == "function") {
        let ie, ye = X(P, le, (F) => {
          if (F != null) throw new E("nully", "body", F);
        }, (F) => {
          I(ie, F);
        });
        return ie = new ae({ objectMode: !0, readable: !1, write: Ee, final(F) {
          G(async () => {
            try {
              await ye, o.nextTick(F, null);
            } catch (Ie) {
              o.nextTick(F, Ie);
            }
          });
        }, destroy: pe });
      }
      throw new E("Iterable, AsyncIterable or AsyncFunction", ge, le);
    }
    if (M(W)) return J(W.arrayBuffer());
    if (e(W)) return A(ae, W, { objectMode: !0, writable: !1 });
    if (d(W == null ? void 0 : W.readable) && g(W == null ? void 0 : W.writable)) return ae.fromWeb(W);
    if (typeof (W == null ? void 0 : W.writable) == "object" || typeof (W == null ? void 0 : W.readable) == "object") {
      let le = W != null && W.readable ? t(W == null ? void 0 : W.readable) ? W == null ? void 0 : W.readable : J(W.readable) : void 0, Ee = W != null && W.writable ? n(W == null ? void 0 : W.writable) ? W == null ? void 0 : W.writable : J(W.writable) : void 0;
      return Q({ readable: le, writable: Ee });
    }
    let de = W == null ? void 0 : W.then;
    if (typeof de == "function") {
      let le;
      return X(de, W, (Ee) => {
        Ee != null && le.push(Ee), le.push(null);
      }, (Ee) => {
        I(le, Ee);
      }), le = new ae({ objectMode: !0, writable: !1, read() {
      } });
    }
    throw new _(ge, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], W);
  };
  function R(J) {
    let { promise: W, resolve: ge } = B(), de = new Y(), le = de.signal;
    return { value: J(async function* () {
      for (; ; ) {
        let Ee = W;
        W = null;
        let { chunk: G, done: pe, cb: P } = await Ee;
        if (o.nextTick(P), pe) return;
        if (le.aborted) throw new m(void 0, { cause: le.reason });
        ({ promise: W, resolve: ge } = B()), yield G;
      }
    }(), { signal: le }), write(Ee, G, pe) {
      let P = ge;
      ge = null, P({ chunk: Ee, done: !1, cb: pe });
    }, final(Ee) {
      let G = ge;
      ge = null, G({ done: !0, cb: Ee });
    }, destroy(Ee, G) {
      de.abort(), G(Ee);
    } };
  }
  function Q(J) {
    let W = J.readable && typeof J.readable.read != "function" ? v.wrap(J.readable) : J.readable, ge = J.writable, de = !!f(W), le = !!i(ge), Ee, G, pe, P, ie;
    function ye(F) {
      let Ie = P;
      P = null, Ie ? Ie(F) : F && ie.destroy(F);
    }
    return ie = new ae({ readableObjectMode: !!(W != null && W.readableObjectMode), writableObjectMode: !!(ge != null && ge.writableObjectMode), readable: de, writable: le }), le && (b(ge, (F) => {
      le = !1, F && I(W, F), ye(F);
    }), ie._write = function(F, Ie, V) {
      ge.write(F, Ie) ? V() : Ee = V;
    }, ie._final = function(F) {
      ge.end(), G = F;
    }, ge.on("drain", function() {
      if (Ee) {
        let F = Ee;
        Ee = null, F();
      }
    }), ge.on("finish", function() {
      if (G) {
        let F = G;
        G = null, F();
      }
    })), de && (b(W, (F) => {
      de = !1, F && I(W, F), ye(F);
    }), W.on("readable", function() {
      if (pe) {
        let F = pe;
        pe = null, F();
      }
    }), W.on("end", function() {
      ie.push(null);
    }), ie._read = function() {
      for (; ; ) {
        let F = W.read();
        if (F === null) {
          pe = ie._read;
          return;
        }
        if (!ie.push(F)) return;
      }
    }), ie._destroy = function(F, Ie) {
      !F && P !== null && (F = new m()), pe = null, Ee = null, G = null, P === null ? Ie(F) : (P = Ie, I(ge, F), I(W, F));
    }, ie;
  }
}), At = be((s, u) => {
  he(), fe(), ce();
  var { ObjectDefineProperties: o, ObjectGetOwnPropertyDescriptor: l, ObjectKeys: f, ObjectSetPrototypeOf: i } = Ge();
  u.exports = t;
  var e = Pr(), r = vn();
  i(t.prototype, e.prototype), i(t, e);
  {
    let g = f(r.prototype);
    for (let b = 0; b < g.length; b++) {
      let m = g[b];
      t.prototype[m] || (t.prototype[m] = r.prototype[m]);
    }
  }
  function t(g) {
    if (!(this instanceof t)) return new t(g);
    e.call(this, g), r.call(this, g), g ? (this.allowHalfOpen = g.allowHalfOpen !== !1, g.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), g.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  o(t.prototype, { writable: { __proto__: null, ...l(r.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...l(r.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...l(r.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...l(r.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...l(r.prototype, "writableLength") }, writableFinished: { __proto__: null, ...l(r.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...l(r.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...l(r.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...l(r.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
    return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
  }, set(g) {
    this._readableState && this._writableState && (this._readableState.destroyed = g, this._writableState.destroyed = g);
  } } });
  var n;
  function c() {
    return n === void 0 && (n = {}), n;
  }
  t.fromWeb = function(g, b) {
    return c().newStreamDuplexFromReadableWritablePair(g, b);
  }, t.toWeb = function(g) {
    return c().newReadableWritablePairFromDuplex(g);
  };
  var d;
  t.from = function(g) {
    return d || (d = ta()), d(g, "body");
  };
}), Oo = be((s, u) => {
  he(), fe(), ce();
  var { ObjectSetPrototypeOf: o, Symbol: l } = Ge();
  u.exports = t;
  var { ERR_METHOD_NOT_IMPLEMENTED: f } = it().codes, i = At(), { getHighWaterMark: e } = Rr();
  o(t.prototype, i.prototype), o(t, i);
  var r = l("kCallback");
  function t(d) {
    if (!(this instanceof t)) return new t(d);
    let g = d ? e(this, d, "readableHighWaterMark", !0) : null;
    g === 0 && (d = { ...d, highWaterMark: null, readableHighWaterMark: g, writableHighWaterMark: d.writableHighWaterMark || 0 }), i.call(this, d), this._readableState.sync = !1, this[r] = null, d && (typeof d.transform == "function" && (this._transform = d.transform), typeof d.flush == "function" && (this._flush = d.flush)), this.on("prefinish", c);
  }
  function n(d) {
    typeof this._flush == "function" && !this.destroyed ? this._flush((g, b) => {
      if (g) {
        d ? d(g) : this.destroy(g);
        return;
      }
      b != null && this.push(b), this.push(null), d && d();
    }) : (this.push(null), d && d());
  }
  function c() {
    this._final !== n && n.call(this);
  }
  t.prototype._final = n, t.prototype._transform = function(d, g, b) {
    throw new f("_transform()");
  }, t.prototype._write = function(d, g, b) {
    let m = this._readableState, _ = this._writableState, E = m.length;
    this._transform(d, g, (I, y) => {
      if (I) {
        b(I);
        return;
      }
      y != null && this.push(y), _.ended || E === m.length || m.length < m.highWaterMark ? b() : this[r] = b;
    });
  }, t.prototype._read = function() {
    if (this[r]) {
      let d = this[r];
      this[r] = null, d();
    }
  };
}), Ro = be((s, u) => {
  he(), fe(), ce();
  var { ObjectSetPrototypeOf: o } = Ge();
  u.exports = f;
  var l = Oo();
  o(f.prototype, l.prototype), o(f, l);
  function f(i) {
    if (!(this instanceof f)) return new f(i);
    l.call(this, i);
  }
  f.prototype._transform = function(i, e, r) {
    r(null, i);
  };
}), En = be((s, u) => {
  he(), fe(), ce();
  var o = Kt(), { ArrayIsArray: l, Promise: f, SymbolAsyncIterator: i, SymbolDispose: e } = Ge(), r = Lt(), { once: t } = ot(), n = er(), c = At(), { aggregateTwoErrors: d, codes: { ERR_INVALID_ARG_TYPE: g, ERR_INVALID_RETURN_VALUE: b, ERR_MISSING_ARGS: m, ERR_STREAM_DESTROYED: _, ERR_STREAM_PREMATURE_CLOSE: E }, AbortError: I } = it(), { validateFunction: y, validateAbortSignal: v } = hr(), { isIterable: U, isReadable: B, isReadableNodeStream: A, isNodeStream: k, isTransformStream: M, isWebStream: Y, isReadableStream: X, isReadableFinished: ae } = Tt(), R = globalThis.AbortController || ur().AbortController, Q, J, W;
  function ge(F, Ie, V) {
    let N = !1;
    F.on("close", () => {
      N = !0;
    });
    let Z = r(F, { readable: Ie, writable: V }, ($) => {
      N = !$;
    });
    return { destroy: ($) => {
      N || (N = !0, n.destroyer(F, $ || new _("pipe")));
    }, cleanup: Z };
  }
  function de(F) {
    return y(F[F.length - 1], "streams[stream.length - 1]"), F.pop();
  }
  function le(F) {
    if (U(F)) return F;
    if (A(F)) return Ee(F);
    throw new g("val", ["Readable", "Iterable", "AsyncIterable"], F);
  }
  async function* Ee(F) {
    J || (J = Pr()), yield* J.prototype[i].call(F);
  }
  async function G(F, Ie, V, { end: N }) {
    let Z, $ = null, q = (ne) => {
      if (ne && (Z = ne), $) {
        let x = $;
        $ = null, x();
      }
    }, H = () => new f((ne, x) => {
      Z ? x(Z) : $ = () => {
        Z ? x(Z) : ne();
      };
    });
    Ie.on("drain", q);
    let se = r(Ie, { readable: !1 }, q);
    try {
      Ie.writableNeedDrain && await H();
      for await (let ne of F) Ie.write(ne) || await H();
      N && (Ie.end(), await H()), V();
    } catch (ne) {
      V(Z !== ne ? d(Z, ne) : ne);
    } finally {
      se(), Ie.off("drain", q);
    }
  }
  async function pe(F, Ie, V, { end: N }) {
    M(Ie) && (Ie = Ie.writable);
    let Z = Ie.getWriter();
    try {
      for await (let $ of F) await Z.ready, Z.write($).catch(() => {
      });
      await Z.ready, N && await Z.close(), V();
    } catch ($) {
      try {
        await Z.abort($), V($);
      } catch (q) {
        V(q);
      }
    }
  }
  function P(...F) {
    return ie(F, t(de(F)));
  }
  function ie(F, Ie, V) {
    if (F.length === 1 && l(F[0]) && (F = F[0]), F.length < 2) throw new m("streams");
    let N = new R(), Z = N.signal, $ = V == null ? void 0 : V.signal, q = [];
    v($, "options.signal");
    function H() {
      te(new I());
    }
    W = W || ot().addAbortListener;
    let se;
    $ && (se = W($, H));
    let ne, x, j = [], K = 0;
    function re(me) {
      te(me, --K === 0);
    }
    function te(me, ee) {
      var Oe;
      if (me && (!ne || ne.code === "ERR_STREAM_PREMATURE_CLOSE") && (ne = me), !(!ne && !ee)) {
        for (; j.length; ) j.shift()(ne);
        (Oe = se) === null || Oe === void 0 || Oe[e](), N.abort(), ee && (ne || q.forEach((a) => a()), o.nextTick(Ie, ne, x));
      }
    }
    let ue;
    for (let me = 0; me < F.length; me++) {
      let ee = F[me], Oe = me < F.length - 1, a = me > 0, h = Oe || (V == null ? void 0 : V.end) !== !1, p = me === F.length - 1;
      if (k(ee)) {
        let w = function(T) {
          T && T.name !== "AbortError" && T.code !== "ERR_STREAM_PREMATURE_CLOSE" && re(T);
        };
        if (h) {
          let { destroy: T, cleanup: L } = ge(ee, Oe, a);
          j.push(T), B(ee) && p && q.push(L);
        }
        ee.on("error", w), B(ee) && p && q.push(() => {
          ee.removeListener("error", w);
        });
      }
      if (me === 0) if (typeof ee == "function") {
        if (ue = ee({ signal: Z }), !U(ue)) throw new b("Iterable, AsyncIterable or Stream", "source", ue);
      } else U(ee) || A(ee) || M(ee) ? ue = ee : ue = c.from(ee);
      else if (typeof ee == "function") {
        if (M(ue)) {
          var D;
          ue = le((D = ue) === null || D === void 0 ? void 0 : D.readable);
        } else ue = le(ue);
        if (ue = ee(ue, { signal: Z }), Oe) {
          if (!U(ue, !0)) throw new b("AsyncIterable", `transform[${me - 1}]`, ue);
        } else {
          var oe;
          Q || (Q = Ro());
          let w = new Q({ objectMode: !0 }), T = (oe = ue) === null || oe === void 0 ? void 0 : oe.then;
          if (typeof T == "function") K++, T.call(ue, (_e) => {
            x = _e, _e != null && w.write(_e), h && w.end(), o.nextTick(re);
          }, (_e) => {
            w.destroy(_e), o.nextTick(re, _e);
          });
          else if (U(ue, !0)) K++, G(ue, w, re, { end: h });
          else if (X(ue) || M(ue)) {
            let _e = ue.readable || ue;
            K++, G(_e, w, re, { end: h });
          } else throw new b("AsyncIterable or Promise", "destination", ue);
          ue = w;
          let { destroy: L, cleanup: z } = ge(ue, !1, !0);
          j.push(L), p && q.push(z);
        }
      } else if (k(ee)) {
        if (A(ue)) {
          K += 2;
          let w = ye(ue, ee, re, { end: h });
          B(ee) && p && q.push(w);
        } else if (M(ue) || X(ue)) {
          let w = ue.readable || ue;
          K++, G(w, ee, re, { end: h });
        } else if (U(ue)) K++, G(ue, ee, re, { end: h });
        else throw new g("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], ue);
        ue = ee;
      } else if (Y(ee)) {
        if (A(ue)) K++, pe(le(ue), ee, re, { end: h });
        else if (X(ue) || U(ue)) K++, pe(ue, ee, re, { end: h });
        else if (M(ue)) K++, pe(ue.readable, ee, re, { end: h });
        else throw new g("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], ue);
        ue = ee;
      } else ue = c.from(ee);
    }
    return (Z != null && Z.aborted || $ != null && $.aborted) && o.nextTick(H), ue;
  }
  function ye(F, Ie, V, { end: N }) {
    let Z = !1;
    if (Ie.on("close", () => {
      Z || V(new E());
    }), F.pipe(Ie, { end: !1 }), N) {
      let $ = function() {
        Z = !0, Ie.end();
      };
      ae(F) ? o.nextTick($) : F.once("end", $);
    } else V();
    return r(F, { readable: !0, writable: !1 }, ($) => {
      let q = F._readableState;
      $ && $.code === "ERR_STREAM_PREMATURE_CLOSE" && q && q.ended && !q.errored && !q.errorEmitted ? F.once("end", V).once("error", V) : V($);
    }), r(Ie, { readable: !1, writable: !0 }, V);
  }
  u.exports = { pipelineImpl: ie, pipeline: P };
}), Po = be((s, u) => {
  he(), fe(), ce();
  var { pipeline: o } = En(), l = At(), { destroyer: f } = er(), { isNodeStream: i, isReadable: e, isWritable: r, isWebStream: t, isTransformStream: n, isWritableStream: c, isReadableStream: d } = Tt(), { AbortError: g, codes: { ERR_INVALID_ARG_VALUE: b, ERR_MISSING_ARGS: m } } = it(), _ = Lt();
  u.exports = function(...E) {
    if (E.length === 0) throw new m("streams");
    if (E.length === 1) return l.from(E[0]);
    let I = [...E];
    if (typeof E[0] == "function" && (E[0] = l.from(E[0])), typeof E[E.length - 1] == "function") {
      let R = E.length - 1;
      E[R] = l.from(E[R]);
    }
    for (let R = 0; R < E.length; ++R) if (!(!i(E[R]) && !t(E[R]))) {
      if (R < E.length - 1 && !(e(E[R]) || d(E[R]) || n(E[R]))) throw new b(`streams[${R}]`, I[R], "must be readable");
      if (R > 0 && !(r(E[R]) || c(E[R]) || n(E[R]))) throw new b(`streams[${R}]`, I[R], "must be writable");
    }
    let y, v, U, B, A;
    function k(R) {
      let Q = B;
      B = null, Q ? Q(R) : R ? A.destroy(R) : !ae && !X && A.destroy();
    }
    let M = E[0], Y = o(E, k), X = !!(r(M) || c(M) || n(M)), ae = !!(e(Y) || d(Y) || n(Y));
    if (A = new l({ writableObjectMode: !!(M != null && M.writableObjectMode), readableObjectMode: !!(Y != null && Y.readableObjectMode), writable: X, readable: ae }), X) {
      if (i(M)) A._write = function(Q, J, W) {
        M.write(Q, J) ? W() : y = W;
      }, A._final = function(Q) {
        M.end(), v = Q;
      }, M.on("drain", function() {
        if (y) {
          let Q = y;
          y = null, Q();
        }
      });
      else if (t(M)) {
        let Q = (n(M) ? M.writable : M).getWriter();
        A._write = async function(J, W, ge) {
          try {
            await Q.ready, Q.write(J).catch(() => {
            }), ge();
          } catch (de) {
            ge(de);
          }
        }, A._final = async function(J) {
          try {
            await Q.ready, Q.close().catch(() => {
            }), v = J;
          } catch (W) {
            J(W);
          }
        };
      }
      let R = n(Y) ? Y.readable : Y;
      _(R, () => {
        if (v) {
          let Q = v;
          v = null, Q();
        }
      });
    }
    if (ae) {
      if (i(Y)) Y.on("readable", function() {
        if (U) {
          let R = U;
          U = null, R();
        }
      }), Y.on("end", function() {
        A.push(null);
      }), A._read = function() {
        for (; ; ) {
          let R = Y.read();
          if (R === null) {
            U = A._read;
            return;
          }
          if (!A.push(R)) return;
        }
      };
      else if (t(Y)) {
        let R = (n(Y) ? Y.readable : Y).getReader();
        A._read = async function() {
          for (; ; ) try {
            let { value: Q, done: J } = await R.read();
            if (!A.push(Q)) return;
            if (J) {
              A.push(null);
              return;
            }
          } catch {
            return;
          }
        };
      }
    }
    return A._destroy = function(R, Q) {
      !R && B !== null && (R = new g()), U = null, y = null, v = null, B === null ? Q(R) : (B = Q, i(Y) && f(Y, R));
    }, A;
  };
}), ra = be((s, u) => {
  he(), fe(), ce();
  var o = globalThis.AbortController || ur().AbortController, { codes: { ERR_INVALID_ARG_VALUE: l, ERR_INVALID_ARG_TYPE: f, ERR_MISSING_ARGS: i, ERR_OUT_OF_RANGE: e }, AbortError: r } = it(), { validateAbortSignal: t, validateInteger: n, validateObject: c } = hr(), d = Ge().Symbol("kWeak"), g = Ge().Symbol("kResistStopPropagation"), { finished: b } = Lt(), m = Po(), { addAbortSignalNoValidate: _ } = Or(), { isWritable: E, isNodeStream: I } = Tt(), { deprecate: y } = ot(), { ArrayPrototypePush: v, Boolean: U, MathFloor: B, Number: A, NumberIsNaN: k, Promise: M, PromiseReject: Y, PromiseResolve: X, PromisePrototypeThen: ae, Symbol: R } = Ge(), Q = R("kEmpty"), J = R("kEof");
  function W($, q) {
    if (q != null && c(q, "options"), (q == null ? void 0 : q.signal) != null && t(q.signal, "options.signal"), I($) && !E($)) throw new l("stream", $, "must be writable");
    let H = m(this, $);
    return q != null && q.signal && _(q.signal, H), H;
  }
  function ge($, q) {
    if (typeof $ != "function") throw new f("fn", ["Function", "AsyncFunction"], $);
    q != null && c(q, "options"), (q == null ? void 0 : q.signal) != null && t(q.signal, "options.signal");
    let H = 1;
    (q == null ? void 0 : q.concurrency) != null && (H = B(q.concurrency));
    let se = H - 1;
    return (q == null ? void 0 : q.highWaterMark) != null && (se = B(q.highWaterMark)), n(H, "options.concurrency", 1), n(se, "options.highWaterMark", 0), se += H, (async function* () {
      let ne = ot().AbortSignalAny([q == null ? void 0 : q.signal].filter(U)), x = this, j = [], K = { signal: ne }, re, te, ue = !1, D = 0;
      function oe() {
        ue = !0, me();
      }
      function me() {
        D -= 1, ee();
      }
      function ee() {
        te && !ue && D < H && j.length < se && (te(), te = null);
      }
      async function Oe() {
        try {
          for await (let a of x) {
            if (ue) return;
            if (ne.aborted) throw new r();
            try {
              if (a = $(a, K), a === Q) continue;
              a = X(a);
            } catch (h) {
              a = Y(h);
            }
            D += 1, ae(a, me, oe), j.push(a), re && (re(), re = null), !ue && (j.length >= se || D >= H) && await new M((h) => {
              te = h;
            });
          }
          j.push(J);
        } catch (a) {
          let h = Y(a);
          ae(h, me, oe), j.push(h);
        } finally {
          ue = !0, re && (re(), re = null);
        }
      }
      Oe();
      try {
        for (; ; ) {
          for (; j.length > 0; ) {
            let a = await j[0];
            if (a === J) return;
            if (ne.aborted) throw new r();
            a !== Q && (yield a), j.shift(), ee();
          }
          await new M((a) => {
            re = a;
          });
        }
      } finally {
        ue = !0, te && (te(), te = null);
      }
    }).call(this);
  }
  function de($ = void 0) {
    return $ != null && c($, "options"), ($ == null ? void 0 : $.signal) != null && t($.signal, "options.signal"), (async function* () {
      let q = 0;
      for await (let se of this) {
        var H;
        if ($ != null && (H = $.signal) !== null && H !== void 0 && H.aborted) throw new r({ cause: $.signal.reason });
        yield [q++, se];
      }
    }).call(this);
  }
  async function le($, q = void 0) {
    for await (let H of P.call(this, $, q)) return !0;
    return !1;
  }
  async function Ee($, q = void 0) {
    if (typeof $ != "function") throw new f("fn", ["Function", "AsyncFunction"], $);
    return !await le.call(this, async (...H) => !await $(...H), q);
  }
  async function G($, q) {
    for await (let H of P.call(this, $, q)) return H;
  }
  async function pe($, q) {
    if (typeof $ != "function") throw new f("fn", ["Function", "AsyncFunction"], $);
    async function H(se, ne) {
      return await $(se, ne), Q;
    }
    for await (let se of ge.call(this, H, q)) ;
  }
  function P($, q) {
    if (typeof $ != "function") throw new f("fn", ["Function", "AsyncFunction"], $);
    async function H(se, ne) {
      return await $(se, ne) ? se : Q;
    }
    return ge.call(this, H, q);
  }
  var ie = class extends i {
    constructor() {
      super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
    }
  };
  async function ye($, q, H) {
    var se;
    if (typeof $ != "function") throw new f("reducer", ["Function", "AsyncFunction"], $);
    H != null && c(H, "options"), (H == null ? void 0 : H.signal) != null && t(H.signal, "options.signal");
    let ne = arguments.length > 1;
    if (H != null && (se = H.signal) !== null && se !== void 0 && se.aborted) {
      let te = new r(void 0, { cause: H.signal.reason });
      throw this.once("error", () => {
      }), await b(this.destroy(te)), te;
    }
    let x = new o(), j = x.signal;
    if (H != null && H.signal) {
      let te = { once: !0, [d]: this, [g]: !0 };
      H.signal.addEventListener("abort", () => x.abort(), te);
    }
    let K = !1;
    try {
      for await (let te of this) {
        var re;
        if (K = !0, H != null && (re = H.signal) !== null && re !== void 0 && re.aborted) throw new r();
        ne ? q = await $(q, te, { signal: j }) : (q = te, ne = !0);
      }
      if (!K && !ne) throw new ie();
    } finally {
      x.abort();
    }
    return q;
  }
  async function F($) {
    $ != null && c($, "options"), ($ == null ? void 0 : $.signal) != null && t($.signal, "options.signal");
    let q = [];
    for await (let se of this) {
      var H;
      if ($ != null && (H = $.signal) !== null && H !== void 0 && H.aborted) throw new r(void 0, { cause: $.signal.reason });
      v(q, se);
    }
    return q;
  }
  function Ie($, q) {
    let H = ge.call(this, $, q);
    return (async function* () {
      for await (let se of H) yield* se;
    }).call(this);
  }
  function V($) {
    if ($ = A($), k($)) return 0;
    if ($ < 0) throw new e("number", ">= 0", $);
    return $;
  }
  function N($, q = void 0) {
    return q != null && c(q, "options"), (q == null ? void 0 : q.signal) != null && t(q.signal, "options.signal"), $ = V($), (async function* () {
      var H;
      if (q != null && (H = q.signal) !== null && H !== void 0 && H.aborted) throw new r();
      for await (let ne of this) {
        var se;
        if (q != null && (se = q.signal) !== null && se !== void 0 && se.aborted) throw new r();
        $-- <= 0 && (yield ne);
      }
    }).call(this);
  }
  function Z($, q = void 0) {
    return q != null && c(q, "options"), (q == null ? void 0 : q.signal) != null && t(q.signal, "options.signal"), $ = V($), (async function* () {
      var H;
      if (q != null && (H = q.signal) !== null && H !== void 0 && H.aborted) throw new r();
      for await (let ne of this) {
        var se;
        if (q != null && (se = q.signal) !== null && se !== void 0 && se.aborted) throw new r();
        if ($-- > 0 && (yield ne), $ <= 0) return;
      }
    }).call(this);
  }
  u.exports.streamReturningOperators = { asIndexedPairs: y(de, "readable.asIndexedPairs will be removed in a future version."), drop: N, filter: P, flatMap: Ie, map: ge, take: Z, compose: W }, u.exports.promiseReturningOperators = { every: Ee, forEach: pe, reduce: ye, toArray: F, some: le, find: G };
}), xo = be((s, u) => {
  he(), fe(), ce();
  var { ArrayPrototypePop: o, Promise: l } = Ge(), { isIterable: f, isNodeStream: i, isWebStream: e } = Tt(), { pipelineImpl: r } = En(), { finished: t } = Lt();
  Bo();
  function n(...c) {
    return new l((d, g) => {
      let b, m, _ = c[c.length - 1];
      if (_ && typeof _ == "object" && !i(_) && !f(_) && !e(_)) {
        let E = o(c);
        b = E.signal, m = E.end;
      }
      r(c, (E, I) => {
        E ? g(E) : d(I);
      }, { signal: b, end: m });
    });
  }
  u.exports = { finished: t, pipeline: n };
}), Bo = be((s, u) => {
  he(), fe(), ce();
  var { Buffer: o } = (Je(), je(Ye)), { ObjectDefineProperty: l, ObjectKeys: f, ReflectApply: i } = Ge(), { promisify: { custom: e } } = ot(), { streamReturningOperators: r, promiseReturningOperators: t } = ra(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: n } } = it(), c = Po(), { setDefaultHighWaterMark: d, getDefaultHighWaterMark: g } = Rr(), { pipeline: b } = En(), { destroyer: m } = er(), _ = Lt(), E = xo(), I = Tt(), y = u.exports = _n().Stream;
  y.isDestroyed = I.isDestroyed, y.isDisturbed = I.isDisturbed, y.isErrored = I.isErrored, y.isReadable = I.isReadable, y.isWritable = I.isWritable, y.Readable = Pr();
  for (let U of f(r)) {
    let B = function(...k) {
      if (new.target) throw n();
      return y.Readable.from(i(A, this, k));
    }, A = r[U];
    l(B, "name", { __proto__: null, value: A.name }), l(B, "length", { __proto__: null, value: A.length }), l(y.Readable.prototype, U, { __proto__: null, value: B, enumerable: !1, configurable: !0, writable: !0 });
  }
  for (let U of f(t)) {
    let B = function(...k) {
      if (new.target) throw n();
      return i(A, this, k);
    }, A = t[U];
    l(B, "name", { __proto__: null, value: A.name }), l(B, "length", { __proto__: null, value: A.length }), l(y.Readable.prototype, U, { __proto__: null, value: B, enumerable: !1, configurable: !0, writable: !0 });
  }
  y.Writable = vn(), y.Duplex = At(), y.Transform = Oo(), y.PassThrough = Ro(), y.pipeline = b;
  var { addAbortSignal: v } = Or();
  y.addAbortSignal = v, y.finished = _, y.destroy = m, y.compose = c, y.setDefaultHighWaterMark = d, y.getDefaultHighWaterMark = g, l(y, "promises", { __proto__: null, configurable: !0, enumerable: !0, get() {
    return E;
  } }), l(b, e, { __proto__: null, enumerable: !0, get() {
    return E.pipeline;
  } }), l(_, e, { __proto__: null, enumerable: !0, get() {
    return E.finished;
  } }), y.Stream = y, y._isUint8Array = function(U) {
    return U instanceof Uint8Array;
  }, y._uint8ArrayToBuffer = function(U) {
    return o.from(U.buffer, U.byteOffset, U.byteLength);
  };
}), Yt = be((s, u) => {
  he(), fe(), ce();
  var o = Bo(), l = xo(), f = o.Readable.destroy;
  u.exports = o.Readable, u.exports._uint8ArrayToBuffer = o._uint8ArrayToBuffer, u.exports._isUint8Array = o._isUint8Array, u.exports.isDisturbed = o.isDisturbed, u.exports.isErrored = o.isErrored, u.exports.isReadable = o.isReadable, u.exports.Readable = o.Readable, u.exports.Writable = o.Writable, u.exports.Duplex = o.Duplex, u.exports.Transform = o.Transform, u.exports.PassThrough = o.PassThrough, u.exports.addAbortSignal = o.addAbortSignal, u.exports.finished = o.finished, u.exports.destroy = o.destroy, u.exports.destroy = f, u.exports.pipeline = o.pipeline, u.exports.compose = o.compose, Object.defineProperty(o, "promises", { configurable: !0, enumerable: !0, get() {
    return l;
  } }), u.exports.Stream = o.Stream, u.exports.default = u.exports;
}), ia = be((s, u) => {
  he(), fe(), ce(), typeof Object.create == "function" ? u.exports = function(o, l) {
    l && (o.super_ = l, o.prototype = Object.create(l.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }));
  } : u.exports = function(o, l) {
    if (l) {
      o.super_ = l;
      var f = function() {
      };
      f.prototype = l.prototype, o.prototype = new f(), o.prototype.constructor = o;
    }
  };
}), na = be((s, u) => {
  he(), fe(), ce();
  var { Buffer: o } = (Je(), je(Ye)), l = Symbol.for("BufferList");
  function f(i) {
    if (!(this instanceof f)) return new f(i);
    f._init.call(this, i);
  }
  f._init = function(i) {
    Object.defineProperty(this, l, { value: !0 }), this._bufs = [], this.length = 0, i && this.append(i);
  }, f.prototype._new = function(i) {
    return new f(i);
  }, f.prototype._offset = function(i) {
    if (i === 0) return [0, 0];
    let e = 0;
    for (let r = 0; r < this._bufs.length; r++) {
      let t = e + this._bufs[r].length;
      if (i < t || r === this._bufs.length - 1) return [r, i - e];
      e = t;
    }
  }, f.prototype._reverseOffset = function(i) {
    let e = i[0], r = i[1];
    for (let t = 0; t < e; t++) r += this._bufs[t].length;
    return r;
  }, f.prototype.get = function(i) {
    if (i > this.length || i < 0) return;
    let e = this._offset(i);
    return this._bufs[e[0]][e[1]];
  }, f.prototype.slice = function(i, e) {
    return typeof i == "number" && i < 0 && (i += this.length), typeof e == "number" && e < 0 && (e += this.length), this.copy(null, 0, i, e);
  }, f.prototype.copy = function(i, e, r, t) {
    if ((typeof r != "number" || r < 0) && (r = 0), (typeof t != "number" || t > this.length) && (t = this.length), r >= this.length || t <= 0) return i || o.alloc(0);
    let n = !!i, c = this._offset(r), d = t - r, g = d, b = n && e || 0, m = c[1];
    if (r === 0 && t === this.length) {
      if (!n) return this._bufs.length === 1 ? this._bufs[0] : o.concat(this._bufs, this.length);
      for (let _ = 0; _ < this._bufs.length; _++) this._bufs[_].copy(i, b), b += this._bufs[_].length;
      return i;
    }
    if (g <= this._bufs[c[0]].length - m) return n ? this._bufs[c[0]].copy(i, e, m, m + g) : this._bufs[c[0]].slice(m, m + g);
    n || (i = o.allocUnsafe(d));
    for (let _ = c[0]; _ < this._bufs.length; _++) {
      let E = this._bufs[_].length - m;
      if (g > E) this._bufs[_].copy(i, b, m), b += E;
      else {
        this._bufs[_].copy(i, b, m, m + g), b += E;
        break;
      }
      g -= E, m && (m = 0);
    }
    return i.length > b ? i.slice(0, b) : i;
  }, f.prototype.shallowSlice = function(i, e) {
    if (i = i || 0, e = typeof e != "number" ? this.length : e, i < 0 && (i += this.length), e < 0 && (e += this.length), i === e) return this._new();
    let r = this._offset(i), t = this._offset(e), n = this._bufs.slice(r[0], t[0] + 1);
    return t[1] === 0 ? n.pop() : n[n.length - 1] = n[n.length - 1].slice(0, t[1]), r[1] !== 0 && (n[0] = n[0].slice(r[1])), this._new(n);
  }, f.prototype.toString = function(i, e, r) {
    return this.slice(e, r).toString(i);
  }, f.prototype.consume = function(i) {
    if (i = Math.trunc(i), Number.isNaN(i) || i <= 0) return this;
    for (; this._bufs.length; ) if (i >= this._bufs[0].length) i -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
    else {
      this._bufs[0] = this._bufs[0].slice(i), this.length -= i;
      break;
    }
    return this;
  }, f.prototype.duplicate = function() {
    let i = this._new();
    for (let e = 0; e < this._bufs.length; e++) i.append(this._bufs[e]);
    return i;
  }, f.prototype.append = function(i) {
    if (i == null) return this;
    if (i.buffer) this._appendBuffer(o.from(i.buffer, i.byteOffset, i.byteLength));
    else if (Array.isArray(i)) for (let e = 0; e < i.length; e++) this.append(i[e]);
    else if (this._isBufferList(i)) for (let e = 0; e < i._bufs.length; e++) this.append(i._bufs[e]);
    else typeof i == "number" && (i = i.toString()), this._appendBuffer(o.from(i));
    return this;
  }, f.prototype._appendBuffer = function(i) {
    this._bufs.push(i), this.length += i.length;
  }, f.prototype.indexOf = function(i, e, r) {
    if (r === void 0 && typeof e == "string" && (r = e, e = void 0), typeof i == "function" || Array.isArray(i)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    if (typeof i == "number" ? i = o.from([i]) : typeof i == "string" ? i = o.from(i, r) : this._isBufferList(i) ? i = i.slice() : Array.isArray(i.buffer) ? i = o.from(i.buffer, i.byteOffset, i.byteLength) : o.isBuffer(i) || (i = o.from(i)), e = Number(e || 0), isNaN(e) && (e = 0), e < 0 && (e = this.length + e), e < 0 && (e = 0), i.length === 0) return e > this.length ? this.length : e;
    let t = this._offset(e), n = t[0], c = t[1];
    for (; n < this._bufs.length; n++) {
      let d = this._bufs[n];
      for (; c < d.length; ) if (d.length - c >= i.length) {
        let g = d.indexOf(i, c);
        if (g !== -1) return this._reverseOffset([n, g]);
        c = d.length - i.length + 1;
      } else {
        let g = this._reverseOffset([n, c]);
        if (this._match(g, i)) return g;
        c++;
      }
      c = 0;
    }
    return -1;
  }, f.prototype._match = function(i, e) {
    if (this.length - i < e.length) return !1;
    for (let r = 0; r < e.length; r++) if (this.get(i + r) !== e[r]) return !1;
    return !0;
  }, function() {
    let i = { readDoubleBE: 8, readDoubleLE: 8, readFloatBE: 4, readFloatLE: 4, readBigInt64BE: 8, readBigInt64LE: 8, readBigUInt64BE: 8, readBigUInt64LE: 8, readInt32BE: 4, readInt32LE: 4, readUInt32BE: 4, readUInt32LE: 4, readInt16BE: 2, readInt16LE: 2, readUInt16BE: 2, readUInt16LE: 2, readInt8: 1, readUInt8: 1, readIntBE: null, readIntLE: null, readUIntBE: null, readUIntLE: null };
    for (let e in i) (function(r) {
      i[r] === null ? f.prototype[r] = function(t, n) {
        return this.slice(t, t + n)[r](0, n);
      } : f.prototype[r] = function(t = 0) {
        return this.slice(t, t + i[r])[r](0);
      };
    })(e);
  }(), f.prototype._isBufferList = function(i) {
    return i instanceof f || f.isBufferList(i);
  }, f.isBufferList = function(i) {
    return i != null && i[l];
  }, u.exports = f;
}), oa = be((s, u) => {
  he(), fe(), ce();
  var o = Yt().Duplex, l = ia(), f = na();
  function i(e) {
    if (!(this instanceof i)) return new i(e);
    if (typeof e == "function") {
      this._callback = e;
      let r = (function(t) {
        this._callback && (this._callback(t), this._callback = null);
      }).bind(this);
      this.on("pipe", function(t) {
        t.on("error", r);
      }), this.on("unpipe", function(t) {
        t.removeListener("error", r);
      }), e = null;
    }
    f._init.call(this, e), o.call(this);
  }
  l(i, o), Object.assign(i.prototype, f.prototype), i.prototype._new = function(e) {
    return new i(e);
  }, i.prototype._write = function(e, r, t) {
    this._appendBuffer(e), typeof t == "function" && t();
  }, i.prototype._read = function(e) {
    if (!this.length) return this.push(null);
    e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e);
  }, i.prototype.end = function(e) {
    o.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null);
  }, i.prototype._destroy = function(e, r) {
    this._bufs.length = 0, this.length = 0, r(e);
  }, i.prototype._isBufferList = function(e) {
    return e instanceof i || e instanceof f || i.isBufferList(e);
  }, i.isBufferList = f.isBufferList, u.exports = i, u.exports.BufferListStream = i, u.exports.BufferList = f;
}), sa = be((s, u) => {
  he(), fe(), ce();
  var o = class {
    constructor() {
      this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null;
    }
  };
  u.exports = o;
}), Mo = be((s, u) => {
  he(), fe(), ce();
  var o = u.exports, { Buffer: l } = (Je(), je(Ye));
  o.types = { 0: "reserved", 1: "connect", 2: "connack", 3: "publish", 4: "puback", 5: "pubrec", 6: "pubrel", 7: "pubcomp", 8: "subscribe", 9: "suback", 10: "unsubscribe", 11: "unsuback", 12: "pingreq", 13: "pingresp", 14: "disconnect", 15: "auth" }, o.requiredHeaderFlags = { 1: 0, 2: 0, 4: 0, 5: 0, 6: 2, 7: 0, 8: 2, 9: 0, 10: 2, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 }, o.requiredHeaderFlagsErrors = {};
  for (let i in o.requiredHeaderFlags) {
    let e = o.requiredHeaderFlags[i];
    o.requiredHeaderFlagsErrors[i] = "Invalid header flag bits, must be 0x" + e.toString(16) + " for " + o.types[i] + " packet";
  }
  o.codes = {};
  for (let i in o.types) {
    let e = o.types[i];
    o.codes[e] = i;
  }
  o.CMD_SHIFT = 4, o.CMD_MASK = 240, o.DUP_MASK = 8, o.QOS_MASK = 3, o.QOS_SHIFT = 1, o.RETAIN_MASK = 1, o.VARBYTEINT_MASK = 127, o.VARBYTEINT_FIN_MASK = 128, o.VARBYTEINT_MAX = 268435455, o.SESSIONPRESENT_MASK = 1, o.SESSIONPRESENT_HEADER = l.from([o.SESSIONPRESENT_MASK]), o.CONNACK_HEADER = l.from([o.codes.connack << o.CMD_SHIFT]), o.USERNAME_MASK = 128, o.PASSWORD_MASK = 64, o.WILL_RETAIN_MASK = 32, o.WILL_QOS_MASK = 24, o.WILL_QOS_SHIFT = 3, o.WILL_FLAG_MASK = 4, o.CLEAN_SESSION_MASK = 2, o.CONNECT_HEADER = l.from([o.codes.connect << o.CMD_SHIFT]), o.properties = { sessionExpiryInterval: 17, willDelayInterval: 24, receiveMaximum: 33, maximumPacketSize: 39, topicAliasMaximum: 34, requestResponseInformation: 25, requestProblemInformation: 23, userProperties: 38, authenticationMethod: 21, authenticationData: 22, payloadFormatIndicator: 1, messageExpiryInterval: 2, contentType: 3, responseTopic: 8, correlationData: 9, maximumQoS: 36, retainAvailable: 37, assignedClientIdentifier: 18, reasonString: 31, wildcardSubscriptionAvailable: 40, subscriptionIdentifiersAvailable: 41, sharedSubscriptionAvailable: 42, serverKeepAlive: 19, responseInformation: 26, serverReference: 28, topicAlias: 35, subscriptionIdentifier: 11 }, o.propertiesCodes = {};
  for (let i in o.properties) {
    let e = o.properties[i];
    o.propertiesCodes[e] = i;
  }
  o.propertiesTypes = { sessionExpiryInterval: "int32", willDelayInterval: "int32", receiveMaximum: "int16", maximumPacketSize: "int32", topicAliasMaximum: "int16", requestResponseInformation: "byte", requestProblemInformation: "byte", userProperties: "pair", authenticationMethod: "string", authenticationData: "binary", payloadFormatIndicator: "byte", messageExpiryInterval: "int32", contentType: "string", responseTopic: "string", correlationData: "binary", maximumQoS: "int8", retainAvailable: "byte", assignedClientIdentifier: "string", reasonString: "string", wildcardSubscriptionAvailable: "byte", subscriptionIdentifiersAvailable: "byte", sharedSubscriptionAvailable: "byte", serverKeepAlive: "int16", responseInformation: "string", serverReference: "string", topicAlias: "int16", subscriptionIdentifier: "var" };
  function f(i) {
    return [0, 1, 2].map((e) => [0, 1].map((r) => [0, 1].map((t) => {
      let n = l.alloc(1);
      return n.writeUInt8(o.codes[i] << o.CMD_SHIFT | (r ? o.DUP_MASK : 0) | e << o.QOS_SHIFT | t, 0, !0), n;
    })));
  }
  o.PUBLISH_HEADER = f("publish"), o.SUBSCRIBE_HEADER = f("subscribe"), o.SUBSCRIBE_OPTIONS_QOS_MASK = 3, o.SUBSCRIBE_OPTIONS_NL_MASK = 1, o.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, o.SUBSCRIBE_OPTIONS_RAP_MASK = 1, o.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, o.SUBSCRIBE_OPTIONS_RH_MASK = 3, o.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, o.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], o.SUBSCRIBE_OPTIONS_NL = 4, o.SUBSCRIBE_OPTIONS_RAP = 8, o.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], o.UNSUBSCRIBE_HEADER = f("unsubscribe"), o.ACKS = { unsuback: f("unsuback"), puback: f("puback"), pubcomp: f("pubcomp"), pubrel: f("pubrel"), pubrec: f("pubrec") }, o.SUBACK_HEADER = l.from([o.codes.suback << o.CMD_SHIFT]), o.VERSION3 = l.from([3]), o.VERSION4 = l.from([4]), o.VERSION5 = l.from([5]), o.VERSION131 = l.from([131]), o.VERSION132 = l.from([132]), o.QOS = [0, 1, 2].map((i) => l.from([i])), o.EMPTY = { pingreq: l.from([o.codes.pingreq << 4, 0]), pingresp: l.from([o.codes.pingresp << 4, 0]), disconnect: l.from([o.codes.disconnect << 4, 0]) }, o.MQTT5_PUBACK_PUBREC_CODES = { 0: "Success", 16: "No matching subscribers", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 144: "Topic Name invalid", 145: "Packet identifier in use", 151: "Quota exceeded", 153: "Payload format invalid" }, o.MQTT5_PUBREL_PUBCOMP_CODES = { 0: "Success", 146: "Packet Identifier not found" }, o.MQTT5_SUBACK_CODES = { 0: "Granted QoS 0", 1: "Granted QoS 1", 2: "Granted QoS 2", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use", 151: "Quota exceeded", 158: "Shared Subscriptions not supported", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" }, o.MQTT5_UNSUBACK_CODES = { 0: "Success", 17: "No subscription existed", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use" }, o.MQTT5_DISCONNECT_CODES = { 0: "Normal disconnection", 4: "Disconnect with Will Message", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 135: "Not authorized", 137: "Server busy", 139: "Server shutting down", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" }, o.MQTT5_AUTH_CODES = { 0: "Success", 24: "Continue authentication", 25: "Re-authenticate" };
}), aa = be((s, u) => {
  he(), fe(), ce();
  var o = 1e3, l = o * 60, f = l * 60, i = f * 24, e = i * 7, r = i * 365.25;
  u.exports = function(g, b) {
    b = b || {};
    var m = typeof g;
    if (m === "string" && g.length > 0) return t(g);
    if (m === "number" && isFinite(g)) return b.long ? c(g) : n(g);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(g));
  };
  function t(g) {
    if (g = String(g), !(g.length > 100)) {
      var b = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(g);
      if (b) {
        var m = parseFloat(b[1]), _ = (b[2] || "ms").toLowerCase();
        switch (_) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return m * r;
          case "weeks":
          case "week":
          case "w":
            return m * e;
          case "days":
          case "day":
          case "d":
            return m * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return m * f;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return m * l;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return m * o;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return m;
          default:
            return;
        }
      }
    }
  }
  function n(g) {
    var b = Math.abs(g);
    return b >= i ? Math.round(g / i) + "d" : b >= f ? Math.round(g / f) + "h" : b >= l ? Math.round(g / l) + "m" : b >= o ? Math.round(g / o) + "s" : g + "ms";
  }
  function c(g) {
    var b = Math.abs(g);
    return b >= i ? d(g, b, i, "day") : b >= f ? d(g, b, f, "hour") : b >= l ? d(g, b, l, "minute") : b >= o ? d(g, b, o, "second") : g + " ms";
  }
  function d(g, b, m, _) {
    var E = b >= m * 1.5;
    return Math.round(g / m) + " " + _ + (E ? "s" : "");
  }
}), la = be((s, u) => {
  he(), fe(), ce();
  function o(l) {
    i.debug = i, i.default = i, i.coerce = d, i.disable = n, i.enable = r, i.enabled = c, i.humanize = aa(), i.destroy = g, Object.keys(l).forEach((b) => {
      i[b] = l[b];
    }), i.names = [], i.skips = [], i.formatters = {};
    function f(b) {
      let m = 0;
      for (let _ = 0; _ < b.length; _++) m = (m << 5) - m + b.charCodeAt(_), m |= 0;
      return i.colors[Math.abs(m) % i.colors.length];
    }
    i.selectColor = f;
    function i(b) {
      let m, _ = null, E, I;
      function y(...v) {
        if (!y.enabled) return;
        let U = y, B = Number(/* @__PURE__ */ new Date()), A = B - (m || B);
        U.diff = A, U.prev = m, U.curr = B, m = B, v[0] = i.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
        let k = 0;
        v[0] = v[0].replace(/%([a-zA-Z%])/g, (M, Y) => {
          if (M === "%%") return "%";
          k++;
          let X = i.formatters[Y];
          if (typeof X == "function") {
            let ae = v[k];
            M = X.call(U, ae), v.splice(k, 1), k--;
          }
          return M;
        }), i.formatArgs.call(U, v), (U.log || i.log).apply(U, v);
      }
      return y.namespace = b, y.useColors = i.useColors(), y.color = i.selectColor(b), y.extend = e, y.destroy = i.destroy, Object.defineProperty(y, "enabled", { enumerable: !0, configurable: !1, get: () => _ !== null ? _ : (E !== i.namespaces && (E = i.namespaces, I = i.enabled(b)), I), set: (v) => {
        _ = v;
      } }), typeof i.init == "function" && i.init(y), y;
    }
    function e(b, m) {
      let _ = i(this.namespace + (typeof m > "u" ? ":" : m) + b);
      return _.log = this.log, _;
    }
    function r(b) {
      i.save(b), i.namespaces = b, i.names = [], i.skips = [];
      let m = (typeof b == "string" ? b : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (let _ of m) _[0] === "-" ? i.skips.push(_.slice(1)) : i.names.push(_);
    }
    function t(b, m) {
      let _ = 0, E = 0, I = -1, y = 0;
      for (; _ < b.length; ) if (E < m.length && (m[E] === b[_] || m[E] === "*")) m[E] === "*" ? (I = E, y = _, E++) : (_++, E++);
      else if (I !== -1) E = I + 1, y++, _ = y;
      else return !1;
      for (; E < m.length && m[E] === "*"; ) E++;
      return E === m.length;
    }
    function n() {
      let b = [...i.names, ...i.skips.map((m) => "-" + m)].join(",");
      return i.enable(""), b;
    }
    function c(b) {
      for (let m of i.skips) if (t(b, m)) return !1;
      for (let m of i.names) if (t(b, m)) return !0;
      return !1;
    }
    function d(b) {
      return b instanceof Error ? b.stack || b.message : b;
    }
    function g() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return i.enable(i.load()), i;
  }
  u.exports = o;
}), It = be((s, u) => {
  he(), fe(), ce(), s.formatArgs = l, s.save = f, s.load = i, s.useColors = o, s.storage = e(), s.destroy = /* @__PURE__ */ (() => {
    let t = !1;
    return () => {
      t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), s.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function o() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
    let t;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function l(t) {
    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + u.exports.humanize(this.diff), !this.useColors) return;
    let n = "color: " + this.color;
    t.splice(1, 0, n, "color: inherit");
    let c = 0, d = 0;
    t[0].replace(/%[a-zA-Z%]/g, (g) => {
      g !== "%%" && (c++, g === "%c" && (d = c));
    }), t.splice(d, 0, n);
  }
  s.log = console.debug || console.log || (() => {
  });
  function f(t) {
    try {
      t ? s.storage.setItem("debug", t) : s.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
    let t;
    try {
      t = s.storage.getItem("debug");
    } catch {
    }
    return !t && typeof Ne < "u" && "env" in Ne && (t = Ne.env.DEBUG), t;
  }
  function e() {
    try {
      return localStorage;
    } catch {
    }
  }
  u.exports = la()(s);
  var { formatters: r } = u.exports;
  r.j = function(t) {
    try {
      return JSON.stringify(t);
    } catch (n) {
      return "[UnexpectedJSONParseError]: " + n.message;
    }
  };
}), ua = be((s, u) => {
  he(), fe(), ce();
  var o = oa(), { EventEmitter: l } = (Qt(), je(Nt)), f = sa(), i = Mo(), e = It()("mqtt-packet:parser"), r = class tn extends l {
    constructor() {
      super(), this.parser = this.constructor.parser;
    }
    static parser(n) {
      return this instanceof tn ? (this.settings = n || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : new tn().parser(n);
    }
    _resetState() {
      e("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new f(), this.error = null, this._list = o(), this._stateCounter = 0;
    }
    parse(n) {
      for (this.error && this._resetState(), this._list.append(n), e("parse: current state: %s", this._states[this._stateCounter]); (this.packet.length !== -1 || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error; ) this._stateCounter++, e("parse: state complete. _stateCounter is now: %d", this._stateCounter), e("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
      return e("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length;
    }
    _parseHeader() {
      let n = this._list.readUInt8(0), c = n >> i.CMD_SHIFT;
      this.packet.cmd = i.types[c];
      let d = n & 15, g = i.requiredHeaderFlags[c];
      return g != null && d !== g ? this._emitError(new Error(i.requiredHeaderFlagsErrors[c])) : (this.packet.retain = (n & i.RETAIN_MASK) !== 0, this.packet.qos = n >> i.QOS_SHIFT & i.QOS_MASK, this.packet.qos > 2 ? this._emitError(new Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = (n & i.DUP_MASK) !== 0, e("_parseHeader: packet: %o", this.packet), this._list.consume(1), !0));
    }
    _parseLength() {
      let n = this._parseVarByteNum(!0);
      return n && (this.packet.length = n.value, this._list.consume(n.bytes)), e("_parseLength %d", n.value), !!n;
    }
    _parsePayload() {
      e("_parsePayload: payload %O", this._list);
      let n = !1;
      if (this.packet.length === 0 || this._list.length >= this.packet.length) {
        switch (this._pos = 0, this.packet.cmd) {
          case "connect":
            this._parseConnect();
            break;
          case "connack":
            this._parseConnack();
            break;
          case "publish":
            this._parsePublish();
            break;
          case "puback":
          case "pubrec":
          case "pubrel":
          case "pubcomp":
            this._parseConfirmation();
            break;
          case "subscribe":
            this._parseSubscribe();
            break;
          case "suback":
            this._parseSuback();
            break;
          case "unsubscribe":
            this._parseUnsubscribe();
            break;
          case "unsuback":
            this._parseUnsuback();
            break;
          case "pingreq":
          case "pingresp":
            break;
          case "disconnect":
            this._parseDisconnect();
            break;
          case "auth":
            this._parseAuth();
            break;
          default:
            this._emitError(new Error("Not supported"));
        }
        n = !0;
      }
      return e("_parsePayload complete result: %s", n), n;
    }
    _parseConnect() {
      e("_parseConnect");
      let n, c, d, g, b = {}, m = this.packet, _ = this._parseString();
      if (_ === null) return this._emitError(new Error("Cannot parse protocolId"));
      if (_ !== "MQTT" && _ !== "MQIsdp") return this._emitError(new Error("Invalid protocolId"));
      if (m.protocolId = _, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
      if (m.protocolVersion = this._list.readUInt8(this._pos), m.protocolVersion >= 128 && (m.bridgeMode = !0, m.protocolVersion = m.protocolVersion - 128), m.protocolVersion !== 3 && m.protocolVersion !== 4 && m.protocolVersion !== 5) return this._emitError(new Error("Invalid protocol version"));
      if (this._pos++, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
      if (this._list.readUInt8(this._pos) & 1) return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
      b.username = this._list.readUInt8(this._pos) & i.USERNAME_MASK, b.password = this._list.readUInt8(this._pos) & i.PASSWORD_MASK, b.will = this._list.readUInt8(this._pos) & i.WILL_FLAG_MASK;
      let E = !!(this._list.readUInt8(this._pos) & i.WILL_RETAIN_MASK), I = (this._list.readUInt8(this._pos) & i.WILL_QOS_MASK) >> i.WILL_QOS_SHIFT;
      if (b.will) m.will = {}, m.will.retain = E, m.will.qos = I;
      else {
        if (E) return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
        if (I) return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"));
      }
      if (m.clean = (this._list.readUInt8(this._pos) & i.CLEAN_SESSION_MASK) !== 0, this._pos++, m.keepalive = this._parseNum(), m.keepalive === -1) return this._emitError(new Error("Packet too short"));
      if (m.protocolVersion === 5) {
        let v = this._parseProperties();
        Object.getOwnPropertyNames(v).length && (m.properties = v);
      }
      let y = this._parseString();
      if (y === null) return this._emitError(new Error("Packet too short"));
      if (m.clientId = y, e("_parseConnect: packet.clientId: %s", m.clientId), b.will) {
        if (m.protocolVersion === 5) {
          let v = this._parseProperties();
          Object.getOwnPropertyNames(v).length && (m.will.properties = v);
        }
        if (n = this._parseString(), n === null) return this._emitError(new Error("Cannot parse will topic"));
        if (m.will.topic = n, e("_parseConnect: packet.will.topic: %s", m.will.topic), c = this._parseBuffer(), c === null) return this._emitError(new Error("Cannot parse will payload"));
        m.will.payload = c, e("_parseConnect: packet.will.paylaod: %s", m.will.payload);
      }
      if (b.username) {
        if (g = this._parseString(), g === null) return this._emitError(new Error("Cannot parse username"));
        m.username = g, e("_parseConnect: packet.username: %s", m.username);
      }
      if (b.password) {
        if (d = this._parseBuffer(), d === null) return this._emitError(new Error("Cannot parse password"));
        m.password = d;
      }
      return this.settings = m, e("_parseConnect: complete"), m;
    }
    _parseConnack() {
      e("_parseConnack");
      let n = this.packet;
      if (this._list.length < 1) return null;
      let c = this._list.readUInt8(this._pos++);
      if (c > 1) return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
      if (n.sessionPresent = !!(c & i.SESSIONPRESENT_MASK), this.settings.protocolVersion === 5) this._list.length >= 2 ? n.reasonCode = this._list.readUInt8(this._pos++) : n.reasonCode = 0;
      else {
        if (this._list.length < 2) return null;
        n.returnCode = this._list.readUInt8(this._pos++);
      }
      if (n.returnCode === -1 || n.reasonCode === -1) return this._emitError(new Error("Cannot parse return code"));
      if (this.settings.protocolVersion === 5) {
        let d = this._parseProperties();
        Object.getOwnPropertyNames(d).length && (n.properties = d);
      }
      e("_parseConnack: complete");
    }
    _parsePublish() {
      e("_parsePublish");
      let n = this.packet;
      if (n.topic = this._parseString(), n.topic === null) return this._emitError(new Error("Cannot parse topic"));
      if (!(n.qos > 0 && !this._parseMessageId())) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (n.properties = c);
        }
        n.payload = this._list.slice(this._pos, n.length), e("_parsePublish: payload from buffer list: %o", n.payload);
      }
    }
    _parseSubscribe() {
      e("_parseSubscribe");
      let n = this.packet, c, d, g, b, m, _, E;
      if (n.subscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let I = this._parseProperties();
          Object.getOwnPropertyNames(I).length && (n.properties = I);
        }
        if (n.length <= 0) return this._emitError(new Error("Malformed subscribe, no payload specified"));
        for (; this._pos < n.length; ) {
          if (c = this._parseString(), c === null) return this._emitError(new Error("Cannot parse topic"));
          if (this._pos >= n.length) return this._emitError(new Error("Malformed Subscribe Payload"));
          if (d = this._parseByte(), this.settings.protocolVersion === 5) {
            if (d & 192) return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"));
          } else if (d & 252) return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
          if (g = d & i.SUBSCRIBE_OPTIONS_QOS_MASK, g > 2) return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
          if (_ = (d >> i.SUBSCRIBE_OPTIONS_NL_SHIFT & i.SUBSCRIBE_OPTIONS_NL_MASK) !== 0, m = (d >> i.SUBSCRIBE_OPTIONS_RAP_SHIFT & i.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0, b = d >> i.SUBSCRIBE_OPTIONS_RH_SHIFT & i.SUBSCRIBE_OPTIONS_RH_MASK, b > 2) return this._emitError(new Error("Invalid retain handling, must be <= 2"));
          E = { topic: c, qos: g }, this.settings.protocolVersion === 5 ? (E.nl = _, E.rap = m, E.rh = b) : this.settings.bridgeMode && (E.rh = 0, E.rap = !0, E.nl = !0), e("_parseSubscribe: push subscription `%s` to subscription", E), n.subscriptions.push(E);
        }
      }
    }
    _parseSuback() {
      e("_parseSuback");
      let n = this.packet;
      if (this.packet.granted = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (n.properties = c);
        }
        if (n.length <= 0) return this._emitError(new Error("Malformed suback, no payload specified"));
        for (; this._pos < this.packet.length; ) {
          let c = this._list.readUInt8(this._pos++);
          if (this.settings.protocolVersion === 5) {
            if (!i.MQTT5_SUBACK_CODES[c]) return this._emitError(new Error("Invalid suback code"));
          } else if (c > 2 && c !== 128) return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
          this.packet.granted.push(c);
        }
      }
    }
    _parseUnsubscribe() {
      e("_parseUnsubscribe");
      let n = this.packet;
      if (n.unsubscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (n.properties = c);
        }
        if (n.length <= 0) return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
        for (; this._pos < n.length; ) {
          let c = this._parseString();
          if (c === null) return this._emitError(new Error("Cannot parse topic"));
          e("_parseUnsubscribe: push topic `%s` to unsubscriptions", c), n.unsubscriptions.push(c);
        }
      }
    }
    _parseUnsuback() {
      e("_parseUnsuback");
      let n = this.packet;
      if (!this._parseMessageId()) return this._emitError(new Error("Cannot parse messageId"));
      if ((this.settings.protocolVersion === 3 || this.settings.protocolVersion === 4) && n.length !== 2) return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
      if (n.length <= 0) return this._emitError(new Error("Malformed unsuback, no payload specified"));
      if (this.settings.protocolVersion === 5) {
        let c = this._parseProperties();
        for (Object.getOwnPropertyNames(c).length && (n.properties = c), n.granted = []; this._pos < this.packet.length; ) {
          let d = this._list.readUInt8(this._pos++);
          if (!i.MQTT5_UNSUBACK_CODES[d]) return this._emitError(new Error("Invalid unsuback code"));
          this.packet.granted.push(d);
        }
      }
    }
    _parseConfirmation() {
      e("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
      let n = this.packet;
      if (this._parseMessageId(), this.settings.protocolVersion === 5) {
        if (n.length > 2) {
          switch (n.reasonCode = this._parseByte(), this.packet.cmd) {
            case "puback":
            case "pubrec":
              if (!i.MQTT5_PUBACK_PUBREC_CODES[n.reasonCode]) return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
            case "pubrel":
            case "pubcomp":
              if (!i.MQTT5_PUBREL_PUBCOMP_CODES[n.reasonCode]) return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
          }
          e("_parseConfirmation: packet.reasonCode `%d`", n.reasonCode);
        } else n.reasonCode = 0;
        if (n.length > 3) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (n.properties = c);
        }
      }
      return !0;
    }
    _parseDisconnect() {
      let n = this.packet;
      if (e("_parseDisconnect"), this.settings.protocolVersion === 5) {
        this._list.length > 0 ? (n.reasonCode = this._parseByte(), i.MQTT5_DISCONNECT_CODES[n.reasonCode] || this._emitError(new Error("Invalid disconnect reason code"))) : n.reasonCode = 0;
        let c = this._parseProperties();
        Object.getOwnPropertyNames(c).length && (n.properties = c);
      }
      return e("_parseDisconnect result: true"), !0;
    }
    _parseAuth() {
      e("_parseAuth");
      let n = this.packet;
      if (this.settings.protocolVersion !== 5) return this._emitError(new Error("Not supported auth packet for this version MQTT"));
      if (n.reasonCode = this._parseByte(), !i.MQTT5_AUTH_CODES[n.reasonCode]) return this._emitError(new Error("Invalid auth reason code"));
      let c = this._parseProperties();
      return Object.getOwnPropertyNames(c).length && (n.properties = c), e("_parseAuth: result: true"), !0;
    }
    _parseMessageId() {
      let n = this.packet;
      return n.messageId = this._parseNum(), n.messageId === null ? (this._emitError(new Error("Cannot parse messageId")), !1) : (e("_parseMessageId: packet.messageId %d", n.messageId), !0);
    }
    _parseString(n) {
      let c = this._parseNum(), d = c + this._pos;
      if (c === -1 || d > this._list.length || d > this.packet.length) return null;
      let g = this._list.toString("utf8", this._pos, d);
      return this._pos += c, e("_parseString: result: %s", g), g;
    }
    _parseStringPair() {
      return e("_parseStringPair"), { name: this._parseString(), value: this._parseString() };
    }
    _parseBuffer() {
      let n = this._parseNum(), c = n + this._pos;
      if (n === -1 || c > this._list.length || c > this.packet.length) return null;
      let d = this._list.slice(this._pos, c);
      return this._pos += n, e("_parseBuffer: result: %o", d), d;
    }
    _parseNum() {
      if (this._list.length - this._pos < 2) return -1;
      let n = this._list.readUInt16BE(this._pos);
      return this._pos += 2, e("_parseNum: result: %s", n), n;
    }
    _parse4ByteNum() {
      if (this._list.length - this._pos < 4) return -1;
      let n = this._list.readUInt32BE(this._pos);
      return this._pos += 4, e("_parse4ByteNum: result: %s", n), n;
    }
    _parseVarByteNum(n) {
      e("_parseVarByteNum");
      let c = 4, d = 0, g = 1, b = 0, m = !1, _, E = this._pos ? this._pos : 0;
      for (; d < c && E + d < this._list.length; ) {
        if (_ = this._list.readUInt8(E + d++), b += g * (_ & i.VARBYTEINT_MASK), g *= 128, !(_ & i.VARBYTEINT_FIN_MASK)) {
          m = !0;
          break;
        }
        if (this._list.length <= d) break;
      }
      return !m && d === c && this._list.length >= d && this._emitError(new Error("Invalid variable byte integer")), E && (this._pos += d), m ? n ? m = { bytes: d, value: b } : m = b : m = !1, e("_parseVarByteNum: result: %o", m), m;
    }
    _parseByte() {
      let n;
      return this._pos < this._list.length && (n = this._list.readUInt8(this._pos), this._pos++), e("_parseByte: result: %o", n), n;
    }
    _parseByType(n) {
      switch (e("_parseByType: type: %s", n), n) {
        case "byte":
          return this._parseByte() !== 0;
        case "int8":
          return this._parseByte();
        case "int16":
          return this._parseNum();
        case "int32":
          return this._parse4ByteNum();
        case "var":
          return this._parseVarByteNum();
        case "string":
          return this._parseString();
        case "pair":
          return this._parseStringPair();
        case "binary":
          return this._parseBuffer();
      }
    }
    _parseProperties() {
      e("_parseProperties");
      let n = this._parseVarByteNum(), c = this._pos + n, d = {};
      for (; this._pos < c; ) {
        let g = this._parseByte();
        if (!g) return this._emitError(new Error("Cannot parse property code type")), !1;
        let b = i.propertiesCodes[g];
        if (!b) return this._emitError(new Error("Unknown property")), !1;
        if (b === "userProperties") {
          d[b] || (d[b] = /* @__PURE__ */ Object.create(null));
          let m = this._parseByType(i.propertiesTypes[b]);
          if (d[b][m.name]) if (Array.isArray(d[b][m.name])) d[b][m.name].push(m.value);
          else {
            let _ = d[b][m.name];
            d[b][m.name] = [_], d[b][m.name].push(m.value);
          }
          else d[b][m.name] = m.value;
          continue;
        }
        d[b] ? Array.isArray(d[b]) ? d[b].push(this._parseByType(i.propertiesTypes[b])) : (d[b] = [d[b]], d[b].push(this._parseByType(i.propertiesTypes[b]))) : d[b] = this._parseByType(i.propertiesTypes[b]);
      }
      return d;
    }
    _newPacket() {
      return e("_newPacket"), this.packet && (this._list.consume(this.packet.length), e("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), e("_newPacket: new packet"), this.packet = new f(), this._pos = 0, !0;
    }
    _emitError(n) {
      e("_emitError", n), this.error = n, this.emit("error", n);
    }
  };
  u.exports = r;
}), ha = be((s, u) => {
  he(), fe(), ce();
  var { Buffer: o } = (Je(), je(Ye)), l = 65536, f = {}, i = o.isBuffer(o.from([1, 2]).subarray(0, 1));
  function e(c) {
    let d = o.allocUnsafe(2);
    return d.writeUInt8(c >> 8, 0), d.writeUInt8(c & 255, 1), d;
  }
  function r() {
    for (let c = 0; c < l; c++) f[c] = e(c);
  }
  function t(c) {
    let d = 0, g = 0, b = o.allocUnsafe(4);
    do
      d = c % 128 | 0, c = c / 128 | 0, c > 0 && (d = d | 128), b.writeUInt8(d, g++);
    while (c > 0 && g < 4);
    return c > 0 && (g = 0), i ? b.subarray(0, g) : b.slice(0, g);
  }
  function n(c) {
    let d = o.allocUnsafe(4);
    return d.writeUInt32BE(c, 0), d;
  }
  u.exports = { cache: f, generateCache: r, generateNumber: e, genBufVariableByteInt: t, generate4ByteBuffer: n };
}), ca = be((s, u) => {
  he(), fe(), ce(), typeof Ne > "u" || !Ne.version || Ne.version.indexOf("v0.") === 0 || Ne.version.indexOf("v1.") === 0 && Ne.version.indexOf("v1.8.") !== 0 ? u.exports = { nextTick: o } : u.exports = Ne;
  function o(l, f, i, e) {
    if (typeof l != "function") throw new TypeError('"callback" argument must be a function');
    var r = arguments.length, t, n;
    switch (r) {
      case 0:
      case 1:
        return Ne.nextTick(l);
      case 2:
        return Ne.nextTick(function() {
          l.call(null, f);
        });
      case 3:
        return Ne.nextTick(function() {
          l.call(null, f, i);
        });
      case 4:
        return Ne.nextTick(function() {
          l.call(null, f, i, e);
        });
      default:
        for (t = new Array(r - 1), n = 0; n < t.length; ) t[n++] = arguments[n];
        return Ne.nextTick(function() {
          l.apply(null, t);
        });
    }
  }
}), No = be((s, u) => {
  he(), fe(), ce();
  var o = Mo(), { Buffer: l } = (Je(), je(Ye)), f = l.allocUnsafe(0), i = l.from([0]), e = ha(), r = ca().nextTick, t = It()("mqtt-packet:writeToStream"), n = e.cache, c = e.generateNumber, d = e.generateCache, g = e.genBufVariableByteInt, b = e.generate4ByteBuffer, m = de, _ = !0;
  function E(V, N, Z) {
    switch (t("generate called"), N.cork && (N.cork(), r(I, N)), _ && (_ = !1, d()), t("generate: packet.cmd: %s", V.cmd), V.cmd) {
      case "connect":
        return y(V, N);
      case "connack":
        return v(V, N, Z);
      case "publish":
        return U(V, N, Z);
      case "puback":
      case "pubrec":
      case "pubrel":
      case "pubcomp":
        return B(V, N, Z);
      case "subscribe":
        return A(V, N, Z);
      case "suback":
        return k(V, N, Z);
      case "unsubscribe":
        return M(V, N, Z);
      case "unsuback":
        return Y(V, N, Z);
      case "pingreq":
      case "pingresp":
        return X(V, N);
      case "disconnect":
        return ae(V, N, Z);
      case "auth":
        return R(V, N, Z);
      default:
        return N.destroy(new Error("Unknown command")), !1;
    }
  }
  Object.defineProperty(E, "cacheNumbers", { get() {
    return m === de;
  }, set(V) {
    V ? ((!n || Object.keys(n).length === 0) && (_ = !0), m = de) : (_ = !1, m = le);
  } });
  function I(V) {
    V.uncork();
  }
  function y(V, N, Z) {
    let $ = V || {}, q = $.protocolId || "MQTT", H = $.protocolVersion || 4, se = $.will, ne = $.clean, x = $.keepalive || 0, j = $.clientId || "", K = $.username, re = $.password, te = $.properties;
    ne === void 0 && (ne = !0);
    let ue = 0;
    if (typeof q != "string" && !l.isBuffer(q)) return N.destroy(new Error("Invalid protocolId")), !1;
    if (ue += q.length + 2, H !== 3 && H !== 4 && H !== 5) return N.destroy(new Error("Invalid protocol version")), !1;
    if (ue += 1, (typeof j == "string" || l.isBuffer(j)) && (j || H >= 4) && (j || ne)) ue += l.byteLength(j) + 2;
    else {
      if (H < 4) return N.destroy(new Error("clientId must be supplied before 3.1.1")), !1;
      if (ne * 1 === 0) return N.destroy(new Error("clientId must be given if cleanSession set to 0")), !1;
    }
    if (typeof x != "number" || x < 0 || x > 65535 || x % 1 !== 0) return N.destroy(new Error("Invalid keepalive")), !1;
    ue += 2, ue += 1;
    let D, oe;
    if (H === 5) {
      if (D = pe(N, te), !D) return !1;
      ue += D.length;
    }
    if (se) {
      if (typeof se != "object") return N.destroy(new Error("Invalid will")), !1;
      if (!se.topic || typeof se.topic != "string") return N.destroy(new Error("Invalid will topic")), !1;
      if (ue += l.byteLength(se.topic) + 2, ue += 2, se.payload) if (se.payload.length >= 0) typeof se.payload == "string" ? ue += l.byteLength(se.payload) : ue += se.payload.length;
      else return N.destroy(new Error("Invalid will payload")), !1;
      if (oe = {}, H === 5) {
        if (oe = pe(N, se.properties), !oe) return !1;
        ue += oe.length;
      }
    }
    let me = !1;
    if (K != null) if (Ie(K)) me = !0, ue += l.byteLength(K) + 2;
    else return N.destroy(new Error("Invalid username")), !1;
    if (re != null) {
      if (!me) return N.destroy(new Error("Username is required to use password")), !1;
      if (Ie(re)) ue += F(re) + 2;
      else return N.destroy(new Error("Invalid password")), !1;
    }
    N.write(o.CONNECT_HEADER), J(N, ue), G(N, q), $.bridgeMode && (H += 128), N.write(H === 131 ? o.VERSION131 : H === 132 ? o.VERSION132 : H === 4 ? o.VERSION4 : H === 5 ? o.VERSION5 : o.VERSION3);
    let ee = 0;
    return ee |= K != null ? o.USERNAME_MASK : 0, ee |= re != null ? o.PASSWORD_MASK : 0, ee |= se && se.retain ? o.WILL_RETAIN_MASK : 0, ee |= se && se.qos ? se.qos << o.WILL_QOS_SHIFT : 0, ee |= se ? o.WILL_FLAG_MASK : 0, ee |= ne ? o.CLEAN_SESSION_MASK : 0, N.write(l.from([ee])), m(N, x), H === 5 && D.write(), G(N, j), se && (H === 5 && oe.write(), W(N, se.topic), G(N, se.payload)), K != null && G(N, K), re != null && G(N, re), !0;
  }
  function v(V, N, Z) {
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = $ === 5 ? q.reasonCode : q.returnCode, se = q.properties, ne = 2;
    if (typeof H != "number") return N.destroy(new Error("Invalid return code")), !1;
    let x = null;
    if ($ === 5) {
      if (x = pe(N, se), !x) return !1;
      ne += x.length;
    }
    return N.write(o.CONNACK_HEADER), J(N, ne), N.write(q.sessionPresent ? o.SESSIONPRESENT_HEADER : i), N.write(l.from([H])), x == null || x.write(), !0;
  }
  function U(V, N, Z) {
    t("publish: packet: %o", V);
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = q.qos || 0, se = q.retain ? o.RETAIN_MASK : 0, ne = q.topic, x = q.payload || f, j = q.messageId, K = q.properties, re = 0;
    if (typeof ne == "string") re += l.byteLength(ne) + 2;
    else if (l.isBuffer(ne)) re += ne.length + 2;
    else return N.destroy(new Error("Invalid topic")), !1;
    if (l.isBuffer(x) ? re += x.length : re += l.byteLength(x), H && typeof j != "number") return N.destroy(new Error("Invalid messageId")), !1;
    H && (re += 2);
    let te = null;
    if ($ === 5) {
      if (te = pe(N, K), !te) return !1;
      re += te.length;
    }
    return N.write(o.PUBLISH_HEADER[H][q.dup ? 1 : 0][se ? 1 : 0]), J(N, re), m(N, F(ne)), N.write(ne), H > 0 && m(N, j), te == null || te.write(), t("publish: payload: %o", x), N.write(x);
  }
  function B(V, N, Z) {
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = q.cmd || "puback", se = q.messageId, ne = q.dup && H === "pubrel" ? o.DUP_MASK : 0, x = 0, j = q.reasonCode, K = q.properties, re = $ === 5 ? 3 : 2;
    if (H === "pubrel" && (x = 1), typeof se != "number") return N.destroy(new Error("Invalid messageId")), !1;
    let te = null;
    if ($ === 5 && typeof K == "object") {
      if (te = P(N, K, Z, re), !te) return !1;
      re += te.length;
    }
    return N.write(o.ACKS[H][x][ne][0]), re === 3 && (re += j !== 0 ? 1 : -1), J(N, re), m(N, se), $ === 5 && re !== 2 && N.write(l.from([j])), te !== null ? te.write() : re === 4 && N.write(l.from([0])), !0;
  }
  function A(V, N, Z) {
    t("subscribe: packet: ");
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = q.dup ? o.DUP_MASK : 0, se = q.messageId, ne = q.subscriptions, x = q.properties, j = 0;
    if (typeof se != "number") return N.destroy(new Error("Invalid messageId")), !1;
    j += 2;
    let K = null;
    if ($ === 5) {
      if (K = pe(N, x), !K) return !1;
      j += K.length;
    }
    if (typeof ne == "object" && ne.length) for (let te = 0; te < ne.length; te += 1) {
      let ue = ne[te].topic, D = ne[te].qos;
      if (typeof ue != "string") return N.destroy(new Error("Invalid subscriptions - invalid topic")), !1;
      if (typeof D != "number") return N.destroy(new Error("Invalid subscriptions - invalid qos")), !1;
      if ($ === 5) {
        if (typeof (ne[te].nl || !1) != "boolean") return N.destroy(new Error("Invalid subscriptions - invalid No Local")), !1;
        if (typeof (ne[te].rap || !1) != "boolean") return N.destroy(new Error("Invalid subscriptions - invalid Retain as Published")), !1;
        let oe = ne[te].rh || 0;
        if (typeof oe != "number" || oe > 2) return N.destroy(new Error("Invalid subscriptions - invalid Retain Handling")), !1;
      }
      j += l.byteLength(ue) + 2 + 1;
    }
    else return N.destroy(new Error("Invalid subscriptions")), !1;
    t("subscribe: writing to stream: %o", o.SUBSCRIBE_HEADER), N.write(o.SUBSCRIBE_HEADER[1][H ? 1 : 0][0]), J(N, j), m(N, se), K !== null && K.write();
    let re = !0;
    for (let te of ne) {
      let ue = te.topic, D = te.qos, oe = +te.nl, me = +te.rap, ee = te.rh, Oe;
      W(N, ue), Oe = o.SUBSCRIBE_OPTIONS_QOS[D], $ === 5 && (Oe |= oe ? o.SUBSCRIBE_OPTIONS_NL : 0, Oe |= me ? o.SUBSCRIBE_OPTIONS_RAP : 0, Oe |= ee ? o.SUBSCRIBE_OPTIONS_RH[ee] : 0), re = N.write(l.from([Oe]));
    }
    return re;
  }
  function k(V, N, Z) {
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = q.messageId, se = q.granted, ne = q.properties, x = 0;
    if (typeof H != "number") return N.destroy(new Error("Invalid messageId")), !1;
    if (x += 2, typeof se == "object" && se.length) for (let K = 0; K < se.length; K += 1) {
      if (typeof se[K] != "number") return N.destroy(new Error("Invalid qos vector")), !1;
      x += 1;
    }
    else return N.destroy(new Error("Invalid qos vector")), !1;
    let j = null;
    if ($ === 5) {
      if (j = P(N, ne, Z, x), !j) return !1;
      x += j.length;
    }
    return N.write(o.SUBACK_HEADER), J(N, x), m(N, H), j !== null && j.write(), N.write(l.from(se));
  }
  function M(V, N, Z) {
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = q.messageId, se = q.dup ? o.DUP_MASK : 0, ne = q.unsubscriptions, x = q.properties, j = 0;
    if (typeof H != "number") return N.destroy(new Error("Invalid messageId")), !1;
    if (j += 2, typeof ne == "object" && ne.length) for (let te = 0; te < ne.length; te += 1) {
      if (typeof ne[te] != "string") return N.destroy(new Error("Invalid unsubscriptions")), !1;
      j += l.byteLength(ne[te]) + 2;
    }
    else return N.destroy(new Error("Invalid unsubscriptions")), !1;
    let K = null;
    if ($ === 5) {
      if (K = pe(N, x), !K) return !1;
      j += K.length;
    }
    N.write(o.UNSUBSCRIBE_HEADER[1][se ? 1 : 0][0]), J(N, j), m(N, H), K !== null && K.write();
    let re = !0;
    for (let te = 0; te < ne.length; te++) re = W(N, ne[te]);
    return re;
  }
  function Y(V, N, Z) {
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = q.messageId, se = q.dup ? o.DUP_MASK : 0, ne = q.granted, x = q.properties, j = q.cmd, K = 0, re = 2;
    if (typeof H != "number") return N.destroy(new Error("Invalid messageId")), !1;
    if ($ === 5) if (typeof ne == "object" && ne.length) for (let ue = 0; ue < ne.length; ue += 1) {
      if (typeof ne[ue] != "number") return N.destroy(new Error("Invalid qos vector")), !1;
      re += 1;
    }
    else return N.destroy(new Error("Invalid qos vector")), !1;
    let te = null;
    if ($ === 5) {
      if (te = P(N, x, Z, re), !te) return !1;
      re += te.length;
    }
    return N.write(o.ACKS[j][K][se][0]), J(N, re), m(N, H), te !== null && te.write(), $ === 5 && N.write(l.from(ne)), !0;
  }
  function X(V, N, Z) {
    return N.write(o.EMPTY[V.cmd]);
  }
  function ae(V, N, Z) {
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = q.reasonCode, se = q.properties, ne = $ === 5 ? 1 : 0, x = null;
    if ($ === 5) {
      if (x = P(N, se, Z, ne), !x) return !1;
      ne += x.length;
    }
    return N.write(l.from([o.codes.disconnect << 4])), J(N, ne), $ === 5 && N.write(l.from([H])), x !== null && x.write(), !0;
  }
  function R(V, N, Z) {
    let $ = Z ? Z.protocolVersion : 4, q = V || {}, H = q.reasonCode, se = q.properties, ne = $ === 5 ? 1 : 0;
    $ !== 5 && N.destroy(new Error("Invalid mqtt version for auth packet"));
    let x = P(N, se, Z, ne);
    return x ? (ne += x.length, N.write(l.from([o.codes.auth << 4])), J(N, ne), N.write(l.from([H])), x !== null && x.write(), !0) : !1;
  }
  var Q = {};
  function J(V, N) {
    if (N > o.VARBYTEINT_MAX) return V.destroy(new Error(`Invalid variable byte integer: ${N}`)), !1;
    let Z = Q[N];
    return Z || (Z = g(N), N < 16384 && (Q[N] = Z)), t("writeVarByteInt: writing to stream: %o", Z), V.write(Z);
  }
  function W(V, N) {
    let Z = l.byteLength(N);
    return m(V, Z), t("writeString: %s", N), V.write(N, "utf8");
  }
  function ge(V, N, Z) {
    W(V, N), W(V, Z);
  }
  function de(V, N) {
    return t("writeNumberCached: number: %d", N), t("writeNumberCached: %o", n[N]), V.write(n[N]);
  }
  function le(V, N) {
    let Z = c(N);
    return t("writeNumberGenerated: %o", Z), V.write(Z);
  }
  function Ee(V, N) {
    let Z = b(N);
    return t("write4ByteNumber: %o", Z), V.write(Z);
  }
  function G(V, N) {
    typeof N == "string" ? W(V, N) : N ? (m(V, N.length), V.write(N)) : m(V, 0);
  }
  function pe(V, N) {
    if (typeof N != "object" || N.length != null) return { length: 1, write() {
      ye(V, {}, 0);
    } };
    let Z = 0;
    function $(q, H) {
      let se = o.propertiesTypes[q], ne = 0;
      switch (se) {
        case "byte": {
          if (typeof H != "boolean") return V.destroy(new Error(`Invalid ${q}: ${H}`)), !1;
          ne += 2;
          break;
        }
        case "int8": {
          if (typeof H != "number" || H < 0 || H > 255) return V.destroy(new Error(`Invalid ${q}: ${H}`)), !1;
          ne += 2;
          break;
        }
        case "binary": {
          if (H && H === null) return V.destroy(new Error(`Invalid ${q}: ${H}`)), !1;
          ne += 1 + l.byteLength(H) + 2;
          break;
        }
        case "int16": {
          if (typeof H != "number" || H < 0 || H > 65535) return V.destroy(new Error(`Invalid ${q}: ${H}`)), !1;
          ne += 3;
          break;
        }
        case "int32": {
          if (typeof H != "number" || H < 0 || H > 4294967295) return V.destroy(new Error(`Invalid ${q}: ${H}`)), !1;
          ne += 5;
          break;
        }
        case "var": {
          if (typeof H != "number" || H < 0 || H > 268435455) return V.destroy(new Error(`Invalid ${q}: ${H}`)), !1;
          ne += 1 + l.byteLength(g(H));
          break;
        }
        case "string": {
          if (typeof H != "string") return V.destroy(new Error(`Invalid ${q}: ${H}`)), !1;
          ne += 3 + l.byteLength(H.toString());
          break;
        }
        case "pair": {
          if (typeof H != "object") return V.destroy(new Error(`Invalid ${q}: ${H}`)), !1;
          ne += Object.getOwnPropertyNames(H).reduce((x, j) => {
            let K = H[j];
            return Array.isArray(K) ? x += K.reduce((re, te) => (re += 3 + l.byteLength(j.toString()) + 2 + l.byteLength(te.toString()), re), 0) : x += 3 + l.byteLength(j.toString()) + 2 + l.byteLength(H[j].toString()), x;
          }, 0);
          break;
        }
        default:
          return V.destroy(new Error(`Invalid property ${q}: ${H}`)), !1;
      }
      return ne;
    }
    if (N) for (let q in N) {
      let H = 0, se = 0, ne = N[q];
      if (Array.isArray(ne)) for (let x = 0; x < ne.length; x++) {
        if (se = $(q, ne[x]), !se) return !1;
        H += se;
      }
      else {
        if (se = $(q, ne), !se) return !1;
        H = se;
      }
      if (!H) return !1;
      Z += H;
    }
    return { length: l.byteLength(g(Z)) + Z, write() {
      ye(V, N, Z);
    } };
  }
  function P(V, N, Z, $) {
    let q = ["reasonString", "userProperties"], H = Z && Z.properties && Z.properties.maximumPacketSize ? Z.properties.maximumPacketSize : 0, se = pe(V, N);
    if (H) for (; $ + se.length > H; ) {
      let ne = q.shift();
      if (ne && N[ne]) delete N[ne], se = pe(V, N);
      else return !1;
    }
    return se;
  }
  function ie(V, N, Z) {
    switch (o.propertiesTypes[N]) {
      case "byte": {
        V.write(l.from([o.properties[N]])), V.write(l.from([+Z]));
        break;
      }
      case "int8": {
        V.write(l.from([o.properties[N]])), V.write(l.from([Z]));
        break;
      }
      case "binary": {
        V.write(l.from([o.properties[N]])), G(V, Z);
        break;
      }
      case "int16": {
        V.write(l.from([o.properties[N]])), m(V, Z);
        break;
      }
      case "int32": {
        V.write(l.from([o.properties[N]])), Ee(V, Z);
        break;
      }
      case "var": {
        V.write(l.from([o.properties[N]])), J(V, Z);
        break;
      }
      case "string": {
        V.write(l.from([o.properties[N]])), W(V, Z);
        break;
      }
      case "pair": {
        Object.getOwnPropertyNames(Z).forEach(($) => {
          let q = Z[$];
          Array.isArray(q) ? q.forEach((H) => {
            V.write(l.from([o.properties[N]])), ge(V, $.toString(), H.toString());
          }) : (V.write(l.from([o.properties[N]])), ge(V, $.toString(), q.toString()));
        });
        break;
      }
      default:
        return V.destroy(new Error(`Invalid property ${N} value: ${Z}`)), !1;
    }
  }
  function ye(V, N, Z) {
    J(V, Z);
    for (let $ in N) if (Object.prototype.hasOwnProperty.call(N, $) && N[$] !== null) {
      let q = N[$];
      if (Array.isArray(q)) for (let H = 0; H < q.length; H++) ie(V, $, q[H]);
      else ie(V, $, q);
    }
  }
  function F(V) {
    return V ? V instanceof l ? V.length : l.byteLength(V) : 0;
  }
  function Ie(V) {
    return typeof V == "string" || V instanceof l;
  }
  u.exports = E;
}), fa = be((s, u) => {
  he(), fe(), ce();
  var o = No(), { EventEmitter: l } = (Qt(), je(Nt)), { Buffer: f } = (Je(), je(Ye));
  function i(r, t) {
    let n = new e();
    return o(r, n, t), n.concat();
  }
  var e = class extends l {
    constructor() {
      super(), this._array = new Array(20), this._i = 0;
    }
    write(r) {
      return this._array[this._i++] = r, !0;
    }
    concat() {
      let r = 0, t = new Array(this._array.length), n = this._array, c = 0, d;
      for (d = 0; d < n.length && n[d] !== void 0; d++) typeof n[d] != "string" ? t[d] = n[d].length : t[d] = f.byteLength(n[d]), r += t[d];
      let g = f.allocUnsafe(r);
      for (d = 0; d < n.length && n[d] !== void 0; d++) typeof n[d] != "string" ? (n[d].copy(g, c), c += t[d]) : (g.write(n[d], c), c += t[d]);
      return g;
    }
    destroy(r) {
      r && this.emit("error", r);
    }
  };
  u.exports = i;
}), da = be((s) => {
  he(), fe(), ce(), s.parser = ua().parser, s.generate = fa(), s.writeToStream = No();
}), Lo = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = class {
    constructor() {
      this.nextId = Math.max(1, Math.floor(Math.random() * 65535));
    }
    allocate() {
      let o = this.nextId++;
      return this.nextId === 65536 && (this.nextId = 1), o;
    }
    getLastAllocated() {
      return this.nextId === 1 ? 65535 : this.nextId - 1;
    }
    register(o) {
      return !0;
    }
    deallocate(o) {
    }
    clear() {
    }
  };
  s.default = u;
}), pa = be((s, u) => {
  he(), fe(), ce(), u.exports = l;
  function o(i) {
    return i instanceof Tr ? Tr.from(i) : new i.constructor(i.buffer.slice(), i.byteOffset, i.length);
  }
  function l(i) {
    if (i = i || {}, i.circles) return f(i);
    let e = /* @__PURE__ */ new Map();
    if (e.set(Date, (d) => new Date(d)), e.set(Map, (d, g) => new Map(t(Array.from(d), g))), e.set(Set, (d, g) => new Set(t(Array.from(d), g))), i.constructorHandlers) for (let d of i.constructorHandlers) e.set(d[0], d[1]);
    let r = null;
    return i.proto ? c : n;
    function t(d, g) {
      let b = Object.keys(d), m = new Array(b.length);
      for (let _ = 0; _ < b.length; _++) {
        let E = b[_], I = d[E];
        typeof I != "object" || I === null ? m[E] = I : I.constructor !== Object && (r = e.get(I.constructor)) ? m[E] = r(I, g) : ArrayBuffer.isView(I) ? m[E] = o(I) : m[E] = g(I);
      }
      return m;
    }
    function n(d) {
      if (typeof d != "object" || d === null) return d;
      if (Array.isArray(d)) return t(d, n);
      if (d.constructor !== Object && (r = e.get(d.constructor))) return r(d, n);
      let g = {};
      for (let b in d) {
        if (Object.hasOwnProperty.call(d, b) === !1) continue;
        let m = d[b];
        typeof m != "object" || m === null ? g[b] = m : m.constructor !== Object && (r = e.get(m.constructor)) ? g[b] = r(m, n) : ArrayBuffer.isView(m) ? g[b] = o(m) : g[b] = n(m);
      }
      return g;
    }
    function c(d) {
      if (typeof d != "object" || d === null) return d;
      if (Array.isArray(d)) return t(d, c);
      if (d.constructor !== Object && (r = e.get(d.constructor))) return r(d, c);
      let g = {};
      for (let b in d) {
        let m = d[b];
        typeof m != "object" || m === null ? g[b] = m : m.constructor !== Object && (r = e.get(m.constructor)) ? g[b] = r(m, c) : ArrayBuffer.isView(m) ? g[b] = o(m) : g[b] = c(m);
      }
      return g;
    }
  }
  function f(i) {
    let e = [], r = [], t = /* @__PURE__ */ new Map();
    if (t.set(Date, (b) => new Date(b)), t.set(Map, (b, m) => new Map(c(Array.from(b), m))), t.set(Set, (b, m) => new Set(c(Array.from(b), m))), i.constructorHandlers) for (let b of i.constructorHandlers) t.set(b[0], b[1]);
    let n = null;
    return i.proto ? g : d;
    function c(b, m) {
      let _ = Object.keys(b), E = new Array(_.length);
      for (let I = 0; I < _.length; I++) {
        let y = _[I], v = b[y];
        if (typeof v != "object" || v === null) E[y] = v;
        else if (v.constructor !== Object && (n = t.get(v.constructor))) E[y] = n(v, m);
        else if (ArrayBuffer.isView(v)) E[y] = o(v);
        else {
          let U = e.indexOf(v);
          U !== -1 ? E[y] = r[U] : E[y] = m(v);
        }
      }
      return E;
    }
    function d(b) {
      if (typeof b != "object" || b === null) return b;
      if (Array.isArray(b)) return c(b, d);
      if (b.constructor !== Object && (n = t.get(b.constructor))) return n(b, d);
      let m = {};
      e.push(b), r.push(m);
      for (let _ in b) {
        if (Object.hasOwnProperty.call(b, _) === !1) continue;
        let E = b[_];
        if (typeof E != "object" || E === null) m[_] = E;
        else if (E.constructor !== Object && (n = t.get(E.constructor))) m[_] = n(E, d);
        else if (ArrayBuffer.isView(E)) m[_] = o(E);
        else {
          let I = e.indexOf(E);
          I !== -1 ? m[_] = r[I] : m[_] = d(E);
        }
      }
      return e.pop(), r.pop(), m;
    }
    function g(b) {
      if (typeof b != "object" || b === null) return b;
      if (Array.isArray(b)) return c(b, g);
      if (b.constructor !== Object && (n = t.get(b.constructor))) return n(b, g);
      let m = {};
      e.push(b), r.push(m);
      for (let _ in b) {
        let E = b[_];
        if (typeof E != "object" || E === null) m[_] = E;
        else if (E.constructor !== Object && (n = t.get(E.constructor))) m[_] = n(E, g);
        else if (ArrayBuffer.isView(E)) m[_] = o(E);
        else {
          let I = e.indexOf(E);
          I !== -1 ? m[_] = r[I] : m[_] = g(E);
        }
      }
      return e.pop(), r.pop(), m;
    }
  }
}), ga = be((s, u) => {
  he(), fe(), ce(), u.exports = pa()();
}), ba = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 }), s.validateTopic = u, s.validateTopics = o;
  function u(l) {
    let f = l.split("/");
    for (let i = 0; i < f.length; i++) if (f[i] !== "+") {
      if (f[i] === "#") return i === f.length - 1;
      if (f[i].indexOf("+") !== -1 || f[i].indexOf("#") !== -1) return !1;
    }
    return !0;
  }
  function o(l) {
    if (l.length === 0) return "empty_topic_list";
    for (let f = 0; f < l.length; f++) if (!u(l[f])) return l[f];
    return null;
  }
}), Uo = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = Yt(), o = { objectMode: !0 }, l = { clean: !0 }, f = class {
    constructor(i) {
      this.options = i || {}, this.options = Object.assign(Object.assign({}, l), i), this._inflights = /* @__PURE__ */ new Map();
    }
    put(i, e) {
      return this._inflights.set(i.messageId, i), e && e(), this;
    }
    createStream() {
      let i = new u.Readable(o), e = [], r = !1, t = 0;
      return this._inflights.forEach((n, c) => {
        e.push(n);
      }), i._read = () => {
        !r && t < e.length ? i.push(e[t++]) : i.push(null);
      }, i.destroy = (n) => {
        if (!r) return r = !0, setTimeout(() => {
          i.emit("close");
        }, 0), i;
      }, i;
    }
    del(i, e) {
      let r = this._inflights.get(i.messageId);
      return r ? (this._inflights.delete(i.messageId), e(null, r)) : e && e(new Error("missing packet")), this;
    }
    get(i, e) {
      let r = this._inflights.get(i.messageId);
      return r ? e(null, r) : e && e(new Error("missing packet")), this;
    }
    close(i) {
      this.options.clean && (this._inflights = null), i && i();
    }
  };
  s.default = f;
}), ma = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = [0, 16, 128, 131, 135, 144, 145, 151, 153], o = (l, f, i) => {
    l.log("handlePublish: packet %o", f), i = typeof i < "u" ? i : l.noop;
    let e = f.topic.toString(), r = f.payload, { qos: t } = f, { messageId: n } = f, { options: c } = l;
    if (l.options.protocolVersion === 5) {
      let d;
      if (f.properties && (d = f.properties.topicAlias), typeof d < "u") if (e.length === 0) if (d > 0 && d <= 65535) {
        let g = l.topicAliasRecv.getTopicByAlias(d);
        if (g) e = g, l.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", e, d);
        else {
          l.log("handlePublish :: unregistered topic alias. alias: %d", d), l.emit("error", new Error("Received unregistered Topic Alias"));
          return;
        }
      } else {
        l.log("handlePublish :: topic alias out of range. alias: %d", d), l.emit("error", new Error("Received Topic Alias is out of range"));
        return;
      }
      else if (l.topicAliasRecv.put(e, d)) l.log("handlePublish :: registered topic: %s - alias: %d", e, d);
      else {
        l.log("handlePublish :: topic alias out of range. alias: %d", d), l.emit("error", new Error("Received Topic Alias is out of range"));
        return;
      }
    }
    switch (l.log("handlePublish: qos %d", t), t) {
      case 2: {
        c.customHandleAcks(e, r, f, (d, g) => {
          if (typeof d == "number" && (g = d, d = null), d) return l.emit("error", d);
          if (u.indexOf(g) === -1) return l.emit("error", new Error("Wrong reason code for pubrec"));
          g ? l._sendPacket({ cmd: "pubrec", messageId: n, reasonCode: g }, i) : l.incomingStore.put(f, () => {
            l._sendPacket({ cmd: "pubrec", messageId: n }, i);
          });
        });
        break;
      }
      case 1: {
        c.customHandleAcks(e, r, f, (d, g) => {
          if (typeof d == "number" && (g = d, d = null), d) return l.emit("error", d);
          if (u.indexOf(g) === -1) return l.emit("error", new Error("Wrong reason code for puback"));
          g || l.emit("message", e, r, f), l.handleMessage(f, (b) => {
            if (b) return i && i(b);
            l._sendPacket({ cmd: "puback", messageId: n, reasonCode: g }, i);
          });
        });
        break;
      }
      case 0:
        l.emit("message", e, r, f), l.handleMessage(f, i);
        break;
      default:
        l.log("handlePublish: unknown QoS. Doing nothing.");
        break;
    }
  };
  s.default = o;
}), ya = be((s, u) => {
  u.exports = { version: "5.10.4" };
}), tr = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 }), s.MQTTJS_VERSION = s.nextTick = s.ErrorWithReasonCode = void 0, s.applyMixin = o;
  var u = class jo extends Error {
    constructor(f, i) {
      super(f), this.code = i, Object.setPrototypeOf(this, jo.prototype), Object.getPrototypeOf(this).name = "ErrorWithReasonCode";
    }
  };
  s.ErrorWithReasonCode = u;
  function o(l, f, i = !1) {
    var e;
    let r = [f];
    for (; ; ) {
      let t = r[0], n = Object.getPrototypeOf(t);
      if (n != null && n.prototype) r.unshift(n);
      else break;
    }
    for (let t of r) for (let n of Object.getOwnPropertyNames(t.prototype)) (i || n !== "constructor") && Object.defineProperty(l.prototype, n, (e = Object.getOwnPropertyDescriptor(t.prototype, n)) !== null && e !== void 0 ? e : /* @__PURE__ */ Object.create(null));
  }
  s.nextTick = typeof (Ne == null ? void 0 : Ne.nextTick) == "function" ? Ne.nextTick : (l) => {
    setTimeout(l, 0);
  }, s.MQTTJS_VERSION = ya().version;
}), xr = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 }), s.ReasonCodes = void 0;
  var u = tr();
  s.ReasonCodes = { 0: "", 1: "Unacceptable protocol version", 2: "Identifier rejected", 3: "Server unavailable", 4: "Bad username or password", 5: "Not authorized", 16: "No matching subscribers", 17: "No subscription existed", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 132: "Unsupported Protocol Version", 133: "Client Identifier not valid", 134: "Bad User Name or Password", 135: "Not authorized", 136: "Server unavailable", 137: "Server busy", 138: "Banned", 139: "Server shutting down", 140: "Bad authentication method", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 145: "Packet identifier in use", 146: "Packet Identifier not found", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" };
  var o = (l, f) => {
    let { messageId: i } = f, e = f.cmd, r = null, t = l.outgoing[i] ? l.outgoing[i].cb : null, n = null;
    if (!t) {
      l.log("_handleAck :: Server sent an ack in error. Ignoring.");
      return;
    }
    switch (l.log("_handleAck :: packet type", e), e) {
      case "pubcomp":
      case "puback": {
        let c = f.reasonCode;
        c && c > 0 && c !== 16 ? (n = new u.ErrorWithReasonCode(`Publish error: ${s.ReasonCodes[c]}`, c), l._removeOutgoingAndStoreMessage(i, () => {
          t(n, f);
        })) : l._removeOutgoingAndStoreMessage(i, t);
        break;
      }
      case "pubrec": {
        r = { cmd: "pubrel", qos: 2, messageId: i };
        let c = f.reasonCode;
        c && c > 0 && c !== 16 ? (n = new u.ErrorWithReasonCode(`Publish error: ${s.ReasonCodes[c]}`, c), l._removeOutgoingAndStoreMessage(i, () => {
          t(n, f);
        })) : l._sendPacket(r);
        break;
      }
      case "suback": {
        delete l.outgoing[i], l.messageIdProvider.deallocate(i);
        let c = f.granted;
        for (let d = 0; d < c.length; d++) {
          let g = c[d];
          if (g & 128) {
            n = new Error(`Subscribe error: ${s.ReasonCodes[g]}`), n.code = g;
            let b = l.messageIdToTopic[i];
            b && b.forEach((m) => {
              delete l._resubscribeTopics[m];
            });
          }
        }
        delete l.messageIdToTopic[i], l._invokeStoreProcessingQueue(), t(n, f);
        break;
      }
      case "unsuback": {
        delete l.outgoing[i], l.messageIdProvider.deallocate(i), l._invokeStoreProcessingQueue(), t(null, f);
        break;
      }
      default:
        l.emit("error", new Error("unrecognized packet type"));
    }
    l.disconnecting && Object.keys(l.outgoing).length === 0 && l.emit("outgoingEmpty");
  };
  s.default = o;
}), wa = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = tr(), o = xr(), l = (f, i) => {
    let { options: e } = f, r = e.protocolVersion, t = r === 5 ? i.reasonCode : i.returnCode;
    if (r !== 5) {
      let n = new u.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${r}`, t);
      f.emit("error", n);
      return;
    }
    f.handleAuth(i, (n, c) => {
      if (n) {
        f.emit("error", n);
        return;
      }
      if (t === 24) f.reconnecting = !1, f._sendPacket(c);
      else {
        let d = new u.ErrorWithReasonCode(`Connection refused: ${o.ReasonCodes[t]}`, t);
        f.emit("error", d);
      }
    });
  };
  s.default = l;
}), _a = be((s) => {
  var b, m, _, E, I, y, v, U, B, A, k, M, Y, X, ae, R, Q, J, W, ge, de, le, Ee, G, pe, P, ie, ye, F, rn, V, N, Z, $, Do, H, se, ne, Pt, xt, nn, vr, Er, Fe, on, sr, Bt, sn, Oe;
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 }), s.LRUCache = void 0;
  var u = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, o = /* @__PURE__ */ new Set(), l = typeof Ne == "object" && Ne ? Ne : {}, f = (a, h, p, w) => {
    typeof l.emitWarning == "function" ? l.emitWarning(a, h, p, w) : console.error(`[${p}] ${h}: ${a}`);
  }, i = globalThis.AbortController, e = globalThis.AbortSignal;
  if (typeof i > "u") {
    e = class {
      constructor() {
        Be(this, "onabort");
        Be(this, "_onabort", []);
        Be(this, "reason");
        Be(this, "aborted", !1);
      }
      addEventListener(p, w) {
        this._onabort.push(w);
      }
    }, i = class {
      constructor() {
        Be(this, "signal", new e());
        h();
      }
      abort(p) {
        var w, T;
        if (!this.signal.aborted) {
          this.signal.reason = p, this.signal.aborted = !0;
          for (let L of this.signal._onabort) L(p);
          (T = (w = this.signal).onabort) == null || T.call(w, p);
        }
      }
    };
    let a = ((b = l.env) == null ? void 0 : b.LRU_CACHE_IGNORE_AC_WARNING) !== "1", h = () => {
      a && (a = !1, f("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", h));
    };
  }
  var r = (a) => !o.has(a), t = (a) => a && a === Math.floor(a) && a > 0 && isFinite(a), n = (a) => t(a) ? a <= Math.pow(2, 8) ? Uint8Array : a <= Math.pow(2, 16) ? Uint16Array : a <= Math.pow(2, 32) ? Uint32Array : a <= Number.MAX_SAFE_INTEGER ? c : null : null, c = class extends Array {
    constructor(a) {
      super(a), this.fill(0);
    }
  }, d = (m = class {
    constructor(h, p) {
      Be(this, "heap");
      Be(this, "length");
      if (!C(m, _)) throw new TypeError("instantiate Stack using Stack.create(n)");
      this.heap = new p(h), this.length = 0;
    }
    static create(h) {
      let p = n(h);
      if (!p) return [];
      Ce(m, _, !0);
      let w = new m(h, p);
      return Ce(m, _, !1), w;
    }
    push(h) {
      this.heap[this.length++] = h;
    }
    pop() {
      return this.heap[--this.length];
    }
  }, _ = new WeakMap(), Me(m, _, !1), m), g = (Oe = class {
    constructor(h) {
      Me(this, F);
      Me(this, y);
      Me(this, v);
      Me(this, U);
      Me(this, B);
      Me(this, A);
      Me(this, k);
      Be(this, "ttl");
      Be(this, "ttlResolution");
      Be(this, "ttlAutopurge");
      Be(this, "updateAgeOnGet");
      Be(this, "updateAgeOnHas");
      Be(this, "allowStale");
      Be(this, "noDisposeOnSet");
      Be(this, "noUpdateTTL");
      Be(this, "maxEntrySize");
      Be(this, "sizeCalculation");
      Be(this, "noDeleteOnFetchRejection");
      Be(this, "noDeleteOnStaleGet");
      Be(this, "allowStaleOnFetchAbort");
      Be(this, "allowStaleOnFetchRejection");
      Be(this, "ignoreFetchAbort");
      Me(this, M);
      Me(this, Y);
      Me(this, X);
      Me(this, ae);
      Me(this, R);
      Me(this, Q);
      Me(this, J);
      Me(this, W);
      Me(this, ge);
      Me(this, de);
      Me(this, le);
      Me(this, Ee);
      Me(this, G);
      Me(this, pe);
      Me(this, P);
      Me(this, ie);
      Me(this, ye);
      Me(this, V, () => {
      });
      Me(this, N, () => {
      });
      Me(this, Z, () => {
      });
      Me(this, $, () => !1);
      Me(this, H, (h) => {
      });
      Me(this, se, (h, p, w) => {
      });
      Me(this, ne, (h, p, w, T) => {
        if (w || T) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      });
      Be(this, E, "LRUCache");
      let { max: p = 0, ttl: w, ttlResolution: T = 1, ttlAutopurge: L, updateAgeOnGet: z, updateAgeOnHas: _e, allowStale: ve, dispose: ke, disposeAfter: xe, noDisposeOnSet: Re, noUpdateTTL: dt, maxSize: nt = 0, maxEntrySize: st = 0, sizeCalculation: We, fetchMethod: Ke, memoMethod: Pe, noDeleteOnFetchRejection: De, noDeleteOnStaleGet: Xe, allowStaleOnFetchRejection: Qe, allowStaleOnFetchAbort: tt, ignoreFetchAbort: Ot } = h;
      if (p !== 0 && !t(p)) throw new TypeError("max option must be a nonnegative integer");
      let S = p ? n(p) : Array;
      if (!S) throw new Error("invalid max value: " + p);
      if (Ce(this, y, p), Ce(this, v, nt), this.maxEntrySize = st || C(this, v), this.sizeCalculation = We, this.sizeCalculation) {
        if (!C(this, v) && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
      }
      if (Pe !== void 0 && typeof Pe != "function") throw new TypeError("memoMethod must be a function if defined");
      if (Ce(this, k, Pe), Ke !== void 0 && typeof Ke != "function") throw new TypeError("fetchMethod must be a function if specified");
      if (Ce(this, A, Ke), Ce(this, ie, !!Ke), Ce(this, X, /* @__PURE__ */ new Map()), Ce(this, ae, new Array(p).fill(void 0)), Ce(this, R, new Array(p).fill(void 0)), Ce(this, Q, new S(p)), Ce(this, J, new S(p)), Ce(this, W, 0), Ce(this, ge, 0), Ce(this, de, d.create(p)), Ce(this, M, 0), Ce(this, Y, 0), typeof ke == "function" && Ce(this, U, ke), typeof xe == "function" ? (Ce(this, B, xe), Ce(this, le, [])) : (Ce(this, B, void 0), Ce(this, le, void 0)), Ce(this, P, !!C(this, U)), Ce(this, ye, !!C(this, B)), this.noDisposeOnSet = !!Re, this.noUpdateTTL = !!dt, this.noDeleteOnFetchRejection = !!De, this.allowStaleOnFetchRejection = !!Qe, this.allowStaleOnFetchAbort = !!tt, this.ignoreFetchAbort = !!Ot, this.maxEntrySize !== 0) {
        if (C(this, v) !== 0 && !t(C(this, v))) throw new TypeError("maxSize must be a positive integer if specified");
        if (!t(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
        Ae(this, F, Do).call(this);
      }
      if (this.allowStale = !!ve, this.noDeleteOnStaleGet = !!Xe, this.updateAgeOnGet = !!z, this.updateAgeOnHas = !!_e, this.ttlResolution = t(T) || T === 0 ? T : 1, this.ttlAutopurge = !!L, this.ttl = w || 0, this.ttl) {
        if (!t(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
        Ae(this, F, rn).call(this);
      }
      if (C(this, y) === 0 && this.ttl === 0 && C(this, v) === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !C(this, y) && !C(this, v)) {
        let O = "LRU_CACHE_UNBOUNDED";
        r(O) && (o.add(O), f("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", O, Oe));
      }
    }
    static unsafeExposeInternals(h) {
      return { starts: C(h, G), ttls: C(h, pe), sizes: C(h, Ee), keyMap: C(h, X), keyList: C(h, ae), valList: C(h, R), next: C(h, Q), prev: C(h, J), get head() {
        return C(h, W);
      }, get tail() {
        return C(h, ge);
      }, free: C(h, de), isBackgroundFetch: (p) => {
        var w;
        return Ae(w = h, F, Fe).call(w, p);
      }, backgroundFetch: (p, w, T, L) => {
        var z;
        return Ae(z = h, F, Er).call(z, p, w, T, L);
      }, moveToTail: (p) => {
        var w;
        return Ae(w = h, F, sr).call(w, p);
      }, indexes: (p) => {
        var w;
        return Ae(w = h, F, Pt).call(w, p);
      }, rindexes: (p) => {
        var w;
        return Ae(w = h, F, xt).call(w, p);
      }, isStale: (p) => {
        var w;
        return C(w = h, $).call(w, p);
      } };
    }
    get max() {
      return C(this, y);
    }
    get maxSize() {
      return C(this, v);
    }
    get calculatedSize() {
      return C(this, Y);
    }
    get size() {
      return C(this, M);
    }
    get fetchMethod() {
      return C(this, A);
    }
    get memoMethod() {
      return C(this, k);
    }
    get dispose() {
      return C(this, U);
    }
    get disposeAfter() {
      return C(this, B);
    }
    getRemainingTTL(h) {
      return C(this, X).has(h) ? 1 / 0 : 0;
    }
    *entries() {
      for (let h of Ae(this, F, Pt).call(this)) C(this, R)[h] !== void 0 && C(this, ae)[h] !== void 0 && !Ae(this, F, Fe).call(this, C(this, R)[h]) && (yield [C(this, ae)[h], C(this, R)[h]]);
    }
    *rentries() {
      for (let h of Ae(this, F, xt).call(this)) C(this, R)[h] !== void 0 && C(this, ae)[h] !== void 0 && !Ae(this, F, Fe).call(this, C(this, R)[h]) && (yield [C(this, ae)[h], C(this, R)[h]]);
    }
    *keys() {
      for (let h of Ae(this, F, Pt).call(this)) {
        let p = C(this, ae)[h];
        p !== void 0 && !Ae(this, F, Fe).call(this, C(this, R)[h]) && (yield p);
      }
    }
    *rkeys() {
      for (let h of Ae(this, F, xt).call(this)) {
        let p = C(this, ae)[h];
        p !== void 0 && !Ae(this, F, Fe).call(this, C(this, R)[h]) && (yield p);
      }
    }
    *values() {
      for (let h of Ae(this, F, Pt).call(this)) C(this, R)[h] !== void 0 && !Ae(this, F, Fe).call(this, C(this, R)[h]) && (yield C(this, R)[h]);
    }
    *rvalues() {
      for (let h of Ae(this, F, xt).call(this)) C(this, R)[h] !== void 0 && !Ae(this, F, Fe).call(this, C(this, R)[h]) && (yield C(this, R)[h]);
    }
    [(I = Symbol.iterator, E = Symbol.toStringTag, I)]() {
      return this.entries();
    }
    find(h, p = {}) {
      for (let w of Ae(this, F, Pt).call(this)) {
        let T = C(this, R)[w], L = Ae(this, F, Fe).call(this, T) ? T.__staleWhileFetching : T;
        if (L !== void 0 && h(L, C(this, ae)[w], this)) return this.get(C(this, ae)[w], p);
      }
    }
    forEach(h, p = this) {
      for (let w of Ae(this, F, Pt).call(this)) {
        let T = C(this, R)[w], L = Ae(this, F, Fe).call(this, T) ? T.__staleWhileFetching : T;
        L !== void 0 && h.call(p, L, C(this, ae)[w], this);
      }
    }
    rforEach(h, p = this) {
      for (let w of Ae(this, F, xt).call(this)) {
        let T = C(this, R)[w], L = Ae(this, F, Fe).call(this, T) ? T.__staleWhileFetching : T;
        L !== void 0 && h.call(p, L, C(this, ae)[w], this);
      }
    }
    purgeStale() {
      let h = !1;
      for (let p of Ae(this, F, xt).call(this, { allowStale: !0 })) C(this, $).call(this, p) && (Ae(this, F, Bt).call(this, C(this, ae)[p], "expire"), h = !0);
      return h;
    }
    info(h) {
      let p = C(this, X).get(h);
      if (p === void 0) return;
      let w = C(this, R)[p], T = Ae(this, F, Fe).call(this, w) ? w.__staleWhileFetching : w;
      if (T === void 0) return;
      let L = { value: T };
      if (C(this, pe) && C(this, G)) {
        let z = C(this, pe)[p], _e = C(this, G)[p];
        if (z && _e) {
          let ve = z - (u.now() - _e);
          L.ttl = ve, L.start = Date.now();
        }
      }
      return C(this, Ee) && (L.size = C(this, Ee)[p]), L;
    }
    dump() {
      let h = [];
      for (let p of Ae(this, F, Pt).call(this, { allowStale: !0 })) {
        let w = C(this, ae)[p], T = C(this, R)[p], L = Ae(this, F, Fe).call(this, T) ? T.__staleWhileFetching : T;
        if (L === void 0 || w === void 0) continue;
        let z = { value: L };
        if (C(this, pe) && C(this, G)) {
          z.ttl = C(this, pe)[p];
          let _e = u.now() - C(this, G)[p];
          z.start = Math.floor(Date.now() - _e);
        }
        C(this, Ee) && (z.size = C(this, Ee)[p]), h.unshift([w, z]);
      }
      return h;
    }
    load(h) {
      this.clear();
      for (let [p, w] of h) {
        if (w.start) {
          let T = Date.now() - w.start;
          w.start = u.now() - T;
        }
        this.set(p, w.value, w);
      }
    }
    set(h, p, w = {}) {
      var dt, nt, st, We, Ke;
      if (p === void 0) return this.delete(h), this;
      let { ttl: T = this.ttl, start: L, noDisposeOnSet: z = this.noDisposeOnSet, sizeCalculation: _e = this.sizeCalculation, status: ve } = w, { noUpdateTTL: ke = this.noUpdateTTL } = w, xe = C(this, ne).call(this, h, p, w.size || 0, _e);
      if (this.maxEntrySize && xe > this.maxEntrySize) return ve && (ve.set = "miss", ve.maxEntrySizeExceeded = !0), Ae(this, F, Bt).call(this, h, "set"), this;
      let Re = C(this, M) === 0 ? void 0 : C(this, X).get(h);
      if (Re === void 0) Re = C(this, M) === 0 ? C(this, ge) : C(this, de).length !== 0 ? C(this, de).pop() : C(this, M) === C(this, y) ? Ae(this, F, vr).call(this, !1) : C(this, M), C(this, ae)[Re] = h, C(this, R)[Re] = p, C(this, X).set(h, Re), C(this, Q)[C(this, ge)] = Re, C(this, J)[Re] = C(this, ge), Ce(this, ge, Re), cr(this, M)._++, C(this, se).call(this, Re, xe, ve), ve && (ve.set = "add"), ke = !1;
      else {
        Ae(this, F, sr).call(this, Re);
        let Pe = C(this, R)[Re];
        if (p !== Pe) {
          if (C(this, ie) && Ae(this, F, Fe).call(this, Pe)) {
            Pe.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: De } = Pe;
            De !== void 0 && !z && (C(this, P) && ((dt = C(this, U)) == null || dt.call(this, De, h, "set")), C(this, ye) && ((nt = C(this, le)) == null || nt.push([De, h, "set"])));
          } else z || (C(this, P) && ((st = C(this, U)) == null || st.call(this, Pe, h, "set")), C(this, ye) && ((We = C(this, le)) == null || We.push([Pe, h, "set"])));
          if (C(this, H).call(this, Re), C(this, se).call(this, Re, xe, ve), C(this, R)[Re] = p, ve) {
            ve.set = "replace";
            let De = Pe && Ae(this, F, Fe).call(this, Pe) ? Pe.__staleWhileFetching : Pe;
            De !== void 0 && (ve.oldValue = De);
          }
        } else ve && (ve.set = "update");
      }
      if (T !== 0 && !C(this, pe) && Ae(this, F, rn).call(this), C(this, pe) && (ke || C(this, Z).call(this, Re, T, L), ve && C(this, N).call(this, ve, Re)), !z && C(this, ye) && C(this, le)) {
        let Pe = C(this, le), De;
        for (; De = Pe == null ? void 0 : Pe.shift(); ) (Ke = C(this, B)) == null || Ke.call(this, ...De);
      }
      return this;
    }
    pop() {
      var h;
      try {
        for (; C(this, M); ) {
          let p = C(this, R)[C(this, W)];
          if (Ae(this, F, vr).call(this, !0), Ae(this, F, Fe).call(this, p)) {
            if (p.__staleWhileFetching) return p.__staleWhileFetching;
          } else if (p !== void 0) return p;
        }
      } finally {
        if (C(this, ye) && C(this, le)) {
          let p = C(this, le), w;
          for (; w = p == null ? void 0 : p.shift(); ) (h = C(this, B)) == null || h.call(this, ...w);
        }
      }
    }
    has(h, p = {}) {
      let { updateAgeOnHas: w = this.updateAgeOnHas, status: T } = p, L = C(this, X).get(h);
      if (L !== void 0) {
        let z = C(this, R)[L];
        if (Ae(this, F, Fe).call(this, z) && z.__staleWhileFetching === void 0) return !1;
        if (C(this, $).call(this, L)) T && (T.has = "stale", C(this, N).call(this, T, L));
        else return w && C(this, V).call(this, L), T && (T.has = "hit", C(this, N).call(this, T, L)), !0;
      } else T && (T.has = "miss");
      return !1;
    }
    peek(h, p = {}) {
      let { allowStale: w = this.allowStale } = p, T = C(this, X).get(h);
      if (T === void 0 || !w && C(this, $).call(this, T)) return;
      let L = C(this, R)[T];
      return Ae(this, F, Fe).call(this, L) ? L.__staleWhileFetching : L;
    }
    async fetch(h, p = {}) {
      let { allowStale: w = this.allowStale, updateAgeOnGet: T = this.updateAgeOnGet, noDeleteOnStaleGet: L = this.noDeleteOnStaleGet, ttl: z = this.ttl, noDisposeOnSet: _e = this.noDisposeOnSet, size: ve = 0, sizeCalculation: ke = this.sizeCalculation, noUpdateTTL: xe = this.noUpdateTTL, noDeleteOnFetchRejection: Re = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: dt = this.allowStaleOnFetchRejection, ignoreFetchAbort: nt = this.ignoreFetchAbort, allowStaleOnFetchAbort: st = this.allowStaleOnFetchAbort, context: We, forceRefresh: Ke = !1, status: Pe, signal: De } = p;
      if (!C(this, ie)) return Pe && (Pe.fetch = "get"), this.get(h, { allowStale: w, updateAgeOnGet: T, noDeleteOnStaleGet: L, status: Pe });
      let Xe = { allowStale: w, updateAgeOnGet: T, noDeleteOnStaleGet: L, ttl: z, noDisposeOnSet: _e, size: ve, sizeCalculation: ke, noUpdateTTL: xe, noDeleteOnFetchRejection: Re, allowStaleOnFetchRejection: dt, allowStaleOnFetchAbort: st, ignoreFetchAbort: nt, status: Pe, signal: De }, Qe = C(this, X).get(h);
      if (Qe === void 0) {
        Pe && (Pe.fetch = "miss");
        let tt = Ae(this, F, Er).call(this, h, Qe, Xe, We);
        return tt.__returned = tt;
      } else {
        let tt = C(this, R)[Qe];
        if (Ae(this, F, Fe).call(this, tt)) {
          let we = w && tt.__staleWhileFetching !== void 0;
          return Pe && (Pe.fetch = "inflight", we && (Pe.returnedStale = !0)), we ? tt.__staleWhileFetching : tt.__returned = tt;
        }
        let Ot = C(this, $).call(this, Qe);
        if (!Ke && !Ot) return Pe && (Pe.fetch = "hit"), Ae(this, F, sr).call(this, Qe), T && C(this, V).call(this, Qe), Pe && C(this, N).call(this, Pe, Qe), tt;
        let S = Ae(this, F, Er).call(this, h, Qe, Xe, We), O = S.__staleWhileFetching !== void 0 && w;
        return Pe && (Pe.fetch = Ot ? "stale" : "refresh", O && Ot && (Pe.returnedStale = !0)), O ? S.__staleWhileFetching : S.__returned = S;
      }
    }
    async forceFetch(h, p = {}) {
      let w = await this.fetch(h, p);
      if (w === void 0) throw new Error("fetch() returned undefined");
      return w;
    }
    memo(h, p = {}) {
      let w = C(this, k);
      if (!w) throw new Error("no memoMethod provided to constructor");
      let { context: T, forceRefresh: L, ...z } = p, _e = this.get(h, z);
      if (!L && _e !== void 0) return _e;
      let ve = w(h, _e, { options: z, context: T });
      return this.set(h, ve, z), ve;
    }
    get(h, p = {}) {
      let { allowStale: w = this.allowStale, updateAgeOnGet: T = this.updateAgeOnGet, noDeleteOnStaleGet: L = this.noDeleteOnStaleGet, status: z } = p, _e = C(this, X).get(h);
      if (_e !== void 0) {
        let ve = C(this, R)[_e], ke = Ae(this, F, Fe).call(this, ve);
        return z && C(this, N).call(this, z, _e), C(this, $).call(this, _e) ? (z && (z.get = "stale"), ke ? (z && w && ve.__staleWhileFetching !== void 0 && (z.returnedStale = !0), w ? ve.__staleWhileFetching : void 0) : (L || Ae(this, F, Bt).call(this, h, "expire"), z && w && (z.returnedStale = !0), w ? ve : void 0)) : (z && (z.get = "hit"), ke ? ve.__staleWhileFetching : (Ae(this, F, sr).call(this, _e), T && C(this, V).call(this, _e), ve));
      } else z && (z.get = "miss");
    }
    delete(h) {
      return Ae(this, F, Bt).call(this, h, "delete");
    }
    clear() {
      return Ae(this, F, sn).call(this, "delete");
    }
  }, y = new WeakMap(), v = new WeakMap(), U = new WeakMap(), B = new WeakMap(), A = new WeakMap(), k = new WeakMap(), M = new WeakMap(), Y = new WeakMap(), X = new WeakMap(), ae = new WeakMap(), R = new WeakMap(), Q = new WeakMap(), J = new WeakMap(), W = new WeakMap(), ge = new WeakMap(), de = new WeakMap(), le = new WeakMap(), Ee = new WeakMap(), G = new WeakMap(), pe = new WeakMap(), P = new WeakMap(), ie = new WeakMap(), ye = new WeakMap(), F = new WeakSet(), rn = function() {
    let h = new c(C(this, y)), p = new c(C(this, y));
    Ce(this, pe, h), Ce(this, G, p), Ce(this, Z, (L, z, _e = u.now()) => {
      if (p[L] = z !== 0 ? _e : 0, h[L] = z, z !== 0 && this.ttlAutopurge) {
        let ve = setTimeout(() => {
          C(this, $).call(this, L) && Ae(this, F, Bt).call(this, C(this, ae)[L], "expire");
        }, z + 1);
        ve.unref && ve.unref();
      }
    }), Ce(this, V, (L) => {
      p[L] = h[L] !== 0 ? u.now() : 0;
    }), Ce(this, N, (L, z) => {
      if (h[z]) {
        let _e = h[z], ve = p[z];
        if (!_e || !ve) return;
        L.ttl = _e, L.start = ve, L.now = w || T();
        let ke = L.now - ve;
        L.remainingTTL = _e - ke;
      }
    });
    let w = 0, T = () => {
      let L = u.now();
      if (this.ttlResolution > 0) {
        w = L;
        let z = setTimeout(() => w = 0, this.ttlResolution);
        z.unref && z.unref();
      }
      return L;
    };
    this.getRemainingTTL = (L) => {
      let z = C(this, X).get(L);
      if (z === void 0) return 0;
      let _e = h[z], ve = p[z];
      if (!_e || !ve) return 1 / 0;
      let ke = (w || T()) - ve;
      return _e - ke;
    }, Ce(this, $, (L) => {
      let z = p[L], _e = h[L];
      return !!_e && !!z && (w || T()) - z > _e;
    });
  }, V = new WeakMap(), N = new WeakMap(), Z = new WeakMap(), $ = new WeakMap(), Do = function() {
    let h = new c(C(this, y));
    Ce(this, Y, 0), Ce(this, Ee, h), Ce(this, H, (p) => {
      Ce(this, Y, C(this, Y) - h[p]), h[p] = 0;
    }), Ce(this, ne, (p, w, T, L) => {
      if (Ae(this, F, Fe).call(this, w)) return 0;
      if (!t(T)) if (L) {
        if (typeof L != "function") throw new TypeError("sizeCalculation must be a function");
        if (T = L(w, p), !t(T)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
      } else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      return T;
    }), Ce(this, se, (p, w, T) => {
      if (h[p] = w, C(this, v)) {
        let L = C(this, v) - h[p];
        for (; C(this, Y) > L; ) Ae(this, F, vr).call(this, !0);
      }
      Ce(this, Y, C(this, Y) + h[p]), T && (T.entrySize = w, T.totalCalculatedSize = C(this, Y));
    });
  }, H = new WeakMap(), se = new WeakMap(), ne = new WeakMap(), Pt = function* ({ allowStale: h = this.allowStale } = {}) {
    if (C(this, M)) for (let p = C(this, ge); !(!Ae(this, F, nn).call(this, p) || ((h || !C(this, $).call(this, p)) && (yield p), p === C(this, W))); ) p = C(this, J)[p];
  }, xt = function* ({ allowStale: h = this.allowStale } = {}) {
    if (C(this, M)) for (let p = C(this, W); !(!Ae(this, F, nn).call(this, p) || ((h || !C(this, $).call(this, p)) && (yield p), p === C(this, ge))); ) p = C(this, Q)[p];
  }, nn = function(h) {
    return h !== void 0 && C(this, X).get(C(this, ae)[h]) === h;
  }, vr = function(h) {
    var L, z;
    let p = C(this, W), w = C(this, ae)[p], T = C(this, R)[p];
    return C(this, ie) && Ae(this, F, Fe).call(this, T) ? T.__abortController.abort(new Error("evicted")) : (C(this, P) || C(this, ye)) && (C(this, P) && ((L = C(this, U)) == null || L.call(this, T, w, "evict")), C(this, ye) && ((z = C(this, le)) == null || z.push([T, w, "evict"]))), C(this, H).call(this, p), h && (C(this, ae)[p] = void 0, C(this, R)[p] = void 0, C(this, de).push(p)), C(this, M) === 1 ? (Ce(this, W, Ce(this, ge, 0)), C(this, de).length = 0) : Ce(this, W, C(this, Q)[p]), C(this, X).delete(w), cr(this, M)._--, p;
  }, Er = function(h, p, w, T) {
    let L = p === void 0 ? void 0 : C(this, R)[p];
    if (Ae(this, F, Fe).call(this, L)) return L;
    let z = new i(), { signal: _e } = w;
    _e == null || _e.addEventListener("abort", () => z.abort(_e.reason), { signal: z.signal });
    let ve = { signal: z.signal, options: w, context: T }, ke = (We, Ke = !1) => {
      let { aborted: Pe } = z.signal, De = w.ignoreFetchAbort && We !== void 0;
      if (w.status && (Pe && !Ke ? (w.status.fetchAborted = !0, w.status.fetchError = z.signal.reason, De && (w.status.fetchAbortIgnored = !0)) : w.status.fetchResolved = !0), Pe && !De && !Ke) return Re(z.signal.reason);
      let Xe = nt;
      return C(this, R)[p] === nt && (We === void 0 ? Xe.__staleWhileFetching ? C(this, R)[p] = Xe.__staleWhileFetching : Ae(this, F, Bt).call(this, h, "fetch") : (w.status && (w.status.fetchUpdated = !0), this.set(h, We, ve.options))), We;
    }, xe = (We) => (w.status && (w.status.fetchRejected = !0, w.status.fetchError = We), Re(We)), Re = (We) => {
      let { aborted: Ke } = z.signal, Pe = Ke && w.allowStaleOnFetchAbort, De = Pe || w.allowStaleOnFetchRejection, Xe = De || w.noDeleteOnFetchRejection, Qe = nt;
      if (C(this, R)[p] === nt && (!Xe || Qe.__staleWhileFetching === void 0 ? Ae(this, F, Bt).call(this, h, "fetch") : Pe || (C(this, R)[p] = Qe.__staleWhileFetching)), De) return w.status && Qe.__staleWhileFetching !== void 0 && (w.status.returnedStale = !0), Qe.__staleWhileFetching;
      if (Qe.__returned === Qe) throw We;
    }, dt = (We, Ke) => {
      var De;
      let Pe = (De = C(this, A)) == null ? void 0 : De.call(this, h, L, ve);
      Pe && Pe instanceof Promise && Pe.then((Xe) => We(Xe === void 0 ? void 0 : Xe), Ke), z.signal.addEventListener("abort", () => {
        (!w.ignoreFetchAbort || w.allowStaleOnFetchAbort) && (We(void 0), w.allowStaleOnFetchAbort && (We = (Xe) => ke(Xe, !0)));
      });
    };
    w.status && (w.status.fetchDispatched = !0);
    let nt = new Promise(dt).then(ke, xe), st = Object.assign(nt, { __abortController: z, __staleWhileFetching: L, __returned: void 0 });
    return p === void 0 ? (this.set(h, st, { ...ve.options, status: void 0 }), p = C(this, X).get(h)) : C(this, R)[p] = st, st;
  }, Fe = function(h) {
    if (!C(this, ie)) return !1;
    let p = h;
    return !!p && p instanceof Promise && p.hasOwnProperty("__staleWhileFetching") && p.__abortController instanceof i;
  }, on = function(h, p) {
    C(this, J)[p] = h, C(this, Q)[h] = p;
  }, sr = function(h) {
    h !== C(this, ge) && (h === C(this, W) ? Ce(this, W, C(this, Q)[h]) : Ae(this, F, on).call(this, C(this, J)[h], C(this, Q)[h]), Ae(this, F, on).call(this, C(this, ge), h), Ce(this, ge, h));
  }, Bt = function(h, p) {
    var T, L, z, _e;
    let w = !1;
    if (C(this, M) !== 0) {
      let ve = C(this, X).get(h);
      if (ve !== void 0) if (w = !0, C(this, M) === 1) Ae(this, F, sn).call(this, p);
      else {
        C(this, H).call(this, ve);
        let ke = C(this, R)[ve];
        if (Ae(this, F, Fe).call(this, ke) ? ke.__abortController.abort(new Error("deleted")) : (C(this, P) || C(this, ye)) && (C(this, P) && ((T = C(this, U)) == null || T.call(this, ke, h, p)), C(this, ye) && ((L = C(this, le)) == null || L.push([ke, h, p]))), C(this, X).delete(h), C(this, ae)[ve] = void 0, C(this, R)[ve] = void 0, ve === C(this, ge)) Ce(this, ge, C(this, J)[ve]);
        else if (ve === C(this, W)) Ce(this, W, C(this, Q)[ve]);
        else {
          let xe = C(this, J)[ve];
          C(this, Q)[xe] = C(this, Q)[ve];
          let Re = C(this, Q)[ve];
          C(this, J)[Re] = C(this, J)[ve];
        }
        cr(this, M)._--, C(this, de).push(ve);
      }
    }
    if (C(this, ye) && ((z = C(this, le)) != null && z.length)) {
      let ve = C(this, le), ke;
      for (; ke = ve == null ? void 0 : ve.shift(); ) (_e = C(this, B)) == null || _e.call(this, ...ke);
    }
    return w;
  }, sn = function(h) {
    var p, w, T;
    for (let L of Ae(this, F, xt).call(this, { allowStale: !0 })) {
      let z = C(this, R)[L];
      if (Ae(this, F, Fe).call(this, z)) z.__abortController.abort(new Error("deleted"));
      else {
        let _e = C(this, ae)[L];
        C(this, P) && ((p = C(this, U)) == null || p.call(this, z, _e, h)), C(this, ye) && ((w = C(this, le)) == null || w.push([z, _e, h]));
      }
    }
    if (C(this, X).clear(), C(this, R).fill(void 0), C(this, ae).fill(void 0), C(this, pe) && C(this, G) && (C(this, pe).fill(0), C(this, G).fill(0)), C(this, Ee) && C(this, Ee).fill(0), Ce(this, W, 0), Ce(this, ge, 0), C(this, de).length = 0, Ce(this, Y, 0), Ce(this, M, 0), C(this, ye) && C(this, le)) {
      let L = C(this, le), z;
      for (; z = L == null ? void 0 : L.shift(); ) (T = C(this, B)) == null || T.call(this, ...z);
    }
  }, Oe);
  s.LRUCache = g;
}), kt = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.ContainerIterator = s.Container = s.Base = void 0;
  var u = class {
    constructor(f = 0) {
      this.iteratorType = f;
    }
    equals(f) {
      return this.o === f.o;
    }
  };
  s.ContainerIterator = u;
  var o = class {
    constructor() {
      this.i = 0;
    }
    get length() {
      return this.i;
    }
    size() {
      return this.i;
    }
    empty() {
      return this.i === 0;
    }
  };
  s.Base = o;
  var l = class extends o {
  };
  s.Container = l;
}), va = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = kt(), o = class extends u.Base {
    constructor(f = []) {
      super(), this.S = [];
      let i = this;
      f.forEach(function(e) {
        i.push(e);
      });
    }
    clear() {
      this.i = 0, this.S = [];
    }
    push(f) {
      return this.S.push(f), this.i += 1, this.i;
    }
    pop() {
      if (this.i !== 0) return this.i -= 1, this.S.pop();
    }
    top() {
      return this.S[this.i - 1];
    }
  }, l = o;
  s.default = l;
}), Ea = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = kt(), o = class extends u.Base {
    constructor(f = []) {
      super(), this.j = 0, this.q = [];
      let i = this;
      f.forEach(function(e) {
        i.push(e);
      });
    }
    clear() {
      this.q = [], this.i = this.j = 0;
    }
    push(f) {
      let i = this.q.length;
      if (this.j / i > 0.5 && this.j + this.i >= i && i > 4096) {
        let e = this.i;
        for (let r = 0; r < e; ++r) this.q[r] = this.q[this.j + r];
        this.j = 0, this.q[this.i] = f;
      } else this.q[this.j + this.i] = f;
      return ++this.i;
    }
    pop() {
      if (this.i === 0) return;
      let f = this.q[this.j++];
      return this.i -= 1, f;
    }
    front() {
      if (this.i !== 0) return this.q[this.j];
    }
  }, l = o;
  s.default = l;
}), Sa = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = kt(), o = class extends u.Base {
    constructor(f = [], i = function(r, t) {
      return r > t ? -1 : r < t ? 1 : 0;
    }, e = !0) {
      if (super(), this.v = i, Array.isArray(f)) this.C = e ? [...f] : f;
      else {
        this.C = [];
        let t = this;
        f.forEach(function(n) {
          t.C.push(n);
        });
      }
      this.i = this.C.length;
      let r = this.i >> 1;
      for (let t = this.i - 1 >> 1; t >= 0; --t) this.k(t, r);
    }
    m(f) {
      let i = this.C[f];
      for (; f > 0; ) {
        let e = f - 1 >> 1, r = this.C[e];
        if (this.v(r, i) <= 0) break;
        this.C[f] = r, f = e;
      }
      this.C[f] = i;
    }
    k(f, i) {
      let e = this.C[f];
      for (; f < i; ) {
        let r = f << 1 | 1, t = r + 1, n = this.C[r];
        if (t < this.i && this.v(n, this.C[t]) > 0 && (r = t, n = this.C[t]), this.v(n, e) >= 0) break;
        this.C[f] = n, f = r;
      }
      this.C[f] = e;
    }
    clear() {
      this.i = 0, this.C.length = 0;
    }
    push(f) {
      this.C.push(f), this.m(this.i), this.i += 1;
    }
    pop() {
      if (this.i === 0) return;
      let f = this.C[0], i = this.C.pop();
      return this.i -= 1, this.i && (this.C[0] = i, this.k(0, this.i >> 1)), f;
    }
    top() {
      return this.C[0];
    }
    find(f) {
      return this.C.indexOf(f) >= 0;
    }
    remove(f) {
      let i = this.C.indexOf(f);
      return i < 0 ? !1 : (i === 0 ? this.pop() : i === this.i - 1 ? (this.C.pop(), this.i -= 1) : (this.C.splice(i, 1, this.C.pop()), this.i -= 1, this.m(i), this.k(i, this.i >> 1)), !0);
    }
    updateItem(f) {
      let i = this.C.indexOf(f);
      return i < 0 ? !1 : (this.m(i), this.k(i, this.i >> 1), !0);
    }
    toArray() {
      return [...this.C];
    }
  }, l = o;
  s.default = l;
}), Sn = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = kt(), o = class extends u.Container {
  }, l = o;
  s.default = l;
}), Ct = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.throwIteratorAccessError = u;
  function u() {
    throw new RangeError("Iterator access denied!");
  }
}), Fo = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.RandomIterator = void 0;
  var u = kt(), o = Ct(), l = class extends u.ContainerIterator {
    constructor(f, i) {
      super(i), this.o = f, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === 0 && (0, o.throwIteratorAccessError)(), this.o -= 1, this;
      }, this.next = function() {
        return this.o === this.container.size() && (0, o.throwIteratorAccessError)(), this.o += 1, this;
      }) : (this.pre = function() {
        return this.o === this.container.size() - 1 && (0, o.throwIteratorAccessError)(), this.o += 1, this;
      }, this.next = function() {
        return this.o === -1 && (0, o.throwIteratorAccessError)(), this.o -= 1, this;
      });
    }
    get pointer() {
      return this.container.getElementByPos(this.o);
    }
    set pointer(f) {
      this.container.setElementByPos(this.o, f);
    }
  };
  s.RandomIterator = l;
}), Aa = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = l(Sn()), o = Fo();
  function l(r) {
    return r && r.t ? r : { default: r };
  }
  var f = class Wo extends o.RandomIterator {
    constructor(t, n, c) {
      super(t, c), this.container = n;
    }
    copy() {
      return new Wo(this.o, this.container, this.iteratorType);
    }
  }, i = class extends u.default {
    constructor(r = [], t = !0) {
      if (super(), Array.isArray(r)) this.J = t ? [...r] : r, this.i = r.length;
      else {
        this.J = [];
        let n = this;
        r.forEach(function(c) {
          n.pushBack(c);
        });
      }
    }
    clear() {
      this.i = 0, this.J.length = 0;
    }
    begin() {
      return new f(0, this);
    }
    end() {
      return new f(this.i, this);
    }
    rBegin() {
      return new f(this.i - 1, this, 1);
    }
    rEnd() {
      return new f(-1, this, 1);
    }
    front() {
      return this.J[0];
    }
    back() {
      return this.J[this.i - 1];
    }
    getElementByPos(r) {
      if (r < 0 || r > this.i - 1) throw new RangeError();
      return this.J[r];
    }
    eraseElementByPos(r) {
      if (r < 0 || r > this.i - 1) throw new RangeError();
      return this.J.splice(r, 1), this.i -= 1, this.i;
    }
    eraseElementByValue(r) {
      let t = 0;
      for (let n = 0; n < this.i; ++n) this.J[n] !== r && (this.J[t++] = this.J[n]);
      return this.i = this.J.length = t, this.i;
    }
    eraseElementByIterator(r) {
      let t = r.o;
      return r = r.next(), this.eraseElementByPos(t), r;
    }
    pushBack(r) {
      return this.J.push(r), this.i += 1, this.i;
    }
    popBack() {
      if (this.i !== 0) return this.i -= 1, this.J.pop();
    }
    setElementByPos(r, t) {
      if (r < 0 || r > this.i - 1) throw new RangeError();
      this.J[r] = t;
    }
    insert(r, t, n = 1) {
      if (r < 0 || r > this.i) throw new RangeError();
      return this.J.splice(r, 0, ...new Array(n).fill(t)), this.i += n, this.i;
    }
    find(r) {
      for (let t = 0; t < this.i; ++t) if (this.J[t] === r) return new f(t, this);
      return this.end();
    }
    reverse() {
      this.J.reverse();
    }
    unique() {
      let r = 1;
      for (let t = 1; t < this.i; ++t) this.J[t] !== this.J[t - 1] && (this.J[r++] = this.J[t]);
      return this.i = this.J.length = r, this.i;
    }
    sort(r) {
      this.J.sort(r);
    }
    forEach(r) {
      for (let t = 0; t < this.i; ++t) r(this.J[t], t, this);
    }
    [Symbol.iterator]() {
      return (function* () {
        yield* this.J;
      }).bind(this)();
    }
  }, e = i;
  s.default = e;
}), Ia = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = f(Sn()), o = kt(), l = Ct();
  function f(t) {
    return t && t.t ? t : { default: t };
  }
  var i = class $o extends o.ContainerIterator {
    constructor(n, c, d, g) {
      super(g), this.o = n, this.h = c, this.container = d, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
    get pointer() {
      return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.l;
    }
    set pointer(n) {
      this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.l = n;
    }
    copy() {
      return new $o(this.o, this.h, this.container, this.iteratorType);
    }
  }, e = class extends u.default {
    constructor(t = []) {
      super(), this.h = {}, this.p = this._ = this.h.L = this.h.B = this.h;
      let n = this;
      t.forEach(function(c) {
        n.pushBack(c);
      });
    }
    V(t) {
      let { L: n, B: c } = t;
      n.B = c, c.L = n, t === this.p && (this.p = c), t === this._ && (this._ = n), this.i -= 1;
    }
    G(t, n) {
      let c = n.B, d = { l: t, L: n, B: c };
      n.B = d, c.L = d, n === this.h && (this.p = d), c === this.h && (this._ = d), this.i += 1;
    }
    clear() {
      this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    begin() {
      return new i(this.p, this.h, this);
    }
    end() {
      return new i(this.h, this.h, this);
    }
    rBegin() {
      return new i(this._, this.h, this, 1);
    }
    rEnd() {
      return new i(this.h, this.h, this, 1);
    }
    front() {
      return this.p.l;
    }
    back() {
      return this._.l;
    }
    getElementByPos(t) {
      if (t < 0 || t > this.i - 1) throw new RangeError();
      let n = this.p;
      for (; t--; ) n = n.B;
      return n.l;
    }
    eraseElementByPos(t) {
      if (t < 0 || t > this.i - 1) throw new RangeError();
      let n = this.p;
      for (; t--; ) n = n.B;
      return this.V(n), this.i;
    }
    eraseElementByValue(t) {
      let n = this.p;
      for (; n !== this.h; ) n.l === t && this.V(n), n = n.B;
      return this.i;
    }
    eraseElementByIterator(t) {
      let n = t.o;
      return n === this.h && (0, l.throwIteratorAccessError)(), t = t.next(), this.V(n), t;
    }
    pushBack(t) {
      return this.G(t, this._), this.i;
    }
    popBack() {
      if (this.i === 0) return;
      let t = this._.l;
      return this.V(this._), t;
    }
    pushFront(t) {
      return this.G(t, this.h), this.i;
    }
    popFront() {
      if (this.i === 0) return;
      let t = this.p.l;
      return this.V(this.p), t;
    }
    setElementByPos(t, n) {
      if (t < 0 || t > this.i - 1) throw new RangeError();
      let c = this.p;
      for (; t--; ) c = c.B;
      c.l = n;
    }
    insert(t, n, c = 1) {
      if (t < 0 || t > this.i) throw new RangeError();
      if (c <= 0) return this.i;
      if (t === 0) for (; c--; ) this.pushFront(n);
      else if (t === this.i) for (; c--; ) this.pushBack(n);
      else {
        let d = this.p;
        for (let b = 1; b < t; ++b) d = d.B;
        let g = d.B;
        for (this.i += c; c--; ) d.B = { l: n, L: d }, d.B.L = d, d = d.B;
        d.B = g, g.L = d;
      }
      return this.i;
    }
    find(t) {
      let n = this.p;
      for (; n !== this.h; ) {
        if (n.l === t) return new i(n, this.h, this);
        n = n.B;
      }
      return this.end();
    }
    reverse() {
      if (this.i <= 1) return;
      let t = this.p, n = this._, c = 0;
      for (; c << 1 < this.i; ) {
        let d = t.l;
        t.l = n.l, n.l = d, t = t.B, n = n.L, c += 1;
      }
    }
    unique() {
      if (this.i <= 1) return this.i;
      let t = this.p;
      for (; t !== this.h; ) {
        let n = t;
        for (; n.B !== this.h && n.l === n.B.l; ) n = n.B, this.i -= 1;
        t.B = n.B, t.B.L = t, t = t.B;
      }
      return this.i;
    }
    sort(t) {
      if (this.i <= 1) return;
      let n = [];
      this.forEach(function(d) {
        n.push(d);
      }), n.sort(t);
      let c = this.p;
      n.forEach(function(d) {
        c.l = d, c = c.B;
      });
    }
    merge(t) {
      let n = this;
      if (this.i === 0) t.forEach(function(c) {
        n.pushBack(c);
      });
      else {
        let c = this.p;
        t.forEach(function(d) {
          for (; c !== n.h && c.l <= d; ) c = c.B;
          n.G(d, c.L);
        });
      }
      return this.i;
    }
    forEach(t) {
      let n = this.p, c = 0;
      for (; n !== this.h; ) t(n.l, c++, this), n = n.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        if (this.i === 0) return;
        let t = this.p;
        for (; t !== this.h; ) yield t.l, t = t.B;
      }).bind(this)();
    }
  }, r = e;
  s.default = r;
}), Ta = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = l(Sn()), o = Fo();
  function l(r) {
    return r && r.t ? r : { default: r };
  }
  var f = class qo extends o.RandomIterator {
    constructor(t, n, c) {
      super(t, c), this.container = n;
    }
    copy() {
      return new qo(this.o, this.container, this.iteratorType);
    }
  }, i = class extends u.default {
    constructor(r = [], t = 4096) {
      super(), this.j = 0, this.D = 0, this.R = 0, this.N = 0, this.P = 0, this.A = [];
      let n = (() => {
        if (typeof r.length == "number") return r.length;
        if (typeof r.size == "number") return r.size;
        if (typeof r.size == "function") return r.size();
        throw new TypeError("Cannot get the length or size of the container");
      })();
      this.F = t, this.P = Math.max(Math.ceil(n / this.F), 1);
      for (let g = 0; g < this.P; ++g) this.A.push(new Array(this.F));
      let c = Math.ceil(n / this.F);
      this.j = this.R = (this.P >> 1) - (c >> 1), this.D = this.N = this.F - n % this.F >> 1;
      let d = this;
      r.forEach(function(g) {
        d.pushBack(g);
      });
    }
    T() {
      let r = [], t = Math.max(this.P >> 1, 1);
      for (let n = 0; n < t; ++n) r[n] = new Array(this.F);
      for (let n = this.j; n < this.P; ++n) r[r.length] = this.A[n];
      for (let n = 0; n < this.R; ++n) r[r.length] = this.A[n];
      r[r.length] = [...this.A[this.R]], this.j = t, this.R = r.length - 1;
      for (let n = 0; n < t; ++n) r[r.length] = new Array(this.F);
      this.A = r, this.P = r.length;
    }
    O(r) {
      let t = this.D + r + 1, n = t % this.F, c = n - 1, d = this.j + (t - n) / this.F;
      return n === 0 && (d -= 1), d %= this.P, c < 0 && (c += this.F), { curNodeBucketIndex: d, curNodePointerIndex: c };
    }
    clear() {
      this.A = [new Array(this.F)], this.P = 1, this.j = this.R = this.i = 0, this.D = this.N = this.F >> 1;
    }
    begin() {
      return new f(0, this);
    }
    end() {
      return new f(this.i, this);
    }
    rBegin() {
      return new f(this.i - 1, this, 1);
    }
    rEnd() {
      return new f(-1, this, 1);
    }
    front() {
      if (this.i !== 0) return this.A[this.j][this.D];
    }
    back() {
      if (this.i !== 0) return this.A[this.R][this.N];
    }
    pushBack(r) {
      return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1, this.N = 0) : (this.R = 0, this.N = 0), this.R === this.j && this.N === this.D && this.T()), this.i += 1, this.A[this.R][this.N] = r, this.i;
    }
    popBack() {
      if (this.i === 0) return;
      let r = this.A[this.R][this.N];
      return this.i !== 1 && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1, this.N = this.F - 1) : (this.R = this.P - 1, this.N = this.F - 1)), this.i -= 1, r;
    }
    pushFront(r) {
      return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1, this.D = this.F - 1) : (this.j = this.P - 1, this.D = this.F - 1), this.j === this.R && this.D === this.N && this.T()), this.i += 1, this.A[this.j][this.D] = r, this.i;
    }
    popFront() {
      if (this.i === 0) return;
      let r = this.A[this.j][this.D];
      return this.i !== 1 && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1, this.D = 0) : (this.j = 0, this.D = 0)), this.i -= 1, r;
    }
    getElementByPos(r) {
      if (r < 0 || r > this.i - 1) throw new RangeError();
      let { curNodeBucketIndex: t, curNodePointerIndex: n } = this.O(r);
      return this.A[t][n];
    }
    setElementByPos(r, t) {
      if (r < 0 || r > this.i - 1) throw new RangeError();
      let { curNodeBucketIndex: n, curNodePointerIndex: c } = this.O(r);
      this.A[n][c] = t;
    }
    insert(r, t, n = 1) {
      if (r < 0 || r > this.i) throw new RangeError();
      if (r === 0) for (; n--; ) this.pushFront(t);
      else if (r === this.i) for (; n--; ) this.pushBack(t);
      else {
        let c = [];
        for (let d = r; d < this.i; ++d) c.push(this.getElementByPos(d));
        this.cut(r - 1);
        for (let d = 0; d < n; ++d) this.pushBack(t);
        for (let d = 0; d < c.length; ++d) this.pushBack(c[d]);
      }
      return this.i;
    }
    cut(r) {
      if (r < 0) return this.clear(), 0;
      let { curNodeBucketIndex: t, curNodePointerIndex: n } = this.O(r);
      return this.R = t, this.N = n, this.i = r + 1, this.i;
    }
    eraseElementByPos(r) {
      if (r < 0 || r > this.i - 1) throw new RangeError();
      if (r === 0) this.popFront();
      else if (r === this.i - 1) this.popBack();
      else {
        let t = [];
        for (let c = r + 1; c < this.i; ++c) t.push(this.getElementByPos(c));
        this.cut(r), this.popBack();
        let n = this;
        t.forEach(function(c) {
          n.pushBack(c);
        });
      }
      return this.i;
    }
    eraseElementByValue(r) {
      if (this.i === 0) return 0;
      let t = [];
      for (let c = 0; c < this.i; ++c) {
        let d = this.getElementByPos(c);
        d !== r && t.push(d);
      }
      let n = t.length;
      for (let c = 0; c < n; ++c) this.setElementByPos(c, t[c]);
      return this.cut(n - 1);
    }
    eraseElementByIterator(r) {
      let t = r.o;
      return this.eraseElementByPos(t), r = r.next(), r;
    }
    find(r) {
      for (let t = 0; t < this.i; ++t) if (this.getElementByPos(t) === r) return new f(t, this);
      return this.end();
    }
    reverse() {
      let r = 0, t = this.i - 1;
      for (; r < t; ) {
        let n = this.getElementByPos(r);
        this.setElementByPos(r, this.getElementByPos(t)), this.setElementByPos(t, n), r += 1, t -= 1;
      }
    }
    unique() {
      if (this.i <= 1) return this.i;
      let r = 1, t = this.getElementByPos(0);
      for (let n = 1; n < this.i; ++n) {
        let c = this.getElementByPos(n);
        c !== t && (t = c, this.setElementByPos(r++, c));
      }
      for (; this.i > r; ) this.popBack();
      return this.i;
    }
    sort(r) {
      let t = [];
      for (let n = 0; n < this.i; ++n) t.push(this.getElementByPos(n));
      t.sort(r);
      for (let n = 0; n < this.i; ++n) this.setElementByPos(n, t[n]);
    }
    shrinkToFit() {
      if (this.i === 0) return;
      let r = [];
      this.forEach(function(t) {
        r.push(t);
      }), this.P = Math.max(Math.ceil(this.i / this.F), 1), this.i = this.j = this.R = this.D = this.N = 0, this.A = [];
      for (let t = 0; t < this.P; ++t) this.A.push(new Array(this.F));
      for (let t = 0; t < r.length; ++t) this.pushBack(r[t]);
    }
    forEach(r) {
      for (let t = 0; t < this.i; ++t) r(this.getElementByPos(t), t, this);
    }
    [Symbol.iterator]() {
      return (function* () {
        for (let r = 0; r < this.i; ++r) yield this.getElementByPos(r);
      }).bind(this)();
    }
  }, e = i;
  s.default = e;
}), ka = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.TreeNodeEnableIndex = s.TreeNode = void 0;
  var u = class {
    constructor(l, f) {
      this.ee = 1, this.u = void 0, this.l = void 0, this.U = void 0, this.W = void 0, this.tt = void 0, this.u = l, this.l = f;
    }
    L() {
      let l = this;
      if (l.ee === 1 && l.tt.tt === l) l = l.W;
      else if (l.U) for (l = l.U; l.W; ) l = l.W;
      else {
        let f = l.tt;
        for (; f.U === l; ) l = f, f = l.tt;
        l = f;
      }
      return l;
    }
    B() {
      let l = this;
      if (l.W) {
        for (l = l.W; l.U; ) l = l.U;
        return l;
      } else {
        let f = l.tt;
        for (; f.W === l; ) l = f, f = l.tt;
        return l.W !== f ? f : l;
      }
    }
    te() {
      let l = this.tt, f = this.W, i = f.U;
      return l.tt === this ? l.tt = f : l.U === this ? l.U = f : l.W = f, f.tt = l, f.U = this, this.tt = f, this.W = i, i && (i.tt = this), f;
    }
    se() {
      let l = this.tt, f = this.U, i = f.W;
      return l.tt === this ? l.tt = f : l.U === this ? l.U = f : l.W = f, f.tt = l, f.W = this, this.tt = f, this.U = i, i && (i.tt = this), f;
    }
  };
  s.TreeNode = u;
  var o = class extends u {
    constructor() {
      super(...arguments), this.rt = 1;
    }
    te() {
      let l = super.te();
      return this.ie(), l.ie(), l;
    }
    se() {
      let l = super.se();
      return this.ie(), l.ie(), l;
    }
    ie() {
      this.rt = 1, this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt);
    }
  };
  s.TreeNodeEnableIndex = o;
}), Ho = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = ka(), o = kt(), l = Ct(), f = class extends o.Container {
    constructor(e = function(t, n) {
      return t < n ? -1 : t > n ? 1 : 0;
    }, r = !1) {
      super(), this.Y = void 0, this.v = e, r ? (this.re = u.TreeNodeEnableIndex, this.M = function(t, n, c) {
        let d = this.ne(t, n, c);
        if (d) {
          let g = d.tt;
          for (; g !== this.h; ) g.rt += 1, g = g.tt;
          let b = this.he(d);
          if (b) {
            let { parentNode: m, grandParent: _, curNode: E } = b;
            m.ie(), _.ie(), E.ie();
          }
        }
        return this.i;
      }, this.V = function(t) {
        let n = this.fe(t);
        for (; n !== this.h; ) n.rt -= 1, n = n.tt;
      }) : (this.re = u.TreeNode, this.M = function(t, n, c) {
        let d = this.ne(t, n, c);
        return d && this.he(d), this.i;
      }, this.V = this.fe), this.h = new this.re();
    }
    X(e, r) {
      let t = this.h;
      for (; e; ) {
        let n = this.v(e.u, r);
        if (n < 0) e = e.W;
        else if (n > 0) t = e, e = e.U;
        else return e;
      }
      return t;
    }
    Z(e, r) {
      let t = this.h;
      for (; e; ) this.v(e.u, r) <= 0 ? e = e.W : (t = e, e = e.U);
      return t;
    }
    $(e, r) {
      let t = this.h;
      for (; e; ) {
        let n = this.v(e.u, r);
        if (n < 0) t = e, e = e.W;
        else if (n > 0) e = e.U;
        else return e;
      }
      return t;
    }
    rr(e, r) {
      let t = this.h;
      for (; e; ) this.v(e.u, r) < 0 ? (t = e, e = e.W) : e = e.U;
      return t;
    }
    ue(e) {
      for (; ; ) {
        let r = e.tt;
        if (r === this.h) return;
        if (e.ee === 1) {
          e.ee = 0;
          return;
        }
        if (e === r.U) {
          let t = r.W;
          if (t.ee === 1) t.ee = 0, r.ee = 1, r === this.Y ? this.Y = r.te() : r.te();
          else if (t.W && t.W.ee === 1) {
            t.ee = r.ee, r.ee = 0, t.W.ee = 0, r === this.Y ? this.Y = r.te() : r.te();
            return;
          } else t.U && t.U.ee === 1 ? (t.ee = 1, t.U.ee = 0, t.se()) : (t.ee = 1, e = r);
        } else {
          let t = r.U;
          if (t.ee === 1) t.ee = 0, r.ee = 1, r === this.Y ? this.Y = r.se() : r.se();
          else if (t.U && t.U.ee === 1) {
            t.ee = r.ee, r.ee = 0, t.U.ee = 0, r === this.Y ? this.Y = r.se() : r.se();
            return;
          } else t.W && t.W.ee === 1 ? (t.ee = 1, t.W.ee = 0, t.te()) : (t.ee = 1, e = r);
        }
      }
    }
    fe(e) {
      if (this.i === 1) return this.clear(), this.h;
      let r = e;
      for (; r.U || r.W; ) {
        if (r.W) for (r = r.W; r.U; ) r = r.U;
        else r = r.U;
        [e.u, r.u] = [r.u, e.u], [e.l, r.l] = [r.l, e.l], e = r;
      }
      this.h.U === r ? this.h.U = r.tt : this.h.W === r && (this.h.W = r.tt), this.ue(r);
      let t = r.tt;
      return r === t.U ? t.U = void 0 : t.W = void 0, this.i -= 1, this.Y.ee = 0, t;
    }
    oe(e, r) {
      return e === void 0 ? !1 : this.oe(e.U, r) || r(e) ? !0 : this.oe(e.W, r);
    }
    he(e) {
      for (; ; ) {
        let r = e.tt;
        if (r.ee === 0) return;
        let t = r.tt;
        if (r === t.U) {
          let n = t.W;
          if (n && n.ee === 1) {
            if (n.ee = r.ee = 0, t === this.Y) return;
            t.ee = 1, e = t;
            continue;
          } else if (e === r.W) {
            if (e.ee = 0, e.U && (e.U.tt = r), e.W && (e.W.tt = t), r.W = e.U, t.U = e.W, e.U = r, e.W = t, t === this.Y) this.Y = e, this.h.tt = e;
            else {
              let c = t.tt;
              c.U === t ? c.U = e : c.W = e;
            }
            return e.tt = t.tt, r.tt = e, t.tt = e, t.ee = 1, { parentNode: r, grandParent: t, curNode: e };
          } else r.ee = 0, t === this.Y ? this.Y = t.se() : t.se(), t.ee = 1;
        } else {
          let n = t.U;
          if (n && n.ee === 1) {
            if (n.ee = r.ee = 0, t === this.Y) return;
            t.ee = 1, e = t;
            continue;
          } else if (e === r.U) {
            if (e.ee = 0, e.U && (e.U.tt = t), e.W && (e.W.tt = r), t.W = e.U, r.U = e.W, e.U = t, e.W = r, t === this.Y) this.Y = e, this.h.tt = e;
            else {
              let c = t.tt;
              c.U === t ? c.U = e : c.W = e;
            }
            return e.tt = t.tt, r.tt = e, t.tt = e, t.ee = 1, { parentNode: r, grandParent: t, curNode: e };
          } else r.ee = 0, t === this.Y ? this.Y = t.te() : t.te(), t.ee = 1;
        }
        return;
      }
    }
    ne(e, r, t) {
      if (this.Y === void 0) {
        this.i += 1, this.Y = new this.re(e, r), this.Y.ee = 0, this.Y.tt = this.h, this.h.tt = this.Y, this.h.U = this.Y, this.h.W = this.Y;
        return;
      }
      let n, c = this.h.U, d = this.v(c.u, e);
      if (d === 0) {
        c.l = r;
        return;
      } else if (d > 0) c.U = new this.re(e, r), c.U.tt = c, n = c.U, this.h.U = n;
      else {
        let g = this.h.W, b = this.v(g.u, e);
        if (b === 0) {
          g.l = r;
          return;
        } else if (b < 0) g.W = new this.re(e, r), g.W.tt = g, n = g.W, this.h.W = n;
        else {
          if (t !== void 0) {
            let m = t.o;
            if (m !== this.h) {
              let _ = this.v(m.u, e);
              if (_ === 0) {
                m.l = r;
                return;
              } else if (_ > 0) {
                let E = m.L(), I = this.v(E.u, e);
                if (I === 0) {
                  E.l = r;
                  return;
                } else I < 0 && (n = new this.re(e, r), E.W === void 0 ? (E.W = n, n.tt = E) : (m.U = n, n.tt = m));
              }
            }
          }
          if (n === void 0) for (n = this.Y; ; ) {
            let m = this.v(n.u, e);
            if (m > 0) {
              if (n.U === void 0) {
                n.U = new this.re(e, r), n.U.tt = n, n = n.U;
                break;
              }
              n = n.U;
            } else if (m < 0) {
              if (n.W === void 0) {
                n.W = new this.re(e, r), n.W.tt = n, n = n.W;
                break;
              }
              n = n.W;
            } else {
              n.l = r;
              return;
            }
          }
        }
      }
      return this.i += 1, n;
    }
    I(e, r) {
      for (; e; ) {
        let t = this.v(e.u, r);
        if (t < 0) e = e.W;
        else if (t > 0) e = e.U;
        else return e;
      }
      return e || this.h;
    }
    clear() {
      this.i = 0, this.Y = void 0, this.h.tt = void 0, this.h.U = this.h.W = void 0;
    }
    updateKeyByIterator(e, r) {
      let t = e.o;
      if (t === this.h && (0, l.throwIteratorAccessError)(), this.i === 1) return t.u = r, !0;
      if (t === this.h.U) return this.v(t.B().u, r) > 0 ? (t.u = r, !0) : !1;
      if (t === this.h.W) return this.v(t.L().u, r) < 0 ? (t.u = r, !0) : !1;
      let n = t.L().u;
      if (this.v(n, r) >= 0) return !1;
      let c = t.B().u;
      return this.v(c, r) <= 0 ? !1 : (t.u = r, !0);
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r = 0, t = this;
      return this.oe(this.Y, function(n) {
        return e === r ? (t.V(n), !0) : (r += 1, !1);
      }), this.i;
    }
    eraseElementByKey(e) {
      if (this.i === 0) return !1;
      let r = this.I(this.Y, e);
      return r === this.h ? !1 : (this.V(r), !0);
    }
    eraseElementByIterator(e) {
      let r = e.o;
      r === this.h && (0, l.throwIteratorAccessError)();
      let t = r.W === void 0;
      return e.iteratorType === 0 ? t && e.next() : (!t || r.U === void 0) && e.next(), this.V(r), e;
    }
    forEach(e) {
      let r = 0;
      for (let t of this) e(t, r++, this);
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r, t = 0;
      for (let n of this) {
        if (t === e) {
          r = n;
          break;
        }
        t += 1;
      }
      return r;
    }
    getHeight() {
      if (this.i === 0) return 0;
      let e = function(r) {
        return r ? Math.max(e(r.U), e(r.W)) + 1 : 0;
      };
      return e(this.Y);
    }
  }, i = f;
  s.default = i;
}), Vo = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = kt(), o = Ct(), l = class extends u.ContainerIterator {
    constructor(i, e, r) {
      super(r), this.o = i, this.h = e, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === this.h.U && (0, o.throwIteratorAccessError)(), this.o = this.o.L(), this;
      }, this.next = function() {
        return this.o === this.h && (0, o.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }) : (this.pre = function() {
        return this.o === this.h.W && (0, o.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }, this.next = function() {
        return this.o === this.h && (0, o.throwIteratorAccessError)(), this.o = this.o.L(), this;
      });
    }
    get index() {
      let i = this.o, e = this.h.tt;
      if (i === this.h) return e ? e.rt - 1 : 0;
      let r = 0;
      for (i.U && (r += i.U.rt); i !== e; ) {
        let t = i.tt;
        i === t.W && (r += 1, t.U && (r += t.U.rt)), i = t;
      }
      return r;
    }
  }, f = l;
  s.default = f;
}), Ca = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = f(Ho()), o = f(Vo()), l = Ct();
  function f(t) {
    return t && t.t ? t : { default: t };
  }
  var i = class Go extends o.default {
    constructor(n, c, d, g) {
      super(n, c, g), this.container = d;
    }
    get pointer() {
      return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new Go(this.o, this.h, this.container, this.iteratorType);
    }
  }, e = class extends u.default {
    constructor(t = [], n, c) {
      super(n, c);
      let d = this;
      t.forEach(function(g) {
        d.insert(g);
      });
    }
    *K(t) {
      t !== void 0 && (yield* this.K(t.U), yield t.u, yield* this.K(t.W));
    }
    begin() {
      return new i(this.h.U || this.h, this.h, this);
    }
    end() {
      return new i(this.h, this.h, this);
    }
    rBegin() {
      return new i(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new i(this.h, this.h, this, 1);
    }
    front() {
      return this.h.U ? this.h.U.u : void 0;
    }
    back() {
      return this.h.W ? this.h.W.u : void 0;
    }
    insert(t, n) {
      return this.M(t, void 0, n);
    }
    find(t) {
      let n = this.I(this.Y, t);
      return new i(n, this.h, this);
    }
    lowerBound(t) {
      let n = this.X(this.Y, t);
      return new i(n, this.h, this);
    }
    upperBound(t) {
      let n = this.Z(this.Y, t);
      return new i(n, this.h, this);
    }
    reverseLowerBound(t) {
      let n = this.$(this.Y, t);
      return new i(n, this.h, this);
    }
    reverseUpperBound(t) {
      let n = this.rr(this.Y, t);
      return new i(n, this.h, this);
    }
    union(t) {
      let n = this;
      return t.forEach(function(c) {
        n.insert(c);
      }), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, r = e;
  s.default = r;
}), Oa = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = f(Ho()), o = f(Vo()), l = Ct();
  function f(t) {
    return t && t.t ? t : { default: t };
  }
  var i = class zo extends o.default {
    constructor(n, c, d, g) {
      super(n, c, g), this.container = d;
    }
    get pointer() {
      this.o === this.h && (0, l.throwIteratorAccessError)();
      let n = this;
      return new Proxy([], { get(c, d) {
        if (d === "0") return n.o.u;
        if (d === "1") return n.o.l;
      }, set(c, d, g) {
        if (d !== "1") throw new TypeError("props must be 1");
        return n.o.l = g, !0;
      } });
    }
    copy() {
      return new zo(this.o, this.h, this.container, this.iteratorType);
    }
  }, e = class extends u.default {
    constructor(t = [], n, c) {
      super(n, c);
      let d = this;
      t.forEach(function(g) {
        d.setElement(g[0], g[1]);
      });
    }
    *K(t) {
      t !== void 0 && (yield* this.K(t.U), yield [t.u, t.l], yield* this.K(t.W));
    }
    begin() {
      return new i(this.h.U || this.h, this.h, this);
    }
    end() {
      return new i(this.h, this.h, this);
    }
    rBegin() {
      return new i(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new i(this.h, this.h, this, 1);
    }
    front() {
      if (this.i === 0) return;
      let t = this.h.U;
      return [t.u, t.l];
    }
    back() {
      if (this.i === 0) return;
      let t = this.h.W;
      return [t.u, t.l];
    }
    lowerBound(t) {
      let n = this.X(this.Y, t);
      return new i(n, this.h, this);
    }
    upperBound(t) {
      let n = this.Z(this.Y, t);
      return new i(n, this.h, this);
    }
    reverseLowerBound(t) {
      let n = this.$(this.Y, t);
      return new i(n, this.h, this);
    }
    reverseUpperBound(t) {
      let n = this.rr(this.Y, t);
      return new i(n, this.h, this);
    }
    setElement(t, n, c) {
      return this.M(t, n, c);
    }
    find(t) {
      let n = this.I(this.Y, t);
      return new i(n, this.h, this);
    }
    getElementByKey(t) {
      return this.I(this.Y, t).l;
    }
    union(t) {
      let n = this;
      return t.forEach(function(c) {
        n.setElement(c[0], c[1]);
      }), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, r = e;
  s.default = r;
}), Qo = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = u;
  function u(o) {
    let l = typeof o;
    return l === "object" && o !== null || l === "function";
  }
}), Ko = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.HashContainerIterator = s.HashContainer = void 0;
  var u = kt(), o = f(Qo()), l = Ct();
  function f(r) {
    return r && r.t ? r : { default: r };
  }
  var i = class extends u.ContainerIterator {
    constructor(r, t, n) {
      super(n), this.o = r, this.h = t, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
  };
  s.HashContainerIterator = i;
  var e = class extends u.Container {
    constructor() {
      super(), this.H = [], this.g = {}, this.HASH_TAG = Symbol("@@HASH_TAG"), Object.setPrototypeOf(this.g, null), this.h = {}, this.h.L = this.h.B = this.p = this._ = this.h;
    }
    V(r) {
      let { L: t, B: n } = r;
      t.B = n, n.L = t, r === this.p && (this.p = n), r === this._ && (this._ = t), this.i -= 1;
    }
    M(r, t, n) {
      n === void 0 && (n = (0, o.default)(r));
      let c;
      if (n) {
        let d = r[this.HASH_TAG];
        if (d !== void 0) return this.H[d].l = t, this.i;
        Object.defineProperty(r, this.HASH_TAG, { value: this.H.length, configurable: !0 }), c = { u: r, l: t, L: this._, B: this.h }, this.H.push(c);
      } else {
        let d = this.g[r];
        if (d) return d.l = t, this.i;
        c = { u: r, l: t, L: this._, B: this.h }, this.g[r] = c;
      }
      return this.i === 0 ? (this.p = c, this.h.B = c) : this._.B = c, this._ = c, this.h.L = c, ++this.i;
    }
    I(r, t) {
      if (t === void 0 && (t = (0, o.default)(r)), t) {
        let n = r[this.HASH_TAG];
        return n === void 0 ? this.h : this.H[n];
      } else return this.g[r] || this.h;
    }
    clear() {
      let r = this.HASH_TAG;
      this.H.forEach(function(t) {
        delete t.u[r];
      }), this.H = [], this.g = {}, Object.setPrototypeOf(this.g, null), this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    eraseElementByKey(r, t) {
      let n;
      if (t === void 0 && (t = (0, o.default)(r)), t) {
        let c = r[this.HASH_TAG];
        if (c === void 0) return !1;
        delete r[this.HASH_TAG], n = this.H[c], delete this.H[c];
      } else {
        if (n = this.g[r], n === void 0) return !1;
        delete this.g[r];
      }
      return this.V(n), !0;
    }
    eraseElementByIterator(r) {
      let t = r.o;
      return t === this.h && (0, l.throwIteratorAccessError)(), this.V(t), r.next();
    }
    eraseElementByPos(r) {
      if (r < 0 || r > this.i - 1) throw new RangeError();
      let t = this.p;
      for (; r--; ) t = t.B;
      return this.V(t), this.i;
    }
  };
  s.HashContainer = e;
}), Ra = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = Ko(), o = Ct(), l = class Yo extends u.HashContainerIterator {
    constructor(r, t, n, c) {
      super(r, t, c), this.container = n;
    }
    get pointer() {
      return this.o === this.h && (0, o.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new Yo(this.o, this.h, this.container, this.iteratorType);
    }
  }, f = class extends u.HashContainer {
    constructor(e = []) {
      super();
      let r = this;
      e.forEach(function(t) {
        r.insert(t);
      });
    }
    begin() {
      return new l(this.p, this.h, this);
    }
    end() {
      return new l(this.h, this.h, this);
    }
    rBegin() {
      return new l(this._, this.h, this, 1);
    }
    rEnd() {
      return new l(this.h, this.h, this, 1);
    }
    front() {
      return this.p.u;
    }
    back() {
      return this._.u;
    }
    insert(e, r) {
      return this.M(e, void 0, r);
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r = this.p;
      for (; e--; ) r = r.B;
      return r.u;
    }
    find(e, r) {
      let t = this.I(e, r);
      return new l(t, this.h, this);
    }
    forEach(e) {
      let r = 0, t = this.p;
      for (; t !== this.h; ) e(t.u, r++, this), t = t.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        let e = this.p;
        for (; e !== this.h; ) yield e.u, e = e.B;
      }).bind(this)();
    }
  }, i = f;
  s.default = i;
}), Pa = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), s.default = void 0;
  var u = Ko(), o = f(Qo()), l = Ct();
  function f(t) {
    return t && t.t ? t : { default: t };
  }
  var i = class Jo extends u.HashContainerIterator {
    constructor(n, c, d, g) {
      super(n, c, g), this.container = d;
    }
    get pointer() {
      this.o === this.h && (0, l.throwIteratorAccessError)();
      let n = this;
      return new Proxy([], { get(c, d) {
        if (d === "0") return n.o.u;
        if (d === "1") return n.o.l;
      }, set(c, d, g) {
        if (d !== "1") throw new TypeError("props must be 1");
        return n.o.l = g, !0;
      } });
    }
    copy() {
      return new Jo(this.o, this.h, this.container, this.iteratorType);
    }
  }, e = class extends u.HashContainer {
    constructor(t = []) {
      super();
      let n = this;
      t.forEach(function(c) {
        n.setElement(c[0], c[1]);
      });
    }
    begin() {
      return new i(this.p, this.h, this);
    }
    end() {
      return new i(this.h, this.h, this);
    }
    rBegin() {
      return new i(this._, this.h, this, 1);
    }
    rEnd() {
      return new i(this.h, this.h, this, 1);
    }
    front() {
      if (this.i !== 0) return [this.p.u, this.p.l];
    }
    back() {
      if (this.i !== 0) return [this._.u, this._.l];
    }
    setElement(t, n, c) {
      return this.M(t, n, c);
    }
    getElementByKey(t, n) {
      if (n === void 0 && (n = (0, o.default)(t)), n) {
        let d = t[this.HASH_TAG];
        return d !== void 0 ? this.H[d].l : void 0;
      }
      let c = this.g[t];
      return c ? c.l : void 0;
    }
    getElementByPos(t) {
      if (t < 0 || t > this.i - 1) throw new RangeError();
      let n = this.p;
      for (; t--; ) n = n.B;
      return [n.u, n.l];
    }
    find(t, n) {
      let c = this.I(t, n);
      return new i(c, this.h, this);
    }
    forEach(t) {
      let n = 0, c = this.p;
      for (; c !== this.h; ) t([c.u, c.l], n++, this), c = c.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        let t = this.p;
        for (; t !== this.h; ) yield [t.u, t.l], t = t.B;
      }).bind(this)();
    }
  }, r = e;
  s.default = r;
}), xa = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "t", { value: !0 }), Object.defineProperty(s, "Deque", { enumerable: !0, get: function() {
    return e.default;
  } }), Object.defineProperty(s, "HashMap", { enumerable: !0, get: function() {
    return c.default;
  } }), Object.defineProperty(s, "HashSet", { enumerable: !0, get: function() {
    return n.default;
  } }), Object.defineProperty(s, "LinkList", { enumerable: !0, get: function() {
    return i.default;
  } }), Object.defineProperty(s, "OrderedMap", { enumerable: !0, get: function() {
    return t.default;
  } }), Object.defineProperty(s, "OrderedSet", { enumerable: !0, get: function() {
    return r.default;
  } }), Object.defineProperty(s, "PriorityQueue", { enumerable: !0, get: function() {
    return l.default;
  } }), Object.defineProperty(s, "Queue", { enumerable: !0, get: function() {
    return o.default;
  } }), Object.defineProperty(s, "Stack", { enumerable: !0, get: function() {
    return u.default;
  } }), Object.defineProperty(s, "Vector", { enumerable: !0, get: function() {
    return f.default;
  } });
  var u = d(va()), o = d(Ea()), l = d(Sa()), f = d(Aa()), i = d(Ia()), e = d(Ta()), r = d(Ca()), t = d(Oa()), n = d(Ra()), c = d(Pa());
  function d(g) {
    return g && g.t ? g : { default: g };
  }
}), Ba = be((s, u) => {
  he(), fe(), ce();
  var o = xa().OrderedSet, l = It()("number-allocator:trace"), f = It()("number-allocator:error");
  function i(r, t) {
    this.low = r, this.high = t;
  }
  i.prototype.equals = function(r) {
    return this.low === r.low && this.high === r.high;
  }, i.prototype.compare = function(r) {
    return this.low < r.low && this.high < r.low ? -1 : r.low < this.low && r.high < this.low ? 1 : 0;
  };
  function e(r, t) {
    if (!(this instanceof e)) return new e(r, t);
    this.min = r, this.max = t, this.ss = new o([], (n, c) => n.compare(c)), l("Create"), this.clear();
  }
  e.prototype.firstVacant = function() {
    return this.ss.size() === 0 ? null : this.ss.front().low;
  }, e.prototype.alloc = function() {
    if (this.ss.size() === 0) return l("alloc():empty"), null;
    let r = this.ss.begin(), t = r.pointer.low, n = r.pointer.high, c = t;
    return c + 1 <= n ? this.ss.updateKeyByIterator(r, new i(t + 1, n)) : this.ss.eraseElementByPos(0), l("alloc():" + c), c;
  }, e.prototype.use = function(r) {
    let t = new i(r, r), n = this.ss.lowerBound(t);
    if (!n.equals(this.ss.end())) {
      let c = n.pointer.low, d = n.pointer.high;
      return n.pointer.equals(t) ? (this.ss.eraseElementByIterator(n), l("use():" + r), !0) : c > r ? !1 : c === r ? (this.ss.updateKeyByIterator(n, new i(c + 1, d)), l("use():" + r), !0) : d === r ? (this.ss.updateKeyByIterator(n, new i(c, d - 1)), l("use():" + r), !0) : (this.ss.updateKeyByIterator(n, new i(r + 1, d)), this.ss.insert(new i(c, r - 1)), l("use():" + r), !0);
    }
    return l("use():failed"), !1;
  }, e.prototype.free = function(r) {
    if (r < this.min || r > this.max) {
      f("free():" + r + " is out of range");
      return;
    }
    let t = new i(r, r), n = this.ss.upperBound(t);
    if (n.equals(this.ss.end())) {
      if (n.equals(this.ss.begin())) {
        this.ss.insert(t);
        return;
      }
      n.pre();
      let c = n.pointer.high;
      n.pointer.high + 1 === r ? this.ss.updateKeyByIterator(n, new i(c, r)) : this.ss.insert(t);
    } else if (n.equals(this.ss.begin())) if (r + 1 === n.pointer.low) {
      let c = n.pointer.high;
      this.ss.updateKeyByIterator(n, new i(r, c));
    } else this.ss.insert(t);
    else {
      let c = n.pointer.low, d = n.pointer.high;
      n.pre();
      let g = n.pointer.low;
      n.pointer.high + 1 === r ? r + 1 === c ? (this.ss.eraseElementByIterator(n), this.ss.updateKeyByIterator(n, new i(g, d))) : this.ss.updateKeyByIterator(n, new i(g, r)) : r + 1 === c ? (this.ss.eraseElementByIterator(n.next()), this.ss.insert(new i(r, d))) : this.ss.insert(t);
    }
    l("free():" + r);
  }, e.prototype.clear = function() {
    l("clear()"), this.ss.clear(), this.ss.insert(new i(this.min, this.max));
  }, e.prototype.intervalCount = function() {
    return this.ss.size();
  }, e.prototype.dump = function() {
    console.log("length:" + this.ss.size());
    for (let r of this.ss) console.log(r);
  }, u.exports = e;
}), Xo = be((s, u) => {
  he(), fe(), ce();
  var o = Ba();
  u.exports.NumberAllocator = o;
}), Ma = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = _a(), o = Xo(), l = class {
    constructor(f) {
      f > 0 && (this.aliasToTopic = new u.LRUCache({ max: f }), this.topicToAlias = {}, this.numberAllocator = new o.NumberAllocator(1, f), this.max = f, this.length = 0);
    }
    put(f, i) {
      if (i === 0 || i > this.max) return !1;
      let e = this.aliasToTopic.get(i);
      return e && delete this.topicToAlias[e], this.aliasToTopic.set(i, f), this.topicToAlias[f] = i, this.numberAllocator.use(i), this.length = this.aliasToTopic.size, !0;
    }
    getTopicByAlias(f) {
      return this.aliasToTopic.get(f);
    }
    getAliasByTopic(f) {
      let i = this.topicToAlias[f];
      return typeof i < "u" && this.aliasToTopic.get(i), i;
    }
    clear() {
      this.aliasToTopic.clear(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0;
    }
    getLruAlias() {
      return this.numberAllocator.firstVacant() || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1];
    }
  };
  s.default = l;
}), Na = be((s) => {
  he(), fe(), ce();
  var u = s && s.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  var o = xr(), l = u(Ma()), f = tr(), i = (e, r) => {
    e.log("_handleConnack");
    let { options: t } = e, n = t.protocolVersion === 5 ? r.reasonCode : r.returnCode;
    if (clearTimeout(e.connackTimer), delete e.topicAliasSend, r.properties) {
      if (r.properties.topicAliasMaximum) {
        if (r.properties.topicAliasMaximum > 65535) {
          e.emit("error", new Error("topicAliasMaximum from broker is out of range"));
          return;
        }
        r.properties.topicAliasMaximum > 0 && (e.topicAliasSend = new l.default(r.properties.topicAliasMaximum));
      }
      r.properties.serverKeepAlive && t.keepalive && (t.keepalive = r.properties.serverKeepAlive), r.properties.maximumPacketSize && (t.properties || (t.properties = {}), t.properties.maximumPacketSize = r.properties.maximumPacketSize);
    }
    if (n === 0) e.reconnecting = !1, e._onConnect(r);
    else if (n > 0) {
      let c = new f.ErrorWithReasonCode(`Connection refused: ${o.ReasonCodes[n]}`, n);
      e.emit("error", c), e.options.reconnectOnConnackError && e._cleanUp(!0);
    }
  };
  s.default = i;
}), La = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = (o, l, f) => {
    o.log("handling pubrel packet");
    let i = typeof f < "u" ? f : o.noop, { messageId: e } = l, r = { cmd: "pubcomp", messageId: e };
    o.incomingStore.get(l, (t, n) => {
      t ? o._sendPacket(r, i) : (o.emit("message", n.topic, n.payload, n), o.handleMessage(n, (c) => {
        if (c) return i(c);
        o.incomingStore.del(n, o.noop), o._sendPacket(r, i);
      }));
    });
  };
  s.default = u;
}), Ua = be((s) => {
  he(), fe(), ce();
  var u = s && s.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  var o = u(ma()), l = u(wa()), f = u(Na()), i = u(xr()), e = u(La()), r = (t, n, c) => {
    let { options: d } = t;
    if (d.protocolVersion === 5 && d.properties && d.properties.maximumPacketSize && d.properties.maximumPacketSize < n.length) return t.emit("error", new Error(`exceeding packets size ${n.cmd}`)), t.end({ reasonCode: 149, properties: { reasonString: "Maximum packet size was exceeded" } }), t;
    switch (t.log("_handlePacket :: emitting packetreceive"), t.emit("packetreceive", n), n.cmd) {
      case "publish":
        (0, o.default)(t, n, c);
        break;
      case "puback":
      case "pubrec":
      case "pubcomp":
      case "suback":
      case "unsuback":
        t.reschedulePing(), (0, i.default)(t, n), c();
        break;
      case "pubrel":
        t.reschedulePing(), (0, e.default)(t, n, c);
        break;
      case "connack":
        (0, f.default)(t, n), c();
        break;
      case "auth":
        t.reschedulePing(), (0, l.default)(t, n), c();
        break;
      case "pingresp":
        t.log("_handlePacket :: received pingresp"), t.reschedulePing(!0), c();
        break;
      case "disconnect":
        t.emit("disconnect", n), c();
        break;
      default:
        t.log("_handlePacket :: unknown command"), c();
        break;
    }
  };
  s.default = r;
}), ja = be((s) => {
  he(), fe(), ce();
  var u = s && s.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.TypedEventEmitter = void 0;
  var o = u((Qt(), je(Nt))), l = tr(), f = class {
  };
  s.TypedEventEmitter = f, (0, l.applyMixin)(f, o.default);
}), Br = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 }), s.isReactNativeBrowser = s.isWebWorker = void 0;
  var u = () => {
    var i;
    return typeof window < "u" ? typeof navigator < "u" && ((i = navigator.userAgent) === null || i === void 0 ? void 0 : i.toLowerCase().indexOf(" electron/")) > -1 && Ne != null && Ne.versions ? !Object.prototype.hasOwnProperty.call(Ne.versions, "electron") : typeof window.document < "u" : !1;
  }, o = () => {
    var i, e;
    return !!(typeof self == "object" && !((e = (i = self == null ? void 0 : self.constructor) === null || i === void 0 ? void 0 : i.name) === null || e === void 0) && e.includes("WorkerGlobalScope"));
  }, l = () => typeof navigator < "u" && navigator.product === "ReactNative", f = u() || o() || l();
  s.isWebWorker = o(), s.isReactNativeBrowser = l(), s.default = f;
}), Da = be((s, u) => {
  he(), fe(), ce(), function(o, l) {
    typeof s == "object" && typeof u < "u" ? l(s) : typeof define == "function" && define.amd ? define(["exports"], l) : (o = typeof globalThis < "u" ? globalThis : o || self, l(o.fastUniqueNumbers = {}));
  }(s, function(o) {
    var l = function(b) {
      return function(m) {
        var _ = b(m);
        return m.add(_), _;
      };
    }, f = function(b) {
      return function(m, _) {
        return b.set(m, _), _;
      };
    }, i = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER, e = 536870912, r = e * 2, t = function(b, m) {
      return function(_) {
        var E = m.get(_), I = E === void 0 ? _.size : E < r ? E + 1 : 0;
        if (!_.has(I)) return b(_, I);
        if (_.size < e) {
          for (; _.has(I); ) I = Math.floor(Math.random() * r);
          return b(_, I);
        }
        if (_.size > i) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        for (; _.has(I); ) I = Math.floor(Math.random() * i);
        return b(_, I);
      };
    }, n = /* @__PURE__ */ new WeakMap(), c = f(n), d = t(c, n), g = l(d);
    o.addUniqueNumber = g, o.generateUniqueNumber = d;
  });
}), Fa = be((s, u) => {
  he(), fe(), ce(), function(o, l) {
    typeof s == "object" && typeof u < "u" ? l(s, Da()) : typeof define == "function" && define.amd ? define(["exports", "fast-unique-numbers"], l) : (o = typeof globalThis < "u" ? globalThis : o || self, l(o.workerTimersBroker = {}, o.fastUniqueNumbers));
  }(s, function(o, l) {
    var f = function(r) {
      return r.method !== void 0 && r.method === "call";
    }, i = function(r) {
      return r.error === null && typeof r.id == "number";
    }, e = function(r) {
      var t = /* @__PURE__ */ new Map([[0, function() {
      }]]), n = /* @__PURE__ */ new Map([[0, function() {
      }]]), c = /* @__PURE__ */ new Map(), d = new Worker(r);
      d.addEventListener("message", function(E) {
        var I = E.data;
        if (f(I)) {
          var y = I.params, v = y.timerId, U = y.timerType;
          if (U === "interval") {
            var B = t.get(v);
            if (typeof B == "number") {
              var A = c.get(B);
              if (A === void 0 || A.timerId !== v || A.timerType !== U) throw new Error("The timer is in an undefined state.");
            } else if (typeof B < "u") B();
            else throw new Error("The timer is in an undefined state.");
          } else if (U === "timeout") {
            var k = n.get(v);
            if (typeof k == "number") {
              var M = c.get(k);
              if (M === void 0 || M.timerId !== v || M.timerType !== U) throw new Error("The timer is in an undefined state.");
            } else if (typeof k < "u") k(), n.delete(v);
            else throw new Error("The timer is in an undefined state.");
          }
        } else if (i(I)) {
          var Y = I.id, X = c.get(Y);
          if (X === void 0) throw new Error("The timer is in an undefined state.");
          var ae = X.timerId, R = X.timerType;
          c.delete(Y), R === "interval" ? t.delete(ae) : n.delete(ae);
        } else {
          var Q = I.error.message;
          throw new Error(Q);
        }
      });
      var g = function(E) {
        var I = l.generateUniqueNumber(c);
        c.set(I, { timerId: E, timerType: "interval" }), t.set(E, I), d.postMessage({ id: I, method: "clear", params: { timerId: E, timerType: "interval" } });
      }, b = function(E) {
        var I = l.generateUniqueNumber(c);
        c.set(I, { timerId: E, timerType: "timeout" }), n.set(E, I), d.postMessage({ id: I, method: "clear", params: { timerId: E, timerType: "timeout" } });
      }, m = function(E) {
        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = l.generateUniqueNumber(t);
        return t.set(y, function() {
          E(), typeof t.get(y) == "function" && d.postMessage({ id: null, method: "set", params: { delay: I, now: performance.now(), timerId: y, timerType: "interval" } });
        }), d.postMessage({ id: null, method: "set", params: { delay: I, now: performance.now(), timerId: y, timerType: "interval" } }), y;
      }, _ = function(E) {
        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = l.generateUniqueNumber(n);
        return n.set(y, E), d.postMessage({ id: null, method: "set", params: { delay: I, now: performance.now(), timerId: y, timerType: "timeout" } }), y;
      };
      return { clearInterval: g, clearTimeout: b, setInterval: m, setTimeout: _ };
    };
    o.load = e;
  });
}), Wa = be((s, u) => {
  he(), fe(), ce(), function(o, l) {
    typeof s == "object" && typeof u < "u" ? l(s, Fa()) : typeof define == "function" && define.amd ? define(["exports", "worker-timers-broker"], l) : (o = typeof globalThis < "u" ? globalThis : o || self, l(o.workerTimers = {}, o.workerTimersBroker));
  }(s, function(o, l) {
    var f = function(d, g) {
      var b = null;
      return function() {
        if (b !== null) return b;
        var m = new Blob([g], { type: "application/javascript; charset=utf-8" }), _ = URL.createObjectURL(m);
        return b = d(_), setTimeout(function() {
          return URL.revokeObjectURL(_);
        }), b;
      };
    }, i = `(()=>{var e={472:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error('The given type "'.concat(c,'" is not supported'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error('The given type "'.concat(v,'" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`, e = f(l.load, i), r = function(d) {
      return e().clearInterval(d);
    }, t = function(d) {
      return e().clearTimeout(d);
    }, n = function() {
      var d;
      return (d = e()).setInterval.apply(d, arguments);
    }, c = function() {
      var d;
      return (d = e()).setTimeout.apply(d, arguments);
    };
    o.clearInterval = r, o.clearTimeout = t, o.setInterval = n, o.setTimeout = c;
  });
}), $a = be((s) => {
  he(), fe(), ce();
  var u = s && s.__createBinding || (Object.create ? function(n, c, d, g) {
    g === void 0 && (g = d);
    var b = Object.getOwnPropertyDescriptor(c, d);
    (!b || ("get" in b ? !c.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return c[d];
    } }), Object.defineProperty(n, g, b);
  } : function(n, c, d, g) {
    g === void 0 && (g = d), n[g] = c[d];
  }), o = s && s.__setModuleDefault || (Object.create ? function(n, c) {
    Object.defineProperty(n, "default", { enumerable: !0, value: c });
  } : function(n, c) {
    n.default = c;
  }), l = s && s.__importStar || /* @__PURE__ */ function() {
    var n = function(c) {
      return n = Object.getOwnPropertyNames || function(d) {
        var g = [];
        for (var b in d) Object.prototype.hasOwnProperty.call(d, b) && (g[g.length] = b);
        return g;
      }, n(c);
    };
    return function(c) {
      if (c && c.__esModule) return c;
      var d = {};
      if (c != null) for (var g = n(c), b = 0; b < g.length; b++) g[b] !== "default" && u(d, c, g[b]);
      return o(d, c), d;
    };
  }();
  Object.defineProperty(s, "__esModule", { value: !0 });
  var f = l(Br()), i = Wa(), e = { set: i.setInterval, clear: i.clearInterval }, r = { set: (n, c) => setInterval(n, c), clear: (n) => clearInterval(n) }, t = (n) => {
    switch (n) {
      case "native":
        return r;
      case "worker":
        return e;
      case "auto":
      default:
        return f.default && !f.isWebWorker && !f.isReactNativeBrowser ? e : r;
    }
  };
  s.default = t;
}), Zo = be((s) => {
  he(), fe(), ce();
  var u = s && s.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  var o = u($a()), l = class {
    get keepaliveTimeoutTimestamp() {
      return this._keepaliveTimeoutTimestamp;
    }
    get intervalEvery() {
      return this._intervalEvery;
    }
    get keepalive() {
      return this._keepalive;
    }
    constructor(f, i) {
      this.destroyed = !1, this.client = f, this.timer = typeof i == "object" && "set" in i && "clear" in i ? i : (0, o.default)(i), this.setKeepalive(f.options.keepalive);
    }
    clear() {
      this.timerId && (this.timer.clear(this.timerId), this.timerId = null);
    }
    setKeepalive(f) {
      if (f *= 1e3, isNaN(f) || f <= 0 || f > 2147483647) throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${f}`);
      this._keepalive = f, this.reschedule(), this.client.log(`KeepaliveManager: set keepalive to ${f}ms`);
    }
    destroy() {
      this.clear(), this.destroyed = !0;
    }
    reschedule() {
      if (this.destroyed) return;
      this.clear(), this.counter = 0;
      let f = Math.ceil(this._keepalive * 1.5);
      this._keepaliveTimeoutTimestamp = Date.now() + f, this._intervalEvery = Math.ceil(this._keepalive / 2), this.timerId = this.timer.set(() => {
        this.destroyed || (this.counter += 1, this.counter === 2 ? this.client.sendPing() : this.counter > 2 && this.client.onKeepaliveTimeout());
      }, this._intervalEvery);
    }
  };
  s.default = l;
}), an = be((s) => {
  he(), fe(), ce();
  var u = s && s.__createBinding || (Object.create ? function(B, A, k, M) {
    M === void 0 && (M = k);
    var Y = Object.getOwnPropertyDescriptor(A, k);
    (!Y || ("get" in Y ? !A.__esModule : Y.writable || Y.configurable)) && (Y = { enumerable: !0, get: function() {
      return A[k];
    } }), Object.defineProperty(B, M, Y);
  } : function(B, A, k, M) {
    M === void 0 && (M = k), B[M] = A[k];
  }), o = s && s.__setModuleDefault || (Object.create ? function(B, A) {
    Object.defineProperty(B, "default", { enumerable: !0, value: A });
  } : function(B, A) {
    B.default = A;
  }), l = s && s.__importStar || /* @__PURE__ */ function() {
    var B = function(A) {
      return B = Object.getOwnPropertyNames || function(k) {
        var M = [];
        for (var Y in k) Object.prototype.hasOwnProperty.call(k, Y) && (M[M.length] = Y);
        return M;
      }, B(A);
    };
    return function(A) {
      if (A && A.__esModule) return A;
      var k = {};
      if (A != null) for (var M = B(A), Y = 0; Y < M.length; Y++) M[Y] !== "default" && u(k, A, M[Y]);
      return o(k, A), k;
    };
  }(), f = s && s.__importDefault || function(B) {
    return B && B.__esModule ? B : { default: B };
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  var i = f(Ys()), e = f(da()), r = f(Lo()), t = Yt(), n = f(ga()), c = l(ba()), d = f(It()), g = f(Uo()), b = f(Ua()), m = tr(), _ = ja(), E = f(Zo()), I = l(Br()), y = globalThis.setImmediate || ((...B) => {
    let A = B.shift();
    (0, m.nextTick)(() => {
      A(...B);
    });
  }), v = { keepalive: 60, reschedulePings: !0, protocolId: "MQTT", protocolVersion: 4, reconnectPeriod: 1e3, connectTimeout: 30 * 1e3, clean: !0, resubscribe: !0, writeCache: !0, timerVariant: "auto" }, U = class ln extends _.TypedEventEmitter {
    static defaultId() {
      return `mqttjs_${Math.random().toString(16).substr(2, 8)}`;
    }
    constructor(A, k) {
      super(), this.options = k || {};
      for (let M in v) typeof this.options[M] > "u" ? this.options[M] = v[M] : this.options[M] = k[M];
      this.log = this.options.log || (0, d.default)("mqttjs:client"), this.noop = this._noop.bind(this), this.log("MqttClient :: version:", ln.VERSION), I.isWebWorker ? this.log("MqttClient :: environment", "webworker") : this.log("MqttClient :: environment", I.default ? "browser" : "node"), this.log("MqttClient :: options.protocol", k.protocol), this.log("MqttClient :: options.protocolVersion", k.protocolVersion), this.log("MqttClient :: options.username", k.username), this.log("MqttClient :: options.keepalive", k.keepalive), this.log("MqttClient :: options.reconnectPeriod", k.reconnectPeriod), this.log("MqttClient :: options.rejectUnauthorized", k.rejectUnauthorized), this.log("MqttClient :: options.properties.topicAliasMaximum", k.properties ? k.properties.topicAliasMaximum : void 0), this.options.clientId = typeof k.clientId == "string" ? k.clientId : ln.defaultId(), this.log("MqttClient :: clientId", this.options.clientId), this.options.customHandleAcks = k.protocolVersion === 5 && k.customHandleAcks ? k.customHandleAcks : (...M) => {
        M[3](null, 0);
      }, this.options.writeCache || (e.default.writeToStream.cacheNumbers = !1), this.streamBuilder = A, this.messageIdProvider = typeof this.options.messageIdProvider > "u" ? new r.default() : this.options.messageIdProvider, this.outgoingStore = k.outgoingStore || new g.default(), this.incomingStore = k.incomingStore || new g.default(), this.queueQoSZero = k.queueQoSZero === void 0 ? !0 : k.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.keepaliveManager = null, this.connected = !1, this.disconnecting = !1, this.reconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}, this._storeProcessingQueue = [], this.outgoing = {}, this._firstConnection = !0, k.properties && k.properties.topicAliasMaximum > 0 && (k.properties.topicAliasMaximum > 65535 ? this.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : this.topicAliasRecv = new i.default(k.properties.topicAliasMaximum)), this.on("connect", () => {
        let { queue: M } = this, Y = () => {
          let X = M.shift();
          this.log("deliver :: entry %o", X);
          let ae = null;
          if (!X) {
            this._resubscribe();
            return;
          }
          ae = X.packet, this.log("deliver :: call _sendPacket for %o", ae);
          let R = !0;
          ae.messageId && ae.messageId !== 0 && (this.messageIdProvider.register(ae.messageId) || (R = !1)), R ? this._sendPacket(ae, (Q) => {
            X.cb && X.cb(Q), Y();
          }) : (this.log("messageId: %d has already used. The message is skipped and removed.", ae.messageId), Y());
        };
        this.log("connect :: sending queued packets"), Y();
      }), this.on("close", () => {
        this.log("close :: connected set to `false`"), this.connected = !1, this.log("close :: clearing connackTimer"), clearTimeout(this.connackTimer), this._destroyKeepaliveManager(), this.topicAliasRecv && this.topicAliasRecv.clear(), this.log("close :: calling _setupReconnect"), this._setupReconnect();
      }), this.options.manualConnect || (this.log("MqttClient :: setting up stream"), this.connect());
    }
    handleAuth(A, k) {
      k();
    }
    handleMessage(A, k) {
      k();
    }
    _nextId() {
      return this.messageIdProvider.allocate();
    }
    getLastMessageId() {
      return this.messageIdProvider.getLastAllocated();
    }
    connect() {
      var A;
      let k = new t.Writable(), M = e.default.parser(this.options), Y = null, X = [];
      this.log("connect :: calling method to clear reconnect"), this._clearReconnect(), this.disconnected && !this.reconnecting && (this.incomingStore = this.options.incomingStore || new g.default(), this.outgoingStore = this.options.outgoingStore || new g.default(), this.disconnecting = !1, this.disconnected = !1), this.log("connect :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), M.on("packet", (W) => {
        this.log("parser :: on packet push to packets array."), X.push(W);
      });
      let ae = () => {
        this.log("work :: getting next packet in queue");
        let W = X.shift();
        if (W) this.log("work :: packet pulled from queue"), (0, b.default)(this, W, R);
        else {
          this.log("work :: no packets in queue");
          let ge = Y;
          Y = null, this.log("work :: done flag is %s", !!ge), ge && ge();
        }
      }, R = () => {
        if (X.length) (0, m.nextTick)(ae);
        else {
          let W = Y;
          Y = null, W();
        }
      };
      k._write = (W, ge, de) => {
        Y = de, this.log("writable stream :: parsing buffer"), M.parse(W), ae();
      };
      let Q = (W) => {
        this.log("streamErrorHandler :: error", W.message), W.code ? (this.log("streamErrorHandler :: emitting error"), this.emit("error", W)) : this.noop(W);
      };
      this.log("connect :: pipe stream to writable stream"), this.stream.pipe(k), this.stream.on("error", Q), this.stream.on("close", () => {
        this.log("(%s)stream :: on close", this.options.clientId), this._flushVolatile(), this.log("stream: emit close to MqttClient"), this.emit("close");
      }), this.log("connect: sending packet `connect`");
      let J = { cmd: "connect", protocolId: this.options.protocolId, protocolVersion: this.options.protocolVersion, clean: this.options.clean, clientId: this.options.clientId, keepalive: this.options.keepalive, username: this.options.username, password: this.options.password, properties: this.options.properties };
      if (this.options.will && (J.will = Object.assign(Object.assign({}, this.options.will), { payload: (A = this.options.will) === null || A === void 0 ? void 0 : A.payload })), this.topicAliasRecv && (J.properties || (J.properties = {}), this.topicAliasRecv && (J.properties.topicAliasMaximum = this.topicAliasRecv.max)), this._writePacket(J), M.on("error", this.emit.bind(this, "error")), this.options.properties) {
        if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) return this.end(() => this.emit("error", new Error("Packet has no Authentication Method"))), this;
        if (this.options.properties.authenticationMethod && this.options.authPacket && typeof this.options.authPacket == "object") {
          let W = Object.assign({ cmd: "auth", reasonCode: 0 }, this.options.authPacket);
          this._writePacket(W);
        }
      }
      return this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout(() => {
        this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"), this.emit("error", new Error("connack timeout")), this._cleanUp(!0);
      }, this.options.connectTimeout), this;
    }
    publish(A, k, M, Y) {
      this.log("publish :: message `%s` to topic `%s`", k, A);
      let { options: X } = this;
      typeof M == "function" && (Y = M, M = null), M = M || {}, M = Object.assign(Object.assign({}, { qos: 0, retain: !1, dup: !1 }), M);
      let { qos: ae, retain: R, dup: Q, properties: J, cbStorePut: W } = M;
      if (this._checkDisconnecting(Y)) return this;
      let ge = () => {
        let de = 0;
        if ((ae === 1 || ae === 2) && (de = this._nextId(), de === null)) return this.log("No messageId left"), !1;
        let le = { cmd: "publish", topic: A, payload: k, qos: ae, retain: R, messageId: de, dup: Q };
        switch (X.protocolVersion === 5 && (le.properties = J), this.log("publish :: qos", ae), ae) {
          case 1:
          case 2:
            this.outgoing[le.messageId] = { volatile: !1, cb: Y || this.noop }, this.log("MqttClient:publish: packet cmd: %s", le.cmd), this._sendPacket(le, void 0, W);
            break;
          default:
            this.log("MqttClient:publish: packet cmd: %s", le.cmd), this._sendPacket(le, Y, W);
            break;
        }
        return !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !ge()) && this._storeProcessingQueue.push({ invoke: ge, cbStorePut: M.cbStorePut, callback: Y }), this;
    }
    publishAsync(A, k, M) {
      return new Promise((Y, X) => {
        this.publish(A, k, M, (ae, R) => {
          ae ? X(ae) : Y(R);
        });
      });
    }
    subscribe(A, k, M) {
      let Y = this.options.protocolVersion;
      typeof k == "function" && (M = k), M = M || this.noop;
      let X = !1, ae = [];
      typeof A == "string" ? (A = [A], ae = A) : Array.isArray(A) ? ae = A : typeof A == "object" && (X = A.resubscribe, delete A.resubscribe, ae = Object.keys(A));
      let R = c.validateTopics(ae);
      if (R !== null) return y(M, new Error(`Invalid topic ${R}`)), this;
      if (this._checkDisconnecting(M)) return this.log("subscribe: discconecting true"), this;
      let Q = { qos: 0 };
      Y === 5 && (Q.nl = !1, Q.rap = !1, Q.rh = 0), k = Object.assign(Object.assign({}, Q), k);
      let J = k.properties, W = [], ge = (le, Ee) => {
        if (Ee = Ee || k, !Object.prototype.hasOwnProperty.call(this._resubscribeTopics, le) || this._resubscribeTopics[le].qos < Ee.qos || X) {
          let G = { topic: le, qos: Ee.qos };
          Y === 5 && (G.nl = Ee.nl, G.rap = Ee.rap, G.rh = Ee.rh, G.properties = J), this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", G.topic, G.qos), W.push(G);
        }
      };
      if (Array.isArray(A) ? A.forEach((le) => {
        this.log("subscribe: array topic %s", le), ge(le);
      }) : Object.keys(A).forEach((le) => {
        this.log("subscribe: object topic %s, %o", le, A[le]), ge(le, A[le]);
      }), !W.length) return M(null, []), this;
      let de = () => {
        let le = this._nextId();
        if (le === null) return this.log("No messageId left"), !1;
        let Ee = { cmd: "subscribe", subscriptions: W, messageId: le };
        if (J && (Ee.properties = J), this.options.resubscribe) {
          this.log("subscribe :: resubscribe true");
          let G = [];
          W.forEach((pe) => {
            if (this.options.reconnectPeriod > 0) {
              let P = { qos: pe.qos };
              Y === 5 && (P.nl = pe.nl || !1, P.rap = pe.rap || !1, P.rh = pe.rh || 0, P.properties = pe.properties), this._resubscribeTopics[pe.topic] = P, G.push(pe.topic);
            }
          }), this.messageIdToTopic[Ee.messageId] = G;
        }
        return this.outgoing[Ee.messageId] = { volatile: !0, cb(G, pe) {
          if (!G) {
            let { granted: P } = pe;
            for (let ie = 0; ie < P.length; ie += 1) W[ie].qos = P[ie];
          }
          M(G, W, pe);
        } }, this.log("subscribe :: call _sendPacket"), this._sendPacket(Ee), !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !de()) && this._storeProcessingQueue.push({ invoke: de, callback: M }), this;
    }
    subscribeAsync(A, k) {
      return new Promise((M, Y) => {
        this.subscribe(A, k, (X, ae) => {
          X ? Y(X) : M(ae);
        });
      });
    }
    unsubscribe(A, k, M) {
      typeof A == "string" && (A = [A]), typeof k == "function" && (M = k), M = M || this.noop;
      let Y = c.validateTopics(A);
      if (Y !== null) return y(M, new Error(`Invalid topic ${Y}`)), this;
      if (this._checkDisconnecting(M)) return this;
      let X = () => {
        let ae = this._nextId();
        if (ae === null) return this.log("No messageId left"), !1;
        let R = { cmd: "unsubscribe", messageId: ae, unsubscriptions: [] };
        return typeof A == "string" ? R.unsubscriptions = [A] : Array.isArray(A) && (R.unsubscriptions = A), this.options.resubscribe && R.unsubscriptions.forEach((Q) => {
          delete this._resubscribeTopics[Q];
        }), typeof k == "object" && k.properties && (R.properties = k.properties), this.outgoing[R.messageId] = { volatile: !0, cb: M }, this.log("unsubscribe: call _sendPacket"), this._sendPacket(R), !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !X()) && this._storeProcessingQueue.push({ invoke: X, callback: M }), this;
    }
    unsubscribeAsync(A, k) {
      return new Promise((M, Y) => {
        this.unsubscribe(A, k, (X, ae) => {
          X ? Y(X) : M(ae);
        });
      });
    }
    end(A, k, M) {
      this.log("end :: (%s)", this.options.clientId), (A == null || typeof A != "boolean") && (M = M || k, k = A, A = !1), typeof k != "object" && (M = M || k, k = null), this.log("end :: cb? %s", !!M), (!M || typeof M != "function") && (M = this.noop);
      let Y = () => {
        this.log("end :: closeStores: closing incoming and outgoing stores"), this.disconnected = !0, this.incomingStore.close((ae) => {
          this.outgoingStore.close((R) => {
            if (this.log("end :: closeStores: emitting end"), this.emit("end"), M) {
              let Q = ae || R;
              this.log("end :: closeStores: invoking callback with args"), M(Q);
            }
          });
        }), this._deferredReconnect ? this._deferredReconnect() : (this.options.reconnectPeriod === 0 || this.options.manualConnect) && (this.disconnecting = !1);
      }, X = () => {
        this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, A), this._cleanUp(A, () => {
          this.log("end :: finish :: calling process.nextTick on closeStores"), (0, m.nextTick)(Y);
        }, k);
      };
      return this.disconnecting ? (M(), this) : (this._clearReconnect(), this.disconnecting = !0, !A && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, X, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId), X()), this);
    }
    endAsync(A, k) {
      return new Promise((M, Y) => {
        this.end(A, k, (X) => {
          X ? Y(X) : M();
        });
      });
    }
    removeOutgoingMessage(A) {
      if (this.outgoing[A]) {
        let { cb: k } = this.outgoing[A];
        this._removeOutgoingAndStoreMessage(A, () => {
          k(new Error("Message removed"));
        });
      }
      return this;
    }
    reconnect(A) {
      this.log("client reconnect");
      let k = () => {
        A ? (this.options.incomingStore = A.incomingStore, this.options.outgoingStore = A.outgoingStore) : (this.options.incomingStore = null, this.options.outgoingStore = null), this.incomingStore = this.options.incomingStore || new g.default(), this.outgoingStore = this.options.outgoingStore || new g.default(), this.disconnecting = !1, this.disconnected = !1, this._deferredReconnect = null, this._reconnect();
      };
      return this.disconnecting && !this.disconnected ? this._deferredReconnect = k : k(), this;
    }
    _flushVolatile() {
      this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(this.outgoing).forEach((A) => {
        this.outgoing[A].volatile && typeof this.outgoing[A].cb == "function" && (this.outgoing[A].cb(new Error("Connection closed")), delete this.outgoing[A]);
      }));
    }
    _flush() {
      this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing), Object.keys(this.outgoing).forEach((A) => {
        typeof this.outgoing[A].cb == "function" && (this.outgoing[A].cb(new Error("Connection closed")), delete this.outgoing[A]);
      }));
    }
    _removeTopicAliasAndRecoverTopicName(A) {
      let k;
      A.properties && (k = A.properties.topicAlias);
      let M = A.topic.toString();
      if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", k, M), M.length === 0) {
        if (typeof k > "u") return new Error("Unregistered Topic Alias");
        if (M = this.topicAliasSend.getTopicByAlias(k), typeof M > "u") return new Error("Unregistered Topic Alias");
        A.topic = M;
      }
      k && delete A.properties.topicAlias;
    }
    _checkDisconnecting(A) {
      return this.disconnecting && (A && A !== this.noop ? A(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting;
    }
    _reconnect() {
      this.log("_reconnect: emitting reconnect to client"), this.emit("reconnect"), this.connected ? (this.end(() => {
        this.connect();
      }), this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"), this.connect());
    }
    _setupReconnect() {
      !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"), this.emit("offline"), this.log("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = !0), this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod), this.reconnectTimer = setInterval(() => {
        this.log("reconnectTimer :: reconnect triggered!"), this._reconnect();
      }, this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...");
    }
    _clearReconnect() {
      this.log("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null);
    }
    _cleanUp(A, k, M = {}) {
      if (k && (this.log("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", k)), this.log("_cleanUp :: forced? %s", A), A) this.options.reconnectPeriod === 0 && this.options.clean && this._flush(), this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
      else {
        let Y = Object.assign({ cmd: "disconnect" }, M);
        this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket(Y, () => {
          this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), y(() => {
            this.stream.end(() => {
              this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId);
            });
          });
        });
      }
      !this.disconnecting && !this.reconnecting && (this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), this._destroyKeepaliveManager(), k && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", k), k());
    }
    _storeAndSend(A, k, M) {
      this.log("storeAndSend :: store packet with cmd %s to outgoingStore", A.cmd);
      let Y = A, X;
      if (Y.cmd === "publish" && (Y = (0, n.default)(A), X = this._removeTopicAliasAndRecoverTopicName(Y), X)) return k && k(X);
      this.outgoingStore.put(Y, (ae) => {
        if (ae) return k && k(ae);
        M(), this._writePacket(A, k);
      });
    }
    _applyTopicAlias(A) {
      if (this.options.protocolVersion === 5 && A.cmd === "publish") {
        let k;
        A.properties && (k = A.properties.topicAlias);
        let M = A.topic.toString();
        if (this.topicAliasSend) if (k) {
          if (M.length !== 0 && (this.log("applyTopicAlias :: register topic: %s - alias: %d", M, k), !this.topicAliasSend.put(M, k))) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", M, k), new Error("Sending Topic Alias out of range");
        } else M.length !== 0 && (this.options.autoAssignTopicAlias ? (k = this.topicAliasSend.getAliasByTopic(M), k ? (A.topic = "", A.properties = Object.assign(Object.assign({}, A.properties), { topicAlias: k }), this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", M, k)) : (k = this.topicAliasSend.getLruAlias(), this.topicAliasSend.put(M, k), A.properties = Object.assign(Object.assign({}, A.properties), { topicAlias: k }), this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", M, k))) : this.options.autoUseTopicAlias && (k = this.topicAliasSend.getAliasByTopic(M), k && (A.topic = "", A.properties = Object.assign(Object.assign({}, A.properties), { topicAlias: k }), this.log("applyTopicAlias :: auto use topic: %s - alias: %d", M, k))));
        else if (k) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", M, k), new Error("Sending Topic Alias out of range");
      }
    }
    _noop(A) {
      this.log("noop ::", A);
    }
    _writePacket(A, k) {
      this.log("_writePacket :: packet: %O", A), this.log("_writePacket :: emitting `packetsend`"), this.emit("packetsend", A), this.log("_writePacket :: writing to stream");
      let M = e.default.writeToStream(A, this.stream, this.options);
      this.log("_writePacket :: writeToStream result %s", M), !M && k && k !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."), this.stream.once("drain", k)) : k && (this.log("_writePacket :: invoking cb"), k());
    }
    _sendPacket(A, k, M, Y) {
      this.log("_sendPacket :: (%s) ::  start", this.options.clientId), M = M || this.noop, k = k || this.noop;
      let X = this._applyTopicAlias(A);
      if (X) {
        k(X);
        return;
      }
      if (!this.connected) {
        if (A.cmd === "auth") {
          this._writePacket(A, k);
          return;
        }
        this.log("_sendPacket :: client not connected. Storing packet offline."), this._storePacket(A, k, M);
        return;
      }
      if (Y) {
        this._writePacket(A, k);
        return;
      }
      switch (A.cmd) {
        case "publish":
          break;
        case "pubrel":
          this._storeAndSend(A, k, M);
          return;
        default:
          this._writePacket(A, k);
          return;
      }
      switch (A.qos) {
        case 2:
        case 1:
          this._storeAndSend(A, k, M);
          break;
        case 0:
        default:
          this._writePacket(A, k);
          break;
      }
      this.log("_sendPacket :: (%s) ::  end", this.options.clientId);
    }
    _storePacket(A, k, M) {
      this.log("_storePacket :: packet: %o", A), this.log("_storePacket :: cb? %s", !!k), M = M || this.noop;
      let Y = A;
      if (Y.cmd === "publish") {
        Y = (0, n.default)(A);
        let ae = this._removeTopicAliasAndRecoverTopicName(Y);
        if (ae) return k && k(ae);
      }
      let X = Y.qos || 0;
      X === 0 && this.queueQoSZero || Y.cmd !== "publish" ? this.queue.push({ packet: Y, cb: k }) : X > 0 ? (k = this.outgoing[Y.messageId] ? this.outgoing[Y.messageId].cb : null, this.outgoingStore.put(Y, (ae) => {
        if (ae) return k && k(ae);
        M();
      })) : k && k(new Error("No connection to broker"));
    }
    _setupKeepaliveManager() {
      this.log("_setupKeepaliveManager :: keepalive %d (seconds)", this.options.keepalive), !this.keepaliveManager && this.options.keepalive && (this.keepaliveManager = new E.default(this, this.options.timerVariant));
    }
    _destroyKeepaliveManager() {
      this.keepaliveManager && (this.log("_destroyKeepaliveManager :: destroying keepalive manager"), this.keepaliveManager.destroy(), this.keepaliveManager = null);
    }
    reschedulePing(A = !1) {
      this.keepaliveManager && this.options.keepalive && (A || this.options.reschedulePings) && this._reschedulePing();
    }
    _reschedulePing() {
      this.log("_reschedulePing :: rescheduling ping"), this.keepaliveManager.reschedule();
    }
    sendPing() {
      this.log("_sendPing :: sending pingreq"), this._sendPacket({ cmd: "pingreq" });
    }
    onKeepaliveTimeout() {
      this.emit("error", new Error("Keepalive timeout")), this.log("onKeepaliveTimeout :: calling _cleanUp with force true"), this._cleanUp(!0);
    }
    _resubscribe() {
      this.log("_resubscribe");
      let A = Object.keys(this._resubscribeTopics);
      if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && A.length > 0) if (this.options.resubscribe) if (this.options.protocolVersion === 5) {
        this.log("_resubscribe: protocolVersion 5");
        for (let k = 0; k < A.length; k++) {
          let M = {};
          M[A[k]] = this._resubscribeTopics[A[k]], M.resubscribe = !0, this.subscribe(M, { properties: M[A[k]].properties });
        }
      } else this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics);
      else this._resubscribeTopics = {};
      this._firstConnection = !1;
    }
    _onConnect(A) {
      if (this.disconnected) {
        this.emit("connect", A);
        return;
      }
      this.connackPacket = A, this.messageIdProvider.clear(), this._setupKeepaliveManager(), this.connected = !0;
      let k = () => {
        let M = this.outgoingStore.createStream(), Y = () => {
          M.destroy(), M = null, this._flushStoreProcessingQueue(), X();
        }, X = () => {
          this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {};
        };
        this.once("close", Y), M.on("error", (R) => {
          X(), this._flushStoreProcessingQueue(), this.removeListener("close", Y), this.emit("error", R);
        });
        let ae = () => {
          if (!M) return;
          let R = M.read(1), Q;
          if (!R) {
            M.once("readable", ae);
            return;
          }
          if (this._storeProcessing = !0, this._packetIdsDuringStoreProcessing[R.messageId]) {
            ae();
            return;
          }
          !this.disconnecting && !this.reconnectTimer ? (Q = this.outgoing[R.messageId] ? this.outgoing[R.messageId].cb : null, this.outgoing[R.messageId] = { volatile: !1, cb(J, W) {
            Q && Q(J, W), ae();
          } }, this._packetIdsDuringStoreProcessing[R.messageId] = !0, this.messageIdProvider.register(R.messageId) ? this._sendPacket(R, void 0, void 0, !0) : this.log("messageId: %d has already used.", R.messageId)) : M.destroy && M.destroy();
        };
        M.on("end", () => {
          let R = !0;
          for (let Q in this._packetIdsDuringStoreProcessing) if (!this._packetIdsDuringStoreProcessing[Q]) {
            R = !1;
            break;
          }
          this.removeListener("close", Y), R ? (X(), this._invokeAllStoreProcessingQueue(), this.emit("connect", A)) : k();
        }), ae();
      };
      k();
    }
    _invokeStoreProcessingQueue() {
      if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
        let A = this._storeProcessingQueue[0];
        if (A && A.invoke()) return this._storeProcessingQueue.shift(), !0;
      }
      return !1;
    }
    _invokeAllStoreProcessingQueue() {
      for (; this._invokeStoreProcessingQueue(); ) ;
    }
    _flushStoreProcessingQueue() {
      for (let A of this._storeProcessingQueue) A.cbStorePut && A.cbStorePut(new Error("Connection closed")), A.callback && A.callback(new Error("Connection closed"));
      this._storeProcessingQueue.splice(0);
    }
    _removeOutgoingAndStoreMessage(A, k) {
      delete this.outgoing[A], this.outgoingStore.del({ messageId: A }, (M, Y) => {
        k(M, Y), this.messageIdProvider.deallocate(A), this._invokeStoreProcessingQueue();
      });
    }
  };
  U.VERSION = m.MQTTJS_VERSION, s.default = U;
}), qa = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = Xo(), o = class {
    constructor() {
      this.numberAllocator = new u.NumberAllocator(1, 65535);
    }
    allocate() {
      return this.lastId = this.numberAllocator.alloc(), this.lastId;
    }
    getLastAllocated() {
      return this.lastId;
    }
    register(l) {
      return this.numberAllocator.use(l);
    }
    deallocate(l) {
      this.numberAllocator.free(l);
    }
    clear() {
      this.numberAllocator.clear();
    }
  };
  s.default = o;
});
function Ft(s) {
  throw new RangeError(ts[s]);
}
function Un(s, u) {
  let o = s.split("@"), l = "";
  o.length > 1 && (l = o[0] + "@", s = o[1]);
  let f = function(i, e) {
    let r = [], t = i.length;
    for (; t--; ) r[t] = e(i[t]);
    return r;
  }((s = s.replace(es, ".")).split("."), u).join(".");
  return l + f;
}
function jn(s) {
  let u = [], o = 0, l = s.length;
  for (; o < l; ) {
    let f = s.charCodeAt(o++);
    if (f >= 55296 && f <= 56319 && o < l) {
      let i = s.charCodeAt(o++);
      (64512 & i) == 56320 ? u.push(((1023 & f) << 10) + (1023 & i) + 65536) : (u.push(f), o--);
    } else u.push(f);
  }
  return u;
}
var Dn, Fn, es, ts, ct, fr, $r, qr, Hr, Vr, Mt, Ha = rt(() => {
  he(), fe(), ce(), Dn = /^xn--/, Fn = /[^\0-\x7E]/, es = /[\x2E\u3002\uFF0E\uFF61]/g, ts = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, ct = Math.floor, fr = String.fromCharCode, $r = function(s, u) {
    return s + 22 + 75 * (s < 26) - ((u != 0) << 5);
  }, qr = function(s, u, o) {
    let l = 0;
    for (s = o ? ct(s / 700) : s >> 1, s += ct(s / u); s > 455; l += 36) s = ct(s / 35);
    return ct(l + 36 * s / (s + 38));
  }, Hr = function(s) {
    let u = [], o = s.length, l = 0, f = 128, i = 72, e = s.lastIndexOf("-");
    e < 0 && (e = 0);
    for (let t = 0; t < e; ++t) s.charCodeAt(t) >= 128 && Ft("not-basic"), u.push(s.charCodeAt(t));
    for (let t = e > 0 ? e + 1 : 0; t < o; ) {
      let n = l;
      for (let d = 1, g = 36; ; g += 36) {
        t >= o && Ft("invalid-input");
        let b = (r = s.charCodeAt(t++)) - 48 < 10 ? r - 22 : r - 65 < 26 ? r - 65 : r - 97 < 26 ? r - 97 : 36;
        (b >= 36 || b > ct((2147483647 - l) / d)) && Ft("overflow"), l += b * d;
        let m = g <= i ? 1 : g >= i + 26 ? 26 : g - i;
        if (b < m) break;
        let _ = 36 - m;
        d > ct(2147483647 / _) && Ft("overflow"), d *= _;
      }
      let c = u.length + 1;
      i = qr(l - n, c, n == 0), ct(l / c) > 2147483647 - f && Ft("overflow"), f += ct(l / c), l %= c, u.splice(l++, 0, f);
    }
    var r;
    return String.fromCodePoint(...u);
  }, Vr = function(s) {
    let u = [], o = (s = jn(s)).length, l = 128, f = 0, i = 72;
    for (let t of s) t < 128 && u.push(fr(t));
    let e = u.length, r = e;
    for (e && u.push("-"); r < o; ) {
      let t = 2147483647;
      for (let c of s) c >= l && c < t && (t = c);
      let n = r + 1;
      t - l > ct((2147483647 - f) / n) && Ft("overflow"), f += (t - l) * n, l = t;
      for (let c of s) if (c < l && ++f > 2147483647 && Ft("overflow"), c == l) {
        let d = f;
        for (let g = 36; ; g += 36) {
          let b = g <= i ? 1 : g >= i + 26 ? 26 : g - i;
          if (d < b) break;
          let m = d - b, _ = 36 - b;
          u.push(fr($r(b + m % _, 0))), d = ct(m / _);
        }
        u.push(fr($r(d, 0))), i = qr(f, n, r == e), f = 0, ++r;
      }
      ++f, ++l;
    }
    return u.join("");
  }, Mt = { version: "2.1.0", ucs2: { decode: jn, encode: (s) => String.fromCodePoint(...s) }, decode: Hr, encode: Vr, toASCII: function(s) {
    return Un(s, function(u) {
      return Fn.test(u) ? "xn--" + Vr(u) : u;
    });
  }, toUnicode: function(s) {
    return Un(s, function(u) {
      return Dn.test(u) ? Hr(u.slice(4).toLowerCase()) : u;
    });
  } }, Mt.decode, Mt.encode, Mt.toASCII, Mt.toUnicode, Mt.ucs2, Mt.version;
});
function Va(s, u) {
  return Object.prototype.hasOwnProperty.call(s, u);
}
var Wn, Jt, $n, pt, Ga = rt(() => {
  he(), fe(), ce(), Wn = function(s, u, o, l) {
    u = u || "&", o = o || "=";
    var f = {};
    if (typeof s != "string" || s.length === 0) return f;
    var i = /\+/g;
    s = s.split(u);
    var e = 1e3;
    l && typeof l.maxKeys == "number" && (e = l.maxKeys);
    var r = s.length;
    e > 0 && r > e && (r = e);
    for (var t = 0; t < r; ++t) {
      var n, c, d, g, b = s[t].replace(i, "%20"), m = b.indexOf(o);
      m >= 0 ? (n = b.substr(0, m), c = b.substr(m + 1)) : (n = b, c = ""), d = decodeURIComponent(n), g = decodeURIComponent(c), Va(f, d) ? Array.isArray(f[d]) ? f[d].push(g) : f[d] = [f[d], g] : f[d] = g;
    }
    return f;
  }, Jt = function(s) {
    switch (typeof s) {
      case "string":
        return s;
      case "boolean":
        return s ? "true" : "false";
      case "number":
        return isFinite(s) ? s : "";
      default:
        return "";
    }
  }, $n = function(s, u, o, l) {
    return u = u || "&", o = o || "=", s === null && (s = void 0), typeof s == "object" ? Object.keys(s).map(function(f) {
      var i = encodeURIComponent(Jt(f)) + o;
      return Array.isArray(s[f]) ? s[f].map(function(e) {
        return i + encodeURIComponent(Jt(e));
      }).join(u) : i + encodeURIComponent(Jt(s[f]));
    }).join(u) : l ? encodeURIComponent(Jt(l)) + o + encodeURIComponent(Jt(s)) : "";
  }, pt = {}, pt.decode = pt.parse = Wn, pt.encode = pt.stringify = $n, pt.decode, pt.encode, pt.parse, pt.stringify;
});
function un() {
  throw new Error("setTimeout has not been defined");
}
function hn() {
  throw new Error("clearTimeout has not been defined");
}
function rs(s) {
  if (vt === setTimeout) return setTimeout(s, 0);
  if ((vt === un || !vt) && setTimeout) return vt = setTimeout, setTimeout(s, 0);
  try {
    return vt(s, 0);
  } catch {
    try {
      return vt.call(null, s, 0);
    } catch {
      return vt.call(this || Gt, s, 0);
    }
  }
}
function za() {
  zt && Ht && (zt = !1, Ht.length ? bt = Ht.concat(bt) : lr = -1, bt.length && is());
}
function is() {
  if (!zt) {
    var s = rs(za);
    zt = !0;
    for (var u = bt.length; u; ) {
      for (Ht = bt, bt = []; ++lr < u; ) Ht && Ht[lr].run();
      lr = -1, u = bt.length;
    }
    Ht = null, zt = !1, function(o) {
      if (Et === clearTimeout) return clearTimeout(o);
      if ((Et === hn || !Et) && clearTimeout) return Et = clearTimeout, clearTimeout(o);
      try {
        Et(o);
      } catch {
        try {
          return Et.call(null, o);
        } catch {
          return Et.call(this || Gt, o);
        }
      }
    }(s);
  }
}
function qn(s, u) {
  (this || Gt).fun = s, (this || Gt).array = u;
}
function yt() {
}
var Hn, vt, Et, Gt, ze, Ht, bt, zt, lr, He, Qa = rt(() => {
  he(), fe(), ce(), Gt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, ze = Hn = {}, function() {
    try {
      vt = typeof setTimeout == "function" ? setTimeout : un;
    } catch {
      vt = un;
    }
    try {
      Et = typeof clearTimeout == "function" ? clearTimeout : hn;
    } catch {
      Et = hn;
    }
  }(), bt = [], zt = !1, lr = -1, ze.nextTick = function(s) {
    var u = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var o = 1; o < arguments.length; o++) u[o - 1] = arguments[o];
    bt.push(new qn(s, u)), bt.length !== 1 || zt || rs(is);
  }, qn.prototype.run = function() {
    (this || Gt).fun.apply(null, (this || Gt).array);
  }, ze.title = "browser", ze.browser = !0, ze.env = {}, ze.argv = [], ze.version = "", ze.versions = {}, ze.on = yt, ze.addListener = yt, ze.once = yt, ze.off = yt, ze.removeListener = yt, ze.removeAllListeners = yt, ze.emit = yt, ze.prependListener = yt, ze.prependOnceListener = yt, ze.listeners = function(s) {
    return [];
  }, ze.binding = function(s) {
    throw new Error("process.binding is not supported");
  }, ze.cwd = function() {
    return "/";
  }, ze.chdir = function(s) {
    throw new Error("process.chdir is not supported");
  }, ze.umask = function() {
    return 0;
  }, He = Hn, He.addListener, He.argv, He.binding, He.browser, He.chdir, He.cwd, He.emit, He.env, He.listeners, He.nextTick, He.off, He.on, He.once, He.prependListener, He.prependOnceListener, He.removeAllListeners, He.removeListener, He.title, He.umask, He.version, He.versions;
});
function Ka() {
  if (cn) return Sr;
  cn = !0;
  var s = Sr = {}, u, o;
  function l() {
    throw new Error("setTimeout has not been defined");
  }
  function f() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? u = setTimeout : u = l;
    } catch {
      u = l;
    }
    try {
      typeof clearTimeout == "function" ? o = clearTimeout : o = f;
    } catch {
      o = f;
    }
  })();
  function i(_) {
    if (u === setTimeout) return setTimeout(_, 0);
    if ((u === l || !u) && setTimeout) return u = setTimeout, setTimeout(_, 0);
    try {
      return u(_, 0);
    } catch {
      try {
        return u.call(null, _, 0);
      } catch {
        return u.call(this || $t, _, 0);
      }
    }
  }
  function e(_) {
    if (o === clearTimeout) return clearTimeout(_);
    if ((o === f || !o) && clearTimeout) return o = clearTimeout, clearTimeout(_);
    try {
      return o(_);
    } catch {
      try {
        return o.call(null, _);
      } catch {
        return o.call(this || $t, _);
      }
    }
  }
  var r = [], t = !1, n, c = -1;
  function d() {
    !t || !n || (t = !1, n.length ? r = n.concat(r) : c = -1, r.length && g());
  }
  function g() {
    if (!t) {
      var _ = i(d);
      t = !0;
      for (var E = r.length; E; ) {
        for (n = r, r = []; ++c < E; ) n && n[c].run();
        c = -1, E = r.length;
      }
      n = null, t = !1, e(_);
    }
  }
  s.nextTick = function(_) {
    var E = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var I = 1; I < arguments.length; I++) E[I - 1] = arguments[I];
    r.push(new b(_, E)), r.length === 1 && !t && i(g);
  };
  function b(_, E) {
    (this || $t).fun = _, (this || $t).array = E;
  }
  b.prototype.run = function() {
    (this || $t).fun.apply(null, (this || $t).array);
  }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {};
  function m() {
  }
  return s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.prependListener = m, s.prependOnceListener = m, s.listeners = function(_) {
    return [];
  }, s.binding = function(_) {
    throw new Error("process.binding is not supported");
  }, s.cwd = function() {
    return "/";
  }, s.chdir = function(_) {
    throw new Error("process.chdir is not supported");
  }, s.umask = function() {
    return 0;
  }, Sr;
}
var Sr, cn, $t, $e, ns = rt(() => {
  he(), fe(), ce(), Sr = {}, cn = !1, $t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, $e = Ka(), $e.platform = "browser", $e.addListener, $e.argv, $e.binding, $e.browser, $e.chdir, $e.cwd, $e.emit, $e.env, $e.listeners, $e.nextTick, $e.off, $e.on, $e.once, $e.prependListener, $e.prependOnceListener, $e.removeAllListeners, $e.removeListener, $e.title, $e.umask, $e.version, $e.versions;
});
function Ya() {
  if (fn) return Ar;
  fn = !0;
  var s = $e;
  function u(i) {
    if (typeof i != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(i));
  }
  function o(i, e) {
    for (var r = "", t = 0, n = -1, c = 0, d, g = 0; g <= i.length; ++g) {
      if (g < i.length) d = i.charCodeAt(g);
      else {
        if (d === 47) break;
        d = 47;
      }
      if (d === 47) {
        if (!(n === g - 1 || c === 1)) if (n !== g - 1 && c === 2) {
          if (r.length < 2 || t !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
            if (r.length > 2) {
              var b = r.lastIndexOf("/");
              if (b !== r.length - 1) {
                b === -1 ? (r = "", t = 0) : (r = r.slice(0, b), t = r.length - 1 - r.lastIndexOf("/")), n = g, c = 0;
                continue;
              }
            } else if (r.length === 2 || r.length === 1) {
              r = "", t = 0, n = g, c = 0;
              continue;
            }
          }
          e && (r.length > 0 ? r += "/.." : r = "..", t = 2);
        } else r.length > 0 ? r += "/" + i.slice(n + 1, g) : r = i.slice(n + 1, g), t = g - n - 1;
        n = g, c = 0;
      } else d === 46 && c !== -1 ? ++c : c = -1;
    }
    return r;
  }
  function l(i, e) {
    var r = e.dir || e.root, t = e.base || (e.name || "") + (e.ext || "");
    return r ? r === e.root ? r + t : r + i + t : t;
  }
  var f = { resolve: function() {
    for (var i = "", e = !1, r, t = arguments.length - 1; t >= -1 && !e; t--) {
      var n;
      t >= 0 ? n = arguments[t] : (r === void 0 && (r = s.cwd()), n = r), u(n), n.length !== 0 && (i = n + "/" + i, e = n.charCodeAt(0) === 47);
    }
    return i = o(i, !e), e ? i.length > 0 ? "/" + i : "/" : i.length > 0 ? i : ".";
  }, normalize: function(i) {
    if (u(i), i.length === 0) return ".";
    var e = i.charCodeAt(0) === 47, r = i.charCodeAt(i.length - 1) === 47;
    return i = o(i, !e), i.length === 0 && !e && (i = "."), i.length > 0 && r && (i += "/"), e ? "/" + i : i;
  }, isAbsolute: function(i) {
    return u(i), i.length > 0 && i.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return ".";
    for (var i, e = 0; e < arguments.length; ++e) {
      var r = arguments[e];
      u(r), r.length > 0 && (i === void 0 ? i = r : i += "/" + r);
    }
    return i === void 0 ? "." : f.normalize(i);
  }, relative: function(i, e) {
    if (u(i), u(e), i === e || (i = f.resolve(i), e = f.resolve(e), i === e)) return "";
    for (var r = 1; r < i.length && i.charCodeAt(r) === 47; ++r) ;
    for (var t = i.length, n = t - r, c = 1; c < e.length && e.charCodeAt(c) === 47; ++c) ;
    for (var d = e.length, g = d - c, b = n < g ? n : g, m = -1, _ = 0; _ <= b; ++_) {
      if (_ === b) {
        if (g > b) {
          if (e.charCodeAt(c + _) === 47) return e.slice(c + _ + 1);
          if (_ === 0) return e.slice(c + _);
        } else n > b && (i.charCodeAt(r + _) === 47 ? m = _ : _ === 0 && (m = 0));
        break;
      }
      var E = i.charCodeAt(r + _), I = e.charCodeAt(c + _);
      if (E !== I) break;
      E === 47 && (m = _);
    }
    var y = "";
    for (_ = r + m + 1; _ <= t; ++_) (_ === t || i.charCodeAt(_) === 47) && (y.length === 0 ? y += ".." : y += "/..");
    return y.length > 0 ? y + e.slice(c + m) : (c += m, e.charCodeAt(c) === 47 && ++c, e.slice(c));
  }, _makeLong: function(i) {
    return i;
  }, dirname: function(i) {
    if (u(i), i.length === 0) return ".";
    for (var e = i.charCodeAt(0), r = e === 47, t = -1, n = !0, c = i.length - 1; c >= 1; --c) if (e = i.charCodeAt(c), e === 47) {
      if (!n) {
        t = c;
        break;
      }
    } else n = !1;
    return t === -1 ? r ? "/" : "." : r && t === 1 ? "//" : i.slice(0, t);
  }, basename: function(i, e) {
    if (e !== void 0 && typeof e != "string") throw new TypeError('"ext" argument must be a string');
    u(i);
    var r = 0, t = -1, n = !0, c;
    if (e !== void 0 && e.length > 0 && e.length <= i.length) {
      if (e.length === i.length && e === i) return "";
      var d = e.length - 1, g = -1;
      for (c = i.length - 1; c >= 0; --c) {
        var b = i.charCodeAt(c);
        if (b === 47) {
          if (!n) {
            r = c + 1;
            break;
          }
        } else g === -1 && (n = !1, g = c + 1), d >= 0 && (b === e.charCodeAt(d) ? --d === -1 && (t = c) : (d = -1, t = g));
      }
      return r === t ? t = g : t === -1 && (t = i.length), i.slice(r, t);
    } else {
      for (c = i.length - 1; c >= 0; --c) if (i.charCodeAt(c) === 47) {
        if (!n) {
          r = c + 1;
          break;
        }
      } else t === -1 && (n = !1, t = c + 1);
      return t === -1 ? "" : i.slice(r, t);
    }
  }, extname: function(i) {
    u(i);
    for (var e = -1, r = 0, t = -1, n = !0, c = 0, d = i.length - 1; d >= 0; --d) {
      var g = i.charCodeAt(d);
      if (g === 47) {
        if (!n) {
          r = d + 1;
          break;
        }
        continue;
      }
      t === -1 && (n = !1, t = d + 1), g === 46 ? e === -1 ? e = d : c !== 1 && (c = 1) : e !== -1 && (c = -1);
    }
    return e === -1 || t === -1 || c === 0 || c === 1 && e === t - 1 && e === r + 1 ? "" : i.slice(e, t);
  }, format: function(i) {
    if (i === null || typeof i != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof i);
    return l("/", i);
  }, parse: function(i) {
    u(i);
    var e = { root: "", dir: "", base: "", ext: "", name: "" };
    if (i.length === 0) return e;
    var r = i.charCodeAt(0), t = r === 47, n;
    t ? (e.root = "/", n = 1) : n = 0;
    for (var c = -1, d = 0, g = -1, b = !0, m = i.length - 1, _ = 0; m >= n; --m) {
      if (r = i.charCodeAt(m), r === 47) {
        if (!b) {
          d = m + 1;
          break;
        }
        continue;
      }
      g === -1 && (b = !1, g = m + 1), r === 46 ? c === -1 ? c = m : _ !== 1 && (_ = 1) : c !== -1 && (_ = -1);
    }
    return c === -1 || g === -1 || _ === 0 || _ === 1 && c === g - 1 && c === d + 1 ? g !== -1 && (d === 0 && t ? e.base = e.name = i.slice(1, g) : e.base = e.name = i.slice(d, g)) : (d === 0 && t ? (e.name = i.slice(1, c), e.base = i.slice(1, g)) : (e.name = i.slice(d, c), e.base = i.slice(d, g)), e.ext = i.slice(c, g)), d > 0 ? e.dir = i.slice(0, d - 1) : t && (e.dir = "/"), e;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  return f.posix = f, Ar = f, Ar;
}
var Ar, fn, dn, Ja = rt(() => {
  he(), fe(), ce(), ns(), Ar = {}, fn = !1, dn = Ya();
}), os = {};
Zt(os, { URL: () => Ss, Url: () => ys, default: () => Le, fileURLToPath: () => ss, format: () => ws, parse: () => Es, pathToFileURL: () => as, resolve: () => _s, resolveObject: () => vs });
function ht() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
function ir(s, u, o) {
  if (s && ft.isObject(s) && s instanceof ht) return s;
  var l = new ht();
  return l.parse(s, u, o), l;
}
function Xa() {
  if (pn) return Ir;
  pn = !0;
  var s = He;
  function u(i) {
    if (typeof i != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(i));
  }
  function o(i, e) {
    for (var r = "", t = 0, n = -1, c = 0, d, g = 0; g <= i.length; ++g) {
      if (g < i.length) d = i.charCodeAt(g);
      else {
        if (d === 47) break;
        d = 47;
      }
      if (d === 47) {
        if (!(n === g - 1 || c === 1)) if (n !== g - 1 && c === 2) {
          if (r.length < 2 || t !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
            if (r.length > 2) {
              var b = r.lastIndexOf("/");
              if (b !== r.length - 1) {
                b === -1 ? (r = "", t = 0) : (r = r.slice(0, b), t = r.length - 1 - r.lastIndexOf("/")), n = g, c = 0;
                continue;
              }
            } else if (r.length === 2 || r.length === 1) {
              r = "", t = 0, n = g, c = 0;
              continue;
            }
          }
          e && (r.length > 0 ? r += "/.." : r = "..", t = 2);
        } else r.length > 0 ? r += "/" + i.slice(n + 1, g) : r = i.slice(n + 1, g), t = g - n - 1;
        n = g, c = 0;
      } else d === 46 && c !== -1 ? ++c : c = -1;
    }
    return r;
  }
  function l(i, e) {
    var r = e.dir || e.root, t = e.base || (e.name || "") + (e.ext || "");
    return r ? r === e.root ? r + t : r + i + t : t;
  }
  var f = { resolve: function() {
    for (var i = "", e = !1, r, t = arguments.length - 1; t >= -1 && !e; t--) {
      var n;
      t >= 0 ? n = arguments[t] : (r === void 0 && (r = s.cwd()), n = r), u(n), n.length !== 0 && (i = n + "/" + i, e = n.charCodeAt(0) === 47);
    }
    return i = o(i, !e), e ? i.length > 0 ? "/" + i : "/" : i.length > 0 ? i : ".";
  }, normalize: function(i) {
    if (u(i), i.length === 0) return ".";
    var e = i.charCodeAt(0) === 47, r = i.charCodeAt(i.length - 1) === 47;
    return i = o(i, !e), i.length === 0 && !e && (i = "."), i.length > 0 && r && (i += "/"), e ? "/" + i : i;
  }, isAbsolute: function(i) {
    return u(i), i.length > 0 && i.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return ".";
    for (var i, e = 0; e < arguments.length; ++e) {
      var r = arguments[e];
      u(r), r.length > 0 && (i === void 0 ? i = r : i += "/" + r);
    }
    return i === void 0 ? "." : f.normalize(i);
  }, relative: function(i, e) {
    if (u(i), u(e), i === e || (i = f.resolve(i), e = f.resolve(e), i === e)) return "";
    for (var r = 1; r < i.length && i.charCodeAt(r) === 47; ++r) ;
    for (var t = i.length, n = t - r, c = 1; c < e.length && e.charCodeAt(c) === 47; ++c) ;
    for (var d = e.length, g = d - c, b = n < g ? n : g, m = -1, _ = 0; _ <= b; ++_) {
      if (_ === b) {
        if (g > b) {
          if (e.charCodeAt(c + _) === 47) return e.slice(c + _ + 1);
          if (_ === 0) return e.slice(c + _);
        } else n > b && (i.charCodeAt(r + _) === 47 ? m = _ : _ === 0 && (m = 0));
        break;
      }
      var E = i.charCodeAt(r + _), I = e.charCodeAt(c + _);
      if (E !== I) break;
      E === 47 && (m = _);
    }
    var y = "";
    for (_ = r + m + 1; _ <= t; ++_) (_ === t || i.charCodeAt(_) === 47) && (y.length === 0 ? y += ".." : y += "/..");
    return y.length > 0 ? y + e.slice(c + m) : (c += m, e.charCodeAt(c) === 47 && ++c, e.slice(c));
  }, _makeLong: function(i) {
    return i;
  }, dirname: function(i) {
    if (u(i), i.length === 0) return ".";
    for (var e = i.charCodeAt(0), r = e === 47, t = -1, n = !0, c = i.length - 1; c >= 1; --c) if (e = i.charCodeAt(c), e === 47) {
      if (!n) {
        t = c;
        break;
      }
    } else n = !1;
    return t === -1 ? r ? "/" : "." : r && t === 1 ? "//" : i.slice(0, t);
  }, basename: function(i, e) {
    if (e !== void 0 && typeof e != "string") throw new TypeError('"ext" argument must be a string');
    u(i);
    var r = 0, t = -1, n = !0, c;
    if (e !== void 0 && e.length > 0 && e.length <= i.length) {
      if (e.length === i.length && e === i) return "";
      var d = e.length - 1, g = -1;
      for (c = i.length - 1; c >= 0; --c) {
        var b = i.charCodeAt(c);
        if (b === 47) {
          if (!n) {
            r = c + 1;
            break;
          }
        } else g === -1 && (n = !1, g = c + 1), d >= 0 && (b === e.charCodeAt(d) ? --d === -1 && (t = c) : (d = -1, t = g));
      }
      return r === t ? t = g : t === -1 && (t = i.length), i.slice(r, t);
    } else {
      for (c = i.length - 1; c >= 0; --c) if (i.charCodeAt(c) === 47) {
        if (!n) {
          r = c + 1;
          break;
        }
      } else t === -1 && (n = !1, t = c + 1);
      return t === -1 ? "" : i.slice(r, t);
    }
  }, extname: function(i) {
    u(i);
    for (var e = -1, r = 0, t = -1, n = !0, c = 0, d = i.length - 1; d >= 0; --d) {
      var g = i.charCodeAt(d);
      if (g === 47) {
        if (!n) {
          r = d + 1;
          break;
        }
        continue;
      }
      t === -1 && (n = !1, t = d + 1), g === 46 ? e === -1 ? e = d : c !== 1 && (c = 1) : e !== -1 && (c = -1);
    }
    return e === -1 || t === -1 || c === 0 || c === 1 && e === t - 1 && e === r + 1 ? "" : i.slice(e, t);
  }, format: function(i) {
    if (i === null || typeof i != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof i);
    return l("/", i);
  }, parse: function(i) {
    u(i);
    var e = { root: "", dir: "", base: "", ext: "", name: "" };
    if (i.length === 0) return e;
    var r = i.charCodeAt(0), t = r === 47, n;
    t ? (e.root = "/", n = 1) : n = 0;
    for (var c = -1, d = 0, g = -1, b = !0, m = i.length - 1, _ = 0; m >= n; --m) {
      if (r = i.charCodeAt(m), r === 47) {
        if (!b) {
          d = m + 1;
          break;
        }
        continue;
      }
      g === -1 && (b = !1, g = m + 1), r === 46 ? c === -1 ? c = m : _ !== 1 && (_ = 1) : c !== -1 && (_ = -1);
    }
    return c === -1 || g === -1 || _ === 0 || _ === 1 && c === g - 1 && c === d + 1 ? g !== -1 && (d === 0 && t ? e.base = e.name = i.slice(1, g) : e.base = e.name = i.slice(d, g)) : (d === 0 && t ? (e.name = i.slice(1, c), e.base = i.slice(1, g)) : (e.name = i.slice(d, c), e.base = i.slice(d, g)), e.ext = i.slice(c, g)), d > 0 ? e.dir = i.slice(0, d - 1) : t && (e.dir = "/"), e;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  return f.posix = f, Ir = f, Ir;
}
function Za(s) {
  if (typeof s == "string") s = new URL(s);
  else if (!(s instanceof URL)) throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
  if (s.protocol !== "file:") throw new Deno.errors.InvalidData("invalid url scheme");
  return kr ? el(s) : tl(s);
}
function el(s) {
  let u = s.hostname, o = s.pathname;
  for (let l = 0; l < o.length; l++) if (o[l] === "%") {
    let f = o.codePointAt(l + 2) || 32;
    if (o[l + 1] === "2" && f === 102 || o[l + 1] === "5" && f === 99) throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
  }
  if (o = o.replace(fs, "\\"), o = decodeURIComponent(o), u !== "") return `\\\\${u}${o}`;
  {
    let l = o.codePointAt(1) | 32, f = o[2];
    if (l < hs || l > cs || f !== ":") throw new Deno.errors.InvalidData("file url path must be absolute");
    return o.slice(1);
  }
}
function tl(s) {
  if (s.hostname !== "") throw new Deno.errors.InvalidData("invalid file url hostname");
  let u = s.pathname;
  for (let o = 0; o < u.length; o++) if (u[o] === "%") {
    let l = u.codePointAt(o + 2) || 32;
    if (u[o + 1] === "2" && l === 102) throw new Deno.errors.InvalidData("must not include encoded / characters");
  }
  return decodeURIComponent(u);
}
function rl(s) {
  let u = gn.resolve(s), o = s.charCodeAt(s.length - 1);
  (o === us || kr && o === ls) && u[u.length - 1] !== gn.sep && (u += "/");
  let l = new URL("file://");
  return u.includes("%") && (u = u.replace(ds, "%25")), !kr && u.includes("\\") && (u = u.replace(ps, "%5C")), u.includes(`
`) && (u = u.replace(gs, "%0A")), u.includes("\r") && (u = u.replace(bs, "%0D")), u.includes("	") && (u = u.replace(ms, "%09")), l.pathname = u, l;
}
function ss(s) {
  if (typeof s == "string") s = new URL(s);
  else if (!(s instanceof URL)) throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
  if (s.protocol !== "file:") throw new Deno.errors.InvalidData("invalid url scheme");
  return Cr ? il(s) : nl(s);
}
function il(s) {
  let u = s.hostname, o = s.pathname;
  for (let l = 0; l < o.length; l++) if (o[l] === "%") {
    let f = o.codePointAt(l + 2) || 32;
    if (o[l + 1] === "2" && f === 102 || o[l + 1] === "5" && f === 99) throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
  }
  if (o = o.replace(Cs, "\\"), o = decodeURIComponent(o), u !== "") return `\\\\${u}${o}`;
  {
    let l = o.codePointAt(1) | 32, f = o[2];
    if (l < Ts || l > ks || f !== ":") throw new Deno.errors.InvalidData("file url path must be absolute");
    return o.slice(1);
  }
}
function nl(s) {
  if (s.hostname !== "") throw new Deno.errors.InvalidData("invalid file url hostname");
  let u = s.pathname;
  for (let o = 0; o < u.length; o++) if (u[o] === "%") {
    let l = u.codePointAt(o + 2) || 32;
    if (u[o + 1] === "2" && l === 102) throw new Deno.errors.InvalidData("must not include encoded / characters");
  }
  return decodeURIComponent(u);
}
function as(s) {
  let u = dn.resolve(s), o = s.charCodeAt(s.length - 1);
  (o === Is || Cr && o === As) && u[u.length - 1] !== dn.sep && (u += "/");
  let l = new URL("file://");
  return u.includes("%") && (u = u.replace(Os, "%25")), !Cr && u.includes("\\") && (u = u.replace(Rs, "%5C")), u.includes(`
`) && (u = u.replace(Ps, "%0A")), u.includes("\r") && (u = u.replace(xs, "%0D")), u.includes("	") && (u = u.replace(Bs, "%09")), l.pathname = u, l;
}
var Le, Vn, ft, Gn, zn, Qn, Kn, dr, Gr, zr, Qr, Yn, Jn, pr, Wt, gr, Ir, pn, gn, Xn, ls, us, hs, cs, kr, fs, ds, ps, gs, bs, ms, Zn, ys, ws, _s, vs, Es, Ss, As, Is, Ts, ks, Cr, Cs, Os, Rs, Ps, xs, Bs, ol = rt(() => {
  he(), fe(), ce(), Ha(), Ga(), Qa(), Ja(), ns(), Le = {}, Vn = Mt, ft = { isString: function(s) {
    return typeof s == "string";
  }, isObject: function(s) {
    return typeof s == "object" && s !== null;
  }, isNull: function(s) {
    return s === null;
  }, isNullOrUndefined: function(s) {
    return s == null;
  } }, Le.parse = ir, Le.resolve = function(s, u) {
    return ir(s, !1, !0).resolve(u);
  }, Le.resolveObject = function(s, u) {
    return s ? ir(s, !1, !0).resolveObject(u) : u;
  }, Le.format = function(s) {
    return ft.isString(s) && (s = ir(s)), s instanceof ht ? s.format() : ht.prototype.format.call(s);
  }, Le.Url = ht, Gn = /^([a-z0-9.+-]+:)/i, zn = /:[0-9]*$/, Qn = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Kn = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", `
`, "	"]), dr = ["'"].concat(Kn), Gr = ["%", "/", "?", ";", "#"].concat(dr), zr = ["/", "?", "#"], Qr = /^[+a-z0-9A-Z_-]{0,63}$/, Yn = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Jn = { javascript: !0, "javascript:": !0 }, pr = { javascript: !0, "javascript:": !0 }, Wt = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, gr = pt, ht.prototype.parse = function(s, u, o) {
    if (!ft.isString(s)) throw new TypeError("Parameter 'url' must be a string, not " + typeof s);
    var l = s.indexOf("?"), f = l !== -1 && l < s.indexOf("#") ? "?" : "#", i = s.split(f);
    i[0] = i[0].replace(/\\/g, "/");
    var e = s = i.join(f);
    if (e = e.trim(), !o && s.split("#").length === 1) {
      var r = Qn.exec(e);
      if (r) return this.path = e, this.href = e, this.pathname = r[1], r[2] ? (this.search = r[2], this.query = u ? gr.parse(this.search.substr(1)) : this.search.substr(1)) : u && (this.search = "", this.query = {}), this;
    }
    var t = Gn.exec(e);
    if (t) {
      var n = (t = t[0]).toLowerCase();
      this.protocol = n, e = e.substr(t.length);
    }
    if (o || t || e.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var c = e.substr(0, 2) === "//";
      !c || t && pr[t] || (e = e.substr(2), this.slashes = !0);
    }
    if (!pr[t] && (c || t && !Wt[t])) {
      for (var d, g, b = -1, m = 0; m < zr.length; m++) (_ = e.indexOf(zr[m])) !== -1 && (b === -1 || _ < b) && (b = _);
      for ((g = b === -1 ? e.lastIndexOf("@") : e.lastIndexOf("@", b)) !== -1 && (d = e.slice(0, g), e = e.slice(g + 1), this.auth = decodeURIComponent(d)), b = -1, m = 0; m < Gr.length; m++) {
        var _;
        (_ = e.indexOf(Gr[m])) !== -1 && (b === -1 || _ < b) && (b = _);
      }
      b === -1 && (b = e.length), this.host = e.slice(0, b), e = e.slice(b), this.parseHost(), this.hostname = this.hostname || "";
      var E = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!E) for (var I = this.hostname.split(/\./), y = (m = 0, I.length); m < y; m++) {
        var v = I[m];
        if (v && !v.match(Qr)) {
          for (var U = "", B = 0, A = v.length; B < A; B++) v.charCodeAt(B) > 127 ? U += "x" : U += v[B];
          if (!U.match(Qr)) {
            var k = I.slice(0, m), M = I.slice(m + 1), Y = v.match(Yn);
            Y && (k.push(Y[1]), M.unshift(Y[2])), M.length && (e = "/" + M.join(".") + e), this.hostname = k.join(".");
            break;
          }
        }
      }
      this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), E || (this.hostname = Vn.toASCII(this.hostname));
      var X = this.port ? ":" + this.port : "", ae = this.hostname || "";
      this.host = ae + X, this.href += this.host, E && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), e[0] !== "/" && (e = "/" + e));
    }
    if (!Jn[n]) for (m = 0, y = dr.length; m < y; m++) {
      var R = dr[m];
      if (e.indexOf(R) !== -1) {
        var Q = encodeURIComponent(R);
        Q === R && (Q = escape(R)), e = e.split(R).join(Q);
      }
    }
    var J = e.indexOf("#");
    J !== -1 && (this.hash = e.substr(J), e = e.slice(0, J));
    var W = e.indexOf("?");
    if (W !== -1 ? (this.search = e.substr(W), this.query = e.substr(W + 1), u && (this.query = gr.parse(this.query)), e = e.slice(0, W)) : u && (this.search = "", this.query = {}), e && (this.pathname = e), Wt[n] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      X = this.pathname || "";
      var ge = this.search || "";
      this.path = X + ge;
    }
    return this.href = this.format(), this;
  }, ht.prototype.format = function() {
    var s = this.auth || "";
    s && (s = (s = encodeURIComponent(s)).replace(/%3A/i, ":"), s += "@");
    var u = this.protocol || "", o = this.pathname || "", l = this.hash || "", f = !1, i = "";
    this.host ? f = s + this.host : this.hostname && (f = s + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (f += ":" + this.port)), this.query && ft.isObject(this.query) && Object.keys(this.query).length && (i = gr.stringify(this.query));
    var e = this.search || i && "?" + i || "";
    return u && u.substr(-1) !== ":" && (u += ":"), this.slashes || (!u || Wt[u]) && f !== !1 ? (f = "//" + (f || ""), o && o.charAt(0) !== "/" && (o = "/" + o)) : f || (f = ""), l && l.charAt(0) !== "#" && (l = "#" + l), e && e.charAt(0) !== "?" && (e = "?" + e), u + f + (o = o.replace(/[?#]/g, function(r) {
      return encodeURIComponent(r);
    })) + (e = e.replace("#", "%23")) + l;
  }, ht.prototype.resolve = function(s) {
    return this.resolveObject(ir(s, !1, !0)).format();
  }, ht.prototype.resolveObject = function(s) {
    if (ft.isString(s)) {
      var u = new ht();
      u.parse(s, !1, !0), s = u;
    }
    for (var o = new ht(), l = Object.keys(this), f = 0; f < l.length; f++) {
      var i = l[f];
      o[i] = this[i];
    }
    if (o.hash = s.hash, s.href === "") return o.href = o.format(), o;
    if (s.slashes && !s.protocol) {
      for (var e = Object.keys(s), r = 0; r < e.length; r++) {
        var t = e[r];
        t !== "protocol" && (o[t] = s[t]);
      }
      return Wt[o.protocol] && o.hostname && !o.pathname && (o.path = o.pathname = "/"), o.href = o.format(), o;
    }
    if (s.protocol && s.protocol !== o.protocol) {
      if (!Wt[s.protocol]) {
        for (var n = Object.keys(s), c = 0; c < n.length; c++) {
          var d = n[c];
          o[d] = s[d];
        }
        return o.href = o.format(), o;
      }
      if (o.protocol = s.protocol, s.host || pr[s.protocol]) o.pathname = s.pathname;
      else {
        for (var g = (s.pathname || "").split("/"); g.length && !(s.host = g.shift()); ) ;
        s.host || (s.host = ""), s.hostname || (s.hostname = ""), g[0] !== "" && g.unshift(""), g.length < 2 && g.unshift(""), o.pathname = g.join("/");
      }
      if (o.search = s.search, o.query = s.query, o.host = s.host || "", o.auth = s.auth, o.hostname = s.hostname || s.host, o.port = s.port, o.pathname || o.search) {
        var b = o.pathname || "", m = o.search || "";
        o.path = b + m;
      }
      return o.slashes = o.slashes || s.slashes, o.href = o.format(), o;
    }
    var _ = o.pathname && o.pathname.charAt(0) === "/", E = s.host || s.pathname && s.pathname.charAt(0) === "/", I = E || _ || o.host && s.pathname, y = I, v = o.pathname && o.pathname.split("/") || [], U = (g = s.pathname && s.pathname.split("/") || [], o.protocol && !Wt[o.protocol]);
    if (U && (o.hostname = "", o.port = null, o.host && (v[0] === "" ? v[0] = o.host : v.unshift(o.host)), o.host = "", s.protocol && (s.hostname = null, s.port = null, s.host && (g[0] === "" ? g[0] = s.host : g.unshift(s.host)), s.host = null), I = I && (g[0] === "" || v[0] === "")), E) o.host = s.host || s.host === "" ? s.host : o.host, o.hostname = s.hostname || s.hostname === "" ? s.hostname : o.hostname, o.search = s.search, o.query = s.query, v = g;
    else if (g.length) v || (v = []), v.pop(), v = v.concat(g), o.search = s.search, o.query = s.query;
    else if (!ft.isNullOrUndefined(s.search)) return U && (o.hostname = o.host = v.shift(), (Y = !!(o.host && o.host.indexOf("@") > 0) && o.host.split("@")) && (o.auth = Y.shift(), o.host = o.hostname = Y.shift())), o.search = s.search, o.query = s.query, ft.isNull(o.pathname) && ft.isNull(o.search) || (o.path = (o.pathname ? o.pathname : "") + (o.search ? o.search : "")), o.href = o.format(), o;
    if (!v.length) return o.pathname = null, o.search ? o.path = "/" + o.search : o.path = null, o.href = o.format(), o;
    for (var B = v.slice(-1)[0], A = (o.host || s.host || v.length > 1) && (B === "." || B === "..") || B === "", k = 0, M = v.length; M >= 0; M--) (B = v[M]) === "." ? v.splice(M, 1) : B === ".." ? (v.splice(M, 1), k++) : k && (v.splice(M, 1), k--);
    if (!I && !y) for (; k--; k) v.unshift("..");
    !I || v[0] === "" || v[0] && v[0].charAt(0) === "/" || v.unshift(""), A && v.join("/").substr(-1) !== "/" && v.push("");
    var Y, X = v[0] === "" || v[0] && v[0].charAt(0) === "/";
    return U && (o.hostname = o.host = X ? "" : v.length ? v.shift() : "", (Y = !!(o.host && o.host.indexOf("@") > 0) && o.host.split("@")) && (o.auth = Y.shift(), o.host = o.hostname = Y.shift())), (I = I || o.host && v.length) && !X && v.unshift(""), v.length ? o.pathname = v.join("/") : (o.pathname = null, o.path = null), ft.isNull(o.pathname) && ft.isNull(o.search) || (o.path = (o.pathname ? o.pathname : "") + (o.search ? o.search : "")), o.auth = s.auth || o.auth, o.slashes = o.slashes || s.slashes, o.href = o.format(), o;
  }, ht.prototype.parseHost = function() {
    var s = this.host, u = zn.exec(s);
    u && ((u = u[0]) !== ":" && (this.port = u.substr(1)), s = s.substr(0, s.length - u.length)), s && (this.hostname = s);
  }, Le.Url, Le.format, Le.resolve, Le.resolveObject, Ir = {}, pn = !1, gn = Xa(), Xn = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0, Le.URL = typeof URL < "u" ? URL : null, Le.pathToFileURL = rl, Le.fileURLToPath = Za, Le.Url, Le.format, Le.resolve, Le.resolveObject, Le.URL, ls = 92, us = 47, hs = 97, cs = 122, kr = Xn === "win32", fs = /\//g, ds = /%/g, ps = /\\/g, gs = /\n/g, bs = /\r/g, ms = /\t/g, Zn = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0, Le.URL = typeof URL < "u" ? URL : null, Le.pathToFileURL = as, Le.fileURLToPath = ss, ys = Le.Url, ws = Le.format, _s = Le.resolve, vs = Le.resolveObject, Es = Le.parse, Ss = Le.URL, As = 92, Is = 47, Ts = 97, ks = 122, Cr = Zn === "win32", Cs = /\//g, Os = /%/g, Rs = /\\/g, Ps = /\n/g, xs = /\r/g, Bs = /\t/g;
}), sl = be((s, u) => {
  he(), fe(), ce(), u.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
  };
}), An = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 }), s.BufferedDuplex = void 0, s.writev = l;
  var u = Yt(), o = (Je(), je(Ye));
  function l(i, e) {
    let r = new Array(i.length);
    for (let t = 0; t < i.length; t++) typeof i[t].chunk == "string" ? r[t] = o.Buffer.from(i[t].chunk, "utf8") : r[t] = i[t].chunk;
    this._write(o.Buffer.concat(r), "binary", e);
  }
  var f = class extends u.Duplex {
    constructor(i, e, r) {
      super({ objectMode: !0 }), this.proxy = e, this.socket = r, this.writeQueue = [], i.objectMode || (this._writev = l.bind(this)), this.isSocketOpen = !1, this.proxy.on("data", (t) => {
        !this.destroyed && this.readable && this.push(t);
      });
    }
    _read(i) {
      this.proxy.read(i);
    }
    _write(i, e, r) {
      this.isSocketOpen ? this.writeToProxy(i, e, r) : this.writeQueue.push({ chunk: i, encoding: e, cb: r });
    }
    _final(i) {
      this.writeQueue = [], this.proxy.end(i);
    }
    _destroy(i, e) {
      this.writeQueue = [], this.proxy.destroy(), e(i);
    }
    socketReady() {
      this.emit("connect"), this.isSocketOpen = !0, this.processWriteQueue();
    }
    writeToProxy(i, e, r) {
      this.proxy.write(i, e) === !1 ? this.proxy.once("drain", r) : r();
    }
    processWriteQueue() {
      for (; this.writeQueue.length > 0; ) {
        let { chunk: i, encoding: e, cb: r } = this.writeQueue.shift();
        this.writeToProxy(i, e, r);
      }
    }
  };
  s.BufferedDuplex = f;
}), br = be((s) => {
  he(), fe(), ce();
  var u = s && s.__importDefault || function(I) {
    return I && I.__esModule ? I : { default: I };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.streamBuilder = s.browserStreamBuilder = void 0;
  var o = (Je(), je(Ye)), l = u(sl()), f = u(It()), i = Yt(), e = u(Br()), r = An(), t = (0, f.default)("mqttjs:ws"), n = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];
  function c(I, y) {
    let v = `${I.protocol}://${I.hostname}:${I.port}${I.path}`;
    return typeof I.transformWsUrl == "function" && (v = I.transformWsUrl(v, I, y)), v;
  }
  function d(I) {
    let y = I;
    return I.port || (I.protocol === "wss" ? y.port = 443 : y.port = 80), I.path || (y.path = "/"), I.wsOptions || (y.wsOptions = {}), !e.default && !I.forceNativeWebSocket && I.protocol === "wss" && n.forEach((v) => {
      Object.prototype.hasOwnProperty.call(I, v) && !Object.prototype.hasOwnProperty.call(I.wsOptions, v) && (y.wsOptions[v] = I[v]);
    }), y;
  }
  function g(I) {
    let y = d(I);
    if (y.hostname || (y.hostname = y.host), !y.hostname) {
      if (typeof document > "u") throw new Error("Could not determine host. Specify host manually.");
      let v = new URL(document.URL);
      y.hostname = v.hostname, y.port || (y.port = Number(v.port));
    }
    return y.objectMode === void 0 && (y.objectMode = !(y.binary === !0 || y.binary === void 0)), y;
  }
  function b(I, y, v) {
    t("createWebSocket"), t(`protocol: ${v.protocolId} ${v.protocolVersion}`);
    let U = v.protocolId === "MQIsdp" && v.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    t(`creating new Websocket for url: ${y} and protocol: ${U}`);
    let B;
    return v.createWebsocket ? B = v.createWebsocket(y, [U], v) : B = new l.default(y, [U], v.wsOptions), B;
  }
  function m(I, y) {
    let v = y.protocolId === "MQIsdp" && y.protocolVersion === 3 ? "mqttv3.1" : "mqtt", U = c(y, I), B;
    return y.createWebsocket ? B = y.createWebsocket(U, [v], y) : B = new WebSocket(U, [v]), B.binaryType = "arraybuffer", B;
  }
  var _ = (I, y) => {
    t("streamBuilder");
    let v = d(y);
    v.hostname = v.hostname || v.host || "localhost";
    let U = c(v, I), B = b(I, U, v), A = l.default.createWebSocketStream(B, v.wsOptions);
    return A.url = U, B.on("close", () => {
      A.destroy();
    }), A;
  };
  s.streamBuilder = _;
  var E = (I, y) => {
    t("browserStreamBuilder");
    let v, U = g(y).browserBufferSize || 1024 * 512, B = y.browserBufferTimeout || 1e3, A = !y.objectMode, k = m(I, y), M = X(y, W, ge);
    y.objectMode || (M._writev = r.writev.bind(M)), M.on("close", () => {
      k.close();
    });
    let Y = typeof k.addEventListener < "u";
    k.readyState === k.OPEN ? (v = M, v.socket = k) : (v = new r.BufferedDuplex(y, M, k), Y ? k.addEventListener("open", ae) : k.onopen = ae), Y ? (k.addEventListener("close", R), k.addEventListener("error", Q), k.addEventListener("message", J)) : (k.onclose = R, k.onerror = Q, k.onmessage = J);
    function X(de, le, Ee) {
      let G = new i.Transform({ objectMode: de.objectMode });
      return G._write = le, G._flush = Ee, G;
    }
    function ae() {
      t("WebSocket onOpen"), v instanceof r.BufferedDuplex && v.socketReady();
    }
    function R(de) {
      t("WebSocket onClose", de), v.end(), v.destroy();
    }
    function Q(de) {
      t("WebSocket onError", de);
      let le = new Error("WebSocket error");
      le.event = de, v.destroy(le);
    }
    async function J(de) {
      if (!M || M.destroyed || !M.readable) return;
      let { data: le } = de;
      le instanceof ArrayBuffer ? le = o.Buffer.from(le) : le instanceof Blob ? le = o.Buffer.from(await new Response(le).arrayBuffer()) : le = o.Buffer.from(le, "utf8"), M.push(le);
    }
    function W(de, le, Ee) {
      if (k.bufferedAmount > U) {
        setTimeout(W, B, de, le, Ee);
        return;
      }
      A && typeof de == "string" && (de = o.Buffer.from(de, "utf8"));
      try {
        k.send(de);
      } catch (G) {
        return Ee(G);
      }
      Ee();
    }
    function ge(de) {
      k.close(), de();
    }
    return v;
  };
  s.browserStreamBuilder = E;
}), In = {};
Zt(In, { Server: () => qe, Socket: () => qe, Stream: () => qe, _createServerHandle: () => qe, _normalizeArgs: () => qe, _setSimultaneousAccepts: () => qe, connect: () => qe, createConnection: () => qe, createServer: () => qe, default: () => Ms, isIP: () => qe, isIPv4: () => qe, isIPv6: () => qe });
function qe() {
  throw new Error("Node.js net module is not supported by JSPM core outside of Node.js");
}
var Ms, Ns = rt(() => {
  he(), fe(), ce(), Ms = { _createServerHandle: qe, _normalizeArgs: qe, _setSimultaneousAccepts: qe, connect: qe, createConnection: qe, createServer: qe, isIP: qe, isIPv4: qe, isIPv6: qe, Server: qe, Socket: qe, Stream: qe };
}), eo = be((s) => {
  he(), fe(), ce();
  var u = s && s.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  var o = u((Ns(), je(In))), l = u(It()), f = (0, l.default)("mqttjs:tcp"), i = (e, r) => {
    r.port = r.port || 1883, r.hostname = r.hostname || r.host || "localhost";
    let { port: t, path: n } = r, c = r.hostname;
    return f("port %d and host %s", t, c), o.default.createConnection({ port: t, host: c, path: n });
  };
  s.default = i;
}), Ls = {};
Zt(Ls, { default: () => Us });
var Us, al = rt(() => {
  he(), fe(), ce(), Us = {};
}), to = be((s) => {
  he(), fe(), ce();
  var u = s && s.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  var o = u((al(), je(Ls))), l = u((Ns(), je(In))), f = u(It()), i = (0, f.default)("mqttjs:tls"), e = (r, t) => {
    t.port = t.port || 8883, t.host = t.hostname || t.host || "localhost", l.default.isIP(t.host) === 0 && (t.servername = t.host), t.rejectUnauthorized = t.rejectUnauthorized !== !1, delete t.path, i("port %d host %s rejectUnauthorized %b", t.port, t.host, t.rejectUnauthorized);
    let n = o.default.connect(t);
    n.on("secureConnect", () => {
      t.rejectUnauthorized && !n.authorized ? n.emit("error", new Error("TLS not authorized")) : n.removeListener("error", c);
    });
    function c(d) {
      t.rejectUnauthorized && r.emit("error", d), n.end();
    }
    return n.on("error", c), n;
  };
  s.default = e;
}), ro = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = (Je(), je(Ye)), o = Yt(), l = An(), f, i, e;
  function r() {
    let g = new o.Transform();
    return g._write = (b, m, _) => {
      f.send({ data: b.buffer, success() {
        _();
      }, fail(E) {
        _(new Error(E));
      } });
    }, g._flush = (b) => {
      f.close({ success() {
        b();
      } });
    }, g;
  }
  function t(g) {
    g.hostname || (g.hostname = "localhost"), g.path || (g.path = "/"), g.wsOptions || (g.wsOptions = {});
  }
  function n(g, b) {
    let m = g.protocol === "wxs" ? "wss" : "ws", _ = `${m}://${g.hostname}${g.path}`;
    return g.port && g.port !== 80 && g.port !== 443 && (_ = `${m}://${g.hostname}:${g.port}${g.path}`), typeof g.transformWsUrl == "function" && (_ = g.transformWsUrl(_, g, b)), _;
  }
  function c() {
    f.onOpen(() => {
      e.socketReady();
    }), f.onMessage((g) => {
      let { data: b } = g;
      b instanceof ArrayBuffer ? b = u.Buffer.from(b) : b = u.Buffer.from(b, "utf8"), i.push(b);
    }), f.onClose(() => {
      e.emit("close"), e.end(), e.destroy();
    }), f.onError((g) => {
      let b = new Error(g.errMsg);
      e.destroy(b);
    });
  }
  var d = (g, b) => {
    if (b.hostname = b.hostname || b.host, !b.hostname) throw new Error("Could not determine host. Specify host manually.");
    let m = b.protocolId === "MQIsdp" && b.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    t(b);
    let _ = n(b, g);
    f = wx.connectSocket({ url: _, protocols: [m] }), i = r(), e = new l.BufferedDuplex(b, i, f), e._destroy = (I, y) => {
      f.close({ success() {
        y && y(I);
      } });
    };
    let E = e.destroy;
    return e.destroy = (I, y) => (e.destroy = E, setTimeout(() => {
      f.close({ fail() {
        e._destroy(I, y);
      } });
    }, 0), e), c(), e;
  };
  s.default = d;
}), io = be((s) => {
  he(), fe(), ce(), Object.defineProperty(s, "__esModule", { value: !0 });
  var u = (Je(), je(Ye)), o = Yt(), l = An(), f, i, e, r = !1;
  function t() {
    let b = new o.Transform();
    return b._write = (m, _, E) => {
      f.sendSocketMessage({ data: m.buffer, success() {
        E();
      }, fail() {
        E(new Error());
      } });
    }, b._flush = (m) => {
      f.closeSocket({ success() {
        m();
      } });
    }, b;
  }
  function n(b) {
    b.hostname || (b.hostname = "localhost"), b.path || (b.path = "/"), b.wsOptions || (b.wsOptions = {});
  }
  function c(b, m) {
    let _ = b.protocol === "alis" ? "wss" : "ws", E = `${_}://${b.hostname}${b.path}`;
    return b.port && b.port !== 80 && b.port !== 443 && (E = `${_}://${b.hostname}:${b.port}${b.path}`), typeof b.transformWsUrl == "function" && (E = b.transformWsUrl(E, b, m)), E;
  }
  function d() {
    r || (r = !0, f.onSocketOpen(() => {
      e.socketReady();
    }), f.onSocketMessage((b) => {
      if (typeof b.data == "string") {
        let m = u.Buffer.from(b.data, "base64");
        i.push(m);
      } else {
        let m = new FileReader();
        m.addEventListener("load", () => {
          let _ = m.result;
          _ instanceof ArrayBuffer ? _ = u.Buffer.from(_) : _ = u.Buffer.from(_, "utf8"), i.push(_);
        }), m.readAsArrayBuffer(b.data);
      }
    }), f.onSocketClose(() => {
      e.end(), e.destroy();
    }), f.onSocketError((b) => {
      e.destroy(b);
    }));
  }
  var g = (b, m) => {
    if (m.hostname = m.hostname || m.host, !m.hostname) throw new Error("Could not determine host. Specify host manually.");
    let _ = m.protocolId === "MQIsdp" && m.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    n(m);
    let E = c(m, b);
    return f = m.my, f.connectSocket({ url: E, protocols: _ }), i = t(), e = new l.BufferedDuplex(m, i, f), d(), e;
  };
  s.default = g;
}), ll = be((s) => {
  he(), fe(), ce();
  var u = s && s.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.connectAsync = c;
  var o = u(It()), l = u((ol(), je(os))), f = u(an()), i = u(Br());
  typeof (Ne == null ? void 0 : Ne.nextTick) != "function" && (Ne.nextTick = setImmediate);
  var e = (0, o.default)("mqttjs"), r = null;
  function t(d) {
    let g;
    d.auth && (g = d.auth.match(/^(.+):(.+)$/), g ? (d.username = g[1], d.password = g[2]) : d.username = d.auth);
  }
  function n(d, g) {
    var b, m, _;
    if (e("connecting to an MQTT broker..."), typeof d == "object" && !g && (g = d, d = ""), g = g || {}, d && typeof d == "string") {
      let y = l.default.parse(d, !0), v = {};
      if (y.port != null && (v.port = Number(y.port)), v.host = y.hostname, v.query = y.query, v.auth = y.auth, v.protocol = y.protocol, v.path = y.path, g = Object.assign(Object.assign({}, v), g), !g.protocol) throw new Error("Missing protocol");
      g.protocol = g.protocol.replace(/:$/, "");
    }
    if (g.unixSocket = g.unixSocket || ((b = g.protocol) === null || b === void 0 ? void 0 : b.includes("+unix")), g.unixSocket ? g.protocol = g.protocol.replace("+unix", "") : !(!((m = g.protocol) === null || m === void 0) && m.startsWith("ws")) && !(!((_ = g.protocol) === null || _ === void 0) && _.startsWith("wx")) && delete g.path, t(g), g.query && typeof g.query.clientId == "string" && (g.clientId = g.query.clientId), g.cert && g.key) if (g.protocol) {
      if (["mqtts", "wss", "wxs", "alis"].indexOf(g.protocol) === -1) switch (g.protocol) {
        case "mqtt":
          g.protocol = "mqtts";
          break;
        case "ws":
          g.protocol = "wss";
          break;
        case "wx":
          g.protocol = "wxs";
          break;
        case "ali":
          g.protocol = "alis";
          break;
        default:
          throw new Error(`Unknown protocol for secure connection: "${g.protocol}"!`);
      }
    } else throw new Error("Missing secure protocol key");
    if (r || (r = {}, !i.default && !g.forceNativeWebSocket ? (r.ws = br().streamBuilder, r.wss = br().streamBuilder, r.mqtt = eo().default, r.tcp = eo().default, r.ssl = to().default, r.tls = r.ssl, r.mqtts = to().default) : (r.ws = br().browserStreamBuilder, r.wss = br().browserStreamBuilder, r.wx = ro().default, r.wxs = ro().default, r.ali = io().default, r.alis = io().default)), !r[g.protocol]) {
      let y = ["mqtts", "wss"].indexOf(g.protocol) !== -1;
      g.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter((v, U) => y && U % 2 === 0 ? !1 : typeof r[v] == "function")[0];
    }
    if (g.clean === !1 && !g.clientId) throw new Error("Missing clientId for unclean clients");
    g.protocol && (g.defaultProtocol = g.protocol);
    function E(y) {
      return g.servers && ((!y._reconnectCount || y._reconnectCount === g.servers.length) && (y._reconnectCount = 0), g.host = g.servers[y._reconnectCount].host, g.port = g.servers[y._reconnectCount].port, g.protocol = g.servers[y._reconnectCount].protocol ? g.servers[y._reconnectCount].protocol : g.defaultProtocol, g.hostname = g.host, y._reconnectCount++), e("calling streambuilder for", g.protocol), r[g.protocol](y, g);
    }
    let I = new f.default(E, g);
    return I.on("error", () => {
    }), I;
  }
  function c(d, g, b = !0) {
    return new Promise((m, _) => {
      let E = n(d, g), I = { connect: (v) => {
        y(), m(E);
      }, end: () => {
        y(), m(E);
      }, error: (v) => {
        y(), E.end(), _(v);
      } };
      b === !1 && (I.close = () => {
        I.error(new Error("Couldn't connect to server"));
      });
      function y() {
        Object.keys(I).forEach((v) => {
          E.off(v, I[v]);
        });
      }
      Object.keys(I).forEach((v) => {
        E.on(v, I[v]);
      });
    });
  }
  s.default = n;
}), no = be((s) => {
  he(), fe(), ce();
  var u = s && s.__createBinding || (Object.create ? function(b, m, _, E) {
    E === void 0 && (E = _);
    var I = Object.getOwnPropertyDescriptor(m, _);
    (!I || ("get" in I ? !m.__esModule : I.writable || I.configurable)) && (I = { enumerable: !0, get: function() {
      return m[_];
    } }), Object.defineProperty(b, E, I);
  } : function(b, m, _, E) {
    E === void 0 && (E = _), b[E] = m[_];
  }), o = s && s.__setModuleDefault || (Object.create ? function(b, m) {
    Object.defineProperty(b, "default", { enumerable: !0, value: m });
  } : function(b, m) {
    b.default = m;
  }), l = s && s.__importStar || /* @__PURE__ */ function() {
    var b = function(m) {
      return b = Object.getOwnPropertyNames || function(_) {
        var E = [];
        for (var I in _) Object.prototype.hasOwnProperty.call(_, I) && (E[E.length] = I);
        return E;
      }, b(m);
    };
    return function(m) {
      if (m && m.__esModule) return m;
      var _ = {};
      if (m != null) for (var E = b(m), I = 0; I < E.length; I++) E[I] !== "default" && u(_, m, E[I]);
      return o(_, m), _;
    };
  }(), f = s && s.__exportStar || function(b, m) {
    for (var _ in b) _ !== "default" && !Object.prototype.hasOwnProperty.call(m, _) && u(m, b, _);
  }, i = s && s.__importDefault || function(b) {
    return b && b.__esModule ? b : { default: b };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.ReasonCodes = s.KeepaliveManager = s.UniqueMessageIdProvider = s.DefaultMessageIdProvider = s.Store = s.MqttClient = s.connectAsync = s.connect = s.Client = void 0;
  var e = i(an());
  s.MqttClient = e.default;
  var r = i(Lo());
  s.DefaultMessageIdProvider = r.default;
  var t = i(qa());
  s.UniqueMessageIdProvider = t.default;
  var n = i(Uo());
  s.Store = n.default;
  var c = l(ll());
  s.connect = c.default, Object.defineProperty(s, "connectAsync", { enumerable: !0, get: function() {
    return c.connectAsync;
  } });
  var d = i(Zo());
  s.KeepaliveManager = d.default, s.Client = e.default, f(an(), s), f(tr(), s);
  var g = xr();
  Object.defineProperty(s, "ReasonCodes", { enumerable: !0, get: function() {
    return g.ReasonCodes;
  } });
}), ul = be((s) => {
  he(), fe(), ce();
  var u = s && s.__createBinding || (Object.create ? function(e, r, t, n) {
    n === void 0 && (n = t);
    var c = Object.getOwnPropertyDescriptor(r, t);
    (!c || ("get" in c ? !r.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return r[t];
    } }), Object.defineProperty(e, n, c);
  } : function(e, r, t, n) {
    n === void 0 && (n = t), e[n] = r[t];
  }), o = s && s.__setModuleDefault || (Object.create ? function(e, r) {
    Object.defineProperty(e, "default", { enumerable: !0, value: r });
  } : function(e, r) {
    e.default = r;
  }), l = s && s.__importStar || /* @__PURE__ */ function() {
    var e = function(r) {
      return e = Object.getOwnPropertyNames || function(t) {
        var n = [];
        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (n[n.length] = c);
        return n;
      }, e(r);
    };
    return function(r) {
      if (r && r.__esModule) return r;
      var t = {};
      if (r != null) for (var n = e(r), c = 0; c < n.length; c++) n[c] !== "default" && u(t, r, n[c]);
      return o(t, r), t;
    };
  }(), f = s && s.__exportStar || function(e, r) {
    for (var t in e) t !== "default" && !Object.prototype.hasOwnProperty.call(r, t) && u(r, e, t);
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  var i = l(no());
  s.default = i, f(no(), s);
});
const hl = ul();
/*! Bundled license information:

@jspm/core/nodelibs/browser/buffer.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
class cl {
  classifyPriority(u) {
    return "low";
  }
  getImportantTopics() {
    return [];
  }
  isImportant(u) {
    return !!u;
  }
}
var ut = /* @__PURE__ */ ((s) => (s.CONNECTING = "connecting", s.CONNECTED = "connected", s.DISCONNECTED = "disconnected", s.RECONNECTING = "reconnecting", s.FAILED = "failed", s))(ut || {}), Ve = /* @__PURE__ */ ((s) => (s[s.DEBUG = 0] = "DEBUG", s[s.INFO = 1] = "INFO", s[s.WARN = 2] = "WARN", s[s.ERROR = 3] = "ERROR", s[s.NONE = 4] = "NONE", s))(Ve || {});
const mr = {
  [Ve.DEBUG]: "color: #9E9E9E",
  [Ve.INFO]: "color: #2196F3",
  [Ve.WARN]: "color: #FF9800",
  [Ve.ERROR]: "color: #F44336",
  [Ve.NONE]: "color: #000000"
}, fl = {
  [Ve.DEBUG]: "DEBUG",
  [Ve.INFO]: "INFO",
  [Ve.WARN]: "WARN",
  [Ve.ERROR]: "ERROR",
  [Ve.NONE]: "NONE"
};
class dl {
  constructor(u = {}) {
    Be(this, "level");
    Be(this, "prefix");
    Be(this, "showTimestamp");
    Be(this, "timestampFormat");
    this.level = u.level ?? Ve.INFO, this.prefix = u.prefix ?? "", this.showTimestamp = u.showTimestamp ?? !0, this.timestampFormat = u.timestampFormat ?? "locale";
  }
  debug(u, ...o) {
    this.log(Ve.DEBUG, u, ...o);
  }
  info(u, ...o) {
    this.log(Ve.INFO, u, ...o);
  }
  warn(u, ...o) {
    this.log(Ve.WARN, u, ...o);
  }
  error(u, ...o) {
    this.log(Ve.ERROR, u, ...o);
  }
  setLevel(u) {
    this.level = u;
  }
  getLevel() {
    return this.level;
  }
  log(u, o, ...l) {
    if (u < this.level)
      return;
    const f = this.formatTimestamp(), e = `%c${this.formatPrefix(u)}${f}${o}`;
    switch (u) {
      case Ve.DEBUG:
        console.debug(e, mr[u], ...l);
        break;
      case Ve.INFO:
        console.info(e, mr[u], ...l);
        break;
      case Ve.WARN:
        console.warn(e, mr[u], ...l);
        break;
      case Ve.ERROR:
        console.error(e, mr[u], ...l);
        break;
    }
  }
  formatTimestamp() {
    if (!this.showTimestamp)
      return "";
    const u = /* @__PURE__ */ new Date();
    let o;
    switch (this.timestampFormat) {
      case "iso":
        o = u.toISOString();
        break;
      case "locale":
        o = u.toLocaleTimeString();
        break;
      case "epoch":
        o = u.getTime().toString();
        break;
      default:
        o = u.toLocaleTimeString();
    }
    return ` [${o}] `;
  }
  formatPrefix(u) {
    let o = `[${fl[u]}]`;
    return this.prefix && (o += ` [${this.prefix}]`), o;
  }
}
class bn {
  static getLogger(u) {
    if (!this.loggers.has(u)) {
      const o = new dl({ prefix: u });
      o.setLevel(this.defaultLevel), this.loggers.set(u, o);
    }
    return this.loggers.get(u);
  }
  static setDefaultLevel(u) {
    this.defaultLevel = u;
    for (const o of this.loggers.values())
      o.setLevel(u);
  }
  static clearLoggers() {
    this.loggers.clear(), this.defaultLevel = Ve.INFO;
  }
  static removeLogger(u) {
    const o = this.loggers.delete(u);
    return o && (this.defaultLevel = Ve.INFO), o;
  }
}
Be(bn, "loggers", /* @__PURE__ */ new Map()), Be(bn, "defaultLevel", Ve.INFO);
const pl = !0;
class gl {
  constructor(u) {
    Be(this, "config");
    Be(this, "logger");
    Be(this, "messageHandlers", /* @__PURE__ */ new Map());
    Be(this, "connectionStateHandlers", []);
    Be(this, "messageClassifier");
    Be(this, "client");
    // private reconnectTimer?: NodeJS.Timeout;
    Be(this, "connectionState", ut.DISCONNECTED);
    this.config = u.config, this.logger = bn.getLogger("MQTTClient"), this.messageClassifier = u.messageClassifier || new cl(), this.logger.info(`Khởi tạo MQTT Client với broker: ${this.config.brokerUrl}`);
  }
  disconnect() {
    this.client && this.client.end(!0, () => {
      this.client = void 0, this.logger.debug("Mqtt client disconnected"), this.updateConnectionState(ut.DISCONNECTED);
    });
  }
  async connect() {
    if (this.client) return !0;
    this.updateConnectionState(ut.CONNECTING);
    try {
      return this.config.brokerUrl ? (this.client = hl.connect(this.config.brokerUrl, {
        clientId: this.config.clientId,
        username: this.config.username,
        password: this.config.password,
        keepalive: this.config.keepalive || 15,
        clean: this.config.clean !== void 0 ? this.config.clean : !0,
        connectTimeout: this.config.connectTimeout || 5e3,
        reconnectPeriod: this.config.reconnectPeriod || 5e3,
        queueQoSZero: this.config.queueQoSZero !== void 0 ? this.config.queueQoSZero : !0,
        will: this.config.will,
        rejectUnauthorized: !pl
      }), this.setupEventHandlers(), new Promise((u) => {
        var f, i;
        const o = () => {
          var e, r;
          (e = this.client) == null || e.removeListener("connect", o), (r = this.client) == null || r.removeListener("error", l), u(!0);
        }, l = (e) => {
          var r, t;
          (r = this.client) == null || r.removeListener("connect", o), (t = this.client) == null || t.removeListener("error", l), this.logger.error(`Lỗi khi kết nối đến MQTT broker: ${e.message}`, e), u(!1);
        };
        (f = this.client) == null || f.once("connect", o), (i = this.client) == null || i.once("error", l);
      })) : (this.updateConnectionState(ut.FAILED), !1);
    } catch (u) {
      return this.logger.error(`Lỗi khi kết nối đến MQTT broker: ${u.message}`, u), this.updateConnectionState(ut.FAILED), !1;
    }
  }
  async subscribe(u, o = 0) {
    return this.client ? await new Promise((l) => {
      var f;
      (f = this.client) == null || f.subscribe(u, { qos: o }, (i) => {
        i ? (this.logger.error(`Cannot subscribe topic ${u}: ${i.message}`, i), l(!1)) : (this.logger.info(`Subscribed ${u} (QoS: ${o})`), l(!0));
      });
    }) : (this.logger.error("Client is not connected"), !1);
  }
  updateConnectionState(u) {
    this.connectionState !== u && (this.connectionState = u, this.connectionStateHandlers.forEach((o) => {
      try {
        o(u);
      } catch (l) {
        this.logger.error(`Connection state handler error: ${l == null ? void 0 : l.message}`, l);
      }
    }));
  }
  setupEventHandlers() {
    this.client && (this.client.on("connect", async () => {
      this.logger.debug("Mqtt broker connected"), this.updateConnectionState(ut.CONNECTED), await this.subscribeToImportantTopics();
    }), this.client.on("reconnect", () => {
      this.logger.debug("Reconnecting to mqtt broker"), this.updateConnectionState(ut.RECONNECTING);
    }), this.client.on("close", () => {
      this.logger.debug("Mqtt client closed"), this.updateConnectionState(ut.DISCONNECTED);
    }), this.client.on("offline", () => {
      this.logger.debug("Mqtt client offline"), this.updateConnectionState(ut.DISCONNECTED);
    }), this.client.on("error", (u) => {
      this.logger.error(`Mqtt client error: ${u.message}`, u), this.connectionState === ut.CONNECTING && this.updateConnectionState(ut.FAILED);
    }), this.client.on("message", (u, o, l) => {
      var f;
      try {
        const i = {
          topic: u,
          id: (f = l.messageId) == null ? void 0 : f.toString(),
          payload: this.parsePayload(o),
          qos: l.qos,
          retain: l.retain,
          timestamp: Date.now()
        }, e = this.messageClassifier.classifyPriority(i);
        this.logger.debug(`Received message from topic ${u} with priority ${e}`), this.notifyMessageHandlers(u, i);
      } catch (i) {
        this.logger.error(`Lỗi khi xử lý tin nhắn từ topic ${u}: ${i.message}`, i);
      }
    }));
  }
  async subscribeToImportantTopics() {
    const u = this.messageClassifier.getImportantTopics();
    if (!u.length)
      return this.logger.warn("No important topics to subscribe"), {};
    this.logger.debug(`Subscribing to important topics: ${u.join(", ")}`);
    const o = await Promise.all(u.map((l) => this.subscribe(l, 1)));
    return u.reduce((l, f, i) => (l[f] = o[i], l), {});
  }
  parsePayload(u) {
    const o = u.toString();
    try {
      return JSON.parse(o);
    } catch {
      return o;
    }
  }
  notifyMessageHandlers(u, o) {
    const l = this.messageHandlers.get(u);
    l && l.forEach((f) => {
      try {
        f(o);
      } catch (i) {
        this.logger.error(`Lỗi khi gọi handler cho topic ${u}: ${i.message}`, i);
      }
    }), this.messageHandlers.forEach((f, i) => {
      i !== u && this.topicMatchesPattern(u, i) && f.forEach((e) => {
        try {
          e(o);
        } catch (r) {
          this.logger.error(`Lỗi khi gọi handler cho pattern ${i}: ${r.message}`, r);
        }
      });
    });
  }
  topicMatchesPattern(u, o) {
    if (o === u) return !0;
    if (o.endsWith("#")) {
      const i = o.substring(0, o.length - 1);
      return u.startsWith(i);
    }
    const l = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\+/g, "[^/]+").replace(/\\#/g, ".*");
    return new RegExp(`^${l}$`).test(u);
  }
  // private attemptReconnect(): void {
  //     if (this.reconnectTimer) {
  //         return;
  //     }
  //
  //     const reconnectDelay = this.config.reconnectPeriod;
  //     this.logger.info(`Sẽ kết nối lại sau ${reconnectDelay}ms`);
  //
  //     this.reconnectTimer = setTimeout(() => {
  //         this.reconnectTimer = undefined;
  //         this.logger.info('Đang thử kết nối lại...');
  //         this.updateConnectionState(ConnectionState.RECONNECTING);
  //
  //         this.disconnect();
  //         this.connect().catch(error => {
  //             this.logger.error(`Lỗi khi kết nối lại: ${(error as Error).message}`, error);
  //             this.updateConnectionState(ConnectionState.FAILED);
  //             this.attemptReconnect();
  //         });
  //     }, reconnectDelay);
  // }
  //
  // private stopReconnectTimer(): void {
  //     if (!this.reconnectTimer) {
  //         return;
  //     }
  //
  //     this.logger.debug('Stopping reconnect timer');
  //     clearTimeout(this.reconnectTimer);
  //     this.reconnectTimer = undefined;
  // }
  // private attemptReconnect(): void {
  //     if (this.reconnectTimer) return;
  //
  //     const reconnectDelay = this.config.reconnectPeriod || 5000;
  //     this.logger.info(`Reconnect after ${reconnectDelay}ms`);
  //
  //     this.reconnectTimer = setTimeout(() => {
  //         this.reconnectTimer = undefined;
  //         this.logger.info('Trying to reconnect...');
  //         this.updateConnectionState(ConnectionState.RECONNECTING);
  //
  //         this.disconnect();
  //         this.connect().catch(error => {
  //             this.logger.error(`Cannot reconnect error: ${(error as Error).message}`, error);
  //             this.updateConnectionState(ConnectionState.FAILED);
  //             this.attemptReconnect();
  //         });
  //     }, reconnectDelay);
  // }
}
const bl = new gl({
  config: {
    clientId: "agent-01",
    brokerUrl: "ws://localhost:8083/mqtt"
  }
});
bl.connect();
