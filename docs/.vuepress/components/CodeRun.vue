<template>
    <div class="code-run-wrap">
        <component
            v-model="code"
            v-if="dynamicComponent"
            :is="dynamicComponent"
            :options="cmOptions">
        </component>
        <div class="action-wrap">
            <div class="action-item run" @click="run"></div>
            <div class="action-item clear" @click="clear"></div>
            <div class="action-item close" @click="closeConsole"></div>
            <div class="action-item full-screen" @click="fullscreen"></div>
        </div>
        <div v-show="logVisible" class="console-warp">
            <div v-for="item in logs" class="log">{{ item }}</div>
        </div>
        <!-- 全屏代码执行 -->
        <el-dialog
            :visible.sync="dialogVisible"
            :before-close="fullscreen"
            fullscreen>
            <div class="content-wrap">
                <component
                    v-model="code"
                    class="code-pannel"
                    v-if="dynamicComponent"
                    :is="dynamicComponent"
                    :options="cmOptions">
                </component>
                <div class="action-wrap">
                    <div class="action-item run" @click="run"></div>
                    <div class="action-item clear" @click="clear"></div>
                    <div class="action-item close" @click="closeConsole"></div>
                    <div class="action-item full-screen" @click="fullscreen"></div>
                </div>
                <div v-show="dlogVisible" class="console-warp">
                    <div v-for="item in logs" class="log">{{ item }}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<!-- https://www.npmjs.com/package/vue-codemirror -->
<script>
// import { codemirror } from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'
import '../assets/css/base16-dark.css'

export default {
    components: {
        // codemirror
    },
    props: {
        code: String
    },
    data() {
      return {
          cmOptions: {
            tabSize: 4,
            mode: 'text/javascript',
            theme: 'base16-dark',
            lineNumbers: true,
            line: true,
            indentUnit: 4,
            scrollbarStyle: 'null'
          },
          logs: [],
          dialogVisible: false,
          logVisible: false,
          dlogVisible: true,
          dynamicComponent: null
      }
    },
    mounted() {
        // 服务端渲染问题
        import('codemirror/mode/javascript/javascript.js').then(module => {});
        import('vue-codemirror').then(module => {
            this.dynamicComponent = module.default.codemirror;
        });
    },
    methods: {
        run(item) {
            // 需要在代码执行的时候，重新定义log
            this.reDefineConsoleLog();
            eval(this.code);
            console.log = this.orgLog;
        },
        reDefineConsoleLog(args) {
            this.orgLog = console.log;
            const calls = [];
            console.log = (...args) => {
                let logs = [];
                for(let i = 0; i < args.length; i++) {
                    let aLog = args[i];
                    let logStr = JSON.stringify(aLog);
                    if (!logStr) {
                        if (typeof aLog === 'function') {
                            // function can not 
                            logStr = aLog.constructor;
                        }
                    }
                    logs.push(logStr);
                }
                this.logs.push(logs.join(' , '));
                // 有打印日志时显示输出控制台
                this.logVisible = true;
                this.dlogVisible = true;
                this.orgLog(...args);
            };
        },
        clear() {
            this.logs = [];
        },
        fullscreen() {
            this.dialogVisible = !this.dialogVisible;
        },
        closeConsole() {
            this.logVisible = !this.logVisible;
            this.dlogVisible = !this.dlogVisible;
        }
    }
}
</script>
  
<style lang="stylus">
.code-run-wrap
    width 100%
    border-radius 4px
    background-color #292B35
    .console-warp
        padding 10px
        background-color #292B35
        height 120px
        overflow hidden scroll
        .log
            padding 4px 0
            font-size 14px
            color #fff
            border-bottom .5px solid #333
    .action-wrap
        display flex
        justify-content flex-end
        align-items center
        flex-wrap wrap
        background-color #fff
        padding 8px 30px
        .action-item 
            width 25px
            height 25px
            margin-left 50px
            cursor pointer
            background-size 100% 100%
    .run
        background-image url(//s3.ax1x.com/2020/11/12/BvqPRU.png)
    .clear
        background-image url(//s3.ax1x.com/2020/11/12/Bvqui6.png)
    .full-screen
        background-image url(//s3.ax1x.com/2020/11/12/BvqOfK.png)
        height 22px
        width 22px
    .close
        background-image url(//s3.ax1x.com/2020/11/12/DSkIns.png)
    .action-active
        background-color #5b83fd
    .CodeMirror-code
        height 300px
    .el-dialog
        padding 0
        .content-wrap
            display flex
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            .code-pannel
                flex 2
            .action-wrap
                display flex
                flex-direction column
                justify-content flex-start
                align-items center
                padding 0
                .action-item
                    flex-shrink 0
                    width 25px
                    height 25px
                    cursor pointer
                    margin 80px 25px 0 25px
                    background-size 100% 100%
                .full-screen
                    background-image url(//s3.ax1x.com/2020/11/12/DSk1X9.png)
            .console-warp
                flex 1
                height 100%
                padding 20px 10px
            .vue-codemirror
                .CodeMirror
                    height 100%
                    padding 20px 0
                    font-size 18px
        .el-dialog__header
            display none
            position absolute
            top 0
            right 0
        .vue-codemirror
            .CodeMirror
                height 100%
                padding 20px 0
                font-size 15px
        .el-dialog__body
            background-color #292B35
            padding 0
            margin 10px 20px
</style>