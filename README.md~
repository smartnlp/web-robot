# web-robot
聊天机器人网页端实现（支持手机自适应）。纯前端代码，不涉及后台。

演示：[http://www.smartnlp.cn/demo.html](http://www.smartnlp.cn/demo.html)

网页端聊天机器人页面，支持多种模式显示：
```sh
- 右侧小的弹出式聊天窗口
- 全屏幕大聊天窗口
- 手机端自适显示
- 人工客服支持
```
## 效果预览：

(1) 弹出式聊天窗口

![slide_window](http://www.smartnlp.cn/little.jpg)

(2) 全屏聊窗口

![big_window](http://www.smartnlp.cn/big.jpg)

(3) 手机端

![phone_window](http://www.smartnlp.cn/phone.jpg)

(4) 人工客服入口：http://kf.smartnlp.cn

![kf_window](http://www.smartnlp.cn/kf.jpg)
## 使用方法：
```sh
(1) git clone https://github.com/smartnlp/web-robot.git
(2) 部署到自己网站
```
或者，如果你懒得连这个项目都不想checkout，那可以直接在网页端加载我的script
```sh
(1) 将下面代码粘贴到您网站首页的前，添加后便完成智能机器人的接入。
(2) 接入代码：<script src=’http://cloud.smartnlp.cn/robot/55d28d61d3a93df500131c24′ language=”JavaScript”></script>
 ``` 
  
## 如何定制知识库？
  如果您的机器人需要定制自己专属的聊天知识库
```sh
  (1) 请到 http://www.smartnlp.cn 去申请一个appid
  (2) 在后台配置问题答案 http://cloud.smartnlp.cn 
  (3) 在初始化robot的时候，关联appid
     new Robot({
         mod: 'normal'                                  //显示模式，mini侧边，normal默认模式
         , ismax: true                                  //初始时是否最大化窗口，normal模式时有效
         , url: 'http://api.smartnlp.cn/cloud/robot/'   //请求的接口地址
         , appid: '55d28d61d3a93df500131c24'            //appid
         , 'minWidth': 800
         ...
```
