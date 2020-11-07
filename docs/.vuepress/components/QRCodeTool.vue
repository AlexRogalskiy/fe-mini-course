<template>
    <div class="tool-title-wrap">
        <div class="title">{{ title }}</div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="stylus" scoped>
  .tool-title-wrap
    background-color $navBgColor
    .title
      color #fff
      border-left 5px solid #fff
      padding 20px 10px
      font-weight 700
      font-size 24px
</style>