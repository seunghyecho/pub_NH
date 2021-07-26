$(document).ready(function(){
	var $html = $("html");
	var $header = $("#header");
	var $menuAllWrap = $(".manu_all_wrap");
	var $menuAllOpen = $(".menu_all_open");
	var $menuAllClose = $(".menu_all_close");
	var fixed = "fixed";
	var active = "active";
	var $gnb_list = $(".gnb_list");
	var $gnbAllOpen = $(".gnb_all_open");
	var $gnbAllWrap = $(".gnb_all_wrap");
	var $topBtn = $(".top_btn");

	// menu all open / close
	$menuAllOpen.on("click",function(e){
		e.preventDefault();
		if($menuAllWrap.is(":visible") == true){
			$menuAllWrap.addClass(active);
		}else{
			$menuAllWrap.removeClass(active);
		}
		$html.addClass(fixed);
	});
	$menuAllClose.on("click",function(e){
		e.preventDefault();
		$menuAllWrap.removeClass(active);
		$html.removeClass(fixed);
	});
	// end

	// gnb all open / close
	$gnbAllOpen.on("click",function(e){
		e.preventDefault();
		var isActive = $(this).hasClass(active);
		if(!isActive){
			$gnbAllOpen.addClass(active);
			$gnbAllWrap.slideDown();
			$header.prepend("<div class='mask'></div>");
		}else{
			$gnbAllOpen.removeClass(active);
			$gnbAllWrap.slideUp();
			$(".mask").remove();
		}
	});
	$(document).on("click", ".mask", function(e){
		e.preventDefault();
		$gnbAllOpen.removeClass(active);
		$gnbAllWrap.slideUp();
		$(".mask").remove();
	});
	// end

	var urlStr = $(location).attr('href');
	var urlStrCut = "?";
	var urlStrCutNum = urlStr.indexOf(urlStrCut);
	var urlStrResult = urlStr.substring(urlStrCutNum,(urlStr.substring(urlStrCutNum).indexOf("#")+urlStrCutNum));
	urlStrResultLast = urlStrResult.substring(urlStrResult.lastIndexOf("?")+1);

	if(urlStrResultLast == 'sub_travel04' || urlStrResultLast == 'sub_travel05') {
		$gnb_list.owlCarousel({
			loop: false,
			items: 8,
			margin: 15,
			autoWidth:true,
			URLhashListener:true,
			startPosition: 'URLHash'
		});
	} else {
		$gnb_list.owlCarousel({
			loop: false,
			items: 8,
			margin: 15,
			autoWidth:true,
			URLhashListener:true,
			startPosition: 'URLHash'
		});
	}


	if($(".gnb_list").is(':visible')){
		$(".gnb_list").find(".item").children("a").removeClass("active");

		if(urlStrResultLast != null && urlStrResultLast != 'null' && urlStrResultLast != '' && urlStrResultLast != 'undefined') {
			var urlTarget = $(".gnb_list").find(".item[data-hash="+urlStrResultLast+"]");
			$(urlTarget).children("a").addClass("active");
		}
		
		var test01 = $(".gnb_list").find(".owl-stage");

		if(test01 != null && test01 != 'null' && test01 != '' && test01 != 'undefined') {
			$(test01).addClass("active12");
		}
	};
	// modify end 190614

	// top btn
	$topBtn.on("click",function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop:0}, '500');
		return false;
	});
	// end

});

var make_button_active = function()
{
  //Get item siblings
  var siblings =($(this).siblings());

  //Remove active class on all buttons
  siblings.each(function (index)
  {
  	$(this).removeClass('active');
  }
  )
  //Add the clicked button class
  $(this).addClass('active');
}

//Attach events to menu
$(document).ready(
	function()
	{
		$(".submenu li").click(make_button_active);
	}
	)


//	이동
function gomNhcmu(pageNum, subNum, url, type, method) {

	//	통계
	if(url.substring(0,1) == "/") {
	} else {
		try {
			mlog(pageNum, subNum);
		}catch(e){}
	}

	if(url != null && url != "" && url != 'null' && url != 'undefined'){

		//	인터파크 비즈 몰 URL 처리
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
			if(method == 'get'){
		    	document.logging_script.method = "get";
			}
	
			if(type == '_blank') {
				window.open(url);
			} else {
				location.href = url;
			}
		}

	}else{
		alert("준비중입니다.");
//		location.href = "/";	
	}
	
}

//	게시판 이동
function gomNhcmulist(pageNum, subNum, url, type, bgidx, bdidx, bridx) {

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

//특정 URL 이동
function extMoveUrl(pageNum, subNum, type, code, uid, target) {

	if(pageNum != null && pageNum != 'null' && pageNum != '') {
		//	통계
		try {
			mlog(pageNum, subNum);
		}catch(e){}
	}

	if(type == "funny") {
	    document.paramForm.action = "https://cheumsketch.multicon.co.kr/ProductDetail?servIdx=7dO03KGIlClFHpB8FxsLHQ%3d%3d&servMenuIdx=DM%2b%2b8TWPdv%2boK9wNY5ECnQ%3d%3d";
	    document.paramForm.cheum.value = "tJVMFj30UqrETBTCXUatlA==";
	    document.paramForm.target = "_blank";
	    document.paramForm.submit();
	} else if(type == "interpark") {
	    document.paramForm.action = "http://mcheum.interparkb2b.co.kr/SSO/SSO_Cheum.aspx";
	    document.paramForm.cheum.value = "inter";
	    document.paramForm.code.value = code;
	    document.paramForm.codeuid.value = uid;
	    document.paramForm.target = "_blank";
	    document.paramForm.submit();
	} else if(type == "xGolf") {
	    document.paramForm.action = "http://mcheum.xgolf.com";
	    document.paramForm.cheum.value = "xgolf";
	    document.paramForm.target = "_blank";
	    document.paramForm.submit();
	} else if(type == "multicon") {
	    document.paramForm.action = "https://cheumsketch.multicon.co.kr/ProductDetail?servIdx=7dO03KGIlClFHpB8FxsLHQ%3d%3d&servMenuIdx=DM%2b%2b8TWPdv%2boK9wNY5ECnQ%3d%3d";
	    document.paramForm.cheum.value = "tJVMFj30UqrETBTCXUatlA==";
	    document.paramForm.target = "_blank";
	    document.paramForm.submit();
	}

}


//퍼니프라이스 Url 이동
function mfunnyMoveUrl(pageNum, subNum, url) {
	if(pageNum != null && pageNum != 'null' && pageNum != '') {
		//	통계
		try {
			mlog(pageNum, subNum);
		}catch(e){}
	}

	var flagUrl_str = ['cheum.bibloz.co.kr','movieclub.savekorea.co.kr'];
	var golf_str = "golf.cheumsketch.co.kr";
	var multicon_str = "multicon";
	var xgolf_str = "xgolf";

	if(url != "" && url != null && url != "/") {

		var flag = false;

		for (var i = 0; i < flagUrl_str.length; i++) {
            if (url.indexOf(flagUrl_str[i]) != -1) {
                flag = true;
                break;
            }
        }

		if(url.indexOf(golf_str) != -1) {
			location.href = "/mobile/golfMain.do?backifurl=" + url;
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
		} else if(url.indexOf(xgolf_str) != -1){
			var golfUrl = url.split("?");
			var golfVal = golfUrl[1].split("&");

			for(var i=0; i < golfVal.length; i++) {
				var golfArray = golfVal[i].split("=");
				var input   = document.createElement('input');

				input.type	= 'hidden';
				input.name  = golfArray[0];
				input.value = golfArray[1];
				document.paramForm.appendChild(input);

			}

			document.paramForm.action = golfUrl[0];
		    document.paramForm.cheum.value = "xgolf";
		    document.paramForm.target = "_blank";
		    document.paramForm.submit();
		}else {
			window.open(url);
		}

	} else {
		alert("상품 준비 중입니다.");
	}
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


//공유하기
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