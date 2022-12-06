<template>
  <div class="col-md-4 col-2 card elevation-3">
    <div>
      <div class="selectable" @click="openGift">
        <img v-if="(gift.opened == true)" class="img-card" :src="gift.url" alt="">
        <img v-else class="img-card"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63277/gift-clipart-xl.png" alt="">
        <h1 class="text-center">{{ gift.tag }}</h1>
        <h6 class="text-center">{{ gift.opened }}</h6>
      </div>
    </div>
  </div>
</template>


<script>
// import { AppState } from '../AppState';
// import { computed, reactive, onMounted } from 'vue';
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
export default {
  props: { gift: { type: Gift } },
  setup(props) {
    return {
      async openGift() {
        try {
          await giftsService.openGift(props.gift.id)
        } catch (error) {
          logger.log(error)
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>