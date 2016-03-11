// ==UserScript==
// @name       360FXExporter
// @namespace  http://yunpan.cn/
// @version    1.0
// @description  export 360 share url to aria2/wget
// @match      http://*.yunpan.cn/*
// @run-at document-end
// @copyright  2013+, chztv <0571chz@gmail.com>
// ==/UserScript==

var jqscript = document.createElement('script');
jqscript.id = "jq_script";
jqscript.src = "http://libs.baidu.com/jquery/1.8.3/jquery.min.js";
var script = document.createElement('script');
script.id = "TLE_script";
script.src = "https://rawgit.com/twlz0ne/360FXExporter/master/360FXExporter.js";
document.body.appendChild(jqscript);
document.body.appendChild(script);
