Ext.define( 'hkCRM.config.Util', {
    statics: {

        authDeny: function(msg) //접근권한 오류처리
        { 
            Ext.Msg.alert( 'Access Denied', msg, function ()
            {
                localStorage.setItem( "loginCheck", '' );
                location.href = "/Web/";
                return false;
            } );
        },

        setCookie: function ( cKey, cValue )  // name,pwd
        {
            var date = new Date(); // 오늘 날짜
            // 만료시점 : 오늘날짜+10 설정
            var validity = 1;
            date.setDate( date.getDate() + validity );
            // 쿠키 저장
            document.cookie = cKey + '=' + escape( cValue ) + ';expires=' + date.toGMTString() + ';path=/';

        },

        delCookie: function ( cKey )
        {
            // 동일한 키(name)값으로
            // 1. 만료날짜 과거로 쿠키저장
            // 2. 만료날짜 설정 않는다. 
            //    브라우저가 닫힐 때 제명이 된다    

            var date = new Date(); // 오늘 날짜 
            var validity = -10;
            date.setDate( date.getDate() + validity );
            document.cookie =
                  cKey + '=;expires=' + date.toGMTString() + ';path=/';
        },

        getCookie: function ( cKey )
        {
            var allcookies = document.cookie;
            var cookies = allcookies.split( "; " );
            for ( var i = 0; i < cookies.length; i++ )
            {
                var keyValues = cookies[i].split( "=" );
                if ( keyValues[0] == cKey )
                {
                    return unescape( keyValues[1] );
                }
            }
            return '';
        },
        
        fmStringFill: function(val, size) //문자열뒤에 자릿수 채우기
        {
        	var loop = size - val.length
        	for(var i=0;i<loop;i++){
        		val += ' ';
        	}
        	return val;
        },

        fmnumberFm: function ( val, pointYn )
        {
            var numberformat = '0,000.0';
            if ( pointYn == false ) numberformat = '0,000';
            return Ext.util.Format.number( parseFloat( val ) / 1000000, numberformat );
        },

        fmminusFm: function ( val1, val2 )
        {
            var numberformat = '0,000.0';
            return Ext.util.Format.number(( parseFloat( val1 ) - parseFloat( val2 ) ) / 1000000, numberformat );
        },

        fmpercentFm: function ( val1, val2 )
        {
            var numberformat = '0,000.0';
            if ( parseFloat( val2 ) == 0 )
            {
                return '0.0%';
            } else
            {
                return Ext.util.Format.number( parseFloat( val1 ) * 100 / parseFloat( val2 ), numberformat ) + '%';
            }
        },

        fmvspercentFm: function ( val1, val2 )
        {
            var numberformat = '0,000.0';
            return Ext.util.Format.number(( parseFloat( val1 ) - parseFloat( val2 ) ) * 100 / parseFloat( val2 ), numberformat ) + '%';
        },

        changeDec: function ( value )
        {
            return Ext.util.Format.number( parseFloat( value ), '0,000' );
        },

        changeDbl: function ( value )
        {
            return Ext.util.Format.number( parseFloat( value ), '0,000.00' );
        },

        fmpercentFm2: function ( val1, val2 )
        {
            var numberformat = '0,000.0';
            if ( parseFloat( val2 ) == 0 )
            {
                return '';
            } else
            {
                return Ext.util.Format.number( parseFloat( val1 ) * 100 / parseFloat( val2 ), numberformat );
            }

        },

        fmnumberFm2: function ( val, rateVal )
        {
            var numberformat = '0,000.0';
            if ( val == null )
            {
                return '0.0';
            } else
            {
                return Ext.util.Format.number( parseFloat( val ) / rateVal, numberformat );
            }
        },

        fmminusFm2: function ( val1, val2, rateVal )
        {
            var numberformat = '0,000.0';
            return Ext.util.Format.number(( parseFloat( val1 ) - parseFloat( val2 ) ) / rateVal, numberformat );
        },

        fmCompare: function ( val1, val2 )
        {
            var bg = parseFloat( val1 ) - parseFloat( val2 );
            if ( bg < 0 )
            {
                return 'icons_down';
            } else
            {
                return 'icons_up';
            }
        },

        fmCrny: function ( val, rateval )
        {
            return Ext.util.Format.number( parseFloat( val ) / rateval, '0,000.0' );
        },

        cbEmptyVal: function ( el )
        {
            var cbs = el.query( 'combobox' );
            for ( var i = 0; i < cbs.length; i++ )
            {
                if ( cbs[i].getValue() == cbs[i].emptyText )
                {
                    cbs[i].setValue( '' );
                }
            }
        },
        
        chkSearchPttn: function(keyword){
        	
        	var isValidFormat = function(str,re){
        		if (re.test(str)) {
                    return true; //올바른 포맷 형식
               }
               return false;
        	};
        	
        	if(keyword != ""){
    	        //패턴결정
    	        //통합검색시 검색어의 패턴('1':구역, '2':구역+배달, '3':독자번호, '4':독자명, '5':주소, '6':전화번호)
    	        if(isValidFormat(keyword, /^(\d{9})$/)){ //독자번호
    	           return  "3";
    	        }else if(isValidFormat(keyword, /^(\d{3})$/)){ //구역+배달
    	        	 return  "2";
    	        }else if(isValidFormat(keyword, /^(\d{6})$/)){ //구역
    	            return  "1";
    	        }else if(isValidFormat(keyword, /^(\d{4}|\d{7,8}|\d{10,}|(\d{2,4})-{0,1}(\d{3,4})-{0,1}(\d{4}))$/)){ //전화번호
    	            return  "6";
    	        }else if(keyword.lastIndexOf(".") != -1 && keyword.length == keyword.lastIndexOf(".") + 1){ //주소
    	            return  "5";
    	        }else{ //그 밖에는 독자명이라 간주
    	            return  "4";
    	        }
    	    }
        },

        ComboRenderer: function ( val, metaData )
        {
            var combo = metaData.column.getEditor();
            if ( val && combo && combo.store && combo.displayField )
            {
                var index = combo.store.findExact( combo.valueField, val );
                if ( index >= 0 )
                {
                    return combo.store.getAt( index ).get( combo.displayField );
                }
            }
            return val;
        },

        OnsessOut: function ( rtext )
        {
            var dataVal = Ext.JSON.decode( rtext );
            if ( dataVal.success == false )
            {
                if ( dataVal.errmsg == 'SessionOut' )
                {
                    Ext.MessageBox.alert( 'Warning', 'login Session Out!!', function () { location.href = '/Web/'; return true; } );
                    return false;
                }
            } else
            {
                return true;
            }
        }
    }
} );