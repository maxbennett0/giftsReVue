<template>
  <!-- <div class="container-fluid">
    <section class="row p-2">
      <div class="col-md-3 col-4 card elevation-3">
        <div>
          <div @click="openGifts">
            <img class="img-card"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63277/gift-clipart-xl.png" alt="">
            <h1 class="text-center">Gift Tag</h1>
            <h6 class="text-center">Opened?</h6>
          </div>
        </div>
      </div>
    </section>
  </div> -->
  <section class="container-fluid">
    <div class="row">
      <GiftForm />
    </div>
    <div class="row">
      <GiftCard v-for="g in gifts" :key="g.id" :gift="g" />
    </div>
  </section>
</template>

<script>

import { logger } from "../utils/Logger.js";
import { onMounted, computed } from "vue"
import { giftsService } from "../services/GiftsService.js"
import Pop from "../utils/Pop.js";
import GiftCard from "../components/GiftCard.vue";
import { AppState } from "../AppState.js";
import GiftForm from "../components/GiftForm.vue";

export default {
  setup() {
    onMounted(() => {
      getGifts();
    });
    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        logger.log(error);
        Pop.error(error);
      }
    }
    return {
      gifts: computed(() => AppState.gifts)
    };
  },
  components: { GiftCard, GiftForm }
}
</script>

<style lang="scss">
.img-card {
  width: 100%;
  height: 35vh;
  object-fit: cover;
}
</style>
