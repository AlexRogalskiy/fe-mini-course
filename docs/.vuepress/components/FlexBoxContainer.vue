<template>
    <div class="layout-wrap">
        <div class="content-wrap"
            :style="{flexDirection: slectedActions[0], justifyContent: slectedActions[1], alignItems: slectedActions[2],  flexWrap: slectedActions[3],  alignContent: slectedActions[4]}">
            <div class="item" v-for="item in items">{{ item.title }}</div>
        </div>
        <template v-for="(value, index) in actions">
            <p class="action-name">{{ value.property }} : </p>
            <div class="action-wrap">
                <div v-for="item in value.items" class="action-item"
                    :class="[slectedActions[index] == item.title ? 'action-active' : 'action-item']"
                    @click="changeWay(index, item)">{{ item.title }}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actions: [
                    {
                        property: 'flex-direction：布局方向',
                        items: [
                            { title: 'row' },
                            { title: 'row-reverse', },
                            { title: 'column', },
                            { title: 'column-reverse' },
                        ]
                    },
                    {
                        property: 'justify-content：主轴对齐方式',
                        items: [
                            { title: 'flex-start' },
                            { title: 'flex-end', },
                            { title: 'center' },
                            { title: 'space-between', },
                            { title: 'space-around' },
                            { title: 'space-evenly' },
                        ]
                    },
                    {
                        property: 'align-items：纵轴的对齐方式',
                        items: [
                            { title: 'stretch' },
                            { title: 'flex-start' },
                            { title: 'flex-end', },
                            { title: 'center', },
                            { title: 'baseline', },
                        ]
                    },
                    {
                        property: 'flex-wrap：是否要换行',
                        items: [
                            { title: 'nowrap' },
                            { title: 'wrap', },
                            { title: 'wrap-reverse' },
                        ]
                    },
                    {
                        property: 'align-content：多行时对齐方式',
                        items: [
                            { title: 'flex-start' },
                            { title: 'flex-end', },
                            { title: 'center' },
                            { title: 'stretch' },
                            { title: 'space-between', },
                            { title: 'space-around' },
                            { title: 'space-evenly' },
                        ]
                    }
                ],
                slectedActions: [
                    'row',
                    'flex-start',
                    'stretch',
                    'nowrap',
                    'flex-start'
                ],
                items: [
                    { title: '1' },
                    { title: '2' },
                    { title: '3' },
                    { title: '4' },
                    { title: '5' }
                ]
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
            changeWay(index, item) {
                this.slectedActions.splice(index, 1, item.title);
            },
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
        overflow: hidden;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #282c34;
        min-height: 240px;
    }

    .item {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        padding: 4px;
        width: 160px;
        flex-shrink: 0;
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

    .action-name {
        font-size: 15px;
        padding: 0;
        margin: 5px 10px;
    }

    .action-item {
        background-color: #333;
        display: inline-block;
        padding: 6px 2px;
        flex: 1;
        text-align: center;
        font-size: 15px;
        border-radius: 5px;
        margin: 2px;
        cursor: pointer;
    }

    .action-active {
        background-color: #5b83fd;
    }
</style>