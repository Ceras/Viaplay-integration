webpackJsonp([0],{0:function(t,e,n){t.exports=n(1)},1:function(t,e,n){try{(function(){var t=n(2),e=n(159),i=n(160),r=n(182),o=n(185);Footer=n(188);var s={height:"100%",width:"auto"},a=t.createClass({displayName:"App",getInitialState:function(){return{sections:i.sections,content:i.content}},componentDidMount:function(){this.unsubscribe=i.listen(this.setPageData)},componentWillUnmount:function(){this.unsubscribe()},setPageData:function(){this.setState({sections:i.sections,content:i.content})},render:function(){var e=t.createElement("div",null);return i.pageData&&(e=t.createElement("div",{style:s},t.createElement(r,{sections:this.state.sections}),t.createElement(o,{content:this.state.content}),t.createElement(Footer,null))),e}});e.render(t.createElement(a,null),document.getElementById("viaplay-integration"))}).call(this)}finally{}},160:function(t,e,n){var i=n(161),r=n(180),o=n(181);t.exports=i.createStore({pageData:{},sections:{},content:{},init:function(){o.get(r.viaplayUrl,this.setPageData)},setPageData:function(t){this.pageData=JSON.parse(t),this.setSections(),this.setContent(),this.trigger()},setSections:function(){this.sections=this.pageData._links["viaplay:sections"]},setContent:function(){this.content=this.pageData._embedded["viaplay:blocks"]}})},161:function(t,e,n){var i=n(162);i.connect=n(175),i.connectFilter=n(177),i.ListenerMixin=n(176),i.listenTo=n(178),i.listenToMany=n(179),t.exports=i},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={version:{"reflux-core":"0.3.0"}};i.ActionMethods=n(163),i.ListenerMethods=n(164),i.PublisherMethods=n(173),i.StoreMethods=n(172),i.createAction=n(174),i.createStore=n(168);var r=n(167).staticJoinCreator;i.joinTrailing=i.all=r("last"),i.joinLeading=r("first"),i.joinStrict=r("strict"),i.joinConcat=r("all");var o=i.utils=n(165);i.EventEmitter=o.EventEmitter,i.Promise=o.Promise,i.createActions=function(){var t=function(t,e){Object.keys(t).forEach(function(n){var r=t[n];e[n]=i.createAction(r)})};return function(e){var n={};return e instanceof Array?e.forEach(function(e){o.isObject(e)?t(e,n):n[e]=i.createAction(e)}):t(e,n),n}}(),i.setEventEmitter=function(t){i.EventEmitter=o.EventEmitter=t},i.nextTick=function(t){o.nextTick=t},i.use=function(t){t(i)},i.__keep=n(169),Function.prototype.bind||console.error("Function.prototype.bind not available. ES5 shim required. https://github.com/spoike/refluxjs#es5"),e["default"]=i,t.exports=e["default"]},163:function(t,e){"use strict";t.exports={}},164:function(t,e,n){"use strict";var i=n(165),r=n(167).instanceJoinCreator,o=function(t){for(var e,n=0,i={};n<(t.children||[]).length;++n)e=t.children[n],t[e]&&(i[e]=t[e]);return i},s=function a(t){var e={};for(var n in t){var r=t[n],s=o(r),c=a(s);e[n]=r;for(var l in c){var u=c[l];e[n+i.capitalize(l)]=u}}return e};t.exports={hasListener:function(t){for(var e,n,i,r=0;r<(this.subscriptions||[]).length;++r)for(i=[].concat(this.subscriptions[r].listenable),e=0;e<i.length;e++)if(n=i[e],n===t||n.hasListener&&n.hasListener(t))return!0;return!1},listenToMany:function(t){var e=s(t);for(var n in e){var r=i.callbackName(n),o=this[r]?r:this[n]?n:void 0;o&&this.listenTo(e[n],o,this[r+"Default"]||this[o+"Default"]||o)}},validateListening:function(t){return t===this?"Listener is not able to listen to itself":i.isFunction(t.listen)?t.hasListener&&t.hasListener(this)?"Listener cannot listen to this listenable because of circular loop":void 0:t+" is missing a listen method"},listenTo:function(t,e,n){var r,o,s,a=this.subscriptions=this.subscriptions||[];return i.throwIf(this.validateListening(t)),this.fetchInitialState(t,n),r=t.listen(this[e]||e,this),o=function(){var t=a.indexOf(s);i.throwIf(-1===t,"Tried to remove listen already gone from subscriptions list!"),a.splice(t,1),r()},s={stop:o,listenable:t},a.push(s),s},stopListeningTo:function(t){for(var e,n=0,r=this.subscriptions||[];n<r.length;n++)if(e=r[n],e.listenable===t)return e.stop(),i.throwIf(-1!==r.indexOf(e),"Failed to remove listen from subscriptions list!"),!0;return!1},stopListeningToAll:function(){for(var t,e=this.subscriptions||[];t=e.length;)e[0].stop(),i.throwIf(e.length!==t-1,"Failed to remove listen from subscriptions list!")},fetchInitialState:function(t,e){e=e&&this[e]||e;var n=this;if(i.isFunction(e)&&i.isFunction(t.getInitialState)){var r=t.getInitialState();r&&i.isFunction(r.then)?r.then(function(){e.apply(n,arguments)}):e.call(this,r)}},joinTrailing:r("last"),joinLeading:r("first"),joinConcat:r("all"),joinStrict:r("strict")}},165:function(t,e,n){"use strict";function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function r(t,n){return n=n||"on",n+e.capitalize(t)}function o(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function s(t){if(!o(t))return t;for(var e,n,i=1,r=arguments.length;r>i;i++){e=arguments[i];for(n in e)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,s)}else t[n]=e[n]}return t}function a(t){return"function"==typeof t}function c(t,e){for(var n={},i=0;i<t.length;i++)n[t[i]]=e[i];return n}function l(t){return"object"==typeof t&&"callee"in t&&"number"==typeof t.length}function u(t,e){if(t)throw Error(e||t)}Object.defineProperty(e,"__esModule",{value:!0}),e.capitalize=i,e.callbackName=r,e.isObject=o,e.extend=s,e.isFunction=a,e.object=c,e.isArguments=l,e.throwIf=u,e.EventEmitter=n(166),e.nextTick=function(t){setTimeout(t,0)}},166:function(t,e,n){"use strict";function i(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function r(){}var o="function"!=typeof Object.create?"~":!1;r.prototype._events=void 0,r.prototype.listeners=function(t,e){var n=o?o+t:t,i=this._events&&this._events[n];if(e)return!!i;if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,a=new Array(s);s>r;r++)a[r]=i[r].fn;return a},r.prototype.emit=function(t,e,n,i,r,s){var a=o?o+t:t;if(!this._events||!this._events[a])return!1;var c,l,u=this._events[a],f=arguments.length;if("function"==typeof u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),f){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,n),!0;case 4:return u.fn.call(u.context,e,n,i),!0;case 5:return u.fn.call(u.context,e,n,i,r),!0;case 6:return u.fn.call(u.context,e,n,i,r,s),!0}for(l=1,c=new Array(f-1);f>l;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,p=u.length;for(l=0;p>l;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),f){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,e);break;case 3:u[l].fn.call(u[l].context,e,n);break;default:if(!c)for(h=1,c=new Array(f-1);f>h;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},r.prototype.on=function(t,e,n){var r=new i(e,n||this),s=o?o+t:t;return this._events||(this._events=o?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],r]:this._events[s].push(r):this._events[s]=r,this},r.prototype.once=function(t,e,n){var r=new i(e,n||this,!0),s=o?o+t:t;return this._events||(this._events=o?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],r]:this._events[s].push(r):this._events[s]=r,this},r.prototype.removeListener=function(t,e,n,i){var r=o?o+t:t;if(!this._events||!this._events[r])return this;var s=this._events[r],a=[];if(e)if(s.fn)(s.fn!==e||i&&!s.once||n&&s.context!==n)&&a.push(s);else for(var c=0,l=s.length;l>c;c++)(s[c].fn!==e||i&&!s[c].once||n&&s[c].context!==n)&&a.push(s[c]);return a.length?this._events[r]=1===a.length?a[0]:a:delete this._events[r],this},r.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[o?o+t:t]:this._events=o?{}:Object.create(null),this):this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners=function(){return this},r.prefixed=o,t.exports=r},167:function(t,e,n){"use strict";function i(t,e,n){return function(){var i,r=n.subscriptions,o=r?r.indexOf(t):-1;for(c.throwIf(-1===o,"Tried to remove join already gone from subscriptions list!"),i=0;i<e.length;i++)e[i]();r.splice(o,1)}}function r(t){t.listenablesEmitted=new Array(t.numberOfListenables),t.args=new Array(t.numberOfListenables)}function o(t,e){return function(){var n=l.call(arguments);if(e.listenablesEmitted[t])switch(e.strategy){case"strict":throw new Error("Strict join failed because listener triggered twice.");case"last":e.args[t]=n;break;case"all":e.args[t].push(n)}else e.listenablesEmitted[t]=!0,e.args[t]="all"===e.strategy?[n]:n;s(e)}}function s(t){for(var e=0;e<t.numberOfListenables;e++)if(!t.listenablesEmitted[e])return;t.callback.apply(t.listener,t.args),r(t)}var a=n(168),c=n(165),l=Array.prototype.slice,u={strict:"joinStrict",first:"joinLeading",last:"joinTrailing",all:"joinConcat"};e.staticJoinCreator=function(t){return function(){var e=l.call(arguments);return a({init:function(){this[u[t]].apply(this,e.concat("triggerAsync"))}})}},e.instanceJoinCreator=function(t){return function(){c.throwIf(arguments.length<2,"Cannot create a join with less than 2 listenables!");var e,n,s=l.call(arguments),a=s.pop(),u=s.length,f={numberOfListenables:u,callback:this[a]||a,listener:this,strategy:t},h=[];for(e=0;u>e;e++)c.throwIf(this.validateListening(s[e]));for(e=0;u>e;e++)h.push(s[e].listen(o(e,f),this));return r(f),n={listenable:s},n.stop=i(n,h,this),this.subscriptions=(this.subscriptions||[]).concat(n),n}}},168:function(t,e,n){"use strict";var i=n(165),r=n(169),o=n(170),s=n(171),a={preEmit:1,shouldEmit:1};t.exports=function(t){function e(){var e,n=0;if(this.subscriptions=[],this.emitter=new i.EventEmitter,this.eventLabel="change",s(this,t),this.init&&i.isFunction(this.init)&&this.init(),this.listenables)for(e=[].concat(this.listenables);n<e.length;n++)this.listenToMany(e[n])}var c=n(172),l=n(173),u=n(164);t=t||{};for(var f in c)if(!a[f]&&(l[f]||u[f]))throw new Error("Cannot override API method "+f+" in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");for(var h in t)if(!a[h]&&(l[h]||u[h]))throw new Error("Cannot override API method "+h+" in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");t=o(t),i.extend(e.prototype,u,l,c,t);var p=new e;return r.createdStores.push(p),p}},169:function(t,e){"use strict";e.createdStores=[],e.createdActions=[],e.reset=function(){for(;e.createdStores.length;)e.createdStores.pop();for(;e.createdActions.length;)e.createdActions.pop()}},170:function(t,e,n){"use strict";var i=n(165);t.exports=function(t){var e={init:[],preEmit:[],shouldEmit:[]},n=function r(t){var n={};return t.mixins&&t.mixins.forEach(function(t){i.extend(n,r(t))}),i.extend(n,t),Object.keys(e).forEach(function(n){t.hasOwnProperty(n)&&e[n].push(t[n])}),n}(t);return e.init.length>1&&(n.init=function(){var t=arguments;e.init.forEach(function(e){e.apply(this,t)},this)}),e.preEmit.length>1&&(n.preEmit=function(){return e.preEmit.reduce(function(t,e){var n=e.apply(this,t);return void 0===n?t:[n]}.bind(this),arguments)}),e.shouldEmit.length>1&&(n.shouldEmit=function(){var t=arguments;return!e.shouldEmit.some(function(e){return!e.apply(this,t)},this)}),Object.keys(e).forEach(function(t){1===e[t].length&&(n[t]=e[t][0])}),n}},171:function(t,e){"use strict";t.exports=function(t,e){for(var n in e)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var i=Object.getOwnPropertyDescriptor(e,n);if(!i.value||"function"!=typeof i.value||!e.hasOwnProperty(n))continue;t[n]=e[n].bind(t)}else{var r=e[n];if("function"!=typeof r||!e.hasOwnProperty(n))continue;t[n]=r.bind(t)}return t}},172:function(t,e){"use strict";t.exports={}},173:function(t,e,n){"use strict";var i=n(165);t.exports={preEmit:function(){},shouldEmit:function(){return!0},listen:function(t,e){e=e||this;var n=function(n){r||t.apply(e,n)},i=this,r=!1;return this.emitter.addListener(this.eventLabel,n),function(){r=!0,i.emitter.removeListener(i.eventLabel,n)}},trigger:function(){var t=arguments,e=this.preEmit.apply(this,t);t=void 0===e?t:i.isArguments(e)?e:[].concat(e),this.shouldEmit.apply(this,t)&&this.emitter.emit(this.eventLabel,t)},triggerAsync:function(){var t=arguments,e=this;i.nextTick(function(){e.trigger.apply(e,t)})},deferWith:function(t){var e=this.trigger,n=this,i=function(){e.apply(n,arguments)};this.trigger=function(){t.apply(n,[i].concat([].splice.call(arguments,0)))}}}},174:function(t,e,n){"use strict";var i=n(165),r=n(163),o=n(173),s=n(169),a={preEmit:1,shouldEmit:1},c=function l(t){t=t||{},i.isObject(t)||(t={actionName:t});for(var e in r)if(!a[e]&&o[e])throw new Error("Cannot override API method "+e+" in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");for(var n in t)if(!a[n]&&o[n])throw new Error("Cannot override API method "+n+" in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");t.children=t.children||[],t.asyncResult&&(t.children=t.children.concat(["completed","failed"]));for(var c=0,u={};c<t.children.length;c++){var f=t.children[c];u[f]=l(f)}var h=i.extend({eventLabel:"action",emitter:new i.EventEmitter,_isAction:!0},o,r,t),p=function d(){var t=d.sync?"trigger":"triggerAsync";return d[t].apply(d,arguments)};return i.extend(p,u,h),s.createdActions.push(p),p};t.exports=c},175:function(t,e,n){var i=n(164),r=n(176),o=n(165);t.exports=function(t,e){return{getInitialState:function(){return o.isFunction(t.getInitialState)?void 0===e?t.getInitialState():o.object([e],[t.getInitialState()]):{}},componentDidMount:function(){o.extend(this,i);var n=this,r=void 0===e?this.setState:function(t){("undefined"==typeof n.isMounted||n.isMounted()===!0)&&n.setState(o.object([e],[t]))};this.listenTo(t,r)},componentWillUnmount:r.componentWillUnmount}}},176:function(t,e,n){var i=n(165),r=n(164);t.exports=i.extend({componentWillUnmount:r.stopListeningToAll},r)},177:function(t,e,n){var i=n(164),r=n(176),o=n(165);t.exports=function(t,e,n){return n=o.isFunction(e)?e:n,{getInitialState:function(){if(o.isFunction(t.getInitialState)){if(o.isFunction(e))return n.call(this,t.getInitialState());var i=n.call(this,t.getInitialState());return"undefined"!=typeof i?o.object([e],[i]):{}}return{}},componentDidMount:function(){o.extend(this,i);var r=this,s=function(t){if(o.isFunction(e))r.setState(n.call(r,t));else{var i=n.call(r,t);r.setState(o.object([e],[i]))}};this.listenTo(t,s)},componentWillUnmount:r.componentWillUnmount}}},178:function(t,e,n){var i=n(164);t.exports=function(t,e,n){return{componentDidMount:function(){for(var r in i)if(this[r]!==i[r]){if(this[r])throw"Can't have other property '"+r+"' when using Reflux.listenTo!";this[r]=i[r]}this.listenTo(t,e,n)},componentWillUnmount:i.stopListeningToAll}}},179:function(t,e,n){var i=n(164);t.exports=function(t){return{componentDidMount:function(){for(var e in i)if(this[e]!==i[e]){if(this[e])throw"Can't have other property '"+e+"' when using Reflux.listenToMany!";this[e]=i[e]}this.listenToMany(t)},componentWillUnmount:i.stopListeningToAll}}},180:function(t,e){t.exports={trailerAddictUrl:"http://api.traileraddict.com/",viaplayUrl:"https://content.viaplay.se/web-se/film/lucy-2014"}},181:function(t,e){t.exports={get:function(t,e){var n=new XMLHttpRequest;n.open("GET",t,!1),n.onload=function(t){200==this.status&&e(this.response)},n.send()}}},182:function(t,e,n){try{(function(){var e=n(2),i=n(183),r={height:"66px",width:"auto",backgroundColor:"#212d33",margin:"0",padding:"0 67.5px 0 67.5px"},o={height:"35px",position:"relative",top:"50%",transform:"translateY(-50%)","float":"left"},s={"float":"right",position:"relative",top:"50%",transform:"translateY(-50%)",color:"#F5F5F5"};t.exports=e.createClass({displayName:"module.exports",render:function(){return e.createElement("div",{style:r},e.createElement("a",{href:"#"},e.createElement("img",{style:o,src:"http://assets.viaplay.tv/frontend-010422016021130/images/header-logo-large.png"})),e.createElement(i,{sections:this.props.sections}),e.createElement("i",{className:"fa fa-search",style:s}))}})}).call(this)}finally{}},183:function(t,e,n){try{(function(){var e=n(2),i=n(184),r={display:"inline-block",height:"100%",margin:"0",padding:"0 0 0 67.5px",color:"#FEFEFE"};t.exports=e.createClass({displayName:"module.exports",render:function(){var t=this.props.sections.map(function(t){return e.createElement(i,e.__spread({key:t.title},t))});return e.createElement("div",{style:r},t)}})}).call(this)}finally{}},184:function(t,e,n){try{(function(){var e=n(2);t.exports=e.createClass({displayName:"module.exports",getInitialState:function(){return{mouseOver:!1}},getComponentStyle:function(){var t={display:"inline-block",height:"100%",padding:"25px 10px 0 10px"};return this.state.mouseOver&&(t.backgroundColor="#eee"),t},getLinkStyle:function(){var t={textDecoration:"none",color:"white"};return this.state.mouseOver&&(t.color="black"),t},onEnter:function(){this.setState({mouseOver:!0})},onExit:function(){this.setState({mouseOver:!1})},render:function(){return e.createElement("div",{style:this.getComponentStyle(),onMouseOver:this.onEnter,onMouseOut:this.onExit},e.createElement("a",{style:this.getLinkStyle(),href:"#"},this.props.title))}})}).call(this)}finally{}},185:function(t,e,n){try{(function(){var e=n(2),i=n(186),r=n(187),o={position:"absolute",top:"66px",bottom:"250px",left:"0",width:"100%",background:"#eee",paddingTop:"20px",overflowY:"scroll"};t.exports=e.createClass({displayName:"module.exports",getProductContent:function(){return this.props.content[0]._embedded["viaplay:product"].content},getProductImdbId:function(){return this.props.content[0]._embedded["viaplay:product"].content.imdb.id.replace("tt","")},getProductImageUrl:function(){return this.props.content[0]._embedded["viaplay:product"].content.images.landscape.url},render:function(){var t=this.getProductContent()?e.createElement(i,e.__spread({},this.getProductContent())):"";return e.createElement("div",{style:o},e.createElement(r,{imageUrl:this.getProductImageUrl(),imdbId:this.getProductImdbId()}),t)}})}).call(this)}finally{}},186:function(t,e,n){try{(function(){var e=n(2),i={width:"50%","float":"right"},r={margin:"0"},o={margin:"0"};t.exports=e.createClass({displayName:"module.exports",getActorsList:function(){return this.props.people.actors.join(", ")},getDirectorsList:function(){return this.props.people.directors.join(", ")},render:function(){return e.createElement("div",{style:i},e.createElement("h1",{style:r},this.props.title),e.createElement("h2",{style:o},"this.props. | ",this.props.production.year),e.createElement("h2",{style:o},this.props.duration.readable),e.createElement("p",null,e.createElement("strong",null,this.props.imdb.rating)," från ",this.props.imdb.voters," användare"),e.createElement("p",null,this.props.synopsis),e.createElement("div",null,e.createElement("strong",null,"Skådespelare: "),this.getActorsList()),e.createElement("div",null,e.createElement("strong",null,"Regissör: "),this.getDirectorsList()),e.createElement("div",null,e.createElement("strong",null,"Land: "),this.props.production.country))}})}).call(this)}finally{}},187:function(t,e,n){try{(function(){var e=n(2),i=(n(180),n(181),{width:"50%",maxWidth:"50%","float":"left"}),r={width:"100%"};t.exports=e.createClass({displayName:"module.exports",getInitialState:function(){return this.getTrailerData(),{trailerData:{}}},getTrailerData:function(){},setTrailerData:function(t){this.setState({trailerData:t})},render:function(){return e.createElement("div",{style:i},e.createElement("img",{style:r,src:this.props.imageUrl}))}})}).call(this)}finally{}},188:function(t,e,n){try{(function(){var e=n(2),i={position:"absolute",height:"250px",padding:"30px 30px 0 30px",left:"0",bottom:"0",width:"100%",boxSizing:"border-box",backgroundColor:"#212d33",overflow:"hidden"},r={display:"inline-block",paddingRight:"20px","float":"left"},o={display:"inline-block",height:"100%"},s={color:"#fefefe"},a={display:"inline-block",listStyle:"none",margin:"0",padding:"10px 0 0 0"},c={marginTop:"10px"},l={textDecoration:"none",color:"#d3d3d3"},u=[{header:"VIAPLAY",content:[{label:"Serier",link:"#"},{label:"Film",link:"#"},{label:"Sport",link:"#"},{label:"Barn",link:"#"},{label:"Hyrbutik",link:"#"}]}];t.exports=e.createClass({displayName:"module.exports",render:function(){var t=u.map(function(t){var n=t.content.map(function(t){return e.createElement("li",{key:t.label,style:c},e.createElement("a",{style:l,href:t.link},t.label))});return e.createElement("div",{key:t.header,style:{height:"100%"}},e.createElement("div",{style:s},t.header),e.createElement("ul",{style:a},n))});return e.createElement("div",{style:i},e.createElement("div",{style:r},e.createElement("img",{src:"http://assets.viaplay.tv/frontend-010422016021130/images/footer_logo_on_dark.png"})),e.createElement("div",{style:o},t))}})}).call(this)}finally{}}});