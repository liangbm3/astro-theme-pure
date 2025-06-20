---
title: "Windows 查看和开放特定端口"
description: '这里记录的是之前比赛时遇到的一个bug，大概场景是在同一个局域网下，在本机（Windows）中开启了一个类似于主机服务，但是其他电脑根据IP和端口无法访问对应的网页，最后发现原因是本机防火墙没有开放对应的端口。'
publishDate: 2024-10-29
tags: ['bug记录']
---

## 1. 设置步骤

1.   打开控制面板：按下 Win + R 键，然后输入 “control” 并按下 Enter 键，打开控制面板。

2.   进入 Windows 防火墙设置：在控制面板中，选择 “系统和安全”，然后选择 “Windows Defender 防火墙”。

     <img src="/images/windows-cha-kan-he-kai-fang-te-ding-duan-kou/image-20241029124825216.png" alt="image-20241029124825216" style="zoom:50%;" />

3.   创建入站规则：在左侧导航栏中，点击 “高级设置”。

     <img src="/images/windows-cha-kan-he-kai-fang-te-ding-duan-kou/image-20241029125025487.png" alt="image-20241029125025487" style="zoom:50%;" />

4.   创建新的入站规则：在右侧窗口中，点击 “入站规则”，然后在右侧面板点击 “新建规则…”。

     <img src="/images/windows-cha-kan-he-kai-fang-te-ding-duan-kou/image-20241029125111173.png" alt="image-20241029125111173" style="zoom:50%;" />

5.   配置规则属性：在向导中选择 “端口” 选项，然后点击 “下一步”。

6.   选择端口类型：选择 “特定本地端口”，然后输入要打开的端口号（例如，1883）。选择 “允许连接”，然后点击 “下一步”。

7.   选择连接的配置：可以选择 “公共”、“专用” 或 “域”，具体根据你的网络设置选择。

8.   命名规则：给规则起一个名称和可选的描述，然后点击 “下一步”。

9.   完成向导：检查配置，然后点击 “完成”。

## 2. 参考资料

[【windows】查看和开放特定的端口_windows开放指定端口-CSDN博客](https://blog.csdn.net/qq_43577613/article/details/132537593)