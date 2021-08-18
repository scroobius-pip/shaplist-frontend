interface Product {
    slug: string
    unitsInCart: number
    imageUrl?: string
    price?: {
        currency: string
        value: number
    }
    limitedStock?: {
        remaining: number
        started: number
    }
    limitedTime?: {
        epochStart: number
        epochExpiring: number
    }
    name: string
}
