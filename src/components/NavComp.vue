<script setup>
import { ref } from 'vue'

const navLink = ref([
    {
        img: new URL('../assets/img/icon/pizza.svg', import.meta.url),
        name: 'Пицца'
    },
    {
        img: new URL('../assets/img/icon/Вок.svg ', import.meta.url),
        name: 'WOK'
    },
    {
        img: new URL('../assets/img/icon/rolli.svg', import.meta.url),
        name: 'Роллы'
    },
    {
        img: new URL('../assets/img/icon/sushi.svg', import.meta.url),
        name: 'Суши'
    },
    {
        img: new URL('../assets/img/icon/salat.svg', import.meta.url),
        name: 'Салаты'
    },
    {
        img: new URL('../assets/img/icon/supi.svg', import.meta.url),
        name: 'Супы'
    },
    {
        img: new URL('../assets/img/icon/Page-1.svg', import.meta.url),
        name: 'Корн доги'
    },
    {
        img: new URL('../assets/img/icon/napitki.svg', import.meta.url),
        name: 'Напитки'
    },
    {
        img: new URL('../assets/img/icon/aksiya.svg', import.meta.url),
        name: 'Акции'
    },
]);

</script>
<template>
    <nav class="nav">
        <div class="nav__content ml-16">
            <div class="nav__head">
                <div class="nav__logo">
                    <img src="../assets/img/icon/logo.svg" alt="">
                </div>
                <div class="nav__title">
                    Romsem
                </div>
            </div>
            <div class="nav__body flex">
                <ul class="nav__list  flex flex-col gap-y-8">
                    <li class="nav__item flex">
                        <img src="../assets/img/icon/Сеты.svg" alt="">
                        <a href="#!" class="nav__link ml-5">Сеты</a>
                    </li>
                    <li v-for="navLinks in navLink" class="nav__item flex text-center">
                        <img :src="navLinks.img" alt="">
                        <a href="#!" class="nav__link pl-3">{{ navLinks.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
}
@media screen and (max-width:772px) {
    .nav {
        visibility: hidden;
    }
}
 .nav__icon {
    width: 30px;
    height: 30px;
    object-fit: cover;
    object-position: center;
}

.nav__title {
    font-weight: 300;
    font-size: 30px;
    margin-bottom: 61px;
    margin-right: 60px;
}

.nav__head {
    position: relative;
}

.nav__head::before {
    content: '';
    position: absolute;
    width: 180px;
    height: 1px;
    background: #A4ACAD;
    top: 172px;
    left: -33px;
}

</style>