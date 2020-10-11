<template>
  <div class="add-wrap">
    <input type="text" v-model="a" placeholder="请输入一个数字">
    <input type="text" v-model="b" placeholder="请再输入一个数字">
    <div>{{ a ? a : 0 }} + {{ b ? b : 0 }} = {{ sumRet }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: undefined,
      b: undefined
    }
  },
  computed: {
    sumRet() {
      if (!this.a && !this.b) {
        return 0;
      }
      return +this.a + +this.b;
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-wrap
  background-color $navBgColor
  padding 20px
  input
    display block
    margin-bottom 10px
    height 30px
    width 200px
</style>