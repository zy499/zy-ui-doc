import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

// import zyUi from 'zy499-ui' // 要编写对应的文档的包
let lazy = true

Vue.mixin({
  mounted(){
    if (lazy) {
      import('zy499-ui').then(module => {
        Vue.use(module.default)
      })
      lazy = !lazy
    }
  }
})
import 'zy499-ui/dist/zy499-ui.css'
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue,
  options, 
  router,
  siteData
}) => {
  Vue.use(Element);
}