Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: '搜索',
    swiperList:[],
    navList:[],
    floorList:[]
  },
  getUserInfo: function (e) {
    console.log(e)
  },
  getPhoneNumber: function(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播图数据获取
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        this.setData({
          swiperList: res.data.message
        })
      },
    })

    // 导航数据获取
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success:res=>{
        this.setData({
          navList: res.data.message
        })
        // console.log(this.data.navList)
      }
    })

    // 楼层数据获取
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: (res) => {
        this.setData({
          floorList: res.data.message
        })
        // console.log(this.data.floorList)
      }
    })
  },
  onReachBottom() {
    // 下拉触底，先判断是否有请求正在进行中
    console.log(123456)
    // 以及检查当前请求页数是不是小于数据总页数，如符合条件，则发送请求
    if (!this.loading && this.data.page < this.data.pages) {
      this.fetchArticleList(this.data.page + 1)
    }
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
    
  }
})