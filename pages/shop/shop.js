//shop.js
const util = require('../../utils/util.js')

Page({
  data: {
    swiperConfig: {
      indicatorDots: true,
      indicatorColor: "#ccc",
      indicatorActiveColor: "#f6442b",
      autoplay: true,
      interval: 4000,
      duration: 500,
      previousMargin: 0,
      nextMargin: 0,
      circular: true,
    },
    isFixed: false
  },
  onLoad: function (e) {

  },
  onPageScroll: function (e) {
    this.setFixed(e.scrollTop);
  },
  setFixed: function (distance) {
    if (distance > 70) {
      this.setData({
        isFixed: true
      })
    } else {
      this.setData({
        isFixed: false
      })
    }
  }
})