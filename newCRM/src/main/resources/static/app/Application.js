/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('hkCRM.Application', {
    extend: 'Ext.app.Application',

    name: 'hkCRM',

    stores: [
    	 
    ], 
    
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () { 
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    
    launch: function ()
    {
        
        var loginInfor; 
        loginInfor = sessionStorage.getItem( 'loginCheck' );           
        
        if (loginInfor != null && loginInfor != ''){ //로그인 되어, 사용자정보를 정상적으로 세션스토리지에 저장한 경우
            var obj = JSON.parse( loginInfor );
            loginID = obj.ov_id;
            loginNm = obj.incmgpers;
            sessionkey = obj.sessionkey;
            hkCRM.config.Config.setEmpNo( obj.emp_no );
            hkCRM.config.Config.setHdptCd( obj.hdptcd );
            hkCRM.config.Config.setDeptNm( obj.deptnm );
            hkCRM.config.Config.setEmail( obj.email );  
        } 
       
        if (loginInfor == null || loginInfor == '')
        {
            this.setMainView('hkCRM.view.login.Login');
 
        } else
        {
        	if(tmFull == 'N')  this.setMainView('hkCRM.view.main.MainView');
        	if(tmFull == 'Y')  this.setMainView('hkCRM.view.main.Main');

        }


    }
});

Ext.Ajax.timeout = 9000000;
Ext.override(Ext.data.proxy.Ajax, { timeout: 9000000 }); 

var Mask;
function loadMask(el,flag,msg){
Mask= new Ext.LoadMask({
	msg: msg,
	target: el
});  
	if(flag) { 
		 Mask.show();
	}else{ 
		var task = new Ext.util.DelayedTask( function ()
                {
                    Mask.hide(); 
                } );
                task.delay( 0 ); 
	} 
}

/*Ext.define('overrides.form.Panel', { //form.getValues() 오버라이드 - 전송포맷 체크, submitFormat 추가
    override: 'Ext.form.Panel',
  테스트 git 변경

    getValues: function (enabled, all) {
        var fields = this.getFields(),
            values = {},
            isArray = Ext.isArray,
            field, value, addValue, bucket, name, ln, i;
 
        // Function which you give a field and a name, and it will add it into the values 
        // object accordingly 
        addValue = function(field, name) {
            if (!all && (!name || name === 'null') || field.isFile) {
                return;
            }


            if (field.isCheckbox || field.isDateField) {
                value = field.getSubmitValue();
            } else if(field.submitFormat) {
                value = Ext.Date.format(field.getValue(), field.submitFormat);
            } else {
                value = field.getValue();
            }
 
            if (!(enabled && field.getDisabled())) {
                // RadioField is a special case where the value returned is the fields valUE 
                // ONLY if it is checked 
                if (field.isRadio) {
                    if (field.isChecked()) {
                        values[name] = value;
                    }
                } else {
                    // Check if the value already exists 
                    bucket = values[name];
 
                    if (!Ext.isEmpty(bucket)) {
                        if (!field.isCheckbox || field.isChecked()) {
                            // if it does and it isn't an array, we need to make it into an array 
                            // so we can push more 
                            if (!isArray(bucket)) {
                                bucket = values[name] = [bucket];
                            }
 
                            // Check if it is an array 
                            if (isArray(value)) {
                                // Concat it into the other values 
                                bucket = values[name] = bucket.concat(value);
                            } else {
                                // If it isn't an array, just pushed more values 
                                bucket.push(value);
                            }
                        }
                    } else {
                        values[name] = value;
                    }
                }
            }
        };
 
        // Loop through each of the fields, and add the values for those fields. 
        for (name in fields) {
            if (fields.hasOwnProperty(name)) {
                field = fields[name];
 
                if (isArray(field)) {
                    ln = field.length;
                    for (i = 0; i < ln; i++) {
                        addValue(field[i], name);
                    }
                } else {
                    addValue(field, name);
                }
            }
        }
 
        return values;
    }
});*/
