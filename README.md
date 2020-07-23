# <div align="center">White</div>

<p align="center">
一款在极简和个性之间徘徊的Hexo主题
<br>
<a href="https://sorryfu.top/">Demo</a>  |  <a href="https://github.com/FuShaoLei/hexo-theme-white/issues/3">更新日志</a>  
</p>

![](https://cdn.jsdelivr.net/gh/fushaolei/img2/20200722190113.png)


## 使用说明
如果你是hexo小白，推荐你去看这篇文章： [使用 Github Pages 和 Hexo 搭建自己的独立博客【超级详细的小白教程】](https://blog.csdn.net/qq_36759224/article/details/82121420)

### 安装

```bash
git clone https://github.com/FuShaoLei/hexo-theme-white.git themes/white
```
然后修改你根目录的`_config.yml`为
```yml
theme: white
```

### 配置
> 请仔细阅读后使用💖

```yml
########## 关于主页的设置 ##########
# icon
icon: https://cdn.jsdelivr.net/gh/fushaolei/img/20200524104925.jpg #标签页图标
#  header
site_name: Sorryfu.

menu:
  HOME: /
  BLOG: /archives


# 自我介绍
intro:
  title: Hi.I'm Sorryfu.
  sub: '[Android Developer]()' # markdown语法
  avator: https://cdn.jsdelivr.net/gh/fushaolei/img/20200524104925.jpg #头像
  author: Sorryfu #所有文章的默认作者

# 联系方式  
# 更多图标：https://remixicon.com/
contact:
  Music:
    - https://music.163.com/#/user/home?id=559125633
    - ri-disc-line
  Bilibili:
    - https://space.bilibili.com/286672419
    - ri-bilibili-line
  Email: 
    - mailto:1563250958@qq.com
    - ri-mail-line
  Github:
    - https://github.com/FuShaoLei
    - ri-github-line


########## 关于文章的设置 ##########

# 文章toc索引栏设置
toc:
  max: 2 #最大
  min: 2 #最小

# 插件
plugins:
  # 代码高亮，想要使用代码高亮，得先把根目录的_config.yml里的highlight的enable置成false
  highlightjs:
    js: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js
    css: https://cdn.jsdelivr.net/npm/highlight.js@10.1.1/styles/github.css
    # more: https://www.jsdelivr.com/package/npm/highlight.js?path=styles

# 评论系统设置
comments:
  valine:
    open: false # true | false 是否打开
    appid: #Leancloud应用的AppID  这里和下面的要换成你自己的啊QAQ
    appkey: #Leancloud应用的AppKey
    verify: false #验证码
    notify: true #评论回复提醒
    avatar: robohash #评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
    #头像类型可见： https://valine.js.org/avatar.html
    placeholder: 留下你来过的痕迹~ #评论框占位符
  gitalk:
    open: true # true | false 是否打开
    owner:  #Github 用户名,
    repo:   #储存评论issue的github仓库名
    admin:  #Github 用户名
    clientID: #`Github Application clientID`
    clientSecret: #`Github Application clientSecret`
  



############## 其他 ##############

# 页脚
footer: Power by [Hexo](http://hexo.io/) Theme by [White](https://github.com/FuShaoLei/hexo-theme-white) # markdown语法

```
### front-matter可选配置
```md
toc: false #关闭文章导航
comments: false #关闭文章评论
cover: #设置文章封面图
```

### layout可选配置

#### gitalk-saysay
```
layout: gitalk-saysay
cover: #可选封面
```
把相对的issue设置为locked 就只能自己评论啦，相当于一个说说页面

## 特性

- 内置`valine` 和 `gitalk`评论系统
- 文章索引
- 文章尾有分类文章


## 其他

如果你喜欢我的主题，欢迎star⭐和fork

如果你有什么意见或建议有欢迎[在此留言](https://github.com/FuShaoLei/hexo-theme-white/issues/4)

## 联系

1563250958@qq.com


## Stargazers over time

[![Stargazers over time](https://starchart.cc/FuShaoLei/hexo-theme-white.svg)](https://starchart.cc/FuShaoLei/hexo-theme-white)



