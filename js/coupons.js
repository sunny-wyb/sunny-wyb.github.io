$(function () {
    for (var i = 0; i < datas.length; i++) {
        var data = datas[i];
        var ele = $('\
            <li><a href = "taobaobridge.html?type=coupon&sellerId=1789418796&activityId=23b1031d13474c37b6c712601b32cf3d"><div id="coupon">\
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
    }
});
