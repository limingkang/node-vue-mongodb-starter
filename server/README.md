# 项目布局

```
.
├── InitData                        初始化数据
│   ├── activity.js                 餐馆活动
│   ├── category.js                 餐馆分类
│   ├── cities.js                   城市列表
│   ├── delivery.js                 配送方式
│   ├── entry.js                    食品分类
│   ├── explain.js                  解释说明
│   ├── hongbao.js                  红包
│   ├── payments.js                 支付方式
│   ├── rate.js                     评论
│   └── remark.js                   备注列表
├── config                          运行配置
│   ├── default.js                  默认配置
│   └── development.js              开发环境
├── controller                      处理中心，负责路由及数据库的具体操作
│   ├── admin
│   │   └── admin.js                管理员
│   ├── bos
│   ├── eus
│   ├── member
│   │   └── vipcart.js              会员卡
│   ├── payapi
│   ├── promotion
│   │   └── hongbao.js              红包
│   ├── shopping
│   │   ├── category.js             餐馆分类
│   │   ├── food.js                 食品
│   │   └── shop.js                 餐馆
│   ├── statis
│   │   └── statis.js               数据统计
│   ├── ugc
│   │   └── rating.js               评论
│   ├── v1
│   │   ├── address.js              收获地址
│   │   ├── captchas.js             验证码
│   │   ├── carts.js                购物车
│   │   ├── cities.js               城市列表
│   │   ├── order.js                订单
│   │   ├── remark.js               备注
│   │   └── search.js               搜索
│   ├── v2
│   │   ├── entry.js                食品分类
│   │   └── user.js                 用户信息
│   ├── v3
│   │   └── explain.js              解析说明
│   └── v4
├── logs                            日志文件
├── middlewares                     中间价
│   ├── check.js                    权限验证    
│   └── statistic.js                API数据统计
├── models                          模型(数据库)
│   ├── admin
│   │   └── admin.js                管理员模型
│   ├── bos
│   │   └── order.js                订单模型
│   ├── eus
│   ├── ids.js                      用Ids数据集存入数据保证每次每个id的数量不同每次加一
│   ├── member
│   ├── payapi
│   ├── promotion
│   │   └── hongbao.js              红包模型
│   ├── shopping
│   │   ├── activity.js             餐馆活动模型
│   │   ├── category.js             餐馆分类模型
│   │   ├── delivery.js             配送方式模型
│   │   ├── food.js                 食品模型
│   │   └── shop.js                 餐馆模型
│   ├── statis
│   │   └── statis.js               数据统计模型
│   ├── ugc
│   │   └── rating.js               评论模型
│   ├── v1
│   │   ├── address.js              收获地址模型
│   │   ├── cart.js                 购物车模型
│   │   ├── cities.js               城市列表模型
│   │   ├── payments.js             付款方式模型
│   │   └── remark.js               备注模型
│   ├── v2
│   │   ├── entry.js                食品分类模型
│   │   ├── user.js                 用户模型
│   │   └── userInfo.js             用户信息模型
│   ├── v3
│   │   └── explain.js              解释说明模型
│   └── v4
├── mongodb                         连接数据库
│   └── db.js
├── prototype                       基础功能Class
│   ├── addressComponent.js         与腾讯、百度地图API相关的Class
│   └── baseComponent.js            底层类
├── public                          静态资源目录
├── routes                          路由配置
│   ├── admin.js                    管理员
│   ├── bos.js                      订单
│   ├── eus.js                      用户
│   ├── index.js                    路由配置主文件
│   ├── member.js                   会员卡
│   ├── payapi.js                   付款
│   ├── promotion.js                红包
│   ├── shopping.js                 餐馆、食品、Menu
│   ├── statis.js                   数据统计
│   ├── ugc.js                      评论
│   ├── v1.js                       城市、用户、收获地址
│   ├── v2.js                       登陆、退出
│   ├── v3.js                       解释说明
│   └── v4.js                       餐馆
├── screenshots                     项目截图
├── views   
├── .babelrc 
├── .gitignore
├── API.md                          接口文档
├── app.js                          基础配置
├── COPYING                         GPL协议
├── index.js                        入口文件
├── package.json
├── README.md                  
.

```



