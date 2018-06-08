//cart.js
const util = require('../../utils/util.js')

Page({
  data: {
    move: true,
    list: []
  },
  onLoad: function () {
    this.setData({
      list: [
        {
          "cart_id": "650",
          "move": false,
          "id": "84",
          "goods_cnt": "2",
          "price_id": "347",
          "goods_type_one": "Green",
          "goods_type_two": "",
          "goods_name": "EMSA FLOW Slim Friends Carafe with Cooling Station",
          "goods_price": "198",
          "goods_sale_price": "158",
          "goods_picture": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/ICE/FLOW Slim Friends Carafe with cooling station.jpg"
        },
        {
          "cart_id": "651",
          "move": false,
          "id": "161",
          "goods_cnt": "1",
          "price_id": "645",
          "goods_type_one": "Seafood Hamper",
          "goods_type_two": "",
          "goods_name": "Seafood Hamper Coupon",
          "goods_price": "448",
          "goods_sale_price": "499",
          "goods_picture": "http://api.mall.thatsmags.com/Public/ckfinder/images/flower/diana 219.jpg"
        },
        {
          "cart_id": "652",
          "id": "51",
          "goods_cnt": "1",
          "move": false,
          "price_id": "273",
          "goods_type_one": "ASAP",
          "goods_type_two": "",
          "goods_name": "Passion of Diana",
          "goods_price": "358",
          "goods_sale_price": "219",
          "goods_picture": "http://api.mall.thatsmags.com/Public/ckfinder/images/flower/diana 219.jpg"
        },
        {
          "cart_id": "653",
          "id": "61",
          "goods_cnt": "1",
          "move": false,
          "price_id": "293",
          "goods_type_one": "May 13th",
          "goods_type_two": "DIANA",
          "goods_name": "An Affectionate Encounter",
          "goods_price": "269",
          "goods_sale_price": "169",
          "goods_picture": "http://api.mall.thatsmags.com/Public/ckfinder/images/flower/AAE3.jpg"
        }
      ]
    })
    console.log(this.data.list.length);
    if(this.data.list.length <= 0) {
      this.setData({
        move: false
      })
    }
  },
  onHide: function () {
    this.data.list.forEach(function (value) {
      value.move = false;
    });
    this.setData({
      list: this.data.list
    });
  },
  goIndex: function () {
    wx.switchTab({
      url: "../../pages/index/index"
    })
  },
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    var index = e.currentTarget.dataset.index;
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      if (disX == 0 || disX < 0) {
        this.data.list.forEach(function (value) {
          value.move = false;
        });
        // this.data.list[index].move =false;
        this.setData({
          list: this.data.list
        })
      } else if (disX > 0) {
        this.data.list.forEach(function (value) {
          value.move = false;
        });
        this.data.list[index].move = true;
        this.setData({
          list: this.data.list
        })
      }
    }
  },

  touchE: function (e) {
    // var index = e.currentTarget.dataset.index;
    // if (e.changedTouches.length == 1) {
    //   var endX = e.changedTouches[0].clientX;
    //   var disX = this.data.startX - endX;
    //   var delBtnWidth = this.data.delBtnWidth;
    //   //如果距离小于删除按钮的1/2，不显示删除按钮
    //   var left = disX > delBtnWidth / 2 ? "margin-left:-" + delBtnWidth + "px" : "margin-left:0px";
    //   var list = this.data.goodsList.list;
    //   if (index !== "" && index != null) {
    //     list[parseInt(index)].left = left;
    //     this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);

    //   }
    // }
  }
})