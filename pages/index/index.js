
//index.js
//获取应用实例
const app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    homeData: {},
    hotDataPara: {
      set_position: 12,
      pageSize: 9,
      p: 0
    },
    hotData: [],
    swiperConfig: {
      indicatorDots: true,
      indicatorColor: "#ccc",
      indicatorActiveColor: "#f6442b",
      autoplay: true,
      interval: 4000,
      duration: 500,
      previousMargin: 0,
      nextMargin: 0,
      circular: true
    }
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    that.data.hotDataPara.p++;
    util.request("get", "Api/Public/home", {}, function (res){
      console.log(res);
      that.setData({
        homeData: res.data.data
      });
    });
    util.request("get", "Api/Set/getList", that.data.hotDataPara, function (res) {
      that.setData({
        hotData: that.data.hotData.concat(res.data.data.goods)
      });
    }, false, false, false);
  },
  onPullDownRefresh: function () {
    
  },
  onReachBottom: function () {
    var that = this;
    that.data.hotDataPara.p++;
    util.request("get", "Api/Set/getList", that.data.hotDataPara, function (res) {
      that.setData({
        hotData: that.data.hotData.concat(res.data.data.goods)
      });
    }, false, false, false);
  },
})
