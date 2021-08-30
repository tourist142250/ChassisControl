//返回导航状态异步
const myhttp = (url, data, methods) => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: `${url}`,
      method: `${methods}`,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode != 200) {
          reject({
            error: '服务器忙，请稍后重试',
            code: 500
          });
          return;
        }
        resolve(res.data);
      },
      fail: function (res) {
        console.log(res)
        // fail调用接口失败
        reject({
          error: '网络错误',
          code: 0
        });
      }
    })
  })
}

module.exports = myhttp

//获取用户用户名
/*const getUserInfo = () =>{
  return new Promise(function(resolve,reject){
    console.log("用户名")
    var nickName = '';
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        nickName = userInfo.nickName
        console.log(nickName)
         //this.setData({uid: nickName})
        resolve(res)
      },
      fail: function (res) {
        console.log(res)
        reject({
          error:'网络错误',
          code: 0 
        })
      }
    })
  })
}

module.exports = getUserInfo */