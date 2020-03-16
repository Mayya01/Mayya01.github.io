!function($){"use strict";var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(a){if(null===a)return"null";var b,c,d,e,f=$.type(a);if("undefined"===f)return void 0;if("number"===f||"boolean"===f)return String(a);if("string"===f)return $.quoteString(a);if("function"==typeof a.toJSON)return $.toJSON(a.toJSON());if("date"===f){var g=a.getUTCMonth()+1,h=a.getUTCDate(),i=a.getUTCFullYear(),j=a.getUTCHours(),k=a.getUTCMinutes(),l=a.getUTCSeconds(),m=a.getUTCMilliseconds();return 10>g&&(g="0"+g),10>h&&(h="0"+h),10>j&&(j="0"+j),10>k&&(k="0"+k),10>l&&(l="0"+l),100>m&&(m="0"+m),10>m&&(m="0"+m),'"'+i+"-"+g+"-"+h+"T"+j+":"+k+":"+l+"."+m+'Z"'}if(b=[],$.isArray(a)){for(c=0;c<a.length;c++)b.push($.toJSON(a[c])||"null");return"["+b.join(",")+"]"}if("object"==typeof a){for(c in a)if(hasOwn.call(a,c)){if(f=typeof c,"number"===f)d='"'+c+'"';else{if("string"!==f)continue;d=$.quoteString(c)}f=typeof a[c],"function"!==f&&"undefined"!==f&&(e=$.toJSON(a[c]),b.push(d+":"+e))}return"{"+b.join(",")+"}"}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+str+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(a){return a.match(escape)?'"'+a.replace(escape,function(a){var b=meta[a];return"string"==typeof b?b:(b=a.charCodeAt(),"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16))})+'"':'"'+a+'"'}}(jQuery);

if (typeof setCookie != 'function') {
    function setCookie(name, value, expires) {
        var date = new Date(new Date().getTime() + expires * 1000);
        document.cookie = name + "=" + value + '; expires=' + date + '; path=/';
    }
}

if (typeof getCookie != 'function') {
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
}

window['counter_callbacks'] = [];

function counter_init_callback(){
    window['counter_callbacks'].forEach(function(item, i, arr){
        item();
    });
    console.log('callbacks called');
}
function richGoa(yaCounterEvent){
    /*window['counter_callbacks'] = window['counter_callbacks'] || [];*/
    console.log('richGoa called with param: '+yaCounterEvent);
    if (typeof yaCounter == 'object') { 
        yaCounter.reachGoal(yaCounterEvent); 
        console.log('yacounter event "'+yaCounterEvent+'" called');
        } 
        else {
            window['counter_callbacks'].push(function(){yaCounter.reachGoal(yaCounterEvent);});
            console.log('yacounter event "'+yaCounterEvent+'" added to callbacks');
            }
}

function parseGetParams(in_str) { 
   var $_GET = {}; 
   var __GET = in_str.split("&");
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 


var b = document.createElement("script");
b.type = "text/javascript";
b.async = true;
b.src = "https://www.google.com/jsapi";
(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(b);

var ipl_data=undefined;
(function ($) {
	$('a[href^=mailto]').each(function(indx, elm){
        var subj = '?subject=Обращение в компанию Wiseadvice. Номер обращения '+getClientId();
        var mailto = $(elm).attr('href');
        $(elm).attr('href', mailto+subj);
    });
    
    
    
    /* Проверка на наличие clientId в кис. Раскоментить как только будет сервис */
    
     if (getCookie('cid_in_kis')== undefined && getClientId()){
        $.ajax({
            url: 'http://calltouch.wiseadvice.ru/',
            dataType: 'script',
            data: {
                type: 'search',
				cid: getClientId(),
			},
            success: function(data){
				setCookie('cid_in_kis', kis_data, 31622400);

			}
        });
     }
}(jQuery));

/* get data from ripe NOT-WORKED-YET
$(function(){
	if (client_ip && !getCookie('ipl_data[phone]')){
        var obj={};
		$.ajax({
			url: 'http://rest.db.ripe.net/search.json',
			dataType: 'jsonp',
			data: {
				'query-string': client_ip,
			},
			success: function(data){
                obj = data;
                var attr_in = obj['objects']['object'][1]['attributes']['attribute'][0];
                var provider = '';
                var address = '';
                var phone = '';
                var fax_no = '';
                for (var i in attr_in){
                    switch (attr_in[i]['name']){
                        case 'role':
                            provider = 'yes';
                        break;
                        case 'address':
                            address+=attr_in[i]['value']+' ';
                        break;
                        case 'phone':
                            phone = attr_in[i]['value'];
                        break;
                        case 'fax-no':
                            fax_no = attr_in[i]['value'];
                        break;
                    }
                }
				setCookie('ipl_data[provider]', provider, 2*60*60);
				setCookie('ipl_data[address]', address, 2*60*60);
				setCookie('ipl_data[phone]', phone, 2*60*60);
				setCookie('ipl_data[fax_no]', fax_no, 2*60*60);

			}
		});
	}	
});
*/

if (getCookie('in_url') == undefined){
	var url_str = window.location.toString();
	setCookie('in_url', url_str, 2*60*60);
}
if (getCookie('get_str') == undefined){
	var get_str = window.location.search.substring(1); 
	setCookie('get_str', get_str, 2*60*60);
}

var uid = undefined;
var gga_obj=new Object();
gga_obj.init =  true;
var tr_id = 't0';
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
var ga_tr_id = 'UA-2079109-1';
var clientId_dim_num = 1;

ga('create', ga_tr_id, 'auto');
ga('send', 'pageview');

ga(function(a){
    
    var trackers = ga.getAll();
    a = trackers[0];
    tr_id = a.get('name');
            
    if (getCookie('ipl_data[provider]')) ga(tr_id+'.set', 'dimension2', getCookie('ipl_data[provider]'));
    if (getCookie('ipl_data[address]')) ga(tr_id+'.set', 'dimension3', getCookie('ipl_data[address]'));
    if (getCookie('ipl_data[phone]')) ga(tr_id+'.set', 'dimension4', getCookie('ipl_data[phone]'));
    if (getCookie('ipl_data[fax_no]')) ga(tr_id+'.set', 'dimension5', getCookie('ipl_data[fax_no]'));
    gga_obj = {
        clientId: a.get('clientId'),
        referrer: a.get('referrer'),
        campaignName: a.get('campaignName'),
        campaignSource: a.get('campaignSource'),
        campaignMedium: a.get('campaignMedium'),
        campaignKeyword: a.get('campaignKeyword'),
        campaignId: a.get('campaignId'),
    };
    if (clientId_dim_num!=0) ga(tr_id+'.set', 'dimension'+clientId_dim_num, a.get('clientId'));
    
    /* Promocode get construction */
    
    if (getCookie('promo')!= undefined){
        uid = getCookie('promo');
    }
    var old_ga_cook = getCookie('__utmv');
    if (old_ga_cook != undefined){
        uid = old_ga_cook.substring(old_ga_cook.indexOf('id=')+3, old_ga_cook.lastIndexOf('='));
        setCookie('promo', uid, 31622400);
        ga(tr_id+'.set', 'dimension1', String(uid));
    }
    
    
    if (uid == undefined) {
        b.src = "http://yabedaga.wiseadvice.ru/?host=" + location.host;
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(b)
    } else {
       
        typeof plid == "function" && google.setOnLoadCallback(plid)
    }
    
    /* End of promocode */
    if (!getCookie('cid_in_kis') || getCookie('cid_in_kis')!='true'){

        (function (d, s, u, e, p) {
            window.ringostatConfig = {
                numbers: {
                    common: {
                        class: 'ringo-phone',
                        mask:'<a href="tel:+<t>"><nobr>8 (###) ###-##-##</nobr></a>'
                    }
                }
            };
            p=d.getElementsByTagName(s)[0],e=d.createElement(s),e.async=1,e.src=u,p.parentNode.insertBefore(e,p);
        })(document, 'script', 'https://ringostat.com/numbers/v3/ringostat.min.js');

    }
        
    if (getCookie('sid') == undefined) {
        //если нет, то генерим session id
        var sid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
                function (c) {
                var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
            });
        //записываем в куку (время жизни - до конца сессии);
        document.cookie = 'sid=' + sid;
        //передаем session id в ga
        ga(tr_id+'.set', 'dimension7', sid);
        //передаем session id в метрику
        try {
            var param_obj = {
                ip_provider: getCookie('ipl_data[provider]'),
                ip_phone: getCookie('ipl_data[phone]'),
                ip_fax_no: getCookie('ipl_data[fax_no]'),
                ip_address: getCookie('ipl_data[address]'),
                client_id: getClientId(),
                session_id: sid
            };
            yaCounter.params(param_obj);
            } catch (e){}
    };
});	
setTimeout(function(){ga(tr_id+'.send', 'event', 'New Visitor', location.pathname);}, 15000);
   


function yasend() {
    try {
        var prsend = sessionStorage.getItem("promosend");
        var yaParams = {
            promocod: String(uid),
			ip_provider: getCookie('ipl_data[provider]'),
			ip_phone: getCookie('ipl_data[phone]'),
			ip_fax_no: getCookie('ipl_data[fax_no]'),
			ip_address: getCookie('ipl_data[address]'),
			client_id: getClientId()
        };
        
		if (ab_flag) yaParams['ab_flag']=ab_flag;
        if (prsend != 'yes') {
            yaCounter.reachGoal('promo', yaParams);
            sessionStorage.setItem('promosend', 'yes');
        }
    } catch (e) {}
}

function getClientId(){
    var clid = undefined;
    var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
    var raw = (match) ? decodeURIComponent(match[1]) : null;
    if (raw)
        {
            match = raw.match(/(\d+\.\d+)$/);
        }
    var gacid = (match) ? match[1] : null;
    if (gacid)
    {
        clid=gacid;
    }else{
        
        clid=(gga_obj && 'clientId' in gga_obj)?gga_obj['clientId']:undefined;
    }
    return clid;
}

function SubmitSender2Mail2CT (in_obj, not2send){
    console.log('SubmitSender2Mail2CT called');
	var key_arr = ['direction', 'name', 'phone', 'email', 'comment', 'daxs', 'cname', 'inn'];
	for (i = 0; i < key_arr.length; i ++) { 
		if (in_obj[ key_arr[i]] == undefined){in_obj[ key_arr[i]]='';}
	}
	if (getCookie('in_url') == undefined){
			var url_str = window.location.toString();
			setCookie('in_url', url_str, 2*60*60);
		}
		else{
			var url_str = getCookie('in_url');
		}
	if (getCookie('get_str') != undefined){
		var get_arr = parseGetParams(getCookie('get_str'));
	}
    /*
    if (client_ip && !getCookie('ipl_data[phone]')){
		$.ajax({
			url: 'http://yabedaga.wabackup.webfactional.com/ip_lookup/',
			dataType: 'script',
			data: {
				ip: client_ip,
			},
			success: function(data){
				for (var key in ipl_data){
					setCookie('ipl_data['+key+']', ipl_data[key], 2*60*60);
				}
			}
		});
	}*/	
    
	var send_data = {
        autocall: in_obj['autocall'] || 'false',
		direction: in_obj['direction'],
		name: in_obj['name'],
		demoAccessPeriod: in_obj['daxs'],
		companyName: in_obj['cname'],
		phone: in_obj['phone'],
		email: in_obj['email'],
		comment: in_obj['comment'].replace(/\n/, ' ').replace(/\r/, ' '),
		promo: uid,
		inUrl: url_str,
		timestamp: Math.round(new Date().getTime() / 1000),
		clientId: getClientId(),
		referrer: (gga_obj && 'referrer' in gga_obj)?gga_obj['referrer']:'',
		campaignName: (gga_obj && 'campaignName' in gga_obj)?gga_obj['campaignName']:'',
		campaignSource: (gga_obj && 'campaignSource' in gga_obj)?gga_obj['campaignSource']:'',
		campaignMedium: (gga_obj && 'campaignMedium' in gga_obj)?gga_obj['campaignMedium']:'',
		campaignKeyword: (gga_obj && 'campaignKeyword' in gga_obj)?gga_obj['campaignKeyword']:'',
		campaignId: (gga_obj && 'campaignId' in gga_obj)?gga_obj['campaignId']:'',
        
		utmTerm: (get_arr && 'utm_term' in get_arr)?get_arr['utm_term']:'',
		utmContent: (get_arr && 'utm_content' in get_arr)?get_arr['utm_content']:'',
		utmCampaign: (get_arr && 'utm_campaign' in get_arr)?get_arr['utm_campaign']:'',
		utmSource: (get_arr && 'utm_source' in get_arr)?get_arr['utm_source']:'',
		utmMedium: (get_arr && 'utm_medium' in get_arr)?get_arr['utm_medium']:'',
		keyword: (gga_obj && 'keyword' in gga_obj)?get_arr['keyword']:(gga_obj && 'utm_term' in gga_obj)?get_arr['utm_term']:'',
        
		ip_provider: (getCookie('ipl_data[provider]'))?getCookie('ipl_data[provider]'):'',
		ip_phone: (getCookie('ipl_data[phone]'))?getCookie('ipl_data[phone]'):'',
		ip_fax_no: (getCookie('ipl_data[fax_no]'))?getCookie('ipl_data[fax_no]'):'',
		ip_address: (getCookie('ipl_data[address]'))?getCookie('ipl_data[address]'):'',
        inn: in_obj['inn']
      
	};
/*
	if (in_obj['ApiId'] != undefined){
        console.log('api.calltouch called');
	var data= {
		clientApiId: in_obj['ApiId'],
		email: in_obj['email'],
		phoneNumber: in_obj['phone'], 
		personalPhone: "true",
		fio: in_obj['name'],
		orderComment: in_obj['comment'], 
		sessionId: window.call_value
		};
	$.ajax({
		url:'http://api.calltouch.ru/calls-service/RestAPI/requests/orders/register/',
		dataType: 'jsonp',
		data: data,
		});
	}
*/
	return send_data;
}