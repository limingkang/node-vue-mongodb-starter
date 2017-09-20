# About

一直好奇一个功能齐全的完整Nodejs项目应该如何写，该项目主要参考GitHub上的一个项目做些调整，这是一个很好的全栈开发
入门的项目，涉及的功能点也比较完善。


# 说明

>  接口文档:          [接口文档地址](https://github.com/bailicangdu/node-elm/blob/master/API.md) 

>  server参考项目：   [前端项目地址](https://github.com/bailicangdu/node-elm) 

>  front参考项目：    [前端项目地址](https://github.com/bailicangdu/vue2-elm)   

>  manage参考项目：   [后台管理系统地址](https://github.com/bailicangdu/back-manage)   

>  react-native:      [react-native 构建的原生APP](https://github.com/bailicangdu/RN-elm)


## server项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node (6.0 及以上版本)
2、mongodb (开启状态)
3、GraphicsMagick (裁切图片)
```

```

cd  server

npm install

npm run dev

访问: http://localhost:8001 查看效果

```


## manage项目运行


```

cd manage  

npm install

npm run dev (访问线上后台系统)

npm run local (访问本地后台系统，需运行server后台系统)


访问: http://localhost:8002

```


## front项目运行


```

cd  front

npm install

npm run dev (访问线上后台系统)

npm run local (访问本地后台系统，需运行server后台系统)

```