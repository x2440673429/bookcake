//index.js
//获取应用实例
const app = getApp()
const md5 = require('../../utils/md5.js')


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    city:{
      city:'',
    },
    focus:false,
    display:false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jump:function(){
    wx.navigateTo({//关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
      url: "../details/details"
    })
  },
  go:function(){
    wx.navigateTo({//关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
      url: "../list/list"
    })
  },
  mapcity:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  search:function(){
    this.setData({
      display:true,
      focus: true,
    })
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
      

        var locationString = res.latitude + "," + res.longitude;
        var key1 = 'key=MK5BZ-FXWLK-LB5JX-ALM5G-2VTOQ-56FPB&location=' + res.latitude + ',' + res.longitude
        var md5url = md5.hexMD5('/ws/geocoder/v1?' + key1 + 'pH3jF8ZtPok44ViIwKjfR6av2GfuLI');
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1?' + key1 + '&sig=' + md5url,
          data: {
            "key": "MK5BZ-FXWLK-LB5JX-ALM5G-2VTOQ-56FPB",
            "location": locationString
          },
          method: 'GET',
          success: function (r) {
            //输出一下位置信息
          
            var obj=that.data.city
            obj.city = r.data.result.address_component.city
            
            that.setData({
              city: obj
            })
            app.globalData.city = r.data.result.address_component.city
      
           
            //r.data.result.address获得的就是用户的位置信息，将它保存到一个全局变量上
            // getApp().globalData.locationInfo = r.data.result.address;
            // //这步是将位置信息保存到本地缓存中，key = value的形式
            // try {
            //   wx.setStorageSync('locationInfo', r.data.result.address)
            // } catch (e) {
            //   console.log(e)
            // }
          },
          fail: function (r) {
            wx.showModal({
              title: '提示',
              content: JSON.stringify(r),
              success(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
        });

      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  onShow:function(name){
   
  }

  


 
})
