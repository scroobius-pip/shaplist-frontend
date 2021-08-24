interface Product {
    slug: string
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
    groupBuying?: {
        personCount: number
        unitDescription: string
    }
    name: string
    category: string
    subCategory: string
}
