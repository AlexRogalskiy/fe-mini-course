<template>
    <div class="tool-title-wrap">
        <div class="content-wrap">
            <textarea class="area orgin-area" v-model="orginText"" placeholder="我是要编码的 URI"></textarea>
            <div class="action-wrap">
                <el-button type="primary" @click="clear"">清空</el-button>
                <el-button class="copy-btn-nomal" type="primary" @click="nomalCopy">复制</el-button>
            </div>
            <textarea class="area encode-area" v-model="encodeText"" placeholder="我是被编码后的 URI"></textarea>
            <div class="action-wrap">
                <el-button class="copy-btn-encode" type="primary" @click="encodeCopy">复制</el-button>
            </div>
        </div>
    </div>
</template>

<script>
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
        },
        encodeText(nText, oText) {
            if (nText !== oText) {
                this.toOrgin(nText);
            }
        }
    },
    methods: {
        toencode(text) {
            if (!text) {
                this.encodeText = '';
            }
            else {
                try {
                    this.encodeText = window.encodeURIComponent(text);
                } catch (error) {
                    this.showText('请输入正确的文本，不支持汉语');
                }
            }
        },
        toOrgin(text) {
            if (!text) {
                this.orginText = '';
            }
            else {
                try {
                    this.orginText = window.decodeURIComponent(text);
                } catch (error) {
                    this.showText('请输入正确的encode编码');
                }
            }
        },
        showText(text) {
            if (this.isShowedMsg) {
                return;
            } 
            this.$message.error(text);
            this.isShowedMsg = true;
            setTimeout(() => {
                this.isShowedMsg = false;
            }, 10000);
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
</style>