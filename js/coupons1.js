$(function () {
    var data = datas[0];
    var ele = $('\
        <li><a href = "taobaobridge.html?type=coupon&seller_id=' + data['seller_id'] + '&activity_id=' + data['activity_id'] + '"><div id="coupon">\
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
        </li>')
    $('.coupons-container ul').append(ele);
});
