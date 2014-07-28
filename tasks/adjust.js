var fs = require('fs');
module.exports = function (grunt) {
//调整链接顺序
//将body中的css和js链接更改到指定位置
//当页面body中有title时，将后面的替换到head中


  "use strict";
  // Export the SpriteMaker function
  grunt.registerMultiTask('adjust', 'adjust the place of css and js links.', function () {
    var that = this,
      done = this.async(),
      //log = function(){};//
      log = console.log;//
    
    var options = this.options({
      css:'</head>',
      js:'</head>'
    });
    log(options.css);
    var hasDelete = false;
    var myimport = function (file, callback) {
      //log("file\n");
      //log(file);
      try{
        var src = file.src[0];
        log("read file: "+src);
        var context = fs.readFileSync(src,'utf-8');
        var outdata = '',head = '',body = '';
        var len1 = 0,len2 = 0;
        len2 = context.indexOf("</head>");
        head = context.substring(0,len2);
        body = context.substring(len2);
        var points = body.match(/(<link .*\/>)|(<script .*>.*<\/script>)/g);
        var css='',js='';//需要增加的css和js
        if(points){
          for(var i = 0;i<points.length;i++){
            var point = points[i];
            log(point);
            if(point.charAt(1) === 'l'){
              css+= point+'\n';
            }else{
              js+= point+'\n';
            }
            len1 = body.indexOf(point);
            len2 = len1+point.length;
            body = body.substring(0,len1)+body.substring(len2);
          }
          var title = body.match(/<title.*<\/title>/gi);
          if(title && title.length>0){
            body = body.replace(/<title.*<\/title>/gi,'');
            head = head.replace(/<title.*<\/title>/gi,title[title.length -1]);
          }
          outdata = head+body;
          outdata = outdata.replace(options.css,css+options.css);
          outdata = outdata.replace(options.js,js+options.js);
        }else{
          outdata = context;
        }
        console.log("write to file:"+file.dest);
        fs.writeFileSync(file.dest,outdata,"utf-8");
        callback();
      }catch(err){
        throw err;
        callback();
      }
    };

    grunt.util.async.forEachSeries(this.files, myimport, function (err) {
      done();
    });

  });

};
