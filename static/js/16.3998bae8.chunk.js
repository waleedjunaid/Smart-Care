(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{149:function(e,a,t){"use strict";var l=t(27),n=t(8),s=t(3),c=t.n(s),r=t(1),i=t.n(r),o=(t(18),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var a,t=e.tag,s=e.className,r=e.type,m=Object(n.a)(e,["tag","className","type"]),u=c()(Object(l.a)({},r,!!r),s);return a=t||(!t&&o[r]?o[r]:"p"),i.a.createElement(a,Object.assign({},m,{className:u}))};m.defaultProps={type:"p"},a.a=m},150:function(e,a,t){"use strict";var l=t(8),n=t(1),s=t.n(n),c=(t(18),t(22)),r=t(162),i=t(163),o=t(149),m=c.a.create("page"),u=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,c=e.className,u=e.children,d=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),b=m.b("px-3",c);return s.a.createElement(n,Object.assign({className:b},d),s.a.createElement("div",{className:m.e("header")},a&&"string"===typeof a?s.a.createElement(o.a,{type:"h1",className:m.e("title")},a):a,t&&s.a.createElement(r.a,{className:m.e("breadcrumb")},s.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return s.a.createElement(i.a,{key:a,active:l},t)}))),u)};u.defaultProps={tag:"div",title:""},a.a=u},162:function(e,a,t){"use strict";var l=t(4),n=t(5),s=t(1),c=t.n(s),r=t(0),i=t.n(r),o=t(3),m=t.n(o),u=t(2),d={tag:u.q,listTag:u.q,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},b=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,r=e.children,i=e.tag,o=e.listTag,d=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(u.m)(m()(a),s),g=Object(u.m)(m()("breadcrumb",t),s);return c.a.createElement(i,Object(l.a)({},b,{className:p,"aria-label":d}),c.a.createElement(o,{className:g},r))};b.propTypes=d,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},163:function(e,a,t){"use strict";var l=t(4),n=t(5),s=t(1),c=t.n(s),r=t(0),i=t.n(r),o=t(3),m=t.n(o),u=t(2),d={tag:u.q,active:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,s=e.active,r=e.tag,i=Object(n.a)(e,["className","cssModule","active","tag"]),o=Object(u.m)(m()(a,!!s&&"active","breadcrumb-item"),t);return c.a.createElement(r,Object(l.a)({},i,{className:o,"aria-current":s?"page":void 0}))};b.propTypes=d,b.defaultProps={tag:"li"},a.a=b},185:function(e,a,t){"use strict";var l=t(4),n=t(5),s=t(23),c=t(1),r=t.n(c),i=t(0),o=t.n(i),m=t(3),u=t.n(m),d=t(28),b=t(2),p=Object(s.a)({},d.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:b.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),g=Object(s.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function f(e){var a=e.tag,t=e.baseClass,s=e.baseClassActive,c=e.className,i=e.cssModule,o=e.children,m=e.innerRef,p=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),g=Object(b.o)(p,b.c),f=Object(b.n)(p,b.c);return r.a.createElement(d.Transition,g,function(e){var n="entered"===e,d=Object(b.m)(u()(c,t,n&&s),i);return r.a.createElement(a,Object(l.a)({className:d},f,{ref:m}),o)})}f.propTypes=p,f.defaultProps=g,a.a=f},6201:function(e,a,t){"use strict";t.r(a);var l=t(150),n=t(149),s=t(1),c=t.n(s),r=t(131),i=t(132),o=t(115),m=t(120),u=t(116),d=t(4),b=t(5),p=t(23),g=t(0),f=t.n(g),h=t(3),E=t.n(h),k=t(2),v=t(185),N={children:f.a.node,className:f.a.string,closeClassName:f.a.string,closeAriaLabel:f.a.string,cssModule:f.a.object,color:f.a.string,fade:f.a.bool,isOpen:f.a.bool,toggle:f.a.func,tag:k.q,transition:f.a.shape(v.a.propTypes),innerRef:f.a.oneOfType([f.a.object,f.a.string,f.a.func])},O={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(p.a)({},v.a.defaultProps,{unmountOnExit:!0})};function y(e){var a=e.className,t=e.closeClassName,l=e.closeAriaLabel,n=e.cssModule,s=e.tag,r=e.color,i=e.isOpen,o=e.toggle,m=e.children,u=e.transition,g=e.fade,f=e.innerRef,h=Object(b.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(k.m)(E()(a,"alert","alert-"+r,{"alert-dismissible":o}),n),O=Object(k.m)(E()("close",t),n),y=Object(p.a)({},v.a.defaultProps,u,{baseClass:g?u.baseClass:"",timeout:g?u.timeout:0});return c.a.createElement(v.a,Object(d.a)({},h,y,{tag:s,className:N,in:i,role:"alert",innerRef:f}),o?c.a.createElement("button",{type:"button",className:O,"aria-label":l,onClick:o},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,m)}y.propTypes=N,y.defaultProps=O;var j=y,C=t(9),T=t(6),I=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:!0},t.toggle=t.toggle.bind(Object(T.a)(Object(T.a)(t))),t}Object(C.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return c.a.createElement(j,Object(d.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},a}(s.Component);a.default=function(){return c.a.createElement(l.a,{title:"Alerts",breadcrumbs:[{name:"alerts",active:!0}]},c.a.createElement(r.a,null,c.a.createElement(i.a,null,c.a.createElement(o.a,null,c.a.createElement(m.a,null,"Alerts"),c.a.createElement(u.a,null,c.a.createElement(j,{color:"primary"},"Give it a"," ",c.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),c.a.createElement(j,{color:"secondary"},"Give it a"," ",c.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),c.a.createElement(j,{color:"success"},"Give it a"," ",c.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),c.a.createElement(j,{color:"danger"},"Give it a"," ",c.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),c.a.createElement(j,{color:"warning"},"Give it a"," ",c.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),c.a.createElement(j,{color:"info"},"Give it a"," ",c.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),c.a.createElement(j,{color:"light"},"Give it a"," ",c.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like."),c.a.createElement(j,{color:"dark"},"Give it a"," ",c.a.createElement("a",{href:"#link",className:"alert-link"},"click")," ","if you like.")))),c.a.createElement(i.a,null,c.a.createElement(o.a,null,c.a.createElement(m.a,null,"Dismiss"),c.a.createElement(u.a,null,c.a.createElement(I,{color:"primary"},"I am an alert and I can be dismissed!"),c.a.createElement(I,{color:"secondary"},"I am an alert and I can be dismissed!"),c.a.createElement(I,{color:"success"},"I am an alert and I can be dismissed!"),c.a.createElement(I,{color:"danger"},"I am an alert and I can be dismissed!"),c.a.createElement(I,{color:"warning"},"I am an alert and I can be dismissed!"),c.a.createElement(I,{color:"info"},"I am an alert and I can be dismissed!"),c.a.createElement(I,{color:"light"},"I am an alert and I can be dismissed!"),c.a.createElement(I,{color:"dark"},"I am an alert and I can be dismissed!"))))),c.a.createElement(r.a,null,c.a.createElement(i.a,null,c.a.createElement(o.a,null,c.a.createElement(m.a,null,"Additional Content"),c.a.createElement(u.a,null,c.a.createElement(j,{color:"success"},c.a.createElement(n.a,{type:"h4",className:"alert-heading"},"Well done!"),c.a.createElement(n.a,null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),c.a.createElement("hr",null),c.a.createElement(n.a,{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")))))))}}}]);
//# sourceMappingURL=16.3998bae8.chunk.js.map