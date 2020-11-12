<template>
    <div class="scroll-wrap">前端小课是通过图片、文字、代码、视频等多种方式写成的一本多媒体电子书。全书分为不同的小书，每本小书旨在讲透一个知识点，比如 CSS布局、HTML、动画。以最基础的编程知识为起点，即使不懂编程的小白也能够通过本书学会编程，顺利进入互联网行业。
    </div>
  </template>
  
<script>
export default {
    data() {
      return {
        a: undefined,
        b: undefined
      }
    }
  }
</script>
  
<style scoped>
.scroll-wrap {
    background-color: #292B35;
    padding: 8px;
    height: 100px;
    overflow: scroll;
}
</style>