import { defineCollection } from 'astro:content'
import { cldAssetsLoader } from 'astro-cloudinary/loaders'

const stickers = defineCollection({
  loader: cldAssetsLoader({
    limit: 6,
    folder: 'halloween-images/examples',
    context: true,
  }),
})

export const collections = {
  stickers,
}
