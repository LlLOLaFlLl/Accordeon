<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([
      {
        id: 1,
        image: 'https://i.pinimg.com/736x/51/39/f5/5139f54f7726c849fd80b99db6fd40e6.jpg',
        caption: 'MZLFF',
        description: 'Илья Иванович Коряков, более известный как Илья Мазеллов или mzlff — российский блогер, стример, музыкант, участник рэп-баттлов. Начал вести прямые трансляции на Twitch в 2018 году и почти сразу обрёл широкую популярность. В 2020 году его пригласили в сообщество стримеров Twitch — «89SQUAD».',
        active: false
      },
      {
        id: 2,
        image: 'https://i.pinimg.com/originals/70/72/58/707258e5b09c454dbe47057e66f8e4ff.jpg',
        caption: 'BRATISHKINOFF',
        description: 'Братишкин (настоящее имя — Владимир Сергеевич Семенюк) — российский видеоблогер, стример и летсплейщик. Владелец YouTube-канала «Bratishkin» и Twitch-канала «bratishkinOFF». Известен тем, что ведёт трансляции своих игр и общения в прямом эфире («стримы») с помощью сервиса Twitch.',
        active: false
      },
      {
        id: 3,
        image: 'https://i.pinimg.com/736x/1b/d8/1a/1bd81aa0d913a08f80c36db643185cde.jpg',
        caption: 'DRAKEOFFC',
        description: 'drakeoffc — Денис Коломиец, российский Twitch-стример и исполнитель из Санкт-Петербурга. Карьера стримера началась с прохождения любимых игр, таких как Counter-Strike и Standoff. Наибольшую известность ему принёс Братишкин, который выпускал реакции на видео Дениса.',
        active: false
      },
      {
        id: 4,
        image: 'https://i.pinimg.com/736x/bd/a9/1a/bda91a3aed9db2283741562b0536b7d6.jpg',
        caption: 'T2X2',
        description: 'T2x2 (настоящее имя — Антон Татыржа) — российский твич-стример из Москвы. Родился 26 марта 1996 года. Известен на платформе Twitch, где у него более 542 тысяч подписчиков. Известен не только своими игровыми навыками, но и умением создавать атмосферу, которая привлекает зрителей. Активно взаимодействует с аудиторией: проводит розыгрыши, отвечает на вопросы и делится своими мыслями.',
        active: false
      },
      {
        id: 5,
        image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
        caption: 'STINT',
        description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
        active: false
      },
      // {
      //   id: 6,
      //   image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
      //   caption: 'STINT',
      //   description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
      //   active: false
      // },
      // {
      //   id: 7,
      //   image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
      //   caption: 'STINT',
      //   description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
      //   active: false
      // },
      // {
      //   id: 8,
      //   image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
      //   caption: 'STINT',
      //   description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
      //   active: false
      // },
      // {
      //   id: 9,
      //   image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
      //   caption: 'STINT',
      //   description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
      //   active: false
      // }
    ]);

    const toggleItem = (selectedItem) => {
      items.value.forEach(item => {
        item.active = item.id === selectedItem.id ? !item.active : false;
      });
    };

    return {
      items,
      toggleItem
    };
  }
};
</script>

<template>
  <div class="accordion">
    <div 
      v-for="item in items" 
      :key="item.id" 
      :class="['accordion__item', { active: item.active }]" 
      @click="toggleItem(item)"
    >
      <div class="accordion__content">
        <img :src="item.image" :alt="item.caption" />
        <p class="accordion__caption">{{ item.caption }}</p>
        <p class="accordion__description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'Accordion';
</style>
