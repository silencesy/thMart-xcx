Page({
  data: {
    showId: null,
    duration: 500
  },
  onLoad: function (e) {
    if(e.id) {
      this.setData({
        duration: 0
      })
    }
    this.setData({
      showId: e.id
    })
    this.setData({
      duration: 500
    })
  },
  onUnload: function () {
    
  },
  onReachBottom: function () {
    
  },
  tab: function (e) {
    this.setData({
      duration: 0
    })
    if (this.data.showId != e.target.id){
      var showId = e.target.id;
      this.setData({
        showId: showId
      })
    }
    this.setData({
      duration: 500
    })
  },
  bindchange: function (e) {
    var current = e.detail.current;
    this.setData({
      showId: current
    })
  },
  onShareAppMessage: function () {
    
  }
})