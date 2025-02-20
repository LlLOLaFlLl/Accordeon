<script setup>
import { ref } from "vue";

const items = [
  { id: 1, title: "MZLFF", description: "Илья Иванович Коряков, более известный как Илья Мазеллов или mzlff — российский блогер, стример, музыкант, участник рэп-баттлов. Начал вести прямые трансляции на Twitch в 2018 году и почти сразу обрёл широкую популярность. В 2020 году его пригласили в сообщество стримеров Twitch — «89SQUAD».", image: "https://i.pinimg.com/736x/51/39/f5/5139f54f7726c849fd80b99db6fd40e6.jpg" },
  { id: 2, title: "BRATISHKINOFF", description: "Братишкин (настоящее имя — Владимир Сергеевич Семенюк) — российский видеоблогер, стример и летсплейщик. Владелец YouTube-канала «Bratishkin» и Twitch-канала «bratishkinOFF». Известен тем, что ведёт трансляции своих игр и общения в прямом эфире («стримы») с помощью сервиса Twitch.", image: "https://i.pinimg.com/originals/70/72/58/707258e5b09c454dbe47057e66f8e4ff.jpg" },
  { id: 3, title: "DRAKEOFFC", description: "drakeoffc — Денис Коломиец, российский Twitch-стример и исполнитель из Санкт-Петербурга. Карьера стримера началась с прохождения любимых игр, таких как Counter-Strike и Standoff. Наибольшую известность ему принёс Братишкин, который выпускал реакции на видео Дениса.", image: "https://i.pinimg.com/736x/1b/d8/1a/1bd81aa0d913a08f80c36db643185cde.jpg" },
  { id: 4, title: "T2X2", description: "T2x2 (настоящее имя — Антон Татыржа) — российский твич-стример из Москвы. Родился 26 марта 1996 года. Известен на платформе Twitch, где у него более 542 тысяч подписчиков. Известен не только своими игровыми навыками, но и умением создавать атмосферу, которая привлекает зрителей. Активно взаимодействует с аудиторией: проводит розыгрыши, отвечает на вопросы и делится своими мыслями.", image: "https://i.pinimg.com/736x/bd/a9/1a/bda91a3aed9db2283741562b0536b7d6.jpg" }
];

const activeId = ref(null);

const toggleAccordion = (id) => {
  activeId.value = activeId.value === id ? null : id;
};
</script>

<template>
  <div class="accordion">
    <div 
      v-for="item in items" 
      :key="item.id" 
      class="accordion-item" 
      :class="{ active: activeId === item.id }"
      @click="toggleAccordion(item.id)"
    >
      <div class="accordion-content">
        <img :src="item.image" alt="image" class="accordion-image" />
        <div class="caption">{{ item.title }}</div>
        <p v-if="activeId === item.id" class="description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.accordion {
  display: flex;
  width: 80vw;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  background: #222;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.accordion-item {
  flex: 1;
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: flex 0.4s ease-in-out, background 0.4s ease-in-out;
  border: 2px solid #333;
  position: relative;
  overflow: hidden;
}

.accordion-item.active {
  flex: 3;
  background: #252d32;
}

.accordion-content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
}

.accordion-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out, border-radius 0.4s ease-in-out, top 0.4s ease-in-out, left 0.4s ease-in-out;
  border-radius: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.accordion-item.active .accordion-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 10px;
  left: 10px;
}

.accordion-item:not(.active) .accordion-image {
  width: 100%;
  height: 100%;
  border-radius: 0;
  top: 0;
  left: 0;
}

.caption {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
  transition: opacity 0.4s ease-in-out;
  z-index: 3;
}

.accordion-item.active .caption {
  opacity: 0;
}

.description {
  position: absolute;
  top: 120px;
  left: 10px;
  right: 10px;
  color: white;
  font-size: 1rem;
  font-weight: normal;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  z-index: 1;
}

.accordion-item.active .description {
  opacity: 1;
  transform: translateY(0);
}
</style>
