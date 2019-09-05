
const Mock = require('./mock.js')

var obj={
   'fenlei':{
      '0|6-10':[
        {
          'img|1': [
                  'https://yy.kpzs.com/upload/image/1908141206031322.png',
                  'https://yy.kpzs.com/upload/image/1908141206281805.png',
                  'https://yy.kpzs.com/upload/image/1908141206389742.png',
                  ],
          'name':'@ctitle(4,6)' ,
          'money|100-400':100
        }
      ],
      '1|6-10': [
        {
          'img|1': [
            'https://yy.kpzs.com/upload/image/1908141206031322.png',
            'https://yy.kpzs.com/upload/image/1908141206281805.png',
            'https://yy.kpzs.com/upload/image/1908141206389742.png',
          ],
          'name': '@ctitle(4,6)',
          'money|100-400': 100
        }
      ],
      '2|6-10': [
        {
          'img|1': [
            'https://yy.kpzs.com/upload/image/1908141206031322.png',
            'https://yy.kpzs.com/upload/image/1908141206281805.png',
            'https://yy.kpzs.com/upload/image/1908141206389742.png',
          ],
          'name': '@ctitle(4,6)',
          'money|100-400': 100
        }
      ],
      '3|6-10': [
        {
          'img|1': [
            'https://yy.kpzs.com/upload/image/1908141206031322.png',
            'https://yy.kpzs.com/upload/image/1908141206281805.png',
            'https://yy.kpzs.com/upload/image/1908141206389742.png',
          ],
          'name': '@ctitle(4,6)',
          'money|100-400':100
        }
      ],
    },
    'mycollection':{
      'mysc|6-10':[
        {
          'img|1': [
            'https://yy.kpzs.com/upload/image/1908141206031322.png',
            'https://yy.kpzs.com/upload/image/1908141206281805.png',
            'https://yy.kpzs.com/upload/image/1908141206389742.png',
          ],
          'name': '@ctitle(4,6)',
          'engname': '@ctitle(4,6)',
          'money|100-400': 100
        }
      ]
    }
    

}


function getmockdata(type){
  return new Promise(function(resolve,reject){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function(){
      var data = Mock.mock(obj[type])
      wx.hideLoading()
      resolve(data)
    },600)

  })
}





module.exports={
  'getmockdata': getmockdata
}