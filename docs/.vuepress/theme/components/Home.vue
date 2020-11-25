<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <BookCover>
        
      </BookCover>
    </header>

    <div
      v-if="data.tools && data.tools.length"
      class="tools"
    >
      <div
        v-for="(tool, index) in data.tools"
        :key="index"
        class="tool-item"
      >
        <a :href="tool | actionLink">
          <h2>{{ tool.title }}</h2>
        </a>
      </div>
    </div>

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

  mounted() {
    import('codemirror/mode/javascript/javascript.js').then(module => {});
    import('vue-codemirror').then(module => {
        // this.dynamicComponent = module.default.codemirror;
    });
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
@import './home.stylus';
</style>
