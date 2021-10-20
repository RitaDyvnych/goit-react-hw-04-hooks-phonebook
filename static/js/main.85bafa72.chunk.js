(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={title:"contacts_title__3KfmP",form:"contacts_form__2skxG",input:"contacts_input__1nuNS",btn:"contacts_btn__1JbCg",btnDelete:"contacts_btnDelete__3diS_",list:"contacts_list__2PGH1",label:"contacts_label__1INRo"}},16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(8),i=n.n(r),s=(n(16),n(10)),o=n(3),l=n(4),u=n(6),m=n(5),d=(n(17),n(20)),h=n(1),b=n.n(h),p=n(9),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputNameId=Object(d.a)(),t.inputNumberId=Object(d.a)(),t.handleChangeInput=function(e){t.setState(Object(p.a)({},e.target.name,e.target.value))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),t.props.handleSubmit(t.state),t.setState({name:"",number:""})},children:[Object(j.jsx)("label",{htmlFor:this.inputNameId,children:"Name"}),Object(j.jsx)("input",{className:b.a.input,id:this.inputNameId,value:this.state.name,autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChangeInput}),Object(j.jsx)("label",{htmlFor:this.inputNumberId,children:"Number"}),Object(j.jsx)("input",{className:b.a.input,id:this.inputNumberId,value:this.state.number,autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChangeInput}),Object(j.jsx)("button",{type:"submit",className:b.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),O=f,g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("ul",{className:b.a.list,children:this.props.contacts.map((function(e){return Object(j.jsxs)("li",{className:b.a.listItem,children:[e.name,": ",e.number,Object(j.jsx)("button",{type:"button",className:b.a.btnDelete,id:e.id,onClick:t.props.handleDelete,children:"Delete"})]},e.id)}))})}}]),n}(a.Component),v=g,C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{htmlFor:"find",className:b.a.label,children:"Find contacts by name"}),Object(j.jsx)("input",{className:b.a.input,autoComplete:"off",id:"find",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]",onChange:function(e){e.preventDefault(),t.props.handleChange(e)}})]})}}]),n}(a.Component),x=C,N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:[]},t.filterStatus=!1,t.handleSubmit=function(e){var n=e.name,a=e.number;t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{name:n,number:a,id:Object(d.a)()}])}}))},t.handleChange=function(e){var n=new RegExp("^".concat(e.target.value.toLowerCase()));t.setState({filter:n})},t.handleFilter=function(){return t.state.contacts.filter((function(e){for(var n=e.name.toLowerCase().split(" "),a=0;a<n.length;a++)if(null!==n[a].toLowerCase().match(t.state.filter))return!0;return!1}))},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(j.jsx)(O,{handleSubmit:this.handleSubmit,name:this.state.name}),Object(j.jsx)("h2",{className:b.a.title,children:"Contacts"}),Object(j.jsx)(x,{handleChange:this.handleChange}),Object(j.jsx)(v,{contacts:this.handleFilter(),handleDelete:this.handleDelete})]})}}]),n}(a.Component),_=N;i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.85bafa72.chunk.js.map