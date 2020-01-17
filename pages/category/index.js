// pages/category/index.js
Page({
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    cateList: [],
    activeIndex: 0,
    goodsList: [],
    scrollHeight:0
  },
  handleTap(e) {
    let index = e.target.dataset.index
    this.setData({
      activeIndex: index,
      goodsList: this.data.cateList[index].children
    })
    // console.log(e.target.dataset.index)

  },
  
  calculateScrollViewHeight() {
    let that = this;
    // console.log(systemInfo)
    let query = wx.createSelectorQuery().in(this)
    //根据节点id查询节点部分的高度（px单位）
    query.select('#header').boundingClientRect();
    

    query.exec((res) => {
      // 分别取出节点的高度
      let headerHeight = res[0].height;
      // 然后窗口高度（wx.getSystemInfoSync().windowHeight）减去其他不滑动界面的高度
      let scrollViewHeight = wx.getSystemInfoSync().windowHeight -
        headerHeight
      // console.log(scrollViewHeight)
      // 算出来之后存到data对象里面
      that.setData({
        scrollHeight: scrollViewHeight
      });
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

    this.calculateScrollViewHeight()


    // 获取分类数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/categories',
      success: (res) => {
        let index = this.data.activeIndex
        this.setData({
          cateList: res.data.message,
          goodsList: res.data.message[index].children
        })

        // console.log(this.data.cateList)
      }
    })
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