!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function t(e){e=e.getElementsByTagName("a");for(var t=e.length-1;t>=0;t--)e[t].setAttribute("target","_blank")}function n(e,t){for(var n=[],s=new RegExp("(^| )"+t+"( |$)"),i=e.getElementsByTagName("*"),a=0,l=i.length;l>a;a++)s.test(i[a].className)&&n.push(i[a]);return n}var s="",i=20,a=!0,l=[],r=!1,o=!0,c=!0,d=null,p=!0,m=!0,u=null,h=!0,w=!1,g=!0,f=!0,v={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),r)l.push(e);else{r=!0,s=e.domId,i=e.maxTweets,a=e.enableLinks,c=e.showUser,o=e.showTime,m=e.showRetweet,d=e.dateFunction,u=e.customCallback,h=e.showInteraction,w=e.showImages,g=e.linksInNewWindow,f=e.showPermalinks;var t=document.createElement("script");t.type="text/javascript",t.src="//cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(t)}},callback:function(b){var y=document.createElement("div");y.innerHTML=b.body,"undefined"==typeof y.getElementsByClassName&&(p=!1),b=[];var T=[],k=[],C=[],x=[],E=[],N=[],_=0;if(p)for(y=y.getElementsByClassName("tweet");_<y.length;)x.push(0<y[_].getElementsByClassName("retweet-credit").length?!0:!1),(!x[_]||x[_]&&m)&&(b.push(y[_].getElementsByClassName("e-entry-title")[0]),E.push(y[_].getAttribute("data-tweet-id")),T.push(y[_].getElementsByClassName("p-author")[0]),k.push(y[_].getElementsByClassName("dt-updated")[0]),N.push(y[_].getElementsByClassName("permalink")[0]),C.push(void 0!==y[_].getElementsByClassName("inline-media")[0]?y[_].getElementsByClassName("inline-media")[0]:void 0)),_++;else for(y=n(y,"tweet");_<y.length;)b.push(n(y[_],"e-entry-title")[0]),E.push(y[_].getAttribute("data-tweet-id")),T.push(n(y[_],"p-author")[0]),k.push(n(y[_],"dt-updated")[0]),N.push(y[_].getElementsByClassName("permalink")[0]),C.push(void 0!==n(y[_],"inline-media")[0]?n(y[_],"inline-media")[0]:void 0),x.push(0<n(y[_],"retweet-credit").length?!0:!1),_++;for(b.length>i&&(b.splice(i,b.length-i),T.splice(i,T.length-i),k.splice(i,k.length-i),x.splice(i,x.length-i),C.splice(i,C.length-i),N.splice(i,N.length-i)),y=[],_=b.length,x=0;_>x;){if("string"!=typeof d){var B=k[x].getAttribute("datetime"),I=new Date(k[x].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),B=d(I,B);if(k[x].setAttribute("aria-label",B),b[x].innerText)if(p)k[x].innerText=B;else{var I=document.createElement("p"),A=document.createTextNode(B);I.appendChild(A),I.setAttribute("aria-label",B),k[x]=I}else k[x].textContent=B}B="",a?(g&&(t(b[x]),c&&t(T[x])),c&&(B+='<div class="user">'+e(T[x].innerHTML)+"</div>"),B+='<p class="tweet">'+e(b[x].innerHTML)+"</p>",o&&(B=f?B+('<p class="timePosted"><a href="'+N[x]+'">'+k[x].getAttribute("aria-label")+"</a></p>"):B+('<p class="timePosted">'+k[x].getAttribute("aria-label")+"</p>"))):b[x].innerText?(c&&(B+='<p class="user">'+T[x].innerText+"</p>"),B+='<p class="tweet">'+b[x].innerText+"</p>",o&&(B+='<p class="timePosted">'+k[x].innerText+"</p>")):(c&&(B+='<p class="user">'+T[x].textContent+"</p>"),B+='<p class="tweet">'+b[x].textContent+"</p>",o&&(B+='<p class="timePosted">'+k[x].textContent+"</p>")),h&&(B+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+E[x]+'" class="twitter_reply_icon"'+(g?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+E[x]+'" class="twitter_retweet_icon"'+(g?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+E[x]+'" class="twitter_fav_icon"'+(g?' target="_blank">':">")+"Favorite</a></p>"),w&&void 0!==C[x]&&(I=C[x],void 0!==I?(I=I.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],I=decodeURIComponent(I).split('"')[1]):I=void 0,B+='<div class="media"><img src="'+I+'" alt="Image from tweet" /></div>'),y.push(B),x++}if(null===u){for(b=y.length,T=0,k=document.getElementById(s),C="<ul>";b>T;)C+="<li>"+y[T]+"</li>",T++;k.innerHTML=C+"</ul>"}else u(y);r=!1,0<l.length&&(v.fetch(l[0]),l.splice(0,1))}};return window.twitterFetcher=v});