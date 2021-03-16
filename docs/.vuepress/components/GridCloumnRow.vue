<template>
    <div class="layout-wrap">
        <div class="content-wrap" :style="{gridTemplateColumns: columns, gridTemplateRows: rows, gridGap: gap}">
            <div class="item"
                v-for="item in items">{{ item.title }}</div>
        </div>
        <div class="action-wrap">
            <el-input placeholder="请输入每列的尺寸" v-model="columns">
                <template slot="prepend">grid-template-columns</template>
            </el-input>
            <el-input placeholder="请输入每行的尺寸" v-model="rows">
                <template slot="prepend">grid-template-rows</template>
            </el-input>
            <el-input placeholder="请输入行列的间距" v-model="gap">
                <template slot="prepend">grid-gap</template>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: "60px 100px",
                rows: "60px 100px",
                gap: "10px 20px",
                items: [
                    {title: '1'},
                    {title: '2'},
                    {title: '3'},
                    {title: '4'},
                    {title: '5'},
                    {title: '6'}
                ]
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
        display: grid;
        background-color: #282c34;
        min-height: 100px;
    }
    .item {
        text-align: center;
        font-size: 30px;
        font-weight: 900;
        color: #222;
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
    .item:nth-child(6) {
        background-color: #ec3fc1;
    }
</style>