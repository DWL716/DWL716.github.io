touch b.txt  创建文档
mkdir public 创建public文件夹
curl -v www.baidu.com   返回一个url地址内容
mac安装webpack:
       1、用npm的方式安装，首先你要安装node.js,地址 https://nodejs.org/en/download/下载安装 
       2、安装完看有没有安装成功，看下版本,打开终端输入：node -v【查看node版本】、npm -v【查看npm版本】 
       3(必)、在终端里输入： sudo -s 回车，输入你的开机密码回车 
       4、全局安装webpack：npm install webpack -g 回车


npm ls --depth 0 -g // 看看哪些失效了
npm prune -g // 修剪下全局包
npm rebuild -g // 重建下全局包
npm update -g // 更新下全局包的版本
npm cache clear --force -g // 删除全局包的缓存（慎重）