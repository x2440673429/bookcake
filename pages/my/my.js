// pages/my/my.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Headportrait:'../images/headportrait.png',
    name:'',
    binding:'绑定手机',
  },
  goto:function(numb){
    var selectindex = numb.currentTarget.dataset.numb
    this.ifgetuserinfo(function(){
      wx.navigateTo({
        url: '/pages/myorder/myorder?numb=' + selectindex,
      })
    })
  },
  goto1:function(){
    this.ifgetuserinfo(function () {   
    wx.navigateTo({
      url: '/pages/mycollection/mycollection',
    })
    })
  },
  goto2: function () {
    this.ifgetuserinfo(function () {   
    wx.navigateTo({
      url: '/pages/Coupon/Coupon',
    })
    })
  },
  goto3: function () {
    this.ifgetuserinfo(function () {   
    wx.navigateTo({
      url: '/pages/AddressManagement/AddressManagement',
    })
    })
  },
  mobilphone:function(e){
    console.log(11111111,e)
    if(e){
      wx.navigateTo({
        url: '/pages/verification/mobileverification',
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '是否解除当前的手机号码？'
      })
    }
    
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
    this.setData({
      Headportrait: app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : '../images/headportrait.png',
      name: app.globalData.userInfo ? app.globalData.userInfo.nickName : '',
    })
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
  //判断是否授权
  ifgetuserinfo(callback){
    if (app.globalData.userInfo == null) {
      wx.navigateTo({
        url: '/pages/tograntauthorization/tograntauthorization',
      })
    }else{
      callback()
    }
  }
})