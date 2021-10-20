// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []




    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa,
        ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: ba(a)
            }
        },
        fa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf)
        ha = Object.setPrototypeOf;
    else {
        var ia;
        a:
        {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = ha,
        na = function(a, b) {
            a.prototype = fa(b.prototype);
            a.prototype.constructor = a;
            if (ma)
                ma(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.wj = b.prototype
        },
        oa = this || self,
        pa = function(a) {
            return a
        };
    var ra = function() {},
        sa = function(a) {
            return "function" == typeof a
        },
        ta = function(a) {
            return "string" == typeof a
        },
        ua = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        va = Array.isArray,
        wa = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b)
                    return d;
            return -1
        },
        xa = function(a, b) {
            if (a && va(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c]))
                        return a[c]
        },
        ya = function(a, b) {
            if (!ua(a) || !ua(b) || a > b)
                a = 0,
                b = 2147483647;
            return Math.floor(Math.random() * (b -
            a + 1) + a)
        },
        Aa = function(a, b) {
            for (var c = new za, d = 0; d < a.length; d++)
                c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e]))
                    return !0;
            return !1
        },
        Da = function(a, b) {
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ea = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Fa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ia = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        La = function(a) {
            var b = [];
            if (va(a))
                for (var c =
                0; c < a.length; c++)
                    b.push(String(a[c]));
            return b
        },
        Oa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Pa = function() {
            return new Date(Date.now())
        },
        h = function() {
            return Pa().getTime()
        },
        za = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    za.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    za.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Qa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ra = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Sa = function(a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ta = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !0;
            return !1
        },
        Ua = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d]),
                c.push.apply(c, b[a[d]] || []);
            return c
        },
        Va = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
                d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Wa = /^\w{1,9}$/,
        Xa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Da(a, function(d, e) {
                Wa.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    var Ya,
        Za = function() {
            if (void 0 === Ya) {
                var a = null,
                    b = oa.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: pa,
                            createScript: pa,
                            createScriptURL: pa
                        })
                    } catch (c) {
                        oa.console && oa.console.error(c.message)
                    }
                    Ya = a
                } else
                    Ya = a
            }
            return Ya
        };
    var ab = function(a, b) {
        this.m = b === $a ? a : ""
    };
    ab.prototype.toString = function() {
        return this.m + ""
    };
    var $a = {},
        bb = function(a) {
            var b = Za(),
                c = b ? b.createScriptURL(a) : a;
            return new ab(c, $a)
        };
    var cb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var gb;
    a:
    {
        var hb = oa.navigator;
        if (hb) {
            var ib = hb.userAgent;
            if (ib) {
                gb = ib;
                break a
            }
        }
        gb = ""
    }function jb(a) {
        return -1 != gb.indexOf(a)
    }
    ;
    var kb = {},
        mb = function(a, b, c) {
            this.m = c === kb ? a : ""
        };
    mb.prototype.toString = function() {
        return this.m.toString()
    };
    var nb = function(a) {
            return a instanceof mb && a.constructor === mb ? a.m : "type_error:SafeHtml"
        },
        ob = function(a) {
            var b = Za(),
                c = b ? b.createHTML(a) : a;
            return new mb(c, null, kb)
        },
        pb = new mb(oa.trustedTypes && oa.trustedTypes.emptyHTML || "", 0, kb); /*

     SPDX-License-Identifier: Apache-2.0
    */



    function qb(a, b) {
        a.src = b instanceof ab && b.constructor === ab ? b.m : "type_error:TrustedResourceUrl";
        var c,
            d,
            e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    }
    ;
    var rb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        sb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var tb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = nb(pb);
        return !c.parentElement
    });
    var m = window,
        B = document,
        ub = navigator,
        vb = B.currentScript && B.currentScript.src,
        wb = function(a, b) {
            var c = m[a];
            m[a] = void 0 === c ? b : c;
            return m[a]
        },
        xb = function(a) {
            var b = B.getElementsByTagName("script")[0] || B.body || B.head;
            b.parentNode.insertBefore(a, b)
        },
        yb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        zb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Ab = function(a, b, c, d) {
            var e = B.createElement("script");
            d && Da(d, function(f, g) {
                f = f.toLowerCase();
                zb.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            qb(e, bb(a));
            yb(e, b);
            c && (e.onerror = c);
            xb(e);
            return e
        },
        Bb = function() {
            if (vb) {
                var a = vb.toLowerCase();
                if (0 === a.indexOf("https://"))
                    return 2;
                if (0 === a.indexOf("http://"))
                    return 3
            }
            return 1
        },
        Cb = function(a, b) {
            var c = B.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = B.body && B.body.lastChild || B.body || B.head;
            d.parentNode.insertBefore(c,
            d);
            yb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Db = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Eb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Fb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            m.setTimeout(a, 0)
        },
        Gb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
            null
        },
        Ib = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Jb = function(a) {
            var b = B.createElement("div"),
                c = ob("A<div>" + a + "</div>"),
                d = b;
            if (tb())
                for (; d.lastChild;)
                    d.removeChild(d.lastChild);
            d.innerHTML = nb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;)
                e.push(b.removeChild(b.firstChild));
            return e
        },
        Kb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++)
                d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()])
                    return f;
                f = f.parentElement
            }
            return null
        },
        Lb = function(a) {
            var b;
            try {
                b = ub.sendBeacon && ub.sendBeacon(a)
            } catch (c) {}
            b || Db(a)
        },
        Mb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Nb = function(a) {
            var b = B.featurePolicy;
            return b && sa(b.features) ? -1 !== b.features().indexOf(a) : !1
        },
        Ob = function() {
            return ub.userLanguage || ub.language
        }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */

    var Pb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Qb = function(a) {
            if (null == a)
                return String(a);
            var b = Pb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Rb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Sb = function(a) {
            if (!a || "object" != Qb(a) || a.nodeType || a == a.window)
                return !1;
            try {
                if (a.constructor && !Rb(a, "constructor") && !Rb(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            for (var b in a)
                ;
            return void 0 ===
                b || Rb(a, b)
        },
        H = function(a, b) {
            var c = b || ("array" == Qb(a) ? [] : {}),
                d;
            for (d in a)
                if (Rb(a, d)) {
                    var e = a[d];
                    "array" == Qb(e) ? ("array" != Qb(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : Sb(e) ? (Sb(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e
                }
            return c
        };
    var Tb = function(a) {
        if (void 0 === a || va(a) || Sb(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var Ub = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Ng: a("consent"),
            Og: a("consent_always_fire"),
            Re: a("convert_case_to"),
            Se: a("convert_false_to"),
            Te: a("convert_null_to"),
            Ue: a("convert_true_to"),
            Ve: a("convert_undefined_to"),
            gj: a("debug_mode_metadata"),
            jj: a("event_data_overrides"),
            lb: a("function"),
            Ch: a("instance_name"),
            Eh: a("live_only"),
            Fh: a("malware_disabled"),
            Gh: a("metadata"),
            kj: a("original_activity_id"),
            lj: a("original_vendor_template_id"),
            Kh: a("once_per_event"),
            Bf: a("once_per_load"),
            nj: a("priority_override"),
            oj: a("respected_consent_types"),
            Ff: a("setup_tags"),
            Hf: a("tag_id"),
            If: a("teardown_tags")
        }
    }();
    var Ac;
    var Bc = [],
        Cc = [],
        Dc = [],
        Ec = [],
        Fc = [],
        Gc = {},
        Hc,
        Ic,
        Jc,
        Kc = function(a, b) {
            var c = a["function"];
            if (!c)
                throw Error("Error: No function name given for function call.");
            var d = Gc[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_"))
                        d && b && b.Tf && b.Tf(a[f]),
                        e[void 0 !== d ? f : f.substr(4)] = a[f];
                    else if (f === Ub.Og.toString() && a[f]) {}
            d && b && b.Sf && (e.vtp_gtmCachedValues = b.Sf);
            return void 0 !== d ? d(e) : Ac(c, e, b)
        },
        Pc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a)
                a.hasOwnProperty(e) && (d[e] = Lc(a[e], b, c));
            return d
        },
        Lc = function(a, b, c) {
            if (va(a)) {
                var d;
                switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++)
                        d.push(Lc(a[e], b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f])
                        return;
                    var g = Bc[f];
                    if (!g || b.Be(g))
                        return;
                    c[f] = !0;
                    try {
                        var k = Pc(g, b, c);
                        k.vtp_gtmEventId = b.id;
                        d = Kc(k, b);
                        Jc && (d = Jc.Yh(d, k))
                    } catch (z) {
                        b.jg && b.jg(z, Number(f)),
                        d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var l = 1; l < a.length; l += 2)
                        d[Lc(a[l], b, c)] = Lc(a[l + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var n = !1, p = 1; p < a.length; p++) {
                        var r = Lc(a[p], b, c);
                        Ic && (n = n || r === Ic.Wc);
                        d.push(r)
                    }
                    return Ic && n ? Ic.bi(d) : d.join("");
                case "escape":
                    d = Lc(a[1], b, c);
                    if (Ic && va(a[1]) && "macro" === a[1][0] && Ic.yi(a))
                        return Ic.Ni(d);
                    d = String(d);
                    for (var u = 2; u < a.length; u++)
                        Vb[a[u]] && (d = Vb[a[u]](d));
                    return d;
                case "tag":
                    var t = a[1];
                    if (!Ec[t])
                        throw Error("Unable to resolve tag reference " +
                        t + ".");
                    return d = {
                        $f: a[2],
                        index: t
                    };
                case "zb":
                    var q = {
                        arg0: a[2],
                        arg1: a[3],
                        ignore_case: a[5]
                    };
                    q["function"] = a[1];
                    var v = Qc(q, b, c),
                        x = !!a[4];
                    return x || 2 !== v ? x !== (1 === v) : null;
                default:
                    throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Qc = function(a, b, c) {
            try {
                return Hc(Pc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Tc = function(a) {
            function b(u) {
                for (var t = 0; t < u.length; t++)
                    d[u[t]] = !0
            }
            for (var c = [], d = [], e = Rc(a), f = 0; f < Cc.length; f++) {
                var g = Cc[f],
                    k = Sc(g, e);
                if (k) {
                    for (var l = g.add || [], n = 0; n < l.length; n++)
                        c[l[n]] = !0;
                    b(g.block || [])
                } else
                    null === k && b(g.block || []);
            }
            for (var p = [], r = 0; r < Ec.length; r++)
                c[r] && !d[r] && (p[r] = !0);
            return p
        },
        Sc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e)
                    return !1;
                if (2 === e)
                    return null
            }
            for (var f =
                a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k)
                    return null;
                if (1 === k)
                    return !1
            }
            return !0
        },
        Rc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Qc(Dc[c], a));
                return b[c]
            }
        };
    var Uc = {
        Yh: function(a, b) {
            b[Ub.Re] && "string" === typeof a && (a = 1 == b[Ub.Re] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Ub.Te) && null === a && (a = b[Ub.Te]);
            b.hasOwnProperty(Ub.Ve) && void 0 === a && (a = b[Ub.Ve]);
            b.hasOwnProperty(Ub.Ue) && !0 === a && (a = b[Ub.Ue]);
            b.hasOwnProperty(Ub.Se) && !1 === a && (a = b[Ub.Se]);
            return a
        }
    };
    var M = {
        bc: "_ee",
        bd: "_syn_or_mod",
        pj: "_uei",
        Wd: "_eu",
        mj: "_pci",
        Cb: "event_callback",
        Mc: "event_timeout",
        ya: "gtag.config",
        Ha: "gtag.get",
        ra: "purchase",
        Ab: "refund",
        eb: "begin_checkout",
        yb: "add_to_cart",
        zb: "remove_from_cart",
        Xg: "view_cart",
        Xe: "add_to_wishlist",
        sa: "view_item",
        fb: "view_promotion",
        Hc: "select_promotion",
        zd: "select_item",
        Sa: "view_item_list",
        We: "add_payment_info",
        Wg: "add_shipping_info",
        Ja: "value_key",
        Ta: "value_callback",
        za: "allow_ad_personalization_signals",
        Xb: "restricted_data_processing",
        Sb: "allow_google_signals",
        Ca: "cookie_expires",
        Ub: "cookie_update",
        Zb: "session_duration",
        Qc: "session_engaged_time",
        Ka: "user_properties",
        na: "transport_url",
        R: "ads_data_redaction",
        va: "user_data",
        Vb: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        Pe: "region",
        Qe: "wait_for_update",
        Ba: "conversion_linker",
        Aa: "conversion_cookie_prefix",
        ca: "value",
        ba: "currency",
        xf: "trip_type",
        V: "items",
        qf: "passengers",
        Cd: "allow_custom_scripts",
        $b: "session_id",
        vf: "quantity",
        Wa: "transaction_id",
        jb: "language",
        Kc: "country",
        Ic: "allow_enhanced_conversions",
        Hd: "aw_merchant_id",
        Fd: "aw_feed_country",
        Gd: "aw_feed_language",
        Ed: "discount",
        aa: "developer_id",
        Rc: "delivery_postal_code",
        Nd: "estimated_delivery_date",
        Ld: "shipping",
        Sd: "new_customer",
        Id: "customer_lifetime_value",
        Md: "enhanced_conversions",
        Rb: "page_view",
        ma: "linker",
        M: "domains",
        Fb: "decorate_forms",
        lf: "enhanced_conversions_automatic_settings",
        gh: "auto_detection_enabled",
        nf: "ga_temp_client_id",
        Ad: "user_engagement",
        Rg: "app_remove",
        Sg: "app_store_refund",
        Tg: "app_store_subscription_cancel",
        Ug: "app_store_subscription_convert",
        Vg: "app_store_subscription_renew",
        Yg: "first_open",
        Zg: "first_visit",
        $g: "in_app_purchase",
        ah: "session_start",
        bh: "user_data_login",
        dh: "user_data_logout",
        eh: "allow_display_features",
        Tb: "campaign",
        Ze: "campaign_content",
        $e: "campaign_id",
        af: "campaign_medium",
        bf: "campaign_name",
        cf: "campaign_source",
        df: "campaign_term",
        Bb: "client_id",
        ka: "cookie_domain",
        Jc: "cookie_name",
        hb: "cookie_path",
        Ia: "cookie_flags",
        ef: "custom_map",
        Pd: "groups",
        ij: "non_interaction",
        Gb: "page_location",
        pf: "page_path",
        Va: "page_referrer",
        Td: "page_title",
        Yb: "send_page_view",
        kb: "send_to",
        Ud: "session_engaged",
        Oc: "_logged_in_state",
        Vd: "session_number",
        yh: "tracking_id",
        Xa: "url_passthrough",
        Eb: "accept_incoming",
        Wb: "url_position",
        tf: "phone_conversion_number",
        rf: "phone_conversion_callback",
        sf: "phone_conversion_css_class",
        uf: "phone_conversion_options",
        uh: "phone_conversion_ids",
        th: "phone_conversion_country_code",
        Ye: "aw_remarketing",
        Dd: "aw_remarketing_only",
        Bd: "gclid",
        fh: "auid",
        lh: "affiliation",
        kf: "tax",
        Kd: "list_name",
        jf: "checkout_step",
        hf: "checkout_option",
        mh: "coupon",
        nh: "promotions",
        Hb: "user_id",
        vh: "retoken",
        la: "cookie_prefix",
        ff: "disable_merchant_reported_purchases",
        kh: "dc_natural_search",
        jh: "dc_custom_params",
        rh: "method",
        xh: "search_term",
        ih: "content_type",
        sh: "optimize_id",
        oh: "experiments",
        Ua: "google_signals",
        Nc: "google_tld",
        Sc: "update",
        Od: "firebase_id",
        Db: "ga_restrict_domain",
        Lc: "event_settings",
        Jd: "dynamic_event_settings",
        ac: "user_data_settings",
        wh: "screen_name",
        qh: "_x_19",
        ib: "_ecid",
        ph: "_x_20",
        Rd: "internal_traffic_results",
        wf: "traffic_type",
        Pc: "referral_exclusion_definition",
        Qd: "ignore_referrer",
        hh: "content_group"
    };
    var xd = {};
    M.zf = Object.freeze((xd[M.We] = 1, xd[M.Wg] = 1, xd[M.yb] = 1, xd[M.zb] = 1, xd[M.Xg] = 1, xd[M.eb] = 1, xd[M.zd] = 1, xd[M.Sa] = 1, xd[M.Hc] = 1, xd[M.fb] = 1, xd[M.ra] = 1, xd[M.Ab] = 1, xd[M.sa] = 1, xd[M.Xe] = 1, xd));
    M.Yd = Object.freeze([M.za, M.Sb, M.Ub]);
    M.Ih = Object.freeze([].concat(M.Yd));
    M.Zd = Object.freeze([M.Ca, M.Mc, M.Zb, M.Qc]);
    M.Jh = Object.freeze([].concat(M.Zd));
    var zd = {},
        Ad = function(a, b) {
            zd[a] = zd[a] || [];
            zd[a][b] = !0
        },
        Bd = function(a) {
            for (var b = [], c = zd[a] || [], d = 0; d < c.length; d++)
                c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++)
                b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Cd = function(a) {
        Ad("GTM", a)
    };
    var Dd = function(a) {
        this.m = a;
        this.defaultValue = !1
    };
    var Ed = new Dd(1933),
        Fd = new Dd(1956);
    var Hd = function() {
        var a = Gd,
            b = "ze";
        if (a.ze && a.hasOwnProperty(b))
            return a.ze;
        var c = new a;
        a.ze = c;
        a.hasOwnProperty(b);
        return c
    };
    var Gd = function() {
            var a = {};
            this.m = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.o = function() {
                a[Ed.m] = !0
            }
        },
        Id = function(a) {
            return Hd().m(a.m, a.defaultValue)
        };
    var Jd = [];
    function Kd() {
        var a = wb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Rd,
            update: Sd,
            addListener: Td,
            notifyListeners: Ud,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }
    function Rd(a, b, c, d, e, f) {
        var g = Kd();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries,
                l = k[a] || {},
                n = l.region,
                p = c && ta(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === l.update),
                    u = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: r
                    };
                if ("" !== d || !1 !== l.initial)
                    k[a] = u;
                r && m.setTimeout(function() {
                    k[a] === u && u.quiet && (u.quiet = !1, Vd(a), Ud(), Ad("TAGGING", 2))
                }, f)
            }
        }
    }
    function Sd(a, b) {
        var c = Kd();
        c.active = !0;
        if (void 0 != b) {
            var d = Wd(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Wd(a);
            f.quiet ? (f.quiet = !1, Vd(a)) : g !== d && Vd(a)
        }
    }
    function Td(a, b) {
        Jd.push({
            pe: a,
            ki: b
        })
    }
    function Vd(a) {
        for (var b = 0; b < Jd.length; ++b) {
            var c = Jd[b];
            va(c.pe) && -1 !== c.pe.indexOf(a) && (c.og = !0)
        }
    }
    function Ud(a) {
        for (var b = 0; b < Jd.length; ++b) {
            var c = Jd[b];
            if (c.og) {
                c.og = !1;
                try {
                    c.ki({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var Wd = function(a) {
            var b = Kd().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        },
        Xd = function(a) {
            return (Kd().entries[a] || {}).initial
        },
        Yd = function(a) {
            return !(Kd().entries[a] || {}).quiet
        },
        Zd = function() {
            return Id(Ed) ? Kd().active : !1
        },
        $d = function() {
            return Kd().usedDefault
        },
        ae = function(a, b) {
            Kd().addListener(a, b)
        },
        be = function(a) {
            Kd().notifyListeners(a)
        },
        ce = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Yd(b[e]))
                        return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                ae(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else
                a({})
        },
        de = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === Wd(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = ta(b) ? [b] : b,
                e = {};
            c().length !== d.length && ae(d, function(f) {
                var g = c();
                0 < g.length && (f.pe = g, a(f))
            })
        };
    function ee(a) {
        for (var b = [], c = 0; c < fe.length; c++) {
            var d = a(fe[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var fe = [M.C, M.H],
        ge = function(a) {
            var b = a[M.Pe];
            b && Cd(40);
            var c = a[M.Qe];
            c && Cd(41);
            for (var d = va(b) ? b : [b], e = {
                    Ob: 0
                }; e.Ob < d.length; e = {
                Ob: e.Ob
            }, ++e.Ob)
                Da(a, function(f) {
                    return function(g, k) {
                        if (g !== M.Pe && g !== M.Qe) {
                            var l = d[f.Ob];
                            Kd().set(g, k, l, "NO", "NO-46", c)
                        }
                    }
                }(e))
        },
        he = 0,
        ie = function(a, b) {
            Da(a, function(e, f) {
                Kd().update(e, f)
            });
            be(b);
            var c = h(),
                d = c - he;
            he && 0 <= d && 1E3 > d && Cd(66);
            he = c
        },
        je = function(a) {
            var b = Wd(a);
            return void 0 != b ? b : !0
        },
        ke = function() {
            return "G1" + ee(Wd)
        },
        le = function() {
            return "G1" +
            ee(Xd)
        },
        me = function(a, b) {
            de(a, b)
        },
        ne = function(a, b) {
            ce(a, b)
        };
    var pe = function(a) {
            return oe ? B.querySelectorAll(a) : null
        },
        qe = function(a, b) {
            if (!oe)
                return null;
            if (Element.prototype.closest)
                try {
                    return a.closest(b)
                } catch (e) {
                    return null
                }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!B.documentElement.contains(d))
                return null;
            do {
                try {
                    if (c.call(d, b))
                        return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        re = !1;
    if (B.querySelectorAll)
        try {
            var se = B.querySelectorAll(":root");
            se && 1 == se.length && se[0] == B.documentElement && (re = !0)
        } catch (a) {}
    var oe = re;
    var Me = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Ne = function(a) {
            var b = new Me;
            b.eventModel = a;
            return b
        },
        Ve = function(a, b) {
            a.targetConfig = b;
            return a
        },
        We = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Xe = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Ye = function(a,
        b) {
            a.remoteConfig = b;
            return a
        },
        Ze = function(a, b) {
            a.onSuccess = b;
            return a
        },
        $e = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        af = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        bf = function(a, b) {
            a.onFailure = b;
            return a
        };
    Me.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a])
            return this.eventModel[a];
        if (void 0 !== this.targetConfig[a])
            return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a])
            return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a])
            return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a])
            return this.remoteConfig[a]
    };
    var cf = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f)
                    c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        df = function(a, b, c) {
            function d(g) {
                Sb(g) && Da(g, function(k, l) {
                    f = !0;
                    e[k] = l
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        ef = function(a) {
            var b = [M.Tb, M.Ze, M.$e, M.af, M.bf, M.cf, M.df],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                    0; g < b.length; g++)
                        void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig))
                return c;
            e(a.remoteConfig);
            return c
        };
    var ff = {},
        P = null,
        gf = Math.random();
    ff.I = "UA-107491380-1";
    ff.$c = "ai0";
    ff.Qg = "ChAI8Py+iwYQr4+C35KO3b4UEicAFcsvrNzjK98fbvtm6Qm7IkYAuUsBNk6JPu2dd0kkjizHZ/zsOXkaAoQJ";
    var hf = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        jf = {
            __paused: !0,
            __tg: !0
        },
        kf;
    for (kf in hf)
        hf.hasOwnProperty(kf) && (jf[kf] = !0);
    ff.xd = "www.googletagmanager.com";
    var lf = ff.xd + "/gtm.js";
    lf = ff.xd + "/gtag/js";
    var mf = lf,
        nf = Ia(""),
        of = null,
        pf = null,
        qf = "https://www.googletagmanager.com/a?id=" + ff.I + "&cv=1",
        rf = {},
        sf = {},
        tf = function() {
            var a = P.sequence || 1;
            P.sequence = a + 1;
            return a
        };
    ff.Pg = "";
    var uf = "";
    ff.ad = uf;
    var vf = {},
        wf = new za,
        xf = {},
        yf = {},
        Bf = {
            name: "dataLayer",
            set: function(a, b) {
                H(Va(a, b), xf);
                zf()
            },
            get: function(a) {
                return Af(a, 2)
            },
            reset: function() {
                wf = new za;
                xf = {};
                zf()
            }
        },
        Af = function(a, b) {
            return 2 != b ? wf.get(a) : Cf(a)
        },
        Cf = function(a) {
            var b,
                c = a.split(".");
            b = b || [];
            for (var d = xf, e = 0; e < c.length; e++) {
                if (null === d)
                    return !1;
                if (void 0 === d)
                    break;
                d = d[c[e]];
                if (-1 !== wa(b, d))
                    return
            }
            return d
        },
        Df = function(a, b) {
            yf.hasOwnProperty(a) || (wf.set(a, b), H(Va(a, b), xf), zf())
        },
        zf = function(a) {
            Da(yf, function(b, c) {
                wf.set(b, c);
                H(Va(b,
                void 0), xf);
                H(Va(b, c), xf);
                a && delete yf[b]
            })
        },
        Ff = function(a, b, c) {
            vf[a] = vf[a] || {};
            vf[a][b] = Ef(b, c)
        },
        Ef = function(a, b) {
            var c,
                d = 1 !== (void 0 === b ? 2 : b) ? Cf(a) : wf.get(a);
            "array" === Qb(d) || "object" === Qb(d) ? c = H(d) : c = d;
            return c
        },
        Gf = function(a, b) {
            if (vf[a])
                return vf[a][b]
        },
        Hf = function(a, b) {
            vf[a] && delete vf[a][b]
        };
    var If,
        Jf = !1,
        Kf = function(a) {
            if (!Jf) {
                Jf = !0;
                If = If || {}
            }
            return If[a]
        };
    var Lf = function(a) {
        if (B.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
            return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d,
            null))
        }
        return !1
    };
    var Uf = /:[0-9]+$/,
        Vf = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        Yf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = Wf(a.protocol) || Wf(m.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
            (a.hostname = (a.hostname || m.location.hostname).replace(Uf, "").toLowerCase());
            return Xf(a, b, c, d, e)
        },
        Xf = function(a, b, c, d, e) {
            var f,
                g = Wf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
            case "url_no_fragment":
                f = Zf(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Uf, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substr(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Ad("TAGGING",
                1);
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var l = f.split("/");
                0 <= wa(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                f = l.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Vf(f, e, void 0));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
            }
            return f
        },
        Wf = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Zf = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        $f = function(a) {
            var b = B.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Ad("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Uf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        ag = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }
            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 != p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = $f(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var l = "" + f + g + k;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var bg = {},
        cg = !0,
        dg = !1;
    bg.Lg = "false";
    var eg = function(a) {
            if ("false" === bg.Lg || !cg)
                return !1;
            if (dg)
                return !0;
            var b = Kf("AW-" + a);
            return !!b && !!b.preAutoPii
        },
        fg = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        gg = new RegExp(/@(gmail|googlemail)\./i),
        hg = new RegExp(/support|noreply/i),
        ig = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        jg = ["BR"],
        kg = {};
    function lg(a) {
        var b;
        if (a === B.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a:
                    {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }d = lg(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
    function mg(a, b) {
        if (1 >= a.length)
            return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }
    function ng(a) {
        if (0 == a.length)
            return null;
        var b;
        b = mg(a, function(c) {
            return !hg.test(c.Pa)
        });
        b = mg(b, function(c) {
            return "INPUT" === c.element.tagName.toUpperCase()
        });
        b = mg(b, function(c) {
            return !Lf(c.element)
        });
        return b[0]
    }
    var og = function(a) {
            a = a || {
                xe: !0,
                ye: !0
            };
            a.$a = a.$a || {
                email: !0,
                phone: !0,
                Qf: !0
            };
            var b,
                c = a,
                d = !!c.xe + "." + !!c.ye;
            c && c.kd && c.kd.length && (d += "." + c.kd.join("."));
            c && c.$a && (d += "." + c.$a.email + "." + c.$a.phone + "." + c.$a.Qf);
            b = d;
            var e = kg[b];
            if (e && 200 > h() - e.timestamp)
                return e.result;
            var f;
            var g = [],
                k = B.body;
            if (k) {
                for (var l = k.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) {
                    var p = l[n];
                    if (!(0 <= ig.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var r = !1, u = 0; u < p.childElementCount && 1E4 > u; u++)
                            if (!(0 <=
                            jg.indexOf(p.children[u].tagName.toUpperCase()))) {
                                r = !0;
                                break
                            }
                        r || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < l.length ? "2" : "1"
                }
            } else
                f = {
                    elements: g,
                    status: "4"
                };
            var t = f,
                q = t.status,
                v;
            if (a.$a && a.$a.email) {
                for (var x = t.elements, z = [], w = 0; w < x.length; w++) {
                    var y = x[w],
                        A = y.textContent;
                    "INPUT" === y.tagName.toUpperCase() && y.value && (A = y.value);
                    if (A) {
                        var C = A.match(fg);
                        if (C) {
                            var F = C[0],
                                E;
                            if (m.location) {
                                var D = Xf(m.location, "host", !0);
                                E = 0 <= F.toLowerCase().indexOf(D)
                            } else
                                E = !1;
                            E || z.push({
                                element: y,
                                Pa: F
                            })
                        }
                    }
                }
                var O;
                var K = a && a.kd;
                if (K && 0 !== K.length) {
                    for (var L = [], N = 0; N < z.length; N++) {
                        for (var J = !0, I = 0; I < K.length; I++) {
                            var V = K[I];
                            if (V && qe(z[N].element, V)) {
                                J = !1;
                                break
                            }
                        }
                        J && L.push(z[N])
                    }
                    O = L
                } else
                    O = z;
                v = ng(O);
                10 < z.length && (q = "3")
            }
            var T = [];
            if (v) {
                var X = v.element,
                    S = {
                        Pa: v.Pa,
                        tagName: X.tagName,
                        type: 1
                    };
                a.xe && (S.querySelector = lg(X));
                a.ye && (S.isVisible = !Lf(X));
                T.push(S)
            }
            var W = {
                elements: T,
                status: q
            };
            kg[b] = {
                timestamp: h(),
                result: W
            };
            return W
        },
        pg = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Pa.length + ":" + gg.test(a.Pa)
        };
    var ug = {},
        vg = function(a, b) {
            if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
                return m._gtmexpgrp[a];
            void 0 === ug[a] && (ug[a] = Math.floor(Math.random() * b));
            return ug[a]
        };
    var wg = function(a) {
        var b = 1,
            c,
            d,
            e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var xg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    function yg(a) {
        return "null" !== a.origin
    }
    ;
    var Bg = function(a, b, c, d) {
            return zg(d) ? xg(a, String(b || Ag()), c) : []
        },
        Jg = function(a, b, c, d, e) {
            if (zg(e)) {
                var f = Cg(a, d, e);
                if (1 === f.length)
                    return f[0].id;
                if (0 !== f.length) {
                    f = Ig(f, function(g) {
                        return g.hd
                    }, b);
                    if (1 === f.length)
                        return f[0].id;
                    f = Ig(f, function(g) {
                        return g.wc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };
    function Kg(a, b, c, d) {
        var e = Ag(),
            f = window;
        yg(f) && (f.document.cookie = a);
        var g = Ag();
        return e != g || void 0 != c && 0 <= Bg(b, g, !1, d).indexOf(c)
    }
    var Og = function(a, b, c) {
            function d(t, q, v) {
                if (null == v)
                    return delete g[q], t;
                g[q] = v;
                return t + "; " + q + "=" + v
            }
            function e(t, q) {
                if (null == q)
                    return delete g[q], t;
                g[q] = !0;
                return t + "; " + q
            }
            if (!zg(c.Fa))
                return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Lg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.sj);
            f = d(f, "samesite",
            c.uj);
            c.vj && (f = e(f, "secure"));
            var l = c.domain;
            if (l && "auto" === l.toLowerCase()) {
                for (var n = Mg(), p = 0; p < n.length; ++p) {
                    var r = "none" !== n[p] ? n[p] : void 0,
                        u = d(f, "domain", r);
                    u = e(u, c.flags);
                    if (!Ng(r, c.path) && Kg(u, a, b, c.Fa))
                        return 0
                }
                return 1
            }
            l && "none" !== l.toLowerCase() && (f = d(f, "domain", l));
            f = e(f, c.flags);
            return Ng(l, c.path) ? 1 : Kg(f, a, b, c.Fa) ? 0 : 1
        },
        Pg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Og(a, b, c)
        };
    function Ig(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }
    function Cg(a, b, c) {
        for (var d = [], e = Bg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({
                    id: g.join("."),
                    hd: 1 * l[0] || 1,
                    wc: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Lg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Qg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Rg = /(^|\.)doubleclick\.net$/i,
        Ng = function(a, b) {
            return Rg.test(window.document.location.hostname) || "/" === b && Qg.test(a)
        },
        Ag = function() {
            return yg(window) ? window.document.cookie : ""
        },
        Mg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c)
                    return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--)
                a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Rg.test(e) || Qg.test(e) || a.push("none");
            return a
        },
        zg = function(a) {
            if (!Id(Ed) || !a || !Zd())
                return !0;
            if (!Yd(a))
                return !1;
            var b = Wd(a);
            return null == b ? !0 : !!b
        };
    var Sg = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c = b;
            a && (c = b ^ wg(a) & 2147483647);
            return [c, Math.round(h() / 1E3)].join(".")
        },
        Vg = function(a, b, c, d, e) {
            var f = Tg(b);
            return Jg(a, f, Ug(c), d, e)
        },
        Wg = function(a, b, c, d) {
            var e = "" + Tg(c),
                f = Ug(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Tg = function(a) {
            if (!a)
                return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Ug = function(a) {
            if (!a || "/" === a)
                return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    function Xg(a, b, c) {
        var d,
            e = Number(null != a.ab ? a.ab : void 0);
        0 !== e && (d = new Date((b || h()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    }
    ;
    var Yg = ["1"],
        Zg = {},
        bh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = $g(a.prefix);
            if (!Zg[c] && !ah(c, a.path, a.domain) && b) {
                var d = $g(a.prefix),
                    e = Sg(),
                    f = Wg(e, "1", a.domain, a.path),
                    g = Xg(a);
                g.Fa = "ad_storage";
                if (0 === Pg(d, f, g)) {
                    var k = wb("google_tag_data", {});
                    k._gcl_au ? Ad("GTM", 57) : k._gcl_au = e
                }
                ah(c, a.path, a.domain)
            }
        };
    function ah(a, b, c) {
        var d = Vg(a, b, c, Yg, "ad_storage");
        d && (Zg[a] = d);
        return d
    }
    function $g(a) {
        return (a || "_gcl") + "_au"
    }
    ;
    var ch = function(a) {
        for (var b = [], c = B.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Me: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };
    function dh(a, b) {
        var c = ch(a),
            d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Me] || (d[c[e].Me] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    oa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Me].push(g)
            }
        }
        return d
    }
    ;
    function eh() {
        for (var a = fh, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function gh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var fh,
        hh;
    function ih(a) {
        fh = fh || gh();
        hh = hh || eh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                r = k & 63;
            e || (r = 64, d || (p = 64));
            b.push(fh[l], fh[n], fh[p], fh[r])
        }
        return b.join("")
    }
    function jh(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = hh[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        fh = fh || gh();
        hh = hh || eh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    }
    ;
    var kh,
        lh = function(a) {
            var b;
            if (!(b = kh)) {
                for (var c = Array(256), d = 0; 256 > d; d++) {
                    for (var e = d, f = 0; 8 > f; f++)
                        e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                    c[d] = e
                }
                b = c
            }
            kh = b;
            for (var g = 4294967295, k = 0; k < a.length; k++)
                g = g >>> 8 ^ kh[(g ^ a.charCodeAt(k)) & 255];
            return (g ^ -1) >>> 0
        };
    var ph = function() {
            var a = mh,
                b = nh,
                c = oh(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Eb(B, "mousedown", d);
                Eb(B, "keyup", d);
                Eb(B, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        qh = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            oh().decorators.push(f)
        },
        rh = function(a, b, c) {
            for (var d = oh().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms)
                    a:
                    {
                        var l = g.domains,
                            n = a,
                            p = !!g.sameHost;
                        if (l && (p || n !== B.location.hostname))
                            for (var r = 0; r < l.length; r++)
                                if (l[r] instanceof RegExp) {
                                    if (l[r].test(n)) {
                                        k = !0;
                                        break a
                                    }
                                } else if (0 <= n.indexOf(l[r]) || p && 0 <= l[r].indexOf(n)) {
                                    k = !0;
                                    break a
                                }
                        k = !1
                    }if (k) {
                    var u = g.placement;
                    void 0 == u && (u = g.fragment ? 2 : 1);
                    u === b && Sa(e, g.callback())
                }
            }
            return e
        };
    function oh() {
        var a = wb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    }
    ;
    var sh = /(.*?)\*(.*?)\*(.*)/,
        th = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        uh = /^(?:www\.|m\.|amp\.)+/,
        vh = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function wh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var zh = function(a, b) {
        var c = [],
            d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(ih(String(e))))
            }
        var f = c.join("*");
        if (void 0 !== b) {
            var g = "xp_" + b,
                k = xh[b](f);
            f = f + "*" + [g, ih(String(k))].join("*")
        }
        return ["1", yh(f), f].join("*")
    };
    function yh(a, b) {
        var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Ob(), Math.floor(h() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return lh(c).toString(36)
    }
    var Ah = {},
        xh = (Ah[1] = Bh, Ah[2] = Ch, Ah);
    function Bh(a, b) {
        var c = [(new Date).getTimezoneOffset(), Ob(), Math.floor(h() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return lh(c).toString(36)
    }
    function Ch(a, b) {
        if (ub.userAgentData) {
            var c = [(new Date).getTimezoneOffset(), Ob(), Math.floor(h() / 60 / 1E3) - (void 0 === b ? 0 : b), ub.userAgentData.brands, ub.userAgentData.mobile, ub.userAgentData.platform, a].join("*");
            return lh(c).toString(36)
        }
    }
    function Dh() {
        return function(a) {
            var b = $f(m.location.href),
                c = b.search.replace("?", ""),
                d = Vf(c, "_gl", !0) || "";
            a.query = Eh(d) || {};
            var e = Yf(b, "fragment").match(wh("_gl"));
            a.fragment = Eh(e && e[3] || "") || {}
        }
    }
    var Fh = function(a) {
            var b = Dh(),
                c = oh();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Sa(d, e.query), a && Sa(d, e.fragment));
            return d
        },
        Eh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a:
                    {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = sh.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }var g = c;
                    if (g && "1" === g[1]) {
                        var k = g[3],
                            l;
                        a:
                        {
                            for (var n = g[2], p = 0; p < b; ++p)
                                if (n === yh(k, p)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }if (l) {
                            for (var r = {}, u = k ? k.split("*") : [], t = 0; t < u.length; t += 2)
                                r[u[t]] = jh(u[t + 1]);
                            return r
                        }
                    }
                }
            } catch (q) {}
        };
    function Gh(a, b, c, d) {
        function e(p) {
            var r = p,
                u = wh(a).exec(r),
                t = r;
            if (u) {
                var q = u[2],
                    v = u[4];
                t = u[1];
                v && (t = t + q + v)
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = vh.exec(c);
        if (!f)
            return "";
        var g = f[1],
            k = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + l
    }
    function Hh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = rh(b, 1, c),
            e = rh(b, 2, c),
            f = rh(b, 3, c);
        if (Ta(d)) {
            var g = zh(d, void 0);
            c ? Ih("_gl", g, a) : Jh("_gl", g, a, !1)
        }
        if (!c && Ta(e)) {
            var k = zh(e);
            Jh("_gl", k, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l))
                a:
                {
                    var n = l,
                        p = f[l],
                        r = a;
                    if (r.tagName) {
                        if ("a" === r.tagName.toLowerCase()) {
                            Jh(n, p, r, void 0);
                            break a
                        }
                        if ("form" === r.tagName.toLowerCase()) {
                            Ih(n, p, r);
                            break a
                        }
                    }
                    "string" == typeof r && Gh(n, p, r, void 0)
                }
    }
    function Jh(a, b, c, d) {
        if (c.href) {
            var e = Gh(a, b, c.href, void 0 === d ? !1 : d);
            cb.test(e) && (c.href = e)
        }
    }
    function Ih(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = B.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Gh(a, b, c.action);
                cb.test(n) && (c.action = n)
            }
        }
    }
    function mh(a) {
        try {
            var b;
            a:
            {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Hh(e, e.hostname)
            }
        } catch (g) {}
    }
    function nh(a) {
        try {
            if (a.action) {
                var b = Yf($f(a.action), "host");
                Hh(a, b)
            }
        } catch (c) {}
    }
    var Kh = function(a, b, c, d) {
            ph();
            qh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Lh = function(a, b) {
            ph();
            qh(a, [Xf(m.location, "host", !0)], b, !0, !0)
        },
        Mh = function() {
            var a = B.location.hostname,
                b = th.exec(B.referrer);
            if (!b)
                return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--"))
                    return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(uh, ""),
                l = e.replace(uh, ""),
                n;
            if (!(n = k === l)) {
                var p = "." + l;
                n = k.substring(k.length - p.length,
                k.length) === p
            }
            return n
        },
        Nh = function(a, b) {
            return !1 === a ? !1 : a || b || Mh()
        };
    var Oh = {};
    var Ph = /^\w+$/,
        Qh = /^[\w-]+$/,
        Rh = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Sh = function() {
            if (!Id(Ed) || !Zd())
                return !0;
            var a = Wd("ad_storage");
            return null == a ? !0 : !!a
        },
        Th = function(a, b) {
            Yd("ad_storage") ? Sh() ? a() : de(a, "ad_storage") : b ? Ad("TAGGING", 3) : ce(function() {
                Th(a, !0)
            }, ["ad_storage"])
        },
        Vh = function(a) {
            return Uh(a).map(function(b) {
                return b.oa
            })
        },
        Uh = function(a) {
            var b = [];
            if (!yg(m) || !B.cookie)
                return b;
            var c = Bg(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length)
                return b;
            for (var d = {}, e = 0; e < c.length; d =
            {
                Dc: d.Dc
            }, e++) {
                var f = Wh(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.Dc = g.oa;
                    var l = g.timestamp,
                        n = g.labels,
                        p = xa(b, function(r) {
                            return function(u) {
                                return u.oa === r.Dc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = Xh(p.labels, n || [])) : b.push({
                        version: k,
                        oa: d.Dc,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function(r, u) {
                return u.timestamp - r.timestamp
            });
            return Yh(b)
        };
    function Xh(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function Zh(a) {
        return a && "string" == typeof a && a.match(Ph) ? a : "_gcl"
    }
    var ai = function() {
            var a = $f(m.location.href),
                b = Yf(a, "query", !1, void 0, "gclid"),
                c = Yf(a, "query", !1, void 0, "gclsrc"),
                d = Yf(a, "query", !1, void 0, "wbraid"),
                e = Yf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Vf(f, "gclid", void 0);
                c = c || Vf(f, "gclsrc", void 0);
                d = d || Vf(f, "wbraid", void 0)
            }
            return $h(b, c, e, d)
        },
        $h = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Qh.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Qh))
                switch (b) {
                case void 0:
                    f(a,
                    "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
                }
            c && f(c, "dc");
            return e
        },
        ci = function(a) {
            var b = ai();
            Th(function() {
                bi(b, !1, a)
            })
        };
    function bi(a, b, c, d, e) {
        function f(x, z) {
            var w = di(x, g);
            w && (Pg(w, z, k), l = !0)
        }
        c = c || {};
        e = e || [];
        var g = Zh(c.prefix);
        d = d || h();
        var k = Xg(c, d, !0);
        k.Fa = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var z = ["GCL", n, x];
                0 < e.length && z.push(e.join("."));
                return z.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Oh.enable_gbraid_cookie_write ? 0 : Oh.enable_gbraid_cookie_write) && !l && a.gb) {
            var r = a.gb[0],
                u = di("gb", g),
                t = !1;
            if (!b)
                for (var q = Uh(u), v = 0; v < q.length; v++)
                    q[v].oa === r && q[v].labels && 0 < q[v].labels.length && (t = !0);
            t || f("gb", p(r))
        }
    }
    var fi = function(a, b) {
            var c = Fh(!0);
            Th(function() {
                for (var d = Zh(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Rh[f]) {
                        var g = di(f, d),
                            k = c[g];
                        if (k) {
                            var l = Math.min(ei(k), h()),
                                n;
                            b:
                            {
                                var p = l;
                                if (yg(m))
                                    for (var r = Bg(g, B.cookie, void 0, "ad_storage"), u = 0; u < r.length; ++u)
                                        if (ei(r[u]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }if (!n) {
                                var t = Xg(b, l, !0);
                                t.Fa = "ad_storage";
                                Pg(g, k, t)
                            }
                        }
                    }
                }
                bi($h(c.gclid, c.gclsrc), !1, b)
            })
        },
        di = function(a, b) {
            var c = Rh[a];
            if (void 0 !== c)
                return b + c
        },
        ei = function(a) {
            return 0 !== gi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0
        };
    function Wh(a) {
        var b = gi(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            oa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function gi(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Qh.test(a[2]) ? [] : a
    }
    var hi = function(a, b, c, d, e) {
            if (va(b) && yg(m)) {
                var f = Zh(e),
                    g = function() {
                        for (var k = {}, l = 0; l < a.length; ++l) {
                            var n = di(a[l], f);
                            if (n) {
                                var p = Bg(n, B.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                Th(function() {
                    Kh(g, b, c, d)
                })
            }
        },
        Yh = function(a) {
            return a.filter(function(b) {
                return Qh.test(b.oa)
            })
        },
        ii = function(a, b) {
            if (yg(m)) {
                for (var c = Zh(b.prefix), d = {}, e = 0; e < a.length; e++)
                    Rh[a[e]] && (d[a[e]] = Rh[a[e]]);
                Th(function() {
                    Da(d, function(f, g) {
                        var k = Bg(c + g, B.cookie, void 0, "ad_storage");
                        k.sort(function(t,
                        q) {
                            return ei(q) - ei(t)
                        });
                        if (k.length) {
                            var l = k[0],
                                n = ei(l),
                                p = 0 !== gi(l.split(".")).length ? l.split(".").slice(3) : [],
                                r = {},
                                u;
                            u = 0 !== gi(l.split(".")).length ? l.split(".")[2] : void 0;
                            r[f] = [u];
                            bi(r, !0, b, n, p)
                        }
                    })
                })
            }
        };
    function ji(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var ki = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Zd()) {
            var c = ai();
            if (ji(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Lh(function() {
                    return d
                }, 3);
                Lh(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };
    function li(a, b) {
        var c = Zh(b),
            d = di(a, c);
        if (!d)
            return 0;
        for (var e = Uh(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function mi(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    ;
    var Gi = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Hi = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Ii = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Ji = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ki = function() {
            var a = !1;
            a = !0;
            return a
        },
        Mi = function(a) {
            var b = Af("gtm.allowlist") || Af("gtm.whitelist");
            b && Cd(9);
            Ki() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Ua(La(b), Hi),
                d = Af("gtm.blocklist") ||
                Af("gtm.blacklist");
            d || (d = Af("tagTypeBlacklist")) && Cd(3);
            d ? Cd(8) : d = [];
            Li() && (d = La(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= wa(La(d), "google") && Cd(2);
            var e = d && Ua(La(d), Ii),
                f = {};
            return function(g) {
                var k = g && g[Ub.lb];
                if (!k || "string" != typeof k)
                    return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k])
                    return f[k];
                var l = sf[k] || [],
                    n = a(k, l);
                if (b) {
                    var p;
                    if (p =
                    n)
                        a:
                        {
                            if (0 > wa(c, k))
                                if (l && 0 < l.length)
                                    for (var r = 0; r < l.length; r++) {
                                        if (0 > wa(c, l[r])) {
                                            Cd(11);
                                            p = !1;
                                            break a
                                        }
                                    }
                                else {
                                    p = !1;
                                    break a
                                }
                            p = !0
                        }n = p
                }
                var u = !1;
                if (d) {
                    var t = 0 <= wa(e, k);
                    if (t)
                        u = t;
                    else {
                        var q = Aa(e, l || []);
                        q && Cd(10);
                        u = q
                    }
                }
                var v = !n || u;
                v || !(0 <= wa(l, "sandboxedScripts")) || c && -1 !== wa(c, "sandboxedScripts") || (v = Aa(e, Ji));
                return f[k] = v
            }
        },
        Li = function() {
            return Gi.test(m.location && m.location.hostname)
        };
    var Ni = !1,
        Oi = 0,
        Pi = [];
    function Qi(a) {
        if (!Ni) {
            var b = B.createEventObject,
                c = "complete" == B.readyState,
                d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Ni = !0;
                for (var e = 0; e < Pi.length; e++)
                    G(Pi[e])
            }
            Pi.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    G(arguments[f]);
                return 0
            }
        }
    }
    function Ri() {
        if (!Ni && 140 > Oi) {
            Oi++;
            try {
                B.documentElement.doScroll("left"),
                Qi()
            } catch (a) {
                m.setTimeout(Ri, 50)
            }
        }
    }
    var Si = function(a) {
        Ni ? a() : Pi.push(a)
    };
    var Ui = function(a, b) {
            this.m = !1;
            this.D = [];
            this.N = {
                tags: []
            };
            this.Z = !1;
            this.o = this.B = 0;
            Ti(this, a, b)
        },
        Vi = function(a, b, c, d) {
            if (jf.hasOwnProperty(b) || "__zone" === b)
                return -1;
            var e = {};
            Sb(d) && (e = H(d, e));
            e.id = c;
            e.status = "timeout";
            return a.N.tags.push(e) - 1
        },
        Wi = function(a, b, c, d) {
            var e = a.N.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Xi = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++)
                    b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        Ti = function(a, b, c) {
            sa(b) && Yi(a, b);
            c && m.setTimeout(function() {
                return Xi(a)
            }, Number(c))
        },
        Yi = function(a,
        b) {
            var c = Ra(function() {
                return G(function() {
                    b(ff.I, a.N)
                })
            });
            a.m ? c() : a.D.push(c)
        },
        Zi = function(a) {
            a.B++;
            return Ra(function() {
                a.o++;
                a.Z && a.o >= a.B && Xi(a)
            })
        };
    var $i = function() {
            function a(d) {
                return !ua(d) || 0 > d ? 0 : d
            }
            if (!P._li && m.performance && m.performance.timing) {
                var b = m.performance.timing.navigationStart,
                    c = ua(Bf.get("gtm.start")) ? Bf.get("gtm.start") : 0;
                P._li = {
                    cst: a(c - b),
                    cbt: a(pf - b)
                }
            }
        },
        aj = function(a) {
            m.performance && m.performance.mark(ff.I + "_" + a + "_start")
        },
        bj = function(a) {
            if (m.performance) {
                var b = ff.I + "_" + a + "_start",
                    c = ff.I + "_" + a + "_duration";
                m.performance.measure(c, b);
                var d = m.performance.getEntriesByName(c)[0];
                m.performance.clearMarks(b);
                m.performance.clearMeasures(c);
                var e = P._p || {};
                void 0 === e[a] && (e[a] = d.duration, P._p = e);
                return d.duration
            }
        },
        cj = function() {
            if (m.performance && m.performance.now) {
                var a = P._p || {};
                a.PAGEVIEW = m.performance.now();
                P._p = a
            }
        };
    var dj = {},
        ej = function() {
            return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
        },
        fj = !1;
    var gj = function(a) {
            m.GoogleAnalyticsObject || (m.GoogleAnalyticsObject = a || "ga");
            var b = m.GoogleAnalyticsObject;
            if (m[b])
                m.hasOwnProperty(b) || Cd(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Pa());
                m[b] = c
            }
            $i();
            return m[b]
        },
        hj = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = ej();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        },
        ij = function(a) {
            if (!Zd())
                return;
            var b = ej();
            b(a + "require", "linker");
            b(a + "linker:passthrough",
            !0);
        };
    function jj() {
        return m.GoogleAnalyticsObject || "ga"
    }
    var kj = function(a) {},
        lj = function(a, b) {
            return function() {
                var c = ej(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                        g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var sj = function(a) {},
        wj = function(a) {},
        xj =
        function() {
            return "&tc=" + Ec.filter(function(a) {
                return a
            }).length
        },
        Aj = function() {
            2022 <= yj().length && zj()
        },
        Bj = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Dj = function() {
            Cj || (Cj = m.setTimeout(zj, 500))
        },
        zj = function() {
            Cj && (m.clearTimeout(Cj), Cj = void 0);
            void 0 === Ej || Fj[Ej] && !Gj && !Hj || (Ij[Ej] || Jj.zi() || 0 >= Kj-- ? (Cd(1), Ij[Ej] = !0) : (Jj.Ui(), Db(yj(!0)), Fj[Ej] = !0, Lj = Mj = Nj = Hj = Gj = ""))
        },
        yj = function(a) {
            var b = Ej;
            if (void 0 === b)
                return "";
            var c = Bd("GTM"),
                d = Bd("TAGGING");
            return [Oj, Fj[b] ? "" : "&es=1",
            Pj[b], sj(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", xj(), Gj, Hj, Nj, Mj, wj(a), Lj, "&z=0"].join("")
        },
        Rj = function() {
            Oj = Qj()
        },
        Qj = function() {
            return [qf, "&v=3&t=t", "&pid=" + ya(), "&rv=" + ff.$c].join("")
        },
        vj = ["L", "S", "Y"],
        rj = ["S", "E"],
        Sj = {
            sampleRate: "0.005000",
            Ig: "",
            Hg: Number("5")
        },
        Tj = 0 <= B.location.search.indexOf("?gtm_latency=") || 0 <= B.location.search.indexOf("&gtm_latency="),
        Uj;
    if (!(Uj = Tj)) {
        var Vj = Math.random(),
            Wj = Sj.sampleRate;
        Uj = Vj < Wj
    }
    var Xj = Uj,
        Yj = {
            label: ff.I + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Oj = Qj(),
        Fj = {},
        Gj = "",
        Hj = "",
        Lj = "",
        Mj = "",
        uj = {},
        tj = !1,
        qj = {},
        Zj = {},
        Nj = "",
        Ej = void 0,
        Pj = {},
        Ij = {},
        Cj = void 0,
        ak = 5;
    0 < Sj.Hg && (ak = Sj.Hg);
    var Jj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e)
                d.push(0);
            return {
                zi: function() {
                    return c < a ? !1 : h() - d[c % a] < b
                },
                Ui: function() {
                    var f = c++ % a;
                    d[f] = h()
                }
            }
        }(ak, 1E3),
        Kj = 1E3,
        ck = function(a, b) {
            if (Xj && !Ij[a] && Ej !==
            a) {
                zj();
                Ej = a;
                Lj = Gj = "";
                Pj[a] = "&e=" + Bj(b) + "&eid=" + a;
                Dj();
            }
        },
        dk = function(a, b, c, d) {
            if (Xj && b) {
                var e,
                    f = String(b[Ub.lb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Ij[a]) {
                    a !== Ej && (zj(), Ej = a);
                    Gj = Gj ? Gj + "." + g : "&tr=" + g;
                    var k = b["function"];
                    if (!k)
                        throw Error("Error: No function name given for function call.");
                    var l = (Gc[k] ? "1" : "2") + e;
                    Lj = Lj ? Lj + "." + l : "&ti=" + l;
                    Dj();
                    Aj()
                }
            }
        };
    var kk = function(a, b, c) {
            if (Xj && !Ij[a]) {
                a !== Ej && (zj(), Ej = a);
                var d = c + b;
                Hj = Hj ? Hj + "." + d : "&epr=" + d;
                Dj();
                Aj()
            }
        },
        lk = function(a, b, c) {};
    var mk = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        nk = function(a) {
            var b = P.zones;
            return b ? b.checkState(ff.I, a) : mk
        },
        ok = function(a) {
            var b = P.zones;
            !b && a && (b = P.zones = a());
            return b
        };
    function pk() {}
    function qk() {}
    ;
    function rk(a, b, c, d) {
        var e = Ec[a],
            f = sk(a, b, c, d);
        if (!f)
            return null;
        var g = Lc(e[Ub.Ff], c, []);
        if (g && g.length) {
            var k = g[0];
            f = rk(k.index, {
                onSuccess: f,
                onFailure: 1 === k.$f ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function sk(a, b, c, d) {
        function e() {
            if (f[Ub.Fh])
                k();
            else {
                var x = Pc(f, c, []);
                var z = x[Ub.Ng];
                if (null != z)
                    for (var w = 0; w < z.length; w++)
                        if (!je(z[w])) {
                            k();
                            return
                        }
                var y = Vi(c.mb, String(f[Ub.lb]), Number(f[Ub.Hf]), x[Ub.Gh]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var E = h() - F;
                        dk(c.id, Ec[a], "5", E);
                        Wi(c.mb, y, "success",
                        E);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var E = h() - F;
                        dk(c.id, Ec[a], "6", E);
                        Wi(c.mb, y, "failure", E);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                dk(c.id, f, "1");
                var C = function() {
                    var E = h() - F;
                    dk(c.id, f, "7", E);
                    Wi(c.mb, y, "exception", E);
                    A || (A = !0, k())
                };
                var F = h();
                try {
                    Kc(x, c)
                } catch (E) {
                    C(E)
                }
            }
        }
        var f = Ec[a],
            g = b.onSuccess,
            k = b.onFailure,
            l = b.terminate;
        if (c.Be(f))
            return null;
        var n = Lc(f[Ub.If], c, []);
        if (n && n.length) {
            var p = n[0],
                r = rk(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: l
                }, c, d);
            if (!r)
                return null;
            g = r;
            k = 2 === p.$f ? l : r
        }
        if (f[Ub.Bf] || f[Ub.Kh]) {
            var u = f[Ub.Bf] ? Fc :
                c.bj,
                t = g,
                q = k;
            if (!u[a]) {
                e = Ra(e);
                var v = tk(a, u, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                u[a](t, q)
            }
        }
        return e
    }
    function tk(a, b, c) {
        var d = [],
            e = [];
        b[a] = uk(d, e, c);
        return {
            onSuccess: function() {
                b[a] = vk;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = wk;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function uk(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function vk(a) {
        a()
    }
    function wk(a, b) {
        b()
    }
    ;
    var zk = function(a, b) {
        for (var c = [], d = 0; d < Ec.length; d++)
            if (a[d]) {
                var e = Ec[d];
                var f = Zi(b.mb);
                try {
                    var g = rk(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c,
                            l = k.push,
                            n = d,
                            p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var r = Gc[p];
                        l.call(k, {
                            Ag: n,
                            pg: r ? r.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        xk(d, b),
                        f()
                } catch (q) {
                    f()
                }
            }
        var u = b.mb;
        u.Z = !0;
        u.o >= u.B && Xi(u);
        c.sort(yk);
        for (var t = 0; t < c.length; t++)
            c[t].execute();
        return 0 < c.length
    };
    function yk(a, b) {
        var c,
            d = b.pg,
            e = a.pg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.Ag,
                k = b.Ag;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }
    function xk(a, b) {
        if (!Xj)
            return;
        var c = function(d) {
            var e = b.Be(Ec[d]) ? "3" : "4",
                f = Lc(Ec[d][Ub.Ff], b, []);
            f && f.length && c(f[0].index);
            dk(b.id, Ec[d], e);
            var g = Lc(Ec[d][Ub.If], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Ak = !1,
        Gk = function(a) {
            var b = h(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (Ak)
                    return !1;
                Ak = !0;
            }
            var g = nk(c),
                k = !1;
            if (!g.active) {
                if ("gtm.js" !== d)
                    return !1;
                k = !0;
                g = nk(Number.MAX_SAFE_INTEGER)
            }
            ck(c, d);
            var l = a.eventCallback,
                n = a.eventTimeout,
                p = l;
            var r = {
                id: c,
                name: d,
                Be: Mi(g.isAllowed),
                bj: [],
                jg: function() {
                    Cd(6)
                },
                Tf: Bk(c),
                mb: new Ui(p, n)
            };
            r.Sf = Ck();
            Dk(c, r.mb);
            var u = Tc(r);
            k && (u = Ek(u));
            var t = zk(u, r);
            "gtm.js" !== d && "gtm.sync" !== d || kj(ff.I);
            return Fk(u, t)
        };
    function Bk(a) {
        return function(b) {
            Xj && (Tb(b) || lk(a, "input", b))
        }
    }
    function Dk(a, b) {
        Ff(a, "event", 1);
        Ff(a, "ecommerce", 1);
        Ff(a, "gtm");
        Ff(a, "eventModel");
    }
    function Ck() {
        var a = {};
        a.event = Ef("event", 1);
        a.ecommerce = Ef("ecommerce", 1);
        a.gtm = Ef("gtm");
        a.eventModel = Ef("eventModel");
        return a
    }
    function Ek(a) {
        for (var b = [], c = 0; c < a.length; c++)
            a[c] && hf[String(Ec[c][Ub.lb])] && (b[c] = !0);
        return b
    }
    function Fk(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Ec[c] && !jf[String(Ec[c][Ub.lb])])
                return !0;
        return !1
    }
    function Hk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return $f("" + c + b).href
        }
    }
    function Ik(a, b) {
        return Jk() ? Hk(a, b) : void 0
    }
    function Jk() {
        var a = !1;
        return a
    }
    function Kk() {
        return !!ff.ad && "SGTM_TOKEN" !== ff.ad.replaceAll("@@", "")
    }
    ;
    var Lk = function() {
        var a = !1;
        return a
    };
    var Mk;
    if (3 === ff.$c.length)
        Mk = "g";
    else {
        var Nk = "G";
        Nk = "g";
        Mk = Nk
    }
    var Ok = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Mk,
            OPT: "o"
        },
        Pk = function(a) {
            var b = ff.I.split("-"),
                c = b[0].toUpperCase(),
                d = Ok[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === ff.$c.length) {
                var g = "w";
                g = Lk() ? "s" : "o";
                f = "2" + g
            } else
                f = "";
            return f + d + ff.$c + e
        };
    function Qk(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;
    var Rk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    function Sk() {
        return jb("iPhone") && !jb("iPod") && !jb("iPad")
    }
    ;
    jb("Opera");
    jb("Trident") || jb("MSIE");
    jb("Edge");
    !jb("Gecko") || -1 != gb.toLowerCase().indexOf("webkit") && !jb("Edge") || jb("Trident") || jb("MSIE") || jb("Edge");
    -1 != gb.toLowerCase().indexOf("webkit") && !jb("Edge") && jb("Mobile");
    jb("Macintosh");
    jb("Windows");
    jb("Linux") || jb("CrOS");
    var Tk = oa.navigator || null;
    Tk && (Tk.appVersion || "").indexOf("X11");
    jb("Android");
    Sk();
    jb("iPad");
    jb("iPod");
    Sk() || jb("iPad") || jb("iPod");
    gb.toLowerCase().indexOf("kaios");
    var Uk = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (k) {
                    e = !1
                }
                if (e)
                    return c;
                var f;
                a:
                {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (k) {}
                    f = null
                }if (!(c = f))
                    break
            }
            return null
        },
        Vk = function(a) {
            var b = B;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head)
                return null;
            var c,
                d,
                e;
            e = void 0 === e ? document : e;
            d = "META";
            "application/xhtml+xml" === (null == e ? void 0 : e.contentType) && (d = d.toLowerCase());
            c = e.createElement(d);
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c
        };
    var Wk = function() {};
    var Xk = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Yk = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.Z = 0;
            this.N = void 0 === b ? 500 : b;
            this.B = null
        };
    na(Yk, Wk);
    var $k = function(a) {
        return "function" === typeof a.o.__tcfapi || null != Zk(a)
    };
    Yk.prototype.addEventListener = function(a) {
        var b = {},
            c = sb(function() {
                return a(b)
            }),
            d = 0;
        -1 !== this.N && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.N));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Xk(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            al(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable",
            b.internalErrorState = 3,
            d && (clearTimeout(d),
            d = 0),
            c()
        }
    };
    Yk.prototype.removeEventListener = function(a) {
        a && a.listenerId && al(this, "removeEventListener", null, a.listenerId)
    };
    var cl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a:
            {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }var g = e;
            if (0 === g)
                return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var l;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = bl(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && ((Id(Fd) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && bl(a.purpose.consents, b)
                } else
                    l = !0;
            else
                l =
                1 === k ? a.purpose && a.vendor ? bl(a.purpose.legitimateInterests, b) && bl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        bl = function(a, b) {
            return !(!a || !a[b])
        },
        al = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Zk(a)) {
                dl(a);
                var f = ++a.Z;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else
                c({}, !1)
        },
        Zk = function(a) {
            if (a.m)
                return a.m;
            a.m = Uk(a.o, "__tcfapiLocator");
            return a.m
        },
        dl = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Rk(a.o, a.B))
        };
    var el = !0;
    el = !1;
    var fl = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        gl = Qk("", 550),
        hl = Qk("", 500);
    function il() {
        var a = P.tcf || {};
        return P.tcf = a
    }
    var jl = function(a, b) {
            this.B = a;
            this.m = b;
            this.o = h();
        },
        kl = function(a) {},
        ll = function(a) {},
        rl = function() {
            var a = il(),
                b = new Yk(m, el ? 3E3 : -1),
                c = new jl(b, a);
            if ((ml() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ("function" === typeof m.__tcfapi || $k(b))) {
                a.active = !0;
                a.yc = {};
                nl();
                var d = null;
                el ? d = m.setTimeout(function() {
                    ol(a);
                    pl(a);
                    d = null
                }, hl) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState)
                            ol(a),
                            pl(a),
                            kl(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies)
                                f = ql(),
                                b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    k;
                                for (k in fl)
                                    if (fl.hasOwnProperty(k))
                                        if ("1" === k) {
                                            var l,
                                                n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var r;
                                            var u = n;
                                            !1 === u.gdprApplies ? r = !0 : (void 0 === u.internalErrorState && (u.internalErrorState = Xk(u)), r = "error" === u.cmpStatus || 0 !== u.internalErrorState || "loaded" === u.cmpStatus && ("tcloaded" === u.eventStatus || "useractioncomplete" ===
                                            u.eventStatus) ? !0 : !1);
                                            l = r ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : cl(n, "1", 0) : !1;
                                            g["1"] = l
                                        } else
                                            g[k] = cl(e, k, fl[k]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.yc = f, pl(a), kl(c))
                        }
                    }),
                    ll(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null),
                    ol(a),
                    pl(a)
                }
            }
        };
    function ol(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        el && (a.yc = ql())
    }
    function nl() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = gl, a);
        ge(b)
    }
    var ml = function() {
        var a = !1;
        a = !0;
        return a
    };
    function ql() {
        var a = {},
            b;
        for (b in fl)
            fl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }
    function pl(a) {
        var b = {},
            c = (b.ad_storage = a.yc["1"] ? "granted" : "denied", b);
        sl();
        ie(c, 0)
    }
    var tl = function() {
            var a = il();
            if (a.active && void 0 !== a.loadTime)
                return Number(a.loadTime)
        },
        sl = function() {
            var a = il();
            return a.active ? a.tcString || "" : ""
        },
        ul = function() {
            var a = il();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        vl = function(a) {
            if (!fl.hasOwnProperty(String(a)))
                return !0;
            var b = il();
            return b.active && b.yc ? !!b.yc[String(a)] : !0
        };
    var Dl = !1;
    var El = function() {
            this.m = {}
        },
        Fl = function(a, b, c) {
            null != c && (a.m[b] = c)
        },
        Gl = function(a) {
            return Object.keys(a.m).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
            }).join("&")
        },
        Il = function(a, b, c, d, e) {};
    var Kl = /[A-Z]+/,
        Ll = /\s/,
        Ml = function(a) {
            if (ta(a)) {
                a = Oa(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Kl.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || Ll.test(e[f]) && ("AW" !== c || 1 !== f || !d))
                                return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            K: e
                        }
                    }
                }
            }
        },
        Ol = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                Ml(a[c]);
                d && (b[d.id] = d)
            }
            Nl(b);
            var e = [];
            Da(b, function(f, g) {
                e.push(g)
            });
            return e
        };
    function Nl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;
    var Ql = function(a, b, c, d) {
            return (2 === Pl() || d || "http:" != m.location.protocol ? a : b) + c
        },
        Pl = function() {
            var a = Bb(),
                b;
            if (1 === a)
                a:
                {
                    var c = mf;
                    c = c.toLowerCase();
                    for (var d = "https://" + c, e = "http://" + c, f = 1, g = B.getElementsByTagName("script"), k = 0; k < g.length && 100 > k; k++) {
                        var l = g[k].src;
                        if (l) {
                            l = l.toLowerCase();
                            if (0 === l.indexOf(e)) {
                                b = 3;
                                break a
                            }
                            1 === f && 0 === l.indexOf(d) && (f = 2)
                        }
                    }
                    b = f
                } else
                b = a;
            return b
        };
    var Sl = function(a, b, c) {
            if (m[a.functionName])
                return b.Fe && G(b.Fe), m[a.functionName];
            var d = Rl();
            m[a.functionName] = d;
            if (a.dd)
                for (var e = 0; e < a.dd.length; e++)
                    m[a.dd[e]] = m[a.dd[e]] || Rl();
            a.od && void 0 === m[a.od] && (m[a.od] = c);
            Ab(Ql("https://", "http://", a.Ke), b.Fe, b.Ki);
            return d
        },
        Rl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Tl = {
            functionName: "_googWcmImpl",
            od: "_googWcmAk",
            Ke: "www.gstatic.com/wcm/loader.js"
        },
        Ul = {
            functionName: "_gaPhoneImpl",
            od: "ga_wpid",
            Ke: "www.gstatic.com/gaphone/loader.js"
        },
        Vl = {
            Mg: "",
            Lh: "5"
        },
        Wl = {
            functionName: "_googCallTrackingImpl",
            dd: [Ul.functionName, Tl.functionName],
            Ke: "www.gstatic.com/call-tracking/call-tracking_" + (Vl.Mg || Vl.Lh) + ".js"
        },
        Xl = {},
        Yl = function(a, b, c, d) {
            Cd(22);
            if (c) {
                d = d || {};
                var e = Sl(Tl, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Na && (f.autoreplace = c);
                e(2, d.Na, f, c, 0, Pa(), d.options)
            }
        },
        Zl = function(a, b, c, d) {
            Cd(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Pa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Xl[g.id] ||
                    (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = {
                        ak: g.K[0],
                        cl: g.K[1]
                    }, Xl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                        gaWpid: g.containerId
                    }, Xl[g.id] = !0))
                }
                (e.gaData || e.adData) && Sl(Wl, d)(d.Na, e, d.options)
            }
        },
        $l = function() {
            var a = !1;
            return a
        },
        am = function(a, b) {
            if (a)
                if (Lk()) {} else {
                    if (ta(a)) {
                        var c =
                        Ml(a);
                        if (!c)
                            return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(M.uh);
                    if (f && va(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = Ml(f[g]);
                            k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var l = b.getWithConfig(M.tf),
                            n;
                        if (l) {
                            va(l) ? n = l : n = [l];
                            var p = b.getWithConfig(M.rf),
                                r = b.getWithConfig(M.sf),
                                u = b.getWithConfig(M.uf),
                                t = b.getWithConfig(M.th),
                                q = p || r,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d)
                                        Zl(d, n[x], t, {
                                            Na: q,
                                            options: u
                                        });
                                    else if ("AW" === a.prefix &&
                                    a.K[1])
                                        $l() ? Zl([a], n[x], t || "US", {
                                            Na: q,
                                            options: u
                                        }) : Yl(a.K[0], a.K[1], n[x], {
                                            Na: q,
                                            options: u
                                        });
                                    else if ("UA" === a.prefix)
                                        if ($l())
                                            Zl([a], n[x], t || "US", {
                                                Na: q
                                            });
                                        else {
                                            var z = a.containerId,
                                                w = n[x],
                                                y = {
                                                    Na: q
                                                };
                                            Cd(23);
                                            if (w) {
                                                y = y || {};
                                                var A = Sl(Ul, y, z),
                                                    C = {};
                                                void 0 !== y.Na ? C.receiver = y.Na : C.replace = w;
                                                C.ga_wpid = z;
                                                C.destination = w;
                                                A(2, Pa(), C)
                                            }
                                        }
                        }
                    }
                }
        };
    var gn = function() {
            var a = !0;
            vl(7) && vl(9) && vl(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !fn() && (a = !1);
            return a
        },
        fn = function() {
            var a = !0;
            vl(3) && vl(4) || (a = !1);
            return a
        };
    var ln = function(a, b) {
            var c = b.getWithConfig(M.Ja),
                d = b.getWithConfig(M.Ta),
                e = b.getWithConfig(c);
            if (void 0 === e) {
                var f = void 0;
                hn.hasOwnProperty(c) ? f = hn[c] : jn.hasOwnProperty(c) && (f = jn[c]);
                1 === f && (f = kn(c));
                ta(f) ? ej()(function() {
                    var g = ej().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else
                d(e);
        },
        mn = function(a, b) {
            var c = a[M.Wb];
            hj(b + ".", a[M.M] || "", void 0 === c ? !!a.use_anchor : "fragment" === c, !!a[M.Fb])
        },
        qn = function(a, b, c) {
            if (Zd() && (!c.isGtmEvent || !nn[a])) {
                var d =
                    !je(M.H),
                    e = function() {
                        var f,
                            g,
                            k = ej(),
                            l = on(b, "", c),
                            n,
                            p = l.fa._useUp;
                        if (c.isGtmEvent || pn(b, l.fa)) {
                            var r = !0;
                            if (c.isGtmEvent) {
                                f = "gtm" + tf();
                                g = l.fa;
                                l.gtmTrackerName && (g.name = f);
                                r = !1;
                                r = !0;
                            }
                            r && k(function() {
                                var t = k.getByName(b);
                                t && (n = t.get("clientId"));
                                c.isGtmEvent || k.remove(b)
                            });
                            k("create", a, c.isGtmEvent ? g : l.fa);
                            d && je(M.H) && (d = !1, k(function() {
                                var t = ej().getByName(c.isGtmEvent ? f : b);
                                !t || t.get("clientId") == n && p || (c.isGtmEvent ? l.kc["&gcu"] = "1" : l.ia["&gcu"] = "1", t.set(l.kc), c.isGtmEvent ? t.send("pageview") : t.send("pageview", l.ia))
                            }));
                            c.isGtmEvent && k(function() {
                                k.remove(f)
                            })
                        }
                    };
                de(e, M.H);
                de(e, M.C);
                c.isGtmEvent &&
                (nn[a] = !0)
            }
        },
        zn = function(a, b, c) {
            function d() {
                var O = c.getWithConfig("custom_map");
                k(function() {
                    if (!c.isGtmEvent && Sb(O)) {
                        var K = q.ia,
                            L = l().getByName(n),
                            N;
                        for (N in O)
                            if (O.hasOwnProperty(N) && /^(dimension|metric)\d+$/.test(N) && void 0 != O[N]) {
                                var J = L.get(kn(O[N]));
                                rn(K, N, J)
                            }
                    }
                })
            }
            function e() {
                if (q.displayfeatures) {
                    var O = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: O
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                k = c.isGtmEvent ? gj(c.getWithConfig("gaFunctionName")) :
                gj();
            if (sa(k)) {
                var l = ej,
                    n;
                c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(O) {
                        var K = [].slice.call(arguments, 0);
                        K[0] = n ? n + "." + K[0] : "" + K[0];
                        k.apply(window, K)
                    },
                    r = function(O) {
                        var K = function(T, X) {
                                for (var S = 0; X && S < X.length; S++)
                                    p(T, X[S])
                            },
                            L = c.isGtmEvent,
                            N = L ? sn(q) : tn(b, c);
                        if (N) {
                            var J = {};
                            Kk() && O && (J._x_19 = O);
                            p("require", "ec", "ec.js", J);
                            L && N.qe && p("set", "&cu", N.qe);
                            var I = N.action;
                            if (L || "impressions" === I)
                                if (K("ec:addImpression", N.gg), !L)
                                    return;
                            if ("promo_click" === I || "promo_view" === I || L && N.xc) {
                                var V = N.xc;
                                K("ec:addPromo", V);
                                if (V && 0 < V.length && "promo_click" === I) {
                                    L ? p("ec:setAction", I, N.Ya) : p("ec:setAction", I);
                                    return
                                }
                                if (!L)
                                    return
                            }
                            "promo_view" !== I && "impressions" !== I && (K("ec:addProduct", N.rb), p("ec:setAction", I, N.Ya))
                        }
                    },
                    u = function(O) {
                        if (O) {
                            var K = {};
                            if (Sb(O))
                                for (var L in un)
                                    un.hasOwnProperty(L) && vn(un[L], L, O[L], K);
                            p("require", "linkid", K)
                        }
                    },
                    t = function() {
                        if (Lk()) {} else {
                            var O =
                            c.getWithConfig(M.sh);
                            O && (p("require", O, {
                                dataLayer: "dataLayer"
                            }), p("require", "render"))
                        }
                    },
                    q = on(n, b, c),
                    v = function(O, K, L) {
                        L && (K = "" + K);
                        q.ia[O] = K
                    };
                !c.isGtmEvent && pn(n, q.fa) && (k(function() {
                    l() && l().remove(n)
                }), wn[n] = !1);
                k("create", f, q.fa);
                if (q.fa._x_19 && !c.isGtmEvent) {
                    var x = Ik(q.fa._x_19, "/analytics.js");
                    x && (g = x)
                }
                if (c.isGtmEvent ? q.kc._x_19 : q.fa._x_19) {
                    var z = c.isGtmEvent ? q.kc._x_20 : q.fa._x_20;
                    z && !wn[n] && (wn[n] = !0, k(lj(n, z)))
                }
                c.isGtmEvent ? q.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
                u(q.linkAttribution));
                var w = q[M.ma];
                w && w[M.M] && mn(w, n);
                p("set", q.kc);
                c.isGtmEvent && q.enableLinkId && p("require", "linkid", "linkid.js");
                c.isGtmEvent && Zd() && qn(f, n, c);
                var y = q.fa._x_19 ? q.fa._x_19 : void 0;
                if (b === M.Rb)
                    if (c.isGtmEvent) {
                        e();
                        if (q.remarketingLists) {
                            var A = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: A
                            })
                        }
                        r(y);
                        p("send", "pageview");
                        q.fa._useUp && ij(n + ".")
                    } else
                        t(),
                        p("send", "pageview", q.ia);
                else
                    b === M.ya ? (t(), am(f, c), c.getWithConfig(M.Xa) && (ki(["aw", "dc"]), ij(n + ".")),
                    0 != q.sendPageView && p("send", "pageview", q.ia), qn(f, n, c)) : b === M.Ha ? ln(n, c) : "screen_view" === b ? p("send", "screenview", q.ia) : "timing_complete" === b ? (q.ia.hitType = "timing", v("timingCategory", q.eventCategory, !0), c.isGtmEvent ? v("timingVar", q.timingVar, !0) : v("timingVar", q.name, !0), v("timingValue", Fa(q.value)), void 0 !== q.eventLabel && v("timingLabel", q.eventLabel, !0), p("send", q.ia)) : "exception" === b ? p("send", "exception", q.ia) : "optimize.callback" === b || "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (q.ia.hitType =
                    "social", v("socialNetwork", q.socialNetwork, !0), v("socialAction", q.socialAction, !0), v("socialTarget", q.socialTarget, !0)) : ((c.isGtmEvent || xn[b]) && r(y), c.isGtmEvent && e(), q.ia.hitType = "event", v("eventCategory", q.eventCategory, !0), v("eventAction", q.eventAction || b, !0), void 0 !== q.eventLabel && v("eventLabel", q.eventLabel, !0), void 0 !== q.value && v("eventValue", Fa(q.value))), p("send", q.ia));
                var C = !1;
                var F = yn;
                C && (F = c.getContainerTypeLoaded("UA"));
                if (!F && !c.isGtmEvent) {
                    yn = !0;
                    C && c.setContainerTypeLoaded("UA", !0);
                    $i();
                    var E = function() {
                            C && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure()
                        },
                        D = function() {
                            l().loaded || E()
                        };
                    Lk() ? G(D) : Ab(g, D, E)
                }
            } else
                G(c.onFailure)
        },
        An = function(a, b, c, d) {
            ne(function() {
                zn(a, b, d)
            }, [M.H, M.C])
        },
        Cn = function(a, b) {
            function c(f) {
                function g(p, r) {
                    for (var u = 0; u < r.length; u++) {
                        var t = r[u];
                        if (f[t]) {
                            l[p] = f[t];
                            break
                        }
                    }
                }
                function k() {
                    if (f.category)
                        l.category = f.category;
                    else {
                        for (var p = "", r = 0; r <
                        Bn.length; r++)
                            void 0 !== f[Bn[r]] && (p && (p += "/"), p += f[Bn[r]]);
                        p && (l.category = p)
                    }
                }
                var l = H(f),
                    n = !1;
                if (n || b)
                    g("id", ["id", "item_id", "promotion_id"]),
                    g("name", ["name", "item_name", "promotion_name"]),
                    g("brand", ["brand", "item_brand"]),
                    g("variant", ["variant", "item_variant"]),
                    g("list", ["list_name", "item_list_name"]),
                    g("position", ["list_position", "creative_slot", "index"]),
                    k();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return l
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++)
                a[e] && Sb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0
        },
        Dn = function(a) {
            return je(a)
        },
        En = !1;
    var Fn = !1;
    var yn,
        wn = {},
        nn = {},
        hn = Object.freeze({
            client_id: 1,
            client_storage: "storage",
            conversion_linker: "storeGac",
            cookie_domain: 1,
            cookie_expires: 1,
            cookie_flags: 1,
            cookie_name: 1,
            cookie_path: 1,
            cookie_update: 1,
            sample_rate: 1,
            site_speed_sample_rate: 1,
            store_gac: 1,
            use_amp_client_id: 1
        }),
        Gn = Object.freeze({
            _cd2l: 1,
            _cs: 1,
            _useUp: 1,
            allowAnchor: 1,
            allowLinker: 1,
            alwaysSendReferrer: 1,
            clientId: 1,
            cookieDomain: 1,
            cookieExpires: 1,
            cookieFlags: 1,
            cookieName: 1,
            cookiePath: 1,
            cookieUpdate: 1,
            legacyCookieDomain: 1,
            legacyHistoryImport: 1,
            name: 1,
            sampleRate: 1,
            siteSpeedSampleRate: 1,
            storage: 1,
            storeGac: 1,
            useAmpClientId: 1
        }),
        Hn = {
            anonymize_ip: 1
        },
        jn = Object.freeze({
            campaign: {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            },
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_location: "location",
            page_path: "page",
            page_referrer: "referrer",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        }),
        In = Object.freeze({
            content_id: 1,
            event_action: 1,
            event_category: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1
        }),
        Jn = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        Bn = Object.freeze(["item_category", "item_category2",
        "item_category3", "item_category4", "item_category5"]),
        un = Object.freeze({
            cookie_expires: "duration",
            cookie_name: 1,
            levels: 1
        }),
        Kn = Object.freeze({
            anonymize_ip: 1,
            conversion_linker: 1,
            fatal: 1,
            non_interaction: 1,
            send_page_view: 1,
            store_gac: 1,
            use_amp_client_id: 1
        }),
        vn = function(a, b, c, d) {
            if (void 0 !== c)
                if (Kn[b] && (c = Ia(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a)
                    d[kn(b)] = c;
                else if (ta(a))
                    d[a] = c;
                else
                    for (var e in a)
                        a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        kn = function(a) {
            return a && ta(a) ? a.replace(/(_[a-z])/g,
            function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        Ln = {},
        xn = Object.freeze((Ln.checkout_progress = 1, Ln.select_content = 1, Ln.set_checkout_option = 1, Ln[M.yb] = 1, Ln[M.zb] = 1, Ln[M.eb] = 1, Ln[M.Sa] = 1, Ln[M.fb] = 1, Ln[M.ra] = 1, Ln[M.Ab] = 1, Ln[M.sa] = 1, Ln)),
        Mn = {},
        Nn = Object.freeze((Mn.checkout_progress = 1, Mn.set_checkout_option = 1, Mn[M.We] = 1, Mn[M.yb] = 1, Mn[M.zb] = 1, Mn[M.eb] = 1, Mn[M.ra] = 1, Mn[M.Ab] = 1, Mn[M.Xe] = 1, Mn)),
        On = {},
        Pn = Object.freeze((On.generate_lead = 1, On.login = 1, On.search = 1, On.select_content = 1, On.share = 1, On.sign_up = 1, On.view_search_results =
        1, On[M.Sa] = 1, On[M.fb] = 1, On[M.sa] = 1, On)),
        Qn = function(a) {
            var b = "general";
            Nn[a] ? b = "ecommerce" : Pn[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Rn = {},
        Sn = Object.freeze((Rn.view_search_results = 1, Rn[M.Sa] = 1, Rn[M.fb] = 1, Rn[M.sa] = 1, Rn)),
        rn = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        Tn = function(a) {
            if (va(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        on = function(a,
        b, c) {
            function d(L, N) {
                void 0 !== N && (k[L] = N)
            }
            var e = function(L) {
                    return c.getWithConfig(L)
                },
                f = {},
                g = {},
                k = {},
                l = {},
                n = Tn(e(M.oh));
            !c.isGtmEvent && n && rn(g, "exp", n);
            k["&gtm"] = Pk(!0);
            Zd() && (l._cs = Dn);
            var p = e("custom_map");
            if (!c.isGtmEvent && Sb(p))
                for (var r in p)
                    if (p.hasOwnProperty(r) && /^(dimension|metric)\d+$/.test(r) && void 0 != p[r]) {
                        var u = e(String(p[r]));
                        void 0 !== u && rn(g, r, u)
                    }
            for (var t = cf(c), q = 0; q < t.length; ++q) {
                var v = t[q];
                if (c.isGtmEvent) {
                    var x = e(v);
                    Jn.hasOwnProperty(v) ? f[v] = x : Gn.hasOwnProperty(v) ? l[v] = x : "currencyCode" !=
                    v && (k[v] = x)
                } else {
                    var z = void 0;
                    z = v !== M.aa ? e(v) : df(c, v);
                    if (In.hasOwnProperty(v))
                        vn(In[v], v, z, f);
                    else if (Hn.hasOwnProperty(v))
                        vn(Hn[v], v, z, k);
                    else if (jn.hasOwnProperty(v))
                        vn(jn[v], v, z, g);
                    else if (hn.hasOwnProperty(v))
                        vn(hn[v], v, z, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v))
                        vn(1, v, z, g);
                    else if (v === M.aa) {
                        if (!En) {
                            var w = Xa(z);
                            w && (g["&did"] = w)
                        }
                        if (Fn) {
                            var y = Xa(df(c, v, 1), ".");
                            y && (g["&gdid"] = y);
                            var A = Xa(df(c, v, 2), ".");
                            A && (g["&edid"] = A)
                        }
                    } else
                        v === M.la && 0 > wa(t, M.Jc) && (l.cookieName = z + "_ga")
                }
            }
            !1 !==
            e(M.eh) && !1 !== e(M.Sb) && gn() || (k.allowAdFeatures = !1);
            if (!1 === e(M.za) || !fn()) {
                var C = c.isGtmEvent ? "allowAdPersonalizationSignals" : "allowAdFeatures";
                C = "allowAdPersonalizationSignals";
                k[C] = !1
            }
            !c.isGtmEvent && e(M.Xa) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || f.gtmTrackerName;
                var F = k.hitCallback;
                k.hitCallback = function() {
                    sa(F) && F();
                    c.onSuccess()
                }
            } else {
                rn(l, "cookieDomain", "auto");
                rn(k, "forceSSL", !0);
                rn(f,
                "eventCategory", Qn(b));
                Sn[b] && rn(g, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? rn(f, "eventLabel", e(M.rh)) : "search" === b || "view_search_results" === b ? rn(f, "eventLabel", e(M.xh)) : "select_content" === b && rn(f, "eventLabel", e(M.ih));
                var E = f[M.ma] || {},
                    D = E[M.Eb];
                D || 0 != D && E[M.M] ? l.allowLinker = !0 : !1 === D && rn(l, "useAmpClientId", !1);
                g.hitCallback = c.onSuccess;
                l.name = a
            }
            Zd() && (k["&gcs"] = ke(), je(M.H) || (l.storage = "none"), je(M.C) || (k.allowAdFeatures = !1, l.storeGac = !1));
            var O = e(M.na) || e(M.qh),
                K = e(M.ph);
            if (O) {
                c.isGtmEvent || (l._x_19 = O);
                l._cd2l = !0;
            }
            K &&
            !c.isGtmEvent && (l._x_20 = K);
            f.ia = g;
            f.kc = k;
            f.fa = l;
            return f
        },
        sn = function(a) {
            var b = a.gtmEcommerceData;
            if (!b)
                return null;
            var c = {};
            b.currencyCode && (c.qe = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.gg = "impressions" === b.translateIfKeyEquals ? Cn(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.xc = "promoView" === b.translateIfKeyEquals ? Cn(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.xc = "promoClick" === b.translateIfKeyEquals ?
                Cn(f, !0) : f;
                c.Ya = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var k = b[g].products;
                    c.rb = "products" === b.translateIfKeyEquals ? Cn(k, !0) : k;
                    c.Ya = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        tn = function(a, b) {
            function c(t) {
                return {
                    id: d(M.Wa),
                    affiliation: d(M.lh),
                    revenue: d(M.ca),
                    tax: d(M.kf),
                    shipping: d(M.Ld),
                    coupon: d(M.mh),
                    list: d(M.Kd) || t
                }
            }
            for (var d = function(t) {
                    return b.getWithConfig(t)
                },
                e = d(M.V), f, g = 0; e && g < e.length && !(f = e[g][M.Kd]); g++)
                ;
            var k = d("custom_map");
            if (Sb(k))
                for (var l = 0; e && l < e.length; ++l) {
                    var n = e[l],
                        p;
                    for (p in k)
                        k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && rn(n, p, n[k[p]])
                }
            var r = null,
                u = d(M.nh);
            a === M.ra || a === M.Ab ? r = {
                action: a,
                Ya: c(),
                rb: Cn(e)
            } : a === M.yb ? r = {
                action: "add",
                rb: Cn(e)
            } : a === M.zb ? r = {
                action: "remove",
                rb: Cn(e)
            } : a === M.sa ? r = {
                action: "detail",
                Ya: c(f),
                rb: Cn(e)
            } : a === M.Sa ? r = {
                action: "impressions",
                gg: Cn(e)
            } : "view_promotion" === a ? r = {
                action: "promo_view",
                xc: Cn(u)
            } :
            "select_content" === a && u && 0 < u.length ? r = {
                action: "promo_click",
                xc: Cn(u)
            } : "select_content" === a ? r = {
                action: "click",
                Ya: {
                    list: d(M.Kd) || f
                },
                rb: Cn(e)
            } : a === M.eb || "checkout_progress" === a ? r = {
                action: "checkout",
                rb: Cn(e),
                Ya: {
                    step: a === M.eb ? 1 : d(M.jf),
                    option: d(M.hf)
                }
            } : "set_checkout_option" === a && (r = {
                action: "checkout_option",
                Ya: {
                    step: d(M.jf),
                    option: d(M.hf)
                }
            });
            r && (r.qe = d(M.ba));
            return r
        },
        Un = {},
        pn = function(a, b) {
            var c = Un[a];
            Un[a] = H(b);
            if (!c)
                return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d])
                    return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) &&
                c[e] !== b[e])
                    return !0;
            return !1
        };
    var Vn = !1;
    Vn = !0;
    function Wn() {
        var a = P;
        return a.gcq = a.gcq || new Xn
    }
    var Yn = function(a, b, c) {
            Wn().register(a, b, c)
        },
        Zn = function(a, b, c, d) {
            Wn().push("event", [b, a], c, d)
        },
        $n = function(a, b) {
            Wn().push("config", [a], b)
        },
        ao = function(a, b, c, d) {
            Wn().push("get", [a, b], c, d)
        },
        bo = {},
        co = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.B = null;
            this.m = !1
        },
        eo = function(a, b, c, d, e) {
            this.type = a;
            this.B = b;
            this.P = c || "";
            this.m = d;
            this.o = e
        },
        Xn = function() {
            this.o = {};
            this.B = {};
            this.m = [];
            this.D = {
                AW: !1,
                UA: !1
            }
        },
        fo = function(a, b) {
            var c = Ml(b);
            return a.o[c.containerId] =
            a.o[c.containerId] || new co
        },
        go = function(a, b, c) {
            if (b) {
                var d = Ml(b);
                if (d && 1 === fo(a, b).status) {
                    fo(a, b).status = 2;
                    var e = {};
                    Xj && (e.timeoutId = m.setTimeout(function() {
                        Cd(38);
                        Dj()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    bo[d.containerId] = h();
                    if (Lk()) {} else {
                        var g =
                        "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c";
                        Kk() && (g += "&sign=" + ff.ad);
                        var k = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            l = Ik(c, g) || k;
                        Ab(l)
                    }
                }
            }
        },
        ho = function(a, b, c, d) {
            if (d.P) {
                var e = fo(a, d.P),
                    f = e.B;
                if (f) {
                    var g = H(c),
                        k = H(e.targetConfig[d.P]),
                        l = H(e.containerConfig),
                        n = H(e.remoteConfig),
                        p = H(a.B),
                        r = Af("gtm.uniqueEventId"),
                        u = Ml(d.P).prefix,
                        t = Ra(function() {
                            var v = g[M.Cb];
                            v && G(v)
                        }),
                        q = af($e(bf(Ze(Xe(Ye(We(Ve(Ne(g), k), l), n), p), function() {
                            kk(r, u, "2");
                            Vn && t()
                        }), function() {
                            kk(r, u, "3");
                            Vn && t()
                        }), function(v, x) {
                            a.D[v] = x
                        }), function(v) {
                            return a.D[v]
                        });
                    try {
                        kk(r, u, "1");
                        f(d.P, b, d.B, q)
                    } catch (v) {
                        kk(r, u, "4");
                    }
                }
            }
        };
    Xn.prototype.register = function(a, b, c) {
        var d = fo(this, a);
        if (3 !== d.status) {
            d.B = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), d.remoteConfig = c);
            var e = Ml(a),
                f = bo[e.containerId];
            if (void 0 !== f) {
                var g = P[e.containerId].bootstrap,
                    k = e.prefix.toUpperCase();
                P[e.containerId]._spx && (k = k.toLowerCase());
                var l = Af("gtm.uniqueEventId"),
                    n = k,
                    p = h() - g;
                if (Xj && !Ij[l]) {
                    l !== Ej && (zj(), Ej = l);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Mj = Mj ? Mj + "," + r : "&cl=" + r
                }
                delete bo[e.containerId]
            }
            this.flush()
        }
    };
    Xn.prototype.push = function(a, b, c, d) {
        var e = Math.floor(h() / 1E3);
        go(this, c, b[0][M.na] || this.B[M.na]);
        c && fo(this, c).m && (d = !1);
        this.m.push(new eo(a, e, c, b, d));
        d || this.flush()
    };
    Xn.prototype.insert = function(a, b, c) {
        var d = Math.floor(h() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new eo(a, d, c, b, !1)) : this.m.push(new eo(a, d, c, b, !1))
    };
    Xn.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o)
                !f.P || fo(this, f.P).m ? (f.o = !1, this.m.push(f)) : c.push(f),
                this.m.shift();
            else {
                switch (f.type) {
                case "require":
                    if (3 !== fo(this, f.P).status && !a) {
                        this.m.push.apply(this.m, c);
                        return
                    }
                    Xj && m.clearTimeout(f.m[0].timeoutId);
                    break;
                case "set":
                    Da(f.m[0], function(u, t) {
                        H(Va(u, t), b.B)
                    });
                    break;
                case "config":
                    e.Ga = {};
                    Da(f.m[0], function(u) {
                        return function(t, q) {
                            H(Va(t, q), u.Ga)
                        }
                    }(e));
                    var g = !!e.Ga[M.Sc];
                    delete e.Ga[M.Sc];
                    var k =
                        fo(this, f.P),
                        l = Ml(f.P),
                        n = l.containerId === l.id;
                    g || (n ? k.containerConfig = {} : k.targetConfig[f.P] = {});
                    k.m && g || ho(this, M.ya, e.Ga, f);
                    k.m = !0;
                    delete e.Ga[M.bc];
                    n ? H(e.Ga, k.containerConfig) : H(e.Ga, k.targetConfig[f.P]);
                    d = !0;
                    break;
                case "event":
                    e.Cc = {};
                    Da(f.m[0], function(u) {
                        return function(t, q) {
                            H(Va(t, q), u.Cc)
                        }
                    }(e));
                    ho(this, f.m[1], e.Cc, f);
                    break;
                case "get":
                    var p = {},
                        r = (p[M.Ja] = f.m[0], p[M.Ta] = f.m[1], p);
                    ho(this, M.Ha, r, f)
                }
                this.m.shift();
                io(this, f)
            }
            e = {
                Ga: e.Ga,
                Cc: e.Cc
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var io = function(a, b) {
        if ("require" !== b.type)
            if (b.P)
                for (var c = a.getCommandListeners(b.P)[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], k = 0; k < g.length; k++)
                                g[k]()
                    }
    };
    Xn.prototype.getRemoteConfig = function(a) {
        return fo(this, a).remoteConfig
    };
    Xn.prototype.getCommandListeners = function(a) {
        return fo(this, a).o
    };
    var jo = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Mb(a, "className"),
                "gtm.elementId": a["for"] || Gb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Mb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Mb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        ko = function(a) {
            P.hasOwnProperty("autoEventsSettings") || (P.autoEventsSettings = {});
            var b = P.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        lo = function(a, b, c) {
            ko(a)[b] = c
        },
        mo = function(a, b, c, d) {
            var e = ko(a),
                f = Qa(e, b, d);
            e[b] = c(f)
        },
        no = function(a, b, c) {
            var d = ko(a);
            return Qa(d, b, c)
        };
    var xo = !1,
        yo = [];
    function zo() {
        if (!xo) {
            xo = !0;
            for (var a = 0; a < yo.length; a++)
                G(yo[a])
        }
    }
    var Ao = function(a) {
        xo ? G(a) : yo.push(a)
    };
    function Bo(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Co = new za;
    function Do(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Co.get(e);
            f || (f = new RegExp(b, d), Co.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function Eo(a, b) {
        function c(g) {
            var k = $f(g),
                l = Yf(k, "protocol"),
                n = Yf(k, "host", !0),
                p = Yf(k, "port"),
                r = Yf(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p)
                l = "web",
                p = "default";
            return [l, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function Fo(a) {
        return Go(a) ? 1 : 0
    }
    function Go(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && va(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = H(a, {});
                H({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Fo(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var f;
            a:
            {
                if (b) {
                    var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                    try {
                        for (var k = 0; k < g.length; k++)
                            if (b[g[k]]) {
                                f = b[g[k]](c);
                                break a
                            }
                    } catch (n) {}
                }
                f = !1
            }return f;
        case "_ew":
            return Bo(b, c);
        case "_eq":
            return String(b) ==
            String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            var l;
            l = String(b).split(",");
            return 0 <= wa(l, String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            return Do(b, c, a.ignore_case);
        case "_sw":
            return 0 == String(b).indexOf(String(c));
        case "_um":
            return Eo(b, c)
        }
        return !1
    }
    ;
    Object.freeze({
        dl: 1,
        id: 1
    });
    var Ho = {},
        Io = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = Ho[b[c]] || [];
                Ho[b[c]] = d;
                0 > wa(d, a) && d.push(a)
            }
        },
        Jo = function(a) {
            Da(Ho, function(b, c) {
                var d = wa(c, a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Ko = "HA GF G UA AW DC".split(" "),
        Lo = !1;
    Lo = !0;
    var Mo = !1,
        No = !1;
    function Oo(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = H(b), b[M.Cb] && (c.eventCallback = b[M.Cb]), b[M.Mc] && (c.eventTimeout = b[M.Mc]));
        return c
    }
    function Po(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: tf()
        });
        return a["gtm.uniqueEventId"]
    }
    function Qo() {
        if (!Mo && !P.gtagRegistered) {
            Mo = P.gtagRegistered = !0;
            P.addTargetToGroup = function(c) {
                Io(c, "default")
            };
        }
        return Mo
    }
    var Ro = {
            config: function(a) {
                var b,
                    c = Po(a);
                if (2 > a.length || !ta(a[1]))
                    return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Sb(a[2]) || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = Ml(a[1]);
                if (!e)
                    return;
                Jo(e.id);
                Io(e.id, d[M.Pd] || "default");
                delete d[M.Pd];
                No || Cd(43);
                if (Qo() && -1 !== wa(Ko, e.prefix)) {
                    "G" === e.prefix && (d[M.bc] = !0);
                    Lo && delete d[M.Cb];
                    $n(d, e.id);
                    return
                }
                Df("gtag.targets." + e.id, void 0);
                Df("gtag.targets." + e.id, H(d));
                var f = {};
                f[M.kb] = e.id;
                b = Oo(M.ya, f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function(a) {
                function b() {
                    Qo() && H(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Cd(39);
                    var c = tf(),
                        d = a[1];
                    "default" === d ? (b(), ge(a[2])) : "update" === d && (b(), ie(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && ta(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Sb(a[2]) && void 0 != a[2] || 3 < a.length)
                            return;
                        c = a[2]
                    }
                    var d = Oo(b, c),
                        e = Po(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[M.kb];
                    void 0 === g && (g = Af(M.kb, 2), void 0 === g && (g = "default"));
                    if (ta(g) || va(g)) {
                        for (var k = g.toString().replace(/\s+/g,
                            "").split(","), l = [], n = 0; n < k.length; n++)
                            if (0 <= k[n].indexOf("-"))
                                l.push(k[n]);
                            else {
                                var p = Ho[k[n]];
                                p && p.length && (l = l.concat(p))
                            }
                        f = Ol(l)
                    } else
                        f = void 0;
                    var r = f;
                    if (!r)
                        return;
                    for (var u = Qo(), t = [], q = 0; u && q < r.length; q++) {
                        var v = r[q];
                        if (-1 !== wa(Ko, v.prefix)) {
                            var x = H(c);
                            "G" === v.prefix && (x[M.bc] = !0);
                            Lo && delete x[M.Cb];
                            Zn(b, x, v.id)
                        }
                        t.push(v.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < r.length ? d.eventModel[M.kb] = t.join() : delete d.eventModel[M.kb];
                    No || Cd(43);
                    return d
                }
            },
            get: function(a) {
                Cd(53);
                if (4 !== a.length || !ta(a[1]) || !ta(a[2]) || !sa(a[3]))
                    return;
                var b = Ml(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b)
                    return;
                No || Cd(43);
                if (!Qo() || -1 === wa(Ko, b.prefix))
                    return;
                tf();
                var e = {};
                pk(H((e[M.Ja] = c, e[M.Ta] = d, e)));
                ao(c, function(f) {
                    G(function() {
                        return d(f)
                    })
                }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    No = !0;
                    Qo();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Po(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Sb(a[1]) ?
                b = H(a[1]) : 3 == a.length && ta(a[1]) && (b = {}, Sb(a[2]) || va(a[2]) ? b[a[1]] = H(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (tf(), Qo()) {
                        H(b);
                        var c = H(b);
                        Wn().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        So = {
            policy: !0
        };
    var To = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(), c.end = null)
            }
        },
        Vo = function(a) {
            var b = Uo(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var lp = function(a) {
        if (kp(a))
            return a;
        this.m = a
    };
    lp.prototype.ri = function() {
        return this.m
    };
    var kp = function(a) {
        return !a || "object" !== Qb(a) || Sb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    lp.prototype.getUntrustedUpdateValue = lp.prototype.ri;
    var mp = [],
        np = !1,
        op = !1,
        pp = function(a) {
            return m["dataLayer"].push(a)
        },
        qp = function(a, b) {
            var c = P["dataLayer"],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = m.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };
    function rp(a) {
        var b = a._clear;
        Da(a, function(d, e) {
            "_clear" !== d && (b && Df(d, void 0), Df(d, e))
        });
        of || (of = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        c || (c = tf(), a["gtm.uniqueEventId"] = c, Df("gtm.uniqueEventId", c));
        return Gk(a)
    }
    function sp() {
        var a = mp[0];
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Ea(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b)
                return !0
        }
        return !1
    }
    function tp() {
        for (var a = !1; !op && 0 < mp.length;) {
            if (!np && sp()) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d);
                var f = mp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                mp.unshift(c, e);
                np = !0
            }
            op = !0;
            delete xf.eventModel;
            zf();
            var g = mp.shift();
            if (null != g) {
                var k = kp(g);
                if (k) {
                    var l = g;
                    g = kp(l) ? l.getUntrustedUpdateValue() : void 0;
                    for (var n = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], p = 0; p < n.length; p++) {
                        var r = n[p],
                            u = Af(r, 1);
                        if (va(u) || Sb(u))
                            u = H(u);
                        yf[r] = u
                    }
                }
                try {
                    if (sa(g))
                        try {
                            g.call(Bf)
                        } catch (A) {}
                    else if (va(g)) {
                        var t = g;
                        if (ta(t[0])) {
                            var q = t[0].split("."),
                                v = q.pop(),
                                x = t.slice(1),
                                z = Af(q.join("."), 2);
                            if (void 0 !== z && null !== z)
                                try {
                                    z[v].apply(z, x)
                                } catch (A) {}
                        }
                    } else {
                        if (Ea(g)) {
                            a:
                            {
                                var w = g;
                                if (w.length &&
                                ta(w[0])) {
                                    var y = Ro[w[0]];
                                    if (y && (!k || !So[w[0]])) {
                                        g = y(w);
                                        break a
                                    }
                                }
                                g = void 0
                            }if (!g) {
                                op = !1;
                                continue
                            }
                        }
                        a = rp(g) || a
                    }
                } finally {
                    k && zf(!0)
                }
            }
            op = !1
        }
        return !a
    }
    function up() {
        var b = tp();
        try {
            To(m["dataLayer"], ff.I)
        } catch (c) {}
        return b
    }
    var wp = function() {
            var a = wb("dataLayer", []),
                b = wb("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Si(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Ao(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < P.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++)
                        e[f] = new lp(arguments[f])
                } else
                    e = [].slice.call(arguments, 0);
                var g = c.apply(a, e);
                mp.push.apply(mp, e);
                if (300 <
                this.length)
                    for (Cd(4); 300 < this.length;)
                        this.shift();
                var k = "boolean" !== typeof g || g;
                return tp() && k
            };
            var d = a.slice(0);
            mp.push.apply(mp, d);
            if (vp()) {
                G(up)
            }
        },
        vp = function() {
            var a = !0;
            return a
        };
    var xp = {};
    xp.Wc = new String("undefined");
    var Kp = m.clearTimeout,
        Lp = m.setTimeout,
        R = function(a, b, c) {
            if (Lk()) {
                b && G(b)
            } else
                return Ab(a, b, c, void 0)
        },
        Mp = function() {
            return new Date
        },
        Np = function() {
            return m.location.href
        },
        Op = function(a) {
            return Yf($f(a), "fragment")
        },
        Pp = function(a) {
            return Zf($f(a))
        },
        Qp = function(a, b) {
            return Af(a, b || 2)
        },
        Rp = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = pp(a)) : d = pp(a);
            return d
        },
        Sp = function(a, b) {
            m[a] = b
        },
        U = function(a,
        b, c) {
            b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
            return m[a]
        },
        Tp = function(a, b, c) {
            return Bg(a, b, void 0 === c ? !0 : !!c)
        },
        Up = function(a, b, c) {
            return 0 === Pg(a, b, c)
        },
        Vp = function(a, b) {
            if (Lk()) {
                b && G(b)
            } else
                Cb(a, b)
        },
        Wp = function(a) {
            return !!no(a, "init", !1)
        },
        Xp = function(a) {
            lo(a, "init", !0)
        },
        Yp = function(a) {
            var b = mf,
                c = "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            Kk() && (c += "&sign=" + ff.ad, vb && (b = vb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = Ql("https://", "http://", b + c);
            R(d)
        },
        Zp = function(a, b, c) {
            Xj && (Tb(a) || lk(c, b, a))
        };
    var wq = encodeURI,
        Y = encodeURIComponent,
        xq = Db;
    var yq = function(a, b) {
        if (!a)
            return !1;
        var c = Yf($f(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    };
    var zq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    function hs() {
        return m.gaGlobal = m.gaGlobal || {}
    }
    var is = function() {
            var a = hs();
            a.hid = a.hid || ya();
            return a.hid
        },
        js = function(a, b) {
            var c = hs();
            if (void 0 == c.vid || b && !c.from_cookie)
                c.vid = a,
                c.from_cookie = b
        };
    var Ks = function() {
        if (sa(m.__uspapi)) {
            var a = "";
            try {
                m.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var jt = window,
        kt = document,
        lt = function(a) {
            var b = jt._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === jt["ga-disable-" + a])
                return !0;
            try {
                var c = jt.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                    return !0
            } catch (f) {}
            for (var d = xg("AMP_TOKEN", String(kt.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e])
                    return !0;
            return kt.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var mt = {};
    function pt(a) {
        delete a.eventModel[M.bc];
        rt(a.eventModel)
    }
    var rt = function(a) {
        Da(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[M.Ka] || {};
        Da(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var ut = function(a, b, c) {
            Zn(b, c, a)
        },
        vt = function(a, b, c) {
            Zn(b, c, a, !0)
        },
        zt = function(a, b) {};
    function wt(a, b) {}
    var Z = {
        g: {}
    };





    Z.g.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.h = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0
        })(function(a) {
            var b = String(Gf(a.vtp_gtmEventId, "event"));
            a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
            return b
        })
    }();
    Z.g.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.h = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0
        })(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = Qp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                d = void 0 !== c ? c : a.vtp_defaultValue;
            Zp(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();
    Z.g.rep = ["google"],
    function() {
        (function(a) {
            Z.__rep = a;
            Z.__rep.h = "rep";
            Z.__rep.isVendorTemplate = !0;
            Z.__rep.priorityOverride = 0
        })(function(a) {
            var b;
            switch (Ml(a.vtp_containerId).prefix) {
            case "AW":
                b = Cm;
                break;
            case "DC":
                b = Sm;
                break;
            case "GF":
                b = Xm;
                break;
            case "HA":
                b = bn;
                break;
            case "UA":
                b = An;
                break;
            default:
                G(a.vtp_gtmOnFailure);
                return
            }
            G(a.vtp_gtmOnSuccess);
            Yn(a.vtp_containerId, b, a.vtp_remoteConfig || {})
        })
    }();

    Z.g.cid = ["google"],
    function() {
        (function(a) {
            Z.__cid = a;
            Z.__cid.h = "cid";
            Z.__cid.isVendorTemplate = !0;
            Z.__cid.priorityOverride = 0
        })(function() {
            return ff.I
        })
    }();







    Z.g.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.h = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0
        })(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? vt : ut)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();





    Z.g.gtagua = ["google"],
    function() {
        (function(a) {
            Z.__gtagua = a;
            Z.__gtagua.h = "gtagua";
            Z.__gtagua.isVendorTemplate = !0;
            Z.__gtagua.priorityOverride = 0
        })(function(a) {
            G(a.vtp_gtmOnSuccess)
        })
    }();


    var At = {};
    At.dataLayer = Bf;
    At.callback = function(a) {
        rf.hasOwnProperty(a) && sa(rf[a]) && rf[a]();
        delete rf[a]
    };
    At.bootstrap = 0;
    At._spx = !1;
    function Bt() {
        P[ff.I] = At;
        Sa(sf, Z.g);
        Jc = Uc
    }
    function Ct() {
        var a = !1;
        a && aj("INIT");
        Hd().o();
        P = m.google_tag_manager = m.google_tag_manager || {};
        rl();
        Oh.enable_gbraid_cookie_write = !0;
        var b = !!P[ff.I];
        if (b) {
            var c = P.zones;
            c && c.unregisterChild(ff.I);
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
                Bc.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++)
                Ec.push(g[k]);
            for (var l = d.predicates || [], n = 0; n < l.length; n++)
                Dc.push(l[n]);
            for (var p = d.rules || [], r = 0; r < p.length; r++) {
                for (var u = p[r], t = {}, q = 0; q < u.length; q++)
                    t[u[q][0]] = Array.prototype.slice.call(u[q], 1);
                Cc.push(t)
            }
            Gc = Z;
            Hc = Fo;
            Bt();
            wp();
            Ni = !1;
            Oi = 0;
            if ("interactive" == B.readyState && !B.createEventObject || "complete" == B.readyState)
                Qi();
            else {
                Eb(B, "DOMContentLoaded", Qi);
                Eb(B, "readystatechange", Qi);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !m.frameElement
                    } catch (A) {}
                    v &&
                    Ri()
                }
                Eb(m, "load", Qi)
            }
            xo = !1;
            "complete" === B.readyState ? zo() : Eb(m, "load", zo);
            Xj && m.setInterval(Rj, 864E5);
            pf = (new Date).getTime();
            At.bootstrap = pf;
            if (a) {
                var y = bj("INIT");
            }
        }
    }
    (function(a) {
        function b(t) {
            if (null == t || 0 === t.length)
                return !1;
            var q = Number(t),
                v = h();
            return q < v + 3E5 && q > v - 9E5
        }
        if (!m["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (B.referrer) {
                var d = $f(B.referrer);
                c = "cct.google" === Xf(d, "host")
            }
            if (!c) {
                var e = Bg("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (m["__TAGGY_INSTALLED"] = !0, Ab("https://cct.google/taggy/agent.js"))
        }
        var g = function(t) {
                var q = "GTM",
                    v = "GTM";
                q = "OGT",
                v = "GTAG";
                var x = m["google.tagmanager.debugui2.queue"];
                x || (x = [], m["google.tagmanager.debugui2.queue"] = x, Ab("https://" + ff.xd + "/debug/bootstrap?id=" + ff.I + "&src=" + v +
                "&cond=" + t + "&gtm=" + Pk()));
                var z = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: vb,
                        containerProduct: q,
                        debug: !1,
                        id: ff.I
                    }
                };
                z.data.resume = function() {
                    a()
                };
                ff.Pg && (z.data.initialPublish = !0);
                x.push(z)
            },
            k = void 0,
            l = Yf(m.location, "query", !1, void 0, "gtm_debug"),
            n = !0;
        n = !1;
        n && "x" === l && (k = 1);
        !k && b(l) && (k = 2);
        if (!k && B.referrer) {
            var p = $f(B.referrer);
            "tagassistant.google.com" ===
            Xf(p, "host") && (k = 3)
        }
        if (!k) {
            var r = Bg("__TAG_ASSISTANT");
            r.length && r[0].length && (k = 4)
        }
        if (!k && B.documentElement.hasAttribute("data-tag-assistant-present")) {
            k = 5;
            var u = B.documentElement.getAttribute("data-tag-assistant-present");
            k = b(u) ? 5 : void 0;
        }
        k && vb ? g(k) : a()
    })(Ct);

})()
