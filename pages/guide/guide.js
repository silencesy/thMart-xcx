//guide.js
const util = require('../../utils/util.js')

Page({
  data: {
    classification: [],
    articleList: [],
    activeCategoryId: 1,
    p: 0,
    pageSize: 100,
    totalPages: -1,
    scrollTop: 0,
    loadingHidden: false
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
      this.getArticleList(false,true);
    }
  },
  // 获取数据
  getArticleList: function (concat,showlayer) {
    var that = this;
    if (that.data.p != that.data.totalPages)  {
      util.request('get', 'Api/Article/getList', {
        cat_id: that.data.activeCategoryId,
        p: ++that.data.p,
        pageSize: that.data.pageSize
      }, function (res) {
        res.data.data.cat.shift();
        if (concat) {
          that.setData({
            classification: res.data.data.cat,
            articleList: that.data.articleList.concat(res.data.data.articles),
            totalPages: res.data.data.totalPages
          });
        } else {
          that.setData({
            classification: res.data.data.cat,
            articleList: res.data.data.articles,
            totalPages: res.data.data.totalPages
          });
        }
        }, false, false, showlayer);
    } else {
      that.setData({
        loadingHidden: true
      })
    }
  },
  // 上拉加载数据
  onReachBottom: function () {
    this.getArticleList(true,false);
  }

});