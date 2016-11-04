Page({
    data: {
        menuList: [
            {
                name: '开放接口',
                APIList: [
                    {
                        zhName: '微信登录',
                        enName: 'login'
                    },
                    {
                        zhName: 'huo qu yong hu xin xi',
                        enName: 'getUserInfo'
                    }, 
                    {
                        zhName: 'fa qi zhi fu',
                        enName: 'requestPayment'
                    }
                ],
                opened: false
            },
            {
                name: 'jie mian',
                opened: false,
                APIList: [
                    {
                        zhName: 'she zhi jie mian biao ti',
                        enName: 'setNavigationBarTitle'
                    },
                    {
                        zhName: 'biao ti lan jia zai dong hua',
                        enName: 'navigationBarLoading'
                    },
                    {
                        zhName: 'ye mian tiao zhuan',
                        enName: 'navigateTo, navigateBack, redirectTo'
                    },
                    {
                        zhName: 'xia la shua xin',
                        enName: 'pullDownRefresh'
                    },
                    {
                        zhName: 'chuang jia dong hua',
                        enName: 'createAnimation'
                    },
                    {
                        zhName: "chuang jian hui hua",
                        enName: 'createContext'
                    }
                ]
            },
            {
                name: 'she bei',
                opened: false,
                APIList: [
                    {
                        zhName: 'huo qu shou ji wang luo zhuang tai',
                        enName: 'getNetworkType'
                    },
                    {
                        zhName: 'huo qu shou ji xi tong xin xi',
                        enName: 'getSystemInfo'
                    },
                    {
                        zhName: 'jian ting zhong li gan ying shu ju',
                        enName: 'onAccelerometerChange'
                    }
                ]
            },
            {
                name: 'wang luo',
                opened: false,
                APIList: [
                    {
                        zhName: 'fa qi yi ge qing qiu',
                        enName: 'request'
                    },
                    {
                        zhName: 'WebSocket',
                        enName: 'WebSocket'
                    }
                ]
            }
        ]
    },
    tapMenuItem: function (e) {
        var menuItem = this.data.menuList[parseInt(e.currentTarget.id)]
        if (menuItem.url) {
            wx.navigateTo({url: menuItem.url})
        }
        else {
            var changeData = {}
            var opened = menuItem.opened
            var index = parseInt(e.currentTarget.id)

            if (opened === false) {
                var openedIndex = -1;
                this.data.menuList.forEach(function (menu, i) {
                    if (menu.opened === true) {
                        openedIndex = i
                    }
                })
                if (openedIndex > -1) {
                    changeData['menuList[' + openedIndex + '].opened'] = false
                }
            }

            changeData['menuList[' + index + '].opened'] = !opened
            this.setData(changeData)
        }
    }
})