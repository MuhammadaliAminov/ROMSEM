<template>
  <footer class="flex">
    <div class="container">
      <div class="col">
        <ul>
          <li v-for="footerLinks in footerLink" :key="footerLinks">
            <a href="#">{{ footerLinks.name }}</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <p><b>Введите номер</b></p>
        <p>+996 (__) ___ __ __</p>
        <p>Выберите удобный мессенджер для общения</p>
        <div class="col_images">
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div class="col">
        <p>Тел:+996 705 188 955</p>
        <p>Тел:+996 705 188 955</p>
        <p>Адрес:Бакаева 126</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const footerLink = ref([
  {
    name: "О компании",
  },
  {
    name: "Доставка и оплата",
  },
  {
    name: "Лента материалов",
  },
  {
    name: "Политика возврата",
  },
]);
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  padding: 0 15px;
}
.col {
  position: relative;
  margin-right: 174px;
}

.col::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 247px;
  background: #a4acad;
}
.col:first-of-type::before {
  width: 0;
}
.col ul li {
  width: 100%;
  margin-bottom: 20px;
}
</style>
