(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(6),c=a.n(r);a(16),a(17);function o(e){let{title:t="Set title here",aboutText:a="About",mode:l="light",toggleMode:r}=e;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(l," bg-").concat(l)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},t),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 "},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),n.a.createElement("div",{className:"form-check form-switch"},n.a.createElement("input",{className:"form-check-input",onClick:r,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{color:"light"===l?"black":"white"}},"light"===l?"Dark Mode":"Light Mode"," ")))))}function s(e){const[t,a]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:t,onChange:e=>{console.log("on change"),a(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"rgb(36 54 72)":"white",color:"dark"===e.mode?"white":"black"}})),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{console.log("Uppercase was clicked"+t);let l=t.toUpperCase();a(l),e.showAlert("Converted to uppercase","success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{console.log("Lowercase was clicked"+t);let l=t.toLowerCase();a(l),e.showAlert("Converted to lowercase","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{console.log("Lowercase was clicked"+t);a(""),e.showAlert("Text cleared","success")}},"Clear Text")),n.a.createElement("div",{className:"container my-3"},n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",null,t.split(" ").filter(e=>""!==e.trim()).length,": words, ",t.length," Characters"),n.a.createElement("p",null,.008*t.split(" ").length," Minutes read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,t)))}o.defaultProps={title:"Set title here",aboutText:"About",mode:"light"};var m=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)),": ",e.alert.msg)},i=a(7),u=a(2);var d=function(){const[e,t]=Object(l.useState)("light"),[a,r]=Object(l.useState)(null),c=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{basename:"/textutils"},n.a.createElement(o,{title:"TextUtils",aboutText:"About Us",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="rgb(53, 53, 53)",document.body.style.color="white",c("Dark mode has been enabled","success")):(t("light"),document.body.style.backgroundColor="white",document.body.style.color="black",c("Light mode has been enabled","success"))}}),n.a.createElement(m,{alert:a}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/",element:n.a.createElement(s,{showAlert:c,heading:"Enter the text to analyze below",mode:e})})))))};var b=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null))),b()},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.4883f5fd.chunk.js.map