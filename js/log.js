
function dolog(pageNum, subNum){

	var s_day = new Date(); 
	var log_url=document.URL;
	var log_ref = document.referrer;

	var log_pre_url='';
	var log_frm=false; 

	if( typeof top.frames.length=='number' && top.frames.length > 0 ){
		log_frm = true;
	}; 

	if(log_frm){
		eval("try{log_pre_url = top.document.URL;}catch(_e){log_pre_url='';};");

		if( log_pre_url.indexOf('#') > 0 ) log_pre_url=log_pre_url.substring(0,log_pre_url.indexOf('#'));
		if( log_ref.indexOf('#') > 0 ) log_ref=log_ref.substring(0,log_ref.indexOf('#'));

		if( log_pre_url.charAt(log_pre_url.length-1)=='/') log_pre_url = log_pre_url.substring(0,log_pre_url.length-1);
		if( log_ref.charAt(log_ref.length-1)=='/') log_ref = log_ref.substring(0,log_ref.length-1); 
		if( log_ref == log_pre_url || log_ref == '' ){
			eval("try{log_ref=top.document.referrer;}catch(_e){log_ref='';}");
		};
	}else{
		if( log_ref.indexOf('#') > 0 ) log_ref=log_ref.substring(0,log_ref.indexOf('#'));
	}

	var log_time=s_day.getFullYear()+"-"+(s_day.getMonth()+1)+"-"+s_day.getDate()+" "+s_day.getHours()+":"+s_day.getMinutes()+":"+s_day.getSeconds(); 
	var log_zone=s_day.getTimezoneOffset()/60; 
	var log_ss=screen.width+"*"+screen.height; 
	var java_ab=(navigator.javaEnabled()==true)?"y":"n"; 
	var log_bn=navigator.appName;

	if(log_bn.substring(0,9)=="Microsoft") log_bn="MSIE";

	var log_bz=navigator.appName;  
	var log_pf=navigator.platform;  
	var log_av=navigator.appVersion;  
	var log_bv=parseFloat(log_av) ;

	if(log_bn=='MSIE'){
		var log_cpu=navigator.cpuClass;
	}else{
		var log_cpu=navigator.oscpu;
	};

	if((log_bn=="MSIE")&&(parseInt(log_bv)==2)) log_bv=3.01;

	if(log_url.indexOf('#')>0) log_url=log_url.substring(0,log_url.indexOf('#'));
	if(log_url.charAt(log_url.length-1)=='/') log_url=log_url.substring(0,log_url.length-1);

	if(log_url.indexOf('://')>0) log_url=log_url.substring(log_url.indexOf('://')+3,log_url.length);
	if(log_ref.charAt(log_ref.length-1)=='/') log_ref=log_ref.substring(0,log_ref.length-1);
	if(log_ref.indexOf('://')>0) log_ref=log_ref.substring(log_ref.indexOf('://')+3,log_ref.length);

	if( (log_ref=='undefined')||( log_ref == '' )) log_ref = 'bookmark' ;

	var log_cd=(log_bn=="MSIE")?screen.colorDepth:screen.pixelDepth;
	var log_UA = navigator.userAgent;
	var log_ua = navigator.userAgent.toLowerCase();

	if (navigator.language) {
		var log_ul = navigator.language.toLowerCase();
	} else if (navigator.userLanguage) {  
		var log_ul = navigator.userLanguage.toLowerCase();
	}

	var log_start = log_UA.indexOf('(') + 1;
	var log_end = log_UA.indexOf(')');
	var log_str = log_UA.substring(log_start, log_end);
	var log_info = log_str.split('; ');
	var log_Component = 'UNKNOWN' ;
	var log_os='Unknown';
	var log_version='Unknown';

	if (log_ua.indexOf('msie') != -1) {
	  log_Component = navigator.appName;
	  log_str = log_info[1].substring(5, log_info[1].length);
	  log_version = parseFloat(log_str);
	} else if ( log_ua.indexOf('opera') != -1 ){
	  log_Component = "Opera" ;
	} else if ((log_start = log_ua.indexOf("netscape6")) > 0) {
	  log_Component = "Netscape";
	  log_version = log_ua.substring(log_start+10, log_ua.length);
	  if ((log_start = log_version.indexOf("b")) > 0 ) {
		log_str = log_version.substring(0,log_version.indexOf("b"));
		log_version = log_str ;
	  }
	} else if ((log_start = log_ua.indexOf("netscape/7")) > 0) {
	  log_Component = "Netscape";
	  log_version = log_ua.substring(log_start+9, log_ua.length);
	  if ((log_start = log_version.indexOf("b")) > 0 ) {
		log_str = log_version.substring(0,log_version.indexOf("b"));
		log_version = log_str ;
	  }
	} else {
	  if (log_ua.indexOf("gecko") > 0) {
		log_Component = navigator.vendor;
	  } else if (log_ua.indexOf("nav") > 0) {
		log_Component = "Netscape Navigator";
	  } else {
		log_Component = navigator.appName ;;
	  }
	  log_av = log_UA ;
	}
	if (parseInt(log_version) == parseFloat(log_version)) {  log_version = log_version + ".0"; }
	log_bz = log_Component ;

	if( log_pf.indexOf('undefined') >= 0 || log_pf ==  '' ){ log_os = 'UNKNOWN' ;}
	else{ log_os = log_pf ; }

	// window os
	if( log_os.indexOf('Win32') >= 0 ){
		if( log_av.indexOf('98')>=0){ log_os = 'Windows 98' ; }
		else if( log_av.indexOf('95')>=0 ){ log_os = 'Windows 95' ; }
		else if( log_av.indexOf('Me')>=0 ){ log_os = 'Windows Me' ; }
		else if( log_av.indexOf('NT')>=0 ){ log_os = 'Windows NT' ; }
		else{ log_os = 'Windows' ; }

		if( log_av.indexOf('NT 5.0')>=0){ log_os = 'Windows 2000' ; }

		if( log_av.indexOf('NT 5.1')>=0){ 
			log_os = 'Windows XP' ; 
			if( log_av.indexOf('SV1') > 0 ){
				log_os = 'Windows XP SP2';
			}
		}
		if( log_av.indexOf('NT 5.2')>=0){ log_os = 'Windows Server 2003' ; }

		if( log_av.indexOf('NT 6.0')>=0){ log_os = 'Windows Vista';}

		if( log_av.indexOf('NT 6.1')>=0){ log_os = 'Windows 7';}

		if( log_av.indexOf('NT 6.2')>=0){ log_os = 'Windows 8';}

		if( log_av.indexOf('NT 6.3')>=0){ log_os = 'Windows 8.1';}

		if( log_av.indexOf('NT 6.4')>=0){ log_os = 'Windows 10';}
	}
	var log_pf_type = log_pf.substring(0,4);

	if( log_pf_type == 'Wind'){
		if( log_pf_type == 'Win1'){ log_os = 'Windows 3.1'; }
		else if( log_pf_type == 'Mac6' ){ log_os = 'Mac' ; }
		else if( log_pf_type == 'MacO' ){ log_os = 'Mac' ; }
		else if( log_pf_type == 'MacP' ){ log_os = 'Mac' ; }
		else if(  log_pf_type == 'Linu' ){ log_os = 'Linux' ; }
		else if(  log_pf_type == 'WebT' ){ log_os = 'WebTV' ; }
		else if(  log_pf_type =='OSF1' ){ log_os = 'Compaq Open VMS' ; }
		else if(  log_pf_type == 'HP-U' ){ log_os = 'HP Unix' ;}
		else if(  log_pf_type == 'OS/2' ){ log_os = 'OS/2' ;}
		else if( log_pf_type == 'AIX4' ){ log_os = 'AIX';}
		else if( log_pf_type == 'Free' ){ log_os = 'FreeBSD';}
		else if( log_pf_type == 'SunO' ){ log_os = 'SunO';}
		else if( log_pf_type == 'Drea' ){ log_os = 'Drea'; }
		else if( log_pf_type == 'Plan' ){ log_os = 'Plan'; }
		else{ log_os = 'UNKNOWN'; }
	}

	if( log_cpu == 'x86' ){ log_cpu = 'Intel x86';}
	else if( log_cpu == 'PPC' ){ log_cpu = 'Power PC';}
	else if( log_cpu == '68k' ){ log_cpu = 'Motorola 680x';}
	else if( log_cpu == 'Alpha' ){ log_cpu = 'Compaq Alpa';}
	else if( log_cpu == 'Arm' ){ log_cpu = 'ARM';}
	else{ log_cpu = 'UNKNOWN';}

	var str = "";

	str = "/site_logInsert.do?";

	str+="pageNum="+pageNum+"&subNum="+subNum+"&cpu="+log_cpu+"&bz="+log_bz+"&bv="+log_version+"&os="+log_os+"&ut="+escape(log_time)+"&uz="+escape(log_zone)+"&uss="+escape(log_ss)+"&usc="+escape(log_cd); 
	str+="&ja="+escape(java_ab)+"&lr="+escape(log_ref)+"&lu="+escape(log_url);

	var objImg = document.getElementById("loggin_iframe");

	if(objImg != null){
		objImg.src = str;
	}
}

function log(pageNum, subNum, rtime){
	var atime = (rtime == null || rtime == '' || rtime == 'undefined')?0:rtime;
	if(atime > 0){
		setTimeout(dolog, atime,pageNum, subNum);
	}else{
		dolog(pageNum, subNum);
	}
}