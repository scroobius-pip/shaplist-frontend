const productMocks: Product[] = [
    {
        name: 'Irish Potato (10kg)',
        slug: '/irish-pototo-10kg',

        imageUrl: '',

        // limitedTime: {
        //     epochStart: 1629242464441,
        //     epochExpiring: 1629242464441
        // }
        category: '',
        subCategory: '',
        groupBuying: {
            unitsRemainingInGroup: 5,
            unitDescription: 'Half basket',
            unitPerGroup: 10
        }
    },

    {
        name: 'Meatpie',
        slug: '/irish-pototo-10kg',

        imageUrl: '',
        limitedStock: {
            started: 20,
            remaining: 10
        },
        category: '',
        subCategory: ''
    },
    {
        name: 'Meatpie',
        slug: '/irish-pototo-10kg',

        imageUrl: '',

        category: '',
        subCategory: ''
    },
    {
        name: 'Meatpie',
        slug: '/irish-pototo-10kg',

        imageUrl: '',
        price: {
            currency: 'NGN',
            value: 350
        },
        category: '',
        subCategory: ''
    },
    {
        name: 'Clothes',
        slug: '/irish-pototo-10kg',
        price: {
            currency: 'NGN',
            value: 350
        },

        // imageUrl: '',
        limitedStock: {
            started: 20,
            remaining: 8
        },
        // limitedTime: {
        //     epochStart: 1629413432000,
        //     epochExpiring: 1629499832000
        // }
        category: '',
        subCategory: ''
    },
    {
        name: 'Clothes',
        slug: '/irish-pototo-10kg',
        price: {
            currency: 'NGN',
            value: 350
        },

        imageUrl: '/food_background.jpg',
        limitedStock: {
            started: 20,
            remaining: 10
        },
        // limitedTime: {
        //     epochStart: 1629307368000,
        //     epochExpiring: 1629413432000
        // }
        category: '',
        subCategory: ''
    },
    {
        name: 'Clothes',
        slug: '/irish-pototo-10kg',
        price: {
            currency: 'NGN',
            value: 350
        },

        imageUrl: '/food_background.jpg',
        limitedStock: {
            started: 20,
            remaining: 2
        },
        limitedTime: {
            epochStart: 1629307368000,
            epochExpiring: 1629413432000
        },
        category: '',
        subCategory: ''
    },
]

export default productMocks