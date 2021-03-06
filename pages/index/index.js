
//index.js
//获取应用实例
const app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    homeData: {},
    loadingHidden: false,
    hotDataPara: {
      set_position: 12,
      pageSize: 15,
      p: 0,
      totalPages: -1,
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
        homeData: res.data.data,
        show: true
      });
    });
    util.request("get", "Api/Set/getList", that.data.hotDataPara, function (res) {
      that.data.hotDataPara.totalPages = res.data.data.totalPages;
      that.setData({
        hotData: that.data.hotData.concat(res.data.data.goods)
      });
    }, false, false, false);
  },
  onReachBottom: function () {
    var that = this;
    if (that.data.hotDataPara.p != that.data.hotDataPara.totalPages && that.data.hotDataPara.totalPages!=0){
      that.data.hotDataPara.p++;
      util.request("get", "Api/Set/getList", that.data.hotDataPara, function (res) {
        res.data.data.goods.length = parseInt(res.data.data.goods.length / 3)*3;
        that.setData({
          hotData: that.data.hotData.concat(res.data.data.goods),
        });
      },false,false,false);
    } else {
      that.setData({
        loadingHidden: true
      });
    }
  },
  toDetailsTap: function(e) {
    wx.navigateTo({
      url: "../../pages/productdetail/productdetail?id=" + e.currentTarget.dataset.id
    })
  },
  toProductList: function (e) {
    wx.navigateTo({
      url: "../../pages/product-list/product-list"
    })
  }
})
