(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),u=a.n(r),l=(a(24),a(13)),c=a(8);a(25),a(26);function i(e){return o.a.createElement("div",{className:"card-wrapper"},o.a.createElement("form",{className:"card",name:"form",onSubmit:function(t){t.preventDefault(),e.addQuoteToArray(e.handleQuote,e.handleAuthor),e.setQuote({quote:"",author:""})}},o.a.createElement("textarea",{value:e.quote.quote,placeholder:e.initialFormState.quote,name:"quote",onChange:e.handleQuote}),o.a.createElement("input",{value:e.quote.author,placeholder:e.initialFormState.author,name:"authorName",onChange:e.handleAuthor}),o.a.createElement("button",{type:"submit"},"Submit")))}a(27);function s(e){var t=Object(n.useState)(0),a=Object(c.a)(t,2),r=a[0],u=a[1];return o.a.createElement("div",{className:"card-wrapper"},o.a.createElement("article",{className:"card"},o.a.createElement("h2",null,"Enjoy the quote:"),o.a.createElement("div",{className:"quote"},'"',e.quoteArray[r].quote,'"'),o.a.createElement("span",{className:"author"},"~",e.quoteArray[r].author,"."),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){r+1<e.quoteArray.length?u(r+1):u(0)}},"Next Quote")))}var h=[{quote:"As it now stands, this quote app does not save quotes between sessions. This is intentional. I hope you enjoy this mini portfolio piece.",author:"Joshua Pearson"},{quote:"The way to get started is to quit talking and begin doing",author:"Walt Disney"},{quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela"},{quote:"There is an inexorable law of nature in operation which decrees that no man can act with the purpose of destroying another\u2019s freedom without losing his own.",author:"H. Verlan Anderson"},{quote:"To compel a man to furnish funds for the propagation of ideas he disbelieves and abhors is sinful and tyrannical.",author:"Thomas Jefferson"},{quote:"Arbitrary power is most easily established on the ruins of liberty abused to licentiousness",author:"George Washington"}],m=a(9),d=a(5);a(28);var q=function(e){var t=e.quotesArray.map((function(e){return o.a.createElement("tr",{key:e.author},o.a.createElement("td",null,e.quote),o.a.createElement("td",null,e.author))}));return o.a.createElement("div",{className:"card-wrapper"},o.a.createElement("div",{className:"card"},o.a.createElement("p",null,"A table of all quotes currently in rotation:"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Quote"),o.a.createElement("th",null,"Author"))),o.a.createElement("tbody",null,t))))};var E=function(){var e=Object(n.useState)({quote:"",author:""}),t=Object(c.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)(Object(l.a)(h)),E=Object(c.a)(u,2),f=E[0],p=E[1],v=o.a.createElement(s,{quoteArray:f}),b=o.a.createElement(i,{handleQuote:function(e){r({quote:e.target.value,author:a.author})},handleAuthor:function(e){r({quote:a.quote,author:e.target.value})},addQuoteToArray:function(){p([].concat(Object(l.a)(f),[a]))},quote:a,initialFormState:{quote:"Enter your quote here",author:"Author here"},setQuote:r}),g=o.a.createElement(q,{quotesArray:f});return o.a.createElement(m.a,null,o.a.createElement("nav",{className:"topnav"},o.a.createElement("span",null,o.a.createElement(m.b,{exact:!0,to:"/react-quote-gen/",activeClassName:"is-active"},"Random Quotes")),o.a.createElement("span",null,o.a.createElement(m.b,{exact:!0,to:"/react-quote-gen/quotes-list",activeClassName:"is-active"},"List of Quotes"))),o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/react-quote-gen/"},v," ",b),o.a.createElement(d.a,{exact:!0,path:"/react-quote-gen/quotes-list"},g)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.41a95e31.chunk.js.map