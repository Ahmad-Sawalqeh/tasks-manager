(this["webpackJsonptasks-manager"]=this["webpackJsonptasks-manager"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a(2),s=(a(23),a(24),a(25),a(6)),i=a(1),u={tasks:[{id:0x7894c87543560c00,value:"create sitemap sketch, wireframe and mock-up.",currentStatus:{number:3,state:"completed"},isEditing:!1},{id:8688789987545455e4,value:"select technoogies stack (programming languages, frameworks and CMS).",currentStatus:{number:3,state:"completed"},isEditing:!1},{id:6576568657545454e4,value:"create colorfull page layouts and gets client's feedback also change the layout if required, test and upload the website to server.",currentStatus:{number:1,state:"In-Progress"},isEditing:!1},{id:6576564787884876e5,value:"take 1 hour break before starting of building the initial website interface.",currentStatus:{number:2,state:"canceled"},isEditing:!1},{id:6576564787884454e5,value:"build website by adding special features and interactivity.",currentStatus:{number:0,state:"Not-Started"},isEditing:!1},{id:6576589789988445e6,value:"get content ready with the power of SEO.",currentStatus:{number:1,state:"In-Progress"},isEditing:!1},{id:6578889789988445e6,value:"fix bugs ASAP and keep it up to date.",currentStatus:{number:0,state:"Not-Started"},isEditing:!1}]},o={userInput:"",list:u.tasks,wantedListToShow:u.tasks,status:["Not-Started","In-Progress","canceled","completed"],edit:{userInput:"",itemId:0},counter:{deleted:2,edited:4,NotStarted:2,InProgress:2,canceled:1,completed:2}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"setUserInput":return Object(i.a)(Object(i.a)({},e),{},{userInput:n});case"setList":return Object(i.a)(Object(i.a)({},e),{},{list:n});case"setEdit":return Object(i.a)(Object(i.a)({},e),{},{edit:n});case"setWantedListToShow":return Object(i.a)(Object(i.a)({},e),{},{wantedListToShow:n});case"setCounter":return Object(i.a)(Object(i.a)({},e),{},{counter:n});default:return e}},d=Object(s.b)(m),b=(a(26),function(){var e=Object(l.c)((function(e){return e})),t=e.list,a=e.counter,n=a.deleted,c=a.edited,s=a.NotStarted,i=a.InProgress,u=a.canceled,o=a.completed;return r.a.createElement("div",{className:"bg"},r.a.createElement("h2",{className:"font-weight-bold text-left my-5"},"Tasks statistics"),r.a.createElement("div",null,r.a.createElement("h5",{className:"font-weight-bold text-left my-3"},"General :"),r.a.createElement("p",null,"Number of Tasks : ",t.length),r.a.createElement("p",null,"Deleted Tasks : ",n),r.a.createElement("p",null,"Edited Tasks : ",c)),r.a.createElement("hr",{className:"bg-light my-3"}),r.a.createElement("div",null,r.a.createElement("h5",{className:"font-weight-bold text-left my-3"},"Tasks Status :"),r.a.createElement("div",{className:"mb-2"},r.a.createElement("span",{className:"statisticSpan not-started-span"}),r.a.createElement("span",null,"Not Started : ",s),r.a.createElement("br",null)),r.a.createElement("div",{className:"mb-2"},r.a.createElement("span",{className:"statisticSpan in-progress-span"}),r.a.createElement("span",null,"In Progress : ",i),r.a.createElement("br",null)),r.a.createElement("div",{className:"mb-2"},r.a.createElement("span",{className:"statisticSpan canceled-span"}),r.a.createElement("span",null,"Canceled : ",u),r.a.createElement("br",null)),r.a.createElement("div",{className:"mb-2"},r.a.createElement("span",{className:"statisticSpan completed-span"}),r.a.createElement("span",null,"Completed : ",o))))}),f=(a(27),function(e){return{type:"setUserInput",payload:e}}),p=function(e){return{type:"setList",payload:e}},E=function(e){return{type:"setCounter",payload:e}},g=function(e){return{type:"setEdit",payload:e}},N=function(e){return{type:"setWantedListToShow",payload:e}},h=(a(28),function(){var e=Object(l.c)((function(e){return e})).list,t=Object(l.b)();function a(a){t(N("all"===a?e:e.filter((function(e){return a===e.currentStatus.state}))))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("all")}},"list"),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("Not-Started")}},"Not-Started"),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("In-Progress")}},"In-Progress"),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("canceled")}},"Canceled"),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("completed")}},"Completed"))}),v=a(3),j=a(36),S=(a(29),function(){var e=Object(l.c)((function(e){return e})),t=e.userInput,a=e.list,n=e.counter,c=Object(l.b)();return r.a.createElement("div",{className:"container card-body"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==t){var r,l=Object(v.a)(a),s={id:Object(j.a)(),value:t,currentStatus:{number:0,state:"Not-Started"},isEditing:!1};l.push(s),r=Object(i.a)(Object(i.a)({},n),{},{NotStarted:n.NotStarted+1}),c(E(r)),c(p(l)),c(N(l)),c(f(""))}},className:"d-flex justify-content-between"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text color text-white"},r.a.createElement("i",{className:"fas fa-book"}))),r.a.createElement("input",{className:"form-control",onChange:function(e){var t=e.target.value;c(f(t))},value:t,type:"text",placeholder:"+ Add New Task here ..."}))))}),k=a(4),O=(a(30),function(e){var t=e.id,a=e.borderColor,n=Object(l.c)((function(e){return e})),c=n.list,s=n.edit,u=n.counter,o=Object(l.b)();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a,n=Object(v.a)(c),r=s.userInput,l=n.map((function(e){return e.id===t&&(a=e.value,e.isEditing=!e.isEditing,e.value=s.userInput),e}));if(a!==r){var m=Object(i.a)(Object(i.a)({},u),{},{edited:u.edited+1});o(E(m))}o(p(l)),o(N(l)),o(g({userInput:"",itemId:0}))},className:"d-flex justify-content-between"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"my-auto mx-1 font-weight-bold text-center"},"Editing Task"),r.a.createElement("div",{className:"input-group-text iconColor".concat(a," text-white")},r.a.createElement("i",{className:"far fa-edit editColor"}))),r.a.createElement("input",{className:"form-control edit ".concat(a),onChange:function(e){var a={userInput:e.target.value,itemId:t};o(g(a))},value:s.userInput,type:"text",placeholder:"Edit Task here ..."}))))}),w=(a(31),function(){var e=Object(l.c)((function(e){return e})),t=e.list,a=e.wantedListToShow,n=e.status,c=e.counter,s=Object(l.b)();return r.a.createElement(r.a.Fragment,null,!1===Boolean(a.filter((function(e){return e.currentStatus.state})).length)?r.a.createElement("p",{className:"lead text-center font-weight-bold"},"There is No tasks at this moment"):r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"py-2 my-1 d-flex justify-content-between"},r.a.createElement("span",{className:"taskHead font-weight-bold my-auto ml-3"},"Task"),r.a.createElement("span",{className:"statusHead font-weight-bold text-center"},"Status"),r.a.createElement("span",{className:"editHead font-weight-bold text-center"},"Edit"),r.a.createElement("span",{className:"removeHead font-weight-bold text-center"},"Remove")),a.map((function(e,a){return r.a.createElement("li",{key:e.id,className:"leftBorder".concat(e.currentStatus.state," ").concat("canceled"===e.currentStatus.state?"alert-danger":""," ").concat(e.isEditing?"highlight":""," item py-2 my-1 d-flex justify-content-between")},e.isEditing?r.a.createElement(O,{id:e.id,borderColor:e.currentStatus.state}):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"task my-auto mx-3"},a+1,"- ",e.value),r.a.createElement("span",{className:"".concat(e.currentStatus.state," text-white font-weight-bold bg-dark status py-1 text-center"),onClick:function(){return function(e){var a,r,l,u,o=Object(v.a)(t).map((function(t){if(t.id===e){var a=3===t.currentStatus.number?0:t.currentStatus.number+1;t.currentStatus={number:a,state:n[a]},0===a&&(a=4),l=t.currentStatus.state.split("-").join(""),u=n[a-1].split("-").join("")}return t}));r=Object(i.a)(Object(i.a)({},c),{},(a={},Object(k.a)(a,l,c[l]+1),Object(k.a)(a,u,c[u]-1),a)),s(E(r)),s(p(o)),s(N(o))}(e.id)}},e.currentStatus.state),r.a.createElement("i",{className:"far fa-edit my-auto mx-5 font-weight-bold text-center",onClick:function(){return function(e){var a,n=Object(v.a)(t);if(n.some((function(e){return e.isEditing}))){a=n.map((function(e){return e.isEditing&&(e.isEditing=!e.isEditing),e}));s(p(a)),s(g({userInput:"",itemId:0})),n=a}var r=n.find((function(t){return t.id===e})),c=n.map((function(t){return t.id===e&&(t.isEditing=!t.isEditing),t})),l={userInput:r.value,itemId:r.id};s(p(c)),s(g(l))}(e.id)}}),r.a.createElement("i",{className:"fas fa-trash my-auto mx-5 font-weight-bold text-center",onClick:function(){return function(e){var a=Object(v.a)(t),n=a.filter((function(t){return t.id!==e})),r=a.filter((function(t){return t.id===e}))[0].currentStatus.state.split("-").join(""),l=Object(i.a)(Object(i.a)({},c),{},Object(k.a)({deleted:c.deleted+1},r,c[r]-1));s(E(l)),s(p(n)),s(N(n))}(e.id)}})))}))))}),y=(a(32),function(){var e=Object(l.c)((function(e){return e})),t=e.list,a=e.wantedListToShow,n=e.counter,c=Object(l.b)();return r.a.createElement(r.a.Fragment,null,!0===Boolean(a.filter((function(e){return e.currentStatus.state})).length)&&r.a.createElement("div",{className:"text-right m-3"},a.some((function(e){return"completed"===e.currentStatus.state}))&&r.a.createElement("button",{className:"btn btn-dark m-1",onClick:function(){var e,a=t.filter((function(e){return"completed"!==e.currentStatus.state}));e=Object(i.a)(Object(i.a)({},n),{},{deleted:n.deleted+(t.length-a.length),completed:0}),c(E(e)),c(p(a)),c(N(a))}},"Remove Completed Tasks"),r.a.createElement("button",{className:"btn btn-dark m-1",onClick:function(){var e,a=Object(v.a)(t).map((function(e){return e.currentStatus={number:3,state:"completed"},e}));e=Object(i.a)(Object(i.a)({},n),{},{NotStarted:0,InProgress:0,canceled:0,completed:n.completed+(t.length-n.completed)}),c(E(e)),c(p(a)),c(N(a))}},"Make all Tasks Completed"),r.a.createElement("button",{className:"btn btn-dark m-1",onClick:function(){var e,a=t.filter((function(e){return e.currentStatus.state="canceled"}));e=Object(i.a)(Object(i.a)({},n),{},{NotStarted:0,InProgress:0,canceled:n.canceled+(t.length-n.canceled),completed:0}),c(E(e)),c(p(a)),c(N(a))}},"Cancel all Tasks"),r.a.createElement("button",{className:"btn btn-dark m-1",onClick:function(){var e=Object(i.a)(Object(i.a)({},n),{},{deleted:n.deleted+t.length,NotStarted:0,InProgress:0,canceled:0,completed:0});c(E(e)),c(p([])),c(N([]))}},"Clear List ",r.a.createElement("i",{className:"fas fa-trash all"}))))}),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"font-weight-bold text-center my-4"},"Tasks Manager"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12 pr-0"},r.a.createElement("h3",{className:"ml-3 font-weight-bold"},"Tasks Board")),r.a.createElement("div",{className:"col-md-9 col-sm-12 p-0"},r.a.createElement(h,null))),r.a.createElement(S,null),r.a.createElement(w,null),r.a.createElement(y,null))};a(33);var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container bg-light mt-3 rounded"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"bg col-md-3 p-3 text-light"},r.a.createElement(b,null)),r.a.createElement("div",{className:"col-md-9 py-3 px-2"},r.a.createElement(x,null)))))};function C(){return r.a.createElement(l.a,{store:d},r.a.createElement(I,null))}Object(c.render)(r.a.createElement(C,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.607f92f5.chunk.js.map