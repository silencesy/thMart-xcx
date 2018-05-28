  const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const request = (method, path, para, backfun, failedfun, mustlogin=false,layer=true) => {
  if (layer){
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 10000,
      mask: true
    });
  }
  var token = wx.getStorageSync || null;
  const url = 'http://api.mall.thatsmags.com/';
  // const url = 'http://proj7.thatsmags.com/';
  if (mustlogin && !token) {

    return false;
  }
  wx.request({
    url: url + path,
    data: para,
    header: { 
      // TOKEN, token
    },
    method: method,
    // dataType: 'json',
    // responseType: 'text',
    success: function(res) {
      if (layer) {
        wx.hideToast();
      }
      if (res.code == 0) {
        // 错误处理

      } else {
        // 用户token处理
        if (res.data && res.data.token) {
          wx.setStorageSync("token", res.data.token);
        }
        if (backfun) {
          backfun(res);
        }
      }
    },
    fail: function(res) {
      if (layer){
        wx.hideToast();
      }
      if (failedfun) {
        failedfun(data);
      }
      else {
        console.log(res);
      } 
    }
    // complete: function(res) {},
  })
}

module.exports = {
  formatTime: formatTime,
  request: request
}
