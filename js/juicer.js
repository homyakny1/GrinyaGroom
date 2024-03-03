! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = ft.type(t);
        return "function" === n || ft.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function r(t, e, n) {
        if (ft.isFunction(e)) return ft.grep(t, function (t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType) return ft.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {a
            if (_t.test(e)) return ft.filter(e, t, n);
            e = ft.filter(e, t)
        }
        return ft.grep(t, function (t) {
            return ft.inArray(t, e) > -1 !== n
        })
    }

    function i(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function s(t) {
        var e = {};
        return ft.each(t.match(Jt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function o() {
        rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (rt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (rt.addEventListener || "load" === t.event.type || "complete" === rt.readyState) && (o(), ft.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var r = "data-" + e.replace(Mt, "-$1").toLowerCase();
            if (n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : $t.test(n) ? ft.parseJSON(n) : n
                } catch (i) {}
                ft.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function c(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function u(t, e, n, r) {
        if (Et(t)) {
            var i, s, o = ft.expando,
                a = t.nodeType,
                l = a ? ft.cache : t,
                c = a ? t[o] : t[o] && o;
            if (c && l[c] && (r || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[o] = nt.pop() || ft.guid++ : o), l[c] || (l[c] = a ? {} : {
                toJSON: ft.noop
            }), ("object" == typeof e || "function" == typeof e) && (r ? l[c] = ft.extend(l[c], e) : l[c].data = ft.extend(l[c].data, e)), s = l[c], r || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[ft.camelCase(e)] = n), "string" == typeof e ? (i = s[e], null == i && (i = s[ft.camelCase(e)])) : i = s, i
        }
    }

    function p(t, e, n) {
        if (Et(t)) {
            var r, i, s = t.nodeType,
                o = s ? ft.cache : t,
                a = s ? t[ft.expando] : ft.expando;
            if (o[a]) {
                if (e && (r = n ? o[a] : o[a].data)) {
                    ft.isArray(e) ? e = e.concat(ft.map(e, ft.camelCase)) : e in r ? e = [e] : (e = ft.camelCase(e), e = e in r ? [e] : e.split(" ")), i = e.length;
                    for (; i--;) delete r[e[i]];
                    if (n ? !c(r) : !ft.isEmptyObject(r)) return
                }(n || (delete o[a].data, c(o[a]))) && (s ? ft.cleanData([t], !0) : pt.deleteExpando || o != o.window ? delete o[a] : o[a] = void 0)
            }
        }
    }

    function h(t, e, n, r) {
        var i, s = 1,
            o = 20,
            a = r ? function () {
                return r.cur()
            } : function () {
                return ft.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
            u = (ft.cssNumber[e] || "px" !== c && +l) && It.exec(ft.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do s = s || ".5", u /= s, ft.style(t, e, u + c); while (s !== (s = a() / l) && 1 !== s && --o)
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
    }

    function f(t) {
        var e = Vt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function d(t, e) {
        var n, r, i = 0,
            s = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [], n = t.childNodes || t; null != (r = n[i]); i++) !e || ft.nodeName(r, e) ? s.push(r) : ft.merge(s, d(r, e));
        return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], s) : s
    }

    function m(t, e) {
        for (var n, r = 0; null != (n = t[r]); r++) ft._data(n, "globalEval", !e || ft._data(e[r], "globalEval"))
    }

    function g(t) {
        Ht.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e, n, r, i) {
        for (var s, o, a, l, c, u, p, h = t.length, y = f(e), v = [], w = 0; h > w; w++)
            if (o = t[w], o || 0 === o)
                if ("object" === ft.type(o)) ft.merge(v, o.nodeType ? [o] : o);
                else if (Wt.test(o)) {
            for (l = l || y.appendChild(e.createElement("div")), c = (qt.exec(o) || ["", ""])[1].toLowerCase(), p = Bt[c] || Bt._default, l.innerHTML = p[1] + ft.htmlPrefilter(o) + p[2], s = p[0]; s--;) l = l.lastChild;
            if (!pt.leadingWhitespace && Rt.test(o) && v.push(e.createTextNode(Rt.exec(o)[0])), !pt.tbody)
                for (o = "table" !== c || Ut.test(o) ? "<table>" !== p[1] || Ut.test(o) ? 0 : l : l.firstChild, s = o && o.childNodes.length; s--;) ft.nodeName(u = o.childNodes[s], "tbody") && !u.childNodes.length && o.removeChild(u);
            for (ft.merge(v, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = y.lastChild
        } else v.push(e.createTextNode(o));
        for (l && y.removeChild(l), pt.appendChecked || ft.grep(d(v, "input"), g), w = 0; o = v[w++];)
            if (r && ft.inArray(o, r) > -1) i && i.push(o);
            else if (a = ft.contains(o.ownerDocument, o), l = d(y.appendChild(o), "script"), a && m(l), n)
            for (s = 0; o = l[s++];) zt.test(o.type || "") && n.push(o);
        return l = null, y
    }

    function v() {
        return !0
    }

    function w() {
        return !1
    }

    function b() {
        try {
            return rt.activeElement
        } catch (t) {}
    }

    function S(t, e, n, r, i, s) {
        var o, a;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in e) S(t, a, n, r, e[a], s);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = w;
        else if (!i) return t;
        return 1 === s && (o = i, i = function (t) {
            return ft().off(t), o.apply(this, arguments)
        }, i.guid = o.guid || (o.guid = ft.guid++)), t.each(function () {
            ft.event.add(this, e, i, r, n)
        })
    }

    function k(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function _(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
    }

    function x(t) {
        var e = ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function T(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var n, r, i, s = ft._data(t),
                o = ft._data(e, s),
                a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (n in a)
                    for (r = 0, i = a[n].length; i > r; r++) ft.event.add(e, n, a[n][r])
            }
            o.data && (o.data = ft.extend({}, o.data))
        }
    }

    function A(t, e) {
        var n, r, i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !pt.noCloneEvent && e[ft.expando]) {
                i = ft._data(e);
                for (r in i.events) ft.removeEvent(e, r, i.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === n && e.text !== t.text ? (_(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), pt.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ht.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(t, e, n, r) {
        e = st.apply([], e);
        var i, s, o, a, l, c, u = 0,
            p = t.length,
            h = p - 1,
            f = e[0],
            m = ft.isFunction(f);
        if (m || p > 1 && "string" == typeof f && !pt.checkClone && re.test(f)) return t.each(function (i) {
            var s = t.eq(i);
            m && (e[0] = f.call(this, i, s.html())), C(s, e, n, r)
        });
        if (p && (c = y(e, t[0].ownerDocument, !1, t, r), i = c.firstChild, 1 === c.childNodes.length && (c = i), i || r)) {
            for (a = ft.map(d(c, "script"), _), o = a.length; p > u; u++) s = c, u !== h && (s = ft.clone(s, !0, !0), o && ft.merge(a, d(s, "script"))), n.call(t[u], s, u);
            if (o)
                for (l = a[a.length - 1].ownerDocument, ft.map(a, x), u = 0; o > u; u++) s = a[u], zt.test(s.type || "") && !ft._data(s, "globalEval") && ft.contains(l, s) && (s.src ? ft._evalUrl && ft._evalUrl(s.src) : ft.globalEval((s.text || s.textContent || s.innerHTML || "").replace(se, "")));
            c = i = null
        }
        return t
    }

    function j(t, e, n) {
        for (var r, i = e ? ft.filter(e, t) : t, s = 0; null != (r = i[s]); s++) n || 1 !== r.nodeType || ft.cleanData(d(r)), r.parentNode && (n && ft.contains(r.ownerDocument, r) && m(d(r, "script")), r.parentNode.removeChild(r));
        return t
    }

    function J(t, e) {
        var n = ft(e.createElement(t)).appendTo(e.body),
            r = ft.css(n[0], "display");
        return n.detach(), r
    }

    function P(t) {
        var e = rt,
            n = ce[t];
        return n || (n = J(t, e), "none" !== n && n || (le = (le || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = J(t, e), le.detach()), ce[t] = n), n
    }

    function O(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function E(t) {
        if (t in xe) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = _e.length; n--;)
            if (t = _e[n] + e, t in xe) return t
    }

    function $(t, e) {
        for (var n, r, i, s = [], o = 0, a = t.length; a > o; o++) r = t[o], r.style && (s[o] = ft._data(r, "olddisplay"), n = r.style.display, e ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ft(r) && (s[o] = ft._data(r, "olddisplay", P(r.nodeName)))) : (i = Ft(r), (n && "none" !== n || !i) && ft._data(r, "olddisplay", i ? n : ft.css(r, "display"))));
        for (o = 0; a > o; o++) r = t[o], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function M(t, e, n) {
        var r = be.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }

    function L(t, e, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += ft.css(t, n + Dt[s], !0, i)), r ? ("content" === n && (o -= ft.css(t, "padding" + Dt[s], !0, i)), "margin" !== n && (o -= ft.css(t, "border" + Dt[s] + "Width", !0, i))) : (o += ft.css(t, "padding" + Dt[s], !0, i), "padding" !== n && (o += ft.css(t, "border" + Dt[s] + "Width", !0, i)));
        return o
    }

    function I(t, e, n) {
        var r = !0,
            i = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = de(t),
            o = pt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = me(t, e, s), (0 > i || null == i) && (i = t.style[e]), pe.test(i)) return i;
            r = o && (pt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + L(t, e, n || (o ? "border" : "content"), r, s) + "px"
    }

    function D(t, e, n, r, i) {
        return new D.prototype.init(t, e, n, r, i)
    }

    function F() {
        return t.setTimeout(function () {
            Te = void 0
        }), Te = ft.now()
    }

    function N(t, e) {
        var n, r = {
                height: t
            },
            i = 0;
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Dt[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function H(t, e, n) {
        for (var r, i = (R.tweeners[e] || []).concat(R.tweeners["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, e, t)) return r
    }

    function q(t, e, n) {
        var r, i, s, o, a, l, c, u, p = this,
            h = {},
            f = t.style,
            d = t.nodeType && Ft(t),
            m = ft._data(t, "fxshow");
        n.queue || (a = ft._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, ft.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = ft.css(t, "display"), u = "none" === c ? ft._data(t, "olddisplay") || P(t.nodeName) : c, "inline" === u && "none" === ft.css(t, "float") && (pt.inlineBlockNeedsLayout && "inline" !== P(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", pt.shrinkWrapBlocks() || p.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r], Ce.exec(i)) {
                if (delete e[r], s = s || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    d = !0
                }
                h[r] = m && m[r] || ft.style(t, r)
            } else c = void 0;
        if (ft.isEmptyObject(h)) "inline" === ("none" === c ? P(t.nodeName) : c) && (f.display = c);
        else {
            m ? "hidden" in m && (d = m.hidden) : m = ft._data(t, "fxshow", {}), s && (m.hidden = !d), d ? ft(t).show() : p.done(function () {
                ft(t).hide()
            }), p.done(function () {
                var e;
                ft._removeData(t, "fxshow");
                for (e in h) ft.style(t, e, h[e])
            });
            for (r in h) o = H(d ? m[r] : 0, r, p), r in m || (m[r] = o.start, d && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function z(t, e) {
        var n, r, i, s, o;
        for (n in t)
            if (r = ft.camelCase(n), i = e[r], s = t[n], ft.isArray(s) && (i = s[1], s = t[n] = s[0]), n !== r && (t[r] = s, delete t[n]), o = ft.cssHooks[r], o && "expand" in o) {
                s = o.expand(s), delete t[r];
                for (n in s) n in t || (t[n] = s[n], e[n] = i)
            } else e[r] = i
    }

    function R(t, e, n) {
        var r, i, s = 0,
            o = R.prefilters.length,
            a = ft.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var e = Te || F(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0, s = 1 - r, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(s);
                return a.notifyWith(t, [c, s, n]), 1 > s && l ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Te || F(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var r = ft.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function (e) {
                    var n = 0,
                        r = e ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (z(u, c.opts.specialEasing); o > s; s++)
            if (r = R.prefilters[s].call(c, t, u, c.opts)) return ft.isFunction(r.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(r.stop, r)), r;
        return ft.map(u, H, c), ft.isFunction(c.opts.start) && c.opts.start.call(t, c), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function V(t) {
        return ft.attr(t, "class") || ""
    }

    function B(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0,
                s = e.toLowerCase().match(Jt) || [];
            if (ft.isFunction(n))
                for (; r = s[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function W(t, e, n, r) {
        function i(a) {
            var l;
            return s[a] = !0, ft.each(t[a] || [], function (t, a) {
                var c = a(e, n, r);
                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), i(c), !1)
            }), l
        }
        var s = {},
            o = t === Ke;
        return i(e.dataTypes[0]) || !s["*"] && i("*")
    }

    function U(t, e) {
        var n, r, i = ft.ajaxSettings.flatOptions || {};
        for (r in e) void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
        return n && ft.extend(!0, t, n), t
    }

    function G(t, e, n) {
        for (var r, i, s, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                } if (l[0] in n) s = l[0];
        else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
    }

    function Y(t, e, n, r) {
        var i, s, o, a, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
        for (s = u.shift(); s;)
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = c[l + " " + s] || c["* " + s], !o)
                for (i in c)
                    if (a = i.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                        o === !0 ? o = c[i] : c[i] !== !0 && (s = a[0], u.unshift(a[1]));
                        break
                    } if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: o ? p : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function Q(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }

    function X(t) {
        if (!ft.contains(t.ownerDocument || rt, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === Q(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function K(t, e, n, r) {
        var i;
        if (ft.isArray(e)) ft.each(e, function (e, i) {
            n || rn.test(t) ? r(t, i) : K(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
        });
        else if (n || "object" !== ft.type(e)) r(t, e);
        else
            for (i in e) K(t + "[" + i + "]", e[i], n, r)
    }

    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function et(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var nt = [],
        rt = t.document,
        it = nt.slice,
        st = nt.concat,
        ot = nt.push,
        at = nt.indexOf,
        lt = {},
        ct = lt.toString,
        ut = lt.hasOwnProperty,
        pt = {},
        ht = "1.12.4",
        ft = function (t, e) {
            return new ft.fn.init(t, e)
        },
        dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        gt = /-([\da-z])/gi,
        yt = function (t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: ht,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function () {
            return it.call(this)
        },
        get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : it.call(this)
        },
        pushStack: function (t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t) {
            return ft.each(this, t)
        },
        map: function (t) {
            return this.pushStack(ft.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ot,
        sort: nt.sort,
        splice: nt.splice
    }, ft.extend = ft.fn.extend = function () {
        var t, e, n, r, i, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || ft.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (i = arguments[a]))
                for (r in i) t = o[r], n = i[r], o !== n && (c && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1, s = t && ft.isArray(t) ? t : []) : s = t && ft.isPlainObject(t) ? t : {}, o[r] = ft.extend(c, s, n)) : void 0 !== n && (o[r] = n));
        return o
    }, ft.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === ft.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            var e = t && t.toString();
            return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function (t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t)) return !1;
            try {
                if (t.constructor && !ut.call(t, "constructor") && !ut.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!pt.ownFirst)
                for (e in t) return ut.call(t, e);
            for (e in t);
            return void 0 === e || ut.call(t, e)
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
        },
        globalEval: function (e) {
            e && ft.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(mt, "ms-").replace(gt, yt)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var r, i = 0;
            if (n(t))
                for (r = t.length; r > i && e.call(t[i], i, t[i]) !== !1; i++);
            else
                for (i in t)
                    if (e.call(t[i], i, t[i]) === !1) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(dt, "")
        },
        makeArray: function (t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? ft.merge(r, "string" == typeof t ? [t] : t) : ot.call(r, t)), r
        },
        inArray: function (t, e, n) {
            var r;
            if (e) {
                if (at) return at.call(e, t, n);
                for (r = e.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; n > r;) t[i++] = e[r++];
            if (n !== n)
                for (; void 0 !== e[r];) t[i++] = e[r++];
            return t.length = i, t
        },
        grep: function (t, e, n) {
            for (var r, i = [], s = 0, o = t.length, a = !n; o > s; s++) r = !e(t[s], s), r !== a && i.push(t[s]);
            return i
        },
        map: function (t, e, r) {
            var i, s, o = 0,
                a = [];
            if (n(t))
                for (i = t.length; i > o; o++) s = e(t[o], o, r), null != s && a.push(s);
            else
                for (o in t) s = e(t[o], o, r), null != s && a.push(s);
            return st.apply([], a)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, r, i;
            return "string" == typeof e && (i = t[e], e = t, t = i), ft.isFunction(t) ? (n = it.call(arguments, 2), r = function () {
                return t.apply(e || this, n.concat(it.call(arguments)))
            }, r.guid = t.guid = t.guid || ft.guid++, r) : void 0
        },
        now: function () {
            return +new Date
        },
        support: pt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var vt = function (t) {
        function e(t, e, n, r) {
            var i, s, o, a, l, c, p, f, d = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && ((e ? e.ownerDocument || e : H) !== E && O(e), e = e || E, M)) {
                if (11 !== m && (c = yt.exec(t)))
                    if (i = c[1]) {
                        if (9 === m) {
                            if (!(o = e.getElementById(i))) return n;
                            if (o.id === i) return n.push(o), n
                        } else if (d && (o = d.getElementById(i)) && F(e, o) && o.id === i) return n.push(o), n
                    } else {
                        if (c[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = c[3]) && S.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(i)), n
                    } if (S.qsa && !B[t + " "] && (!L || !L.test(t))) {
                    if (1 !== m) d = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = N), p = T(t), s = p.length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; s--;) p[s] = l + " " + h(p[s]);
                        f = p.join(","), d = vt.test(t) && u(e.parentNode) || e
                    }
                    if (f) try {
                        return K.apply(n, d.querySelectorAll(f)), n
                    } catch (g) {} finally {
                        a === N && e.removeAttribute("id")
                    }
                }
            }
            return C(t.replace(at, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            var e = [];
            return t
        }

        function r(t) {
            return t[N] = !0, t
        }

        function i(t) {
            var e = E.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) k.attrHandle[n[r]] = e
        }

        function o(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return r(function (e) {
                return e = +e, r(function (n, r) {
                    for (var i, s = t([], n.length, e), o = s.length; o--;) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function p() {}

        function h(t) {
            for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
            return r
        }

        function f(t, e, n) {
            var r = e.dir,
                i = n && "parentNode" === r,
                s = z++;
            return e.first ? function (e, n, s) {
                for (; e = e[r];)
                    if (1 === e.nodeType || i) return t(e, n, s)
            } : function (e, n, o) {
                var a, l, c, u = [q, s];
                if (o) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || i) && t(e, n, o)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) {
                            if (c = e[N] || (e[N] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[r]) && a[0] === q && a[1] === s) return u[2] = a[2];
                            if (l[r] = u, u[2] = t(e, n, o)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function (e, n, r) {
                for (var i = t.length; i--;)
                    if (!t[i](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, r) {
            for (var i = 0, s = n.length; s > i; i++) e(t, n[i], r);
            return r
        }

        function g(t, e, n, r, i) {
            for (var s, o = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!n || n(s, r, i)) && (o.push(s), c && e.push(a));
            return o
        }

        function y(t, e, n, i, s, o) {
            return i && !i[N] && (i = y(i)), s && !s[N] && (s = y(s, o)), r(function (r, o, a, l) {
                var c, u, p, h = [],
                    f = [],
                    d = o.length,
                    y = r || m(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !r && e ? y : g(y, h, t, a, l),
                    w = n ? s || (r ? t : d || i) ? [] : o : v;
                if (n && n(v, w, a, l), i)
                    for (c = g(w, f), i(c, [], a, l), u = c.length; u--;)(p = c[u]) && (w[f[u]] = !(v[f[u]] = p));
                if (r) {
                    if (s || t) {
                        if (s) {
                            for (c = [], u = w.length; u--;)(p = w[u]) && c.push(v[u] = p);
                            s(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(p = w[u]) && (c = s ? tt(r, p) : h[u]) > -1 && (r[c] = !(o[c] = p))
                    }
                } else w = g(w === o ? w.splice(d, w.length) : w), s ? s(null, o, w, l) : K.apply(o, w)
            })
        }

        function v(t) {
            for (var e, n, r, i = t.length, s = k.relative[t[0].type], o = s || k.relative[" "], a = s ? 1 : 0, l = f(function (t) {
                    return t === e
                }, o, !0), c = f(function (t) {
                    return tt(e, t) > -1
                }, o, !0), u = [function (t, n, r) {
                    var i = !s && (r || n !== j) || ((e = n).nodeType ? l(t, n, r) : c(t, n, r));
                    return e = null, i
                }]; i > a; a++)
                if (n = k.relative[t[a].type]) u = [f(d(u), n)];
                else {
                    if (n = k.filter[t[a].type].apply(null, t[a].matches), n[N]) {
                        for (r = ++a; i > r && !k.relative[t[r].type]; r++);
                        return y(a > 1 && d(u), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, r > a && v(t.slice(a, r)), i > r && v(t = t.slice(r)), i > r && h(t))
                    }
                    u.push(n)
                } return d(u)
        }

        function w(t, n) {
            var i = n.length > 0,
                s = t.length > 0,
                o = function (r, o, a, l, c) {
                    var u, p, h, f = 0,
                        d = "0",
                        m = r && [],
                        y = [],
                        v = j,
                        w = r || s && k.find.TAG("*", c),
                        b = q += null == v ? 1 : Math.random() || .1,
                        S = w.length;
                    for (c && (j = o === E || o || c); d !== S && null != (u = w[d]); d++) {
                        if (s && u) {
                            for (p = 0, o || u.ownerDocument === E || (O(u), a = !M); h = t[p++];)
                                if (h(u, o || E, a)) {
                                    l.push(u);
                                    break
                                } c && (q = b)
                        }
                        i && ((u = !h && u) && f--, r && m.push(u))
                    }
                    if (f += d, i && d !== f) {
                        for (p = 0; h = n[p++];) h(m, y, o, a);
                        if (r) {
                            if (f > 0)
                                for (; d--;) m[d] || y[d] || (y[d] = Q.call(l));
                            y = g(y)
                        }
                        K.apply(l, y), c && !r && y.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (q = b, j = v), m
                };
            return i ? r(o) : o
        }
        var b, S, k, _, x, T, A, C, j, J, P, O, E, $, M, L, I, D, F, N = "sizzle" + 1 * new Date,
            H = t.document,
            q = 0,
            z = 0,
            R = n(),
            V = n(),
            B = n(),
            W = function (t, e) {
                return t === e && (P = !0), 0
            },
            U = 1 << 31,
            G = {}.hasOwnProperty,
            Y = [],
            Q = Y.pop,
            X = Y.push,
            K = Y.push,
            Z = Y.slice,
            tt = function (t, e) {
                for (var n = 0, r = t.length; r > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            ot = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            pt = new RegExp(st),
            ht = new RegExp("^" + rt + "$"),
            ft = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            dt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            wt = /'|\\/g,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            St = function (t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            kt = function () {
                O()
            };
        try {
            K.apply(Y = Z.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
        } catch (_t) {
            K = {
                apply: Y.length ? function (t, e) {
                    X.apply(t, Z.call(e))
                } : function (t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        S = e.support = {}, x = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, O = e.setDocument = function (t) {
            var e, n, r = t ? t.ownerDocument || t : H;
            return r !== E && 9 === r.nodeType && r.documentElement ? (E = r, $ = E.documentElement, M = !x(E), (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), S.attributes = i(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), S.getElementsByTagName = i(function (t) {
                return t.appendChild(E.createComment("")), !t.getElementsByTagName("*").length
            }), S.getElementsByClassName = gt.test(E.getElementsByClassName), S.getById = i(function (t) {
                return $.appendChild(t).id = N, !E.getElementsByName || !E.getElementsByName(N).length
            }), S.getById ? (k.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && M) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, k.filter.ID = function (t) {
                var e = t.replace(bt, St);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function (t) {
                var e = t.replace(bt, St);
                return function (t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), k.find.TAG = S.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : S.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, r = [],
                    i = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, k.find.CLASS = S.getElementsByClassName && function (t, e) {
                return "undefined" != typeof e.getElementsByClassName && M ? e.getElementsByClassName(t) : void 0
            }, I = [], L = [], (S.qsa = gt.test(E.querySelectorAll)) && (i(function (t) {
                $.appendChild(t).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + N + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + N + "+*").length || L.push(".#.+[+~]")
            }), i(function (t) {
                var e = E.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (S.matchesSelector = gt.test(D = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function (t) {
                S.disconnectedMatch = D.call(t, "div"), D.call(t, "[s!='']:x"), I.push("!=", st)
            }), L = L.length && new RegExp(L.join("|")), I = I.length && new RegExp(I.join("|")), e = gt.test($.compareDocumentPosition), F = e || gt.test($.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, W = e ? function (t, e) {
                if (t === e) return P = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !S.sortDetached && e.compareDocumentPosition(t) === n ? t === E || t.ownerDocument === H && F(H, t) ? -1 : e === E || e.ownerDocument === H && F(H, e) ? 1 : J ? tt(J, t) - tt(J, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return P = !0, 0;
                var n, r = 0,
                    i = t.parentNode,
                    s = e.parentNode,
                    a = [t],
                    l = [e];
                if (!i || !s) return t === E ? -1 : e === E ? 1 : i ? -1 : s ? 1 : J ? tt(J, t) - tt(J, e) : 0;
                if (i === s) return o(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[r] === l[r];) r++;
                return r ? o(a[r], l[r]) : a[r] === H ? -1 : l[r] === H ? 1 : 0
            }, E) : E
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== E && O(t), n = n.replace(ut, "='$1']"), S.matchesSelector && M && !B[n + " "] && (!I || !I.test(n)) && (!L || !L.test(n))) try {
                var r = D.call(t, n);
                if (r || S.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (i) {}
            return e(n, E, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== E && O(t), F(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== E && O(t);
            var n = k.attrHandle[e.toLowerCase()],
                r = n && G.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
            return void 0 !== r ? r : S.attributes || !M ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                r = 0,
                i = 0;
            if (P = !S.detectDuplicates, J = !S.sortStable && t.slice(0), t.sort(W), P) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return J = null, t
        }, _ = e.getText = function (t) {
            var e, n = "",
                r = 0,
                i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else
                for (; e = t[r++];) n += _(e);
            return n
        }, k = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(bt, St), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, St), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(bt, St).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = R[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && R(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, r) {
                    return function (i) {
                        var s = e.attr(i, t);
                        return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === r : "!=" === n ? s !== r : "^=" === n ? r && 0 === s.indexOf(r) : "*=" === n ? r && s.indexOf(r) > -1 : "$=" === n ? r && s.slice(-r.length) === r : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(r) > -1 : "|=" === n ? s === r || s.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, n, r, i) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === r && 0 === i ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var c, u, p, h, f, d, m = s !== o ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            y = a && e.nodeName.toLowerCase(),
                            v = !l && !a,
                            w = !1;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? g.firstChild : g.lastChild], o && v) {
                                for (h = g, p = h[N] || (h[N] = {}), u = p[h.uniqueID] || (p[h.uniqueID] = {}), c = u[t] || [], f = c[0] === q && c[1], w = f && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (w = f = 0) || d.pop();)
                                    if (1 === h.nodeType && ++w && h === e) {
                                        u[t] = [q, f, w];
                                        break
                                    }
                            } else if (v && (h = e, p = h[N] || (h[N] = {}), u = p[h.uniqueID] || (p[h.uniqueID] = {}), c = u[t] || [], f = c[0] === q && c[1], w = f), w === !1)
                                for (;
                                    (h = ++f && h && h[m] || (w = f = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++w || (v && (p = h[N] || (h[N] = {}), u = p[h.uniqueID] || (p[h.uniqueID] = {}), u[t] = [q, w]), h !== e)););
                            return w -= i, w === r || w % r === 0 && w / r >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var i, s = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[N] ? s(n) : s.length > 1 ? (i = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                        for (var r, i = s(t, n), o = i.length; o--;) r = tt(t, i[o]), t[r] = !(e[r] = i[o])
                    }) : function (t) {
                        return s(t, 0, i)
                    }) : s
                }
            },
            pseudos: {
                not: r(function (t) {
                    var e = [],
                        n = [],
                        i = A(t.replace(at, "$1"));
                    return i[N] ? r(function (t, e, n, r) {
                        for (var s, o = i(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function (t, r, s) {
                        return e[0] = t, i(e, null, s, n), e[0] = null, !n.pop()
                    }
                }),
                has: r(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function (t) {
                    return t = t.replace(bt, St),
                        function (e) {
                            return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                        }
                }),
                lang: r(function (t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, St).toLowerCase(),
                        function (e) {
                            var n;
                            do
                                if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === $
                },
                focus: function (t) {
                    return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !k.pseudos.empty(t)
                },
                header: function (t) {
                    return mt.test(t.nodeName)
                },
                input: function (t) {
                    return dt.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (t, e) {
                    return [e - 1]
                }),
                eq: c(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function (t, e, n) {
                    for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                    return t
                }),
                gt: c(function (t, e, n) {
                    for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                    return t
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) k.pseudos[b] = l(b);
        return p.prototype = k.filters = k.pseudos, k.setFilters = new p, T = e.tokenize = function (t, n) {
            var r, i, s, o, a, l, c, u = V[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = k.preFilter; a;) {
                (!r || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(s = [])), r = !1, (i = ct.exec(a)) && (r = i.shift(), s.push({
                    value: r,
                    type: i[0].replace(at, " ")
                }), a = a.slice(r.length));
                for (o in k.filter) !(i = ft[o].exec(a)) || c[o] && !(i = c[o](i)) || (r = i.shift(), s.push({
                    value: r,
                    type: o,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? e.error(t) : V(t, l).slice(0)
        }, A = e.compile = function (t, e) {
            var n, r = [],
                i = [],
                s = B[t + " "];
            if (!s) {
                for (e || (e = T(t)), n = e.length; n--;) s = v(e[n]), s[N] ? r.push(s) : i.push(s);
                s = B(t, w(i, r)), s.selector = t
            }
            return s
        }, C = e.select = function (t, e, n, r) {
            var i, s, o, a, l, c = "function" == typeof t && t,
                p = !r && T(t = c.selector || t);
            if (n = n || [], 1 === p.length) {
                if (s = p[0] = p[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && S.getById && 9 === e.nodeType && M && k.relative[s[1].type]) {
                    if (e = (k.find.ID(o.matches[0].replace(bt, St), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (i = ft.needsContext.test(t) ? 0 : s.length; i-- && (o = s[i], !k.relative[a = o.type]);)
                    if ((l = k.find[a]) && (r = l(o.matches[0].replace(bt, St), vt.test(s[0].type) && u(e.parentNode) || e))) {
                        if (s.splice(i, 1), t = r.length && h(s), !t) return K.apply(n, r), n;
                        break
                    }
            }
            return (c || A(t, p))(r, e, !M, n, !e || vt.test(t) && u(e.parentNode) || e), n
        }, S.sortStable = N.split("").sort(W).join("") === N, S.detectDuplicates = !!P, O(), S.sortDetached = i(function (t) {
            return 1 & t.compareDocumentPosition(E.createElement("div"))
        }), i(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), S.attributes && i(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), i(function (t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function (t, e, n) {
            var r;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    ft.find = vt, ft.expr = vt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = vt.uniqueSort, ft.text = vt.getText, ft.isXMLDoc = vt.isXML, ft.contains = vt.contains;
    var wt = function (t, e, n) {
            for (var r = [], i = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (i && ft(t).is(n)) break;
                    r.push(t)
                } return r
        },
        bt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        St = ft.expr.match.needsContext,
        kt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        _t = /^.[^:#\[\.,]*$/;
    ft.filter = function (t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? ft.find.matchesSelector(r, t) ? [r] : [] : ft.find.matches(t, ft.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function (t) {
            var e, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function () {
                for (e = 0; i > e; e++)
                    if (ft.contains(r[e], this)) return !0
            }));
            for (e = 0; i > e; e++) ft.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? ft.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function (t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function (t) {
            return !!r(this, "string" == typeof t && St.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var xt, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        At = ft.fn.init = function (t, e, n) {
            var r, i;
            if (!t) return this;
            if (n = n || xt, "string" == typeof t) {
                if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t), !r || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)), kt.test(r[1]) && ft.isPlainObject(e))
                        for (r in e) ft.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                if (i = rt.getElementById(r[2]), i && i.parentNode) {
                    if (i.id !== r[2]) return xt.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = rt, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this))
        };
    At.prototype = ft.fn, xt = ft(rt);
    var Ct = /^(?:parents|prev(?:Until|All))/,
        jt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function (t) {
            var e, n = ft(t, this),
                r = n.length;
            return this.filter(function () {
                for (e = 0; r > e; e++)
                    if (ft.contains(this, n[e])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, r = 0, i = this.length, s = [], o = St.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        s.push(n);
                        break
                    } return this.pushStack(s.length > 1 ? ft.uniqueSort(s) : s)
        },
        index: function (t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return wt(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return wt(t, "parentNode", n)
        },
        next: function (t) {
            return i(t, "nextSibling")
        },
        prev: function (t) {
            return i(t, "previousSibling")
        },
        nextAll: function (t) {
            return wt(t, "nextSibling")
        },
        prevAll: function (t) {
            return wt(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return wt(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return wt(t, "previousSibling", n)
        },
        siblings: function (t) {
            return bt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return bt(t.firstChild)
        },
        contents: function (t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function (t, e) {
        ft.fn[t] = function (n, r) {
            var i = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = ft.filter(r, i)), this.length > 1 && (jt[t] || (i = ft.uniqueSort(i)), Ct.test(t) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var Jt = /\S+/g;
    ft.Callbacks = function (t) {
        t = "string" == typeof t ? s(t) : ft.extend({}, t);
        var e, n, r, i, o = [],
            a = [],
            l = -1,
            c = function () {
                for (i = t.once, r = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = o.length, n = !1);
                t.memory || (n = !1), e = !1, i && (o = n ? [] : "")
            },
            u = {
                add: function () {
                    return o && (n && !e && (l = o.length - 1, a.push(n)), function r(e) {
                        ft.each(e, function (e, n) {
                            ft.isFunction(n) ? t.unique && u.has(n) || o.push(n) : n && n.length && "string" !== ft.type(n) && r(n)
                        })
                    }(arguments), n && !e && c()), this
                },
                remove: function () {
                    return ft.each(arguments, function (t, e) {
                        for (var n;
                            (n = ft.inArray(e, o, n)) > -1;) o.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function (t) {
                    return t ? ft.inArray(t, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = !0, n || u.disable(), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (t, n) {
                    return i || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return u
    }, ft.extend({
        Deferred: function (t) {
            var e = [
                    ["resolve", "done", ft.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ft.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ft.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return ft.Deferred(function (n) {
                            ft.each(e, function (e, s) {
                                var o = ft.isFunction(t[e]) && t[e];
                                i[s[1]](function () {
                                    var t = o && o.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? ft.extend(t, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ft.each(e, function (t, s) {
                var o = s[2],
                    a = s[3];
                r[s[1]] = o.add, a && o.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function (t) {
            var e, n, r, i = 0,
                s = it.call(arguments),
                o = s.length,
                a = 1 !== o || t && ft.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : ft.Deferred(),
                c = function (t, n, r) {
                    return function (i) {
                        n[t] = this, r[t] = arguments.length > 1 ? it.call(arguments) : i, r === e ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                    }
                };
            if (o > 1)
                for (e = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) s[i] && ft.isFunction(s[i].promise) ? s[i].promise().progress(c(i, n, e)).done(c(i, r, s)).fail(l.reject) : --a;
            return a || l.resolveWith(r, s), l.promise()
        }
    });
    var Pt;
    ft.fn.ready = function (t) {
        return ft.ready.promise().done(t), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function (t) {
            (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || (Pt.resolveWith(rt, [ft]), ft.fn.triggerHandler && (ft(rt).triggerHandler("ready"), ft(rt).off("ready"))))
        }
    }), ft.ready.promise = function (e) {
        if (!Pt)
            if (Pt = ft.Deferred(), "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll) t.setTimeout(ft.ready);
            else if (rt.addEventListener) rt.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
        else {
            rt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && rt.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!ft.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return t.setTimeout(i, 50)
                    }
                    o(), ft.ready()
                }
            }()
        }
        return Pt.promise(e)
    }, ft.ready.promise();
    var Ot;
    for (Ot in ft(pt)) break;
    pt.ownFirst = "0" === Ot, pt.inlineBlockNeedsLayout = !1, ft(function () {
            var t, e, n, r;
            n = rt.getElementsByTagName("body")[0], n && n.style && (e = rt.createElement("div"), r = rt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", pt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function () {
            var t = rt.createElement("div");
            pt.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                pt.deleteExpando = !1
            }
            t = null
        }();
    var Et = function (t) {
            var e = ft.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        },
        $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Mt = /([A-Z])/g;
    ft.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (t) {
                return t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando], !!t && !c(t)
            },
            data: function (t, e, n) {
                return u(t, e, n)
            },
            removeData: function (t, e) {
                return p(t, e)
            },
            _data: function (t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return p(t, e, !0)
            }
        }), ft.fn.extend({
            data: function (t, e) {
                var n, r, i, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (i = ft.data(s), 1 === s.nodeType && !ft._data(s, "parsedAttrs"))) {
                        for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = ft.camelCase(r.slice(5)), l(s, r, i[r])));
                        ft._data(s, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof t ? this.each(function () {
                    ft.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    ft.data(this, t, e)
                }) : s ? l(s, t, ft.data(s, t)) : void 0
            },
            removeData: function (t) {
                return this.each(function () {
                    ft.removeData(this, t)
                })
            }
        }), ft.extend({
            queue: function (t, e, n) {
                var r;
                return t ? (e = (e || "fx") + "queue", r = ft._data(t, e), n && (!r || ft.isArray(n) ? r = ft._data(t, e, ft.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = ft.queue(t, e),
                    r = n.length,
                    i = n.shift(),
                    s = ft._queueHooks(t, e),
                    o = function () {
                        ft.dequeue(t, e)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete s.stop, i.call(t, o, s)), !r && s && s.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return ft._data(t, n) || ft._data(t, n, {
                    empty: ft.Callbacks("once memory").add(function () {
                        ft._removeData(t, e + "queue"), ft._removeData(t, n)
                    })
                })
            }
        }), ft.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = ft.queue(this, t, e);
                    ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    ft.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, r = 1,
                    i = ft.Deferred(),
                    s = this,
                    o = this.length,
                    a = function () {
                        --r || i.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = ft._data(s[o], t + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(e)
            }
        }),
        function () {
            var t;
            pt.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, n, r;
                return n = rt.getElementsByTagName("body")[0], n && n.style ? (e = rt.createElement("div"), r = rt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(rt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(r), t) : void 0
            }
        }();
    var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        It = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
        Dt = ["Top", "Right", "Bottom", "Left"],
        Ft = function (t, e) {
            return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
        },
        Nt = function (t, e, n, r, i, s, o) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === ft.type(n)) {
                i = !0;
                for (a in n) Nt(t, e, a, n[a], !0, s, o)
            } else if (void 0 !== r && (i = !0, ft.isFunction(r) || (o = !0), c && (o ? (e.call(t, r), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(ft(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, o ? r : r.call(t[a], a, e(t[a], n)));
            return i ? t : c ? e.call(t) : l ? e(t[0], n) : s
        },
        Ht = /^(?:checkbox|radio)$/i,
        qt = /<([\w:-]+)/,
        zt = /^$|\/(?:java|ecma)script/i,
        Rt = /^\s+/,
        Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function () {
        var t = rt.createElement("div"),
            e = rt.createDocumentFragment(),
            n = rt.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", pt.leadingWhitespace = 3 === t.firstChild.nodeType, pt.tbody = !t.getElementsByTagName("tbody").length, pt.htmlSerialize = !!t.getElementsByTagName("link").length, pt.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), pt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", pt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = rt.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.noCloneEvent = !!t.addEventListener, t[ft.expando] = 1, pt.attributes = !t.getAttribute(ft.expando)
    }();
    var Bt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: pt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td;
    var Wt = /<|&#?\w+;/,
        Ut = /<tbody/i;
    ! function () {
        var e, n, r = rt.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (pt[e] = n in t) || (r.setAttribute(n, "t"), pt[e] = r.attributes[n].expando === !1);
        r = null
    }();
    var Gt = /^(?:input|select|textarea)$/i,
        Yt = /^key/,
        Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Xt = /^(?:focusinfocus|focusoutblur)$/,
        Kt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var s, o, a, l, c, u, p, h, f, d, m, g = ft._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = ft.guid++), (o = g.events) || (o = g.events = {}), (u = g.handle) || (u = g.handle = function (t) {
                        return "undefined" == typeof ft || t && ft.event.triggered === t.type ? void 0 : ft.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), e = (e || "").match(Jt) || [""], a = e.length; a--;) s = Kt.exec(e[a]) || [], f = m = s[1], d = (s[2] || "").split(".").sort(), f && (c = ft.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = ft.event.special[f] || {}, p = ft.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ft.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, l), (h = o[f]) || (h = o[f] = [], h.delegateCount = 0, c.setup && c.setup.call(t, r, d, u) !== !1 || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, p) : h.push(p), ft.event.global[f] = !0);
                t = null
            }
        },
        remove: function (t, e, n, r, i) {
            var s, o, a, l, c, u, p, h, f, d, m, g = ft.hasData(t) && ft._data(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(Jt) || [""], c = e.length; c--;)
                    if (a = Kt.exec(e[c]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (p = ft.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, h = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) o = h[s], !i && m !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, p.remove && p.remove.call(t, o));
                        l && !h.length && (p.teardown && p.teardown.call(t, d, g.handle) !== !1 || ft.removeEvent(t, f, g.handle), delete u[f])
                    } else
                        for (f in u) ft.event.remove(t, f + e[c], n, r, !0);
                ft.isEmptyObject(u) && (delete g.handle, ft._removeData(t, "events"))
            }
        },
        trigger: function (e, n, r, i) {
            var s, o, a, l, c, u, p, h = [r || rt],
                f = ut.call(e, "type") ? e.type : e,
                d = ut.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = r = r || rt, 3 !== r.nodeType && 8 !== r.nodeType && !Xt.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (d = f.split("."), f = d.shift(), d.sort()), o = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : ft.makeArray(n, [e]), c = ft.event.special[f] || {}, i || !c.trigger || c.trigger.apply(r, n) !== !1)) {
                if (!i && !c.noBubble && !ft.isWindow(r)) {
                    for (l = c.delegateType || f, Xt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                    u === (r.ownerDocument || rt) && h.push(u.defaultView || u.parentWindow || t)
                }
                for (p = 0;
                    (a = h[p++]) && !e.isPropagationStopped();) e.type = p > 1 ? l : c.bindType || f, s = (ft._data(a, "events") || {})[e.type] && ft._data(a, "handle"), s && s.apply(a, n), s = o && a[o], s && s.apply && Et(a) && (e.result = s.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !i && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && Et(r) && o && r[f] && !ft.isWindow(r)) {
                    u = r[o], u && (r[o] = null), ft.event.triggered = f;
                    try {
                        r[f]()
                    } catch (m) {}
                    ft.event.triggered = void 0, u && (r[o] = u)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = ft.event.fix(t);
            var e, n, r, i, s, o = [],
                a = it.call(arguments),
                l = (ft._data(this, "events") || {})[t.type] || [],
                c = ft.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (o = ft.event.handlers.call(this, t, l), e = 0;
                    (i = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, n = 0;
                        (s = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(s.namespace)) && (t.handleObj = s, t.data = s.data, r = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, a), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, r, i, s, o = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], n = 0; a > n; n++) s = e[n], i = s.selector + " ", void 0 === r[i] && (r[i] = s.needsContext ? ft(i, this).index(l) > -1 : ft.find(i, this, null, [l]).length), r[i] && r.push(s);
                        r.length && o.push({
                            elem: l,
                            handlers: r
                        })
                    } return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        fix: function (t) {
            if (t[ft.expando]) return t;
            var e, n, r, i = t.type,
                s = t,
                o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = Qt.test(i) ? this.mouseHooks : Yt.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, t = new ft.Event(s), e = r.length; e--;) n = r[e], t[n] = s[n];
            return t.target || (t.target = s.srcElement || rt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, r, i, s = e.button,
                    o = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || rt, i = r.documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== b() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === b() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return ft.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n) {
            var r = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(r, null, e), r.isDefaultPrevented() && n.preventDefault()
        }
    }, ft.removeEvent = rt.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function (t, e, n) {
        var r = "on" + e;
        t.detachEvent && ("undefined" == typeof t[r] && (t[r] = null), t.detachEvent(r, n))
    }, ft.Event = function (t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : w) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = v, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = v, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = v, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, r = this,
                    i = t.relatedTarget,
                    s = t.handleObj;
                return (!i || i !== r && !ft.contains(r, i)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), pt.submit || (ft.event.special.submit = {
        setup: function () {
            return ft.nodeName(this, "form") ? !1 : void ft.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target,
                    n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : void 0;
                n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function (t) {
                    t._submitBubble = !0
                }), ft._data(n, "submit", !0))
            })
        },
        postDispatch: function (t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function () {
            return ft.nodeName(this, "form") ? !1 : void ft.event.remove(this, "._submit")
        }
    }), pt.change || (ft.event.special.change = {
        setup: function () {
            return Gt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ft.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), ft.event.add(this, "click._change", function (t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
            })), !1) : void ft.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Gt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }), ft._data(e, "change", !0))
            })
        },
        handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return ft.event.remove(this, "._change"), !Gt.test(this.nodeName)
        }
    }), pt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = ft._data(r, e);
                i || r.addEventListener(t, n, !0), ft._data(r, e, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = ft._data(r, e) - 1;
                i ? ft._data(r, e, i) : (r.removeEventListener(t, n, !0), ft._removeData(r, e))
            }
        }
    }), ft.fn.extend({
        on: function (t, e, n, r) {
            return S(this, t, e, n, r)
        },
        one: function (t, e, n, r) {
            return S(this, t, e, n, r, 1)
        },
        off: function (t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ft(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = w), this.each(function () {
                ft.event.remove(this, t, n, e)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? ft.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ne = /<script|<style|<link/i,
        re = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ie = /^true\/(.*)/,
        se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oe = f(rt),
        ae = oe.appendChild(rt.createElement("div"));
    ft.extend({
        htmlPrefilter: function (t) {
            return t.replace(ee, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var r, i, s, o, a, l = ft.contains(t.ownerDocument, t);
            if (pt.html5Clone || ft.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(s = ae.firstChild)), !(pt.noCloneEvent && pt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (r = d(s), a = d(t), o = 0; null != (i = a[o]); ++o) r[o] && A(i, r[o]);
            if (e)
                if (n)
                    for (a = a || d(t), r = r || d(s), o = 0; null != (i = a[o]); o++) T(i, r[o]);
                else T(t, s);
            return r = d(s, "script"), r.length > 0 && m(r, !l && d(t, "script")), r = a = i = null, s
        },
        cleanData: function (t, e) {
            for (var n, r, i, s, o = 0, a = ft.expando, l = ft.cache, c = pt.attributes, u = ft.event.special; null != (n = t[o]); o++)
                if ((e || Et(n)) && (i = n[a], s = i && l[i])) {
                    if (s.events)
                        for (r in s.events) u[r] ? ft.event.remove(n, r) : ft.removeEvent(n, r, s.handle);
                    l[i] && (delete l[i], c || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(i))
                }
        }
    }), ft.fn.extend({
        domManip: C,
        detach: function (t) {
            return j(this, t, !0)
        },
        remove: function (t) {
            return j(this, t)
        },
        text: function (t) {
            return Nt(this, function (t) {
                return void 0 === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return C(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = k(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return C(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = k(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return C(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return C(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(d(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return ft.clone(this, t, e)
            })
        },
        html: function (t) {
            return Nt(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                if ("string" == typeof t && !ne.test(t) && (pt.htmlSerialize || !te.test(t)) && (pt.leadingWhitespace || !Rt.test(t)) && !Bt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(d(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return C(this, arguments, function (e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(d(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ft.fn[t] = function (t) {
            for (var n, r = 0, i = [], s = ft(t), o = s.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0), ft(s[r])[e](n), ot.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var le, ce = {
            HTML: "block",
            BODY: "block"
        },
        ue = /^margin/,
        pe = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
        he = function (t, e, n, r) {
            var i, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            i = n.apply(t, r || []);
            for (s in e) t.style[s] = o[s];
            return i
        },
        fe = rt.documentElement;
    ! function () {
        function e() {
            var e, u, p = rt.documentElement;
            p.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = a = !1, r = o = !0, t.getComputedStyle && (u = t.getComputedStyle(c), n = "1%" !== (u || {}).top, a = "2px" === (u || {}).marginLeft, i = "4px" === (u || {
                width: "4px"
            }).width, c.style.marginRight = "50%", r = "4px" === (u || {
                marginRight: "4px"
            }).marginRight, e = c.appendChild(rt.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", s = 0 === c.getClientRects().length, s && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                c.childNodes[0].style.borderCollapse = "separate", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === e[0].offsetHeight, s && (e[0].style.display = "", e[1].style.display = "none", s = 0 === e[0].offsetHeight)), p.removeChild(l)
        }
        var n, r, i, s, o, a, l = rt.createElement("div"),
            c = rt.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", pt.opacity = "0.5" === c.style.opacity, pt.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", pt.clearCloneStyle = "content-box" === c.style.backgroundClip, l = rt.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), pt.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ft.extend(pt, {
            reliableHiddenOffsets: function () {
                return null == n && e(), s
            },
            boxSizingReliable: function () {
                return null == n && e(), i
            },
            pixelMarginRight: function () {
                return null == n && e(), r
            },
            pixelPosition: function () {
                return null == n && e(), n
            },
            reliableMarginRight: function () {
                return null == n && e(), o
            },
            reliableMarginLeft: function () {
                return null == n && e(), a
            }
        }))
    }();
    var de, me, ge = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (de = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, me = function (t, e, n) {
        var r, i, s, o, a = t.style;
        return n = n || de(t), o = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== o && void 0 !== o || ft.contains(t.ownerDocument, t) || (o = ft.style(t, e)), n && !pt.pixelMarginRight() && pe.test(o) && ue.test(e) && (r = a.width, i = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = r, a.minWidth = i, a.maxWidth = s), void 0 === o ? o : o + ""
    }) : fe.currentStyle && (de = function (t) {
        return t.currentStyle
    }, me = function (t, e, n) {
        var r, i, s, o, a = t.style;
        return n = n || de(t), o = n ? n[e] : void 0, null == o && a && a[e] && (o = a[e]), pe.test(o) && !ge.test(e) && (r = a.left, i = t.runtimeStyle, s = i && i.left, s && (i.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = r, s && (i.left = s)), void 0 === o ? o : o + "" || "auto"
    });
    var ye = /alpha\([^)]*\)/i,
        ve = /opacity\s*=\s*([^)]*)/i,
        we = /^(none|table(?!-c[ea]).+)/,
        be = new RegExp("^(" + Lt + ")(.*)$", "i"),
        Se = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ke = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _e = ["Webkit", "O", "Moz", "ms"],
        xe = rt.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = me(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": pt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, s, o, a = ft.camelCase(e),
                    l = t.style;
                if (e = ft.cssProps[a] || (ft.cssProps[a] = E(a) || a), o = ft.cssHooks[e] || ft.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(t, !1, r)) ? i : l[e];
                if (s = typeof n, "string" === s && (i = It.exec(n)) && i[1] && (n = h(t, e, i), s = "number"), null != n && n === n && ("number" === s && (n += i && i[3] || (ft.cssNumber[a] ? "" : "px")), pt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(t, n, r))))) try {
                    l[e] = n
                } catch (c) {}
            }
        },
        css: function (t, e, n, r) {
            var i, s, o, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = E(a) || a), o = ft.cssHooks[e] || ft.cssHooks[a], o && "get" in o && (s = o.get(t, !0, n)), void 0 === s && (s = me(t, e, r)), "normal" === s && e in ke && (s = ke[e]), "" === n || n ? (i = parseFloat(s), n === !0 || isFinite(i) ? i || 0 : s) : s
        }
    }), ft.each(["height", "width"], function (t, e) {
        ft.cssHooks[e] = {
            get: function (t, n, r) {
                return n ? we.test(ft.css(t, "display")) && 0 === t.offsetWidth ? he(t, Se, function () {
                    return I(t, e, r)
                }) : I(t, e, r) : void 0
            },
            set: function (t, n, r) {
                var i = r && de(t);
                return M(t, n, r ? L(t, e, r, pt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), pt.opacity || (ft.cssHooks.opacity = {
        get: function (t, e) {
            return ve.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var n = t.style,
                r = t.currentStyle,
                i = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ft.trim(s.replace(ye, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = ye.test(s) ? s.replace(ye, i) : s + " " + i)
        }
    }), ft.cssHooks.marginRight = O(pt.reliableMarginRight, function (t, e) {
        return e ? he(t, {
            display: "inline-block"
        }, me, [t, "marginRight"]) : void 0
    }), ft.cssHooks.marginLeft = O(pt.reliableMarginLeft, function (t, e) {
        return e ? (parseFloat(me(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - he(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        ft.cssHooks[t + e] = {
            expand: function (n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + Dt[r] + e] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, ue.test(t) || (ft.cssHooks[t + e].set = M)
    }), ft.fn.extend({
        css: function (t, e) {
            return Nt(this, function (t, e, n) {
                var r, i, s = {},
                    o = 0;
                if (ft.isArray(e)) {
                    for (r = de(t), i = e.length; i > o; o++) s[e[o]] = ft.css(t, e[o], !1, r);
                    return s
                }
                return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return $(this, !0)
        },
        hide: function () {
            return $(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ft(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }), ft.Tween = D, D.prototype = {
        constructor: D,
        init: function (t, e, n, r, i, s) {
            this.elem = t, this.prop = n, this.easing = i || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = s || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function (t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = D.prototype.init, ft.fx.step = {};
    var Te, Ae, Ce = /^(?:toggle|show|hide)$/,
        je = /queueHooks$/;
    ft.Animation = ft.extend(R, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return h(n.elem, t, It.exec(e), n), n
                }]
            },
            tweener: function (t, e) {
                ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Jt);
                for (var n, r = 0, i = t.length; i > r; r++) n = t[r], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(e)
            },
            prefilters: [q],
            prefilter: function (t, e) {
                e ? R.prefilters.unshift(t) : R.prefilters.push(t)
            }
        }), ft.speed = function (t, e, n) {
            var r = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: n || !n && e || ft.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ft.isFunction(e) && e
            };
            return r.duration = ft.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ft.fx.speeds ? ft.fx.speeds[r.duration] : ft.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                ft.isFunction(r.old) && r.old.call(this), r.queue && ft.dequeue(this, r.queue)
            }, r
        }, ft.fn.extend({
            fadeTo: function (t, e, n, r) {
                return this.filter(Ft).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, r)
            },
            animate: function (t, e, n, r) {
                var i = ft.isEmptyObject(t),
                    s = ft.speed(e, n, r),
                    o = function () {
                        var e = R(this, ft.extend({}, t), s);
                        (i || ft._data(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function (t, e, n) {
                var r = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        i = null != t && t + "queueHooks",
                        s = ft.timers,
                        o = ft._data(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && je.test(i) && r(o[i]);
                    for (i = s.length; i--;) s[i].elem !== this || null != t && s[i].queue !== t || (s[i].anim.stop(n), e = !1, s.splice(i, 1));
                    (e || !n) && ft.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = ft._data(this),
                        r = n[t + "queue"],
                        i = n[t + "queueHooks"],
                        s = ft.timers,
                        o = r ? r.length : 0;
                    for (n.finish = !0, ft.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; o > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ft.each(["toggle", "show", "hide"], function (t, e) {
            var n = ft.fn[e];
            ft.fn[e] = function (t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, r, i)
            }
        }), ft.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            ft.fn[t] = function (t, n, r) {
                return this.animate(e, t, n, r)
            }
        }), ft.timers = [], ft.fx.tick = function () {
            var t, e = ft.timers,
                n = 0;
            for (Te = ft.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || ft.fx.stop(), Te = void 0
        }, ft.fx.timer = function (t) {
            ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
        }, ft.fx.interval = 13, ft.fx.start = function () {
            Ae || (Ae = t.setInterval(ft.fx.tick, ft.fx.interval))
        }, ft.fx.stop = function () {
            t.clearInterval(Ae), Ae = null
        }, ft.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ft.fn.delay = function (e, n) {
            return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, r) {
                var i = t.setTimeout(n, e);
                r.stop = function () {
                    t.clearTimeout(i)
                }
            })
        },
        function () {
            var t, e = rt.createElement("input"),
                n = rt.createElement("div"),
                r = rt.createElement("select"),
                i = r.appendChild(rt.createElement("option"));
            n = rt.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", pt.getSetAttribute = "t" !== n.className, pt.style = /top/.test(t.getAttribute("style")), pt.hrefNormalized = "/a" === t.getAttribute("href"), pt.checkOn = !!e.value, pt.optSelected = i.selected, pt.enctype = !!rt.createElement("form").enctype, r.disabled = !0, pt.optDisabled = !i.disabled, e = rt.createElement("input"), e.setAttribute("value", ""), pt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), pt.radioValue = "t" === e.value
        }();
    var Je = /\r/g,
        Pe = /[\x20\t\r\n\f]+/g;
    ft.fn.extend({
        val: function (t) {
            var e, n, r, i = this[0]; {
                if (arguments.length) return r = ft.isFunction(t), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? t.call(this, n, ft(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : ft.isArray(i) && (i = ft.map(i, function (t) {
                        return null == t ? "" : t + ""
                    })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                });
                if (i) return e = ft.valHooks[i.type] || ft.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Je, "") : null == n ? "" : n)
            }
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t)).replace(Pe, " ")
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, s = "select-one" === t.type || 0 > i, o = s ? null : [], a = s ? i + 1 : r.length, l = 0 > i ? a : s ? i : 0; a > l; l++)
                        if (n = r[l], (n.selected || l === i) && (pt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), s) return e;
                            o.push(e)
                        } return o
                },
                set: function (t, e) {
                    for (var n, r, i = t.options, s = ft.makeArray(e), o = i.length; o--;)
                        if (r = i[o], ft.inArray(ft.valHooks.option.get(r), s) > -1) try {
                            r.selected = n = !0
                        } catch (a) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (t.selectedIndex = -1), i
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function () {
        ft.valHooks[this] = {
            set: function (t, e) {
                return ft.isArray(e) ? t.checked = ft.inArray(ft(t).val(), e) > -1 : void 0
            }
        }, pt.checkOn || (ft.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Oe, Ee, $e = ft.expr.attrHandle,
        Me = /^(?:checked|selected)$/i,
        Le = pt.getSetAttribute,
        Ie = pt.input;
    ft.fn.extend({
        attr: function (t, e) {
            return Nt(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function (t, e, n) {
            var r, i, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === s && ft.isXMLDoc(t) || (e = e.toLowerCase(), i = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Ee : Oe)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = ft.find.attr(t, e), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!pt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, r, i = 0,
                s = e && e.match(Jt);
            if (s && 1 === t.nodeType)
                for (; n = s[i++];) r = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? Ie && Le || !Me.test(n) ? t[r] = !1 : t[ft.camelCase("default-" + n)] = t[r] = !1 : ft.attr(t, n, ""), t.removeAttribute(Le ? n : r)
        }
    }), Ee = {
        set: function (t, e, n) {
            return e === !1 ? ft.removeAttr(t, n) : Ie && Le || !Me.test(n) ? t.setAttribute(!Le && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = $e[e] || ft.find.attr;
        Ie && Le || !Me.test(e) ? $e[e] = function (t, e, r) {
            var i, s;
            return r || (s = $e[e], $e[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, $e[e] = s), i
        } : $e[e] = function (t, e, n) {
            return n ? void 0 : t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ie && Le || (ft.attrHooks.value = {
        set: function (t, e, n) {
            return ft.nodeName(t, "input") ? void(t.defaultValue = e) : Oe && Oe.set(t, e, n)
        }
    }), Le || (Oe = {
        set: function (t, e, n) {
            var r = t.getAttributeNode(n);
            return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, $e.id = $e.name = $e.coords = function (t, e, n) {
        var r;
        return n ? void 0 : (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
    }, ft.valHooks.button = {
        get: function (t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Oe.set
    }, ft.attrHooks.contenteditable = {
        set: function (t, e, n) {
            Oe.set(t, "" === e ? !1 : e, n)
        }
    }, ft.each(["width", "height"], function (t, e) {
        ft.attrHooks[e] = {
            set: function (t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), pt.style || (ft.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var De = /^(?:input|select|textarea|button|object)$/i,
        Fe = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function (t, e) {
            return Nt(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = ft.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), ft.extend({
        prop: function (t, e, n) {
            var r, i, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, i = ft.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : De.test(t.nodeName) || Fe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), pt.hrefNormalized || ft.each(["href", "src"], function (t, e) {
        ft.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), pt.optSelected || (ft.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ft.propFix[this.toLowerCase()] = this
    }), pt.enctype || (ft.propFix.enctype = "encoding");
    var Ne = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function (t) {
            var e, n, r, i, s, o, a, l = 0;
            if (ft.isFunction(t)) return this.each(function (e) {
                ft(this).addClass(t.call(this, e, V(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Jt) || []; n = this[l++];)
                    if (i = V(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ne, " ")) {
                        for (o = 0; s = e[o++];) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                        a = ft.trim(r), i !== a && ft.attr(n, "class", a)
                    } return this
        },
        removeClass: function (t) {
            var e, n, r, i, s, o, a, l = 0;
            if (ft.isFunction(t)) return this.each(function (e) {
                ft(this).removeClass(t.call(this, e, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Jt) || []; n = this[l++];)
                    if (i = V(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ne, " ")) {
                        for (o = 0; s = e[o++];)
                            for (; r.indexOf(" " + s + " ") > -1;) r = r.replace(" " + s + " ", " ");
                        a = ft.trim(r), i !== a && ft.attr(n, "class", a)
                    } return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function (n) {
                ft(this).toggleClass(t.call(this, n, V(this), e), e)
            }) : this.each(function () {
                var e, r, i, s;
                if ("string" === n)
                    for (r = 0, i = ft(this), s = t.match(Jt) || []; e = s[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else(void 0 === t || "boolean" === n) && (e = V(this), e && ft._data(this, "__className__", e), ft.attr(this, "class", e || t === !1 ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + V(n) + " ").replace(Ne, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ft.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var He = t.location,
        qe = ft.now(),
        ze = /\?/,
        Re = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, r = null,
            i = ft.trim(e + "");
        return i && !ft.trim(i.replace(Re, function (t, e, i, s) {
            return n && e && (r = 0), 0 === r ? t : (n = i || e, r += !s - !i, "")
        })) ? Function("return " + i)() : ft.error("Invalid JSON: " + e)
    }, ft.parseXML = function (e) {
        var n, r;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (r = new t.DOMParser, n = r.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
    };
    var Ve = /#.*$/,
        Be = /([?&])_=[^&]*/,
        We = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ue = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ge = /^(?:GET|HEAD)$/,
        Ye = /^\/\//,
        Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Xe = {},
        Ke = {},
        Ze = "*/".concat("*"),
        tn = He.href,
        en = Qe.exec(tn.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tn,
            type: "GET",
            isLocal: Ue.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? U(U(t, ft.ajaxSettings), e) : U(ft.ajaxSettings, t)
        },
        ajaxPrefilter: B(Xe),
        ajaxTransport: B(Ke),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var s, p, v, w, S, _ = n;
                2 !== b && (b = 2, l && t.clearTimeout(l), u = void 0, a = i || "", k.readyState = e > 0 ? 4 : 0, s = e >= 200 && 300 > e || 304 === e, r && (w = G(h, k, r)), w = Y(h, w, k, s), s ? (h.ifModified && (S = k.getResponseHeader("Last-Modified"), S && (ft.lastModified[o] = S), S = k.getResponseHeader("etag"), S && (ft.etag[o] = S)), 204 === e || "HEAD" === h.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, p = w.data, v = w.error, s = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || _) + "", s ? m.resolveWith(f, [p, _, k]) : m.rejectWith(f, [k, _, v]), k.statusCode(y), y = void 0, c && d.trigger(s ? "ajaxSuccess" : "ajaxError", [k, h, s ? p : v]), g.fireWith(f, [k, _]), c && (d.trigger("ajaxComplete", [k, h]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var i, s, o, a, l, c, u, p, h = ft.ajaxSetup({}, n),
                f = h.context || h,
                d = h.context && (f.nodeType || f.jquery) ? ft(f) : ft.event,
                m = ft.Deferred(),
                g = ft.Callbacks("once memory"),
                y = h.statusCode || {},
                v = {},
                w = {},
                b = 0,
                S = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!p)
                                for (p = {}; e = We.exec(a);) p[e[1].toLowerCase()] = e[2];
                            e = p[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = w[n] = w[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) y[e] = [y[e], t[e]];
                            else k.always(t[k.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || S;
                        return u && u.abort(e), r(0, e), this
                    }
                };
            if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, h.url = ((e || h.url || tn) + "").replace(Ve, "").replace(Ye, en[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ft.trim(h.dataType || "*").toLowerCase().match(Jt) || [""], null == h.crossDomain && (i = Qe.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ft.param(h.data, h.traditional)), W(Xe, h, n, k), 2 === b) return k;
            c = ft.event && h.global, c && 0 === ft.active++ && ft.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ge.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ze.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Be.test(o) ? o.replace(Be, "$1_=" + qe++) : o + (ze.test(o) ? "&" : "?") + "_=" + qe++)), h.ifModified && (ft.lastModified[o] && k.setRequestHeader("If-Modified-Since", ft.lastModified[o]), ft.etag[o] && k.setRequestHeader("If-None-Match", ft.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : h.accepts["*"]);
            for (s in h.headers) k.setRequestHeader(s, h.headers[s]);
            if (h.beforeSend && (h.beforeSend.call(f, k, h) === !1 || 2 === b)) return k.abort();
            S = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[s](h[s]);
            if (u = W(Ke, h, n, k)) {
                if (k.readyState = 1, c && d.trigger("ajaxSend", [k, h]), 2 === b) return k;
                h.async && h.timeout > 0 && (l = t.setTimeout(function () {
                    k.abort("timeout")
                }, h.timeout));
                try {
                    b = 1, u.send(v, r)
                } catch (_) {
                    if (!(2 > b)) throw _;
                    r(-1, _)
                }
            } else r(-1, "No Transport");
            return k
        },
        getJSON: function (t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function (t, e) {
        ft[e] = function (t, n, r, i) {
            return ft.isFunction(n) && (i = i || r, r = n, n = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function (t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function (t) {
            if (ft.isFunction(t)) return this.each(function (e) {
                ft(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return ft.isFunction(t) ? this.each(function (e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ft(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = ft.isFunction(t);
            return this.each(function (n) {
                ft(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ft.expr.filters.hidden = function (t) {
        return pt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : X(t)
    }, ft.expr.filters.visible = function (t) {
        return !ft.expr.filters.hidden(t)
    };
    var nn = /%20/g,
        rn = /\[\]$/,
        sn = /\r?\n/g,
        on = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    ft.param = function (t, e) {
        var n, r = [],
            i = function (t, e) {
                e = ft.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function () {
            i(this.name, this.value)
        });
        else
            for (n in t) K(n, t[n], e, i);
        return r.join("&").replace(nn, "+")
    }, ft.fn.extend({
        serialize: function () {
            return ft.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && an.test(this.nodeName) && !on.test(t) && (this.checked || !Ht.test(t))
            }).map(function (t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(sn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(sn, "\r\n")
                }
            }).get()
        }
    }), ft.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return this.isLocal ? tt() : rt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var ln = 0,
        cn = {},
        un = ft.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
        for (var t in cn) cn[t](void 0, !0)
    }), pt.cors = !!un && "withCredentials" in un, un = pt.ajax = !!un, un && ft.ajaxTransport(function (e) {
        if (!e.crossDomain || pt.cors) {
            var n;
            return {
                send: function (r, i) {
                    var s, o = e.xhr(),
                        a = ++ln;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) o[s] = e.xhrFields[s];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) void 0 !== r[s] && o.setRequestHeader(s, r[s] + "");
                    o.send(e.hasContent && e.data || null), n = function (t, r) {
                        var s, l, c;
                        if (n && (r || 4 === o.readyState))
                            if (delete cn[a], n = void 0, o.onreadystatechange = ft.noop, r) 4 !== o.readyState && o.abort();
                            else {
                                c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (u) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            } c && i(s, l, c, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? t.setTimeout(n) : o.onreadystatechange = cn[a] = n : n()
                },
                abort: function () {
                    n && n(void 0, !0)
                }
            }
        }
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ft.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n = rt.head || ft("head")[0] || rt.documentElement;
            return {
                send: function (r, i) {
                    e = rt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var pn = [],
        hn = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = pn.pop() || ft.expando + "_" + qe++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i, s, o, a = e.jsonp !== !1 && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(hn, "$1" + i) : e.jsonp !== !1 && (e.url += (ze.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return o || ft.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[i], t[i] = function () {
            o = arguments
        }, r.always(function () {
            void 0 === s ? ft(t).removeProp(i) : t[i] = s, e[i] && (e.jsonpCallback = n.jsonpCallback, pn.push(i)), o && ft.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), ft.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || rt;
        var r = kt.exec(t),
            i = !n && [];
        return r ? [e.createElement(r[1])] : (r = y([t], e, i), i && i.length && ft(i).remove(), ft.merge([], r.childNodes))
    };
    var fn = ft.fn.load;
    ft.fn.load = function (t, e, n) {
        if ("string" != typeof t && fn) return fn.apply(this, arguments);
        var r, i, s, o = this,
            a = t.indexOf(" ");
        return a > -1 && (r = ft.trim(t.slice(a, t.length)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), o.length > 0 && ft.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, o.html(r ? ft("<div>").append(ft.parseHTML(t)).find(r) : t)
        }).always(n && function (t, e) {
            o.each(function () {
                n.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ft.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ft.expr.filters.animated = function (t) {
        return ft.grep(ft.timers, function (e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function (t, e, n) {
            var r, i, s, o, a, l, c, u = ft.css(t, "position"),
                p = ft(t),
                h = {};
            "static" === u && (t.style.position = "relative"), a = p.offset(), s = ft.css(t, "top"), l = ft.css(t, "left"), c = ("absolute" === u || "fixed" === u) && ft.inArray("auto", [s, l]) > -1, c ? (r = p.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + i), "using" in e ? e.using.call(t, h) : p.css(h)
        }
    }, ft.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                ft.offset.setOffset(this, t, e)
            });
            var e, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                s = i && i.ownerDocument;
            if (s) return e = s.documentElement, ft.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = et(s), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r
        },
        position: function () {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ft.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ft.css(r, "marginTop", !0),
                    left: e.left - n.left - ft.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || fe
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = /Y/.test(e);
        ft.fn[t] = function (r) {
            return Nt(this, function (t, r, i) {
                var s = et(t);
                return void 0 === i ? s ? e in s ? s[e] : s.document.documentElement[r] : t[r] : void(s ? s.scrollTo(n ? ft(s).scrollLeft() : i, n ? i : ft(s).scrollTop()) : t[r] = i)
            }, t, r, arguments.length, null)
        }
    }), ft.each(["top", "left"], function (t, e) {
        ft.cssHooks[e] = O(pt.pixelPosition, function (t, n) {
            return n ? (n = me(t, e), pe.test(n) ? ft(t).position()[e] + "px" : n) : void 0
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, r) {
            ft.fn[r] = function (r, i) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return Nt(this, function (e, n, r) {
                    var i;
                    return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? ft.css(e, n, o) : ft.style(e, n, r, o)
                }, e, s ? r : void 0, s, null)
            }
        })
    }), ft.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), ft.fn.size = function () {
        return this.length
    }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ft
    });
    var dn = t.jQuery,
        mn = t.$;
    return ft.noConflict = function (e) {
        return t.$ === ft && (t.$ = mn), e && t.jQuery === ft && (t.jQuery = dn), ft
    }, e || (t.jQuery = t.$ = ft), ft
}), ! function (t) {
    t.fn.classes = function (e) {
        var n = [];
        if (t.each(this, function (t, e) {
                var r = e.className.split(/\s+/);
                for (var i in r) {
                    var s = r[i]; - 1 === n.indexOf(s) && n.push(s)
                }
            }), "function" == typeof e)
            for (var r in n) e(n[r]);
        return n
    }
}(jQuery),
function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return e(t, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("jquery")) : e(t, jQuery)
}("undefined" != typeof window ? window : this, function (t, e, n) {
    "use strict";

    function r() {
        "hidden" !== i && (o.hidden = l.pageVisibility ? o[i] : n)
    }
    for (var i, s, o = t.document, a = ["webkit", "o", "ms", "moz", ""], l = e.support || {}, c = ("onfocusin" in o && "hasFocus" in o ? "focusin focusout" : "focus blur");
        (s = a.pop()) !== n;)
        if (i = (s ? s + "H" : "h") + "idden", l.pageVisibility = o[i] !== n, l.pageVisibility) {
            c = s + "visibilitychange";
            break
        } r(), e(/blur$/.test(c) ? t : o).on(c, function (t) {
        var s = t.type,
            a = t.originalEvent;
        if (a) {
            var l = a.toElement;
            (!/^focus./.test(s) || l === n && a.fromElement === n && a.relatedTarget === n) && e(o).triggerHandler(i && o[i] || /^(?:blur|focusout)$/.test(s) ? "hide" : "show"), r()
        }
    })
}),
function () {
    function t(t) {
        function e(e, n, r, i, s, o) {
            for (; s >= 0 && o > s; s += t) {
                var a = i ? i[s] : s;
                r = n(r, e[a], a, e)
            }
            return r
        }
        return function (n, r, i, s) {
            r = w(r, s, 4);
            var o = !A(n) && v.keys(n),
                a = (o || n).length,
                l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (i = n[o ? o[l] : l], l += t), e(n, r, i, o, l, a)
        }
    }

    function e(t) {
        return function (e, n, r) {
            n = b(n, r);
            for (var i = T(e), s = t > 0 ? 0 : i - 1; s >= 0 && i > s; s += t)
                if (n(e[s], s, e)) return s;
            return -1
        }
    }

    function n(t, e, n) {
        return function (r, i, s) {
            var o = 0,
                a = T(r);
            if ("number" == typeof s) t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
            else if (n && s && a) return s = n(r, i), r[s] === i ? s : -1;
            if (i !== i) return s = e(u.call(r, o, a), v.isNaN), s >= 0 ? s + o : -1;
            for (s = t > 0 ? o : a - 1; s >= 0 && a > s; s += t)
                if (r[s] === i) return s;
            return -1
        }
    }

    function r(t, e) {
        var n = O.length,
            r = t.constructor,
            i = v.isFunction(r) && r.prototype || a,
            s = "constructor";
        for (v.has(t, s) && !v.contains(e, s) && e.push(s); n--;) s = O[n], s in t && t[s] !== i[s] && !v.contains(e, s) && e.push(s)
    }
    var i = this,
        s = i._,
        o = Array.prototype,
        a = Object.prototype,
        l = Function.prototype,
        c = o.push,
        u = o.slice,
        p = a.toString,
        h = a.hasOwnProperty,
        f = Array.isArray,
        d = Object.keys,
        m = l.bind,
        g = Object.create,
        y = function () {},
        v = function (t) {
            return t instanceof v ? t : this instanceof v ? void(this._wrapped = t) : new v(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : i._ = v, v.VERSION = "1.8.3";
    var w = function (t, e, n) {
            if (void 0 === e) return t;
            switch (null == n ? 3 : n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i)
                    };
                case 4:
                    return function (n, r, i, s) {
                        return t.call(e, n, r, i, s)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        b = function (t, e, n) {
            return null == t ? v.identity : v.isFunction(t) ? w(t, e, n) : v.isObject(t) ? v.matcher(t) : v.property(t)
        };
    v.iteratee = function (t, e) {
        return b(t, e, 1 / 0)
    };
    var S = function (t, e) {
            return function (n) {
                var r = arguments.length;
                if (2 > r || null == n) return n;
                for (var i = 1; r > i; i++)
                    for (var s = arguments[i], o = t(s), a = o.length, l = 0; a > l; l++) {
                        var c = o[l];
                        e && void 0 !== n[c] || (n[c] = s[c])
                    }
                return n
            }
        },
        k = function (t) {
            if (!v.isObject(t)) return {};
            if (g) return g(t);
            y.prototype = t;
            var e = new y;
            return y.prototype = null, e
        },
        _ = function (t) {
            return function (e) {
                return null == e ? void 0 : e[t]
            }
        },
        x = Math.pow(2, 53) - 1,
        T = _("length"),
        A = function (t) {
            var e = T(t);
            return "number" == typeof e && e >= 0 && x >= e
        };
    v.each = v.forEach = function (t, e, n) {
        e = w(e, n);
        var r, i;
        if (A(t))
            for (r = 0, i = t.length; i > r; r++) e(t[r], r, t);
        else {
            var s = v.keys(t);
            for (r = 0, i = s.length; i > r; r++) e(t[s[r]], s[r], t)
        }
        return t
    }, v.map = v.collect = function (t, e, n) {
        e = b(e, n);
        for (var r = !A(t) && v.keys(t), i = (r || t).length, s = Array(i), o = 0; i > o; o++) {
            var a = r ? r[o] : o;
            s[o] = e(t[a], a, t)
        }
        return s
    }, v.reduce = v.foldl = v.inject = t(1), v.reduceRight = v.foldr = t(-1), v.find = v.detect = function (t, e, n) {
        var r;
        return r = A(t) ? v.findIndex(t, e, n) : v.findKey(t, e, n), void 0 !== r && -1 !== r ? t[r] : void 0
    }, v.filter = v.select = function (t, e, n) {
        var r = [];
        return e = b(e, n), v.each(t, function (t, n, i) {
            e(t, n, i) && r.push(t)
        }), r
    }, v.reject = function (t, e, n) {
        return v.filter(t, v.negate(b(e)), n)
    }, v.every = v.all = function (t, e, n) {
        e = b(e, n);
        for (var r = !A(t) && v.keys(t), i = (r || t).length, s = 0; i > s; s++) {
            var o = r ? r[s] : s;
            if (!e(t[o], o, t)) return !1
        }
        return !0
    }, v.some = v.any = function (t, e, n) {
        e = b(e, n);
        for (var r = !A(t) && v.keys(t), i = (r || t).length, s = 0; i > s; s++) {
            var o = r ? r[s] : s;
            if (e(t[o], o, t)) return !0
        }
        return !1
    }, v.contains = v.includes = v.include = function (t, e, n, r) {
        return A(t) || (t = v.values(t)), ("number" != typeof n || r) && (n = 0), v.indexOf(t, e, n) >= 0
    }, v.invoke = function (t, e) {
        var n = u.call(arguments, 2),
            r = v.isFunction(e);
        return v.map(t, function (t) {
            var i = r ? e : t[e];
            return null == i ? i : i.apply(t, n)
        })
    }, v.pluck = function (t, e) {
        return v.map(t, v.property(e))
    }, v.where = function (t, e) {
        return v.filter(t, v.matcher(e))
    }, v.findWhere = function (t, e) {
        return v.find(t, v.matcher(e))
    }, v.max = function (t, e, n) {
        var r, i, s = -(1 / 0),
            o = -(1 / 0);
        if (null == e && null != t) {
            t = A(t) ? t : v.values(t);
            for (var a = 0, l = t.length; l > a; a++) r = t[a], r > s && (s = r)
        } else e = b(e, n), v.each(t, function (t, n, r) {
            i = e(t, n, r), (i > o || i === -(1 / 0) && s === -(1 / 0)) && (s = t, o = i)
        });
        return s
    }, v.min = function (t, e, n) {
        var r, i, s = 1 / 0,
            o = 1 / 0;
        if (null == e && null != t) {
            t = A(t) ? t : v.values(t);
            for (var a = 0, l = t.length; l > a; a++) r = t[a], s > r && (s = r)
        } else e = b(e, n), v.each(t, function (t, n, r) {
            i = e(t, n, r), (o > i || i === 1 / 0 && s === 1 / 0) && (s = t, o = i)
        });
        return s
    }, v.shuffle = function (t) {
        for (var e, n = A(t) ? t : v.values(t), r = n.length, i = Array(r), s = 0; r > s; s++) e = v.random(0, s), e !== s && (i[s] = i[e]), i[e] = n[s];
        return i
    }, v.sample = function (t, e, n) {
        return null == e || n ? (A(t) || (t = v.values(t)), t[v.random(t.length - 1)]) : v.shuffle(t).slice(0, Math.max(0, e))
    }, v.sortBy = function (t, e, n) {
        return e = b(e, n), v.pluck(v.map(t, function (t, n, r) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, r)
            }
        }).sort(function (t, e) {
            var n = t.criteria,
                r = e.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var C = function (t) {
        return function (e, n, r) {
            var i = {};
            return n = b(n, r), v.each(e, function (r, s) {
                var o = n(r, s, e);
                t(i, r, o)
            }), i
        }
    };
    v.groupBy = C(function (t, e, n) {
        v.has(t, n) ? t[n].push(e) : t[n] = [e]
    }), v.indexBy = C(function (t, e, n) {
        t[n] = e
    }), v.countBy = C(function (t, e, n) {
        v.has(t, n) ? t[n]++ : t[n] = 1
    }), v.toArray = function (t) {
        return t ? v.isArray(t) ? u.call(t) : A(t) ? v.map(t, v.identity) : v.values(t) : []
    }, v.size = function (t) {
        return null == t ? 0 : A(t) ? t.length : v.keys(t).length
    }, v.partition = function (t, e, n) {
        e = b(e, n);
        var r = [],
            i = [];
        return v.each(t, function (t, n, s) {
            (e(t, n, s) ? r : i).push(t)
        }), [r, i]
    }, v.first = v.head = v.take = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : v.initial(t, t.length - e)
    }, v.initial = function (t, e, n) {
        return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }, v.last = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e))
    }, v.rest = v.tail = v.drop = function (t, e, n) {
        return u.call(t, null == e || n ? 1 : e)
    }, v.compact = function (t) {
        return v.filter(t, v.identity)
    };
    var j = function (t, e, n, r) {
        for (var i = [], s = 0, o = r || 0, a = T(t); a > o; o++) {
            var l = t[o];
            if (A(l) && (v.isArray(l) || v.isArguments(l))) {
                e || (l = j(l, e, n));
                var c = 0,
                    u = l.length;
                for (i.length += u; u > c;) i[s++] = l[c++]
            } else n || (i[s++] = l)
        }
        return i
    };
    v.flatten = function (t, e) {
        return j(t, e, !1)
    }, v.without = function (t) {
        return v.difference(t, u.call(arguments, 1))
    }, v.uniq = v.unique = function (t, e, n, r) {
        v.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = b(n, r));
        for (var i = [], s = [], o = 0, a = T(t); a > o; o++) {
            var l = t[o],
                c = n ? n(l, o, t) : l;
            e ? (o && s === c || i.push(l), s = c) : n ? v.contains(s, c) || (s.push(c), i.push(l)) : v.contains(i, l) || i.push(l)
        }
        return i
    }, v.union = function () {
        return v.uniq(j(arguments, !0, !0))
    }, v.intersection = function (t) {
        for (var e = [], n = arguments.length, r = 0, i = T(t); i > r; r++) {
            var s = t[r];
            if (!v.contains(e, s)) {
                for (var o = 1; n > o && v.contains(arguments[o], s); o++);
                o === n && e.push(s)
            }
        }
        return e
    }, v.difference = function (t) {
        var e = j(arguments, !0, !0, 1);
        return v.filter(t, function (t) {
            return !v.contains(e, t)
        })
    }, v.zip = function () {
        return v.unzip(arguments)
    }, v.unzip = function (t) {
        for (var e = t && v.max(t, T).length || 0, n = Array(e), r = 0; e > r; r++) n[r] = v.pluck(t, r);
        return n
    }, v.object = function (t, e) {
        for (var n = {}, r = 0, i = T(t); i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
    }, v.findIndex = e(1), v.findLastIndex = e(-1), v.sortedIndex = function (t, e, n, r) {
        n = b(n, r, 1);
        for (var i = n(e), s = 0, o = T(t); o > s;) {
            var a = Math.floor((s + o) / 2);
            n(t[a]) < i ? s = a + 1 : o = a
        }
        return s
    }, v.indexOf = n(1, v.findIndex, v.sortedIndex), v.lastIndexOf = n(-1, v.findLastIndex), v.range = function (t, e, n) {
        null == e && (e = t || 0, t = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), s = 0; r > s; s++, t += n) i[s] = t;
        return i
    };
    var J = function (t, e, n, r, i) {
        if (!(r instanceof e)) return t.apply(n, i);
        var s = k(t.prototype),
            o = t.apply(s, i);
        return v.isObject(o) ? o : s
    };
    v.bind = function (t, e) {
        if (m && t.bind === m) return m.apply(t, u.call(arguments, 1));
        if (!v.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var n = u.call(arguments, 2),
            r = function () {
                return J(t, r, e, this, n.concat(u.call(arguments)))
            };
        return r
    }, v.partial = function (t) {
        var e = u.call(arguments, 1),
            n = function () {
                for (var r = 0, i = e.length, s = Array(i), o = 0; i > o; o++) s[o] = e[o] === v ? arguments[r++] : e[o];
                for (; r < arguments.length;) s.push(arguments[r++]);
                return J(t, n, this, this, s)
            };
        return n
    }, v.bindAll = function (t) {
        var e, n, r = arguments.length;
        if (1 >= r) throw new Error("bindAll must be passed function names");
        for (e = 1; r > e; e++) n = arguments[e], t[n] = v.bind(t[n], t);
        return t
    }, v.memoize = function (t, e) {
        var n = function (r) {
            var i = n.cache,
                s = "" + (e ? e.apply(this, arguments) : r);
            return v.has(i, s) || (i[s] = t.apply(this, arguments)), i[s]
        };
        return n.cache = {}, n
    }, v.delay = function (t, e) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, n)
        }, e)
    }, v.defer = v.partial(v.delay, v, 1), v.throttle = function (t, e, n) {
        var r, i, s, o = null,
            a = 0;
        n || (n = {});
        var l = function () {
            a = n.leading === !1 ? 0 : v.now(), o = null, s = t.apply(r, i), o || (r = i = null)
        };
        return function () {
            var c = v.now();
            a || n.leading !== !1 || (a = c);
            var u = e - (c - a);
            return r = this, i = arguments, 0 >= u || u > e ? (o && (clearTimeout(o), o = null), a = c, s = t.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(l, u)), s
        }
    }, v.debounce = function (t, e, n) {
        var r, i, s, o, a, l = function () {
            var c = v.now() - o;
            e > c && c >= 0 ? r = setTimeout(l, e - c) : (r = null, n || (a = t.apply(s, i), r || (s = i = null)))
        };
        return function () {
            s = this, i = arguments, o = v.now();
            var c = n && !r;
            return r || (r = setTimeout(l, e)), c && (a = t.apply(s, i), s = i = null), a
        }
    }, v.wrap = function (t, e) {
        return v.partial(e, t)
    }, v.negate = function (t) {
        return function () {
            return !t.apply(this, arguments)
        }
    }, v.compose = function () {
        var t = arguments,
            e = t.length - 1;
        return function () {
            for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
            return r
        }
    }, v.after = function (t, e) {
        return function () {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, v.before = function (t, e) {
        var n;
        return function () {
            return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = null), n
        }
    }, v.once = v.partial(v.before, 2);
    var P = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    v.keys = function (t) {
        if (!v.isObject(t)) return [];
        if (d) return d(t);
        var e = [];
        for (var n in t) v.has(t, n) && e.push(n);
        return P && r(t, e), e
    }, v.allKeys = function (t) {
        if (!v.isObject(t)) return [];
        var e = [];
        for (var n in t) e.push(n);
        return P && r(t, e), e
    }, v.values = function (t) {
        for (var e = v.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++) r[i] = t[e[i]];
        return r
    }, v.mapObject = function (t, e, n) {
        e = b(e, n);
        for (var r, i = v.keys(t), s = i.length, o = {}, a = 0; s > a; a++) r = i[a], o[r] = e(t[r], r, t);
        return o
    }, v.pairs = function (t) {
        for (var e = v.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++) r[i] = [e[i], t[e[i]]];
        return r
    }, v.invert = function (t) {
        for (var e = {}, n = v.keys(t), r = 0, i = n.length; i > r; r++) e[t[n[r]]] = n[r];
        return e
    }, v.functions = v.methods = function (t) {
        var e = [];
        for (var n in t) v.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, v.extend = S(v.allKeys), v.extendOwn = v.assign = S(v.keys), v.findKey = function (t, e, n) {
        e = b(e, n);
        for (var r, i = v.keys(t), s = 0, o = i.length; o > s; s++)
            if (r = i[s], e(t[r], r, t)) return r
    }, v.pick = function (t, e, n) {
        var r, i, s = {},
            o = t;
        if (null == o) return s;
        v.isFunction(e) ? (i = v.allKeys(o), r = w(e, n)) : (i = j(arguments, !1, !1, 1), r = function (t, e, n) {
            return e in n
        }, o = Object(o));
        for (var a = 0, l = i.length; l > a; a++) {
            var c = i[a],
                u = o[c];
            r(u, c, o) && (s[c] = u)
        }
        return s
    }, v.omit = function (t, e, n) {
        if (v.isFunction(e)) e = v.negate(e);
        else {
            var r = v.map(j(arguments, !1, !1, 1), String);
            e = function (t, e) {
                return !v.contains(r, e)
            }
        }
        return v.pick(t, e, n)
    }, v.defaults = S(v.allKeys, !0), v.create = function (t, e) {
        var n = k(t);
        return e && v.extendOwn(n, e), n
    }, v.clone = function (t) {
        return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({}, t) : t
    }, v.tap = function (t, e) {
        return e(t), t
    }, v.isMatch = function (t, e) {
        var n = v.keys(e),
            r = n.length;
        if (null == t) return !r;
        for (var i = Object(t), s = 0; r > s; s++) {
            var o = n[s];
            if (e[o] !== i[o] || !(o in i)) return !1
        }
        return !0
    };
    var E = function (t, e, n, r) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof v && (t = t._wrapped), e instanceof v && (e = e._wrapped);
        var i = p.call(t);
        if (i !== p.call(e)) return !1;
        switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        var s = "[object Array]" === i;
        if (!s) {
            if ("object" != typeof t || "object" != typeof e) return !1;
            var o = t.constructor,
                a = e.constructor;
            if (o !== a && !(v.isFunction(o) && o instanceof o && v.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
        }
        n = n || [], r = r || [];
        for (var l = n.length; l--;)
            if (n[l] === t) return r[l] === e;
        if (n.push(t), r.push(e), s) {
            if (l = t.length, l !== e.length) return !1;
            for (; l--;)
                if (!E(t[l], e[l], n, r)) return !1
        } else {
            var c, u = v.keys(t);
            if (l = u.length, v.keys(e).length !== l) return !1;
            for (; l--;)
                if (c = u[l], !v.has(e, c) || !E(t[c], e[c], n, r)) return !1
        }
        return n.pop(), r.pop(), !0
    };
    v.isEqual = function (t, e) {
        return E(t, e)
    }, v.isEmpty = function (t) {
        return null == t ? !0 : A(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length
    }, v.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, v.isArray = f || function (t) {
        return "[object Array]" === p.call(t)
    }, v.isObject = function (t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
        v["is" + t] = function (e) {
            return p.call(e) === "[object " + t + "]"
        }
    }), v.isArguments(arguments) || (v.isArguments = function (t) {
        return v.has(t, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function (t) {
        return "function" == typeof t || !1
    }), v.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, v.isNaN = function (t) {
        return v.isNumber(t) && t !== +t
    }, v.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" === p.call(t)
    }, v.isNull = function (t) {
        return null === t
    }, v.isUndefined = function (t) {
        return void 0 === t
    }, v.has = function (t, e) {
        return null != t && h.call(t, e)
    }, v.noConflict = function () {
        return i._ = s, this
    }, v.identity = function (t) {
        return t
    }, v.constant = function (t) {
        return function () {
            return t
        }
    }, v.noop = function () {}, v.property = _, v.propertyOf = function (t) {
        return null == t ? function () {} : function (e) {
            return t[e]
        }
    }, v.matcher = v.matches = function (t) {
        return t = v.extendOwn({}, t),
            function (e) {
                return v.isMatch(e, t)
            }
    }, v.times = function (t, e, n) {
        var r = Array(Math.max(0, t));
        e = w(e, n, 1);
        for (var i = 0; t > i; i++) r[i] = e(i);
        return r
    }, v.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, v.now = Date.now || function () {
        return (new Date).getTime()
    };
    var $ = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        M = v.invert($),
        L = function (t) {
            var e = function (e) {
                    return t[e]
                },
                n = "(?:" + v.keys(t).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function (t) {
                return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
            }
        };
    v.escape = L($), v.unescape = L(M), v.result = function (t, e, n) {
        var r = null == t ? void 0 : t[e];
        return void 0 === r && (r = n), v.isFunction(r) ? r.call(t) : r
    };
    var I = 0;
    v.uniqueId = function (t) {
        var e = ++I + "";
        return t ? t + e : e
    }, v.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var D = /(.)^/,
        F = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        N = /\\|'|\r|\n|\u2028|\u2029/g,
        H = function (t) {
            return "\\" + F[t]
        };
    v.template = function (t, e, n) {
        !e && n && (e = n), e = v.defaults({}, e, v.templateSettings);
        var r = RegExp([(e.escape || D).source, (e.interpolate || D).source, (e.evaluate || D).source].join("|") + "|$", "g"),
            i = 0,
            s = "__p+='";
        t.replace(r, function (e, n, r, o, a) {
            return s += t.slice(i, a).replace(N, H), i = a + e.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), e
        }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(e.variable || "obj", "_", s)
        } catch (a) {
            throw a.source = s, a
        }
        var l = function (t) {
                return o.call(this, t, v)
            },
            c = e.variable || "obj";
        return l.source = "function(" + c + "){\n" + s + "}", l
    }, v.chain = function (t) {
        var e = v(t);
        return e._chain = !0, e
    };
    var q = function (t, e) {
        return t._chain ? v(e).chain() : e
    };
    v.mixin = function (t) {
        v.each(v.functions(t), function (e) {
            var n = v[e] = t[e];
            v.prototype[e] = function () {
                var t = [this._wrapped];
                return c.apply(t, arguments), q(this, n.apply(v, t))
            }
        })
    }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = o[t];
        v.prototype[t] = function () {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], q(this, n)
        }
    }), v.each(["concat", "join", "slice"], function (t) {
        var e = o[t];
        v.prototype[t] = function () {
            return q(this, e.apply(this._wrapped, arguments))
        }
    }), v.prototype.value = function () {
        return this._wrapped
    }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function () {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return v
    })
}.call(this),
    function (t, e) {
        var n = [],
            r = [],
            i = [],
            s = {
                gsub: function (t, e, n) {
                    var r = new RegExp(e.source || e, "gi");
                    return r.test(t) ? t.replace(r, n) : null
                },
                plural: function (t, e) {
                    n.unshift([t, e])
                },
                pluralize: function (r, s, o) {
                    var a;
                    if (s !== e) s = parseFloat(s), a = 1 === s ? this.singularize(r) : this.pluralize(r), a = o ? [s, a].join(" ") : a;
                    else {
                        if (t(i).include(r)) return r;
                        a = r, t(n).detect(function (t) {
                            var e = this.gsub(r, t[0], t[1]);
                            return e ? a = e : !1
                        }, this)
                    }
                    return a
                },
                singular: function (t, e) {
                    r.unshift([t, e])
                },
                singularize: function (e) {
                    if (t(i).include(e)) return e;
                    var n = e;
                    return t(r).detect(function (t) {
                        var r = this.gsub(e, t[0], t[1]);
                        return r ? n = r : !1
                    }, this), n
                },
                irregular: function (t, e) {
                    this.plural("\\b" + t + "\\b", e), this.singular("\\b" + e + "\\b", t)
                },
                uncountable: function (t) {
                    i.unshift(t)
                },
                ordinalize: function (t) {
                    if (isNaN(t)) return t;
                    t = t.toString();
                    var e = t.slice(-1),
                        n = t.slice(-2);
                    if ("11" === n || "12" === n || "13" === n) return t + "th";
                    switch (e) {
                        case "1":
                            return t + "st";
                        case "2":
                            return t + "nd";
                        case "3":
                            return t + "rd";
                        default:
                            return t + "th"
                    }
                },
                titleize: function (t) {
                    return "string" != typeof t ? t : t.replace(/\S+/g, function (t) {
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    })
                },
                resetInflections: function () {
                    return n = [], r = [], i = [], this.plural(/$/, "s"), this.plural(/s$/, "s"), this.plural(/(ax|test)is$/, "$1es"), this.plural(/(octop|vir)us$/, "$1i"), this.plural(/(octop|vir)i$/, "$1i"), this.plural(/(alias|status)$/, "$1es"), this.plural(/(bu)s$/, "$1ses"), this.plural(/(buffal|tomat)o$/, "$1oes"), this.plural(/([ti])um$/, "$1a"), this.plural(/([ti])a$/, "$1a"), this.plural(/sis$/, "ses"), this.plural(/(?:([^f])fe|([lr])?f)$/, "$1$2ves"), this.plural(/(hive)$/, "$1s"), this.plural(/([^aeiouy]|qu)y$/, "$1ies"), this.plural(/(x|ch|ss|sh)$/, "$1es"), this.plural(/(matr|vert|ind)(?:ix|ex)$/, "$1ices"), this.plural(/([m|l])ouse$/, "$1ice"), this.plural(/([m|l])ice$/, "$1ice"), this.plural(/^(ox)$/, "$1en"), this.plural(/^(oxen)$/, "$1"), this.plural(/(quiz)$/, "$1zes"), this.singular(/s$/, ""), this.singular(/(n)ews$/, "$1ews"), this.singular(/([ti])a$/, "$1um"), this.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/, "$1$2sis"), this.singular(/(^analy)ses$/, "$1sis"), this.singular(/([^f])ves$/, "$1fe"), this.singular(/(hive)s$/, "$1"), this.singular(/(tive)s$/, "$1"), this.singular(/([lr])ves$/, "$1f"), this.singular(/([^aeiouy]|qu)ies$/, "$1y"), this.singular(/(s)eries$/, "$1eries"), this.singular(/(m)ovies$/, "$1ovie"), this.singular(/(x|ch|ss|sh)es$/, "$1"), this.singular(/([m|l])ice$/, "$1ouse"), this.singular(/(bus)es$/, "$1"), this.singular(/(o)es$/, "$1"), this.singular(/(shoe)s$/, "$1"), this.singular(/(cris|ax|test)es$/, "$1is"), this.singular(/(octop|vir)i$/, "$1us"), this.singular(/(alias|status)es$/, "$1"), this.singular(/^(ox)en/, "$1"), this.singular(/(vert|ind)ices$/, "$1ex"), this.singular(/(matr)ices$/, "$1ix"), this.singular(/(quiz)zes$/, "$1"), this.singular(/(database)s$/, "$1"), this.irregular("person", "people"), this.irregular("man", "men"), this.irregular("child", "children"), this.irregular("sex", "sexes"), this.irregular("move", "moves"), this.irregular("cow", "kine"), this.uncountable("equipment"), this.uncountable("information"), this.uncountable("rice"), this.uncountable("money"), this.uncountable("species"), this.uncountable("series"), this.uncountable("fish"), this.uncountable("sheep"), this.uncountable("jeans"), this
                }
            };
        t.mixin(s.resetInflections())
    }(_),
    function (t) {
        var e = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function (n, r, i) {
            e.Backbone = t(e, i, n, r)
        });
        else if ("undefined" != typeof exports) {
            var n, r = require("underscore");
            try {
                n = require("jquery")
            } catch (i) {}
            t(e, exports, r, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(function (t, e, n, r) {
        var i = t.Backbone,
            s = [].slice;
        e.VERSION = "1.2.1", e.$ = r, e.noConflict = function () {
            return t.Backbone = i, this
        }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var o = function (t, e, r) {
                switch (t) {
                    case 1:
                        return function () {
                            return n[e](this[r])
                        };
                    case 2:
                        return function (t) {
                            return n[e](this[r], t)
                        };
                    case 3:
                        return function (t, i) {
                            return n[e](this[r], t, i)
                        };
                    case 4:
                        return function (t, i, s) {
                            return n[e](this[r], t, i, s)
                        };
                    default:
                        return function () {
                            var t = s.call(arguments);
                            return t.unshift(this[r]), n[e].apply(n, t)
                        }
                }
            },
            a = function (t, e, r) {
                n.each(e, function (e, i) {
                    n[i] && (t.prototype[i] = o(e, i, r))
                })
            },
            l = e.Events = {},
            c = /\s+/,
            u = function (t, e, r, i, s) {
                var o, a = 0;
                if (r && "object" == typeof r) {
                    void 0 !== i && "context" in s && void 0 === s.context && (s.context = i);
                    for (o = n.keys(r); a < o.length; a++) e = t(e, o[a], r[o[a]], s)
                } else if (r && c.test(r))
                    for (o = r.split(c); a < o.length; a++) e = t(e, o[a], i, s);
                else e = t(e, r, i, s);
                return e
            };
        l.on = function (t, e, n) {
            return p(this, t, e, n)
        };
        var p = function (t, e, n, r, i) {
            if (t._events = u(h, t._events || {}, e, n, {
                    context: r,
                    ctx: t,
                    listening: i
                }), i) {
                var s = t._listeners || (t._listeners = {});
                s[i.id] = i
            }
            return t
        };
        l.listenTo = function (t, e, r) {
            if (!t) return this;
            var i = t._listenId || (t._listenId = n.uniqueId("l")),
                s = this._listeningTo || (this._listeningTo = {}),
                o = s[i];
            if (!o) {
                var a = this._listenId || (this._listenId = n.uniqueId("l"));
                o = s[i] = {
                    obj: t,
                    objId: i,
                    id: a,
                    listeningTo: s,
                    count: 0
                }
            }
            return p(t, e, r, this, o), this
        };
        var h = function (t, e, n, r) {
            if (n) {
                var i = t[e] || (t[e] = []),
                    s = r.context,
                    o = r.ctx,
                    a = r.listening;
                a && a.count++, i.push({
                    callback: n,
                    context: s,
                    ctx: s || o,
                    listening: a
                })
            }
            return t
        };
        l.off = function (t, e, n) {
            return this._events ? (this._events = u(f, this._events, t, e, {
                context: n,
                listeners: this._listeners
            }), this) : this
        }, l.stopListening = function (t, e, r) {
            var i = this._listeningTo;
            if (!i) return this;
            for (var s = t ? [t._listenId] : n.keys(i), o = 0; o < s.length; o++) {
                var a = i[s[o]];
                if (!a) break;
                a.obj.off(e, r, this)
            }
            return n.isEmpty(i) && (this._listeningTo = void 0), this
        };
        var f = function (t, e, r, i) {
            if (t) {
                var s, o = 0,
                    a = i.context,
                    l = i.listeners;
                if (e || r || a) {
                    for (var c = e ? [e] : n.keys(t); o < c.length; o++) {
                        e = c[o];
                        var u = t[e];
                        if (!u) break;
                        for (var p = [], h = 0; h < u.length; h++) {
                            var f = u[h];
                            r && r !== f.callback && r !== f.callback._callback || a && a !== f.context ? p.push(f) : (s = f.listening, s && 0 === --s.count && (delete l[s.id], delete s.listeningTo[s.objId]))
                        }
                        p.length ? t[e] = p : delete t[e]
                    }
                    return n.size(t) ? t : void 0
                }
                for (var d = n.keys(l); o < d.length; o++) s = l[d[o]], delete l[s.id], delete s.listeningTo[s.objId]
            }
        };
        l.once = function (t, e, r) {
            var i = u(d, {}, t, e, n.bind(this.off, this));
            return this.on(i, void 0, r)
        }, l.listenToOnce = function (t, e, r) {
            var i = u(d, {}, e, r, n.bind(this.stopListening, this, t));
            return this.listenTo(t, i)
        };
        var d = function (t, e, r, i) {
            if (r) {
                var s = t[e] = n.once(function () {
                    i(e, s), r.apply(this, arguments)
                });
                s._callback = r
            }
            return t
        };
        l.trigger = function (t) {
            if (!this._events) return this;
            for (var e = Math.max(0, arguments.length - 1), n = Array(e), r = 0; e > r; r++) n[r] = arguments[r + 1];
            return u(m, this._events, t, void 0, n), this
        };
        var m = function (t, e, n, r) {
                if (t) {
                    var i = t[e],
                        s = t.all;
                    i && s && (s = s.slice()), i && g(i, r), s && g(s, [e].concat(r))
                }
                return t
            },
            g = function (t, e) {
                var n, r = -1,
                    i = t.length,
                    s = e[0],
                    o = e[1],
                    a = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++r < i;)(n = t[r]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++r < i;)(n = t[r]).callback.call(n.ctx, s);
                        return;
                    case 2:
                        for (; ++r < i;)(n = t[r]).callback.call(n.ctx, s, o);
                        return;
                    case 3:
                        for (; ++r < i;)(n = t[r]).callback.call(n.ctx, s, o, a);
                        return;
                    default:
                        for (; ++r < i;)(n = t[r]).callback.apply(n.ctx, e);
                        return
                }
            };
        l.bind = l.on, l.unbind = l.off, n.extend(e, l);
        var y = e.Model = function (t, e) {
            var r = t || {};
            e || (e = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (r = this.parse(r, e) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(y.prototype, l, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function () {},
            toJSON: function (t) {
                return n.clone(this.attributes)
            },
            sync: function () {
                return e.sync.apply(this, arguments)
            },
            get: function (t) {
                return this.attributes[t]
            },
            escape: function (t) {
                return n.escape(this.get(t))
            },
            has: function (t) {
                return null != this.get(t)
            },
            matches: function (t) {
                return !!n.iteratee(t, this)(this.attributes)
            },
            set: function (t, e, r) {
                if (null == t) return this;
                var i;
                if ("object" == typeof t ? (i = t, r = e) : (i = {})[t] = e, r || (r = {}), !this._validate(i, r)) return !1;
                var s = r.unset,
                    o = r.silent,
                    a = [],
                    l = this._changing;
                this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
                var c = this.attributes,
                    u = this.changed,
                    p = this._previousAttributes;
                this.idAttribute in i && (this.id = i[this.idAttribute]);
                for (var h in i) e = i[h], n.isEqual(c[h], e) || a.push(h), n.isEqual(p[h], e) ? delete u[h] : u[h] = e, s ? delete c[h] : c[h] = e;
                if (!o) {
                    a.length && (this._pending = r);
                    for (var f = 0; f < a.length; f++) this.trigger("change:" + a[f], this, c[a[f]], r)
                }
                if (l) return this;
                if (!o)
                    for (; this._pending;) r = this._pending, this._pending = !1, this.trigger("change", this, r);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function (t, e) {
                return this.set(t, void 0, n.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function (t) {
                var e = {};
                for (var r in this.attributes) e[r] = void 0;
                return this.set(e, n.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function (t) {
                return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
            },
            changedAttributes: function (t) {
                if (!t) return this.hasChanged() ? n.clone(this.changed) : !1;
                var e = this._changing ? this._previousAttributes : this.attributes,
                    r = {};
                for (var i in t) {
                    var s = t[i];
                    n.isEqual(e[i], s) || (r[i] = s)
                }
                return n.size(r) ? r : !1
            },
            previous: function (t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function () {
                return n.clone(this._previousAttributes)
            },
            fetch: function (t) {
                t = n.extend({
                    parse: !0
                }, t);
                var e = this,
                    r = t.success;
                return t.success = function (n) {
                    var i = t.parse ? e.parse(n, t) : n;
                    return e.set(i, t) ? (r && r.call(t.context, e, n, t), void e.trigger("sync", e, n, t)) : !1
                }, N(this, t), this.sync("read", this, t)
            },
            save: function (t, e, r) {
                var i;
                null == t || "object" == typeof t ? (i = t, r = e) : (i = {})[t] = e, r = n.extend({
                    validate: !0,
                    parse: !0
                }, r);
                var s = r.wait;
                if (i && !s) {
                    if (!this.set(i, r)) return !1
                } else if (!this._validate(i, r)) return !1;
                var o = this,
                    a = r.success,
                    l = this.attributes;
                r.success = function (t) {
                    o.attributes = l;
                    var e = r.parse ? o.parse(t, r) : t;
                    return s && (e = n.extend({}, i, e)), e && !o.set(e, r) ? !1 : (a && a.call(r.context, o, t, r), void o.trigger("sync", o, t, r))
                }, N(this, r), i && s && (this.attributes = n.extend({}, l, i));
                var c = this.isNew() ? "create" : r.patch ? "patch" : "update";
                "patch" !== c || r.attrs || (r.attrs = i);
                var u = this.sync(c, this, r);
                return this.attributes = l, u
            },
            destroy: function (t) {
                t = t ? n.clone(t) : {};
                var e = this,
                    r = t.success,
                    i = t.wait,
                    s = function () {
                        e.stopListening(), e.trigger("destroy", e, e.collection, t)
                    };
                t.success = function (n) {
                    i && s(), r && r.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t)
                };
                var o = !1;
                return this.isNew() ? n.defer(t.success) : (N(this, t), o = this.sync("delete", this, t)), i || s(), o
            },
            url: function () {
                var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
                if (this.isNew()) return t;
                var e = this.get(this.idAttribute);
                return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
            },
            parse: function (t, e) {
                return t
            },
            clone: function () {
                return new this.constructor(this.attributes)
            },
            isNew: function () {
                return !this.has(this.idAttribute)
            },
            isValid: function (t) {
                return this._validate({}, n.defaults({
                    validate: !0
                }, t))
            },
            _validate: function (t, e) {
                if (!e.validate || !this.validate) return !0;
                t = n.extend({}, this.attributes, t);
                var r = this.validationError = this.validate(t, e) || null;
                return r ? (this.trigger("invalid", this, r, n.extend(e, {
                    validationError: r
                })), !1) : !0
            }
        });
        var v = {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        };
        a(y, v, "attributes");
        var w = e.Collection = function (t, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
                    silent: !0
                }, e))
            },
            b = {
                add: !0,
                remove: !0,
                merge: !0
            },
            S = {
                add: !0,
                remove: !1
            };
        n.extend(w.prototype, l, {
            model: y,
            initialize: function () {},
            toJSON: function (t) {
                return this.map(function (e) {
                    return e.toJSON(t)
                })
            },
            sync: function () {
                return e.sync.apply(this, arguments)
            },
            add: function (t, e) {
                return this.set(t, n.extend({
                    merge: !1
                }, e, S))
            },
            remove: function (t, e) {
                e = n.extend({}, e);
                var r = !n.isArray(t);
                t = r ? [t] : n.clone(t);
                var i = this._removeModels(t, e);
                return !e.silent && i && this.trigger("update", this, e), r ? i[0] : i
            },
            set: function (t, e) {
                e = n.defaults({}, e, b), e.parse && !this._isModel(t) && (t = this.parse(t, e));
                var r = !n.isArray(t);
                t = r ? t ? [t] : [] : t.slice();
                var i, s, o, a, l, c = e.at;
                null != c && (c = +c), 0 > c && (c += this.length + 1);
                for (var u = this.comparator && null == c && e.sort !== !1, p = n.isString(this.comparator) ? this.comparator : null, h = [], f = [], d = {}, m = e.add, g = e.merge, y = e.remove, v = !u && m && y ? [] : !1, w = !1, S = 0; S < t.length; S++) {
                    if (o = t[S], a = this.get(o)) y && (d[a.cid] = !0), g && o !== a && (o = this._isModel(o) ? o.attributes : o, e.parse && (o = a.parse(o, e)), a.set(o, e), u && !l && a.hasChanged(p) && (l = !0)), t[S] = a;
                    else if (m) {
                        if (s = t[S] = this._prepareModel(o, e), !s) continue;
                        h.push(s), this._addReference(s, e)
                    }
                    s = a || s, s && (i = this.modelId(s.attributes), !v || !s.isNew() && d[i] || (v.push(s), w = w || !this.models[S] || s.cid !== this.models[S].cid), d[i] = !0)
                }
                if (y) {
                    for (var S = 0; S < this.length; S++) d[(s = this.models[S]).cid] || f.push(s);
                    f.length && this._removeModels(f, e)
                }
                if (h.length || w)
                    if (u && (l = !0), this.length += h.length, null != c)
                        for (var S = 0; S < h.length; S++) this.models.splice(c + S, 0, h[S]);
                    else {
                        v && (this.models.length = 0);
                        for (var k = v || h, S = 0; S < k.length; S++) this.models.push(k[S])
                    } if (l && this.sort({
                        silent: !0
                    }), !e.silent) {
                    for (var _ = null != c ? n.clone(e) : e, S = 0; S < h.length; S++) null != c && (_.index = c + S), (s = h[S]).trigger("add", s, this, _);
                    (l || w) && this.trigger("sort", this, e), (h.length || f.length) && this.trigger("update", this, e)
                }
                return r ? t[0] : t
            },
            reset: function (t, e) {
                e = e ? n.clone(e) : {};
                for (var r = 0; r < this.models.length; r++) this._removeReference(this.models[r], e);
                return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), t
            },
            push: function (t, e) {
                return this.add(t, n.extend({
                    at: this.length
                }, e))
            },
            pop: function (t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t)
            },
            unshift: function (t, e) {
                return this.add(t, n.extend({
                    at: 0
                }, e))
            },
            shift: function (t) {
                var e = this.at(0);
                return this.remove(e, t)
            },
            slice: function () {
                return s.apply(this.models, arguments)
            },
            get: function (t) {
                if (null == t) return void 0;
                var e = this.modelId(this._isModel(t) ? t.attributes : t);
                return this._byId[t] || this._byId[e] || this._byId[t.cid]
            },
            at: function (t) {
                return 0 > t && (t += this.length), this.models[t]
            },
            where: function (t, e) {
                var r = n.matches(t);
                return this[e ? "find" : "filter"](function (t) {
                    return r(t.attributes)
                })
            },
            findWhere: function (t) {
                return this.where(t, !0)
            },
            sort: function (t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function (t) {
                return n.invoke(this.models, "get", t)
            },
            fetch: function (t) {
                t = n.extend({
                    parse: !0
                }, t);
                var e = t.success,
                    r = this;
                return t.success = function (n) {
                    var i = t.reset ? "reset" : "set";
                    r[i](n, t), e && e.call(t.context, r, n, t), r.trigger("sync", r, n, t)
                }, N(this, t), this.sync("read", this, t)
            },
            create: function (t, e) {
                e = e ? n.clone(e) : {};
                var r = e.wait;
                if (t = this._prepareModel(t, e), !t) return !1;
                r || this.add(t, e);
                var i = this,
                    s = e.success;
                return e.success = function (t, e, n) {
                    r && i.add(t, n), s && s.call(n.context, t, e, n)
                }, t.save(null, e), t
            },
            parse: function (t, e) {
                return t
            },
            clone: function () {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function (t) {
                return t[this.model.prototype.idAttribute || "id"]
            },
            _reset: function () {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function (t, e) {
                if (this._isModel(t)) return t.collection || (t.collection = this), t;
                e = e ? n.clone(e) : {}, e.collection = this;
                var r = new this.model(t, e);
                return r.validationError ? (this.trigger("invalid", this, r.validationError, e), !1) : r
            },
            _removeModels: function (t, e) {
                for (var n = [], r = 0; r < t.length; r++) {
                    var i = this.get(t[r]);
                    if (i) {
                        var s = this.indexOf(i);
                        this.models.splice(s, 1), this.length--, e.silent || (e.index = s, i.trigger("remove", i, this, e)), n.push(i), this._removeReference(i, e)
                    }
                }
                return n.length ? n : !1
            },
            _isModel: function (t) {
                return t instanceof y
            },
            _addReference: function (t, e) {
                this._byId[t.cid] = t;
                var n = this.modelId(t.attributes);
                null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this)
            },
            _removeReference: function (t, e) {
                delete this._byId[t.cid];
                var n = this.modelId(t.attributes);
                null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function (t, e, n, r) {
                if ("add" !== t && "remove" !== t || n === this) {
                    if ("destroy" === t && this.remove(e, r), "change" === t) {
                        var i = this.modelId(e.previousAttributes()),
                            s = this.modelId(e.attributes);
                        i !== s && (null != i && delete this._byId[i], null != s && (this._byId[s] = e))
                    }
                    this.trigger.apply(this, arguments)
                }
            }
        });
        var k = {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 4,
            foldl: 4,
            inject: 4,
            reduceRight: 4,
            foldr: 4,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 2,
            contains: 2,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3
        };
        a(w, k, "models");
        var _ = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(_, function (t) {
            n[t] && (w.prototype[t] = function (e, r) {
                var i = n.isFunction(e) ? e : function (t) {
                    return t.get(e)
                };
                return n[t](this.models, i, r)
            })
        });
        var x = e.View = function (t) {
                this.cid = n.uniqueId("view"), n.extend(this, n.pick(t, A)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            T = /^(\S+)\s*(.*)$/,
            A = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(x.prototype, l, {
            tagName: "div",
            $: function (t) {
                return this.$el.find(t)
            },
            initialize: function () {},
            render: function () {
                return this
            },
            remove: function () {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function () {
                this.$el.remove()
            },
            setElement: function (t) {
                return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
            },
            _setElement: function (t) {
                this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]
            },
            delegateEvents: function (t) {
                if (t || (t = n.result(this, "events")), !t) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var r = t[e];
                    if (n.isFunction(r) || (r = this[r]), r) {
                        var i = e.match(T);
                        this.delegate(i[1], i[2], n.bind(r, this))
                    }
                }
                return this
            },
            delegate: function (t, e, n) {
                return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this
            },
            undelegateEvents: function () {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function (t, e, n) {
                return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this
            },
            _createElement: function (t) {
                return document.createElement(t)
            },
            _ensureElement: function () {
                if (this.el) this.setElement(n.result(this, "el"));
                else {
                    var t = n.extend({}, n.result(this, "attributes"));
                    this.id && (t.id = n.result(this, "id")), this.className && (t["class"] = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t)
                }
            },
            _setAttributes: function (t) {
                this.$el.attr(t)
            }
        }), e.sync = function (t, r, i) {
            var s = C[t];
            n.defaults(i || (i = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            });
            var o = {
                type: s,
                dataType: "json"
            };
            if (i.url || (o.url = n.result(r, "url") || F()), null != i.data || !r || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                    model: o.data
                } : {}), i.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
                o.type = "POST", i.emulateJSON && (o.data._method = s);
                var a = i.beforeSend;
                i.beforeSend = function (t) {
                    return t.setRequestHeader("X-HTTP-Method-Override", s), a ? a.apply(this, arguments) : void 0
                }
            }
            "GET" === o.type || i.emulateJSON || (o.processData = !1);
            var l = i.error;
            i.error = function (t, e, n) {
                i.textStatus = e, i.errorThrown = n, l && l.call(i.context, t, e, n)
            };
            var c = i.xhr = e.ajax(n.extend(o, i));
            return r.trigger("request", r, c, i), c
        };
        var C = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        e.ajax = function () {
            return e.$.ajax.apply(e.$, arguments)
        };
        var j = e.Router = function (t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            J = /\((.*?)\)/g,
            P = /(\(\?)?:\w+/g,
            O = /\*\w+/g,
            E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(j.prototype, l, {
            initialize: function () {},
            route: function (t, r, i) {
                n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
                var s = this;
                return e.history.route(t, function (n) {
                    var o = s._extractParameters(t, n);
                    s.execute(i, o, r) !== !1 && (s.trigger.apply(s, ["route:" + r].concat(o)), s.trigger("route", r, o), e.history.trigger("route", s, r, o))
                }), this
            },
            execute: function (t, e, n) {
                t && t.apply(this, e)
            },
            navigate: function (t, n) {
                return e.history.navigate(t, n), this
            },
            _bindRoutes: function () {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var t, e = n.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function (t) {
                return t = t.replace(E, "\\$&").replace(J, "(?:$1)?").replace(P, function (t, e) {
                    return e ? t : "([^/?]+)"
                }).replace(O, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function (t, e) {
                var r = t.exec(e).slice(1);
                return n.map(r, function (t, e) {
                    return e === r.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                })
            }
        });
        var $ = e.History = function () {
                this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            M = /^[#\/]|\s+$/g,
            L = /^\/+|\/+$/g,
            I = /#.*$/;
        $.started = !1, n.extend($.prototype, l, {
            interval: 50,
            atRoot: function () {
                var t = this.location.pathname.replace(/[^\/]$/, "$&/");
                return t === this.root && !this.getSearch()
            },
            matchRoot: function () {
                var t = this.decodeFragment(this.location.pathname),
                    e = t.slice(0, this.root.length - 1) + "/";
                return e === this.root
            },
            decodeFragment: function (t) {
                return decodeURI(t.replace(/%25/g, "%2525"))
            },
            getSearch: function () {
                var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return t ? t[0] : ""
            },
            getHash: function (t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getPath: function () {
                var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === t.charAt(0) ? t.slice(1) : t
            },
            getFragment: function (t) {
                return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(M, "")
            },
            start: function (t) {
                if ($.started) throw new Error("Backbone.history has already been started");
                if ($.started = !0, this.options = n.extend({
                        root: "/"
                    }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(L, "/"), this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var e = this.root.slice(0, -1) || "/";
                        return this.location.replace(e + "#" + this.getPath()), !0
                    }
                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    })
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var r = document.body,
                        i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                    i.document.open(), i.document.close(), i.location.hash = "#" + this.fragment
                }
                var s = window.addEventListener || function (t, e) {
                    return attachEvent("on" + t, e)
                };
                return this._usePushState ? s("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? s("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function () {
                var t = window.removeEventListener || function (t, e) {
                    return detachEvent("on" + t, e)
                };
                this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), $.started = !1
            },
            route: function (t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function (t) {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl: function (t) {
                return this.matchRoot() ? (t = this.fragment = this.getFragment(t), n.any(this.handlers, function (e) {
                    return e.route.test(t) ? (e.callback(t), !0) : void 0
                })) : !1
            },
            navigate: function (t, e) {
                if (!$.started) return !1;
                e && e !== !0 || (e = {
                    trigger: !!e
                }), t = this.getFragment(t || "");
                var n = this.root;
                ("" === t || "?" === t.charAt(0)) && (n = n.slice(0, -1) || "/");
                var r = n + t;
                if (t = this.decodeFragment(t.replace(I, "")), this.fragment !== t) {
                    if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(r);
                        if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                            var i = this.iframe.contentWindow;
                            e.replace || (i.document.open(), i.document.close()), this._updateHash(i.location, t, e.replace)
                        }
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash: function (t, e, n) {
                if (n) {
                    var r = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(r + "#" + e)
                } else t.hash = "#" + e
            }
        }), e.history = new $;
        var D = function (t, e) {
            var r, i = this;
            r = t && n.has(t, "constructor") ? t.constructor : function () {
                return i.apply(this, arguments)
            }, n.extend(r, i, e);
            var s = function () {
                this.constructor = r
            };
            return s.prototype = i.prototype, r.prototype = new s, t && n.extend(r.prototype, t), r.__super__ = i.prototype, r
        };
        y.extend = w.extend = j.extend = x.extend = $.extend = D;
        var F = function () {
                throw new Error('A "url" property or function must be specified')
            },
            N = function (t, e) {
                var n = e.error;
                e.error = function (r) {
                    n && n.call(e.context, t, r, e), t.trigger("error", t, r, e)
                }
            };
        return e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["underscore", "backbone"], function (n, r) {
            return e(n || t._, r || t.Backbone)
        }) : e(_, Backbone)
    }(this, function (t, e) {
        function n(e, n) {
            var r = null;
            try {
                r = n.url
            } catch (i) {}
            if (!r) try {
                r = t.result(e, "url")
            } catch (i) {}
            return r
        }

        function r(t, e) {
            return ":" === t || ":" === e ? !1 : t === e ? !1 : !0
        }
        var i = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        return e.vanillaSync = e.sync, e.sync = function (s, o, a) {
            var l = !1,
                c = document.createElement("a");
            c.href = document.URL;
            var u = document.createElement("a");
            if (u.href = n(o, a), "" !== u.host && c.host !== u.host && (l = !0), l && !e.$.support.cors) {
                var p = i[s];
                if (t.defaults(a || (a = {}), {
                        emulateHTTP: e.emulateHTTP,
                        emulateJSON: e.emulateJSON
                    }), !a.emulateHTTP && ("update" === s || "patch" === s || "delete" === s)) throw new Error("Backbone.CrossDomain cannot use PUT, PATCH, DELETE with XDomainRequest (IE) and emulateHTTP=false");
                var h = {
                    type: p,
                    dataType: "json",
                    url: n(o, a)
                };
                if (!h.url) throw new Error("No URL!");
                if (r(c.protocol, u.protocol) && (h.url = h.url.replace(new RegExp(u.protocol), c.protocol)), null != a.data || !o || "create" !== s && "update" !== s && "patch" !== s || (h.data = JSON.stringify(a.attrs || o.toJSON(a))), a.emulateJSON && (h.data = h.data ? {
                        model: h.data
                    } : {}), a.emulateHTTP && ("PUT" === p || "DELETE" === p || "PATCH" === p)) {
                    h.type = "POST", a.emulateJSON && (h.data._method = p);
                    var f = a.beforeSend;
                    a.beforeSend = function (t) {
                        return f ? f.apply(this, arguments) : void 0
                    }
                }
                "GET" === h.type || a.emulateJSON || (h.processData = !1), "POST" === h.type && (h.data = e.$.param(e.$.parseJSON(h.data)));
                var d = a.xhr = new XDomainRequest,
                    m = a.success,
                    g = a.error;
                if (e.$.fn.jquery) {
                    var y = e.$.Deferred(),
                        v = e.$.Callbacks("once memory");
                    y.promise(d).complete = v.add
                }
                return d.onload = function () {
                    var t = {};
                    d.responseText && (t = e.$.parseJSON(d.responseText)), t && (y && y.resolveWith(this, [t, "success", d]), m(t))
                }, d.onerror = function () {
                    g && (g(o, d, a), y && y.rejectWith(this, [d, "error", g])), o.trigger("error", o, d, a)
                }, "read" === s && a.data && (console.log("IE get params", JSON.stringify(a.data)), parameterized = e.$.param(a.data), h.url = h.url + "?" + parameterized), d.open(h.type, h.url), d.onprogress = function () {}, d.ontimeout = function () {}, setTimeout(function () {
                    d.send(h.data)
                }, 0), o.trigger("request", o, d, a), d
            }
            return e.vanillaSync.apply(this, arguments)
        }, e
    }),
    function (t, e) {
        if ("function" == typeof define && define.amd) define(["underscore", "backbone"], function (n, r) {
            return e(t, r, n)
        });
        else if ("undefined" != typeof exports) {
            var n = require("underscore"),
                r = require("backbone");
            e(t, r, n), "undefined" != typeof module && module.exports && (module.exports = r), exports = r
        } else e(t, t.Backbone, t._)
    }(this, function (t, e, n) {
        var r, i, s, o, a, l, c, u, p, h, f, d = {};
        r = e.Model, i = e.Collection, s = r.prototype, a = i.prototype, o = e.Events, e.Associations = {
            VERSION: "0.6.1"
        }, e.Associations.scopes = [];
        var m = function () {
                return p
            },
            g = function (t) {
                (!n.isString(t) || 1 > n.size(t)) && (t = "."), p = t, c = RegExp("[\\" + p + "\\[\\]]+", "g"), u = RegExp("[^\\" + p + "\\[\\]]+", "g")
            };
        try {
            Object.defineProperty(e.Associations, "SEPARATOR", {
                enumerable: !0,
                get: m,
                set: g
            })
        } catch (y) {}
        e.Associations.Many = e.Many = "Many", e.Associations.One = e.One = "One", e.Associations.Self = e.Self = "Self", e.Associations.SEPARATOR = ".", e.Associations.getSeparator = m, e.Associations.setSeparator = g, e.Associations.EVENTS_BUBBLE = !0, e.Associations.EVENTS_WILDCARD = !0, e.Associations.EVENTS_NC = !1, g(), l = e.AssociatedModel = e.Associations.AssociatedModel = r.extend({
            relations: void 0,
            _proxyCalls: void 0,
            on: function (t, r, i) {
                var s = o.on.apply(this, arguments);
                if (e.Associations.EVENTS_NC) return s;
                var a = /\s+/;
                return n.isString(t) && t && !a.test(t) && r && (a = w(t)) && (d[a] = "undefined" == typeof d[a] ? 1 : d[a] + 1), s
            },
            off: function (t, r, i) {
                if (e.Associations.EVENTS_NC) return o.off.apply(this, arguments);
                var s = /\s+/,
                    a = this._events,
                    l = {},
                    c = a ? n.keys(a) : [],
                    u = !t && !r && !i,
                    p = n.isString(t) && !s.test(t);
                if (u || p)
                    for (var s = 0, h = c.length; h > s; s++) l[c[s]] = a[c[s]] ? a[c[s]].length : 0;
                var f = o.off.apply(this, arguments);
                if (u || p)
                    for (s = 0, h = c.length; h > s; s++)(u = w(c[s])) && (d[u] = a[c[s]] ? d[u] - (l[c[s]] - a[c[s]].length) : d[u] - l[c[s]]);
                return f
            },
            get: function (t) {
                var e = s.get.call(this, t);
                return e ? e : this._getAttr.apply(this, arguments)
            },
            set: function (t, e, r) {
                var i;
                return n.isObject(t) || null == t ? (i = t, r = e) : (i = {}, i[t] = e), t = this._set(i, r), this._processPendingEvents(), t
            },
            _set: function (t, e) {
                var r, i, s, o, a = this;
                if (!t) return this;
                for (r in t)
                    if (i || (i = {}), r.match(c)) {
                        var u = v(r);
                        o = n.initial(u), u = u[u.length - 1], o = this.get(o), o instanceof l && (o = i[o.cid] || (i[o.cid] = {
                            model: o,
                            data: {}
                        }), o.data[u] = t[r])
                    } else o = i[this.cid] || (i[this.cid] = {
                        model: this,
                        data: {}
                    }), o.data[r] = t[r];
                if (i)
                    for (s in i) o = i[s], this._setAttr.call(o.model, o.data, e) || (a = !1);
                else a = this._setAttr.call(this, t, e);
                return a
            },
            _setAttr: function (o, a) {
                var c;
                if (a || (a = {}), a.unset)
                    for (c in o) o[c] = void 0;
                return this.parents = this.parents || [], this.relations && n.each(this.relations, function (s) {
                    var c, u, p, h = s.key,
                        f = s.relatedModel,
                        d = s.collectionType,
                        m = s.scope || t,
                        g = s.map,
                        y = this.attributes[h],
                        v = y && y.idAttribute,
                        w = !1;
                    if (!f || f.prototype instanceof r || (f = n.isFunction(f) ? f.call(this, s, o) : f), f && n.isString(f) && (f = f === e.Self ? this.constructor : b(f, m)), g && n.isString(g) && (g = b(g, m)), u = s.options ? n.extend({}, s.options, a) : a, o[h]) {
                        if (c = n.result(o, h), c = g ? g.call(this, c, d ? d : f) : c, s.type === e.Many) {
                            if (d && n.isFunction(d) && d.prototype instanceof r) throw Error("type is of Backbone.Model. Specify derivatives of Backbone.Collection");
                            if (!d || d.prototype instanceof i || (d = n.isFunction(d) ? d.call(this, s, o) : d), d && n.isString(d) && (d = b(d, m)), !f && !d) throw Error("specify either a relatedModel or collectionType");
                            if (d && !d.prototype instanceof i) throw Error("collectionType must inherit from Backbone.Collection");
                            y ? (y._deferEvents = !0, y[u.reset ? "reset" : "set"](c instanceof i ? c.models : c, u), s = y) : (w = !0, c instanceof i ? s = c : (s = d ? new d : this._createCollection(f, m), s[u.reset ? "reset" : "set"](c, u)))
                        } else {
                            if (s.type !== e.One) throw Error("type attribute must be specified and have the values Backbone.One or Backbone.Many");
                            if (!f) throw Error("specify a relatedModel for Backbone.One type");
                            if (!(f.prototype instanceof e.AssociatedModel)) throw Error("specify an AssociatedModel for Backbone.One type");
                            s = c instanceof l ? c : new f(c, u), y && s.attributes[v] && y.attributes[v] === s.attributes[v] ? (y._deferEvents = !0, y._set(c instanceof l ? c.attributes : c, u), s = y) : w = !0
                        }
                        p = o[h] = s, (w || p && !p._proxyCallback) && (p._proxyCallback = function () {
                            return e.Associations.EVENTS_BUBBLE && this._bubbleEvent.call(this, h, p, arguments)
                        }, p.on("all", p._proxyCallback, this))
                    }
                    o.hasOwnProperty(h) && (y = o[h], v = this.attributes[h], y ? (y.parents = y.parents || [], -1 == n.indexOf(y.parents, this) && y.parents.push(this)) : v && 0 < v.parents.length && (v.parents = n.difference(v.parents, [this]), v._proxyCallback && v.off("all", v._proxyCallback, this)))
                }, this), s.set.call(this, o, a)
            },
            _bubbleEvent: function (t, n, s) {
                var o, a = s[0].split(":"),
                    l = a[0],
                    c = "nested-change" == s[0],
                    u = "change" === l,
                    m = s[1],
                    g = -1,
                    y = n._proxyCalls,
                    a = a[1],
                    v = !a || -1 == a.indexOf(p);
                return !c && (v && (f = w(s[0]) || t), e.Associations.EVENTS_NC || d[f]) ? e.Associations.EVENTS_WILDCARD && /\[\*\]/g.test(a) ? this : (n instanceof i && (u || a) && (g = n.indexOf(h || m)), this instanceof r && (h = this), a = t + (-1 !== g && (u || a) ? "[" + g + "]" : "") + (a ? p + a : ""), e.Associations.EVENTS_WILDCARD && (o = a.replace(/\[\d+\]/g, "[*]")), c = [], c.push.apply(c, s), c[0] = l + ":" + a, e.Associations.EVENTS_WILDCARD && a !== o && (c[0] = c[0] + " " + l + ":" + o), y = n._proxyCalls = y || {}, this._isEventAvailable.call(this, y, a) ? this : (y[a] = !0, u && (this._previousAttributes[t] = n._previousAttributes, this.changed[t] = n), this.trigger.apply(this, c), e.Associations.EVENTS_NC && u && this.get(a) != s[2] && (t = ["nested-change", a, s[1]], s[2] && t.push(s[2]), this.trigger.apply(this, t)), y && a && delete y[a], h = void 0, this)) : void 0
            },
            _isEventAvailable: function (t, e) {
                return n.find(t, function (t, n) {
                    return -1 !== e.indexOf(n, e.length - n.length)
                })
            },
            _createCollection: function (t, e) {
                var r, s = t;
                if (n.isString(s) && (s = b(s, e)), !(s && s.prototype instanceof l || n.isFunction(s))) throw Error("type must inherit from Backbone.AssociatedModel");
                return r = new i, r.model = s, r
            },
            _processPendingEvents: function () {
                this._processedEvents || (this._processedEvents = !0, this._deferEvents = !1, n.each(this._pendingEvents, function (t) {
                    t.c.trigger.apply(t.c, t.a)
                }), this._pendingEvents = [], n.each(this.relations, function (t) {
                    (t = this.attributes[t.key]) && t._processPendingEvents()
                }, this), delete this._processedEvents)
            },
            trigger: function (t) {
                this._deferEvents ? (this._pendingEvents = this._pendingEvents || [], this._pendingEvents.push({
                    c: this,
                    a: arguments
                })) : s.trigger.apply(this, arguments)
            },
            toJSON: function (t) {
                var e, r = {};
                return r[this.idAttribute] = this.id, this.visited || (this.visited = !0, r = s.toJSON.apply(this, arguments), t && t.serialize_keys && (r = n.pick(r, t.serialize_keys)), this.relations && n.each(this.relations, function (i) {
                    var s = i.key,
                        o = i.remoteKey,
                        a = this.attributes[s],
                        l = !i.isTransient;
                    i = i.serialize || [], delete r[s], l && (i.length && (t ? t.serialize_keys = i : t = {
                        serialize_keys: i
                    }), e = a && a.toJSON ? a.toJSON(t) : a, r[o || s] = n.isArray(e) ? n.compact(e) : e)
                }, this), delete this.visited), r
            },
            clone: function (t) {
                return new this.constructor(this.toJSON(t))
            },
            cleanup: function () {
                n.each(this.relations, function (t) {
                    (t = this.attributes[t.key]) && (t.parents = n.difference(t.parents, [this]))
                }, this), this.off()
            },
            _getAttr: function (t) {
                var e = this;
                t = v(t);
                var r, s;
                if (!(1 > n.size(t))) {
                    for (s = 0; s < t.length && (r = t[s], e); s++) e = e instanceof i ? isNaN(r) ? void 0 : e.at(r) : e.attributes[r];
                    return e
                }
            }
        });
        var v = function (t) {
                return "" === t ? [""] : n.isString(t) ? t.match(u) : t || []
            },
            w = function (t) {
                return t ? (t = t.split(":"), 1 < t.length ? (t = t[t.length - 1], t = t.split(p), 1 < t.length ? t[t.length - 1].split("[")[0] : t[0].split("[")[0]) : "") : t
            },
            b = function (t, r) {
                var i, s = [r];
                s.push.apply(s, e.Associations.scopes);
                for (var o, a = 0, l = s.length; l > a && (!(o = s[a]) || !(i = n.reduce(t.split(p), function (t, e) {
                        return t[e]
                    }, o))); ++a);
                return i
            },
            S = function (t, e, r) {
                var i, s;
                return n.find(t, function (t) {
                    return (i = n.find(t.relations, function (n) {
                        return t.get(n.key) === e
                    }, this)) ? (s = t, !0) : void 0
                }, this), i && i.map ? i.map.call(s, r, e) : r
            },
            k = {};
        return n.each(["set", "remove", "reset"], function (t) {
            k[t] = i.prototype[t], a[t] = function (e, n) {
                return this.model.prototype instanceof l && this.parents && (arguments[0] = S(this.parents, this, e)), k[t].apply(this, arguments)
            }
        }), k.trigger = a.trigger, a.trigger = function (t) {
            this._deferEvents ? (this._pendingEvents = this._pendingEvents || [], this._pendingEvents.push({
                c: this,
                a: arguments
            })) : k.trigger.apply(this, arguments)
        }, a._processPendingEvents = l.prototype._processPendingEvents, a.on = l.prototype.on, a.off = l.prototype.off, e
    }), window._u = _.noConflict(), window.JuicerBackbone = Backbone.noConflict(),
    function () {
        for (var t, e = function () {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], r = n.length, i = window.console = window.console || {}; r--;) t = n[r], i[t] || (i[t] = e)
    }(), "object" != typeof JSON && (JSON = {}),
    function () {
        "use strict";

        function f(t) {
            return 10 > t ? "0" + t : t
        }

        function this_value() {
            return this.valueOf()
        }

        function quote(t) {
            return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var n, r, i, s, o, a = gap,
                l = e[t];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (s = l.length, n = 0; s > n; n += 1) o[n] = str(n, l) || "null";
                        return i = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]", gap = a, i
                    }
                    if (rep && "object" == typeof rep)
                        for (s = rep.length, n = 0; s > n; n += 1) "string" == typeof rep[n] && (r = rep[n], i = str(r, l), i && o.push(quote(r) + (gap ? ": " : ":") + i));
                    else
                        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (i = str(r, l), i && o.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}", gap = a, i
            }
        }
        var rx_one = /^[\],:{}\s]*$/,
            rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
        var gap, indent, meta, rep;
        "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, JSON.stringify = function (t, e, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n)
                for (r = 0; n > r; r += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
            return str("", {
                "": t
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
            function walk(t, e) {
                var n, r, i = t[e];
                if (i && "object" == typeof i)
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
                return reviver.call(t, e, i)
            }
            var j;
            if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function () {
        function t() {}

        function e(t, e) {
            for (var n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1
        }

        function n(t) {
            return function () {
                return this[t].apply(this, arguments)
            }
        }
        var r = t.prototype,
            i = this,
            s = i.EventEmitter;
        r.getListeners = function (t) {
            var e, n, r = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n])
            } else e = r[t] || (r[t] = []);
            return e
        }, r.flattenListeners = function (t) {
            var e, n = [];
            for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
            return n
        }, r.getListenersAsObject = function (t) {
            var e, n = this.getListeners(t);
            return n instanceof Array && (e = {}, e[t] = n), e || n
        }, r.addListener = function (t, n) {
            var r, i = this.getListenersAsObject(t),
                s = "object" == typeof n;
            for (r in i) i.hasOwnProperty(r) && -1 === e(i[r], n) && i[r].push(s ? n : {
                listener: n,
                once: !1
            });
            return this
        }, r.on = n("addListener"), r.addOnceListener = function (t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, r.once = n("addOnceListener"), r.defineEvent = function (t) {
            return this.getListeners(t), this
        }, r.defineEvents = function (t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, r.removeListener = function (t, n) {
            var r, i, s = this.getListenersAsObject(t);
            for (i in s) s.hasOwnProperty(i) && (r = e(s[i], n), -1 !== r && s[i].splice(r, 1));
            return this
        }, r.off = n("removeListener"), r.addListeners = function (t, e) {
            return this.manipulateListeners(!1, t, e)
        }, r.removeListeners = function (t, e) {
            return this.manipulateListeners(!0, t, e)
        }, r.manipulateListeners = function (t, e, n) {
            var r, i, s = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (r = n.length; r--;) s.call(this, e, n[r]);
            else
                for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
            return this
        }, r.removeEvent = function (t) {
            var e, n = typeof t,
                r = this._getEvents();
            if ("string" === n) delete r[t];
            else if ("object" === n)
                for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
            else delete this._events;
            return this
        }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function (t, e) {
            var n, r, i, s, o = this.getListenersAsObject(t);
            for (i in o)
                if (o.hasOwnProperty(i))
                    for (r = o[i].length; r--;) n = o[i][r], n.once === !0 && this.removeListener(t, n.listener), s = n.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, n.listener);
            return this
        }, r.trigger = n("emitEvent"), r.emit = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, r.setOnceReturnValue = function (t) {
            return this._onceReturnValue = t, this
        }, r._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, r._getEvents = function () {
            return this._events || (this._events = {})
        }, t.noConflict = function () {
            return i.EventEmitter = s, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function (t) {
        function e(e) {
            var n = t.event;
            return n.target = n.target || n.srcElement || e, n
        }
        var n = document.documentElement,
            r = function () {};
        n.addEventListener ? r = function (t, e, n) {
            t.addEventListener(e, n, !1)
        } : n.attachEvent && (r = function (t, n, r) {
            t[n + r] = r.handleEvent ? function () {
                var n = e(t);
                r.handleEvent.call(r, n)
            } : function () {
                var n = e(t);
                r.call(t, n)
            }, t.attachEvent("on" + n, t[n + r])
        });
        var i = function () {};
        n.removeEventListener ? i = function (t, e, n) {
            t.removeEventListener(e, n, !1)
        } : n.detachEvent && (i = function (t, e, n) {
            t.detachEvent("on" + e, t[e + n]);
            try {
                delete t[e + n]
            } catch (r) {
                t[e + n] = void 0
            }
        });
        var s = {
            bind: r,
            unbind: i
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : t.eventie = s
    }(this),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, r) {
            return e(t, n, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function (t, e, n) {
        function r(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function i(t) {
            return "[object Array]" === h.call(t)
        }

        function s(t) {
            var e = [];
            if (i(t)) e = t;
            else if ("number" == typeof t.length)
                for (var n = 0, r = t.length; r > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e, n) {
            if (!(this instanceof o)) return new o(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = r({}, this.options), "function" == typeof e ? n = e : r(this.options, e), n && this.on("always", n), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var i = this;
            setTimeout(function () {
                i.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var c = t.jQuery,
            u = t.console,
            p = "undefined" != typeof u,
            h = Object.prototype.toString;
        o.prototype = new e, o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var n = this.elements[t];
                "IMG" === n.nodeName && this.addImage(n);
                var r = n.nodeType;
                if (r && (1 === r || 9 === r || 11 === r))
                    for (var i = n.querySelectorAll("img"), s = 0, o = i.length; o > s; s++) {
                        var a = i[s];
                        this.addImage(a)
                    }
            }
        }, o.prototype.addImage = function (t) {
            var e = new a(t);
            this.images.push(e)
        }, o.prototype.check = function () {
            function t(t, i) {
                return e.options.debug && p && u.log("confirm", t, i), e.progress(t), n++, n === r && e.complete(), !0
            }
            var e = this,
                n = 0,
                r = this.images.length;
            if (this.hasAnyBroken = !1, !r) return void this.complete();
            for (var i = 0; r > i; i++) {
                var s = this.images[i];
                s.on("confirm", t), s.check()
            }
        }, o.prototype.progress = function (t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function () {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, o.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function () {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var n = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[n](e)
                }
            })
        }, c && (c.fn.imagesLoaded = function (t, e) {
            var n = new o(this, t, e);
            return n.jqDeferred.promise(c(this))
        }), a.prototype = new e, a.prototype.check = function () {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function (t, n) {
                return e.confirm(t.isLoaded, n), !0
            }), t.check()
        }, a.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function () {
            if (!this.isChecked) {
                var t = new Image;
                n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function (t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function (t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function (t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function (t) {
            n.unbind(t.target, "load", this), n.unbind(t.target, "error", this)
        }, o
    }),
    function (t, e) {
        var n = function (t, e, n) {
            var r;
            return function () {
                function i() {
                    n || t.apply(s, o), r = null
                }
                var s = this,
                    o = arguments;
                r ? clearTimeout(r) : n && t.apply(s, o), r = setTimeout(i, e || 150)
            }
        };
        jQuery.fn[e] = function (t) {
            return t ? this.bind("resize", n(t)) : this.trigger(e)
        }
    }(jQuery, "smartresize"),
    function (t) {
        t.Gal = function (e, n) {
            this.element = t(n), this._init(e)
        }, t.Gal.settings = {
            selector: ".item",
            width: 225,
            gutter: 20,
            animate: !1,
            columns: 3,
            animationOptions: {
                speed: 200,
                duration: 300,
                effect: "fadeInOnAppear",
                queue: !0,
                complete: function () {}
            }
        }, t.Gal.prototype = {
            _init: function (e) {
                var n = this;
                this.name = this._setName(5), this.gridArr = [], this.gridArrAppend = [], this.gridArrPrepend = [], this.setArr = !1, this.setGrid = !1, this.setOptions, this.cols = 0, this.itemCount = 0, this.prependCount = 0, this.isPrepending = !1, this.appendCount = 0, this.resetCount = !0, this.ifCallback = !0, this.box = this.element, this.options = t.extend(!0, {}, t.Gal.settings, e), this.gridArr = t.makeArray(this.box.find(this.options.selector)), this.isResizing = !1, this.w = 0, this.boxArr = [], this.initialWidth = this.box.width(), this._setCols(), this._renderGrid("append"), t(this.box).addClass("gridalicious"), this._addLoadMore(), t(window).smartresize(function () {
                    n.resize()
                })
            },
            _addLoadMore: function () {
                var e = t("<a href='#'>Load More</a>").addClass("j-paginate juicer-button");
                this.box.append(e)
            },
            _moveLoadMore: function () {
                var t = this.box.find(".j-paginate");
                t.length > 0 && this.box.append(t.detach())
            },
            _setName: function (t, e) {
                return e = e ? e : "", t ? this._setName(--t, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(60 * Math.random())) + e) : e
            },
            _setCols: function () {
                this.calculated = Math.floor(this.box.outerWidth() / this.options.width), this.cols = Math.min(this.options.columns, this.calculated), this.cols < 1 && (this.cols = 1), diff = (this.box.width() - this.cols * this.options.width) / this.cols, w = (this.options.width + diff) / this.box.width() * 100, this.w = w, this.spacing = this.options.gutter / this.cols;
                for (var e = t("<div></div>").addClass("j-stacker-wrapper").css({
                        marginLeft: -(this.options.gutter / 2),
                        marginRight: -(this.options.gutter / 2)
                    }), n = t("<div></div>").addClass("j-stacker"), r = 0; r < this.cols; r++) {
                    var i = t("<div></div>").addClass("j-stack galcolumn column-" + r + "-" + this.name).attr("id", "j-column-" + r).css({
                        width: w + "%",
                        paddingLeft: this.options.gutter / 2,
                        paddingRight: this.options.gutter / 2
                    });
                    n.append(i)
                }
                e.append(n), this.box.append(e), this.box.find(t("#clear" + this.name)).remove();
                var s = t("<div></div>").css({
                    clear: "both",
                    height: "0",
                    width: "0",
                    display: "block"
                }).attr("id", "clear" + this.name);
                this.box.append(s)
            },
            _renderGrid: function (e, n, r, i) {
                var s = [],
                    o = [],
                    a = 0,
                    l = (this.prependCount, this.appendCount),
                    c = this.options.gutter,
                    u = this.cols,
                    p = this.name;
                t(".j-stack").width();
                n ? (o = n, "append" == e && (l += r, a = this.appendCount), "prepend" == e && (this.isPrepending = !0, a = Math.round(r % u), 0 >= a && (a = u)), "renderAfterPrepend" == e && (l += r, a = r)) : (o = this.gridArr, l = t(this.gridArr).length), t.each(o, function (n, r) {
                    var i = t(r),
                        o = "100%";
                    i.hasClass("not-responsive") && (o = "auto"),
                        i.css({
                            marginBottom: c,
                            zoom: "1"
                        }).find(".j-image img, object, embed, iframe").css({
                            width: o,
                            height: "auto",
                            display: "block",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        }), "prepend" == e ? (a--, t(".column-" + a + "-" + p).prepend(i), s.push(i), 0 == a && (a = u)) : (t(".column-" + a + "-" + p).append(i), s.push(i), a++, a >= u && (a = 0), l >= u && (l -= u))
                }), this.appendCount = l, this.itemCount = a, "append" == e || "prepend" == e ? ("prepend" == e && this._updateAfterPrepend(this.gridArr, o), this._renderItem(s), this.isPrepending = !1) : this._renderItem(this.gridArr)
            },
            _collectItems: function () {
                var e = [];
                return t(this.box).find(this.options.selector).each(function (n) {
                    e.push(t(this))
                }), e
            },
            _renderItem: function (e) {
                var n = this.options.animationOptions.speed,
                    r = this.options.animationOptions.effect,
                    i = this.options.animationOptions.duration,
                    s = this.options.animationOptions.queue,
                    o = this.options.animate,
                    a = this.options.animationOptions.complete,
                    l = 0,
                    c = 0;
                o !== !0 || this.isResizing ? (t.each(e, function (e, n) {
                    t(n).css({
                        opacity: "1"
                    })
                }), this.ifCallback && a.call(e)) : (s === !0 && "fadeInOnAppear" == r ? (this.isPrepending && e.reverse(), t.each(e, function (r, s) {
                    setTimeout(function () {
                        t(s).animate({
                            opacity: "1.0"
                        }, i), c++, c == e.length && a.call(void 0, e)
                    }, l * n), l++
                })) : s === !1 && "fadeInOnAppear" == r && (this.isPrepending && e.reverse(), t.each(e, function (n, r) {
                    t(r).animate({
                        opacity: "1.0"
                    }, i), c++, c == e.length && this.ifCallback && a.call(void 0, e)
                })), s !== !0 || r || t.each(e, function (n, r) {
                    t(r).css({
                        opacity: "1"
                    }), c++, c == e.length && this.ifCallback && a.call(void 0, e)
                }))
            },
            _updateAfterPrepend: function (e, n) {
                var r = this.gridArr;
                t.each(n, function (t, e) {
                    r.unshift(e)
                }), this.gridArr = r
            },
            resize: function () {
                this.box.width() != this.initialWidth && (this.initialWidth = this.box.width(), this.box.find(t(".j-stacker-wrapper")).remove(), this._setCols(), this._moveLoadMore(), this.ifCallback = !1, this.isResizing = !0, this._renderGrid("append"), this.ifCallback = !0, this.isResizing = !1)
            },
            append: function (e) {
                var n = this.gridArr,
                    r = this.gridArrPrepend;
                t.each(e, function (t, e) {
                    n.push(e), r.push(e)
                }), this._renderGrid("append", e, t(e).length), this._addLoadMore()
            },
            prepend: function (e) {
                this.ifCallback = !1, this._renderGrid("prepend", e, t(e).length), this.ifCallback = !0
            }
        }, t.fn.gridalicious = function (e, n) {
            return "string" == typeof e ? this.each(function () {
                var r = t.data(this, "gridalicious");
                r[e].apply(r, [n])
            }) : this.each(function () {
                t.data(this, "gridalicious", new t.Gal(e, this))
            }), this
        }
    }(jQuery),
    function () {
        function t(t) {
            return (t || "").split(" ")
        }

        function e(t, e, n) {
            return s(t, e, n)
        }

        function n(t, e, n, r) {
            return "number" != typeof n && "string" != typeof n || null != r || (r = n, n = void 0), s(t, e, n, {
                timezone: r
            })
        }

        function r(t, e, n) {
            return s(t, e, n, {
                utc: !0
            })
        }

        function i(t) {
            return function (n, r, i) {
                return e(n, r, t, i)
            }
        }

        function s(t, e, n, r) {
            r = r || {}, e && !a(e) && (n = e, e = void 0), e = e || new Date, n = n || f, n.formats = n.formats || {};
            var i = e.getTime(),
                h = r.timezone,
                d = typeof h;
            if ((r.utc || "number" == d || "string" == d) && (e = o(e)), h) {
                if ("string" == d) {
                    var m = "-" == h[0] ? -1 : 1,
                        g = parseInt(h.slice(1, 3), 10),
                        y = parseInt(h.slice(3, 5), 10);
                    h = m * (60 * g + y)
                }
                d && (e = new Date(e.getTime() + 6e4 * h))
            }
            return t.replace(/%([-_0]?.)/g, function (t, o) {
                var a, f;
                if (2 == o.length) {
                    if (a = o[0], "-" == a) f = "";
                    else if ("_" == a) f = " ";
                    else {
                        if ("0" != a) return t;
                        f = "0"
                    }
                    o = o[1]
                }
                switch (o) {
                    case "A":
                        return n.days[e.getDay()];
                    case "a":
                        return n.shortDays[e.getDay()];
                    case "B":
                        return n.months[e.getMonth()];
                    case "b":
                        return n.shortMonths[e.getMonth()];
                    case "C":
                        return l(Math.floor(e.getFullYear() / 100), f);
                    case "D":
                        return s(n.formats.D || "%m/%d/%y", e, n);
                    case "d":
                        return l(e.getDate(), f);
                    case "e":
                        return l(e.getDate(), null == f ? " " : f);
                    case "F":
                        return s(n.formats.F || "%Y-%m-%d", e, n);
                    case "H":
                        return l(e.getHours(), f);
                    case "h":
                        return n.shortMonths[e.getMonth()];
                    case "I":
                        return l(c(e), f);
                    case "j":
                        var d = new Date(e.getFullYear(), 0, 1),
                            m = Math.ceil((e.getTime() - d.getTime()) / 864e5);
                        return l(m, 3);
                    case "k":
                        return l(e.getHours(), null == f ? " " : f);
                    case "L":
                        return l(Math.floor(i % 1e3), 3);
                    case "l":
                        return l(c(e), null == f ? " " : f);
                    case "M":
                        return l(e.getMinutes(), f);
                    case "m":
                        return l(e.getMonth() + 1, f);
                    case "n":
                        return "\n";
                    case "o":
                        return String(e.getDate()) + u(e.getDate());
                    case "P":
                        return e.getHours() < 12 ? n.am : n.pm;
                    case "p":
                        return e.getHours() < 12 ? n.AM : n.PM;
                    case "R":
                        return s(n.formats.R || "%H:%M", e, n);
                    case "r":
                        return s(n.formats.r || "%I:%M:%S %p", e, n);
                    case "S":
                        return l(e.getSeconds(), f);
                    case "s":
                        return Math.floor(i / 1e3);
                    case "T":
                        return s(n.formats.T || "%H:%M:%S", e, n);
                    case "t":
                        return "	";
                    case "U":
                        return l(p(e, "sunday"), f);
                    case "u":
                        var m = e.getDay();
                        return 0 == m ? 7 : m;
                    case "v":
                        return s(n.formats.v || "%e-%b-%Y", e, n);
                    case "W":
                        return l(p(e, "monday"), f);
                    case "w":
                        return e.getDay();
                    case "Y":
                        return e.getFullYear();
                    case "y":
                        var d = String(e.getFullYear());
                        return d.slice(d.length - 2);
                    case "Z":
                        if (r.utc) return "GMT";
                        var g = e.toString().match(/\(([\w\s]+)\)/);
                        return g && g[1] || "";
                    case "z":
                        if (r.utc) return "+0000";
                        var y = "number" == typeof h ? h : -e.getTimezoneOffset();
                        return (0 > y ? "-" : "+") + l(Math.floor(Math.abs(y) / 60)) + l(Math.abs(y) % 60);
                    default:
                        return o
                }
            })
        }

        function o(t) {
            var e = 6e4 * (t.getTimezoneOffset() || 0);
            return new Date(t.getTime() + e)
        }

        function a(t) {
            var e = 0,
                n = d.length;
            for (e = 0; n > e; ++e)
                if ("function" != typeof t[d[e]]) return !1;
            return !0
        }

        function l(t, e, n) {
            "number" == typeof e && (n = e, e = "0"), null == e && (e = "0"), n = n || 2;
            var r = String(t);
            if (e)
                for (; r.length < n;) r = e + r;
            return r
        }

        function c(t) {
            var e = t.getHours();
            return 0 == e ? e = 12 : e > 12 && (e -= 12), e
        }

        function u(t) {
            var e = t % 10,
                n = t % 100;
            if (n >= 11 && 13 >= n || 0 === e || e >= 4) return "th";
            switch (e) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd"
            }
        }

        function p(t, e) {
            e = e || "sunday";
            var n = t.getDay();
            "monday" == e && (0 == n ? n = 6 : n--);
            var r = new Date(t.getFullYear(), 0, 1),
                i = (t - r) / 864e5,
                s = (i + 7 - n) / 7;
            return Math.floor(s)
        }
        var h;
        h = "undefined" != typeof module ? module.exports = e : function () {
            return this || (1, eval)("this")
        }();
        var f = {
            days: t("Sunday Monday Tuesday Wednesday Thursday Friday Saturday"),
            shortDays: t("Sun Mon Tue Wed Thu Fri Sat"),
            months: t("January February March April May June July August September October November December"),
            shortMonths: t("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec"),
            AM: "AM",
            PM: "PM",
            am: "am",
            pm: "pm"
        };
        h.strftime = e, h.strftimeTZ = e.strftimeTZ = n, h.strftimeUTC = e.strftimeUTC = r, h.localizedStrftime = e.localizedStrftime = i;
        var d = ["getTime", "getTimezoneOffset", "getDay", "getDate", "getMonth", "getFullYear", "getYear", "getHours", "getMinutes", "getSeconds"]
    }(),
    function () {
        var t, e = [].slice;
        t = function () {
            var t, n, r, i, s, o;
            return i = 1 <= arguments.length ? e.call(arguments, 0) : [], s = /(^|[\s\n]|<br\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi, i.length > 0 ? (r = i[0], n = function () {
                var e;
                e = [];
                for (t in r) o = r[t], "callback" !== t && e.push(" " + t + "='" + o + "'");
                return e
            }().join(""), this.replace(s, function (t, e, i) {
                var s;
                return s = ("function" == typeof r.callback ? r.callback(i) : void 0) || "<a href='" + i + "'" + n + ">" + i + "</a>", "" + e + s
            })) : this.replace(s, "$1<a href='$2'>$2</a>")
        }, String.prototype.autoLink = t
    }.call(this), Object.create || (Object.create = function (t, e) {
        function n() {}
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object prototype may only be an Object: " + t);
        if (null === t) throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
        if ("undefined" != typeof e) throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
        return n.prototype = t, new n
    }),
    function (t, e) {
        "use strict";
        t.jQueryBridget = e(t, t.jQuery)
    }(window, function (t, e) {
        "use strict";

        function n(n, s, a) {
            function l(t, e, r) {
                var i, s = "$()." + n + '("' + e + '")';
                return t.each(function (t, l) {
                    var c = a.data(l, n);
                    if (!c) return void o(n + " not initialized. Cannot call methods, i.e. " + s);
                    var u = c[e];
                    if (!u || "_" == e.charAt(0)) return void o(s + " is not a valid method");
                    var p = u.apply(c, r);
                    i = void 0 === i ? p : i
                }), void 0 !== i ? i : t
            }

            function c(t, e) {
                t.each(function (t, r) {
                    var i = a.data(r, n);
                    i ? (i.option(e), i._init()) : (i = new s(r, e), a.data(r, n, i))
                })
            }
            a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function (t) {
                if ("string" == typeof t) {
                    var e = i.call(arguments, 1);
                    return l(this, t, e)
                }
                return c(this, t), this
            }, r(a))
        }

        function r(t) {
            !t || t && t.bridget || (t.bridget = n)
        }
        var i = Array.prototype.slice,
            s = t.console,
            o = "undefined" == typeof s ? function () {} : function (t) {
                s.error(t)
            };
        return r(e || t.jQuery), n
    }),
    function (t, e) {
        "use strict";
        t.getWindowSize = e()
    }(window, function () {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                n = -1 == t.indexOf("%") && !isNaN(e);
            return n && e
        }

        function e() {}

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; c > e; e++) {
                var n = l[e];
                t[n] = 0
            }
            return t
        }

        function r(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function i() {
            if (!u) {
                u = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var i = r(e);
                s.isBoxSizeOuter = o = 200 == t(i.width), n.removeChild(e)
            }
        }

        function s(e) {
            if (i(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var s = r(e);
                if ("none" == s.display) return n();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var u = a.isBorderBox = "border-box" == s.boxSizing, p = 0; c > p; p++) {
                    var h = l[p],
                        f = s[h],
                        d = parseFloat(f);
                    a[h] = isNaN(d) ? 0 : d
                }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    w = a.borderLeftWidth + a.borderRightWidth,
                    b = a.borderTopWidth + a.borderBottomWidth,
                    S = u && o,
                    k = t(s.width);
                k !== !1 && (a.width = k + (S ? 0 : m + w));
                var _ = t(s.height);
                return _ !== !1 && (a.height = _ + (S ? 0 : g + b)), a.innerWidth = a.width - (m + w), a.innerHeight = a.height - (g + b), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
            }
        }
        var o, a = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length,
            u = !1;
        return s
    }),
    function (t, e) {
        t.EvEmitter = e()
    }(this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    r = n[t] = n[t] || [];
                return -1 == r.indexOf(e) && r.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {},
                    r = n[t] = n[t] || {};
                return r[e] = !0, this
            }
        }, e.off = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var r = n.indexOf(e);
                return -1 != r && n.splice(r, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var r = 0,
                    i = n[r];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; i;) {
                    var o = s && s[i];
                    o && (this.off(t, i), delete s[i]), i.apply(this, e), r += o ? 0 : 1, i = n[r]
                }
                return this
            }
        }, t
    }),
    function (t, e) {
        "use strict";
        t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var t = function () {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var r = e[n],
                    i = r + "MatchesSelector";
                if (t[i]) return i
            }
        }();
        return function (e, n) {
            return e[t](n)
        }
    }),
    function (t, e) {
        t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function (t, e) {
        var n = {};
        n.extend = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, n.modulo = function (t, e) {
            return (t % e + e) % e
        }, n.makeArray = function (t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0; n < t.length; n++) e.push(t[n]);
            else e.push(t);
            return e
        }, n.removeFrom = function (t, e) {
            var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
        }, n.getParent = function (t, n) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function (t, r) {
            t = n.makeArray(t);
            var i = [];
            return t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                    if (!r) return void i.push(t);
                    e(t, r) && i.push(t);
                    for (var n = t.querySelectorAll(r), s = 0; s < n.length; s++) i.push(n[s])
                }
            }), i
        }, n.debounceMethod = function (t, e, n) {
            var r = t.prototype[e],
                i = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[i];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[i] = setTimeout(function () {
                    r.apply(s, e), delete s[i]
                }, n || 100)
            }
        }, n.docReady = function (t) {
            "complete" == document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", t)
        }, n.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var r = t.console;
        return n.htmlInit = function (e, i) {
            n.docReady(function () {
                var s = n.toDashed(i),
                    o = "data-" + s,
                    a = document.querySelectorAll("[" + o + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    c = n.makeArray(a).concat(n.makeArray(l)),
                    u = o + "-options",
                    p = t.jQuery;
                c.forEach(function (t) {
                    var n, s = t.getAttribute(o) || t.getAttribute(u);
                    try {
                        n = s && JSON.parse(s)
                    } catch (a) {
                        return void(r && r.error("Error parsing " + o + " on " + t.className + ": " + a))
                    }
                    var l = new e(t, n);
                    p && p.data(t, i, l)
                })
            })
        }, n
    }),
    function (t, e) {
        t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getWindowSize)
    }(window, function (t, e) {
        "use strict";

        function n(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function r(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function i(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }
        var s = document.documentElement.style,
            o = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            l = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [o],
            c = {
                transform: a,
                transition: o,
                transitionDuration: o + "Duration",
                transitionProperty: o + "Property"
            },
            u = r.prototype = Object.create(t.prototype);
        u.constructor = r, u._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, u.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, u.getWindowSize = function () {
            this.size = e(this.element)
        }, u.css = function (t) {
            var e = this.element.style;
            for (var n in t) {
                var r = c[n] || n;
                e[r] = t[n]
            }
        }, u.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                r = t[e ? "left" : "right"],
                i = t[n ? "top" : "bottom"],
                s = this.layout.size,
                o = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.width : parseInt(r, 10),
                a = -1 != i.indexOf("%") ? parseFloat(i) / 100 * s.height : parseInt(i, 10);
            o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= e ? s.paddingLeft : s.paddingRight, a -= n ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = a
        }, u.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                r = this.layout._getOption("originTop"),
                i = n ? "paddingLeft" : "paddingRight",
                s = n ? "left" : "right",
                o = n ? "right" : "left",
                a = this.position.x + t[i];
            e[s] = this.getXValue(a), e[o] = "";
            var l = r ? "paddingTop" : "paddingBottom",
                c = r ? "top" : "bottom",
                u = r ? "bottom" : "top",
                p = this.position.y + t[l];
            e[c] = this.getYValue(p), e[u] = "", this.css(e), this.emitEvent("layout", [this])
        }, u.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, u.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, u._transitionTo = function (t, e) {
            this.getPosition();
            var n = this.position.x,
                r = this.position.y,
                i = parseInt(t, 10),
                s = parseInt(e, 10),
                o = i === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
            var a = t - n,
                l = e - r,
                c = {};
            c.transform = this.getTranslate(a, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, u.getTranslate = function (t, e) {
            var n = this.layout._getOption("originLeft"),
                r = this.layout._getOption("originTop");
            return t = n ? t : -t, e = r ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, u.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, u.moveTo = u._transitionTo, u.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, u._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, u.transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                var r = this.element.offsetHeight;
                r = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var p = "opacity," + i(a);
        u.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: p,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(l, this, !1))
        }, u.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, u.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var h = {
            "-webkit-transform": "transform"
        };
        u.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    r = h[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[r], n(e.ingProperties) && this.disableTransition(), r in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[r]), r in e.onEnd) {
                    var i = e.onEnd[r];
                    i.call(this), delete e.onEnd[r]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, u.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, u._removeStyles = function (t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var f = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return u.removeTransitionStyles = function () {
            this.css(f)
        }, u.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, u.remove = function () {
            return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, u.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[n] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, u.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, u.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, u.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[n] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, u.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, u.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, r
    }),
    function (t, e) {
        "use strict";
        t.Outlayer = e(t, t.EvEmitter, t.getWindowSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, n, r, i) {
        "use strict";

        function s(t, e) {
            var n = r.getQueryElement(t);
            if (!n) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
            this.element = n, l && (this.$element = l(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
            var i = ++u;
            this.element.outlayerGUID = i, p[i] = this, this._create();
            var s = this._getOption("initLayout");
            s && this.layout()
        }

        function o(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        var a = t.console,
            l = t.jQuery,
            c = function () {},
            u = 0,
            p = {};
        s.namespace = "outlayer", s.Item = i, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var h = s.prototype;
        return r.extend(h, e.prototype), h.option = function (t) {
            r.extend(this.options, t)
        }, h._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, h._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, h.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, h._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, r = [], i = 0; i < e.length; i++) {
                var s = e[i],
                    o = new n(s, this);
                r.push(o)
            }
            return r
        }, h._filterFindItemElements = function (t) {
            return r.filterFindElements(t, this.options.itemSelector)
        }, h.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element
            })
        }, h.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, h._init = h.layout, h._resetLayout = function () {
            this.getWindowSize()
        }, h.getWindowSize = function () {
            this.size = n(this.element)
        }, h._getMeasurement = function (t, e) {
            var r, i = this.options[t];
            i ? ("string" == typeof i ? r = this.element.querySelector(i) : i instanceof HTMLElement && (r = i), this[t] = r ? n(r)[e] : i) : this[t] = 0
        }, h.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, h._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored
            })
        }, h._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function (t) {
                    var r = this._getItemLayoutPosition(t);
                    r.item = t, r.isInstant = e || t.isLayoutInstant, n.push(r)
                }, this), this._processLayoutQueue(n)
            }
        }, h._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, h._processLayoutQueue = function (t) {
            t.forEach(function (t) {
                this._positionItem(t.item, t.x, t.y, t.isInstant)
            }, this)
        }, h._positionItem = function (t, e, n, r) {
            r ? t.goTo(e, n) : t.moveTo(e, n)
        }, h._postLayout = function () {
            this.resizeContainer()
        }, h.resizeContainer = function () {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, h._getContainerSize = c, h._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, h._emitCompleteOnItems = function (t, e) {
            function n() {
                i.dispatchEvent(t + "Complete", null, [e])
            }

            function r() {
                o++, o == s && n()
            }
            var i = this,
                s = e.length;
            if (!e || !s) return void n();
            var o = 0;
            e.forEach(function (e) {
                e.once(t, r)
            })
        }, h.dispatchEvent = function (t, e, n) {
            var r = e ? [e].concat(n) : n;
            if (this.emitEvent(t, r), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var i = l.Event(e);
                    i.type = t, this.$element.trigger(i, n)
                } else this.$element.trigger(t, n)
        }, h.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, h.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, h.stamp = function (t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, h.unstamp = function (t) {
            t = this._find(t), t && t.forEach(function (t) {
                r.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, h._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
        }, h._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, h._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, h._manageStamp = c, h._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                r = this._boundingRect,
                i = n(t),
                s = {
                    left: e.left - r.left - i.marginLeft,
                    top: e.top - r.top - i.marginTop,
                    right: r.right - e.right - i.marginRight,
                    bottom: r.bottom - e.bottom - i.marginBottom
                };
            return s
        }, h.handleEvent = r.handleEvent, h.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, h.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, h.onresize = function () {
            this.resize()
        }, r.debounceMethod(s, "onresize", 100), h.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, h.needsResizeLayout = function () {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, h.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, h.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, h.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, h.reveal = function (t) {
            this._emitCompleteOnItems("reveal", t), t && t.length && t.forEach(function (t) {
                t.reveal()
            })
        }, h.hide = function (t) {
            this._emitCompleteOnItems("hide", t), t && t.length && t.forEach(function (t) {
                t.hide()
            })
        }, h.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, h.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, h.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var n = this.items[e];
                if (n.element == t) return n
            }
        }, h.getItems = function (t) {
            t = r.makeArray(t);
            var e = [];
            return t.forEach(function (t) {
                var n = this.getItem(t);
                n && e.push(n)
            }, this), e
        }, h.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
                t.remove(), r.removeFrom(this.items, t)
            }, this)
        }, h.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete p[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, s.data = function (t) {
            t = r.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && p[e]
        }, s.create = function (t, e) {
            var n = o(s);
            return n.defaults = r.extend({}, s.defaults), r.extend(n.defaults, e), n.compatOptions = r.extend({}, s.compatOptions), n.namespace = t, n.data = s.data, n.Item = o(i), r.htmlInit(n, t), l && l.bridget && l.bridget(t, n), n
        }, s.Item = i, s
    }),
    function (t, e) {
        t.Packery = t.Packery || {}, t.Packery.Rect = e()
    }(window, function () {
        "use strict";

        function t(e) {
            for (var n in t.defaults) this[n] = t.defaults[n];
            for (n in e) this[n] = e[n]
        }
        t.defaults = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        var e = t.prototype;
        return e.contains = function (t) {
            var e = t.width || 0,
                n = t.height || 0;
            return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + n
        }, e.overlaps = function (t) {
            var e = this.x + this.width,
                n = this.y + this.height,
                r = t.x + t.width,
                i = t.y + t.height;
            return this.x < r && e > t.x && this.y < i && n > t.y
        }, e.getMaximalFreeRects = function (e) {
            if (!this.overlaps(e)) return !1;
            var n, r = [],
                i = this.x + this.width,
                s = this.y + this.height,
                o = e.x + e.width,
                a = e.y + e.height;
            return this.y < e.y && (n = new t({
                x: this.x,
                y: this.y,
                width: this.width,
                height: e.y - this.y
            }), r.push(n)), i > o && (n = new t({
                x: o,
                y: this.y,
                width: i - o,
                height: this.height
            }), r.push(n)), s > a && (n = new t({
                x: this.x,
                y: a,
                width: this.width,
                height: s - a
            }), r.push(n)), this.x < e.x && (n = new t({
                x: this.x,
                y: this.y,
                width: e.x - this.x,
                height: this.height
            }), r.push(n)), r
        }, e.canFit = function (t) {
            return this.width >= t.width && this.height >= t.height
        }, t
    }),
    function (t, e) {
        var n = t.Packery = t.Packery || {};
        n.Packer = e(n.Rect)
    }(window, function (t) {
        "use strict";

        function e(t, e, n) {
            this.width = t || 0, this.height = e || 0, this.sortDirection = n || "downwardLeftToRight", this.reset()
        }
        var n = e.prototype;
        n.reset = function () {
            this.spaces = [];
            var e = new t({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(e), this.sorter = r[this.sortDirection] || r.downwardLeftToRight
        }, n.pack = function (t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var n = this.spaces[e];
                if (n.canFit(t)) {
                    this.placeInSpace(t, n);
                    break
                }
            }
        }, n.columnPack = function (t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var n = this.spaces[e],
                    r = n.x <= t.x && n.x + n.width >= t.x + t.width && n.height >= t.height - .01;
                if (r) {
                    t.y = n.y, this.placed(t);
                    break
                }
            }
        }, n.rowPack = function (t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var n = this.spaces[e],
                    r = n.y <= t.y && n.y + n.height >= t.y + t.height && n.width >= t.width - .01;
                if (r) {
                    t.x = n.x, this.placed(t);
                    break
                }
            }
        }, n.placeInSpace = function (t, e) {
            t.x = e.x, t.y = e.y, this.placed(t)
        }, n.placed = function (t) {
            for (var e = [], n = 0; n < this.spaces.length; n++) {
                var r = this.spaces[n],
                    i = r.getMaximalFreeRects(t);
                i ? e.push.apply(e, i) : e.push(r)
            }
            this.spaces = e, this.mergeSortSpaces()
        }, n.mergeSortSpaces = function () {
            e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, n.addSpace = function (t) {
            this.spaces.push(t), this.mergeSortSpaces()
        }, e.mergeRects = function (t) {
            var e = 0,
                n = t[e];
            t: for (; n;) {
                for (var r = 0, i = t[e + r]; i;) {
                    if (i == n) r++;
                    else {
                        if (i.contains(n)) {
                            t.splice(e, 1), n = t[e];
                            continue t
                        }
                        n.contains(i) ? t.splice(e + r, 1) : r++
                    }
                    i = t[e + r]
                }
                e++, n = t[e]
            }
            return t
        };
        var r = {
            downwardLeftToRight: function (t, e) {
                return t.y - e.y || t.x - e.x
            },
            rightwardTopToBottom: function (t, e) {
                return t.x - e.x || t.y - e.y
            }
        };
        return e
    }),
    function (t, e) {
        t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
    }(window, function (t, e) {
        "use strict";
        var n = document.documentElement.style,
            r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
            i = function () {
                t.Item.apply(this, arguments)
            },
            s = i.prototype = Object.create(t.Item.prototype),
            o = s._create;
        s._create = function () {
            o.call(this), this.rect = new e
        };
        var a = s.moveTo;
        return s.moveTo = function (t, e) {
            var n = Math.abs(this.position.x - t),
                r = Math.abs(this.position.y - e),
                i = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > n && 1 > r;
            return i ? void this.goTo(t, e) : void a.apply(this, arguments)
        }, s.enablePlacing = function () {
            this.removeTransitionStyles(), this.isTransitioning && r && (this.element.style[r] = "none"), this.isTransitioning = !1, this.getWindowSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
        }, s.disablePlacing = function () {
            this.isPlacing = !1
        }, s.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
        }, s.showDropPlaceholder = function () {
            var t = this.dropPlaceholder;
            t || (t = this.dropPlaceholder = document.createElement("div"), t.className = "packery-drop-placeholder", t.style.position = "absolute"), t.style.width = this.size.width + "px", t.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(t)
        }, s.positionDropPlaceholder = function () {
            this.dropPlaceholder.style[r] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
        }, s.hideDropPlaceholder = function () {
            this.layout.element.removeChild(this.dropPlaceholder)
        }, i
    }),
    function (t, e) {
        t.Packery = e(t.getWindowSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window, function (t, e, n, r, i) {
        "use strict";

        function s(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x
        }

        function o(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y
        }

        function a(t, e) {
            var n = e.x - t.x,
                r = e.y - t.y;
            return Math.sqrt(n * n + r * r)
        }
        n.prototype.canFit = function (t) {
            return this.width >= t.width - 1 && this.height >= t.height - 1
        };
        var l = e.create("packery");
        l.Item = i;
        var c = l.prototype;
        c._create = function () {
            e.prototype._create.call(this), this.packer = new r, this.shiftPacker = new r, this.isEnabled = !0, this.dragItemCount = 0;
            var t = this;
            this.handleDraggabilly = {
                dragStart: function () {
                    t.itemDragStart(this.element)
                },
                dragMove: function () {
                    t.itemDragMove(this.element, this.position.x, this.position.y)
                },
                dragEnd: function () {
                    t.itemDragEnd(this.element)
                }
            }, this.handleUIDraggable = {
                start: function (e, n) {
                    n && t.itemDragStart(e.currentTarget)
                },
                drag: function (e, n) {
                    n && t.itemDragMove(e.currentTarget, n.position.left, n.position.top)
                },
                stop: function (e, n) {
                    n && t.itemDragEnd(e.currentTarget)
                }
            }
        }, c._resetLayout = function () {
            this.getWindowSize(), this._getMeasurements();
            var t, e, n;
            this._getOption("horizontal") ? (t = 1 / 0, e = this.size.innerHeight + this.gutter, n = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, e = 1 / 0, n = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = t, this.packer.height = this.shiftPacker.height = e, this.packer.sortDirection = this.shiftPacker.sortDirection = n, this.packer.reset(), this.maxY = 0, this.maxX = 0
        }, c._getMeasurements = function () {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, c._getItemLayoutPosition = function (t) {
            if (this._setRectSize(t.element, t.rect), this.isShifting || this.dragItemCount > 0) {
                var e = this._getPackMethod();
                this.packer[e](t.rect)
            } else this.packer.pack(t.rect);
            return this._setMaxXY(t.rect), t.rect
        }, c.shiftLayout = function () {
            this.isShifting = !0, this.layout(), delete this.isShifting
        }, c._getPackMethod = function () {
            return this._getOption("horizontal") ? "rowPack" : "columnPack"
        }, c._setMaxXY = function (t) {
            this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
        }, c._setRectSize = function (e, n) {
            var r = t(e),
                i = r.outerWidth,
                s = r.outerHeight;
            (i || s) && (i = this._applyGridGutter(i, this.columnWidth), s = this._applyGridGutter(s, this.rowHeight)), n.width = Math.min(i, this.packer.width), n.height = Math.min(s, this.packer.height);
        }, c._applyGridGutter = function (t, e) {
            if (!e) return t + this.gutter;
            e += this.gutter;
            var n = t % e,
                r = n && 1 > n ? "round" : "ceil";
            return t = Math[r](t / e) * e
        }, c._getContainerSize = function () {
            return this._getOption("horizontal") ? {
                width: this.maxX - this.gutter
            } : {
                height: this.maxY - this.gutter
            }
        }, c._manageStamp = function (t) {
            var e, r = this.getItem(t);
            if (r && r.isPlacing) e = r.rect;
            else {
                var i = this._getElementOffset(t);
                e = new n({
                    x: this._getOption("originLeft") ? i.left : i.right,
                    y: this._getOption("originTop") ? i.top : i.bottom
                })
            }
            this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
        }, c.sortItemsByPosition = function () {
            var t = this._getOption("horizontal") ? o : s;
            this.items.sort(t)
        }, c.fit = function (t, e, n) {
            var r = this.getItem(t);
            r && (this.stamp(r.element), r.enablePlacing(), this.updateShiftTargets(r), e = void 0 === e ? r.rect.x : e, n = void 0 === n ? r.rect.y : n, this.shift(r, e, n), this._bindFitEvents(r), r.moveTo(r.rect.x, r.rect.y), this.shiftLayout(), this.unstamp(r.element), this.sortItemsByPosition(), r.disablePlacing())
        }, c._bindFitEvents = function (t) {
            function e() {
                r++, 2 == r && n.dispatchEvent("fitComplete", null, [t])
            }
            var n = this,
                r = 0;
            t.once("layout", e), this.once("layoutComplete", e)
        }, c.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
        }, c.needsResizeLayout = function () {
            var e = t(this.element),
                n = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
            return e[n] != this.size[n]
        }, c.resizeShiftPercentLayout = function () {
            var e = this._getItemsForLayout(this.items),
                n = this._getOption("horizontal"),
                r = n ? "y" : "x",
                i = n ? "height" : "width",
                s = n ? "rowHeight" : "columnWidth",
                o = n ? "innerHeight" : "innerWidth",
                a = this[s];
            if (a = a && a + this.gutter) {
                this._getMeasurements();
                var l = this[s] + this.gutter;
                e.forEach(function (t) {
                    var e = Math.round(t.rect[r] / a);
                    t.rect[r] = e * l
                })
            } else {
                var c = t(this.element)[o] + this.gutter,
                    u = this.packer[i];
                e.forEach(function (t) {
                    t.rect[r] = t.rect[r] / u * c
                })
            }
            this.shiftLayout()
        }, c.itemDragStart = function (t) {
            if (this.isEnabled) {
                this.stamp(t);
                var e = this.getItem(t);
                e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e))
            }
        }, c.updateShiftTargets = function (t) {
            this.shiftPacker.reset(), this._getBoundingRect();
            var e = this._getOption("originLeft"),
                r = this._getOption("originTop");
            this.stamps.forEach(function (t) {
                var i = this.getItem(t);
                if (!i || !i.isPlacing) {
                    var s = this._getElementOffset(t),
                        o = new n({
                            x: e ? s.left : s.right,
                            y: r ? s.top : s.bottom
                        });
                    this._setRectSize(t, o), this.shiftPacker.placed(o)
                }
            }, this);
            var i = this._getOption("horizontal"),
                s = i ? "rowHeight" : "columnWidth",
                o = i ? "height" : "width";
            this.shiftTargetKeys = [], this.shiftTargets = [];
            var a, l = this[s];
            if (l = l && l + this.gutter) {
                var c = Math.ceil(t.rect[o] / l),
                    u = Math.floor((this.shiftPacker[o] + this.gutter) / l);
                a = (u - c) * l;
                for (var p = 0; u > p; p++) this._addShiftTarget(p * l, 0, a)
            } else a = this.shiftPacker[o] + this.gutter - t.rect[o], this._addShiftTarget(0, 0, a);
            var h = this._getItemsForLayout(this.items),
                f = this._getPackMethod();
            h.forEach(function (t) {
                var e = t.rect;
                this._setRectSize(t.element, e), this.shiftPacker[f](e), this._addShiftTarget(e.x, e.y, a);
                var n = i ? e.x + e.width : e.x,
                    r = i ? e.y : e.y + e.height;
                if (this._addShiftTarget(n, r, a), l)
                    for (var s = Math.round(e[o] / l), c = 1; s > c; c++) {
                        var u = i ? n : e.x + l * c,
                            p = i ? e.y + l * c : r;
                        this._addShiftTarget(u, p, a)
                    }
            }, this)
        }, c._addShiftTarget = function (t, e, n) {
            var r = this._getOption("horizontal") ? e : t;
            if (!(0 !== r && r > n)) {
                var i = t + "," + e,
                    s = -1 != this.shiftTargetKeys.indexOf(i);
                s || (this.shiftTargetKeys.push(i), this.shiftTargets.push({
                    x: t,
                    y: e
                }))
            }
        }, c.shift = function (t, e, n) {
            var r, i = 1 / 0,
                s = {
                    x: e,
                    y: n
                };
            this.shiftTargets.forEach(function (t) {
                var e = a(t, s);
                i > e && (r = t, i = e)
            }), t.rect.x = r.x, t.rect.y = r.y
        };
        var u = 120;
        c.itemDragMove = function (t, e, n) {
            function r() {
                s.shift(i, e, n), i.positionDropPlaceholder(), s.layout()
            }
            var i = this.isEnabled && this.getItem(t);
            if (i) {
                e -= this.size.paddingLeft, n -= this.size.paddingTop;
                var s = this,
                    o = new Date;
                this._itemDragTime && o - this._itemDragTime < u ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(r, u)) : (r(), this._itemDragTime = o)
            }
        }, c.itemDragEnd = function (t) {
            function e() {
                r++, 2 == r && (n.element.classList.remove("is-positioning-post-drag"), n.hideDropPlaceholder(), i.dispatchEvent("dragItemPositioned", null, [n]))
            }
            var n = this.isEnabled && this.getItem(t);
            if (n) {
                clearTimeout(this.dragTimeout), n.element.classList.add("is-positioning-post-drag");
                var r = 0,
                    i = this;
                n.once("layout", e), this.once("layoutComplete", e), n.moveTo(n.rect.x, n.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), n.disablePlacing(), this.unstamp(n.element)
            }
        }, c.bindDraggabillyEvents = function (t) {
            this._bindDraggabillyEvents(t, "on")
        }, c.unbindDraggabillyEvents = function (t) {
            this._bindDraggabillyEvents(t, "off")
        }, c._bindDraggabillyEvents = function (t, e) {
            var n = this.handleDraggabilly;
            t[e]("dragStart", n.dragStart), t[e]("dragMove", n.dragMove), t[e]("dragEnd", n.dragEnd)
        }, c.bindUIDraggableEvents = function (t) {
            this._bindUIDraggableEvents(t, "on")
        }, c.unbindUIDraggableEvents = function (t) {
            this._bindUIDraggableEvents(t, "off")
        }, c._bindUIDraggableEvents = function (t, e) {
            var n = this.handleUIDraggable;
            t[e]("dragstart", n.start)[e]("drag", n.drag)[e]("dragstop", n.stop)
        };
        var p = c.destroy;
        return c.destroy = function () {
            p.apply(this, arguments), this.isEnabled = !1
        }, l.Rect = n, l.Packer = r, l
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (t) {
        "use strict";
        var e = window.Slick || {};
        e = function () {
            function e(e, r) {
                var i, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, e) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !1,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.stopped = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, i = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, i, r), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
            }
            var n = 0;
            return e
        }(), e.prototype.addSlide = e.prototype.slickAdd = function (e, n, r) {
            var i = this;
            if ("boolean" == typeof n) r = n, n = null;
            else if (0 > n || n >= i.slideCount) return !1;
            i.unload(), "number" == typeof n ? 0 === n && 0 === i.$slides.length ? t(e).appendTo(i.$slideTrack) : r ? t(e).insertBefore(i.$slides.eq(n)) : t(e).insertAfter(i.$slides.eq(n)) : r === !0 ? t(e).prependTo(i.$slideTrack) : t(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (e, n) {
                t(n).attr("data-slick-index", e)
            }), i.$slidesCache = i.$slides, i.reinit()
        }, e.prototype.animateHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function (e, n) {
            var r = {},
                i = this;
            i.animateHeight(), i.options.rtl === !0 && i.options.vertical === !1 && (e = -e), i.transformsEnabled === !1 ? i.options.vertical === !1 ? i.$slideTrack.animate({
                left: e
            }, i.options.speed, i.options.easing, n) : i.$slideTrack.animate({
                top: e
            }, i.options.speed, i.options.easing, n) : i.cssTransitions === !1 ? (i.options.rtl === !0 && (i.currentLeft = -i.currentLeft), t({
                animStart: i.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: i.options.speed,
                easing: i.options.easing,
                step: function (t) {
                    t = Math.ceil(t), i.options.vertical === !1 ? (r[i.animType] = "translate(" + t + "px, 0px)", i.$slideTrack.css(r)) : (r[i.animType] = "translate(0px," + t + "px)", i.$slideTrack.css(r))
                },
                complete: function () {
                    n && n.call()
                }
            })) : (i.applyTransition(), e = Math.ceil(e), i.options.vertical === !1 ? r[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : r[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(r), n && setTimeout(function () {
                i.disableTransition(), n.call()
            }, i.options.speed))
        }, e.prototype.asNavFor = function (e) {
            var n = this,
                r = n.options.asNavFor;
            r && null !== r && (r = t(r).not(n.$slider)), null !== r && "object" == typeof r && r.each(function () {
                var n = t(this).slick("getSlick");
                n.unslicked || n.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function (t) {
            var e = this,
                n = {};
            e.options.fade === !1 ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.autoPlay = function () {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && t.stopped !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function () {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function () {
            var t = this;
            t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 === 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
        }, e.prototype.buildArrows = function () {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function () {
            var e, n, r = this;
            if (r.options.dots === !0 && r.slideCount > r.options.slidesToShow) {
                for (n = '<ul class="' + r.options.dotsClass + '">', e = 0; e <= r.getDotCount(); e += 1) n += "<li>" + r.options.customPaging.call(this, r, e) + "</li>";
                n += "</ul>", r.$dots = t(n).appendTo(r.options.appendDots), r.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, n) {
                t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
            }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function () {
            var t, e, n, r, i, s, o, a = this;
            if (r = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (o = a.options.slidesPerRow * a.options.rows, i = Math.ceil(s.length / o), t = 0; i > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var u = t * o + (e * a.options.slidesPerRow + n);
                            s.get(u) && c.appendChild(s.get(u))
                        }
                        l.appendChild(c)
                    }
                    r.appendChild(l)
                }
                a.$slider.html(r), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function (e, n) {
            var r, i, s, o = this,
                a = !1,
                l = o.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === o.respondTo ? s = c : "slider" === o.respondTo ? s = l : "min" === o.respondTo && (s = Math.min(c, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                i = null;
                for (r in o.breakpoints) o.breakpoints.hasOwnProperty(r) && (o.originalSettings.mobileFirst === !1 ? s < o.breakpoints[r] && (i = o.breakpoints[r]) : s > o.breakpoints[r] && (i = o.breakpoints[r]));
                null !== i ? null !== o.activeBreakpoint ? (i !== o.activeBreakpoint || n) && (o.activeBreakpoint = i, "unslick" === o.breakpointSettings[i] ? o.unslick(i) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[i]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = i) : (o.activeBreakpoint = i, "unslick" === o.breakpointSettings[i] ? o.unslick(i) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[i]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = i) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = i), e || a === !1 || o.$slider.trigger("breakpoint", [o, a])
            }
        }, e.prototype.changeSlide = function (e, n) {
            var r, i, s, o = this,
                a = t(e.target);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = o.slideCount % o.options.slidesToScroll !== 0, r = s ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    i = 0 === r ? o.options.slidesToScroll : o.options.slidesToShow - r, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, n);
                    break;
                case "next":
                    i = 0 === r ? o.options.slidesToScroll : r, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, n);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function (t) {
            var e, n, r = this;
            if (e = r.getNavigableIndexes(), n = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var i in e) {
                    if (t < e[i]) {
                        t = n;
                        break
                    }
                    n = e[i]
                }
            return t
        }, e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide), e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpRows = function () {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
        }, e.prototype.clickHandler = function (t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function (e) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                t(this).attr("style", t(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
        }, e.prototype.disableTransition = function (t) {
            var e = this,
                n = {};
            n[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.fadeSlide = function (t, e) {
            var n = this;
            n.cssTransitions === !1 ? (n.$slides.eq(t).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(t).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), e && setTimeout(function () {
                n.disableTransition(t), e.call()
            }, n.options.speed))
        }, e.prototype.fadeSlideOut = function (t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
            var e = this;
            null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function () {
            var t = this,
                e = 0,
                n = 0,
                r = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++r, e = n + t.options.slidesToShow, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) r = t.slideCount;
            else
                for (; e < t.slideCount;) ++r, e = n + t.options.slidesToShow, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return r - 1
        }, e.prototype.getLeft = function (t) {
            var e, n, r, i = this,
                s = 0;
            return i.slideOffset = 0, n = i.$slides.first().outerHeight(!0), i.options.infinite === !0 ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, s = n * i.options.slidesToShow * -1), i.slideCount % i.options.slidesToScroll !== 0 && t + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (t > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (t - i.slideCount)) * i.slideWidth * -1, s = (i.options.slidesToShow - (t - i.slideCount)) * n * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, s = i.slideCount % i.options.slidesToScroll * n * -1))) : t + i.options.slidesToShow > i.slideCount && (i.slideOffset = (t + i.options.slidesToShow - i.slideCount) * i.slideWidth, s = (t + i.options.slidesToShow - i.slideCount) * n), i.slideCount <= i.options.slidesToShow && (i.slideOffset = 0, s = 0), i.options.centerMode === !0 && i.options.infinite === !0 ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : i.options.centerMode === !0 && (i.slideOffset = 0, i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)), e = i.options.vertical === !1 ? t * i.slideWidth * -1 + i.slideOffset : t * n * -1 + s, i.options.variableWidth === !0 && (r = i.slideCount <= i.options.slidesToShow || i.options.infinite === !1 ? i.$slideTrack.children(".slick-slide").eq(t) : i.$slideTrack.children(".slick-slide").eq(t + i.options.slidesToShow), e = r[0] ? -1 * r[0].offsetLeft : 0, i.options.centerMode === !0 && (r = i.slideCount <= i.options.slidesToShow || i.options.infinite === !1 ? i.$slideTrack.children(".slick-slide").eq(t) : i.$slideTrack.children(".slick-slide").eq(t + i.options.slidesToShow + 1), e = r[0] ? -1 * r[0].offsetLeft : 0, e += (i.$list.width() - r.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function () {
            var t, e = this,
                n = 0,
                r = 0,
                i = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, r = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > n;) i.push(n), n = r + e.options.slidesToScroll, r += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return i
        }, e.prototype.getSlick = function () {
            return this
        }, e.prototype.getSlideCount = function () {
            var e, n, r, i = this;
            return r = i.options.centerMode === !0 ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, i.options.swipeToSlide === !0 ? (i.$slideTrack.find(".slick-slide").each(function (e, s) {
                return s.offsetLeft - r + t(s).outerWidth() / 2 > -1 * i.swipeLeft ? (n = s, !1) : void 0
            }), e = Math.abs(t(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
            var n = this;
            n.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function (e) {
            var n = this;
            t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots()), e && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA()
        }, e.prototype.initArrowEvents = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function () {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
        }, e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
        }, e.prototype.keyHandler = function (t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, e.prototype.lazyLoad = function () {
            function e(e) {
                t("img[data-lazy]", e).each(function () {
                    var e = t(this),
                        n = t(this).attr("data-lazy"),
                        r = document.createElement("img");
                    r.onload = function () {
                        e.animate({
                            opacity: 0
                        }, 100, function () {
                            e.attr("src", n).animate({
                                opacity: 1
                            }, 200, function () {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, r.onerror = function () {
                        var t = e.parents(".feed-item");
                        console.log("Juicer: post with id " + t.data("id") + " has a broken image. Making into text post."), t.removeClass("image-post").removeClass("j-video").addClass("words"), e.parents(".j-image").remove()
                    }, r.src = n
                })
            }
            var n, r, i, s, o = this;
            o.options.centerMode === !0 ? o.options.infinite === !0 ? (i = o.currentSlide + (o.options.slidesToShow / 2 + 1), s = i + o.options.slidesToShow + 2) : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i -= o.options.slidesToShow, s = i + 2 * o.options.slidesToShow, o.options.fade === !0 && (i > 0 && i--, s <= o.slideCount && s++)), n = o.$slider.find(".slick-slide").slice(i, s), e(n), o.slideCount <= o.options.slidesToShow ? (r = o.$slider.find(".slick-slide"), e(r)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (r = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(r)) : 0 === o.currentSlide && (r = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), e(r))
        }, e.prototype.loadSlider = function () {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function () {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function () {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function () {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.stop = e.prototype.slickStop = function () {
            var t = this;
            t.autoPlayClear(), t.stopped = !0
        }, e.prototype.play = e.prototype.slickPlay = function () {
            var t = this;
            t.paused = !1, t.stopped = !1, t.autoPlay()
        }, e.prototype.postSlide = function (t) {
            var e = this;
            e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(), e.options.accessibility === !0 && e.initADA()
        }, e.prototype.prev = e.prototype.slickPrev = function () {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function (t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function () {
            var e, n, r = this;
            e = t("img[data-lazy]", r.$slider).length, e > 0 && (n = t("img[data-lazy]", r.$slider).first(), n.attr("src", null), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function () {
                n.removeAttr("data-lazy"), r.progressiveLazyLoad(), r.options.adaptiveHeight === !0 && r.setPosition()
            }).error(function () {
                n.removeAttr("data-lazy"), r.progressiveLazyLoad()
            }))
        }, e.prototype.refresh = function (e) {
            var n, r, i = this;
            r = i.slideCount - i.options.slidesToShow, i.options.infinite || (i.slideCount <= i.options.slidesToShow ? i.currentSlide = 0 : i.currentSlide > r && (i.currentSlide = r)), n = i.currentSlide, i.destroy(!0), t.extend(i, i.initials, {
                currentSlide: n
            }), i.init(), e || i.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function () {
            var e, n, r, i = this,
                s = i.options.responsive || null;
            if ("array" === t.type(s) && s.length) {
                i.respondTo = i.options.respondTo || "window";
                for (e in s)
                    if (r = i.breakpoints.length - 1, n = s[e].breakpoint, s.hasOwnProperty(e)) {
                        for (; r >= 0;) i.breakpoints[r] && i.breakpoints[r] === n && i.breakpoints.splice(r, 1), r--;
                        i.breakpoints.push(n), i.breakpointSettings[n] = s[e].settings
                    } i.breakpoints.sort(function (t, e) {
                    return i.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), e.options.autoplay === !0 && e.focusHandler()
        }, e.prototype.resize = function () {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, n) {
            var r = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : r.slideCount - 1) : t = e === !0 ? --t : t, r.slideCount < 1 || 0 > t || t > r.slideCount - 1 ? !1 : (r.unload(), n === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(t).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, void r.reinit())
        }, e.prototype.setCSS = function (t) {
            var e, n, r = this,
                i = {};
            r.options.rtl === !0 && (t = -t), e = "left" == r.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == r.positionProp ? Math.ceil(t) + "px" : "0px", i[r.positionProp] = t, r.transformsEnabled === !1 ? r.$slideTrack.css(i) : (i = {}, r.cssTransitions === !1 ? (i[r.animType] = "translate(" + e + ", " + n + ")", r.$slideTrack.css(i)) : (i[r.animType] = "translate3d(" + e + ", " + n + ", 0px)", r.$slideTrack.css(i)))
        }, e.prototype.setDimensions = function () {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function () {
            var e, n = this;
            n.$slides.each(function (r, i) {
                e = n.slideWidth * r * -1, n.options.rtl === !0 ? t(i).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : t(i).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function (e, n, r) {
            var i, s, o = this;
            if ("responsive" === e && "array" === t.type(n))
                for (s in n)
                    if ("array" !== t.type(o.options.responsive)) o.options.responsive = [n[s]];
                    else {
                        for (i = o.options.responsive.length - 1; i >= 0;) o.options.responsive[i].breakpoint === n[s].breakpoint && o.options.responsive.splice(i, 1), i--;
                        o.options.responsive.push(n[s])
                    }
            else o.options[e] = n;
            r === !0 && (o.unload(),
                o.reinit())
        }, e.prototype.setPosition = function () {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function () {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function (t) {
            var e, n, r, i, s = this;
            n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = s.options.slidesToShow + t, n.slice(r - e + 1, r + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (i = s.slideCount % s.options.slidesToShow, r = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? n.slice(r - (s.options.slidesToShow - i), r + i).addClass("slick-active").attr("aria-hidden", "false") : n.slice(r, r + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, e.prototype.setupInfinite = function () {
            var e, n, r, i = this;
            if (i.options.fade === !0 && (i.options.centerMode = !1), i.options.infinite === !0 && i.options.fade === !1 && (n = null, i.slideCount > i.options.slidesToShow)) {
                for (r = i.options.centerMode === !0 ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - r; e -= 1) n = e - 1, t(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
                for (e = 0; r > e; e += 1) n = e, t(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
                i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.setPaused = function (t) {
            var e = this;
            e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
        }, e.prototype.selectHandler = function (e) {
            var n = this,
                r = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                i = parseInt(r.attr("data-slick-index"));
            return i || (i = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(i), void n.asNavFor(i)) : void n.slideHandler(i)
        }, e.prototype.slideHandler = function (t, e, n) {
            var r, i, s, o, a = null,
                l = this;
            return e = e || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (e === !1 && l.asNavFor(t), r = t, a = l.getLeft(r), o = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? o : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (r = l.currentSlide, n !== !0 ? l.animateSlide(o, function () {
                l.postSlide(r)
            }) : l.postSlide(r))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (r = l.currentSlide, n !== !0 ? l.animateSlide(o, function () {
                l.postSlide(r)
            }) : l.postSlide(r))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), i = 0 > r ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + r : r >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : r - l.slideCount : r, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, i]), s = l.currentSlide, l.currentSlide = i, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (n !== !0 ? (l.fadeSlideOut(s), l.fadeSlide(i, function () {
                l.postSlide(i)
            })) : l.postSlide(i), void l.animateHeight()) : void(n !== !0 ? l.animateSlide(a, function () {
                l.postSlide(i)
            }) : l.postSlide(i))))
        }, e.prototype.startLoad = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function () {
            var t, e, n, r, i = this;
            return t = i.touchObject.startX - i.touchObject.curX, e = i.touchObject.startY - i.touchObject.curY, n = Math.atan2(e, t), r = Math.round(180 * n / Math.PI), 0 > r && (r = 360 - Math.abs(r)), 45 >= r && r >= 0 ? i.options.rtl === !1 ? "left" : "right" : 360 >= r && r >= 315 ? i.options.rtl === !1 ? "left" : "right" : r >= 135 && 225 >= r ? i.options.rtl === !1 ? "right" : "left" : i.options.verticalSwiping === !0 ? r >= 35 && 135 >= r ? "left" : "right" : "vertical"
        }, e.prototype.swipeEnd = function (t) {
            var e, n = this;
            if (n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
                case "left":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.slideHandler(e), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
                    break;
                case "right":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.slideHandler(e), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function (t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function (t) {
            var e, n, r, i, s, o = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !o.dragging || s && 1 !== s.length ? !1 : (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), n = o.swipeDirection(), "vertical" !== n ? (void 0 !== t.originalEvent && o.touchObject.swipeLength > 4 && t.preventDefault(), i = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), o.options.verticalSwiping === !0 && (i = o.touchObject.curY > o.touchObject.startY ? 1 : -1), r = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (0 === o.currentSlide && "right" === n || o.currentSlide >= o.getDotCount() && "left" === n) && (r = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.options.vertical === !1 ? o.swipeLeft = e + r * i : o.swipeLeft = e + r * (o.$list.height() / o.listWidth) * i, o.options.verticalSwiping === !0 && (o.swipeLeft = e + r * i), o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft)) : void 0)
        }, e.prototype.swipeStart = function (t) {
            var e, n = this;
            return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(n.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function () {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function (t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function () {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function () {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function () {
            var t = this;
            document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : t.options.autoplay === !0 && (t.paused = !1, t.autoPlay())
        }, e.prototype.initADA = function () {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (n) {
                var r = "slick-slide" + e.instanceUid + n;
                t(this).attr({
                    role: "option",
                    "aria-describedby": r
                }), t(this).find(".j-text").attr("id", r)
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (n) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + n,
                    id: "slick-slide" + e.instanceUid + n
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.activateADA = function () {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.on("focus.slick blur.slick", "*", function (n) {
                n.stopImmediatePropagation();
                var r = t(this);
                setTimeout(function () {
                    e.isPlay && (r.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
                }, 0)
            })
        }, t.fn.slick = function () {
            var t, n, r = this,
                i = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                o = r.length;
            for (t = 0; o > t; t++)
                if ("object" == typeof i || "undefined" == typeof i ? r[t].slick = new e(r[t], i) : n = r[t].slick[i].apply(r[t].slick, s), "undefined" != typeof n) return n;
            return r
        }
    }),
    function () {
        window.Juicer = {
            Models: {},
            Collections: {},
            Views: {},
            Active: [],
            initialize: function () {
                return _u.each(jQuery(".juicer-feed"), function (t) {
                    return function (t) {
                        var e, n;
                        return e = jQuery(t), e.is(":visible") && !e.hasClass("j-post-overlay") ? e.hasClass("j-initialized") ? void 0 : (n = new Juicer.Views.Feed({
                            el: t
                        }).render(), Juicer.Active.push(n), e.addClass("j-initialized")) : void 0
                    }
                }(this))
            },
            remove: function () {
                return clearInterval(window.jInterval), _u.each(Juicer.Active, function (t) {
                    return function (t) {
                        return t.close()
                    }
                }(this)), window.Juicer.Active = []
            }
        }
    }.call(this),
    function () {
        jQuery(document).ready(function () {
            var t;
            return t = jQuery.fn.jquery.split("."), jQuery.map(t, function (t) {
                return ("0" + t).slice(-2)
            }).join(".") >= "01.07" ? (jQuery(".juicer-feed").length > 0 && Juicer.initialize(), window.jInterval = setInterval(function () {
                var t, e;
                return jQuery(".juicer-feed").length > 0 && (e = _u.map(jQuery(".juicer-feed"), function (t) {
                    return function (t) {
                        return jQuery(t).hasClass("j-initialized")
                    }
                }(this)), t = !_u.contains(e, !1), !t) ? Juicer.initialize() : void 0
            }, 1e3)) : jQuery(".juicer-feed").before("<h1>You need to have at least jQuery 1.7 installed for the Juicer plugin to work. Please <a href='https://www.juicer.io/contact'>contact us</a> with any questions.</h1>")
        })
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.SubView = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "opened-sidebar-option", n.prototype.title = "Feed Options", n.prototype.initialize = function (t) {
                return this.feed = t.feed, this.parent = t.parent, this.target = t.target, this.feedView = t.feedView, this.events = _u.extend({}, this.inheritedEvents, this.events), this.delegateEvents()
            }, n.prototype.inheritedEvents = {
                "click .close-subview": "close"
            }, n.prototype.render = function () {
                return this.renderTemplate(), this.renderTitle(), $(this.target).after(this.el), setTimeout(function (t) {
                    return function () {
                        return t.$el.addClass("visible")
                    }
                }(this), 100)
            }, n.prototype.renderTemplate = function () {
                return this.$el.html(this.template({
                    feed: this.feed
                }))
            }, n.prototype.renderTitle = function () {
                return this.$el.prepend(this.titleTemplate())
            }, n.prototype.titleTemplate = function () {
                return "<h2 class='subview-title relative tac uc bold bg-nav-header py-25'><a class='close-subview absolute sprite'>Close</a>" + this.title + "</h2>"
            }, n.prototype.close = function () {
                return this.$el.removeClass("visible"), setTimeout(function (t) {
                    return function () {
                        return t.remove()
                    }
                }(this), 500)
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.SubViewSlide = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "sliding-sidebar-option", n.prototype.render = function () {
                return this.renderTemplate(), this.$el.css({
                    display: "none"
                }), $(this.target).after(this.el), this.$el.slideDown()
            }, n.prototype.close = function () {
                return this.$el.slideUp(function (t) {
                    return function () {
                        return t.remove()
                    }
                }(this))
            }, n
        }(Juicer.Views.SubView)
    }.call(this),
    function () {
        Juicer.Helpers = {
            renderPartial: function (t, e) {
                var n;
                null == e && (e = {}), t = t.split("/"), t[t.length - 1] = "_" + t[t.length - 1], t = t.join("/");
                try {
                    return JST["partials/" + t](e)
                } catch (r) {
                    return n = r, console.log("Sorry, something went wrong with the partial: '" + t + "'"), console.log(n), ""
                }
            },
            numberWithCommas: function (t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            simpleDate: function (t) {
                return null != t ? (t = new Date(t), strftime("%-m/%-d/%y", t)) : void 0
            },
            fullDate: function (t, e, n) {
                return null == e && (e = "%-m/%-d/%y at %-l:%M%p"), null == n && (n = !0), null != t ? (t = new Date(t), n && (isNaN(Date.parse(t.toLocaleString())) || (t = new Date(t.toLocaleString()))), "undefined" == typeof strftime ? t : strftime(e, t)) : void 0
            },
            prettify: function (t) {
                return t = t.replace("-", " "), t = t.replace("_", " "), this.capitalizeEachWord(t)
            },
            capitalizeEachWord: function (t) {
                return t.replace(/\w\S*/g, function (t) {
                    return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
                })
            },
            timeAgo: function (t) {
                var e, n;
                return t = new Date(t), n = Math.floor((new Date - t) / 1e3), e = Math.floor(n / 31536e3), e > 1 ? e + "y" : (e = Math.floor(n / 2592e3), e > 1 ? e + "mo" : (e = Math.floor(n / 86400), e > 1 ? e + "d" : (e = Math.floor(n / 3600), e > 1 ? e + "h" : (e = Math.floor(n / 60), e > 1 ? e + "m" : Math.floor(n) + "s"))))
            },
            sample: function (t) {
                return t[Math.floor(Math.random() * t.length)]
            },
            confirm: function (t) {
                return null != window.confirmed ? !0 : confirm(t) ? (window.confirmed = !0, !0) : !1
            },
            format: function (t) {
                return null == t ? null : (t = t.replace(/\r\n?/, "\n"), t = jQuery.trim(t), t.length > 0 && (t = t.replace(/\n\n+/g, "</p><p>"), t = t.replace(/\n/g, "<br />"), t = t.replace(this.xss, ""), t = "<p>" + t + "</p>", t = t.autoLink()), t)
            },
            rgb2hex: function (t) {
                return /^#[0-9A-F]{6}$/i.test(t) ? t : (t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), t ? "#" + this.hex(t[1]) + this.hex(t[2]) + this.hex(t[3]) : "#")
            },
            hex: function (t) {
                return ("0" + parseInt(t).toString(16)).slice(-2)
            },
            xss: /javascript|onerror|alert|iframe|js|script|console|confirm|cookie|java|onmouseover|eval|document|window/gi
        }
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.FormView = function (n) {
            function r() {
                this.invalid = t(this.invalid, this), this.valid = t(this.valid, this), this.prepareModel(), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.delegateEvents = function (t) {
                return this.events = _u.extend(this._baseEvents(), _u.result(this, "events")), r.__super__.delegateEvents.call(this, t)
            }, r.prototype._baseEvents = function () {
                return {
                    "change [data-validation]": this.validateField,
                    "keyup [data-validation].invalid": this.validateField,
                    submit: this.processForm,
                    "click input[type=submit]": this.processForm
                }
            }, r.prototype.prepareModel = function () {
                return this.model = this.createModel(), this.setupValidation()
            }, r.prototype.createModel = function () {
                throw new Error("implement #createModel in your FormView subclass to return a JuicerBackbone model")
            }, r.prototype.namespace = null, r.prototype.loadingMessage = "Loading...", r.prototype.setupValidation = function () {
                return JuicerBackbone.Validation.unbind(this), JuicerBackbone.Validation.bind(this, {
                    model: this.model,
                    valid: this.valid,
                    invalid: this.invalid
                })
            }, r.prototype.valid = function (t, e, n) {
                return this.removeErrorMessage(e), this.$("[data-validation=" + e + "]").removeClass("invalid").addClass("valid")
            }, r.prototype.invalid = function (t, e, n, r) {
                return this.removeErrorMessage(e), this.$("[data-validation=" + e + "]").removeClass("valid").addClass("invalid").parents(".form-field").append("<small class='error " + e + "'>" + n + "</small>")
            }, r.prototype.showActivityIndicator = function (t) {
                return this.submit = t, this.submit.attr("disabled", "disabled"), this.submitMessage = this.submit.val(), this.submit.val(this.loadingMessage)
            }, r.prototype.hideActivityIndicator = function () {
                return this.submitMessage && this.submit.val(this.submitMessage), this.submit.removeAttr("disabled")
            }, r.prototype.removeErrorMessage = function (t) {
                return this.$(".error." + t).remove()
            }, r.prototype.validateField = function (t) {
                var e, n, r;
                return n = $(t.target).attr("data-validation"), r = $(t.target).val(), (e = this.model.preValidate(n, r)) ? this.invalid(this, n, e) : this.valid(this, n)
            }, r.prototype.processForm = function (t) {
                return t.preventDefault(), this.showActivityIndicator($(t.target)), this.updateModel(), this.submitForm()
            }, r.prototype.updateModel = function () {
                var t;
                return t = JuicerBackbone.Syphon.serialize(this), this.model.set(t[this.namespace])
            }, r.prototype.submitForm = function () {
                return this.model.validate() ? this.hideActivityIndicator() : this.$el[0].submit()
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.admin_downgrade = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", e = this.action.match("delete") ? "Delete" : "Downgrade", t += '<div class="tac p-30"><h3 class="light fs-2 tc-orange mb-25">', t += this.escape(e), t += ' User</h3><form action="', t += this.escape(this.action), t += '" method="post"><input name="authenticity_token" type="hidden" value="', t += this.escape(this.csrf), t += '" /><input name="user_id" type="hidden" value="', t += this.escape(this.userId), t += '" /><div class="select mb-30"><select name="churn[reason]"><option>Why are they ', t += this.escape(e.slice(0, -1)), t += "ing their account?</option>", _u.each(this.reasons, function (e) {
                            return function (n) {
                                return t += '<option value="', t += e.escape(n), t += '">', t += e.escape(n), t += "</option>"
                            }
                        }(this)), t += '</select></div><textarea class="bordered churn-comments mb-25" name="churn[comments]" placeholder="Notes? Any More details? Copy and paste anything they say specifically."></textarea><div class="mb-25"><input name="churn[positive]" type="hidden" value="0" /><input checked="true" id="positive" name="churn[positive]" type="checkbox" value="1" /><label for="positive">Did the customer have a positive experience with Juicer?</label></div>', n = this.action.match("mark") ? "Mark for Downgrade" : e + " now", t += '<input class="j-button" type="submit" value="', t += this.escape(n), t += '" /></form></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.analytics_date_range = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac p-50"><h2 class="light fs-2 tc-maroon">Viewing Options</h2><h3 class="fifteen tc-dark-gray mb-25">Select the dates you\u2019d like to view analytics for (month/day/year):</h3><form action="', t += this.escape(window.location.pathname), t += '"><div class="mb-30"><input class="date-range-field" name="start" placeholder="MM/DD/YYYY" type="text" value="', t += this.escape(this.start), t += '" /><span class="mx-10">to</span><input class="date-range-field" name="end" placeholder="MM/DD/YYYY" type="text" value="', t += this.escape(this.end), t += '" /></div><input class="j-button" type="submit" value="filter" /></form></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["campaign/upgrade_to_campaign"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac p-50"><h2 class="light fs-2 tc-orange">Upgrade to a Campaign Plan</h2><h3 class="fifteen tc-gray mb-40">The Juicer Campaign Plan allows you to automatically request permission from content creators to use their posts in your feed. Then when they grant permission, we automatically publish the post for you.</h3><a class="j-button campaign-info pointer" href="/campaign">Learn more about Campaign Plans</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["campaign/urm_connect_social"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", t += '<div class="tac p-50">', n = this.post.sourceType(), e = n.toLowerCase(), t += '<h2 class="light fs-2 tc-orange">First connect your ', t += this.escape(n), t += ' account</h2><h3 class="fifteen tc-gray mb-40">Juicer will request permission from the account owner using your connected account.</h3><a class="j-button j-', t += this.escape(e), t += " j-social-icon j-", t += this.escape(e), t += '-border social-account social-j-button" href="/auth/', t += this.escape(e), t += '" style="color: white;">Connect your ', t += this.escape(n), t += " account</a></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["campaign/urm_not_eligible"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac p-50"><h2 class="light fs-2 tc-orange">Sorry, you can\'t request URM for this post.</h2><h3 class="fifteen tc-gray mb-40">Juicer doesn\'t current support URM requests for ', t += this.escape(this.post.sourceType()), t += ' posts.</h3><div class="actions" data-id="', t += this.escape(this.post.get("id")), t += '"><div class="pointer urm-overlay-approve j-button tc-white">Approve it anyways, push to live feed.</div></div></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["campaign/urm_request"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", t += '<div class="tac p-50"><h2 class="light fs-2 tc-orange">Request Permission to use Post</h2><form class="urm-request-form">', e = "Twitter" === this.post.sourceType() ? 180 : 500, t += '<textarea class="bordered my-40" maxlength="', t += this.escape(e), t += '" name="css" placeholder="Enter a message to request permission with..." style="height: 20vh;">', t += this.feed.urmMessage(), t += '</textarea><input name="post_id" type="hidden" value="', t += this.escape(this.post.get("id")), t += '" /><p class="tc-gray twelve px-25 mb-25">This message will be posted using the <strong>@', t += this.escape(this.socialAccount.get("name")), t += "</strong> account for <strong>", t += this.escape(this.post.sourceType()), t += "</strong>. If you want to use a different account please change your connected ", t += this.escape(this.post.sourceType()), t += ' account on your <a class="bold" href="/feeds/', t += this.escape(this.feed.get("slug")), t += '/social-accounts">social accounts page</a>. </p><input class="j-button" type="submit" value="Request Permission" /></form></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.churn = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac p-50"><h1 class="fs-1-5 tc-dark-gray bold mb-25">Are you sure you want to delete your account?</h1><p class="tc-dark-gray mb-25 fifteen">Deleting your account will remove all of your data and cause any embedded feeds to stop working. It might be worth instead downgrading to a small plan, which will keep your paid plan active until the next billing date, and at that point, downgrade you to a small plan, which will maintain one feed with 2 sources.</p><a class="j-button small mb-40" href="/plans">No, downgrade my account instead.</a><a class="delete tc-gray block fourteen pointer">Yes, let\'s delete my account.</a></div>';
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.downgrade_overlay = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="p-50 tac"><h2 class="light fs-2 tc-orange tac">Your Juicer Account Will Downgrade</h2><p class="tc-gray fourteen mb-25">Your Juicer Account will remain active as a <strong>', t += this.escape(this.plan), t += "</strong> account until <strong>", t += this.escape(this.downgradeAt), t += '</strong> at which point it will become a small plan, with 1 feed and 2 sources and Juicer branding. </p><a class="j-button small mb-20" href="/">Sounds good! Take me to my feed.</a><a class="tc-gray block fourteen" href="/plans">Oh no, I want to reactivate my account!</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/admin"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        switch (t = "", t += "<h3>", t += this.escape(this.model.get("email")), t += "</h3>", n = "Are you sure you want to remove this user from your enterprise account and all associated feeds?", t += '<a class="delete-user sprite"', e = n) {
                            case !0:
                                t += ' data-confirm="data-confirm"';
                                break;
                            case !1:
                            case null:
                                break;
                            default:
                                t += ' data-confirm="', t += this.escape(e), t += '"'
                        }
                        return t += ' data-method="post" href="/enterprise/', t += this.escape(this.account.get("slug")), t += "/", t += this.escape(this.model.get("id")), t += '/remove" rel="nofollow">Remove</a>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/calculator"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="row"><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="light fs-3 calculator-sources">', t += this.escape(this.model.sources()), t += '</h3><h4 class="mb-25">Social Media Sources</h4><input class="bg-green" data-attribute="sources" max="21" min="1" type="range" value="', t += this.escape(this.model.get("sources")), t += '" /></div><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="light fs-2 calculator-frequency">', t += this.escape(this.model.frequencyInWords()), t += '</h3><h4 class="mb-25">Update Frequency</h4><input class="bg-green" data-attribute="frequency" max="7" min="1" type="range" value="', t += this.escape(this.model.get("frequency")), t += '" /></div><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="fs-3 light calculator-price">', t += this.escape(this.model.priceString()), t += '</h3><h4 class="calculator-price-label">', t += this.escape(this.model.priceLabel()), t += "</h4></div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/create_assignment_form"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="p-50 tac"><h2 class="light fs-2 tc-orange">Add User to "', t += this.escape(this.model.get("name")), t += '"</h2><form class="new-assignment" method="post"><input name="enterprise_id" type="hidden" value="', t += this.escape(this.account.get("slug")), t += '" /><input name="feed_id" type="hidden" value="', t += this.escape(this.model.get("id")), t += '" /><input class="mb-25 bordered" name="email" placeholder="Their Email Address" type="email" /><input class="fw j-button" name="commit" type="submit" value="Add User to ', t += this.escape(this.model.get("name")), t += '" /></form></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/feed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", e = this.model.get("slug"), t += '<h3 class="mb-10"><a class="fs-2 tc-maroon" href="/feeds/', t += this.escape(e), t += '">', t += this.escape(this.model.get("name")), t += '</a></h3><ul class="enterprise-feed-actions"><li class="ibt"><a aria-label="View Feed" class="sprite enterprise-feed-view hint--bottom-left" href="/feeds/', t += this.escape(e), t += '">View</a></li>', this.account.get("auto_fetch_all") && (t += '<li class="ibt ml-10"><a aria-label="Fetch all posts for all sources in this feed" class="fetch-all sprite hint--bottom-left" href="#">Fetch All Posts</a></li>'), t += '<li class="ibt ml-10"><a aria-label="Edit This Feed" class="sprite enterprise-feed-edit hint--bottom-left" href="/feeds/', t += this.escape(e), t += '/edit">Edit</a></li><li class="ibt ml-10"><a aria-label="Delete this Feed" class="sprite enterprise-feed-delete hint--bottom-left" data-confirm="Are you sure you want to delete ', t += this.escape(e), t += ' feed? This will remove all sources and posts and is non-reversible." data-method="delete" href="/feeds/', t += this.escape(e), t += '" rel="nofollow">Delete</a></li></ul>', n = this.model.get("sources").length, t += '<div class="tc-dark-gray enterprise-feed-pricing">', t += this.escape(this.model.get("update_frequency_in_words")), t += " \xd7 ", t += this.escape(n), t += " ", t += this.escape(_u("source").pluralize(n)), t += " = <strong>", t += this.escape(this.model.get("formatted_cost")), t += '</strong> per month </div><ul class="my-5">', _u.each(this.sources, function (e) {
                            return function (n) {
                                var r, i, s;
                                switch (s = n.get("term"), t += "<li", r = s) {
                                    case !0:
                                        t += ' alt="alt"';
                                        break;
                                    case !1:
                                    case null:
                                        break;
                                    default:
                                        t += ' alt="', t += e.escape(r), t += '"'
                                }
                                switch (t += ' aria-label="', t += e.escape(n.displayName()), t += '" class="enterprise-feed-source hint--bottom-right"', i = s) {
                                    case !0:
                                        t += ' title="title"';
                                        break;
                                    case !1:
                                    case null:
                                        break;
                                    default:
                                        t += ' title="', t += e.escape(i), t += '"'
                                }
                                return t += '><span class="j-', t += e.escape(n.get("source").toLowerCase()), t += ' j-social-icon bg-none tc-gray fs-2"></span></li>'
                            }
                        }(this)), t += '</ul><h4 class="fs-1-2-5 tc-dark-gray mb-5">Feed Users</h4><ul>', _u.each(this.assignments, function (e) {
                            return function (n) {
                                return t += '<li class="enterprise-user-assignment ibt"><span class="enterprise-assignment-email">', t += e.escape(n.get("email")), t += '</span><a aria-label="Delete user ', t += e.escape(n.get("email")), t += " from feed ", t += e.escape(e.model.get("name")), t += '." class="delete-assignment" data-id="', t += e.escape(n.get("id")), t += '"></a></li>'
                            }
                        }(this)), t += '<li class="enterprise-user-assignment ibt tc-gray add-assignment">+ Add User</li></ul>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/invite_admin"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="p-50 tac"><h2 class="light fs-2 tc-orange">Add New Admin</h2><h3 class="fs-gray mb-25">This will add them to all feeds, allow them to create new feeds and edit existing feeds.</h3><form accept-charset="UTF-8" action="/enterprise/', t += this.escape(this.model.get("slug")), t += '/admin" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /><input name="authenticity_token" type="hidden" value="', t += this.escape(this.csrf), t += '" /></div><input class="mb-25 bordered" name="email" placeholder="Their Email Address" type="email" /><input class="fw j-button" name="commit" type="submit" value="Make User Admin" /></form></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/show"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h1 class="fs-2 tc-maroon mb-25">Enterprise Account for ', t += this.escape(this.model.get("name")), t += "</h1>", t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
                            model: this.model
                        }), t += '<div class="enterprise-content"><div class="enterprise-cost bg-white border tac mb-50 tc-slevin p-40"><h4 class="fs-1-125 tc-dark-gray">Current Monthly Cost of your Account</h4><h3 class="fs-3 tc-dark-gray">', t += this.escape(this.model.get("formatted_cost")), t += '</h3><div class="enterprise-explanation">This is the current cost of your enterprise account. It\'s based on the number of sources and feed update frequencies. This is prorated to the minute.</div></div><div class="mb-25 flex"><input class="enterprise-search bordered" placeholder="Search feeds by name, source name or user email" type="search" value="', t += this.escape(this.model.query), t += '" /><a class="j-button small" href="/feeds/new">+ Add New Feed</a></div><ul class="feeds tac"></ul></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/user"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        switch (t = "", t += '<div class="enterprise-user tc-gray"><h3>', t += this.escape(this.model.get("email")), t += "</h3>", n = "Are you sure you want to remove this user from your enterprise account and all associated feeds?", t += '<a class="delete-user sprite"', e = n) {
                            case !0:
                                t += ' data-confirm="data-confirm"';
                                break;
                            case !1:
                            case null:
                                break;
                            default:
                                t += ' data-confirm="', t += this.escape(e), t += '"'
                        }
                        return t += ' data-method="post" href="/enterprise/', t += this.escape(this.account.get("slug")), t += "/", t += this.escape(this.model.get("id")), t += '/remove" rel="nofollow">Remove</a></div><ul class="enterprise-user-feeds"><h4 class="uc bold tc-grapefruit mb-10">Feeds Managed</h4>', _u.each(this.model.get("assignments"), function (e) {
                            return function (n) {
                                return t += '<li class="enterprise-user-assignment ibt">', t += e.escape(n.name), t += '<a class="delete-assignment sprite" data-id="', t += e.escape(n.id), t += '">Delete</a></li>'
                            }
                        }(this)), t += "</ul>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/users"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h1 class="fs-2 tc-maroon mb-25">Enterprise Account for ', t += this.escape(this.model.get("name")), t += '</h1><div class="cf">', t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
                            model: this.model
                        }), t += '<div class="enterprise-content"><div class="cf mb-15"><h2 class="fl light fs-1-5 tc-maroon">Admins</h2><a class="j-button small fr new-enterprise-admin">+ Add New Admin</a></div><ul class="enterprise-admins bg-white border tc-slevin mb-40"></ul><h2 class="light fs-1-5 tc-maroon">Users</h2><ul class="enterprise-users"></ul></div></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["enterprise/white_label"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        if (t = "", t += '<h1 class="fs-2 tc-maroon mb-25">Enterprise Account for ', t += this.escape(this.model.get("name")), t += "</h1>", t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
                                model: this.model
                            }), t += '<div class="enterprise-content"><div class="bg-white border p-30">', this.model.get("white_label")) t += '<h1 class="white-label-success light tc-green fs-1-25 mb-25 tac">Success! ', t += this.escape(this.model.get("host")), t += ' is now set up to White Label Juicer</h1><div class="tc-gray fifteen"><p class="mb-25">You\'ll notice that when you visit the feed from that URL the functionality is limited. This is on purpose. We\'d recommend visiting your admin dashboard from the Juicer domain, and just use this one for clients.</p><p>When you invite a client to a feed it should automatically link them to this URL (you should test this out first). (Click "+ add user" next to one of your feeds from your enterprise dashboard).</p></div>';
                        else {
                            switch (t += '<h1 class="tc-dark-gray fs-1-5 mb-25">Set up White Label</h1><p class="mb-25 tc-dark-gray fs-1">Want to host Juicer on your own URL with your own logo? Something like <strong>http://social.yourdomain.com</strong> ? We need to set this up. <ol class="enterprise_whiteLabelSteps"><li>Create a subdomain or a new domain and set its <strong>CNAME</strong> to <br /><strong>juicer-io.herokuapp.com</strong>. </li><li>Once you\'ve done so, enter the domain URL below: </li></ol><form class="mt-20 white-label-url">', n = this.model.get("url") ? this.model.get("url") : null, t += '<input class="mb-10 bordered" name="url" placeholder="http://feeds.yourdomain.com" type="url"', e = n) {
                                case !0:
                                    t += ' value="value"';
                                    break;
                                case !1:
                                case null:
                                    break;
                                default:
                                    t += ' value="', t += this.escape(e), t += '"'
                            }
                            t += ' /><input class="fw j-button" type="submit" value="Confirm Domain is set up" /></form></p>', this.model.get("error") && (t += '<div class="cname-error mt-40 p-25 tc-gray"><strong>', t += this.escape(this.model.get("host")), t += "</strong> is not resolving with a CNAME to juicer-io.herokuapp.com.If you've set it up, please try again later, as this can take up to 48 hours to resolve. </div>")
                        }
                        return t += "</div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.errors = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<ul class="errors source-errors px-25 mb-15">', $.each(this.errors, function (e) {
                            return function (n) {
                                return _u.each(e.errors[n], function (e) {
                                    return t += '<li class="tc-grapefruit">', t += e, t += "</li>"
                                })
                            }
                        }(this)), t += "</ul>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.feed = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", e = this.feed.get("posts").models, t += Juicer.Helpers.renderPartial("custom_styles", {
                            feed: this.feed
                        }), this.feed.displayFilters() && (t += Juicer.Helpers.renderPartial("filters/" + this.feed.filterPartial(), {
                            feed: this.feed,
                            filter: this.filter
                        })), e.length > 0 ? _u.each(e, function (e) {
                            return function (n) {
                                var r;
                                return t += "<li", r = "", r += e.escape(n.classes()), r.length > 0 && (t += ' class="', t += r, t += '"'), t += ' data-id="', t += e.escape(n.get("id")), t += '" data-source="', t += e.escape(n.lowerType()), t += '">', t += Juicer.Helpers.renderPartial("actions", {
                                    post: n,
                                    admin: e.admin
                                }), t += Juicer.Helpers.renderPartial("feeds/" + e.feed.partial(), {
                                    post: n,
                                    feed: e.feed
                                }), t += "</li>"
                            }
                        }(this)) : this.admin ? (t += '<div class="empty"><p class="fs-1-25 mb-40">There are currently no posts in your feed to display.</p><h2 class="mb-15">Add some sources to your feed: </h2><a class="j-button add-source tc-white mb-40" onclick="window.juicerDashboardSidebar.openNewSource()">+ Add Social Media Source </a>', this.feed.get("moderation_allowed?") && (t += '<h3 class="fs-1-25">Or, if you already did that, check your <a href="', t += this.escape(window.location.pathname), t += '/moderation">moderation queue</a>! </h3>'), t += "</div>") : t += '<div class="empty"><h2>No Posts!</h2></div>', t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/analytics"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h4 class="fourteen mb-30">Track your posts, page views, clickthroughs and user engagement over time to see how your feed is being used.</h4><a class="bold fourteen tdu launch pointer">Launch ', t += this.escape(this.feed.get("name")), t += " Analytics</a>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/analytics_overlay"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="p-50 tac"><h2 class="light tc-orange fs-2">Analytics for ', t += this.escape(this.feed.get("name")), t += ' Feed</h2><h3 class="fourteen tc-gray mb-30">Only large plans can access analytics. Please upgrade your account!</h3>', t += Juicer.Helpers.renderPartial("upgrade_plan", {
                            feed: this.feed
                        }), t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/color_picker"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="color-fields p-15" data-color="', t += this.escape(this.colorAttr), t += '"><div class="color-input-container"><div class="double-border color-example" style="background-color: ', t += this.escape(this.color), t += '"></div><div class="color-example-bg double-border-bg"></div><input class="color-input" pattern="', t += this.escape(this.pattern), t += '" type="color" value="', t += this.escape(this.color), t += '" /></div><input class="hex-input" pattern="', t += this.escape(this.pattern), t += '" type="text" value="', t += this.escape(this.color), t += '" /></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/css_overlay"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", t += '<div class="tac p-30"><h2 class="light fs-2 tc-orange">Customize Theme CSS</h2><p class="fifteen tc-gray">Add Custom CSS styles to your Juicer Feed. You can learn more about the best way to handle these customizations <a class="tc-gray bold" href="/blog/create-a-custom-embeddable-aggregate-social-media-feed-with-css-and-juicer" target="_blank">here</a>. </p><form class="css-form">', e = this.feed.get("custom_css") ? this.feed.get("custom_css") : "", t += '<textarea class="bordered my-40" name="css" placeholder="Enter Custom CSS to modify the look of your Juicer Feed..." style="height: 40vh;">', t += e, t += '</textarea><input class="j-button" type="submit" value="Save Changes" /></form></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/design"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", this.feed.get("moderation_allowed?") || (t += '<div class="fourteen p-20">You must have a paid account to customize your feed design from the dashboard. Learn more about <a class="tc-white bold" href="/plans">paid accounts</a> or <a class="tc-white bold" href="/blog/create-a-custom-embeddable-aggregate-social-media-feed-with-css-and-juicer" target="_blank">customize your feed css manually</a>. </div>'), t += '<div class="p-20 fourteen relative">', this.feed.get("moderation_allowed?") || (t += '<div class="filter-blocker custom-style-not-allowed"></div>'), t += '<div class="mb-40"><h3 class="bold mb-10">Feed Style</h3><div class="thirteen">', t += this.escape(Juicer.Helpers.prettify(this.feed.get("css"))), t += ' ( <a class="customize-css tdu pointer">Customize CSS</a> ) </div></div><h3 class="bold mb-10">Feed Colors</h3><ul class="bg-white-field tc-slevin mb-10">', _u.each(this.feed.colors, function (e) {
                            return function (n) {
                                return t += '<li class="p-15 relative feed-color" data-color="', t += e.escape(n), t += '"><div class="bold">', t += e.escape(Juicer.Helpers.prettify(n)), t += '</div> <div class="color-picker"><div class="double-border color-picker-circle" style="background: ',
                                    t += e.escape(e.feed.getColor(n)), t += '"></div><div class="double-border-bg color-picker-background-color"></div></div></li>'
                            }
                        }(this)), t += '</ul><a class="j-button small fw mb-10 tac save-style">Save Custom Style</a><a class="twelve tdu pointer mb-40 block tac reset-style">Restore Default Template Colors</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="p-20 fourteen"><textarea class="embed embed-textarea mb-15 ten tc-embed p-15">', t += this.embed, t += '</textarea><a class="tc-off-white tdu" href="', t += this.escape(Juicer.Constants.HELP_CENTER_URL), t += '/design-related-topics/code-customizations-for-date-range-feed-style-spacing-filtering-and-more" target="_blank">Customize my embed.</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/embed_code"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<script src="', t += this.escape(this.javascript), t += '" type="text/javascript"></script><br /><link href="', t += this.escape(this.stylesheet), t += '" media="all" rel="stylesheet" type="text/css" /><br /><ul class="juicer-feed" data-feed-id="', t += this.escape(this.feed.get("slug")), t += '">', this.feed.paid() || (t += Juicer.Helpers.renderPartial("referral")), t += "</ul>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/embed_menu"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="embed-menu-container"><h2 class="bold mb-30">Copy and Paste this code into your site.</h2><div class="white-select fourteen"><select class="embed-menu">', _u.each(this.embedOptions, function (e) {
                            return function (n) {
                                return e.currentlySelected === n.value ? (t += '<option selected="true" value="', t += e.escape(n.value), t += '">', t += e.escape(n.label), t += "</option>") : (t += '<option value="', t += e.escape(n.value), t += '">', t += e.escape(n.label), t += "</option>")
                            }
                        }(this)), t += "</select></div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/features"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="thirteen"><h4 class="mb-10">Upgrade your account to Medium or Large and get:</h4><ul class="pl-10 mb-10"><li>More frequent feed updates</li><li>More Social Media Sources</li><li>More Feeds</li><li>Moderation and Filtering</li><li>Feed Analytics</li><li>Instant Support and Integration Assistance</li></ul></div><a class="j-button small" href="/plans" style="font-size:11px;">Upgrade your plan!</a>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/feed_name_edit"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<form class="feed-name-edit-form p-40 tac"><h2 class="light tc-orange fs-2">Edit Feed Name</h2><input autofocus="yes" class="bordered mb-15" name="name" type="text" value="', t += this.escape(this.feed.get("name")), t += '" /><div class="mb-15"><input id="slug_update" name="slug_update" type="checkbox" /><label for="slug_update">Update Feed URL Also</label><p class="slug-warning tc-grapefruit hide fourteen">Updating the feed url will also change your embed code so if you already have your feed embedded in a different page you\'ll have to update the Juicer embed code there too.</p></div><input class="fw j-button" type="submit" value="Update Feed Name" /></form>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/hub"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac"><h3 class="fourteen mb-20">Share this link:</h3><input class="small-field hub-input bordered tc-white mb-15" type="text" value="', t += this.escape(window.location.protocol), t += "//", t += this.escape(window.location.host), t += "/", t += this.escape(this.feed.get("slug")), t += '" /><a class="j-button small" href="/', t += this.escape(this.feed.get("slug")), t += '" style="font-size:11px;letter-spacing:-0.25px;">View your public feed</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/iframe"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="p-20 fourteen"><textarea class="ten tc-embed p-15 mb-10 iframe-embed">', t += this.iframe, t += "</textarea><p>You may have to adjust width and height to get it to work. You should only use this if the standard embed isn't working for you.</p></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/moderate"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n, r;
                        return t = "", t += '<div class="tac fourteen"><h3 class="uc bold mt-20">You are Viewing</h3><ul class="moderation-nav"><li class="active public">Public Posts</li><li class="moderated">Moderated Posts</li></ul><p class="px-15">To remove a post from your live feed hover over the post and select the trash icon. The post will be sent to your moderation queue.</p></div>', this.feed.get("moderation_allowed?") ? (t += '<form class="filters" method="post">', t += Juicer.Helpers.renderPartial("toggle", {
                            attr: "queue",
                            feed: this.feed,
                            label: "Send All Posts to Moderation",
                            hint: "With this option enabled, new posts will not automatically go to your live feed. Instead, you must first manually approve them from your moderation queue.",
                            hintPosition: "bottom",
                            classes: "mt-40"
                        }), t += '<div class="p-20 fourteen relative"><div class="filter-blocker"></div>', r = "list words, @usernames, or #hastags", n = "Separate filters with a comma. Filters are case-sensitive.", t += '<h3 class="settings-label">Disallow posts with these words:</h3><textarea class="moderation-filter thirteen mb-10" name="feed[disallowed]" placeholder="', t += this.escape(r), t += " to block. ", t += this.escape(n), t += '">', t += this.feed.disallowed(), t += '</textarea><h3 class="settings-label">Only allow posts with these words:</h3><textarea class="moderation-filter thirteen mb-20" name="feed[allowed]" placeholder="', t += this.escape(r), t += " to allow. ", t += this.escape(n), t += '">', t += this.feed.allowed(), t += "</textarea>", null == this.feed.get("lat") && (e = "hide"), t += '<div class="', t += this.escape(e), t += ' mb-20" id="geofence"><h3>Restrict to posts within <input class="distance" name="feed[distance]" placeholder="ex: 25" style="width:6em; margin: 0 10px 10px 0;" type="text" value="', t += this.escape(this.feed.get("distance")), t += '" />miles of: </h3><input id="location" name="feed[location]" placeholder="Type a Location" type="text" value="', t += this.escape(this.feed.get("location")), t += '" /><input id="lat" name="feed[lat]" type="hidden" value="', t += this.escape(this.feed.get("lat")), t += '" /><input id="lng" name="feed[lng]" type="hidden" value="', t += this.escape(this.feed.get("lng")), t += '" /></div>', t += Juicer.Helpers.renderPartial("profanity", {
                            feed: this.feed
                        }), t += Juicer.Helpers.renderPartial("prevent_duplicates", {
                            feed: this.feed
                        }), t += '</div><div class="tac"><input class="j-button" type="submit" value="Save your Filters" /></div></form>') : (t += '<div class="p-20 tac"><h3 class="tc-grapefruit bold fourteen mb-15">Only medium and large plans can setup filters. Upgrade now!</h3>', t += Juicer.Helpers.renderPartial("upgrade_plan", {
                            feed: this.feed,
                            css: "j-button small"
                        }), t += "</div>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/new_source"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac pt-30 pb-25"><h3 class="light fs-2 tc-orange">Add a Social Media Source</h3><h3 class="light fs-1-25 tc-gray mb-30">First, select a social media account you want to add.</h3><div class="mx-30">', t += Juicer.Helpers.renderPartial("sources"), t += "</div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/revalidate_overlay"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", t += '<div class="tac p-30"><h2 class="light fs-2 tc-orange">Apply filters to existing posts?</h2>', n = "0" !== this.data.queue, e = n ? "mb-15" : "mb-40", t += '<p class="fifteen tc-gray ', t += this.escape(e), t += '">Do you want to apply these changes to all existing posts?  Feeds with a large amount of posts may take some time for Juicer to properly moderate. Please be patient.</p>', n && (t += '<p class="fourteen tc-grapefruit mb-40">You have turned the moderation queue on, so keep in mind if you select "apply to existing posts" it will remove <strong>all</strong> posts from your live queue. You can always recover them (or approve them later) </p>'), t += "<form>", _u.each(_u.keys(this.data), function (e) {
                            return function (n) {
                                return t += '<input name="', t += e.escape(n), t += '" type="hidden" value="', t += e.escape(e.data[n]), t += '" />'
                            }
                        }(this)), t += '<div class="submits"><input class="moderate-confirm j-button small mr-25" data-revalidate="false" type="submit" value="No, only future posts" /><input class="moderate-confirm j-button small secondary" data-revalidate="true" type="submit" value="Yes, apply to existing posts" /></div></form></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/settings"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="p-20 fourteen">', t += Juicer.Helpers.renderPartial("css", {
                            feed: this.feed,
                            label: !0
                        }), t += '<label class="settings-label">Feed Display</label><div class="mb-30">', t += Juicer.Helpers.renderPartial("interval", {
                            feed: this.feed
                        }), t += Juicer.Helpers.renderPartial("columns", {
                            feed: this.feed
                        }), t += Juicer.Helpers.renderPartial("width", {
                            feed: this.feed
                        }), t += Juicer.Helpers.renderPartial("height", {
                            feed: this.feed
                        }), (null != this.feed.get("height") || null != this.feed.get("width")) && (t += '<label class="ib mt-10 thirteen">If you want the feed to fill all available space remove the height and width.</label>'), t += "</div>", t += Juicer.Helpers.renderPartial("order", {
                            feed: this.feed
                        }), t += Juicer.Helpers.renderPartial("filter_setting", {
                            feed: this.feed,
                            label: !0
                        }), _u.each(this.checkboxes, function (e) {
                            return function (n) {
                                var r;
                                return r = n.attr, t += '<div class="checkbox mb-15 thirteen relative"><input name="feed[', t += e.escape(r), t += ']" type="hidden" value="0" />', e.feed.get(r) ? (t += '<input checked="true" data-attribute="', t += e.escape(r), t += '" id="', t += e.escape(r), t += '" name="feed[', t += e.escape(r), t += ']" type="checkbox" />') : (t += '<input data-attribute="', t += e.escape(r), t += '" id="', t += e.escape(r), t += '" name="feed[', t += e.escape(r), t += ']" type="checkbox" />'), t += '<label for="', t += e.escape(r), t += '">', t += e.escape(n.label), t += "</label>", null != n.tooltip && (t += '<div aria-label="', t += e.escape(n.tooltip), t += '" class="sidebar-explainer sprite hint--right hint--medium"></div>'), t += "</div>"
                            }
                        }(this)), t += '<a class="fourteen tc-off-white tdu" href="', t += this.escape(Juicer.Constants.HELP_CENTER_URL), t += '/design-related-topics/code-customizations-for-date-range-feed-style-spacing-filtering-and-more" target="_blank">Other Customization Options</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/social_accounts"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac"><h3 class="fourteen mb-20"> One of your Connected Social Accounts is expired. Please refresh it to make sure all of your posts get pulled in:</h3><a class="j-button small" href="/social-accounts" style="font-size:11px;letter-spacing:-0.25px;">Refresh Account</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/sources"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<ul class="source-list">', _u.each(this.feed.get("sources").models, function (e) {
                            return function (n) {
                                var r;
                                return r = n.get("id"), t += '<li class="j-', t += e.escape(n.lowerSource()), t += ' j-social-icon bg-none fourteen existing-source" data-id="', t += e.escape(r), t += '"><span>', t += e.escape(n.displayName()), t += '</span></li><ul class="source-submenu fourteen">', n.manual() && (t += '<li class="add source-submenu-item mb-10" data-id="', t += e.escape(r), t += '" data-name="', t += e.escape(n.typeSymbol()), t += e.escape(n.get("term")), t += '" data-template="manual" rel="nofollow">Add Post Manually</li>'), e.feed.paid() && (t += '<li class="moderate source-submenu-item mb-10" data-id="', t += e.escape(r), t += '" data-template="moderation">Set Moderation Filters</li>'), t += '<li class="rename source-submenu-item mb-10" data-id="', t += e.escape(r), t += '" data-template="rename">Edit Filter Button Name</li><li class="delete" data-id="', t += e.escape(r), t += '">Delete</li></ul>'
                            }
                        }(this)), t += '</ul><div class="tac mt-40"><a class="js-add-source-submenu add-source-submenu j-button small">+ Add Social Media Source</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/synced"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h4 class="thirteen mb-10">Your feed will sync next at <strong>', t += this.escape(Juicer.Helpers.fullDate(this.feed.nextSync())), t += '</strong>. Please note this is only an estimate. </h4><h4 class="thirteen mb-10 white-label-hide">Want more frequent updates to your Juicer Feed?</h4>', "enterprise" === this.feed.get("plan") ? (t += '<a class="j-button small white-label-hide" href="/feeds/', t += this.escape(this.feed.get("slug")), t += '/edit">Edit your feed!</a>') : t += '<a class="j-button small white-label-hide" href="/plans">Upgrade your plan!</a>', t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["feeds/wordpress"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", t += '<div class="p-20 fourteen"><h3 class="mb-10">First, download, unzip, and install the wordpress plugin.</h3><a class="block tc-off-white tdu" href="http://www.juicer.io/blog/setting-up-a-juicer-social-media-aggregator-on-a-wordpress-site">Learn how to install</a><a class="block tc-off-white tdu mb-20" href="https://downloads.wordpress.org/plugin/juicer.zip">Download the Wordpess Plugin</a><h3 class="settings-label">Shortcode</h3>', e = '[juicer name="' + this.feed.get("slug") + '"]', t += '<textarea class="ten tc-embed p-15 single-line mb-20">', t += e, t += '</textarea><h3 class="settings-label">PHP Function</h3>', n = '<?php juicer_feed("name=' + this.feed.get("slug") + '"); ?>', t += '<textarea class="ten tc-embed p-15 single-line">', t += n, t += "</textarea></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.gdpr_form = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac p-50 gdpr-form"><h2 class="light fs-2 tc-orange">Accept our GDPR Privacy Policy Changes</h2><p class="tc-gray fifteen mb-25">To ensure compliance with the GDPR, we have updated our <a class="bold tc-gray tdu" href="/privacy">privacy policy</a> . Since you are located in the EU you must accept these changes. </p><div class="mb-25"><a class="j-button" href="/gdpr">Accept updated privacy policy and continue my service</a></div><a class="fourteen tc-gray tdu pointer" href="/downgrade?delete=true">I don\'t accept the privacy policy so cancel my service.</a></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.infinite_scroll = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", e = this.feed.get("posts").models, e.length > 0 && _u.each(e, function (e) {
                            return function (n) {
                                var r;
                                return t += "<li", r = "", r += e.escape(n.classes()), r.length > 0 && (t += ' class="', t += r, t += '"'), t += ' data-id="', t += e.escape(n.get("id")), t += '">', t += Juicer.Helpers.renderPartial("actions", {
                                    post: n,
                                    admin: e.admin
                                }), t += Juicer.Helpers.renderPartial("feeds/" + e.feed.partial(), {
                                    post: n,
                                    feed: e.feed
                                }), t += "</li>"
                            }
                        }(this)), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.location_picker = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<input name="source" type="hidden" value="', t += this.escape(this.source.source()), t += '" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term_type" type="hidden" value="location" /><input id="term" name="term" type="hidden" /><input id="name" name="name" type="hidden" /><ul class="location-results">', _u.each(this.locations, function (e) {
                            return function (n) {
                                return t += '<li class="location-result pointer" data-id="', t += e.escape(n.id), t += '" data-name="', t += e.escape(n.name), t += '">', t += e.escape(n.name), t += "</li>"
                            }
                        }(this)), t += "</ul>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.moderated = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<ul class="j-display-filters">', _u.each(this.menuItems, function (e) {
                            return function (n) {
                                return e.feed.filter === n.filter || "All" === n.title && "" === e.feed.filter ? (t += '<li class="moderate-filter selected" data-filter="', t += e.escape(n.filter), t += '">', t += e.escape(n.title), t += "</li>") : (t += '<li class="moderate-filter" data-filter="', t += e.escape(n.filter), t += '">', t += e.escape(n.title), t += "</li>")
                            }
                        }(this)), t += "</ul>", this.feed.get("posts").models.length > 0 && (t += '<div class="tac mb-15 bulk-moderate-nav"><a class="j-button small mr-10 bulk-moderate" data-approve="true">Approve All</a><a class="j-button small bulk-moderate">Reject All</a></div>'), t += Juicer.Helpers.renderPartial("moderated_posts", {
                            feed: this.feed
                        })
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.new_feed = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += Juicer.Helpers.renderPartial("sources")
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.overlay = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="j-overlay-content" tabindex="0">', this.close && (t += '<a class="j-close" href="#"><span>Close</span></a>'), t += this.content, t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_actions"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", this.admin && !this.post.ad && (t += '<ul class="actions" data-id="', t += this.escape(this.post.get("id")), t += '">', null != this.post.get("deleted_at") ? (t += "Pending" === this.post.get("deleted_by") ? '<li aria-label="Juicer has commented on this post on your behalf. Waiting for approval from the author." class="hint--bottom-right">Permission Pending</li>' : '<li aria-label="Juicer will publish a comment to this post on your behalf, asking for permission to use it." class="urm-request hint--bottom hint--large">Get Permission</li>', t += '<li aria-label="Don&#39;t publish post and hide it." class="reject hint--bottom-left">Reject</li><li aria-label="Move post to your live feed." class="approve primary hint--bottom-left">Approve</li>') : (t += this.post.stickied() ? '<li aria-label="Make post be not-pinned anymore." class="unstick hint--bottom-left">Unpin</li>' : '<li aria-label="Pin post. Keep post at top of feed, even when new posts come in." class="hint--bottom sticky">Pin</li>', this.post.twitter() || (t += '<li aria-label="Add content to this post." class="edit hint--bottom-left">Edit</li>'), t += '<li aria-label="Move post to moderation queue. Remove from live feed." class="delete primary hint--bottom-left">Delete</li>'), t += "</ul>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_columns"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="columns white-field bordered hide"><label for="columns">Columns</label><input class="columns" max="9" min="1" name="feed[columns]" type="number" value="', t += this.escape(this.feed.get("columns")), t += '" /></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_content"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", this.lazyLoad = null != this.feed && this.feed.get("lazy_load") || !1, null != this.post.get("image") && (t += '<a class="j-image" data-external-id="', t += this.escape(this.post.get("external_id")), t += '" data-image="', t += this.escape(this.post.get("image")), t += '" data-video-url="', t += this.escape(this.post.get("video")), t += '" href="', t += this.escape(this.post.link()), t += '" target="_blank">', (this.feed && this.feed.shouldShowGallery() && this.post.gallery() || this.post.gallery() && this.overlay) && (t += '<span class="j-gallery-nav"><span class="j-gallery-arrow j-gallery-previous">Previous</span><span class="j-gallery-arrow j-gallery-next">Next</span></span>'), this.lazyLoad && !this.overlay ? (t += '<img alt="', t += this.escape(this.post.alt()), t += '" class="j-content-image" data-lazy="', t += this.escape(this.post.get("image")), t += '" />') : (t += '<img alt="', t += this.escape(this.post.alt()), t += '" class="j-content-image" src="', t += this.escape(this.post.get("image")), t += '" />'), t += "</a>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_css"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="css">', this.label && (t += '<label class="settings-label" for="css">Choose a Feed Style</label>'), t += '<div class="white-select mb-30"><select id="css" name="feed[css]">', _u.each(Juicer.Constants.FEED_CLASSES, function (e) {
                            return function (n) {
                                return e.feed.get("css") === n ? (t += '<option selected="true" value="', t += e.escape(n), t += '">', t += e.escape(Juicer.Helpers.prettify(n)), t += "</option>") : (t += '<option value="', t += e.escape(n), t += '">', t += e.escape(Juicer.Helpers.prettify(n)), t += "</option>")
                            }
                        }(this)), t += "</select></div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_custom_styles"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", (this.feed.customColors() || this.feed.get("custom_css")) && (t += '<div class="juicer-custom-styles"><style>', t += this.feed.customStyles(), t += "</style></div>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_edit"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", this.post.edited() && !this.post.twitter() && (t += '<div class="j-edit"><span>(edited) </span>', t += Juicer.Helpers.format(this.post.get("edit")), t += "</div>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_enterprise_sidebar"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", n = [{
                            name: "Your Feeds",
                            url: "/enterprise/" + this.model.get("slug")
                        }, {
                            name: "Manage Users",
                            url: "/enterprise/" + this.model.get("slug") + "/users"
                        }, {
                            name: "Edit Account",
                            url: "/enterprise/" + this.model.get("slug") + "/edit"
                        }, {
                            name: "API Docs",
                            url: "/api"
                        }, {
                            name: "Set up White Label",
                            url: "/enterprise/" + this.model.get("slug") + "/white-label"
                        }], e = "/" + JuicerBackbone.history.getFragment(), t += '<div class="enterprise-sidebar"><ul class="tc-dark-gray bg-white border">', _u.each(n, function (n) {
                            return function (r) {
                                var i, s, o, a, l, c;
                                if (t += '<li class="enterprise-sidebar-link ', i = r.url === e ? "bold" : "", n.isArray(i)) {
                                    for (i = n.flatten(i), s = 0, l = i.length; l > s; s++) o = i[s], o && (i = o.toString());
                                    for (a = 0, c = i.length; c > a; a++) o = i[a], o.length > 0 && (i = o);
                                    t += n.escape(i.join(" "))
                                } else t += n.escape(i);
                                return t += '"><a href="', t += n.escape(r.url), t += '">', t += n.escape(r.name), t += "</a></li>"
                            }
                        }(this)), t += "</ul></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_filter_setting"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="filter_setting">', this.label && (t += '<label class="settings-label" for="filter">Display Filters at top of Feed</label>'), t += '<div class="white-select mb-40"><select id="filter_setting" name="feed[display_filter]">', _u.each(["None", "Social Type", "Social Account", "Grouped Terms"], function (e) {
                            return function (n) {
                                return e.feed.get("display_filter") === n ? (t += '<option selected="true" value="', t += e.escape(n), t += '">', t += e.escape(n), t += "</option>") : (t += '<option value="', t += e.escape(n), t += '">', t += e.escape(n), t += "</option>")
                            }
                        }(this)), t += "</select></div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_height"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="height white-field after-label"><label for="height">Height</label><input class="height" max="5000" min="100" name="feed[height]" type="number" value="', t += this.escape(this.feed.get("height")), t += '" /> <label for="height">px</label></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_interval"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="interval hide white-field after-label bordered"><label for="interval">Interval</label><input class="interval" max="30000" min="100" name="feed[interval]" type="number" value="', t += this.escape(this.feed.get("interval")), t += '" /> <label for="interval">ms</label></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_link"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", null != navigator.userAgent.match("Edge") && null != this.url.match("facebook") ? (t += '<a aria-label="', t += this.escape(this.aria), t += '"', e = "", e += this.escape(this["class"]), e.length > 0 && (t += ' class="', t += e, t += '"'), t += ' href="', t += this.escape(this.url), t += '">', t += this.escape(Juicer.Helpers.numberWithCommas(this.label)), t += "</a>") : (t += '<a aria-label="', t += this.escape(this.aria), t += '"', n = "", n += this.escape(this["class"]), n.length > 0 && (t += ' class="', t += n, t += '"'), t += ' href="', t += this.escape(this.url), t += '" target="_blank">', t += this.escape(Juicer.Helpers.numberWithCommas(this.label)), t += "</a>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_loading"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += this.container ? '<div class="j-loading-container"><div class="j-loading">Loading...</div></div>' : this.wrapper ? '<div class="j-loading-wrapper"><div class="j-loading">Loading...</div></div>' : this.inFeed ? '<div class="j-loading-wrapper" style="height: 42px"><div class="j-loading">Loading...</div></div>' : '<div class="j-loading">Loading...</div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_message"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", (null != this.post.get("unformatted_message") || this.post.tumblrTitle()) && (t += '<div class="j-message">', t += this.post.message(), t += "</div>"), t += Juicer.Helpers.renderPartial("edit", {
                            post: this.post
                        })
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_meta"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", this.post.twitter() ? (t += '<div class="j-meta"><ul class="j-twitter-intents"><li><a class="j-twitter-reply" href="', t += this.escape(this.post.replyIntent()), t += '">Reply</a></li><li><a class="j-twitter-retweet" href="', t += this.escape(this.post.retweetIntent()), t += '">Retweet</a></li><li><a class="j-twitter-like" href="', t += this.escape(this.post.likeIntent()), t += '">Like</a></li></ul>', e = this.post.get("external_created_at"), t += '<a href="', t += this.escape(this.post.link()), t += '" target="_blank"><time class="j-date j-twitter-date" datetime="', t += this.escape(e), t += '">', t += this.escape(Juicer.Helpers.fullDate(e, "%-d %b %Y", !1)), t += "</time></a></div>") : "Juicer" !== this.post.sourceType() && (t += '<div class="j-meta"><ul>', this.post.noMeta() || (t += "<li>", t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: this.post.get("comment_count"),
                            "class": this.post.commentClass(),
                            aria: "Comments"
                        }), t += "</li><li>", t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: this.post.get("like_count"),
                            "class": this.post.likeClass(),
                            aria: "Likes"
                        }), t += "</li>"), t += "</ul><nav>", t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: "",
                            "class": "j-" + this.post.lowerType() + " j-social",
                            aria: this.post.lowerType()
                        }), t += "</nav></div>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_moderated_posts"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", e = this.feed.get("posts").models, e.length > 0 ? _u.each(e, function (e) {
                            return function (n) {
                                var r;
                                return t += "<li", r = "", r += e.escape(n.classes()), r.length > 0 && (t += ' class="', t += r, t += '"'), t += ">", t += Juicer.Helpers.renderPartial("actions", {
                                    post: n,
                                    admin: !0
                                }), t += Juicer.Helpers.renderPartial("feeds/user", {
                                    post: n,
                                    feed: e.feed
                                }), t += "</li>"
                            }
                        }(this)) : t += '<div class="empty"><h2>No Moderated Posts!</h2></div>', t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_order"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="order"><label class="settings-label" for="order">Post Order</label><div class="white-select mb-30"><select id="css" name="feed[order]">', _u.each([
                            ["created_at", "Most Recent First"],
                            ["mixed", "Mixed"],
                            ["random", "Random"],
                            ["popular", "Most Popular"]
                        ], function (e) {
                            return function (n) {
                                return e.feed.get("order") === n[0] ? (t += '<option selected="true" value="', t += e.escape(n[0]), t += '">', t += e.escape(n[1]), t += "</option>") : (t += '<option value="', t += e.escape(n[0]), t += '">', t += e.escape(n[1]), t += "</option>")
                            }
                        }(this)), t += "</select></div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_poster"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", this.lazyLoad = this.lazyLoad || null != this.feed && this.feed.get("lazy_load") || !1, e = this.post.get("external_created_at"), t += '<div class="j-poster">', this.post.poster() ? (t += '<a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', this.post.get("poster_image") && (this.lazyLoad && "slider" === this.feed.get("style") || (this.lazyLoad ? (t += '<img alt="Profile image for ', t += this.escape(this.post.get("poster_name")), t += '" data-lazy="', t += this.escape(this.post.posterImage()), t += '" data-poster-id="', t += this.escape(this.post.get("poster_id")), t += '" />') : (t += '<img alt="Profile image for ', t += this.escape(this.post.get("poster_name")), t += '" data-poster-id="', t += this.escape(this.post.get("poster_id")), t += '" src="', t += this.escape(this.post.posterImage()), t += '" />'))), this.post.twitter() ? (t += '<div class="j-twitter-poster"><div class="j-twitter-display-name">', t += this.escape(this.post.get("poster_display_name")), t += '</div><div class="j-twitter-screen-name">@', t += this.escape(this.post.get("poster_name")), t += "</div></div>") : (t += "<h3>", t += this.escape(this.post.get("poster_name")), t += "</h3>"), this.post.twitter() ? t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: "Twitter Logo",
                            "class": "j-twitter j-twitter-text j-social j-twitter-post-icon",
                            aria: "twitter"
                        }) : this.post.ad || (t += '<time class="j-date" datetime="', t += this.escape(e), t += '">', t += this.escape(Juicer.Helpers.timeAgo(e)), t += "</time>"), t += "</a>") : (t += '<time class="j-date" datetime="', t += this.escape(e), t += '">', t += this.escape(Juicer.Helpers.timeAgo(e)), t += "</time>"), t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_prevent_duplicates"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="prevent-duplicates thirteen"><input name="feed[prevent_duplicates]" type="hidden" value="0" />', t += this.feed.get("prevent_duplicates") ? '<input checked="true" id="prevent_duplicates" name="feed[prevent_duplicates]" type="checkbox" />' : '<input id="prevent_duplicates" name="feed[prevent_duplicates]" type="checkbox" />', t += '<label for="prevent_duplicates">Prevent Duplicate Posts</label><div aria-label="Juicer will remove any post that has the same text as another post from a different source. It does this scan hourly." class="sidebar-explainer sprite hint--right hint--medium"></div></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_profanity"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="profanity thirteen mb-10"><input name="feed[profanity]" type="hidden" value="0" />', t += this.feed.get("profanity") ? '<input checked="true" id="profanity" name="feed[profanity]" type="checkbox" />' : '<input id="profanity" name="feed[profanity]" type="checkbox" />', t += '<label for="profanity">Don\'t allow posts with profanity</label></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_referral"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h1 class="referral"><a href="https://www.juicer.io">Powered by Juicer</a></h1>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_sources"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", _u.each(["Facebook", "Twitter", "Instagram", "YouTube", "Tumblr", "Pinterest", "Slack", "Blog", "Giphy", "Soundcloud", "Spotify", "LinkedIn", "Flickr", "Vimeo", "Yelp", "DeviantArt", "Hashtag"], function (e) {
                            return function (n) {
                                var r;
                                return r = n.toLowerCase(), t += '<li class="j-', t += e.escape(r), t += " j-", t += e.escape(r), t += '-text source j-social-icon ibt new-source-icon" data-type="', t += e.escape(n), t += '"><span class="uc bold">', t += e.escape(n), t += "</span></li>"
                            }
                        }(this)), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_toggle"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div aria-label="', t += this.escape(this.hint), t += '" class="bg-nav-header py-15 tac mb-10 hint--medium fw hint--', t += this.escape(this.hintPosition), t += " ", t += this.escape(this.attr), t += " ", t += this.escape(this.classes), t += '"><label class="bold thirteen">', t += this.label, t += '</label><div class="switch ibm ml-10"><input name="feed[', t += this.escape(this.attr), t += ']" type="hidden" value="0" />', this.feed.get(this.attr) ? (t += '<input checked="true" class="switch-checkbox" id="', t += this.escape(this.attr), t += '" name="feed[', t += this.escape(this.attr), t += ']" type="checkbox" />') : (t += '<input class="switch-checkbox" id="', t += this.escape(this.attr), t += '" name="feed[', t += this.escape(this.attr), t += ']" type="checkbox" />'), t += '<label class="switch-label" for="', t += this.escape(this.attr), t += '"><span class="switch-inner"></span><span class="switch-dot"></span></label></div></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_upgrade_plan"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", n = this.css || "j-button", t += "<a", e = "", e += this.escape(n), e.length > 0 && (t += ' class="', t += e, t += '"'), t += ' href="/plans">Learn more about our other plans</a>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_widget_card"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", t += "<li", e = "", e += this.escape(this.post.classes()), e.length > 0 && (t += ' class="', t += e, t += '"'), t += ' data-id="', t += this.escape(this.post.get("id")), t += '">', t += Juicer.Helpers.renderPartial("actions", {
                            post: this.post,
                            admin: this.admin
                        }), t += Juicer.Helpers.renderPartial("feeds/user", {
                            post: this.post
                        }), t += "</li>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/_width"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="width white-field after-label bordered"><label for="width">Width</label><input class="width" max="5000" min="100" name="feed[width]" type="number" value="', t += this.escape(this.feed.get("width")), t += '" /> <label for="width">px</label></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/feeds/_classic"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", t += '<div class="j-meta j-', t += this.escape(this.post.lowerType()), t += '"><nav>', t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: "",
                            "class": "j-" + this.post.lowerType() + " j-social",
                            aria: "Link to " + this.post.lowerType() + " post."
                        }), t += "</nav><ul>", this.post.noMeta() || (t += "<li>", t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: this.post.get("comment_count"),
                            "class": this.post.commentClass(),
                            aria: "Comment Count"
                        }), t += "</li><li>", t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: this.post.get("like_count"),
                            "class": this.post.likeClass(),
                            aria: "Like Count"
                        }), t += "</li>"), t += '</ul></div><div class="j-text"><div class="j-message">', t += this.post.message(), "Juicer" !== this.post.sourceType() && ("hashtag" === this.post.termType() ? (t += '<div class="info">Posted by <a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += '</a> in <a href="', t += this.escape(this.post.termLink()), t += '" target="_blank">', t += this.escape(this.post.term()), t += "</a> on ", t += this.escape(this.post.sourceType()), t += " on ", t += this.escape(Juicer.Helpers.fullDate(this.post.get("external_created_at"))), t += " </div>") : "Blog" === this.post.sourceType() ? (t += '<div class="info">Posted at <a href="http://', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += "</a> on ", t += this.escape(Juicer.Helpers.fullDate(this.post.get("external_created_at"))), t += " </div>") : (t += '<div class="info">Posted by <a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += "</a> on ", t += this.escape(this.post.sourceType()), t += " on ", t += this.escape(Juicer.Helpers.fullDate(this.post.get("external_created_at"))), t += " </div>")), t += "</div></div>", (e = this.post.get("image")) && (t += '<a href="', t += this.escape(this.post.link()), t += '" target="_blank"><img alt="', t += this.escape(this.post.alt()), t += '" class="j-content-image" src="', t += this.escape(e), t += '" /></a>'), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/feeds/_image"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += Juicer.Helpers.renderPartial("content", {
                            post: this.post,
                            feed: this.feed
                        }), t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("poster", {
                            post: this.post,
                            feed: this.feed
                        }), t += Juicer.Helpers.renderPartial("message", {
                            post: this.post
                        }), t += Juicer.Helpers.renderPartial("meta", {
                            post: this.post
                        }), t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/feeds/_night"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="j-text-container">', t += Juicer.Helpers.renderPartial("content", {
                            post: this.post,
                            feed: this.feed
                        }), t += '<div class="j-text">', this.post.twitter() && (t += Juicer.Helpers.renderPartial("poster", {
                            post: this.post,
                            feed: this.feed
                        })), t += Juicer.Helpers.renderPartial("message", {
                            post: this.post
                        }), "Juicer" === this.post.sourceType() || this.post.twitter() || (t += '<div class="j-meta"><ul><li>', t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: this.post.get("comment_count"),
                            "class": this.post.commentClass(),
                            aria: "Comments"
                        }), t += "</li><li>", t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: this.post.get("like_count"),
                            "class": this.post.likeClass(),
                            aria: "Likes"
                        }), t += "</li></ul></div>"), this.post.twitter() && (t += Juicer.Helpers.renderPartial("meta", {
                            post: this.post
                        })), t += "</div></div>", this.post.twitter() || (t += '<div class="j-poster-meta">', t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: "",
                            "class": "j-" + this.post.lowerType() + " j-social-icon",
                            aria: this.post.lowerType()
                        }), t += '<a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += "</a></div>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/feeds/_polaroid"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", this.post.get("poster_image") || (e = "no-poster"), this.post.twitter() || (t += Juicer.Helpers.renderPartial("content", {
                            post: this.post,
                            feed: this.feed
                        })), t += '<div class="j-post-container ', t += this.escape(e), t += '">', t += Juicer.Helpers.renderPartial("poster", {
                            post: this.post,
                            feed: this.feed
                        }), this.post.twitter() || (t += '<h3 class="j-poster-meta"><a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += '</a> <span class="j-on">on</span> <a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.sourceType()), t += "</a></h3>"), t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("message", {
                            post: this.post
                        }), this.post.twitter() && (t += Juicer.Helpers.renderPartial("content", {
                            post: this.post,
                            feed: this.feed
                        })), t += Juicer.Helpers.renderPartial("meta", {
                            post: this.post
                        }), t += "</div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/feeds/_standard"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += Juicer.Helpers.renderPartial("content", {
                            post: this.post,
                            feed: this.feed
                        }), t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("message", {
                            post: this.post
                        }), t += Juicer.Helpers.renderPartial("meta", {
                            post: this.post
                        }), t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/feeds/_user"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += Juicer.Helpers.renderPartial("poster", {
                            post: this.post,
                            feed: this.feed
                        }), this.post.twitter() || (t += Juicer.Helpers.renderPartial("content", {
                            post: this.post,
                            feed: this.feed
                        })), t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("message", {
                            post: this.post
                        }), this.post.twitter() && (t += Juicer.Helpers.renderPartial("content", {
                            post: this.post,
                            feed: this.feed
                        })), t += Juicer.Helpers.renderPartial("meta", {
                            post: this.post
                        }), t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/feeds/_wall"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", t += "<li", e = "", e += this.escape(this.post.classes()), e.length > 0 && (t += ' class="', t += e, t += '"'), t += ' data-id="', t += this.escape(this.post.get("id")), t += '">', t += Juicer.Helpers.renderPartial("actions", {
                            post: this.post,
                            admin: this.admin
                        }), null != this.post.get("image") ? (t += '<img alt="', t += this.escape(this.post.alt()), t += '" class="j-content-image" src="', t += this.escape(this.post.get("image")), t += '" />') : (t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("message", {
                            post: this.post
                        }), t += "</div>"), t += '<a class="j-image" href="', t += this.escape(this.post.link()), t += '" target="_blank"><div class="j-living-wall-hover"></div></a></li>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/filters/_new"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<ul class="j-display-filters">Filters: ', _u.each(this.feed.filters(), function (e) {
                            return function (n) {
                                var r, i, s, o;
                                return s = e.feed.get("display_filter"), i = e.filter || e.feed.filter, (n.filter(s) === i || null === n.filter("filter") && "" === i) && (o = !0), t += "<li", r = "", r += e.escape(n.filterClass(s, o, !0)), r.length > 0 && (t += ' class="', t += r, t += '"'), t += ' data-filter="', t += e.escape(n.filter(s)), t += '">', t += e.escape(n.filterDisplay(s)), t += "</li>"
                            }
                        }(this)), t += "</ul>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/filters/_old"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<ul class="j-filters filters">', _u.each(this.feed.filters(), function (e) {
                            return function (n) {
                                var r, i, s, o;
                                return s = e.feed.get("display_filter"), i = e.filter || e.feed.filter, (n.filter(s) === i || null === n.filter("filter") && "" === i) && (o = !0), t += "<li", r = "", r += e.escape(n.filterClass(s, o)), r.length > 0 && (t += ' class="', t += r, t += '"'), t += ' data-filter="', t += e.escape(n.filter(s)), t += '">', t += e.escape(n.filterDisplay(s)), t += "</li>"
                            }
                        }(this)), t += "</ul>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_groups"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h2 class="new-source-title">Connect Facebook Group Posts</h2>', this.results ? this.results.models.length > 0 ? (t += '<form accept-charset="UTF-8" action="/feeds/', t += this.escape(this.feedId), t += '/sources" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term_type" type="hidden" value="group" /><input class="result-term" name="term" type="hidden" /><input class="result-name" name="name" type="hidden" /><ul class="search-results">', _u.each(this.results.models, function (e) {
                            return function (n) {
                                return t += '<li class="search-result" data-id="', t += e.escape(n.get("id")), t += '" data-name="', t += e.escape(n.get("name")), t += '">', t += e.escape(n.get("name")), t += "</li>"
                            }
                        }(this)), t += "</ul></form>") : t += "<h2>Sorry you aren't the admin of any facebook groups.</h2>" : t += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" href="/auth/facebook">Connect your Facebook account</a>', t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_hashtag"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", "Pinterest" === this.source.source() ? t += '<h2 class="new-source-title">Add Pinterest Board</h2>' : "Spotify" === this.source.source() ? t += '<h2 class="new-source-title">Pull In Your Top Spotify Tracks</h2>' : (t += '<h2 class="new-source-title">Add ', t += this.escape(this.source.source()), t += " Hashtag</h2>"), t += '<form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="', t += this.escape(this.source.source()), t += '" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term_type" type="hidden" value="', t += this.escape(this.type), t += '" />', "Pinterest" === this.source.source() ? (t += '<label for="source_term">', t += this.escape(this.source.label()), t += "</label>") : "Spotify" === this.source.source() ? (t += '<input name="term" type="hidden" value="', t += this.escape(this.socialAccount.get("name")), t += '" />') : t += '<label for="source_term">#</label>', e = "Pinterest" === this.source.source() ? "pinterest-username/board-name" : "", "Spotify" !== this.source.source() && (t += '<input autocomplete="off" id="source_term" name="term" placeholder="', t += this.escape(e), t += '" type="text" />'), "Twitter" === this.source.source() && (t += '<div class="feed-term-type"><input id="replies" name="replies" type="checkbox" value="replies" /><label for="replies">Include @replies</label></div>'), t += '<input class="new-source-submit green" name="commit" type="submit" value="Create Source" /></form>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_location"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", t += '<h2 class="new-source-title">Add ', t += this.escape(this.source.source()), t += ' Location</h2><form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="', t += this.escape(this.source.source()), t += '" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term_type" type="hidden" value="', t += this.escape(this.type), t += '" />', e = "Instagram" === this.source.source() ? "https://www.instagram.com/explore/locations/" : "https://www.twitter.com/locations/", t += '<label for="source_term">', t += this.escape(e), t += '</label><input autocomplete="off" id="source_term" name="term" placeholder="location_id" type="text" />', "Twitter" === this.source.source() ? t += '<div class="feed-term-type">or, <a class="open-location-search bold tdu pointer">search</a> for a location. </div>' : "Instagram" === this.source.source() && (t += '<div class="mt-20"><strong>HELP:</strong> <a href="https://help.juicer.io/social-post-topics/how-to-add-instagram-location-sources" target="_blank">How to find your Instagram location ID. </a></div>'), t += '<input class="new-source-submit green" name="commit" type="submit" value="Add Location" /></form>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_location_search"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h2 class="light fs-2 tc-orange">Add ', t += this.escape(this.source.source()), t += ' Location</h2><form accept-charset="UTF-8" action="#" class="location-search" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="', t += this.escape(this.source.source()), t += '" /><input id="lat" name="lat" type="hidden" /><input id="lng" name="lng" type="hidden" /><input id="location" name="name" type="text" /><input class="new-source-submit green" disabled="disabled" name="commit" type="submit" value="Search for Location" /></form>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_max"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h2>You need to upgrade to add more sources</h2><h3 style="margin-bottom:1.5rem">Unfortunately, the ', t += this.escape(this.feed.get("plan")), t += " plan only allows ", t += this.escape(this.feed.get("max_sources")), t += " sources.</h3>", t += Juicer.Helpers.renderPartial("upgrade_plan", {
                            feed: this.feed
                        })
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_new"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n, r, i, s, o, a, l;
                        return t = "", a = this.source.get("source"), l = a.toLowerCase(), this.source.needsLogin() && !this.socialAccounts.socialAccount(l) ? (t += '<div class="new-source-container"><h2 class="new-source-title">Please connect your ', t += this.escape(a), t += ' account.</h2><p class="tc-gray connect-explanation">We ask that you connect your ', t += this.escape(a), t += " account so that we don't run into API rate limits. <strong>This will not automatically pull your ", t += this.escape(a), t += " posts.</strong> ", n = "instagram" === l ? "add the posts of your connected account" : "facebook" === l ? "add a Facebook source and display posts" : "add the posts of ANY public user or hashtags", t += "After you have connected your account, you can ", t += this.escape(n), t += '. </p><a class="j-button j-', t += this.escape(l), t += " j-social-icon j-", t += this.escape(l), t += '-border social-account social-j-button" data-method="post" href="/auth/', t += this.escape(l), t += '">Connect your ', t += this.escape(a), t += " account</a></div>") : (this.source.hashtags() && (t += '<nav><ul class="source-types">', _u.each(["Username", "Hashtag"], function (e) {
                            return function (n) {
                                var r;
                                return r = n.toLowerCase() === e.type ? "active" : "", "Pinterest" === e.source.source() && "Hashtag" === n ? (t += '<li class="source-type ', t += e.escape(r), t += '" data-type="', t += e.escape(n.toLowerCase()), t += '">Board</li>') : "Spotify" === e.source.source() && "Username" === n ? (t += '<li class="source-type ', t += e.escape(r), t += '" data-type="', t += e.escape(n.toLowerCase()), t += '">Artist</li>') : "Facebook" === e.source.source() && "Username" === n ? (t += '<li class="source-type ', t += e.escape(r), t += '" data-type="', t += e.escape(n.toLowerCase()), t += '">Business Page</li>') : "Spotify" === e.source.source() && "Hashtag" === n ? (t += '<li class="source-type ', t += e.escape(r), t += '" data-type="', t += e.escape(n.toLowerCase()), t += '">Your Top Tracks</li>') : "Facebook" !== e.source.source() || "Hashtag" !== n ? (t += '<li class="source-type ', t += e.escape(r), t += '" data-type="', t += e.escape(n.toLowerCase()), t += '">', t += e.escape(n), t += "</li>") : void 0
                            }
                        }(this)), this.source.location() && (e = "location" === this.type ? "active" : "", t += '<li class="source-type ', t += this.escape(e), t += '" data-type="location">Location</li>'), "Facebook" === this.source.source() && (s = "personal" === this.type ? "active" : "", t += '<li class="source-type ', t += this.escape(s), t += '" data-type="personal">Personal Account</li>', i = "groups" === this.type ? "active" : "", t += '<li class="source-type ', t += this.escape(i), t += '" data-type="groups">Group</li>', o = "reviews" === this.type ? "active" : "", t += '<li class="source-type ', t += this.escape(o), t += '" data-type="reviews">Reviews</li>'), t += "</ul></nav>"), r = this.feed ? this.feed.get("id") : void 0, t += '<div class="new-source-container"><a aria-label="Learn more about ', t += this.escape(a), t += ' sources" class="new-source-help sprite hint--bottom-left" href="', t += this.escape(Juicer.Constants.HELP_CENTER_URL), t += "/social-sources-adding-and-troubleshooting/", t += this.escape(l), t += '-sources-adding-and-troubleshooting" target="_blank">Help</a>', t += Juicer.Helpers.renderPartial("source_form/" + this.type, {
                            source: this.source,
                            csrf: this.csrf,
                            feedId: r,
                            type: this.type,
                            socialAccount: this.socialAccounts.socialAccount(l),
                            results: this.results
                        }), t += "</div>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_personal"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h2 class="new-source-title">Add Personal Facebook Account</h2>', this.socialAccount ? (t += '<form accept-charset="UTF-8" action="#" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term" type="hidden" value="', t += this.escape(this.socialAccount.get("name")), t += '" /><input name="term_type" type="hidden" value="personal" /><input class="j-facebook j-button j-social-icon j-facebook-border social-account social-j-button" name="commit" type="submit" value="Pull in ', t += this.escape(this.socialAccount.get("name")), t += '&#39;s Facebook posts" /></form>') : t += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" data-method="post" href="/auth/facebook">Connect your Facebook account</a>', t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_reviews"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h2 class="new-source-title">Connect Facebook Page Reviews</h2>', this.results ? this.results.models.length > 0 ? (t += '<form accept-charset="UTF-8" action="/feeds/', t += this.escape(this.feedId), t += '/sources" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term_type" type="hidden" value="reviews" /><input class="result-term" name="term" type="hidden" /><input class="result-name" name="name" type="hidden" /><ul class="search-results">', _u.each(this.results.models, function (e) {
                            return function (n) {
                                return t += '<li class="search-result" data-id="', t += e.escape(n.get("id")), t += '" data-name="', t += e.escape(n.get("name")), t += '">', t += e.escape(n.get("name")), t += "</li>"
                            }
                        }(this)), t += "</ul></form>") : t += "<h2>Sorry you aren't the admin of any facebook pages.</h2>" : t += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" data-method="post" href="/auth/facebook">Connect your Facebook account</a>', t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_username"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h2 class="new-source-title">', t += this.escape(this.source.title()), t += '</h2><form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="', t += this.escape(this.source.source()), t += '" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term_type" type="hidden" value="', t += this.escape(this.type), t += '" />', "Tumblr" === this.source.source() ? (t += '<label for="source_term">http://</label><input autocomplete="off" id="source_term" name="term" placeholder="', t += this.escape(this.source.placeholder()), t += '" type="text" /><label for="source_term">.tumblr.com</label>') : "DeviantArt" === this.source.source() ? (t += '<label for="source_term">http://</label><input autocomplete="off" id="source_term" name="term" placeholder="', t += this.escape(this.source.placeholder()), t += '" type="text" /><label for="source_term">.deviantart.com</label>') : "Hashtag" === this.source.source() ? (t += '<ul class="add-a-hashtag">', _u.each(_u.filter(this.source.hashtagSupporters, function (t) {
                            return "Facebook" !== t
                        }), function (e) {
                            return function (n) {
                                return t += '<li class="j-', t += e.escape(n.toLowerCase()), t += ' hashtag-source j-social-icon ibt tc-white uc bold" data-type="', t += e.escape(n), t += '"><span>', t += e.escape(n), t += "</span></li>"
                            }
                        }(this)), t += "</ul>") : (t += '<label for="source_term">', t += this.escape(this.source.label()), t += '</label><input autocomplete="off" id="source_term" name="term" placeholder="', t += this.escape(this.source.placeholder()), t += '" type="text" />', "Facebook" === this.source.source() && (t += '<div class="feed-term-type"><input id="term_type" name="term_type" type="checkbox" value="feed" /><label for="term_type">Include posts that mention my page.</label></div>'), "Twitter" === this.source.source() && (t += '<div class="feed-term-type"><input id="retweets" name="retweets" type="checkbox" value="retweets" /><label for="retweets">Include retweets</label><input id="replies" name="replies" type="checkbox" value="replies" /><label for="replies">Include @replies</label></div>')), "Hashtag" !== this.source.source() && (t += '<input class="new-source-submit green" name="commit" type="submit" value="Create Source" />', t += Juicer.Helpers.renderPartial("source_form/username_example", {
                            source: this.source
                        })), t += "</form>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/source_form/_username_example"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", e = this.source.usernameExample(), e && (t += '<div class="source-form-example mt-40"><h4 class="tc-orange ibt bold">For Example:</h4> if you want to add ', t += this.escape(e.name), t += ' copy & paste the bold part: <br /><a href="', t += this.escape(e.link), t += '" target="_blank">', t += e.formattedLink, t += "</a></div>"), t
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_blog_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        switch (t = "", t += '<div class="video-wrapper">', n = this.overlay ? !0 : !1, t += '<video autoplay="autoplay"', e = n) {
                            case !0:
                                t += ' controls="controls"';
                                break;
                            case !1:
                            case null:
                                break;
                            default:
                                t += ' controls="', t += this.escape(e), t += '"'
                        }
                        return t += ' loop="true"><source src="', t += this.escape(this.video), t += '" type="video/mp4" /></video></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_facebook_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        switch (t = "", t += '<div class="video-wrapper">', n = this.overlay ? !0 : !1, t += '<video autoplay="autoplay"', e = n) {
                            case !0:
                                t += ' controls="controls"';
                                break;
                            case !1:
                            case null:
                                break;
                            default:
                                t += ' controls="', t += this.escape(e), t += '"'
                        }
                        return t += ' loop="true"><source src="', t += this.escape(this.video), t += '" type="video/mp4" /></video></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_flickr"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="video-wrapper"><embed autoplay="true" autostart="true" play="true" src="', t += this.escape(this.video), t += '&amp;autoPlay=true" wmode="transparent" /></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_instagram_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        switch (t = "", t += '<div class="instagram-wrapper">', n = this.overlay ? !0 : !1, t += '<video autoplay="autoplay"', e = n) {
                            case !0:
                                t += ' controls="controls"';
                                break;
                            case !1:
                            case null:
                                break;
                            default:
                                t += ' controls="', t += this.escape(e), t += '"'
                        }
                        return t += ' id="video" loop="true"><source src="', t += this.escape(this.video), t += '" /></video></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_soundcloud_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="video-wrapper"><iframe allow="autoplay" frameborder="no" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/', t += this.escape(this.id), t += '&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true&amp;show_teaser=false"></iframe></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_spotify_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="video-wrapper"><iframe allowtransparency="true" frameborder="0" src="https://embed.spotify.com/?uri=spotify:track:', t += this.escape(this.id), t += '"></iframe></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_tumblr_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="video-wrapper">', t += this.video, t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_twitter_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        switch (t = "", t += '<div class="twitter-wrapper">', n = this.overlay ? !0 : !1, t += '<video autoplay="autoplay"', e = n) {
                            case !0:
                                t += ' controls="controls"';
                                break;
                            case !1:
                            case null:
                                break;
                            default:
                                t += ' controls="', t += this.escape(e), t += '"'
                        }
                        return t += ' loop="true"><source src="', t += this.escape(this.video), t += '" type="video/mp4" /></video></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_vimeo_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="video-wrapper"><iframe allowfullscreen="true" frameborder="0" mozallowfullscreen="true" src="//player.vimeo.com/video/', t += this.escape(this.id), t += '?autoplay=1&amp;title=0&amp;byline=0&amp;portrait=0" webkitallowfullscreen="true"></iframe></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_vine_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="vine-wrapper"><iframe frameborder="0" src="', t += this.escape(this.id), t += '/card?audio=1"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["partials/video/_youtube_embed"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", t += '<div class="video-wrapper">', e = this.overlay ? "autoplay=1&rel=0" : "autoplay=1&rel=0&controls=0", t += '<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube-nocookie.com/embed/', t += this.escape(this.id), t += "?", t += this.escape(e), t += '"></iframe></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.plan_change = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0,
                                e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="change-plan-overlay tc-gray"><h2 class="light tc-orange fs-1-75">Changing Your Juicer Plan</h2><div class="plan-change-summary cf mb-40 pb-40 relative"><div class="existing-plan fl"><h3 class="bold tc-grapefruit">Current Plan: ', t += this.escape(this.model.planCapital()), t += " - $", t += this.escape(this.model.get("cost_to_i")), t += "/mo</h3><h4>", t += this.model.get("subtitle"), t += '</h4></div><div class="change-plan-arrow sprite"></div><div class="new-plan fr"><h3 class="bold tc-grapefruit">New Plan: ', t += this.escape(this.model.newPlanCapital()), t += " - $", t += this.escape(this.model.get("new_cost")), t += "/mo</h3><h4>", t += this.model.get("new_subtitle"), t += "</h4></div></div>", "small" === this.model.get("new_plan") ? (t += '<div class="change-plan-explainer mb-25">Your subscription will no longer renew and your Juicer account will automatically downgrade to a <strong>Small</strong> plan on <strong>', t += this.escape(this.model.downgradeDate()), t += '</strong></div><div class="archive-mode-explainer"><strong class="tc-grapefruit up">Notice:</strong> Fully downgrading will remove all extra sources and feeds from your Juicer account. If you\u2019d like to keep an archive of these feeds, consider downgrading to <a class="tc-grapefruit tdu" data-method="put" href="/plans/archive">Archive Mode</a> for $5/Month! <form action="/churns" class="tac mt-30" method="post"><input name="authenticity_token" type="hidden" value="', t += this.escape(this.csrf), t += '" /><input name="redirect_path" type="hidden" value="/downgrade" /><input class="j-button" data-confirm="Are you sure you want to downgrade to small?" data-disable-with="Downgrading..." type="submit" value="Downgrade to Small" /></form></div>') : (t += '<div class="change-plan-explainer">You will be charged a prorated amount for the remainer of this month for this new plan, and fully charged next on your normal billing date, <strong>', t += this.escape(this.model.downgradeDate()), t += '</strong></div><form action="/plans/', t += this.escape(this.model.get("new_plan")), t += '" class="tac mt-30" method="post"><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="', t += this.escape(this.csrf), t += '" /><input class="j-button" data-disable-with="Loading..." type="submit" value="', t += this.escape(this.model.get("verb")), t += '" /></form>'), t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.please_wait = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="mt-15 tc-gray fourteen please-wait"><h3 class="strong">Please be patient.</h3><p>It can take up to 30 seconds to pull in all the posts.</p><p>Taking forever? <a class="tc-gray bold" href="/contact">Contact us</a></p></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.post_edit = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="p-50"><h2 class="tac light fs-2 tc-orange mb-30">Edit Post</h2>', t += Juicer.Helpers.renderPartial("poster", {
                            post: this.post
                        }), t += '<div class="message-container">', t += Juicer.Helpers.renderPartial("message", {
                            post: this.post
                        }), t += "</div>", this.feed.get("moderation_allowed?") ? (t += '<form><textarea class="bordered my-25" placeholder="Add text or links to the post">', t += this.escape(this.post.get("edit")), t += '</textarea><div class="tac"><input class="j-button" type="submit" value="Add content" /></div></form>') : t += '<h3>Only Paid accounts can edit posts. <a href="/plans">Upgrade your account.</a></h3>', t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.post_overlay = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="j-post-overlay juicer-feed loaded ', t += this.escape(this.post.gallery() ? "j-gallery" : void 0), t += '" data-id="', t += this.escape(this.post.get("id")), t += '">', this.post.isVideo() ? t += Juicer.Helpers.renderPartial("video/" + this.post.lowerType() + "_embed", {
                            id: this.post.get("external_id"),
                            video: this.post.get("video"),
                            overlay: !0
                        }) : (t += '<div class="image">', t += Juicer.Helpers.renderPartial("content", {
                            post: this.post,
                            feed: this.feed,
                            overlay: !0
                        }), t += "</div>"), t += '<div class="j-overlay-text ', t += this.escape(this.post.postType()), t += '">', t += Juicer.Helpers.renderPartial("poster", {
                            post: this.post,
                            lazyLoad: !1
                        }), this.post.get("unformatted_message") && (t += '<div class="j-message">', t += this.post.fullMessage(), t += "</div>"), t += Juicer.Helpers.renderPartial("edit", {
                            post: this.post
                        }), t += Juicer.Helpers.renderPartial("meta", {
                            post: this.post
                        }), t += '<div class="j-bottom">', t += Juicer.Helpers.renderPartial("link", {
                            url: this.post.link(),
                            label: "View on " + this.post.sourceType(),
                            "class": "juicer-button j-" + this.post.lowerType(),
                            aria: this.post.lowerType()
                        }), t += '<ul class="j-share"><li><a class="j-facebook share" href="', t += this.escape(this.post.facebookShare()), t += '" target="_blank">Facebook</a></li><li><a class="j-twitter share" href="', t += this.escape(this.post.twitterShare()), t += '" target="_blank">Twitter</a></li><li><a class="j-pinterest share" href="', t += this.escape(this.post.pinterestShare()), t += '" target="_blank">Pinterest</a></li><li><a class="j-linkedin share" href="', t += this.escape(this.post.linkedInShare()), t += '" target="_blank">LinkedIn</a></li><li><a class="j-email share" href="', t += this.escape(this.post.emailShare()), t += '" target="_blank">Email</a></li></ul></div><div class="j-navigate"><a class="j-previous" data-post-id="', t += this.escape(this.previous.get("id")), t += '"><span>Previous</span></a><a class="j-next" data-post-id="', t += this.escape(this.next.get("id")), t += '"><span>Next</span></a></div></div></div>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.sidebar = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<h1 class="fs-1-75 tc-off-white tac sidebar-feed-name">', t += this.escape(this.feed.get("name")), t += '<a class="feed-name-edit sprite">Edit</a></h1><div class="relative"><div class="tac mb-30"><a class="j-button add-source">+ Add Social Media Source</a></div><ul class="sidebar-menu tc-off-white"><li class="menu-item" id="sources">Social Media Sources</li><li class="menu-item alert-menu-item" data-moderation-count="!" id="social_accounts">Expired Social Accounts</li><li class="menu-item" id="settings">Feed Settings</li><li class="menu-item" id="design">Custom Design</li><li class="menu-item" id="embed">Embed in your Site</li><li class="menu-item alert-menu-item" data-moderation-count="', t += this.escape(this.feed.moderationStatus()), t += '" id="moderate">Moderate and Filter</li><li class="menu-item slide-menu-item" id="analytics">Analytics</li><li class="menu-item slide-menu-item" id="hub">Share your Feed</li>', "small" === this.feed.get("plan") && (t += '<li class="menu-item slide-menu-item" id="features">Additional Features</li>'), t += '<li class="menu-item slide-menu-item" id="synced">Last Sync ', t += this.escape(Juicer.Helpers.fullDate(this.feed.get("last_synced"))), t += "</li></ul></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.source_form = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e;
                        return t = "", e = {
                            source: this.source,
                            csrf: this.csrf,
                            feed: this.feed,
                            type: this.type,
                            socialAccounts: this.socialAccounts,
                            results: this.results
                        }, t += '<div class="tac">', this.feed ? this.feed.get("more_sources_allowed?") ? t += Juicer.Helpers.renderPartial("source_form/new", e) : (t += '<div class="p-50"><h2 class="tc-orange fs-2 light">Upgrade to add more sources</h2><h3 class="mb-25">Unfortunately, the ', t += this.escape(this.feed.get("plan")), t += " plan only allows ", t += this.escape(this.feed.get("max_sources")), t += " sources.</h3>", t += Juicer.Helpers.renderPartial("upgrade_plan", {
                            feed: this.feed
                        }), t += "</div>") : t += Juicer.Helpers.renderPartial("source_form/new", e), t += "</div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["sources/manual"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<form accept-charset="UTF-8" class="tac p-50" id="manual_post" method="post"><h2 class="light fs-2 tc-orange mb-30">Add a Post Manually to ', t += this.escape(this.source.displayName()), t += "</h2>", this.feed.notSmall() ? (t += '<input name="source_id" type="hidden" value="', t += this.escape(this.source.get("id")), t += '"><input autocomplete="off" class="source-overlay-field" id="link" name="link" placeholder="ex: https://twitter.com/juicerio/status/615555384300961792" type="text" /><input class="j-button" name="commit" type="submit" value="Add Post" /></input>') : (t += '<h3 style="margin-bottom:1.5rem">Unfortunately, the ', t += this.escape(this.feed.get("plan")), t += " plan doesn't allow you to manually enter posts. Please upgrade!</h3>", t += Juicer.Helpers.renderPartial("upgrade_plan", {
                            feed: this.feed
                        })), t += "</form>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["sources/moderation"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t, e, n;
                        return t = "", t += '<form accept-charset="UTF-8" class="tac p-50 source-update" method="post"><input name="id" type="hidden" value="', t += this.escape(this.source.get("id")), t += '" /><h2 class="light fs-2 tc-orange mb-30">Set Moderation Filters for ', t += this.escape(this.source.displayName()), t += '</h2><h3 class="fifteen tc-dark-gray mb-15">These work the same way as the moderation and filtering for your whole feed, but just apply to this one sources posts. Read more about it <a class="tc-dark-gray bold" href="/blog/walkthrough-moderating-and-filtering-your-social-posts-in-juicer">here</a>. </h3>', n = "list words, @usernames, or #hastags", e = "Separate filters with a comma. Filters are case-sensitive.", t += '<h3 class="settings-label">Disallow posts with these words:</h3><textarea class="moderation-filter source-overlay-textarea thirteen mb-10 bc-gray" name="disallowed" placeholder="', t += this.escape(n), t += " to block. ", t += this.escape(e), t += '">', t += this.source.disallowed(), t += '</textarea><h3 class="settings-label">Only allow posts with these words:</h3><textarea class="moderation-filter source-overlay-textarea thirteen mb-20" name="allowed" placeholder="', t += this.escape(n), t += " to allow. ", t += this.escape(e), t += '">', t += this.source.allowed(), t += '</textarea><div class="mb-15"><input name="queue" type="hidden" value="0" />', t += this.source.get("queue") ? '<input checked="true" id="queue" name="queue" type="checkbox" />' : '<input id="queue" name="queue" type="checkbox" />', t += '<label for="queue">Send all posts to moderation queue</label></div><input class="j-button" name="commit" type="submit" value="Save Moderation Settings" /></form>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["sources/rename"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<form accept-charset="UTF-8" class="tac p-50 source-update" method="post"><h2 class="light fs-2 tc-orange mb-30">Rename ', t += this.escape(this.source.displayName()), t += '</h2><p class="tc-gray fourteen mb-30">This will <strong>not</strong> show different posts. To display different posts through a new source, delete this source, and add a new one with your new hashtag or social account. </p><input name="id" type="hidden" value="', t += this.escape(this.source.get("id")), t += '" /><input autocomplete="off" class="source-overlay-field" name="name" placeholder="How you want the name of your source to display on Juicer." type="text" value="', t += this.escape(this.source.displayTerm()), t += '" /><input class="j-button" name="commit" type="submit" value="Update Name" /></form>'
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["sources/twitter_unavailable_for_small_plan"] = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="tac"><div class="p-50"><h2 class="tc-orange fs-2 light">Upgrade to add Twitter</h2><h3 class="mb-25">Unfortunately, due to <a href="https://help.juicer.io/articles/3058468-twitter-rate-limit">Twitter API changes</a> the small plan does not allow adding Twitter sources. </h3>', t += Juicer.Helpers.renderPartial("upgrade_plan"), t += "</div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST.widget = function () {
            return this.Skim = {
                    access: function (t) {
                        var e;
                        return e = this[t], "function" == typeof e && (e = e.call(this)), e === !0 ? [this] : e === !1 || null == e ? !1 : "[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 === e.length ? !1 : e
                    },
                    withContext: function (t, e) {
                        var n, r;
                        return n = function (t) {
                            var e;
                            return e = function () {}, e.prototype = t, new e
                        }, t = n(t), t.safe || (t.safe = this.safe || function (t) {
                            var e;
                            return (null != t ? t.skimSafe : void 0) ? t : (e = new String(null != t ? t : ""), e.skimSafe = !0, e)
                        }), t.isArray = Array.isArray || function (t) {
                            return "[object Array]" === {}.toString.call(t)
                        }, t.flatten = r = function (t) {
                            var e, n, i, s;
                            for (n = [], i = 0, s = t.length; s > i; i++) e = t[i], e instanceof Array ? n = n.concat(r(e)) : n.push(e);
                            return n
                        }, t.escape || (t.escape = this.escape || function (t) {
                            return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        }), e.call(t)
                    }
                },
                function (t) {
                    return null == t && (t = {}), Skim.withContext.call({}, t, function () {
                        var t;
                        return t = "", t += '<div class="flip-container"><div class="flipper"><div class="front">', t += Juicer.Helpers.renderPartial("widget_card", {
                            post: this.first,
                            admin: this.admin
                        }), t += '</div><div class="back">', t += Juicer.Helpers.renderPartial("widget_card", {
                            post: this.second,
                            admin: this.admin
                        }), t += "</div></div></div>"
                    })
                }
        }.call(this)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Assignment = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.urlRoot = "/api/assignments", n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Click = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.urlRoot = function () {
                return Juicer.Constants.API_ROOT + "/api/clicks"
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Enterprise = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "slug", n.prototype.urlRoot = "/api/enterprise", n.prototype.page = 1, n.prototype.fetch = function (t) {
                return t = null != t ? _u.clone(t) : {}, t.data = null != t.data ? _u.extend(t.data, this.data()) : this.data(), n.__super__.fetch.call(this, t)
            }, n.prototype.parse = function (t, e) {
                var r, i;
                return t.current_page > 1 && t.feeds.length > 0 && (r = _u.map(this.get("feeds").models, function (t) {
                    return function (t) {
                        return t.attributes
                    }
                }(this)), i = t.feeds, t.feeds = r.concat(i), t.new_feeds = i), n.__super__.parse.call(this, t, e)
            }, n.prototype.data = function () {
                var t;
                return t = {
                    page: this.page
                }, this.query && (t.query = this.query), t
            }, n.prototype.nextPage = function () {
                return this.page += 1
            }, n.prototype.moreFeeds = function () {
                return this.get("current_page") < this.get("total_pages")
            }, n.prototype.relations = [{
                type: JuicerBackbone.Many,
                key: "feeds",
                relatedModel: "Juicer.Models.Feed"
            }, {
                type: JuicerBackbone.Many,
                key: "new_feeds",
                relatedModel: "Juicer.Models.Feed"
            }, {
                type: JuicerBackbone.Many,
                key: "users",
                relatedModel: "Juicer.Models.User"
            }], n
        }(JuicerBackbone.AssociatedModel)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.EnterpriseUsers = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.idAttribute = "slug", n.prototype.url = function () {
                return "/api/enterprise/" + this.get("slug") + "/users"
            }, n.prototype.relations = [{
                type: JuicerBackbone.Many,
                key: "admins",
                relatedModel: "Juicer.Models.User"
            }, {
                type: JuicerBackbone.Many,
                key: "users",
                relatedModel: "Juicer.Models.User"
            }], n
        }(JuicerBackbone.AssociatedModel)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Estimate = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.defaults = {
                sources: 5,
                frequency: 3
            }, n.prototype.frequencyInWords = function () {
                return this.frequencyMap[this.get("frequency")]
            }, n.prototype.frequencyMap = {
                1: "Day",
                2: "4 Hours",
                3: "1 Hour",
                4: "30 Minutes",
                5: "10 Minutes",
                6: "5 Minutes",
                7: "1 Minute"
            }, n.prototype.frequencyMuliplier = {
                1: 4,
                2: 6,
                3: 8,
                4: 14,
                5: 20,
                6: 40,
                7: 200
            }, n.prototype.price = function () {
                return this.get("sources") * this.frequencyCalculated()
            }, n.prototype.frequencyCalculated = function () {
                return this.frequencyMuliplier[this.get("frequency")]
            }, n.prototype.priceString = function () {
                return this.maxSources() ? "$" + this.frequencyCalculated() : "$" + this.price()
            }, n.prototype.priceLabel = function () {
                return this.maxSources() ? "Per Source per Month" : "Cost per Month (in US dollars)"
            }, n.prototype.sources = function () {
                return this.maxSources() ? "20+" : this.get("sources")
            }, n.prototype.maxSources = function () {
                return this.get("sources") > 20
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Models.Feed = function (n) {
            function r() {
                return this.fetchNewPosts = t(this.fetchNewPosts, this), this.poll = t(this.poll, this), this.startPolling = t(this.startPolling, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.idAttribute = "slug", r.prototype.urlRoot = function () {
                return Juicer.Constants.API_ROOT + "/api/feeds"
            }, r.prototype.parse = function (t, e) {
                return null != this.get("css") && delete t.css, r.__super__.parse.call(this, t, e)
            }, r.prototype.sync = function (t, e, n) {
                var i;
                return i = n.url, "read" !== t && (n.url = "/api/feeds/" + this.get("id")), i && (i.match("fetch_all") || i.match("bulk_moderate")) && (n.url = i), r.__super__.sync.call(this, t, e, n)
            }, r.prototype.defaults = {
                slug: "error"
            }, r.prototype.allowed = function () {
                return null != this.get("allowed") ? this.get("allowed") : ""
            }, r.prototype.disallowed = function () {
                return null != this.get("disallowed") ? this.get("disallowed") : ""
            }, r.prototype.moderation = function () {
                return !!this.get("allowed") || !!this.get("disallowed") || this.get("profanity") || this.get("queue") || this.get("prevent_duplicates") || this.geofence()
            }, r.prototype.geofence = function () {
                return !!(this.get("distance") && this.get("location") && this.get("lat") && this.get("lng"))
            }, r.prototype.widget = function () {
                return "widget" === this.get("css")
            }, r.prototype.slider = function () {
                return "slider" === this.get("css")
            }, r.prototype.livingWall = function () {
                return "living-wall" === this.get("css")
            }, r.prototype.campaign = function () {
                return _u.contains(["campaign", "enterprise"], this.get("plan"))
            }, r.prototype.defaultHeight = function () {
                return this.widget() ? 400 : null
            }, r.prototype.defaultWidth = function () {
                return this.widget() ? 400 : null
            }, r.prototype.initialize = function (t) {
                return null == t && (t = {}), this.per = t.per, this.page = t.page, this.filter = t.filter, this.startingAt = t.startingAt, this.endingAt = t.endingAt, this.search = t.search, this.truncate = t.truncate, this.admin = t.admin, this.per || (this.per = 100), this.page || (this.page = 1), this.once("sync", this.startPolling)
            }, r.prototype.startPolling = function () {
                return this.shouldPoll() ? this.poll() : void 0
            }, r.prototype.shouldPoll = function () {
                return this.pollingAllowed() && this.isGrid()
            }, r.prototype.pollingAllowed = function () {
                return this.notSmall() && !!this.get("poll") && !!this.get("update_frequency")
            }, r.prototype.poll = function () {
                return this.timeout = setTimeout(this.fetchNewPosts, this.pollInterval())
            }, r.prototype.fetchNewPosts = function (t) {
                var e;
                return null == t && (t = !0), this.polling = !0, e = this.get("requested_at"), this.fetch({
                    success: function (n) {
                        return function () {
                            return n.get("requested_at") !== e && n.trigger("new-posts"), n.polling = !1, t ? n.poll() : void 0
                        }
                    }(this)
                })
            }, r.prototype.pollInterval = function () {
                var t;
                return t = 60 * this.get("update_frequency") * 1e3 / this.divisor(), t = Math.floor(t), t = Math.max(t, 15e3)
            }, r.prototype.divisor = function () {
                var t;
                return t = this.get("sources").length, 2 > t && (t = 2), t > 10 && (t = 10), t
            }, r.prototype.fetch = function (t) {
                return t = null != t ? _u.clone(t) : {}, t.data = null != t.data ? _u.extend(t.data, this.data()) : this.data(), t.data = this.dataToArray(t.data), r.__super__.fetch.call(this, t)
            }, r.prototype.data = function () {
                var t;
                return t = {}, this.per && (t = _u.extend(t, {
                    per: this.per
                })), this.admin && (t = _u.extend(t, {
                    admin: !0
                })), this.endingAt && (t = _u.extend(t, {
                    ending_at: this.endingAt
                })), this.filter && (t = _u.extend(t, {
                    filter: this.filter
                })), this.page && !this.polling && (t = _u.extend(t, {
                    page: this.page
                })), this.search && (t = _u.extend(t, {
                    search: this.search
                })), this.startingAt && (t = _u.extend(t, {
                    starting_at: this.startingAt
                })), this.truncate && (t = _u.extend(t, {
                    truncate: this.truncate
                })), t
            }, r.prototype.dataToArray = function (t) {
                var e;
                return e = Object.keys(t).reduce(function (e, n) {
                    return e.concat({
                        name: n,
                        value: t[n]
                    })
                }, []), e.sort(function (t, e) {
                    return t.name > e.name
                })
            }, r.prototype.nextPage = function (t) {
                return this.page += 1, this
            }, r.prototype.previousPage = function (t) {
                return this.page -= 1, this
            }, r.prototype.resetPage = function () {
                return this.page = 1, this
            }, r.prototype.nextSync = function () {
                var t;
                switch (t = new Date(this.get("last_synced")), this.get("plan")) {
                    case "medium":
                        t.setHours(t.getHours() + 1);
                        break;
                    case "large":
                        t.setMinutes(t.getMinutes() + 10);
                        break;
                    case "campaign":
                        t.setMinutes(t.getMinutes() + 1);
                        break;
                    case "custom":
                        t.setMinutes(t.getMinutes() + this.get("update_frequency"));
                        break;
                    case "enterprise":
                        t.setMinutes(t.getMinutes() + this.get("update_frequency"));
                        break;
                    default:
                        t.setDate(t.getDate() + 1)
                }
                return t
            }, r.prototype.paid = function () {
                return _u.contains(Juicer.Constants.PAID_PLANS, this.get("plan"))
            }, r.prototype.notSmall = function () {
                return "small" !== this.get("plan")
            }, r.prototype.cssClass = function () {
                var t;
                return t = this.get("css") || "image-grid", "widget" === t && (t = "juicer-widget"), this.get("colored_icons") && "classic" !== this.get("css") && (t += " colored-icons"), this.hoverImages() && (t += " hover-images"), t
            }, r.prototype.isGrid = function () {
                return !_u.contains(["classic", "dark", "slider", "widget", "living-wall"], this.get("css"))
            }, r.prototype.classic = function () {
                return "classic" === this.get("css")
            }, r.prototype.hasInterval = function () {
                return _u.contains(["widget", "slider", "living-wall"], this.get("css"))
            }, r.prototype.hasColumns = function () {
                return !_u.contains(["widget", "classic"], this.get("css"))
            }, r.prototype.hoverImages = function () {
                return _u.contains(["image-grid", "slider", "hip", "night"], this.get("css"))
            }, r.prototype.hasHeight = function () {
                return this.get("height")
            }, r.prototype.termsByType = function (t) {
                var e;
                return e = this.get("sources").where({
                    source: t
                }), _u.map(e, function (t) {
                    return t.get("term")
                })
            }, r.prototype.fetchAll = function () {
                var t, e;
                return e = this.url() + "/fetch_all", t = {
                    url: e,
                    type: "POST"
                }, (this.sync || JuicerBackbone.sync).call(this, null, this, t)
            }, r.prototype.bulkModerate = function (t, e) {
                var n, r, i;
                return null == t && (t = !0), null == e && (e = null), i = "/api/feeds/" + this.get("slug") + "/bulk_moderate", n = {}, t && (n.approve = !0), null != e && (n.filter = e), r = {
                    url: i,
                    type: "POST",
                    data: $.param(n)
                }, (this.sync || JuicerBackbone.sync).call(this, null, this, r)
            }, r.prototype.partial = function () {
                var t;
                switch (t = this.get("css") || this.get("style")) {
                    case "modern":
                        return "user";
                    case "user":
                        return "user";
                    case "slider":
                        return "image";
                    case "image-grid":
                        return "image";
                    case "hip":
                        return "image";
                    case "classic":
                        return "classic";
                    case "living-wall":
                        return "wall";
                    case "polaroid":
                        return "polaroid";
                    case "night":
                        return "night";
                    default:
                        return "standard"
                }
            }, r.prototype.displayFilters = function () {
                return _u.contains(this.validFilters, this.get("display_filter")) && !this.hasInterval() && this.get("sources").length > 1
            }, r.prototype.validFilters = ["Social Type", "Social Account", "Grouped Terms"], r.prototype.filterPartial = function () {
                return this.get("display_filter_type") ? "new" : "old";
            }, r.prototype.filters = function () {
                var t;
                return t = function () {
                    switch (this.get("display_filter")) {
                        case "Social Type":
                            return this.accountTypes();
                        case "Social Account":
                            return this.get("sources").models;
                        case "Grouped Terms":
                            return this.uniqSources()
                    }
                }.call(this), t = t.slice(0), t.unshift(this.allSource()), t
            }, r.prototype.allSource = function () {
                return new Juicer.Models.Source({
                    source: "All"
                })
            }, r.prototype.accountTypes = function () {
                var t, e;
                return t = [], e = [], _u.each(this.get("sources").models, function (n) {
                    return _u.contains(e, n.get("source")) ? void 0 : (t.push(n), e.push(n.get("source")))
                }), t
            }, r.prototype.uniqSources = function () {
                var t, e, n;
                return t = [], n = [], e = _u.map(this.get("sources").models, function (e) {
                    return _u.contains(n, e.displayName()) ? void 0 : (t.push(e), n.push(e.displayName()))
                }), t
            }, r.prototype.moderationStatus = function () {
                return this.moderation() ? "ON" : "OFF"
            }, r.prototype.colors = ["text", "link", "data", "hover", "post_background", "feed_background"], r.prototype.customColors = function () {
                return _u.some(this.getColors())
            }, r.prototype.getColor = function (t) {
                return this.getCustomColor(t) || this.getDefaultColor(t)
            }, r.prototype.getCustomColor = function (t) {
                return this.getColors()[t + "_color"]
            }, r.prototype.getColors = function () {
                return this.get("colors")
            }, r.prototype.getDefaultColor = function (t) {
                var e;
                return "hover" === t ? "#F17E6F" : (e = this.customColorMap[t], t = jQuery(e.selector).css(e.attribute), t ? Juicer.Helpers.rgb2hex(t) : "#fff")
            }, r.prototype.customColorMap = {
                text: {
                    selector: ".juicer-feed .feed-item .j-message, .juicer-feed .feed-item .j-message p",
                    attribute: "color"
                },
                link: {
                    selector: ".juicer-feed a, .j-poster h3",
                    attribute: "color"
                },
                data: {
                    selector: ".juicer-feed .j-meta a, .j-poster .j-date",
                    attribute: "color"
                },
                hover: {
                    selector: ".juicer-feed a:hover",
                    attribute: "color"
                },
                post_background: {
                    selector: ".juicer-feed li.feed-item",
                    attribute: "background-color"
                },
                feed_background: {
                    selector: ".juicer-feed",
                    attribute: "background-color"
                }
            }, r.prototype.customStyles = function () {
                var t;
                return t = "", _u.each(this.colors, function (e) {
                    return function (n) {
                        var r, i;
                        return i = e.customColorMap[n], r = e.getCustomColor(n), r ? t += i.selector + " { " + i.attribute + ": " + r + " !important; }" : void 0
                    }
                }(this)), this.get("custom_css") && (t += this.get("custom_css")), t
            }, r.prototype.updateColor = function (t, e) {
                var n, r;
                return n = this.getColors(), r = t + "_color", n[r] = e, this.set("colors", n), this.set(r, e), this.trigger("update:colors")
            }, r.prototype.resetColors = function () {
                return _u.each(this.colors, function (t) {
                    return function (e) {
                        return t.set(e + "_color", null)
                    }
                }(this))
            }, r.prototype.urmMessage = function () {
                return this.get("urm_message") ? this.get("urm_message") : "Great Post! Can we use this on our Social Media Feed? https://www.juicer.io/" + this.get("slug") + ". Reply #yes to agree. Thanks!"
            }, r.prototype.shouldShowGallery = function () {
                var t;
                return t = this.get("css") || this.get("style"), _u.contains(["modern", "polaroid", "image-grid", "hip", "night"], t)
            }, r.prototype.relations = [{
                type: JuicerBackbone.Many,
                key: "posts",
                collectionType: "Juicer.Collections.Posts"
            }, {
                type: JuicerBackbone.Many,
                key: "sources",
                relatedModel: "Juicer.Models.Source"
            }, {
                type: JuicerBackbone.Many,
                key: "assignments",
                relatedModel: "Juicer.Models.Assignment"
            }, {
                type: JuicerBackbone.Many,
                key: "social_accounts",
                collectionType: "Juicer.Collections.SocialAccounts"
            }], r
        }(JuicerBackbone.AssociatedModel)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.JuicerAd = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.defaults = function () {
                var t;
                return t = Juicer.Helpers.sample(this.messages()), {
                    image: this.randomImage(),
                    message: t,
                    unformatted_message: t,
                    poster_name: "Juicer",
                    poster_image: "https://static.juicer.io/small-square.png",
                    poster_url: "https://www.juicer.io",
                    external_created_at: new Date
                }
            }, n.prototype.ad = !0, n.prototype.twitter = function () {
                return !1
            }, n.prototype.gallery = function () {
                return !1
            }, n.prototype.poster = function () {
                return !0
            }, n.prototype.stickied = function () {
                return !1
            }, n.prototype.sourceType = function () {
                return "Juicer"
            }, n.prototype.postType = function () {
                return "image-post"
            }, n.prototype.isVideo = function () {
                return !1
            }, n.prototype.edited = function () {
                return !1
            }, n.prototype.editClass = function () {
                return ""
            }, n.prototype.userId = function () {
                return 1
            }, n.prototype.lowerType = function () {
                return "juicer"
            }, n.prototype.term = function () {
                return "juicer"
            }, n.prototype.link = function () {
                return "http://www.juicer.io"
            }, n.prototype.blogPost = function () {
                return !1
            }, n.prototype.commentClass = function () {
                return ""
            }, n.prototype.likeClass = function () {
                return ""
            }, n.prototype.classes = function () {
                return "feed-item juicer image-post juicer-ad"
            }, n.prototype.alt = function () {
                return "Embed Social Media Feeds on your website with Juicer!"
            }, n.prototype.message = function () {
                return this.get("message")
            }, n.prototype.posterImage = function () {
                return this.get("poster_image")
            }, n.prototype.messages = function () {
                return ["Like this feed? Want one of your own? Visit <a href='https://www.juicer.io'>Juicer</a> to get your own free social media feed!", "<a href='https://www.juicer.io'>Juicer</a> lets you easily create and embed social media feeds like this one on to your site for free!", "Engage your users on social media with a <a href='https://www.juicer.io'>Juicer</a> feed on your website or blog for free.", "This feed is Powered by <a href='https://www.juicer.io'>Juicer</a>"]
            }, n.prototype.randomImage = function () {
                var t;
                return t = _u.random(1, 12), 10 > t && (t = "0" + t), "https://static.juicer.io/ads/juicer-ads-" + t + ".svg"
            }, n.prototype.noMeta = function () {
                return !0
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Location = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.urlRoot = "/api/locations", n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Moderated = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.url = function () {
                return "/api/feeds/" + this.slug + "/moderated"
            }, n.prototype.initialize = function (t) {
                return this.revalidating = !0, this.slug = t.slug, this.starting_at = t.starting_at, this.once("sync", this.startPolling)
            }, n.prototype.moderated = !0, n
        }(Juicer.Models.Feed)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.PageView = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.urlRoot = function () {
                return Juicer.Constants.API_ROOT + "/api/page_views"
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Plan = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.urlRoot = "/api/plan", n.prototype.downgradeDate = function () {
                var t;
                return t = new Date(this.get("next_billing_date")), strftime("%B %-d, %Y", t)
            }, n.prototype.planCapital = function () {
                return this.capitalize(this.get("plan"))
            }, n.prototype.newPlanCapital = function () {
                return this.capitalize(this.get("new_plan"))
            }, n.prototype.capitalize = function (t) {
                return _u.titleize(t)
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Post = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.urlRoot = "/api/posts", n.prototype.restore = function (t) {
                return this.callSubUrl("/restore")
            }, n.prototype.reject = function (t) {
                return this.callSubUrl("/reject")
            }, n.prototype.stick = function (t) {
                return this.callSubUrl("/stick")
            }, n.prototype.unstick = function (t) {
                return this.callSubUrl("/unstick")
            }, n.prototype.urmRequest = function (t) {
                return this.callSubUrl("/urm", t)
            }, n.prototype.callSubUrl = function (t, e) {
                var n, r;
                return null == e && (e = {}), n = this, t = n.url() + t, r = {
                    url: t,
                    type: "POST"
                }, _u.extend(r, e), (this.sync || JuicerBackbone.sync).call(this, null, this, r)
            }, n.prototype.stickied = function () {
                return !!this.get("position")
            }, n.prototype.edited = function () {
                return !!this.get("edit")
            }, n.prototype.editClass = function () {
                return this.edited() ? "j-edited" : ""
            }, n.prototype.stickyClass = function () {
                return this.stickied() ? "j-sticky" : ""
            }, n.prototype.classes = function () {
                return "feed-item j-" + this.lowerType() + " " + this.postType() + " " + this.term() + " " + this.editClass() + " " + this.stickyClass()
            }, n.prototype.sourceType = function () {
                return this.get("source").source()
            }, n.prototype.blogPost = function () {
                return "Blog" === this.sourceType()
            }, n.prototype.twitter = function () {
                return "Twitter" === this.sourceType()
            }, n.prototype.tumblrTitle = function () {
                return "Tumblr" === this.sourceType() && !!this.get("source").get("options") && !!this.get("source").get("options").match("title")
            }, n.prototype.gallery = function () {
                return !!this.get("additional_photos") && this.get("additional_photos").length > 0
            }, n.prototype.postType = function () {
                return this.isVideo() ? "j-video" : this.gallery() ? "j-gallery" : this.get("image") ? "image-post" : "words"
            }, n.prototype.isVideo = function () {
                return _u.contains(["youtube", "vine", "vimeo", "soundcloud"], this.lowerType()) || !!this.get("video")
            }, n.prototype.termType = function () {
                return this.get("source").termType()
            }, n.prototype.term = function () {
                return this.get("source").get("term")
            }, n.prototype.userId = function () {
                return this.term()
            }, n.prototype.lowerType = function () {
                return this.get("source").lowerSource()
            }, n.prototype.likes = function () {
                return this.pluralize(this.get("like_count"), "like")
            }, n.prototype.comments = function () {
                return this.pluralize(this.get("comment_count"), "comment")
            }, n.prototype.poster = function () {
                return this.get("poster_name") || this.get("poster_image")
            }, n.prototype.posterImage = function () {
                var t;
                return "facebook" === this.lowerType() ? (this.shouldFetchFacebookImage() && this.fetchFacebookImage(), t = this.isGraphImage() ? "https://i.imgur.com/ZpcrI7L.jpg" : this.get("poster_image")) : this.get("poster_image")
            }, n.prototype.shouldFetchFacebookImage = function () {
                return this.isGraphImage() && !_u.contains(this.get("source").fetchedFacebookPosters, this.get("poster_id"))
            }, n.prototype.isGraphImage = function () {
                return !!this.get("poster_image").match("graph.facebook.com")
            }, n.prototype.fetchFacebookImage = function () {
                var t;
                return this.get("source").fetchedFacebookPosters.push(this.get("poster_id")), t = this.get("poster_image") + "?redirect=false", jQuery.getJSON(t, function (t) {
                    return function (e) {
                        var n;
                        return n = e.data.url, jQuery("[data-poster-id='" + t.get("poster_id") + "']").attr("src", n), t.get("source").fetchedFacebookPosters.splice(t.get("source").fetchedFacebookPosters.indexOf(t.get("poster_id")), 1)
                    }
                }(this))
            }, n.prototype.pluralize = function (t, e) {
                return 1 === t ? t + " " + e : t + " " + _u.pluralize(e)
            }, n.prototype.link = function () {
                switch (this.lowerType()) {
                    case "facebook":
                        return "reviews" === this.termType() ? "https://www.facebook.com/" + this.term() + "/reviews" : "https://www.facebook.com/" + this.get("poster_id") + "/posts/" + this.get("external_id");
                    case "twitter":
                        return "https://twitter.com/" + this.get("poster_name") + "/status/" + this.get("external_id");
                    case "instagram":
                        return "https://www.instagram.com/p/" + this.get("external_id") + "/";
                    case "youtube":
                        return "https://www.youtube.com/watch?v=" + this.get("external_id");
                    case "googleplus":
                        return this.get("poster_url") + "/posts/" + this.get("external_id");
                    case "tumblr":
                        return "http://" + this.get("poster_name") + ".tumblr.com/post/" + this.get("external_id");
                    case "pinterest":
                        return "http://www.pinterest.com/pin/" + this.get("external_id");
                    case "vimeo":
                        return "https://vimeo.com/" + this.get("external_id");
                    case "linkedin":
                        return "https://www.linkedin.com/company/" + this.term();
                    case "soundcloud":
                        return this.get("description");
                    case "slack":
                        return this.get("poster_url");
                    case "spotify":
                        return "http://open.spotify.com/track/" + this.get("external_id");
                    case "blog":
                        return this.blogLink();
                    case "giphy":
                        return this.get("external");
                    default:
                        return this.get("external_id")
                }
            }, n.prototype.blogLink = function () {
                return this.get("external") || this.get("external_id")
            }, n.prototype.parseBlogUrl = function () {
                var t;
                return t = this.term().match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i), t && t[1] ? t[1] : void 0
            }, n.prototype.termLink = function () {
                switch (this.lowerType()) {
                    case "twitter":
                        return "https://twitter.com/hashtag/" + this.term();
                    case "instagram":
                        return this.link();
                    case "tumblr":
                        return "https://tumblr.com/tagged/" + this.term();
                    case "vine":
                        return "https://vine.co/tags/" + this.term();
                    case "facebook":
                        return "https://www.facebook.com/hashtag/" + this.term();
                    case "youtube":
                        return "https://www.youtube.com/results?search_query=%23" + this.term();
                    case "tumblr":
                        return "https://www.tumblr.com/search/" + this.term();
                    case "googleplus":
                        return "https://plus.google.com/s/%23" + this.term();
                    default:
                        return this.get("external_id")
                }
            }, n.prototype.commentClass = function () {
                switch (this.lowerType()) {
                    case "twitter":
                        return "retweets";
                    case "pinterest":
                        return "repins";
                    default:
                        return "comments"
                }
            }, n.prototype.likeClass = function () {
                switch (this.lowerType()) {
                    case "twitter":
                        return "heart";
                    case "instagram":
                        return "heart";
                    case "tumblr":
                        return "heart";
                    case "youtube":
                        return "views";
                    default:
                        return "likes"
                }
            }, n.prototype.likeVerb = function () {
                switch (this.lowerType()) {
                    case "twitter":
                        return "favorites";
                    default:
                        return "likes"
                }
            }, n.prototype.alt = function () {
                return this.get("accessibility_caption") || "Photo from " + this.get("source").displayName() + " on " + this.sourceType() + " on " + this.get("poster_name") + " at " + this.postedDate()
            }, n.prototype.postedDate = function () {
                return Juicer.Helpers.fullDate(this.get("external_created_at"))
            }, n.prototype.noMeta = function () {
                return _u.contains(["Blog", "DeviantArt"], this.sourceType())
            }, n.prototype.facebookShare = function () {
                var t;
                return t = "https://www.facebook.com/dialog/feed?app_id=" + Juicer.Constants.FACEBOOK_APP_ID + "&display=popup&link=" + this.currentUrl(), this.status() && (t += "&description=" + this.status()), this.shouldHaveFacebookImage() && (t += "&picture=" + this.get("image")), t
            }, n.prototype.twitterShare = function () {
                var t;
                return t = "https://twitter.com/intent/tweet?text=" + this.twitterStatus(), this.shouldIncludeLink() && (t += "&url=" + this.currentUrl()), t
            }, n.prototype.pinterestShare = function () {
                return "https://pinterest.com/pin/create/button/?url=" + this.currentUrl() + "&media=" + this.encodedImage() + "&description=" + this.status()
            }, n.prototype.linkedInShare = function () {
                return "https://www.linkedin.com/shareArticle?url=" + this.currentUrl() + "&title=" + this.status()
            }, n.prototype.emailShare = function () {
                var t, e, n;
                return n = "Check out my " + this.sourceType() + " post!", t = this.status().length > 3 ? [this.status(), this.currentUrl()].join(" - ") : this.currentUrl(), e = jQuery(window).width() > 1024 ? "" : "test@example.com", "mailto:" + e + "?subject=" + n + "&body=" + t
            }, n.prototype.shouldHaveFacebookImage = function () {
                return "facebook" !== this.lowerType() && !!this.get("image")
            }, n.prototype.encodedImage = function () {
                return encodeURIComponent(this.get("image"))
            }, n.prototype.message = function () {
                return this.blogPost() || this.tumblrTitle() ? "<strong class='j-title'>" + this.get("message") + "</strong> " + this.get("excerpt") : this.get("excerpt") ? this.get("excerpt") : this.get("message")
            }, n.prototype.fullMessage = function () {
                return this.blogPost() || this.tumblrTitle() ? "<strong class='j-title'>" + this.get("message") + "</strong> " + this.get("description") : this.get("message")
            }, n.prototype.stripped = function () {
                return null != this.get("unformatted_message") ? this.get("unformatted_message").replace(/<(?:.|\n)*?>/gm, " ").replace(this.emojiRegex, "") : ""
            }, n.prototype.emojiRegex = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, n.prototype.status = function () {
                return encodeURIComponent(this.stripped())
            }, n.prototype.twitterStatus = function () {
                return this.stripped().length <= 140 ? this.status() : encodeURIComponent(this.stripped().substring(0, 137) + "...")
            }, n.prototype.shouldIncludeLink = function () {
                return (this.twitterStatus() + this.currentUrl).length <= 140
            }, n.prototype.currentUrl = function () {
                return window.location.href
            }, n.prototype.urmEligible = function () {
                return _u.contains(this.urmSources, this.sourceType())
            }, n.prototype.urmSources = ["Facebook", "Twitter"], n.prototype.urmSocialConnected = function (t) {
                return t.get("social_accounts").findWhere({
                    provider: this.lowerType()
                })
            }, n.prototype.replyIntent = function () {
                return "https://twitter.com/intent/tweet?in_reply_to=" + this.get("external_id")
            }, n.prototype.retweetIntent = function () {
                return "https://twitter.com/intent/retweet?tweet_id=" + this.get("external_id")
            }, n.prototype.likeIntent = function () {
                return "https://twitter.com/intent/like?tweet_id=" + this.get("external_id")
            }, n.prototype.relations = [{
                type: JuicerBackbone.One,
                key: "source",
                relatedModel: "Juicer.Models.Source"
            }], n
        }(JuicerBackbone.AssociatedModel)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.Source = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.urlRoot = "/api/sources", n.prototype.toJSON = function () {
                return {
                    source: _u.clone(this.attributes)
                }
            }, n.prototype.source = function () {
                return this.get("source")
            }, n.prototype.termType = function () {
                return this.get("term_type")
            }, n.prototype.lowerSource = function () {
                return this.source().toLowerCase()
            }, n.prototype.allowed = function () {
                return null != this.get("allowed") ? this.get("allowed") : ""
            }, n.prototype.disallowed = function () {
                return null != this.get("disallowed") ? this.get("disallowed") : ""
            }, n.prototype.fetchedFacebookPosters = [], n.prototype.title = function () {
                switch (this.source()) {
                    case "Blog":
                        return "Add an RSS feed";
                    case "DeviantArt":
                        return "Add a DeviantArt Users' Gallery";
                    case "Facebook":
                        return "Add a Facebook Business Page";
                    case "Flickr":
                        return "Add Flickr Users' Photos";
                    case "Giphy":
                        return "Add a Giphy Search Term";
                    case "Hashtag":
                        return "Choose a type of Hashtag";
                    case "Instagram":
                        return "Add an Instagram Account";
                    case "LinkedIn":
                        return "Add a LinkedIn Company";
                    case "Pinterest":
                        return "Add a Pinterest Users' Pins";
                    case "Slack":
                        return "Add a Slack Channel";
                    case "Soundcloud":
                        return "Add a Soundcloud Account";
                    case "Spotify":
                        return "Add a Spotify Musical Artist";
                    case "Tumblr":
                        return "Add a Tumblr Blog";
                    case "Twitter":
                        return "Add a Twitter Account";
                    case "Vimeo":
                        return "Add a Vimeo Users' Videos";
                    case "Yelp":
                        return "Add a Yelp Businesses' Reviews";
                    case "YouTube":
                        return "Add a YouTube Channel"
                }
            }, n.prototype.label = function () {
                switch (this.source()) {
                    case "Blog":
                        return "RSS Feed URL: ";
                    case "Facebook":
                        return "https://www.facebook.com/";
                    case "Flickr":
                        return "https://www.flickr.com/photos/";
                    case "Giphy":
                        return "#";
                    case "Instagram":
                        return "https://www.instagram.com/";
                    case "LinkedIn":
                        return "https://www.linkedin.com/company/";
                    case "Pinterest":
                        return "https://www.pinterest.com/";
                    case "Slack":
                        return "#";
                    case "Soundcloud":
                        return "https://soundcloud.com/";
                    case "Spotify":
                        return "https://spotify.com/artist/";
                    case "Twitter":
                        return "https://www.twitter.com/";
                    case "Vimeo":
                        return "http://vimeo.com/";
                    case "Yelp":
                        return "http://www.yelp.com/biz/";
                    case "YouTube":
                        return "https://www.youtube.com/user/"
                }
            }, n.prototype.placeholder = function () {
                switch (this.source()) {
                    case "Blog":
                        return "RSS or Atom or FeedBurner URL";
                    case "DeviantArt":
                        return "DeviantArt User URL";
                    case "Facebook":
                        return "Facebook Page Vanity URL";
                    case "Flickr":
                        return "Flickr Username";
                    case "Giphy":
                        return "Search Term";
                    case "Instagram":
                        return "Instagram Username";
                    case "LinkedIn":
                        return "LinkedIn Company ID Number";
                    case "Pinterest":
                        return "Pinterest Username";
                    case "Slack":
                        return "Slack Channel Name";
                    case "Soundcloud":
                        return "Soundcloud Username";
                    case "Spotify":
                        return "Artist Name";
                    case "Tumblr":
                        return "Tumblr Username";
                    case "Twitter":
                        return "Twitter Username";
                    case "Vimeo":
                        return "Vimeo Username";
                    case "Yelp":
                        return "Business Name URL";
                    case "YouTube":
                        return "YouTube Username or Channel ID"
                }
            }, n.prototype.typeSymbol = function () {
                return "hashtag" === this.get("term_type") ? "#" : "location" === this.get("term_type") ? "\u25c9" : "@"
            }, n.prototype.displayTerm = function () {
                var t;
                return this.get("name") && (t = this.get("name")), t || (t = this.get("term")), t
            }, n.prototype.displayName = function () {
                return "" + this.typeSymbol() + this.displayTerm()
            }, n.prototype.hashtags = function () {
                return _u.contains(this.hashtagSupporters, this.source())
            }, n.prototype.needsLogin = function () {
                return _u.contains(this.requiresLogin, this.source())
            }, n.prototype.manual = function () {
                return _u.contains(Juicer.Constants.SOURCES_WHERE_POSTS_CAN_BE_ADDED_MANUALLY, this.source())
            }, n.prototype.location = function () {
                return _u.contains(this.hasLocation, this.source())
            }, n.prototype.hashtagSupporters = ["Twitter", "YouTube", "Tumblr", "Pinterest", "Spotify", "Facebook"], n.prototype.requiresLogin = ["Facebook", "Instagram", "LinkedIn", "Slack", "Spotify", "Twitter"], n.prototype.hasLocation = ["Twitter"], n.prototype.alternateNames = ["location", "group"], n.prototype.filterClass = function (t, e, n) {
                var r, i, s;
                return null == e && (e = null), null == n && (n = !1), s = "j-" + this.lowerSource().replace(/@|#/, ""), i = s, n && (i += " " + s + "-text " + s + "-hover j-social-icon"), this.all() && (i = "all j-social-icon"), r = i, "Grouped Terms" === t && (r += " grouped"), e && (r += " highlight"), r
            }, n.prototype.all = function () {
                return "all" === this.lowerSource()
            }, n.prototype.filter = function (t) {
                if (this.all()) return null;
                switch (t) {
                    case "Social Type":
                        return this.source();
                    case "Social Account":
                        return this.get("id");
                    case "Grouped Terms":
                        return this.get("term")
                }
            }, n.prototype.filterDisplay = function (t) {
                if (this.all()) return "All";
                switch (t) {
                    case "Social Type":
                        return this.source();
                    case "Social Account":
                        return this.displayName();
                    case "Grouped Terms":
                        return this.displayName()
                }
            }, n.prototype.usernameExample = function () {
                return this.usernameExamples[this.lowerSource()]
            }, n.prototype.usernameExamples = {
                facebook: {
                    name: "REI",
                    link: "https://www.facebook.com/rei",
                    formattedLink: "https://www.facebook.com/<span class='example-link-highlight'>rei</span>"
                },
                twitter: {
                    name: "Adult Swim",
                    link: "https://twitter.com/adultswim",
                    formattedLink: "https://twitter.com/<span class='example-link-highlight'>adultswim</span>"
                },
                instagram: {
                    name: "Humans of New York",
                    link: "https://www.instagram.com/humansofny",
                    formattedLink: "https://www.instagram.com/<span class='example-link-highlight'>humansofny</span>"
                },
                youtube: {
                    name: "CGP Grey",
                    link: "https://www.youtube.com/user/CGPGrey",
                    formattedLink: "https://www.youtube.com/user/<span class='example-link-highlight'>CGPGrey</span>"
                },
                tumblr: {
                    name: "A Well Traveled Woman",
                    link: "http://awelltraveledwoman.tumblr.com",
                    formattedLink: "http://<span class='example-link-highlight'>awelltraveledwoman</span>.tumblr.com"
                },
                pinterest: {
                    name: "Joy Cho / Oh Joy!",
                    link: "https://www.pinterest.com/ohjoy",
                    formattedLink: "https://www.pinterest.com/<span class='example-link-highlight'>ohjoy</span>"
                },
                blog: {
                    name: "Wired",
                    link: "https://www.wired.com/feed/rss",
                    formattedLink: "<span class='example-link-highlight'>https://www.wired.com/feed/rss</span>"
                },
                soundcloud: {
                    name: "Pitchform",
                    link: "https://soundcloud.com/pitchfork",
                    formattedLink: "https://soundcloud.com/<span class='example-link-highlight'>pitchfork</span>"
                },
                spotify: {
                    name: "Radiohead",
                    link: "https://www.spotify.com/artist/Radiohead",
                    formattedLink: "https://www.spotify.com/artist/<span class='example-link-highlight'>Radiohead</span>"
                },
                linkedin: {
                    name: "Juicer",
                    link: "https://www.linkedin.com/company/juicer",
                    formattedLink: "https://www.linkedin.com/company/<span class='example-link-highlight'>juicer</span>"
                },
                flickr: {
                    name: "Stephan G\xfcrtler",
                    link: "https://www.flickr.com/photos/stephanna-g",
                    formattedLink: "https://www.flickr.com/photos/<span class='example-link-highlight'>stephanna-g</span>"
                },
                vimeo: {
                    name: "Hiro Murai",
                    link: "https://vimeo.com/hiromurai",
                    formattedLink: "https://vimeo.com/<span class='example-link-highlight'>hiromurai</span>"
                },
                yelp: {
                    name: "Microsoft",
                    link: "https://www.yelp.com/biz/microsoft-mountain-view",
                    formattedLink: "https://www.yelp.com/biz/<span class='example-link-highlight'>microsoft-mountain-view</span>"
                }
            }, n
        }(JuicerBackbone.AssociatedModel)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.User = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.relations = [{
                type: JuicerBackbone.Many,
                key: "feeds",
                relatedModel: "Juicer.Models.Feed"
            }], n
        }(JuicerBackbone.AssociatedModel)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.FeedValidation = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.validation = {
                name: {
                    required: !0
                }
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.ContactMessageValidation = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.validation = {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    pattern: "email"
                },
                message: {
                    required: !0
                }
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.UserUpdateValidation = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function (t) {
                return this.email = t.email, this.noPassword = t.noPassword
            }, n.prototype.validation = {
                email: {
                    required: !0
                },
                current_password: {
                    required: function () {
                        return this.noPassword ? !1 : this.email !== this.get("email")
                    },
                    minLength: 8
                },
                password: {
                    minLength: 8,
                    required: !1
                },
                current_password_two: {
                    minLength: 8,
                    required: function () {
                        return !!this.get("password")
                    }
                }
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Models.UserValidation = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.validation = {
                email: {
                    required: !0,
                    pattern: "email"
                },
                password: {
                    required: !0,
                    minLength: 8
                }
            }, n
        }(JuicerBackbone.Model)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Collections.FacebookResults = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function (t) {
                return this.type = t.type
            }, n.prototype.url = function () {
                return "/api/facebook_results/" + this.type
            }, n
        }(JuicerBackbone.Collection)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Collections.Posts = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.paginatingAttributes = ["current_page", "limit_value"], n.prototype.model = Juicer.Models.Post, n.prototype.parse = function (t) {
                return _u.each(this.paginatingAttributes, function (e) {
                    return function (n) {
                        return e[n] = t[n]
                    }
                }(this)), n.__super__.parse.call(this, t.items)
            }, n
        }(JuicerBackbone.Collection)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Collections.SocialAccounts = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.url = "/api/social_accounts", n.prototype.socialAccount = function (t) {
                return this.findWhere({
                    provider: t
                })
            }, n
        }(JuicerBackbone.Collection)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Collections.Users = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = Juicer.Models.User, n.prototype.url = "/api/users", n
        }(JuicerBackbone.Collection)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.AdminDowngrade = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.admin_downgrade, n.prototype.initialize = function (t) {
                return this.userId = t.userId, this.csrf = $('meta[name="csrf-token"]').attr("content")
            }, n.prototype.events = {
                click: "openOverlay"
            }, n.prototype.openOverlay = function (t) {
                var e;
                return t.preventDefault(), e = $(t.target).attr("href"), this.overlay = new Juicer.Views.Overlay({
                    content: this.template({
                        userId: this.userId,
                        reasons: this.reasons,
                        csrf: this.csrf,
                        action: e
                    }),
                    element: "body",
                    width: "50%"
                }), this.overlay.render()
            }, n.prototype.reasons = ["Temporary campaign/event is over", "Switching to another service", "Too expensive", "Too difficult to use", "They had technical issues", "Not satisfied with the support team", "Other"], n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.AdminUsers = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = {
                "click .toggle-favorite": "toggleFavorite"
            }, n.prototype.toggleFavorite = function (t) {
                var e, n;
                return t.preventDefault(), e = $(t.target), n = e.data("id"), jQuery.get("/admin/users/" + n + "/favorite"), "Favorite" === e.html() ? e.html("Unfavorite") : e.html("Favorite")
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.AnalyticsDateRange = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.analytics_date_range, n.prototype.events = {
                "click .date-range": "openDateRangeOverlay"
            }, n.prototype.openDateRangeOverlay = function (t) {
                var e, n;
                return console.log("open"), n = $(t.target), e = this.template({
                    start: n.data("start"),
                    end: n.data("end")
                }), this.overlay = new Juicer.Views.Overlay({
                    content: e,
                    element: this.el,
                    width: "50%"
                }), this.overlay.render()
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.BrokenImage = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function (t) {
                return null == t && (t = {}), this.model = t.model, this.handleBrokenImages()
            }, n.prototype.handleBrokenImages = function () {
                return this.$("img.j-content-image").on("error", function (t) {
                    return function (e) {
                        var n;
                        return n = jQuery(e.target).parents(".feed-item"), n.length > 0 ? t.handleBrokenImage(n) : void 0
                    }
                }(this)), this.$("img.j-content-image").on("load", function (t) {
                    return function (e) {
                        var n, r;
                        return r = jQuery(e.target), e.target.naturalWidth < 20 ? (n = r.parents(".feed-item"), t.handleBrokenImage(n)) : void 0
                    }
                }(this)), this.$(".j-poster img").on("error", function (t) {
                    return function (e) {
                        return console.log("Hiding broken profile image."), "polaroid" === t.model.get("css") ? (jQuery(e.target).parents(".j-post-container").addClass("no-poster"), jQuery(e.target).parents(".j-poster").hide()) : jQuery(e.target).hide()
                    }
                }(this)), this.$("img.j-content-image").removeClass("j-content-image")
            }, n.prototype.handleBrokenImage = function (t) {
                return this.model.get("photos") && this.model.get("admin") ? void 0 : t.find(".j-message").length > 0 && this.model.get("admin") ? (t.removeClass("image-post").addClass("words"), t.find(".j-image").hide(), console.log("Juicer: post with id " + t.data("id") + " has a broken image. Converting to a text post.")) : (t.hide(), console.log("Juicer: post with id " + t.data("id") + " has a broken image. Hiding it."));
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Churn = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.churn, n.prototype.initialize = function () {
                return null == this.el ? !1 : (this.overlay = new Juicer.Views.Overlay({
                    content: this.template(),
                    element: this.el,
                    width: "50%"
                }), this.overlay.render())
            }, n.prototype.events = {
                "click .delete": "closeOverlay"
            }, n.prototype.closeOverlay = function () {
                return this.overlay.removeView()
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.BlogShow = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.el = window, n.prototype.initialize = function () {
                return this.loaded = !1, this.triggerPoint = $("#disqus_thread").offset().top
            }, n.prototype.events = function () {
                return {
                    scroll: "lazyLoadDisqus"
                }
            }, n.prototype.lazyLoadDisqus = _u.debounce(function () {
                return this.checkScroll()
            }, 300), n.prototype.checkScroll = function () {
                return this.scrollPoint() > this.triggerPoint && !this.loaded ? this.loadDisqus() : void 0
            }, n.prototype.loadDisqus = function () {
                var t, e;
                return this.loaded = !0, t = "juicerio", e = document.createElement("script"), e.type = "text/javascript", e.async = !0, e.src = "//" + t + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e)
            }, n.prototype.scrollPoint = function () {
                return this.$el.scrollTop() + this.$el.height()
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.DocsSidebar = function (n) {
            function r() {
                return this.determineLeft = t(this.determineLeft, this), this.checkSidebar = t(this.checkSidebar, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.el = window, r.prototype.initialize = function (t) {
                return this.sidebar = jQuery(".docs-sidebar"), this.sibling = jQuery(".docs-content"), this.sidebarFooter = !1, this.sidebarHeight = this.sidebar.height(), this.$el.on("scroll", this.checkSidebar), this.$el.on("resize", _u.throttle(this.determineLeft, 100)), this.topPadding = 20, this.offset = this.sidebar.offset().top - this.topPadding, this.checkSidebar()
            }, r.prototype.checkSidebar = function () {
                return this.scrolledToBottom() ? (this.sidebarFooter || this.sidebar.css(this.absolute()), this.sidebarFooter = !0) : this.scrollPoint() ? (this.sidebar.css(this.fixed()), this.sidebarFooter = !1) : (this.sidebar.removeAttr("style"), this.sidebarFooter = !1)
            }, r.prototype.scrollPoint = function () {
                return this.offset <= this.$el.scrollTop()
            }, r.prototype.scrolledToBottom = function () {
                return this.$el.scrollTop() >= $(document).height() - this.$el.height() - $(".footer").height() - (this.$el.height() - this.sidebarHeight)
            }, r.prototype.fixed = function () {
                return {
                    position: "fixed",
                    top: this.topPadding,
                    left: this.sidebar.offset().left
                }
            }, r.prototype.absolute = function () {
                return {
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    top: "auto"
                }
            }, r.prototype.determineLeft = function () {
                return this.scrollPoint() ? this.sidebar.css({
                    left: this.sibling.offset().left
                }) : !1
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.DowngradeOverlay = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.downgrade_overlay, n.prototype.initialize = function () {
                return this.$el.data("downgrade-at") ? (this.plan = this.$el.data("plan"), this.downgradeAt = this.$el.data("downgrade-at"), this.overlay = new Juicer.Views.Overlay({
                    content: this.template({
                        plan: this.plan,
                        downgradeAt: this.downgradeAt
                    }),
                    element: this.el,
                    width: "50%"
                }), this.overlay.render()) : !1
            }, n.prototype.events = {
                "click .delete": "closeOverlay"
            }, n.prototype.closeOverlay = function () {
                return this.overlay.removeView()
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Calculator = function (n) {
            function r() {
                return this.updateValues = t(this.updateValues, this), this.render = t(this.render, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST["enterprise/calculator"], r.prototype.initialize = function () {
                return this.model = new Juicer.Models.Estimate, this.model.on("change", this.updateValues), this.render()
            }, r.prototype.render = function () {
                return this.$el.html(this.template({
                    model: this.model
                }))
            }, r.prototype.updateValues = function () {
                return this.$(".calculator-sources").html(this.model.sources()), this.$(".calculator-frequency").html(this.model.frequencyInWords()), this.$(".calculator-price").html(this.model.priceString()), this.$(".calculator-price-label").html(this.model.priceLabel())
            }, r.prototype.events = {
                "change input": "updateModel",
                "input input": "updateModel"
            }, r.prototype.updateModel = function (t) {
                var e;
                return e = $(t.target), this.model.set(e.data("attribute"), e.val())
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Enterprise = function (n) {
            function r() {
                return this.close = t(this.close, this), this.append = t(this.append, this), this.render = t(this.render, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST["enterprise/show"], r.prototype.initialize = function (t) {
                return this.model = new Juicer.Models.Enterprise({
                    slug: t.slug
                }), this.model.on("sync", this.render), this.model.fetch({
                    error: function () {
                        return alert("Something went wrong. Please try again.")
                    }
                })
            }, r.prototype.render = function () {
                return this.model.get("current_page") > 1 && this.model.get("new_feeds") ? this.append() : (this.$el.html(this.template({
                    model: this.model
                })), this.renderFeeds(this.model.get("feeds")))
            }, r.prototype.renderFeeds = function (t) {
                return this.feeds = new Juicer.Views.EnterpriseFeeds({
                    el: "ul.feeds",
                    collection: t,
                    model: this.model
                }).render()
            }, r.prototype.append = function () {
                return this.feeds.append()
            }, r.prototype.events = {
                "keyup input[type=search]": _u.debounce(function (t) {
                    return this.search(t)
                }, 500),
                "search input[type=search]": "search"
            }, r.prototype.search = function (t) {
                var e;
                return t.preventDefault(), this.model.query = $(t.target).val(), e = this.model.get("feeds"), this.model.fetch()
            }, r.prototype.close = function () {
                return this.model.off("sync"), this.feeds.close()
            }, r
        }(JuicerBackbone.View), Juicer.Views.EnterpriseFeeds = function (n) {
            function r() {
                return this.close = t(this.close, this), this.loadNextPage = t(this.loadNextPage, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.render = function () {
                return this.addToSubViews(this.collection.models), this.model.moreFeeds() && this.addLoadMore(), this.$el.html(this.subviews), this
            }, r.prototype.addToSubViews = function (t) {
                return this.subviews || (this.subviews = []), _u.each(t, function (t) {
                    return function (e) {
                        var n;
                        return n = new Juicer.Views.EnterpriseFeed({
                            model: e,
                            account: t.model
                        }).render(), t.subviews.push(n.el)
                    }
                }(this))
            }, r.prototype.addLoadMore = function () {
                return this.loadMore = new Juicer.Views.EnterpriseLoadMore, this.loadMore.on("next:page:clicked", this.loadNextPage), this.loadMore.render(), this.subviews.push(this.loadMore.el)
            }, r.prototype.removeLoadMore = function () {
                var t;
                return this.loadMore.off("next:page:clicked"), t = this.subviews.indexOf(this.loadMore.el), this.subviews.splice(t, 1), this.loadMore.remove(), t
            }, r.prototype.loadNextPage = function () {
                return this.model.nextPage(), this.model.fetch()
            }, r.prototype.append = function () {
                var t;
                return t = this.removeLoadMore(), this.addToSubViews(this.model.get("new_feeds").models), this.model.moreFeeds() && this.addLoadMore(), this.$el.append(this.subviews.slice(t))
            }, r.prototype.close = function () {
                return _u.each(this.subviews, function (t) {
                    return function (t) {
                        return t.remove()
                    }
                }(this)), this.loadMore && this.loadMore.off("next:page:clicked"), this.$el.empty().off(), this.stopListening(), this
            }, r
        }(JuicerBackbone.View), Juicer.Views.EnterpriseFeed = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.template = JST["enterprise/feed"], n.prototype.createAssignmentForm = JST["enterprise/create_assignment_form"], n.prototype.tagName = "li", n.prototype.className = "border bg-white p-25 relative mb-20 tal", n.prototype.initialize = function (t) {
                return this.account = t.account
            }, n.prototype.render = function () {
                return this.$el.html(this.template({
                    model: this.model,
                    assignments: this.model.get("assignments").models,
                    sources: this.model.get("sources").models,
                    account: this.account
                })), this
            }, n.prototype.events = {
                "click .delete-assignment": "deleteAssignment",
                "click .add-assignment": "openAssignmentForm",
                "click .fetch-all": "fetchAllPosts",
                "submit .new-assignment": "createAssignment"
            }, n.prototype.deleteAssignment = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target).parents(".enterprise-user-assignment"), Juicer.Helpers.confirm("Are you sure you want to remote this user from this feed?") ? (e = new Juicer.Models.Assignment({
                    id: $(t.target).data("id")
                }), e.destroy({
                    success: function (t) {
                        return function () {
                            return n.remove()
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong!")
                    }
                })) : void 0
            }, n.prototype.openAssignmentForm = function (t) {
                var e;
                return e = new Juicer.Views.Overlay({
                    content: this.createAssignmentForm({
                        model: this.model,
                        csrf: this.csrf,
                        account: this.account
                    }),
                    width: "35%",
                    element: this.el
                }), e.render()
            }, n.prototype.createAssignment = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target), e = n.serializeHash(), e.email ? (this.assignment = new Juicer.Models.Assignment(e), this.assignment.save(null, {
                    success: function (t) {
                        return function (e, n) {
                            return t.model.get("assignments").add(t.assignment), t.render()
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong!")
                    }
                })) : !1
            }, n.prototype.fetchAllPosts = function (t) {
                return Juicer.Helpers.confirm("Fetching all posts for this feed can take 10+ minutes. Please be patient and check back later.") ? (t.preventDefault(), this.model.fetchAll(), $(t.target).replaceWith("Fetching all posts.")) : !1
            }, n.prototype.close = function () {
                return this.$el.remove()
            }, n
        }(JuicerBackbone.View), Juicer.Views.EnterpriseLoadMore = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.tagName = "a", n.prototype.className = "load-more j-button mt-30", n.prototype.render = function () {
                return this.$el.text("Load More Feeds"), this
            }, n.prototype.events = {
                click: "triggerClick"
            }, n.prototype.triggerClick = function () {
                return this.trigger("next:page:clicked")
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.EnterpriseUsers = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["enterprise/users"], n.prototype.inviteAdminForm = JST["enterprise/invite_admin"], n.prototype.initialize = function (t) {
                return this.model = new Juicer.Models.EnterpriseUsers({
                    slug: t.slug
                }), this.model.fetch({
                    success: function (t) {
                        return function () {
                            return t.render()
                        }
                    }(this),
                    error: function () {
                        return alert("uh oh something went wrong")
                    }
                })
            }, n.prototype.render = function () {
                return this.$el.html(this.template({
                    model: this.model
                })), this.renderAdmins(), this.renderUsers()
            }, n.prototype.renderAdmins = function () {
                var t;
                return t = [], _u.each(this.model.get("admins").models, function (e) {
                    return function (n) {
                        return t.push(new Juicer.Views.EnterpriseAdmin({
                            model: n,
                            account: e.model
                        }).render())
                    }
                }(this)), this.$(".enterprise-admins").html(t)
            }, n.prototype.renderUsers = function () {
                var t;
                return t = [], _u.each(this.model.get("users").models, function (e) {
                    return function (n) {
                        return t.push(new Juicer.Views.EnterpriseUser({
                            model: n,
                            account: e.model
                        }).render())
                    }
                }(this)), this.$(".enterprise-users").html(t)
            }, n.prototype.events = {
                "click a.new-enterprise-admin": "openNewAdminOverlay"
            }, n.prototype.openNewAdminOverlay = function (t) {
                var e;
                return t.preventDefault(), this.csrf = $('meta[name="csrf-token"]').attr("content"), e = new Juicer.Views.Overlay({
                    content: this.inviteAdminForm({
                        model: this.model,
                        csrf: this.csrf
                    }),
                    width: "35%"
                }), e.render()
            }, n
        }(JuicerBackbone.View), Juicer.Views.EnterpriseAdmin = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["enterprise/admin"], n.prototype.tagName = "li", n.prototype.className = "enterprise-user", n.prototype.initialize = function (t) {
                return this.account = t.account
            }, n.prototype.render = function () {
                return this.$el.html(this.template({
                    model: this.model,
                    account: this.account
                }))
            }, n
        }(JuicerBackbone.View), Juicer.Views.EnterpriseUser = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["enterprise/user"], n.prototype.tagName = "li", n.prototype.className = "bg-white border mb-25", n.prototype.initialize = function (t) {
                return this.account = t.account
            }, n.prototype.render = function () {
                return this.$el.html(this.template({
                    model: this.model,
                    account: this.account
                }))
            }, n.prototype.events = {
                "click .delete-assignment": "deleteAssignment"
            }, n.prototype.deleteAssignment = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target).parents(".enterprise-user-assignment"), Juicer.Helpers.confirm("Are you sure you want to remote this user from this feed?") ? (e = new Juicer.Models.Assignment({
                    id: $(t.target).data("id")
                }), e.destroy({
                    success: function (t) {
                        return function () {
                            return n.remove()
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong!")
                    }
                })) : void 0
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.EnterpriseWhiteLabel = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["enterprise/white_label"], n.prototype.initialize = function (t) {
                return this.model = new Juicer.Models.Enterprise({
                    slug: t.slug
                }), this.model.fetch({
                    success: function (t) {
                        return function () {
                            return t.render()
                        }
                    }(this),
                    error: function () {
                        return alert("uh oh something went wrong")
                    }
                })
            }, n.prototype.render = function () {
                return this.$el.html(this.template({
                    model: this.model
                }))
            }, n.prototype.events = {
                "submit .white-label-url": "updateAccount"
            }, n.prototype.updateAccount = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target), n.find("input[type=submit]").attr("disabled", "disabled").val("Loading..."), e = JuicerBackbone.Syphon.serialize(n), this.model.set(e), this.model.save(null, {
                    success: function (t) {
                        return function () {
                            return t.render()
                        }
                    }(this)
                })
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Errors = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.errors, n.prototype.initialize = function (t) {
                var e, n, r;
                try {
                    this.errors = $.parseJSON(t.errors.responseText).errors
                } catch (i) {
                    n = i, r = t && t.errors && t.errors.statusText || "", e = r.match(/(timeout|unavailable)/i) ? 'The request timed out. Please try again by pressing "Create Source" below.' : "An unspecified error occurred.", this.errors = {
                        errorMessage: [e]
                    }
                }
                return this.$(".errors, .j-loading, .please-wait").remove(), this.$("input[type=submit]").show(), this.$el.prepend(this.template({
                    errors: this.errors
                }))
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty,
            r = [].indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        Juicer.Views.Feed = function (n) {
            function i() {
                return this.reRender = t(this.reRender, this), this.stopVideo = t(this.stopVideo, this), i.__super__.constructor.apply(this, arguments)
            }
            return e(i, n), i.prototype.template = JST.feed, i.prototype.referral = JST["partials/_referral"], i.prototype.loading = JST["partials/_loading"], i.prototype.trackedPlans = ["large", "enterprise", "campaign", "custom"], i.prototype.permittedOptions = ["feedId", "gutter", "per", "page", "pages", "overlay", "interval", "filter", "startingAt", "endingAt", "search", "truncate", "equal", "style", "after", "columns"], i.prototype.initialize = function (t) {
                return this.userOptions = _u.pick(this.$el.data(), this.permittedOptions), this.userOptions = this.setDefaultOptions(this.userOptions), this.showLoader(!1, !0), this.model = t.model || this.newModel(), this.admin = t.admin || !1, this.tracked = !1, this.model.on("new-posts", this.reRender), this.model.on("showLoader", function (t) {
                    return function () {
                        return t.showLoader(!0)
                    }
                }(this))
            }, i.prototype.setDefaultOptions = function (t) {
                return t.slug = t.feedId, t.css = t.style, t.per || (t.per = 100), t.page || (t.page = 1), null != t.overlay && (t.overlay = !!t.overlay), t
            }, i.prototype.newModel = function () {
                var t;
                return t = ["slug", "per", "page", "filter", "startingAt", "endingAt", "search", "css", "truncate"], new Juicer.Models.Feed(_u.pick(this.userOptions, t))
            }, i.prototype.events = function () {
                return {
                    "click li.feed-item": "triggerEvent",
                    "click ul.j-filters li": "filterFeed",
                    "click ul.j-display-filters li": "filterFeed",
                    "click .j-paginate": "appendNextPage"
                }
            }, i.prototype.render = function () {
                return null != this.model.get("posts") ? this.renderFeed() : this.model.fetch({
                    success: function (t) {
                        return function () {
                            return t.renderFeed()
                        }
                    }(this),
                    error: function (t) {
                        return function () {
                            return console.log("Juicer Problem")
                        }
                    }(this)
                }), this
            }, i.prototype.renderFeed = function () {
                return this.hideLoader(), this.setUserOptionsFromModel(), this.model.paid() || this.addJuicerAds(), this.setDimensions(), this.determineBrowser(), this.model.widget() ? this.renderWidget() : this.model.slider() ? this.renderSlider() : this.model.livingWall() ? this.renderLivingWall() : this.renderFeedList(), this.setClass(), this.model.hasInterval() || this.handleBrokenImages(), this.$el.addClass("loaded"), this.shouldTrack() && this.trackPageView(), this.runAfter("load"), this
            }, i.prototype.setUserOptionsFromModel = function () {
                return _u.each(this.modelAttrs, function (t) {
                    return function (e) {
                        return null == t.userOptions[e] && 0 !== t.userOptions[e] ? t.userOptions[e] = t.model.get(e) : void 0
                    }
                }(this)), null == this.userOptions.gutter && (this.userOptions.gutter = this.defaultGutter()), this.userOptions
            }, i.prototype.modelAttrs = ["columns", "interval", "overlay"], i.prototype.defaultGutter = function () {
                return this.noGutter() ? 0 : 20
            }, i.prototype.noGutter = function () {
                return _u.contains(["image-grid", "hip", "living-wall"], this.model.get("css"))
            }, i.prototype.determineBrowser = function () {
                var t, e;
                return t = navigator.userAgent.match(/MSIE|Trident|Edge/) ? "j-ie" : "j-modern", e = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i) ? "j-mobile" : "j-desktop", this.$el.addClass(t).addClass(e)
            }, i.prototype.runAfter = function (t) {
                return null == t && (t = "load"), this.afterFunction = new Function("event", this.userOptions.after), this.afterFunction(t)
            }, i.prototype.showLoader = function (t, e) {
                return null == t && (t = !1), null == e && (e = !1), this.$el.append(this.loading({
                    container: t,
                    wrapper: e
                }))
            }, i.prototype.hideLoader = function () {
                return this.$(".j-loading-container, .j-loading-wrapper, .j-loading").remove()
            }, i.prototype.renderWidget = function () {
                return this.widget = new Juicer.Views.Widget(this.feedOptions())
            }, i.prototype.renderSlider = function () {
                return this.handleReferral(), this.slider = new Juicer.Views.Slider(this.feedOptions()).render(), this.slider.on("slide", function (t) {
                    return function () {
                        return t.stopCurrentlyPlaying()
                    }
                }(this))
            }, i.prototype.renderLivingWall = function () {
                return this.livingWall = new Juicer.Views.LivingWall(this.feedOptions()).render(), this.handleReferral()
            }, i.prototype.feedOptions = function () {
                return {
                    el: this.el,
                    model: this.model,
                    admin: this.admin,
                    interval: this.userOptions.interval,
                    columns: this.userOptions.columns,
                    gutter: this.userOptions.gutter,
                    equal: this.userOptions.equal
                }
            }, i.prototype.renderFeedList = function () {
                return this.$el.append(this.template({
                    feed: this.model,
                    admin: this.admin,
                    filter: this.currentFilter()
                })), this.handleReferral(), this.infiniteScroll = new Juicer.Views.InfiniteScroll({
                    container: this.$el,
                    model: this.model,
                    admin: this.admin,
                    pages: this.userOptions.pages,
                    template: JST.infinite_scroll
                }), this.model.isGrid() && this.setupGrid(), this.model.classic() && this.setGutterOnClassic(), this.infiniteScroll.on("paginate", function (t) {
                    return function () {
                        return t.runAfter("paginate"), null != t.lazyLoad && t.lazyLoad.checkImages(), t.handleBrokenImages()
                    }
                }(this))
            }, i.prototype.handleBrokenImages = function () {
                return new Juicer.Views.BrokenImage({
                    el: this.el,
                    model: this.model
                })
            }, i.prototype.currentFilter = function () {
                return null != this.model && null != this.model.filter ? this.model.filter : this.userOptions.filter
            }, i.prototype.setDimensions = function () {
                return this.$el.removeAttr("style"), this.dimensions["max-width"] = this.$el.data("width") || this.model.get("width") || this.model.defaultHeight(), this.dimensions["max-height"] = this.$el.data("height") || this.model.get("height") || this.model.defaultWidth(), this.model.slider() ? void 0 : this.$el.css(this.dimensions)
            }, i.prototype.dimensions = {
                "max-width": null,
                "max-height": null
            }, i.prototype.addJuicerAds = function () {
                var t, e;
                return t = this.model.get("posts").length, e = Math.floor(t / 10), e > 0 ? _u(e).times(function (t) {
                    return function (e) {
                        var n, r;
                        return n = 10 * (e + 1), r = new Juicer.Models.JuicerAd, t.model.get("posts").add(r, {
                            at: n
                        })
                    }
                }(this)) : void 0
            }, i.prototype.setupGrid = function () {
                var t, e;
                return e = Math.floor(this.$el.outerWidth() / this.userOptions.columns), t = window.devicePixelRatio > 2 ? 225 : 200, t > e && (e = t), this.$el.gridalicious({
                    animate: !0,
                    selector: ".feed-item",
                    width: e,
                    gutter: this.userOptions.gutter,
                    columns: this.userOptions.columns,
                    animationOptions: {
                        queue: !0,
                        speed: 100,
                        duration: 300,
                        complete: function (t) {
                            return function () {
                                return null == t.infiniteScroll ? !0 : t.infiniteScroll.shouldShowLoadMore() ? void 0 : t.infiniteScroll.removeLoadMore()
                            }
                        }(this)
                    }
                }), this.model.get("lazy_load") ? this.lazyLoad = new Juicer.Views.LazyLoad({
                    model: this.model,
                    view: this
                }) : void 0
            }, i.prototype.setGutterOnClassic = function () {
                var t, e;
                return t = "2%", null == this.userOptions.gutter && (e = t), this.$(".feed-item").css("margin-bottom", e)
            }, i.prototype.appendNextPage = function (t) {
                return null == t && (t = null), t && t.preventDefault(), this.$(".j-paginate").replaceWith(this.loading({
                    inFeed: !0
                })), this.infiniteScroll.nextPage()
            }, i.prototype.setClass = function () {
                return this.$el.removeClass(Juicer.Constants.FEED_CLASSES.join(" ")), this.$el.removeClass(this.cssClasses), this.$el.addClass(this.model.cssClass()), this.model.get("photos") ? this.$el.addClass("photos-only") : void 0
            }, i.prototype.cssClasses = "photo photos-only juicer-widget gridalicious slick-initialized slick-slider modern ie colored-icons hover-images", i.prototype.handleReferral = function () {
                return this.model.paid() || this.admin || this.$el.find("h1.referral").length > 0 || this.$el.prepend(this.referral()), this.model.paid() && this.$el.find("h1.referral").remove(), this.$el.find("a[href*='www.juicer.io']").attr("href", "https://www.juicer.io?referrer=" + this.model.get("slug"))
            }, i.prototype.trackPageView = function () {
                var t;
                return t = new Juicer.Models.PageView({
                    feed_id: this.model.get("id"),
                    url: this.currentUrl()
                }), t.save(), this.tracked = !0
            }, i.prototype.onJuicerDomain = function () {
                return window.location.href.match("/iframe") ? !1 : _u.contains(["www.juicer.io", "localhost:3000"], window.location.host)
            }, i.prototype.shouldTrack = function () {
                var t;
                return !this.onJuicerDomain() && !this.tracked && (t = this.model.get("plan"), r.call(this.trackedPlans, t) >= 0)
            }, i.prototype.currentUrl = function () {
                return document.URL
            }, i.prototype.triggerEvent = function (t) {
                var e, n, r;
                if (r = jQuery(t.target), this.onJuicerDomain() || this.trackClick(r), r.hasClass("delete")) return t.preventDefault(), this.deletePost(r);
                if (r.hasClass("sticky")) return t.preventDefault(), this.toggleSticky(r, "stick");
                if (r.hasClass("unstick")) return t.preventDefault(), this.toggleSticky(r, "un-stick");
                if (r.hasClass("edit")) return new Juicer.Views.PostEdit({
                    id: r.parents("ul.actions").data("id"),
                    model: this.model
                }).render();
                if (r.hasClass("j-image") && r.parents("li.j-video").length > 0 && !this.model.get("video_overlay")) return t.preventDefault(), this.model.hasInterval() && this.userOptions.overlay ? (this.stopCurrentlyPlaying(), this.openOverlay({
                    target: r
                })) : this.playVideo(r, r.parents("li.j-video"));
                if (r.hasClass("j-gallery-arrow")) return t.preventDefault(), new Juicer.Views.Gallery({
                    target: r,
                    el: this.el,
                    model: this.model
                });
                if (r.parents(".j-twitter-intents").length > 0) return t.preventDefault(), this.handleTwitterIntent(r);
                if (r.parents(".feed-item.j-twitter").length > 0) {
                    if (!(r.is("a") || r.parents("a").length > 0)) return e = r.parents(".feed-item").data("id"), n = this.model.get("posts").findWhere({
                        id: e
                    }), window.open(n.link(), "_blank")
                } else if (this.userOptions.overlay && !r.hasClass(".feed-item.juicer") && !r.parents(".feed-item.juicer").length > 0 && !r.parents(".feed-item.j-twitter").length > 0) return t.preventDefault(), this.stopCurrentlyPlaying(), this.openOverlay({
                    target: r
                })
            }, i.prototype.trackClick = function (t) {
                var e;
                return t = t.is("li.feed-item") ? t : t.parents("li.feed-item"), e = new Juicer.Models.Click({
                    feed_id: this.model.get("id"),
                    post_id: t.data("id")
                }), e.save()
            }, i.prototype.openOverlay = function (t) {
                return this.postOverlay = new Juicer.Views.PostOverlay({
                    target: t.target,
                    model: this.model
                }), this.postOverlay.on("render", function (t) {
                    return function () {
                        return t.runAfter("overlay")
                    }
                }(this)), this.postOverlay.render()
            }, i.prototype.deletePost = function (t) {
                var e;
                return Juicer.Helpers.confirm("Are you sure you want to delete this post?") ? (t = t.parents("ul.actions"), e = new Juicer.Models.Post({
                    id: t.data("id")
                }), t.parents(".feed-item").remove(), e.destroy()) : !1
            }, i.prototype.toggleSticky = function (t, e) {
                var n, r;
                return null == e && (e = "stick"), Juicer.Helpers.confirm("Are you sure you want to " + e + " this post?") ? (t = t.parents("ul.actions"), r = new Juicer.Models.Post({
                    id: t.data("id")
                }), n = {
                    success: function (t) {
                        return function (e, n) {
                            return t.model.set(e, {
                                parse: !0
                            }), t.model.trigger("action")
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong.")
                    }
                }, "stick" === e ? r.stick(n) : r.unstick(n)) : !1
            }, i.prototype.playVideo = function (t, e) {
                if (t = t.is("a.j-image") ? t : t.parents("a.j-image"), t.hasClass("playing")) {
                    if (this.stopVideo(t), this.slider) return this.slider.play()
                } else if (this.stopCurrentlyPlaying(), this.slider && this.slider.stop(), t.addClass("playing"), t.html(this.embedVideo(t.data("external-id"), e, t.data("video-url"))), null != this.slider) return this.slider.$el.slick("slickPause")
            }, i.prototype.stopVideo = function (t) {
                return t.removeClass("playing"), t.html("<img src='" + t.data("image") + "' style='width:100%;display:block;' />"), null != this.slider ? this.slider.$el.slick("slickPlay") : void 0
            }, i.prototype.embedVideo = function (t, e, n) {
                var r;
                return null == n && (n = null), r = e.data("source"), "tumblr" === r && (n = this.parseTumblrVideo(e, n)), JST["partials/video/_" + r + "_embed"]({
                    id: t,
                    video: n
                })
            }, i.prototype.parseTumblrVideo = function (t, e) {
                var n, r;
                return n = jQuery(jQuery.parseHTML(e)), n.removeAttr("id class width height poster preload data-crt-video data-crt-options"), n.attr("src") && (r = n.attr("src") + "&autoplay=1", n.attr("src", r)), window.setTimeout(function (e) {
                    return function () {
                        return t.find("video")[0].play()
                    }
                }(this), 500), n[0].outerHTML
            }, i.prototype.stopCurrentlyPlaying = function () {
                return _u.each(this.$(".playing"), function (t) {
                    return function (e) {
                        return t.stopVideo(jQuery(e))
                    }
                }(this))
            }, i.prototype.handleTwitterIntent = function (t) {
                var e, n, r, i, s, o;
                return i = 550, e = 420, s = screen.height, o = screen.width, r = 0, n = Math.round(o / 2 - i / 2), s > e && (r = Math.round(s / 2 - e / 2)), window.open(t.attr("href"), "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + i + ",height=" + e + ",top=" + r + ",left=" + n)
            }, i.prototype.filterFeed = function (t) {
                var e, n, r;
                return t.preventDefault(), n = jQuery(t.target), e = n.attr("data-filter"), r = n.attr("class").replace("selected", "").replace(" ", ""), this.model.filter === n.data("filter") ? !1 : (this.model.filter = n.data("filter"), this.filter = n.data("filter"), this.model.resetPage(), this.model.fetch({
                    success: function (t) {
                        return function () {
                            return t.$el.empty(), t.infiniteScroll && t.infiniteScroll.close(), t.render(), t.delegateEvents()
                        }
                    }(this)
                }))
            }, i.prototype.close = function () {
                return this.unbindChildren(), this.$el.removeClass("j-initialized"), this.model.off("new-posts"), this.model.off("showLoader"), this
            }, i.prototype.unbindChildren = function () {
                return null != this.widget && this.widget.close(), null != this.livingWall && this.livingWall.close(), null != this.infiniteScroll && this.infiniteScroll.close(), null != this.lazyLoad && this.lazyLoad.close(), null != this.slider && this.slider.off("slide"), this.$el.empty().off(), this.stopListening()
            }, i.prototype.reRender = function () {
                return this.unbindChildren(), this.render(), this.delegateEvents()
            }, i
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Analytics = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["feeds/analytics"], n.prototype.overlay = JST["feeds/analytics_overlay"], n.prototype.events = {
                "click .launch": "openAnalyticsOverlay"
            }, n.prototype.openAnalyticsOverlay = function (t) {
                return t.preventDefault(), this.feed.get("analytics_allowed?") ? window.location = "/analytics/" + this.feed.get("slug") : new Juicer.Views.Overlay({
                    content: this.overlay({
                        feed: this.feed
                    }),
                    element: this.el
                }).render()
            }, n
        }(Juicer.Views.SubViewSlide)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Design = function (n) {
            function r() {
                return this.afterCssParsing = t(this.afterCssParsing, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST["feeds/design"], r.prototype.colorPicker = JST["feeds/color_picker"], r.prototype.cssOverlay = JST["feeds/css_overlay"], r.prototype.title = "Custom Design", r.prototype.events = {
                "click .feed-color": "showColorPicker",
                "change .color-input": "updateColor",
                "input .hex-input": "updateColor",
                "click .save-style": "saveStyle",
                "click .reset-style": "resetStyle",
                "click .customize-css": "openCustomCssOverlay",
                "submit .css-form": "submitCssForm"
            }, r.prototype.showColorPicker = function (t) {
                var e, n;
                return n = $(t.target), n.hasClass("feed-color") || (n = n.parents(".feed-color")), this.$(".color-fields").remove(), e = n.data("color"), n.after(this.colorPicker({
                    color: this.feed.getColor(e),
                    pattern: this.pattern,
                    colorAttr: e
                }))
            }, r.prototype.pattern = "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$", r.prototype.updateColor = function (t) {
                var e, n, r, i;
                return r = $(t.target), i = r.val(), i.match(this.pattern) ? (n = r.hasClass("hex-input") ? ".color-input" : ".hex-input", this.$(n).val(i), e = r.parents(".color-fields").data("color"), this.$(".color-example, .feed-color[data-color='" + e + "'] .color-picker-circle").css({
                    backgroundColor: i
                }), this.updateModel(e, i)) : !1
            }, r.prototype.updateModel = function (t, e) {
                return this.feed.updateColor(t, e)
            }, r.prototype.saveStyle = function (t) {
                return this.feed.save(null, {
                    success: function (e) {
                        return function () {
                            return e.notifySuccess($(t.target))
                        }
                    }(this),
                    error: function () {
                        return alert("Sorry your design didn't save properly. Please try again.")
                    }
                })
            }, r.prototype.resetStyle = function (t) {
                return confirm("Are you sure you want to set your feed custom styles back to default?") ? (this.feed.resetColors(), this.feed.save(null, {
                    success: function (t) {
                        return function () {
                            return t.feed.trigger("action"), t.render()
                        }
                    }(this)
                })) : void 0
            }, r.prototype.notifySuccess = function (t) {
                return t.text("Saved!"), setTimeout(function (e) {
                    return function () {
                        return t.text("Save Custom Style")
                    }
                }(this), 3e3)
            }, r.prototype.openCustomCssOverlay = function () {
                return this.overlay = new Juicer.Views.Overlay({
                    content: this.cssOverlay({
                        feed: this.feed
                    }),
                    element: this.el,
                    width: "50%"
                }), this.overlay.render()
            }, r.prototype.submitCssForm = function (t) {
                var e;
                return t.preventDefault(), e = $(t.target).serializeHash(), $.parsecss(e.css, this.afterCssParsing)
            }, r.prototype.afterCssParsing = function (t) {
                return this.feed.set("custom_css", this.stringifyCss(t)), this.feed.save(null, {
                    success: function (t) {
                        return function () {
                            return t.overlay.removeView(), t.feed.trigger("action")
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong")
                    }
                })
            }, r.prototype.stringifyCss = function (t) {
                var e;
                return e = "", _u.each(t, function (t, n) {
                    return e += n + " {\n", _u.each(t, function (t, n) {
                        return e += "  " + n + ": " + t + ";\n"
                    }), e += "}\n\n"
                }), e
            }, r
        }(Juicer.Views.SubView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Embed = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.embed = JST["feeds/embed_code"], n.prototype.template = JST["feeds/embed"], n.prototype.wordpress = JST["feeds/wordpress"], n.prototype.iframe = JST["feeds/iframe"], n.prototype.menu = JST["feeds/embed_menu"], n.prototype.title = "Embed in your Site", n.prototype.initialize = function () {
                return n.__super__.initialize.apply(this, arguments), this.currentlySelected = "site"
            }, n.prototype.embedOptions = [{
                value: "site",
                label: "Standard Website"
            }, {
                value: "wordpress",
                label: "Wordpress Site"
            }, {
                value: "iframe",
                label: "iframe"
            }], n.prototype.events = {
                "change .embed-menu": "switchEmbed",
                "focus textarea": "highlightField"
            }, n.prototype.switchEmbed = function (t) {
                return this.currentlySelected = $(t.target).val(), this.renderTemplate(), this.renderTitle()
            }, n.prototype.renderTemplate = function () {
                return this.renderContent(), this.renderMenu()
            }, n.prototype.renderContent = function () {
                switch (this.currentlySelected) {
                    case "wordpress":
                        return this.showWordPress();
                    case "iframe":
                        return this.showIframe();
                    default:
                        return this.showEmbed()
                }
            }, n.prototype.renderMenu = function () {
                return this.$el.prepend(this.menu({
                    embedOptions: this.embedOptions,
                    currentlySelected: this.currentlySelected
                }))
            }, n.prototype.javascriptPath = function () {
                return this.assetPath("embed.js")
            }, n.prototype.stylesheetPath = function () {
                return this.assetPath("embed.css")
            }, n.prototype.assetPath = function (t) {
                return Juicer.Constants.ASSET_PATH + "/" + t
            }, n.prototype.showEmbed = function () {
                var t;
                return t = this.embed({
                    feed: this.feed,
                    javascript: this.javascriptPath(),
                    stylesheet: this.stylesheetPath()
                }), t = t.replace(/<br \/>/g, "\n"), this.$el.html(this.template({
                    embed: t,
                    feed: this.feed
                }))
            }, n.prototype.showWordPress = function () {
                return this.$el.html(this.wordpress({
                    feed: this.feed
                }))
            }, n.prototype.showIframe = function () {
                var t, e, n;
                return t = this.feed.get("height") || 1e3, n = this.feed.get("width") || 1e3, 1e3 === t && this.feed.slider() && (t = 300), e = "<iframe src='https://www.juicer.io/api/feeds/" + this.feed.get("slug") + "/iframe' frameborder='0' width='" + n + "' height='" + t + "' style='display:block;margin:0 auto;'></iframe>", this.$el.html(this.iframe({
                    iframe: e
                }))
            }, n.prototype.highlightField = function (t) {
                var e;
                if (e !== $(t.target)) return e = $(t.target), setTimeout(function () {
                    return e.select()
                }, 50)
            }, n
        }(Juicer.Views.SubView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Features = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["feeds/features"], n
        }(Juicer.Views.SubViewSlide)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Hub = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["feeds/hub"], n
        }(Juicer.Views.SubViewSlide)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Moderate = function (n) {
            function r() {
                return this.pollForRevalidating = t(this.pollForRevalidating, this), this.revalidatingPoll = t(this.revalidatingPoll, this), this.closeOverlay = t(this.closeOverlay, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST["feeds/moderate"], r.prototype.revalidateOverlay = JST["feeds/revalidate_overlay"], r.prototype.title = "Moderate and Filter", r.prototype.initialize = function () {
                return r.__super__.initialize.apply(this, arguments), this.initialAttributes = _u.pick(this.feed.attributes, "lazy_load", "css")
            }, r.prototype.render = function () {
                return r.__super__.render.apply(this, arguments), new Juicer.Views.GooglePlaces({
                    el: this.el
                }), this.toggleFilterBlocker()
            }, r.prototype.events = {
                "submit .filters": "openOverlay",
                "click .moderate-confirm": "submitConfirmation",
                "click .moderated": "viewModeratedPosts",
                "click .public": "showPublic",
                "change input#queue": "toggleAndSubmit"
            }, r.prototype.showPublic = function (t) {
                return this.fetchFeed(), $(".moderation-nav .active").removeClass("active"), $(t.target).addClass("active")
            }, r.prototype.viewModeratedPosts = function (t) {
                return t.preventDefault(), $(window).unbind("scroll"), this.renderModeratedPosts()
            }, r.prototype.renderModeratedPosts = function () {
                return this.moderated = new Juicer.Models.Moderated({
                    slug: this.feed.get("slug")
                }), $(".moderation-nav .active").removeClass("active"), $(".moderation-nav .moderated").addClass("active"), this.moderated.fetch({
                    success: function (t) {
                        return function () {
                            return t.feedView && t.feedView.close(), new Juicer.Views.Moderated({
                                el: "ul.juicer-feed",
                                model: t.moderated
                            }).render()
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong pulling in your moderated posts.")
                    }
                })
            }, r.prototype.openOverlay = function (t) {
                var e;
                return t.preventDefault(), e = $(t.target).serializeHash().feed, this.overlay = new Juicer.Views.Overlay({
                    content: this.revalidateOverlay({
                        data: e
                    }),
                    element: this.el,
                    width: "50%"
                }), this.overlay.render()
            }, r.prototype.closeOverlay = function () {
                return this.overlay.removeView()
            }, r.prototype.submitConfirmation = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target), e = n.parents("form").serializeHash(), n.data("revalidate") ? (n.parents(".submits").html("<div class='j-loading'>Loading...</div><div class='mt-15 fifteen tc-gray'>Applying filter settings to existing posts. This can take a while. Please hold.</div>"), e.revalidating = !0, this.updateFilters(e, this.revalidatingPoll)) : (n.parents(".submits").html("<div class='j-loading'>Loading...</div>"), this.updateFilters(e, this.closeOverlay))
            }, r.prototype.updateFilters = function (t, e) {
                return this.feed.set(t), this.feed.save(null, {
                    success: function (t) {
                        return function () {
                            return e()
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong!")
                    }
                })
            }, r.prototype.revalidatingPoll = function () {
                return setTimeout(this.pollForRevalidating, 5e3)
            }, r.prototype.pollForRevalidating = function () {
                return this.feed.fetch({
                    success: function (t) {
                        return function () {
                            return t.feed.get("revalidating") ? t.revalidatingPoll() : (t.closeOverlay(), t.feed.trigger("action"))
                        }
                    }(this),
                    error: function () {
                        return alert("Something happened with polling. Please refresh page.")
                    }
                })
            }, r.prototype.toggleAndSubmit = function () {
                return this.toggleFilterBlocker(), this.queueChecked() ? this.$("form").trigger("submit") : void 0
            }, r.prototype.toggleFilterBlocker = function () {
                var t;
                return t = this.$(".filter-blocker"), this.queueChecked() ? t.show() : t.hide()
            }, r.prototype.queueChecked = function () {
                return this.$("#queue").is(":checked")
            }, r.prototype.close = function (t) {
                return null == t && (t = null), null != t && t.preventDefault(), $("li.selected").removeClass("selected"), r.__super__.close.apply(this, arguments), null != this.moderated ? this.fetchFeed() : void 0
            }, r.prototype.fetchFeed = function () {
                return this.feed.set(this.initialAttributes), this.feed.moderated ? window.location = "/feeds/" + this.feed.get("slug") : this.feed.fetch({
                    success: function (t) {
                        return function () {
                            return t.feed.trigger("action")
                        }
                    }(this)
                })
            }, r
        }(Juicer.Views.SubView)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Settings = function (n) {
            function r() {
                return this.reRender = t(this.reRender, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST["feeds/settings"], r.prototype.title = "Feed Settings", r.prototype.events = {
                "input input.columns": "updateColumns",
                "input input.interval": "updateInterval",
                "input input.width": "updateDimensions",
                "input input.height": "updateDimensions",
                "change input[type=checkbox]": "updateCheckbox",
                "change .css": "updateStyle",
                "change .order": "updateOrder",
                "change .filter_setting": "updateFilter",
                "focus input[type=number]": "highlightField"
            }, r.prototype.render = function () {
                return r.__super__.render.apply(this, arguments), this.toggleSettings(), this.feed.on("change:css", this.reRender)
            }, r.prototype.renderTemplate = function () {
                return this.$el.html(this.template({
                    feed: this.feed,
                    checkboxes: this.checkboxes
                }))
            }, r.prototype.reRender = function () {
                return this.$el.html(this.template({
                    feed: this.feed,
                    checkboxes: this.checkboxes
                })), this.renderTitle(), this.toggleSettings()
            }, r.prototype.toggleSettings = function () {
                return this.feed.hasInterval() && this.showInterval(), this.feed.hasInterval() || this.showFilter(), this.feed.hasColumns() ? this.showColumns() : void 0
            }, r.prototype.showInterval = function () {
                return this.$(".interval").show()
            }, r.prototype.showFilter = function () {
                return this.$(".filter_setting").show()
            }, r.prototype.showColumns = function () {
                return this.$(".columns").show()
            }, r.prototype.checkboxes = [{
                attr: "colored_icons",
                label: "Color in social network icons"
            }, {
                attr: "photos",
                label: "Only show posts with images"
            }, {
                attr: "videos",
                label: "Only show posts with videos"
            }, {
                attr: "lazy_load",
                label: "Lazy-load images",
                tooltip: "Won't load images until they are scrolled to on your site. This will save on bandwidth and decrease page load time. Only use if Juicer feed is below the fold."
            }, {
                attr: "overlay",
                label: "Open overlay on post click",
                tooltip: "With this box checked, when you click on a post it will open in an overlay view with the post larger and sharing icons. Otherwise it will link directly to the post."
            }, {
                attr: "video_overlay",
                label: "Only play videos in overlay",
                tooltip: "With this box checked, videos will open in an overlay and play. If not checked, the videos will play inline in the feed."
            }, {
                attr: "infinite_scroll",
                label: "Infinite Scroll",
                tooltip: 'If you scroll to the bottom of your Juicer feed, automatically load in more posts. If not, you\'ll see a "Load More" button instead'
            }, {
                attr: "poll",
                label: "Auto-Refresh for Live Events",
                tooltip: "Refreshes the feed automatically when new posts are pulled in. Great for using on a display at a live event."
            }], r.prototype.updateColumns = function (t) {
                var e, n;
                return n = $(t.target).val(), 0 < (e = n.length) && 2 > e ? (this.feed.set("columns", n), this.saveAndRender()) : void 0
            }, r.prototype.updateInterval = function (t) {
                var e, n;
                return n = $(t.target).val(), 3 < (e = n.length) && 10 > e || "0" === n ? (this.feed.set("interval", n), this.saveAndRender()) : void 0
            }, r.prototype.updateDimensions = function (t) {
                var e, n, r, i;
                return r = $(t.target), i = r.val(), e = r.attr("class"), 2 < (n = i.length) && 5 > n && i > 99 && 5001 > i || "" === i ? (this.feed.set(e, i), this.saveAndRender()) : void 0
            }, r.prototype.updateCheckbox = function (t) {
                var e, n;
                return e = $(t.target), n = e.is(":checked") ? "1" : "0", this.feed.set(e.data("attribute"), n), this.saveAndRender()
            }, r.prototype.updateStyle = function (t) {
                return this.feed.set("css", $(t.target).val()), this.saveAndRender()
            }, r.prototype.updateOrder = function (t) {
                return this.feed.set("order", $(t.target).val()), this.saveAndRender()
            }, r.prototype.updateFilter = function (t) {
                return this.feed.set("display_filter", $(t.target).val()), this.saveAndRender()
            }, r.prototype.saveAndRender = function () {
                return this.feed.trigger("showLoader"), this.feed.save(null, {
                    success: function (t) {
                        return function () {
                            return t.feed.trigger("action")
                        }
                    }(this)
                })
            }, r.prototype.highlightField = function (t) {
                var e;
                if (e !== $(t.target)) return e = $(t.target), setTimeout(function () {
                    return e.select()
                }, 50)
            }, r
        }(Juicer.Views.SubView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.SocialAccounts = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["feeds/social_accounts"], n.prototype.title = "Expired Social Accounts", n
        }(Juicer.Views.SubViewSlide)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Sources = function (n) {
            function r() {
                return this.reRender = t(this.reRender, this), this.sort = t(this.sort, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST["feeds/sources"], r.prototype.title = "Social Media Sources", r.prototype.render = function (t) {
                return r.__super__.render.apply(this, arguments), jQuery(".juicer-feed").hasClass("j-modern") ? sortable(".source-list", {
                    items: ".existing-source",
                    forcePlaceholderSize: !0
                })[0].addEventListener("sortupdate", this.sort) : void 0
            }, r.prototype.events = {
                "click .delete": "removeSource",
                "click .source-submenu-item": "openSourceOverlay",
                "click .rename": "openSourceEditOverlay",
                "click .moderate": "openSourceModerateOverlay",
                "submit #manual_post": "addPostManually",
                "submit .source-update": "updateSource",
                "click .existing-source": "toggleSubMenu",
                "click .js-add-source-submenu": "openSourceForm"
            }, r.prototype.removeSource = function (t) {
                var e, n, r;
                return t.preventDefault(), r = $(t.target), Juicer.Helpers.confirm("Are you sure you want to delete this source? This will PERMANENTLY delete your posts from your Juicer Feed. If you plan to re-add this source there is NO GUARANTEE we will be able to pull all your posts back in, so do at your own risk.") ? (e = r.data("id"), n = new Juicer.Models.Source({
                    id: e
                }), n.destroy({
                    success: function (t) {
                        return function (n, i) {
                            return t.feed.set(i, {
                                parse: !0
                            }), $(".existing-source[data-id='" + e + "']").remove(), r.parents(".source-submenu").remove(), t.feed.trigger("action")
                        }
                    }(this),
                    error: function () {
                        return alert("uh oh, something went wrong.")
                    }
                })) : void 0
            }, r.prototype.openSourceForm = function () {
                return this.trigger("openSourceForm", this)
            }, r.prototype.openSourceOverlay = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target), e = this.feed.get("sources").findWhere({
                    id: n.data("id")
                }), this.overlay = new Juicer.Views.Overlay({
                    content: JST["sources/" + n.data("template")]({
                        source: e,
                        feed: this.feed
                    }),
                    width: "50%",
                    element: this.el
                }), this.overlay.render()
            }, r.prototype.addPostManually = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target), n.find("ul.errors").remove(), e = n.serializeHash(), this.post = new Juicer.Models.Post(e), this.post.save(null, {
                    success: function (t) {
                        return function (e, n) {
                            return t.feed.set(n, {
                                parse: !0
                            }), t.reRender(), t.feed.trigger("action")
                        }
                    }(this),
                    error: function (t) {
                        return function (t, e) {
                            return new Juicer.Views.Errors({
                                el: n,
                                errors: e
                            })
                        }
                    }(this)
                })
            }, r.prototype.updateSource = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target), e = n.serializeHash(), this.source = new Juicer.Models.Source(e), this.source.save(null, {
                    success: function (t) {
                        return function (e, n) {
                            return t.feed.set(n, {
                                parse: !0
                            }), t.reRender(), t.feed.trigger("action")
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong.")
                    }
                })
            }, r.prototype.sort = function (t) {
                var e;
                return e = _u.map($(t.target).find(".existing-source"), function (t) {
                    return function (t) {
                        return $(t).data("id")
                    }
                }(this)), this.feed.set({
                    source_ids: e
                }), this.saveAndRender()
            }, r.prototype.reRender = function () {
                return this.parent.renderSidebar()
            }, r.prototype.toggleSubMenu = function (t) {
                var e;
                return e = $(t.target), e.hasClass("existing-source") || (e = e.parents(".existing-source")), e.next(".source-submenu").slideToggle(), e.toggleClass("open")
            }, r.prototype.saveAndRender = function () {
                return this.feed.trigger("showLoader"), this.feed.save(null, {
                    success: function (t) {
                        return function () {
                            return t.feed.set({
                                source_ids: null
                            }), t.feed.trigger("action")
                        }
                    }(this)
                })
            }, r
        }(Juicer.Views.SubView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Synced = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["feeds/synced"], n
        }(Juicer.Views.SubViewSlide)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.ChurnForm = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.namespace = "churn", n.prototype.createModel = function () {
                return new JuicerBackbone.Model
            }, n
        }(Juicer.Views.FormView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.ContactForm = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.namespace = "contact_message", n.prototype.createModel = function () {
                return new Juicer.Models.ContactMessageValidation
            }, n
        }(Juicer.Views.FormView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.FeedForm = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.namespace = "feed", n.prototype.createModel = function () {
                return new Juicer.Models.FeedValidation
            }, n
        }(Juicer.Views.FormView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.UserForm = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.namespace = "user", n.prototype.createModel = function () {
                return new Juicer.Models.UserValidation
            }, n
        }(Juicer.Views.FormView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.UserUpdateForm = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.namespace = "user", n.prototype.createModel = function () {
                var t;
                return t = {
                    email: $("#user_email").val(),
                    noPassword: $("#user_password").length < 1
                }, new Juicer.Models.UserUpdateValidation(t)
            }, n
        }(Juicer.Views.FormView)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Gallery = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function (t) {
                var e, n, r, i, s, o, a, l;
                return l = t.target, i = l.parents(".j-gallery"), e = i.data("id"), o = this.model.get("posts").findWhere({
                    id: e
                }), n = i.find(".j-image img"), a = n.attr("src"), s = o.get("additional_photos"), r = s.indexOf(a), -1 === r && (r = 0), l.hasClass("j-gallery-next") ? r += 1 : l.hasClass("j-gallery-previous") && (r -= 1), r >= s.length && (r = 0), 0 > r && (r = s.length - 1), n.attr("src", s[r])
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.GdprOverlay = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.gdpr_form, n.prototype.initialize = function () {
                return this.overlay = new Juicer.Views.Overlay({
                    content: this.template(),
                    element: this.el,
                    width: "50%"
                }), this.overlay.render()
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.GooglePlaces = function (n) {
            function r() {
                return this.setGeometry = t(this.setGeometry, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.initialize = function () {
                return $.getScript("https://maps.googleapis.com/maps/api/js?key=" + Juicer.Constants.GOOGLE_MAPS_KEY + "&libraries=places", function (t) {
                    return function () {
                        var e;
                        return e = t.$("input#location")[0], t.searchBox = new google.maps.places.SearchBox(e), t.searchBox.addListener("places_changed", t.setGeometry)
                    }
                }(this))
            }, r.prototype.setGeometry = function () {
                var t, e;
                return e = this.searchBox.getPlaces(), t = e[0], window.place = t, this.$("input#lat").val(t.geometry.location.lat()), this.$("input#lng").val(t.geometry.location.lng()), this.$("input[type=submit]").removeAttr("disabled")
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Home = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function () {
                return this.$("input").placeholder(), new Juicer.Views.HomeSlider({
                    el: ".js-whatIsJuicer"
                })
            }, n.prototype.events = {
                "click .learn-more": "scrollDown",
                "click .show": "renderExample",
                "change select": "reRenderFeed",
                "click .hide-feed": "hideFeed"
            }, n.prototype.scrollDown = function (t) {
                var e;
                return t.preventDefault(), e = this.$(".features").offset().top, $("html,body").animate({
                    scrollTop: e
                }, {
                    easing: "swing",
                    duration: 500
                })
            }, n.prototype.renderExample = function (t) {
                var e;
                return t.preventDefault(), e = $(t.target), e.html("Loading..."), this.model = new Juicer.Models.Feed({
                    slug: "juicer",
                    per: 16,
                    order: "random"
                }), this.model.fetch({
                    success: function (t) {
                        return function () {
                            return t.renderFeed(), $(".style-picker").css("display", "inline-block"), $(".hide-feed").show(), e.hide()
                        }
                    }(this),
                    error: function () {
                        return console.log("Example did not load!")
                    }
                })
            }, n.prototype.reRenderFeed = function (t) {
                var e, n;
                return this.$(".juicer-feed").remove(), this.$(".js-juicer-example .container-fluid").append("<ul class='juicer-feed' data-pages='1'></ul>"), n = $(t.target).val(), e = this.map(n), this.model.set(e), this.renderFeed()
            }, n.prototype.renderFeed = function () {
                return new Juicer.Views.Feed({
                    el: ".juicer-feed",
                    model: this.model
                }).render()
            }, n.prototype.hideFeed = function (t) {
                return t.preventDefault(), this.$(".juicer-feed").html(""), $(".style-picker").hide(), $(t.target).hide(), this.$(".show").show().html("Show me an example feed!")
            }, n.prototype.map = function (t) {
                switch (t) {
                    case "classic":
                        return {
                            css: "classic", photos: !1
                        };
                    case "white":
                        return {
                            css: "white", photos: !1
                        };
                    case "widget":
                        return {
                            css: "widget", photos: !1
                        };
                    case "colored-icons":
                        return {
                            css: "colored-icons", photos: !1
                        };
                    case "gray":
                        return {
                            css: "gray", photos: !1
                        };
                    case "slider":
                        return {
                            css: "slider", photos: !0
                        };
                    case "user":
                        return {
                            css: "user", photos: !1
                        };
                    case "hip":
                        return {
                            css: "hip", photos: !1
                        };
                    case "living-wall":
                        return {
                            css: "living-wall", photos: !1
                        };
                    case "modern":
                        return {
                            css: "modern", photos: !1
                        };
                    case "polaroid":
                        return {
                            css: "polaroid", photos: !1
                        };
                    case "night":
                        return {
                            css: "night", photos: !1
                        };
                    default:
                        return {
                            css: "image-grid", photos: !0
                        }
                }
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.HomeSlider = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.item = ".explainer-list-item", n.prototype.initialize = function () {
                return this.activate(this.$(this.item).first())
            }, n.prototype.events = {
                "mouseenter .explainer-list-item": "toggleSlider"
            }, n.prototype.toggleSlider = function (t) {
                var e;
                return e = $(t.target), e.is(this.item) || (e = e.parents(this.item)), e.hasClass("active") ? void 0 : this.activate(e)
            }, n.prototype.activate = function (t) {
                var e, n;
                return n = t.data("slide"), this.$(".explainer-list-item.active").removeClass("active"), t.addClass("active"), e = this.$(".slider-images ." + n), e.attr("src") ? this.slide(e) : this.loadImage(e)
            }, n.prototype.slide = function (t) {
                return this.$(".slider-images .active").removeClass("active"), t.addClass("active")
            }, n.prototype.loadImage = function (t) {
                var e, n;
                return e = new Image, n = t.data("src"), e.onload = function (e) {
                    return function () {
                        return t.attr("src", n), e.slide(t)
                    }
                }(this), e.src = n
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.InfiniteScroll = function (n) {
            function r() {
                return this.checkForPagination = t(this.checkForPagination, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.el = function () {
                return this.model.hasHeight() ? "ul.juicer-feed" : window
            }, r.prototype.initialize = function (t) {
                return this.template = t.template || JST["partials/_moderated_posts"], this.container = t.container, this.admin = t.admin || !1, this.posts = this.model.get("posts"), this.pages = _u.min([t.pages, 1e3]), this.stopped = this.pages < 2 || this.limitReached(), this.shouldInfinitelyScroll() ? this.$el.on("scroll", _u.debounce(this.checkForPagination, 300)) : void 0
            }, r.prototype.limitReached = function () {
                return this.lessThanLimit() || this.setPagesLimit()
            }, r.prototype.lessThanLimit = function () {
                return this.posts.length < this.posts.limit_value
            }, r.prototype.setPagesLimit = function () {
                return this.posts.current_page >= this.pages
            }, r.prototype.removeLoadMore = function () {
                return jQuery(".j-paginate").remove()
            }, r.prototype.checkForPagination = function () {
                return this.scrollPoint() > this.triggerPoint() && !this.stopped ? this.nextPage() : void 0
            }, r.prototype.shouldInfinitelyScroll = function () {
                return this.model.get("infinite_scroll") && !this.stopped
            }, r.prototype.shouldShowLoadMore = function () {
                return !this.model.get("infinite_scroll") && !this.stopped
            }, r.prototype.nextPage = function () {
                return this.stop(), this.model.nextPage(), this.model.fetch({
                    remove: !1,
                    success: function (t) {
                        return function (e, n) {
                            return t.appendPosts(n), t.trigger("paginate")
                        }
                    }(this),
                    error: function () {
                        return console.log("Juicer Infinite Scroll Problem.")
                    }
                })
            }, r.prototype.appendPosts = function (t) {
                var e, n;
                return jQuery(".j-loading, .j-loading-wrapper").remove(), n = new Juicer.Models.Feed(t, {
                    parse: !0
                }), this.posts = n.get("posts"), this.posts.length > 0 && (e = jQuery(this.template({
                    feed: n,
                    admin: this.admin
                }))), this.model.isGrid() ? this.container.gridalicious("append", e) : this.container.append(e), this.limitReached() || this.start(), this.shouldShowLoadMore() ? void 0 : this.removeLoadMore()
            }, r.prototype.scrollPoint = function () {
                return this.$el.scrollTop() + 2 * this.$el.outerHeight()
            }, r.prototype.triggerPoint = function () {
                return this.model.hasHeight() ? this.container.prop("scrollHeight") : this.container.offset().top + this.container.outerHeight()
            }, r.prototype.start = function () {
                return this.stopped = !1
            }, r.prototype.stop = function () {
                return this.stopped = !0
            }, r.prototype.close = function () {
                return this.$el.empty().off(), this.model.resetPage(), this.stopListening(), this
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.LazyLoad = function (n) {
            function r() {
                return this.checkImages = t(this.checkImages, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.el = window, r.prototype.initialize = function (t) {
                return this.view = t.view, this.$el.on("scroll", _u.debounce(this.checkImages, _u.random(250, 350))), this.model.hasHeight() && this.feed().on("scroll", _u.debounce(this.checkImages, _u.random(250, 350))), this.checkImages()
            }, r.prototype.checkImages = function () {
                return _u.each(this.view.$el.find("img[data-lazy]:not([src])"), function (t) {
                    return function (e) {
                        return e = jQuery(e), e.offset().top < t.scrollPoint(t.$el) && e.attr("src", e.data("lazy")), t.model.hasHeight() && e.offset().top < t.scrollPoint(t.feed()) ? e.attr("src", e.data("lazy")) : void 0
                    }
                }(this))
            }, r.prototype.scrollPoint = function (t) {
                return t.scrollTop() + t.height() + 500
            }, r.prototype.feed = function () {
                return jQuery("ul.juicer-feed")
            }, r.prototype.close = function () {
                return this.$el.off("scroll"), this.feed().off("scroll")
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.LivingWall = function (n) {
            function r() {
                return this.rotatePost = t(this.rotatePost, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST["partials/feeds/_wall"], r.prototype.customCss = JST["partials/_custom_styles"], r.prototype.initialize = function (t) {
                return this.interval = t.interval, this.admin = t.admin, this.columns = t.columns, this.gutter = t.gutter, this.equal = t.equal, 0 === this.interval && (this.interval = 5e7), this.defaultColumns = this.columns, this.gutter || (this.gutter = 0), this.setSizes(), jQuery(window).on("resize", _u.debounce(function (t) {
                    return function () {
                        return t.resize()
                    }
                }(this), 300))
            }, r.prototype.setSizes = function () {
                var t;
                return this.handleResponsiveColumns(), t = this.gutter * (2 * this.columns - 1), this.width = this.$el.width() - t, this.small = this.width / (2 * this.columns), this.$el.hasClass("j-ie") && (this.small = Math.floor(this.small - this.columns - 1)), this.large = 2 * this.small + this.gutter, this.retryTimes = 0
            }, r.prototype.handleResponsiveColumns = function () {
                return this.windowWidth = this.$el.width(), this.windowWidth < 400 ? this.columns = 1 : this.windowWidth < 600 ? this.columns = 2 : this.windowWidth < 900 ? this.columns = 3 : this.columns = this.defaultColumns
            }, r.prototype.render = function () {
                var t, e, n;
                return t = 8 * this.columns, this.setLargeCount(), this.smallCount = t - 4 * this.largeCount, this.total = this.largeCount + this.smallCount, n = _u.map(this.initialPosts(), function (t) {
                    return function (e) {
                        return t.renderPost(e)
                    }
                }(this)), e = _u.sample(n, this.largeCount), _u.each(e, function (t) {
                    return function (e) {
                        return e.addClass("j-large"), t.setDimensions(e)
                    }
                }(this)), _u.each(n, function (t) {
                    return function (e) {
                        return e.hasClass("j-large") ? !1 : (e.addClass("j-small"), t.setDimensions(e))
                    }
                }(this)), this.$el.append(this.customCss({
                    feed: this.model
                })), this.$el.append(n), this.$el.packery(this.packeryOptions()), this.handleInterval(), this.ensureProperSize(), this
            }, r.prototype.resize = function () {
                return this.$el.outerWidth() !== this.windowWidth ? this.reRender() : void 0
            }, r.prototype.reRender = function () {
                return this.setSizes(), this.render()
            }, r.prototype.setLargeCount = function () {
                return this.largeCount = this.equal ? 0 : this.columns % 2 !== 0 ? this.columns - 1 : this.columns
            }, r.prototype.packeryOptions = function () {
                return {
                    gutter: this.gutter,
                    itemSelector: ".feed-item",
                    resize: !1
                }
            }, r.prototype.handleInterval = function () {
                return document.hidden || this.startInterval(), jQuery(document).on("show", function (t) {
                    return function () {
                        return t.startInterval()
                    }
                }(this)), jQuery(document).on("hide", function (t) {
                    return function () {
                        return t.stopInterval()
                    }
                }(this))
            }, r.prototype.startInterval = function () {
                return null == this.id ? this.id = setInterval(this.rotatePost, this.interval) : void 0
            }, r.prototype.stopInterval = function () {
                return null != this.id && window.clearInterval(this.id), this.id = null
            }, r.prototype.ensureProperSize = function () {
                var t, e, n;
                return this.retryTimes > 9 ? !1 : (n = 3 * this.gutter, t = 4 * this.small, Math.floor(t) - n <= (e = this.$el.height()) && e <= Math.ceil(t) + n ? void 0 : (this.retryTimes++, this.close(), this.render()))
            }, r.prototype.renderPost = function (t) {
                return t = jQuery(this.template({
                    post: t,
                    admin: this.admin
                })), imagesLoaded(t[0], function () {
                    var e;
                    return e = t.find("img"), e.width() > e.height() ? e.addClass("landscape") : void 0
                }), t
            }, r.prototype.initialPosts = function () {
                var t;
                return t = this.total - 1, this.posts().slice(0, +t + 1 || 9e9)
            }, r.prototype.nextPost = function () {
                return this.total++, this.total >= this.posts().length && (this.model.pollingAllowed() && this.model.fetchNewPosts(!1), this.total = 0), this.posts()[this.total];
            }, r.prototype.posts = function () {
                var t;
                return t = this.model.get("posts").models, t = _u.select(t, function (t) {
                    return !t.twitter()
                })
            }, r.prototype.randomPost = function () {
                return jQuery(_u.sample(this.$(".feed-item").not(".j-sticky")))
            }, r.prototype.setDimensions = function (t) {
                var e;
                return e = t.hasClass("j-small") ? this.small : this.large, t.css({
                    width: this.size(t),
                    height: this.size(t)
                })
            }, r.prototype.rotatePost = function () {
                var t, e, n;
                return n = this.randomPost(), t = this.nextPost(), t.stickied() && (t = this.nextPost()), e = this.renderPost(t), this.cloneStyle(n, e)
            }, r.prototype.cloneStyle = function (t, e) {
                var n, r, i, s, o, a, l;
                return e.addClass(t.hasClass("j-small") ? "j-small" : "j-large"), this.setDimensions(e), l = this.size(t), r = {
                    top: l,
                    left: l
                }, n = this.merge(this.vectorMap(), r, "*"), i = a = t.position(), s = this.merge(a, n, "-"), o = this.merge(a, n, "+"), e.css(_u.extend(s, this.underCss)), t.css(this.underCss), t.before(e), window.setTimeout(function () {
                    return t.css(o), e.css(i), window.setTimeout(function () {
                        return t.remove(), e.css({
                            zIndex: 2
                        })
                    }, 500)
                }, 100)
            }, r.prototype.size = function (t) {
                return t.hasClass("j-small") ? this.small : this.large
            }, r.prototype.merge = function (t, e, n) {
                var r;
                return null == n && (n = "+"), r = {}, _u.each(_u.keys(t), function (i) {
                    return function (i) {
                        return "+" === n ? r[i] = t[i] + e[i] : "*" === n ? r[i] = t[i] * e[i] : "-" === n ? r[i] = t[i] - e[i] : void 0
                    }
                }(this)), r
            }, r.prototype.vectorMap = function () {
                var t, e;
                return e = _u.sample([-1, 1]), t = _u.shuffle([e, 0]), {
                    top: t[0],
                    left: t[1]
                }
            }, r.prototype.underCss = {
                zIndex: 1
            }, r.prototype.close = function () {
                return this.stopInterval(), this.$el.empty(), this.$el.packery("destroy"), jQuery(document).off("show hide"), this.stopListening(), this
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.LocationPicker = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.location_picker, n.prototype.initialize = function (t) {
                return this.$el.html(this.template(t)), this.$el.attr("id", "new_source")
            }, n.prototype.events = {
                "click li": "submitForm"
            }, n.prototype.submitForm = function (t) {
                var e;
                return e = $(t.target), this.$("input#term").val(e.data("id")), this.$("input#name").val(e.data("name")), this.trigger("submit", this.$el.serializeHash())
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Moderated = function (n) {
            function r() {
                return this.reRender = t(this.reRender, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST.moderated, r.prototype.loading = JST["partials/_loading"], r.prototype.urmNotEligible = JST["campaign/urm_not_eligible"], r.prototype.urmConnectSocial = JST["campaign/urm_connect_social"], r.prototype.upgradeToCampaign = JST["campaign/upgrade_to_campaign"], r.prototype.urmRequest = JST["campaign/urm_request"], r.prototype.events = {
                "click ul.j-filters li": "filterFeed",
                "click ul.j-display-filters li": "filterFeed",
                "click .approve": "restorePost",
                "click .reject": "rejectPost",
                "click .urm-request": "urmRequestPost",
                "click .j-paginate": "appendNextPage",
                "click .bulk-moderate": "bulkModerate",
                "click .urm-overlay-approve": "restoreFromUrm"
            }, r.prototype.render = function () {
                var t;
                return this.model.set({
                    lazy_load: !1,
                    css: "modern"
                }), this.$el.css({
                    maxWidth: "none",
                    maxHeight: "none"
                }), this.startInfiniteScroll(), this.$el.html(this.template({
                    feed: this.model,
                    menuItems: this.menuItems()
                })), t = Math.floor(this.$el.outerWidth() / 3), 200 > t && (t = 200), this.model.on("new-posts", this.reRender), this.model.get("posts").models.length < 1 ? !1 : (this.$el.removeClass(Juicer.Constants.FEED_CLASSES.join(" ")), this.$el.addClass("modern"), this.$el.gridalicious({
                    selector: ".feed-item",
                    width: t,
                    gutter: this.gutter
                }), null == this.infiniteScroll ? !0 : this.infiniteScroll.shouldShowLoadMore() ? void 0 : this.infiniteScroll.removeLoadMore())
            }, r.prototype.startInfiniteScroll = function () {
                return this.model.resetPage(), this.infiniteScroll = new Juicer.Views.InfiniteScroll({
                    container: this.$el,
                    model: this.model
                })
            }, r.prototype.appendNextPage = function (t) {
                return t.preventDefault(), this.$(".j-paginate").replaceWith(this.loading()), this.infiniteScroll.nextPage()
            }, r.prototype.restorePost = function (t) {
                var e;
                return e = this.hidePost(t, "Approving..."), e.restore()
            }, r.prototype.rejectPost = function (t) {
                var e;
                return e = this.hidePost(t, "Rejecting..."), e.reject()
            }, r.prototype.urmRequestPost = function (t) {
                var e, n;
                return e = this.hidePost(t, null, !1), n = $(t.target), this.model.campaign() ? e.urmEligible() ? e.urmSocialConnected(this.model) ? this.overlay = new Juicer.Views.UrmRequest({
                    el: this.el,
                    post: e,
                    feed: this.model
                }).render() : this.overlay = new Juicer.Views.Overlay({
                    content: this.urmConnectSocial({
                        post: e
                    }),
                    element: this.el,
                    width: "50%"
                }) : this.overlay = new Juicer.Views.Overlay({
                    content: this.urmNotEligible({
                        post: e
                    }),
                    element: this.el,
                    width: "50%"
                }) : this.overlay = new Juicer.Views.Overlay({
                    content: this.upgradeToCampaign({
                        post: e
                    }),
                    element: this.el,
                    width: "50%"
                }), this.overlay.render()
            }, r.prototype.restoreFromUrm = function (t) {
                var e;
                return e = this.hidePost(t, null, !1), e.restore(), this.overlay.removeView(), $("[data-id='" + e.get("id") + "']").parents(".feed-item").hide().remove()
            }, r.prototype.hidePost = function (t, e, n) {
                var r, i;
                return null == n && (n = !0), t.preventDefault(), null != e && $(t.target).html(e), i = $(t.target).parents(".actions"), r = this.fetchPost(i.data("id")), n && i.parents(".feed-item").hide().remove(), r
            }, r.prototype.fetchPost = function (t) {
                return this.model.get("posts").findWhere({
                    id: t
                })
            }, r.prototype.filterFeed = function (t) {
                var e, n, r;
                return t.preventDefault(), r = jQuery(t.target), n = r.attr("data-filter"), e = r.parents("ul"), this.model.filter = r.data("filter"), this.model.resetPage(), this.model.fetch({
                    success: function (t) {
                        return function () {
                            return t.reRender()
                        }
                    }(this)
                })
            }, r.prototype.bulkModerate = function (t) {
                var e, n;
                return e = null != $(t.target).data("approve"), n = e ? "approve" : "reject", Juicer.Helpers.confirm("Are you sure you want to " + n + " all of these posts?") ? (this.$(".bulk-moderate-nav").html("<div class='j-loading'>Loading...</div>"), this.model.bulkModerate(e, this.model.filter), setTimeout(function () {
                    return location.reload()
                }, 1e4)) : void 0
            }, r.prototype.unbindChildren = function () {
                return this.$el.empty().off(), this.infiniteScroll && this.infiniteScroll.close(), this.model.off("new-posts", this.reRender), this.stopListening()
            }, r.prototype.reRender = function () {
                return this.unbindChildren(), this.render(), this.delegateEvents()
            }, r.prototype.menuItems = function () {
                var t;
                return t = this.baseMenuItems, this.model.campaign() && (t = this.pendingMenu.concat(t)), t = this.allMenu.concat(t)
            }, r.prototype.baseMenuItems = [{
                filter: "Filter",
                title: "Text Filtered"
            }, {
                filter: "Profanity",
                title: "Profanity"
            }, {
                filter: "User",
                title: "Manually Deleted"
            }, {
                filter: "Queue",
                title: "Moderation Queue"
            }, {
                filter: "Similarity",
                title: "Duplicate Posts"
            }, {
                filter: "Rejected",
                title: "Rejected"
            }], r.prototype.pendingMenu = [{
                filter: "Pending",
                title: "URM Pending Permission"
            }], r.prototype.allMenu = [{
                filter: void 0,
                title: "All"
            }], r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Nav = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = {
                "click .menu": "toggleMenuOpen",
                "click .sidebar-toggle": "toggleSidebarOpen"
            }, n.prototype.toggleMenuOpen = function () {
                var t;
                return $(".main-container").removeClass("open-right").toggleClass("open-left"), t = $(".side-nav"), t.hasClass("opened") ? t.toggleClass("opened") : setTimeout(function () {
                    return t.toggleClass("opened")
                }, 200)
            }, n.prototype.toggleSidebarOpen = function (t) {
                return $(".main-container").removeClass("open-left").toggleClass("open-right")
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.NewFeed = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.new_feed, n.prototype.initialize = function () {
                return this.socialAccounts = new Juicer.Collections.SocialAccounts, this.socialAccounts.fetch({
                    success: function (t) {
                        return function () {
                            return t.sourceForm = new Juicer.Views.SourceForm({
                                el: t.el,
                                socialAccounts: t.socialAccounts
                            }), t.sourceForm.on("create", t.nextPage, t), t.render(), new Juicer.Views.OverlayReopener({
                                model: t.feed,
                                sourceForm: t.sourceForm
                            }).render(t.el)
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong while fetching your connected social accounts")
                    }
                })
            }, n.prototype.render = function () {
                return this.$el.html(this.template())
            }, n.prototype.nextPage = function (t) {
                return window.location = "/feeds/" + t.get("slug")
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Overlay = function (n) {
            function r() {
                return this.handleKeypress = t(this.handleKeypress, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.className = "j-overlay", r.prototype.template = JST.overlay, r.prototype.initialize = function (t) {
                return this.element = t.element || "body", this.content = t.content, this.width = t.width, this.close = t.close === !1 ? !1 : !0, jQuery(document).bind("keydown", this.handleKeypress)
            }, r.prototype.render = function () {
                return this.$el.html(this.template({
                    content: this.content,
                    close: this.close
                })), jQuery(this.element).children(".j-overlay") && jQuery(this.element).children(".j-overlay").remove(), jQuery(this.element).append(this.el), jQuery(".j-overlay-content").css({
                    width: this.width
                }).focus(), this.handleBrokenImages(), this
            }, r.prototype.events = function () {
                return {
                    "click .j-close": "closeOverlay",
                    click: "removeOverlay",
                    "click .j-navigate a": "triggerNavigate",
                    "click a.share": "openPopup",
                    "click .j-gallery-arrow": "gallery"
                }
            }, r.prototype.gallery = function (t) {
                return t.preventDefault(), this.trigger("trigger:gallery", jQuery(t.target))
            }, r.prototype.removeOverlay = function (t) {
                var e;
                return e = jQuery(t.target), e.hasClass("j-overlay-content") || e.parents(".j-overlay-content").length > 0 ? void 0 : this.removeView()
            }, r.prototype.closeOverlay = function (t) {
                return t.preventDefault(), this.removeView()
            }, r.prototype.removeView = function () {
                return this.trigger("close"), this.unbind(), this.remove(), this.$(".j-overlay").remove(), jQuery(this.element).find(".j-overlay").remove(), jQuery(document).unbind("keydown", this.handleKeypress)
            }, r.prototype.triggerNavigate = function (t) {
                return t.preventDefault(), this.trigger("trigger:navigate", jQuery(t.target).data("post-id"))
            }, r.prototype.openPopup = function (t) {
                var e;
                return t.preventDefault(), e = jQuery(t.target), window.open(e.attr("href"), "pop", "width=600, height=400, scrollbars=no")
            }, r.prototype.handleKeypress = function (t) {
                switch (t.keyCode) {
                    case 37:
                        return this.$(".j-previous").click();
                    case 39:
                        return this.$(".j-next").click();
                    case 27:
                        return this.closeOverlay(t)
                }
            }, r.prototype.handleBrokenImages = function () {
                return this.$(".j-poster img").on("error", function (t) {
                    return function (t) {
                        return console.log("hiding broken profile image in overlay."), $(t.target).hide()
                    }
                }(this)), this.$("img.j-content-image").on("error", function (t) {
                    return function (t) {
                        var e;
                        return e = jQuery(t.target).parents(".image"), e.length > 0 ? (console.log("Hiding broken image in overlay."), e.hide()) : void 0
                    }
                }(this)), this.$("video source").on("error", function (t) {
                    return function (t) {
                        var e;
                        return e = $(t.target).parents(".instagram-wrapper, .twitter-wrapper, .video-wrapper"), console.log("hiding broken video in overlay"), e.hide()
                    }
                }(this))
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.OverlayReopener = function (n) {
            function r() {
                return this.reRender = t(this.reRender, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.el = window, r.prototype.storageKey = "juicer_overlay_open", r.prototype.initialize = function (t) {
                return null == t && (t = {}), this.sourceForm = t.sourceForm, this.parent = t.parent, this.reopened = !1
            }, r.prototype.render = function (t) {
                return this.overlayShouldReopen() && (null == this.sourceForm && (this.sourceForm = new Juicer.Views.SourceForm({
                    el: t,
                    feed: this.model
                })), this.sourceForm.openOverlay(this.get()), null != this.parent && this.sourceForm.on("create", this.reRender), this.clear(), this.reopened = !0), this
            }, r.prototype.reRender = function () {
                return this.parent.renderSidebar()
            }, r.prototype.overlayShouldReopen = function () {
                return !!this.get()
            }, r.prototype.get = function () {
                var t;
                return t = this.el.localStorage.getItem(this.storageKey), JSON.parse(t)
            }, r.prototype.set = function (t) {
                var e;
                return e = JSON.stringify(t), this.el.localStorage.setItem(this.storageKey, e)
            }, r.prototype.clear = function () {
                return this.el.localStorage.setItem(this.storageKey, null)
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Payment = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function (t) {
                return this.toggleYear()
            }, n.prototype.events = {
                "change #year": "toggleYear"
            }, n.prototype.toggleYear = function () {
                var t, e, n, r, i;
                return r = this.$("#year"), n = $("[data-price]"), e = $(".simple-plan-monthly"), t = n.data("price"), r.is(":checked") ? (i = Math.ceil(12 * t - 12 * t * .1), n.html("$" + i), e.html("/ yr")) : (n.html("$" + t), e.html("/ mo"))
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.Plans = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.plan_change, n.prototype.events = {
                "click [data-plan]": "openNewPlanOverlay"
            }, n.prototype.openNewPlanOverlay = function (t) {
                var e;
                return t.preventDefault(), e = $(t.target), this.model = new Juicer.Models.Plan, this.model.fetch({
                    data: {
                        plan: e.data("plan")
                    },
                    success: function (t) {
                        return function () {
                            return t.csrf = $('meta[name="csrf-token"]').attr("content"), t.overlay = new Juicer.Views.Overlay({
                                content: t.template({
                                    model: t.model,
                                    csrf: t.csrf
                                }),
                                element: t.el,
                                width: "50%"
                            }), t.overlay.render()
                        }
                    }(this)
                })
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.PostEdit = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.post_edit, n.prototype.message = JST["partials/_message"], n.prototype.className = "j-overlay", n.prototype.initialize = function (t) {
                return this.setPost(t)
            }, n.prototype.setPost = function (t) {
                var e;
                return e = this.model.get("posts"), this.post = e.get(t.id)
            }, n.prototype.render = function () {
                return this.overlay = new Juicer.Views.Overlay({
                    content: this.template({
                        post: this.post,
                        feed: this.model
                    }),
                    width: "50%",
                    el: this.el
                }), this.overlay.render()
            }, n.prototype.events = function () {
                return {
                    "input textarea": "updatePreview",
                    "submit form": "savePost"
                }
            }, n.prototype.updatePreview = function (t) {
                return this.post.set("edit", $(t.target).val()), this.$(".message-container").html(this.message({
                    post: this.post
                }))
            }, n.prototype.savePost = function (t) {
                return t.preventDefault(), this.post.save(null, {
                    success: function (t) {
                        return function (e, n) {
                            return t.overlay.removeView(), t.model.set(n, {
                                parse: !0
                            }), t.model.trigger("action")
                        }
                    }(this),
                    error: function () {
                        return alert("Something went wrong. Please try again.")
                    }
                })
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.PostOverlay = function (n) {
            function r() {
                return this.cycleGallery = t(this.cycleGallery, this), this.navigateOverlay = t(this.navigateOverlay, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST.post_overlay, r.prototype.initialize = function (t) {
                return this.model = t.model, this.setPost(t.target)
            }, r.prototype.triggers = function () {
                return {
                    "click a.next": "navigateOverlay",
                    "click a.previous": "navigateOverlay"
                }
            }, r.prototype.setPost = function (t) {
                var e;
                return t = t.is("li.feed-item") ? t : t.parents("li.feed-item"), e = t.data("id"), this.assignPosts(e)
            }, r.prototype.assignPosts = function (t) {
                var e, n, r, i;
                return r = this.model.get("posts"), this.post = r.get(t), e = r.indexOf(this.post), n = e + 1 < r.length ? e + 1 : 0, i = e - 1 >= 0 ? e - 1 : r.length - 1, this.next = r.at(n), "Juicer" === this.next.sourceType() && (this.next = r.at(n + 1)), this.previous = r.at(i), "Juicer" === this.previous.sourceType() ? this.previous = r.at(i - 1) : void 0
            }, r.prototype.render = function () {
                return this.overlay = new Juicer.Views.Overlay({
                    element: "body",
                    content: this.template({
                        post: this.post,
                        next: this.next,
                        previous: this.previous,
                        feed: this.model
                    }),
                    width: "75%"
                }), this.overlay.on("trigger:navigate", this.navigateOverlay), this.overlay.on("trigger:gallery", this.cycleGallery), this.overlay.render(), this.trigger("render", this)
            }, r.prototype.navigateOverlay = function (t) {
                return this.overlay.removeView(), this.assignPosts(t), this.render()
            }, r.prototype.cycleGallery = function (t) {
                return new Juicer.Views.Gallery({
                    target: t,
                    el: this.el,
                    model: this.model
                })
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.SideNav = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = {
                "click li#collapseable": "toggleOtherFeeds"
            }, n.prototype.toggleOtherFeeds = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target), e = n.next(), e.is(":visible") ? (e.slideUp(), n.removeClass("selected")) : (e.slideDown(), n.addClass("selected"))
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Sidebar = function (n) {
            function r() {
                return this.openSourceFormFromSources = t(this.openSourceFormFromSources, this), this.openSubView = t(this.openSubView, this), this.openNewSource = t(this.openNewSource, this), this.reRenderCss = t(this.reRenderCss, this), this.reRender = t(this.reRender, this), this.render = t(this.render, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST.sidebar, r.prototype.nameEdit = JST["feeds/feed_name_edit"], r.prototype.newSource = JST["feeds/new_source"], r.prototype.initialize = function (t) {
                return this.renderedFromModerationUrl = t.renderedFromModerationUrl, this.renderedFromModerationUrl ? this.model = new Juicer.Models.Moderated({
                    slug: t.slug
                }) : this.model = new Juicer.Models.Feed({
                    slug: t.slug,
                    starting_at: t.starting_at,
                    admin: !0
                }), this.model.fetch({
                    success: function (t) {
                        return function () {
                            return t.hideLoader(), t.renderSidebar(), null != t.reopener && t.reopener.reopened ? void 0 : t.setupNewSources()
                        }
                    }(this),
                    error: function (t) {
                        return function () {
                            return t.hideLoader(), alert("Sorry something is going wrong.")
                        }
                    }(this)
                }), this.model.on("action", this.reRender, this), this.model.once("sync", this.initialRender, this), this.model.on("update:colors", this.reRenderCss, this)
            }, r.prototype.initialRender = function () {
                return this.render(!0)
            }, r.prototype.render = function (t) {
                var e;
                return null == t && (t = !1), e = this.model.get("posts"), 1 === e.current_page ? this.renderedFromModerationUrl && t ? this.renderModeration() : this.feed = new Juicer.Views.Feed({
                    el: ".juicer-feed",
                    model: this.model,
                    admin: !0
                }).render() : void 0
            }, r.prototype.reRender = function () {
                return null != this.feed && this.feed.close(), null != this.overlay && this.overlay.removeView(), null != this.sourcesView && this.sourcesView.reRender(), this.sourcesView = null, this.render()
            }, r.prototype.reRenderCss = function () {
                return jQuery(".juicer-custom-styles").length > 0 ? jQuery(".juicer-custom-styles").html("<style>" + this.model.customStyles() + "</style>") : jQuery(".juicer-feed").prepend("<div class='juicer-custom-styles'><style>" + this.model.customStyles() + "</style></div>")
            }, r.prototype.renderSidebar = function () {
                return this.$el.html(this.template({
                    feed: this.model
                })), this.reopener = new Juicer.Views.OverlayReopener({
                    model: this.model,
                    parent: this
                }).render(this.el), this.model.get("expired_social_accounts") ? void 0 : this.$("#social_accounts").hide()
            }, r.prototype.hideLoader = function () {
                return jQuery(".loading-overlay").fadeOut()
            }, r.prototype.setupNewSources = function () {
                return this.sourceForm = new Juicer.Views.SourceForm({
                    feed: this.model,
                    el: this.el,
                    socialAccounts: this.model.get("social_accounts")
                }), this.sourceForm.on("create", this.reRender)
            }, r.prototype.renderModeration = function () {
                return this.renderSubView(this.viewMap.moderate, this.$("#moderate")), this.subView ? this.subView.renderModeratedPosts() : void 0
            }, r.prototype.events = function () {
                return {
                    "click .feed-name-edit": "renderFeedNameEdit",
                    "submit .feed-name-edit-form": "updateFeedName",
                    "click .add-source": "openNewSource",
                    "click .menu-item": "openSubView",
                    "change #slug_update": "toggleSlugWarning"
                }
            }, r.prototype.openNewSource = function () {
                return this.overlay = new Juicer.Views.Overlay({
                    content: this.newSource(),
                    width: "85%",
                    element: this.el
                }), Juicer.overlay = this.overlay, this.overlay.render()
            }, r.prototype.openSubView = function (t) {
                var e, n;
                return t.preventDefault(), e = $(t.target), n = this.viewMap[e.attr("id")], this.renderSubView(n, e)
            }, r.prototype.renderSubView = function (t, e) {
                return this.subView && this.subView.close(), this.subView = new t({
                    feed: this.model,
                    target: e,
                    parent: this,
                    feedView: this.feed
                }), this.subView.on("openSourceForm", this.openSourceFormFromSources), this.subView.render()
            }, r.prototype.openSourceFormFromSources = function (t) {
                return this.sourcesView = t, this.openNewSource()
            }, r.prototype.viewMap = {
                analytics: Juicer.Views.Analytics,
                design: Juicer.Views.Design,
                embed: Juicer.Views.Embed,
                features: Juicer.Views.Features,
                filter: Juicer.Views.Filter,
                hub: Juicer.Views.Hub,
                moderate: Juicer.Views.Moderate,
                settings: Juicer.Views.Settings,
                social_accounts: Juicer.Views.SocialAccounts,
                sources: Juicer.Views.Sources,
                synced: Juicer.Views.Synced
            }, r.prototype.renderFeedNameEdit = function (t) {
                return t.preventDefault(), this.overlay = new Juicer.Views.Overlay({
                    content: this.nameEdit({
                        feed: this.model
                    }),
                    element: this.el,
                    width: "50%"
                }), this.overlay.render()
            }, r.prototype.updateFeedName = function (t) {
                var e;
                return t.preventDefault(), e = $(t.target).serializeHash(), this.model.set(e), this.model.save(null, {
                    success: function (t) {
                        return function (t, e) {
                            return window.location = "/feeds/" + e.slug
                        }
                    }(this)
                })
            }, r.prototype.toggleSlugWarning = function () {
                return this.$(".slug-warning").toggle()
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Slider = function (n) {
            function r() {
                return this.setFeedItemHeight = t(this.setFeedItemHeight, this), this.beforeChange = t(this.beforeChange, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST.feed, r.prototype.initialize = function (t) {
                return this.interval = t.interval, this.admin = t.admin, this.columns = t.columns, this.slidesToShow = this.columns
            }, r.prototype.render = function () {
                return this.$el.append(this.template({
                    feed: this.model,
                    admin: this.admin
                })), this.$el.css({
                    visibility: "hidden"
                }), this.$el.slick(this.sliderSettings()), this.$el.on("beforeChange", this.beforeChange), this.$el.on("afterChange", function (t) {
                    return function () {
                        return t.trigger("slide")
                    }
                }(this)), imagesLoaded(this.$el, this.setFeedItemHeight), this.$el.hasClass("j-ie") && this.setBackgroundImages(), jQuery(window).on("resize", _u.debounce(function (t) {
                    return function () {
                        return t.setFeedItemHeight()
                    }
                }(this), 300)), this
            }, r.prototype.beforeChange = function (t, e, n, r) {
                return 0 === r && this.model.pollingAllowed() ? this.model.fetchNewPosts(!1) : void 0
            }, r.prototype.sliderSettings = function () {
                return jQuery.extend(this.sliderDefaults(), {
                    responsive: this.breakpoints()
                })
            }, r.prototype.breakpoints = function () {
                return _u.map(this.breakpointArray, function (t) {
                    return function (e) {
                        return {
                            breakpoint: e[0],
                            settings: {
                                slidesToShow: _u.min([e[1], t.slidesToShow]),
                                slidesToScroll: _u.min([e[1], t.slidesToShow])
                            }
                        }
                    }
                }(this))
            }, r.prototype.breakpointArray = [
                [1700, 6],
                [1450, 5],
                [1024, 4],
                [960, 3],
                [786, 2],
                [480, 1]
            ], r.prototype.sliderDefaults = function () {
                return {
                    slidesToShow: this.slidesToShow,
                    autoplay: 0 !== this.interval,
                    autoplaySpeed: this.interval,
                    slidesToScroll: this.slidesToShow,
                    slide: "li",
                    adaptiveHeight: 0 === !this.$("a.j-images").length,
                    cssEase: "ease",
                    pauseOnHover: !0
                }
            }, r.prototype.setBackgroundImages = function () {
                return _u.each(this.$("[data-image]"), function (t) {
                    return function (t) {
                        var e;
                        return e = jQuery(t), e.css("background-image", "url('" + e.data("image") + "')")
                    }
                }(this))
            }, r.prototype.setFeedItemHeight = function (t) {
                var e;
                return _u.each(this.$("a.j-image img"), function (t) {
                    return function (t) {
                        return t.width > t.height ? jQuery(t).addClass("j-landscape") : void 0
                    }
                }(this)), e = this.model.get("height") || 300, this.$("a.j-image img, li.words, .slick-track").css({
                    height: e
                }), this.$el.css({
                    visibility: "visible"
                }), this.model.get("lazy_load") ? !1 : null == t ? !1 : _u.each(t.images, function (t) {
                    return function (t) {
                        var e;
                        return t.isLoaded ? void 0 : (t = $(t.img), e = t.parents(".feed-item"), console.log("Juicer: post with id " + e.data("id") + " has a broken image. Converting to a text post."), e.removeClass("image-post").removeClass("j-video").addClass("words"), t.parents(".j-image").remove())
                    }
                }(this))
            }, r.prototype.stop = function () {
                return this.$el.slick("stop")
            }, r.prototype.play = function () {
                return this.$el.slick("play")
            }, r
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.SourceForm = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST.source_form, n.prototype.pleaseWait = JST.please_wait, n.prototype.twitterUnavailableForSmallPlan = JST["sources/twitter_unavailable_for_small_plan"], n.prototype.initialize = function (t) {
                return this.feed = t.feed, this.feed ? this.currentPlanName = this.feed.get("plan") : (new Juicer.Models.Plan).fetch({
                    success: function (t) {
                        return function (e) {
                            return t.currentPlanName = e.get("plan")
                        }
                    }(this)
                }), this.socialAccounts = t.socialAccounts ? t.socialAccounts : this.feed.get("social_accounts"), this.rendered = !1, this.submitting = !1
            }, n.prototype.events = function () {
                return {
                    "click .add-a-hashtag li": "openHashtag",
                    "click .source": "handleOverlay",
                    "click .open-location-search": "renderLocationSearch",
                    "submit .source-form": "createSource",
                    "submit .location-search": "findLocation",
                    "click .source-type": "redrawOverlay",
                    "click a.social-account": "setOverlayStorage",
                    "click .search-result": "submitSearchResult"
                }
            }, n.prototype.handleOverlay = function (t, e) {
                var n, r;
                return null == e && (e = "username"), r = $(t.target), r.hasClass("j-social-icon") || (r = r.parents(".j-social-icon")), n = r.data("type"), this.openOverlay({
                    type: e,
                    source: n
                })
            }, n.prototype.renderLocationSearch = function () {
                return this.openOverlay({
                    type: "location_search",
                    source: this.source
                })
            }, n.prototype.openOverlay = function (t) {
                return this.type = t.type, this.source = t.source, "LinkedIn" === this.source ? juicer_cljs.linkedin.source_route.show({
                    feed_id: null != this.feed ? this.feed.get("id") : null
                }) : "Twitter" === this.source && "small" === this.currentPlanName ? new Juicer.Views.Overlay({
                    content: this.twitterUnavailableForSmallPlan(),
                    element: this.el,
                    width: "50%"
                }).render() : (this.model = new Juicer.Models.Source({
                    source: this.source
                }), this.renderOverlay())
            }, n.prototype.openHashtag = function (t) {
                return this.handleOverlay(t, "hashtag")
            }, n.prototype.drawTemplate = function () {
                return this.template({
                    source: this.model,
                    feed: this.feed,
                    type: this.type,
                    results: this.results,
                    socialAccounts: this.socialAccounts
                })
            }, n.prototype.renderOverlay = function () {
                return this.overlay = new Juicer.Views.Overlay({
                    content: this.drawTemplate(),
                    element: this.el,
                    width: "50%",
                    close: !1
                }), this.overlay.render(), "location_search" === this.type && this.initializeGooglePlaces(), this.resultsNeedFetching() ? this.fetchResults(this.type) : void 0
            }, n.prototype.resultsNeedFetching = function () {
                return _u.contains(["groups", "reviews"], this.type) && this.rendered !== this.type
            }, n.prototype.redrawOverlay = function (t) {
                return t.preventDefault(), this.type = $(t.target).data("type"), this.overlay.removeView(), this.renderOverlay()
            }, n.prototype.fetchResults = function (t) {
                return null == t && (t = "groups"), this.results = new Juicer.Collections.FacebookResults({
                    type: t
                }), this.results.fetch({
                    success: function (t) {
                        return function () {
                            return t.rendered = t.type, t.renderOverlay()
                        }
                    }(this),
                    error: function () {
                        return confirm("Something went wrong. Hit okay to go to the social accounts page and reset your Facebook token.") ? window.location = "/social-accounts" : void 0
                    }
                })
            }, n.prototype.initializeGooglePlaces = function () {
                return new Juicer.Views.GooglePlaces({
                    el: this.el
                })
            }, n.prototype.createSource = function (t) {
                var e;
                return t.preventDefault(), this.submitting ? void 0 : (this.submitting = !0, e = $(t.target), e.find("input[type=submit]").hide(), e.append("<div class='j-loading'>Loading...</div>"), this.timeout = setTimeout(function (t) {
                    return function () {
                        return e.append(t.pleaseWait())
                    }
                }(this), 5e3), e.find("ul.errors").remove(), this.submitSource(e.serializeHash()))
            }, n.prototype.submitSource = function (t) {
                return this.model.set(t), this.model.save(null, {
                    success: function (t) {
                        return function (e, n) {
                            return t.submitting = !1, t.feedObject().set(n, {
                                parse: !0
                            }), t.feed.trigger("action"), t.timeout && window.clearInterval(t.timeout), t.trigger("create", t.feed)
                        }
                    }(this),
                    error: function (t) {
                        return function (e, n) {
                            return t.submitting = !1, t.timeout && window.clearInterval(t.timeout), new Juicer.Views.Errors({
                                el: t.$("form"),
                                errors: n
                            }), t.$(".source-form-example").show()
                        }
                    }(this)
                })
            }, n.prototype.feedObject = function () {
                return this.feed || (this.feed = new Juicer.Models.Feed)
            }, n.prototype.submitSearchResult = function (t) {
                var e;
                return t.preventDefault(), e = $(t.target), this.$(".result-term").val(e.data("id")), this.$(".result-name").val(e.data("name")), e.parents("form").trigger("submit")
            }, n.prototype.findLocation = function (t) {
                var e, n;
                return t.preventDefault(), n = $(t.target), e = new Juicer.Models.Location(n.serializeHash()), e.save(null, {
                    success: function (t) {
                        return function (e, r) {
                            var i;
                            return i = t.feed ? t.feed.get("id") : void 0, t.picker = new Juicer.Views.LocationPicker({
                                el: t.$("form"),
                                locations: r,
                                feedId: i,
                                source: t.model
                            }), t.picker.on("submit", function (e) {
                                return n.append("<div class='j-loading'>Loading...</div>"), t.submitSource(e)
                            })
                        }
                    }(this),
                    error: function (t, e) {
                        return new Juicer.Views.Errors({
                            el: this.$("form"),
                            errors: e
                        })
                    }
                })
            }, n.prototype.setOverlayStorage = function (t) {
                var e;
                return t.preventDefault(), e = new Juicer.Views.OverlayReopener, e.set({
                    type: this.type,
                    source: this.source
                }), window.location = jQuery(t.target).attr("href")
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.UrmRequest = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.template = JST["campaign/urm_request"], n.prototype.events = {
                "submit .urm-request-form": "urmFormSubmit"
            }, n.prototype.initialize = function (t) {
                return this.post = t.post, this.feed = t.feed, this.socialAccount = this.post.urmSocialConnected(this.feed)
            }, n.prototype.render = function () {
                return this.overlay = new Juicer.Views.Overlay({
                    content: this.template({
                        post: this.post,
                        socialAccount: this.socialAccount,
                        feed: this.feed
                    }),
                    element: this.el,
                    width: "50%"
                }), this.overlay
            }, n.prototype.urmFormSubmit = function (t) {
                var e, n, r;
                return t.preventDefault(), r = $(t.target), r.find(".errors").remove(), r.find("input[type=submit]").remove(), r.append("<div class='j-loading'>Loading...</div>"), n = this.fetchPost(parseInt(r.find("input[name='post_id']").val())),
                    e = this.attributes(r, n), e.errors.length > 0 ? this.errors(e.errors, r) : n.urmRequest({
                        data: $.param(e),
                        success: function (t) {
                            return function () {
                                return t.overlay.removeView(), $("[data-id='" + n.get("id") + "'] .urm-request").removeClass("urm-request").html("Permission Pending"), t.stopListening(), t.$el.off("submit", ".urm-request-form")
                            }
                        }(this),
                        error: function (t) {
                            return function (e, n, i) {
                                return t.errors([e.responseText], r)
                            }
                        }(this)
                    })
            }, n.prototype.errors = function (t, e) {
                var n;
                return n = $("<ul class='errors tc-grapefruit twelve'></ul>"), _u.each(t, function (t) {
                    return function (t) {
                        return n.append("<li class='mb-5'>" + t + "</li>")
                    }
                }(this)), e.prepend(n), e.find(".j-loading").remove(), e.append("<input class='j-button' type='submit' value='Request Permission' />")
            }, n.prototype.attributes = function (t) {
                var e, n;
                return e = {}, n = t.find("textarea").val(), e.errors = this.validate(t), e.urm_message = n, e.urm_matcher = this.matcher(n)[0], e
            }, n.prototype.validate = function (t) {
                var e, n, r, i, s;
                return s = t.find("textarea"), i = s.val(), r = s.attr("maxlength"), e = [], i.length < 1 && e.push("Please include a message to the user asking for permission."), i.length > r && e.push("Please limit your message to #{maxLength} characters."), n = this.matcher(i), n.length < 1 && e.push("Please Include a hashtag in your message. The user will need to respond with this hashtag to grant permission."), n.length > 1 && e.push("Please only include a single hashtag in your message, so Juicer knows what hashtag to verify the user has granted permission."), e
            }, n.prototype.matcher = function (t) {
                var e;
                return e = t.match(/(^|\s)(#[a-z\d-]+)/gi), _u.map(e, function (t) {
                    return t.trim()
                })
            }, n.prototype.fetchPost = function (t) {
                return this.feed.get("posts").findWhere({
                    id: t
                })
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, n) {
                function r() {
                    this.constructor = t
                }
                for (var i in n) e.call(n, i) && (t[i] = n[i]);
                return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
            },
            e = {}.hasOwnProperty;
        Juicer.Views.UserAccount = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function () {
                return this.toggleDigest()
            }, n.prototype.events = {
                "change input[type=checkbox]": "toggleDigest"
            }, n.prototype.toggleDigest = function () {
                var t, e;
                return e = this.$("#user_digest"), t = this.$(".digest-label"), this.$("input[type=checkbox]").is(":checked") ? (e.removeAttr("disabled"), t.removeClass("disabled")) : (e.attr("disabled", "disabled"), t.addClass("disabled"), e.val("Never"))
            }, n
        }(JuicerBackbone.View)
    }.call(this),
    function () {
        var t = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            e = function (t, e) {
                function r() {
                    this.constructor = t
                }
                for (var i in e) n.call(e, i) && (t[i] = e[i]);
                return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        Juicer.Views.Widget = function (n) {
            function r() {
                return this.addPost = t(this.addPost, this), this.showNextPost = t(this.showNextPost, this), this.setPosts = t(this.setPosts, this), r.__super__.constructor.apply(this, arguments)
            }
            return e(r, n), r.prototype.template = JST.widget, r.prototype.card = JST["partials/_widget_card"], r.prototype.referral = JST["partials/_referral"], r.prototype.customCss = JST["partials/_custom_styles"], r.prototype.initialize = function (t) {
                return this.interval = t.interval, this.admin = t.admin, this.index = 0, this.setPosts(), this.render(), 5e3 !== this.model.get("interval") && 5e3 === this.interval && (this.interval = this.model.get("interval")), 0 === this.interval && (this.interval = 5e7), window.juicerWidget = this, this.id = setInterval(this.showNextPost, this.interval)
            }, r.prototype.setPosts = function () {
                return this.posts = this.model.get("posts").models
            }, r.prototype.render = function () {
                return this.$el.append(this.template({
                    first: this.posts[this.index],
                    second: this.posts[this.index + 1],
                    admin: this.admin
                })), this.container = this.$(".flip-container"), this.handleReferral(), this.$el.append(this.customCss({
                    feed: this.model
                }))
            }, r.prototype.showNextPost = function () {
                return this.container.toggleClass("flip"), setTimeout(this.addPost, 600), this.index++, this.index >= this.posts.length - 1 ? (this.model.pollingAllowed() && this.model.fetchNewPosts(!1), this.index = -1) : void 0
            }, r.prototype.addPost = function () {
                return this.element().html(this.card({
                    post: this.posts[this.index + 1],
                    admin: this.admin,
                    truncate: this.truncate
                }))
            }, r.prototype.element = function () {
                return this.container.hasClass("flip") ? this.$(".front") : this.$(".back")
            }, r.prototype.other = function () {
                return this.element().siblings()
            }, r.prototype.handleReferral = function () {
                return this.model.paid() || this.admin || this.$el.find("h1.referral").length > 0 || this.$el.append(this.referral()), this.model.paid() ? this.$el.find("h1.referral").remove() : void 0
            }, r.prototype.close = function () {
                return null != this.id && window.clearInterval(this.id), this.$el.empty().off(), this.stopListening(), this
            }, r
        }(JuicerBackbone.View)
    }.call(this), Juicer.Constants = {}, Juicer.Constants.API_ROOT = "//www.juicer.io", (navigator.userAgent.match(/MSIE 9/) || navigator.userAgent.match(/MSIE 8/) || "file:" === window.location.protocol) && (Juicer.Constants.API_ROOT = "https:" + Juicer.Constants.API_ROOT), Juicer.Constants.ASSET_PATH = "https://assets.juicer.io", Juicer.Constants.BASE_URL = "https://www.juicer.io", Juicer.Constants.CACHE_BUSTER = "i think this is now getting cached on cloudflare", Juicer.Constants.FACEBOOK_APP_ID = "731223346944897", Juicer.Constants.FEED_CLASSES = ["modern", "night", "polaroid", "image-grid", "widget", "slider", "hip", "living-wall"], Juicer.Constants.GOOGLE_MAPS_KEY = "AIzaSyBphQRyC2Tke2HTDXPMrxbYzuk5ZgP7XTo", Juicer.Constants.HELP_CENTER_URL = "https://help.juicer.io", Juicer.Constants.PAID_PLANS = ["medium", "large", "custom", "enterprise", "campaign", "archive"], Juicer.Constants.SOURCES_WHERE_POSTS_CAN_BE_ADDED_MANUALLY = ["Facebook", "Soundcloud", "Tumblr", "Twitter", "Vimeo", "YouTube"], Juicer.Constants.STRIPE_PUBLISHABLE_KEY = "pk_live_O4R3D1OryggCLZEsquEjTNBW";