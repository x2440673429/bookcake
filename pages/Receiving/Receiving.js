// pages/Receiving/Receiving.js
const shengs = ['山西省', '晋中市', '和顺县']
const shis = ['山西省', '晋中市', '和顺县']
const qus = ['山西省', '晋中市', '和顺县']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    txt:'',
    value: ['山西省', '晋中市', '和顺县'],
    shengs: shengs ,
    shis: shis,
    qus: qus,
    sheng:'',
    shi:'',
    qu:''
  },
  bindChange: function (e) {
    console.log(111,e)
    const val = e.detail.value
    this.setData({
      sheng: this.data.shengs[val[0]],
      shi: this.data.shis[val[1]],
      qu: this.data.qus[val[2]]
    })
  },
  Preservation:function(){
    if (this.data.name==''){
      wx.showToast({
        title: '请填写联系人',
        icon: 'none',
      })
    } else if (this.data.phone==''){
      wx.showToast({
        title: '请填写联系人手机号码',
        icon: 'none',
      })
    } else if (this.data.txt.length<5) {
      wx.showToast({
        title: '请填写联系人详细地址（大于5个子）~',
        icon: 'none',
      })
    }else{
      wx.redirectTo({
        url: '/pages/AddressManagement/AddressManagement?name=' + this.data.name + '&phone=' + this.data.phone +'&txt=' + this.data.txt,
      })
    }
  },
  inputeidt:function(e){
    var val = e.detail.value;
    var item = e.currentTarget.dataset.item
    this.data[item] = val
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