
Page({
    data: {
        latitude: 23.099994,
        longitude: 113.324520,
        inputFocus: false, // input 框的focus状态
        searchText: '', // input 框的输入内容
        inputInfo: '搜索', // cover-view 显示的 input 的输入内容

        selectHeight: 'height: 40px', // select 组件的高度
        selectList: [1, 2, 3, 4, 5, 6, 7, 8, 9], // select 组件的可选项
        selectInfo: '选择'  // cover-view 显示的选中的内容
    },
    onReady: function (e) {
        this.mapCtx = wx.createMapContext('myMap')
    },
    /**
     * 将焦点给到 input
     */
    tapInput() {
        this.setData({
            inputInfo: '',
            inputFocus: true
        });
    },
    /**
     * input 失去焦点后将 input 的输入内容给到cover-view
     */
    blurInput(val) {
        this.setData({
            inputInfo: val.detail.value || '搜索'
        });
    },
    /**
     * 显示 select
     */
    tapSelect() {
        this.setData({
            selectHeight: 'max-height: 200px'
        });
    },
    /**
     * 关闭 select
     */
    tapSelectClose() {
        this.setData({
            selectHeight: 'height: 40px'
        });
    },
    /**
     * 将选中的 select 内容给到 cover-view
     */
    selectItem(e) {
        let selected = e.currentTarget.dataset.item;
        this.setData({
            selectInfo: selected
        });
    }
})