# koa2-demo

[![npm version](https://badge.fury.io/js/koa2-demo.svg)](http://badge.fury.io/js/runkoa)
[![Build](https://travis-ci.org/17koa/koa2-demo.svg?branch=master)](https://travis-ci.org/17koa/koa2-demo)


作者：樊亮
时间：2018/08/07
该项目是koa2 实现简单接口转发的项目，中间参考了诸多大佬们的精华，以及自己设计了一些东西后合并组装成现在这样

## Tech Stack

- Koa 2
- nodemon + runkoa（支持async/await，且不需关心babel）
- pm2 for deployment（服务器部署）
- express-style middlewares
  - koa-router
  - koa-views
  - koa-static
  - koa-bodyparser

## Getting Start

```
git clone https://github.com/Lanveer/koa-project.git
cd koa-project
npm install
npm start

open in browser

http://127.0.0.1:9999/

## 启动方式

最简单启动方式

```
npm start   // 因为在package.json中添加了scripts快捷操作
```


支持pm2部署

```
 #npm run pm2
 pm2 start bin/run 
```
## 支持koa2的3种中间件写法

Koa 2是一个 middleware framework, 它提供了 3 种不同类型的中间件写法

- common function
- async function（新增）
- generatorFunction

详见[koa 2的文档](https://github.com/koajs/koa/blob/v2.x/Readme.md)

koa2 不推荐koa1的function* 写法， 如果想在koa2中继续使用这样写法，可以使用koa-convert这个中间件进行转换， 所以
本项目中会出现

app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(require('koa-static')(__dirname + '/public')));

这样的代码场景


## 项目支持支持view层多种模板



### jade

```
npm i -D jade
```


```
app.use(views(__dirname + '/views', {
  extension: 'jade'
}));
```

### ejs

```
npm i -D ejs
```

in app.js

```
app.use(views(__dirname + '/views-ejs', {
  extension: 'ejs' 
}));
```



## 广告

如果你喜欢express风格的生成，推荐[koa-generator](https://github.com/Lanveer/koa-project)

如果你喜欢作者可以参考[Minimal koa v2 boilerplate.](https://github.com/Lanveer/)