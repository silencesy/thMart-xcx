const util = require('../../utils/util.js')

Page({
  data: {
    hiddenmodalput: true,
    array: ['Male', 'Female'],
    index: 0,
    objectArray: [
      {
        id: 0,
        name: 'Male'
      },
      {
        id: 1,
        name: 'Female'
      }
    ]
  },
  // 弹出选择框
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  // 弹出输入框
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  }, 
  confirm: function () {
    this.setData({
      hiddenmodalput: true
    })
  }  
 
})