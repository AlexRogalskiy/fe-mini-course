<template>
    <div class="layout-wrap">
        <div v-if="currentIndex === '0-1-2'" class="content-wrap">
            <div  class="item"
                :style="{flexShrink: index}"
                v-for="(item, index) in items">{{ item.title }}
            </div>
        </div>
        <div v-else class="content-wrap">
            <div class="item"
                :style="{flexShrink: currentIndex}"
                v-for="(item2, index) in items">{{ item2.title }}
            </div>
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
                    { title: '1', },
                    { title: '0' },
                    { title: '0.2', },
                    { title: '0-1-2' },
                ],
                items: [
                    {title: '1'},
                    {title: '2'},
                    {title: '3'}
                ],
                currentIndex: '1'
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
                console.log(this.currentIndex);
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
        overflow: hidden;;
        flex-direction: row;
        justify-content: stretch;
        flex-wrap: nowrap;
        background-color: #282c34;
        min-height: 100px;
    }

    .item {
        flex-shrink: 0;
        flex-grow: 0;
        text-align: center;
        font-size: 30px;
        font-weight: 900;
        padding: 10px;
        width: 300px;
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
        flex-wrap: wrap;
    }

    .action-item {
        background-color: #333;
        color: #fff;
        display: inline-block;
        padding: 6px 2px;
        flex: 1;
        text-align: center;
        border-radius: 5px;
        margin: 2px;
        cursor: pointer;
    }
    .action-active {
        background-color: #5b83fd;
    }
</style>