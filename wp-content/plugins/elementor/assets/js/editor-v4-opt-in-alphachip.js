/*! elementor - v3.31.0 - 11-08-2025 */
(()=>{var __webpack_modules__=({"../modules/atomic-opt-in/assets/js/panel-chip/app-manager.js":
/*!********************************************************************!*\
  !*** ../modules/atomic-opt-in/assets/js/panel-chip/app-manager.js ***!
  \********************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports.AppManager=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */"react"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"../node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */"../node_modules/@babel/runtime/helpers/createClass.js"));var _app=_interopRequireDefault(__webpack_require__(/*! ./app */"../modules/atomic-opt-in/assets/js/panel-chip/app.js"));var _client=__webpack_require__(/*! react-dom/client */"../node_modules/react-dom/client.js");var AppManager=exports.AppManager=function(){function AppManager(){(0,_classCallCheck2.default)(this,AppManager);this.popover=null;this.onRoute=function(){};this.unbindIframeEvents=function(){};}
return(0,_createClass2.default)(AppManager,[{key:"mount",value:function mount(targetNode,selectors){var _elementor,_elementor$getPrefere,_this=this;if(this.popover){return;}
var wrapperElement=targetNode===null||targetNode===void 0?void 0:targetNode.closest(selectors.wrapperElement);var rootElement=wrapperElement===null||wrapperElement===void 0?void 0:wrapperElement.querySelector(selectors.reactAnchor);if(!rootElement){return;}
this.attachEditorEventListeners();this.popover=(0,_client.createRoot)(rootElement);var colorScheme=((_elementor=elementor)===null||_elementor===void 0||(_elementor$getPrefere=_elementor.getPreferences)===null||_elementor$getPrefere===void 0?void 0:_elementor$getPrefere.call(_elementor,'ui_theme'))||'auto';var isRTL=elementorCommon.config.isRTL;this.popover.render(_react.default.createElement(_app.default,{colorScheme:colorScheme,isRTL:isRTL,onClose:function onClose(){return _this.unmount();}}));}},{key:"unmount",value:function unmount(){if(this.popover){this.detachEditorEventListeners();this.popover.unmount();this.unbindIframeEvents();}
this.popover=null;}},{key:"setupIframeEventListeners",value:function setupIframeEventListeners(){var _this2=this;var previewIframe=document.getElementById('elementor-preview-iframe');if(previewIframe){var iframeDocument=previewIframe.contentWindow.document;var handleClick=function handleClick(){return _this2.unmount();};iframeDocument.addEventListener('click',handleClick);iframeDocument.addEventListener('keydown',handleClick);this.unbindIframeEvents=function(){iframeDocument.removeEventListener('click',handleClick);iframeDocument.removeEventListener('keydown',handleClick);};}}},{key:"setupRouteListener",value:function setupRouteListener(){var _this3=this;this.onRoute=function(component,route){if(route!=='panel/elements/categories'&&route!=='panel/editor/content'){return;}
_this3.unmount();};$e.routes.on('run:after',this.onRoute);}},{key:"attachEditorEventListeners",value:function attachEditorEventListeners(){this.setupIframeEventListeners();this.setupRouteListener();}},{key:"detachEditorEventListeners",value:function detachEditorEventListeners(){$e.routes.off('run:after',this.onRoute);}}]);}();}),"../modules/atomic-opt-in/assets/js/panel-chip/app.js":
/*!************************************************************!*\
  !*** ../modules/atomic-opt-in/assets/js/panel-chip/app.js ***!
  \************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var PropTypes=__webpack_require__(/*! prop-types */"../node_modules/prop-types/index.js");var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */"react"));var _ui=__webpack_require__(/*! @elementor/ui */"@elementor/ui");var _popoverCard=_interopRequireDefault(__webpack_require__(/*! ./components/popover-card */"../modules/atomic-opt-in/assets/js/panel-chip/components/popover-card.js"));var App=function App(props){return _react.default.createElement(_ui.DirectionProvider,{rtl:props.isRTL},_react.default.createElement(_ui.LocalizationProvider,null,_react.default.createElement(_ui.ThemeProvider,{colorScheme:props.colorScheme,palette:"unstable"},_react.default.createElement(_ui.Infotip,{content:_react.default.createElement(_popoverCard.default,{doClose:props.onClose}),placement:"right",arrow:true,open:true,disableHoverListener:true,PopperProps:{modifiers:[{name:'offset',options:{offset:[-24,8]}}]}},_react.default.createElement("span",null)))));};App.propTypes={colorScheme:PropTypes.oneOf(['auto','light','dark']),isRTL:PropTypes.bool,onClose:PropTypes.func.isRequired};var _default=exports["default"]=App;}),"../modules/atomic-opt-in/assets/js/panel-chip/components/popover-card.js":
/*!********************************************************************************!*\
  !*** ../modules/atomic-opt-in/assets/js/panel-chip/components/popover-card.js ***!
  \********************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var PropTypes=__webpack_require__(/*! prop-types */"../node_modules/prop-types/index.js");var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */"react"));var _ui=__webpack_require__(/*! @elementor/ui */"@elementor/ui");var _i18n=__webpack_require__(/*! @wordpress/i18n */"@wordpress/i18n");var popoverData={image:'https://assets.elementor.com/v4-promotion/v1/images/v4_chip.png',image_alt:(0,_i18n.__)('Elementor V4','elementor'),title:(0,_i18n.__)('Elementor V4','elementor'),description:[(0,_i18n.__)('You’ve got powerful new tools with Editor V4. But, keep in mind that this is an early release, so don’t use it on live sites yet.','elementor')],upgrade_text:(0,_i18n.__)('Learn more','elementor'),upgrade_url:'https://go.elementor.com/wp-dash-opt-in-v4-help-center/'};var PopoverCard=function PopoverCard(_ref){var doClose=_ref.doClose;var title=popoverData===null||popoverData===void 0?void 0:popoverData.title,description=popoverData===null||popoverData===void 0?void 0:popoverData.description,imgSrc=popoverData===null||popoverData===void 0?void 0:popoverData.image,imgAlt=popoverData===null||popoverData===void 0?void 0:popoverData.image_alt,ctaText=popoverData===null||popoverData===void 0?void 0:popoverData.upgrade_text,ctaUrl=popoverData===null||popoverData===void 0?void 0:popoverData.upgrade_url;var redirectHandler=function redirectHandler(){window.open(ctaUrl,'_blank');return doClose();};return _react.default.createElement(_ui.ClickAwayListener,{disableReactTree:true,mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:doClose},_react.default.createElement(_ui.Box,{sx:{width:296},"data-testid":"e-popover-card"},_react.default.createElement(_ui.Stack,{direction:"row",alignItems:"center",py:1,px:2},_react.default.createElement(_ui.Typography,{variant:"subtitle2"},title),_react.default.createElement(_ui.CloseButton,{edge:"end",sx:{ml:'auto'},slotProps:{icon:{fontSize:'small'}},onClick:doClose})),_react.default.createElement(_ui.Image,{src:imgSrc,alt:imgAlt,sx:{height:150,width:'100%'}}),_react.default.createElement(_ui.Stack,{px:2},1===description.length?_react.default.createElement(_ui.Typography,{variant:"body2",color:"secondary",sx:{pt:1.5,pb:1}},description[0]):_react.default.createElement(_ui.List,{sx:{pl:2}},description.map(function(text,index){return _react.default.createElement(_ui.ListItem,{key:index,sx:{listStyle:'disc',display:'list-item',color:'text.secondary',p:0}},_react.default.createElement(_ui.Typography,{variant:"body2",color:"secondary"},text));}))),_react.default.createElement(_ui.Stack,{pt:1,pb:1.5,px:2},_react.default.createElement(_ui.Button,{variant:"contained",size:"small",color:"accent",onClick:redirectHandler,sx:{ml:'auto'}},ctaText))));};PopoverCard.propTypes={doClose:PropTypes.func};var _default=exports["default"]=PopoverCard;}),"../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
((module)=>{function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}
module.exports=_classCallCheck,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var toPropertyKey=__webpack_require__(/*! ./toPropertyKey.js */"../node_modules/@babel/runtime/helpers/toPropertyKey.js");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,toPropertyKey(o.key),o);}}
function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}
module.exports=_createClass,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
((module)=>{function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e};}
module.exports=_interopRequireDefault,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \*************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=(__webpack_require__(/*! ./typeof.js */"../node_modules/@babel/runtime/helpers/typeof.js")["default"]);function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}
return("string"===r?String:Number)(t);}
module.exports=toPrimitive,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \***************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=(__webpack_require__(/*! ./typeof.js */"../node_modules/@babel/runtime/helpers/typeof.js")["default"]);var toPrimitive=__webpack_require__(/*! ./toPrimitive.js */"../node_modules/@babel/runtime/helpers/toPrimitive.js");function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}
module.exports=toPropertyKey,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
((module)=>{function _typeof(o){"@babel/helpers - typeof";return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},module.exports.__esModule=true,module.exports["default"]=module.exports,_typeof(o);}
module.exports=_typeof,module.exports.__esModule=true,module.exports["default"]=module.exports;}),"../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
((module)=>{"use strict";var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}
return Object(val);}
function shouldUseNative(){try{if(!Object.assign){return false;}
var test1=new String('abc');test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}
var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}
return true;}catch(err){return false;}}
module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}
if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}
return to;};}),"../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var printWarning=function(){};if(true){var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */"../node_modules/prop-types/lib/ReactPropTypesSecret.js");var loggedTypeFailures={};var has=__webpack_require__(/*! ./lib/has */"../node_modules/prop-types/lib/has.js");printWarning=function(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}
try{throw new Error(message);}catch(x){}};}
function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(true){for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error;try{if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+typeof typeSpecs[typeSpecName]+'`.'+'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');err.name='Invariant Violation';throw err;}
error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}
if(error&&!(error instanceof Error)){printWarning((componentName||'React class')+': type specification of '+
location+' `'+typeSpecName+'` is invalid; the type checker '+'function must return `null` or an `Error` but returned a '+typeof error+'. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).');}
if(error instanceof Error&&!(error.message in loggedTypeFailures)){loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';printWarning('Failed '+location+' type: '+error.message+(stack!=null?stack:''));}}}}}
checkPropTypes.resetWarningCache=function(){if(true){loggedTypeFailures={};}}
module.exports=checkPropTypes;}),"../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactIs=__webpack_require__(/*! react-is */"../node_modules/prop-types/node_modules/react-is/index.js");var assign=__webpack_require__(/*! object-assign */"../node_modules/object-assign/index.js");var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */"../node_modules/prop-types/lib/ReactPropTypesSecret.js");var has=__webpack_require__(/*! ./lib/has */"../node_modules/prop-types/lib/has.js");var checkPropTypes=__webpack_require__(/*! ./checkPropTypes */"../node_modules/prop-types/checkPropTypes.js");var printWarning=function(){};if(true){printWarning=function(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}
try{throw new Error(message);}catch(x){}};}
function emptyFunctionThatReturnsNull(){return null;}
module.exports=function(isValidElement,throwOnDirectAccess){var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}
var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bigint:createPrimitiveTypeChecker('bigint'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker,};function is(x,y){if(x===y){return x!==0||1 / x===1 / y;}else{return x!==x&&y!==y;}}
function PropTypeError(message,data){this.message=message;this.data=data&&typeof data==='object'?data:{};this.stack='';}
PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(true){var manualPropTypeCallCache={};var manualPropTypeWarningCount=0;}
function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret){if(throwOnDirectAccess){var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}else if(true&&typeof console!=='undefined'){var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]&&manualPropTypeWarningCount<3){printWarning('You are manually calling a React.PropTypes validation '+'function for the `'+propFullName+'` prop on `'+componentName+'`. This is deprecated '+'and will throw in the standalone `prop-types` package. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.');manualPropTypeCallCache[cacheKey]=true;manualPropTypeWarningCount++;}}}
if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}
return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}
return null;}else{return validate(props,propName,componentName,location,propFullName);}}
var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}
function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'),{expectedType:expectedType});}
return null;}
return createChainableTypeChecker(validate);}
function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull);}
function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}
var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}
for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}
return null;}
return createChainableTypeChecker(validate);}
function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}
return null;}
return createChainableTypeChecker(validate);}
function createElementTypeTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactIs.isValidElementType(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement type.'));}
return null;}
return createChainableTypeChecker(validate);}
function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}
return null;}
return createChainableTypeChecker(validate);}
function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){if(true){if(arguments.length>1){printWarning('Invalid arguments supplied to oneOf, expected an array, got '+arguments.length+' arguments. '+'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');}else{printWarning('Invalid argument supplied to oneOf, expected an array.');}}
return emptyFunctionThatReturnsNull;}
function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}
var valuesString=JSON.stringify(expectedValues,function replacer(key,value){var type=getPreciseType(value);if(type==='symbol'){return String(value);}
return value;});return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+String(propValue)+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}
return createChainableTypeChecker(validate);}
function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}
var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}
for(var key in propValue){if(has(propValue,key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}
return null;}
return createChainableTypeChecker(validate);}
function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){true?printWarning('Invalid argument supplied to oneOfType, expected an instance of array.'):0;return emptyFunctionThatReturnsNull;}
for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received '+getPostfixForTypeWarning(checker)+' at index '+i+'.');return emptyFunctionThatReturnsNull;}}
function validate(props,propName,componentName,location,propFullName){var expectedTypes=[];for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];var checkerResult=checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret);if(checkerResult==null){return null;}
if(checkerResult.data&&has(checkerResult.data,'expectedType')){expectedTypes.push(checkerResult.data.expectedType);}}
var expectedTypesMessage=(expectedTypes.length>0)?', expected one of type ['+expectedTypes.join(', ')+']':'';return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`'+expectedTypesMessage+'.'));}
return createChainableTypeChecker(validate);}
function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}
return null;}
return createChainableTypeChecker(validate);}
function invalidValidatorError(componentName,location,propFullName,key,type){return new PropTypeError((componentName||'React class')+': '+location+' type `'+propFullName+'.'+key+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+type+'`.');}
function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}
for(var key in shapeTypes){var checker=shapeTypes[key];if(typeof checker!=='function'){return invalidValidatorError(componentName,location,propFullName,key,getPreciseType(checker));}
var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}
return null;}
return createChainableTypeChecker(validate);}
function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}
var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(has(shapeTypes,key)&&typeof checker!=='function'){return invalidValidatorError(componentName,location,propFullName,key,getPreciseType(checker));}
if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}
var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}
return null;}
return createChainableTypeChecker(validate);}
function isNode(propValue){switch(typeof propValue){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}
if(propValue===null||isValidElement(propValue)){return true;}
var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}
return true;default:return false;}}
function isSymbol(propType,propValue){if(propType==='symbol'){return true;}
if(!propValue){return false;}
if(propValue['@@toStringTag']==='Symbol'){return true;}
if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}
return false;}
function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return'array';}
if(propValue instanceof RegExp){return'object';}
if(isSymbol(propType,propValue)){return'symbol';}
return propType;}
function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}
var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}
return propType;}
function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}
function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}
return propValue.constructor.name;}
ReactPropTypes.checkPropTypes=checkPropTypes;ReactPropTypes.resetWarningCache=checkPropTypes.resetWarningCache;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};}),"../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{if(true){var ReactIs=__webpack_require__(/*! react-is */"../node_modules/prop-types/node_modules/react-is/index.js");var throwOnDirectAccess=true;module.exports=__webpack_require__(/*! ./factoryWithTypeCheckers */"../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement,throwOnDirectAccess);}else{}}),"../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
((module)=>{"use strict";var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;}),"../node_modules/prop-types/lib/has.js":
/*!*********************************************!*\
  !*** ../node_modules/prop-types/lib/has.js ***!
  \*********************************************/
((module)=>{module.exports=Function.call.bind(Object.prototype.hasOwnProperty);}),"../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
((__unused_webpack_module,exports)=>{"use strict";if(true){(function(){'use strict';var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;var REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for('react.async_mode'):0xeacf;var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_BLOCK_TYPE=hasSymbol?Symbol.for('react.block'):0xead9;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;var REACT_SCOPE_TYPE=hasSymbol?Symbol.for('react.scope'):0xead7;function isValidElementType(type){return typeof type==='string'||typeof type==='function'||type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||typeof type==='object'&&type!==null&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE||type.$$typeof===REACT_SCOPE_TYPE||type.$$typeof===REACT_BLOCK_TYPE);}
function typeOf(object){if(typeof object==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}
case REACT_PORTAL_TYPE:return $$typeof;}}
return undefined;}
var AsyncMode=REACT_ASYNC_MODE_TYPE;var ConcurrentMode=REACT_CONCURRENT_MODE_TYPE;var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 17+. Update your code to use '+'ReactIs.isConcurrentMode() instead. It has the exact same API.');}}
return isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE;}
function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE;}
function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}
function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}
function isElement(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}
function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}
function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}
function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}
function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}
function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}
function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}
function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}
function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}
exports.AsyncMode=AsyncMode;exports.ConcurrentMode=ConcurrentMode;exports.ContextConsumer=ContextConsumer;exports.ContextProvider=ContextProvider;exports.Element=Element;exports.ForwardRef=ForwardRef;exports.Fragment=Fragment;exports.Lazy=Lazy;exports.Memo=Memo;exports.Portal=Portal;exports.Profiler=Profiler;exports.StrictMode=StrictMode;exports.Suspense=Suspense;exports.isAsyncMode=isAsyncMode;exports.isConcurrentMode=isConcurrentMode;exports.isContextConsumer=isContextConsumer;exports.isContextProvider=isContextProvider;exports.isElement=isElement;exports.isForwardRef=isForwardRef;exports.isFragment=isFragment;exports.isLazy=isLazy;exports.isMemo=isMemo;exports.isPortal=isPortal;exports.isProfiler=isProfiler;exports.isStrictMode=isStrictMode;exports.isSuspense=isSuspense;exports.isValidElementType=isValidElementType;exports.typeOf=typeOf;})();}}),"../node_modules/prop-types/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/index.js ***!
  \*****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";if(false){}else{module.exports=__webpack_require__(/*! ./cjs/react-is.development.js */"../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");}}),"../node_modules/react-dom/client.js":
/*!*******************************************!*\
  !*** ../node_modules/react-dom/client.js ***!
  \*******************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var m=__webpack_require__(/*! react-dom */"react-dom");if(false){}else{var i=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;exports.createRoot=function(c,o){i.usingClientEntryPoint=true;try{return m.createRoot(c,o);}finally{i.usingClientEntryPoint=false;}};exports.hydrateRoot=function(c,h,o){i.usingClientEntryPoint=true;try{return m.hydrateRoot(c,h,o);}finally{i.usingClientEntryPoint=false;}};}}),"@elementor/ui":
/*!*********************************!*\
  !*** external "elementorV2.ui" ***!
  \*********************************/
((module)=>{"use strict";module.exports=elementorV2.ui;}),"@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
((module)=>{"use strict";module.exports=wp.i18n;}),"react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
((module)=>{"use strict";module.exports=React;}),"react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
((module)=>{"use strict";module.exports=ReactDOM;})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports;}
var __webpack_exports__={};(()=>{"use strict";
/*!*******************************************************************!*\
  !*** ../modules/atomic-opt-in/assets/js/panel-chip/panel-chip.js ***!
  \*******************************************************************/
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"../node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */"../node_modules/@babel/runtime/helpers/createClass.js"));var _appManager=__webpack_require__(/*! ./app-manager */"../modules/atomic-opt-in/assets/js/panel-chip/app-manager.js");var AlphaChipApp=function(){function AlphaChipApp(){(0,_classCallCheck2.default)(this,AlphaChipApp);this.appManager=new _appManager.AppManager();this.initializeListener();}
return(0,_createClass2.default)(AlphaChipApp,[{key:"initializeListener",value:function initializeListener(){var _this=this;document.addEventListener('alphachip:open',function(event){var targetElement=event.detail.target;var chipElement=targetElement===null||targetElement===void 0?void 0:targetElement.find('.elementor-panel-heading-category-chip')[0];if(!chipElement){return;}
_this.appManager.mount(chipElement,{wrapperElement:'.elementor-panel-category-title',reactAnchor:'.e-promotion-react-wrapper'});});}}]);}();new AlphaChipApp();})();})();