var app = getApp()
 
Page({
  data:{
    
  },
  onLoad:function(){
    var that =this;
    wx.request({
      url: 'http://movie.1808a.com/ironman',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.result)
        that.setData(
          {
            list: res.data.result
          }
        )
      }
    })
  }
  
})