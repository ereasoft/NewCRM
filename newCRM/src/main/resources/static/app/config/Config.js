Ext.define( 'hkCRM.config.Config', {
    singleton: true,
    config: {
        tmRdrNo: '',
        tmRdrNm: '',
        tmBoCd: '',
        tmBoSeq: '',
        tmMediaCd: '' ,
        tmSelMediaCd: '' ,
        EmpNo:'',
        HdptCd:'',
        DeptNm:'',
        Email:''
    },
    constructor: function ( config )
    {
        this.initConfig( config );
    }
} );