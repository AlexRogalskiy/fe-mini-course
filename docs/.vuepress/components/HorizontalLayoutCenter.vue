<template>
    <div class="center-wrap">
        <div v-if="currentIndex === 'margin'" class="content-wrap">
            <div class="margin"></div>
        </div>
        <div v-else-if="currentIndex === 'transform'" class="content-wrap">
            <div class="transform">《前端小课》</div>
        </div>
        <div v-else-if="currentIndex === 'flex'" class="content-flex-wrap">
            <div class="flex-item">《前端小课》- flex</div>
        </div>
        <div v-else class="content-inline-wrap">
            <div class="inline-item">《前端小课》- flex</div>
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
                    { title: '方式一', id: 'margin' },
                    { title: '方式二', id: 'transform' },
                    { title: '方式三', id: 'flex' },
                    { title: '方式四', id: 'inline' }
                ],
                currentIndex: 'margin'
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
    .center-wrap {
        position: relative;
        background-color: #17181a;
    }

    .content-wrap {
        position: relative;
        background-color: #282c34;
        height: 140px;
    }

    .content-flex-wrap {
        display: flex;
        justify-content: center;
        background-color: #282c34;
        height: 140px;
    }

    .content-inline-wrap {
        position: relative;
        background-color: #282c34;
        height: 140px;
        text-align: center;
    }

    .margin {
        width: 160px;
        height: 100px;
        margin: 0 auto;
        background-color: #5b83fd;
    }

    .flex-item {
        text-align: center;
        background-color: #5b83fd;
        padding: 10px;
    }
    .inline-item {
        display: inline-block;
        background-color: #5b83fd;
        padding: 10px;
    }

    .transform {
        position: absolute;
        padding: 10px;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: #5b83fd;
    }

    .action-wrap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .action-item {
        background-color: #333;
        display: inline-block;
        padding: 6px 2px;
        flex: 1;
        text-align: center;
        border-radius: 5px;
        margin: 2px;
        cursor: pointer;
    }
</style>