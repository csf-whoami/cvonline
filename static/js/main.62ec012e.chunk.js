(this.webpackJsonpcvonline=this.webpackJsonpcvonline||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),i=a(12),s=a.n(i),o=(a(19),a(20),a(2)),l=a(3),u=a(5),j=a(4),d=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6 ",children:[Object(n.jsx)("h4",{children:"Address"}),"Company ",Object(n.jsx)("br",{}),"Ngu Hanh Son, Da Nang ",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{className:"col-md-6 ",children:[Object(n.jsx)("h4",{children:"Phone and Email "}),"0982-***-***    ",Object(n.jsx)("br",{}),"luatpham***@gmail.com    ",Object(n.jsx)("br",{})]})]})}}]),a}(c.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{fontSize:"50px"},className:"iconRef text-center",children:[Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fa fa-twitter fa-10x"})}),Object(n.jsx)("a",{href:"https://www.facebook.com/search/top?q=Pham%20Tien%20Luat",children:Object(n.jsx)("i",{className:"fa fa-facebook fa-10x"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fa fa-dribbble fa-10x"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fa fa-flickr fa-10x"})}),Object(n.jsx)("a",{href:"https://github.com/LuatPT",children:Object(n.jsx)("i",{className:"fa fa-github fa-10x"})})]})}}]),a}(c.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"Contact Us",className:"contactUs",children:[Object(n.jsxs)("div",{className:"heading text-center",children:[Object(n.jsx)("h2",{children:"Let's Keep In Touch!"}),Object(n.jsx)("p",{children:"Thank you for visiting out my profile. If you would like to get into contact with me, please contact with my information below."})]}),Object(n.jsx)(d,{}),Object(n.jsx)(b,{})]})}}]),a}(c.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"navbar-header",children:Object(n.jsx)("b",{className:"imageTop",children:"LuatPT Profile"})})}}]),a}(c.a.Component),O=a(6),m=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).changeMenuItem=function(){(0,e.props.changeMenu)(e.props.id)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.currentMenu,t=this.props,a="#"+t.value;return Object(n.jsx)("li",{className:"",children:Object(n.jsx)("a",{href:a,className:"scroll-link",onClick:this.changeMenuItem,style:{color:t.id===e?"white":"#ffb89f"},children:t.value})})}}]),a}(c.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeMenu=function(e){n.setState({currentMenu:e})},n.state={currentMenu:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{id:"main-nav",children:Object(n.jsx)("ul",{className:"nav navbar-nav row",id:"mainNav",children:[{id:0,value:"Home"},{id:1,value:"About Me"},{id:2,value:"Skills"},{id:3,value:"Experience"},{id:4,value:"Projects"},{id:5,value:"Contact Us"}].map((function(t,a){return Object(n.jsx)(m,Object(O.a)({currentMenu:e.state.currentMenu,changeMenu:e.changeMenu},t),a)}))})})}}]),a}(c.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"header",id:"Home",children:Object(n.jsx)("div",{id:"#Menu",children:Object(n.jsxs)("nav",{className:"navbar navbar-inverse navBarMenu",role:"navigation",children:[Object(n.jsx)(p,{}),Object(n.jsx)(v,{})]})})})}}]),a}(c.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.valueBody;return Object(n.jsx)("div",{className:"aboutItemBody",children:Object(n.jsx)("p",{children:e})})}}]),a}(c.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.valueHead,a=e.iconHead;return Object(n.jsxs)("div",{className:"aboutItemHeader",children:[Object(n.jsx)("i",{className:a}),Object(n.jsx)("h3",{children:t})]})}}]),a}(c.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props;return Object(n.jsxs)("div",{className:"col-md-4 boxer",children:[Object(n.jsx)(g,{valueHead:e.header,iconHead:e.css}),Object(n.jsx)(x,{valueBody:e.body})]})}}]),a}(c.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"aboutMe",id:"About Me",children:Object(n.jsxs)("div",{className:"aboutMeHeader",children:[Object(n.jsx)("h2",{children:"I am a Backend Developer"}),Object(n.jsx)("p",{children:"I have started with Java. But I also use Javascript to make website beautiful."}),Object(n.jsx)("div",{className:"row",children:[{header:"Back end",body:"Create business with Java. Using Spring framework to create faster",css:"fa fa-desktop"},{header:"Front end",body:"Create wonderful website UI/UX with Html/css. Use Javascript to build it easier",css:"fa fa-css3"},{header:"Other",body:"Using Excel, VBA to create testcase quickly. Use word to create document",css:"fa fa-lightbulb-o"}].map((function(e,t){return Object(n.jsx)(y,Object(O.a)({},e),t)}))})]})})}}]),a}(c.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"slideShowFooter",children:[Object(n.jsx)("h1",{children:" Hi, I'm Luat"}),Object(n.jsx)("p",{children:"I am a funny, extroverts people.  I like to help every one. I like to go on a trip around Viet Nam"})]})}}]),a}(c.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"slideShow",children:[Object(n.jsxs)("div",{id:"carouselExampleIndicators",className:"slideShowDetail carousel slide","data-ride":"carousel",children:[Object(n.jsxs)("div",{className:"carousel-inner",children:[Object(n.jsxs)("div",{className:"carousel-item active",children:[Object(n.jsx)("h2",{children:"JAVASCRIPT"}),Object(n.jsx)("p",{children:"I develop website using Bootstrap, ReactJS, ..."})]}),Object(n.jsxs)("div",{className:"carousel-item",children:[Object(n.jsx)("h2",{children:"JAVA, NODEJS"}),Object(n.jsx)("p",{children:"I develop website using Spring, Strut1, Express,..."})]}),Object(n.jsxs)("div",{className:"carousel-item",children:[Object(n.jsx)("h2",{children:"OTHERS"}),Object(n.jsx)("p",{children:"Create testcase with Excel and use VBA to auto test it..."})]})]}),Object(n.jsxs)("ol",{className:"carouselBtn",children:[Object(n.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),Object(n.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),Object(n.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})]})]}),Object(n.jsx)("img",{src:"https://i.imgur.com/DKEPdzi.jpg",alt:"banner",width:"100%"}),Object(n.jsx)(k,{})]})}}]),a}(c.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).changeStateItem=function(t){var a=e.props;(0,e.props.changeState)(a.id)},e}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this.props;return this.props.currentFilter===t.id&&(e={backgroundColor:"#CC4646",color:"#f2f3ff"}),Object(n.jsx)("li",{className:"liFilter",children:Object(n.jsx)("p",{className:"current btnFilter btn-small","data-filter":"*",onClick:this.changeStateItem,style:e,children:Object(n.jsx)("span",{children:t.value})})})}}]),a}(c.a.Component),C=a(13),I=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t="awesome-image"+e.id;return Object(n.jsx)("div",{className:"col-md-4 projectItemAll",children:Object(n.jsxs)("div",{className:"projectItem",children:[Object(n.jsx)("span",{className:"divImgItemSpan",children:Object(n.jsx)("h5",{children:e.name})}),Object(n.jsx)("div",{className:"awesome-component",children:Object(n.jsx)(C.ZoomerImage,{zoomId:t,imgAlt:"Awesome Image",imgTitle:e.name,imgSrc:e.img})})]})})}}]),a}(c.a.Component),J=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.listProjects;return Object(n.jsx)("div",{className:"projectsImageList row",children:e.map((function(e,t){return Object(n.jsx)(I,Object(O.a)({},e),t)}))})}}]),a}(c.a.Component),F=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeState=function(e){n.setState({currentFilter:e})},n.state={currentFilter:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[{id:1,group:1,name:"Rest API with Spring Boot",url:"https://github.com/LuatPT/api",img:"https://www.seobility.net/en/wiki/images/f/f1/Rest-API.png"},{id:2,group:1,name:"Work Manager website with Spring MVC",url:"https://github.com/LuatPT/WorkManager",img:"https://lh3.googleusercontent.com/Yao-TQedpE2m2Rpaa6nW0svJ1WAmgbrjyvGz-ZdJ1-vvquJfUBJ2BPp4M11NOy2TbJeJtRyP9bRLa5t6KewlHhxg=w640-h400-e365-rj-sc0x00ffffff"},{id:3,group:1,name:"Supplement website with ReactJs, Redux, NodeJs BE",url:"https://github.com/LuatPT/WheyStore",img:"https://i.imgur.com/tOumlZV.png"},{id:4,group:1,name:"Face Recognition with React ,Redux BE",url:"https://github.com/LuatPT/FaceServer",img:"http://i.imgflip.com/4v3e4k.gif"},{id:5,group:2,name:"Supplement website with ReactJs, Redux and NodeJs FE",url:"https://github.com/LuatPT/WheyStore_FE",img:"https://i.imgur.com/tOumlZV.png"},{id:6,group:2,name:"Face Recognition with React ,Redux FE",url:"https://github.com/LuatPT/FaceMe",img:"http://i.imgflip.com/4v3e4k.gif"},{id:7,group:3,name:"Eng-VN dictionary app with C#",url:"https://github.com/LuatPT/EN_VN_Dictionary",img:"https://i.imgur.com/U8UAYNP.png"},{id:8,group:3,name:"Weather forecast software with Android",url:"https://github.com/LuatPT/App_Weather",img:"https://i.imgur.com/rEnYX19.png"}];return 0!==this.state.currentFilter&&(t=t.filter((function(t){return t.group===e.state.currentFilter}))),Object(n.jsxs)("div",{className:"projectsBody",children:[Object(n.jsx)("nav",{className:"text-center navFilter",children:Object(n.jsx)("ul",{className:"row ulFilter",children:[{id:0,value:"All"},{id:1,value:"BackEnd"},{id:2,value:"FrontEnd"},{id:3,value:"University"}].map((function(t,a){return Object(n.jsx)(S,Object(O.a)({currentFilter:e.state.currentFilter,changeState:e.changeState},t),a)}))})}),Object(n.jsx)(J,{currentState:this.state.currentFilter,listProjects:t})]})}}]),a}(c.a.Component),P=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"projectsHeader",children:[Object(n.jsx)("h2",{children:"Projects"}),Object(n.jsx)("p",{children:"When I was a student, I maked some software to study in freetime. And now, I still keep this habbit."}),Object(n.jsx)("p",{children:"I worked about 8 hours in my current company. I create pet project and practice every night. I love it."})]})}}]),a}(c.a.Component),B=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"projects",id:"Projects",children:[Object(n.jsx)(P,{}),Object(n.jsx)(F,{})]})}}]),a}(c.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props;return Object(n.jsxs)("div",{className:"skillItemValue row",children:[Object(n.jsx)("p",{className:"col-md-4",children:e.value}),Object(n.jsx)("div",{className:"progress col-md-8",children:Object(n.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:{width:e.percent+"%"},children:Object(n.jsx)("span",{className:"sr-only"})})})]})}}]),a}(c.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.listSkill.filter((function(e){return e.group===t}));return Object(n.jsx)("div",{className:"skillItemBody",children:a.map((function(e,t){return Object(n.jsx)(E,Object(O.a)({},e),t)}))})}}]),a}(c.a.Component),T=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props;return Object(n.jsxs)("div",{className:"skillItemHeader col-md-4",children:[Object(n.jsxs)("div",{className:"heading text-center",children:[Object(n.jsx)("h2",{children:e.header}),Object(n.jsx)("p",{children:e.content})]}),Object(n.jsx)(M,{index:e.id,listSkill:[{id:1,group:1,value:"Java ",percent:80},{id:2,group:1,value:"Spring ",percent:70},{id:3,group:1,value:"Strut1 ",percent:50},{id:4,group:2,value:"HTML5/CSS3 ",percent:80},{id:5,group:2,value:"JavaScript ",percent:70},{id:6,group:1,value:"NodeJs ",percent:60},{id:7,group:2,value:"ReactJs ",percent:70},{id:8,group:3,value:"Excel ",percent:70},{id:9,group:3,value:"Word ",percent:70},{id:10,group:3,value:"VBA ",percent:50}]})]})}}]),a}(c.a.Component),A=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"skills",id:"Skills",children:[Object(n.jsxs)("div",{className:"heading text-center",children:[Object(n.jsx)("h2",{children:"My Skills"}),Object(n.jsx)("p",{children:"I'm a backend developer. But I have a little knowledge about front end. Please refer it below."})]}),Object(n.jsx)("div",{className:"skillItemHeader row",children:[{id:1,header:"Back End Skills",content:"I worked with Java about 1 year. I have used Strut1, Spring Framework for project."},{id:2,header:"Front End Skills",content:"I have knowledge with Javascript. I have used NodeJs, ReactJs with Redux(to manage state). "},{id:3,header:"Others Skills",content:"With testing, I used VBA to create and execute testcase faster."}].map((function(e,t){return Object(n.jsx)(T,Object(O.a)({},e),t)}))})]})}}]),a}(c.a.Component),V=a(7),L=(a(11),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("svg",{className:"jss74",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:[Object(n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(n.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"})]})}}]),a}(c.a.Component)),R=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("svg",{className:"jss74",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:[Object(n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(n.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})]})}}]),a}(c.a.Component),H=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props;return Object(n.jsxs)(V.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.date,iconStyle:{background:"study"===e.group?"rgb(245, 0, 87)":"rgb(33, 150, 243)",color:"#fff"},icon:"study"===e.group?Object(n.jsx)(L,{}):Object(n.jsx)(R,{}),children:[Object(n.jsx)("h3",{className:"vertical-timeline-element-title",children:e.company}),Object(n.jsx)("b",{className:"vertical-timeline-element-subtitle",children:e.address}),Object(n.jsx)("p",{style:{color:"red"},children:e.work}),Object(n.jsx)("p",{children:e.detail})]})}}]),a}(c.a.Component),U=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"experiences",id:"Experience",children:[Object(n.jsxs)("div",{className:"heading text-center",children:[Object(n.jsx)("h2",{children:"Professional Experience"}),Object(n.jsx)("p",{children:"Below is my experiences in the past"})]}),Object(n.jsx)(V.VerticalTimeline,{children:[{id:1,group:"study",date:"2013 - 2019",company:"Vinh University",address:"Vinh City, Nghe An",work:"Student",detail:"Study C/C++, Java, C#, Html/css"},{id:2,group:"work",date:"10/2019 - 02/2020",company:"FPT Sofware",address:"Da Nang City",work:"Fresher",detail:"Train with Java and Struts Framework.Train with ReactJs and NodeJs"},{id:3,group:"work",date:"03/2020 - 06/2020",company:"FPT Sofware",address:"Da Nang City",work:"Backend Developer",detail:"Work with Spring, VueJs (3 month)"},{id:4,group:"work",date:"06/2020 - Now",company:"FPT Sofware",address:"Da Nang City",work:"Backend Developer",detail:" Coding Java with requirement from Japan.Use VBA to create and execute testcase faster "}].map((function(e,t){return Object(n.jsx)(H,Object(O.a)({},e),t)}))})]})}}]),a}(c.a.Component);var D=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(f,{}),Object(n.jsx)(N,{}),Object(n.jsx)(w,{}),Object(n.jsx)(A,{}),Object(n.jsx)(U,{}),Object(n.jsx)(B,{}),Object(n.jsx)(h,{})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),W()}},[[26,1,2]]]);
//# sourceMappingURL=main.62ec012e.chunk.js.map