<template>
    <div class="layout-wrap">
        <div class="content-wrap">
            <div class="grid-line-wrap">
                <div class="row-line"></div>
                <div class="row-line"></div>
                <div class="row-line"></div>
                <div class="column-line column-line1"></div>
                <div class="column-line column-line2"></div>
                <div class="column-line column-line3"></div>
                <div class="column-line column-line4"></div>
                <div class="column-line column-line5"></div>
                <div class="column-line column-line6"></div>
            </div>
            <div class="item" :style="{gridColumn: columns, gridRow: rows}">素燕</div>
        </div>
        <div class="action-wrap">
            <el-input placeholder="请输入item所在的列位置" v-model="columns">
                <template slot="prepend">grid-column</template>
            </el-input>
            <el-input placeholder="请输入item所在的行位置" v-model="rows">
                <template slot="prepend">grid-row</template>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: "1 / 2",
                rows: "1 / 2"
            }
        }
    }
</script>

<style scoped>
    .layout-wrap {
        position: relative;
        background-color: #17181a;
        border: 2px solid #444;
        width: 700px;
        margin: 0 auto;
    }

    .grid-line-wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .row-line {
        height: 40px;
        border-bottom: 1px solid #fff;
    }
    .column-line {
        position: absolute;
        left: 0;
        top: 0;
        width: 100px;
        bottom: 0;
        border-right: 1px solid #fff;
    }
    .column-line1 {
        left: 0;
    }
    .column-line2 {
        left: 100px;
    }
    .column-line3 {
        left: 200px;
    }
    .column-line4 {
        left: 300px;
    }
    .column-line5 {
        left: 400px;
    }
    .column-line6 {
        left: 500px;
    }

    .content-wrap {
        position: relative;
        display: grid;
        grid-template-columns: repeat(7, 100px);
        grid-template-rows: repeat(4, 40px);
        background-color: #282c34;
        min-height: 100px;
    }
    .item {
        text-align: center;
        font-size: 30px;
        font-weight: 900;
        background-color: #5b83fd;
        color: #fff;
    }
</style>