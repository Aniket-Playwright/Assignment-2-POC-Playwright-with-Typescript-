import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "node:module";
const __WEBPACK_EXTERNAL_createRequire_require = __WEBPACK_EXTERNAL_createRequire(import.meta.url);
/******/ var __webpack_modules__ = ({

/***/ 773:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Dots = void 0;
var _react = _interopRequireDefault(__webpack_require__(96540));
var _classnames = _interopRequireDefault(__webpack_require__(46942));
var _innerSliderUtils = __webpack_require__(29445);
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = _getPrototypeOf(t); if (r) { var s = _getPrototypeOf(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return _possibleConstructorReturn(this, e); }; }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var getDotCount = function getDotCount(spec) {
  var dots;
  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }
  return dots;
};
var Dots = exports.Dots = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);
  var _super = _createSuper(Dots);
  function Dots() {
    _classCallCheck(this, Dots);
    return _super.apply(this, arguments);
  }
  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        onMouseEnter = _this$props.onMouseEnter,
        onMouseOver = _this$props.onMouseOver,
        onMouseLeave = _this$props.onMouseLeave,
        infinite = _this$props.infinite,
        slidesToScroll = _this$props.slidesToScroll,
        slidesToShow = _this$props.slidesToShow,
        slideCount = _this$props.slideCount,
        currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount: slideCount,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        infinite: infinite
      });
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = [];
      for (var i = 0; i < dotCount; i++) {
        var _rightBound = (i + 1) * slidesToScroll - 1;
        var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);
        var _leftBound = rightBound - (slidesToScroll - 1);
        var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
        var className = (0, _classnames["default"])({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: slidesToScroll,
          currentSlide: currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots = dots.concat(/*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          className: className
        }, /*#__PURE__*/_react["default"].cloneElement(this.props.customPaging(i), {
          onClick: onClick
        })));
      }
      return /*#__PURE__*/_react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);
  return Dots;
}(_react["default"].PureComponent);

/***/ }),

/***/ 2203:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("stream");

/***/ }),

/***/ 2694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6925);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 4589:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports["default"] = void 0;
var _slider = _interopRequireDefault(__webpack_require__(38120));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = _slider["default"];

/***/ }),

/***/ 5556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) // removed by dead control flow
{ var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2694)();
}


/***/ }),

/***/ 6513:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/** @license React v17.0.2
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(45228),n=__webpack_require__(96540),aa=__webpack_require__(2203);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var q=60106,r=60107,u=60108,z=60114,B=60109,ba=60110,ca=60112,D=60113,da=60120,ea=60115,fa=60116,ha=60121,ia=60117,ja=60119,ka=60129,la=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;q=E("react.portal");r=E("react.fragment");u=E("react.strict_mode");z=E("react.profiler");B=E("react.provider");ba=E("react.context");ca=E("react.forward_ref");D=E("react.suspense");da=E("react.suspense_list");ea=E("react.memo");fa=E("react.lazy");ha=E("react.block");ia=E("react.fundamental");ja=E("react.scope");ka=E("react.debug_trace_mode");la=E("react.legacy_hidden")}
function F(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case r:return"Fragment";case q:return"Portal";case z:return"Profiler";case u:return"StrictMode";case D:return"Suspense";case da:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ba:return(a.displayName||"Context")+".Consumer";case B:return(a._context.displayName||"Context")+".Provider";case ca:var b=a.render;b=b.displayName||b.name||"";return a.displayName||
(""!==b?"ForwardRef("+b+")":"ForwardRef");case ea:return F(a.type);case ha:return F(a._render);case fa:b=a._payload;a=a._init;try{return F(a(b))}catch(c){}}return null}var ma=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na={};function I(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}function oa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return I(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=na;return b}
for(var J=new Uint16Array(16),K=0;15>K;K++)J[K]=K+1;J[15]=0;var pa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qa=Object.prototype.hasOwnProperty,ra={},sa={};
function ta(a){if(qa.call(sa,a))return!0;if(qa.call(ra,a))return!1;if(pa.test(a))return sa[a]=!0;ra[a]=!0;return!1}function ua(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function va(a,b,c,d){if(null===b||"undefined"===typeof b||ua(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function M(a,b,c,d,f,h,t){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=h;this.removeEmptyString=t}var N={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){N[a]=new M(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];N[b]=new M(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){N[a]=new M(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){N[a]=new M(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){N[a]=new M(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){N[a]=new M(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){N[a]=new M(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){N[a]=new M(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){N[a]=new M(a,5,!1,a.toLowerCase(),null,!1,!1)});var wa=/[\-:]([a-z])/g;function xa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(wa,
xa);N[b]=new M(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(wa,xa);N[b]=new M(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(wa,xa);N[b]=new M(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){N[a]=new M(a,1,!1,a.toLowerCase(),null,!1,!1)});
N.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){N[a]=new M(a,1,!1,a.toLowerCase(),null,!0,!0)});var ya=/["'&<>]/;
function O(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ya.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function za(a,b){var c=N.hasOwnProperty(a)?N[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||va(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(O(b)+'"')}return ta(a)?a+'="'+(O(b)+'"'):""}function Aa(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Ba="function"===typeof Object.is?Object.is:Aa,P=null,Q=null,R=null,S=!1,T=!1,U=null,V=0;function W(){if(null===P)throw Error(p(321));return P}function Ca(){if(0<V)throw Error(p(312));return{memoizedState:null,queue:null,next:null}}function Da(){null===R?null===Q?(S=!1,Q=R=Ca()):(S=!0,R=Q):null===R.next?(S=!1,R=R.next=Ca()):(S=!0,R=R.next);return R}function Ea(a,b,c,d){for(;T;)T=!1,V+=1,R=null,c=a(b,d);Fa();return c}function Fa(){P=null;T=!1;Q=null;V=0;R=U=null}
function Ga(a,b){return"function"===typeof b?b(a):b}function Ha(a,b,c){P=W();R=Da();if(S){var d=R.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=R.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);R.memoizedState=d;return[d,b]}return[R.memoizedState,b]}a=a===Ga?"function"===typeof b?b():b:void 0!==c?c(b):b;R.memoizedState=a;a=R.queue={last:null,dispatch:null};a=a.dispatch=Ia.bind(null,P,a);return[R.memoizedState,a]}
function Ja(a,b){P=W();R=Da();b=void 0===b?null:b;if(null!==R){var c=R.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!Ba(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();R.memoizedState=[a,b];return a}function Ia(a,b,c){if(!(25>V))throw Error(p(301));if(a===P)if(T=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ka(){}
var X=null,La={readContext:function(a){var b=X.threadID;I(a,b);return a[b]},useContext:function(a){W();var b=X.threadID;I(a,b);return a[b]},useMemo:Ja,useReducer:Ha,useRef:function(a){P=W();R=Da();var b=R.memoizedState;return null===b?(a={current:a},R.memoizedState=a):b},useState:function(a){return Ha(Ga,a)},useLayoutEffect:function(){},useCallback:function(a,b){return Ja(function(){return a},b)},useImperativeHandle:Ka,useEffect:Ka,useDebugValue:Ka,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return[function(a){a()},!1]},useOpaqueIdentifier:function(){return(X.identifierPrefix||"")+"R:"+(X.uniqueID++).toString(36)},useMutableSource:function(a,b){W();return b(a._source)}},Ma={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Na(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var Oa={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Pa=l({menuitem:!0},Oa),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qa=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Qa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Ra=/([A-Z])/g,Sa=/^ms-/,Z=n.Children.toArray,Ta=ma.ReactCurrentDispatcher,Ua={listing:!0,pre:!0,textarea:!0},Va=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Wa={},Xa={};function Ya(a){if(void 0===a||null===a)return a;var b="";n.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Za=Object.prototype.hasOwnProperty,$a={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function ab(a,b){if(void 0===a)throw Error(p(152,F(b)||"Component"));}
function bb(a,b,c){function d(d,h){var e=h.prototype&&h.prototype.isReactComponent,f=oa(h,b,c,e),t=[],g=!1,m={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===t)return null},enqueueReplaceState:function(a,b){g=!0;t=[b]},enqueueSetState:function(a,b){if(null===t)return null;t.push(b)}};if(e){if(e=new h(d.props,f,m),"function"===typeof h.getDerivedStateFromProps){var k=h.getDerivedStateFromProps.call(null,d.props,e.state);null!=k&&(e.state=l({},e.state,k))}}else if(P={},e=h(d.props,
f,m),e=Ea(h,d.props,e,f),null==e||null==e.render){a=e;ab(a,h);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),t.length){m=t;var v=
g;t=null;g=!1;if(v&&1===m.length)e.state=m[0];else{k=v?m[0]:e.state;var H=!0;for(v=v?1:0;v<m.length;v++){var x=m[v];x="function"===typeof x?x.call(e,k,d.props,f):x;null!=x&&(H?(H=!1,k=l({},k,x)):l(k,x))}e.state=k}}else t=null;a=e.render();ab(a,h);if("function"===typeof e.getChildContext&&(d=h.childContextTypes,"object"===typeof d)){var y=e.getChildContext();for(var A in y)if(!(A in d))throw Error(p(108,F(h)||"Unknown",A));}y&&(b=l({},b,y))}for(;n.isValidElement(a);){var f=a,h=f.type;if("function"!==
typeof h)break;d(f,h)}return{child:a,context:b}}
var cb=function(){function a(a,b,f){n.isValidElement(a)?a.type!==r?a=[a]:(a=a.props.children,a=n.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ma.html,children:a,childIndex:0,context:na,footer:""};var c=J[0];if(0===c){var d=J;c=d.length;var g=2*c;if(!(65536>=g))throw Error(p(304));var e=new Uint16Array(g);e.set(d);J=e;J[0]=c+1;for(d=c;d<g-1;d++)J[d]=d+1;J[g-1]=0}else J[0]=J[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;
this.makeStaticMarkup=b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[];this.uniqueID=0;this.identifierPrefix=f&&f.identifierPrefix||""}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;J[a]=J[0];J[0]=a}};b.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,h=this.threadID;I(c,h);var t=c[h];this.contextStack[b]=c;this.contextValueStack[b]=t;c[h]=a.props.value};b.popProvider=
function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this;var c=Ta.current;Ta.current=La;try{for(var h=[""],t=!1;h[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var g=this.threadID;
J[g]=J[0];J[0]=g;break}var e=this.stack[this.stack.length-1];if(t||e.childIndex>=e.children.length){var L=e.footer;""!==L&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===B)this.popProvider(e.type);else if(e.type===D){this.suspenseDepth--;var G=h.pop();if(t){t=!1;var C=e.fallbackFrame;if(!C)throw Error(p(303));this.stack.push(C);h[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else h[this.suspenseDepth]+=
G}h[this.suspenseDepth]+=L}else{var m=e.children[e.childIndex++],k="";try{k+=this.render(m,e.context,e.domNamespace)}catch(v){if(null!=v&&"function"===typeof v.then)throw Error(p(294));throw v;}finally{}h.length<=this.suspenseDepth&&h.push("");h[this.suspenseDepth]+=k}}return h[0]}finally{Ta.current=c,X=b,Fa()}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return O(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+O(f);
this.previousWasTextNode=!0;return O(f)}b=bb(a,b,this.threadID);a=b.child;b=b.context;if(null===a||!1===a)return"";if(!n.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===q)throw Error(p(257));throw Error(p(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case la:case ka:case u:case z:case da:case r:return a=Z(a.props.children),this.stack.push({type:null,
domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case D:throw Error(p(294));case ja:throw Error(p(343));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case ca:P={};var d=c.render(a.props,a.ref);d=Ea(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case ea:return a=[n.createElement(c.type,l({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case ba:c=a.type;d=a.props;var g=this.threadID;I(c,g);c=Z(d.children(c[g]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case ia:throw Error(p(338));case fa:return c=a.type,d=c._init,c=d(c._payload),a=[n.createElement(c,l({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,
context:b,footer:""}),""}throw Error(p(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===Ma.html&&Na(c);if(!Wa.hasOwnProperty(c)){if(!Va.test(c))throw Error(p(65,c));Wa[c]=!0}var d=a.props;if("input"===c)d=l({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var g=d.value;if(null==g){g=d.defaultValue;var e=d.children;if(null!=e){if(null!=
g)throw Error(p(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(p(93));e=e[0]}g=""+e}null==g&&(g="")}d=l({},d,{value:void 0,children:""+g})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=l({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var L=Ya(d.children);if(null!=e){var G=null!=d.value?d.value+"":L;g=!1;if(Array.isArray(e))for(var C=0;C<e.length;C++){if(""+e[C]===G){g=!0;break}}else g=""+e===G;d=l({selected:void 0,children:void 0},
d,{selected:g,children:L})}}if(g=d){if(Pa[c]&&(null!=g.children||null!=g.dangerouslySetInnerHTML))throw Error(p(137,c));if(null!=g.dangerouslySetInnerHTML){if(null!=g.children)throw Error(p(60));if(!("object"===typeof g.dangerouslySetInnerHTML&&"__html"in g.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=g.style&&"object"!==typeof g.style)throw Error(p(62));}g=d;e=this.makeStaticMarkup;L=1===this.stack.length;G="<"+a.type;b:if(-1===c.indexOf("-"))C="string"===typeof g.is;else switch(c){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":C=
!1;break b;default:C=!0}for(w in g)if(Za.call(g,w)){var m=g[w];if(null!=m){if("style"===w){var k=void 0,v="",H="";for(k in m)if(m.hasOwnProperty(k)){var x=0===k.indexOf("--"),y=m[k];if(null!=y){if(x)var A=k;else if(A=k,Xa.hasOwnProperty(A))A=Xa[A];else{var eb=A.replace(Ra,"-$1").toLowerCase().replace(Sa,"-ms-");A=Xa[A]=eb}v+=H+A+":";H=k;x=null==y||"boolean"===typeof y||""===y?"":x||"number"!==typeof y||0===y||Y.hasOwnProperty(H)&&Y[H]?(""+y).trim():y+"px";v+=x;H=";"}}m=v||null}k=null;C?$a.hasOwnProperty(w)||
(k=w,k=ta(k)&&null!=m?k+'="'+(O(m)+'"'):""):k=za(w,m);k&&(G+=" "+k)}}e||L&&(G+=' data-reactroot=""');var w=G;g="";Oa.hasOwnProperty(c)?w+="/>":(w+=">",g="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=O(e);break a}e=null}null!=e?(d=[],Ua.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(w+="\n"),w+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===f?Na(a):"http://www.w3.org/2000/svg"===
f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:g});this.previousWasTextNode=!1;return w};return a}();function db(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}
var fb=function(a){function b(b,c,h){var d=a.call(this,{})||this;d.partialRenderer=new cb(b,c,h);return d}db(b,a);var c=b.prototype;c._destroy=function(a,b){this.partialRenderer.destroy();b(a)};c._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(f){this.destroy(f)}};return b}(aa.Readable);__webpack_unused_export__=function(a,b){return new fb(a,!1,b)};__webpack_unused_export__=function(a,b){a=new cb(a,!0,b);try{return a.read(Infinity)}finally{a.destroy()}};
__webpack_unused_export__=function(a,b){return new fb(a,!0,b)};exports.renderToString=function(a,b){a=new cb(a,!1,b);try{return a.read(Infinity)}finally{a.destroy()}};__webpack_unused_export__="17.0.2";


/***/ }),

/***/ 6925:
/***/ ((module) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 7463:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 11441:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var camel2hyphen = __webpack_require__(28028);

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ 15287:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(45228),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ 20181:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ 22551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(96540),m=__webpack_require__(45228),r=__webpack_require__(69982);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),

/***/ 25942:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Track = void 0;
var _react = _interopRequireDefault(__webpack_require__(96540));
var _classnames = _interopRequireDefault(__webpack_require__(46942));
var _innerSliderUtils = __webpack_require__(29445);
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = _getPrototypeOf(t); if (r) { var s = _getPrototypeOf(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return _possibleConstructorReturn(this, e); }; }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;
  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }
  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }
  var focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  var slickCurrent = index === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL
  };
};
var getSlideStyle = function getSlideStyle(spec) {
  var style = {};
  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }
  if (spec.fade) {
    style.position = "relative";
    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};
var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = _react["default"].Children.count(spec.children);
  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
  _react["default"].Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };

    // in case of lazyLoad, whether or not we want to fetch the slide
    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = /*#__PURE__*/_react["default"].createElement("div", null);
    }
    var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    }));
    // push a cloned element of the desired slide
    slides.push(/*#__PURE__*/_react["default"].cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread(_objectSpread({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);
        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    }));

    // if slide needs to be precloned or postcloned
    if (spec.infinite && childrenCount > 1 && spec.fade === false && !spec.unslick) {
      var preCloneNo = childrenCount - index;
      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec)) {
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push(/*#__PURE__*/_react["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
      if (index < (0, _innerSliderUtils.getPostClones)(spec)) {
        key = childrenCount + index;
        if (key < endIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        postCloneSlides.push(/*#__PURE__*/_react["default"].cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });
  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};
var Track = exports.Track = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);
  var _super = _createSuper(Track);
  function Track() {
    var _this;
    _classCallCheck(this, Track);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "node", null);
    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this.node = ref;
    });
    return _this;
  }
  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
        onMouseEnter = _this$props.onMouseEnter,
        onMouseOver = _this$props.onMouseOver,
        onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);
  return Track;
}(_react["default"].PureComponent);

/***/ }),

/***/ 28028:
/***/ ((module) => {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ 29445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkSpecKeys = exports.checkNavigable = exports.changeSlide = exports.canUseDOM = exports.canGoNext = void 0;
exports.clamp = clamp;
exports.extractObject = void 0;
exports.filterSettings = filterSettings;
exports.validSettings = exports.swipeStart = exports.swipeMove = exports.swipeEnd = exports.slidesOnRight = exports.slidesOnLeft = exports.slideHandler = exports.siblingDirection = exports.safePreventDefault = exports.lazyStartIndex = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.keyHandler = exports.initializedState = exports.getWidth = exports.getTrackLeft = exports.getTrackCSS = exports.getTrackAnimateCSS = exports.getTotalSlides = exports.getSwipeDirection = exports.getSlideCount = exports.getRequiredLazySlides = exports.getPreClones = exports.getPostClones = exports.getOnDemandLazySlides = exports.getNavigableIndexes = exports.getHeight = void 0;
var _react = _interopRequireDefault(__webpack_require__(96540));
var _defaultProps = _interopRequireDefault(__webpack_require__(41327));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = exports.safePreventDefault = function safePreventDefault(event) {
  var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];
  if (!passiveEvents.includes(event._reactName)) {
    event.preventDefault();
  }
};
var getOnDemandLazySlides = exports.getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }
  return onDemandSlides;
};

// return list of slides that need to be present
var getRequiredLazySlides = exports.getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }
  return requiredSlides;
};

// startIndex that needs to be present
var lazyStartIndex = exports.lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = exports.lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = exports.lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = exports.lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
};

// get width of an element
var getWidth = exports.getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};
var getHeight = exports.getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};
var getSwipeDirection = exports.getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);
  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }
  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }
  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }
  return "vertical";
};

// whether or not we can go next
var canGoNext = exports.canGoNext = function canGoNext(spec) {
  var canGo = true;
  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }
  return canGo;
};

// given an object and a list of keys, return new object with given keys
var extractObject = exports.extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
};

// get initialized state
var initializedState = exports.initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react["default"].Children.count(spec.children);
  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;
  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }
    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }
  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;
  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }
  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }));
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };
  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }
  return state;
};
var slideHandler = exports.slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
    animating = spec.animating,
    fade = spec.fade,
    infinite = spec.infinite,
    index = spec.index,
    slideCount = spec.slideCount,
    lazyLoad = spec.lazyLoad,
    currentSlide = spec.currentSlide,
    centerMode = spec.centerMode,
    slidesToScroll = spec.slidesToScroll,
    slidesToShow = spec.slidesToShow,
    useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
    finalSlide,
    animationLeft,
    finalLeft;
  var state = {},
    nextState = {};
  var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};
    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }
    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }
    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;
    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }
    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }
    animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: finalSlide
    }));
    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }
    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
        currentSlide: animationSlide
      })));
    }
    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide: targetSlide
      };
    }
  }
  return {
    state: state,
    nextState: nextState
  };
};
var changeSlide = exports.changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
    slidesToShow = spec.slidesToShow,
    slideCount = spec.slideCount,
    currentSlide = spec.currentSlide,
    previousTargetSlide = spec.targetSlide,
    lazyLoad = spec.lazyLoad,
    infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;
    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;
    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;
    if (infinite) {
      var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
        targetSlide: targetSlide
      }));
      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }
  return targetSlide;
};
var keyHandler = exports.keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};
var swipeStart = exports.swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && safePreventDefault(e);
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};
var swipeMove = exports.swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
    animating = spec.animating,
    vertical = spec.vertical,
    swipeToSlide = spec.swipeToSlide,
    verticalSwiping = spec.verticalSwiping,
    rtl = spec.rtl,
    currentSlide = spec.currentSlide,
    edgeFriction = spec.edgeFriction,
    edgeDragged = spec.edgeDragged,
    onEdge = spec.onEdge,
    swiped = spec.swiped,
    swiping = spec.swiping,
    slideCount = spec.slideCount,
    slidesToScroll = spec.slidesToScroll,
    infinite = spec.infinite,
    touchObject = spec.touchObject,
    swipeEvent = spec.swipeEvent,
    listHeight = spec.listHeight,
    listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return safePreventDefault(e);
  if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
  var swipeLeft,
    state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }
  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;
  if (!infinite) {
    if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;
      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }
  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }
  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }
  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }
  state = _objectSpread(_objectSpread({}, state), {}, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: swipeLeft
    }))
  });
  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }
  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    safePreventDefault(e);
  }
  return state;
};
var swipeEnd = exports.swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
    swipe = spec.swipe,
    touchObject = spec.touchObject,
    listWidth = spec.listWidth,
    touchThreshold = spec.touchThreshold,
    verticalSwiping = spec.verticalSwiping,
    listHeight = spec.listHeight,
    swipeToSlide = spec.swipeToSlide,
    scrolling = spec.scrolling,
    onSwipe = spec.onSwipe,
    targetSlide = spec.targetSlide,
    currentSlide = spec.currentSlide,
    infinite = spec.infinite;
  if (!dragging) {
    if (swipe) safePreventDefault(e);
    return {};
  }
  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
  // reset the state of touch related state variables.
  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };
  if (scrolling) {
    return state;
  }
  if (!touchObject.swipeLength) {
    return state;
  }
  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e);
    if (onSwipe) {
      onSwipe(swipeDirection);
    }
    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;
    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;
      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;
      default:
        slideCount = activeSlide;
    }
    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: currentLeft
    }));
  }
  return state;
};
var getNavigableIndexes = exports.getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];
  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }
  return indexes;
};
var checkNavigable = exports.checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;
  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }
      prevNavigable = navigables[n];
    }
  }
  return index;
};
var getSlideCount = exports.getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }
      return true;
    });
    if (!swipedSlide) {
      return 0;
    }
    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};
var checkSpecKeys = exports.checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};
var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    var trackChildren = spec.unslick ? spec.slideCount : spec.slideCount + 2 * spec.slidesToShow;
    trackHeight = trackChildren * spec.slideHeight;
  }
  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };
  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread(_objectSpread({}, style), {}, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }
  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight;

  // Fallback for IE8
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }
  return style;
};
var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec);
  // useCSS is true by default so it can be undefined
  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }
  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
    trackRef = spec.trackRef,
    infinite = spec.infinite,
    centerMode = spec.centerMode,
    slideCount = spec.slideCount,
    slidesToShow = spec.slidesToShow,
    slidesToScroll = spec.slidesToScroll,
    slideWidth = spec.slideWidth,
    listWidth = spec.listWidth,
    variableWidth = spec.variableWidth,
    slideHeight = spec.slideHeight,
    fade = spec.fade,
    vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;
  if (fade || spec.slideCount === 1) {
    return 0;
  }
  var slidesToOffset = 0;
  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    }
    // shift current slide to center of the frame
    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }
    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }
  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;
  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }
  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;
      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }
      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }
  return targetLeft;
};
var getPreClones = exports.getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  if (spec.variableWidth) {
    return spec.slideCount;
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = exports.getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  if (spec.variableWidth) {
    return spec.slideCount;
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getTotalSlides = exports.getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = exports.siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }
    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }
    return "left";
  }
};
var slidesOnRight = exports.slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
    centerMode = _ref.centerMode,
    rtl = _ref.rtl,
    centerPadding = _ref.centerPadding;
  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }
  if (rtl) {
    return 0;
  }
  return slidesToShow - 1;
};
var slidesOnLeft = exports.slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
    centerMode = _ref2.centerMode,
    rtl = _ref2.rtl,
    centerPadding = _ref2.centerPadding;
  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }
  if (rtl) {
    return slidesToShow - 1;
  }
  return 0;
};
var canUseDOM = exports.canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
var validSettings = exports.validSettings = Object.keys(_defaultProps["default"]);
function filterSettings(settings) {
  return validSettings.reduce(function (acc, settingName) {
    if (settings.hasOwnProperty(settingName)) {
      acc[settingName] = settings[settingName];
    }
    return acc;
  }, {});
}

/***/ }),

/***/ 34999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InnerSlider = void 0;
var _react = _interopRequireDefault(__webpack_require__(96540));
var _initialState = _interopRequireDefault(__webpack_require__(68841));
var _lodash = _interopRequireDefault(__webpack_require__(20181));
var _classnames = _interopRequireDefault(__webpack_require__(46942));
var _innerSliderUtils = __webpack_require__(29445);
var _track = __webpack_require__(25942);
var _dots = __webpack_require__(773);
var _arrows = __webpack_require__(89223);
var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(43591));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) { o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) { if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = _getPrototypeOf(t); if (r) { var s = _getPrototypeOf(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return _possibleConstructorReturn(this, e); }; }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var InnerSlider = exports.InnerSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(InnerSlider, _React$Component);
  var _super = _createSuper(InnerSlider);
  function InnerSlider(props) {
    var _this;
    _classCallCheck(this, InnerSlider);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
      return _this.list = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));
        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.onInit && _this.props.onInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);
      _this.updateState(spec, true, function () {
        _this.adaptHeight();
        _this.props.autoplay && _this.autoPlay("update");
      });
      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }
      _this.ro = new _resizeObserverPolyfill["default"](function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation
          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });
      _this.ro.observe(_this.list);
      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });
      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }
      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }
      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });
        _this.callbackTimers = [];
      }
      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      _this.ro.disconnect();
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      _this.checkImagesLoad();
      _this.props.onReInit && _this.props.onReInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }
      _this.adaptHeight();
      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      var setTrackStyle = _this.didPropsChange(prevProps);
      setTrackStyle && _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }
        if (_this.props.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);
      _this.debouncedResize();
    });
    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node);
      // prevent warning: setting state on unmounted component (server side rendering)
      if (!isTrackMounted) return;
      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      });
      // animating state should be cleared while resizing, otherwise autoplay stops working
      _this.setState({
        animating: false
      });
      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });
    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }
      _this.setState(updatedState, callback);
    });
    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
          _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });
        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }
        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }
        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }
        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };
        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }
        return {
          trackStyle: _trackStyle
        };
      }
      var childrenCount = _react["default"].Children.count(_this.props.children);
      var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });
      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      };
    });
    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
      var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
      var imagesCount = images.length,
        loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };
        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function (e) {
            prevClickHandler(e);
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();
              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;
            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
      var slidesToLoad = [];
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }
      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
        asNavFor = _this$props.asNavFor,
        beforeChange = _this$props.beforeChange,
        onLazyLoad = _this$props.onLazyLoad,
        speed = _this$props.speed,
        afterChange = _this$props.afterChange; // capture currentslide before state is updated
      var currentSlide = _this.state.currentSlide;
      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
          index: index
        }, _this.props), _this.state), {}, {
          trackRef: _this.track,
          useCSS: _this.props.useCSS && !dontAnimate
        })),
        state = _slideHandler.state,
        nextState = _slideHandler.nextState;
      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }
      _this.setState(state, function () {
        // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
        if (asNavFor && _this.asNavForIndex !== index) {
          _this.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
            firstBatch = _objectWithoutProperties(nextState, ["animating"]);
          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));
            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;
      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
      _this.props.autoplay && _this.autoPlay("update");
      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");
        nodes[0] && nodes[0].focus();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.clickable = true;
    });
    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });
    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
      _this.changeSlide(options);
    });
    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    });
    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });
    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }
      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      if (state["swiping"]) {
        _this.clickable = false;
      }
      _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];
      _this.setState(state);
      if (triggerSlideHandler === undefined) return;
      _this.slideHandler(triggerSlideHandler);
      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "touchEnd", function (e) {
      _this.swipeEnd(e);
      _this.clickable = true;
    });
    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var nextIndex;
      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }
      _this.slideHandler(nextIndex);
    });
    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      var autoplaying = _this.state.autoplaying;
      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }
      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
      _this.setState({
        autoplaying: "playing"
      });
    });
    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }
      var autoplaying = _this.state.autoplaying;
      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });
    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });
    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots;
      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = /*#__PURE__*/_react["default"].createElement(_dots.Dots, dotProps);
      }
      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;
      if (_this.props.arrows) {
        prevArrow = /*#__PURE__*/_react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = /*#__PURE__*/_react["default"].createElement(_arrows.NextArrow, arrowProps);
      }
      var verticalHeightStyle = null;
      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }
      var centerPaddingStyle = null;
      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }
      var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr",
        style: _this.props.style
      };
      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className,
          style: _this.props.style
        };
      }
      return /*#__PURE__*/_react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), /*#__PURE__*/_react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });
    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
      currentSlide: _this.props.initialSlide,
      targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    var ssrState = _this.ssrInit();
    _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
    return _this;
  }
  _createClass(InnerSlider, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;
      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];
        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }
        if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) {
          continue;
        }
        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }
      return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
    }
  }]);
  return InnerSlider;
}(_react["default"].Component);

/***/ }),

/***/ 38120:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(96540));
var _innerSlider = __webpack_require__(34999);
var _json2mq = _interopRequireDefault(__webpack_require__(11441));
var _defaultProps = _interopRequireDefault(__webpack_require__(41327));
var _innerSliderUtils = __webpack_require__(29445);
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = _getPrototypeOf(t); if (r) { var s = _getPrototypeOf(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return _possibleConstructorReturn(this, e); }; }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Slider = exports["default"] = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);
  var _super = _createSuper(Slider);
  function Slider(props) {
    var _this;
    _classCallCheck(this, Slider);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });
    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });
    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });
    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });
    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });
    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }
  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      var mql = window.matchMedia(query);
      var listener = function listener(_ref) {
        var matches = _ref.matches;
        if (matches) {
          handler();
        }
      };
      mql.addListener(listener);
      this._responsiveMediaHandlers.push({
        mql: mql,
        query: query,
        listener: listener
      });
    } // handles responsive breakpoints
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        });
        // sort them in increasing order of their numerical value
        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;
          if (index === 0) {
            bQuery = (0, _json2mq["default"])({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq["default"])({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          }
          // when not using server side rendering
          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        });

        // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string
        var query = (0, _json2mq["default"])({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        obj.mql.removeListener(obj.listener);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var settings;
      var newProps;
      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
      } else {
        settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
      }

      // force scrolling by one if centerMode is on
      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && "production" !== "production") // removed by dead control flow
{}
        settings.slidesToScroll = 1;
      }
      // force showing one slide and scrolling by one if the fade mode is on
      if (settings.fade) {
        if (settings.slidesToShow > 1 && "production" !== "production") // removed by dead control flow
{}
        if (settings.slidesToScroll > 1 && "production" !== "production") // removed by dead control flow
{}
        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      }

      // makes sure that children is an array, even when there is only 1 child
      var children = _react["default"].Children.toArray(this.props.children);

      // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)
      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }
        return !!child;
      });

      // rows and slidesPerRow logic is handled here
      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }
      var newChildren = [];
      var currentWidth = null;
      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];
        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];
          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }
            if (k >= children.length) break;
            row.push(/*#__PURE__*/_react["default"].cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }
          newSlide.push(/*#__PURE__*/_react["default"].createElement("div", {
            key: 10 * i + j
          }, row));
        }
        if (settings.variableWidth) {
          newChildren.push(/*#__PURE__*/_react["default"].createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push(/*#__PURE__*/_react["default"].createElement("div", {
            key: i
          }, newSlide));
        }
      }
      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, children);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }
      return /*#__PURE__*/_react["default"].createElement(_innerSlider.InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, (0, _innerSliderUtils.filterSettings)(settings)), newChildren);
    }
  }]);
  return Slider;
}(_react["default"].Component);

/***/ }),

/***/ 40961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(22551);
} else // removed by dead control flow
{}


/***/ }),

/***/ 41327:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(96540));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return /*#__PURE__*/_react["default"].createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return /*#__PURE__*/_react["default"].createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  verticalSwiping: false,
  waitForAnimate: true,
  asNavFor: null,
  unslick: false
};
var _default = exports["default"] = defaultProps;

/***/ }),

/***/ 43591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 45228:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
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

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
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


/***/ }),

/***/ 46942:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }),

/***/ 68841:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var _default = exports["default"] = initialState;

/***/ }),

/***/ 69982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(7463);
} else // removed by dead control flow
{}


/***/ }),

/***/ 89223:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PrevArrow = exports.NextArrow = void 0;
var _react = _interopRequireDefault(__webpack_require__(96540));
var _classnames = _interopRequireDefault(__webpack_require__(46942));
var _innerSliderUtils = __webpack_require__(29445);
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = _getPrototypeOf(t); if (r) { var s = _getPrototypeOf(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return _possibleConstructorReturn(this, e); }; }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var PrevArrow = exports.PrevArrow = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);
  var _super = _createSuper(PrevArrow);
  function PrevArrow() {
    _classCallCheck(this, PrevArrow);
    return _super.apply(this, arguments);
  }
  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }
      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });
      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }
      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;
      if (this.props.prevArrow) {
        prevArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
      } else {
        prevArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }
      return prevArrow;
    }
  }]);
  return PrevArrow;
}(_react["default"].PureComponent);
var NextArrow = exports.NextArrow = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);
  var _super2 = _createSuper(NextArrow);
  function NextArrow() {
    _classCallCheck(this, NextArrow);
    return _super2.apply(this, arguments);
  }
  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }
      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });
      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }
      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;
      if (this.props.nextArrow) {
        nextArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
      } else {
        nextArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }
      return nextArrow;
    }
  }]);
  return NextArrow;
}(_react["default"].PureComponent);

/***/ }),

/***/ 94362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(6513);
} else // removed by dead control flow
{}


/***/ }),

/***/ 96540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(15287);
} else // removed by dead control flow
{}


/***/ }),

/***/ 97422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



module.exports = __webpack_require__(94362);


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./node_modules/immer/dist/immer.mjs
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  false ? 0 : [];
function die(error, ...args) {
  if (false) // removed by dead control flow
{}
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null || proto === Object.prototype)
    return true;
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  if (typeof Ctor !== "function")
    return false;
  let ctorString = cachedCtorStrings.get(Ctor);
  if (ctorString === void 0) {
    ctorString = Function.toString.call(Ctor);
    cachedCtorStrings.set(Ctor, ctorString);
  }
  return ctorString === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter, strict = true) {
  if (getArchtype(obj) === 0 /* Object */) {
    const keys = strict ? Reflect.ownKeys(obj) : Object.keys(obj);
    keys.forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    Object.defineProperties(obj, {
      set: dontMutateMethodOverride,
      add: dontMutateMethodOverride,
      clear: dontMutateMethodOverride,
      delete: dontMutateMethodOverride
    });
  }
  Object.freeze(obj);
  if (deep)
    Object.values(obj).forEach((value) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
var dontMutateMethodOverride = {
  value: dontMutateFrozenCollections
};
function isFrozen(obj) {
  if (obj === null || typeof obj !== "object")
    return true;
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const useStrictIteration = rootScope.immer_.shouldUseStrictIteration();
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path),
      useStrictIteration
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(
        rootScope,
        state,
        result,
        key,
        childValue,
        path,
        isSet2
      ),
      useStrictIteration
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (childValue == null) {
    return;
  }
  if (typeof childValue !== "object" && !targetIsSet) {
    return;
  }
  const childIsFrozen = isFrozen(childValue);
  if (childIsFrozen && !targetIsSet) {
    return;
  }
  if (false)
    // removed by dead control flow
{}
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !childIsFrozen) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    if (parentState && parentState.base_ && parentState.base_[prop] === childValue && childIsFrozen) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop)))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (false)
    // removed by dead control flow
{}
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (false)
    // removed by dead control flow
{}
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.useStrictIteration_ = true;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    if (typeof config?.useStrictIteration === "boolean")
      this.setUseStrictIteration(config.useStrictIteration);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(value) {
    this.useStrictIteration_ = value;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  let strict = true;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    strict = state.scope_.immer_.shouldUseStrictIteration();
  } else {
    copy = shallowCopy(value, true);
  }
  each(
    copy,
    (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    },
    strict
  );
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (false) // removed by dead control flow
{}
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = /* @__PURE__ */ (/* unused pure expression or super */ null && (immer.produceWithPatches.bind(
  immer
)));
var setAutoFreeze = /* @__PURE__ */ (/* unused pure expression or super */ null && (immer.setAutoFreeze.bind(immer)));
var setUseStrictShallowCopy = /* @__PURE__ */ (/* unused pure expression or super */ null && (immer.setUseStrictShallowCopy.bind(
  immer
)));
var setUseStrictIteration = /* @__PURE__ */ (/* unused pure expression or super */ null && (immer.setUseStrictIteration.bind(
  immer
)));
var applyPatches = /* @__PURE__ */ (/* unused pure expression or super */ null && (immer.applyPatches.bind(immer)));
var createDraft = /* @__PURE__ */ (/* unused pure expression or super */ null && (immer.createDraft.bind(immer)));
var finishDraft = /* @__PURE__ */ (/* unused pure expression or super */ null && (immer.finishDraft.bind(immer)));
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

//# sourceMappingURL=immer.mjs.map
;// ./node_modules/@evershop/evershop/dist/components/common/context/app.js


const AppStateContext = react.createContext({});
const AppContextDispatch = react.createContext({});
function app_AppProvider({ value, children }) {
    const [data, setData] = react.useState(value);
    const [fetching, setFetching] = react.useState(false);
    const fetchPageData = async (url) => {
        setFetching(true);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const dataResponse = await response.json();
            // Update the entire context using immer
            setData(produce(data, (draft) => {
                Object.assign(draft, dataResponse.eContext);
                return draft;
            }));
        }
        catch (error) {
        }
        finally {
            setFetching(false);
        }
    };
    react.useEffect(() => {
        window.onpopstate = async () => {
            // Get the current url
            const url = new URL(window.location.href, window.location.origin);
            url.searchParams.append('ajax', 'true');
            await fetchPageData(url.toString());
        };
    }, []);
    const contextDispatchValue = (0,react.useMemo)(() => ({ setData, fetchPageData }), [setData, fetchPageData]);
    const contextValue = (0,react.useMemo)(() => ({ ...data, fetching }), [data, fetching]);
    return (react.createElement(AppContextDispatch.Provider, { value: contextDispatchValue },
        react.createElement(AppStateContext.Provider, { value: contextValue }, children)));
}
const useAppState = () => react.useContext(AppStateContext);
const useAppDispatch = () => react.useContext(AppContextDispatch);
//# sourceMappingURL=app.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/Area.js


function Area_Area(props) {
    const context = useAppState();
    const { id, coreComponents, wrapperProps, noOuter, wrapper, className, components } = props;
    const areaComponents = (() => {
        const areaCoreComponents = coreComponents || [];
        const widgets = context.widgets || [];
        const wildCardWidgets = (components === null || components === void 0 ? void 0 : components['*']) || {};
        const assignedWidgets = [];
        widgets.forEach((widget) => {
            const w = wildCardWidgets[widget.type];
            if (widget.areaId.includes(id) && w !== undefined) {
                assignedWidgets.push({
                    id: widget.id,
                    sortOrder: widget.sortOrder,
                    props: widget.props,
                    component: w.component
                });
            }
        });
        const cs = (components === null || components === void 0 ? void 0 : components[id]) === undefined
            ? areaCoreComponents.concat(assignedWidgets)
            : areaCoreComponents
                .concat(Object.values(components[id]))
                .concat(assignedWidgets);
        return cs.sort((obj1, obj2) => (obj1.sortOrder || 0) - (obj2.sortOrder || 0));
    })();
    const { propsMap } = context;
    let WrapperComponent = react.Fragment;
    if (noOuter !== true) {
        if (wrapper !== undefined) {
            WrapperComponent = wrapper;
        }
        else {
            WrapperComponent = 'div';
        }
    }
    let areaWrapperProps = {};
    if (noOuter === true) {
        areaWrapperProps = {};
    }
    else if (typeof wrapperProps === 'object' && wrapperProps !== null) {
        areaWrapperProps = { className: className || '', ...wrapperProps };
    }
    else {
        areaWrapperProps = { className: className || '' };
    }
    return (react.createElement(WrapperComponent, { ...areaWrapperProps }, areaComponents.map((w, index) => {
        const C = w.component.default;
        const { id } = w;
        const propsData = context.graphqlResponse;
        const propKeys = id !== undefined ? propsMap[id] || [] : [];
        const componentProps = propKeys.reduce((acc, map) => {
            const { origin, alias } = map;
            acc[origin] = propsData[alias];
            return acc;
        }, {});
        if (w.props) {
            Object.assign(componentProps, w.props);
        }
        // Check if C is a React component
        if (react.isValidElement(C)) {
            return react.createElement(react.Fragment, { key: index }, C);
        }
        if (typeof C === 'string') {
            return react.createElement(C, { key: index, ...componentProps });
        }
        return typeof C === 'function' ? (react.createElement(C, { key: index, areaProps: props, ...componentProps })) : null;
    })));
}
Area_Area.defaultProps = {
    className: undefined,
    coreComponents: [],
    noOuter: false,
    wrapper: 'div',
    wrapperProps: {}
};

/* harmony default export */ const common_Area = (Area_Area);
//# sourceMappingURL=Area.js.map
;// ./node_modules/graphql/language/kinds.mjs
/**
 * The set of allowed kind values for AST nodes.
 */
var kinds_Kind;

(function (Kind) {
  Kind['NAME'] = 'Name';
  Kind['DOCUMENT'] = 'Document';
  Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
  Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
  Kind['SELECTION_SET'] = 'SelectionSet';
  Kind['FIELD'] = 'Field';
  Kind['ARGUMENT'] = 'Argument';
  Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
  Kind['INLINE_FRAGMENT'] = 'InlineFragment';
  Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
  Kind['VARIABLE'] = 'Variable';
  Kind['INT'] = 'IntValue';
  Kind['FLOAT'] = 'FloatValue';
  Kind['STRING'] = 'StringValue';
  Kind['BOOLEAN'] = 'BooleanValue';
  Kind['NULL'] = 'NullValue';
  Kind['ENUM'] = 'EnumValue';
  Kind['LIST'] = 'ListValue';
  Kind['OBJECT'] = 'ObjectValue';
  Kind['OBJECT_FIELD'] = 'ObjectField';
  Kind['DIRECTIVE'] = 'Directive';
  Kind['NAMED_TYPE'] = 'NamedType';
  Kind['LIST_TYPE'] = 'ListType';
  Kind['NON_NULL_TYPE'] = 'NonNullType';
  Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
  Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
  Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
  Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
  Kind['FIELD_DEFINITION'] = 'FieldDefinition';
  Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
  Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
  Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
  Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
  Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
  Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
  Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
  Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
  Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
  Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
  Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
  Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
  Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
  Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
  Kind['TYPE_COORDINATE'] = 'TypeCoordinate';
  Kind['MEMBER_COORDINATE'] = 'MemberCoordinate';
  Kind['ARGUMENT_COORDINATE'] = 'ArgumentCoordinate';
  Kind['DIRECTIVE_COORDINATE'] = 'DirectiveCoordinate';
  Kind['DIRECTIVE_ARGUMENT_COORDINATE'] = 'DirectiveArgumentCoordinate';
})(kinds_Kind || (kinds_Kind = {}));


/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */

;// ./node_modules/graphql/jsutils/devAssert.mjs
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}

;// ./node_modules/graphql/jsutils/inspect.mjs
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (typeof value) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? `[function ${value.name}]` : '[function]';

    case 'object':
      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return 'null';
  }

  if (previouslySeenValues.includes(value)) {
    return '[Circular]';
  }

  const seenValues = [...previouslySeenValues, value];

  if (isJSONable(value)) {
    const jsonValue = value.toJSON(); // check for infinite recursion

    if (jsonValue !== value) {
      return typeof jsonValue === 'string'
        ? jsonValue
        : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function isJSONable(value) {
  return typeof value.toJSON === 'function';
}

function formatObject(object, seenValues) {
  const entries = Object.entries(object);

  if (entries.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  const properties = entries.map(
    ([key, value]) => key + ': ' + formatValue(value, seenValues),
  );
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];

  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }

  return '[' + items.join(', ') + ']';
}

function getObjectTag(object) {
  const tag = Object.prototype.toString
    .call(object)
    .replace(/^\[object /, '')
    .replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    const name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

;// ./node_modules/graphql/language/ast.mjs
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
class Location {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  get [Symbol.toStringTag]() {
    return 'Location';
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
    };
  }
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

class Token {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    this.value = value;
    this.prev = null;
    this.next = null;
  }

  get [Symbol.toStringTag]() {
    return 'Token';
  }

  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}
/**
 * The list of all possible AST node types.
 */

/**
 * @internal
 */
const QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: [
    'description',
    'name',
    'variableDefinitions',
    'directives',
    'selectionSet',
  ],
  VariableDefinition: [
    'description',
    'variable',
    'type',
    'defaultValue',
    'directives',
  ],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: [
    'description',
    'name', // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    'variableDefinitions',
    'typeCondition',
    'directives',
    'selectionSet',
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: [
    'description',
    'name',
    'interfaces',
    'directives',
    'fields',
  ],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: [
    'description',
    'name',
    'type',
    'defaultValue',
    'directives',
  ],
  InterfaceTypeDefinition: [
    'description',
    'name',
    'interfaces',
    'directives',
    'fields',
  ],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields'],
  TypeCoordinate: ['name'],
  MemberCoordinate: ['name', 'memberName'],
  ArgumentCoordinate: ['name', 'fieldName', 'argumentName'],
  DirectiveCoordinate: ['name'],
  DirectiveArgumentCoordinate: ['name', 'argumentName'],
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */

function isNode(maybeNode) {
  const maybeKind =
    maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
/** Name */

var OperationTypeNode;

(function (OperationTypeNode) {
  OperationTypeNode['QUERY'] = 'query';
  OperationTypeNode['MUTATION'] = 'mutation';
  OperationTypeNode['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (OperationTypeNode = {}));



;// ./node_modules/graphql/language/visitor.mjs




/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

const BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */

function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = new Map();

  for (const kind of Object.values(kinds_Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  /* eslint-disable no-undef-init */

  let stack = undefined;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = root;
  let key = undefined;
  let parent = undefined;
  const path = [];
  const ancestors = [];
  /* eslint-enable no-undef-init */

  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;

          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;

            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = { ...node };

          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];

      if (node === null || node === undefined) {
        continue;
      }

      path.push(key);
    }

    let result;

    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;

      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving
        ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null ||
          _enterLeaveMap$get === void 0
          ? void 0
          : _enterLeaveMap$get.leave
        : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null ||
          _enterLeaveMap$get2 === void 0
        ? void 0
        : _enterLeaveMap$get2.enter;
      result =
        visitFn === null || visitFn === void 0
          ? void 0
          : visitFn.call(visitor, node, key, parent, path, ancestors);

      if (result === BREAK) {
        break;
      }

      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== undefined) {
        edits.push([key, result]);

        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;

      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack,
      };
      inArray = Array.isArray(node);
      keys = inArray
        ? node
        : (_node$kind = visitorKeys[node.kind]) !== null &&
          _node$kind !== void 0
        ? _node$kind
        : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    // New root
    return edits[edits.length - 1][1];
  }

  return root;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  const skipping = new Array(visitors.length).fill(null);
  const mergedVisitor = Object.create(null);

  for (const kind of Object.values(Kind)) {
    let hasVisitor = false;
    const enterList = new Array(visitors.length).fill(undefined);
    const leaveList = new Array(visitors.length).fill(undefined);

    for (let i = 0; i < visitors.length; ++i) {
      const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
      hasVisitor || (hasVisitor = enter != null || leave != null);
      enterList[i] = enter;
      leaveList[i] = leave;
    }

    if (!hasVisitor) {
      continue;
    }

    const mergedEnterLeave = {
      enter(...args) {
        const node = args[0];

        for (let i = 0; i < visitors.length; i++) {
          if (skipping[i] === null) {
            var _enterList$i;

            const result =
              (_enterList$i = enterList[i]) === null || _enterList$i === void 0
                ? void 0
                : _enterList$i.apply(visitors[i], args);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      },

      leave(...args) {
        const node = args[0];

        for (let i = 0; i < visitors.length; i++) {
          if (skipping[i] === null) {
            var _leaveList$i;

            const result =
              (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0
                ? void 0
                : _leaveList$i.apply(visitors[i], args);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          } else if (skipping[i] === node) {
            skipping[i] = null;
          }
        }
      },
    };
    mergedVisitor[kind] = mergedEnterLeave;
  }

  return mergedVisitor;
}
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */

function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];

  if (typeof kindVisitor === 'object') {
    // { Kind: { enter() {}, leave() {} } }
    return kindVisitor;
  } else if (typeof kindVisitor === 'function') {
    // { Kind() {} }
    return {
      enter: kindVisitor,
      leave: undefined,
    };
  } // { enter() {}, leave() {} }

  return {
    enter: visitor.enter,
    leave: visitor.leave,
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */

/* c8 ignore next 8 */

function getVisitFn(visitor, kind, isLeaving) {
  const { enter, leave } = getEnterLeaveForKind(visitor, kind);
  return isLeaving ? leave : enter;
}

;// ./node_modules/graphql/jsutils/isObjectLike.mjs
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return typeof value == 'object' && value !== null;
}

;// ./node_modules/graphql/jsutils/invariant.mjs
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(
      message != null ? message : 'Unexpected invariant triggered.',
    );
  }
}

;// ./node_modules/graphql/language/location.mjs

const LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;

  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === 'number' || invariant(false);

    if (match.index >= position) {
      break;
    }

    lastLineStart = match.index + match[0].length;
    line += 1;
  }

  return {
    line,
    column: position + 1 - lastLineStart,
  };
}

;// ./node_modules/graphql/language/printLocation.mjs


/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start),
  );
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = ''.padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];

    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return (
      locationStr +
      printPrefixedLines([
        [`${lineNum} |`, subLines[0]],
        ...subLines.slice(1, subLineIndex + 1).map((subLine) => ['|', subLine]),
        ['|', '^'.padStart(subLineColumnNum)],
        ['|', subLines[subLineIndex + 1]],
      ])
    );
  }

  return (
    locationStr +
    printPrefixedLines([
      // Lines specified like this: ["prefix", "string"],
      [`${lineNum - 1} |`, lines[lineIndex - 1]],
      [`${lineNum} |`, locationLine],
      ['|', '^'.padStart(columnNum)],
      [`${lineNum + 1} |`, lines[lineIndex + 1]],
    ])
  );
}

function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== undefined);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines
    .map(([prefix, line]) => prefix.padStart(padLen) + (line ? ' ' + line : ''))
    .join('\n');
}

;// ./node_modules/graphql/error/GraphQLError.mjs




function toNormalizedOptions(args) {
  const firstArg = args[0];

  if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5],
    };
  }

  return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */

  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;

    const { nodes, source, positions, path, originalError, extensions } =
      toNormalizedOptions(rawArgs);
    super(message);
    this.name = 'GraphQLError';
    this.path = path !== null && path !== void 0 ? path : undefined;
    this.originalError =
      originalError !== null && originalError !== void 0
        ? originalError
        : undefined; // Compute list of blame nodes.

    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined,
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0
        ? void 0
        : _this$nodes.map((node) => node.loc).filter((loc) => loc != null),
    ); // Compute locations in the source for the given nodes/positions.

    this.source =
      source !== null && source !== void 0
        ? source
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : (_nodeLocations$ = nodeLocations[0]) === null ||
          _nodeLocations$ === void 0
        ? void 0
        : _nodeLocations$.source;
    this.positions =
      positions !== null && positions !== void 0
        ? positions
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => loc.start);
    this.locations =
      positions && source
        ? positions.map((pos) => getLocation(source, pos))
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions,
    )
      ? originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions
      : undefined;
    this.extensions =
      (_ref =
        extensions !== null && extensions !== void 0
          ? extensions
          : originalExtensions) !== null && _ref !== void 0
        ? _ref
        : Object.create(null); // Only properties prescribed by the spec should be enumerable.
    // Keep the rest as non-enumerable.

    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true,
      },
      name: {
        enumerable: false,
      },
      nodes: {
        enumerable: false,
      },
      source: {
        enumerable: false,
      },
      positions: {
        enumerable: false,
      },
      originalError: {
        enumerable: false,
      },
    }); // Include (non-enumerable) stack trace.

    /* c8 ignore start */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317

    if (
      originalError !== null &&
      originalError !== void 0 &&
      originalError.stack
    ) {
      Object.defineProperty(this, 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true,
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true,
      });
    }
    /* c8 ignore stop */
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLError';
  }

  toString() {
    let output = this.message;

    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += '\n\n' + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += '\n\n' + printSourceLocation(this.source, location);
      }
    }

    return output;
  }

  toJSON() {
    const formattedError = {
      message: this.message,
    };

    if (this.locations != null) {
      formattedError.locations = this.locations;
    }

    if (this.path != null) {
      formattedError.path = this.path;
    }

    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }

    return formattedError;
  }
}

function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */
function printError(error) {
  return error.toString();
}
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */

function formatError(error) {
  return error.toJSON();
}

;// ./node_modules/graphql/language/characterClasses.mjs
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */
function isWhiteSpace(code) {
  return code === 0x0009 || code === 0x0020;
}
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */

function isDigit(code) {
  return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */

function isLetter(code) {
  return (
    (code >= 0x0061 && code <= 0x007a) || // A-Z
    (code >= 0x0041 && code <= 0x005a) // a-z
  );
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */

function isNameStart(code) {
  return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */

function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 0x005f;
}

;// ./node_modules/graphql/language/blockString.mjs

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */

function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;

  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;

  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;

    const line = lines[i];
    const indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    firstNonEmptyLine =
      (_firstNonEmptyLine = firstNonEmptyLine) !== null &&
      _firstNonEmptyLine !== void 0
        ? _firstNonEmptyLine
        : i;
    lastNonEmptyLine = i;

    if (i !== 0 && indent < commonIndent) {
      commonIndent = indent;
    }
  }

  return lines // Remove common indentation from all lines but first.
    .map((line, i) => (i === 0 ? line : line.slice(commonIndent))) // Remove leading and trailing blank lines.
    .slice(
      (_firstNonEmptyLine2 = firstNonEmptyLine) !== null &&
        _firstNonEmptyLine2 !== void 0
        ? _firstNonEmptyLine2
        : 0,
      lastNonEmptyLine + 1,
    );
}

function leadingWhitespace(str) {
  let i = 0;

  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }

  return i;
}
/**
 * @internal
 */

function isPrintableAsBlockString(value) {
  if (value === '') {
    return true; // empty string is printable
  }

  let isEmptyLine = true;
  let hasIndent = false;
  let hasCommonIndent = true;
  let seenNonEmptyLine = false;

  for (let i = 0; i < value.length; ++i) {
    switch (value.codePointAt(i)) {
      case 0x0000:
      case 0x0001:
      case 0x0002:
      case 0x0003:
      case 0x0004:
      case 0x0005:
      case 0x0006:
      case 0x0007:
      case 0x0008:
      case 0x000b:
      case 0x000c:
      case 0x000e:
      case 0x000f:
        return false;
      // Has non-printable characters

      case 0x000d:
        //  \r
        return false;
      // Has \r or \r\n which will be replaced as \n

      case 10:
        //  \n
        if (isEmptyLine && !seenNonEmptyLine) {
          return false; // Has leading new line
        }

        seenNonEmptyLine = true;
        isEmptyLine = true;
        hasIndent = false;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        hasIndent || (hasIndent = isEmptyLine);
        break;

      default:
        hasCommonIndent && (hasCommonIndent = hasIndent);
        isEmptyLine = false;
    }
  }

  if (isEmptyLine) {
    return false; // Has trailing empty lines
  }

  if (hasCommonIndent && seenNonEmptyLine) {
    return false; // Has internal indent
  }

  return true;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.

  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line

  const forceLeadingNewLine =
    lines.length > 1 &&
    lines
      .slice(1)
      .every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0))); // Trailing triple quotes just looks confusing but doesn't force trailing new line

  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line

  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith('\\');
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines =
    !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
    (!isSingleLine ||
      value.length > 70 ||
      forceTrailingNewline ||
      forceLeadingNewLine ||
      hasTrailingTripleQuotes);
  let result = ''; // Format a multi-line block quote to account for leading space.

  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));

  if ((printAsMultipleLines && !skipLeadingNewLine) || forceLeadingNewLine) {
    result += '\n';
  }

  result += escapedValue;

  if (printAsMultipleLines || forceTrailingNewline) {
    result += '\n';
  }

  return '"""' + result + '"""';
}

;// ./node_modules/graphql/language/printString.mjs
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
} // eslint-disable-next-line no-control-regex

const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore

const escapeSequences = [
  '\\u0000',
  '\\u0001',
  '\\u0002',
  '\\u0003',
  '\\u0004',
  '\\u0005',
  '\\u0006',
  '\\u0007',
  '\\b',
  '\\t',
  '\\n',
  '\\u000B',
  '\\f',
  '\\r',
  '\\u000E',
  '\\u000F',
  '\\u0010',
  '\\u0011',
  '\\u0012',
  '\\u0013',
  '\\u0014',
  '\\u0015',
  '\\u0016',
  '\\u0017',
  '\\u0018',
  '\\u0019',
  '\\u001A',
  '\\u001B',
  '\\u001C',
  '\\u001D',
  '\\u001E',
  '\\u001F',
  '',
  '',
  '\\"',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 2F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 3F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 4F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '\\\\',
  '',
  '',
  '', // 5F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 6F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '\\u007F',
  '\\u0080',
  '\\u0081',
  '\\u0082',
  '\\u0083',
  '\\u0084',
  '\\u0085',
  '\\u0086',
  '\\u0087',
  '\\u0088',
  '\\u0089',
  '\\u008A',
  '\\u008B',
  '\\u008C',
  '\\u008D',
  '\\u008E',
  '\\u008F',
  '\\u0090',
  '\\u0091',
  '\\u0092',
  '\\u0093',
  '\\u0094',
  '\\u0095',
  '\\u0096',
  '\\u0097',
  '\\u0098',
  '\\u0099',
  '\\u009A',
  '\\u009B',
  '\\u009C',
  '\\u009D',
  '\\u009E',
  '\\u009F',
];

;// ./node_modules/graphql/language/printer.mjs



/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value,
  },
  Variable: {
    leave: (node) => '$' + node.name,
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, '\n\n'),
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = hasMultilineItems(node.variableDefinitions)
        ? wrap('(\n', join(node.variableDefinitions, '\n'), '\n)')
        : wrap('(', join(node.variableDefinitions, ', '), ')');
      const prefix =
        wrap('', node.description, '\n') +
        join(
          [
            node.operation,
            join([node.name, varDefs]),
            join(node.directives, ' '),
          ],
          ' ',
        ); // Anonymous queries with no directives or variable definitions can use
      // the query short form.

      return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
    },
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives, description }) =>
      wrap('', description, '\n') +
      variable +
      ': ' +
      type +
      wrap(' = ', defaultValue) +
      wrap(' ', join(directives, ' ')),
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections),
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap('', alias, ': ') + name;
      let argsLine = prefix + wrap('(', join(args, ', '), ')');

      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
      }

      return join([argsLine, join(directives, ' '), selectionSet], ' ');
    },
  },
  Argument: {
    leave: ({ name, value }) => name + ': ' + value,
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) =>
      '...' + name + wrap(' ', join(directives, ' ')),
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) =>
      join(
        [
          '...',
          wrap('on ', typeCondition),
          join(directives, ' '),
          selectionSet,
        ],
        ' ',
      ),
  },
  FragmentDefinition: {
    leave: ({
      name,
      typeCondition,
      variableDefinitions,
      directives,
      selectionSet,
      description,
    }) =>
      wrap('', description, '\n') + // Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` +
      `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` +
      selectionSet,
  },
  // Value
  IntValue: {
    leave: ({ value }) => value,
  },
  FloatValue: {
    leave: ({ value }) => value,
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) =>
      isBlockString ? printBlockString(value) : printString(value),
  },
  BooleanValue: {
    leave: ({ value }) => (value ? 'true' : 'false'),
  },
  NullValue: {
    leave: () => 'null',
  },
  EnumValue: {
    leave: ({ value }) => value,
  },
  ListValue: {
    leave: ({ values }) => '[' + join(values, ', ') + ']',
  },
  ObjectValue: {
    leave: ({ fields }) => '{' + join(fields, ', ') + '}',
  },
  ObjectField: {
    leave: ({ name, value }) => name + ': ' + value,
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) =>
      '@' + name + wrap('(', join(args, ', '), ')'),
  },
  // Type
  NamedType: {
    leave: ({ name }) => name,
  },
  ListType: {
    leave: ({ type }) => '[' + type + ']',
  },
  NonNullType: {
    leave: ({ type }) => type + '!',
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) =>
      wrap('', description, '\n') +
      join(['schema', join(directives, ' '), block(operationTypes)], ' '),
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ': ' + type,
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) =>
      wrap('', description, '\n') +
      join(['scalar', name, join(directives, ' ')], ' '),
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) =>
      wrap('', description, '\n') +
      join(
        [
          'type',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) =>
      wrap('', description, '\n') +
      name +
      (hasMultilineItems(args)
        ? wrap('(\n', indent(join(args, '\n')), '\n)')
        : wrap('(', join(args, ', '), ')')) +
      ': ' +
      type +
      wrap(' ', join(directives, ' ')),
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) =>
      wrap('', description, '\n') +
      join(
        [name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')],
        ' ',
      ),
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) =>
      wrap('', description, '\n') +
      join(
        [
          'interface',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) =>
      wrap('', description, '\n') +
      join(
        ['union', name, join(directives, ' '), wrap('= ', join(types, ' | '))],
        ' ',
      ),
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) =>
      wrap('', description, '\n') +
      join(['enum', name, join(directives, ' '), block(values)], ' '),
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) =>
      wrap('', description, '\n') + join([name, join(directives, ' ')], ' '),
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) =>
      wrap('', description, '\n') +
      join(['input', name, join(directives, ' '), block(fields)], ' '),
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) =>
      wrap('', description, '\n') +
      'directive @' +
      name +
      (hasMultilineItems(args)
        ? wrap('(\n', indent(join(args, '\n')), '\n)')
        : wrap('(', join(args, ', '), ')')) +
      (repeatable ? ' repeatable' : '') +
      ' on ' +
      join(locations, ' | '),
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) =>
      join(
        ['extend schema', join(directives, ' '), block(operationTypes)],
        ' ',
      ),
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) =>
      join(['extend scalar', name, join(directives, ' ')], ' '),
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) =>
      join(
        [
          'extend type',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) =>
      join(
        [
          'extend interface',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) =>
      join(
        [
          'extend union',
          name,
          join(directives, ' '),
          wrap('= ', join(types, ' | ')),
        ],
        ' ',
      ),
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) =>
      join(['extend enum', name, join(directives, ' '), block(values)], ' '),
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) =>
      join(['extend input', name, join(directives, ' '), block(fields)], ' '),
  },
  // Schema Coordinates
  TypeCoordinate: {
    leave: ({ name }) => name,
  },
  MemberCoordinate: {
    leave: ({ name, memberName }) => join([name, wrap('.', memberName)]),
  },
  ArgumentCoordinate: {
    leave: ({ name, fieldName, argumentName }) =>
      join([name, wrap('.', fieldName), wrap('(', argumentName, ':)')]),
  },
  DirectiveCoordinate: {
    leave: ({ name }) => join(['@', name]),
  },
  DirectiveArgumentCoordinate: {
    leave: ({ name, argumentName }) =>
      join(['@', name, wrap('(', argumentName, ':)')]),
  },
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */

function join(maybeArray, separator = '') {
  var _maybeArray$filter$jo;

  return (_maybeArray$filter$jo =
    maybeArray === null || maybeArray === void 0
      ? void 0
      : maybeArray.filter((x) => x).join(separator)) !== null &&
    _maybeArray$filter$jo !== void 0
    ? _maybeArray$filter$jo
    : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */

function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */

function wrap(start, maybeString, end = '') {
  return maybeString != null && maybeString !== ''
    ? start + maybeString + end
    : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function hasMultilineItems(maybeArray) {
  var _maybeArray$some;

  // FIXME: https://github.com/graphql/graphql-js/issues/2203

  /* c8 ignore next */
  return (_maybeArray$some =
    maybeArray === null || maybeArray === void 0
      ? void 0
      : maybeArray.some((str) => str.includes('\n'))) !== null &&
    _maybeArray$some !== void 0
    ? _maybeArray$some
    : false;
}

;// ./node_modules/graphql/error/syntaxError.mjs

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position],
  });
}

;// ./node_modules/graphql/language/directiveLocation.mjs
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation;

(function (DirectiveLocation) {
  DirectiveLocation['QUERY'] = 'QUERY';
  DirectiveLocation['MUTATION'] = 'MUTATION';
  DirectiveLocation['SUBSCRIPTION'] = 'SUBSCRIPTION';
  DirectiveLocation['FIELD'] = 'FIELD';
  DirectiveLocation['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
  DirectiveLocation['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
  DirectiveLocation['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
  DirectiveLocation['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
  DirectiveLocation['SCHEMA'] = 'SCHEMA';
  DirectiveLocation['SCALAR'] = 'SCALAR';
  DirectiveLocation['OBJECT'] = 'OBJECT';
  DirectiveLocation['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
  DirectiveLocation['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
  DirectiveLocation['INTERFACE'] = 'INTERFACE';
  DirectiveLocation['UNION'] = 'UNION';
  DirectiveLocation['ENUM'] = 'ENUM';
  DirectiveLocation['ENUM_VALUE'] = 'ENUM_VALUE';
  DirectiveLocation['INPUT_OBJECT'] = 'INPUT_OBJECT';
  DirectiveLocation['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
})(DirectiveLocation || (DirectiveLocation = {}));


/**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */

;// ./node_modules/graphql/language/tokenKind.mjs
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var tokenKind_TokenKind;

(function (TokenKind) {
  TokenKind['SOF'] = '<SOF>';
  TokenKind['EOF'] = '<EOF>';
  TokenKind['BANG'] = '!';
  TokenKind['DOLLAR'] = '$';
  TokenKind['AMP'] = '&';
  TokenKind['PAREN_L'] = '(';
  TokenKind['PAREN_R'] = ')';
  TokenKind['DOT'] = '.';
  TokenKind['SPREAD'] = '...';
  TokenKind['COLON'] = ':';
  TokenKind['EQUALS'] = '=';
  TokenKind['AT'] = '@';
  TokenKind['BRACKET_L'] = '[';
  TokenKind['BRACKET_R'] = ']';
  TokenKind['BRACE_L'] = '{';
  TokenKind['PIPE'] = '|';
  TokenKind['BRACE_R'] = '}';
  TokenKind['NAME'] = 'Name';
  TokenKind['INT'] = 'Int';
  TokenKind['FLOAT'] = 'Float';
  TokenKind['STRING'] = 'String';
  TokenKind['BLOCK_STRING'] = 'BlockString';
  TokenKind['COMMENT'] = 'Comment';
})(tokenKind_TokenKind || (tokenKind_TokenKind = {}));


/**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */

;// ./node_modules/graphql/language/lexer.mjs





/**
 * A Lexer interface which provides common properties and methods required for
 * lexing GraphQL source.
 *
 * @internal
 */

/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
class Lexer {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(tokenKind_TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }

  get [Symbol.toStringTag]() {
    return 'Lexer';
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */

  advance() {
    this.lastToken = this.token;
    const token = (this.token = this.lookahead());
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */

  lookahead() {
    let token = this.token;

    if (token.kind !== tokenKind_TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          // Read the next token and form a link in the token linked-list.
          const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.

          token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.

          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === tokenKind_TokenKind.COMMENT);
    }

    return token;
  }
}
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return (
    kind === tokenKind_TokenKind.BANG ||
    kind === tokenKind_TokenKind.DOLLAR ||
    kind === tokenKind_TokenKind.AMP ||
    kind === tokenKind_TokenKind.PAREN_L ||
    kind === tokenKind_TokenKind.PAREN_R ||
    kind === tokenKind_TokenKind.DOT ||
    kind === tokenKind_TokenKind.SPREAD ||
    kind === tokenKind_TokenKind.COLON ||
    kind === tokenKind_TokenKind.EQUALS ||
    kind === tokenKind_TokenKind.AT ||
    kind === tokenKind_TokenKind.BRACKET_L ||
    kind === tokenKind_TokenKind.BRACKET_R ||
    kind === tokenKind_TokenKind.BRACE_L ||
    kind === tokenKind_TokenKind.PIPE ||
    kind === tokenKind_TokenKind.BRACE_R
  );
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */

function isUnicodeScalarValue(code) {
  return (
    (code >= 0x0000 && code <= 0xd7ff) || (code >= 0xe000 && code <= 0x10ffff)
  );
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */

function isSupplementaryCodePoint(body, location) {
  return (
    isLeadingSurrogate(body.charCodeAt(location)) &&
    isTrailingSurrogate(body.charCodeAt(location + 1))
  );
}

function isLeadingSurrogate(code) {
  return code >= 0xd800 && code <= 0xdbff;
}

function isTrailingSurrogate(code) {
  return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 *
 * @internal
 */

function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);

  if (code === undefined) {
    return tokenKind_TokenKind.EOF;
  } else if (code >= 0x0020 && code <= 0x007e) {
    // Printable ASCII
    const char = String.fromCodePoint(code);
    return char === '"' ? "'\"'" : `"${char}"`;
  } // Unicode code point

  return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
}
/**
 * Create a token with line and column location information.
 *
 * @internal
 */

function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */

function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // SourceCharacter

    switch (code) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 0xfeff: // <BOM>

      case 0x0009: // \t

      case 0x0020: // <space>

      case 0x002c:
        // ,
        ++position;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"

      case 0x000a:
        // \n
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;

      case 0x000d:
        // \r
        if (body.charCodeAt(position + 1) === 0x000a) {
          position += 2;
        } else {
          ++position;
        }

        ++lexer.line;
        lexer.lineStart = position;
        continue;
      // Comment

      case 0x0023:
        // #
        return readComment(lexer, position);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }

      case 0x0021:
        // !
        return createToken(lexer, tokenKind_TokenKind.BANG, position, position + 1);

      case 0x0024:
        // $
        return createToken(lexer, tokenKind_TokenKind.DOLLAR, position, position + 1);

      case 0x0026:
        // &
        return createToken(lexer, tokenKind_TokenKind.AMP, position, position + 1);

      case 0x0028:
        // (
        return createToken(lexer, tokenKind_TokenKind.PAREN_L, position, position + 1);

      case 0x0029:
        // )
        return createToken(lexer, tokenKind_TokenKind.PAREN_R, position, position + 1);

      case 0x002e:
        // .
        if (
          body.charCodeAt(position + 1) === 0x002e &&
          body.charCodeAt(position + 2) === 0x002e
        ) {
          return createToken(lexer, tokenKind_TokenKind.SPREAD, position, position + 3);
        }

        break;

      case 0x003a:
        // :
        return createToken(lexer, tokenKind_TokenKind.COLON, position, position + 1);

      case 0x003d:
        // =
        return createToken(lexer, tokenKind_TokenKind.EQUALS, position, position + 1);

      case 0x0040:
        // @
        return createToken(lexer, tokenKind_TokenKind.AT, position, position + 1);

      case 0x005b:
        // [
        return createToken(lexer, tokenKind_TokenKind.BRACKET_L, position, position + 1);

      case 0x005d:
        // ]
        return createToken(lexer, tokenKind_TokenKind.BRACKET_R, position, position + 1);

      case 0x007b:
        // {
        return createToken(lexer, tokenKind_TokenKind.BRACE_L, position, position + 1);

      case 0x007c:
        // |
        return createToken(lexer, tokenKind_TokenKind.PIPE, position, position + 1);

      case 0x007d:
        // }
        return createToken(lexer, tokenKind_TokenKind.BRACE_R, position, position + 1);
      // StringValue

      case 0x0022:
        // "
        if (
          body.charCodeAt(position + 1) === 0x0022 &&
          body.charCodeAt(position + 2) === 0x0022
        ) {
          return readBlockString(lexer, position);
        }

        return readString(lexer, position);
    } // IntValue | FloatValue (Digit | -)

    if (isDigit(code) || code === 0x002d) {
      return readNumber(lexer, position, code);
    } // Name

    if (isNameStart(code)) {
      return readName(lexer, position);
    }

    throw syntaxError(
      lexer.source,
      position,
      code === 0x0027
        ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
        : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position)
        ? `Unexpected character: ${printCodePointAt(lexer, position)}.`
        : `Invalid character: ${printCodePointAt(lexer, position)}.`,
    );
  }

  return createToken(lexer, tokenKind_TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */

function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }

  return createToken(
    lexer,
    tokenKind_TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position),
  );
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */

function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false; // NegativeSign (-)

  if (code === 0x002d) {
    code = body.charCodeAt(++position);
  } // Zero (0)

  if (code === 0x0030) {
    code = body.charCodeAt(++position);

    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Full stop (.)

  if (code === 0x002e) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // E e

  if (code === 0x0045 || code === 0x0065) {
    isFloat = true;
    code = body.charCodeAt(++position); // + -

    if (code === 0x002b || code === 0x002d) {
      code = body.charCodeAt(++position);
    }

    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart

  if (code === 0x002e || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position,
      )}.`,
    );
  }

  return createToken(
    lexer,
    isFloat ? tokenKind_TokenKind.FLOAT : tokenKind_TokenKind.INT,
    start,
    position,
    body.slice(start, position),
  );
}
/**
 * Returns the new position in the source after reading one or more digits.
 */

function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start,
      )}.`,
    );
  }

  const body = lexer.source.body;
  let position = start + 1; // +1 to skip first firstCode

  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }

  return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */

function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = '';

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // Closing Quote (")

    if (code === 0x0022) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, tokenKind_TokenKind.STRING, start, position + 1, value);
    } // Escape Sequence (\)

    if (code === 0x005c) {
      value += body.slice(chunkStart, position);
      const escape =
        body.charCodeAt(position + 1) === 0x0075 // u
          ? body.charCodeAt(position + 2) === 0x007b // {
            ? readEscapedUnicodeVariableWidth(lexer, position)
            : readEscapedUnicodeFixedWidth(lexer, position)
          : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    } // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  }

  throw syntaxError(lexer.source, position, 'Unterminated string.');
} // The string value and lexed size of an escape sequence.

function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3; // Cannot be larger than 12 chars (\u{00000000}).

  while (size < 12) {
    const code = body.charCodeAt(position + size++); // Closing Brace (})

    if (code === 0x007d) {
      // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }

      return {
        value: String.fromCodePoint(point),
        size,
      };
    } // Append this hex digit to the code point.

    point = (point << 4) | readHexDigit(code);

    if (point < 0) {
      break;
    }
  }

  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size,
    )}".`,
  );
}

function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);

  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6,
    };
  } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
  // a valid pair is formed.

  if (isLeadingSurrogate(code)) {
    // \u
    if (
      body.charCodeAt(position + 6) === 0x005c &&
      body.charCodeAt(position + 7) === 0x0075
    ) {
      const trailingCode = read16BitHexCode(body, position + 8);

      if (isTrailingSurrogate(trailingCode)) {
        // JavaScript defines strings as a sequence of UTF-16 code units and
        // encodes Unicode code points above U+FFFF using a surrogate pair of
        // code units. Since this is a surrogate pair escape sequence, just
        // include both codes into the JavaScript string value. Had JavaScript
        // not been internally based on UTF-16, then this surrogate pair would
        // be decoded to retrieve the supplementary code point.
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12,
        };
      }
    }
  }

  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`,
  );
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */

function read16BitHexCode(body, position) {
  // readHexDigit() returns -1 on error. ORing a negative value with any other
  // value always produces a negative value.
  return (
    (readHexDigit(body.charCodeAt(position)) << 12) |
    (readHexDigit(body.charCodeAt(position + 1)) << 8) |
    (readHexDigit(body.charCodeAt(position + 2)) << 4) |
    readHexDigit(body.charCodeAt(position + 3))
  );
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */

function readHexDigit(code) {
  return code >= 0x0030 && code <= 0x0039 // 0-9
    ? code - 0x0030
    : code >= 0x0041 && code <= 0x0046 // A-F
    ? code - 0x0037
    : code >= 0x0061 && code <= 0x0066 // a-f
    ? code - 0x0057
    : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */

function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);

  switch (code) {
    case 0x0022:
      // "
      return {
        value: '\u0022',
        size: 2,
      };

    case 0x005c:
      // \
      return {
        value: '\u005c',
        size: 2,
      };

    case 0x002f:
      // /
      return {
        value: '\u002f',
        size: 2,
      };

    case 0x0062:
      // b
      return {
        value: '\u0008',
        size: 2,
      };

    case 0x0066:
      // f
      return {
        value: '\u000c',
        size: 2,
      };

    case 0x006e:
      // n
      return {
        value: '\u000a',
        size: 2,
      };

    case 0x0072:
      // r
      return {
        value: '\u000d',
        size: 2,
      };

    case 0x0074:
      // t
      return {
        value: '\u0009',
        size: 2,
      };
  }

  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2,
    )}".`,
  );
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */

function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = '';
  const blockLines = [];

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // Closing Triple-Quote (""")

    if (
      code === 0x0022 &&
      body.charCodeAt(position + 1) === 0x0022 &&
      body.charCodeAt(position + 2) === 0x0022
    ) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        tokenKind_TokenKind.BLOCK_STRING,
        start,
        position + 3, // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join('\n'),
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    } // Escaped Triple-Quote (\""")

    if (
      code === 0x005c &&
      body.charCodeAt(position + 1) === 0x0022 &&
      body.charCodeAt(position + 2) === 0x0022 &&
      body.charCodeAt(position + 3) === 0x0022
    ) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1; // skip only slash

      position += 4;
      continue;
    } // LineTerminator

    if (code === 0x000a || code === 0x000d) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);

      if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
        position += 2;
      } else {
        ++position;
      }

      currentLine = '';
      chunkStart = position;
      lineStart = position;
      continue;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  }

  throw syntaxError(lexer.source, position, 'Unterminated string.');
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 *
 * @internal
 */

function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;

  while (position < bodyLength) {
    const code = body.charCodeAt(position);

    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }

  return createToken(
    lexer,
    tokenKind_TokenKind.NAME,
    start,
    position,
    body.slice(start, position),
  );
}

;// ./node_modules/graphql/jsutils/instanceOf.mjs

/* c8 ignore next 3 */

const isProduction =
  globalThis.process && // eslint-disable-next-line no-undef
  "production" === 'production';
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
 * See: https://webpack.js.org/guides/production/
 */

const instanceOf =
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  isProduction
    ? function instanceOf(value, constructor) {
        return value instanceof constructor;
      }
    : function instanceOf(value, constructor) {
        if (value instanceof constructor) {
          return true;
        }

        if (typeof value === 'object' && value !== null) {
          var _value$constructor;

          // Prefer Symbol.toStringTag since it is immune to minification.
          const className = constructor.prototype[Symbol.toStringTag];
          const valueClassName = // We still need to support constructor's name to detect conflicts with older versions of this library.
            Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
              ? value[Symbol.toStringTag]
              : (_value$constructor = value.constructor) === null ||
                _value$constructor === void 0
              ? void 0
              : _value$constructor.name;

          if (className === valueClassName) {
            const stringifiedValue = inspect(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
          }
        }

        return false;
      };

;// ./node_modules/graphql/language/source.mjs




/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
class source_Source {
  constructor(
    body,
    name = 'GraphQL request',
    locationOffset = {
      line: 1,
      column: 1,
    },
  ) {
    typeof body === 'string' ||
      devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 ||
      devAssert(
        false,
        'line in locationOffset is 1-indexed and must be positive.',
      );
    this.locationOffset.column > 0 ||
      devAssert(
        false,
        'column in locationOffset is 1-indexed and must be positive.',
      );
  }

  get [Symbol.toStringTag]() {
    return 'Source';
  }
}
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

function source_isSource(source) {
  return instanceOf(source, source_Source);
}

;// ./node_modules/graphql/language/parser.mjs








/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  const parser = new Parser(source, options);
  const document = parser.parseDocument();
  Object.defineProperty(document, 'tokenCount', {
    enumerable: false,
    value: parser.tokenCount,
  });
  return document;
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  const value = parser.parseValueLiteral(false);
  parser.expectToken(TokenKind.EOF);
  return value;
}
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */

function parseConstValue(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  const value = parser.parseConstValueLiteral();
  parser.expectToken(TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  const type = parser.parseTypeReference();
  parser.expectToken(TokenKind.EOF);
  return type;
}
/**
 * Given a string containing a GraphQL Schema Coordinate (ex. `Type.field`),
 * parse the AST for that schema coordinate.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * Consider providing the results to the utility function:
 * resolveASTSchemaCoordinate(). Or calling resolveSchemaCoordinate() directly
 * with an unparsed source.
 */

function parseSchemaCoordinate(source) {
  const sourceObj = isSource(source) ? source : new Source(source);
  const lexer = new SchemaCoordinateLexer(sourceObj);
  const parser = new Parser(source, {
    lexer,
  });
  parser.expectToken(TokenKind.SOF);
  const coordinate = parser.parseSchemaCoordinate();
  parser.expectToken(TokenKind.EOF);
  return coordinate;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

class Parser {
  constructor(source, options = {}) {
    const { lexer, ..._options } = options;

    if (lexer) {
      this._lexer = lexer;
    } else {
      const sourceObj = source_isSource(source) ? source : new source_Source(source);
      this._lexer = new Lexer(sourceObj);
    }

    this._options = _options;
    this._tokenCounter = 0;
  }

  get tokenCount() {
    return this._tokenCounter;
  }
  /**
   * Converts a name lex token into a name parse node.
   */

  parseName() {
    const token = this.expectToken(tokenKind_TokenKind.NAME);
    return this.node(token, {
      kind: kinds_Kind.NAME,
      value: token.value,
    });
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */

  parseDocument() {
    return this.node(this._lexer.token, {
      kind: kinds_Kind.DOCUMENT,
      definitions: this.many(
        tokenKind_TokenKind.SOF,
        this.parseDefinition,
        tokenKind_TokenKind.EOF,
      ),
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */

  parseDefinition() {
    if (this.peek(tokenKind_TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } // Many definitions begin with a description and require a lookahead.

    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription
      ? this._lexer.lookahead()
      : this._lexer.token;

    if (hasDescription && keywordToken.kind === tokenKind_TokenKind.BRACE_L) {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        'Unexpected description, descriptions are not supported on shorthand queries.',
      );
    }

    if (keywordToken.kind === tokenKind_TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }

      switch (keywordToken.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();
      }

      if (hasDescription) {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          'Unexpected description, only GraphQL definitions support descriptions.',
        );
      }

      switch (keywordToken.value) {
        case 'extend':
          return this.parseTypeSystemExtension();
      }
    }

    throw this.unexpected(keywordToken);
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */

  parseOperationDefinition() {
    const start = this._lexer.token;

    if (this.peek(tokenKind_TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: kinds_Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        description: undefined,
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    }

    const description = this.parseDescription();
    const operation = this.parseOperationType();
    let name;

    if (this.peek(tokenKind_TokenKind.NAME)) {
      name = this.parseName();
    }

    return this.node(start, {
      kind: kinds_Kind.OPERATION_DEFINITION,
      operation,
      description,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */

  parseOperationType() {
    const operationToken = this.expectToken(tokenKind_TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return OperationTypeNode.QUERY;

      case 'mutation':
        return OperationTypeNode.MUTATION;

      case 'subscription':
        return OperationTypeNode.SUBSCRIPTION;
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */

  parseVariableDefinitions() {
    return this.optionalMany(
      tokenKind_TokenKind.PAREN_L,
      this.parseVariableDefinition,
      tokenKind_TokenKind.PAREN_R,
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */

  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: kinds_Kind.VARIABLE_DEFINITION,
      description: this.parseDescription(),
      variable: this.parseVariable(),
      type: (this.expectToken(tokenKind_TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(tokenKind_TokenKind.EQUALS)
        ? this.parseConstValueLiteral()
        : undefined,
      directives: this.parseConstDirectives(),
    });
  }
  /**
   * Variable : $ Name
   */

  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(tokenKind_TokenKind.DOLLAR);
    return this.node(start, {
      kind: kinds_Kind.VARIABLE,
      name: this.parseName(),
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */

  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: kinds_Kind.SELECTION_SET,
      selections: this.many(
        tokenKind_TokenKind.BRACE_L,
        this.parseSelection,
        tokenKind_TokenKind.BRACE_R,
      ),
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */

  parseSelection() {
    return this.peek(tokenKind_TokenKind.SPREAD)
      ? this.parseFragment()
      : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */

  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;

    if (this.expectOptionalToken(tokenKind_TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return this.node(start, {
      kind: kinds_Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(tokenKind_TokenKind.BRACE_L)
        ? this.parseSelectionSet()
        : undefined,
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */

  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(tokenKind_TokenKind.PAREN_L, item, tokenKind_TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */

  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(tokenKind_TokenKind.COLON);
    return this.node(start, {
      kind: kinds_Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst),
    });
  }

  parseConstArgument() {
    return this.parseArgument(true);
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */

  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(tokenKind_TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(tokenKind_TokenKind.NAME)) {
      return this.node(start, {
        kind: kinds_Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
      });
    }

    return this.node(start, {
      kind: kinds_Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */

  parseFragmentDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: kinds_Kind.FRAGMENT_DEFINITION,
        description,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
      });
    }

    return this.node(start, {
      kind: kinds_Kind.FRAGMENT_DEFINITION,
      description,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * FragmentName : Name but not `on`
   */

  parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */

  parseValueLiteral(isConst) {
    const token = this._lexer.token;

    switch (token.kind) {
      case tokenKind_TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case tokenKind_TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case tokenKind_TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: kinds_Kind.INT,
          value: token.value,
        });

      case tokenKind_TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: kinds_Kind.FLOAT,
          value: token.value,
        });

      case tokenKind_TokenKind.STRING:
      case tokenKind_TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case tokenKind_TokenKind.NAME:
        this.advanceLexer();

        switch (token.value) {
          case 'true':
            return this.node(token, {
              kind: kinds_Kind.BOOLEAN,
              value: true,
            });

          case 'false':
            return this.node(token, {
              kind: kinds_Kind.BOOLEAN,
              value: false,
            });

          case 'null':
            return this.node(token, {
              kind: kinds_Kind.NULL,
            });

          default:
            return this.node(token, {
              kind: kinds_Kind.ENUM,
              value: token.value,
            });
        }

      case tokenKind_TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(tokenKind_TokenKind.DOLLAR);

          if (this._lexer.token.kind === tokenKind_TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`,
            );
          } else {
            throw this.unexpected(token);
          }
        }

        return this.parseVariable();

      default:
        throw this.unexpected();
    }
  }

  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }

  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: kinds_Kind.STRING,
      value: token.value,
      block: token.kind === tokenKind_TokenKind.BLOCK_STRING,
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */

  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);

    return this.node(this._lexer.token, {
      kind: kinds_Kind.LIST,
      values: this.any(tokenKind_TokenKind.BRACKET_L, item, tokenKind_TokenKind.BRACKET_R),
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */

  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);

    return this.node(this._lexer.token, {
      kind: kinds_Kind.OBJECT,
      fields: this.any(tokenKind_TokenKind.BRACE_L, item, tokenKind_TokenKind.BRACE_R),
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */

  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(tokenKind_TokenKind.COLON);
    return this.node(start, {
      kind: kinds_Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst),
    });
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */

  parseDirectives(isConst) {
    const directives = [];

    while (this.peek(tokenKind_TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }

  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */

  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(tokenKind_TokenKind.AT);
    return this.node(start, {
      kind: kinds_Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
    });
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */

  parseTypeReference() {
    const start = this._lexer.token;
    let type;

    if (this.expectOptionalToken(tokenKind_TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(tokenKind_TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: kinds_Kind.LIST_TYPE,
        type: innerType,
      });
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(tokenKind_TokenKind.BANG)) {
      return this.node(start, {
        kind: kinds_Kind.NON_NULL_TYPE,
        type,
      });
    }

    return type;
  }
  /**
   * NamedType : Name
   */

  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: kinds_Kind.NAMED_TYPE,
      name: this.parseName(),
    });
  } // Implements the parsing rules in the Type Definition section.

  peekDescription() {
    return this.peek(tokenKind_TokenKind.STRING) || this.peek(tokenKind_TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */

  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */

  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('schema');
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      tokenKind_TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      tokenKind_TokenKind.BRACE_R,
    );
    return this.node(start, {
      kind: kinds_Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes,
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */

  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(tokenKind_TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: kinds_Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type,
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */

  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('scalar');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: kinds_Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives,
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */

  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('type');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: kinds_Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */

  parseImplementsInterfaces() {
    return this.expectOptionalKeyword('implements')
      ? this.delimitedMany(tokenKind_TokenKind.AMP, this.parseNamedType)
      : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */

  parseFieldsDefinition() {
    return this.optionalMany(
      tokenKind_TokenKind.BRACE_L,
      this.parseFieldDefinition,
      tokenKind_TokenKind.BRACE_R,
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */

  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(tokenKind_TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: kinds_Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives,
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */

  parseArgumentDefs() {
    return this.optionalMany(
      tokenKind_TokenKind.PAREN_L,
      this.parseInputValueDef,
      tokenKind_TokenKind.PAREN_R,
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */

  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(tokenKind_TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;

    if (this.expectOptionalToken(tokenKind_TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }

    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: kinds_Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives,
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */

  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('interface');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: kinds_Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */

  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('union');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: kinds_Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types,
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */

  parseUnionMemberTypes() {
    return this.expectOptionalToken(tokenKind_TokenKind.EQUALS)
      ? this.delimitedMany(tokenKind_TokenKind.PIPE, this.parseNamedType)
      : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */

  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('enum');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: kinds_Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values,
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */

  parseEnumValuesDefinition() {
    return this.optionalMany(
      tokenKind_TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      tokenKind_TokenKind.BRACE_R,
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */

  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: kinds_Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives,
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */

  parseEnumValueName() {
    if (
      this._lexer.token.value === 'true' ||
      this._lexer.token.value === 'false' ||
      this._lexer.token.value === 'null'
    ) {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token,
        )} is reserved and cannot be used for an enum value.`,
      );
    }

    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */

  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('input');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: kinds_Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields,
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */

  parseInputFieldsDefinition() {
    return this.optionalMany(
      tokenKind_TokenKind.BRACE_L,
      this.parseInputValueDef,
      tokenKind_TokenKind.BRACE_R,
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */

  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === tokenKind_TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */

  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      tokenKind_TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      tokenKind_TokenKind.BRACE_R,
    );

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: kinds_Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes,
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */

  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    const name = this.parseName();
    const directives = this.parseConstDirectives();

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: kinds_Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives,
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */

  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();

    if (
      interfaces.length === 0 &&
      directives.length === 0 &&
      fields.length === 0
    ) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: kinds_Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */

  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();

    if (
      interfaces.length === 0 &&
      directives.length === 0 &&
      fields.length === 0
    ) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: kinds_Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */

  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: kinds_Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types,
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */

  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: kinds_Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values,
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */

  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: kinds_Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields,
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */

  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(tokenKind_TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: kinds_Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations,
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */

  parseDirectiveLocations() {
    return this.delimitedMany(tokenKind_TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */

  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();

    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }

    throw this.unexpected(start);
  } // Schema Coordinates

  /**
   * SchemaCoordinate :
   *   - Name
   *   - Name . Name
   *   - Name . Name ( Name : )
   *   - \@ Name
   *   - \@ Name ( Name : )
   */

  parseSchemaCoordinate() {
    const start = this._lexer.token;
    const ofDirective = this.expectOptionalToken(tokenKind_TokenKind.AT);
    const name = this.parseName();
    let memberName;

    if (!ofDirective && this.expectOptionalToken(tokenKind_TokenKind.DOT)) {
      memberName = this.parseName();
    }

    let argumentName;

    if (
      (ofDirective || memberName) &&
      this.expectOptionalToken(tokenKind_TokenKind.PAREN_L)
    ) {
      argumentName = this.parseName();
      this.expectToken(tokenKind_TokenKind.COLON);
      this.expectToken(tokenKind_TokenKind.PAREN_R);
    }

    if (ofDirective) {
      if (argumentName) {
        return this.node(start, {
          kind: kinds_Kind.DIRECTIVE_ARGUMENT_COORDINATE,
          name,
          argumentName,
        });
      }

      return this.node(start, {
        kind: kinds_Kind.DIRECTIVE_COORDINATE,
        name,
      });
    } else if (memberName) {
      if (argumentName) {
        return this.node(start, {
          kind: kinds_Kind.ARGUMENT_COORDINATE,
          name,
          fieldName: memberName,
          argumentName,
        });
      }

      return this.node(start, {
        kind: kinds_Kind.MEMBER_COORDINATE,
        name,
        memberName,
      });
    }

    return this.node(start, {
      kind: kinds_Kind.TYPE_COORDINATE,
      name,
    });
  } // Core parsing utility functions

  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */

  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source,
      );
    }

    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */

  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */

  expectToken(kind) {
    const token = this._lexer.token;

    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }

    throw syntaxError(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`,
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */

  expectOptionalToken(kind) {
    const token = this._lexer.token;

    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }

    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */

  expectKeyword(value) {
    const token = this._lexer.token;

    if (token.kind === tokenKind_TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`,
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */

  expectOptionalKeyword(value) {
    const token = this._lexer.token;

    if (token.kind === tokenKind_TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */

  unexpected(atToken) {
    const token =
      atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`,
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */

  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  }

  advanceLexer() {
    const { maxTokens } = this._options;

    const token = this._lexer.advance();

    if (token.kind !== tokenKind_TokenKind.EOF) {
      ++this._tokenCounter;

      if (maxTokens !== undefined && this._tokenCounter > maxTokens) {
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`,
        );
      }
    }
  }
}
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */

function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}

;// ./node_modules/wonka/dist/wonka.mjs
var teardownPlaceholder = () => {};

var wonka_e = teardownPlaceholder;

function start(e) {
  return {
    tag: 0,
    0: e
  };
}

function push(e) {
  return {
    tag: 1,
    0: e
  };
}

var asyncIteratorSymbol = () => "function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator";

var observableSymbol = () => "function" == typeof Symbol && Symbol.observable || "@@observable";

var identity = e => e;

function buffer(r) {
  return t => i => {
    var a = [];
    var f = wonka_e;
    var n = wonka_e;
    var s = !1;
    var l = !1;
    t((e => {
      if (l) {} else if (0 === e) {
        l = !0;
        n(1);
        if (a.length) {
          i(push(a));
        }
        i(0);
      } else if (0 === e.tag) {
        f = e[0];
        r((e => {
          if (l) {} else if (0 === e) {
            l = !0;
            f(1);
            if (a.length) {
              i(push(a));
            }
            i(0);
          } else if (0 === e.tag) {
            n = e[0];
          } else if (a.length) {
            var r = push(a);
            a = [];
            i(r);
          }
        }));
      } else {
        a.push(e[0]);
        if (!s) {
          s = !0;
          f(0);
          n(0);
        } else {
          s = !1;
        }
      }
    }));
    i(start((e => {
      if (1 === e && !l) {
        l = !0;
        f(1);
        n(1);
      } else if (!l && !s) {
        s = !0;
        f(0);
        n(0);
      }
    })));
  };
}

function concatMap(r) {
  return t => i => {
    var a = [];
    var f = wonka_e;
    var n = wonka_e;
    var s = !1;
    var l = !1;
    var u = !1;
    var o = !1;
    function applyInnerSource(e) {
      u = !0;
      e((e => {
        if (0 === e) {
          if (u) {
            u = !1;
            if (a.length) {
              applyInnerSource(r(a.shift()));
            } else if (o) {
              i(0);
            } else if (!s) {
              s = !0;
              f(0);
            }
          }
        } else if (0 === e.tag) {
          l = !1;
          (n = e[0])(0);
        } else if (u) {
          i(e);
          if (l) {
            l = !1;
          } else {
            n(0);
          }
        }
      }));
    }
    t((e => {
      if (o) {} else if (0 === e) {
        o = !0;
        if (!u && !a.length) {
          i(0);
        }
      } else if (0 === e.tag) {
        f = e[0];
      } else {
        s = !1;
        if (u) {
          a.push(e[0]);
        } else {
          applyInnerSource(r(e[0]));
        }
      }
    }));
    i(start((e => {
      if (1 === e) {
        if (!o) {
          o = !0;
          f(1);
        }
        if (u) {
          u = !1;
          n(1);
        }
      } else {
        if (!o && !s) {
          s = !0;
          f(0);
        }
        if (u && !l) {
          l = !0;
          n(0);
        }
      }
    })));
  };
}

function concatAll(e) {
  return concatMap(identity)(e);
}

function concat(e) {
  return concatAll(wonka_r(e));
}

function filter(r) {
  return t => i => {
    var a = wonka_e;
    t((e => {
      if (0 === e) {
        i(0);
      } else if (0 === e.tag) {
        a = e[0];
        i(e);
      } else if (!r(e[0])) {
        a(0);
      } else {
        i(e);
      }
    }));
  };
}

function map(e) {
  return r => t => r((r => {
    if (0 === r || 0 === r.tag) {
      t(r);
    } else {
      t(push(e(r[0])));
    }
  }));
}

function mergeMap(r) {
  return t => i => {
    var a = [];
    var f = wonka_e;
    var n = !1;
    var s = !1;
    t((t => {
      if (s) {} else if (0 === t) {
        s = !0;
        if (!a.length) {
          i(0);
        }
      } else if (0 === t.tag) {
        f = t[0];
      } else {
        n = !1;
        !function applyInnerSource(r) {
          var t = wonka_e;
          r((e => {
            if (0 === e) {
              if (a.length) {
                var r = a.indexOf(t);
                if (r > -1) {
                  (a = a.slice()).splice(r, 1);
                }
                if (!a.length) {
                  if (s) {
                    i(0);
                  } else if (!n) {
                    n = !0;
                    f(0);
                  }
                }
              }
            } else if (0 === e.tag) {
              a.push(t = e[0]);
              t(0);
            } else if (a.length) {
              i(e);
              t(0);
            }
          }));
        }(r(t[0]));
        if (!n) {
          n = !0;
          f(0);
        }
      }
    }));
    i(start((e => {
      if (1 === e) {
        if (!s) {
          s = !0;
          f(1);
        }
        for (var r = 0, t = a, i = a.length; r < i; r++) {
          t[r](1);
        }
        a.length = 0;
      } else {
        if (!s && !n) {
          n = !0;
          f(0);
        } else {
          n = !1;
        }
        for (var l = 0, u = a, o = a.length; l < o; l++) {
          u[l](0);
        }
      }
    })));
  };
}

function mergeAll(e) {
  return mergeMap(identity)(e);
}

function merge(e) {
  return mergeAll(wonka_r(e));
}

function onEnd(e) {
  return r => t => {
    var i = !1;
    r((r => {
      if (i) {} else if (0 === r) {
        i = !0;
        t(0);
        e();
      } else if (0 === r.tag) {
        var a = r[0];
        t(start((r => {
          if (1 === r) {
            i = !0;
            a(1);
            e();
          } else {
            a(r);
          }
        })));
      } else {
        t(r);
      }
    }));
  };
}

function onPush(e) {
  return r => t => {
    var i = !1;
    r((r => {
      if (i) {} else if (0 === r) {
        i = !0;
        t(0);
      } else if (0 === r.tag) {
        var a = r[0];
        t(start((e => {
          if (1 === e) {
            i = !0;
          }
          a(e);
        })));
      } else {
        e(r[0]);
        t(r);
      }
    }));
  };
}

function onStart(e) {
  return r => t => r((r => {
    if (0 === r) {
      t(0);
    } else if (0 === r.tag) {
      t(r);
      e();
    } else {
      t(r);
    }
  }));
}

function sample(r) {
  return t => i => {
    var a = wonka_e;
    var f = wonka_e;
    var n;
    var s = !1;
    var l = !1;
    t((e => {
      if (l) {} else if (0 === e) {
        l = !0;
        f(1);
        i(0);
      } else if (0 === e.tag) {
        a = e[0];
      } else {
        n = e[0];
        if (!s) {
          s = !0;
          f(0);
          a(0);
        } else {
          s = !1;
        }
      }
    }));
    r((e => {
      if (l) {} else if (0 === e) {
        l = !0;
        a(1);
        i(0);
      } else if (0 === e.tag) {
        f = e[0];
      } else if (void 0 !== n) {
        var r = push(n);
        n = void 0;
        i(r);
      }
    }));
    i(start((e => {
      if (1 === e && !l) {
        l = !0;
        a(1);
        f(1);
      } else if (!l && !s) {
        s = !0;
        a(0);
        f(0);
      }
    })));
  };
}

function scan(e, r) {
  return t => i => {
    var a = r;
    t((r => {
      if (0 === r) {
        i(0);
      } else if (0 === r.tag) {
        i(r);
      } else {
        i(push(a = e(a, r[0])));
      }
    }));
  };
}

function share(r) {
  var t = [];
  var i = wonka_e;
  var a = !1;
  return e => {
    t.push(e);
    if (1 === t.length) {
      r((e => {
        if (0 === e) {
          for (var r = 0, f = t, n = t.length; r < n; r++) {
            f[r](0);
          }
          t.length = 0;
        } else if (0 === e.tag) {
          i = e[0];
        } else {
          a = !1;
          for (var s = 0, l = t, u = t.length; s < u; s++) {
            l[s](e);
          }
        }
      }));
    }
    e(start((r => {
      if (1 === r) {
        var f = t.indexOf(e);
        if (f > -1) {
          (t = t.slice()).splice(f, 1);
        }
        if (!t.length) {
          i(1);
        }
      } else if (!a) {
        a = !0;
        i(0);
      }
    })));
  };
}

function skip(r) {
  return t => i => {
    var a = wonka_e;
    var f = r;
    t((e => {
      if (0 === e) {
        i(0);
      } else if (0 === e.tag) {
        a = e[0];
        i(e);
      } else if (f-- > 0) {
        a(0);
      } else {
        i(e);
      }
    }));
  };
}

function skipUntil(r) {
  return t => i => {
    var a = wonka_e;
    var f = wonka_e;
    var n = !0;
    var s = !1;
    var l = !1;
    t((e => {
      if (l) {} else if (0 === e) {
        l = !0;
        if (n) {
          f(1);
        }
        i(0);
      } else if (0 === e.tag) {
        a = e[0];
        r((e => {
          if (0 === e) {
            if (n) {
              l = !0;
              a(1);
            }
          } else if (0 === e.tag) {
            (f = e[0])(0);
          } else {
            n = !1;
            f(1);
          }
        }));
      } else if (!n) {
        s = !1;
        i(e);
      } else if (!s) {
        s = !0;
        a(0);
        f(0);
      } else {
        s = !1;
      }
    }));
    i(start((e => {
      if (1 === e && !l) {
        l = !0;
        a(1);
        if (n) {
          f(1);
        }
      } else if (!l && !s) {
        s = !0;
        if (n) {
          f(0);
        }
        a(0);
      }
    })));
  };
}

function skipWhile(r) {
  return t => i => {
    var a = wonka_e;
    var f = !0;
    t((e => {
      if (0 === e) {
        i(0);
      } else if (0 === e.tag) {
        a = e[0];
        i(e);
      } else if (f) {
        if (r(e[0])) {
          a(0);
        } else {
          f = !1;
          i(e);
        }
      } else {
        i(e);
      }
    }));
  };
}

function switchMap(r) {
  return t => i => {
    var a = wonka_e;
    var f = wonka_e;
    var n = !1;
    var s = !1;
    var l = !1;
    var u = !1;
    t((t => {
      if (u) {} else if (0 === t) {
        u = !0;
        if (!l) {
          i(0);
        }
      } else if (0 === t.tag) {
        a = t[0];
      } else {
        if (l) {
          f(1);
          f = wonka_e;
        }
        if (!n) {
          n = !0;
          a(0);
        } else {
          n = !1;
        }
        !function applyInnerSource(e) {
          l = !0;
          e((e => {
            if (!l) {} else if (0 === e) {
              l = !1;
              if (u) {
                i(0);
              } else if (!n) {
                n = !0;
                a(0);
              }
            } else if (0 === e.tag) {
              s = !1;
              (f = e[0])(0);
            } else {
              i(e);
              if (!s) {
                f(0);
              } else {
                s = !1;
              }
            }
          }));
        }(r(t[0]));
      }
    }));
    i(start((e => {
      if (1 === e) {
        if (!u) {
          u = !0;
          a(1);
        }
        if (l) {
          l = !1;
          f(1);
        }
      } else {
        if (!u && !n) {
          n = !0;
          a(0);
        }
        if (l && !s) {
          s = !0;
          f(0);
        }
      }
    })));
  };
}

function switchAll(e) {
  return switchMap(identity)(e);
}

function take(r) {
  return t => i => {
    var a = wonka_e;
    var f = !1;
    var n = 0;
    t((e => {
      if (f) {} else if (0 === e) {
        f = !0;
        i(0);
      } else if (0 === e.tag) {
        if (r <= 0) {
          f = !0;
          i(0);
          e[0](1);
        } else {
          a = e[0];
        }
      } else if (n++ < r) {
        i(e);
        if (!f && n >= r) {
          f = !0;
          i(0);
          a(1);
        }
      } else {
        i(e);
      }
    }));
    i(start((e => {
      if (1 === e && !f) {
        f = !0;
        a(1);
      } else if (0 === e && !f && n < r) {
        a(0);
      }
    })));
  };
}

function takeLast(t) {
  return i => a => {
    var f = [];
    var n = wonka_e;
    i((e => {
      if (0 === e) {
        wonka_r(f)(a);
      } else if (0 === e.tag) {
        if (t <= 0) {
          e[0](1);
          wonka_r(f)(a);
        } else {
          (n = e[0])(0);
        }
      } else {
        if (f.length >= t && t) {
          f.shift();
        }
        f.push(e[0]);
        n(0);
      }
    }));
  };
}

function takeUntil(r) {
  return t => i => {
    var a = wonka_e;
    var f = wonka_e;
    var n = !1;
    t((e => {
      if (n) {} else if (0 === e) {
        n = !0;
        f(1);
        i(0);
      } else if (0 === e.tag) {
        a = e[0];
        r((e => {
          if (0 === e) {} else if (0 === e.tag) {
            (f = e[0])(0);
          } else {
            n = !0;
            f(1);
            a(1);
            i(0);
          }
        }));
      } else {
        i(e);
      }
    }));
    i(start((e => {
      if (1 === e && !n) {
        n = !0;
        a(1);
        f(1);
      } else if (!n) {
        a(0);
      }
    })));
  };
}

function takeWhile(r, t) {
  return i => a => {
    var f = wonka_e;
    var n = !1;
    i((e => {
      if (n) {} else if (0 === e) {
        n = !0;
        a(0);
      } else if (0 === e.tag) {
        f = e[0];
        a(e);
      } else if (!r(e[0])) {
        n = !0;
        if (t) {
          a(e);
        }
        a(0);
        f(1);
      } else {
        a(e);
      }
    }));
  };
}

function debounce(e) {
  return r => t => {
    var i;
    var a = !1;
    var f = !1;
    r((r => {
      if (f) {} else if (0 === r) {
        f = !0;
        if (i) {
          a = !0;
        } else {
          t(0);
        }
      } else if (0 === r.tag) {
        var n = r[0];
        t(start((e => {
          if (1 === e && !f) {
            f = !0;
            a = !1;
            if (i) {
              clearTimeout(i);
            }
            n(1);
          } else if (!f) {
            n(0);
          }
        })));
      } else {
        if (i) {
          clearTimeout(i);
        }
        i = setTimeout((() => {
          i = void 0;
          t(r);
          if (a) {
            t(0);
          }
        }), e(r[0]));
      }
    }));
  };
}

function delay(e) {
  return r => t => {
    var i = 0;
    r((r => {
      if (0 !== r && 0 === r.tag) {
        t(r);
      } else {
        i++;
        setTimeout((() => {
          if (i) {
            i--;
            t(r);
          }
        }), e);
      }
    }));
  };
}

function throttle(e) {
  return r => t => {
    var i = !1;
    var a;
    r((r => {
      if (0 === r) {
        if (a) {
          clearTimeout(a);
        }
        t(0);
      } else if (0 === r.tag) {
        var f = r[0];
        t(start((e => {
          if (1 === e) {
            if (a) {
              clearTimeout(a);
            }
            f(1);
          } else {
            f(0);
          }
        })));
      } else if (!i) {
        i = !0;
        if (a) {
          clearTimeout(a);
        }
        a = setTimeout((() => {
          a = void 0;
          i = !1;
        }), e(r[0]));
        t(r);
      }
    }));
  };
}

function lazy(e) {
  return r => e()(r);
}

function fromAsyncIterable(e) {
  return r => {
    var t = e[asyncIteratorSymbol()] && e[asyncIteratorSymbol()]() || e;
    var i = !1;
    var a = !1;
    var f = !1;
    var n;
    r(start((async e => {
      if (1 === e) {
        i = !0;
        if (t.return) {
          t.return();
        }
      } else if (a) {
        f = !0;
      } else {
        for (f = a = !0; f && !i; ) {
          if ((n = await t.next()).done) {
            i = !0;
            if (t.return) {
              await t.return();
            }
            r(0);
          } else {
            try {
              f = !1;
              r(push(n.value));
            } catch (e) {
              if (t.throw) {
                if (i = !!(await t.throw(e)).done) {
                  r(0);
                }
              } else {
                throw e;
              }
            }
          }
        }
        a = !1;
      }
    })));
  };
}

function fromIterable(e) {
  if (e[Symbol.asyncIterator]) {
    return fromAsyncIterable(e);
  }
  return r => {
    var t = e[Symbol.iterator]();
    var i = !1;
    var a = !1;
    var f = !1;
    var n;
    r(start((e => {
      if (1 === e) {
        i = !0;
        if (t.return) {
          t.return();
        }
      } else if (a) {
        f = !0;
      } else {
        for (f = a = !0; f && !i; ) {
          if ((n = t.next()).done) {
            i = !0;
            if (t.return) {
              t.return();
            }
            r(0);
          } else {
            try {
              f = !1;
              r(push(n.value));
            } catch (e) {
              if (t.throw) {
                if (i = !!t.throw(e).done) {
                  r(0);
                }
              } else {
                throw e;
              }
            }
          }
        }
        a = !1;
      }
    })));
  };
}

var wonka_r = fromIterable;

function fromValue(e) {
  return r => {
    var t = !1;
    r(start((i => {
      if (1 === i) {
        t = !0;
      } else if (!t) {
        t = !0;
        r(push(e));
        r(0);
      }
    })));
  };
}

function make(e) {
  return r => {
    var t = !1;
    var i = e({
      next(e) {
        if (!t) {
          r(push(e));
        }
      },
      complete() {
        if (!t) {
          t = !0;
          r(0);
        }
      }
    });
    r(start((e => {
      if (1 === e && !t) {
        t = !0;
        i();
      }
    })));
  };
}

function makeSubject() {
  var e;
  var r;
  return {
    source: share(make((t => {
      e = t.next;
      r = t.complete;
      return teardownPlaceholder;
    }))),
    next(r) {
      if (e) {
        e(r);
      }
    },
    complete() {
      if (r) {
        r();
      }
    }
  };
}

var empty = e => {
  var r = !1;
  e(start((t => {
    if (1 === t) {
      r = !0;
    } else if (!r) {
      r = !0;
      e(0);
    }
  })));
};

var never = r => {
  r(start(wonka_e));
};

function interval(e) {
  return make((r => {
    var t = 0;
    var i = setInterval((() => r.next(t++)), e);
    return () => clearInterval(i);
  }));
}

function fromDomEvent(e, r) {
  return make((t => {
    e.addEventListener(r, t.next);
    return () => e.removeEventListener(r, t.next);
  }));
}

function fromPromise(e) {
  return make((r => {
    e.then((e => {
      Promise.resolve(e).then((() => {
        r.next(e);
        r.complete();
      }));
    }));
    return teardownPlaceholder;
  }));
}

function subscribe(r) {
  return t => {
    var i = wonka_e;
    var a = !1;
    t((e => {
      if (0 === e) {
        a = !0;
      } else if (0 === e.tag) {
        (i = e[0])(0);
      } else if (!a) {
        r(e[0]);
        i(0);
      }
    }));
    return {
      unsubscribe() {
        if (!a) {
          a = !0;
          i(1);
        }
      }
    };
  };
}

function forEach(e) {
  return r => {
    subscribe(e)(r);
  };
}

function publish(e) {
  subscribe((e => {}))(e);
}

var wonka_t = {
  done: !0
};

var toAsyncIterable = r => {
  var i = [];
  var a = !1;
  var f = !1;
  var n = !1;
  var s = wonka_e;
  var l;
  return {
    async next() {
      if (!f) {
        f = !0;
        r((e => {
          if (a) {} else if (0 === e) {
            if (l) {
              l = l(wonka_t);
            }
            a = !0;
          } else if (0 === e.tag) {
            n = !0;
            (s = e[0])(0);
          } else {
            n = !1;
            if (l) {
              l = l({
                value: e[0],
                done: !1
              });
            } else {
              i.push(e[0]);
            }
          }
        }));
      }
      if (a && !i.length) {
        return wonka_t;
      } else if (!a && !n && i.length <= 1) {
        n = !0;
        s(0);
      }
      return i.length ? {
        value: i.shift(),
        done: !1
      } : new Promise((e => l = e));
    },
    async return() {
      if (!a) {
        l = s(1);
      }
      a = !0;
      return wonka_t;
    },
    [asyncIteratorSymbol()]() {
      return this;
    }
  };
};

function toArray(r) {
  var t = [];
  var i = wonka_e;
  var a = !1;
  r((e => {
    if (0 === e) {
      a = !0;
    } else if (0 === e.tag) {
      (i = e[0])(0);
    } else {
      t.push(e[0]);
      i(0);
    }
  }));
  if (!a) {
    i(1);
  }
  return t;
}

function toPromise(r) {
  return new Promise((t => {
    var i = wonka_e;
    var a;
    r((e => {
      if (0 === e) {
        Promise.resolve(a).then(t);
      } else if (0 === e.tag) {
        (i = e[0])(0);
      } else {
        a = e[0];
        i(0);
      }
    }));
  }));
}

function zip(r) {
  var t = Object.keys(r).length;
  return i => {
    var a = new Set;
    var f = Array.isArray(r) ? new Array(t).fill(wonka_e) : {};
    var n = Array.isArray(r) ? new Array(t) : {};
    var s = !1;
    var l = !1;
    var u = !1;
    var o = 0;
    var loop = function(v) {
      r[v]((c => {
        if (0 === c) {
          if (o >= t - 1) {
            u = !0;
            i(0);
          } else {
            o++;
          }
        } else if (0 === c.tag) {
          f[v] = c[0];
        } else if (!u) {
          n[v] = c[0];
          a.add(v);
          if (!s && a.size < t) {
            if (!l) {
              for (var h in r) {
                if (!a.has(h)) {
                  (f[h] || wonka_e)(0);
                }
              }
            } else {
              l = !1;
            }
          } else {
            s = !0;
            l = !1;
            i(push(Array.isArray(n) ? n.slice() : {
              ...n
            }));
          }
        }
      }));
    };
    for (var v in r) {
      loop(v);
    }
    i(start((e => {
      if (u) {} else if (1 === e) {
        u = !0;
        for (var r in f) {
          f[r](1);
        }
      } else if (!l) {
        l = !0;
        for (var t in f) {
          f[t](0);
        }
      }
    })));
  };
}

function combine(...e) {
  return zip(e);
}

function fromObservable(e) {
  return r => {
    var t = (e[observableSymbol()] ? e[observableSymbol()]() : e).subscribe({
      next(e) {
        r(push(e));
      },
      complete() {
        r(0);
      },
      error(e) {
        throw e;
      }
    });
    r(start((e => {
      if (1 === e) {
        t.unsubscribe();
      }
    })));
  };
}

function toObservable(r) {
  return {
    subscribe(t, i, a) {
      var f = "object" == typeof t ? t : {
        next: t,
        error: i,
        complete: a
      };
      var n = wonka_e;
      var s = !1;
      r((e => {
        if (s) {} else if (0 === e) {
          s = !0;
          if (f.complete) {
            f.complete();
          }
        } else if (0 === e.tag) {
          (n = e[0])(0);
        } else {
          f.next(e[0]);
          n(0);
        }
      }));
      var l = {
        closed: !1,
        unsubscribe() {
          l.closed = !0;
          s = !0;
          n(1);
        }
      };
      return l;
    },
    [observableSymbol()]() {
      return this;
    }
  };
}

function fromCallbag(e) {
  return r => {
    e(0, ((e, t) => {
      if (0 === e) {
        r(start((e => {
          t(e + 1);
        })));
      } else if (1 === e) {
        r(push(t));
      } else {
        r(0);
      }
    }));
  };
}

function toCallbag(e) {
  return (r, t) => {
    if (0 === r) {
      e((e => {
        if (0 === e) {
          t(2);
        } else if (0 === e.tag) {
          t(0, (r => {
            if (r < 3) {
              e[0](r - 1);
            }
          }));
        } else {
          t(1, e[0]);
        }
      }));
    }
  };
}

var pipe = (...e) => {
  var r = e[0];
  for (var t = 1, i = e.length; t < i; t++) {
    r = e[t](r);
  }
  return r;
};


//# sourceMappingURL=wonka.mjs.map

;// ./node_modules/@urql/core/dist/urql-core-chunk.mjs




var rehydrateGraphQlError = e => {
  if (e instanceof GraphQLError) {
    return e;
  } else if ("object" == typeof e && e.message) {
    return new GraphQLError(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {});
  } else {
    return new GraphQLError(e);
  }
};

class CombinedError extends Error {
  constructor(r) {
    var e = (r.graphQLErrors || []).map(rehydrateGraphQlError);
    var t = ((r, e) => {
      var t = "";
      if (r) {
        return `[Network] ${r.message}`;
      }
      if (e) {
        for (var a of e) {
          if (t) {
            t += "\n";
          }
          t += `[GraphQL] ${a.message}`;
        }
      }
      return t;
    })(r.networkError, e);
    super(t);
    this.name = "CombinedError";
    this.message = t;
    this.graphQLErrors = e;
    this.networkError = r.networkError;
    this.response = r.response;
  }
  toString() {
    return this.message;
  }
}

var phash = (r, e) => {
  var t = "number" == typeof e ? 0 | e : 5381;
  for (var a = 0, n = 0 | r.length; a < n; a++) {
    t = (t << 5) + t + r.charCodeAt(a);
  }
  return t;
};

var urql_core_chunk_o = new Set;

var urql_core_chunk_i = new WeakMap;

var stringify = r => {
  if (null === r || urql_core_chunk_o.has(r)) {
    return "null";
  } else if ("object" != typeof r) {
    return JSON.stringify(r) || "";
  } else if (r.toJSON) {
    return stringify(r.toJSON());
  } else if (Array.isArray(r)) {
    var e = "[";
    for (var t of r) {
      if ("[" !== e) {
        e += ",";
      }
      e += (t = stringify(t)).length > 0 ? t : "null";
    }
    return e += "]";
  }
  var a = Object.keys(r).sort();
  if (!a.length && r.constructor && r.constructor !== Object) {
    var n = urql_core_chunk_i.get(r) || Math.random().toString(36).slice(2);
    urql_core_chunk_i.set(r, n);
    return `{"__key":"${n}"}`;
  }
  urql_core_chunk_o.add(r);
  var s = "{";
  for (var v of a) {
    var f = stringify(r[v]);
    if (f) {
      if (s.length > 1) {
        s += ",";
      }
      s += stringify(v) + ":" + f;
    }
  }
  urql_core_chunk_o.delete(r);
  return s += "}";
};

var stringifyVariables = r => {
  urql_core_chunk_o.clear();
  return stringify(r);
};

var urql_core_chunk_s = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g;

var urql_core_chunk_v = /(#[^\n\r]+)?(?:\n|\r\n?|$)+/g;

var replaceOutsideStrings = (r, e) => e % 2 == 0 ? r.replace(urql_core_chunk_v, "\n") : r;

var sanitizeDocument = r => r.split(urql_core_chunk_s).map(replaceOutsideStrings).join("").trim();

var f = new Map;

var l = new Map;

var stringifyDocument = r => {
  var e;
  if ("string" == typeof r) {
    e = sanitizeDocument(r);
  } else if (r.loc && l.get(r.__key) === r) {
    e = r.loc.source.body;
  } else {
    e = f.get(r) || sanitizeDocument(print(r));
    f.set(r, e);
  }
  if ("string" != typeof r && !r.loc) {
    r.loc = {
      start: 0,
      end: e.length,
      source: {
        body: e,
        name: "gql",
        locationOffset: {
          line: 1,
          column: 1
        }
      }
    };
  }
  return e;
};

var hashDocument = r => {
  var e = phash(stringifyDocument(r));
  if ("object" == typeof r && "definitions" in r) {
    var t = getOperationName(r);
    if (t) {
      e = phash(`\n# ${t}`, e);
    }
  }
  return e;
};

var keyDocument = r => {
  var e;
  var t;
  if ("string" == typeof r) {
    e = hashDocument(r);
    t = l.get(e) || parse(r, {
      noLocation: !0
    });
  } else {
    e = r.__key || hashDocument(r);
    t = l.get(e) || r;
  }
  if (!t.loc) {
    stringifyDocument(t);
  }
  t.__key = e;
  l.set(e, t);
  return t;
};

var createRequest = (r, e) => {
  if (!e) {
    e = {};
  }
  var t = keyDocument(r);
  var a = stringifyVariables(e);
  var n = t.__key;
  if ("{}" !== a) {
    n = phash(a, n);
  }
  return {
    key: n,
    query: t,
    variables: e
  };
};

var getOperationName = r => {
  for (var t of r.definitions) {
    if (t.kind === kinds_Kind.OPERATION_DEFINITION && t.name) {
      return t.name.value;
    }
  }
};

var getOperationType = r => {
  for (var t of r.definitions) {
    if (t.kind === e.OPERATION_DEFINITION) {
      return t.operation;
    }
  }
};

var makeResult = (r, e, t) => {
  if (!("data" in e) && !("errors" in e) || "incremental" in e) {
    throw new Error("No Content");
  }
  var a = "subscription" === r.kind;
  return {
    operation: r,
    data: e.data,
    error: Array.isArray(e.errors) ? new CombinedError({
      graphQLErrors: e.errors,
      response: t
    }) : void 0,
    extensions: "object" == typeof e.extensions && e.extensions || void 0,
    hasNext: null == e.hasNext ? a : e.hasNext
  };
};

var mergeResultPatch = (r, e, t) => {
  var a;
  var n = !!r.extensions || !!e.extensions;
  var o = {
    ...r.extensions,
    ...e.extensions
  };
  var i = r.error ? r.error.graphQLErrors : [];
  var s = e.incremental;
  if ("path" in e) {
    s = [ {
      data: e.data,
      path: e.path
    } ];
  }
  if (s) {
    a = {
      ...r.data
    };
    for (var v of s) {
      if (Array.isArray(v.errors)) {
        i.push(...v.errors);
      }
      if (v.extensions) {
        Object.assign(o, v.extensions);
        n = !0;
      }
      var f = v.path[0];
      var l = a;
      for (var u = 1, d = v.path.length; u < d; f = v.path[u++]) {
        l = l[f] = Array.isArray(l[f]) ? [ ...l[f] ] : {
          ...l[f]
        };
      }
      if (Array.isArray(v.items)) {
        var c = +f >= 0 ? f : 0;
        for (var p = 0, h = v.items.length; p < h; p++) {
          l[c + p] = v.items[p];
        }
      } else if (void 0 !== v.data) {
        l[f] = l[f] && v.data ? {
          ...l[f],
          ...v.data
        } : v.data;
      }
    }
  } else {
    a = e.data || r.data;
  }
  return {
    operation: r.operation,
    data: a,
    error: i.length ? new CombinedError({
      graphQLErrors: i,
      response: t
    }) : void 0,
    extensions: n ? o : void 0,
    hasNext: !!e.hasNext
  };
};

var makeErrorResult = (r, e, t) => ({
  operation: r,
  data: void 0,
  error: new CombinedError({
    networkError: e,
    response: t
  }),
  extensions: void 0
});

function makeFetchBody(r) {
  return {
    query: stringifyDocument(r.query),
    operationName: getOperationName(r.query),
    variables: r.variables || void 0,
    extensions: void 0
  };
}

var makeFetchURL = (r, e) => {
  var t = "query" === r.kind && r.context.preferGetMethod;
  if (!t || !e) {
    return r.context.url;
  }
  var a = new URL(r.context.url);
  var n = a.searchParams;
  if (e.operationName) {
    n.set("operationName", e.operationName);
  }
  if (e.query) {
    n.set("query", e.query);
  }
  if (e.variables) {
    n.set("variables", stringifyVariables(e.variables));
  }
  if (e.extensions) {
    n.set("extensions", stringifyVariables(e.extensions));
  }
  var o = a.toString();
  if (o.length > 2047 && "force" !== t) {
    r.context.preferGetMethod = !1;
    return r.context.url;
  }
  return o;
};

var makeFetchOptions = (r, e) => {
  var t = "query" === r.kind && !!r.context.preferGetMethod;
  var a = {
    accept: "multipart/mixed, application/graphql-response+json, application/graphql+json, application/json"
  };
  if (!t) {
    a["content-type"] = "application/json";
  }
  var n = ("function" == typeof r.context.fetchOptions ? r.context.fetchOptions() : r.context.fetchOptions) || {};
  if (n.headers) {
    for (var o in n.headers) {
      a[o.toLowerCase()] = n.headers[o];
    }
  }
  return {
    ...n,
    body: !t && e ? JSON.stringify(e) : void 0,
    method: t ? "GET" : "POST",
    headers: a
  };
};

var urql_core_chunk_u = "undefined" != typeof TextDecoder ? new TextDecoder : null;

var urql_core_chunk_d = /content-type:[^\r\n]*application\/json/i;

var urql_core_chunk_c = /boundary="?([^=";]+)"?/i;

var makeFetchSource = (r, e, t) => {
  var a = "manual" === t.redirect ? 400 : 300;
  var o = r.context.fetch;
  return make((({next: n, complete: i}) => {
    var s = "undefined" != typeof AbortController ? new AbortController : null;
    if (s) {
      t.signal = s.signal;
    }
    var v = !1;
    var executeIncrementalFetch = (r, e, t) => {
      var a = t.headers && t.headers.get("Content-Type") || "";
      if (/text\//i.test(a)) {
        return t.text().then((a => {
          r(makeErrorResult(e, new Error(a), t));
        }));
      } else if (!/multipart\/mixed/i.test(a)) {
        return t.text().then((a => {
          r(makeResult(e, JSON.parse(a), t));
        }));
      }
      var n = "---";
      var o = a.match(urql_core_chunk_c);
      if (o) {
        n = "--" + o[1];
      }
      var i;
      var cancel = () => {};
      if (t[Symbol.asyncIterator]) {
        var s = t[Symbol.asyncIterator]();
        i = s.next.bind(s);
      } else if ("body" in t && t.body) {
        var f = t.body.getReader();
        cancel = () => f.cancel();
        i = () => f.read();
      } else {
        throw new TypeError("Streaming requests unsupported");
      }
      var l = "";
      var p = !0;
      var h = null;
      var y = null;
      return i().then((function next(a) {
        if (!a.done) {
          var o = "Buffer" === (w = a.value).constructor.name ? w.toString() : urql_core_chunk_u.decode(w);
          var s = o.indexOf(n);
          if (s > -1) {
            s += l.length;
          } else {
            s = l.indexOf(n);
          }
          l += o;
          while (s > -1) {
            var f = l.slice(0, s);
            var c = l.slice(s + n.length);
            if (p) {
              p = !1;
            } else {
              var x = f.indexOf("\r\n\r\n") + 4;
              var m = f.slice(0, x);
              var g = f.slice(x, f.lastIndexOf("\r\n"));
              var b = void 0;
              if (urql_core_chunk_d.test(m)) {
                try {
                  b = JSON.parse(g);
                  h = y = y ? mergeResultPatch(y, b, t) : makeResult(e, b, t);
                } catch (r) {}
              }
              if ("--" === c.slice(0, 2) || b && !b.hasNext) {
                if (!y) {
                  return r(makeResult(e, {}, t));
                }
                break;
              }
            }
            s = (l = c).indexOf(n);
          }
        } else {
          v = !0;
        }
        var w;
        if (h) {
          r(h);
          h = null;
        }
        if (!a.done && (!y || y.hasNext)) {
          return i().then(next);
        }
      })).finally(cancel);
    };
    var f = !1;
    var l = !1;
    var p;
    Promise.resolve().then((() => {
      if (f) {
        return;
      }
      return (o || fetch)(e, t);
    })).then((e => {
      if (!e) {
        return;
      }
      l = (p = e).status < 200 || p.status >= a;
      return executeIncrementalFetch(n, r, p);
    })).then(i).catch((e => {
      if (v) {
        throw e;
      }
      var t = makeErrorResult(r, l ? p.statusText ? new Error(p.statusText) : e : e, p);
      n(t);
      i();
    }));
    return () => {
      f = !0;
      if (s) {
        s.abort();
      }
    };
  }));
};


//# sourceMappingURL=urql-core-chunk.mjs.map

;// ./node_modules/@urql/core/dist/urql-core.mjs








var collectTypes = (e, r) => {
  if (Array.isArray(e)) {
    for (var t of e) {
      collectTypes(t, r);
    }
  } else if ("object" == typeof e && null !== e) {
    for (var a in e) {
      if ("__typename" === a && "string" == typeof e[a]) {
        r.add(e[a]);
      } else {
        collectTypes(e[a], r);
      }
    }
  }
  return r;
};

var formatNode = e => {
  if (!e.selectionSet) {
    return e;
  }
  for (var t of e.selectionSet.selections) {
    if (t.kind === kinds_Kind.FIELD && "__typename" === t.name.value && !t.alias) {
      return e;
    }
  }
  return {
    ...e,
    selectionSet: {
      ...e.selectionSet,
      selections: [ ...e.selectionSet.selections, {
        kind: kinds_Kind.FIELD,
        name: {
          kind: kinds_Kind.NAME,
          value: "__typename"
        }
      } ]
    }
  };
};

var I = new Map;

var formatDocument = r => {
  var a = keyDocument(r);
  var n = I.get(a.__key);
  if (!n) {
    n = visit(a, {
      Field: formatNode,
      InlineFragment: formatNode
    });
    Object.defineProperty(n, "__key", {
      value: a.__key,
      enumerable: !1
    });
    I.set(a.__key, n);
  }
  return n;
};

var maskTypename = (e, r) => {
  if (!e || "object" != typeof e) {
    return e;
  } else if (Array.isArray(e)) {
    return e.map((e => maskTypename(e)));
  } else if (e && "object" == typeof e && (r || "__typename" in e)) {
    var t = {};
    for (var a in e) {
      if ("__typename" === a) {
        Object.defineProperty(t, "__typename", {
          enumerable: !1,
          value: e.__typename
        });
      } else {
        t[a] = maskTypename(e[a]);
      }
    }
    return t;
  } else {
    return e;
  }
};

function withPromise(e) {
  e.toPromise = () => new Promise((r => {
    var t = subscribe((e => {
      if (!e.stale && !e.hasNext) {
        Promise.resolve().then((() => {
          t.unsubscribe();
          r(e);
        }));
      }
    }))(e);
  }));
  return e;
}

function makeOperation(e, r, t) {
  if (!t) {
    t = r.context;
  }
  return {
    key: r.key,
    query: r.query,
    variables: r.variables,
    kind: e,
    context: t
  };
}

var addMetadata = (e, r) => makeOperation(e.kind, e, {
  ...e.context,
  meta: {
    ...e.context.meta,
    ...r
  }
});

var noop = () => {};

var applyDefinitions = (e, t, a) => {
  for (var o of a) {
    if (o.kind === r.FRAGMENT_DEFINITION) {
      var i = o.name.value;
      var s = n(o);
      if (!e.has(i)) {
        e.set(i, s);
        t.push(o);
      } else if (false) // removed by dead control flow
{}
    } else {
      t.push(o);
    }
  }
};

function gql() {
  var e = new Map;
  var a = [];
  var n = [];
  var o = Array.isArray(arguments[0]) ? arguments[0][0] : arguments[0] || "";
  for (var i = 1; i < arguments.length; i++) {
    var s = arguments[i];
    if (s && s.definitions) {
      n.push(...s.definitions);
    } else {
      o += s;
    }
    o += arguments[0][i];
  }
  applyDefinitions(e, a, t(o).definitions);
  applyDefinitions(e, a, n);
  return t({
    kind: r.DOCUMENT,
    definitions: a
  });
}

var shouldSkip = ({kind: e}) => "mutation" !== e && "query" !== e;

var cacheExchange = ({forward: e, client: r, dispatchDebug: t}) => {
  var a = new Map;
  var n = new Map;
  var mapTypeNames = e => {
    var r = makeOperation(e.kind, e);
    r.query = formatDocument(e.query);
    return r;
  };
  var isOperationCached = e => {
    var {key: r, kind: t, context: {requestPolicy: n}} = e;
    return "query" === t && "network-only" !== n && ("cache-only" === n || a.has(r));
  };
  return o => {
    var i = share(o);
    var s = map((e => {
      var n = a.get(e.key);
       false && 0;
      var o = {
        ...n,
        operation: addMetadata(e, {
          cacheOutcome: n ? "hit" : "miss"
        })
      };
      if ("cache-and-network" === e.context.requestPolicy) {
        o.stale = !0;
        reexecuteOperation(r, e);
      }
      return o;
    }))(filter((e => !shouldSkip(e) && isOperationCached(e)))(i));
    var u = onPush((e => {
      var {operation: o} = e;
      if (!o) {
        return;
      }
      var i = (e => [ ...collectTypes(e, new Set) ])(e.data).concat(o.context.additionalTypenames || []);
      if ("mutation" === e.operation.kind) {
        var s = new Set;
         false && 0;
        for (var u = 0; u < i.length; u++) {
          var c = i[u];
          var p = n.get(c);
          if (!p) {
            n.set(c, p = new Set);
          }
          for (var v of p.values()) {
            s.add(v);
          }
          p.clear();
        }
        for (var l of s.values()) {
          if (a.has(l)) {
            o = a.get(l).operation;
            a.delete(l);
            reexecuteOperation(r, o);
          }
        }
      } else if ("query" === o.kind && e.data) {
        a.set(o.key, e);
        for (var d = 0; d < i.length; d++) {
          var f = i[d];
          var h = n.get(f);
          if (!h) {
            n.set(f, h = new Set);
          }
          h.add(o.key);
        }
      }
    }))(e(filter((e => "query" !== e.kind || "cache-only" !== e.context.requestPolicy))(map((e => addMetadata(e, {
      cacheOutcome: "miss"
    })))(merge([ map(mapTypeNames)(filter((e => !shouldSkip(e) && !isOperationCached(e)))(i)), filter((e => shouldSkip(e)))(i) ])))));
    return merge([ s, u ]);
  };
};

var reexecuteOperation = (e, r) => e.reexecuteOperation(makeOperation(r.kind, r, {
  ...r.context,
  requestPolicy: "network-only"
}));

var F = new Set;

var ssrExchange = (e = {}) => {
  var r = !!e.staleWhileRevalidate;
  var t = !!e.includeExtensions;
  var a = {};
  var n = [];
  var invalidate = e => {
    n.push(e.operation.key);
    if (1 === n.length) {
      Promise.resolve().then((() => {
        var e;
        while (e = n.shift()) {
          a[e] = null;
        }
      }));
    }
  };
  var ssr = ({client: n, forward: i}) => s => {
    var u = e && "boolean" == typeof e.isClient ? !!e.isClient : !n.suspense;
    var c = g(s);
    var p = i(w((e => !a[e.key] || !!a[e.key].hasNext || "network-only" === e.context.requestPolicy))(c));
    var v = x((e => {
      var i = ((e, r, t) => ({
        operation: e,
        data: r.data ? JSON.parse(r.data) : void 0,
        extensions: t && r.extensions ? JSON.parse(r.extensions) : void 0,
        error: r.error ? new o({
          networkError: r.error.networkError ? new Error(r.error.networkError) : void 0,
          graphQLErrors: r.error.graphQLErrors
        }) : void 0,
        hasNext: r.hasNext
      }))(e, a[e.key], t);
      if (r && !F.has(e.key)) {
        i.stale = !0;
        F.add(e.key);
        reexecuteOperation(n, e);
      }
      return {
        ...i,
        operation: addMetadata(e, {
          cacheOutcome: "hit"
        })
      };
    }))(w((e => !!a[e.key] && "network-only" !== e.context.requestPolicy))(c));
    if (!u) {
      p = b((e => {
        var {operation: r} = e;
        if ("mutation" !== r.kind) {
          var n = (({hasNext: e, data: r, extensions: t, error: a}, n) => {
            var o = {};
            if (void 0 !== r) {
              o.data = JSON.stringify(r);
            }
            if (n && void 0 !== t) {
              o.extensions = JSON.stringify(t);
            }
            if (e) {
              o.hasNext = !0;
            }
            if (a) {
              o.error = {
                graphQLErrors: a.graphQLErrors.map((e => {
                  if (!e.path && !e.extensions) {
                    return e.message;
                  }
                  return {
                    message: e.message,
                    path: e.path,
                    extensions: e.extensions
                  };
                }))
              };
              if (a.networkError) {
                o.error.networkError = "" + a.networkError;
              }
            }
            return o;
          })(e, t);
          a[r.key] = n;
        }
      }))(p);
    } else {
      v = b(invalidate)(v);
    }
    return E([ p, v ]);
  };
  ssr.restoreData = e => {
    for (var r in e) {
      if (null !== a[r]) {
        a[r] = e[r];
      }
    }
  };
  ssr.extractData = () => {
    var e = {};
    for (var r in a) {
      if (null != a[r]) {
        e[r] = a[r];
      }
    }
    return e;
  };
  if (e && e.initialState) {
    ssr.restoreData(e.initialState);
  }
  return ssr;
};

var subscriptionExchange = ({forwardSubscription: e, enableAllOperations: r, isSubscriptionOperation: t}) => ({client: a, forward: o}) => {
  var i = t || (e => {
    var {kind: t} = e;
    return "subscription" === t || !!r && ("query" === t || "mutation" === t);
  });
  return r => {
    var t = g(r);
    var c = O((r => {
      var {key: o} = r;
      var i = w((e => "teardown" === e.kind && e.key === o))(t);
      return q(i)((r => {
        var t = e({
          key: r.key.toString(36),
          query: n(r.query),
          variables: r.variables,
          context: {
            ...r.context
          }
        });
        return N((({next: e, complete: n}) => {
          var o = !1;
          var i;
          Promise.resolve().then((() => {
            if (o) {
              return;
            }
            i = t.subscribe({
              next: t => e(s(r, t)),
              error: t => e(u(r, t)),
              complete: () => {
                if (!o) {
                  o = !0;
                  if ("subscription" === r.kind) {
                    a.reexecuteOperation(makeOperation("teardown", r, r.context));
                  }
                  n();
                }
              }
            });
          }));
          return () => {
            o = !0;
            if (i) {
              i.unsubscribe();
            }
          };
        }));
      })(r));
    }))(w(i)(t));
    var p = o(w((e => !i(e)))(t));
    return E([ c, p ]);
  };
};

var debugExchange = ({forward: e}) => {
  if (true) {
    return r => e(r);
  } else // removed by dead control flow
{}
};

var dedupExchange = ({forward: e, dispatchDebug: r}) => {
  var t = new Set;
  var filterIncomingOperation = e => {
    var {key: a, kind: n} = e;
    if ("teardown" === n || "mutation" === n) {
      t.delete(a);
      return !0;
    }
    var o = t.has(a);
    t.add(a);
    if (o) {
       false && 0;
    }
    return !o;
  };
  var afterOperationResult = ({operation: e, hasNext: r}) => {
    if (!r) {
      t.delete(e.key);
    }
  };
  return r => {
    var t = filter(filterIncomingOperation)(r);
    return onPush(afterOperationResult)(e(t));
  };
};

var fetchExchange = ({forward: e, dispatchDebug: r}) => t => {
  var a = share(t);
  var n = mergeMap((e => {
    var {key: t} = e;
    var n = makeFetchBody(e);
    var o = makeFetchURL(e, n);
    var i = makeFetchOptions(e, n);
     false && 0;
    var s = takeUntil(filter((e => "teardown" === e.kind && e.key === t))(a))(makeFetchSource(e, o, i));
    if (false) // removed by dead control flow
{}
    return s;
  }))(filter((e => "query" === e.kind || "mutation" === e.kind))(a));
  var o = e(filter((e => "query" !== e.kind && "mutation" !== e.kind))(a));
  return merge([ n, o ]);
};

var composeExchanges = e => ({client: r, forward: t, dispatchDebug: a}) => e.reduceRight(((e, t) => t({
  client: r,
  forward: e,
  dispatchDebug(e) {
     false && 0;
  }
})), t);

var mapExchange = ({onOperation: e, onResult: r, onError: t}) => ({forward: a}) => n => O((e => {
  if (t && e.error) {
    t(e.error, e.operation);
  }
  var a = r && r(e) || e;
  return "then" in a ? D(a) : P(a);
}))(a(O((r => {
  var t = e && e(r) || r;
  return "then" in t ? D(t) : P(t);
}))(n)));

var Q = [ dedupExchange, cacheExchange, fetchExchange ];

var fallbackExchange = ({dispatchDebug: e}) => r => filter((() => !1))(onPush((r => {
  if ("teardown" !== r.kind && "production" !== "production") // removed by dead control flow
{ var t; }
}))(r));

var L = function Client(e) {
  if (false) // removed by dead control flow
{}
  var r = 0;
  var t = new Map;
  var a = new Map;
  var n = [];
  var o = {
    url: e.url,
    fetchOptions: e.fetchOptions,
    fetch: e.fetch,
    preferGetMethod: !!e.preferGetMethod,
    requestPolicy: e.requestPolicy || "cache-first"
  };
  var {source: i, next: s} = makeSubject();
  var u = !1;
  function dispatchOperation(e) {
    if (e) {
      s(e);
    }
    if (!u) {
      u = !0;
      while (u && (e = n.shift())) {
        s(e);
      }
      u = !1;
    }
  }
  var makeResultSource = r => {
    var o = filter((e => e.operation.kind === r.kind && e.operation.key === r.key && (!e.operation.context._instance || e.operation.context._instance === r.context._instance)))(m);
    if (e.maskTypename) {
      o = map((e => ({
        ...e,
        data: maskTypename(e.data, !0)
      })))(o);
    }
    if ("mutation" === r.kind) {
      return take(1)(onStart((() => s(r)))(o));
    }
    return share(onEnd((() => {
      t.delete(r.key);
      a.delete(r.key);
      for (var e = n.length - 1; e >= 0; e--) {
        if (n[e].key === r.key) {
          n.splice(e, 1);
        }
      }
      s(makeOperation("teardown", r, r.context));
    }))(onPush((e => {
      t.set(r.key, e);
    }))(switchMap((e => {
      if ("query" !== r.kind || e.stale) {
        return fromValue(e);
      }
      return merge([ fromValue(e), map((() => ({
        ...e,
        stale: !0
      })))(take(1)(filter((e => "query" === e.kind && e.key === r.key && "cache-only" !== e.context.requestPolicy))(i))) ]);
    }))(takeUntil(filter((e => "teardown" === e.kind && e.key === r.key))(i))(o)))));
  };
  var c = this instanceof Client ? this : Object.create(Client.prototype);
  var p = Object.assign(c, {
    suspense: !!e.suspense,
    operations$: i,
    reexecuteOperation(e) {
      if ("mutation" === e.kind || a.has(e.key)) {
        n.push(e);
        Promise.resolve().then(dispatchOperation);
      }
    },
    createRequestOperation(e, t, a) {
      if (!a) {
        a = {};
      }
      var n;
      if (false) // removed by dead control flow
{}
      return makeOperation(e, t, {
        _instance: "mutation" === e ? r = r + 1 | 0 : void 0,
        ...o,
        ...a,
        requestPolicy: a.requestPolicy || o.requestPolicy,
        suspense: a.suspense || !1 !== a.suspense && p.suspense
      });
    },
    executeRequestOperation(e) {
      if ("mutation" === e.kind) {
        return makeResultSource(e);
      }
      return make((r => {
        var n = a.get(e.key);
        if (!n) {
          a.set(e.key, n = makeResultSource(e));
        }
        var o = "cache-and-network" === e.context.requestPolicy || "network-only" === e.context.requestPolicy;
        return subscribe(r.next)(onEnd((() => {
          u = !1;
          r.complete();
        }))(onStart((() => {
          var a = t.get(e.key);
          if ("subscription" === e.kind) {
            return dispatchOperation(e);
          } else if (o) {
            dispatchOperation(e);
          }
          if (null != a && a === t.get(e.key)) {
            r.next(o ? {
              ...a,
              stale: !0
            } : a);
          } else if (!o) {
            dispatchOperation(e);
          }
        }))(n))).unsubscribe;
      }));
    },
    executeQuery(e, r) {
      var t = p.createRequestOperation("query", e, r);
      return p.executeRequestOperation(t);
    },
    executeSubscription(e, r) {
      var t = p.createRequestOperation("subscription", e, r);
      return p.executeRequestOperation(t);
    },
    executeMutation(e, r) {
      var t = p.createRequestOperation("mutation", e, r);
      return p.executeRequestOperation(t);
    },
    query(e, r, t) {
      if (!t || "boolean" != typeof t.suspense) {
        t = {
          ...t,
          suspense: !1
        };
      }
      return withPromise(p.executeQuery(createRequest(e, r), t));
    },
    readQuery(e, r, t) {
      var a = null;
      subscribe((e => {
        a = e;
      }))(p.query(e, r, t)).unsubscribe();
      return a;
    },
    subscription: (e, r, t) => p.executeSubscription(createRequest(e, r), t),
    mutation: (e, r, t) => withPromise(p.executeMutation(createRequest(e, r), t))
  });
  var v = noop;
  if (false) // removed by dead control flow
{ var f, l; }
  var h = composeExchanges(void 0 !== e.exchanges ? e.exchanges : Q);
  var m = share(h({
    client: p,
    dispatchDebug: v,
    forward: fallbackExchange({
      dispatchDebug: v
    })
  })(i));
  publish(m);
  return p;
};

var $ = L;


//# sourceMappingURL=urql-core.mjs.map

;// ./node_modules/@evershop/evershop/dist/components/common/Button.js


const Button = ({ title, outline = false, variant = 'primary', onAction, url = undefined, isLoading = false, type = 'button', className: _className = '' }) => {
    const className = ['button', variant];
    if (outline === true)
        className.push('outline');
    if (isLoading === true)
        className.push('loading');
    if (_className)
        className.push(_className);
    const onActionFunc = (e) => {
        e.preventDefault();
        if (isLoading === true)
            return;
        onAction && onAction();
    };
    if (!url) {
        return (react.createElement("button", { type: type, onClick: (e) => {
                if (type !== 'submit') {
                    e.preventDefault();
                    onActionFunc(e);
                }
                else {
                    e.stopPropagation();
                }
            }, className: className.join(' ') },
            react.createElement("span", null, title),
            isLoading === true && (react.createElement("svg", { style: {
                    background: 'rgb(255, 255, 255, 0)',
                    display: 'block',
                    shapeRendering: 'auto'
                }, width: "2rem", height: "2rem", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                react.createElement("circle", { cx: "50", cy: "50", fill: "none", stroke: "#5c5f62", strokeWidth: "10", r: "43", strokeDasharray: "202.63272615654165 69.54424205218055" },
                    react.createElement("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" }))))));
    }
    else {
        return (react.createElement("a", { href: url, className: className.join(' ') },
            react.createElement("span", null, title)));
    }
};
/* harmony default export */ const common_Button = (Button);
//# sourceMappingURL=Button.js.map
;// ./node_modules/@evershop/evershop/dist/lib/util/assign.js
/**
 * This function take 2 objects and merge the second one to the first one
 *
 * @param   {object}  object  The main object
 * @param   {object}  data    The object to be merged
 *
 */
function assign_assign(object, data) {
    if (typeof object !== 'object' || object === null) {
        throw new Error('`object` must be an object');
    }
    if (typeof data !== 'object' || data === null) {
        throw new Error('`data` must be an object');
    }
    Object.keys(data).forEach((key) => {
        if (data[key] &&
            data[key].constructor === Array &&
            object[key] &&
            object[key].constructor === Array) {
            object[key] = object[key].concat(data[key]);
        }
        else if (typeof object[key] !== 'object' ||
            typeof data[key] !== 'object' ||
            object[key] === null) {
            object[key] = data[key];
        }
        else {
            assign_assign(object[key], data[key]);
        }
    });
}
//# sourceMappingURL=assign.js.map
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
;// ./node_modules/@evershop/evershop/dist/components/admin/Card.js


function Card({ title, actions = [], subdued = false, children }) {
    return (react.createElement("div", { className: subdued ? 'card shadow subdued' : 'card shadow' },
        (title || actions.length > 0) && (react.createElement("div", { className: "flex justify-between card-header" },
            title && react.createElement("h2", { className: "card-title" }, title),
            actions.length > 0 && (react.createElement("div", { className: "flex space-x-2" }, actions.map((action, index) => {
                const className = {
                    primary: 'text-primary',
                    critical: 'text-critical',
                    interactive: 'text-interactive',
                    secondary: 'text-secondary'
                };
                return (react.createElement("div", { key: index, className: "card-action" },
                    react.createElement("a", { href: "#", onClick: (e) => {
                            e.preventDefault();
                            if (action.onAction)
                                action.onAction.call(null);
                        }, className: className[action.variant ? action.variant : 'interactive'] }, action.name)));
            }))))),
        children));
}
Card.defaultProps = {
    actions: [],
    subdued: false,
    title: ''
};
const Session = function Session({ actions = [], title, children }) {
    return (react.createElement("div", { className: "card-section border-b box-border" },
        (title || actions.length > 0) && (react.createElement("div", { className: "flex justify-between card-section-header mb-2" },
            title && react.createElement("h3", { className: "card-session-title" }, title),
            actions.length > 0 && (react.createElement("div", { className: "flex space-x-2" }, actions.map((action, index) => {
                const className = {
                    primary: 'text-primary',
                    critical: 'text-critical',
                    interactive: 'text-interactive',
                    secondary: 'text-secondary'
                };
                return (react.createElement("div", { key: index, className: "card-action" },
                    react.createElement("a", { href: "#", onClick: (e) => {
                            e.preventDefault();
                            if (action.onAction)
                                action.onAction.call(null);
                        }, className: className[action.variant ? action.variant : 'interactive'] }, action.name)));
            }))))),
        react.createElement("div", { className: "card-session-content pt-lg" }, children)));
};
Session.defaultProps = {
    actions: [],
    title: '',
    children: null
};
Card.Session = Session;

//# sourceMappingURL=Card.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/modal/Alert.js








const AlertContext = react.createContext();
const useAlertContext = () => React.useContext(AlertContext);
function reducer(state, action) {
    switch (action.type) {
        case 'close':
            return { ...state, showing: false, closing: false };
        case 'closing':
            return { ...state, showing: true, closing: true };
        case 'open':
            return { ...state, showing: true, closing: false };
        default:
            throw new Error();
    }
}
const alertReducer = produce((draff, action) => {
    switch (action.type) {
        case 'open':
            draff = { ...action.payload };
            return draff;
        case 'remove':
            return {};
        case 'update':
            assign_assign(draff, action.payload);
            return draff;
        default:
            throw new Error();
    }
});
function Alert_Alert({ children }) {
    const [alert, dispatchAlert] = (0,react.useReducer)(alertReducer, {});
    const [state, dispatch] = (0,react.useReducer)(reducer, {
        showing: false,
        closing: false
    });
    const openAlert = ({ heading, content, primaryAction, secondaryAction }) => {
        dispatchAlert({
            type: 'open',
            payload: {
                heading,
                content,
                primaryAction,
                secondaryAction
            }
        });
        dispatch({ type: 'open' });
    };
    return (react.createElement(AlertContext.Provider, { value: {
            dispatchAlert,
            openAlert,
            closeAlert: () => dispatch({ type: 'closing' })
        } },
        children,
        state.showing === true &&
            react_dom.createPortal(react.createElement("div", { className: state.closing === false
                    ? 'modal-overlay fadeIn'
                    : 'modal-overlay fadeOut', onAnimationEnd: () => {
                    if (state.closing) {
                        dispatch({ type: 'close' });
                        dispatchAlert({ type: 'remove' });
                    }
                } },
                react.createElement("div", { key: state.key, className: "modal-wrapper flex self-center justify-center", "aria-modal": true, "aria-hidden": true, tabIndex: -1, role: "dialog" },
                    react.createElement("div", { className: "modal" },
                        react.createElement("button", { type: "button", className: "modal-close-button text-icon", onClick: () => dispatch({ type: 'closing' }) },
                            react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5rem", className: "w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
                                react.createElement("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }))),
                        react.createElement(Card, { title: alert.heading },
                            react.createElement(Card.Session, null, alert.content),
                            (alert.primaryAction !== undefined ||
                                alert.secondaryAction !== undefined) && (react.createElement(Card.Session, null,
                                react.createElement("div", { className: "flex justify-end space-x-2" },
                                    alert.primaryAction && (react.createElement(common_Button, { ...alert.primaryAction })),
                                    alert.secondaryAction && (react.createElement(common_Button, { ...alert.secondaryAction }))))))))), document.body)));
}
Alert_Alert.propTypes = {
    children: prop_types.node.isRequired
};

//# sourceMappingURL=Alert.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/react/client/Hydrate.js





function Hydrate_Hydrate({ client }) {
    return (React.createElement(Provider, { value: client },
        React.createElement(AppProvider, { value: window.eContext },
            React.createElement(Alert, null,
                React.createElement(Area, { id: "body", className: "wrapper" })))));
}
//# sourceMappingURL=Hydrate.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/react/client/HydrateAdmin.js



const client = $({
    url: '/api/admin/graphql'
});
function HydrateAdmin() {
    return React.createElement(Hydrate, { client: client });
}
//# sourceMappingURL=HydrateAdmin.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/react/client/HydrateFrontStore.js



const HydrateFrontStore_client = $({
    url: '/api/graphql'
});
function HydrateFrontStore() {
    return React.createElement(Hydrate, { client: HydrateFrontStore_client });
}
//# sourceMappingURL=HydrateFrontStore.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/react/server/Server.js



function ServerHtml({ css, js, appContext }) {
    return (react.createElement(react.Fragment, null,
        react.createElement("head", null,
            react.createElement("meta", { charSet: "utf-8" }),
            react.createElement("script", { dangerouslySetInnerHTML: { __html: appContext } }),
            css.map((source, index) => (react.createElement("style", { key: index, dangerouslySetInnerHTML: { __html: source } }))),
            react.createElement(common_Area, { noOuter: true, id: "head" })),
        react.createElement("body", { id: "body" },
            react.createElement("div", { id: "app", className: "bg-background" },
                react.createElement(Alert_Alert, null,
                    react.createElement(common_Area, { id: "body", className: "wrapper" }))),
            js.map((src, index) => (react.createElement("script", { src: src, key: index }))))));
}
/* harmony default export */ const Server = (ServerHtml);
//# sourceMappingURL=Server.js.map
// EXTERNAL MODULE: ./node_modules/react-dom/server.js
var server = __webpack_require__(97422);
;// ./node_modules/@evershop/evershop/dist/components/common/react/server/render.js




function renderHtml(js, css, contextData, langeCode) {
    const source = (0,server.renderToString)(react.createElement(app_AppProvider, { value: JSON.parse(contextData) },
        react.createElement(Server, { js: js, css: css, appContext: `var eContext = ${contextData}` })));
    return `<!DOCTYPE html><html id="root" lang="${langeCode}">${source}</html>`;
}

//# sourceMappingURL=render.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/index.js








/* harmony default export */ const common = ((/* unused pure expression or super */ null && (Area)));
//# sourceMappingURL=index.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/LoadingBar.js



const LoadingBar = function LoadingBar() {
    const { fetching } = useAppState();
    const [width, setWidth] = react.useState(0);
    const widthRef = react.useRef(0);
    react.useEffect(() => {
        widthRef.current = width;
        if (fetching === true) {
            // Random number between 1 and 3
            const step = Math.random() * (3 - 1) + 1;
            // Random number between 85 and 95
            const peak = Math.random() * (95 - 85) + 85;
            if (widthRef.current < peak) {
                const timer = setTimeout(() => setWidth(widthRef.current + step), 0);
                return () => clearTimeout(timer);
            }
        }
        else if (widthRef.current === 100) {
            setWidth(0);
            widthRef.current = 0;
        }
        else if (widthRef.current !== 0) {
            setWidth(100);
        }
    });
    return (react.createElement("div", { className: "loading-bar", style: {
            width: `${width}%`,
            display: fetching === true ? 'block' : 'none'
        } }));
};

//# sourceMappingURL=LoadingBar.js.map
;// ./node_modules/@evershop/evershop/dist/lib/locale/translate/_.js
function _(text, values) {
    // Check if the data is null, undefined or empty object
    if (!values || Object.keys(values).length === 0) {
        return text;
    }
    const template = `${text}`;
    return template.replace(/\${(.*?)}/g, (match, key) => values[key.trim()] !== undefined ? values[key.trim()] : match);
}
//# sourceMappingURL=_.js.map
;// ./node_modules/urql/dist/urql.es.js








var p = $({
  url: "/graphql"
});

var y = (0,react.createContext)(p);

var h = y.Provider;

var urql_es_x = y.Consumer;

y.displayName = "UrqlContext";

var urql_es_g = (/* unused pure expression or super */ null && (!1));

var useClient = () => {
  var e = (0,react.useContext)(y);
  if (false) // removed by dead control flow
{}
  return e;
};

var urql_es_b = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
};

var computeNextState = (e, r) => {
  var t = {
    ...e,
    ...r,
    data: void 0 !== r.data || r.error ? r.data : e.data,
    fetching: !!r.fetching,
    stale: !!r.stale
  };
  return ((e, r) => {
    if ("object" != typeof e || "object" != typeof r) {
      return e !== r;
    }
    for (var t in e) {
      if (!(t in r)) {
        return !0;
      }
    }
    for (var n in r) {
      if (e[n] !== r[n]) {
        return !0;
      }
    }
    return !1;
  })(e, t) ? t : e;
};

var hasDepsChanged = (e, r) => {
  for (var t = 0, n = r.length; t < n; t++) {
    if (e[t] !== r[t]) {
      return !0;
    }
  }
  return !1;
};

function useMutation(e) {
  var t = a(!0);
  var n = useClient();
  var [s, v] = u(urql_es_b);
  var f = i(((a, u) => {
    v({
      ...urql_es_b,
      fetching: !0
    });
    return c(n.executeMutation(r(e, a), u || {})).then((e => {
      if (t.current) {
        v({
          fetching: !1,
          stale: !!e.stale,
          data: e.data,
          error: e.error,
          extensions: e.extensions,
          operation: e.operation
        });
      }
      return e;
    }));
  }), [ n, e, v ]);
  o((() => {
    t.current = !0;
    return () => {
      t.current = !1;
    };
  }), []);
  return [ s, f ];
}

function useRequest(e, t) {
  var n = (0,react.useRef)(void 0);
  return (0,react.useMemo)((() => {
    var a = createRequest(e, t);
    if (void 0 !== n.current && n.current.key === a.key) {
      return n.current;
    } else {
      n.current = a;
      return a;
    }
  }), [ e, t ]);
}

function useQuery(e) {
  var r = useClient();
  var t = (e => {
    if (!e._react) {
      var r = new Set;
      var t = new Map;
      if (e.operations$) {
        subscribe((e => {
          if ("teardown" === e.kind && r.has(e.key)) {
            r.delete(e.key);
            t.delete(e.key);
          }
        }))(e.operations$);
      }
      e._react = {
        get: e => t.get(e),
        set(e, n) {
          r.delete(e);
          t.set(e, n);
        },
        dispose(e) {
          r.add(e);
        }
      };
    }
    return e._react;
  })(r);
  var n = ((e, r) => e.suspense && (!r || !1 !== r.suspense))(r, e.context);
  var a = useRequest(e.query, e.variables);
  var c = (0,react.useMemo)((() => {
    if (e.pause) {
      return null;
    }
    var u = r.executeQuery(a, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? onPush((e => {
      t.set(a.key, e);
    }))(u) : u;
  }), [ t, r, a, n, e.pause, e.requestPolicy, e.context ]);
  var p = (0,react.useCallback)(((e, r) => {
    if (!e) {
      return {
        fetching: !1
      };
    }
    var n = t.get(a.key);
    if (!n) {
      var u;
      var i = subscribe((e => {
        n = e;
        if (u) {
          u(n);
        }
      }))(takeWhile((() => r && !u || !n))(e));
      if (null == n && r) {
        var o = new Promise((e => {
          u = e;
        }));
        t.set(a.key, o);
        throw o;
      } else {
        i.unsubscribe();
      }
    } else if (r && null != n && "then" in n) {
      throw n;
    }
    return n || {
      fetching: !0
    };
  }), [ t, a ]);
  var y = [ r, a, e.requestPolicy, e.context, e.pause ];
  var [h, x] = (0,react.useState)((() => [ c, computeNextState(urql_es_b, p(c, n)), y ]));
  var g = h[1];
  if (c !== h[0] && hasDepsChanged(h[2], y)) {
    x([ c, g = computeNextState(h[1], p(c, n)), y ]);
  }
  (0,react.useEffect)((() => {
    var e = h[0];
    var r = h[2][1];
    var n = !1;
    var updateResult = e => {
      n = !0;
      x((r => {
        var t = computeNextState(r[1], e);
        return r[1] !== t ? [ r[0], t, r[2] ] : r;
      }));
    };
    if (e) {
      var a = subscribe(updateResult)(onEnd((() => {
        updateResult({
          fetching: !1
        });
      }))(e));
      if (!n) {
        updateResult({
          fetching: !0
        });
      }
      return () => {
        t.dispose(r.key);
        a.unsubscribe();
      };
    } else {
      updateResult({
        fetching: !1
      });
    }
  }), [ t, h[0], h[2][1] ]);
  var q = (0,react.useCallback)((u => {
    var i = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...u
    };
    x((e => [ n ? onPush((e => {
      t.set(a.key, e);
    }))(r.executeQuery(a, i)) : r.executeQuery(a, i), e[1], y ]));
  }), [ r, t, a, n, p, e.requestPolicy, e.context ]);
  return [ g, q ];
}

function useSubscription(e, r) {
  var t = useClient();
  var n = useRequest(e.query, e.variables);
  var c = a(r);
  c.current = r;
  var f = s((() => !e.pause ? t.executeSubscription(n, e.context) : null), [ t, n, e.pause, e.context ]);
  var l = [ t, n, e.context, e.pause ];
  var [p, y] = u((() => [ f, {
    ...urql_es_b,
    fetching: !!f
  }, l ]));
  var h = p[1];
  if (f !== p[0] && hasDepsChanged(p[2], l)) {
    y([ f, h = computeNextState(p[1], {
      fetching: !!f
    }), l ]);
  }
  o((() => {
    var updateResult = e => {
      y((r => {
        var t = computeNextState(r[1], e);
        if (r[1] === t) {
          return r;
        }
        if (c.current && r[1].data !== t.data) {
          t.data = c.current(r[1].data, t.data);
        }
        return [ r[0], t, r[2] ];
      }));
    };
    if (p[0]) {
      return v(updateResult)(d((() => {
        updateResult({
          fetching: !!f
        });
      }))(p[0])).unsubscribe;
    } else {
      updateResult({
        fetching: !1
      });
    }
  }), [ p[0] ]);
  var x = i((r => {
    var a = t.executeSubscription(n, {
      ...e.context,
      ...r
    });
    y((e => [ a, e[1], l ]));
  }), [ t, e.context, n ]);
  return [ h, x ];
}

function Mutation(e) {
  var r = useMutation(e.query);
  return e.children({
    ...r[0],
    executeMutation: r[1]
  });
}

function Query(e) {
  var r = useQuery(e);
  return e.children({
    ...r[0],
    executeQuery: r[1]
  });
}

function Subscription(e) {
  var r = useSubscription(e, e.handler);
  return e.children({
    ...r[0],
    executeSubscription: r[1]
  });
}


//# sourceMappingURL=urql.es.js.map

;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/CartContext.js




const ShippingMethodsQuery = `
  query GetCartShippingMethods($country: String!, $province: String, $postcode: String) {
    myCart {
      availableShippingMethods(country: $country, province: $province, postcode: $postcode) {
        code
        name
        cost {
          value
          text
        }
      }
    }
  }
`;
var CartSyncTrigger;
(function (CartSyncTrigger) {
    CartSyncTrigger["ADD_ITEM"] = "addItem";
    CartSyncTrigger["REMOVE_ITEM"] = "removeItem";
    CartSyncTrigger["UPDATE_ITEM"] = "updateItem";
    CartSyncTrigger["ADD_PAYMENT_METHOD"] = "addPaymentMethod";
    CartSyncTrigger["ADD_SHIPPING_METHOD"] = "addShippingMethod";
    CartSyncTrigger["ADD_SHIPPING_ADDRESS"] = "addShippingAddress";
    CartSyncTrigger["ADD_BILLING_ADDRESS"] = "addBillingAddress";
    CartSyncTrigger["ADD_CONTACT_INFO"] = "addContactInfo";
    CartSyncTrigger["APPLY_COUPON"] = "applyCoupon";
    CartSyncTrigger["REMOVE_COUPON"] = "removeCoupon";
})(CartSyncTrigger || (CartSyncTrigger = {}));
const cartReducer = (state, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'SET_CART':
                if (draft.data) {
                    Object.assign(draft.data, action.payload);
                    draft.data.error = null;
                }
                else {
                    draft.data = action.payload;
                }
                // Clear all loading states when cart is set
                draft.loadingStates = {
                    addingItem: false,
                    removingItem: null,
                    updatingItem: null,
                    addingPaymentMethod: false,
                    addingShippingMethod: false,
                    addingShippingAddress: false,
                    addingBillingAddress: false,
                    addingContactInfo: false,
                    applyingCoupon: false,
                    removingCoupon: false,
                    fetchingShippingMethods: false
                };
                draft.loading = false;
                break;
            case 'SET_SPECIFIC_LOADING':
                const { operation, loading, itemId } = action.payload;
                if (operation === 'removingItem' || operation === 'updatingItem') {
                    draft.loadingStates[operation] = loading ? itemId || null : null;
                }
                else {
                    draft.loadingStates[operation] = loading;
                }
                // Update overall loading state based on loadingStates
                draft.loading = Object.values(draft.loadingStates).some((state) => state === true || (typeof state === 'string' && state !== null));
                break;
            case 'SET_ERROR':
                if (draft.data) {
                    draft.data.error = action.payload;
                }
                // Clear all loading states on error
                draft.loadingStates = {
                    addingItem: false,
                    removingItem: null,
                    updatingItem: null,
                    addingPaymentMethod: false,
                    addingShippingMethod: false,
                    addingShippingAddress: false,
                    addingBillingAddress: false,
                    addingContactInfo: false,
                    applyingCoupon: false,
                    removingCoupon: false,
                    fetchingShippingMethods: false
                };
                draft.loading = false;
                break;
            case 'CLEAR_ERROR':
                if (draft.data) {
                    draft.data.error = null;
                    draft.data.errors = [];
                }
                break;
            case 'SET_SYNC_STATUS':
                Object.assign(draft.syncStatus, action.payload);
                break;
        }
    });
};
const CartStateContext = (0,react.createContext)(undefined);
const CartDispatchContext = (0,react.createContext)(undefined);
const initialEmptyState = {
    data: {
        currency: 'USD',
        addItemApi: '', // initial addItemApi
        items: [],
        totalQty: 0,
        totalWeight: { value: 0, unit: 'kg' },
        billingAddress: undefined,
        shippingAddress: undefined,
        errors: [],
        error: null,
        taxAmount: { value: 0, text: '0.00' },
        totalTaxAmount: { value: 0, text: '0.00' },
        taxAmountBeforeDiscount: { value: 0, text: '0.00' },
        discountAmount: { value: 0, text: '0.00' },
        shippingFeeExclTax: { value: 0, text: '0.00' },
        shippingFeeInclTax: { value: 0, text: '0.00' },
        shippingTaxAmount: { value: 0, text: '0.00' },
        subTotal: { value: 0, text: '0.00' },
        subTotalInclTax: { value: 0, text: '0.00' },
        subTotalWithDiscount: { value: 0, text: '0.00' },
        subTotalWithDiscountInclTax: { value: 0, text: '0.00' },
        grandTotal: { value: 0, text: '0.00' },
        createdAt: { value: '', text: '' },
        updatedAt: { value: '', text: '' },
        coupon: '',
        addPaymentMethodApi: '', // Will be set by server
        addShippingMethodApi: '', // Will be set by server
        addAddressApi: '', // Will be set by server
        applyCouponApi: '', // Will be set by server
        addNoteApi: '', // Will be set by server
        addContactInfoApi: '', // Will be set by server
        checkoutApi: '', // Will be set by server
        availablePaymentMethods: [],
        availableShippingMethods: []
    },
    loading: false,
    loadingStates: {
        addingItem: false,
        removingItem: null,
        updatingItem: null,
        addingPaymentMethod: false,
        addingShippingMethod: false,
        addingShippingAddress: false,
        addingBillingAddress: false,
        addingContactInfo: false,
        applyingCoupon: false,
        removingCoupon: false,
        fetchingShippingMethods: false
    },
    syncStatus: {
        syncing: false,
        synced: false,
        trigger: undefined
    }
};
const CartProvider = ({ children, query, cart, addMineCartItemApi }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const client = useClient(); // Get urql client for GraphQL queries
    const hydratedInitialState = {
        loading: initialEmptyState.loading,
        loadingStates: { ...initialEmptyState.loadingStates },
        syncStatus: { ...initialEmptyState.syncStatus }
    };
    if (cart) {
        hydratedInitialState.data = cart;
    }
    else {
        hydratedInitialState.data = {
            ...initialEmptyState.data,
            addItemApi: addMineCartItemApi
        };
    }
    const [state, dispatch] = (0,react.useReducer)(cartReducer, hydratedInitialState);
    // Use urql to query cart data
    const [cartQueryResult, refetchCart] = useQuery({
        query: query,
        pause: true
    });
    const retry = async function (fn, retries = 2, delay = 1000) {
        try {
            return await fn();
        }
        catch (error) {
            if (retries > 0) {
                await new Promise((resolve) => setTimeout(resolve, delay));
                return retry(fn, retries - 1, delay * 2);
            }
            throw error;
        }
    };
    const syncCartWithServer = (0,react.useCallback)(async (trigger) => {
        try {
            // Set syncing to true and synced to false when starting sync
            dispatch({
                type: 'SET_SYNC_STATUS',
                payload: { syncing: true, synced: false, trigger }
            });
            await refetchCart({ requestPolicy: 'network-only' });
            // Set syncing to false and synced to true on success
            dispatch({
                type: 'SET_SYNC_STATUS',
                payload: { syncing: false, synced: true, trigger }
            });
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error ? error.message : 'Failed to sync cart'
            });
            // Set syncing to false and keep synced as false on error
            dispatch({
                type: 'SET_SYNC_STATUS',
                payload: { syncing: false, synced: false, trigger }
            });
        }
    }, [refetchCart]);
    // Effect to update cart when GraphQL query result changes
    react.useEffect(() => {
        var _a;
        // Only process if we have fetched data (either successful or error state)
        if (cartQueryResult.fetching === false) {
            if ((_a = cartQueryResult.data) === null || _a === void 0 ? void 0 : _a.myCart) {
                const serverCart = cartQueryResult.data.myCart;
                dispatch({
                    type: 'SET_CART',
                    payload: serverCart
                });
            }
            else if (cartQueryResult.error) {
                // Handle error case
                dispatch({
                    type: 'SET_ERROR',
                    payload: cartQueryResult.error.message || 'Failed to fetch cart data'
                });
            }
            else if (cartQueryResult.operation) {
                // Query executed but returned no data - initialize empty cart
                dispatch({
                    type: 'SET_CART',
                    payload: {
                        ...initialEmptyState.data,
                        addItemApi: addMineCartItemApi
                    }
                });
            }
        }
    }, [
        cartQueryResult.data,
        cartQueryResult.error,
        cartQueryResult.fetching,
        cartQueryResult.operation
    ]);
    react.useEffect(() => {
        if (cart && JSON.stringify(cart) !== JSON.stringify(state.data)) {
            dispatch({ type: 'SET_CART', payload: cart });
        }
    }, [cart]);
    const addItem = (0,react.useCallback)(async (payload) => {
        var _a;
        if (!state.data) {
            throw new Error('Cannot add item: cart not initialized');
        }
        try {
            // Set specific loading state
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingItem', loading: true }
            });
            // Server request with retry
            const response = await retry(() => fetch(state.data.addItemApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }));
            const json = (await response.json());
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to add item.');
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.ADD_ITEM);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error ? error.message : 'Failed to add item'
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingItem', loading: false }
            });
        }
    }, [(_a = state.data) === null || _a === void 0 ? void 0 : _a.addItemApi, syncCartWithServer]);
    const removeItem = (0,react.useCallback)(async (itemId) => {
        var _a;
        if (!state.data) {
            throw new Error('Cannot remove item: cart not initialized');
        }
        const item = state.data.items.find((item) => item.cartItemId === itemId);
        if (!item) {
            throw new Error('Item not found in cart');
        }
        try {
            // Set specific loading state for this item
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'removingItem', loading: true, itemId }
            });
            // Server request with retry using item's remove API
            const response = await retry(() => fetch(item.removeApi, {
                method: 'DELETE'
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to remove item.');
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.REMOVE_ITEM);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error ? error.message : 'Failed to remove item'
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'removingItem', loading: false }
            });
        }
    }, [state, syncCartWithServer]);
    const updateItem = (0,react.useCallback)(async (itemId, payload) => {
        var _a;
        if (!state.data) {
            throw new Error('Cannot update item: cart not initialized');
        }
        const item = state.data.items.find((item) => item.cartItemId === itemId);
        if (!item) {
            throw new Error('Item not found in cart');
        }
        try {
            // Set specific loading state for this item
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'updatingItem', loading: true, itemId }
            });
            // Server request with retry using item's update API
            const response = await retry(() => fetch(item.updateQtyApi, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to update item.');
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.UPDATE_ITEM);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error ? error.message : 'Failed to update item'
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'updatingItem', loading: false }
            });
        }
    }, [state, syncCartWithServer]);
    // Clear error function
    const clearError = (0,react.useCallback)(() => {
        dispatch({ type: 'CLEAR_ERROR' });
    }, []);
    // Add payment method
    const addPaymentMethod = (0,react.useCallback)(async (code, name) => {
        var _a;
        if (!state.data) {
            throw new Error(_('Cannot add payment method: cart not initialized'));
        }
        try {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingPaymentMethod', loading: true }
            });
            const response = await retry(() => fetch(state.data.addPaymentMethodApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ method_code: code, method_name: name })
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || _('Failed to add payment method.'));
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.ADD_PAYMENT_METHOD);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error
                    ? error.message
                    : _('Failed to add payment method')
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingPaymentMethod', loading: false }
            });
        }
    }, [(_b = state.data) === null || _b === void 0 ? void 0 : _b.addPaymentMethodApi, syncCartWithServer]);
    // Add shipping method
    const addShippingMethod = (0,react.useCallback)(async (code, name) => {
        var _a;
        if (!state.data) {
            throw new Error(_('Cannot add shipping method: cart not initialized'));
        }
        try {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingShippingMethod', loading: true }
            });
            const response = await retry(() => fetch(state.data.addShippingMethodApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ method_code: code, method_name: name })
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || _('Failed to add shipping method.'));
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.ADD_SHIPPING_METHOD);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error
                    ? error.message
                    : _('Failed to add shipping method')
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingShippingMethod', loading: false }
            });
        }
    }, [(_c = state.data) === null || _c === void 0 ? void 0 : _c.addShippingMethodApi, syncCartWithServer]);
    // Add shipping address
    const addShippingAddress = (0,react.useCallback)(async (address) => {
        var _a;
        if (!state.data) {
            throw new Error(_('Cannot add shipping address: cart not initialized'));
        }
        try {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingShippingAddress', loading: true }
            });
            const response = await retry(() => fetch(state.data.addAddressApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address: { ...address }, type: 'shipping' })
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || _('Failed to add shipping address.'));
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.ADD_SHIPPING_ADDRESS);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error
                    ? error.message
                    : _('Failed to add shipping address')
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingShippingAddress', loading: false }
            });
        }
    }, [(_d = state.data) === null || _d === void 0 ? void 0 : _d.addAddressApi, syncCartWithServer]);
    // Add billing address
    const addBillingAddress = (0,react.useCallback)(async (address) => {
        var _a;
        if (!state.data) {
            throw new Error(_('Cannot add billing address: cart not initialized'));
        }
        try {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingBillingAddress', loading: true }
            });
            const response = await retry(() => fetch(state.data.addAddressApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address: { ...address }, type: 'billing' })
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || _('Failed to add billing address.'));
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.ADD_BILLING_ADDRESS);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error
                    ? error.message
                    : _('Failed to add billing address')
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingBillingAddress', loading: false }
            });
        }
    }, [(_e = state.data) === null || _e === void 0 ? void 0 : _e.addAddressApi, syncCartWithServer]);
    // Add contact info
    const addContactInfo = (0,react.useCallback)(async (contactInfo) => {
        var _a;
        if (!state.data) {
            throw new Error(_('Cannot add contact info: cart not initialized'));
        }
        try {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingContactInfo', loading: true }
            });
            const response = await retry(() => fetch(state.data.addContactInfoApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactInfo)
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || _('Failed to add contact info.'));
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.ADD_CONTACT_INFO);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error
                    ? error.message
                    : _('Failed to add contact info')
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'addingContactInfo', loading: false }
            });
        }
    }, [(_f = state.data) === null || _f === void 0 ? void 0 : _f.addContactInfoApi, syncCartWithServer]);
    // Apply coupon
    const applyCoupon = (0,react.useCallback)(async (couponCode) => {
        var _a;
        if (!state.data) {
            throw new Error(_('Cannot apply coupon: cart not initialized'));
        }
        try {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'applyingCoupon', loading: true }
            });
            const response = await retry(() => fetch(state.data.applyCouponApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ coupon: couponCode })
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to apply coupon.');
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.APPLY_COUPON);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error ? error.message : 'Failed to apply coupon'
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'applyingCoupon', loading: false }
            });
        }
    }, [(_g = state.data) === null || _g === void 0 ? void 0 : _g.applyCouponApi, syncCartWithServer]);
    // Remove coupon
    const removeCoupon = (0,react.useCallback)(async () => {
        var _a, _b;
        if (!state.data) {
            throw new Error(_('Cannot remove coupon: cart not initialized'));
        }
        if (!((_a = state.data) === null || _a === void 0 ? void 0 : _a.removeCouponApi)) {
            throw new Error(_('No coupon to remove'));
        }
        try {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'removingCoupon', loading: true }
            });
            const response = await retry(() => fetch(state.data.removeCouponApi, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_b = json.error) === null || _b === void 0 ? void 0 : _b.message) || _('Failed to remove coupon.'));
            }
            // Sync with server (both immediate update and GraphQL refetch)
            await syncCartWithServer(CartSyncTrigger.REMOVE_COUPON);
        }
        catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error instanceof Error ? error.message : _('Failed to remove coupon')
            });
            throw error;
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'removingCoupon', loading: false }
            });
        }
    }, [(_h = state.data) === null || _h === void 0 ? void 0 : _h.removeCouponApi, syncCartWithServer]);
    // Check if shipping is required
    // Note: Currently assumes all items require shipping
    // If you need to support virtual/downloadable products, add a 'virtual' or 'requiresShipping' field to CartItem
    const isShippingRequired = (0,react.useCallback)(() => {
        if (!state.data)
            return false;
        // If there are items in the cart, shipping is required
        // This can be enhanced with a virtual/downloadable product check if needed
        return state.data.items.length > 0;
    }, [(_j = state.data) === null || _j === void 0 ? void 0 : _j.items]);
    // Check if cart is ready for checkout
    const isReadyForCheckout = (0,react.useCallback)(() => {
        if (!state.data)
            return false;
        const hasItems = state.data.items.length > 0;
        const hasBillingAddress = !!state.data.billingAddress;
        const hasShippingAddress = !isShippingRequired() || !!state.data.shippingAddress;
        const noErrors = state.data.errors.length === 0;
        return hasItems && hasBillingAddress && hasShippingAddress && noErrors;
    }, [state.data, isShippingRequired]);
    // Get validation errors
    const getErrors = (0,react.useCallback)(() => {
        var _a, _b;
        return (_b = (_a = state.data) === null || _a === void 0 ? void 0 : _a.errors) !== null && _b !== void 0 ? _b : [];
    }, [(_k = state.data) === null || _k === void 0 ? void 0 : _k.errors]);
    // Get cart ID
    const getId = (0,react.useCallback)(() => {
        var _a, _b;
        return (_b = (_a = state.data) === null || _a === void 0 ? void 0 : _a.uuid) !== null && _b !== void 0 ? _b : null;
    }, [(_l = state.data) === null || _l === void 0 ? void 0 : _l.uuid]);
    // Fetch available shipping methods based on address parameters and update cart state
    const fetchAvailableShippingMethods = (0,react.useCallback)(async (params) => {
        var _a, _b, _c;
        if (!((_a = state.data) === null || _a === void 0 ? void 0 : _a.uuid)) {
            throw new Error('Cannot fetch shipping methods: cart not initialized');
        }
        try {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'fetchingShippingMethods', loading: true }
            });
            const result = await client
                .query(ShippingMethodsQuery, {
                country: params.country,
                province: params.province || null,
                postcode: params.postcode || null
            })
                .toPromise();
            if (result.error) {
                throw new Error(result.error.message || 'Failed to fetch shipping methods');
            }
            // Update cart state with new shipping methods
            if ((_c = (_b = result.data) === null || _b === void 0 ? void 0 : _b.myCart) === null || _c === void 0 ? void 0 : _c.availableShippingMethods) {
                dispatch({
                    type: 'SET_CART',
                    payload: {
                        availableShippingMethods: result.data.myCart.availableShippingMethods
                    }
                });
            }
        }
        catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : 'Failed to fetch shipping methods';
            dispatch({
                type: 'SET_ERROR',
                payload: errorMessage
            });
            throw new Error(errorMessage);
        }
        finally {
            dispatch({
                type: 'SET_SPECIFIC_LOADING',
                payload: { operation: 'fetchingShippingMethods', loading: false }
            });
        }
    }, [(_m = state.data) === null || _m === void 0 ? void 0 : _m.uuid, client]);
    const cartDispatch = {
        addItem,
        removeItem,
        updateItem,
        addPaymentMethod,
        addShippingMethod,
        addShippingAddress,
        addBillingAddress,
        addContactInfo,
        applyCoupon,
        removeCoupon,
        clearError,
        isShippingRequired,
        isReadyForCheckout,
        getErrors,
        getId,
        fetchAvailableShippingMethods,
        syncCartWithServer
    };
    return (react.createElement(CartStateContext.Provider, { value: state },
        react.createElement(CartDispatchContext.Provider, { value: cartDispatch }, children)));
};
const useCartState = () => {
    const context = (0,react.useContext)(CartStateContext);
    if (!context) {
        throw new Error('useCartState must be used within a CartProvider');
    }
    return context;
};
const useCartDispatch = () => {
    const context = (0,react.useContext)(CartDispatchContext);
    if (!context) {
        throw new Error('useCartDispatch must be used within a CartProvider');
    }
    return context;
};
//# sourceMappingURL=CartContext.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/customer/CustomerContext.js




const initialState = {
    customer: undefined,
    isLoading: false
};
const customerReducer = (state, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'SET_LOADING':
                draft.isLoading = action.payload;
                break;
            case 'SET_CUSTOMER':
                draft.customer = action.payload;
                draft.isLoading = false;
                break;
            case 'LOGOUT':
                draft.customer = undefined;
                draft.isLoading = false;
                break;
        }
    });
};
const CustomerContext = (0,react.createContext)(undefined);
const CustomerDispatchContext = (0,react.createContext)(undefined);
const retry = async (fn, retries = 3, delay = 1000) => {
    try {
        return await fn();
    }
    catch (error) {
        if (retries > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            return retry(fn, retries - 1, delay * 2);
        }
        throw error;
    }
};
function CustomerProvider({ children, loginAPI, registerAPI, logoutAPI, initialCustomer }) {
    const [state, dispatch] = (0,react.useReducer)(customerReducer, {
        ...initialState,
        customer: initialCustomer
    });
    const appDispatch = useAppDispatch();
    // Effect to update customer when initialCustomer prop changes
    (0,react.useEffect)(() => {
        // Compare by JSON string to handle object changes properly
        const currentCustomerStr = JSON.stringify(state.customer);
        const initialCustomerStr = JSON.stringify(initialCustomer);
        if (initialCustomerStr !== currentCustomerStr) {
            dispatch({ type: 'SET_CUSTOMER', payload: initialCustomer });
        }
    }, [initialCustomer]);
    // Helper function to get current URL with isAjax=true
    const getCurrentAjaxUrl = (0,react.useCallback)(() => {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('ajax', 'true');
        return currentUrl.toString();
    }, []);
    // Login function
    const login = (0,react.useCallback)(async (email, password, redirectUrl) => {
        var _a;
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const response = await retry(() => fetch(loginAPI, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || _('Login failed'));
            }
            // Trigger page data refresh which will update customer via useEffect
            await appDispatch.fetchPageData(getCurrentAjaxUrl());
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
            return true;
        }
        catch (error) {
            dispatch({ type: 'SET_LOADING', payload: false });
            throw error;
        }
    }, [loginAPI, appDispatch, getCurrentAjaxUrl]);
    const register = (0,react.useCallback)(async (data, loginIfSuccess, redirectUrl) => {
        var _a;
        if (state.customer) {
            throw new Error(_('You are already logged in'));
        }
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const response = await retry(() => fetch(registerAPI, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }));
            const json = await response.json();
            if (!response.ok) {
                throw new Error(((_a = json.error) === null || _a === void 0 ? void 0 : _a.message) || _('Registration failed'));
            }
            // Trigger page data refresh which will update customer via useEffect
            await appDispatch.fetchPageData(getCurrentAjaxUrl());
            if (loginIfSuccess) {
                // Auto login after successful registration
                await login(data.email, data.password, redirectUrl);
            }
            return true;
        }
        catch (error) {
            dispatch({ type: 'SET_LOADING', payload: false });
            throw error;
        }
    }, [registerAPI, appDispatch, getCurrentAjaxUrl]);
    // Logout function
    const logout = (0,react.useCallback)(async () => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            await retry(() => fetch(logoutAPI, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }));
            // After successful logout, clear customer data locally
            dispatch({ type: 'LOGOUT' });
        }
        catch (error) {
            // Even if logout API fails, clear local customer data
            dispatch({ type: 'LOGOUT' });
            throw error;
        }
        finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    }, [logoutAPI]);
    // Set customer directly (for external updates)
    const setCustomer = (0,react.useCallback)((customer) => {
        dispatch({ type: 'SET_CUSTOMER', payload: customer });
    }, []);
    // Add address function
    const addAddress = (0,react.useCallback)(async (addressData) => {
        var _a, _b;
        if (!((_a = state.customer) === null || _a === void 0 ? void 0 : _a.addAddressApi)) {
            throw new Error(_('Add address API not available'));
        }
        dispatch({ type: 'SET_LOADING', payload: true });
        const response = await retry(() => fetch(state.customer.addAddressApi, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addressData)
        }));
        const json = await response.json();
        if (!response.ok) {
            throw new Error(((_b = json.error) === null || _b === void 0 ? void 0 : _b.message) || _('Failed to add address'));
        }
        if (json.error) {
            throw new Error(json.error.message || _('Failed to add address'));
        }
        // Sync with server to get fresh customer data including the new address
        await appDispatch.fetchPageData(getCurrentAjaxUrl());
        // Return the address from the API response for immediate use
        const newAddress = json.data;
        if (!newAddress) {
            throw new Error(_('No address data received'));
        }
        return newAddress;
    }, [state.customer, appDispatch, getCurrentAjaxUrl]);
    // Update address function
    const updateAddress = (0,react.useCallback)(async (addressId, addressData) => {
        var _a, _b, _c;
        const address = (_b = (_a = state.customer) === null || _a === void 0 ? void 0 : _a.addresses) === null || _b === void 0 ? void 0 : _b.find((addr) => addr.addressId === addressId);
        if (!(address === null || address === void 0 ? void 0 : address.updateApi)) {
            throw new Error(_('Update address API not available'));
        }
        dispatch({ type: 'SET_LOADING', payload: true });
        const response = await retry(() => fetch(address.updateApi, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addressData)
        }));
        const json = await response.json();
        if (!response.ok) {
            throw new Error(((_c = json.error) === null || _c === void 0 ? void 0 : _c.message) || _('Failed to update address'));
        }
        if (json.error) {
            throw new Error(json.error.message || _('Failed to update address'));
        }
        // Sync with server to get fresh customer data including the updated address
        await appDispatch.fetchPageData(getCurrentAjaxUrl());
        // Return the address from the API response for immediate use
        const updatedAddress = json.data;
        if (!updatedAddress) {
            throw new Error(_('No address data received'));
        }
        return updatedAddress;
    }, [state.customer, appDispatch, getCurrentAjaxUrl]);
    // Delete address function
    const deleteAddress = (0,react.useCallback)(async (addressId) => {
        var _a, _b, _c;
        const address = (_b = (_a = state.customer) === null || _a === void 0 ? void 0 : _a.addresses) === null || _b === void 0 ? void 0 : _b.find((addr) => addr.addressId === addressId);
        if (!(address === null || address === void 0 ? void 0 : address.deleteApi)) {
            throw new Error(_('Delete address API not available'));
        }
        dispatch({ type: 'SET_LOADING', payload: true });
        const response = await retry(() => fetch(address.deleteApi, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }));
        const json = await response.json();
        if (!response.ok) {
            throw new Error(((_c = json.error) === null || _c === void 0 ? void 0 : _c.message) || _('Failed to delete address'));
        }
        if (json.error) {
            throw new Error(json.error.message || _('Failed to delete address'));
        }
        await appDispatch.fetchPageData(getCurrentAjaxUrl());
    }, [state.customer, appDispatch, getCurrentAjaxUrl]);
    const contextValue = (0,react.useMemo)(() => ({
        ...state
    }), [state]);
    const dispatchMethods = (0,react.useMemo)(() => ({
        login,
        register,
        logout,
        setCustomer,
        addAddress,
        updateAddress,
        deleteAddress
    }), [login, logout, setCustomer, addAddress, updateAddress, deleteAddress]);
    return (react.createElement(CustomerDispatchContext.Provider, { value: dispatchMethods },
        react.createElement(CustomerContext.Provider, { value: contextValue }, children)));
}
const useCustomer = () => {
    const context = useContext(CustomerContext);
    if (context === undefined) {
        throw new Error('useCustomer must be used within a CustomerProvider');
    }
    return context;
};
const useCustomerDispatch = () => {
    const context = useContext(CustomerDispatchContext);
    if (context === undefined) {
        throw new Error('useCustomerDispatch must be used within a CustomerProvider');
    }
    return context;
};
//# sourceMappingURL=CustomerContext.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/Footer.js


function Footer({ copyRight }) {
    return (react.createElement("footer", { className: "footer bg-gray-100 mt-24 pt-2.5 pb-2.5 border-t border-gray-300" },
        react.createElement(common_Area, { id: "footerTop", className: "footer__top" }),
        react.createElement("div", { className: "footer__middle flex justify-between items-center" },
            react.createElement(common_Area, { id: "footerMiddleLeft", className: "footer__middle__left" }),
            react.createElement(common_Area, { id: "footerMiddleCenter", className: "footer__middle__center" }),
            react.createElement(common_Area, { id: "footerMiddleRight", className: "footer__middle__right" })),
        react.createElement(common_Area, { id: "footerBottom", className: "footer__bottom", coreComponents: [
                {
                    component: {
                        default: (react.createElement("div", { className: "page-width grid grid-cols-1 md:grid-cols-2 gap-5 justify-between" },
                            react.createElement("div", null,
                                react.createElement("div", { className: "card-icons flex justify-center space-x-2 md:justify-start" },
                                    react.createElement("div", null,
                                        react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "38", height: "24", "aria-labelledby": "pi-visa", viewBox: "0 0 38 24", className: "h-10" },
                                            react.createElement("path", { d: "M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z", opacity: "0.07" }),
                                            react.createElement("path", { fill: "#fff", d: "M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" }),
                                            react.createElement("path", { fill: "#142688", d: "M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" }))),
                                    react.createElement("div", null,
                                        react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "38", height: "24", "aria-labelledby": "pi-master", viewBox: "0 0 38 24", className: "h-10" },
                                            react.createElement("path", { d: "M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z", opacity: "0.07" }),
                                            react.createElement("path", { fill: "#fff", d: "M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" }),
                                            react.createElement("circle", { cx: "15", cy: "12", r: "7", fill: "#EB001B" }),
                                            react.createElement("circle", { cx: "23", cy: "12", r: "7", fill: "#F79E1B" }),
                                            react.createElement("path", { fill: "#FF5F00", d: "M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z" }))),
                                    react.createElement("div", null,
                                        react.createElement("svg", { viewBox: "0 0 38 24", xmlns: "http://www.w3.org/2000/svg", width: "38", height: "24", role: "img", "aria-labelledby": "pi-paypal", className: "h-10" },
                                            react.createElement("title", { id: "pi-paypal" }, "PayPal"),
                                            react.createElement("path", { opacity: ".07", d: "M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" }),
                                            react.createElement("path", { fill: "#fff", d: "M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" }),
                                            react.createElement("path", { fill: "#003087", d: "M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z" }),
                                            react.createElement("path", { fill: "#3086C8", d: "M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z" }),
                                            react.createElement("path", { fill: "#012169", d: "M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z" }))))),
                            react.createElement("div", { className: "self-center" },
                                react.createElement("div", { className: "copyright text-center md:text-right text-textSubdued" },
                                    react.createElement("span", null, copyRight)))))
                    },
                    sortOrder: 10
                }
            ] })));
}
//# sourceMappingURL=Footer.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/Header.js


function Header() {
    return (react.createElement("header", { className: "header px-6" },
        react.createElement(common_Area, { id: "headerTop", className: "header__top" }),
        react.createElement("div", { className: "header__middle grid grid-cols-3" },
            react.createElement(common_Area, { id: "headerMiddleLeft", className: "header__middle__left flex justify-start items-center" }),
            react.createElement(common_Area, { id: "headerMiddleCenter", className: "header__middle__center flex justify-center items-center" }),
            react.createElement(common_Area, { id: "headerMiddleRight", className: "header__middle__right flex justify-end items-center gap-3" })),
        react.createElement(common_Area, { id: "headerBottom", className: "header__bottom" })));
}
//# sourceMappingURL=Header.js.map
;// ./node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Base.js







function Base({ myCart, customer, themeConfig, addMineCartItemApi, loginApi, logoutApi, registerApi }) {
    return (react.createElement(CustomerProvider, { initialCustomer: customer, loginAPI: loginApi, logoutAPI: logoutApi, registerAPI: registerApi },
        react.createElement(CartProvider, { cart: myCart, query: `${query}\n${fragments}`, addMineCartItemApi: addMineCartItemApi },
            react.createElement(LoadingBar, null),
            react.createElement(Header, null),
            react.createElement("main", { className: "content" },
                react.createElement(common_Area, { id: "content", noOuter: true })),
            react.createElement(Footer, { copyRight: themeConfig.copyRight }))));
}
const layout = {
    areaId: 'body',
    sortOrder: 1
};
const query = `
  query Query {
    myCart {
      ...ShoppingCart
      addItemApi
      addPaymentMethodApi
      addShippingMethodApi
      addContactInfoApi
      addAddressApi
      addNoteApi
      checkoutApi
      applyCouponApi
      removeCouponApi
      availableShippingMethods {
        code
        name
        cost {
          value
          text
        }
      }
      availablePaymentMethods {
        code
        name
      }
      items {
        ...ShoppingCartItem
        cartItemId
        removeApi
        updateQtyApi
        errors
      }
    }
    customer: currentCustomer {
      customerId
      uuid
      email
      fullName
      groupId
      createdAt {
        value
        text
      }
      addAddressApi
      addresses {
        addressId
        uuid
        fullName
        telephone 
        address1
        address2
        city
        province {
          code
          name
        }
        country {
          code
          name
        }
        postcode
        isDefault
        updateApi
        deleteApi
      }
      orders {
        ...ShoppingCart
        orderId
        status {
          name
          code
          badge
        }
        orderNumber
        shipmentStatus {
          name
          code
          badge
        }
        paymentStatus {
          name
          code
          badge
        }
        items {
          ...ShoppingCartItem
          orderItemId
        }
      }
    }
    themeConfig {
      copyRight
    }
    addMineCartItemApi: url(routeId: "addMineCartItem")
    loginApi: url(routeId: "customerLoginJson")
    registerApi: url(routeId: "createCustomer")
    logoutApi: url(routeId: "customerLogoutJson")
  }
`;
const fragments = `
  fragment ShoppingCart on ShoppingCart {
    uuid
    currency
    customerId
    customerGroupId
    customerEmail
    customerFullName
    coupon
    shippingMethod
    shippingMethodName
    paymentMethod
    paymentMethodName
    shippingNote
    taxAmount {
      value
      text
    }
    totalTaxAmount {
      value
      text
    }
    discountAmount {
      value
      text
    }
    shippingFeeExclTax {
      value
      text
    }
    shippingFeeInclTax {
      value
      text
    }
    shippingTaxAmount {
      value
      text
    }
    subTotal {
      value
      text
    }
    subTotalInclTax {
      value
      text
    }
    subTotalWithDiscount {
      value
      text
    }
    subTotalWithDiscountInclTax {
      value
      text
    }
    totalQty
    totalWeight {
      value
      unit
    }
    taxAmountBeforeDiscount {
      value
      text
    }
    grandTotal {
      value
      text
    }
    billingAddress {
      fullName
      telephone
      address1
      address2
      city
      province {
        name
        code
      }
      country {
        name
        code
      }
      postcode
    }
    shippingAddress {
      fullName
      telephone
      address1
      address2
      city
      province {
        name
        code
      }
      country {
        name
        code
      }
      postcode
    }
    createdAt {
      value
      text
    }
    updatedAt  {
      value
      text
    }
  }

  fragment ShoppingCartItem on ShoppingCartItem {
    uuid
    productId
    productSku
    productName
    thumbnail
    productWeight {
      value
      unit
    }
    productPrice {
      value
      text
    }
    productPriceInclTax {
      value
      text
    }
    qty
    finalPrice {
      value
      text
    }
    finalPriceInclTax {
      value
      text
    }
    taxPercent
    taxAmount {
      value
      text
    }
    taxAmountBeforeDiscount {
      value
      text
    }
    discountAmount {
      value
      text
    }
    lineTotal {
      value
      text
    }
    subTotal {
      value
      text
    }
    lineTotalWithDiscount {
      value
      text
    }
    lineTotalWithDiscountInclTax {
      value
      text
    }
    lineTotalInclTax {
      value
      text
    }
    total {
      value
      text
    }
    variantGroupId
    variantOptions {
      attributeCode
      attributeName
      attributeId
      optionId
      optionText
    }
    productUrl
  }
`;
//# sourceMappingURL=Base.js.map
;// ./node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Breadcrumb.js

function Breadcrumb({ pageInfo: { breadcrumbs } }) {
    return breadcrumbs.length ? (react.createElement("div", { className: "page-width" },
        react.createElement("div", { className: "breadcrumb py-5" }, breadcrumbs.map((breadcrumb, index) => index === breadcrumbs.length - 1 ? (react.createElement("span", { key: index }, breadcrumb.title)) : (react.createElement("span", { key: index },
            react.createElement("a", { href: breadcrumb.url, className: "text-interactive" }, breadcrumb.title),
            react.createElement("span", null, ' / '))))))) : null;
}
const Breadcrumb_query = (/* unused pure expression or super */ null && (`
  query query {
    pageInfo {
      breadcrumbs {
        title
        url
      }
    }
  }
`));
const Breadcrumb_layout = {
    areaId: 'content',
    sortOrder: 0
};
/* harmony default export */ const all_Breadcrumb = (Breadcrumb);
//# sourceMappingURL=Breadcrumb.js.map
;// ./node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/GlobalCss.js

function GlobalCss() {
    return null;
}
const GlobalCss_layout = {
    areaId: 'head',
    sortOrder: 5
};
//# sourceMappingURL=GlobalCss.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/Meta.js
/* eslint-disable no-console */

const VALID_HTTP_EQUIV = (/* unused pure expression or super */ null && ([
    'content-type',
    'default-style',
    'refresh',
    'x-ua-compatible',
    'content-security-policy'
]));
const REQUIRED_CONTENT_ATTRIBUTES = (/* unused pure expression or super */ null && ([
    'name',
    'property',
    'itemProp',
    'httpEquiv'
]));
function validateMetaProps(props) {
    const errors = [];
    const hasIdentifier = [
        'name',
        'property',
        'itemProp',
        'httpEquiv',
        'charset'
    ].some((attr) => props[attr] !== undefined);
    if (!hasIdentifier) {
        errors.push('Meta tag must have at least one identifier attribute (name, property, itemProp, httpEquiv, or charset)');
    }
    if (props.charset && props.charset.toLowerCase() !== 'utf-8') {
        errors.push('charset attribute must be "utf-8" for HTML5 documents');
    }
    if (props.itemProp && (props.name || props.httpEquiv || props.charset)) {
        errors.push('itemProp attribute cannot be used with name, http-equiv, or charset attributes');
    }
    const needsContent = REQUIRED_CONTENT_ATTRIBUTES.some((attr) => props[attr] !== undefined);
    if (needsContent && !props.content) {
        errors.push('Meta tag with name, property, itemProp, or httpEquiv must have content attribute');
    }
    if (props.media && props.name !== 'theme-color') {
        errors.push('media attribute is only valid when name="theme-color"');
    }
    if (props.httpEquiv && !VALID_HTTP_EQUIV.includes(props.httpEquiv)) {
        errors.push(`Invalid httpEquiv value: ${props.httpEquiv}. Valid values: ${VALID_HTTP_EQUIV.join(', ')}`);
    }
    const identifierCount = ['name', 'property', 'itemProp'].filter((attr) => props[attr] !== undefined).length;
    if (identifierCount > 1) {
        errors.push('Meta tag cannot have multiple identifier attributes (name, property, itemProp)');
    }
    if (props.itemProp) {
        if (props.itemType && !props.itemType.startsWith('http')) {
            errors.push('itemType should be a valid URL (typically schema.org URL)');
        }
    }
    return {
        isValid: errors.length === 0,
        errors
    };
}
function sanitizeMetaProps(props) {
    const allowedAttributes = [
        'charset',
        'name',
        'content',
        'httpEquiv',
        'property',
        'itemProp',
        'itemType',
        'itemId',
        'lang',
        'scheme',
        'media'
    ];
    return Object.keys(props)
        .filter((key) => allowedAttributes.includes(key) &&
        props[key] !== undefined &&
        props[key] !== null)
        .reduce((obj, key) => {
        obj[key] = String(props[key]).trim();
        return obj;
    }, {});
}
function Meta(props) {
    if (false) // removed by dead control flow
{}
    const sanitizedProps = sanitizeMetaProps(props);
    if (Object.keys(sanitizedProps).length === 0) {
        if (false) // removed by dead control flow
{}
        return null;
    }
    return react.createElement("meta", { ...sanitizedProps });
}
function MetaCharset({ charset = 'utf-8' } = {}) {
    return React.createElement(Meta, { charset: charset });
}
function MetaDescription({ description }) {
    return React.createElement(Meta, { name: "description", content: description });
}
function MetaKeywords({ keywords }) {
    const keywordString = Array.isArray(keywords)
        ? keywords.join(', ')
        : keywords;
    return React.createElement(Meta, { name: "keywords", content: keywordString });
}
function MetaAuthor({ author }) {
    return React.createElement(Meta, { name: "author", content: author });
}
function MetaThemeColor({ color, media }) {
    return React.createElement(Meta, { name: "theme-color", content: color, media: media });
}
function MetaViewport({ width = 'device-width', initialScale = 1, maximumScale, userScalable = true }) {
    const parts = [`width=${width}`, `initial-scale=${initialScale}`];
    if (maximumScale !== undefined) {
        parts.push(`maximum-scale=${maximumScale}`);
    }
    if (!userScalable) {
        parts.push('user-scalable=no');
    }
    return React.createElement(Meta, { name: "viewport", content: parts.join(', ') });
}
function MetaHttpEquiv({ httpEquiv, content }) {
    return React.createElement(Meta, { httpEquiv: httpEquiv, content: content });
}
function MetaOpenGraph({ type, title, description, image, url, siteName }) {
    return (React.createElement(React.Fragment, null,
        type && React.createElement(Meta, { property: "og:type", content: type }),
        title && React.createElement(Meta, { property: "og:title", content: title }),
        description && React.createElement(Meta, { property: "og:description", content: description }),
        image && React.createElement(Meta, { property: "og:image", content: image }),
        url && React.createElement(Meta, { property: "og:url", content: url }),
        siteName && React.createElement(Meta, { property: "og:site_name", content: siteName })));
}
function MetaTwitterCard({ card = 'summary', site, creator, title, description, image }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Meta, { name: "twitter:card", content: card }),
        site && React.createElement(Meta, { name: "twitter:site", content: site }),
        creator && React.createElement(Meta, { name: "twitter:creator", content: creator }),
        title && React.createElement(Meta, { name: "twitter:title", content: title }),
        description && React.createElement(Meta, { name: "twitter:description", content: description }),
        image && React.createElement(Meta, { name: "twitter:image", content: image })));
}
function MetaRobots({ index = true, follow = true, noarchive = false, nosnippet = false }) {
    const directives = [
        index ? 'index' : 'noindex',
        follow ? 'follow' : 'nofollow'
    ];
    if (noarchive)
        directives.push('noarchive');
    if (nosnippet)
        directives.push('nosnippet');
    return React.createElement(Meta, { name: "robots", content: directives.join(', ') });
}
//# sourceMappingURL=Meta.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/Og.js


function Og({ type = 'website', title, description, image, url, siteName, publishedTime, authors, locale, alternateLocales, twitterCard = 'summary', twitterSite, twitterCreator, twitterImage, includeTwitterTags = true }) {
    return (react.createElement(react.Fragment, null,
        react.createElement(Meta, { property: "og:type", content: type }),
        title && react.createElement(Meta, { property: "og:title", content: title }),
        description && react.createElement(Meta, { property: "og:description", content: description }),
        image && react.createElement(Meta, { property: "og:image", content: image }),
        url && react.createElement(Meta, { property: "og:url", content: url }),
        siteName && react.createElement(Meta, { property: "og:site_name", content: siteName }),
        type === 'article' && publishedTime && (react.createElement(Meta, { property: "article:published_time", content: publishedTime })),
        type === 'article' &&
            (authors === null || authors === void 0 ? void 0 : authors.length) &&
            authors.map((author, index) => (react.createElement(Meta, { key: `author-${index}`, property: "article:author", content: author }))),
        locale && react.createElement(Meta, { property: "og:locale", content: locale }),
        (alternateLocales === null || alternateLocales === void 0 ? void 0 : alternateLocales.length) &&
            alternateLocales.map((alternateLocale, index) => (react.createElement(Meta, { key: `locale-${index}`, property: "og:locale:alternate", content: alternateLocale }))),
        includeTwitterTags && (react.createElement(react.Fragment, null,
            react.createElement(Meta, { name: "twitter:card", content: twitterCard }),
            title && react.createElement(Meta, { name: "twitter:title", content: title }),
            description && (react.createElement(Meta, { name: "twitter:description", content: description })),
            twitterSite && react.createElement(Meta, { name: "twitter:site", content: twitterSite }),
            twitterCreator && (react.createElement(Meta, { name: "twitter:creator", content: twitterCreator })),
            twitterImage && react.createElement(Meta, { name: "twitter:image", content: twitterImage })))));
}
//# sourceMappingURL=Og.js.map
;// ./node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/HeadTags.js


function HeadTags({ pageInfo: { title, description, keywords, canonicalUrl, ogInfo, favicon }, themeConfig: { headTags: { metas, links, scripts, base } } }) {
    react.useEffect(() => {
        const head = document.querySelector('head');
        scripts.forEach((script) => {
            const scriptElement = document.createElement('script');
            Object.keys(script).forEach((key) => {
                if (script[key]) {
                    scriptElement[key] = script[key];
                }
            });
            head === null || head === void 0 ? void 0 : head.appendChild(scriptElement);
        });
    }, []);
    return (react.createElement(react.Fragment, null,
        react.createElement("title", null, title),
        react.createElement("meta", { name: "description", content: description }),
        react.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        metas.map((meta, index) => (react.createElement("meta", { key: index, ...meta }))),
        links.map((link, index) => (react.createElement("link", { key: index, ...link }))),
        scripts.map((script, index) => (react.createElement("script", { key: index, ...script }))),
        favicon && react.createElement("link", { rel: "icon", href: favicon }),
        keywords && keywords.length > 0 && (react.createElement("meta", { name: "keywords", content: keywords.join(', ') })),
        canonicalUrl && react.createElement("link", { rel: "canonical", href: canonicalUrl }),
        base && react.createElement("base", { ...base }),
        react.createElement(Og, { type: ogInfo.type, title: title, description: description, url: ogInfo.url, siteName: ogInfo.siteName, image: ogInfo.image, locale: ogInfo.locale, twitterCard: ogInfo.twitterCard, twitterSite: ogInfo.twitterSite, twitterCreator: ogInfo.twitterCreator, twitterImage: ogInfo.twitterImage })));
}
const HeadTags_layout = {
    areaId: 'head',
    sortOrder: 5
};
const HeadTags_query = (/* unused pure expression or super */ null && (`
  query query {
    pageInfo {
      title
      description
      keywords
      canonicalUrl
      favicon
      ogInfo {
        locale
        title
        description
        image
        url
        type
        siteName
        twitterCard
        twitterSite
        twitterCreator
        twitterImage
      }
    }
    themeConfig {
      headTags {
        metas {
          name
          content
          charSet
          httpEquiv
          property
          itemProp
          itemType
          itemID
          lang
        }
        links {
          rel
          href
          sizes
          type
          hrefLang
          media
          title
          as
          crossOrigin
          integrity
          referrerPolicy
        }
        scripts {
          src
          type
          async
          defer
          crossOrigin
          integrity
          noModule
          nonce
        }
        base {
          href
          target
        }
      }
    }
  }
`));
//# sourceMappingURL=HeadTags.js.map
;// ./node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Logo.js

function Logo({ themeConfig: { logo: { src, alt = 'Evershop', width = 128, height = 128 } } }) {
    return (react.createElement("div", { className: "logo md:ml-0 flex justify-center items-center" },
        src && (react.createElement("a", { href: "/", className: "logo-icon" },
            react.createElement("img", { src: src, alt: alt, width: width, height: height }))),
        !src && (react.createElement("a", { href: "/", className: "logo-icon" },
            react.createElement("svg", { width: "128", height: "146", viewBox: "0 0 128 146", fill: "none", className: "w-10 h-10", xmlns: "http://www.w3.org/2000/svg" },
                react.createElement("path", { d: "M32.388 18.0772L1.15175 36.1544L1.05206 72.5081L0.985596 108.895L32.4213 127.039C49.7009 137.008 63.9567 145.182 64.1228 145.182C64.289 145.182 72.8956 140.264 83.2966 134.283C93.6644 128.268 107.82 120.127 114.732 116.139L127.26 108.895V101.119V93.3102L126.529 93.7089C126.097 93.9415 111.941 102.083 95.06 111.853C78.1459 121.622 64.156 129.531 63.9567 129.498C63.724 129.431 52.5587 123.051 39.1005 115.275L14.6099 101.152V72.5746V43.9967L25.6756 37.6165C31.7234 34.1274 42.8223 27.7472 50.2991 23.4273C57.7426 19.1073 63.9899 15.585 64.1228 15.585C64.2557 15.585 72.9288 20.5362 83.3963 26.5841L113.902 43.9967L118.713 41.1657L127.26 36.1544L113.902 28.5447C103.334 22.2974 64.3554 -0.033191 64.0231 3.90721e-05C63.8237 3.90721e-05 49.568 8.14142 32.388 18.0772Z", fill: "#1F1F1F" }),
                react.createElement("path", { d: "M96.0237 54.1983C78.9434 64.0677 64.721 72.2423 64.4219 72.3088C64.0896 72.4084 55.7488 67.7562 44.8826 61.509L25.9082 50.543V58.4186L25.9414 66.2609L44.3841 76.8945C54.5193 82.743 63.1591 87.6611 63.5911 87.8272C64.2557 88.0598 68.9079 85.5011 95.5585 70.1156C112.705 60.1798 126.861 51.9719 127.027 51.839C127.16 51.7061 127.227 48.1505 127.194 43.9302L127.094 36.2541L96.0237 54.1983Z", fill: "#1F1F1F" }),
                react.createElement("path", { d: "M123.771 66.7261C121.943 67.7562 107.854 75.8976 92.4349 84.8033C77.0161 93.7089 64.289 100.986 64.1228 100.986C63.9567 100.986 55.3501 96.0683 44.9491 90.0869L26.0744 79.1874L25.9747 86.8303C25.9082 92.6788 26.0079 94.5729 26.307 94.872C26.9383 95.4369 63.7241 116.604 64.1228 116.604C64.4551 116.604 126.496 80.8821 127.027 80.4169C127.16 80.284 127.227 76.7284 127.194 72.4749L127.094 64.7987L123.771 66.7261Z", fill: "#1F1F1F" }))))));
}
const Logo_layout = {
    areaId: 'headerMiddleCenter',
    sortOrder: 10
};
const Logo_query = (/* unused pure expression or super */ null && (`
  query query {
    themeConfig {
      logo {
        src
        alt
        width
        height
      }
    }
  }
`));
//# sourceMappingURL=Logo.js.map
;// ./node_modules/@evershop/evershop/dist/lib/util/get.js
/**
 * Get the value base on the path
 *
 * @param   {object}  obj           The Data object
 * @param   {string}  path          The path of the property "a.b.c"
 * @param   {any}  defaultValue     The default value in case the path is not existed
 *
 * @return  {any}                   The value
 */
function get_get(obj, path, defaultValue) {
    const pathSplit = path.split('.');
    let current = obj;
    while (pathSplit.length) {
        if (typeof current !== 'object' || current === null) {
            return defaultValue;
        }
        const key = pathSplit.shift();
        if (!(key in current)) {
            return defaultValue;
        }
        current = current[key];
    }
    return current === undefined || current === null
        ? defaultValue
        : current;
}
//# sourceMappingURL=get.js.map
;// ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

;// ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

;// ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ const TransitionGroupContext = (react.createContext(null));
;// ./node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
;// ./node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function Transition_noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: Transition_noop,
  onEntering: Transition_noop,
  onEntered: Transition_noop,
  onExit: Transition_noop,
  onExiting: Transition_noop,
  onExited: Transition_noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);
;// ./node_modules/clsx/dist/clsx.m.js
function clsx_m_r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=clsx_m_r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=clsx_m_r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const clsx_m = (clsx);
;// ./node_modules/react-toastify/dist/react-toastify.esm.js






function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function react_toastify_esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}
function hasToastId(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return (0,react.isValidElement)(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
  DARK: 'dark'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var height = node.scrollHeight;
  var style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = height + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(function () {
        return done();
      }, duration);
    });
  });
}

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 750 : _ref$duration,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  var enterDuration, exitDuration;

  if (Array.isArray(duration) && duration.length === 2) {
    enterDuration = duration[0];
    exitDuration = duration[1];
  } else {
    enterDuration = exitDuration = duration;
  }

  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        props = react_toastify_esm_objectWithoutPropertiesLoose(_ref2, ["children", "position", "preventExitTransition", "done"]);

    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;

    var onEnter = function onEnter() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.add(enterClassName);
        node.style.animationFillMode = 'forwards';
        node.style.animationDuration = enterDuration + "ms";
      }
    };

    var onEntered = function onEntered() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.remove(enterClassName);
        node.style.removeProperty('animationFillMode');
        node.style.removeProperty('animationDuration');
      }
    };

    var onExited = function onExited() {
      var node = props.nodeRef.current;

      if (node) {
        node.removeEventListener('animationend', onExited);
        collapse ? collapseToast(node, done, collapseDuration) : done();
      }
    };

    var onExit = function onExit() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.add(exitClassName);
        node.style.animationFillMode = 'forwards';
        node.style.animationDuration = exitDuration + "ms";
        node.addEventListener('animationend', onExited);
      }
    };

    return (0,react.createElement)(esm_Transition, Object.assign({}, props, {
      timeout: preventExitTransition ? collapse ? collapseDuration : 50
      /* DEBOUNCE_DURATION */
      : {
        enter: enterDuration,
        exit: collapse ? exitDuration + collapseDuration : exitDuration + 50
        /* DEBOUNCE_DURATION */

      },
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: preventExitTransition ? onExited : onExit,
      unmountOnExit: true
    }), children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(function (timer) {
        return clearTimeout(timer);
      });
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = (0,react.useRef)(arg);
  (0,react.useEffect)(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function react_toastify_esm_reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 'REMOVE':
      return hasToastId(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

function useToastContainer(props) {
  var _useReducer = (0,react.useReducer)(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = (0,react.useReducer)(react_toastify_esm_reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = (0,react.useRef)(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  (0,react.useEffect)(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  (0,react.useEffect)(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  (0,react.useEffect)(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var _instance$props = instance.props,
        limit = _instance$props.limit,
        enableMultiContainer = _instance$props.enableMultiContainer;

    if (limit && (!containerId || instance.containerId === containerId && enableMultiContainer)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    var queueLen = queue.length;
    toastCount = hasToastId(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = hasToastId(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    }

    dispatch({
      type: 'REMOVE',
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId; // ensure that exit transition has been completed, hence the timeout


    setTimeout(function () {
      appendToast(toastContent, toastProps, staleId);
    }, 500);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || instance.isToastActive(toastId) && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = react_toastify_esm_objectWithoutPropertiesLoose(_ref3, ["delay", "staleId"]);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId;
    var props = instance.props,
        isToastActive = instance.isToastActive;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = !isToastActive(toastId);
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose;
    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if ((0,react.isValidElement)(content) && !isStr(content.type)) {
      toastContent = (0,react.cloneElement)(content, {
        closeToast: closeToast,
        toastProps: toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 'ADD',
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    forceUpdate();
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = (0,react.useState)(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = (0,react.useState)(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = (0,react.useRef)(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    deltaX: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  (0,react.useEffect)(function () {
    if (isFn(props.onOpen)) props.onOpen((0,react.isValidElement)(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose((0,react.isValidElement)(syncProps.children) && syncProps.children.props);
    };
  }, []);
  (0,react.useEffect)(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  (0,react.useEffect)(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    var toast = toastRef.current;
    drag.canCloseOnClick = true;
    drag.canDrag = true;
    drag.boundingRect = toast.getBoundingClientRect();
    toast.style.transition = '';
    drag.start = drag.x = getX(e.nativeEvent);
    drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    e.preventDefault();
    var toast = toastRef.current;

    if (drag.canDrag) {
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.deltaX = drag.x - drag.start;
      drag.y = getY(e); // prevent false positif during a toast click

      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translateX(" + drag.deltaX + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.deltaX / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.deltaX) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = 'translateX(0)';
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return (0,react.createElement)("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, (0,react.createElement)("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, (0,react.createElement)("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _ref2, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassArr = ["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_ref2 = {}, _ref2["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _ref2)];
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: clsx_m.apply(void 0, defaultClassArr)
  }) : clsx_m.apply(void 0, [].concat(defaultClassArr, [className])); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent);
  return (0,react.createElement)("div", Object.assign({
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var Toast = function Toast(props) {
  var _ref;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast;
  var defaultClassArr = ["Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_ref = {}, _ref["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _ref)];
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: clsx_m.apply(void 0, defaultClassArr)
  }) : clsx_m.apply(void 0, [].concat(defaultClassArr, [className]));
  var controlledProgress = !!progress;

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type
    };
    if (isFn(closeButton)) return closeButton(props);
    if ((0,react.isValidElement)(closeButton)) return (0,react.cloneElement)(closeButton, props);
  }

  return (0,react.createElement)(Transition, {
    "in": props["in"],
    appear: true,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, (0,react.createElement)("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses || undefined
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), (0,react.createElement)("div", Object.assign({}, props["in"] && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : clsx_m("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), children), renderCloseButton(closeButton), (autoClose || controlledProgress) && (0,react.createElement)(ProgressBar, Object.assign({}, updateId && !controlledProgress ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    delay: autoClose,
    isRunning: isRunning,
    isIn: props["in"],
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: controlledProgress,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});
var Slide = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-exit",
  duration: [450, 750],
  appendPosition: true
});
var Zoom = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-exit"
});
var Flip = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-exit"
});

var ToastPositioner = function ToastPositioner(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      rest = react_toastify_esm_objectWithoutPropertiesLoose(_ref, ["children", "className", "style"]);

  // Monkey patch react-transition-group
  // As exit transition is broken with strict mode
  delete rest["in"];
  return (0,react.createElement)("div", {
    className: className,
    style: style
  }, react.Children.map(children, function (child) {
    return (0,react.cloneElement)(child, rest);
  }));
};

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;
  return (0,react.createElement)("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var _cx, _cx2;

    var swag = {
      className: isFn(className) ? className({
        position: position,
        rtl: rtl,
        defaultClassName: clsx_m("Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container", "Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container--rtl"] = rtl, _cx))
      }) : clsx_m("Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container", "Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container--" + position, (_cx2 = {}, _cx2["Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container--rtl"] = rtl, _cx2), parseClassName(className)),
      style: toastList.length === 0 ? _extends({}, style, {
        pointerEvents: 'none'
      }) : _extends({}, style)
    };
    return (0,react.createElement)(ToastPositioner, Object.assign({}, swag, {
      key: "container-" + position
    }), toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return (0,react.createElement)(Toast, Object.assign({}, toastProps, {
        "in": isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};

if (false) // removed by dead control flow
{}

ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  role: 'alert'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var react_toastify_esm_lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the container by id. Returns the last container declared when no id is given.
 */


function getContainer(containerId) {
  if (!isAnyContainerMounted()) return null;
  return containers.get(!containerId ? latestInstance : containerId);
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = getContainer(containerId);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (react_toastify_esm_lazy && canUseDom) {
      react_toastify_esm_lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      (0,react_dom.render)((0,react.createElement)(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.success = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.SUCCESS, options));
};

toast.info = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.INFO, options));
};

toast.error = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.ERROR, options));
};

toast.warning = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.WARNING, options));
};

toast.dark = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DARK, options));
};
/**
 * Maybe I should remove warning in favor of warn, I don't know
 */


toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  return isAnyContainerMounted() && eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return isAnyContainerMounted() && eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = typeof nextOptions.render !== 'undefined' ? nextOptions.render : oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  react_toastify_esm_lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


//# sourceMappingURL=react-toastify.esm.js.map

;// ./node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Notification.js





function Notification() {
    const notify = (type, message) => {
        switch (type) {
            case 'success':
                toast.success(message);
                break;
            case 'error':
                toast.error(message);
                break;
            case 'info':
                toast.info(message);
                break;
            case 'warning':
                toast.warning(message);
                break;
            default:
                toast(message);
        }
    };
    const context = useAppState();
    react.useEffect(() => {
        get_get(context, 'notifications', []).forEach((n) => notify(n.type, n.message));
    }, []);
    return (react.createElement("div", null,
        react.createElement(ToastContainer, { hideProgressBar: true, autoClose: false })));
}
const Notification_layout = {
    areaId: 'body',
    sortOrder: 10
};
//# sourceMappingURL=Notification.js.map
;// ./node_modules/@evershop/evershop/dist/lib/util/parseImageSizes.js
// Define your desired image breakpoints. Consider putting this in a config file.
const deviceSizes = [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];
const isValidCondition = (condition) => {
    if (!condition || typeof condition !== 'string') {
        return false;
    }
    const trimmed = condition.trim();
    if (!trimmed) {
        return false;
    }
    // Special case: handle 'auto' keyword
    if (trimmed === 'auto') {
        return true;
    }
    // Check for valid CSS units pattern - allow some whitespace between value and unit
    const validUnitsPattern = /(\d+(?:\.\d+)?)\s*(vw|vh|px|rem|em|%|ch|vmin|vmax|pt|pc|in|cm|mm|ex|ic|lh|vi|vb|cqw|cqh|cqi|cqb|cqmin|cqmax)\s*$/;
    // If it has parentheses, it should be a media query
    if (trimmed.includes('(')) {
        // Basic media query validation - must have closing parenthesis and valid value
        const hasClosingParen = trimmed.includes(')');
        const hasValidValue = validUnitsPattern.test(trimmed);
        // Also check that it has proper media query structure
        const hasProperMediaQuery = /\([^)]*\)/.test(trimmed);
        return hasClosingParen && hasValidValue && hasProperMediaQuery;
    }
    else {
        // Simple value without media query - but shouldn't have unmatched closing parenthesis
        const hasUnmatchedClosingParen = trimmed.includes(')');
        const hasValidValue = validUnitsPattern.test(trimmed);
        return !hasUnmatchedClosingParen && hasValidValue;
    }
};
// Parse sizes string to estimate actual image sizes
const parseImageSizes = (sizes) => {
    // Validate input
    if (!sizes || typeof sizes !== 'string') {
        throw new Error('Invalid sizes attribute: must be a non-empty string');
    }
    const trimmedSizes = sizes.trim();
    if (!trimmedSizes) {
        throw new Error('Invalid sizes attribute: cannot be empty or whitespace only');
    }
    // Handle fixed pixel values first
    if (trimmedSizes.endsWith('px') &&
        !trimmedSizes.includes(',') &&
        !trimmedSizes.includes('(')) {
        const pixelValue = parseInt(trimmedSizes);
        if (!isNaN(pixelValue) && pixelValue > 0) {
            // For fixed pixel values, generate a few sizes around that value
            return deviceSizes
                .filter((size) => size >= pixelValue * 0.5) // Include smaller sizes for efficiency
                .slice(0, 4); // Limit to 4 sizes to keep srcset reasonable
        }
        else {
            throw new Error(`Invalid pixel value in sizes attribute: "${trimmedSizes}" must be a positive number followed by "px"`);
        }
    }
    // Parse complex sizes string with media queries
    const conditions = trimmedSizes
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    if (conditions.length === 0) {
        throw new Error('Invalid sizes attribute: no valid conditions found after parsing');
    }
    // Validate that each condition has a proper format
    for (const condition of conditions) {
        if (!isValidCondition(condition)) {
            throw new Error(`Invalid condition in sizes attribute: "${condition}" - must contain a valid CSS length value or media query`);
        }
    }
    // For each device size, determine what actual image size would be used
    const imageSizes = deviceSizes.map((deviceSize) => {
        // Go through conditions in order until we find a match
        for (const condition of conditions) {
            const result = evaluateCondition(condition, deviceSize);
            if (result !== null) {
                return result;
            }
        }
        // If no conditions matched, assume full width
        return deviceSize;
    });
    // Remove duplicates, sort, and ensure we have reasonable variety
    const uniqueSizes = [...new Set(imageSizes)].sort((a, b) => a - b);
    // Ensure minimum variety for better responsive behavior
    if (uniqueSizes.length < 3) {
        // Add some intermediate sizes for better coverage
        const minSize = Math.min(...uniqueSizes);
        const maxSize = Math.max(...uniqueSizes);
        const midSize = Math.round((minSize + maxSize) / 2);
        uniqueSizes.push(midSize);
    }
    return [...new Set(uniqueSizes)].sort((a, b) => a - b);
};
const evaluateCondition = (condition, deviceSize) => {
    // Remove extra whitespace
    condition = condition.trim();
    // Check if this condition has a media query
    if (condition.includes('(')) {
        // Extract media query and value parts - comprehensive regex for all CSS units
        const mediaQueryMatch = condition.match(/\(([^)]+)\)/g);
        const valueMatch = condition.match(/(\d+(?:\.\d+)?)\s*(vw|vh|px|rem|em|%|ch|vmin|vmax|pt|pc|in|cm|mm|ex|ic|lh|vi|vb|cqw|cqh|cqi|cqb|cqmin|cqmax)\s*$/);
        if (!mediaQueryMatch || !valueMatch) {
            return null;
        }
        const mediaQueries = mediaQueryMatch.map((mq) => mq.slice(1, -1)); // Remove parentheses
        const value = parseFloat(valueMatch[1]);
        const unit = valueMatch[2];
        // Check if all media queries match for this device size
        const allMatch = mediaQueries.every((mq) => {
            const matches = evaluateMediaQuery(mq, deviceSize);
            return matches;
        });
        if (allMatch) {
            const result = convertToPixels(value, unit, deviceSize);
            return result;
        }
        return null; // Media query doesn't match
    }
    else {
        // Special case: handle 'auto' keyword
        if (condition.trim() === 'auto') {
            // For 'auto', use a reasonable default based on the device size
            // We'll use 25% of the viewport width as a reasonable approximation
            return Math.round(deviceSize * 0.25);
        }
        // No media query, this is a fallback value - comprehensive regex for all CSS units
        const valueMatch = condition.match(/(\d+(?:\.\d+)?)\s*(vw|vh|px|rem|em|%|ch|vmin|vmax|pt|pc|in|cm|mm|ex|ic|lh|vi|vb|cqw|cqh|cqi|cqb|cqmin|cqmax)\s*$/);
        if (valueMatch) {
            const value = parseFloat(valueMatch[1]);
            const unit = valueMatch[2];
            const result = convertToPixels(value, unit, deviceSize);
            return result;
        }
    }
    return null;
};
const evaluateMediaQuery = (mediaQuery, deviceSize) => {
    var _a, _b, _c, _d;
    // Handle different media query types with improved regex patterns
    if (mediaQuery.includes('max-width')) {
        const maxWidth = parseFloat(((_a = mediaQuery.match(/max-width\s*:\s*(\d+(?:\.\d+)?)px/)) === null || _a === void 0 ? void 0 : _a[1]) || '0');
        return deviceSize <= maxWidth;
    }
    if (mediaQuery.includes('min-width')) {
        const minWidth = parseFloat(((_b = mediaQuery.match(/min-width\s*:\s*(\d+(?:\.\d+)?)px/)) === null || _b === void 0 ? void 0 : _b[1]) || '0');
        return deviceSize >= minWidth;
    }
    if (mediaQuery.includes('max-device-width')) {
        const maxDeviceWidth = parseFloat(((_c = mediaQuery.match(/max-device-width\s*:\s*(\d+(?:\.\d+)?)px/)) === null || _c === void 0 ? void 0 : _c[1]) || '0');
        return deviceSize <= maxDeviceWidth;
    }
    if (mediaQuery.includes('min-device-width')) {
        const minDeviceWidth = parseFloat(((_d = mediaQuery.match(/min-device-width\s*:\s*(\d+(?:\.\d+)?)px/)) === null || _d === void 0 ? void 0 : _d[1]) || '0');
        return deviceSize >= minDeviceWidth;
    }
    // Handle orientation
    if (mediaQuery.includes('orientation')) {
        if (mediaQuery.includes('landscape')) {
            return deviceSize >= 768; // Assume landscape for wider screens
        }
        if (mediaQuery.includes('portrait')) {
            return deviceSize < 768; // Assume portrait for narrower screens
        }
    }
    // Handle aspect-ratio (simplified)
    if (mediaQuery.includes('aspect-ratio')) {
        // For simplicity, assume most common aspect ratios match
        return true;
    }
    // Handle resolution/pixel density
    if (mediaQuery.includes('resolution') ||
        mediaQuery.includes('-webkit-device-pixel-ratio')) {
        // For srcset calculation, we generally assume 2x displays are common
        return true;
    }
    // Handle prefers-color-scheme, prefers-reduced-motion etc.
    if (mediaQuery.includes('prefers-')) {
        // These don't affect image sizing, so return true
        return true;
    }
    // Default: if we can't parse it, assume it matches
    return true;
};
const convertToPixels = (value, unit, deviceSize) => {
    switch (unit) {
        // Viewport units
        case 'vw':
            return Math.round((deviceSize * value) / 100);
        case 'vh':
            // Assume viewport height is roughly 1.5x viewport width for mobile, 0.6x for desktop
            const assumedHeight = deviceSize <= 768 ? deviceSize * 1.5 : deviceSize * 0.6;
            return Math.round((assumedHeight * value) / 100);
        case 'vmin':
            // vmin is the smaller of vw or vh
            const vminHeight = deviceSize <= 768 ? deviceSize * 1.5 : deviceSize * 0.6;
            const minDimension = Math.min(deviceSize, vminHeight);
            return Math.round((minDimension * value) / 100);
        case 'vmax':
            // vmax is the larger of vw or vh
            const vmaxHeight = deviceSize <= 768 ? deviceSize * 1.5 : deviceSize * 0.6;
            const maxDimension = Math.max(deviceSize, vmaxHeight);
            return Math.round((maxDimension * value) / 100);
        case 'vi':
            // Viewport inline (same as vw in horizontal writing mode)
            return Math.round((deviceSize * value) / 100);
        case 'vb':
            // Viewport block (same as vh in horizontal writing mode)
            const vbHeight = deviceSize <= 768 ? deviceSize * 1.5 : deviceSize * 0.6;
            return Math.round((vbHeight * value) / 100);
        // Absolute length units
        case 'px':
            return Math.round(value);
        case 'pt':
            // 1pt = 1.33px (approximately)
            return Math.round(value * 1.33);
        case 'pc':
            // 1pc = 16px (1 pica = 12 points)
            return Math.round(value * 16);
        case 'in':
            // 1in = 96px (CSS reference pixel)
            return Math.round(value * 96);
        case 'cm':
            // 1cm = 37.8px (96px/2.54)
            return Math.round(value * 37.8);
        case 'mm':
            // 1mm = 3.78px (37.8px/10)
            return Math.round(value * 3.78);
        // Relative length units
        case '%':
            // Assume % is relative to viewport width (same as vw in most contexts)
            return Math.round((deviceSize * value) / 100);
        case 'rem':
            // Assume 1rem = 16px (default browser font size)
            return Math.round(value * 16);
        case 'em':
            // Assume 1em = 16px (in absence of parent context)
            return Math.round(value * 16);
        case 'ex':
            // Assume 1ex = 8px (approximately 0.5em)
            return Math.round(value * 8);
        case 'ch':
            // Assume 1ch = 8px (approximate character width in monospace font)
            return Math.round(value * 8);
        case 'ic':
            // Assume 1ic = 16px (ideographic character width, similar to em)
            return Math.round(value * 16);
        case 'lh':
            // Assume 1lh = 24px (typical line height is 1.5em)
            return Math.round(value * 24);
        // Container query units (treat similar to viewport units for now)
        case 'cqw':
            // Container query width (fallback to viewport width)
            return Math.round((deviceSize * value) / 100);
        case 'cqh':
            // Container query height (fallback to viewport height)
            const cqhHeight = deviceSize <= 768 ? deviceSize * 1.5 : deviceSize * 0.6;
            return Math.round((cqhHeight * value) / 100);
        case 'cqi':
            // Container query inline (fallback to viewport width)
            return Math.round((deviceSize * value) / 100);
        case 'cqb':
            // Container query block (fallback to viewport height)
            const cqbHeight = deviceSize <= 768 ? deviceSize * 1.5 : deviceSize * 0.6;
            return Math.round((cqbHeight * value) / 100);
        case 'cqmin':
            // Container query min (fallback to vmin)
            const cqminHeight = deviceSize <= 768 ? deviceSize * 1.5 : deviceSize * 0.6;
            const cqMinDimension = Math.min(deviceSize, cqminHeight);
            return Math.round((cqMinDimension * value) / 100);
        case 'cqmax':
            // Container query max (fallback to vmax)
            const cqmaxHeight = deviceSize <= 768 ? deviceSize * 1.5 : deviceSize * 0.6;
            const cqMaxDimension = Math.max(deviceSize, cqmaxHeight);
            return Math.round((cqMaxDimension * value) / 100);
        default:
            // Fallback to treating as pixels
            return Math.round(value);
    }
};
//# sourceMappingURL=parseImageSizes.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/Image.js


function Image({ src, width, height, alt, quality = 75, loading = 'eager', decoding = 'async', priority = false, sizes = '100vw', objectFit = 'unset', ...props }) {
    const generateSrcSet = () => {
        const imageSizes = parseImageSizes(sizes);
        // Don't upscale beyond 3 times the original width, but be smarter about filtering
        let filteredSizes = imageSizes.filter((size) => size <= width * 3);
        if (filteredSizes.length < 2) {
            // Add the original width
            filteredSizes.push(width);
            const smallerSizes = [
                Math.round(width * 0.5), // 50% of original
                Math.round(width * 0.75) // 75% of original
            ].filter((size) => size >= 200 && !filteredSizes.includes(size)); // Don't go too small
            filteredSizes = [...filteredSizes, ...smallerSizes];
        }
        if (!filteredSizes.includes(width)) {
            filteredSizes.push(width);
        }
        filteredSizes = [...new Set(filteredSizes)].sort((a, b) => a - b);
        return filteredSizes
            .map((size) => {
            // Construct the URL pointing to our image API
            const url = `/images?src=${encodeURIComponent(src)}&w=${size}&q=${quality}`;
            return `${url} ${size}w`;
        })
            .join(', ');
    };
    const srcset = generateSrcSet();
    const fallbackSrc = `/images?src=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
    // Prepare the base style with responsive behavior
    const baseStyle = {
        // Modern responsive image approach
        maxWidth: '100%', // Ensure image doesn't exceed its container
        height: 'auto', // Maintain aspect ratio
        objectFit: objectFit,
        aspectRatio: `${width} / ${height}` // Maintain aspect ratio
    };
    return (react.createElement("img", { ...props, src: fallbackSrc, srcSet: srcset, sizes: sizes, alt: alt, 
        // Set intrinsic dimensions to help browser calculate aspect ratio
        width: width, height: height, style: {
            ...baseStyle,
            ...props.style
        }, loading: loading, decoding: decoding, itemProp: priority ? 'preload' : undefined }));
}
//# sourceMappingURL=Image.js.map
;// ./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js

function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react.forwardRef(XMarkIcon);
/* harmony default export */ const esm_XMarkIcon = (ForwardRef);
;// ./node_modules/@evershop/evershop/dist/components/frontStore/catalog/SearchBox.js





const SEARCH_PRODUCTS_QUERY = `
  query Query($filters: [FilterInput]) {
    products(filters: $filters) {
      items {
        ...Product
      }
    }
  }
`;
const PRODUCT_FRAGMENT = `
  fragment Product on Product {
    productId
    name
    sku
    price {
      regular {
        value
        text
      }
      special {
        value
        text
      }
    }
    image {
      url
      alt
    }
    url
    inventory {
      isInStock
    }
  }
`;
function SearchBox({ searchPageUrl, enableAutocomplete = false, autocompleteDelay = 300, minSearchLength = 2, maxResults = 10, onSearch, renderSearchInput, renderSearchResults, renderSearchIcon, renderCloseIcon }) {
    const InputRef = (0,react.useRef)(null);
    const searchTimeoutRef = (0,react.useRef)(null);
    const client = useClient();
    const [keyword, setKeyword] = (0,react.useState)('');
    const [showing, setShowing] = (0,react.useState)(false);
    const [searchResults, setSearchResults] = (0,react.useState)([]);
    const [isSearching, setIsSearching] = (0,react.useState)(false);
    const [showResults, setShowResults] = (0,react.useState)(false);
    const defaultSearchFunction = (0,react.useCallback)(async (query) => {
        var _a, _b;
        try {
            const result = await client
                .query(`
            ${PRODUCT_FRAGMENT}
            ${SEARCH_PRODUCTS_QUERY}
          `, {
                filters: [
                    {
                        key: 'keyword',
                        operation: 'eq',
                        value: query
                    },
                    {
                        key: 'limit',
                        operation: 'eq',
                        value: `${maxResults}`
                    }
                ]
            })
                .toPromise();
            if (result.error) {
                return [];
            }
            if (!((_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.products) === null || _b === void 0 ? void 0 : _b.items)) {
                return [];
            }
            return result.data.products.items.map((product) => {
                var _a, _b, _c, _d, _e, _f;
                return ({
                    id: product.productId,
                    title: product.name,
                    url: product.url,
                    image: (_a = product.image) === null || _a === void 0 ? void 0 : _a.url,
                    price: ((_c = (_b = product.price) === null || _b === void 0 ? void 0 : _b.special) === null || _c === void 0 ? void 0 : _c.text) || ((_e = (_d = product.price) === null || _d === void 0 ? void 0 : _d.regular) === null || _e === void 0 ? void 0 : _e.text),
                    type: 'product',
                    sku: product.sku,
                    isInStock: (_f = product.inventory) === null || _f === void 0 ? void 0 : _f.isInStock
                });
            });
        }
        catch (error) {
            return [];
        }
    }, [client]);
    const searchFunction = onSearch || defaultSearchFunction;
    react.useEffect(() => {
        const url = new URL(window.location.href);
        const key = url.searchParams.get('keyword');
        setKeyword(key || '');
    }, []);
    react.useEffect(() => {
        var _a;
        if (showing) {
            (_a = InputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [showing]);
    const performSearch = (0,react.useCallback)(async (query) => {
        if (!enableAutocomplete || query.length < minSearchLength) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }
        setIsSearching(true);
        try {
            const results = await searchFunction(query);
            setSearchResults(results.slice(0, maxResults));
            setShowResults(true);
        }
        catch (error) {
            setSearchResults([]);
        }
        finally {
            setIsSearching(false);
        }
    }, [enableAutocomplete, searchFunction, minSearchLength, maxResults]);
    const handleInputChange = (0,react.useCallback)((value) => {
        setKeyword(value);
        if (enableAutocomplete) {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
            }
            searchTimeoutRef.current = setTimeout(() => {
                performSearch(value);
            }, autocompleteDelay);
        }
    }, [enableAutocomplete, autocompleteDelay, performSearch]);
    const handleResultSelect = (0,react.useCallback)((result) => {
        if (result.url) {
            window.location.href = result.url;
        }
        else {
            const url = new URL(searchPageUrl, window.location.origin);
            url.searchParams.set('keyword', result.title);
            window.location.href = url.toString();
        }
        setShowing(false);
        setShowResults(false);
    }, [searchPageUrl]);
    const handleKeyDown = (0,react.useCallback)((event) => {
        var _a;
        if (event.key === 'Enter') {
            setShowResults(false);
            const url = new URL(searchPageUrl, window.location.origin);
            url.searchParams.set('keyword', ((_a = InputRef.current) === null || _a === void 0 ? void 0 : _a.value) || '');
            window.location.href = url.toString();
        }
        else if (event.key === 'Escape') {
            setShowResults(false);
            setShowing(false);
        }
    }, [searchPageUrl]);
    const handleFocus = (0,react.useCallback)(() => {
        if (enableAutocomplete &&
            keyword.length >= minSearchLength &&
            searchResults.length > 0) {
            setShowResults(true);
        }
    }, [enableAutocomplete, keyword, minSearchLength, searchResults.length]);
    const handleBlur = (0,react.useCallback)(() => {
        setTimeout(() => {
            setShowResults(false);
        }, 150);
    }, []);
    const defaultSearchIcon = () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { width: '1.5rem', height: '1.5rem' }, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
        react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })));
    const defaultCloseIcon = () => react.createElement(esm_XMarkIcon, { width: "1.5rem", height: "1.5rem" });
    return (react.createElement("div", { className: "search__box" },
        react.createElement("a", { href: "#", className: "search__icon", onClick: (e) => {
                e.preventDefault();
                setShowing(!showing);
            } }, renderSearchIcon ? renderSearchIcon() : defaultSearchIcon()),
        showing && (react.createElement("div", { className: "search__input__container fixed top-0 left-0 right-0 bottom-0 bg-white shadow-md z-50 p-10" },
            react.createElement("div", { className: "search__input relative flex justify-between" },
                renderSearchInput
                    ? renderSearchInput({
                        value: keyword || '',
                        onChange: handleInputChange,
                        onKeyDown: handleKeyDown,
                        onFocus: handleFocus,
                        onBlur: handleBlur,
                        placeholder: _('Search'),
                        ref: InputRef
                    })
                    : defaultSearchInput({
                        value: keyword || '',
                        onChange: handleInputChange,
                        onKeyDown: handleKeyDown,
                        onFocus: handleFocus,
                        onBlur: handleBlur,
                        placeholder: _('Search'),
                        ref: InputRef
                    }),
                react.createElement("a", { href: "#", className: "close-icon flex items-center p-3", onClick: (e) => {
                        e.preventDefault();
                        setShowing(false);
                        setShowResults(false);
                    } }, renderCloseIcon ? renderCloseIcon() : defaultCloseIcon()),
                enableAutocomplete &&
                    showResults &&
                    (renderSearchResults
                        ? renderSearchResults({
                            results: searchResults,
                            query: keyword || '',
                            onSelect: handleResultSelect,
                            isLoading: isSearching
                        })
                        : defaultSearchResults({
                            results: searchResults,
                            query: keyword || '',
                            onSelect: handleResultSelect,
                            isLoading: isSearching
                        })))))));
}
const defaultSearchInput = (props) => (react.createElement("div", { className: "form__field flex items-center justify-center relative flex-grow" },
    react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { width: '1rem', height: '1rem' }, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "absolute left-2 pointer-events-none" },
        react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })),
    react.createElement("input", { ref: props.ref, placeholder: props.placeholder, value: props.value, onChange: (e) => props.onChange(e.target.value), onKeyDown: props.onKeyDown, onFocus: props.onFocus, onBlur: props.onBlur, enterKeyHint: "done", className: "pl-8 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })));
const defaultSearchResults = (props) => {
    return (react.createElement("div", { className: "search__results absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50 max-h-64 overflow-y-auto" },
        props.isLoading && (react.createElement("div", { className: "p-3 text-center text-gray-500" },
            react.createElement("span", null, "Searching..."))),
        !props.isLoading && props.results.length === 0 && (react.createElement("div", { className: "p-3 text-center text-gray-500" },
            react.createElement("span", null,
                "No results found for \u201C",
                props.query,
                "\u201D"))),
        !props.isLoading &&
            props.results.map((result) => (react.createElement("div", { key: result.id, className: "flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0", onClick: (e) => {
                    e.preventDefault();
                    props.onSelect(result);
                }, onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        props.onSelect(result);
                    }
                }, role: "button", tabIndex: 0 },
                result.image && (react.createElement(Image, { src: result.image, alt: result.title, width: 100, height: 100, className: "w-10 h-10 object-cover rounded mr-3 flex-shrink-0" })),
                react.createElement("div", { className: "flex-1 min-w-0" },
                    react.createElement("div", { className: "font-medium text-gray-900 truncate" }, result.title),
                    result.price && (react.createElement("div", { className: "text-sm text-gray-600" }, result.price)),
                    result.type && (react.createElement("div", { className: "text-xs text-gray-400 capitalize" }, result.type))))))));
};
//# sourceMappingURL=SearchBox.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js


function SearchBox_SearchBox({ searchPageUrl }) {
    return (react.createElement(SearchBox, { searchPageUrl: searchPageUrl, enableAutocomplete: true, maxResults: 10 }));
}
const SearchBox_layout = {
    areaId: 'headerMiddleRight',
    sortOrder: 5
};
const SearchBox_query = (/* unused pure expression or super */ null && (`
  query Query {
    searchPageUrl: url(routeId: "catalogSearch")
  }
`));
//# sourceMappingURL=SearchBox.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/CartItems.js




function CartItems({ children }) {
    const { data: cart, loading } = useCartState();
    const { config: { tax: { priceIncludingTax } } } = useAppState();
    const { removeItem } = useCartDispatch();
    const isEmpty = (cart === null || cart === void 0 ? void 0 : cart.totalQty) === 0;
    const totalItems = (cart === null || cart === void 0 ? void 0 : cart.totalQty) || 0;
    const handleRemoveItem = async (itemId) => {
        await removeItem(itemId);
    };
    return (react.createElement("div", { className: "cart-items" },
        react.createElement(common_Area, { id: "cartItemsBefore", noOuter: true }),
        children
            ? children({
                items: (cart === null || cart === void 0 ? void 0 : cart.items) || [],
                showPriceIncludingTax: priceIncludingTax,
                loading,
                isEmpty,
                totalItems,
                onRemoveItem: handleRemoveItem
            })
            : null,
        react.createElement(common_Area, { id: "cartItemsAfter", noOuter: true })));
}

//# sourceMappingURL=CartItems.js.map
;// ./node_modules/react-hook-form/dist/index.esm.mjs


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (value) => value instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getEventValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;

var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));

var index_esm_isPlainObject = (tempObject) => {
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return (isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf'));
};

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
    if (data instanceof Date) {
        copy = new Date(data);
    }
    else if (!(isWeb && (data instanceof Blob || isFileListInstance)) &&
        (isArray || isObject(data))) {
        copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
        if (!isArray && !index_esm_isPlainObject(data)) {
            copy = data;
        }
        else {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    copy[key] = cloneObject(data[key]);
                }
            }
        }
    }
    else {
        return data;
    }
    return copy;
}

var isKey = (value) => /^\w*$/.test(value);

var isUndefined = (val) => val === undefined;

var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

var index_esm_get = (object, path, defaultValue) => {
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object
        ? isUndefined(object[path])
            ? defaultValue
            : object[path]
        : result;
};

var isBoolean = (value) => typeof value === 'boolean';

var index_esm_set = (object, path, value) => {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        object[key] = newValue;
        object = object[key];
    }
};

const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

const HookFormContext = react.createContext(null);
HookFormContext.displayName = 'HookFormContext';
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const useFormContext = () => react.useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://react.dev/reference/react/useContext) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const FormProvider = (props) => {
    const { children, ...data } = props;
    return (react.createElement(HookFormContext.Provider, { value: data }, children));
};

var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
    const result = {
        defaultValues: control._defaultValues,
    };
    for (const key in formState) {
        Object.defineProperty(result, key, {
            get: () => {
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            },
        });
    }
    return result;
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;

/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = React.useState(control._formState);
    const _localProxyFormState = React.useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    useIsomorphicLayoutEffect(() => control._subscribe({
        name,
        formState: _localProxyFormState.current,
        exact,
        callback: (formState) => {
            !disabled &&
                updateFormState({
                    ...control._formState,
                    ...formState,
                });
        },
    }), [name, disabled, exact]);
    React.useEffect(() => {
        _localProxyFormState.current.isValid && control._setValid(true);
    }, [control]);
    return React.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
}

var isString = (value) => typeof value === 'string';

var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return index_esm_get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName),
            index_esm_get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2, _internal_visited = new WeakSet()) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return Object.is(object1, object2);
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
        return true;
    }
    _internal_visited.add(object1);
    _internal_visited.add(object2);
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isDateObject(val1) && isDateObject(val2)) ||
                (isObject(val1) && isObject(val2)) ||
                (Array.isArray(val1) && Array.isArray(val2))
                ? !deepEqual(val1, val2, _internal_visited)
                : !Object.is(val1, val2)) {
                return false;
            }
        }
    }
    return true;
}

/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */
function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, compute, } = props || {};
    const _defaultValue = React.useRef(defaultValue);
    const _compute = React.useRef(compute);
    const _computeFormValues = React.useRef(undefined);
    const _prevControl = React.useRef(control);
    const _prevName = React.useRef(name);
    _compute.current = compute;
    const [value, updateValue] = React.useState(() => {
        const defaultValue = control._getWatch(name, _defaultValue.current);
        return _compute.current ? _compute.current(defaultValue) : defaultValue;
    });
    const getCurrentOutput = React.useCallback((values) => {
        const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
        return _compute.current ? _compute.current(formValues) : formValues;
    }, [control._formValues, control._names, name]);
    const refreshValue = React.useCallback((values) => {
        if (!disabled) {
            const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
            if (_compute.current) {
                const computedFormValues = _compute.current(formValues);
                if (!deepEqual(computedFormValues, _computeFormValues.current)) {
                    updateValue(computedFormValues);
                    _computeFormValues.current = computedFormValues;
                }
            }
            else {
                updateValue(formValues);
            }
        }
    }, [control._formValues, control._names, disabled, name]);
    useIsomorphicLayoutEffect(() => {
        if (_prevControl.current !== control ||
            !deepEqual(_prevName.current, name)) {
            _prevControl.current = control;
            _prevName.current = name;
            refreshValue();
        }
        return control._subscribe({
            name,
            formState: {
                values: true,
            },
            exact,
            callback: (formState) => {
                refreshValue(formState.values);
            },
        });
    }, [control, exact, name, refreshValue]);
    React.useEffect(() => control._removeUnmounted());
    // If name or control changed for this render, synchronously reflect the
    // latest value so callers (like useController) see the correct value
    // immediately on the same render.
    // Optimize: Check control reference first before expensive deepEqual
    const controlChanged = _prevControl.current !== control;
    const prevName = _prevName.current;
    // Cache the computed output to avoid duplicate calls within the same render
    // We include shouldReturnImmediate in deps to ensure proper recomputation
    const computedOutput = React.useMemo(() => {
        if (disabled) {
            return null;
        }
        const nameChanged = !controlChanged && !deepEqual(prevName, name);
        const shouldReturnImmediate = controlChanged || nameChanged;
        return shouldReturnImmediate ? getCurrentOutput() : null;
    }, [disabled, controlChanged, name, prevName, getCurrentOutput]);
    return computedOutput !== null ? computedOutput : value;
}

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
function useController(props) {
    const methods = useFormContext();
    const { name, disabled, control = methods.control, shouldUnregister, defaultValue, exact = true, } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const defaultValueMemo = React.useMemo(() => index_esm_get(control._formValues, name, index_esm_get(control._defaultValues, name, defaultValue)), [control, name, defaultValue]);
    const value = useWatch({
        control,
        name,
        defaultValue: defaultValueMemo,
        exact,
    });
    const formState = useFormState({
        control,
        name,
        exact,
    });
    const _props = React.useRef(props);
    const _previousNameRef = React.useRef(undefined);
    const _registerProps = React.useRef(control.register(name, {
        ...props.rules,
        value,
        ...(isBoolean(props.disabled) ? { disabled: props.disabled } : {}),
    }));
    _props.current = props;
    const fieldState = React.useMemo(() => Object.defineProperties({}, {
        invalid: {
            enumerable: true,
            get: () => !!index_esm_get(formState.errors, name),
        },
        isDirty: {
            enumerable: true,
            get: () => !!index_esm_get(formState.dirtyFields, name),
        },
        isTouched: {
            enumerable: true,
            get: () => !!index_esm_get(formState.touchedFields, name),
        },
        isValidating: {
            enumerable: true,
            get: () => !!index_esm_get(formState.validatingFields, name),
        },
        error: {
            enumerable: true,
            get: () => index_esm_get(formState.errors, name),
        },
    }), [formState, name]);
    const onChange = React.useCallback((event) => _registerProps.current.onChange({
        target: {
            value: getEventValue(event),
            name: name,
        },
        type: EVENTS.CHANGE,
    }), [name]);
    const onBlur = React.useCallback(() => _registerProps.current.onBlur({
        target: {
            value: index_esm_get(control._formValues, name),
            name: name,
        },
        type: EVENTS.BLUR,
    }), [name, control._formValues]);
    const ref = React.useCallback((elm) => {
        const field = index_esm_get(control._fields, name);
        if (field && elm) {
            field._f.ref = {
                focus: () => elm.focus && elm.focus(),
                select: () => elm.select && elm.select(),
                setCustomValidity: (message) => elm.setCustomValidity(message),
                reportValidity: () => elm.reportValidity(),
            };
        }
    }, [control._fields, name]);
    const field = React.useMemo(() => ({
        name,
        value,
        ...(isBoolean(disabled) || formState.disabled
            ? { disabled: formState.disabled || disabled }
            : {}),
        onChange,
        onBlur,
        ref,
    }), [name, disabled, formState.disabled, onChange, onBlur, ref, value]);
    React.useEffect(() => {
        const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
        const previousName = _previousNameRef.current;
        if (previousName && previousName !== name && !isArrayField) {
            control.unregister(previousName);
        }
        control.register(name, {
            ..._props.current.rules,
            ...(isBoolean(_props.current.disabled)
                ? { disabled: _props.current.disabled }
                : {}),
        });
        const updateMounted = (name, value) => {
            const field = index_esm_get(control._fields, name);
            if (field && field._f) {
                field._f.mount = value;
            }
        };
        updateMounted(name, true);
        if (_shouldUnregisterField) {
            const value = cloneObject(index_esm_get(control._options.defaultValues, name, _props.current.defaultValue));
            index_esm_set(control._defaultValues, name, value);
            if (isUndefined(index_esm_get(control._formValues, name))) {
                index_esm_set(control._formValues, name, value);
            }
        }
        !isArrayField && control.register(name);
        _previousNameRef.current = name;
        return () => {
            (isArrayField
                ? _shouldUnregisterField && !control._state.action
                : _shouldUnregisterField)
                ? control.unregister(name)
                : updateMounted(name, false);
        };
    }, [name, control, isArrayField, shouldUnregister]);
    React.useEffect(() => {
        control._setDisabledField({
            disabled,
            name,
        });
    }, [disabled, name, control]);
    return React.useMemo(() => ({
        field,
        formState,
        fieldState,
    }), [field, formState, fieldState]);
}

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
const Controller = (props) => props.render(useController(props));

const flatten = (obj) => {
    const output = {};
    for (const key of Object.keys(obj)) {
        if (isObjectType(obj[key]) && obj[key] !== null) {
            const nested = flatten(obj[key]);
            for (const nestedKey of Object.keys(nested)) {
                output[`${key}.${nestedKey}`] = nested[nestedKey];
            }
        }
        else {
            output[key] = obj[key];
        }
    }
    return output;
};

const POST_REQUEST = 'post';
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */
function Form(props) {
    const methods = useFormContext();
    const [mounted, setMounted] = React.useState(false);
    const { control = methods.control, onSubmit, children, action, method = POST_REQUEST, headers, encType, onError, render, onSuccess, validateStatus, ...rest } = props;
    const submit = async (event) => {
        let hasError = false;
        let type = '';
        await control.handleSubmit(async (data) => {
            const formData = new FormData();
            let formDataJson = '';
            try {
                formDataJson = JSON.stringify(data);
            }
            catch (_a) { }
            const flattenFormValues = flatten(control._formValues);
            for (const key in flattenFormValues) {
                formData.append(key, flattenFormValues[key]);
            }
            if (onSubmit) {
                await onSubmit({
                    data,
                    event,
                    method,
                    formData,
                    formDataJson,
                });
            }
            if (action) {
                try {
                    const shouldStringifySubmissionData = [
                        headers && headers['Content-Type'],
                        encType,
                    ].some((value) => value && value.includes('json'));
                    const response = await fetch(String(action), {
                        method,
                        headers: {
                            ...headers,
                            ...(encType && encType !== 'multipart/form-data'
                                ? { 'Content-Type': encType }
                                : {}),
                        },
                        body: shouldStringifySubmissionData ? formDataJson : formData,
                    });
                    if (response &&
                        (validateStatus
                            ? !validateStatus(response.status)
                            : response.status < 200 || response.status >= 300)) {
                        hasError = true;
                        onError && onError({ response });
                        type = String(response.status);
                    }
                    else {
                        onSuccess && onSuccess({ response });
                    }
                }
                catch (error) {
                    hasError = true;
                    onError && onError({ error });
                }
            }
        })(event);
        if (hasError && props.control) {
            props.control._subjects.state.next({
                isSubmitSuccessful: false,
            });
            props.control.setError('root.server', {
                type,
            });
        }
    };
    React.useEffect(() => {
        setMounted(true);
    }, []);
    return render ? (React.createElement(React.Fragment, null, render({
        submit,
    }))) : (React.createElement("form", { noValidate: mounted, action: action, method: method, encType: encType, onSubmit: submit, ...rest }, children));
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? {
        ...errors[name],
        types: {
            ...(errors[name] && errors[name].types ? errors[name].types : {}),
            [type]: message || true,
        },
    }
    : {};

var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

var createSubject = () => {
    let _observers = [];
    const next = (value) => {
        for (const observer of _observers) {
            observer.next && observer.next(value);
        }
    };
    const subscribe = (observer) => {
        _observers.push(observer);
        return {
            unsubscribe: () => {
                _observers = _observers.filter((o) => o !== observer);
            },
        };
    };
    const unsubscribe = () => {
        _observers = [];
    };
    return {
        get observers() {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe,
    };
};

function extractFormValues(fieldsState, formValues) {
    const values = {};
    for (const key in fieldsState) {
        if (fieldsState.hasOwnProperty(key)) {
            const fieldState = fieldsState[key];
            const fieldValue = formValues[key];
            if (fieldState && isObject(fieldState) && fieldValue) {
                const nestedFieldsState = extractFormValues(fieldState, fieldValue);
                if (isObject(nestedFieldsState)) {
                    values[key] = nestedFieldsState;
                }
            }
            else if (fieldsState[key]) {
                values[key] = fieldValue;
            }
        }
    }
    return values;
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isFileInput = (element) => element.type === 'file';

var isFunction = (value) => typeof value === 'function';

var isHTMLElement = (value) => {
    if (!isWeb) {
        return false;
    }
    const owner = value ? value.ownerDocument : 0;
    return (value instanceof
        (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement));
};

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

var live = (ref) => isHTMLElement(ref) && ref.isConnected;

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path)
        ? path
        : isKey(path)
            ? [path]
            : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 &&
        ((isObject(childObject) && isEmptyObject(childObject)) ||
            (Array.isArray(childObject) && isEmptyArray(childObject)))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}

var objectHasFunction = (data) => {
    for (const key in data) {
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};

function isTraversable(value) {
    return Array.isArray(value) || (isObject(value) && !objectHasFunction(value));
}
function markFieldsDirty(data, fields = {}) {
    for (const key in data) {
        const value = data[key];
        if (isTraversable(value)) {
            fields[key] = Array.isArray(value) ? [] : {};
            markFieldsDirty(value, fields[key]);
        }
        else if (!isUndefined(value)) {
            fields[key] = true;
        }
    }
    return fields;
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
    if (!dirtyFieldsFromValues) {
        dirtyFieldsFromValues = markFieldsDirty(formValues);
    }
    for (const key in data) {
        const value = data[key];
        if (isTraversable(value)) {
            if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
                dirtyFieldsFromValues[key] = markFieldsDirty(value, Array.isArray(value) ? [] : {});
            }
            else {
                getDirtyFields(value, isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
            }
        }
        else {
            const formValue = formValues[key];
            dirtyFieldsFromValues[key] = !deepEqual(value, formValue);
        }
    }
    return dirtyFieldsFromValues;
}

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : value
                ? +value
                : value
        : valueAsDate && isString(value)
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}

var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = index_esm_get(_fields, name);
        field && index_esm_set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var isRegex = (value) => value instanceof RegExp;

var getRuleValue = (rule) => isUndefined(rule)
    ? rule
    : isRegex(rule)
        ? rule.source
        : isObject(rule)
            ? isRegex(rule.value)
                ? rule.value.source
                : rule.value
            : rule;

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

const ASYNC_FUNCTION = 'AsyncFunction';
var hasPromiseValidation = (fieldReference) => !!fieldReference &&
    !!fieldReference.validate &&
    !!((isFunction(fieldReference.validate) &&
        fieldReference.validate.constructor.name === ASYNC_FUNCTION) ||
        (isObject(fieldReference.validate) &&
            Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION)));

var hasValidation = (options) => options.mount &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
    (_names.watchAll ||
        _names.watch.has(name) ||
        [..._names.watch].some((watchName) => name.startsWith(watchName) &&
            /^\.\w+/.test(name.slice(watchName.length))));

const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = index_esm_get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    return true;
                }
                else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    return true;
                }
                else {
                    if (iterateFieldsByAction(currentField, action)) {
                        break;
                    }
                }
            }
            else if (isObject(currentField)) {
                if (iterateFieldsByAction(currentField, action)) {
                    break;
                }
            }
        }
    }
    return;
};

function schemaErrorLookup(errors, _fields, name) {
    const error = index_esm_get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name,
        };
    }
    const names = name.split('.');
    while (names.length) {
        const fieldName = names.join('.');
        const field = index_esm_get(_fields, fieldName);
        const foundError = index_esm_get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return { name };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError,
            };
        }
        if (foundError && foundError.root && foundError.root.type) {
            return {
                name: `${fieldName}.root`,
                error: foundError.root,
            };
        }
        names.pop();
    }
    return {
        name,
    };
}

var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
        Object.keys(formState).find((key) => _proxyFormState[key] ===
            (!isRoot || VALIDATION_MODE.all)));
};

var shouldSubscribeByName = (name, signalName, exact) => !name ||
    !signalName ||
    name === signalName ||
    convertToArrayPayload(name).some((currentName) => currentName &&
        (exact
            ? currentName === signalName
            : currentName.startsWith(signalName) ||
                signalName.startsWith(currentName)));

var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
        return false;
    }
    else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var unsetEmptyArray = (ref, name) => !compact(index_esm_get(ref, name)).length && unset(ref, name);

var updateFieldArrayRootError = (errors, error, name) => {
    const fieldArrayErrors = convertToArrayPayload(index_esm_get(errors, name));
    index_esm_set(fieldArrayErrors, 'root', error[name]);
    index_esm_set(errors, name, fieldArrayErrors);
    return errors;
};

function getValidateError(result, ref, type = 'validate') {
    if (isString(result) ||
        (Array.isArray(result) && result.every(isString)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isString(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, } = field._f;
    const inputValue = index_esm_get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) &&
        isUndefined(ref.value) &&
        isUndefined(inputValue)) ||
        (isHTMLElement(ref) && ref.value === '') ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message),
        };
    };
    if (isFieldArray
        ? !Array.isArray(inputValue) || !inputValue.length
        : required &&
            ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
                (isBoolean(inputValue) && !inputValue) ||
                (isCheckBox && !getCheckboxValue(refs).isValid) ||
                (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isString(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber ||
                (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time) => new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime
                    ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value)
                    : isWeek
                        ? inputValue > maxOutput.value
                        : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime
                    ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value)
                    : isWeek
                        ? inputValue < minOutput.value
                        : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) &&
        !isEmpty &&
        (isString(inputValue) || (isFieldArray && Array.isArray(inputValue)))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message),
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult,
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};

const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true,
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props,
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isReady: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false,
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values)
        ? cloneObject(_options.defaultValues || _options.values) || {}
        : {};
    let _formValues = _options.shouldUnregister
        ? {}
        : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false,
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    };
    let _proxySubscribeFormState = {
        ..._proxyFormState,
    };
    const _subjects = {
        array: createSubject(),
        state: createSubject(),
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback) => (wait) => {
        clearTimeout(timer);
        timer = setTimeout(callback, wait);
    };
    const _setValid = async (shouldUpdateValid) => {
        if (!_options.disabled &&
            (_proxyFormState.isValid ||
                _proxySubscribeFormState.isValid ||
                shouldUpdateValid)) {
            const isValid = _options.resolver
                ? isEmptyObject((await _runSchema()).errors)
                : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid,
                });
            }
        }
    };
    const _updateIsValidating = (names, isValidating) => {
        if (!_options.disabled &&
            (_proxyFormState.isValidating ||
                _proxyFormState.validatingFields ||
                _proxySubscribeFormState.isValidating ||
                _proxySubscribeFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name) => {
                if (name) {
                    isValidating
                        ? index_esm_set(_formState.validatingFields, name, isValidating)
                        : unset(_formState.validatingFields, name);
                }
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !isEmptyObject(_formState.validatingFields),
            });
        }
    };
    const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(index_esm_get(_fields, name))) {
                const fieldValues = method(index_esm_get(_fields, name), args.argA, args.argB);
                shouldSetValues && index_esm_set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState &&
                Array.isArray(index_esm_get(_formState.errors, name))) {
                const errors = method(index_esm_get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && index_esm_set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if ((_proxyFormState.touchedFields ||
                _proxySubscribeFormState.touchedFields) &&
                shouldUpdateFieldsAndState &&
                Array.isArray(index_esm_get(_formState.touchedFields, name))) {
                const touchedFields = method(index_esm_get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && index_esm_set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid,
            });
        }
        else {
            index_esm_set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error) => {
        index_esm_set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const _setErrors = (errors) => {
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false,
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
        const field = index_esm_get(_fields, name);
        if (field) {
            const defaultValue = index_esm_get(_formValues, name, isUndefined(value) ? index_esm_get(_defaultValues, name) : value);
            isUndefined(defaultValue) ||
                (ref && ref.defaultChecked) ||
                shouldSkipSetValueAs
                ? index_esm_set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                : setFieldValue(name, defaultValue);
            _state.mount && !_state.action && _setValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name,
        };
        if (!_options.disabled) {
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = deepEqual(index_esm_get(_defaultValues, name), fieldValue);
                isPreviousDirty = !!index_esm_get(_formState.dirtyFields, name);
                isCurrentFieldPristine
                    ? unset(_formState.dirtyFields, name)
                    : index_esm_set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField =
                    shouldUpdateField ||
                        ((_proxyFormState.dirtyFields ||
                            _proxySubscribeFormState.dirtyFields) &&
                            isPreviousDirty !== !isCurrentFieldPristine);
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = index_esm_get(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    index_esm_set(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField =
                        shouldUpdateField ||
                            ((_proxyFormState.touchedFields ||
                                _proxySubscribeFormState.touchedFields) &&
                                isPreviousFieldTouched !== isBlurEvent);
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState) => {
        const previousFieldError = index_esm_get(_formState.errors, name);
        const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) &&
            isBoolean(isValid) &&
            _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(() => updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        }
        else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error
                ? index_esm_set(_formState.errors, name, error)
                : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
            !isEmptyObject(fieldState) ||
            shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...(shouldUpdateValid && isBoolean(isValid) ? { isValid } : {}),
                errors: _formState.errors,
                name,
            };
            _formState = {
                ..._formState,
                ...updatedFormState,
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _runSchema = async (name) => {
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        _updateIsValidating(name);
        return result;
    };
    const executeSchemaAndUpdateState = async (names) => {
        const { errors } = await _runSchema(names);
        if (names) {
            for (const name of names) {
                const error = index_esm_get(errors, name);
                error
                    ? index_esm_set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
        }
        else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fields) {
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([_f.name], true);
                    }
                    const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([_f.name]);
                    }
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid &&
                        (index_esm_get(fieldError, _f.name)
                            ? isFieldArrayRoot
                                ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name)
                                : index_esm_set(_formState.errors, _f.name, fieldError[_f.name])
                            : unset(_formState.errors, _f.name));
                }
                !isEmptyObject(fieldValue) &&
                    (await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context));
            }
        }
        return context.valid;
    };
    const _removeUnmounted = () => {
        for (const name of _names.unMount) {
            const field = index_esm_get(_fields, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every((ref) => !live(ref))
                    : !live(field._f.ref)) &&
                unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data) => !_options.disabled &&
        (name && data && index_esm_set(_formValues, name, data),
            !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
        ...(_state.mount
            ? _formValues
            : isUndefined(defaultValue)
                ? _defaultValues
                : isString(names)
                    ? { [names]: defaultValue }
                    : defaultValue),
    }, isGlobal, defaultValue);
    const _getFieldArray = (name) => compact(index_esm_get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? index_esm_get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
        const field = index_esm_get(_fields, name);
        let fieldValue = value;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled &&
                    index_esm_set(_formValues, name, getFieldValueAs(value, fieldReference));
                fieldValue =
                    isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                        ? ''
                        : value;
                if (isMultipleSelect(fieldReference.ref)) {
                    [...fieldReference.ref.options].forEach((optionRef) => (optionRef.selected = fieldValue.includes(optionRef.value)));
                }
                else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.forEach((checkboxRef) => {
                            if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                                if (Array.isArray(fieldValue)) {
                                    checkboxRef.checked = !!fieldValue.find((data) => data === checkboxRef.value);
                                }
                                else {
                                    checkboxRef.checked =
                                        fieldValue === checkboxRef.value || !!fieldValue;
                                }
                            }
                        });
                    }
                    else {
                        fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                    }
                }
                else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                }
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.state.next({
                            name,
                            values: cloneObject(_formValues),
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) &&
            updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value, options) => {
        for (const fieldKey in value) {
            if (!value.hasOwnProperty(fieldKey)) {
                return;
            }
            const fieldValue = value[fieldKey];
            const fieldName = name + '.' + fieldKey;
            const field = index_esm_get(_fields, fieldName);
            (_names.array.has(name) ||
                isObject(fieldValue) ||
                (field && !field._f)) &&
                !isDateObject(fieldValue)
                ? setValues(fieldName, fieldValue, options)
                : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value, options = {}) => {
        const field = index_esm_get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value);
        index_esm_set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: cloneObject(_formValues),
            });
            if ((_proxyFormState.isDirty ||
                _proxyFormState.dirtyFields ||
                _proxySubscribeFormState.isDirty ||
                _proxySubscribeFormState.dirtyFields) &&
                options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue),
                });
            }
        }
        else {
            field && !field._f && !isNullOrUndefined(cloneValue)
                ? setValues(name, cloneValue, options)
                : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({ ..._formState, name });
        _subjects.state.next({
            name: _state.mount ? name : undefined,
            values: cloneObject(_formValues),
        });
    };
    const onChange = async (event) => {
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = index_esm_get(_fields, name);
        const _updateIsFieldValueUpdated = (fieldValue) => {
            isFieldValueUpdated =
                Number.isNaN(fieldValue) ||
                    (isDateObject(fieldValue) && isNaN(fieldValue.getTime())) ||
                    deepEqual(fieldValue, index_esm_get(_formValues, name, fieldValue));
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type
                ? getFieldValue(field._f)
                : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = (!hasValidation(field._f) &&
                !_options.resolver &&
                !index_esm_get(_formState.errors, name) &&
                !field._f.deps) ||
                skipValidation(isBlurEvent, index_esm_get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            index_esm_set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                if (!target || !target.readOnly) {
                    field._f.onBlur && field._f.onBlur(event);
                    delayErrorCallback && delayErrorCallback(0);
                }
            }
            else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent &&
                _subjects.state.next({
                    name,
                    type: event.type,
                    values: cloneObject(_formValues),
                });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                    if (_options.mode === 'onBlur') {
                        if (isBlurEvent) {
                            _setValid();
                        }
                    }
                    else if (!isBlurEvent) {
                        _setValid();
                    }
                }
                return (shouldRender &&
                    _subjects.state.next({ name, ...(watched ? {} : fieldState) }));
            }
            !isBlurEvent && watched && _subjects.state.next({ ..._formState });
            if (_options.resolver) {
                const { errors } = await _runSchema([name]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            }
            else {
                _updateIsValidating([name], true);
                error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([name]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    }
                    else if (_proxyFormState.isValid ||
                        _proxySubscribeFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps &&
                    (!Array.isArray(field._f.deps) || field._f.deps.length > 0) &&
                    trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key) => {
        if (index_esm_get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {}) => {
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name
                ? !fieldNames.some((name) => index_esm_get(errors, name))
                : isValid;
        }
        else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                const field = index_esm_get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _setValid();
        }
        else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...(!isString(name) ||
                ((_proxyFormState.isValid || _proxySubscribeFormState.isValid) &&
                    isValid !== _formState.isValid)
                ? {}
                : { name }),
            ...(_options.resolver || !name ? { isValid } : {}),
            errors: _formState.errors,
        });
        options.shouldFocus &&
            !validationResult &&
            iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames, config) => {
        let values = {
            ...(_state.mount ? _formValues : _defaultValues),
        };
        if (config) {
            values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
        }
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? index_esm_get(values, fieldNames)
                : fieldNames.map((name) => index_esm_get(values, name));
    };
    const getFieldState = (name, formState) => ({
        invalid: !!index_esm_get((formState || _formState).errors, name),
        isDirty: !!index_esm_get((formState || _formState).dirtyFields, name),
        error: index_esm_get((formState || _formState).errors, name),
        isValidating: !!index_esm_get(_formState.validatingFields, name),
        isTouched: !!index_esm_get((formState || _formState).touchedFields, name),
    });
    const clearErrors = (name) => {
        name &&
            convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {},
        });
    };
    const setError = (name, error, options) => {
        const ref = (index_esm_get(_fields, name, { _f: {} })._f || {}).ref;
        const currentError = index_esm_get(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
        index_esm_set(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref,
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name)
        ? _subjects.state.subscribe({
            next: (payload) => 'values' in payload &&
                name(_getWatch(undefined, defaultValue), payload),
        })
        : _getWatch(name, defaultValue, true);
    const _subscribe = (props) => _subjects.state.subscribe({
        next: (formState) => {
            if (shouldSubscribeByName(props.name, formState.name, props.exact) &&
                shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
                props.callback({
                    values: { ..._formValues },
                    ..._formState,
                    ...formState,
                    defaultValues: _defaultValues,
                });
            }
        },
    }).unsubscribe;
    const subscribe = (props) => {
        _state.mount = true;
        _proxySubscribeFormState = {
            ..._proxySubscribeFormState,
            ...props.formState,
        };
        return _subscribe({
            ...props,
            formState: _proxySubscribeFormState,
        });
    };
    const unregister = (name, options = {}) => {
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating &&
                unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister &&
                !options.keepDefaultValue &&
                unset(_defaultValues, fieldName);
        }
        _subjects.state.next({
            values: cloneObject(_formValues),
        });
        _subjects.state.next({
            ..._formState,
            ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),
        });
        !options.keepIsValid && _setValid();
    };
    const _setDisabledField = ({ disabled, name, }) => {
        if ((isBoolean(disabled) && _state.mount) ||
            !!disabled ||
            _names.disabled.has(name)) {
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
        }
    };
    const register = (name, options = {}) => {
        let field = index_esm_get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
        index_esm_set(_fields, name, {
            ...(field || {}),
            _f: {
                ...(field && field._f ? field._f : { ref: { name } }),
                name,
                mount: true,
                ...options,
            },
        });
        _names.mount.add(name);
        if (field) {
            _setDisabledField({
                disabled: isBoolean(options.disabled)
                    ? options.disabled
                    : _options.disabled,
                name,
            });
        }
        else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...(disabledIsDefined
                ? { disabled: options.disabled || _options.disabled }
                : {}),
            ...(_options.progressive
                ? {
                    required: !!options.required,
                    min: getRuleValue(options.min),
                    max: getRuleValue(options.max),
                    minLength: getRuleValue(options.minLength),
                    maxLength: getRuleValue(options.maxLength),
                    pattern: getRuleValue(options.pattern),
                }
                : {}),
            name,
            onChange,
            onBlur: onChange,
            ref: (ref) => {
                if (ref) {
                    register(name, options);
                    field = index_esm_get(_fields, name);
                    const fieldRef = isUndefined(ref.value)
                        ? ref.querySelectorAll
                            ? ref.querySelectorAll('input,select,textarea')[0] || ref
                            : ref
                        : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox
                        ? refs.find((option) => option === fieldRef)
                        : fieldRef === field._f.ref) {
                        return;
                    }
                    index_esm_set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...(radioOrCheckbox
                                ? {
                                    refs: [
                                        ...refs.filter(live),
                                        fieldRef,
                                        ...(Array.isArray(index_esm_get(_defaultValues, name)) ? [{}] : []),
                                    ],
                                    ref: { type: fieldRef.type, name },
                                }
                                : { ref: fieldRef }),
                        },
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                }
                else {
                    field = index_esm_get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) &&
                        !(isNameInFieldArray(_names.array, name) && _state.action) &&
                        _names.unMount.add(name);
                }
            },
        };
    };
    const _focusError = () => _options.shouldFocusError &&
        iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled) => {
        if (isBoolean(disabled)) {
            _subjects.state.next({ disabled });
            iterateFieldsByAction(_fields, (ref, name) => {
                const currentField = index_esm_get(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) {
                        currentField._f.refs.forEach((inputRef) => {
                            inputRef.disabled = currentField._f.disabled || disabled;
                        });
                    }
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
        let onValidError = undefined;
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist &&
                e.persist();
        }
        let fieldValues = cloneObject(_formValues);
        _subjects.state.next({
            isSubmitting: true,
        });
        if (_options.resolver) {
            const { errors, values } = await _runSchema();
            _formState.errors = errors;
            fieldValues = cloneObject(values);
        }
        else {
            await executeBuiltInValidation(_fields);
        }
        if (_names.disabled.size) {
            for (const name of _names.disabled) {
                unset(fieldValues, name);
            }
        }
        unset(_formState.errors, 'root');
        if (isEmptyObject(_formState.errors)) {
            _subjects.state.next({
                errors: {},
            });
            try {
                await onValid(fieldValues, e);
            }
            catch (error) {
                onValidError = error;
            }
        }
        else {
            if (onInvalid) {
                await onInvalid({ ..._formState.errors }, e);
            }
            _focusError();
            setTimeout(_focusError);
        }
        _subjects.state.next({
            isSubmitted: true,
            isSubmitting: false,
            isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
            submitCount: _formState.submitCount + 1,
            errors: _formState.errors,
        });
        if (onValidError) {
            throw onValidError;
        }
    };
    const resetField = (name, options = {}) => {
        if (index_esm_get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(index_esm_get(_defaultValues, name)));
            }
            else {
                setValue(name, options.defaultValue);
                index_esm_set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue
                    ? _getDirty(name, cloneObject(index_esm_get(_defaultValues, name)))
                    : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _setValid();
            }
            _subjects.state.next({ ..._formState });
        }
    };
    const _reset = (formValues, keepStateOptions = {}) => {
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const isEmptyResetValues = isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys(getDirtyFields(_defaultValues, _formValues)),
                ]);
                for (const fieldName of Array.from(fieldsToCheck)) {
                    index_esm_get(_formState.dirtyFields, fieldName)
                        ? index_esm_set(values, fieldName, index_esm_get(_formValues, fieldName))
                        : setValue(fieldName, index_esm_get(values, fieldName));
                }
            }
            else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount) {
                        const field = index_esm_get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs)
                                ? field._f.refs[0]
                                : field._f.ref;
                            if (isHTMLElement(fieldReference)) {
                                const form = fieldReference.closest('form');
                                if (form) {
                                    form.reset();
                                    break;
                                }
                            }
                        }
                    }
                }
                if (keepStateOptions.keepFieldsRef) {
                    for (const fieldName of _names.mount) {
                        setValue(fieldName, index_esm_get(values, fieldName));
                    }
                }
                else {
                    _fields = {};
                }
            }
            _formValues = _options.shouldUnregister
                ? keepStateOptions.keepDefaultValues
                    ? cloneObject(_defaultValues)
                    : {}
                : cloneObject(values);
            _subjects.array.next({
                values: { ...values },
            });
            _subjects.state.next({
                values: { ...values },
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: '',
        };
        _state.mount =
            !_proxyFormState.isValid ||
                !!keepStateOptions.keepIsValid ||
                !!keepStateOptions.keepDirtyValues ||
                (!_options.shouldUnregister && !isEmptyObject(values));
        _state.watch = !!_options.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? _formState.submitCount
                : 0,
            isDirty: isEmptyResetValues
                ? false
                : keepStateOptions.keepDirty
                    ? _formState.isDirty
                    : !!(keepStateOptions.keepDefaultValues &&
                        !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? _formState.isSubmitted
                : false,
            dirtyFields: isEmptyResetValues
                ? {}
                : keepStateOptions.keepDirtyValues
                    ? keepStateOptions.keepDefaultValues && _formValues
                        ? getDirtyFields(_defaultValues, _formValues)
                        : _formState.dirtyFields
                    : keepStateOptions.keepDefaultValues && formValues
                        ? getDirtyFields(_defaultValues, formValues)
                        : keepStateOptions.keepDirty
                            ? _formState.dirtyFields
                            : {},
            touchedFields: keepStateOptions.keepTouched
                ? _formState.touchedFields
                : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful
                ? _formState.isSubmitSuccessful
                : false,
            isSubmitting: false,
            defaultValues: _defaultValues,
        });
    };
    const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues)
        ? formValues(_formValues)
        : formValues, keepStateOptions);
    const setFocus = (name, options = {}) => {
        const field = index_esm_get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs
                ? fieldReference.refs[0]
                : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect &&
                    isFunction(fieldRef.select) &&
                    fieldRef.select();
            }
        }
    };
    const _setFormState = (updatedFormState) => {
        _formState = {
            ..._formState,
            ...updatedFormState,
        };
    };
    const _resetDefaultValues = () => isFunction(_options.defaultValues) &&
        _options.defaultValues().then((values) => {
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false,
            });
        });
    const methods = {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _subscribe,
            _runSchema,
            _focusError,
            _getWatch,
            _getDirty,
            _setValid,
            _setFieldArray,
            _setDisabledField,
            _setErrors,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _removeUnmounted,
            _disableForm,
            _subjects,
            _proxyFormState,
            get _fields() {
                return _fields;
            },
            get _formValues() {
                return _formValues;
            },
            get _state() {
                return _state;
            },
            set _state(value) {
                _state = value;
            },
            get _defaultValues() {
                return _defaultValues;
            },
            get _names() {
                return _names;
            },
            set _names(value) {
                _names = value;
            },
            get _formState() {
                return _formState;
            },
            get _options() {
                return _options;
            },
            set _options(value) {
                _options = {
                    ..._options,
                    ...value,
                };
            },
        },
        subscribe,
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState,
    };
    return {
        ...methods,
        formControl: methods,
    };
}

var generateId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var getFocusFieldName = (name, index, options = {}) => options.shouldFocus || isUndefined(options.shouldFocus)
    ? options.focusName ||
        `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.`
    : '';

var appendAt = (data, value) => [
    ...data,
    ...convertToArrayPayload(value),
];

var fillEmptyArray = (value) => Array.isArray(value) ? value.map(() => undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};

var prependAt = (data, value) => [
    ...convertToArrayPayload(value),
    ...convertToArrayPayload(data),
];

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    [data[indexA], data[indexB]] = [data[indexB], data[indexA]];
};

var updateAt = (fieldValues, index, value) => {
    fieldValues[index] = value;
    return fieldValues;
};

/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, rules, } = props;
    const [fields, setFields] = React.useState(control._getFieldArray(name));
    const ids = React.useRef(control._getFieldArray(name).map(generateId));
    const _actioned = React.useRef(false);
    control._names.array.add(name);
    React.useMemo(() => rules &&
        fields.length >= 0 &&
        control.register(name, rules), [control, name, fields.length, rules]);
    useIsomorphicLayoutEffect(() => control._subjects.array.subscribe({
        next: ({ values, name: fieldArrayName, }) => {
            if (fieldArrayName === name || !fieldArrayName) {
                const fieldValues = index_esm_get(values, name);
                if (Array.isArray(fieldValues)) {
                    setFields(fieldValues);
                    ids.current = fieldValues.map(generateId);
                }
            }
        },
    }).unsubscribe, [control, name]);
    const updateValues = React.useCallback((updatedFieldArrayValues) => {
        _actioned.current = true;
        control._setFieldArray(name, updatedFieldArrayValues);
    }, [control, name]);
    const append = (value, options) => {
        const appendValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = appendAt(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, appendAt, {
            argA: fillEmptyArray(value),
        });
    };
    const prepend = (value, options) => {
        const prependValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prependAt(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, prependAt, {
            argA: fillEmptyArray(value),
        });
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        !Array.isArray(index_esm_get(control._fields, name)) &&
            index_esm_set(control._fields, name, undefined);
        control._setFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index,
        });
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value),
        });
    };
    const swap = (indexA, indexB) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, false);
    };
    const move = (from, to) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to,
        }, false);
    };
    const update = (index, value) => {
        const updateValue = cloneObject(value);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [...updatedFieldArrayValues].map((item, i) => !item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([...updatedFieldArrayValues]);
        control._setFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue,
        }, true, false);
    };
    const replace = (value) => {
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([...updatedFieldArrayValues]);
        setFields([...updatedFieldArrayValues]);
        control._setFieldArray(name, [...updatedFieldArrayValues], (data) => data, {}, true, false);
    };
    React.useEffect(() => {
        control._state.action = false;
        isWatched(name, control._names) &&
            control._subjects.state.next({
                ...control._formState,
            });
        if (_actioned.current &&
            (!getValidationModes(control._options.mode).isOnSubmit ||
                control._formState.isSubmitted) &&
            !getValidationModes(control._options.reValidateMode).isOnSubmit) {
            if (control._options.resolver) {
                control._runSchema([name]).then((result) => {
                    const error = index_esm_get(result.errors, name);
                    const existingError = index_esm_get(control._formState.errors, name);
                    if (existingError
                        ? (!error && existingError.type) ||
                            (error &&
                                (existingError.type !== error.type ||
                                    existingError.message !== error.message))
                        : error && error.type) {
                        error
                            ? index_esm_set(control._formState.errors, name, error)
                            : unset(control._formState.errors, name);
                        control._subjects.state.next({
                            errors: control._formState.errors,
                        });
                    }
                });
            }
            else {
                const field = index_esm_get(control._fields, name);
                if (field &&
                    field._f &&
                    !(getValidationModes(control._options.reValidateMode).isOnSubmit &&
                        getValidationModes(control._options.mode).isOnSubmit)) {
                    validateField(field, control._names.disabled, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error) => !isEmptyObject(error) &&
                        control._subjects.state.next({
                            errors: updateFieldArrayRootError(control._formState.errors, error, name),
                        }));
                }
            }
        }
        control._subjects.state.next({
            name,
            values: cloneObject(control._formValues),
        });
        control._names.focus &&
            iterateFieldsByAction(control._fields, (ref, key) => {
                if (control._names.focus &&
                    key.startsWith(control._names.focus) &&
                    ref.focus) {
                    ref.focus();
                    return 1;
                }
                return;
            });
        control._names.focus = '';
        control._setValid();
        _actioned.current = false;
    }, [fields, name, control]);
    React.useEffect(() => {
        !index_esm_get(control._formValues, name) && control._setFieldArray(name);
        return () => {
            const updateMounted = (name, value) => {
                const field = index_esm_get(control._fields, name);
                if (field && field._f) {
                    field._f.mount = value;
                }
            };
            control._options.shouldUnregister || shouldUnregister
                ? control.unregister(name)
                : updateMounted(name, false);
        };
    }, [name, control, keyName, shouldUnregister]);
    return {
        swap: React.useCallback(swap, [updateValues, name, control]),
        move: React.useCallback(move, [updateValues, name, control]),
        prepend: React.useCallback(prepend, [updateValues, name, control]),
        append: React.useCallback(append, [updateValues, name, control]),
        remove: React.useCallback(remove, [updateValues, name, control]),
        insert: React.useCallback(insert$1, [updateValues, name, control]),
        update: React.useCallback(update, [updateValues, name, control]),
        replace: React.useCallback(replace, [updateValues, name, control]),
        fields: React.useMemo(() => fields.map((field, index) => ({
            ...field,
            [keyName]: ids.current[index] || generateId(),
        })), [fields, keyName]),
    };
}

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */
function useForm(props = {}) {
    const _formControl = react.useRef(undefined);
    const _values = react.useRef(undefined);
    const [formState, updateFormState] = react.useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        isReady: false,
        defaultValues: isFunction(props.defaultValues)
            ? undefined
            : props.defaultValues,
    });
    if (!_formControl.current) {
        if (props.formControl) {
            _formControl.current = {
                ...props.formControl,
                formState,
            };
            if (props.defaultValues && !isFunction(props.defaultValues)) {
                props.formControl.reset(props.defaultValues, props.resetOptions);
            }
        }
        else {
            const { formControl, ...rest } = createFormControl(props);
            _formControl.current = {
                ...rest,
                formState,
            };
        }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect(() => {
        const sub = control._subscribe({
            formState: control._proxyFormState,
            callback: () => updateFormState({ ...control._formState }),
            reRenderRoot: true,
        });
        updateFormState((data) => ({
            ...data,
            isReady: true,
        }));
        control._formState.isReady = true;
        return sub;
    }, [control]);
    react.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
    react.useEffect(() => {
        if (props.mode) {
            control._options.mode = props.mode;
        }
        if (props.reValidateMode) {
            control._options.reValidateMode = props.reValidateMode;
        }
    }, [control, props.mode, props.reValidateMode]);
    react.useEffect(() => {
        if (props.errors) {
            control._setErrors(props.errors);
            control._focusError();
        }
    }, [control, props.errors]);
    react.useEffect(() => {
        props.shouldUnregister &&
            control._subjects.state.next({
                values: control._getWatch(),
            });
    }, [control, props.shouldUnregister]);
    react.useEffect(() => {
        if (control._proxyFormState.isDirty) {
            const isDirty = control._getDirty();
            if (isDirty !== formState.isDirty) {
                control._subjects.state.next({
                    isDirty,
                });
            }
        }
    }, [control, formState.isDirty]);
    react.useEffect(() => {
        var _a;
        if (props.values && !deepEqual(props.values, _values.current)) {
            control._reset(props.values, {
                keepFieldsRef: true,
                ...control._options.resetOptions,
            });
            if (!((_a = control._options.resetOptions) === null || _a === void 0 ? void 0 : _a.keepIsValid)) {
                control._setValid();
            }
            _values.current = props.values;
            updateFormState((state) => ({ ...state }));
        }
        else {
            control._resetDefaultValues();
        }
    }, [control, props.values]);
    react.useEffect(() => {
        if (!control._state.mount) {
            control._setValid();
            control._state.mount = true;
        }
        if (control._state.watch) {
            control._state.watch = false;
            control._subjects.state.next({ ...control._formState });
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}

/**
 * Watch component that subscribes to form field changes and re-renders when watched fields update.
 *
 * @param control - The form control object from useForm
 * @param names - Array of field names to watch for changes
 * @param render - The function that receives watched values and returns ReactNode
 * @returns The result of calling render function with watched values
 *
 * @example
 * The `Watch` component only re-render when the values of `foo`, `bar`, and `baz.qux` change.
 * The types of `foo`, `bar`, and `baz.qux` are precisely inferred.
 *
 * ```tsx
 * const { control } = useForm();
 *
 * <Watch
 *   control={control}
 *   names={['foo', 'bar', 'baz.qux']}
 *   render={([foo, bar, baz_qux]) => <div>{foo}{bar}{baz_qux}</div>}
 * />
 * ```
 */
const Watch = ({ control, names, render, }) => render(useWatch({ control, name: names }));


//# sourceMappingURL=index.esm.mjs.map

;// ./node_modules/@evershop/evershop/dist/components/common/form/Form.js





function Form_Form({ form: externalForm, action, method = 'POST', formOptions, onSubmit, onSuccess, onError, successMessage = _('Saved successfully!'), errorMessage = _('Something went wrong! Please try again.'), submitBtn = true, submitBtnText = _('Save'), loading = false, children, className, noValidate = true, ...props }) {
    const theForm = externalForm ||
        useForm({
            shouldUnregister: true,
            ...formOptions
        });
    const { handleSubmit, formState: { isSubmitting } } = theForm;
    const defaultSubmit = async (data) => {
        if (!action) {
            return;
        }
        try {
            const response = await fetch(action, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.error) {
                if (onError) {
                    onError(result.error, data);
                }
                else {
                    toast.error(result.error.message || errorMessage);
                }
            }
            else if (onSuccess) {
                onSuccess(result, data);
            }
            else {
                toast.success(successMessage);
            }
        }
        catch (error) {
            if (onError) {
                onError(errorMessage || (error instanceof Error ? error.message : ''), data);
            }
            else {
                toast.error(errorMessage || (error instanceof Error ? error.message : ''));
            }
        }
    };
    const handleFormSubmit = onSubmit || defaultSubmit;
    return (react.createElement(FormProvider, { ...theForm },
        react.createElement("form", { onSubmit: handleSubmit(handleFormSubmit), className: className, noValidate: noValidate, ...props },
            react.createElement("fieldset", { disabled: loading }, children),
            submitBtn && (react.createElement("div", { className: "mt-4" },
                react.createElement(common_Button, { title: submitBtnText, type: "submit", onAction: () => {
                        handleSubmit(handleFormSubmit);
                    }, isLoading: isSubmitting || loading }))))));
}


//# sourceMappingURL=Form.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/Tooltip.js

function Tooltip({ content, position = 'top', className = '' }) {
    const [isVisible, setIsVisible] = (0,react.useState)(false);
    const positionClasses = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
    };
    const arrowClasses = {
        top: 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800',
        bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800',
        left: 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-800',
        right: 'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-800'
    };
    return (react.createElement("div", { className: `relative inline-flex ${className}` },
        react.createElement("button", { type: "button", className: "inline-flex items-center justify-center w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 transition-colors duration-200", onMouseEnter: () => setIsVisible(true), onMouseLeave: () => setIsVisible(false), onFocus: () => setIsVisible(true), onBlur: () => setIsVisible(false), tabIndex: -1 },
            react.createElement("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20" },
                react.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }))),
        isVisible && (react.createElement("div", { className: `absolute z-50 px-3 py-2 text-sm font-normal text-white bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${positionClasses[position]} opacity-100 scale-100`, style: { minWidth: '200px', maxWidth: '300px' } },
            content,
            react.createElement("div", { className: `absolute w-0 h-0 ${arrowClasses[position]}` })))));
}
//# sourceMappingURL=Tooltip.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/utils/getNestedError.js
/**
 * Helper function to get nested error from react-hook-form errors object
 * Handles both simple field names and nested array field names using dot notation (e.g., "attributes.0.value")
 * Also supports legacy bracket notation for backward compatibility
 */
const getNestedError = (name, errors, error) => {
    var _a;
    if (error)
        return error;
    if (!name.includes('.') && !name.includes('[')) {
        return (_a = errors[name]) === null || _a === void 0 ? void 0 : _a.message;
    }
    let parts;
    if (name.includes('[')) {
        parts = name.split(/[\[\]]+/).filter(Boolean);
    }
    else {
        parts = name.split('.');
    }
    let current = errors;
    for (const part of parts) {
        if (current === null || current === undefined)
            return undefined;
        const index = parseInt(part);
        if (!isNaN(index)) {
            current = current[index];
        }
        else {
            current = current[part];
        }
    }
    return current === null || current === void 0 ? void 0 : current.message;
};
//# sourceMappingURL=getNestedError.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/InputField.js





function InputField({ name, label, error, helperText, required, validation, wrapperClassName, className, type = 'text', prefixIcon, suffixIcon, ...props }) {
    const { register, formState: { errors } } = useFormContext();
    const fieldError = getNestedError(name, errors, error);
    const fieldId = `field-${name}`;
    const validationRules = {
        ...validation,
        ...(required &&
            !(validation === null || validation === void 0 ? void 0 : validation.required) && {
            required: _('${field} is required', { field: label || name })
        })
    };
    const hasIcons = prefixIcon || suffixIcon;
    const inputClassName = `${fieldError !== undefined ? 'error' : ''} ${className || ''} ${hasIcons ? '!pr-3' : ''} ${prefixIcon ? '!pl-10' : ''} ${suffixIcon ? '!pr-10' : ''}`.trim();
    const renderInput = () => (react.createElement("input", { id: fieldId, type: type, ...register(name, validationRules), className: inputClassName, "aria-invalid": fieldError !== undefined ? 'true' : 'false', "aria-describedby": fieldError !== undefined ? `${fieldId}-error` : undefined, ...props }));
    return (react.createElement("div", { className: `form-field ${wrapperClassName || ''}`.trim() },
        label && (react.createElement("label", { htmlFor: fieldId },
            label,
            required && react.createElement("span", { className: "required-indicator" }, "*"),
            helperText && react.createElement(Tooltip, { content: helperText, position: "top" }))),
        hasIcons ? (react.createElement("div", { className: `input__wrapper relative flex group items-center`.trim() },
            prefixIcon && (react.createElement("div", { className: "prefix absolute left-3 z-10 flex items-center justify-center" }, prefixIcon)),
            renderInput(),
            suffixIcon && (react.createElement("div", { className: "suffix absolute right-3 z-10 flex items-center justify-center" }, suffixIcon)))) : (renderInput()),
        fieldError && (react.createElement("p", { id: `${fieldId}-error`, className: "field-error" }, fieldError))));
}
//# sourceMappingURL=InputField.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/Coupon.js



const Coupon = ({ onApplySuccess, onRemoveSuccess, onError, children }) => {
    var _a, _b;
    const cartDispatch = useCartDispatch();
    const cartState = useCartState();
    const [localError, setLocalError] = (0,react.useState)(null);
    const appliedCoupon = ((_a = cartState.data) === null || _a === void 0 ? void 0 : _a.coupon) || null;
    const hasActiveCoupon = !!appliedCoupon && appliedCoupon.trim() !== '';
    const canApplyCoupon = !!cartState.data && !hasActiveCoupon;
    const canRemoveCoupon = !!cartState.data && hasActiveCoupon;
    const isLoading = cartState.loading;
    const clearError = (0,react.useCallback)(() => {
        setLocalError(null);
        cartDispatch.clearError();
    }, [cartDispatch]);
    const applyCoupon = (0,react.useCallback)(async (code) => {
        if (!canApplyCoupon || !code.trim()) {
            const errorMsg = !cartState.data
                ? _('Cart is not initialized')
                : hasActiveCoupon
                    ? _('A coupon is already applied')
                    : _('Please enter a coupon code');
            setLocalError(errorMsg);
            onError === null || onError === void 0 ? void 0 : onError(errorMsg);
            return;
        }
        try {
            setLocalError(null);
            cartDispatch.clearError();
            await cartDispatch.applyCoupon(code.trim());
            onApplySuccess === null || onApplySuccess === void 0 ? void 0 : onApplySuccess(code.trim());
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : _('Failed to apply coupon');
            setLocalError(errorMessage);
            onError === null || onError === void 0 ? void 0 : onError(errorMessage);
        }
    }, [
        canApplyCoupon,
        cartState.data,
        hasActiveCoupon,
        cartDispatch,
        onApplySuccess,
        onError
    ]);
    const removeCoupon = (0,react.useCallback)(async () => {
        if (!canRemoveCoupon) {
            const errorMsg = !cartState.data
                ? _('Cart is not initialized')
                : _('No coupon to remove');
            setLocalError(errorMsg);
            onError === null || onError === void 0 ? void 0 : onError(errorMsg);
            return;
        }
        try {
            setLocalError(null);
            cartDispatch.clearError();
            await cartDispatch.removeCoupon();
            onRemoveSuccess === null || onRemoveSuccess === void 0 ? void 0 : onRemoveSuccess();
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : _('Failed to remove coupon');
            setLocalError(errorMessage);
            onError === null || onError === void 0 ? void 0 : onError(errorMessage);
        }
    }, [canRemoveCoupon, cartState.data, cartDispatch, onRemoveSuccess, onError]);
    const state = {
        isLoading,
        error: localError || ((_b = cartState.data) === null || _b === void 0 ? void 0 : _b.error) || null,
        appliedCoupon,
        canApplyCoupon,
        canRemoveCoupon,
        hasActiveCoupon
    };
    const actions = {
        applyCoupon,
        removeCoupon,
        clearError
    };
    return react.createElement(react.Fragment, null, children(state, actions));
};
//# sourceMappingURL=Coupon.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/CouponForm.js








function CouponForm() {
    const form = useForm();
    const coupon = form.watch('coupon');
    return (react.createElement(Coupon, { onApplySuccess: () => {
            toast.success(_('Coupon applied successfully!'));
        }, onError: () => {
            toast.error(_('Invalid coupon'));
        }, onRemoveSuccess: () => {
            toast.success(_('Coupon removed successfully!'));
        } }, (state, actions) => (react.createElement("div", { className: "coupon-form" },
        react.createElement(Form_Form, { form: form, method: "POST", submitBtn: false },
            react.createElement("div", { className: "flex justify-between gap-3" },
                react.createElement("div", { className: "w-4/5" },
                    react.createElement(InputField, { name: "coupon", required: true, validation: {
                            required: {
                                value: true,
                                message: _('Coupon code is required')
                            }
                        }, defaultValue: state.appliedCoupon || '', disabled: !!state.appliedCoupon, placeholder: _('Enter coupon code'), wrapperClassName: "mb-0 form-field" })),
                react.createElement("div", { className: "col-span-1" },
                    react.createElement(common_Button, { title: state.appliedCoupon ? _('Remove') : _('Apply'), isLoading: state.isLoading, onAction: async () => {
                            if (state.appliedCoupon) {
                                await actions.removeCoupon();
                            }
                            else {
                                const isValid = await form.trigger();
                                if (isValid) {
                                    actions.applyCoupon(coupon);
                                }
                            }
                        }, variant: state.appliedCoupon ? 'danger' : 'primary', className: "text-base" }))))))));
}
//# sourceMappingURL=CouponForm.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/CartTotalSummary.js






const SkeletonValue = ({ children, loading = false, className = '' }) => {
    if (!loading) {
        return react.createElement(react.Fragment, null, children);
    }
    return (react.createElement("span", { className: `relative ${className}` },
        react.createElement("span", { className: "opacity-0" }, children),
        react.createElement("span", { className: "absolute inset-0 bg-gray-200 rounded animate-pulse" })));
};
const Total = ({ total, totalTaxAmount, priceIncludingTax, loading = false }) => {
    return (react.createElement("div", { className: "summary__row grand-total flex justify-between py-2" },
        (priceIncludingTax && (react.createElement("div", null,
            react.createElement("div", { className: "font-bold" },
                react.createElement("span", null, _('Total'))),
            react.createElement("div", null,
                react.createElement("span", { className: "italic font-normal" },
                    "(",
                    _('Inclusive of tax ${totalTaxAmount}', { totalTaxAmount }),
                    ")"))))) || react.createElement("span", { className: "self-center font-bold" }, _('Total')),
        react.createElement("div", null,
            react.createElement("div", null),
            react.createElement(SkeletonValue, { loading: loading, className: "grand-total-value" }, total))));
};
const Tax = ({ showPriceIncludingTax, amount, loading = false }) => {
    if (showPriceIncludingTax) {
        return null;
    }
    return (react.createElement("div", { className: "summary-row flex justify-between py-2" },
        react.createElement("span", null, _('Tax')),
        react.createElement("div", null,
            react.createElement("div", null),
            react.createElement(SkeletonValue, { loading: loading, className: "text-right" }, amount))));
};
const Subtotal = ({ subTotal, loading = false }) => {
    return (react.createElement("div", { className: "flex justify-between gap-7 py-2" },
        react.createElement("div", null, _('Sub total')),
        react.createElement(SkeletonValue, { loading: loading, className: "text-right" }, subTotal)));
};
const Discount = ({ discountAmount, coupon, loading = false }) => {
    if (!coupon) {
        return (react.createElement("div", { className: "gap-7 py-2" },
            react.createElement(CouponForm, null)));
    }
    return (react.createElement("div", { className: "flex justify-between gap-7 py-2" },
        react.createElement("div", null, _('Discount(${coupon})', { coupon })),
        react.createElement(SkeletonValue, { loading: loading, className: "text-right" }, discountAmount)));
};
const Shipping = ({ method, cost, loading = false }) => {
    return (react.createElement("div", { className: "summary-row flex justify-between gap-7 py-2" },
        method && (react.createElement(react.Fragment, null,
            react.createElement("span", null, _('Shipping (${method})', { method })),
            react.createElement("div", null,
                react.createElement(SkeletonValue, { loading: loading }, cost)))),
        !method && (react.createElement(react.Fragment, null,
            react.createElement("span", null, _('Shipping')),
            react.createElement("span", { className: "text-gray-500 italic font-normal" }, _('Select shipping method'))))));
};
const DefaultCartSummary = ({ loading, showPriceIncludingTax, subTotal, discountAmount, coupon, shippingMethod, shippingCost, taxAmount, total }) => (react.createElement("div", { className: "cart__total__summary font-semibold" },
    react.createElement(common_Area, { id: "cartSummaryBeforeSubTotal", noOuter: true }),
    react.createElement(Subtotal, { subTotal: subTotal, loading: loading }),
    react.createElement(common_Area, { id: "cartSummaryAfterSubTotal", noOuter: true }),
    react.createElement(common_Area, { id: "cartSummaryBeforeDiscount", noOuter: true }),
    react.createElement(Discount, { discountAmount: discountAmount, coupon: coupon, loading: loading }),
    react.createElement(common_Area, { id: "cartSummaryAfterDiscount", noOuter: true }),
    react.createElement(common_Area, { id: "cartSummaryBeforeShipping", noOuter: true }),
    react.createElement(Shipping, { method: shippingMethod, cost: shippingCost, loading: loading }),
    react.createElement(common_Area, { id: "cartSummaryAfterShipping", noOuter: true }),
    react.createElement(common_Area, { id: "cartSummaryBeforeTax", noOuter: true }),
    react.createElement(Tax, { amount: taxAmount, showPriceIncludingTax: showPriceIncludingTax, loading: loading }),
    react.createElement(common_Area, { id: "cartSummaryAfterTax", noOuter: true }),
    react.createElement(common_Area, { id: "cartSummaryBeforeTotal", noOuter: true }),
    react.createElement(Total, { total: total, totalTaxAmount: taxAmount, priceIncludingTax: showPriceIncludingTax, loading: loading }),
    react.createElement(common_Area, { id: "cartSummaryAfterTotal", noOuter: true })));
function CartTotalSummary({ children }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { data: cart, loadingStates } = useCartState();
    const { config: { tax: { priceIncludingTax } } } = useAppState();
    const subTotal = priceIncludingTax
        ? ((_a = cart === null || cart === void 0 ? void 0 : cart.subTotalInclTax) === null || _a === void 0 ? void 0 : _a.text) || ''
        : ((_b = cart === null || cart === void 0 ? void 0 : cart.subTotal) === null || _b === void 0 ? void 0 : _b.text) || '';
    const discountAmount = ((_c = cart === null || cart === void 0 ? void 0 : cart.discountAmount) === null || _c === void 0 ? void 0 : _c.text) || '';
    const coupon = cart === null || cart === void 0 ? void 0 : cart.coupon;
    const shippingMethod = cart === null || cart === void 0 ? void 0 : cart.shippingMethodName;
    const shippingCost = priceIncludingTax
        ? ((_d = cart === null || cart === void 0 ? void 0 : cart.shippingFeeInclTax) === null || _d === void 0 ? void 0 : _d.text) || ''
        : ((_e = cart === null || cart === void 0 ? void 0 : cart.shippingFeeExclTax) === null || _e === void 0 ? void 0 : _e.text) || '';
    const taxAmount = ((_f = cart === null || cart === void 0 ? void 0 : cart.totalTaxAmount) === null || _f === void 0 ? void 0 : _f.text) || '';
    const total = ((_g = cart === null || cart === void 0 ? void 0 : cart.grandTotal) === null || _g === void 0 ? void 0 : _g.text) || '';
    return (react.createElement("div", { className: "grid grid-cols-1 gap-5" }, children ? (children({
        loading: Object.values(loadingStates).some((state) => state === true || (typeof state === 'string' && state !== null)),
        showPriceIncludingTax: priceIncludingTax,
        subTotal,
        discountAmount,
        coupon,
        shippingMethod,
        shippingCost,
        taxAmount,
        total
    })) : (react.createElement(DefaultCartSummary, { loading: Object.values(loadingStates).some((state) => state === true || (typeof state === 'string' && state !== null)), showPriceIncludingTax: priceIncludingTax, subTotal: subTotal, discountAmount: discountAmount, coupon: coupon, shippingMethod: shippingMethod, shippingCost: shippingCost, taxAmount: taxAmount, total: total }))));
}

//# sourceMappingURL=CartTotalSummary.js.map
;// ./node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js

function ShoppingBagIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));
}
const ShoppingBagIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(ShoppingBagIcon);
/* harmony default export */ const esm_ShoppingBagIcon = (ShoppingBagIcon_ForwardRef);
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/DefaultMiniCartDropdownEmpty.js




const DefaultMiniCartDropdownEmpty = ({ setIsDropdownOpen }) => (react.createElement("div", { className: "minicart__empty p-8 text-center" },
    react.createElement(Area_Area, { id: "miniCartEmptyBefore", noOuter: true }),
    react.createElement(esm_ShoppingBagIcon, { width: 48, height: 48, className: "mx-auto text-gray-300 mb-4" }),
    react.createElement("p", { className: "text-gray-500 mb-4" }, _('Your cart is empty')),
    react.createElement("button", { type: "button", onClick: () => setIsDropdownOpen(false), className: "continue__shopping__button text-blue-600 hover:text-blue-700 font-medium" }, _('Continue Shopping')),
    react.createElement(Area_Area, { id: "miniCartEmptyAfter", noOuter: true })));
//# sourceMappingURL=DefaultMiniCartDropdownEmpty.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/ProductNoThumbnail.js

const ProductNoThumbnail = ({ width, height, className }) => {
    return (react.createElement("svg", { className: `max-w-full ${className}`, width: width || 100, height: height || 100, viewBox: "0 0 251 276", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react.createElement("path", { d: "M62.2402 34.2864L0.329313 68.5728L0.131725 137.524L0 206.538L62.3061 240.95C96.5546 259.858 124.81 275.363 125.139 275.363C125.468 275.363 142.527 266.035 163.142 254.69C183.691 243.282 211.748 227.841 225.448 220.277L250.278 206.538V191.789V176.978L248.829 177.735C247.973 178.176 219.915 193.617 186.457 212.147C152.933 230.677 125.205 245.677 124.81 245.614C124.349 245.488 102.219 233.387 75.5444 218.639L27.0037 191.853V137.65V83.447L48.9359 71.346C60.9229 64.7282 82.9211 52.6271 97.7401 44.4337C112.493 36.2402 124.876 29.5594 125.139 29.5594C125.402 29.5594 142.593 38.9504 163.339 50.4212L223.801 83.447L233.337 78.0776L250.278 68.5728L223.801 54.1397C202.857 42.2908 125.6 -0.0629802 124.941 4.62725e-05C124.546 4.62725e-05 96.2912 15.4415 62.2402 34.2864Z", fill: "#BBBBBB" }),
        react.createElement("path", { d: "M188.367 102.796C154.514 121.515 126.325 137.019 125.732 137.146C125.073 137.335 108.542 128.511 87.0045 116.662L49.397 95.8632V110.8L49.4628 125.675L86.0166 145.843C106.105 156.936 123.229 166.264 124.085 166.579C125.402 167.02 134.623 162.167 187.445 132.986C221.43 114.141 249.488 98.5734 249.817 98.3213C250.08 98.0691 250.212 91.3253 250.146 83.321L249.949 68.7618L188.367 102.796Z", fill: "#BBBBBB" }),
        react.createElement("path", { d: "M243.362 126.557C239.74 128.511 211.814 143.953 181.254 160.844C150.694 177.735 125.468 191.537 125.139 191.537C124.81 191.537 107.751 182.21 87.1363 170.865L49.7263 150.192L49.5288 164.688C49.397 175.781 49.5946 179.373 50.1874 179.941C51.4388 181.012 124.349 221.16 125.139 221.16C125.798 221.16 248.763 153.406 249.817 152.524C250.08 152.272 250.212 145.528 250.146 137.461L249.949 122.902L243.362 126.557Z", fill: "#BBBBBB" })));
};

//# sourceMappingURL=ProductNoThumbnail.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/CartSummaryItems.js




const CartSummarySkeleton = ({ rows = 2 }) => {
    return (react.createElement("ul", { className: "divide-y divide-gray-200" }, Array.from({ length: rows }).map((_, i) => (react.createElement("li", { key: i, className: "flex items-center py-6 animate-pulse" },
        react.createElement("div", { className: "relative mr-4" },
            react.createElement("div", { className: "w-16 h-16 bg-gray-200 rounded border p-2 box-border" }),
            react.createElement("span", { className: "absolute -top-2 -right-2 bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center text-gray-400 text-sm" }, i + 1)),
        react.createElement("div", { className: "flex-1 min-w-0 items-start align-top" },
            react.createElement("div", { className: "h-4 bg-gray-200 rounded w-3/5 mb-2" }),
            react.createElement("div", { className: "h-3 bg-gray-100 rounded w-2/5 mb-1" })),
        react.createElement("div", { className: "ml-auto text-right" },
            react.createElement("div", { className: "h-4 bg-gray-200 rounded w-16" })))))));
};
const CartSummaryItemsList = ({ items, loading, showPriceIncludingTax }) => {
    if (loading) {
        return react.createElement(CartSummarySkeleton, { rows: items.length });
    }
    if (items.length === 0) {
        return (react.createElement("div", { className: "text-center py-8 text-gray-500" },
            react.createElement("p", { className: "text-base" }, _('Your cart is empty')),
            react.createElement("p", { className: "text-sm mt-2" }, _('Add some items to get started'))));
    }
    return (react.createElement("ul", { className: "item__summary__list divide-y divide-gray-200 border-b mb-3" }, items.map((item) => (react.createElement("li", { key: item.uuid, className: "flex items-start py-3" },
        react.createElement("div", { className: "relative mr-4 self-center" },
            item.thumbnail && (react.createElement(Image, { width: 100, height: 100, src: item.thumbnail, alt: item.productName, className: "w-16 h-16 object-cover rounded border p-2 box-border" })),
            !item.thumbnail && (react.createElement(ProductNoThumbnail, { className: "w-16 h-16 rounded border p-2 box-border" })),
            react.createElement("span", { className: "absolute -top-2 -right-2 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-gray-700 text-sm" }, item.qty)),
        react.createElement("div", { className: "flex-1 min-w-0 items-start align-top" },
            react.createElement("div", { className: "font-semibold text-sm mb-1" }, item.productName),
            item.variantOptions && item.variantOptions.length > 0 && (react.createElement("div", { className: "space-y-1" }, item.variantOptions.map((option) => (react.createElement("div", { key: option.attributeCode, className: "text-xs text-gray-700" },
                option.attributeName,
                ": ",
                option.optionText)))))),
        react.createElement("div", { className: "ml-auto text-right self-center" },
            react.createElement("div", { className: "font-semibold" }, showPriceIncludingTax
                ? item.lineTotalInclTax.text
                : item.lineTotal.text)))))));
};

//# sourceMappingURL=CartSummaryItems.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/DefaultMiniCartItemList.js


const DefaultMiniCartItemList = ({ items, showPriceIncludingTax = true, loading = false }) => {
    return (react.createElement(CartSummaryItemsList, { items: items, loading: loading, showPriceIncludingTax: showPriceIncludingTax }));
};
//# sourceMappingURL=DefaultMiniCartItemList.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/DefaultMiniCartDropdown.js







const DefaultMiniCartDropdown = ({ cart, isOpen, onClose, cartUrl, dropdownPosition = 'right', setIsDropdownOpen }) => {
    const totalQty = (cart === null || cart === void 0 ? void 0 : cart.totalQty) || 0;
    const closeButtonRef = (0,react.useRef)(null);
    (0,react.useEffect)(() => {
        const handleEscKey = (e) => {
            if (isOpen && e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                if (closeButtonRef.current) {
                    closeButtonRef.current.focus();
                }
            }, 100);
        }
        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { onClick: onClose, className: `fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`, "aria-hidden": "true" }),
        react.createElement("div", { className: `minicart__dropdown fixed top-0 bottom-0 w-full md:w-1/3 bg-white border-x p-5 border-gray-200 z-50 shadow-xl transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${dropdownPosition === 'left' ? 'left-0' : 'right-0'}`, role: "dialog", "aria-modal": "true", "aria-label": _('Shopping Cart') },
            react.createElement("div", { className: "minicart__dropdown__header flex justify-between items-center mb-6 border-b pb-4 border-gray-200" },
                react.createElement("h3", { className: "minicart__heading font-medium text-2xl text-gray-900" }, _('Your Cart')),
                react.createElement("button", { type: "button", ref: closeButtonRef, onClick: onClose, className: "text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 rounded-full p-1", "aria-label": _('Close cart') },
                    react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
                        react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })))),
            totalQty === 0 ? (react.createElement(DefaultMiniCartDropdownEmpty, { setIsDropdownOpen: setIsDropdownOpen })) : (react.createElement("div", { className: "minicart__items__container flex flex-col justify-between h-full", style: { height: 'calc(100vh - 150px)' } },
                react.createElement(Area_Area, { id: "miniCartItemsBefore", noOuter: true }),
                react.createElement("div", { className: "overflow-y-auto mb-8" },
                    react.createElement(CartItems, null, ({ items, loading }) => (react.createElement(DefaultMiniCartItemList, { items: items, loading: loading })))),
                react.createElement(Area_Area, { id: "miniCartItemsAfter", noOuter: true }),
                react.createElement(Area_Area, { id: "miniCartSummaryBefore", noOuter: true }),
                react.createElement(CartTotalSummary, null, ({ total }) => (react.createElement(react.Fragment, null,
                    react.createElement("div", { className: "minicart__summary flex justify-between items-center mb-3" },
                        react.createElement("span", { className: "font-medium text-gray-900" },
                            _('Subtotal'),
                            ":"),
                        react.createElement("span", { className: "font-semibold text-lg text-gray-900" }, total || '—')),
                    react.createElement("button", { type: "button", onClick: () => {
                            if (cartUrl) {
                                window.location.href = cartUrl;
                            }
                        }, className: "minicart__viewcart__button w-full bg-primary text-white py-4 px-4 rounded-full hover:bg-blue-700 transition-colors font-medium" }, _('View Cart (${totalQty})', {
                        totalQty: totalQty.toString()
                    }))))),
                react.createElement(Area_Area, { id: "miniCartSummaryAfter", noOuter: true }))))));
};
//# sourceMappingURL=DefaultMiniCartDropdown.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/DefaultMiniCartIcon.js


const DefaultMiniCartIcon = ({ totalQty, onClick, isOpen, disabled = false, showItemCount = true, syncStatus }) => {
    return (react.createElement("button", { type: "button", onClick: onClick, disabled: disabled, className: `mini-cart-icon relative ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${isOpen ? 'active' : ''}`, "aria-label": `Shopping cart with ${totalQty} items` },
        syncStatus.syncing ? (react.createElement("div", { className: "w-6 h-6 flex items-center justify-center" },
            react.createElement("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-700" }))) : (react.createElement(esm_ShoppingBagIcon, { width: 24, height: 24, className: "text-gray-700 hover:text-gray-900 transition-colors" })),
        showItemCount && totalQty > 0 && !syncStatus.syncing && (react.createElement("span", { className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold" }, totalQty > 99 ? '99+' : totalQty))));
};
//# sourceMappingURL=DefaultMiniCartIcon.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/MiniCart.js




function MiniCart({ cartUrl = '/cart', dropdownPosition = 'right', showItemCount = true, CartIconComponent, CartDropdownComponent, className = '', disabled = false }) {
    const { data: cartData, syncStatus } = useCartState();
    const [isDropdownOpen, setIsDropdownOpen] = (0,react.useState)(false);
    const cart = cartData;
    const handleCartClick = (0,react.useCallback)(() => {
        if (disabled)
            return;
        setIsDropdownOpen(!isDropdownOpen);
    }, [disabled, isDropdownOpen, cartUrl]);
    const handleDropdownClose = (0,react.useCallback)(() => {
        setIsDropdownOpen(false);
    }, []);
    (0,react.useEffect)(() => {
        if (syncStatus.synced && syncStatus.trigger === CartSyncTrigger.ADD_ITEM) {
            setIsDropdownOpen(true);
        }
    }, [syncStatus.synced, syncStatus.trigger]);
    return (react.createElement("div", { className: `mini__cart__wrapper relative ${className}` },
        CartIconComponent ? (react.createElement(CartIconComponent, { totalQty: (cart === null || cart === void 0 ? void 0 : cart.totalQty) || 0, onClick: handleCartClick, isOpen: isDropdownOpen, disabled: disabled, showItemCount: showItemCount, syncStatus: syncStatus })) : (react.createElement(DefaultMiniCartIcon, { totalQty: (cart === null || cart === void 0 ? void 0 : cart.totalQty) || 0, onClick: handleCartClick, isOpen: isDropdownOpen, disabled: disabled, showItemCount: showItemCount, syncStatus: syncStatus })),
        CartDropdownComponent ? (react.createElement(CartDropdownComponent, { cart: cart, dropdownPosition: dropdownPosition, onClose: handleDropdownClose, cartUrl: cartUrl, setIsDropdownOpen: setIsDropdownOpen })) : (react.createElement(DefaultMiniCartDropdown, { cart: cart, isOpen: isDropdownOpen, dropdownPosition: dropdownPosition, onClose: handleDropdownClose, cartUrl: cartUrl, setIsDropdownOpen: setIsDropdownOpen }))));
}
//# sourceMappingURL=MiniCart.js.map
;// ./node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCartIcon.js


function MiniCartIcon({ cartUrl }) {
    return (react.createElement(MiniCart, { className: "flex justify-center items-center", cartUrl: cartUrl }));
}
const MiniCartIcon_layout = {
    areaId: 'headerMiddleRight',
    sortOrder: 20
};
const MiniCartIcon_query = (/* unused pure expression or super */ null && (`
  query Query {
    cartUrl: url(routeId: "cart"),
  }
`));
//# sourceMappingURL=MiniCartIcon.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/ExtendableTable.js



const TableContext = react.createContext(null);
function useTableContext() {
    const context = react.useContext(TableContext);
    if (!context) {
        throw new Error('useTableContext must be used within a TableProvider');
    }
    return context;
}
function TableProvider({ children, name, initialColumns, tableData, onSort, currentSort }) {
    const [columns, setColumns] = react.useState(initialColumns);
    // Update columns when props change
    react.useEffect(() => {
        setColumns(initialColumns.map((col) => ({ ...col })));
    }, [initialColumns]);
    const addColumnBefore = react.useCallback((newColumn, beforeColumnKey) => {
        setColumns((cols) => {
            // Find index of the column to insert before
            const index = cols.findIndex((col) => col.key === beforeColumnKey);
            // If found, insert before it (index), else add to the start
            const position = index !== -1 ? index : 0;
            return [...cols.slice(0, position), newColumn, ...cols.slice(position)];
        });
    }, []);
    const addColumnAfter = react.useCallback((newColumn, afterColumnKey) => {
        setColumns((cols) => {
            // Find index of the column to insert after
            const index = cols.findIndex((col) => col.key === afterColumnKey);
            // If found, insert after it (index + 1), else add to the end
            const position = index !== -1 ? index + 1 : cols.length;
            return [...cols.slice(0, position), newColumn, ...cols.slice(position)];
        });
    }, []);
    const removeColumn = react.useCallback((key) => {
        setColumns((cols) => cols.map((col) => (col.key === key ? { ...col, isRemoved: true } : col)));
    }, []);
    const contextValue = {
        columns,
        setColumns,
        tableData,
        currentSort,
        addColumnBefore,
        addColumnAfter,
        removeColumn,
        tableName: name
    };
    return (react.createElement(TableContext.Provider, { value: contextValue }, children));
}
function ExtendableTable({ name, columns, initialData, loading = false, noHeader = false, emptyMessage = _('No data available'), onSort, currentSort, className = '' }) {
    const handleSort = (key) => {
        if (!onSort)
            return;
        const direction = (currentSort === null || currentSort === void 0 ? void 0 : currentSort.key) === key && currentSort.direction === 'asc'
            ? 'desc'
            : 'asc';
        onSort(key, direction);
    };
    return (react.createElement(TableProvider, { name: name, initialColumns: columns, tableData: initialData, onSort: onSort, currentSort: currentSort },
        react.createElement(TableContent, { loading: loading, noHeader: noHeader, onSort: onSort, currentSort: currentSort, emptyMessage: emptyMessage, className: className })));
}
// Separate component to use the context
function TableContent({ loading = false, noHeader = false, onSort, currentSort, emptyMessage, className }) {
    const { columns, tableData, tableName } = useTableContext();
    const handleSort = (key) => {
        if (!onSort)
            return;
        const direction = (currentSort === null || currentSort === void 0 ? void 0 : currentSort.key) === key && currentSort.direction === 'asc'
            ? 'desc'
            : 'asc';
        onSort(key, direction);
    };
    return (react.createElement(react.Fragment, null,
        react.createElement(common_Area, { id: 'shoppingCartItems' }),
        react.createElement("table", { className: className },
            !noHeader && (react.createElement("thead", null,
                react.createElement("tr", null, columns
                    .filter((col) => !col.isRemoved)
                    .map((col) => (react.createElement("th", { key: col.key, className: `${col.header.className} ${col.sortable ? 'cursor-pointer' : ''}`, onClick: () => col.sortable && handleSort(col.key), style: { width: col.width } },
                    react.createElement("div", { className: "flex items-center space-x-1" },
                        react.createElement("span", null, col.header.label),
                        col.sortable && (currentSort === null || currentSort === void 0 ? void 0 : currentSort.key) === col.key && (react.createElement("span", { className: "text-blue-500" }, currentSort.direction === 'asc' ? '↑' : '↓'))))))))),
            react.createElement("tbody", { className: "divide-y divide-gray-200" }, tableData.length === 0 ? (react.createElement("tr", null,
                react.createElement("td", { colSpan: columns.filter((col) => !col.isRemoved).length }, emptyMessage))) : (tableData.map((row, rowIndex) => (react.createElement("tr", { key: rowIndex }, columns
                .filter((col) => !col.isRemoved)
                .map((col) => (react.createElement("td", { key: col.key, className: col.className, style: { width: col.width } }, col.render
                ? col.render(row, rowIndex, loading)
                : row[col.key])))))))))));
}
//# sourceMappingURL=ExtendableTable.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/ItemQuantity.js


const useItemQuantity = ({ initialValue = 1, min = 1, max = Infinity, onChange, cartItemId, debounce = 500, onSuccess, onFailure }) => {
    const [quantity, setInternalQuantity] = (0,react.useState)(initialValue);
    const cartDispatch = useCartDispatch();
    const { loading } = useCartState();
    const previousQuantityRef = (0,react.useRef)(initialValue);
    const debounceTimerRef = (0,react.useRef)(null);
    (0,react.useEffect)(() => {
        setInternalQuantity(initialValue);
        previousQuantityRef.current = initialValue;
    }, [initialValue]);
    const executeCartUpdate = (0,react.useCallback)(async (newQuantity) => {
        try {
            const currentQuantity = previousQuantityRef.current;
            const diff = newQuantity - currentQuantity;
            if (diff === 0) {
                return;
            }
            const action = diff > 0 ? 'increase' : 'decrease';
            const qty = Math.abs(diff);
            await cartDispatch.updateItem(cartItemId, { qty, action });
            previousQuantityRef.current = newQuantity;
            if (onChange) {
                onChange(newQuantity);
            }
            if (onSuccess) {
                onSuccess();
            }
        }
        catch (error) {
            // Revert to the last known good state on failure
            setInternalQuantity(previousQuantityRef.current);
            if (onFailure) {
                onFailure(error);
            }
        }
    }, [cartItemId, cartDispatch, onChange, onSuccess, onFailure]);
    const handleUpdate = (0,react.useCallback)((newQuantity, immediate = false) => {
        const clampedQuantity = Math.max(min, Math.min(newQuantity, max));
        setInternalQuantity(clampedQuantity);
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }
        if (clampedQuantity === previousQuantityRef.current) {
            return;
        }
        if (immediate || debounce === 0) {
            executeCartUpdate(clampedQuantity);
        }
        else {
            debounceTimerRef.current = setTimeout(() => {
                executeCartUpdate(clampedQuantity);
            }, debounce);
        }
    }, [min, max, quantity, debounce, executeCartUpdate]);
    const increase = (0,react.useCallback)(() => {
        handleUpdate(quantity + 1);
    }, [quantity, handleUpdate]);
    const decrease = (0,react.useCallback)(() => {
        handleUpdate(quantity - 1);
    }, [quantity, handleUpdate]);
    const setQuantity = (0,react.useCallback)((newQuantity) => {
        handleUpdate(newQuantity);
    }, [handleUpdate]);
    const handleInputChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity)) {
            setInternalQuantity(newQuantity);
        }
        else if (e.target.value === '') {
            setInternalQuantity(0);
        }
    };
    const handleInputBlur = () => {
        handleUpdate(quantity, true);
    };
    return {
        quantity,
        loading,
        increase,
        decrease,
        setQuantity,
        inputProps: {
            value: quantity,
            onChange: handleInputChange,
            onBlur: handleInputBlur,
            type: 'number',
            min,
            max,
            disabled: loading
        }
    };
};
/**
 * Item Quantity Component.
 * @param {ItemQuantityProps} props
 * @returns {ReactNode}
 */
function ItemQuantity({ children, ...props }) {
    const quantityControls = useItemQuantity(props);
    return children(quantityControls);
}
//# sourceMappingURL=ItemQuantity.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/DefaultCartItemList.js







const DefaultCartItemList = ({ items, showPriceIncludingTax = true, loading = false, onSort, currentSort, onRemoveItem }) => {
    const columns = [
        {
            key: 'productInfo',
            header: { label: _('Product'), className: '' },
            className: 'font-medium align-top',
            sortable: false,
            render: (row) => {
                var _a, _b, _c, _d;
                const priceValue = showPriceIncludingTax
                    ? (_a = row.productPriceInclTax) === null || _a === void 0 ? void 0 : _a.text
                    : (_b = row.productPrice) === null || _b === void 0 ? void 0 : _b.text;
                return (react.createElement("div", { className: "flex justify-start gap-4" },
                    react.createElement("div", null, row.thumbnail ? (react.createElement(Image, { src: row.thumbnail, alt: row.productName, width: 80, height: 80, className: "rounded-md" })) : (react.createElement(ProductNoThumbnail, { width: 80, height: 80 }))),
                    react.createElement("div", { className: "font-medium flex flex-col gap-1 items-start h-full" },
                        react.createElement("span", { className: "font-semibold" }, row.productName), (_c = row.variantOptions) === null || _c === void 0 ? void 0 :
                        _c.map((option) => (react.createElement("span", { key: option.optionId, className: "text-xs text-muted" },
                            option.attributeName,
                            ": ",
                            option.optionText))),
                        react.createElement("span", { className: "text-sm text-muted" },
                            priceValue,
                            " x ",
                            row.qty),
                        react.createElement("a", { href: "#", className: "text-red-500 text-sm", onClick: (e) => {
                                e.preventDefault();
                                onRemoveItem === null || onRemoveItem === void 0 ? void 0 : onRemoveItem(row.cartItemId);
                            } }, _('Remove')), (_d = row.errors) === null || _d === void 0 ? void 0 :
                        _d.map((error, index) => (react.createElement("span", { key: index, className: "text-xs text-red-500" }, error))))));
            }
        },
        {
            key: 'qty',
            header: { label: _('Quantity'), className: 'text-center' },
            sortable: true,
            render: (row) => {
                return (react.createElement("div", { className: "text-left" },
                    react.createElement(ItemQuantity, { initialValue: row.qty, cartItemId: row.cartItemId, min: 1, max: 99 }, ({ quantity, increase, decrease }) => (react.createElement("div", { className: "flex items-center" },
                        react.createElement("button", { onClick: decrease, disabled: loading || quantity <= 1, className: "px-1 disabled:opacity-50 text-lg" }, "\u2212"),
                        react.createElement("span", { className: "min-w-[3rem] text-center" }, quantity),
                        react.createElement("button", { onClick: increase, disabled: loading, className: "disabled:opacity-50 text-lg" }, "+"))))));
            }
        },
        {
            key: 'lineTotal',
            header: { label: _('Total'), className: 'flex justify-end' },
            sortable: true,
            render: (row) => {
                var _a, _b;
                const totalValue = showPriceIncludingTax
                    ? (_a = row.lineTotalInclTax) === null || _a === void 0 ? void 0 : _a.text
                    : (_b = row.lineTotal) === null || _b === void 0 ? void 0 : _b.text;
                return (react.createElement("div", { className: "text-right" },
                    react.createElement("span", { className: "font-bold" }, totalValue)));
            }
        }
    ];
    const [rows, setRows] = react.useState(items);
    react.useEffect(() => {
        setRows(items);
    }, [items]);
    return (react.createElement(react.Fragment, null,
        react.createElement(Area_Area, { id: "miniCartItemListBefore", noOuter: true }),
        react.createElement(ExtendableTable, { name: "shoppingCartItems", columns: columns, initialData: rows, loading: loading, emptyMessage: _('Your cart is empty'), onSort: onSort, currentSort: currentSort, className: "cart__items__table border-none table-auto border-spacing-y-2 border-separate w-full" }),
        react.createElement(Area_Area, { id: "miniCartItemListAfter", noOuter: true }),
        react.createElement("style", null, `
        .cart__items__table th, .cart__items__table td {
          padding: 0.75rem;
        }
        .cart__items__table th {
          border: none;
        }
        .cart__items__table td {
          border: none;
        }
      `)));
};
//# sourceMappingURL=DefaultCartItemList.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/ShoppingCartEmpty.js



function ShoppingCartEmpty() {
    return (react.createElement("div", { className: "empty-shopping-cart w-100", style: { marginTop: '150px' } },
        react.createElement("div", null,
            react.createElement("div", { className: "text-center shopping-cart-heading" },
                react.createElement("h2", null, _('Shopping cart'))),
            react.createElement("div", { className: "mt-5 text-center" },
                react.createElement("span", null, _('Your cart is empty!'))),
            react.createElement("div", { className: "flex justify-center mt-5" },
                react.createElement(common_Button, { url: "/", title: react.createElement("span", { className: "flex space-x-2" },
                        react.createElement("span", { className: "self-center" }, _('CONTINUE SHOPPING')),
                        ' ',
                        react.createElement("svg", { className: "self-center", style: { width: '2.5rem', height: '2.5rem' }, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M17 8l4 4m0 0l-4 4m4-4H3" }))) })))));
}
//# sourceMappingURL=ShoppingCartEmpty.js.map
;// ./node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/cart/ShoppingCart.js









const Title = ({ title }) => {
    return (react.createElement("div", { className: "mb-7 text-center shopping-cart-header" },
        react.createElement("h1", { className: "shopping-cart-title mb-2" }, title),
        react.createElement("a", { href: "/", className: "underline" }, _('Continue Shopping'))));
};
function ShoppingCart({ checkoutUrl }) {
    const { data: cart } = useCartState();
    return (react.createElement("div", { className: "cart page-width" }, cart.items.length > 0 ? (react.createElement(react.Fragment, null,
        react.createElement(Title, { title: _('Shopping Cart') }),
        react.createElement("div", { className: "grid gap-10 grid-cols-1 md:grid-cols-4" },
            react.createElement("div", { className: "col-span-1 md:col-span-3" },
                react.createElement(common_Area, { id: "shoppingCartBeforeItems", noOuter: true }),
                react.createElement(CartItems, null, ({ items, showPriceIncludingTax, loading, onRemoveItem }) => (react.createElement(DefaultCartItemList, { items: items, showPriceIncludingTax: showPriceIncludingTax, loading: loading, onRemoveItem: onRemoveItem }))),
                react.createElement(common_Area, { id: "shoppingCartAfterItems", noOuter: true })),
            react.createElement("div", { className: "col-span-1 md:col-span-1" },
                react.createElement(common_Area, { id: "shoppingCartBeforeSummary", noOuter: true }),
                react.createElement("div", { className: "grid grid-cols-1 gap-5 cart-summary" },
                    react.createElement("h4", null, _('Order summary')),
                    react.createElement(CartTotalSummary, null)),
                react.createElement(common_Area, { id: "shoppingCartBeforeCheckoutButton", noOuter: true }),
                react.createElement("div", { className: "shopping-cart-checkout-btn flex justify-between mt-5" },
                    react.createElement(common_Button, { url: checkoutUrl, title: _('CHECKOUT'), variant: "primary" })),
                react.createElement(common_Area, { id: "shoppingCartAfterSummary", noOuter: true }))))) : (react.createElement(ShoppingCartEmpty, null))));
}
const ShoppingCart_layout = {
    areaId: 'content',
    sortOrder: 10
};
const ShoppingCart_query = (/* unused pure expression or super */ null && (`
  query Query {
    checkoutUrl: url(routeId: "checkout")
  }
`));
//# sourceMappingURL=ShoppingCart.js.map
;// ./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js

function UserCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const UserCircleIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(UserCircleIcon);
/* harmony default export */ const esm_UserCircleIcon = (UserCircleIcon_ForwardRef);
;// ./node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/CustomerIcon.js


function UserIcon({ customer, accountUrl, loginUrl }) {
    return (react.createElement("div", { className: "self-center" },
        react.createElement("a", { href: customer ? accountUrl : loginUrl },
            react.createElement(esm_UserCircleIcon, { width: 25, height: 25 }))));
}
const CustomerIcon_layout = {
    areaId: 'headerMiddleRight',
    sortOrder: 10
};
const CustomerIcon_query = (/* unused pure expression or super */ null && (`
  query Query {
    customer: currentCustomer {
      uuid
      fullName
      email
    }
    accountUrl: url(routeId: "account")
    loginUrl: url(routeId: "login")
  }
`));
//# sourceMappingURL=CustomerIcon.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/editor/GetColumnClasses.js
const getColumnClasses = (size) => {
    switch (size) {
        case 1:
            return 'md:col-span-1';
        case 2:
            return 'md:col-span-2';
        case 3:
            return 'md:col-span-3';
        default:
            return 'md:col-span-1';
    }
};

//# sourceMappingURL=GetColumnClasses.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/editor/GetRowClasses.js
const getRowClasses = (size) => {
    switch (size) {
        case 1:
            return 'md:grid-cols-1';
        case 2:
            return 'md:grid-cols-2';
        case 3:
            return 'md:grid-cols-3';
        case 4:
            return 'md:grid-cols-4';
        case 5:
            return 'md:grid-cols-5';
        default:
            return 'md:grid-cols-1';
    }
};

//# sourceMappingURL=GetRowClasses.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/Editor.js





const Paragraph = ({ data }) => {
    return react.createElement("p", { dangerouslySetInnerHTML: { __html: data.text } });
};
const Editor_Header = ({ data }) => {
    const tagName = `h${data.level}`;
    return react.createElement(tagName, null, data.text);
};
const List = ({ data }) => {
    return (react.createElement("ul", null, data.items.map((item, index) => (react.createElement("li", { key: index }, item)))));
};
const Quote = ({ data }) => {
    return (react.createElement("blockquote", null,
        react.createElement("p", null,
            "\"",
            data.text,
            "\""),
        data.caption && react.createElement("cite", null,
            "- ",
            data.caption)));
};
const Editor_Image = ({ data, columnSize }) => {
    const { file, caption, withBorder, withBackground, stretched, link } = data;
    const imageStyles = {
        border: withBorder ? '1px solid #ccc' : 'none',
        backgroundColor: withBackground ? '#f9f9f9' : 'transparent',
        width: stretched ? '100%' : 'auto',
        display: 'block',
        maxWidth: '100%',
        margin: '0 auto'
    };
    const imageWidth = file.width || 800;
    const imageHeight = file.height || (file.width ? Math.round(file.width * 0.75) : 600);
    // Calculate responsive sizes based on the columnSize prop
    // columnSize represents the fraction of the row that this column occupies (e.g., 1/2, 1/3, 2/3, etc.)
    let sizesValue;
    sizesValue = '100vw'; // On mobile, always full viewport width
    if (columnSize <= 0.25) {
        sizesValue = '(max-width: 640px) 100vw, (max-width: 768px) 80vw, 25vw';
    }
    else if (columnSize <= 0.34) {
        sizesValue = '(max-width: 640px) 100vw, (max-width: 768px) 80vw, 33vw';
    }
    else if (columnSize <= 0.5) {
        sizesValue = '(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw';
    }
    else if (columnSize <= 0.67) {
        sizesValue = '(max-width: 640px) 100vw, (max-width: 768px) 80vw, 67vw';
    }
    else if (columnSize <= 0.75) {
        sizesValue = '(max-width: 640px) 100vw, (max-width: 768px) 80vw, 75vw';
    }
    else {
        sizesValue = '(max-width: 640px) 100vw, 100vw';
    }
    const responsiveSizes = sizesValue;
    const imageElement = (react.createElement(Image, { src: file.url, alt: caption || 'Image', width: imageWidth, height: imageHeight, sizes: responsiveSizes, style: { ...imageStyles } }));
    return (react.createElement("div", { className: "editor-image-container" },
        link ? (react.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, imageElement)) : (imageElement),
        caption && (react.createElement("p", { style: { textAlign: 'center', marginTop: '10px' } }, caption))));
};
const RawHtml = ({ data }) => {
    return react.createElement("div", { dangerouslySetInnerHTML: { __html: data.html } });
};
const RenderEditorJS = ({ blocks, columnSize }) => {
    return (react.createElement("div", { className: "prose prose-base max-w-none text-base" }, blocks.map((block, index) => {
        switch (block.type) {
            case 'paragraph':
                return react.createElement(Paragraph, { key: index, data: block.data });
            case 'header':
                return react.createElement(Editor_Header, { key: index, data: block.data });
            case 'list':
                return react.createElement(List, { key: index, data: block.data });
            case 'image':
                return (react.createElement(Editor_Image, { key: index, data: block.data, columnSize: columnSize }));
            case 'quote':
                return react.createElement(Quote, { key: index, data: block.data });
            case 'raw':
                return react.createElement(RawHtml, { key: index, data: block.data });
            default:
                return null;
        }
    })));
};
function Editor({ rows }) {
    return (react.createElement("div", { className: "editor__html space-y-6" }, rows.map((row, index) => {
        const rowClasses = getRowClasses(row.size);
        return (react.createElement("div", { className: `row__container grid ${rowClasses} grid-cols-1 gap-5`, key: index }, row.columns.map((column, index) => {
            var _a, _b;
            const columnClasses = getColumnClasses(column.size);
            return (react.createElement("div", { className: `column__container ${columnClasses} col-span-1`, key: index }, ((_a = column.data) === null || _a === void 0 ? void 0 : _a.blocks) && (react.createElement(RenderEditorJS, { blocks: (_b = column.data) === null || _b === void 0 ? void 0 : _b.blocks, columnSize: column.size / row.size }))));
        })));
    })));
}
//# sourceMappingURL=Editor.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/catalog/ProductListEmptyRender.js

const ProductListEmptyRender = ({ message }) => {
    return (react.createElement("div", { className: "empty-product-list" }, typeof message === 'string' ? react.createElement("p", null, message) : message));
};
//# sourceMappingURL=ProductListEmptyRender.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/cart/AddToCart.js



const AddToCart = ({ product, qty, onSuccess, onError, children }) => {
    var _a;
    const cartDispatch = useCartDispatch();
    const cartState = useCartState();
    const [localError, setLocalError] = (0,react.useState)(null);
    const canAddToCart = product.isInStock && qty > 0 && !!cartState.data;
    const isLoading = cartState.loading;
    const clearError = (0,react.useCallback)(() => {
        setLocalError(null);
        cartDispatch.clearError();
    }, [cartDispatch]);
    const addToCart = (0,react.useCallback)(async () => {
        if (!canAddToCart) {
            const errorMsg = !product.isInStock
                ? _('Product is out of stock')
                : !cartState.data
                    ? _('Cart is not initialized')
                    : _('Invalid quantity');
            setLocalError(errorMsg);
            onError === null || onError === void 0 ? void 0 : onError(errorMsg);
            return;
        }
        try {
            setLocalError(null);
            cartDispatch.clearError();
            await cartDispatch.addItem({
                sku: product.sku,
                qty: qty
            });
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(qty);
        }
        catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : _('Failed to add item to cart');
            setLocalError(errorMessage);
            onError === null || onError === void 0 ? void 0 : onError(errorMessage);
        }
    }, [
        canAddToCart,
        product.isInStock,
        product.sku,
        qty,
        cartState.data,
        cartDispatch,
        onSuccess,
        onError
    ]);
    const state = {
        isLoading,
        error: localError || ((_a = cartState.data) === null || _a === void 0 ? void 0 : _a.error) || null,
        canAddToCart,
        isInStock: product.isInStock
    };
    const actions = {
        addToCart,
        clearError
    };
    return react.createElement(react.Fragment, null, children(state, actions));
};
//# sourceMappingURL=AddToCart.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/catalog/ProductListItemRender.js






const ProductListItemRender = ({ product, imageWidth, imageHeight, layout = 'grid', showAddToCart = false, customAddToCartRenderer }) => {
    if (layout === 'list') {
        return (react.createElement("div", { className: "product__list__item__inner group relative overflow-hidden flex gap-4 p-4" },
            react.createElement("div", { className: "product__list__image flex-shrink-0" },
                react.createElement("a", { href: product.url },
                    product.image && (react.createElement(Image, { src: product.image.url, alt: product.image.alt || product.name, width: imageWidth || 120, height: imageHeight || 120, loading: "lazy", sizes: "(max-width: 768px) 100vw, 33vw" // Assume 3 columns on larger screens
                        , className: "transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg" })),
                    !product.image && (react.createElement(ProductNoThumbnail, { width: imageWidth, height: imageHeight })))),
            react.createElement("div", { className: "product__list__info flex-1 flex flex-col justify-between" },
                react.createElement("div", null,
                    react.createElement("h3", { className: "product__list__name text-lg font-medium mb-2" },
                        react.createElement("a", { href: product.url, className: "hover:text-primary transition-colors" }, product.name)),
                    react.createElement("div", { className: "product__list__sku text-sm text-gray-600 mb-2" }, _('SKU ${sku}', { sku: product.sku })),
                    react.createElement("div", { className: "product__list__price mb-2" }, product.price.special &&
                        product.price.regular < product.price.special ? (react.createElement("div", { className: "flex items-center gap-2" },
                        react.createElement("span", { className: "regular-price text-sm", style: { textDecoration: 'line-through', color: '#777' } }, product.price.regular.text),
                        react.createElement("span", { className: "special-price text-lg font-bold", style: { color: '#e53e3e' } }, product.price.special.text))) : (react.createElement("span", { className: "regular-price text-lg font-bold" }, product.price.regular.text))),
                    react.createElement("div", { className: "product__list__stock mb-3" }, product.inventory.isInStock ? (react.createElement("span", { className: "text-green-600 text-sm font-medium" }, _('In Stock'))) : (react.createElement("span", { className: "text-red-600 text-sm font-medium" }, _('Out of Stock'))))),
                showAddToCart && (react.createElement("div", { className: "product__list__actions invisible transform translate-y-2 transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0" }, customAddToCartRenderer ? (customAddToCartRenderer(product)) : (react.createElement(AddToCart, { product: {
                        sku: product.sku,
                        isInStock: product.inventory.isInStock
                    }, qty: 1, onError: (error) => toast.error(error) }, (state, actions) => (react.createElement("button", { className: "product__list__add-to-cart transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg rounded-full", style: {
                        padding: '10px 20px',
                        backgroundColor: state.isInStock
                            ? '#3182ce'
                            : '#a0aec0',
                        color: 'white',
                        border: 'none',
                        cursor: state.canAddToCart ? 'pointer' : 'not-allowed',
                        opacity: state.isLoading ? 0.7 : 1,
                        fontSize: '14px',
                        fontWeight: '500'
                    }, disabled: !state.canAddToCart || state.isLoading, onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        actions.addToCart();
                    } }, state.isLoading ? _('Adding...') : _('Add to Cart'))))))))));
    }
    return (react.createElement("div", { className: "product__list__item__inner group overflow-hidden" },
        react.createElement("a", { href: product.url, className: "product__list__link block" },
            react.createElement("div", { className: "product__list__image overflow-hidden flex w-full justify-center" },
                product.image && (react.createElement(Image, { src: product.image.url, alt: product.image.alt || product.name, width: imageWidth || 120, height: imageHeight || 120, sizes: "(max-width: 768px) 100vw, 33vw" // Assume 3 columns on larger screens
                    , className: "transition-transform duration-500 ease-in-out group-hover:scale-110" })),
                !product.image && (react.createElement(ProductNoThumbnail, { width: imageWidth, height: imageHeight }))),
            react.createElement("div", { className: "product__list__info mt-3" },
                react.createElement("h3", { className: "product__list__name text-lg font-medium" }, product.name),
                react.createElement("div", { className: "product__list__price" }, product.price.special &&
                    product.price.regular < product.price.special ? (react.createElement(react.Fragment, null,
                    react.createElement("span", { className: "regular-price" }, product.price.regular.text),
                    react.createElement("span", { className: "special-price" }, product.price.special.text))) : (react.createElement("span", { className: "regular-price" }, product.price.regular.text))))),
        showAddToCart && (react.createElement("div", { className: "product__list__actions p-4 invisible transform translate-y-4 transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0" }, customAddToCartRenderer ? (customAddToCartRenderer(product)) : (react.createElement(AddToCart, { product: {
                sku: product.sku,
                isInStock: product.inventory.isInStock
            }, qty: 1, onError: (error) => toast.error(error) }, (state, actions) => (react.createElement("button", { className: "product__list__add-to-cart bg-primary p-2 text-center text-white w-full rounded-full transition-all duration-200 ease-in-out hover:scale-105 active:scale-95", disabled: !state.canAddToCart || state.isLoading, onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                actions.addToCart();
            } }, state.isLoading ? _('Adding...') : _('Add to Cart')))))))));
};
//# sourceMappingURL=ProductListItemRender.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/catalog/ProductListLoadingSkeleton.js

const ProductListLoadingSkeleton = ({ count = 4, gridColumns = 4, layout = 'grid' }) => {
    if (layout === 'list') {
        return (react.createElement("div", { className: "product-list", style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            } }, Array.from({ length: count }).map((_, i) => (react.createElement("div", { key: i, className: "product-skeleton product-skeleton-list", style: {
                display: 'flex',
                gap: '20px'
            } },
            react.createElement("div", { className: "skeleton-image", style: {
                    flexShrink: 0,
                    width: '120px',
                    height: '120px',
                    backgroundColor: '#f0f0f0'
                } }),
            react.createElement("div", { className: "skeleton-content", style: { flex: 1 } },
                react.createElement("div", { className: "skeleton-name", style: {
                        height: '20px',
                        backgroundColor: '#f0f0f0',
                        marginBottom: '10px',
                        width: '60%'
                    } }),
                react.createElement("div", { className: "skeleton-sku", style: {
                        height: '16px',
                        backgroundColor: '#f0f0f0',
                        marginBottom: '10px',
                        width: '30%'
                    } }),
                react.createElement("div", { className: "skeleton-price", style: {
                        height: '20px',
                        backgroundColor: '#f0f0f0',
                        marginBottom: '10px',
                        width: '25%'
                    } }),
                react.createElement("div", { className: "skeleton-stock", style: {
                        height: '16px',
                        backgroundColor: '#f0f0f0',
                        width: '20%'
                    } })))))));
    }
    // Compute responsive grid columns class based on gridColumns
    const className = (() => {
        switch (gridColumns) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-1 md:grid-cols-2';
            case 3:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
            case 4:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
            case 5:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5';
            case 6:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6';
            default:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
        }
    })();
    return (react.createElement("div", { className: `product__list grid gap-8 ${className}` }, Array.from({ length: count }).map((_, i) => (react.createElement("div", { key: i, className: "product-skeleton" },
        react.createElement("div", { className: "skeleton-image", style: {
                aspectRatio: '1/1',
                backgroundColor: '#f0f0f0',
                marginBottom: '10px'
            } }),
        react.createElement("div", { className: "skeleton-name", style: {
                height: '20px',
                backgroundColor: '#f0f0f0',
                marginBottom: '10px',
                width: '80%'
            } }),
        react.createElement("div", { className: "skeleton-price", style: {
                height: '20px',
                backgroundColor: '#f0f0f0',
                width: '40%'
            } }))))));
};
//# sourceMappingURL=ProductListLoadingSkeleton.js.map
;// ./node_modules/@evershop/evershop/dist/components/frontStore/catalog/ProductList.js





const ProductList = ({ products = [], imageWidth = 300, imageHeight = 300, isLoading = false, emptyMessage = _('No products found'), className = '', layout = 'grid', gridColumns = 4, showAddToCart = false, customAddToCartRenderer, renderItem }) => {
    if (isLoading) {
        return (react.createElement(ProductListLoadingSkeleton, { count: layout === 'list' ? 5 : gridColumns * 2, gridColumns: gridColumns, layout: layout }));
    }
    if (!products || products.length === 0) {
        return react.createElement(ProductListEmptyRender, { message: emptyMessage });
    }
    const layoutClass = layout === 'grid' ? 'product__grid' : 'product__list';
    // Compute responsive grid columns class based on gridColumns
    const gridClassName = (() => {
        switch (gridColumns) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-1 md:grid-cols-2 gap-8';
            case 3:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
            case 4:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';
            case 5:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6';
            case 6:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6';
            default:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';
        }
    })();
    const styleClasses = layout === 'grid' ? 'grid' : 'flex flex-col';
    const containerClass = `${layoutClass} ${gridClassName} ${className} ${styleClasses}`;
    const itemImageWidth = layout === 'list' ? (imageWidth > 150 ? 150 : imageWidth) : imageWidth;
    const itemImageHeight = layout === 'list' ? (imageHeight > 150 ? 150 : imageHeight) : imageHeight;
    return (react.createElement("div", { className: containerClass }, products.map((product) => (react.createElement("div", { key: product.productId, className: `product__list__item ${layout === 'list'
            ? 'product__list__item__list'
            : 'product__list__item__grid'}` }, renderItem ? (renderItem(product)) : (react.createElement(ProductListItemRender, { product: product, imageWidth: itemImageWidth, imageHeight: itemImageHeight, layout: layout, showAddToCart: showAddToCart, customAddToCartRenderer: customAddToCartRenderer })))))));
};
//# sourceMappingURL=ProductList.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProducts.js



function CollectionProducts({ collection, collectionProductsWidget: { countPerRow } = {} }) {
    var _a;
    if (!collection) {
        return null;
    }
    return (react.createElement("div", { className: "pt-7 collection__products__widget" },
        react.createElement("div", { className: "page-width" },
            react.createElement("h3", { className: "text-center uppercase h5 tracking-widest" }, collection === null || collection === void 0 ? void 0 : collection.name),
            react.createElement("div", { className: "flex justify-center" }, (collection === null || collection === void 0 ? void 0 : collection.description) && react.createElement(Editor, { rows: collection === null || collection === void 0 ? void 0 : collection.description })),
            react.createElement("div", { className: "mt-3" },
                react.createElement(ProductList, { products: (_a = collection === null || collection === void 0 ? void 0 : collection.products) === null || _a === void 0 ? void 0 : _a.items, gridColumns: countPerRow })))));
}
const CollectionProducts_query = (/* unused pure expression or super */ null && (`
  query Query($collection: String, $count: Int, $countPerRow: Int) {
    collection (code: $collection) {
      collectionId
      name
      description
      products (filters: [{key: "limit", operation: eq, value: $count}]) {
        items {
          ...Product
        }
      }
    }
    collectionProductsWidget(collection: $collection, count: $count, countPerRow: $countPerRow) {
      countPerRow
    }
  }
`));
const CollectionProducts_fragments = (/* unused pure expression or super */ null && (`
  fragment Product on Product {
    productId
    name
    sku
    price {
      regular {
        value
        text
      }
      special {
        value
        text
      }
    }
    inventory {
      isInStock
    }
    image {
      alt
      url
    }
    url
  }
`));
const variables = (/* unused pure expression or super */ null && (`{
  collection: getWidgetSetting("collection"),
  count: getWidgetSetting("count"),
  countPerRow: getWidgetSetting("countPerRow", 4)
}`));
//# sourceMappingURL=CollectionProducts.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/components/TextBlock.js


function TextBlock({ textWidget: { text, className } }) {
    return (react.createElement("div", { className: `text-block-widget ${className}` },
        react.createElement(Editor, { rows: text })));
}
const TextBlock_query = (/* unused pure expression or super */ null && (`
  query Query($text: String, $className: String) {
    textWidget(text: $text, className: $className) {
      ...TextBlockWidget
    }
  }
`));
const TextBlock_fragments = (/* unused pure expression or super */ null && (`
  fragment TextBlockWidget on TextBlockWidget {
    text
    className
  }
`));
const TextBlock_variables = (/* unused pure expression or super */ null && (`{
  text: getWidgetSetting("text"),
  className: getWidgetSetting("className")
}`));
//# sourceMappingURL=TextBlock.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenu.js

function BasicMenu({ basicMenuWidget: { menus, isMain, className } }) {
    const [isOpen, setIsOpen] = react.useState(!isMain);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const listingClasses = isMain
        ? 'md:flex md:justify-center md:space-x-6 absolute md:relative left-[-2.5rem] md:left-0 top-full md:top-auto mt-2 md:mt-0 w-screen md:w-auto md:bg-transparent p-2 md:p-0 min-w-[250px] bg-white z-30 divide-y md:divide-y-0'
        : 'flex justify-center space-x-6 relative left-[-2.5rem] md:left-0 top-full md:top-auto mt-2 md:mt-0 w-screen md:w-auto md:bg-transparent p-2 md:p-0 min-w-[250px] bg-white z-30';
    return (react.createElement("div", { className: className },
        react.createElement("div", { className: "flex justify-start gap-4 items-center" },
            react.createElement("nav", { className: "p-2 relative md:flex md:justify-center" },
                react.createElement("div", { className: "flex justify-between items-center" },
                    isMain && (react.createElement("div", { className: "md:hidden" },
                        react.createElement("a", { href: "#", onClick: (e) => {
                                e.preventDefault();
                                toggleMenu();
                            }, className: "text-black focus:outline-none" },
                            react.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                                react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16m-7 6h7" }))))),
                    react.createElement("ul", { className: `${isOpen ? 'block' : 'hidden'}  ${listingClasses}` }, menus.map((item, index) => (react.createElement("li", { key: index, className: "relative group" },
                        react.createElement("a", { href: item.url, className: "hover:text-gray-300 transition-colors block md:inline-block px-2 py-2 md:px-0 md:py-0" }, item.name),
                        item.children.length > 0 && (react.createElement("ul", { className: "md:absolute left-0 top-full mt-0 md:mt-2 w-30 bg-white md:shadow-lg rounded-md md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 transform transition-all duration-300 ease-in-out min-w-full md:min-w-[250px] z-30 md:border-t-4" }, item.children.map((subItem, subIndex) => (react.createElement("li", { key: subIndex },
                            react.createElement("a", { href: subItem.url, className: "block px-5 md:px-2 py-2 text-gray-700 hover:bg-gray-100" }, subItem.name)))))))))))))));
}
const BasicMenu_query = (/* unused pure expression or super */ null && (`
  query Query($settings: JSON) {
    basicMenuWidget(settings: $settings) {
      menus {
        id
        name
        url
        type
        uuid
        children {
          name
          url
          type
          uuid
        }
      }
      isMain
      className
    }
  }
`));
const BasicMenu_variables = (/* unused pure expression or super */ null && (`{
  settings: getWidgetSetting()
}`));
//# sourceMappingURL=BasicMenu.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/components/Banner.js


function Banner({ bannerWidget: { src, alignment, width, height, alt } }) {
    // Parse tailwind classes for alignment
    const alignmentClass = alignment === 'left'
        ? 'justify-start'
        : alignment === 'center'
            ? 'justify-center'
            : 'justify-end';
    return (react.createElement("div", { className: `banner-widget w-full flex ${alignmentClass}` },
        react.createElement(Image, { src: src, width: parseInt(width, 10), height: parseInt(height, 10), className: alignmentClass, alt: alt, priority: true })));
}
const Banner_query = (/* unused pure expression or super */ null && (`
  query Query($src: String, $alignment: String, $width: Float, $height: Float, $alt: String) {
    bannerWidget(src: $src, alignment: $alignment, width: $width, height: $height, alt: $alt) {
      src
      alignment
      width
      height
      alt
    }
  }
`));
const Banner_variables = (/* unused pure expression or super */ null && (`{
  src: getWidgetSetting("src"),
  alignment: getWidgetSetting("alignment"),
  width: getWidgetSetting("width"),
  height: getWidgetSetting("height"),
  alt: getWidgetSetting("alt")
}`));
//# sourceMappingURL=Banner.js.map
// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(4589);
;// ./node_modules/@evershop/evershop/dist/modules/cms/components/Slideshow.js




function PrevArrow(props) {
    const { onClick } = props;
    return (react.createElement("button", { className: "absolute bottom-[20px] right-[70px] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 md:bottom-[20px] md:right-[70px] md:h-10 md:w-10", onClick: onClick, "aria-label": "Previous slide", type: "button" },
        react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-6 w-6 md:h-6 md:w-6" },
            react.createElement("polyline", { points: "15 18 9 12 15 6" }))));
}
function NextArrow(props) {
    const { onClick } = props;
    return (react.createElement("button", { className: "absolute bottom-[20px] right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 md:bottom-[20px] md:right-5 md:h-10 md:w-10", onClick: onClick, "aria-label": "Next slide", type: "button" },
        react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-6 w-6 md:h-6 md:w-6" },
            react.createElement("polyline", { points: "9 18 15 12 9 6" }))));
}
function CustomDot(props) {
    const { onClick, active, className } = props;
    const isActive = active || (className && className.includes('active'));
    return (react.createElement("button", { onClick: onClick, className: `mx-1 my-0 h-3 w-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50 md:h-3 md:w-3 ${isActive
            ? '!bg-black scale-125 shadow-md'
            : '!bg-black/70 !hover:bg-black/90'}`, "aria-label": "Go to slide", type: "button" }));
}
const SliderComponent = lib["default"];
function Slideshow({ slideshowWidget: { slides = [], autoplay = true, autoplaySpeed = 3000, arrows = true, dots = true } }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: Boolean(autoplay),
        autoplaySpeed: Number(autoplaySpeed) || 3000,
        arrows: Boolean(arrows),
        fade: false,
        pauseOnHover: true,
        adaptiveHeight: true,
        nextArrow: arrows ? react.createElement(NextArrow, null) : undefined,
        prevArrow: arrows ? react.createElement(PrevArrow, null) : undefined,
        customPaging: function (i) {
            return react.createElement(CustomDot, { active: false });
        },
        appendDots: (dots) => (react.createElement("div", { className: "w-full flex justify-center items-center" },
            react.createElement("div", { className: "pr-[120px] md:pr-[120px]" }, dots))),
        dotsClass: 'slick-dots custom-dots-container'
    };
    if (!slides || slides.length === 0) {
        return null;
    }
    const containerClasses = ['slideshow-widget', 'relative', 'w-full'].join(' ');
    const containerStyle = {
        height: 'auto',
        maxWidth: '100%'
    };
    const sliderStyle = {
        height: 'auto' // Adaptive height for slider
    };
    return (react.createElement("div", { className: containerClasses, style: containerStyle },
        react.createElement(SliderComponent, { ...settings, style: sliderStyle }, slides.map((slide) => (react.createElement("div", { key: slide.id, className: "relative lg:h-auto slide__wrapper !block", style: { display: 'block' } },
            react.createElement("div", { className: "relative w-full h-full" },
                react.createElement(Image, { src: slide.image, alt: slide.headline || 'Slideshow image', width: slide.width || 1920, height: slide.height || 0, style: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        objectPosition: 'center'
                    }, sizes: "100vw", priority: true }),
                react.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8" }, (slide.headline ||
                    slide.subText ||
                    (slide.buttonText && slide.buttonLink)) && (react.createElement("div", { className: "p-4 md:p-8 rounded-lg max-w-3xl" },
                    slide.headline && (react.createElement("h2", { className: "text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg" }, slide.headline)),
                    slide.subText && (react.createElement("p", { className: "text-white text-sm md:text-base lg:text-lg mb-4 md:mb-8 max-w-2xl mx-auto drop-shadow-md" }, slide.subText)),
                    slide.buttonText && slide.buttonLink && (react.createElement("a", { href: slide.buttonLink, className: "inline-block px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 hover:scale-105", style: {
                            backgroundColor: slide.buttonColor || '#3B82F6'
                        } }, slide.buttonText))))))))))));
}
const Slideshow_query = (/* unused pure expression or super */ null && (`
  query Query($slides: [SlideInput], $autoplay: Boolean, $autoplaySpeed: Int, $arrows: Boolean, $dots: Boolean) {
    slideshowWidget(
      slides: $slides,
      autoplay: $autoplay,
      autoplaySpeed: $autoplaySpeed,
      arrows: $arrows,
      dots: $dots
    ) {
      slides {
        id
        image
        width
        height
        headline
        subText
        buttonText
        buttonLink
        buttonColor
      }
      autoplay
      autoplaySpeed
      arrows
      dots
    }
  }
`));
const Slideshow_fragments = (/* unused pure expression or super */ null && (`
  fragment SlideData on Slide {
    id
    image
    width
    height
    headline
    subText
    buttonText
    buttonLink
    buttonColor
  }
`));
const Slideshow_variables = (/* unused pure expression or super */ null && (`{
  slides: getWidgetSetting("slides"),
  autoplay: getWidgetSetting("autoplay"),
  autoplaySpeed: getWidgetSetting("autoplaySpeed"),
  arrows: getWidgetSetting("arrows"),
  dots: getWidgetSetting("dots")
}`));
//# sourceMappingURL=Slideshow.js.map
;// ./.evershop/build/frontStore/cart/server/entry.js
 
 

















/* harmony default export */ const entry = (renderHtml);
common_Area.defaultProps.components = {
  body: {
    ed212d73f71fec8ea82bcb5bc4019ef42: {
      id: 'ed212d73f71fec8ea82bcb5bc4019ef42',
      sortOrder: 1,
      component: { default: Base }
    },
    eec4ef6b95f195595d9582227e6893007: {
      id: 'eec4ef6b95f195595d9582227e6893007',
      sortOrder: 10,
      component: { default: Notification }
    }
  },
  content: {
    e0160d060559bb318180aacd3110320b7: {
      id: 'e0160d060559bb318180aacd3110320b7',
      sortOrder: 0,
      component: { default: all_Breadcrumb }
    },
    eca99151334fcccba700dd2de6dff1724: {
      id: 'eca99151334fcccba700dd2de6dff1724',
      sortOrder: 10,
      component: { default: ShoppingCart }
    }
  },
  head: {
    e39ac1377914e465aa3ba0b85b7b65b51: {
      id: 'e39ac1377914e465aa3ba0b85b7b65b51',
      sortOrder: 5,
      component: { default: GlobalCss }
    },
    e4f6b4f4e880a01e2bc6720e76dc35dda: {
      id: 'e4f6b4f4e880a01e2bc6720e76dc35dda',
      sortOrder: 5,
      component: { default: HeadTags }
    }
  },
  headerMiddleCenter: {
    e4e6d96402bda7d15e820aa31cdd07219: {
      id: 'e4e6d96402bda7d15e820aa31cdd07219',
      sortOrder: 10,
      component: { default: Logo }
    }
  },
  headerMiddleRight: {
    e40ddad51de371d54f41c77a5bcbaa112: {
      id: 'e40ddad51de371d54f41c77a5bcbaa112',
      sortOrder: 5,
      component: { default: SearchBox_SearchBox }
    },
    ed10bd39c46a7b994f4dd36ebeb8014a0: {
      id: 'ed10bd39c46a7b994f4dd36ebeb8014a0',
      sortOrder: 20,
      component: { default: MiniCartIcon }
    },
    ec3e4422fb7e73dd723e4e6ba64efde21: {
      id: 'ec3e4422fb7e73dd723e4e6ba64efde21',
      sortOrder: 10,
      component: { default: UserIcon }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: CollectionProducts }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: TextBlock }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: BasicMenu }
    },
    banner: {
      id: 'banner',
      sortOrder: 0,
      component: { default: Banner }
    },
    simple_slider: {
      id: 'simple_slider',
      sortOrder: 0,
      component: { default: Slideshow }
    }
  }
} 
export { entry as default };
