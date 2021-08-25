import ProductForm from 'components/ProductForm'
import React from 'react'

export interface AddProductProps {
    onSubmit: () => any
}



const AddProduct = (props: AddProductProps) => {
    return <ProductForm
        {...props}
    />
}

export default AddProduct