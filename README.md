grunt-adjust
============

这是一个将html内部所有css链接导入到头部head内，将script标签根据设置导入到头部或底部

### grunt配置说明

  	// 自动雪碧图
      adjust: {
          test: {
              files: [
                  {
                      //启用动态扩展
                      expand: true,
                      // css文件源的文件夹
                      cwd: 'html/',
                      // 匹配规则
                      src: ['*.html'],
                      //导出的网页存放目录
                      dest: 'tmp/',
                      // 导出的网页扩展名
                      ext: '.html'
                  }
              ]
          }
      }
### html网页格式
  <link href="css/mian.css" import="import" />
  <script src="test.js" import="import"></script>

### 特别注意
1. 假如没有修改扩展名，请不要将网页输出到原目录，否则将被覆盖，不能撤销操作

### 版本记录

`0.0.1` 引入CSS和JS文件
