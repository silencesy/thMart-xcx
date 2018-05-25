//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    homeData: {},
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
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    var that = this;
    wx.request({
      url: 'http://api.mall.thatsmags.com/Api/Public/home',
      success: function (res) {
        console.log(res);
        that.setData({
          homeData: res.data.data
        });
      }
    }) 
  },
  onPullDownRefresh: function () {
    
  },
  onReachBottom: function () {
    
  },
  
})
