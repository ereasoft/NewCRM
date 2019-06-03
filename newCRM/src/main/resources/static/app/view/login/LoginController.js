Ext.define( 'hkCRM.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    init: function ()
    {
        var pl = this.lookupReference( 'Login' );
        if ( hkCRM.config.Util.getCookie( 'hkCRM' ) )
        {
            var child = hkCRM.config.Util.getCookie( 'hkCRM' ).split( '^' );
            pl.down( '#user' ).setValue( child[0] );
            pl.down( '#pass' ).setValue( child[1] );
            pl.down( '#remember' ).setValue( 'Y' );

        }
       // Ext.create( "hkCRM.view.notice.MainNotice" ).show();
    },
    onLogon: function ()
    {
        var pl = this.lookupReference( 'Login' );
        var tmview = 'N' ;
        if ( pl.down( '#tmview' ).getValue() )
        {
        	tmview = 'Y'
        }  
        if ( pl.down( '#user' ).getValue() && pl.down( '#pass' ).getValue() )
        {
            if ( pl.down( '#remember' ).getValue() )
            {
                hkCRM.config.Util.setCookie( 'hkCRM', pl.down( '#user' ).getValue() + '^' + pl.down( '#pass' ).getValue() );
            } else
            {
                hkCRM.config.Util.delCookie( 'hkCRM' );
            }
            Ext.Ajax.request( {
                url: '/getLogin',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },  
                jsonData: {
                	log_id: this.lookupReference( 'Login' ).down( '#user' ).getValue(),
                	log_pwd: this.lookupReference( 'Login' ).down( '#pass' ).getValue(),
                    save_yn: this.lookupReference( 'Login' ).down( '#remember' ).getValue(),
                },
                success: function ( response, opts )
                {
                    var obj = Ext.decode( response.responseText );
                    if ( obj.status == 'true' )
                    {  
                        sessionStorage.setItem("loginCheck", response.responseText );
                        sessionStorage.setItem("loginID", obj.ov_id);
                        sessionStorage.setItem("loginNm", obj.incmgpers);
                        sessionStorage.setItem("sessionkey", obj.sessionkey); 
                        sessionStorage.setItem("tmFull", tmview); 
                        
                        var link = '/index.html' 
                        location.href = link;
                    } else
                    {
                        Ext.Msg.alert( 'Login Failed', obj.errmsg, function () { return false; } );
                    }
                },

                failure: function ( response, opts )
                {
                    Ext.Msg.alert( 'System Error', response.statusText, function () { return false; } );
                }
            } );
        }
    }
} );