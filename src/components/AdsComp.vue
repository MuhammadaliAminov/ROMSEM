

<script setup>

</script>

<template>
    <div class="ads">
        <div class="ads__container">
            <div class="ads__call">
                <div key:v-for="ssfLcscd in ssfLcsc" class="ads__call-txt">{{ ssfLcscd }}</div>
                <div class="ads__call-phone">
                    +996 705 188 955
                    +996 555 188 955</div>
                    <img src="../assets/img/icon/Часы.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.ads__container {
    max-width: 1117px;
    width: 100%;
    margin: 0 auto;
    padding: 0 13px;
}
</style>