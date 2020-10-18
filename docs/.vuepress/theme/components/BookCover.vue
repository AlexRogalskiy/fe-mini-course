<template>
    <div class="book-info">
        <a :href="bookLink">
            <div class="cover-wrap">
                <div class="top">
                    <div class="logo"></div>
                    <p class="name">{{ book.name }}</p>
                    <p class="des">{{ book.solog }}</p>
                    <p class="author">作者 {{ book.author }}</p>
                </div>
                <div class="mid content">自我发《前端小课》第一篇文章时，已经过去了整整一年，到目前为止已发 200 篇原创文章，到年底估计能写 300 篇。写《前端小课》的初衷很简单，帮助想要学习前端的朋友找到一个方向，不至于想入门前端不知道学什么、如何学。我觉得趁自己还年轻，要花更多的时间来投资自己。写作本来对于我来说是一种爱好，我并没有觉得这个过程很累，反而觉得很轻松。写技术文不仅可以提升写作技能，还能够提升技术水平。技术水平的高低直接决定了你在职场中值多少钱。所以，写作这件事情，很值得去做。明明用心良苦写的文章，最终发现阅读只有 100+，心灰意冷。大多数人选择起一个「响亮」的标题，这样虽然阅读量上去了，但是对于读者来说，可能这篇文章并不是他想要看的。所以我的做法是通过标题+封面图+描述来表达出这篇文章的核心内容，看不看由你，我的核心是写好写完前端小课。</div>
                <div class="bottom content">到目前为止已发 200 篇原创文章，到年底估计能写 300 篇。</div>
            </div>
        </a>
        <div class="book-des-wrap">
            <p class="book-title">{{ book.name }}</p>
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
                solog: '你的编程启蒙老师，从学前端开始',
                author: '@素燕',
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
.book-info {
    position: relative;
    display: flex;
    justify-self: center;
    align-items: center;
    .cover-wrap {
        position: relative;
        margin-left: 1.875rem;
        width: 21rem;
        height: 500px;
        flex-shrink: 0;
        cursor: pointer;
        &::before {
            content ""
            position absolute
            width 10px
            height 437px
            top 62px
            z-index 9
            border-radius 2px
            left -6px
            transition 2s ease
            background linear-gradient(to right, #9c2e2b 0%, #cc4b48 12%, #9c2e2b 25%, #cc4b48 37%, #9c2e2b 50%, #cc4b48 62%, #9c2e2b 75%, #cc4b48 87%, #9c2e2b 100%)
        }
        .ji-line {
            position: absolute;
            left: -0.375rem;
            bottom: 0;
            width: 0.625rem;
            height: 27.375rem;
            z-index: 6;
            background-color: #ccc;
            border-radius: 0.3125rem;
        }
        .content {
            color: rgba(0, 0, 0, .1);
            font-size: 1.25rem;
        }
        .mid {
            box-sizing: border-box;
            position: absolute;
            bottom: 0.75rem;
            left: -0.375rem;
            width: 20rem;
            height: 26.875rem;
            background-color: #eee;
            padding: 0.625rem 0;
            z-index: 3;
            transform: skewY(-2deg);
            border-left: 0.25rem solid #eee;
            border-top-right-radius: 0.3125rem;
            border-bottom-right-radius: 0.3125rem;
            overflow: hidden;
        }
        .bottom {
            box-sizing: border-box;
            position: absolute;
            bottom: 1.375rem;
            left: 0;
            width: 19.375rem;
            height: 26.875rem;
            background-color: #ddd;
            border-top-right-radius: 0.3125rem;
            border-bottom-right-radius: 0.3125rem;
            z-index: 1;
            transform: skewY(-5deg);
            overflow: hidden;
        }
        .top {
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 290px;
            height: 430px;
            background-color: #fff;
            border-top-right-radius: 0.3125rem;
            border-bottom-right-radius: 0.3125rem;
            z-index: 5;
            transform: skewY(4deg);
            padding: 0.125rem 0;
            font-family: PingFangSC-Medium;
            overflow: hidden;
            .logo {
                width: 18.75rem;
                height: 15rem;
                margin-top: 1.875rem;
                background-image: url(//s1.ax1x.com/2020/10/11/0ct9oQ.png);
                background-position: top center;
                background-repeat: no-repeat;
                background-size: 17.5rem auto;
            }
            .name {
                font-weight: 700;
                font-size: 1.875rem;
                text-align: center;
                color: #000;
                margin-top: 0;
            }
            .des {
                font-size: 1.0625rem;
                color: #666;
                margin-left: 1.25rem;
                text-align: left;
            }
            .author {
                font-size: 1.0625rem;
                color: #666;
            }
        }
    }
    .book-des-wrap {
        margin-left: 3rem;
        text-align: left;
        .book-title {
            font-size: 2.5rem;
            font-family: PingFangSC-Medium;
            color: #fff;
            margin: 5rem 0 0 0;
        }
        .des {
            font-size: 1.25rem;
            color: #ccc;
            letter-spacing: 0.0625rem;
            font-family: PingFangSC-Medium;
        }
    }
}
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