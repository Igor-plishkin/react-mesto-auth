(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(20),o=n.n(c),i=(n(29),n(22)),r=n(2),l=n(3),u=n(8),p=n(0);var d=function(e){return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"header__logo"}),Object(p.jsx)("div",{className:"header__login",children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/sign-in",children:Object(p.jsx)(u.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(p.jsx)(l.b,{path:"/sign-up",children:Object(p.jsx)(u.b,{className:"header__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(p.jsxs)(l.b,{exact:!0,path:"/",children:[Object(p.jsx)("p",{className:"header__user",children:e.email}),Object(p.jsx)(u.b,{className:"header__link",to:"/sign-in",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})})]})},j=s.a.createContext();var h=function(e){var t=e.card,n=e.onCardClick,a=e.onCardDelete,c=e.onCardLike,o=s.a.useContext(j),i=t.owner._id===o._id,r=t.likes.some((function(e){return e._id===o._id})),l="place__delete-btn ".concat(i&&"place__delete-btn_active"),u="place__like ".concat(r&&"place__like_active");return Object(p.jsxs)("article",{className:"place",children:[Object(p.jsx)("button",{className:l,type:"button",onClick:function(){a(t)}}),Object(p.jsx)("div",{className:"place__image",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){n(t)}}),Object(p.jsxs)("div",{className:"place__footer",children:[Object(p.jsx)("h2",{className:"place__name",children:t.name}),Object(p.jsxs)("div",{className:"place__like-wrapper",children:[Object(p.jsx)("button",{className:u,type:"button",onClick:function(){c(t)}}),Object(p.jsx)("p",{className:"place__counter",children:t.likes.length})]})]})]})};var b=function(e){var t=s.a.useContext(j);return Object(p.jsxs)("main",{className:"main-content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__wrapper",children:[Object(p.jsx)("button",{className:"profile__avatar-btn",onClick:e.onEditAvatar,style:{backgroundImage:"url(".concat(t.avatar,")")},children:Object(p.jsx)("div",{className:"profile__avatar"})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__title-inner",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{className:"profile__edit-btn",type:"button",onClick:e.onEditProfile})]}),Object(p.jsx)("p",{className:"profile__job",children:t.about})]})]}),Object(p.jsx)("button",{className:"profile__add-btn",type:"button",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"places",children:e.cards.map((function(t){return Object(p.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var m=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__copy",children:"\xa9 2021 Mesto Russia"})})};var _=function(e){return Object(p.jsx)("div",{className:"popup popup_zoom-place ".concat(Object.keys(e.card).length&&"popup_opened"),children:Object(p.jsxs)("div",{className:"popup__container-place",children:[Object(p.jsx)("button",{className:"popup__close-btn",type:"button",onClick:e.onClose}),Object(p.jsx)("img",{className:"popup__place-image",src:e.card.link,alt:e.card.name}),Object(p.jsx)("h2",{className:"popup__place-title",children:e.card.name})]})})},f=n(13),O=n(14),g=new(function(){function e(t,n){Object(f.a)(this,e),this.token=t,this.groupId=n,this.url="https://mesto.nomoreparties.co/v1/"}return Object(O.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUser",value:function(){return fetch("".concat(this.url+this.groupId,"/users/me"),{method:"GET",headers:{authorization:this.token}}).then(this._handleResponse)}},{key:"setUser",value:function(e){return fetch("".concat(this.url+this.groupId,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this.url+this.groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}},{key:"setCard",value:function(e){return fetch("".concat(this.url+this.groupId,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url+this.groupId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token}}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this.url+this.groupId,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this.token}}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.url+this.groupId,"/cards"),{method:"GET",headers:{authorization:this.token}}).then(this._handleResponse)}}]),e}())("4756f29e-7074-4b91-8a7b-c92b73652806","cohort-24");var x=function(e){return Object(p.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("h2",{className:"popup__title",children:e.title}),Object(p.jsx)("button",{className:"popup__close-btn",type:"reset",onClick:e.onClose}),Object(p.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[e.children,Object(p.jsx)("button",{className:"popup__submit-btn",type:"submit",children:e.buttonText})]})]})})};var v=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1],d=s.a.useContext(j);return s.a.useEffect((function(){c(d.name),u(d.about)}),[d,e.isOpen]),Object(p.jsxs)(x,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:l})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsxs)("div",{className:"popup__form-field",children:[Object(p.jsx)("input",{className:"popup__input popup__input_name",id:"profile-name",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",onChange:function(e){c(e.target.value)},value:a||""}),Object(p.jsx)("span",{className:"popup__error",id:"profile-name-error"})]}),Object(p.jsxs)("div",{className:"popup__form-field",children:[Object(p.jsx)("input",{className:"popup__input popup__input_job",id:"profile-job",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",onChange:function(e){u(e.target.value)},value:l||""}),Object(p.jsx)("span",{className:"popup__error",id:"profile-job-error"})]})]})};var N=function(e){var t=s.a.createRef();return Object(p.jsx)(x,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(p.jsxs)("div",{className:"popup__form-field",children:[Object(p.jsx)("input",{className:"popup__input popup__input_url",id:"avatar-url",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:t}),Object(p.jsx)("span",{className:"popup__error",id:"avatar-url-error"})]})})};var C=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1];return Object(p.jsxs)(x,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:l}),u(""),c("")},children:[Object(p.jsxs)("div",{className:"popup__form-field",children:[Object(p.jsx)("input",{className:"popup__input popup__input_name",id:"place-name",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",onChange:function(e){c(e.target.value)},value:a}),Object(p.jsx)("span",{className:"popup__error",id:"place-name-error",children:"\u041e\u0448\u0438\u0431\u043a\u0430"})]}),Object(p.jsxs)("div",{className:"popup__form-field",children:[Object(p.jsx)("input",{className:"popup__input popup__input_url",id:"place-url",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){u(e.target.value)},value:l}),Object(p.jsx)("span",{className:"popup__error",id:"place-url-error"})]})]})};var k=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1];return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onLogin(a,l)},children:[Object(p.jsx)("input",{className:"login__input",type:"email",name:"email",placeholder:"Email",required:!0,onChange:function(e){c(e.target.value)},value:a}),Object(p.jsx)("input",{className:"login__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){u(e.target.value)},value:l}),Object(p.jsx)("button",{className:"login__submit-btn",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var y=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],d=i[1];return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onRegistr(a,l)},children:[Object(p.jsx)("input",{className:"login__input",type:"email",name:"email",placeholder:"Email",required:!0,onChange:function(e){c(e.target.value)},value:a}),Object(p.jsx)("input",{className:"login__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){d(e.target.value)},value:l}),Object(p.jsx)("button",{className:"login__submit-btn",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsx)(u.b,{className:"login__link",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})},S=n(23),T=n(24),I=["component"],E=function(e){var t=e.component,n=Object(T.a)(e,I);return Object(p.jsx)(l.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(S.a)({},n)):Object(p.jsx)(l.a,{to:"./sign-in"})}})},L=n.p+"static/media/succesIcon.a9eb6caf.svg",P=n.p+"static/media/errorIcon.d4ce2a26.svg";var w=function(e){return Object(p.jsx)("div",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(p.jsxs)("div",{className:"popup__container popup__info-tool",children:[Object(p.jsx)("button",{className:"popup__close-btn",type:"button",onClick:e.onClose}),e.isSucces?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{className:"popup__info-img",src:L,alt:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Object(p.jsx)("p",{className:"popup__info-message",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{className:"popup__info-img",src:P,alt:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\r \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(p.jsx)("p",{className:"popup__info-message",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})})},R=new(function(){function e(t){Object(f.a)(this,e),this.baseUrl=t}return Object(O.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"registration",value:function(e,t){return fetch("".concat(this.baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(this._handleResponse)}},{key:"login",value:function(e,t){return fetch("".concat(this.baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(this._handleResponse)}},{key:"getToken",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._handleResponse)}}]),e}())("https://auth.nomoreparties.co");var U=function(){var e=Object(l.g)(),t=s.a.useState(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(!1),u=Object(r.a)(o,2),h=u[0],f=u[1],O=s.a.useState(!1),x=Object(r.a)(O,2),S=x[0],T=x[1],I=s.a.useState({}),L=Object(r.a)(I,2),P=L[0],U=L[1],A=s.a.useState([]),D=Object(r.a)(A,2),q=D[0],z=D[1],J=s.a.useState({}),F=Object(r.a)(J,2),B=F[0],G=F[1],H=s.a.useState(!1),M=Object(r.a)(H,2),K=M[0],Q=M[1],V=s.a.useState(!1),W=Object(r.a)(V,2),X=W[0],Y=W[1],Z=s.a.useState(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=s.a.useState(""),ae=Object(r.a)(ne,2),se=ae[0],ce=ae[1];function oe(){f(!1),c(!1),T(!1),te(!1),U({})}return s.a.useEffect((function(){var t=localStorage.getItem("jwt");t&&R.getToken(t).then((function(t){Q(!0),ce(t.data.email),e.push("/")})).catch((function(e){400===e.status?console.log("400 \u2014 \u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"):401===e.status&&console.log("401 \u2014 \u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}))}),[e]),s.a.useEffect((function(){Promise.all([g.getUser(),g.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];G(n),z(a)})).catch((function(e){console.log(e)}))}),[]),Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)(j.Provider,{value:B,children:[Object(p.jsx)(d,{email:se,onSignOut:function(){localStorage.removeItem("jwt"),Q(!1),e.push("/sign-in")}}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/sign-up",children:Object(p.jsx)(y,{onRegistr:function(t,n){R.registration(t,n).then((function(t){Y(!0),te(!0),e.push("/sign-in")})).catch((function(e){400===e.status&&console.log("400 - \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),te(!0),Y(!1)}))}})}),Object(p.jsx)(l.b,{path:"/sign-in",children:Object(p.jsx)(k,{onLogin:function(t,n){R.login(t,n).then((function(n){localStorage.setItem("jwt",n.token),Q(!0),ce(t),e.push("/")})).catch((function(e){400===e.status?console.log("400 - \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status&&console.log("401 - \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"),te(!0),Y(!1)}))}})}),Object(p.jsx)(E,{component:b,path:"/",exact:!0,cards:q,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===B._id}));g.changeLikeCardStatus(e._id,!t).then((function(t){z((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){g.deleteCard(e._id).then((function(){z((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))},onEditProfile:function(){c(!0)},onEditAvatar:function(){f(!0)},onAddPlace:function(){T(!0)},onCardClick:function(e){U(e)},loggedIn:K})]}),Object(p.jsx)(m,{}),Object(p.jsx)(N,{isOpen:h,onClose:oe,onUpdateAvatar:function(e){g.setAvatar(e).then((function(e){G(e),oe()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(v,{isOpen:a,onClose:oe,onUpdateUser:function(e){g.setUser(e).then((function(e){G(e),oe()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(C,{isOpen:S,onClose:oe,onAddPlace:function(e){g.setCard(e).then((function(e){z([e].concat(Object(i.a)(q))),oe()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(_,{card:P,onClose:oe}),Object(p.jsx)(w,{isSucces:X,onClose:oe,isOpen:ee})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(u.a,{children:Object(p.jsx)(U,{})})}),document.getElementById("root")),A()}},[[36,1,2]]]);
//# sourceMappingURL=main.42ded0f0.chunk.js.map