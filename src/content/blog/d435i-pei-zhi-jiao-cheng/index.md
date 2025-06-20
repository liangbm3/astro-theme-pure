---
title: "D435i 配置教程"
description: 'Intel RealSense D435i 的一个配置教程🤗'
publishDate: 2025-01-12
tags: ['Linux', '教程','ROS']
---

## 1. 前言

Intel RealSense D435i是英特尔公司推出的一款消费级深度相机。它主要包含一个RGB相机、两个红外相机以及一个红外发射器，此外还有一个IMU单元(这也就是D435i和D435的区别，i就表示imu)。本教程的SDK版本为v2.50.0，对应的固件版本为v5.13.0.50，需要使用3.0及3.0以上数据线和数据接口，不然会报错。

## 2. 驱动安装

### 2.1 驱动安装

摄像头官方文档：https://dev.intelrealsense.com/docs/docs-get-started

驱动仓库：https://github.com/IntelRealSense/librealsense

1.   克隆驱动仓库（指定版本，踩过坑，驱动版本需要和固件相对应）

     ```bash
     git clone -b v2.50.0 https://github.com/IntelRealSense/librealsense  
     ```

​	克隆可能会发生错误，可以直接在该页面下载压缩包：https://github.com/IntelRealSense/librealsense/tree/v2.50.0

2.   安装依赖

     ```bash
     sudo apt-get install libudev-dev pkg-config libgtk-3-dev
     sudo apt-get install libusb-1.0-0-dev pkg-config
     sudo apt-get install libglfw3-dev
     sudo apt-get install libssl-dev
     ```

3.   安装权限脚本(进入`librealsense-2.50.0`文件夹执行以下命令)

     ```bash
     sudo cp config/99-realsense-libusb.rules /etc/udev/rules.d/
     sudo udevadm control --reload-rules && udevadm trigger 
     ```

4.   编译和安装

     ```bash
     mkdir build
     cd build
     cmake ../ -DBUILD_EXAMPLES=true
     make
     sudo make install
     ```

     >   如果编译过慢可以使用`make -j8`命令

5.   测试安装

     ```bash
     realsense-viewer
     modinfo uvcvideo | gr
     ```

     >   插入摄像头屏幕可能发生翻转：重启即可

>   **注意**： 
>   USB线必须使用3.0以上的，同时如果在虚拟机中需要将USB兼容性改为3.1，参考链接：<https://blog.csdn.net/qq_28872655/article/details/131452813>

显示如图界面则成功 

<img src="/images/d435i-pei-zhi-jiao-cheng/image.png" alt="image" style="zoom:50%;" />

### 2.2 ROS接口安装

1.   创建ROS工作区

     ```bash
     mkdir -p ~/realsense_ros_ws/src
     cd ~/realsense_ros_ws/src
     ```

2.   克隆仓库

     ```bash
     git clone https://github.com/IntelRealSense/realsense-ros.git
     git clone https://github.com/pal-robotics/ddynamic_reconfigure.git
     ```

3.   列出仓库中的所有标签，切换到2.x.x的最新版本

     ```bash
     cd realsense-ros/
     git checkout `git tag | sort -V | grep -P "^2.\d+\.\d+" | tail -1`
     ```

4.   初始化ROS工作区

     ```bash
     cd ../../
     cd ~/realsense_ros_ws/src
     catkin_init_workspace
     ```

5.   进行编译

     ```bash
     cd ..
     catkin_make clean
     catkin_make -DCATKIN_ENABLE_TESTING=False -DCMAKE_BUILD_TYPE=Release
     catkin_make install
     ```

6.   设置环境变量

     ```bash
     echo "source ~/realsense_ros_ws/devel/setup.bash" >> ~/.bashrc
     source ~/.bashrc
     ```

7.   启动摄像头节点

     ```bash
     roslaunch realsense2_camera rs_camera.launch
     ```

     此时可以用`rostopic`来查看相关话题

## 3. 参考链接

+ [Melodic + Realsense D435i 配置及错误问题解决](https://blog.csdn.net/Hacker_MAI/article/details/107976049)
+ [Intel RealSense D435i:简介、安装与使用(ROS、Python)](https://zhaoxuhui.top/blog/2020/09/09/intel-realsense-d435i-installation-and-use.html)


