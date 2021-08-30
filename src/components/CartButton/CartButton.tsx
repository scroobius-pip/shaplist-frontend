import { No, Pa, PaStr } from 'components/Text'
import { GREY, ORANGE, PRIMARY } from 'config/colors'
import { AddIcon, Button, CreditCardIcon, Icon, majorScale, MinusIcon, Pane, ShoppingCartIcon } from 'evergreen-ui'
import React from 'react'
import formatRelativeTime from 'utils/formatRelativeTime'
import AddToCartButton from './AddToCartButton'
import ProductQuantityChanger from './ProductQuantityChanger'

interface Props {
    product: Product
}

const cartItemMock = (product: Product): CartItem => {
    return {
        product,
        quantity: 10,
        epochExpiry: Date.now() + (2 * 60 * 1000)
    }

}


const CartButton = ({ product }: Props) => {
    const { quantity: unitsInCart, epochExpiry } = cartItemMock(product)

    const incrementCart = (id: string) => { }
    const decrementCart = (id: string) => { }

    return <Pane >
        {!unitsInCart ?
            <AddToCartButton onClick={() => incrementCart(product.slug)} /> :
            <Pane padding={majorScale(1)} border borderRadius={majorScale(1)} display='grid' gap={majorScale(1)} textAlign='center'>
                <ProductQuantityChanger
                    onSubtract={() => decrementCart(product.slug)}
                    onAdd={() => incrementCart(product.slug)}
                    units={unitsInCart} />
                <Pa color='muted'>Added To Cart</Pa>
                {epochExpiry && <PaStr>Checkout <PaStr color={ORANGE}>{formatRelativeTime(epochExpiry)}</PaStr> to secure your order</PaStr>}
                <Button borderRadius={majorScale(1)} width='100%' onClick={() => { }} size='large' color='white' backgroundColor={PRIMARY} appearance='primary' iconAfter={ShoppingCartIcon}>Checkout</Button>

            </Pane>

        }
    </Pane>
}

export default CartButton