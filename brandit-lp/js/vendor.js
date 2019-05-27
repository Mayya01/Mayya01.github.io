/*! URI.js v1.18.12 http://medialize.github.io/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(f,m){"object"===typeof module&&module.exports?module.exports=m():"function"===typeof define&&define.amd?define(m):f.IPv6=m(f)})(this,function(f){var m=f&&f.IPv6;return{best:function(h){h=h.toLowerCase().split(":");var k=h.length,b=8;""===h[0]&&""===h[1]&&""===h[2]?(h.shift(),h.shift()):""===h[0]&&""===h[1]?h.shift():""===h[k-1]&&""===h[k-2]&&h.pop();k=h.length;-1!==h[k-1].indexOf(".")&&(b=7);var q;for(q=0;q<k&&""!==h[q];q++);if(q<b)for(h.splice(q,1,"0000");h.length<b;)h.splice(q,0,"0000");
for(q=0;q<b;q++){for(var k=h[q].split(""),f=0;3>f;f++)if("0"===k[0]&&1<k.length)k.splice(0,1);else break;h[q]=k.join("")}var k=-1,m=f=0,g=-1,p=!1;for(q=0;q<b;q++)p?"0"===h[q]?m+=1:(p=!1,m>f&&(k=g,f=m)):"0"===h[q]&&(p=!0,g=q,m=1);m>f&&(k=g,f=m);1<f&&h.splice(k,f,"");k=h.length;b="";""===h[0]&&(b=":");for(q=0;q<k;q++){b+=h[q];if(q===k-1)break;b+=":"}""===h[k-1]&&(b+=":");return b},noConflict:function(){f.IPv6===this&&(f.IPv6=m);return this}}});
(function(f){function m(b){throw new RangeError(w[b]);}function h(b,e){for(var g=b.length,h=[];g--;)h[g]=e(b[g]);return h}function k(b,e){var g=b.split("@"),f="";1<g.length&&(f=g[0]+"@",b=g[1]);b=b.replace(C,".");g=b.split(".");g=h(g,e).join(".");return f+g}function b(b){for(var e=[],g=0,h=b.length,f,a;g<h;)f=b.charCodeAt(g++),55296<=f&&56319>=f&&g<h?(a=b.charCodeAt(g++),56320==(a&64512)?e.push(((f&1023)<<10)+(a&1023)+65536):(e.push(f),g--)):e.push(f);return e}function q(b){return h(b,function(b){var e=
"";65535<b&&(b-=65536,e+=t(b>>>10&1023|55296),b=56320|b&1023);return e+=t(b)}).join("")}function z(b,e){return b+22+75*(26>b)-((0!=e)<<5)}function u(b,g,h){var f=0;b=h?e(b/700):b>>1;for(b+=e(b/g);455<b;f+=36)b=e(b/35);return e(f+36*b/(b+38))}function g(b){var g=[],h=b.length,f=0,k=128,a=72,c,d;var n=b.lastIndexOf("-");0>n&&(n=0);for(c=0;c<n;++c)128<=b.charCodeAt(c)&&m("not-basic"),g.push(b.charCodeAt(c));for(n=0<n?n+1:0;n<h;){c=f;var l=1;for(d=36;;d+=36){n>=h&&m("invalid-input");var x=b.charCodeAt(n++);
x=10>x-48?x-22:26>x-65?x-65:26>x-97?x-97:36;(36<=x||x>e((2147483647-f)/l))&&m("overflow");f+=x*l;var p=d<=a?1:d>=a+26?26:d-a;if(x<p)break;x=36-p;l>e(2147483647/x)&&m("overflow");l*=x}l=g.length+1;a=u(f-c,l,0==c);e(f/l)>2147483647-k&&m("overflow");k+=e(f/l);f%=l;g.splice(f++,0,k)}return q(g)}function p(g){var h,f,k,p=[];g=b(g);var a=g.length;var c=128;var d=0;var n=72;for(k=0;k<a;++k){var l=g[k];128>l&&p.push(t(l))}for((h=f=p.length)&&p.push("-");h<a;){var x=2147483647;for(k=0;k<a;++k)l=g[k],l>=c&&
l<x&&(x=l);var q=h+1;x-c>e((2147483647-d)/q)&&m("overflow");d+=(x-c)*q;c=x;for(k=0;k<a;++k)if(l=g[k],l<c&&2147483647<++d&&m("overflow"),l==c){var r=d;for(x=36;;x+=36){l=x<=n?1:x>=n+26?26:x-n;if(r<l)break;var A=r-l;r=36-l;p.push(t(z(l+A%r,0)));r=e(A/r)}p.push(t(z(r,0)));n=u(d,q,h==f);d=0;++h}++d;++c}return p.join("")}var D="object"==typeof exports&&exports&&!exports.nodeType&&exports,A="object"==typeof module&&module&&!module.nodeType&&module,B="object"==typeof global&&global;if(B.global===B||B.window===
B||B.self===B)f=B;var E=/^xn--/,r=/[^\x20-\x7E]/,C=/[\x2E\u3002\uFF0E\uFF61]/g,w={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},e=Math.floor,t=String.fromCharCode,y;var v={version:"1.3.2",ucs2:{decode:b,encode:q},decode:g,encode:p,toASCII:function(b){return k(b,function(b){return r.test(b)?"xn--"+p(b):b})},toUnicode:function(b){return k(b,function(b){return E.test(b)?g(b.slice(4).toLowerCase()):
b})}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return v});else if(D&&A)if(module.exports==D)A.exports=v;else for(y in v)v.hasOwnProperty(y)&&(D[y]=v[y]);else f.punycode=v})(this);
(function(f,m){"object"===typeof module&&module.exports?module.exports=m():"function"===typeof define&&define.amd?define(m):f.SecondLevelDomains=m(f)})(this,function(f){var m=f&&f.SecondLevelDomains,h={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",
bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",
es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",
mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",
ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",
ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",
org:"ae",de:"com "},has:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1)return!1;var k=f.lastIndexOf(".",b-1);if(0>=k||k>=b-1)return!1;var m=h.list[f.slice(b+1)];return m?0<=m.indexOf(" "+f.slice(k+1,b)+" "):!1},is:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1||0<=f.lastIndexOf(".",b-1))return!1;var k=h.list[f.slice(b+1)];return k?0<=k.indexOf(" "+f.slice(0,b)+" "):!1},get:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1)return null;var k=f.lastIndexOf(".",b-1);
if(0>=k||k>=b-1)return null;var m=h.list[f.slice(b+1)];return!m||0>m.indexOf(" "+f.slice(k+1,b)+" ")?null:f.slice(k+1)},noConflict:function(){f.SecondLevelDomains===this&&(f.SecondLevelDomains=m);return this}};return h});
(function(f,m){"object"===typeof module&&module.exports?module.exports=m(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],m):f.URI=m(f.punycode,f.IPv6,f.SecondLevelDomains,f)})(this,function(f,m,h,k){function b(a,c){var d=1<=arguments.length,n=2<=arguments.length;if(!(this instanceof b))return d?n?new b(a,c):new b(a):new b;if(void 0===a){if(d)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}if(null===a&&d)throw new TypeError("null is not a valid argument for URI");this.href(a);return void 0!==c?this.absoluteTo(c):this}function q(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function z(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function u(a){return"Array"===z(a)}function g(a,c){var d={},b;if("RegExp"===z(c))d=null;else if(u(c)){var l=0;for(b=c.length;l<b;l++)d[c[l]]=!0}else d[c]=
!0;l=0;for(b=a.length;l<b;l++)if(d&&void 0!==d[a[l]]||!d&&c.test(a[l]))a.splice(l,1),b--,l--;return a}function p(a,c){var d;if(u(c)){var b=0;for(d=c.length;b<d;b++)if(!p(a,c[b]))return!1;return!0}var l=z(c);b=0;for(d=a.length;b<d;b++)if("RegExp"===l){if("string"===typeof a[b]&&a[b].match(c))return!0}else if(a[b]===c)return!0;return!1}function D(a,c){if(!u(a)||!u(c)||a.length!==c.length)return!1;a.sort();c.sort();for(var d=0,b=a.length;d<b;d++)if(a[d]!==c[d])return!1;return!0}function A(a){return a.replace(/^\/+|\/+$/g,
"")}function B(a){return escape(a)}function E(a){return encodeURIComponent(a).replace(/[!'()*]/g,B).replace(/\*/g,"%2A")}function r(a){return function(c,d){if(void 0===c)return this._parts[a]||"";this._parts[a]=c||null;this.build(!d);return this}}function C(a,c){return function(d,b){if(void 0===d)return this._parts[a]||"";null!==d&&(d+="",d.charAt(0)===c&&(d=d.substring(1)));this._parts[a]=d;this.build(!b);return this}}var w=k&&k.URI;b.version="1.18.12";var e=b.prototype,t=Object.prototype.hasOwnProperty;
b._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:b.duplicateQueryParameters,escapeQuerySpace:b.escapeQuerySpace}};b.duplicateQueryParameters=!1;b.escapeQuerySpace=!0;b.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;b.idn_expression=/[^a-z0-9\._-]/i;b.punycode_expression=/(xn--)/i;b.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;b.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
b.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;b.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g};b.defaultPorts={http:"80",https:"443",ftp:"21",
gopher:"70",ws:"80",wss:"443"};b.hostProtocols=["http","https"];b.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/;b.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};b.getDomAttribute=function(a){if(a&&a.nodeName){var c=a.nodeName.toLowerCase();if("input"!==c||"image"===a.type)return b.domAttributes[c]}};b.encode=E;b.decode=decodeURIComponent;b.iso8859=
function(){b.encode=escape;b.decode=unescape};b.unicode=function(){b.encode=E;b.decode=decodeURIComponent};b.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@",
"%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};b.encodeQuery=function(a,c){var d=b.encode(a+"");void 0===c&&(c=b.escapeQuerySpace);return c?d.replace(/%20/g,"+"):d};b.decodeQuery=
function(a,c){a+="";void 0===c&&(c=b.escapeQuerySpace);try{return b.decode(c?a.replace(/\+/g,"%20"):a)}catch(d){return a}};var y={encode:"encode",decode:"decode"},v,F=function(a,c){return function(d){try{return b[c](d+"").replace(b.characters[a][c].expression,function(d){return b.characters[a][c].map[d]})}catch(n){return d}}};for(v in y)b[v+"PathSegment"]=F("pathname",y[v]),b[v+"UrnPathSegment"]=F("urnpath",y[v]);y=function(a,c,d){return function(n){var l=d?function(a){return b[c](b[d](a))}:b[c];
n=(n+"").split(a);for(var e=0,g=n.length;e<g;e++)n[e]=l(n[e]);return n.join(a)}};b.decodePath=y("/","decodePathSegment");b.decodeUrnPath=y(":","decodeUrnPathSegment");b.recodePath=y("/","encodePathSegment","decode");b.recodeUrnPath=y(":","encodeUrnPathSegment","decode");b.encodeReserved=F("reserved","encode");b.parse=function(a,c){c||(c={});var d=a.indexOf("#");-1<d&&(c.fragment=a.substring(d+1)||null,a=a.substring(0,d));d=a.indexOf("?");-1<d&&(c.query=a.substring(d+1)||null,a=a.substring(0,d));"//"===
a.substring(0,2)?(c.protocol=null,a=a.substring(2),a=b.parseAuthority(a,c)):(d=a.indexOf(":"),-1<d&&(c.protocol=a.substring(0,d)||null,c.protocol&&!c.protocol.match(b.protocol_expression)?c.protocol=void 0:"//"===a.substring(d+1,d+3)?(a=a.substring(d+3),a=b.parseAuthority(a,c)):(a=a.substring(d+1),c.urn=!0)));c.path=a;return c};b.parseHost=function(a,c){a=a.replace(/\\/g,"/");var d=a.indexOf("/");-1===d&&(d=a.length);if("["===a.charAt(0)){var n=a.indexOf("]");c.hostname=a.substring(1,n)||null;c.port=
a.substring(n+2,d)||null;"/"===c.port&&(c.port=null)}else{var l=a.indexOf(":");n=a.indexOf("/");l=a.indexOf(":",l+1);-1!==l&&(-1===n||l<n)?(c.hostname=a.substring(0,d)||null,c.port=null):(n=a.substring(0,d).split(":"),c.hostname=n[0]||null,c.port=n[1]||null)}c.hostname&&"/"!==a.substring(d).charAt(0)&&(d++,a="/"+a);b.ensureValidHostname(c.hostname,c.protocol);c.port&&b.ensureValidPort(c.port);return a.substring(d)||"/"};b.parseAuthority=function(a,c){a=b.parseUserinfo(a,c);return b.parseHost(a,c)};
b.parseUserinfo=function(a,c){var d=a.indexOf("/"),n=a.lastIndexOf("@",-1<d?d:a.length-1);-1<n&&(-1===d||n<d)?(d=a.substring(0,n).split(":"),c.username=d[0]?b.decode(d[0]):null,d.shift(),c.password=d[0]?b.decode(d.join(":")):null,a=a.substring(n+1)):(c.username=null,c.password=null);return a};b.parseQuery=function(a,c){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var d={},n=a.split("&"),l=n.length,e,g,f=0;f<l;f++)if(e=n[f].split("="),g=b.decodeQuery(e.shift(),
c),e=e.length?b.decodeQuery(e.join("="),c):null,t.call(d,g)){if("string"===typeof d[g]||null===d[g])d[g]=[d[g]];d[g].push(e)}else d[g]=e;return d};b.build=function(a){var c="";a.protocol&&(c+=a.protocol+":");a.urn||!c&&!a.hostname||(c+="//");c+=b.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(c+="/"),c+=a.path);"string"===typeof a.query&&a.query&&(c+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(c+="#"+a.fragment);return c};b.buildHost=
function(a){var c="";if(a.hostname)c=b.ip6_expression.test(a.hostname)?c+("["+a.hostname+"]"):c+a.hostname;else return"";a.port&&(c+=":"+a.port);return c};b.buildAuthority=function(a){return b.buildUserinfo(a)+b.buildHost(a)};b.buildUserinfo=function(a){var c="";a.username&&(c+=b.encode(a.username));a.password&&(c+=":"+b.encode(a.password));c&&(c+="@");return c};b.buildQuery=function(a,c,d){var n="",l,e;for(l in a)if(t.call(a,l)&&l)if(u(a[l])){var g={};var f=0;for(e=a[l].length;f<e;f++)void 0!==a[l][f]&&
void 0===g[a[l][f]+""]&&(n+="&"+b.buildQueryParameter(l,a[l][f],d),!0!==c&&(g[a[l][f]+""]=!0))}else void 0!==a[l]&&(n+="&"+b.buildQueryParameter(l,a[l],d));return n.substring(1)};b.buildQueryParameter=function(a,c,d){return b.encodeQuery(a,d)+(null!==c?"="+b.encodeQuery(c,d):"")};b.addQuery=function(a,c,d){if("object"===typeof c)for(var n in c)t.call(c,n)&&b.addQuery(a,n,c[n]);else if("string"===typeof c)void 0===a[c]?a[c]=d:("string"===typeof a[c]&&(a[c]=[a[c]]),u(d)||(d=[d]),a[c]=(a[c]||[]).concat(d));
else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};b.removeQuery=function(a,c,d){var n;if(u(c))for(d=0,n=c.length;d<n;d++)a[c[d]]=void 0;else if("RegExp"===z(c))for(n in a)c.test(n)&&(a[n]=void 0);else if("object"===typeof c)for(n in c)t.call(c,n)&&b.removeQuery(a,n,c[n]);else if("string"===typeof c)void 0!==d?"RegExp"===z(d)?!u(a[c])&&d.test(a[c])?a[c]=void 0:a[c]=g(a[c],d):a[c]!==String(d)||u(d)&&1!==d.length?u(a[c])&&(a[c]=g(a[c],d)):a[c]=void 0:a[c]=void 0;
else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};b.hasQuery=function(a,c,d,n){switch(z(c)){case "String":break;case "RegExp":for(var l in a)if(t.call(a,l)&&c.test(l)&&(void 0===d||b.hasQuery(a,l,d)))return!0;return!1;case "Object":for(var e in c)if(t.call(c,e)&&!b.hasQuery(a,e,c[e]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(z(d)){case "Undefined":return c in
a;case "Boolean":return a=!(u(a[c])?!a[c].length:!a[c]),d===a;case "Function":return!!d(a[c],c,a);case "Array":return u(a[c])?(n?p:D)(a[c],d):!1;case "RegExp":return u(a[c])?n?p(a[c],d):!1:!(!a[c]||!a[c].match(d));case "Number":d=String(d);case "String":return u(a[c])?n?p(a[c],d):!1:a[c]===d;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};b.joinPaths=function(){for(var a=[],c=[],d=0,n=0;n<arguments.length;n++){var l=
new b(arguments[n]);a.push(l);for(var l=l.segment(),e=0;e<l.length;e++)"string"===typeof l[e]&&c.push(l[e]),l[e]&&d++}if(!c.length||!d)return new b("");c=(new b("")).segment(c);""!==a[0].path()&&"/"!==a[0].path().slice(0,1)||c.path("/"+c.path());return c.normalize()};b.commonPath=function(a,c){var d=Math.min(a.length,c.length),b;for(b=0;b<d;b++)if(a.charAt(b)!==c.charAt(b)){b--;break}if(1>b)return a.charAt(0)===c.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(b)||"/"!==c.charAt(b))b=a.substring(0,
b).lastIndexOf("/");return a.substring(0,b+1)};b.withinString=function(a,c,d){d||(d={});var n=d.start||b.findUri.start,l=d.end||b.findUri.end,e=d.trim||b.findUri.trim,g=d.parens||b.findUri.parens,f=/[a-z0-9-]=["']?$/i;for(n.lastIndex=0;;){var h=n.exec(a);if(!h)break;var k=h.index;if(d.ignoreHtml){var p=a.slice(Math.max(k-3,0),k);if(p&&f.test(p))continue}for(var m=k+a.slice(k).search(l),p=a.slice(k,m),m=-1;;){var r=g.exec(p);if(!r)break;m=Math.max(m,r.index+r[0].length)}p=-1<m?p.slice(0,m)+p.slice(m).replace(e,
""):p.replace(e,"");p.length<=h[0].length||d.ignore&&d.ignore.test(p)||(m=k+p.length,h=c(p,k,m,a),void 0===h?n.lastIndex=m:(h=String(h),a=a.slice(0,k)+h+a.slice(m),n.lastIndex=k+h.length))}n.lastIndex=0;return a};b.ensureValidHostname=function(a,c){var d=!!a,e=!1;c&&(e=p(b.hostProtocols,c));if(e&&!d)throw new TypeError("Hostname cannot be empty, if protocol is "+c);if(a&&a.match(b.invalid_hostname_characters)){if(!f)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
if(f.toASCII(a).match(b.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_]');}};b.ensureValidPort=function(a){if(a){var c=Number(a);if(!(/^[0-9]+$/.test(c)&&0<c&&65536>c))throw new TypeError('Port "'+a+'" is not a valid port');}};b.noConflict=function(a){if(a)return a={URI:this.noConflict()},k.URITemplate&&"function"===typeof k.URITemplate.noConflict&&(a.URITemplate=k.URITemplate.noConflict()),k.IPv6&&"function"===typeof k.IPv6.noConflict&&
(a.IPv6=k.IPv6.noConflict()),k.SecondLevelDomains&&"function"===typeof k.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=k.SecondLevelDomains.noConflict()),a;k.URI===this&&(k.URI=w);return this};e.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=b.build(this._parts),this._deferred_build=!1;return this};e.clone=function(){return new b(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=r("protocol");e.username=
r("username");e.password=r("password");e.hostname=r("hostname");e.port=r("port");e.query=C("query","?");e.fragment=C("fragment","#");e.search=function(a,c){var b=this.query(a,c);return"string"===typeof b&&b.length?"?"+b:b};e.hash=function(a,c){var b=this.fragment(a,c);return"string"===typeof b&&b.length?"#"+b:b};e.pathname=function(a,c){if(void 0===a||!0===a){var d=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?b.decodeUrnPath:b.decodePath)(d):d}this._parts.path=this._parts.urn?
a?b.recodeUrnPath(a):"":a?b.recodePath(a):"/";this.build(!c);return this};e.path=e.pathname;e.href=function(a,c){var d;if(void 0===a)return this.toString();this._string="";this._parts=b._parts();var e=a instanceof b,l="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(l=b.getDomAttribute(a),a=a[l]||"",l=!1);!e&&l&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=b.parse(String(a),this._parts);else if(e||l)for(d in e=e?a._parts:a,e)t.call(this._parts,
d)&&(this._parts[d]=e[d]);else throw new TypeError("invalid input");this.build(!c);return this};e.is=function(a){var c=!1,d=!1,e=!1,l=!1,g=!1,f=!1,k=!1,p=!this._parts.urn;this._parts.hostname&&(p=!1,d=b.ip4_expression.test(this._parts.hostname),e=b.ip6_expression.test(this._parts.hostname),c=d||e,g=(l=!c)&&h&&h.has(this._parts.hostname),f=l&&b.idn_expression.test(this._parts.hostname),k=l&&b.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return p;case "absolute":return!p;
case "domain":case "name":return l;case "sld":return g;case "ip":return c;case "ip4":case "ipv4":case "inet4":return d;case "ip6":case "ipv6":case "inet6":return e;case "idn":return f;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return k}return null};var G=e.protocol,H=e.port,I=e.hostname;e.protocol=function(a,c){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(b.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
return G.call(this,a,c)};e.scheme=e.protocol;e.port=function(a,c){if(this._parts.urn)return void 0===a?"":this;void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),b.ensureValidPort(a)));return H.call(this,a,c)};e.hostname=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var d={};if("/"!==b.parseHost(a,d))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=d.hostname;b.ensureValidHostname(a,this._parts.protocol)}return I.call(this,
a,c)};e.origin=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=this.protocol();return this.authority()?(d?d+"://":"")+this.authority():""}d=b(a);this.protocol(d.protocol()).authority(d.authority()).build(!c);return this};e.host=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildHost(this._parts):"";if("/"!==b.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');
this.build(!c);return this};e.authority=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildAuthority(this._parts):"";if("/"!==b.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!c);return this};e.userinfo=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=b.buildUserinfo(this._parts);return d?d.substring(0,d.length-1):d}"@"!==a[a.length-1]&&
(a+="@");b.parseUserinfo(a,this._parts);this.build(!c);return this};e.resource=function(a,c){if(void 0===a)return this.path()+this.search()+this.hash();var d=b.parse(a);this._parts.path=d.path;this._parts.query=d.query;this._parts.fragment=d.fragment;this.build(!c);return this};e.subdomain=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,
d)||""}d=this._parts.hostname.length-this.domain().length;d=this._parts.hostname.substring(0,d);d=new RegExp("^"+q(d));a&&"."!==a.charAt(a.length-1)&&(a+=".");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");a&&b.ensureValidHostname(a,this._parts.protocol);this._parts.hostname=this._parts.hostname.replace(d,a);this.build(!c);return this};e.domain=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||
this.is("IP"))return"";var d=this._parts.hostname.match(/\./g);if(d&&2>d.length)return this._parts.hostname;d=this._parts.hostname.length-this.tld(c).length-1;d=this._parts.hostname.lastIndexOf(".",d-1)+1;return this._parts.hostname.substring(d)||""}if(!a)throw new TypeError("cannot set domain empty");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");b.ensureValidHostname(a,this._parts.protocol);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(d=new RegExp(q(this.domain())+
"$"),this._parts.hostname=this._parts.hostname.replace(d,a));this.build(!c);return this};e.tld=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var b=this._parts.hostname.lastIndexOf("."),b=this._parts.hostname.substring(b+1);return!0!==c&&h&&h.list[b.toLowerCase()]?h.get(this._parts.hostname)||b:b}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(h&&h.is(a))b=new RegExp(q(this.tld())+"$"),this._parts.hostname=
this._parts.hostname.replace(b,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");b=new RegExp(q(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(b,a)}else throw new TypeError("cannot set TLD empty");this.build(!c);return this};e.directory=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&
!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var d=this._parts.path.length-this.filename().length-1,d=this._parts.path.substring(0,d)||(this._parts.hostname?"/":"");return a?b.decodePath(d):d}d=this._parts.path.length-this.filename().length;d=this._parts.path.substring(0,d);d=new RegExp("^"+q(d));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=b.recodePath(a);this._parts.path=this._parts.path.replace(d,a);this.build(!c);
return this};e.filename=function(a,c){if(this._parts.urn)return void 0===a?"":this;if("string"!==typeof a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this._parts.path.lastIndexOf("/"),d=this._parts.path.substring(d+1);return a?b.decodePathSegment(d):d}d=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(d=!0);var e=new RegExp(q(this.filename())+"$");a=b.recodePath(a);this._parts.path=this._parts.path.replace(e,a);d?this.normalizePath(c):this.build(!c);return this};e.suffix=
function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this.filename(),e=d.lastIndexOf(".");if(-1===e)return"";d=d.substring(e+1);d=/^[a-z0-9%]+$/i.test(d)?d:"";return a?b.decodePathSegment(d):d}"."===a.charAt(0)&&(a=a.substring(1));if(d=this.suffix())e=a?new RegExp(q(d)+"$"):new RegExp(q("."+d)+"$");else{if(!a)return this;this._parts.path+="."+b.recodePath(a)}e&&(a=b.recodePath(a),this._parts.path=this._parts.path.replace(e,
a));this.build(!c);return this};e.segment=function(a,c,b){var d=this._parts.urn?":":"/",e=this.path(),g="/"===e.substring(0,1),e=e.split(d);void 0!==a&&"number"!==typeof a&&(b=c,c=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');g&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===c)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(u(c)){e=[];a=0;for(var f=c.length;a<f;a++)if(c[a].length||e.length&&e[e.length-1].length)e.length&&!e[e.length-
1].length&&e.pop(),e.push(A(c[a]))}else{if(c||"string"===typeof c)c=A(c),""===e[e.length-1]?e[e.length-1]=c:e.push(c)}else c?e[a]=A(c):e.splice(a,1);g&&e.unshift("");return this.path(e.join(d),b)};e.segmentCoded=function(a,c,d){var e;"number"!==typeof a&&(d=c,c=a,a=void 0);if(void 0===c){a=this.segment(a,c,d);if(u(a)){var g=0;for(e=a.length;g<e;g++)a[g]=b.decode(a[g])}else a=void 0!==a?b.decode(a):void 0;return a}if(u(c))for(g=0,e=c.length;g<e;g++)c[g]=b.encode(c[g]);else c="string"===typeof c||c instanceof
String?b.encode(c):c;return this.segment(a,c,d)};var J=e.query;e.query=function(a,c){if(!0===a)return b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,d);this._parts.query=b.buildQuery(e||d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!c);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=b.buildQuery(a,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace),this.build(!c),this):J.call(this,a,c)};e.setQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==c?c:null;else if("object"===typeof a)for(var g in a)t.call(a,g)&&(e[g]=a[g]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&
(d=c);this.build(!d);return this};e.addQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.addQuery(e,a,void 0===c?null:c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.removeQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.removeQuery(e,a,c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.hasQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return b.hasQuery(e,a,c,d)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&f?this._parts.hostname=f.toASCII(this._parts.hostname):this.is("IPv6")&&m&&(this._parts.hostname=m.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===b.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};e.normalizePath=function(a){var c=this._parts.path;if(!c)return this;if(this._parts.urn)return this._parts.path=b.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;var c=b.recodePath(c),d="";if("/"!==c.charAt(0)){var e=!0;c="/"+c}if("/.."===c.slice(-3)||"/."===c.slice(-2))c+="/";c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");e&&(d=c.substring(1).match(/^(\.\.\/)+/)||
"")&&(d=d[0]);for(;;){var g=c.search(/\/\.\.(\/|$)/);if(-1===g)break;else if(0===g){c=c.substring(3);continue}var f=c.substring(0,g).lastIndexOf("/");-1===f&&(f=g);c=c.substring(0,f)+c.substring(g+3)}e&&this.is("relative")&&(c=d+c.substring(1));this._parts.path=c;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(b.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=
null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=b.encode,c=b.decode;b.encode=escape;b.decode=decodeURIComponent;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};e.unicode=function(){var a=b.encode,c=b.decode;b.encode=E;b.decode=unescape;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};
e.readable=function(){var a=this.clone();a.username("").password("").normalize();var c="";a._parts.protocol&&(c+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&f?(c+=f.toUnicode(a._parts.hostname),a._parts.port&&(c+=":"+a._parts.port)):c+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(c+="/");c+=a.path(!0);if(a._parts.query){for(var d="",e=0,g=a._parts.query.split("&"),h=g.length;e<h;e++){var k=(g[e]||"").split("="),d=d+("&"+b.decodeQuery(k[0],this._parts.escapeQuerySpace).replace(/&/g,
"%26"));void 0!==k[1]&&(d+="="+b.decodeQuery(k[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}c+="?"+d.substring(1)}return c+=b.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var c=this.clone(),d=["protocol","username","password","hostname","port"],e,g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof b||(a=new b(a));if(c._parts.protocol)return c;c._parts.protocol=a._parts.protocol;if(this._parts.hostname)return c;for(e=0;g=d[e];e++)c._parts[g]=
a._parts[g];c._parts.path?(".."===c._parts.path.substring(-2)&&(c._parts.path+="/"),"/"!==c.path().charAt(0)&&(d=(d=a.directory())?d:0===a.path().indexOf("/")?"/":"",c._parts.path=(d?d+"/":"")+c._parts.path,c.normalizePath())):(c._parts.path=a._parts.path,c._parts.query||(c._parts.query=a._parts.query));c.build();return c};e.relativeTo=function(a){var c=this.clone().normalize();if(c._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new b(a)).normalize();var d=
c._parts;var e=a._parts;var g=c.path();a=a.path();if("/"!==g.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");d.protocol===e.protocol&&(d.protocol=null);if(d.username===e.username&&d.password===e.password&&null===d.protocol&&null===d.username&&null===d.password&&d.hostname===e.hostname&&d.port===e.port)d.hostname=null,d.port=null;else return c.build();if(g===a)return d.path="",c.build();g=b.commonPath(g,a);
if(!g)return c.build();e=e.path.substring(g.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");d.path=e+d.path.substring(g.length)||"./";return c.build()};e.equals=function(a){var c=this.clone(),d=new b(a);a={};var e;c.normalize();d.normalize();if(c.toString()===d.toString())return!0;var g=c.query();var f=d.query();c.query("");d.query("");if(c.toString()!==d.toString()||g.length!==f.length)return!1;c=b.parseQuery(g,this._parts.escapeQuerySpace);f=b.parseQuery(f,this._parts.escapeQuerySpace);for(e in c)if(t.call(c,
e)){if(!u(c[e])){if(c[e]!==f[e])return!1}else if(!D(c[e],f[e]))return!1;a[e]=!0}for(e in f)if(t.call(f,e)&&!a[e])return!1;return!0};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return b});
(function(f,m){"object"===typeof module&&module.exports?module.exports=m(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],m):f.URITemplate=m(f.URI,f)})(this,function(f,m){function h(b){if(h._cache[b])return h._cache[b];if(!(this instanceof h))return new h(b);this.expression=b;h._cache[b]=this;return this}function k(b){this.data=b;this.cache={}}var b=m&&m.URITemplate,q=Object.prototype.hasOwnProperty,z=h.prototype,u={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,
encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},
"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};h._cache={};h.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;h.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/;h.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/;h.LITERAL_PATTERN=/[<>{}"`^| \\]/;h.expand=function(b,f,k){var g=u[b.operator],p=g.named?"Named":"Unnamed";b=b.variables;var m=[],r,q;for(q=0;r=b[q];q++){var w=f.get(r.name);if(0===w.type&&k&&k.strict)throw Error('Missing expansion value for variable "'+
r.name+'"');if(w.val.length){if(1<w.type&&r.maxlength)throw Error('Invalid expression: Prefix modifier not applicable to variable "'+r.name+'"');m.push(h["expand"+p](w,g,r.explode,r.explode&&g.separator||",",r.maxlength,r.name))}else w.type&&m.push("")}return m.length?g.prefix+m.join(g.separator):""};h.expandNamed=function(b,h,k,m,q,u){var g="",p=h.encode;h=h.empty_name_separator;var A=!b[p].length,e=2===b.type?"":f[p](u),t;var y=0;for(t=b.val.length;y<t;y++){if(q){var v=f[p](b.val[y][1].substring(0,
q));2===b.type&&(e=f[p](b.val[y][0].substring(0,q)))}else A?(v=f[p](b.val[y][1]),2===b.type?(e=f[p](b.val[y][0]),b[p].push([e,v])):b[p].push([void 0,v])):(v=b[p][y][1],2===b.type&&(e=b[p][y][0]));g&&(g+=m);k?g+=e+(h||v?"=":"")+v:(y||(g+=f[p](u)+(h||v?"=":"")),2===b.type&&(g+=e+","),g+=v)}return g};h.expandUnnamed=function(b,h,k,m,q){var g="",p=h.encode;h=h.empty_name_separator;var A=!b[p].length,w;var e=0;for(w=b.val.length;e<w;e++){if(q)var t=f[p](b.val[e][1].substring(0,q));else A?(t=f[p](b.val[e][1]),
b[p].push([2===b.type?f[p](b.val[e][0]):void 0,t])):t=b[p][e][1];g&&(g+=m);if(2===b.type){var u=q?f[p](b.val[e][0].substring(0,q)):b[p][e][0];g+=u;g=k?g+(h||t?"=":""):g+","}g+=t}return g};h.noConflict=function(){m.URITemplate===h&&(m.URITemplate=b);return h};z.expand=function(b,f){var g="";this.parts&&this.parts.length||this.parse();b instanceof k||(b=new k(b));for(var p=0,m=this.parts.length;p<m;p++)g+="string"===typeof this.parts[p]?this.parts[p]:h.expand(this.parts[p],b,f);return g};z.parse=function(){var b=
this.expression,f=h.EXPRESSION_PATTERN,k=h.VARIABLE_PATTERN,m=h.VARIABLE_NAME_PATTERN,q=h.LITERAL_PATTERN,z=[],r=0,C=function(b){if(b.match(q))throw Error('Invalid Literal "'+b+'"');return b};for(f.lastIndex=0;;){var w=f.exec(b);if(null===w){z.push(C(b.substring(r)));break}else z.push(C(b.substring(r,w.index))),r=w.index+w[0].length;if(!u[w[1]])throw Error('Unknown Operator "'+w[1]+'" in "'+w[0]+'"');if(!w[3])throw Error('Unclosed Expression "'+w[0]+'"');var e=w[2].split(",");for(var t=0,y=e.length;t<
y;t++){var v=e[t].match(k);if(null===v)throw Error('Invalid Variable "'+e[t]+'" in "'+w[0]+'"');if(v[1].match(m))throw Error('Invalid Variable Name "'+v[1]+'" in "'+w[0]+'"');e[t]={name:v[1],explode:!!v[3],maxlength:v[4]&&parseInt(v[4],10)}}if(!e.length)throw Error('Expression Missing Variable(s) "'+w[0]+'"');z.push({expression:w[0],operator:w[1],variables:e})}z.length||z.push(C(b));this.parts=z;return this};k.prototype.get=function(b){var f=this.data,g={type:0,val:[],encode:[],encodeReserved:[]};
if(void 0!==this.cache[b])return this.cache[b];this.cache[b]=g;f="[object Function]"===String(Object.prototype.toString.call(f))?f(b):"[object Function]"===String(Object.prototype.toString.call(f[b]))?f[b](b):f[b];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){var h=0;for(b=f.length;h<b;h++)void 0!==f[h]&&null!==f[h]&&g.val.push([void 0,String(f[h])]);g.val.length&&(g.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(h in f)q.call(f,
h)&&void 0!==f[h]&&null!==f[h]&&g.val.push([h,String(f[h])]);g.val.length&&(g.type=2)}else g.type=1,g.val.push([void 0,String(f)]);return g};f.expand=function(b,k){var g=(new h(b)).expand(k);return new f(g)};return h});

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s,H,f,w){var K=f("html"),q=f(s),p=f(H),b=f.fancybox=function(){b.open.apply(this,arguments)},J=navigator.userAgent.match(/msie/i),C=null,t=H.createTouch!==w,u=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},F=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!t,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(J?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=u(a)?f(a).get():[a]),f.each(a,function(e,c){var l={},g,h,k,n,m;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),u(c)?(l={href:c.data("fancybox-href")||c.attr("href"),title:f("<div/>").text(c.data("fancybox-title")||c.attr("title")).html(),isDom:!0,element:c},
f.metadata&&f.extend(!0,l,c.metadata())):l=c);g=d.href||l.href||(r(c)?c:null);h=d.title!==w?d.title:l.title||"";n=(k=d.content||l.content)?"html":d.type||l.type;!n&&l.isDom&&(n=c.data("fancybox-type"),n||(n=(n=c.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(c)&&(n="html",k=c)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));k||("inline"===n?g?k=f(r(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):l.isDom&&(k=c):
"html"===n?k=g:n||g||!l.isDom||(n="inline",k=c));f.extend(l,{href:g,type:n,content:k,title:h,selector:m});a[e]=l}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==w&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),
b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&
(b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")):c()},next:function(a){var d=b.current;d&&(r(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=
b.current;d&&(r(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=m(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==w&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,l;c&&(l=b._getPosition(d),a&&"scroll"===a.type?(delete l.position,c.stop(!0,!0).animate(l,200)):(c.css(l),e.pos=f.extend({},e.dim,l)))},
update:function(a){var d=a&&a.originalEvent&&a.originalEvent.type,e=!d||"orientationchange"===d;e&&(clearTimeout(C),C=null);b.isOpen&&!C&&(C=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),C=null)},e&&!t?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,t&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}));b.trigger("onLoading")},getViewport:function(){var a=b.current&&
b.current.locked||!1,d={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=t&&s.innerWidth?s.innerWidth:q.width(),d.h=t&&s.innerHeight?s.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&u(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(t?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=
e.which||e.keyCode,l=e.target||e.srcElement;if(27===c&&b.coming)return!1;e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||l&&(l.type||f(l).is("[contenteditable]"))||f.each(d,function(d,l){if(1<a.group.length&&l[c]!==w)return b[d](l[c]),e.preventDefault(),!1;if(-1<f.inArray(c,l))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,l,g){for(var h=f(d.target||null),k=!1;h.length&&!(k||h.is(".fancybox-skin")||h.is(".fancybox-wrap"));)k=h[0]&&!(h[0].style.overflow&&
"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();0!==c&&!k&&1<b.group.length&&!a.canShrink&&(0<g||0<l?b.prev(0<g?"down":"left"):(0>g||0>l)&&b.next(0>g?"up":"right"),d.preventDefault())}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&
b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=m(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,
c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&t&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(t?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");
if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",t?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);t||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||
b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,l,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();e=a.content;c=a.type;l=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):u(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":e=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}u(e)&&e.parent().is(a.inner)||a.inner.append(e);b.trigger("beforeShow");
a.inner.css("overflow","yes"===l?"scroll":"no"===l?"hidden":l);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(d.prevMethod)b.transitions[d.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,l=b.skin,g=b.inner,h=b.current,c=h.width,k=h.height,n=h.minWidth,v=h.minHeight,p=h.maxWidth,
q=h.maxHeight,t=h.scrolling,r=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,z=m(y[1]+y[3]),s=m(y[0]+y[2]),w,A,u,D,B,G,C,E,I;e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=m(l.outerWidth(!0)-l.width());w=m(l.outerHeight(!0)-l.height());A=z+y;u=s+w;D=F(c)?(a.w-A)*m(c)/100:c;B=F(k)?(a.h-u)*m(k)/100:k;if("iframe"===h.type){if(I=h.content,h.autoHeight&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(D).height(9999),G=I.contents().find("body"),r&&G.css("overflow-x",
"hidden"),B=G.outerHeight(!0))}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=m(D);k=m(B);E=D/B;n=m(F(n)?m(n,"w")-A:n);p=m(F(p)?m(p,"w")-A:p);v=m(F(v)?m(v,"h")-u:v);q=m(F(q)?m(q,"h")-u:q);G=p;C=q;h.fitToView&&(p=Math.min(a.w-A,p),q=Math.min(a.h-u,q));A=a.w-z;s=a.h-s;h.aspectRatio?(c>p&&(c=p,k=m(c/E)),k>q&&(k=q,c=m(k*E)),c<n&&(c=n,k=m(c/
E)),k<v&&(k=v,c=m(k*E))):(c=Math.max(n,Math.min(c,p)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),k=g.height()),k=Math.max(v,Math.min(k,q)));if(h.fitToView)if(g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height(),h.aspectRatio)for(;(a>A||z>s)&&c>n&&k>v&&!(19<d++);)k=Math.max(v,Math.min(q,k-10)),c=m(k*E),c<n&&(c=n,k=m(c/E)),c>p&&(c=p,k=m(c/E)),g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height();else c=Math.max(n,Math.min(c,c-(a-A))),k=Math.max(v,Math.min(k,k-(z-s)));r&&"auto"===t&&k<B&&
c+y+r<A&&(c+=r);g.width(c).height(k);e.width(c+y);a=e.width();z=e.height();e=(a>A||z>s)&&c>n&&k>v;c=h.aspectRatio?c<G&&k<C&&c<D&&k<B:(c<G||k<C)&&(c<D||k<B);f.extend(h,{dim:{width:x(a),height:x(z)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:w,wrapSpace:z-l.outerHeight(!0),skinSpace:l.height()-k});!I&&h.autoHeight&&k>v&&k<q&&!c&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){f(d.target).is("a")||f(d.target).parent().is("a")||
(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play(!0)):b.play(!1))},
_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,k=a.wPadding,n=b.getViewport();!e&&a.isDom&&d.is(":visible")&&(e=d.find("img:first"),e.length||(e=d));u(e)?(c=e.offset(),e.is("img")&&
(f=e.outerWidth(),g=e.outerHeight())):(c.top=n.y+(n.h-g)*a.topRatio,c.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=n.y,c.left-=n.x;return c={top:x(c.top-h*a.topRatio),left:x(c.left-k*a.leftRatio),width:x(f+k),height:x(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](m("width"===
f?c:c-g*e)),b.inner[f](m("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,l=f.extend({opacity:1},d);delete l.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(l,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&
(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(m(e[g])-200),c[g]="+=200px"):(e[g]=x(m(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},
changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!t,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var d;a=f.extend({},this.defaults,a);this.overlay&&
this.close();d=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(d&&d.lenth?d:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",
function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
J?(b=Math.max(H.documentElement.offsetWidth,H.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(r(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),J&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(d.css("margin-bottom")))}d["top"===a.position?"prependTo":
"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",l=function(g){var h=f(this).blur(),k=d,l,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||h.is(".fancybox-wrap")||(l=a.groupAttr||"data-fancybox-group",m=h.attr(l),m||(l="rel",m=h.get(0)[l]),m&&""!==m&&"nofollow"!==m&&(h=c.length?f(c):e,h=h.filter("["+l+'="'+m+'"]'),k=h.index(this)),a.index=k,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;c&&!1!==a.live?p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')",
"click.fb-start",l):e.unbind("click.fb-start").bind("click.fb-start",l);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===w&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===w&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(s).width();K.addClass("fancybox-lock-test");d=f(s).width();K.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/*! tooltipster v4.2.5 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.5",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){var e=null;if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{e=c.__geometry();var f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b,geo:e})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&e.__options.animationDuration[1]>0&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state?b.option("animationDuration",0)._close(null,null,!0):b.__timeoutsClear(),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),
this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;return 0===n?void i():void e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){this.complete&&t(this).trigger("load")})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).bind("resize",Z),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&H(),s.settings.ticker&&W(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&D(),s.settings.touchEnabled&&!s.settings.ticker&&N(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(F)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},h=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/x());else for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(e=s.children.last(),t=e.position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q())}):q()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),L())}):(S(r.resetValue,"reset",0),L()))):(a={},a[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){q()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),L()}))},b=function(){for(var e="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(e)},w=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",k),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),A(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},z=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),i=t(e.currentTarget),void 0!==i.attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")),n!==s.active.index&&o.goToSlide(n)))},I=function(e){var i=s.children.length;return"short"===s.settings.pagerType?(s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}))},q=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},A=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){if(s.settings.autoDelay>0){setTimeout(o.startAuto,s.settings.autoDelay)}else o.startAuto(),t(window).focus(function(){o.startAuto()}).blur(function(){o.stopAuto()});s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},W=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),L(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),L(d)})),L()},L=function(t){var e,i,n,r=t?t:s.settings.speed,a={left:0,top:0},l={left:0,top:0};"next"===s.settings.autoDirection?a=o.find(".bx-clone").first().position():l=s.children.first().position(),e="horizontal"===s.settings.mode?-a.left:-a.top,i="horizontal"===s.settings.mode?-l.left:-l.top,n={resetValue:i},S(e,"ticker",r,n)},O=function(e){var i=t(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset();return n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},F=function(t){var e=document.activeElement.tagName.toLowerCase(),i="input|textarea",n=new RegExp(e,["i"]),s=n.exec(i);if(null==s&&O(o)){if(39===t.keyCode)return E(t),!1;if(37===t.keyCode)return k(t),!1}},N=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(t){if(s.controls.el.addClass("disabled"),s.working)t.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",V),s.viewport.bind("touchend MSPointerUp pointerup",R),s.viewport.bind("MSPointerCancel pointercancel",Y)}},Y=function(t){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",Y),s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},V=function(t){var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},R=function(t){s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.controls.el.removeClass("disabled");var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x),r>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(e){if(s.initialized)if(s.working)window.setTimeout(Z,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},B=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))},U=function(t){return t<0?s.settings.infiniteLoop?f()-1:s.active.index:t>=f()?s.settings.infiniteLoop?0:s.active.index:t};return o.goToSlide=function(e,i){var n,r,a,l,d=!0,c=0,g={left:0,top:0},u=null;if(s.oldIndex=s.active.index,s.active.index=U(e),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,d=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index),"undefined"!=typeof d&&!d)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&D(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),q()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(u=s.children.eq(s.children.length-1),g=u.position(),c=s.viewport.width()-u.outerWidth()):(n=s.children.length-s.settings.minSlides,g=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(r),g=u.position()):"next"===i&&0===s.active.index?(g=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),g=s.children.eq(l).position()),"undefined"!=typeof g?(a="horizontal"===s.settings.mode?-(g.left-c):-g.top,S(a,"slide",s.settings.speed)):s.working=!1),s.settings.ariaHidden&&B(s.active.index*x())}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!==s.active.index){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&t!==!0&&A("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&t!==!0&&A("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index)),s.settings.ariaHidden&&B(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).unbind("resize",Z),s.settings.keyboardEnabled&&t(document).unbind("keydown",F),t(this).removeData("bxSlider"))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.11
*/

!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";var a,i,r;"function"==typeof Symbol&&Symbol.iterator;!function(o){i=[n(2)],void 0!==(r="function"==typeof(a=o)?a.apply(t,i):a)&&(e.exports=r)}(function(e){return e})},function(e,t,n){"use strict";var a,i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o){i=[n(0),n(10),n(11)],void 0!==(r="function"==typeof(a=o)?a.apply(t,i):a)&&(e.exports=r)}(function(e,t,n,a){function i(t,n,o){if(!(this instanceof i))return new i(t,n,o);this.el=a,this.events={},this.maskset=a,this.refreshValue=!1,!0!==o&&(e.isPlainObject(t)?n=t:(n=n||{}).alias=t,this.opts=e.extend(!0,{},this.defaults,n),this.noMasksCache=n&&n.definitions!==a,this.userOptions=n||{},this.isRTL=this.opts.numericInput,r(this.opts.alias,n,this.opts))}function r(t,n,o){var s=i.prototype.aliases[t];return s?(s.alias&&r(s.alias,a,o),e.extend(!0,o,s),e.extend(!0,o,n),!0):(null===o.mask&&(o.mask=t),!1)}function s(t,n){function r(t,r,o){var s=!1;if(null!==t&&""!==t||((s=null!==o.regex)?t=(t=o.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(s=!0,t=".*")),1===t.length&&!1===o.greedy&&0!==o.repeat&&(o.placeholder=""),o.repeat>0||"*"===o.repeat||"+"===o.repeat){var l="*"===o.repeat?0:"+"===o.repeat?1:o.repeat;t=o.groupmarker.start+t+o.groupmarker.end+o.quantifiermarker.start+l+","+o.repeat+o.quantifiermarker.end}var c,u=s?"regex_"+o.regex:o.numericInput?t.split("").reverse().join(""):t;return i.prototype.masksCache[u]===a||!0===n?(c={mask:t,maskToken:i.prototype.analyseMask(t,s,o),validPositions:{},_buffer:a,buffer:a,tests:{},metadata:r,maskLength:a},!0!==n&&(i.prototype.masksCache[u]=c,c=e.extend(!0,{},i.prototype.masksCache[u]))):c=e.extend(!0,{},i.prototype.masksCache[u]),c}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){t.keepStatic=null===t.keepStatic||t.keepStatic;var o=t.groupmarker.start;return e.each(t.numericInput?t.mask.reverse():t.mask,function(n,i){o.length>1&&(o+=t.groupmarker.end+t.alternatormarker+t.groupmarker.start),i.mask===a||e.isFunction(i.mask)?o+=i:o+=i.mask}),o+=t.groupmarker.end,r(o,t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==a&&!e.isFunction(t.mask.mask)?r(t.mask.mask,t.mask,t):r(t.mask,t.mask,t)}function l(r,s,c){function m(e,t,n){t=t||0;var i,r,o,s=[],l=0,u=v();do{!0===e&&h().validPositions[l]?(r=(o=h().validPositions[l]).match,i=o.locator.slice(),s.push(!0===n?o.input:!1===n?r.nativeDef:I(l,r))):(r=(o=b(l,i,l-1)).match,i=o.locator.slice(),(!1===c.jitMasking||l<u||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>l)&&s.push(!1===n?r.nativeDef:I(l,r))),l++}while((Q===a||l<Q)&&(null!==r.fn||""!==r.def)||t>l);return""===s[s.length-1]&&s.pop(),h().maskLength=l+1,s}function h(){return s}function g(e){var t=h();t.buffer=a,!0!==e&&(t.validPositions={},t.p=0)}function v(e,t,n){var i=-1,r=-1,o=n||h().validPositions;e===a&&(e=-1);for(var s in o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(i=l),l>=e&&(r=l))}return-1!==i&&e-i>1||r<e?i:r}function y(t,n,i,r){var o,s=t,l=e.extend(!0,{},h().validPositions),u=!1;for(h().p=t,o=n-1;o>=s;o--)h().validPositions[o]!==a&&(!0!==i&&(!h().validPositions[o].match.optionality&&function(e){var t=h().validPositions[e];if(t!==a&&null===t.match.fn){var n=h().validPositions[e-1],i=h().validPositions[e+1];return n!==a&&i!==a}return!1}(o)||!1===c.canClearPosition(h(),o,v(),r,c))||delete h().validPositions[o]);for(g(!0),o=s+1;o<=v();){for(;h().validPositions[s]!==a;)s++;if(o<s&&(o=s+1),h().validPositions[o]===a&&M(o))o++;else{var p=b(o);!1===u&&l[s]&&l[s].match.def===p.match.def?(h().validPositions[s]=e.extend(!0,{},l[s]),h().validPositions[s].input=p.input,delete h().validPositions[o],o++):P(s,p.match.def)?!1!==R(s,p.input||I(o),!0)&&(delete h().validPositions[o],o++,u=!0):M(o)||(o++,s--),s++}}g(!0)}function k(e,t){for(var n,i=e,r=v(),o=h().validPositions[r]||S(0)[0],s=o.alternation!==a?o.locator[o.alternation].toString().split(","):[],l=0;l<i.length&&(!((n=i[l]).match&&(c.greedy&&!0!==n.match.optionalQuantifier||(!1===n.match.optionality||!1===n.match.newBlockMarker)&&!0!==n.match.optionalQuantifier)&&(o.alternation===a||o.alternation!==n.alternation||n.locator[o.alternation]!==a&&O(n.locator[o.alternation].toString().split(","),s)))||!0===t&&(null!==n.match.fn||/[0-9a-bA-Z]/.test(n.match.def)));l++);return n}function b(e,t,n){return h().validPositions[e]||k(S(e,t?t.slice():t,n))}function x(e){return h().validPositions[e]?h().validPositions[e]:S(e)[0]}function P(e,t){for(var n=!1,a=S(e),i=0;i<a.length;i++)if(a[i].match&&a[i].match.def===t){n=!0;break}return n}function S(t,n,i){function r(n,i,o,l){function p(o,l,g){function v(t,n){var a=0===e.inArray(t,n.matches);return a||e.each(n.matches,function(e,i){if(!0===i.isQuantifier&&(a=v(t,n.matches[e-1])))return!1}),a}function y(t,n,i){var r,o;if(h().validPositions[t-1]&&i&&h().tests[t])for(var s=h().validPositions[t-1].locator,l=h().tests[t][0].locator,c=0;c<i;c++)if(s[c]!==l[c])return s.slice(i+1);return(h().tests[t]||h().validPositions[t])&&e.each(h().tests[t]||[h().validPositions[t]],function(e,t){var s=i!==a?i:t.alternation,l=t.locator[s]!==a?t.locator[s].toString().indexOf(n):-1;(o===a||l<o)&&-1!==l&&(r=t,o=l)}),r?r.locator.slice((i!==a?i:r.alternation)+1):i!==a?y(t,n):a}if(u>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+h().mask;if(u===t&&o.matches===a)return f.push({match:o,locator:l.reverse(),cd:m}),!0;if(o.matches!==a){if(o.isGroup&&g!==o){if(o=p(n.matches[e.inArray(o,n.matches)+1],l))return!0}else if(o.isOptional){var k=o;if(o=r(o,i,l,g)){if(s=f[f.length-1].match,!v(s,k))return!0;d=!0,u=t}}else if(o.isAlternator){var b,x=o,P=[],S=f.slice(),w=l.length,A=i.length>0?i.shift():-1;if(-1===A||"string"==typeof A){var E,C=u,O=i.slice(),R=[];if("string"==typeof A)R=A.split(",");else for(E=0;E<x.matches.length;E++)R.push(E);for(var M=0;M<R.length;M++){if(E=parseInt(R[M]),f=[],i=y(u,E,w)||O.slice(),!0!==(o=p(x.matches[E]||n.matches[E],[E].concat(l),g)||o)&&o!==a&&R[R.length-1]<x.matches.length){var _=e.inArray(o,n.matches)+1;n.matches.length>_&&(o=p(n.matches[_],[_].concat(l.slice(1,l.length)),g))&&(R.push(_.toString()),e.each(f,function(e,t){t.alternation=l.length-1}))}b=f.slice(),u=C,f=[];for(var D=0;D<b.length;D++){var j=b[D],N=!1;j.alternation=j.alternation||w;for(var I=0;I<P.length;I++){var F=P[I];if("string"!=typeof A||-1!==e.inArray(j.locator[j.alternation].toString(),R)){if(function(e,t){return e.match.nativeDef===t.match.nativeDef||e.match.def===t.match.nativeDef||e.match.nativeDef===t.match.def}(j,F)){N=!0,j.alternation===F.alternation&&-1===F.locator[F.alternation].toString().indexOf(j.locator[j.alternation])&&(F.locator[F.alternation]=F.locator[F.alternation]+","+j.locator[j.alternation],F.alternation=j.alternation),j.match.nativeDef===F.match.def&&(j.locator[j.alternation]=F.locator[F.alternation],P.splice(P.indexOf(F),1,j));break}if(j.match.def===F.match.def){N=!1;break}if(function(e,n){return null===e.match.fn&&null!==n.match.fn&&n.match.fn.test(e.match.def,h(),t,!1,c,!1)}(j,F)||function(e,n){return null!==e.match.fn&&null!==n.match.fn&&n.match.fn.test(e.match.def.replace(/[\[\]]/g,""),h(),t,!1,c,!1)}(j,F)){j.alternation===F.alternation&&-1===j.locator[j.alternation].toString().indexOf(F.locator[F.alternation].toString().split("")[0])&&(j.na=j.na||j.locator[j.alternation].toString(),-1===j.na.indexOf(j.locator[j.alternation].toString().split("")[0])&&(j.na=j.na+","+j.locator[F.alternation].toString().split("")[0]),N=!0,j.locator[j.alternation]=F.locator[F.alternation].toString().split("")[0]+","+j.locator[j.alternation],P.splice(P.indexOf(F),0,j));break}}}N||P.push(j)}}"string"==typeof A&&(P=e.map(P,function(t,n){if(isFinite(n)){var i=t.alternation,r=t.locator[i].toString().split(",");t.locator[i]=a,t.alternation=a;for(var o=0;o<r.length;o++)-1!==e.inArray(r[o],R)&&(t.locator[i]!==a?(t.locator[i]+=",",t.locator[i]+=r[o]):t.locator[i]=parseInt(r[o]),t.alternation=i);if(t.locator[i]!==a)return t}})),f=S.concat(P),u=t,d=f.length>0,o=P.length>0,i=O.slice()}else o=p(x.matches[A]||n.matches[A],[A].concat(l),g);if(o)return!0}else if(o.isQuantifier&&g!==n.matches[e.inArray(o,n.matches)-1])for(var T=o,G=i.length>0?i.shift():0;G<(isNaN(T.quantifier.max)?G+1:T.quantifier.max)&&u<=t;G++){var B=n.matches[e.inArray(T,n.matches)-1];if(o=p(B,[G].concat(l),B)){if(s=f[f.length-1].match,s.optionalQuantifier=G>T.quantifier.min-1,v(s,B)){if(G>T.quantifier.min-1){d=!0,u=t;break}return!0}return!0}}else if(o=r(o,i,l,g))return!0}else u++}for(var g=i.length>0?i.shift():0;g<n.matches.length;g++)if(!0!==n.matches[g].isQuantifier){var v=p(n.matches[g],[g].concat(o),l);if(v&&u===t)return v;if(u>t)break}}function o(e){if(c.keepStatic&&t>0&&e.length>1+(""===e[e.length-1].match.def?1:0)&&!0!==e[0].match.optionality&&!0!==e[0].match.optionalQuantifier&&null===e[0].match.fn&&!/[0-9a-bA-Z]/.test(e[0].match.def)){if(h().validPositions[t-1]===a)return[k(e)];if(h().validPositions[t-1].alternation===e[0].alternation)return[k(e)];if(h().validPositions[t-1])return[k(e)]}return e}var s,l=h().maskToken,u=n?i:0,p=n?n.slice():[0],f=[],d=!1,m=n?n.join(""):"";if(t>-1){if(n===a){for(var g,v=t-1;(g=h().validPositions[v]||h().tests[v])===a&&v>-1;)v--;g!==a&&v>-1&&(p=function(t){var n=[];return e.isArray(t)||(t=[t]),t.length>0&&(t[0].alternation===a?0===(n=k(t.slice()).locator.slice()).length&&(n=t[0].locator.slice()):e.each(t,function(e,t){if(""!==t.def)if(0===n.length)n=t.locator.slice();else for(var a=0;a<n.length;a++)t.locator[a]&&-1===n[a].toString().indexOf(t.locator[a])&&(n[a]+=","+t.locator[a])})),n}(g),m=p.join(""),u=v)}if(h().tests[t]&&h().tests[t][0].cd===m)return o(h().tests[t]);for(var y=p.shift();y<l.length&&!(r(l[y],p,[y])&&u===t||u>t);y++);}return(0===f.length||d)&&f.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:m}),n!==a&&h().tests[t]?o(e.extend(!0,[],f)):(h().tests[t]=e.extend(!0,[],f),o(h().tests[t]))}function w(){return h()._buffer===a&&(h()._buffer=m(!1,1),h().buffer===a&&(h().buffer=h()._buffer.slice())),h()._buffer}function A(e){return h().buffer!==a&&!0!==e||(h().buffer=m(!0,v(),!0)),h().buffer}function E(e,t,n){var i,r;if(!0===e)g(),e=0,t=n.length;else for(i=e;i<t;i++)delete h().validPositions[i];for(r=e,i=e;i<t;i++)if(g(!0),n[i]!==c.skipOptionalPartCharacter){var o=R(r,n[i],!0,!0);!1!==o&&(g(!0),r=o.caret!==a?o.caret:o.pos+1)}}function C(t,n,a){switch(c.casing||n.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var r=h().validPositions[a-1];t=0===a||r&&r.input===String.fromCharCode(i.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(c.casing)){var o=Array.prototype.slice.call(arguments);o.push(h().validPositions),t=c.casing.apply(this,o)}}return t}function O(t,n,i){for(var r,o=c.greedy?n:n.slice(0,1),s=!1,l=i!==a?i.split(","):[],u=0;u<l.length;u++)-1!==(r=t.indexOf(l[u]))&&t.splice(r,1);for(var p=0;p<t.length;p++)if(-1!==e.inArray(t[p],o)){s=!0;break}return s}function R(t,n,r,o,s,l){function u(e){var t=Z?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1;return t&&0===e.begin&&e.end===h().maskLength?"full":t}function p(n,i,r){var s=!1;return e.each(S(n),function(l,p){for(var d=p.match,m=i?1:0,k="",b=d.cardinality;b>m;b--)k+=j(n-(b-1));if(i&&(k+=i),A(!0),!1!==(s=null!=d.fn?d.fn.test(k,h(),n,r,c,u(t)):(i===d.def||i===c.skipOptionalPartCharacter)&&""!==d.def&&{c:I(n,d,!0)||d.def,pos:n})){var x=s.c!==a?s.c:i;x=x===c.skipOptionalPartCharacter&&null===d.fn?I(n,d,!0)||d.def:x;var P=n,S=A();if(s.remove!==a&&(e.isArray(s.remove)||(s.remove=[s.remove]),e.each(s.remove.sort(function(e,t){return t-e}),function(e,t){y(t,t+1,!0)})),s.insert!==a&&(e.isArray(s.insert)||(s.insert=[s.insert]),e.each(s.insert.sort(function(e,t){return e-t}),function(e,t){R(t.pos,t.c,!0,o)})),s.refreshFromBuffer){var w=s.refreshFromBuffer;if(E(!0===w?w:w.start,w.end,S),s.pos===a&&s.c===a)return s.pos=v(),!1;if((P=s.pos!==a?s.pos:n)!==n)return s=e.extend(s,R(P,x,!0,o)),!1}else if(!0!==s&&s.pos!==a&&s.pos!==n&&(P=s.pos,E(n,P,A().slice()),P!==n))return s=e.extend(s,R(P,x,!0)),!1;return(!0===s||s.pos!==a||s.c!==a)&&(l>0&&g(!0),f(P,e.extend({},p,{input:C(x,d,P)}),o,u(t))||(s=!1),!1)}}),s}function f(t,n,i,r){if(r||c.insertMode&&h().validPositions[t]!==a&&i===a){var o,s=e.extend(!0,{},h().validPositions),l=v(a,!0);for(o=t;o<=l;o++)delete h().validPositions[o];h().validPositions[t]=e.extend(!0,{},n);var u,p=!0,f=h().validPositions,m=!1,y=h().maskLength;for(o=u=t;o<=l;o++){var k=s[o];if(k!==a)for(var b=u;b<h().maskLength&&(null===k.match.fn&&f[o]&&(!0===f[o].match.optionalQuantifier||!0===f[o].match.optionality)||null!=k.match.fn);){if(b++,!1===m&&s[b]&&s[b].match.def===k.match.def)h().validPositions[b]=e.extend(!0,{},s[b]),h().validPositions[b].input=k.input,d(b),u=b,p=!0;else if(P(b,k.match.def)){var x=R(b,k.input,!0,!0);p=!1!==x,u=x.caret||x.insert?v():b,m=!0}else if(!(p=!0===k.generatedInput)&&b>=h().maskLength-1)break;if(h().maskLength<y&&(h().maskLength=y),p)break}if(!p)break}if(!p)return h().validPositions=e.extend(!0,{},s),g(!0),!1}else h().validPositions[t]=e.extend(!0,{},n);return g(!0),!0}function d(t){for(var n=t-1;n>-1&&!h().validPositions[n];n--);var i,r;for(n++;n<t;n++)h().validPositions[n]===a&&(!1===c.jitMasking||c.jitMasking>n)&&(""===(r=S(n,b(n-1).locator,n-1).slice())[r.length-1].match.def&&r.pop(),(i=k(r))&&(i.match.def===c.radixPointDefinitionSymbol||!M(n,!0)||e.inArray(c.radixPoint,A())<n&&i.match.fn&&i.match.fn.test(I(n),h(),n,!1,c))&&!1!==(x=p(n,I(n,i.match,!0)||(null==i.match.fn?i.match.def:""!==I(n)?I(n):A()[n]),!0))&&(h().validPositions[x.pos||n].generatedInput=!0))}r=!0===r;var m=t;t.begin!==a&&(m=Z&&!u(t)?t.end:t.begin);var x=!0,w=e.extend(!0,{},h().validPositions);if(e.isFunction(c.preValidation)&&!r&&!0!==o&&!0!==l&&(x=c.preValidation(A(),m,n,u(t),c)),!0===x){if(d(m),u(t)&&(V(a,i.keyCode.DELETE,t,!0,!0),m=h().p),m<h().maskLength&&(Q===a||m<Q)&&(x=p(m,n,r),(!r||!0===o)&&!1===x&&!0!==l)){var D=h().validPositions[m];if(!D||null!==D.match.fn||D.match.def!==n&&n!==c.skipOptionalPartCharacter){if((c.insertMode||h().validPositions[_(m)]===a)&&!M(m,!0))for(var N=m+1,F=_(m);N<=F;N++)if(!1!==(x=p(N,n,r))){!function(t,n){var i=h().validPositions[n];if(i)for(var r=i.locator,o=r.length,s=t;s<n;s++)if(h().validPositions[s]===a&&!M(s,!0)){var l=S(s).slice(),c=k(l,!0),u=-1;""===l[l.length-1].match.def&&l.pop(),e.each(l,function(e,t){for(var n=0;n<o;n++){if(t.locator[n]===a||!O(t.locator[n].toString().split(","),r[n].toString().split(","),t.na)){var i=r[n],s=c.locator[n],l=t.locator[n];i-s>Math.abs(i-l)&&(c=t);break}u<n&&(u=n,c=t)}}),(c=e.extend({},c,{input:I(s,c.match,!0)||c.match.def})).generatedInput=!0,f(s,c,!0),h().validPositions[n]=a,p(n,i.input,!0)}}(m,x.pos!==a?x.pos:N),m=N;break}}else x={caret:_(m)}}!1===x&&c.keepStatic&&!r&&!0!==s&&(x=function(t,n,i){var r,s,l,u,p,f,d,m,y=e.extend(!0,{},h().validPositions),k=!1,b=v();for(u=h().validPositions[b];b>=0;b--)if((l=h().validPositions[b])&&l.alternation!==a){if(r=b,s=h().validPositions[r].alternation,u.locator[l.alternation]!==l.locator[l.alternation])break;u=l}if(s!==a){m=parseInt(r);var x=u.locator[u.alternation||s]!==a?u.locator[u.alternation||s]:d[0];x.length>0&&(x=x.split(",")[0]);var P=h().validPositions[m],w=h().validPositions[m-1];e.each(S(m,w?w.locator:a,m-1),function(r,l){d=l.locator[s]?l.locator[s].toString().split(","):[];for(var u=0;u<d.length;u++){var b=[],S=0,w=0,A=!1;if(x<d[u]&&(l.na===a||-1===e.inArray(d[u],l.na.split(","))||-1===e.inArray(x.toString(),d))){h().validPositions[m]=e.extend(!0,{},l);var E=h().validPositions[m].locator;for(h().validPositions[m].locator[s]=parseInt(d[u]),null==l.match.fn?(P.input!==l.match.def&&(A=!0,!0!==P.generatedInput&&b.push(P.input)),w++,h().validPositions[m].generatedInput=!/[0-9a-bA-Z]/.test(l.match.def),h().validPositions[m].input=l.match.def):h().validPositions[m].input=P.input,p=m+1;p<v(a,!0)+1;p++)(f=h().validPositions[p])&&!0!==f.generatedInput&&/[0-9a-bA-Z]/.test(f.input)?b.push(f.input):p<t&&S++,delete h().validPositions[p];for(A&&b[0]===l.match.def&&b.shift(),g(!0),k=!0;b.length>0;){var C=b.shift();if(C!==c.skipOptionalPartCharacter&&!(k=R(v(a,!0)+1,C,!1,o,!0)))break}if(k){h().validPositions[m].locator=E;var O=v(t)+1;for(p=m+1;p<v()+1;p++)((f=h().validPositions[p])===a||null==f.match.fn)&&p<t+(w-S)&&w++;k=R((t+=w-S)>O?O:t,n,i,o,!0)}if(k)return!1;g(),h().validPositions=e.extend(!0,{},y)}}})}return k}(m,n,r)),!0===x&&(x={pos:m})}if(e.isFunction(c.postValidation)&&!1!==x&&!r&&!0!==o&&!0!==l){var T=c.postValidation(A(!0),x,c);if(T.refreshFromBuffer&&T.buffer){var G=T.refreshFromBuffer;E(!0===G?G:G.start,G.end,T.buffer)}x=!0===T?x:T}return x&&x.pos===a&&(x.pos=m),!1!==x&&!0!==l||(g(!0),h().validPositions=e.extend(!0,{},w)),x}function M(e,t){var n=b(e).match;if(""===n.def&&(n=x(e).match),null!=n.fn)return n.fn;if(!0!==t&&e>-1){var a=S(e);return a.length>1+(""===a[a.length-1].match.def?1:0)}return!1}function _(e,t){var n=h().maskLength;if(e>=n)return n;var a=e;for(S(n+1).length>1&&(m(!0,n+1,!0),n=h().maskLength);++a<n&&(!0===t&&(!0!==x(a).match.newBlockMarker||!M(a))||!0!==t&&!M(a)););return a}function D(e,t){var n,a=e;if(a<=0)return 0;for(;--a>0&&(!0===t&&!0!==x(a).match.newBlockMarker||!0!==t&&!M(a)&&((n=S(a)).length<2||2===n.length&&""===n[1].match.def)););return a}function j(e){return h().validPositions[e]===a?I(e):h().validPositions[e].input}function N(t,n,i,r,o){if(r&&e.isFunction(c.onBeforeWrite)){var s=c.onBeforeWrite.call(W,r,n,i,c);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;E(!0===l?l:l.start,l.end,s.buffer||n),n=A(!0)}i!==a&&(i=s.caret!==a?s.caret:i)}}t!==a&&(t.inputmask._valueSet(n.join("")),i===a||r!==a&&"blur"===r.type?H(t,i,0===n.length):d&&r&&"input"===r.type?setTimeout(function(){G(t,i)},0):G(t,i),!0===o&&(X=!0,e(t).trigger("input")))}function I(t,n,i){if((n=n||x(t).match).placeholder!==a||!0===i)return e.isFunction(n.placeholder)?n.placeholder(c):n.placeholder;if(null===n.fn){if(t>-1&&h().validPositions[t]===a){var r,o=S(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===a||!1!==o[l].match.fn.test(r.match.def,h(),t,!0,c))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return c.placeholder.charAt(t%c.placeholder.length)}return n.def}return c.placeholder.charAt(t%c.placeholder.length)}function F(t,r,o,s,l){function u(e,t){return-1!==w().slice(e,_(e)).join("").indexOf(t)&&!M(e)&&x(e).match.nativeDef===t.charAt(t.length-1)}var p=s.slice(),f="",d=-1,m=a;if(g(),o||!0===c.autoUnmask)d=_(d);else{var y=w().slice(0,_(-1)).join(""),k=p.join("").match(new RegExp("^"+i.escapeRegex(y),"g"));k&&k.length>0&&(p.splice(0,k.length*y.length),d=_(d))}if(-1===d?(h().p=_(d),d=0):h().p=d,e.each(p,function(n,i){if(i!==a)if(h().validPositions[n]===a&&p[n]===I(n)&&M(n,!0)&&!1===R(n,p[n],!0,a,a,!0))h().p++;else{var r=new e.Event("_checkval");r.which=i.charCodeAt(0),f+=i;var s=v(a,!0),l=h().validPositions[s],y=b(s+1,l?l.locator.slice():a,s);if(!u(d,f)||o||c.autoUnmask){var k=o?n:null==y.match.fn&&y.match.optionality&&s+1<h().p?s+1:h().p;m=ae.keypressEvent.call(t,r,!0,!1,o,k),d=k+1,f=""}else m=ae.keypressEvent.call(t,r,!0,!1,!0,s+1);if(!1!==m&&!o&&e.isFunction(c.onBeforeWrite)){var x=m;if(m=c.onBeforeWrite.call(W,r,A(),m.forwardPosition,c),(m=e.extend(x,m))&&m.refreshFromBuffer){var P=m.refreshFromBuffer;E(!0===P?P:P.start,P.end,m.buffer),g(!0),m.caret&&(h().p=m.caret,m.forwardPosition=m.caret)}}}}),r){var P=a;n.activeElement===t&&m&&(P=c.numericInput?D(m.forwardPosition):m.forwardPosition),N(t,A(),P,l||new e.Event("checkval"),l&&"input"===l.type)}}function T(t){if(t){if(t.inputmask===a)return t.value;t.inputmask&&t.inputmask.refreshValue&&ae.setValueEvent.call(t)}var n=[],i=h().validPositions;for(var r in i)i[r].match&&null!=i[r].match.fn&&n.push(i[r].input);var o=0===n.length?"":(Z?n.reverse():n).join("");if(e.isFunction(c.onUnMask)){var s=(Z?A().slice().reverse():A()).join("");o=c.onUnMask.call(W,s,o,c)}return o}function G(e,i,r,o){function s(e){return!0===o||!Z||"number"!=typeof e||c.greedy&&""===c.placeholder||(e=A().join("").length-e),e}var l;if(i===a)return e.setSelectionRange?(i=e.selectionStart,r=e.selectionEnd):t.getSelection?(l=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&l.commonAncestorContainer!==e||(i=l.startOffset,r=l.endOffset):n.selection&&n.selection.createRange&&(r=(i=0-(l=n.selection.createRange()).duplicate().moveStart("character",-e.inputmask._valueGet().length))+l.text.length),{begin:s(i),end:s(r)};if(i.begin!==a&&(r=i.end,i=i.begin),"number"==typeof i){i=s(i),r="number"==typeof(r=s(r))?r:i;var p=parseInt(((e.ownerDocument.defaultView||t).getComputedStyle?(e.ownerDocument.defaultView||t).getComputedStyle(e,null):e.currentStyle).fontSize)*r;if(e.scrollLeft=p>e.scrollWidth?p:0,u||!1!==c.insertMode||i!==r||r++,e.setSelectionRange)e.selectionStart=i,e.selectionEnd=r;else if(t.getSelection){if(l=n.createRange(),e.firstChild===a||null===e.firstChild){var f=n.createTextNode("");e.appendChild(f)}l.setStart(e.firstChild,i<e.inputmask._valueGet().length?i:e.inputmask._valueGet().length),l.setEnd(e.firstChild,r<e.inputmask._valueGet().length?r:e.inputmask._valueGet().length),l.collapse(!0);var d=t.getSelection();d.removeAllRanges(),d.addRange(l)}else e.createTextRange&&((l=e.createTextRange()).collapse(!0),l.moveEnd("character",r),l.moveStart("character",i),l.select());H(e,{begin:i,end:r})}}function B(t){var n,i,r=A(),o=r.length,s=v(),l={},c=h().validPositions[s],u=c!==a?c.locator.slice():a;for(n=s+1;n<r.length;n++)u=(i=b(n,u,n-1)).locator.slice(),l[n]=e.extend(!0,{},i);var p=c&&c.alternation!==a?c.locator[c.alternation]:a;for(n=o-1;n>s&&(((i=l[n]).match.optionality||i.match.optionalQuantifier&&i.match.newBlockMarker||p&&(p!==l[n].locator[c.alternation]&&null!=i.match.fn||null===i.match.fn&&i.locator[c.alternation]&&O(i.locator[c.alternation].toString().split(","),p.toString().split(","))&&""!==S(n)[0].def))&&r[n]===I(n,i.match));n--)o--;return t?{l:o,def:l[o]?l[o].match:a}:o}function L(e){for(var t,n=B(),i=e.length,r=h().validPositions[v()];n<i&&!M(n,!0)&&(t=r!==a?b(n,r.locator.slice(""),r):x(n))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||n+1===i&&""===(r!==a?b(n+1,r.locator.slice(""),r):x(n+1)).match.def);)n++;for(;(t=h().validPositions[n-1])&&t&&t.match.optionality&&t.input===c.skipOptionalPartCharacter;)n--;return e.splice(n),e}function U(t){if(e.isFunction(c.isComplete))return c.isComplete(t,c);if("*"===c.repeat)return a;var n=!1,i=B(!0),r=D(i.l);if(i.def===a||i.def.newBlockMarker||i.def.optionality||i.def.optionalQuantifier){n=!0;for(var o=0;o<=r;o++){var s=b(o).match;if(null!==s.fn&&h().validPositions[o]===a&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==I(o,s)){n=!1;break}}}return n}function V(t,n,r,o,s){if((c.numericInput||Z)&&(n===i.keyCode.BACKSPACE?n=i.keyCode.DELETE:n===i.keyCode.DELETE&&(n=i.keyCode.BACKSPACE),Z)){var l=r.end;r.end=r.begin,r.begin=l}n===i.keyCode.BACKSPACE&&(r.end-r.begin<1||!1===c.insertMode)?(r.begin=D(r.begin),h().validPositions[r.begin]!==a&&h().validPositions[r.begin].input===c.groupSeparator&&r.begin--):n===i.keyCode.DELETE&&r.begin===r.end&&(r.end=M(r.end,!0)&&h().validPositions[r.end]&&h().validPositions[r.end].input!==c.radixPoint?r.end+1:_(r.end)+1,h().validPositions[r.begin]!==a&&h().validPositions[r.begin].input===c.groupSeparator&&r.end++),y(r.begin,r.end,!1,o),!0!==o&&function(){if(c.keepStatic){for(var n=[],i=v(-1,!0),r=e.extend(!0,{},h().validPositions),o=h().validPositions[i];i>=0;i--){var s=h().validPositions[i];if(s){if(!0!==s.generatedInput&&/[0-9a-bA-Z]/.test(s.input)&&n.push(s.input),delete h().validPositions[i],s.alternation!==a&&s.locator[s.alternation]!==o.locator[s.alternation])break;o=s}}if(i>-1)for(h().p=_(v(-1,!0));n.length>0;){var l=new e.Event("keypress");l.which=n.pop().charCodeAt(0),ae.keypressEvent.call(t,l,!0,!1,!1,h().p)}else h().validPositions=e.extend(!0,{},r)}}();var u=v(r.begin,!0);if(u<r.begin)h().p=_(u);else if(!0!==o&&(h().p=r.begin,!0!==s))for(;h().p<u&&h().validPositions[h().p]===a;)h().p++}function K(a){function i(e){var t,i=n.createElement("span");for(var o in r)isNaN(o)&&-1!==o.indexOf("font")&&(i.style[o]=r[o]);i.style.textTransform=r.textTransform,i.style.letterSpacing=r.letterSpacing,i.style.position="absolute",i.style.height="auto",i.style.width="auto",i.style.visibility="hidden",i.style.whiteSpace="nowrap",n.body.appendChild(i);var s,l=a.inputmask._valueGet(),c=0;for(t=0,s=l.length;t<=s;t++){if(i.innerHTML+=l.charAt(t)||"_",i.offsetWidth>=e){var u=e-c,p=i.offsetWidth-e;i.innerHTML=l.charAt(t),t=(u-=i.offsetWidth/3)<p?t-1:t;break}c=i.offsetWidth}return n.body.removeChild(i),t}var r=(a.ownerDocument.defaultView||t).getComputedStyle(a,null),o=n.createElement("div");o.style.width=r.width,o.style.textAlign=r.textAlign,($=n.createElement("div")).className="im-colormask",a.parentNode.insertBefore($,a),a.parentNode.removeChild(a),$.appendChild(o),$.appendChild(a),a.style.left=o.offsetLeft+"px",e(a).on("click",function(e){return G(a,i(e.clientX)),ae.clickEvent.call(a,[e])}),e(a).on("keydown",function(e){e.shiftKey||!1===c.insertMode||setTimeout(function(){H(a)},0)})}function H(e,t,i){function r(){f||null!==s.fn&&l.input!==a?f&&(null!==s.fn&&l.input!==a||""===s.def)&&(f=!1,p+="</span>"):(f=!0,p+="<span class='im-static'>")}function o(a){!0!==a&&d!==t.begin||n.activeElement!==e||(p+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>")}var s,l,u,p="",f=!1,d=0;if($!==a){var m=A();if(t===a?t=G(e):t.begin===a&&(t={begin:t,end:t}),!0!==i){var g=v();do{o(),h().validPositions[d]?(l=h().validPositions[d],s=l.match,u=l.locator.slice(),r(),p+=m[d]):(l=b(d,u,d-1),s=l.match,u=l.locator.slice(),(!1===c.jitMasking||d<g||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>d)&&(r(),p+=I(d,s))),d++}while((Q===a||d<Q)&&(null!==s.fn||""!==s.def)||g>d||f);-1===p.indexOf("im-caret")&&o(!0),f&&r()}var y=$.getElementsByTagName("div")[0];y.innerHTML=p,e.inputmask.positionColorMask(e,y)}}s=s||this.maskset,c=c||this.opts;var z,q,Q,$,W=this,Y=this.el,Z=this.isRTL,J=!1,X=!1,ee=!1,te=!1,ne={on:function(t,n,r){var o=function(t){if(this.inputmask===a&&"FORM"!==this.nodeName){var n=e.data(this,"_inputmask_opts");n?new i(n).mask(this):ne.off(this)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(this.disabled||this.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===c.tabThrough&&t.keyCode===i.keyCode.TAB))){switch(t.type){case"input":if(!0===X)return X=!1,t.preventDefault();break;case"keydown":J=!1,X=!1;break;case"keypress":if(!0===J)return t.preventDefault();J=!0;break;case"click":if(p||f){var o=this,s=arguments;return setTimeout(function(){r.apply(o,s)},0),!1}}var l=r.apply(this,arguments);return!1===l&&(t.preventDefault(),t.stopPropagation()),l}t.preventDefault()}};t.inputmask.events[n]=t.inputmask.events[n]||[],t.inputmask.events[n].push(o),-1!==e.inArray(n,["submit","reset"])?null!==t.form&&e(t.form).on(n,o):e(t).on(n,o)},off:function(t,n){if(t.inputmask&&t.inputmask.events){var a;n?(a=[])[n]=t.inputmask.events[n]:a=t.inputmask.events,e.each(a,function(n,a){for(;a.length>0;){var i=a.pop();-1!==e.inArray(n,["submit","reset"])?null!==t.form&&e(t.form).off(n,i):e(t).off(n,i)}delete t.inputmask.events[n]})}}},ae={keydownEvent:function(t){var a=this,r=e(a),o=t.keyCode,s=G(a);if(o===i.keyCode.BACKSPACE||o===i.keyCode.DELETE||f&&o===i.keyCode.BACKSPACE_SAFARI||t.ctrlKey&&o===i.keyCode.X&&!function(e){var t=n.createElement("input"),a="on"+e,i=a in t;return i||(t.setAttribute(a,"return;"),i="function"==typeof t[a]),t=null,i}("cut"))t.preventDefault(),V(a,o,s),N(a,A(!0),h().p,t,a.inputmask._valueGet()!==A().join("")),a.inputmask._valueGet()===w().join("")?r.trigger("cleared"):!0===U(A())&&r.trigger("complete");else if(o===i.keyCode.END||o===i.keyCode.PAGE_DOWN){t.preventDefault();var l=_(v());c.insertMode||l!==h().maskLength||t.shiftKey||l--,G(a,t.shiftKey?s.begin:l,l,!0)}else o===i.keyCode.HOME&&!t.shiftKey||o===i.keyCode.PAGE_UP?(t.preventDefault(),G(a,0,t.shiftKey?s.begin:0,!0)):(c.undoOnEscape&&o===i.keyCode.ESCAPE||90===o&&t.ctrlKey)&&!0!==t.altKey?(F(a,!0,!1,z.split("")),r.trigger("click")):o!==i.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===c.tabThrough&&o===i.keyCode.TAB?(!0===t.shiftKey?(null===x(s.begin).match.fn&&(s.begin=_(s.begin)),s.end=D(s.begin,!0),s.begin=D(s.end,!0)):(s.begin=_(s.begin,!0),s.end=_(s.begin,!0),s.end<h().maskLength&&s.end--),s.begin<h().maskLength&&(t.preventDefault(),G(a,s.begin,s.end))):t.shiftKey||!1===c.insertMode&&(o===i.keyCode.RIGHT?setTimeout(function(){var e=G(a);G(a,e.begin)},0):o===i.keyCode.LEFT&&setTimeout(function(){var e=G(a);G(a,Z?e.begin+1:e.begin-1)},0)):(c.insertMode=!c.insertMode,G(a,c.insertMode||s.begin!==h().maskLength?s.begin:s.begin-1));c.onKeyDown.call(this,t,A(),G(a).begin,c),ee=-1!==e.inArray(o,c.ignorables)},keypressEvent:function(t,n,r,o,s){var l=this,u=e(l),p=t.which||t.charCode||t.keyCode;if(!(!0===n||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||ee))return p===i.keyCode.ENTER&&z!==A().join("")&&(z=A().join(""),setTimeout(function(){u.trigger("change")},0)),!0;if(p){46===p&&!1===t.shiftKey&&""!==c.radixPoint&&(p=c.radixPoint.charCodeAt(0));var f,d=n?{begin:s,end:s}:G(l),m=String.fromCharCode(p);h().writeOutBuffer=!0;var v=R(d,m,o);if(!1!==v&&(g(!0),f=v.caret!==a?v.caret:n?v.pos+1:_(v.pos),h().p=f),!1!==r&&(setTimeout(function(){c.onKeyValidation.call(l,p,v,c)},0),h().writeOutBuffer&&!1!==v)){var y=A();N(l,y,c.numericInput&&v.caret===a?D(f):f,t,!0!==n),!0!==n&&setTimeout(function(){!0===U(y)&&u.trigger("complete")},0)}if(t.preventDefault(),n)return!1!==v&&(v.forwardPosition=f),v}},pasteEvent:function(n){var a,i=this,r=n.originalEvent||n,o=e(i),s=i.inputmask._valueGet(!0),l=G(i);Z&&(a=l.end,l.end=l.begin,l.begin=a);var u=s.substr(0,l.begin),p=s.substr(l.end,s.length);if(u===(Z?w().reverse():w()).slice(0,l.begin).join("")&&(u=""),p===(Z?w().reverse():w()).slice(l.end).join("")&&(p=""),Z&&(a=u,u=p,p=a),t.clipboardData&&t.clipboardData.getData)s=u+t.clipboardData.getData("Text")+p;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;s=u+r.clipboardData.getData("text/plain")+p}var f=s;if(e.isFunction(c.onBeforePaste)){if(!1===(f=c.onBeforePaste.call(W,s,c)))return n.preventDefault();f||(f=s)}return F(i,!1,!1,Z?f.split("").reverse():f.toString().split("")),N(i,A(),_(v()),n,z!==A().join("")),!0===U(A())&&o.trigger("complete"),n.preventDefault()},inputFallBackEvent:function(t){var n=this,a=n.inputmask._valueGet();if(A().join("")!==a){var r=G(n);if(!1===function(t,n,a){if("."===n.charAt(a.begin-1)&&""!==c.radixPoint&&((n=n.split(""))[a.begin-1]=c.radixPoint.charAt(0),n=n.join("")),n.charAt(a.begin-1)===c.radixPoint&&n.length>A().length){var i=new e.Event("keypress");return i.which=c.radixPoint.charCodeAt(0),ae.keypressEvent.call(t,i,!0,!0,!1,a.begin-1),!1}}(n,a,r))return!1;if(a=a.replace(new RegExp("("+i.escapeRegex(w().join(""))+")*"),""),!1===function(t,n,a){if(p){var i=n.replace(A().join(""),"");if(1===i.length){var r=new e.Event("keypress");return r.which=i.charCodeAt(0),ae.keypressEvent.call(t,r,!0,!0,!1,h().validPositions[a.begin-1]?a.begin:a.begin-1),!1}}}(n,a,r))return!1;r.begin>a.length&&(G(n,a.length),r=G(n));var o=A().join(""),s=a.substr(0,r.begin),l=a.substr(r.begin),u=o.substr(0,r.begin),f=o.substr(r.begin),d=r,m="",g=!1;if(s!==u){d.begin=0;for(var v=(g=s.length>=u.length)?s.length:u.length,y=0;s.charAt(y)===u.charAt(y)&&y<v;y++)d.begin++;g&&(m+=s.slice(d.begin,d.end))}l!==f&&(l.length>f.length?g&&(d.end=d.begin):l.length<f.length?d.end+=f.length-l.length:l.charAt(0)!==f.charAt(0)&&d.end++),N(n,A(),d),m.length>0?e.each(m.split(""),function(t,a){var i=new e.Event("keypress");i.which=a.charCodeAt(0),ee=!1,ae.keypressEvent.call(n,i)}):(d.begin===d.end-1&&G(n,D(d.begin+1),d.end),t.keyCode=i.keyCode.DELETE,ae.keydownEvent.call(n,t)),t.preventDefault()}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var n=this,a=n.inputmask._valueGet(!0);e.isFunction(c.onBeforeMask)&&(a=c.onBeforeMask.call(W,a,c)||a),a=a.split(""),F(n,!0,!1,Z?a.reverse():a),z=A().join(""),(c.clearMaskOnLostFocus||c.clearIncomplete)&&n.inputmask._valueGet()===w().join("")&&n.inputmask._valueSet("")},focusEvent:function(e){var t=this,n=t.inputmask._valueGet();c.showMaskOnFocus&&(!c.showMaskOnHover||c.showMaskOnHover&&""===n)&&(t.inputmask._valueGet()!==A().join("")?N(t,A(),_(v())):!1===te&&G(t,_(v()))),!0===c.positionCaretOnTab&&!1===te&&""!==n&&(N(t,A(),G(t)),ae.clickEvent.apply(t,[e,!0])),z=A().join("")},mouseleaveEvent:function(e){var t=this;if(te=!1,c.clearMaskOnLostFocus&&n.activeElement!==t){var a=A().slice(),i=t.inputmask._valueGet();i!==t.getAttribute("placeholder")&&""!==i&&(-1===v()&&i===w().join("")?a=[]:L(a),N(t,a))}},clickEvent:function(t,i){function r(t){if(""!==c.radixPoint){var n=h().validPositions;if(n[t]===a||n[t].input===I(t)){if(t<_(-1))return!0;var i=e.inArray(c.radixPoint,A());if(-1!==i){for(var r in n)if(i<r&&n[r].input!==I(r))return!1;return!0}}}return!1}var o=this;setTimeout(function(){if(n.activeElement===o){var e=G(o);if(i&&(Z?e.end=e.begin:e.begin=e.end),e.begin===e.end)switch(c.positionCaretOnClick){case"none":break;case"radixFocus":if(r(e.begin)){var t=A().join("").indexOf(c.radixPoint);G(o,c.numericInput?_(t):t);break}default:var s=e.begin,l=v(s,!0),u=_(l);if(s<u)G(o,M(s,!0)||M(s-1,!0)?s:_(s));else{var p=h().validPositions[l],f=b(u,p?p.match.locator:a,p),d=I(u,f.match);if(""!==d&&A()[u]!==d&&!0!==f.match.optionalQuantifier&&!0!==f.match.newBlockMarker||!M(u,!0)&&f.match.def===d){var m=_(u);(s>=m||s===u)&&(u=m)}G(o,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){G(t,0,_(v()))},0)},cutEvent:function(a){var r=this,o=e(r),s=G(r),l=a.originalEvent||a,c=t.clipboardData||l.clipboardData,u=Z?A().slice(s.end,s.begin):A().slice(s.begin,s.end);c.setData("text",Z?u.reverse().join(""):u.join("")),n.execCommand&&n.execCommand("copy"),V(r,i.keyCode.DELETE,s),N(r,A(),h().p,a,z!==A().join("")),r.inputmask._valueGet()===w().join("")&&o.trigger("cleared")},blurEvent:function(t){var n=e(this),i=this;if(i.inputmask){var r=i.inputmask._valueGet(),o=A().slice();""!==r&&(c.clearMaskOnLostFocus&&(-1===v()&&r===w().join("")?o=[]:L(o)),!1===U(o)&&(setTimeout(function(){n.trigger("incomplete")},0),c.clearIncomplete&&(g(),o=c.clearMaskOnLostFocus?[]:w().slice())),N(i,o,a,t)),z!==A().join("")&&(z=o.join(""),n.trigger("change"))}},mouseenterEvent:function(e){var t=this;te=!0,n.activeElement!==t&&c.showMaskOnHover&&t.inputmask._valueGet()!==A().join("")&&N(t,A())},submitEvent:function(e){z!==A().join("")&&q.trigger("change"),c.clearMaskOnLostFocus&&-1===v()&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===w().join("")&&Y.inputmask._valueSet(""),c.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){N(Y,A())},0))},resetEvent:function(e){Y.inputmask.refreshValue=!0,setTimeout(function(){q.trigger("setvalue")},0)}};i.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"};var ie;if(r!==a)switch(r.action){case"isComplete":return Y=r.el,U(A());case"unmaskedvalue":return Y!==a&&r.value===a||(ie=r.value,ie=(e.isFunction(c.onBeforeMask)?c.onBeforeMask.call(W,ie,c)||ie:ie).split(""),F(a,!1,!1,Z?ie.reverse():ie),e.isFunction(c.onBeforeWrite)&&c.onBeforeWrite.call(W,a,A(),0,c)),T(Y);case"mask":!function(t){ne.off(t);var i=function(t,i){var r=t.getAttribute("type"),s="INPUT"===t.tagName&&-1!==e.inArray(r,i.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!s)if("INPUT"===t.tagName){var l=n.createElement("input");l.setAttribute("type",r),s="text"===l.type,l=null}else s="partial";return!1!==s?function(t){function r(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==v()||!0!==i.nullable?n.activeElement===this&&i.clearMaskOnLostFocus?(Z?L(A().slice()).reverse():L(A().slice())).join(""):l.call(this):"":l.call(this)}function s(t){c.call(this,t),this.inputmask&&e(this).trigger("setvalue")}var l,c;if(!t.inputmask.__valueGet){if(!0!==i.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===o("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var u=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):a;u&&u.get&&u.set?(l=u.get,c=u.set,Object.defineProperty(t,"value",{get:r,set:s,configurable:!0})):"INPUT"!==t.tagName&&(l=function(){return this.textContent},c=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:r,set:s,configurable:!0}))}else n.__lookupGetter__&&t.__lookupGetter__("value")&&(l=t.__lookupGetter__("value"),c=t.__lookupSetter__("value"),t.__defineGetter__("value",r),t.__defineSetter__("value",s));t.inputmask.__valueGet=l,t.inputmask.__valueSet=c}t.inputmask._valueGet=function(e){return Z&&!0!==e?l.call(this.el).split("").reverse().join(""):l.call(this.el)},t.inputmask._valueSet=function(e,t){c.call(this.el,null===e||e===a?"":!0!==t&&Z?e.split("").reverse().join(""):e)},l===a&&(l=function(){return this.value},c=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===a||!0!==e.valHooks[t].inputmaskpatch)){var n=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=n(e);return-1!==v(a,a,e.inputmask.maskset.validPositions)||!0!==i.nullable?t:""}return n(e)},set:function(t,n){var a,i=e(t);return a=r(t,n),t.inputmask&&i.trigger("setvalue"),a},inputmaskpatch:!0}}}(t.type),function(t){ne.on(t,"mouseenter",function(t){var n=e(this);this.inputmask._valueGet()!==A().join("")&&n.trigger("setvalue")})}(t))}}(t):t.inputmask=a,s}(t,c);if(!1!==i&&(Y=t,q=e(Y),-1===(Q=Y!==a?Y.maxLength:a)&&(Q=a),!0===c.colorMask&&K(Y),d&&(Y.hasOwnProperty("inputmode")&&(Y.inputmode=c.inputmode,Y.setAttribute("inputmode",c.inputmode)),"rtfm"===c.androidHack&&(!0!==c.colorMask&&K(Y),Y.type="password")),!0===i&&(ne.on(Y,"submit",ae.submitEvent),ne.on(Y,"reset",ae.resetEvent),ne.on(Y,"mouseenter",ae.mouseenterEvent),ne.on(Y,"blur",ae.blurEvent),ne.on(Y,"focus",ae.focusEvent),ne.on(Y,"mouseleave",ae.mouseleaveEvent),!0!==c.colorMask&&ne.on(Y,"click",ae.clickEvent),ne.on(Y,"dblclick",ae.dblclickEvent),ne.on(Y,"paste",ae.pasteEvent),ne.on(Y,"dragdrop",ae.pasteEvent),ne.on(Y,"drop",ae.pasteEvent),ne.on(Y,"cut",ae.cutEvent),ne.on(Y,"complete",c.oncomplete),ne.on(Y,"incomplete",c.onincomplete),ne.on(Y,"cleared",c.oncleared),d||!0===c.inputEventOnly?Y.removeAttribute("maxLength"):(ne.on(Y,"keydown",ae.keydownEvent),ne.on(Y,"keypress",ae.keypressEvent)),ne.on(Y,"compositionstart",e.noop),ne.on(Y,"compositionupdate",e.noop),ne.on(Y,"compositionend",e.noop),ne.on(Y,"keyup",e.noop),ne.on(Y,"input",ae.inputFallBackEvent),ne.on(Y,"beforeinput",e.noop)),ne.on(Y,"setvalue",ae.setValueEvent),z=w().join(""),""!==Y.inputmask._valueGet(!0)||!1===c.clearMaskOnLostFocus||n.activeElement===Y)){var r=e.isFunction(c.onBeforeMask)?c.onBeforeMask.call(W,Y.inputmask._valueGet(!0),c)||Y.inputmask._valueGet(!0):Y.inputmask._valueGet(!0);""!==r&&F(Y,!0,!1,Z?r.split("").reverse():r.split(""));var s=A().slice();z=s.join(""),!1===U(s)&&c.clearIncomplete&&g(),c.clearMaskOnLostFocus&&n.activeElement!==Y&&(-1===v()?s=[]:L(s)),N(Y,s),n.activeElement===Y&&G(Y,_(v()))}}(Y);break;case"format":return ie=(e.isFunction(c.onBeforeMask)?c.onBeforeMask.call(W,r.value,c)||r.value:r.value).split(""),F(a,!0,!1,Z?ie.reverse():ie),r.metadata?{value:Z?A().slice().reverse().join(""):A().join(""),metadata:l.call(this,{action:"getmetadata"},s,c)}:Z?A().slice().reverse().join(""):A().join("");case"isValid":r.value?(ie=r.value.split(""),F(a,!0,!0,Z?ie.reverse():ie)):r.value=A().join("");for(var re=A(),oe=B(),se=re.length-1;se>oe&&!M(se);se--);return re.splice(oe,se+1-oe),U(re)&&r.value===A().join("");case"getemptymask":return w().join("");case"remove":if(Y&&Y.inputmask){q=e(Y),Y.inputmask._valueSet(c.autoUnmask?T(Y):Y.inputmask._valueGet(!0)),ne.off(Y);Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value")&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0}):n.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=a}return Y;case"getmetadata":if(e.isArray(s.metadata)){var le=m(!0,0,!1).join("");return e.each(s.metadata,function(e,t){if(t.mask===le)return le=t,!1}),le}return s.metadata}}var c=navigator.userAgent,u=/mobile/i.test(c),p=/iemobile/i.test(c),f=/iphone/i.test(c)&&!p,d=/android/i.test(c)&&!p;return i.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,n){return e.isFunction(n.onBeforeMask)?n.onBeforeMask.call(this,t,n):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:a,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:e.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:a,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-9１-９]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ]",cardinality:1}},aliases:{},masksCache:{},mask:function(o){function c(n,i,o,s){if(!0===i.importDataAttributes){var l,c,u,p,f=function(e,i){null!==(i=i!==a?i:n.getAttribute(s+"-"+e))&&("string"==typeof i&&(0===e.indexOf("on")?i=t[i]:"false"===i?i=!1:"true"===i&&(i=!0)),o[e]=i)},d=n.getAttribute(s);if(d&&""!==d&&(d=d.replace(new RegExp("'","g"),'"'),c=JSON.parse("{"+d+"}")),c){u=a;for(p in c)if("alias"===p.toLowerCase()){u=c[p];break}}f("alias",u),o.alias&&r(o.alias,o,i);for(l in i){if(c){u=a;for(p in c)if(p.toLowerCase()===l.toLowerCase()){u=c[p];break}}f(l,u)}}return e.extend(!0,i,o),("rtl"===n.dir||i.rightAlign)&&(n.style.textAlign="right"),("rtl"===n.dir||i.numericInput)&&(n.dir="ltr",n.removeAttribute("dir"),i.isRTL=!0),i}var u=this;return"string"==typeof o&&(o=n.getElementById(o)||n.querySelectorAll(o)),o=o.nodeName?[o]:o,e.each(o,function(t,n){var r=e.extend(!0,{},u.opts);c(n,r,e.extend(!0,{},u.userOptions),u.dataAttribute);var o=s(r,u.noMasksCache);o!==a&&(n.inputmask!==a&&(n.inputmask.opts.autoUnmask=!0,n.inputmask.remove()),n.inputmask=new i(a,a,!0),n.inputmask.opts=r,n.inputmask.noMasksCache=u.noMasksCache,n.inputmask.userOptions=e.extend(!0,{},u.userOptions),n.inputmask.isRTL=r.isRTL||r.numericInput,n.inputmask.el=n,n.inputmask.maskset=o,e.data(n,"_inputmask_opts",r),l.call(n.inputmask,{action:"mask"}))}),o&&o[0]?o[0].inputmask||this:this},option:function(t,n){return"string"==typeof t?this.opts[t]:"object"===(void 0===t?"undefined":o(t))?(e.extend(this.userOptions,t),this.el&&!0!==n&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),l.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return l.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),l.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),l.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),l.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),l.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),l.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(t,n,r){function o(e,t,n,a){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}function s(t,o,s){s=s!==a?s:t.matches.length;var l=t.matches[s-1];if(n)0===o.indexOf("[")||b&&/\\d|\\s|\\w]/i.test(o)||"."===o?t.matches.splice(s++,0,{fn:new RegExp(o,r.casing?"i":""),cardinality:1,optionality:t.isOptional,newBlockMarker:l===a||l.def!==o,casing:null,def:o,placeholder:a,nativeDef:o}):(b&&(o=o[o.length-1]),e.each(o.split(""),function(e,n){l=t.matches[s-1],t.matches.splice(s++,0,{fn:null,cardinality:0,optionality:t.isOptional,newBlockMarker:l===a||l.def!==n&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||n,placeholder:r.staticDefinitionSymbol!==a?n:a,nativeDef:n})})),b=!1;else{var c=(r.definitions?r.definitions[o]:a)||i.prototype.definitions[o];if(c&&!b){for(var u=c.prevalidator,p=u?u.length:0,f=1;f<c.cardinality;f++){var d=p>=f?u[f-1]:[],m=d.validator,h=d.cardinality;t.matches.splice(s++,0,{fn:m?"string"==typeof m?new RegExp(m,r.casing?"i":""):new function(){this.test=m}:new RegExp("."),cardinality:h||1,optionality:t.isOptional,newBlockMarker:l===a||l.def!==(c.definitionSymbol||o),casing:c.casing,def:c.definitionSymbol||o,placeholder:c.placeholder,nativeDef:o}),l=t.matches[s-1]}t.matches.splice(s++,0,{fn:c.validator?"string"==typeof c.validator?new RegExp(c.validator,r.casing?"i":""):new function(){this.test=c.validator}:new RegExp("."),cardinality:c.cardinality,optionality:t.isOptional,newBlockMarker:l===a||l.def!==(c.definitionSymbol||o),casing:c.casing,def:c.definitionSymbol||o,placeholder:c.placeholder,nativeDef:o})}else t.matches.splice(s++,0,{fn:null,cardinality:0,optionality:t.isOptional,newBlockMarker:l===a||l.def!==o&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||o,placeholder:r.staticDefinitionSymbol!==a?o:a,nativeDef:o}),b=!1}}function l(t){t&&t.matches&&e.each(t.matches,function(e,i){var o=t.matches[e+1];(o===a||o.matches===a||!1===o.isQuantifier)&&i&&i.isGroup&&(i.isGroup=!1,n||(s(i,r.groupmarker.start,0),!0!==i.openGroup&&s(i,r.groupmarker.end))),l(i)})}function c(){if(P.length>0){if(m=P[P.length-1],s(m,f),m.isAlternator){h=P.pop();for(var e=0;e<h.matches.length;e++)h.matches[e].isGroup=!1;P.length>0?(m=P[P.length-1]).matches.push(h):x.matches.push(h)}}else s(x,f)}function u(e){e.matches=e.matches.reverse();for(var t in e.matches)if(e.matches.hasOwnProperty(t)){var n=parseInt(t);if(e.matches[t].isQuantifier&&e.matches[n+1]&&e.matches[n+1].isGroup){var i=e.matches[t];e.matches.splice(t,1),e.matches.splice(n+1,0,i)}e.matches[t].matches!==a?e.matches[t]=u(e.matches[t]):e.matches[t]=function(e){return e===r.optionalmarker.start?e=r.optionalmarker.end:e===r.optionalmarker.end?e=r.optionalmarker.start:e===r.groupmarker.start?e=r.groupmarker.end:e===r.groupmarker.end&&(e=r.groupmarker.start),e}(e.matches[t])}return e}var p,f,d,m,h,g,v,y=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,k=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,b=!1,x=new o,P=[],S=[];for(n&&(r.optionalmarker.start=a,r.optionalmarker.end=a);p=n?k.exec(t):y.exec(t);){if(f=p[0],n)switch(f.charAt(0)){case"?":f="{0,1}";break;case"+":case"*":f="{"+f+"}"}if(b)c();else switch(f.charAt(0)){case r.escapeChar:b=!0,n&&c();break;case r.optionalmarker.end:case r.groupmarker.end:if(d=P.pop(),d.openGroup=!1,d!==a)if(P.length>0){if((m=P[P.length-1]).matches.push(d),m.isAlternator){h=P.pop();for(var w=0;w<h.matches.length;w++)h.matches[w].isGroup=!1,h.matches[w].alternatorGroup=!1;P.length>0?(m=P[P.length-1]).matches.push(h):x.matches.push(h)}}else x.matches.push(d);else c();break;case r.optionalmarker.start:P.push(new o(!1,!0));break;case r.groupmarker.start:P.push(new o(!0));break;case r.quantifiermarker.start:var A=new o(!1,!1,!0),E=(f=f.replace(/[{}]/g,"")).split(","),C=isNaN(E[0])?E[0]:parseInt(E[0]),O=1===E.length?C:isNaN(E[1])?E[1]:parseInt(E[1]);if("*"!==O&&"+"!==O||(C="*"===O?0:1),A.quantifier={min:C,max:O},P.length>0){var R=P[P.length-1].matches;(p=R.pop()).isGroup||((v=new o(!0)).matches.push(p),p=v),R.push(p),R.push(A)}else(p=x.matches.pop()).isGroup||(n&&null===p.fn&&"."===p.def&&(p.fn=new RegExp(p.def,r.casing?"i":"")),(v=new o(!0)).matches.push(p),p=v),x.matches.push(p),x.matches.push(A);break;case r.alternatormarker:if(P.length>0){var M=(m=P[P.length-1]).matches[m.matches.length-1];g=m.openGroup&&(M.matches===a||!1===M.isGroup&&!1===M.isAlternator)?P.pop():m.matches.pop()}else g=x.matches.pop();if(g.isAlternator)P.push(g);else if(g.alternatorGroup?(h=P.pop(),g.alternatorGroup=!1):h=new o(!1,!1,!1,!0),h.matches.push(g),P.push(h),g.openGroup){g.openGroup=!1;var _=new o(!0);_.alternatorGroup=!0,P.push(_)}break;default:c()}}for(;P.length>0;)d=P.pop(),x.matches.push(d);return x.matches.length>0&&(l(x),S.push(x)),(r.numericInput||r.isRTL)&&u(S[0]),S}},i.extendDefaults=function(t){e.extend(!0,i.prototype.defaults,t)},i.extendDefinitions=function(t){e.extend(!0,i.prototype.definitions,t)},i.extendAliases=function(t){e.extend(!0,i.prototype.aliases,t)},i.format=function(e,t,n){return i(t).format(e,n)},i.unmask=function(e,t){return i(t).unmaskedvalue(e)},i.isValid=function(e,t){return i(t).isValid(e)},i.remove=function(t){e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},i.escapeRegex=function(e){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return e.replace(new RegExp("(\\"+t.join("|\\")+")","gim"),"\\$1")},i.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},i})},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n(4),n(9),n(12),n(13),n(14),n(15);var i=a(n(1)),r=a(n(0)),o=a(n(2));r.default===o.default&&n(16),window.Inputmask=i.default},function(e,t,n){var a=n(5);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0};i.transform=void 0;n(7)(a,i);a.locals&&(e.exports=a.locals)},function(e,t,n){(e.exports=n(6)(void 0)).push([e.i,"span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}",""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=a(i),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}function a(e){return"/*# "+("sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e)))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=n(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(a[r]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function a(e,t){for(var n=0;n<e.length;n++){var a=e[n],i=m[a.id];if(i){i.refs++;for(o=0;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(u(a.parts[o],t))}else{for(var r=[],o=0;o<a.parts.length;o++)r.push(u(a.parts[o],t));m[a.id]={id:a.id,refs:1,parts:r}}}}function i(e,t){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],o=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}function r(e,t){var n=g(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=k[k.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),k.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=g(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function o(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=k.indexOf(e);t>=0&&k.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),r(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),r(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,a,i,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var c=y++;n=v||(v=s(t)),a=p.bind(null,n,c,!1),i=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),a=d.bind(null,n,t),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),a=f.bind(null,n),i=function(){o(n)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}function p(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function f(e,t){var n=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var a=n.css,i=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(a=b(a)),i&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([a],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(e){var t={};return function(n){if(void 0===t[n]){var a=e.call(this,n);if(a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[n]=a}return t[n]}}(function(e){return document.querySelector(e)}),v=null,y=0,k=[],b=n(8);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return a(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(l=m[s.id]).refs--,r.push(l)}e&&a(i(e,t),t);for(o=0;o<r.length;o++){var l=r[o];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete m[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,a=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return e;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:a+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(e,t,n){"use strict";var a,i,r;"function"==typeof Symbol&&Symbol.iterator;!function(o){i=[n(0),n(1)],void 0!==(r="function"==typeof(a=o)?a.apply(t,i):a)&&(e.exports=r)}(function(e,t){function n(e){return isNaN(e)||29===new Date(e,2,0).getDate()}return t.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+n+"[01])")},val2:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|[12][0-9])"+n+"(0[1-9]|1[012]))|(30"+n+"(0[13-9]|1[012]))|(31"+n+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(e,t,n){if(isNaN(e))return!1;var a=parseInt(e.concat(t.toString().slice(e.length))),i=parseInt(e.concat(n.toString().slice(e.length)));return!isNaN(a)&&(t<=a&&a<=n)||!isNaN(i)&&(t<=i&&i<=n)},determinebaseyear:function(e,t,n){var a=(new Date).getFullYear();if(e>a)return e;if(t<a){for(var i=t.toString().slice(0,2),r=t.toString().slice(2,4);t<i+n;)i--;var o=i+r;return e>o?e:o}if(e<=a&&a<=t){for(var s=a.toString().slice(0,2);t<s+n;)s--;var l=s+n;return l<e?e:l}return a},onKeyDown:function(n,a,i,r){var o=e(this);if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){var s=new Date;o.val(s.getDate().toString()+(s.getMonth()+1).toString()+s.getFullYear().toString()),o.trigger("setvalue")}},getFrontValue:function(e,t,n){for(var a=0,i=0,r=0;r<e.length&&"2"!==e.charAt(r);r++){var o=n.definitions[e.charAt(r)];o?(a+=i,i=o.cardinality):i++}return t.join("").substr(a,i)},postValidation:function(e,t,a){var i,r,o=e.join("");return 0===a.mask.indexOf("y")?(r=o.substr(0,4),i=o.substring(4,10)):(r=o.substring(6,10),i=o.substr(0,6)),t&&(i!==a.leapday||n(r))},definitions:{1:{validator:function(e,t,n,a,i){var r=i.regex.val1.test(e);return a||r||e.charAt(1)!==i.separator&&-1==="-./".indexOf(e.charAt(1))||!(r=i.regex.val1.test("0"+e.charAt(0)))?r:(t.buffer[n-1]="0",{refreshFromBuffer:{start:n-1,end:n},pos:n,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,n,a,i){var r=e;isNaN(t.buffer[n+1])||(r+=t.buffer[n+1]);var o=1===r.length?i.regex.val1pre.test(r):i.regex.val1.test(r);if(o&&t.validPositions[n]&&(i.regex.val2(i.separator).test(e+t.validPositions[n].input)||(t.validPositions[n].input="0"===e?"1":"0")),!a&&!o){if(o=i.regex.val1.test(e+"0"))return t.buffer[n]=e,t.buffer[++n]="0",{pos:n,c:"0"};if(o=i.regex.val1.test("0"+e))return t.buffer[n]="0",n++,{pos:n}}return o},cardinality:1}]},2:{validator:function(e,t,n,a,i){var r=i.getFrontValue(t.mask,t.buffer,i);-1!==r.indexOf(i.placeholder[0])&&(r="01"+i.separator);var o=i.regex.val2(i.separator).test(r+e);return a||o||e.charAt(1)!==i.separator&&-1==="-./".indexOf(e.charAt(1))||!(o=i.regex.val2(i.separator).test(r+"0"+e.charAt(0)))?o:(t.buffer[n-1]="0",{refreshFromBuffer:{start:n-1,end:n},pos:n,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,n,a,i){isNaN(t.buffer[n+1])||(e+=t.buffer[n+1]);var r=i.getFrontValue(t.mask,t.buffer,i);-1!==r.indexOf(i.placeholder[0])&&(r="01"+i.separator);var o=1===e.length?i.regex.val2pre(i.separator).test(r+e):i.regex.val2(i.separator).test(r+e);return o&&t.validPositions[n]&&(i.regex.val2(i.separator).test(e+t.validPositions[n].input)||(t.validPositions[n].input="0"===e?"1":"0")),a||o||!(o=i.regex.val2(i.separator).test(r+"0"+e))?o:(t.buffer[n]="0",n++,{pos:n})},cardinality:1}]},y:{validator:function(e,t,n,a,i){return i.isInYearRange(e,i.yearrange.minyear,i.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(e,t,n,a,i){var r=i.isInYearRange(e,i.yearrange.minyear,i.yearrange.maxyear);if(!a&&!r){var o=i.determinebaseyear(i.yearrange.minyear,i.yearrange.maxyear,e+"0").toString().slice(0,1);if(r=i.isInYearRange(o+e,i.yearrange.minyear,i.yearrange.maxyear))return t.buffer[n++]=o.charAt(0),{pos:n};if(o=i.determinebaseyear(i.yearrange.minyear,i.yearrange.maxyear,e+"0").toString().slice(0,2),r=i.isInYearRange(o+e,i.yearrange.minyear,i.yearrange.maxyear))return t.buffer[n++]=o.charAt(0),t.buffer[n++]=o.charAt(1),{pos:n}}return r},cardinality:1},{validator:function(e,t,n,a,i){var r=i.isInYearRange(e,i.yearrange.minyear,i.yearrange.maxyear);if(!a&&!r){var o=i.determinebaseyear(i.yearrange.minyear,i.yearrange.maxyear,e).toString().slice(0,2);if(r=i.isInYearRange(e[0]+o[1]+e[1],i.yearrange.minyear,i.yearrange.maxyear))return t.buffer[n++]=o.charAt(1),{pos:n};if(o=i.determinebaseyear(i.yearrange.minyear,i.yearrange.maxyear,e).toString().slice(0,2),r=i.isInYearRange(o+e,i.yearrange.minyear,i.yearrange.maxyear))return t.buffer[n-1]=o.charAt(0),t.buffer[n++]=o.charAt(1),t.buffer[n++]=e.charAt(0),{refreshFromBuffer:{start:n-3,end:n},pos:n}}return r},cardinality:2},{validator:function(e,t,n,a,i){return i.isInYearRange(e,i.yearrange.minyear,i.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+n+"[0-3])|(02"+n+"[0-2])")},val2:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+n+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+n+"30)|((0[13578]|1[02])"+n+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(n,a,i,r){var o=e(this);if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){var s=new Date;o.val((s.getMonth()+1).toString()+s.getDate().toString()+s.getFullYear().toString()),o.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(n,a,i,r){var o=e(this);if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){var s=new Date;o.val(s.getFullYear().toString()+(s.getMonth()+1).toString()+s.getDate().toString()),o.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(e,t,n,a,i){if("24"===i.hourFormat&&24===parseInt(e,10))return t.buffer[n-1]="0",t.buffer[n]="0",{refreshFromBuffer:{start:n-1,end:n},c:"0"};var r=i.regex.hrs.test(e);if(!a&&!r&&(e.charAt(1)===i.timeseparator||-1!=="-.:".indexOf(e.charAt(1)))&&(r=i.regex.hrs.test("0"+e.charAt(0))))return t.buffer[n-1]="0",t.buffer[n]=e.charAt(0),n++,{refreshFromBuffer:{start:n-2,end:n},pos:n,c:i.timeseparator};if(r&&"24"!==i.hourFormat&&i.regex.hrs24.test(e)){var o=parseInt(e,10);return 24===o?(t.buffer[n+5]="a",t.buffer[n+6]="m"):(t.buffer[n+5]="p",t.buffer[n+6]="m"),(o-=12)<10?(t.buffer[n]=o.toString(),t.buffer[n-1]="0"):(t.buffer[n]=o.toString().charAt(1),t.buffer[n-1]=o.toString().charAt(0)),{refreshFromBuffer:{start:n-1,end:n+6},c:t.buffer[n]}}return r},cardinality:2,prevalidator:[{validator:function(e,t,n,a,i){var r=i.regex.hrspre.test(e);return a||r||!(r=i.regex.hrs.test("0"+e))?r:(t.buffer[n]="0",n++,{pos:n})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(e,t,n,a,i){var r=i.regex.mspre.test(e);return a||r||!(r=i.regex.ms.test("0"+e))?r:(t.buffer[n]="0",n++,{pos:n})},cardinality:1}]},t:{validator:function(e,t,n,a,i){return i.regex.ampm.test(e+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+n+"[0-3])|(02"+n+"[0-2])")},val2:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+n+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+n+"30)|((0[13578]|1[02])"+n+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(n,a,i,r){var o=e(this);if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){var s=new Date;o.val((s.getMonth()+1).toString()+s.getDate().toString()+s.getFullYear().toString()),o.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+n+"[0-3])")},val2:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+n+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+n+"30)|((0[1-6])"+n+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0},"yyyy-mm-dd hh:mm:ss":{mask:"y-1-2 h:s:s",placeholder:"yyyy-mm-dd hh:mm:ss",alias:"datetime",separator:"-",leapday:"-02-29",regex:{val2pre:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+n+"[0-3])|(02"+n+"[0-2])")},val2:function(e){var n=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+n+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+n+"30)|((0[13578]|1[02])"+n+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},onKeyDown:function(e,t,n,a){}}}),t})},function(e,t,n){"use strict";var a;"function"==typeof Symbol&&Symbol.iterator;void 0!==(a=function(){return window}.call(t,n,t,e))&&(e.exports=a)},function(e,t,n){"use strict";var a;"function"==typeof Symbol&&Symbol.iterator;void 0!==(a=function(){return document}.call(t,n,t,e))&&(e.exports=a)},function(e,t,n){"use strict";var a,i,r;"function"==typeof Symbol&&Symbol.iterator;!function(o){i=[n(0),n(1)],void 0!==(r="function"==typeof(a=o)?a.apply(t,i):a)&&(e.exports=r)}(function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,n,a,i){return n-1>-1&&"."!==t.buffer[n-1]?(e=t.buffer[n-1]+e,e=n-2>-1&&"."!==t.buffer[n-2]?t.buffer[n-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)},cardinality:1}},onUnMask:function(e,t,n){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(e,t,n){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t})},function(e,t,n){"use strict";var a,i,r;"function"==typeof Symbol&&Symbol.iterator;!function(o){i=[n(0),n(1)],void 0!==(r="function"==typeof(a=o)?a.apply(t,i):a)&&(e.exports=r)}(function(e,t,n){function a(e,n){for(var a="",i=0;i<e.length;i++)t.prototype.definitions[e.charAt(i)]||n.definitions[e.charAt(i)]||n.optionalmarker.start===e.charAt(i)||n.optionalmarker.end===e.charAt(i)||n.quantifiermarker.start===e.charAt(i)||n.quantifiermarker.end===e.charAt(i)||n.groupmarker.start===e.charAt(i)||n.groupmarker.end===e.charAt(i)||n.alternatormarker===e.charAt(i)?a+="\\"+e.charAt(i):a+=e.charAt(i);return a}return t.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=n),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),i=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===i?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=a(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==n){e.radixPointDefinitionSymbol=e.decimalProtect?":":e.radixPoint;var o=e.digits.toString().split(",");isFinite(o[0]&&o[1]&&isFinite(o[1]))?r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?r+="["+e.radixPointDefinitionSymbol+";{1,"+e.digits+"}]":r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}")}return r+=a(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(t,a,i,r,o){if("-"===i||i===o.negationSymbol.front)return!0===o.allowMinus&&(o.isNegative=o.isNegative===n||!o.isNegative,""===t.join("")||{caret:a,dopost:!0});if(!1===r&&i===o.radixPoint&&o.digits!==n&&(isNaN(o.digits)||parseInt(o.digits)>0)){var s=e.inArray(o.radixPoint,t);if(-1!==s)return!0===o.numericInput?a===s:{caret:s+1}}return!0},postValidation:function(a,i,r){var o=r.suffix.split(""),s=r.prefix.split("");if(i.pos===n&&i.caret!==n&&!0!==i.dopost)return i;var l=i.caret!==n?i.caret:i.pos,c=a.slice();r.numericInput&&(l=c.length-l-1,c=c.reverse());var u=c[l];if(u===r.groupSeparator&&(u=c[l+=1]),l===c.length-r.suffix.length-1&&u===r.radixPoint)return i;u!==n&&u!==r.radixPoint&&u!==r.negationSymbol.front&&u!==r.negationSymbol.back&&(c[l]="?",r.prefix.length>0&&l>=(!1===r.isNegative?1:0)&&l<r.prefix.length-1+(!1===r.isNegative?1:0)?s[l-(!1===r.isNegative?1:0)]="?":r.suffix.length>0&&l>=c.length-r.suffix.length-(!1===r.isNegative?1:0)&&(o[l-(c.length-r.suffix.length-(!1===r.isNegative?1:0))]="?")),s=s.join(""),o=o.join("");var p=c.join("").replace(s,"");if(p=p.replace(o,""),p=p.replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),""),p=p.replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),""),p=p.replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(p=p.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),p.length>1&&1!==p.indexOf(r.radixPoint)&&("0"===u&&(p=p.replace(/^\?/g,"")),p=p.replace(/^0/g,"")),p.charAt(0)===r.radixPoint&&""!==r.radixPoint&&!0!==r.numericInput&&(p="0"+p),""!==p){if(p=p.split(""),(!r.digitsOptional||r.enforceDigitsOnBlur&&"blur"===i.event)&&isFinite(r.digits)){var f=e.inArray(r.radixPoint,p),d=e.inArray(r.radixPoint,c);-1===f&&(p.push(r.radixPoint),f=p.length-1);for(var m=1;m<=r.digits;m++)r.digitsOptional&&(!r.enforceDigitsOnBlur||"blur"!==i.event)||p[f+m]!==n&&p[f+m]!==r.placeholder.charAt(0)?-1!==d&&c[d+m]!==n&&(p[f+m]=p[f+m]||c[d+m]):p[f+m]=i.placeholder||r.placeholder.charAt(0)}if(!0!==r.autoGroup||""===r.groupSeparator||u===r.radixPoint&&i.pos===n&&!i.dopost)p=p.join("");else{var h=p[p.length-1]===r.radixPoint&&i.c===r.radixPoint;p=t(function(e,t){var n="";if(n+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var a=e.join("").split(t.radixPoint);a[1]&&(n+=t.radixPoint+"*{"+a[1].match(/^\d*\??\d*/)[0].length+"}")}return n}(p,r),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(p.join("")),h&&(p+=r.radixPoint),p.charAt(0)===r.groupSeparator&&p.substr(1)}}if(r.isNegative&&"blur"===i.event&&(r.isNegative="0"!==p),p=s+p,p+=o,r.isNegative&&(p=r.negationSymbol.front+p,p+=r.negationSymbol.back),p=p.split(""),u!==n)if(u!==r.radixPoint&&u!==r.negationSymbol.front&&u!==r.negationSymbol.back)(l=e.inArray("?",p))>-1?p[l]=u:l=i.caret||0;else if(u===r.radixPoint||u===r.negationSymbol.front||u===r.negationSymbol.back){var g=e.inArray(u,p);-1!==g&&(l=g)}r.numericInput&&(l=p.length-l-1,p=p.reverse());var v={caret:u===n||i.pos!==n?l+(r.numericInput?-1:1):l,buffer:p,refreshFromBuffer:i.dopost||a.join("")!==p.join("")};return v.refreshFromBuffer?v:i},onBeforeWrite:function(a,i,r,o){if(a)switch(a.type){case"keydown":return o.postValidation(i,{caret:r,dopost:!0},o);case"blur":case"checkval":var s;if(function(e){e.parseMinMaxOptions===n&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(o),null!==o.min||null!==o.max){if(s=o.onUnMask(i.join(""),n,e.extend({},o,{unmaskAsNumber:!0})),null!==o.min&&s<o.min)return o.isNegative=o.min<0,o.postValidation(o.min.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o);if(null!==o.max&&s>o.max)return o.isNegative=o.max<0,o.postValidation(o.max.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o)}return o.postValidation(i,{caret:r,placeholder:"0",event:"blur"},o);case"_checkval":return{caret:r}}},regex:{integerPart:function(e,n){return n?new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,a,i,r,o,s){var l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===l){if(!0!==o.numericInput&&a.validPositions[i]!==n&&"~"===a.validPositions[i].match.def&&!s){var c=a.buffer.join(""),u=(c=(c=c.replace(new RegExp("[-"+t.escapeRegex(o.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back)+"$"),"")).split(o.radixPoint);u.length>1&&(u[1]=u[1].replace(/0/g,o.placeholder.charAt(0))),"0"===u[0]&&(u[0]=u[0].replace(/0/g,o.placeholder.charAt(0))),c=u[0]+o.radixPoint+u[1]||"";var p=a._buffer.join("");for(c===o.radixPoint&&(c=p);null===c.match(t.escapeRegex(p)+"$");)p=p.slice(1);l=(c=(c=c.replace(p,"")).split(""))[i]===n?{pos:i,remove:i}:{pos:i}}}else r||e!==o.radixPoint||a.validPositions[i-1]!==n||(a.buffer[i]="0",l={pos:i+1});return l},cardinality:1},"+":{validator:function(e,t,n,a,i){return i.allowMinus&&("-"===e||e===i.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,n,a,i){return i.allowMinus&&e===i.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,n,a,i,r){var o="["+t.escapeRegex(r.radixPoint)+"]",s=new RegExp(o).test(e);return s&&n.validPositions[a]&&n.validPositions[a].match.placeholder===r.radixPoint&&(s={caret:a+1}),s},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,n,a){if(""===n&&!0===a.nullable)return n;var i=e.replace(a.prefix,"");return i=i.replace(a.suffix,""),i=i.replace(new RegExp(t.escapeRegex(a.groupSeparator),"g"),""),""!==a.placeholder.charAt(0)&&(i=i.replace(new RegExp(a.placeholder.charAt(0),"g"),"0")),a.unmaskAsNumber?(""!==a.radixPoint&&-1!==i.indexOf(a.radixPoint)&&(i=i.replace(t.escapeRegex.call(this,a.radixPoint),".")),i=i.replace(new RegExp("^"+t.escapeRegex(a.negationSymbol.front)),"-"),i=i.replace(new RegExp(t.escapeRegex(a.negationSymbol.back)+"$"),""),Number(i)):i},isComplete:function(e,n){var a=e.join("");if(e.slice().join("")!==a)return!1;var i=a.replace(n.prefix,"");return i=i.replace(n.suffix,""),i=i.replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),","===n.radixPoint&&(i=i.replace(t.escapeRegex(n.radixPoint),".")),isFinite(i)},onBeforeMask:function(e,a){if(a.isNegative=n,e=e.toString().charAt(e.length-1)===a.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==a.radixPoint&&isFinite(e)){var i=e.split("."),r=""!==a.groupSeparator?parseInt(a.groupSize):0;2===i.length&&(i[0].length>r||i[1].length>r||i[0].length<=r&&i[1].length<r)&&(e=e.replace(".",a.radixPoint))}var o=e.match(/,/g),s=e.match(/\./g);if(e=s&&o?s.length>o.length?(e=e.replace(/\./g,"")).replace(",",a.radixPoint):o.length>s.length?(e=e.replace(/,/g,"")).replace(".",a.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(t.escapeRegex(a.groupSeparator),"g"),""),0===a.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==a.radixPoint&&isFinite(a.digits)&&-1!==e.indexOf(a.radixPoint)){var l=e.split(a.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(a.digits)<l.toString().length){var c=Math.pow(10,parseInt(a.digits));e=e.replace(t.escapeRegex(a.radixPoint),"."),e=(e=Math.round(parseFloat(e)*c)/c).toString().replace(".",a.radixPoint)}}return e},canClearPosition:function(e,t,n,a,i){var r=e.validPositions[t],o=r.input!==i.radixPoint||null!==e.validPositions[t].match.fn&&!1===i.decimalProtect||r.input===i.radixPoint&&e.validPositions[t+1]&&null===e.validPositions[t+1].match.fn||isFinite(r.input)||t===n||r.input===i.groupSeparator||r.input===i.negationSymbol.front||r.input===i.negationSymbol.back;return!o||"+"!==r.match.nativeDef&&"-"!==r.match.nativeDef||(i.isNegative=!1),o},onKeyDown:function(n,a,i,r){var o=e(this);if(n.ctrlKey)switch(n.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),t})},function(e,t,n){"use strict";var a,i,r;"function"==typeof Symbol&&Symbol.iterator;!function(o){i=[n(0),n(1)],void 0!==(r="function"==typeof(a=o)?a.apply(t,i):a)&&(e.exports=r)}(function(e,t){function n(e,t){var n=(e.mask||e).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),a=(t.mask||t).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),i=(e.mask||e).split("#")[0],r=(t.mask||t).split("#")[0];return 0===r.indexOf(i)?-1:0===i.indexOf(r)?1:n.localeCompare(a)}var a=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,n,i){function r(e,n,a){n=n||"",a=a||s,""!==n&&(a[n]={});for(var i="",o=a[n]||a,l=e.length-1;l>=0;l--)o[i=(t=e[l].mask||e[l]).substr(0,1)]=o[i]||[],o[i].unshift(t.substr(1)),e.splice(l,1);for(var c in o)o[c].length>500&&r(o[c].slice(),c,o)}function o(t){var n="",a=[];for(var r in t)e.isArray(t[r])?1===t[r].length?a.push(r+t[r]):a.push(r+i.groupmarker.start+t[r].join(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)+i.groupmarker.end):a.push(r+o(t[r]));return 1===a.length?n+=a[0]:n+=i.groupmarker.start+a.join(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)+i.groupmarker.end,n}var s={};return i.phoneCodes&&(i.phoneCodes&&i.phoneCodes.length>1e3&&(r((t=t.substr(1,t.length-2)).split(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)),t=o(s)),t=t.replace(/9/g,"\\9")),a.call(this,t,n,i)},t.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(n)},keepStatic:!0,onBeforeMask:function(e,t){var n=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(n.indexOf(t.countrycode)>1||-1===n.indexOf(t.countrycode))&&(n="+"+t.countrycode+n),n},onUnMask:function(e,t,n){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t})},function(e,t,n){"use strict";var a,i,r;"function"==typeof Symbol&&Symbol.iterator;!function(o){i=[n(0),n(1)],void 0!==(r="function"==typeof(a=o)?a.apply(t,i):a)&&(e.exports=r)}(function(e,t){return t.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(e,t){return new RegExp(t.regex,t.casing?"i":"").test(e.join(""))},definitions:{r:{validator:function(t,n,a,i,r){function o(e,t){this.matches=[],this.isGroup=e||!1,this.isQuantifier=t||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function s(t,n){var a=!1;n&&(p+="(",d++);for(var i=0;i<t.matches.length;i++){var o=t.matches[i];if(!0===o.isGroup)a=s(o,!0);else if(!0===o.isQuantifier){var c=e.inArray(o,t.matches),u=t.matches[c-1],f=p;if(isNaN(o.quantifier.max)){for(;o.repeaterPart&&o.repeaterPart!==p&&o.repeaterPart.length>p.length&&!(a=s(u,!0)););(a=a||s(u,!0))&&(o.repeaterPart=p),p=f+o.quantifier.max}else{for(var m=0,h=o.quantifier.max-1;m<h&&!(a=s(u,!0));m++);p=f+"{"+o.quantifier.min+","+o.quantifier.max+"}"}}else if(void 0!==o.matches)for(var g=0;g<o.length&&!(a=s(o[g],n));g++);else{var v;if("["==o.charAt(0)){v=p,v+=o;for(b=0;b<d;b++)v+=")";a=(x=new RegExp("^("+v+")$",r.casing?"i":"")).test(l)}else for(var y=0,k=o.length;y<k;y++)if("\\"!==o.charAt(y)){v=p,v=(v+=o.substr(0,y+1)).replace(/\|$/,"");for(var b=0;b<d;b++)v+=")";var x=new RegExp("^("+v+")$",r.casing?"i":"");if(a=x.test(l))break}p+=o}if(a)break}return n&&(p+=")",d--),a}var l,c,u=n.buffer.slice(),p="",f=!1,d=0;null===r.regexTokens&&function(){var e,t,n=new o,a=[];for(r.regexTokens=[];e=r.tokenizer.exec(r.regex);)switch((t=e[0]).charAt(0)){case"(":a.push(new o(!0));break;case")":c=a.pop(),a.length>0?a[a.length-1].matches.push(c):n.matches.push(c);break;case"{":case"+":case"*":var i=new o(!1,!0),s=(t=t.replace(/[{}]/g,"")).split(","),l=isNaN(s[0])?s[0]:parseInt(s[0]),u=1===s.length?l:isNaN(s[1])?s[1]:parseInt(s[1]);if(i.quantifier={min:l,max:u},a.length>0){var p=a[a.length-1].matches;(e=p.pop()).isGroup||((c=new o(!0)).matches.push(e),e=c),p.push(e),p.push(i)}else(e=n.matches.pop()).isGroup||((c=new o(!0)).matches.push(e),e=c),n.matches.push(e),n.matches.push(i);break;default:a.length>0?a[a.length-1].matches.push(t):n.matches.push(t)}n.matches.length>0&&r.regexTokens.push(n)}(),u.splice(a,0,t),l=u.join("");for(var m=0;m<r.regexTokens.length;m++){var h=r.regexTokens[m];if(f=s(h,h.isGroup))break}return f},cardinality:1}}}}),t})},function(e,t,n){"use strict";var a,i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o){i=[n(2),n(1)],void 0!==(r="function"==typeof(a=o)?a.apply(t,i):a)&&(e.exports=r)}(function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(n,a){var i,r=this[0];if(void 0===a&&(a={}),"string"==typeof n)switch(n){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":e(r).val(a),r&&void 0===r.inputmask&&e(r).triggerHandler("setvalue");break;case"option":if("string"!=typeof a)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(a)});if(r&&void 0!==r.inputmask)return r.inputmask.option(a);break;default:return a.alias=n,i=new t(a),this.each(function(){i.mask(this)})}else{if("object"==(void 0===n?"undefined":o(n)))return i=new t(n),void 0===n.mask&&void 0===n.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(n);i.mask(this)}):this.each(function(){i.mask(this)});if(void 0===n)return this.each(function(){(i=new t(a)).mask(this)})}}),e.fn.inputmask})}]);
/*!
* phone-codes/phone.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.11
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "../inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("../inputmask")) : factory(window.Inputmask);
}(function(Inputmask) {
    return Inputmask.extendAliases({
        phone: {
            alias: "abstractphone",
            phoneCodes: [ {
                mask: "+247-####",
                cc: "AC",
                cd: "Ascension",
                desc_en: "",
                name_ru: "Остров Вознесения",
                desc_ru: ""
            }, {
                mask: "+376-###-###",
                cc: "AD",
                cd: "Andorra",
                desc_en: "",
                name_ru: "Андорра",
                desc_ru: ""
            }, {
                mask: "+971-5#-###-####",
                cc: "AE",
                cd: "United Arab Emirates",
                desc_en: "mobile",
                name_ru: "Объединенные Арабские Эмираты",
                desc_ru: "мобильные"
            }, {
                mask: "+971-#-###-####",
                cc: "AE",
                cd: "United Arab Emirates",
                desc_en: "",
                name_ru: "Объединенные Арабские Эмираты",
                desc_ru: ""
            }, {
                mask: "+93-##-###-####",
                cc: "AF",
                cd: "Afghanistan",
                desc_en: "",
                name_ru: "Афганистан",
                desc_ru: ""
            }, {
                mask: "+1(268)###-####",
                cc: "AG",
                cd: "Antigua & Barbuda",
                desc_en: "",
                name_ru: "Антигуа и Барбуда",
                desc_ru: ""
            }, {
                mask: "+1(264)###-####",
                cc: "AI",
                cd: "Anguilla",
                desc_en: "",
                name_ru: "Ангилья",
                desc_ru: ""
            }, {
                mask: "+355(###)###-###",
                cc: "AL",
                cd: "Albania",
                desc_en: "",
                name_ru: "Албания",
                desc_ru: ""
            }, {
                mask: "+374-##-###-###",
                cc: "AM",
                cd: "Armenia",
                desc_en: "",
                name_ru: "Армения",
                desc_ru: ""
            }, {
                mask: "+599-###-####",
                cc: "AN",
                cd: "Caribbean Netherlands",
                desc_en: "",
                name_ru: "Карибские Нидерланды",
                desc_ru: ""
            }, {
                mask: "+599-###-####",
                cc: "AN",
                cd: "Netherlands Antilles",
                desc_en: "",
                name_ru: "Нидерландские Антильские острова",
                desc_ru: ""
            }, {
                mask: "+599-9###-####",
                cc: "AN",
                cd: "Netherlands Antilles",
                desc_en: "Curacao",
                name_ru: "Нидерландские Антильские острова",
                desc_ru: "Кюрасао"
            }, {
                mask: "+244(###)###-###",
                cc: "AO",
                cd: "Angola",
                desc_en: "",
                name_ru: "Ангола",
                desc_ru: ""
            }, {
                mask: "+672-1##-###",
                cc: "AQ",
                cd: "Australian bases in Antarctica",
                desc_en: "",
                name_ru: "Австралийская антарктическая база",
                desc_ru: ""
            }, {
                mask: "+54(###)###-####",
                cc: "AR",
                cd: "Argentina",
                desc_en: "",
                name_ru: "Аргентина",
                desc_ru: ""
            }, {
                mask: "+1(684)###-####",
                cc: "AS",
                cd: "American Samoa",
                desc_en: "",
                name_ru: "Американское Самоа",
                desc_ru: ""
            }, {
                mask: "+43(###)###-####",
                cc: "AT",
                cd: "Austria",
                desc_en: "",
                name_ru: "Австрия",
                desc_ru: ""
            }, {
                mask: "+61-#-####-####",
                cc: "AU",
                cd: "Australia",
                desc_en: "",
                name_ru: "Австралия",
                desc_ru: ""
            }, {
                mask: "+297-###-####",
                cc: "AW",
                cd: "Aruba",
                desc_en: "",
                name_ru: "Аруба",
                desc_ru: ""
            }, {
                mask: "+994-##-###-##-##",
                cc: "AZ",
                cd: "Azerbaijan",
                desc_en: "",
                name_ru: "Азербайджан",
                desc_ru: ""
            }, {
                mask: "+387-##-#####",
                cc: "BA",
                cd: "Bosnia and Herzegovina",
                desc_en: "",
                name_ru: "Босния и Герцеговина",
                desc_ru: ""
            }, {
                mask: "+387-##-####",
                cc: "BA",
                cd: "Bosnia and Herzegovina",
                desc_en: "",
                name_ru: "Босния и Герцеговина",
                desc_ru: ""
            }, {
                mask: "+1(246)###-####",
                cc: "BB",
                cd: "Barbados",
                desc_en: "",
                name_ru: "Барбадос",
                desc_ru: ""
            }, {
                mask: "+880-##-###-###",
                cc: "BD",
                cd: "Bangladesh",
                desc_en: "",
                name_ru: "Бангладеш",
                desc_ru: ""
            }, {
                mask: "+32(###)###-###",
                cc: "BE",
                cd: "Belgium",
                desc_en: "",
                name_ru: "Бельгия",
                desc_ru: ""
            }, {
                mask: "+226-##-##-####",
                cc: "BF",
                cd: "Burkina Faso",
                desc_en: "",
                name_ru: "Буркина Фасо",
                desc_ru: ""
            }, {
                mask: "+359(###)###-###",
                cc: "BG",
                cd: "Bulgaria",
                desc_en: "",
                name_ru: "Болгария",
                desc_ru: ""
            }, {
                mask: "+973-####-####",
                cc: "BH",
                cd: "Bahrain",
                desc_en: "",
                name_ru: "Бахрейн",
                desc_ru: ""
            }, {
                mask: "+257-##-##-####",
                cc: "BI",
                cd: "Burundi",
                desc_en: "",
                name_ru: "Бурунди",
                desc_ru: ""
            }, {
                mask: "+229-##-##-####",
                cc: "BJ",
                cd: "Benin",
                desc_en: "",
                name_ru: "Бенин",
                desc_ru: ""
            }, {
                mask: "+1(441)###-####",
                cc: "BM",
                cd: "Bermuda",
                desc_en: "",
                name_ru: "Бермудские острова",
                desc_ru: ""
            }, {
                mask: "+673-###-####",
                cc: "BN",
                cd: "Brunei Darussalam",
                desc_en: "",
                name_ru: "Бруней-Даруссалам",
                desc_ru: ""
            }, {
                mask: "+591-#-###-####",
                cc: "BO",
                cd: "Bolivia",
                desc_en: "",
                name_ru: "Боливия",
                desc_ru: ""
            }, {
                mask: "+55-##-####-####",
                cc: "BR",
                cd: "Brazil",
                desc_en: "",
                name_ru: "Бразилия",
                desc_ru: ""
            }, {
                mask: "+55-##-#####-####",
                cc: "BR",
                cd: "Brazil",
                desc_en: "",
                name_ru: "Бразилия",
                desc_ru: ""
            }, {
                mask: "+1(242)###-####",
                cc: "BS",
                cd: "Bahamas",
                desc_en: "",
                name_ru: "Багамские Острова",
                desc_ru: ""
            }, {
                mask: "+975-17-###-###",
                cc: "BT",
                cd: "Bhutan",
                desc_en: "",
                name_ru: "Бутан",
                desc_ru: ""
            }, {
                mask: "+975-#-###-###",
                cc: "BT",
                cd: "Bhutan",
                desc_en: "",
                name_ru: "Бутан",
                desc_ru: ""
            }, {
                mask: "+267-##-###-###",
                cc: "BW",
                cd: "Botswana",
                desc_en: "",
                name_ru: "Ботсвана",
                desc_ru: ""
            }, {
                mask: "+375(##)###-##-##",
                cc: "BY",
                cd: "Belarus",
                desc_en: "",
                name_ru: "Беларусь (Белоруссия)",
                desc_ru: ""
            }, {
                mask: "+501-###-####",
                cc: "BZ",
                cd: "Belize",
                desc_en: "",
                name_ru: "Белиз",
                desc_ru: ""
            }, {
                mask: "+243(###)###-###",
                cc: "CD",
                cd: "Dem. Rep. Congo",
                desc_en: "",
                name_ru: "Дем. Респ. Конго (Киншаса)",
                desc_ru: ""
            }, {
                mask: "+236-##-##-####",
                cc: "CF",
                cd: "Central African Republic",
                desc_en: "",
                name_ru: "Центральноафриканская Республика",
                desc_ru: ""
            }, {
                mask: "+242-##-###-####",
                cc: "CG",
                cd: "Congo (Brazzaville)",
                desc_en: "",
                name_ru: "Конго (Браззавиль)",
                desc_ru: ""
            }, {
                mask: "+41-##-###-####",
                cc: "CH",
                cd: "Switzerland",
                desc_en: "",
                name_ru: "Швейцария",
                desc_ru: ""
            }, {
                mask: "+225-##-###-###",
                cc: "CI",
                cd: "Cote d’Ivoire (Ivory Coast)",
                desc_en: "",
                name_ru: "Кот-д’Ивуар",
                desc_ru: ""
            }, {
                mask: "+682-##-###",
                cc: "CK",
                cd: "Cook Islands",
                desc_en: "",
                name_ru: "Острова Кука",
                desc_ru: ""
            }, {
                mask: "+56-#-####-####",
                cc: "CL",
                cd: "Chile",
                desc_en: "",
                name_ru: "Чили",
                desc_ru: ""
            }, {
                mask: "+237-####-####",
                cc: "CM",
                cd: "Cameroon",
                desc_en: "",
                name_ru: "Камерун",
                desc_ru: ""
            }, {
                mask: "+86(###)####-####",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "Китайская Н.Р.",
                desc_ru: ""
            }, {
                mask: "+86(###)####-###",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "Китайская Н.Р.",
                desc_ru: ""
            }, {
                mask: "+86-##-#####-#####",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "Китайская Н.Р.",
                desc_ru: ""
            }, {
                mask: "+57(###)###-####",
                cc: "CO",
                cd: "Colombia",
                desc_en: "",
                name_ru: "Колумбия",
                desc_ru: ""
            }, {
                mask: "+506-####-####",
                cc: "CR",
                cd: "Costa Rica",
                desc_en: "",
                name_ru: "Коста-Рика",
                desc_ru: ""
            }, {
                mask: "+53-#-###-####",
                cc: "CU",
                cd: "Cuba",
                desc_en: "",
                name_ru: "Куба",
                desc_ru: ""
            }, {
                mask: "+238(###)##-##",
                cc: "CV",
                cd: "Cape Verde",
                desc_en: "",
                name_ru: "Кабо-Верде",
                desc_ru: ""
            }, {
                mask: "+599-###-####",
                cc: "CW",
                cd: "Curacao",
                desc_en: "",
                name_ru: "Кюрасао",
                desc_ru: ""
            }, {
                mask: "+357-##-###-###",
                cc: "CY",
                cd: "Cyprus",
                desc_en: "",
                name_ru: "Кипр",
                desc_ru: ""
            }, {
                mask: "+420(###)###-###",
                cc: "CZ",
                cd: "Czech Republic",
                desc_en: "",
                name_ru: "Чехия",
                desc_ru: ""
            }, {
                mask: "+49(####)###-####",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49(###)###-####",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49(###)##-####",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49(###)##-###",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49(###)##-##",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49-###-###",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+253-##-##-##-##",
                cc: "DJ",
                cd: "Djibouti",
                desc_en: "",
                name_ru: "Джибути",
                desc_ru: ""
            }, {
                mask: "+45-##-##-##-##",
                cc: "DK",
                cd: "Denmark",
                desc_en: "",
                name_ru: "Дания",
                desc_ru: ""
            }, {
                mask: "+1(767)###-####",
                cc: "DM",
                cd: "Dominica",
                desc_en: "",
                name_ru: "Доминика",
                desc_ru: ""
            }, {
                mask: "+1(809)###-####",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "Доминиканская Республика",
                desc_ru: ""
            }, {
                mask: "+1(829)###-####",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "Доминиканская Республика",
                desc_ru: ""
            }, {
                mask: "+1(849)###-####",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "Доминиканская Республика",
                desc_ru: ""
            }, {
                mask: "+213-##-###-####",
                cc: "DZ",
                cd: "Algeria",
                desc_en: "",
                name_ru: "Алжир",
                desc_ru: ""
            }, {
                mask: "+593-##-###-####",
                cc: "EC",
                cd: "Ecuador ",
                desc_en: "mobile",
                name_ru: "Эквадор ",
                desc_ru: "мобильные"
            }, {
                mask: "+593-#-###-####",
                cc: "EC",
                cd: "Ecuador",
                desc_en: "",
                name_ru: "Эквадор",
                desc_ru: ""
            }, {
                mask: "+372-####-####",
                cc: "EE",
                cd: "Estonia ",
                desc_en: "mobile",
                name_ru: "Эстония ",
                desc_ru: "мобильные"
            }, {
                mask: "+372-###-####",
                cc: "EE",
                cd: "Estonia",
                desc_en: "",
                name_ru: "Эстония",
                desc_ru: ""
            }, {
                mask: "+20(###)###-####",
                cc: "EG",
                cd: "Egypt",
                desc_en: "",
                name_ru: "Египет",
                desc_ru: ""
            }, {
                mask: "+291-#-###-###",
                cc: "ER",
                cd: "Eritrea",
                desc_en: "",
                name_ru: "Эритрея",
                desc_ru: ""
            }, {
                mask: "+34(###)###-###",
                cc: "ES",
                cd: "Spain",
                desc_en: "",
                name_ru: "Испания",
                desc_ru: ""
            }, {
                mask: "+251-##-###-####",
                cc: "ET",
                cd: "Ethiopia",
                desc_en: "",
                name_ru: "Эфиопия",
                desc_ru: ""
            }, {
                mask: "+358(###)###-##-##",
                cc: "FI",
                cd: "Finland",
                desc_en: "",
                name_ru: "Финляндия",
                desc_ru: ""
            }, {
                mask: "+679-##-#####",
                cc: "FJ",
                cd: "Fiji",
                desc_en: "",
                name_ru: "Фиджи",
                desc_ru: ""
            }, {
                mask: "+500-#####",
                cc: "FK",
                cd: "Falkland Islands",
                desc_en: "",
                name_ru: "Фолклендские острова",
                desc_ru: ""
            }, {
                mask: "+691-###-####",
                cc: "FM",
                cd: "F.S. Micronesia",
                desc_en: "",
                name_ru: "Ф.Ш. Микронезии",
                desc_ru: ""
            }, {
                mask: "+298-###-###",
                cc: "FO",
                cd: "Faroe Islands",
                desc_en: "",
                name_ru: "Фарерские острова",
                desc_ru: ""
            }, {
                mask: "+262-#####-####",
                cc: "FR",
                cd: "Mayotte",
                desc_en: "",
                name_ru: "Майотта",
                desc_ru: ""
            }, {
                mask: "+33(###)###-###",
                cc: "FR",
                cd: "France",
                desc_en: "",
                name_ru: "Франция",
                desc_ru: ""
            }, {
                mask: "+508-##-####",
                cc: "FR",
                cd: "St Pierre & Miquelon",
                desc_en: "",
                name_ru: "Сен-Пьер и Микелон",
                desc_ru: ""
            }, {
                mask: "+590(###)###-###",
                cc: "FR",
                cd: "Guadeloupe",
                desc_en: "",
                name_ru: "Гваделупа",
                desc_ru: ""
            }, {
                mask: "+241-#-##-##-##",
                cc: "GA",
                cd: "Gabon",
                desc_en: "",
                name_ru: "Габон",
                desc_ru: ""
            }, {
                mask: "+1(473)###-####",
                cc: "GD",
                cd: "Grenada",
                desc_en: "",
                name_ru: "Гренада",
                desc_ru: ""
            }, {
                mask: "+995(###)###-###",
                cc: "GE",
                cd: "Rep. of Georgia",
                desc_en: "",
                name_ru: "Грузия",
                desc_ru: ""
            }, {
                mask: "+594-#####-####",
                cc: "GF",
                cd: "Guiana (French)",
                desc_en: "",
                name_ru: "Фр. Гвиана",
                desc_ru: ""
            }, {
                mask: "+233(###)###-###",
                cc: "GH",
                cd: "Ghana",
                desc_en: "",
                name_ru: "Гана",
                desc_ru: ""
            }, {
                mask: "+350-###-#####",
                cc: "GI",
                cd: "Gibraltar",
                desc_en: "",
                name_ru: "Гибралтар",
                desc_ru: ""
            }, {
                mask: "+299-##-##-##",
                cc: "GL",
                cd: "Greenland",
                desc_en: "",
                name_ru: "Гренландия",
                desc_ru: ""
            }, {
                mask: "+220(###)##-##",
                cc: "GM",
                cd: "Gambia",
                desc_en: "",
                name_ru: "Гамбия",
                desc_ru: ""
            }, {
                mask: "+224-##-###-###",
                cc: "GN",
                cd: "Guinea",
                desc_en: "",
                name_ru: "Гвинея",
                desc_ru: ""
            }, {
                mask: "+240-##-###-####",
                cc: "GQ",
                cd: "Equatorial Guinea",
                desc_en: "",
                name_ru: "Экваториальная Гвинея",
                desc_ru: ""
            }, {
                mask: "+30(###)###-####",
                cc: "GR",
                cd: "Greece",
                desc_en: "",
                name_ru: "Греция",
                desc_ru: ""
            }, {
                mask: "+502-#-###-####",
                cc: "GT",
                cd: "Guatemala",
                desc_en: "",
                name_ru: "Гватемала",
                desc_ru: ""
            }, {
                mask: "+1(671)###-####",
                cc: "GU",
                cd: "Guam",
                desc_en: "",
                name_ru: "Гуам",
                desc_ru: ""
            }, {
                mask: "+245-#-######",
                cc: "GW",
                cd: "Guinea-Bissau",
                desc_en: "",
                name_ru: "Гвинея-Бисау",
                desc_ru: ""
            }, {
                mask: "+592-###-####",
                cc: "GY",
                cd: "Guyana",
                desc_en: "",
                name_ru: "Гайана",
                desc_ru: ""
            }, {
                mask: "+852-####-####",
                cc: "HK",
                cd: "Hong Kong",
                desc_en: "",
                name_ru: "Гонконг",
                desc_ru: ""
            }, {
                mask: "+504-####-####",
                cc: "HN",
                cd: "Honduras",
                desc_en: "",
                name_ru: "Гондурас",
                desc_ru: ""
            }, {
                mask: "+385-(##)-###-###",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "Хорватия",
                desc_ru: ""
            }, {
                mask: "+385-(##)-###-####",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "Хорватия",
                desc_ru: ""
            }, {
                mask: "+385-1-####-###",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "Хорватия",
                desc_ru: ""
            }, {
                mask: "+509-##-##-####",
                cc: "HT",
                cd: "Haiti",
                desc_en: "",
                name_ru: "Гаити",
                desc_ru: ""
            }, {
                mask: "+36(###)###-###",
                cc: "HU",
                cd: "Hungary",
                desc_en: "",
                name_ru: "Венгрия",
                desc_ru: ""
            }, {
                mask: "+62(8##)###-####",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "Индонезия ",
                desc_ru: "мобильные"
            }, {
                mask: "+62-##-###-##",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "Индонезия",
                desc_ru: ""
            }, {
                mask: "+62-##-###-###",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "Индонезия",
                desc_ru: ""
            }, {
                mask: "+62-##-###-####",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "Индонезия",
                desc_ru: ""
            }, {
                mask: "+62(8##)###-###",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "Индонезия ",
                desc_ru: "мобильные"
            }, {
                mask: "+62(8##)###-##-###",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "Индонезия ",
                desc_ru: "мобильные"
            }, {
                mask: "+353(###)###-###",
                cc: "IE",
                cd: "Ireland",
                desc_en: "",
                name_ru: "Ирландия",
                desc_ru: ""
            }, {
                mask: "+972-5#-###-####",
                cc: "IL",
                cd: "Israel ",
                desc_en: "mobile",
                name_ru: "Израиль ",
                desc_ru: "мобильные"
            }, {
                mask: "+972-#-###-####",
                cc: "IL",
                cd: "Israel",
                desc_en: "",
                name_ru: "Израиль",
                desc_ru: ""
            }, {
                mask: "+91(####)###-###",
                cc: "IN",
                cd: "India",
                desc_en: "",
                name_ru: "Индия",
                desc_ru: ""
            }, {
                mask: "+246-###-####",
                cc: "IO",
                cd: "Diego Garcia",
                desc_en: "",
                name_ru: "Диего-Гарсия",
                desc_ru: ""
            }, {
                mask: "+964(###)###-####",
                cc: "IQ",
                cd: "Iraq",
                desc_en: "",
                name_ru: "Ирак",
                desc_ru: ""
            }, {
                mask: "+98(###)###-####",
                cc: "IR",
                cd: "Iran",
                desc_en: "",
                name_ru: "Иран",
                desc_ru: ""
            }, {
                mask: "+354-###-####",
                cc: "IS",
                cd: "Iceland",
                desc_en: "",
                name_ru: "Исландия",
                desc_ru: ""
            }, {
                mask: "+39(###)####-###",
                cc: "IT",
                cd: "Italy",
                desc_en: "",
                name_ru: "Италия",
                desc_ru: ""
            }, {
                mask: "+1(876)###-####",
                cc: "JM",
                cd: "Jamaica",
                desc_en: "",
                name_ru: "Ямайка",
                desc_ru: ""
            }, {
                mask: "+962-#-####-####",
                cc: "JO",
                cd: "Jordan",
                desc_en: "",
                name_ru: "Иордания",
                desc_ru: ""
            }, {
                mask: "+81-##-####-####",
                cc: "JP",
                cd: "Japan ",
                desc_en: "mobile",
                name_ru: "Япония ",
                desc_ru: "мобильные"
            }, {
                mask: "+81(###)###-###",
                cc: "JP",
                cd: "Japan",
                desc_en: "",
                name_ru: "Япония",
                desc_ru: ""
            }, {
                mask: "+254-###-######",
                cc: "KE",
                cd: "Kenya",
                desc_en: "",
                name_ru: "Кения",
                desc_ru: ""
            }, {
                mask: "+996(###)###-###",
                cc: "KG",
                cd: "Kyrgyzstan",
                desc_en: "",
                name_ru: "Киргизия",
                desc_ru: ""
            }, {
                mask: "+855-##-###-###",
                cc: "KH",
                cd: "Cambodia",
                desc_en: "",
                name_ru: "Камбоджа",
                desc_ru: ""
            }, {
                mask: "+686-##-###",
                cc: "KI",
                cd: "Kiribati",
                desc_en: "",
                name_ru: "Кирибати",
                desc_ru: ""
            }, {
                mask: "+269-##-#####",
                cc: "KM",
                cd: "Comoros",
                desc_en: "",
                name_ru: "Коморы",
                desc_ru: ""
            }, {
                mask: "+1(869)###-####",
                cc: "KN",
                cd: "Saint Kitts & Nevis",
                desc_en: "",
                name_ru: "Сент-Китс и Невис",
                desc_ru: ""
            }, {
                mask: "+850-191-###-####",
                cc: "KP",
                cd: "DPR Korea (North) ",
                desc_en: "mobile",
                name_ru: "Корейская НДР ",
                desc_ru: "мобильные"
            }, {
                mask: "+850-##-###-###",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+850-###-####-###",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+850-###-###",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+850-####-####",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+850-####-#############",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+82-##-###-####",
                cc: "KR",
                cd: "Korea (South)",
                desc_en: "",
                name_ru: "Респ. Корея",
                desc_ru: ""
            }, {
                mask: "+965-####-####",
                cc: "KW",
                cd: "Kuwait",
                desc_en: "",
                name_ru: "Кувейт",
                desc_ru: ""
            }, {
                mask: "+1(345)###-####",
                cc: "KY",
                cd: "Cayman Islands",
                desc_en: "",
                name_ru: "Каймановы острова",
                desc_ru: ""
            }, {
                mask: "+7(6##)###-##-##",
                cc: "KZ",
                cd: "Kazakhstan",
                desc_en: "",
                name_ru: "Казахстан",
                desc_ru: ""
            }, {
                mask: "+7(7##)###-##-##",
                cc: "KZ",
                cd: "Kazakhstan",
                desc_en: "",
                name_ru: "Казахстан",
                desc_ru: ""
            }, {
                mask: "+856(20##)###-###",
                cc: "LA",
                cd: "Laos ",
                desc_en: "mobile",
                name_ru: "Лаос ",
                desc_ru: "мобильные"
            }, {
                mask: "+856-##-###-###",
                cc: "LA",
                cd: "Laos",
                desc_en: "",
                name_ru: "Лаос",
                desc_ru: ""
            }, {
                mask: "+961-##-###-###",
                cc: "LB",
                cd: "Lebanon ",
                desc_en: "mobile",
                name_ru: "Ливан ",
                desc_ru: "мобильные"
            }, {
                mask: "+961-#-###-###",
                cc: "LB",
                cd: "Lebanon",
                desc_en: "",
                name_ru: "Ливан",
                desc_ru: ""
            }, {
                mask: "+1(758)###-####",
                cc: "LC",
                cd: "Saint Lucia",
                desc_en: "",
                name_ru: "Сент-Люсия",
                desc_ru: ""
            }, {
                mask: "+423(###)###-####",
                cc: "LI",
                cd: "Liechtenstein",
                desc_en: "",
                name_ru: "Лихтенштейн",
                desc_ru: ""
            }, {
                mask: "+94-##-###-####",
                cc: "LK",
                cd: "Sri Lanka",
                desc_en: "",
                name_ru: "Шри-Ланка",
                desc_ru: ""
            }, {
                mask: "+231-##-###-###",
                cc: "LR",
                cd: "Liberia",
                desc_en: "",
                name_ru: "Либерия",
                desc_ru: ""
            }, {
                mask: "+266-#-###-####",
                cc: "LS",
                cd: "Lesotho",
                desc_en: "",
                name_ru: "Лесото",
                desc_ru: ""
            }, {
                mask: "+370(###)##-###",
                cc: "LT",
                cd: "Lithuania",
                desc_en: "",
                name_ru: "Литва",
                desc_ru: ""
            }, {
                mask: "+352-###-###",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "Люксембург",
                desc_ru: ""
            }, {
                mask: "+352-####-###",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "Люксембург",
                desc_ru: ""
            }, {
                mask: "+352-#####-###",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "Люксембург",
                desc_ru: ""
            }, {
                mask: "+352-######-###",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "Люксембург",
                desc_ru: ""
            }, {
                mask: "+371-##-###-###",
                cc: "LV",
                cd: "Latvia",
                desc_en: "",
                name_ru: "Латвия",
                desc_ru: ""
            }, {
                mask: "+218-##-###-###",
                cc: "LY",
                cd: "Libya",
                desc_en: "",
                name_ru: "Ливия",
                desc_ru: ""
            }, {
                mask: "+218-21-###-####",
                cc: "LY",
                cd: "Libya",
                desc_en: "Tripoli",
                name_ru: "Ливия",
                desc_ru: "Триполи"
            }, {
                mask: "+212-##-####-###",
                cc: "MA",
                cd: "Morocco",
                desc_en: "",
                name_ru: "Марокко",
                desc_ru: ""
            }, {
                mask: "+377(###)###-###",
                cc: "MC",
                cd: "Monaco",
                desc_en: "",
                name_ru: "Монако",
                desc_ru: ""
            }, {
                mask: "+377-##-###-###",
                cc: "MC",
                cd: "Monaco",
                desc_en: "",
                name_ru: "Монако",
                desc_ru: ""
            }, {
                mask: "+373-####-####",
                cc: "MD",
                cd: "Moldova",
                desc_en: "",
                name_ru: "Молдова",
                desc_ru: ""
            }, {
                mask: "+382-##-###-###",
                cc: "ME",
                cd: "Montenegro",
                desc_en: "",
                name_ru: "Черногория",
                desc_ru: ""
            }, {
                mask: "+261-##-##-#####",
                cc: "MG",
                cd: "Madagascar",
                desc_en: "",
                name_ru: "Мадагаскар",
                desc_ru: ""
            }, {
                mask: "+692-###-####",
                cc: "MH",
                cd: "Marshall Islands",
                desc_en: "",
                name_ru: "Маршалловы Острова",
                desc_ru: ""
            }, {
                mask: "+389-##-###-###",
                cc: "MK",
                cd: "Republic of Macedonia",
                desc_en: "",
                name_ru: "Респ. Македония",
                desc_ru: ""
            }, {
                mask: "+223-##-##-####",
                cc: "ML",
                cd: "Mali",
                desc_en: "",
                name_ru: "Мали",
                desc_ru: ""
            }, {
                mask: "+95-##-###-###",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "Бирма (Мьянма)",
                desc_ru: ""
            }, {
                mask: "+95-#-###-###",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "Бирма (Мьянма)",
                desc_ru: ""
            }, {
                mask: "+95-###-###",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "Бирма (Мьянма)",
                desc_ru: ""
            }, {
                mask: "+976-##-##-####",
                cc: "MN",
                cd: "Mongolia",
                desc_en: "",
                name_ru: "Монголия",
                desc_ru: ""
            }, {
                mask: "+853-####-####",
                cc: "MO",
                cd: "Macau",
                desc_en: "",
                name_ru: "Макао",
                desc_ru: ""
            }, {
                mask: "+1(670)###-####",
                cc: "MP",
                cd: "Northern Mariana Islands",
                desc_en: "",
                name_ru: "Северные Марианские острова Сайпан",
                desc_ru: ""
            }, {
                mask: "+596(###)##-##-##",
                cc: "MQ",
                cd: "Martinique",
                desc_en: "",
                name_ru: "Мартиника",
                desc_ru: ""
            }, {
                mask: "+222-##-##-####",
                cc: "MR",
                cd: "Mauritania",
                desc_en: "",
                name_ru: "Мавритания",
                desc_ru: ""
            }, {
                mask: "+1(664)###-####",
                cc: "MS",
                cd: "Montserrat",
                desc_en: "",
                name_ru: "Монтсеррат",
                desc_ru: ""
            }, {
                mask: "+356-####-####",
                cc: "MT",
                cd: "Malta",
                desc_en: "",
                name_ru: "Мальта",
                desc_ru: ""
            }, {
                mask: "+230-###-####",
                cc: "MU",
                cd: "Mauritius",
                desc_en: "",
                name_ru: "Маврикий",
                desc_ru: ""
            }, {
                mask: "+960-###-####",
                cc: "MV",
                cd: "Maldives",
                desc_en: "",
                name_ru: "Мальдивские острова",
                desc_ru: ""
            }, {
                mask: "+265-1-###-###",
                cc: "MW",
                cd: "Malawi",
                desc_en: "Telecom Ltd",
                name_ru: "Малави",
                desc_ru: "Telecom Ltd"
            }, {
                mask: "+265-#-####-####",
                cc: "MW",
                cd: "Malawi",
                desc_en: "",
                name_ru: "Малави",
                desc_ru: ""
            }, {
                mask: "+52(###)###-####",
                cc: "MX",
                cd: "Mexico",
                desc_en: "",
                name_ru: "Мексика",
                desc_ru: ""
            }, {
                mask: "+52-##-##-####",
                cc: "MX",
                cd: "Mexico",
                desc_en: "",
                name_ru: "Мексика",
                desc_ru: ""
            }, {
                mask: "+60-##-###-####",
                cc: "MY",
                cd: "Malaysia ",
                desc_en: "mobile",
                name_ru: "Малайзия ",
                desc_ru: "мобильные"
            }, {
                mask: "+60-11-####-####",
                cc: "MY",
                cd: "Malaysia ",
                desc_en: "mobile",
                name_ru: "Малайзия ",
                desc_ru: "мобильные"
            }, {
                mask: "+60(###)###-###",
                cc: "MY",
                cd: "Malaysia",
                desc_en: "",
                name_ru: "Малайзия",
                desc_ru: ""
            }, {
                mask: "+60-##-###-###",
                cc: "MY",
                cd: "Malaysia",
                desc_en: "",
                name_ru: "Малайзия",
                desc_ru: ""
            }, {
                mask: "+60-#-###-###",
                cc: "MY",
                cd: "Malaysia",
                desc_en: "",
                name_ru: "Малайзия",
                desc_ru: ""
            }, {
                mask: "+258-##-###-###",
                cc: "MZ",
                cd: "Mozambique",
                desc_en: "",
                name_ru: "Мозамбик",
                desc_ru: ""
            }, {
                mask: "+264-##-###-####",
                cc: "NA",
                cd: "Namibia",
                desc_en: "",
                name_ru: "Намибия",
                desc_ru: ""
            }, {
                mask: "+687-##-####",
                cc: "NC",
                cd: "New Caledonia",
                desc_en: "",
                name_ru: "Новая Каледония",
                desc_ru: ""
            }, {
                mask: "+227-##-##-####",
                cc: "NE",
                cd: "Niger",
                desc_en: "",
                name_ru: "Нигер",
                desc_ru: ""
            }, {
                mask: "+672-3##-###",
                cc: "NF",
                cd: "Norfolk Island",
                desc_en: "",
                name_ru: "Норфолк (остров)",
                desc_ru: ""
            }, {
                mask: "+234(###)###-####",
                cc: "NG",
                cd: "Nigeria",
                desc_en: "",
                name_ru: "Нигерия",
                desc_ru: ""
            }, {
                mask: "+234-##-###-###",
                cc: "NG",
                cd: "Nigeria",
                desc_en: "",
                name_ru: "Нигерия",
                desc_ru: ""
            }, {
                mask: "+234-##-###-##",
                cc: "NG",
                cd: "Nigeria",
                desc_en: "",
                name_ru: "Нигерия",
                desc_ru: ""
            }, {
                mask: "+234(###)###-####",
                cc: "NG",
                cd: "Nigeria ",
                desc_en: "mobile",
                name_ru: "Нигерия ",
                desc_ru: "мобильные"
            }, {
                mask: "+505-####-####",
                cc: "NI",
                cd: "Nicaragua",
                desc_en: "",
                name_ru: "Никарагуа",
                desc_ru: ""
            }, {
                mask: "+31-##-###-####",
                cc: "NL",
                cd: "Netherlands",
                desc_en: "",
                name_ru: "Нидерланды",
                desc_ru: ""
            }, {
                mask: "+47(###)##-###",
                cc: "NO",
                cd: "Norway",
                desc_en: "",
                name_ru: "Норвегия",
                desc_ru: ""
            }, {
                mask: "+977-##-###-###",
                cc: "NP",
                cd: "Nepal",
                desc_en: "",
                name_ru: "Непал",
                desc_ru: ""
            }, {
                mask: "+674-###-####",
                cc: "NR",
                cd: "Nauru",
                desc_en: "",
                name_ru: "Науру",
                desc_ru: ""
            }, {
                mask: "+683-####",
                cc: "NU",
                cd: "Niue",
                desc_en: "",
                name_ru: "Ниуэ",
                desc_ru: ""
            }, {
                mask: "+64(###)###-###",
                cc: "NZ",
                cd: "New Zealand",
                desc_en: "",
                name_ru: "Новая Зеландия",
                desc_ru: ""
            }, {
                mask: "+64-##-###-###",
                cc: "NZ",
                cd: "New Zealand",
                desc_en: "",
                name_ru: "Новая Зеландия",
                desc_ru: ""
            }, {
                mask: "+64(###)###-####",
                cc: "NZ",
                cd: "New Zealand",
                desc_en: "",
                name_ru: "Новая Зеландия",
                desc_ru: ""
            }, {
                mask: "+968-##-###-###",
                cc: "OM",
                cd: "Oman",
                desc_en: "",
                name_ru: "Оман",
                desc_ru: ""
            }, {
                mask: "+507-###-####",
                cc: "PA",
                cd: "Panama",
                desc_en: "",
                name_ru: "Панама",
                desc_ru: ""
            }, {
                mask: "+51(###)###-###",
                cc: "PE",
                cd: "Peru",
                desc_en: "",
                name_ru: "Перу",
                desc_ru: ""
            }, {
                mask: "+689-##-##-##",
                cc: "PF",
                cd: "French Polynesia",
                desc_en: "",
                name_ru: "Французская Полинезия (Таити)",
                desc_ru: ""
            }, {
                mask: "+675(###)##-###",
                cc: "PG",
                cd: "Papua New Guinea",
                desc_en: "",
                name_ru: "Папуа-Новая Гвинея",
                desc_ru: ""
            }, {
                mask: "+63(###)###-####",
                cc: "PH",
                cd: "Philippines",
                desc_en: "",
                name_ru: "Филиппины",
                desc_ru: ""
            }, {
                mask: "+92(###)###-####",
                cc: "PK",
                cd: "Pakistan",
                desc_en: "",
                name_ru: "Пакистан",
                desc_ru: ""
            }, {
                mask: "+48(###)###-###",
                cc: "PL",
                cd: "Poland",
                desc_en: "",
                name_ru: "Польша",
                desc_ru: ""
            }, {
                mask: "+970-##-###-####",
                cc: "PS",
                cd: "Palestine",
                desc_en: "",
                name_ru: "Палестина",
                desc_ru: ""
            }, {
                mask: "+351-##-###-####",
                cc: "PT",
                cd: "Portugal",
                desc_en: "",
                name_ru: "Португалия",
                desc_ru: ""
            }, {
                mask: "+680-###-####",
                cc: "PW",
                cd: "Palau",
                desc_en: "",
                name_ru: "Палау",
                desc_ru: ""
            }, {
                mask: "+595(###)###-###",
                cc: "PY",
                cd: "Paraguay",
                desc_en: "",
                name_ru: "Парагвай",
                desc_ru: ""
            }, {
                mask: "+974-####-####",
                cc: "QA",
                cd: "Qatar",
                desc_en: "",
                name_ru: "Катар",
                desc_ru: ""
            }, {
                mask: "+262-#####-####",
                cc: "RE",
                cd: "Reunion",
                desc_en: "",
                name_ru: "Реюньон",
                desc_ru: ""
            }, {
                mask: "+40-##-###-####",
                cc: "RO",
                cd: "Romania",
                desc_en: "",
                name_ru: "Румыния",
                desc_ru: ""
            }, {
                mask: "+381-##-###-####",
                cc: "RS",
                cd: "Serbia",
                desc_en: "",
                name_ru: "Сербия",
                desc_ru: ""
            }, {
                mask: "+7(###)###-##-##",
                cc: "RU",
                cd: "Russia",
                desc_en: "",
                name_ru: "Россия",
                desc_ru: ""
            }, {
                mask: "+250(###)###-###",
                cc: "RW",
                cd: "Rwanda",
                desc_en: "",
                name_ru: "Руанда",
                desc_ru: ""
            }, {
                mask: "+966-5-####-####",
                cc: "SA",
                cd: "Saudi Arabia ",
                desc_en: "mobile",
                name_ru: "Саудовская Аравия ",
                desc_ru: "мобильные"
            }, {
                mask: "+966-#-###-####",
                cc: "SA",
                cd: "Saudi Arabia",
                desc_en: "",
                name_ru: "Саудовская Аравия",
                desc_ru: ""
            }, {
                mask: "+677-###-####",
                cc: "SB",
                cd: "Solomon Islands ",
                desc_en: "mobile",
                name_ru: "Соломоновы Острова ",
                desc_ru: "мобильные"
            }, {
                mask: "+677-#####",
                cc: "SB",
                cd: "Solomon Islands",
                desc_en: "",
                name_ru: "Соломоновы Острова",
                desc_ru: ""
            }, {
                mask: "+248-#-###-###",
                cc: "SC",
                cd: "Seychelles",
                desc_en: "",
                name_ru: "Сейшелы",
                desc_ru: ""
            }, {
                mask: "+249-##-###-####",
                cc: "SD",
                cd: "Sudan",
                desc_en: "",
                name_ru: "Судан",
                desc_ru: ""
            }, {
                mask: "+46-##-###-####",
                cc: "SE",
                cd: "Sweden",
                desc_en: "",
                name_ru: "Швеция",
                desc_ru: ""
            }, {
                mask: "+65-####-####",
                cc: "SG",
                cd: "Singapore",
                desc_en: "",
                name_ru: "Сингапур",
                desc_ru: ""
            }, {
                mask: "+290-####",
                cc: "SH",
                cd: "Saint Helena",
                desc_en: "",
                name_ru: "Остров Святой Елены",
                desc_ru: ""
            }, {
                mask: "+290-####",
                cc: "SH",
                cd: "Tristan da Cunha",
                desc_en: "",
                name_ru: "Тристан-да-Кунья",
                desc_ru: ""
            }, {
                mask: "+386-##-###-###",
                cc: "SI",
                cd: "Slovenia",
                desc_en: "",
                name_ru: "Словения",
                desc_ru: ""
            }, {
                mask: "+421(###)###-###",
                cc: "SK",
                cd: "Slovakia",
                desc_en: "",
                name_ru: "Словакия",
                desc_ru: ""
            }, {
                mask: "+232-##-######",
                cc: "SL",
                cd: "Sierra Leone",
                desc_en: "",
                name_ru: "Сьерра-Леоне",
                desc_ru: ""
            }, {
                mask: "+378-####-######",
                cc: "SM",
                cd: "San Marino",
                desc_en: "",
                name_ru: "Сан-Марино",
                desc_ru: ""
            }, {
                mask: "+221-##-###-####",
                cc: "SN",
                cd: "Senegal",
                desc_en: "",
                name_ru: "Сенегал",
                desc_ru: ""
            }, {
                mask: "+252-##-###-###",
                cc: "SO",
                cd: "Somalia",
                desc_en: "",
                name_ru: "Сомали",
                desc_ru: ""
            }, {
                mask: "+252-#-###-###",
                cc: "SO",
                cd: "Somalia",
                desc_en: "",
                name_ru: "Сомали",
                desc_ru: ""
            }, {
                mask: "+252-#-###-###",
                cc: "SO",
                cd: "Somalia ",
                desc_en: "mobile",
                name_ru: "Сомали ",
                desc_ru: "мобильные"
            }, {
                mask: "+597-###-####",
                cc: "SR",
                cd: "Suriname ",
                desc_en: "mobile",
                name_ru: "Суринам ",
                desc_ru: "мобильные"
            }, {
                mask: "+597-###-###",
                cc: "SR",
                cd: "Suriname",
                desc_en: "",
                name_ru: "Суринам",
                desc_ru: ""
            }, {
                mask: "+211-##-###-####",
                cc: "SS",
                cd: "South Sudan",
                desc_en: "",
                name_ru: "Южный Судан",
                desc_ru: ""
            }, {
                mask: "+239-##-#####",
                cc: "ST",
                cd: "Sao Tome and Principe",
                desc_en: "",
                name_ru: "Сан-Томе и Принсипи",
                desc_ru: ""
            }, {
                mask: "+503-##-##-####",
                cc: "SV",
                cd: "El Salvador",
                desc_en: "",
                name_ru: "Сальвадор",
                desc_ru: ""
            }, {
                mask: "+1(721)###-####",
                cc: "SX",
                cd: "Sint Maarten",
                desc_en: "",
                name_ru: "Синт-Маартен",
                desc_ru: ""
            }, {
                mask: "+963-##-####-###",
                cc: "SY",
                cd: "Syrian Arab Republic",
                desc_en: "",
                name_ru: "Сирийская арабская республика",
                desc_ru: ""
            }, {
                mask: "+268-##-##-####",
                cc: "SZ",
                cd: "Swaziland",
                desc_en: "",
                name_ru: "Свазиленд",
                desc_ru: ""
            }, {
                mask: "+1(649)###-####",
                cc: "TC",
                cd: "Turks & Caicos",
                desc_en: "",
                name_ru: "Тёркс и Кайкос",
                desc_ru: ""
            }, {
                mask: "+235-##-##-##-##",
                cc: "TD",
                cd: "Chad",
                desc_en: "",
                name_ru: "Чад",
                desc_ru: ""
            }, {
                mask: "+228-##-###-###",
                cc: "TG",
                cd: "Togo",
                desc_en: "",
                name_ru: "Того",
                desc_ru: ""
            }, {
                mask: "+66-##-###-####",
                cc: "TH",
                cd: "Thailand ",
                desc_en: "mobile",
                name_ru: "Таиланд ",
                desc_ru: "мобильные"
            }, {
                mask: "+66-##-###-###",
                cc: "TH",
                cd: "Thailand",
                desc_en: "",
                name_ru: "Таиланд",
                desc_ru: ""
            }, {
                mask: "+992-##-###-####",
                cc: "TJ",
                cd: "Tajikistan",
                desc_en: "",
                name_ru: "Таджикистан",
                desc_ru: ""
            }, {
                mask: "+690-####",
                cc: "TK",
                cd: "Tokelau",
                desc_en: "",
                name_ru: "Токелау",
                desc_ru: ""
            }, {
                mask: "+670-###-####",
                cc: "TL",
                cd: "East Timor",
                desc_en: "",
                name_ru: "Восточный Тимор",
                desc_ru: ""
            }, {
                mask: "+670-77#-#####",
                cc: "TL",
                cd: "East Timor",
                desc_en: "Timor Telecom",
                name_ru: "Восточный Тимор",
                desc_ru: "Timor Telecom"
            }, {
                mask: "+670-78#-#####",
                cc: "TL",
                cd: "East Timor",
                desc_en: "Timor Telecom",
                name_ru: "Восточный Тимор",
                desc_ru: "Timor Telecom"
            }, {
                mask: "+993-#-###-####",
                cc: "TM",
                cd: "Turkmenistan",
                desc_en: "",
                name_ru: "Туркменистан",
                desc_ru: ""
            }, {
                mask: "+216-##-###-###",
                cc: "TN",
                cd: "Tunisia",
                desc_en: "",
                name_ru: "Тунис",
                desc_ru: ""
            }, {
                mask: "+676-#####",
                cc: "TO",
                cd: "Tonga",
                desc_en: "",
                name_ru: "Тонга",
                desc_ru: ""
            }, {
                mask: "+90(###)###-####",
                cc: "TR",
                cd: "Turkey",
                desc_en: "",
                name_ru: "Турция",
                desc_ru: ""
            }, {
                mask: "+1(868)###-####",
                cc: "TT",
                cd: "Trinidad & Tobago",
                desc_en: "",
                name_ru: "Тринидад и Тобаго",
                desc_ru: ""
            }, {
                mask: "+688-90####",
                cc: "TV",
                cd: "Tuvalu ",
                desc_en: "mobile",
                name_ru: "Тувалу ",
                desc_ru: "мобильные"
            }, {
                mask: "+688-2####",
                cc: "TV",
                cd: "Tuvalu",
                desc_en: "",
                name_ru: "Тувалу",
                desc_ru: ""
            }, {
                mask: "+886-#-####-####",
                cc: "TW",
                cd: "Taiwan",
                desc_en: "",
                name_ru: "Тайвань",
                desc_ru: ""
            }, {
                mask: "+886-####-####",
                cc: "TW",
                cd: "Taiwan",
                desc_en: "",
                name_ru: "Тайвань",
                desc_ru: ""
            }, {
                mask: "+255-##-###-####",
                cc: "TZ",
                cd: "Tanzania",
                desc_en: "",
                name_ru: "Танзания",
                desc_ru: ""
            }, {
                mask: "+380(##)###-##-##",
                cc: "UA",
                cd: "Ukraine",
                desc_en: "",
                name_ru: "Украина",
                desc_ru: ""
            }, {
                mask: "+256(###)###-###",
                cc: "UG",
                cd: "Uganda",
                desc_en: "",
                name_ru: "Уганда",
                desc_ru: ""
            }, {
                mask: "+44-##-####-####",
                cc: "UK",
                cd: "United Kingdom",
                desc_en: "",
                name_ru: "Великобритания",
                desc_ru: ""
            }, {
                mask: "+598-#-###-##-##",
                cc: "UY",
                cd: "Uruguay",
                desc_en: "",
                name_ru: "Уругвай",
                desc_ru: ""
            }, {
                mask: "+998-##-###-####",
                cc: "UZ",
                cd: "Uzbekistan",
                desc_en: "",
                name_ru: "Узбекистан",
                desc_ru: ""
            }, {
                mask: "+39-6-698-#####",
                cc: "VA",
                cd: "Vatican City",
                desc_en: "",
                name_ru: "Ватикан",
                desc_ru: ""
            }, {
                mask: "+1(784)###-####",
                cc: "VC",
                cd: "Saint Vincent & the Grenadines",
                desc_en: "",
                name_ru: "Сент-Винсент и Гренадины",
                desc_ru: ""
            }, {
                mask: "+58(###)###-####",
                cc: "VE",
                cd: "Venezuela",
                desc_en: "",
                name_ru: "Венесуэла",
                desc_ru: ""
            }, {
                mask: "+1(284)###-####",
                cc: "VG",
                cd: "British Virgin Islands",
                desc_en: "",
                name_ru: "Британские Виргинские острова",
                desc_ru: ""
            }, {
                mask: "+1(340)###-####",
                cc: "VI",
                cd: "US Virgin Islands",
                desc_en: "",
                name_ru: "Американские Виргинские острова",
                desc_ru: ""
            }, {
                mask: "+84-##-####-###",
                cc: "VN",
                cd: "Vietnam",
                desc_en: "",
                name_ru: "Вьетнам",
                desc_ru: ""
            }, {
                mask: "+84(###)####-###",
                cc: "VN",
                cd: "Vietnam",
                desc_en: "",
                name_ru: "Вьетнам",
                desc_ru: ""
            }, {
                mask: "+678-##-#####",
                cc: "VU",
                cd: "Vanuatu ",
                desc_en: "mobile",
                name_ru: "Вануату ",
                desc_ru: "мобильные"
            }, {
                mask: "+678-#####",
                cc: "VU",
                cd: "Vanuatu",
                desc_en: "",
                name_ru: "Вануату",
                desc_ru: ""
            }, {
                mask: "+681-##-####",
                cc: "WF",
                cd: "Wallis and Futuna",
                desc_en: "",
                name_ru: "Уоллис и Футуна",
                desc_ru: ""
            }, {
                mask: "+685-##-####",
                cc: "WS",
                cd: "Samoa",
                desc_en: "",
                name_ru: "Самоа",
                desc_ru: ""
            }, {
                mask: "+967-###-###-###",
                cc: "YE",
                cd: "Yemen ",
                desc_en: "mobile",
                name_ru: "Йемен ",
                desc_ru: "мобильные"
            }, {
                mask: "+967-#-###-###",
                cc: "YE",
                cd: "Yemen",
                desc_en: "",
                name_ru: "Йемен",
                desc_ru: ""
            }, {
                mask: "+967-##-###-###",
                cc: "YE",
                cd: "Yemen",
                desc_en: "",
                name_ru: "Йемен",
                desc_ru: ""
            }, {
                mask: "+27-##-###-####",
                cc: "ZA",
                cd: "South Africa",
                desc_en: "",
                name_ru: "Южно-Африканская Респ.",
                desc_ru: ""
            }, {
                mask: "+260-##-###-####",
                cc: "ZM",
                cd: "Zambia",
                desc_en: "",
                name_ru: "Замбия",
                desc_ru: ""
            }, {
                mask: "+263-#-######",
                cc: "ZW",
                cd: "Zimbabwe",
                desc_en: "",
                name_ru: "Зимбабве",
                desc_ru: ""
            }, {
                mask: "+1(###)###-####",
                cc: [ "US", "CA" ],
                cd: "USA and Canada",
                desc_en: "",
                name_ru: "США и Канада",
                desc_ru: ""
            } ]
        }
    }), Inputmask;
});
/*!
* Parsley.js
* Version 2.8.0 - built Wed, Sep 13th 2017, 11:04 pm
* http://parsleyjs.org
* Guillaume Potier - <guillaume@wisembly.com>
* Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
* MIT Licensed
*/
function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var _slice=Array.prototype.slice,_slicedToArray=function(){function e(e,t){var i=[],n=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){r=!0,s=l}finally{try{!n&&o["return"]&&o["return"]()}finally{if(r)throw s}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):e.parsley=t(e.jQuery)}(this,function(e){"use strict";function t(e,t){return e.parsleyAdaptedCallback||(e.parsleyAdaptedCallback=function(){var i=Array.prototype.slice.call(arguments,0);i.unshift(this),e.apply(t||M,i)}),e.parsleyAdaptedCallback}function i(e){return 0===e.lastIndexOf(D,0)?e.substr(D.length):e}/**
   * inputevent - Alleviate browser bugs for input events
   * https://github.com/marcandre/inputevent
   * @version v0.0.3 - (built Thu, Apr 14th 2016, 5:58 pm)
   * @author Marc-Andre Lafortune <github@marc-andre.ca>
   * @license MIT
   */
function n(){var t=this,i=window||global;_extends(this,{isNativeEvent:function(e){return e.originalEvent&&e.originalEvent.isTrusted!==!1},fakeInputEvent:function(i){t.isNativeEvent(i)&&e(i.target).trigger("input")},misbehaves:function(i){t.isNativeEvent(i)&&(t.behavesOk(i),e(document).on("change.inputevent",i.data.selector,t.fakeInputEvent),t.fakeInputEvent(i))},behavesOk:function(i){t.isNativeEvent(i)&&e(document).off("input.inputevent",i.data.selector,t.behavesOk).off("change.inputevent",i.data.selector,t.misbehaves)},install:function(){if(!i.inputEventPatched){i.inputEventPatched="0.0.3";for(var n=["select",'input[type="checkbox"]','input[type="radio"]','input[type="file"]'],r=0;r<n.length;r++){var s=n[r];e(document).on("input.inputevent",s,{selector:s},t.behavesOk).on("change.inputevent",s,{selector:s},t.misbehaves)}}},uninstall:function(){delete i.inputEventPatched,e(document).off(".inputevent")}})}var r=1,s={},a={attr:function(e,t,i){var n,r,s,a=new RegExp("^"+t,"i");if("undefined"==typeof i)i={};else for(n in i)i.hasOwnProperty(n)&&delete i[n];if(!e)return i;for(s=e.attributes,n=s.length;n--;)r=s[n],r&&r.specified&&a.test(r.name)&&(i[this.camelize(r.name.slice(t.length))]=this.deserializeValue(r.value));return i},checkAttr:function(e,t,i){return e.hasAttribute(t+i)},setAttr:function(e,t,i,n){e.setAttribute(this.dasherize(t+i),String(n))},getType:function(e){return e.getAttribute("type")||"text"},generateID:function(){return""+r++},deserializeValue:function(e){var t;try{return e?"true"==e||"false"!=e&&("null"==e?null:isNaN(t=Number(e))?/^[\[\{]/.test(e)?JSON.parse(e):e:t):e}catch(i){return e}},camelize:function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},dasherize:function(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},warn:function(){var e;window.console&&"function"==typeof window.console.warn&&(e=window.console).warn.apply(e,arguments)},warnOnce:function(e){s[e]||(s[e]=!0,this.warn.apply(this,arguments))},_resetWarnings:function(){s={}},trimString:function(e){return e.replace(/^\s+|\s+$/g,"")},parse:{date:function S(e){var t=e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);if(!t)return null;var i=t.map(function(e){return parseInt(e,10)}),n=_slicedToArray(i,4),r=(n[0],n[1]),s=n[2],a=n[3],S=new Date(r,s-1,a);return S.getFullYear()!==r||S.getMonth()+1!==s||S.getDate()!==a?null:S},string:function(e){return e},integer:function(e){return isNaN(e)?null:parseInt(e,10)},number:function(e){if(isNaN(e))throw null;return parseFloat(e)},"boolean":function(e){return!/^\s*false\s*$/i.test(e)},object:function(e){return a.deserializeValue(e)},regexp:function(e){var t="";return/^\/.*\/(?:[gimy]*)$/.test(e)?(t=e.replace(/.*\/([gimy]*)$/,"$1"),e=e.replace(new RegExp("^/(.*?)/"+t+"$"),"$1")):e="^"+e+"$",new RegExp(e,t)}},parseRequirement:function(e,t){var i=this.parse[e||"string"];if(!i)throw'Unknown requirement specification: "'+e+'"';var n=i(t);if(null===n)throw"Requirement is not a "+e+': "'+t+'"';return n},namespaceEvents:function(t,i){return t=this.trimString(t||"").split(/\s+/),t[0]?e.map(t,function(e){return e+"."+i}).join(" "):""},difference:function(t,i){var n=[];return e.each(t,function(e,t){i.indexOf(t)==-1&&n.push(t)}),n},all:function(t){return e.when.apply(e,_toConsumableArray(t).concat([42,42]))},objectCreate:Object.create||function(){var e=function(){};return function(t){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof t)throw TypeError("Argument must be an object");e.prototype=t;var i=new e;return e.prototype=null,i}}(),_SubmitSelector:'input[type="submit"], button:submit'},o={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,triggerAfterFailure:"input",errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(e){},errorsContainer:function(e){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},l=function(){this.__id__=a.generateID()};l.prototype={asyncSupport:!0,_pipeAccordingToValidationResult:function(){var t=this,i=function(){var i=e.Deferred();return!0!==t.validationResult&&i.reject(),i.resolve().promise()};return[i,i]},actualizeOptions:function(){return a.attr(this.element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this},_resetOptions:function(e){this.domOptions=a.objectCreate(this.parent.options),this.options=a.objectCreate(this.domOptions);for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t]);this.actualizeOptions()},_listeners:null,on:function(e,t){this._listeners=this._listeners||{};var i=this._listeners[e]=this._listeners[e]||[];return i.push(t),this},subscribe:function(t,i){e.listenTo(this,t.toLowerCase(),i)},off:function(e,t){var i=this._listeners&&this._listeners[e];if(i)if(t)for(var n=i.length;n--;)i[n]===t&&i.splice(n,1);else delete this._listeners[e];return this},unsubscribe:function(t,i){e.unsubscribeTo(this,t.toLowerCase())},trigger:function(e,t,i){t=t||this;var n,r=this._listeners&&this._listeners[e];if(r)for(var s=r.length;s--;)if(n=r[s].call(t,t,i),n===!1)return n;return!this.parent||this.parent.trigger(e,t,i)},asyncIsValid:function(e,t){return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),this.whenValid({group:e,force:t})},_findRelated:function(){return this.options.multiple?e(this.parent.element.querySelectorAll("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')):this.$element}};var u=function(e,t){var i=e.match(/^\s*\[(.*)\]\s*$/);if(!i)throw'Requirement is not an array: "'+e+'"';var n=i[1].split(",").map(a.trimString);if(n.length!==t)throw"Requirement has "+n.length+" values when "+t+" are needed";return n},d=function(e,t,i){var n=null,r={};for(var s in e)if(s){var o=i(s);"string"==typeof o&&(o=a.parseRequirement(e[s],o)),r[s]=o}else n=a.parseRequirement(e[s],t);return[n,r]},h=function(t){e.extend(!0,this,t)};h.prototype={validate:function(e,t){if(this.fn)return arguments.length>3&&(t=[].slice.call(arguments,1,-1)),this.fn(e,t);if(Array.isArray(e)){if(!this.validateMultiple)throw"Validator `"+this.name+"` does not handle multiple values";return this.validateMultiple.apply(this,arguments)}var i=arguments[arguments.length-1];if(this.validateDate&&i._isDateInput())return arguments[0]=a.parse.date(arguments[0]),null!==arguments[0]&&this.validateDate.apply(this,arguments);if(this.validateNumber)return!isNaN(e)&&(arguments[0]=parseFloat(arguments[0]),this.validateNumber.apply(this,arguments));if(this.validateString)return this.validateString.apply(this,arguments);throw"Validator `"+this.name+"` only handles multiple values"},parseRequirements:function(t,i){if("string"!=typeof t)return Array.isArray(t)?t:[t];var n=this.requirementType;if(Array.isArray(n)){for(var r=u(t,n.length),s=0;s<r.length;s++)r[s]=a.parseRequirement(n[s],r[s]);return r}return e.isPlainObject(n)?d(n,t,i):[a.parseRequirement(n,t)]},requirementType:"string",priority:2};var p=function(e,t){this.__class__="ValidatorRegistry",this.locale="en",this.init(e||{},t||{})},c={email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,number:/^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,integer:/^-?\d+$/,digits:/^\d+$/,alphanum:/^\w+$/i,date:{test:function(e){return null!==a.parse.date(e)}},url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i")};c.range=c.number;var f=function(e){var t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},m=function(e,t){return t.map(a.parse[e])},g=function(e,t){return function(i){for(var n=arguments.length,r=Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.pop(),t.apply(void 0,[i].concat(_toConsumableArray(m(e,r))))}},v=function(e){return{validateDate:g("date",e),validateNumber:g("number",e),requirementType:e.length<=2?"string":["string","string"],priority:30}};p.prototype={init:function(e,t){this.catalog=t,this.validators=_extends({},this.validators);for(var i in e)this.addValidator(i,e[i].fn,e[i].priority);window.Parsley.trigger("parsley:validator:init")},setLocale:function(e){if("undefined"==typeof this.catalog[e])throw new Error(e+" is not available in the catalog");return this.locale=e,this},addCatalog:function(e,t,i){return"object"==typeof t&&(this.catalog[e]=t),!0===i?this.setLocale(e):this},addMessage:function(e,t,i){return"undefined"==typeof this.catalog[e]&&(this.catalog[e]={}),this.catalog[e][t]=i,this},addMessages:function(e,t){for(var i in t)this.addMessage(e,i,t[i]);return this},addValidator:function(e,t,i){if(this.validators[e])a.warn('Validator "'+e+'" is already defined.');else if(o.hasOwnProperty(e))return void a.warn('"'+e+'" is a restricted keyword and is not a valid validator name.');return this._setValidator.apply(this,arguments)},hasValidator:function(e){return!!this.validators[e]},updateValidator:function(e,t,i){return this.validators[e]?this._setValidator.apply(this,arguments):(a.warn('Validator "'+e+'" is not already defined.'),this.addValidator.apply(this,arguments))},removeValidator:function(e){return this.validators[e]||a.warn('Validator "'+e+'" is not defined.'),delete this.validators[e],this},_setValidator:function(e,t,i){"object"!=typeof t&&(t={fn:t,priority:i}),t.validate||(t=new h(t)),this.validators[e]=t;for(var n in t.messages||{})this.addMessage(n,e,t.messages[n]);return this},getErrorMessage:function(e){var t;if("type"===e.name){var i=this.catalog[this.locale][e.name]||{};t=i[e.requirements]}else t=this.formatMessage(this.catalog[this.locale][e.name],e.requirements);return t||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage},formatMessage:function(e,t){if("object"==typeof t){for(var i in t)e=this.formatMessage(e,t[i]);return e}return"string"==typeof e?e.replace(/%s/i,t):""},validators:{notblank:{validateString:function(e){return/\S/.test(e)},priority:2},required:{validateMultiple:function(e){return e.length>0},validateString:function(e){return/\S/.test(e)},priority:512},type:{validateString:function(e,t){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=i.step,r=void 0===n?"any":n,s=i.base,a=void 0===s?0:s,o=c[t];if(!o)throw new Error("validator type `"+t+"` is not supported");if(!o.test(e))return!1;if("number"===t&&!/^any$/i.test(r||"")){var l=Number(e),u=Math.max(f(r),f(a));if(f(l)>u)return!1;var d=function(e){return Math.round(e*Math.pow(10,u))};if((d(l)-d(a))%d(r)!=0)return!1}return!0},requirementType:{"":"string",step:"string",base:"number"},priority:256},pattern:{validateString:function(e,t){return t.test(e)},requirementType:"regexp",priority:64},minlength:{validateString:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxlength:{validateString:function(e,t){return e.length<=t},requirementType:"integer",priority:30},length:{validateString:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},mincheck:{validateMultiple:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxcheck:{validateMultiple:function(e,t){return e.length<=t},requirementType:"integer",priority:30},check:{validateMultiple:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},min:v(function(e,t){return e>=t}),max:v(function(e,t){return e<=t}),range:v(function(e,t,i){return e>=t&&e<=i}),equalto:{validateString:function(t,i){var n=e(i);return n.length?t===n.val():t===i},priority:256}}};var y={},_=function k(e,t,i){for(var n=[],r=[],s=0;s<e.length;s++){for(var a=!1,o=0;o<t.length;o++)if(e[s].assert.name===t[o].assert.name){a=!0;break}a?r.push(e[s]):n.push(e[s])}return{kept:r,added:n,removed:i?[]:k(t,e,!0).added}};y.Form={_actualizeTriggers:function(){var e=this;this.$element.on("submit.Parsley",function(t){e.onSubmitValidate(t)}),this.$element.on("click.Parsley",a._SubmitSelector,function(t){e.onSubmitButton(t)}),!1!==this.options.uiEnabled&&this.element.setAttribute("novalidate","")},focus:function(){if(this._focusedField=null,!0===this.validationResult||"none"===this.options.focus)return null;for(var e=0;e<this.fields.length;e++){var t=this.fields[e];if(!0!==t.validationResult&&t.validationResult.length>0&&"undefined"==typeof t.options.noFocus&&(this._focusedField=t.$element,"first"===this.options.focus))break}return null===this._focusedField?null:this._focusedField.focus()},_destroyUI:function(){this.$element.off(".Parsley")}},y.Field={_reflowUI:function(){if(this._buildUI(),this._ui){var e=_(this.validationResult,this._ui.lastValidationResult);this._ui.lastValidationResult=this.validationResult,this._manageStatusClass(),this._manageErrorsMessages(e),this._actualizeTriggers(),!e.kept.length&&!e.added.length||this._failedOnce||(this._failedOnce=!0,this._actualizeTriggers())}},getErrorsMessages:function(){if(!0===this.validationResult)return[];for(var e=[],t=0;t<this.validationResult.length;t++)e.push(this.validationResult[t].errorMessage||this._getErrorMessage(this.validationResult[t].assert));return e},addError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._addError(e,{message:i,assert:n}),s&&this._errorClass()},updateError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._updateError(e,{message:i,assert:n}),s&&this._errorClass()},removeError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.updateClass,n=void 0===i||i;this._buildUI(),this._removeError(e),n&&this._manageStatusClass()},_manageStatusClass:function(){this.hasConstraints()&&this.needsValidation()&&!0===this.validationResult?this._successClass():this.validationResult.length>0?this._errorClass():this._resetClass()},_manageErrorsMessages:function(t){if("undefined"==typeof this.options.errorsMessagesDisabled){if("undefined"!=typeof this.options.errorMessage)return t.added.length||t.kept.length?(this._insertErrorWrapper(),0===this._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")),this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)):this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();for(var i=0;i<t.removed.length;i++)this._removeError(t.removed[i].assert.name);for(i=0;i<t.added.length;i++)this._addError(t.added[i].assert.name,{message:t.added[i].errorMessage,assert:t.added[i].assert});for(i=0;i<t.kept.length;i++)this._updateError(t.kept[i].assert.name,{message:t.kept[i].errorMessage,assert:t.kept[i].assert})}},_addError:function(t,i){var n=i.message,r=i.assert;this._insertErrorWrapper(),this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-"+t).html(n||this._getErrorMessage(r)))},_updateError:function(e,t){var i=t.message,n=t.assert;this._ui.$errorsWrapper.addClass("filled").find(".parsley-"+e).html(i||this._getErrorMessage(n))},_removeError:function(e){this._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+e).remove()},_getErrorMessage:function(e){var t=e.name+"Message";return"undefined"!=typeof this.options[t]?window.Parsley.formatMessage(this.options[t],e.requirements):window.Parsley.getErrorMessage(e)},_buildUI:function(){if(!this._ui&&!1!==this.options.uiEnabled){var t={};this.element.setAttribute(this.options.namespace+"id",this.__id__),t.$errorClassHandler=this._manageClassHandler(),t.errorsWrapperId="parsley-id-"+(this.options.multiple?"multiple-"+this.options.multiple:this.__id__),t.$errorsWrapper=e(this.options.errorsWrapper).attr("id",t.errorsWrapperId),t.lastValidationResult=[],t.validationInformationVisible=!1,this._ui=t}},_manageClassHandler:function(){if("string"==typeof this.options.classHandler&&e(this.options.classHandler).length)return e(this.options.classHandler);var t=this.options.classHandler;if("string"==typeof this.options.classHandler&&"function"==typeof window[this.options.classHandler]&&(t=window[this.options.classHandler]),"function"==typeof t){var i=t.call(this,this);if("undefined"!=typeof i&&i.length)return i}else{if("object"==typeof t&&t instanceof jQuery&&t.length)return t;t&&a.warn("The class handler `"+t+"` does not exist in DOM nor as a global JS function")}return this._inputHolder()},_inputHolder:function(){return this.options.multiple&&"SELECT"!==this.element.nodeName?this.$element.parent():this.$element},_insertErrorWrapper:function(){var t=this.options.errorsContainer;if(0!==this._ui.$errorsWrapper.parent().length)return this._ui.$errorsWrapper.parent();if("string"==typeof t){if(e(t).length)return e(t).append(this._ui.$errorsWrapper);"function"==typeof window[t]?t=window[t]:a.warn("The errors container `"+t+"` does not exist in DOM nor as a global JS function")}return"function"==typeof t&&(t=t.call(this,this)),"object"==typeof t&&t.length?t.append(this._ui.$errorsWrapper):this._inputHolder().after(this._ui.$errorsWrapper)},_actualizeTriggers:function(){var e,t=this,i=this._findRelated();i.off(".Parsley"),this._failedOnce?i.on(a.namespaceEvents(this.options.triggerAfterFailure,"Parsley"),function(){t._validateIfNeeded()}):(e=a.namespaceEvents(this.options.trigger,"Parsley"))&&i.on(e,function(e){t._validateIfNeeded(e)})},_validateIfNeeded:function(e){var t=this;e&&/key|input/.test(e.type)&&(!this._ui||!this._ui.validationInformationVisible)&&this.getValue().length<=this.options.validationThreshold||(this.options.debounce?(window.clearTimeout(this._debounced),this._debounced=window.setTimeout(function(){return t.validate()},this.options.debounce)):this.validate())},_resetUI:function(){this._failedOnce=!1,this._actualizeTriggers(),"undefined"!=typeof this._ui&&(this._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(),this._ui.lastValidationResult=[],this._ui.validationInformationVisible=!1)},_destroyUI:function(){this._resetUI(),"undefined"!=typeof this._ui&&this._ui.$errorsWrapper.remove(),delete this._ui},_successClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)},_errorClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)},_resetClass:function(){this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)}};var w=function(t,i,n){this.__class__="Form",this.element=t,this.$element=e(t),this.domOptions=i,this.options=n,this.parent=window.Parsley,this.fields=[],this.validationResult=null},b={pending:null,resolved:!0,rejected:!1};w.prototype={onSubmitValidate:function(e){var t=this;if(!0!==e.parsley){var i=this._submitSource||this.$element.find(a._SubmitSelector)[0];if(this._submitSource=null,this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!0),!i||null===i.getAttribute("formnovalidate")){window.Parsley._remoteCache={};var n=this.whenValidate({event:e});"resolved"===n.state()&&!1!==this._trigger("submit")||(e.stopImmediatePropagation(),e.preventDefault(),"pending"===n.state()&&n.done(function(){t._submit(i)}))}}},onSubmitButton:function(e){this._submitSource=e.currentTarget},_submit:function(t){if(!1!==this._trigger("submit")){if(t){var i=this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!1);0===i.length&&(i=e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)),i.attr({name:t.getAttribute("name"),value:t.getAttribute("value")})}this.$element.trigger(_extends(e.Event("submit"),{parsley:!0}))}},validate:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1],s=i[2];t={group:n,force:r,event:s}}return b[this.whenValidate(t).state()]},whenValidate:function(){var t,i=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=n.group,s=n.force,o=n.event;this.submitEvent=o,o&&(this.submitEvent=_extends({},o,{preventDefault:function(){a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"),i.validationResult=!1}})),this.validationResult=!0,this._trigger("validate"),this._refreshFields();var l=this._withoutReactualizingFormOptions(function(){return e.map(i.fields,function(e){return e.whenValidate({force:s,group:r})})});return(t=a.all(l).done(function(){i._trigger("success")}).fail(function(){i.validationResult=!1,i.focus(),i._trigger("error")}).always(function(){i._trigger("validated")})).pipe.apply(t,_toConsumableArray(this._pipeAccordingToValidationResult()))},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={group:n,force:r}}return b[this.whenValid(t).state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.group,r=i.force;this._refreshFields();var s=this._withoutReactualizingFormOptions(function(){return e.map(t.fields,function(e){return e.whenValid({group:n,force:r})})});return a.all(s)},refresh:function(){return this._refreshFields(),this},reset:function(){for(var e=0;e<this.fields.length;e++)this.fields[e].reset();this._trigger("reset")},destroy:function(){this._destroyUI();for(var e=0;e<this.fields.length;e++)this.fields[e].destroy();this.$element.removeData("Parsley"),this._trigger("destroy")},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){var t=this,i=this.fields;return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e,i){var n=new window.Parsley.Factory(i,{},t);if(("Field"===n.__class__||"FieldMultiple"===n.__class__)&&!0!==n.options.excluded){var r=n.__class__+"-"+n.__id__;"undefined"==typeof t.fieldsMappedById[r]&&(t.fieldsMappedById[r]=n,t.fields.push(n))}}),e.each(a.difference(i,t.fields),function(e,t){t.reset()})}),this},_withoutReactualizingFormOptions:function(e){var t=this.actualizeOptions;this.actualizeOptions=function(){return this};var i=e();return this.actualizeOptions=t,i},_trigger:function(e){return this.trigger("form:"+e)}};var F=function(e,t,i,n,r){var s=window.Parsley._validatorRegistry.validators[t],a=new h(s);n=n||e.options[t+"Priority"]||a.priority,r=!0===r,_extends(this,{validator:a,name:t,requirements:i,priority:n,isDomConstraint:r}),this._parseRequirements(e.options)},C=function(e){var t=e[0].toUpperCase();return t+e.slice(1)};F.prototype={validate:function(e,t){var i;return(i=this.validator).validate.apply(i,[e].concat(_toConsumableArray(this.requirementList),[t]))},_parseRequirements:function(e){var t=this;this.requirementList=this.validator.parseRequirements(this.requirements,function(i){return e[t.name+C(i)]})}};var E=function(t,i,n,r){this.__class__="Field",this.element=t,this.$element=e(t),"undefined"!=typeof r&&(this.parent=r),this.options=n,this.domOptions=i,this.constraints=[],this.constraintsByName={},this.validationResult=!0,this._bindConstraints()},A={pending:null,resolved:!0,rejected:!1};E.prototype={validate:function(t){arguments.length>=1&&!e.isPlainObject(t)&&(a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."),t={options:t});var i=this.whenValidate(t);if(!i)return!0;switch(i.state()){case"pending":return null;case"resolved":return!0;case"rejected":return this.validationResult}},whenValidate:function(){var e,t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=i.group;if(this.refresh(),!r||this._isInGroup(r))return this.value=this.getValue(),this._trigger("validate"),(e=this.whenValid({force:n,value:this.value,_refreshed:!0}).always(function(){t._reflowUI()}).done(function(){t._trigger("success")}).fail(function(){t._trigger("error")}).always(function(){t._trigger("validated")})).pipe.apply(e,_toConsumableArray(this._pipeAccordingToValidationResult()))},hasConstraints:function(){return 0!==this.constraints.length},needsValidation:function(e){return"undefined"==typeof e&&(e=this.getValue()),!(!e.length&&!this._isRequired()&&"undefined"==typeof this.options.validateIfEmpty)},_isInGroup:function(t){return Array.isArray(this.options.group)?-1!==e.inArray(t,this.options.group):this.options.group===t},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={force:n,value:r}}var s=this.whenValid(t);return!s||A[s.state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=void 0!==n&&n,s=i.value,o=i.group,l=i._refreshed;if(l||this.refresh(),!o||this._isInGroup(o)){if(this.validationResult=!0,!this.hasConstraints())return e.when();if("undefined"!=typeof s&&null!==s||(s=this.getValue()),!this.needsValidation(s)&&!0!==r)return e.when();var u=this._getGroupedConstraints(),d=[];return e.each(u,function(i,n){var r=a.all(e.map(n,function(e){return t._validateConstraint(s,e)}));if(d.push(r),"rejected"===r.state())return!1}),a.all(d)}},_validateConstraint:function(t,i){var n=this,r=i.validate(t,this);return!1===r&&(r=e.Deferred().reject()),a.all([r]).fail(function(e){n.validationResult instanceof Array||(n.validationResult=[]),n.validationResult.push({assert:i,errorMessage:"string"==typeof e&&e})})},getValue:function(){var e;return e="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof e||null===e?"":this._handleWhitespace(e)},reset:function(){return this._resetUI(),this._trigger("reset")},destroy:function(){this._destroyUI(),this.$element.removeData("Parsley"),this.$element.removeData("FieldMultiple"),this._trigger("destroy")},refresh:function(){return this._refreshConstraints(),this},_refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()},refreshConstraints:function(){return a.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"),this.refresh()},addConstraint:function(e,t,i,n){if(window.Parsley._validatorRegistry.validators[e]){var r=new F(this,e,t,i,n);"undefined"!==this.constraintsByName[r.name]&&this.removeConstraint(r.name),this.constraints.push(r),this.constraintsByName[r.name]=r}return this},removeConstraint:function(e){for(var t=0;t<this.constraints.length;t++)if(e===this.constraints[t].name){this.constraints.splice(t,1);break}return delete this.constraintsByName[e],this},updateConstraint:function(e,t,i){return this.removeConstraint(e).addConstraint(e,t,i)},_bindConstraints:function(){for(var e=[],t={},i=0;i<this.constraints.length;i++)!1===this.constraints[i].isDomConstraint&&(e.push(this.constraints[i]),t[this.constraints[i].name]=this.constraints[i]);this.constraints=e,this.constraintsByName=t;for(var n in this.options)this.addConstraint(n,this.options[n],void 0,!0);return this._bindHtml5Constraints()},_bindHtml5Constraints:function(){null!==this.element.getAttribute("required")&&this.addConstraint("required",!0,void 0,!0),null!==this.element.getAttribute("pattern")&&this.addConstraint("pattern",this.element.getAttribute("pattern"),void 0,!0);var e=this.element.getAttribute("min"),t=this.element.getAttribute("max");null!==e&&null!==t?this.addConstraint("range",[e,t],void 0,!0):null!==e?this.addConstraint("min",e,void 0,!0):null!==t&&this.addConstraint("max",t,void 0,!0),null!==this.element.getAttribute("minlength")&&null!==this.element.getAttribute("maxlength")?this.addConstraint("length",[this.element.getAttribute("minlength"),this.element.getAttribute("maxlength")],void 0,!0):null!==this.element.getAttribute("minlength")?this.addConstraint("minlength",this.element.getAttribute("minlength"),void 0,!0):null!==this.element.getAttribute("maxlength")&&this.addConstraint("maxlength",this.element.getAttribute("maxlength"),void 0,!0);var i=a.getType(this.element);return"number"===i?this.addConstraint("type",["number",{step:this.element.getAttribute("step")||"1",base:e||this.element.getAttribute("value")}],void 0,!0):/^(email|url|range|date)$/i.test(i)?this.addConstraint("type",i,void 0,!0):this},_isRequired:function(){return"undefined"!=typeof this.constraintsByName.required&&!1!==this.constraintsByName.required.requirements},_trigger:function(e){return this.trigger("field:"+e)},_handleWhitespace:function(e){return!0===this.options.trimValue&&a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(e=e.replace(/\s{2,}/g," ")),"trim"!==this.options.whitespace&&"squish"!==this.options.whitespace&&!0!==this.options.trimValue||(e=a.trimString(e)),e},_isDateInput:function(){var e=this.constraintsByName.type;return e&&"date"===e.requirements},_getGroupedConstraints:function(){if(!1===this.options.priorityEnabled)return[this.constraints];for(var e=[],t={},i=0;i<this.constraints.length;i++){var n=this.constraints[i].priority;t[n]||e.push(t[n]=[]),t[n].push(this.constraints[i])}return e.sort(function(e,t){return t[0].priority-e[0].priority}),e}};var x=E,$=function(){this.__class__="FieldMultiple"};$.prototype={addElement:function(e){return this.$elements.push(e),this},_refreshConstraints:function(){var t;if(this.constraints=[],"SELECT"===this.element.nodeName)return this.actualizeOptions()._bindConstraints(),this;for(var i=0;i<this.$elements.length;i++)if(e("html").has(this.$elements[i]).length){t=this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints;for(var n=0;n<t.length;n++)this.addConstraint(t[n].name,t[n].requirements,t[n].priority,t[n].isDomConstraint)}else this.$elements.splice(i,1);return this},getValue:function(){if("function"==typeof this.options.value)return this.options.value(this);if("undefined"!=typeof this.options.value)return this.options.value;if("INPUT"===this.element.nodeName){var t=a.getType(this.element);if("radio"===t)return this._findRelated().filter(":checked").val()||"";if("checkbox"===t){var i=[];return this._findRelated().filter(":checked").each(function(){i.push(e(this).val())}),i}}return"SELECT"===this.element.nodeName&&null===this.$element.val()?[]:this.$element.val();
},_init:function(){return this.$elements=[this.$element],this}};var P=function(t,i,n){this.element=t,this.$element=e(t);var r=this.$element.data("Parsley");if(r)return"undefined"!=typeof n&&r.parent===window.Parsley&&(r.parent=n,r._resetOptions(r.options)),"object"==typeof i&&_extends(r.options,i),r;if(!this.$element.length)throw new Error("You must bind Parsley on an existing element.");if("undefined"!=typeof n&&"Form"!==n.__class__)throw new Error("Parent instance must be a Form instance");return this.parent=n||window.Parsley,this.init(i)};P.prototype={init:function(e){return this.__class__="Parsley",this.__version__="2.8.0",this.__id__=a.generateID(),this._resetOptions(e),"FORM"===this.element.nodeName||a.checkAttr(this.element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")},isMultiple:function(){var e=a.getType(this.element);return"radio"===e||"checkbox"===e||"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple")},handleMultiple:function(){var t,i,n=this;if(this.options.multiple=this.options.multiple||(t=this.element.getAttribute("name"))||this.element.getAttribute("id"),"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple"))return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple");if(!this.options.multiple)return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),t&&e('input[name="'+t+'"]').each(function(e,t){var i=a.getType(t);"radio"!==i&&"checkbox"!==i||t.setAttribute(n.options.namespace+"multiple",n.options.multiple)});for(var r=this._findRelated(),s=0;s<r.length;s++)if(i=e(r.get(s)).data("Parsley"),"undefined"!=typeof i){this.$element.data("FieldMultiple")||i.addElement(this.$element);break}return this.bind("parsleyField",!0),i||this.bind("parsleyFieldMultiple")},bind:function(t,i){var n;switch(t){case"parsleyForm":n=e.extend(new w(this.element,this.domOptions,this.options),new l,window.ParsleyExtend)._bindFields();break;case"parsleyField":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new l,window.ParsleyExtend);break;case"parsleyFieldMultiple":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new $,new l,window.ParsleyExtend)._init();break;default:throw new Error(t+"is not a supported Parsley type")}return this.options.multiple&&a.setAttr(this.element,this.options.namespace,"multiple",this.options.multiple),"undefined"!=typeof i?(this.$element.data("FieldMultiple",n),n):(this.$element.data("Parsley",n),n._actualizeTriggers(),n._trigger("init"),n)}};var V=e.fn.jquery.split(".");if(parseInt(V[0])<=1&&parseInt(V[1])<8)throw"The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";V.forEach||a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");var T=_extends(new l,{element:document,$element:e(document),actualizeOptions:null,_resetOptions:null,Factory:P,version:"2.8.0"});_extends(x.prototype,y.Field,l.prototype),_extends(w.prototype,y.Form,l.prototype),_extends(P.prototype,l.prototype),e.fn.parsley=e.fn.psly=function(t){if(this.length>1){var i=[];return this.each(function(){i.push(e(this).parsley(t))}),i}if(0!=this.length)return new P(this[0],t)},"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),T.options=_extends(a.objectCreate(o),window.ParsleyConfig),window.ParsleyConfig=T.options,window.Parsley=window.psly=T,T.Utils=a,window.ParsleyUtils={},e.each(a,function(e,t){"function"==typeof t&&(window.ParsleyUtils[e]=function(){return a.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."),a[e].apply(a,arguments)})});var O=window.Parsley._validatorRegistry=new p(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);window.ParsleyValidator={},e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "),function(e,t){window.Parsley[t]=function(){return O[t].apply(O,arguments)},window.ParsleyValidator[t]=function(){var e;return a.warnOnce("Accessing the method '"+t+"' through Validator is deprecated. Simply call 'window.Parsley."+t+"(...)'"),(e=window.Parsley)[t].apply(e,arguments)}}),window.Parsley.UI=y,window.ParsleyUI={removeError:function(e,t,i){var n=!0!==i;return a.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e.removeError(t,{updateClass:n})},getErrorsMessages:function(e){return a.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."),e.getErrorsMessages()}},e.each("addError updateError".split(" "),function(e,t){window.ParsleyUI[t]=function(e,i,n,r,s){var o=!0!==s;return a.warnOnce("Accessing UI is deprecated. Call '"+t+"' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e[t](i,{message:n,assert:r,updateClass:o})}}),!1!==window.ParsleyConfig.autoBind&&e(function(){e("[data-parsley-validate]").length&&e("[data-parsley-validate]").parsley()});var M=e({}),R=function(){a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")},D="parsley:";e.listen=function(e,n){var r;if(R(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(r=arguments[1],n=arguments[2]),"function"!=typeof n)throw new Error("Wrong parameters");window.Parsley.on(i(e),t(n,r))},e.listenTo=function(e,n,r){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");if("string"!=typeof n||"function"!=typeof r)throw new Error("Wrong parameters");e.on(i(n),t(r))},e.unsubscribe=function(e,t){if(R(),"string"!=typeof e||"function"!=typeof t)throw new Error("Wrong arguments");window.Parsley.off(i(e),t.parsleyAdaptedCallback)},e.unsubscribeTo=function(e,t){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");e.off(i(t))},e.unsubscribeAll=function(t){R(),window.Parsley.off(i(t)),e("form,input,textarea,select").each(function(){var n=e(this).data("Parsley");n&&n.off(i(t))})},e.emit=function(e,t){var n;R();var r=t instanceof x||t instanceof w,s=Array.prototype.slice.call(arguments,r?2:1);s.unshift(i(e)),r||(t=window.Parsley),(n=t).trigger.apply(n,_toConsumableArray(s))};e.extend(!0,T,{asyncValidators:{"default":{fn:function(e){return e.status>=200&&e.status<300},url:!1},reverse:{fn:function(e){return e.status<200||e.status>=300},url:!1}},addAsyncValidator:function(e,t,i,n){return T.asyncValidators[e]={fn:t,url:i||!1,options:n||{}},this}}),T.addValidator("remote",{requirementType:{"":"string",validator:"string",reverse:"boolean",options:"object"},validateString:function(t,i,n,r){var s,a,o={},l=n.validator||(!0===n.reverse?"reverse":"default");if("undefined"==typeof T.asyncValidators[l])throw new Error("Calling an undefined async validator: `"+l+"`");i=T.asyncValidators[l].url||i,i.indexOf("{value}")>-1?i=i.replace("{value}",encodeURIComponent(t)):o[r.element.getAttribute("name")||r.element.getAttribute("id")]=t;var u=e.extend(!0,n.options||{},T.asyncValidators[l].options);s=e.extend(!0,{},{url:i,data:o,type:"GET"},u),r.trigger("field:ajaxoptions",r,s),a=e.param(s),"undefined"==typeof T._remoteCache&&(T._remoteCache={});var d=T._remoteCache[a]=T._remoteCache[a]||e.ajax(s),h=function(){var t=T.asyncValidators[l].fn.call(r,d,i,n);return t||(t=e.Deferred().reject()),e.when(t)};return d.then(h,h)},priority:-1}),T.on("form:submit",function(){T._remoteCache={}}),l.prototype.addAsyncValidator=function(){return a.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"),T.addAsyncValidator.apply(T,arguments)},T.addMessages("en",{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),T.setLocale("en");var I=new n;I.install();var q=T;return q});
//# sourceMappingURL=parsley.min.js.map

/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
//# sourceMappingURL=jquery.form.min.js.map
