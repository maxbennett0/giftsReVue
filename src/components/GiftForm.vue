<template>
  <form @submit.prevent="createGift">
    <input type="text" placeholder="image" v-model="editable.url">
    <input type="text" placeholder="name" v-model="editable.tag">
    <button class="fs-5">submit</button>
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { giftsService } from "../services/GiftsService.js";
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createGift() {
        try {
          await giftsService.createGift(editable.value)
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