// pages/form/index.js
const app = getApp()
Page({
  data: {
    email:"",
    title:"",
    desc:"",
    result:"",
    error:"",
    openId:""
  },
  emailInput:function(e){
    this.setData({
      email: e.detail.value
    })
  },
  titleInput:function(e){
    this.setData({
      title: e.detail.value
    })
  },
  descInput:function(e){
    this.setData({
      desc: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option){
    console.log(app.globalData.userInfo.nickName);
    this.setData({
      openId: app.globalData.openId,
    })
    // console.log(option.query)
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //   console.log(data)
    // })
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  submitCase: function(){
    // 检查用户输入
    this.setData({
      error:""
    })
    if (this.data.email.length == 0) {
      this.setData({
        error:"email不能为空"
      })
    } else if (this.data.title.length == 0) {
      this.setData({
        error:"title不能为空"
      })
    }  else if (this.data.desc.length == 0) {
      this.setData({
        error:"desciption不能为空"
      })
    } else {
      var that = this;
      // 提交case
      wx.request({
        url: 'http://47.101.58.35/api/wechat/submitCase',
        data:{
          openId:app.globalData.openId,
          email:this.data.email,
          title:this.data.title,
          desc:this.data.desc,
        },
        method:"POST",
        success: function(res) {
          console.log(res.data)// 服务器回包信息
          wx.showToast({ // 显示Toast
            title: '已发送',
            icon: 'success',
            duration: 1500
          })
          wx.requestSubscribeMessage({
            tmplIds: ['1LzItjEHmZRygNk87kiYYH0T_rdEu71wR-RUERL2nSE','lsmCrmrQTYRSflS-uh4NuokYAx1UT7OBRcpswPA2xBE'],
            success (response) {
              console.log(response);
              that.setData({
                result:JSON.stringify({
                  email:that.data.email,
                  title:that.data.title,
                  desc:that.data.desc,
                  openId:app.globalData.openId,
                  subscribeMessage:response
                })
              })
            }
          })
        }
      })
    }
    // wx.hideToast() // 隐藏Toast
  }
},
)