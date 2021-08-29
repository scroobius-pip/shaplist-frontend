import { AddIcon, Button, Card, EditIcon, IconButton, majorScale, MinusIcon, Pane } from 'evergreen-ui'
import React from 'react'
import { Pa, PaStr } from 'components/Text'
import { GREY, WHITE } from 'config/colors'
import Link from 'next/link'
import { PriceBox } from 'components'
import ProductImage from 'components/ProductImage'
import { AddToCartButton } from 'components/CartButton'



interface Props {
    product: Product
    editable?: () => any
}

interface DisplayCardProperty extends Product {
    onEditClicked?: () => any
}


const UnitIncrementDecrementButton = ({ value = 1 }) => {
    return <Pane background={GREY} display='flex' alignItems='center'>
        <IconButton appearance={'minimal'} icon={MinusIcon} />
        <Pane marginX={majorScale(1)}> <Pa>{value}</Pa></Pane>
        <IconButton appearance={'minimal'} icon={AddIcon} />
    </Pane>
}




const DisplayCard = ({ imageUrl, price, limitedStock, limitedTime, name, slug }: DisplayCardProperty) => {
    const unitsInCart = 0
    return <>
        <Link href={`${slug}`}>
            <Card height='100%' background={WHITE} border padding={majorScale(1)}>
                {imageUrl && <ProductImage imageUrl={imageUrl} alt={name} />}
                <Pane >
                    <PaStr >{name}</PaStr>
                    <Pane display='flex' marginTop={majorScale(1)} alignItems='center' width='100%' justifyContent='space-between'>
                        <PriceBox {...{ limitedTime, limitedStock, price }} />
                        <Pane paddingLeft={majorScale(1)}>
                            {unitsInCart > 0 ? <UnitIncrementDecrementButton value={unitsInCart} /> :
                                <AddToCartButton onClick={() => { }} />}
                        </Pane>
                    </Pane>

                </Pane>
            </Card>
        </Link>
        <style>

        </style>
    </>

}

const EditableCard = ({ name, limitedStock, limitedTime, price, onEditClicked, imageUrl }: DisplayCardProperty) => {
    return <Card background={WHITE} border padding={majorScale(1)} >
        {imageUrl && <ProductImage imageUrl={imageUrl} alt={name} />}
        <Pane >            <PaStr >{name}</PaStr>
            <PriceBox {...{ limitedStock, limitedTime, price }} />
            <Pane marginTop={majorScale(1)}>
                <Button onClick={onEditClicked} backgroundColor={GREY} width='100%' size='large' appearance='default' iconBefore={EditIcon}>Edit</Button>
            </Pane>
        </Pane>
    </Card>
}


const ProductCard = ({ product, editable }: Props) => {
    const Component = editable ? EditableCard : DisplayCard
    return <Pane borderRadius={majorScale(1)} boxShadow="0px 0px 10px 1px rgba(0,0,0,0.1)">
        <Component {...product} onEditClicked={editable} />
    </Pane>
}
export default ProductCard