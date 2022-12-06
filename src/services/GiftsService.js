import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { giftApi } from "./AxiosService.js"


class GiftsService {
  async getGifts() {
    const res = await giftApi.get('')
    logger.log('[GETTING GIFTS]', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async openGift(giftId) {
    const giftIndex = AppState.gifts.findIndex(g => g.id == giftId)
    const gift = AppState.gifts[giftIndex]
    gift.opened = true
    const res = await giftApi.put('/' + giftId, gift)
    AppState.gifts.splice(giftIndex, 1, res.data)
    logger.log(AppState.gifts)
  }

  async createGift(gift) {
    const res = await giftApi.post('', gift)
    logger.log(res.data)
    AppState.gifts.unshift(new Gift(gift))
  }
}

export const giftsService = new GiftsService()