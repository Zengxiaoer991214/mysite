<template>
  <v-flex>
    <v-row>
      <h1><a id="docker_0"></a>docker使用笔记</h1>
<h3><a id="__2"></a>- 常用命令</h3>
<ul>
<li>在centos上安装docker是很简单的，</li>
</ul>
<pre><div class="hljs"><code class="lang-shell"><span class="hljs-meta">#</span><span class="bash">安装docker</span>
yum install docker-io –y
<span class="hljs-meta">#</span><span class="bash">docker运行</span>
systemctl start docker
<span class="hljs-meta">#</span><span class="bash">检查安装结果</span>
docker info
systemctl start docker     #运行Docker守护进程
systemctl stop docker      #停止Docker守护进程
systemctl restart docker   #重启Docker守护进程
</code></div></pre>
<ul>
<li>
<p>docker常用指令</p>
<pre><div class="hljs"><code class="lang-shell">docker images   #查看已有镜像
docker ps         #查看正在运行的容器
docker rmi -f &lt;镜像名&gt;:&lt;版本号&gt;      #强制删除docker
docker run –it &lt;ImageID&gt; /bin/bash      #进入docker
exit           #退出当前容器
docker exec -it apache /bin/bash        #进入后台运行的容器
docker run -d -p 8080:80 apachephp:v1     #将docker的80端口映射到服务器的8080端口
<span class="hljs-meta">#</span><span class="bash">python 创建依赖</span>
pipreqs ./文件夹名称（相对路径） --encoding=utf-8
</code></div></pre>
</li>
</ul>
<ul>
<li>
<p>docker镜像的创建</p>
<ol>
<li>
<p>准备Dockerfile文件</p>
<pre><div class="hljs"><code class="lang-shell">FROM apachephp:v1    #声明基础镜像来源
MAINTAINER DTSTACK   #声明镜像拥有者(非必须)
RUN mkdir /dtstact   #RUN后面接容器运行前需要执行的命令，由于Dockerfile文件不能超过127行，因此当命令较多时建议写到脚本中执行
ENTRYPOINT ping www.aliyun.com #开机启动命令，此处最后一个命令需要是可在前台持续执行的命令，否则容器后台运行时会因为命令执行完而退出。
</code></div></pre>
</li>
<li>
<p>创建docker的依赖（这里以python为例）</p>
<p>略！</p>
</li>
<li>
<p>docker镜像构建</p>
</li>
</ol>
<pre><div class="hljs"><code class="lang-shell">docker build -t webcentos:v1 .    # . 是Dockerfile文件的路径，不可以忽略，但是如果你进入了Dockerfile文件下，便可以用.代替
docker images    #查看所有镜像
</code></div></pre>
<ol start="4">
<li>docker正在运行容器操作</li>
</ol>
<pre><div class="hljs"><code class="lang-shell">docker run -d webcentos:v1       #后台运行容器
docker ps                        #查看当前运行中的容器
docker ps -a                     #查看所有容器，包括未运行中的
docker logs CONTAINER ID/IMAGE   #如未查看到刚才运行的容器，则用容器id或者名字查看启动日志排错
</code></div></pre>
<ol start="5">
<li>
<p>将镜像推送至远程仓库。</p>
<p>默认推送到Docker Hub。您需要先登录Docker，为镜像绑定标签，将镜像命名为<code>Docker用户名/镜像名:标签</code>的格式。最终完成推送。</p>
</li>
</ol>
<pre><div class="hljs"><code class="lang-shell">docker login --username=dtstack_plus registry.cn-shanghai.aliyuncs.com #执行后输入镜像仓库密码
docker tag [ImageId] registry.cn-shanghai.aliyuncs.com/dtstack123/test:[标签]
docker push registry.cn-shanghai.aliyuncs.com/dtstack123/test:[标签]
</code></div></pre>
<p>b73ec346d9bd 1dce438b707a 0d57dcebe187 d80234f08d6a bf73b7368a41 eb1d8da400cb ec3c7e79a73a 752cc6201d99 0a25ce651e53 36c5ee644089 f3d381de02a4 4dd5a8d88ab1 97b02afce580 be905ae987fb c26039f42983 9bf2e4c1373e 1c35ef4f092a</p>
</li>
</ul>
    </v-row>
  </v-flex>
</template>