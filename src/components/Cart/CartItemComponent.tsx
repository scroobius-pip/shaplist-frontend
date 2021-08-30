import { AddToCartButton } from 'components/CartButton'
import PriceBox from 'components/PriceBox'
import UnitQuantityButton from 'components/ProductCard/UnitQuantityButton'
import { ORANGE, SHADOW, WHITE } from 'config/colors'
import { Card, Pane, majorScale } from 'evergreen-ui'
import React from 'react'
import formatRelativeTime from 'utils/formatRelativeTime'
import { He, PaStr, Su } from '../Text'


interface Props {
    item: CartItem
}

const CartItemComponent = ({ item: { product, quantity, epochExpiry } }: Props) => {

    return <Card height='100%' border padding={majorScale(1)}>
        <Pane >
            <PaStr >{product.name}</PaStr>
            <Pane display='flex' marginTop={majorScale(1)} alignItems='center' width='100%' justifyContent='space-between'>
                <PriceBox price={product.price} />
                <Pane paddingLeft={majorScale(1)}>
                    {quantity > 0 ? <UnitQuantityButton value={quantity} /> :
                        <AddToCartButton onClick={() => { }} />}
                </Pane>
            </Pane>
            {epochExpiry && <PaStr>Checkout <PaStr color={ORANGE}>{formatRelativeTime(epochExpiry)}</PaStr> to secure your order</PaStr>}
        </Pane>

    </Card>
}

export default CartItemComponent
