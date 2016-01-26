!function(e,t){"use strict";function n(e,t){for(var n,r=[],o=0;o<e.length;++o){if(n=a[e[o]]||i(e[o]),!n)throw"module definition dependecy not found: "+e[o];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){a[e]=i.apply(null,arguments)})}function i(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function o(n){var r,i,o,s,l;for(r=0;r<n.length;r++){i=e,o=n[r],s=o.split(/[.\/]/);for(var c=0;c<s.length-1;++c)i[s[c]]===t&&(i[s[c]]={}),i=i[s[c]];i[s[s.length-1]]=a[o]}if(e.AMDLC_TESTS){l=e.privateModules||{};for(o in a)l[o]=a[o];for(r=0;r<n.length;r++)delete l[n[r]];e.privateModules=l}}var a={};r("tinymce/spellcheckerplugin/DomTextMatcher",[],function(){function e(e){return e&&1==e.nodeType&&"false"===e.contentEditable}return function(t,n){function r(e,t){if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}function i(t){var n;if(3===t.nodeType)return t.data;if(E[t.nodeName]&&!N[t.nodeName])return"";if(e(t))return"\n";if(n="",(N[t.nodeName]||_[t.nodeName])&&(n+="\n"),t=t.firstChild)do n+=i(t);while(t=t.nextSibling);return n}function o(t,n,r){var i,o,a,s,l,c=[],u=0,d=t,f=0;n=n.slice(0),n.sort(function(e,t){return e.start-t.start}),l=n.shift();e:for(;;){if((N[d.nodeName]||_[d.nodeName]||e(d))&&u++,3===d.nodeType&&(!o&&d.length+u>=l.end?(o=d,s=l.end-u):i&&c.push(d),!i&&d.length+u>l.start&&(i=d,a=l.start-u),u+=d.length),i&&o){if(d=r({startNode:i,startNodeIndex:a,endNode:o,endNodeIndex:s,innerNodes:c,match:l.text,matchIndex:f}),u-=o.length-s,i=null,o=null,c=[],l=n.shift(),f++,!l)break}else if(E[d.nodeName]&&!N[d.nodeName]||!d.firstChild){if(d.nextSibling){d=d.nextSibling;continue}}else if(!e(d)){d=d.firstChild;continue}for(;;){if(d.nextSibling){d=d.nextSibling;break}if(d.parentNode===t)break e;d=d.parentNode}}}function a(e){function t(t,n){var r=S[n];r.stencil||(r.stencil=e(r));var i=r.stencil.cloneNode(!1);return i.setAttribute("data-mce-index",n),t&&i.appendChild(k.doc.createTextNode(t)),i}return function(e){var n,r,i,o=e.startNode,a=e.endNode,s=e.matchIndex,l=k.doc;if(o===a){var c=o;i=c.parentNode,e.startNodeIndex>0&&(n=l.createTextNode(c.data.substring(0,e.startNodeIndex)),i.insertBefore(n,c));var u=t(e.match,s);return i.insertBefore(u,c),e.endNodeIndex<c.length&&(r=l.createTextNode(c.data.substring(e.endNodeIndex)),i.insertBefore(r,c)),c.parentNode.removeChild(c),u}n=l.createTextNode(o.data.substring(0,e.startNodeIndex)),r=l.createTextNode(a.data.substring(e.endNodeIndex));for(var d=t(o.data.substring(e.startNodeIndex),s),f=[],h=0,m=e.innerNodes.length;m>h;++h){var p=e.innerNodes[h],g=t(p.data,s);p.parentNode.replaceChild(g,p),f.push(g)}var v=t(a.data.substring(0,e.endNodeIndex),s);return i=o.parentNode,i.insertBefore(n,o),i.insertBefore(d,o),i.removeChild(o),i=a.parentNode,i.insertBefore(v,a),i.insertBefore(r,a),i.removeChild(a),v}}function s(e){var t=e.parentNode;t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function l(e){var n=t.getElementsByTagName("*"),r=[];e="number"==typeof e?""+e:null;for(var i=0;i<n.length;i++){var o=n[i],a=o.getAttribute("data-mce-index");null!==a&&a.length&&(a===e||null===e)&&r.push(o)}return r}function c(e){for(var t=S.length;t--;)if(S[t]===e)return t;return-1}function u(e){var t=[];return d(function(n,r){e(n,r)&&t.push(n)}),S=t,this}function d(e){for(var t=0,n=S.length;n>t&&e(S[t],t)!==!1;t++);return this}function f(e){return S.length&&o(t,S,a(e)),this}function h(e,t){if(w&&e.global)for(;C=e.exec(w);)S.push(r(C,t));return this}function m(e){var t,n=l(e?c(e):null);for(t=n.length;t--;)s(n[t]);return this}function p(e){return S[e.getAttribute("data-mce-index")]}function g(e){return l(c(e))[0]}function v(e,t,n){return S.push({start:e,end:e+t,text:w.substr(e,t),data:n}),this}function y(e){var t=l(c(e)),r=n.dom.createRng();return r.setStartBefore(t[0]),r.setEndAfter(t[t.length-1]),r}function b(e,t){var r=y(e);return r.deleteContents(),t.length>0&&r.insertNode(n.dom.doc.createTextNode(t)),r}function x(){return S.splice(0,S.length),m(),this}var C,w,N,E,_,S=[],k=n.dom;return N=n.schema.getBlockElements(),E=n.schema.getWhiteSpaceElements(),_=n.schema.getShortEndedElements(),w=i(t),{text:w,matches:S,each:d,filter:u,reset:x,matchFromElement:p,elementFromMatch:g,find:h,add:v,wrap:f,unwrap:m,replace:b,rangeFromMatch:y,indexOf:c}}}),r("tinymce/spellcheckerplugin/Plugin",["tinymce/spellcheckerplugin/DomTextMatcher","tinymce/PluginManager","tinymce/util/Tools","tinymce/ui/Menu","tinymce/dom/DOMUtils","tinymce/util/XHR","tinymce/util/URI","tinymce/util/JSON"],function(e,t,n,r,i,o,a,s){t.add("spellchecker",function(t,l){function c(){return A.textMatcher||(A.textMatcher=new e(t.getBody(),t)),A.textMatcher}function u(e,t){var r=[];return n.each(t,function(e){r.push({selectable:!0,text:e.name,data:e.value})}),r}function d(e){for(var t in e)return!1;return!0}function f(e,o){var a=[],s=S[e];n.each(s,function(e){a.push({text:e,onclick:function(){t.insertContent(t.dom.encode(e)),t.dom.remove(o),v()}})}),a.push({text:"-"}),R&&a.push({text:"Add to Dictionary",onclick:function(){y(e,o)}}),a.push.apply(a,[{text:"Ignore",onclick:function(){b(e,o)}},{text:"Ignore all",onclick:function(){b(e,o,!0)}}]),T=new r({items:a,context:"contextmenu",onautohide:function(e){-1!=e.target.className.indexOf("spellchecker")&&e.preventDefault()},onhide:function(){T.remove(),T=null}}),T.renderTo(document.body);var l=i.DOM.getPos(t.getContentAreaContainer()),c=t.dom.getPos(o[0]),u=t.dom.getRoot();"BODY"==u.nodeName?(c.x-=u.ownerDocument.documentElement.scrollLeft||u.scrollLeft,c.y-=u.ownerDocument.documentElement.scrollTop||u.scrollTop):(c.x-=u.scrollLeft,c.y-=u.scrollTop),l.x+=c.x,l.y+=c.y,T.moveTo(l.x,l.y+o[0].offsetHeight)}function h(){return t.getParam("spellchecker_wordchar_pattern")||new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g")}function m(e,r,i,c){var u={method:e},d="";"spellcheck"==e&&(u.text=r,u.lang=B.spellchecker_language),"addToDictionary"==e&&(u.word=r),n.each(u,function(e,t){d&&(d+="&"),d+=t+"="+encodeURIComponent(e)}),o.send({url:new a(l).toAbsolute(B.spellchecker_rpc_url),type:"post",content_type:"application/x-www-form-urlencoded",data:d,success:function(e){if(e=s.parse(e))e.error?c(e.error):i(e);else{var n=t.translate("Server response wasn't proper JSON.");c(n)}},error:function(){var e=t.translate("The spelling service was not found: (")+B.spellchecker_rpc_url+t.translate(")");c(e)}})}function p(e,t,n,r){var i=B.spellchecker_callback||m;i.call(A,e,t,n,r)}function g(){function e(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1),x()}x()||(t.setProgressState(!0),p("spellcheck",c().text,E,e),t.focus())}function v(){t.dom.select("span.mce-spellchecker-word").length||x()}function y(e,n){t.setProgressState(!0),p("addToDictionary",e,function(){t.setProgressState(!1),t.dom.remove(n,!0),v()},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1)})}function b(e,r,i){t.selection.collapse(),i?n.each(t.dom.select("span.mce-spellchecker-word"),function(n){n.getAttribute("data-mce-word")==e&&t.dom.remove(n,!0)}):t.dom.remove(r,!0),v()}function x(){return c().reset(),A.textMatcher=null,k?(k=!1,t.fire("SpellcheckEnd"),!0):void 0}function C(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t}function w(e){var r,i=[];if(r=n.toArray(t.getBody().getElementsByTagName("span")),r.length)for(var o=0;o<r.length;o++){var a=C(r[o]);null!==a&&a.length&&a===e.toString()&&i.push(r[o])}return i}function N(e){var t=B.spellchecker_language;e.control.items().each(function(e){e.active(e.settings.data===t)})}function E(e){var n;if(e.words?(R=!!e.dictionary,n=e.words):n=e,t.setProgressState(!1),d(n)){var r=t.translate("No misspellings found.");return t.notificationManager.open({text:r,type:"info"}),void(k=!1)}S=n,c().find(h()).filter(function(e){return!!n[e.text]}).wrap(function(e){return t.dom.create("span",{"class":"mce-spellchecker-word","data-mce-bogus":1,"data-mce-word":e.text})}),k=!0,t.fire("SpellcheckStart")}var _,S,k,T,R,A=this,B=t.settings,D=B.spellchecker_languages||"English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv";_=u("Language",n.map(D.split(","),function(e){return e=e.split("="),{name:e[0],value:e[1]}})),t.on("click",function(e){var n=e.target;if("mce-spellchecker-word"==n.className){e.preventDefault();var r=w(C(n));if(r.length>0){var i=t.dom.createRng();i.setStartBefore(r[0]),i.setEndAfter(r[r.length-1]),t.selection.setRng(i),f(n.getAttribute("data-mce-word"),r)}}}),t.addMenuItem("spellchecker",{text:"Spellcheck",context:"tools",onclick:g,selectable:!0,onPostRender:function(){var e=this;e.active(k),t.on("SpellcheckStart SpellcheckEnd",function(){e.active(k)})}});var M={tooltip:"Spellcheck",onclick:g,onPostRender:function(){var e=this;t.on("SpellcheckStart SpellcheckEnd",function(){e.active(k)})}};_.length>1&&(M.type="splitbutton",M.menu=_,M.onshow=N,M.onselect=function(e){B.spellchecker_language=e.control.settings.data}),t.addButton("spellchecker",M),t.addCommand("mceSpellCheck",g),t.on("remove",function(){T&&(T.remove(),T=null)}),t.on("change",v),this.getTextMatcher=c,this.getWordCharPattern=h,this.markErrors=E,this.getLanguage=function(){return B.spellchecker_language},B.spellchecker_language=B.spellchecker_language||B.language||"en"})}),o(["tinymce/spellcheckerplugin/DomTextMatcher"])}(this);