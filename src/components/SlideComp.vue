<script setup>

</script>



<template>
    <div class="container">
        <div class="slider">
            <li class="slider__item">
                <p class="slider-item__title">"Филодельфия и лосось"</p>
                <p class="slider-item__subTitle">1260 грамм 36 кусочек</p>
                <p class="slider-item__oldPrice">1599 COM</p>
                <p class="slider-item__newPrice">599COM</p>
                <a class="slider-item__btn" href="#!">Хочу!</a>
                <div class="img"><img src="../assets/img/sushi.jpg" alt="sushi"></div>
            </li>
            <li class="slider__item">
                <p class="slider-item__title">"Филодельфия и лосось"</p>
                <p class="slider-item__subTitle">1260 грамм 36 кусочек</p>
                <p class="slider-item__oldPrice">1599 COM</p>
                <p class="slider-item__newPrice">599COM</p>
                <a class="slider-item__btn" href="#!">Хочу!</a>
                <div class="img"><img src="../assets/img/sushi.jpg" alt="sushi"></div>
            </li>
            <li class="slider__item">
                <p class="slider-item__title">"Филодельфия и лосось"</p>
                <p class="slider-item__subTitle">1260 грамм 36 кусочек</p>
                <p class="slider-item__oldPrice">1599 COM</p>
                <p class="slider-item__newPrice">599COM</p>
                <a class="slider-item__btn" href="#!">Хочу!</a>
                <div class="img"><img src="../assets/img/sushi.jpg" alt="sushi"></div>
            </li>
            <li class="slider__item">
                <p class="slider-item__title">"Филодельфия и лосось"</p>
                <p class="slider-item__subTitle">1260 грамм 36 кусочек</p>
                <p class="slider-item__oldPrice">1599 COM</p>
                <p class="slider-item__newPrice">599COM</p>
                <a class="slider-item__btn" href="#!">Хочу!</a>
                <div class="img"><img src="../assets/img/sushi.jpg" alt="sushi"></div>
            </li>
            <li class="slider__item">
                <p class="slider-item__title">"Филодельфия и лосось"</p>
                <p class="slider-item__subTitle">1260 грамм 36 кусочек</p>
                <p class="slider-item__oldPrice">1599 COM</p>
                <p class="slider-item__newPrice">599COM</p>
                <a class="slider-item__btn" href="#!">Хочу!</a>
                <div class="img"><img src="../assets/img/sushi.jpg" alt="sushi"></div>
            </li>
        </div>
    </div>
</template>


<style scoped>

.slider .slick-list{
    overflow: hidden;
}

.slider .slick-dots {
    display: flex;
    justify-content: center;
}

.slider .slick-dots li{
    list-style: none;
    margin: 0 12px;
}

.slider .slick-dots li.slick-active button{
    width: 10px;
    height: 10px;
    background-color: #FF9846;
}

.slider .slick-dots button{
    font-size: 0;
    width: 8px;
    height: 8px;
    background-color: #A4ACAD;
    border: 0;
    border-radius: 50%;
}

/* ------------- Slick ------------- */


.slider-item p{
    position: absolute;
}

.slider-item {
    position: relative;
    font-family: Arial, sans-serif;
}

.slider-item__title {
    position: absolute;
    font-size: 24px;
    right: 10px;
    top: 20px;
    font-weight: 700;
}

.slider-item__subTitle {
    position: absolute;
    font-size: 18px;
    color: #FF9846;
    right: 10px;
    top: 60px;
}

.slider-item__oldPrice {
    position: absolute;
    right: 10px;
    top: 160px;
    font-weight: 700;
    font-size: 24px;
}

.slider-item__oldPrice::before{
    content: '';
    position: absolute;
    height: 3px;
    width: 105%;
    bottom: 13px;
    background-color: #FF9846;
    transform: rotate(-13deg);
}

.slider-item__newPrice {
    position: absolute;
    right: 10px;
    top: 230px;
    font-weight: 700;
    font-size: 36px;
}

.slider-item__btn {
    position: absolute;
    text-decoration:none;
    background: #FF9846;
    text-align: center;
    padding-top: 5px;
    font-size: 36px;
    color: #fff;
    width: 230px;
    height: 50px;
    right: 30px;
    bottom: 20px;
}

.slider-item__img{
    max-width: 950px;
    max-height: 470px;
}

.slider-item__img img{
    height: 100%;
    width: auto;
    overflow: hidden;
}
</style>