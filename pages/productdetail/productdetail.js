const util = require('../../utils/util.js')
Page({
  data: {
    productId: 0,
    productDetailsData: {},
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
  onLoad: function (e) {
    this.setData({
      productId: e.id
    });
    this.getProductInfo();
  },
  getProductInfo: function () {
    var that = this;
    util.request("GET", "Api/Archive/getDetail", { id: this.data.productId},function(res){
      console.log(res);
      that.setData({
        productDetailsData: res.data.data
      });
    });
  }
})