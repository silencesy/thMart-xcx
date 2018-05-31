const util = require('../../utils/util.js')
Page({
  data: {
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
  onLoad: function () {

  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  }
})