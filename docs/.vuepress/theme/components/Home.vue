<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <BookCover>
        
      </BookCover>
    </header>
    <p class="desk-title">我的小书</p>
    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <a :href="feature | actionLink">
          <div :style="{backgroundImage: 'url(' + feature.cover + ')'}""></div>
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </a>
      </div>
    </div>

    <Content class="theme-default-content custom" />
  </main>

</template>

<script>
import BookCover from '@theme/components/BookCover.vue'

export default {
  name: 'Home',

  components: {
    BookCover
  },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },

  filters: {
    actionLink(info) {
      return info.href 
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 2.5rem
      font-family PingFangSC-Medium
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 75rem
      font-size 1.25rem
      line-height 1.3
      letter-spacing 0.0625rem
      color #ccc
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.5rem 2rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .desk-title
    color: #fff;
    font-size: 30px;
    font-family: PingFangSC-Medium;
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin 2.5rem 0
    display flex
    flex-wrap no-wrap
    align-items flex-start
    justify-content space-between
    overflow hidden
  .feature
    flex-grow 0
    flex-shrink 0
    width 190px
    height 260px
    background-color #fff
    border-top-right-radius 4px
    border-bottom-right-radius 4px
    text-align center
    margin-right 20px
    border-radius 5px 8px 8px 5px
    transition .5s linear
    transform-style preserve-3d
    transform-origin left center 0px
    &::before
      content ""
      position absolute
      width 10px
      height calc(100% + 2px)
      top -1px
      z-index 100
      border-radius 2px
      left 0
      transition 2s ease
      background linear-gradient(to right, #9c2e2b 0%, #cc4b48 12%, #9c2e2b 25%, #cc4b48 37%, #9c2e2b 50%, #cc4b48 62%, #9c2e2b 75%, #cc4b48 87%, #9c2e2b 100%)
    &:last-child
      margin-right 0
    div
      width 100%
      height 140px
      margin-top 10px
      background-position cover
      background-repeat no-repeat
      background-size 100% 100%
    h2
      font-size 16px
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten(#17181a, 10%)
      font-family PingFangSC-Medium
      padding 0 8px
    p
      color #333
      max-height 60px
      height 40px
      padding 0 8px 8px
      font-size 14px
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .features
      overflow scroll
      .feature
        h2
          font-size 1.25rem
</style>
