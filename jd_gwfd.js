/*
活动名称：购物返豆
环境变量：jd_gwfd_interval // 自定义运行间隔时长（整数，单位毫秒），默认2000
        jd_gwfd_notify // 是否推送通知（true/false），默认不推送
        jd_gwfd_pinFilter // 账号pin过滤，多个用@进行分割

cron:15 3,19 * * *

*/

const $ = new Env('购物返豆')
const _0xb2d40a=_0x1bc5;(function(_0xe51ec5,_0x291d33){const _0x46f0e4=_0x1bc5,_0xb88295=_0xe51ec5();while(!![]){try{const _0x334d09=-parseInt(_0x46f0e4(0xc4,'Wjhz'))/0x1+-parseInt(_0x46f0e4(0x162,'Y#Hz'))/0x2+-parseInt(_0x46f0e4(0x123,'Y#Hz'))/0x3+parseInt(_0x46f0e4(0xc6,'#sGx'))/0x4*(parseInt(_0x46f0e4(0x146,'Nq%l'))/0x5)+-parseInt(_0x46f0e4(0x143,'!pI2'))/0x6+parseInt(_0x46f0e4(0xe0,')POe'))/0x7+parseInt(_0x46f0e4(0xee,'5TlR'))/0x8;if(_0x334d09===_0x291d33)break;else _0xb88295['push'](_0xb88295['shift']());}catch(_0x23bcac){_0xb88295['push'](_0xb88295['shift']());}}}(_0x24c9,0xb3cc2));const jdCookie=require('./jdCookie'),notify=require('./utils/Rebels_sendJDNotify'),common=require(_0xb2d40a(0xda,'uX%k'));let taskThreads=process['env'][_0xb2d40a(0x10c,'1#3M')]||'1';function _0x24c9(){const _0x781a1e=['h8o/W7FcPZ7cQ27dMwzbWP5WW5/dQa','zNZdKW','W7lcP8krWPi','W5BdGeaO','zsT8W7e','WOddOvFdG8kkCxajW5RdN8kFjmkXi8o5lmkNCfNdQsHpka','W7/dQ37cKCknW6a2W7WPW54eoKDWcCoDfmkCW4e','WOLcW5NcGN7cVSoE','W4VdQZdcRCk0AG','cMe9aColWOGAW6KEWQrXteNcGSoCW70+W7aEWQRcOq','geiS','idvoCmkLDaHnWR/dH8owyY0','c08mfs0','WRGdbIRcOCkXja','WRSygItcVW','kZbU','4PYMh+IfPUADLEI+MoIHH+McGowiNUs7N+MvMEITPIi','hLhdLmknWQddIG','b+IVNoAYI+wNR+I1GupINiRdVW','W7dcUmkCW5NcUZNcISk8a8kRWR8p','iCoZztm','tKxdUa0Wxq','eCoYe8k6W6ddMI4AsaG4gHRdVx/cRW','WOr0adlcKCocW6FcThhdGrNcV8oxzW','Cc3cKq','bLhdTmkHW6vvFJ7cGGhdNmkBWRBcVW','W5ZdOci','4P++WQxMNPBOG7tMRRFNORpLPydNKkOc','w8kNWPxcTa','WOjdW5xcGM7cU8ovWRW','WPL4ofb2g37cSmo4wHKBW7C','W7/cRCkqWPpcHhlcJCk3w8kTWPmnWQbRkSkmW64wjXhdRa','AmknAxW','6zw16zUB5Ps66zESWRK4WQu','5lQX6kYg5y2d772G5yY16AcT5y2W','W48GEWy','eSo4cCkw','6AoW5y2b5Aww6lEwW5u','BrZdPspdV1G','W6K3W7PloKezW55sbCoJW5NdI8khivpcRCk1','W7POWPS','zXRdRHldQfG','W4ldJK05W4T/W4G3','qu/dUaKqvmoEWQe','W7ddUN7cRCkFWQ58WQa1WQPAjZ9/h8kahSkCW4i','jCo5DrRcVI7dRwSSW4W7WPPeW5G','ASkrFNaxWP4','pNuVWQ1mWO0nWQy','WPejW6tdVcxcNSkHW6ldHmktW4zFWOpdV8kbf8kIF8krW63dJq','W4BcULBdH8kqjYWjW6NdISkuB8kWFSomiSoTufNdQwPdkSkcW75JFmkhWPRdTSonwCkhW5y','5lQ56lga8kkXSG','WRhdSuiu','WP9UWRK+bSkfWQaPgSkOcmkYWQmiW7RcV8oj','eKmQvCkyhCkOW6u','4PYOjoADSUEEGoITRUAYR1C','amovWR0wA8kNa8otWOfOfchcHcqSDW','W4pcR0ZdGSkcCubjW6tdLSkyiSkPgCoiiSkMsW','WO8yW57dQb7cLq','W7/cP8kc','gCkpW4ZcJ2JdGmkowaFdLSoWWPK','44gL6lEg5yY/','6lsS54IA6l2w6lcG5yQA6kgc5Asl6lAaWQK','ngKPWQbnWOW','hLVdNq','r07dOa','FevWW4FcO8kYySoMACod','W5ZcU0ZdSSknEq','BbldSG','W5ldILaDW615W50RDgldOamPzG','bfal','t0xdPrKLuSoi','bmo2WQZcSLJcRq','f+kFTmoL','kCkeWRZdKtdcMmoMW5v5tSo9bSkH','qSoFWPVdNt7cHCk7','W7lcTqbnwePkW494','bmo8WQu','W5RdNuaOW61CW5u3rMxdJWiX','CmkLnMhdON7cTuWUW5ylWQDu','6lA854QH6lYH6lkX5yUb6kg/5AEr6lE9DG','wW3cQ8oZWQak','W5tdRZRcRCk2y8k2WQP2W7LHxZzqAZddRmkL','b14m','CSo/lG','5Bsn6k+s57+V6lwR6l6W6lYR6kka5B+E5yU/6lEq5y2Y','f3aQdmo3WOOEW6ar','fmkqWRJcPCkW','W7BcRCkbWRlcPgxcJ8kQymk7WRC','WOv/WPuX','W5FdQZhcVmkfASkyWQPSW7bhuY15zZtdI8k4WP1Fra','o34IWQznWOe','eSkfWRZcJmkNnCoiW5NcRv5p','FCoDW6W','mmo5CtpcSd0','W77dIMa','W4BcHcy','pCoFxf7cJe8Sna','AxZdMmo5WPZcPflcKCkAscLCW6W','W5JdOCoJBSkJWRSGC0ZcRComW4zCoG','W6JdIh8pWR8','WQWFbG7cO8k5','W6VdRSoMW7LOWPXCW4S','nhqOWQq','h13dLa','W7bSWP/dN8kSqmkcifVdJa','W7VdOw7cUa','AxldGmo2WPe','W7OzvW','6lAN5y646lYl5RM3WRK4WQu','W5KIvG','jSkMFSk3lSkBWR04wmkSlmkQW6S','mvVdLmkEWRhdJmoBlsldPMxdIa','aX8/yG','WQzFDmksaSkCtmo3','gL05vCkegSkSW6ldGCkIy8kVfHBdS8ktyCkvkCoqWPZdI8oFWRerFhvzWRjMWOFdU34','WQy5W5ZcOmo5bSoddfVdISkaBCkl','deWGtq','W552WR7cGCo1BXtdKa','w+IVMUAWI+wKIoI3IfNINzhcTUAvIowqGow6MEAxSoAmGa','bKbRWQJdLCkg','8jUQNdq','5RoS5P+P5yYw6AoK5y2C55U+5lQk6lgu','WQtORQhMS5BLK7pLU48n','cXeS','lJf6EY7cVa','eK5SWRO','h0W9wa','j8keWQyfW70CqK0AW5ddQMnGWPlcON8','8jI4U2K','5lU155o25B6x5yAcW7pdLv8','rKhdOGS','6AoZ5yY25OUy5yMwW69N','W5S0Fa8','W4XVWR7cGq','W7mlrmkw','fNe2imo3WOK','qaNcRmoGWOaliwS','DqhdTWm','W4CUAa','su7cRmk6nGBdU8kWW5ZdQSkfWOLSWRBcPCoWoSkRsCkWWO8','gmouWPiDFCkIaG','ESkRm2ddP3/dRhmQW5qPWPG','6yoV55+V5O2o6ygys8odWP8','lYT9BI/dSNNdRKJcGmk3cSkjdCotwfKQW75RoI1UzSkDWOBcQ8kPW4tdKCo6WRhcUCoB','bbeNB3iVqJLPWPZcNSkcW40','6lwt5yYx5PsO5PAb','5lUu6loC8l+JKG','D1zGW4m','44ku5O6g56AU44cV6k6S5ywL6i+T5y2NFqBdQCorW5BcOa','WQi6W5pcPSo6bmodl2ZdGSk9s8k/','56woW5lOVz/OO4hPL4JPMAhML4FPL5e','lGOPWP/dRmogo8kiimkm','W7tdOw0','e8kjWQtcVCkWnq','nsPNwZlcRa','WOhcSmkkp8oNW6OcwKFcImokW4m','WROlhcO','rmoqW7/dU8oLCSkvW6BcH055F8o5','W5NdGem','6Akv5y+H5OIe5yI9W6VdMW','awOU','WRifdW','g18VW5zqvf7dIMrJW6WPWRC','W7ZdR37cVa','uCkNWOZcSa','W7ZdGwiGWRVdN8odWP7dGGfwW5hdG8k2WPDFWQP+aq','CSo1j8oHy8oa','bSoEWOu','W6CMWRq','WPmdW6y','W60GWQS','W6vSWPRdP8kSqmkf'];_0x24c9=function(){return _0x781a1e;};return _0x24c9();}const runInterval=process[_0xb2d40a(0x133,'o8c1')][_0xb2d40a(0x154,'E[V7')]||_0xb2d40a(0xd9,'N*(%'),isNotify=(process[_0xb2d40a(0x115,'5CEm')][_0xb2d40a(0x137,'Wjhz')]||process[_0xb2d40a(0xc9,'Q1F#')]['jd_gwfd_Notify'])===_0xb2d40a(0x15e,'LvE&'),pinFilter=(process[_0xb2d40a(0xef,'5h#m')][_0xb2d40a(0x109,'DzB2')]||'')['split']('@'),maxThreads=0x1;let cookiesArr=Object['keys'](jdCookie)[_0xb2d40a(0xfd,'iQv$')](_0x3f0236=>jdCookie[_0x3f0236])['filter'](_0x1b5d91=>_0x1b5d91);!cookiesArr[0x0]&&($[_0xb2d40a(0x140,'Nq%l')]($[_0xb2d40a(0xcd,'[HlV')],_0xb2d40a(0xbd,'4gDw')),process[_0xb2d40a(0x15a,'ED*R')](0x1));!(async()=>{const _0x5dce3d=_0xb2d40a;notify[_0x5dce3d(0x14c,'vSkL')]({'title':$['name']}),await Main(),isNotify&&notify[_0x5dce3d(0x13d,'iQv$')]()&&await notify[_0x5dce3d(0x159,'tUFv')]();})()[_0xb2d40a(0x13f,']sQi')](_0x1d5985=>$[_0xb2d40a(0xfb,'LvE&')](_0x1d5985))[_0xb2d40a(0xe2,'@jf!')](()=>$[_0xb2d40a(0xf9,'2wO$')]());function _0x1bc5(_0x1a13d8,_0x36c8fb){const _0x24c982=_0x24c9();return _0x1bc5=function(_0x1bc518,_0x56ebed){_0x1bc518=_0x1bc518-0xb7;let _0x2848ad=_0x24c982[_0x1bc518];if(_0x1bc5['WqeYmm']===undefined){var _0x1375b3=function(_0x1b5d91){const _0x1d5985='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1b409f='',_0x40812c='';for(let _0x39bfd6=0x0,_0x3d52af,_0x453c75,_0x24b51=0x0;_0x453c75=_0x1b5d91['charAt'](_0x24b51++);~_0x453c75&&(_0x3d52af=_0x39bfd6%0x4?_0x3d52af*0x40+_0x453c75:_0x453c75,_0x39bfd6++%0x4)?_0x1b409f+=String['fromCharCode'](0xff&_0x3d52af>>(-0x2*_0x39bfd6&0x6)):0x0){_0x453c75=_0x1d5985['indexOf'](_0x453c75);}for(let _0x22190d=0x0,_0x1a37f5=_0x1b409f['length'];_0x22190d<_0x1a37f5;_0x22190d++){_0x40812c+='%'+('00'+_0x1b409f['charCodeAt'](_0x22190d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x40812c);};const _0x3f0236=function(_0xaf0d9b,_0x40912c){let _0x1266ba=[],_0x349922=0x0,_0x28d4f7,_0x538139='';_0xaf0d9b=_0x1375b3(_0xaf0d9b);let _0x3653fc;for(_0x3653fc=0x0;_0x3653fc<0x100;_0x3653fc++){_0x1266ba[_0x3653fc]=_0x3653fc;}for(_0x3653fc=0x0;_0x3653fc<0x100;_0x3653fc++){_0x349922=(_0x349922+_0x1266ba[_0x3653fc]+_0x40912c['charCodeAt'](_0x3653fc%_0x40912c['length']))%0x100,_0x28d4f7=_0x1266ba[_0x3653fc],_0x1266ba[_0x3653fc]=_0x1266ba[_0x349922],_0x1266ba[_0x349922]=_0x28d4f7;}_0x3653fc=0x0,_0x349922=0x0;for(let _0x448bbb=0x0;_0x448bbb<_0xaf0d9b['length'];_0x448bbb++){_0x3653fc=(_0x3653fc+0x1)%0x100,_0x349922=(_0x349922+_0x1266ba[_0x3653fc])%0x100,_0x28d4f7=_0x1266ba[_0x3653fc],_0x1266ba[_0x3653fc]=_0x1266ba[_0x349922],_0x1266ba[_0x349922]=_0x28d4f7,_0x538139+=String['fromCharCode'](_0xaf0d9b['charCodeAt'](_0x448bbb)^_0x1266ba[(_0x1266ba[_0x3653fc]+_0x1266ba[_0x349922])%0x100]);}return _0x538139;};_0x1bc5['pCVXWy']=_0x3f0236,_0x1a13d8=arguments,_0x1bc5['WqeYmm']=!![];}const _0x41f821=_0x24c982[0x0],_0x378321=_0x1bc518+_0x41f821,_0x494012=_0x1a13d8[_0x378321];return!_0x494012?(_0x1bc5['iaxgMV']===undefined&&(_0x1bc5['iaxgMV']=!![]),_0x2848ad=_0x1bc5['pCVXWy'](_0x2848ad,_0x56ebed),_0x1a13d8[_0x378321]=_0x2848ad):_0x2848ad=_0x494012,_0x2848ad;},_0x1bc5(_0x1a13d8,_0x36c8fb);}async function Main(){const _0x1c12bc=_0xb2d40a;try{try{const _0x40812c=parseInt(taskThreads);_0x40812c>0x0&&_0x40812c!==0x1&&(taskThreads=_0x40812c);}catch{taskThreads=0x1;}taskThreads=Math[_0x1c12bc(0x13c,'nfos')](taskThreads,maxThreads),$[_0x1c12bc(0xff,'GCi[')]=null;if(runInterval)try{const _0x39bfd6=parseInt(runInterval);_0x39bfd6>=0x0&&($[_0x1c12bc(0x135,'$5O(')]=_0x39bfd6);}catch{console[_0x1c12bc(0xd2,'F%i!')]('⚠\x20自定义运行间隔时长设置错误');}$[_0x1c12bc(0xf4,'EnHo')]=[],console[_0x1c12bc(0xd3,'IHNW')](_0x1c12bc(0xc0,'p3@z')+$['name']+'变量开启状态=========='),console[_0x1c12bc(0xd6,']sQi')](_0x1c12bc(0xf6,'IHNW')+$[_0x1c12bc(0x15d,'5TlR')]/0x3e8+_0x1c12bc(0xbf,'HMP%')),console[_0x1c12bc(0x128,'!pI2')](_0x1c12bc(0x156,'VtuT')+common[_0x1c12bc(0x119,'GCi[')]()+']'),console[_0x1c12bc(0xca,'@jf!')](_0x1c12bc(0xb7,'DzB2')+(isNotify?'开启':'关闭')+']'),console[_0x1c12bc(0xc7,'GCi[')](_0x1c12bc(0x141,'IHNW')+pinFilter['join'](',\x20')+']'),console['log']('=========='+$['name']+'变量状态结束=========='),console['log'](''),await common[_0x1c12bc(0x100,'5CEm')](taskThreads,cookiesArr,taskFnc),$[_0x1c12bc(0x15c,'Q1F#')]=![];$[_0x1c12bc(0x105,'F%i!')]['length']>0x0&&(cookiesArr=cookiesArr[_0x1c12bc(0xfe,'LvE&')]((_0x3d52af,_0x453c75)=>!$['needRemoveCookieIndex'][_0x1c12bc(0x104,'N*(%')](_0x453c75+0x1)),$[_0x1c12bc(0xde,'Q1F#')]=[]);const _0x1b409f=notify['getMessage']();_0x1b409f&&console['log']('\x0a📣\x20运行结果\x0a'+_0x1b409f[_0x1c12bc(0x161,'1#3M')](/：/g,_0x1c12bc(0x11d,'5TlR')));}catch(_0x24b51){console[_0x1c12bc(0xe4,'gcQI')](_0x1c12bc(0xe5,'xnmJ')+_0x24b51);}}async function taskFnc(_0x22190d,_0x1a37f5){const _0x1d9765=_0xb2d40a;if($[_0x1d9765(0x139,'@jf!')])return{'runEnd':!![]};const _0xaf0d9b=decodeURIComponent(common[_0x1d9765(0xd5,'$dii')](_0x22190d,_0x1d9765(0x10e,'F%i!')));function _0x40912c(_0x1ebf22,_0x25bc27){const _0x3454db=_0x1d9765;if(_0x1ebf22[_0x3454db(0xea,'5CEm')]<=0x4)return _0x1ebf22;else{const _0x56e8c9=_0x1ebf22[_0x3454db(0x138,'o8c1')](0x0,0x2),_0x564df5=_0x1ebf22['slice'](-0x2),_0x403899=Math['max'](_0x25bc27-_0x56e8c9[_0x3454db(0x11c,'GyB)')]-_0x564df5[_0x3454db(0x125,'5TlR')],0x0),_0x4ba5a1='*'[_0x3454db(0x132,'Y#Hz')](_0x403899);return _0x56e8c9+_0x4ba5a1+_0x564df5;}}const _0x1266ba=decodeURIComponent(_0xaf0d9b),_0x349922=_0x40912c(_0x1266ba,0x6),_0x28d4f7=_0x1d9765(0x111,'#sGx')+_0x1a37f5+'】'+_0x349922+'：',_0x538139=notify[_0x1d9765(0x113,'N*(%')](_0x1a37f5,_0xaf0d9b);if(pinFilter['length']>0x0&&(pinFilter[_0x1d9765(0x10a,'V[7K')](_0xaf0d9b)||pinFilter[_0x1d9765(0xf2,'#pb6')](encodeURIComponent(_0xaf0d9b)))){_0x538139['fix'](_0x1d9765(0x129,'F%i!')),console[_0x1d9765(0xd3,'IHNW')](_0x538139[_0x1d9765(0xeb,'2wO$')]()),$[_0x1d9765(0x12e,'5h#m')][_0x1d9765(0x12d,'DzB2')](_0x1a37f5);return;}const _0x3653fc=await common[_0x1d9765(0x102,'Y#Hz')](_0x22190d);if(!_0x3653fc&&typeof _0x3653fc===_0x1d9765(0xdc,'#pb6')){console[_0x1d9765(0xdf,'TDWC')](_0x28d4f7+_0x1d9765(0xba,'#sGx')),_0x538139[_0x1d9765(0xd1,'IHNW')]('账号无效'),$[_0x1d9765(0x160,'tEAH')]['push'](_0x1a37f5);return;}const _0x448bbb=common['genUA'](_0xaf0d9b);let _0x5b2c96,_0x1063ec;_0x5b2c96='',await _0x5253ae('manualCollectIndex'),await $['wait'](parseInt($[_0x1d9765(0x14a,'ED*R')]*0x1+0x1f4,0xa));if(_0x5b2c96){const _0x338b66=_0x5b2c96['orderList']||[];if(_0x338b66&&_0x338b66[_0x1d9765(0xe6,'nfos')]>0x0){_0x1063ec=_0x338b66[_0x1d9765(0x127,'xnmJ')](_0x4c7b92=>_0x4c7b92[_0x1d9765(0x116,'p3@z')]);const _0x2a4361=_0x338b66[_0x1d9765(0xdd,'5h#m')]((_0x504373,_0x3cc057)=>_0x504373+_0x3cc057[_0x1d9765(0xcb,'TDWC')],0x0);console[_0x1d9765(0xc1,'RM*F')](_0x28d4f7+'有'+_0x338b66[_0x1d9765(0x12f,'N*(%')]+_0x1d9765(0xf7,'o8c1')+_0x2a4361+_0x1d9765(0xbb,'$dii')),await _0x5253ae(_0x1d9765(0xfc,'4gDw')),await $[_0x1d9765(0x149,'V[7K')](parseInt($['waitTime']*0x1+0x1f4,0xa));}else console[_0x1d9765(0x131,'f!Wl')](_0x28d4f7+'没有可领取的订单');}if($[_0x1d9765(0xc3,'gcQI')])return{'runEnd':!![]};await $['wait'](parseInt($[_0x1d9765(0x13a,'HMP%')]*0x1+0x1f4,0xa));async function _0x475081(_0x6901d2,_0x4c02a3){const _0x4ef1d1=_0x1d9765;try{switch(_0x6901d2){case _0x4ef1d1(0x10d,'uX%k'):_0x4c02a3[_0x4ef1d1(0x13b,'N*(%')]==='0'?_0x4c02a3[_0x4ef1d1(0xbc,'p3@z')]?_0x5b2c96=_0x4c02a3[_0x4ef1d1(0x145,'&0]o')]:(msg=common[_0x4ef1d1(0x130,'#sGx')](_0x4c02a3[_0x4ef1d1(0xf8,'tUFv')]),console['log'](_0x28d4f7+_0x4ef1d1(0x112,'LvE&')+_0x4c02a3[_0x4ef1d1(0xd7,'EnHo')]+']：'+msg)):(msg=common['getErrorMsg'](_0x4c02a3),console[_0x4ef1d1(0xd0,'1#3M')](_0x28d4f7+_0x4ef1d1(0x124,'EnHo')+_0x4c02a3[_0x4ef1d1(0xf5,'tZgQ')]+']：'+msg));break;case _0x4ef1d1(0x126,'5h#m'):if(_0x4c02a3[_0x4ef1d1(0x13e,'RM*F')]==='0'){if(_0x4c02a3[_0x4ef1d1(0x15b,'Nq%l')]?.[_0x4ef1d1(0x136,']sQi')]===_0x4ef1d1(0x108,')2eo')){let _0x1b61bc=_0x4c02a3[_0x4ef1d1(0xc5,'@jf!')]?.[_0x4ef1d1(0xb9,'&0]o')]||[];const _0x58b699=_0x1b61bc['map'](_0x5edaa3=>_0x5edaa3[_0x4ef1d1(0x122,'GCi[')])[_0x4ef1d1(0xc2,'#sGx')](_0xa32aa9=>_0xa32aa9!==undefined);if(_0x58b699[_0x4ef1d1(0xcf,'!pI2')]>0x0){const _0x533c2c=_0x58b699[_0x4ef1d1(0xdd,'5h#m')]((_0x175995,_0x186adf)=>_0x175995+_0x186adf,0x0);console[_0x4ef1d1(0x150,'&0]o')](_0x28d4f7+_0x4ef1d1(0xc8,'p3@z')+_0x533c2c+_0x4ef1d1(0xbb,'$dii')),_0x538139[_0x4ef1d1(0x151,'gcQI')](_0x4ef1d1(0x158,'#sGx')+_0x533c2c+_0x4ef1d1(0x107,')POe'));}else console[_0x4ef1d1(0x15f,'tUFv')](_0x28d4f7+_0x4ef1d1(0x14e,'E[V7'));}else msg=common[_0x4ef1d1(0x12c,'EnHo')](_0x4c02a3[_0x4ef1d1(0x153,'V[7K')]),console[_0x4ef1d1(0x121,'GyB)')](_0x28d4f7+_0x4ef1d1(0xfa,'2wO$')+_0x4c02a3[_0x4ef1d1(0xe9,'Y#Hz')]+']：'+msg);}else msg=common['getErrorMsg'](_0x4c02a3),console['log'](_0x28d4f7+_0x4ef1d1(0xfa,'2wO$')+_0x4c02a3[_0x4ef1d1(0xd8,'GCi[')]+']：'+msg);break;}}catch(_0xf5e24c){console[_0x4ef1d1(0x142,'JMdA')](_0x4ef1d1(0xf0,'Wjhz')+_0x6901d2+_0x4ef1d1(0x14f,'4gDw')+(_0xf5e24c[_0x4ef1d1(0x11b,'5CEm')]||_0xf5e24c));}}async function _0x5253ae(_0x185af0){const _0x3d48bf=_0x1d9765;if($[_0x3d48bf(0x117,'uX%k')])return;let _0x2c3c55='',_0x2b4608=null,_0x50df49=null,_0x5b00fb=_0x3d48bf(0x134,')2eo');switch(_0x185af0){case'manualCollectIndex':_0x2c3c55=_0x3d48bf(0xb8,'gcQI'),_0x50df49={'functionId':_0x185af0,'body':JSON[_0x3d48bf(0x120,')2eo')]({'source':'ljdhome','rnClient':'1'}),'appid':'ld','t':Date[_0x3d48bf(0x11a,'xnmJ')](),'clientVersion':common[_0x3d48bf(0xce,'o8c1')](),'client':_0x3d48bf(0xe1,'xnmJ')};break;case'manualCollectBeans':_0x2c3c55=_0x3d48bf(0x106,'uX%k'),_0x50df49={'functionId':_0x185af0,'body':JSON[_0x3d48bf(0x12a,'Q1F#')]({'orderIdList':_0x1063ec[_0x3d48bf(0x118,'LvE&')](_0x39f59b=>encodeURIComponent(_0x39f59b))}),'appid':'ld','t':Date[_0x3d48bf(0x10f,'EnHo')](),'clientVersion':common[_0x3d48bf(0xdb,'RM*F')](),'client':_0x3d48bf(0x12b,'#sGx')};break;default:console[_0x3d48bf(0x121,'GyB)')](_0x3d48bf(0x10b,'Q1F#')+_0x185af0);return;}const _0x646fd5={};_0x2b4608&&Object['assign'](_0x2b4608,_0x646fd5);_0x50df49&&Object[_0x3d48bf(0x103,'tZgQ')](_0x50df49,_0x646fd5);const _0x30cde0={'url':_0x2c3c55,'method':_0x5b00fb,'headers':{'Host':_0x3d48bf(0xe8,'EnHo'),'Origin':_0x3d48bf(0x101,'RM*F'),'Content-Type':_0x3d48bf(0x147,'V[7K'),'Cookie':_0x22190d,'User-Agent':_0x448bbb},'params':_0x50df49,'data':_0x2b4608,'timeout':0x7530};_0x5b00fb===_0x3d48bf(0xed,'5TlR')&&(delete _0x30cde0[_0x3d48bf(0x157,'5CEm')],delete _0x30cde0[_0x3d48bf(0x11f,'hD4$')][_0x3d48bf(0x144,'nfos')]);const _0x4b52e1=0x1;let _0x511eef=0x0,_0x31b871=null;while(_0x511eef<_0x4b52e1){_0x511eef>0x0&&await $[_0x3d48bf(0x152,'vSkL')](0x3e8);const _0x2b59e5=await common[_0x3d48bf(0xd4,'iQv$')](_0x30cde0);if(!_0x2b59e5['success']){_0x31b871=_0x3d48bf(0x155,'!pI2')+_0x185af0+_0x3d48bf(0xe7,'tEAH')+_0x2b59e5[_0x3d48bf(0xe3,'@jf!')],_0x511eef++;continue;}if(!_0x2b59e5[_0x3d48bf(0xf1,'[HlV')]){_0x31b871=_0x3d48bf(0x14d,'p3@z')+_0x185af0+_0x3d48bf(0x14b,'V[7K'),_0x511eef++;continue;}await _0x475081(_0x185af0,_0x2b59e5[_0x3d48bf(0xcc,'RM*F')]);break;}_0x511eef>=_0x4b52e1&&console[_0x3d48bf(0x114,'nfos')](_0x31b871);}}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}