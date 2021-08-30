import ContactForm from 'components/ContactForm'
import { ProductGrid } from 'components/ProductCard'
import { PRIMARY, WHITE } from 'config/colors'
import { Card, Pane, majorScale, ShoppingCartIcon, Button, TextInputField } from 'evergreen-ui'
import { useSteps } from 'hooks'
import React from 'react'
import productMocks from 'utils/productMocks'
import { He, Pa, PaStr, Su } from '../Text'
import CartItemComponent from './CartItemComponent'



const Cart = () => {
    const { Steps, back, forward } = useSteps()
    return <Steps>
        <Pane padding={majorScale(2)} background={WHITE} display='grid' gap={majorScale(3)}>
            <Pane>
                <He>Cart</He>
                <Pa>2 Items</Pa>

            </Pane>

            <Pane display='grid' gap={majorScale(1)}>
                <CartItemComponent
                    item={{
                        product: productMocks[0],
                        quantity: 2,
                    }}

                />
                <CartItemComponent
                    item={{
                        product: productMocks[1],
                        quantity: 10,
                    }}

                />
                <CartItemComponent
                    item={{
                        product: productMocks[3],
                        quantity: 2,
                        epochExpiry: Date.now() + (60 * 60 * 1000)
                    }}

                />
            </Pane>
            <Pane >

                <Pa>Total</Pa>
                <He>NGN 12000</He>
            </Pane>
            <Button onClick={forward} size='large' iconBefore={ShoppingCartIcon} appearance='primary' background={PRIMARY} width='100%'>
                Complete Order
            </Button>
        </Pane>
        <Pane padding={majorScale(2)} background={WHITE}>
            <Pane textAlign='center'>
                <Su>Contact Details</Su>
                <Pa>We need this information to fulfill your order</Pa>
            </Pane>
            <Pane marginTop={majorScale(2)} >
                <ContactForm onSubmit={(state) => { console.log(state) }} />
                <Button width='100%' textAlign='center' marginTop={majorScale(1)} appearance="minimal" size='large' onClick={back}>
                    Back
                </Button>
            </Pane>
        </Pane>
    </Steps>
}


export default Cart