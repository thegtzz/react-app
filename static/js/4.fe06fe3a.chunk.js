(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{286:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1pDwE",dialogItems:"Dialogs_dialogItems__18FfV",dialog:"Dialogs_dialog__3dmp9",active:"Dialogs_active__1GlqH",messages:"Dialogs_messages__3hvEc",message:"Dialogs_message__ENBoP"}},291:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(122),o=t(286),c=t.n(o),m=t(11),i=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:c.a.dialog+" "+c.a.active},s.a.createElement("img",{src:"https://f0.pngfuel.com/png/592/884/black-and-white-cartoon-character-programmer-computer-programming-computer-software-computer-icons-programming-language-avatar-png-clip-art.png",alt:""}),s.a.createElement(m.b,{to:a},e.name))},g=function(e){return s.a.createElement("div",{className:c.a.message},s.a.createElement("img",{src:"https://f0.pngfuel.com/png/592/884/black-and-white-cartoon-character-programmer-computer-programming-computer-software-computer-icons-programming-language-avatar-png-clip-art.png",alt:""}),e.message)},l=t(21),u=t(123),d=t(124),p=t(89),f=t(68),E=Object(p.a)("textarea"),_=Object(f.a)(50),b=Object(d.a)({form:"dialogSendMessage"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(u.a,{placeholder:"Type your message",name:"DialogMessage",component:E,validate:[f.b,_]}),s.a.createElement("div",null,s.a.createElement("button",null,"Send message")))})),v=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(i,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(g,{message:e.message,key:e.id})}));return e.isAuth?s.a.createElement("div",{className:c.a.dialogs},s.a.createElement("div",{className:c.a.dialogItems},t),s.a.createElement("div",{className:c.a.messages},n,s.a.createElement(b,{onSubmit:function(a){e.sendMessage(a.DialogMessage)}}))):s.a.createElement(l.a,{to:"/login"})},h=t(10),D=t(101),w=t(6);a.default=Object(w.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(r.a)(a))}}})),D.a)(v)}}]);
//# sourceMappingURL=4.fe06fe3a.chunk.js.map