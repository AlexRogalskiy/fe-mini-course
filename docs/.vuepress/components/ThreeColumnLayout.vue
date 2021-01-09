<template>
    <div class="layout-wrap">
        <div v-if="currentIndex === 'float-margin'" class="content-wrap">
            <div class="left">Left</div>
            <div class="mid">Mid</div>
            <div class="right">Right</div>
        </div>
        <div v-else-if="currentIndex === 'float-hidden'" class="content-wrap">
            <div class="mid-wrap">
                <div class="mid2">Mid</div>
            </div>
            <div class="left2">Left</div>
            <div class="right2">Right</div>
        </div>
        <div class="action-wrap">
            <div class="action-item" v-for="item in actions" @click="changeWay(item)">{{ item.title }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actions: [
                    { title: '方式一', id: 'float-margin' },
                    { title: '方式二', id: 'float-hidden' }
                ],
                currentIndex: 'float-margin'
            }
        },
        computed: {
            sumRet() {
                if (!this.a && !this.b) {
                    return 0;
                }
                return +this.a + +this.b;
            }
        },
        methods: {
            changeWay(item) {
                this.currentIndex = item.id;
                console.log(item);
            }
        }
    }
</script>

<style scoped>
    .layout-wrap {
        position: relative;
        background-color: #17181a;
    }

    .content-wrap {
        background-color: #282c34;
        height: 100px;
    }

    .left, .right, .mid{
        height: 100%;
    }

    .left {
        float: left;
        width: 140px;
        background-color: #5b83fd;
    }
    .mid {
        float: left;
        width: 100px;
        background-color: #FA6400;
    }
    .right {
        margin-left: 240px;
        background-color: #F7B500;
    }
/* 中间自适应，两边固定 */
    .left2, .right2, .mid-wrap {
        height: 80%;
        float: left;
    }

    .left2 {
        width: 140px;
        background-color: #FA6400;
        margin-left: -100%;
    }
    .mid-wrap {
        height: 100%;
        width: 100%;
        background-color: #5b83fd;
    }
    .mid2 {
        background-color: #6DD400;
        margin-left: 140px;
        margin-right: 80px;
        height: 80%;
    }
    .right2 {
        width: 80px;
        background-color: #F7B500;
        margin-left:  -80px;
    }

    .action-wrap {
        display: flex;
        justify-content: space-between;
    }

    .action-item {
        background-color: #333;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        flex: 1;
        text-align: center;
        border-radius: 5px;
        margin: 8px;
        cursor: pointer;
    }
</style>