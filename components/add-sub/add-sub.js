Component({
  externalClasses: ['icon-class-add','icon-class-sub'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    defaultNumber: {            // 属性名
      type: Number,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "1"     // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    countNumber: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    created: function() {
      console.log(1);
    },
    add: function() {
      this.properties.defaultNumber++;
      this.setData({
        defaultNumber: this.properties.defaultNumber
      });
    },
    sub: function() {
      if (this.properties.defaultNumber>1) {
        this.properties.defaultNumber--;
        this.setData({
          defaultNumber: this.properties.defaultNumber
        });
      }
    }
  }  
})