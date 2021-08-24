import ProductForm from 'components/ProductForm'
import React from 'react'

export interface EditProductProps {
    product: Product
    onSubmit: () => any
}



const EditProduct = (props: EditProductProps) => {
    return <ProductForm
        {...props}
    />
}

export default EditProduct