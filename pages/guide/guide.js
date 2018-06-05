//guide.js
const util = require('../../utils/util.js')

Page({
  data: {
    classification: [],
    articleList: [],
    activeCategoryId: 1,
    p: 0,
    pageSize: 10,
    totalPages: -1,
    scrollTop: 0
  },
  onLoad: function () {
    var that = this;
    that.getArticleList();
  },
  tabClick: function (e) {
    // 点击不是当前tab切换
    if (this.data.activeCategoryId != e.currentTarget.id) {
      this.setData({
        articleList: [],
        activeCategoryId: e.currentTarget.id,
        p: 0,
        totalPages: -1,
        scrollTop: 0
      });
      // 请求数据
      this.getArticleList();
    }
  },
  // 获取数据
  getArticleList: function () {
    var that = this;
    util.request('get', 'Api/Article/getList', {
      cat_id: that.data.activeCategoryId,
      p: that.data.p++,
      pageSize: that.data.pageSize
    }, function (res) {
      res.data.data.cat.shift();
      that.setData({
        classification: res.data.data.cat,
        articleList: res.data.data.articles
      });
      console.log(res);
    });
  },
  // 上拉加载数据
  lower: function () {
    this.getArticleList(true);
  }


});