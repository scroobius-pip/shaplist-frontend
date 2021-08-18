import { AddIcon, Button, Card, ChartIcon, EditIcon, IconButton, majorScale, MinusIcon, Pane, ShoppingCartIcon, Strong, Text } from 'evergreen-ui'
import React from 'react'
import Image from 'next/image'
import illustration from '../public/storefront_illustration.jpg'
import { Pa, He, PaStr, No } from 'components/Text'
import { DANGER, DARK_GREY, GREY, ORANGE, PRIMARY, WHITE } from 'config/colors'
import Link from 'next/link'
import { PriceBox } from 'components'



interface Props {
    product: Product
    editable?: () => any
}

const UnitIncrementDecrementButton = ({ value = 1 }) => {
    return <Pane background={GREY} display='flex' alignItems='center'>
        <IconButton appearance={'minimal'} icon={MinusIcon} />
        <Pane marginX={majorScale(1)}> <Pa>{value}</Pa></Pane>
        <IconButton appearance={'minimal'} icon={AddIcon} />
    </Pane>
}


interface DisplayCardProperty extends Product {
    onEditClicked?: () => any
}


const DisplayCard = ({ imageUrl, price, limitedStock, limitedTime, name, slug }: DisplayCardProperty) => {
    const unitsInCart = 0
    return <Card background={WHITE} border padding={majorScale(1)}>
        {imageUrl && <Pane position='relative' marginBottom={majorScale(2)} height={200} >
            <Image
                layout='fill'
                alt={name}
                src={imageUrl}
            />
        </Pane>}
        <Pane >
            <PaStr >{name}</PaStr>
            <Pane display='flex' marginTop={majorScale(1)} alignItems='center' width='100%' justifyContent='space-between'>
                <PriceBox {...{ limitedTime, limitedStock, price }} />
                <Pane paddingLeft={majorScale(1)}>
                    {unitsInCart > 0 ? <UnitIncrementDecrementButton value={unitsInCart} /> :
                        <Button size='large' color='white' appearance='primary' iconBefore={ShoppingCartIcon}>Add to Cart</Button>}
                </Pane>
            </Pane>

        </Pane>
    </Card>

}

const EditableCard = ({ name, limitedStock, limitedTime, price, onEditClicked, imageUrl }: DisplayCardProperty) => {
    return <Card background={WHITE} border padding={majorScale(1)}>
        {imageUrl && <Pane width='100%' height={200}>

            <Image
                src={imageUrl}
                objectFit='cover'
                // height={'100%'}

                // width={'100%'}
                layout='fill'
            />
        </Pane>}
        <Pane >
            <PaStr >{name}</PaStr>
            <PriceBox {...{ limitedStock, limitedTime, price }} />
            <Pane marginTop={majorScale(1)}>
                <Button onClick={onEditClicked} width='100%' size='large' color='white' appearance='primary' iconBefore={EditIcon}>Edit</Button>
            </Pane>
        </Pane>
    </Card>
}


const ProductCard = ({ product, editable }: Props) => {
    const Component = editable ? EditableCard : DisplayCard
    return <Component {...product} onEditClicked={editable} />
}
export default ProductCard