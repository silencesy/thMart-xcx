Page({
  data: {
    duration: 500,
    showId: 0
  },
  onLoad: function (options) {
    
  },
  onReachBottom: function () {
    
  },
  tab: function (e) {
    if (this.data.showId != e.target.id) {
      var showId = e.target.id;
      this.setData({
        showId: showId
      })
    }
  },
  bindchange: function (e) {
    console.log(e.detail.current);
    this.setData({
      showId: e.detail.current
    })
  },
  onShareAppMessage: function () {
    
  }
})