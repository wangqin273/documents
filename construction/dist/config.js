/** v1.0 by helijun **/ 
var ENV={VERSION:1524676223663,API:"/worksite/",FILE_URL:"/worksite/",PAGE:"/construction/",H5:"http://"+window.location.host+"/page/apply/index.html",BASE:"http://"+window.location.host,PROJECT_TIME:5e3,AMAP_KEY:"vjUUMSF3yrxOQHxYCfx20Xu9WMzNLtwb"};require.config({urlArgs:"v="+ENV.VERSION,baseUrl:ENV.PAGE,paths:{jquery:"plugin/jquery/jquery-3.1.0.min",router:"plugin/spa/router",routerConfig:"router.config",cookie:"plugin/jquery/jquery.cookie",layui:"plugin/layui/layui",layuiAll:"plugin/layui/layui.all",area:"plugin/layui/area",underscore:"plugin/underscore/underscore",common:"js/common",qrcode:"plugin/qrcode/qrcode",jqprint:"plugin/jquery/jquery.print",lrz:"plugin/lrz/lrz.bundle",jqweui:"plugin/jqweui/js/jquery-weui.min",dateFormat:"plugin/util/dateFormat",formUtil:"plugin/util/formUtil"},shim:{underscore:{exports:"_"},routerConfig:{deps:["jquery","cookie","router"],exports:"$"},router:{deps:["jquery"],exports:"$"},jqprint:{deps:["jquery"],exports:"$"},cookie:{deps:["jquery"],exports:"$"},common:{deps:["jquery","cookie"],exports:"$"},formUtil:{deps:["jquery"],exports:"$"},jqweui:{deps:["jquery"],exports:"$"}}});