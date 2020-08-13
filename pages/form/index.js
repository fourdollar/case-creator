// pages/form/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:"",
    title:"",
    desc:"",
    result:"",
    error:""
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
  submitCase: function(){
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
      this.setData({
        result:JSON.stringify({
          email:this.data.email,
          title:this.data.title,
          desc:this.data.desc
        })
      })
      wx.showToast({ // 显示Toast
        title: '已发送',
        icon: 'success',
        duration: 1500
      })
    }
    console.log({
      email:this.data.email,
      title:this.data.title,
      desc:this.data.desc
    })
    // wx.hideToast() // 隐藏Toast
  }
},
)