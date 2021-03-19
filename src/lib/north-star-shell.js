(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.NorthStarShell = {}));
}(this, (function (exports) { 'use strict';

	var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return p(n,o,l&&l.key,l&&l.ref)}function p(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function y(){return {}}function d(n){return n.children}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l)return n.__?w(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?w(n):null}function g(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||o!==n.debounceRendering)&&((o=n.debounceRendering)||t)(_);}function _(){for(var n;i=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],i=A(r,t,a({},t),l.__n,void 0!==r.ownerSVGElement,null,u,null==o?w(t):o),T(u,t),i!=o&&g(t)));});}function b(n,l,u,i,t,o,r,f,s){var a,h,p,y,d,m,g,k=u&&u.__k||c,_=k.length;if(f==e&&(f=null!=o?o[0]:_?w(u,0):null),a=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[a])||p&&u.key==p.key&&u.type===p.type)k[a]=void 0;else for(h=0;h<_;h++){if((p=k[h])&&u.key==p.key&&u.type===p.type){k[h]=void 0;break}p=null;}if(y=A(n,u,p=p||e,i,t,o,r,f,s),(h=u.ref)&&p.ref!=h&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(h,u.__c||y,u)),null!=y){var c;if(null==m&&(m=y),void 0!==u.__d)c=u.__d,u.__d=void 0;else if(o==p||y!=f||null==y.parentNode){n:if(null==f||f.parentNode!==n)n.appendChild(y),c=null;else {for(d=f,h=0;(d=d.nextSibling)&&h<_;h+=2)if(d==y)break n;n.insertBefore(y,f),c=f;}"option"==l.type&&(n.value="");}f=void 0!==c?c:y.nextSibling,"function"==typeof l.type&&(l.__d=f);}else f&&p.__e==f&&f.parentNode!=n&&(f=w(p));}return a++,u}),l.__e=m,null!=o&&"function"!=typeof l.type)for(a=o.length;a--;)null!=o[a]&&v(o[a]);for(a=_;a--;)null!=k[a]&&D(k[a],k[a]);if(g)for(a=0;a<g.length;a++)j(g[a],g[++a],g[++a]);}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)x(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?p(null,n,null,null):null!=n.__e||null!=n.__c?p(n.type,n.props,n.key,null):n):n);return u}function P(n,l,u,i,t){var o;for(o in u)o in l||N(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||N(n,o,l[o],u[o],i);}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===s.test(l)?u+"px":null==u?"":u;}function N(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else {if("string"==typeof i&&(o.cssText="",i=null),i)for(r in i)u&&r in u||C(o,r,"");if(u)for(f in u)i&&u[f]===i[f]||C(o,f,u[f]);}else "o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,z,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,z,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type](n.event?n.event(l):l);}function A(l,u,i,t,o,r,f,e,c){var s,v,h,p,y,w,g,k,_,x,P=u.type;if(void 0!==u.constructor)return null;(s=n.__b)&&s(u);try{n:if("function"==typeof P){if(k=u.props,_=(s=P.contextType)&&t[s.__c],x=s?_?_.props.value:s.__:t,i.__c?g=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(k,x):(u.__c=v=new m(k,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=k,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=a({},v.__s)),a(v.__s,P.getDerivedStateFromProps(k,v.__s))),p=v.props,y=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&k!==p&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(k,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(k,v.__s,x)){for(v.props=k,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),s=0;s<u.__k.length;s++)u.__k[s]&&(u.__k[s].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(k,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(p,y,w);});}v.context=x,v.props=k,v.state=v.__s,(s=n.__r)&&s(u),v.__d=!1,v.__v=u,v.__P=l,s=v.render(v.props,v.state,v.context),u.__k=null!=s&&s.type==d&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=v.getChildContext&&(t=a(a({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(p,y)),b(l,u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),g&&(v.__E=v.__=null),v.__e=!1;}else u.__e=$(i.__e,u,i,t,o,r,f,c);(s=n.diffed)&&s(u);}catch(l){n.__e(l,u,i);}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function $(n,l,u,i,t,o,r,f){var s,a,v,h,p,y=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null;}if(null===l.type)y!==d&&n.data!=d&&(n.data=d);else if(l!==u){if(null!=o&&(o=c.slice.call(n.childNodes)),v=(y=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(y===e)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}P(n,d,y,t,f),l.__k=l.props.children,h||b(n,l,u,i,"foreignObject"!==l.type&&t,o,r,e,f),f||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked));}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function D(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&D(t[r],u,i);null!=o&&v(o);}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,o,f;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],A(u,(t?u:i||u).__k=l,o||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:c.slice.call(u.childNodes),f,i||e,t),T(f,l);}function I(n,l){H(n,l,r);}function L(n,l){return l=a(a({},n.props),l),arguments.length>2&&(l.children=c.slice.call(arguments,2)),p(n.type,l,l.key||n.key,l.ref||n.ref)}function M(n){var l={},u={__c:"__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,k(n);});},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return k(u.__E=u)}catch(l){n=l;}throw n}},l=function(n){return null!=n&&void 0===n.constructor},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=e,f=0;

	var preact_module = /*#__PURE__*/Object.freeze({
		__proto__: null,
		render: H,
		hydrate: I,
		createElement: h,
		h: h,
		Fragment: d,
		createRef: y,
		get isValidElement () { return l; },
		Component: m,
		cloneElement: L,
		createContext: M,
		toChildArray: x,
		_unmount: D,
		get options () { return n; }
	});

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var preact = createCommonjsModule(function (module, exports) {
	var t=preact_module;function n(t,n){for(var r in n)t[r]=n[r];return t}function r(t){this.getChildContext=function(){return {store:t.store}};}r.prototype.render=function(t){return t.children&&t.children[0]||t.children},exports.connect=function(r,e){var o;return "function"!=typeof r&&("string"==typeof(o=r||{})&&(o=o.split(/\s*,\s*/)),r=function(t){for(var n={},r=0;r<o.length;r++)n[o[r]]=t[o[r]];return n}),function(o){function i(i,u){var c=this,f=u.store,s=r(f?f.getState():{},i),a=e?function(t,n){"function"==typeof t&&(t=t(n));var r={};for(var e in t)r[e]=n.action(t[e]);return r}(e,f):{store:f},p=function(){var t=r(f?f.getState():{},i);for(var n in t)if(t[n]!==s[n])return s=t,c.setState({});for(var e in s)if(!(e in t))return s=t,c.setState({})};this.componentWillReceiveProps=function(t){i=t,p();},this.componentDidMount=function(){f.subscribe(p);},this.componentWillUnmount=function(){f.unsubscribe(p);},this.render=function(r){return t.h(o,n(n(n({},a),r),s))};}return (i.prototype=new t.Component).constructor=i}},exports.Provider=r;

	});
	var preact_1 = preact.connect;
	var preact_2 = preact.Provider;

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}
	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);

	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }

	  tag.appendChild(document.createTextNode(''));
	  return tag;
	}

	var StyleSheet =
	/*#__PURE__*/
	function () {
	  function StyleSheet(options) {
	    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.before = null;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      var _tag = createStyleElement(this);

	      var before;

	      if (this.tags.length === 0) {
	        before = this.before;
	      } else {
	        before = this.tags[this.tags.length - 1].nextSibling;
	      }

	      this.container.insertBefore(_tag, before);
	      this.tags.push(_tag);
	    }

	    var tag = this.tags[this.tags.length - 1];

	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);

	      try {
	        // this is a really hot path
	        // we check the second character first because having "i"
	        // as the second character will happen less often than
	        // having "@" as the first character
	        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools

	        sheet.insertRule(rule, // we need to insert @import rules before anything else
	        // otherwise there will be an error
	        // technically this means that the @import rules will
	        // _usually_(not always since there could be multiple style tags)
	        // be the first ones in prod and generally later in dev
	        // this shouldn't really matter in the real world though
	        // @import is generally only used for font faces from google fonts and etc.
	        // so while this could be technically correct then it would be slower and larger
	        // for a tiny bit of correctness that won't matter in the real world
	        isImportRule ? 0 : sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }

	    this.ctr++;
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };

	  return StyleSheet;
	}();

	function stylis_min (W) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
	      g = e.charCodeAt(l);
	      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

	      if (0 === b + n + v + m) {
	        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;

	            default:
	              f += e.charAt(l);
	          }

	          g = 59;
	        }

	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;

	            for (t = ++l; l < B;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;

	                case 125:
	                  k--;
	                  break;

	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < J; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }

	                              break;

	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }

	                          }
	                        }

	                        l = u;
	                      }

	                  }

	                  break;

	                case 91:
	                  g++;

	                case 40:
	                  g++;

	                case 34:
	                case 39:
	                  for (; l++ < J && e.charCodeAt(l) !== g;) {
	                  }

	              }

	              if (0 === k) break;
	              l++;
	            }

	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);

	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;

	                  default:
	                    r = O;
	                }

	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(da, ea);

	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;

	                  case 107:
	                    f = f.replace(fa, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;

	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;

	              default:
	                k = M(c, X(c, f, I), k, h, a + 1);
	            }

	            F += k;
	            k = I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;

	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;

	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }

	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }

	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
	          z = 1;
	          D++;
	          break;

	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            z++;
	            break;
	          }

	        default:
	          z++;
	          y = e.charAt(l);

	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;

	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;

	            case 0:
	              y = '\\0';
	              break;

	            case 12:
	              y = '\\f';
	              break;

	            case 11:
	              y = '\\v';
	              break;

	            case 38:
	              0 === n + b + m && (r = I = 1, y = '\f' + y);
	              break;

	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

	                case 8:
	                  111 === K && (E = K);
	              }
	              break;

	            case 58:
	              0 === n + b + m && (u = l);
	              break;

	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;

	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;

	            case 91:
	              0 === n + b + v && m++;
	              break;

	            case 93:
	              0 === n + b + v && m--;
	              break;

	            case 41:
	              0 === n + b + m && v--;
	              break;

	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * K) {
	                  case 533:
	                    break;

	                  default:
	                    q = 1;
	                }
	                v++;
	              }

	              break;

	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;

	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;

	                    case 220:
	                      t = l, b = 42;
	                  }

	                  break;

	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }

	          0 === b && (f += y);
	      }

	      K = x;
	      x = g;
	      l++;
	    }

	    t = p.length;

	    if (0 < t) {
	      r = c;
	      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';

	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);

	        switch (E) {
	          case 111:
	            p = p.replace(ha, ':-moz-$1') + p;
	            break;

	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }

	        E = 0;
	      }
	    }

	    return G + p + F;
	  }

	  function X(d, c, e) {
	    var h = c.trim().split(ia);
	    c = h;
	    var a = h.length,
	        m = d.length;

	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;

	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = Z(d, c[b], e).trim();
	        }

	        break;

	      default:
	        var v = b = 0;

	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = Z(d[n] + ' ', h[b], e).trim();
	          }
	        }

	    }

	    return c;
	  }

	  function Z(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));

	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());

	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());

	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }

	    return d + c;
	  }

	  function P(d, c, e, h) {
	    var a = d + ';',
	        m = 2 * c + 3 * e + 4 * h;

	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }

	    if (0 === w || 2 === w && !L(a, 1)) return a;

	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;

	      case 969:
	      case 942:
	        return '-webkit-' + a + a;

	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;

	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
	        break;

	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;

	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;

	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

	      case 1005:
	        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;

	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;

	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;

	          case 220:
	            b = a.replace(G, 'lr');
	            break;

	          default:
	            return a;
	        }

	        return '-webkit-' + a + '-ms-' + b + a;

	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;

	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;

	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;

	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }

	        return a + ';';

	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
	        }
	        break;

	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

	      case 931:
	      case 953:
	        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;

	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
	    }

	    return a;
	  }

	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	        h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
	  }

	  function ea(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
	  }

	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < A; ++g) {
	      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;

	        default:
	          x = w;
	      }
	    }

	    if (x !== c) return x;
	  }

	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        A = S.length = 0;
	        break;

	      default:
	        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
	          T(d[c]);
	        } else Y = !!d | 0;
	    }

	    return T;
	  }

	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }

	  function B(d, c) {
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];

	    if (0 < A) {
	      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }

	    var a = M(O, e, c, 0, 0);
	    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    z = D = 1;
	    return a;
	  }

	  var ca = /^\0+/g,
	      N = /[\0\r\f]/g,
	      aa = /: */g,
	      ka = /zoo|gra/,
	      ma = /([,: ])(transform)/g,
	      ia = /,\r+?/g,
	      F = /([\t\r\n ])*\f?&/g,
	      fa = /@(k\w+)\s*(\S*)\s*/,
	      Q = /::(place)/g,
	      ha = /:(read-only)/g,
	      G = /[svh]\w+-[tblr]{2}/,
	      da = /\(\s*(.*)\s*\)/g,
	      oa = /([\s\S]*?);/g,
	      ba = /-self|flex-/g,
	      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	      la = /stretch|:\s*\w+\-(?:conte|avail)/,
	      ja = /([^-])(image-set\()/,
	      z = 1,
	      D = 1,
	      E = 0,
	      w = 1,
	      O = [],
	      S = [],
	      A = 0,
	      R = null,
	      Y = 0,
	      V = '';
	  B.use = T;
	  B.set = U;
	  void 0 !== W && U(W);
	  return B;
	}

	var weakMemoize = function weakMemoize(func) {
	  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
	  var cache = new WeakMap();
	  return function (arg) {
	    if (cache.has(arg)) {
	      // $FlowFixMe
	      return cache.get(arg);
	    }

	    var ret = func(arg);
	    cache.set(arg, ret);
	    return ret;
	  };
	};

	// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
	// inlined to avoid umd wrapper and peerDep warnings/installing stylis
	// since we use stylis after closure compiler
	var delimiter = '/*|*/';
	var needle = delimiter + '}';

	function toSheet(block) {
	  if (block) {
	    Sheet.current.insert(block + '}');
	  }
	}

	var Sheet = {
	  current: null
	};
	var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
	  switch (context) {
	    // property
	    case 1:
	      {
	        switch (content.charCodeAt(0)) {
	          case 64:
	            {
	              // @import
	              Sheet.current.insert(content + ';');
	              return '';
	            }
	          // charcode for l

	          case 108:
	            {
	              // charcode for b
	              // this ignores label
	              if (content.charCodeAt(2) === 98) {
	                return '';
	              }
	            }
	        }

	        break;
	      }
	    // selector

	    case 2:
	      {
	        if (ns === 0) return content + delimiter;
	        break;
	      }
	    // at-rule

	    case 3:
	      {
	        switch (ns) {
	          // @font-face, @page
	          case 102:
	          case 112:
	            {
	              Sheet.current.insert(selectors[0] + content);
	              return '';
	            }

	          default:
	            {
	              return content + (at === 0 ? delimiter : '');
	            }
	        }
	      }

	    case -2:
	      {
	        content.split(needle).forEach(toSheet);
	      }
	  }
	};
	var removeLabel = function removeLabel(context, content) {
	  if (context === 1 && // charcode for l
	  content.charCodeAt(0) === 108 && // charcode for b
	  content.charCodeAt(2) === 98 // this ignores label
	  ) {
	      return '';
	    }
	};

	var isBrowser = typeof document !== 'undefined';
	var rootServerStylisCache = {};
	var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
	  var getCache = weakMemoize(function () {
	    return {};
	  });
	  var prefixTrueCache = {};
	  var prefixFalseCache = {};
	  return function (prefix) {
	    if (prefix === undefined || prefix === true) {
	      return prefixTrueCache;
	    }

	    if (prefix === false) {
	      return prefixFalseCache;
	    }

	    return getCache(prefix);
	  };
	});

	var createCache = function createCache(options) {
	  if (options === undefined) options = {};
	  var key = options.key || 'css';
	  var stylisOptions;

	  if (options.prefix !== undefined) {
	    stylisOptions = {
	      prefix: options.prefix
	    };
	  }

	  var stylis = new stylis_min(stylisOptions);

	  var inserted = {}; // $FlowFixMe

	  var container;

	  if (isBrowser) {
	    container = options.container || document.head;
	    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
	    Array.prototype.forEach.call(nodes, function (node) {
	      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

	      attrib.split(' ').forEach(function (id) {
	        inserted[id] = true;
	      });

	      if (node.parentNode !== container) {
	        container.appendChild(node);
	      }
	    });
	  }

	  var _insert;

	  if (isBrowser) {
	    stylis.use(options.stylisPlugins)(ruleSheet);

	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      var name = serialized.name;
	      Sheet.current = sheet;

	      stylis(selector, serialized.styles);

	      if (shouldCache) {
	        cache.inserted[name] = true;
	      }
	    };
	  } else {
	    stylis.use(removeLabel);
	    var serverStylisCache = rootServerStylisCache;

	    if (options.stylisPlugins || options.prefix !== undefined) {
	      stylis.use(options.stylisPlugins); // $FlowFixMe

	      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
	    }

	    var getRules = function getRules(selector, serialized) {
	      var name = serialized.name;

	      if (serverStylisCache[name] === undefined) {
	        serverStylisCache[name] = stylis(selector, serialized.styles);
	      }

	      return serverStylisCache[name];
	    };

	    _insert = function _insert(selector, serialized, sheet, shouldCache) {
	      var name = serialized.name;
	      var rules = getRules(selector, serialized);

	      if (cache.compat === undefined) {
	        // in regular mode, we don't set the styles on the inserted cache
	        // since we don't need to and that would be wasting memory
	        // we return them so that they are rendered in a style tag
	        if (shouldCache) {
	          cache.inserted[name] = true;
	        }

	        return rules;
	      } else {
	        // in compat mode, we put the styles on the inserted cache so
	        // that emotion-server can pull out the styles
	        // except when we don't want to cache it which was in Global but now
	        // is nowhere but we don't want to do a major right now
	        // and just in case we're going to leave the case here
	        // it's also not affecting client side bundle size
	        // so it's really not a big deal
	        if (shouldCache) {
	          cache.inserted[name] = rules;
	        } else {
	          return rules;
	        }
	      }
	    };
	  }

	  var cache = {
	    key: key,
	    sheet: new StyleSheet({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  return cache;
	};

	/* eslint-disable */
	// Inspired by https://github.com/garycourt/murmurhash-js
	// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
	function murmur2(str) {
	  // 'm' and 'r' are mixing constants generated offline.
	  // They're not really 'magic', they just happen to work well.
	  // const m = 0x5bd1e995;
	  // const r = 24;
	  // Initialize the hash
	  var h = 0; // Mix 4 bytes at a time into the hash

	  var k,
	      i = 0,
	      len = str.length;

	  for (; len >= 4; ++i, len -= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^=
	    /* k >>> r: */
	    k >>> 24;
	    h =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
	    /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array


	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h =
	      /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.


	  h ^= h >>> 13;
	  h =
	  /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	function memoize(fn) {
	  var cache = {};
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

	var isCustomProperty = function isCustomProperty(property) {
	  return property.charCodeAt(1) === 45;
	};

	var isProcessableValue = function isProcessableValue(value) {
	  return value != null && typeof value !== 'boolean';
	};

	var processStyleName = memoize(function (styleName) {
	  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});

	var processStyleValue = function processStyleValue(key, value) {
	  switch (key) {
	    case 'animation':
	    case 'animationName':
	      {
	        if (typeof value === 'string') {
	          return value.replace(animationRegex, function (match, p1, p2) {
	            cursor = {
	              name: p1,
	              styles: p2,
	              next: cursor
	            };
	            return p1;
	          });
	        }
	      }
	  }

	  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
	  if (interpolation == null) {
	    return '';
	  }

	  if (interpolation.__emotion_styles !== undefined) {

	    return interpolation;
	  }

	  switch (typeof interpolation) {
	    case 'boolean':
	      {
	        return '';
	      }

	    case 'object':
	      {
	        if (interpolation.anim === 1) {
	          cursor = {
	            name: interpolation.name,
	            styles: interpolation.styles,
	            next: cursor
	          };
	          return interpolation.name;
	        }

	        if (interpolation.styles !== undefined) {
	          var next = interpolation.next;

	          if (next !== undefined) {
	            // not the most efficient thing ever but this is a pretty rare case
	            // and there will be very few iterations of this generally
	            while (next !== undefined) {
	              cursor = {
	                name: next.name,
	                styles: next.styles,
	                next: cursor
	              };
	              next = next.next;
	            }
	          }

	          var styles = interpolation.styles + ";";

	          return styles;
	        }

	        return createStringFromObject(mergedProps, registered, interpolation);
	      }

	    case 'function':
	      {
	        if (mergedProps !== undefined) {
	          var previousCursor = cursor;
	          var result = interpolation(mergedProps);
	          cursor = previousCursor;
	          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
	        }

	        break;
	      }
	  } // finalize string values (regular strings and functions interpolated into css calls)


	  if (registered == null) {
	    return interpolation;
	  }

	  var cached = registered[interpolation];

	  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
	}

	function createStringFromObject(mergedProps, registered, obj) {
	  var string = '';

	  if (Array.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      string += handleInterpolation(mergedProps, registered, obj[i], false);
	    }
	  } else {
	    for (var _key in obj) {
	      var value = obj[_key];

	      if (typeof value !== 'object') {
	        if (registered != null && registered[value] !== undefined) {
	          string += _key + "{" + registered[value] + "}";
	        } else if (isProcessableValue(value)) {
	          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
	        }
	      } else {
	        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
	          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	        }

	        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
	          for (var _i = 0; _i < value.length; _i++) {
	            if (isProcessableValue(value[_i])) {
	              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
	            }
	          }
	        } else {
	          var interpolated = handleInterpolation(mergedProps, registered, value, false);

	          switch (_key) {
	            case 'animation':
	            case 'animationName':
	              {
	                string += processStyleName(_key) + ":" + interpolated + ";";
	                break;
	              }

	            default:
	              {

	                string += _key + "{" + interpolated + "}";
	              }
	          }
	        }
	      }
	    }
	  }

	  return string;
	}

	var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
	// keyframes are stored on the SerializedStyles object as a linked list


	var cursor;
	var serializeStyles = function serializeStyles(args, registered, mergedProps) {
	  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
	    return args[0];
	  }

	  var stringMode = true;
	  var styles = '';
	  cursor = undefined;
	  var strings = args[0];

	  if (strings == null || strings.raw === undefined) {
	    stringMode = false;
	    styles += handleInterpolation(mergedProps, registered, strings, false);
	  } else {

	    styles += strings[0];
	  } // we start at 1 since we've already handled the first arg


	  for (var i = 1; i < args.length; i++) {
	    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

	    if (stringMode) {

	      styles += strings[i];
	    }
	  }


	  labelPattern.lastIndex = 0;
	  var identifierName = '';
	  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

	  while ((match = labelPattern.exec(styles)) !== null) {
	    identifierName += '-' + // $FlowFixMe we know it's not null
	    match[1];
	  }

	  var name = murmur2(styles) + identifierName;

	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	var isBrowser$1 = typeof document !== 'undefined';
	function getRegisteredStyles(registered, registeredStyles, classNames) {
	  var rawClassName = '';
	  classNames.split(' ').forEach(function (className) {
	    if (registered[className] !== undefined) {
	      registeredStyles.push(registered[className]);
	    } else {
	      rawClassName += className + " ";
	    }
	  });
	  return rawClassName;
	}
	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	  var className = cache.key + "-" + serialized.name;

	  if ( // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false || // we need to always store it if we're in compat mode and
	  // in node since emotion-server relies on whether a style is in
	  // the registered cache to know whether a style is global or not
	  // also, note that this check will be dead code eliminated in the browser
	  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
	    cache.registered[className] = serialized.styles;
	  }

	  if (cache.inserted[serialized.name] === undefined) {
	    var stylesForSSR = '';
	    var current = serialized;

	    do {
	      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

	      if (!isBrowser$1 && maybeStyles !== undefined) {
	        stylesForSSR += maybeStyles;
	      }

	      current = current.next;
	    } while (current !== undefined);

	    if (!isBrowser$1 && stylesForSSR.length !== 0) {
	      return stylesForSSR;
	    }
	  }
	};

	function insertWithoutScoping(cache, serialized) {
	  if (cache.inserted[serialized.name] === undefined) {
	    return cache.insert('', serialized, cache.sheet, true);
	  }
	}

	function merge(registered, css, className) {
	  var registeredStyles = [];
	  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

	  if (registeredStyles.length < 2) {
	    return className;
	  }

	  return rawClassName + css(registeredStyles);
	}

	var createEmotion = function createEmotion(options) {
	  var cache = createCache(options); // $FlowFixMe

	  cache.sheet.speedy = function (value) {

	    this.isSpeedy = value;
	  };

	  cache.compat = true;

	  var css = function css() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var serialized = serializeStyles(args, cache.registered, undefined);
	    insertStyles(cache, serialized, false);
	    return cache.key + "-" + serialized.name;
	  };

	  var keyframes = function keyframes() {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    var serialized = serializeStyles(args, cache.registered);
	    var animation = "animation-" + serialized.name;
	    insertWithoutScoping(cache, {
	      name: serialized.name,
	      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
	    });
	    return animation;
	  };

	  var injectGlobal = function injectGlobal() {
	    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    var serialized = serializeStyles(args, cache.registered);
	    insertWithoutScoping(cache, serialized);
	  };

	  var cx = function cx() {
	    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	      args[_key4] = arguments[_key4];
	    }

	    return merge(cache.registered, css, classnames(args));
	  };

	  return {
	    css: css,
	    cx: cx,
	    injectGlobal: injectGlobal,
	    keyframes: keyframes,
	    hydrate: function hydrate(ids) {
	      ids.forEach(function (key) {
	        cache.inserted[key] = true;
	      });
	    },
	    flush: function flush() {
	      cache.registered = {};
	      cache.inserted = {};
	      cache.sheet.flush();
	    },
	    // $FlowFixMe
	    sheet: cache.sheet,
	    cache: cache,
	    getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
	    merge: merge.bind(null, cache.registered, css)
	  };
	};

	var classnames = function classnames(args) {
	  var cls = '';

	  for (var i = 0; i < args.length; i++) {
	    var arg = args[i];
	    if (arg == null) continue;
	    var toAdd = void 0;

	    switch (typeof arg) {
	      case 'boolean':
	        break;

	      case 'object':
	        {
	          if (Array.isArray(arg)) {
	            toAdd = classnames(arg);
	          } else {
	            toAdd = '';

	            for (var k in arg) {
	              if (arg[k] && k) {
	                toAdd && (toAdd += ' ');
	                toAdd += k;
	              }
	            }
	          }

	          break;
	        }

	      default:
	        {
	          toAdd = arg;
	        }
	    }

	    if (toAdd) {
	      cls && (cls += ' ');
	      cls += toAdd;
	    }
	  }

	  return cls;
	};

	var _createEmotion = createEmotion(),
	    cx = _createEmotion.cx,
	    css = _createEmotion.css;

	function absolutePosition(left, top) {
	    return { left: left.toString(), top: top.toString(), position: 'absolute' };
	}

	function centerHorizontallyVertically() {
	    return {
	        alignItems: 'center',
	        display: 'flex',
	        justifyContent: 'center',
	        textAlign: 'center'
	    };
	}

	function clickableCursor() {
	    return { cursor: 'pointer' };
	}

	function rgb(r, g, b) {
	    var red = toHexadecimal(r);
	    var green = toHexadecimal(g);
	    var blue = toHexadecimal(b);
	    return "#" + red + green + blue;
	}
	function toHexadecimal(n) {
	    return ("0" + n.toString(16)).slice(-2).toUpperCase();
	}

	var white = rgb(255, 255, 255);
	var gray1 = rgb(235, 239, 242);
	var gray3 = rgb(216, 224, 229);
	var gray4 = rgb(197, 209, 216);
	var gray5 = rgb(182, 195, 204);
	var gray7 = rgb(150, 168, 178);
	var gray9 = rgb(116, 139, 153);
	var gray10 = rgb(103, 126, 140);
	var gray11 = rgb(89, 113, 127);
	var gray12 = rgb(79, 100, 114);
	var gray14 = rgb(54, 76, 89);
	var gray15 = rgb(44, 64, 76);
	var gray18 = rgb(18, 31, 38);
	var selectHover = rgb(6, 87, 105);
	var selectDefault = rgb(9, 129, 156);
	var selectPressed = rgb(3, 44, 54);
	var primaryDefault = rgb(0, 99, 166);
	var primaryPressed = rgb(0, 61, 102);
	var primaryHover = rgb(0, 84, 144);

	function defaultCursor() {
	    return { cursor: 'auto' };
	}

	var fonts = [
	    'BlinkMacSystemFont',
	    '-apple-system',
	    '"Segoe UI"',
	    '"Roboto"',
	    '"Oxygen"',
	    '"Ubuntu"',
	    '"Cantarell"',
	    '"Fira Sans"',
	    '"Droid Sans"',
	    '"Helvetica Neue"',
	    '"Helvetica"',
	    '"Arial"',
	    'sans-serif'
	];
	var element = {
	    border: 0,
	    boxSizing: 'border-box',
	    fontFamily: fonts.join(',') + ";",
	    fontSize: '100%',
	    padding: 0,
	    lineHeight: 1.15,
	    margin: 0,
	    verticalAlign: 'baseline',
	    '&:after': {
	        boxSizing: 'border-box'
	    },
	    '&:before': {
	        boxSizing: 'border-box'
	    }
	};
	var button = {
	    fontFamily: element.fontFamily,
	    fontSize: element.fontSize,
	    lineHeight: element.lineHeight,
	    margin: element.margin,
	    overflow: 'visible',
	    textTransform: 'none',
	    WebkitAppearance: 'button',
	    WebkitTextSizeAdjust: '100%'
	};

	var ellipsis = {
	    overflow: 'hidden',
	    textOverflow: 'ellipsis',
	    whiteSpace: 'nowrap'
	};

	function fillFlexContainer(value) {
	    if (value === void 0) { value = 1; }
	    return { flex: value };
	}

	function geFont() {
	    return { fontFamily: 'GE Inspira Sans' };
	}

	function sensibleBoxModel() {
	    return { boxSizing: 'border-box' };
	}

	/* eslint-disable @typescript-eslint/camelcase */
	var tabBar = {
	    borderBottom: {
	        color: gray5,
	        style: 'solid',
	        size__px: 1
	    },
	    height__px: 50
	};
	var utilityMenu = {
	    fromEdge__px: 15
	};
	var utilityMenu__target = {
	    size__px: 22
	};
	var utilityMenu__icon = {
	    color: gray18,
	    size__px: 16,
	    between__px: 20
	};

	function px(value) {
	    if (value === 0)
	        return '0';
	    return value + "px";
	}

	function verticalAutoScroll() {
	    return { overflowY: 'auto' };
	}

	var className = css(__assign(__assign({}, sensibleBoxModel()), { height: '35px', padding: '10px 20px 10px 0', textAlign: 'right', width: '100%' }));
	var defaultText = css(__assign(__assign({}, geFont()), { display: 'inline-block', fontSize: '15px' }));
	var enabledText = css(__assign(__assign({}, clickableCursor()), { color: primaryDefault }));
	var disabledText = css(__assign(__assign({}, defaultCursor()), { color: gray12, cursor: 'not-allowed' }));
	var pipe = css(__assign(__assign({}, geFont()), { color: gray15, display: 'inline-block', fontSize: '15px', padding: '0 5px 0 5px' }));
	var ExpandCollapseAll = function (props) { return (h("div", { "data-testid": "app-menu__expand-collapse-all", className: className },
	    h("span", { className: expandClassName(props), title: expandTooltip(props), onClick: onExpandClick(props) }, props.expandLabel),
	    h("span", { className: pipe }, "|"),
	    h("span", { className: collapseClassName(props), title: collapseTooltip(props), onClick: onCollapseClick(props) }, props.collapseLabel))); };
	function expandClassName(_a) {
	    var _b;
	    var state = _a.state;
	    return cx(defaultText, (_b = {},
	        _b[disabledText] = state === 'all-expanded',
	        _b[enabledText] = state === 'mixed' || state === 'all-collapsed',
	        _b));
	}
	function expandTooltip(_a) {
	    var state = _a.state, expandLabel = _a.expandLabel;
	    if (state === 'all-expanded')
	        return undefined;
	    return expandLabel;
	}
	function onExpandClick(props) {
	    if (props.state === 'all-expanded')
	        return undefined;
	    return props.onExpandClick;
	}
	function collapseClassName(_a) {
	    var _b;
	    var state = _a.state;
	    return cx(defaultText, (_b = {},
	        _b[disabledText] = state === 'all-collapsed',
	        _b[enabledText] = state === 'mixed' || state === 'all-expanded',
	        _b));
	}
	function collapseTooltip(_a) {
	    var state = _a.state, collapseLabel = _a.collapseLabel;
	    if (state === 'all-collapsed')
	        return undefined;
	    return collapseLabel;
	}
	function onCollapseClick(props) {
	    if (props.state === 'all-collapsed')
	        return undefined;
	    return props.onCollapseClick;
	}

	function t$1(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return "'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n$1(t){return !!t&&!!t[Q]}function r$1(t){return !!t&&(function(t){if(!t||"object"!=typeof t)return !1;var n=Object.getPrototypeOf(t);return !n||n===Object.prototype}(t)||Array.isArray(t)||!!t[L$1]||!!t.constructor[L$1]||s$1(t)||v$1(t))}function i$1(t,n,r){void 0===r&&(r=!1),0===o$1(t)?(r?Object.keys:Z)(t).forEach((function(e){r&&"symbol"==typeof e||n(e,t[e],t);})):t.forEach((function(r,e){return n(e,r,t)}));}function o$1(t){var n=t[Q];return n?n.i>3?n.i-4:n.i:Array.isArray(t)?1:s$1(t)?2:v$1(t)?3:0}function u$1(t,n){return 2===o$1(t)?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function a$1(t,n){return 2===o$1(t)?t.get(n):t[n]}function f$1(t,n,r){var e=o$1(t);2===e?t.set(n,r):3===e?(t.delete(n),t.add(r)):t[n]=r;}function c$1(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}function s$1(t){return X&&t instanceof Map}function v$1(t){return q&&t instanceof Set}function p$1(t){return t.o||t.t}function l$1(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var n=tt(t);delete n[Q];for(var r=Z(n),e=0;e<r.length;e++){var i=r[e],o=n[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]});}return Object.create(Object.getPrototypeOf(t),n)}function d$1(t,e){return void 0===e&&(e=!1),y$1(t)||n$1(t)||!r$1(t)?t:(o$1(t)>1&&(t.set=t.add=t.clear=t.delete=h$1),Object.freeze(t),e&&i$1(t,(function(t,n){return d$1(n,!0)}),!0),t)}function h$1(){t$1(2);}function y$1(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function b$1(n){var r=nt[n];return r||t$1(18,n),r}function m$1(t,n){nt[t]||(nt[t]=n);}function _$1(){return U}function j$1(t,n){n&&(b$1("Patches"),t.u=[],t.s=[],t.v=n);}function g$1(t){w$1(t),t.p.forEach(S),t.p=null;}function w$1(t){t===U&&(U=t.l);}function O(t){return U={p:[],l:U,h:t,m:!0,_:0}}function S(t){var n=t[Q];0===n.i||1===n.i?n.j():n.g=!0;}function P$1(n,e){e._=e.p.length;var i=e.p[0],o=void 0!==n&&n!==i;return e.h.O||b$1("ES5").S(e,n,o),o?(i[Q].P&&(g$1(e),t$1(4)),r$1(n)&&(n=M$1(e,n),e.l||x$1(e,n)),e.u&&b$1("Patches").M(i[Q],n,e.u,e.s)):n=M$1(e,i,[]),g$1(e),e.u&&e.v(e.u,e.s),n!==H$1?n:void 0}function M$1(t,n,r){if(y$1(n))return n;var e=n[Q];if(!e)return i$1(n,(function(i,o){return A$1(t,e,n,i,o,r)}),!0),n;if(e.A!==t)return n;if(!e.P)return x$1(t,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l$1(e.k):e.o;i$1(3===e.i?new Set(o):o,(function(n,i){return A$1(t,e,o,n,i,r)})),x$1(t,o,!1),r&&t.u&&b$1("Patches").R(e,r,t.u,t.s);}return e.o}function A$1(e,i,o,a,c,s){if(n$1(c)){var v=M$1(e,c,s&&i&&3!==i.i&&!u$1(i.D,a)?s.concat(a):void 0);if(f$1(o,a,v),!n$1(v))return;e.m=!1;}if(r$1(c)&&!y$1(c)){if(!e.h.N&&e._<1)return;M$1(e,c),i&&i.A.l||x$1(e,c);}}function x$1(t,n,r){void 0===r&&(r=!1),t.h.N&&t.m&&d$1(n,r);}function z$1(t,n){var r=t[Q];return (r?p$1(r):t)[n]}function I$1(t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var e=Object.getOwnPropertyDescriptor(r,n);if(e)return e;r=Object.getPrototypeOf(r);}}function k$1(t){t.P||(t.P=!0,t.l&&k$1(t.l));}function E$1(t){t.o||(t.o=l$1(t.t));}function R(t,n,r){var e=s$1(n)?b$1("MapSet").T(n,r):v$1(n)?b$1("MapSet").F(n,r):t.O?function(t,n){var r=Array.isArray(t),e={i:r?1:0,A:n?n.A:_$1(),P:!1,I:!1,D:{},l:n,t:t,k:null,o:null,j:null,C:!1},i=e,o=rt;r&&(i=[e],o=et);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(n,r):b$1("ES5").J(n,r);return (r?r.A:_$1()).p.push(e),e}function D$1(e){return n$1(e)||t$1(22,e),function t(n){if(!r$1(n))return n;var e,u=n[Q],c=o$1(n);if(u){if(!u.P&&(u.i<4||!b$1("ES5").K(u)))return u.t;u.I=!0,e=N$1(n,c),u.I=!1;}else e=N$1(n,c);return i$1(e,(function(n,r){u&&a$1(u.t,n)===r||f$1(e,n,t(r));})),3===c?new Set(e):e}(e)}function N$1(t,n){switch(n){case 2:return new Map(t);case 3:return Array.from(t)}return l$1(t)}function T$1(){function r(t,n){var r=s[t];return r?r.enumerable=n:s[t]=r={configurable:!0,enumerable:n,get:function(){var n=this[Q];return rt.get(n,t)},set:function(n){var r=this[Q];rt.set(r,t,n);}},r}function e(t){for(var n=t.length-1;n>=0;n--){var r=t[n][Q];if(!r.P)switch(r.i){case 5:a(r)&&k$1(r);break;case 4:o(r)&&k$1(r);}}}function o(t){for(var n=t.t,r=t.k,e=Z(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=n[o];if(void 0===a&&!u$1(n,o))return !0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c$1(f,a))return !0}}var v=!!n[Q];return e.length!==Z(n).length+(v?0:1)}function a(t){var n=t.k;if(n.length!==t.t.length)return !0;var r=Object.getOwnPropertyDescriptor(n,n.length-1);return !(!r||r.get)}var s={};m$1("ES5",{J:function(t,n){var e=Array.isArray(t),i=function(t,n){if(t){for(var e=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tt(n);delete o[Q];for(var u=Z(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,t||!!o[f].enumerable);}return Object.create(Object.getPrototypeOf(n),o)}(e,t),o={i:e?5:4,A:n?n.A:_$1(),P:!1,I:!1,D:{},l:n,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(t,r,o){o?n$1(r)&&r[Q].A===t&&e(t.p):(t.u&&function t(n){if(n&&"object"==typeof n){var r=n[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i$1(o,(function(n){n!==Q&&(void 0!==e[n]||u$1(e,n)?f[n]||t(o[n]):(f[n]=!0,k$1(r)));})),i$1(e,(function(t){void 0!==o[t]||u$1(o,t)||(f[t]=!1,k$1(r));}));else if(5===c){if(a(r)&&(k$1(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&t(o[l]);}}}}(t.p[0]),e(t.p));},K:function(t){return 4===t.i?o(t):a(t)}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H$1=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L$1=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,tt=Object.getOwnPropertyDescriptors||function(t){var n={};return Z(t).forEach((function(r){n[r]=Object.getOwnPropertyDescriptor(t,r);})),n},nt={},rt={get:function(t,n){if(n===Q)return t;var e=p$1(t);if(!u$1(e,n))return function(t,n,r){var e,i=I$1(n,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(t.k):void 0}(t,e,n);var i=e[n];return t.I||!r$1(i)?i:i===z$1(t.t,n)?(E$1(t),t.o[n]=R(t.A.h,i,t)):i},has:function(t,n){return n in p$1(t)},ownKeys:function(t){return Reflect.ownKeys(p$1(t))},set:function(t,n,r){var e=I$1(p$1(t),n);if(null==e?void 0:e.set)return e.set.call(t.k,r),!0;if(!t.P){var i=z$1(p$1(t),n),o=null==i?void 0:i[Q];if(o&&o.t===r)return t.o[n]=r,t.D[n]=!1,!0;if(c$1(r,i)&&(void 0!==r||u$1(t.t,n)))return !0;E$1(t),k$1(t);}return t.o[n]=r,t.D[n]=!0,!0},deleteProperty:function(t,n){return void 0!==z$1(t.t,n)||n in t.t?(t.D[n]=!1,E$1(t),k$1(t)):delete t.D[n],t.o&&delete t.o[n],!0},getOwnPropertyDescriptor:function(t,n){var r=p$1(t),e=Reflect.getOwnPropertyDescriptor(r,n);return e?{writable:!0,configurable:1!==t.i||"length"!==n,enumerable:e.enumerable,value:r[n]}:e},defineProperty:function(){t$1(11);},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){t$1(12);}},et={};i$1(rt,(function(t,n){et[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)};})),et.deleteProperty=function(n,r){return rt.deleteProperty.call(this,n[0],r)},et.set=function(n,r,e){return rt.set.call(this,n[0],r,e,n[0])};var it=function(){function e(t){this.O=B,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var i=e.prototype;return i.produce=function(n,e,i){if("function"==typeof n&&"function"!=typeof e){var o=e;e=n;var u=this;return function(t){var n=this;void 0===t&&(t=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(t,(function(t){var r;return (r=e).call.apply(r,[n,t].concat(i))}))}}var a;if("function"!=typeof e&&t$1(6),void 0!==i&&"function"!=typeof i&&t$1(7),r$1(n)){var f=O(this),c=R(this,n,void 0),s=!0;try{a=e(c),s=!1;}finally{s?g$1(f):w$1(f);}return "undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return j$1(f,i),P$1(t,f)}),(function(t){throw g$1(f),t})):(j$1(f,i),P$1(a,f))}if(!n||"object"!=typeof n){if((a=e(n))===H$1)return;return void 0===a&&(a=n),this.N&&d$1(a,!0),a}t$1(21,n);},i.produceWithPatches=function(t,n){var r,e,i=this;return "function"==typeof t?function(n){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(n,(function(n){return t.apply(void 0,[n].concat(e))}))}:[this.produce(t,n,(function(t,n){r=t,e=n;})),r,e]},i.createDraft=function(e){r$1(e)||t$1(8),n$1(e)&&(e=D$1(e));var i=O(this),o=R(this,e,void 0);return o[Q].C=!0,w$1(i),o},i.finishDraft=function(n,r){var e=n&&n[Q];var i=e.A;return j$1(i,r),P$1(void 0,i)},i.setAutoFreeze=function(t){this.N=t;},i.setUseProxies=function(n){n&&!B&&t$1(20),this.O=n;},i.applyPatches=function(t,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){t=i.value;break}}var o=b$1("Patches").$;return n$1(t)?o(t,r):this.produce(t,(function(t){return o(t,r.slice(e+1))}))},e}(),ot=new it,ut=ot.produce,at=ot.produceWithPatches.bind(ot),ft=ot.setAutoFreeze.bind(ot),ct=ot.setUseProxies.bind(ot),st=ot.applyPatches.bind(ot),vt=ot.createDraft.bind(ot),pt=ot.finishDraft.bind(ot);

	/* eslint-disable no-shadow */
	function of(id, href, labelKey, label, subApps, subscript) {
	    return Object.freeze({ id: id, href: href, labelKey: labelKey, label: label, subApps: subApps, subscript: subscript });
	}
	function href(app) {
	    return app.href;
	}
	function labelkey(app) {
	    return app.labelKey;
	}
	function label(app) {
	    return app.label;
	}
	function subApps(app) {
	    return app.subApps;
	}
	function subscript(app) {
	    return app.subscript || '';
	}

	/* eslint-disable no-shadow */
	function of$1(id, name, labelKey, label, apps) {
	    return Object.freeze({ id: id, name: name, labelKey: labelKey, label: label, apps: apps });
	}
	var NOTHING = of$1('', '', '', '', []);
	function ofNothing() {
	    return NOTHING;
	}
	function id(folder) {
	    return folder.id;
	}
	function label$1(folder) {
	    return folder.label;
	}
	function labelKey(folder) {
	    return folder.labelKey;
	}
	function apps(folder) {
	    return folder.apps;
	}

	function of$2(contents) {
	    if (contents === void 0) { contents = []; }
	    return contents;
	}
	function length(index) {
	    return index.length;
	}
	function add(index) {
	    var ids = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        ids[_i - 1] = arguments[_i];
	    }
	    var toAdd = ids.filter(function (id) { return !includes(index, id); });
	    if (toAdd.length === 0)
	        return index;
	    return __spreadArrays(index, toAdd);
	}
	function includes(index, id) {
	    return index.indexOf(id) > -1;
	}
	function remove(index, id) {
	    if (!includes(index, id))
	        return index;
	    return index.filter(function (item) { return item !== id; });
	}
	function empty(index) {
	    if (length(index) === 0)
	        return index;
	    return of$2([]);
	}

	var IdIndex = /*#__PURE__*/Object.freeze({
		__proto__: null,
		of: of$2,
		length: length,
		add: add,
		includes: includes,
		remove: remove,
		empty: empty
	});

	T$1();
	var DEFAULT_ENTITIES = {
	    folders: {},
	    letters: {}
	};
	var OPENED = 'opened';
	var CLOSED = 'closed';
	var FOLDERS = 'folders';
	var ALPHABETICAL = 'alphabetical';
	var DEFAULT_UI = {
	    display: CLOSED,
	    folderOrder: [],
	    openFolders: [],
	    letterOrder: [],
	    openLetters: [],
	    title: '',
	    toggleTooltip: '',
	    expandAllLabel: '',
	    collapseAllLabel: '',
	    closeTooltip: '',
	    showAlphaViewTooltip: '',
	    showFolderViewTooltip: '',
	    applicationViewType: FOLDERS
	};
	function of$3(entities, ui) {
	    if (entities === void 0) { entities = {}; }
	    if (ui === void 0) { ui = {}; }
	    return {
	        entities: __assign(__assign({}, DEFAULT_ENTITIES), entities),
	        ui: __assign(__assign({}, DEFAULT_UI), ui)
	    };
	}
	function open(state) {
	    if (state.ui.display === OPENED)
	        return state;
	    return ut(state, function (draft) {
	        draft.ui.display = OPENED;
	    });
	}
	function close(state) {
	    if (state.ui.display === CLOSED)
	        return state;
	    return ut(state, function (draft) {
	        draft.ui.display = CLOSED;
	    });
	}
	function applicationViewType(state) {
	    return state.ui.applicationViewType;
	}
	function display(state) {
	    return state.ui.display;
	}
	function title(state) {
	    return state.ui.title;
	}
	function closeTooltip(state) {
	    return state.ui.closeTooltip;
	}
	function openFolders(state) {
	    return state.ui.openFolders;
	}
	function openLetters(state) {
	    return state.ui.openLetters;
	}
	function folderById(state, id) {
	    return state.entities.folders[id];
	}
	function letterById(state, id) {
	    return state.entities.letters[id];
	}
	function openFolder(state, id) {
	    if (isFolderOpen(state, id))
	        return state;
	    return ut(state, function (draft) {
	        var index = openFolders(state);
	        draft.ui.openFolders = add(index, id);
	    });
	}
	function isFolderOpen(state, id) {
	    return includes(state.ui.openFolders, id);
	}
	function closeFolder(state, id) {
	    if (!isFolderOpen(state, id))
	        return state;
	    return ut(state, function (draft) {
	        var index = openFolders(state);
	        draft.ui.openFolders = remove(index, id);
	    });
	}
	function openLetter(state, id) {
	    if (isLetterOpen(state, id))
	        return state;
	    return ut(state, function (draft) {
	        var index = openLetters(state);
	        draft.ui.openLetters = add(index, id);
	    });
	}
	function isLetterOpen(state, id) {
	    return includes(state.ui.openLetters, id);
	}
	function closeLetter(state, id) {
	    if (!isLetterOpen(state, id))
	        return state;
	    return ut(state, function (draft) {
	        var index = openLetters(state);
	        draft.ui.openLetters = remove(index, id);
	    });
	}
	function folderOrder(state) {
	    return state.ui.folderOrder;
	}
	function letterOrder(state) {
	    return state.ui.letterOrder;
	}
	function appsByFolderId(state, id) {
	    var folder = folderById(state, id);
	    return apps(folder);
	}
	function appsByLetterId(state, id) {
	    var letter = letterById(state, id);
	    return apps(letter);
	}
	function addFolders(state, newFolders) {
	    return ut(state, function (draft) {
	        newFolders.forEach(function (folder) {
	            draft.entities.folders[id(folder)] = folder;
	            draft.ui.folderOrder.push(folder.id);
	            draft.ui.openFolders.push(folder.id);
	        });
	    });
	}
	function addLetters(state, newLetters) {
	    return ut(state, function (draft) {
	        var flatAppList = flattenAppList(newLetters);
	        var letterList = buildLetterList(flatAppList);
	        letterList.forEach(function (letter) {
	            draft.entities.letters[id(letter)] = letter;
	            draft.ui.letterOrder.push(letter.id);
	            draft.ui.openLetters.push(letter.id);
	        });
	    });
	}
	function toggleTooltip(state) {
	    return state.ui.toggleTooltip;
	}
	function showAlphaViewTooltip(state) {
	    return state.ui.showAlphaViewTooltip;
	}
	function showFolderViewTooltip(state) {
	    return state.ui.showFolderViewTooltip;
	}
	function toggleView(state) {
	    return ut(state, function (draft) {
	        if (state.ui.applicationViewType === FOLDERS) {
	            draft.ui.applicationViewType = ALPHABETICAL;
	        }
	        if (state.ui.applicationViewType === ALPHABETICAL) {
	            draft.ui.applicationViewType = FOLDERS;
	        }
	    });
	}
	function buildAlphabetFromApps(flatAppList) {
	    var lettersWithApps = {};
	    flatAppList.forEach(function (app) {
	        var name = app.label || app.labelKey;
	        var firstLetter = name.charAt(0).toUpperCase();
	        lettersWithApps[firstLetter] = firstLetter;
	    });
	    return alphabetizeStrings(Object.keys(lettersWithApps));
	}
	function alphabetizeStrings(strings) {
	    return strings === null || strings === void 0 ? void 0 : strings.sort(function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        if (a > b) {
	            return 1;
	        }
	        return 0;
	    });
	}
	function buildAppsForLetter(letter, flatAppList) {
	    var apps = [];
	    flatAppList.forEach(function (app) {
	        if (appStartsWith(app, letter)) {
	            apps.push(app);
	        }
	    });
	    return apps;
	}
	function alphabetizeAppsForLetter(apps) {
	    return apps.sort(function (a, b) {
	        var _a, _b, _c, _d;
	        if (((_a = a.label) === null || _a === void 0 ? void 0 : _a.toUpperCase()) < ((_b = b.label) === null || _b === void 0 ? void 0 : _b.toUpperCase())) {
	            return -1;
	        }
	        if (((_c = a.label) === null || _c === void 0 ? void 0 : _c.toUpperCase()) > ((_d = b.label) === null || _d === void 0 ? void 0 : _d.toUpperCase())) {
	            return 1;
	        }
	        return 0;
	    });
	}
	function buildLetterList(flatAppList) {
	    var alphabet = buildAlphabetFromApps(flatAppList);
	    return alphabet.map(function (letter) {
	        var apps = buildAppsForLetter(letter, flatAppList);
	        apps = alphabetizeAppsForLetter(apps);
	        return of$1(letter, letter, letter, letter, apps);
	    });
	}
	function appStartsWith(app, letter) {
	    var _a;
	    return ((_a = app.label) === null || _a === void 0 ? void 0 : _a.toUpperCase().indexOf(letter, 0)) === 0;
	}
	function flattenAppList(newFolders) {
	    var flatAppList = [];
	    newFolders.forEach(function (folder) {
	        folder.apps.forEach(function (app) {
	            if (app.subApps.length) {
	                app.subApps.forEach(function (subApp) {
	                    return flatAppList.push(of(subApp.id, subApp.href, subApp.labelKey, subApp.label, [], (folder.label || folder.labelKey) + " > " + (app.label || app.labelKey)));
	                });
	            }
	            if (app.href) {
	                // an app without an href does not belong in a flat list
	                flatAppList.push(of(app.id, app.href, app.labelKey, app.label, [], "" + (folder.label || folder.labelKey)));
	            }
	        });
	    });
	    return flatAppList;
	}
	function openAllFolders(state) {
	    return ut(state, function (draft) {
	        var index = openFolders(state);
	        draft.ui.openFolders = add.apply(IdIndex, __spreadArrays([index], state.ui.folderOrder));
	    });
	}
	function closeAllFolders(state) {
	    return ut(state, function (draft) {
	        var index = openFolders(state);
	        draft.ui.openFolders = empty(index);
	    });
	}
	function openAllLetters(state) {
	    return ut(state, function (draft) {
	        var index = openLetters(state);
	        draft.ui.openLetters = add.apply(IdIndex, __spreadArrays([index], state.ui.letterOrder));
	    });
	}
	function closeAllLetters(state) {
	    return ut(state, function (draft) {
	        var index = openLetters(state);
	        draft.ui.openLetters = empty(index);
	    });
	}
	function expandAllLabel(state) {
	    return state.ui.expandAllLabel;
	}
	function collapseAllLabel(state) {
	    return state.ui.collapseAllLabel;
	}

	function of$4() {
	    return {
	        folder__added: addFolders,
	        folder__closed: closeFolder,
	        folder__opened: openFolder,
	        folder__allOpened: openAllFolders,
	        folder__allClosed: closeAllFolders,
	        letter__added: addLetters,
	        letter__closed: closeLetter,
	        letter__opened: openLetter,
	        letter__allOpened: openAllLetters,
	        letter__allClosed: closeAllLetters,
	        menu__closed: close,
	        menu__opened: open,
	        view__toggled: toggleView
	    };
	}

	function n$2(n,t){for(var r in t)n[r]=t[r];return n}function createStore(t){var r=[];function u(n){for(var t=[],u=0;u<r.length;u++)r[u]===n?n=null:t.push(r[u]);r=t;}function e(u,e,f){t=e?u:n$2(n$2({},t),u);for(var i=r,o=0;o<i.length;o++)i[o](t,f);}return t=t||{},{action:function(n){function r(t){e(t,!1,n);}return function(){for(var u=arguments,e=[t],f=0;f<arguments.length;f++)e.push(u[f]);var i=n.apply(this,e);if(null!=i)return i.then?i.then(r):r(i)}},setState:e,subscribe:function(n){return r.push(n),function(){u(n);}},unsubscribe:u,getState:function(){return t}}}

	function of$5(state) {
	    return createStore(state);
	}

	/* eslint-disable no-shadow */
	var singleton;
	function of$6(state) {
	    var store = of$5(state);
	    var actions = of$4();
	    singleton = {
	        actions: {
	            folder__added: store.action(actions.folder__added),
	            folder__closed: store.action(actions.folder__closed),
	            folder__opened: store.action(actions.folder__opened),
	            folder__allOpened: store.action(actions.folder__allOpened),
	            folder__allClosed: store.action(actions.folder__allClosed),
	            letter__added: store.action(actions.letter__added),
	            letter__closed: store.action(actions.letter__closed),
	            letter__opened: store.action(actions.letter__opened),
	            letter__allOpened: store.action(actions.letter__allOpened),
	            letter__allClosed: store.action(actions.letter__allClosed),
	            menu__closed: store.action(actions.menu__closed),
	            menu__opened: store.action(actions.menu__opened),
	            view__toggled: store.action(actions.view__toggled)
	        },
	        store: store
	    };
	    return singleton;
	}
	function store() {
	    if (!singleton)
	        throw new Error('Context not created yet');
	    return singleton.store;
	}
	function actions() {
	    if (!singleton)
	        throw new Error('Context not created yet');
	    return singleton.actions;
	}
	function connect(component, mapStateToProps) {
	    return preact_1(mapStateToProps, {})(component);
	}

	function mapStateToProps(state) {
	    var _a = actions(), folder__allClosed = _a.folder__allClosed, folder__allOpened = _a.folder__allOpened, letter__allClosed = _a.letter__allClosed, letter__allOpened = _a.letter__allOpened;
	    var onCollapseClick;
	    var onExpandClick;
	    if (applicationViewType(state) === 'folders') {
	        onCollapseClick = folder__allClosed;
	        onExpandClick = folder__allOpened;
	    }
	    if (applicationViewType(state) === 'alphabetical') {
	        onCollapseClick = letter__allClosed;
	        onExpandClick = letter__allOpened;
	    }
	    return {
	        collapseLabel: collapseAllLabel(state),
	        expandLabel: expandAllLabel(state),
	        state: toState(state),
	        onCollapseClick: onCollapseClick,
	        onExpandClick: onExpandClick
	    };
	}
	function toState(state) {
	    if (applicationViewType(state) === 'folders') {
	        return toStateWithFolders(state);
	    }
	    if (applicationViewType(state) === 'alphabetical') {
	        return toStateWithLetters(state);
	    }
	    return 'all-expanded';
	}
	function toStateWithFolders(state) {
	    var openFolderCount = openFolders(state).length;
	    var allFolderCount = folderOrder(state).length;
	    if (openFolderCount === 0)
	        return 'all-collapsed';
	    if (openFolderCount === allFolderCount)
	        return 'all-expanded';
	    return 'mixed';
	}
	function toStateWithLetters(state) {
	    var openLetterCount = openLetters(state).length;
	    var allLetterCount = letterOrder(state).length;
	    if (openLetterCount === 0)
	        return 'all-collapsed';
	    if (openLetterCount === allLetterCount)
	        return 'all-expanded';
	    return 'mixed';
	}
	var PureExpandCollapseAllContainer = function (props) { return (h(ExpandCollapseAll, { collapseLabel: props.collapseLabel, expandLabel: props.expandLabel, onCollapseClick: props.onCollapseClick, onExpandClick: props.onExpandClick, state: props.state })); };
	var ExpandCollapseAllContainer = connect(PureExpandCollapseAllContainer, mapStateToProps);

	var ApplicationStyle = css({
	    fontSize: '15px',
	    margin: 0,
	    padding: 0,
	    listStyle: 'none',
	    cursor: 'pointer',
	    fontFamily: 'GE Inspira Sans',
	    span: {
	        minWidth: '100%',
	        color: gray18
	    },
	    a: {
	        ':first-child': {
	            paddingLeft: '20px'
	        },
	        paddingLeft: '40px',
	        backgroundColor: gray1,
	        display: 'flex',
	        height: '30px',
	        textDecoration: 'none',
	        lineHeight: '30px',
	        ':hover': {
	            backgroundColor: gray3
	        }
	    }
	});
	var SubscriptStyle = css({
	    a: {
	        height: '30px',
	        lineHeight: 'normal',
	        paddingTop: '5px',
	        paddingBottom: '5px',
	        boxSizing: 'content-box',
	        span: {
	            display: 'table',
	            span: {
	                fontSize: '12px',
	                color: gray14
	            }
	        }
	    }
	});
	var className$1 = function (props) {
	    if (props.viewType === 'alphabetical') {
	        return cx(ApplicationStyle, SubscriptStyle);
	    }
	    return ApplicationStyle;
	};
	var applicationTestId = function (props) {
	    return "app-menu__app::" + (props.folderKey || props.folderLabel) + "/" + (props.labelKey || props.label);
	};
	var subAppTestId = function (props, subAppLabel, subAppLabelKey) {
	    return "app-menu__subapp::" + (props.folderKey || props.folderLabel) + "/" + (props.labelKey || props.label) + "/" + (subAppLabelKey || subAppLabel);
	};
	var subscript$1 = function (props) {
	    if (props.viewType === 'alphabetical' && props.subscript) {
	        return h("span", null, props.subscript);
	    }
	    return h("span", null);
	};
	var subApps$1 = function (props) {
	    if (props.subApps) {
	        return props.subApps.map(function (subApp) { return (h("a", { title: subApp.tooltip, "data-testid": subAppTestId(props, subApp.label, subApp.labelKey), href: subApp.href, target: subApp.target },
	            h("span", null, subApp.label))); });
	    }
	    return null;
	};
	var Application = function (props) { return (h("li", { className: className$1(props) },
	    h("a", { title: props.tooltip, "data-testid": applicationTestId(props), href: props.href, target: props.target },
	        h("span", null,
	            props.label,
	            h("span", null, subscript$1(props)))),
	    subApps$1(props))); };

	var FolderComponentStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-top: 1px solid transparent;\n"], ["\n    border-top: 1px solid transparent;\n"])));
	var FolderButtonStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 15px;\n    font-family: 'GE Inspira Sans';\n    color: ", ";\n    background-color: ", ";\n    height: 30px;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n    line-height: 30px;\n\n    i {\n        line-height: 30px;\n        vertical-align: middle;\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n"], ["\n    font-size: 15px;\n    font-family: 'GE Inspira Sans';\n    color: ", ";\n    background-color: ", ";\n    height: 30px;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n    line-height: 30px;\n\n    i {\n        line-height: 30px;\n        vertical-align: middle;\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n"])), gray18, gray3);
	var ulStyle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding: 0;\n    margin: 0;\n"], ["\n    padding: 0;\n    margin: 0;\n"])));
	var icon = function (props) { return (props.expanded ? 'gedi gedi-chevron-down' : 'gedi gedi-chevron-right'); };
	var folderTestId = function (props) {
	    return "app-menu__folder::" + (props.labelKey || props.label);
	};
	var folderOpenTestId = function (props) {
	    return "app-menu__folder--expanded::" + (props.labelKey || props.label);
	};
	var showApps = function (props) {
	    return props.expanded ? { display: 'block' } : { display: 'none' };
	};
	var apps$1 = function (props) {
	    return props.apps.map(function (app) { return (h(Application, { label: app.label, labelKey: app.labelKey, folderLabel: props.label, folderKey: props.labelKey, tooltip: app.tooltip, href: app.href, subApps: app.subApps, target: app.target, viewType: props.viewType, subscript: app.subscript })); });
	};
	var Folder = function (props) { return (h("div", { className: FolderComponentStyle },
	    h("div", { className: FolderButtonStyle, title: props.tooltip, "data-testid": folderTestId(props), onClick: props.onClick },
	        h("i", { className: icon(props) }),
	        props.label.toUpperCase()),
	    h("ul", { style: showApps(props), className: ulStyle, "data-testid": folderOpenTestId(props) }, apps$1(props)))); };
	var templateObject_1, templateObject_2, templateObject_3;

	/* eslint-disable no-shadow */
	function href$1(subApp) {
	    return subApp.href;
	}
	function labelKey$1(subApp) {
	    return subApp.labelKey;
	}
	function label$2(subApp) {
	    return subApp.label;
	}

	function mapSubAppProps(folder, subApp) {
	    return {
	        label: label$2(subApp),
	        labelKey: labelKey$1(subApp),
	        folderLabel: label$1(folder),
	        folderKey: labelKey(folder),
	        tooltip: label$2(subApp),
	        href: href$1(subApp),
	        target: 'tab'
	    };
	}

	function mapApplicationProps(folder, app) {
	    return {
	        label: label(app),
	        labelKey: labelkey(app),
	        folderLabel: label$1(folder),
	        folderKey: labelKey(folder),
	        tooltip: label(app),
	        href: href(app),
	        subApps: subApps(app).map(function (subApp) { return mapSubAppProps(folder, subApp); }),
	        target: 'tab',
	        subscript: subscript(app)
	    };
	}

	function mapStateToProps$1(state, _a) {
	    var id = _a.id, viewType = _a.viewType;
	    var folder = ofNothing();
	    var expanded = false;
	    var apps = [];
	    if (viewType === 'folders') {
	        folder = folderById(state, id);
	        expanded = isFolderOpen(state, id);
	        apps = appsByFolderId(state, id).map(function (app) { return mapApplicationProps(folder, app); });
	    }
	    if (viewType === 'alphabetical') {
	        folder = letterById(state, id);
	        expanded = isLetterOpen(state, id);
	        apps = appsByLetterId(state, id).map(function (app) { return mapApplicationProps(folder, app); });
	    }
	    return {
	        expanded: expanded,
	        onClick: onClick(id, expanded, viewType),
	        label: label$1(folder),
	        labelKey: labelKey(folder),
	        tooltip: label$1(folder),
	        apps: apps,
	        viewType: viewType
	    };
	}
	function onClick(id, expanded, viewType) {
	    var _a = actions(), folder__opened = _a.folder__opened, folder__closed = _a.folder__closed, letter__opened = _a.letter__opened, letter__closed = _a.letter__closed;
	    if (viewType === 'alphabetical') {
	        return function () { return (expanded ? letter__closed(id) : letter__opened(id)); };
	    }
	    return function () { return (expanded ? folder__closed(id) : folder__opened(id)); };
	}
	var PureFolderContainer = function (props) { return (h(Folder, { label: props.label, labelKey: props.labelKey, tooltip: props.tooltip, expanded: props.expanded, onClick: props.onClick, apps: props.apps, viewType: props.viewType })); };
	var FolderContainer = connect(PureFolderContainer, mapStateToProps$1);

	var className$2 = css(__assign(__assign(__assign({}, verticalAutoScroll()), fillFlexContainer()), { width: '100%' }));
	var FolderList = function (_a) {
	    var ids = _a.ids, viewType = _a.viewType;
	    return (h("div", { "data-testid": "app-menu__folder-list", className: className$2 }, ids.map(function (id) { return (h(FolderContainer, { id: id, viewType: viewType })); })));
	};

	function mapStateToProps$2(state) {
	    var ids = [];
	    if (applicationViewType(state) === 'folders') {
	        ids = folderOrder(state);
	    }
	    if (applicationViewType(state) === 'alphabetical') {
	        ids = letterOrder(state);
	    }
	    return {
	        ids: ids,
	        viewType: applicationViewType(state)
	    };
	}
	var className$3 = css({
	    display: 'flex',
	    flexDirection: 'column',
	    height: '100%'
	});
	var PureFolderListContainer = function (_a) {
	    var ids = _a.ids, viewType = _a.viewType;
	    return (h("div", { "data-testid": "app-menu__by-folder", className: className$3 },
	        h(ExpandCollapseAllContainer, null),
	        h(FolderList, { ids: ids, viewType: viewType })));
	};
	var FolderListContainer = connect(PureFolderListContainer, mapStateToProps$2);

	// eslint-disable-line @typescript-eslint/no-unused-vars
	var className$4 = css({
	    flex: 1,
	    minHeight: 0,
	    width: '100%'
	});
	var Applications = function () { return (h("div", { "data-testid": "app-menu__applications", className: className$4 },
	    h(FolderListContainer, null))); };

	var className$5 = css({
	    width: '100%',
	    paddingRight: '20px;',
	    boxSizing: 'border-box'
	});
	var viewToggleButtonStyle = css(__assign(__assign({}, clickableCursor()), { float: 'right', border: 'none', backgroundColor: 'transparent', color: gray18, height: '22px', width: '22px', ':focus': {
	        outline: 'none'
	    }, i: {
	        fontSize: '16px'
	    } }));
	var icon$1 = function (applicationViewType) {
	    if (applicationViewType === 'folders') {
	        return 'gedi-alphabet-sort';
	    }
	    if (applicationViewType === 'alphabetical') {
	        return 'gedi-view-list';
	    }
	    return '';
	};
	var tooltip = function (applicationViewType, showAlphaViewTooltip, showFolderViewTooltip) {
	    if (applicationViewType === 'folders') {
	        return showAlphaViewTooltip;
	    }
	    if (applicationViewType === 'alphabetical') {
	        return showFolderViewTooltip;
	    }
	    throw new Error('applicationViewType must be "alphabetical" or "folder"');
	};
	// todo:  the top level div will need to be moved out to another component that will contain the view toggle and search
	var ViewToggle = function (_a) {
	    var onViewToggleClick = _a.onViewToggleClick, showAlphaViewTooltip = _a.showAlphaViewTooltip, showFolderViewTooltip = _a.showFolderViewTooltip, applicationViewType = _a.applicationViewType;
	    return (h("div", { className: className$5 },
	        h("button", { "data-testid": "app-menu__view-toggle", title: tooltip(applicationViewType, showAlphaViewTooltip, showFolderViewTooltip), className: viewToggleButtonStyle, onClick: onViewToggleClick },
	            h("i", { className: icon$1(applicationViewType) }))));
	};

	var ARIZONA_LEFT_NAV_Z_INDEX = 195;
	var defaults = __assign(__assign(__assign(__assign({}, absolutePosition(0, 0)), fullWidthOnMobileButFixedOnDesktop()), sensibleBoxModel()), { backgroundColor: gray1, flexDirection: 'column', height: '100%', zIndex: ARIZONA_LEFT_NAV_Z_INDEX + 5, boxShadow: '1px 0 3px rgba(0,0,0,0.20)' });
	function fullWidthOnMobileButFixedOnDesktop() {
	    return {
	        maxWidth: '480px',
	        width: '100%'
	    };
	}
	var closed = css(__assign(__assign({}, defaults), { display: 'none' }));
	var opened = css(__assign(__assign({}, defaults), { display: 'flex' }));
	var headingStyle = css({
	    padding: '20px 20px 10px 20px'
	});
	var appTitleStyle = css(__assign(__assign({}, geFont()), { fontSize: '20px', color: gray18 }));
	var appCloseButtonStyle = css(__assign(__assign({}, clickableCursor()), { float: 'right', border: 'none', backgroundColor: 'transparent', color: gray18, height: '22px', width: '22px', ':focus': {
	        outline: 'none'
	    }, i: {
	        fontSize: '16px'
	    } }));
	function Menu(_a) {
	    var display = _a.display, onClose = _a.onClose, title = _a.title, closeTooltip = _a.closeTooltip, onViewToggleClick = _a.onViewToggleClick, showAlphaViewTooltip = _a.showAlphaViewTooltip, showFolderViewTooltip = _a.showFolderViewTooltip, applicationViewType = _a.applicationViewType;
	    return (h(Container, { display: display },
	        h(Heading, null,
	            h(Title, { title: title }),
	            h(CloseButton, { tooltip: closeTooltip, onClick: onClose })),
	        h(ViewToggle, { showAlphaViewTooltip: showAlphaViewTooltip, showFolderViewTooltip: showFolderViewTooltip, onViewToggleClick: onViewToggleClick, applicationViewType: applicationViewType }),
	        h(Applications, null)));
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function Container(_a) {
	    var display = _a.display, children = _a.children;
	    return (h("div", { "data-testid": "app-menu", className: display === 'opened' ? opened : closed }, children));
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function Heading(_a) {
	    var children = _a.children;
	    return h("div", { className: headingStyle }, children);
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function Title(_a) {
	    var title = _a.title;
	    return (h("span", { "data-testid": "app-menu__title", className: appTitleStyle }, title));
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function CloseButton(_a) {
	    var onClick = _a.onClick, tooltip = _a.tooltip;
	    return (h("button", { "data-testid": "app-menu__close", className: appCloseButtonStyle, onClick: onClick, title: tooltip },
	        h("i", { className: "gedi-close" })));
	}

	function mapStateToProps$3(state) {
	    var _a = actions(), menu__closed = _a.menu__closed, view__toggled = _a.view__toggled;
	    return {
	        onClose: menu__closed,
	        display: display(state),
	        title: title(state),
	        closeTooltip: closeTooltip(state),
	        onViewToggleClick: view__toggled,
	        showAlphaViewTooltip: showAlphaViewTooltip(state),
	        showFolderViewTooltip: showFolderViewTooltip(state),
	        applicationViewType: applicationViewType(state)
	    };
	}
	var PureMenuContainer = function (_a) {
	    var display = _a.display, onClose = _a.onClose, title = _a.title, closeTooltip = _a.closeTooltip, onViewToggleClick = _a.onViewToggleClick, showAlphaViewTooltip = _a.showAlphaViewTooltip, showFolderViewTooltip = _a.showFolderViewTooltip, applicationViewType = _a.applicationViewType;
	    return (h(Menu, { display: display, onClose: onClose, title: title, closeTooltip: closeTooltip, onViewToggleClick: onViewToggleClick, showAlphaViewTooltip: showAlphaViewTooltip, applicationViewType: applicationViewType, showFolderViewTooltip: showFolderViewTooltip }));
	};
	var MenuContainer = connect(PureMenuContainer, mapStateToProps$3);

	var className$6 = css(__assign(__assign(__assign({}, centerHorizontallyVertically()), clickableCursor()), { backgroundColor: gray1, border: 'none', height: '40px', width: '46px', i: {
	        color: gray18,
	        fontSize: '16px'
	    }, ':hover': {
	        i: {
	            color: primaryHover
	        }
	    }, ':active': {
	        i: {
	            color: primaryPressed
	        }
	    } }));
	var Toggle = function (_a) {
	    var onClick = _a.onClick, tooltip = _a.tooltip;
	    return (h("div", { "data-testid": "app-menu__toggle", className: className$6, onClick: onClick, title: tooltip },
	        h("i", { class: "gedi-mobile-menu" })));
	};

	function mapStateToProps$4(state) {
	    var menu__opened = actions().menu__opened;
	    return {
	        menu__opened: menu__opened,
	        toggleTooltip: toggleTooltip(state)
	    };
	}
	var PureToggleContainer = function (_a) {
	    var menu__opened = _a.menu__opened, toggleTooltip = _a.toggleTooltip;
	    return h(Toggle, { tooltip: toggleTooltip, onClick: menu__opened });
	};
	var ToggleContainer = connect(PureToggleContainer, mapStateToProps$4);

	var AppMenu = function () { return (h(preact_2, { store: store() },
	    h("div", null,
	        h(ToggleContainer, null),
	        h(MenuContainer, null)))); };

	var MountPoint = /** @class */ (function () {
	    function MountPoint() {
	        this.element = null;
	    }
	    MountPoint.assertHtmlChild = function (child) {
	        if (!child)
	            throw new Error('Child node does not exist');
	        if (child.nodeType !== Node.ELEMENT_NODE)
	            throw new Error('Child node is not a HTMLElement');
	    };
	    MountPoint.assertMounted = function (element) {
	        if (!element)
	            throw new Error('Component has not been mounted');
	    };
	    MountPoint.prototype.withFirstChild = function (callback) {
	        MountPoint.assertMounted(this.element);
	        var firstChild = this.element.firstChild;
	        MountPoint.assertHtmlChild(firstChild);
	        callback(firstChild);
	    };
	    MountPoint.prototype.mount = function (element, tag) {
	        if (this.element)
	            throw new Error('Component is already mounted');
	        var firstChild = document.createElement(tag);
	        this.element = element;
	        this.element.appendChild(firstChild);
	    };
	    MountPoint.prototype.unmount = function () {
	        this.clearContents();
	        return this.removeElementReference();
	    };
	    MountPoint.prototype.clearContents = function () {
	        MountPoint.assertMounted(this.element);
	        while (this.element.firstChild) {
	            this.element.removeChild(this.element.firstChild);
	        }
	    };
	    MountPoint.prototype.removeElementReference = function () {
	        MountPoint.assertMounted(this.element);
	        var element = this.element;
	        this.element = null;
	        return element;
	    };
	    return MountPoint;
	}());

	var Impl = /** @class */ (function () {
	    function Impl(datasource, options) {
	        this.datasource = datasource;
	        this.mountPoint = new MountPoint();
	        var state = of$3({}, options);
	        of$6(state);
	    }
	    Impl.prototype.mount = function (element, attrs) {
	        if (attrs === void 0) { attrs = {}; }
	        this.mountPoint.mount(element, 'div');
	        this.update(function () { return attrs; });
	        this.datasource.initialAppData().then(function (appData) {
	            actions().folder__added(appData.folders);
	            actions().letter__added(appData.folders);
	        });
	        this.closeOnOutsideClick();
	        return this;
	    };
	    Impl.prototype.closeOnOutsideClick = function () {
	        var menu__closed = actions().menu__closed;
	        window.addEventListener('click', menu__closed);
	        this.mountPoint.withFirstChild(function (firstChild) {
	            firstChild.addEventListener('click', function (ev) {
	                if (!withinAnchor(ev)) {
	                    ev.stopPropagation();
	                }
	            });
	        });
	    };
	    Impl.prototype.unmount = function () {
	        this.mountPoint.withFirstChild(function (child) { return H(null, child); });
	        return this.mountPoint.unmount();
	    };
	    Impl.prototype.update = function (callback) {
	        var newAttrs = callback({});
	        this.mountPoint.withFirstChild(function (child) { return H(AppMenu(), child); });
	        return this;
	    };
	    return Impl;
	}());
	function withinAnchor(ev) {
	    var element = ev.target;
	    while (element !== null) {
	        if (element.tagName === 'A')
	            return true;
	        element = element.parentElement;
	    }
	    return false;
	}
	function of$7(datasource, options) {
	    return new Impl(datasource, options);
	}

	var appMenuDucklet = /*#__PURE__*/Object.freeze({
		__proto__: null,
		of: of$7
	});

	var index = /*#__PURE__*/Object.freeze({
		__proto__: null,
		AppMenuDucklet: appMenuDucklet
	});

	function optionalProp(name, value) {
	    var _a;
	    if (value === undefined) {
	        return {};
	    }
	    return _a = {}, _a[name] = value, _a;
	}

	function requiredProp(name, value, messageName) {
	    var _a;
	    if (messageName === void 0) { messageName = ''; }
	    if (name === undefined) {
	        throw new Error("No name given for prop.  name is a required prop");
	    }
	    if (value === undefined) {
	        throw new Error("No value found for " + (messageName || name) + ".  " + (messageName || name) + " is a required prop");
	    }
	    return _a = {}, _a[name] = value, _a;
	}

	var removeQueryString = function (helpContext) {
	    var hasQueryString = (helpContext === null || helpContext === void 0 ? void 0 : helpContext.indexOf('%3F')) !== -1;
	    if (hasQueryString) {
	        return helpContext === null || helpContext === void 0 ? void 0 : helpContext.substring(0, helpContext.indexOf('%3F'));
	    }
	    return helpContext;
	};
	var removeRelativePathing = function (context) {
	    return (context === null || context === void 0 ? void 0 : context.split('../').pop()) || context;
	};
	var formatContextForRedirect = function (context) {
	    var helpContext = context;
	    helpContext = removeRelativePathing(helpContext);
	    helpContext = removeQueryString(helpContext);
	    return helpContext;
	};

	var TransparentButton = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    :focus {\n        border: none;\n        outline: none;\n        box-shadow: none;\n    }\n"], ["\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    :focus {\n        border: none;\n        outline: none;\n        box-shadow: none;\n    }\n"])));
	var templateObject_1$1;

	var defaultClassName = css({
	    height: '32px',
	    lineHeight: 0,
	    margin: 0,
	    padding: 0,
	    width: '32px',
	    i: {
	        fontSize: '16px'
	    }
	});
	function className$7() {
	    return cx(TransparentButton, defaultClassName);
	}

	var ON_PREM_DEFAULT_HELP_PAGE = 'default.html';
	var ON_PREM_SEARCH_URL = 'search.html?searchQuery=';
	var getUrlPrefix = function (props) {
	    return props.baseUrl + "meridium/Help/" + props.culture + "/";
	};
	var buildDefaultUrl = function (props) {
	    return getUrlPrefix(props) + ON_PREM_DEFAULT_HELP_PAGE;
	};
	var buildSearchUrl = function (props) {
	    return getUrlPrefix(props) + ON_PREM_SEARCH_URL + props.searchTerm;
	};
	var buildContextUrl = function (props) {
	    return getUrlPrefix(props) + formatContextForRedirect(props.context);
	};
	var format = function (props) {
	    if (props.searchTerm) {
	        return buildSearchUrl(props);
	    }
	    if (props.context) {
	        return buildContextUrl(props);
	    }
	    return buildDefaultUrl(props);
	};
	var testid = function (props) { return optionalProp('data-testid', props.testid); };
	var onClickWrapper = function (props) {
	    props.onClick(format(props));
	};
	var tooltip$1 = function (props) { return requiredProp('title', props.tooltip, 'tooltip'); };
	var icon$2 = function (props) { return requiredProp('className', props.icon, 'icon'); };
	var onClick$1 = function (props) {
	    return requiredProp('onClick', onClickWrapper.bind(null, props));
	};
	var HelpOnPrem = function (props) {
	    return (h("div", null,
	        h("button", __assign({ className: className$7() }, __assign(__assign(__assign({}, onClick$1(props)), testid(props)), tooltip$1(props))),
	            h("i", __assign({}, __assign({}, icon$2(props)))))));
	};

	var PREDIX_ESSENTIALS_HELP_PAGE = 'https://www.ge.com/digital/documentation/predix-essentials/';
	var SEARCH_SUFFIX = 'search.html?searchQuery=';
	var buildSearchUrl$1 = function (props) {
	    return PREDIX_ESSENTIALS_HELP_PAGE + SEARCH_SUFFIX + props.searchTerm;
	};
	var format$1 = function (props) {
	    if (props.searchTerm) {
	        return buildSearchUrl$1(props);
	    }
	    return PREDIX_ESSENTIALS_HELP_PAGE;
	};
	var testid$1 = function (props) { return optionalProp('data-testid', props.testid); };
	var onClickWrapper$1 = function (props) {
	    props.onClick(format$1(props));
	};
	var tooltip$2 = function (props) { return requiredProp('title', props.tooltip, 'tooltip'); };
	var icon$3 = function (props) { return requiredProp('className', props.icon, 'icon'); };
	var onClick$2 = function (props) {
	    return requiredProp('onClick', onClickWrapper$1.bind(null, props));
	};
	var HelpPE = function (props) {
	    return (h("div", null,
	        h("button", __assign({ className: className$7() }, __assign(__assign(__assign({}, onClick$2(props)), testid$1(props)), tooltip$2(props))),
	            h("i", __assign({}, __assign({}, icon$3(props)))))));
	};

	var PREDIX_ESSENTIALS_HELP_PAGE$1 = 'https://www.ge.com/digital/documentation/predix-essentials/';
	var SEARCH_SUFFIX$1 = 'search.html?searchQuery=';
	var getUrlPrefix$1 = function (props) {
	    return props.baseUrl + "Help/" + props.culture + "/";
	};
	var buildSearchUrl$2 = function (props) {
	    return PREDIX_ESSENTIALS_HELP_PAGE$1 + SEARCH_SUFFIX$1 + props.searchTerm;
	};
	var buildContextUrl$1 = function (props) {
	    return getUrlPrefix$1(props) + formatContextForRedirect(props.context);
	};
	var format$2 = function (props) {
	    if (props.searchTerm) {
	        return buildSearchUrl$2(props);
	    }
	    if (props.context) {
	        return buildContextUrl$1(props);
	    }
	    return PREDIX_ESSENTIALS_HELP_PAGE$1;
	};
	var testid$2 = function (props) { return optionalProp('data-testid', props.testid); };
	var onClickWrapper$2 = function (props) {
	    props.onClick(format$2(props));
	};
	var tooltip$3 = function (props) { return requiredProp('title', props.tooltip, 'tooltip'); };
	var icon$4 = function (props) { return requiredProp('className', props.icon, 'icon'); };
	var onClick$3 = function (props) {
	    return requiredProp('onClick', onClickWrapper$2.bind(null, props));
	};
	var HelpPEMobile = function (props) {
	    return (h("div", null,
	        h("button", __assign({ className: className$7() }, __assign(__assign(__assign({}, onClick$3(props)), testid$2(props)), tooltip$3(props))),
	            h("i", __assign({}, __assign({}, icon$4(props)))))));
	};

	var UNIFIED_DEFAULT_HELP_PAGE = 'https://www.ge.com/digital/documentation/predix-apm/';
	var SEARCH_SUFFIX$2 = 'search.html?searchQuery=';
	var buildSearchUrl$3 = function (props) {
	    return UNIFIED_DEFAULT_HELP_PAGE + SEARCH_SUFFIX$2 + props.searchTerm;
	};
	var format$3 = function (props) {
	    if (props.searchTerm) {
	        return buildSearchUrl$3(props);
	    }
	    return UNIFIED_DEFAULT_HELP_PAGE;
	};
	var testid$3 = function (props) { return optionalProp('data-testid', props.testid); };
	var onClickWrapper$3 = function (props) {
	    props.onClick(format$3(props));
	};
	var tooltip$4 = function (props) { return requiredProp('title', props.tooltip, 'tooltip'); };
	var icon$5 = function (props) { return requiredProp('className', props.icon, 'icon'); };
	var onClick$4 = function (props) {
	    return requiredProp('onClick', onClickWrapper$3.bind(null, props));
	};
	var HelpUnified = function (props) {
	    return (h("div", null,
	        h("button", __assign({ className: className$7() }, __assign(__assign(__assign({}, onClick$4(props)), testid$3(props)), tooltip$4(props))),
	            h("i", __assign({}, __assign({}, icon$5(props)))))));
	};

	var UNIFIED_DEFAULT_HELP_PAGE$1 = 'https://www.ge.com/digital/documentation/predix-apm/';
	var SEARCH_SUFFIX$3 = 'search.html?searchQuery=';
	var getUrlPrefix$2 = function (props) {
	    return props.baseUrl + "Help/" + props.culture + "/";
	};
	var buildSearchUrl$4 = function (props) {
	    return UNIFIED_DEFAULT_HELP_PAGE$1 + SEARCH_SUFFIX$3 + props.searchTerm;
	};
	var buildContextUrl$2 = function (props) {
	    return getUrlPrefix$2(props) + formatContextForRedirect(props.context);
	};
	var format$4 = function (props) {
	    if (props.searchTerm) {
	        return buildSearchUrl$4(props);
	    }
	    if (props.context) {
	        return buildContextUrl$2(props);
	    }
	    return UNIFIED_DEFAULT_HELP_PAGE$1;
	};
	var testid$4 = function (props) { return optionalProp('data-testid', props.testid); };
	var onClickWrapper$4 = function (props) {
	    props.onClick(format$4(props));
	};
	var tooltip$5 = function (props) { return requiredProp('title', props.tooltip, 'tooltip'); };
	var icon$6 = function (props) { return requiredProp('className', props.icon, 'icon'); };
	var onClick$5 = function (props) {
	    return requiredProp('onClick', onClickWrapper$4.bind(null, props));
	};
	var HelpUnifiedMobile = function (props) {
	    return (h("div", null,
	        h("button", __assign({ className: className$7() }, __assign(__assign(__assign({}, onClick$5(props)), testid$4(props)), tooltip$5(props))),
	            h("i", __assign({}, __assign({}, icon$6(props)))))));
	};

	var StatelessPreactDucklet = /** @class */ (function () {
	    function StatelessPreactDucklet(functionComponent) {
	        this.element = null;
	        this.functionComponent = functionComponent;
	    }
	    StatelessPreactDucklet.prototype.mount = function (element, attrs) {
	        if (this.element)
	            throw new Error('Component is already mounted');
	        this.element = element;
	        if (attrs)
	            this.update(function () { return attrs; });
	        return this;
	    };
	    StatelessPreactDucklet.prototype.unmount = function () {
	        if (!this.element)
	            throw new Error('Component has not been mounted');
	        this.unmountPreact();
	        this.deleteContents();
	        var element = this.element;
	        this.element = null;
	        return element;
	    };
	    StatelessPreactDucklet.prototype.unmountPreact = function () {
	        H(null, this.element);
	    };
	    StatelessPreactDucklet.prototype.deleteContents = function () {
	        var _a;
	        while ((_a = this.element) === null || _a === void 0 ? void 0 : _a.firstChild) {
	            this.element.removeChild(this.element.firstChild);
	        }
	    };
	    StatelessPreactDucklet.prototype.update = function (callback) {
	        if (!this.element)
	            throw new Error('Component has not been mounted');
	        var attrs = callback();
	        var virtualDom = this.functionComponent(attrs);
	        H(virtualDom, this.element);
	        return this;
	    };
	    return StatelessPreactDucklet;
	}());

	var PreexistingAttrDecorator = /** @class */ (function () {
	    function PreexistingAttrDecorator(ducklet, attrs) {
	        this.ducklet = ducklet;
	        this.attrs = attrs;
	    }
	    PreexistingAttrDecorator.prototype.mount = function (element, attrs) {
	        var useAttrs = __assign(__assign({}, this.attrs), attrs);
	        this.ducklet.mount(element, useAttrs);
	        this.attrs = null;
	        return this;
	    };
	    PreexistingAttrDecorator.prototype.unmount = function () {
	        return this.ducklet.unmount();
	    };
	    PreexistingAttrDecorator.prototype.update = function (callback) {
	        this.ducklet.update(callback);
	        return this;
	    };
	    return PreexistingAttrDecorator;
	}());
	function of$8(ducklet, attrs) {
	    return new PreexistingAttrDecorator(ducklet, attrs);
	}

	var defaultAttrs = {
	    className: '',
	    testid: ''
	};
	var defaultClassName$1 = css({
	    boxSizing: 'border-box',
	    lineHeight: 0,
	    listStyleType: 'none',
	    margin: 0,
	    padding: 0,
	    li: {
	        margin: 0,
	        padding: 0
	    }
	});
	var ImmutableDuckletList = /** @class */ (function () {
	    function ImmutableDuckletList(children, immutableClassName) {
	        this.mountPoint = new MountPoint();
	        this.children = children;
	        this.immutableClassName = immutableClassName;
	    }
	    ImmutableDuckletList.prototype.mount = function (element, attrs) {
	        this.mountPoint.mount(element, 'ul');
	        this.applyAttrs(attrs);
	        this.mountChildren();
	        return this;
	    };
	    ImmutableDuckletList.prototype.applyAttrs = function (attrs) {
	        this.setClassNames(attrs);
	        this.setTestId(attrs);
	    };
	    ImmutableDuckletList.prototype.setClassNames = function (attrs) {
	        var _this = this;
	        this.mountPoint.withFirstChild(function (firstChild) {
	            var className = __assign(__assign({}, defaultAttrs), attrs).className;
	            firstChild.className = cx(defaultClassName$1, _this.immutableClassName, className);
	        });
	    };
	    ImmutableDuckletList.prototype.setTestId = function (attrs) {
	        this.mountPoint.withFirstChild(function (firstChild) {
	            var testid = __assign(__assign({}, defaultAttrs), attrs).testid;
	            if (testid.length)
	                firstChild.setAttribute('data-testid', testid);
	        });
	    };
	    ImmutableDuckletList.prototype.mountChildren = function () {
	        var _this = this;
	        this.children.forEach(function (child) { return _this.mountChild(child); });
	    };
	    ImmutableDuckletList.prototype.mountChild = function (child) {
	        this.mountPoint.withFirstChild(function (firstChild) {
	            var childMountPoint = document.createElement('li');
	            firstChild.appendChild(childMountPoint);
	            child.mount(childMountPoint);
	        });
	    };
	    ImmutableDuckletList.prototype.unmount = function () {
	        this.unmountChildren();
	        return this.mountPoint.unmount();
	    };
	    ImmutableDuckletList.prototype.unmountChildren = function () {
	        this.children.forEach(function (child) { return child.unmount(); });
	    };
	    ImmutableDuckletList.prototype.update = function (callback) {
	        var attrs = callback();
	        this.applyAttrs(attrs);
	        return this;
	    };
	    return ImmutableDuckletList;
	}());
	function of$9(children, immutableClassName, attrs) {
	    if (immutableClassName === void 0) { immutableClassName = ''; }
	    if (attrs === void 0) { attrs = {}; }
	    return of$8(new ImmutableDuckletList(children, immutableClassName), attrs);
	}
	function ofEmpty() {
	    return of$9([]);
	}

	var immutableDuckletList = /*#__PURE__*/Object.freeze({
		__proto__: null,
		of: of$9,
		ofEmpty: ofEmpty
	});

	var dropdown_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	var dropdown = {
		panel: {
			border: {
				dark: "1px solid #D8E0E5",
				light: "1px solid #D8E0E5",
				medium: "1px solid #D8E0E5"
			},
			item: {
				fontSize: "15px",
				height: "30px",
				hover: {
					bgColor: {
						light: "#EBEFF2",
						medium: "#EBEFF2",
						dark: "#EBEFF2"
					},
					fgColor: {
						light: "#2C404C",
						medium: "#2C404C",
						dark: "#2C404C"
					}
				},
				normal: {
					bgColor: {
						light: "#FFFFFF",
						medium: "#FFFFFF",
						dark: "#FFFFFF"
					},
					fgColor: {
						light: "#2C404C",
						medium: "#2C404C",
						dark: "#2C404C"
					}
				},
				selected: {
					bgColor: {
						light: "#09819C",
						medium: "#09819C",
						dark: "#09819C"
					},
					fgColor: {
						light: "#FFFFFF",
						medium: "#FFFFFF",
						dark: "#FFFFFF"
					}
				}
			},
			maxItems: 10,
			padding: "10px",
			section: {
				label: {
					fgColor: {
						light: "#677E8C",
						medium: "#677E8C",
						dark: "#677E8C"
					},
					fontSize: "12px",
					textTransform: "capitalize"
				},
				padding: "10px"
			},
			shadow: {
				light: "0 1px 3px 0 rgba(0, 0, 0, 0.15)",
				medium: "0 1px 3px 0 rgba(0, 0, 0, 0.15)",
				dark: "0 1px 3px 0 rgba(0, 0, 0, 0.15)"
			}
		}
	};
	var dropdown$1 = {
		dropdown: dropdown
	};

	exports.default = dropdown$1;
	exports.dropdown = dropdown;
	});

	unwrapExports(dropdown_1);
	var dropdown_2 = dropdown_1.dropdown;

	var DropdownItemStyle = css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    -webkit-user-select: none; /* Chrome/Safari */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+ */\n    -o-user-select: none;\n    user-select: none;\n\n    cursor: pointer;\n    height: ", ";\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n    text-align: left;\n\n    :hover :active {\n        background-color: ", ";\n        color: ", ";\n    }\n    :hover {\n        background-color: ", ";\n    }\n\n    a {\n        align-items: center;\n        color: ", ";\n        display: flex;\n        height: 100%;\n        line-height: ", ";\n        padding-right: ", ";\n        text-decoration: none;\n    }\n\n    a:hover {\n        color: ", ";\n        text-decoration: none;\n    }\n"], ["\n    -webkit-user-select: none; /* Chrome/Safari */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+ */\n    -o-user-select: none;\n    user-select: none;\n\n    cursor: pointer;\n    height: ", ";\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n    text-align: left;\n\n    :hover :active {\n        background-color: ", ";\n        color: ", ";\n    }\n    :hover {\n        background-color: ", ";\n    }\n\n    a {\n        align-items: center;\n        color: ", ";\n        display: flex;\n        height: 100%;\n        line-height: ", ";\n        padding-right: ", ";\n        text-decoration: none;\n    }\n\n    a:hover {\n        color: ", ";\n        text-decoration: none;\n    }\n"])), dropdown_2.panel.item.height, dropdown_2.panel.item.normal.bgColor.light, dropdown_2.panel.item.normal.fgColor.light, dropdown_2.panel.item.fontSize, dropdown_2.panel.item.selected.bgColor.light, dropdown_2.panel.item.selected.fgColor.light, dropdown_2.panel.item.hover.bgColor.light, dropdown_2.panel.item.normal.fgColor.light, dropdown_2.panel.item.height, dropdown_2.panel.padding, dropdown_2.panel.item.normal.fgColor.light);
	var checkForSeparators = function (props) {
	    if (props.topSeparator && props.bottomSeparator) {
	        return "\n            border-top: " + dropdown_2.panel.border.light + ";\n            border-bottom: " + dropdown_2.panel.border.light + ";\n        ";
	    }
	    if (props.bottomSeparator) {
	        return "\n            border-bottom: " + dropdown_2.panel.border.light + ";\n        ";
	    }
	    if (props.topSeparator) {
	        return "\n            border-top: " + dropdown_2.panel.border.light + ";\n        ";
	    }
	    return '';
	};
	var iconStyle = function (props) {
	    if (props.icon) {
	        return css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n            padding-left: ", ";\n            padding-right: ", ";\n        "], ["\n            padding-left: ", ";\n            padding-right: ", ";\n        "])), dropdown_2.panel.padding, dropdown_2.panel.padding);
	    }
	    return css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n        padding-left: ", ";\n    "], ["\n        padding-left: ", ";\n    "])), dropdown_2.panel.padding);
	};
	var onClickWrapper$5 = function (props, event) {
	    var customEvent = {
	        props: props,
	        nativeEvent: event
	    };
	    props.onClick(customEvent);
	};
	var testid$5 = function (props) { return optionalProp('data-testid', props.testid); };
	var onClick$6 = function (props) {
	    return optionalProp('onClick', onClickWrapper$5.bind(null, props));
	};
	var DropdownItem = function (props) { return (h("div", __assign({ className: DropdownItemStyle, style: checkForSeparators(props) }, __assign({}, onClick$6(props))),
	    h("a", __assign({ className: 'ns-dropdown-item' }, __assign({}, testid$5(props))),
	        h("i", { className: cx(props.icon, iconStyle(props)) }),
	        props.caption))); };
	var templateObject_1$2, templateObject_2$1, templateObject_3$1;

	var top = 'top';
	var bottom = 'bottom';
	var right = 'right';
	var left = 'left';
	var auto = 'auto';
	var basePlacements = [top, bottom, right, left];
	var start = 'start';
	var end = 'end';
	var clippingParents = 'clippingParents';
	var viewport = 'viewport';
	var popper = 'popper';
	var reference = 'reference';
	var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
	  return acc.concat([placement + "-" + start, placement + "-" + end]);
	}, []);
	var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
	  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
	}, []); // modifiers that need to read the DOM

	var beforeRead = 'beforeRead';
	var read = 'read';
	var afterRead = 'afterRead'; // pure-logic modifiers

	var beforeMain = 'beforeMain';
	var main = 'main';
	var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	var beforeWrite = 'beforeWrite';
	var write = 'write';
	var afterWrite = 'afterWrite';
	var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

	function getNodeName(element) {
	  return element ? (element.nodeName || '').toLowerCase() : null;
	}

	/*:: import type { Window } from '../types'; */

	/*:: declare function getWindow(node: Node | Window): Window; */
	function getWindow(node) {
	  if (node.toString() !== '[object Window]') {
	    var ownerDocument = node.ownerDocument;
	    return ownerDocument ? ownerDocument.defaultView || window : window;
	  }

	  return node;
	}

	/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
	  Element); */

	function isElement(node) {
	  var OwnElement = getWindow(node).Element;
	  return node instanceof OwnElement || node instanceof Element;
	}
	/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
	  HTMLElement); */


	function isHTMLElement(node) {
	  var OwnElement = getWindow(node).HTMLElement;
	  return node instanceof OwnElement || node instanceof HTMLElement;
	}
	/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
	  ShadowRoot); */


	function isShadowRoot(node) {
	  var OwnElement = getWindow(node).ShadowRoot;
	  return node instanceof OwnElement || node instanceof ShadowRoot;
	}

	// and applies them to the HTMLElements such as popper and arrow

	function applyStyles(_ref) {
	  var state = _ref.state;
	  Object.keys(state.elements).forEach(function (name) {
	    var style = state.styles[name] || {};
	    var attributes = state.attributes[name] || {};
	    var element = state.elements[name]; // arrow is optional + virtual elements

	    if (!isHTMLElement(element) || !getNodeName(element)) {
	      return;
	    } // Flow doesn't support to extend this property, but it's the most
	    // effective way to apply styles to an HTMLElement
	    // $FlowFixMe


	    Object.assign(element.style, style);
	    Object.keys(attributes).forEach(function (name) {
	      var value = attributes[name];

	      if (value === false) {
	        element.removeAttribute(name);
	      } else {
	        element.setAttribute(name, value === true ? '' : value);
	      }
	    });
	  });
	}

	function effect(_ref2) {
	  var state = _ref2.state;
	  var initialStyles = {
	    popper: {
	      position: state.options.strategy,
	      left: '0',
	      top: '0',
	      margin: '0'
	    },
	    arrow: {
	      position: 'absolute'
	    },
	    reference: {}
	  };
	  Object.assign(state.elements.popper.style, initialStyles.popper);

	  if (state.elements.arrow) {
	    Object.assign(state.elements.arrow.style, initialStyles.arrow);
	  }

	  return function () {
	    Object.keys(state.elements).forEach(function (name) {
	      var element = state.elements[name];
	      var attributes = state.attributes[name] || {};
	      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

	      var style = styleProperties.reduce(function (style, property) {
	        style[property] = '';
	        return style;
	      }, {}); // arrow is optional + virtual elements

	      if (!isHTMLElement(element) || !getNodeName(element)) {
	        return;
	      } // Flow doesn't support to extend this property, but it's the most
	      // effective way to apply styles to an HTMLElement
	      // $FlowFixMe


	      Object.assign(element.style, style);
	      Object.keys(attributes).forEach(function (attribute) {
	        element.removeAttribute(attribute);
	      });
	    });
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var applyStyles$1 = {
	  name: 'applyStyles',
	  enabled: true,
	  phase: 'write',
	  fn: applyStyles,
	  effect: effect,
	  requires: ['computeStyles']
	};

	function getBasePlacement(placement) {
	  return placement.split('-')[0];
	}

	// Returns the layout rect of an element relative to its offsetParent. Layout
	// means it doesn't take into account transforms.
	function getLayoutRect(element) {
	  return {
	    x: element.offsetLeft,
	    y: element.offsetTop,
	    width: element.offsetWidth,
	    height: element.offsetHeight
	  };
	}

	function contains(parent, child) {
	  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

	  if (parent.contains(child)) {
	    return true;
	  } // then fallback to custom implementation with Shadow DOM support
	  else if (isShadowRoot(rootNode)) {
	      var next = child;

	      do {
	        if (next && parent.isSameNode(next)) {
	          return true;
	        } // $FlowFixMe: need a better way to handle this...


	        next = next.parentNode || next.host;
	      } while (next);
	    } // Give up, the result is false


	  return false;
	}

	function getComputedStyle(element) {
	  return getWindow(element).getComputedStyle(element);
	}

	function isTableElement(element) {
	  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	}

	function getDocumentElement(element) {
	  // $FlowFixMe: assume body is always available
	  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
	}

	function getParentNode(element) {
	  if (getNodeName(element) === 'html') {
	    return element;
	  }

	  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
	    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
	    element.parentNode || // DOM Element detected
	    // $FlowFixMe: need a better way to handle this...
	    element.host || // ShadowRoot detected
	    // $FlowFixMe: HTMLElement is a Node
	    getDocumentElement(element) // fallback

	  );
	}

	function getTrueOffsetParent(element) {
	  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
	  getComputedStyle(element).position === 'fixed') {
	    return null;
	  }

	  var offsetParent = element.offsetParent;

	  if (offsetParent) {
	    var html = getDocumentElement(offsetParent);

	    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
	      return html;
	    }
	  }

	  return offsetParent;
	} // `.offsetParent` reports `null` for fixed elements, while absolute elements
	// return the containing block


	function getContainingBlock(element) {
	  var currentNode = getParentNode(element);

	  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
	    // create a containing block.

	    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
	      return currentNode;
	    } else {
	      currentNode = currentNode.parentNode;
	    }
	  }

	  return null;
	} // Gets the closest ancestor positioned element. Handles some edge cases,
	// such as table ancestors and cross browser bugs.


	function getOffsetParent(element) {
	  var window = getWindow(element);
	  var offsetParent = getTrueOffsetParent(element);

	  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
	    offsetParent = getTrueOffsetParent(offsetParent);
	  }

	  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
	    return window;
	  }

	  return offsetParent || getContainingBlock(element) || window;
	}

	function getMainAxisFromPlacement(placement) {
	  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	}

	function within(min, value, max) {
	  return Math.max(min, Math.min(value, max));
	}

	function getFreshSideObject() {
	  return {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  };
	}

	function mergePaddingObject(paddingObject) {
	  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
	}

	function expandToHashMap(value, keys) {
	  return keys.reduce(function (hashMap, key) {
	    hashMap[key] = value;
	    return hashMap;
	  }, {});
	}

	function arrow(_ref) {
	  var _state$modifiersData$;

	  var state = _ref.state,
	      name = _ref.name;
	  var arrowElement = state.elements.arrow;
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var basePlacement = getBasePlacement(state.placement);
	  var axis = getMainAxisFromPlacement(basePlacement);
	  var isVertical = [left, right].indexOf(basePlacement) >= 0;
	  var len = isVertical ? 'height' : 'width';

	  if (!arrowElement || !popperOffsets) {
	    return;
	  }

	  var paddingObject = state.modifiersData[name + "#persistent"].padding;
	  var arrowRect = getLayoutRect(arrowElement);
	  var minProp = axis === 'y' ? top : left;
	  var maxProp = axis === 'y' ? bottom : right;
	  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
	  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
	  var arrowOffsetParent = getOffsetParent(arrowElement);
	  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
	  // outside of the popper bounds

	  var min = paddingObject[minProp];
	  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
	  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

	  var axisProp = axis;
	  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
	}

	function effect$1(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options,
	      name = _ref2.name;
	  var _options$element = options.element,
	      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
	      _options$padding = options.padding,
	      padding = _options$padding === void 0 ? 0 : _options$padding;

	  if (arrowElement == null) {
	    return;
	  } // CSS selector


	  if (typeof arrowElement === 'string') {
	    arrowElement = state.elements.popper.querySelector(arrowElement);

	    if (!arrowElement) {
	      return;
	    }
	  }

	  if (!contains(state.elements.popper, arrowElement)) {

	    return;
	  }

	  state.elements.arrow = arrowElement;
	  state.modifiersData[name + "#persistent"] = {
	    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var arrow$1 = {
	  name: 'arrow',
	  enabled: true,
	  phase: 'main',
	  fn: arrow,
	  effect: effect$1,
	  requires: ['popperOffsets'],
	  requiresIfExists: ['preventOverflow']
	};

	var unsetSides = {
	  top: 'auto',
	  right: 'auto',
	  bottom: 'auto',
	  left: 'auto'
	}; // Round the offsets to the nearest suitable subpixel based on the DPR.
	// Zooming can change the DPR, but it seems to report a value that will
	// cleanly divide the values into the appropriate subpixels.

	function roundOffsets(_ref) {
	  var x = _ref.x,
	      y = _ref.y;
	  var win = window;
	  var dpr = win.devicePixelRatio || 1;
	  return {
	    x: Math.round(x * dpr) / dpr || 0,
	    y: Math.round(y * dpr) / dpr || 0
	  };
	}

	function mapToStyles(_ref2) {
	  var _Object$assign2;

	  var popper = _ref2.popper,
	      popperRect = _ref2.popperRect,
	      placement = _ref2.placement,
	      offsets = _ref2.offsets,
	      position = _ref2.position,
	      gpuAcceleration = _ref2.gpuAcceleration,
	      adaptive = _ref2.adaptive;

	  var _roundOffsets = roundOffsets(offsets),
	      x = _roundOffsets.x,
	      y = _roundOffsets.y;

	  var hasX = offsets.hasOwnProperty('x');
	  var hasY = offsets.hasOwnProperty('y');
	  var sideX = left;
	  var sideY = top;
	  var win = window;

	  if (adaptive) {
	    var offsetParent = getOffsetParent(popper);

	    if (offsetParent === getWindow(popper)) {
	      offsetParent = getDocumentElement(popper);
	    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

	    /*:: offsetParent = (offsetParent: Element); */


	    if (placement === top) {
	      sideY = bottom;
	      y -= offsetParent.clientHeight - popperRect.height;
	      y *= gpuAcceleration ? 1 : -1;
	    }

	    if (placement === left) {
	      sideX = right;
	      x -= offsetParent.clientWidth - popperRect.width;
	      x *= gpuAcceleration ? 1 : -1;
	    }
	  }

	  var commonStyles = Object.assign({
	    position: position
	  }, adaptive && unsetSides);

	  if (gpuAcceleration) {
	    var _Object$assign;

	    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	  }

	  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
	}

	function computeStyles(_ref3) {
	  var state = _ref3.state,
	      options = _ref3.options;
	  var _options$gpuAccelerat = options.gpuAcceleration,
	      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
	      _options$adaptive = options.adaptive,
	      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

	  var commonStyles = {
	    placement: getBasePlacement(state.placement),
	    popper: state.elements.popper,
	    popperRect: state.rects.popper,
	    gpuAcceleration: gpuAcceleration
	  };

	  if (state.modifiersData.popperOffsets != null) {
	    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
	      offsets: state.modifiersData.popperOffsets,
	      position: state.options.strategy,
	      adaptive: adaptive
	    })));
	  }

	  if (state.modifiersData.arrow != null) {
	    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
	      offsets: state.modifiersData.arrow,
	      position: 'absolute',
	      adaptive: false
	    })));
	  }

	  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
	    'data-popper-placement': state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var computeStyles$1 = {
	  name: 'computeStyles',
	  enabled: true,
	  phase: 'beforeWrite',
	  fn: computeStyles,
	  data: {}
	};

	var passive = {
	  passive: true
	};

	function effect$2(_ref) {
	  var state = _ref.state,
	      instance = _ref.instance,
	      options = _ref.options;
	  var _options$scroll = options.scroll,
	      scroll = _options$scroll === void 0 ? true : _options$scroll,
	      _options$resize = options.resize,
	      resize = _options$resize === void 0 ? true : _options$resize;
	  var window = getWindow(state.elements.popper);
	  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

	  if (scroll) {
	    scrollParents.forEach(function (scrollParent) {
	      scrollParent.addEventListener('scroll', instance.update, passive);
	    });
	  }

	  if (resize) {
	    window.addEventListener('resize', instance.update, passive);
	  }

	  return function () {
	    if (scroll) {
	      scrollParents.forEach(function (scrollParent) {
	        scrollParent.removeEventListener('scroll', instance.update, passive);
	      });
	    }

	    if (resize) {
	      window.removeEventListener('resize', instance.update, passive);
	    }
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var eventListeners = {
	  name: 'eventListeners',
	  enabled: true,
	  phase: 'write',
	  fn: function fn() {},
	  effect: effect$2,
	  data: {}
	};

	var hash = {
	  left: 'right',
	  right: 'left',
	  bottom: 'top',
	  top: 'bottom'
	};
	function getOppositePlacement(placement) {
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}

	var hash$1 = {
	  start: 'end',
	  end: 'start'
	};
	function getOppositeVariationPlacement(placement) {
	  return placement.replace(/start|end/g, function (matched) {
	    return hash$1[matched];
	  });
	}

	function getBoundingClientRect(element) {
	  var rect = element.getBoundingClientRect();
	  return {
	    width: rect.width,
	    height: rect.height,
	    top: rect.top,
	    right: rect.right,
	    bottom: rect.bottom,
	    left: rect.left,
	    x: rect.left,
	    y: rect.top
	  };
	}

	function getWindowScroll(node) {
	  var win = getWindow(node);
	  var scrollLeft = win.pageXOffset;
	  var scrollTop = win.pageYOffset;
	  return {
	    scrollLeft: scrollLeft,
	    scrollTop: scrollTop
	  };
	}

	function getWindowScrollBarX(element) {
	  // If <html> has a CSS width greater than the viewport, then this will be
	  // incorrect for RTL.
	  // Popper 1 is broken in this case and never had a bug report so let's assume
	  // it's not an issue. I don't think anyone ever specifies width on <html>
	  // anyway.
	  // Browsers where the left scrollbar doesn't cause an issue report `0` for
	  // this (e.g. Edge 2019, IE11, Safari)
	  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	}

	function getViewportRect(element) {
	  var win = getWindow(element);
	  var html = getDocumentElement(element);
	  var visualViewport = win.visualViewport;
	  var width = html.clientWidth;
	  var height = html.clientHeight;
	  var x = 0;
	  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
	  // can be obscured underneath it.
	  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
	  // if it isn't open, so if this isn't available, the popper will be detected
	  // to overflow the bottom of the screen too early.

	  if (visualViewport) {
	    width = visualViewport.width;
	    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
	    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
	    // errors due to floating point numbers, so we need to check precision.
	    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
	    // Feature detection fails in mobile emulation mode in Chrome.
	    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
	    // 0.001
	    // Fallback here: "Not Safari" userAgent

	    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
	      x = visualViewport.offsetLeft;
	      y = visualViewport.offsetTop;
	    }
	  }

	  return {
	    width: width,
	    height: height,
	    x: x + getWindowScrollBarX(element),
	    y: y
	  };
	}

	// of the `<html>` and `<body>` rect bounds if horizontally scrollable

	function getDocumentRect(element) {
	  var html = getDocumentElement(element);
	  var winScroll = getWindowScroll(element);
	  var body = element.ownerDocument.body;
	  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	  var y = -winScroll.scrollTop;

	  if (getComputedStyle(body || html).direction === 'rtl') {
	    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
	  }

	  return {
	    width: width,
	    height: height,
	    x: x,
	    y: y
	  };
	}

	function isScrollParent(element) {
	  // Firefox wants us to check `-x` and `-y` variations as well
	  var _getComputedStyle = getComputedStyle(element),
	      overflow = _getComputedStyle.overflow,
	      overflowX = _getComputedStyle.overflowX,
	      overflowY = _getComputedStyle.overflowY;

	  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	}

	function getScrollParent(node) {
	  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
	    // $FlowFixMe: assume body is always available
	    return node.ownerDocument.body;
	  }

	  if (isHTMLElement(node) && isScrollParent(node)) {
	    return node;
	  }

	  return getScrollParent(getParentNode(node));
	}

	/*
	given a DOM element, return the list of all scroll parents, up the list of ancesors
	until we get to the top window object. This list is what we attach scroll listeners
	to, because if any of these parent elements scroll, we'll need to re-calculate the 
	reference element's position.
	*/

	function listScrollParents(element, list) {
	  if (list === void 0) {
	    list = [];
	  }

	  var scrollParent = getScrollParent(element);
	  var isBody = getNodeName(scrollParent) === 'body';
	  var win = getWindow(scrollParent);
	  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	  var updatedList = list.concat(target);
	  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
	  updatedList.concat(listScrollParents(getParentNode(target)));
	}

	function rectToClientRect(rect) {
	  return Object.assign(Object.assign({}, rect), {}, {
	    left: rect.x,
	    top: rect.y,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  });
	}

	function getInnerBoundingClientRect(element) {
	  var rect = getBoundingClientRect(element);
	  rect.top = rect.top + element.clientTop;
	  rect.left = rect.left + element.clientLeft;
	  rect.bottom = rect.top + element.clientHeight;
	  rect.right = rect.left + element.clientWidth;
	  rect.width = element.clientWidth;
	  rect.height = element.clientHeight;
	  rect.x = rect.left;
	  rect.y = rect.top;
	  return rect;
	}

	function getClientRectFromMixedType(element, clippingParent) {
	  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
	} // A "clipping parent" is an overflowable container with the characteristic of
	// clipping (or hiding) overflowing elements with a position different from
	// `initial`


	function getClippingParents(element) {
	  var clippingParents = listScrollParents(getParentNode(element));
	  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
	  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

	  if (!isElement(clipperElement)) {
	    return [];
	  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


	  return clippingParents.filter(function (clippingParent) {
	    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
	  });
	} // Gets the maximum area that the element is visible in due to any number of
	// clipping parents


	function getClippingRect(element, boundary, rootBoundary) {
	  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
	  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
	  var firstClippingParent = clippingParents[0];
	  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
	    var rect = getClientRectFromMixedType(element, clippingParent);
	    accRect.top = Math.max(rect.top, accRect.top);
	    accRect.right = Math.min(rect.right, accRect.right);
	    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
	    accRect.left = Math.max(rect.left, accRect.left);
	    return accRect;
	  }, getClientRectFromMixedType(element, firstClippingParent));
	  clippingRect.width = clippingRect.right - clippingRect.left;
	  clippingRect.height = clippingRect.bottom - clippingRect.top;
	  clippingRect.x = clippingRect.left;
	  clippingRect.y = clippingRect.top;
	  return clippingRect;
	}

	function getVariation(placement) {
	  return placement.split('-')[1];
	}

	function computeOffsets(_ref) {
	  var reference = _ref.reference,
	      element = _ref.element,
	      placement = _ref.placement;
	  var basePlacement = placement ? getBasePlacement(placement) : null;
	  var variation = placement ? getVariation(placement) : null;
	  var commonX = reference.x + reference.width / 2 - element.width / 2;
	  var commonY = reference.y + reference.height / 2 - element.height / 2;
	  var offsets;

	  switch (basePlacement) {
	    case top:
	      offsets = {
	        x: commonX,
	        y: reference.y - element.height
	      };
	      break;

	    case bottom:
	      offsets = {
	        x: commonX,
	        y: reference.y + reference.height
	      };
	      break;

	    case right:
	      offsets = {
	        x: reference.x + reference.width,
	        y: commonY
	      };
	      break;

	    case left:
	      offsets = {
	        x: reference.x - element.width,
	        y: commonY
	      };
	      break;

	    default:
	      offsets = {
	        x: reference.x,
	        y: reference.y
	      };
	  }

	  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

	  if (mainAxis != null) {
	    var len = mainAxis === 'y' ? 'height' : 'width';

	    switch (variation) {
	      case start:
	        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
	        break;

	      case end:
	        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
	        break;
	    }
	  }

	  return offsets;
	}

	function detectOverflow(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      _options$placement = _options.placement,
	      placement = _options$placement === void 0 ? state.placement : _options$placement,
	      _options$boundary = _options.boundary,
	      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
	      _options$rootBoundary = _options.rootBoundary,
	      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
	      _options$elementConte = _options.elementContext,
	      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
	      _options$altBoundary = _options.altBoundary,
	      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
	      _options$padding = _options.padding,
	      padding = _options$padding === void 0 ? 0 : _options$padding;
	  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	  var altContext = elementContext === popper ? reference : popper;
	  var referenceElement = state.elements.reference;
	  var popperRect = state.rects.popper;
	  var element = state.elements[altBoundary ? altContext : elementContext];
	  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
	  var referenceClientRect = getBoundingClientRect(referenceElement);
	  var popperOffsets = computeOffsets({
	    reference: referenceClientRect,
	    element: popperRect,
	    strategy: 'absolute',
	    placement: placement
	  });
	  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
	  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
	  // 0 or negative = within the clipping rect

	  var overflowOffsets = {
	    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
	    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
	    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
	    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	  };
	  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

	  if (elementContext === popper && offsetData) {
	    var offset = offsetData[placement];
	    Object.keys(overflowOffsets).forEach(function (key) {
	      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
	      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
	      overflowOffsets[key] += offset[axis] * multiply;
	    });
	  }

	  return overflowOffsets;
	}

	/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

	/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
	function computeAutoPlacement(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      placement = _options.placement,
	      boundary = _options.boundary,
	      rootBoundary = _options.rootBoundary,
	      padding = _options.padding,
	      flipVariations = _options.flipVariations,
	      _options$allowedAutoP = _options.allowedAutoPlacements,
	      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	  var variation = getVariation(placement);
	  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
	    return getVariation(placement) === variation;
	  }) : basePlacements; // $FlowFixMe

	  var allowedPlacements = placements$1.filter(function (placement) {
	    return allowedAutoPlacements.indexOf(placement) >= 0;
	  });

	  if (allowedPlacements.length === 0) {
	    allowedPlacements = placements$1;
	  } // $FlowFixMe: Flow seems to have problems with two array unions...


	  var overflows = allowedPlacements.reduce(function (acc, placement) {
	    acc[placement] = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding
	    })[getBasePlacement(placement)];
	    return acc;
	  }, {});
	  return Object.keys(overflows).sort(function (a, b) {
	    return overflows[a] - overflows[b];
	  });
	}

	function getExpandedFallbackPlacements(placement) {
	  if (getBasePlacement(placement) === auto) {
	    return [];
	  }

	  var oppositePlacement = getOppositePlacement(placement);
	  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
	}

	function flip(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;

	  if (state.modifiersData[name]._skip) {
	    return;
	  }

	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
	      specifiedFallbackPlacements = options.fallbackPlacements,
	      padding = options.padding,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      _options$flipVariatio = options.flipVariations,
	      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
	      allowedAutoPlacements = options.allowedAutoPlacements;
	  var preferredPlacement = state.options.placement;
	  var basePlacement = getBasePlacement(preferredPlacement);
	  var isBasePlacement = basePlacement === preferredPlacement;
	  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
	    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding,
	      flipVariations: flipVariations,
	      allowedAutoPlacements: allowedAutoPlacements
	    }) : placement);
	  }, []);
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var checksMap = new Map();
	  var makeFallbackChecks = true;
	  var firstFittingPlacement = placements[0];

	  for (var i = 0; i < placements.length; i++) {
	    var placement = placements[i];

	    var _basePlacement = getBasePlacement(placement);

	    var isStartVariation = getVariation(placement) === start;
	    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
	    var len = isVertical ? 'width' : 'height';
	    var overflow = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      altBoundary: altBoundary,
	      padding: padding
	    });
	    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

	    if (referenceRect[len] > popperRect[len]) {
	      mainVariationSide = getOppositePlacement(mainVariationSide);
	    }

	    var altVariationSide = getOppositePlacement(mainVariationSide);
	    var checks = [];

	    if (checkMainAxis) {
	      checks.push(overflow[_basePlacement] <= 0);
	    }

	    if (checkAltAxis) {
	      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
	    }

	    if (checks.every(function (check) {
	      return check;
	    })) {
	      firstFittingPlacement = placement;
	      makeFallbackChecks = false;
	      break;
	    }

	    checksMap.set(placement, checks);
	  }

	  if (makeFallbackChecks) {
	    // `2` may be desired in some cases – research later
	    var numberOfChecks = flipVariations ? 3 : 1;

	    var _loop = function _loop(_i) {
	      var fittingPlacement = placements.find(function (placement) {
	        var checks = checksMap.get(placement);

	        if (checks) {
	          return checks.slice(0, _i).every(function (check) {
	            return check;
	          });
	        }
	      });

	      if (fittingPlacement) {
	        firstFittingPlacement = fittingPlacement;
	        return "break";
	      }
	    };

	    for (var _i = numberOfChecks; _i > 0; _i--) {
	      var _ret = _loop(_i);

	      if (_ret === "break") break;
	    }
	  }

	  if (state.placement !== firstFittingPlacement) {
	    state.modifiersData[name]._skip = true;
	    state.placement = firstFittingPlacement;
	    state.reset = true;
	  }
	} // eslint-disable-next-line import/no-unused-modules


	var flip$1 = {
	  name: 'flip',
	  enabled: true,
	  phase: 'main',
	  fn: flip,
	  requiresIfExists: ['offset'],
	  data: {
	    _skip: false
	  }
	};

	function getSideOffsets(overflow, rect, preventedOffsets) {
	  if (preventedOffsets === void 0) {
	    preventedOffsets = {
	      x: 0,
	      y: 0
	    };
	  }

	  return {
	    top: overflow.top - rect.height - preventedOffsets.y,
	    right: overflow.right - rect.width + preventedOffsets.x,
	    bottom: overflow.bottom - rect.height + preventedOffsets.y,
	    left: overflow.left - rect.width - preventedOffsets.x
	  };
	}

	function isAnySideFullyClipped(overflow) {
	  return [top, right, bottom, left].some(function (side) {
	    return overflow[side] >= 0;
	  });
	}

	function hide(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var preventedOffsets = state.modifiersData.preventOverflow;
	  var referenceOverflow = detectOverflow(state, {
	    elementContext: 'reference'
	  });
	  var popperAltOverflow = detectOverflow(state, {
	    altBoundary: true
	  });
	  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	  state.modifiersData[name] = {
	    referenceClippingOffsets: referenceClippingOffsets,
	    popperEscapeOffsets: popperEscapeOffsets,
	    isReferenceHidden: isReferenceHidden,
	    hasPopperEscaped: hasPopperEscaped
	  };
	  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
	    'data-popper-reference-hidden': isReferenceHidden,
	    'data-popper-escaped': hasPopperEscaped
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var hide$1 = {
	  name: 'hide',
	  enabled: true,
	  phase: 'main',
	  requiresIfExists: ['preventOverflow'],
	  fn: hide
	};

	function distanceAndSkiddingToXY(placement, rects, offset) {
	  var basePlacement = getBasePlacement(placement);
	  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

	  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
	    placement: placement
	  })) : offset,
	      skidding = _ref[0],
	      distance = _ref[1];

	  skidding = skidding || 0;
	  distance = (distance || 0) * invertDistance;
	  return [left, right].indexOf(basePlacement) >= 0 ? {
	    x: distance,
	    y: skidding
	  } : {
	    x: skidding,
	    y: distance
	  };
	}

	function offset(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options,
	      name = _ref2.name;
	  var _options$offset = options.offset,
	      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
	  var data = placements.reduce(function (acc, placement) {
	    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
	    return acc;
	  }, {});
	  var _data$state$placement = data[state.placement],
	      x = _data$state$placement.x,
	      y = _data$state$placement.y;

	  if (state.modifiersData.popperOffsets != null) {
	    state.modifiersData.popperOffsets.x += x;
	    state.modifiersData.popperOffsets.y += y;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var offset$1 = {
	  name: 'offset',
	  enabled: true,
	  phase: 'main',
	  requires: ['popperOffsets'],
	  fn: offset
	};

	function popperOffsets(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  // Offsets are the actual position the popper needs to have to be
	  // properly positioned near its reference element
	  // This is the most basic placement, and will be adjusted by
	  // the modifiers in the next step
	  state.modifiersData[name] = computeOffsets({
	    reference: state.rects.reference,
	    element: state.rects.popper,
	    strategy: 'absolute',
	    placement: state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var popperOffsets$1 = {
	  name: 'popperOffsets',
	  enabled: true,
	  phase: 'read',
	  fn: popperOffsets,
	  data: {}
	};

	function getAltAxis(axis) {
	  return axis === 'x' ? 'y' : 'x';
	}

	function preventOverflow(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;
	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      padding = options.padding,
	      _options$tether = options.tether,
	      tether = _options$tether === void 0 ? true : _options$tether,
	      _options$tetherOffset = options.tetherOffset,
	      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	  var overflow = detectOverflow(state, {
	    boundary: boundary,
	    rootBoundary: rootBoundary,
	    padding: padding,
	    altBoundary: altBoundary
	  });
	  var basePlacement = getBasePlacement(state.placement);
	  var variation = getVariation(state.placement);
	  var isBasePlacement = !variation;
	  var mainAxis = getMainAxisFromPlacement(basePlacement);
	  var altAxis = getAltAxis(mainAxis);
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
	    placement: state.placement
	  })) : tetherOffset;
	  var data = {
	    x: 0,
	    y: 0
	  };

	  if (!popperOffsets) {
	    return;
	  }

	  if (checkMainAxis) {
	    var mainSide = mainAxis === 'y' ? top : left;
	    var altSide = mainAxis === 'y' ? bottom : right;
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    var offset = popperOffsets[mainAxis];
	    var min = popperOffsets[mainAxis] + overflow[mainSide];
	    var max = popperOffsets[mainAxis] - overflow[altSide];
	    var additive = tether ? -popperRect[len] / 2 : 0;
	    var minLen = variation === start ? referenceRect[len] : popperRect[len];
	    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
	    // outside the reference bounds

	    var arrowElement = state.elements.arrow;
	    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
	      width: 0,
	      height: 0
	    };
	    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
	    var arrowPaddingMin = arrowPaddingObject[mainSide];
	    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
	    // to include its full size in the calculation. If the reference is small
	    // and near the edge of a boundary, the popper can overflow even if the
	    // reference is not overflowing as well (e.g. virtual elements with no
	    // width or height)

	    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
	    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
	    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
	    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
	    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
	    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
	    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
	    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
	    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
	    popperOffsets[mainAxis] = preventedOffset;
	    data[mainAxis] = preventedOffset - offset;
	  }

	  if (checkAltAxis) {
	    var _mainSide = mainAxis === 'x' ? top : left;

	    var _altSide = mainAxis === 'x' ? bottom : right;

	    var _offset = popperOffsets[altAxis];

	    var _min = _offset + overflow[_mainSide];

	    var _max = _offset - overflow[_altSide];

	    var _preventedOffset = within(_min, _offset, _max);

	    popperOffsets[altAxis] = _preventedOffset;
	    data[altAxis] = _preventedOffset - _offset;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var preventOverflow$1 = {
	  name: 'preventOverflow',
	  enabled: true,
	  phase: 'main',
	  fn: preventOverflow,
	  requiresIfExists: ['offset']
	};

	function getHTMLElementScroll(element) {
	  return {
	    scrollLeft: element.scrollLeft,
	    scrollTop: element.scrollTop
	  };
	}

	function getNodeScroll(node) {
	  if (node === getWindow(node) || !isHTMLElement(node)) {
	    return getWindowScroll(node);
	  } else {
	    return getHTMLElementScroll(node);
	  }
	}

	// Composite means it takes into account transforms as well as layout.

	function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }

	  var documentElement = getDocumentElement(offsetParent);
	  var rect = getBoundingClientRect(elementOrVirtualElement);
	  var isOffsetParentAnElement = isHTMLElement(offsetParent);
	  var scroll = {
	    scrollLeft: 0,
	    scrollTop: 0
	  };
	  var offsets = {
	    x: 0,
	    y: 0
	  };

	  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
	    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
	    isScrollParent(documentElement)) {
	      scroll = getNodeScroll(offsetParent);
	    }

	    if (isHTMLElement(offsetParent)) {
	      offsets = getBoundingClientRect(offsetParent);
	      offsets.x += offsetParent.clientLeft;
	      offsets.y += offsetParent.clientTop;
	    } else if (documentElement) {
	      offsets.x = getWindowScrollBarX(documentElement);
	    }
	  }

	  return {
	    x: rect.left + scroll.scrollLeft - offsets.x,
	    y: rect.top + scroll.scrollTop - offsets.y,
	    width: rect.width,
	    height: rect.height
	  };
	}

	function order(modifiers) {
	  var map = new Map();
	  var visited = new Set();
	  var result = [];
	  modifiers.forEach(function (modifier) {
	    map.set(modifier.name, modifier);
	  }); // On visiting object, check for its dependencies and visit them recursively

	  function sort(modifier) {
	    visited.add(modifier.name);
	    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
	    requires.forEach(function (dep) {
	      if (!visited.has(dep)) {
	        var depModifier = map.get(dep);

	        if (depModifier) {
	          sort(depModifier);
	        }
	      }
	    });
	    result.push(modifier);
	  }

	  modifiers.forEach(function (modifier) {
	    if (!visited.has(modifier.name)) {
	      // check for visited object
	      sort(modifier);
	    }
	  });
	  return result;
	}

	function orderModifiers(modifiers) {
	  // order based on dependencies
	  var orderedModifiers = order(modifiers); // order based on phase

	  return modifierPhases.reduce(function (acc, phase) {
	    return acc.concat(orderedModifiers.filter(function (modifier) {
	      return modifier.phase === phase;
	    }));
	  }, []);
	}

	function debounce(fn) {
	  var pending;
	  return function () {
	    if (!pending) {
	      pending = new Promise(function (resolve) {
	        Promise.resolve().then(function () {
	          pending = undefined;
	          resolve(fn());
	        });
	      });
	    }

	    return pending;
	  };
	}

	function mergeByName(modifiers) {
	  var merged = modifiers.reduce(function (merged, current) {
	    var existing = merged[current.name];
	    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
	      options: Object.assign(Object.assign({}, existing.options), current.options),
	      data: Object.assign(Object.assign({}, existing.data), current.data)
	    }) : current;
	    return merged;
	  }, {}); // IE11 does not support Object.values

	  return Object.keys(merged).map(function (key) {
	    return merged[key];
	  });
	}

	var DEFAULT_OPTIONS = {
	  placement: 'bottom',
	  modifiers: [],
	  strategy: 'absolute'
	};

	function areValidElements() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return !args.some(function (element) {
	    return !(element && typeof element.getBoundingClientRect === 'function');
	  });
	}

	function popperGenerator(generatorOptions) {
	  if (generatorOptions === void 0) {
	    generatorOptions = {};
	  }

	  var _generatorOptions = generatorOptions,
	      _generatorOptions$def = _generatorOptions.defaultModifiers,
	      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
	      _generatorOptions$def2 = _generatorOptions.defaultOptions,
	      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	  return function createPopper(reference, popper, options) {
	    if (options === void 0) {
	      options = defaultOptions;
	    }

	    var state = {
	      placement: 'bottom',
	      orderedModifiers: [],
	      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
	      modifiersData: {},
	      elements: {
	        reference: reference,
	        popper: popper
	      },
	      attributes: {},
	      styles: {}
	    };
	    var effectCleanupFns = [];
	    var isDestroyed = false;
	    var instance = {
	      state: state,
	      setOptions: function setOptions(options) {
	        cleanupModifierEffects();
	        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
	        state.scrollParents = {
	          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
	          popper: listScrollParents(popper)
	        }; // Orders the modifiers based on their dependencies and `phase`
	        // properties

	        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

	        state.orderedModifiers = orderedModifiers.filter(function (m) {
	          return m.enabled;
	        }); // Validate the provided modifiers so that the consumer will get warned

	        runModifierEffects();
	        return instance.update();
	      },
	      // Sync update – it will always be executed, even if not necessary. This
	      // is useful for low frequency updates where sync behavior simplifies the
	      // logic.
	      // For high frequency updates (e.g. `resize` and `scroll` events), always
	      // prefer the async Popper#update method
	      forceUpdate: function forceUpdate() {
	        if (isDestroyed) {
	          return;
	        }

	        var _state$elements = state.elements,
	            reference = _state$elements.reference,
	            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
	        // anymore

	        if (!areValidElements(reference, popper)) {

	          return;
	        } // Store the reference and popper rects to be read by modifiers


	        state.rects = {
	          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
	          popper: getLayoutRect(popper)
	        }; // Modifiers have the ability to reset the current update cycle. The
	        // most common use case for this is the `flip` modifier changing the
	        // placement, which then needs to re-run all the modifiers, because the
	        // logic was previously ran for the previous placement and is therefore
	        // stale/incorrect

	        state.reset = false;
	        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
	        // is filled with the initial data specified by the modifier. This means
	        // it doesn't persist and is fresh on each update.
	        // To ensure persistent data, use `${name}#persistent`

	        state.orderedModifiers.forEach(function (modifier) {
	          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
	        });

	        for (var index = 0; index < state.orderedModifiers.length; index++) {

	          if (state.reset === true) {
	            state.reset = false;
	            index = -1;
	            continue;
	          }

	          var _state$orderedModifie = state.orderedModifiers[index],
	              fn = _state$orderedModifie.fn,
	              _state$orderedModifie2 = _state$orderedModifie.options,
	              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
	              name = _state$orderedModifie.name;

	          if (typeof fn === 'function') {
	            state = fn({
	              state: state,
	              options: _options,
	              name: name,
	              instance: instance
	            }) || state;
	          }
	        }
	      },
	      // Async and optimistically optimized update – it will not be executed if
	      // not necessary (debounced to run at most once-per-tick)
	      update: debounce(function () {
	        return new Promise(function (resolve) {
	          instance.forceUpdate();
	          resolve(state);
	        });
	      }),
	      destroy: function destroy() {
	        cleanupModifierEffects();
	        isDestroyed = true;
	      }
	    };

	    if (!areValidElements(reference, popper)) {

	      return instance;
	    }

	    instance.setOptions(options).then(function (state) {
	      if (!isDestroyed && options.onFirstUpdate) {
	        options.onFirstUpdate(state);
	      }
	    }); // Modifiers have the ability to execute arbitrary code before the first
	    // update cycle runs. They will be executed in the same order as the update
	    // cycle. This is useful when a modifier adds some persistent data that
	    // other modifiers need to use, but the modifier is run after the dependent
	    // one.

	    function runModifierEffects() {
	      state.orderedModifiers.forEach(function (_ref3) {
	        var name = _ref3.name,
	            _ref3$options = _ref3.options,
	            options = _ref3$options === void 0 ? {} : _ref3$options,
	            effect = _ref3.effect;

	        if (typeof effect === 'function') {
	          var cleanupFn = effect({
	            state: state,
	            name: name,
	            instance: instance,
	            options: options
	          });

	          var noopFn = function noopFn() {};

	          effectCleanupFns.push(cleanupFn || noopFn);
	        }
	      });
	    }

	    function cleanupModifierEffects() {
	      effectCleanupFns.forEach(function (fn) {
	        return fn();
	      });
	      effectCleanupFns = [];
	    }

	    return instance;
	  };
	}

	var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
	var createPopper = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers
	}); // eslint-disable-next-line import/no-unused-modules

	var PopperWrapper = /** @class */ (function (_super) {
	    __extends(PopperWrapper, _super);
	    function PopperWrapper() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.popper = null;
	        _this.toggle = function (props) {
	            return props.expanded ? { display: 'block' } : { display: 'none' };
	        };
	        _this.render = function () { return h("div", { style: _this.toggle(_this.props) }, _this.props.children); };
	        return _this;
	    }
	    PopperWrapper.prototype.componentDidMount = function () {
	        var button = this.base.previousSibling;
	        var dropdown = this.base.querySelector('.ns-dropdown');
	        if (button && dropdown) {
	            this.popper = createPopper(button, dropdown, {
	                modifiers: [
	                    {
	                        name: 'offset',
	                        options: {
	                            offset: [4, 15]
	                        }
	                    }
	                ],
	                placement: 'bottom-start'
	            });
	        }
	    };
	    PopperWrapper.prototype.componentDidUpdate = function () {
	        if (this.popper) {
	            this.popper.update();
	        }
	    };
	    PopperWrapper.prototype.componentWillUnmount = function () {
	        if (this.popper) {
	            this.popper.destroy();
	            this.popper = null;
	        }
	    };
	    return PopperWrapper;
	}(m));

	var DropdownStyle = css(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    border: ", ";\n    box-shadow: ", ";\n    width: max-content;\n    font-family: 'GE Inspira Sans';\n"], ["\n    border: ", ";\n    box-shadow: ", ";\n    width: max-content;\n    font-family: 'GE Inspira Sans';\n"])), dropdown_2.panel.border.light, dropdown_2.panel.shadow.light);
	var ButtonStyle = cx(TransparentButton, css({
	    height: '22px',
	    lineHeight: 0,
	    margin: 0,
	    padding: 0,
	    width: '22px',
	    i: {
	        fontSize: '16px'
	    }
	}));
	var Dropdown = /** @class */ (function (_super) {
	    __extends(Dropdown, _super);
	    function Dropdown(props) {
	        var _this = _super.call(this, props) || this;
	        _this.testid = function (props) { return optionalProp('data-testid', props.testid); };
	        _this.dropdownTestId = function (props) { return optionalProp('data-testid', props.dropdownTestId); };
	        _this.onClickWrapper = function () {
	            _this.setState({ expanded: !_this.state.expanded });
	        };
	        _this.tooltip = function (props) { return requiredProp('title', props.tooltip); };
	        _this.icon = function (props) { return requiredProp('className', props.icon); };
	        _this.onClick = function (props) {
	            return optionalProp('onClick', _this.onClickWrapper.bind(null, props));
	        };
	        _this.expanded = function (props) { return optionalProp('expanded', props.expanded); };
	        _this.dropdownItems = function (props) {
	            return props.children.map(function (dropdownItem) { return (h(DropdownItem, { caption: dropdownItem.caption, icon: dropdownItem.icon, onClick: dropdownItem.onClick, topSeparator: dropdownItem.topSeparator, bottomSeparator: dropdownItem.bottomSeparator, testid: dropdownItem.testid })); });
	        };
	        _this.children = function (props) {
	            return requiredProp('children', h("div", __assign({ className: cx(DropdownStyle, 'ns-dropdown') }, _this.dropdownTestId(_this.props)), _this.dropdownItems(props)));
	        };
	        _this.render = function () { return (h("div", null,
	            h("button", __assign({ className: ButtonStyle }, __assign(__assign(__assign({}, _this.onClick(_this.props)), _this.testid(_this.props)), _this.tooltip(_this.props))),
	                h("i", __assign({}, __assign({}, _this.icon(_this.props))))),
	            h(PopperWrapper, __assign({ expanded: _this.state.expanded }, __assign({}, _this.children(_this.props)))))); };
	        _this.state = {
	            expanded: props.expanded || false
	        };
	        return _this;
	    }
	    Dropdown.prototype.componentDidMount = function () {
	        this.windowClickHandler = this.closeDropdownOnClick.bind(this);
	        window.addEventListener('click', this.windowClickHandler);
	    };
	    Dropdown.prototype.closeDropdownOnClick = function (event) {
	        var _a, _b;
	        if (!((_a = this.base) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.classList.contains('ns-dropdown-item'))) {
	            this.setState({ expanded: false });
	        }
	    };
	    Dropdown.prototype.componentWillUnmount = function () {
	        window.removeEventListener('click', this.windowClickHandler);
	        this.windowClickHandler = null;
	    };
	    return Dropdown;
	}(m));
	var templateObject_1$3;

	var defaultClassName$2 = css({
	    alignItems: 'center',
	    cursor: 'pointer',
	    display: 'flex',
	    justifyContent: 'center',
	    textAlign: 'center'
	});

	var className$8 = css(__assign(__assign(__assign({}, button), ellipsis), { maxWidth: 150, minWidth: 50 }));
	var caption = function (props) { return props.caption || 'Caption'; };
	var testid$6 = function (props) { return optionalProp('data-testid', props.testid); };
	var onClick$7 = function (props) { return optionalProp('onClick', props.onClick); };
	var TextButtonP = function (props) { return (h("button", __assign({}, __assign(__assign({ className: className$8 }, testid$6(props)), onClick$7(props))), caption(props))); };

	var TextButton = /** @class */ (function (_super) {
	    __extends(TextButton, _super);
	    function TextButton() {
	        return _super.call(this, function (attrs) { return (h(TextButtonP, { caption: attrs.caption, testid: attrs.testid, onClick: attrs.onClick })); }) || this;
	    }
	    return TextButton;
	}(StatelessPreactDucklet));

	var toggle_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	var toggle = {
		handle: {
			borderRadius: "50%",
			height: "20px",
			selected: {
				disabled: {
					bgColor: {
						light: "#FFFFFF",
						medium: "#FFFFFF",
						dark: "#FFFFFF"
					},
					border: {
						dark: "1px solid #C5D1D8",
						light: "1px solid #C5D1D8",
						medium: "1px solid #C5D1D8"
					},
					shadow: {
						light: "0 1px 2px rgba(0, 0, 0, 0.15)",
						medium: "0 1px 2px rgba(0, 0, 0, 0.15)",
						dark: "0 1px 2px rgba(0, 0, 0, 0.15)"
					}
				},
				hover: {
					bgColor: {
						light: "#C5D1D8",
						medium: "#C5D1D8",
						dark: "#C5D1D8"
					},
					border: {
						dark: "1px solid #59717F",
						light: "1px solid #59717F",
						medium: "1px solid #59717F"
					},
					shadow: {
						light: "0 1px 2px rgba(0, 0, 0, 0.15)",
						medium: "0 1px 2px rgba(0, 0, 0, 0.15)",
						dark: "0 1px 2px rgba(0, 0, 0, 0.15)"
					}
				},
				normal: {
					bgColor: {
						light: "#FFFFFF",
						medium: "#FFFFFF",
						dark: "#FFFFFF"
					},
					border: {
						dark: "1px solid #748B99",
						light: "1px solid #748B99",
						medium: "1px solid #748B99"
					},
					shadow: {
						light: "0 1px 2px rgba(0, 0, 0, 0.15)",
						medium: "0 1px 2px rgba(0, 0, 0, 0.15)",
						dark: "0 1px 2px rgba(0, 0, 0, 0.15)"
					}
				},
				pressed: {
					bgColor: {
						light: "#96A8B2",
						medium: "#96A8B2",
						dark: "#96A8B2"
					},
					border: {
						dark: "1px solid #364C59",
						light: "1px solid #364C59",
						medium: "1px solid #364C59"
					},
					shadow: {
						light: "0 1px 2px rgba(0, 0, 0, 0.15)",
						medium: "0 1px 2px rgba(0, 0, 0, 0.15)",
						dark: "0 1px 2px rgba(0, 0, 0, 0.15)"
					}
				}
			},
			unselected: {
				disabled: {
					bgColor: {
						light: "#FFFFFF",
						medium: "#FFFFFF",
						dark: "#FFFFFF"
					},
					border: {
						dark: "1px solid #C5D1D8",
						light: "1px solid #C5D1D8",
						medium: "1px solid #C5D1D8"
					},
					shadow: {
						light: "0 1px 2px rgba(0, 0, 0, 0.15)",
						medium: "0 1px 2px rgba(0, 0, 0, 0.15)",
						dark: "0 1px 2px rgba(0, 0, 0, 0.15)"
					}
				},
				hover: {
					bgColor: {
						light: "#C5D1D8",
						medium: "#C5D1D8",
						dark: "#C5D1D8"
					},
					border: {
						dark: "1px solid #59717F",
						light: "1px solid #59717F",
						medium: "1px solid #59717F"
					},
					shadow: {
						light: "0 1px 2px rgba(0, 0, 0, 0.15)",
						medium: "0 1px 2px rgba(0, 0, 0, 0.15)",
						dark: "0 1px 2px rgba(0, 0, 0, 0.15)"
					}
				},
				normal: {
					bgColor: {
						light: "#59717F",
						medium: "#59717F",
						dark: "#59717F"
					},
					border: {
						dark: "1px solid #748B99",
						light: "1px solid #748B99",
						medium: "1px solid #748B99"
					},
					shadow: {
						light: "0 1px 2px rgba(0, 0, 0, 0.15)",
						medium: "0 1px 2px rgba(0, 0, 0, 0.15)",
						dark: "0 1px 2px rgba(0, 0, 0, 0.15)"
					}
				},
				pressed: {
					bgColor: {
						light: "#96A8B2",
						medium: "#96A8B2",
						dark: "#96A8B2"
					},
					border: {
						dark: "1px solid #364C59",
						light: "1px solid #364C59",
						medium: "1px solid #364C59"
					},
					shadow: {
						light: "0 1px 2px rgba(0, 0, 0, 0.15)",
						medium: "0 1px 2px rgba(0, 0, 0, 0.15)",
						dark: "0 1px 2px rgba(0, 0, 0, 0.15)"
					}
				}
			},
			width: "20px"
		},
		slot: {
			borderRadius: "10px",
			height: "14px",
			selected: {
				disabled: {
					bgColor: {
						light: "#C5D1D8",
						medium: "#C5D1D8",
						dark: "#C5D1D8"
					},
					border: {
						dark: "1px solid #C5D1D8",
						light: "1px solid #C5D1D8",
						medium: "1px solid #C5D1D8"
					}
				},
				hover: {
					bgColor: {
						light: "#065769",
						medium: "#065769",
						dark: "#065769"
					},
					border: {
						dark: "1px solid #065769",
						light: "1px solid #065769",
						medium: "1px solid #065769"
					}
				},
				normal: {
					bgColor: {
						light: "#09819C",
						medium: "#09819C",
						dark: "#09819C"
					},
					border: {
						dark: "1px solid #09819C",
						light: "1px solid #09819C",
						medium: "1px solid #09819C"
					}
				},
				pressed: {
					bgColor: {
						light: "#032C36",
						medium: "#032C36",
						dark: "#032C36"
					},
					border: {
						dark: "1px solid #032C36",
						light: "1px solid #032C36",
						medium: "1px solid #032C36"
					}
				}
			},
			unselected: {
				disabled: {
					bgColor: {
						light: "#FFFFFF",
						medium: "#FFFFFF",
						dark: "#FFFFFF"
					},
					border: {
						dark: "1px solid #C5D1D8",
						light: "1px solid #C5D1D8",
						medium: "1px solid #C5D1D8"
					}
				},
				hover: {
					bgColor: {
						light: "#B6C3CC",
						medium: "#B6C3CC",
						dark: "#B6C3CC"
					},
					border: {
						dark: "1px solid #59717F",
						light: "1px solid #59717F",
						medium: "1px solid #59717F"
					}
				},
				normal: {
					bgColor: {
						light: "#C5D1D8",
						medium: "#C5D1D8",
						dark: "#C5D1D8"
					},
					border: {
						dark: "1px solid #748B99",
						light: "1px solid #748B99",
						medium: "1px solid #748B99"
					}
				},
				pressed: {
					bgColor: {
						light: "#748B99",
						medium: "#748B99",
						dark: "#748B99"
					},
					border: {
						dark: "1px solid #364C59",
						light: "1px solid #364C59",
						medium: "1px solid #364C59"
					}
				}
			},
			width: "25px"
		},
		transition: "0.4s"
	};
	var toggle$1 = {
		toggle: toggle
	};

	exports.default = toggle$1;
	exports.toggle = toggle;
	});

	unwrapExports(toggle_1);
	var toggle_2 = toggle_1.toggle;

	var slot = '::before';
	var slotSelectedDisabled = ":disabled > :checked + " + slot;
	var slotSelectedHover = ":hover:not([disabled]) > :checked + " + slot;
	var slotSelectedNormal = ":checked + " + slot;
	var slotSelectedPressed = ":active:not([disabled]) > :checked + " + slot;
	var slotUnselectedDisabled = ":disabled > " + slot;
	var slotUnselectedHover = ":hover:not([disabled]) > " + slot;
	var slotUnselectedPressed = ":active:not([disabled]) > " + slot;
	var handle = '::after';
	var handleSelectedNormal = ":checked + " + handle;
	var handleSelectedPressed = ":active:not([disabled]) > " + handle;
	var handleUnselectedDisabled = ":disabled > " + handle;
	var handUnselectedHover = ":hover:not([disabled]) > " + handle;
	var switchLabel = css(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    display: block;\n    width: ", ";\n    height: ", ";\n    text-indent: -150%;\n    clip: rect(0 0 0 0);\n    color: transparent;\n    user-select: none;\n\n    ", " {\n        content: '';\n        display: block;\n        position: absolute;\n        cursor: pointer;\n\n        width: 100%;\n        height: ", ";\n        background-color: ", ";\n        border-radius: ", ";\n        -webkit-transition: background-color ", " ease;\n        transition: background-color ", " ease;\n        border: ", ";\n    }\n\n    ", " {\n        content: '';\n        display: block;\n        position: absolute;\n        cursor: pointer;\n\n        top: -2px;\n        left: 0;\n        width: ", ";\n        height: ", ";\n        border-radius: ", ";\n        background-color: white;\n        box-shadow: ", ";\n        -webkit-transition: left ", " ease;\n        transition: left ", " ease;\n        border: ", ";\n    }\n"], ["\n    display: block;\n    width: ", ";\n    height: ", ";\n    text-indent: -150%;\n    clip: rect(0 0 0 0);\n    color: transparent;\n    user-select: none;\n\n    ", " {\n        content: '';\n        display: block;\n        position: absolute;\n        cursor: pointer;\n\n        width: 100%;\n        height: ", ";\n        background-color: ", ";\n        border-radius: ", ";\n        -webkit-transition: background-color ", " ease;\n        transition: background-color ", " ease;\n        border: ", ";\n    }\n\n    ", " {\n        content: '';\n        display: block;\n        position: absolute;\n        cursor: pointer;\n\n        top: -2px;\n        left: 0;\n        width: ", ";\n        height: ", ";\n        border-radius: ", ";\n        background-color: white;\n        box-shadow: ", ";\n        -webkit-transition: left ", " ease;\n        transition: left ", " ease;\n        border: ", ";\n    }\n"])), toggle_2.slot.width, toggle_2.slot.height, slot, toggle_2.slot.height, toggle_2.slot.unselected.normal.bgColor.light, toggle_2.slot.borderRadius, toggle_2.transition, toggle_2.transition, toggle_2.slot.unselected.normal.border.light, handle, toggle_2.handle.width, toggle_2.handle.height, toggle_2.handle.borderRadius, toggle_2.handle.unselected.normal.shadow.light, toggle_2.transition, toggle_2.transition, toggle_2.handle.unselected.normal.border.light);
	var switchInput = css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n    display: none;\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n    ", " {\n        left: 30px;\n    }\n"], ["\n    display: none;\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n    ", " {\n        left: 30px;\n    }\n"])), slotSelectedNormal, toggle_2.slot.selected.normal.bgColor.light, toggle_2.slot.selected.normal.border.light, handleSelectedNormal);
	var buttonStyle = css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    position: relative;\n    display: inline-block;\n    border: none;\n    background-color: transparent;\n\n    :focus {\n        outline: none;\n    }\n\n    ", " {\n        background-color: ", ";\n        cursor: not-allowed;\n        pointer-events: none;\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n        cursor: not-allowed;\n        pointer-events: none;\n    }\n\n    ", " {\n        cursor: not-allowed;\n        pointer-events: none;\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n\n    ", " {\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n"], ["\n    position: relative;\n    display: inline-block;\n    border: none;\n    background-color: transparent;\n\n    :focus {\n        outline: none;\n    }\n\n    ", " {\n        background-color: ", ";\n        cursor: not-allowed;\n        pointer-events: none;\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n        cursor: not-allowed;\n        pointer-events: none;\n    }\n\n    ", " {\n        cursor: not-allowed;\n        pointer-events: none;\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n\n    ", " {\n        border: ", ";\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", ";\n    }\n"])), slotUnselectedDisabled, toggle_2.slot.unselected.disabled.bgColor.light, toggle_2.slot.unselected.disabled.border.light, slotSelectedDisabled, toggle_2.slot.selected.disabled.bgColor.light, toggle_2.slot.selected.disabled.border.light, handleUnselectedDisabled, toggle_2.handle.unselected.disabled.border.light, slotUnselectedHover, toggle_2.slot.unselected.hover.bgColor.light, toggle_2.slot.unselected.hover.border.light, slotSelectedHover, toggle_2.slot.selected.hover.bgColor.light, toggle_2.slot.selected.hover.border.light, slotUnselectedPressed, toggle_2.slot.unselected.pressed.bgColor.light, toggle_2.slot.unselected.pressed.border.light, slotSelectedPressed, toggle_2.slot.selected.pressed.bgColor.light, toggle_2.slot.selected.pressed.border.light, handleSelectedPressed, toggle_2.handle.selected.pressed.border.light, handUnselectedHover, toggle_2.handle.unselected.hover.bgColor.light, toggle_2.handle.unselected.hover.border.light);
	var templateObject_1$4, templateObject_2$2, templateObject_3$2;

	var Platform;
	(function (Platform) {
	    Platform["OnPrem"] = "on-prem";
	    Platform["Unified"] = "unified";
	    Platform["UnifiedMobile"] = "unified-mobile";
	    Platform["PredixEssentials"] = "pe";
	    Platform["PredixEssentialsMobile"] = "pe-mobile";
	})(Platform || (Platform = {}));
	var factory = function (type) {
	    if (type === Platform.OnPrem) {
	        return function (attrs) { return (h(HelpOnPrem, { icon: attrs.icon, tooltip: attrs.tooltip, testid: attrs.testid, onClick: attrs.onClick, baseUrl: attrs.baseUrl, context: attrs.context, searchTerm: attrs.searchTerm, culture: attrs.culture })); };
	    }
	    if (type === Platform.Unified) {
	        return function (attrs) { return (h(HelpUnified, { icon: attrs.icon, tooltip: attrs.tooltip, testid: attrs.testid, onClick: attrs.onClick, searchTerm: attrs.searchTerm })); };
	    }
	    if (type === Platform.UnifiedMobile) {
	        return function (attrs) { return (h(HelpUnifiedMobile, { icon: attrs.icon, tooltip: attrs.tooltip, testid: attrs.testid, onClick: attrs.onClick, baseUrl: attrs.baseUrl, context: attrs.context, searchTerm: attrs.searchTerm, culture: attrs.culture })); };
	    }
	    if (type === Platform.PredixEssentials) {
	        return function (attrs) { return (h(HelpPE, { icon: attrs.icon, tooltip: attrs.tooltip, testid: attrs.testid, onClick: attrs.onClick, searchTerm: attrs.searchTerm })); };
	    }
	    if (type === Platform.PredixEssentialsMobile) {
	        return function (attrs) { return (h(HelpPEMobile, { icon: attrs.icon, tooltip: attrs.tooltip, testid: attrs.testid, onClick: attrs.onClick, baseUrl: attrs.baseUrl, context: attrs.context, searchTerm: attrs.searchTerm, culture: attrs.culture })); };
	    }
	    throw new Error("No help button type found for type " + type);
	};
	var HelpButton = /** @class */ (function (_super) {
	    __extends(HelpButton, _super);
	    function HelpButton(type) {
	        return _super.call(this, factory(type)) || this;
	    }
	    return HelpButton;
	}(StatelessPreactDucklet));
	function of$a(type, attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    return of$8(new HelpButton(type), attrs);
	}

	var index$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		get Platform () { return Platform; },
		of: of$a
	});

	var statusBarClassName = css(__assign(__assign({}, sensibleBoxModel()), { backgroundColor: gray1, display: 'flex', height: '24px', justifyContent: 'space-between', padding: '0 15px 0 15px', li: {
	        display: 'inline-flex'
	    } }));
	var childListClassName = css({
	    display: 'inline-flex',
	    li: {
	        alignItems: 'center',
	        display: 'inline-flex'
	    }
	});
	function of$b(leftDucklets, rightDucklets) {
	    var left = childList('status-bar__left', leftDucklets);
	    var right = childList('status-bar__right', rightDucklets);
	    return of$9([left, right], statusBarClassName, { testid: 'status-bar' });
	}
	function childList(testid, ducklets) {
	    return of$9(ducklets, childListClassName, { testid: testid });
	}

	var ducklet = /*#__PURE__*/Object.freeze({
		__proto__: null,
		of: of$b
	});

	var className$9 = css(__assign(__assign(__assign(__assign({}, geFont()), centerHorizontallyVertically()), sensibleBoxModel()), { display: 'inline-block', fontSize: '12px', height: '12px', lineHeight: '12px', padding: '0 10px 0 10px' }));
	var PipeDivider = /** @class */ (function () {
	    function PipeDivider() {
	        this.mountPoint = new MountPoint();
	    }
	    PipeDivider.prototype.mount = function (element) {
	        this.mountPoint.mount(element, 'div');
	        this.mountPoint.withFirstChild(function (firstChild) {
	            firstChild.classList.add(className$9);
	            firstChild.textContent = '|';
	        });
	        return this;
	    };
	    PipeDivider.prototype.unmount = function () {
	        return this.mountPoint.unmount();
	    };
	    PipeDivider.prototype.update = function (callback) {
	        callback();
	        this.preventUpdateBeforeMount();
	        return this;
	    };
	    PipeDivider.prototype.preventUpdateBeforeMount = function () {
	        this.mountPoint.withFirstChild(function () { return undefined; });
	    };
	    return PipeDivider;
	}());
	function of$c() {
	    return new PipeDivider();
	}

	var pipeDivider = /*#__PURE__*/Object.freeze({
		__proto__: null,
		of: of$c
	});

	var className$a = css({
	    display: 'inline-block',
	    height: '24px',
	    width: '10px'
	});
	var SpaceDivider = /** @class */ (function () {
	    function SpaceDivider() {
	        this.mountPoint = new MountPoint();
	    }
	    SpaceDivider.prototype.mount = function (element) {
	        this.mountPoint.mount(element, 'div');
	        this.mountPoint.withFirstChild(function (firstChild) {
	            firstChild.classList.add(className$a);
	        });
	        return this;
	    };
	    SpaceDivider.prototype.unmount = function () {
	        return this.mountPoint.unmount();
	    };
	    SpaceDivider.prototype.update = function (callback) {
	        callback();
	        this.preventUpdateBeforeMount();
	        return this;
	    };
	    SpaceDivider.prototype.preventUpdateBeforeMount = function () {
	        this.mountPoint.withFirstChild(function () { return undefined; });
	    };
	    return SpaceDivider;
	}());
	function of$d() {
	    return new SpaceDivider();
	}

	var spaceDivider = /*#__PURE__*/Object.freeze({
		__proto__: null,
		of: of$d
	});

	var index$2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Ducklet: ducklet,
		PipeDivider: pipeDivider,
		SpaceDivider: spaceDivider
	});

	/* eslint-disable @typescript-eslint/camelcase */
	var target = {
	    between__px: utilityMenu__icon.between__px - (utilityMenu__target.size__px - utilityMenu__icon.size__px)
	};
	var menuItem = {
	    paddingHorizontal__px: target.between__px / 2,
	    paddingVertical__px: 0
	};
	var menu = __assign(__assign({}, utilityMenu), { paddingLeft__px: 0, paddingRight__px: utilityMenu.fromEdge__px - menuItem.paddingHorizontal__px, paddingVertical__px: (tabBar.height__px - utilityMenu__target.size__px) / 2 });
	var utilityMenuClassName = css({
	    display: 'inline-block',
	    paddingBottom: px(menu.paddingVertical__px),
	    paddingLeft: px(menu.paddingLeft__px),
	    paddingRight: px(menu.paddingRight__px),
	    paddingTop: px(menu.paddingVertical__px),
	    li: {
	        display: 'inline-block',
	        paddingBottom: px(menuItem.paddingVertical__px),
	        paddingLeft: px(menuItem.paddingHorizontal__px),
	        paddingRight: px(menuItem.paddingHorizontal__px),
	        paddingTop: px(menuItem.paddingVertical__px)
	    }
	});
	function of$e(children, attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    return of$9(children, utilityMenuClassName, attrs);
	}

	var utilityMenu$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		of: of$e
	});

	var UtilityMenuDropdown = /** @class */ (function (_super) {
	    __extends(UtilityMenuDropdown, _super);
	    function UtilityMenuDropdown() {
	        return _super.call(this, function (attrs) {
	            return (h(Dropdown, { icon: attrs.icon, tooltip: attrs.tooltip, children: attrs.children, testid: attrs.testid, dropdownTestId: attrs.dropdownTestId, expanded: attrs.expanded, onClick: attrs.onClick }));
	        }) || this;
	    }
	    return UtilityMenuDropdown;
	}(StatelessPreactDucklet));
	function of$f(attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    return of$8(new UtilityMenuDropdown(), attrs);
	}

	var utilityMenuDropdown = /*#__PURE__*/Object.freeze({
		__proto__: null,
		of: of$f
	});

	exports.AppMenu = index;
	exports.HelpButton = index$1;
	exports.ImmutableDuckletList = immutableDuckletList;
	exports.StatusBar = index$2;
	exports.UtilityMenu = utilityMenu$1;
	exports.UtilityMenuDropdown = utilityMenuDropdown;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
