<template>
    <div class="tool-title-wrap">
        <p>点击鼠标右键，可以保存、复制图片</p>
        <div class="content-wrap">
            <textarea v-model="qtext"" placeholder="请输入 URL 或其它文本内容"></textarea>
            <div id="qrcode">
                <div v-if="!qtext || qtext.length == 0" class="default"></div>
            </div>
        </div>
    </div>
</template>

<script>
// document or window not defined
// https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6
// import QRCode from '../assets/js/qrcode.js';

export default {
    data() {
        return {
            qtext: ''
        }
    },
    mounted() {
        // 解决服务端无法识别 document 和 window 对象的问题
        import('../assets/js/qrcode.js').then(module => {
            const QRCode = module.default;
            let qrcode = new QRCode(document.getElementById("qrcode"), {
                width : 160,
                height : 160,
                colorDark : "#000000",
                colorLight : "#ffffff"
            });
            this.qrcode = qrcode;
        });
    },
    watch: {
        qtext(nText, oText) {
            if (nText !== oText) {
                this.makeCode(nText);
            }
        }
    },
    methods: {
        makeCode(text) {
            if (!text) {
                // the clear not work
                this.qrcode.clear();
            }
            else {
                this.qrcode.makeCode(text);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.tool-title-wrap
    background-color $navBgColor
    .content-wrap
        display flex
        textarea
            flex 1
            padding 10px
            border-radius 4px
            line-height 24px
        #qrcode
            position relative
            box-sizing border-box
            flex-shrink 0
            width 200px
            height 200px
            margin-left 20px
            background-color #fff
            border-radius 4px
            border 4px solid #000
            padding 20px
            .default
                position absolute
                left 20px
                top 20px
                right 20px
                bottom 20px
                background-color #fff
    .button
        margin 20px 0
</style>