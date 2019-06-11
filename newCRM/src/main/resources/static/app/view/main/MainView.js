/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  UI 기능 : App 메인 레이아웃  
 *  최초작성일 : 2019.01.29
 *  최종수정일 : 201901.29
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.main.MainView', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainView',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',  
        'hkCRM.view.main.MainViewController', 
    ],

    controller: 'mainView',    
    id:'mainView',
    layout: 'border', 
    bodyBorder: true,
    defaults: {
        bodyPadding: 0,
        collapsible: true,
        split: true
    },
    
    tbar : {
    	overflowHandler: 'menu', 
        items: [
    		 { 
    		    xtype: 'panel', 
                html: '<img src=\"resources/images/hm_logo_local.gif\" style=\"width:150;height:34px;\"/>',
    		},
    		  '->', 
    		  { 
    			xtype: 'button',
    	        text: loginNm,
    			}, 
    		 '-', 
    		 {
      	       xtype: 'button',
      			iconCls: 'fa fa-file-pdf-o',  
      			text: '매뉴얼' 
      	   },
    		 {
    	       xtype: 'button',
    			iconCls: 'x-fa fa-sign-out',
    			text: '로그아웃',
    	   }
       ]
    },
    
    items: [
    	{
            title: 'Menu',
            glyph: 'f044@FontAwesome', 
            region: 'west',
            minWidth: 120,
            layout: {
            	type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            items: [
            	{ xtype: 'button', text: '민원종합화면', handler:'goUrl'},
//            	{ xtype: 'button', text: '지동이체'},

            	{ 
            		xtype: 'button', 
            		text: '독자관리',
            		menu: 
        			[
        				{
	                		xtype: 'button', 
	                		text: '일반독자',
	                        listeners: {
	                            click: {	                               
	                                fn: 'menuClick',
	                                args: ['slrdr1100', '일반독자']
	                            }
	                        }        				
        				},
                    	{ 
                    		xtype: 'button', 
                    		text: '대학생독자',
                            listeners: {
                               click: {
                                  
                                   fn: 'menuClick',
                                   args: ['slrdr2400', '대학생독자']
                               }
                           }
                    	},
                    	{ 
                    		xtype: 'button', 
                    		text: '이사독자관리',
                            listeners: {
                               click: {
                                  
                                   fn: 'menuClick',
                                   args: ['slrdr1300', '이사독자관리']
                               }
                           }
                    	},
                    	{ 
                    		xtype: 'button', 
                    		text: '휴독관리',
                            listeners: {
                               click: {
                                  
                                   fn: 'menuClick',
                                   args: ['slrdr1500', '휴독관리']
                               }
                           }
                    	},
                    	{ 
                    		xtype: 'button', 
                    		text: '중지독자관리',
                            listeners: {
                               click: {
                                  
                                   fn: 'menuClick',
                                   args: ['slrdr1600', '중지독자관리']
                               }
                           }
                    	},
                    	{ 
                    		xtype: 'button', 
                    		text: '민원관리',
                            listeners: {
                               click: {
                                  
                                   fn: 'menuClick',
                                   args: ['slrdr1700', '민원관리']
                               }
                           }
                    	}

        			]
            	},
            	
            	{ 
            		xtype: 'button', 
            		text: '수금관리',
            		menu:
            		{
            			xtype: 'menu', 
                		items: 
            			[
            				{
                			xtype: 'menuitem', 
                    		text: '지로관리',
                    		menu: 
                    		{
                    			xtype: 'menu',
                    			items:
                    			[
                    				{
            	                		xtype: 'menuitem', 
            	                		text: '지로EDI',
            	                        listeners: {
            	                            click: { 	                               
            	                                fn: 'menuClick',
            	                                args: ['ssamt1000', '지로EDI']
            	                            }
            	                        }        				
                    				},
                                	{ 
                                		xtype: 'menuitem', 
                                		text: '지로발행(일괄)',
                                        listeners: {
                                           click: {
                                              
                                               fn: 'menuClick',
                                               args: ['slamt1700', '지로발행(일괄)']
                                           }
                                       }
                                	},
                                	{ 
                                		xtype: 'menuitem', 
                                		text: '지로발행(낱장)',
                                        listeners: {
                                           click: {
                                              
                                               fn: 'menuClick',
                                               args: ['slamt2000', '지로발행(낱장)']
                                           }
                                       }
                                	}                    				
                    			]
            				}
            			},
            			
        				{
                			xtype: 'menuitem', 
                    		text: '자동이체',
                    		menu: 
                    		{
                    			xtype: 'menu',
                    			items:
                    			[
                    				{
            	                		xtype: 'menuitem', 
            	                		text: '자동이체신청',
            	                        listeners: {
            	                            click: { 	                               
            	                                fn: 'menuClick',
            	                                args: ['ssamt1300', '자동이체신청']
            	                            }
            	                        }        				
                    				},
                                	{ 
                                		xtype: 'menuitem', 
                                		text: '신청작업관리',
                                        listeners: {
                                           click: {
                                              
                                               fn: 'menuClick',
                                               args: ['ssamt1400', '신청작업관리']
                                           }
                                       }
                                	},
                                	{ 
                                		xtype: 'menuitem', 
                                		text: '승인오류목록',
                                        listeners: {
                                           click: {
                                              
                                               fn: 'menuClick',
                                               args: ['ssamt3000', '승인오류목록']
                                           }
                                       }
                                	},
                                	{ 
                                		xtype: 'menuitem', 
                                		text: '청구관리',
                                        listeners: {
                                           click: {
                                              
                                               fn: 'menuClick',
                                               args: ['ssamt1600', '청구관리']
                                           }
                                       }
                                	} 
                    			]
            				}
            			},
            			
        				{
                			xtype: 'menuitem', 
                    		text: '휴대폰자동이체',
                    		menu: 
                    		{
                    			xtype: 'menu',
                    			items:
                    			[
                    				{
            	                		xtype: 'menuitem', 
            	                		text: '휴대폰자동이체',
            	                        listeners: {
            	                            click: { 	                               
            	                                fn: 'menuClick',
            	                                args: ['ssamt3800', '휴대폰자동이체']
            	                            }
            	                        }        				
                    				}
                    			]
            				}
            			},
            			
        				{
                			xtype: 'menuitem', 
                    		text: '카드자동이체',
                    		menu: 
                    		{
                    			xtype: 'menu',
                    			items:
                    			[
                    				{
            	                		xtype: 'menuitem', 
            	                		text: '카드청구(기존)',
            	                        listeners: {
            	                            click: { 	                               
            	                                fn: 'menuClick',
            	                                args: ['ssamt2800', '카드청구(기존)']
            	                            }
            	                        }        				
                    				},
                    				
                    				{
            	                		xtype: 'menuitem', 
            	                		text: '카드청구(신규)',
            	                        listeners: {
            	                            click: { 	                               
            	                                fn: 'menuClick',
            	                                args: ['ssamt4300', '카드청구(신규)']
            	                            }
            	                        }        				
                    				}

                    			]
            				}
            			},
            			
        				{
                			xtype: 'menuitem', 
                    		text: '독자환불관리',
                    		menu: 
                    		{
                    			xtype: 'menu',
                    			items:
                    			[
                    				{
            	                		xtype: 'menuitem', 
            	                		text: '독자환불관리',
            	                        listeners: {
            	                            click: { 	                               
            	                                fn: 'menuClick',
            	                                args: ['ssamt3200', '독자환불관리']
            	                            }
            	                        }        				
                    				}
                    			]
            				}
            			},

        				{
                			xtype: 'menuitem', 
                    		text: '지국이체',
                    		menu: 
                    		{
                    			xtype: 'menu',
                    			items:
                    			[
                    				{
            	                		xtype: 'menuitem', 
            	                		text: '지국송금이체',
            	                        listeners: {
            	                            click: { 	                               
            	                                fn: 'menuClick',
            	                                args: ['ssamt2600', '지국송금이체']
            	                            }
            	                        }        				
                    				}
                    			]
            				}
            			}
            			
            			
//                    	{ 
//                    		xtype: 'button', 
//                    		text: '관리자',
//                            listeners: {
//                               click: {
//                                  
//                                   fn: 'menuClick',
//                                   args: ['AdmCode', '공통코드']
//                               }
//                           }
//                    	},            			
            			
            			
            			
            			
            		]
            	}
            	
            	


            	

            },
            
            
        	{ 
        		xtype: 'button', 
        		text: '시스템관리',
        		menu: 
    			[
//    				{
//                		xtype: 'button', 
//                		text: '공통코드',
//                        listeners: {
//                            click: {
//                               
//                                fn: 'menuClick',
//                                args: ['ssadm1000', '공통코드']
//                            }
//                        }        				
//    				}

    			]
        	}	
            	
            ]
        },
        {
            header: false,
            itemId: 'content',
            xtype: 'tabpanel',
            bodyPadding: 0,
            region: 'center',
            defaults: { 
                split: true 
            }
        }
   ],
    
    listeners: {
    	//beforerender  : 'beforerender',
    	//beforeactivate:  function(){
    	//	loadMask(this,true,'Loading ...');
    	//},
    	//activate: function(){ 
    		//loadMask(this,false,null);
    	//}
     }
});