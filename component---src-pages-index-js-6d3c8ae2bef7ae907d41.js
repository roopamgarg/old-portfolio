(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=(n("Ea3V"),n("TpwP"),n("+0cL")),l=n("7uOm"),c=n("bf48"),i=n("rgW5"),u=(n("Oyvg"),n("V+eJ"),n("hHhE"),n("/SS/"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("TSYQ")),s=n.n(u),f=n("BGR+"),p=n("94VI"),m=n("CtXQ"),b=n("H84U");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},w=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,E(t).apply(this,arguments))).handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e.renderCheckableTag=function(t){var n,o=t.getPrefixCls,a=e.props,l=a.prefixCls,c=a.className,i=a.checked,u=C(a,["prefixCls","className","checked"]),f=o("tag",l),p=s()(f,(v(n={},"".concat(f,"-checkable"),!0),v(n,"".concat(f,"-checkable-checked"),i),n),c);return delete u.onChange,r.createElement("span",h({},u,{className:p,onClick:e.handleClick}))},e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement(b.a,null,this.renderCheckableTag)}}])&&g(n.prototype,o),a&&g(n,a),t}(r.Component),k=n("CWQg"),j=Object(k.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"),S=n("6CfX"),P=n("g0mS");function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},D=new RegExp("^(".concat(j.join("|"),")(-inverse)?$")),J=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=N(this,A(t).call(this,e))).state={visible:!0},n.handleIconClick=function(e){n.setVisible(!1,e)},n.renderTag=function(e){var t=n.props,o=t.children,a=B(t,["children"]),l="onClick"in a||o&&"a"===o.type,c=Object(f.default)(a,["onClose","afterClose","color","visible","closable","prefixCls"]);return l?r.createElement(P.a,null,r.createElement("span",x({},c,{className:n.getTagClassName(e),style:n.getTagStyle()}),o,n.renderCloseIcon())):r.createElement("span",x({},c,{className:n.getTagClassName(e),style:n.getTagStyle()}),o,n.renderCloseIcon())},Object(S.a)(!("afterClose"in e),"Tag","'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),n=t,a=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(o=[{key:"getTagStyle",value:function(){var e=this.props,t=e.color,n=e.style,r=this.isPresetColor();return x({backgroundColor:t&&!r?t:void 0},n)}},{key:"getTagClassName",value:function(e){var t,n=e.getPrefixCls,r=this.props,o=r.prefixCls,a=r.className,l=r.color,c=this.state.visible,i=this.isPresetColor(),u=n("tag",o);return s()(u,(I(t={},"".concat(u,"-").concat(l),i),I(t,"".concat(u,"-has-color"),l&&!i),I(t,"".concat(u,"-hidden"),!c),t),a)}},{key:"setVisible",value:function(e,t){var n=this.props,r=n.onClose,o=n.afterClose;r&&r(t),o&&!r&&o(),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(){var e=this.props.color;return!!e&&D.test(e)}},{key:"renderCloseIcon",value:function(){return this.props.closable?r.createElement(m.a,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return r.createElement(b.a,null,this.renderTag)}}])&&_(n.prototype,o),a&&_(n,a),t}(r.Component);J.CheckableTag=w,J.defaultProps={closable:!1},Object(p.polyfill)(J);var M=J,V=function(e){return o.a.createElement("div",null,o.a.createElement(c.a,{style:{border:"1px solid rgb(235, 237, 240)",marginBottom:"2rem"},title:"About"}),o.a.createElement(i.a,{className:"fadeIn"},o.a.createElement(i.a.Item,null,o.a.createElement("h2",null,"About Me"),o.a.createElement("p",null,"Born on 09 April 2001"),o.a.createElement("p",{className:"description"},"I'm a full-stack developer from India, I have a serious passion for UI effects, animation and creating intuitive, dynamic user experiences. Let's make something Special.")),o.a.createElement(i.a.Item,null,o.a.createElement("h2",null,"Skills"),o.a.createElement("div",null,o.a.createElement(M,{color:"blue"},"C/C++"),o.a.createElement(M,{color:"blue"},"Javascript"),o.a.createElement(M,{color:"blue"},"MEAN Stack"),o.a.createElement(M,{color:"blue"},"MERN Stack"),o.a.createElement(M,{color:"blue"},"AWS"),o.a.createElement(M,{color:"blue"},"Automation Testing"),o.a.createElement(M,{color:"blue"},"CI/CD"))),o.a.createElement(i.a.Item,null,o.a.createElement("h2",null,"Education"),o.a.createElement(i.a,null,o.a.createElement(i.a.Item,null,o.a.createElement("p",null,"Maharaja Agrasen Institute Of Technology"),o.a.createElement("p",null,"Bachelor of Technology - BTech information technology"),o.a.createElement("p",null,"2019 – 2022")),o.a.createElement(i.a.Item,null,o.a.createElement("p",null,"Guru Nanak Dev Institute Of Technology"),o.a.createElement("p",null,"Diploma in Information Technology"),o.a.createElement("p",null,"2016 – 2019"))))))},W=n("dZ7Z"),F=n("/g0T"),G=n("M50w"),H=n("TJpk");n.d(t,"query",(function(){return X}));var Q=function(){return"undefined"!=typeof window&&window.innerWidth<=800?o.a.createElement(r.Fragment,null,o.a.createElement(V,null),o.a.createElement(l.a,null),o.a.createElement(W.a,null),o.a.createElement(F.a,null)):o.a.createElement(r.Fragment,null,o.a.createElement(V,null))};var X="3815201121";t.default=function(e){var t=e.data;return o.a.createElement("div",{className:"App"},o.a.createElement(a.a,{data:t},o.a.createElement(H.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Roopam Garg - Web Developer"),o.a.createElement("link",{rel:"canonical",href:""+G.a})),Q()))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6d3c8ae2bef7ae907d41.js.map