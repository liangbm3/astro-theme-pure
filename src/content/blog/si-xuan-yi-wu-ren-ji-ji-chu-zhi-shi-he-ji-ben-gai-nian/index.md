---
title: "四旋翼无人机基础知识和基本概念"
description: '本文主要介绍四旋翼无人机的一些基础知识和基本概念'
publishDate: 2025-01-13
tags: ['日常总结', '教程']
---


## 1. 飞行器的分类

飞行器主要分为固定翼、直升机和多旋翼，这里介绍的是多旋翼

## 2. 四旋翼的总体组成

四旋翼主要组成部分包括机架、动力系统和指挥控制系统。下面进行一一介绍。

<img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112162923.png" style="zoom:67%;">

### 2.1 机架

#### 2.1.1 机身

机身一般有如下参数：

+   重量：选择时尽量轻

+   布局：常见有四旋翼、六旋翼、八旋翼

    <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112164013.png" style="zoom:67%;">

+   轴距：电机轴围成的外界圆周的直径。轴距限制螺旋桨尺寸上限，从而限制了螺旋桨能产生的最大拉力

    <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112164117.png" style="zoom:67%;">

+   材料：以碳纤维居多

####  2.1.2 起落架

具有支撑作用，可以避免起飞离地太近，着陆时可以起缓冲作用

<img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112164301.png" style="zoom:67%;">

#### 2.1.3 涵道

保护螺旋桨和人身安全，提高桨叶拉力效率和减少噪音（伯努利原理）

<img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112164446.png" style="zoom:67%;">

### 2.2 动力系统

#### 2.2.1 螺旋桨

螺旋桨的参数有：

+   型号

    +   假设螺旋桨在一种不能流动的介质中旋转，那么螺旋桨每转一圈,就会向前进一个距离，就称为螺距或桨距(Propeller Pitch)。
    +   螺旋桨一般用4个数字表示，其中前面2位是螺旋桨的直径，后面2位是螺旋桨的螺距。比如：1045桨的直径为10英寸，而螺距为4.5英寸。

+   弦长：一般选择半径2/3处的弦长作为标称弦长

    <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112165011.png" style="zoom:67%;">

+   转动惯量

+   桨叶数

+   安全转速

+   螺旋桨力效

+   静平衡与动平衡

    +   静平衡是指螺旋桨重心与轴心线重合时的平衡状态
    +   动平衡是指螺旋桨重心与其惯性中心重合时的平衡状态
    +   进行静平衡和动平衡的目的是减少振动

#### 2.2.2 电机

电机以无刷电机为主，无刷电机的原理：电机里面一般有多匝线圈，对线圈交替通电可以周而复始驱动转子转动。

电机的参数有：

+   尺寸：电机的尺寸取决于定子的大小，由一个四位数字来表示。例如2212(或写成22×12)电机，前两个数字代表定子直径(单位mm),后两个数字代表定子高度(单位mm)，因此2212电机表示电机定子直径是22mm，定子高度为12mm。
+   标称空载KV：空载情况下，外加1V电压得到的转速值，大型螺旋桨可以选用KV值较小的电机，小型螺旋桨可选用KV值较大的电机。
+   标称空载电流和电压
+   最大电流/功率
+   内阻
+   电机效率
+   总力效

#### 2.2.3 电调

电调全称电子调速器，英文Electronic Speed Control，简称ESC。最基本的功能是电机调速，同时为遥控接收器其他通道的舵机供电。

电调的参数有：

+   最大持续/峰值电流：不同电机需要配备不同安数的电调，安数不足会导致电调甚至电机烧毁
+   电压范围：一般在电调说明书上可以看到标注例如“3-4S LiPo”字样，表示这个电调适用于3到 4节电芯串联的锂聚合物电池，也就是说它的电压范围为11.1V~14.8V
+   内阻
+   刷新效率
+   可编程特性
+   兼容性

#### 2.2.4 电池

常见的有锂聚合物电池（LiPo）和镍氢电池（NiMh）

<img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112170051.png" style="zoom:67%;">

电池的参数如下：

+   电压
    +   锂电池组包含两部分：电池和锂电池保护线路。单节电压3.7V。
    +   3S1P表示3片锂聚合物电池的串联，电压是11.1V，其中：S是串联，P表示并联。
    +   2S2P电池表示2片锂聚合物电池的串联，然后两个这样的串联结构并联，总电压是7.4V，容量是单个电池的两倍。
+   容量：在实际多旋翼飞行过程中，有两种方式检测电池的剩余容量是否满足飞行安全的要求。一种方式是检测电池单节电压，另一种方式是实时检测电池输出电流做积分计算。
+   放电倍率
+   内阻
+   能量密度

### 2.3 指挥控制系统

#### 2.3.1 遥控器和接收器

指标参数如下：

+   频率：常用的无线电频率是72MHz与2.4GHz，目前采用的最多的是2.4GHz遥控器。2.4G微波的直线性很好，尽量避免遥控模型与发射机之间有很大的障碍物（如房屋及仓库等）

+   调制方式：PCM

+   通道：一般有六通道、十通道等。多旋翼在控制过程中需要控制的动作路数有：油门、偏航、俯仰、滚转，所以至少得四个通道遥控器。

+   控制模式：美国手和日本手

    <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112170835.png" style="zoom:67%;">

+   油门

    +   称直接式油门：油门杆不会自动回中，最低点为0%油门，最高点为100%油门。这种油门主要对应的是期望的推力的大小。
    +   增量式油门：松手油门自动回中。

+   遥控距离

#### 2.3.2 自动驾驶仪

组成：

+   全球定位系统（GPS）接收器
+   惯性测量单元（IMU），包括三轴加速度计、三轴陀螺仪、电子罗盘（或磁力计），目的是得到多旋翼的姿态信息
+   气压计和超声波测距模块
+   微型计算机
+   接口

作用：

+ 感知。导航就是解决“多旋翼在哪”的问题
+ 控制。控制就是解决“多旋翼怎么去” 的问题
+ 决策。决策就是解决“多旋翼去哪儿” 的问题

#### 2.3.3 地面站

操作员通过地面站系统提供的鼠标、键盘、按钮和操控手柄等外设来与地面站软件进行交互。预先规划好本次任务的航迹，对多旋翼的飞行过程中飞行状况进行实时监控和修改任务设置以干预多旋翼飞行。任务完成后还可以对任务的执行记录进行回放分析。

#### 2.3.4 数传

数传电台一端接入计算机（地面站软件），一端接入多旋翼自驾仪，通讯采用一定协议进行，从而保持自驾仪与地面站的双向通讯。

数传指标如下：

+ 频率：可选择：433MHz或915MHz
+ 传输距离
+ 传输速率

通信协议：MAVLink通讯协议是一个为微型飞行器设计的非常轻巧的、只由头文件构成的信息编组库。MAVLink最初由劳伦兹·迈耶根据LGPL（Lesser GeneralPublic License）许可在2009年初发表。

## 3. 四旋翼的坐标系和姿态表示

### 3.1 坐标系

+ 地球固连坐标系 用于研究多旋翼飞行器相对于地面的运动状态，确定机体的空间位置坐标。$x_e$轴水平面指定某一方向，$z_e$轴垂直地面向下，通过右手定则确定$y_e$轴
+ 机体坐标系 与多旋翼固连，其原点取在多旋翼的重心位置上。$x_b$轴在多旋翼对称平面内指向机头。$z_b$轴在飞机对称平面内，垂直$x_b$轴向下。然后，按右手定则确定$y_b$轴。

两者关系如下图：

<img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250113132134.png" style="zoom:67%;">



### 3.2 欧拉角

欧拉角是一种直观的姿态表示方法，在姿态控制中被广泛使用。可以通过绕$\mathbf{e}_3,\mathbf{k}_2,\mathbf{n}_1$轴分别旋转欧拉角$\psi,\theta,\phi$将地球固联坐标系转动到机体坐标系。如图

<img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250113133107.png" style="zoom:67%;">



<img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250113133136.png" style="zoom:67%;">

+ 俯仰角$\theta$：机体轴与地平面（水平面）之间的夹角，飞机抬头为正。
+ 偏航角$\psi$：机体轴在水平面上的投影与地轴之间的夹角，以机头右偏为正。
+ 滚转角$\phi$：飞机对称面绕机体轴转过的角度，右滚为正。

### 3.3 旋转矩阵

从地球固联坐标系到机体坐标系的旋转可以通过三步来完成

$$
\begin{bmatrix}\mathbf{e}_1\\\mathbf{e}_2\\\mathbf{e}_3\end{bmatrix}
\xrightarrow{\mathbf{R}_z(\psi)}
\begin{bmatrix}\mathbf{k}_1\\\mathbf{k}_2\\\mathbf{k}_3=\mathbf{e}_3\end{bmatrix}
\xrightarrow{\mathbf{R}_y(\theta)}
\begin{bmatrix}\mathbf{n}_1\\\mathbf{n}_2=\mathbf{k}_2\\\mathbf{n}_3\end{bmatrix}
\xrightarrow{\mathbf{R}_x(\phi)}
\begin{bmatrix}\mathbf{b}_1=\mathbf{n}_1\\\mathbf{b}_2\\\mathbf{b}_3\end{bmatrix}
$$

其中
$$\mathbf{R}_z\begin{pmatrix}\psi\end{pmatrix}\triangleq\begin{bmatrix}\cos\psi&\sin\psi&0\\-\sin\psi&\cos\psi&0\\0&0&1\end{bmatrix},\mathbf{R}_y\begin{pmatrix}\theta\end{pmatrix}\triangleq\begin{bmatrix}\cos\theta&0&-\sin\theta\\0&1&0\\\sin\theta&0&\cos\theta\end{bmatrix},\mathbf{R}_x\begin{pmatrix}\phi\end{pmatrix}\triangleq\begin{bmatrix}1&0&0\\0&\cos\phi&\sin\phi\\0&-\sin\phi&\cos\phi\end{bmatrix}$$

因此从机体坐标系到地球固联坐标系的旋转矩阵$\mathbf{R_b^e}$可表示为
$$
\begin{aligned}
\mathbf{R_b^{e}}&=\left(\mathbf{R}_\mathrm{e}^\mathrm{b}\right)^{-1}\\
&=\mathbf{R}_z^{-1}\left(\psi\right)\mathbf{R}_y^{-1}\left(\theta\right)\mathbf{R}_x^{-1}\left(\phi\right)\\
&=\mathbf{R}_z^\mathrm{T}\left(\psi\right)\mathbf{R}_y^\mathrm{T}\left(\theta\right)\mathbf{R}_x^\mathrm{T}\left(\phi\right)\\
&=\begin{bmatrix}\cos\theta\cos\psi&\cos\psi\sin\theta\sin\phi-\sin\psi\cos\phi&\cos\psi\sin\theta\cos\phi+\sin\psi\sin\phi\\\cos\theta\sin\psi&\sin\psi\sin\theta\sin\phi+\cos\psi\cos\phi&\sin\psi\sin\theta\cos\phi-\cos\psi\sin\phi\\-\sin\theta&\sin\phi\cos\theta&\cos\phi\cos\theta\end{bmatrix}&\mathrm{I}
\end{aligned}
$$

当然知道了旋转矩阵我们也可以反过来求欧拉角。

### 3.4 四元数

四元数是目前应用最广泛的姿态表示方法之一，四元数本质上是一种高阶复数，是一个四维空间，一般表示为：
$$
\mathbf{q} \triangleq\left[\begin{array}{l}q_0 \\ \mathbf{q}_{\mathrm{v}}\end{array}\right]
$$
其中$q_0$表示标量部分，$\mathbf{q_v}$表示向量部分。

四元数有如下基本运算法则：

+ 加减法
    $$
    \mathbf{p} \pm \mathbf{q}=\left[\begin{array}{l}
    p_0 \\
    \mathbf{p}_{\mathrm{v}}
    \end{array}\right] \pm\left[\begin{array}{l}
    q_0 \\
    \mathbf{q}_{\mathrm{v}}
    \end{array}\right]=\left[\begin{array}{l}
    p_0 \pm q_0 \\
    \mathbf{p}_{\mathrm{v}} \pm \mathbf{q}_{\mathrm{v}}
    \end{array}\right]
    $$

+ 乘法
    $$
    \mathbf{p} \otimes \mathbf{q}=\left[\begin{array}{l}
    p_0 \\
    \mathbf{p}_{\mathrm{v}}
    \end{array}\right] \otimes\left[\begin{array}{l}
    q_0 \\
    \mathbf{q}_{\mathrm{v}}
    \end{array}\right]=\left[\begin{array}{c}
    p_0 q_0-\mathbf{q}_{\mathrm{v}}^{\mathrm{T}} \mathbf{p}_{\mathrm{v}} \\
    \mathbf{p}_{\mathrm{v}} \times \mathbf{q}_{\mathrm{v}}+p_0 \mathbf{q}_{\mathrm{v}}+q_0 \mathbf{p}_{\mathrm{v}}
    \end{array}\right]
    $$
    乘法不满足交换律，但是满足分配率和结合律。

+   共轭
    $$
    \mathbf{q}^*=\left[\begin{array}{c}
    q_0 \\
    -\mathbf{q}_{\mathbf{v}}
    \end{array}\right]
    $$

+   范数
    $$
    \begin{aligned}
    \|\mathbf{q}\|^2 & =\left\|\mathbf{q} \otimes \mathbf{q}^*\right\| \\
    & =\left\|\mathbf{q}^* \otimes \mathbf{q}\right\| \\
    & =q_0^2+\mathbf{q}_{\mathbf{v}}^{\mathrm{T}} \mathbf{q}_{\mathbf{v}} \\
    & =q_0^2+q_1^2+q_2^2+q_3^2 .
    \end{aligned}
    $$

+   求逆

    四元数的逆$\mathbf{q^{-1}}$
    $$
    \mathbf{q} \otimes \mathbf{q}^{-1}=\left[\begin{array}{c}
    1 \\
    \mathbf{0}_{3 \times 1}
    \end{array}\right]
    $$

+   除法

    如果$\mathbf{r}\otimes \mathbf{p}=\mathbf{m}$，则有
    $$
    \begin{aligned}
    \mathbf{r} \otimes \mathbf{p} \otimes \mathbf{p}^{-1} & =\mathbf{m} \otimes \mathbf{p}^{-1} \\
    \mathbf{r} & =\mathbf{m} \otimes \mathbf{p}^{-1}
    \end{aligned}
    $$

我们可以使用四元数来表示旋转

+   向量旋转
    $$
    \left[\begin{array}{c}
    0 \\
    \mathbf{v}_1^{\prime}
    \end{array}\right]=\mathbf{q} \otimes\left[\begin{array}{l}
    0 \\
    \mathbf{v}_1
    \end{array}\right] \otimes \mathbf{q}^{-1}
    $$
    <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250113145528.png" style="zoom:67%;">

+   坐标系旋转
    $$
    \left[\begin{array}{c}
    0 \\
    \mathbf{v}_1^{\prime}
    \end{array}\right]=\mathbf{q}^{-1} \otimes\left[\begin{array}{c}
    0 \\
    \mathbf{v}_1
    \end{array}\right] \otimes \mathbf{q}
    $$
    <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250113145539.png" style="zoom:67%;">

关于四元数更多内容可参考：<https://krasjet.github.io/quaternion/>

## 4. 四旋翼的运动

1.   悬停：转速相同，1和3逆时针旋转，2和4顺时针旋转，俯仰力矩和翻滚力矩相互抵消，拉力抵消重力

     <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112161731.png" style="zoom:67%;">

2.   上下运动：同时改变四个螺旋桨转速，力矩和仍然为0，但是总拉力会变化

     <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112161658.png" style="zoom:67%;">

3.   前后运动：减小1和4转速，拉力会产生向前分量，同时拉力垂直分量会减小，需要同量增加四个螺旋桨转速来补偿向后运动同理

     <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112162048.png" style="zoom:67%;">

4.   左右运动：同量减小1和2的转速，同量增加3和4的转速，会产生向右翻滚倾斜的力矩，拉力会产生向右分量，同时拉力垂直分量会减小，需要同量增加四个螺旋桨转速来补偿，向左运动同理

     <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112162417.png" style="zoom:67%;">

5.   偏航运动：同量减小2和4的转速，同量增加1和3的转速，会产生一个顺时针的偏航力矩

     <img src="https://raw.githubusercontent.com/liangbm3/photos/main/Typora/20250112162613.png" style="zoom:67%;">



## 参考资料：

电子工业出版社《多旋翼飞行器设计与控制》










