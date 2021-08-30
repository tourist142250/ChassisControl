// pages/index/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   // input_ip:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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
  /*IPinput:function(v){
    var input_ip 
    this.setData({input_ip:v.detail.value})
    console.log(this.data.input_ip)
  },*/
  clickme:function(p) {
    var ip = p.currentTarget.dataset.ip //this.data.input_ip
    console.log(ip)
    //跳转
    wx.navigateTo({
      url: '/pages/control/control?id='+ip,
    })
  }
})