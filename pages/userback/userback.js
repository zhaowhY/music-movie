
var index = 0; 
var str = {};
Page({
  data: { 
    
  },

  formSubmit:function(e){  
    wx.showToast({
      title: "提交成功",
      duration: 1000,
      icon: "success"
    })
 
    str[index]=e.detail.value;
   index++;
    wx.setStorageSync('key', str);
  }
})