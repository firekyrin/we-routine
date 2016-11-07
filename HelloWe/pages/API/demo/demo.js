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
            }
        ]
    },
    onLoad: function () {
        console.log('xxx')
    }
})