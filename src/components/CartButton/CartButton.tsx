import { Pa } from 'components/Text'
import { GREY } from 'config/colors'
import { AddIcon, Icon, majorScale, MinusIcon, Pane } from 'evergreen-ui'
import React from 'react'
import AddToCartButton from './AddToCartButton'
import ProductQuantityChanger from './ProductQuantityChanger'

interface Props {
    product: Product
}


const CartButton = ({ product }: Props) => {
    const unitsInCart = 1
    const itemCartExpiry = 0
    const addToCart = (id: string) => { }

    return <Pane>
        {!unitsInCart ?
            <AddToCartButton onClick={() => addToCart(product.slug)} /> :
            <Pane>
                <ProductQuantityChanger units={unitsInCart} />
            </Pane>}
    </Pane>
}

export default CartButton