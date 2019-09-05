// pages/tograntauthorization/tograntauthorization.js
const app= getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  bindGetUserInfo: function (user){
    console.log(111,user);
    app.globalData.userInfo = user.detail.userInfo
    if (user.detail.userInfo) {
      console.log("点击了同意授权");
      wx.redirectTo({
        url: "/pages/verification/mobileverification",
      })
    } else {
      console.log("点击了拒绝授权");
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