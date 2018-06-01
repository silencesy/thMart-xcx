//categories.js
const util = require('../../utils/util.js')

Page({
  data: {
    classification: [],
    productList: [],
    activeCategoryId: 0,
    p: 0,
    pageSize: 10,
    totalPages: -1,
    scrollTop: 0
  },
  onLoad: function () {
    var that = this;
    // 请求侧边栏数据
    util.request('get','Api/Archive/getGoodsCats',{},function(res){
      console.log(res);
      that.setData({
        classification: res.data.data,
        activeCategoryId: res.data.data[0].id
      });
      that.getProductList();
    });
  },
  tabClick: function (e) {
    // 点击不是当前tab切换
    if (this.data.activeCategoryId != e.currentTarget.id) {
      this.setData({
        productList: [],
        activeCategoryId: e.currentTarget.id,
        p: 0,
        totalPages: -1,
        scrollTop: 0
      });
      // 请求数据
      this.getProductList();
    }
  },
  // 获取数据
  getProductList: function (concat) {
    var that = this;
    // 超出数据页数不请求
    if (that.data.p != that.data.totalPages) {
      util.request("get", "Api/Archive/getList", {
        p: ++that.data.p,
        pageSize: that.data.pageSize,
        cat_id: that.data.activeCategoryId,
        sort: "null"
      }, function (res) {
        console.log(res);
        if (concat) {
          that.setData({
            productList: that.data.productList.concat(res.data.data.goods),
            totalPages: res.data.data.totalPages,
          })
        } else {
          that.setData({
            productList: res.data.data.goods,
            totalPages: res.data.data.totalPages,
          })
        }
      });
    }
  },
  // 上拉加载数据
  lower: function () {
    this.getProductList(true); 
  }
});