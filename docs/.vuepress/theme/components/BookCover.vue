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
                solog: '一本免费多媒体电子书，从零开始学习前端技术，帮助10W人入门并进阶前端。',
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
@import './bookCover.stylus';
</style>