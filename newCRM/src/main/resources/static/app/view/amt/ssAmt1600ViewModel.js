/*
 * File: app/view/ssAmt1600ViewModel.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('hkCRM.view.amt.ssAmt1600ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ssamt1600',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory'
    ],

    stores: {
        ssAmt1601s: {
            model: 'hkCRM.model.ssAmt1601',
            data: [
                {
                    id: 1,
                    납기일자: '6/22/2012',
                    청구상태: 'voluptas',
                    청구건수: 651,
                    청구금액: 557,
                    수납건수: 177,
                    수수료: 179,
                    생성일자: '2/16/2005',
                    송신일자: '1/5/2009',
                    수신일자: '8/3/2004'
                },
                {
                    id: 2,
                    납기일자: '8/21/2014',
                    청구상태: 'dolore',
                    청구건수: 471,
                    청구금액: 338,
                    수납건수: 114,
                    수수료: 360,
                    생성일자: '3/23/2010',
                    송신일자: '4/13/2004',
                    수신일자: '1/12/2009'
                },
                {
                    id: 3,
                    납기일자: '2/24/2002',
                    청구상태: 'quos',
                    청구건수: 377,
                    청구금액: 624,
                    수납건수: 407,
                    수수료: 329,
                    생성일자: '2/8/2011',
                    송신일자: '2/20/2009',
                    수신일자: '11/8/2003'
                },
                {
                    id: 4,
                    납기일자: '12/25/2009',
                    청구상태: 'eos',
                    청구건수: 398,
                    청구금액: 784,
                    수납건수: 123,
                    수수료: 299,
                    생성일자: '2/27/2008',
                    송신일자: '5/16/2004',
                    수신일자: '6/12/2014'
                },
                {
                    id: 5,
                    납기일자: '8/9/2009',
                    청구상태: 'nesciunt',
                    청구건수: 930,
                    청구금액: 746,
                    수납건수: 20,
                    수수료: 639,
                    생성일자: '11/19/2008',
                    송신일자: '1/12/2010',
                    수신일자: '11/5/2006'
                },
                {
                    id: 6,
                    납기일자: '5/24/2002',
                    청구상태: 'nulla',
                    청구건수: 870,
                    청구금액: 810,
                    수납건수: 39,
                    수수료: 642,
                    생성일자: '9/6/2007',
                    송신일자: '5/1/2006',
                    수신일자: '10/18/2004'
                },
                {
                    id: 7,
                    납기일자: '9/20/2013',
                    청구상태: 'qui',
                    청구건수: 733,
                    청구금액: 218,
                    수납건수: 362,
                    수수료: 666,
                    생성일자: '8/2/2001',
                    송신일자: '2/17/2001',
                    수신일자: '6/8/2005'
                },
                {
                    id: 8,
                    납기일자: '7/12/2014',
                    청구상태: 'tempore',
                    청구건수: 844,
                    청구금액: 84,
                    수납건수: 821,
                    수수료: 600,
                    생성일자: '3/4/2009',
                    송신일자: '8/21/2011',
                    수신일자: '3/17/2012'
                },
                {
                    id: 9,
                    납기일자: '11/19/2008',
                    청구상태: 'et',
                    청구건수: 218,
                    청구금액: 615,
                    수납건수: 98,
                    수수료: 959,
                    생성일자: '1/3/2006',
                    송신일자: '9/9/2013',
                    수신일자: '4/11/2010'
                },
                {
                    id: 10,
                    납기일자: '6/23/2011',
                    청구상태: 'quis',
                    청구건수: 750,
                    청구금액: 589,
                    수납건수: 55,
                    수수료: 32,
                    생성일자: '12/17/2006',
                    송신일자: '4/18/2011',
                    수신일자: '1/13/2003'
                },
                {
                    id: 11,
                    납기일자: '4/3/2001',
                    청구상태: 'et',
                    청구건수: 637,
                    청구금액: 742,
                    수납건수: 630,
                    수수료: 961,
                    생성일자: '7/2/2001',
                    송신일자: '5/19/2004',
                    수신일자: '4/23/2004'
                },
                {
                    id: 12,
                    납기일자: '6/1/2007',
                    청구상태: 'quaerat',
                    청구건수: 428,
                    청구금액: 770,
                    수납건수: 876,
                    수수료: 514,
                    생성일자: '1/21/2002',
                    송신일자: '8/28/2005',
                    수신일자: '6/19/2007'
                },
                {
                    id: 13,
                    납기일자: '2/13/2005',
                    청구상태: 'debitis',
                    청구건수: 327,
                    청구금액: 808,
                    수납건수: 884,
                    수수료: 875,
                    생성일자: '3/9/2007',
                    송신일자: '4/26/2005',
                    수신일자: '6/8/2004'
                },
                {
                    id: 14,
                    납기일자: '1/23/2008',
                    청구상태: 'sunt',
                    청구건수: 836,
                    청구금액: 749,
                    수납건수: 861,
                    수수료: 63,
                    생성일자: '10/10/2013',
                    송신일자: '12/3/2003',
                    수신일자: '5/26/2006'
                },
                {
                    id: 15,
                    납기일자: '9/20/2007',
                    청구상태: 'provident',
                    청구건수: 519,
                    청구금액: 681,
                    수납건수: 37,
                    수수료: 501,
                    생성일자: '10/23/2014',
                    송신일자: '9/9/2012',
                    수신일자: '2/1/2010'
                },
                {
                    id: 16,
                    납기일자: '8/15/2006',
                    청구상태: 'voluptatem',
                    청구건수: 412,
                    청구금액: 733,
                    수납건수: 523,
                    수수료: 78,
                    생성일자: '9/15/2005',
                    송신일자: '7/18/2012',
                    수신일자: '10/21/2001'
                },
                {
                    id: 17,
                    납기일자: '3/9/2006',
                    청구상태: 'qui',
                    청구건수: 306,
                    청구금액: 367,
                    수납건수: 32,
                    수수료: 213,
                    생성일자: '11/11/2004',
                    송신일자: '12/18/2013',
                    수신일자: '2/3/2005'
                },
                {
                    id: 18,
                    납기일자: '4/6/2012',
                    청구상태: 'facere',
                    청구건수: 472,
                    청구금액: 145,
                    수납건수: 358,
                    수수료: 939,
                    생성일자: '10/22/2005',
                    송신일자: '1/20/2007',
                    수신일자: '1/15/2003'
                },
                {
                    id: 19,
                    납기일자: '12/5/2006',
                    청구상태: 'voluptas',
                    청구건수: 448,
                    청구금액: 920,
                    수납건수: 780,
                    수수료: 491,
                    생성일자: '10/4/2002',
                    송신일자: '7/10/2008',
                    수신일자: '5/21/2013'
                },
                {
                    id: 20,
                    납기일자: '8/11/2004',
                    청구상태: 'autem',
                    청구건수: 658,
                    청구금액: 68,
                    수납건수: 575,
                    수수료: 100,
                    생성일자: '1/13/2007',
                    송신일자: '12/25/2005',
                    수신일자: '12/12/2011'
                },
                {
                    id: 21,
                    납기일자: '5/11/2011',
                    청구상태: 'sapiente',
                    청구건수: 496,
                    청구금액: 54,
                    수납건수: 455,
                    수수료: 579,
                    생성일자: '12/7/2014',
                    송신일자: '7/18/2011',
                    수신일자: '3/27/2006'
                },
                {
                    id: 22,
                    납기일자: '11/17/2001',
                    청구상태: 'harum',
                    청구건수: 835,
                    청구금액: 753,
                    수납건수: 679,
                    수수료: 113,
                    생성일자: '5/13/2007',
                    송신일자: '2/27/2009',
                    수신일자: '10/4/2001'
                },
                {
                    id: 23,
                    납기일자: '5/20/2010',
                    청구상태: 'provident',
                    청구건수: 154,
                    청구금액: 247,
                    수납건수: 949,
                    수수료: 677,
                    생성일자: '1/22/2004',
                    송신일자: '7/27/2003',
                    수신일자: '3/6/2001'
                },
                {
                    id: 24,
                    납기일자: '3/28/2007',
                    청구상태: 'nihil',
                    청구건수: 64,
                    청구금액: 980,
                    수납건수: 771,
                    수수료: 847,
                    생성일자: '9/2/2011',
                    송신일자: '8/18/2003',
                    수신일자: '4/3/2002'
                },
                {
                    id: 25,
                    납기일자: '9/4/2003',
                    청구상태: 'similique',
                    청구건수: 873,
                    청구금액: 339,
                    수납건수: 344,
                    수수료: 248,
                    생성일자: '4/7/2006',
                    송신일자: '1/24/2004',
                    수신일자: '1/18/2005'
                },
                {
                    id: 26,
                    납기일자: '1/17/2013',
                    청구상태: 'rerum',
                    청구건수: 543,
                    청구금액: 123,
                    수납건수: 347,
                    수수료: 510,
                    생성일자: '5/17/2006',
                    송신일자: '12/13/2009',
                    수신일자: '8/17/2008'
                },
                {
                    id: 27,
                    납기일자: '11/20/2006',
                    청구상태: 'non',
                    청구건수: 736,
                    청구금액: 880,
                    수납건수: 71,
                    수수료: 112,
                    생성일자: '4/7/2003',
                    송신일자: '11/1/2006',
                    수신일자: '7/5/2001'
                },
                {
                    id: 28,
                    납기일자: '3/3/2009',
                    청구상태: 'hic',
                    청구건수: 979,
                    청구금액: 84,
                    수납건수: 762,
                    수수료: 942,
                    생성일자: '9/13/2014',
                    송신일자: '12/3/2003',
                    수신일자: '7/4/2001'
                },
                {
                    id: 29,
                    납기일자: '7/26/2011',
                    청구상태: 'autem',
                    청구건수: 951,
                    청구금액: 475,
                    수납건수: 216,
                    수수료: 78,
                    생성일자: '9/16/2009',
                    송신일자: '12/9/2003',
                    수신일자: '10/7/2013'
                },
                {
                    id: 30,
                    납기일자: '4/27/2007',
                    청구상태: 'odio',
                    청구건수: 136,
                    청구금액: 736,
                    수납건수: 945,
                    수수료: 733,
                    생성일자: '8/4/2011',
                    송신일자: '1/25/2014',
                    수신일자: '5/16/2006'
                }
            ],
            proxy: {
                type: 'memory'
            }
        },
        ssAmt1602s: {
            model: 'hkCRM.model.ssAmt1602',
            data: [
                {
                    id: 1,
                    지역: 'rerum',
                    지국: 'deserunt',
                    청구건: 192,
                    청구금액: 238,
                    수납건: 483,
                    수납금액: 102,
                    수수료: 900,
                    지국송금금액: 315
                },
                {
                    id: 2,
                    지역: 'rerum',
                    지국: 'in',
                    청구건: 143,
                    청구금액: 112,
                    수납건: 691,
                    수납금액: 519,
                    수수료: 463,
                    지국송금금액: 379
                },
                {
                    id: 3,
                    지역: 'ut',
                    지국: 'nobis',
                    청구건: 55,
                    청구금액: 84,
                    수납건: 806,
                    수납금액: 872,
                    수수료: 87,
                    지국송금금액: 169
                },
                {
                    id: 4,
                    지역: 'tempore',
                    지국: 'modi',
                    청구건: 988,
                    청구금액: 395,
                    수납건: 730,
                    수납금액: 611,
                    수수료: 332,
                    지국송금금액: 885
                },
                {
                    id: 5,
                    지역: 'sit',
                    지국: 'et',
                    청구건: 673,
                    청구금액: 998,
                    수납건: 940,
                    수납금액: 898,
                    수수료: 883,
                    지국송금금액: 259
                },
                {
                    id: 6,
                    지역: 'beatae',
                    지국: 'velit',
                    청구건: 620,
                    청구금액: 118,
                    수납건: 337,
                    수납금액: 630,
                    수수료: 962,
                    지국송금금액: 709
                },
                {
                    id: 7,
                    지역: 'sit',
                    지국: 'est',
                    청구건: 111,
                    청구금액: 821,
                    수납건: 629,
                    수납금액: 725,
                    수수료: 630,
                    지국송금금액: 531
                },
                {
                    id: 8,
                    지역: 'quo',
                    지국: 'totam',
                    청구건: 678,
                    청구금액: 817,
                    수납건: 582,
                    수납금액: 798,
                    수수료: 568,
                    지국송금금액: 315
                },
                {
                    id: 9,
                    지역: 'tempore',
                    지국: 'est',
                    청구건: 989,
                    청구금액: 63,
                    수납건: 720,
                    수납금액: 567,
                    수수료: 814,
                    지국송금금액: 459
                },
                {
                    id: 10,
                    지역: 'incidunt',
                    지국: 'itaque',
                    청구건: 470,
                    청구금액: 617,
                    수납건: 297,
                    수납금액: 805,
                    수수료: 107,
                    지국송금금액: 153
                },
                {
                    id: 11,
                    지역: 'dicta',
                    지국: 'vel',
                    청구건: 321,
                    청구금액: 988,
                    수납건: 431,
                    수납금액: 172,
                    수수료: 293,
                    지국송금금액: 469
                },
                {
                    id: 12,
                    지역: 'rerum',
                    지국: 'nisi',
                    청구건: 291,
                    청구금액: 46,
                    수납건: 930,
                    수납금액: 625,
                    수수료: 626,
                    지국송금금액: 748
                },
                {
                    id: 13,
                    지역: 'sapiente',
                    지국: 'molestiae',
                    청구건: 887,
                    청구금액: 625,
                    수납건: 864,
                    수납금액: 583,
                    수수료: 291,
                    지국송금금액: 910
                },
                {
                    id: 14,
                    지역: 'rem',
                    지국: 'ad',
                    청구건: 715,
                    청구금액: 592,
                    수납건: 160,
                    수납금액: 369,
                    수수료: 522,
                    지국송금금액: 189
                },
                {
                    id: 15,
                    지역: 'aut',
                    지국: 'quos',
                    청구건: 798,
                    청구금액: 808,
                    수납건: 126,
                    수납금액: 501,
                    수수료: 822,
                    지국송금금액: 938
                },
                {
                    id: 16,
                    지역: 'eum',
                    지국: 'vel',
                    청구건: 781,
                    청구금액: 474,
                    수납건: 578,
                    수납금액: 930,
                    수수료: 481,
                    지국송금금액: 174
                },
                {
                    id: 17,
                    지역: 'excepturi',
                    지국: 'vel',
                    청구건: 296,
                    청구금액: 861,
                    수납건: 531,
                    수납금액: 668,
                    수수료: 624,
                    지국송금금액: 516
                },
                {
                    id: 18,
                    지역: 'nihil',
                    지국: 'numquam',
                    청구건: 128,
                    청구금액: 346,
                    수납건: 328,
                    수납금액: 106,
                    수수료: 564,
                    지국송금금액: 940
                },
                {
                    id: 19,
                    지역: 'quo',
                    지국: 'hic',
                    청구건: 441,
                    청구금액: 663,
                    수납건: 870,
                    수납금액: 644,
                    수수료: 843,
                    지국송금금액: 397
                },
                {
                    id: 20,
                    지역: 'vitae',
                    지국: 'mollitia',
                    청구건: 651,
                    청구금액: 594,
                    수납건: 774,
                    수납금액: 245,
                    수수료: 295,
                    지국송금금액: 375
                },
                {
                    id: 21,
                    지역: 'tempore',
                    지국: 'occaecati',
                    청구건: 57,
                    청구금액: 976,
                    수납건: 916,
                    수납금액: 245,
                    수수료: 607,
                    지국송금금액: 349
                },
                {
                    id: 22,
                    지역: 'et',
                    지국: 'illo',
                    청구건: 316,
                    청구금액: 28,
                    수납건: 797,
                    수납금액: 982,
                    수수료: 379,
                    지국송금금액: 777
                },
                {
                    id: 23,
                    지역: 'iste',
                    지국: 'error',
                    청구건: 790,
                    청구금액: 403,
                    수납건: 969,
                    수납금액: 461,
                    수수료: 372,
                    지국송금금액: 150
                },
                {
                    id: 24,
                    지역: 'voluptatum',
                    지국: 'quasi',
                    청구건: 354,
                    청구금액: 337,
                    수납건: 491,
                    수납금액: 868,
                    수수료: 2,
                    지국송금금액: 167
                },
                {
                    id: 25,
                    지역: 'eius',
                    지국: 'eos',
                    청구건: 581,
                    청구금액: 320,
                    수납건: 738,
                    수납금액: 22,
                    수수료: 299,
                    지국송금금액: 51
                },
                {
                    id: 26,
                    지역: 'placeat',
                    지국: 'nemo',
                    청구건: 909,
                    청구금액: 945,
                    수납건: 1000,
                    수납금액: 618,
                    수수료: 94,
                    지국송금금액: 238
                },
                {
                    id: 27,
                    지역: 'vitae',
                    지국: 'magnam',
                    청구건: 989,
                    청구금액: 369,
                    수납건: 74,
                    수납금액: 110,
                    수수료: 855,
                    지국송금금액: 70
                },
                {
                    id: 28,
                    지역: 'voluptate',
                    지국: 'facilis',
                    청구건: 340,
                    청구금액: 620,
                    수납건: 749,
                    수납금액: 579,
                    수수료: 891,
                    지국송금금액: 109
                },
                {
                    id: 29,
                    지역: 'sed',
                    지국: 'dolorum',
                    청구건: 87,
                    청구금액: 981,
                    수납건: 423,
                    수납금액: 449,
                    수수료: 327,
                    지국송금금액: 96
                },
                {
                    id: 30,
                    지역: 'omnis',
                    지국: 'dolores',
                    청구건: 912,
                    청구금액: 593,
                    수납건: 371,
                    수납금액: 836,
                    수수료: 344,
                    지국송금금액: 302
                }
            ],
            proxy: {
                type: 'memory'
            }
        },
        ssAmt1611s: {
            model: 'hkCRM.model.ssAmt1611',
            data: [
                {
                    id: 1,
                    독자번호: 'itaque',
                    청구건: 'et',
                    청구금액: 2,
                    수납건: 996,
                    수납금액: 200,
                    수수료: 51,
                    지국송금금액: 440
                },
                {
                    id: 2,
                    독자번호: 'nihil',
                    청구건: 'enim',
                    청구금액: 912,
                    수납건: 823,
                    수납금액: 875,
                    수수료: 648,
                    지국송금금액: 18
                },
                {
                    id: 3,
                    독자번호: 'similique',
                    청구건: 'temporibus',
                    청구금액: 933,
                    수납건: 874,
                    수납금액: 237,
                    수수료: 432,
                    지국송금금액: 420
                },
                {
                    id: 4,
                    독자번호: 'nam',
                    청구건: 'adipisci',
                    청구금액: 296,
                    수납건: 100,
                    수납금액: 989,
                    수수료: 952,
                    지국송금금액: 769
                },
                {
                    id: 5,
                    독자번호: 'et',
                    청구건: 'provident',
                    청구금액: 433,
                    수납건: 403,
                    수납금액: 604,
                    수수료: 990,
                    지국송금금액: 304
                },
                {
                    id: 6,
                    독자번호: 'nemo',
                    청구건: 'sit',
                    청구금액: 380,
                    수납건: 62,
                    수납금액: 648,
                    수수료: 887,
                    지국송금금액: 196
                },
                {
                    id: 7,
                    독자번호: 'modi',
                    청구건: 'culpa',
                    청구금액: 537,
                    수납건: 764,
                    수납금액: 602,
                    수수료: 267,
                    지국송금금액: 830
                },
                {
                    id: 8,
                    독자번호: 'non',
                    청구건: 'adipisci',
                    청구금액: 504,
                    수납건: 185,
                    수납금액: 123,
                    수수료: 891,
                    지국송금금액: 135
                },
                {
                    id: 9,
                    독자번호: 'tempora',
                    청구건: 'nobis',
                    청구금액: 266,
                    수납건: 552,
                    수납금액: 934,
                    수수료: 789,
                    지국송금금액: 888
                },
                {
                    id: 10,
                    독자번호: 'labore',
                    청구건: 'quis',
                    청구금액: 782,
                    수납건: 196,
                    수납금액: 685,
                    수수료: 621,
                    지국송금금액: 976
                },
                {
                    id: 11,
                    독자번호: 'esse',
                    청구건: 'autem',
                    청구금액: 642,
                    수납건: 898,
                    수납금액: 794,
                    수수료: 155,
                    지국송금금액: 556
                },
                {
                    id: 12,
                    독자번호: 'corrupti',
                    청구건: 'voluptatem',
                    청구금액: 686,
                    수납건: 239,
                    수납금액: 680,
                    수수료: 425,
                    지국송금금액: 656
                },
                {
                    id: 13,
                    독자번호: 'illo',
                    청구건: 'libero',
                    청구금액: 670,
                    수납건: 119,
                    수납금액: 406,
                    수수료: 354,
                    지국송금금액: 589
                },
                {
                    id: 14,
                    독자번호: 'soluta',
                    청구건: 'nostrum',
                    청구금액: 191,
                    수납건: 562,
                    수납금액: 709,
                    수수료: 258,
                    지국송금금액: 46
                },
                {
                    id: 15,
                    독자번호: 'rerum',
                    청구건: 'laudantium',
                    청구금액: 731,
                    수납건: 853,
                    수납금액: 518,
                    수수료: 873,
                    지국송금금액: 534
                },
                {
                    id: 16,
                    독자번호: 'sit',
                    청구건: 'corrupti',
                    청구금액: 857,
                    수납건: 794,
                    수납금액: 163,
                    수수료: 869,
                    지국송금금액: 390
                },
                {
                    id: 17,
                    독자번호: 'nesciunt',
                    청구건: 'consequatur',
                    청구금액: 50,
                    수납건: 919,
                    수납금액: 259,
                    수수료: 290,
                    지국송금금액: 391
                },
                {
                    id: 18,
                    독자번호: 'facilis',
                    청구건: 'neque',
                    청구금액: 764,
                    수납건: 395,
                    수납금액: 89,
                    수수료: 252,
                    지국송금금액: 726
                },
                {
                    id: 19,
                    독자번호: 'iusto',
                    청구건: 'qui',
                    청구금액: 32,
                    수납건: 512,
                    수납금액: 564,
                    수수료: 523,
                    지국송금금액: 932
                },
                {
                    id: 20,
                    독자번호: 'eos',
                    청구건: 'ad',
                    청구금액: 892,
                    수납건: 813,
                    수납금액: 698,
                    수수료: 521,
                    지국송금금액: 768
                },
                {
                    id: 21,
                    독자번호: 'distinctio',
                    청구건: 'est',
                    청구금액: 470,
                    수납건: 945,
                    수납금액: 195,
                    수수료: 113,
                    지국송금금액: 576
                },
                {
                    id: 22,
                    독자번호: 'suscipit',
                    청구건: 'exercitationem',
                    청구금액: 20,
                    수납건: 613,
                    수납금액: 427,
                    수수료: 421,
                    지국송금금액: 609
                },
                {
                    id: 23,
                    독자번호: 'vel',
                    청구건: 'corrupti',
                    청구금액: 994,
                    수납건: 2,
                    수납금액: 589,
                    수수료: 190,
                    지국송금금액: 684
                },
                {
                    id: 24,
                    독자번호: 'voluptas',
                    청구건: 'ducimus',
                    청구금액: 255,
                    수납건: 695,
                    수납금액: 255,
                    수수료: 983,
                    지국송금금액: 42
                },
                {
                    id: 25,
                    독자번호: 'nemo',
                    청구건: 'ut',
                    청구금액: 131,
                    수납건: 663,
                    수납금액: 129,
                    수수료: 522,
                    지국송금금액: 51
                },
                {
                    id: 26,
                    독자번호: 'laborum',
                    청구건: 'quam',
                    청구금액: 114,
                    수납건: 606,
                    수납금액: 571,
                    수수료: 464,
                    지국송금금액: 544
                },
                {
                    id: 27,
                    독자번호: 'amet',
                    청구건: 'molestiae',
                    청구금액: 197,
                    수납건: 482,
                    수납금액: 790,
                    수수료: 123,
                    지국송금금액: 758
                },
                {
                    id: 28,
                    독자번호: 'fuga',
                    청구건: 'et',
                    청구금액: 895,
                    수납건: 941,
                    수납금액: 220,
                    수수료: 439,
                    지국송금금액: 304
                },
                {
                    id: 29,
                    독자번호: 'illo',
                    청구건: 'porro',
                    청구금액: 442,
                    수납건: 733,
                    수납금액: 237,
                    수수료: 180,
                    지국송금금액: 608
                },
                {
                    id: 30,
                    독자번호: 'et',
                    청구건: 'dolor',
                    청구금액: 680,
                    수납건: 886,
                    수납금액: 245,
                    수수료: 371,
                    지국송금금액: 506
                }
            ],
            proxy: {
                type: 'memory'
            }
        }
    }

});