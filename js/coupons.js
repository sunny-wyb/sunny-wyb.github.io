$(function () {
    for (var i = 0; i < datas.length; i++) {
        var data = datas[i];
        var ele = $('\
            <li><a href = "http://www.baidu.com"><div id="coupon">\
                    <div class="mod-a mod-a-good">\
                    <div class="mod-a-h"></div>\
            <div class="mod-a-f"></div>\
            <div class="mod-a-ln">\
                    <div class="mod-a-ln-bg"></div>\
            </div>\
            <div class="mod-a-icon"></div>\
            <div class="mod-a-tit">' + data['name'] + '</div>\
            <div class="mod-a-sub-tit">' + data['valid'] + '</div>\
            <div class="mod-a-val"><span class="price"><span>￥</span>' + data['discount'] + '</span></div>\
            <div class="mod-a-tip">' + data['condition'] + '</div>\
            </div>\
            </div></a>\
            <div style="margin:0 8px;"><a href="taobaobridge.html?type=offer&offer_id=523924009712"><img src="' + data['img'] + '" style="width:100%;"/></div>\
            </li>')
        $('.coupons-container ul').append(ele);
    }
});
