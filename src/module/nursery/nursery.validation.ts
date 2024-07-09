import { z } from "zod";

const nurseryValidationSchema = z.object({
    body:z.object({
        category: z.string(),
        title: z.string(),
        price: z.number(),
        description: z.string(),
        rating: z.number(),
        image: z.string(),
        brand: z.string()
      })
})


export default nurseryValidationSchema;