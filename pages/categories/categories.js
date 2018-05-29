//categories.js
const util = require('../../utils/util.js')

Page({
  data: {
    classification: [],
    productList: [],
    activeCategoryId: 0,
    p: 0,
    pageSize: 10
  },
  onLoad: function () {
    var that = this;
    util.request('get','Api/Archive/getGoodsCats',{},function(res){
      that.setData({
        classification: res.data.data,
        activeCategoryId: res.data.data[0].id
      });
      that.getProductList();
    });
  },
  tabClick: function (e) {
    this.setData({
      p: 0
    });
    if (this.data.activeCategoryId != e.currentTarget.id) {
      this.setData({
        activeCategoryId: e.currentTarget.id
      });
      this.getProductList();
    }
  },
  getProductList: function () {
    var that = this;
    util.request("get", "Api/Archive/getList",{
      p: ++that.data.p,
      pageSize: that.data.pageSize,
      cat_id: that.data.activeCategoryId
    },function(res){
      that.setData({
        productList: res.data.data.goods
      })
    });
  }
});