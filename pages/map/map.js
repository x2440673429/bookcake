// pages/map/map.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'热门城市',
        hotcity:[
          {
            id:0,
            city: '北京',
          },
          {
            id: 1,
            city: '上海',
          },
          {
            id: 2,
            city: '武汉',
          },
          {
            id: 3,
            city: '深圳',
          },
          {
            id: 4,
            city: '成都',
          },
          {
            id: 5,
            city: '广州',
          },
          {
            id: 6,
            city: '成都',
          },
          {
            id: 7,
            city: '成都',
          },
        ]
      },
    ],
    allcity1:[
      {
        name: '所有城市',
        hotcity: [
          {
            id: 0,
            city: 'A',
          },
          {
            id: 1,
            city: 'B',
          },
          {
            id: 2,
            city: 'C',
          },
          {
            id: 3,
            city: 'D',
          },
          {
            id: 4,
            city: 'E',
          },
          {
            id: 5,
            city: 'F',
          },
          {
            id: 6,
            city: 'G',
          },
          {
            id: 7,
            city: 'H',
          },
          {
            id: 8,
            city: 'J',
          },
          {
            id: 9,
            city: 'K',
          },
          {
            id: 10,
            city: 'L',
          },
          {
            id: 11,
            city: 'M',
          },
          {
            id: 12,
            city: 'N',
          },
          {
            id: 13,
            city: 'P',
          },
          {
            id: 14,
            city: 'Q',
          },
          {
            id: 15,
            city: 'R',
          },
          {
            id: 16,
            city: 'S',
          },
          {
            id: 17,
            city: 'T',
          },
          {
            id: 18,
            city: 'W',
          },
          {
            id: 19,
            city: 'X',
          },
          {
            id: 20,
            city: 'Y',
          },
          {
            id: 21,
            city: 'Z',
          }
        ]
      }
    ],
    allcity:[
      {
        start:'A',
        city:[
          {
            name:'阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'B',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'C',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'D',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'D',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'E',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'F',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'G',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'H',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'J',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'K',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'L',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'M',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'N',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'P',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'Q',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'R',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'S',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'T',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'W',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'X',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'Y',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
      {
        start: 'Z',
        city: [
          {
            name: '阿拉善盟',
          },
          {
            name: '鞍山',
          },
          {
            name: '安庆',
          },
          {
            name: '安阳',
          },
          {
            name: '阿坝藏族',
          },
        ]
      },
    ],
    scrolltop:0,
  },

  jump:function(item){
    var city = item.currentTarget.dataset.item.city
    var that=this
    wx.createSelectorQuery().select('#'+city).boundingClientRect(function (rect) {
      console.log(111,rect)

      that.setData({
        scrolltop:rect.top
      })
      

    }).exec()

  },

  getname:function(name){
    console.log(1111,name)
    var name = name.currentTarget.dataset.name
    let pages = getCurrentPages();
    app.globalData.city=name
    console.log(999, pages)
    pages[0].setData({
      city:name
    })
    wx.navigateBack({
      url: '/pages/index/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})