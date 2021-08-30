// pages/control/control.js
const myhttp = require('./util')
//const getUserInfo = require('./util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ip:'',
    goallist:[],
    value2:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      ip:options.id
    })
    console.log(this.data.ip)
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
  //获取目标点列表
  receivelist:function() {
    //getUserInfo().then((res) =>{
      //console.log(res)
      //var nickName = res.userInfo.nickName
      //console.log(nickName) 
    
   //if (nickName == '微信用户'){
    var that=this
    wx.request({
      url:'http://'+this.data.ip+'/reeman/android_target',
      //url: 'http://'+'192.168.3.228'+'/reeman/android_target',
      method:'GET',
      dataType:'json',
      responseType:'text',
      headers: {
        'Content-Type': 'application/json'
      },
      success:function(res) {
        console.log(res.data)
        that.setData({
          goallist:res.data,
        })
      }
   /*}else{
    wx.showToast({
      title: '您没有权限进行操作',
      icon:'none',
      duration:5000
    })
  }*/
  })
  },
/*
  //封装的返回导航状态函数
  condition:function(){
    return new Promise(function(resovle){
       //返回导航状态
      var result = 0
      wx.request({
        url: 'http://'+this.data.ip+'/reeman/movebase_status',
        header: {'content-type': 'application/json'},
        method:'GET',
        success(res){
        //console.log(res.data);
        resovle(res)
        result = res.data.status;
        //console.log(res.data.status);
        console.log("return by requset"+result)
        }
      })
    })
  },*/

  //导航函数
  guide:function (v){
    var result=0;
   //console.log("开始读取状态:"+result)
    myhttp('http://'+this.data.ip+'/reeman/movebase_status',{},'GET').then((res) => {
       console.log(res) 
       result=res.status
       //console.log("result=:"+result)
       if(result!=1){
         //弹出提示框：机器正在路上
         wx.showToast({
           title: '机器正在路上',
           icon:'none',
           duration:3000
         })
         //发送导航请求
        let value = v.currentTarget.dataset.value
        myhttp('http://'+this.data.ip+'/cmd/nav_point',{"point":value},'POST')
      }else{
        //弹出提示框：机器忙碌中
        wx.showToast({
          title: '机器忙碌中',
          icon:'none',
          duration:5000
        })
      }
      })        
    //console.log("读取状态结束:"+result)
    /*if (result == 1) {
      console.log("guiding status:"+result)
    }else{
      console.log(result)
      let value = v.currentTarget.dataset.value
      console.log("目标:"+value)
      var jsonobj = {"point":value};
      wx.request({
        url: 'http://'+this.data.ip+'/cmd/nav_point',
        header: {'content-type': 'application/json'},  
        data:jsonobj,
        method:'POST',
        success:function(res){
          console.log(res.data)
        }
      })
    }*/
  }    
})
