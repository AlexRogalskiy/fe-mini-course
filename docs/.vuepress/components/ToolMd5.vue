<template>
    <div class="tool-title-wrap">
        <div class="content-wrap">
            <textarea class="area orgin-area" v-model="orginText"" placeholder="请输入原始内容"></textarea>
            <div class="action-wrap">
                <el-button type="primary" @click="clear"">清空</el-button>
                <el-button class="copy-btn-nomal" type="primary" @click="nomalCopy">复制</el-button>
            </div>
            <textarea class="area encode-area" v-model="encodeText" placeholder="我是被转换后的 md5" readonly></textarea>
            <div class="action-wrap">
                <el-button class="copy-btn-encode" type="primary" @click="encodeCopy">复制</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import md5 from 'blueimp-md5';
import Clipboard from 'clipboard';

export default {
    props: {
        title: String
    },
    data() {
        return {
            orginText: '',
            encodeText: ''
        }
    },
    watch: {
        orginText(nText, oText) {
            if (nText !== oText) {
                this.toencode(nText);
            }
        }
    },
    methods: {
        toencode(text) {
            if (!text) {
                this.encodeText = '';
            }
            else {
                this.encodeText = md5(text);
            }
        },
        encodeCopy() {
            this.copyText('.copy-btn-encode', this.encodeText)
        },
        nomalCopy() {
            this.copyText('.copy-btn-nomal', this.orginText)
        },
        copyText(sel, text) {
            const clipboard = new Clipboard(sel, {
                text: function() {
                    return text;
                }
            });
            clipboard.on('success', e => {
                this.$message.success('已复制到剪贴板');
            });

            clipboard.on('error', e => {
                this.$message.error('复制时发生了错误');
            });
        },
        clear() {
            this.orginText = '';
        }
    }
}
</script>

<style lang="stylus" scoped>
.tool-title-wrap
    background-color $navBgColor
    .content-wrap
        .action-wrap
            display flex
            justify-content flex-end
            margin-top 8px
        .area
            box-sizing border-box
            padding 10px
            border-radius 4px
            line-height 24px
            height 100px
            width 100%
        .encode-area
            margin-top 40px
            height 46px
</style>