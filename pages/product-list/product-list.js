var util = require('../../utils/util.js');
Page({
  data: {
    productList: [],
    para: {
      set_position: 17,
      p: 1,
      pageSize: 8
    }
  },
  onLoad: function (options) {
    this.getData();
  },
  onReachBottom: function () {
    
  },
  getData: function () {
    var that = this;
    util.request("GET", "Api/Set/getList", that.data.para,function(res){
      that.setData({
        productList: res.data.data.goods
      })
    });
  },
  onShareAppMessage: function () {
    
  }
})