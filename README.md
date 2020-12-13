# skeleton
该项目介绍了骨架屏的使用案例，原理：
1.编写骨架屏组件（div、svg组合等）
2.将组件转换为css和dom节点插入到 index.html 中 #app 的挂载点

场景一、所有页面公用一个 skeleton
参考：https://github.com/lavas-project/vue-skeleton-webpack-plugin/tree/master/examples/vue-cli3

场景二、不同路由页面使用不同的 skeleton
参考：https://github.com/lavas-project/vue-skeleton-webpack-plugin/tree/master/examples/multi-skeleton

场景三、在线构建 skeleton 单个组件样式
参考：https://skeletonreact.com/#gallery

缺点：svg 构建的单个组件组件占用一定量体积，此时再循环构建多个 skeleton 时，文件体积会进一步增大。

疑问：
是否有办法合并重复的内容
