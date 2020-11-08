<template>
    <div class="tool-title-wrap">
        <div class="content-wrap">
            <textarea class="area orgin-area" v-model="orginText"" placeholder="我是普通的文本内容"></textarea>
            <div class="action-wrap">
                <el-button type="primary" @click="clear"">清空</el-button>
                <el-button class="copy-btn-nomal" type="primary" @click="nomalCopy">复制</el-button>
            </div>
            <textarea class="area base64-area" v-model="base64Text"" placeholder="我是 base64"></textarea>
            <div class="action-wrap">
                <el-button class="copy-btn-base64" type="primary" @click="base64Copy">复制</el-button>
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
            base64Text: ''
        }
    },
    watch: {
        orginText(nText, oText) {
            if (nText !== oText) {
                this.toBase64(nText);
            }
        },
        base64Text(nText, oText) {
            if (nText !== oText) {
                this.toOrgin(nText);
            }
        }
    },
    methods: {
        toBase64(text) {
            if (!text) {
                this.base64Text = '';
            }
            else {
                try {
                    this.base64Text = window.btoa(text);
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
                    this.orginText = window.atob(text);
                } catch (error) {
                    this.showText('请输入正确的Base64编码');
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
        base64Copy() {
            this.copyText('.copy-btn-base64', this.base64Text)
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
            height 200px
            width 100%
        .base64-area
            margin-top 40px
</style>