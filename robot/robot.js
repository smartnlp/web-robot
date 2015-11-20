(function(win, options, undefined){
	//系统的一些配置，不通过new robot传参数
	var hideKefu = true											//是否隐藏人工客服
		, hideList = false 										//是否隐藏功能列表
		, cssfix = 'smartnlp-robot-'							//css类名前缀
		, cssUrl = 'robot/css/robot.css';							//远程要加载的css文件地址

	var _isMobile = false										//手机
		, _isPad = false										//平板
		, _isIphone = false										//iPhone
		, _isIE = false;										//是否IE浏览器


	//采用jquip为精简版
	var $ = (function(){
		var queryShimCdn = "http://cdnjs.cloudflare.com/ajax/libs/sizzle/1.4.4/sizzle.min.js",
			queryEngines = function(){ return win["Sizzle"] || win["qwery"]; },
			doc = document, docEl = doc.documentElement,
			scriptFns=[], load=[], sLoaded,
			runtil = /Until$/, rmultiselector = /,/,
			rparentsprev = /^(?:parents|prevUntil|prevAll)/,
			rtagname = /<([\w:]+)/,
			rclass = /[\n\t\r]/g,
			rtagSelector = /^[\w-]+$/,
			ridSelector = /^#[\w-]+$/,
			rclassSelector = /^\.[\w-]+$/,
			rspace = /\s+/,
			rdigit = /\d/,
			rnotwhite = /\S/,
			rReturn = /\r\n/g,
			rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
			rCRLF = /\r?\n/g,
			rselectTextarea = /^(?:select|textarea)/i,
			rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
			strim = String.prototype.trim, trim,
			trimLeft = /^\s+/,
			trimRight = /\s+$/,
			contains, sortOrder,
			guaranteedUnique = { children: true, contents: true, next: true, prev: true },
			toString = Object.prototype.toString,
			class2type = {},
			hasDup = false, baseHasDup = true,
			wrapMap = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				area: [1, "<map>", "</map>"],
				_default: [0, "", ""] },
			breaker = {},
			ArrayProto = Array.prototype, ObjProto = Object.prototype,
			hasOwn = ObjProto.hasOwnProperty,
			slice = ArrayProto.slice,
			push = ArrayProto.push,
			indexOf = ArrayProto.indexOf,
			nativeForEach = ArrayProto.forEach,
			nativeFilter = ArrayProto.filter,
			nativeIndexOf = ArrayProto.indexOf,
			expando = 'jq-' + (+new Date()),
			fosterNode = doc.createElement('p');

		if (rnotwhite.test("\xA0")){
			trimLeft = /^[\s\xA0]+/;
			trimRight = /[\s\xA0]+$/;
		}

		/**
		 * @constructor
		 * @param {Object|Element|string|Array.<string>} sel
		 * @param {Object=} ctx
		 */
		function J(sel, ctx){
			var ret;
			for(var i = 0, l = ctors.length; i < l; i++)
				if (ctors[i].apply(this, arguments)) return this;

			if (!sel) return this;
			if (isF(sel)){
				if (sLoaded) sel();
				else scriptFns.push(sel);
				return this;
			} else if (isA(sel)) return this['make'](sel);
			if (sel.nodeType || isWin(sel)) return this['make']([sel]);
			if (sel == "body" && !ctx && doc.body) {
				this['context'] = sel['context'];
				this[0] = doc.body;
				this.length = 1;
				this['selector'] = sel;
				return this;
			}
			if (sel['selector'] !== undefined) {
				this['context'] = sel['context'];
				this['selector'] = sel['selector'];
				return this['make'](sel);
			}
			sel = isS(sel) && sel.charAt(0) === "<"
				? (ret = rsingleTag.exec(sel))
					? [doc.createElement(ret[1])]
					: htmlFrag(sel).childNodes
				: $$((this['selector'] = sel), ctx);

			this['make'](sel);
			if (isPlainObj(ctx)) this['attr'](ctx);
			return this;
		}

		var ctors=[], plugins={}, jquid=1, _cache={_id:0}, _display = {}, p;
		function $(sel, ctx){
			return new J(sel, ctx);
		}

		p = J.prototype = $.prototype = $['fn'] = {
			constructor: $,
			'selector': "",
			'length': 0,
			dm: function(args, tbl, cb){
				var value = args[0], parent, frag, first, l, i;
				if (value){
					if (this[0]) {
						if (!(frag = (value.nodeType === 1 || value.nodeType === 3) && value)){
							parent = value && value.parentNode;
							frag = parent && parent.nodeType === 11 && parent.childNodes.length === this.length
								? parent
								: htmlFrag(value);
							first = frag.firstChild;
							if (frag.childNodes.length === 1) frag = first;
							if (!first) return this;
						}
						for (i=0, l=this.length; i<l; i++)
				cb.call(this[i],(i == 0 ? frag : frag.cloneNode(true)));
					}
				}
				return this;
			},
			/**
			 * @param {Object} els
			 * @param {string=} name
			 * @param {string=} selector
			 * */
			ps: function(els, name, selector){
				var ret = this.constructor();
				if (isA(els)) push.apply(ret, els);
				else merge(ret, els);
				ret.prevObject = this;
				ret.context = this.context;
				if (name === "find")
					ret.selector = this['selector'] + (this['selector'] ? " " : "") + selector;
				else if (name)
					ret.selector = this['selector'] + "." + name + "(" + selector + ")";
				return ret;
			}
		};

		p['make'] = function(els){
			make(this, els);
			return this;
		};
		p['toArray'] = function() {
			return slice.call(this, 0);
		};
		p['get'] = function(num){
			return isDefined(num)
				? (num < 0 ? this[this.length + num] : this[num])
				: this['toArray']();
		};
		p['add'] = function(sel, ctx){
			var set = typeof sel == "string"
				? $(sel, ctx)
				: makeArray(sel && sel.nodeType ? [sel] : sel),
				all = merge(this.get(), set);
			return this.ps(detached(set[0]) || detached(all[0]) ? all : unique(all));
		};
		function detached(el) {
			return !el || !el.parentNode || el.parentNode.nodeType == 11;
		}
		p['each'] = function(fn){
				if (!isF(fn)) return this;
				for(var i = 0, l = this.length; i < l; i++)
					if ( fn.call(this[i], i, this[i]) === false )
						break;
				return this;
		};
		p['attr'] = function(name, val){
			var el = this[0];
			return (isS(name) && val === undefined)
						? attr(el, name)
				: this['each'](function(idx){
					var nt = this.nodeType;
					if (nt !== 3 && nt !== 8 && nt !== 2){
						if (isO(name)) for(var k in name)
							if (val === null)
								this.removeAttribute(name);
							else
								this.setAttribute(k, name[k]);
						else this.setAttribute(name, isF(val) ? val.call(this, idx, this.getAttribute(name)) : val);
				}
			});
		};
		p['removeAttr'] = function(name){
			return this['each'](function(){
				if (this.nodeType == 1) this.removeAttribute(name);
			});
		};
		p['data'] = function(name, setVal){
			return	(setVal === undefined)
							? data(this[0], name)
							: this['each'](function(){
					data(this, name, setVal);
				});
		};
		p['append'] = function(){
			return this.dm(arguments, true, function(el){
				if (this.nodeType === 1)
					this.appendChild(el);
			});
		};
		p['prepend'] = function(){
			return this.dm(arguments, true, function(el){
				if (this.nodeType === 1)
					this.insertBefore(el, this.firstChild);
			});
		};
		p['before'] = function(){
			if (this[0] && this[0].parentNode) {
				return this.dm(arguments, false, function(el){
					this.parentNode.insertBefore(el, this);
				});
			}
			return this;
		};
		p['after'] = function(){
			if (this[0] && this[0].parentNode){
				return this.dm(arguments, false, function(el){
					this.parentNode.insertBefore(el, this.nextSibling);
				});
			}
			return this;
		};
		p['replaceWith'] = function(val){
			var self = this, isFunc = isF(val);
			return this['each'](function(i) {
					var next = this.nextSibling,
							parent = this.parentNode,
							value = isFunc ? val.call(this, i, this) : val;
					if (parent && parent.nodeType != 11) {
							parent.removeChild(this);
							(next ? $(next).before(value) : $(parent).append(value));
					} else { // detached
							self[i] = $(value).clone()[0];
					}
				});
		};
		p['hide'] = function(){
			return this['each'](function(){
				if (this.style.display == "none") return;
				cache(this, "display", this.style.display);
				this.style.display = "none";
			});
		};
		p['show'] = function(){
			return this['each'](function(){
				this.style.display = cache(this, "display") || display(this.tagName);
			});
		};
		p['toggle'] = function(){
			return this['each'](function(){
				var el = $(this);
				$['Expr']['hidden'](this) ? el.show() : el.hide();
			});
		};
		p['eq'] = function(i){
			return i === -1 ? this.slice(i) : this.slice(i, +i + 1);
		};
		p['first'] = function(){
			return this['eq'](0);
		};
		p['last'] = function(){
			return this['eq'](-1);
		};
		p['slice'] = function(){
			return this.ps(slice.apply(this, arguments),
				"slice", slice.call(arguments).join(","));
		};
		p['map'] = function(cb) {
			return this.ps(map(this, function(el, i) {
				return cb.call(el, i, el);
			}));
		};
		p['find'] = function(sel){
			var self = this, i, l;
			if (!isS(sel)){
				return $(sel).filter(function(){
					for(i = 0, l = self.length; i < l; i++)
						if (contains(self[i], this)) return true;
				});
			}
			var ret = this.ps("", "find", sel), len, n, r;
			for(i=0, l=this.length; i<l; i++){
				len = ret.length;
				merge(ret, $(sel, this[i]));
				if (i === 0){
					for(n = len; n < ret.length; n++)
						for(r = 0; r < len; r++)
							if (ret[r] === ret[n]){
								ret.splice(n--, 1);
								break;
							}
				}
			}
			return ret;
		};
		p['not'] = function(sel){
			return this.ps(winnow(this, sel, false), "not", sel);
		};
		p['filter'] = function(sel){
			return this.ps(winnow(this, sel, true), "filter", sel);
		};
		p['indexOf'] = function(val){
			return _indexOf(this, val);
		};
		p['is'] = function(sel){
			return this.length > 0 && $(this[0]).filter(sel).length > 0;
		};
		p['remove'] = function(){
			for(var i = 0, el; isDefined(el = this[i]); i++) {
				if (el.parentNode) el.parentNode.removeChild(el);
			}
			return this;
		};
		p['closest'] = function(sel, ctx) {
			var ret=[], i, l, cur;
			for (i=0, l=this.length; i<l; i++){
				cur = this[i];
				while (cur){
					if (filter(sel, [cur]).length>0){
						ret.push(cur);
						break;
					}else{
						cur = cur.parentNode;
						if (!cur || !cur.ownerDocument || cur === ctx|| cur.nodeType === 11)
							break;
					}
				}
			}
			ret = ret.length > 1 ? unique(ret) : ret;
			return this.ps(ret, "closest", sel);
		};
		p['val'] = function(setVal){
			if (!isDefined(setVal)) return (this[0] && this[0].value) || "";
			return this['each'](function(){
				this.value = setVal;
			});
		};
		p['html'] = function(setHtml){
			if (!isDefined(setHtml)) return (this[0] && this[0].innerHTML) || "";
			if (!isS(setHtml))
				return this.empty().append(setHtml);
			return this['each'](function(){
				this.innerHTML = setHtml;
			});
		};
		p['text'] = function(val){
			var el = this[0], nt;
			return isDefined(val)
				? this['empty']()['append']((el && el.ownerDocument || doc).createTextNode(val))
				: (el && (nt = el.nodeType)
					? ((nt === 1 || nt === 9)
						? (isS(el.textContent) ? el.textContent : el.innerText.replace(rReturn, ''))
						: (nt === 3 || nt === 4) ? el.nodeValue : null)
					: null);
		};
		p['empty'] = function(){
			var i, el;
			for(i = 0; isDefined(el = this[i]); i++)
				while (el.firstChild)
					el.removeChild(el.firstChild);
			return this;
		};
		p['addClass'] = function(val){
			var cls, i, l, el, setClass, c, cl;
			if (isF(val))
				return this['each'](function(j){
					$(this)['addClass'](val.call(this, j, this.className));
				});
			if (val && isS(val)){
				cls = val.split(rspace);
				for(i = 0, l = this.length; i < l; i++){
					el = this[i];
					if (el && el.nodeType === 1){
						if (!el.className && cls.length === 1)
							el.className = val;
						else {
							setClass = " " + el.className + " ";
							for(c = 0, cl = cls.length; c < cl; c++){
								if (!~setClass.indexOf(" " + cls[c] + " "))
									setClass += cls[c] + " ";
							}
							el.className = trim(setClass);
						}
					}
				}
			}
			return this;
		};
		p['removeClass'] = function(val){
			var clss, i, l, el, cls, c, cl;
			if (isF(val)) return this['each'](function(j){
				$(this)['removeClass'](val.call(this, j, this.className));
			});
			if ((val && isS(val)) || val === undefined){
				clss = (val || "").split(rspace);
				for(i = 0, l = this.length; i < l; i++){
					el = this[i];
					if (el.nodeType === 1 && el.className){
						if (val){
							cls = (" " + el.className + " ").replace(rclass, " ");
							for(c = 0, cl = clss.length; c < cl; c++)
								cls = cls.replace(" " + clss[c] + " ", " ");
							el.className = trim(cls);
						}
						else el.className = "";
					}
				}
			}
			return this;
		};
		p['hasClass'] = function(sel){
			return hasClass(this, sel);
		};
		p['fadeIn'] = function(){
			this['each'](function(){
				$(this)['show']();
			});
		};
		p['fadeOut'] = function(){
			this['each'](function(){
				$(this)['hide']();
			});
		};
		p['serializeArray'] = function() {
			return this['map'](function(){
				return this.elements ? makeArray(this.elements) : this;
			}).filter(function(){
				return this.name && !this.disabled &&
					(this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.type));
			}).map(function(i, el){
				var val = $(this)['val']();
				return val == null || isA(val)
					? map(val, function(val){
						return { name: el.name, value: val.replace(rCRLF, "\r\n") };
										})
					: { name: el.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		};
		p['wrap'] = function(wrapper) {
			return this['each'](function() {
				var wrapperClone = $($(wrapper)[0].cloneNode(false));
				$(this).before(wrapperClone);
				wrapperClone.append($(this));
			});
		};
		p['prop'] = function(name, setVal) {
			if (isDefined(setVal))
				return this.each(function() { this[name] = setVal; });
			return this[0] && this[0][name];
		};
		p['clone'] = function() {
			return $(this.map(function() { return this.cloneNode(true); }));
		};
		p['toggleClass'] = function(className, val) {
			return this['each'](function() {
				var el = $(this);
				(isDefined(val) ? val : !el.hasClass(className))
					? el.addClass(className) : el.removeClass(className);
			});
		};

		$['Expr'] = {
			'hidden': function(el){
				return ($["css"] && $["css"](el,"display") || el.style.display) === "none";
			},
			'visible': function(el) {
				return !$['Expr']['hidden'](el);
			}
		};

		function winnow(els, sel, keep){
			sel = sel || 0;
			if (isF(sel))
				return grep(els, function(el, i){
					return !!sel.call(el, i, el) === keep;
				});
			else if (sel.nodeType)
				return grep(els, function(el){
					return (el === sel) === keep;
				});
			else if (isS(sel)) {
				var expr = sel.charAt(0) == ":" && $['Expr'][sel.substring(1)];
				return grep(els, function(el) {
					var parentNode = el.parentNode,
							orphan = !parentNode,
							result;
					if (orphan) {
						parentNode = fosterNode;
						parentNode.appendChild(el);
					}
					result = expr
						? expr(el)
						: el.parentNode && _indexOf($$(sel, el.parentNode), el) >= 0;
					orphan && parentNode.removeChild(el);
					return result;
				});
			}
			return grep(els, function(el) {
				return (_indexOf(sel, el) >= 0) === keep;
			});
		}
		function cache(el, name, val)
		{
			var id = el[expando];
			if (!isDefined(val))
				return id && _cache[id] && (name ? _cache[id][name] : _cache[id]);

			if (!id) id = el[expando] = jquid++;
			return (_cache[id] || (_cache[id]={}))[name] = val;
		}
		function display(tag) {
			if (!_display[tag]) {
				var el = $("<" + tag + ">")['appendTo'](doc.body),
					d = ($['css'] && $['css'](el[0], "display")) || el[0].style.display;
				el.remove();
				_display[tag] = d;
			}
			return _display[tag];
		}
		function make(arr, els){
			arr.length = (els && els.length || 0);
			if (arr.length === 0) return arr;
			for(var i = 0, l = els.length; i < l; i++)
				arr[i] = els[i];
			return arr;
		}
		function hasClass(els, cls){
			cls = " " + cls + " ";
			for(var i = 0, l = els.length; i < l; i++)
				if (eqClass(els[i], cls))
					return true;
			return false;
		} $['hasClass'] = hasClass;
		function eqClass(el, cls){
			return el.nodeType === 1 && (" " + el.className + " ").replace(rclass, " ").indexOf(cls) > -1;
		}
		function walk(fn, ctx, ret){
			ctx = ctx || doc;
			ret = ret || [];
			if (ctx.nodeType == 1)
				if (fn(ctx)) ret.push(ctx);
			var els = ctx.childNodes;
			for(var i = 0, l = els.length; i < l; i++){
				var subEl = els[i];
				if (subEl.nodeType == 1)
					walk(fn, subEl, ret);
			}
			return ret;
		} $['walk'] = walk;

		/**
		 * @param {string} html
		 * @param {Object=} ctx
		 * @param {Object=} qry
		 * */
		function $$(sel, ctx, qry){
			if (sel && isS(sel)){
				if (ctx instanceof $) ctx = ctx[0];
				ctx = ctx || doc;
				qry = qry || $['query'];
				var el, rest = sel.substring(1);
				return ridSelector.test(sel) && ctx === doc
					? ((el = doc.getElementById(rest)) ? [el] : [])
					: makeArray(
						rclassSelector.test(sel) && ctx.getElementsByClassName
							? ctx.getElementsByClassName(rest)
							: rtagSelector.test(sel)
								? ctx.getElementsByTagName(sel)
								: qry(sel, ctx));
			}
			return sel.nodeType == 1 || sel.nodeType == 9 ? [sel] : [];
		} $['$$'] = $$;

		$['setQuery'] = function(qry){
			$['query'] = function(sel, ctx){
				return $$(sel, ctx, (qry || function(sel, ctx){ return ctx.querySelectorAll(sel); }));
			};
		};

		var useQuery = queryEngines();
		$['setQuery'](useQuery || function(sel, ctx){
			return (ctx = ctx || doc).querySelectorAll ? makeArray(ctx.querySelectorAll(sel)) : [];
		});

		function loadScript(url, cb, async){
			var h = doc.head || doc.getElementsByTagName('head')[0] || docEl,
				s = doc.createElement('script'), rs;
			if (async) s.async = "async";
				s.onreadystatechange = function () {
					if (!(rs = s.readyState) || rs == "loaded" || rs == "complete"){
						s.onload = s.onreadystatechange = null;
						if (h && s.parentNode)
								h.removeChild(s);
						s = undefined;
						if (cb) cb();
					}
				};
			s.onload = cb;
			s.src = url;
			h.insertBefore(s, h.firstChild);
		} $['loadScript'] = loadScript;

		/** @param {...string} var_args */
		function warn(var_args){ win.console && win.console.warn(arguments); }

		$['each'] = function(o, cb, args){
			var k, i = 0, l = o.length, isObj = l === undefined || isF(o);
			if (args){
				if (isObj) {
					for(k in o)
						if (cb.apply(o[k], args) === false) break;
				} else
					for(; i < l;)
						if (cb.apply(o[i++], args) === false) break;
			} else {
				if (isObj) {
					for(k in o)
						if (cb.call(o[k], k, o[k]) === false) break;
				}
				else
					for(; i < l;)
						if (cb.call(o[i], i, o[i++]) === false) break;
			}
			return o;
		};
		function _each(o, fn, ctx){
			if (o == null) return;
			if (nativeForEach && o.forEach === nativeForEach)
				o.forEach(fn, ctx);
			else if (o.length === +o.length){
				for(var i = 0, l = o.length; i < l; i++)
					if (i in o && fn.call(ctx, o[i], i, o) === breaker) return;
			} else {
				for(var key in o)
					if (hasOwn.call(o, key))
						if (fn.call(ctx, o[key], key, o) === breaker) return;
			}
		} $['_each'] = _each;
		function attr(el, name) {
			if (!el || !el.getAttribute || !name) return; // text nodes or comment nodes don't have attributes
			var ret = el.hasAttribute && el.hasAttribute(name) ? el.getAttribute(name) : el[name];
			return (ret === null ? undefined : ret); // el.getAttribute inconsistently return null for non-defined attributes
		}
		function filter(sel, els) {
			return isDefined(sel) ? $(els).filter(sel) : $(els);
		} $['filter'] = filter;
		function _indexOf(arr, val){
			if (arr == null) return -1;
			var i, l;
			if (nativeIndexOf && arr.indexOf === nativeIndexOf) return arr.indexOf(val);
			for(i = 0, l = arr.length; i < l; i++) if (arr[i] === val) return i;
			return -1;
		} $['_indexOf'] = _indexOf;
		$['_defaults'] = function(obj){
			_each(slice.call(arguments, 1), function(o){
				for(var k in o)
					if (obj[k] == null) obj[k] = o[k];
			});
			return obj;
		};
		function _filter(o, fn, ctx){
			var ret = [];
			if (o == null) return ret;
			if (nativeFilter && o.filter === nativeFilter) return o.filter(fn, ctx);
			_each(o, function(val, i, arr){
				if (fn.call(ctx, val, i, arr)) ret[ret.length] = val;
			});
			return ret;
		} $['_filter'] = _filter;
		$['proxy'] = function(fn, ctx){
			if (typeof ctx == "string"){
				var tmp = fn[ctx];
				ctx = fn;
				fn = tmp;
			}
			if (isF(fn)){
				var args = slice.call(arguments, 2),
					proxy = function(){
						return fn.apply(ctx, args.concat(slice.call(arguments))); };
				proxy.guid = fn.guid = fn.guid || proxy.guid || jquid++;
				return proxy;
			}
		};
		function dir(el, prop, until){
			var matched = [], cur = el[prop];
			while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !$(cur).is(until))){
				if (cur.nodeType === 1) matched.push(cur);
				cur = cur[prop];
			}
			return matched;
		} $['dir'] = dir;
		function nth(cur, res, dir){
			res = res || 1;
			var num = 0;
			for(; cur; cur = cur[dir])
				if (cur.nodeType === 1 && ++num === res) break;
			return cur;
		} $['nth'] = nth;
		function sibling(n, el){
			var r = [];
			for(; n; n = n.nextSibling) if (n.nodeType === 1 && n !== el) r.push(n);
			return r;
		} $['sibling'] = sibling;

		function grep(els, cb, inv){
			var ret = [], retVal;
			inv = !!inv;
			for(var i=0, l=els.length; i<l; i++){
				retVal = !!cb(els[i], i);
				if (inv !== retVal)
					ret.push(els[i]);
			}
			return ret;
		} $['grep'] = grep;
		/**
		 * @param {Object} els
		 * @param {function} cb
		 * @param {Object=} arg
		 * */
		function map(els, cb, arg){
			var value, key, ret = [], i = 0, length = els.length,
				isArray = els instanceof $
					|| typeof length == "number"
					&& ((length > 0 && els[0] && els[length - 1]) || length === 0 || isA(els));
			if (isArray){
				for(; i < length; i++){
					value = cb(els[i], i, arg);
					if (value != null)
						ret[ret.length] = value;
				}
			} else {
				for(key in els){
					value = cb(els[key], key, arg);
					if (value != null)
						ret[ret.length] = value;
				}
			}
			return ret.concat.apply([], ret);
		} $['map'] = map;
		function data(el, name, setVal){
			if (!el) return {};
			var res = cache(el, name, setVal);
			return res || attrs(el)['data-' + name];
		} $['data'] = data;
		function attrs(el){
			var o = {};
			if (el.nodeType == 1)
				for(var i = 0, elAttrs = el.attributes, len = elAttrs.length; i < len; i++)
					o[elAttrs.item(i).nodeName] = elAttrs.item(i).nodeValue;
			return o;
		} $['attrs'] = attrs;
		function eqSI(str1, str2){
			return !str1 || !str2 ? str1 == str2 : str1.toLowerCase() === str2.toLowerCase();
		} $['eqSI'] = eqSI;
	 trim = strim
		? function(text){ return text == null ? "" : strim.call(text); }
		: function(text){ return text == null ? "" : text.toString().replace(trimLeft, "").replace(trimRight, ""); };
		$['trim'] = trim;
		$['indexOf'] = $['inArray'] = function(el, arr){
			if (!arr) return -1;
			if (indexOf) return indexOf.call(arr, el);
			for(var i = 0, length = arr.length; i < length; i++)
				if (arr[i] === el)
					return i;
			return -1;
		};
		_each("Boolean Number String Function Array Date RegExp Object".split(" "), function(name){
			class2type["[object " + name + "]"] = name.toLowerCase();
			return this;
		});

		function typeOf(o){ return o == null ? String(o) : class2type[toString.call(o)] || "object"; } $['type'] = typeOf;
		function isDefined(o){ return o !== void 0; }
		function isS(o){ return typeof o == "string"; }
		function isO(o){ return typeof o == "object"; }
		function isF(o){ return typeof o == "function" || typeOf(o) === "function"; } $['isFunction'] = isF;
		function isA(o){ return typeOf(o) === "array"; } $['isArray'] = Array.isArray || isA;
		function isAL(o){ return !isS(o) && typeof o.length == 'number'; }
		function isWin(o){ return o && typeof o == "object" && "setInterval" in o; } $['isWindow'] = isWin;
		function isNan(obj){ return obj == null || !rdigit.test(obj) || isNaN(obj); } $['isNaN'] = isNan;
		function isPlainObj(o){
			if (!o || typeOf(o) !== "object" || o.nodeType || isWin(o)) return false;
			try{
				if (o.constructor && !hasOwn.call(o, "constructor") && !hasOwn.call(o.constructor.prototype, "isPrototypeOf"))
					return false;
			}catch(e){
				return false;
			}
			var key;
			for(key in o){}
			return key === undefined || hasOwn.call(o, key);
		}
		function merge(a1, a2){
			var i = a1.length, j = 0;
			if (typeof a2.length == "number")
				for(var l = a2.length; j < l; j++)
					a1[i++] = a2[j];
			else
				while (a2[j] !== undefined)
					a1[i++] = a2[j++];
			a1.length = i;
			return a1;
		} $['merge'] = merge;
		function extend(){
			var opt, name, src, copy, copyIsArr, clone, args = arguments,
				dst = args[0] || {}, i = 1, aLen = args.length, deep = false;
			if (typeof dst == "boolean"){ deep = dst; dst = args[1] || {}; i = 2; }
			if (typeof dst != "object" && !isF(dst)) dst = {};
			if (aLen === i){ dst = this; --i; }
			for(; i < aLen; i++){
				if ((opt = args[i]) != null){
					for(name in opt){
						src = dst[name];
						copy = opt[name];
						if (dst === copy) continue;
						if (deep && copy && (isPlainObj(copy) || (copyIsArr = isA(copy)))){
							if (copyIsArr){
								copyIsArr = false;
								clone = src && isA(src) ? src : [];
							} else
								clone = src && isPlainObj(src) ? src : {};
							dst[name] = extend(deep, clone, copy);
						} else if (copy !== undefined)
							dst[name] = copy;
					}
				}
			}
			return dst;
		} $['extend'] = $['fn']['extend'] = extend;
		function makeArray(arr, res){
			var ret = res || [];
			if (arr != null){
				var type = typeOf(arr);
				if (arr.length == null || type == "string" || type == "function" || type === "regexp" || isWin(arr))
					push.call(ret, arr);
				else
					merge(ret, arr);
			}
			return ret;
		} $['makeArray'] = makeArray;
		/**
		 * @param {string} html
		 * @param {Object=} ctx
		 * @param {Object=} frag
		 * */
		function htmlFrag(html, ctx, frag){
			ctx = ((ctx || doc) || ctx.ownerDocument || ctx[0] && ctx[0].ownerDocument || doc);
			frag = frag || ctx.createDocumentFragment();
			if (isAL(html))
				return clean(html, ctx, frag) && frag;
			var div = fragDiv(html);
			while (div.firstChild)
				frag.appendChild(div.firstChild);
			return frag;
		} $['htmlFrag'] = htmlFrag;
		/**
		 * @param {string} html
		 * @param {Object=} ctx
		 * */
		function fragDiv(html, ctx){
			var div = (ctx||doc).createElement('div'),
				tag = (rtagname.exec(html) || ["", ""])[1].toLowerCase(),
				wrap = wrapMap[tag] || wrapMap._default,
				depth = wrap[0];
			div.innerHTML = wrap[1] + html + wrap[2];
			while (depth--)
				div = div.lastChild;
			return div;
		}
		function clean(els, ctx, frag){
			var ret=[],i,el;
			for (i=0; (el=els[i])!=null; i++){
				if (isS(el))
					el = fragDiv(el, ctx);
				if (el.nodeType)
					ret.push(el);
				else
					ret = merge(ret, el);
			}
			if (frag)
				for (i=0; i<ret.length; i++)
					if (ret[i].nodeType)
						frag.appendChild(ret[i]);
			return ret;
		}
		var sibChk = function(a, b, ret){
			if (a === b) return ret;
			var cur = a.nextSibling;
			while (cur){
				if (cur === b) return -1;
				cur = cur.nextSibling;
			}
			return 1;
		};
		contains = $['contains'] = docEl.contains
			? function(a, b){
				return a !== b && (a.contains ? a.contains(b) : true); }
			: function(){ return false; };
		sortOrder = docEl.compareDocumentPosition
			? (contains = function(a, b){ return !!(a.compareDocumentPosition(b) & 16); }) //assigning contains
				&& function(a, b){
				if (a === b){ hasDup = true; return 0; }
				if (!a.compareDocumentPosition || !b.compareDocumentPosition)
					return a.compareDocumentPosition ? -1 : 1;
				return a.compareDocumentPosition(b) & 4 ? -1 : 1;
				}
			: function(a, b){
				if (a === b){ hasDup = true; return 0; }
				else if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
				var al, bl, ap = [], bp = [], aup = a.parentNode, bup = b.parentNode, cur = aup;
				if (aup === bup) return sibChk(a, b);
				else if (!aup) return -1;
				else if (!bup) return 1;
				while (cur){ ap.unshift(cur); cur = cur.parentNode; }
				cur = bup;
				while (cur){ bp.unshift(cur); cur = cur.parentNode; }
				al = ap.length;
				bl = bp.length;
				for(var i = 0; i < al && i < bl; i++)
					if (ap[i] !== bp[i]) return sibChk(ap[i], bp[i]);
				return i === al ? sibChk(a, bp[i], -1) : sibChk(ap[i], b, 1);
			 };
		function unique(els){
			if (sortOrder){
				hasDup = baseHasDup;
				els.sort(sortOrder);
				if (hasDup)
					for(var i = 1; i < els.length; i++)
						if (els[i] === els[i - 1]) els.splice(i--, 1);
			}
			return els;
		} $['unique'] = unique;
		_each({
			'parent': function(el){ var parent = el.parentNode; return parent && parent.nodeType !== 11 ? parent : null; },
			'parents': function(el){ return dir(el, "parentNode"); },
			'parentsUntil': function(el, i, until){ return dir(el, "parentNode", until); },
			'next': function(el){ return nth(el, 2, "nextSibling"); },
			'prev': function(el){ return nth(el, 2, "previousSibling"); },
			'nextAll': function(el){ return dir(el, "nextSibling"); },
			'prevAll': function(el){ return dir(el, "previousSibling"); },
			'nextUntil': function(el, i, until){ return dir(el, "nextSibling", until); },
			'prevUntil': function(el, i, until){ return dir(el, "previousSibling", until); },
			'siblings': function(el){ return sibling(el['parentNode']['firstChild'], el); },
			'children': function(el){ return sibling(el['firstChild']); },
			'contents': function(el){
				return el['nodeName'] === "iframe" ? el['contentDocument'] || el['contentWindow']['document '] : makeArray(el['childNodes']);
			}
		}, function(fn, name){
			$['fn'][name] = function(until, sel){
				var ret = map(this, fn, until), args = slice.call(arguments);
				if (!runtil.test(name)) sel = until;
				if (isS(sel)) ret = makeArray(filter(sel, ret));

				ret = this.length > 1 && !guaranteedUnique[name] ? unique(ret) : ret;
				if ((this.length > 1 || rmultiselector.test(sel)) && rparentsprev.test(name)) ret = ret.reverse();
				return this.ps(ret, name, args.join(","));
			};
		});
		_each({
			'appendTo': "append",
			'prependTo': "prepend",
			'insertBefore': "before",
			'insertAfter': "after"
		}, function(orig, name) {
			$['fn'][name] = function(sel){
				var ret = [], to = $(sel), i, els, l,
					p = this.length === 1 && this[0].parentNode;
				if (p && p.nodeType === 11 && p.childNodes.length === 1 && to.length === 1) {
					to[orig](this[0]);
					return this;
				}else{
					for(i=0, l=to.length; i<l; i++){
						els = (i > 0 ? this.clone(true) : this).get();
						$(to[i])[orig](els);
						ret = ret.concat(els);
					}
					return this.ps(ret, name, to['selector']);
				}
			};
		});

		function boxmodel(){
			if (!doc.body) return null; //in HEAD
			var d = doc.createElement('div');
			doc.body.appendChild(d);
			d.style.width = '20px';
			d.style.padding = '10px';
			var w = d.offsetWidth;
			doc.body.removeChild(d);
			return w == 40;
		}

		(function(){
			var div = document.createElement("div");
			div.style.display = "none";
			div.innerHTML = "	 <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
			var a = div.getElementsByTagName("a")[0];
			$['support'] = {
				boxModel: null,
				opacity: /^0.55$/.test(a.style.opacity),
				cssFloat: !!a.style.cssFloat
			};

			var rwebkit = /(webkit)[ \/]([\w.]+)/,
				ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				rmsie = /(msie) ([\w.]+)/,
				rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,
				ua = navigator.userAgent.toLowerCase(),
				match = rwebkit.exec(ua)
					 || ropera.exec( ua )
					 || rmsie.exec( ua )
					 || ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) || [],
				b;
			b = $['browser'] = { version: match[2] || "0" };
			b[match[1] || ""] = true;
		})();
		$['scriptsLoaded'] = function(cb) {
			if (isF(cb)) scriptFns.push(cb);
		};
		function loadAsync(url, cb){
			load.push({url:url,cb:cb});
		} $['loadAsync'] = loadAsync;

		if (!useQuery && !doc.querySelectorAll)
			loadAsync(queryShimCdn, function(){
				$['setQuery'](queryEngines());
			});

		function fireSL(){
			_each(scriptFns, function(cb){
				cb();
			});
			sLoaded = true;
		}

		$['init'] = false;
		$['onload'] = function(){
			if (!$['init'])
			try {
				$['support']['boxModel'] = boxmodel();
				var cbs = 0;
				_each(load, function(o){
					cbs++;
					loadScript(o.url, function(){
						try { if (o.cb) o.cb(); } catch(e){}
						if (!--cbs)fireSL();
					});
				});
				$['init'] = true;
				if (!cbs)fireSL();
			} catch(e){
				warn(e);
			}
		};
		if (doc['body'] && !$['init'])
			setTimeout($['onload'],1); //let plugins loadAsync

		$['hook'] = function(fn){
			ctors.push(fn);
		};
		$['plug'] = function(meta, fn){
			var name = isS(meta) ? meta : meta['name'];
			fn = isF(meta) ? meta : fn;
			if (!isF(fn)) throw "Plugin fn required";
			if (name && fn) plugins[name] = fn;
			fn($);
		};

		return $;
	})();
	//扩展jquip.events
	$['plug']("events", function($){
		var doc = document, handlers = {}, _jquid = 1;
		function jquid(el){
			return el._jquid || (el._jquid = _jquid++);
		}
		function bind(o, type, fn){
			if (o.addEventListener)
				o.addEventListener(type, fn, false);
			else {
				o['e' + type + fn] = fn;
				o[type + fn] = function(){
					o['e' + type + fn](window.event);
				};
				o.attachEvent('on' + type, o[type + fn]);
			}
		} $['bind'] = bind;
		function unbind(o, type, fn){
			if (o.removeEventListener)
				o.removeEventListener(type, fn, false);
			else {
				o.detachEvent('on' + type, o[type + fn]);
				o[type + fn] = null;
			}
		} $['unbind'] = unbind;
		function parseEvt(evt){
			var parts = ('' + evt).split('.');
			return {e: parts[0], ns: parts.slice(1).sort().join(' ')};
		}
		function matcherFor(ns){
			return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
		}
		function findHdls(el, evt, fn, sel){
			evt = parseEvt(evt);
			if (evt.ns) var m = matcherFor(evt.ns);
			return $['_filter'](handlers[jquid(el)] || [], function(hdl){
				return hdl
					&& (!evt.e	|| hdl.e == evt.e)
					&& (!evt.ns || m.test(hdl.ns))
					&& (!fn		 || hdl.fn == fn)
					&& (!sel		|| hdl.sel == sel);
			});
		}
		function addEvt(el, evts, fn, sel, delegate){
			var id = jquid(el), set = (handlers[id] || (handlers[id] = []));
			$['_each'](evts.split(/\s/), function(evt){
				var handler = $['extend'](parseEvt(evt), {fn: fn, sel: sel, del: delegate, i: set.length});
				set.push(handler);
				bind(el, handler.e, delegate || fn);
			});
			el = null;
		}
		function remEvt(el, evts, fn, sel){
			var id = jquid(el);
			$['_each']((evts || '').split(/\s/), function(evt){
				$['_each'](findHdls(el, evt, fn, sel), function(hdl){
					delete handlers[id][hdl.i];
					unbind(el, hdl.e, hdl.del || hdl.fn);
				});
			});
		}
		var evtMethods = ['preventDefault', 'stopImmediatePropagation', 'stopPropagation'];
		function createProxy(evt){
			var proxy = $['extend']({originalEvent: evt}, evt);
			$['_each'](evtMethods, function(key){
				if(evt[key]){
					proxy[key] = function(){
						return evt[key].apply(evt, arguments);
					};
				}
			});
			return proxy;
		}
		var p = $['fn'];
		$['_each'](("blur focus focusin focusout load resize scroll unload click dblclick " +
			"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
			"change select submit keydown keypress keyup error").split(" "),
			function(name){
				p[name] = function(fn, data){
					return arguments.length > 0 ? this['bind'](name, fn, data) : this['trigger'](name);
				};
			}
		);
		p['bind'] = function(type, cb){
			return this['each'](function(){
				addEvt(this, type, cb);
			});
		};
		p['unbind'] = function(type, cb){
			return this['each'](function(){
				 remEvt(this, type, cb);
			});
		};
		p['one'] = function(evt, cb){
			return this['each'](function(){
				var self = this;
				addEvt(this, evt, function wrapper(){
					cb.apply(self, arguments);
					remEvt(self, evt, arguments.callee);
				});
			});
		};
		p['delegate'] = function(sel, evt, cb){
			return this['each'](function(i, el){
				addEvt(el, evt, cb, sel, function(e){
					var target = e.target||e.srcElement, nodes = $['$$'](sel, el);
					while (target && $['_indexOf'](nodes, target) < 0)
						target = target.parentNode;
					if (target && !(target === el) && !(target === document)){
						cb.call(target, $['extend'](createProxy(e||window.event), {
							currentTarget: target, liveFired: el
						}));
					}
				});
			});
		};
		p['undelegate'] = function(sel, evt, cb){
			return this['each'](function(){
				 remEvt(this, evt, cb, sel);
			});
		};
		p['live'] = function(evt, cb){
			$(doc.body)['delegate'](this['selector'], evt, cb);
			return this;
		};
		p['die'] = function(evt, cb){
			$(doc.body)['undelegate'](this['selector'], evt, cb);
			return this;
		};

		p['on'] = function(evt, sel, cb){
			return typeof sel === 'function' ? this.bind(evt, sel) : this.delegate(sel, evt, cb);
		};

		p['off'] = function(evt, sel, cb){
			return typeof sel === 'string' ? this.undelegate(sel, evt, cb) : this.unbind(evt, cb);
		};
			p['trigger'] = function (evt) {
					return this['each'](function () {
							if ((evt == "click" || evt == "blur" || evt == "focus") && this[evt])
									return this[evt]();
							if (doc.createEvent) {
									var e = doc.createEvent('Events');
									this.dispatchEvent(e, e.initEvent(evt, true, true));
							} else if (this.fireEvent)
									try {
											if (evt !== "ready") {
													this.fireEvent("on" + evt);
											}
									} catch (e) { }
					});
			};
		//if (!$['init']) $(window)['bind']("load",$['onload']);
	});
	//扩展jquip.css
	$['plug']("css", function ($) {
		var doc = document,
				docEl = doc.documentElement,
				ralpha = /alpha\([^)]*\)/i,
				ropacity = /opacity=([^)]*)/,
				rdashAlpha = /-([a-z])/ig,
				rupper = /([A-Z])/g,
				rnumpx = /^-?\d+(?:px)?$/i,
				rnum = /^-?\d/,
				rroot = /^(?:body|html)$/i,
				cssShow = { position: "absolute", visibility: "hidden", display: "block" },
				cssWidth = [ "Left", "Right" ],
				cssHeight = [ "Top", "Bottom" ],
				curCSS,
				getComputedStyle,
				currentStyle,
				fcamelCase = function (all, l) { return l.toUpperCase(); };

		$['cssHooks'] = {
			'opacity': {
				'get': function (el, comp) {
					if (!comp) return el.style.opacity;
					var ret = curCSS(el, "opacity", "opacity");
					return ret === "" ? "1" : ret;
				}
			}
		};

		$['_each'](["height", "width"], function(k) {
			$['cssHooks'][k] = {
				get: function(el, comp, extra) {
					var val;
					if (comp) {
						if (el.offsetWidth !== 0)
							return getWH(el, k, extra);

						swap(el, cssShow, function() {
							val = getWH( el, k, extra );
						});
						return val;
					}
				},
				set: function(el, val) {
					if (rnumpx.test(val)) {
						val = parseFloat( val );

						if (val >= 0)
							return val + "px";
					} else
						return val;
				}
			};
		});

		function getWH(el, name, extra) {
			var val = name === "width" ? el.offsetWidth : el.offsetHeight,
				which = name === "width" ? cssWidth : cssHeight;
			if (val > 0) {
				if (extra !== "border") {
					$['each']( which, function() {
						if ( !extra )
							val -= parseFloat(css(el, "padding" + this) ) || 0;
						if ( extra === "margin" )
							val += parseFloat(css(el, extra + this) ) || 0;
						else
							val -= parseFloat(css(el, "border" + this + "Width") ) || 0;
					});
				}
				return val + "px";
			}
			return "";
		}

		if (!$['support']['opacity']) {
			$['support']['opacity'] = {
						get: function (el, computed) {
								return ropacity.test((computed && el.currentStyle ? el.currentStyle.filter : el.style.filter) || "")
										? (parseFloat(RegExp.$1) / 100) + ""
										: computed ? "1" : "";
						},
						set: function (el, value) {
								var s = el.style;
								s.zoom = 1;
								var opacity = $['isNaN'](value) ? "" : "alpha(opacity=" + value * 100 + ")", filter = s.filter || "";
								s.filter = ralpha.test(filter) ?
					filter.replace(ralpha, opacity) :
					s.filter + ' ' + opacity;
						}
				};
		}

		if (doc.defaultView && doc.defaultView.getComputedStyle) {
			getComputedStyle = function (el, newName, name) {
				var ret, defaultView, computedStyle;
				name = name.replace(rupper, "-$1").toLowerCase();
				if (!(defaultView = el.ownerDocument.defaultView)) return undefined;
				if ((computedStyle = defaultView.getComputedStyle(el, null))) {
					ret = computedStyle.getPropertyValue(name);
					if (ret === "" && !$['contains'](el.ownerDocument.documentElement, el))
						ret = $['style'](el, name);
				}
				return ret;
			};
		}

		if (doc.documentElement.currentStyle) {
				currentStyle = function (el, name) {
						var left,
						ret = el.currentStyle && el.currentStyle[name],
						rsLeft = el.runtimeStyle && el.runtimeStyle[name],
						style = el.style;
						if (!rnumpx.test(ret) && rnum.test(ret)) {
								left = style.left;
								if (rsLeft) el.runtimeStyle.left = el.currentStyle.left;
								style.left = name === "fontSize" ? "1em" : (ret || 0);
								ret = style.pixelLeft + "px";
								style.left = left;
								if (rsLeft) el.runtimeStyle.left = rsLeft;
						}
						return ret === "" ? "auto" : ret;
				};
		}
		curCSS = getComputedStyle || currentStyle;

		$['fn']['css'] = function (name, value) {
				if (arguments.length === 2 && value === undefined) return this;

				return access(this, name, value, true, function (el, name, value) {
						return value !== undefined ? style(el, name, value) : css(el, name);
				});
		};
		$['cssNumber'] = { "zIndex": true, "fontWeight": true, "opacity": true, "zoom": true, "lineHeight": true };
		$['cssProps'] = { "float": $['support']['cssFloat'] ? "cssFloat" : "styleFloat" };
		function style(el, name, value, extra) {
				if (!el || el.nodeType === 3 || el.nodeType === 8 || !el.style) return;
				var ret, origName = camelCase(name), style = el.style, hooks = $['cssHooks'][origName];
				name = $['cssProps'][origName] || origName;
				if (value !== undefined) {
						if (typeof value === "number" && isNaN(value) || value == null) return;
						if (typeof value === "number" && !$['cssNumber'][origName]) value += "px";
						if (!hooks || !("set" in hooks) || (value = hooks.set(el, value)) !== undefined) {
								try {
										style[name] = value;
								} catch (e) { }
						}
				} else {
						if (hooks && "get" in hooks && (ret = hooks.get(el, false, extra)) !== undefined)
								return ret;
						return style[name];
				}
		} $['style'] = style;

		function css(el, name, extra) {
				var ret, origName = camelCase(name), hooks = $['cssHooks'][origName];
				name = $['cssProps'][origName] || origName;
				if (hooks && "get" in hooks && (ret = hooks.get(el, true, extra)) !== undefined) return ret;
				else if (curCSS) return curCSS(el, name, origName);
		}$['css'] = css;

		function swap(el, opt, cb) {
				var old = {},k;
				for (var k in opt) {
						old[k] = el.style[k];
						el.style[k] = opt[k];
				}
				cb.call(el);
				for (k in opt) el.style[k] = old[k];
		}$['swap'] = swap;

		function camelCase(s) { return s.replace(rdashAlpha, fcamelCase); } $['camelCase'] = camelCase;

		function access(els, key, value, exec, fn, pass) {
				var l = els.length;
				if (typeof key === "object") {
						for (var k in key) {
								access(els, k, key[k], exec, fn, value);
						}
						return els;
				}
				if (value !== undefined) {
						exec = !pass && exec && $['isFunction'](value);
						for (var i = 0; i < l; i++)
								fn(els[i], key, exec ? value.call(els[i], i, fn(els[i], key)) : value, pass);
						return els;
				}
				return l ? fn(els[0], key) : undefined;
		}

		var init, noMarginBodyOff, subBorderForOverflow, suppFixedPos, noAddBorder, noAddBorderForTables,
				initialize = function() {
					if (init) return;
					var body = doc.body, c = doc.createElement("div"), iDiv, cDiv , table, td, bodyMarginTop = parseFloat(css(body, "marginTop")) || 0,
						html = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
					$['extend'](c.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" });
					c.innerHTML = html;
					body.insertBefore(c, body.firstChild);
					iDiv = c.firstChild;
					cDiv = iDiv.firstChild;
					td = iDiv.nextSibling.firstChild.firstChild;
					noAddBorder = (cDiv .offsetTop !== 5);
					noAddBorderForTables = (td.offsetTop === 5);
					cDiv .style.position = "fixed";
					cDiv .style.top = "20px";
					suppFixedPos = (cDiv .offsetTop === 20 || cDiv .offsetTop === 15);
					cDiv .style.position = cDiv .style.top = "";
					iDiv.style.overflow = "hidden";
					iDiv.style.position = "relative";
					subBorderForOverflow = (cDiv .offsetTop === -5);
					noMarginBodyOff = (body.offsetTop !== bodyMarginTop);
					body.removeChild(c);
					init = true;
				},
				bodyOffset = function(body){
					var top = body.offsetTop, left = body.offsetLeft;
					initialize();
					if (noMarginBodyOff){
						top	+= parseFloat( css(body, "marginTop") ) || 0;
						left += parseFloat( css(body, "marginLeft") ) || 0;
					}
					return { top: top, left: left };
				};

		$['fn']['offset'] = function(){
			var el = this[0], box;
			if (!el || !el.ownerDocument) return null;
			if (el === el.ownerDocument.body) return bodyOffset(el);
			try {
				box = el.getBoundingClientRect();
			} catch(e) {}
			if (!box || !$['contains'](docEl, el))
				return box ? { top: box.top, left: box.left } : { top: 0, left: 0 };
			var body = doc.body,
				win = getWin(doc),
				clientTop	= docEl.clientTop	|| body.clientTop	|| 0,
				clientLeft = docEl.clientLeft || body.clientLeft || 0,
				scrollTop	= win['pageYOffset'] || $['support']['boxModel'] && docEl.scrollTop	|| body.scrollTop,
				scrollLeft = win['pageXOffset'] || $['support']['boxModel'] && docEl.scrollLeft || body.scrollLeft,
				top	= box.top + scrollTop - clientTop,
				left = box.left + scrollLeft - clientLeft;
			return { top: top, left: left };
		};

		$['fn']['position'] = function() {
			if (!this[0]) return null;
			var el = this[0],
			offPar = this['offsetParent'](),
			off = this['offset'](),
			parOff = rroot.test(offPar[0].nodeName) ? { top: 0, left: 0 } : offPar['offset']();
			off.top -= parseFloat(css(el, "marginTop")) || 0;
			off.left -= parseFloat(css(el, "marginLeft")) || 0;
			parOff.top += parseFloat(css(offPar[0], "borderTopWidth")) || 0;
			parOff.left += parseFloat(css(offPar[0], "borderLeftWidth")) || 0;
			return { top: off.top - parOff.top, left: off.left - parOff.left };
		};

		$['fn']['offsetParent'] = function(){
			return this['map'](function(){
				var op = this.offsetParent || doc.body;
				while (op && (!rroot.test(op.nodeName) && css(op,"position") === "static"))
					op = op.offsetParent;
				return op;
			});
		};

		$['_each'](["Height", "Width"], function (name, i) {
				var type = name.toLowerCase();
				$['fn']["inner" + name] = function () {
						var el = this[0];
						return el && el.style ? parseFloat(css(el, type, "padding")) : null;
				};
				$['fn']["outer" + name] = function (margin) {
						var el = this[0];
						return el && el.style ? parseFloat(css(el, type, margin ? "margin" : "border")) : null;
				};
				$['fn'][type] = function (size) {
						var el = this[0];
						if (!el) return size == null ? null : this;
						if ($['isFunction'](size))
								return this['each'](function (i) {
										var self = $(this);
										self[type](size.call(this, i, self[type]()));
								});
						if ($['isWindow'](el)) {
								var docElProp = el.document.documentElement["client" + name], body = el.document.body;
								return el.document.compatMode === "CSS1Compat" && docElProp || body && body["client" + name] || docElProp;
						} else if (el.nodeType === 9) {
								return Math.max(
							el.documentElement["client" + name],
							el.body["scroll" + name], el.documentElement["scroll" + name],
							el.body["offset" + name], el.documentElement["offset" + name]);
						} else if (size === undefined) {
								var orig = css(el, type),
										ret = parseFloat(orig);
								return $['isNaN'](ret) ? orig : ret;
						}
						else return this['css'](type, typeof size === "string" ? size : size + "px");
				};
		});

		function getWin(el) { return $['isWindow'](el) ? el : el.nodeType === 9 ? el.defaultView || el.parentWindow : false; }

		$['_each'](["Left", "Top"], function (name, i) {
				var method = "scroll" + name;
				$['fn'][method] = function (val) {
						var el, win;
						if (val === undefined) {
								el = this[0];
								if (!el) return null;
								win = getWin(el);
								return win ? ("pageXOffset" in win)
										? win[i ? "pageYOffset" : "pageXOffset"]
										: $['support']['boxModel'] && win.document.documentElement[method] || win.document.body[method] : el[method];
						}
						return this['each'](function() {
								win = getWin(this);
								if (win)
										win['scrollTo'](!i ? val : $(win)['scrollLeft'](), i ? val : $(win)['scrollTop']());
								else
										this[method] = val;
						});
				};
		});

	});
	//扩展jquip.animate
	$['plug']("animate", function ($){
		var tweenLinear = function(t,b,c,d){ return c*t/d + b; };
		$.fn.stop = function(){
			clearTimeout(this.__timeout);
			return this;
		}
		$.fn.animate = function(attr,speed,tween,callback){
			if(typeof speed === 'function'){
				callback = speed;
				speed = undefined;
			}
			if(typeof tween === 'function'){
				callback = tween;
				tween = tweenLinear;
			};
			speed = speed === undefined ? 300 : speed; //动画持续时间
			tween = tween === undefined ? tweenLinear : tween;
			if(attr === undefined){return;};//执行动画的属性
			var _this = this,
				l = 8,//时间间隔
				d = parseInt(speed/l),
				start = new Object(),
				current = new Object(),
				end = new Object();
			for(var i in attr){
				start[i] = _this.css(i);
				end[i] = attr[i];
			};
			for(var i in start){
				start[i] = parseInt(start[i]);
				current[i] = (end[i] - start[i]) / d;
			};
			var fadeTo = function(i){
				if(i == d){
					for(var j in attr){
						//_this.style[j] = end[j] + "px";
						_this.css(j, end[j]);
					};
					callback && callback();
					return;
				};
				for(var j in attr){
					var b = start[j],
						c = end[j] - b,
						f = c;
					f = Math.ceil(tween(i,b,c,d));
					_this.css(j, f);
				};
				i++;
				_this.__timeout = setTimeout(function(){
					fadeTo(i);
				},l);
			};
			fadeTo(0);
		}
	});

	//html代码转码，用于用户问题，回复不转码
	var htmlEncode = function(str){
		var s = "";   
		if (str.length == 0) return "";
		s = str.replace(/\'/g, '&#39;');
		s = s.replace(/\"/g, '&quot;');
		s = s.replace(/\>/g, '&gt;');
		s = s.replace(/\</g, '&lt;');
		return s; 
	};

	//监听事件
	var addEvent = (function() {		
		var _eventCompat = function(event) {
			var type = event.type;
			if (type == 'DOMMouseScroll' || type == 'mousewheel') {
				event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
			}
			//alert(event.delta);
			if (event.srcElement && !event.target) {
				event.target = event.srcElement;	
			}
			if (!event.preventDefault && event.returnValue !== undefined) {
				event.preventDefault = function() {
					event.returnValue = false;
				};
			};
			return event;
		};
		if (win.addEventListener) {
			return function(el, type, fn, capture) {
				if (type === "mousewheel" && document.mozHidden !== undefined) {
					type = "DOMMouseScroll";
				}
				el.addEventListener(type, function(event) {
					fn.call(this, _eventCompat(event));
				}, capture || false);
			}
		} else if (win.attachEvent) {
			return function(el, type, fn, capture) {
				el.attachEvent("on" + type, function(event) {
					event = event || win.event;
					fn.call(el, _eventCompat(event));	
				});
			}
		}
		return function(){};	
	})();

	//加载一个远程JS文件，用于JSONP方式调用接口
	var _loadJs = function(src, success, error){
		var script = document.createElement("script")
			, head = document.getElementsByTagName("head")[0]
			, isload = false;
		script.type = "text/javascript";
		script.src = src;
		script.onreadystatechange = function() { 
			var r = script.readyState;
			if(!isload && (r === 'loaded' || r === 'complete')){
				isload = true;
				success && success();
				script.onreadystatechange = null;
				head.removeChild(script);
			} 
		};
		script.onload = function(){
			if(!isload){
				isload = true;
				success && success();
				head.removeChild(script);
			}
		};
		if(error){ script.onerror = error;};
		head.appendChild(script); 
	};

	//将对象转换为URL参数形式的字符串
	var _emnu = function(inObj){
		var a = new Array();
		for(var i in inObj){
			a.push(i +"="+ inObj[i]);
		};
		return a.join('&');
	};
	//替换字符串左右的空格
	var _trim = function(){
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}
	//发起一个JSONP请求
	var _jsonp = function(options,time,type){
		var o = $.extend({
			url:"",
			data:null
			, success:function(){},
			error:function(){}
		},options);
		var cb = 'JSONP'+ new Date().getTime().toString(36);
		o.data.callback = cb;
		var argument = _emnu(o.data);
		win[cb] = o.success;
		_loadJs(o.url + (o.url.indexOf('?') > 0 ? "&" : "?") + argument, function(){}, o.error);
	};

	//判断浏览器是否为IE内核
	_isIE = (function(){
		try{
			var browser = win.navigator.appName 
			var b_version = win.navigator.appVersion 
			var version = b_version.split(";"); 
			var trim_Version = version[1].replace(/[ ]/g,""); 
			if(browser=="Microsoft Internet Explorer" && trim_Version.match(/^MSIE[6-9]\.0$/i) !== null){ 
				return true;
			}
			return false;
		}catch(e){
			return false;
		}
	})();

	//日期格式化显示
	var dateFormat =  function(fmt){
		var o = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S": this.getMilliseconds()
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	};

	//创建Robot对象的HTML
	var generateHtml = function(source){
		var html = []
			, _u = navigator.userAgent
			, _con = source.con
			, _colors = _con.colors;
		if(_u.indexOf('Android') > -1 || _u.indexOf('Linux') > -1){
			_isPad = true;
		}else if(_u.indexOf('iPhone') > -1 || _u.indexOf('iPad') > -1){
			_isPad = true;
			_con.ismax = true;
		};
		if(_isPad && $(win).width() < 600){
			_isMobile = true;
		};
		html.push('<div id="robot" onselectstart="return false;" class="smartnlp-robot '+ (_isMobile ? cssfix +'mobile '+ cssfix +'box' : '') +' '+  (_con.mod === 'mini' ? cssfix +'mini' : '') +'" style="'+ (_con.mod === 'mini' ? 'border-color:'+ _colors.border : '') +';position:'+ (_isMobile && _con.mod !== 'mini' ? 'static' : 'fixed') +';z-index:'+ _con.zindex +'">')
		if(_isMobile && _con.mod === 'mini'){
			html.push('<a href="'+ _con.newurl +'" target="_blank" class="'+ cssfix +'mobile-title" style="background-color: '+ _colors.header +';"><span></span>咨询在线客服 &gt;</a>');
		}
		html.push('<div class="'+ cssfix +'header" style="background-color: '+ _colors.header +';" onselectstart="return false">');
		html.push('<div class="'+ cssfix +'logo">');
		html.push('<img src="'+ _con.logo +'"/>');
		html.push('<span>'+ _con.title +'</span></div>');
		html.push('<div class="'+ cssfix +'header-nav">');
		/*if(_con.mod === 'mini'){
			html.push('<a href="'+ _con.newurl +'" target="new"><em class="'+ cssfix +'icon '+ cssfix +'icon-new"></em></a>');
			html.push('<a href="javascript:void(0);"><em class="'+ cssfix +'icon '+ cssfix +'icon-min"></em></a>');
		}else{
			if(!_isPad){
				html.push('<a href="javascript:void(0);"><em class="'+ cssfix +'icon '+ cssfix +'icon-max'+ (_con.ismax ? ' '+ cssfix +'icon-nor' : '') +'"></em></a>');
			};
			html.push('<a href="javascript:void(0);"><em class="'+ cssfix +'icon '+ cssfix +'icon-clo"></em></a>');
		};*/
		//if(!_isPad){
			html.push('<a href="javascript:void(0);"><em class="'+ cssfix +'icon '+ cssfix +'icon-max'+ (_con.ismax ? ' '+ cssfix +'icon-nor' : '') +'"></em></a>');
		//};
		html.push('<a href="javascript:void(0);"><em class="'+ cssfix +'icon '+ cssfix +'icon-clo"></em></a>');
		html.push('</div>');
		html.push('</div>');
		//content
		html.push('<div class="'+ cssfix +'content '+ (_isMobile ? cssfix +'box' : '') +'">');
		//if(_con.mod === 'mini'){
			html.push('<div class="'+ cssfix +'bar" style="background-color:'+_colors.border+';">');
			html.push('<a href="javascript:void(0);"></a>');
			html.push('</div>');
		//}
		//左边区域
		html.push('<div class="'+ cssfix +'fl-area '+ (_isMobile ? cssfix +'box '+ cssfix +'box-flex' : '') +'" style="'+ (!_con.showside ? 'padding-right: 0;' : '') +'">');
		html.push('<div class="'+ cssfix +'nano '+ (_isMobile ? cssfix +'box-flex' : '') +'">');
		html.push('<div class="'+ cssfix +'chat"></div>');
		//html.push('<div class="'+ cssfix +'pane" style="display: block; opacity: 1; visibility: visible;"><div class="'+ cssfix +'slider" style="height: 110px; top: 502px;"></div></div>');
		html.push('</div>');
		html.push('<div class="'+ cssfix +'edit '+ (_isMobile ? cssfix +'box' : '') +'">');
		html.push('<div class="'+ cssfix +'input '+ (_isMobile ? cssfix +'box-flex' : '') +'">');
		html.push('<textarea class="'+ cssfix +'textarea" placeholder="'+ _con.placeholder +'" style="'+ (_isIE ? 'color:#999;' : '') +'">'+ (_isIE ? _con.placeholder : '') +'</textarea>');
		html.push('</div>');
		html.push('<div class="'+ cssfix +'sub" onselectstart="return false">');
		//if(_con.mod == 'normal'){
			html.push('<a class="'+ cssfix +'btn '+ cssfix +'btn-close">关闭</a>');
		//};
		html.push('<a class="'+ cssfix +'btn '+ cssfix +'btn-send" style="background-color:'+ _colors.button +'">发送</a>');
		html.push('</div>');
		html.push('</div>');
		html.push('</div>');
		if(_con.showside){
			//右侧导航信息
			html.push('<div class="'+ cssfix +'fr-area">');
			html.push('<div class="'+ cssfix +'fr-nav">');
			html.push('<a href="javascript:void(0);" data-index="0" class="'+ cssfix +'on">常见问题</a>');
			//隐藏功能列表
			if(!hideList){
				html.push('<a href="javascript:void(0);" data-index="1">功能列表</a>');
			};
			html.push('</div>');
			//快捷查询信息显示区域-->');
			html.push('<div class="'+ cssfix +'fr-content">');
			html.push('<div class="'+ cssfix +'fr-panel"><ul>');
			for(var i=0,list = _con.quicks,len = list.length; i<len; i++){
				html.push('<li><a href="javascript:void(0);">'+ list[i] +'</a></li>');
			};
			html.push('</ul>');
			//<li><a href="javascript:void(0);">货到哪里了，怎么不更新物流啊</a></li>
			if(!hideList){
				html.push('<ol>');
				for(var i=0,list = _con.tools,len = list.length; i<len; i++){
					html.push('<li><a href="'+ list[i].href +'" target="new"><i style="background-image: url('+ list[i].icon +');"></i>'+ list[i].label +'</a></li>');
				};
				html.push('</ol>');
			};
			html.push('</div>');
			//<li><a href="javascript:void(0);"><i></i>调戏JIMI</a></li>
			html.push('</div>');
			html.push('<ul class="'+ cssfix +'fr-footer">');
			//隐藏人工客服
			if(!hideKefu){
				html.push('<li class="'+ cssfix +'call"><a href="'+ _con.callUrl +'" target="new">');
				html.push('<i style="background-image:url('+ _con.callImg+');"></i>');
				html.push('<span>人工客服</span>');
				html.push('</a></li>');
			};
			html.push('<li class="'+ cssfix +'code"><a href="javascript:void(0);">');
			html.push('<i style="background-image:url('+ _con.codeImg+');"></i>');
			html.push('<span>公众号</span>');
			html.push('</a></li>');
			html.push('<div class="'+ cssfix +'big-code"><img src="'+ _con.codeImg +'"/></div>')
			html.push('</ul>');
			html.push('</div>');
		}
		html.push('</div>');
		html.push('</div>');
		var $wrap = $(html.join(''));
		$('body').append($wrap);
		return $wrap;
	};
	var Robot = function(config){	
		this.con = $.extend({
			mod: 'normal'																		//显示模式，mini侧边，normal默认模式
			, ismax: false																		//初始时是否最大化窗口，normal模式时有效
			, 'minWidth': 940																	//最小宽度
			, 'minHeight': 576																	//最小高度
			, title: '竭诚为您服务' 															//头部title文本
			, quicks: []																		//快速提交问题列表
			, tools: []																			//左侧工具栏，格式{label: '文本',icon: 'icon图标地址60*60', href:'连接的地址'}
			, colors: {																			//设置颜色，header:头部颜色，border:边框颜色（mini模式下有效），button:发送按钮颜色
				'header': ''
				, 'border': ''
				, 'button': ''
			}
			, zindex: 999																		//浮动层zindex
			, showside: true																	//是否显示左边栏
			, placeholder: '请简要描述您的问题，如“退换货运费怎么算”'							//文本框提示文本
			, url: 'http://api.smartnlp.cn/cloud/-/'										//请求的接口地址
			, newurl: '#'																		//新窗口打开的的URL[仅mini模式下有效]
			, appid: ''																			//appid
			, callImg: 'http://img.alicdn.com/imgextra/i4/TB1tMo3JpXXXXbwXVXXwu0bFXXX.png'		//客服图片　80*80像素
			, callUrl: '#'																		//点击客服图片后的链接地址
			, codeImg: 'http://img.alicdn.com/imgextra/i2/TB19_XqJFXXXXa6XXXXwu0bFXXX.png'		//二维码图片　80*80像素
			, welcome: '您好'																	//机器人欢迎语
			, nick: '小智'																		//机器人名字
			, autoblur: false																	//消息发送后文本框是否自动失去焦点
			, logo: 'http://img.alicdn.com/imgextra/i3/TB1UhE3JpXXXXbaXpXXwu0bFXXX.png'
		}, config);
		this.init();
	};
	Robot.prototype = {
		'con': {}
		, 'init': function(){
			var _this = this
				, _con = _this.con;
			var $wrap = _this.wrap = generateHtml(_this);
			//var $w = $(win);
			_this.chat = $('.'+ cssfix +'chat', $wrap);
			_this.input = $('textarea', $wrap);
			_this.view = $('.'+ cssfix +'nano', $wrap);
			var $edit = $('.'+ cssfix +'edit', $wrap);
			var $bigCode = $('.'+ cssfix +'big-code', $wrap);
			$('.'+ cssfix +'fr-nav a', $wrap).on('click', $.proxy(_this.tab, _this));
			$('.'+ cssfix +'icon-max,.'+ cssfix +'bar a', $wrap).on('click', $.proxy(_this['zoom'], _this));
			$('.'+ cssfix +'btn-send', $wrap).on('click', $.proxy(_this['submit'], _this));
			$('.'+ cssfix +'fr-panel ul a', $wrap).on('click', function(){_this.send($(this).text());});
			$('.'+ cssfix +'code a', $wrap).on('click', function(){
				$bigCode.show().stop().animate({width: 220,height: 220});
			});
			$('.'+ cssfix +'icon-clo,.'+ cssfix +'btn-close', $wrap).on('click', $.proxy(_this['remod'], _this));
			/*.on('click', '.'+ cssfix +'icon-clo,.'+ cssfix +'btn-close', function(){
				if(confirm('确定要关闭当前聊天窗口？')){
					win.close();
				}
			});*/
			$bigCode.click(function(){
				$bigCode.stop().animate({width: 80,height: 80}, function(){
					$bigCode.hide();
				});
			})
			_this.input.on('keyup', function(e){
				e = e || win.event;
				var currKey = e.keyCode || e.which || e.charCode;
				if(currKey == "13"){
					return _this.submit();
				};
			}).on('input', function(e){
				if(_isMobile){
					if (this.scrollTop > 0) this.style.height = this.scrollTop + this.scrollHeight + "px";
				};
			}).on('blur', function(e){
				if(_isIE){
					if(this.value === _con.placeholder || this.value === ''){
						this.value = _con.placeholder;
						this.style.color = '#999';
					};
				} if(_isPad){
					$wrap.css({'top': 0, "bottom": 'inherit'});
				};
			}).on('focus', function(){
				if(_isIE){
					if(this.value === _con.placeholder){
						this.value = '';
					};
					this.style.color = 'inherit';
				}else if(_isPad){
					$wrap.css({'top': 'inherit', "bottom": 0});
					$('body').scrollTop(10000);
				};
				/*if(_isIphone && _isMobile){
					var _top = $wrap.height();
					setTimeout(function(){
						_this.input.val();
						$('body').scrollTop(250);
					}, 500);
					
				}*/
			});
			//禁止鼠标滚轮冒泡
			addEvent(_this.view.get(0), "mousewheel", function(e){
				var _t = this;
				_t.scrollTop += e.delta < 0 ? 60 : -60;
				e.preventDefault && e.preventDefault();
			});
			addEvent($wrap.get(0), "mousewheel", function(e){
				e.preventDefault && e.preventDefault();
			});
			_this.welcome();
			_this.resize();
			_this.move('.'+ cssfix +'header')
			$(win).resize($.proxy(_this.resize, this));
		}
		//显示欢迎词
		, welcome: function(){
			var _this = this
				, _con = _this.con;
			_this.chat.append('<div class="'+ cssfix +'chat-replay"><div class="'+ cssfix +'chat-headimg" >'+ (!!_con.headImg ? '<img src="'+ _con.headImg +'"/>' : '') +'<span>'+ _con.nick +' '+ dateFormat.call(new Date(),'hh:mm:ss') +'</span></div><table class="'+ cssfix +'msg" cellspacing="0" cellpadding="0"><tbody><tr><td class="bg-msg-lr '+ cssfix +'msg-lt"></td><td class="bg-msg-tb '+ cssfix +'msg-tt"></td><td class="bg-msg-lr '+ cssfix +'msg-rt"></td></tr><tr><td class="bg-msg-lr '+ cssfix +'msg-lm"><span class="bg-msg-lr"></span></td><td class="'+ cssfix +'msg-mm"><span>'+ _con.welcome +'</span></td><td class="bg-msg-lr '+ cssfix +'msg-rm"></td></tr><tr><td class="bg-msg-lr '+ cssfix +'msg-lb"></td><td class="bg-msg-tb '+ cssfix +'msg-bm"></td><td class="bg-msg-lr '+ cssfix +'msg-rb"></td></tr><tr><td></td></tr></tbody></table></div>');
			_this.scroll();
		}
		//切换右边的选项卡
		, 'tab': function(e){
			var _this = this
				, $ele = $(e.target)
				, _index = $ele.data('index');
			if($ele.hasClass(cssfix +'on')){
				return false;
			};
			$ele.addClass(cssfix +'on').siblings('a').removeClass(cssfix +'on');
			$('.'+ cssfix +'fr-content', _this.wrap).stop().animate({'marginLeft': 0 - parseInt(_index) * 300});
		}
		//提交一条消息
		, 'submit': function(e){
			var _this = this
				, _input = _this.input
				, _val = _trim.call(_input.val());
			if(_val === ''){
				return;
			};
			_this.send(_val);
			/*if(_isIE){
				_input.val(_input.attr('placeholder')).css('color','#999');
			}else{
				_input.val('');
			};*/
			_input.val('');
			if(_isMobile){
				_input.height(32).trigger('focus');
			}else if(_this.con.autoblur){
				_input.trigger("blur");
			};
		}
		//切换显示模式
		, remod: function(e){
			var _this = this
				, _con = _this.con
				, $ele = $(e.target)
				, $wrap = _this.wrap;
			_con.ismax = true;
			if(_con.mod === 'mini'){
				_con.mod = 'normal';
				if(!_this.ecss){
					_this.ecss = {
						'left': 0
						, 'top': 0
						, 'width': '100%'
					}
				}
				$wrap.css(_this.ecss).removeClass(cssfix +'mini')
			}else{
				_con.mod = 'mini';
				_this.ecss = {'left': $wrap.css('left'), 'width': $wrap.css('width'), 'top': $wrap.css('top')};
				$wrap.addClass(cssfix +'mini').css({'left': 'inherit', 'width': 280, 'top': 0, 'right': 0})
				
			};
			return _this.resize();
		}
		//最大化对话窗口
		, 'zoom': function(e){
			var _this = this
				, _con = _this.con
				, $ele = $(e.target)
			_con.ismax = !_con.ismax;
			if(_con.mod === 'mini'){
				_this.wrap.animate({right: _con.ismax ? 0 : -280});
			}else{
				$ele.toggleClass(cssfix +'icon-nor');
			};
			_this.resize();
		}
		//滚动对话内容到最后
		, 'scroll': function(){
			var _this = this;
			_this.view.scrollTop(_isMobile ? 100000 : _this.chat.height() - _this.view.height() + 20);
		}
		//发送一条消息
		, 'send': function(text){
			if(!text || typeof text !== 'string'){
				return;
			};
			text = text.replace(/\ /g,'');
			if(text == ""){
				return false;
			}
			var _this = this
				, _con = _this.con;
			var $question = $('<div class="'+ cssfix +'chat-ask"><div class="'+ cssfix +'chat-headimg"><span>我 '+ dateFormat.call(new Date(),'hh:mm:ss') +'&nbsp;</span></div><table class="'+ cssfix +'msg" cellspacing="0" cellpadding="0"><tbody><tr><td class="'+ cssfix +'msg-lt bg-msg-lr"></td><td class="'+ cssfix +'msg-tt bg-msg-tb"></td><td class="'+ cssfix +'msg-rt bg-msg-lr"></td></tr><tr><td class="'+ cssfix +'msg-lm bg-msg-lr"></td><td class="'+ cssfix +'msg-mm">'+ htmlEncode(text) +'</td><td class="'+ cssfix +'msg-rm bg-msg-lr"><span class="bg-msg-lr"></span></td></tr><tr><td class="'+ cssfix +'msg-lb bg-msg-lr"></td><td class="'+ cssfix +'msg-bm bg-msg-tb"></td><td class="'+ cssfix +'msg-rb bg-msg-lr"></td></tr></tbody></table></div>')
				, $answer = $('<div class="'+ cssfix +'chat-replay"><div class="'+ cssfix +'chat-headimg" >'+ (!!_con.headImg ? '<img src="'+ _con.headImg +'"/>' : '') +'<span>'+ _con.nick +' '+ dateFormat.call(new Date(),'hh:mm:ss') +'</span></div><table class="'+ cssfix +'msg" cellspacing="0" cellpadding="0"><tbody><tr><td class="bg-msg-lr '+ cssfix +'msg-lt"></td><td class="bg-msg-tb '+ cssfix +'msg-tt"></td><td class="bg-msg-lr '+ cssfix +'msg-rt"></td></tr><tr><td class="bg-msg-lr '+ cssfix +'msg-lm"><span class="bg-msg-lr"></span></td><td class="'+ cssfix +'msg-mm"><div class="'+ cssfix +'htmcont"><img src="http://img.alicdn.com/imgextra/i3/TB1tAEJJpXXXXXraXXXtKXbFXXX.gif"/></div></td><td class="bg-msg-lr '+ cssfix +'msg-rm"></td></tr><tr><td class="bg-msg-lr '+ cssfix +'msg-lb"></td><td class="bg-msg-tb '+ cssfix +'msg-bm"></td><td class="bg-msg-lr '+ cssfix +'msg-rb"></td></tr><tr><td></td></tr></tbody></table></div>');
			_this.chat.append($question).append($answer);
			_this.scroll();
			//console.log( _con.url + _con.appid +'/answer');
			_jsonp({
				'url': _con.url + _con.appid +'/answer'
				, 'data' : {'q': encodeURIComponent(text)}
				,'success': function(data){
					//data = {"question":"hello", "answer":"\n<h1 label=\"Title left\" name=\"tl\" style=\"border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;margin:0px 0px 10px;\">\n	<span style=\"color:#e36c09;\" class=\"ue_t\">[此处键入简历标题]</span>\n</h1>\n<p>\n	<span style=\"color:#e36c09;\"><br/></span>\n</p>\n<table width=\"100%\" border=\"1\" bordercolor=\"#95B3D7\" style=\"border-collapse:collapse;\">\n	<tbody>\n		<tr class=\"firstRow\">\n			<td width=\"200\" style=\"text-align:center;\" class=\"ue_t\">\n				【此处插入照片】\n			</td>\n			<td>\n				<p>\n					<br/>\n				</p>\n\n				<p>\n					联系电话：<span class=\"ue_t\">[键入您的电话]</span>\n				</p>\n\n				<p>\n					<br/>\n				</p>\n				<p>\n					电子邮件：<span class=\"ue_t\">[键入您的电子邮件地址]</span>\n				</p>\n				<p>\n					<br/>\n				</p>\n				<p>\n					家庭住址：<span class=\"ue_t\">[键入您的地址]</span>\n				</p>\n				<p>\n					<br/>\n				</p>\n			</td>\n		</tr>\n	</tbody>\n</table>\n<h3>\n	<span style=\"color:#e36c09;font-size:20px;\">目标职位</span>\n</h3>\n<p style=\"text-indent:2em;\" class=\"ue_t\">\n	[此处键入您的期望职位]\n</p>\n<h3>\n	<span style=\"color:#e36c09;font-size:20px;\">学历</span>\n</h3>\n<p></p>\n<ol style=\"list-style-type: decimal;\" class=\" list-paddingleft-2\">\n	<li>\n		<p>\n			<span class=\"ue_t\">[键入起止时间]</span> <span class=\"ue_t\">[键入学校名称] </span> <span class=\"ue_t\">[键入所学专业]</span> <span class=\"ue_t\">[键入所获学位]</span>\n		</p>\n	</li>\n	<li>\n		<p>\n			<span class=\"ue_t\">[键入起止时间]</span> <span class=\"ue_t\">[键入学校名称]</span> <span class=\"ue_t\">[键入所学专业]</span> <span class=\"ue_t\">[键入所获学位]</span>\n		</p>\n	</li>\n</ol>\n<h3>\n	<span style=\"color:#e36c09;font-size:20px;\" class=\"ue_t\">工作经验</span>\n</h3>\n<ol style=\"list-style-type: decimal;\" class=\" list-paddingleft-2\">\n	<li>\n		<p>\n			<span class=\"ue_t\">[键入起止时间]</span> <span class=\"ue_t\">[键入公司名称]</span> <span class=\"ue_t\">[键入职位名称]</span>\n		</p>\n	</li>\n	<ol style=\"list-style-type: lower-alpha;\" class=\" list-paddingleft-2\">\n		<li>\n			<p>\n				<span class=\"ue_t\">[键入负责项目]</span> <span class=\"ue_t\">[键入项目简介]</span>\n			</p>\n		</li>\n		<li>\n			<p>\n				<span class=\"ue_t\">[键入负责项目]</span> <span class=\"ue_t\">[键入项目简介]</span>\n			</p>\n		</li>\n	</ol>\n	<li>\n		<p>\n			<span class=\"ue_t\">[键入起止时间]</span> <span class=\"ue_t\">[键入公司名称]</span> <span class=\"ue_t\">[键入职位名称]</span>\n		</p>\n	</li>\n	<ol style=\"list-style-type: lower-alpha;\" class=\" list-paddingleft-2\">\n		<li>\n			<p>\n				<span class=\"ue_t\">[键入负责项目]</span> <span class=\"ue_t\">[键入项目简介]</span>\n			</p>\n		</li>\n	</ol>\n</ol>\n<p>\n	<span style=\"color:#e36c09;font-size:20px;\">掌握技能</span>\n</p>\n<p style=\"text-indent:2em;\">\n	&nbsp;<span class=\"ue_t\">[这里可以键入您所掌握的技能]</span><br/>\n</p>\n<p>\n	<br/>\n</p>\n<h1 label=\"Title center\" name=\"tc\" style=\"border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;\" class=\"ue_t\">\n	[此处键入文章标题]\n</h1>\n<p>\n	<img src=\"http://img.baidu.com/hi/youa/y_0034.gif\" width=\"300\" height=\"200\" border=\"0\" hspace=\"0\" vspace=\"0\" style=\"width:300px;height:200px;float:left;\"/>图文混排方法\n</p>\n<p>\n	1. 图片居左，文字围绕图片排版\n</p>\n<p>\n	方法：在文字前面插入图片，设置居左对齐，然后即可在右边输入多行文本\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	2. 图片居右，文字围绕图片排版\n</p>\n<p>\n	方法：在文字前面插入图片，设置居右对齐，然后即可在左边输入多行文本\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	3. 图片居中环绕排版\n</p>\n<p>\n	方法：亲，这个真心没有办法。。。\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	<img src=\"http://img.baidu.com/hi/youa/y_0040.gif\" width=\"300\" height=\"300\" border=\"0\" hspace=\"0\" vspace=\"0\" style=\"width:300px;height:300px;float:right;\"/>\n</p>\n<p>\n	还有没有什么其他的环绕方式呢？这里是居右环绕\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	欢迎大家多多尝试，为UEditor提供更多高质量模板！\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	占位\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	占位\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	占位\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	占位\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	占位\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	<br/>\n</p>\n<p>\n	<br/>\n</p>\n	  ", "score":0};
					if(data.answer.length > 150){
						$('.'+ cssfix +'msg', $answer).css('min-width', '75%');
					}
					$('.'+ cssfix +'msg-mm .'+ cssfix +'htmcont', $answer).html(!data.answer ? '&nbsp;' : data.answer);
					$('.'+ cssfix +'chat-headimg span', $answer).text(_con.nick +' '+ dateFormat.call(new Date(),'hh:mm:ss'));
					_this.scroll();
				}
				, 'error': function(){
					$('.'+ cssfix +'msg-mm .'+ cssfix +'htmcont', $answer).html('会话丢失');
				}
			})
		}
		//重置对话窗口大小
		, 'resize': function(){
			var $w = $(win)
				, _this = this
				, _con = _this.con;
			var _w = $w.width()
				, _h = $w.height()
				, _mw = _con.minWidth
				, _mh = _con.minHeight
				, _ismax = _con.ismax;
				var _h2 = _ismax ? (_h > _mh ? _h : _mh) : (_h > _mh ? _mh : _h) 
					, _w2 = _ismax ? (_w > _mw ? _w : _mw) : _mw;
				if(!_isMobile){
					if(_con.mod === 'mini'){
						_this.wrap.height(_h);
						_this.view.height(_h - 157);
					}else{
						_this.view.height(_h2 - 136);
						_this.wrap.css({
							'height': _h2
							, 'width': _w2
							, 'top': _ismax ? 0 : (_h > _mh ? parseInt((_h - _mh) / 2) : 0)
							, 'left': _ismax ? 0 : (_w > _mw ? parseInt((_w - _mw) / 2) : 0)
						});
						$('.'+ cssfix +'fr-content', _this.wrap).height(_h2 - 240);
						$('.'+ cssfix +'fr-area', _this.wrap).height(_h2 - 46);
						$('body').css('overflow',_ismax ? 'hidden' : 'auto');
					};
				}else{
					if(_con.mod === 'mini'){
						_this.wrap.css({'height': '44px'});
					}else{
						_this.wrap.css({'height': '100%'}).find('.'+ cssfix +'content').height(_h - 46);
					};
				};
			$('.'+ cssfix +'icon-max', _this.wrap)[(_con.ismax ? 'add' : 'remove') +'Class'](cssfix +'icon-nor');
			_this.scroll();
		}
		//拖动
		, move: function(target){
			var _doc = top.document
				, _body = _doc.body
				, $doc = $(_doc)
				, _this = this
				, _con = _this.con
				, $wrap = _this.wrap
				, $target = $(target, $wrap);
			var startX, startY, startL, startT;
			var _x, _y;
			var mouseCoords = function(ev){ 
				if(ev.pageX || ev.pageY){ 
					return {x:ev.pageX, y:ev.pageY}; 
				} 
				return{ 
					x:ev.clientX + _body.scrollLeft - _body.clientLeft, 
					y:ev.clientY + _body.scrollTop - _body.clientTop 
				}; 
			};
			var move = function(e){
				e = e || event;
				var poss = mouseCoords(e);
				var _w = _body.clientWidth;
				var _h = _body.clientHeight;
				_h = _h === 0 ? win.innerHeight : _h;
				var _left = startL + poss.x - startX
					, _top =  startT + poss.y - startY;
				_top = _top > _h - _y ?  _h - _y : _top;
				_top = _top < 0 ? 0 : _top;
				_left = _left > _w - _x ?  _w - _x : _left;
				_left = _left < 0 ? 0 : _left;
				$wrap.css({left: _left,top: _top});
				e.preventDefault && e.preventDefault();
			};
			$doc.on('mouseup', function(e){
				$doc.off('mousemove', move);
				$wrap.css('opacity', 1);
				$target.css('cursor', 'default');
			})
			$target.on('mousedown', function(e){
				if(_con.mod === 'normal' && !_con.ismax){
					e = e || event;
					var poss = mouseCoords(e);
					startX = poss.x;
					startY = poss.y;
					startL = parseInt($wrap.css('left'));
					startT = parseInt($wrap.css('top'));
					$doc.on('mousemove', move);
					$wrap.css('opacity', 0.9);
					_x = $wrap.width();
					_y = $wrap.height();
					$target.css('cursor', 'move');
				};
				e.preventDefault && e.preventDefault();
			});
		}
	};
	var test = 0;


	//加载外部css样式
	(function(){
		var cssFile = document.createElement("link")
			, head = document.getElementsByTagName("head")[0]
			, isload = false;
		cssFile.type = "text/css";
		cssFile.rel = 'stylesheet';
		cssFile.href = cssUrl;
		cssFile.onreadystatechange = function() { 
			var r = cssFile.readyState;
			if(!isload && (r === 'loaded' || r === 'complete')){
				new Robot(options);
				isload = true;
			} 
		};
		cssFile.onload = function(){
			if(!isload){
				new Robot(options);
				isload = true;
			}
		};
		head.appendChild(cssFile);
	})();
})(this, 
{
	mod: 'mini'																			//显示模式，mini侧边(PC网页时在右侧，手机网页在底侧)，normal默认模式
	//, ismax: false																	//初始时是否最大化窗口，PC网页时有效
	, url: 'http://api.smartnlp.cn/cloud/robot/'										//请求的接口地址
	, appid: '55d28d61d3a93df500131c24'
	, 'minWidth': 800																	//最小宽度
	//, 'minHeight': 576																//最小高度
	, colors: {
		header: '#f50'
		, border: '#f50'
		, button: '#c00'
	}
	//, title: '测试标题' 																//头部title文本
	, quicks: [																			//快速提交问题列表
		'我买的商品售后政策是怎样'
		, '订单提交成功后商品降价了，可以退给我差价吗？'
		, '订单提交成功后，还能修改吗？'
		, '怎么取消订单'
		, '货到哪里了，怎么不更新物流啊'
		, '我退货了运费怎么算'
		, '取消订单怎么退款'
		, '退款到哪儿'
		, '拒收有什么后果'
	]
	, tools: [																			//左侧工具栏，格式{label: '文本',icon: 'icon图标地址60*60', 
		{label: '天气预报',icon: 'http://img.alicdn.com/imgextra/i3/TB16M.kJpXXXXXAXVXXwu0bFXXX.png', href:'#'}
		, {label: '听首歌',icon: 'http://img.alicdn.com/imgextra/i3/TB17xcEJpXXXXXfXXXXwu0bFXXX.png', href:'#'}
		, {label: '指南针',icon: 'http://img.alicdn.com/imgextra/i1/TB10VUAJpXXXXczXXXXwu0bFXXX.png', href:'#'}
		, {label: '常用帮助',icon: 'http://img.alicdn.com/imgextra/i2/TB1FX7tJpXXXXccXpXXwu0bFXXX.png', href:'#'}
	]
	, colors: {																		//设置颜色，header:头部颜色，border:边框颜色（mini模式下有效），button:发送按钮颜色
		'header': '#2d8ef2'
		, 'border': '#2d8ef2'
		, 'button': '#2d8ef2'
	}
	//, zindex: 999																		//浮动层zindex
	, showside: true																	//是否显示左边栏
	, placeholder: '文本框提示文本'
	//, callImg: 'http://img.alicdn.com/imgextra/i4/TB1tMo3JpXXXXbwXVXXwu0bFXXX.png'	//客服图片　80*80像素
	//, callUrl: '#'																	//点击客服图片后的链接地址
	//, codeImg: 'http://img.alicdn.com/imgextra/i1/TB197MVJpXXXXXuXVXXSutbFXXX.jpg'	//二维码图片　80*80像素
	//, codeBigImg: 'http://img.alicdn.com/imgextra/i1/TB197MVJpXXXXXuXVXXSutbFXXX.jpg'	//（废除）点击二维码显示的大图片　262*262像素
	//, welcome: '您好'																	//机器人欢迎语
	//, nick: '小智'	
	//, autoblur: false																	//消息发送后文本框是否自动失去焦点
	, newurl: 'http://www.smartnlp.cn/test.html'										//新窗口打开新页面的URL,手机版有效
	, logo: 'http://img1.cache.netease.com/3g/img14/zhuzhan/logo1.png'
	, headImg: 'http://himg.baidu.com/sys/portrait/hotitem/wildkid/1'
});