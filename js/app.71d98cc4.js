(function(e){function s(s){for(var r,n,i=s[0],u=s[1],c=s[2],v=0,p=[];v<i.length;v++)n=i[v],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(s);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,s=0;s<a.length;s++){for(var t=a[s],r=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(r=!1)}r&&(a.splice(s--,1),e=n(n.s=t[0]))}return e}var r={},o={app:0},a=[];function n(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,s,t){n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,s){if(1&s&&(e=n(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)n.d(t,r,function(s){return e[s]}.bind(null,r));return t},n.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=s,i=i.slice();for(var c=0;c<i.length;c++)s(i[c]);var l=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"4e79":function(e,s,t){"use strict";var r=t("9fd6"),o=t.n(r);o.a},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[t("app-navigation"),t("app-page-one"),t("app-between"),t("app-page-two")],1)},a=[],n=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"navbar"},[t("a",{staticClass:"linken",attrs:{href:"#start-nav"}},[e._v("Home")]),t("a",{staticClass:"linken",attrs:{href:"#skill-nav"}},[e._v("Skills")]),t("a",{staticClass:"linken",attrs:{href:"#work-nav"}},[e._v("Work")]),t("a",{staticClass:"linken",attrs:{href:"cv/cv-1.html"}},[e._v("CV")]),t("a",{attrs:{href:"https://www.linkedin.com/in/korneel-cnudde-b74a95192/"}},[t("i",{staticClass:"fab fa-linkedin"})]),t("a",{attrs:{href:"https://github.com/KorneelC"}},[t("i",{staticClass:"fab fa-github"})])])}],u={data:function(){return{change:!1}}},c=u,l=t("2877"),v=Object(l["a"])(c,n,i,!1,null,"6199d268",null),p=v.exports,d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"none"},[t("div",{staticClass:"parallax1",attrs:{id:"start-nav"}}),t("div",{staticClass:"content"},[e._m(0),t("button",{staticClass:"work-btn",attrs:{href:"#skills-nav"},on:{mouseover:function(s){e.isHovering=!0},mouseout:function(s){e.isHovering=!1}}},[t("a",{attrs:{href:"#work-nav"}},[e._v("View my work "),t("i",{class:{"fas fa-arrow-left":!e.isHovering,"fas fa-arrow-down":e.isHovering}})])])])])},f=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("h2",[e._v("Hello, I'm "),t("span",{staticClass:"name"},[e._v("Korneel")]),e._v("."),t("span",{staticClass:"title-d"},[e._v("I'm a junior web developer trained by "),t("a",{attrs:{id:"becode",href:"https://www.becode.org/register/register_nl.html"}},[e._v("BeCode")]),e._v(" Genk.")])])}],m={data:function(){return{isHovering:!1}}},h=m,w=Object(l["a"])(h,d,f,!1,null,"97813208",null),M=w.exports,O=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"between-wrapper",attrs:{id:"skill-nav"}},[t("h2",{staticClass:"skill-title"},[e._v("My Skills")]),t("app-donut")],1)},C=[],b=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"column"},e._l(e.percent,(function(s){return t("div",{key:s,staticClass:"donut-wrapper"},[t("div",{staticClass:"svg-item"},[t("svg",{staticClass:"donut",attrs:{viewBox:"0 0 40 40"}},[t("circle",{staticClass:"donut-hole",attrs:{cx:"20",cy:"20",r:"15.91549430918954",fill:"#fff"}}),t("circle",{staticClass:"donut-ring",attrs:{cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent","stroke-width":"3.5"}}),t("circle",{staticClass:"donut-segment donut-segment-2",attrs:{cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent","stroke-width":"3.5","stroke-dasharray":[s.perc,100-s.perc],"stroke-dashoffset":"25"}}),t("g",{staticClass:"donut-text donut-text-1"},[t("text",{attrs:{y:"50%",transform:"translate(0, 2)"}},[t("tspan",{staticClass:"donut-percent",attrs:{x:"50%","text-anchor":"middle"}},[e._v(e._s(s.perc)+"%")])]),t("text",{attrs:{y:"60%",transform:"translate(0, 2)"}},[t("tspan",{staticClass:"donut-data",attrs:{x:"50%","text-anchor":"middle"}},[e._v(e._s(s.skill))])])])])]),t("p",[e._v(e._s(s.skill))])])})),0)},_=[],k={data:function(){return{percent:[{skill:"HTML",perc:90},{skill:"CSS",perc:78},{skill:"SCSS",perc:71},{skill:"JAVASCRIPT",perc:80},{skill:"Vue.js",perc:60}]}}},x=k,j=(t("4e79"),Object(l["a"])(x,b,_,!1,null,"62600c6a",null)),g=j.exports,S={components:{"app-donut":g}},y=S,P=Object(l["a"])(y,O,C,!1,null,"83c39e9a",null),N=P.exports,L=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"parallax2",attrs:{id:"work-nav"}}),t("div",{staticClass:"content1"},[t("h2",{staticClass:"title"},[e._v(e._s(e.MyProjects))]),t("div",{staticClass:"btn-wrap"},[t("button",{staticClass:"skill-btn",on:{click:function(s){e.selectedComponent="app-HTML",e.MyProjects="HTML Projects"}}},[e._v("HTML")]),t("button",{staticClass:"skill-btn",on:{click:function(s){e.selectedComponent="app-CSS",e.MyProjects="CSS Projects"}}},[e._v("CSS")]),t("button",{staticClass:"skill-btn",on:{click:function(s){e.selectedComponent="app-SCSS",e.MyProjects="SCSS Projects"}}},[e._v("SCSS")]),t("button",{staticClass:"skill-btn",on:{click:function(s){e.selectedComponent="app-JS",e.MyProjects="Javascript Projects"}}},[e._v("JAVASCRIPT")]),t("button",{staticClass:"skill-btn",on:{click:function(s){e.selectedComponent="app-VUE",e.MyProjects="Vue Projects"}}},[e._v("Vue.js")])]),t(e.selectedComponent,{tag:"component"})],1)])},E=[],$=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row"},[t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"html1"},on:{mouseover:function(s){e.isMouseOver=!0},mouseout:function(s){e.isMouseOver=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}]},[e._v("HTML Basics")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"html/index.html"}},[e._v("Learn More")])])])])])},H=[],W={data:function(){return{isMouseOver:!1,isMouseOver1:!1,isMouseOver2:!1}}},T=W,V=Object(l["a"])(T,$,H,!1,null,"11eeac18",null),J=V.exports,A=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row"},[t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"css1"},on:{mouseover:function(s){e.isMouseOver=!0},mouseout:function(s){e.isMouseOver=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}]},[e._v("About me")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"about/index.html"}},[e._v("Learn More")])])])]),t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"css2"},on:{mouseover:function(s){e.isMouseOver1=!0},mouseout:function(s){e.isMouseOver1=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver1,expression:"isMouseOver1"}]},[e._v("Grid")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver1,expression:"isMouseOver1"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"grid/index.html"}},[e._v("Learn More")])])])]),t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"css3"},on:{mouseover:function(s){e.isMouseOver2=!0},mouseout:function(s){e.isMouseOver2=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver2,expression:"isMouseOver2"}]},[e._v("Minesweeper")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver2,expression:"isMouseOver2"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"minesweeper/index.html"}},[e._v("Learn More")])])])])])},I=[],B={data:function(){return{isMouseOver:!1,isMouseOver1:!1,isMouseOver2:!1}}},G=B,R=Object(l["a"])(G,A,I,!1,null,"d649e05c",null),K=R.exports,U=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row"},[t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"scss1"},on:{mouseover:function(s){e.isMouseOver=!0},mouseout:function(s){e.isMouseOver=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}]},[e._v("Mobile version")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"admin/index.html"}},[e._v("Learn More")])])])]),t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"scss2"},on:{mouseover:function(s){e.isMouseOver1=!0},mouseout:function(s){e.isMouseOver1=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver1,expression:"isMouseOver1"}]},[e._v("Multipage")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver1,expression:"isMouseOver1"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"multipage/korneel.html"}},[e._v("Learn More")])])])]),t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"scss3"},on:{mouseover:function(s){e.isMouseOver2=!0},mouseout:function(s){e.isMouseOver2=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver2,expression:"isMouseOver2"}]},[e._v("Client Project")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver2,expression:"isMouseOver2"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"client/Project.html"}},[e._v("Learn More")])])])])])},F=[],q={data:function(){return{isMouseOver:!1,isMouseOver1:!1,isMouseOver2:!1}}},z=q,D=Object(l["a"])(z,U,F,!1,null,"8ee8c16a",null),Q=D.exports,X=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row"},[t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"js1"},on:{mouseover:function(s){e.isMouseOver=!0},mouseout:function(s){e.isMouseOver=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}]},[e._v("Snake")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"snake/index.html"}},[e._v("Learn More")])])])]),t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"js2"},on:{mouseover:function(s){e.isMouseOver1=!0},mouseout:function(s){e.isMouseOver1=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver1,expression:"isMouseOver1"}]},[e._v("RPG")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver1,expression:"isMouseOver1"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"rpg/index.html"}},[e._v("Learn More")])])])]),t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"js3"},on:{mouseover:function(s){e.isMouseOver2=!0},mouseout:function(s){e.isMouseOver2=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver2,expression:"isMouseOver2"}]},[e._v("Forms")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver2,expression:"isMouseOver2"}],staticClass:"work-btn button2"},[t("a",{attrs:{href:"form/index.html"}},[e._v("Learn More")])])])])])},Y=[],Z={data:function(){return{isMouseOver:!1,isMouseOver1:!1,isMouseOver2:!1}}},ee=Z,se=Object(l["a"])(ee,X,Y,!1,null,"c88a8c42",null),te=se.exports,re=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row"},[t("div",{staticClass:"projects"},[t("div",{staticClass:"imagesWork",attrs:{id:"vue1"},on:{mouseover:function(s){e.isMouseOver=!0},mouseout:function(s){e.isMouseOver=!1}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.isMouseOver,expression:"isMouseOver"}]},[e._v("Portfolio")])])])])},oe=[],ae={data:function(){return{isMouseOver:!1,isMouseOver1:!1,isMouseOver2:!1}}},ne=ae,ie=Object(l["a"])(ne,re,oe,!1,null,"7c93ef8b",null),ue=ie.exports,ce={data:function(){return{selectedComponent:"",MyProjects:"My Projects"}},components:{"app-HTML":J,"app-CSS":K,"app-SCSS":Q,"app-JS":te,"app-VUE":ue}},le=ce,ve=Object(l["a"])(le,L,E,!1,null,"202902f1",null),pe=ve.exports,de={components:{"app-navigation":p,"app-page-one":M,"app-between":N,"app-page-two":pe}},fe=de,me=(t("034f"),Object(l["a"])(fe,o,a,!1,null,null,null)),he=me.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(he)}}).$mount("#app")},"85ec":function(e,s,t){},"9fd6":function(e,s,t){}});
//# sourceMappingURL=app.71d98cc4.js.map