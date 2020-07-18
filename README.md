# WHITE
![](https://cdn.jsdelivr.net/gh/fushaolei/img/20200630015134.png)

[Live Demo](https://sorryfu.top/) | [更新日志](https://sorryfu.top/2020/07/18/white%E4%B8%BB%E9%A2%98%E5%BC%80%E5%8F%91%EF%BC%88%E6%9B%B4%E6%96%B0ing%EF%BC%89/)

## 配置

```yml

# main menu navigation
menu:
  主页: /
  博文: /archives

site_name: Sorryfu Blog #网站的名称
author: Sorryfu  #文章的默认作者
icon: https://cdn.jsdelivr.net/gh/fushaolei/img/20200524104925.jpg #标签页图标

#自我介绍
intro:
  title: Sorryfu.
  sub:  #个性签名，可选填

#文章toc索引栏设置
toc:
  max: 3 #最大
  min: 2 #最小


#主页的按钮，默认是不跳转的连接，如有需要可去home.ejs里修改
home:
  Blog: /archives

#联系方式  
#更多图标：https://remixicon.com/
contact:
  Email: 
    - mailto:1563250958@qq.com
    - ri-mail-line
  Github:
    - https://github.com/FuShaoLei
    - ri-github-line

#友链
link:
  example: https://example.com/

# Valine评论系统
valine:
  open: true # true | false 是否打开，默认false
  appid:   #Leancloud应用的AppID  这里和下面的要换成你自己的啊QAQ
  appkey:  #Leancloud应用的AppKey
  verify: false #验证码
  notify: true #评论回复提醒
  avatar: robohash #评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
  #头像类型可见： https://valine.js.org/avatar.html
  placeholder: 留下你来过的痕迹~ #评论框占位符

plugins:
  # 代码高亮，想要使用代码高亮，得先把根目录的_config.yml里的highlight的enable置成false
  highlightjs:
    js: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js
    css: https://cdn.jsdelivr.net/npm/highlight.js@10.1.1/styles/vs2015.css
    # more: https://www.jsdelivr.com/package/npm/highlight.js?path=styles
```

### Front-matter可选配置

```yml
toc: true #可选 true 或者 false
author: 某某 #默认为主题_config.yml中的作者
comments: true #可选 true 或者 false
```

另外友链页面的话，要新建一个page
然后按如下配置：
```yml
layout: friend
```
## CONTACT
- 1563250958@qq.com
