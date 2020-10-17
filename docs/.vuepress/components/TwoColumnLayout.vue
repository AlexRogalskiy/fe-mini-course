<template>
    <div class="layout-wrap">
        <div v-if="currentIndex === 'float-margin'" class="content-wrap">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div v-else-if="currentIndex === 'float-hidden'" class="content-wrap">
            <div class="left"></div>
            <div class="right-hidden"></div>
        </div>
        <div v-else class="content-flex-wrap">
            <div class="left-flex"></div>
            <div class="right-flex"></div>
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
                    { title: '方式二', id: 'float-hidden' },
                    { title: '方式三', id: 'flex' },
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
    .nav-bar {
        position: fixed;
        background-color: #333;
        left: 0;
        top: 0;
        right: 0;
        height: 64px;
    }

    .content-wrap {
        background-color: #282c34;
        height: 100px;
    }

    .content-flex-wrap {
        display: flex;
        height: 100px;
        background-color: #282c34;
    }
    .left-flex {
        height: 100%;
        width: 140px;
        background-color: #5b83fd;
    }
    .right-flex {
        height: 100%;
        flex: 1;
        background-color: #6DD400;
    }

    .left, .right {
        height: 100%;
    }

    .left {
        float: left;
        width: 140px;
        background-color: #5b83fd;
    }

    .right {
        margin-left: 140px;
        background-color: #F7B500;
    }
    .right-hidden {
        margin-left: 140px;
        background-color: #FA6400;
        height: 100%;
        overflow: hidden;
    }

    .action-wrap {
        display: flex;
        justify-content: space-between;
    }

    .action-item {
        background-color: #333;
        display: inline-block;
        padding: 10px 20px;
        flex: 1;
        text-align: center;
        border-radius: 5px;
        margin: 8px;
        cursor: pointer;
    }
</style>