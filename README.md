grunt-adjust
============

这是一个将html内部所有css链接导入到头部head内，将script标签根据设置导入到头部或底部

### grunt配置说明

      adjust: {
          test: {
              options: {
                css:'</head>',
                js:'</head>'
              },
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


### 特别注意
1. 假如没有修改扩展名，请不要将网页输出到原目录，否则将被覆盖，不能撤销操作
2. options中参数css和js分别指定将页面中的css链接和js链接放在页面哪个位置之前，默认放在head结束标签之前（可以省略）


### 版本记录

`0.0.1` 移动CSS和JS链接到页面头部
`0.0.2` 移动css和js链接到指定位置
        修改页面标题为最后一个title标签中内容