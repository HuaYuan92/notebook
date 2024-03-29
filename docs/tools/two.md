# 运维

谈到运维，那就自然而然要提到 K8S ,DOCKER, NGINX等一系列CI/CD自动化工具。
下面将以鲁班H5改造为主线，贯穿到整个运维改造工作中去

先从基本定义开始

## 一 什么是DOCKER

实际场景：我们现在选定了一款框架-鲁班H5，想以此为基础做自己的业务探索优化，那么我们就需要找个地方先把他部署起来，目前我们的方案有两种：
* 腾讯云部署
* 内部K8S部署

先对比下各自的优劣：
* 腾讯云-轻量服务器，是基于虚拟化技术生成的虚拟机，内置多种镜像，在实际操作中，功能比较完善，效率也很高，包括域名，DNS解析等，都可以在腾讯云一站式搞定，而且用户多，文档全，生态好，社区大。
* 内部K8S，基于docker，内置镜像不多，但可以自己添加，而且域名，解析之类的可以找运维老师帮助调试，最重要的是，这些都是免费的...

最终我们选择的是 内部K8S部署，至于原因，看了下面就知道了。

那说回DOCKER，它到底是何方神圣呢？

一个基本概念 DOCKER = 集装箱

此处引用官方的文档解释：docker是一个用Go语言实现的开源项目，可以让我们方便的创建和使用容器，docker将程序以及程序所有的依赖都打包到docker container，这样你的程序可以在任何环境都会有一致的表现，这里程序运行的依赖也就是容器就好比集装箱，容器所处的操作系统环境就好比货船或港口，程序的表现只和集装箱有关系(容器)，和集装箱放在哪个货船或者哪个港口(操作系统)没有关系。

[什么是DOCKER](https://zhuanlan.zhihu.com/p/510757832)


说到这，我们需要来看一个基本知识：
[虚拟机和DOCKER的区别](https://zhuanlan.zhihu.com/p/85908416)

那DOCKER是如何工作的呢？

docker中有这样几个概念：

* dockerfile
* image
* container

实际上你可以简单的把image理解为可执行程序，container就是运行起来的进程。

那么写程序需要源代码，那么“写”image就需要dockerfile，dockerfile就是image的源代码，docker就是"编译器"。

因此我们只需要在dockerfile中指定需要哪些程序、依赖什么样的配置，之后把dockerfile交给“编译器”docker进行“编译”，也就是docker build命令，生成的可执行程序就是image，之后就可以运行这个image了，这就是docker run命令，image运行起来后就是docker container。
