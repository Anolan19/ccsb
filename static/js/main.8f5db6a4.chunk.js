(this.webpackJsonpccsb=this.webpackJsonpccsb||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(4),i=s.n(a),j=(s(9),s(2)),l=(s(10),s(0));var d=function(e){var t=e.value,s=e.setValue,c=e.statName,n=e.pointsLeft;return Object(l.jsxs)("p",{children:[Object(l.jsx)("button",{disabled:t<-4,onClick:function(){s(-1)},children:"-"}),Object(l.jsxs)("span",{className:"statPicker",children:[c,":",t]}),Object(l.jsx)("button",{disabled:t+1>n||t<0&&n<1,onClick:function(){s(1)},children:"+"})]})};var r=function(e){var t=e.value,s=e.setValue,c=e.name,a=e.longNote,i=n.a.useState(!a),d=Object(j.a)(i,2),r=d[0],o=d[1];return Object(l.jsxs)("span",{className:"noteForm ".concat(a?"longNoteWrapper":""),children:[r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("label",{htmlFor:c,children:[c,":"]}),a?Object(l.jsx)("textarea",{className:"longNote",id:c,onChange:function(e){s(e.target.value)},value:t}):Object(l.jsx)("input",{id:c,onChange:function(e){"enter"===e.target.value&&o(!1),s(e.target.value)},onKeyDown:function(e){"Enter"===e.code&&o(!1)},value:t}),Object(l.jsx)("button",{onClick:function(){o(!1)},children:"save"})]}),!r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{className:"",children:Object(l.jsxs)("pre",{children:[Object(l.jsxs)("h4",{children:[c,":"]}),t]})}),Object(l.jsx)("button",{onClick:function(){o(!0)},children:"edit"})]})]})},o="ccsb0.2.0";function b(e){return 0===e?0:e<0?1*e:e+b(e-1)}var h=function(){var e=n.a.useState(25),t=Object(j.a)(e,2),s=t[0],c=t[1],a=n.a.useState(0),i=Object(j.a)(a,2),h=i[0],u=i[1],O=n.a.useState(5),x=Object(j.a)(O,2),p=x[0],f=x[1],m=n.a.useState(5),v=Object(j.a)(m,2),g=v[0],N=v[1],S=n.a.useState(5),k=Object(j.a)(S,2),w=k[0],y=k[1],C=n.a.useState(0),L=Object(j.a)(C,2),V=L[0],P=L[1],M=n.a.useState(0),F=Object(j.a)(M,2),E=F[0],T=F[1],J=n.a.useState(0),D=Object(j.a)(J,2),I=D[0],B=D[1],W=n.a.useState(0),A=Object(j.a)(W,2),H=A[0],U=A[1],K=n.a.useState(0),R=Object(j.a)(K,2),$=R[0],q=R[1],z=n.a.useState(0),G=Object(j.a)(z,2),Q=G[0],X=G[1],Y=n.a.useState(0),Z=Object(j.a)(Y,2),_=Z[0],ee=Z[1],te=n.a.useState(0),se=Object(j.a)(te,2),ce=se[0],ne=se[1],ae=n.a.useState(""),ie=Object(j.a)(ae,2),je=ie[0],le=ie[1],de=n.a.useState(""),re=Object(j.a)(de,2),oe=re[0],be=re[1],he=n.a.useState("$5 in ones\nwatch\nhousing\n"),ue=Object(j.a)(he,2),Oe=ue[0],xe=ue[1],pe=n.a.useState(!1),fe=Object(j.a)(pe,2),me=fe[0],ve=fe[1];return n.a.useLayoutEffect((function(){try{var e=JSON.parse(function(e){for(var t=e+"=",s=decodeURIComponent(document.cookie).split(";"),c=0;c<s.length;c++){for(var n=s[c];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""}(o));console.dir(e),e&&(P(e.precision),T(e.power),B(e.wits),U(e.wisdom),q(e.speed),X(e.stamina),ee(e.jobSkill),ne(e.jobSkill2),be(e.name),le(e.job),xe(e.items),c(s))}catch(t){console.error(t)}}),[s]),n.a.useEffect((function(){u(b(V)+b(E)+b(I)+b(H)+b($)+b(Q)+b(_)+b(ce))}),[V,E,I,H,$,Q,_,ce]),n.a.useEffect((function(){y(Q+Math.ceil(7*H/8)+Math.ceil(7*E/8)+7)}),[Q,H,E]),n.a.useEffect((function(){N(6+Math.ceil(I/1.75)+Math.floor($/2))}),[$,I]),n.a.useEffect((function(){f(6+Math.ceil(V/1.75)+Math.floor($/2))}),[$,V]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("span",{className:"topBar",children:[Object(l.jsxs)("span",{className:"pointsLeft",children:[h," points used out of ",s," total"]}),Object(l.jsxs)("span",{className:"defence",children:[Object(l.jsxs)("div",{children:["Physical Defense:",p]}),Object(l.jsxs)("div",{children:["Mental Defense: ",g]}),Object(l.jsxs)("div",{children:["Health: ",w]})]}),Object(l.jsx)("span",{className:"Save",children:Object(l.jsx)("button",{onClick:function(){!function(e,t,s){var c=new Date;c.setTime(c.getTime()+24*s*60*60*1e3);var n="expires="+c.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}(o,JSON.stringify({precision:V,power:E,wits:I,wisdom:H,speed:$,stamina:Q,jobSkill:_,jobSkill2:ce,job:je,name:oe,items:Oe}),13)},children:"Save Character"})})]}),Object(l.jsxs)("div",{className:"stats",children:[Object(l.jsxs)("span",{className:"physical",children:[Object(l.jsx)("h3",{children:"Physical stats"}),Object(l.jsx)(d,{value:V,statName:"Precision",setValue:function(e){P(V+e)},pointsLeft:s-h}),Object(l.jsx)(d,{value:E,statName:"Power",setValue:function(e){T(E+e)},pointsLeft:s-h})]}),Object(l.jsxs)("span",{className:"mental",children:[Object(l.jsx)("h3",{children:"Mental stats"}),Object(l.jsx)(d,{value:I,statName:"Wits",setValue:function(e){B(I+e)},pointsLeft:s-h}),Object(l.jsx)(d,{value:H,statName:"Wisdom",setValue:function(e){U(H+e)},pointsLeft:s-h})]}),Object(l.jsxs)("span",{className:"inherent",children:[Object(l.jsx)("h3",{children:"Inherent stats"}),Object(l.jsx)(d,{value:$,statName:"Speed",setValue:function(e){q($+e)},pointsLeft:s-h}),Object(l.jsx)(d,{value:Q,statName:"Stamina",setValue:function(e){X(Q+e)},pointsLeft:s-h})]})]}),Object(l.jsxs)("div",{className:"bottom",children:[Object(l.jsxs)("span",{className:"powers",children:[Object(l.jsx)("h3",{children:"Powers"}),Object(l.jsx)("p",{children:"Not available for this game."})]}),Object(l.jsxs)("div",{className:"job",children:[Object(l.jsx)("h3",{children:"Job stats"}),Object(l.jsx)(r,{name:"Job",setValue:le,value:je}),Object(l.jsx)(d,{value:_,statName:"Primary Profession Skill",setValue:function(e){ee(_+e)},pointsLeft:s-h}),Object(l.jsx)(d,{value:ce,statName:"Secondary Profession Skill",setValue:function(e){ne(ce+e)},pointsLeft:s-h})]}),Object(l.jsxs)("span",{className:"notes",children:[Object(l.jsx)("h3",{children:"Notes"}),Object(l.jsx)(r,{name:"Name",setValue:be,value:oe}),Object(l.jsx)(r,{name:"Items",setValue:xe,value:Oe,longNote:!0})]})]}),Object(l.jsxs)("div",{className:"bottomBar",children:[Object(l.jsxs)("button",{onClick:function(){ve(!me)},children:["".concat(me?"Hide":"Show")," rolling guide"]}),Object(l.jsxs)("div",{className:"guide ".concat(me&&"is-visible"),children:["The baseline for all rolls is a 5. Then, depending on your stat, you add, or add and subtract dice rolls from your total.",Object(l.jsxs)("table",{children:[Object(l.jsxs)("thead",{children:[Object(l.jsx)("th",{children:"stat"}),Object(l.jsx)("th",{children:"roll"})]}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"-5"}),Object(l.jsx)("td",{children:"5 - 4d6 + exploding d4"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"-4"}),Object(l.jsx)("td",{children:"5 - 4d6 + exploding d4"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"-3"}),Object(l.jsx)("td",{children:"5 - 2d6 + exploding d4"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"-2"}),Object(l.jsx)("td",{children:"5 - 1d6 + exploding d4"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"-1"}),Object(l.jsx)("td",{children:"5 - 1d4 + exploding d4"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"0"}),Object(l.jsx)("td",{children:"5 minus the lower of two d4 plus the higher (exploded) "})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"1"}),Object(l.jsx)("td",{children:"5 plus exploding d4 "})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"2"}),Object(l.jsx)("td",{children:"5 plus 2 exploding d4 "})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"3"}),Object(l.jsx)("td",{children:"5 plus 2 exploding d6 "})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"4"}),Object(l.jsx)("td",{children:"5 plus 2 exploding d8 "})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"5"}),Object(l.jsx)("td",{children:"5 plus 2 exploding d10 "})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"6"}),Object(l.jsx)("td",{children:"5 plus 4 exploding d6 "})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"7"}),Object(l.jsx)("td",{children:"5 plus 4 exploding d8 "})]})]})]})]})]})]})},u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.8f5db6a4.chunk.js.map