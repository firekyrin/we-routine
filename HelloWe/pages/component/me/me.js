Page({
    data: {
        menuList: [
            {
                avatar: 'http://www.th7.cn/d/file/p/2014/05/26/1d05bd3d4a8ff7301f755548ff488deb.png',
                name: 'xxx',
                id: '999912345',
                url: '../personal-infomation/personal-infomation'
            },
            {
                avatar: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/setting.png?t=20161102',
                name: 'yyy',
                id: '9999123456',
                url: '../personal-infomation/personal-infomation'
            },
            {
                avatar: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/setting.png?t=20161102',
                name: 'zzz',
                id: '999912345',
                url: '../personal-infomation/personal-infomation'
            },
            {
                avatar: 'http://www.th7.cn/d/file/p/2014/05/26/1d05bd3d4a8ff7301f755548ff488deb.png',
                name: '收藏夹',
                url: '../personal-infomation/personal-infomation'
            }
        ]
    },
    tapMenuItem: function (e) {
        var menuItem = this.data.menuList[parseInt(e.currentTarget.id)]

        console.log('yyyyyyyyyyyy')
        
        if (menuItem.url) {
            wx.navigateTo({url: menuItem.url})
        }
    }
})