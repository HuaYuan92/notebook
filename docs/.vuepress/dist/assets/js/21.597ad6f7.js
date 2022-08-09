(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{386:function(t,a,_){"use strict";_.r(a);var v=_(45),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"network"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[t._v("#")]),t._v(" Network")]),t._v(" "),_("h2",{attrs:{id:"一-从输入url到页面展示全过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-从输入url到页面展示全过程"}},[t._v("#")]),t._v(" 一 从输入URL到页面展示全过程")]),t._v(" "),_("h2",{attrs:{id:"二-常见http状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-常见http状态码"}},[t._v("#")]),t._v(" 二 常见http状态码")]),t._v(" "),_("h2",{attrs:{id:"三-跨域基本知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三-跨域基本知识"}},[t._v("#")]),t._v(" 三 跨域基本知识")]),t._v(" "),_("h2",{attrs:{id:"四-cors详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四-cors详解"}},[t._v("#")]),t._v(" 四 CORS详解")]),t._v(" "),_("h2",{attrs:{id:"五-http1-0-1-1-2-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五-http1-0-1-1-2-0"}},[t._v("#")]),t._v(" 五 HTTP1.0/1.1/2.0")]),t._v(" "),_("h3",{attrs:{id:"http-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-概述"}},[t._v("#")]),t._v(" HTTP 概述")]),t._v(" "),_("p",[t._v("HTTP 超文本传输​​协议是位于 TCP/IP 体系结构中的应用层协议，它是万维网数据通信的基础。")]),t._v(" "),_("p",[t._v("当我们访问一个网站时，需要通过统一资源定位符（uniform resource locator，URL）来定位服务器并获取资源。")]),t._v(" "),_("p",[t._v("<协议>://<域名>:<端口>/<路径>\n一个 URL 的一般形式通常如上所示（http://test.com/index.html ），现在最常用的协议就是 HTTP，HTTP 的默认端口是 80，通常可以省略。")]),t._v(" "),_("h3",{attrs:{id:"http-连接建立过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-连接建立过程"}},[t._v("#")]),t._v(" HTTP 连接建立过程")]),t._v(" "),_("p",[t._v("我们来看一下在浏览器输入 URL 后获取 HTML 页面的过程。")]),t._v(" "),_("ul",[_("li",[t._v("先通过域名系统（Domain Name System，DNS）查询将域名转换为 IP 地址。即将 test.com 转换为 221.239.100.30 这一过程。")]),t._v(" "),_("li",[t._v("通过三次握手（稍后会讲）建立 TCP 连接。")]),t._v(" "),_("li",[t._v("发起 HTTP 请求。")]),t._v(" "),_("li",[t._v("目标服务器接收到 HTTP 请求并处理。")]),t._v(" "),_("li",[t._v("目标服务器往浏览器发回 HTTP 响应。")]),t._v(" "),_("li",[t._v("浏览器解析并渲染页面。")])]),t._v(" "),_("h3",{attrs:{id:"tcp-三次握手和四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手和四次挥手"}},[t._v("#")]),t._v(" TCP 三次握手和四次挥手")]),t._v(" "),_("p",[t._v("TCP 标准规定，ACK 报文段可以携带数据，但不携带数据就不用消耗序号。")]),t._v(" "),_("h4",{attrs:{id:"tcp-三次握手建立连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手建立连接"}},[t._v("#")]),t._v(" TCP 三次握手建立连接")]),t._v(" "),_("ul",[_("li",[t._v("客户端发送一个不包含应用层数据的 TCP 报文段，首部的 SYN 置为 1，随机选择一个初始序号（一般为 0）放在 TCP 报文段的序号字段中。（SYN 为 1 的时候，不能携带数据，但要消耗掉一个序号）")]),t._v(" "),_("li",[t._v("TCP 报文段到达服务器主机后，服务器提取报文段，并为该 TCP 连接分配缓存和变量。然后向客户端发送允许连接的 ACK 报文段（不包含应用层数据）。这个报文段的首部包含 4 个信息：ACK 置 为 1，SYN 置为 1；确认号字段置为客户端的序号 + 1；随机选择自己的初始序号（一般为 0）。")]),t._v(" "),_("li",[t._v("收到服务器的 TCP 响应报文段后，客户端也要为该 TCP 连接分配缓存和变量，并向服务器发送一个 ACK 报文段。这个报文段将服务器端的序号 + 1 放置在确认号字段中，用来对服务器允许连接的报文段进行响应，因为连接已经建立，所以 SYN 置为 0。最后一个阶段，报文段可以携带客户到服务器的数据。并且以后的每一个报文段，SYN 都置为 0。")])]),t._v(" "),_("h4",{attrs:{id:"tcp-四次挥手拆除连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四次挥手拆除连接"}},[t._v("#")]),t._v(" TCP 四次挥手拆除连接")]),t._v(" "),_("p",[t._v("FIN 报文段即使不携带数据，也要消耗序号。")]),t._v(" "),_("ul",[_("li",[t._v("客户端发送一个 FIN 置为 1 的报文段。")]),t._v(" "),_("li",[t._v("服务器回送一个确认报文段。")]),t._v(" "),_("li",[t._v("服务器发送 FIN 置为 1 的报文段。")]),t._v(" "),_("li",[t._v("客户端回送一个确认报文段。")])]),t._v(" "),_("h3",{attrs:{id:"tcp-为什么是四次挥手-而不是三次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-为什么是四次挥手-而不是三次"}},[t._v("#")]),t._v(" TCP 为什么是四次挥手，而不是三次？")]),t._v(" "),_("ul",[_("li",[t._v("当 A 给 B 发送 FIN 报文时，代表 A 不再发送报文，但仍可以接收报文。")]),t._v(" "),_("li",[t._v("B 可能还有数据需要发送，因此先发送 ACK 报文，告知 A “我知道你想断开连接的请求了”。这样 A 便不会因为没有收到应答而继续发送断开连接的请求（即 FIN 报文）。")]),t._v(" "),_("li",[t._v("B 在处理完数据后，就向 A 发送一个 FIN 报文，然后进入 LAST_ACK 阶段（超时等待）。")]),t._v(" "),_("li",[t._v("A 向 B 发送 ACK 报文，双方都断开连接。")])]),t._v(" "),_("h3",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),_("p",[t._v("HTTPS 是最流行的 HTTP 安全形式，由网景公司首创，所有主要的浏览器和服务器都支持此协议。 使用 HTTPS 时，所有的 HTTP 请求和响应数据在发送之前，都要进行加密。加密可以使用 SSL 或 TLS。")]),t._v(" "),_("h3",{attrs:{id:"http-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),_("p",[t._v("HTTP/2 是 HTTP/1.x 的扩展，而非替代。所以 HTTP 的语义不变，提供的功能不变，HTTP 方法、状态码、URL 和首部字段等这些核心概念也不变。")]),t._v(" "),_("p",[t._v("之所以要递增一个大版本到 2.0，主要是因为它改变了客户端与服务器之间交换数据的方式。HTTP 2.0 增加了新的二进制分帧数据层，而这一层并不兼容之前的 HTTP 1.x 服务器及客户端——是谓 2.0。")]),t._v(" "),_("h3",{attrs:{id:"http-2-连接建立过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2-连接建立过程"}},[t._v("#")]),t._v(" HTTP/2 连接建立过程")]),t._v(" "),_("p",[t._v("现在的主流浏览器 HTTP/2 的实现都是基于 SSL/TLS 的，也就是说使用 HTTP/2 的网站都是 HTTPS 协议的，所以本文只讨论基于 SSL/TLS 的 HTTP/2 连接建立过程。")]),t._v(" "),_("p",[t._v("基于 SSL/TLS 的 HTTP/2 连接建立过程和 HTTPS 差不多。在 SSL/TLS 握手协商过程中，客户端在 ClientHello 消息中设置 ALPN（应用层协议协商）扩展来表明期望使用 HTTP/2 协议，服务器用同样的方式回复。通过这种方式，HTTP/2 在 SSL/TLS 握手协商过程中就建立起来了。")]),t._v(" "),_("h3",{attrs:{id:"http-1-1-的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-的问题"}},[t._v("#")]),t._v(" HTTP/1.1 的问题")]),t._v(" "),_("h4",{attrs:{id:"_1-队头阻塞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-队头阻塞"}},[t._v("#")]),t._v(" 1. 队头阻塞")]),t._v(" "),_("p",[t._v("在 HTTP 请求应答过程中，如果出现了某种情况，导致响应一直未能完成，那后面所有的请求就会一直阻塞着，这种情况叫队头阻塞。")]),t._v(" "),_("h4",{attrs:{id:"_2-低效的-tcp-利用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-低效的-tcp-利用"}},[t._v("#")]),t._v(" 2. 低效的 TCP 利用")]),t._v(" "),_("p",[t._v("由于 TCP 慢启动机制，导致每个 TCP 连接在一开始的时候传输速率都不高，在处理多个请求后，才会慢慢达到“合适”的速率。对于请求数据量很小的 HTTP 请求来说，这种情况就是种灾难。")]),t._v(" "),_("h4",{attrs:{id:"_3-臃肿的消息首部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-臃肿的消息首部"}},[t._v("#")]),t._v(" 3. 臃肿的消息首部")]),t._v(" "),_("p",[t._v("HTTP/1.1 的首部无法压缩，再加上 cookie 的存在，经常会出现首部大小比请求数据大小还大的情况。")]),t._v(" "),_("h4",{attrs:{id:"_4-受限的优先级设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-受限的优先级设置"}},[t._v("#")]),t._v(" 4. 受限的优先级设置")]),t._v(" "),_("p",[t._v("HTTP/1.1 无法为重要的资源指定优先级，每个 HTTP 请求都是一视同仁。")]),t._v(" "),_("p",[t._v("在继续讨论 HTTP/2 的新功能之前，先把 HTTP/1.1 的问题列出来是有意义的。因为 HTTP/2 的某些新功能就是为了解决上述某些问题而产生的。")]),t._v(" "),_("h3",{attrs:{id:"二进制分帧层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧层"}},[t._v("#")]),t._v(" 二进制分帧层")]),t._v(" "),_("p",[t._v("HTTP/2 是基于帧的协议。采用分帧是为了将重要信息封装起来，让协议的解析方可以轻松阅读、解析并还原信息。")]),t._v(" "),_("p",[t._v("而 HTTP/1.1 是以文本分隔的。解析 HTTP/1.1 不需要什么高科技，但往往速度慢且容易出错。你需要不断地读入字节，直到遇到分隔符 CRLF 为止，同时还要考虑不守规矩的客户端，它只会发送 LF。")]),t._v(" "),_("h4",{attrs:{id:"多路复用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[t._v("#")]),t._v(" 多路复用")]),t._v(" "),_("p",[t._v("在 HTTP/1.1 中，如果客户端想发送多个并行的请求，那么必须使用多个 TCP 连接。")]),t._v(" "),_("p",[t._v("而 HTTP/2 的二进制分帧层突破了这一限制，所有的请求和响应都在同一个 TCP 连接上发送：客户端和服务器把 HTTP 消息分解成多个帧，然后乱序发送，最后在另一端再根据流 ID 重新组合起来。")]),t._v(" "),_("p",[t._v("这个机制为 HTTP 带来了巨大的性能提升，因为：")]),t._v(" "),_("ul",[_("li",[t._v("可以并行交错地发送请求，请求之间互不影响；")]),t._v(" "),_("li",[t._v("可以并行交错地发送响应，响应之间互不干扰；")]),t._v(" "),_("li",[t._v("只使用一个连接即可并行发送多个请求和响应；")]),t._v(" "),_("li",[t._v("消除不必要的延迟，从而减少页面加载的时间；")]),t._v(" "),_("li",[t._v("不必再为绕过 HTTP 1.x 限制而多做很多工作；")])]),t._v(" "),_("h4",{attrs:{id:"优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),_("p",[t._v("把 HTTP 消息分解为很多独立的帧之后，就可以通过优化这些帧的交错和传输顺序，进一步提升性能。")]),t._v(" "),_("h4",{attrs:{id:"流量控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[t._v("#")]),t._v(" 流量控制")]),t._v(" "),_("p",[t._v("在同一个 TCP 连接上传输多个数据流，就意味着要共享带宽。标定数据流的优先级有助于按序交付，但只有优先级还不足以确定多个数据流或多个连接间的资源分配。")]),t._v(" "),_("p",[t._v("为解决这个问题，HTTP/2 为数据流和连接的流量控制提供了一个简单的机制：")]),t._v(" "),_("ul",[_("li",[t._v("流量控制基于每一跳进行，而非端到端的控制；")]),t._v(" "),_("li",[t._v("流量控制基于 WINDOW_UPDATE 帧进行，即接收方广播自己准备接收某个数据流的多少字节，以及对整个连接要接收多少字节；")]),t._v(" "),_("li",[t._v("流量控制窗口大小通过 WINDOW_UPDATE 帧更新，这个字段指定了流 ID 和窗口大小递增值；")]),t._v(" "),_("li",[t._v("流量控制有方向性，即接收方可能根据自己的情况为每个流乃至整个连接设置任意窗口大小；")]),t._v(" "),_("li",[t._v("流量控制可以由接收方禁用，包括针对个别的流和针对整个连接。")])]),t._v(" "),_("p",[t._v("HTTP/2 连接建立之后，客户端与服务器交换 SETTINGS 帧，目的是设置双向的流量控制窗口大小。除此之外，任何一端都可以选择禁用个别流或整个连接的流量控制。")]),t._v(" "),_("h4",{attrs:{id:"服务器推送"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[t._v("#")]),t._v(" 服务器推送")]),t._v(" "),_("p",[t._v("HTTP/2 新增的一个强大的新功能，就是服务器可以对一个客户端请求发送多个响应。换句话说，除了对最初请求的响应外，服务器还可以额外向客户端推送资源，而无需客户端明确地请求。")]),t._v(" "),_("h4",{attrs:{id:"首部压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首部压缩"}},[t._v("#")]),t._v(" 首部压缩")]),t._v(" "),_("p",[t._v("HTTP/1.1 存在的一个问题就是臃肿的首部，HTTP/2 对这一问题进行了改进，可以对首部进行压缩。 在一个 Web 页面中，一般都会包含大量的请求，而其中有很多请求的首部往往有很多重复的部分。")]),t._v(" "),_("p",[t._v("HTTP/2 在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键－值对，对于相同的数据，不再通过每次请求和响应发送。")]),t._v(" "),_("h4",{attrs:{id:"性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),_("p",[t._v("使用 HTTP/2 代替 HTTP/1.1，本身就是一种巨大的性能提升。 这小节要聊的是在 HTTP/1.1 中的某些优化手段，在 HTTP/2 中是不必要的，可以取消的。")]),t._v(" "),_("h4",{attrs:{id:"取消合并资源"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#取消合并资源"}},[t._v("#")]),t._v(" 取消合并资源")]),t._v(" "),_("p",[t._v("在 HTTP/1.1 中要把多个小资源合并成一个大资源，从而减少请求。而在 HTTP/2 就不需要了，因为 HTTP/2 所有的请求都可以在一个 TCP 连接发送。")]),t._v(" "),_("h4",{attrs:{id:"取消域名拆分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#取消域名拆分"}},[t._v("#")]),t._v(" 取消域名拆分")]),t._v(" "),_("p",[t._v("取消域名拆分的理由同上，再多的 HTTP 请求都可以在一个 TCP 连接上发送，所以不需要采取多个域名来突破浏览器 TCP 连接数限制这一规则了。")]),t._v(" "),_("h2",{attrs:{id:"六-https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六-https"}},[t._v("#")]),t._v(" 六 HTTPS")]),t._v(" "),_("h2",{attrs:{id:"七-get和post请求的本质区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七-get和post请求的本质区别"}},[t._v("#")]),t._v(" 七 GET和POST请求的本质区别")])])}),[],!1,null,null,null);a.default=s.exports}}]);