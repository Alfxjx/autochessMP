//index.js
//获取应用实例
const app = getApp()

const weaponA = [
  {
    name:'暴风大剑',
    desc:'+20点攻击力',
    pic:'../../assets/0.png',
    num:0
  },
  {
    name:'锁子甲',
    desc:'+20点护甲',
    pic:'../../assets/1.png',
    num:1
  },
  {
    name:'巨人腰带',
    desc:'+200点生命值',
    pic:'../../assets/2.png',
    num:2
  },
  {
    name:'魔尘',
    desc:'无属性加成',
    pic:'../../assets/3.png',
    num:3
  },
  {
    name:'无用大棒',
    desc:'+20%技能伤害',
    pic:'../../assets/4.png',
    num:4
  },
  {
    name:'负极斗篷',
    desc:'+20点魔法抗性',
    pic:'../../assets/5.png',
    num:5
  },
  {
    name:'反曲之弓',
    desc:'+15%攻击速度',
    pic:'../../assets/6.png',
    num:6
  },
  {
    name:'女神之泪',
    desc:'+20法力值',
    pic:'../../assets/7.png',
    num:7
  },
  {
    name:'以太精魄',
    desc:'N/A',
    pic:'../../assets/8.png',
    num:8
  }
]
const weaponB = [
  {
    name:'暴风大剑',
    desc:'+20点攻击力',
    pic:'../../assets/0.png',
    num:0
  },
  {
    name:'锁子甲',
    desc:'+20点护甲',
    pic:'../../assets/1.png',
    num:1
  },
  {
    name:'巨人腰带',
    desc:'+200点生命值',
    pic:'../../assets/2.png',
    num:2
  },
  {
    name:'魔尘',
    desc:'无属性加成',
    pic:'../../assets/3.png',
    num:3
  },
  {
    name:'无用大棒',
    desc:'+20%技能伤害',
    pic:'../../assets/4.png',
    num:4
  },
  {
    name:'负极斗篷',
    desc:'+20点魔法抗性',
    pic:'../../assets/5.png',
    num:5
  },
  {
    name:'反曲之弓',
    desc:'+15%攻击速度',
    pic:'../../assets/6.png',
    num:6
  },
  {
    name:'女神之泪',
    desc:'+20法力值',
    pic:'../../assets/7.png',
    num:7
  },
  {
    name:'以太精魄',
    desc:'N/A',
    pic:'../../assets/8.png',
    num:8
  }
]
const combine = [
  {
    name:'自然之力',
    desc:'+1人口',
    pic:'../../image/combine/0.png',
    combineMap:[3,3]
  },
  {
    name:'破败王者之刃',
    desc:'携带者也是剑士',
    pic:'../../image/combine/1.png',
    combineMap:[3,6]
  },
  {
    name:'饮血剑',
    desc:'+50%吸血效果。',
    pic:'../../image/combine/2.png',
    combineMap:[0,5]
  },
  {
    name:'诅咒之刃',
    desc:'攻击有较低机率缩小敌人，使敌人星级-1',
    pic:'../../image/combine/3.png',
    combineMap:[5,6]
  },
  {
    name:'暗裔',
    desc:'携带者也是恶魔单位。',
    pic:'../../image/combine/4.png',
    combineMap:[3,7]
  },
  {
    name:'龙爪',
    desc:'对抗魔法伤害时获得83%抗性。',
    pic:'../../image/combine/5.png',
    combineMap:[5,5]
  },
  {
    name:'冰霜之心',
    desc:'邻近格子的敌人降低20%攻击速度。',
    pic:'../../image/combine/6.png',
    combineMap:[1,7]
  },
  {
    name:'夺萃之镰',
    desc:'最大法力值-10',
    pic:'../../image/combine/7.png',
    combineMap:[0,7]
  },
  {
    name:'冰霜之锤',
    desc:'携带者也是冰川单位',
    pic:'../../image/combine/8.png',
    combineMap:[2,3]
  },
  {
    name:'守护天使',
    desc:'复活并且回复300生命值。',
    pic:'../../image/combine/9.png',
    combineMap:[0,1]
  },
  {
    name:'鬼索的狂暴之刃',
    desc:'每次攻击增加3%攻击速度，无上限',
    pic:'../../image/combine/10.png',
    combineMap:[4,6]
  },
  {
    name:'海克斯科技枪刃',
    desc:'回复造成伤害的25%生命值。',
    pic:'../../image/combine/11.png',
    combineMap:[0,4]
  },
  {
    name:'沉默之刃',
    desc:'攻击将有较高几率沉默敌人。',
    pic:'../../image/combine/12.png',
    combineMap:[5,7]
  },
  {
    name:'无尽之刃',
    desc:'暴击伤害提高100%。',
    pic:'../../image/combine/13.png',
    combineMap:[0,0]
  },
  {
    name:'离子火花',
    desc:'每当敌人使用技能，他们受到100点伤害。',
    pic:'../../image/combine/14.png',
    combineMap:[4,5]
  },
  {
    name:'骑士之誓',
    desc:'携带者也是骑士单位。',
    pic:'../../image/combine/15.png',
    combineMap:[1,3]
  },
  {
    name:'钢铁烈焰之匣',
    desc:'战斗开始前，所有邻近格子的友军获得一个200点护盾。',
    pic:'../../image/combine/16.png',
    combineMap:[1,4]
  },
  {
    name:'卢登的回声',
    desc:'技能对命中目标造成100点溅射伤害。',
    pic:'../../image/combine/17.png',
    combineMap:[4,7]
  },
  {
    name:'莫雷洛秘典',
    desc:'技能造成灼烧伤害，每秒伤害等同于敌人最大生命值的5%。',
    pic:'../../image/combine/18.png',
    combineMap:[2,4]
  },
  {
    name:'幻影之舞',
    desc:'携带者会闪避所有暴击。',
    pic:'../../image/combine/19.png',
    combineMap:[1,6]
  },
  {
    name:'灭世者的死亡之帽',
    desc:'增加50%技能伤害。',
    pic:'../../image/combine/20.png',
    combineMap:[4,4]
  },
  {
    name:'疾射火炮',
    desc:'携带者的攻击不会被闪避，攻击距离加倍。',
    pic:'../../image/combine/21.png',
    combineMap:[6,8]
  },
  {
    name:'红BUFF',
    desc:'攻击造成2.5%的灼烧伤害。',
    pic:'../../image/combine/22.png',
    combineMap:[1,8]
  },
  {
    name:'救赎',
    desc:'死亡时，治疗附近所有友军1000点生命值。',
    pic:'../../image/combine/23.png',
    combineMap:[2,7]
  },
  {
    name:'卢安娜的飓风',
    desc:'普攻对额外2个目标造成伤害，这些额外攻击造成50%的伤害。',
    pic:'../../image/combine/24.png',
    combineMap:[3,5]
  },
  {
    name:'炽天使之拥',
    desc:'每次有技能被施放时，回复20%法力值。',
    pic:'../../image/combine/25.png',
    combineMap:[7,7]
  },
  {
    name:'朔极之矛',
    desc:'在使用技能后，携带者的每次攻击回复20%最大法力值。',
    pic:'../../image/combine/26.png',
    combineMap:[6,7]
  },
  {
    name:'斯塔缇克电刃',
    desc:'每3次攻击，造成100点溅射魔法伤害。',
    pic:'../../image/combine/27.png',
    combineMap:[5,8]
  },
  {
    name:'破刃者',
    desc:'攻击将有几率缴械敌方单位。',
    pic:'../../image/combine/28.png',
    combineMap:[1,5]
  },
  {
    name:'神圣之剑',
    desc:'携带者每秒有5%的几率获得100%暴击率。',
    pic:'../../image/combine/29.png',
    combineMap:[0,6]
  },
  {
    name:'荆棘之甲',
    desc:'攻击伤害反弹25%。',
    pic:'../../image/combine/30.png',
    combineMap:[1,1]
  },
  {
    name:'巨型九头蛇',
    desc:'攻击对敌人造成携带者10%最大生命值的溅射伤害。',
    pic:'../../image/combine/31.png',
    combineMap:[2,6]
  },
  {
    name:'狂徒铠甲',
    desc:'每秒恢复2.5%自身最大生命值。',
    pic:'../../image/combine/32.png',
    combineMap:[2,2]
  },
  {
    name:'悠米',
    desc:'携带者也是法师单位。',
    pic:'../../image/combine/33.png',
    combineMap:[3,4]
  },
  {
    name:'幽梦之灵',
    desc:'携带者也是刺客单位。',
    pic:'../../image/combine/34.png',
    combineMap:[0,3]
  },
  {
    name:'基克的先驱',
    desc:'临近格子的友军获得12.5%攻击速度。',
    pic:'../../image/combine/35.png',
    combineMap:[0,2]
  },
  {
    name:'灵风',
    desc:'战斗开始时，放逐1个敌人持续5秒。',
    pic:'../../image/combine/36.png',
    combineMap:[2,5]
  }
]

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    weaponA: weaponA,
    weaponB: weaponB,
    weaponAOut:{type:Number},
    weaponBOut:{type:Number},
    val:[],
    value: [3,2],
    combine:{
      name:'装备名称',
      desc:''
    },
    hint:'滑动上面的两个拨轮合成装备'
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  bindChange: function(e) {
    const val = e.detail.value
    // console.log(val)
    this.setData({
      weaponAOut: this.data.weaponA[val[0]],
      weaponBOut: this.data.weaponB[val[1]],
      hint:''
    })
    combine.forEach((e)=>{
      if(val[1]==8) {
        if(val[0]==6){
          this.setData({
            combine: {
              name:'疾射火炮',
              desc:'携带者的攻击不会被闪避，攻击距离加倍。'
            }
          })
        } else if(val[0]==5){
          this.setData({
            combine: {
              name:'斯塔缇克电刃',
              desc:'每3次攻击，造成100点溅射魔法伤害。'
            }
          })
        }else if(val[0]==1){
          this.setData({
            combine: {
              name:'红BUFF',
              desc:'攻击造成2.5%的灼烧伤害。'
            }
          })
        }else{
          this.setData({
            combine: {name:'无装备', desc:''}
          })
        }
      }
      if(val[0]==8) {
        if(val[1]==6){
          this.setData({
            combine: {
              name:'疾射火炮',
              desc:'携带者的攻击不会被闪避，攻击距离加倍。'
            }
          })
        } else if(val[1]==5){
          this.setData({
            combine: {
              name:'斯塔缇克电刃',
              desc:'每3次攻击，造成100点溅射魔法伤害。'
            }
          })
        } else if(val[1]==1){
          this.setData({
            combine: {
              name:'红BUFF',
              desc:'攻击造成2.5%的灼烧伤害。'
            }
          })
        } else{
          this.setData({
            combine: {name:'无装备', desc:''}
          })
        }
      }
      if(val[0]==e.combineMap[0]&&val[1]==e.combineMap[1]
          ||val[0]==e.combineMap[1]&&val[1]==e.combineMap[0]){
            this.setData({
              combine: e
            })
          }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
