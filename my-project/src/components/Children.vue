
<template>
  <div class="tinymce">
    <h1>tinymce Children</h1>
    <editor  id="tinymce" v-model="tinymceHtml" :init="init"></editor>
  </div>
</template>

<script>
// 引入tinymce主件
import tinymce from './../../static/tinymce/tinymce'
// 必须引入主体才能汉化和显示
import './../../static/tinymce/themes/silver/theme'
// 引入tinymce-vue组件
import Editor from '@tinymce/tinymce-vue'
// 引入图片上传组件
import image from './../../static/tinymce/plugins/image'
export default {
  name: 'tinymce',
  data () {
    return {

      tinymceHtml: '',
      init: {
        // 引入汉化组件
        language_url: './../../static/zh_CN.js',
        // 设定语言为中文
        language: 'zh_CN',
        // 加入主题
        skin_url: './../../static/tinymce/skins/ui/oxide',
        // 注册功能组件
        plugins:
          ' lists image colorpicker textcolor wordcount contextmenu autoresize',
        // 注册工具栏
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent  | undo redo | link unlink image  | removeformat '

      }
    }
  },
  mounted () {
    // 页面加载的时候初始化组件
    tinymce.init({})
  },
  components: { Editor }
}
</script>
<style scoped>
</style>
