//index.js
//获取应用实例
const app = getApp()
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
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    wx.request({
      url: 'http://api.mall.thatsmags.com/Api/Public/home',
      success: function (res) {
        console.log(res);
        that.setData({
          homeData: res.data.data
        });
      }
    });
    wx.request({
      url: 'http://api.mall.thatsmags.com/Api/Set/getList',
      data: that.data.hotDataPara,
      success: function (res) {
        that.setData({
          hotData: that.data.hotData.concat(res.data.data.goods)
        });
      }
    });
  },
  onPullDownRefresh: function () {
    
  },
  onReachBottom: function () {
    var that = this;
    that.data.hotDataPara.p++;
    wx.request({
      url: 'http://api.mall.thatsmags.com/Api/Set/getList',
      data: that.data.hotDataPara,
      success: function (res) {
        that.setData({
          hotData: that.data.hotData.concat(res.data.data.goods)
        });
      }
    });
  },
})
