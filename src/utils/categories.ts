
interface Categories {
    [id: string]: {
        name: string,
        subcategories: {
            [id: string]: string
        }
    }
}


const Categories: Categories = {
    'fn': {
        subcategories: {
            fnot: 'Other',
            fu: 'Fruits',
            nu: 'Nuts'
        }, name: 'Fruits & Nuts'
    },
    'be': {
        subcategories: {
            beot: 'Other'
        }, name: 'Beverages'
    },
    'sn': {
        subcategories: {
            snot: 'Other'
        }, name: 'Snacks'
    },
    'ot': {
        subcategories: {
            otot: 'Other'
        }, name: 'Other'
    },
}


export default Categories