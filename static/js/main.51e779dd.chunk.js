(this.webpackJsonpsarkeett=this.webpackJsonpsarkeett||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),s=n.n(c),r=n(10),i=n(5),o=n(6),l=n(25),j=(n(73),n(124),n(125),l.a.initializeApp({apiKey:"AIzaSyC3xhU24E9Vu7oY9DSBsqtnCvcGak80-44",authDomain:"sarkeett-app.firebaseapp.com",projectId:"sarkeett-app",storageBucket:"sarkeett-app.appspot.com",messagingSenderId:"1086757968103",appId:"1=1086757968103=web=38701e1b64bb6fd01c2a42",measurementId:'G-E7RT7P4S81"'})),d=l.a.storage(),b=l.a.firestore(),u=l.a.firestore.FieldValue.serverTimestamp,m=s.a.createContext(),p=function(e){var t=e.children,n=Object(c.useState)(null),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)(!0),d=Object(o.a)(l,2),b=d[0],u=d[1];return Object(c.useEffect)((function(){j.auth().onAuthStateChanged((function(e){i(e),u(!1)}))}),[]),b?Object(a.jsx)(a.Fragment,{children:"Loading..."}):Object(a.jsx)(m.Provider,{value:{currentUser:r},children:t})},h=n(37),_=n.n(h),O=n.p+"static/media/mob.a379c0ea.png";n(79);function g(){document.title="signup and signin";var e=Object(i.g)();if(Object(c.useContext)(m).currentUser)return Object(a.jsx)(i.a,{to:"/home"});return Object(a.jsxs)("div",{className:"HomeInUp",children:[Object(a.jsxs)("div",{className:"HomeInUp__NavBar",children:[Object(a.jsxs)("div",{className:"HomeInUp__NavBar__left",children:[Object(a.jsx)("img",{src:O,alt:"Logo",className:"HomeInUp__logo_top"}),Object(a.jsx)("h3",{children:"SARKEETT"})]}),Object(a.jsx)("div",{className:"HomeInUp__NavBar__rite",children:Object(a.jsx)("button",{onClick:function(){e.push("/login")},children:"Sign In / Sign up"})})]}),Object(a.jsx)("div",{className:"img__mobile",children:Object(a.jsx)("img",{src:O,alt:""})})]})}n(84);var x=n.p+"static/media/logo.94887919.png",f=n(56),v=n.n(f);function N(e){var t=e.titile,n=Object(i.g)();return Object(a.jsxs)("div",{className:"Header_New_Eelements",children:[Object(a.jsx)("div",{className:"Header__img",children:Object(a.jsx)("img",{src:x,alt:"logo"})}),Object(a.jsx)("div",{className:"Header_center",children:Object(a.jsxs)("p",{style:{color:"#39FF14"},children:[" ",t," "]})}),Object(a.jsx)("div",{className:"Header__right",children:Object(a.jsx)(v.a,{className:"Header_New_Icon",style:{color:"#39FF14",fontSize:"6vh"},onClick:function(){n.push("/home")}})})]})}n(86);n(87);n(88);var y=n(60),w=n.n(y),S=n(40),U=n.n(S),F=n(61),C=n.n(F),k=n(62),E=n.n(k),I=n(41),L=n.n(I);function P(){return Object(a.jsxs)("div",{className:"Footer",children:[Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(w.a,{fontSize:"large",style:{color:"#39FF14"}})}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(U.a,{fontSize:"large",style:{color:"#39FF14"}})}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(C.a,{fontSize:"large",style:{color:"#39FF14"}})}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(E.a,{fontSize:"large",style:{color:"#39FF14"}})}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(L.a,{fontSize:"large",style:{color:"#39FF14"}})})]})}n(89);var A=n(30),T=n(11),H=n(142),z=n(144),B=n(42),M=(n(90),n(20)),R=n.n(M),D=n(28),V=function(e){var t=Object(c.useContext)(m).currentUser,n=Object(c.useState)(0),a=Object(o.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),l=Object(o.a)(i,2),j=l[0],p=l[1],h=Object(c.useState)(null),_=Object(o.a)(h,2),O=_[0],g=_[1],x=t.uid;return Object(c.useEffect)((function(){var t=d.ref(e.name),n=b.collection("dp").doc("".concat(x)).collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){p(e)}),Object(D.a)(R.a.mark((function e(){var a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:return a=e.sent,c=u(),e.next=6,n.add({url:a,createdAt:c,userid:x});case 6:g(a);case 7:case"end":return e.stop()}}),e)}))))}),[e,t,x]),{progress:s,url:O,error:j}},q=n(143),G=j.firestore();n(92);n(93);var W=n(64),J=n.n(W),K=n(63),Y=n.n(K),Q=n(65),X=n.n(Q),Z=n(66),$=n.n(Z),ee=n(67),te=n.n(ee);n(94);var ne=n.p+"static/media/logo.dac76985.png",ae=Object(i.h)((function(e){var t=e.history;document.body.style.backgroundColor="black",document.title="Login";var n=Object(c.useCallback)(function(){var e=Object(D.a)(R.a.mark((function e(n){var a,c,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=n.target.elements,c=a.email,s=a.password,e.prev=2,e.next=5,j.auth().signInWithEmailAndPassword(c.value,s.value);case 5:t.push("/home"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(c.useContext)(m).currentUser?Object(a.jsx)(i.a,{to:"/home"}):Object(a.jsxs)("div",{className:"Login__App",children:[Object(a.jsxs)("div",{className:"Login__left",children:[Object(a.jsx)("div",{className:"Login__left__1",children:Object(a.jsx)("img",{src:ne,alt:"Logo"})}),Object(a.jsxs)("div",{className:"Login__left__2",children:[Object(a.jsx)("h3",{children:"It is not just a media. The key to learn, listen, engage and build relationships"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Come let us explore the world TOGETHER"})]})]}),Object(a.jsx)("div",{className:"Login__right",children:Object(a.jsxs)("div",{className:"Login__right_contaner",children:[Object(a.jsx)("div",{className:"Login__right_contaner_con0",children:Object(a.jsx)("img",{src:ne,alt:"logo"})}),Object(a.jsx)("div",{className:"Login__right_contaner_con1",children:Object(a.jsx)("h2",{children:"Login"})}),Object(a.jsxs)("form",{className:"Login__right_contaner__form",onSubmit:n,children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Username",className:"Login__right_contaner_con2"}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:"Login__right_contaner_con2"}),Object(a.jsx)("button",{type:"submit",className:"Login__right_contaner_con3",children:"Login"})]}),Object(a.jsx)("button",{onClick:function(){t.push("/forgetpassword")},className:"Login__right_contaner_con5",children:"Forget password?"}),Object(a.jsx)("button",{onClick:function(){t.push("/signup")},className:"Login__right_contaner_con4",children:"Don\u2019t have an account? Sign Up"})]})})]})})),ce=(n(95),n.p+"static/media/logo.dac76985.png");function se(e){var t={};return e.username.trim()||(t.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password?e.password.length<8&&(t.password="Password needs to be 8 characters or more"):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords do not match"):t.password2="Password is required",t}var re=j.firestore(),ie=Object(i.h)((function(e){var t=e.history;document.body.style.backgroundColor="black",document.title="Sign Up";var n=Object(c.useState)({username:"",email:"",password:"",password2:""}),s=Object(o.a)(n,2),r=s[0],d=s[1],b=Object(c.useState)(!1),u=Object(o.a)(b,2),p=u[0],h=u[1],_=Object(c.useContext)(m).currentUser,O=Object(c.useState)({}),g=Object(o.a)(O,2),x=g[0],f=g[1],v=Object(c.useCallback)(function(){var e=Object(D.a)(R.a.mark((function e(n,a,c){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.auth().createUserWithEmailAndPassword(n,a).then((function(e){return re.collection("users").doc(e.user.uid).set({username:c,email:n,about:"",hobby:"",number:"",website:"",userpic:"",updatedAt:l.a.firestore.FieldValue.serverTimestamp(),createdAt:l.a.firestore.FieldValue.serverTimestamp()})})).then((function(){var e=j.auth().currentUser;e.updateProfile({displayName:c}).then((function(){t.push("/home")})).catch((function(e){})),console.log(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,a){return e.apply(this,arguments)}}(),[t]),N=function(e){var t=e.target,n=t.name,a=t.value;d(Object(T.a)(Object(T.a)({},r),{},Object(A.a)({},n,a))),f(se(r))};Object(c.useEffect)((function(){0===Object.keys(x).length&&p&&v(r.email,r.password,r.username)}),[x,p,r,v]);return _?Object(a.jsx)(i.a,{to:"/home"}):Object(a.jsxs)("div",{className:"SignUp__App",children:[Object(a.jsxs)("div",{className:"SignUp__left",children:[Object(a.jsx)("div",{className:"SignUp__left__1",children:Object(a.jsx)("img",{src:ce,alt:"Logo"})}),Object(a.jsxs)("div",{className:"SignUp__left__2",children:[Object(a.jsx)("h3",{children:"It is not just a media. The key to learn, listen, engage and build relationships"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Come let us explore the world TOGETHER"})]})]}),Object(a.jsx)("div",{className:"SignUp__right",children:Object(a.jsxs)("div",{className:"SignUp__right_contaner",children:[Object(a.jsx)("div",{className:"SignUp__right_contaner_con0",children:Object(a.jsx)("img",{src:ce,alt:"logo"})}),Object(a.jsx)("div",{className:"SignUp__right_contaner_con1",children:Object(a.jsx)("h2",{children:"Sign Up"})}),Object(a.jsxs)("form",{className:"SignUp__right_contaner__form",onSubmit:function(e){e.preventDefault(),f(se(r)),h(!0)},noValidate:!0,children:[Object(a.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email",value:r.email,onChange:N,className:"SignUp__right_contaner_con2"}),Object(a.jsx)("div",{className:"SignUp__right_contaner__form_error",children:x.email&&Object(a.jsx)("p",{children:x.email})}),Object(a.jsx)("input",{name:"username",type:"text",placeholder:"Full Name",className:"SignUp__right_contaner_con2",value:r.username,onChange:N}),Object(a.jsx)("div",{className:"SignUp__right_contaner__form_error",children:x.username&&Object(a.jsx)("p",{children:x.username})}),Object(a.jsx)("input",{name:"password",id:"password",type:"password",placeholder:"Enter your password",value:r.password,onChange:N,className:"SignUp__right_contaner_con2"}),Object(a.jsx)("div",{className:"SignUp__right_contaner__form_error",children:x.password&&Object(a.jsx)("p",{children:x.password})}),Object(a.jsx)("input",{id:"confirmpassword",name:"password2",type:"password",placeholder:"Confirm your password",value:r.password2,onChange:N,className:"SignUp__right_contaner_con2"}),Object(a.jsx)("div",{className:"SignUp__right_contaner__form_error",children:x.password2&&Object(a.jsx)("p",{children:x.password2})}),Object(a.jsx)("button",{type:"submit",className:"SignUp__right_contaner_con3",children:"Sign Up"})]}),Object(a.jsx)("button",{onClick:function(){t.push("/login")},className:"SignUp__right_contaner_con6",children:"Sign In"}),Object(a.jsx)("p",{className:"SignUp__right_contaner_con4",children:"By signing up, agree to our Terms, Data, Policy, and Cookies Policy"})]})})]})}));n(96);var oe=n.p+"static/media/logo.dac76985.png",le=Object(i.h)((function(e){var t=e.history;if(document.title="Forget Password",Object(c.useContext)(m).currentUser)return Object(a.jsx)(i.a,{to:"/home"});return Object(a.jsxs)("div",{className:"Forget__App",children:[Object(a.jsxs)("div",{className:"Forget__left",children:[Object(a.jsx)("div",{className:"Forget__left__1",children:Object(a.jsx)("img",{src:oe,alt:"Logo"})}),Object(a.jsxs)("div",{className:"Forget__left__2",children:[Object(a.jsx)("h3",{children:"It is not just a media. The key to learn, listen, engage and build relationships"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Come let us explore the world TOGETHER"})]})]}),Object(a.jsx)("div",{className:"Forget__right",children:Object(a.jsxs)("div",{className:"Forget__right_contaner",children:[Object(a.jsx)("div",{className:"Forget__right_contaner_con0",children:Object(a.jsx)("img",{src:oe,alt:"logo"})}),Object(a.jsx)("div",{className:"Forget__right_contaner_con1",children:Object(a.jsx)("h3",{children:"Forget Password"})}),Object(a.jsxs)("form",{className:"Forget__right_contaner__form",onSubmit:function(e){e.preventDefault();var n=e.target.elements.email;j.auth().sendPasswordResetEmail(n.value).then((function(){alert("Password Reset Link Has Sent To Email reset Password and Login"),t.push("login")})).catch((function(e){"auth/user-not-found"===e.code&&alert("User Not Found  Please Enter a Valid Email")}))},children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Enter your Email",className:"Forget__right_contaner_con2"}),Object(a.jsx)("button",{type:"submit",className:"Forget__right_contaner_con3",children:"Send Forget Passord Link"})]}),Object(a.jsx)("button",{onClick:function(){t.push("/signup")},className:"Forget__right_contaner_con5",children:"Create New Account"}),Object(a.jsx)("button",{onClick:function(){t.push("/login")},className:"Forget__right_contaner_con4",children:"Sign In"})]})})]})})),je=n(43),de=function(e){var t=e.component,n=Object(je.a)(e,["component"]),s=Object(c.useContext)(m).currentUser;return Object(a.jsx)(i.b,Object(T.a)(Object(T.a)({},n),{},{render:function(e){return s?Object(a.jsx)(t,Object(T.a)({},e)):Object(a.jsx)(i.a,{to:"/login"})}}))},be=function(e){var t=e.component,n=Object(je.a)(e,["component"]),s=Object(c.useContext)(m).currentUser;return Object(a.jsx)(i.b,Object(T.a)(Object(T.a)({},n),{},{render:function(e){return s?Object(a.jsx)(t,Object(T.a)({},e)):Object(a.jsx)(i.a,{to:"/gotologoin"})}}))},ue=(n(97),j.firestore());n(98);var me=n(68),pe=n.n(me);n(117);function he(e){var t={backgroundImage:'url("'+e.bgImage+'")'};return Object(a.jsx)("div",{className:"AlbumBox__main",children:Object(a.jsx)("div",{className:"StoryBox",style:t})})}var _e=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useContext)(m).currentUser.uid;return Object(c.useEffect)((function(){var t=b.collection("album").doc("".concat(r)).collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(T.a)(Object(T.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e,r]),{docs:a}};n(118),n(119);var Oe=function(){var e=_e("images").docs,t=Object(c.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!0),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(""),u=Object(o.a)(b,2),m=u[0],p=u[1],h={backgroundImage:'url("'+m+'")'};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{id:"Images__app",className:"Images__app",children:[s&&Object(a.jsx)("div",{className:"Image__app__img",style:h}),Object(a.jsx)(pe.a,{className:"teat",onOutsideClick:function(){d(!0),r(!1),document.getElementById("album__uplodeForam").style.display="block"},children:j&&e.map((function(e){return Object(a.jsx)("div",{onClick:function(){p(e.url),r(!0),d(!1),document.getElementById("album__uplodeForam").style.display="none"},className:"Images__imgs",children:Object(a.jsx)(he,{bgImage:e.url})},e.id)}))})]})})},ge=function(e){var t=Object(c.useContext)(m).currentUser,n=Object(c.useState)(0),a=Object(o.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),l=Object(o.a)(i,2),j=l[0],p=l[1],h=Object(c.useState)(null),_=Object(o.a)(h,2),O=_[0],g=_[1],x=t.uid;return Object(c.useEffect)((function(){var t=d.ref(e.name),n=b.collection("album").doc("".concat(x)).collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){p(e)}),Object(D.a)(R.a.mark((function e(){var a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:return a=e.sent,c=u(),e.next=6,n.add({url:a,createdAt:c,userid:x});case 6:g(a);case 7:case"end":return e.stop()}}),e)}))))}),[e,t,x]),{progress:s,url:O,error:j}},xe=(n(120),function(e){var t=e.file,n=e.setFile,s=ge(t),r=s.progress,i=s.url;return Object(c.useEffect)((function(){i&&n(null)}),[i,n]),Object(a.jsx)(B.a.div,{className:"progress-bar",initial:{width:0},animate:{width:r+"%"}})}),fe=n(69),ve=n.n(fe),Ne=(n(121),function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),l=i[0],j=i[1],d=Object(c.useState)(null),b=Object(o.a)(d,2),u=b[0],m=b[1],p=["image/png","image/jpeg","image/gif","image/webp"];return Object(a.jsxs)("form",{className:"UploadForm__app",children:[Object(a.jsxs)("label",{className:"UploadForm__lebel",children:[Object(a.jsx)("input",{type:"file",className:"UplodeForom__input",onChange:function(e){var t=e.target.files[0];t&&p.includes(t.type)?(j(t.name),s(t),m("")):(s(null),m("Please select an image file (png or jpg)"))}}),Object(a.jsx)("div",{className:"UploadForm__input__icon",children:Object(a.jsx)(ve.a,{style:{fontSize:50}})})]}),Object(a.jsxs)("div",{className:"output",children:[n&&Object(a.jsx)(xe,{file:n,setFile:s}),u&&Object(a.jsx)("div",{className:"UploadForm__error",children:u}),n&&Object(a.jsx)("div",{className:"UploadForm__filename",children:l})]})]})});var ye=Object(a.jsx)(p,{children:Object(a.jsx)(r.a,{children:Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{exact:!0,path:"/",component:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(g,{})})}}),Object(a.jsx)(i.b,{path:"/gotologoin",component:g}),Object(a.jsx)(i.b,{path:"/login",component:ae}),Object(a.jsx)(i.b,{path:"/signup",component:ie}),Object(a.jsx)(i.b,{path:"/page",component:function(){return document.title="Site Map",Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"Page_div",children:[Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/gotologoin",children:"First Page"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/settings",children:"Settings"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/feed",children:"\u1e0d Feeds"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/explore",children:"Explore"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/profile",children:"Profile"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/home",children:"Home"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/login",children:"Login"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/signup",children:"Sign Up"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/post",children:"Post"})}),Object(a.jsx)("div",{className:"page-btn",children:Object(a.jsx)(r.b,{className:"page-btn",to:"/forgetpassword",children:"Forget password"})})]})})}}),Object(a.jsx)(i.b,{path:"/forgetpassword",component:le}),Object(a.jsx)(be,{path:"/settings",component:function(){return document.title="settings",Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"setings__Head",children:Object(a.jsx)(N,{titile:"settings"})}),Object(a.jsxs)("div",{className:"settings__button",children:[Object(a.jsx)("button",{class:"settings__button__el",children:"Log In with another account"}),Object(a.jsx)("button",{class:"settings__button__el",children:"Delete account"}),Object(a.jsx)("button",{onClick:function(){return j.auth().signOut()},class:"settings__button__el",children:"Logout"})]})]})}}),Object(a.jsx)(de,{path:"/explore",component:function(){return document.title="Explore",document.body.style.backgroundColor="black",Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(N,{titile:"Explore"})}),Object(a.jsx)("div",{className:"Footer-end",children:Object(a.jsx)(P,{})})]})}}),Object(a.jsx)(de,{path:"/feed",component:function(){return document.title="Feeds",document.body.style.backgroundColor="black",Object(a.jsxs)("div",{className:"Feeds",children:[Object(a.jsx)("div",{children:Object(a.jsx)(N,{titile:"Feeds"})}),Object(a.jsx)(P,{})]})}}),Object(a.jsx)(de,{path:"/profileupdate",component:function(){document.body.style.backgroundColor="#444950",document.title="Update Profile";var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),i=Object(o.a)(r,2),j=i[0],d=i[1],b=Object(c.useState)(null),u=Object(o.a)(b,2),p=u[0],h=u[1],_=Object(c.useContext)(m).currentUser,O=["image/png","image/jpeg","image/gif","image/webp"],g=G.collection("users").doc(_.uid),x=Object(c.useState)({username:"",about:"",hobby:"",number:"",email:"",website:"",userpic:""}),f=Object(o.a)(x,2),v=f[0],y=f[1];p&&alert(p),Object(c.useEffect)((function(){G.collection("users").doc(_.uid).onSnapshot((function(e){y({username:e.data().username,about:e.data().about,hobby:e.data().hobby,number:e.data().number,email:e.data().email,website:e.data().website,userpic:e.data().userpic}),s(!1)}))}),[_.uid,n]);var w=function(e){var t=e.target,n=t.name,a=t.value;y(Object(T.a)(Object(T.a)({},v),{},Object(A.a)({},n,a)))};function S(e){var t=e.file,n=e.setFile,s=V(t),r=s.url,i=s.progress;return Object(c.useEffect)((function(){r&&(_.updateProfile({photoURL:r}),g.update({userpic:r,updatedAt:l.a.firestore.FieldValue.serverTimestamp()}),n(null))}),[r,n]),Object(a.jsx)(B.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N,{titile:"Update profile"}),Object(a.jsxs)("div",{className:"Update_profile",children:[Object(a.jsx)("div",{className:"Update_profile__avatar",children:Object(a.jsx)(H.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{style:{display:"none"},type:"file",onChange:function(e){var t=e.target.files[0];t&&O.includes(t.type)?(d(t),h("")):(d(null),h("Please select an image file (png or jpg)"))}}),Object(a.jsx)(q.a,{})]}),j&&Object(a.jsx)(S,{file:j,setFile:d})]})}),children:Object(a.jsx)(z.a,{style:{height:"100px",width:"100px"},alt:"Update_profile pic",src:v.userpic})})}),Object(a.jsx)("div",{className:"Update_profile-input",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g.update({username:v.username,about:v.about,hobby:v.hobby,number:v.number,email:v.email,website:v.website,userpic:v.userpic,updatedAt:l.a.firestore.FieldValue.serverTimestamp()}),_.photoURL!==v.userpic&&_.updateProfile({photoURL:v.userpic}),_.displayName!==v.username&&_.updateProfile({displayName:v.username}),y({username:"",about:"",hobby:"",number:"",email:"",website:"",userpic:""}),s(!0)},noValidate:!0,children:[Object(a.jsxs)("div",{className:"Update_profile_form",children:[Object(a.jsx)("label",{htmlFor:"name",children:"\ud83d\udc64 Name"}),Object(a.jsx)("input",{id:"name",placeholder:"\ud83d\udc64 Full Name",type:"text",name:"username",value:v.username,onChange:w,className:"Update_profile__text"})]}),Object(a.jsxs)("div",{className:"Update_profile_form",children:[Object(a.jsx)("label",{htmlFor:"about",children:"\ud83d\udcd5 About"}),Object(a.jsx)("input",{id:"about",type:"text",placeholder:"\ud83d\udcd5 About",name:"about",value:v.about,onChange:w,className:"Update_profile__text"})]}),Object(a.jsxs)("div",{className:"Update_profile_form",children:[Object(a.jsx)("label",{htmlFor:"hobby",children:"\ud83d\udc5e Hobby"}),Object(a.jsx)("input",{id:"hobby",placeholder:"\ud83d\udc5e Hobby",type:"text",name:"hobby",value:v.hobby,onChange:w,className:"Update_profile__text"})]}),Object(a.jsxs)("div",{className:"Update_profile_form",children:[Object(a.jsx)("label",{htmlFor:"number",children:"\ud83d\udcde Mobile Number"}),Object(a.jsx)("input",{id:"number",placeholder:"\ud83d\udcde Mobile Number",pattern:"[0-9]",type:"text",name:"number",value:v.number,onChange:w,className:"Update_profile__text"})]}),Object(a.jsxs)("div",{className:"Update_profile_form",children:[Object(a.jsx)("label",{htmlFor:"email",children:"\ud83d\udce7 Email"}),Object(a.jsx)("input",{id:"email",disabled:!0,placeholder:"Email",name:"email",value:v.email,className:"Update_profile__text"})]}),Object(a.jsxs)("div",{className:"Update_profile_form",children:[Object(a.jsx)("label",{htmlFor:"website",children:"\ud83c\udf10 Website"}),Object(a.jsx)("input",{id:"website",placeholder:"\ud83c\udf10 website",type:"text",name:"website",value:v.website,onChange:w,className:"Update_profile__text"})]}),Object(a.jsx)("button",{type:"submit",children:"Update"})]})})]})]})}}),Object(a.jsx)(de,{path:"/album",component:function(){return document.title="Album",document.body.style.backgroundColor="white",Object(a.jsxs)("div",{className:"Album",children:[Object(a.jsx)("div",{id:"album__uplodeForam",className:"Album__uploded",children:Object(a.jsx)(Ne,{})}),Object(a.jsx)("div",{className:"Album__main",children:Object(a.jsx)(Oe,{})})]})}}),Object(a.jsx)(be,{path:"/home",component:function(){document.body.style.backgroundColor="black",document.title="Home";var e=Object(i.g)();return Object(a.jsxs)("div",{className:"Main",children:[Object(a.jsx)("div",{className:"Main__logout",children:Object(a.jsx)("button",{onClick:function(){return j.auth().signOut()},children:"Logout"})}),Object(a.jsxs)("div",{className:"Main__contaner",children:[Object(a.jsx)("div",{className:"Main__contaner__left",children:Object(a.jsxs)("div",{className:"main__box",children:[Object(a.jsx)(Y.a,{style:{fontSize:50}}),Object(a.jsx)("p",{children:"Trending Places"})]})}),Object(a.jsx)("div",{className:"Main__contaner__right",children:Object(a.jsxs)("div",{className:"main__Icon__buttons",children:[Object(a.jsx)("div",{onClick:function(){e.push("/album")},className:"main__Icon__button__elament ",id:"Main_btn1",children:Object(a.jsx)(J.a,{style:{fontSize:60}})}),Object(a.jsx)("div",{onClick:function(){e.push("/page")},className:"main__Icon__button__elament ",id:"Main_btn2",children:Object(a.jsx)(X.a,{style:{fontSize:60}})}),Object(a.jsx)("div",{onClick:function(){e.push("/page")},className:"main__Icon__button__elament ",id:"Main_btn3",children:Object(a.jsx)(U.a,{style:{fontSize:60}})}),Object(a.jsx)("div",{onClick:function(){e.push("/post")},className:"main__Icon__button__elament",id:"Main_btn4",children:Object(a.jsx)($.a,{style:{fontSize:60}})}),Object(a.jsx)("div",{onClick:function(){e.push("/profileupdate")},className:"main__Icon__button__elament",id:"Main_btn5",children:Object(a.jsx)(te.a,{style:{fontSize:60}})}),Object(a.jsx)("div",{onClick:function(){e.push("/settings")},className:"main__Icon__button__elament",id:"Main_btn6",children:Object(a.jsx)(L.a,{style:{fontSize:60}})})]})})]})]})}}),Object(a.jsx)(be,{path:"/post",component:function(){return Object(a.jsx)("div",{className:"Post__app",children:Object(a.jsx)(N,{titile:"Post"})})}}),Object(a.jsx)(be,{path:"/test",component:function(){var e=j.auth().currentUser,t=ue.collection("/users");return console.log(t),Object(a.jsxs)("div",{className:"test",children:[Object(a.jsx)("h2",{children:e.displayName}),Object(a.jsx)("h2",{children:e.email}),Object(a.jsx)("img",{src:e.photoURL,alt:"UserImage"})]})}})]})})});_.a.render(ye,document.getElementById("root"))},79:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.51e779dd.chunk.js.map