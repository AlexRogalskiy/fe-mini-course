<template>
    <div class="book-info">
        <a :href="bookLink">
            <div class="cover-wrap">
                <div class="top">
                    <div class="logo"></div>
                    <p class="name">{{ book.name }}</p>
                    <p class="des">{{ book.solog }}</p>
                    <p class="author">{{ book.author }} / 著</p>
                </div>
            </div>
        </a>
        <div class="book-des-wrap">
            <p class="book-title">关于本书</p>
            <p class="des">{{ book.des }}</p>
            <p class="des">{{ book.des2 }}</p>
            <p class="action">
                <NavLink
                class="action-button"
                :item="actionLink"
                />
            </p>
        </div>
    </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
    name: 'book-ifo',
    components: {
        NavLink
    },
    data() {
        return {
            book: {
                name: '《前端小课》',
                solog: '一本免费多媒体电子书，从零开始学习前端技术，帮阻10W人入门并进阶前端。',
                author: '王素燕',
                des: '前端小课是通过图片、文字、代码、视频等多种方式写成的一本多媒体电子书。全书分为不同的小书，'
                + '每本小书旨在讲透一个知识点，比如 CSS布局、HTML、动画。以最基础的编程知识为起点，即使'
                + '不懂编程的小白也能够通过本书学会编程，顺利进入互联网行业。',
                des2: '本书最大的特色是通过公众号+图书+网站形成一个闭环。读者可通过公众号实时获得最新的前端知识，'
                + '并与作者实时互动；通过图书可以系统地学习前端知识；通过网站可看到代码实时'
                + '运行结果，真正的所见即所得。'
            },
            bookLink: '/books/'
        };
    },
    computed: {
        actionLink () {
            return {
                link: this.bookLink,
                text: '立即阅读'
            }
        }
    },
    methods: {
        read() {
            this.$emit('on-read');
        }
    }
};
</script>

<style lang="stylus">
.book-info
    position relative
    display flex
    justify-self center
    align-items center
    background-color $themeBgColor3
    border-radius 8px
    padding 0 30px 40px 30px
    marigin 0
    .cover-wrap
        position relative
        top 20px
        width 21rem
        flex-shrink 0
        cursor pointer
        .top
            width 290px
            height 430px
            background-color $bgGrayColor
            border-top-right-radius 8px
            border-bottom-right-radius 8px
            padding 0.125rem 0
            font-family PingFangSC-Medium
            box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.08)
            transition all .25s ease
            &:hover
                box-shadow 0 6px 6px 0 rgba(0, 0, 0, 0.1)
            .logo
                width 290px
                height 240px
                margin-top 20px
                background-image url(https://z3.ax1x.com/2021/04/11/c0KRBj.png)
                background-position top center
                background-repeat no-repeat
                background-size 17.5rem auto
            .name
                font-weight 700
                font-size 20px
                text-align center
                color #000
                font-weight 700
                margin-top 20px
            .des
                font-size 14px
                color #333
                margin 0 18px
                text-align left
            .author
                font-size 14px
                color #333
    .book-des-wrap
        margin-left 3rem
        text-align left
        .book-title
            font-size 28px
            font-family PingFangSC-Medium
            color #333
            margin 5rem 0 0 0
        .des
            font-size 18px
            color  #333
            letter-spacing: 0.0625rem
@media (max-width: $MQMobile)
  .book-info
    flex-direction column
    justify-content center
    align-items center
    .book-des-wrap
      margin 0
      .book-title
        font-size 1.875rem
      .des
        font-size 1rem
</style>