var mediav=window.mediav||{};var mvproduct=window.mvproduct||{};(function(){mvproduct.makeg8=function(l,o,i,f,q,h,d){var g=l?window["mvas_"+l]:"",n=(window["mvext_"+l]&&window["mvext_"+l].framing&&(window["mvext_"+l].framing==1))?1:0;if(mediav.ad&&mediav.ad.status[g]=="stop"){return}var k=i.length,j,m,p=b[f+"x"+q];h.pnLen=p.pnLen;m=a.buildCss(l,f,q,p.type,h);a.appendStyle(m,"mvCss_"+l);i=a.transferNCR(i);a.changeData(i,h);j=a.buildHtml(l,p.type,o,k,i,h);var e=a.G("mvdiv_"+g);if(e){e.innerHTML=j;e.style.display="block"}else{a.write(l,j,d)}new c("banner_"+l,a.blockWidth,a.sliderData,a.type,n).start();a.monitorClick(l,o,f,q)};mvproduct.makeg8.version="1.1.9";function c(d,g,f,e,h){d=this.root=a.G(d);this.btns=a.getByClass("mv_tab",d);this.scrollContent=a.getByClass("mv_sliderArea",d)[0];this.timeout=5000;this.duration=(h==1)?30:0;this.blockWidth=g;this.scrollContentLi=a.getByClass("mv_item",this.scrollContent);this.scrollLi=this.scrollContent.getElementsByTagName("li");this.hasStacItemInfo=a.getByClass("mv_stacItemInfo",this.root)[0]?true:false;this.pointer=0;this.isForward=true;this.scrollLength=this.scrollLi.length/2;this.sliderData=f;this.type=e||"h";this.addClickEvent();this.addMouseEvent();this.sTime=new Date();this.pointer=this.scrollLength;this.invoke(this.pointer)}c.prototype={constructor:c,start:function(){var d=this;this.stop();this.intervalId=setInterval(function(){d.next()},this.timeout)},stop:function(){clearInterval(this.intervalId)},invoke:function(p){this.pointer=p||0;if(this.hasStacItemInfo){this.fillContent(this.scrollLi[this.pointer])}for(var t=0;t<this.scrollLi.length;t++){var m=this.scrollLi[t];if(this.pointer==t){a.removeClass(m,"mv_small");a.addClass(m,"mv_staticItem");var q=(this.type=="v")?(parseInt(m.style.top)||0):(parseInt(m.style.left)||0);alterVal=parseInt(this.sliderData.leftWidth-q);var f=this.sliderData.bigImgH-this.sliderData.smallImgH;var e=this.sliderData.bigImgW-this.sliderData.smallImgW;var u=this.sliderData.bigImgBottom-this.sliderData.smallImgBottom;if(this.type=="v"){a.animate(m,{top:q},{top:alterVal})}else{a.animate(m,{left:q,bottom:this.sliderData.smallImgBottom},{left:alterVal,bottom:u})}a.animate(a.getByClass("mv_itemImg",m)[0],{height:this.sliderData.smallImgH,width:this.sliderData.smallImgW},{height:f,width:e});a.animate(m.getElementsByTagName("a")[0],{height:this.sliderData.smallImgH,width:this.sliderData.smallImgW},{height:f,width:e})}else{a.removeClass(m,"mv_staticItem");a.addClass(m,"mv_small");var h=(this.type=="v")?this.sliderData.smallImgH:this.sliderData.smallImgW;var g=Math.abs(t-this.pointer);var l=(this.type=="v")?(parseInt(m.style.top)||0):(parseInt(m.style.left)||0);var s=(t<=this.pointer)?-h*(g-1):2*this.sliderData.leftWidth+this.sliderData.bigShowW+h*(g-2);s=s-l;var v=a.getByClass("mv_itemImg",m)[0];var k=parseInt(m.style.bottom)||this.sliderData.smallImgBottom;var d=parseInt(this.sliderData.smallImgBottom-k);var r=parseInt(v.style.height)||this.sliderData.smallImgH;var w=parseInt(this.sliderData.smallImgH-r);var j=parseInt(v.style.width)||this.sliderData.smallImgW;var o=parseInt(this.sliderData.smallImgW-j);if(this.type=="v"){a.animate(m,{top:l},{top:s})}else{a.animate(m,{left:l,bottom:k},{left:s,bottom:d})}a.animate(v,{height:r,width:j},{height:w,width:o});a.animate(m.getElementsByTagName("a")[0],{height:r,width:j},{height:w,width:o})}}},next:function(){var d=this.duration*1000-820;if((d>0)&&(new Date()-this.sTime>d)){this.stop();return}if(this.pointer==0){this.isForward=true}if(this.pointer>=this.scrollLength){this.isForward=false}if(this.isForward){this.invoke(++this.pointer)}else{this.resetStyle("last");this.pointer=0;this.invoke(++this.pointer);this.isForward=true}},addMouseEvent:function(j){var f=this,e=f.root,h=f.duration*1000-420;a.getByClass("mv_showPrevious",e)[0].onmouseover=function(){f.stop();this.getElementsByTagName("a")[0].style.backgroundPosition="0px -33px"};a.getByClass("mv_showPrevious",e)[0].onmouseout=function(){f.start();this.getElementsByTagName("a")[0].style.backgroundPosition="0px 0px"};a.getByClass("mv_showNext",e)[0].onmouseover=function(){f.stop();this.getElementsByTagName("a")[0].style.backgroundPosition="0px -99px"};a.getByClass("mv_showNext",e)[0].onmouseout=function(){f.start();this.getElementsByTagName("a")[0].style.backgroundPosition="0px -66px"};var d=a.getByClass("mv_item",e);for(var g=0;g<d.length;g++){d[g].onmouseover=function(i){f.stop()};d[g].onmouseout=function(i){f.start()}}if(h>0){setTimeout(function(){f.invoke(f.scrollLength)},h)}},addSliderMouseEvent:function(){var d=this,e=a.getByClass("mv_sliderBox",this.root)[0];e.onmouseover=function(){d.stop()};e.onmouseout=function(){d.start()}},showNext:function(){if(this.pointer>=this.scrollLength){this.resetStyle("last");this.pointer=0}this.invoke(++this.pointer)},showPrevious:function(){if(this.pointer==1){this.resetStyle("first");this.pointer=this.scrollLength+1}this.invoke(--this.pointer)},addClickEvent:function(){var d=this;a.getByClass("mv_showPrevious",this.root)[0].onclick=function(){d.showPrevious()};a.getByClass("mv_showNext",this.root)[0].onclick=function(){d.showNext()}},fillContent:function(e){var d=a.getByClass("mv_itemInfo",e)[0];var g=a.getByClass("mv_stacItemInfo",this.root)[0];if(d&&g){var f=g.getElementsByTagName("a")[0];var h=a.getByClass("mv_stacDesc",g)[0];var i=a.getByClass("mv_stacSubDesc",g)[0];f.href=d.getElementsByTagName("a")[0].href;f.title=d.getElementsByTagName("a")[0].title;h.innerHTML=a.getByClass("mv_desc",d)[0].innerHTML;i.innerHTML=a.getByClass("mv_subDesc",d)[0].innerHTML}},resetStyle:function(g){var g=g||"last";var e=(g=="last")?0:this.scrollLength;for(var f=0;f<this.scrollLi.length;f++){var d=this.scrollLi[f];var j=Math.abs(f-e);if(g=="last"){var h=(f<=e)?-this.sliderData.smallImgW*(j-1):2*this.sliderData.leftWidth+this.sliderData.bigShowW+this.sliderData.smallImgW*(j-2)}else{var h=(f<=e)?-this.sliderData.smallImgW*(j):2*this.sliderData.leftWidth+this.sliderData.bigShowW+this.sliderData.smallImgW*(j-3)}(this.type=="v")?d.style.top=h+"px":d.style.left=h+"px"}}};var b={"300x250":{type:"s",pnLen:13},"728x90":{type:"h",pnLen:13},"560x90":{type:"h",pnLen:13},"660x90":{type:"h",pnLen:12},"610x100":{type:"h",pnLen:12},"950x90":{type:"h",pnLen:20},"960x90":{type:"h",pnLen:20},"600x90":{type:"h",pnLen:13},"320x50":{type:"h",pnLen:6},"250x250":{type:"s",pnLen:11},"336x280":{type:"s",pnLen:18},"400x300":{type:"s",pnLen:22},"120x600":{type:"v",pnLen:16},"160x600":{type:"v",pnLen:22},"300x100":{type:"h",pnLen:8},"200x200":{type:"s",pnLen:9},"580x90":{type:"h",pnLen:13},"640x60":{type:"h",pnLen:14},"640x90":{type:"h",pnLen:14}};var a={G:function(d){return document.getElementById(d)},getByClass:function(j,h){h=h||document;if(h.getElementsByClassName){return h.getElementsByClassName(j)}else{var e=[];var f=h.getElementsByTagName("*");for(var g=0,d=f.length;g<d;g++){if(this.hasClass(f[g],j)){e.push(f[g])}}return e}},hasClass:function(g,f){var h=g.className.split(/\s+/);for(var e=0,d=h.length;e<d;e++){if(h[e]==f){return true}}return false},addClass:function(e,d){if(!this.hasClass(e,d)){e.className+=(e.className?" ":"")+d}},removeClass:function(e,d){if(this.hasClass(e,d)){e.className=e.className.replace(new RegExp("(\\s|^)"+d+"(\\s|$)")," ").replace(/^\s+|\s+$/g,"")}},browser:(function(){var d=navigator.userAgent.toLowerCase().match(/msie ([\w.]+)/);return{ie:d&&d[1]}})(),trim:function(d){return d.replace(/(^\s*)|(\s*$)/g,"")},template:function(d,f,e){d=String(d);return d.replace(/#\{(.+?)\}/g,function(g,i){var j=e?i:i.split("_");try{var h="";if(e){h=isNaN(f[j])?f[j]:f[j]+"px"}else{h=f[j[0]][j[1]]}if("[object Function]"==Object.prototype.toString.call(h)){h=h(i)}}catch(k){}return("undefined"==typeof h?"":h)})},getFixedText:function(l,j,m){var k=l.split(""),e=0,h=0.6,d="",g=k.length;if(g>0){for(var f=0;f<g;f++){e+=/[\x20-\x7E]/i.test(k[f])?h:1;if(e>j){if(m){d=d.slice(0,-1)+m}return d}else{d+=k[f]}}}return d},transferNCR:function(f){if(Object.prototype.toString.apply(f)==="[object Array]"){for(var d=0;d<f.length;d++){for(var e in f[d]){if(f[d][e]&&f[d][e].length>0&&!/url/.test(e)){f[d][e]=this.transferNCRStr(f[d][e])}}}}else{f=this.transferNCRStr(f)}return f},transferNCRStr:function(d){d=d.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi,function(f,e){if(e[0]==="#"){return String.fromCharCode(e[1].toLowerCase()==="x"?parseInt(e.substr(2),16):parseInt(e.substr(1),10))}if(e.charAt(0)==="#"){return String.fromCharCode(e.charAt(1).toLowerCase()==="x"?parseInt(e.substr(2),16):parseInt(e.substr(1),10))}});return d},trimText:function(d){d=d.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|，|、]/g,"");return d},fixPrice:function(d,e){d+="";if(d.length>6&&!(d.length===7&&d.indexOf(".")>-1)){d=""+parseInt(d);if(d.length>6){d=d.slice(0,-4);if(e){d+="\u4e07"}else{d=(parseInt(d)/100).toFixed(2)+"M"}}}return d},changeData:function(k,f){var d=this.pimgSize.width,j=this.pimgSize.height,m=!f.currencySymbol||f.currencySymbol=="\uffe5";for(var g=0;g<k.length;g++){if(f.imgflag&&(f.imgflag==1)){k[g].timg=k[g].pimg||k[g].timg}k[g].curl=k[g].curl1||k[g].curl;k[g].cpurl=k[g].cpurl1||k[g].cpurl||"javascript:void(0)";if(k[g]["price"]){k[g]["price"]=this.fixPrice(k[g]["price"],m)}if(k[g]["pn"]&&f.pnLen){var e=String(k[g]["pn"]);k[g]["opn"]=e;k[g]["pn"]=this.getFixedText(e,f.pnLen,"...")}if(k[g]["bn"]&&f.bnLength){var l=String(k[g]["bn"]);k[g]["obn"]=l;k[g]["bn"]=this.getFixedText(l,f.bnLength,"...")}if(k[g]["cn"]){k[g]["cn"]=this.trim(k[g]["cn"]);k[g]["cn"]=this.trimText(k[g]["cn"])}if(!(k[g]["width"]&&k[g]["height"])){k[g]["width"]=160;k[g]["height"]=160}this.pimgResize(k[g],d,j)}return k},pimgResize:function(k,i,d){var f=parseInt(k.width),j=parseInt(k.height),e,g;if(!(f&&j)){e=i;g=d}else{if(f/j>i/d){e=i;g=parseInt(j/f*e)}else{g=d;e=parseInt(f/j*g)}}k.width=e;k.height=g},buildHtml:function(f,i,k,e,j,d){var g=[];g.push('<div id="banner_'+f+'">');g.push('<div class="mv_logo">');g.push('<a href="'+k+'" target="_blank"><span></span><img class="mv_logoImg" src="'+d.logo+'"/></a>');g.push("</div>");g.push('<div class="mv_content">');g.push('<div class="mv_previous">');g.push('<div class="mv_showPrevious mv_pre">');g.push('<span></span><a href="javascript:void(0);" target="_self"></a>');g.push("</div>");g.push("</div>");g.push('<div class="mv_next">');g.push('<div class="mv_showNext mv_nxt">');g.push('<span></span><a href="javascript:void(0);" target="_self"></a>');g.push("</div>");g.push("</div>");g.push('<div class="mv_smallShow">');g.push('<div class="mv_sliderArea">');g.push(this.buildTab(e,j,d));g.push("</div>");g.push("</div>");g.push("</div>");if(i=="s"){g.push('<div class="mv_stacItemInfo">');g.push('<a href="javascript:void(0);" target="_blank">');g.push('<div class="mv_stacDesc"></div>');g.push('<div class="mv_stacSubDesc"></div>');g.push("</a>");g.push("</div>")}g.push("</div>");return this.template(g.join(""),j)},buildTab:function(e,i,d){var g=[],f=this.buildItemHtml(e,i,d);g.push('<ul class="mv_slider">');g.push(f);g.push("</ul>");g.push('<ul class="mv_slider">');g.push(f);g.push("</ul>");return g.join("")},buildItemHtml:function(m,k,e){var l=[],o=e.currencySymbol||"\uffe5",f=e.label||"\u7acb\u5373\u8d2d\u4e70",n,g,d=e.showvt||0;for(var j=0;j<m;j++){l.push('<li class="mv_small">');l.push('<div class="mv_mark"></div>');l.push('<div class="mv_item">');l.push('<div class="mv_itemImg">');l.push('<a href="#{'+j+'_curl}" title="#{'+j+'_opn}" target="_blank"><span></span><img src="#{'+j+'_timg}" style="width:#{'+j+"_width}px;height:#{"+j+'_height}px;" /></a>');if(k[j].vt&&d==1){n=parseInt(k[j].vt);g=this.viewType[n]||"";g&&l.push('<a href="#{'+j+'_curl}" title="#{'+j+'_opn}" target="_blank"><div class="mv-recommend">'+g+"</div></a>")}l.push("</div>");l.push('<div class="mv_itemInfo">');l.push('<a href="#{'+j+'_curl}" title="#{'+j+'_opn}" target="_blank">');l.push('<div class="mv_desc">#{'+j+"_pn}</div>");l.push('<div class="mv_subDesc">'+o+"#{"+j+"_price}</div>");l.push('<div class="active">'+f+"</div>");l.push("</a>");l.push("</div>");l.push("</div>");l.push("</li>")}return l.join("")},buildCss:function(l,h,s,q,e){var o=[],j="#banner_"+l,d="http://material.mediav.com/product/icon/",r="",p="border-bottom",n="";var m=this.sizeConfig[h+"x"+s];var g=(q=="v")?d+"icon_bg2.png":d+"icon_bg.png";if(q=="h"){r="float: left;";p="border-right"}if(q=="s"){n=" .mv_small"}if(!m){return""}var t={bdColor:"#dfdfdf",bdWidthSize:"1",blockColor:"#fff",blockbgColor:"#9A143B",splitLine:"#9a143b",logoBgColor:"#fff",vtBgColor:"#DD0000",vtColor:"#FFFFFF",fontFamily:"SimSun",priceColor:"#F63A15"};boldStyle={descBold:"bold",priceBold:"bold",activeBold:"bold"},boldName={"0":"normal","1":"bold"},e=e||{};for(var k in t){m[k]=e[k]||t[k]}for(var k in boldStyle){m[k]=boldName[e[k]]||boldStyle[k]}this.adapStageBorder(m,q);if(document.compatMode=="BackCompat"&&a.browser.ie&&(a.browser.ie<9||document.documentMode<9)){m.a1+=2*m.a3;m.a2+=2*m.a3;if(q=="h"){m.b1+=m.b3}else{m.b2+=m.b3}if(m.l1&&m.l2){m.l1+=2*m.l4;m.l2+=2*m.l3}if(m.r1){m.r1+=m.r5}}o.push(j+"{position:relative;width:#{a1};height:#{a2};background-color:#FFFFFF;border:#{a3} solid #{bdColor};margin:0;padding:0;display:block;float:none;-webkit-text-size-adjust:none;border-spacing:0px;}");o.push(j+" *{background:none;margin:0;padding:0;font: 12px arial,#{fontFamily},sans-serif;}");o.push(j+" div{display:block;float:none;}");o.push(j+" a{text-decoration:none;cursor:pointer;display:block;}");o.push(j+" a {outline:none;blr:expression(this.onFocus=this.blur());}");o.push(j+" a:focus {outline:none;}");o.push(j+" img{border:none;display:inline;}");o.push(j+" ul{list-style:none;}");o.push(j+" div:after{display:none;}");o.push(j+" div:before{display:none;}");o.push(j+" .mv_logo{width:#{b1};height:#{b2};overflow:hidden;"+p+":#{b3} solid #{splitLine};text-align:center;position:relative;margin-bottom: #{b4};background-color:#{logoBgColor};"+r+"}");o.push(j+" .mv_logo a{display:table-cell;vertical-align:middle;width:#{c1};height:#{c2};text-align:center;*display: block;}");o.push(j+" .mv_logo span{vertical-align:middle;*display:inline-block;*height:100%;}");o.push(j+" .mv_logo img{vertical-align:middle;width:auto;height:auto;}");o.push(j+" .mv_content{width:#{d1};height:#{d2};margin:#{d3} #{d4};position:relative;overflow:hidden;"+r+"}");o.push(j+" .mv_previous, "+j+" .mv_next, "+j+" .mv_pre, "+j+" .mv_nxt{width:#{e1};height:#{e2};background:transparent;cursor:pointer;z-index:10;}");if(q=="v"){o.push(j+" .mv_previous{position:absolute;top:0px;}");o.push(j+" .mv_next{position:absolute;bottom:0px;}")}else{o.push(j+" .mv_previous{position:absolute;left:0px;}");o.push(j+" .mv_next{position:absolute;right:0px;}")}o.push(j+" .mv_pre, "+j+" .mv_nxt{text-align:center;display:table-cell;vertical-align:middle;}");o.push(j+" .mv_previous span, "+j+" .mv_next span{vertical-align:middle;*display:inline-block;*height:100%;}");o.push(j+" .mv_previous a, "+j+" .mv_next a{display:inline-block;height:#{f1};width:#{f2};vertical-align:middle;cursor:pointer;background:url("+g+") no-repeat;}");o.push(j+" .mv_previous a:hover{background-position:0px -33px;}");o.push(j+" .mv_next a{background-position:0px -66px;}");o.push(j+" .mv_next a:hover{background-position:0px -99px;}");o.push(j+" .mv_smallShow{width:#{g1};height:#{g2};overflow:hidden;position:relative;}");if(q=="v"){o.push(j+" .mv_sliderArea{height:#{g2};position:relative;height:10000px;}")}else{o.push(j+" .mv_sliderArea{height:#{g2};position:relative;width:10000px;}")}o.push(j+" .mv_small{display:block;width:#{h1};height:#{h2};bottom:#{h3};position:absolute;}");if(h=="300"&&s=="100"){o.push(j+" .mv_small .mv_mark{background-color: #ffffff;width:#{i1};height:#{i2};opacity:1;filter:alpha(opacity=100);z-index:2;position:absolute;}")}else{o.push(j+" .mv_small .mv_mark{background-color: #ffffff;width:#{i1};height:#{i2};opacity:0.5;filter:alpha(opacity=50);z-index:2;position:absolute;}")}o.push(j+n+" .mv_item{width:#{j1};height:#{j2};overflow:hidden;}");o.push(j+n+" .mv_itemImg{width:#{k1};height:#{k2};overflow:hidden;text-align: center;"+r+"}");if(q!="s"){o.push(j+" .mv_itemImg a{display:table-cell;width:#{k1};height:#{k2};vertical-align:middle;overflow:hidden;}");o.push(j+" .mv_itemImg span{vertical-align:middle;*display:inline-block;*height:100%;}")}o.push(j+n+" .mv_itemImg img{vertical-align:middle;}");o.push(j+" .mv_itemInfo{display:none;}");if(q=="s"){o.push(j+" .mv_staticItem{position:absolute;z-index:10;}");o.push(j+" .mv_staticItem .mv_itemImg{position: relative;}");o.push(j+" .mv_staticItem .mv_item{-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,0.2);box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-transition:opacity .218s;-moz-transition:opacity .218s;-o-transition:opacity .218s;transition:opacity .218s;background:#fff;border:1px solid #dfdfdf;}");o.push(j+" .mv_staticItem .mv_itemImg a{display:table-cell;vertical-align:middle;text-align:center;*display:block;}");o.push(j+" .mv_staticItem .mv_itemImg span{vertical-align:middle;*display:inline-block;*height:100%;}");o.push(j+" .mv_staticItem .mv_itemImg img{vertical-align:middle;}");o.push(j+" .mv_stacItemInfo{width:#{p1};height:#{p2};position:absolute;left:#{p3};bottom:#{p4};background-color:#{blockbgColor};color:#ffffff;z-index:3;}");o.push(j+" .mv_stacItemInfo a{width:#{p1};height:#{p2};display:block;}");o.push(j+" .mv_stacDesc{width:#{q1};height:#{q2};line-height:#{q3};padding-left:#{q4};background-color:#{blockbgColor};font-weight:#{descBold};float:left;text-align:left;color:#{blockColor};overflow:hidden;}");o.push(j+" .mv_stacSubDesc{width:#{r1};height:#{r2};line-height:#{r3};font-size:#{r4};padding-right:#{r5};background-color:#{blockbgColor};font-weight:#{priceBold};float:right;text-align:right;font-family:Arial;font-weight:bold;color:#{blockColor};overflow:hidden;}")}else{o.push(j+" .mv_itemInfo a{display:block;width:#{l1};height:#{l2};float:left;padding:#{l3} #{l4};overflow:hidden;}");o.push(j+" .mv_desc{width:#{m1};height:#{m2};color:#333333;font-size:#{m3};line-height:#{m4};overflow:hidden;text-align:#{m5};font-weight:#{descBold};}");o.push(j+" .mv_subDesc{width:#{n1};height:#{n2};color:#{priceColor};font-family:Arial;font-size:#{n3};font-weight:#{priceBold};line-height:#{n4};overflow:hidden;text-align:#{n5}}");o.push(j+" .active{width:#{o1};height:#{o2};font-size:#{o3};line-height:#{o4};margin-top:#{o5};margin-left:#{o6};background-color:#{blockbgColor};color:#{blockColor};text-align:center;font-weight:#{activeBold};}");if(h=="640"&&s=="60"){o.push(j+" .mv_subDesc{float:left;}");o.push(j+" .active{float:left;}")}if(h=="300"&&s=="100"){o.push(j+" .mv_staticItem{position:absolute;z-index:10;-moz-transition: opacity .218s;-o-transition: opacity .218s;transition: opacity .218s;background: #fff;}")}else{(q=="v")?o.push(j+" .mv_staticItem{position:absolute;z-index:10;-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);-moz-box-shadow: 0 2px 4px rgba(0,0,0,0.2);box-shadow: 0 2px 4px rgba(0,0,0,0.2);-webkit-transition: opacity .218s;-moz-transition: opacity .218s;-o-transition: opacity .218s;transition: opacity .218s;background: #fff;border-top: 1px solid #dfdfdf;border-bottom: 1px solid #dfdfdf;}"):o.push(j+" .mv_staticItem{position:absolute;z-index:10;-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);-moz-box-shadow: 0 2px 4px rgba(0,0,0,0.2);box-shadow: 0 2px 4px rgba(0,0,0,0.2);-webkit-transition: opacity .218s;-moz-transition: opacity .218s;-o-transition: opacity .218s;transition: opacity .218s;background: #fff;border-left: 1px solid #dfdfdf;border-right: 1px solid #dfdfdf;}")}o.push(j+" .mv_staticItem .mv_itemInfo{display: block;}")}o.push(j+" .mv_staticItem .mv_mark{opacity:0;filter:alpha(opacity=0);}");o.push(j+" .mv-recommend {display: none;}");o.push(j+" .mv_staticItem .mv-recommend {display:block;background-color: #{vtBgColor};color: #{vtColor};font-size: 12px;height: 16px;line-height: 16px;padding: 0 5px;position: absolute;right: 0;top: 0px;z-index: 1;}");var f=o.join("");a.pimgSize={width:m.imgW,height:m.imgH};this.blockWidth=m.h1;this.sliderData={leftWidth:(q=="v")?m.e2:m.e1,smallImgW:m.k1,smallImgH:m.k2,smallImgBottom:m.h3,bigImgW:m.imgW,bigImgH:m.imgH,bigImgBottom:m.bigBottom,bigShowW:m.bigW};this.type=q;return this.template(f,m,true)},viewType:{0:"\u731C\u4F60\u559C\u6B22",1:"\u5173\u6CE8",3:"\u63A8\u8350",4:"\u63A8\u8350",6:"\u70ED\u5356",7:"\u5173\u6CE8"},sizeConfig:{"300x250":{a1:297,a2:248,a3:1,b1:297,b2:44,b3:2,b4:0,c1:297,c2:44,d1:297,d2:173,d3:0,d4:0,e1:65,e2:172,f1:33,f2:33,g1:297,g2:173,h1:99,h2:136,h3:15,i1:99,i2:136,j1:99,j2:136,k1:99,k2:136,p1:297,p2:29,p3:0,p4:0,q1:210,q2:29,q3:29,q4:10,r1:67,r2:29,r3:29,r4:14,r5:10,imgW:168,imgH:168,bigBottom:0,bigW:168},"728x90":{a1:726,a2:88,a3:1,b1:234,b2:88,b3:2,b4:0,c1:234,c2:88,d1:490,d2:88,d3:0,d4:0,e1:100,e2:88,f1:33,f2:33,g1:490,g2:88,h1:290,h2:88,h3:0,i1:100,i2:88,j1:290,j2:88,k1:100,k2:88,l1:175,l2:68,l3:10,l4:5,m1:175,m2:20,m3:12,m4:20,m5:"left",n1:175,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:100,imgH:88,bigBottom:0,bigW:290},"560x90":{a1:558,a2:88,a3:1,b1:164,b2:88,b3:2,b4:0,c1:164,c2:88,d1:392,d2:88,d3:0,d4:0,e1:60,e2:88,f1:33,f2:33,g1:392,g2:88,h1:272,h2:88,h3:0,i1:90,i2:88,j1:272,j2:88,k1:90,k2:88,l1:172,l2:68,l3:10,l4:5,m1:172,m2:20,m3:12,m4:20,m5:"left",n1:172,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:90,imgH:88,bigBottom:0,bigW:272},"660x90":{a1:658,a2:88,a3:1,b1:186,b2:88,b3:2,b4:0,c1:186,c2:88,d1:470,d2:88,d3:0,d4:0,e1:98,e2:88,f1:33,f2:33,g1:470,g2:88,h1:274,h2:88,h3:0,i1:98,i2:88,j1:274,j2:88,k1:98,k2:88,l1:166,l2:68,l3:10,l4:5,m1:166,m2:20,m3:12,m4:20,m5:"left",n1:166,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:98,imgH:88,bigBottom:0,bigW:274},"610x100":{a1:608,a2:98,a3:1,b1:162,b2:98,b3:2,b4:0,c1:162,c2:98,d1:444,d2:98,d3:0,d4:0,e1:86,e2:98,f1:33,f2:33,g1:444,g2:98,h1:272,h2:98,h3:0,i1:98,i2:98,j1:272,j2:98,k1:98,k2:98,l1:164,l2:78,l3:10,l4:5,m1:164,m2:20,m3:12,m4:20,m5:"left",n1:164,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:98,imgH:98,bigBottom:0,bigW:272},"950x90":{a1:948,a2:88,a3:1,b1:290,b2:88,b3:2,b4:0,c1:290,c2:88,d1:564,d2:88,d3:0,d4:46,e1:98,e2:88,f1:33,f2:33,g1:564,g2:88,h1:382,h2:88,h3:0,i1:108,i2:88,j1:382,j2:88,k1:108,k2:88,l1:264,l2:68,l3:10,l4:5,m1:264,m2:20,m3:12,m4:20,m5:"left",n1:264,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:108,imgH:88,bigBottom:0,bigW:382},"960x90":{a1:958,a2:88,a3:1,b1:300,b2:88,b3:2,b4:0,c1:300,c2:88,d1:564,d2:88,d3:0,d4:46,e1:98,e2:88,f1:33,f2:33,g1:564,g2:88,h1:382,h2:88,h3:0,i1:108,i2:88,j1:382,j2:88,k1:108,k2:88,l1:264,l2:68,l3:10,l4:5,m1:264,m2:20,m3:12,m4:20,m5:"left",n1:264,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:108,imgH:88,bigBottom:0,bigW:382},"600x90":{a1:598,a2:88,a3:1,b1:162,b2:88,b3:2,b4:0,c1:162,c2:88,d1:434,d2:88,d3:0,d4:0,e1:80,e2:88,f1:33,f2:33,g1:434,g2:88,h1:274,h2:88,h3:0,i1:92,i2:88,j1:274,j2:88,k1:92,k2:88,l1:172,l2:68,l3:10,l4:5,m1:172,m2:20,m3:12,m4:20,m5:"left",n1:172,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:92,imgH:88,bigBottom:0,bigW:274},"580x90":{a1:578,a2:88,a3:1,b1:162,b2:88,b3:2,b4:0,c1:162,c2:88,d1:414,d2:88,d3:0,d4:0,e1:80,e2:88,f1:33,f2:33,g1:414,g2:88,h1:254,h2:88,h3:0,i1:92,i2:88,j1:254,j2:88,k1:92,k2:88,l1:152,l2:68,l3:10,l4:5,m1:152,m2:20,m3:12,m4:20,m5:"left",n1:152,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:92,imgH:88,bigBottom:0,bigW:274},"640x90":{a1:638,a2:88,a3:1,b1:167,b2:88,b3:2,b4:0,c1:167,c2:88,d1:469,d2:88,d3:0,d4:0,e1:95,e2:88,f1:33,f2:33,g1:469,g2:88,h1:279,h2:88,h3:0,i1:97,i2:88,j1:279,j2:88,k1:97,k2:88,l1:172,l2:68,l3:10,l4:5,m1:172,m2:20,m3:12,m4:20,m5:"left",n1:172,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:92,imgH:88,bigBottom:0,bigW:274},"640x60":{a1:638,a2:58,a3:1,b1:167,b2:58,b3:2,b4:0,c1:167,c2:58,d1:469,d2:58,d3:0,d4:0,e1:95,e2:58,f1:33,f2:33,g1:469,g2:58,h1:279,h2:58,h3:0,i1:97,i2:58,j1:279,j2:58,k1:97,k2:58,l1:172,l2:68,l3:10,l4:5,m1:172,m2:20,m3:12,m4:20,m5:"left",n1:70,n2:20,n3:14,n4:20,n5:"left",o1:70,o2:24,o3:12,o4:24,o5:0,o6:0,imgW:58,imgH:58,bigBottom:0,bigW:274},"250x250":{a1:248,a2:248,a3:1,b1:248,b2:56,b3:2,b4:0,c1:248,c2:56,d1:248,d2:161,d3:0,d4:0,e1:54,e2:161,f1:33,f2:33,g1:248,g2:161,h1:82,h2:116,h3:22,i1:82,i2:116,j1:82,j2:116,k1:82,k2:116,p1:248,p2:30,p3:0,p4:0,q1:161,q2:30,q3:30,q4:10,r1:67,r2:30,r3:30,r4:14,r5:10,imgW:140,imgH:140,bigBottom:10,bigW:140},"200x200":{a1:198,a2:198,a3:1,b1:198,b2:46,b3:2,b4:0,c1:198,c2:46,d1:198,d2:127,d3:0,d4:0,e1:42,e2:127,f1:33,f2:33,g1:198,g2:127,h1:60,h2:90,h3:18,i1:60,i2:90,j1:60,j2:90,k1:60,k2:90,p1:198,p2:24,p3:0,p4:0,q1:124,q2:24,q3:24,q4:10,r1:54,r2:24,r3:24,r4:14,r5:10,imgW:114,imgH:114,bigBottom:6,bigW:114},"300x100":{a1:298,a2:98,a3:1,b1:86,b2:98,b3:2,b4:0,c1:86,c2:98,d1:210,d2:98,d3:0,d4:0,e1:43,e2:98,f1:33,f2:33,g1:210,g2:98,h1:124,h2:98,h3:0,i1:60,i2:98,j1:124,j2:98,k1:60,k2:98,l1:64,l2:78,l3:10,l4:0,m1:64,m2:20,m3:12,m4:20,m5:"left",n1:64,n2:20,n3:14,n4:20,n5:"left",o1:64,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:60,imgH:98,bigBottom:0,bigW:124},"336x280":{a1:334,a2:278,a3:1,b1:334,b2:56,b3:2,b4:0,c1:334,c2:56,d1:334,d2:190,d3:0,d4:0,e1:83,e2:190,f1:33,f2:33,g1:334,g2:190,h1:111,h2:137,h3:25,i1:111,i2:137,j1:111,j2:137,k1:111,k2:137,p1:334,p2:30,p3:0,p4:0,q1:247,q2:30,q3:30,q4:10,r1:67,r2:30,r3:30,r4:14,r5:10,imgW:168,imgH:168,bigBottom:10,bigW:168},"400x300":{a1:398,a2:298,a3:1,b1:398,b2:63,b3:2,b4:0,c1:398,c2:63,d1:398,d2:203,d3:0,d4:0,e1:106,e2:203,f1:33,f2:33,g1:398,g2:203,h1:132,h2:137,h3:31,i1:132,i2:137,j1:132,j2:137,k1:132,k2:137,p1:398,p2:30,p3:0,p4:0,q1:311,q2:30,q3:30,q4:10,r1:67,r2:30,r3:30,r4:14,r5:10,imgW:187,imgH:187,bigBottom:5,bigW:187},"120x600":{a1:118,a2:598,a3:1,b1:118,b2:78,b3:2,b4:10,c1:118,c2:78,d1:118,d2:508,d3:0,d4:0,e1:118,e2:110,f1:33,f2:33,g1:118,g2:508,h1:118,h2:288,h3:0,i1:118,i2:110,j1:118,j2:288,k1:118,k2:110,l1:108,l2:138,l3:10,l4:5,m1:108,m2:40,m3:12,m4:20,m5:"left",n1:108,n2:40,n3:14,n4:40,n5:"center",o1:70,o2:24,o3:12,o4:24,o5:4,o6:20,imgW:118,imgH:130,bigBottom:0,bigW:288},"160x600":{a1:158,a2:598,a3:1,b1:158,b2:82,b3:2,b4:10,c1:158,c2:82,d1:158,d2:504,d3:0,d4:0,e1:158,e2:110,f1:33,f2:33,g1:158,g2:504,h1:158,h2:284,h3:0,i1:158,i2:110,j1:158,j2:284,k1:158,k2:110,l1:148,l2:134,l3:10,l4:5,m1:148,m2:40,m3:12,m4:20,m5:"left",n1:148,n2:40,n3:14,n4:40,n5:"center",o1:70,o2:24,o3:12,o4:24,o5:4,o6:40,imgW:158,imgH:130,bigBottom:0,bigW:284},"320x50":{a1:318,a2:48,a3:1,b1:108,b2:48,b3:1,b4:0,c1:108,c2:48,d1:209,d2:48,d3:0,d4:0,e1:48,e2:48,f1:33,f2:33,g1:209,g2:48,h1:112,h2:48,h3:0,i1:48,i2:48,j1:112,j2:48,k1:48,k2:48,l1:54,l2:44,l3:2,l4:5,m1:54,m2:30,m3:12,m4:14,m5:"left",n1:54,n2:14,n3:12,n4:14,n5:"left",o1:54,o2:24,o3:12,o4:24,o5:4,o6:0,imgW:48,imgH:48,bigBottom:0,bigW:112}},adapStageBorder:function(f,d){var e,g;if(f.bdWidthSize&&f.bdWidthSize>1){e=f.bdWidthSize-f.a3;g=2*e;f.a1-=g;f.a2-=g;f.a3=f.bdWidthSize;f.b1-=g;f.b2-=g;f.c1-=g;f.c2-=g;if(d=="s"){f.d1-=g;f.e1-=e;f.g1-=g;f.p1-=g;f.q1-=g}else{if(d=="h"){f.d2=f.e2=f.g2=f.h2=f.i2=f.j2=f.k2=f.imgH=f.d2-g;f.l3-=e}else{if(d=="v"){f.d1=f.e1=f.g1=f.h1=f.i1=f.j1=f.k1=f.imgW=f.d1-g;f.l4=Math.floor((f.j1-f.l1)/2);f.o6=Math.floor((f.l1-f.o1)/2)}}}}},write:function(f,g,d){var l=document.getElementById("mvdiv_"+f+"_holder");if(!l){var l=document.createElement("div")}l.id="mvdiv_"+f+"_holder";l.innerHTML=g;var m=document.getElementsByTagName("script");var h=m.length;var j,k=false;for(var e=0;e<h;e++){if(m[e].src&&m[e].src==d){j=m[e];j.parentNode.insertBefore(l,j);k=true;break}}if(!k){document.body.appendChild(l)}},appendStyle:function(f,g){var d=document.createElement("style");d.type="text/css";d.rel="stylesheet";d.id=g;document.getElementsByTagName("head")[0].appendChild(d);if(d.styleSheet){d.styleSheet.cssText=f}else{var e=document.createTextNode(f);d.appendChild(e)}},animate:function(g,j,d,i){var h=0,f=this.tween.quad.easeOut;var e=setInterval(function(){h++;for(var k in j){g.style[k]=f(j[k],d[k],h,10)+"px"}if(h>=10){clearInterval(e);if(i){i()}}},40)},tween:{linear:function(g,d,f,e){return g+f/e*d},quad:{easeIn:function(g,d,f,e){return g+Math.pow(f/e,2)*d},easeOut:function(h,d,g,f){var e=g/f;return h-(Math.pow(e,2)-2*e)*d},easeInOut:function(h,d,g,f){var e=g/f*2;return(e<1?Math.pow(e,2):-((--e)*(e-2)-1))*d/2+h}}},monitorClick:function(e,h,g,d){var f=a.G("banner_"+e);function i(k){var l=a.getMousePosition(k,f),j=a.combineHeatmapUrl(h);j+="&wh="+g+"x"+d+"&x="+l.left+"&y="+l.top;a.request(j)}if(f.addEventListener){f.addEventListener("click",i,false)}else{f.attachEvent("onclick",i)}},getMousePosition:function(h,g){var k,f,j,i=document.documentElement,d=document.body;f=h.pageX||h.clientX+(i&&i.scrollLeft||d&&d.scrollLeft||0);j=h.pageY||h.clientY+(i&&i.scrollTop||d&&d.scrollTop||0);k=this.getOffset(g);return{top:Math.round(j-k.top),left:f-k.left}},getOffset:function(f){var e=document.documentElement,d=document.body,g={top:0,left:0};if(typeof f.getBoundingClientRect!==undefined){g=f.getBoundingClientRect()}return{top:g.top+(window.pageYOffset||e.scrollTop||d.scrollTop),left:g.left+(window.pageXOffset||e.scrollLeft||d.scrollLeft)}},combineHeatmapUrl:function(i){var f="http://view.mediav.com/v?type=12&db=mediav",h=this.getQueryString(i,"oimpid")||this.getQueryString(i,"impid"),e=this.getQueryString(i,"pub"),g=this.getQueryString(i,"cus"),d=(new Date()).getTime();return f+"&impid="+h+"&pub="+e+"&cus="+g+"&ts="+d},getQueryString:function(e,d){var f=new RegExp("[\\?&]"+d+"=([^&#]*)"),g=e.match(f);return g==null?"":decodeURIComponent(g[1].replace(/\+/g," "))},request:function(e){var d=document.createElement("img");d.src=e;d.style.display="none";document.body.appendChild(d);setTimeout(function(){document.body.removeChild(d)},1000)}}})();