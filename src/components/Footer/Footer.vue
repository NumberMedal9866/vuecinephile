<template>
  <footer class="footer">
      <ul class="footer-social">
        <li><a href="https://t.me/s/proweb"><img src="@/assets/images/tg.svg" alt=""></a></li>
        <!-- <li><a href="#"><img src="@/assets/images/wk.svg" alt=""></a></li> -->
        <!-- <li><a href="#"><img src="@/assets/images/fb.svg" alt=""></a></li> -->
        <li><a href="https://www.instagram.com/numbermedal986/"><img src="@/assets/images/inst.svg" alt=""></a></li>
        <li><a href="tiktok.com"><img src="@/assets/images/tok.svg" alt=""></a></li>
        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"><img src="@/assets/images/you.svg" alt=""></a></li>
        <!-- <li><a href="#"><img src="@/assets/images/tw.svg" alt=""></a></li> -->
        <!-- <li><a href="#"><img src="@/assets/images/in.svg" alt=""></a></li> -->
      </ul>
      <p>
        © 2022 CINEPHILE. Может содержать информацию, не предназначенную для несовершеннолетних<br>
        Данные получены с сайта themoviedb.org
      </p>
      <div class="footer-logo">
        <span>PROWEB</span>
        <span>курсы современных профессий</span>
      </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
    padding: 50px 0;
    background: #1F1F1F;
    .container{
        display: flex;
        flex-direction: column;
        // align-items: center;
        gap: 30px;
    }
    &-social{
        display: flex;
        justify-content: center;
        gap: 30px;
        a{
            color: white;
            font-size: 30px;
        }
        @media (max-width: 700px) {
          flex-wrap: wrap;
          gap: 10px;
        }
    }
    &-logo{
      display: flex;
      justify-content: center;align-items: center;
      color: #A5A5A5;
      flex-direction: column;
      margin-top: 50px;
      > span:first-of-type{
        font-size: 45px;
        font-weight: 700;
      }
      > span:last-of-type{
        font-size: 13px;
      }
    }
    p{
        color: #A5A5A5;
        font-size: 20px;
        @media (max-width: 1250px) {
          text-align: center;
          font-size: 12px;
          max-width: 500px;
          margin: 0 auto;
          margin-top: 20px;
          padding-left: 0;
        }
        padding-left: 50px;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        line-height: 30px;
    }
}
</style>