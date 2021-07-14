$(document).ready(function(){
	var $menuAllWrap = $(".manu_all_wrap");
	var $menuAllOpen = $(".menu_all_open");
	var $menuAllClose = $(".menu_all_close");
	var $topBtn = $(".top_btn");
	/*add start 190611*/
	var $quickMenu = $(".quick_menu");
	/*add end 190611*/

	// menu all open / close
	$menuAllOpen.on("click",function(e){
		e.preventDefault();
		if($menuAllWrap.is(":visible") == true){
			$menuAllWrap.hide();
		}else{
			$menuAllWrap.show();
		}
		$("#header").prepend("<div class='mask'></div>");
	});
	$menuAllClose.on("click",function(e){
		e.preventDefault();
		$menuAllWrap.hide();
		$(".mask").remove();
	});
	$(document).on("click", ".mask", function(e){
		e.preventDefault();
		$menuAllWrap.hide();
		$(".mask").remove();
	});
	// end

	/*add start 190611*/
	if(1300 > ($(window).width())){
		$quickMenu.hide();
	}else{
		$quickMenu.show();
	}
	$(window).resize(function() {
		if(1300 > ($(window).width())){
			$quickMenu.hide();
		}else{
			$quickMenu.show();
		}
	});
	/*add end 190611*/

	// top btn
	$topBtn.on("click",function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop:0}, '500');
		return false;
	});
	// end


	//	Sub Gnb Select 스크립트
	$(".depth02").on("mouseleave",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();

		$(".depth01").find("li").removeClass("on");
		$(".depth02").hide();
		
		var num = $("#menuNum").val();
		var snum = $("#smenuNum").val();

		if(num == '1'){
			$('#header').addClass("shopping_head");
		}else if(num == '2'){
			$('#header').addClass("travel_head");
		}else if(num == '3'){
			$('#header').addClass("leisure_head");
		}else if(num == '4'){
			$('#header').addClass("golf_head");
		}else if(num == '5'){
			$('#header').addClass("edu_head");
		}else if(num == '6'){
			$('#header').addClass("infant_head");
		}else if(num == '7'){
			$('#header').addClass("beauty_head");
		}else if(num == '8'){
			$('#header').addClass("pet_head");
		}else if(num == '9'){
			$('#header').addClass("life_head");
		}else if(num == '10'){
			$('#header').addClass("coupon_head");
		}else if(num == '11'){
			$('#header').addClass("customer_head");			
		}else if(num == '12'){
			$('#header').addClass("customer_head");
		}

		if(num < 10){
			$(".li0" + num).addClass("on");			
			$(".li0" + num).find(".shop_0" + num).show();
		} else {
			$(".li" + num).addClass("on");
			$(".li" + num).find(".shop_" + num).show();
		}
		$("#menu_" + num + "_" + snum).addClass("on");
	});

/*
	$("#gnb > .depth01 > li").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$(this).addClass("on");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});
*/	

	$("#gnb > .depth01 > .li01").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("shopping_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li02").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("travel_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li03").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("leisure_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li04").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("golf_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li05").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("edu_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li06").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("infant_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li07").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("beauty_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li08").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("pet_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li09").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("life_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});


	$("#gnb > .depth01 > .li10").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("coupon_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});

	$("#gnb > .depth01 > .li11").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("customer_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});

	$("#gnb > .depth01 > .li12").on("mouseenter",function(){
		$(this).siblings().removeClass("on");
		$('#header').removeClass();
		$('#header').addClass("customer_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});

	$(".hd_top_menu").on("click",function(){
		$('#header').addClass("customer_head");
		$("#gnb > .depth01 > li").children(".depth02").hide();
		$(this).children(".depth02").show();
	});

	jQuery.fn.center = function () {
	    this.css("position","absolute");
	    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
	                                                $(window).scrollTop()) + "px");
	    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
	                                                $(window).scrollLeft()) + "px");
	    return this;
	}

});

//	이동
function goNhcmu(pageNum, subNum, url, type, selNum,method, outerurl) {

	//	통계
	if(url.substring(0,1) == "/") {
	} else {
		try {
			log(pageNum, subNum);
		}catch(e){}
	}

	if(url != null && url != "" && url != 'null' && url != 'undefined'){
		if(	url.substring(0,1) == "/"){
		    document.logging_script.pageNum.value = pageNum;
		    document.logging_script.subNum.value = subNum;
		    document.logging_script.action = url;
		    document.logging_script.target = type;

		    if(url != '/golfMain.do')
		    	document.logging_script.selNum.value = selNum;

		    if(method == 'get')
		    	document.logging_script.method = "get";
		    else if(method != '' && method != 'null')
		    	document.logging_script.iframeUrl.value = method;

		    document.logging_script.submit();
		}else{
			if(outerurl != null && outerurl != '' && outerurl != 'null' && outerurl != 'undefined' && outerurl == "1"){
				
			}else{
			    if(url.indexOf("?") != -1) {
			    	url += "&";
			    } else {
			    	url += "?";
			    }
			    
			    url += "pageNum=" + pageNum + "&subNum=" + subNum;
			    
			    if(selNum != null && selNum != '' && selNum != 'null' && selNum != 'undefined') {
			    	url += "&selNum=" + selNum;
			    }
			    
			    if(method != null && method != '' && method != 'null' && method != 'undefined') {
			    	url += "&iframeUrl=" + encodeURIComponent(method);
			    }
			}


			if(url.indexOf("interparkb2b") != -1) {

				var codeuid = "";
			    var urlArray = url.indexOf("?");

			    if (urlArray >= 0) {

			    	var params = url.substring(urlArray + 1).split("&");

			    	for (var i=0; i<params.length; i++) {
			    		var keyValuePair = params[i].split("=");
			    		if(keyValuePair[0] == "guid") {
			    			codeuid = keyValuePair[1];
			    			break;
			    		}
			        }

			    }

			    if(codeuid != null && codeuid != '') {

				    document.paramForm.action = "http://mcheum.interparkb2b.co.kr/SSO/SSO_Cheum.aspx";
				    document.paramForm.cheum.value = "inter";
				    document.paramForm.code.value = "goods";
				    document.paramForm.codeuid.value = codeuid;
				    document.paramForm.target = "_blank";
				    document.paramForm.submit();

			    } else {
			    	location.href = "/";
			    }

			} else {
				if(type == '_blank') {
	
					if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || (!!window.MSInputMethodContext && !!document.documentMode)) {
						var el = document.createElement('a');
						el.href = url;
						el.target = '_blank';
						document.body.appendChild(el);
						el.click();
					} else {
						window.open(url);
					}
	
				} else {
					location.href = url;
				}
			}
		}
	}else{
		alert("준비중입니다.");
//		location.href = "/";
	}
}


//	게시판 이동
function goNhcmulist(pageNum, subNum, url, type, bgidx, bdidx, bridx) {

    if(pageNum != null && pageNum != 'null' && pageNum != '')
    	document.logging_list_script.pageNum.value = pageNum;

    if(subNum != null && subNum != 'null' && subNum != '')
    	document.logging_list_script.subNum.value = subNum;

    if(bgidx != null && bgidx != 'null' && bgidx != '')
    	document.logging_list_script.BGIDX.value = bgidx;

    if(bdidx != null && bdidx != 'null' && bdidx != '')
    	document.logging_list_script.BDIDX.value = bdidx;

    if(bridx != null && bridx != 'null' && bridx != '')
    	document.logging_list_script.BRIDX.value = bridx;

    document.logging_list_script.action = url;
    document.logging_list_script.target = type;

    document.logging_list_script.submit();

}


//	팝업
function addPopup(pageNum, subNum, url, popUrl, popName, width, height, idx, popType) {
	if(pageNum != null && pageNum != 'null' && pageNum != '') {
		//	통계
		try {
			log(pageNum, subNum);
		}catch(e){}
	}

	document.logging_script.pageNum.value = pageNum;
    document.logging_script.subNum.value = subNum;
    document.logging_script.action = url;
	document.logging_script.target = "_blank";
	document.logging_script.submit();

	if(popType == 'AKmall.com' || popName=="cheum_akmall_pop" || popUrl == "/html/shopNotice/shopCooper_pop_akmall.html") {
		popUrl = "/html/shopNotice/shopCooper_pop_akmall.html";
		width = "660";
		height = "481";
		popName = "cheum_akmall_pop";
	} else if(popType == 'INTERPARK' || popName == "cheum_interpark_pop" || popUrl == "/html/shopNotice/shopCooper_pop_interpark.html") {
		popUrl = "/html/shopNotice/shopCooper_pop_interpark.html";
		width = "660";
		height = "481";
		popName = "cheum_interpark_pop";
	} else if(popType == 'LG생활건강' || popName == "cheum_lg_pop" || popUrl == "/html/shopNotice/shopCooper_pop_lg.html") {
		popUrl = "/html/shopNotice/shopCooper_pop_lg.html";
		width = "660";
		height = "481";
		popName = "cheum_lg_pop";
	} else if(popType == 'LOTTE' || popName == "cheum_lotte_pop" || popUrl == "/html/shopNotice/shopCooper_pop_lotte.html") {
		popUrl = "/html/shopNotice/shopCooper_pop_lotte.html";
		width = "660";
		height = "481";
		popName = "cheum_lotte_pop";
	} else if(popType == 'bizMarket' || popName == "cheum_bizmarket_pop" || popUrl == "/html/shopNotice/shopCooper_pop_bizMarket.html"){
		popUrl = "/html/shopNotice/shopCooper_pop_bizMarket.html";
		width = "660";
		height = "481";
		popName = "cheum_bizmarket_pop";
	}else{
		width = "660";
		height = "481";
		popName = "cheum_default_pop";			
	}

	//	팝업 띄우기
	if(getCookie(popName) != 'Y') {		
		window.open(popUrl, popName, "toolbar=no,scrollbars=no,resizable=no,top=100,left=100,width=" + width + ",height=" + height);
	}

}

//	특정 URL 이동
function extMoveUrl(pageNum, subNum, type, code, uid) {

	if(pageNum != null && pageNum != 'null' && pageNum != '') {
		//	통계
		try {
			log(pageNum, subNum);
		}catch(e){}
	}

	if(url.match("funny") != '' && url.match("funny") != null) {
	    document.paramForm.action = "https://cheumsketch.multicon.co.kr/ProductDetail?servIdx=7dO03KGIlClFHpB8FxsLHQ%3d%3d&servMenuIdx=DM%2b%2b8TWPdv%2boK9wNY5ECnQ%3d%3d";
	    document.paramForm.cheum.value = "tJVMFj30UqrETBTCXUatlA==";
	    document.paramForm.submit();
	} else if(type == "interpark") {
	    document.paramForm.action = "http://mcheum.interparkb2b.co.kr/SSO/SSO_Cheum.aspx";
	    document.paramForm.cheum.value = "inter";
	    document.paramForm.code.value = code;
	    document.paramForm.codeuid.value = uid;
	    document.paramForm.submit();
	} else if(type == "xGolf") {
	    document.paramForm.action = "http://mcheum.xgolf.com";
	    document.paramForm.cheum.value = "xgolf";
	    document.paramForm.submit();
	} else if(type == "multicon") {
	    document.paramForm.action = "https://cheumsketch.multicon.co.kr/ProductDetail?servIdx=7dO03KGIlClFHpB8FxsLHQ%3d%3d&servMenuIdx=DM%2b%2b8TWPdv%2boK9wNY5ECnQ%3d%3d";
	    document.paramForm.cheum.value = "tJVMFj30UqrETBTCXUatlA==";
	    document.paramForm.submit();
	}

}


//	퍼니프라이스 Url 이동
function funnyMoveUrl(pageNum, subNum, url) {
	if(pageNum != null && pageNum != 'null' && pageNum != '') {
		//	통계
		try {
			log(pageNum, subNum);
		}catch(e){}
	}

	var flagUrl_str = ['cheum.bibloz.co.kr','movieclub.savekorea.co.kr'];
	var golf_str = "golf.cheumsketch.co.kr";
	var multicon_str = "multicon";

	if(url != "" && url != null && url != "/") {

		var flag = false;

		for (var i = 0; i < flagUrl_str.length; i++) {
            if (url.indexOf(flagUrl_str[i]) != -1) {
                flag = true;
                break;
            }
        }

		if(url.indexOf(golf_str) != -1) {
			location.href = "/golfMain.do?pageNum=" + pageNum + "&subNum=" + subNum + "&backifurl=" + url;
			return;
		} else if(url.indexOf(multicon_str) != -1) {
			$("#cheum").val("tJVMFj30UqrETBTCXUatlA==");
			document.funnyForm.action = "https://cheumsketch.multicon.co.kr/ProductDetail?servIdx=7dO03KGIlClFHpB8FxsLHQ%3d%3d&servMenuIdx=DM%2b%2b8TWPdv%2boK9wNY5ECnQ%3d%3d";
			document.funnyForm.target = "_blank";
			document.funnyForm.submit();
		} else if(flag) {
			document.funnyForm.action = url;
			document.funnyForm.target = "_blank";
			document.funnyForm.submit();
		} else {
			window.open(url);
		}

	} else {
		alert("상품 준비 중입니다.");
	}
}


function getCookie(cKey) {
	var allcookies = document.cookie;
	var cookies = allcookies.split("; ");
	for (var i = 0; i < cookies.length; i++) {
		var keyValues = cookies[i].split("=");
		if (keyValues[0] == cKey) {
			return unescape(keyValues[1]);
		}
	}
	return "";
}

function isNumeric(s) {
	for (i=0; i<s.length; i++) {
		c = s.substr(i, 1);
		if (c < "0" || c > "9") return false;
	}
	return true;
}

function get_rea_data(rsaPublicKeyModulus, rsaPublicKeyExponent, form){
	var rsa = new RSAKey();
    rsa.setPublic(rsaPublicKeyModulus, rsaPublicKeyExponent);

	// 입력정보를 RSA로 암호화한다.
	var form_data = serialize(form);
	var form_str = "";

	if(form_data.length > 117){
		var form_data_size = parseInt(form_data.length/117);
		var start_num = 0;
		var end_num = 0;
		
		for(;;){
			
			end_num = start_num + 117;

			if(start_num < form_data.length && form_data.length < end_num){
				end_num = form_data.length;					
			}

			if(form_str != ""){
				form_str += "," + rsa.encrypt(form_data.substring(start_num, end_num));
			}else{
				form_str = rsa.encrypt(form_data.substring(start_num, end_num));
			}

			if(form_data.length == end_num){
				break;					
			}

			start_num = end_num;

		}
	}else{
		form_str = rsa.encrypt(form_data);
	}

    return form_str;

}

function serialize(form) {

    if (!form || form.nodeName !== "FORM") {
    	return;
    }

    var i, j, q = [];

    for (i = form.elements.length - 1; i >= 0; i = i - 1) {

    	if (form.elements[i].name === "") {
    		continue;
    	}

    	switch (form.elements[i].nodeName) {
    		case 'INPUT':
    			switch (form.elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'number':
                    case 'submit':
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                    case 'checkbox':
                    case 'radio':
                            if (form.elements[i].checked) {
                                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            }

                            break;
    			}

    			break;

    		case 'file':
    			break;

            case 'TEXTAREA':
            	q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
            	break;

            case 'SELECT':
            	switch (form.elements[i].type) {
                    case 'select-one':
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                    case 'select-multiple':
                            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                    if (form.elements[i].options[j].selected) {
                                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                                    }
                            }

                            break;
                    }

                    break;

            case 'BUTTON':
            	switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                    		q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                    }

                    break;

    	}
    }

    return q.join("&");
}

//	공유하기
function sendShar(type, title, url) {

	if(type == 'kakao') {

		Kakao.init("6c9536fd7617dd50d30f9df6ad18daba")
		Kakao.Link.sendDefault({
			objectType:"feed",
			content:{
				title:title,
				imageUrl:"",
				link:{
					mobileWebUrl:url,
					webUrl:url
				}
			},
			success:function(e){},
			fail:function(e){}
		});

	} else {
		var sharUrl = "";
		var popupName = "";

		if(type == 'face') {
			sharUrl = "https://www.facebook.com/sharer.php?u="+encodeURIComponent(url)+"&t="+encodeURIComponent(title) + "&src=sp";
			popupName = "popUpFaceSend";
		} else if(type == 'naver') {
			sharUrl = 'https://share.naver.com/web/shareView.nhn?url=' + encodeURIComponent(url) + '&title=' + title;
			popupName = "popUpNaverSend";
		} else if(type == 'twiter') {
			sharUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + title;
			popupName = "popUpTwiterSend";
		} else if(type == 'kakaoS') {
			sharUrl = 'https://story.kakao.com/share?url=' + encodeURIComponent(url);
			popupName = "popUpKakaoSSend";
		}

		window.open(sharUrl,popupName,"height=300,width=480,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes");
	}

}
