// pages/classification/classification.js
const app = getApp()
const mocktype = require("../../utils/testdata.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    selectindex:'0',//定义一个选中菜单
    city:{
     city:'', 
    },
  },


  qiehuan: function (e) {
    // this.addclass('xuanzhong');
    // console.log(222, e)
    var key = e.currentTarget.dataset.index;
    this.setData({
      selectindex: key
    })
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订蛋糕',
    })
    var obj=this.data.city
    obj.city = app.globalData.city
    this.setData({
      city: obj,
    })
    var that = this;
    mocktype.getmockdata('fenlei').then(function(res){
      console.log(1111, res)
      that.setData({
        list: res
      })
    })




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

  },
  loadmore:function(){
    
    
    if (this.data.list[this.data.selectindex].length>=50){
      return
    }
    var that = this;
    mocktype.getmockdata('fenlei').then(function (res) {
      // console.log(1111, res)
      var newarr = that.data.list[that.data.selectindex];//原list对象第几个数组
      newarr = newarr.concat(res[that.data.selectindex])//原来的第几个数组添加新数组
      var oldlist = JSON.parse(JSON.stringify(that.data.list));//原来的数组对象(深拷贝)
      oldlist[that.data.selectindex] = newarr;//最新的数组对象
       console.log(54454545, newarr)
        that.setData({
          list: oldlist
        })
     
    })
  }
  
})