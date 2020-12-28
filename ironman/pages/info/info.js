var app = getApp()
 
Page({
  data:{
    title:"影片名称",
    score:"评分",
    number:"评论数"
  },
  onLoad:function(){
    var that =this;
    wx.request({
      url: 'http://movie.1808a.com/info?id=1',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.result)
        that.setData(
          {
           list: res.data.result
          }
        )
      }
    })
  }
  
})