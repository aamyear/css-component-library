/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-coy&languages=markup+css+clike+javascript&plugins=line-highlight+line-numbers+show-language+normalize-whitespace+toolbar+copy-to-clipboard+download-button */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,e={},M={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof W?new W(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function t(e,r){var a,n;switch(r=r||{},M.util.type(e)){case"Object":if(n=M.util.objId(e),r[n])return r[n];for(var i in a={},r[n]=a,e)e.hasOwnProperty(i)&&(a[i]=t(e[i],r));return a;case"Array":return n=M.util.objId(e),r[n]?r[n]:(a=[],r[n]=a,e.forEach(function(e,n){a[n]=t(e,r)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function(e,n){var t=M.util.clone(M.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(t,e,n,r){var a=(r=r||M.languages)[t],i={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);n.hasOwnProperty(l)||(i[l]=a[l])}var s=r[t];return r[t]=i,M.languages.DFS(M.languages,function(e,n){n===s&&e!=t&&(this[e]=i)}),i},DFS:function e(n,t,r,a){a=a||{};var i=M.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var o=n[l],s=M.util.type(o);"Object"!==s||a[i(o)]?"Array"!==s||a[i(o)]||(a[i(o)]=!0,e(o,t,l,a)):(a[i(o)]=!0,e(o,t,null,a))}}},plugins:{},highlightAll:function(e,n){M.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};M.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),M.hooks.run("before-all-elements-highlight",r);for(var a,i=0;a=r.elements[i++];)M.highlightElement(a,!0===n,r.callback)},highlightElement:function(e,n,t){var r=M.util.getLanguage(e),a=M.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var l={element:e,language:r,grammar:a,code:e.textContent};function o(e){l.highlightedCode=e,M.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,M.hooks.run("after-highlight",l),M.hooks.run("complete",l),t&&t.call(l.element)}if(M.hooks.run("before-sanity-check",l),(i=l.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!l.code)return M.hooks.run("complete",l),void(t&&t.call(l.element));if(M.hooks.run("before-highlight",l),l.grammar)if(n&&u.Worker){var s=new Worker(M.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(M.highlight(l.code,l.grammar,l.language));else o(M.util.encode(l.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return M.hooks.run("before-tokenize",r),r.tokens=M.tokenize(r.code,r.grammar),M.hooks.run("after-tokenize",r),W.stringify(M.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new i;return I(a,a.head,e),function e(n,t,r,a,i,l){for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var s=r[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(l&&l.cause==o+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}for(var v=c.pattern||c,m=a.next,y=i;m!==t.tail&&!(l&&y>=l.reach);y+=m.value.length,m=m.next){var b=m.value;if(t.length>n.length)return;if(!(b instanceof W)){var k,x=1;if(h){if(!(k=z(v,y,n,f)))break;var w=k.index,A=k.index+k[0].length,P=y;for(P+=m.value.length;P<=w;)m=m.next,P+=m.value.length;if(P-=m.value.length,y=P,m.value instanceof W)continue;for(var E=m;E!==t.tail&&(P<A||"string"==typeof E.value);E=E.next)x++,P+=E.value.length;x--,b=n.slice(y,P),k.index-=y}else if(!(k=z(v,0,b,f)))continue;var w=k.index,S=k[0],O=b.slice(0,w),L=b.slice(w+S.length),N=y+b.length;l&&N>l.reach&&(l.reach=N);var j=m.prev;O&&(j=I(t,j,O),y+=O.length),q(t,j,x);var C=new W(o,g?M.tokenize(S,g):S,d,S);if(m=I(t,j,C),L&&I(t,m,L),1<x){var _={cause:o+","+u,reach:N};e(n,t,r,m.prev,y,_),l&&_.reach>l.reach&&(l.reach=_.reach)}}}}}}(e,a,n,a.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=M.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=M.hooks.all[e];if(t&&t.length)for(var r,a=0;r=t[a++];)r(n)}},Token:W};function W(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function z(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function I(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function q(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a}if(u.Prism=M,W.stringify=function n(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(e){r+=n(e,t)}),r}var a={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),M.hooks.run("wrap",a);var l="";for(var o in a.attributes)l+=" "+o+'="'+(a.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(M.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),t=n.language,r=n.code,a=n.immediateClose;u.postMessage(M.highlight(r,M.languages[t],t)),a&&u.close()},!1)),M;var t=M.util.currentScript();function r(){M.manual||M.highlightAll()}if(t&&(M.filename=t.src,t.hasAttribute("data-manual")&&(M.manual=!0)),!M.manual){var a=document.readyState;"loading"===a||"interactive"===a&&t&&t.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return M}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),string:{pattern:e,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document&&document.querySelector){var t,o="line-numbers",s="linkable-line-numbers",a=function(){if(void 0===t){var e=document.createElement("div");e.style.fontSize="13px",e.style.lineHeight="1.5",e.style.padding="0",e.style.border="0",e.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(e),t=38===e.offsetHeight,document.body.removeChild(e)}return t},l=!0,u=0;Prism.hooks.add("before-sanity-check",function(e){var t=e.element.parentElement;if(c(t)){var n=0;v(".line-highlight",t).forEach(function(e){n+=e.textContent.length,e.parentNode.removeChild(e)}),n&&/^( \n)+$/.test(e.code.slice(-n))&&(e.code=e.code.slice(0,-n))}}),Prism.hooks.add("complete",function e(t){var n=t.element.parentElement;if(c(n)){clearTimeout(u);var i=Prism.plugins.lineNumbers,r=t.plugins&&t.plugins.lineNumbers;if(b(n,o)&&i&&!r)Prism.hooks.add("line-numbers",e);else d(n)(),u=setTimeout(f,1)}}),window.addEventListener("hashchange",f),window.addEventListener("resize",function(){v("pre").filter(c).map(function(e){return d(e)}).forEach(y)})}function v(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function b(e,t){return e.classList.contains(t)}function y(e){e()}function c(e){return!(!e||!/pre/i.test(e.nodeName))&&(!!e.hasAttribute("data-line")||!(!e.id||!Prism.util.isActive(e,s)))}function d(u,e,c){var t=(e="string"==typeof e?e:u.getAttribute("data-line")||"").replace(/\s+/g,"").split(",").filter(Boolean),d=+u.getAttribute("data-line-offset")||0,f=(a()?parseInt:parseFloat)(getComputedStyle(u).lineHeight),p=Prism.util.isActive(u,o),n=u.querySelector("code"),h=p?u:n||u,m=[],g=n&&h!=n?function(e,t){var n=getComputedStyle(e),i=getComputedStyle(t);function r(e){return+e.substr(0,e.length-2)}return t.offsetTop+r(i.borderTopWidth)+r(i.paddingTop)-r(n.paddingTop)}(u,n):0;t.forEach(function(e){var t=e.split("-"),n=+t[0],i=+t[1]||n,r=u.querySelector('.line-highlight[data-range="'+e+'"]')||document.createElement("div");if(m.push(function(){r.setAttribute("aria-hidden","true"),r.setAttribute("data-range",e),r.className=(c||"")+" line-highlight"}),p&&Prism.plugins.lineNumbers){var o=Prism.plugins.lineNumbers.getLine(u,n),s=Prism.plugins.lineNumbers.getLine(u,i);if(o){var a=o.offsetTop+g+"px";m.push(function(){r.style.top=a})}if(s){var l=s.offsetTop-o.offsetTop+s.offsetHeight+"px";m.push(function(){r.style.height=l})}}else m.push(function(){r.setAttribute("data-start",String(n)),n<i&&r.setAttribute("data-end",String(i)),r.style.top=(n-d-1)*f+g+"px",r.textContent=new Array(i-n+2).join(" \n")});m.push(function(){h.appendChild(r)})});var i=u.id;if(p&&Prism.util.isActive(u,s)&&i){b(u,s)||m.push(function(){u.classList.add(s)});var r=parseInt(u.getAttribute("data-start")||"1");v(".line-numbers-rows > span",u).forEach(function(e,t){var n=t+r;e.onclick=function(){var e=i+"."+n;l=!1,location.hash=e,setTimeout(function(){l=!0},1)}})}return function(){m.forEach(y)}}function f(){var e=location.hash.slice(1);v(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var n=e.slice(0,e.lastIndexOf(".")),i=document.getElementById(n);if(i)i.hasAttribute("data-line")||i.setAttribute("data-line",""),d(i,t,"temporary ")(),l&&document.querySelector(".temporary.line-highlight").scrollIntoView()}}}();
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var o="line-numbers",a=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(e,n){if("PRE"===e.tagName&&e.classList.contains(o)){var t=e.querySelector(".line-numbers-rows");if(t){var i=parseInt(e.getAttribute("data-start"),10)||1,r=i+(t.children.length-1);n<i&&(n=i),r<n&&(n=r);var s=n-i;return t.children[s]}}},resize:function(e){u([e])},assumeViewportIndependence:!0},t=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null},n=void 0;window.addEventListener("resize",function(){e.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,u(Array.prototype.slice.call(document.querySelectorAll("pre."+o))))}),Prism.hooks.add("complete",function(e){if(e.code){var n=e.element,t=n.parentNode;if(t&&/pre/i.test(t.nodeName)&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,o)){n.classList.remove(o),t.classList.add(o);var i,r=e.code.match(a),s=r?r.length+1:1,l=new Array(s+1).join("<span></span>");(i=document.createElement("span")).setAttribute("aria-hidden","true"),i.className="line-numbers-rows",i.innerHTML=l,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(i),u([t]),Prism.hooks.run("line-numbers",e)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}function u(e){if(0!=(e=e.filter(function(e){var n=t(e)["white-space"];return"pre-wrap"===n||"pre-line"===n})).length){var n=e.map(function(e){var n=e.querySelector("code"),t=e.querySelector(".line-numbers-rows");if(n&&t){var i=e.querySelector(".line-numbers-sizer"),r=n.textContent.split(a);i||((i=document.createElement("span")).className="line-numbers-sizer",n.appendChild(i)),i.innerHTML="0",i.style.display="block";var s=i.getBoundingClientRect().height;return i.innerHTML="",{element:e,lines:r,lineHeights:[],oneLinerHeight:s,sizer:i}}}).filter(Boolean);n.forEach(function(e){var i=e.sizer,n=e.lines,r=e.lineHeights,s=e.oneLinerHeight;r[n.length-1]=void 0,n.forEach(function(e,n){if(e&&1<e.length){var t=i.appendChild(document.createElement("span"));t.style.display="block",t.textContent=e}else r[n]=s})}),n.forEach(function(e){for(var n=e.sizer,t=e.lineHeights,i=0,r=0;r<t.length;r++)void 0===t[r]&&(t[r]=n.children[i++].getBoundingClientRect().height)}),n.forEach(function(e){var n=e.sizer,t=e.element.querySelector(".line-numbers-rows");n.style.display="none",n.innerHTML="",e.lineHeights.forEach(function(e,n){t.children[n].style.height=e+"px"})})}}}();
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var i=[],l={},d=function(){};Prism.plugins.toolbar={};var e=Prism.plugins.toolbar.registerButton=function(e,n){var t;t="function"==typeof n?n:function(e){var t;return"function"==typeof n.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){n.onClick.call(this,e)})):"string"==typeof n.url?(t=document.createElement("a")).href=n.url:t=document.createElement("span"),n.className&&t.classList.add(n.className),t.textContent=n.text,t},e in l?console.warn('There is a button with the key "'+e+'" registered already.'):i.push(l[e]=t)},t=Prism.plugins.toolbar.hook=function(a){var e=a.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&!e.parentNode.classList.contains("code-toolbar")){var t=document.createElement("div");t.classList.add("code-toolbar"),e.parentNode.insertBefore(t,e),t.appendChild(e);var r=document.createElement("div");r.classList.add("toolbar");var n=i,o=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(a.element);o&&(n=o.map(function(e){return l[e]||d})),n.forEach(function(e){var t=e(a);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),r.appendChild(n)}}),t.appendChild(r)}};e("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(e){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}}),Prism.hooks.add("complete",t)}}();
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document)if(Prism.plugins.toolbar){var i={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",arff:"ARFF",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",basic:"BASIC",bbcode:"BBcode",bnf:"BNF",rbnf:"RBNF",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",glsl:"GLSL",graphql:"GraphQL",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",mel:"MEL",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",iecst:"Structured Text (IEC 61131-3)","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly",wiki:"Wiki markup",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};Prism.plugins.toolbar.registerButton("show-language",function(e){var a=e.element.parentNode;if(a&&/pre/i.test(a.nodeName)){var t,s=a.getAttribute("data-language")||i[e.language]||((t=e.language)?(t.substring(0,1).toUpperCase()+t.substring(1)).replace(/s(?=cript)/,"S"):t);if(s){var o=document.createElement("span");return o.textContent=s,o}}})}else console.warn("Show Languages plugin loaded before Toolbar plugin.")}();
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var i=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};e.prototype={setDefaults:function(e){this.defaults=i(this.defaults,e)},normalize:function(e,n){for(var t in n=i(this.defaults,n)){var r=t.replace(/-(\w)/g,function(e,n){return n.toUpperCase()});"normalize"!==t&&"setDefaults"!==r&&n[t]&&this[r]&&(e=this[r].call(this,e,n[t]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("\t")+"$&")},breakLines:function(e,n){n=!0===n?80:0|n||80;for(var t=e.split("\n"),r=0;r<t.length;++r)if(!(s(t[r])<=n)){for(var i=t[r].split(/(\s+)/g),o=0,a=0;a<i.length;++a){var l=s(i[a]);n<(o+=l)&&(i[a]="\n"+i[a],o=l)}t[r]=i.join("")}return t.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=e),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var n=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0))if(e.element&&e.element.parentNode||!e.code){var t=e.element.parentNode;if(e.code&&t&&"pre"===t.nodeName.toLowerCase()){for(var r=t.childNodes,i="",o="",a=!1,l=0;l<r.length;++l){var s=r[l];s==e.element?a=!0:"#text"===s.nodeName&&(a?o+=s.nodeValue:i+=s.nodeValue,t.removeChild(s),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var c=i+e.element.innerHTML+o;e.element.innerHTML=n.normalize(c,e.settings),e.code=e.element.textContent}else e.code=i+e.code+o,e.code=n.normalize(e.code,e.settings)}}else e.code=n.normalize(e.code,e.settings)}))}function e(e){this.defaults=i({},e)}function s(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}}();
!function(){function u(t,e){t.addEventListener("click",function(){!function(t){navigator.clipboard?navigator.clipboard.writeText(t.getText()).then(t.success,t.error):function(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var o=document.execCommand("copy");setTimeout(function(){o?e.success():e.error()},1)}catch(t){setTimeout(function(){e.error(t)},1)}document.body.removeChild(t)}(t)}(e)})}"undefined"!=typeof Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(t){var e=t.element,o=function(t){var e={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var o in e){for(var n="data-prismjs-"+o,r=t;r&&!r.hasAttribute(n);)r=r.parentElement;r&&(e[o]=r.getAttribute(n))}return e}(e),n=document.createElement("button");n.className="copy-to-clipboard-button",n.setAttribute("type","button");var r=document.createElement("span");return n.appendChild(r),i("copy"),u(n,{getText:function(){return e.textContent},success:function(){i("copy-success"),c()},error:function(){i("copy-error"),setTimeout(function(){!function(t){window.getSelection().selectAllChildren(t)}(e)},1),c()}}),n;function c(){setTimeout(function(){i("copy")},o["copy-timeout"])}function i(t){r.textContent=o[t],n.setAttribute("data-copy-state",t)}}):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}();
"undefined"!=typeof Prism&&"undefined"!=typeof document&&document.querySelector&&Prism.plugins.toolbar.registerButton("download-file",function(t){var e=t.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var n=e.getAttribute("data-src"),a=document.createElement("a");return a.textContent=e.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}});
