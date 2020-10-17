<template>
    <div class="layout-wrap">
        <div class="content-wrap" :style="{justifyContent: currentIndex, flexDirection: direction}">
            <div class="item"
                v-for="item in items">{{ item.title }}</div>
        </div>
        <div class="action-wrap">
            <div class="action-item"
                :class="[currentIndex === item.title ? 'action-active' : 'action-item']"
                v-for="item in actions"
                @click="changeWay(item)">{{ item.title }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actions: [
                    { title: 'flex-start' },
                    { title: 'flex-end', },
                    { title: 'center' },
                    { title: 'space-between', },
                    { title: 'space-around' },
                    { title: 'space-evenly' },
                ],
                items: [
                    {title: '1'},
                    {title: '2'},
                    {title: '3'},
                    {title: '4'},
                    {title: '5'}
                ],
                currentIndex: 'flex-start',
                direction: 'row'
            }
        },
        computed: {
            classObject: function () {
                return {
                    'action-active': this.isActive && !this.error
                }
            }
        },
        methods: {
            changeWay(item) {
                this.currentIndex = item.title;
            }
        }
    }
</script>

<style scoped>
    .layout-wrap {
        position: relative;
        background-color: #17181a;
        border: 2px solid #444;
    }

    .content-wrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #282c34;
        min-height: 100px;
    }

    .item {
        text-align: center;
        font-size: 30px;
        font-weight: 900;
        padding: 10px;
        flex: 0;
    }
    .item:nth-child(1) {
        background-color: #FA6400;
    }
    .item:nth-child(2) {
        background-color: #5b83fd;
    }
    .item:nth-child(3) {
        background-color: #6DD400;
    }
    .item:nth-child(4) {
        background-color: #F7B500;
    }
    .item:nth-child(5) {
        background-color: #6236FF;
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
    .action-active {
        background-color: #5b83fd;
    }
</style>