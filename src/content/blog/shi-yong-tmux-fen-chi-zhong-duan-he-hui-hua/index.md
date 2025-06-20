---
title: "使用 tmux 分离终端和会话"
description: '我们可以使用tmux（terminal multiplexer）（终端复用器）来使终端和会话分离（detach），这样关闭终端时运行的程序不会停止。'
publishDate: 2024-10-28
tags: ['Linux', '日常总结']
---

## 1. 前言

在使用ssh远程连接服务器时，当我们关闭终端或者断开连接，在终端运行的代码也随之停止。特别是使用服务器训练模型时，我们不可能一直保持终端连接，这时我们可以使用tmux（terminal multiplexer）（终端复用器）来使终端和会话分离（detach），这样关闭终端时运行的程序不会停止。这里只对会话分离功能进行记录，因为窗格操作目前基本不会使用。

## 2. 基础命令

### 2.1 安装

```bash
# Ubuntu 或 Debian
sudo apt-get install tmux
 
# CentOS 或 Fedora
sudo yum install tmux
 
# Mac
brew install tmux
```

### 2.2 启动和退出

1.   启动tmux窗口

     ```bash
     tmux
     ```

     也可以在启动时指定session的名字，这样在解绑后可以快速重新进入该session：

     ```bash
     tmux new -s your-session-name
     ```

2.   退出tmux窗口

     ```bash
     exit
     ```

### 2.3 分离会话

```bash
tmux detach
```

执行该命令后，就会退出当前 tmux 窗口，但是会话和里面的进程仍然在后台运行。

### 2.4 查找和接入会话

1.   查看当前所有的 tmux 会话

     ```bash
     tmux ls
     ```

2.   重新接入某个已存在的会话

     ```bash
     # 使用会话编号
     tmux attach -t 0
     
     # 使用会话名称
     tmux attach -t <session-name>
     ```

### 2.5 杀死会话

```bash
# 使用会话编号
tmux kill-session -t 0

# 使用会话名称
tmux kill-session -t <session-name>
```

使用该命令后，会话和里面的进程会被杀死

### 2.6 切换会话

```bash
# 使用会话编号
tmux switch -t 0

# 使用会话名称
tmux switch -t <session-name>
```

这个命令可以从某个会话直接切换到另一个会话

### 2.7 重命名会话

```bash
tmux rename-session -t 0 <new-name>
```

## 3. 参考资料

+   [Tmux 使用教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/10/tmux.html)
+   [Tmux教程 （一文就够）-CSDN博客](https://blog.csdn.net/CSSDCC/article/details/121231906)
+   [如何关闭终端后保持ssh远程连接运行程序不终止（tmux基本操作）_退出终端会停止远程服务器工作吗-CSDN博客](https://blog.csdn.net/hesongzefairy/article/details/112590054)

