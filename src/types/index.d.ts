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
        unitsRemainingInGroup: number
        unitPerGroup: number
        unitDescription: string
    }
    name: string
    category: string
    subCategory: string
}

interface Business {
    cities: string[]
    business_name: string
    description: string
    extras: string[]
    facebook: string
    instagram: string
    twitter: string
    contact_type: 'phone' | 'whatsapp'
    phone_no: string
    business_image_url: string
}

interface CartItem {
    product: Product
    epochExpiry?: number
    quantity: number
}