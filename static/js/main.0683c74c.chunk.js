(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{104:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(22),l=a.n(i),c=a(5),r=a(6),o=a(8),u=a(7),d=a(9),m=(a(54),a(44)),p=(a(55),"LISTADD"),h="LISTREMOVE",v="CARDADD",f="COPYLIST",b="MOVELIST",E="CARDDES",C="CARDCOM",x=function(t){return{type:p,data:t}},g=function(t){return{type:h,data:t}},S=function(t){return{type:v,data:t}},y=function(t){return{type:f,data:t}},N=function(t,e){return{type:b,data:t,listdata:e}},D=function(t,e,a){return{type:E,data:t,listno:e,cardno:a}},O=function(t,e,a){return{type:C,data:t,listno:e,cardno:a}},j={maxNo:1,lists:[]};var k=Object(m.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0,a=t.lists;switch(e.type){case p:var n=e.data,s=t.maxNo;return a.push({listno:s,listtitle:n,cardMaxno:1,cards:[]}),t.maxNo=s+1,t;case h:a.map((function(a,n){a.listno===e.data.listno&&t.lists.splice(n,1)}));for(var i=0;i<a.length;i++)a[i].listno=i+1;return t;case v:var l=e.data.text,c=a[e.data.listno-1].cardMaxno;return a[e.data.listno-1].cards.push({cardNo:c,cardtitle:l}),a[e.data.listno-1].cardMaxno=c+1,t;case f:var r=e.data.listtitle,o=e.data.cards,u=t.maxNo;return a.push({listno:u,listtitle:r,cardMaxno:o.length+1,cards:o}),t.maxNo=u+1,t;case b:var d=a.splice(e.listdata-1,1);a.splice(e.data-1,0,{listno:d[0].listno,listtitle:d[0].listtitle,cardMaxno:d[0].cardMaxno,cards:d[0].cards});for(i=0;i<a.length;i++)a[i].listno=i+1;return t;case E:return a[e.listno-1].cards[e.cardno-1].carddes=e.data,t;case C:return a[e.listno-1].cards[e.cardno-1].push({cardcom:e.data}),t;default:return t}})),w=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).handleChange=function(t){a.setState({text:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),k.dispatch(x(a.state.text)),a.setState({condition:!0,text:""})},a.state={condition:!0,test:!1,text:""},a}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=null;return!0===this.state.condition?e="listadd":!1===this.state.condition&&(e="liststate"),s.a.createElement("div",{className:e},!0===this.state.condition?s.a.createElement("div",{className:"addbtn",type:"button",title:"addlist",onClick:function(e){e.preventDefault(),t.setState({condition:!1})}},"\uc77c\uc815 \ucd94\uac00"):s.a.createElement("form",{className:"addform",onSubmit:this.handleSubmit},s.a.createElement("label",null,s.a.createElement("input",{className:"listinput",type:"text",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:this.state.text,onChange:this.handleChange})),s.a.createElement("input",{className:"addinput",type:"submit",value:"\ucd94\uac00"}),s.a.createElement("div",{className:"addexit",onClick:function(e){e.preventDefault(),t.setState({condition:!0,text:""})}},"x")))}}]),e}(n.Component),L=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).handleChange=function(t){a.setState({text:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),k.dispatch(S(a.state)),a.setState({condition:!0,text:""})},a.btnCange=function(){var t=null;return!0===a.state.condition?t=s.a.createElement("button",{type:"button",title:"addcard",onClick:function(t){t.preventDefault(),a.setState({condition:!1})}},"add card"):!1===a.state.condition&&(t=s.a.createElement("div",null,s.a.createElement("form",{onSubmit:a.handleSubmit},s.a.createElement("label",null,s.a.createElement("input",{type:"text",placeholder:"",value:a.state.text,onChange:a.handleChange})),s.a.createElement("input",{type:"submit",value:"submit"})))),t},a.state={condition:!0,test:!1,text:"",listno:a.props.listno,rowsvalue:2},a}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=this.state.text.length;if(e/this.state.rowsvalue>=34){var a=this.state.rowsvalue;this.setState({rowsvalue:a+1})}else if(35*(this.state.rowsvalue-2)>e){var n=e%this.state.rowsvalue;this.setState({rowsvalue:n})}return s.a.createElement("div",{className:"cardarea"},!0===this.state.condition?s.a.createElement("div",{className:"addcard",type:"button",title:"addcard",onClick:function(e){e.preventDefault(),t.setState({condition:!1})}},"\uce74\ub4dc \ucd94\uac00"):s.a.createElement("form",{className:"addform",onSubmit:this.handleSubmit},s.a.createElement("label",null,s.a.createElement("textarea",{className:"listinput",type:"text",placeholder:"\uce74\ub4dc \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",cols:"35",rows:this.state.rowsvalue,value:this.state.text,onChange:this.handleChange})),s.a.createElement("input",{className:"addinput",type:"submit",value:"\uce74\ub4dc \ucd94\uac00"}),s.a.createElement("div",{className:"addexit",onClick:function(e){e.preventDefault(),t.setState({condition:!0,text:""})}},"x")))}}]),e}(n.Component),M=a(23),T=a(46),I=a.n(T),P=(a(103),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).textChange=function(t){"textarea"===t.target.id?a.setState({cardDescrip:t.target.value}):"comments"===t.target.id&&a.setState({cardComment:t.target.value})},a.textSubmit=function(t){t.preventDefault(),k.dispatch(D(a.state.cardDescrip,a.props.listno,a.props.cardNo)),a.setState({descripstate:!1})},a.comSubmit=function(t){t.preventDefault(),k.dispatch(O(a.state.cardComment,a.props.listno,a.props.cardNo)),a.setState({Comments:!1})},a.dateChange=function(t){a.setState({Date:t})},a.state={cardtitle:a.props.cardtitle,cardDescrip:"",cardComment:"",descripstate:!0,Comments:!0,timepicker:!0,rowsvalue:0,Date:new Date},a.dateChange=a.dateChange.bind(Object(M.a)(a)),a}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=this.state.cardDescrip.length;if(e/this.state.rowsvalue>=40){var a=this.state.rowsvalue;this.setState({rowsvalue:a+1})}else if(40*(this.state.rowsvalue-1)>e){var n=e%this.state.rowsvalue;this.setState({rowsvalue:n})}var i=this.state.Date,l=i.getMonth()+1,c=i.getFullYear()+"/"+l+"/"+i.getDate();return s.a.createElement("div",{className:"cardsetting"},s.a.createElement("div",null,s.a.createElement("img",{src:"./icon1.PNG"}),this.state.cardtitle),s.a.createElement("img",{src:"./icon1.PNG"}),!0===this.state.timepicker?s.a.createElement("div",{onClick:function(e){e.preventDefault(),t.setState({timepicker:!1})}},c):s.a.createElement("div",{className:"timePicker"},s.a.createElement("input",{value:c}),s.a.createElement(I.a,{selected:this.state.Date,onChange:this.dateChange,inline:!0,showTimeSelect:!0}),s.a.createElement("button",{onClick:function(e){e.preventDefault(),t.setState({timepicker:!0})}},"\ud655\uc778")),s.a.createElement("div",null,s.a.createElement("img",{src:"./icon1.PNG"}),!0===this.state.descripstate?s.a.createElement("h2",{onClick:function(e){e.preventDefault(),t.setState({descripstate:!1})}},""===this.state.cardDescrip?s.a.createElement("div",null,"\uc124\uba85\uc744 \uc801\uc5b4\uc8fc\uc138\uc694"):s.a.createElement("div",null,this.state.cardDescrip)):s.a.createElement("form",{onSubmit:this.textSubmit},s.a.createElement("label",null,s.a.createElement("textarea",{id:"textarea",cols:"40",rows:this.state.rowsvalue,onChange:this.textChange})),s.a.createElement("input",{type:"submit",value:"\ucd94\uac00"}))),s.a.createElement("div",null,s.a.createElement("img",{src:"./icon1.PNG"}),!0===this.state.Comments?s.a.createElement("h2",{onClick:function(e){e.preventDefault(),t.setState({Comments:!1})}},"\uc785\ub825\ud574\ub77c"):s.a.createElement("form",{onSubmit:this.comSubmit},s.a.createElement("label",null,s.a.createElement("textarea",{id:"comments",cols:"40",rows:this.state.rowsvalue,onChange:this.textChange})),s.a.createElement("input",{type:"submit",value:"\ucd94\uac00",onClick:function(e){e.preventDefault(),t.setState({Comments:!0})}}))))}}]),e}(n.Component)),A=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={cardtype:!0},a}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;console.log(this.props);var e=this.props.cards,a=this.props.listno;return e.map((function(e){var n=e.cardNo,i=e.cardtitle;return s.a.createElement("div",{key:n},s.a.createElement("div",{className:"cardtext",onClick:function(e){e.preventDefault(),t.setState({cardtype:!1})}},i),!1===t.state.cardtype?s.a.createElement("div",{className:"boardbase"},s.a.createElement("div",{className:"cardboard"},s.a.createElement(P,{cardNo:n,cardtitle:i,listno:a}),s.a.createElement("div",{className:"cardexit",onClick:function(e){e.preventDefault(),t.setState({cardtype:!0})}},"X"))):s.a.createElement("div",null))}))}}]),e}(n.Component),G=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).changeType=function(t){t.preventDefault(),!0===a.state.menu?a.setState({menu:!1}):!1===a.state.menu&&a.setState({menu:!0})},a.archiveList=function(t){t.preventDefault(),k.dispatch(g(a.state.item)),a.setState({menu:!0})},a.addCard=function(){},a.copyList=function(t){t.preventDefault(),k.dispatch(y(a.state.item)),a.setState({menu:!0})},a.moveList=function(t){t.preventDefault();var e=document.getElementById("selbox");k.dispatch(N(e.value,a.props.item.listno)),a.setState({selectbox:!0})},a.state={storestate:k.getState(),item:a.props.item,index:a.props.index,menu:!0,selectbox:!0},a}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=this.state.storestate.lists.map((function(e){return e.listno===t.state.index+1?s.a.createElement("option",{key:e.listno,value:e.listno,selected:"selected"},e.listno,"(\ud604\uc7ac \ub9ac\uc2a4\ud2b8)"):s.a.createElement("option",{key:e.listno,value:e.listno},e.listno)})),a=this.props.item.listno-1;console.log(a);var n={left:240+280*a+"px"},i={left:246+280*a+"px"};return s.a.createElement("div",null,s.a.createElement("div",{className:"listmenu",style:i,onClick:this.changeType},"..."),!1===this.state.menu?s.a.createElement("div",{className:"menu",style:n},s.a.createElement("div",{className:"menutitle"},"\ub9ac\uc2a4\ud2b8 \uad00\ub9ac"),s.a.createElement("div",{className:"menuexit",onClick:this.changeType},"X"),s.a.createElement("div",{className:"menubutton",type:"button",onClick:this.copyList},"\ub9ac\uc2a4\ud2b8 \ubcf5\uc0ac"),s.a.createElement("div",{className:"menubutton",type:"button",onClick:this.addCard},"\uce74\ub4dc \ucd94\uac00"),!0===this.state.selectbox?s.a.createElement("div",{className:"menubutton",type:"button",onClick:function(e){e.preventDefault(),t.setState({selectbox:!1})}},"\ub9ac\uc2a4\ud2b8 \uc774\ub3d9"):s.a.createElement("div",null,s.a.createElement("h2",null,"\uc6d0\ud558\ub294 \uc704\uce58\ub85c \uc774\ub3d9\ud574\uc8fc\uc138\uc694"),s.a.createElement("select",{id:"selbox",name:"selbox"},e),s.a.createElement("button",{onClick:this.moveList},"\uc774\ub3d9")),s.a.createElement("div",{className:"menubutton",type:"button",onClick:this.archiveList},"\uc77c\uc815 \uc644\ub8cc")):s.a.createElement("div",null))}}]),e}(n.Component),R=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).readList=function(){return a.state.listdata.lists.map((function(t,e){return s.a.createElement("div",{className:"listObject",key:t.listno},s.a.createElement("div",{className:"listname"},s.a.createElement("h2",null,t.listtitle)),s.a.createElement(G,{item:t,index:e}),s.a.createElement(A,{cards:t.cards,listno:t.listno}),s.a.createElement(L,{listno:t.listno}))}))},a.state={listdata:k.getState()},k.subscribe((function(){a.setState({listdata:k.getState()}),console.log(k.getState())})),a}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return this.readList()}}]),e}(n.Component),Y=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){document.title="YounCalendar"}},{key:"render",value:function(){return s.a.createElement("div",{className:"mainpage"},s.a.createElement("div",{className:"mainbar"},s.a.createElement("a",{href:"/",className:"logo"},s.a.createElement("div",null,s.a.createElement("span",{className:"logo1"}),s.a.createElement("span",{className:"logo2"})))),s.a.createElement("div",{className:"board"},s.a.createElement(R,null),s.a.createElement(w,null)))}}]),e}(n.Component);l.a.render(s.a.createElement(Y,null),document.getElementById("root"))},49:function(t,e,a){t.exports=a(104)},54:function(t,e,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.0683c74c.chunk.js.map