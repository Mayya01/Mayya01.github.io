/*! jQuery UI - v1.11.4 - 2015-03-13
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(e,i){var r,o,u,s=e.nodeName.toLowerCase();return"area"===s?(r=e.parentNode,o=r.name,e.href&&o&&"map"===r.nodeName.toLowerCase()?(u=t("img[usemap='#"+o+"']")[0],!!u&&n(u)):!1):(/^(input|select|textarea|button|object)$/.test(s)?!e.disabled:"a"===s?e.href||i:i)&&n(e)}function n(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var n=this.css("position"),i="absolute"===n,r=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return i&&"static"===e.css("position")?!1:r.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(n){return!!t.data(n,e)}}):function(e,n,i){return!!t.data(e,i[3])},focusable:function(n){return e(n,!isNaN(t.attr(n,"tabindex")))},tabbable:function(n){var i=t.attr(n,"tabindex"),r=isNaN(i);return(r||i>=0)&&e(n,!r)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,n){function i(e,n,i,o){return t.each(r,function(){n-=parseFloat(t.css(e,"padding"+this))||0,i&&(n-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(n-=parseFloat(t.css(e,"margin"+this))||0)}),n}var r="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),u={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+n]=function(e){return void 0===e?u["inner"+n].call(this):this.each(function(){t(this).css(o,i(this,e)+"px")})},t.fn["outer"+n]=function(e,r){return"number"!=typeof e?u["outer"+n].call(this,e):this.each(function(){t(this).css(o,i(this,e,!0,r)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(n){return arguments.length?e.call(this,t.camelCase(n)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(n,i){return"number"==typeof n?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),i&&i.call(e)},n)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var n,i,r=t(this[0]);r.length&&r[0]!==document;){if(n=r.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(i=parseInt(r.css("zIndex"),10),!isNaN(i)&&0!==i))return i;r=r.parent()}return 0}}),t.ui.plugin={add:function(e,n,i){var r,o=t.ui[e].prototype;for(r in i)o.plugins[r]=o.plugins[r]||[],o.plugins[r].push([n,i[r]])},call:function(t,e,n,i){var r,o=t.plugins[e];if(o&&(i||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(r=0;o.length>r;r++)t.options[o[r][0]]&&o[r][1].apply(t.element,n)}}});
/*! jQuery UI - v1.11.4 - 2015-03-13
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){var e=0,i=Array.prototype.slice;return t.cleanData=function(e){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{n=t._data(s,"events"),n&&n.remove&&t(s).triggerHandler("remove")}catch(r){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var s,o,r,a,u={},d=e.split(".")[0];return e=e.split(".")[1],s=d+"-"+e,n||(n=i,i=t.Widget),t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)},t[d]=t[d]||{},o=t[d][e],r=t[d][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new r(t,e)},t.extend(r,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(n,function(e,n){return t.isFunction(n)?(u[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},s=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(u[e]=n,void 0)}),r.prototype=t.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||e:e},u,{constructor:r,namespace:d,widgetName:e,widgetFullName:s}),o?(t.each(o._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete o._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var n,s,o=i.call(arguments,1),r=0,a=o.length;a>r;r++)for(n in o[r])s=o[r][n],o[r].hasOwnProperty(n)&&void 0!==s&&(e[n]=t.isPlainObject(s)?t.isPlainObject(e[n])?t.widget.extend({},e[n],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,n){var s=n.prototype.widgetFullName||e;t.fn[e]=function(o){var r="string"==typeof o,a=i.call(arguments,1),u=this;return r?this.each(function(){var i,n=t.data(this,s);return"instance"===o?(u=n,!1):n?t.isFunction(n[o])&&"_"!==o.charAt(0)?(i=n[o].apply(n,a),i!==n&&void 0!==i?(u=i&&i.jquery?u.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):(a.length&&(o=t.widget.extend.apply(null,[o].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new n(o,this))})),u}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,o,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},n=e.split("."),e=n.shift(),n.length){for(s=r[e]=t.widget.extend({},this.options[e]),o=0;n.length-1>o;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=i}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,n){var s,o=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,r){function a(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):void 0}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var u=n.match(/^([\w:-]*)\s*(.*)$/),d=u[1]+o.eventNamespace,c=u[2];c?s.delegate(c,d,a):i.bind(d,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,o,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var r,a=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),r=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),r&&t.effects&&t.effects.effect[a]?n[e](s):a!==e&&n[a]?n[a](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}}),t.widget});
/*! jQuery UI - v1.11.4 - 2015-03-13
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery","./widget"],t):t(jQuery)})(function(t){var e=!1;return t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var n=this,s=1===i.which,o="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return s&&!o&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){n.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return n._mouseMove(t)},this._mouseUpDelegate=function(t){return n._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(i){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&t.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),e=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});
/*! jQuery UI - v1.11.4 - 2015-03-13
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){return function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var n,o,a=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=t.extend({},n);var p,g,m,v,_,b,y=t(n.of),w=t.position.getWithinInfo(n.within),k=t.position.getScrollInfo(w),D=(n.collision||"flip").split(" "),x={};return b=s(y),y[0].preventDefault&&(n.at="left top"),g=b.width,m=b.height,v=b.offset,_=t.extend({},v),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):c.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=c.test(i[1])?i[1]:"center",t=u.exec(i[0]),e=u.exec(i[1]),x[this]=[t?t[0]:0,e?e[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===D.length&&(D[1]=D[0]),"right"===n.at[0]?_.left+=g:"center"===n.at[0]&&(_.left+=g/2),"bottom"===n.at[1]?_.top+=m:"center"===n.at[1]&&(_.top+=m/2),p=e(x.at,g,m),_.left+=p[0],_.top+=p[1],this.each(function(){var s,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),C=u+f+i(this,"marginRight")+k.width,I=d+b+i(this,"marginBottom")+k.height,P=t.extend({},_),M=e(x.my,c.outerWidth(),c.outerHeight());"right"===n.my[0]?P.left-=u:"center"===n.my[0]&&(P.left-=u/2),"bottom"===n.my[1]?P.top-=d:"center"===n.my[1]&&(P.top-=d/2),P.left+=M[0],P.top+=M[1],o||(P.left=h(P.left),P.top=h(P.top)),s={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[D[e]]&&t.ui.position[D[e]][i](P,{targetWidth:g,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:s,collisionWidth:C,collisionHeight:I,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:w,elem:c})}),n.using&&(l=function(t){var e=v.left-P.left,i=e+g-u,s=v.top-P.top,o=s+m-d,h={target:{element:y,left:v.left,top:v.top,width:g,height:m},element:{element:c,left:P.left,top:P.top,width:u,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>o?"top":s>0?"bottom":"middle"};u>g&&g>r(e+i)&&(h.horizontal="center"),d>m&&m>r(s+o)&&(h.vertical="middle"),h.important=a(r(e),r(i))>a(r(s),r(o))?"horizontal":"vertical",n.using.call(this,t,h)}),c.offset(t.extend(P,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-o-n;e.collisionWidth>o?h>0&&0>=l?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+o-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-o-n;e.collisionHeight>o?h>0&&0>=l?(i=t.top+h+e.collisionHeight-o-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+o-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-a-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-a-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,r=document.getElementsByTagName("body")[0],h=document.createElement("div");e=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(h),i=r||document.documentElement,i.insertBefore(e,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=t(h).offset().left,o=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(),t.ui.position});
/*! jQuery UI - v1.11.4 - 2015-03-13
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){var e="ui-effects-",i=t;return t.effects={effect:{}},function(t,e){function i(t,e,i){var s=p[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var r,a=o.re.exec(i),h=a&&o.parse(a),l=o.space||"rgba";return h?(r=s[l](h),s[c[l].cache]=r[c[l].cache],n=s._rgba=r._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},p={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},u=l.support={},d=t("<p>")[0],f=t.each;d.style.cssText="background-color:rgba(1,1,1,.5)",u.rgba=d.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,r,a,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(r),r=e);var p=this,u=t.type(n),d=this._rgba=[];return r!==e&&(n=[n,r,a,h],u="array"),"string"===u?this.parse(s(n)||o._default):"array"===u?(f(c.rgba.props,function(t,e){d[e.idx]=i(n[e.idx],e)}),this):"object"===u?(n instanceof l?f(c,function(t,e){n[e.cache]&&(p[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!p[o]&&s.to){if("alpha"===t||null==n[t])return;p[o]=s.to(p._rgba)}p[o][e.idx]=i(n[t],e,!0)}),p[o]&&0>t.inArray(null,p[o].slice(0,3))&&(p[o][3]=1,s.from&&(p._rgba=s.from(p[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var r,a=i[o.cache];return a&&(r=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=a[i.idx]?s=a[i.idx]===r[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],r=0===this.alpha()?l("transparent"):this,a=r[o.cache]||o.to(r._rgba),h=a.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,r=a[o],l=s[o],c=p[n.type]||{};null!==l&&(null===r?h[o]=l:(c.mod&&(l-r>c.mod/2?r+=c.mod:r-l>c.mod/2&&(r-=c.mod)),h[o]=i((l-r)*e+r,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,r=t[3],a=Math.max(s,n,o),h=Math.min(s,n,o),l=a-h,c=a+h,p=.5*c;return e=h===a?0:s===a?60*(n-o)/l+360:n===a?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=p?l/c:l/(2-c),[Math.round(e)%360,i,p,null==r?1:r]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],r=.5>=s?s*(1+i):s+i-s*i,a=2*s-r;return[Math.round(255*n(a,r,e+1/3)),Math.round(255*n(a,r,e)),Math.round(255*n(a,r,e-1/3)),o]},f(c,function(s,n){var o=n.props,r=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[r]&&(this[r]=h(this._rgba)),s===e)return this[r].slice();var n,a=t.type(s),p="array"===a||"object"===a?s:arguments,u=this[r].slice();return f(o,function(t,e){var s=p["object"===a?t:e.idx];null==s&&(s=u[e.idx]),u[e.idx]=i(s,e)}),c?(n=l(c(u)),n[r]=u,n):l(u)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,r=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===r?c:("function"===r&&(n=n.call(this,c),r=t.type(n)),null==n&&i.empty?this:("string"===r&&(o=a.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,r,a="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!u.rgba&&1!==n._rgba[3]){for(r="backgroundColor"===i?e.parentNode:e;(""===a||"transparent"===a)&&r&&r.style;)try{a=t.css(r,"backgroundColor"),r=r.parentNode}catch(h){}n=n.blend(a&&"transparent"!==a?a:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(r),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(i),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function s(e,i){var s,n,r={};for(s in i)n=i[s],e[s]!==n&&(o[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(r[s]=n));return r}var n=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,s){t.fx.step[s]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(i.style(t.elem,s,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(i,o,r,a){var h=t.speed(o,r,a);return this.queue(function(){var o,r=t(this),a=r.attr("class")||"",l=h.children?r.find("*").addBack():r;l=l.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(n,function(t,e){i[e]&&r[e+"Class"](i[e])})},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",a),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(r[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,r){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,r):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function i(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function s(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.11.4",save:function(t,i){for(var s=0;i.length>s;s++)null!==i[s]&&t.data(e+i[s],t[0].style[i[s]])},restore:function(t,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=t.data(e+i[n]),void 0===s&&(s=""),t.css(i[n],s))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(r){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function e(e){function i(){t.isFunction(o)&&o.call(n[0]),t.isFunction(e)&&e()}var n=t(this),o=s.complete,a=s.mode;(n.is(":hidden")?"hide"===a:"show"===a)?(n[a](),i()):r.call(n[0],s,i)}var s=i.apply(this,arguments),n=s.mode,o=s.queue,r=t.effects.effect[s.effect];return t.fx.off||!r?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):o===!1?this.each(e):this.queue(o||"fx",e)},show:function(t){return function(e){if(s(e))return t.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(e){if(s(e))return t.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(e){if(s(e)||"boolean"==typeof e)return t.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}(),t.effects});
/*! jQuery UI - v1.11.4 - 2015-03-13
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery","./effect"],t):t(jQuery)})(function(t){return t.effects.effect.slide=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","width","height"],a=t.effects.setMode(n,e.mode||"show"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,o),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}});
/*! jQuery UI - v1.11.4 - 2015-03-13
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],t):t(jQuery)})(function(t){return t.widget("ui.slider",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,o.addClass("ui-state-active").focus(),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),o!==!1&&this.values(e,i))):i!==this.value()&&(o=this._trigger("slide",t,{handle:this.handles[e],value:i}),o!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!i),this._super(e,i),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.floor(+(t-e).toFixed(this._precision())/i)*i;t=s+e,this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(e.target).addClass("ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})});
/*! jQuery UI - v1.11.4 - 2015-03-13
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position"],t):t(jQuery)})(function(t){return t.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l)}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,t("<div>").html(h).appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(l.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return t("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.css("box-sizing"),l=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=l&&u.down||u,c=function(){o._toggleComplete(i)};return"number"==typeof d&&(a=d),"string"==typeof d&&(n=d),n=n||d.easing||u.easing,a=a||d.duration||u.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:c,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,c):e.animate(this.showProps,a,n,c)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);
i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);
return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,H,z,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],j=z.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;
if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};
f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));
return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(e,t){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(e,t,n){setTimeout(function(){o.html(e),s._trigger("load",i,r),h(n,t)},1)}).fail(function(e,t){setTimeout(function(){h(e,t)},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(t,s),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){n._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=a),this._open(t,e,i))})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){l.of=e,o.is(":hidden")||o.position(l)}var a,o,r,h,l=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,e("<div>").html(h).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(r))},e.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var s={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
/*! URI.js v1.18.3 http://medialize.github.io/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(f,l){"object"===typeof module&&module.exports?module.exports=l():"function"===typeof define&&define.amd?define(l):f.IPv6=l(f)})(this,function(f){var l=f&&f.IPv6;return{best:function(g){g=g.toLowerCase().split(":");var k=g.length,b=8;""===g[0]&&""===g[1]&&""===g[2]?(g.shift(),g.shift()):""===g[0]&&""===g[1]?g.shift():""===g[k-1]&&""===g[k-2]&&g.pop();k=g.length;-1!==g[k-1].indexOf(".")&&(b=7);var p;for(p=0;p<k&&""!==g[p];p++);if(p<b)for(g.splice(p,1,"0000");g.length<b;)g.splice(p,0,"0000");
for(p=0;p<b;p++){for(var k=g[p].split(""),f=0;3>f;f++)if("0"===k[0]&&1<k.length)k.splice(0,1);else break;g[p]=k.join("")}var k=-1,l=f=0,h=-1,n=!1;for(p=0;p<b;p++)n?"0"===g[p]?l+=1:(n=!1,l>f&&(k=h,f=l)):"0"===g[p]&&(n=!0,h=p,l=1);l>f&&(k=h,f=l);1<f&&g.splice(k,f,"");k=g.length;b="";""===g[0]&&(b=":");for(p=0;p<k;p++){b+=g[p];if(p===k-1)break;b+=":"}""===g[k-1]&&(b+=":");return b},noConflict:function(){f.IPv6===this&&(f.IPv6=l);return this}}});
(function(f){function l(b){throw new RangeError(e[b]);}function g(b,e){for(var g=b.length,h=[];g--;)h[g]=e(b[g]);return h}function k(b,e){var h=b.split("@"),f="";1<h.length&&(f=h[0]+"@",b=h[1]);b=b.replace(u,".");h=b.split(".");h=g(h,e).join(".");return f+h}function b(b){for(var e=[],h=0,g=b.length,f,a;h<g;)f=b.charCodeAt(h++),55296<=f&&56319>=f&&h<g?(a=b.charCodeAt(h++),56320==(a&64512)?e.push(((f&1023)<<10)+(a&1023)+65536):(e.push(f),h--)):e.push(f);return e}function p(b){return g(b,function(b){var e=
"";65535<b&&(b-=65536,e+=r(b>>>10&1023|55296),b=56320|b&1023);return e+=r(b)}).join("")}function z(b,e){return b+22+75*(26>b)-((0!=e)<<5)}function v(b,e,h){var g=0;b=h?q(b/700):b>>1;for(b+=q(b/e);455<b;g+=36)b=q(b/35);return q(g+36*b/(b+38))}function h(b){var e=[],h=b.length,g,f=0,a=128,c=72,d,m,t,w,k;d=b.lastIndexOf("-");0>d&&(d=0);for(m=0;m<d;++m)128<=b.charCodeAt(m)&&l("not-basic"),e.push(b.charCodeAt(m));for(d=0<d?d+1:0;d<h;){m=f;g=1;for(t=36;;t+=36){d>=h&&l("invalid-input");w=b.charCodeAt(d++);
w=10>w-48?w-22:26>w-65?w-65:26>w-97?w-97:36;(36<=w||w>q((2147483647-f)/g))&&l("overflow");f+=w*g;k=t<=c?1:t>=c+26?26:t-c;if(w<k)break;w=36-k;g>q(2147483647/w)&&l("overflow");g*=w}g=e.length+1;c=v(f-m,g,0==m);q(f/g)>2147483647-a&&l("overflow");a+=q(f/g);f%=g;e.splice(f++,0,a)}return p(e)}function n(e){var h,g,f,k,a,c,d,m,t,w=[],n,p,A;e=b(e);n=e.length;h=128;g=0;a=72;for(c=0;c<n;++c)t=e[c],128>t&&w.push(r(t));for((f=k=w.length)&&w.push("-");f<n;){d=2147483647;for(c=0;c<n;++c)t=e[c],t>=h&&t<d&&(d=t);
p=f+1;d-h>q((2147483647-g)/p)&&l("overflow");g+=(d-h)*p;h=d;for(c=0;c<n;++c)if(t=e[c],t<h&&2147483647<++g&&l("overflow"),t==h){m=g;for(d=36;;d+=36){t=d<=a?1:d>=a+26?26:d-a;if(m<t)break;A=m-t;m=36-t;w.push(r(z(t+A%m,0)));m=q(A/m)}w.push(r(z(m,0)));a=v(g,p,f==k);g=0;++f}++g;++h}return w.join("")}var A="object"==typeof exports&&exports&&!exports.nodeType&&exports,C="object"==typeof module&&module&&!module.nodeType&&module,D="object"==typeof global&&global;if(D.global===D||D.window===D||D.self===D)f=
D;var x,E=/^xn--/,y=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,e={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},q=Math.floor,r=String.fromCharCode,B;x={version:"1.3.2",ucs2:{decode:b,encode:p},decode:h,encode:n,toASCII:function(b){return k(b,function(b){return y.test(b)?"xn--"+n(b):b})},toUnicode:function(b){return k(b,function(b){return E.test(b)?h(b.slice(4).toLowerCase()):b})}};if("function"==
typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return x});else if(A&&C)if(module.exports==A)C.exports=x;else for(B in x)x.hasOwnProperty(B)&&(A[B]=x[B]);else f.punycode=x})(this);
(function(f,l){"object"===typeof module&&module.exports?module.exports=l():"function"===typeof define&&define.amd?define(l):f.SecondLevelDomains=l(f)})(this,function(f){var l=f&&f.SecondLevelDomains,g={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",
bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",
es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",
mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",
ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",
ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch "},has:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1)return!1;
var k=f.lastIndexOf(".",b-1);if(0>=k||k>=b-1)return!1;var l=g.list[f.slice(b+1)];return l?0<=l.indexOf(" "+f.slice(k+1,b)+" "):!1},is:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1||0<=f.lastIndexOf(".",b-1))return!1;var k=g.list[f.slice(b+1)];return k?0<=k.indexOf(" "+f.slice(0,b)+" "):!1},get:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1)return null;var k=f.lastIndexOf(".",b-1);if(0>=k||k>=b-1)return null;var l=g.list[f.slice(b+1)];return!l||0>l.indexOf(" "+f.slice(k+
1,b)+" ")?null:f.slice(k+1)},noConflict:function(){f.SecondLevelDomains===this&&(f.SecondLevelDomains=l);return this}};return g});
(function(f,l){"object"===typeof module&&module.exports?module.exports=l(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],l):f.URI=l(f.punycode,f.IPv6,f.SecondLevelDomains,f)})(this,function(f,l,g,k){function b(a,c){var d=1<=arguments.length,m=2<=arguments.length;if(!(this instanceof b))return d?m?new b(a,c):new b(a):new b;if(void 0===a){if(d)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}this.href(a);return void 0!==c?this.absoluteTo(c):this}function p(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function z(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function v(a){return"Array"===z(a)}function h(a,c){var d={},b,t;if("RegExp"===z(c))d=null;else if(v(c))for(b=0,t=c.length;b<t;b++)d[c[b]]=!0;else d[c]=!0;b=0;for(t=a.length;b<t;b++)if(d&&void 0!==d[a[b]]||!d&&c.test(a[b]))a.splice(b,
1),t--,b--;return a}function n(a,c){var d,b;if(v(c)){d=0;for(b=c.length;d<b;d++)if(!n(a,c[d]))return!1;return!0}var t=z(c);d=0;for(b=a.length;d<b;d++)if("RegExp"===t){if("string"===typeof a[d]&&a[d].match(c))return!0}else if(a[d]===c)return!0;return!1}function A(a,c){if(!v(a)||!v(c)||a.length!==c.length)return!1;a.sort();c.sort();for(var d=0,b=a.length;d<b;d++)if(a[d]!==c[d])return!1;return!0}function C(a){return a.replace(/^\/+|\/+$/g,"")}function D(a){return escape(a)}function x(a){return encodeURIComponent(a).replace(/[!'()*]/g,
D).replace(/\*/g,"%2A")}function E(a){return function(c,d){if(void 0===c)return this._parts[a]||"";this._parts[a]=c||null;this.build(!d);return this}}function y(a,c){return function(d,b){if(void 0===d)return this._parts[a]||"";null!==d&&(d+="",d.charAt(0)===c&&(d=d.substring(1)));this._parts[a]=d;this.build(!b);return this}}var u=k&&k.URI;b.version="1.18.3";var e=b.prototype,q=Object.prototype.hasOwnProperty;b._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,
port:null,path:null,query:null,fragment:null,duplicateQueryParameters:b.duplicateQueryParameters,escapeQuerySpace:b.escapeQuerySpace}};b.duplicateQueryParameters=!1;b.escapeQuerySpace=!0;b.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;b.idn_expression=/[^a-z0-9\.-]/i;b.punycode_expression=/(xn--)/i;b.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;b.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
b.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;b.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};b.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};b.invalid_hostname_characters=
/[^a-zA-Z0-9\.-]/;b.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};b.getDomAttribute=function(a){if(a&&a.nodeName){var c=a.nodeName.toLowerCase();if("input"!==c||"image"===a.type)return b.domAttributes[c]}};b.encode=x;b.decode=decodeURIComponent;b.iso8859=function(){b.encode=escape;b.decode=unescape};b.unicode=function(){b.encode=x;b.decode=decodeURIComponent};
b.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},
urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};b.encodeQuery=function(a,c){var d=b.encode(a+"");void 0===c&&(c=b.escapeQuerySpace);return c?d.replace(/%20/g,"+"):d};b.decodeQuery=function(a,c){a+="";void 0===c&&(c=b.escapeQuerySpace);try{return b.decode(c?a.replace(/\+/g,"%20"):a)}catch(d){return a}};
var r={encode:"encode",decode:"decode"},B,F=function(a,c){return function(d){try{return b[c](d+"").replace(b.characters[a][c].expression,function(d){return b.characters[a][c].map[d]})}catch(m){return d}}};for(B in r)b[B+"PathSegment"]=F("pathname",r[B]),b[B+"UrnPathSegment"]=F("urnpath",r[B]);r=function(a,c,d){return function(m){var t;t=d?function(a){return b[c](b[d](a))}:b[c];m=(m+"").split(a);for(var e=0,f=m.length;e<f;e++)m[e]=t(m[e]);return m.join(a)}};b.decodePath=r("/","decodePathSegment");
b.decodeUrnPath=r(":","decodeUrnPathSegment");b.recodePath=r("/","encodePathSegment","decode");b.recodeUrnPath=r(":","encodeUrnPathSegment","decode");b.encodeReserved=F("reserved","encode");b.parse=function(a,c){var d;c||(c={});d=a.indexOf("#");-1<d&&(c.fragment=a.substring(d+1)||null,a=a.substring(0,d));d=a.indexOf("?");-1<d&&(c.query=a.substring(d+1)||null,a=a.substring(0,d));"//"===a.substring(0,2)?(c.protocol=null,a=a.substring(2),a=b.parseAuthority(a,c)):(d=a.indexOf(":"),-1<d&&(c.protocol=a.substring(0,
d)||null,c.protocol&&!c.protocol.match(b.protocol_expression)?c.protocol=void 0:"//"===a.substring(d+1,d+3)?(a=a.substring(d+3),a=b.parseAuthority(a,c)):(a=a.substring(d+1),c.urn=!0)));c.path=a;return c};b.parseHost=function(a,c){a=a.replace(/\\/g,"/");var d=a.indexOf("/"),b;-1===d&&(d=a.length);if("["===a.charAt(0))b=a.indexOf("]"),c.hostname=a.substring(1,b)||null,c.port=a.substring(b+2,d)||null,"/"===c.port&&(c.port=null);else{var e=a.indexOf(":");b=a.indexOf("/");e=a.indexOf(":",e+1);-1!==e&&
(-1===b||e<b)?(c.hostname=a.substring(0,d)||null,c.port=null):(b=a.substring(0,d).split(":"),c.hostname=b[0]||null,c.port=b[1]||null)}c.hostname&&"/"!==a.substring(d).charAt(0)&&(d++,a="/"+a);return a.substring(d)||"/"};b.parseAuthority=function(a,c){a=b.parseUserinfo(a,c);return b.parseHost(a,c)};b.parseUserinfo=function(a,c){var d=a.indexOf("/"),m=a.lastIndexOf("@",-1<d?d:a.length-1);-1<m&&(-1===d||m<d)?(d=a.substring(0,m).split(":"),c.username=d[0]?b.decode(d[0]):null,d.shift(),c.password=d[0]?
b.decode(d.join(":")):null,a=a.substring(m+1)):(c.username=null,c.password=null);return a};b.parseQuery=function(a,c){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var d={},m=a.split("&"),e=m.length,f,h,g=0;g<e;g++)if(f=m[g].split("="),h=b.decodeQuery(f.shift(),c),f=f.length?b.decodeQuery(f.join("="),c):null,q.call(d,h)){if("string"===typeof d[h]||null===d[h])d[h]=[d[h]];d[h].push(f)}else d[h]=f;return d};b.build=function(a){var c="";a.protocol&&(c+=a.protocol+
":");a.urn||!c&&!a.hostname||(c+="//");c+=b.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(c+="/"),c+=a.path);"string"===typeof a.query&&a.query&&(c+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(c+="#"+a.fragment);return c};b.buildHost=function(a){var c="";if(a.hostname)c=b.ip6_expression.test(a.hostname)?c+("["+a.hostname+"]"):c+a.hostname;else return"";a.port&&(c+=":"+a.port);return c};b.buildAuthority=function(a){return b.buildUserinfo(a)+
b.buildHost(a)};b.buildUserinfo=function(a){var c="";a.username&&(c+=b.encode(a.username));a.password&&(c+=":"+b.encode(a.password));c&&(c+="@");return c};b.buildQuery=function(a,c,d){var m="",e,f,h,g;for(f in a)if(q.call(a,f)&&f)if(v(a[f]))for(e={},h=0,g=a[f].length;h<g;h++)void 0!==a[f][h]&&void 0===e[a[f][h]+""]&&(m+="&"+b.buildQueryParameter(f,a[f][h],d),!0!==c&&(e[a[f][h]+""]=!0));else void 0!==a[f]&&(m+="&"+b.buildQueryParameter(f,a[f],d));return m.substring(1)};b.buildQueryParameter=function(a,
c,d){return b.encodeQuery(a,d)+(null!==c?"="+b.encodeQuery(c,d):"")};b.addQuery=function(a,c,d){if("object"===typeof c)for(var m in c)q.call(c,m)&&b.addQuery(a,m,c[m]);else if("string"===typeof c)void 0===a[c]?a[c]=d:("string"===typeof a[c]&&(a[c]=[a[c]]),v(d)||(d=[d]),a[c]=(a[c]||[]).concat(d));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};b.removeQuery=function(a,c,d){var m;if(v(c))for(d=0,m=c.length;d<m;d++)a[c[d]]=void 0;else if("RegExp"===z(c))for(m in a)c.test(m)&&
(a[m]=void 0);else if("object"===typeof c)for(m in c)q.call(c,m)&&b.removeQuery(a,m,c[m]);else if("string"===typeof c)void 0!==d?"RegExp"===z(d)?!v(a[c])&&d.test(a[c])?a[c]=void 0:a[c]=h(a[c],d):a[c]!==String(d)||v(d)&&1!==d.length?v(a[c])&&(a[c]=h(a[c],d)):a[c]=void 0:a[c]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};b.hasQuery=function(a,c,d,m){switch(z(c)){case "String":break;case "RegExp":for(var e in a)if(q.call(a,e)&&c.test(e)&&
(void 0===d||b.hasQuery(a,e,d)))return!0;return!1;case "Object":for(var f in c)if(q.call(c,f)&&!b.hasQuery(a,f,c[f]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(z(d)){case "Undefined":return c in a;case "Boolean":return a=!(v(a[c])?!a[c].length:!a[c]),d===a;case "Function":return!!d(a[c],c,a);case "Array":return v(a[c])?(m?n:A)(a[c],d):!1;case "RegExp":return v(a[c])?m?n(a[c],d):!1:!(!a[c]||!a[c].match(d));
case "Number":d=String(d);case "String":return v(a[c])?m?n(a[c],d):!1:a[c]===d;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};b.joinPaths=function(){for(var a=[],c=[],d=0,m=0;m<arguments.length;m++){var e=new b(arguments[m]);a.push(e);for(var e=e.segment(),f=0;f<e.length;f++)"string"===typeof e[f]&&c.push(e[f]),e[f]&&d++}if(!c.length||!d)return new b("");c=(new b("")).segment(c);""!==a[0].path()&&"/"!==a[0].path().slice(0,
1)||c.path("/"+c.path());return c.normalize()};b.commonPath=function(a,c){var d=Math.min(a.length,c.length),b;for(b=0;b<d;b++)if(a.charAt(b)!==c.charAt(b)){b--;break}if(1>b)return a.charAt(0)===c.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(b)||"/"!==c.charAt(b))b=a.substring(0,b).lastIndexOf("/");return a.substring(0,b+1)};b.withinString=function(a,c,d){d||(d={});var e=d.start||b.findUri.start,f=d.end||b.findUri.end,h=d.trim||b.findUri.trim,g=/[a-z0-9-]=["']?$/i;for(e.lastIndex=0;;){var n=
e.exec(a);if(!n)break;n=n.index;if(d.ignoreHtml){var k=a.slice(Math.max(n-3,0),n);if(k&&g.test(k))continue}var k=n+a.slice(n).search(f),l=a.slice(n,k).replace(h,"");d.ignore&&d.ignore.test(l)||(k=n+l.length,l=c(l,n,k,a),void 0===l?e.lastIndex=k:(l=String(l),a=a.slice(0,n)+l+a.slice(k),e.lastIndex=n+l.length))}e.lastIndex=0;return a};b.ensureValidHostname=function(a){if(a.match(b.invalid_hostname_characters)){if(!f)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
if(f.toASCII(a).match(b.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');}};b.noConflict=function(a){if(a)return a={URI:this.noConflict()},k.URITemplate&&"function"===typeof k.URITemplate.noConflict&&(a.URITemplate=k.URITemplate.noConflict()),k.IPv6&&"function"===typeof k.IPv6.noConflict&&(a.IPv6=k.IPv6.noConflict()),k.SecondLevelDomains&&"function"===typeof k.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=k.SecondLevelDomains.noConflict()),
a;k.URI===this&&(k.URI=u);return this};e.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=b.build(this._parts),this._deferred_build=!1;return this};e.clone=function(){return new b(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=E("protocol");e.username=E("username");e.password=E("password");e.hostname=E("hostname");e.port=E("port");e.query=y("query","?");e.fragment=y("fragment","#");e.search=function(a,c){var d=
this.query(a,c);return"string"===typeof d&&d.length?"?"+d:d};e.hash=function(a,c){var d=this.fragment(a,c);return"string"===typeof d&&d.length?"#"+d:d};e.pathname=function(a,c){if(void 0===a||!0===a){var d=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?b.decodeUrnPath:b.decodePath)(d):d}this._parts.path=this._parts.urn?a?b.recodeUrnPath(a):"":a?b.recodePath(a):"/";this.build(!c);return this};e.path=e.pathname;e.href=function(a,c){var d;if(void 0===a)return this.toString();
this._string="";this._parts=b._parts();var e=a instanceof b,f="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(f=b.getDomAttribute(a),a=a[f]||"",f=!1);!e&&f&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=b.parse(String(a),this._parts);else if(e||f)for(d in e=e?a._parts:a,e)q.call(this._parts,d)&&(this._parts[d]=e[d]);else throw new TypeError("invalid input");this.build(!c);return this};e.is=function(a){var c=!1,d=!1,e=!1,f=!1,h=!1,
n=!1,k=!1,l=!this._parts.urn;this._parts.hostname&&(l=!1,d=b.ip4_expression.test(this._parts.hostname),e=b.ip6_expression.test(this._parts.hostname),c=d||e,h=(f=!c)&&g&&g.has(this._parts.hostname),n=f&&b.idn_expression.test(this._parts.hostname),k=f&&b.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return l;case "absolute":return!l;case "domain":case "name":return f;case "sld":return h;case "ip":return c;case "ip4":case "ipv4":case "inet4":return d;case "ip6":case "ipv6":case "inet6":return e;
case "idn":return n;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return k}return null};var G=e.protocol,H=e.port,I=e.hostname;e.protocol=function(a,c){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(b.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return G.call(this,a,c)};e.scheme=e.protocol;e.port=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==
a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+a+'" contains characters other than [0-9]');return H.call(this,a,c)};e.hostname=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var d={};if("/"!==b.parseHost(a,d))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=d.hostname}return I.call(this,a,c)};e.origin=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===
a){var d=this.protocol();return this.authority()?(d?d+"://":"")+this.authority():""}d=b(a);this.protocol(d.protocol()).authority(d.authority()).build(!c);return this};e.host=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildHost(this._parts):"";if("/"!==b.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!c);return this};e.authority=function(a,c){if(this._parts.urn)return void 0===
a?"":this;if(void 0===a)return this._parts.hostname?b.buildAuthority(this._parts):"";if("/"!==b.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!c);return this};e.userinfo=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=b.buildUserinfo(this._parts);return d?d.substring(0,d.length-1):d}"@"!==a[a.length-1]&&(a+="@");b.parseUserinfo(a,this._parts);this.build(!c);return this};e.resource=function(a,
c){var d;if(void 0===a)return this.path()+this.search()+this.hash();d=b.parse(a);this._parts.path=d.path;this._parts.query=d.query;this._parts.fragment=d.fragment;this.build(!c);return this};e.subdomain=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,d)||""}d=this._parts.hostname.length-this.domain().length;d=this._parts.hostname.substring(0,
d);d=new RegExp("^"+p(d));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&b.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(d,a);this.build(!c);return this};e.domain=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.match(/\./g);if(d&&2>d.length)return this._parts.hostname;d=this._parts.hostname.length-this.tld(c).length-1;d=this._parts.hostname.lastIndexOf(".",
d-1)+1;return this._parts.hostname.substring(d)||""}if(!a)throw new TypeError("cannot set domain empty");b.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(d=new RegExp(p(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a));this.build(!c);return this};e.tld=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.lastIndexOf("."),
d=this._parts.hostname.substring(d+1);return!0!==c&&g&&g.list[d.toLowerCase()]?g.get(this._parts.hostname)||d:d}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(g&&g.is(a))d=new RegExp(p(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");d=new RegExp(p(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(d,
a)}else throw new TypeError("cannot set TLD empty");this.build(!c);return this};e.directory=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var d=this._parts.path.length-this.filename().length-1,d=this._parts.path.substring(0,d)||(this._parts.hostname?"/":"");return a?b.decodePath(d):d}d=this._parts.path.length-this.filename().length;d=this._parts.path.substring(0,d);d=new RegExp("^"+
p(d));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=b.recodePath(a);this._parts.path=this._parts.path.replace(d,a);this.build(!c);return this};e.filename=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this._parts.path.lastIndexOf("/"),d=this._parts.path.substring(d+1);return a?b.decodePathSegment(d):d}d=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&
(d=!0);var e=new RegExp(p(this.filename())+"$");a=b.recodePath(a);this._parts.path=this._parts.path.replace(e,a);d?this.normalizePath(c):this.build(!c);return this};e.suffix=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this.filename(),e=d.lastIndexOf(".");if(-1===e)return"";d=d.substring(e+1);d=/^[a-z0-9%]+$/i.test(d)?d:"";return a?b.decodePathSegment(d):d}"."===a.charAt(0)&&(a=a.substring(1));if(d=this.suffix())e=
a?new RegExp(p(d)+"$"):new RegExp(p("."+d)+"$");else{if(!a)return this;this._parts.path+="."+b.recodePath(a)}e&&(a=b.recodePath(a),this._parts.path=this._parts.path.replace(e,a));this.build(!c);return this};e.segment=function(a,c,d){var b=this._parts.urn?":":"/",e=this.path(),f="/"===e.substring(0,1),e=e.split(b);void 0!==a&&"number"!==typeof a&&(d=c,c=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');f&&e.shift();0>a&&(a=Math.max(e.length+
a,0));if(void 0===c)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(v(c)){e=[];a=0;for(var h=c.length;a<h;a++)if(c[a].length||e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(C(c[a]))}else{if(c||"string"===typeof c)c=C(c),""===e[e.length-1]?e[e.length-1]=c:e.push(c)}else c?e[a]=C(c):e.splice(a,1);f&&e.unshift("");return this.path(e.join(b),d)};e.segmentCoded=function(a,c,d){var e,f;"number"!==typeof a&&(d=c,c=a,a=void 0);if(void 0===c){a=this.segment(a,c,d);if(v(a))for(e=
0,f=a.length;e<f;e++)a[e]=b.decode(a[e]);else a=void 0!==a?b.decode(a):void 0;return a}if(v(c))for(e=0,f=c.length;e<f;e++)c[e]=b.encode(c[e]);else c="string"===typeof c||c instanceof String?b.encode(c):c;return this.segment(a,c,d)};var J=e.query;e.query=function(a,c){if(!0===a)return b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,d);this._parts.query=b.buildQuery(e||d,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);this.build(!c);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=b.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!c),this):J.call(this,a,c)};e.setQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==c?c:null;else if("object"===typeof a)for(var f in a)q.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.addQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.addQuery(e,a,void 0===c?null:c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.removeQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,
this._parts.escapeQuerySpace);b.removeQuery(e,a,c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.hasQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return b.hasQuery(e,a,c,d)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():
this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&f?this._parts.hostname=f.toASCII(this._parts.hostname):this.is("IPv6")&&l&&(this._parts.hostname=l.best(this._parts.hostname)),this._parts.hostname=
this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===b.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};e.normalizePath=function(a){var c=this._parts.path;if(!c)return this;if(this._parts.urn)return this._parts.path=b.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;var c=b.recodePath(c),d,e="",f,h;"/"!==c.charAt(0)&&(d=!0,
c="/"+c);if("/.."===c.slice(-3)||"/."===c.slice(-2))c+="/";c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");d&&(e=c.substring(1).match(/^(\.\.\/)+/)||"")&&(e=e[0]);for(;;){f=c.search(/\/\.\.(\/|$)/);if(-1===f)break;else if(0===f){c=c.substring(3);continue}h=c.substring(0,f).lastIndexOf("/");-1===h&&(h=f);c=c.substring(0,h)+c.substring(f+3)}d&&this.is("relative")&&(c=e+c.substring(1));this._parts.path=c;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=
function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(b.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=b.encode,c=b.decode;b.encode=escape;b.decode=decodeURIComponent;try{this.normalize()}finally{b.encode=
a,b.decode=c}return this};e.unicode=function(){var a=b.encode,c=b.decode;b.encode=x;b.decode=unescape;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};e.readable=function(){var a=this.clone();a.username("").password("").normalize();var c="";a._parts.protocol&&(c+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&f?(c+=f.toUnicode(a._parts.hostname),a._parts.port&&(c+=":"+a._parts.port)):c+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(c+="/");
c+=a.path(!0);if(a._parts.query){for(var d="",e=0,h=a._parts.query.split("&"),g=h.length;e<g;e++){var n=(h[e]||"").split("="),d=d+("&"+b.decodeQuery(n[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==n[1]&&(d+="="+b.decodeQuery(n[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}c+="?"+d.substring(1)}return c+=b.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var c=this.clone(),d=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");
a instanceof b||(a=new b(a));c._parts.protocol||(c._parts.protocol=a._parts.protocol);if(this._parts.hostname)return c;for(e=0;f=d[e];e++)c._parts[f]=a._parts[f];c._parts.path?(".."===c._parts.path.substring(-2)&&(c._parts.path+="/"),"/"!==c.path().charAt(0)&&(d=(d=a.directory())?d:0===a.path().indexOf("/")?"/":"",c._parts.path=(d?d+"/":"")+c._parts.path,c.normalizePath())):(c._parts.path=a._parts.path,c._parts.query||(c._parts.query=a._parts.query));c.build();return c};e.relativeTo=function(a){var c=
this.clone().normalize(),d,e,f;if(c._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new b(a)).normalize();d=c._parts;e=a._parts;f=c.path();a=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");d.protocol===e.protocol&&(d.protocol=null);if(d.username===e.username&&d.password===e.password&&null===d.protocol&&null===d.username&&null===d.password&&d.hostname===
e.hostname&&d.port===e.port)d.hostname=null,d.port=null;else return c.build();if(f===a)return d.path="",c.build();f=b.commonPath(f,a);if(!f)return c.build();e=e.path.substring(f.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");d.path=e+d.path.substring(f.length)||"./";return c.build()};e.equals=function(a){var c=this.clone(),d=new b(a),e;a={};var f,h;c.normalize();d.normalize();if(c.toString()===d.toString())return!0;f=c.query();e=d.query();c.query("");d.query("");if(c.toString()!==d.toString()||
f.length!==e.length)return!1;c=b.parseQuery(f,this._parts.escapeQuerySpace);e=b.parseQuery(e,this._parts.escapeQuerySpace);for(h in c)if(q.call(c,h)){if(!v(c[h])){if(c[h]!==e[h])return!1}else if(!A(c[h],e[h]))return!1;a[h]=!0}for(h in e)if(q.call(e,h)&&!a[h])return!1;return!0};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return b});
(function(f,l){"object"===typeof module&&module.exports?module.exports=l(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],l):f.URITemplate=l(f.URI,f)})(this,function(f,l){function g(b){if(g._cache[b])return g._cache[b];if(!(this instanceof g))return new g(b);this.expression=b;g._cache[b]=this;return this}function k(b){this.data=b;this.cache={}}var b=l&&l.URITemplate,p=Object.prototype.hasOwnProperty,z=g.prototype,v={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,
encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},
"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};g._cache={};g.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;g.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/;g.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/;g.LITERAL_PATTERN=/[<>{}'"`^| \\]/;g.expand=function(b,f){var h=v[b.operator],n=h.named?"Named":"Unnamed",k=b.variables,l=[],p,y,u;for(u=0;y=k[u];u++)if(p=f.get(y.name),p.val.length){if(1<p.type&&y.maxlength)throw Error('Invalid expression: Prefix modifier not applicable to variable "'+
y.name+'"');l.push(g["expand"+n](p,h,y.explode,y.explode&&h.separator||",",y.maxlength,y.name))}else p.type&&l.push("");return l.length?h.prefix+l.join(h.separator):""};g.expandNamed=function(b,g,k,l,p,x){var h="",n=g.encode;g=g.empty_name_separator;var A=!b[n].length,e=2===b.type?"":f[n](x),q,r,C;r=0;for(C=b.val.length;r<C;r++)p?(q=f[n](b.val[r][1].substring(0,p)),2===b.type&&(e=f[n](b.val[r][0].substring(0,p)))):A?(q=f[n](b.val[r][1]),2===b.type?(e=f[n](b.val[r][0]),b[n].push([e,q])):b[n].push([void 0,
q])):(q=b[n][r][1],2===b.type&&(e=b[n][r][0])),h&&(h+=l),k?h+=e+(g||q?"=":"")+q:(r||(h+=f[n](x)+(g||q?"=":"")),2===b.type&&(h+=e+","),h+=q);return h};g.expandUnnamed=function(b,g,k,l,p){var h="",n=g.encode;g=g.empty_name_separator;var A=!b[n].length,u,e,q,r;q=0;for(r=b.val.length;q<r;q++)p?e=f[n](b.val[q][1].substring(0,p)):A?(e=f[n](b.val[q][1]),b[n].push([2===b.type?f[n](b.val[q][0]):void 0,e])):e=b[n][q][1],h&&(h+=l),2===b.type&&(u=p?f[n](b.val[q][0].substring(0,p)):b[n][q][0],h+=u,h=k?h+(g||e?
"=":""):h+","),h+=e;return h};g.noConflict=function(){l.URITemplate===g&&(l.URITemplate=b);return g};z.expand=function(b){var f="";this.parts&&this.parts.length||this.parse();b instanceof k||(b=new k(b));for(var h=0,l=this.parts.length;h<l;h++)f+="string"===typeof this.parts[h]?this.parts[h]:g.expand(this.parts[h],b);return f};z.parse=function(){var b=this.expression,f=g.EXPRESSION_PATTERN,k=g.VARIABLE_PATTERN,l=g.VARIABLE_NAME_PATTERN,p=g.LITERAL_PATTERN,x=[],z=0,y,u,e,q=function(b){if(b.match(p))throw Error('Invalid Literal "'+
b+'"');return b};for(f.lastIndex=0;;){u=f.exec(b);if(null===u){x.push(q(b.substring(z)));break}else x.push(q(b.substring(z,u.index))),z=u.index+u[0].length;if(!v[u[1]])throw Error('Unknown Operator "'+u[1]+'" in "'+u[0]+'"');if(!u[3])throw Error('Unclosed Expression "'+u[0]+'"');y=u[2].split(",");for(var r=0,B=y.length;r<B;r++){e=y[r].match(k);if(null===e)throw Error('Invalid Variable "'+y[r]+'" in "'+u[0]+'"');if(e[1].match(l))throw Error('Invalid Variable Name "'+e[1]+'" in "'+u[0]+'"');y[r]={name:e[1],
explode:!!e[3],maxlength:e[4]&&parseInt(e[4],10)}}if(!y.length)throw Error('Expression Missing Variable(s) "'+u[0]+'"');x.push({expression:u[0],operator:u[1],variables:y})}x.length||x.push(q(b));this.parts=x;return this};k.prototype.get=function(b){var f=this.data,g={type:0,val:[],encode:[],encodeReserved:[]},h;if(void 0!==this.cache[b])return this.cache[b];this.cache[b]=g;f="[object Function]"===String(Object.prototype.toString.call(f))?f(b):"[object Function]"===String(Object.prototype.toString.call(f[b]))?
f[b](b):f[b];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){h=0;for(b=f.length;h<b;h++)void 0!==f[h]&&null!==f[h]&&g.val.push([void 0,String(f[h])]);g.val.length&&(g.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(h in f)p.call(f,h)&&void 0!==f[h]&&null!==f[h]&&g.val.push([h,String(f[h])]);g.val.length&&(g.type=2)}else g.type=1,g.val.push([void 0,String(f)]);return g};f.expand=function(b,k){var h=(new g(b)).expand(k);return new f(h)};
return g});

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/*!
 * Shuffle.js by @Vestride
 * Categorize, sort, and filter a responsive grid of items.
 * Dependencies: jQuery 1.9+, Modernizr 2.6.2+
 * @license MIT license
 * @version 3.1.1
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","modernizr"],a):"object"==typeof exports?module.exports=a(require("jquery"),window.Modernizr):window.Shuffle=a(window.jQuery,window.Modernizr)}(function(a,b,c){"use strict";function d(a){return a?a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-"):""}function e(b,c,d){var e,f,g,h=null,i=0;d=d||{};var j=function(){i=d.leading===!1?0:a.now(),h=null,g=b.apply(e,f),e=f=null};return function(){var k=a.now();i||d.leading!==!1||(i=k);var l=c-(k-i);return e=this,f=arguments,0>=l||l>c?(clearTimeout(h),h=null,i=k,g=b.apply(e,f),e=f=null):h||d.trailing===!1||(h=setTimeout(j,l)),g}}function f(a,b,c){for(var d=0,e=a.length;e>d;d++)if(b.call(c,a[d],d,a)==={})return}function g(b,c,d){return setTimeout(a.proxy(b,c),d)}function h(a){return Math.max.apply(Math,a)}function i(a){return Math.min.apply(Math,a)}function j(b){return a.isNumeric(b)?b:0}function k(a){var b,c,d=a.length;if(!d)return a;for(;--d;)c=Math.floor(Math.random()*(d+1)),b=a[c],a[c]=a[d],a[d]=b;return a}if("object"!=typeof b)throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");var l=b.prefixed("transition"),m=b.prefixed("transitionDelay"),n=b.prefixed("transitionDuration"),o={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[l],p=b.prefixed("transform"),q=d(p),r=b.csstransforms&&b.csstransitions,s=b.csstransforms3d,t=!!window.getComputedStyle,u="shuffle",v="all",w="groups",x=1,y=.001,z=window.getComputedStyle||function(){},A=function(a,b){this.x=j(a),this.y=j(b)};A.equals=function(a,b){return a.x===b.x&&a.y===b.y};var B=function(){if(!t)return!1;var a=document.body||document.documentElement,b=document.createElement("div");b.style.cssText="width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;",a.appendChild(b);var c=z(b,null).width,d="10px"===c;return a.removeChild(b),d}(),C=0,D=a(window),E=function(b,c){c=c||{},a.extend(this,E.options,c,E.settings),this.$el=a(b),this.element=b,this.unique="shuffle_"+C++,this._fire(E.EventType.LOADING),this._init(),g(function(){this.initialized=!0,this._fire(E.EventType.DONE)},this,16)};return E.EventType={LOADING:"loading",DONE:"done",LAYOUT:"layout",REMOVED:"removed"},E.ClassName={BASE:u,SHUFFLE_ITEM:"shuffle-item",FILTERED:"filtered",CONCEALED:"concealed"},E.options={group:v,speed:250,easing:"ease-out",itemSelector:"",sizer:null,gutterWidth:0,columnWidth:0,delimeter:null,buffer:0,columnThreshold:t?.01:.1,initialSort:null,throttle:e,throttleTime:300,sequentialFadeDelay:150,supported:r},E.settings={useSizer:!1,itemCss:{position:"absolute",top:0,left:0,visibility:"visible"},revealAppendedDelay:300,lastSort:{},lastFilter:v,enabled:!0,destroyed:!1,initialized:!1,_animations:[],_transitions:[],_isMovementCanceled:!1,styleQueue:[]},E.Point=A,E._getItemTransformString=function(a,b){return s?"translate3d("+a.x+"px, "+a.y+"px, 0) scale3d("+b+", "+b+", 1)":"translate("+a.x+"px, "+a.y+"px) scale("+b+")"},E._getNumberStyle=function(b,c,d){if(t){d=d||z(b,null);var e=E._getFloat(d[c]);return B||"width"!==c?B||"height"!==c||(e+=E._getFloat(d.paddingTop)+E._getFloat(d.paddingBottom)+E._getFloat(d.borderTopWidth)+E._getFloat(d.borderBottomWidth)):e+=E._getFloat(d.paddingLeft)+E._getFloat(d.paddingRight)+E._getFloat(d.borderLeftWidth)+E._getFloat(d.borderRightWidth),e}return E._getFloat(a(b).css(c))},E._getFloat=function(a){return j(parseFloat(a))},E._getOuterWidth=function(a,b){var c=z(a,null),d=E._getNumberStyle(a,"width",c);if(b){var e=E._getNumberStyle(a,"marginLeft",c),f=E._getNumberStyle(a,"marginRight",c);d+=e+f}return d},E._getOuterHeight=function(a,b){var c=z(a,null),d=E._getNumberStyle(a,"height",c);if(b){var e=E._getNumberStyle(a,"marginTop",c),f=E._getNumberStyle(a,"marginBottom",c);d+=e+f}return d},E._skipTransition=function(a,b,c){var d=a.style[n];a.style[n]="0ms",b.call(c);var e=a.offsetWidth;e=null,a.style[n]=d},E.prototype._init=function(){this.$items=this._getItems(),this.sizer=this._getElementOption(this.sizer),this.sizer&&(this.useSizer=!0),this.$el.addClass(E.ClassName.BASE),this._initItems(),D.on("resize."+u+"."+this.unique,this._getResizeFunction());var a=this.$el.css(["position","overflow"]),b=E._getOuterWidth(this.element);this._validateStyles(a),this._setColumns(b),this.shuffle(this.group,this.initialSort),this.supported&&g(function(){this._setTransitions(),this.element.style[l]="height "+this.speed+"ms "+this.easing},this)},E.prototype._getResizeFunction=function(){var b=a.proxy(this._onResize,this);return this.throttle?this.throttle(b,this.throttleTime):b},E.prototype._getElementOption=function(a){return"string"==typeof a?this.$el.find(a)[0]||null:a&&a.nodeType&&1===a.nodeType?a:a&&a.jquery?a[0]:null},E.prototype._validateStyles=function(a){"static"===a.position&&(this.element.style.position="relative"),"hidden"!==a.overflow&&(this.element.style.overflow="hidden")},E.prototype._filter=function(a,b){a=a||this.lastFilter,b=b||this.$items;var c=this._getFilteredSets(a,b);return this._toggleFilterClasses(c.filtered,c.concealed),this.lastFilter=a,"string"==typeof a&&(this.group=a),c.filtered},E.prototype._getFilteredSets=function(b,c){var d=a(),e=a();return b===v?d=c:f(c,function(c){var f=a(c);this._doesPassFilter(b,f)?d=d.add(f):e=e.add(f)},this),{filtered:d,concealed:e}},E.prototype._doesPassFilter=function(b,c){if(a.isFunction(b))return b.call(c[0],c,this);var d=c.data(w),e=this.delimeter&&!a.isArray(d)?d.split(this.delimeter):d;return a.inArray(b,e)>-1},E.prototype._toggleFilterClasses=function(a,b){a.removeClass(E.ClassName.CONCEALED).addClass(E.ClassName.FILTERED),b.removeClass(E.ClassName.FILTERED).addClass(E.ClassName.CONCEALED)},E.prototype._initItems=function(a){a=a||this.$items,a.addClass([E.ClassName.SHUFFLE_ITEM,E.ClassName.FILTERED].join(" ")),a.css(this.itemCss).data("point",new A).data("scale",x)},E.prototype._updateItemCount=function(){this.visibleItems=this._getFilteredItems().length},E.prototype._setTransition=function(a){a.style[l]=q+" "+this.speed+"ms "+this.easing+", opacity "+this.speed+"ms "+this.easing},E.prototype._setTransitions=function(a){a=a||this.$items,f(a,function(a){this._setTransition(a)},this)},E.prototype._setSequentialDelay=function(a){this.supported&&f(a,function(a,b){a.style[m]="0ms,"+(b+1)*this.sequentialFadeDelay+"ms"},this)},E.prototype._getItems=function(){return this.$el.children(this.itemSelector)},E.prototype._getFilteredItems=function(){return this.$items.filter("."+E.ClassName.FILTERED)},E.prototype._getConcealedItems=function(){return this.$items.filter("."+E.ClassName.CONCEALED)},E.prototype._getColumnSize=function(b,c){var d;return d=a.isFunction(this.columnWidth)?this.columnWidth(b):this.useSizer?E._getOuterWidth(this.sizer):this.columnWidth?this.columnWidth:this.$items.length>0?E._getOuterWidth(this.$items[0],!0):b,0===d&&(d=b),d+c},E.prototype._getGutterSize=function(b){var c;return c=a.isFunction(this.gutterWidth)?this.gutterWidth(b):this.useSizer?E._getNumberStyle(this.sizer,"marginLeft"):this.gutterWidth},E.prototype._setColumns=function(a){var b=a||E._getOuterWidth(this.element),c=this._getGutterSize(b),d=this._getColumnSize(b,c),e=(b+c)/d;Math.abs(Math.round(e)-e)<this.columnThreshold&&(e=Math.round(e)),this.cols=Math.max(Math.floor(e),1),this.containerWidth=b,this.colWidth=d},E.prototype._setContainerSize=function(){this.$el.css("height",this._getContainerSize())},E.prototype._getContainerSize=function(){return h(this.positions)},E.prototype._fire=function(a,b){this.$el.trigger(a+"."+u,b&&b.length?b:[this])},E.prototype._resetCols=function(){var a=this.cols;for(this.positions=[];a--;)this.positions.push(0)},E.prototype._layout=function(a,b){f(a,function(a){this._layoutItem(a,!!b)},this),this._processStyleQueue(),this._setContainerSize()},E.prototype._layoutItem=function(b,c){var d=a(b),e=d.data(),f=e.point,g=e.scale,h={width:E._getOuterWidth(b,!0),height:E._getOuterHeight(b,!0)},i=this._getItemPosition(h);A.equals(f,i)&&g===x||(e.point=i,e.scale=x,this.styleQueue.push({$item:d,point:i,scale:x,opacity:c?0:1,skipTransition:c||0===this.speed,callfront:function(){c||d.css("visibility","visible")},callback:function(){c&&d.css("visibility","hidden")}}))},E.prototype._getItemPosition=function(a){for(var b=this._getColumnSpan(a.width,this.colWidth,this.cols),c=this._getColumnSet(b,this.cols),d=this._getShortColumn(c,this.buffer),e=new A(Math.round(this.colWidth*d),Math.round(c[d])),f=c[d]+a.height,g=this.cols+1-c.length,h=0;g>h;h++)this.positions[d+h]=f;return e},E.prototype._getColumnSpan=function(a,b,c){var d=a/b;return Math.abs(Math.round(d)-d)<this.columnThreshold&&(d=Math.round(d)),Math.min(Math.ceil(d),c)},E.prototype._getColumnSet=function(a,b){if(1===a)return this.positions;for(var c=b+1-a,d=[],e=0;c>e;e++)d[e]=h(this.positions.slice(e,e+a));return d},E.prototype._getShortColumn=function(a,b){for(var c=i(a),d=0,e=a.length;e>d;d++)if(a[d]>=c-b&&a[d]<=c+b)return d;return 0},E.prototype._shrink=function(b){var c=b||this._getConcealedItems();f(c,function(b){var c=a(b),d=c.data();d.scale!==y&&(d.scale=y,this.styleQueue.push({$item:c,point:d.point,scale:y,opacity:0,callback:function(){c.css("visibility","hidden")}}))},this)},E.prototype._onResize=function(){if(this.enabled&&!this.destroyed){var a=E._getOuterWidth(this.element);a!==this.containerWidth&&this.update()}},E.prototype._getStylesForTransition=function(a){var b={opacity:a.opacity};return this.supported?b[p]=E._getItemTransformString(a.point,a.scale):(b.left=a.point.x,b.top=a.point.y),b},E.prototype._transition=function(b){var c=this._getStylesForTransition(b);this._startItemAnimation(b.$item,c,b.callfront||a.noop,b.callback||a.noop)},E.prototype._startItemAnimation=function(b,c,d,e){function f(b){b.target===b.currentTarget&&(a(b.target).off(o,f),g._removeTransitionReference(h),e())}var g=this,h={$element:b,handler:f};if(d(),!this.initialized)return b.css(c),void e();if(this.supported)b.css(c),b.on(o,f),this._transitions.push(h);else{var i=b.stop(!0).animate(c,this.speed,"swing",e);this._animations.push(i.promise())}},E.prototype._processStyleQueue=function(b){this.isTransitioning&&this._cancelMovement();var c=a();f(this.styleQueue,function(a){a.skipTransition?this._styleImmediately(a):(c=c.add(a.$item),this._transition(a))},this),c.length>0&&this.initialized&&this.speed>0?(this.isTransitioning=!0,this.supported?this._whenCollectionDone(c,o,this._movementFinished):this._whenAnimationsDone(this._movementFinished)):b||g(this._layoutEnd,this),this.styleQueue.length=0},E.prototype._cancelMovement=function(){this.supported?f(this._transitions,function(a){a.$element.off(o,a.handler)}):(this._isMovementCanceled=!0,this.$items.stop(!0),this._isMovementCanceled=!1),this._transitions.length=0,this.isTransitioning=!1},E.prototype._removeTransitionReference=function(b){var c=a.inArray(b,this._transitions);c>-1&&this._transitions.splice(c,1)},E.prototype._styleImmediately=function(a){E._skipTransition(a.$item[0],function(){a.$item.css(this._getStylesForTransition(a))},this)},E.prototype._movementFinished=function(){this.isTransitioning=!1,this._layoutEnd()},E.prototype._layoutEnd=function(){this._fire(E.EventType.LAYOUT)},E.prototype._addItems=function(a,b,c){this._initItems(a),this._setTransitions(a),this.$items=this._getItems(),this._shrink(a),f(this.styleQueue,function(a){a.skipTransition=!0}),this._processStyleQueue(!0),b?this._addItemsToEnd(a,c):this.shuffle(this.lastFilter)},E.prototype._addItemsToEnd=function(a,b){var c=this._filter(null,a),d=c.get();this._updateItemCount(),this._layout(d,!0),b&&this.supported&&this._setSequentialDelay(d),this._revealAppended(d)},E.prototype._revealAppended=function(b){g(function(){f(b,function(b){var c=a(b);this._transition({$item:c,opacity:1,point:c.data("point"),scale:x})},this),this._whenCollectionDone(a(b),o,function(){a(b).css(m,"0ms"),this._movementFinished()})},this,this.revealAppendedDelay)},E.prototype._whenCollectionDone=function(b,c,d){function e(b){b.target===b.currentTarget&&(a(b.target).off(c,e),f++,f===g&&(h._removeTransitionReference(i),d.call(h)))}var f=0,g=b.length,h=this,i={$element:b,handler:e};b.on(c,e),this._transitions.push(i)},E.prototype._whenAnimationsDone=function(b){a.when.apply(null,this._animations).always(a.proxy(function(){this._animations.length=0,this._isMovementCanceled||b.call(this)},this))},E.prototype.shuffle=function(a,b){this.enabled&&(a||(a=v),this._filter(a),this._updateItemCount(),this._shrink(),this.sort(b))},E.prototype.sort=function(a){if(this.enabled){this._resetCols();var b=a||this.lastSort,c=this._getFilteredItems().sorted(b);this._layout(c),this.lastSort=b}},E.prototype.update=function(a){this.enabled&&(a||this._setColumns(),this.sort())},E.prototype.layout=function(){this.update(!0)},E.prototype.appended=function(a,b,c){this._addItems(a,b===!0,c!==!1)},E.prototype.disable=function(){this.enabled=!1},E.prototype.enable=function(a){this.enabled=!0,a!==!1&&this.update()},E.prototype.remove=function(b){function c(){b.remove(),this.$items=this._getItems(),this._updateItemCount(),this._fire(E.EventType.REMOVED,[b,this]),b=null}b.length&&b.jquery&&(this._toggleFilterClasses(a(),b),this._shrink(b),this.sort(),this.$el.one(E.EventType.LAYOUT+"."+u,a.proxy(c,this)))},E.prototype.destroy=function(){D.off("."+this.unique),this.$el.removeClass(u).removeAttr("style").removeData(u),this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([E.ClassName.CONCEALED,E.ClassName.FILTERED,E.ClassName.SHUFFLE_ITEM].join(" ")),this.$items=null,this.$el=null,this.sizer=null,this.element=null,this._transitions=null,this.destroyed=!0},a.fn.shuffle=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data(u);e?"string"==typeof b&&e[b]&&e[b].apply(e,c):(e=new E(this,b),d.data(u,e))})},a.fn.sorted=function(b){var d=a.extend({},a.fn.sorted.defaults,b),e=this.get(),f=!1;return e.length?d.randomize?k(e):(a.isFunction(d.by)&&e.sort(function(b,e){if(f)return 0;var g=d.by(a(b)),h=d.by(a(e));return g===c&&h===c?(f=!0,0):h>g||"sortFirst"===g||"sortLast"===h?-1:g>h||"sortLast"===g||"sortFirst"===h?1:0}),f?this.get():(d.reverse&&e.reverse(),e)):[]},a.fn.sorted.defaults={reverse:!1,by:null,randomize:!1},E});
/**
 * bxSlider v4.2.1d
 * Copyright 2013-2017 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&k(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),"none"===s.settings.preloadImages?e=null:("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&b(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),null===e?g():c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;if(0===n)return void i();e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){(this.complete||""==this.src)&&t(this).trigger("load")})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).on("resize",U),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&L(),s.settings.ticker&&O(),s.settings.pager&&z(s.settings.startSlide),s.settings.controls&&q(),s.settings.touchEnabled&&!s.settings.ticker&&X(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(B)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},h=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)||1):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0){if(!s.settings.infiniteLoop){for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();return i}t=Math.ceil(s.children.length/x())}else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(e=s.children.last(),t=e.position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),A())}):A()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),F())}):(S(r.resetValue,"reset",0),F()))):(a={},a[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){A()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),F()}))},w=function(){for(var e="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(e)},b=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),w()),s.pagerEl.on("click touchend","a",I)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.on("click touchend",P),s.controls.prev.on("click touchend",E),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),D(s.settings.autoStart?"stop":"start")},k=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},P=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},I=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),i=t(e.currentTarget),void 0!==i.attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")))!==s.active.index&&o.goToSlide(n))},z=function(e){var i=s.children.length;if("short"===s.settings.pagerType)return s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i);s.pagerEl.find("a").removeClass("active"),s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")})},A=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},D=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},q=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){o.startAuto()},W=function(){o.stopAuto()},L=function(){s.settings.autoDelay>0?setTimeout(o.startAuto,s.settings.autoDelay):(o.startAuto(),t(window).focus(H).blur(W)),s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},O=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),F(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),F(d)})),F()},F=function(t){var e,i,n,r=t||s.settings.speed,a={left:0,top:0},l={left:0,top:0};"next"===s.settings.autoDirection?a=o.find(".bx-clone").first().position():l=s.children.first().position(),e="horizontal"===s.settings.mode?-a.left:-a.top,i="horizontal"===s.settings.mode?-l.left:-l.top,n={resetValue:i},S(e,"ticker",r,n)},N=function(e){var i=t(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset();return n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},B=function(t){var e=document.activeElement.tagName.toLowerCase();if(null==new RegExp(e,["i"]).exec("input|textarea")&&N(o)){if(39===t.keyCode)return P(t),!1;if(37===t.keyCode)return E(t),!1}},X=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.on("touchstart MSPointerDown pointerdown",Y),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},Y=function(t){if("touchstart"===t.type||0===t.button)if(t.preventDefault(),s.controls.el.addClass("disabled"),s.working)s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n="function"==typeof PointerEvent;if(n&&void 0===e.pointerId)return;s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.originalClickTarget=e.originalTarget||e.target,s.originalClickButton=e.button,s.originalClickButtons=e.buttons,s.originalEventType=e.type,s.hasMove=!1,s.viewport.on("touchmove MSPointerMove pointermove",R),s.viewport.on("touchend MSPointerUp pointerup",Z),s.viewport.on("MSPointerCancel pointercancel",V)}},V=function(t){t.preventDefault(),S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.off("MSPointerCancel pointercancel",V),s.viewport.off("touchmove MSPointerMove pointermove",R),s.viewport.off("touchend MSPointerUp pointerup",Z),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},R=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;s.hasMove=!0,3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"touchmove"!==t.type&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},Z=function(e){e.preventDefault(),s.viewport.off("touchmove MSPointerMove pointermove",R),s.controls.el.removeClass("disabled");var i=e.originalEvent,n=void 0!==i.changedTouches?i.changedTouches:[i],r=0,a=0;s.touch.end.x=n[0].pageX,s.touch.end.y=n[0].pageY,"fade"===s.settings.mode?(a=Math.abs(s.touch.start.x-s.touch.end.x))>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):("horizontal"===s.settings.mode?(a=s.touch.end.x-s.touch.start.x,r=s.touch.originalPos.left):(a=s.touch.end.y-s.touch.start.y,r=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&a>0||s.active.last&&a<0)?S(r,"reset",200):Math.abs(a)>=s.settings.swipeThreshold?(a<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(r,"reset",200)),s.viewport.off("touchend MSPointerUp pointerup",Z),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId),!1!==s.hasMove||0!==s.originalClickButton&&"touchstart"!==s.originalEventType||t(s.originalClickTarget).trigger({type:"click",button:s.originalClickButton,buttons:s.originalClickButtons})},U=function(e){if(s.initialized)if(s.working)window.setTimeout(U,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},j=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))},Q=function(t){return t<0?s.settings.infiniteLoop?f()-1:s.active.index:t>=f()?s.settings.infiniteLoop?0:s.active.index:t};return o.goToSlide=function(e,i){var n,r,a,l,d=!0,c=0,g={left:0,top:0},u=null;if(s.oldIndex=s.active.index,s.active.index=Q(e),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,void 0!==(d=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index))&&!d)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&z(s.active.index),s.settings.controls&&q(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),A()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(u=s.children.eq(s.children.length-1),g=u.position(),c=s.viewport.width()-u.outerWidth()):(n=s.children.length-s.settings.minSlides,g=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(r),g=u.position()):"next"===i&&0===s.active.index?(g=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),g=s.children.eq(l).position()),void 0!==g&&(a="horizontal"===s.settings.mode?-(g.left-c):-g.top,S(a,"slide",s.settings.speed)),s.working=!1),s.settings.ariaHidden&&j(s.active.index*x())}},o.goToNextSlide=function(){if((s.settings.infiniteLoop||!s.active.last)&&!0!==s.working){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if((s.settings.infiniteLoop||0!==s.active.index)&&!0!==s.working){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.onAutoChange.call(o,!0),s.settings.autoControls&&!0!==t&&D("stop"))},o.stopAuto=function(t){s.autoPaused&&(s.autoPaused=!1),s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.onAutoChange.call(o,!1),s.settings.autoControls&&!0!==t&&D("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(w(),z(s.active.index)),s.settings.ariaHidden&&j(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).off("resize",U),s.settings.keyboardEnabled&&t(document).off("keydown",B),t(this).removeData("bxSlider"),t(window).off("blur",W).off("focus",H))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);
/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);
(function(e){e.fn.ddslick=function(l){if(c[l]){return c[l].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof l==="object"||!l){return c.init.apply(this,arguments)}else{e.error("Method "+l+" does not exists.")}}};var c={},d={data:[],keepJSONItemsOnTop:false,width:260,height:null,background:"#eee",selectText:"",defaultSelectedIndex:null,truncateDescription:true,imagePosition:"left",showSelectedHTML:true,clickOffToClose:true,embedCSS:true,onSelected:function(){}},i='<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>',a='<ul class="dd-options"></ul>',b='<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>';c.init=function(l){var l=e.extend({},d,l);if(e("#css-ddslick").length<=0&&l.embedCSS){e(b).appendTo("head")}return this.each(function(){var p=e(this),q=p.data("ddslick");if(!q){var n=[],o=l.data;p.find("option").each(function(){var w=e(this),v=w.data();n.push({text:e.trim(w.text()),value:w.val(),selected:w.is(":selected"),description:v.description,imageSrc:v.imagesrc})});if(l.keepJSONItemsOnTop){e.merge(l.data,n)}else{l.data=e.merge(n,l.data)}var m=p,s=e('<div id="'+p.attr("id")+'"></div>');p.replaceWith(s);p=s;p.addClass("dd-container").append(i).append(a);var n=p.find(".dd-select"),u=p.find(".dd-options");u.css({width:l.width});n.css({width:l.width,background:l.background});p.css({width:l.width});if(l.height!=null){u.css({height:l.height,overflow:"auto"})}e.each(l.data,function(v,w){if(w.selected){l.defaultSelectedIndex=v}u.append('<li><a class="dd-option">'+(w.value?' <input class="dd-option-value" type="hidden" value="'+w.value+'" />':"")+(w.imageSrc?' <img class="dd-option-image'+(l.imagePosition=="right"?" dd-image-right":"")+'" src="'+w.imageSrc+'" />':"")+(w.text?' <label class="dd-option-text">'+w.text+"</label>":"")+(w.description?' <small class="dd-option-description dd-desc">'+w.description+"</small>":"")+"</a></li>")});var t={settings:l,original:m,selectedIndex:-1,selectedItem:null,selectedData:null};p.data("ddslick",t);if(l.selectText.length>0&&l.defaultSelectedIndex==null){p.find(".dd-selected").html(l.selectText)}else{var r=(l.defaultSelectedIndex!=null&&l.defaultSelectedIndex>=0&&l.defaultSelectedIndex<l.data.length)?l.defaultSelectedIndex:0;j(p,r)}p.find(".dd-select").on("click.ddslick",function(){f(p)});p.find(".dd-option").on("click.ddslick",function(){j(p,e(this).closest("li").index())});if(l.clickOffToClose){u.addClass("dd-click-off-close");p.on("click.ddslick",function(v){v.stopPropagation()});e("body").on("click",function(){e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")})}}})};c.select=function(l){return this.each(function(){if(l.index!==undefined){j(e(this),l.index)}})};c.open=function(){return this.each(function(){var m=e(this),l=m.data("ddslick");if(l){f(m)}})};c.close=function(){return this.each(function(){var m=e(this),l=m.data("ddslick");if(l){k(m)}})};c.destroy=function(){return this.each(function(){var n=e(this),m=n.data("ddslick");if(m){var l=m.original;n.removeData("ddslick").unbind(".ddslick").replaceWith(l)}})};function j(q,s){var u=q.data("ddslick");var r=q.find(".dd-selected"),n=r.siblings(".dd-selected-value"),v=q.find(".dd-options"),l=r.siblings(".dd-pointer"),p=q.find(".dd-option").eq(s),m=p.closest("li"),o=u.settings,t=u.settings.data[s];q.find(".dd-option").removeClass("dd-option-selected");p.addClass("dd-option-selected");u.selectedIndex=s;u.selectedItem=m;u.selectedData=t;if(o.showSelectedHTML){r.html((t.imageSrc?'<img class="dd-selected-image'+(o.imagePosition=="right"?" dd-image-right":"")+'" src="'+t.imageSrc+'" />':"")+(t.text?'<label class="dd-selected-text">'+t.text+"</label>":"")+(t.description?'<small class="dd-selected-description dd-desc'+(o.truncateDescription?" dd-selected-description-truncated":"")+'" >'+t.description+"</small>":""))}else{r.html(t.text)}n.val(t.value);u.original.val(t.value);q.data("ddslick",u);k(q);g(q);if(typeof o.onSelected=="function"){o.onSelected.call(this,u)}}function f(p){var o=p.find(".dd-select"),m=o.siblings(".dd-options"),l=o.find(".dd-pointer"),n=m.is(":visible");e(".dd-click-off-close").not(m).slideUp(50);e(".dd-pointer").removeClass("dd-pointer-up");if(n){m.slideUp("fast");l.removeClass("dd-pointer-up")}else{m.slideDown("fast");l.addClass("dd-pointer-up")}h(p)}function k(l){l.find(".dd-options").slideUp(50);l.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")}function g(o){var n=o.find(".dd-select").css("height");var m=o.find(".dd-selected-description");var l=o.find(".dd-selected-image");if(m.length<=0&&l.length>0){o.find(".dd-selected-text").css("lineHeight",n)}}function h(l){l.find(".dd-option").each(function(){var p=e(this);var n=p.css("height");var o=p.find(".dd-option-description");var m=l.find(".dd-option-image");if(o.length<=0&&m.length>0){p.find(".dd-option-text").css("lineHeight",n)}})}})(jQuery);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
/* @license 
 * jQuery.print, version 1.3.3
 *  (c) Sathvik Ponangi, Doers' Guild
 * Licence: CC-By (http://creativecommons.org/licenses/by/3.0/)
 *--------------------------------------------------------------------------*/
(function ($) {
    "use strict";
    // A nice closure for our definitions
    function getjQueryObject(string) {
        // Make string a vaild jQuery thing
        var jqObj = $("");
        try {
            jqObj = $(string)
                .clone();
        } catch (e) {
            jqObj = $("<span />")
                .html(string);
        }
        return jqObj;
    }

    function printFrame(frameWindow, timeout) {
        // Print the selected window/iframe
        var def = $.Deferred();
        try {
            setTimeout(function () {
                // Fix for IE : Allow it to render the iframe
                frameWindow.focus();
                try {
                    // Fix for IE11 - printng the whole page instead of the iframe content
                    if (!frameWindow.document.execCommand('print', false, null)) {
                        // document.execCommand returns false if it failed -http://stackoverflow.com/a/21336448/937891
                        frameWindow.print();
                    }
                } catch (e) {
                    frameWindow.print();
                }
                frameWindow.close();
                def.resolve();
            }, timeout);
        } catch (err) {
            def.reject(err);
        }
        return def;
    }

    function printContentInNewWindow(content, timeout) {
        // Open a new window and print selected content
        var w = window.open();
        w.document.write(content);
        w.document.close();
        return printFrame(w, timeout);
    }

    function isNode(o) {
        /* http://stackoverflow.com/a/384380/937891 */
        return !!(typeof Node === "object" ? o instanceof Node : o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string");
    }
    $.print = $.fn.print = function () {
        // Print a given set of elements
        var options, $this, self = this;
        // console.log("Printing", this, arguments);
        if (self instanceof $) {
            // Get the node if it is a jQuery object
            self = self.get(0);
        }
        if (isNode(self)) {
            // If `this` is a HTML element, i.e. for
            // $(selector).print()
            $this = $(self);
            if (arguments.length > 0) {
                options = arguments[0];
            }
        } else {
            if (arguments.length > 0) {
                // $.print(selector,options)
                $this = $(arguments[0]);
                if (isNode($this[0])) {
                    if (arguments.length > 1) {
                        options = arguments[1];
                    }
                } else {
                    // $.print(options)
                    options = arguments[0];
                    $this = $("html");
                }
            } else {
                // $.print()
                $this = $("html");
            }
        }
        // Default options
        var defaults = {
            globalStyles: true,
            mediaPrint: false,
            stylesheet: null,
            noPrintSelector: ".no-print",
            iframe: true,
            append: null,
            prepend: null,
            manuallyCopyFormValues: true,
            deferred: $.Deferred(),
            timeout: 250
        };
        // Merge with user-options
        options = $.extend({}, defaults, (options || {}));
        var $styles = $("");
        if (options.globalStyles) {
            // Apply the stlyes from the current sheet to the printed page
            $styles = $("style, link, meta, title");
        } else if (options.mediaPrint) {
            // Apply the media-print stylesheet
            $styles = $("link[media=print]");
        }
        if (options.stylesheet) {
            // Add a custom stylesheet if given
            $styles = $.merge($styles, $('<link rel="stylesheet" href="' + options.stylesheet + '">'));
        }
        // Create a copy of the element to print
        var copy = $this.clone();
        // Wrap it in a span to get the HTML markup string
        copy = $("<span/>")
            .append(copy);
        // Remove unwanted elements
        copy.find(options.noPrintSelector)
            .remove();
        // Add in the styles
        copy.append($styles.clone());
        // Appedned content
        copy.append(getjQueryObject(options.append));
        // Prepended content
        copy.prepend(getjQueryObject(options.prepend));
        if (options.manuallyCopyFormValues) {
            // Manually copy form values into the HTML for printing user-modified input fields
            // http://stackoverflow.com/a/26707753
            copy.find("input")
                .each(function () {
                    var $field = $(this);
                    if ($field.is("[type='radio']") || $field.is("[type='checkbox']")) {
                        if ($field.prop("checked")) {
                            $field.attr("checked", "checked");
                        }
                    } else {
                        $field.attr("value", $field.val());
                    }
                });
            copy.find("select").each(function () {
                var $field = $(this);
                $field.find(":selected").attr("selected", "selected");
            });
            copy.find("textarea").each(function () {
                // Fix for https://github.com/DoersGuild/jQuery.print/issues/18#issuecomment-96451589
                var $field = $(this);
                $field.text($field.val());
            });
        }
        // Get the HTML markup string
        var content = copy.html();
        // Notify with generated markup & cloned elements - useful for logging, etc
        try {
            options.deferred.notify('generated_markup', content, copy);
        } catch (err) {
            console.warn('Error notifying deferred', err);
        }
        // Destroy the copy
        copy.remove();
        if (options.iframe) {
            // Use an iframe for printing
            try {
                var $iframe = $(options.iframe + "");
                var iframeCount = $iframe.length;
                if (iframeCount === 0) {
                    // Create a new iFrame if none is given
                    $iframe = $('<iframe height="0" width="0" border="0" wmode="Opaque"/>')
                        .prependTo('body')
                        .css({
                            "position": "absolute",
                            "top": -999,
                            "left": -999
                        });
                }
                var w, wdoc;
                w = $iframe.get(0);
                w = w.contentWindow || w.contentDocument || w;
                wdoc = w.document || w.contentDocument || w;
                wdoc.open();
                wdoc.write(content);
                wdoc.close();
                printFrame(w, options.timeout)
                    .done(function () {
                        // Success
                        setTimeout(function () {
                            // Wait for IE
                            if (iframeCount === 0) {
                                // Destroy the iframe if created here
                                $iframe.remove();
                            }
                        }, 100);
                    })
                    .fail(function (err) {
                        // Use the pop-up method if iframe fails for some reason
                        console.error("Failed to print from iframe", err);
                        printContentInNewWindow(content, options.timeout);
                    })
                    .always(function () {
                        try {
                            options.deferred.resolve();
                        } catch (err) {
                            console.warn('Error notifying deferred', err);
                        }
                    });
            } catch (e) {
                // Use the pop-up method if iframe fails for some reason
                console.error("Failed to print from iframe", e.stack, e.message);
                printContentInNewWindow(content, options.timeout)
                    .always(function () {
                        try {
                            options.deferred.resolve();
                        } catch (err) {
                            console.warn('Error notifying deferred', err);
                        }
                    });
            }
        } else {
            // Use a new window for printing
            printContentInNewWindow(content, options.timeout)
                .always(function () {
                    try {
                        options.deferred.resolve();
                    } catch (err) {
                        console.warn('Error notifying deferred', err);
                    }
                });
        }
        return this;
    };
})(jQuery);

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(this, function (jQuery) {

/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.44
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
/**
 */
(function ($, undefined) {

  var disableFormSubmit = function () {
      return false;
    },
    HaltManager = {
      numHalted: 0,
      haltValidation: function($form) {
        this.numHalted++;
        $.formUtils.haltValidation = true;
        $form
          .unbind('submit', disableFormSubmit)
          .bind('submit', disableFormSubmit)
          .find('*[type="submit"]')
            .addClass('disabled')
            .attr('disabled', 'disabled');
      },
      unHaltValidation: function($form) {
        this.numHalted--;
        if (this.numHalted === 0) {
          $.formUtils.haltValidation = false;
          $form
            .unbind('submit', disableFormSubmit)
            .find('*[type="submit"]')
              .removeClass('disabled')
              .removeAttr('disabled', 'disabled');
        }
      }
    };

  function AsyncValidation($form, $input) {
    this.$form = $form;
    this.$input = $input;
    this.reset();
  }

  AsyncValidation.prototype.reset = function() {
    this.haltedFormValidation = false;
    this.hasRun = false;
    this.isRunning = false;
    this.result = undefined;
  };

  AsyncValidation.prototype.run = function(eventContext, callback) {
    if (eventContext === 'keyup') {
      return null;
    } else if (this.isRunning) {
      if (!this.haltedFormValidation && eventContext === 'submit') {
        HaltManager.haltValidation();
        this.haltedFormValidation = true;
      }
      return null; // Waiting for result
    } else if(this.hasRun) {
      this.$input.one('keyup paste', this.reset.bind(this));
      return this.result;
    } else {
      if (eventContext === 'submit') {
        HaltManager.haltValidation(this.$form);
        this.haltedFormValidation = true;
      }
      this.isRunning = true;
      this.$input
        .attr('disabled', 'disabled')
        .addClass('async-validation');
      this.$form.addClass('async-validation');

      callback(function(result) {
        this.done(result);
      }.bind(this));

      return null;
    }
  };

  AsyncValidation.prototype.done = function(result) {
    this.result = result;
    this.hasRun = true;
    this.isRunning = false;
    this.$input
      .removeAttr('disabled')
      .removeClass('async-validation');
    this.$form.removeClass('async-validation');
    if (this.haltedFormValidation) {
      HaltManager.unHaltValidation(this.$form);
      this.$form.trigger('submit');
    } else {
      this.$input.trigger('validation.revalidate');
    }
  };

  $.formUtils = $.extend($.formUtils || {}, {
    asyncValidation: function(validatorName, $input, $form) {
      // Return async validator attached to this input element
      // or create a new async validator and attach it to the input
      var asyncValidation,
        input = $input.get(0);

      if (!input.asyncValidators) {
        input.asyncValidators = {};
      }

      if (input.asyncValidators[validatorName]) {
        asyncValidation = input.asyncValidators[validatorName];
      } else {
        asyncValidation = new AsyncValidation($form, $input);
        input.asyncValidators[validatorName] = asyncValidation;
      }

      return asyncValidation;
    }
  });

})(jQuery);

/**
 * Deprecated functions and attributes
 * @todo: Remove in release of 3.0
 */
(function ($, undefined) {

  'use strict';

  /**
   * @deprecated
   * @param language
   * @param conf
   */
  $.fn.validateForm = function (language, conf) {
    $.formUtils.warn('Use of deprecated function $.validateForm, use $.isValid instead');
    return this.isValid(language, conf, true);
  };

  $(window)
    .on('formValidationPluginInit', function(evt, config) {
      convertDeprecatedLangCodeToISO6391(config);
      addSupportForCustomErrorMessageCallback(config);
      addSupportForElementReferenceInPositionParam(config);
    })
    .on('validatorsLoaded formValidationSetup', function(evt, $form) {
      if( !$form ) {
        $form = $('form');
      }
      addSupportForValidationDependingOnCheckedInput($form);
    });


  function addSupportForCustomErrorMessageCallback(config) {
    if (config &&
        config.errorMessagePosition === 'custom' &&
        typeof config.errorMessageCustom === 'function') {

      $.formUtils.warn('Use of deprecated function errorMessageCustom, use config.submitErrorMessageCallback instead');

      config.submitErrorMessageCallback = function($form, errorMessages) {
        config.errorMessageCustom(
            $form,
            config.language.errorTitle,
            errorMessages,
            config
        );
      };
    }
  }

  function addSupportForElementReferenceInPositionParam(config) {
    if (config.errorMessagePosition && typeof config.errorMessagePosition === 'object') {
      $.formUtils.warn('Deprecated use of config parameter errorMessagePosition, use config.submitErrorMessageCallback instead');
      var $errorMessageContainer = config.errorMessagePosition;
      config.errorMessagePosition = 'top';
      config.submitErrorMessageCallback = function() {
        return $errorMessageContainer;
      };
    }
  }

  function addSupportForValidationDependingOnCheckedInput($form) {
    var $inputsDependingOnCheckedInputs = $form.find('[data-validation-if-checked]');
    if ($inputsDependingOnCheckedInputs.length) {
      $.formUtils.warn(
        'Detected use of attribute "data-validation-if-checked" which is '+
        'deprecated. Use "data-validation-depends-on" provided by module "logic"'
      );
    }

    $inputsDependingOnCheckedInputs
      .on('beforeValidation', function() {

        var $elem = $(this),
          nameOfDependingInput = $elem.valAttr('if-checked');

        // Set the boolean telling us that the validation depends
        // on another input being checked
        var $dependingInput = $('input[name="' + nameOfDependingInput + '"]', $form),
          dependingInputIsChecked = $dependingInput.is(':checked'),
          valueOfDependingInput = ($.formUtils.getValue($dependingInput) || '').toString(),
          requiredValueOfDependingInput = $elem.valAttr('if-checked-value');

        if (!dependingInputIsChecked || !(
              !requiredValueOfDependingInput ||
              requiredValueOfDependingInput === valueOfDependingInput
          )) {
          $elem.valAttr('skipped', true);
        }

      });
    }

    function convertDeprecatedLangCodeToISO6391(config) {
      var deprecatedLangCodes = {
        se: 'sv',
        cz: 'cs',
        dk: 'da'
      };

      if (config.lang in deprecatedLangCodes) {
        var newLangCode = deprecatedLangCodes[config.lang];
        $.formUtils.warn(
          'Deprecated use of lang code "'+config.lang+'" use "'+newLangCode+'" instead'
        );
        config.lang = newLangCode;
      }
    }

})(jQuery);

/**
 * Utility methods used for displaying error messages (attached to $.formUtils)
 */
(function ($) {

  'use strict';

  var dialogs = {

    resolveErrorMessage: function($elem, validator, validatorName, conf, language) {
      var errorMsgAttr = conf.validationErrorMsgAttribute + '-' + validatorName.replace('validate_', ''),
        validationErrorMsg = $elem.attr(errorMsgAttr);

      if (!validationErrorMsg) {
        validationErrorMsg = $elem.attr(conf.validationErrorMsgAttribute);
        if (!validationErrorMsg) {
          if (typeof validator.errorMessageKey !== 'function') {
            validationErrorMsg = language[validator.errorMessageKey];
          }
          else {
            validationErrorMsg = language[validator.errorMessageKey(conf)];
          }
          if (!validationErrorMsg) {
            validationErrorMsg = validator.errorMessage;
          }
        }
      }
      return validationErrorMsg;
    },
    getParentContainer: function ($elem) {
      if ($elem.valAttr('error-msg-container')) {
        return $($elem.valAttr('error-msg-container'));
      } else {
        var $parent = $elem.parent();
        if (!$parent.hasClass('form-group') && !$parent.closest('form').hasClass('form-horizontal')) {
          var $formGroup = $parent.closest('.form-group');
          if ($formGroup.length) {
            return $formGroup.eq(0);
          }
        }
        return $parent;
      }
    },
    applyInputErrorStyling: function ($input, conf) {
      $input
        .addClass(conf.errorElementClass)
        .removeClass('valid');

      this.getParentContainer($input)
        .addClass(conf.inputParentClassOnError)
        .removeClass(conf.inputParentClassOnSuccess);

      if (conf.borderColorOnError !== '') {
        $input.css('border-color', conf.borderColorOnError);
      }
    },
    applyInputSuccessStyling: function($input, conf) {
      $input.addClass('valid');
      this.getParentContainer($input)
        .addClass(conf.inputParentClassOnSuccess);
    },
    removeInputStylingAndMessage: function($input, conf) {

      // Reset input css
      $input
        .removeClass('valid')
        .removeClass(conf.errorElementClass)
        .css('border-color', '');

      var $parentContainer = dialogs.getParentContainer($input);

      // Reset parent css
      $parentContainer
        .removeClass(conf.inputParentClassOnError)
        .removeClass(conf.inputParentClassOnSuccess);

      // Remove possible error message
      if (typeof conf.inlineErrorMessageCallback === 'function') {
        var $errorMessage = conf.inlineErrorMessageCallback($input, false, conf);
        if ($errorMessage) {
          $errorMessage.html('');
        }
      } else {
        $parentContainer
          .find('.' + conf.errorMessageClass)
          .remove();
      }

    },
    removeAllMessagesAndStyling: function($form, conf) {

      // Remove error messages in top of form
      if (typeof conf.submitErrorMessageCallback === 'function') {
        var $errorMessagesInTopOfForm = conf.submitErrorMessageCallback($form, false, conf);
        if ($errorMessagesInTopOfForm) {
          $errorMessagesInTopOfForm.html('');
        }
      } else {
        $form.find('.' + conf.errorMessageClass + '.alert').remove();
      }

      // Remove input css/messages
      $form.find('.' + conf.errorElementClass + ',.valid').each(function() {
        dialogs.removeInputStylingAndMessage($(this), conf);
      });
    },
    setInlineMessage: function ($input, errorMsg, conf) {

      this.applyInputErrorStyling($input, conf);

      var custom = document.getElementById($input.attr('name') + '_err_msg'),
        $messageContainer = false,
        setErrorMessage = function ($elem) {
          $.formUtils.$win.trigger('validationErrorDisplay', [$input, $elem]);
          $elem.html(errorMsg);
        },
        addErrorToMessageContainer = function() {
          var $found = false;
          $messageContainer.find('.' + conf.errorMessageClass).each(function () {
            if (this.inputReferer === $input[0]) {
              $found = $(this);
              return false;
            }
          });
          if ($found) {
            if (!errorMsg) {
              $found.remove();
            } else {
              setErrorMessage($found);
            }
          } else if(errorMsg !== '') {
            $message = $('<div class="' + conf.errorMessageClass + ' alert"></div>');
            setErrorMessage($message);
            $message[0].inputReferer = $input[0];
            $messageContainer.prepend($message);
          }
        },
        $message;

      if (custom) {
        // Todo: remove in 3.0
        $.formUtils.warn('Using deprecated element reference ' + custom.id);
        $messageContainer = $(custom);
        addErrorToMessageContainer();
      } else if (typeof conf.inlineErrorMessageCallback === 'function') {
        $messageContainer = conf.inlineErrorMessageCallback($input, errorMsg, conf);
        if (!$messageContainer) {
          // Error display taken care of by inlineErrorMessageCallback
          return;
        }
        addErrorToMessageContainer();
      } else {
        var $parent = this.getParentContainer($input);
        $message = $parent.find('.' + conf.errorMessageClass + '.help-block');
        if ($message.length === 0) {
          $message = $('<span></span>').addClass('help-block').addClass(conf.errorMessageClass);
          $message.appendTo($parent);
        }
        setErrorMessage($message);
      }
    },
    setMessageInTopOfForm: function ($form, errorMessages, conf, lang) {
      var view = '<div class="{errorMessageClass} alert alert-danger">'+
                    '<strong>{errorTitle}</strong>'+
                    '<ul>{fields}</ul>'+
                '</div>',
          $container = false;

      if (typeof conf.submitErrorMessageCallback === 'function') {
        $container = conf.submitErrorMessageCallback($form, errorMessages, conf);
        if (!$container) {
          // message display taken care of by callback
          return;
        }
      }

      var viewParams = {
            errorTitle: lang.errorTitle,
            fields: '',
            errorMessageClass: conf.errorMessageClass
          };

      $.each(errorMessages, function (i, msg) {
        viewParams.fields += '<li>'+msg+'</li>';
      });

      $.each(viewParams, function(param, value) {
        view = view.replace('{'+param+'}', value);
      });

      if ($container) {
        $container.html(view);
      } else {
        $form.children().eq(0).before($(view));
      }
    }
  };

  $.formUtils = $.extend($.formUtils || {}, {
    dialogs: dialogs
  });

})(jQuery);

/**
 * File declaring all methods if this plugin which is applied to $.fn.
 */
(function($, window, undefined) {

  'use strict';

  var _helpers = 0;


  /**
   * Assigns validateInputOnBlur function to elements blur event
   *
   * @param {Object} language Optional, will override $.formUtils.LANG
   * @param {Object} conf Optional, will override the default settings
   * @return {jQuery}
   */
  $.fn.validateOnBlur = function (language, conf) {
    var $form = this,
        $elems = this.find('*[data-validation]');

    $elems.each(function(){
      var $this = $(this);
      if ($this.is('[type=radio]')){
        var $additionals = $form.find('[type=radio][name="' + $this.attr('name') + '"]');
        $additionals.bind('blur.validation', function(){
          $this.validateInputOnBlur(language, conf, true, 'blur');
        });
        if (conf.validateCheckboxRadioOnClick) {
          $additionals.bind('click.validation', function () {
            $this.validateInputOnBlur(language, conf, true, 'click');
          });
        }
      }
    });

    $elems.bind('blur.validation', function () {
      $(this).validateInputOnBlur(language, conf, true, 'blur');
    });

    if (conf.validateCheckboxRadioOnClick) {
      // bind click event to validate on click for radio & checkboxes for nice UX
      this.find('input[type=checkbox][data-validation],input[type=radio][data-validation]')
        .bind('click.validation', function () {
          $(this).validateInputOnBlur(language, conf, true, 'click');
        });
    }

    return this;
  };

  /*
   * Assigns validateInputOnBlur function to elements custom event
   * @param {Object} language Optional, will override $.formUtils.LANG
   * @param {Object} settings Optional, will override the default settings
   * * @return {jQuery}
   */
  $.fn.validateOnEvent = function (language, config) {
    var $elements = this[0].nodeName === 'FORM' ? this.find('*[data-validation-event]') : this;
    $elements
      .each(function () {
        var $el = $(this),
          etype = $el.valAttr('event');
        if (etype) {
          $el
            .unbind(etype + '.validation')
            .bind(etype + '.validation', function (evt) {
              if( (evt || {}).keyCode !== 9 ) {
                $(this).validateInputOnBlur(language, config, true, etype);
              }
            });
        }
      });
    return this;
  };

  /**
   * fade in help message when input gains focus
   * fade out when input loses focus
   * <input data-help="The info that I want to display for the user when input is focused" ... />
   *
   * @param {String} attrName - Optional, default is data-help
   * @return {jQuery}
   */
  $.fn.showHelpOnFocus = function (attrName) {
    if (!attrName) {
      attrName = 'data-validation-help';
    }

    // Add help text listeners
    this.find('textarea,input').each(function () {
      var $elem = $(this),
        className = 'jquery_form_help_' + (++_helpers),
        help = $elem.attr(attrName);

      // Reset
      $elem
        .removeClass('has-help-text')
        .unbind('focus.help')
        .unbind('blur.help');

      if (help) {
        $elem
          .addClass('has-help-txt')
          .bind('focus.help', function () {
            var $help = $elem.parent().find('.' + className);
            if ($help.length === 0) {
              $help = $('<span />')
                .addClass(className)
                .addClass('help')
                .addClass('help-block') // twitter bs
                .text(help)
                .hide();

              $elem.after($help);
            }
            $help.fadeIn();
          })
          .bind('blur.help', function () {
            $(this)
              .parent()
              .find('.' + className)
              .fadeOut('slow');
          });
      }
    });

    return this;
  };

  /**
   * @param {Function} cb
   * @param {Object} [conf]
   * @param {Object} [lang]
   */
  $.fn.validate = function(cb, conf, lang) {
    var language = $.extend({}, $.formUtils.LANG, lang || {});
    this.each(function() {
      var $elem = $(this),
        formDefaultConfig = $elem.closest('form').get(0).validationConfig || {};

      $elem.one('validation', function(evt, isValid) {
        if ( typeof cb === 'function' ) {
          cb(isValid, this, evt);
        }
      });

      $elem.validateInputOnBlur(
        language,
        $.extend({}, formDefaultConfig, conf || {}),
        true
      );
    });
  };

  /**
   * Tells whether or not validation of this input will have to postpone the form submit ()
   * @returns {Boolean}
   */
  $.fn.willPostponeValidation = function() {
    return (this.valAttr('suggestion-nr') ||
      this.valAttr('postpone') ||
      this.hasClass('hasDatepicker')) &&
      !window.postponedValidation;
  };

  /**
   * Validate single input when it loses focus
   * shows error message in a span element
   * that is appended to the parent element
   *
   * @param {Object} [language] Optional, will override $.formUtils.LANG
   * @param {Object} [conf] Optional, will override the default settings
   * @param {Boolean} attachKeyupEvent Optional
   * @param {String} eventContext
   * @return {jQuery}
   */
  $.fn.validateInputOnBlur = function (language, conf, attachKeyupEvent, eventContext) {

    $.formUtils.eventType = eventContext;

    if ( this.willPostponeValidation() ) {
      // This validation has to be postponed
      var _self = this,
        postponeTime = this.valAttr('postpone') || 200;

      window.postponedValidation = function () {
        _self.validateInputOnBlur(language, conf, attachKeyupEvent, eventContext);
        window.postponedValidation = false;
      };

      setTimeout(function () {
        if (window.postponedValidation) {
          window.postponedValidation();
        }
      }, postponeTime);

      return this;
    }

    language = $.extend({}, $.formUtils.LANG, language || {});
    $.formUtils.dialogs.removeInputStylingAndMessage(this, conf);

    var $elem = this,
      $form = $elem.closest('form'),
      result = $.formUtils.validateInput(
        $elem,
        language,
        conf,
        $form,
        eventContext
      );

    var reValidate = function() {
      $elem.validateInputOnBlur(language, conf, false, 'blur.revalidated');
    };

    if (eventContext === 'blur') {
      $elem
        .unbind('validation.revalidate', reValidate)
        .one('validation.revalidate', reValidate);
    }

    if (attachKeyupEvent) {
      $elem.removeKeyUpValidation();
    }

    if (result.shouldChangeDisplay) {
      if (result.isValid) {
        $.formUtils.dialogs.applyInputSuccessStyling($elem, conf);
      } else {
        $.formUtils.dialogs.setInlineMessage($elem, result.errorMsg, conf);
      }
    }

    if (!result.isValid && attachKeyupEvent) {
      $elem.validateOnKeyUp(language, conf);
    }

    return this;
  };

  /**
   * Validate element on keyup-event
   */
  $.fn.validateOnKeyUp = function(language, conf) {
    this.each(function() {
      var $input = $(this);
      if (!$input.valAttr('has-keyup-event')) {
        $input
          .valAttr('has-keyup-event', 'true')
          .bind('keyup.validation', function (evt) {
            if( evt.keyCode !== 9 ) {
              $input.validateInputOnBlur(language, conf, false, 'keyup');
            }
          });
      }
    });
    return this;
  };

  /**
   * Remove validation on keyup
   */
  $.fn.removeKeyUpValidation = function() {
    this.each(function() {
      $(this)
        .valAttr('has-keyup-event', false)
        .unbind('keyup.validation');
    });
    return this;
  };

  /**
   * Short hand for fetching/adding/removing element attributes
   * prefixed with 'data-validation-'
   *
   * @param {String} name
   * @param {String|Boolean} [val]
   * @return {String|undefined|jQuery}
   * @protected
   */
  $.fn.valAttr = function (name, val) {
    if (val === undefined) {
      return this.attr('data-validation-' + name);
    } else if (val === false || val === null) {
      return this.removeAttr('data-validation-' + name);
    } else {
      name = ((name.length > 0) ? '-' + name : '');
      return this.attr('data-validation' + name, val);
    }
  };

  /**
   * Function that validates all inputs in active form
   *
   * @param {Object} [language]
   * @param {Object} [conf]
   * @param {Boolean} [displayError] Defaults to true
   */
  $.fn.isValid = function (language, conf, displayError) {

    if ($.formUtils.isLoadingModules) {
      var $self = this;
      setTimeout(function () {
        $self.isValid(language, conf, displayError);
      }, 200);
      return null;
    }

    conf = $.extend({}, $.formUtils.defaultConfig(), conf || {});
    language = $.extend({}, $.formUtils.LANG, language || {});
    displayError = displayError !== false;

    if ($.formUtils.errorDisplayPreventedWhenHalted) {
      // isValid() was called programmatically with argument displayError set
      // to false when the validation was halted by any of the validators
      delete $.formUtils.errorDisplayPreventedWhenHalted;
      displayError = false;
    }

    $.formUtils.isValidatingEntireForm = true;
    $.formUtils.haltValidation = false;

    /**
     * Adds message to error message stack if not already in the message stack
     *
     * @param {String} mess
     * @para {jQuery} $elem
     */
    var addErrorMessage = function (mess, $elem) {
        if ($.inArray(mess, errorMessages) < 0) {
          errorMessages.push(mess);
        }
        errorInputs.push($elem);
        $elem.attr('current-error', mess);
        if (displayError) {
          $.formUtils.dialogs.applyInputErrorStyling($elem, conf);
        }
      },

      /** Holds inputs (of type checkox or radio) already validated, to prevent recheck of mulitple checkboxes & radios */
      checkedInputs = [],

      /** Error messages for this validation */
      errorMessages = [],

      /** Input elements which value was not valid */
      errorInputs = [],

      /** Form instance */
      $form = this,

      /**
       * Tells whether or not to validate element with this name and of this type
       *
       * @param {String} name
       * @param {String} type
       * @return {Boolean}
       */
      ignoreInput = function (name, type) {
        if (type === 'submit' || type === 'button' || type === 'reset') {
          return true;
        }
        return $.inArray(name, conf.ignore || []) > -1;
      };

    // Reset style and remove error class
    if (displayError) {
      $.formUtils.dialogs.removeAllMessagesAndStyling($form, conf);
    }

    // Validate element values
    $form.find('input,textarea,select').filter(':not([type="submit"],[type="button"])').each(function () {
      var $elem = $(this),
        elementType = $elem.attr('type'),
        isCheckboxOrRadioBtn = elementType === 'radio' || elementType === 'checkbox',
        elementName = $elem.attr('name');

      if (!ignoreInput(elementName, elementType) && (!isCheckboxOrRadioBtn || $.inArray(elementName, checkedInputs) < 0)) {

        if (isCheckboxOrRadioBtn) {
          checkedInputs.push(elementName);
        }

        var result = $.formUtils.validateInput(
          $elem,
          language,
          conf,
          $form,
          'submit'
        );

        if (!result.isValid) {
          addErrorMessage(result.errorMsg, $elem);
        } else if (result.isValid && result.shouldChangeDisplay) {
          $elem.valAttr('current-error', false);
          $.formUtils.dialogs.applyInputSuccessStyling($elem, conf);
        }
      }

    });

    // Run validation callback
    if (typeof conf.onValidate === 'function') {
      var errors = conf.onValidate($form);
      if ($.isArray(errors)) {
        $.each(errors, function (i, err) {
          addErrorMessage(err.message, err.element);
        });
      }
      else if (errors && errors.element && errors.message) {
        addErrorMessage(errors.message, errors.element);
      }
    }

    // Reset form validation flag
    $.formUtils.isValidatingEntireForm = false;

    // Validation failed
    if (errorInputs.length > 0) {
      if (displayError) {
        if (conf.errorMessagePosition === 'top') {
          $.formUtils.dialogs.setMessageInTopOfForm($form, errorMessages, conf, language);
        } else {
          $.each(errorInputs, function (i, $input) {
            $.formUtils.dialogs.setInlineMessage($input, $input.attr('current-error'), conf);
          });
        }
        if (conf.scrollToTopOnError) {
          $.formUtils.$win.scrollTop($form.offset().top - 20);
        }
      }
    }

    if (!displayError && $.formUtils.haltValidation) {
      $.formUtils.errorDisplayPreventedWhenHalted = true;
    }

    return errorInputs.length === 0 && !$.formUtils.haltValidation;
  };

  /**
   * Plugin for displaying input length restriction
   */
  $.fn.restrictLength = function (maxLengthElement) {
    new $.formUtils.lengthRestriction(this, maxLengthElement);
    return this;
  };

  /**
   * Add suggestion dropdown to inputs having data-suggestions with a comma
   * separated string with suggestions
   * @param {Array} [settings]
   * @returns {jQuery}
   */
  $.fn.addSuggestions = function (settings) {
    var sugs = false;
    this.find('input').each(function () {
      var $field = $(this);

      sugs = $.split($field.attr('data-suggestions'));

      if (sugs.length > 0 && !$field.hasClass('has-suggestions')) {
        $.formUtils.suggest($field, sugs, settings);
        $field.addClass('has-suggestions');
      }
    });
    return this;
  };


})(jQuery, window);

/**
 * Utility methods used for handling loading of modules (attached to $.formUtils)
 */
(function($) {

  'use strict';

  $.formUtils = $.extend($.formUtils || {}, {

    /**
     * @var {Boolean}
     */
    isLoadingModules: false,

    /**
     * @var {Object}
     */
    loadedModules: {},

    /**
     * @example
     *  $.formUtils.loadModules('date, security.dev');
     *
     * Will load the scripts date.js and security.dev.js from the
     * directory where this script resides. If you want to load
     * the modules from another directory you can use the
     * path argument.
     *
     * The script will be cached by the browser unless the module
     * name ends with .dev
     *
     * @param {String} modules - Comma separated string with module file names (no directory nor file extension)
     * @param {String} [path] - Optional, path where the module files is located if their not in the same directory as the core modules
     * @param {function} [callback] - Optional, whether or not to fire event 'load' when modules finished loading
     */
    loadModules: function (modules, path, callback) {

      if ($.formUtils.isLoadingModules) {
        setTimeout(function () {
          $.formUtils.loadModules(modules, path, callback);
        }, 10);
        return;
      }

      var hasLoadedAnyModule = false,
        loadModuleScripts = function (modules, path) {

          var moduleList = $.split(modules),
            numModules = moduleList.length,
            moduleLoadedCallback = function () {
              numModules--;
              if (numModules === 0) {
                $.formUtils.isLoadingModules = false;
                if (callback && hasLoadedAnyModule) {
                  if( typeof callback === 'function' ) {
                    callback();
                  }
                }
              }
            };


          if (numModules > 0) {
            $.formUtils.isLoadingModules = true;
          }

          var cacheSuffix = '?_=' + ( new Date().getTime() ),
            appendToElement = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

          $.each(moduleList, function (i, modName) {
            modName = $.trim(modName);
            if (modName.length === 0) {
              moduleLoadedCallback();
            }
            else {
              var scriptUrl = path + modName + (modName.slice(-3) === '.js' ? '' : '.js'),
                script = document.createElement('SCRIPT');

              if (scriptUrl in $.formUtils.loadedModules) {
                // already loaded
                moduleLoadedCallback();
              }
              else {

                // Remember that this script is loaded
                $.formUtils.loadedModules[scriptUrl] = 1;
                hasLoadedAnyModule = true;

                // Load the script
                script.type = 'text/javascript';
                script.onload = moduleLoadedCallback;
                script.src = scriptUrl + ( scriptUrl.slice(-7) === '.dev.js' ? cacheSuffix : '' );
                script.onerror = function() {
                  $.formUtils.warn('Unable to load form validation module '+scriptUrl);
                };
                script.onreadystatechange = function () {
                  // IE 7 fix
                  if (this.readyState === 'complete' || this.readyState === 'loaded') {
                    moduleLoadedCallback();
                    // Handle memory leak in IE
                    this.onload = null;
                    this.onreadystatechange = null;
                  }
                };
                appendToElement.appendChild(script);
              }
            }
          });
        };

      if (path) {
        loadModuleScripts(modules, path);
      } else {
        var findScriptPathAndLoadModules = function () {
          var foundPath = false;
          $('script[src*="form-validator"]').each(function () {
            var isScriptFromPluginNodeModulesDirectory = this.src.split('form-validator')[1].split('node_modules').length > 1;
            if (!isScriptFromPluginNodeModulesDirectory) {
              foundPath = this.src.substr(0, this.src.lastIndexOf('/')) + '/';
              if (foundPath === '/') {
                foundPath = '';
              }
              return false;
            }
          });

          if (foundPath !== false) {
            loadModuleScripts(modules, foundPath);
            return true;
          }
          return false;
        };

        if (!findScriptPathAndLoadModules()) {
          $(findScriptPathAndLoadModules);
        }
      }
    }

  });

})(jQuery);

/**
 * Setup function for the plugin
 */
(function ($) {

  'use strict';


  /**
   * A bit smarter split function
   * delimiter can be space, comma, dash or pipe
   * @param {String} val
   * @param {Function|String} [callback]
   * @param {Boolean} [allowSpaceAsDelimiter]
   * @returns {Array|void}
   */
  $.split = function (val, callback, allowSpaceAsDelimiter) {
    // default to true
    allowSpaceAsDelimiter = allowSpaceAsDelimiter === undefined || allowSpaceAsDelimiter === true;
    var pattern = '[,|\-'+(allowSpaceAsDelimiter ? '\\s':'')+']\\s*',
      regex = new RegExp(pattern, 'g');
    if (typeof callback !== 'function') {
      // return array
      if (!val) {
        return [];
      }
      var values = [];
      $.each(val.split(callback ? callback : regex),
        function (i, str) {
          str = $.trim(str);
          if (str.length) {
            values.push(str);
          }
        }
      );
      return values;
    } else if (val) {
      // exec callback func on each
      $.each(val.split(regex),
        function (i, str) {
          str = $.trim(str);
          if (str.length) {
            return callback(str, i);
          }
        }
      );
    }
  };

  /**
   * Short hand function that makes the validation setup require less code
   * @param conf
   */
  $.validate = function (conf) {

    var defaultConf = $.extend($.formUtils.defaultConfig(), {
      form: 'form',
      validateOnEvent: false,
      validateOnBlur: true,
      validateCheckboxRadioOnClick: true,
      showHelpOnFocus: true,
      addSuggestions: true,
      modules: '',
      onModulesLoaded: null,
      language: false,
      onSuccess: false,
      onError: false,
      onElementValidate: false
    });

    conf = $.extend(defaultConf, conf || {});

    $(window).trigger('formValidationPluginInit', [conf]);

    if( conf.lang && conf.lang !== 'en' ) {
      var langModule = 'lang/'+conf.lang+'.js';
      conf.modules += conf.modules.length ? ','+langModule : langModule;
    }

    // Add validation to forms
    $(conf.form).each(function (i, form) {

      // Make a reference to the config for this form
      form.validationConfig = conf;

      // Trigger jQuery event that we're about to setup validation
      var $form = $(form);
      // $.formUtils.$win.trigger('formValidationSetup', [$form, conf]);
      $form.trigger('formValidationSetup', [$form, conf]);

      // Remove classes and event handlers that might have been
      // added by a previous call to $.validate
      $form.find('.has-help-txt')
          .unbind('focus.validation')
          .unbind('blur.validation');

      $form
        .removeClass('has-validation-callback')
        .unbind('submit.validation')
        .unbind('reset.validation')
        .find('input[data-validation],textarea[data-validation]')
          .unbind('blur.validation');

      // Validate when submitted
      $form.bind('submit.validation', function (evt) {

        var $form = $(this),
          stop = function() {
            evt.stopImmediatePropagation();
            return false;
          };

        if ($.formUtils.haltValidation) {
          // pressing several times on submit button while validation is halted
          return stop();
        }

        if ($.formUtils.isLoadingModules) {
          setTimeout(function () {
            $form.trigger('submit.validation');
          }, 200);
          return stop();
        }

        var valid = $form.isValid(conf.language, conf);
        if ($.formUtils.haltValidation) {
          // Validation got halted by one of the validators
          return stop();
        } else {
          if (valid && typeof conf.onSuccess === 'function') {
            var callbackResponse = conf.onSuccess($form);
            if (callbackResponse === false) {
              return stop();
            }
          } else if (!valid && typeof conf.onError === 'function') {
            conf.onError($form);
            return stop();
          } else {
            return valid ? true : stop();
          }
        }
      })
      .bind('reset.validation', function () {
        $.formUtils.dialogs.removeAllMessagesAndStyling($form, conf);
      })
      .addClass('has-validation-callback');

      if (conf.showHelpOnFocus) {
        $form.showHelpOnFocus();
      }
      if (conf.addSuggestions) {
        $form.addSuggestions();
      }
      if (conf.validateOnBlur) {
        $form.validateOnBlur(conf.language, conf);
        $form.bind('html5ValidationAttrsFound', function () {
          $form.validateOnBlur(conf.language, conf);
        });
      }
      if (conf.validateOnEvent) {
        $form.validateOnEvent(conf.language, conf);
      }
    });

    if (conf.modules !== '') {
      $.formUtils.loadModules(conf.modules, false, function() {
        if (typeof conf.onModulesLoaded === 'function') {
          conf.onModulesLoaded();
        }
        var $form = typeof conf.form === 'string' ? $(conf.form) : conf.form;
        $.formUtils.$win.trigger('validatorsLoaded', [$form, conf]);
      });
    }
  };

})(jQuery);

/**
 * Utility methods and properties attached to $.formUtils
 */
(function($, window) {

  'use strict';

  var $win = $(window);

  $.formUtils = $.extend($.formUtils || {}, {

    $win: $win,

    /**
     * Default config for $(...).isValid();
     */
    defaultConfig: function () {
      return {
        ignore: [], // Names of inputs not to be validated even though `validationRuleAttribute` containing the validation rules tells us to
        errorElementClass: 'error', // Class that will be put on elements which value is invalid
        borderColorOnError: '#b94a48', // Border color of elements which value is invalid, empty string to not change border color
        errorMessageClass: 'form-error', // class name of div containing error messages when validation fails
        validationRuleAttribute: 'data-validation', // name of the attribute holding the validation rules
        validationErrorMsgAttribute: 'data-validation-error-msg', // define custom err msg inline with element
        errorMessagePosition: 'inline', // Can be either "top" or "inline"
        errorMessageTemplate: {
          container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
          messages: '<strong>{errorTitle}</strong><ul>{fields}</ul>',
          field: '<li>{msg}</li>'
        },
        scrollToTopOnError: true,
        dateFormat: 'yyyy-mm-dd',
        addValidClassOnAll: false, // whether or not to apply class="valid" even if the input wasn't validated
        decimalSeparator: '.',
        inputParentClassOnError: 'has-error', // twitter-bootstrap default class name
        inputParentClassOnSuccess: 'has-success', // twitter-bootstrap default class name
        validateHiddenInputs: false, // whether or not hidden inputs should be validated
        inlineErrorMessageCallback: false,
        submitErrorMessageCallback: false
      };
    },

    /**
     * Available validators
     */
    validators: {},

    /**
     * Events triggered by form validator
     */
    _events: {load: [], valid: [], invalid: []},

    /**
     * Setting this property to true during validation will
     * stop further validation from taking place and form will
     * not be sent
     */
    haltValidation: false,

    /**
     * This variable will be true $.fn.isValid() is called
     * and false when $.fn.validateOnBlur is called
     */
    isValidatingEntireForm: false,

    /**
     * Function for adding a validator
     * @param {Object} validator
     */
    addValidator: function (validator) {
      // prefix with "validate_" for backward compatibility reasons
      var name = validator.name.indexOf('validate_') === 0 ? validator.name : 'validate_' + validator.name;
      if (validator.validateOnKeyUp === undefined) {
        validator.validateOnKeyUp = true;
      }
      this.validators[name] = validator;
    },

    /**
     * Warn user via the console if available
     */
    warn: function(msg) {
      if( 'console' in window ) {
        if( typeof window.console.warn === 'function' ) {
          window.console.warn(msg);
        } else if( typeof window.console.log === 'function' ) {
          window.console.log(msg);
        }
      } else {
        alert(msg);
      }
    },

    /**
     * Same as input $.fn.val() but also supporting input of typ radio or checkbox
     * @example
     *
     *  $.formUtils.getValue('.myRadioButtons', $('#some-form'));
     *  $.formUtils.getValue($('#some-form').find('.check-boxes'));
     *
     * @param query
     * @param $parent
     * @returns {String|Boolean}
     */
    getValue: function(query, $parent) {
      var $inputs = $parent ? $parent.find(query) : query;
      if ($inputs.length > 0 ) {
        var type = $inputs.eq(0).attr('type');
        if (type === 'radio' || type === 'checkbox') {
          return $inputs.filter(':checked').val() || '';
        } else {
          return $inputs.val() || '';
        }
      }
      return false;
    },

    /**
     * Validate the value of given element according to the validation rules
     * found in the attribute data-validation. Will return an object representing
     * a validation result, having the props shouldChangeDisplay, isValid and errorMsg
     * @param {jQuery} $elem
     * @param {Object} language ($.formUtils.LANG)
     * @param {Object} conf
     * @param {jQuery} $form
     * @param {String} [eventContext]
     * @return {Object}
     */
    validateInput: function ($elem, language, conf, $form, eventContext) {

      conf = conf || $.formUtils.defaultConfig();
      language = language || $.formUtils.LANG;

      var value = this.getValue($elem);

      $elem
        .valAttr('skipped', false)
        .one('beforeValidation', function() {
          // Skip input because its hidden or disabled
          // Doing this in a callback makes it possible for others to prevent the default
          // behaviour by binding to the same event and call evt.stopImmediatePropagation()
          if ($elem.attr('disabled') || (!$elem.is(':visible') && !conf.validateHiddenInputs)) {
            $elem.valAttr('skipped', 1);
          }
        })
        .trigger('beforeValidation', [value, conf, language]);


      var inputIsOptional = $elem.valAttr('optional') === 'true',
          skipBecauseItsEmpty = !value && inputIsOptional,
          validationRules = $elem.attr(conf.validationRuleAttribute),
          isValid = true,
          errorMsg = '',
          result = {isValid: true, shouldChangeDisplay:true, errorMsg:''};

      // For input type="number", browsers attempt to parse the entered value into a number.
      // If the input is not numeric, browsers handle the situation differently:
      // Chrome 48 simply disallows non-numeric input; FF 44 clears out the input box on blur;
      // Safari 5 parses the entered string to find a leading number.
      // If the input fails browser validation, the browser sets the input value equal to an empty string.
      // Therefore, we cannot distinguish (apart from hacks) between an empty input type="text" and one with a
      // value that can't be parsed by the browser.

      if (!validationRules || skipBecauseItsEmpty || $elem.valAttr('skipped')) {
        result.shouldChangeDisplay = conf.addValidClassOnAll;
        return result;
      }

      // Filter out specified characters
      var ignore = $elem.valAttr('ignore');
      if (ignore) {
        $.each(ignore.split(''), function(i, character) {
          value = value.replace(new RegExp('\\'+character, 'g'), '');
        });
      }

      $.split(validationRules, function (rule) {

        if (rule.indexOf('validate_') !== 0) {
          rule = 'validate_' + rule;
        }

        var validator = $.formUtils.validators[rule];

        if (validator) {

          // special change of element for checkbox_group rule
          if (rule === 'validate_checkbox_group') {
            // set element to first in group, so error msg attr doesn't need to be set on all elements in group
            $elem = $form.find('[name="' + $elem.attr('name') + '"]:eq(0)');
          }

          if (eventContext !== 'keyup' || validator.validateOnKeyUp) {
            // A validator can prevent itself from getting triggered on keyup
            isValid = validator.validatorFunction(value, $elem, conf, language, $form, eventContext);
          }

          if (!isValid) {
            if (conf.validateOnBlur) {
              $elem.validateOnKeyUp(language, conf);
            }
            errorMsg = $.formUtils.dialogs.resolveErrorMessage($elem, validator, rule, conf, language);
            return false; // break iteration
          }

        } else {

          // todo: Add some validator lookup function and tell immediately which module is missing
          throw new Error('Using undefined validator "' + rule +
            '". Maybe you have forgotten to load the module that "' + rule +'" belongs to?');

        }

      });


      if (isValid === false) {
        $elem.trigger('validation', false);
        result.errorMsg = errorMsg;
        result.isValid = false;
        result.shouldChangeDisplay = true;
      } else if (isValid === null) {
        // A validatorFunction returning null means that it's not able to validate
        // the input at this time. Most probably some async stuff need to gets finished
        // first and then the validator will re-trigger the validation.
        result.shouldChangeDisplay = false;
      } else {
        $elem.trigger('validation', true);
        result.shouldChangeDisplay = true;
      }

      // Run element validation callback
      if (typeof conf.onElementValidate === 'function' && errorMsg !== null) {
        conf.onElementValidate(result.isValid, $elem, $form, errorMsg);
      }

      $elem.trigger('afterValidation', [result, eventContext]);

      return result;
    },

    /**
     * Is it a correct date according to given dateFormat. Will return false if not, otherwise
     * an array 0=>year 1=>month 2=>day
     *
     * @param {String} val
     * @param {String} dateFormat
     * @param {Boolean} [addMissingLeadingZeros]
     * @return {Array}|{Boolean}
     */
    parseDate: function (val, dateFormat, addMissingLeadingZeros) {
      var divider = dateFormat.replace(/[a-zA-Z]/gi, '').substring(0, 1),
        regexp = '^',
        formatParts = dateFormat.split(divider || null),
        matches, day, month, year;

      $.each(formatParts, function (i, part) {
        regexp += (i > 0 ? '\\' + divider : '') + '(\\d{' + part.length + '})';
      });

      regexp += '$';

      if (addMissingLeadingZeros) {
        var newValueParts = [];
        $.each(val.split(divider), function(i, part) {
          if(part.length === 1) {
            part = '0'+part;
          }
          newValueParts.push(part);
        });
        val = newValueParts.join(divider);
      }

      matches = val.match(new RegExp(regexp));
      if (matches === null) {
        return false;
      }

      var findDateUnit = function (unit, formatParts, matches) {
        for (var i = 0; i < formatParts.length; i++) {
          if (formatParts[i].substring(0, 1) === unit) {
            return $.formUtils.parseDateInt(matches[i + 1]);
          }
        }
        return -1;
      };

      month = findDateUnit('m', formatParts, matches);
      day = findDateUnit('d', formatParts, matches);
      year = findDateUnit('y', formatParts, matches);

      if ((month === 2 && day > 28 && (year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0)) ||
        (month === 2 && day > 29 && (year % 4 === 0 || year % 100 !== 0 && year % 400 === 0)) ||
        month > 12 || month === 0) {
        return false;
      }
      if ((this.isShortMonth(month) && day > 30) || (!this.isShortMonth(month) && day > 31) || day === 0) {
        return false;
      }

      return [year, month, day];
    },

    /**
     * skum fix. är talet 05 eller lägre ger parseInt rätt int annars får man 0 när man kör parseInt?
     *
     * @param {String} val
     * @return {Number}
     */
    parseDateInt: function (val) {
      if (val.indexOf('0') === 0) {
        val = val.replace('0', '');
      }
      return parseInt(val, 10);
    },

    /**
     * Has month only 30 days?
     *
     * @param {Number} m
     * @return {Boolean}
     */
    isShortMonth: function (m) {
      return (m % 2 === 0 && m < 7) || (m % 2 !== 0 && m > 7);
    },

    /**
     * Restrict input length
     *
     * @param {jQuery} $inputElement Jquery Html object
     * @param {jQuery} $maxLengthElement jQuery Html Object
     * @return void
     */
    lengthRestriction: function ($inputElement, $maxLengthElement) {
      // read maxChars from counter display initial text value
      var maxChars = parseInt($maxLengthElement.text(), 10),
        charsLeft = 0,

      // internal function does the counting and sets display value
        countCharacters = function () {
          var numChars = $inputElement.val().length;
          if (numChars > maxChars) {
            // get current scroll bar position
            var currScrollTopPos = $inputElement.scrollTop();
            // trim value to max length
            $inputElement.val($inputElement.val().substring(0, maxChars));
            $inputElement.scrollTop(currScrollTopPos);
          }
          charsLeft = maxChars - numChars;
          if (charsLeft < 0) {
            charsLeft = 0;
          }

          // set counter text
          $maxLengthElement.text(charsLeft);
        };

      // bind events to this element
      // setTimeout is needed, cut or paste fires before val is available
      $($inputElement).bind('keydown keyup keypress focus blur', countCharacters)
        .bind('cut paste', function () {
          setTimeout(countCharacters, 100);
        });

      // count chars on pageload, if there are prefilled input-values
      $(document).bind('ready', countCharacters);
    },

    /**
     * Test numeric against allowed range
     *
     * @param $value int
     * @param $rangeAllowed str; (1-2, min1, max2, 10)
     * @return array
     */
    numericRangeCheck: function (value, rangeAllowed) {
      // split by dash
      var range = $.split(rangeAllowed),
      // min or max
        minmax = parseInt(rangeAllowed.substr(3), 10);

      if( range.length === 1 && rangeAllowed.indexOf('min') === -1 && rangeAllowed.indexOf('max') === -1 ) {
        range = [rangeAllowed, rangeAllowed]; // only a number, checking agains an exact number of characters
      }

      // range ?
      if (range.length === 2 && (value < parseInt(range[0], 10) || value > parseInt(range[1], 10) )) {
        return [ 'out', range[0], range[1] ];
      } // value is out of range
      else if (rangeAllowed.indexOf('min') === 0 && (value < minmax )) // min
      {
        return ['min', minmax];
      } // value is below min
      else if (rangeAllowed.indexOf('max') === 0 && (value > minmax )) // max
      {
        return ['max', minmax];
      } // value is above max
      // since no other returns executed, value is in allowed range
      return [ 'ok' ];
    },


    _numSuggestionElements: 0,
    _selectedSuggestion: null,
    _previousTypedVal: null,

    /**
     * Utility function that can be used to create plugins that gives
     * suggestions when inputs is typed into
     * @param {jQuery} $elem
     * @param {Array} suggestions
     * @param {Object} settings - Optional
     * @return {jQuery}
     */
    suggest: function ($elem, suggestions, settings) {
      var conf = {
          css: {
            maxHeight: '150px',
            background: '#FFF',
            lineHeight: '150%',
            textDecoration: 'underline',
            overflowX: 'hidden',
            overflowY: 'auto',
            border: '#CCC solid 1px',
            borderTop: 'none',
            cursor: 'pointer'
          },
          activeSuggestionCSS: {
            background: '#E9E9E9'
          }
        },
        setSuggsetionPosition = function ($suggestionContainer, $input) {
          var offset = $input.offset();
          $suggestionContainer.css({
            width: $input.outerWidth(),
            left: offset.left + 'px',
            top: (offset.top + $input.outerHeight()) + 'px'
          });
        };

      if (settings) {
        $.extend(conf, settings);
      }

      conf.css.position = 'absolute';
      conf.css['z-index'] = 9999;
      $elem.attr('autocomplete', 'off');

      if (this._numSuggestionElements === 0) {
        // Re-position suggestion container if window size changes
        $win.bind('resize', function () {
          $('.jquery-form-suggestions').each(function () {
            var $container = $(this),
              suggestID = $container.attr('data-suggest-container');
            setSuggsetionPosition($container, $('.suggestions-' + suggestID).eq(0));
          });
        });
      }

      this._numSuggestionElements++;

      var onSelectSuggestion = function ($el) {
        var suggestionId = $el.valAttr('suggestion-nr');
        $.formUtils._selectedSuggestion = null;
        $.formUtils._previousTypedVal = null;
        $('.jquery-form-suggestion-' + suggestionId).fadeOut('fast');
      };

      $elem
        .data('suggestions', suggestions)
        .valAttr('suggestion-nr', this._numSuggestionElements)
        .unbind('focus.suggest')
        .bind('focus.suggest', function () {
          $(this).trigger('keyup');
          $.formUtils._selectedSuggestion = null;
        })
        .unbind('keyup.suggest')
        .bind('keyup.suggest', function () {
          var $input = $(this),
            foundSuggestions = [],
            val = $.trim($input.val()).toLocaleLowerCase();

          if (val === $.formUtils._previousTypedVal) {
            return;
          }
          else {
            $.formUtils._previousTypedVal = val;
          }

          var hasTypedSuggestion = false,
            suggestionId = $input.valAttr('suggestion-nr'),
            $suggestionContainer = $('.jquery-form-suggestion-' + suggestionId);

          $suggestionContainer.scrollTop(0);

          // Find the right suggestions
          if (val !== '') {
            var findPartial = val.length > 2;
            $.each($input.data('suggestions'), function (i, suggestion) {
              var lowerCaseVal = suggestion.toLocaleLowerCase();
              if (lowerCaseVal === val) {
                foundSuggestions.push('<strong>' + suggestion + '</strong>');
                hasTypedSuggestion = true;
                return false;
              } else if (lowerCaseVal.indexOf(val) === 0 || (findPartial && lowerCaseVal.indexOf(val) > -1)) {
                foundSuggestions.push(suggestion.replace(new RegExp(val, 'gi'), '<strong>$&</strong>'));
              }
            });
          }

          // Hide suggestion container
          if (hasTypedSuggestion || (foundSuggestions.length === 0 && $suggestionContainer.length > 0)) {
            $suggestionContainer.hide();
          }

          // Create suggestion container if not already exists
          else if (foundSuggestions.length > 0 && $suggestionContainer.length === 0) {
            $suggestionContainer = $('<div></div>').css(conf.css).appendTo('body');
            $elem.addClass('suggestions-' + suggestionId);
            $suggestionContainer
              .attr('data-suggest-container', suggestionId)
              .addClass('jquery-form-suggestions')
              .addClass('jquery-form-suggestion-' + suggestionId);
          }

          // Show hidden container
          else if (foundSuggestions.length > 0 && !$suggestionContainer.is(':visible')) {
            $suggestionContainer.show();
          }

          // add suggestions
          if (foundSuggestions.length > 0 && val.length !== foundSuggestions[0].length) {

            // put container in place every time, just in case
            setSuggsetionPosition($suggestionContainer, $input);

            // Add suggestions HTML to container
            $suggestionContainer.html('');
            $.each(foundSuggestions, function (i, text) {
              $('<div></div>')
                .append(text)
                .css({
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  padding: '5px'
                })
                .addClass('form-suggest-element')
                .appendTo($suggestionContainer)
                .click(function () {
                  $input.focus();
                  $input.val($(this).text());
                  $input.trigger('change');
                  onSelectSuggestion($input);
                });
            });
          }
        })
        .unbind('keydown.validation')
        .bind('keydown.validation', function (e) {
          var code = (e.keyCode ? e.keyCode : e.which),
            suggestionId,
            $suggestionContainer,
            $input = $(this);

          if (code === 13 && $.formUtils._selectedSuggestion !== null) {
            suggestionId = $input.valAttr('suggestion-nr');
            $suggestionContainer = $('.jquery-form-suggestion-' + suggestionId);
            if ($suggestionContainer.length > 0) {
              var newText = $suggestionContainer.find('div').eq($.formUtils._selectedSuggestion).text();
              $input.val(newText);
              $input.trigger('change');
              onSelectSuggestion($input);
              e.preventDefault();
            }
          }
          else {
            suggestionId = $input.valAttr('suggestion-nr');
            $suggestionContainer = $('.jquery-form-suggestion-' + suggestionId);
            var $suggestions = $suggestionContainer.children();
            if ($suggestions.length > 0 && $.inArray(code, [38, 40]) > -1) {
              if (code === 38) { // key up
                if ($.formUtils._selectedSuggestion === null) {
                  $.formUtils._selectedSuggestion = $suggestions.length - 1;
                }
                else{
                  $.formUtils._selectedSuggestion--;
                }
                if ($.formUtils._selectedSuggestion < 0) {
                  $.formUtils._selectedSuggestion = $suggestions.length - 1;
                }
              }
              else if (code === 40) { // key down
                if ($.formUtils._selectedSuggestion === null) {
                  $.formUtils._selectedSuggestion = 0;
                }
                else {
                  $.formUtils._selectedSuggestion++;
                }
                if ($.formUtils._selectedSuggestion > ($suggestions.length - 1)) {
                  $.formUtils._selectedSuggestion = 0;
                }
              }

              // Scroll in suggestion window
              var containerInnerHeight = $suggestionContainer.innerHeight(),
                containerScrollTop = $suggestionContainer.scrollTop(),
                suggestionHeight = $suggestionContainer.children().eq(0).outerHeight(),
                activeSuggestionPosY = suggestionHeight * ($.formUtils._selectedSuggestion);

              if (activeSuggestionPosY < containerScrollTop || activeSuggestionPosY > (containerScrollTop + containerInnerHeight)) {
                $suggestionContainer.scrollTop(activeSuggestionPosY);
              }

              $suggestions
                .removeClass('active-suggestion')
                .css('background', 'none')
                .eq($.formUtils._selectedSuggestion)
                .addClass('active-suggestion')
                .css(conf.activeSuggestionCSS);

              e.preventDefault();
              return false;
            }
          }
        })
        .unbind('blur.suggest')
        .bind('blur.suggest', function () {
          onSelectSuggestion($(this));
        });

      return $elem;
    },

    /**
     * Error dialogs
     *
     * @var {Object}
     */
    LANG: {
      errorTitle: 'Form submission failed!',
      requiredField: 'This is a required field',
      requiredFields: 'You have not answered all required fields',
      badTime: 'You have not given a correct time',
      badEmail: 'You have not given a correct e-mail address',
      badTelephone: 'You have not given a correct phone number',
      badSecurityAnswer: 'You have not given a correct answer to the security question',
      badDate: 'You have not given a correct date',
      lengthBadStart: 'The input value must be between ',
      lengthBadEnd: ' characters',
      lengthTooLongStart: 'The input value is longer than ',
      lengthTooShortStart: 'The input value is shorter than ',
      notConfirmed: 'Input values could not be confirmed',
      badDomain: 'Incorrect domain value',
      badUrl: 'The input value is not a correct URL',
      badCustomVal: 'The input value is incorrect',
      andSpaces: ' and spaces ',
      badInt: 'The input value was not a correct number',
      badSecurityNumber: 'Your social security number was incorrect',
      badUKVatAnswer: 'Incorrect UK VAT Number',
      badUKNin: 'Incorrect UK NIN',
      badUKUtr: 'Incorrect UK UTR Number',
      badStrength: 'The password isn\'t strong enough',
      badNumberOfSelectedOptionsStart: 'You have to choose at least ',
      badNumberOfSelectedOptionsEnd: ' answers',
      badAlphaNumeric: 'The input value can only contain alphanumeric characters ',
      badAlphaNumericExtra: ' and ',
      wrongFileSize: 'The file you are trying to upload is too large (max %s)',
      wrongFileType: 'Only files of type %s is allowed',
      groupCheckedRangeStart: 'Please choose between ',
      groupCheckedTooFewStart: 'Please choose at least ',
      groupCheckedTooManyStart: 'Please choose a maximum of ',
      groupCheckedEnd: ' item(s)',
      badCreditCard: 'The credit card number is not correct',
      badCVV: 'The CVV number was not correct',
      wrongFileDim : 'Incorrect image dimensions,',
      imageTooTall : 'the image can not be taller than',
      imageTooWide : 'the image can not be wider than',
      imageTooSmall : 'the image was too small',
      min : 'min',
      max : 'max',
      imageRatioNotAccepted : 'Image ratio is not be accepted',
      badBrazilTelephoneAnswer: 'The phone number entered is invalid',
      badBrazilCEPAnswer: 'The CEP entered is invalid',
      badBrazilCPFAnswer: 'The CPF entered is invalid',
      badPlPesel: 'The PESEL entered is invalid',
      badPlNip: 'The NIP entered is invalid',
      badPlRegon: 'The REGON entered is invalid',
      badreCaptcha: 'Please confirm that you are not a bot',
      passwordComplexityStart: 'Password must contain at least ',
      passwordComplexitySeparator: ', ',
      passwordComplexityUppercaseInfo: ' uppercase letter(s)',
      passwordComplexityLowercaseInfo: ' lowercase letter(s)',
      passwordComplexitySpecialCharsInfo: ' special character(s)',
      passwordComplexityNumericCharsInfo: ' numeric character(s)',
      passwordComplexityEnd: '.'
    }
  });

})(jQuery, window);

/**
 * File declaring all default validators.
 */
(function($) {

  /*
   * Validate email
   */
  $.formUtils.addValidator({
    name: 'email',
    validatorFunction: function (email) {

      var emailParts = email.toLowerCase().split('@'),
        localPart = emailParts[0],
        domain = emailParts[1];

      if (localPart && domain) {

        if( localPart.indexOf('"') === 0 ) {
          var len = localPart.length;
          localPart = localPart.replace(/\"/g, '');
          if( localPart.length !== (len-2) ) {
            return false; // It was not allowed to have more than two apostrophes
          }
        }

        return $.formUtils.validators.validate_domain.validatorFunction(emailParts[1]) &&
          localPart.indexOf('.') !== 0 &&
          localPart.substring(localPart.length-1, localPart.length) !== '.' &&
          localPart.indexOf('..') === -1 &&
          !(/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(localPart));
      }

      return false;
    },
    errorMessage: '',
    errorMessageKey: 'badEmail'
  });

  /*
   * Validate domain name
   */
  $.formUtils.addValidator({
    name: 'domain',
    validatorFunction: function (val) {
      return val.length > 0 &&
        val.length <= 253 && // Including sub domains
        !(/[^a-zA-Z0-9]/.test(val.slice(-2))) && !(/[^a-zA-Z0-9]/.test(val.substr(0, 1))) && !(/[^a-zA-Z0-9\.\-]/.test(val)) &&
        val.split('..').length === 1 &&
        val.split('.').length > 1;
    },
    errorMessage: '',
    errorMessageKey: 'badDomain'
  });

  /*
   * Validate required
   */
  $.formUtils.addValidator({
    name: 'required',
    validatorFunction: function (val, $el, config, language, $form) {
      switch ($el.attr('type')) {
        case 'checkbox':
          return $el.is(':checked');
        case 'radio':
          return $form.find('input[name="' + $el.attr('name') + '"]').filter(':checked').length > 0;
        default:
          return $.trim(val) !== '';
      }
    },
    errorMessage: '',
    errorMessageKey: function(config) {
      if (config.errorMessagePosition === 'top' || typeof config.errorMessagePosition === 'function') {
        return 'requiredFields';
      }
      else {
        return 'requiredField';
      }
    }
  });

  /*
   * Validate length range
   */
  $.formUtils.addValidator({
    name: 'length',
    validatorFunction: function (val, $el, conf, lang) {
      var lengthAllowed = $el.valAttr('length'),
        type = $el.attr('type');

      if (lengthAllowed === undefined) {
        alert('Please add attribute "data-validation-length" to ' + $el[0].nodeName + ' named ' + $el.attr('name'));
        return true;
      }

      // check if length is above min, below max or within range.
      var len = type === 'file' && $el.get(0).files !== undefined ? $el.get(0).files.length : val.length,
        lengthCheckResults = $.formUtils.numericRangeCheck(len, lengthAllowed),
        checkResult;

      switch (lengthCheckResults[0]) {   // outside of allowed range
        case 'out':
          this.errorMessage = lang.lengthBadStart + lengthAllowed + lang.lengthBadEnd;
          checkResult = false;
          break;
        // too short
        case 'min':
          this.errorMessage = lang.lengthTooShortStart + lengthCheckResults[1] + lang.lengthBadEnd;
          checkResult = false;
          break;
        // too long
        case 'max':
          this.errorMessage = lang.lengthTooLongStart + lengthCheckResults[1] + lang.lengthBadEnd;
          checkResult = false;
          break;
        // ok
        default:
          checkResult = true;
      }

      return checkResult;
    },
    errorMessage: '',
    errorMessageKey: ''
  });

  /*
   * Validate url
   */
  $.formUtils.addValidator({
    name: 'url',
    validatorFunction: function (url) {
      // written by Scott Gonzalez: http://projects.scottsplayground.com/iri/
      // - Victor Jonsson added support for arrays in the url ?arg[]=sdfsdf
      // - General improvements made by Stéphane Moureau <https://github.com/TraderStf>

      var urlFilter = /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
      if (urlFilter.test(url)) {
        var domain = url.split('://')[1],
          domainSlashPos = domain.indexOf('/');

        if (domainSlashPos > -1) {
          domain = domain.substr(0, domainSlashPos);
        }

        return $.formUtils.validators.validate_domain.validatorFunction(domain); // todo: add support for IP-addresses
      }
      return false;
    },
    errorMessage: '',
    errorMessageKey: 'badUrl'
  });

  /*
   * Validate number (floating or integer)
   */
  $.formUtils.addValidator({
    name: 'number',
    validatorFunction: function (val, $el, conf) {
      if (val !== '') {
        var allowing = $el.valAttr('allowing') || '',
          decimalSeparator = $el.valAttr('decimal-separator') || conf.decimalSeparator,
          allowsRange = false,
          begin, end,
          steps = $el.valAttr('step') || '',
          allowsSteps = false,
          sanitize = $el.attr('data-sanitize') || '',
          isFormattedWithNumeral = sanitize.match(/(^|[\s])numberFormat([\s]|$)/i);

        if (isFormattedWithNumeral) {
          if (!window.numeral) {
            throw new ReferenceError('The data-sanitize value numberFormat cannot be used without the numeral' +
              ' library. Please see Data Validation in http://www.formvalidator.net for more information.');
          }
          //Unformat input first, then convert back to String
          if (val.length) {
            val = String(numeral().unformat(val));
          }
        }

        if (allowing.indexOf('number') === -1) {
          allowing += ',number';
        }

        if (allowing.indexOf('negative') === -1 && val.indexOf('-') === 0) {
          return false;
        }

        if (allowing.indexOf('range') > -1) {
          begin = parseFloat(allowing.substring(allowing.indexOf('[') + 1, allowing.indexOf(';')));
          end = parseFloat(allowing.substring(allowing.indexOf(';') + 1, allowing.indexOf(']')));
          allowsRange = true;
        }

        if (steps !== '') {
          allowsSteps = true;
        }

        if (decimalSeparator === ',') {
          if (val.indexOf('.') > -1) {
            return false;
          }
          // Fix for checking range with floats using ,
          val = val.replace(',', '.');
        }
        if (val.replace(/[0-9-]/g, '') === '' && (!allowsRange || (val >= begin && val <= end)) && (!allowsSteps || (val % steps === 0))) {
          return true;
        }

        if (allowing.indexOf('float') > -1 && val.match(new RegExp('^([0-9-]+)\\.([0-9]+)$')) !== null && (!allowsRange || (val >= begin && val <= end)) && (!allowsSteps || (val % steps === 0))) {
          return true;
        }
      }
      return false;
    },
    errorMessage: '',
    errorMessageKey: 'badInt'
  });

  /*
   * Validate alpha numeric
   */
  $.formUtils.addValidator({
    name: 'alphanumeric',
    validatorFunction: function (val, $el, conf, language) {
      var patternStart = '^([a-zA-Z0-9',
        patternEnd = ']+)$',
        additionalChars = $el.valAttr('allowing'),
        pattern = '';

      if (additionalChars) {
        pattern = patternStart + additionalChars + patternEnd;
        var extra = additionalChars.replace(/\\/g, '');
        if (extra.indexOf(' ') > -1) {
          extra = extra.replace(' ', '');
          extra += language.andSpaces || $.formUtils.LANG.andSpaces;
        }
        this.errorMessage = language.badAlphaNumeric + language.badAlphaNumericExtra + extra;
      } else {
        pattern = patternStart + patternEnd;
        this.errorMessage = language.badAlphaNumeric;
      }

      return new RegExp(pattern).test(val);
    },
    errorMessage: '',
    errorMessageKey: ''
  });

  /*
   * Validate against regexp
   */
  $.formUtils.addValidator({
    name: 'custom',
    validatorFunction: function (val, $el) {
      var regexp = new RegExp($el.valAttr('regexp'));
      return regexp.test(val);
    },
    errorMessage: '',
    errorMessageKey: 'badCustomVal'
  });

  /*
   * Validate date
   */
  $.formUtils.addValidator({
    name: 'date',
    validatorFunction: function (date, $el, conf) {
      var dateFormat = $el.valAttr('format') || conf.dateFormat || 'yyyy-mm-dd',
        addMissingLeadingZeros = $el.valAttr('require-leading-zero') === 'false';
      return $.formUtils.parseDate(date, dateFormat, addMissingLeadingZeros) !== false;
    },
    errorMessage: '',
    errorMessageKey: 'badDate'
  });


  /*
   * Validate group of checkboxes, validate qty required is checked
   * written by Steve Wasiura : http://stevewasiura.waztech.com
   * element attrs
   *    data-validation="checkbox_group"
   *    data-validation-qty="1-2"  // min 1 max 2
   *    data-validation-error-msg="chose min 1, max of 2 checkboxes"
   */
  $.formUtils.addValidator({
    name: 'checkbox_group',
    validatorFunction: function (val, $el, conf, lang, $form) {
      // preset return var
      var isValid = true,
      // get name of element. since it is a checkbox group, all checkboxes will have same name
        elname = $el.attr('name'),
      // get checkboxes and count the checked ones
        $checkBoxes = $('input[type=checkbox][name^="' + elname + '"]', $form),
        checkedCount = $checkBoxes.filter(':checked').length,
      // get el attr that specs qty required / allowed
        qtyAllowed = $el.valAttr('qty');

      if (qtyAllowed === undefined) {
        var elementType = $el.get(0).nodeName;
        alert('Attribute "data-validation-qty" is missing from ' + elementType + ' named ' + $el.attr('name'));
      }

      // call Utility function to check if count is above min, below max, within range etc.
      var qtyCheckResults = $.formUtils.numericRangeCheck(checkedCount, qtyAllowed);

      // results will be array, [0]=result str, [1]=qty int
      switch (qtyCheckResults[0]) {
        // outside allowed range
        case 'out':
          this.errorMessage = lang.groupCheckedRangeStart + qtyAllowed + lang.groupCheckedEnd;
          isValid = false;
          break;
        // below min qty
        case 'min':
          this.errorMessage = lang.groupCheckedTooFewStart + qtyCheckResults[1] + lang.groupCheckedEnd;
          isValid = false;
          break;
        // above max qty
        case 'max':
          this.errorMessage = lang.groupCheckedTooManyStart + qtyCheckResults[1] + lang.groupCheckedEnd;
          isValid = false;
          break;
        // ok
        default:
          isValid = true;
      }

      if( !isValid ) {
        var _triggerOnBlur = function() {
          $checkBoxes.unbind('click', _triggerOnBlur);
          $checkBoxes.filter('*[data-validation]').validateInputOnBlur(lang, conf, false, 'blur');
        };
        $checkBoxes.bind('click', _triggerOnBlur);
      }

      return isValid;
    }
    //   errorMessage : '', // set above in switch statement
    //   errorMessageKey: '' // not used
  });

})(jQuery);


}));

/**
 *  _______ _______  ______  _____                _______ _     _
 *  |______ |       |_____/ |     | |      |      |_____|  \___/ 
 *  ______| |_____  |    \_ |_____| |_____ |_____ |     | _/   \_
 *
 *  Parallax Scrolling Library
 *  http://iprodev.github.io/Scrollax.js
 *
 *  @version:  1.0.0
 *  @released: July 21, 2015
 *
 *  @author:   iProDev (Hemn Chawroka)
 *             http://iprodev.com/
 *
 *  Licensed under the MIT license.
 *  http://opensource.org/licenses/MIT
 * 
 */
(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):"undefined"!==typeof exports?module.exports=e(require("jquery")):e(jQuery)})(function(e){function W(a){if(console&&console.warn)console.warn("Scrollax: "+a);else throw"Scrollax: "+a;}function ka(a){var g=!!("pageYOffset"in a);return{width:g?window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth:a.offsetWidth,height:g?window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight:
a.offsetHeight,left:a[g?"pageXOffset":"scrollLeft"],top:a[g?"pageYOffset":"scrollTop"]}}function X(a){return(a=a.data("scrollax"))&&eval("({"+a+"})")||{}}function Y(a){var g,c;return!!(a&&"object"===typeof a&&"object"===typeof a.window&&a.window==a&&a.setTimeout&&a.alert&&(g=a.document)&&"object"===typeof g&&(c=g.defaultView||g.parentWindow)&&"object"===typeof c&&c==a)}var v=Array.prototype,C=v.push,Z=v.splice,aa=Object.prototype.hasOwnProperty,la=/[-+]?\d+(\.\d+)?/g,ma="translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
ba=e(window),ca=e(document.body),da,ea,L,M,N,q=function(a,g,c){function k(){O=fa?ca.find(ga):P.find(ga);x.length=0;r=!!t.horizontal;O.each(na);d();t.performanceTrick&&(F=fa?ca:P);u("load");return f}function l(){G&&(G=clearTimeout(G));G=setTimeout(function(){f.reload()})}function d(){var ha=x.length;t.performanceTrick&&F&&(clearTimeout(ia),Q||(F.addClass("scrollax-performance"),Q=!0),ia=setTimeout(function(){F.removeClass("scrollax-performance");Q=!1},100));if(ha){H=ka(a);for(var c=0;c<ha;c++)I=x[c],
y=L(I.element,a),0>y[r?"right":"bottom"]||y[r?"left":"top"]>H[r?"width":"height"]||(ja=I.options,R=ja.offset||t.offset||0,J=y[r?"right":"bottom"],z=y[r?"width":"height"],A=(z-J+R)/z,0>A&&(J=y[r?"left":"top"],z=H[r?"width":"height"],A=-1+(z-J+R)/z),1<A||-1>A||b(I,A,r));u("scroll",H)}}function b(a,b){S=a.parallaxElements;var c=S.length;if(c)for(var f=0;f<c;f++){T=S[f];var g=oa=T.element,d=b;U=T.properties||(r?{translateX:"100%"}:{translateY:"100%"});D="";for(B in U){n=U[B];if("number"===typeof n)n*=
d;else if("string"===typeof n)for(K=n.match(la),m=0,E=K.length;m<E;m++)n=n.replace(K[m],parseFloat(K[m]*d));if(-1!==e.inArray(B,ma))D+=B+"("+n+")";else{var k=g.style,l=B,h;"opacity"===B?(h=0>d?1+n:1-n,h=0>h?0:1<h?1:h):h=n;k[l]=h}}D&&(g.style[da]=ea+D)}}function pa(a){return"undefined"!==typeof a?"number"!==typeof a&&"string"!==typeof a||""===a||isNaN(a)?O.index(a):0<=a&&a<x.length?a:-1:-1}function u(a,b){if(h[a]){E=h[a].length;for(m=V.length=0;m<E;m++)C.call(V,h[a][m]);for(m=0;m<E;m++)V[m].call(f,
a,b)}}function p(a,b){for(var c=0,f=h[a].length;c<f;c++)if(h[a][c]===b)return c;return-1}var f=this,P=a&&e(a).eq(0)||ba,w=q.instances,v=null;a=P[0];e.each(w,function(b,c){b&&b.frame===a&&(v=!0)});if(!a||v)v?W("Scrollax: Scrollax has been initialized for this frame!"):W("Scrollax: Frame is not available!");else{var t=e.extend({},q.defaults,g),x=[],O=null,ga=t.parentSelector||"[data-scrollax-parent]",qa=t.elementsSelector||"[data-scrollax]",h={},V=[],G,fa=Y(a),m,E,F,ia,Q,H,r,R,y,I,ja,A,J,z,S,T,oa,U,
B,n,D,K;f.frame=a;f.options=t;f.parents=x;f.initialized=!1;f.reload=k;var na=function(a,b){var c=e(b),f=X(e(b)),d={};d.element=b;d.options=f;d.parallaxElements=[];c.find(qa).each(function(a,b){var c=X(e(b));c.element=b;C.call(d.parallaxElements,c)});C.call(x,d)};f.scroll=d;f.getIndex=pa;f.one=function(a,b){function c(){b.apply(f,arguments);f.off(a,c)}f.on(a,c);return f};f.on=function(a,b){if("object"===typeof a)for(var c in a){if(aa.call(a,c))f.on(c,a[c])}else if("function"===typeof b){c=a.split(" ");
for(var d=0,g=c.length;d<g;d++)h[c[d]]=h[c[d]]||[],-1===p(c[d],b)&&C.call(h[c[d]],b)}else if("array"===typeof b)for(c=0,d=b.length;c<d;c++)f.on(a,b[c]);return f};f.off=function(a,c){if(c instanceof Array)for(var b=0,d=c.length;b<d;b++)f.off(a,c[b]);else for(var b=a.split(" "),d=0,g=b.length;d<g;d++)if(h[b[d]]=h[b[d]]||[],"undefined"===typeof c)h[b[d]].length=0;else{var k=p(b[d],c);-1!==k&&Z.call(h[b[d]],k,1)}return f};f.set=function(a,b){e.isPlainObject(a)?e.extend(t,a):aa.call(t,a)&&(t[a]=b);k();
return f};f.destroy=function(){N(window,"resize",l);N(a,"scroll",d);e.each(w,function(b,c){b&&b.frame===a&&Z.call(q.instances,c,1)});x.length=0;f.initialized=!1;u("destroy");return f};f.init=function(){if(!f.initialized)return f.on(c),k(),M(window,"resize",l),M(a,"scroll",d),C.call(q.instances,f),f.initialized=!0,u("initialized"),f}}};q.instances=[];(function(){var a,g,c,k,l,d,b,e;L=function(u,p){g=u.ownerDocument||u;c=g.documentElement;k=Y(p)?p:g.defaultView||window;p=p&&p!==g?p:c;l=(k.pageYOffset||
c.scrollTop)-c.clientTop;d=(k.pageXOffset||c.scrollLeft)-c.clientLeft;b={top:0,left:0};if(u&&u.getBoundingClientRect){var f={},q=u.getBoundingClientRect();for(a in q)f[a]=q[a];b=f;b.width=b.right-b.left;b.height=b.bottom-b.top}else return null;if(p===k)return b;b.top+=l;b.left+=d;b.right+=d;b.bottom+=l;if(p===c)return b;e=L(p);b.left-=e.left;b.right-=e.left;b.top-=e.top;b.bottom-=e.top;return b}})();(function(){function a(){this.returnValue=!1}function g(){this.cancelBubble=!0}M=window.addEventListener?
function(a,g,e,d){a.addEventListener(g,e,d||!1);return e}:function(c,e,l){var d=e+l;c[d]=c[d]||function(){var b=window.event;b.target=b.srcElement;b.preventDefault=a;b.stopPropagation=g;l.call(c,b)};c.attachEvent("on"+e,c[d]);return l};N=window.removeEventListener?function(a,g,e,d){a.removeEventListener(g,e,d||!1);return e}:function(a,g,e){var d=g+e;a.detachEvent("on"+g,a[d]);try{delete a[d]}catch(b){a[d]=void 0}return e}})();(function(){function a(a){for(var e=0,d=g.length;e<d;e++){var b=g[e]?g[e]+
a.charAt(0).toUpperCase()+a.slice(1):a;if(null!=c.style[b])return b}}var g=["","webkit","moz","ms","o"],c=document.createElement("div");da=a("transform");ea=a("perspective")?"translateZ(0) ":""})();q.defaults={horizontal:!1,offset:0,parentSelector:null,elementsSelector:null,performanceTrick:!1};window.Scrollax=q;e.fn.Scrollax=function(a,g){var c,k;if(!e.isPlainObject(a)){if("string"===typeof a||!1===a)c=!1===a?"destroy":a,k=slice.call(arguments,1);a={}}return this.each(function(l,d){var b=e.data(d,
"scrollax");b||c?b&&c&&b[c]&&b[c].apply(b,k):e.data(d,"scrollax",(new q(d,a,g)).init())})};e.Scrollax=function(a,e){ba.Scrollax(a,e)};var v=document.head||document.getElementsByTagName("head")[0],w=document.createElement("style");w.type="text/css";w.styleSheet?w.styleSheet.cssText=".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };":
w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));v.appendChild(w);return q});
/*! tooltipster v4.1.8 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.1.8",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__destroying=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.destroy()},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{var e=c.__geometry(),f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c){var d=this,e=!0;if(d._trigger({type:"close",event:b,stop:function(){e=!1}}),e||d.__destroying){c&&d.__callbacks.close.push(c),d.__callbacks.open=[],d.__timeoutsClear();var f=function(){a.each(d.__callbacks.close,function(a,c){c.call(d,d,{event:b,origin:d._$origin[0]})}),d.__callbacks.close=[]};if("closed"!=d.__state){var g=!0,i=new Date,j=i.getTime(),k=j+d.__options.animationDuration[1];if("disappearing"==d.__state&&k>d.__closingTime&&(g=!1),g){d.__closingTime=k,"disappearing"!=d.__state&&d.__stateSet("disappearing");var l=function(){clearInterval(d.__tracker),d._trigger({type:"closing",event:b}),d._$tooltip.off("."+d.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+d.__namespace+"-triggerClose"),d.__$originParents.each(function(b,c){a(c).off("scroll."+d.__namespace+"-triggerClose")}),d.__$originParents=null,a(h.window.document.body).off("."+d.__namespace+"-triggerClose"),d._$origin.off("."+d.__namespace+"-triggerClose"),d._off("dismissable"),d.__stateSet("closed"),d._trigger({type:"after",event:b}),d.__options.functionAfter&&d.__options.functionAfter.call(d,d,{event:b,origin:d._$origin[0]}),f()};h.hasTransitions?(d._$tooltip.css({"-moz-animation-duration":d.__options.animationDuration[1]+"ms","-ms-animation-duration":d.__options.animationDuration[1]+"ms","-o-animation-duration":d.__options.animationDuration[1]+"ms","-webkit-animation-duration":d.__options.animationDuration[1]+"ms","animation-duration":d.__options.animationDuration[1]+"ms","transition-duration":d.__options.animationDuration[1]+"ms"}),d._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),d.__options.animationDuration[1]>0&&d._$tooltip.delay(d.__options.animationDuration[1]),d._$tooltip.queue(l)):d._$tooltip.stop().fadeOut(d.__options.animationDuration[1],l)}}else f()}return d},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;return b.__destroyed?b.__destroyError():b.__destroying||(b.__destroying=!0,b._close(null,function(){b._trigger("destroy"),b.__destroying=!1,b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)})),b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed||this.__destroying?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,destroying:this.__destroying,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom,width:a.width||a.right}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),
this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});