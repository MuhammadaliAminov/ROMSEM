

<script setup>

</script>

<template>
    <div class="ads">
        <div class="ads__container">
            <div class="content  flex items-center">
                <div class="ads__call">
                    <div class="ads__call-txt text-lg text-center">Наш телефон</div>
                    <div class="ads__call-phone text-orange-400 text-center">
                        <div>+996 705 188 955</div>
                        <div>+996 555 188 955</div>
                    </div>
                    <div class="flex">
                        <img class="mr-1" src="../assets/img/icon/Часы.svg" alt="">
                        <div class="text-orange-400 text-stone-400">работаем с 10:00 до 00:00</div>
                    </div>
                </div>
                <div class="ads__call-body flex justify-between">
                    <div class="awdad text-lg ml-3  hidden sm:block">
                        <p class="gorod text-sm">Город:</p>
                        Бишкек
                    </div>
                    <ul class="ads__call-link flex">
                        <li class="mr-3 hover:text-orange-400 hidden sm:block"><a href="#!">Отзывы</a></li>
                        <li class="hover:text-orange-400 hidden sm:block"><a href="#!">Доставка и оплата</a></li>
                        <div class="search"><img class="" src="../assets/img/Group (11).svg" alt=""></div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ads__container {
    border-bottom: 1px solid #A4ACAD;
    max-width: 1169px;
    width: 100%;
    margin: 0 0 0 auto;
    padding: 0 13px;
}
@media screen and (max-width:1391px) {
    .ads__container {
        margin: 0 0 0 225px;
    }

}
@media screen and (max-width:772px) {
    .ads__container {
        margin: 0 0 0 auto;
    }
}
@media screen and (max-width:480px) {
    .ads__call {
        border-right: 0.5px solid #fff;
    }
}
.ads__call {
    padding-right: 15px;
    border-right: 0.5px solid #A4ACAD;
    height: 100%;
}

.gorod {
    color: #A4ACAD;
}

.search {
    width: 30px;
    height: 30px;
    margin-left: 69px;
    cursor: pointer;
}
.ads__call-body {
    flex-grow: 1;
}

</style>