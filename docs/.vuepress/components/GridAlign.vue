<template>
    <div class="layout-wrap">
        <div class="content-wrap" :style="{justifyItems: justifyItems, justifyContent: justifyContent, alignItems: alignItems, alignContent: alignContent}">
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
            <div class="item item1">素燕</div>
            <div class="item item2">前端小课</div>
            <div class="item item3">Lefe</div>
            <div class="item item4" :style="{justifySelf: justifySelf, alignSelf: alignSelf}">懂iOS</div>
        </div>
        <div class="action-wrap">
            <el-input placeholder="请输入item所在的列位置" v-model="justifyItems">
                <template slot="prepend">justify-items</template>
            </el-input>
            <el-input placeholder="请输入item所在的行位置" v-model="justifyContent">
                <template slot="prepend">justify-content</template>
            </el-input>
            <el-input placeholder="请输入item所在的行位置" v-model="justifySelf">
                <template slot="prepend">justify-self</template>
            </el-input>
            <el-input placeholder="请输入item所在的列位置" v-model="alignItems">
                <template slot="prepend">align-items</template>
            </el-input>
            <el-input placeholder="请输入item所在的行位置" v-model="alignContent">
                <template slot="prepend">align-content</template>
            </el-input>
            <el-input placeholder="请输入item所在的行位置" v-model="alignSelf">
                <template slot="prepend">align-self</template>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                justifyItems: "",
                justifyContent: "",
                justifySelf: "",
                alignItems: "",
                alignContent: "",
                alignSelf: ""
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
        height: 60px;
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
        grid-template-rows: repeat(4, 60px);
        background-color: #282c34;
        min-height: 100px;
    }
    .item {
        text-align: center;
        font-size: 16px;
        font-weight: 900;
        color: #fff;
        height: 20px;
    }
    .item1 {
        background-color: #5b83fd;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
    .item2 {
        background-color: hsl(29, 98%, 67%);
        grid-row: 1 / 2;
        grid-column: 2 / 3;
    }
    .item3 {
        background-color: hsl(197, 92%, 49%);
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }
    .item4 {
        background-color: hsl(155, 92%, 49%);
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }
</style>