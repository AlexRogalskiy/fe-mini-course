<template>
    <div class="footer-wrap">
        <div class="content">
            <div class="qrcode"></div>
            <div class="des-box">
                <div class="title">Hi，我是素燕，帮助 10W 人入门并进阶前端</div>
                <div class="title">这是我的公众号，微信扫码关注我，和我一起成长</div>
                <div class="copyright">Copyright © 2020 素燕</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer-bar',
    props: {
        msg: String
    }
};
</script>

<style lang="stylus">
.footer-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    margin: 0 auto;
    background-color: #1f2022;
    .content {
        display: flex;
        height: 120px;
        margin: 0 auto;
        .qrcode {
            display: inline-block;
            width: 120px;
            height: 120px;
            background-image: url(//s1.ax1x.com/2020/10/10/06VvOx.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 0 0;
        }
        .des-box {
            display: inline-block;
            height: 100%;
            margin-left: 20px;
            .title {
                color: #aaa;
                font-size: 18px;
                padding: 8px 0;
            }
            .copyright {
                color: #aaa;
                font-size: 14px;
                padding-top: 8px;
            }
        }
    }
}
</style>